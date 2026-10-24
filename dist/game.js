var yp=0,Uf=1,_p=2;var Dr=1,bp=2,No=3,xs=0,Vn=1,bn=2,oi=0,Fo=1,os=2,Bf=3,Of=4,Mp=5;var Nr=100,Sp=101,wp=102,Tp=103,Ep=104,Ap=200,Rp=201,Cp=202,Pp=203,kf=204,zf=205,Ip=206,Lp=207,Dp=208,Np=209,Fp=210,Up=211,Bp=212,Op=213,kp=214,Rc=0,Cc=1,Pc=2,yo=3,Ic=4,Lc=5,Dc=6,Nc=7,Hf=0,zp=1,Hp=2,as=0,Vf=1,Wf=2,Gf=3,Xf=4,qf=5,Yf=6,al=7;var Zf=300,ar=301,Fr=302,fu=303,du=304,ll=306,Fs=1e3,ds=1001,Fc=1002,An=1003,Vp=1004;var cl=1005;var kt=1006,pu=1007;var In=1008;var $n=1009,Kf=1010,$f=1011,Uo=1012,mu=1013,ls=1014,Oi=1015,Cn=1016,gu=1017,vu=1018,Bo=1020,Jf=35902,jf=35899,Qf=1021,e0=1022,Jn=1023,ps=1026,lr=1027,cr=1028,xu=1029,ur=1030,yu=1031;var _u=1033,ul=33776,hl=33777,fl=33778,dl=33779,bu=35840,Mu=35841,Su=35842,wu=35843,Tu=36196,Eu=37492,Au=37496,Ru=37488,Cu=37489,pl=37490,Pu=37491,Iu=37808,Lu=37809,Du=37810,Nu=37811,Fu=37812,Uu=37813,Bu=37814,Ou=37815,ku=37816,zu=37817,Hu=37818,Vu=37819,Wu=37820,Gu=37821,Xu=36492,qu=36494,Yu=36495,Zu=36283,Ku=36284,ml=36285,$u=36286;var Pa=2300,Uc=2301,Tc=2302,wf=2303,Tf=2400,Ef=2401,Af=2402;var Wp=3200;var Ju=0,Gp=1,ai="",qt="srgb",Ia="srgb-linear",La="linear",Wt="srgb";var Ec=7680;var Xp=519,qp=512,Yp=513,Zp=514,ju=515,Kp=516,$p=517,Qu=518,Jp=519,jp=35044;var t0="300 es",is=2e3,_o=2001;function bv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qp(){let i=bo("canvas");return i.style.display="block",i}var Od={},Mo=null;function n0(...i){let e="THREE."+i.shift();Mo?Mo("log",e,...i):console.log(e,...i)}function em(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ct(...i){i=em(i);let e="THREE."+i.shift();if(Mo)Mo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=em(i);let e="THREE."+i.shift();if(Mo)Mo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Cr(...i){let e=i.join(" ");e in Od||(Od[e]=!0,ct(...i))}function tm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var nm={[Rc]:Cc,[Pc]:Dc,[Ic]:Nc,[yo]:Lc,[Cc]:Rc,[Dc]:Pc,[Nc]:Ic,[Lc]:yo},ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $h=Math.PI/180,Da=180/Math.PI;function Oo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Sv(i,e){return(i%e+e)%e}function Jh(i,e,t){return(1-t)*i+t*e}function ya(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var l0=class l0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l0.prototype.isVector2=!0;var Le=l0,vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let a=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3],m=r[o+0],x=r[o+1],y=r[o+2],M=r[o+3];if(p!==M||a!==m||u!==x||h!==y){let c=a*m+u*x+h*y+p*M;c<0&&(m=-m,x=-x,y=-y,M=-M,c=-c);let f=1-l;if(c<.9995){let d=Math.acos(c),g=Math.sin(d);f=Math.sin(f*d)/g,l=Math.sin(l*d)/g,a=a*f+m*l,u=u*f+x*l,h=h*f+y*l,p=p*f+M*l}else{a=a*f+m*l,u=u*f+x*l,h=h*f+y*l,p=p*f+M*l;let d=1/Math.sqrt(a*a+u*u+h*h+p*p);a*=d,u*=d,h*=d,p*=d}}e[t]=a,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],a=n[s+1],u=n[s+2],h=n[s+3],p=r[o],m=r[o+1],x=r[o+2],y=r[o+3];return e[t]=l*y+h*p+a*x-u*m,e[t+1]=a*y+h*m+u*p-l*x,e[t+2]=u*y+h*x+l*m-a*p,e[t+3]=h*y-l*p-a*m-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,u=l(n/2),h=l(s/2),p=l(r/2),m=a(n/2),x=a(s/2),y=a(r/2);switch(o){case"XYZ":this._x=m*h*p+u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p-m*x*y;break;case"YXZ":this._x=m*h*p+u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p+m*x*y;break;case"ZXY":this._x=m*h*p-u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p-m*x*y;break;case"ZYX":this._x=m*h*p-u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p+m*x*y;break;case"YZX":this._x=m*h*p+u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p-m*x*y;break;case"XZY":this._x=m*h*p-u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p+m*x*y;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],a=t[9],u=t[2],h=t[6],p=t[10],m=n+l+p;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(h-a)*x,this._y=(r-u)*x,this._z=(o-s)*x}else if(n>l&&n>p){let x=2*Math.sqrt(1+n-l-p);this._w=(h-a)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+u)/x}else if(l>p){let x=2*Math.sqrt(1+l-n-p);this._w=(r-u)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(a+h)/x}else{let x=2*Math.sqrt(1+p-n-l);this._w=(o-s)/x,this._x=(r+u)/x,this._y=(a+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,a=t._y,u=t._z,h=t._w;return this._x=n*h+o*l+s*u-r*a,this._y=s*h+o*a+r*l-n*u,this._z=r*h+o*u+n*a-s*l,this._w=o*h-n*l-s*a-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){let u=Math.acos(l),h=Math.sin(u);a=Math.sin(a*u)/h,t=Math.sin(t*u)/h,this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},c0=class c0{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,a=e.w,u=2*(o*s-l*n),h=2*(l*t-r*s),p=2*(r*n-o*t);return this.x=t+a*u+o*p-l*h,this.y=n+a*h+l*u-r*p,this.z=s+a*p+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=s*a-r*l,this.y=r*o-n*a,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jh.copy(this).projectOnVector(e),this.sub(jh)}reflect(e){return this.sub(jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};c0.prototype.isVector3=!0;var V=c0,jh=new V,kd=new vn,u0=class u0{constructor(e,t,n,s,r,o,l,a,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u)}set(e,t,n,s,r,o,l,a,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],u=n[1],h=n[4],p=n[7],m=n[2],x=n[5],y=n[8],M=s[0],c=s[3],f=s[6],d=s[1],g=s[4],v=s[7],b=s[2],T=s[5],w=s[8];return r[0]=o*M+l*d+a*b,r[3]=o*c+l*g+a*T,r[6]=o*f+l*v+a*w,r[1]=u*M+h*d+p*b,r[4]=u*c+h*g+p*T,r[7]=u*f+h*v+p*w,r[2]=m*M+x*d+y*b,r[5]=m*c+x*g+y*T,r[8]=m*f+x*v+y*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8];return t*o*h-t*l*u-n*r*h+n*l*a+s*r*u-s*o*a}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=h*o-l*u,m=l*a-h*r,x=u*r-o*a,y=t*p+n*m+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return e[0]=p*M,e[1]=(s*u-h*n)*M,e[2]=(l*n-s*o)*M,e[3]=m*M,e[4]=(h*t-s*a)*M,e[5]=(s*r-l*t)*M,e[6]=x*M,e[7]=(n*a-u*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let a=Math.cos(r),u=Math.sin(r);return this.set(n*a,n*u,-n*(a*o+u*l)+o+e,-s*u,s*a,-s*(-u*o+a*l)+l+t,0,0,1),this}scale(e,t){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qh.makeScale(e,t)),this}rotate(e){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qh.makeRotation(-e)),this}translate(e,t){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u0.prototype.isMatrix3=!0;var gt=u0,Qh=new gt,zd=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wv(){let i={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Wt&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Wt&&(s.r=vo(s.r),s.g=vo(s.g),s.b=vo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?La:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ia]:{primaries:e,whitePoint:n,transfer:La,toXYZ:zd,fromXYZ:Hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Wt,toXYZ:zd,fromXYZ:Hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var Lt=wv();function Ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var to,Bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{to===void 0&&(to=bo("canvas")),to.width=e.width,to.height=e.height;let s=to.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=to}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ns(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ns(t[n]/255)*255):t[n]=Ns(t[n]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tv=0,So=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(ef(s[o].image)):r.push(ef(s[o]))}else r=ef(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ef(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}var Ev=0,tf=new V,Zn=class i extends ms{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ds,s=ds,r=kt,o=In,l=Jn,a=$n,u=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Oo(),this.name="",this.source=new So(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tf).x}get height(){return this.source.getSize(tf).y}get depth(){return this.source.getSize(tf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Zf;Zn.DEFAULT_ANISOTROPY=1;var h0=class h0{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,a=e.elements,u=a[0],h=a[4],p=a[8],m=a[1],x=a[5],y=a[9],M=a[2],c=a[6],f=a[10];if(Math.abs(h-m)<.01&&Math.abs(p-M)<.01&&Math.abs(y-c)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+M)<.1&&Math.abs(y+c)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(u+1)/2,v=(x+1)/2,b=(f+1)/2,T=(h+m)/4,w=(p+M)/4,_=(y+c)/4;return g>v&&g>b?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=T/n,r=w/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=_/r),this.set(n,s,r,t),this}let d=Math.sqrt((c-y)*(c-y)+(p-M)*(p-M)+(m-h)*(m-h));return Math.abs(d)<.001&&(d=1),this.x=(c-y)/d,this.y=(p-M)/d,this.z=(m-h)/d,this.w=Math.acos((u+x+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};h0.prototype.isVector4=!0;var mt=h0,Oc=class extends ms{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Zn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new So(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Oc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Na=class extends Zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kc=class extends Zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var hu=class hu{constructor(e,t,n,s,r,o,l,a,u,h,p,m,x,y,M,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u,h,p,m,x,y,M,c)}set(e,t,n,s,r,o,l,a,u,h,p,m,x,y,M,c){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=l,f[13]=a,f[2]=u,f[6]=h,f[10]=p,f[14]=m,f[3]=x,f[7]=y,f[11]=M,f[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hu().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/no.setFromMatrixColumn(e,0).length(),r=1/no.setFromMatrixColumn(e,1).length(),o=1/no.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let m=o*h,x=o*p,y=l*h,M=l*p;t[0]=a*h,t[4]=-a*p,t[8]=u,t[1]=x+y*u,t[5]=m-M*u,t[9]=-l*a,t[2]=M-m*u,t[6]=y+x*u,t[10]=o*a}else if(e.order==="YXZ"){let m=a*h,x=a*p,y=u*h,M=u*p;t[0]=m+M*l,t[4]=y*l-x,t[8]=o*u,t[1]=o*p,t[5]=o*h,t[9]=-l,t[2]=x*l-y,t[6]=M+m*l,t[10]=o*a}else if(e.order==="ZXY"){let m=a*h,x=a*p,y=u*h,M=u*p;t[0]=m-M*l,t[4]=-o*p,t[8]=y+x*l,t[1]=x+y*l,t[5]=o*h,t[9]=M-m*l,t[2]=-o*u,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){let m=o*h,x=o*p,y=l*h,M=l*p;t[0]=a*h,t[4]=y*u-x,t[8]=m*u+M,t[1]=a*p,t[5]=M*u+m,t[9]=x*u-y,t[2]=-u,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){let m=o*a,x=o*u,y=l*a,M=l*u;t[0]=a*h,t[4]=M-m*p,t[8]=y*p+x,t[1]=p,t[5]=o*h,t[9]=-l*h,t[2]=-u*h,t[6]=x*p+y,t[10]=m-M*p}else if(e.order==="XZY"){let m=o*a,x=o*u,y=l*a,M=l*u;t[0]=a*h,t[4]=-p,t[8]=u*h,t[1]=m*p+M,t[5]=o*h,t[9]=x*p-y,t[2]=y*p-x,t[6]=l*h,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Av,e,Rv)}lookAt(e,t,n){let s=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Ks.crossVectors(n,wi),Ks.lengthSq()===0&&(Math.abs(n.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Ks.crossVectors(n,wi)),Ks.normalize(),Ql.crossVectors(wi,Ks),s[0]=Ks.x,s[4]=Ql.x,s[8]=wi.x,s[1]=Ks.y,s[5]=Ql.y,s[9]=wi.y,s[2]=Ks.z,s[6]=Ql.z,s[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],u=n[12],h=n[1],p=n[5],m=n[9],x=n[13],y=n[2],M=n[6],c=n[10],f=n[14],d=n[3],g=n[7],v=n[11],b=n[15],T=s[0],w=s[4],_=s[8],S=s[12],E=s[1],R=s[5],C=s[9],P=s[13],A=s[2],L=s[6],D=s[10],O=s[14],z=s[3],B=s[7],H=s[11],k=s[15];return r[0]=o*T+l*E+a*A+u*z,r[4]=o*w+l*R+a*L+u*B,r[8]=o*_+l*C+a*D+u*H,r[12]=o*S+l*P+a*O+u*k,r[1]=h*T+p*E+m*A+x*z,r[5]=h*w+p*R+m*L+x*B,r[9]=h*_+p*C+m*D+x*H,r[13]=h*S+p*P+m*O+x*k,r[2]=y*T+M*E+c*A+f*z,r[6]=y*w+M*R+c*L+f*B,r[10]=y*_+M*C+c*D+f*H,r[14]=y*S+M*P+c*O+f*k,r[3]=d*T+g*E+v*A+b*z,r[7]=d*w+g*R+v*L+b*B,r[11]=d*_+g*C+v*D+b*H,r[15]=d*S+g*P+v*O+b*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],a=e[9],u=e[13],h=e[2],p=e[6],m=e[10],x=e[14],y=e[3],M=e[7],c=e[11],f=e[15],d=a*x-u*m,g=l*x-u*p,v=l*m-a*p,b=o*x-u*h,T=o*m-a*h,w=o*p-l*h;return t*(M*d-c*g+f*v)-n*(y*d-c*b+f*T)+s*(y*g-M*b+f*w)-r*(y*v-M*T+c*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],a=e[2],u=e[6],h=e[10];return t*(o*h-l*u)-n*(r*h-l*a)+s*(r*u-o*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=e[9],m=e[10],x=e[11],y=e[12],M=e[13],c=e[14],f=e[15],d=t*l-n*o,g=t*a-s*o,v=t*u-r*o,b=n*a-s*l,T=n*u-r*l,w=s*u-r*a,_=h*M-p*y,S=h*c-m*y,E=h*f-x*y,R=p*c-m*M,C=p*f-x*M,P=m*f-x*c,A=d*P-g*C+v*R+b*E-T*S+w*_;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=(l*P-a*C+u*R)*L,e[1]=(s*C-n*P-r*R)*L,e[2]=(M*w-c*T+f*b)*L,e[3]=(m*T-p*w-x*b)*L,e[4]=(a*E-o*P-u*S)*L,e[5]=(t*P-s*E+r*S)*L,e[6]=(c*v-y*w-f*g)*L,e[7]=(h*w-m*v+x*g)*L,e[8]=(o*C-l*E+u*_)*L,e[9]=(n*E-t*C-r*_)*L,e[10]=(y*T-M*v+f*d)*L,e[11]=(p*v-h*T-x*d)*L,e[12]=(l*S-o*R-a*_)*L,e[13]=(t*R-n*S+s*_)*L,e[14]=(M*g-y*b-c*d)*L,e[15]=(h*b-p*g+m*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,u=r*o,h=r*l;return this.set(u*o+n,u*l-s*a,u*a+s*l,0,u*l+s*a,h*l+n,h*a-s*o,0,u*a-s*l,h*a+s*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,u=r+r,h=o+o,p=l+l,m=r*u,x=r*h,y=r*p,M=o*h,c=o*p,f=l*p,d=a*u,g=a*h,v=a*p,b=n.x,T=n.y,w=n.z;return s[0]=(1-(M+f))*b,s[1]=(x+v)*b,s[2]=(y-g)*b,s[3]=0,s[4]=(x-v)*T,s[5]=(1-(m+f))*T,s[6]=(c+d)*T,s[7]=0,s[8]=(y+g)*w,s[9]=(c-d)*w,s[10]=(1-(m+M))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=no.set(s[0],s[1],s[2]).length(),l=no.set(s[4],s[5],s[6]).length(),a=no.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qi.copy(this);let u=1/o,h=1/l,p=1/a;return Qi.elements[0]*=u,Qi.elements[1]*=u,Qi.elements[2]*=u,Qi.elements[4]*=h,Qi.elements[5]*=h,Qi.elements[6]*=h,Qi.elements[8]*=p,Qi.elements[9]*=p,Qi.elements[10]*=p,t.setFromRotationMatrix(Qi),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,s,r,o,l=is,a=!1){let u=this.elements,h=2*r/(t-e),p=2*r/(n-s),m=(t+e)/(t-e),x=(n+s)/(n-s),y,M;if(a)y=r/(o-r),M=o*r/(o-r);else if(l===is)y=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(l===_o)y=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=is,a=!1){let u=this.elements,h=2/(t-e),p=2/(n-s),m=-(t+e)/(t-e),x=-(n+s)/(n-s),y,M;if(a)y=1/(o-r),M=o/(o-r);else if(l===is)y=-2/(o-r),M=-(o+r)/(o-r);else if(l===_o)y=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};hu.prototype.isMatrix4=!0;var je=hu,no=new V,Qi=new je,Av=new V(0,0,0),Rv=new V(1,1,1),Ks=new V,Ql=new V,wi=new V,Vd=new je,Wd=new vn,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],a=s[1],u=s[5],h=s[9],p=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(a,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cv=0,Gd=new V,io=new vn,Cs=new je,ec=new V,_a=new V,Pv=new V,Iv=new vn,Xd=new V(1,0,0),qd=new V(0,1,0),Yd=new V(0,0,1),Zd={type:"added"},Lv={type:"removed"},so={type:"childadded",child:null},nf={type:"childremoved",child:null},Rn=class i extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new Kn,n=new vn,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new gt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(Xd,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xd,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ec.copy(e):ec.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cs.lookAt(_a,ec,this.up):Cs.lookAt(ec,_a,this.up),this.quaternion.setFromRotationMatrix(Cs),s&&(Cs.extractRotation(s.matrixWorld),io.setFromRotationMatrix(Cs),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),so.child=e,this.dispatchEvent(so),so.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lv),nf.child=e,this.dispatchEvent(nf),nf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,Pv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,Iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let a=l.shapes;if(Array.isArray(a))for(let u=0,h=a.length;u<h;u++){let p=a[u];r(e.shapes,p)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let a=0,u=this.material.length;a<u;a++)l.push(r(e.materials,this.material[a]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let a=this.animations[l];s.animations.push(r(e.animations,a))}}if(t){let l=o(e.geometries),a=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),x=o(e.animations),y=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(l){let a=[];for(let u in l){let h=l[u];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rn.DEFAULT_UP=new V(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dv={type:"move"},wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,a=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let M of e.hand.values()){let c=t.getJointPose(M,n),f=this._getHandJoint(u,M);c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=c.radius),f.visible=c!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=h.position.distanceTo(p.position),x=.02,y=.005;u.inputState.pinching&&m>x+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=x-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},tc={h:0,s:0,l:0};function sf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=Sv(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=sf(o,r,e+1/3),this.g=sf(o,r,e),this.b=sf(o,r,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=im[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Lt.workingToColorSpace(Yn.copy(this),e),Math.round(Rt(Yn.r*255,0,255))*65536+Math.round(Rt(Yn.g*255,0,255))*256+Math.round(Rt(Yn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Yn.copy(this),t);let n=Yn.r,s=Yn.g,r=Yn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),a,u,h=(l+o)/2;if(l===o)a=0,u=0;else{let p=o-l;switch(u=h<=.5?p/(o+l):p/(2-o-l),o){case n:a=(s-r)/p+(s<r?6:0);break;case s:a=(r-n)/p+2;break;case r:a=(n-s)/p+4;break}a/=6}return e.h=a,e.s=u,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=qt){Lt.workingToColorSpace(Yn.copy(this),e);let t=Yn.r,n=Yn.g,s=Yn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($s),this.setHSL($s.h+e,$s.s+t,$s.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($s),e.getHSL(tc);let n=Jh($s.h,tc.h,t),s=Jh($s.s,tc.s,t),r=Jh($s.l,tc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yn=new fe;fe.NAMES=im;var Ua=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pr=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},es=new V,Ps=new V,rf=new V,Is=new V,ro=new V,oo=new V,Kd=new V,of=new V,af=new V,lf=new V,cf=new mt,uf=new mt,hf=new mt,er=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),es.subVectors(e,t),s.cross(es);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){es.subVectors(s,t),Ps.subVectors(n,t),rf.subVectors(e,t);let o=es.dot(es),l=es.dot(Ps),a=es.dot(rf),u=Ps.dot(Ps),h=Ps.dot(rf),p=o*u-l*l;if(p===0)return r.set(0,0,0),null;let m=1/p,x=(u*a-l*h)*m,y=(o*h-l*a)*m;return r.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Is)===null?!1:Is.x>=0&&Is.y>=0&&Is.x+Is.y<=1}static getInterpolation(e,t,n,s,r,o,l,a){return this.getBarycoord(e,t,n,s,Is)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,Is.x),a.addScaledVector(o,Is.y),a.addScaledVector(l,Is.z),a)}static getInterpolatedAttribute(e,t,n,s,r,o){return cf.setScalar(0),uf.setScalar(0),hf.setScalar(0),cf.fromBufferAttribute(e,t),uf.fromBufferAttribute(e,n),hf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cf,r.x),o.addScaledVector(uf,r.y),o.addScaledVector(hf,r.z),o}static isFrontFacing(e,t,n,s){return es.subVectors(n,t),Ps.subVectors(e,t),es.cross(Ps).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return es.subVectors(this.c,this.b),Ps.subVectors(this.a,this.b),es.cross(Ps).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;ro.subVectors(s,n),oo.subVectors(r,n),of.subVectors(e,n);let a=ro.dot(of),u=oo.dot(of);if(a<=0&&u<=0)return t.copy(n);af.subVectors(e,s);let h=ro.dot(af),p=oo.dot(af);if(h>=0&&p<=h)return t.copy(s);let m=a*p-h*u;if(m<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(ro,o);lf.subVectors(e,r);let x=ro.dot(lf),y=oo.dot(lf);if(y>=0&&x<=y)return t.copy(r);let M=x*u-a*y;if(M<=0&&u>=0&&y<=0)return l=u/(u-y),t.copy(n).addScaledVector(oo,l);let c=h*y-x*p;if(c<=0&&p-h>=0&&x-y>=0)return Kd.subVectors(r,s),l=(p-h)/(p-h+(x-y)),t.copy(s).addScaledVector(Kd,l);let f=1/(c+M+m);return o=M*f,l=m*f,t.copy(n).addScaledVector(ro,o).addScaledVector(oo,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gi=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ts.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ts.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ts.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ts):ts.fromBufferAttribute(r,o),ts.applyMatrix4(e.matrixWorld),this.expandByPoint(ts);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nc.copy(n.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ts),ts.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),ic.subVectors(this.max,ba),ao.subVectors(e.a,ba),lo.subVectors(e.b,ba),co.subVectors(e.c,ba),Js.subVectors(lo,ao),js.subVectors(co,lo),Tr.subVectors(ao,co);let t=[0,-Js.z,Js.y,0,-js.z,js.y,0,-Tr.z,Tr.y,Js.z,0,-Js.x,js.z,0,-js.x,Tr.z,0,-Tr.x,-Js.y,Js.x,0,-js.y,js.x,0,-Tr.y,Tr.x,0];return!ff(t,ao,lo,co,ic)||(t=[1,0,0,0,1,0,0,0,1],!ff(t,ao,lo,co,ic))?!1:(sc.crossVectors(Js,js),t=[sc.x,sc.y,sc.z],ff(t,ao,lo,co,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ts).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ts).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ls=[new V,new V,new V,new V,new V,new V,new V,new V],ts=new V,nc=new gi,ao=new V,lo=new V,co=new V,Js=new V,js=new V,Tr=new V,ba=new V,ic=new V,sc=new V,Er=new V;function ff(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Er.fromArray(i,r);let l=s.x*Math.abs(Er.x)+s.y*Math.abs(Er.y)+s.z*Math.abs(Er.z),a=e.dot(Er),u=t.dot(Er),h=n.dot(Er);if(Math.max(-Math.max(a,u,h),Math.min(a,u,h))>l)return!1}return!0}var En=new V,rc=new Le,Nv=0,bt=class extends ms{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rc.fromBufferAttribute(this,t),rc.applyMatrix3(e),this.setXY(t,rc.x,rc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ya(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ya(t,this.array)),t}setX(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ya(t,this.array)),t}setY(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ya(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ya(t,this.array)),t}setW(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array),s=mi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),n=mi(n,this.array),s=mi(s,this.array),r=mi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ba=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oa=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fv=new gi,Ma=new V,df=new V,vi=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let t=Ma.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ma,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(df)),this.expandByPoint(Ma.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Uv=0,Ui=new je,pf=new Rn,uo=new V,Ti=new gi,Sa=new gi,Un=new V,vt=class i extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bv(e)?Oa:Ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,t,n){return Ui.makeTranslation(e,t,n),this.applyMatrix4(Ui),this}scale(e,t,n){return Ui.makeScale(e,t,n),this.applyMatrix4(Ui),this}lookAt(e){return pf.lookAt(e),pf.updateMatrix(),this.applyMatrix4(pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];Sa.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(Ti.min,Sa.min),Ti.expandByPoint(Un),Un.addVectors(Ti.max,Sa.max),Ti.expandByPoint(Un)):(Ti.expandByPoint(Sa.min),Ti.expandByPoint(Sa.max))}Ti.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Un.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Un));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],a=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Un.fromBufferAttribute(l,u),a&&(uo.fromBufferAttribute(e,u),Un.add(uo)),s=Math.max(s,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],a=[];for(let _=0;_<n.count;_++)l[_]=new V,a[_]=new V;let u=new V,h=new V,p=new V,m=new Le,x=new Le,y=new Le,M=new V,c=new V;function f(_,S,E){u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,E),m.fromBufferAttribute(r,_),x.fromBufferAttribute(r,S),y.fromBufferAttribute(r,E),h.sub(u),p.sub(u),x.sub(m),y.sub(m);let R=1/(x.x*y.y-y.x*x.y);isFinite(R)&&(M.copy(h).multiplyScalar(y.y).addScaledVector(p,-x.y).multiplyScalar(R),c.copy(p).multiplyScalar(x.x).addScaledVector(h,-y.x).multiplyScalar(R),l[_].add(M),l[S].add(M),l[E].add(M),a[_].add(c),a[S].add(c),a[E].add(c))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let _=0,S=d.length;_<S;++_){let E=d[_],R=E.start,C=E.count;for(let P=R,A=R+C;P<A;P+=3)f(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let g=new V,v=new V,b=new V,T=new V;function w(_){b.fromBufferAttribute(s,_),T.copy(b);let S=l[_];g.copy(S),g.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(T,S);let R=v.dot(a[_])<0?-1:1;o.setXYZW(_,g.x,g.y,g.z,R)}for(let _=0,S=d.length;_<S;++_){let E=d[_],R=E.start,C=E.count;for(let P=R,A=R+C;P<A;P+=3)w(e.getX(P+0)),w(e.getX(P+1)),w(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);let s=new V,r=new V,o=new V,l=new V,a=new V,u=new V,h=new V,p=new V;if(e)for(let m=0,x=e.count;m<x;m+=3){let y=e.getX(m+0),M=e.getX(m+1),c=e.getX(m+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,c),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),l.fromBufferAttribute(n,y),a.fromBufferAttribute(n,M),u.fromBufferAttribute(n,c),l.add(h),a.add(h),u.add(h),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(c,u.x,u.y,u.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Un.fromBufferAttribute(e,t),Un.normalize(),e.setXYZ(t,Un.x,Un.y,Un.z)}toNonIndexed(){function e(l,a){let u=l.array,h=l.itemSize,p=l.normalized,m=new u.constructor(a.length*h),x=0,y=0;for(let M=0,c=a.length;M<c;M++){l.isInterleavedBufferAttribute?x=a[M]*l.data.stride+l.offset:x=a[M]*h;for(let f=0;f<h;f++)m[y++]=u[x++]}return new bt(m,h,p)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let a=s[l],u=e(a,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let a=[],u=r[l];for(let h=0,p=u.length;h<p;h++){let m=u[h],x=e(m,n);a.push(x)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,a=o.length;l<a;l++){let u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let u in a)a[u]!==void 0&&(e[u]=a[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let a in n){let u=n[a];e.data.attributes[a]=u.toJSON(e.data)}let s={},r=!1;for(let a in this.morphAttributes){let u=this.morphAttributes[a],h=[];for(let p=0,m=u.length;p<m;p++){let x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(s[a]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],p=r[u];for(let m=0,x=p.length;m<x;m++)h.push(p[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mf=new V,Bv=new V,Ov=new gt,ns=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mf.subVectors(n,t).cross(Bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(mf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ov.getNormalMatrix(e),s=this.coplanarPoint(mf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kv=0,gs=class extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=Fo,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=zf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ec,this.stencilZFail=Ec,this.stencilZPass=Ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let a=r[l];delete a.metadata,o.push(a)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ns().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ds=new V,gf=new V,oc=new V,ac=new V,To=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ds.copy(this.origin).addScaledVector(this.direction,t),Ds.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gf.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),ac.copy(this.origin).sub(gf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(oc),l=ac.dot(this.direction),a=-ac.dot(oc),u=ac.lengthSq(),h=Math.abs(1-o*o),p,m,x,y;if(h>0)if(p=o*a-l,m=o*l-a,y=r*h,p>=0)if(m>=-y)if(m<=y){let M=1/h;p*=M,m*=M,x=p*(p+o*m+2*l)+m*(o*p+m+2*a)+u}else m=r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m=-r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m<=-y?(p=Math.max(0,-(-o*r+l)),m=p>0?-r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u):m<=y?(p=0,m=Math.min(Math.max(-r,-a),r),x=m*(m+2*a)+u):(p=Math.max(0,-(o*r+l)),m=p>0?r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u);else m=o>0?-r:r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(gf).addScaledVector(oc,m),x}intersectSphere(e,t){if(e.radius<0)return null;Ds.subVectors(e.center,this.origin);let n=Ds.dot(this.direction),s=Ds.dot(Ds)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,a,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(l=(e.min.z-m.z)*p,a=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,a=(e.min.z-m.z)*p),n>a||l>s)||((l>n||n!==n)&&(n=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ds)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,a=l.x,u=l.y,h=l.z,p=e.x-o.x,m=e.y-o.y,x=e.z-o.z,y=t.x-o.x,M=t.y-o.y,c=t.z-o.z,f=n.x-o.x,d=n.y-o.y,g=n.z-o.z,v=Math.abs(a),b=Math.abs(u),T=Math.abs(h),w,_,S,E,R,C,P,A,L,D,O,z;if(v>=b&&v>=T?(S=a,C=p,L=y,z=f,a>=0?(w=u,_=h,E=m,R=x,P=M,A=c,D=d,O=g):(w=h,_=u,E=x,R=m,P=c,A=M,D=g,O=d)):b>=T?(S=u,C=m,L=M,z=d,u>=0?(w=h,_=a,E=x,R=p,P=c,A=y,D=g,O=f):(w=a,_=h,E=p,R=x,P=y,A=c,D=f,O=g)):(S=h,C=x,L=c,z=g,h>=0?(w=a,_=u,E=p,R=m,P=y,A=M,D=f,O=d):(w=u,_=a,E=m,R=p,P=M,A=y,D=d,O=f)),S===0)return null;let B=w/S,H=_/S,k=1/S,X=E-B*C,K=R-H*C,be=P-B*L,we=A-H*L,Se=D-B*z,G=O-H*z,$=Se*we-G*be,ge=X*G-K*Se,Pe=be*K-we*X;if(s){if($<0||ge<0||Pe<0)return null}else if(($<0||ge<0||Pe<0)&&($>0||ge>0||Pe>0))return null;let te=$+ge+Pe;if(te===0)return null;let ve=k*($*C+ge*L+Pe*z);return(te>0?ve<0:ve>0)?null:this.at(ve/te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$d=new je,Ar=new To,lc=new vi,Jd=new V,cc=new V,uc=new V,hc=new V,vf=new V,fc=new V,jd=new V,dc=new V,ht=class extends Rn{constructor(e=new vt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){fc.set(0,0,0);for(let a=0,u=r.length;a<u;a++){let h=l[a],p=r[a];h!==0&&(vf.fromBufferAttribute(p,e),o?fc.addScaledVector(vf,h):fc.addScaledVector(vf.sub(t),h))}t.add(fc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(r),Ar.copy(e.ray).recast(e.near),!(lc.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(lc,Jd)===null||Ar.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&($d.copy(r).invert(),Ar.copy(e.ray).applyMatrix4($d),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,m=r.groups,x=r.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,M=m.length;y<M;y++){let c=m[y],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(l.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=l.getX(v),w=l.getX(v+1),_=l.getX(v+2);s=pc(this,f,e,n,u,h,p,T,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),M=Math.min(l.count,x.start+x.count);for(let c=y,f=M;c<f;c+=3){let d=l.getX(c),g=l.getX(c+1),v=l.getX(c+2);s=pc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let y=0,M=m.length;y<M;y++){let c=m[y],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(a.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=v,w=v+1,_=v+2;s=pc(this,f,e,n,u,h,p,T,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let c=y,f=M;c<f;c+=3){let d=c,g=c+1,v=c+2;s=pc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}}};function zv(i,e,t,n,s,r,o,l){let a;if(e.side===Vn?a=n.intersectTriangle(o,r,s,!0,l):a=n.intersectTriangle(s,r,o,e.side===xs,l),a===null)return null;dc.copy(l),dc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(dc);return u<t.near||u>t.far?null:{distance:u,point:dc.clone(),object:i}}function pc(i,e,t,n,s,r,o,l,a,u){i.getVertexPosition(l,cc),i.getVertexPosition(a,uc),i.getVertexPosition(u,hc);let h=zv(i,e,t,n,cc,uc,hc,jd);if(h){let p=new V;er.getBarycoord(jd,cc,uc,hc,p),s&&(h.uv=er.getInterpolatedAttribute(s,l,a,u,p,new Le)),r&&(h.uv1=er.getInterpolatedAttribute(r,l,a,u,p,new Le)),o&&(h.normal=er.getInterpolatedAttribute(o,l,a,u,p,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a:l,b:a,c:u,normal:new V,materialIndex:0};er.getNormal(cc,uc,hc,m.normal),h.face=m,h.barycoord=p}return h}var ss=class extends Zn{constructor(e=null,t=1,n=1,s,r,o,l,a,u=An,h=An,p,m){super(null,o,l,a,u,h,s,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ho=new je,Qd=new je,mc=[],ep=new gi,Hv=new je,wa=new ht,Ta=new vi,rs=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),ep.copy(e.boundingBox).applyMatrix4(ho),this.boundingBox.union(ep)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ho),Ta.copy(e.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ho),Qd.multiplyMatrices(n,ho),wa.matrixWorld=Qd,wa.raycast(e,mc);for(let o=0,l=mc.length;o<l;o++){let a=mc[o];a.instanceId=r,a.object=this,t.push(a)}mc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ss(new Float32Array(s*this.count),s,this.count,cr,Oi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let l=this.geometry.morphTargetsRelative?1:1-o,a=s*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rr=new vi,Vv=new Le(.5,.5),gc=new V,Eo=class{constructor(e=new ns,t=new ns,n=new ns,s=new ns,r=new ns,o=new ns){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=is,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],u=r[3],h=r[4],p=r[5],m=r[6],x=r[7],y=r[8],M=r[9],c=r[10],f=r[11],d=r[12],g=r[13],v=r[14],b=r[15];if(s[0].setComponents(u-o,x-h,f-y,b-d).normalize(),s[1].setComponents(u+o,x+h,f+y,b+d).normalize(),s[2].setComponents(u+l,x+p,f+M,b+g).normalize(),s[3].setComponents(u-l,x-p,f-M,b-g).normalize(),n)s[4].setComponents(a,m,c,v).normalize(),s[5].setComponents(u-a,x-m,f-c,b-v).normalize();else if(s[4].setComponents(u-a,x-m,f-c,b-v).normalize(),t===is)s[5].setComponents(u+a,x+m,f+c,b+v).normalize();else if(t===_o)s[5].setComponents(a,m,c,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);let t=Vv.distanceTo(e.center);return Rr.radius=.7071067811865476+t,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(gc.x=s.normal.x>0?e.max.x:e.min.x,gc.y=s.normal.y>0?e.max.y:e.min.y,gc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zc=class extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Hc=new V,Vc=new V,tp=new je,Ea=new To,vc=new vi,xf=new V,np=new V,ka=class extends Rn{constructor(e=new vt,t=new zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Hc.fromBufferAttribute(t,s-1),Vc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Hc.distanceTo(Vc);e.setAttribute("lineDistance",new $e(n,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),vc.radius+=r,e.ray.intersectsSphere(vc)===!1)return;tp.copy(s).invert(),Ea.copy(e.ray).applyMatrix4(tp);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let x=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let M=x,c=y-1;M<c;M+=u){let f=h.getX(M),d=h.getX(M+1),g=xc(this,e,Ea,a,f,d,M);g&&t.push(g)}if(this.isLineLoop){let M=h.getX(y-1),c=h.getX(x),f=xc(this,e,Ea,a,M,c,y-1);f&&t.push(f)}}else{let x=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let M=x,c=y-1;M<c;M+=u){let f=xc(this,e,Ea,a,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=xc(this,e,Ea,a,y-1,x,y-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function xc(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(Hc.fromBufferAttribute(l,s),Vc.fromBufferAttribute(l,r),t.distanceSqToSegment(Hc,Vc,xf,np)>n)return;xf.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(xf);if(!(u<e.near||u>e.far))return{distance:u,point:np.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ao=class extends gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ip=new je,Rf=new To,yc=new vi,_c=new V,za=class extends Rn{constructor(e=new vt,t=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yc.copy(n.boundingSphere),yc.applyMatrix4(s),yc.radius+=r,e.ray.intersectsSphere(yc)===!1)return;ip.copy(s).invert(),Rf.copy(e.ray).applyMatrix4(ip);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=n.index,p=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let y=m,M=x;y<M;y++){let c=u.getX(y);_c.fromBufferAttribute(p,c),sp(_c,c,a,s,e,t,this)}}else{let m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let y=m,M=x;y<M;y++)_c.fromBufferAttribute(p,y),sp(_c,y,a,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function sp(i,e,t,n,s,r,o){let l=Rf.distanceSqToPoint(i);if(l<t){let a=new V;Rf.closestPointToPoint(i,a),a.applyMatrix4(n);let u=s.ray.origin.distanceTo(a);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ha=class extends Zn{constructor(e=[],t=ar,n,s,r,o,l,a,u,h){super(e,t,n,s,r,o,l,a,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ri=class extends Zn{constructor(e,t,n,s,r,o,l,a,u){super(e,t,n,s,r,o,l,a,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var tr=class extends Zn{constructor(e,t,n=ls,s,r,o,l=An,a=An,u,h=ps,p=1){if(h!==ps&&h!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:p};super(m,s,r,o,l,a,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new So(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wc=class extends tr{constructor(e,t=ls,n=ar,s,r,o=An,l=An,a,u=ps){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,a,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Va=class extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],u=[],h=[],p=[],m=0,x=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(a),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(p,2));function y(M,c,f,d,g,v,b,T,w,_,S){let E=v/w,R=b/_,C=v/2,P=b/2,A=T/2,L=w+1,D=_+1,O=0,z=0,B=new V;for(let H=0;H<D;H++){let k=H*R-P;for(let X=0;X<L;X++){let K=X*E-C;B[M]=K*d,B[c]=k*g,B[f]=A,u.push(B.x,B.y,B.z),B[M]=0,B[c]=0,B[f]=T>0?1:-1,h.push(B.x,B.y,B.z),p.push(X/w),p.push(1-H/_),O+=1}}for(let H=0;H<_;H++)for(let k=0;k<w;k++){let X=m+k+L*H,K=m+k+L*(H+1),be=m+(k+1)+L*(H+1),we=m+(k+1)+L*H;a.push(X,K,we),a.push(K,be,we),z+=6}l.addGroup(x,z,S),x+=z,m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ir=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],a=[],u=new V,h=new Le;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){let x=n+p/t*s;u.x=e*Math.cos(x),u.y=e*Math.sin(x),o.push(u.x,u.y,u.z),l.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,a.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bi=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],m=[],x=[],y=0,M=[],c=n/2,f=0;d(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(m,3)),this.setAttribute("uv",new $e(x,2));function d(){let v=new V,b=new V,T=0,w=(t-e)/n;for(let _=0;_<=r;_++){let S=[],E=_/r,R=E*(t-e)+e;for(let C=0;C<=s;C++){let P=C/s,A=P*a+l,L=Math.sin(A),D=Math.cos(A);b.x=R*L,b.y=-E*n+c,b.z=R*D,p.push(b.x,b.y,b.z),v.set(L,w,D).normalize(),m.push(v.x,v.y,v.z),x.push(P,1-E),S.push(y++)}M.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let E=M[S][_],R=M[S+1][_],C=M[S+1][_+1],P=M[S][_+1];(e>0||S!==0)&&(h.push(E,R,P),T+=3),(t>0||S!==r-1)&&(h.push(R,C,P),T+=3)}u.addGroup(f,T,0),f+=T}function g(v){let b=y,T=new Le,w=new V,_=0,S=v===!0?e:t,E=v===!0?1:-1;for(let C=1;C<=s;C++)p.push(0,c*E,0),m.push(0,E,0),x.push(.5,.5),y++;let R=y;for(let C=0;C<=s;C++){let A=C/s*a+l,L=Math.cos(A),D=Math.sin(A);w.x=S*D,w.y=c*E,w.z=S*L,p.push(w.x,w.y,w.z),m.push(0,E,0),T.x=L*.5+.5,T.y=D*.5*E+.5,x.push(T.x,T.y),y++}for(let C=0;C<s;C++){let P=b+C,A=R+C;v===!0?h.push(A,A+1,P):h.push(A+1,A,P),_+=3}u.addGroup(f,_,v===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Gc=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),u(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(d){let g=new V,v=new V,b=new V;for(let T=0;T<t.length;T+=3)x(t[T+0],g),x(t[T+1],v),x(t[T+2],b),a(g,v,b,d)}function a(d,g,v,b){let T=b+1,w=[];for(let _=0;_<=T;_++){w[_]=[];let S=d.clone().lerp(v,_/T),E=g.clone().lerp(v,_/T),R=T-_;for(let C=0;C<=R;C++)C===0&&_===T?w[_][C]=S:w[_][C]=S.clone().lerp(E,C/R)}for(let _=0;_<T;_++)for(let S=0;S<2*(T-_)-1;S++){let E=Math.floor(S/2);S%2===0?(m(w[_][E+1]),m(w[_+1][E]),m(w[_][E])):(m(w[_][E+1]),m(w[_+1][E+1]),m(w[_+1][E]))}}function u(d){let g=new V;for(let v=0;v<r.length;v+=3)g.x=r[v+0],g.y=r[v+1],g.z=r[v+2],g.normalize().multiplyScalar(d),r[v+0]=g.x,r[v+1]=g.y,r[v+2]=g.z}function h(){let d=new V;for(let g=0;g<r.length;g+=3){d.x=r[g+0],d.y=r[g+1],d.z=r[g+2];let v=c(d)/2/Math.PI+.5,b=f(d)/Math.PI+.5;o.push(v,1-b)}y(),p()}function p(){for(let d=0;d<o.length;d+=6){let g=o[d+0],v=o[d+2],b=o[d+4],T=Math.max(g,v,b),w=Math.min(g,v,b);T>.9&&w<.1&&(g<.2&&(o[d+0]+=1),v<.2&&(o[d+2]+=1),b<.2&&(o[d+4]+=1))}}function m(d){r.push(d.x,d.y,d.z)}function x(d,g){let v=d*3;g.x=e[v+0],g.y=e[v+1],g.z=e[v+2]}function y(){let d=new V,g=new V,v=new V,b=new V,T=new Le,w=new Le,_=new Le;for(let S=0,E=0;S<r.length;S+=9,E+=6){d.set(r[S+0],r[S+1],r[S+2]),g.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),_.set(o[E+4],o[E+5]),b.copy(d).add(g).add(v).divideScalar(3);let R=c(b);M(T,E+0,d,R),M(w,E+2,g,R),M(_,E+4,v,R)}}function M(d,g,v,b){b<0&&d.x===1&&(o[g]=d.x-1),v.x===0&&v.z===0&&(o[g]=b/2/Math.PI+.5)}function c(d){return Math.atan2(d.z,-d.x)}function f(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ct("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,a=r-1,u;for(;l<=a;)if(s=Math.floor(l+(a-l)/2),u=n[s]-o,u<0)l=s+1;else if(u>0)a=s-1;else{a=s;break}if(s=a,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,x=(o-h)/m;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),a=t||(o.isVector2?new Le:new V);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,s=[],r=[],o=[],l=new V,a=new je;for(let x=0;x<=e;x++){let y=x/e;s[x]=this.getTangentAt(y,new V)}r[0]=new V,o[0]=new V;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),m<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();let y=Math.acos(Rt(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(a.makeRotationAxis(l,y))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(Rt(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(x=-x);for(let y=1;y<=e;y++)r[y].applyMatrix4(a.makeRotationAxis(s[y],x*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ro=class extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=a-this.aX,x=u-this.aY;a=m*h-x*p+this.aX,u=m*p+x*h+this.aY}return n.set(a,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xc=class extends Ro{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function i0(){let i=0,e=0,t=0,n=0;function s(r,o,l,a){i=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,u){s(o,l,u*(l-r),u*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,u,h,p){let m=(o-r)/u-(l-r)/(u+h)+(l-o)/h,x=(l-o)/h-(a-o)/(h+p)+(a-l)/p;m*=h,x*=h,s(o,l,m,x)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var rp=new V,op=new V,yf=new i0,_f=new i0,bf=new i0,qc=class extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let u,h;this.closed||l>0?u=s[(l-1)%r]:(op.subVectors(s[0],s[1]).add(s[0]),u=op);let p=s[l%r],m=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(rp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rp),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,y=Math.pow(u.distanceToSquared(p),x),M=Math.pow(p.distanceToSquared(m),x),c=Math.pow(m.distanceToSquared(h),x);M<1e-4&&(M=1),y<1e-4&&(y=M),c<1e-4&&(c=M),yf.initNonuniformCatmullRom(u.x,p.x,m.x,h.x,y,M,c),_f.initNonuniformCatmullRom(u.y,p.y,m.y,h.y,y,M,c),bf.initNonuniformCatmullRom(u.z,p.z,m.z,h.z,y,M,c)}else this.curveType==="catmullrom"&&(yf.initCatmullRom(u.x,p.x,m.x,h.x,this.tension),_f.initCatmullRom(u.y,p.y,m.y,h.y,this.tension),bf.initCatmullRom(u.z,p.z,m.z,h.z,this.tension));return n.set(yf.calc(a),_f.calc(a),bf.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ap(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,a=i*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*i+t}function Wv(i,e){let t=1-i;return t*t*e}function Gv(i,e){return 2*(1-i)*i*e}function Xv(i,e){return i*i*e}function Ra(i,e,t,n){return Wv(i,e)+Gv(i,t)+Xv(i,n)}function qv(i,e){let t=1-i;return t*t*t*e}function Yv(i,e){let t=1-i;return 3*t*t*i*e}function Zv(i,e){return 3*(1-i)*i*i*e}function Kv(i,e){return i*i*i*e}function Ca(i,e,t,n,s){return qv(i,e)+Yv(i,t)+Zv(i,n)+Kv(i,s)}var Wa=class extends Ei{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ca(e,s.x,r.x,o.x,l.x),Ca(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yc=class extends Ei{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ca(e,s.x,r.x,o.x,l.x),Ca(e,s.y,r.y,o.y,l.y),Ca(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ga=class extends Ei{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends Ei{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Ei{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ra(e,s.x,r.x,o.x),Ra(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kc=class extends Ei{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ra(e,s.x,r.x,o.x),Ra(e,s.y,r.y,o.y),Ra(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,a=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(ap(l,a.x,u.x,h.x,p.x),ap(l,a.y,u.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Le().fromArray(s))}return this}},lp=Object.freeze({__proto__:null,ArcCurve:Xc,CatmullRomCurve3:qc,CubicBezierCurve:Wa,CubicBezierCurve3:Yc,EllipseCurve:Ro,LineCurve:Ga,LineCurve3:Zc,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:Kc,SplineCurve:qa}),$c=class extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],a=l.getLength(),u=a===0?0:1-o/a;return l.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let u=0;u<a.length;u++){let h=a[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new lp[s.type]().fromJSON(s))}return this}},Ya=class extends $c{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ga(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xa(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new Wa(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,a){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,l,a),this}absellipse(e,t,n,s,r,o,l,a){let u=new Ro(e,t,n,s,r,o,l,a);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Co=class extends Ya{constructor(e){super(e),this.uuid=Oo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ya().fromJSON(s))}return this}};function $v(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,a,u;if(n&&(r=tx(i,e,r,t)),i.length>80*t){l=i[0],a=i[1];let h=l,p=a;for(let m=t;m<s;m+=t){let x=i[m],y=i[m+1];x<l&&(l=x),y<a&&(a=y),x>h&&(h=x),y>p&&(p=y)}u=Math.max(h-l,p-a),u=u!==0?32767/u:0}return Za(r,o,t,l,a,u,0),o}function sm(i,e,t,n,s){let r;if(s===fx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=cp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=cp(o/n|0,i[o],i[o+1],r);return r&&Po(r,r.next)&&($a(r),r=r.next),r}function Lr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Po(t,t.next)||gn(t.prev,t,t.next)===0)){if($a(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Za(i,e,t,n,s,r,o){if(!i)return;!o&&r&&ox(i,n,s,r);let l=i;for(;i.prev!==i.next;){let a=i.prev,u=i.next;if(r?jv(i,n,s,r):Jv(i)){e.push(a.i,i.i,u.i),$a(i),i=u.next,l=u.next;continue}if(i=u,i===l){o?o===1?(i=Qv(Lr(i),e),Za(i,e,t,n,s,r,2)):o===2&&ex(i,e,t,n,s,r):Za(Lr(i),e,t,n,s,r,1);break}}}function Jv(i){let e=i.prev,t=i,n=i.next;if(gn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,a=t.y,u=n.y,h=Math.min(s,r,o),p=Math.min(l,a,u),m=Math.max(s,r,o),x=Math.max(l,a,u),y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=m&&y.y>=p&&y.y<=x&&Aa(s,l,r,a,o,u,y.x,y.y)&&gn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function jv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(gn(s,r,o)>=0)return!1;let l=s.x,a=r.x,u=o.x,h=s.y,p=r.y,m=o.y,x=Math.min(l,a,u),y=Math.min(h,p,m),M=Math.max(l,a,u),c=Math.max(h,p,m),f=Cf(x,y,e,t,n),d=Cf(M,c,e,t,n),g=i.prevZ,v=i.nextZ;for(;g&&g.z>=f&&v&&v.z<=d;){if(g.x>=x&&g.x<=M&&g.y>=y&&g.y<=c&&g!==s&&g!==o&&Aa(l,h,a,p,u,m,g.x,g.y)&&gn(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=x&&v.x<=M&&v.y>=y&&v.y<=c&&v!==s&&v!==o&&Aa(l,h,a,p,u,m,v.x,v.y)&&gn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=f;){if(g.x>=x&&g.x<=M&&g.y>=y&&g.y<=c&&g!==s&&g!==o&&Aa(l,h,a,p,u,m,g.x,g.y)&&gn(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=d;){if(v.x>=x&&v.x<=M&&v.y>=y&&v.y<=c&&v!==s&&v!==o&&Aa(l,h,a,p,u,m,v.x,v.y)&&gn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qv(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Po(n,s)&&om(n,t,t.next,s)&&Ka(n,s)&&Ka(s,n)&&(e.push(n.i,t.i,s.i),$a(t),$a(t.next),t=i=s),t=t.next}while(t!==i);return Lr(t)}function ex(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&cx(o,l)){let a=am(o,l);o=Lr(o,o.next),a=Lr(a,a.next),Za(o,e,t,n,s,r,0),Za(a,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function tx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,a=r<o-1?e[r+1]*n:i.length,u=sm(i,l,a,n,!1);u===u.next&&(u.steiner=!0),s.push(lx(u))}s.sort(nx);for(let r=0;r<s.length;r++)t=ix(s[r],t);return t}function nx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ix(i,e){let t=sx(i,e);if(!t)return e;let n=am(t,i);return Lr(n,n.next),Lr(t,t.next)}function sx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Po(i,t))return t;do{if(Po(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,a=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&rm(s<u?n:r,s,a,u,s<u?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);Ka(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&rx(o,t)))&&(o=t,h=p)}t=t.next}while(t!==l);return o}function rx(i,e){return gn(i.prev,i,e.prev)<0&&gn(e.next,i,i.next)<0}function ox(i,e,t,n){let s=i;do s.z===0&&(s.z=Cf(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ax(s)}function ax(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let u=0;u<t&&(l++,o=o.nextZ,!!o);u++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,a--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Cf(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rm(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function Aa(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&rm(i,e,t,n,s,r,o,l)}function cx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ux(i,e)&&(Ka(i,e)&&Ka(e,i)&&hx(i,e)&&(gn(i.prev,i,e.prev)||gn(i,e.prev,e))||Po(i,e)&&gn(i.prev,i,i.next)>0&&gn(e.prev,e,e.next)>0)}function gn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Po(i,e){return i.x===e.x&&i.y===e.y}function om(i,e,t,n){let s=Mc(gn(i,e,t)),r=Mc(gn(i,e,n)),o=Mc(gn(t,n,i)),l=Mc(gn(t,n,e));return!!(s!==r&&o!==l||s===0&&bc(i,t,e)||r===0&&bc(i,n,e)||o===0&&bc(t,i,n)||l===0&&bc(t,e,n))}function bc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Mc(i){return i>0?1:i<0?-1:0}function ux(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&om(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ka(i,e){return gn(i.prev,i,i.next)<0?gn(i,e,i.next)>=0&&gn(i,i.prev,e)>=0:gn(i,e,i.prev)<0||gn(i,i.next,e)<0}function hx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function am(i,e){let t=Pf(i.i,i.x,i.y),n=Pf(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cp(i,e,t,n){let s=Pf(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $a(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pf(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var If=class{static triangulate(e,t,n=2){return $v(e,t,n)}},xo=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];up(e),hp(n,e);let o=e.length;t.forEach(up);for(let a=0;a<t.length;a++)s.push(o),o+=t[a].length,hp(n,t[a]);let l=If.triangulate(n,s);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}};function up(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ja=class i extends Gc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var rn=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(s),u=l+1,h=a+1,p=e/l,m=t/a,x=[],y=[],M=[],c=[];for(let f=0;f<h;f++){let d=f*m-o;for(let g=0;g<u;g++){let v=g*p-r;y.push(v,-d,0),M.push(0,0,1),c.push(g/l),c.push(1-f/a)}}for(let f=0;f<a;f++)for(let d=0;d<l;d++){let g=d+u*f,v=d+u*(f+1),b=d+1+u*(f+1),T=d+1+u*f;x.push(g,v,T),x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new $e(y,3)),this.setAttribute("normal",new $e(M,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ja=class i extends vt{constructor(e=new Co([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],l=0,a=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(o,2));function u(h){let p=s.length/3,m=h.extractPoints(t),x=m.shape,y=m.holes;xo.isClockWise(x)===!1&&(x=x.reverse());for(let c=0,f=y.length;c<f;c++){let d=y[c];xo.isClockWise(d)===!0&&(y[c]=d.reverse())}let M=xo.triangulateShape(x,y);for(let c=0,f=y.length;c<f;c++){let d=y[c];x=x.concat(d)}for(let c=0,f=x.length;c<f;c++){let d=x[c];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let c=0,f=M.length;c<f;c++){let d=M[c],g=d[0]+p,v=d[1]+p,b=d[2]+p;n.push(g,v,b),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return dx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function dx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Qa=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let a=Math.min(o+l,Math.PI),u=0,h=[],p=new V,m=new V,x=[],y=[],M=[],c=[];for(let f=0;f<=n;f++){let d=[],g=f/n,v=o+g*l,b=e*Math.cos(v),T=Math.sqrt(e*e-b*b),w=0;f===0&&o===0?w=.5/t:f===n&&a===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){let S=_/t,E=s+S*r;p.x=-T*Math.cos(E),p.y=b,p.z=T*Math.sin(E),y.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),c.push(S+w,1-g),d.push(u++)}h.push(d)}for(let f=0;f<n;f++)for(let d=0;d<t;d++){let g=h[f][d+1],v=h[f][d],b=h[f+1][d],T=h[f+1][d+1];(f!==0||o>0)&&x.push(g,v,T),(f!==n-1||a<Math.PI)&&x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new $e(y,3)),this.setAttribute("normal",new $e(M,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var el=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let a=[],u=[],h=[],p=[],m=new V,x=new V,y=new V;for(let M=0;M<=n;M++){let c=o+M/n*l;for(let f=0;f<=s;f++){let d=f/s*r;x.x=(e+t*Math.cos(c))*Math.cos(d),x.y=(e+t*Math.cos(c))*Math.sin(d),x.z=t*Math.sin(c),u.push(x.x,x.y,x.z),m.x=e*Math.cos(d),m.y=e*Math.sin(d),y.subVectors(x,m).normalize(),h.push(y.x,y.y,y.z),p.push(f/s),p.push(M/n)}}for(let M=1;M<=n;M++)for(let c=1;c<=s;c++){let f=(s+1)*M+c-1,d=(s+1)*(M-1)+c-1,g=(s+1)*(M-1)+c,v=(s+1)*M+c;a.push(f,d,v),a.push(d,g,v)}this.setIndex(a),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ur(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(fp(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fp(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jn(i){let e={};for(let t=0;t<i.length;t++){let n=Ur(i[t]);for(let s in n)e[s]=n[s]}return e}function fp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function px(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function s0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}var Br={clone:Ur,merge:jn},mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Jc=class extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var on=class extends gs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var nr=class extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jc=class extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mf(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ir=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qc=class extends ir{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tf,endingEnd:Tf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],a=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Ef:r=e,l=2*t-n;break;case Af:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Ef:o=e,a=2*n-t;break;case Af:o=1,a=n+s[1]-s[0];break;default:o=e-1,a=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,x=this._weightNext,y=(n-t)/(s-t),M=y*y,c=M*y,f=-m*c+2*m*M-m*y,d=(1+m)*c+(-1.5-2*m)*M+(-.5+m)*y+1,g=(-1-x)*c+(1.5+x)*M+.5*y,v=x*c-x*M;for(let b=0;b!==l;++b)r[b]=f*o[h+b]+d*o[u+b]+g*o[a+b]+v*o[p+b];return r}},eu=class extends ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=(n-t)/(s-t),p=1-h;for(let m=0;m!==l;++m)r[m]=o[u+m]*p+o[a+m]*h;return r}},tu=class extends ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nu=class extends ir{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let y=(n-t)/(s-t),M=1-y;for(let c=0;c!==l;++c)r[c]=o[u+c]*M+o[a+c]*y;return r}let m=l*2,x=e-1;for(let y=0;y!==l;++y){let M=o[u+y],c=o[a+y],f=x*m+y*2,d=p[f],g=p[f+1],v=e*m+y*2,b=h[v],T=h[v+1],w=xx(n,t,d,b,s);r[y]=lm(w,M,g,T,c)}return r}};function lm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function vx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function xx(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=lm(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let a=vx(r,e,t,n,s);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}var Ai=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Mf(e.settings)&&(n.settings={inTangents:fo(e.settings.inTangents,Array),outTangents:fo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pa:t=this.InterpolantFactoryMethodDiscrete;break;case Uc:t=this.InterpolantFactoryMethodLinear;break;case Tc:t=this.InterpolantFactoryMethodSmooth;break;case wf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ct("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return Uc;case this.InterpolantFactoryMethodSmooth:return Tc;case this.InterpolantFactoryMethodBezier:return wf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Mf(this.settings)&&(dp(this.settings.inTangents,e),dp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let a=n[l];if(typeof a=="number"&&isNaN(a)){pt("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){pt("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(s!==void 0&&Mv(s))for(let l=0,a=s.length;l!==a;++l){let u=s[l];if(isNaN(u)){pt("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tc,r=e.length-1,o=1;for(let l=1;l<r;++l){let a=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(s)a=!0;else{let p=l*n,m=p-n,x=p+n;for(let y=0;y!==n;++y){let M=t[p+y];if(M!==t[m+y]||M!==t[x+y]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];let p=l*n,m=o*n;for(let x=0;x!==n;++x)t[m+x]=t[p+x]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,u=0;u!==n;++u)t[a+u]=t[l+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Mf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function dp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Uc;var sr=class extends Ai{constructor(e,t,n){super(e,t,n)}};sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Pa;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var iu=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}};iu.prototype.ValueTypeName="color";var su=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}};su.prototype.ValueTypeName="number";var ru=class extends ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(s-t),u=e*l;for(let h=u+l;u!==h;u+=4)vn.slerpFlat(r,0,o,u-l,o,u,a);return r}},tl=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}};tl.prototype.ValueTypeName="quaternion";tl.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends Ai{constructor(e,t,n){super(e,t,n)}};rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Pa;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var ou=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}};ou.prototype.ValueTypeName="vector";var Ac={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(pp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!pp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function pp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var au=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,a,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=u.length;p<m;p+=2){let x=u[p],y=u[p+1];if(x.global&&(x.lastIndex=0),x.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cm=new au,Io=class{constructor(e){this.manager=e!==void 0?e:cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Io.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=new WeakMap,lu=class extends Io{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ac.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=po.get(o);p===void 0&&(p=[],po.set(o,p)),p.push({onLoad:t,onError:s})}return o}let l=bo("img");function a(){h(),t&&t(this);let p=po.get(this)||[];for(let m=0;m<p.length;m++){let x=p[m];x.onLoad&&x.onLoad(this)}po.delete(this),r.manager.itemEnd(e)}function u(p){h(),s&&s(p),Ac.remove(`image:${e}`);let m=po.get(this)||[];for(let x=0;x<m.length;x++){let y=m[x];y.onError&&y.onError(p)}po.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Ac.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var nl=class extends Io{constructor(e){super(e)}load(e,t,n,s){let r=new Zn,o=new lu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Lo=class extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},il=class extends Lo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Sf=new je,mp=new V,gp=new V,sl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(mp),gp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Sf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Sf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,a=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===_o||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sc=new V,wc=new vn,fs=new V,Us=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=is,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,wc,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,wc,fs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sc,wc,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,wc,fs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qs=new V,vp=new Le,xp=new Le,Hn=class extends Us{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($h*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan($h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z),Qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qs.x,Qs.y).multiplyScalar(-e/Qs.z)}getViewSize(e,t){return this.getViewBounds(e,vp,xp),t.subVectors(xp,vp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($h*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/a,t-=o.offsetY*n/u,s*=o.width/a,n*=o.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lf=class extends sl{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Da*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},rl=class extends Lo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var or=class extends Us{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,a=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Df=class extends sl{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends Lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new Df}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vs=class extends vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var mo=-90,go=1,cu=class extends Rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(mo,go,e,t);s.layers=this.layers,this.add(s);let r=new Hn(mo,go,e,t);r.layers=this.layers,this.add(r);let o=new Hn(mo,go,e,t);o.layers=this.layers,this.add(o);let l=new Hn(mo,go,e,t);l.layers=this.layers,this.add(l);let a=new Hn(mo,go,e,t);a.layers=this.layers,this.add(a);let u=new Hn(mo,go,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,a]=t;for(let u of t)this.remove(u);if(e===is)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,a,u,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,m,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},uu=class extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ol=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=yx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function yx(){this._document.hidden===!1&&this.reset()}var r0="\\[\\]\\.:\\/",_x=new RegExp("["+r0+"]","g"),o0="[^"+r0+"]",bx="[^"+r0.replace("\\.","")+"]",Mx=/((?:WC+[\/:])*)/.source.replace("WC",o0),Sx=/(WCOD+)?/.source.replace("WCOD",bx),wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",o0),Tx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",o0),Ex=new RegExp("^"+Mx+Sx+wx+Tx+"$"),Ax=["material","materials","bones","map"],Nf=class{constructor(e,t,n){let s=n||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},sn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_x,"")}static parseTrackName(e){let t=Ex.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let a=n(l.children);if(a)return a}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;pt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=Nf;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R3=new Float32Array(1);var f0=class f0{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};f0.prototype.isMatrix2=!0;var Ff=f0;function a0(i,e,t,n){let s=Rx(n);switch(t){case Qf:return i*e;case cr:return i*e/s.components*s.byteLength;case xu:return i*e/s.components*s.byteLength;case ur:return i*e*2/s.components*s.byteLength;case yu:return i*e*2/s.components*s.byteLength;case e0:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case _u:return i*e*4/s.components*s.byteLength;case ul:case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mu:case wu:return Math.max(i,16)*Math.max(e,8)/4;case bu:case Su:return Math.max(i,8)*Math.max(e,8)/2;case Tu:case Eu:case Ru:case Cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Au:case pl:case Pu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Du:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ku:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xu:case qu:case Yu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zu:case Ku:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ml:case $u:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rx(i){switch(i){case $n:case Kf:return{byteLength:1,components:1};case Uo:case $f:case Cn:return{byteLength:2,components:1};case gu:case vu:return{byteLength:2,components:4};case ls:case mu:case Oi:return{byteLength:4,components:1};case Jf:case jf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Im(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fx(i){let e=new WeakMap;function t(l,a){let u=l.array,h=l.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(a,m),i.bufferData(a,u,h),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,a,u){let h=a.array,p=a.updateRanges;if(i.bindBuffer(u,l),p.length===0)i.bufferSubData(u,0,h);else{p.sort((x,y)=>x.start-y.start);let m=0;for(let x=1;x<p.length;x++){let y=p[m],M=p[x];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++m,p[m]=M)}p.length=m+1;for(let x=0,y=p.length;x<y;x++){let M=p[x];i.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let a=e.get(l);a&&(i.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,a));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,a),u.version=l.version}}return{get:s,remove:r,update:o}}var Ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bx=`#ifdef USE_ALPHAHASH
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
#endif`,Ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vx=`#ifdef USE_AOMAP
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
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gx=`#ifdef USE_BATCHING
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
#endif`,Xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kx=`#ifdef USE_IRIDESCENCE
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
#endif`,$x=`#ifdef USE_BUMPMAP
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,r2=`#define PI 3.141592653589793
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
} // validated`,o2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a2=`vec3 transformedNormal = objectNormal;
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
#endif`,l2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f2="gl_FragColor = linearToOutputTexel( gl_FragColor );",d2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p2=`#ifdef USE_ENVMAP
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
#endif`,m2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,g2=`#ifdef USE_ENVMAP
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
#endif`,v2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
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
#endif`,y2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S2=`#ifdef USE_GRADIENTMAP
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
}`,w2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R2=`#ifdef USE_ENVMAP
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
#endif`,C2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D2=`PhysicalMaterial material;
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
#endif`,N2=`uniform sampler2D dfgLUT;
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
}`,F2=`
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
#endif`,U2=`#if defined( RE_IndirectDiffuse )
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
#endif`,B2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,k2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q2=`#if defined( USE_POINTS_UV )
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
#endif`,Y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`#ifdef USE_MORPHTARGETS
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
#endif`,Q2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ry=`#ifdef USE_NORMALMAP
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
#endif`,oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,my=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,by=`float getShadowMask() {
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
}`,My=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ty=`#ifdef USE_SKINNING
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
#endif`,Ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
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
#endif`,Iy=`#ifdef USE_TRANSMISSION
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,By=`uniform sampler2D t2D;
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ky=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`#include <common>
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
}`,Wy=`#if DEPTH_PACKING == 3200
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
}`,Gy=`#define DISTANCE
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
}`,Xy=`#define DISTANCE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`uniform float scale;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,Jy=`uniform vec3 diffuse;
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
}`,jy=`#define LAMBERT
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
}`,Qy=`#define LAMBERT
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
}`,e_=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,i_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,r_=`#define PHONG
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
}`,o_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,l_=`#define TOON
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
}`,c_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,h_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,d_=`uniform vec3 color;
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
}`,p_=`uniform float rotation;
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
}`,m_=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Ux,alphahash_pars_fragment:Bx,alphamap_fragment:Ox,alphamap_pars_fragment:kx,alphatest_fragment:zx,alphatest_pars_fragment:Hx,aomap_fragment:Vx,aomap_pars_fragment:Wx,batching_pars_vertex:Gx,batching_vertex:Xx,begin_vertex:qx,beginnormal_vertex:Yx,bsdfs:Zx,iridescence_fragment:Kx,bumpmap_pars_fragment:$x,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Qx,clipping_planes_vertex:e2,color_fragment:t2,color_pars_fragment:n2,color_pars_vertex:i2,color_vertex:s2,common:r2,cube_uv_reflection_fragment:o2,defaultnormal_vertex:a2,displacementmap_pars_vertex:l2,displacementmap_vertex:c2,emissivemap_fragment:u2,emissivemap_pars_fragment:h2,colorspace_fragment:f2,colorspace_pars_fragment:d2,envmap_fragment:p2,envmap_common_pars_fragment:m2,envmap_pars_fragment:g2,envmap_pars_vertex:v2,envmap_physical_pars_fragment:R2,envmap_vertex:x2,fog_vertex:y2,fog_pars_vertex:_2,fog_fragment:b2,fog_pars_fragment:M2,gradientmap_pars_fragment:S2,lightmap_pars_fragment:w2,lights_lambert_fragment:T2,lights_lambert_pars_fragment:E2,lights_pars_begin:A2,lights_toon_fragment:C2,lights_toon_pars_fragment:P2,lights_phong_fragment:I2,lights_phong_pars_fragment:L2,lights_physical_fragment:D2,lights_physical_pars_fragment:N2,lights_fragment_begin:F2,lights_fragment_maps:U2,lights_fragment_end:B2,lightprobes_pars_fragment:O2,logdepthbuf_fragment:k2,logdepthbuf_pars_fragment:z2,logdepthbuf_pars_vertex:H2,logdepthbuf_vertex:V2,map_fragment:W2,map_pars_fragment:G2,map_particle_fragment:X2,map_particle_pars_fragment:q2,metalnessmap_fragment:Y2,metalnessmap_pars_fragment:Z2,morphinstance_vertex:K2,morphcolor_vertex:$2,morphnormal_vertex:J2,morphtarget_pars_vertex:j2,morphtarget_vertex:Q2,normal_fragment_begin:ey,normal_fragment_maps:ty,normal_pars_fragment:ny,normal_pars_vertex:iy,normal_vertex:sy,normalmap_pars_fragment:ry,clearcoat_normal_fragment_begin:oy,clearcoat_normal_fragment_maps:ay,clearcoat_pars_fragment:ly,iridescence_pars_fragment:cy,opaque_fragment:uy,packing:hy,premultiplied_alpha_fragment:fy,project_vertex:dy,dithering_fragment:py,dithering_pars_fragment:my,roughnessmap_fragment:gy,roughnessmap_pars_fragment:vy,shadowmap_pars_fragment:xy,shadowmap_pars_vertex:yy,shadowmap_vertex:_y,shadowmask_pars_fragment:by,skinbase_vertex:My,skinning_pars_vertex:Sy,skinning_vertex:wy,skinnormal_vertex:Ty,specularmap_fragment:Ey,specularmap_pars_fragment:Ay,tonemapping_fragment:Ry,tonemapping_pars_fragment:Cy,transmission_fragment:Py,transmission_pars_fragment:Iy,uv_pars_fragment:Ly,uv_pars_vertex:Dy,uv_vertex:Ny,worldpos_vertex:Fy,background_vert:Uy,background_frag:By,backgroundCube_vert:Oy,backgroundCube_frag:ky,cube_vert:zy,cube_frag:Hy,depth_vert:Vy,depth_frag:Wy,distance_vert:Gy,distance_frag:Xy,equirect_vert:qy,equirect_frag:Yy,linedashed_vert:Zy,linedashed_frag:Ky,meshbasic_vert:$y,meshbasic_frag:Jy,meshlambert_vert:jy,meshlambert_frag:Qy,meshmatcap_vert:e_,meshmatcap_frag:t_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:s_,meshphong_frag:r_,meshphysical_vert:o_,meshphysical_frag:a_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:u_,points_frag:h_,shadow_vert:f_,shadow_frag:d_,sprite_vert:p_,sprite_frag:m_},Ye={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},_s={basic:{uniforms:jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:jn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:jn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new fe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:jn([Ye.points,Ye.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:jn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:jn([Ye.common,Ye.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:jn([Ye.sprite,Ye.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:jn([Ye.common,Ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:jn([Ye.lights,Ye.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};_s.physical={uniforms:jn([_s.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var eh={r:0,b:0,g:0},g_=new je,Lm=new gt;Lm.set(-1,0,0,0,1,0,0,0,1);function v_(i,e,t,n,s,r){let o=new fe(0),l=s===!0?0:1,a,u,h=null,p=0,m=null;function x(d){let g=d.isScene===!0?d.background:null;if(g&&g.isTexture){let v=d.backgroundBlurriness>0;g=e.get(g,v)}return g}function y(d){let g=!1,v=x(d);v===null?c(o,l):v&&v.isColor&&(c(v,1),g=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||g)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(d,g){let v=x(g);v&&(v.isCubeTexture||v.mapping===ll)?(u===void 0&&(u=new ht(new Qt(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Ur(_s.backgroundCube.uniforms),vertexShader:_s.backgroundCube.vertexShader,fragmentShader:_s.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(g.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Lm),u.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Wt,(h!==v||p!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new ht(new rn(2,2),new ft({name:"BackgroundMaterial",uniforms:Ur(_s.background.uniforms),vertexShader:_s.background.vertexShader,fragmentShader:_s.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,a.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||m!==i.toneMapping)&&(a.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),a.layers.enableAll(),d.unshift(a,a.geometry,a.material,0,0,null))}function c(d,g){d.getRGB(eh,s0(i)),t.buffers.color.setClear(eh.r,eh.g,eh.b,g,r)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,g=1){o.set(d),l=g,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,c(o,l)},render:y,addToRenderList:M,dispose:f}}function x_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function l(R,C,P,A,L){let D=!1,O=p(R,A,P,C);r!==O&&(r=O,u(r.object)),D=x(R,A,P,L),D&&y(R,A,P,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(R,C,P,A),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function a(){return i.createVertexArray()}function u(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function p(R,C,P,A){let L=A.wireframe===!0,D=n[C.id];D===void 0&&(D={},n[C.id]=D);let O=R.isInstancedMesh===!0?R.id:0,z=D[O];z===void 0&&(z={},D[O]=z);let B=z[P.id];B===void 0&&(B={},z[P.id]=B);let H=B[L];return H===void 0&&(H=m(a()),B[L]=H),H}function m(R){let C=[],P=[],A=[];for(let L=0;L<t;L++)C[L]=0,P[L]=0,A[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:A,object:R,attributes:{},index:null}}function x(R,C,P,A){let L=r.attributes,D=C.attributes,O=0,z=P.getAttributes();for(let B in z)if(z[B].location>=0){let k=L[B],X=D[B];if(X===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),k===void 0||k.attribute!==X||X&&k.data!==X.data)return!0;O++}return r.attributesNum!==O||r.index!==A}function y(R,C,P,A){let L={},D=C.attributes,O=0,z=P.getAttributes();for(let B in z)if(z[B].location>=0){let k=D[B];k===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(k=R.instanceColor));let X={};X.attribute=k,k&&k.data&&(X.data=k.data),L[B]=X,O++}r.attributes=L,r.attributesNum=O,r.index=A}function M(){let R=r.newAttributes;for(let C=0,P=R.length;C<P;C++)R[C]=0}function c(R){f(R,0)}function f(R,C){let P=r.newAttributes,A=r.enabledAttributes,L=r.attributeDivisors;P[R]=1,A[R]===0&&(i.enableVertexAttribArray(R),A[R]=1),L[R]!==C&&(i.vertexAttribDivisor(R,C),L[R]=C)}function d(){let R=r.newAttributes,C=r.enabledAttributes;for(let P=0,A=C.length;P<A;P++)C[P]!==R[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function g(R,C,P,A,L,D,O){O===!0?i.vertexAttribIPointer(R,C,P,L,D):i.vertexAttribPointer(R,C,P,A,L,D)}function v(R,C,P,A){M();let L=A.attributes,D=P.getAttributes(),O=C.defaultAttributeValues;for(let z in D){let B=D[z];if(B.location>=0){let H=L[z];if(H===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){let k=H.normalized,X=H.itemSize,K=e.get(H);if(K===void 0)continue;let be=K.buffer,we=K.type,Se=K.bytesPerElement,G=we===i.INT||we===i.UNSIGNED_INT||H.gpuType===mu;if(H.isInterleavedBufferAttribute){let $=H.data,ge=$.stride,Pe=H.offset;if($.isInstancedInterleavedBuffer){for(let te=0;te<B.locationSize;te++)f(B.location+te,$.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let te=0;te<B.locationSize;te++)c(B.location+te);i.bindBuffer(i.ARRAY_BUFFER,be);for(let te=0;te<B.locationSize;te++)g(B.location+te,X/B.locationSize,we,k,ge*Se,(Pe+X/B.locationSize*te)*Se,G)}else{if(H.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)f(B.location+$,H.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let $=0;$<B.locationSize;$++)c(B.location+$);i.bindBuffer(i.ARRAY_BUFFER,be);for(let $=0;$<B.locationSize;$++)g(B.location+$,X/B.locationSize,we,k,X*Se,X/B.locationSize*$*Se,G)}}else if(O!==void 0){let k=O[z];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(B.location,k);break;case 3:i.vertexAttrib3fv(B.location,k);break;case 4:i.vertexAttrib4fv(B.location,k);break;default:i.vertexAttrib1fv(B.location,k)}}}}d()}function b(){S();for(let R in n){let C=n[R];for(let P in C){let A=C[P];for(let L in A){let D=A[L];for(let O in D)h(D[O].object),delete D[O];delete A[L]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let C=n[R.id];for(let P in C){let A=C[P];for(let L in A){let D=A[L];for(let O in D)h(D[O].object),delete D[O];delete A[L]}}delete n[R.id]}function w(R){for(let C in n){let P=n[C];for(let A in P){let L=P[A];if(L[R.id]===void 0)continue;let D=L[R.id];for(let O in D)h(D[O].object),delete D[O];delete L[R.id]}}}function _(R){for(let C in n){let P=n[C],A=R.isInstancedMesh===!0?R.id:0,L=P[A];if(L!==void 0){for(let D in L){let O=L[D];for(let z in O)h(O[z].object),delete O[z];delete L[D]}delete P[A],Object.keys(P).length===0&&delete n[C]}}}function S(){E(),o=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:S,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:c,disableUnusedAttributes:d}}function y_(i,e,t){let n;function s(a){n=a}function r(a,u){i.drawArrays(n,a,u),t.update(u,n,1)}function o(a,u,h){h!==0&&(i.drawArraysInstanced(n,a,u,h),t.update(u,n,h))}function l(a,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,u,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function __(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Jn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){let _=w===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==$n&&w!==Oi&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function a(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=a(u);h!==u&&(ct("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:c,maxAttributes:f,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:v,maxSamples:b,samples:T}}function b_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ns,l=new gt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let x=p.length!==0||m||n!==0||s;return s=m,n=p.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,x){let y=p.clippingPlanes,M=p.clipIntersection,c=p.clipShadows,f=i.get(p);if(!s||y===null||y.length===0||r&&!c)r?h(null):u();else{let d=r?0:n,g=d*4,v=f.clippingState||null;a.value=v,v=h(y,m,g,x);for(let b=0;b!==g;++b)v[b]=t[b];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=d}};function u(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,x,y){let M=p!==null?p.length:0,c=null;if(M!==0){if(c=a.value,y!==!0||c===null){let f=x+M*4,d=m.matrixWorldInverse;l.getNormalMatrix(d),(c===null||c.length<f)&&(c=new Float32Array(f));for(let g=0,v=x;g!==M;++g,v+=4)o.copy(p[g]).applyMatrix4(d,l),o.normal.toArray(c,v),c[v+3]=o.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,c}}var zo=4,M_=6,S_=20,w_=256,gl=new or,um=new fe,d0=null,p0=0,m0=0,g0=!1,T_=new V,Or=new V,nh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=T_}=r;d0=this._renderer.getRenderTarget(),p0=this._renderer.getActiveCubeFace(),m0=this._renderer.getActiveMipmapLevel(),g0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a,l),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(d0,p0,m0),this._renderer.xr.enabled=g0,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),d0=this._renderer.getRenderTarget(),p0=this._renderer.getActiveCubeFace(),m0=this._renderer.getActiveMipmapLevel(),g0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Cn,format:Jn,colorSpace:Ia,depthBuffer:!1},s=hm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=E_(r)),this._blurMaterial=R_(r,e,t),this._ggxMaterial=A_(r,e,t)}return s}_compileMaterial(e){let t=new ht(new vt,e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,n,s,r){let a=new Hn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,x=p.toneMapping;p.getClearColor(um),p.toneMapping=as,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new Qt,new xn({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,c=M.material,f=!1,d=e.background;d?d.isColor&&(c.color.copy(d),e.background=null,f=!0):(c.color.copy(um),f=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+h[g],r.y,r.z)):v===1?(a.up.set(0,0,u[g]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+h[g],r.z)):(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+h[g]));let b=this._cubeSize;ko(s,v*b,g>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(M,a),p.render(e,a)}p.toneMapping=x,p.autoClear=m,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ar||e.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let a=this._cubeSize;ko(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,gl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let a=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),m=u*1.25,x=p*m,{_lodMax:y}=this,M=this._sizeLods[n],c=3*M*(n>y-zo?n-y+zo:0),f=4*(this._cubeSize-M);a.envMap.value=e.texture,a.roughness.value=x,a.mipInt.value=y-t,ko(r,c,f,3*M,2*M),s.setRenderTarget(r),s.render(l,gl),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=y-n,ko(e,c,f,3*M,2*M),s.setRenderTarget(e),s.render(l,gl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,a=this._lodMeshes[s];a.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-zo?s-this._lodMax+zo:0),m=4*(this._cubeSize-h);ko(t,p,m,3*h,2*h),o.setRenderTarget(t),o.render(a,gl)}};function E_(i){let e=[],t=[],n=i,s=i-zo+1+M_;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),a=-l,u=1+l,h=[a,a,u,a,u,u,a,a,u,u,a,u],p=6,m=6,x=3,y=new Float32Array(x*m*p),M=new Float32Array(x*m*p);for(let f=0;f<p;f++){let d=f%3*2/3-1,g=f>2?0:-1,v=[d,g,0,d+2/3,g,0,d+2/3,g+1,0,d,g,0,d+2/3,g+1,0,d,g+1,0];y.set(v,x*m*f);for(let b=0;b<m;b++){let T=h[b*2]*2-1,w=h[b*2+1]*2-1;f===0?Or.set(1,w,T):f===1?Or.set(-T,1,-w):f===2?Or.set(-T,w,1):f===3?Or.set(-1,w,-T):f===4?Or.set(-T,-1,w):Or.set(T,w,-1),Or.toArray(M,(f*m+b)*x)}}let c=new vt;c.setAttribute("position",new bt(y,x)),c.setAttribute("outputDirection",new bt(M,x)),t.push(new ht(c,null)),n>zo&&n--}return{lodMeshes:t,sizeLods:e}}function hm(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function A_(i,e,t){return new ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:w_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rh(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function R_(i,e,t){return new ft({name:"SphericalGaussianBlur",defines:{SAMPLES:S_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rh(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function fm(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function dm(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ih=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ha(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:oi});r.uniforms.tEquirect.value=t;let o=new ht(s,r),l=t.minFilter;return t.minFilter===In&&(t.minFilter=kt),new cu(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function C_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?o(m):r(m)}function r(m){if(m&&m.isTexture){let x=m.mapping;if(x===fu||x===du)if(e.has(m)){let y=e.get(m).texture;return l(y,m.mapping)}else{let y=m.image;if(y&&y.height>0){let M=new ih(y.height);return M.fromEquirectangularTexture(i,m),e.set(m,M),m.addEventListener("dispose",u),l(M.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let x=m.mapping,y=x===fu||x===du,M=x===ar||x===Fr;if(y||M){let c=t.get(m),f=c!==void 0?c.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==f)return n===null&&(n=new nh(i)),c=y?n.fromEquirectangular(m,c):n.fromCubemap(m,c),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),c.texture;if(c!==void 0)return c.texture;{let d=m.image;return y&&d&&d.height>0||M&&d&&a(d)?(n===null&&(n=new nh(i)),c=y?n.fromEquirectangular(m):n.fromCubemap(m),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),m.addEventListener("dispose",h),c.texture):null}}}return m}function l(m,x){return x===fu?m.mapping=ar:x===du&&(m.mapping=Fr),m}function a(m){let x=0,y=6;for(let M=0;M<y;M++)m[M]!==void 0&&x++;return x===y}function u(m){let x=m.target;x.removeEventListener("dispose",u);let y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function h(m){let x=m.target;x.removeEventListener("dispose",h);let y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function P_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Cr("WebGLRenderer: "+n+" extension not supported."),s}}}function I_(i,e,t,n){let s={},r=new WeakMap;function o(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",o),delete s[m.id];let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function a(p){let m=p.attributes;for(let x in m)e.update(m[x],i.ARRAY_BUFFER)}function u(p){let m=[],x=p.index,y=p.attributes.position,M=0;if(y===void 0)return;if(x!==null){let d=x.array;M=x.version;for(let g=0,v=d.length;g<v;g+=3){let b=d[g+0],T=d[g+1],w=d[g+2];m.push(b,T,T,w,w,b)}}else{let d=y.array;M=y.version;for(let g=0,v=d.length/3-1;g<v;g+=3){let b=g+0,T=g+1,w=g+2;m.push(b,T,T,w,w,b)}}let c=new(y.count>=65535?Oa:Ba)(m,1);c.version=M;let f=r.get(p);f&&e.remove(f),r.set(p,c)}function h(p){let m=r.get(p);if(m){let x=p.index;x!==null&&m.version<x.version&&u(p)}else u(p);return r.get(p)}return{get:l,update:a,getWireframeAttribute:h}}function L_(i,e,t){let n;function s(p){n=p}let r,o;function l(p){r=p.type,o=p.bytesPerElement}function a(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function u(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),t.update(m,n,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let M=0;for(let c=0;c<x;c++)M+=m[c];t.update(M,n,1)}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=u,this.renderMultiDraw=h}function D_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function N_(i,e,t){let n=new WeakMap,s=new mt;function r(o,l,a){let u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0,m=n.get(l);if(m===void 0||m.count!==p){let S=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();let x=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],g=0;x===!0&&(g=1),y===!0&&(g=2),M===!0&&(g=3);let v=l.attributes.position.count*g,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*b*4*p),w=new Na(T,v,b,p);w.type=Oi,w.needsUpdate=!0;let _=g*4;for(let E=0;E<p;E++){let R=c[E],C=f[E],P=d[E],A=v*b*4*E;for(let L=0;L<R.count;L++){let D=L*_;x===!0&&(s.fromBufferAttribute(R,L),T[A+D+0]=s.x,T[A+D+1]=s.y,T[A+D+2]=s.z,T[A+D+3]=0),y===!0&&(s.fromBufferAttribute(C,L),T[A+D+4]=s.x,T[A+D+5]=s.y,T[A+D+6]=s.z,T[A+D+7]=0),M===!0&&(s.fromBufferAttribute(P,L),T[A+D+8]=s.x,T[A+D+9]=s.y,T[A+D+10]=s.z,T[A+D+11]=P.itemSize===4?s.w:1)}}m={count:p,texture:w,size:new Le(v,b)},n.set(l,m),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let M=0;M<u.length;M++)x+=u[M];let y=l.morphTargetsRelative?1:1-x;a.getUniforms().setValue(i,"morphTargetBaseInfluence",y),a.getUniforms().setValue(i,"morphTargetInfluences",u)}a.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function F_(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let x=u.skeleton;r.get(x)!==h&&(x.update(),r.set(x,h))}return m}function l(){r=new WeakMap}function a(u){let h=u.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var U_={[Vf]:"LINEAR_TONE_MAPPING",[Wf]:"REINHARD_TONE_MAPPING",[Gf]:"CINEON_TONE_MAPPING",[Xf]:"ACES_FILMIC_TONE_MAPPING",[Yf]:"AGX_TONE_MAPPING",[al]:"NEUTRAL_TONE_MAPPING",[qf]:"CUSTOM_TONE_MAPPING"};function B_(i,e,t,n,s,r){let o=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,a=null,u=new vt;u.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new $e([0,2,0,0,2,0],2));let h=new Jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ht(u,h),m=new or(-1,1,1,-1,0,1),x=null,y=null,M=!1,c,f=null,d=[],g=!1;this.setSize=function(v,b){o.setSize(v,b),l!==null&&l.setSize(v,b),a!==null&&a.setSize(v,b);for(let T=0;T<d.length;T++){let w=d[T];w.setSize&&w.setSize(v,b)}},this.setEffects=function(v){d=v,g=d.length>0&&d[0].isRenderPass===!0;let b=o.width,T=o.height;d.length>0&&l===null&&(l=new Yt(b,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),a=new Yt(b,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<d.length;w++){let _=d[w];_.setSize&&_.setSize(b,T)}},this.begin=function(v,b){if(M||v.toneMapping===as&&d.length===0)return!1;if(f=b,b!==null){let T=b.width,w=b.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return g===!1&&v.setRenderTarget(o),c=v.toneMapping,v.toneMapping=as,!0},this.hasRenderPass=function(){return g},this.end=function(v,b){v.toneMapping=c,M=!0;let T=o,w=l;for(let _=0;_<d.length;_++){let S=d[_];S.enabled!==!1&&(S.render(v,w,T,b),S.needsSwap!==!1&&(T=w,w=w===l?a:l))}if(x!==v.outputColorSpace||y!==v.toneMapping){x=v.outputColorSpace,y=v.toneMapping,h.defines={},Lt.getTransfer(x)===Wt&&(h.defines.SRGB_TRANSFER="");let _=U_[y];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(f),v.render(p,m),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),u.dispose(),h.dispose()}}var Dm=new Zn,y0=new tr(1,1),Nm=new Na,Fm=new kc,Um=new Ha,pm=[],mm=[],gm=new Float32Array(16),vm=new Float32Array(9),xm=new Float32Array(4);function Vo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pm[s];if(r===void 0&&(r=new Float32Array(s),pm[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oh(i,e){let t=mm[e];t===void 0&&(t=new Int32Array(e),mm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2fv(this.addr,e),Dn(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;i.uniform3fv(this.addr,e),Dn(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4fv(this.addr,e),Dn(t,e)}}function V_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;xm.set(n),i.uniformMatrix2fv(this.addr,!1,xm),Dn(t,n)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;vm.set(n),i.uniformMatrix3fv(this.addr,!1,vm),Dn(t,n)}}function G_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;gm.set(n),i.uniformMatrix4fv(this.addr,!1,gm),Dn(t,n)}}function X_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2iv(this.addr,e),Dn(t,e)}}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3iv(this.addr,e),Dn(t,e)}}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4iv(this.addr,e),Dn(t,e)}}function K_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2uiv(this.addr,e),Dn(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3uiv(this.addr,e),Dn(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4uiv(this.addr,e),Dn(t,e)}}function Q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(y0.compareFunction=t.isReversedDepthBuffer()?Qu:ju,r=y0):r=Dm,t.setTexture2D(e||r,s)}function eb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fm,s)}function tb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Um,s)}function nb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nm,s)}function ib(i){switch(i){case 5126:return O_;case 35664:return k_;case 35665:return z_;case 35666:return H_;case 35674:return V_;case 35675:return W_;case 35676:return G_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return Z_;case 5125:return K_;case 36294:return $_;case 36295:return J_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function sb(i,e){i.uniform1fv(this.addr,e)}function rb(i,e){let t=Vo(e,this.size,2);i.uniform2fv(this.addr,t)}function ob(i,e){let t=Vo(e,this.size,3);i.uniform3fv(this.addr,t)}function ab(i,e){let t=Vo(e,this.size,4);i.uniform4fv(this.addr,t)}function lb(i,e){let t=Vo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cb(i,e){let t=Vo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ub(i,e){let t=Vo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hb(i,e){i.uniform1iv(this.addr,e)}function fb(i,e){i.uniform2iv(this.addr,e)}function db(i,e){i.uniform3iv(this.addr,e)}function pb(i,e){i.uniform4iv(this.addr,e)}function mb(i,e){i.uniform1uiv(this.addr,e)}function gb(i,e){i.uniform2uiv(this.addr,e)}function vb(i,e){i.uniform3uiv(this.addr,e)}function xb(i,e){i.uniform4uiv(this.addr,e)}function yb(i,e,t){let n=this.cache,s=e.length,r=oh(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=y0:o=Dm;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function _b(i,e,t){let n=this.cache,s=e.length,r=oh(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fm,r[o])}function bb(i,e,t){let n=this.cache,s=e.length,r=oh(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Um,r[o])}function Mb(i,e,t){let n=this.cache,s=e.length,r=oh(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Nm,r[o])}function Sb(i){switch(i){case 5126:return sb;case 35664:return rb;case 35665:return ob;case 35666:return ab;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return hb;case 35667:case 35671:return fb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Mb}}var _0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ib(t.type)}},b0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sb(t.type)}},M0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},v0=/(\w+)(\])?(\[|\.)?/g;function ym(i,e){i.seq.push(e),i.map[e.id]=e}function wb(i,e,t){let n=i.name,s=n.length;for(v0.lastIndex=0;;){let r=v0.exec(n),o=v0.lastIndex,l=r[1],a=r[2]==="]",u=r[3];if(a&&(l=l|0),u===void 0||u==="["&&o+2===s){ym(t,u===void 0?new _0(l,i,e):new b0(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new M0(l),ym(t,p)),t=p}}}var Ho=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);wb(l,a,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function _m(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Tb=37297,Eb=0;function Ab(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var bm=new gt;function Rb(i){Lt._getMatrix(bm,Lt.workingColorSpace,i);let e=`mat3( ${bm.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(i)){case La:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ab(i.getShaderSource(e),l)}else return r}function Cb(i,e){let t=Rb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Pb={[Vf]:"Linear",[Wf]:"Reinhard",[Gf]:"Cineon",[Xf]:"ACESFilmic",[Yf]:"AgX",[al]:"Neutral",[qf]:"Custom"};function Ib(i,e){let t=Pb[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var th=new V;function Lb(){Lt.getLuminanceCoefficients(th);let i=th.x.toFixed(4),e=th.y.toFixed(4),t=th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function Nb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function xl(i){return i!==""}function Sm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function S0(i){return i.replace(Ub,Ob)}var Bb=new Map;function Ob(i,e){let t=dt[e];if(t===void 0){let n=Bb.get(e);if(n!==void 0)t=dt[n],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return S0(t)}var kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(i){return i.replace(kb,zb)}function zb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Em(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Hb={[Dr]:"SHADOWMAP_TYPE_PCF",[No]:"SHADOWMAP_TYPE_VSM"};function Vb(i){return Hb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wb={[ar]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[ll]:"ENVMAP_TYPE_CUBE_UV"};function Gb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Wb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xb={[Fr]:"ENVMAP_MODE_REFRACTION"};function qb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yb={[Hf]:"ENVMAP_BLENDING_MULTIPLY",[zp]:"ENVMAP_BLENDING_MIX",[Hp]:"ENVMAP_BLENDING_ADD"};function Zb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yb[i.combine]||"ENVMAP_BLENDING_NONE"}function Kb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $b(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,a=Vb(t),u=Gb(t),h=qb(t),p=Zb(t),m=Kb(t),x=Db(t),y=Nb(r),M=s.createProgram(),c,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xl).join(`
`),c.length>0&&(c+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xl).join(`
`),f.length>0&&(f+=`
`)):(c=[Em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),f=[Em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?dt.tonemapping_pars_fragment:"",t.toneMapping!==as?Ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Cb("linearToOutputTexel",t.outputColorSpace),Lb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xl).join(`
`)),o=S0(o),o=Sm(o,t),o=wm(o,t),l=S0(l),l=Sm(l,t),l=wm(l,t),o=Tm(o),l=Tm(l),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,c=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,f=["#define varying in",t.glslVersion===t0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===t0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let g=d+c+o,v=d+f+l,b=_m(s,s.VERTEX_SHADER,g),T=_m(s,s.FRAGMENT_SHADER,v);s.attachShader(M,b),s.attachShader(M,T),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(R){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(M)||"",P=s.getShaderInfoLog(b)||"",A=s.getShaderInfoLog(T)||"",L=C.trim(),D=P.trim(),O=A.trim(),z=!0,B=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,T);else{let H=Mm(s,b,"vertex"),k=Mm(s,T,"fragment");pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+H+`
`+k)}else L!==""?ct("WebGLProgram: Program Info Log:",L):(D===""||O==="")&&(B=!1);B&&(R.diagnostics={runnable:z,programLog:L,vertexShader:{log:D,prefix:c},fragmentShader:{log:O,prefix:f}})}s.deleteShader(b),s.deleteShader(T),_=new Ho(s,M),S=Fb(s,M)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,Tb)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=T,this}var Jb=0,w0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new T0(e),t.set(e,n)),n}},T0=class{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}};function jb(i){return i===ur||i===pl||i===ml}function Qb(i,e,t,n,s,r){let o=new Fa,l=new w0,a=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,m=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return a.add(_),_===0?"uv":`uv${_}`}function M(_,S,E,R,C,P){let A=R.fog,L=C.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||D,O),B=z&&z.mapping===ll?z.image.height:null,H=x[_.type];_.precision!==null&&(m=n.getMaxPrecision(_.precision),m!==_.precision&&ct("WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,X=k!==void 0?k.length:0,K=0;L.morphAttributes.position!==void 0&&(K=1),L.morphAttributes.normal!==void 0&&(K=2),L.morphAttributes.color!==void 0&&(K=3);let be,we,Se,G;if(H){let Bt=_s[H];be=Bt.vertexShader,we=Bt.fragmentShader}else{be=_.vertexShader,we=_.fragmentShader;let Bt=l.getVertexShaderStage(_),Ft=l.getFragmentShaderStage(_);l.update(_,Bt,Ft),Se=Bt.id,G=Ft.id}let $=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Pe=C.isInstancedMesh===!0,te=C.isBatchedMesh===!0,ve=!!_.map,Ne=!!_.matcap,Oe=!!z,Ee=!!_.aoMap,We=!!_.lightMap,ne=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,Q=!!_.displacementMap,ce=!!_.emissiveMap,se=!!_.metalnessMap,ie=!!_.roughnessMap,F=_.anisotropy>0,Me=_.clearcoat>0,J=_.dispersion>0,N=_.retroreflectivity>0,I=_.iridescence>0,W=_.sheen>0,Y=_.transmission>0,ee=F&&!!_.anisotropyMap,ue=Me&&!!_.clearcoatMap,xe=Me&&!!_.clearcoatNormalMap,he=Me&&!!_.clearcoatRoughnessMap,me=I&&!!_.iridescenceMap,Fe=I&&!!_.iridescenceThicknessMap,Ke=W&&!!_.sheenColorMap,Ue=W&&!!_.sheenRoughnessMap,Be=!!_.specularMap,Ve=!!_.specularColorMap,et=!!_.specularIntensityMap,lt=Y&&!!_.transmissionMap,Z=Y&&!!_.thicknessMap,De=!!_.gradientMap,ye=!!_.alphaMap,ke=_.alphaTest>0,He=!!_.alphaHash,Ae=!!_.extensions,it=as;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(it=i.toneMapping);let Qe={shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:be,fragmentShader:we,defines:_.defines,customVertexShaderID:Se,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:te,batchingColor:te&&C._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&C.instanceColor!==null,instancingMorph:Pe&&C.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ve,matcap:Ne,envMap:Oe,envMapMode:Oe&&z.mapping,envMapCubeUVHeight:B,aoMap:Ee,lightMap:We,bumpMap:ne,normalMap:de,displacementMap:Q,emissiveMap:ce,normalMapObjectSpace:de&&_.normalMapType===Gp,normalMapTangentSpace:de&&_.normalMapType===Ju,packedNormalMap:de&&_.normalMapType===Ju&&jb(_.normalMap.format),metalnessMap:se,roughnessMap:ie,anisotropy:F,anisotropyMap:ee,clearcoat:Me,clearcoatMap:ue,clearcoatNormalMap:xe,clearcoatRoughnessMap:he,dispersion:J,retroreflection:N,iridescence:I,iridescenceMap:me,iridescenceThicknessMap:Fe,sheen:W,sheenColorMap:Ke,sheenRoughnessMap:Ue,specularMap:Be,specularColorMap:Ve,specularIntensityMap:et,transmission:Y,transmissionMap:lt,thicknessMap:Z,gradientMap:De,opaque:_.transparent===!1&&_.blending===Fo&&_.alphaToCoverage===!1,alphaMap:ye,alphaTest:ke,alphaHash:He,combine:_.combine,mapUv:ve&&y(_.map.channel),aoMapUv:Ee&&y(_.aoMap.channel),lightMapUv:We&&y(_.lightMap.channel),bumpMapUv:ne&&y(_.bumpMap.channel),normalMapUv:de&&y(_.normalMap.channel),displacementMapUv:Q&&y(_.displacementMap.channel),emissiveMapUv:ce&&y(_.emissiveMap.channel),metalnessMapUv:se&&y(_.metalnessMap.channel),roughnessMapUv:ie&&y(_.roughnessMap.channel),anisotropyMapUv:ee&&y(_.anisotropyMap.channel),clearcoatMapUv:ue&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:xe&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&y(_.sheenRoughnessMap.channel),specularMapUv:Be&&y(_.specularMap.channel),specularColorMapUv:Ve&&y(_.specularColorMap.channel),specularIntensityMapUv:et&&y(_.specularIntensityMap.channel),transmissionMapUv:lt&&y(_.transmissionMap.channel),thicknessMapUv:Z&&y(_.thicknessMap.channel),alphaMapUv:ye&&y(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(de||F),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(ve||ye),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ge,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:K,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:ve&&_.map.isVideoTexture===!0&&Lt.getTransfer(_.map.colorSpace)===Wt,decodeVideoTextureEmissive:ce&&_.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(_.emissiveMap.colorSpace)===Wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bn,flipSided:_.side===Vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&_.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=a.has(1),Qe.vertexUv2s=a.has(2),Qe.vertexUv3s=a.has(3),a.clear(),Qe}function c(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)S.push(E),S.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(f(S,_),d(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function f(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function d(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function g(_){let S=x[_.type],E;if(S){let R=_s[S];E=Br.clone(R.uniforms)}else E=_.uniforms;return E}function v(_,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new $b(i,S,_,s),u.push(E),h.set(S,E)),E}function b(_){if(--_.usedTimes===0){let S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){l.remove(_)}function w(){l.dispose()}return{getParameters:M,getProgramCacheKey:c,getUniforms:g,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:w}}function eM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function l(m,x,y,M,c,f){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:x,material:y,materialVariant:o(m),groupOrder:M,renderOrder:m.renderOrder,z:c,group:f},i[e]=d):(d.id=m.id,d.object=m,d.geometry=x,d.material=y,d.materialVariant=o(m),d.groupOrder=M,d.renderOrder=m.renderOrder,d.z=c,d.group=f),e++,d}function a(m,x,y,M,c,f,d){d.reversedDepth===!0&&(c=-c);let g=l(m,x,y,M,c,f);y.transmission>0?n.push(g):y.transparent===!0?s.push(g):t.push(g)}function u(m,x,y,M,c,f){let d=l(m,x,y,M,c,f);y.transmission>0?n.unshift(d):y.transparent===!0?s.unshift(d):t.unshift(d)}function h(m,x){t.length>1&&t.sort(m||tM),n.length>1&&n.sort(x||Am),s.length>1&&s.sort(x||Am)}function p(){for(let m=e,x=i.length;m<x;m++){let y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:u,finish:p,sort:h}}function nM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Rm,i.set(n,[o])):s>=r.length?(o=new Rm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function iM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new fe};break;case"SpotLight":t={position:new V,direction:new V,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function sM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rM=0;function oM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function aM(i){let e=new iM,t=sM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new V);let s=new V,r=new je,o=new je;function l(u){let h=0,p=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,y=0,M=0,c=0,f=0,d=0,g=0,v=0,b=0,T=0,w=0,_=0,S=0,E=0;u.sort(oM);for(let C=0,P=u.length;C<P;C++){let A=u[C],L=A.color,D=A.intensity,O=A.distance,z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===ur?z=A.shadow.map.texture:z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=L.r*D,p+=L.g*D,m+=L.b*D;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],D);E++}else if(A.isSunLight){let B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let H=A.shadow,k=t.get(A);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[y]=k,n.sunShadowMap[y]=z;let X=H.getViewportCount();for(let K=0;K<X;K++)n.sunShadowMatrix[M+K]=H.getMatrix(K),n.sunShadowCascade[M+K]=H._cascadeData[K];M+=X,y++}n.sun[x]=B,x++}else if(A.isDirectionalLight){let B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let H=A.shadow,k=t.get(A);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[c]=k,n.directionalShadowMap[c]=z,n.directionalShadowMatrix[c]=A.shadow.matrix,b++}n.directional[c]=B,c++}else if(A.isSpotLight){let B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(L).multiplyScalar(D),B.distance=O,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[d]=B;let H=A.shadow;if(A.map&&(n.spotLightMap[_]=A.map,_++,H.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[d]=H.matrix,A.castShadow){let k=t.get(A);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[d]=k,n.spotShadowMap[d]=z,w++}d++}else if(A.isRectAreaLight){let B=e.get(A);B.color.copy(L).multiplyScalar(D),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=B,g++}else if(A.isPointLight){let B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let H=A.shadow,k=t.get(A);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[f]=k,n.pointShadowMap[f]=z,n.pointShadowMatrix[f]=A.shadow.matrix,T++}n.point[f]=B,f++}else if(A.isHemisphereLight){let B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(D),B.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[v]=B,v++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;let R=n.hash;(R.sunLength!==x||R.directionalLength!==c||R.pointLength!==f||R.spotLength!==d||R.rectAreaLength!==g||R.hemiLength!==v||R.numSunShadows!==y||R.numDirectionalShadows!==b||R.numPointShadows!==T||R.numSpotShadows!==w||R.numSpotMaps!==_||R.numLightProbes!==E)&&(n.sun.length=x,n.directional.length=c,n.spot.length=d,n.rectArea.length=g,n.point.length=f,n.hemi.length=v,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-S,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,R.sunLength=x,R.directionalLength=c,R.pointLength=f,R.spotLength=d,R.rectAreaLength=g,R.hemiLength=v,R.numSunShadows=y,R.numDirectionalShadows=b,R.numPointShadows=T,R.numSpotShadows=w,R.numSpotMaps=_,R.numLightProbes=E,n.version=rM++)}function a(u,h){let p=0,m=0,x=0,y=0,M=0,c=0,f=h.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){let v=u[d];if(v.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let b=n.directional[m];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(v.isSpotLight){let b=n.spot[y];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),y++}else if(v.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let b=n.point[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),x++}else if(v.isHemisphereLight){let b=n.hemi[c];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),c++}}}return{setup:l,setupView:a,state:n}}function Cm(i){let e=new aM(i),t=[],n=[],s=[];function r(m){p.camera=m,t.length=0,n.length=0,s.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function a(m){s.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:a}}function lM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new Cm(i),e.set(s,[l])):r>=o.length?(l=new Cm(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uM=`uniform sampler2D shadow_pass;
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
}`,hM=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],fM=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Pm=new je,vl=new V,x0=new V;function dM(i,e,t){let n=new Eo,s=new Le,r=new Le,o=new mt,l=new nr,a=new jc,u={},h=t.maxTextureSize,p={[xs]:Vn,[Vn]:xs,[bn]:bn},m=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:cM,fragmentShader:uM}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let y=new vt;y.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ht(y,m),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let f=this.type;this.render=function(T,w,_){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||T.length===0)return;this.type===bp&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dr);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),C=i.state;C.setBlending(oi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let P=f!==this.type;P&&w.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(L=>L.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,L=T.length;A<L;A++){let D=T[A],O=D.shadow;if(O===void 0){ct("WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let z=O.getFrameExtents();s.multiply(z),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,O.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===No){if(D.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Yt(s.x,s.y,{format:ur,type:Cn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),O.map.texture.name=D.name+".shadowMap",O.map.depthTexture=new tr(s.x,s.y,Oi),O.map.depthTexture.name=D.name+".shadowMapDepth",O.map.depthTexture.format=ps,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=An,O.map.depthTexture.magFilter=An}else D.isPointLight?(O.map=new ih(s.x),O.map.depthTexture=new Wc(s.x,ls)):(O.map=new Yt(s.x,s.y),O.map.depthTexture=new tr(s.x,s.y,ls)),O.map.depthTexture.name=D.name+".shadowMap",O.map.depthTexture.format=ps,this.type===Dr?(O.map.depthTexture.compareFunction=B?Qu:ju,O.map.depthTexture.minFilter=kt,O.map.depthTexture.magFilter=kt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=An,O.map.depthTexture.magFilter=An);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let H=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();D.isPointLight!==!0&&O.updateMatrices(D,_);for(let k=0;k<H;k++){let X=O.getCamera(k);if(D.isPointLight){let K=O.camera,be=O.matrix,we=D.distance||K.far;we!==K.far&&(K.far=we,K.updateProjectionMatrix()),vl.setFromMatrixPosition(D.matrixWorld),K.position.copy(vl),x0.copy(K.position),x0.add(hM[k]),K.up.copy(fM[k]),K.lookAt(x0),K.updateMatrixWorld(),be.makeTranslation(-vl.x,-vl.y,-vl.z),Pm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Pm,K.coordinateSystem,K.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,k),i.clear();else{k===0&&(i.setRenderTarget(O.map),i.clear());let K=O.getViewport(k);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),C.viewport(o)}n=O.getFrustum(k),v(w,_,X,D,this.type)}O.isPointLightShadow!==!0&&this.type===No&&d(O,_),O.needsUpdate=!1}f=this.type,c.needsUpdate=!1,i.setRenderTarget(S,E,R)};function d(T,w){let _=e.update(M);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null?T.mapPass=new Yt(s.x,s.y,{format:ur,type:Cn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,_,m,M,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value.set(T.map.width,T.map.height),x.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,_,x,M,null)}function g(T,w,_,S){let E=null,R=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)E=R;else if(E=_.isPointLight===!0?a:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let C=E.uuid,P=w.uuid,A=u[C];A===void 0&&(A={},u[C]=A);let L=A[P];L===void 0&&(L=E.clone(),A[P]=L,w.addEventListener("dispose",b)),E=L}if(E.visible=w.visible,E.wireframe=w.wireframe,S===No?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:p[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,_.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let C=i.properties.get(E);C.light=_}return E}function v(T,w,_,S,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===No)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let P=e.update(T),A=T.material;if(Array.isArray(A)){let L=P.groups;for(let D=0,O=L.length;D<O;D++){let z=L[D],B=A[z.materialIndex];if(B&&B.visible){let H=g(T,B,S,E);T.onBeforeShadow(i,T,w,_,P,H,z),i.renderBufferDirect(_,null,P,H,T,z),T.onAfterShadow(i,T,w,_,P,H,z)}}}else if(A.visible){let L=g(T,A,S,E);T.onBeforeShadow(i,T,w,_,P,L,null),i.renderBufferDirect(_,null,P,L,T,null),T.onAfterShadow(i,T,w,_,P,L,null)}}let C=T.children;for(let P=0,A=C.length;P<A;P++)v(C[P],w,_,S,E)}function b(T){T.target.removeEventListener("dispose",b);for(let _ in u){let S=u[_],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function pM(i,e){function t(){let Z=!1,De=new mt,ye=null,ke=new mt(0,0,0,0);return{setMask:function(He){ye!==He&&!Z&&(i.colorMask(He,He,He,He),ye=He)},setLocked:function(He){Z=He},setClear:function(He,Ae,it,Qe,Bt){Bt===!0&&(He*=Qe,Ae*=Qe,it*=Qe),De.set(He,Ae,it,Qe),ke.equals(De)===!1&&(i.clearColor(He,Ae,it,Qe),ke.copy(De))},reset:function(){Z=!1,ye=null,ke.set(-1,0,0,0)}}}function n(){let Z=!1,De=!1,ye=null,ke=null,He=null;return{setReversed:function(Ae){if(De!==Ae){let it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),De=Ae;let Qe=He;He=null,this.setClear(Qe)}},getReversed:function(){return De},setTest:function(Ae){Ae?$(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Ae){ye!==Ae&&!Z&&(i.depthMask(Ae),ye=Ae)},setFunc:function(Ae){if(De&&(Ae=nm[Ae]),ke!==Ae){switch(Ae){case Rc:i.depthFunc(i.NEVER);break;case Cc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case Ic:i.depthFunc(i.EQUAL);break;case Lc:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=Ae}},setLocked:function(Ae){Z=Ae},setClear:function(Ae){He!==Ae&&(He=Ae,De&&(Ae=1-Ae),i.clearDepth(Ae))},reset:function(){Z=!1,ye=null,ke=null,He=null,De=!1}}}function s(){let Z=!1,De=null,ye=null,ke=null,He=null,Ae=null,it=null,Qe=null,Bt=null;return{setTest:function(Ft){Z||(Ft?$(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Ft){De!==Ft&&!Z&&(i.stencilMask(Ft),De=Ft)},setFunc:function(Ft,hi,bi){(ye!==Ft||ke!==hi||He!==bi)&&(i.stencilFunc(Ft,hi,bi),ye=Ft,ke=hi,He=bi)},setOp:function(Ft,hi,bi){(Ae!==Ft||it!==hi||Qe!==bi)&&(i.stencilOp(Ft,hi,bi),Ae=Ft,it=hi,Qe=bi)},setLocked:function(Ft){Z=Ft},setClear:function(Ft){Bt!==Ft&&(i.clearStencil(Ft),Bt=Ft)},reset:function(){Z=!1,De=null,ye=null,ke=null,He=null,Ae=null,it=null,Qe=null,Bt=null}}}let r=new t,o=new n,l=new s,a=new WeakMap,u=new WeakMap,h={},p={},m={},x=new WeakMap,y=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,_=new fe(0,0,0),S=0,E=!1,R=null,C=null,P=null,A=null,L=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,z=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=z>=2);let H=null,k={},X=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),be=new mt().fromArray(X),we=new mt().fromArray(K);function Se(Z,De,ye,ke){let He=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(Z,Ae),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<ye;it++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,He):i.texImage2D(De+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,He);return Ae}let G={};G[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),$(i.DEPTH_TEST),o.setFunc(yo),ne(!1),de(Uf),$(i.CULL_FACE),Ee(oi);function $(Z){h[Z]!==!0&&(i.enable(Z),h[Z]=!0)}function ge(Z){h[Z]!==!1&&(i.disable(Z),h[Z]=!1)}function Pe(Z,De){return m[Z]!==De?(i.bindFramebuffer(Z,De),m[Z]=De,Z===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=De),Z===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=De),!0):!1}function te(Z,De){let ye=y,ke=!1;if(Z){ye=x.get(De),ye===void 0&&(ye=[],x.set(De,ye));let He=Z.textures;if(ye.length!==He.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,it=He.length;Ae<it;Ae++)ye[Ae]=i.COLOR_ATTACHMENT0+Ae;ye.length=He.length,ke=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,ke=!0);ke&&i.drawBuffers(ye)}function ve(Z){return M!==Z?(i.useProgram(Z),M=Z,!0):!1}let Ne={[Nr]:i.FUNC_ADD,[Sp]:i.FUNC_SUBTRACT,[wp]:i.FUNC_REVERSE_SUBTRACT};Ne[Tp]=i.MIN,Ne[Ep]=i.MAX;let Oe={[Ap]:i.ZERO,[Rp]:i.ONE,[Cp]:i.SRC_COLOR,[kf]:i.SRC_ALPHA,[Fp]:i.SRC_ALPHA_SATURATE,[Dp]:i.DST_COLOR,[Ip]:i.DST_ALPHA,[Pp]:i.ONE_MINUS_SRC_COLOR,[zf]:i.ONE_MINUS_SRC_ALPHA,[Np]:i.ONE_MINUS_DST_COLOR,[Lp]:i.ONE_MINUS_DST_ALPHA,[Up]:i.CONSTANT_COLOR,[Bp]:i.ONE_MINUS_CONSTANT_COLOR,[Op]:i.CONSTANT_ALPHA,[kp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(Z,De,ye,ke,He,Ae,it,Qe,Bt,Ft){if(Z===oi){c===!0&&(ge(i.BLEND),c=!1);return}if(c===!1&&($(i.BLEND),c=!0),Z!==Mp){if(Z!==f||Ft!==E){if((d!==Nr||b!==Nr)&&(i.blendEquation(i.FUNC_ADD),d=Nr,b=Nr),Ft)switch(Z){case Fo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case Bf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Of:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bf:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Of:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",Z);break}g=null,v=null,T=null,w=null,_.set(0,0,0),S=0,f=Z,E=Ft}return}He=He||De,Ae=Ae||ye,it=it||ke,(De!==d||He!==b)&&(i.blendEquationSeparate(Ne[De],Ne[He]),d=De,b=He),(ye!==g||ke!==v||Ae!==T||it!==w)&&(i.blendFuncSeparate(Oe[ye],Oe[ke],Oe[Ae],Oe[it]),g=ye,v=ke,T=Ae,w=it),(Qe.equals(_)===!1||Bt!==S)&&(i.blendColor(Qe.r,Qe.g,Qe.b,Bt),_.copy(Qe),S=Bt),f=Z,E=!1}function We(Z,De){Z.side===bn?ge(i.CULL_FACE):$(i.CULL_FACE);let ye=Z.side===Vn;De&&(ye=!ye),ne(ye),Z.blending===Fo&&Z.transparent===!1?Ee(oi):Ee(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let ke=Z.stencilWrite;l.setTest(ke),ke&&(l.setMask(Z.stencilWriteMask),l.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),l.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ce(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(Z){R!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),R=Z)}function de(Z){Z!==yp?($(i.CULL_FACE),Z!==C&&(Z===Uf?i.cullFace(i.BACK):Z===_p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),C=Z}function Q(Z){Z!==P&&(O&&i.lineWidth(Z),P=Z)}function ce(Z,De,ye){Z?($(i.POLYGON_OFFSET_FILL),(A!==De||L!==ye)&&(A=De,L=ye,o.getReversed()&&(De=-De),i.polygonOffset(De,ye))):ge(i.POLYGON_OFFSET_FILL)}function se(Z){Z?$(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function ie(Z){Z===void 0&&(Z=i.TEXTURE0+D-1),H!==Z&&(i.activeTexture(Z),H=Z)}function F(Z,De,ye){ye===void 0&&(H===null?ye=i.TEXTURE0+D-1:ye=H);let ke=k[ye];ke===void 0&&(ke={type:void 0,texture:void 0},k[ye]=ke),(ke.type!==Z||ke.texture!==De)&&(H!==ye&&(i.activeTexture(ye),H=ye),i.bindTexture(Z,De||G[Z]),ke.type=Z,ke.texture=De)}function Me(){let Z=k[H];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function J(){try{i.compressedTexImage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function I(){try{i.texSubImage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function W(){try{i.texSubImage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function ue(){try{i.texStorage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function xe(){try{i.texStorage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function he(){try{i.texImage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function me(){try{i.texImage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function Fe(Z){return p[Z]!==void 0?p[Z]:i.getParameter(Z)}function Ke(Z,De){p[Z]!==De&&(i.pixelStorei(Z,De),p[Z]=De)}function Ue(Z){be.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),be.copy(Z))}function Be(Z){we.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),we.copy(Z))}function Ve(Z,De){let ye=u.get(De);ye===void 0&&(ye=new WeakMap,u.set(De,ye));let ke=ye.get(Z);ke===void 0&&(ke=i.getUniformBlockIndex(De,Z.name),ye.set(Z,ke))}function et(Z,De){let ke=u.get(De).get(Z);a.get(De)!==ke&&(i.uniformBlockBinding(De,ke,Z.__bindingPointIndex),a.set(De,ke))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},H=null,k={},m={},x=new WeakMap,y=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,_=new fe(0,0,0),S=0,E=!1,R=null,C=null,P=null,A=null,L=null,be.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:$,disable:ge,bindFramebuffer:Pe,drawBuffers:te,useProgram:ve,setBlending:Ee,setMaterial:We,setFlipSided:ne,setCullFace:de,setLineWidth:Q,setPolygonOffset:ce,setScissorTest:se,activeTexture:ie,bindTexture:F,unbindTexture:Me,compressedTexImage2D:J,compressedTexImage3D:N,texImage2D:he,texImage3D:me,pixelStorei:Ke,getParameter:Fe,updateUBOMapping:Ve,uniformBlockBinding:et,texStorage2D:ue,texStorage3D:xe,texSubImage2D:I,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:ee,scissor:Ue,viewport:Be,reset:lt}}function mM(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Le,h=new WeakMap,p=new Set,m,x=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,I){return y?new OffscreenCanvas(N,I):bo("canvas")}function c(N,I,W){let Y=1,ee=J(N);if((ee.width>W||ee.height>W)&&(Y=W/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ue=Math.floor(Y*ee.width),xe=Math.floor(Y*ee.height);m===void 0&&(m=M(ue,xe));let he=I?M(ue,xe):m;return he.width=ue,he.height=xe,he.getContext("2d").drawImage(N,0,0,ue,xe),ct("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ue+"x"+xe+")."),he}else return"data"in N&&ct("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),N;return N}function f(N){return N.generateMipmaps}function d(N){i.generateMipmap(N)}function g(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,I,W,Y,ee,ue=!1){if(N!==null){if(i[N]!==void 0)return i[N];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let xe;Y&&(xe=e.get("EXT_texture_norm16"),xe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=I;if(I===i.RED&&(W===i.FLOAT&&(he=i.R32F),W===i.HALF_FLOAT&&(he=i.R16F),W===i.UNSIGNED_BYTE&&(he=i.R8),W===i.UNSIGNED_SHORT&&xe&&(he=xe.R16_EXT),W===i.SHORT&&xe&&(he=xe.R16_SNORM_EXT)),I===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.R8UI),W===i.UNSIGNED_SHORT&&(he=i.R16UI),W===i.UNSIGNED_INT&&(he=i.R32UI),W===i.BYTE&&(he=i.R8I),W===i.SHORT&&(he=i.R16I),W===i.INT&&(he=i.R32I)),I===i.RG&&(W===i.FLOAT&&(he=i.RG32F),W===i.HALF_FLOAT&&(he=i.RG16F),W===i.UNSIGNED_BYTE&&(he=i.RG8),W===i.UNSIGNED_SHORT&&xe&&(he=xe.RG16_EXT),W===i.SHORT&&xe&&(he=xe.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RG8UI),W===i.UNSIGNED_SHORT&&(he=i.RG16UI),W===i.UNSIGNED_INT&&(he=i.RG32UI),W===i.BYTE&&(he=i.RG8I),W===i.SHORT&&(he=i.RG16I),W===i.INT&&(he=i.RG32I)),I===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RGB8UI),W===i.UNSIGNED_SHORT&&(he=i.RGB16UI),W===i.UNSIGNED_INT&&(he=i.RGB32UI),W===i.BYTE&&(he=i.RGB8I),W===i.SHORT&&(he=i.RGB16I),W===i.INT&&(he=i.RGB32I)),I===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),W===i.UNSIGNED_INT&&(he=i.RGBA32UI),W===i.BYTE&&(he=i.RGBA8I),W===i.SHORT&&(he=i.RGBA16I),W===i.INT&&(he=i.RGBA32I)),I===i.RGB&&(W===i.UNSIGNED_SHORT&&xe&&(he=xe.RGB16_EXT),W===i.SHORT&&xe&&(he=xe.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),I===i.RGBA){let me=ue?La:Lt.getTransfer(ee);W===i.FLOAT&&(he=i.RGBA32F),W===i.HALF_FLOAT&&(he=i.RGBA16F),W===i.UNSIGNED_BYTE&&(he=me===Wt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&xe&&(he=xe.RGBA16_EXT),W===i.SHORT&&xe&&(he=xe.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(N,I){let W;return N?I===null||I===ls||I===Bo?W=i.DEPTH24_STENCIL8:I===Oi?W=i.DEPTH32F_STENCIL8:I===Uo&&(W=i.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ls||I===Bo?W=i.DEPTH_COMPONENT24:I===Oi?W=i.DEPTH_COMPONENT32F:I===Uo&&(W=i.DEPTH_COMPONENT16),W}function T(N,I){return f(N)===!0||N.isFramebufferTexture&&N.minFilter!==An&&N.minFilter!==kt?Math.log2(Math.max(I.width,I.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?I.mipmaps.length:1}function w(N){let I=N.target;I.removeEventListener("dispose",w),S(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&p.delete(I)}function _(N){let I=N.target;I.removeEventListener("dispose",_),R(I)}function S(N){let I=n.get(N);if(I.__webglInit===void 0)return;let W=N.source,Y=x.get(W);if(Y){let ee=Y[I.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(N),Object.keys(Y).length===0&&x.delete(W)}n.remove(N)}function E(N){let I=n.get(N);i.deleteTexture(I.__webglTexture);let W=N.source,Y=x.get(W);delete Y[I.__cacheKey],o.memory.textures--}function R(N){let I=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(I.__webglFramebuffer[Y]))for(let ee=0;ee<I.__webglFramebuffer[Y].length;ee++)i.deleteFramebuffer(I.__webglFramebuffer[Y][ee]);else i.deleteFramebuffer(I.__webglFramebuffer[Y]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[Y])}else{if(Array.isArray(I.__webglFramebuffer))for(let Y=0;Y<I.__webglFramebuffer.length;Y++)i.deleteFramebuffer(I.__webglFramebuffer[Y]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Y=0;Y<I.__webglColorRenderbuffer.length;Y++)I.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[Y]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let W=N.textures;for(let Y=0,ee=W.length;Y<ee;Y++){let ue=n.get(W[Y]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(W[Y])}n.remove(N)}let C=0;function P(){C=0}function A(){return C}function L(N){C=N}function D(){let N=C;return N>=s.maxTextures&&ct("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function O(N){let I=[];return I.push(N.wrapS),I.push(N.wrapT),I.push(N.wrapR||0),I.push(N.magFilter),I.push(N.minFilter),I.push(N.anisotropy),I.push(N.internalFormat),I.push(N.format),I.push(N.type),I.push(N.generateMipmaps),I.push(N.premultiplyAlpha),I.push(N.flipY),I.push(N.unpackAlignment),I.push(N.colorSpace),I.join()}function z(N,I){let W=n.get(N);if(N.isVideoTexture&&F(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let Y=N.image;if(Y===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(W,N,I);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+I)}function B(N,I){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ge(W,N,I);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+I)}function H(N,I){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ge(W,N,I);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+I)}function k(N,I){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){Pe(W,N,I);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+I)}let X={[Fs]:i.REPEAT,[ds]:i.CLAMP_TO_EDGE,[Fc]:i.MIRRORED_REPEAT},K={[An]:i.NEAREST,[Vp]:i.NEAREST_MIPMAP_NEAREST,[cl]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[pu]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},be={[qp]:i.NEVER,[Jp]:i.ALWAYS,[Yp]:i.LESS,[ju]:i.LEQUAL,[Zp]:i.EQUAL,[Qu]:i.GEQUAL,[Kp]:i.GREATER,[$p]:i.NOTEQUAL};function we(N,I){if(I.type===Oi&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===kt||I.magFilter===pu||I.magFilter===cl||I.magFilter===In||I.minFilter===kt||I.minFilter===pu||I.minFilter===cl||I.minFilter===In)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,X[I.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,X[I.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,X[I.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,K[I.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,K[I.minFilter]),I.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,be[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===An||I.minFilter!==cl&&I.minFilter!==In||I.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Se(N,I){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,I.addEventListener("dispose",w));let Y=I.source,ee=x.get(Y);ee===void 0&&(ee={},x.set(Y,ee));let ue=O(I);if(ue!==N.__cacheKey){ee[ue]===void 0&&(ee[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[ue].usedTimes++;let xe=ee[N.__cacheKey];xe!==void 0&&(ee[N.__cacheKey].usedTimes--,xe.usedTimes===0&&E(I)),N.__cacheKey=ue,N.__webglTexture=ee[ue].texture}return W}function G(N,I,W){return Math.floor(Math.floor(N/W)/I)}function $(N,I,W,Y){let ue=N.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,W,Y,I.data);else{ue.sort((Ke,Ue)=>Ke.start-Ue.start);let xe=0;for(let Ke=1;Ke<ue.length;Ke++){let Ue=ue[xe],Be=ue[Ke],Ve=Ue.start+Ue.count,et=G(Be.start,I.width,4),lt=G(Ue.start,I.width,4);Be.start<=Ve+1&&et===lt&&G(Be.start+Be.count-1,I.width,4)===et?Ue.count=Math.max(Ue.count,Be.start+Be.count-Ue.start):(++xe,ue[xe]=Be)}ue.length=xe+1;let he=t.getParameter(i.UNPACK_ROW_LENGTH),me=t.getParameter(i.UNPACK_SKIP_PIXELS),Fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Ke=0,Ue=ue.length;Ke<Ue;Ke++){let Be=ue[Ke],Ve=Math.floor(Be.start/4),et=Math.ceil(Be.count/4),lt=Ve%I.width,Z=Math.floor(Ve/I.width),De=et,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,lt,Z,De,ye,W,Y,I.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function ge(N,I,W){let Y=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(Y=i.TEXTURE_3D);let ee=Se(N,I),ue=I.source;t.bindTexture(Y,N.__webglTexture,i.TEXTURE0+W);let xe=n.get(ue);if(ue.version!==xe.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let ye=Lt.getPrimaries(Lt.workingColorSpace),ke=I.colorSpace===ai?null:Lt.getPrimaries(I.colorSpace),He=I.colorSpace===ai||ye===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let me=c(I.image,!1,s.maxTextureSize);me=Me(I,me);let Fe=r.convert(I.format,I.colorSpace),Ke=r.convert(I.type),Ue=v(I.internalFormat,Fe,Ke,I.normalized,I.colorSpace,I.isVideoTexture);we(Y,I);let Be,Ve=I.mipmaps,et=I.isVideoTexture!==!0,lt=xe.__version===void 0||ee===!0,Z=ue.dataReady,De=T(I,me);if(I.isDepthTexture)Ue=b(I.format===lr,I.type),lt&&(et?t.texStorage2D(i.TEXTURE_2D,1,Ue,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ue,me.width,me.height,0,Fe,Ke,null));else if(I.isDataTexture)if(Ve.length>0){et&&lt&&t.texStorage2D(i.TEXTURE_2D,De,Ue,Ve[0].width,Ve[0].height);for(let ye=0,ke=Ve.length;ye<ke;ye++)Be=Ve[ye],et?Z&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Be.width,Be.height,Fe,Ke,Be.data):t.texImage2D(i.TEXTURE_2D,ye,Ue,Be.width,Be.height,0,Fe,Ke,Be.data);I.generateMipmaps=!1}else et?(lt&&t.texStorage2D(i.TEXTURE_2D,De,Ue,me.width,me.height),Z&&$(I,me,Fe,Ke)):t.texImage2D(i.TEXTURE_2D,0,Ue,me.width,me.height,0,Fe,Ke,me.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){et&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ue,Ve[0].width,Ve[0].height,me.depth);for(let ye=0,ke=Ve.length;ye<ke;ye++)if(Be=Ve[ye],I.format!==Jn)if(Fe!==null)if(et){if(Z)if(I.layerUpdates.size>0){let He=a0(Be.width,Be.height,I.format,I.type);for(let Ae of I.layerUpdates){let it=Be.data.subarray(Ae*He/Be.data.BYTES_PER_ELEMENT,(Ae+1)*He/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Ae,Be.width,Be.height,1,Fe,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Be.width,Be.height,me.depth,Fe,Be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Ue,Be.width,Be.height,me.depth,0,Be.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Be.width,Be.height,me.depth,Fe,Ke,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Ue,Be.width,Be.height,me.depth,0,Fe,Ke,Be.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{et&&lt&&t.texStorage2D(i.TEXTURE_2D,De,Ue,Ve[0].width,Ve[0].height);for(let ye=0,ke=Ve.length;ye<ke;ye++)Be=Ve[ye],I.format!==Jn?Fe!==null?et?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Be.width,Be.height,Fe,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Ue,Be.width,Be.height,0,Be.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?Z&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Be.width,Be.height,Fe,Ke,Be.data):t.texImage2D(i.TEXTURE_2D,ye,Ue,Be.width,Be.height,0,Fe,Ke,Be.data)}else if(I.isDataArrayTexture)if(et){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ue,me.width,me.height,me.depth),Z)if(I.layerUpdates.size>0){let ye=a0(me.width,me.height,I.format,I.type);for(let ke of I.layerUpdates){let He=me.data.subarray(ke*ye/me.data.BYTES_PER_ELEMENT,(ke+1)*ye/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,me.width,me.height,1,Fe,Ke,He)}I.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Fe,Ke,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,me.width,me.height,me.depth,0,Fe,Ke,me.data);else if(I.isData3DTexture)et?(lt&&t.texStorage3D(i.TEXTURE_3D,De,Ue,me.width,me.height,me.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Fe,Ke,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,me.width,me.height,me.depth,0,Fe,Ke,me.data);else if(I.isFramebufferTexture){if(lt)if(et)t.texStorage2D(i.TEXTURE_2D,De,Ue,me.width,me.height);else{let ye=me.width,ke=me.height;for(let He=0;He<De;He++)t.texImage2D(i.TEXTURE_2D,He,Ue,ye,ke,0,Fe,Ke,null),ye>>=1,ke>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),me.parentNode!==ye){ye.appendChild(me),p.add(I),ye.onpaint=ke=>{let He=ke.changedElements;for(let Ae of p)He.includes(Ae.image)&&(Ae.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,me);else{let He=i.RGBA,Ae=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,He,Ae,it,me)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(et&&lt){let ye=J(Ve[0]);t.texStorage2D(i.TEXTURE_2D,De,Ue,ye.width,ye.height)}for(let ye=0,ke=Ve.length;ye<ke;ye++)Be=Ve[ye],et?Z&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Fe,Ke,Be):t.texImage2D(i.TEXTURE_2D,ye,Ue,Fe,Ke,Be);I.generateMipmaps=!1}else if(et){if(lt){let ye=J(me);t.texStorage2D(i.TEXTURE_2D,De,Ue,ye.width,ye.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Ke,me)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Fe,Ke,me);f(I)&&d(Y),xe.__version=ue.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function Pe(N,I,W){if(I.image.length!==6)return;let Y=Se(N,I),ee=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let ue=n.get(ee);if(ee.version!==ue.__version||Y===!0){t.activeTexture(i.TEXTURE0+W);let xe=Lt.getPrimaries(Lt.workingColorSpace),he=I.colorSpace===ai?null:Lt.getPrimaries(I.colorSpace),me=I.colorSpace===ai||xe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Fe=I.isCompressedTexture||I.image[0].isCompressedTexture,Ke=I.image[0]&&I.image[0].isDataTexture,Ue=[];for(let Ae=0;Ae<6;Ae++)!Fe&&!Ke?Ue[Ae]=c(I.image[Ae],!0,s.maxCubemapSize):Ue[Ae]=Ke?I.image[Ae].image:I.image[Ae],Ue[Ae]=Me(I,Ue[Ae]);let Be=Ue[0],Ve=r.convert(I.format,I.colorSpace),et=r.convert(I.type),lt=v(I.internalFormat,Ve,et,I.normalized,I.colorSpace),Z=I.isVideoTexture!==!0,De=ue.__version===void 0||Y===!0,ye=ee.dataReady,ke=T(I,Be);we(i.TEXTURE_CUBE_MAP,I);let He;if(Fe){Z&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,lt,Be.width,Be.height);for(let Ae=0;Ae<6;Ae++){He=Ue[Ae].mipmaps;for(let it=0;it<He.length;it++){let Qe=He[it];I.format!==Jn?Ve!==null?Z?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,it,0,0,Qe.width,Qe.height,Ve,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,it,lt,Qe.width,Qe.height,0,Qe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,it,0,0,Qe.width,Qe.height,Ve,et,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,it,lt,Qe.width,Qe.height,0,Ve,et,Qe.data)}}}else{if(He=I.mipmaps,Z&&De){He.length>0&&ke++;let Ae=J(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,lt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ke){Z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ue[Ae].width,Ue[Ae].height,Ve,et,Ue[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,lt,Ue[Ae].width,Ue[Ae].height,0,Ve,et,Ue[Ae].data);for(let it=0;it<He.length;it++){let Bt=He[it].image[Ae].image;Z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,it+1,0,0,Bt.width,Bt.height,Ve,et,Bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,it+1,lt,Bt.width,Bt.height,0,Ve,et,Bt.data)}}else{Z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ve,et,Ue[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,lt,Ve,et,Ue[Ae]);for(let it=0;it<He.length;it++){let Qe=He[it];Z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,it+1,0,0,Ve,et,Qe.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,it+1,lt,Ve,et,Qe.image[Ae])}}}f(I)&&d(i.TEXTURE_CUBE_MAP),ue.__version=ee.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function te(N,I,W,Y,ee,ue){let xe=r.convert(W.format,W.colorSpace),he=r.convert(W.type),me=v(W.internalFormat,xe,he,W.normalized,W.colorSpace),Fe=n.get(I),Ke=n.get(W);if(Ke.__renderTarget=I,!Fe.__hasExternalTextures){let Ue=Math.max(1,I.width>>ue),Be=Math.max(1,I.height>>ue);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ue,me,Ue,Be,I.depth,0,xe,he,null):t.texImage2D(ee,ue,me,Ue,Be,0,xe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ie(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ee,Ke.__webglTexture,0,se(I)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ee,Ke.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(N,I,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),I.depthBuffer){let Y=I.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,ue=b(I.stencilBuffer,ee),xe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ie(I)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(I),ue,I.width,I.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(I),ue,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,ue,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,N)}else{let Y=I.textures;for(let ee=0;ee<Y.length;ee++){let ue=Y[ee],xe=r.convert(ue.format,ue.colorSpace),he=r.convert(ue.type),me=v(ue.internalFormat,xe,he,ue.normalized,ue.colorSpace);ie(I)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(I),me,I.width,I.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(I),me,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,me,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(N,I,W){let Y=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(I.depthTexture);if(ee.__renderTarget=I,(!ee.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),Y){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,I.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),we(i.TEXTURE_CUBE_MAP,I.depthTexture);let Fe=r.convert(I.depthTexture.format),Ke=r.convert(I.depthTexture.type),Ue;I.depthTexture.format===ps?Ue=i.DEPTH_COMPONENT24:I.depthTexture.format===lr&&(Ue=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ue,I.width,I.height,0,Fe,Ke,null)}}else z(I.depthTexture,0);let ue=ee.__webglTexture,xe=se(I),he=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,me=I.depthTexture.format===lr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===ps)ie(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,he,ue,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,me,he,ue,0);else if(I.depthTexture.format===lr)ie(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,he,ue,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,me,he,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(N){let I=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==N.depthTexture){let Y=N.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),Y){let ee=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),I.__depthDisposeCallback=ee}I.__boundDepthTexture=Y}if(N.depthTexture&&!I.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)Ne(I.__webglFramebuffer[Y],N,Y);else{let Y=N.texture.mipmaps;Y&&Y.length>0?Ne(I.__webglFramebuffer[0],N,0):Ne(I.__webglFramebuffer,N,0)}else if(W){I.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[Y]),I.__webglDepthbuffer[Y]===void 0)I.__webglDepthbuffer[Y]=i.createRenderbuffer(),ve(I.__webglDepthbuffer[Y],N,!1);else{let ee=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=I.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ue)}}else{let Y=N.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),ve(I.__webglDepthbuffer,N,!1);else{let ee=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(N,I,W){let Y=n.get(N);I!==void 0&&te(Y.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Oe(N)}function We(N){let I=N.texture,W=n.get(N),Y=n.get(I);N.addEventListener("dispose",_);let ee=N.textures,ue=N.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=I.version,o.memory.textures++),ue){W.__webglFramebuffer=[];for(let he=0;he<6;he++)if(I.mipmaps&&I.mipmaps.length>0){W.__webglFramebuffer[he]=[];for(let me=0;me<I.mipmaps.length;me++)W.__webglFramebuffer[he][me]=i.createFramebuffer()}else W.__webglFramebuffer[he]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){W.__webglFramebuffer=[];for(let he=0;he<I.mipmaps.length;he++)W.__webglFramebuffer[he]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(xe)for(let he=0,me=ee.length;he<me;he++){let Fe=n.get(ee[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ie(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){let me=ee[he];W.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[he]);let Fe=r.convert(me.format,me.colorSpace),Ke=r.convert(me.type),Ue=v(me.internalFormat,Fe,Ke,me.normalized,me.colorSpace,N.isXRRenderTarget===!0),Be=se(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ue,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,W.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),we(i.TEXTURE_CUBE_MAP,I);for(let he=0;he<6;he++)if(I.mipmaps&&I.mipmaps.length>0)for(let me=0;me<I.mipmaps.length;me++)te(W.__webglFramebuffer[he][me],N,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else te(W.__webglFramebuffer[he],N,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);f(I)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let he=0,me=ee.length;he<me;he++){let Fe=ee[he],Ke=n.get(Fe),Ue=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ue=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Ke.__webglTexture),we(Ue,Fe),te(W.__webglFramebuffer,N,Fe,i.COLOR_ATTACHMENT0+he,Ue,0),f(Fe)&&d(Ue)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),we(he,I),I.mipmaps&&I.mipmaps.length>0)for(let me=0;me<I.mipmaps.length;me++)te(W.__webglFramebuffer[me],N,I,i.COLOR_ATTACHMENT0,he,me);else te(W.__webglFramebuffer,N,I,i.COLOR_ATTACHMENT0,he,0);f(I)&&d(he),t.unbindTexture()}N.depthBuffer&&Oe(N)}function ne(N){let I=N.textures;for(let W=0,Y=I.length;W<Y;W++){let ee=I[W];if(f(ee)){let ue=g(N),xe=n.get(ee).__webglTexture;t.bindTexture(ue,xe),d(ue),t.unbindTexture()}}}let de=[],Q=[];function ce(N){if(N.samples>0){if(ie(N)===!1){let I=N.textures,W=N.width,Y=N.height,ee=i.COLOR_BUFFER_BIT,ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(N),he=I.length>1;if(he)for(let Fe=0;Fe<I.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let me=N.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Fe=0;Fe<I.length;Fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Fe]);let Ke=n.get(I[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,ee,i.NEAREST),a===!0&&(de.length=0,Q.length=0,de.push(i.COLOR_ATTACHMENT0+Fe),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(de.push(ue),Q.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Fe=0;Fe<I.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Fe]);let Ke=n.get(I[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&a){let I=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function se(N){return Math.min(s.maxSamples,N.samples)}function ie(N){let I=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function F(N){let I=o.render.frame;h.get(N)!==I&&(h.set(N,I),N.update())}function Me(N,I){let W=N.colorSpace,Y=N.format,ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Ia&&W!==ai&&(Lt.getTransfer(W)===Wt?(Y!==Jn||ee!==$n)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",W)),I}function J(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.getTextureUnits=A,this.setTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=Ee,this.setupRenderTarget=We,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gM(i,e){function t(n,s=ai){let r,o=Lt.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===gu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kf)return i.BYTE;if(n===$f)return i.SHORT;if(n===Uo)return i.UNSIGNED_SHORT;if(n===mu)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===Oi)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===Qf)return i.ALPHA;if(n===e0)return i.RGB;if(n===Jn)return i.RGBA;if(n===ps)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===cr)return i.RED;if(n===xu)return i.RED_INTEGER;if(n===ur)return i.RG;if(n===yu)return i.RG_INTEGER;if(n===_u)return i.RGBA_INTEGER;if(n===ul||n===hl||n===fl||n===dl)if(o===Wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bu||n===Mu||n===Su||n===wu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Su)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tu||n===Eu||n===Au||n===Ru||n===Cu||n===pl||n===Pu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tu||n===Eu)return o===Wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Au)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ru)return r.COMPRESSED_R11_EAC;if(n===Cu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pl)return r.COMPRESSED_RG11_EAC;if(n===Pu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Iu||n===Lu||n===Du||n===Nu||n===Fu||n===Uu||n===Bu||n===Ou||n===ku||n===zu||n===Hu||n===Vu||n===Wu||n===Gu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Iu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Du)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ou)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ku)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gu)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xu||n===qu||n===Yu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xu)return o===Wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zu||n===Ku||n===ml||n===$u)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$u)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var vM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
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

}`,E0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ft({vertexShader:vM,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},A0=class extends ms{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",a=1,u=null,h=null,p=null,m=null,x=null,y=null,M=typeof XRWebGLBinding<"u",c=new E0,f={},d=t.getContextAttributes(),g=null,v=null,b=[],T=[],w=new Le,_=null,S=null,E=new Hn;E.viewport=new mt;let R=new Hn;R.viewport=new mt;let C=[E,R],P=new uu,A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=b[G];return $===void 0&&($=new wo,b[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=b[G];return $===void 0&&($=new wo,b[G]=$),$.getGripSpace()},this.getHand=function(G){let $=b[G];return $===void 0&&($=new wo,b[G]=$),$.getHandSpace()};function D(G){let $=T.indexOf(G.inputSource);if($===-1)return;let ge=b[$];ge!==void 0&&(ge.update(G.inputSource,G.frame,u||o),ge.dispatchEvent({type:G.type,data:G.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let G=0;G<b.length;G++){let $=T[G];$!==null&&(T[G]=null,b[G].disconnect($))}A=null,L=null,c.reset();for(let G in f)delete f[G];if(e.setRenderTarget(g),x=null,m=null,p=null,s=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),S!==null){let G=S.camera;G.fov=S.fov,G.zoom=S.zoom,G.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,n.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),d.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Pe=null,te=null;d.depth&&(te=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=d.stencil?lr:ps,Pe=d.stencil?Bo:ls);let ve={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(ve),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new Yt(m.textureWidth,m.textureHeight,{format:Jn,type:$n,depthTexture:new tr(m.textureWidth,m.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ge={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new Yt(x.framebufferWidth,x.framebufferHeight,{format:Jn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),u=null,o=await s.requestReferenceSpace(l),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function z(G){for(let $=0;$<G.removed.length;$++){let ge=G.removed[$],Pe=T.indexOf(ge);Pe>=0&&(T[Pe]=null,b[Pe].disconnect(ge))}for(let $=0;$<G.added.length;$++){let ge=G.added[$],Pe=T.indexOf(ge);if(Pe===-1){for(let ve=0;ve<b.length;ve++)if(ve>=T.length){T.push(ge),Pe=ve;break}else if(T[ve]===null){T[ve]=ge,Pe=ve;break}if(Pe===-1)break}let te=b[Pe];te&&te.connect(ge)}}let B=new V,H=new V;function k(G,$,ge){B.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(ge.matrixWorld);let Pe=B.distanceTo(H),te=$.projectionMatrix.elements,ve=ge.projectionMatrix.elements,Ne=te[14]/(te[10]-1),Oe=te[14]/(te[10]+1),Ee=(te[9]+1)/te[5],We=(te[9]-1)/te[5],ne=(te[8]-1)/te[0],de=(ve[8]+1)/ve[0],Q=Ne*ne,ce=Ne*de,se=Pe/(-ne+de),ie=se*-ne;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ie),G.translateZ(se),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),te[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let F=Ne+se,Me=Oe+se,J=Q-ie,N=ce+(Pe-ie),I=Ee*Oe/Me*F,W=We*Oe/Me*F;G.projectionMatrix.makePerspective(J,N,I,W,F,Me),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function X(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let $=G.near,ge=G.far;c.texture!==null&&(c.depthNear>0&&($=c.depthNear),c.depthFar>0&&(ge=c.depthFar)),P.near=R.near=E.near=$,P.far=R.far=E.far=ge,(A!==P.near||L!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),A=P.near,L=P.far),P.layers.mask=G.layers.mask|6,E.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;let Pe=G.parent,te=P.cameras;X(P,Pe);for(let ve=0;ve<te.length;ve++)X(te[ve],Pe);te.length===2?k(P,E,R):P.projectionMatrix.copy(E.projectionMatrix),S===null&&G.isPerspectiveCamera&&(S={camera:G,fov:G.fov,zoom:G.zoom}),K(G,P,Pe)};function K(G,$,ge){ge===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(ge.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Da*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(m===null&&x===null))return a},this.setFoveation=function(G){a=G,m!==null&&(m.fixedFoveation=G),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=G)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(P)},this.getCameraTexture=function(G){return f[G]};let be=null;function we(G,$){if(h=$.getViewerPose(u||o),y=$,h!==null){let ge=h.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let Pe=!1;ge.length!==P.cameras.length&&(P.cameras.length=0,Pe=!0);for(let Oe=0;Oe<ge.length;Oe++){let Ee=ge[Oe],We=null;if(x!==null)We=x.getViewport(Ee);else{let de=p.getViewSubImage(m,Ee);We=de.viewport,Oe===0&&(e.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(v))}let ne=C[Oe];ne===void 0&&(ne=new Hn,ne.layers.enable(Oe),ne.viewport=new mt,C[Oe]=ne),ne.matrix.fromArray(Ee.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Ee.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(We.x,We.y,We.width,We.height),Oe===0&&(P.matrix.copy(ne.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Pe===!0&&P.cameras.push(ne)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let Oe=p.getDepthInformation(ge[0]);Oe&&Oe.isValid&&Oe.texture&&c.init(Oe,s.renderState)}if(te&&te.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Oe=0;Oe<ge.length;Oe++){let Ee=ge[Oe].camera;if(Ee){let We=f[Ee];We||(We=new Va,f[Ee]=We);let ne=p.getCameraImage(Ee);We.sourceTexture=ne}}}}for(let ge=0;ge<b.length;ge++){let Pe=T[ge],te=b[ge];Pe!==null&&te!==void 0&&te.update(Pe,$,u||o)}be&&be(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),y=null}let Se=new Im;Se.setAnimationLoop(we),this.setAnimationLoop=function(G){be=G},this.dispose=function(){}}},yM=new je,Bm=new gt;Bm.set(-1,0,0,0,1,0,0,0,1);function _M(i,e){function t(c,f){c.matrixAutoUpdate===!0&&c.updateMatrix(),f.value.copy(c.matrix)}function n(c,f){f.color.getRGB(c.fogColor.value,s0(i)),f.isFog?(c.fogNear.value=f.near,c.fogFar.value=f.far):f.isFogExp2&&(c.fogDensity.value=f.density)}function s(c,f,d,g,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(c,f):f.isMeshLambertMaterial?(r(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(c,f),p(c,f)):f.isMeshPhongMaterial?(r(c,f),h(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(c,f),m(c,f),f.isMeshPhysicalMaterial&&x(c,f,v)):f.isMeshMatcapMaterial?(r(c,f),y(c,f)):f.isMeshDepthMaterial?r(c,f):f.isMeshDistanceMaterial?(r(c,f),M(c,f)):f.isMeshNormalMaterial?r(c,f):f.isLineBasicMaterial?(o(c,f),f.isLineDashedMaterial&&l(c,f)):f.isPointsMaterial?a(c,f,d,g):f.isSpriteMaterial?u(c,f):f.isShadowMaterial?(c.color.value.copy(f.color),c.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(c,f){c.opacity.value=f.opacity,f.color&&c.diffuse.value.copy(f.color),f.emissive&&c.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.bumpMap&&(c.bumpMap.value=f.bumpMap,t(f.bumpMap,c.bumpMapTransform),c.bumpScale.value=f.bumpScale,f.side===Vn&&(c.bumpScale.value*=-1)),f.normalMap&&(c.normalMap.value=f.normalMap,t(f.normalMap,c.normalMapTransform),c.normalScale.value.copy(f.normalScale),f.side===Vn&&c.normalScale.value.negate()),f.displacementMap&&(c.displacementMap.value=f.displacementMap,t(f.displacementMap,c.displacementMapTransform),c.displacementScale.value=f.displacementScale,c.displacementBias.value=f.displacementBias),f.emissiveMap&&(c.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,c.emissiveMapTransform)),f.specularMap&&(c.specularMap.value=f.specularMap,t(f.specularMap,c.specularMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest);let d=e.get(f),g=d.envMap,v=d.envMapRotation;g&&(c.envMap.value=g,c.envMapRotation.value.setFromMatrix4(yM.makeRotationFromEuler(v)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(Bm),c.reflectivity.value=f.reflectivity,c.ior.value=f.ior,c.refractionRatio.value=f.refractionRatio),f.lightMap&&(c.lightMap.value=f.lightMap,c.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,c.lightMapTransform)),f.aoMap&&(c.aoMap.value=f.aoMap,c.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,c.aoMapTransform))}function o(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform))}function l(c,f){c.dashSize.value=f.dashSize,c.totalSize.value=f.dashSize+f.gapSize,c.scale.value=f.scale}function a(c,f,d,g){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.size.value=f.size*d,c.scale.value=g*.5,f.map&&(c.map.value=f.map,t(f.map,c.uvTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function u(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.rotation.value=f.rotation,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function h(c,f){c.specular.value.copy(f.specular),c.shininess.value=Math.max(f.shininess,1e-4)}function p(c,f){f.gradientMap&&(c.gradientMap.value=f.gradientMap)}function m(c,f){c.metalness.value=f.metalness,f.metalnessMap&&(c.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,c.metalnessMapTransform)),c.roughness.value=f.roughness,f.roughnessMap&&(c.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,c.roughnessMapTransform)),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)}function x(c,f,d){c.ior.value=f.ior,f.sheen>0&&(c.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),c.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(c.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,c.sheenColorMapTransform)),f.sheenRoughnessMap&&(c.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,c.sheenRoughnessMapTransform))),f.clearcoat>0&&(c.clearcoat.value=f.clearcoat,c.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(c.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,c.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(c.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vn&&c.clearcoatNormalScale.value.negate())),f.dispersion>0&&(c.dispersion.value=f.dispersion),f.retroreflectivity>0&&(c.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(c.iridescence.value=f.iridescence,c.iridescenceIOR.value=f.iridescenceIOR,c.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(c.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,c.iridescenceMapTransform)),f.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),f.transmission>0&&(c.transmission.value=f.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),f.transmissionMap&&(c.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,c.transmissionMapTransform)),c.thickness.value=f.thickness,f.thicknessMap&&(c.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=f.attenuationDistance,c.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(c.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(c.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=f.specularIntensity,c.specularColor.value.copy(f.specularColor),f.specularColorMap&&(c.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,c.specularColorMapTransform)),f.specularIntensityMap&&(c.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,c.specularIntensityMapTransform))}function y(c,f){f.matcap&&(c.matcap.value=f.matcap)}function M(c,f){let d=e.get(f).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bM(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(v,b){let T=b.program;n.uniformBlockBinding(v,T)}function u(v,b){let T=s[v.id];T===void 0&&(c(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",d));let w=b.program;n.updateUBOMapping(v,w);let _=e.render.frame;r[v.id]!==_&&(m(v),r[v.id]=_)}function h(v){let b=p();v.__bindingPointIndex=b;let T=i.createBuffer(),w=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function p(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){let b=s[v.id],T=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,S=T.length;_<S;_++){let E=T[_];if(Array.isArray(E))for(let R=0,C=E.length;R<C;R++)x(E[R],_,R,w);else x(E,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(v,b,T,w){if(M(v,b,T,w)===!0){let _=v.__offset,S=v.value;if(Array.isArray(S)){let E=0;for(let R=0;R<S.length;R++){let C=S[R],P=f(C);y(C,v.__data,E),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(E+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function y(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function M(v,b,T,w){let _=v.value,S=b+"_"+T;if(w[S]===void 0)return typeof _=="number"||typeof _=="boolean"?w[S]=_:ArrayBuffer.isView(_)?w[S]=_.slice():w[S]=_.clone(),!0;{let E=w[S];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return w[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function c(v){let b=v.uniforms,T=0,w=16;for(let S=0,E=b.length;S<E;S++){let R=Array.isArray(b[S])?b[S]:[b[S]];for(let C=0,P=R.length;C<P;C++){let A=R[C],L=Array.isArray(A.value)?A.value:[A.value];for(let D=0,O=L.length;D<O;D++){let z=L[D],B=f(z),H=T%w,k=H%B.boundary,X=H+k;T+=k,X!==0&&w-X<B.storage&&(T+=w-X),A.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=B.storage}}}let _=T%w;return _>0&&(T+=w-_),v.__size=T,v.__cache={},this}function f(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",v),b}function d(v){let b=v.target;b.removeEventListener("dispose",d);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:a,update:u,dispose:g}}var MM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ys=null;function SM(){return ys===null&&(ys=new ss(MM,16,16,ur,Cn),ys.name="DFG_LUT",ys.minFilter=kt,ys.magFilter=kt,ys.wrapS=ds,ys.wrapT=ds,ys.generateMipmaps=!1,ys.needsUpdate=!0),ys}var sh=class{constructor(e={}){let{canvas:t=Qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:x=$n}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=o;let M=x,c=new Set([_u,yu,xu]),f=new Set([$n,ls,Uo,Bo,gu,vu]),d=new Uint32Array(4),g=new Int32Array(4),v=new V,b=null,T=null,w=[],_=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,C=null,P=null,A=null,L=null;this._outputColorSpace=qt;let D=0,O=0,z=null,B=-1,H=null,k=new mt,X=new mt,K=null,be=new fe(0),we=0,Se=t.width,G=t.height,$=1,ge=null,Pe=null,te=new mt(0,0,Se,G),ve=new mt(0,0,Se,G),Ne=!1,Oe=new Eo,Ee=!1,We=!1,ne=new je,de=new V,Q=new mt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function ie(){return z===null?$:1}let F=n;function Me(U,j){return t.getContext(U,j)}let J,N,I,W,Y,ee,ue,xe,he,me,Fe,Ke,Ue,Be,Ve,et,lt,Z,De,ye,ke,He,Ae;try{let U={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Bt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",hi,!1),F===null){let j="webgl2";if(F=Me(j,U),F===null)throw Me(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(U){throw t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",hi,!1),pt("WebGLRenderer: "+U.message),U}function it(){J=new P_(F),J.init(),ke=new gM(F,J),N=new __(F,J,e,ke),I=new pM(F,J),N.reversedDepthBuffer&&m&&I.buffers.depth.setReversed(!0),P=F.createFramebuffer(),A=F.createFramebuffer(),L=F.createFramebuffer(),W=new D_(F),Y=new eM,ee=new mM(F,J,I,Y,N,ke,W),ue=new C_(E),xe=new Fx(F),He=new x_(F,xe),he=new I_(F,xe,W,He),me=new F_(F,he,xe,He,W),Z=new N_(F,N,ee),Ve=new b_(Y),Fe=new Qb(E,ue,J,N,He,Ve),Ke=new _M(E,Y),Ue=new nM,Be=new lM(J),lt=new v_(E,ue,I,me,y,a),et=new dM(E,me,N),Ae=new bM(F,W,N,I),De=new y_(F,J,W),ye=new L_(F,J,W),W.programs=Fe.programs,E.capabilities=N,E.extensions=J,E.properties=Y,E.renderLists=Ue,E.shadowMap=et,E.state=I,E.info=W}M!==$n&&(S=new B_(M,t.width,t.height,l,s,r));let Qe=new A0(E,F);this.xr=Qe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let U=J.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=J.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(Se,G,!1))},this.getSize=function(U){return U.set(Se,G)},this.setSize=function(U,j,pe=!0){if(Qe.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=U,G=j,t.width=Math.floor(U*$),t.height=Math.floor(j*$),pe===!0&&(t.style.width=U+"px",t.style.height=j+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,U,j)},this.getDrawingBufferSize=function(U){return U.set(Se*$,G*$).floor()},this.setDrawingBufferSize=function(U,j,pe){Se=U,G=j,$=pe,t.width=Math.floor(U*pe),t.height=Math.floor(j*pe),this.setViewport(0,0,U,j)},this.setEffects=function(U){if(M===$n){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let j=0;j<U.length;j++)if(U[j].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(k)},this.getViewport=function(U){return U.copy(te)},this.setViewport=function(U,j,pe,ae){U.isVector4?te.set(U.x,U.y,U.z,U.w):te.set(U,j,pe,ae),I.viewport(k.copy(te).multiplyScalar($).round())},this.getScissor=function(U){return U.copy(ve)},this.setScissor=function(U,j,pe,ae){U.isVector4?ve.set(U.x,U.y,U.z,U.w):ve.set(U,j,pe,ae),I.scissor(X.copy(ve).multiplyScalar($).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(U){I.setScissorTest(Ne=U)},this.setOpaqueSort=function(U){ge=U},this.setTransparentSort=function(U){Pe=U},this.getClearColor=function(U){return U.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(U=!0,j=!0,pe=!0){let ae=0;if(U){let le=!1;if(z!==null){let qe=z.texture.format;le=c.has(qe)}if(le){let qe=z.texture.type,ze=f.has(qe),Ge=lt.getClearColor(),Je=lt.getClearAlpha(),tt=Ge.r,_t=Ge.g,Mt=Ge.b;ze?(d[0]=tt,d[1]=_t,d[2]=Mt,d[3]=Je,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=tt,g[1]=_t,g[2]=Mt,g[3]=Je,F.clearBufferiv(F.COLOR,0,g))}else ae|=F.COLOR_BUFFER_BIT}j&&(ae|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ae|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&F.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),C=U},this.dispose=function(){t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",hi,!1),lt.dispose(),Ue.dispose(),Be.dispose(),Y.dispose(),ue.dispose(),me.dispose(),He.dispose(),Ae.dispose(),Fe.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",re),Qe.removeEventListener("sessionend",ti),Es.stop()};function Bt(U){U.preventDefault(),n0("WebGLRenderer: Context Lost."),R=!0}function Ft(){n0("WebGLRenderer: Context Restored."),R=!1;let U=W.autoReset,j=et.enabled,pe=et.autoUpdate,ae=et.needsUpdate,le=et.type;it(),W.autoReset=U,et.enabled=j,et.autoUpdate=pe,et.needsUpdate=ae,et.type=le}function hi(U){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function bi(U){let j=U.target;j.removeEventListener("dispose",bi),Gl(j)}function Gl(U){yr(U),Y.remove(U)}function yr(U){let j=Y.get(U).programs;j!==void 0&&(j.forEach(function(pe){Fe.releaseProgram(pe)}),U.isShaderMaterial&&Fe.releaseShaderCache(U))}this.renderBufferDirect=function(U,j,pe,ae,le,qe){j===null&&(j=ce);let ze=le.isMesh&&le.matrixWorld.determinantAffine()<0,Ge=ni(U,j,pe,ae,le);I.setMaterial(ae,ze);let Je=pe.index,tt=1;if(ae.wireframe===!0){if(Je=he.getWireframeAttribute(pe),Je===void 0)return;tt=2}let _t=pe.drawRange,Mt=pe.attributes.position,Xe=_t.start*tt,ut=(_t.start+_t.count)*tt;qe!==null&&(Xe=Math.max(Xe,qe.start*tt),ut=Math.min(ut,(qe.start+qe.count)*tt)),Je!==null?(Xe=Math.max(Xe,0),ut=Math.min(ut,Je.count)):Mt!=null&&(Xe=Math.max(Xe,0),ut=Math.min(ut,Mt.count));let pn=ut-Xe;if(pn<0||pn===1/0)return;He.setup(le,ae,Ge,pe,Je);let Xt,Vt=De;if(Je!==null&&(Xt=xe.get(Je),Vt=ye,Vt.setIndex(Xt)),le.isMesh)ae.wireframe===!0?(I.setLineWidth(ae.wireframeLinewidth*ie()),Vt.setMode(F.LINES)):Vt.setMode(F.TRIANGLES);else if(le.isLine){let wn=ae.linewidth;wn===void 0&&(wn=1),I.setLineWidth(wn*ie()),le.isLineSegments?Vt.setMode(F.LINES):le.isLineLoop?Vt.setMode(F.LINE_LOOP):Vt.setMode(F.LINE_STRIP)}else le.isPoints?Vt.setMode(F.POINTS):le.isSprite&&Vt.setMode(F.TRIANGLES);if(le.isBatchedMesh)if(J.get("WEBGL_multi_draw"))Vt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{let wn=le._multiDrawStarts,Ze=le._multiDrawCounts,Nn=le._multiDrawCount,It=Je?xe.get(Je).bytesPerElement:1,Et=Y.get(ae).currentProgram.getUniforms();for(let fi=0;fi<Nn;fi++)Et.setValue(F,"_gl_DrawID",fi),Vt.render(wn[fi]/It,Ze[fi])}else if(le.isInstancedMesh)Vt.renderInstances(Xe,pn,le.count);else if(pe.isInstancedBufferGeometry){let wn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ze=Math.min(pe.instanceCount,wn);Vt.renderInstances(Xe,pn,Ze)}else Vt.render(Xe,pn)};function Xs(U,j,pe,ae){C!==null&&U.isNodeMaterial&&C.setObject(ae,U),Ee===!0&&Ve.setState(U,pe,!1),U.transparent===!0&&U.side===bn&&U.forceSinglePass===!1?(U.side=Vn,U.needsUpdate=!0,Ut(U,j,ae),U.side=xs,U.needsUpdate=!0,Ut(U,j,ae),U.side=bn):Ut(U,j,ae)}this.compile=function(U,j,pe=null){pe===null&&(pe=U),C!==null&&C.renderStart(U,j,pe),T=Be.get(pe),T.init(j),_.push(T),pe.traverseVisible(function(le){le.isLight&&le.layers.test(j.layers)&&(T.pushLight(le),le.castShadow&&T.pushShadow(le))}),U!==pe&&U.traverseVisible(function(le){le.isLight&&le.layers.test(j.layers)&&(T.pushLight(le),le.castShadow&&T.pushShadow(le))}),T.setupLights(),C!==null&&C.updateLights(T.state.lightsArray),We=this.localClippingEnabled,Ee=Ve.init(this.clippingPlanes,We),Ee===!0&&Ve.setGlobalState(this.clippingPlanes,j),C!==null&&et.render(T.state.shadowsArray,pe,j);let ae=new Set;return U.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;let qe=le.material;if(qe)if(Array.isArray(qe))for(let ze=0;ze<qe.length;ze++){let Ge=qe[ze];Xs(Ge,pe,j,le),ae.add(Ge)}else Xs(qe,pe,j,le),ae.add(qe)}),T=_.pop(),C!==null&&C.renderEnd(),ae},this.compileAsync=function(U,j,pe=null){let ae=this.compile(U,j,pe);return new Promise(le=>{function qe(){if(ae.forEach(function(ze){let Je=Y.get(ze).currentProgram;(Je===void 0||Je.isReady())&&ae.delete(ze)}),ae.size===0){le(U);return}setTimeout(qe,10)}J.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let _r=null;function ha(U){_r&&_r(U)}function re(){Es.stop()}function ti(){Es.start()}let Es=new Im;Es.setAnimationLoop(ha),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(U){_r=U,Qe.setAnimationLoop(U),U===null?Es.stop():Es.start()},Qe.addEventListener("sessionstart",re),Qe.addEventListener("sessionend",ti),this.render=function(U,j){if(j!==void 0&&j.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;C!==null&&C.renderStart(U,j);let pe=Qe.enabled===!0&&Qe.isPresenting===!0,ae=S!==null&&(z===null||pe)&&S.begin(E,z);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(j),j=Qe.getCamera()),U.isScene===!0&&U.onBeforeRender(E,U,j,z),T=Be.get(U,_.length),T.init(j),T.state.textureUnits=ee.getTextureUnits(),_.push(T),ne.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Oe.setFromProjectionMatrix(ne,is,j.reversedDepth),We=this.localClippingEnabled,Ee=Ve.init(this.clippingPlanes,We),b=Ue.get(U,w.length),b.init(),w.push(b),Qe.enabled===!0&&Qe.isPresenting===!0){let ze=E.xr.getDepthSensingMesh();ze!==null&&fa(ze,j,-1/0,E.sortObjects)}fa(U,j,0,E.sortObjects),b.finish(),C!==null&&C.updateLights(T.state.lightsArray),E.sortObjects===!0&&b.sort(ge,Pe),se=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,se&&lt.addToRenderList(b,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ve.beginShadows();let le=T.state.shadowsArray;if(et.render(le,U,j),Ee===!0&&Ve.endShadows(),(ae&&S.hasRenderPass())===!1){let ze=b.opaque,Ge=b.transmissive;if(T.setupLights(),j.isArrayCamera){let Je=j.cameras;if(Ge.length>0)for(let tt=0,_t=Je.length;tt<_t;tt++){let Mt=Je[tt];Pt(ze,Ge,U,Mt)}se&&lt.render(U);for(let tt=0,_t=Je.length;tt<_t;tt++){let Mt=Je[tt];Xl(b,U,Mt,Mt.viewport)}}else Ge.length>0&&Pt(ze,Ge,U,j),se&&lt.render(U),Xl(b,U,j)}z!==null&&O===0&&(ee.updateMultisampleRenderTarget(z),ee.updateRenderTargetMipmap(z)),ae&&S.end(E),U.isScene===!0&&U.onAfterRender(E,U,j),He.resetDefaultState(),B=-1,H=null,_.pop(),_.length>0?(T=_[_.length-1],ee.setTextureUnits(T.state.textureUnits),Ee===!0&&Ve.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,C!==null&&C.renderEnd()};function fa(U,j,pe,ae){if(U.visible===!1)return;if(U.layers.test(j.layers)){if(U.isGroup)pe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(j);else if(U.isLightProbeGrid)T.pushLightProbeGrid(U);else if(U.isLight)T.pushLight(U),U.castShadow&&T.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(Oe)){ae&&Q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ne);let ze=me.update(U),Ge=U.material;Ge.visible&&b.push(U,ze,Ge,pe,Q.z,null,j)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(Oe))){let ze=me.update(U),Ge=U.material;if(ae&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Q.copy(U.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Q.copy(ze.boundingSphere.center)),Q.applyMatrix4(U.matrixWorld).applyMatrix4(ne)),Array.isArray(Ge)){let Je=ze.groups;for(let tt=0,_t=Je.length;tt<_t;tt++){let Mt=Je[tt],Xe=Ge[Mt.materialIndex];Xe&&Xe.visible&&b.push(U,ze,Xe,pe,Q.z,Mt,j)}}else Ge.visible&&b.push(U,ze,Ge,pe,Q.z,null,j)}}let qe=U.children;for(let ze=0,Ge=qe.length;ze<Ge;ze++)fa(qe[ze],j,pe,ae)}function Xl(U,j,pe,ae){let{opaque:le,transmissive:qe,transparent:ze}=U;T.setupLightsView(pe),Ee===!0&&Ve.setGlobalState(E.clippingPlanes,pe),ae&&I.viewport(k.copy(ae)),le.length>0&&St(le,j,pe),qe.length>0&&St(qe,j,pe),ze.length>0&&St(ze,j,pe),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Pt(U,j,pe,ae){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ae.id]===void 0){let Xe=J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ae.id]=new Yt(1,1,{generateMipmaps:!0,type:Xe?Cn:$n,minFilter:In,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let qe=T.state.transmissionRenderTarget[ae.id],ze=ae.viewport||k;qe.setSize(ze.z*E.transmissionResolutionScale,ze.w*E.transmissionResolutionScale);let Ge=E.getRenderTarget(),Je=E.getActiveCubeFace(),tt=E.getActiveMipmapLevel();E.setRenderTarget(qe),E.getClearColor(be),we=E.getClearAlpha(),we<1&&E.setClearColor(16777215,.5),E.clear(),se&&lt.render(pe);let _t=E.toneMapping;E.toneMapping=as;let Mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),T.setupLightsView(ae),Ee===!0&&Ve.setGlobalState(E.clippingPlanes,ae),St(U,pe,ae),ee.updateMultisampleRenderTarget(qe),ee.updateRenderTargetMipmap(qe),J.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ut=0,pn=j.length;ut<pn;ut++){let Xt=j[ut],{object:Vt,geometry:wn,material:Ze,group:Nn}=Xt;if(Ze.side===bn&&Vt.layers.test(ae.layers)){let It=Ze.side;Ze.side=Vn,Ze.needsUpdate=!0,zt(Vt,pe,ae,wn,Ze,Nn),Ze.side=It,Ze.needsUpdate=!0,Xe=!0}}Xe===!0&&(ee.updateMultisampleRenderTarget(qe),ee.updateRenderTargetMipmap(qe))}E.setRenderTarget(Ge,Je,tt),E.setClearColor(be,we),Mt!==void 0&&(ae.viewport=Mt),E.toneMapping=_t}function St(U,j,pe){let ae=j.isScene===!0?j.overrideMaterial:null;for(let le=0,qe=U.length;le<qe;le++){let ze=U[le],{object:Ge,geometry:Je,group:tt}=ze,_t=ze.material;_t.allowOverride===!0&&ae!==null&&(_t=ae),Ge.layers.test(pe.layers)&&zt(Ge,j,pe,Je,_t,tt)}}function zt(U,j,pe,ae,le,qe){C!==null&&le.isNodeMaterial&&C.setObject(U,le),U.onBeforeRender(E,j,pe,ae,le,qe),U.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),le.onBeforeRender(E,j,pe,ae,U,qe),le.transparent===!0&&le.side===bn&&le.forceSinglePass===!1?(le.side=Vn,le.needsUpdate=!0,E.renderBufferDirect(pe,j,ae,le,U,qe),le.side=xs,le.needsUpdate=!0,E.renderBufferDirect(pe,j,ae,le,U,qe),le.side=bn):E.renderBufferDirect(pe,j,ae,le,U,qe),U.onAfterRender(E,j,pe,ae,le,qe)}function Ut(U,j,pe){j.isScene!==!0&&(j=ce);let ae=Y.get(U),le=T.state.lights,qe=T.state.shadowsArray,ze=le.state.version,Ge=Fe.getParameters(U,le.state,qe,j,pe,T.state.lightProbeGridArray),Je=Fe.getProgramCacheKey(Ge),tt=ae.programs;ae.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?j.environment:null,ae.fog=j.fog;let _t=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;ae.envMap=ue.get(U.envMap||ae.environment,_t),ae.envMapRotation=ae.environment!==null&&U.envMap===null?j.environmentRotation:U.envMapRotation,tt===void 0&&(U.addEventListener("dispose",bi),tt=new Map,ae.programs=tt);let Mt=tt.get(Je);if(Mt!==void 0){if(ae.currentProgram===Mt&&ae.lightsStateVersion===ze)return qs(U,Ge),Mt}else Ge.uniforms=Fe.getUniforms(U),C!==null&&U.isNodeMaterial&&C.build(U,pe,Ge),U.onBeforeCompile(Ge,E),Mt=Fe.acquireProgram(Ge,Je),tt.set(Je,Mt),ae.uniforms=Ge.uniforms;let Xe=ae.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Xe.clippingPlanes=Ve.uniform),qs(U,Ge),ae.needsLights=da(U),ae.lightsStateVersion=ze,ae.needsLights&&(Xe.ambientLightColor.value=le.state.ambient,Xe.lightProbe.value=le.state.probe,Xe.sunLights.value=le.state.sun,Xe.sunLightShadows.value=le.state.sunShadow,Xe.directionalLights.value=le.state.directional,Xe.directionalLightShadows.value=le.state.directionalShadow,Xe.spotLights.value=le.state.spot,Xe.spotLightShadows.value=le.state.spotShadow,Xe.rectAreaLights.value=le.state.rectArea,Xe.ltc_1.value=le.state.rectAreaLTC1,Xe.ltc_2.value=le.state.rectAreaLTC2,Xe.pointLights.value=le.state.point,Xe.pointLightShadows.value=le.state.pointShadow,Xe.hemisphereLights.value=le.state.hemi,Xe.sunShadowMatrix.value=le.state.sunShadowMatrix,Xe.sunShadowCascade.value=le.state.sunShadowCascade,Xe.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Xe.spotLightMatrix.value=le.state.spotLightMatrix,Xe.spotLightMap.value=le.state.spotLightMap,Xe.pointShadowMatrix.value=le.state.pointShadowMatrix),ae.lightProbeGrid=T.state.lightProbeGridArray.length>0,ae.currentProgram=Mt,ae.uniformsList=null,Mt}function ql(U){if(U.uniformsList===null){let j=U.currentProgram.getUniforms();U.uniformsList=Ho.seqWithValue(j.seq,U.uniforms)}return U.uniformsList}function qs(U,j){let pe=Y.get(U);pe.outputColorSpace=j.outputColorSpace,pe.batching=j.batching,pe.batchingColor=j.batchingColor,pe.instancing=j.instancing,pe.instancingColor=j.instancingColor,pe.instancingMorph=j.instancingMorph,pe.skinning=j.skinning,pe.morphTargets=j.morphTargets,pe.morphNormals=j.morphNormals,pe.morphColors=j.morphColors,pe.morphTargetsCount=j.morphTargetsCount,pe.numClippingPlanes=j.numClippingPlanes,pe.numIntersection=j.numClipIntersection,pe.vertexAlphas=j.vertexAlphas,pe.vertexTangents=j.vertexTangents,pe.toneMapping=j.toneMapping}function br(U,j){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;v.setFromMatrixPosition(j.matrixWorld);for(let pe=0,ae=U.length;pe<ae;pe++){let le=U[pe];if(le.texture!==null&&le.boundingBox.containsPoint(v))return le}return null}function ni(U,j,pe,ae,le){j.isScene!==!0&&(j=ce),ee.resetTextureUnits();let qe=j.fog,ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?j.environment:null,Ge=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Lt.workingColorSpace,Je=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,tt=ue.get(ae.envMap||ze,Je),_t=ae.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Mt=!!pe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!pe.morphAttributes.position,ut=!!pe.morphAttributes.normal,pn=!!pe.morphAttributes.color,Xt=as;ae.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xt=E.toneMapping);let Vt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,wn=Vt!==void 0?Vt.length:0,Ze=Y.get(ae),Nn=T.state.lights;if(Ee===!0&&(We===!0||U!==H)){let Ot=U===H&&ae.id===B;Ve.setState(ae,U,Ot)}let It=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Nn.state.version||Ze.outputColorSpace!==Ge||le.isBatchedMesh&&Ze.batching===!1||!le.isBatchedMesh&&Ze.batching===!0||le.isBatchedMesh&&Ze.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&Ze.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&Ze.instancing===!1||!le.isInstancedMesh&&Ze.instancing===!0||le.isSkinnedMesh&&Ze.skinning===!1||!le.isSkinnedMesh&&Ze.skinning===!0||le.isInstancedMesh&&Ze.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Ze.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Ze.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Ze.instancingMorph===!1&&le.morphTexture!==null||Ze.envMap!==tt||ae.fog===!0&&Ze.fog!==qe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ve.numPlanes||Ze.numIntersection!==Ve.numIntersection)||Ze.vertexAlphas!==_t||Ze.vertexTangents!==Mt||Ze.morphTargets!==Xe||Ze.morphNormals!==ut||Ze.morphColors!==pn||Ze.toneMapping!==Xt||Ze.morphTargetsCount!==wn||!!Ze.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(It=!0):(It=!0,Ze.__version=ae.version);let Et=Ze.currentProgram;It===!0&&(Et=Ut(ae,j,le),C&&ae.isNodeMaterial&&C.onUpdateProgram(ae,Et,Ze));let fi=!1,Zi=!1,As=!1,Ht=Et.getUniforms(),mn=Ze.uniforms;if(I.useProgram(Et.program)&&(fi=!0,Zi=!0,As=!0),ae.id!==B&&(B=ae.id,Zi=!0),Ze.needsLights){let Ot=br(T.state.lightProbeGridArray,le);Ze.lightProbeGrid!==Ot&&(Ze.lightProbeGrid=Ot,Zi=!0)}if(fi||H!==U){I.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ht.setValue(F,"projectionMatrix",U.projectionMatrix),Ht.setValue(F,"viewMatrix",U.matrixWorldInverse);let Ki=Ht.map.cameraPosition;Ki!==void 0&&Ki.setValue(F,de.setFromMatrixPosition(U.matrixWorld)),N.logarithmicDepthBuffer&&Ht.setValue(F,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(F,"isOrthographic",U.isOrthographicCamera===!0),H!==U&&(H=U,Zi=!0,As=!0)}if(Ze.needsLights&&(Nn.state.sunShadowMap.length>0&&Ht.setValue(F,"sunShadowMap",Nn.state.sunShadowMap,ee),Nn.state.directionalShadowMap.length>0&&Ht.setValue(F,"directionalShadowMap",Nn.state.directionalShadowMap,ee),Nn.state.spotShadowMap.length>0&&Ht.setValue(F,"spotShadowMap",Nn.state.spotShadowMap,ee),Nn.state.pointShadowMap.length>0&&Ht.setValue(F,"pointShadowMap",Nn.state.pointShadowMap,ee)),le.isSkinnedMesh){Ht.setOptional(F,le,"bindMatrix"),Ht.setOptional(F,le,"bindMatrixInverse");let Ot=le.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Ht.setValue(F,"boneTexture",Ot.boneTexture,ee))}le.isBatchedMesh&&(Ht.setOptional(F,le,"batchingTexture"),Ht.setValue(F,"batchingTexture",le._matricesTexture,ee),Ht.setOptional(F,le,"batchingIdTexture"),Ht.setValue(F,"batchingIdTexture",le._indirectTexture,ee),Ht.setOptional(F,le,"batchingColorTexture"),le._colorsTexture!==null&&Ht.setValue(F,"batchingColorTexture",le._colorsTexture,ee));let hs=pe.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Z.update(le,pe,Et),(Zi||Ze.receiveShadow!==le.receiveShadow)&&(Ze.receiveShadow=le.receiveShadow,Ht.setValue(F,"receiveShadow",le.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&j.environment!==null&&(mn.envMapIntensity.value=j.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=SM()),Zi){if(Ht.setValue(F,"toneMappingExposure",E.toneMappingExposure),Ze.needsLights&&Zr(mn,As),qe&&ae.fog===!0&&Ke.refreshFogUniforms(mn,qe),Ke.refreshMaterialUniforms(mn,ae,$,G,T.state.transmissionRenderTarget[U.id]),Ze.needsLights&&Ze.lightProbeGrid){let Ot=Ze.lightProbeGrid;mn.probesSH.value=Ot.texture,mn.probesMin.value.copy(Ot.boundingBox.min),mn.probesMax.value.copy(Ot.boundingBox.max),mn.probesResolution.value.copy(Ot.resolution)}Ho.upload(F,ql(Ze),mn,ee)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ho.upload(F,ql(Ze),mn,ee),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(F,"center",le.center),Ht.setValue(F,"modelViewMatrix",le.modelViewMatrix),Ht.setValue(F,"normalMatrix",le.normalMatrix),Ht.setValue(F,"modelMatrix",le.matrixWorld),ae.uniformsGroups!==void 0){let Ot=ae.uniformsGroups;for(let Ki=0,Ni=Ot.length;Ki<Ni;Ki++){let Ys=Ot[Ki];Ae.update(Ys,Et),Ae.bind(Ys,Et)}}return Et}function Zr(U,j){U.ambientLightColor.needsUpdate=j,U.lightProbe.needsUpdate=j,U.sunLights.needsUpdate=j,U.sunLightShadows.needsUpdate=j,U.directionalLights.needsUpdate=j,U.directionalLightShadows.needsUpdate=j,U.pointLights.needsUpdate=j,U.pointLightShadows.needsUpdate=j,U.spotLights.needsUpdate=j,U.spotLightShadows.needsUpdate=j,U.rectAreaLights.needsUpdate=j,U.hemisphereLights.needsUpdate=j}function da(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(U,j,pe){let ae=Y.get(U);ae.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Y.get(U.texture).__webglTexture=j,Y.get(U.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:pe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,j){let pe=Y.get(U);pe.__webglFramebuffer=j,pe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(U,j=0,pe=0){z=U,D=j,O=pe;let ae=null,le=!1,qe=!1;if(U){let Ge=Y.get(U);if(Ge.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,Ge.__webglFramebuffer),k.copy(U.viewport),X.copy(U.scissor),K=U.scissorTest,I.viewport(k),I.scissor(X),I.setScissorTest(K),B=-1;return}else if(Ge.__webglFramebuffer===void 0)ee.setupRenderTarget(U);else if(Ge.__hasExternalTextures)ee.rebindTextures(U,Y.get(U.texture).__webglTexture,Y.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let _t=U.depthTexture;if(Ge.__boundDepthTexture!==_t){if(_t!==null&&Y.has(_t)&&(U.width!==_t.image.width||U.height!==_t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(U)}}let Je=U.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(qe=!0);let tt=Y.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(tt[j])?ae=tt[j][pe]:ae=tt[j],le=!0):U.samples>0&&ee.useMultisampledRTT(U)===!1?ae=Y.get(U).__webglMultisampledFramebuffer:Array.isArray(tt)?ae=tt[pe]:ae=tt,k.copy(U.viewport),X.copy(U.scissor),K=U.scissorTest}else k.copy(te).multiplyScalar($).floor(),X.copy(ve).multiplyScalar($).floor(),K=Ne;if(pe!==0&&(ae=P),I.bindFramebuffer(F.FRAMEBUFFER,ae)&&I.drawBuffers(U,ae),I.viewport(k),I.scissor(X),I.setScissorTest(K),le){let Ge=Y.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ge.__webglTexture,pe)}else if(qe){let Ge=j;for(let Je=0;Je<U.textures.length;Je++){let tt=Y.get(U.textures[Je]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Je,tt.__webglTexture,pe,Ge)}}else if(U!==null&&pe!==0){let Ge=Y.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ge.__webglTexture,pe)}B=-1};function Kr(U){let j=Y.get(U);return(j.__readFormat!==U.format||j.__readType!==U.type)&&(j.__readFormat=U.format,j.__readType=U.type,j.__formatReadable=N.textureFormatReadable(U.format),j.__typeReadable=N.textureTypeReadable(U.type)),j}this.readRenderTargetPixels=function(U,j,pe,ae,le,qe,ze,Ge=0){if(!(U&&U.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Y.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&ze!==void 0&&(Je=Je[ze]),Je){I.bindFramebuffer(F.FRAMEBUFFER,Je);try{let tt=U.textures[Ge],_t=tt.format,Mt=tt.type;U.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ge);let Xe=Kr(tt);if(Xe.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=U.width-ae&&pe>=0&&pe<=U.height-le&&F.readPixels(j,pe,ae,le,ke.convert(_t),ke.convert(Mt),qe)}finally{let tt=z!==null?Y.get(z).__webglFramebuffer:null;I.bindFramebuffer(F.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(U,j,pe,ae,le,qe,ze,Ge=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Y.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&ze!==void 0&&(Je=Je[ze]),Je)if(j>=0&&j<=U.width-ae&&pe>=0&&pe<=U.height-le){I.bindFramebuffer(F.FRAMEBUFFER,Je);let tt=U.textures[Ge],_t=tt.format,Mt=tt.type;U.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ge);let Xe=Kr(tt);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.bufferData(F.PIXEL_PACK_BUFFER,qe.byteLength,F.STREAM_READ),F.readPixels(j,pe,ae,le,ke.convert(_t),ke.convert(Mt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let pn=z!==null?Y.get(z).__webglFramebuffer:null;I.bindFramebuffer(F.FRAMEBUFFER,pn);let Xt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tm(F,Xt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,qe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ut),F.deleteSync(Xt),qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,j=null,pe=0){let ae=Math.pow(2,-pe),le=Math.floor(U.image.width*ae),qe=Math.floor(U.image.height*ae),ze=j!==null?j.x:0,Ge=j!==null?j.y:0;ee.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,pe,0,0,ze,Ge,le,qe),I.unbindTexture()},this.copyTextureToTexture=function(U,j,pe=null,ae=null,le=0,qe=0){let ze,Ge,Je,tt,_t,Mt,Xe,ut,pn,Xt=U.isCompressedTexture?U.mipmaps[qe]:U.image;if(pe!==null)ze=pe.max.x-pe.min.x,Ge=pe.max.y-pe.min.y,Je=pe.isBox3?pe.max.z-pe.min.z:1,tt=pe.min.x,_t=pe.min.y,Mt=pe.isBox3?pe.min.z:0;else{let mn=Math.pow(2,-le);ze=Math.floor(Xt.width*mn),Ge=Math.floor(Xt.height*mn),U.isDataArrayTexture?Je=Xt.depth:U.isData3DTexture?Je=Math.floor(Xt.depth*mn):Je=1,tt=0,_t=0,Mt=0}ae!==null?(Xe=ae.x,ut=ae.y,pn=ae.z):(Xe=0,ut=0,pn=0);let Vt=ke.convert(j.format),wn=ke.convert(j.type),Ze;j.isData3DTexture?(ee.setTexture3D(j,0),Ze=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ee.setTexture2DArray(j,0),Ze=F.TEXTURE_2D_ARRAY):(ee.setTexture2D(j,0),Ze=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);let Nn=I.getParameter(F.UNPACK_ROW_LENGTH),It=I.getParameter(F.UNPACK_IMAGE_HEIGHT),Et=I.getParameter(F.UNPACK_SKIP_PIXELS),fi=I.getParameter(F.UNPACK_SKIP_ROWS),Zi=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,Xt.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xt.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,tt),I.pixelStorei(F.UNPACK_SKIP_ROWS,_t),I.pixelStorei(F.UNPACK_SKIP_IMAGES,Mt);let As=U.isDataArrayTexture||U.isData3DTexture,Ht=j.isDataArrayTexture||j.isData3DTexture;if(U.isDepthTexture){let mn=Y.get(U),hs=Y.get(j),Ot=Y.get(mn.__renderTarget),Ki=Y.get(hs.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,Ot.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Ni=0;Ni<Je;Ni++)As&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,le,Mt+Ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(j).__webglTexture,qe,pn+Ni)),F.blitFramebuffer(tt,_t,ze,Ge,Xe,ut,ze,Ge,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(le!==0||U.isRenderTargetTexture||Y.has(U)){let mn=Y.get(U),hs=Y.get(j);I.bindFramebuffer(F.READ_FRAMEBUFFER,A),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let Ot=0;Ot<Je;Ot++)As?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,le,Mt+Ot):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,le),Ht?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hs.__webglTexture,qe,pn+Ot):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hs.__webglTexture,qe),le!==0?F.blitFramebuffer(tt,_t,ze,Ge,Xe,ut,ze,Ge,F.COLOR_BUFFER_BIT,F.NEAREST):Ht?F.copyTexSubImage3D(Ze,qe,Xe,ut,pn+Ot,tt,_t,ze,Ge):F.copyTexSubImage2D(Ze,qe,Xe,ut,tt,_t,ze,Ge);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ht?U.isDataTexture||U.isData3DTexture?F.texSubImage3D(Ze,qe,Xe,ut,pn,ze,Ge,Je,Vt,wn,Xt.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(Ze,qe,Xe,ut,pn,ze,Ge,Je,Vt,Xt.data):F.texSubImage3D(Ze,qe,Xe,ut,pn,ze,Ge,Je,Vt,wn,Xt):U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,qe,Xe,ut,ze,Ge,Vt,wn,Xt.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,qe,Xe,ut,Xt.width,Xt.height,Vt,Xt.data):F.texSubImage2D(F.TEXTURE_2D,qe,Xe,ut,ze,Ge,Vt,wn,Xt);I.pixelStorei(F.UNPACK_ROW_LENGTH,Nn),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,It),I.pixelStorei(F.UNPACK_SKIP_PIXELS,Et),I.pixelStorei(F.UNPACK_SKIP_ROWS,fi),I.pixelStorei(F.UNPACK_SKIP_IMAGES,Zi),qe===0&&j.generateMipmaps&&F.generateMipmap(Ze),I.unbindTexture()},this.initRenderTarget=function(U){Y.get(U).__webglFramebuffer===void 0&&ee.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?ee.setTextureCube(U,0):U.isData3DTexture?ee.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ee.setTexture2DArray(U,0):ee.setTexture2D(U,0),I.unbindTexture()},this.resetState=function(){D=0,O=0,z=null,I.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}};var Zt=(i,e,t)=>i<e?e:i>t?t:i,yt=(i,e,t)=>i+(e-i)*t,yl=i=>i*i*(3-2*i),At=(i,e,t)=>{let n=Zt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Om=1337;function km(i){Om=i|0}function wM(i){return i=i^Om|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var yn=(i,e)=>wM(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Ri(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return yt(yn(t,e),yn(t+1,e),s)}var lh=(i,e=0)=>Ri(i,e)*.55+Ri(i*2.03,e+7)*.3+Ri(i*4.1,e+13)*.15;function Tt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var ah=new fe,_e=i=>(ah.set(i),[ah.r,ah.g,ah.b]),R0=(i,e,t)=>[yt(i[0],e[0],t),yt(i[1],e[1],t),yt(i[2],e[2],t)],Bn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Ci=["city","sakura","coast","country","mountain","snow"],_l={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Pi=1500,Wo=260,cs=0,Ml=2,TM=-2.2,bl=0;function Hm(i){bl=Math.max(0,Ci.indexOf(i))}function hr(i){let e=Math.floor(i/Pi),t=i-e*Pi,n=yl(Zt((t-(Pi-Wo))/Wo,0,1)),s=Ci.length;return{a:Ci[((e+bl)%s+s)%s],b:Ci[((e+bl+1)%s+s)%s],t:n}}function Dt(i){let e=hr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var dn=i=>{let e=hr(i);return e.t<.5?e.a:e.b};function hh(i,e){let t=Math.floor(i/Pi),n=i-t*Pi,s=yl(Zt((n-(Pi-Wo))/Wo,0,1)),r=Ci.length;return(Ci[((t+bl)%r+r)%r]===e?1-s:0)+(Ci[((t+bl+1)%r+r)%r]===e?s:0)}function On(i,e){let t=hr(i);return yt(_l[t.a][e],_l[t.b][e],t.t)}var kr=650,zr=375,Go=i=>i*kr+zr;function Sl(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Dt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var C0={x:new Map,r:new Map,t:new Map};function P0(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function fr(i){let e=Math.round((i-zr)/kr);return P0(C0.x,e,()=>{let t=Go(e);return Sl(t)?{k:e,s:t}:null})}function EM(i){let e=fr(i);return e?1-At(8,45,Math.abs(i-e.s)):0}var Hr=1150,Xo=820,wl=4.6,I0=i=>i*Hr+Xo;function L0(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Dt(i+t);if(n.country+n.sakura<.9)return!1}let e=fr(i);return!(e&&Math.abs(e.s-i)<170)}function ki(i){let e=Math.round((i-Xo)/Hr);return P0(C0.r,e,()=>{let t=I0(e);return L0(t)?{k:e,s:t}:null})}function AM(i){let e=ki(i);return e?1-At(30,70,Math.abs(i-e.s)):0}function RM(i){let e=-wl;return i<11?e-1.3:i<16?yt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?yt(e+.7,.35,(i-20)/5.5):.35}var Vm=1050,Wm=525,_n=85,an=125,CM=24,PM=i=>i*Vm+Wm;function IM(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Dt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function zi(i){let e=Math.round((i-Wm)/Vm);return P0(C0.t,e,()=>{let t=PM(e);return IM(t)?{k:e,s:t}:null})}function LM(i){let e=zi(i);return e?1-At(_n+20,an+25,Math.abs(i-e.s)):0}var ch=0,fh=(i,e)=>{let t=i/an;return CM*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var bs=2,uh=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Ri(e/300,11)-.5)*2+(Ri(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*On(e,"curv")*(1-Math.max(EM(e),AM(e),LM(e)))}elevRaw(e){return On(e,"base")+On(e,"hill")*(lh(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=fr(e);if(n){let o=1-At(8,45,Math.abs(e-n.s));o>0&&(t=yt(t,this.elevRaw(n.s),o))}let s=ki(e);if(s){let o=1-At(30,70,Math.abs(e-s.s));o>0&&(t=yt(t,this.elevRaw(s.s),o))}let r=zi(e);if(r){let o=1-At(_n+10,an+45,Math.abs(e-r.s));o>0&&(t=yt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*bs<e+bs;){let t=this.X.length-1,n=t*bs,s=this.curv(n+bs/2)*bs,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*bs),this.Z.push(this.Z[t]+Math.cos(r+s/2)*bs),this.H.push(r+s),this.Y.push(this.elev(n+bs))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+bs);let n=e/bs,s=Math.floor(n),r=n-s;t.x=yt(this.X[s],this.X[s+1],r),t.z=yt(this.Z[s],this.Z[s+1],r),t.y=yt(this.Y[s],this.Y[s+1],r),t.h=yt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),l=Math.cos(t.h);return t.fx=o,t.fz=l,t.rx=-l,t.rz=o,t}};function zm(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+At(45,190,r)*16*(.45+.55*Ri(e/160+(t>0?50:0),3));case"coast":return t>0?r<s+.9?-.06:-.15+At(s+1.5,80,r)*24*(.5+.5*Ri(e/170,5))+At(80,200,r)*30:r<s+1.5?-.06:r<s+1.95?-.04:TM-Math.min(r-(s+2),40)*.13-n;case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Ri(e/140,61),a=r-(s+1);return a<l?a:Math.min(l+(a-l)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+At(105,230,r)*95*(.6+.4*Ri(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?yt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Ri(e/40+(t>0?3:0),71)-.5):.55+At(125,210,r)*40*(.45+.55*Ri(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+At(140,215,r)*7*(.4+.6*Ri(e/210+(t>0?9:0),7))}}function Ms(i,e,t,n){let s=hr(i),r=zm(s.a,i,e,t,n),o=s.t;e<0&&o>0&&(s.b==="coast"?o=At(.25,.9,o):s.a==="coast"&&(o=At(.1,.75,o)));let l=s.t>0?yt(r,zm(s.b,i,e,t,n),o):r;ch=0;let a=ki(i);if(a){let M=Math.abs(i-a.s);if(M>=36)return l;let c=M<29?RM(M):yt(.35,l,At(29,36,M));return Math.abs(e)<n+3.2&&(c=Math.min(c,-.08)),c}let u=zi(i);if(!u)return l;let h=i-u.s,p=Math.abs(h);if(p>=2*an)return l;let m=Math.abs(e),x=fh(h,e),y;return p<_n?y=m<=n+1.46?-.25:Math.max(l,x):y=Math.max(l,Math.min(x,m<n+1?-.06:m-(n+1))),ch=Math.max(0,y-l),y}function Gm(i){let e=ki(i);return e?1-At(27,34,Math.abs(i-e.s)):0}var Tl=new V,dh=new V,DM=[1,1,1],NM=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],qm=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),Ym=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),Jt=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1,idx:o=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.hasIdx=o,this.I=null,this.ni=0,this.icap=0,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new je,this.nm=new gt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}growI(e){let t=Math.max(this.icap*2,e,1024),n=new Uint32Array(t);this.I&&n.set(this.I.subarray(0,this.ni)),this.I=n,this.icap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,l,a,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,p=this.ne,m=this.n*3,x=this.P,y=this.bb,M=h[0]*e+h[4]*t+h[8]*n+h[12],c=h[1]*e+h[5]*t+h[9]*n+h[13],f=h[2]*e+h[6]*t+h[10]*n+h[14];x[m]=M,x[m+1]=c,x[m+2]=f,M<y[0]&&(y[0]=M),c<y[1]&&(y[1]=c),f<y[2]&&(y[2]=f),M>y[3]&&(y[3]=M),c>y[4]&&(y[4]=c),f>y[5]&&(y[5]=f);let d=p[0]*s+p[3]*r+p[6]*o,g=p[1]*s+p[4]*r+p[7]*o,v=p[2]*s+p[5]*r+p[8]*o,b=127/(Math.sqrt(d*d+g*g+v*v)||1);if(this.N[m]=Math.round(d*b),this.N[m+1]=Math.round(g*b),this.N[m+2]=Math.round(v*b),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=a),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(c)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let T=u||DM,w=this.Cl;w[m]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,w[m+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,w[m+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){Tl.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),dh.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),dh.lengthSq()<1e-12&&dh.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Tl.cross(dh).normalize();let l=Tl.x,a=Tl.y,u=Tl.z,h=o?o.u0:0,p=o?o.u1:1,m=o?o.v0:0,x=o?o.v1:1;this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(t[0],t[1],t[2],l,a,u,p,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(s[0],s[1],s[2],l,a,u,h,x,r)}box(e,t,n,s,r,o,l,a=null,u=null){let h=a||{},p=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],p.nz||l,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],p.pz||l,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],p.nx||l,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],p.px||l,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],p.py||l,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],p.ny||l,h.ny)}cyl(e,t,n,s,r,o,l,a,u=!0){let h=(s-r)/o;for(let p=0;p<l;p++){let m=p/l*Math.PI*2,x=(p+1)/l*Math.PI*2,y=Math.cos(m),M=Math.sin(m),c=Math.cos(x),f=Math.sin(x),d=[e+y*s,t,n+M*s],g=[e+c*s,t,n+f*s],v=[e+c*r,t+o,n+f*r],b=[e+y*r,t+o,n+M*r];this.vtx(d[0],d[1],d[2],y,h,M,0,0,a),this.vtx(b[0],b[1],b[2],y,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(d[0],d[1],d[2],y,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(g[0],g[1],g[2],c,h,f,0,0,a),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,a),this.vtx(v[0],v[1],v[2],0,1,0,0,0,a),this.vtx(b[0],b[1],b[2],0,1,0,0,0,a))}}rod(e,t,n,s,r,o){let l=t[0]-e[0],a=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(l,a,u);l/=h,a/=h,u/=h;let p=0,m=1,x=0;Math.abs(a)>.99&&(p=1,m=0);let y=a*x-u*m,M=u*p-l*x,c=l*m-a*p,f=Math.hypot(y,M,c);y/=f,M/=f,c/=f;let d=M*u-c*a,g=c*l-y*u,v=y*a-M*l;for(let b=0;b<r;b++){let T=b/r*Math.PI*2,w=(b+1)/r*Math.PI*2,_=Math.cos(T),S=Math.sin(T),E=Math.cos(w),R=Math.sin(w),C=y*_+d*S,P=M*_+g*S,A=c*_+v*S,L=y*E+d*R,D=M*E+g*R,O=c*E+v*R,z=[e[0]+C*n,e[1]+P*n,e[2]+A*n],B=[e[0]+L*n,e[1]+D*n,e[2]+O*n],H=[t[0]+L*s,t[1]+D*s,t[2]+O*s],k=[t[0]+C*s,t[1]+P*s,t[2]+A*s];this.vtx(z[0],z[1],z[2],C,P,A,0,0,o),this.vtx(B[0],B[1],B[2],L,D,O,0,0,o),this.vtx(H[0],H[1],H[2],L,D,O,0,0,o),this.vtx(z[0],z[1],z[2],C,P,A,0,0,o),this.vtx(H[0],H[1],H[2],L,D,O,0,0,o),this.vtx(k[0],k[1],k[2],C,P,A,0,0,o)}return h}blob(e,t,n,s,r,o,l=0,a=1){let u=Xm[l%Xm.length],h=u.attributes.position.array,p=u.attributes.normal.array,m=u.userData.disp;for(let x=0;x<h.length;x+=3){let y=1+m[x/3],M=Math.max(0,Math.min(1,p[x+1]*.5+.5)),c=[o[0]+(r[0]-o[0])*M,o[1]+(r[1]-o[1])*M,o[2]+(r[2]-o[2])*M];this.vtx(e+h[x]*s*y,t+h[x+1]*s*y*a,n+h[x+2]*s*y,p[x],p[x+1],p[x+2],0,0,c)}}wire(e,t,n,s,r,o=10){let l=e;this.noShadow=!0;for(let a=1;a<=o;a++){let u=a/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,h,s,s,3,r),l=h}this.noShadow=!1}tube(e,t,n,s,r=null,o=0){let l=e.length,a=this.n,u=n+1,h=0,p=0,m=0,x=o;for(let c=0;c<l;c++){let f=e[c>0?c-1:0],d=e[c<l-1?c+1:l-1],g=d[0]-f[0],v=d[1]-f[1],b=d[2]-f[2],T=Math.hypot(g,v,b)||1;if(g/=T,v/=T,b/=T,c===0){let L=r||(Math.abs(v)<.9?[0,1,0]:[1,0,0]);h=L[0],p=L[1],m=L[2]}else x+=Math.hypot(e[c][0]-e[c-1][0],e[c][1]-e[c-1][1],e[c][2]-e[c-1][2]);let w=h*g+p*v+m*b;h-=w*g,p-=w*v,m-=w*b;let _=Math.hypot(h,p,m);_<1e-4&&(h=Math.abs(g)<.9?0:1,p=Math.abs(g)<.9?1:0,m=0,w=h*g+p*v+m*b,h-=w*g,p-=w*v,m-=w*b,_=Math.hypot(h,p,m)),h/=_,p/=_,m/=_;let S=v*m-b*p,E=b*h-g*m,R=g*p-v*h,C=(t[c<l-1?c+1:l-1]-t[c>0?c-1:0])/(T||1),P=e[c],A=t[c];for(let L=0;L<=n;L++){let D=L/n*Math.PI*2,O=Math.cos(D),z=Math.sin(D),B=h*O+S*z,H=p*O+E*z,k=m*O+R*z;this.vtx(P[0]+B*A,P[1]+H*A,P[2]+k*A,B-C*g,H-C*v,k-C*b,D,x,s)}}let y=(l-1)*n*6;this.ni+y>this.icap&&this.growI(this.ni+y);let M=this.I;for(let c=0;c<l-1;c++)for(let f=0;f<n;f++){let d=a+c*u+f,g=d+1,v=d+u,b=v+1,T=this.ni;M[T]=d,M[T+1]=g,M[T+2]=b,M[T+3]=d,M[T+4]=b,M[T+5]=v,this.ni+=6}return x}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,l,a]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],l,a,s[o])}bill(e,t,n,s,r,o,l,a,u,h,p=NM,m=1){let x=(u.u1-u.u0)*.5,y=(u.v1-u.v0)*.5,M=u.u0+x,c=u.v0+y;for(let f=0;f<p.length;f+=2){let d=p[f],g=p[f+1];this.offX=d*l,this.offY=g*a,this.vtx(e,t,n,s,r,o,M+d*x*m,c+g*y*m,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null,I:this.hasIdx&&this.I?this.I.slice(0,this.ni):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,l=e.C,a=e.U,u=this.n,h=this.bb;for(let p=0;p<e.n*3;p+=3){let m=r[p],x=r[p+1],y=r[p+2],M=u*3+p,c=n[0]*m+n[4]*x+n[8]*y+n[12],f=n[1]*m+n[5]*x+n[9]*y+n[13],d=n[2]*m+n[6]*x+n[10]*y+n[14];this.P[M]=c,this.P[M+1]=f,this.P[M+2]=d,this.hasAO&&(this.A[u+p/3]=this.aoByte(f)),c<h[0]&&(h[0]=c),f<h[1]&&(h[1]=f),d<h[2]&&(h[2]=d),c>h[3]&&(h[3]=c),f>h[4]&&(h[4]=f),d>h[5]&&(h[5]=d);let g=o[p],v=o[p+1],b=o[p+2],T=s[0]*g+s[3]*v+s[6]*b,w=s[1]*g+s[4]*v+s[7]*b,_=s[2]*g+s[5]*v+s[8]*b,S=127/(Math.sqrt(T*T+w*w+_*_)||1);this.N[M]=Math.round(T*S),this.N[M+1]=Math.round(w*S),this.N[M+2]=Math.round(_*S)}if(this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(a?this.U.set(a,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasIdx&&e.I){let p=e.I,m=this.ni;m+p.length>this.icap&&this.growI(m+p.length);for(let x=0;x<p.length;x++)this.I[m+x]=p[x]+u;this.ni+=p.length}if(this.hasOff){let p=Math.hypot(n[0],n[1],n[2]),m=e.O;if(m)for(let x=0;x<e.n*2;x++)this.O[u*2+x]=m[x]*p;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new vt,t=this.n,n=this.bb;if(e.setAttribute("position",new bt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new bt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new bt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new bt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new bt(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new bt(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new bt(this.Cl.slice(0,t*3),3,!0)),this.hasIdx&&e.setIndex(new bt(t>65535?this.I.slice(0,this.ni):new Uint16Array(this.I.subarray(0,this.ni)),1)),e.boundingBox=new gi(new V(n[0],n[1],n[2]),new V(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new vi),e}},Xm=[0,1,2,3].map(i=>{let e=new Ja(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,l)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});dt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var FM=dt.shadowmap_pars_fragment;function U0(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;dt.shadowmap_pars_fragment=FM.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}U0(1);function Qm(i,e){let t=i<e?`#define GRAZE_FADE
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var Qn=4200,Ie={uSkyHor:{value:new fe(.7,.8,.9)},uSkyZen:{value:new fe(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Le},uSunDir:{value:new V(0,1,0)},uSunCol:{value:new fe(1,1,1)},uTuftV:{value:new mt(.167,.333,.164,.165)},uGhShade:{value:new V(.3,.85,1.7)},uTpK:{value:0},uTpD:{value:new fe},uTpS:{value:new fe},uTpM:{value:new fe},uTpL:{value:new fe},uTpFL:{value:new fe},uTpFS:{value:new fe},uBkK:{value:0},uBkS:{value:new fe},uBkM:{value:new fe},uBkL:{value:new fe},uBkS2:{value:new fe},uBkM2:{value:new fe},uBkL2:{value:new fe},uBlShade:{value:new V(7.5,3,2.3)},uTunA:{value:new V(0,-1e4,0)},uTunB:{value:new V(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new V},uCarFwd:{value:new V(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:UM()},uCloudTex:{value:null},uCloudOrg:{value:new Le},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Le(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function eg(i){let e=new ss(new Uint8Array(i),i.length,1,cr);return e.minFilter=e.magFilter=An,e.generateMipmaps=!1,e.needsUpdate=!0,e}var xi=eg([16,16,16,70,200,255,255,255]),El=eg([28,40,70,130,200,240,255,255]);function UM(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ss(e,256,256,Jn);return s.wrapS=s.wrapT=Fs,s.magFilter=kt,s.minFilter=In,s.generateMipmaps=!0,s.colorSpace=ai,s.needsUpdate=!0,s}var Ii=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,ph=1600,D0=256,BM=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/ph).toFixed(8)} + 0.5).r * uCloudSh; }`,OM=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,tg=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/ph).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,ng=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,kM=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,zM=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,mh=new nr;mh.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};mh.customProgramCacheKey=()=>"propdepth";function ig(){let i=new Yt(D0,D0,{format:cr,type:$n,depthBuffer:!1,minFilter:kt,magFilter:kt,generateMipmaps:!1}),e=new ft({uniforms:{uCenter:{value:new Le},uOrigin:Ie.uOrigin,uTime:Ie.uTime,uNoiseTex:Ie.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${ph.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ht(new rn(2,2),e),n=new Us;t.frustumCulled=!1,Ie.uCloudTex.value=i.texture,Ie.uCloudTex.rt=i;let s=ph/D0;return{update(r,o,l,a,u){let h=Math.round((o+a)/s)*s-a,p=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(h,p),Ie.uCloudOrg.value.set(h,p);let m=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(m)}}}function Ss(i,e="",t="",n=!0){i.uniforms.uOrigin=Ie.uOrigin,i.uniforms.uCloudSh=Ie.uCloudSh,i.uniforms.uTime=Ie.uTime,i.uniforms.uNoiseTex=Ie.uNoiseTex,i.uniforms.uCloudTex=Ie.uCloudTex,i.uniforms.uCloudOrg=Ie.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=Ie[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?tg:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Ii}${BM}${kM}${e}`).replace("#include <opaque_fragment>",`${n?ng:OM}${t}${zM}
#include <opaque_fragment>`)}var HM=`
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
`,VM=`
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
#endif`,WM=`
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
}`,sg={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},yi={tex:null,uFieldK:{value:new Le(1/12,1/21)},uFieldC:{value:new V(1,1,1)},uFieldCo:{value:new V(1,1,1)},uFieldSa:{value:new V(1,1,1)},uFieldM:{value:new V(.16,.32,.05)}};function rg(i){let e={};for(let t of i)e[sg[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),yi.tex&&(i.includes("country")||i.includes("coast")||i.includes("sakura"))&&(e.F_PAINT=""),e}var Zm=new Map;function Al(i){let e=[...new Set(i)].sort().join("+"),t=Zm.get(e);return t||(t=og(rg(e.split("+")),e),Zm.set(e,t)),t}function og(i=rg(Object.keys(sg)),e="all"){let t=new on({color:16777215,gradientMap:xi});t.defines=i;let n=i.F_PAINT!==void 0;return t.onBeforeCompile=s=>{s.uniforms.uSkyHor=Ie.uSkyHor,s.uniforms.uSkyZen=Ie.uSkyZen,s.uniforms.uWet=Ie.uWet,s.uniforms.uSakWet=Ie.uSakWet,s.uniforms.uNight=Ie.uNight,s.uniforms.uSunDir=Ie.uSunDir,s.uniforms.uSunCol=Ie.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])s.uniforms[r]=Ie[r];if(n){s.uniforms.uFieldTex={value:yi.tex};for(let r of["uFieldK","uFieldC","uFieldCo","uFieldSa","uFieldM"])s.uniforms[r]=yi[r]}s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),Ss(s,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${HM}`,WM+VM,!1),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v20-"+e+(n?"-fp":""),t}function Km(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),Ss(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function ag(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=Ie[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function GM(i){i.uniforms.uLightsOn=Ie.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function F0(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function lg(i,e=!1){let t=new on({vertexColors:!0,gradientMap:gh(-.15,.3,0)});return e&&(t.defines={TP_LITE:""}),t.onBeforeCompile=n=>{for(let s of["uTpK","uTpD","uTpS","uTpM","uTpL","uTpFL","uTpFS"])n.uniforms[s]=Ie[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
  reflectedLight.directDiffuse = tpDD; reflectedLight.indirectDiffuse = tpID; }`),Ss(n)},t.customProgramCacheKey=()=>e?"tetra-v1-lite":"tetra-v1",t}var XM="#7a6556",qM="#6a5444",$m=i=>{let e=new fe(i);return`vec3(${e.r.toFixed(4)}, ${e.g.toFixed(4)}, ${e.b.toFixed(4)})`};function cg(i=!1){let e=new on({vertexColors:!0,gradientMap:gh(-.35,.42,0)});return i&&(e.defines={BK_LITE:""}),e.onBeforeCompile=t=>{for(let n of["uBkK","uBkS","uBkM","uBkL","uBkS2","uBkM2","uBkL2"])t.uniforms[n]=Ie[n];F0(t),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb = mix(${$m(XM)}, ${$m(qM)}, vColor.r) * vColor.g * bk;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
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
#endif`),Ss(t)},e.customProgramCacheKey=()=>i?"bark-v1-lite":"bark-v1",e}function B0(i){return i.onBeforeCompile=e=>Ss(e),i.customProgramCacheKey=()=>"cs",i}var YM="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",ZM=(i,e,t="")=>`
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
}`;function O0(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=Ie[o];s&&Object.assign(r.uniforms,s.uniforms),Ss(r,YM+(s?s.pars:""),ZM(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var dr=48;function ug(i,e){let t=new on({color:16777215,gradientMap:El}),n=!!yi.tex;return t.onBeforeCompile=s=>{Object.assign(s.uniforms,e,i);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])s.uniforms[r]=Ie[r];n&&(s.uniforms.uFieldC=yi.uFieldC,s.uniforms.uFieldM=yi.uFieldM),s.vertexShader=s.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${tg}
uniform vec4 uG[${dr}], uGM[${dr/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${n?`
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${dr-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  float gsw = mod(gs, ${Qn.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);`:`
  vec2 pid = floor(vec2(mod(gs, ${Qn.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${ng}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Jm(i,e,t=!1){i.uniforms.uPMap={value:e.map},t||(i.uniforms.uPEm={value:e.emissive}),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uPMap;${t?"":" uniform sampler2D uPEm;"}`).replace("#include <map_fragment>",`
bool pgP = vMapUv.x > 1.5;
vec4 sampledDiffuseColor;
if (pgP) sampledDiffuseColor = texture2D(uPMap, vMapUv - vec2(2.0, 0.0));
else sampledDiffuseColor = texture2D(map, vMapUv);
diffuseColor *= sampledDiffuseColor;`),t||(i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`
vec4 emissiveColor;
if (pgP) emissiveColor = texture2D(uPEm, vEmissiveMapUv - vec2(2.0, 0.0));
else emissiveColor = texture2D(emissiveMap, vEmissiveMapUv);
totalEmissiveRadiance *= emissiveColor.rgb;`))}function hg(i,e,t){let n={};n.ground=og(),n.color=Km(new on({vertexColors:!0,gradientMap:xi}),1.6,.1,"color-v3",F0),n.atlas=new on({vertexColors:!0,gradientMap:xi,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),n.atlas.onBeforeCompile=a=>{F0(a),GM(a),Ss(a),Jm(a,t)},n.atlas.customProgramCacheKey=()=>"atlas-v7",n.atlasDepth=new nr,n.atlasDepth.onBeforeCompile=a=>Jm(a,t,!0),n.atlasDepth.customProgramCacheKey=()=>"atlasdepth-v2",n.ptex=t,n.foliage=Km(new on({vertexColors:!0,gradientMap:El}),2.6,.24,"foliage-v2"),n.lamp=new xn({color:15789798}),n.sig=new xn({color:new fe(.15,1.7,1.1)}),n.sodium=new xn({color:new fe(5,2.3,.65)}),n.decal=new on({vertexColors:!0,gradientMap:xi,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),n.decal.onBeforeCompile=a=>Ss(a),n.decal.customProgramCacheKey=()=>"decal-v1",e&&(n.leaf=new on({map:e,vertexColors:!0,gradientMap:El,alphaTest:.42,side:bn}),n.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",dt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),Ss(a),ag(a),a.uniforms.uTuftV=Ie.uTuftV,a.uniforms.uWind=Ie.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},n.leaf.customProgramCacheKey=()=>"leaf-v5"),n.wire=new xn({color:2303020});let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(255,255,255,0.45)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,128,128);let l=new ri(s);return n.pool=new xn({map:l,color:16762746,transparent:!0,opacity:0,blending:os,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n.glowTex=l,n}function gh(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let l=(o+.5)/64*2-1,a=Math.min(1,Math.max(0,(l-i)/(e-i))),u=a*a*(3-2*a);s[o]=Math.round(255*(t+(1-t)*u))}let r=new ss(s,64,1,cr);return r.minFilter=r.magFilter=kt,r.generateMipmaps=!1,r.needsUpdate=!0,r}var KM=gh(-.05,.5,.05),$M=gh(-.5,.45,.12);function jm(i,e){i.uniforms.uTime=Ie.uTime,i.uniforms.uWind=Ie.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var N0=(i,e,t)=>{let n=new fe().setRGB(i/255,e/255,t/255,qt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},JM=`diffuseColor.rgb *= mix(${N0(62,38,34)}, mix(${N0(205,105,150)}, ${N0(255,232,242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;function k0(i,{blossom:e=!1}={}){let t=new on({map:i,vertexColors:!0,color:e?16777215:new fe().setRGB(.68,.85,.46,qt),gradientMap:e?$M:KM,alphaTest:.5,side:xs});t.shadowSide=bn,t.onBeforeCompile=s=>{Ss(s),ag(s),jm(s,!1),s.uniforms.uGhShade=e?Ie.uBlShade:Ie.uGhShade,s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?JM:"diffuseColor.rgb *= gTx.b;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v1":"gleaf-v1";let n=new nr;return n.onBeforeCompile=s=>jm(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var jM=_e("#f2c230"),fg=_e("#26272c");function vh(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=On(s,"rw"),l=n*(o+.8),a=Dt(s),u=a.city+a.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function dg(){let i=new fn,e=B0(new on({vertexColors:!0,gradientMap:xi})),t=new xn({color:new fe(6,.45,.3)}),n=new xn({color:new fe(.22,.03,.03)}),s=[0,1].map(()=>{let r=new fn,o=new fn;r.add(o),o.position.set(-.42,1.02,-.02);let l=new Jt,a=3.6;for(let p=0,m=0;m<a;p++,m+=.45)l.box(-Math.min(m+.45,a),-.065,-.065,-m,.065,.065,p%2?fg:jM);l.box(0,-.09,-.07,.38,.09,.07,fg);let u=new ht(l.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(p=>{let m=new ht(new Ir(.13,18),n);return m.position.set(p,2.75,-.1),m.rotation.y=Math.PI,r.add(m),m});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:a}});return i.visible=!1,{group:i,update(r,o,l,a,u){i.visible=!!r,r&&r.forEach((h,p)=>{let m=s[p];m.root.position.set(h.x-o.x,h.y,h.z-o.z),m.root.rotation.y=h.yaw,m.arm.scale.x=(h.rw+.25)/m.L,m.pivot.rotation.z=-l*(Math.PI/2-.06);let x=Math.floor(u*2.5)%2;m.lamps[0].material=a&&x===0?t:n,m.lamps[1].material=a&&x===1?t:n})}}}function QM(){let t=()=>{let f=document.createElement("canvas");return f.width=1024,f.height=512,f},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let a=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,a);for(let f=0;f<1024;f+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(f,0,2,a);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,a-14,1024,14);let u=[.1,.36,.62,.88].map(f=>f*1024),h=(f,d,g,v)=>{let b=r.createLinearGradient(f,d,f+g*.3,d+v);b.addColorStop(0,"#5d7fae"),b.addColorStop(.6,"#9db7d6"),b.addColorStop(1,"#2f3f55"),r.fillStyle=b,r.fillRect(f,d,g,v),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(f+g*.2,d),r.lineTo(f+g*.38,d),r.lineTo(f+g*.1,d+v),r.lineTo(f-g*.08,d+v),r.fill(),o.fillStyle="#ffeccc",o.fillRect(f,d,g,v)};for(let f=0;f<u.length-1;f++){let d=u[f]+40,g=u[f+1]-40,v=3,b=(g-d)/v;for(let T=0;T<v;T++)r.fillStyle="#6b737c",r.fillRect(d+T*b+2,34,b-4,58),h(d+T*b+6,38,b-12,50)}for(let f of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(f+2,34,28,58),h(f+5,38,22,50);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,22,60,a-36),r.fillStyle="#7b828a",r.fillRect(f-1,22,2,a-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(f-30,22,60,a-36),h(f-24,34,20,46),h(f+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let p=0,m=176,x=256,y=256;r.fillStyle="#d3d7dc",r.fillRect(p,m,x,y),r.fillStyle="#20262e",r.fillRect(p+14,m+44,x-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(p+40,m+44),r.lineTo(p+80,m+44),r.lineTo(p+40,m+140),r.lineTo(p+14,m+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(p+x/2-4,m+44,8,96),r.fillStyle="#111",r.fillRect(p+50,m+12,x-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26),r.fillStyle="#1f9a50",r.fillRect(p,m+150,x,18),r.fillStyle="#e8892b",r.fillRect(p,m+170,x,7);for(let f of[p+40,p+x-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(f,m+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(f+(f<p+x/2?28:-28),m+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(p,m+y-30,x,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",p+x/2,m+220),o.fillStyle="#111",o.fillRect(p,m,x,y),o.fillStyle="#ff9a2a",o.font=`800 18px ${l}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26);for(let f of[p+40,p+x-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(f,m+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let M=f=>{let d=new ri(f);return d.colorSpace=qt,d.anisotropy=4,d},c=(f,d,g,v)=>({u0:f/1024,u1:(f+g)/1024,v0:1-(d+v)/512,v1:1-d/512});return{map:M(n),em:M(s),side:c(0,0,1024,a),sideR:{...c(0,0,1024,a),flip:!0},front:c(p,m,x,y),plain:c(342,202,28,28)}}function pg(){let i=QM(),e=B0(new on({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:xi})),t=new Jt({uv:!0}),n=[1,1,1],s=_e("#9aa1a9"),r=_e("#3b4047"),o=_e("#2a2d33"),l=19.5,a=.6,u=3,h=1.45,p=.95,m=4,x=4,y=.3,M=_e("#33363b"),c={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},f=(_,S,E,R,C,P,A,L=!1)=>t.box(_,S,E,R,C,P,A,c,L?{noBottom:!0}:null),d=(_,S,E,R,C,P)=>{let L=E-C/2,D=E+C/2;for(let O=0;O<12;O++){let z=O/12*Math.PI*2,B=(O+1)/12*Math.PI*2,H=_+Math.cos(z)*R,k=S+Math.sin(z)*R,X=_+Math.cos(B)*R,K=S+Math.sin(B)*R;t.quad([H,k,L],[X,K,L],[X,K,D],[H,k,D],P,i.plain),t.quad([_,S,D],[H,k,D],[X,K,D],[X,K,D],P,i.plain),t.quad([_,S,L],[X,K,L],[H,k,L],[H,k,L],P,i.plain)}},g=u*l+(u-1)*a;for(let _=0;_<u;_++){let S=-g/2+l/2+_*(l+a),E=S-l/2,R=S+l/2;t.quad([E,p,h],[R,p,h],[R,m,h],[E,m,h],n,i.side),t.quad([R,p,-h],[E,p,-h],[E,m,-h],[R,m,-h],n,i.side);let C=_===u-1,P=_===0;t.quad([R,p,h],[R,p,-h],[R,m,-h],[R,m,h],C?n:_e("#c9ced4"),C?i.front:i.plain),t.quad([E,p,-h],[E,p,h],[E,m,h],[E,m,-h],P?n:_e("#c9ced4"),P?i.front:i.plain);for(let A=0;A<x;A++)for(let L of[1,-1]){let D=A/x*Math.PI/2,O=(A+1)/x*Math.PI/2,z=L*h*Math.cos(D),B=m+y*Math.sin(D),H=L*h*Math.cos(O),k=m+y*Math.sin(O);t.quad([E,B,z],[R,B,z],[R,k,H],[E,k,H],s,i.plain);for(let X of[E,R]){let K=[[X,m,0],[X,B,z],[X,k,H]];t.quad(K[0],K[1],K[2],K[2],s,i.plain),t.quad(K[0],K[2],K[1],K[1],s,i.plain)}}for(let A of[1,-1])f(E,m-.02,A*h-.04,R,m+.05,A*h+.04,r);for(let A of[S-5.5,S+5.5])f(A-1.3,m+.2,-.8,A+1.3,m+.62,.8,_e("#c4c9cf"),!0);f(E+.3,.82,-h+.1,R-.3,p,h-.1,o);for(let[A,L,D,O]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])f(S+A-L/2,.82-D,-1.15+O*.2,S+A+L/2,.82,1.15+O*.2,O>0?o:r);for(let A of[S-7,S+7]){for(let L of[1,-1]){f(A-1.35,.32,L*.86,A+1.35,.56,L*1.02,r);for(let D of[-1.05,1.05])f(A+D-.17,.3,L*.84,A+D+.17,.58,L*1.06,o)}f(A-.35,.5,-1,A+.35,.8,1,r);for(let L of[-1.05,1.05])for(let D of[1,-1])d(A+L,.43,D*.6,.43,.13,M)}if(_<u-1&&f(R,p+.15,-.95,R+a,m-.1,.95,_e("#3a3e44")),_===0){let A=S-3,L=m+.7;t.box(A-.6,m+.26,-.6,A+.6,m+.42,.6,r),t.rod([A-.5,m+.42,0],[A,L+.9,0],.03,.03,4,r),t.rod([A+.5,m+.42,0],[A,L+.9,0],.03,.03,4,r),t.rod([A,L+.9,-.85],[A,L+.9,.85],.03,.03,4,r)}}let v=new ht(t.build(),e);v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1;let b=new fn;b.add(v),b.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:g},w={};return{group:b,st:T,start(_,S,E=16){Object.assign(T,{active:!0,sx:_,dir:S,speed:E,u:-S*290,ds:S>0?-2:2,cleared:!1}),b.visible=!0},update(_,S,E,R,C){if(!T.active)return;T.u+=T.dir*T.speed*_;let P=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?P>C+1:P<-C-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,b.visible=!1;return}S.at(T.sx,w),b.position.set(w.x+w.fx*T.ds+w.rx*T.u-E.x,w.y+.34,w.z+w.fz*T.ds+w.rz*T.u-E.z),b.rotation.y=w.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+R*1.1}}}var eS='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',ks=2048,tS=4096;function yh(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var xg=yh(256,256);{let i=xg.getContext("2d"),e=i.createImageData(256,256),t=Tt(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var _h=class{constructor(e=tS,t=0,n={}){let s=this.H=e;this.cA=yh(ks,s),this.cE=yh(ks/2,s/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,ks/2,s/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,ks,s),this.x=0,this.y=0,this.rowH=0,this.cells=n,this.uOff=t,this.grain=this.a.createPattern(xg,"repeat")}add(e,t,n,s){if(this.x+t+4>ks&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.H)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let h of[this.a,this.e])h.save(),h===this.e&&h.scale(.5,.5),h.translate(o.x,o.y),h.beginPath(),h.rect(0,0,t,n),h.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5,a=this.H,u=this.uOff;return this.cells[e]={u0:u+(o.x+l)/ks,u1:u+(o.x+t-l)/ks,v0:1-(o.y+n-l)/a,v1:1-(o.y+l)/a,w:t,h:n,px:o.x,py:o.y},this.cells[e]}paintCell(e,t,n,s,r,o,l){let a=this.cells[e];!a||a.u0>1.5!=this.uOff>1.5||(this.a.drawImage(t,n,s,r,o,a.px,a.py,a.w,a.h),l>=0?this.e.drawImage(t,n,l,r,o,a.px/2,a.py/2,a.w/2,a.h/2):(this.e.fillStyle="#000",this.e.fillRect(a.px/2,a.py/2,a.w/2,a.h/2)))}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new ri(n);return s.colorSpace=qt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=In,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function ln(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Sn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,a])=>o.addColorStop(l,a)),i.fillStyle=o,i.fillRect(e,t,n,s)}function qo(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Sn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}ln(i,e,t,n,.13)}function Bs(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function q(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Yo(i,e,t,n,s,r,o="#d9dde2",l="rgba(40,45,60,0.55)"){q(i,e-r,t-r,n+2*r,s+2*r,o),q(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function Os(i,e,t,n,s,r,o=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),a=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";l.addColorStop(0,a),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function mg(i,e,t,n,s,r="#efe6d2"){q(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Sn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function bh(i,e,t=800){i.font=`${t} ${e}px ${eS}`}function Ct(i,e,t,n,s,r,o,l=800,a=null){bh(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,bh(i,u,l);i.textAlign="center",i.textBaseline="middle",a&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=a,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function Wr(i,e,t,n,s,r,o,l=800,a=null){let u=[...e],h=u.length,p=Math.min(r*1.05,(s-n)/h),m=Math.min(r,p*.95);bh(i,m,l),i.textAlign="center",i.textBaseline="middle",u.forEach((x,y)=>{let M=n+(s-n-p*h)/2+p*(y+.5);a&&(i.lineWidth=Math.max(2,m*.12),i.strokeStyle=a,i.strokeText(x,t,M)),i.fillStyle=o,i.fillText(x,t,M)})}function Vr(i,e,t,n,s,r,o,l=!0){if(q(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Sn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let a=e+n*.2*o();a<e+n-4;a+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-a),h=s*(.12+o()*.25);i.fillRect(a,t+s-h,u,h)}}i.restore()}function nS(i,e,t,n,s,r,o){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",q(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,q(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Sn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var gg=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],xh=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],vg=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],iS=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function yg(){let i=new _h,e=Tt(2024),t=240,n=(c,f,d,g,v,b,T=!1)=>{qo(c,i,d,g,"#ece8e0",0);let w=Tt(b*31+(v?7:0)+5);if(b===0){let _=d*.14,S=g*.22,E=d*.72,R=g*.5;Yo(c,_,S,E,R,5),Os(c,_,S,E/2,R,w),Os(c,_+E/2,S,E/2,R,w);let C=w()<.8?E*(.18+w()*.25):0;C&&mg(c,_+2,S+2,C,R-4,w()<.5?"#efe6d2":"#d9e4ea"),q(c,_+E/2-2,S,4,R,"#cfd4da"),q(c,_-8,S+R+5,E+16,6,"#d8d8d4"),Bs(c,_-4,S+R+11,8,60),Bs(c,_+E-4,S+R+11,8,60),v&&(Vr(f,_,S,E,R,T?"#e6eeff":"#ffcf8f",w),C&&q(f,_+2,S+2,C,R-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),q(f,_+E/2-2,S,4,R,"#000"))}else if(b===1){for(let _ of[.12,.56]){let S=d*_,E=g*.28,R=d*.3,C=g*.36;Yo(c,S,E,R,C,4),Os(c,S,E,R,C,w,1),c.fillStyle="rgba(255,255,255,0.35)",c.fillRect(S,E,R,C*.45),Bs(c,S,E+C+6,R,40,.1),v&&w()<.8&&Vr(f,S,E,R,C,w()<.5?"#ffd9a0":"#e8f0ff",w)}c.fillStyle="#c9c9c4",c.beginPath(),c.arc(d*.88,g*.2,9,0,7),c.fill()}else if(b===2){let _=d*.1,S=g*.12,E=d*.8,R=g*.84;Yo(c,_,S,E,R,4),Os(c,_,S,E/2,R,w),Os(c,_+E/2,S,E/2,R,w);let C=E*(.2+w()*.3);mg(c,_+2,S+2,C,R-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),q(c,_+E/2-2,S,4,R,"#cfd4da"),v&&(Vr(f,_,S,E,R,T?"#e6eeff":"#ffcb85",w),q(f,_+2,S+2,C,R-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),q(f,_+E/2-2,S,4,R,"#000"))}else if(b===3){qo(c,i,d,g,"#dfe3e6",0);let _=g*.25,S=g*.55;Os(c,0,_,d,S,w,1);for(let E=0;E<=d;E+=d/4)q(c,E-2,_,4,S,"#8d98a6");if(q(c,0,_-4,d,4,"#8d98a6"),q(c,0,_+S,d,5,"#7d8796"),v)for(let E=0;E<4;E++)w()<.7&&Vr(f,E*d/4+2,_,d/4-4,S,w()<.6?"#f2f6ff":"#ffe2b0",w)}else if(b===4){c.fillStyle="#6b4a35",c.fillRect(0,0,d,g);for(let C=0;C<g;C+=12)q(c,0,C,d,2,"rgba(30,18,10,0.35)"),q(c,0,C+2,d,1,"rgba(255,220,180,0.06)");ln(c,i,d,g,.15);let _=d*.18,S=g*.25,E=d*.64,R=g*.45;q(c,_-6,S-6,E+12,R+12,"#4a3020"),q(c,_,S,E,R,"#efe4c8"),c.fillStyle="#5a3a26";for(let C=1;C<6;C++)c.fillRect(_+C*E/6-1.5,S,3,R);for(let C=1;C<3;C++)c.fillRect(_,S+C*R/3-1.5,E,3);if(v){Vr(f,_,S,E,R,"#ffc070",w,!1),f.fillStyle="#000";for(let C=1;C<6;C++)f.fillRect(_+C*E/6-1.5,S,3,R);for(let C=1;C<3;C++)f.fillRect(_,S+C*R/3-1.5,E,3)}}else if(b===5){q(c,d*.08,0,7,g,"#bdbdb6"),q(c,d*.08+5,0,2,g,"rgba(0,0,0,0.2)");let _=d*.55,S=g*.3,E=d*.22,R=g*.24;Yo(c,_,S,E,R,3),q(c,_,S,E,R,"#d6dfe4"),c.fillStyle="rgba(255,255,255,0.4)",c.fillRect(_,S,E,R/2),Bs(c,_,S+R+4,E,50,.12),q(c,d*.22,g*.55,26,34,"#cfcfca"),q(c,d*.22+4,g*.55+6,18,12,"#9aa2a8"),v&&Vr(f,_,S,E,R,T?"#eef2ff":"#fff0d8",w,!1)}else if(b===6){let _=d*.4,S=g*.35,E=d*.2,R=g*.28;Yo(c,_,S,E,R,3),Os(c,_,S,E,R,w,1),Bs(c,_,S+R+4,E,70,.14),v&&Vr(f,_,S,E,R,T?"#e8efff":"#ffd9a0",w)}};for(let c=0;c<7;c++)i.add("win"+c,t,t,(f,d,g,v)=>n(f,d,g,v,!1,c)),i.add("win"+c+"L",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c));for(let c of[0,2,5,6])i.add("win"+c+"C",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c,!0));i.add("plain",t,t,(c,f,d,g)=>{qo(c,i,d,g,"#ece8e0"),Bs(c,d*.3,0,12,g*.6,.06)}),i.add("concrete",t,t,(c,f,d,g)=>{qo(c,i,d,g,"#d9d7d0",60);for(let v=0;v<6;v++)Bs(c,v*41%d,0,10,g*.5,.07)});let s=288,r=(c,f,d,g,v,b,T)=>{let w=(S,E,R,C,P,A=0)=>{c.fillStyle=P,c.beginPath(),c.ellipse(S,E,R,C,A,0,7),c.fill()},_=S=>S[Math.floor(b()*S.length)];if(T==="bakery"){q(c,f,d,g,v,"#d9b98a"),Sn(c,f,d,g,v,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let S=d+v*.28;S<d+v*.72;S+=v*.2){q(c,f,S,g,5,"#8a5a32");for(let E=f+8;E<f+g-8;E+=15+b()*10){let R=7+b()*6,C=4+b()*3;w(E,S-C,R,C,_(["#c98a3e","#b4732e","#d9a256","#a4632a"])),w(E-R*.2,S-C*1.4,R*.5,C*.35,"rgba(255,230,180,0.5)")}}q(c,f+4,d+v*.8,g-8,v*.2,"#efe7d8"),q(c,f+4,d+v*.8,g-8,3,"#9a9a96");for(let S=f+14;S<f+g-10;S+=18)w(S,d+v*.9,6,4,_(["#e8b35a","#c06a3a","#f2d29a"]));q(c,f+g-64,d+10,52,22,"#7a3e1e"),Ct(c,"\u713C\u304D\u305F\u3066",f+g-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){q(c,f,d,g,v,"#6f5a46");for(let S=d+6;S<d+v*.72;S+=v*.17){q(c,f,S+v*.15,g,4,"#4a3828");for(let E=f+3;E<f+g-4;){let R=3+b()*4,C=v*(.1+b()*.045);q(c,E,S+v*.15-C,R,C,_(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),E+=R+(b()<.1?4:.6)}}q(c,f+4,d+v*.76,g-8,v*.24,"#8a7560");for(let S=f+8;S<f+g-22;S+=24)q(c,S,d+v*.79,20,28,_(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),q(c,S+3,d+v*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){q(c,f,d,g,v,"#e8e2d2"),Sn(c,f,d,g,v,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let S=0;S<7;S++){let E=f+8+b()*(g-16),R=v*(.15+b()*.25);for(let C=0;C<R;C+=3.5)w(E+Math.sin(C*.25+S)*4+(b()-.5)*6,d+4+C,3.4,1.8,_(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),b()*3)}for(let S=0;S<3;S++){let E=d+v*(.5+S*.17);q(c,f,E+14,g,4,"#9a8a76");for(let R=f+10+S*6;R<f+g-8;R+=19){let C=_(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let P=0;P<6;P++){c.strokeStyle="#4a7a3a",c.lineWidth=1.2,c.beginPath();let A=R+(b()-.5)*14;c.moveTo(R,E+10),c.lineTo(A,E-6-b()*8),c.stroke(),w(A,E-8-b()*8,3.2,3,C)}q(c,R-6,E+4,12,11,_(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){q(c,f,d,g,v,"#efece6"),Sn(c,f,d,g,v,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),q(c,f+6,d+v*.18,g-60,3,"#7a7a7a");for(let E=f+12;E<f+g-66;E+=13+b()*5){c.fillStyle=_(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let R=d+v*.18+3,C=v*(.3+b()*.2);c.beginPath(),c.moveTo(E-5,R),c.lineTo(E+5,R),c.lineTo(E+8,R+C),c.lineTo(E-8,R+C),c.closePath(),c.fill()}let S=f+g-32;w(S,d+v*.16,7,8,"#d8cfc4"),c.fillStyle=_(["#c84a5a","#4a6a9a","#e8d8b8"]),c.beginPath(),c.moveTo(S-14,d+v*.24),c.lineTo(S+14,d+v*.24),c.lineTo(S+18,d+v*.66),c.lineTo(S-18,d+v*.66),c.closePath(),c.fill(),q(c,S-2,d+v*.66,4,v*.24,"#8a8a8a"),q(c,f+8,d+v*.74,g*.55,6,"#8a6a4a");for(let E=f+12;E<f+g*.55;E+=14)q(c,E,d+v*.74-8,11,8,_(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let S=7;for(let E=d+v*.25;E<d+v;E+=v*.22)for(let R=f+3;R<f+g-6;R+=6+b()*8)e(),S=Math.imul(S,31)+Math.floor(b()*997+b()*61+b()*7)|0;T==="cafe"?h(c,f,d,g,v,Tt(S>>>0)):u(c,f,d,g,v,Tt(S>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],l=(c,f,d,g,v,b,T="bbccutp")=>{let w=f+1+b()*3;for(;w<d-4;){let _=T[Math.floor(b()*T.length)],S=o[Math.floor(b()*o.length)],E=b()<.5?"#f8f6f0":o[Math.floor(b()*o.length)],R={b:8+b()*6,c:6+b()*2,u:9+b()*2,t:5+b()*2,p:12+b()*5}[_],C=Math.min(v,{b:14+b()*12,c:11+b()*3,u:10+b()*3,t:18+b()*9,p:14+b()*8}[_]),P=2+Math.floor(b()*5);for(let A=0;A<P&&w+R<d-1;A++,w+=R+.6){let L=g-C;_==="t"?(q(c,w,L+C*.3,R,C*.7,S),q(c,w+R*.3,L+C*.1,R*.4,C*.22,S),q(c,w+R*.28,L,R*.44,C*.11,E==="#f8f6f0"?"#e8e8e4":"#d83a2a"),q(c,w,L+C*.5,R,C*.22,E)):_==="c"?(q(c,w,L,R,C,S),q(c,w,L,R,1.5,"#d8dce0"),q(c,w,L+C*.35,R,C*.3,E)):_==="u"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,L+2),c.lineTo(w+R,L+2),c.lineTo(w+R-1.2,g),c.lineTo(w+1.2,g),c.fill(),q(c,w-.4,L,R+.8,2.2,"#f2efe6"),q(c,w+1,L+C*.45,R-2,C*.25,E)):_==="p"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,g),c.lineTo(w,L+3),c.quadraticCurveTo(w+R/2,L-1.5,w+R,L+3),c.lineTo(w+R,g),c.fill(),q(c,w+1.5,L+C*.35,R-3,C*.35,E),q(c,w,L+2,R,1,"rgba(0,0,0,0.18)")):(q(c,w,L,R,C,S),q(c,w+1.5,L+C*.3,R-3,C*.4,E)),q(c,w,L+1,1,C-1,"rgba(255,255,255,0.28)"),q(c,w+R-1.3,L+1,1.3,C-1,"rgba(0,0,0,0.22)")}w+=1.5+b()*3}},a=(c,f,d,g,v)=>{Sn(c,f,g+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),q(c,f,g,d,4,"#d3d6da"),q(c,f,g+3.2,d,.8,"rgba(40,40,50,0.45)");for(let b=f+4+v()*10;b<f+d-6;b+=14+v()*16)q(c,b,g+.6,5,2.6,v()<.25?"#f2d23a":v()<.2?"#e84a3a":"#ffffff")},u=(c,f,d,g,v,b,T)=>{q(c,f,d,g,v,T?"#f3f1ea":"#ece5d8"),q(c,f,d,g,v*.13,T?"#f6f6f2":"#efebe2");for(let E of[.035,.085])q(c,f,d+v*E,g,2.4,"#ffffff"),Sn(c,f,d+v*E+2.4,g,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Sn(c,f,d+v*.13,g,v*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let E=0,R=f+18+b()*30;E<2&&R<f+g-40;E++,R+=90+b()*40)q(c,R+13,d+v*.13,1,6,"#888"),q(c,R,d+v*.13+6,28,9,o[Math.floor(b()*9)]),q(c,R+4,d+v*.13+9.5,20,2,"rgba(255,255,255,0.8)");let _=d+v*.25,S=v*.165;q(c,f,_-4,g,4,"#c9ccd0");for(let E=0;E<4;E++){let R=_+S*(E+1);Sn(c,f,R-S,g,S,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),l(c,f,f+g,R,S-6,b),a(c,f,g,R,b)}q(c,f,_+S*4+4,g,d+v-_-S*4-4,"#5c6068"),q(c,f,_+S*4+4,g,1.5,"#8a8e96");for(let E=f+2+b()*20;E<f+g;E+=70+b()*12)q(c,E,_-4,3,S*4+8,"#b4b8be"),q(c,E+2.2,_-4,.8,S*4+8,"rgba(0,0,0,0.3)");if(T){let E=d+v*.7;q(c,f,E+26,g,d+v-E-26,"#7a7e86"),q(c,f,E+26,g,2,"#a8acb2");for(let R=f+2;R<f+g-14;R+=15.5){let C=o[Math.floor(b()*o.length)],P=b()*2;q(c,R,E+P,14,26-P,C),q(c,R,E+P,14,5,b()<.6?"#ffffff":"#e8343a"),q(c,R+2,E+P+8,10,10,b()<.5?"#f2c8a8":o[Math.floor(b()*o.length)]),q(c,R+13,E+P,1,26-P,"rgba(0,0,0,0.25)")}}},h=(c,f,d,g,v,b)=>{q(c,f,d,g,v,"#b88a5e"),Sn(c,f,d,g,v,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let w=f;w<f+g;w+=9)q(c,w,d+v*.55,1,v*.45,"rgba(60,35,20,0.25)");let T=d+v*.3;for(let w=0;w<2;w++){let _=T+w*22;q(c,f+8,_,g*.55,3,"#6a4428"),l(c,f+10,f+g*.55+6,_,14,b,"ctu")}q(c,f+g*.64,d+v*.22,g*.28,v*.26,"#2e3a32"),q(c,f+g*.64,d+v*.22,g*.28,2,"#6a4428");for(let w=0;w<5;w++)q(c,f+g*.67,d+v*(.27+w*.04),g*(.12+b()*.1),1.6,"rgba(240,240,230,0.75)");q(c,f+4,d+v*.56,g-8,6,"#5a3820"),q(c,f+4,d+v*.56+6,g-8,v*.08,"#7a5232"),q(c,f+g*.3,d+v*.47,18,v*.09,"#c8ccd0"),q(c,f+g*.3+3,d+v*.47+3,12,5,"#3a3a40");for(let w=f+30+b()*20;w<f+g-20;w+=70+b()*20)q(c,w,d,1,v*.14,"#3a2a1e"),c.fillStyle="#2f3a36",c.beginPath(),c.moveTo(w-9,d+v*.2),c.quadraticCurveTo(w+.5,d+v*.12,w+10,d+v*.2),c.fill(),c.fillStyle="rgba(255,214,150,0.9)",c.beginPath(),c.ellipse(w+.5,d+v*.2,7,2,0,0,7),c.fill();for(let w=f+26+b()*16;w<f+g-26;w+=78+b()*20){q(c,w-16,d+v*.74,32,4,"#4a2e1c"),q(c,w-1.5,d+v*.74+4,3,v*.2,"#2e2420"),q(c,w-8,d+v*.94,16,2,"#2e2420");for(let _ of[-24,24])q(c,w+_-6,d+v*.8,12,3,"#3a2618"),q(c,w+_+(_<0?-6:4),d+v*.66,2,v*.17,"#3a2618"),q(c,w+_-5,d+v*.83,1.6,v*.13,"#3a2618"),q(c,w+_+3.4,d+v*.83,1.6,v*.13,"#3a2618");c.fillStyle="#f4f0e8",c.beginPath(),c.ellipse(w-6,d+v*.74-1.5,3,1.5,0,0,7),c.fill()}},p=(c,f,d,g,v,b,T="")=>{let w=Tt(b);if(qo(c,i,d,g,"#e6e2da"),v==="glass"||v==="door"||v==="konbini"||v==="cafe"){let S=g*.22,E=d-12,R=g*.78-4;q(c,6,S,E,R,v==="konbini"?"#f6f4ea":v==="cafe"?"#7a5a40":"#8a7a68"),r(c,6,S,E,R,w,T||v),v==="konbini"&&q(c,6,S+4,E,5,"#ffffff"),v==="door"&&(q(c,d/2-30,S+18,60,24,"#fff"),Ct(c,"\u55B6\u696D\u4E2D",d/2,S+30,54,18,"#c82828")),v==="glass"&&!T&&w()<.7&&(q(c,16,S+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Ct(c,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,S+44,40,16,"#c02020")),nS(c,f,6,S,E,R,v==="konbini"?"#e4eef8":v==="cafe"?"#f0a868":"#f2d2a6"),c.save(),c.globalAlpha=.35,Os(c,6,S,E,R,w),c.restore(),q(c,6,S,E,4,"#4a4e57"),q(f,6,S,E,4,"#000"),v==="door"&&(q(c,d/2-2,S,4,R,"#4a4e57"),q(f,d/2-2,S,4,R,"#000"),q(c,d/2-14,S+R*.45,3,40,"#c0c4c8"),q(c,d/2+11,S+R*.45,3,40,"#c0c4c8")),v==="cafe"&&(q(c,d*.62,g-70,46,62,"#2c3a30"),q(f,d*.62,g-70,46,62,"#000"),Ct(c,"\u30E9\u30F3\u30C1",d*.62+23,g-50,40,13,"#fff",700))}else if(v==="shutter"){let S=g*.2,E=d-12,R=g*.8;q(c,6,S,E,R,"#b8bcc0");for(let C=S;C<S+R;C+=7)q(c,6,C,E,2,"rgba(60,64,72,0.35)"),q(c,6,C+2,E,1,"rgba(255,255,255,0.35)");q(c,6,S,E,10,"#8f949a"),ln(c,i,d,g,.12),w()<.5&&(q(c,d/2-40,S+R*.35,80,26,"#fff"),Ct(c,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,S+R*.35+13,74,16,"#333",700))}else if(v==="noren"){q(c,0,0,d,g,"#5b3c28");for(let P=0;P<d;P+=10)q(c,P,g*.2,3,g*.8,"rgba(25,15,8,0.6)");ln(c,i,d,g,.15);let _=d*.12,S=g*.24,E=d*.76,R=g*.34,C=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);q(c,_,S,E,R,C);for(let P=1;P<3;P++)q(c,_+E*P/3-1,S+R*.25,2,R*.75,"rgba(255,255,255,0.25)");Ct(c,e.pick(iS),d/2,S+R*.55,E*.9,46,"#f5f0e6",800),q(c,_,S,E,6,"#3a2a1c"),f.fillStyle="#ffae5c",f.fillRect(_,S+R,E,g-S-R),f.fillStyle="rgba(255,170,90,0.6)",f.fillRect(_,S,E,R),c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d*.9,g*.36,13,19,0,0,7),c.fill(),Ct(c,"\u9152",d*.9,g*.36,16,14,"#fff"),f.fillStyle="#ff6a3a",f.beginPath(),f.ellipse(d*.9,g*.36,13,19,0,0,7),f.fill()}else if(v==="house"){let _=d*.18,S=g*.3,E=d*.34,R=g*.7;q(c,_-6,S-6,E+12,R+6,"#9a9a96"),q(c,_,S,E,R,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),q(c,_+E-14,S+R*.5,4,22,"#d8d0c0"),q(c,_+6,S+10,E-12,R*.25,"rgba(255,255,255,0.18)"),q(c,d*.62,g*.48,30,22,"#cfcfca"),q(c,d*.62+6,g*.48+5,18,4,"#555");let C=d*.6,P=g*.22,A=d*.3,L=g*.2;Yo(c,C,P,A,L,3),Os(c,C,P,A,L,w,1);for(let D=0;D<3;D++)c.fillStyle="#7b5a43",c.fillRect(d*.6+D*22,g-26,16,18),c.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),c.beginPath(),c.arc(d*.6+D*22+8,g-32,11,0,7),c.fill();f.fillStyle="#ffd08a",f.beginPath(),f.arc(_+E+14,S+8,6,0,7),f.fill(),w()<.6&&(f.fillStyle="#ffcf8f",f.fillRect(C,P,A,L))}else if(v==="garage"){let S=g*.25,E=d-16,R=g*.75;q(c,8,S,E,R,"#efefec");for(let C=S;C<S+R;C+=9)q(c,8,C,E,1.5,"rgba(80,80,90,0.25)");ln(c,i,d,g,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((c,f)=>{i.add("shop_"+c,t,s,(d,g,v,b)=>p(d,g,v,b,c,100+f)),(c==="glass"||c==="noren"||c==="house")&&i.add("shop_"+c+"2",t,s,(d,g,v,b)=>p(d,g,v,b,c,200+f)),c==="glass"&&["bakery","books","florist","clothes"].forEach((d,g)=>i.add("shop_glass"+(g+3),t,s,(v,b,T,w)=>p(v,b,T,w,"glass",300+g,d)))});for(let c=0;c<14;c++)i.add("hs"+c,512,76,(f,d,g,v)=>{let[b,T]=xh[c%xh.length],w=gg[c*7%gg.length];q(f,0,0,g,v,b),q(f,0,0,g,5,"rgba(255,255,255,0.35)"),q(f,0,v-6,g,6,"rgba(0,0,0,0.18)"),c%3===0&&(q(f,12,12,v-24,v-24,T),Ct(f,w[0],12+(v-24)/2,v/2,v-30,34,b)),Ct(f,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T,900),ln(f,i,g,v,.08),d.fillStyle=b==="#fff"||b==="#f5efe0"?"#d9d6cc":b,d.fillRect(0,0,g,v),d.globalAlpha=.9,Ct(d,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[c,f,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+c,512,76,(g,v,b,T)=>{q(g,0,0,b,T,f),q(g,0,0,b,5,"rgba(255,255,255,0.35)"),q(g,0,T-6,b,6,"rgba(0,0,0,0.18)"),Ct(g,c,b/2,T/2+2,b*.7,50,d,900),ln(g,i,b,T,.08),v.fillStyle=f,v.fillRect(0,0,b,T),v.globalAlpha=.9,Ct(v,c,b/2,T/2+2,b*.7,50,d,900),v.globalAlpha=1});let m=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],x=(c,f,d,g,v,b)=>{c.beginPath(),c.moveTo(f+b,d),c.arcTo(f+g,d,f+g,d+v,b),c.arcTo(f+g,d+v,f,d+v,b),c.arcTo(f,d+v,f,d,b),c.arcTo(f,d,f+g,d,b),c.closePath()};for(let c=0;c<10;c++)i.add("vs"+c,72,288,(f,d,g,v)=>{let b=vg[c%vg.length],T=m[(c*5+2)%m.length],w=c%10===3||c%10===6||c%10===8,[_,S]=xh[(c*3+1)%xh.length],E=w?_==="#fff"||_==="#f5efe0"?"#2b2b33":_:"#fbf7ef",R=w?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][c%4];q(f,0,0,g,v,"#2a2b30"),x(f,3,3,g-6,v-6,8),f.fillStyle=E,f.fill(),Sn(f,3,3,g-6,v-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),f.save(),x(f,8,8,g-16,v-16,6),f.strokeStyle=T,f.globalAlpha=.55,f.lineWidth=7,f.stroke(),f.globalAlpha=1,f.strokeStyle="#fff6fb",f.lineWidth=2.2,f.stroke(),f.restore(),Wr(f,b,g/2,18,v-18,50,R,900),ln(f,i,g,v,.06),q(d,0,0,g,v,"#000"),x(d,3,3,g-6,v-6,8),d.fillStyle=w?"#3a3a3e":"#4a4844",d.fill(),d.save(),x(d,8,8,g-16,v-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),Wr(d,b,g/2,18,v-18,50,w?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([c,f,d],g)=>i.add("bb"+g,512,240,(v,b,T,w)=>{q(v,0,0,T,w,"#fbfaf5"),q(v,0,0,T,w*.62,d),Ct(v,c,T/2,w*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Ct(v,f,T/2,w*.8,T*.85,52,"#333",800),ln(v,i,T,w,.08),q(b,0,0,T,w,"#555"),b.globalAlpha=.85,q(b,0,0,T,w*.62,d),Ct(b,c,T/2,w*.32,T*.9,96,"#fff",900),b.globalAlpha=1})),i.add("konbini_band",480,72,(c,f,d,g)=>{q(c,0,0,d,g,"#fbfbf7"),q(c,0,g*.62,d,g*.14,"#2a9a4a"),q(c,0,g*.76,d,g*.12,"#f08a24"),q(c,0,g*.88,d,g*.12,"#2f6fd8"),Ct(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900),f.fillStyle="#f3f6f0",f.fillRect(0,0,d,g),Ct(f,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900)});for(let c=0;c<3;c++)i.add("vend"+c,128,234,(f,d,g,v)=>{let b=["#d8352a","#2f6fd8","#f4f4f0"][c];q(f,0,0,g,v,b),q(f,8,10,g-16,v*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let w=0;w<4;w++)for(let _=0;_<6;_++){let S=14+_*17,E=18+w*30;f.fillStyle=T[(w*6+_+c)%T.length],f.fillRect(S,E,11,20),f.fillStyle="rgba(255,255,255,0.5)",f.fillRect(S+2,E+2,3,14),f.fillStyle="#2a2a2a",f.fillRect(S,E+23,11,3)}q(f,10,v*.62,g-20,22,"#222"),q(f,g-34,v*.66,14,22,"#bbb"),q(f,14,v*.82,g-28,22,"#1b1b1b"),Ct(f,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][c],g/2,v*.62+11,g-28,14,"#fff",700),ln(f,i,g,v,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,g-16,v*.55);for(let w=0;w<4;w++)for(let _=0;_<6;_++)d.fillStyle=T[(w*6+_+c)%T.length],d.fillRect(14+_*17,18+w*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,v*.62,g-20,22)});i.add("ac",128,88,(c,f,d,g)=>{q(c,0,0,d,g,"#e9e9e4"),Sn(c,0,0,d,g,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),c.fillStyle="#9a9c9e",c.beginPath(),c.arc(d*.4,g*.5,g*.36,0,7),c.fill(),c.strokeStyle="#d6d6d2",c.lineWidth=2;for(let v=6;v<g*.36;v+=6)c.beginPath(),c.arc(d*.4,g*.5,v,0,7),c.stroke();for(let v=12;v<g-10;v+=6)q(c,d*.78,v,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(c,f,d,g)=>{q(c,0,0,d,g,"#f2cf3a"),c.strokeStyle="#2f5a2f",c.lineWidth=3,c.strokeRect(3,3,d-6,g-6),Ct(c,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),Ct(c,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.moveTo(2,2),c.lineTo(d-2,2),c.lineTo(d/2,g-2),c.fill(),c.fillStyle="#d8231c",c.beginPath(),c.moveTo(10,7),c.lineTo(d-10,7),c.lineTo(d/2,g-12),c.fill(),Ct(c,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.fillStyle="#1e5bb8",c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.fill(),c.fillStyle="#fff",c.beginPath(),c.moveTo(d/2,22),c.lineTo(d/2+22,50),c.lineTo(d/2+8,50),c.lineTo(d/2+8,88),c.lineTo(d/2-8,88),c.lineTo(d/2-8,50),c.lineTo(d/2-22,50),c.fill()}),i.add("sign_speed",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=12,c.beginPath(),c.arc(d/2,g/2,d/2-9,0,7),c.stroke(),Ct(c,"30",d/2,g/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(c,f,d,g)=>{q(c,0,0,d,g,"#1d4f9a"),c.strokeStyle="#fff",c.lineWidth=2,c.strokeRect(3,3,d-6,g-6),Wr(c,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,g-10,24,"#fff",700)});for(let c=0;c<4;c++)i.add("poster"+c,64,90,(f,d,g,v)=>{let b=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][c];q(f,0,0,g,v,b),q(f,4,4,g-8,v*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][c]),Ct(f,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][c],g/2,v*.25,g-12,18,"#fff",900);for(let T=0;T<4;T++)q(f,8,v*.58+T*8,g-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let c=0;c<3;c++)i.add("bal"+c,t,88,(f,d,g,v)=>{let b=["#e9e3d6","#dfe6ea","#efe2dc"][c];if(qo(f,i,g,v,b),c===1)for(let T=10;T<g-6;T+=g/6)q(f,T,10,g/6-8,v-20,"rgba(220,235,245,0.9)"),f.fillStyle="rgba(255,255,255,0.45)",f.fillRect(T,10,g/6-8,(v-20)*.4);else{q(f,0,0,g,7,"rgba(255,255,255,0.4)");for(let T=g/3;T<g;T+=g/3)q(f,T-1,0,2,v,"rgba(0,0,0,0.08)")}q(f,0,v-6,g,6,"rgba(0,0,0,0.12)"),Bs(f,g*.3,v-6,10,10,.2)});i.add("kawara",272,256,(c,f,d,g)=>{q(c,0,0,d,g,"#58617a");for(let v=0;v<g;v+=16)Sn(c,0,v,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let v=-4;v<d;v+=20)q(c,v,0,2,g,"rgba(0,0,0,0.18)");ln(c,i,d,g,.12)}),i.add("wood",256,256,(c,f,d,g)=>{q(c,0,0,d,g,"#6d4c37");for(let v=0;v<g;v+=14)q(c,0,v,d,2,"rgba(25,15,8,0.4)"),q(c,0,v+2,d,1,"rgba(255,220,180,0.07)");ln(c,i,d,g,.16)}),i.add("block",256,128,(c,f,d,g)=>{q(c,0,0,d,g,"#c9c7bf");for(let v=0;v<g;v+=32)for(let b=v/32%2?-32:0;b<d;b+=64)c.strokeStyle="rgba(80,80,80,0.35)",c.lineWidth=2,c.strokeRect(b+1,v+1,62,30);for(let v=0;v<d;v+=64)c.fillStyle="rgba(70,70,70,0.25)",c.fillRect(v+20,40,24,16);ln(c,i,d,g,.15),Bs(c,0,0,d,40,.1)}),i.add("lantern",64,96,(c,f,d,g)=>{c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),c.fill();for(let v=16;v<g-12;v+=7)q(c,4,v,d-8,1.5,"rgba(0,0,0,0.2)");q(c,d/2-14,2,28,8,"#222"),q(c,d/2-14,g-10,28,8,"#222"),Ct(c,"\u796D",d/2,g/2,d*.6,28,"#fff",900),f.fillStyle="#ff6a35",f.beginPath(),f.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),f.fill()}),i.add("busstop",96,96,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=8,c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.stroke(),Ct(c,"\u30D0\u30B9\u505C",d/2,g/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,c=>q(c,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(c,f,d,g)=>{c.save(),c.translate(d/2,g/2),c.rotate(Math.PI/4),c.fillStyle="#1b1b1b",c.fillRect(-41,-41,82,82),c.fillStyle="#f2c230",c.fillRect(-37,-37,74,74),c.restore(),c.fillStyle="#1b1b1b",c.fillRect(d/2-22,g/2-6,44,18),c.fillRect(d/2-16,g/2-16,18,12),c.fillRect(d/2+8,g/2-13,5,7),c.beginPath(),c.arc(d/2-12,g/2+15,5,0,7),c.arc(d/2+12,g/2+15,5,0,7),c.fill(),Ct(c,"\u8E0F\u5207",d/2,g/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((c,f)=>i.add("bridge"+f,64,176,(d,g,v,b)=>{q(d,0,0,v,b,"#b9b5ab"),ln(d,i,v,b,.2),q(d,6,6,v-12,b-12,"#a7a398"),Wr(d,c,v/2,14,b-14,34,"#3f3c37",800)})),i.add("signal",240,84,(c,f,d,g)=>{q(c,0,0,d,g,"#4a4d52"),q(c,0,0,d,5,"#5c6066"),ln(c,i,d,g,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([v,b])=>{c.fillStyle="#26282c",c.beginPath(),c.arc(b,g/2,33,0,7),c.fill(),c.fillStyle=v,c.beginPath(),c.arc(b,g/2,27,0,7),c.fill()})}),i.add("ped_sig",64,128,(c,f,d,g)=>{q(c,0,0,d,g,"#3d4045"),c.fillStyle="#5a1814",c.fillRect(8,8,d-16,g/2-12),c.fillStyle="#0d4f44",c.fillRect(8,g/2+4,d-16,g/2-12),c.fillStyle="rgba(255,255,255,0.18)",c.beginPath(),c.arc(d/2,g*.18,6,0,7),c.fill(),c.fillRect(d/2-5,g*.24,10,18)}),i.add("tomare",256,96,(c,f,d,g)=>{c.clearRect(0,0,d,g),c.fillStyle="rgba(244,244,238,0.012)",c.fillRect(0,0,d,g),Ct(c,"\u6B62\u307E\u308C",d/2,g/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((c,f)=>i.add("hodokyo"+f,256,44,(d,g,v,b)=>{q(d,0,0,v,b,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,v-8,b-8),Ct(d,c,v/2,b/2+1,v*.85,28,"#fff",800)}));let M=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];M.forEach(([c,f,d],g)=>{let v=M[(g+3)%4][0],b=M[(g+1)%4][0];i.add("ekimei"+g,320,124,(T,w,_,S)=>{q(T,0,0,_,S,"#3a3d42"),q(T,4,4,_-8,S-8,"#f8f8f3"),Ct(T,f,_/2,20,_*.5,15,"#2b2b2b",700),Ct(T,c,_/2,52,_*.6,40,"#151515",900),Ct(T,d,_/2,80,_*.5,12,"#555",600),q(T,4,S-30,_-8,26,"#1f9a50"),T.fillStyle="#fff",bh(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+v,12,S-17),T.textAlign="right",T.fillText(b+" \u2192",_-12,S-17),ln(T,i,_,S,.06),q(w,4,4,_-8,S-8,"#8a8a84")}),i.add("ekiplate"+g,220,48,(T,w,_,S)=>{q(T,0,0,_,S,"#4b3326"),ln(T,i,_,S,.2),Ct(T,c+"\u99C5",_/2,S/2+1,_*.8,30,"#f3ead8",800)})});for(let c of["l","r"])i.add("chev_"+c,96,120,(f,d,g,v)=>{q(f,0,0,g,v,"#f4f4ef"),q(f,4,4,g-8,v-8,"#1e5bb8"),f.fillStyle="#f8f8f4",f.beginPath();let b=c==="r"?1:-1,T=g/2,w=v/2;f.moveTo(T-b*26,w-40),f.lineTo(T+b*22,w),f.lineTo(T-b*26,w+40),f.lineTo(T-b*8,w+40),f.lineTo(T+b*40,w),f.lineTo(T-b*8,w-40),f.closePath(),f.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((c,f)=>i.add("tunnel"+f,360,80,(d,g,v,b)=>{q(d,0,0,v,b,"#e9e7e0"),q(d,4,4,v-8,b-8,"#24403b"),ln(d,i,v,b,.08),Ct(d,c,v/2,b*.42,v*.8,38,"#f4f2ea",800),Ct(d,"L = 170 m",v/2,b*.8,v*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(c,f,d,g)=>{q(c,0,0,d,g,"#f6f6f2"),c.fillStyle="#d42a22";for(let v=-20;v<g;v+=26)c.beginPath(),c.moveTo(4,v),c.lineTo(d/2,v+20),c.lineTo(d-4,v),c.lineTo(d-4,v+11),c.lineTo(d/2,v+31),c.lineTo(4,v+11),c.closePath(),c.fill();c.strokeStyle="#222",c.lineWidth=3,c.strokeRect(1.5,1.5,d-3,g-3)}),i.add("xing_plate",128,48,(c,f,d,g)=>{q(c,0,0,d,g,"#f6f6f2"),c.strokeStyle="#d8231c",c.lineWidth=4,c.strokeRect(3,3,d-6,g-6),Ct(c,"\u8E0F\u5207\u6CE8\u610F",d/2,g/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),q(c,0,0,d,7,"#e9ebee"),q(c,0,6,d,2,"rgba(60,70,80,0.5)"),q(c,0,g-6,d,6,"#d5d8dc");for(let v=3;v<d;v+=9)q(c,v,7,3,g-13,"#e2e5e9"),q(c,v+2,7,1,g-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(c,f,d,g)=>{let v=Tt(4242);q(c,0,0,d,g,"#3d3f3c");let b=38,T=b/Math.SQRT2;c.save(),c.beginPath(),c.rect(0,22,d,g-22),c.clip();for(let w=-2;w*T<g+b;w++)for(let _=-2;_*b<d+b;_++){let S=_*b+(w%2?b/2:0),E=22+w*T,R=.52+v()*.17,C=Math.min(1,Math.max(0,(E-g*.55)/(g*.4))),P=Math.round(255*R*(1-.38*C)),A=`rgb(${P-4},${P-2},${P-9})`;c.fillStyle=A,c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E+T-3.5),c.lineTo(S-T+3.5,E),c.closePath(),c.fill(),c.fillStyle="rgba(255,255,255,0.12)",c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E),c.closePath(),c.fill(),C>.3&&v()<.5&&(c.fillStyle=`rgba(70,96,52,${.25+.3*v()})`,c.beginPath(),c.arc(S+(v()-.5)*10,E+6,4+v()*6,0,7),c.fill())}c.restore(),Sn(c,0,g*.55,d,g*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),q(c,0,0,d,22,"#8c8d87"),q(c,0,18,d,4,"rgba(0,0,0,0.3)"),q(c,0,0,d,3,"rgba(255,255,255,0.2)"),ln(c,i,d,g,.12)}),i.add("wrail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),q(c,0,0,d,9,"#6a4a34"),q(c,0,0,d,2,"rgba(255,225,190,0.25)"),q(c,0,8,d,2,"rgba(20,10,5,0.45)"),q(c,0,g-10,d,10,"#5e412e"),q(c,0,g-10,d,2,"rgba(255,225,190,0.18)");for(let v=4;v<d;v+=12)q(c,v,9,5,g-19,"#634632"),q(c,v,9,1.2,g-19,"rgba(255,225,190,0.18)"),q(c,v+4,9,1,g-19,"rgba(20,10,5,0.4)");ln(c,i,d,g,.15)}),i.add("woodwall",t,t,(c,f,d,g)=>{let v=Tt(5151);q(c,0,0,d,g,"#5e4130");for(let b=0;b<g;b+=16){let T=v();q(c,0,b,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),q(c,0,b,d,2,"rgba(255,220,180,0.12)"),q(c,0,b+14,d,2,"rgba(15,8,4,0.45)");for(let w=v()*80;w<d;w+=60+v()*90)q(c,w,b+2,1.5,12,"rgba(15,8,4,0.35)")}Sn(c,0,0,d,g,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),ln(c,i,d,g,.2)}),i}var sS=11,rS=[7,8,9,10,11],oS=[["\u713C\u304D\u9CE5","#fbf6f2","#c8102e","#ff4fd8",1],["\u5C45\u9152\u5C4B","#fdf8ee","#c41e2a",null,1],["\u305D\u3070","#fbf7ef","#1f2a6e","#3fd8ff",1],["\u6D0B\u54C1\u5E97","#2a8a5a","#ffffff",null,0],["\u30B9\u30CA\u30C3\u30AF","#2a1f4a","#ff8ae8","#b45cff",0],["\u30AB\u30E9\u30AA\u30B1","#c8287a","#ffffff","#ffd0f0",0],["\u4E2D\u83EF\u6599\u7406","#1f4fa8","#ffffff",null,0],["\u30E9\u30FC\u30E1\u30F3","#c8241c","#fff6d8","#ffc94a",0],["\u55AB\u8336","#fdf4e4","#6a3a1e","#ffb84a",1],["\u713C\u8089","#fbf6f2","#b8186a","#b45cff",1],["\u713C\u304D\u9CE5","#fbf4fb","#a0128a","#b45cff",1]],Rl=(i,e,t,n,s,r)=>{i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()};function aS(i,e,t,n,s,[r,o,l,a,u]){let h=n/160,p=6*h,m=12*h;q(e,0,0,n,s,"#2a2b30"),Rl(e,p*.5,p*.5,n-p,s-p,m),e.fillStyle=o,e.fill(),e.save(),Rl(e,p*.5,p*.5,n-p,s-p,m),e.clip();let x=e.createRadialGradient(n/2,s/2,n*.1,n/2,s/2,s*.62);x.addColorStop(0,u?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"),x.addColorStop(1,"rgba(0,0,0,0.14)"),e.fillStyle=x,e.fillRect(0,0,n,s),e.restore();let y=(d,g,v,b)=>{d.save(),Rl(d,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),d.shadowColor=g,d.shadowBlur=v*h,d.strokeStyle=g,d.lineWidth=6*h,d.stroke(),d.shadowBlur=0,d.strokeStyle=b,d.lineWidth=2.2*h,d.stroke(),d.restore()};a?y(e,a,10,"#fff4fb"):(e.save(),Rl(e,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),e.strokeStyle=l,e.globalAlpha=.7,e.lineWidth=3*h,e.stroke(),e.restore());let M=p+20*h,c=s-p-20*h,f=Math.min(n*.62,(c-M)/[...r].length);Wr(e,r,n/2,M,c,f,l,900,u?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.25)"),ln(e,i,n,s,.05),q(t,0,0,n,s,"#000"),Rl(t,p*.5,p*.5,n-p,s-p,m),t.fillStyle=u?"#b4aea4":a&&o==="#2a1f4a"?"#100c1c":o,t.globalAlpha=u?1:.55,t.fill(),t.globalAlpha=1,a&&y(t,a,12,"#ffffff"),Wr(t,r,n/2,M,c,f,u||o==="#2a1f4a"?l:"#ffffff",900),u&&(t.save(),t.globalCompositeOperation="multiply",Wr(t,r,n/2,M,c,f,"#8a8a8a",900),t.restore())}function lS(i,e,t,n,s){let r=Tt(7331),o=s/1.26/(n/3);e.clearRect(0,0,n,s);let l=11,a=n/l,u=.15*(s/1.26);q(e,0,0,n,s-u*.5,"#4d5f92");for(let h=0;h<l;h++){let p=h*a,m=e.createLinearGradient(p,0,p+a,0);m.addColorStop(0,"#2c3760"),m.addColorStop(.18,"#5a70a8"),m.addColorStop(.45,"#9fb4e0"),m.addColorStop(.7,"#6a80b8"),m.addColorStop(1,"#33416e"),e.fillStyle=m,e.fillRect(p,0,a,s-u*.5)}for(let h=s-u*.5-52;h>0;h-=52)Sn(e,0,h,n,10,[[0,"rgba(20,26,50,0.45)"],[1,"rgba(20,26,50,0)"]]),q(e,0,h-2,n,2,"rgba(200,215,240,0.35)");for(let h=0;h<l;h++){let p=(h+.5)*a,m=s-u*.5,x=a*.47;e.save(),e.translate(p,m),e.scale(1,o),e.fillStyle="#26305a",e.beginPath(),e.arc(0,0,x,0,7),e.fill(),e.fillStyle="#5c72aa",e.beginPath(),e.arc(0,0,x*.8,0,7),e.fill(),e.fillStyle="rgba(190,206,240,0.8)",e.beginPath(),e.arc(-x*.2,-x*.25,x*.38,0,7),e.fill(),e.fillStyle="#3a4878",e.beginPath(),e.arc(0,0,x*.22,0,7),e.fill(),e.restore()}e.save(),e.globalCompositeOperation="source-atop",e.globalAlpha=.12,e.fillStyle=i.grain,e.fillRect(0,0,n,s),e.restore();for(let h=0;h<40;h++)e.fillStyle=r()<.5?"rgba(255,255,255,0.08)":"rgba(0,0,20,0.1)",e.fillRect(r()*n,r()*(s-u),a*(.5+r()),3+r()*6)}function cS(i,e,t,n,s,r){q(e,0,0,n,s,"#1c2b5e"),q(e,0,0,n,4,"rgba(255,255,255,0.3)"),q(e,0,s-5,n,5,"rgba(0,0,0,0.25)"),e.strokeStyle="#d9b44a",e.lineWidth=2,e.strokeRect(7,7,n-14,s-14),Ct(e,r,n/2,s/2+2,n*.66,52,"#f6d35a",900,"rgba(60,40,0,0.5)"),ln(e,i,n,s,.06),q(t,0,0,n,s,"#0a1024"),Ct(t,r,n/2,s/2+2,n*.66,52,"#f0c850",900)}function uS(i,e,t,n,s,r,o){let l=Tt(r),a=n/360;q(e,0,0,n,s,"#4b3426"),Sn(e,0,0,n,s,[[0,"rgba(255,230,200,0.08)"],[1,"rgba(0,0,0,0.2)"]]);let u=n*.12,h=s*(o?.3:.17),p=n*.76,m=s*(o?.62:.56);for(let x of[e,t])q(x,u,h,p,m,"#e9b56c"),Sn(x,u,h,p,m,[[0,"rgba(255,240,200,0.55)"],[1,"rgba(110,60,25,0.4)"]]);if(!o)for(let x=h+m*.32;x<h+m-6*a;x+=m*.22){for(let y=u+4*a;y<u+p-10*a;y+=(9+l()*12)*a){let M=(10+l()*12)*a;q(e,y,x-M,7*a,M,["#c0503a","#3a6ab0","#e8c050","#5a9a50","#d07a9a"][Math.floor(l()*5)])}q(e,u,x,p,5*a,"#6e4a30")}o&&(q(e,u,h-s*.12,p,s*.16,"#28356a"),q(t,u,h-s*.12,p,s*.16,"#000")),q(e,u+p/2-4*a,h,8*a,m,"#4b3426"),q(t,u+p/2-4*a,h,8*a,m,"#000"),q(e,0,h+m,n,6*a,"#3a281d"),ln(e,i,n,s,.15)}function hS(i,e,t,n,s,r,o){let l=n/360;if(q(e,0,0,n,s,r?"#5e4130":"#ece2cc"),r)for(let m=0;m<s;m+=16*l)q(e,0,m,n,2*l,"rgba(15,8,4,0.4)");for(let m of[0,n-14*l])q(e,m,0,14*l,s,"#4b3426");q(e,0,s-12*l,n,12*l,"#3a281d");let a=n*.2,u=s*.22,h=n*.6,p=s*.46;q(e,a-8*l,u-8*l,h+16*l,p+16*l,"#4a3020"),Sn(e,a,u,h,p,[[0,"#4f78b8"],[1,"#a6c8ec"]]),q(e,a+h/2-3*l,u,6*l,p,"#4a3020"),o&&(q(t,a,u,h,p,"#ffcf8f"),q(t,a+h/2-3*l,u,6*l,p,"#000")),ln(e,i,n,s,.12)}function fS(i){let e=0,t=0,n=0;for(let[s,r]of i)e+s+4>ks&&(e=0,t+=n+4,n=0),e+=s+4,n=Math.max(n,r);return t+n}function _g(i,e,t,n){let s=e==="hi"?1:.5,r=[360*s,432*s],o=[360*s,348*s],l=[160*s,384*s],a=[512,76],u=[],h=[],p=[];for(let c=0;c<sS;c++)u.push(["shop_p"+c,r,(f,d,g,v,b)=>uS(f,d,g,v,b,6100+c,c===2||c===7||c===10)]);for(let c of rS)for(let f of[!1,!0])h.push(["win"+c+(f?"L":""),o,(d,g,v,b,T)=>hS(d,g,v,b,T,c===8||c===11,f)]);oS.forEach((c,f)=>p.push(["vsB"+f,l,(d,g,v,b,T)=>aS(d,g,v,b,T,c)]));let m=[...u.slice(0,5),p[0],...u.slice(5,10),p[1],u[10],...h.slice(0,4),p[2],...h.slice(4,9),p[3],h[9],...p.slice(4),["hsN_\u6D0B\u54C1\u5E97",a,(c,f,d,g,v)=>cS(c,f,d,g,v,"\u6D0B\u54C1\u5E97")],["kawaraC",[240,256],lS]],x=fS(m.map(c=>c[1])),y=Math.ceil((x+(n?16+n.rows:4))/4)*4,M=new _h(y,2,i.cells);for(let[c,[f,d],g]of m)M.add(c,f,d,(v,b,T,w)=>g(M,v,b,T,w));if(t){let c=t.img.width,f=t.img.height;for(let d of t.tiles)M.paintCell(d.name,t.img,d.x*c,d.y*f,d.w*c,d.h*f,d.ey<0?-1:d.ey*f)}return M.houses=!!n&&dS(M,n),M}function dS(i,e){let n=i.y+i.rowH+4+12;if(n+e.rows>i.H)return!1;i.x=0,i.y=n,i.rowH=0,i.a.clearRect(0,n-8,ks,i.H-n+8);try{for(let s of e.tiles)i.add(s.name,s.w,s.h,(r,o,l,a)=>{r.clearRect(0,0,l,a),r.drawImage(e.img,s.x,s.y,s.w,s.h,0,0,l,a),o.drawImage(e.img,s.x,s.ey,s.w,s.h,0,0,l,a)})}catch(s){return console.warn("painted houses:",s.message),!1}return!0}function bg(i){let l=yh(1024,3328),a=l.getContext("2d"),u=Tt(321),h={},p={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},m=(b,T,w)=>{let _=p[b],S=256,E=b==="pine",R=b==="sakura";a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let C=[[S,S,E?80:92]];for(let A=0;A<(E?10:14);A++){let L=u()*6.28,D=45+u()*120;C.push([S+Math.cos(L)*D,S+Math.sin(L)*D*(E?.42:.9),Math.min(34+u()*52,232-D)])}let P=R?2300:E?2600:2300;for(let A=0;A<P;A++){let L=C[Math.floor(u()*C.length)],D=u()*6.28,O=Math.sqrt(u())*L[2],z=L[0]+Math.cos(D)*O,B=L[1]+Math.sin(D)*O*(E?.45:1),H=O/L[2],k=Math.min(4,Math.max(0,Math.floor(.55+u()*2.7+(H>.82?.5:0))));if(a.fillStyle=_[k],R){let X=7+u()*8;a.beginPath(),a.arc(z,B,X,0,7),a.fill(),u()<.25&&(a.fillStyle=_[4],a.beginPath(),a.arc(z-X*.3,B-X*.3,X*.4,0,7),a.fill())}else if(E)a.save(),a.translate(z,B),a.rotate((u()-.5)*1.2),a.fillRect(-11,-1.6,22,3.2),a.restore();else if(b==="momiji"){let X=8+u()*7;a.save(),a.translate(z,B),a.rotate(u()*6.28),a.beginPath();for(let K=0;K<10;K++){let be=K%2?X*.42:X,we=K/10*6.2832;a.lineTo(Math.cos(we)*be,Math.sin(we)*be)}a.closePath(),a.fill(),a.restore()}else if(b==="ginkgo"){let X=9+u()*7;a.save(),a.translate(z,B),a.rotate(u()*6.28),a.beginPath(),a.moveTo(0,0),a.arc(0,0,X,-.95,.95),a.closePath(),a.fill(),a.restore()}else{let X=9+u()*10;a.beginPath(),a.ellipse(z,B,X,X*.55,u()*6.28,0,7),a.fill()}}for(let A=0;A<90;A++){let L=u()*6.28,D=150+u()*85,O=S+Math.cos(L)*D,z=S+Math.sin(L)*D*(E?.45:.92);a.fillStyle=_[1+Math.floor(u()*4)],E?(a.save(),a.translate(O,z),a.rotate((u()-.5)*1.2),a.fillRect(-9,-1.6,18,3.2),a.restore()):(a.beginPath(),a.arc(O,z,R?6+u()*6:7+u()*6,0,7),a.fill())}if(R)for(let A=0;A<14;A++){a.strokeStyle="rgba(150,90,100,0.35)",a.lineWidth=1.5;let L=S+(u()-.5)*300,D=S+60+u()*120;a.beginPath(),a.moveTo(L,D),a.lineTo(L+(u()-.5)*40,D-20-u()*30),a.stroke()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},x=(b,T,w,_)=>{a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let S=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],E=_?120:170;for(let R=0;R<E;R++){let C=256+(u()-.5)*(_?330:380)*Math.sqrt(u()),P=150+u()*(_?230:300)*(1-Math.abs(C-256)/300),A=(C-256)*.35+(u()-.5)*90,L=9+u()*9,D=C+A,O=512-P,z=Math.min(4,Math.floor(u()*2.2+P/380*2.6)),B=a.createLinearGradient(0,512,0,O);B.addColorStop(0,S[0]),B.addColorStop(.6,S[Math.max(1,z-1)]),B.addColorStop(1,S[z]),a.fillStyle=B,a.beginPath(),a.moveTo(C-L/2,512),a.quadraticCurveTo(C-L/2+A*.3,512-P*.55,D,O),a.quadraticCurveTo(C+L/2+A*.3,512-P*.5,C+L/2,512),a.fill()}if(_)for(let R=0;R<16;R++){let C=110+u()*290,P=150+u()*200,A=u();if(a.strokeStyle="#3e7334",a.lineWidth=5,a.beginPath(),a.moveTo(C+(u()-.5)*20,512),a.quadraticCurveTo(C+(u()-.5)*30,(P+512)/2,C,P),a.stroke(),A<.55){a.fillStyle="#fbfaf2";for(let L=0;L<12;L++){let D=L/12*6.283;a.beginPath(),a.ellipse(C+Math.cos(D)*11,P+Math.sin(D)*11,9,4.5,D,0,7),a.fill()}a.fillStyle="#f2c230",a.beginPath(),a.arc(C,P,8,0,7),a.fill()}else if(A<.85)a.fillStyle="#f6c62e",a.beginPath(),a.arc(C,P,15,0,7),a.fill(),a.fillStyle="#ffe27a",a.beginPath(),a.arc(C-3,P-3,8,0,7),a.fill();else{a.fillStyle="#9b7fd6";for(let L=0;L<6;L++)a.beginPath(),a.arc(C+(u()-.5)*16,P+(u()-.5)*16,6,0,7),a.fill()}}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},y=(b,T,w)=>{let _=Tt(97);a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip(),a.lineCap="round";let S=(E,R,C,P,A,L)=>{let D=E+Math.cos(C)*P,O=R+Math.sin(C)*P;if(a.strokeStyle=L>3?"#76605f":L>1?"#6c5458":"#62494f",a.lineWidth=A,a.beginPath(),a.moveTo(E,R),a.lineTo(D,O),a.stroke(),L<=0||A<.7)return;let z=2+(_()<.4?1:0);for(let B=0;B<z;B++){let H=C+(_()-.5)*1.1+(B-(z-1)/2)*.42;H=H*.8+-Math.PI/2*.2,S(D,O,H,P*(.62+_()*.2),A*.68,L-1)}};for(let E=0;E<6;E++)S(256+(_()-.5)*40,500,-Math.PI/2+(_()-.5)*.9,110+_()*50,5.6,6);a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},M=(b,T,w,_,S,E=4,R=!1)=>{let C=Tt(_),P=1024,A=504,L=R?246/504:1;a.save(),a.translate(T,w+8*L),a.beginPath(),a.rect(0,0,512,A*L),a.clip(),a.scale(.5,L);let D=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],O=K=>{let be=K/P;return(.5+.5*Math.min(1,be/.45)**.8)*(1-.4*Math.max(0,(be-.9)/.1))},z=(K,be,we,Se)=>{be=Math.min(be,A*.985);let G=K+we,$=A-be,ge=K+we*.25,Pe=A-be*.62-Math.abs(we)*.35;a.moveTo(K-Se/2,A),a.quadraticCurveTo(ge-Se*.42,Pe,G,$),a.quadraticCurveTo(ge+Se*.42,Pe+Se*.5,K+Se/2,A),a.closePath()},B=[];for(let K=24+C()*24;K<P-20;K+=(K<P*.25?56:44)+C()*26)B.push(K);let H=()=>B[Math.floor(C()*B.length)],k=(K,be,we,Se,G,$,ge,Pe,te)=>{let ve=D.map(()=>[]);for(let Ne=0;Ne<K;Ne++){let Oe=H(),Ee=Oe+(C()-.5)*34,We=O(Ee),ne=Ee/P,de=A*(be+C()*(we-be))*We*1.12,Q=(C()-.5)*Se+(Ee-P*.45)*.12;ve[Math.min(8,Pe+Math.floor(C()*(te-Pe+1)+ne*1.2))].push([Ee,de,Q,G+C()*($-G)])}ve.forEach((Ne,Oe)=>{if(!Ne.length)return;let Ee=a.createLinearGradient(0,A,0,A*(1-we*.8));Ee.addColorStop(0,D[ge]),Ee.addColorStop(.55,D[Math.round((ge+Oe)/2)]),Ee.addColorStop(1,D[Oe]),a.fillStyle=Ee,a.beginPath();for(let We of Ne)z(We[0],We[1],We[2],We[3]);a.fill()})};k(360,.25,.55,150,12,22,0,2,3),k(240,.4,.78,260,10,17,1,4,6);let X=[];for(let K=0;K<E;K++){let be=P*(.14+C()*.74),we=O(be);X.push({fx:be,fy:Math.max(56,A-A*(.56+C()*.38)*we*1.05),kind:C()<S?0:1,sz:.85+C()*.4,tilt:.72+C()*.28,rot:C()*6.28,sx:be+(C()-.5)*60})}a.lineCap="round";for(let K of X)a.strokeStyle="#2c6623",a.lineWidth=6,a.beginPath(),a.moveTo(K.sx,A),a.quadraticCurveTo((K.sx+K.fx)/2+(C()-.5)*40,(A+K.fy)/2,K.fx,K.fy+8),a.stroke();k(150,.5,.92,330,9,16,2,6,7);for(let K of X){if(a.save(),a.translate(K.fx,K.fy),a.scale(1,K.tilt),K.kind===0){let be=38*K.sz;for(let we=0;we<16;we++){let Se=K.rot+we/16*6.283;a.fillStyle=Math.sin(Se)>.4?"#e2e3ea":"#fdfdf6",a.beginPath(),a.ellipse(Math.cos(Se)*be*.56,Math.sin(Se)*be*.56,be*.48,be*.14,Se,0,7),a.fill()}a.fillStyle="#f2b51a",a.beginPath(),a.arc(0,0,be*.28,0,7),a.fill(),a.fillStyle="#fbe060",a.beginPath(),a.arc(-be*.07,-be*.07,be*.14,0,7),a.fill()}else{let be=40*K.sz;for(let we=0;we<5;we++){let Se=K.rot+we/5*6.283;a.fillStyle="#fccc1e",a.beginPath(),a.ellipse(Math.cos(Se)*be*.52,Math.sin(Se)*be*.52,be*.52,be*.38,Se,0,7),a.fill()}for(let we=0;we<5;we++){let Se=K.rot+we/5*6.283;a.fillStyle="#ffe873",a.beginPath(),a.ellipse(Math.cos(Se)*be*.62,Math.sin(Se)*be*.62-3,be*.26,be*.15,Se,0,7),a.fill()}a.fillStyle="#e39b14",a.beginPath(),a.arc(0,0,be*.2,0,7),a.fill()}a.restore()}k(40,.42,.85,280,8,14,3,6,7),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512*L)/3328,v1:1-(w+8*L)/3328}},c=(b,T,w,_)=>{let S=Tt(_),E=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let R=[];for(let C=0;C<15;C++){let P=(C+S()*.6)/15,A=40+P*432,L=500-300*Math.sqrt(Math.max(0,1-((A-256)/232)**2));R.push([A,L+60+S()*50,54+S()*46])}for(let C=0;C<2600;C++){let P=R[Math.floor(S()*R.length)],A=S()*6.283,L=Math.sqrt(S())*P[2],D=P[0]+Math.cos(A)*L,O=Math.min(505,P[1]+Math.sin(A)*L*.85),z=Math.sin(A)<-.2?1:0,B=Math.max(0,Math.min(6,Math.floor(S()*2.4+(1-O/512)*3.2+z*1.3+L/P[2]*.8)));a.fillStyle=E[B],a.beginPath(),a.ellipse(D,O,7+S()*7,4+S()*4,S()*6.28,0,7),a.fill()}for(let C=0;C<130;C++){let P=R[Math.floor(S()*R.length)],A=-Math.PI*(.1+S()*.8),L=(.35+S()*.6)*P[2],D=P[0]+Math.cos(A)*L,O=P[1]+Math.sin(A)*L*.85;if(O>470)continue;let z=6+S()*5,B=S()*6.28,H=S()<.12;a.fillStyle=H?"#f3d2dc":"#fbfbf6";for(let k=0;k<5;k++){let X=B+k/5*6.283;a.beginPath(),a.ellipse(D+Math.cos(X)*z*.55,O+Math.sin(X)*z*.5,z*.5,z*.36,X,0,7),a.fill()}a.fillStyle="#d9b628",a.beginPath(),a.arc(D,O,z*.22,0,7),a.fill()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},f=(b,T,w,_)=>{let S=Tt(_),E=1024,R=512;a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,250),a.clip(),a.scale(.5,250/512);let C=["#0c2a12","#143a19","#1f4f23","#2e682f","#46843a","#66a047","#8ebd58","#b6d874"],P=O=>Math.max(0,1-((O-E/2)/(E*.47))**2)**.6,A=(O,z,B,H)=>{let k=O+B,X=R-z,K=O+B*.3,be=R-z*.6;a.moveTo(O-H/2,R),a.quadraticCurveTo(K-H*.5,be,k,X),a.quadraticCurveTo(K+H*.5,be+H*.4,O+H/2,R),a.closePath()},L=(O,z,B,H,k,X,K)=>{let be=C.map(()=>[]);for(let we=0;we<O;we++){let Se=E/2+(S()-.5)*E*.8*Math.sqrt(S()),G=P(Se),$=R*.9*G*(z+S()*(B-z)),ge=(Se-E/2)*.22+(S()-.5)*120,Pe=Math.min(7,X+Math.floor(S()*(K-X+1)));G>.03&&be[Pe].push([Se,$,ge,H+S()*(k-H)])}be.forEach((we,Se)=>{if(!we.length)return;let G=a.createLinearGradient(0,R,0,R*.1);G.addColorStop(0,C[Math.max(0,Se-3)]),G.addColorStop(1,C[Se]),a.fillStyle=G,a.beginPath();for(let $ of we)A($[0],$[1],$[2],$[3]);a.fill()})};L(150,.35,.7,26,46,1,3),L(110,.5,.92,22,38,3,5);let D=[["#d27ac4","#f4bce6"],["#9f74da","#d2b6f4"],["#fbfbf6","#ffffff"],["#ea88b2","#fcc8de"]];for(let O=0;O<48;O++){let z=E/2+(S()-.5)*E*.84,B=P(z),H=R-R*.9*B*(.55+S()*.42),[k,X]=D[Math.floor(S()*D.length)],K=22+S()*12,be=S()*6.28;if(!(B<.15)){a.fillStyle=k;for(let we=0;we<5;we++){let Se=be+we*1.2566;a.beginPath(),a.ellipse(z+Math.cos(Se)*K*.55,H+Math.sin(Se)*K*.45,K*.52,K*.36,Se,0,7),a.fill()}a.fillStyle=X;for(let we=0;we<5;we++){let Se=be+we*1.2566;a.beginPath(),a.ellipse(z+Math.cos(Se)*K*.45,H+Math.sin(Se)*K*.35-3,K*.25,K*.16,Se,0,7),a.fill()}a.fillStyle=k==="#fbfbf6"?"#f2b51a":"#6e2f62",a.beginPath(),a.arc(z,H,K*.18,0,7),a.fill()}}L(34,.4,.75,20,34,4,6),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+250)/3328,v1:1-w/3328}};y("twigs",0,0),c("flowerbush",512,0,6151),m("leafA",0,512),m("leafB",512,512),m("sakura",0,1024),m("pine",512,1024),m("momiji",0,1536),m("ginkgo",512,1536),x("grass",0,2304,!1),x("flowers",512,2304,!0),M("bankA",0,2816,4111,.7),M("bankB",512,2816,4127,.35),f("bedA",0,2048,7741),M("bankC",512,2048,4133,0,0,!0);let d=new ri(l);d.colorSpace=qt,d.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let g=1-2816/3328,v=1-2824/3328;return{tex:d,cells:h,tuftV:[g,1-2304/3328,v,(g+v)/2]}}var un=[1,1,1],Ce={pole:_e("#b1b0a9"),metal:_e("#8d9198"),black:_e("#2a2b30"),yellow:_e("#f2c230"),white:_e("#f4f3ee"),trans:_e("#a0a3a8"),lampPole:_e("#727780"),lampHead:_e("#dcdcd6"),trunk:_e("#6a5444"),trunkDark:_e("#4b3a33"),bark:_e("#7a6556"),leaf:_e("#86ba4c"),leafShade:_e("#2c6640"),sakura:_e("#ffd3e3"),sakuraShade:_e("#de94b4"),pine:_e("#55874c"),pineShade:_e("#1d4632"),cedar:_e("#41713e"),cedarShade:_e("#1b3e2a"),roof:_e("#bdbbb3"),parapet:_e("#dcdad2"),pipe:_e("#c4c4bf"),orange:_e("#f07a22"),red:_e("#d8352a"),vermilion:_e("#e2482c"),concrete:_e("#c9c7c0"),stone:_e("#a8a69e"),terracotta:_e("#b8653d"),rail:_e("#eeeeea")},X0=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(_e),zs=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(_e),pS=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(_e),Mg=["#c62f2a","#2b46a6","#7b3c9e","#b8336f","#a8282a","#273b86"].map(_e),Eh=null;function Fg(i){Eh=i}var li=i=>Eh.uv(i),Jo=li,Ug=(i,e)=>{let t=1;for(;Eh.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function Bg(i,e,t,n,s=0){let r=new je().makeRotationY(s);r.setPosition(e,t,n);let o=new je().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var q0=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let l=e[5];(l==="g"&&e[6]==="l"||l==="d"||l==="k"||l==="c"||l==="n"||l==="p")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},cn=(i,e,t,n,s,r,o,l=un)=>{q0(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,li(o)),i.litV=0},Vi=(i,e,t,n,s,r,o,l=un)=>{q0(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,li(o)),i.litV=0},Wi=(i,e,t,n,s,r,o,l=un)=>{q0(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,li(o)),i.litV=0},Ko=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?li(r):void 0),mS=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Og(i){return mS.map(e=>new V(e[0],e[1],e[2]).applyMatrix4(i))}function Y0(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Ce.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Ce.black:Ce.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Ce.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Ce.metal);let o=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,Ce.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,Ce.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Ce.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Ce.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Ce.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Ce.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Ce.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Ce.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,Ce.metal);return i.atlas.setM(e),cn(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&cn(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new V(u[0],u[1],u[2]).applyMatrix4(e))}var Mh=new V;function pr(i,e,t,n,s,r){i.lamps&&(Mh.set(t,n,s).applyMatrix4(e),i.lamps.push(Mh.x,Mh.y,Mh.z,r))}function Z0(i,e,t,n={}){let s=i.color;s.setM(e),pr(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Ce.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Ce.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Ce.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Ce.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,un);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function kg(i,e,t=.04){let n=i.color;n.setM(e),pr(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Ce.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Ce.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Ce.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,un),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Zo(i,e,t,n,s,r,o=!1,l=!1){let a=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[h,p]=a[u],[m,x]=a[(u+1)%4];i.quad([h*n,e,p*n],[h*s,t,p*s],[m*s,t,x*s],[m*n,e,x*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),l&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var gS=_e("#202127");function Il(i,e){let t=i.color;t.setM(e),pr(i,e,0,3.4,0,.9);let n=gS,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),Zo(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),Zo(t,3.64,3.84,.23,.05,n),Zo(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,un),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],un,{u0:0,u1:1,v0:0,v1:1})}function K0(i,e,t){let n=Math.floor(t()*3),s=[Ce.red,_e("#2f6fd8"),Ce.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Bn(s,.8)),i.atlas.setM(e),cn(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function W0(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,_e("#e6e6e1")),i.atlas.setM(e),cn(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function zg(i,e,t){let n=i.color;n.setM(e);let s=t.pick([_e("#c8ccd2"),_e("#c0392b"),_e("#2c6fb7"),_e("#2b2b2b"),_e("#e8c84a"),_e("#e98fb0")]);for(let o of[-.52,.52])for(let l=0;l<12;l++){let a=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([o+Math.cos(a)*.33,.34+Math.sin(a)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Ce.black)}let r=(o,l)=>n.rod(o,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Ce.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Ce.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Ce.metal)}function Hg(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Ce.orange),t.cyl(0,.04,0,.16,.03,.68,10,Ce.orange),t.cyl(0,.32,0,.115,.095,.12,10,Ce.white,!1)}function $0(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Ce.terracotta),i.leaf.setM(e),Gi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}var vS=[[.35,.455],[.455,.56],[.56,.665]],Sg=_e("#6b4a32");function wg(i,e,t,n,s){let r=i.color,o=i.atlas,l=.62,a=li("shop_p1"),u=a.u1-a.u0,h=a.v1-a.v0;r.setM(e),o.setM(e);for(let p of[-1,1])r.box(t+p*l-.03,0,n-.32,t+p*l+.03,1.32,n+.24,Sg);for(let p=0,m=Math.floor(s()*3);p<3;p++){let x=.2+p*.4,y=x+.36,M=n-.26+p*.16,c=M+.14,[f,d]=vS[(p+m)%3];o.quad([t+l,x,M],[t-l,x,M],[t-l,y,c],[t+l,y,c],un,{u0:a.u0+u*.14,u1:a.u0+u*.86,v0:a.v1-h*d,v1:a.v1-h*f}),r.box(t-l,x-.05,M-.06,t+l,x,M+.12,Sg)}}function Vg(i,e,t,n=.8){i.leaf.setM(e),Gi(i,[0,n*.3,0],0,n*.6,0,n,t()<.5?"leafA":"leafB",7,t,[1,1,1],[.5,.58,.66],[0,n*1.4])}function mr(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Ce.metal),i.atlas.setM(e),n<0?Wi(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Vi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function J0(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Ce.white:Ce.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Ce.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Ce.black),i.atlas.setM(e),t<0?Wi(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Vi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function Wg(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,_e("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,_e("#f0a020"))}function j0(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Ce.orange);let s=0,r=3.25,o=.42,l=14;for(let a=0;a<l;a++){let u=a/l*Math.PI*2,h=(a+1)/l*Math.PI*2,p=(m,x,y)=>[t*y,r+Math.sin(m)*x,s+Math.cos(m)*x-.25];Ko(n,p(0,0,-.02),p(t>0?h:u,o,-.02),p(t>0?u:h,o,-.02),Ce.orange),Ko(n,p(0,0,-.035),p(t>0?h:u,o*.86,-.035),p(t>0?u:h,o*.86,-.035),_e("#dfe9f2"))}}var jo=null;function Gg(i){jo=i}var $o=1;function Xg(i){$o=i}function Gi(i,e,t,n,s,r,o,l,a,u,h,p,m=0){let x=jo[o],y=1+(1-$o)*.35;l=Math.max(2,Math.round(l*$o));for(let M=0;M<l;M++){let c=a()*2-1,f=a()*2-1,d=a()*2-1;m&&(f=1.2+a());let g=Math.hypot(c,f,d)||1;c/=g,f/=g,d/=g;let v=-d,b=0,T=c;g=Math.hypot(v,T),g<.1&&(v=1,T=0,g=1),v/=g,T/=g;let w=f*T-d*b,_=d*v-c*T,S=c*b-f*v,E=Math.PI+(a()-.5)*.9,R=Math.cos(E),C=Math.sin(E),P=v*R+w*C,A=b*R+_*C,L=T*R+S*C,D=w*R-v*C,O=_*R-b*C,z=S*R-T*C,B=r*(1.3+a()*.45)*y/2,H=t+(a()-.5)*r*.6,k=n+(a()-.5)*r*(m?.15:.5),X=s+(a()-.5)*r*.6,K=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Se,G])=>[H+(P*Se+D*G)*B,k+(A*Se+O*G)*B*(m?.6:1),X+(L*Se+z*G)*B]),be=K.map(Se=>{let G=Se[0]-e[0],$=Se[1]-e[1],ge=Se[2]-e[2],Pe=Math.hypot(G,$,ge)||1;G/=Pe,$/=Pe,ge/=Pe;let te=Se[0]-t,ve=Se[1]-n,Ne=Se[2]-s;return Pe=Math.hypot(te,ve,Ne)||1,[G*.7+te/Pe*.3,$*.7+ve/Pe*.3+(m?.5:0),ge*.7+Ne/Pe*.3]}),we=K.map(Se=>R0(h,u,.45+.55*Math.max(0,Math.min(1,(Se[1]-p[0])/(p[1]-p[0])))));i.leaf.card(K,be,x,we)}}function Q0(i,e,t,n="grass",s=1){let r=jo[n],o=(.42+t()*.38)*s,l=o*1.2,a=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],p=[.6,.64,.58],m=[1,1,1];i.leaf.setM(e);for(let x of[a,a+Math.PI/2]){let y=Math.cos(x)*l/2,M=Math.sin(x)*l/2;i.leaf.card([[-y,-.05,-M],[y,-.05,M],[y,o,M],[-y,o,-M]],h,r,[p,p,m,m])}}function Ll(i,e,t,n=1){let s=jo.flowerbush;if(!s)return;let r=(.8+t()*.35)*n,o=r*1.7,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,y=Math.sin(m)*o/2;i.leaf.card([[-x,-.06,-y],[x,-.06,y],[x,r,y],[-x,r,-y]],u,s,[h,h,p,p])}}function Ah(i,e,t,n=1){let s=jo.bedA;if(!s)return;let r=(.36+t()*.16)*n,o=r*2,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,y=Math.sin(m)*o/2;i.leaf.card([[-x,-.04,-y],[x,-.04,y],[x,r,y],[-x,r,-y]],u,s,[h,h,p,p])}}var xS=[.62,.68,.74],qg=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],yS=[0,1,2,0,2,3,0,3,4],_S=qg.map(([,i])=>R0(xS,un,i));function ed(i,e,t,n,s,r,o,l=1,a=null){let u=jo[a||(o()<.5?"bankA":"bankB")],h=.82*l,p=(h+.06)*2.03,m=i.leaf;for(let x of yS){let[y,M]=qg[x],c=(y-.5)*p;m.vtx(e+s*c,t+M*(h+.06)-.06,n+r*c,0,1,0,u.u0+(u.u1-u.u0)*y,u.v0+(u.v1-u.v0)*M,_S[x])}}var Yg=()=>$o>.7?.9:1.25;function bS(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Ce.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Ce.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],a=7+Math.floor(t()*3);for(let u=0;u<a;u++){let h=t()*6.28,p=(.6+t())*1.3*n;Gi(i,r,Math.cos(h)*p,s*(.62+t()*.3),Math.sin(h)*p,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],l)}Gi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],l)}function Tg(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Ce.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(2.2+t()*1.6)*n,m=[Math.cos(h)*p,s*(.62+t()*.18),Math.sin(h)*p];i.color.rod([0,s*.4,0],m,.12*n,.05*n,5,Ce.trunkDark),r.push(m),i.color.rod(m,[m[0]*1.25,m[1]+.9*n,m[2]*1.25],.05*n,.02*n,4,Ce.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],l=[s*.5,s*1.1],a=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Gi(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],a,l);Gi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],a,l)}function MS(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,l=[r*.4,o*.45,.2],a=[r,o*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,Ce.trunkDark),s.rod(l,a,.15*n,.09*n,6,Ce.trunkDark),i.leaf.setM(e);let u=[[a[0],a[1]+.3,a[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[a[0]+.9*n,a[1]-.6,.8,1.1]];for(let[h,p,m,x]of u)s.rod(h>l[0]?l:a,[h,p-.2,m],.07*n,.04*n,4,Ce.trunkDark),Gi(i,[h,p-.8,m],h,p,m,x*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[p-.7,p+.5],1)}function SS(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Ce.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(1.8+t()*1.4)*n,m=[Math.cos(h)*p,s*(.55+t()*.2),Math.sin(h)*p];i.color.rod([0,s*.38,0],m,.09*n,.04*n,5,Ce.trunkDark),r.push(m)}i.leaf.setM(e);let o=[0,s*.7,0],l=[s*.45,s*1.1],a=[.62,.52,.56];for(let u of r)Gi(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],a,l);Gi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],a,l)}function wS(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Ce.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],l=[.68,.6,.52];for(let a=0;a<7;a++){let u=s*(.34+a*.09),h=(2.1-a*.24)*n,p=t()*6.28;Gi(i,r,Math.cos(p)*h*.35,u,Math.sin(p)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],l,o)}}function TS(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,_e("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),p=h/r;s.cyl(o*p,h,0,.135*n*(1-p*.6),.13*n*(1-p*.6),.05,7,_e("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),p=t()*6.28,m=(.8+t()*1.6)*n,x=h/r;s.rod([o*x,h,0],[o*x+Math.cos(p)*m,h+m*.9,Math.sin(p)*m],.035*n,.012*n,4,_e("#8b7f78"))}let l=r*.7,a=(1.5+t()*.5)*n;i.leaf.setM(e),Gi(i,[o*.7,l,0],o*.7,l,0,a,"twigs",3,t,[1,1,1],[.92,.9,.92],[l-a,l+a])}function ES(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Ce.trunkDark),i.foliage.setM(e);let r=_e("#1d3a2c"),o=_e("#eef2f8"),l=_e("#d7e0ec");for(let a=0;a<4;a++){let u=s*(.16+a*.19),h=(1.9-a*.38)*n,p=s*.3;i.foliage.cyl(0,u,0,h,h*.3,p,9,r),i.foliage.cyl(0,u+p*.45,0,h*.72,.05,p*.62,9,a%2?o:l)}}function AS(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Ce.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Ce.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Ce.cedar)}var Zg=()=>$o>.7?[12,9,6,4,5]:[8,6,4,3,4],Eg=[0,1,1],Ag=[1,1,1],Rg=[0,.82,1],RS=[1,.8,1],Sh=[0,1,0],CS=[0,0,1],wh=i=>{let e=[];for(let t=0;t<=i;t++)e.push(t/i);return e};function Pl(i,e,t,n){let s=2*e[0]-(i[0]+t[0])/2,r=2*e[1]-(i[1]+t[1])/2,o=2*e[2]-(i[2]+t[2])/2;return n.map(l=>{let a=1-l,u=a*a,h=2*a*l,p=l*l;return[u*i[0]+h*s+p*t[0],u*i[1]+h*r+p*t[1],u*i[2]+h*o+p*t[2]]})}var Th=(i,e,t)=>i.map(n=>t+(e-t)*Math.pow(1-n,.7));function Kg(i,e,t,n,s,r,o){let l=[0,.06,.15,.4,.7,1],a=-.25,u=e[1]+.1,h=Pl([0,a,0],[e[0]*.5+s[0],(a+u)/2,e[2]*.5+s[1]],[e[0],u,e[2]],l),p=l.map((m,x)=>{let y=Math.max(0,1-(h[x][1]-a)/.75);return(t+(n-t)*Math.pow(m,1.3))*(1+.62*Math.pow(y,2.5))});h.push([e[0],u+n*.5,e[2]]),p.push(n*.1),i.tube(h,p,r,o,CS)}var Hi={cells:null,bcells:null};function PS(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.bark;o.setM(e);let l=r*t.range(.3,.38),a=Tt(Math.floor(r*7919+l*104729)),[u,h,p,,m]=Zg();Kg(o,[0,l,0],.27*n*s,.2*n*s,[a.range(-.05,.05)*n,a.range(-.05,.05)*n],u,Ag);let x=r*.64,y=t.range(2.6,3.2)*n*s,M=t.range(2,2.5)*n*s,c=n*s,f=[],d=5+Math.floor(t()*3);for(let _=0;_<d;_++){let S=_/d*6.283+t()*.6,E=t.range(-.15,.75),R=Math.sqrt(1-E*E);f.push([Math.cos(S)*R,E,Math.sin(S)*R])}f.push([0,1,0]);let g=[[0,x+.15*M,0,1.76*c,1]],v=26+Math.floor(t()*7);for(let _=0;_<v;_++){let S=t()*2-1,E=t.range(-.55,1),R=t()*2-1,C=Math.hypot(S,E,R)||1;S/=C,E/=C,R/=C;let P=f[0],A=-2;for(let D of f){let O=D[0]*S+D[1]*E+D[2]*R;O>A&&(A=O,P=D)}S=S*.45+P[0]*.55,E=E*.45+P[1]*.55,R=R*.45+P[2]*.55,C=Math.hypot(S,E,R)||1,S/=C,E/=C,R/=C;let L=t.range(.78,.95);g.push([S*y*L,x+E*M*L,R*y*L,t.range(.8,1.1)*c,0])}for(let _=0;_<4;_++){let S=f[_%d],E=Math.hypot(S[0],S[2])||1,R=S[0]/E,C=S[2]/E,P=[R*.06*c,l*.86,C*.06*c],A=[S[0]*y*.55,x+Math.min(0,S[1])*M*.4-.3*n,S[2]*y*.55],L=[(P[0]+A[0])*.5-R*.12*c,(P[1]+A[1])*.5+.18*c,(P[2]+A[2])*.5-C*.12*c],D=wh(m),O=Pl(P,L,A,D);o.tube(O,Th(D,.16*c,.06*n),h,Ag,Sh);for(let z=0,B=1+(a()<.5?1:0);z<B;z++){let H=O[m-2+z],k=Math.atan2(C,R)+(z?1:-1)*a.range(.35,.8),X=a.range(.9,1.4)*c,K=[H[0]+Math.cos(k)*X*.8,H[1]+X*a.range(.6,.9),H[2]+Math.sin(k)*X*.8],be=wh(3);o.tube(Pl(H,[(H[0]+K[0])/2,(H[1]+K[1])/2+.1*X,(H[2]+K[2])/2],K,be),Th(be,.07*c,.025*n),p,RS,Sh)}}let b=t(),T=b<.5?[1,1,.92+b*.16]:[1-(b-.5)*.12,1,.9],w=i.gleaf;w.setM(e);for(let[_,S,E,R,C]of g){let P=_,A=(S-x)*(y/M)+.1*y,L=E,D=Math.hypot(P,A,L)||1;P/=D,A/=D,L/=D,C&&(P=L=0,A=-1);let O=Math.min(1,Math.max(0,(S-(x-M))/(2*M))),z=C?.55:.72+.28*O,B=R/.8*.88;w.bill(_,S,E,P,A,L,B,B,Hi.cells[Math.floor(t()*Hi.cells.length)],[T[0]*z,T[1]*z,T[2]*z],qm,.88)}}function Cg(i,e,t,n=1,s=!1){let r=i.bark;r.setM(e);let o=s?1:0,l=t.range(2.2,2.7)*n,a=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,l,o*.3*n],h=Tt(Math.floor(l*7919+a*104729)+(s?17:0)),[p,m,x,y,M]=Zg();Kg(r,u,a,a*.8,[h.range(-.07,.07)*n,h.range(-.07,.07)*n],p,Eg);let c=t.range(6.3,6.9)*n,f=-o*.5*n,d=t.range(4,4.5)*n,g=t.range(3.6,4)*n,v=t.range(1.7,2)*n,b=t()<.35?4:3,T=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let P=0;P<b;P++){let A=T+P/b*6.283+t.range(-.3,.3),L=Math.cos(A),D=Math.sin(A),O=t.range(.32,.46),z=[u[0]+L*d*O,c-v*t.range(.35,.55),u[2]*.5+f*.4+D*g*O],B=[u[0]+(z[0]-u[0])*.45+L*.25*n,l+(z[1]-l)*.55,u[2]+(z[2]-u[2])*.45+D*.25*n],H=[u[0]+L*a*.3,l-a*.45,u[2]+D*a*.3],k=wh(M),X=Pl(H,B,z,k);r.tube(X,Th(k,a*.64,a*.3),m,Eg,Sh);let K=X[M-1],be=P%2?1:2;for(let we=0;we<be;we++){let Se=(we?1:-1)*t.range(.3,.9),G=t.range(1.2,1.9)*n,$=[z[0]+Math.cos(A+Se)*G,z[1]+t.range(.7,1.2)*n,z[2]+Math.sin(A+Se)*G],ge=wh(3),Pe=Pl(K,[(K[0]+$[0])/2,(K[1]+$[1])/2+G*.1,(K[2]+$[2])/2],$,ge);r.tube(Pe,Th(ge,a*.27,.035*n),x,Rg,Sh);let te=Pe[1],ve=A+Se+(h()<.5?-1:1)*h.range(.5,1),Ne=h.range(.8,1.3)*n,Oe=[te[0]+Math.cos(ve)*Ne,te[1]+Ne*h.range(.15,.45),te[2]+Math.sin(ve)*Ne];r.tube([te,[(te[0]+Oe[0])/2,(te[1]+Oe[1])/2+.06*Ne,(te[2]+Oe[2])/2],Oe],[.05*n,.032*n,.014*n],y,Rg)}}let w=[],_=6+Math.floor(t()*2);for(let P=0;P<_;P++){let A=P/_*6.283+t()*.5,L=t.range(-.2,.6),D=Math.sqrt(1-L*L);w.push([Math.cos(A)*D,L,Math.sin(A)*D])}w.push([0,1,0]);let S=[[-d*.3,c,f,1.75*n,1],[d*.3,c,f,1.75*n,1]],E=21+Math.floor(t()*4);for(let P=0;P<E;P++){let A=t()*2-1,L=t.range(-.3,1),D=t()*2-1,O=Math.hypot(A,L,D)||1;A/=O,L/=O,D/=O;let z=w[0],B=-2;for(let k of w){let X=k[0]*A+k[1]*L+k[2]*D;X>B&&(B=X,z=k)}A=A*.5+z[0]*.5,L=L*.5+z[1]*.5,D=D*.5+z[2]*.5,O=Math.hypot(A,L,D)||1,A/=O,L/=O,D/=O;let H=t.range(.8,.95);S.push([A*d*H,c+L*v*H,f+D*g*H,t.range(1,1.3)*n,0])}let R=[1,t.range(.96,1.03),t.range(.97,1.02)],C=i.gblossom;C.setM(e);for(let[P,A,L,D,O]of S){let z=P/d,B=(A-c)/v+.12,H=(L-f)/g,k=Math.hypot(z,B,H)||1;z/=k,B/=k,H/=k,O&&(z=H=0,B=-1);let X=Math.min(1,Math.max(0,(A-(c-v))/(2*v))),K=O?.62:.8+.2*X,be=D/.8*.86;C.bill(P,A,L,z,B,H,be,be,Hi.bcells[Math.floor(t()*Hi.bcells.length)],[R[0]*K,R[1]*K,R[2]*K],Ym,.86)}}var $g={broad:(i,e,t,n)=>(Hi.cells?PS:bS)(i,e,t,n),sakura:(i,e,t,n)=>Hi.bcells?Cg(i,e,t,n):Tg(i,e,t,n),sakuraAve:(i,e,t,n)=>Hi.bcells?Cg(i,e,t,n,!0):Tg(i,e,t,n),pine:MS,cedar:AS,maple:SS,ginkgo:wS,birch:TS,snowcedar:ES},Pg={};function Jg(i,e){let t=i+e,n=Pg[t];if(!n){let s={color:new Jt,foliage:new Jt,leaf:new Jt({uv:!0}),gleaf:new Jt({uv:!0,off:!0}),gblossom:new Jt({uv:!0,off:!0}),bark:new Jt({uv:!0,idx:!0})};$g[i](s,new je,Tt(1e3+e*77+i.length*13),1),n=Pg[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays(),k:s.bark.toArrays()}}return n}function jg(){for(let i in $g)for(let e=0;e<4;e++)Jg(i,e)}function Wn(i,e,t,n,s=1){let r=Jg(t,Math.floor(n()*4)),o=e.clone().scale(new V(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o),r.k.n&&i.bark.stamp(r.k,o)}var IS=new Set(["win0","win2","win5","win6"]),ws=(i,e,t)=>e<t?i+(e<t*.35&&IS.has(i)?"C":"L"):i;function Dl(i,e,t,n,s,r,o){let l=Math.max(1,Math.round(t/3)),a=t/l;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let p=0;p<l;p++){let m=h>0&&r()<.3?ws("win6",r(),o):r()<.2?"win5":"plain";(u>0?Vi:Wi)(i,u*e/2,p*a,(p+1)*a,n[h],n[h+1],m,s)}}function Nl(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Ce.roof);let o=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+o,l,Ce.parapet),i.box(-e/2,n,t-l,e/2,n+o,t,Ce.parapet),i.box(-e/2,n,0,-e/2+l,n+o,t,Ce.parapet),i.box(e/2-l,n,0,e/2,n+o,t,Ce.parapet),s()<.4){let a=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,p]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(a+h-.05,n,u+p-.05,a+h+.05,n+1,u+p+.05,Ce.metal);i.cyl(a,n+1,u,.85,.85,1.3,12,_e("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Ce.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Ce.metal)}function td(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Ce.black);let r="vs"+Math.floor(s()*10);Wi(i.atlas,e-.065,-.88,-.12,t,n,r),Vi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Ce.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Ce.metal)}var z0=_e("#d9d6cf");function LS(i,e,t,n,s,r=""){let o=Math.floor(s()*10),l=r||"vsB"+o,a=Math.min(1.15,(n-t)*.417),u=-.14,h=u-a,p=.1,m=i.color;m.quad([e+p,t,h],[e-p,t,h],[e-p,n,h],[e+p,n,h],z0),m.quad([e-p,n,u],[e+p,n,u],[e+p,n,h],[e-p,n,h],z0),m.quad([e-p,t,h],[e+p,t,h],[e+p,t,u],[e-p,t,u],z0),Wi(i.atlas,e-p,h,u,t,n,l),Vi(i.atlas,e+p,h,u,t,n,l);for(let x of[t+.28,n-.34])i.color.box(e-.03,x,u,e+.03,x+.06,0,Ce.metal)}function Xi(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Ce.concrete,null,{noBottom:!0}),n.type){case"shop":return US(i,e,t,n);case"machiya":return BS(i,e,t,n);case"apt":return OS(i,e,t,n);case"office":return kS(i,e,t,n);case"konbini":return zS(i,e,t,n);case"house":return n.ptype?GS(i,e,t,n):VS(i,e,t,n);case"tower":return XS(i,e,t,n)}}var Qg=new Set(["glass","door","cafe","noren"]),Ig=["shop_p0","shop_p3","shop_p4","shop_p5","shop_p6","shop_p8","shop_p9"],DS=["shop_p2","shop_p2","shop_p7","shop_p10"],NS={shop_p1:"hs9",shop_p3:"hs7",shop_p4:"hs5",shop_p5:"hs_\u82B1\u5C4B",shop_p6:"hsN_\u6D0B\u54C1\u5E97",shop_p8:"hs13",shop_p9:"hs12"},FS={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function US(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.6,m=3,x=p+(o-1)*m,y=Math.max(1,Math.round(s/3)),M=s/y,c=-s/2,f=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],g=0;for(let _=0;_<y;_++){let S=Ug(t,"shop_"+f[_%f.length]);d.push(S),!g&&S.startsWith("shop_glass")&&S.length>10&&(g=+S.slice(10))}for(let _=0;_<y;_++){let S=f[_%f.length];cn(u,c+_*M,c+(_+1)*M,0,p,0,g&&S==="glass"?"shop_glass"+g:d[_]),Qg.has(S)&&pr(i,e,c+(_+.5)*M,1.9,-.8,.7)}let v=t.pick([0,0,1,5,0,1]),b=[0,p];for(let _=1;_<o;_++)b.push(p+_*m);for(let _=1;_<o;_++)for(let S=0;S<y;S++){let E=S%2===1&&t()<.3?5:v;cn(u,c+S*M,c+(S+1)*M,b[_],b[_+1],0,ws("win"+E,t(),a),l)}Dl(u,s,r,b,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Bn(l,.8)),Nl(h,s,r,x,t);let T=s*.94;h.box(-T/2,p-.8,-.3,T/2,p+.08,-.02,Ce.black);let w="hs"+Math.floor(t()*14);if(cn(u,-T/2,T/2,p-.8,p+.08,-.305,FS[g]||w),t()<.55){let _=t.pick(pS),S=p-.85;h.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],_),h.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],Bn(_,.85))}if(o>=2&&t()<.85){let _=(t()<.5?1:-1)*(s/2-.35);td(i,_,p+.3,Math.min(x-.15,p+2.8),t)}for(let _=1;_<o;_++)if(t()<.4){let S=Math.floor(t()*y),E=c+S*M+.15,R=c+(S+1)*M-.15,C=b[_];h.box(E,C-.12,-.9,R,C,0,Ce.parapet),cn(u,E,R,C,C+1,-.9,"rail"),Wi(u,E,-.9,0,C,C+1,"rail"),Vi(u,R,-.9,0,C,C+1,"rail"),t()<.45&&r1(h,E+.1,R-.1,C+1.95,-.55,t),t()<.6&&W0(i,e,(E+R)/2+.6,C,-.75)}else if(t()<.35){let S=Math.floor(t()*y);W0(i,e,c+(S+.5)*M,b[_]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(c+.12,0,-.08,.05,.05,x,6,Ce.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,_e("#d9d9d3")),o>=3&&t()<.18&&e1(i,s,x,r,t)}function BS(i,e,t,n){let{w:s,d:r,floors:o,litP:l}=n,a=i.atlas,u=i.color,h=3.6,p=2.9,m=h+(o-1)*p,x=-s/2,y=Math.max(2,Math.round(s/3)),M=s/y,c=_e("#5c4030"),f=_e("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","door"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),g=n.at!==void 0&&Math.abs(n.at-(n.side<0?139:146))<s/2&&o>=2?n.side:0;g&&(d=["glass","door","glass"]);let v=Tt(Math.floor((i.atlas.e[12]*71.3+i.atlas.e[14]*37.9)*977)^11101),b=t.pick(["shop_p0","shop_p0","shop_p1","shop_p3"]),T=[],w=g?g<0?"shop_p1":"shop_p6":b==="shop_p1"?b:Ig[Math.floor(v()*Ig.length)],_=v.pick(DS),S=v()<.65?v.pick(["shop_p7","shop_p10"]):"";for(let te=0;te<y;te++){let ve=d[te%d.length];T.push(ve==="glass"?w:ve==="door"?_:ve==="cafe"?"shop_p3":(Ne=>ve==="noren"&&S||Ne)(Ug(t,"shop_"+ve)))}let E=t(),R=E<.5?"":d.includes("glass")&&b==="shop_p1"?"hs9":d.includes("cafe")||d.includes("glass")&&b==="shop_p3"?"hs7":"",C=T.includes("shop_p7")?"hs0":T.includes("shop_p10")?"hs3":"",P=g?g>0?"hsN_\u6D0B\u54C1\u5E97":"hs9":d.includes("glass")&&E>=.2?NS[w]||C:d.includes("cafe")&&E>=.5?"hs7":E>=.2?C:"";for(let te=0;te<y;te++){let ve=d[te%d.length];cn(a,x+te*M,x+(te+1)*M,0,h,0,T[te]),Qg.has(ve)&&pr(i,e,x+(te+.5)*M,1.9,-.8,.7)}let A=!!n.plaster,L=n.tint,D=[0,h];for(let te=1;te<o;te++)D.push(h+te*p);let O=A?v.pick(["win7","win7","win9","win10"]):v.pick(["win8","win8","win11"]);for(let te=1;te<o;te++)for(let ve=0;ve<y;ve++){let Ne=A&&ve%2===1&&t()<.3?"win5":O;cn(a,x+ve*M,x+(ve+1)*M,D[te],D[te+1],0,ws(Ne,t(),l),Ne==="win5"?L:un)}{let te=Math.max(1,Math.round(r/3)),ve=r/te;for(let Ne of[-1,1])for(let Oe=0;Oe<D.length-1;Oe++)for(let Ee=0;Ee<te;Ee++){let We=A?Oe>0?ws(t()<.5?"win7":"win6",t(),l):"plain":Oe>0&&t()<.45?ws("win4",t(),l):"woodwall";(Ne>0?Vi:Wi)(a,Ne*s/2,Ee*ve,(Ee+1)*ve,D[Oe],D[Oe+1],We,A&&We[3]!=="7"?L:un)}}u.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],A?Bn(L,.8):_e("#6a5240"));for(let te of[x,-x])u.box(te-.09,0,-.12,te+.09,m,.02,f);if(A)for(let te=2;te<o;te++)u.box(x,D[te]-.1,-.08,-x,D[te]+.06,0,f);let{RC:z,k:B}=t1(i,n,s,r,m,t,!A),H=h+.62,k=1.05,X=.7,K=Math.max(2,Math.round((s+.3)/3)),be=Eh.has("kawaraC")?li("kawaraC"):null;for(let te=0;te<K;te++){let ve=x-.15+(s+.3)*te/K,Ne=x-.15+(s+.3)*(te+1)/K;a.quad([Ne,H-X,-k],[ve,H-X,-k],[ve,H,0],[Ne,H,0],be?un:z,be||B)}u.quad([x-.15,H-X-.03,-k],[-x+.15,H-X-.03,-k],[-x+.15,H-.1,0],[x-.15,H-.1,0],c);let we=Math.min(s*.9,4.4),Se=H-X+.02,G=Se-.62;u.box(-we/2,G,-k-.02,we/2,Se,-k+.07,f);{let te=R?"":"hs"+Math.floor(t()*14);cn(a,-we/2,we/2,G,Se,-k-.025,P||te||"hs"+Math.floor(v()*14))}for(let te of[-we/2+.25,we/2-.25])u.box(te-.03,Se,-k+.02,te+.03,H-X*.1,-k+.06,f);i.sodium.setM(e),u.noShadow=!0;for(let te=0;te<y;te++){let ve=x+(te+.5)*M;u.box(ve-.008,G-.02,-.62,ve+.008,H-X*.6,-.6,f),i.sodium.box(ve-.06,G-.16,-.67,ve+.06,G-.04,-.55,null)}u.noShadow=!1;let $=!1;if(t()<.5||g){$=!0;let te=g?Mg[0]:t.pick(Mg),ve=G-.12;u.quad([s/2-.2,ve-.32,-.95],[-s/2+.2,ve-.32,-.95],[-s/2+.2,ve,-.02],[s/2-.2,ve,-.02],te),u.quad([s/2-.2,ve-.55,-.95],[-s/2+.2,ve-.55,-.95],[-s/2+.2,ve-.32,-.95],[s/2-.2,ve-.32,-.95],Bn(te,.85))}if(o>=2&&(!A||t()<.5)){let te=D[1]+.42,ve=-.5,Ne=x+.12,Oe=-x-.12;u.box(Ne,te-.07,ve-.04,Oe,te,0,c);for(let Ee=0;Ee<y;Ee++)cn(a,x+.12+(s-.24)*Ee/y,x+.12+(s-.24)*(Ee+1)/y,te,te+.95,ve,"wrail");Wi(a,Ne,ve,0,te,te+.95,"wrail"),Vi(a,Oe,ve,0,te,te+.95,"wrail"),i.leaf.setM(e);for(let Ee=0;Ee<y;Ee++)if(t()<.7){let We=x+(Ee+.5)*M,ne=Math.min(M*.7,1.6);u.noShadow=!0,u.box(We-ne/2,te+.72,ve-.2,We+ne/2,te+.92,ve-.02,_e("#7a5236")),u.noShadow=!1;for(let de=We-ne/2+.2;de<We+ne/2-.1;de+=.32)Gi(i,[de,te+.95,ve-.11],de,te+1.05,ve-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[te+.9,te+1.3])}}if(o>=2&&(t()<.9||g)){let te=t()<.5?1:-1,ve=g||te;LS(i,ve*(s/2-.35),H+.1,Math.min(m-.2,H+2.8),t,g?g<0?"vsB10":"vsB0":""),s>7&&t()<.35&&td(i,-ve*(s/2-.35),h+.8,Math.min(m-.2,h+2.5),t)}{let te=d.includes("noren")||d.includes("cafe"),ve=$?0:te?2:t()<.3?1:0;i.sodium.setM(e);for(let Ne=0;Ne<ve;Ne++){let Oe=ve===2?(Ne?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),Ee=G-.5;u.noShadow=!0,u.box(Oe-.006,Ee+.42,-k+.12,Oe+.006,G,-k+.14,f),i.sodium.cyl(Oe,Ee,-k+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(Oe,Ee+.18,-k+.13,.16,.11,.18,10,null,!1),u.cyl(Oe,Ee-.035,-k+.13,.1,.1,.04,8,f),u.cyl(Oe,Ee+.355,-k+.13,.1,.1,.04,8,f),u.noShadow=!1}}let ge=1e9,Pe=1e9;w==="shop_p1"&&d.includes("glass")&&(ge=x+(d.indexOf("glass")+.5)*M,wg(i,e,ge,-.62,t)),g<0&&y>=3&&(Pe=x+2.5*M,wg(i,e,Pe,-.62,t));for(let te=x+.45+t()*.4;te<-x-.3;te+=.7+t()*1.3)t()<.7&&Math.abs(te-ge)>.95&&Math.abs(te-Pe)>.95&&$0(i,e,t,te,-.4);i.color.setM(e),i.atlas.setM(e)}function e1(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,l=n*.3;for(let a of[-r*.35,r*.35])i.color.box(a-.06,t,l,a+.06,t+1.2+o,l+.12,Ce.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+o,l+.3,Ce.metal),cn(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,l+.115,"bb"+Math.floor(s()*4))}function OS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.2,m=2.95,x=p+(o-1)*m,y=Math.max(2,Math.round(s/3.2)),M=s/y,c=-s/2,f=[0,p];for(let v=1;v<o;v++)f.push(p+v*m);for(let v=0;v<y;v++)cn(u,c+v*M,c+(v+1)*M,0,p,0,v===Math.floor(y/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),v===Math.floor(y/2)?un:l);let d="bal"+Math.floor(t()*3),g=Bn(l,.97);for(let v=1;v<o;v++){let b=f[v];for(let T=0;T<y;T++)cn(u,c+T*M,c+(T+1)*M,b,f[v+1],0,ws("win2",t(),a),l);h.box(c,b-.15,-1.3,-c,b,0,g),h.box(c,b,-1.3,-c,b+1.1,-1.18,g,null,{noBottom:!0});for(let T=0;T<y;T++)cn(u,c+T*M,c+(T+1)*M,b,b+1.1,-1.305,d,l);for(let T=0;T<=y;T++)h.box(c+T*M-.05,b,-1.18,c+T*M+.05,b+2.4,0,Bn(l,.92));for(let T=0;T<y;T++){let w=t(),_=c+T*M+.2,S=c+(T+1)*M-.2;w<.34?r1(h,_,S,b+2.02,-.98,t):w<.46&&ZS(h,_+.25,Math.min(S-.25,_+1.9),b+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<y;T++)t()<.55&&(W0(i,e,c+(T+.78)*M,b,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(c,x-.15,-1.3,-c,x,0,g),Dl(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Bn(l,.8)),Nl(h,s,r,x,t,!0)}function kS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=4,m=3.4,x=p+(o-1)*m,y=Math.max(2,Math.round(s/3)),M=s/y,c=-s/2,f=[0,p];for(let d=1;d<o;d++)f.push(p+d*m);for(let d=0;d<y;d++)cn(u,c+d*M,c+(d+1)*M,0,p,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let g=0;g<y;g++)cn(u,c+g*M,c+(g+1)*M,f[d],f[d+1],0,ws("win3",t(),a),l);Dl(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Bn(l,.8)),Nl(h,s,r,x,t,!0),t()<.6&&td(i,(t()<.5?1:-1)*(s/2-.3),p+.4,Math.min(x-.3,p+4.5),t),t()<.3&&e1(i,s,x,r,t)}function zS(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,l=i.color,a=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),p=s/h;for(let m=0;m<h;m++)cn(o,u+m*p,u+(m+1)*p,0,3.4,0,"shop_konbini"),pr(i,e,u+(m+.5)*p,1.9,-.8,.8);l.box(u,3.4,-.35,-u,a,0,Ce.white),cn(o,u,-u,3.4,a,-.355,"konbini_band"),Dl(o,s,r,[0,a],_e("#f2f2ee"),t,0),Nl(l,s,r,a,t)}var Lg=(i,e)=>e?_e("#7a5a42"):i.tint,H0=null,HS=()=>{if(!H0){let i=li("kawara"),e=16/272*(i.u1-i.u0);H0={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return H0};function t1(i,e,t,n,s,r,o){let l=i.atlas,a=i.color,u=!!e.snow,h=u?.75:.6,p=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),m=u?li("white"):HS(),x=u?_e("#f3f5fa"):_e("#c8ccd8"),y=u?_e("#e4e8f0"):_e("#3d4456"),M=u?1:Math.max(2,Math.round((t+2*h)/3)),c=g=>-t/2-h+(t+2*h)*g/M;for(let g=0;g<M;g++){let v=c(g),b=c(g+1);l.quad([b,s-.25,-h],[v,s-.25,-h],[v,s+p,n/2],[b,s+p,n/2],x,m),l.quad([v,s-.25,n+h],[b,s-.25,n+h],[b,s+p,n/2],[v,s+p,n/2],x,m)}let f=(g,v,b,T,w,_)=>{_<0?(a.quad([v,b,w],[g,b,w],[g,T,w],[v,T,w],y),a.quad([g,b,w],[v,b,w],[v,b,w+.08],[g,b,w+.08],y)):(a.quad([g,b,w],[v,b,w],[v,T,w],[g,T,w],y),a.quad([v,b,w],[g,b,w],[g,b,w-.08],[v,b,w-.08],y))};for(let[g,v]of[[-h,0],[n+h,n]])f(-t/2-h,t/2+h,s-.42,s-.22,g<0?g-.04:g+.04,g<0?-1:1),a.quad(g<0?[-t/2-h,s-.26,g]:[t/2+h,s-.26,g],g<0?[t/2+h,s-.26,g]:[-t/2-h,s-.26,g],g<0?[t/2+h,s-.26,v]:[-t/2-h,s-.26,v],g<0?[-t/2-h,s-.26,v]:[t/2+h,s-.26,v],Bn(Lg(e,o),.62));for(let g of[-1,1]){let v=g*(t/2+h+.02),b=.2,T=[v,s-.25,-h],w=[v,s+p,n/2],_=[v,s-.25,n+h],S=E=>[E[0],E[1]-b,E[2]];g>0?(a.quad(S(w),S(T),T,w,y),a.quad(S(_),S(w),w,_,y)):(a.quad(S(T),S(w),w,T,y),a.quad(S(w),S(_),_,w,y))}let d=Lg(e,o);if(Ko(a,[-t/2,s,0],[-t/2,s,n],[-t/2,s+p-.1,n/2],d),Ko(a,[t/2,s,n],[t/2,s,0],[t/2,s+p-.1,n/2],d),a.box(-t/2-h,s+p-.05,n/2-.15,t/2+h,s+p+.18,n/2+.15,u?_e("#f6f7fb"):_e("#3d4456")),u){a.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,_e("#eef1f7")),a.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,_e("#eef1f7"));for(let g=-t/2;g<t/2;g+=.45+r()*.5)a.cyl(g,s-.42-.35,-h+.02,0,.04,.35,4,_e("#dfe8f3"),!1)}return{RC:x,k:m,fascia:f,nS:M}}function VS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=2.9,m=o*p,x=-s/2,y=t()<.5,M=Math.max(2,Math.round(s/3)),c=s/M,f=[];for(let w=0;w<=o;w++)f.push(w*p);let d=y?un:l;for(let w=0;w<o;w++)for(let _=0;_<M;_++){let S=y?"win4":"win0";w===0&&_===0?S="shop_house":S=ws(S,t(),a),cn(u,x+_*c,x+(_+1)*c,f[w],f[w+1],0,S,S==="shop_house"?un:d)}Dl(u,s,r,f,y?_e("#9a7a62"):l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],Bn(l,.75));let{RC:g,k:v,fascia:b,nS:T}=t1(i,n,s,r,m,t,y);if(o>1){let w=p+.05;for(let _=0;_<T;_++){let S=-s/2-.1+(s+.2)*_/T,E=-s/2-.1+(s+.2)*(_+1)/T;u.quad([E,w-.3,-.75],[S,w-.3,-.75],[S,w+.05,0],[E,w+.05,0],g,v)}b(-s/2-.1,s/2+.1,w-.42,w-.28,-.79,-1)}if(n.fence){let w=-n.fence,_=1.2;for(let[S,E]of[[-s/2,-1],[.4,s/2]])h.box(S,0,w-.08,E,_,w+.08,Ce.concrete),cn(u,S,E,0,_,w-.085,"block")}}var G0={byZone:null};function n1(i){let e={};for(let t of i)for(let n of t.zones)(e[n]||(e[n]=[])).push(t);G0.byZone=e}function Rh(i,e){let t=G0.byZone&&G0.byZone[i];return t?t[Math.floor(e()*t.length)]:null}var Cl={u0:0,u1:0,v0:0,v1:0},us=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Dg=(i,e)=>{for(let t=0;t<4;t++)us[t][0]=i[e+t*3],us[t][1]=i[e+t*3+1],us[t][2]=i[e+t*3+2]},WS=(i,e,t)=>{let n=Math.sin(e*12.9898+t*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;return 24+Math.floor((n-Math.floor(n))*231)};function GS(i,e,t,n){let s=n.ptype,r=i.atlas,o=i.color,l=li(s.f),a=li(s.s);for(let u of s.pieces){let h=u.t==="f"?l:a,p=h.u1-h.u0,m=h.v1-h.v0;Cl.u0=h.u0+u.uv[0]*p,Cl.u1=h.u0+u.uv[2]*p,Cl.v1=h.v1-u.uv[1]*m,Cl.v0=h.v1-u.uv[3]*m,Dg(u.p,0),u.lit&&r.hasLit&&(r.litV=s.day?6:WS(r,u.p[0]+u.p[2],u.p[1])),r.quad(us[0],us[1],us[2],us[3],un,Cl),r.litV=0}o.noShadow=!0;for(let u of s.soffits)Dg(u,0),o.quad(us[0],us[1],us[2],us[3],s.soffit);if(o.noShadow=!1,n.fence){let u=-n.fence,h=1.1,p=s.ww+1;for(let[m,x]of[[-p/2,-1],[.4,p/2]])o.box(m,0,u-.08,x,h,u+.08,Ce.concrete),cn(r,m,x,0,h,u-.085,"block")}}function XS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.4,m=o*p,x=Math.max(2,Math.round(s/6)),y=s/x,M=-s/2,c=t()<.5?"win3":"win2",f=[];for(let v=0;v<=o;v++)f.push(v*p);for(let v=0;v<o;v++)for(let b=0;b<x;b++)cn(u,M+b*y,M+(b+1)*y,f[v],f[v+1],0,ws(c,t(),a),l);let d=Math.max(1,Math.round(r/6)),g=r/d;for(let v of[-1,1])for(let b=0;b<o;b++)for(let T=0;T<d;T++)(v>0?Vi:Wi)(u,v*s/2,T*g,(T+1)*g,f[b],f[b+1],ws(c,t(),a),l);Nl(h,s,r,m,t,!0)}function nd(i,e,t,n){let s=i.color,r=_e("#8d9096"),o=_e("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,a=-n+.62;s.box(-.14,5.08,l,.14,5.56,a,o);let u=t*.141;i.atlas.setM(e),(t>0?Vi:Wi)(i.atlas,u,l,a,5.08,5.56,"signal");let h=t>0?a:l,p=t>0?-1:1;for(let x=0;x<3;x++){let y=h+p*(.2+x*.4);s.box(t>0?.14:-.36,5.47,y-.15,t>0?.36:-.14,5.5,y+.15,o)}let m=h+p*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,m-.11,t>0?.16:-.145,5.43,m+.11,un)}function i1(i,e,t,n){let s=i.color,r=_e("#3d6ea8"),o=_e("#e8eef2"),l=_e("#c7c5bf"),a=5.35;s.setM(e),s.box(-1.1,a-.65,-t,1.1,a,t,r);for(let u of[-1.1,1])s.box(u,a,-t,u+.1,a+1.1,t,o),s.box(u-.02,a+1.1,-t,u+.12,a+1.18,t,r);i.atlas.setM(e),Wi(i.atlas,-1.105,-2.2,2.2,a-.62,a-.06,n),Vi(i.atlas,1.105,-2.2,2.2,a-.62,a-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),p=u*(t-.15),m=Math.min(h,p),x=Math.max(h,p);s.box(-.45,.15,m+.3,.45,a-.65,x-.3,r);let y=20,M=(a-.15)/y;for(let c=0;c<y;c++)s.box(1.1+c*.3,.15,m,1.1+(c+1)*.3,a-(c+1)*M+.04,x,l);s.box(1.1,a-.1,m-.05,1.1+y*.3,a-.02,m+.05,r)}}function s1(i,e,t,n,s,r,o){let l=i.color,a=1.22,u=3.55,h=6.7,p=_e("#c8c5bd"),m=_e("#ebe8de"),x=_e("#7a5a42"),y=_e("#5e4433"),M=_e("#4d5468");l.setM(e),l.box(t,-1.4,u,n,a,h,p,null,{noBottom:!0}),l.box(t,a,u,n,a+.025,u+.32,m),l.box(t,a,u+.6,n,a+.04,u+.9,Ce.yellow);let c=Math.sign(s-(t+n)/2),f=c>0?n:t,d=f+c*6.2,g=u+.9,v=h-.2,b=(B,H,k)=>[B,H,k];c>0?l.quad(b(d,.1,v),b(d,.1,g),b(f,a,g),b(f,a,v),p):l.quad(b(d,.1,g),b(d,.1,v),b(f,a,v),b(f,a,g),p);for(let B of[g,v]){let H=_e("#9aa0a6");l.rod([d,.1+.9,B],[f,a+.9,B],.03,.03,5,H);for(let k=0;k<=3;k++){let X=d+(f-d)*k/3,K=.1+(a-.1)*k/3;l.box(X-.03,K,B-.03,X+.03,K+.9,B+.03,H)}}i.atlas.setM(e);for(let B=t;B<n-.01;B+=3){let H=Math.min(n,B+3);i.atlas.quad([B,-.6,h+.004],[H,-.6,h+.004],[H,a,h+.004],[B,a,h+.004],_e("#d8d4ca"),li("concrete"))}l.setM(e);for(let B=t+.4;B<n;B+=2)l.box(B-.05,a,h-.12,B+.05,a+1,h-.02,_e("#8f949a"));for(let B of[.45,.95])l.box(t,a+B,h-.1,n,a+B+.06,h-.04,_e("#8f949a"));let T=n-t,w=B=>c>0?n-T*B:t+T*B,_=w(.47),S=_-2.3,E=_+2.3,R=u+1.35,C=h-.25;l.box(S,a,C-.12,E,a+2.45,C,x);for(let B of[S,E-.12])l.box(B,a,R+.6,B+.12,a+2.45,C,y);for(let B of[S,E-.12])l.box(B,a,R,B+.12,a+2.45,R+.12,y);l.quad([E+.4,a+2.5,R-.45],[S-.4,a+2.5,R-.45],[S-.4,a+2.85,C+.35],[E+.4,a+2.85,C+.35],M),l.quad([S-.4,a+2.42,R-.45],[E+.4,a+2.42,R-.45],[E+.4,a+2.77,C+.35],[S-.4,a+2.77,C+.35],_e("#3a3f50")),l.box(S+.3,a+.42,C-.55,E-.3,a+.48,C-.15,_e("#8a6a4a"));for(let B of[S+.4,E-.5])l.box(B,a,C-.5,B+.08,a+.42,C-.2,Ce.metal);i.atlas.setM(e),i.atlas.quad([_-1.1,a+1.55,C+.005],[_+1.1,a+1.55,C+.005],[_+1.1,a+2.03,C+.005],[_-1.1,a+2.03,C+.005],un,li("ekiplate"+r));let P=w(.2),A=u+1.6,L=1.25,D=a+1.25,O=D+.95;l.setM(e);for(let B of[P-L+.12,P+L-.12])l.cyl(B,a,A,.05,.05,O-a+.05,8,_e("#6b7078"));l.box(P-L,D-.03,A-.03,P+L,O+.03,A+.03,_e("#3a3d42")),i.atlas.setM(e),i.atlas.quad([P-L,D,A+.035],[P+L,D,A+.035],[P+L,O,A+.035],[P-L,O,A+.035],un,li("ekimei"+r)),i.atlas.quad([P+L,D,A-.035],[P-L,D,A-.035],[P-L,O,A-.035],[P+L,O,A-.035],un,li("ekimei"+r)),l.setM(e);let z=_-c*4.2;l.box(z-.9,a+.42,h-1.25,z+.9,a+.47,h-.85,_e("#3b6ea8")),l.box(z-.9,a+.47,h-.88,z+.9,a+.9,h-.83,_e("#3b6ea8"));for(let B of[z-.75,z+.7])l.box(B,a,h-1.2,B+.06,a+.42,h-.9,Ce.metal);for(let B=t+3;B<n-1;B+=9)Il(i,Bg(e,B,a,h-.45))}var qS=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(_e),YS=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(_e);function r1(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Ce.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let l=.28+r()*.34,a=.36+r()*.42,u=r.pick(qS),h=s+(r()-.5)*.06;i.quad([o+l,n-a,h],[o,n-a,h],[o,n-.02,h],[o+l,n-.02,h],u),i.quad([o,n-a,h+.01],[o+l,n-a,h+.01],[o+l,n-.02,h+.01],[o,n-.02,h+.01],Bn(u,.85)),r()<.4&&i.box(o+l*.45,n-.02,h-.02,o+l*.55,n+.06,h+.02,_e("#d8d8d0")),o+=l+.06+r()*.22}}function ZS(i,e,t,n,s,r){let o=r.pick(YS),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,o),i.box(e,n-.72,s-l,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,Bn(o,.86))}function o1(i,e){let t=i.color,n=_e("#a19f97"),s=_e("#6b4a35"),r=_e("#4f4a44"),o=_e("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,_e("#8d8b84"));for(let l of[-.52,.48])for(let a of[-.36,.32])t.box(l,.32,a,l+.05,1.5,a+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,Bn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,_e("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,_e("#5b8d3d"))}function a1(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Ce.black:Ce.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Ce.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Ce.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Ce.black);t.box(-.78,-.9,-.34,.3,0,.34,Ce.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,_e("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Ce.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new je().multiplyMatrices(e,new je().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Ce.black:Ce.yellow)}t.setM(e),i.atlas.setM(e),cn(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function l1(i,e){let t=i.color;t.setM(e);let n=Ce.stone,s=Bn(Ce.stone,1.06),r=Bn(Ce.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),Zo(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),Zo(t,1.48,1.54,.25,.35,r,!1,!0),Zo(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,un),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,un)}function id(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Ce.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Ce.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Ce.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Ce.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Ce.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Ce.vermilion)}function c1(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,_e("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,_e("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,_e("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,_e("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Ce.metal),n.box(1.1,0,.3,1.2,.42,.55,Ce.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Ce.metal),i.atlas.setM(e),Wi(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Vi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}var KS=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],$S=_e("#a7a7aa"),JS=[1,.95,.9],Ng={},jS=()=>$o>.7?12:6;function u1(i,e){let t=i*16+e,n=Ng[t];if(!n){let s=new Jt({uv:!0}),r=Bn($S,JS[i]),o=.42,l=.25,a=.075,u=o-l,h=1-a,p=o+(l-o)*h,m=p-a,x=(y,M,c)=>s.vtx(y[0],y[1],y[2],M[0],M[1],M[2],c,0,r);for(let y of KS){let M=0,c=1,f=0;Math.abs(y[1])>.99&&(M=1,c=0);let d=y[1]*f-y[2]*c,g=y[2]*M-y[0]*f,v=y[0]*c-y[1]*M,b=Math.hypot(d,g,v);d/=b,g/=b,v/=b;let T=g*y[2]-v*y[1],w=v*y[0]-d*y[2],_=d*y[1]-g*y[0],S=[];for(let R=0;R<=e;R++){let C=R/e*Math.PI*2,P=Math.cos(C),A=Math.sin(C);S.push([d*P+T*A,g*P+w*A,v*P+_*A])}let E=(R,C,P)=>[y[0]*P+R[0]*C,y[1]*P+R[1]*C,y[2]*P+R[2]*C];for(let R=0;R<e;R++){let C=S[R],P=S[R+1],A=[C[0]+y[0]*u,C[1]+y[1]*u,C[2]+y[2]*u],L=[P[0]+y[0]*u,P[1]+y[1]*u,P[2]+y[2]*u],D=E(C,o,0),O=E(P,o,0),z=E(P,p,h),B=E(C,p,h),H=E(P,m,1),k=E(C,m,1);x(D,A,0),x(z,L,h),x(O,L,0),x(D,A,0),x(B,A,h),x(z,L,h),x(B,A,h),x(H,y,1),x(z,L,h),x(B,A,h),x(k,y,1),x(H,y,1),x(y,y,1),x(H,y,1),x(k,y,1)}}n=Ng[t]=s.toArrays()}return n}var QS=new vn,V0=new Kn,e3=new V,t3=new V;function sd(i,e,t,n,s,r,o=0,l=.6,a=0){s()<l?V0.set((s()-.5)*.4,s()*6.283,(s()-.5)*.4):V0.set(s()*6.283,s()*6.283,s()*6.283);let u=new je().compose(e3.set(e,t,n),QS.setFromEuler(V0),t3.set(r,r,r));u.groundY=o;let h=i.tetra,p=h.n;h.stamp(u1(Math.floor(s()*3),jS()),u);for(let m=p*2+1;m<h.n*2;m+=2)h.U[m]=a}function h1(){for(let i=0;i<3;i++)for(let e of[6,12])u1(i,e)}function f1(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,_e("#8f8a80"),_e("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Ce.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Ce.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Ce.black),t.cyl(0,18.6,0,1,.25,1.2,12,Ce.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,un)}function d1(i,e,t){let n=i.color;n.setM(e);let s=t.pick([_e("#f4f4f0"),_e("#3b6ea5"),_e("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Ko(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Ko(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Ce.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Ce.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,_e("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Ce.metal)}function p1(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Ce.stone),n.box(-.55,.5,.9,.55,1.5,1.8,_e("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],_e("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],_e("#4d5468")),id(i,Bg(e,0,0,-.3,Math.PI/2),.75,2.2)}var Qo=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new fe(e):e)),oe={zenith:new fe,horizon:new fe,sunCol:new fe,sunI:1,hemiSky:new fe,hemiGround:new fe,hemiI:1,fog:new fe,cLit:new fe,cShade:new fe,cRim:new fe,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new V,moonDir:new V,lightDir:new V,sunEl:0};function g1(i){let e=0;for(;e<Qo.length-2&&Qo[e+1][0]<=i;)e++;let t=Qo[e],n=Qo[e+1],s=yl(Zt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,l)=>l.copy(t[o]).lerp(n[o],s);r(1,oe.zenith),r(2,oe.horizon),r(3,oe.sunCol),oe.sunI=yt(t[4],n[4],s),r(5,oe.hemiSky),r(6,oe.hemiGround),oe.hemiI=yt(t[7],n[7],s),r(8,oe.fog),r(9,oe.cLit),r(10,oe.cShade),r(11,oe.cRim),oe.night=yt(t[12],n[12],s),oe.warm=yt(t[13],n[13],s),oe.sunEl=v1(i,oe.sunDir,oe.moonDir,oe.lightDir)}function v1(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Zt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var i3=new V,s3=new V;function od(i,e){return v1((i%1+1)%1,i3,s3,e),e}var m1={zenith:[new fe("#7b8594"),new fe("#141a28")],horizon:[new fe("#b5bcc6"),new fe("#283042")],fog:[new fe("#a8b0ba"),new fe("#232b3c")],hemiSky:[new fe("#aab3bf"),new fe("#3c4866")],hemiGround:[new fe("#8b8983"),new fe("#1e2030")],cLit:[new fe("#d0d5dc"),new fe("#2c3240")],cShade:[new fe("#7c8593"),new fe("#151922")]},rd=new fe;function x1(i,e){if(oe.overcast=i,oe.rain=e,oe.bright=(1-oe.night)*(1-oe.warm)*(1-i),i<=.001)return;let t=oe.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])rd.copy(m1[n][0]).lerp(m1[n][1],t),oe[n].lerp(rd,i*(n==="cLit"||n==="cShade"?.75:.85));oe.sunI*=1-.82*i,oe.warm*=1-i,oe.cRim.multiplyScalar(1-i),oe.sunCol.lerp(rd.setRGB(.85,.87,.9),i*.6)}function y1(){let i=new ft({side:Vn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:oe.zenith},uHorizon:{value:oe.horizon},uSunDir:{value:oe.sunDir},uMoonDir:{value:oe.moonDir},uNoiseTex:Ie.uNoiseTex,uSunCol:{value:oe.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new fe},uOvercast:{value:0},uDeckLit:{value:new fe},uDeckDark:{value:new fe},uMilky:{value:0},uMetA:{value:new V(0,1,0)},uMetB:{value:new V(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${Ii}
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
      }`}),e=new ht(new Qa(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function r3(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let g=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+g*.5,(i()-.5)*.2,g])}let l=e?6:2,a=s*.82,u=.1+.09;for(let d=0;d<l;d++){let g=Math.max(1,Math.round(a/.11));for(let v=0;v<g;v++){let b=(g===1?0:v/(g-1)-.5)*a+(i()-.5)*.05+r*d;t.push([b,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,a*=e?.8:.66}let h=t.slice();for(let d of h){if(t.length>84)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.82,d[1]+Math.sin(b)*d[3]*.82,d[2]+.04,T])}}let p=t.slice(h.length);for(let d of h){if(d[1]<.1+.12||t.length>104)continue;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.3+i()*2.5,T=d[3]*(.3+i()*.4),w=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(b)*T,d[1]+Math.sin(b)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-w*.6,w])}}for(let d of p){if(t.length>124)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.85,d[1]+Math.sin(b)*d[3]*.85,d[2]+.02,T])}}let m=t.slice(0,128),x=1e9,y=-1e9,M=-1e9;for(let d of m)x=Math.min(x,d[0]-d[3]*1.12),y=Math.max(y,d[0]+d[3]*1.12),M=Math.max(M,d[1]+d[3]*1.12);let c=Math.min(1,.92/(y-x),(.95-.1)/(M-.1)),f=(x+y)/2;for(let d of m)d[0]=(d[0]-f)*c,d[1]=.1+(d[1]-.1)*c,d[3]*=c;return m}function _1(i){let t={value:Array.from({length:128},()=>new mt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new ft({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Ie.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Ii}
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
      }`,depthTest:!1,depthWrite:!1,blending:oi}),r=new Yt(1024,1024,{generateMipmaps:!0,minFilter:In,magFilter:kt,depthBuffer:!1}),o=new ft({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:Ie.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${Ii}
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
      }`,depthTest:!1,depthWrite:!1,blending:oi}),l=new ht(new rn(1,1),s),a=new Pr,u=new Us;a.add(l);let h=new Yt(1024*2,1024*2,{generateMipmaps:!0,minFilter:In,magFilter:kt}),p=i.getRenderTarget(),m=i.autoClear,x=Tt(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let y=[];for(let M=0;M<4;M++){let c=M%2===0,f=r3(x,c);f.forEach((d,g)=>t.value[g].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=f.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=M*13.7,l.material=s,i.setRenderTarget(r),i.render(a,u),l.material=o,h.viewport.set(M%2*1024,Math.floor(M/2)*1024,1024,1024),i.setRenderTarget(h),i.render(a,u),y.push({cell:[M%2,Math.floor(M/2)],tall:c})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=m,i.setRenderTarget(p),s.dispose(),o.dispose(),r.dispose(),l.geometry.dispose(),{tex:h.texture,kinds:y,rt:h}}function b1(i){let e=Tt(5),t=22,n=[],s=new rn(1,1);s.translate(0,.5,0);let r=new Pn(new Float32Array(t*4),4),o=new Pn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let l=new ft({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new fe},uShade:{value:oe.cShade},uRim:{value:oe.cRim},uHaze:{value:oe.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),a=new rs(s,l,t);a.frustumCulled=!1,a.renderOrder=-5;for(let y=0;y<t;y++){let M=y<12,c=i.kinds[(y*3+(M?0:1))%i.kinds.length],f=M?c.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:y/t*Math.PI*2+e.range(-.15,.15),d:M?e.range(2600,3400):e.range(1300,2200),base:M?e.range(-60,60):e.range(260,700),size:f,cell:c.cell,haze:M?.45:.18})}let u=new je,h=new vn,p=new V,m=new V,x=new V(0,1,0);return{group:a,update(y,M){let c=Math.atan2(oe.lightDir.x,oe.lightDir.z);for(let d of n)d.phi+=M*1.2/d.d;n.slice().sort((d,g)=>g.d-d.d).forEach((d,g)=>{p.set(y.x+Math.sin(d.phi)*d.d,y.y+d.base,y.z+Math.cos(d.phi)*d.d),h.setFromAxisAngle(x,d.phi+Math.PI),m.set(d.size,d.size,1),u.compose(p,h,m),a.setMatrixAt(g,u);let v=c-d.phi;v=Math.atan2(Math.sin(v),Math.cos(v));let b=Math.max(0,Math.min(1,(v+.35)/.7)),T=1-b*b*(3-2*b);r.setXYZW(g,d.cell[0],d.cell[1],T,d.haze),o.setX(g,.35+.9*Math.pow(Math.max(Math.cos(v),0),3)*(.4+oe.warm))}),a.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,l.uniforms.uOpacity.value=(1-oe.night*.35)*(1-oe.overcast*.55)*(1-.85*oe.rain),l.uniforms.uLit.value.copy(oe.cLit).multiplyScalar(1+.35*oe.bright)}}}function M1(){let i=new fn;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],l=[];for(let p=0;p<=360;p++){let m=p/360*Math.PI*2,x=Math.sin(m)*t.R,y=Math.cos(m)*t.R,M=lh(p/360*t.k*4,40+n*9),c=Math.pow(Math.max(0,M-.18)/.82,1.6),f=t.h*(.12+c);if(r.push(x,-60,y,x,-60+f,y),o.push(0,p/360,1,p/360),p<360){let d=p*2;l.push(d,d+1,d+2,d+1,d+3,d+2)}}let a=new vt;a.setAttribute("position",new $e(r,3)),a.setAttribute("hf",new $e(o,2)),a.setIndex(l);let u=new ft({side:bn,fog:!1,uniforms:{uCol:{value:new fe(t.col)},uHaze:{value:oe.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Ie.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Ii}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new ht(a,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-oe.night))*(1-.35*oe.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var Xr="./assets/",S1=`
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
}`,Hs=[.299,.587,.114],ea=[.03,.014,-.018],o3=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),_i=[0,0,0],ad=(i,e,t,n,s,r)=>{let o=i-e*(1-n)-t*n*s;return Math.min(.985,Math.max(0,o3(Math.min(1,Math.max(0,n+(o-n)/r)))))};function Ul(i,e,t,n,s){let r=i.toneMappingExposure.value,o=i.uSat.value,l=i.uLo.value,a=i.uDay.value,u=e/255,h=t/255,p=n/255,m=l.x*Hs[0]+l.y*Hs[1]+l.z*Hs[2],x=(ea[0]*Hs[0]+ea[1]*Hs[1]+ea[2]*Hs[2])*a,y=(u*Hs[0]+h*Hs[1]+p*Hs[2]-m)/(1-m+x);_i[0]=ad(u,l.x,ea[0],y,a,o),_i[1]=ad(h,l.y,ea[1],y,a,o),_i[2]=ad(p,l.z,ea[2],y,a,o);let M=.76,c=.24,f=Math.max(_i[0],_i[1],_i[2]);if(f>=M){let v=c*c/(1-f)-c+M,b=1-1/(.15*(v-f)+1),T=v/f;for(let w=0;w<3;w++)_i[w]=(_i[w]-b*f)/Math.max(1-b,.001)*T}let d=Math.min(_i[0],_i[1],_i[2]),g=d<.04?Math.sqrt(Math.max(d,0)/6.25)-d:.04;return s.setRGB((_i[0]+g)/r,(_i[1]+g)/r,(_i[2]+g)/r)}var w1={value:new Le(1280,720)};function T1(i){i.getDrawingBufferSize(w1.value)}function E1(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:w1}}async function ud(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),l;try{l=await new nl().loadAsync(o)}catch(a){throw URL.revokeObjectURL(o),a}return l.onUpdate=()=>{URL.revokeObjectURL(o),l.onUpdate=null},l.colorSpace=ai,l.generateMipmaps=!0,l.minFilter=In,l.magFilter=kt,{tex:l,file:n}}async function qr(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function A1(i,e=15e3){let t=Xr+"clouds/";return qr((async()=>{let n=await fetch(t+"clouds.json");if(!n.ok)throw new Error("clouds.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(l=>l.u1>l.u0&&l.v1>l.v0&&l.w>0&&l.h>0&&l.lum&&l.lum[1]>l.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await ud(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function R1(i,e=15e3){let t=Xr+"fronts/";return qr((async()=>{let n=await fetch(t+"fronts2.json");if(!n.ok)throw new Error("fronts2.json "+n.status);let s=await n.json(),r=(s.tiles||[]).filter(h=>h.name&&h.w>0&&h.h>0&&h.x>=0&&h.x+h.w<=1&&h.y>=0&&h.y+h.h<=1&&h.ey+h.h<=1);if(!r.length)throw new Error("no fronts listed");let o=s.files&&s.files[i]?i:"hi",l=await fetch(t+s.files[o]);if(!l.ok)throw new Error(s.files[o]+" "+l.status);let a=await l.blob();if(s.bytes&&s.bytes[o]&&a.size!==s.bytes[o])throw new Error(s.files[o]+" is "+a.size+" bytes, not "+s.bytes[o]);let u=await createImageBitmap(a);if(s.size&&s.size[o]&&(u.width!==s.size[o][0]||u.height!==s.size[o][1]))throw new Error(s.files[o]+" has the wrong size");return{img:u,tiles:r,tier:o}})(),e,"painted fronts unavailable, keeping the procedural shopfronts:")}async function C1(i,e=15e3){let t=Xr+"houses/";return qr((async()=>{let n=await fetch(t+"houses.json");if(!n.ok)throw new Error("houses.json "+n.status);let s=await n.json(),r=s.files&&s.files[i]?i:"hi",o=s.tiles&&s.tiles[r]||[],l=(s.types||[]).filter(p=>p.f&&p.s&&p.pieces&&p.pieces.length&&o.some(m=>m.name===p.f)&&o.some(m=>m.name===p.s));if(!l.length||!(s.rows&&s.rows[r]>0))throw new Error("no houses listed");let a=await fetch(t+s.files[r]);if(!a.ok)throw new Error(s.files[r]+" "+a.status);let u=await a.blob();if(s.bytes&&s.bytes[r]&&u.size!==s.bytes[r])throw new Error(s.files[r]+" is "+u.size+" bytes, not "+s.bytes[r]);let h=await createImageBitmap(u,{premultiplyAlpha:"none"});if(s.size&&s.size[r]&&(h.width!==s.size[r][0]||h.height!==s.size[r][1]))throw new Error(s.files[r]+" has the wrong size");if(o.some(p=>!(p.w>0&&p.h>0&&p.x>=0&&p.x+p.w<=h.width&&p.ey+p.h<=h.height)))throw new Error("a tile lies outside the sheet");return{img:h,tiles:o,types:l,rows:s.rows[r],tier:r}})(),e,"painted houses unavailable, keeping the procedural ones:")}async function P1(i,e=15e3){let t=Xr+"fields/";return qr((async()=>{let n=await fetch(t+"fields.json");if(!n.ok)throw new Error("fields.json "+n.status);let s=await n.json();if(!(s.tile&&s.tile[0]>0&&s.tile[1]>0&&Math.abs(Qn/s.tile[1]-Math.round(Qn/s.tile[1]))<1e-6))throw new Error("bad tile size");if(!(s.mean&&s.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await ud(t,s,i);return r.colorSpace=qt,r.wrapS=r.wrapT=Fs,{tex:r,tile:s.tile,mean:s.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var Ch=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],a3=140*Math.PI/180,Ph=Math.PI/180,vr=i=>Math.atan2(Math.sin(i),Math.cos(i));function l3(i,e){let t=Tt(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/Ch[0][1];for(let[a,u,h,p,m,x,y]of Ch)for(let M=0;M<u;M++){let c;a==="tower"?c=s+M*r+t.range(-.22,.22)*r:a==="mid"?c=s+(M+.5)*r*(Ch[0][1]/u)+t.range(-.2,.2)*r:a==="high"?c=s+(M*(Ch[0][1]/u)+.5)*r+t.range(-.3,.3)*r:c=s+(M+t())/u*Math.PI*2,n.push({role:a,kinds:x,phi:c,d:t.range(h[0],h[1]),e0:t.range(p[0],p[1])*Ph,ah:t.range(m[0],m[1])*Ph,haze:y,k:-1,flip:!1})}let o=i.map(()=>[]),l=n.map((a,u)=>u);for(let a=l.length-1;a>0;a--){let u=Math.floor(t()*(a+1)),h=l[a];l[a]=l[u],l[u]=h}for(let a of l){let u=n[a],h=-1,p=1e9;i.forEach((m,x)=>{let y=u.kinds.indexOf(m.kind);if(y<0)return;let c=(o[x].some(f=>Math.abs(vr(f-u.phi))<a3)?1e3:0)+o[x].length*10+y*4+t();c<p&&(p=c,h=x)}),h<0&&(h=Math.floor(t()*i.length)),u.k=h,o[h].push(u.phi)}for(let a of n){let u=i[a.k],h=a.d*Math.tan(a.e0);a.y0=h,a.h=a.d*Math.tan(a.e0+a.ah)-h,a.w=a.h*u.w/u.h,a.half=Math.atan2(a.w/2,a.d)}return n.sort((a,u)=>u.d-a.d)}function I1(i,e,t=5){let n=i.list,s=l3(n,t),r=s.length,o=new rn(1,1);o.translate(0,.5,0);let l=new Pn(new Float32Array(r*4),4),a=new Pn(new Float32Array(r*4),4),u=new Pn(new Float32Array(r),1);o.setAttribute("aRect",l),o.setAttribute("aInfo",a),o.setAttribute("aRim",u),s.forEach((b,T)=>{let w=n[b.k];l.setXYZW(T,w.u0,w.v0,w.u1-w.u0,w.v1-w.v0),a.setXYZW(T,0,w.lum[0],1/Math.max(.05,w.lum[1]-w.lum[0]),b.haze)});let h=new ft({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new fe},uShade:{value:oe.cShade},uRimCol:{value:oe.cRim},uHaze:{value:oe.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...E1(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:S1+`
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
      }`}),p=new rs(o,h,r);p.frustumCulled=!1,p.renderOrder=-5;let m=new je,x=new vn,y=new V,M=new V,c=new V(0,1,0),f=new V,d=!0;function g(b,T){let w=s.filter(A=>A.role==="tower").sort((A,L)=>vr(A.phi-b)-vr(L.phi-b)),_=null,S=1e9;for(let A=0;A<w.length;A++){let L=w[A],D=w[(A+1)%w.length],O=T==="center"?L.phi:L.phi+vr(D.phi-L.phi)/2,z=Math.abs(vr(O-b));z<S&&(S=z,_=T==="center"?[L,L,O]:[L,D,O])}if(!_)return;let[E,R,C]=_,P=vr(b-C);for(let A of s)A.phi+=P;for(let A of new Set([E,R])){let L=Math.max(A.ah,31*Ph),D=A.d*Math.tan(A.e0+L)-A.y0;A.w*=D/A.h,A.h=D,A.ah=L,A.half=Math.atan2(A.w/2,A.d)}}let v={mesh:p,count:r,opening:"flank",layout:s,update(b,T){let w=b.position,_=Math.atan2(oe.lightDir.x,oe.lightDir.z);b.getWorldDirection(f);let S=Math.atan2(f.x,f.z),E=Math.atan(Math.tan(b.fov*Ph/2)*b.aspect);d&&g(S,v.opening);for(let C=0;C<r;C++){let P=s[C];P.phi+=T*1.2/P.d,y.set(w.x+Math.sin(P.phi)*P.d,w.y+P.y0,w.z+Math.cos(P.phi)*P.d),x.setFromAxisAngle(c,P.phi+Math.PI),M.set(P.w,P.h,1),m.compose(y,x,M),p.setMatrixAt(C,m);let A=vr(_-P.phi),L=A>0!==n[P.k].litLeft;L!==P.flip&&Math.abs(Math.sin(A))>.2&&(d||Math.abs(vr(P.phi-S))>E+P.half+.05)&&(P.flip=L),a.setX(C,P.flip?1:0);let D=Math.max(Math.cos(A),0);u.setX(C,.35+.9*D*D*D*(.4+oe.warm))}d=!1,p.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,u.needsUpdate=!0;let R=h.uniforms;{let C=Math.min(Math.max((oe.bright-.55)/.4,0),1);R.uPaint.value=C*C*(3-2*C)}R.uLit.value.copy(oe.cLit).multiplyScalar(1+.35*oe.bright),R.uOpacity.value=(1-oe.night*.35)*(1-oe.overcast*.55)*(1-.85*oe.rain)}};return v}async function L1(i,e=15e3){let t=Xr+"band/";return qr((async()=>{let n=await fetch(t+"band2.json");if(!n.ok)throw new Error("band2.json "+n.status);let s=await n.json(),{tex:r,file:o}=await ud(t,s,i),l={};for(let[a,u]of Object.entries(s.zones&&s.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(l[a]=new mt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(l).length)throw new Error("no zones listed");return r.wrapS=Fs,{tex:r,zones:l,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var Fl=2500,c3=-8,Gr=new V,gr=new fe,ld=new fe("#fff5dd").multiplyScalar(3.35),cd=new fe("#8fb1ec").multiplyScalar(1.35*2);function D1(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(v=>v.w)),r=192,o=360/i.period,l=new Float32Array((r+1)*6),a=new Float32Array((r+1)*4),u=[],h=Math.tan(c3*Math.PI/180),p=s+.004;for(let v=0;v<=r;v++){let b=v/r*Math.PI*2,T=Math.sin(b)*Fl,w=Math.cos(b)*Fl;if(l.set([T,h*Fl,w,T,p*Fl,w],v*6),a.set([-(v/r)*o,h,-(v/r)*o,p],v*4),v<r){let _=v*2;u.push(_,_+2,_+1,_+1,_+2,_+3)}}let m=new vt;m.setAttribute("position",new bt(l,3)),m.setAttribute("uv",new bt(a,2)),m.setIndex(u);let x=Math.PI/180,y=(e.composer.readBuffer.samples||0)>0,M=new ft({fog:!1,side:bn,alphaToCoverage:y,defines:y?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new mt},uRowB:{value:new mt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new fe(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*x)},uGnd:{value:new V(2.8,.0014,700)},uSpan:{value:new Le(h,p)},...E1(e)},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${Fl.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:S1+`
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
      }`}),c=new ht(m,M);c.frustumCulled=!1,c.renderOrder=999;let f=M.uniforms,d=new V,g=!0;return{mesh:c,zones:n,hero:.125,update(v,b,T=2.8,w=.0014,_=700){let S=n[b.a],E=n[b.b],R=b.t,C=0;if(S&&E?(f.uRowA.value.copy(S),f.uRowB.value.copy(E),f.uMix.value=S===E?0:R,C=1):(S||E)&&(f.uRowA.value.copy(S||E),f.uMix.value=0,C=S?1-R:R),f.uAlpha.value=C,c.visible=C>.002,!c.visible)return 0;c.position.copy(v.position),f.uGnd.value.set(T,w,_),f.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(T/140)+.3*x)),Math.max(S?S.w:0,E?E.w:0)+.003),g&&(v.getWorldDirection(d),f.uRot.value=this.hero+Math.atan2(d.x,d.z)/(Math.PI*2)*o,g=!1),gr.copy(oe.sunCol).multiplyScalar(oe.sunI),Gr.set(gr.r,gr.g,gr.b),gr.copy(oe.hemiSky).multiplyScalar(oe.hemiI*2),Gr.x+=gr.r,Gr.y+=gr.g,Gr.z+=gr.b;let P=Math.min(Math.max((oe.bright-.55)/.4,0),1),A=P*P*(3-2*P);f.uLightC.value.setRGB(Gr.x/(ld.r+cd.r),Gr.y/(ld.g+cd.g),Gr.z/(ld.b+cd.b)),f.uPaint.value=A;let L=Math.max(4*f.uMix.value*(1-f.uMix.value),Math.min(1,2*(1-C))),D=y?0:.45*L*L*L;return f.uHaze.value=1-(1-(1-(1-.12*oe.warm-.25*oe.night)*(1-.55*oe.overcast)*(1-.6*oe.rain))*(1-A))*(1-D),C}}}async function u3(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((m,x)=>e[x]!==m))throw new Error("not a PNG");let s=8,r=0,o=0,l=[];for(;s+12<=e.length;){let m=t.getUint32(s),x=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+m>e.length)throw new Error("PNG truncated");if(x==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(x==="IDAT")l.push(e.subarray(s+8,s+8+m));else if(x==="IEND")break;s+=12+m}if(!r||!o||!l.length)throw new Error("PNG has no image");let a=new Uint8Array(await new Response(new Blob(l).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,h=new Uint8Array(u*o),p=new Uint8Array(u);if(a.length<(u+1)*o)throw new Error("PNG data short");for(let m=0;m<o;m++){let x=a[m*(u+1)],y=m*(u+1)+1,M=(o-1-m)*u,c=m?h.subarray(M+u,M+2*u):p,f=h.subarray(M,M+u),d=a.subarray(y,y+u);if(x===0)f.set(d);else if(x===1){for(let g=0;g<4;g++)f[g]=d[g];for(let g=4;g<u;g++)f[g]=d[g]+f[g-4]}else if(x===2)for(let g=0;g<u;g++)f[g]=d[g]+c[g];else if(x===3){for(let g=0;g<4;g++)f[g]=d[g]+(c[g]>>1);for(let g=4;g<u;g++)f[g]=d[g]+(f[g-4]+c[g]>>1)}else if(x===4){for(let g=0;g<4;g++)f[g]=d[g]+c[g];for(let g=4;g<u;g++){let v=f[g-4],b=c[g],T=c[g-4],w=Math.abs(b-T),_=Math.abs(v-T),S=Math.abs(v+b-T-T);f[g]=d[g]+(w<=_&&w<=S?v:_<=S?b:T)}}else throw new Error("PNG filter "+x)}return{w:r,h:o,data:h}}function h3(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],l=Math.floor(r*255)+1,a=new Uint32Array(256),u=[],h=(y,M,c,f,d,g)=>{a.fill(0);for(let v=0;v<g;v++){let b=((f+v)*M+c)*4+3;for(let T=0;T<d;T++)a[y[b+T*4]]++}};for(let y=0;y<s;y++)for(let M=0;M<n;M++){let c=i/n,f=e/s;h(t,i,M*c,y*f,c,f);let d=0;for(let g=l;g<256;g++)d+=a[g];u.push(d/(c*f))}let p=i,m=e,x=t;for(;p>1&&m>1;){let y=p>>1,M=m>>1,c=new Uint8Array(y*M*4),f=p*4;for(let v=0;v<M;v++){let b=v*2*f,T=v*y*4;for(let w=0;w<y;w++,b+=8)for(let _=0;_<4;_++,T++)c[T]=x[b+_]+x[b+_+4]+x[b+_+f]+x[b+_+f+4]+2>>2}let d=y/n,g=M/s;if(d>=2&&g>=2&&d===Math.floor(d)&&g===Math.floor(g))for(let v=0;v<s;v++)for(let b=0;b<n;b++){h(c,y,b*d,v*g,d,g);let T=Math.round(u[v*n+b]*d*g),w=255,_=a[255];for(;w>1&&_<T;)_+=a[--w];let S=T>0?Math.min(6,Math.max(.5,l/w)):1;if(S!==1)for(let E=0;E<g;E++){let R=((v*g+E)*y+b*d)*4+3;for(let C=0;C<d;C++)c[R+C*4]=Math.min(255,Math.round(c[R+C*4]*S))}}o.push({data:c,width:y,height:M}),x=c,p=y,m=M}return o}async function N1(i,e=15e3){let t=Xr+"trees/";return qr((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let l=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&l.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+l.byteLength+" bytes, not "+s.bytes[r]);let a=await u3(l),u=s.cols,h=s.rows;if(!(u>0&&h>0)||a.w%u||a.h%h)throw new Error("bad atlas layout");let p=(s.cells||[]).filter(y=>y.col<u&&y.row<h).map(y=>{let M=.5/a.w,c=.5/a.h;return{kind:y.kind,u0:y.col/u+M,u1:(y.col+1)/u-M,v0:1-(y.row+1)/h+c,v1:1-y.row/h-c}});if(!p.some(y=>y.kind==="leaf"))throw new Error("no leaf clusters listed");let m=h3(a.w,a.h,a.data,u,h,.5),x=new ss(a.data,a.w,a.h,Jn);return x.mipmaps=m,x.generateMipmaps=!1,x.minFilter=In,x.magFilter=kt,x.colorSpace=ai,x.needsUpdate=!0,{tex:x,cells:p,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var Vs={T:6.5,N:400,TH:.75},k1=Vs.N/Qn,f3=k1*Math.tan(Vs.TH),Lh=Math.cos(Vs.TH),Bl=Math.sin(Vs.TH),Dh=4,Gn=i=>i.toFixed(7),zl=`
float shorePhase(float s, float d){ return uTime * ${Gn(1/Vs.T)} + s * ${Gn(k1)} + d * ${Gn(f3)}; }`,Ol=256/Qn,F1=i=>Math.max(1,Math.round(i*Bl/Ol))*Ol/Bl,d3=i=>Math.max(1,Math.round(i*Lh/Ol))*Ol/Lh,hd=i=>Math.max(1,Math.round(i*Vs.N*Dh/256))*256/(Vs.N*Dh),p3=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,kl={uNoiseTex:Ie.uNoiseTex,uOrigin:Ie.uOrigin,uTime:{value:0},uCam:{value:new V},uSunDir:{value:oe.lightDir},uSunCol:{value:oe.sunCol},uHorizon:{value:oe.horizon},uZenith:{value:oe.zenith},uFog:{value:oe.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new fe},uPMid:{value:new fe},uPFace:{value:new fe},uPLite:{value:new fe},uPMidD:{value:new fe},uPMidM:{value:new fe},uPMidF:{value:new fe},uPMidL:{value:new fe},uPFarD:{value:new fe},uPFar:{value:new fe},uPFarF:{value:new fe},uPFarL:{value:new fe},uPHz:{value:new fe},uFoamLit:{value:new fe(1,1,1)},uFoamShade:{value:new fe(.5,.6,.8)},uSeaDir:{value:new Le(1,0)},uWaves:{value:1},uPWBack:{value:new fe},uPWFace:{value:new fe},uPWLite:{value:new fe},uPWTurq:{value:new fe},uShoreW:{value:1}},m3={trough:[0,98,182],mid:[10,132,218],face:[49,163,242],lite:[140,210,250],midD:[4,124,212],midM:[27,148,232],midF:[49,163,242],midL:[140,205,248],farD:[36,139,221],far:[69,169,243],farF:[114,191,246],farL:[190,228,251],hz:[111,196,250],foam:[246,251,254],foamShade:[160,205,240],wBack:[1,109,193],wFace:[68,163,212],wLite:[113,188,241],wTurq:[46,154,201]},z1=`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint, uWaves; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPLite, uPMidD, uPMidM, uPMidF, uPMidL, uPFarD, uPFar, uPFarF, uPFarL, uPHz, uFoamLit, uFoamShade;
uniform vec2 uOrigin, uSeaDir;
${Ii}${p3}
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
/** p: the world position (absolute), d: from the camera, dist: its length */
vec3 paintedSea(vec2 p, vec2 d, float dist){
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
  return mix(col, mix(uFoamLit, uPFarL, ff * 0.5), white);
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
    // the painted sea (a bright clear day): the painting's wavelets, paling into the light azure at the far shore (uWaves
    // off, a test switch: its flat tones)
    vec3 pc = uWaves > 0.5 ? paintedSea(p, w.xz - uCam.xz, dist) : mix(uPMid, uPFar, smoothstep(15.0, 260.0, dist));
    pc = mix(pc, uPHz, smoothstep(1500.0, 4000.0, dist) * 0.7);
    col = mix(col, pc, uPaint);
  }
  return col;
}`;function H1(i=!1){let e=new ft({fog:!1,defines:i?{SEA_LITE:""}:{},uniforms:kl,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${z1}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),t=new ht(new rn(14e3,14e3),e);t.rotation.x=-Math.PI/2,t.position.y=cs,t.renderOrder=998,t.frustumCulled=!1;let n=kl;return{mesh:t,u:n,update(s,r,o,l=1,a=null,u=null,h=0){t.position.x=s.x,t.position.z=s.z,u&&l>0&&g3(u,h,n.uSeaDir.value),n.uTime.value=r,n.uCam.value.copy(s),n.uNight.value=oe.night,n.uBright.value=oe.bright,n.uFogD.value=o,n.uVis.value=l,n.uSpecK.value=1-oe.overcast*.85;let p=Math.min(Math.max((oe.bright-.55)/.4,0),1),m=a?p*p*(3-2*p):0;n.uPaint.value=m;let x=1+.25*oe.bright,y=1/(Math.PI*x),M=oe.sunCol,c=oe.hemiSky,f=oe.sunI*.8,d=oe.hemiI;if(n.uFoamLit.value.setRGB((M.r*f+c.r*d)*y,(M.g*f+c.g*d)*y,(M.b*f+c.b*d)*y),n.uFoamShade.value.setRGB(c.r*d*.9*y,c.g*d*.9*y,c.b*d*.9*y),m>0){let g=m3;ei(a,g.trough,n.uPTrough.value),ei(a,g.mid,n.uPMid.value),ei(a,g.face,n.uPFace.value),ei(a,g.lite,n.uPLite.value),ei(a,g.midD,n.uPMidD.value),ei(a,g.midM,n.uPMidM.value),ei(a,g.midF,n.uPMidF.value),ei(a,g.midL,n.uPMidL.value),ei(a,g.farD,n.uPFarD.value),ei(a,g.far,n.uPFar.value),ei(a,g.farF,n.uPFarF.value),ei(a,g.farL,n.uPFarL.value),ei(a,g.hz,n.uPHz.value),n.uFoamLit.value.lerp(ei(a,g.foam,U1),m),n.uFoamShade.value.lerp(ei(a,g.foamShade,U1),m),Ih(a,g.wBack,n.uPWBack.value,n.uPMid.value),Ih(a,g.wFace,n.uPWFace.value,n.uPMid.value),Ih(a,g.wLite,n.uPWLite.value,n.uPMid.value),Ih(a,g.wTurq,n.uPWTurq.value,n.uPMid.value)}}}}var U1=new fe,ei=(i,e,t)=>Ul(i,e[0],e[1],e[2],t),Ih=(i,e,t,n)=>{ei(i,e,t),t.r-=n.r,t.g-=n.g,t.b-=n.b},ta={zone:-1,x:1,z:0},B1={},O1=.35;function g3(i,e,t){let n=Math.floor((e-150)/Pi),s=Math.floor((e+800)/Pi)+1;for(let r=n;r<=s;r++)if(!(hh(r*Pi+Pi/2,"coast")<.99)){if(r!==ta.zone){let o=0,l=0;for(let h=r*Pi-Wo;h<=(r+1)*Pi;h+=25)i.at(Math.max(h,0),B1),o+=B1.h,l++;o/=l,ta.zone=r;let a=Math.cos(O1),u=Math.sin(O1);ta.x=-Math.sin(o)*a-Math.cos(o)*u,ta.z=-Math.cos(o)*a+Math.sin(o)*u}t.set(ta.x,ta.z);return}}function V1(i=!1){let e=F1(5.5),t=F1(.45),n=8*Ol/Bl,s=d3(2.6),r=hd(.8),o=hd(17.3),l=hd(3.7);return new ft({fog:!1,defines:i?{SHORE_LITE:"",SEA_LITE:""}:{},uniforms:kl,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${z1}${zl}
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
          float a = d * ${Gn(Lh)} - s * ${Gn(Bl)}, b = s * ${Gn(Lh)} + d * ${Gn(Bl)};
          vec4 nA = vnoise4(vec2(s * 0.0609524, d * 0.12 + uTime * 0.01));
          float wob = (nA.x - 0.5) * 0.9;   // (the rows wander)
          // the waves drawn here: the smallest (OCT to each big one) out to 8 m from us, then doubling at each doubling of
          // the distance, every other crest fading out in between, so the sizes hand over without a seam. q: the phase in
          // this size's waves; e: from the nearest crest of this size, e1: of the next size up (in their own waves); f:
          // since the last big wave passed
          float ph1 = (shorePhase(s, d) + wob) * ${Dh.toFixed(1)}, f = fract(ph1 * ${(1/Dh).toFixed(3)}), fw1 = fwidth(ph1) + 1e-4;
          float L = clamp(log2(dist * 0.125), 0.0, 3.0), k0 = floor(L), fr = L - k0, P = exp2(k0);
          float q = ph1 / P, n0 = floor(q + 0.5), n1 = floor(0.5 * q + 0.5), ev = 1.0 - mod(n0, 2.0), aa = fw1 / P * 1.2;
          // the details' coordinates and their footprints on screen first (they are read only near the crests and where
          // there is foam): the crest's torn edge and its beads ride with the crest; the lace stays in the water as the
          // waves pass through it, drifting in slowly. Along the road they repeat with S_WRAP
          vec2 pC = vec2(a * ${Gn(e)}, ph1 * ${Gn(r)}), cx = dFdx(pC), cy = dFdy(pC);
          vec2 pL = vec2(a * ${Gn(t)}, (b + uTime * 0.3) * ${Gn(s)}), lx = dFdx(pL), ly = dFdy(pL);
          // the waves in full out to ~14 m from the wall, easing into the open sea's own wavelets by the strip's edge; their
          // crests fade as they shrink to a few pixels far ahead
          float near = 1.0 - smoothstep(14.0, 36.0, d), vis = 1.0 - smoothstep(0.07, 0.18, aa * 0.8333), nw = 1.0 - smoothstep(3.0, 20.0, d);
          // a short-crested sea, as the painting's: each crest a few of its wavelengths long, bowed, bigger and smaller
          // along it, breaking where it is biggest (more of it near the wall), each its own: one pattern per crest, riding
          // with it, at its size (E0 for the crests of this size, E1 for the next size's)
          vec4 E0 = vnoise4L(vec2(a * ${Gn(n)} / P + n0 * P * ${Gn(o)}, n0 * P * ${Gn(l)}));
          vec4 E1 = vnoise4L(vec2(a * ${Gn(n)} * 0.5 / P + n1 * 2.0 * P * ${Gn(o)}, n1 * 2.0 * P * ${Gn(l)}));
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
      }`})}function W1(){return new ft({fog:!1,uniforms:{uNoiseTex:Ie.uNoiseTex,uTime:{value:0},uSunDir:{value:oe.lightDir},uSunCol:{value:oe.sunCol},uHorizon:{value:oe.horizon},uZenith:{value:oe.zenith},uFog:{value:oe.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Ii}
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
      }`})}var na={n:8,drops:4};function G1(){return new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:kl,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC; attribute float aK;
      varying vec2 vUv; varying vec4 vK;
      ${zl}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        // two bursts to each big wave: its own, and a smaller one halfway to the next (the waves between, as the shore's)
        float ph = (shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13)) * 2.0; // (each a moment after the wave arrives)
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13) * (1.0 - 0.4 * mod(wave, 2.0)); // how hard it hits here
        float age = fract(ph) * ${(Vs.T/2).toFixed(3)};
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
      ${Ii}
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
      }`})}function X1(i){let e=i.length/8;if(!e)return null;let t=1+na.drops,n=e*t,s=new Float32Array(n*12),r=new Float32Array(n*16),o=new Float32Array(n*12),l=new Float32Array(n*4),a=new Uint16Array(n*6),u=[-1,1,1,-1],h=[-1,-1,1,1],p=1/0,m=1/0,x=1/0,y=-1/0,M=-1/0,c=-1/0;for(let d=0;d<e;d++){let g=d*8;for(let v=0;v<t;v++){let b=d*t+v;for(let T=0;T<4;T++){let w=b*4+T;s[w*3]=i[g],s[w*3+1]=i[g+1],s[w*3+2]=i[g+2],r[w*4]=i[g+3],r[w*4+1]=i[g+4],r[w*4+2]=i[g+5],r[w*4+3]=i[g+6],o[w*3]=u[T],o[w*3+1]=h[T],o[w*3+2]=i[g+7],l[w]=v}a.set([b*4,b*4+1,b*4+2,b*4,b*4+2,b*4+3],b*6)}p=Math.min(p,i[g]),m=Math.min(m,i[g+1]),x=Math.min(x,i[g+2]),y=Math.max(y,i[g]),M=Math.max(M,i[g+1]),c=Math.max(c,i[g+2])}let f=new vt;return f.setAttribute("position",new bt(s,3)),f.setAttribute("aB",new bt(r,4)),f.setAttribute("aC",new bt(o,3)),f.setAttribute("aK",new bt(l,1)),f.setIndex(new bt(a,1)),f.boundingBox=new gi(new V(p-4,m-1,x-4),new V(y+4,M+4,c+4)),f.boundingSphere=f.boundingBox.getBoundingSphere(new vi),f}var Gt=60,fd=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],q1=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],Y1=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Ws=32,dd=[-.2,2.2,5.5,10,17,27,38],Hl=[.025,.026,.032],Z1=[.05,.05,.065],K1=new je,Ts=(i,e)=>(i%e+e)%e,Gs=(i,e)=>{let t=fr(i);return!!t&&Math.abs(i-t.s)<e},Nh=i=>Ts(i,4)===0,v3=i=>Ts(i,2)===0,vd=1.4,$1=i=>Nh(i)?4.4:vd+.9,pd=i=>Nh(i)?3.4:vd-.1,md=(i,e)=>Math.abs(i-Math.round(i/300)*300)<e,Li=(i,e)=>{let t=zi(i);return!!t&&Math.abs(i-t.s)<e},ci=(i,e)=>{let t=ki(i);return!!t&&Math.abs(i-t.s)<e},gd=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let l=n(r,o);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let l=s+r*t+o,a=l+1,u=l+t,h=u+1;this.I.push(l,a,u,a,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,l=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)l[u*o+h]=n(u,h-s);let a=(u,h)=>l[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let p=a(u,h-1),m=a(u,h+1),x=a(u-1,h),y=a(u+1,h),M=l[u*o+h],c=m[0]-p[0],f=m[1]-p[1],d=m[2]-p[2],g=y[0]-x[0],v=y[1]-x[1],b=y[2]-x[2],T=f*b-d*v,w=d*g-c*b,_=c*v-f*g;w<0&&(T=-T,w=-w,_=-_);let S=Math.hypot(T,w,_)||1;M[3]=T/S,M[4]=w/S,M[5]=_/S}this.grid(e,t,(u,h)=>l[u*o+h+s])}build(){let e=new vt;return e.setAttribute("position",new $e(this.P,3)),e.setAttribute("normal",new $e(this.N,3)),e.setAttribute("su",new $e(this.SU,2)),e.setAttribute("zw",new $e(this.ZW,4)),e.setAttribute("rk",new $e(this.RK,2)),e.setAttribute("rv",new $e(this.RV,1)),e.setAttribute("zs",new $e(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},Fh=class{constructor(e,t,n,s){this.path=t,this.M=n,this.riverMat=s,this.heapCache=new Map,this.group=new fn,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Gt),s=Math.floor((e+this.ahead)/Gt);for(let[o,l]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(l),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let l=o.pending.shift();l&&o.group.add(l),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let a=Math.max(0,n);a<=s;a++)if(!this.chunks.has(a)){l=a;break}if(l<0)return 0;l*Gt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let o=this.job.it.next();if(o.done){let l=o.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let l=o*Gt-e,a=r.group.children;for(let u=0;u<a.length;u++){let h=a[u],p=h.userData.detail;p&&(h.visible=p==="leaf"?l<s:l<t||n&&p==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Gt,s=n+Gt,r=t.at(n),o=r.x,l=r.z,a=Tt(Math.floor(yn(e,777)*4294967295)),u={atlas:new Jt({uv:!0,ao:!0,lit:!0}),color:new Jt({ao:!0}),foliage:new Jt,leaf:new Jt({uv:!0}),lamp:new Jt({color:!1}),sig:new Jt({color:!1}),sodium:new Jt({color:!1}),decal:new Jt({uv:!0}),pool:new Jt({uv:!0,color:!1}),gleaf:new Jt({uv:!0,off:!0}),gblossom:new Jt({uv:!0,off:!0}),tetra:new Jt({uv:!0,ao:!0}),bark:new Jt({uv:!0,ao:!0,idx:!0})},h=new gd,p={rows:[],puffs:[]},m=[];u.lamps=[];let x={},y={},M=(E,R)=>{t.at(E,y);let C=On(E,"rw");return y.y+Ms(E,R,y.y,C)},c=E=>{let R=Dt(E);return[R.city,R.sakura,R.coast,R.country,R.snow]},f=(E,R,C)=>(t.at(E,x),[x.x+x.rx*R-o,C,x.z+x.rz*R-l]),d=(E,R,C,P=0,A=!0)=>{t.at(E,x);let L=x.h-Math.PI/2+(A&&R<0?Math.PI:0)+P,D=new je().makeRotationY(L);return D.setPosition(x.x+x.rx*R-o,C,x.z+x.rz*R-l),D.groundY=C,D},g=(E,R,C=0,P=0,A=!0)=>{let L=M(E,R),D=d(E,R,L+C,P,A);return D.groundY=L,D},v=E=>t.at(E,y).y,b=E=>On(E,"rw"),T=E=>{let R=Dt(E);return R.city+R.sakura>.5?R.city>=R.sakura?3:2.6:0};{let E=ki(n+Gt/2),R=!!E&&E.s>n-40&&E.s<s+40,C=R?61:21,P=b(n+Gt/2),A=(()=>{let X=[0,...q1].map(K=>K);return Y1.forEach(K=>X.push(K-P)),X})(),L=[...A.slice().reverse().map(k=>-k),...A],D=L.length,O=Array.from({length:C},(k,X)=>n+X/(C-1)*Gt);{let k=zi(n+Gt/2);if(k)for(let X of[k.s-_n,k.s+_n])X>n+.1&&X<s-.1&&O.push(X-.03,X+.03)}O.sort((k,X)=>k-X);let z=D/2,B=O.map(k=>(t.at(k,x),{s:k,f:{...x},rw:b(k),w:c(k),rb:R?Gm(k):0})),H=Math.round(z/2);for(let[k,X,K,be]of[[0,H,0,1],[H-1,z,1,0],[z,z+H+1,0,1],[z+H,D,1,0]])h.gridN(B.length,X-k,(we,Se)=>{let G=B[we],$=G.f,ge=k+Se,Pe=L[ge],te=Pe===0&&G.w[2]>0?.15:0,ve=Pe<0||Pe===0&&ge<z?Pe-G.rw+te:Pe+G.rw-te,Ne=$.y+Ms(G.s,ve,$.y,G.rw),Oe=Math.abs(ve)>G.rw+.98?Math.min(1,ch/.5):0;return[$.x+$.rx*ve-o,Ne,$.z+$.rz*ve-l,0,1,0,Ts(G.s,Qn),ve,G.w[0],G.w[1],G.w[2],G.w[3],G.rw,0,G.rb>0?G.rb:-Oe,G.w[4]]},K,be),yield}yield,h.grid(31,2,(R,C)=>{let P=n+R/30*Gt,A=b(P),L=C?A:-A;t.at(P,x);let D=x.y,O=(v(P+1)-v(P-1))/2,z=-O*x.fx,B=1,H=-O*x.fz,k=Math.hypot(z,B,H),X=c(P);return[x.x+x.rx*L-o,D,x.z+x.rz*L-l,z/k,B/k,H/k,Ts(P,Qn),L,X[0],X[1],X[2],X[3],A,1,0,X[4]]});{let E=[];for(let P=0;P<=30;P++){let A=n+P/30*Gt;E.push({s:A,sw:T(A)})}let R=[],C=null;for(let P of E)P.sw>0?(C||(C=[],R.push(C)),C.push(P)):C=null;for(let P of R)if(!(P.length<2))for(let A of[-1,1])h.grid(P.length,2,(L,D)=>{let{s:O,sw:z}=P[L],B=b(O),H=A*(D===(A>0?0:1)?B:B+z);t.at(O,x);let k=c(O);return[x.x+x.rx*H-o,x.y+.15,x.z+x.rz*H-l,0,1,0,Ts(O,Qn),H,k[0],k[1],k[2],k[3],B,2,0,k[4]]}),h.grid(P.length,2,(L,D)=>{let{s:O}=P[L],z=b(O),B=A*z,H=A>0?D:1-D;t.at(O,x);let k=c(O);return[x.x+x.rx*B-o,x.y+(H?.15:0),x.z+x.rz*B-l,-A*x.rx,0,-A*x.rz,Ts(O,Qn),B,k[0],k[1],k[2],k[3],z,3,0,k[4]]})}yield,yield*this.placePoles(e,n,s,a,u,d,M,f,v,b);{let E=Math.ceil((n-zr)/kr),R=Go(E);R<s&&Sl(R)&&(yield*this.placeCrossing(u,h,R,d,v,b,M,T,o,l));let C=Math.ceil((n-Xo)/Hr),P=I0(C);P<s&&L0(P)&&(yield*this.placeRiver(u,h,P,d,v,b,M,T,o,l,a,m));let A=zi(n+Gt/2);A&&A.s+an>n&&A.s-an<s&&(yield*this.placeTunnel(u,h,A,n,s,d,g,M,b,o,l,a))}yield;for(let E=n;E<s;E+=4){let R=dn(E);(R==="coast"&&Dt(E).coast>.45||R==="mountain"&&Dt(E).mountain>.45)&&!Li(E+2,an+4)&&this.guardrail(u,E,Math.min(E+4,s),f,v,b)}yield*this.placeCity(u,a,n,s,d,g,v,b,T,M,h,o,l),yield*this.placeSakura(u,a,n,s,d,g,v,b,M),yield*this.placeCoast(u,a,e,n,s,d,g,b,p,f),yield,yield*this.placeCountry(u,a,n,s,d,g,v,b,M),yield*this.placeMountain(u,a,n,s,d,g,v,b,M),yield*this.placeSnow(u,a,n,s,d,g,v,b,M),yield*this.placeVerge(u,a,n,s,d,M,b,e,o,l),yield;let w=new fn,_=(E,R,C,P,A=0,L)=>{if(!E)return null;let D=new ht(E,R);return D.castShadow=C,D.receiveShadow=P,D.renderOrder=A,L&&(D.userData.detail=L),w.add(D),D},S=new Set;for(let E of[n,n+20,n+40,s]){let R=hr(E);S.add(R.a),R.t>0&&S.add(R.b)}_(h.build(),Al([...S]),!1,!0),yield;{let E=_(u.atlas.build(),this.M.atlas,!0,!0);E&&(E.customDepthMaterial=this.M.atlasDepth)}yield;{let E=_(u.color.build(),this.M.color,!0,!0);E&&(E.customDepthMaterial=mh)}if(yield,_(u.tetra.build(),this.M.tetra,!0,!0),_(u.bark.build(),this.M.bark,!0,!0,0,"leaf"),yield,_(u.foliage.build(),this.M.foliage,!0,!0),_(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let E=_(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let E=_(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(yield,_(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),_(u.sig.build(),this.M.sig,!1,!1,0,"small"),_(u.sodium.build(),this.M.sodium,!1,!1),_(u.decal.build(),this.M.decal,!1,!0,1,"small"),_(u.pool.build(),this.M.pool,!1,!1,2,"light"),p.rows.length>1){let E=p.rows,R=dd.length,C=E.length*R,P=new Float32Array(C*3),A=new Float32Array(C*2),L=new Float32Array(C*2),D=[];E.forEach((z,B)=>{for(let H=0;H<R;H++){let k=B*R+H,X=H*7;P.set(z.subarray(X,X+3),k*3),A[k*2]=z[X+3],A[k*2+1]=z[X+4],L[k*2]=z[X+5],L[k*2+1]=z[X+6]}if(B>0)for(let H=0;H<R-1;H++){let k=(B-1)*R+H,X=k+R;D.push(k,X,k+1,k+1,X,X+1)}});let O=new vt;O.setAttribute("position",new bt(P,3)),O.setAttribute("su",new bt(A,2)),O.setAttribute("hf",new bt(L,2)),O.setIndex(D),O.computeBoundingSphere(),_(O,this.M.shore,!1,!1,997)}p.puffs.length&&_(X1(p.puffs),this.M.surf,!1,!1,2,"small");for(let E of m)_(E,this.riverMat,!1,!0);return w.position.set(o-this.origin.x,0,l-this.origin.z),{group:w,ox:o,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Ws+6,n=dn(t);if(n==="sakura"||Gs(t,6)||ci(t,34)||Li(t,an+12))return null;let s=On(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,l,a,u,h){let p=Math.ceil((t-6)/Ws),m=Math.floor((n-6-.001)/Ws);for(let x=p;x<=m;x++){let y=this.poleSpec(x);if(!y)continue;let M=y.z==="city"?u(y.s)+.15:l(y.s,y.u),c=o(y.s,y.u,M),f=Tt(Math.floor(yn(x,31)*4294967295)),d=Y0(r,c,f,{trans:f()<.45});y.z==="city"&&x%2===0&&kg(r,c,-.11),x%2&&(yield);let g=this.poleSpec(x+1);if(g){let v=g.z==="city"?u(g.s)+.15:l(g.s,g.u),b=Og(o(g.s,g.u,v));r.color.setM(new je);let T=[];for(let w=0;w<d.length;w++){let _=d[w],S=b[w],E=.35+f()*.4+(w>=7?.3:0);T.push(E),r.color.wire([_.x,_.y,_.z],[S.x,S.y,S.z],E,w>=7?.022:.015,Hl,10)}if(y.z!=="coast"&&f()<.38){let w=Math.floor(f()*4),_=d[w],S=b[w],E=1+Math.floor(f()*4),R=.18+f()*.5;for(let C=0;C<E;C++){let P=Math.min(.92,R+C*(.018+f()*.025)),A=_.x+(S.x-_.x)*P,L=_.z+(S.z-_.z)*P,D=_.y+(S.y-_.y)*P-T[w]*4*P*(1-P);r.color.box(A-.07,D+.015,L-.07,A+.07,D+.19,L+.07,Z1),r.color.box(A-.045,D+.19,L-.045,A+.045,D+.27,L+.045,Z1)}}}if(y.z==="city"){r.color.setM(new je);let v=1+Math.floor(f()*3);for(let b=0;b<v;b++){let T=d[7+b%2],w=(f()-.5)*14,_=h(y.s+w),S=f()<.55,E=S?-(_+3.15):_+3.15,R=a(y.s+w,E,u(y.s+w)+5.2+f()*2.5);r.color.wire([T.x,T.y,T.z],R,.25+f()*.4,.012,Hl,8)}}}}*intersection(e,t,n,s,r,o,l,a,u,h,p){let m=this.path.at(n,{}),x=o(n),y=l(n),M=a(n)||3,c=n-.5,f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],g=(w,_,S)=>[m.x+m.fx*(w-.5)+m.rx*_-h,S,m.z+m.fz*(w-.5)+m.rz*_-p],v=y+M+.15,b=Nh(s),T=b?3:vd;for(let w of[-1,1]){let _=w*(y+M),S=w*80;if(u.grid(21,2,(P,A)=>{let L=_+(S-_)*P/20,D=(A?-T:T)*w,O=g(D,L,x+.165);return[O[0],O[1],O[2],0,1,0,D*w,L,d[0],d[1],d[2],d[3],y,10]}),b){let P=w*(y+M+3.2),A=-w*1.35,L=1.15,D=.42,O=(z,B)=>g(A+w*z,P-w*B,x+.18);e.decal.setM(new je),e.decal.quad(O(-L,-D),O(L,-D),O(L,D),O(-L,D),[1,1,1],Jo("tomare"))}for(let P of[-1,1]){let A=v+15+t()*3;for(;A<52;){let L=t.range(5.5,8.5),D=w*(A+L/2),O=t(),z=r(c+P*(T+.3),D,x+.14,P>0?Math.PI/2:-Math.PI/2,!1);Xi(e,z,t,{type:O<.5?"house":"shop",w:L,d:t.range(7,10),floors:O<.5?2:t.int(2,3),tint:t.pick(zs),litP:.45,fence:0}),A+=L+t.range(.2,1.2),yield}yield}let E=[30,54].map(P=>r(c+T-.2,w*P,x+.15,-Math.PI/2,!1)),R=Tt(Math.floor(yn(s,w>0?71:73)*4294967295)),C=E.map(P=>Y0(e,P,R,{trans:R()<.4}));e.color.setM(new je);for(let P=0;P<7;P++){let A=C[0][P],L=C[1][P];e.color.wire([A.x,A.y,A.z],[L.x,L.y,L.z],.3+R()*.4,.014,Hl,10)}}b&&(nd(e,r(n-9,-(y+.55),x+.15,0,!0),1,y+.55-1.6),nd(e,r(n+8,y+.55,x+.15,0,!0),1,y+.55-1.6),s%8===0&&i1(e,r(n+15,0,x,0,!1),y+M+.1,"hodokyo"+Math.abs(s/8)%3))}*placeCrossing(e,t,n,s,r,o,l,a,u,h){let p=this.path.at(n,{}),m=p.y,x=o(n),y=a(n),M=x+y+.2,c=150,f=m+.18,d=Dt(n),g=[d.city,d.sakura,d.coast,d.country],v=(L,D,O)=>[p.x+p.fx*L+p.rx*D-u,O,p.z+p.fz*L+p.rz*D-h],b=[7.6,4.7,-4.7,-7.6];for(let[L,D]of[[-c,-M],[M,c]])t.grid(25,b.length,(z,B)=>{let H=L+(D-L)*z/24,k=b[B],K=Math.abs(k)<5?f:Math.min(f-.05,l(n+k,H)-.03),be=v(k,H,K);return[be[0],be[1],be[2],0,1,0,k,H,g[0],g[1],g[2],g[3],x,5]});let T=(L,D,O)=>t.grid(2,2,(z,B)=>{let H=z?D:L,k=B?-3.3:3.3,X=v(k,H,O);return[X[0],X[1],X[2],0,1,0,k,H,g[0],g[1],g[2],g[3],x,6]});T(-x,x,m+.03),y>0&&(T(-M,-x,m+.165),T(x,M,m+.165));let w=(L,D,O,z)=>t.grid(2,2,(B,H)=>{let k=B?z:O,X=H?D:L,K=v(X,k,m+.025);return[K[0],K[1],K[2],0,1,0,X,k,g[0],g[1],g[2],g[3],x,7]});w(-7.15,-7.6,-x+.3,-.12),w(7.6,7.15,.12,x-.3),yield;let _=s(n,0,m,-Math.PI/2,!1),S=e.color;S.setM(_);let E=[.42,.4,.38],R=[.3,.29,.28],C=[.55,.57,.6];for(let L of[-2,2])for(let D of[-.5335,.5335]){let O=-(L+D);for(let[z,B]of[[-c,-M],[M,c]])S.box(z,.26,O-.035,B,.34,O+.035,E);S.box(-M,0,O-.035,M,.04,O+.035,R)}let P=[-146,-104,-64,-26,26,64,104,146];for(let L of P){for(let D of[-4.95,4.95])S.box(L-.12,.18,D-.12,L+.12,7.4,D+.12,C);S.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,C);for(let D of[-2,2])S.box(L-.04,6.3,-D-.04,L+.04,6.95,-D+.04,C)}for(let L of[-2,2])for(let D=0;D<P.length-1;D++)S.wire([P[D],5.35,-L],[P[D+1],5.35,-L],.05,.011,Hl,6),S.wire([P[D],6.4,-L],[P[D+1],6.4,-L],.45,.011,Hl,8);yield;let A=Math.round((n-zr)/kr);if(d.country>.9&&yn(A,17)<.7){let L=yn(A,19)<.5?-1:1,D=L>0?x+9:-(x+9+46),O=L>0?x+9+46:-(x+9);s1(e,_,D,O,L*(x+9),Math.abs(A)%4,Tt(Math.floor(yn(A,23)*4294967295))),S.setM(_)}yield;for(let L of vh(this.path,n)){let D=new je().makeRotationY(L.yaw);D.setPosition(L.x-u,L.y,L.z-h),a1(e,D)}mr(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85),mr(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n,{}),y=x.y,M=o(n),c=a(n),f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],g=f.sakura>.5,v=222,b=M+c+.5,T=y-wl,w=(A,L,D)=>[x.x+x.fx*A+x.rx*L-u,D,x.z+x.fz*A+x.rz*L-h];{let A=[],L=[],D=[];for(let B=0;B<=74;B++){let H=-v+2*v*B/74;for(let k of[14.3,-14.3]){let X=w(k,H,T);A.push(X[0],X[1],X[2]),L.push(k,H)}if(B>0){let k=(B-1)*2;D.push(k,k+1,k+2,k+1,k+3,k+2)}}let z=new vt;z.setAttribute("position",new $e(A,3)),z.setAttribute("su",new $e(L,2)),z.setIndex(D),z.computeBoundingSphere(),m.push(z)}for(let[A,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,O]of[[-v,-(M+3.4)],[M+3.4,v]])t.grid(41,2,(z,B)=>{let H=D+(O-D)*z/40,k=B?L:A,X=w(k,H,y+.38);return[X[0],X[1],X[2],0,1,0,k,H,d[0],d[1],d[2],d[3],M,9,1]});yield;let _=s(n,0,y,0,!1),S=e.color,E=[.74,.73,.7],R=g?[.78,.2,.15]:[.55,.72,.64];S.setM(_),S.box(-24.5,-1,-b,24.5,-.03,b,E,null,{noBottom:!1});for(let A of[-1,1])S.box(-24.5,-1.3,A>0?b-.35:-b,24.5,-.95,A>0?b:-b+.35,[.62,.61,.58]);for(let A of[-8,8])S.box(A-.7,-wl-1.4,-b+.6,A+.7,-1,b-.6,E);for(let A of[-25.7,25.7])S.box(A-1.2,-wl+.4,-b-.4,A+1.2,-.05,b+.4,E);for(let A of[-24.5,24.5])S.box(A-.16,.004,-M,A+.16,.016,M,[.33,.32,.31]),S.box(A-.02,.016,-M,A+.02,.02,M,[.2,.19,.19]);let C=c>0?.15:0;for(let A of[-1,1]){let L=A*(b-.14);for(let D=-24;D<=24.01;D+=2)S.box(D-.06,C,L-.06,D+.06,C+1,L+.06,R);S.box(-24,C+.95,L-.08,24,C+1.08,L+.08,R),S.box(-24,C+.48,L-.03,24,C+.54,L+.03,R),S.box(-24,C+.06,L-.03,24,C+.12,L+.03,R)}let P="bridge"+Math.abs(Math.round(n/Hr))%4;for(let A of[-25,25])for(let L of[-1,1]){let D=L*(b-.1),O=[.7,.69,.65];S.box(A-.32,C,D-.32,A+.32,C+1.45,D+.32,O),S.box(A-.38,C+1.45,D-.38,A+.38,C+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(_);let z=(A<0?-1:1)*.325,B=P;A<0?e.atlas.quad([A-.325,C+.3,D-.22],[A-.325,C+.3,D+.22],[A-.325,C+1.3,D+.22],[A-.325,C+1.3,D-.22],[1,1,1],Jo(B)):e.atlas.quad([A+.325,C+.3,D+.22],[A+.325,C+.3,D-.22],[A+.325,C+1.3,D-.22],[A+.325,C+1.3,D+.22],[1,1,1],Jo(B)),S.setM(_)}Il(e,s(n-14,-(b-.45),y+C,0,!0)),Il(e,s(n+14,b-.45,y+C,0,!0)),yield;{e.atlas.setM(new je);let A=Jo("gogan"),L=2.4,D=150;for(let O of[-1,1])for(let z=-D;z<D-.01;z+=L){let B=z+L,H=w(O*13.9,z,T-.12),k=w(O*13.9,B,T-.12),X=w(O*16.05,B,T+.72),K=w(O*16.05,z,T+.72),be=(k[1]-H[1])*(K[2]-H[2])-(k[2]-H[2])*(K[1]-H[1]),we=(k[0]-H[0])*(K[1]-H[1])-(k[1]-H[1])*(K[0]-H[0]),Se=w(0,(z+B)/2,T),G=be*(Se[0]-H[0])+we*(Se[2]-H[2])>0,$={u0:A.u0,u1:A.u1,v0:A.v0,v1:A.v1};G?e.atlas.quad(H,k,X,K,[1,1,1],$):e.atlas.quad(k,H,K,X,[1,1,1],{u0:A.u1,u1:A.u0,v0:A.v0,v1:A.v1})}for(let O of[-1,1])for(let z of[-1,1])for(let B=14+p()*3;B<125;B+=p.range(2.4,5)){if(p()<.35)continue;let H=O*(16.2+p()*1.1),k=z*B,X=1+(p()<.4?1:0);for(let K=0;K<X;K++){let be=w(H+O*p()*.6,k+(p()-.5)*.9,T+.7),we=new je().makeRotationY(p()*6.28);we.setPosition(be[0],be[1],be[2]),Q0(e,we,p,"grass",p.range(1.9,2.8))}}}yield;for(let A of[-18,18])for(let L of[-1,1]){yield;for(let D=11+p()*4;D<(g?125:170);D+=g?p.range(8.5,11):p.range(18,34)){let O=n+A+(p()-.5)*1.5,z=L*D;Wn(e,s(O,z,l(O,z),p()*6,!1),g?"sakura":"broad",p,g?p.range(1,1.25):p.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n.s,{}),y=x.y,M=u(n.s),c=M+1.4,f=Dt(n.s),d=[f.city,f.sakura,f.coast,f.country],g=o(n.s,0,y,0,!1),v=e.color,b=Math.max(s,n.s-_n)-n.s,T=Math.min(r,n.s+_n)-n.s;if(T>b+.01){let B=Math.max(2,Math.ceil((T-b)/3)+1),H=[-(M+1.5),-M,-M*.5,0,M*.5,M,M+1.5];t.gridN(B,H.length,($,ge)=>{let Pe=b+(T-b)*$/(B-1),te=n.s+Pe,ve=H[ge],Ne=y+fh(Pe,ve);return[x.x+x.fx*Pe+x.rx*ve-h,Ne,x.z+x.fz*Pe+x.rz*ve-p,0,1,0,Ts(te,Qn),ve,d[0],d[1],d[2],d[3],M,0,-1]});let k=[[-M,0],[-M,.2],[-c,.2],[-c,3.2]];for(let $=1;$<12;$++){let ge=Math.PI*(1-$/12);k.push([c*Math.cos(ge),3.2+3*Math.sin(ge)])}k.push([c,3.2],[c,.2],[M,.2],[M,0]);let X=[.86,.82,.72],K=[.44,.45,.47],be=[.62,.61,.58],we=[];for(let $=b;$<T-.01;$+=6)we.push($);we.push(T),v.setM(g);for(let $=0;$<we.length-1;$++)for(let ge=0;ge<k.length-1;ge++){let[Pe,te]=k[ge],[ve,Ne]=k[ge+1],Oe=Math.max(te,Ne)<=.21?be:Math.abs(Pe)>c-.01&&Math.abs(ve)>c-.01?X:K;v.quad([we[$],te,Pe],[we[$+1],te,Pe],[we[$+1],Ne,ve],[we[$],Ne,ve],Oe)}e.sodium.setM(g),e.sig.setM(g);let Se=c*Math.cos(Math.PI/6)-.12,G=3.2+3*Math.sin(Math.PI/6)-.08;for(let $=Math.ceil((b+_n-3)/6)*6+3-_n;$<T;$+=6)for(let ge of[-1,1])e.sodium.box($-.45,G-.07,ge*Se-.13,$+.45,G+.07,ge*Se+.13,null),pr(e,g,$,G-.1,ge*Se,1);for(let $=Math.ceil((b+_n)/24)*24-_n;$<T;$+=24)e.sig.box($-.3,.95,-c+.01,$+.3,1.2,-c+.06,null);for(let $=Math.ceil((b+_n-30)/60)*60+30-_n;$<T;$+=60)for(let ge of[-1.15,1.15])v.box($-1.1,5.2,ge-.36,$+1.1,5.78,ge+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),v.box($-.08,5.78,ge-.05,$+.08,6.15,ge+.05,[.4,.4,.42]);yield}let w=(B,H)=>{let k=Math.sin(B*12.9898+H*78.233+n.k*37.719)*43758.5453;return k-Math.floor(k)},_=(B,H,k)=>[B[0]+(H[0]-B[0])*k,B[1]+(H[1]-B[1])*k,B[2]+(H[2]-B[2])*k],S=[.5,.5,.47],E=[.55,.53,.47],R=[.6,.6,.57],C=[.58,.58,.55],P=[.42,.42,.4],A=(B,H)=>{let k=w(B,H);return L?_([.26,.29,.08],[.42,.3,.09],k):_([.22,.29,.08],[.36,.36,.12],k)},L=f.mountain>.5,D=c+2.6,O=2.6;for(let B of[-1,1]){let H=n.s+B*_n,k=B*(_n+.08);if(H<s||H>=r)continue;let X=[];for(let J of q1)J>=1.44&&X.push(M+J,-(M+J));for(let J of Y1)J>M+3.5&&J<M+21&&X.push(J,-J);for(let J=0;J<=24;J++)X.push(-c+2*c*J/24);X.push(-c-.01,c+.01,-D,D),X.sort((J,N)=>J-N);let K=J=>3.2+3*Math.sqrt(Math.max(0,1-(J/c)**2)),be=J=>Math.max(a(H-B*.03,J)-y,fh(B*(_n-.03),J)),we=J=>Math.abs(J)<=c+1e-6?K(J):a(H+B*.03,J)-y,Se=8.4;for(let J of X)Math.abs(J)<=D&&(Se=Math.min(Se,be(J)-.4));let G=Se>6.6;v.setM(g);let $=B,ge=(J,N,I,W,Y,ee,ue,xe)=>{let he=[k,I,J],me=[k,W,N],Fe=[k,ee,N],Ke=[k,Y,J],Ue=B<0?[he,me,Fe,Ke]:[me,he,Ke,Fe],Be=B<0?[ue,ue,xe,xe]:[ue,ue,xe,xe];for(let Ve of[0,1,2,0,2,3])v.vtx(Ue[Ve][0],Ue[Ve][1],Ue[Ve][2],$,0,0,0,0,Be[Ve])},Pe=(J,N,I)=>J+(N-J)*I;for(let J=0;J<X.length-1;J++){let N=X[J],I=X[J+1];if(I-N<1e-4)continue;let W=be(N),Y=be(I),ee=we(N),ue=we(I);if(W-ee<.01&&Y-ue<.01)continue;let xe=(N+I)/2,he=G&&Math.abs(xe)<D,me=ee,Fe=ue;if(he){let Ve=_(S,[.46,.46,.44],w(Math.floor(xe/2.4),3.1)),et=.8+2.6*w(Math.floor(xe/.8),7.7),lt=_(Ve,[.27,.27,.26],.35+.3*w(Math.floor(xe/.8),9.9)),Z=Math.min(Se,W),De=Math.min(Se,Y),ye=Math.max(ee,Z-et),ke=Math.max(ue,De-et);if(Math.abs(xe)>c){let He=Math.min(ye,ee+.9),Ae=Math.min(ke,ue+.9);ge(N,I,ee,ue,He,Ae,_(Ve,[.25,.29,.18],.45),Ve),ge(N,I,He,Ae,ye,ke,Ve,Ve)}else ge(N,I,ee,ue,ye,ke,Ve,Ve);if(ge(N,I,ye,ke,Z,De,Ve,lt),me=Z,Fe=De,W-Z<.01&&Y-De<.01)continue}let Ke=Math.floor(xe/O),Ue=me,Be=Fe;for(let Ve=Math.floor(Math.min(Ue,Be)/O)+1;Ue<W-.01||Be<Y-.01;Ve++){let et=Ve*O,lt=Math.min(W,Math.max(Ue,et)),Z=Math.min(Y,Math.max(Be,et)),De=A(Ke,Ve);if(ge(N,I,Ue,Be,lt,Z,_(De,[.2,.22,.1],.25),De),Ue=lt,Be=Z,Ve>60)break}}let te=Math.min(k,k+B*.12),ve=Math.max(k,k+B*.12),Ne=J=>{for(let N=0;N<X.length-1;N++)if(J>=X[N]&&J<=X[N+1]&&X[N+1]>X[N]){let I=(J-X[N])/(X[N+1]-X[N]);return[Pe(we(X[N]),we(X[N+1]),I),Pe(be(X[N]),be(X[N+1]),I)]}return null},Oe=X[0],Ee=X[X.length-1];for(let J=Math.ceil(Oe/O)*O;J<Ee;J+=O){let N=Ne(J);if(!N)continue;let I=(G&&Math.abs(J)<D?Math.max(Se+.3,N[0]):N[0])+.05,W=N[1]-.05;W-I>.4&&!(Math.abs(J)<=c+.3&&!G)&&v.box(te,I,J-.14,ve,W,J+.14,E)}for(let J=1;J<60;J++){let N=J*O,I=null,W=()=>{I&&I[1]-I[0]>.3&&v.box(te,N-.14,I[0],ve,N+.14,I[1],E),I=null},Y=!1;for(let ee=0;ee<X.length-1;ee++){let ue=X[ee],xe=X[ee+1];if(xe-ue<1e-4)continue;let he=(ue+xe)/2,me=Math.max(we(ue),we(xe),G&&Math.abs(he)<D?Se+.3:-1e9),Fe=Math.min(be(ue),be(xe));N>me+.2&&N<Fe-.2?(Y=!0,I?I[1]=xe:I=[ue,xe]):W()}if(W(),!Y&&N>30)break}G&&v.box(Math.min(k,k+B*.32),Se-.05,-D,Math.max(k,k+B*.32),Se+.3,D,R);let We=k+B*.32,ne=J=>-c+2*c*J/24,de=J=>[ne(J),K(ne(J))],Q=J=>[ne(J)*1.12,K(ne(J))+.6];for(let J=0;J<24;J++){let[N,I]=de(J),[W,Y]=de(J+1),[ee,ue]=Q(J),[xe,he]=Q(J+1);B<0?v.quad([We,I,N],[We,Y,W],[We,he,xe],[We,ue,ee],C):v.quad([We,Y,W],[We,I,N],[We,ue,ee],[We,he,xe],C),B<0?v.quad([k,I,N],[k,Y,W],[We,Y,W],[We,I,N],P):v.quad([k,Y,W],[k,I,N],[We,I,N],[We,Y,W],P),B<0?v.quad([k,he,xe],[k,ue,ee],[We,ue,ee],[We,he,xe],C):v.quad([k,ue,ee],[k,he,xe],[We,he,xe],[We,ue,ee],C)}for(let J of[-1,1])v.box(Math.min(k,We),.2,J>0?c:-c*1.12,Math.max(k,We),3.2,J>0?c*1.12:-c,C);e.atlas.setM(g);let ce=1.9,se=7.05,ie=7.85,F=k+B*.03,Me=Jo("tunnel"+(f.coast>.5?1:Math.abs(n.k)%2?2:0));B<0?e.atlas.quad([F,se,-ce],[F,se,ce],[F,ie,ce],[F,ie,-ce],[1,1,1],Me):e.atlas.quad([F,se,ce],[F,se,-ce],[F,ie,-ce],[F,ie,ce],[1,1,1],Me)}yield;let z=f.mountain>.5;for(let B=Math.max(s,n.s-an*.95)+m()*3;B<Math.min(r,n.s+an*.95);B+=m.range(4,8)){let H=Math.abs(B-n.s)>_n-4?17:4;for(let k of[-1,1]){let X=k*(M+m.range(H,50)),K=m();Wn(e,l(B,X,-.3,m()*6,!1),z?K<.5?"maple":K<.8?"cedar":"ginkgo":K<.65?"pine":"broad",m,m.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,l,a,u){let h=p=>Dt(p).snow;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*20;m<s;m+=t.range(22,40)){if(h(m)<.6||t()<.5)continue;let x=p*t.range(18,90);Xi(e,o(m,x,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(zs),litP:.62,fence:0,snow:!0});for(let y=0;y<2+t()*3;y++)Wn(e,o(m+t.range(-9,9),x+p*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let m=n+t()*5;m<s;m+=t.range(3,7))h(m)<.5||(t()<.32&&Wn(e,o(m,p*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Wn(e,o(m,p*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let p=Math.ceil(n/36)*36;p<s;p+=36){if(h(p)<.55)continue;let m=a(p);{let x=r(p,-(m+.95),l(p)+1.3),y=r(p+18,m+.95,l(p+18)+1.3);x.groundY=l(p),y.groundY=l(p+18),J0(e,x,1),J0(e,y,-1)}}}}*placeMountain(e,t,n,s,r,o,l,a,u){let h=p=>Dt(p).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(4.5,8.5)){if(h(m)<.45||Li(m,an+6))continue;let x=a(m),y=t();if(p>0){let M=y<.5?"maple":y<.72?"ginkgo":"cedar";Wn(e,o(m,x+t.range(17,70),-.25,t()*6,!1),M,t,t.range(.9,1.3))}else{let M=y<.55?"maple":y<.8?"cedar":"ginkgo";Wn(e,o(m,-(x+t.range(3.5,34)),-.25,t()*6,!1),M,t,t.range(.95,1.35))}}yield}for(let p=n+t()*4;p<s;p+=t.range(3,6)){if(h(p)<.5)continue;let m=t()<.7,x=-(a(p)+(m?t.range(108,205):t.range(36,100)));Wn(e,o(p,x,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new je);for(let p=Math.ceil(n/10)*10;p<s;p+=10){if(h(p)<.5||Li(p,an+4))continue;let m=a(p),x=r(p,-(m+.95),l(p));Wg(e,x)}for(let p=Math.ceil(n/14)*14;p<s;p+=14){if(h(p)<.6)continue;let m=this.path.curv(p);if(Math.abs(m)<1/230)continue;let x=a(p);m>0?mr(e,r(p,x+.42,l(p)),"chev_l",-1,1.25,.58):mr(e,r(p,-(x+1.15),l(p)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,l){let a=this.path,u={},h=Tt(Math.floor(yn(t,1789)*4294967295)),p=Yg(),m=Math.floor((n+Gt/2)/600)*600+300,x=Math.floor((n+Gt/2)/700)*700+120,y=Math.floor((n+Gt/2)/380)*380+190,M=yn(Math.round(y),5)<.5?-1:1;for(let g of[-1,1]){e.leaf.setM(K1);for(let v=n+h()*p;v<s;v+=p*h.range(.75,1.25)){if(dn(v)!=="country"||Gs(v,10)||ci(v,31)||g<0&&(Math.abs(v-m)<2.9||v>x-1.3&&v<x+2.7)||g===M&&Math.abs(v-y)<1.6)continue;a.at(v,u);let b=l(v),T=g*(b+.95+(h()-.5)*.36),w=u.y+Ms(v,T,u.y,b),_=(h()-.5)*.8,S=Math.cos(_)*g,E=Math.sin(_)*g;ed(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,h,h.range(.85,1.15))}yield}let c=Tt(Math.floor(yn(t,1811)*4294967295)),f=p>1?p*1.35:p;e.leaf.setM(K1);for(let g=n+c()*f;g<s;g+=f*c.range(.75,1.25)){if(Dt(g).coast<.6||Li(g,an+6))continue;let v=g-6-Math.round((g-6)/Ws)*Ws;if(Math.abs(v)<.9||Math.abs(g-(n+12))<.8)continue;a.at(g,u);let b=l(g),T=b+.95+(c()-.5)*.3,w=u.y+Ms(g,T,u.y,b),_=(c()-.5)*.8,S=Math.cos(_),E=Math.sin(_);ed(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,c,c.range(.62,.85),"bankC")}for(let g=n+c()*14;g<s;g+=c.range(14,30)){if(Dt(g).coast<.6||Li(g,an+6))continue;let v=g-6-Math.round((g-6)/Ws)*Ws;if(Math.abs(v)<1.4||Math.abs(g-(n+12))<1.2)continue;a.at(g,u);let b=l(g),T=b+c.range(1.3,2.3),w=u.y+Ms(g,T,u.y,b),_=new je().makeRotationY(c()*6.28);_.setPosition(u.x+u.rx*T-r,w,u.z+u.rz*T-o),Ah(e,_,c,c.range(1.1,1.4))}let d=Tt(Math.floor(yn(t,2417)*4294967295));for(let g of[-1,1])for(let v=n+d()*8;v<s;v+=d.range(8,14)){if(Dt(v).sakura<.6||ci(v,31))continue;let b=1+Math.floor(d()*3),T=g*(l(v)+2.95+d()*.4);a.at(v,u);let w=u.y+Ms(v,T,u.y,l(v));for(let _=0;_<b;_++){let S=_*.75+d()*.25,E=T+g*(d()-.5)*.3,R=new je().makeRotationY(d()*6.28);R.setPosition(u.x+u.fx*S+u.rx*E-r,w,u.z+u.fz*S+u.rz*E-o),d()<.5?Ah(e,R,d,d.range(1.05,1.35)):Ll(e,R,d,d.range(.45,.6))}}}*placeVerge(e,t,n,s,r,o,l,a,u,h){yield*this.placeBanks(e,a,n,s,u,h,l);for(let p of[-1,1]){for(let m=n+t()*1.2;m<s;m+=t.range(.55,1.5)){if(Gs(m,10)||ci(m,31)||Li(m,an+4))continue;let x=dn(m),y=l(m),M,c,f=.22,d=1;if(x==="country")M=y+t.range(2.05,2.8),c=.25,f=.35;else if(x==="sakura")M=y+2.68+t()*1.3,c=.55,f=.3;else if(x==="coast"){if(p<0)continue;M=y+.95+t()*1.7,c=.75,f=.18}else{if(x==="snow")continue;if(x==="mountain")M=p<0?y+1+t()*.35:y+.25+t()*.2,c=p<0?.55:.18,f=.12,d=.85;else{if(md(m,5))continue;M=y+3.02+t()*.1,c=.1,f=.08,d=.65}}if(t()>c)continue;let g=p*M;Q0(e,r(m,g,o(m,g),t()*6.28,!1),t,t()<f?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new je);let l=Math.max(1,Math.round((n-t)/2)),a=Ce.rail,u=[.62,.64,.66],h=[.74,.76,.79],p=[.95,.55,.16];for(let m=0;m<l;m++){let x=t+(n-t)*m/l,y=t+(n-t)*(m+1)/l,M=-(o(x)+.95),c=-(o(y)+.95),f=r(x),d=r(y);for(let v=0;v<fd.length-1;v++){let[b,T]=fd[v],[w,_]=fd[v+1];e.color.quad(s(x,M+T,f+b),s(y,c+T,d+b),s(y,c+_,d+w),s(x,M+_,f+w),a)}e.color.quad(s(y,c+.05,d+.5),s(x,M+.05,f+.5),s(x,M+.05,f+.84),s(y,c+.05,d+.84),u),e.color.noShadow=!0;let g=s(x,M-.04,f);if(e.color.cyl(g[0],f,g[2],.055,.055,.8,6,h,!1),Math.round(x/2)%2===0){let v=s(x,M+.035,f+.64),b=s(x+.09,M+.035,f+.64);e.color.quad(b,v,[v[0],v[1]+.07,v[2]],[b[0],b[1]+.07,b[2]],p)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,l,a,u,h,p,m,x){for(let c of[-1,1]){let f=n+t()*2;for(;f<s-2;){{let L=Dt(f);if(L.city<.62||L.mountain>.1){f+=4;continue}}{let L=fr(f+6);if(L&&f<L.s+8.5&&f+14>L.s-8.5){f=Math.max(f+1,L.s+8.5);continue}}let d=2*Math.round(f/300),g=d*150;if(f>g-$1(d)&&f<g+pd(d)){f=g+pd(d)+.05;continue}let v=a(f),b=u(f)||3,T=v+b+.15,w=t(),_=f<420||w<.84?"machiya":w<.89?"shop":w<.93?"apt":w<.96?"konbini":"house",S=_==="shop"?t.range(5,9):_==="machiya"?t.range(6,9.5):_==="apt"?t.range(10,16):_==="house"?t.range(7,9.5):t.range(12,14);if(f+S>s){if(s-f<5||_==="konbini")break;S=s-f-.2}{let L=f<g?d:d+2,D=L*150-$1(L);if(f+S>D-.1){if(D-.1-f<4){f=L*150+pd(L)+.05;continue}S=D-.1-f}}let E=f+S/2,R=l(E),C=t.pick(zs),P=.42,A=_==="machiya"&&t()<.6;{let L=r(E,c*T,R+.15),D={type:_,w:S,at:E,side:c,d:_==="apt"?t.range(10,14):t.range(8,12),floors:_==="shop"?t.int(2,4):_==="machiya"?t()<.7?2:3:_==="apt"?t.int(4,9):2,tint:A?X0[Math.floor(t()*X0.length)]:C,litP:P,plaster:A,fence:_==="house"&&t()<.5?1.2:0};if(Xi(e,L,t,D),_!=="house"&&t()<.28&&K0(e,r(E+(t()-.5)*(S-1.2),c*(T-.42),R+.15),t),(_==="shop"||_==="konbini"||_==="machiya")&&t()<.3)for(let O=0;O<1+t()*3;O++)zg(e,r(E-S/2+.8+O*.55,c*(T-.75),R+.15,Math.PI/2+.1),t);if(_==="house"&&t()<.6)for(let O=0;O<2+t()*3;O++)$0(e,r(E+1+O*.5,c*(T-.3),R+.15),t);if(t()<.03)for(let O=0;O<3;O++)Hg(e,r(E+O*.9,c*(v+.35),R))}f+=S+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Dt(d).city<.7||Dt(d).mountain>.1||t()<.3||Gs(d,18)||md(d,15))continue;let g=a(d),v=r(d,c*(g+3.2+t.range(14,20)),l(d)+.1);Xi(e,v,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(zs),litP:.4})}if(Dt(n+30).city>.7&&Dt(n+30).mountain<.1&&t()<.65){let d=n+t()*Gt;if(Gs(d,24)||md(d,20))continue;let g=r(d,c*t.range(55,150),l(d));Xi(e,g,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(zs),litP:.45})}}let y=Math.ceil(n/150),M=Math.floor((s-.01)/150);for(let c=y;c<=M;c++){let f=c*150;if(!v3(c)||dn(f)!=="city"||Dt(f).mountain>.1)continue;let d=a(f);yield*this.intersection(e,t,f,c,r,l,a,u,p,m,x),Nh(c)&&(mr(e,r(f-1,-(d+.4),l(f)+.15),"sign_blue",1),mr(e,r(f-6,-(d+.4),l(f)+.15),"sign_stop",1,2.1,.75),j0(e,r(f+7,d+.4,l(f)+.15),-1),c%8===4&&mr(e,r(f+20,-(d+.4),l(f)+.15),"sign_speed",1))}}houseGarden(e,t,n,s,r,o,l,a,u,h){let p=o.ww/2;if(a)for(let m=-p-.6;m<p+.6;m+=t.range(1.2,1.9)){if(Math.abs(m)<.9&&a===1&&t()<.7)continue;let x=l(n+m,s-r*t.range(1.1,1.7),0,t()*6,!1);a===2&&t()<.6?Ll(e,x,t,t.range(.75,1)):Vg(e,x,t,t.range(.5,.75))}for(let m=0;m<u;m++){let x=(m%2?-1:1)*(t()<.5?1:-1);Wn(e,l(n+x*(p+t.range(3.2,5.5)),s+r*t.range(1,o.wd),0,t()*6),"broad",t,t.range(.9,1.25))}for(let m=0;m<h;m++)Wn(e,l(n+t.range(-p-2,p+2),s+r*(o.wd+t.range(3.5,7)),0,t()*6),"broad",t,t.range(.95,1.3))}*placeSakura(e,t,n,s,r,o,l,a,u){let h=Tt(Math.floor(yn(Math.round(n/Gt),2423)*4294967295));for(let x of[-1,1]){for(let y=n+t()*4;y<s;y+=t.range(7.5,10)){if(Dt(y).sakura<.45||ci(y,30))continue;let M=a(y);if(Wn(e,o(y,x*(M+3.7),0,Hi.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),Dt(y).sakura>.6&&h()<.65)for(let c=0,f=2+(h()<.4?1:0),d=h()*6.28;c<f;c++){let g=d+c/f*6.28+(h()-.5)*1.2,v=h.range(.75,1.15),b=Math.max(M+2.9,M+3.7+Math.sin(g)*v*.8),T=o(y+Math.cos(g)*v,x*b,0,h()*6.28,!1);h()<.6?Ah(e,T,h,h.range(1.2,1.55)):Ll(e,T,h,h.range(.5,.65))}t()<.45&&Wn(e,o(y+3,x*(M+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let y=n+(x>0?0:12);y<s;y+=24){if(dn(y)!=="sakura"||ci(y,30))continue;let M=a(y);Il(e,r(y,x*(M+2.25),l(y)+.15)),Ts(y,48)<24&&l1(e,r(y+6,x*(M+3),u(y+6,x*(M+3))))}for(let y=n+t()*15;y<s;y+=t.range(14,24)){if(dn(y)!=="sakura"||t()<.35||ci(y,45))continue;let M=a(y),c=Rh("sakura",t);if(!c){Xi(e,o(y,x*(M+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(zs),litP:.45,fence:t()<.6?1.4:0});continue}let f=x*(M+t.range(19,26)),d=t()<.45?1.4:0;Xi(e,o(y,f),t,{type:"house",w:c.ww,d:c.wd,ptype:c,fence:d}),this.houseGarden(e,t,y,f,x,c,o,d?0:1,0,0)}}let m=Math.floor((n+Gt/2)/480)*480+240;m>=n&&m<s&&dn(m)==="sakura"&&!ci(m,60)&&id(e,r(m,0,l(m),0,!1),a(m)+1.6,6.4)}coastWall(e){return Dt(e).coast>=.7&&!Li(e,an+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=Tt(Math.floor(yn(e,5501)*4294967295)),s=e*Gt,r=s+Gt;for(let o=s+1+n()*12;o<r-3;o+=n.range(12,26)){let l=n.range(1.25,1.5),a=n.range(4.5,11),u=n()<.4?3:2,h=Math.min(o+a,r-.5);!this.coastWall(o)||!this.coastWall(h)||t.push({sa:o,sb:h,L:l,rows:u,dOut:(.8+(u-1)*1.45+.95)*l})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,s,r,o,l,a,u,h){let p=this.path,m={},x=this.coastHeaps(n),y=Tt(Math.floor(yn(n,5507)*4294967295)),M=Ts(s,Qn)-s;for(let w of x){let _=w.L;for(let E=0;E<w.rows;E++){let R=.8*_+E*1.45*_,C=(E===0?.28:E===1?0:-.3)*_;for(let P=w.sa+y()*.7*_;P<w.sb;P+=1.5*_*y.range(.88,1.12)){let A=a(P),L=h(P,-(A+Ml+R+(y()-.5)*.45*_),0);if(sd(e,L[0],cs+C+(y()-.5)*.3*_,L[2],y,_*y.range(.92,1.08),cs-.7,E===0?.8:.45,P+M),E===0&&w.rows>1&&y()<.4){let D=h(P+.7*_,-(A+Ml+R+.72*_),0);sd(e,D[0],cs+1.05*_,D[2],y,_*y.range(.9,1),cs-.7,.6,P+M)}}}let S=Math.max(3,Math.round(na.n*(w.sb-w.sa+2)/7));for(let E=0;E<S;E++){let R=w.sa+(w.sb-w.sa)*(E+.5)/S+(y()-.5)*1.4,C=a(R);p.at(R,m);let P=h(R,-(C+Ml+w.dOut*(.8+.3*y())-.2),cs+.35);u.puffs.push(P[0],P[1],P[2],-m.rx,-m.rz,w.dOut,y(),R+M)}yield}let c=[...this.coastHeaps(n-1),...x,...this.coastHeaps(n+1)],f=Ts(s,Qn),d=[];for(let w=0;w<=10;w++)d.push(s+w*6);for(let w of c)for(let _ of[w.sa-3.2,w.sa-.4,w.sb+.4,w.sb+3.2])_>s+.5&&_<r-.5&&d.push(_);d.sort((w,_)=>w-_);for(let w=0;w<d.length;w++){let _=d[w];if(w>0&&_-d[w-1]<.6)continue;if(!this.coastWall(_)){if(u.rows.length)break;continue}let S=1;for(let C=1;C<=3;C++)if(!this.coastWall(_-2*C)||!this.coastWall(_+2*C)){S=(C-1)/3;break}let E=a(_),R=new Float32Array(dd.length*7);dd.forEach((C,P)=>{let A=h(_,-(E+Ml+C),cs+.03),L=0;for(let D of c)L=Math.max(L,(1-At(.4,3.2,Math.max(D.sa-_,_-D.sb,0)))*(1-At(.2,3.4,C-D.dOut)));R.set([A[0],A[1],A[2],f+(_-s),C,L,S],P*7)}),u.rows.push(R)}u.rows.length&&(yield);let g=Tt(Math.floor(yn(n,5531)*4294967295)),v=null;if(dn(s+30)==="coast"&&g()<.5){let w=s+g()*Gt,_=a(w);Li(w,an+25)||(v={s:w,rw:_,T:Rh("coast",g),u:_+g.range(11,17)})}for(let w=s+t()*6;w<r;w+=t.range(5,9)){if(dn(w)!=="coast"||Li(w,an+6))continue;let _=a(w),S=t();if(S>=.58)continue;let E=_+t.range(4.5,30);v&&v.T&&Math.abs(w-v.s)<v.T.ww/2+2.5&&E>v.u-3.5&&E<v.u+v.T.wd+2.5||Wn(e,l(w,E,0,t()*6,!1),S<.48?"broad":"pine",t,t.range(1,1.4))}for(let w=s+4;w<r;)w+=t.range(18,30);for(let w=s+12;w<r;w+=48){if(dn(w)!=="coast"||Li(w,an+4))continue;let _=a(w);Z0(e,l(w,_+1),t)}let b=Tt(Math.floor(yn(n,5519)*4294967295));for(let w=s+b()*5;w<r;w+=b.range(5,11)){if(Dt(w).coast<.6||Li(w,an+6))continue;let _=1+Math.floor(b()*2.4);for(let S=0;S<_;S++){let E=w+S*b.range(1.1,1.8),R=a(E)+b.range(1.4,2.5),C=b()*6.28,P=b.range(1.05,1.45),A=E-6-Math.round((E-6)/Ws)*Ws,L=E-12-Math.round((E-12)/48)*48;Math.abs(A)<1.4||Math.abs(L)<1.2||Ll(e,l(E,R,0,C,!1),b,P)}}if(v){let{s:w,rw:_,T:S,u:E}=v;S?(Xi(e,l(w,E),g,{type:"house",w:S.ww,d:S.wd,ptype:S}),this.houseGarden(e,g,w,E,1,S,l,2,1,1)):Xi(e,l(w,_+g.range(9,16)),g,{type:"house",w:g.range(7,10),d:8,floors:g()<.5?2:1,tint:g.pick(zs),litP:.5,fence:0})}if(dn(s+30)==="coast"&&t()<.55){let w=s+t()*Gt;d1(e,o(w,-(a(w)+t.range(45,220)),cs-.25,t()*6,!1),t)}let T=Math.floor((s+Gt/2)/1500)*1500+700;T>=s&&T<r&&dn(T)==="coast"&&!Li(T,an*1.6)&&f1(e,o(T,-(a(T)+75),cs-1,0,!1))}*placeCountry(e,t,n,s,r,o,l,a,u){for(let y of[-1,1]){yield;for(let M=n+t()*20;M<s;M+=t.range(20,40)){if(dn(M)!=="country"||t()<.55||Gs(M,16)||ci(M,48))continue;let c=y*t.range(16,95),f=o(M,c),d=Rh("country",t);if(d){Xi(e,f,t,{type:"house",w:d.ww,d:d.wd,ptype:d}),this.houseGarden(e,t,M,c,y,d,o,1,2,2);continue}Xi(e,f,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(zs),litP:.5,fence:0});for(let g=0;g<2+t()*3;g++){let v=c+y*t.range(6,14),b=M+t.range(-8,8);Wn(e,o(b,v,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let M=n+t()*8;M<s;M+=t.range(5,9)){if(dn(M)!=="country"||Gs(M,7)||ci(M,36))continue;let c=y*t.range(140,210);Wn(e,o(M,c,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Gs(M+2,8)&&!ci(M+2,34)&&Wn(e,o(M+2,y*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Gt/2)/600)*600+300;if(h>=n&&h<s&&dn(h)==="country"&&!ci(h,40)){let y=a(h);c1(e,r(h,-(y+1.6),l(h)-.08),t)}let p=Math.floor((n+Gt/2)/700)*700+120;if(p>=n&&p<s&&dn(p)==="country"&&!ci(p,40)){let y=a(p);K0(e,r(p,-(y+.95),l(p)-.08),t),Z0(e,r(p+2,-(y+.8),l(p)-.08),t)}let m=Math.floor((n+Gt/2)/900)*900+450;if(m>=n&&m<s&&dn(m)==="country"&&!ci(m,40)){let y=a(m);p1(e,o(m,y+5),t)}let x=Math.floor((n+Gt/2)/380)*380+190;if(x>=n&&x<s&&dn(x)==="country"&&!ci(x,40)&&!Gs(x,30)){let y=a(x),M=(yn(Math.round(x),5)<.5?-1:1)*(y+2.75);o1(e,o(x,M,0))}for(let y=n;y<s;y+=30){if(dn(y)!=="country")continue;let M=this.path.curv(y);if(Math.abs(M)>1/450&&t()<.5){let c=M>0?-1:1,f=a(y);j0(e,o(y,c*(f+.75)),c>0?-1:1)}}}};var ia={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function J1(i){let e=i.get("weather"),t={mode:ia[e]?e:"auto",kind:ia[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return ia[e]&&(t.ov=ia[e][0],t.rain=ia[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=ia[t.kind];t.ov+=Zt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=Zt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var qi={uHeadPos:{value:new V},uHeadDir:{value:new V(0,0,1)},uHeadI:{value:0},uLampW:{value:[new mt(0,-1e3,0,0),new mt(0,-1e3,0,0)]},uLampCol:{value:new fe(1,.8,.52)}},Uh=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function j1(){let e=new V(42,22,42),t=new rn(1,1),n=new vs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Pn(s,4)),n.instanceCount=2400;let r=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new V},uAmt:{value:0},uBox:{value:e},uCol:{value:new fe(1,1,1)},...qi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Uh}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new ht(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function Q1(){let e=new V(46,24,46),t=new rn(1,1);t.translate(0,.5,0);let n=new vs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Pn(s,4)),n.instanceCount=2600;let r=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new V},uRain:{value:0},uBox:{value:e},uCol:{value:new fe(.8,.85,.95)},...qi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Uh}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new ht(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var ui=64,xd=[2.2,1.3,2.6],x3=[-2.4,.35,-1.6];function ev(){let i=new Float32Array(ui*3),e=new Float32Array(ui*3),t=new Float32Array(ui*4),n=new Float32Array(ui),s=new Uint8Array(ui),r=new Float32Array(ui);for(let g=0;g<ui;g++)t[g*4]=t[g*4+1]=1;let o=new rn(1,1),l=new vs;l.index=o.index,l.setAttribute("position",o.attributes.position),l.setAttribute("uv",o.attributes.uv),l.instanceCount=0;let a=new Float32Array(ui*4),u=new Float32Array(ui*4),h={uP:{value:a},uC:{value:u},uNoiseTex:Ie.uNoiseTex,uAmb:{value:new fe},uSun:{value:new fe},uTail:{value:new mt},uCam:{value:new V},...qi},p=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${ui}], uC[${ui}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${Uh}
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
      }`}),m=new ht(l,p);m.frustumCulled=!1,m.renderOrder=4,m.visible=!1;let x=0,y=0,M=0,c=0,f=!1;function d(g,v,b,T,w,_,S,E,R,C,P){let A=x;x=(x+1)%ui,i[A*3]=v,i[A*3+1]=b,i[A*3+2]=T,e[A*3]=w,e[A*3+1]=_,e[A*3+2]=S,t[A*4]=0,t[A*4+1]=E,t[A*4+2]=R,t[A*4+3]=C,n[A]=P,s[A]=g,r[A]=Math.random()}return{mesh:m,update(g,v,b,T,w,_,S,E,R,C,P){if(!P){if(f){for(let G=0;G<ui;G++)t[G*4]=t[G*4+1];f=!1}m.visible=!1;return}let A=v.position,L=v.rotation.y,D=Math.cos(L),O=Math.sin(L),z=O*b,B=D*b,H=Math.min(1,Math.max(0,(b-2)/14)),k=w>.3?2:0,X=k?w:T;for(y+=24*X*H*g;y>=1;){y-=1;let G=(c^=1)?1:-1,$=G*.67,ge=-1.28-Math.random()*.2,Pe=Math.random(),te=Math.random(),ve=1.6+1.6*Pe,Ne=k?.5+.7*te:.9+1*te,Oe=G*(.3+.6*Math.random());d(k,A.x+$*D+ge*O,A.y+.12,A.z-$*O+ge*D,z*.55-O*ve+Oe*D,Ne,B*.55-D*ve-Oe*O,k?.45+.3*Pe:.55+.35*Pe,.2+.1*te,k?.7+.35*te:.8+.4*te,.5*(.5+.5*H)*Math.min(1,X*1.5))}for(M+=(5+4*H)*_*g;M>=1;){M-=1;let G=Math.random();d(1,A.x-.42*D-1.78*O,A.y+.26,A.z+.42*O-1.78*D,z*.5-O*.8,.25+.2*G,B*.5-D*.8,1.3+.6*G,.14,.8+.4*Math.random(),.32*Math.min(1,_*1.5))}let K=0,be=Math.exp(-xd[0]*g),we=Math.exp(-xd[1]*g),Se=Math.exp(-xd[2]*g);for(let G=0;G<ui;G++){let $=G*4;if(t[$]>=t[$+1])continue;let ge=t[$]+=g,Pe=t[$+1];if(ge>=Pe)continue;let te=s[G],ve=te===0?be:te===1?we:Se,Ne=G*3,Oe=i[Ne]-C.x,Ee=i[Ne+1]-C.y,We=i[Ne+2]-C.z;if(Oe*Oe+Ee*Ee+We*We<20.25){t[$]=Pe;continue}e[Ne]*=ve,e[Ne+1]=e[Ne+1]*ve+x3[te]*g,e[Ne+2]*=ve,i[Ne]+=e[Ne]*g,i[Ne+1]=Math.max(A.y+.05,i[Ne+1]+e[Ne+1]*g),i[Ne+2]+=e[Ne+2]*g;let ne=ge/Pe,de=K*4;a[de]=i[Ne],a[de+1]=i[Ne+1],a[de+2]=i[Ne+2],a[de+3]=t[$+2]+(t[$+3]-t[$+2])*Math.sqrt(ne),u[de]=n[G]*Math.min(1,ne*6)*(1-ne)*(1-ne),u[de+1]=te,u[de+2]=r[G],K++}f=K>0,m.visible=f,l.instanceCount=K,f&&(h.uAmb.value.copy(S),h.uSun.value.copy(E),h.uTail.value.copy(R),h.uCam.value.copy(C))},shift(g,v){for(let b=0;b<ui;b++)i[b*3]-=g,i[b*3+2]-=v}}}var Yr=24,y3=55,_3=12;function tv(){let i=[],e=new Float32Array(Yr*2*2),t=new Float32Array(Yr*2*3);for(let u=0;u<Yr;u++)if(e.set([u,-1,u,1],u*4),u<Yr-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new vt;n.setAttribute("position",new bt(t,3)),n.setAttribute("aI",new bt(e,2)),n.setIndex(i);let s=new Float32Array(Yr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new fe},uTime:{value:0},uNoiseTex:Ie.uNoiseTex},o=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${Yr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${Ii}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),l=new ht(n,o);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let a={};return{mesh:l,update(u,h,p,m,x,y,M,c){if(l.visible=y>.01,!!l.visible){for(let f=0;f<Yr;f++)u.at(h+y3+f*_3,a),s[f*4]=a.x-p,s[f*4+1]=a.y,s[f*4+2]=a.z-m,s[f*4+3]=a.h;r.uW.value=x*.85,r.uHot.value=y,r.uTime.value=M,r.uSky.value.copy(c)}}}}var sa=1.6;function nv(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,l=t?16:14,a=[4,Math.round(s*.4),Math.round(s*.65),s].filter((P,A,L)=>!A||P>L[A-1]),u=[s,Math.round((s+r)/2),r],h=(P,A)=>{let L=new vs;return L.setAttribute("position",new $e(P,3)),L.setIndex(A),L},p=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],m=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],x=new Float32Array(dr*4),y=new Float32Array(dr),M={uG:{value:x},uGM:{value:y},uGP:{value:new mt(0,1/sa,3.1,0)},uGQ:{value:new mt(0,1.05,3,0)},uRingD:{value:new mt(s,r,0,0)}},c=[],f=(P,A,L)=>{let D={uRing:{value:new mt(0,0,L?2*n:n,L)},uRingC:{value:new mt(0,0,0,0)}},O=h(...L?m:p);O.instanceCount=0;let z=new ht(O,ug(D,M));z.frustumCulled=!1,z.castShadow=!1,z.receiveShadow=!1,z.visible=!1,c.push({mesh:z,u:D,dA:P,dB:A,size:L?2*n:n,W:L?l:o,last:A===s||A===r})};for(let P=0;P<a.length-1;P++)f(a[P],a[P+1],0);for(let P=0;P<u.length-1;P++)f(u[P],u[P+1],1);let d=new Int32Array(64).fill(-2147483648),g=new Float32Array(64),v=new Uint8Array(64),b=P=>{let A=P&63;if(d[A]!==P){d[A]=P;let L=P*sa,D=fr(L),O=ki(L),z=Dt(L).country,B=Math.min(1,Math.max(0,(z-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(L-D.s)-13)/7)):1)*(O?Math.min(1,Math.max(0,(Math.abs(L-O.s)-38)/10)):1);g[A]=B>0?3+4*Math.round(B*15):0,v[A]=z>0?1:0}return A},T=P=>g[b(P)],w=P=>v[b(P)],_={},S=NaN,E=NaN,R=NaN,C=0;return{meshes:c.map(P=>P.mesh),hide(){for(let P=0;P<c.length;P++)c[P].mesh.visible=!1},warm(P){for(let A of c)A.mesh.visible=P,P&&(A.u.uRing.value.y=1,A.u.uRingC.value.set(1,1,A.W,0),A.mesh.geometry.instanceCount=2)},update(P,A,L,D,O,z,B){let H=Math.floor((A-3)/sa);if(!w(H)&&!w(H+dr-1))C=0;else{if(H!==S||D!==E||O!==R){S=H,E=D,R=O,C=0;for(let k=0;k<dr;k++)P.at((H+k)*sa,_),x[k*4]=_.x-D,x[k*4+1]=_.y,x[k*4+2]=_.z-O,x[k*4+3]=_.h,C|=y[k]=T(H+k)}M.uGP.value.set(H*sa,1/sa,z,A),M.uGQ.value.set(L,B,3,0)}for(let k=0;k<c.length;k++){let X=c[k];if(!C){X.mesh.visible=!1;continue}let K=Math.floor((A+X.dA)/X.size),be=Math.floor((A+X.dB)/X.size)+(X.last?1:0),we=B*X.dB+3,Se=z+2.6,G=Math.min(X.W,Math.max(0,we-(Se+L))),$=Math.min(X.W,Math.max(0,we-(Se-L))),ge=G>0?Math.ceil(G/X.size)+1:0,Pe=$>0?Math.ceil($/X.size)+1:0;X.u.uRing.value.x=K,X.u.uRing.value.y=be-K,X.u.uRingC.value.set(ge,Pe,X.W,0),X.mesh.geometry.instanceCount=(be-K)*(ge+Pe),X.mesh.visible=X.mesh.geometry.instanceCount>0}}}}var ra=72;function b3(){let i=[],e=[],t=(s,r,o,l,a,u)=>{i.push(...s,...r,...o),e.push(l,a,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new vt;return n.setAttribute("position",new $e(i,3)),n.setAttribute("aWing",new $e(e,1)),n}function iv(){let i=b3(),e=new Pn(new Float32Array(ra*3),3),t=new Pn(new Float32Array(ra*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new ft({side:bn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:oe.fog},uFogD:{value:.002},uCam:{value:new V}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new rs(i,n,ra);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},l=new je,a=new vn,u=new Kn(0,0,0,"YXZ"),h=new V,p=new V,m=()=>r.reduce((M,c)=>M+c.birds.length,0);function x(M,c,f,d){let g=M==="small"?6+Math.floor(Math.random()*7):M==="crow"?3+Math.floor(Math.random()*5):4;if(m()+g>ra)return;let v=45+Math.random()*85,b=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,w=new V().copy(c).addScaledVector(f,v).addScaledVector(d,b-T*75);w.y=c.y+(M==="crow"?18+Math.random()*24:10+Math.random()*18);let _=M==="small"?11+Math.random()*4:8+Math.random()*3,S=new V().copy(d).multiplyScalar(T*_).addScaledVector(f,(Math.random()-.3)*_*.6),E=M==="small"?.8:1.45,R=Array.from({length:g},(C,P)=>({off:new V((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:M==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:M,c:w,vel:S,birds:R,size:E,life:60})}function y(M,c,f,d){if(r.some(b=>b.kind==="gull")||m()+4>ra)return;let g=new V().copy(M).addScaledVector(c,70).addScaledVector(f,-d*45);g.y=M.y+18;let v=Array.from({length:4},(b,T)=>({off:new V,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:g,vel:new V,birds:v,size:1.25,life:1e9})}return{mesh:s,update(M,c,f,d,g,v,b,T,w){n.uniforms.uTime.value=c,n.uniforms.uCam.value.copy(f);let _=b>.35&&T<.3,S=oe.warm>.25&&oe.sunEl<.6&&b>.2;_&&(o.small-=M)<0&&(o.small=22+Math.random()*35,v.coast<.6&&x("small",f,d,g)),(S||_&&v.city+v.country>.6&&Math.random()<4e-4)&&(o.crow-=M)<0&&(o.crow=S?14+Math.random()*18:60,x("crow",f,d,g)),v.coast>.6&&_&&y(f,d,g,1);let E=[.1+.08*b,.11+.09*b,.15+.1*b],R=0;for(let C=r.length-1;C>=0;C--){let P=r[C];if(P.kind==="gull"?(P.c.lerp(h.copy(w).addScaledVector(d,60).addScaledVector(g,-42).setY(w.y+16),Math.min(1,M*.25)),(v.coast<.4||!_)&&(P.life=Math.min(P.life,8),P.c.y+=M*6)):P.c.addScaledVector(P.vel,M),P.life-=M,P.life<0||P.kind!=="gull"&&P.c.distanceTo(f)>300){r.splice(C,1);continue}for(let A of P.birds){if(R>=ra)break;let L,D,O,z;P.kind==="gull"?(A.w+=M*(14/A.r),L=P.c.x+Math.cos(A.w)*A.r,O=P.c.z+Math.sin(A.w)*A.r,D=P.c.y+A.h+Math.sin(c*.4+A.ph)*2,z=Math.atan2(-Math.sin(A.w),Math.cos(A.w))):(L=P.c.x+A.off.x+Math.sin(c*.7+A.ph)*1.2,D=P.c.y+A.off.y+Math.sin(c*1.1+A.ph)*.6,O=P.c.z+A.off.z,z=Math.atan2(P.vel.x,P.vel.z)),u.set(0,z,Math.sin(c+A.ph)*.15),a.setFromEuler(u),p.setScalar(P.size),l.compose(h.set(L,D,O),a,p),s.setMatrixAt(R,l);let B=P.kind==="gull"?[.92*(.5+.5*b),.93*(.5+.5*b),.95*(.5+.5*b)]:P.kind==="crow"?[.05,.05,.07]:E;e.setXYZ(R,B[0],B[1],B[2]),t.setXY(R,A.fq,A.ph),R++}}s.count=R,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(M){n.uniforms.uFogD.value=M},shift(M,c){for(let f of r)f.c.x-=M,f.c.z-=c}}}var Vl=new V;function Yi(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),a=Math.PI/4;Vl.copy(e),Vl[n]=0,Vl.normalize();let u=.5*o/(o+l),h=1-Vl.angleTo(i)/a;return Math.sign(Vl[t])===1?h*u:l/(o+l)+u+u*(1-h)}var kn=class i extends Qt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let a=new V,u=new V,h=new V(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,m=this.attributes.normal.array,x=this.attributes.uv.array,y=p.length/6,M=new V,c=.5/o;for(let f=0,d=0;f<p.length;f+=3,d+=2)switch(a.fromArray(p,f),u.copy(a),u.x-=Math.sign(u.x)*c,u.y-=Math.sign(u.y)*c,u.z-=Math.sign(u.z)*c,u.normalize(),p[f+0]=h.x*Math.sign(a.x)+u.x*r,p[f+1]=h.y*Math.sign(a.y)+u.y*r,p[f+2]=h.z*Math.sign(a.z)+u.z*r,m[f+0]=u.x,m[f+1]=u.y,m[f+2]=u.z,Math.floor(f/y)){case 0:M.set(1,0,0),x[d+0]=Yi(M,u,"z","y",r,n),x[d+1]=1-Yi(M,u,"y","z",r,t);break;case 1:M.set(-1,0,0),x[d+0]=1-Yi(M,u,"z","y",r,n),x[d+1]=1-Yi(M,u,"y","z",r,t);break;case 2:M.set(0,1,0),x[d+0]=1-Yi(M,u,"x","z",r,e),x[d+1]=Yi(M,u,"z","x",r,n);break;case 3:M.set(0,-1,0),x[d+0]=1-Yi(M,u,"x","z",r,e),x[d+1]=1-Yi(M,u,"z","x",r,n);break;case 4:M.set(0,0,1),x[d+0]=1-Yi(M,u,"x","y",r,e),x[d+1]=1-Yi(M,u,"y","x",r,t);break;case 5:M.set(0,0,-1),x[d+0]=Yi(M,u,"x","y",r,e),x[d+1]=1-Yi(M,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Bh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,a=new vt,u=0;for(let h=0;h<i.length;++h){let p=i[h],m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(p.attributes[x]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[x]===void 0&&(o[x]=[]),o[x].push(p.morphAttributes[x])}if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(u,x,h),u+=x}}if(t){let h=0,p=[];for(let m=0;m<i.length;++m){let x=i[m].index;for(let y=0;y<x.count;++y)p.push(x.getX(y)+h);h+=i[m].attributes.position.count}a.setIndex(p)}for(let h in r){let p=sv(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let m=0;m<p;++m){let x=[];for(let M=0;M<o[h].length;++M)x.push(o[h][M][m]);let y=sv(x);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(y)}}}return a}function sv(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new bt(o,t,n),a=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=a/t;for(let m=0,x=h.count;m<x;m++)for(let y=0;y<t;y++){let M=h.getComponent(m,y);l.setComponent(m+p,y,M)}}else o.set(h.array,a);a+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function M3(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new ri(i);return n.colorSpace=qt,n}var yd=4;function S3(){let t=document.createElement("canvas");t.width=128*yd,t.height=128;let n=t.getContext("2d"),s=(o,l,a,u,h)=>{n.beginPath(),n.moveTo(o+h,l),n.arcTo(o+a,l,o+a,l+u,h),n.arcTo(o+a,l+u,o,l+u,h),n.arcTo(o,l+u,o,l,h),n.arcTo(o,l,o+a,l,h),n.closePath(),n.fill()};for(let o=0;o<yd;o++){let l=o*128,a=n.createLinearGradient(0,0,0,128);a.addColorStop(0,"#9fbfe6"),a.addColorStop(.45,"#4a6690"),a.addColorStop(1,"#1d2638"),n.fillStyle=a,n.fillRect(l,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(l+14,84,30,50,9),s(l+84,84,30,50,9),n.fillRect(l+6,112,116,16),s(l+52,92,24,40,7)),o===2&&(s(l+62,66,44,70,12),n.fillRect(l+50,118,70,10)),o===3&&(s(l+70,78,40,60,11),n.fillRect(l+56,120,64,8)),n.save(),n.beginPath(),n.rect(l,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(l+40,0),n.lineTo(l+68,0),n.lineTo(l+20,128),n.lineTo(l-8,128),n.fill(),n.restore()}let r=new ri(t);return r.colorSpace=qt,r}function rv(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/yd)}return i}function ov(){let i=new fn,e=new fn,t=new fn;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new mt,new mt],s=new fe(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=O0(new on({color:"#ffffff",vertexColors:!0,gradientMap:El}),.85,.06,"paint-l",r),l=(ne,de)=>Object.assign(new fe(ne),{gloss:de}),a=l("#9fd8c8",1),u=l("#eeece4",.6),h=l("#2a2c33",.35),p=l("#1b1c20",.04),m=l("#c8ccd2",.8),x=l("#d4d8de",1.3),y=(ne,de)=>{let Q=ne.attributes.position.count,ce=new Float32Array(Q*4);for(let se=0;se<Q;se++)ce.set([de.r,de.g,de.b,de.gloss],se*4);return ne.setAttribute("color",new $e(ce,4)),ne},M=O0(new on({color:"#ffffff",map:S3(),gradientMap:xi}),1.2,.08,"glass-l",r),c=new on({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:xi}),f=new on({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:xi}),d=new on({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:xi}),g=new on({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:xi}),v=new on({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:xi}),b=new xn({map:M3()}),T=new Map,w=[],_=!1,S=new je,E=new Kn,R=new vn,C=new V(1,1,1),P=(ne,de,Q,ce,se,ie=0,F=0,Me=0)=>{let J=ne.index?ne.toNonIndexed():ne;if(de.isColor&&(y(J,de),de=o),E.set(ie,F,Me),R.setFromEuler(E),S.compose(new V(Q,ce,se),R,C),J.applyMatrix4(S),_){w.push(J);return}T.has(de)||T.set(de,[]),T.get(de).push(J)},A=l("#16171b",0),L=l("#2b3134",.15),D=l("#b9bfc6",.9),O=l("#4d5258",.4),z=l("#9a1c22",.6),B=1.7,H=.745,k=.3,X=(ne,de,Q)=>{let ce=Math.min(1,Math.max(0,(Q-ne)/(de-ne)));return ce*ce*(3-2*ce)},K=ne=>ne<.8?1.8:ne<1.22?1.8-.6*X(.8,1.22,ne):1.2-.1*((ne-1.22)/(B-1.22))**2,be=ne=>1-.085*X(1.15,1.8,ne),we=(ne,de)=>{let Q=H-de,ce=k+de*.6,se=K(ne)-de*(ne<0?.4:1),ie=Math.max(.05,.1-de*.5),F=Math.max(.06,(ne<.8?.17:.13)-de*.5),Me=[[0,ce],[(Q-ie)*.5,ce],[Q-ie,ce]];for(let N=1;N<4;N++){let I=-Math.PI/2+N/8*Math.PI;Me.push([Q-ie+ie*Math.cos(I),ce+ie+ie*Math.sin(I)])}for(let N=0;N<=8;N++)Me.push([Q,ce+ie+N/8*(se-F-ce-ie)]);for(let N=1;N<5;N++){let I=N/10*Math.PI;Me.push([Q-F+F*Math.cos(I),se-F+F*Math.sin(I)])}Me.push([Q-F,se],[(Q-F)*.5,se],[0,se]);let J=Me.map(([N,I])=>[N*be(I),I]);for(let N=Me.length-2;N>0;N--)J.push([-J[N][0],J[N][1]]);return J};{let ne=[];for(let W=0;W<=6;W++){let Y=W/6*Math.PI/2;ne.push([-B+.2*(1-Math.cos(Y)),.2*(1-Math.sin(Y))])}for(let W=-B+.2+.12;W<.78;W+=.13)ne.push([W,0]);for(let W=.8;W<1.225;W+=.06)ne.push([W,0]);for(let W of[1.3,1.39])ne.push([W,0]);for(let W=6;W>=0;W--){let Y=W/6*Math.PI/2;ne.push([B-.22*(1-Math.cos(Y)),.22*(1-Math.sin(Y))])}let ce=[],se=[],ie=ne.map(([W,Y])=>we(W,Y)),F=ie[0].length;ie.forEach((W,Y)=>W.forEach(([ee,ue])=>ce.push(ee,ue,ne[Y][0])));for(let W=0;W<ie.length-1;W++)for(let Y=0;Y<F;Y++){let ee=W*F+Y,ue=W*F+(Y+1)%F,xe=ee+F,he=ue+F;se.push(ee,ue,xe,ue,he,xe)}for(let[W,Y]of[[0,-1],[ie.length-1,1]]){let ee=ce.length/3,ue=ie[W];ce.push(0,(ue[0][1]+ue[F/2|0][1])/2,ne[W][0]);for(let xe=0;xe<F;xe++){let he=W*F+xe,me=W*F+(xe+1)%F;Y<0?se.push(ee,me,he):se.push(ee,he,me)}}let Me=new vt;Me.setAttribute("position",new $e(ce,3)),Me.setIndex(se),Me.computeVertexNormals();{let W=Me.attributes.normal,Y=F*10+12;if(W.getX(Y)<0){for(let ee=0;ee<se.length;ee+=3){let ue=se[ee+1];se[ee+1]=se[ee+2],se[ee+2]=ue}Me.setIndex(se),Me.computeVertexNormals()}}Me.setAttribute("uv",new $e(new Float32Array(ce.length/3*2),2));let J=Me.toNonIndexed(),N=J.attributes.position,I=new Float32Array(N.count*4);for(let W=0;W<N.count;W+=3){let Y=(N.getY(W)+N.getY(W+1)+N.getY(W+2))/3,ee=(N.getZ(W)+N.getZ(W+1)+N.getZ(W+2))/3,ue=Y>1.665&&ee<.84&&ee>-1.52?u:a;for(let xe=0;xe<3;xe++)I.set([ue.r,ue.g,ue.b,ue.gloss],(W+xe)*4)}J.setAttribute("color",new $e(I,4)),P(J,o,0,0,0)}P(new kn(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let Se=(ne,de,Q,ce,se)=>{let ie=new vt,F=[],Me=[],J=[],N=[];for(let I=0;I<=Q;I++)for(let W=0;W<=de;W++){let Y=W/de,ee=I/Q,ue=ne(Y,ee);F.push(ue[0]+ue[3]*.004,ue[1]+ue[4]*.004,ue[2]+ue[5]*.004),Me.push(ue[3],ue[4],ue[5]),J.push(Y,ee)}for(let I=0;I<Q;I++)for(let W=0;W<de;W++){let Y=I*(de+1)+W,ee=Y+1,ue=Y+de+1,xe=ue+1;N.push(Y,ee,xe,Y,xe,ue)}ie.setAttribute("position",new $e(F,3)),ie.setAttribute("normal",new $e(Me,3)),ie.setAttribute("uv",new $e(J,2)),ie.setIndex(N);{let I=new V().fromArray(F,0),W=new V().fromArray(F,3),Y=new V().fromArray(F,(de+1)*3),ee=new V().fromArray(Me,0);if(W.sub(I).cross(Y.sub(I)).dot(ee)<0){for(let ue=0;ue<N.length;ue+=3){let xe=N[ue+1];N[ue+1]=N[ue+2],N[ue+2]=xe}ie.setIndex(N)}}return rv(ie,ce,se)},G=ne=>{let Q=H*(be(ne+.01)-be(ne-.01))/.02,ce=Math.hypot(1,Q);return[1/ce,-Q/ce]},$=ne=>{let de=.8,Q=1.22;for(let ce=0;ce<24;ce++){let se=(de+Q)/2;K(se)>ne?de=se:Q=se}return de};for(let ne of[-1,1]){let de=ne<0,Q=(ce,se,ie)=>P(Se((F,Me)=>{let J=1.21+Me*.39,N=ne>0?se(J)+(ce(J)-se(J))*F:ce(J)+(se(J)-ce(J))*F,[I,W]=G(J);return[ne*H*be(J),J,N,ne*I,W,0]},1,6,ie,!1),M,0,0,0);Q(()=>.06,ce=>$(ce)-.07,2),Q(()=>-.72,()=>-.08,3),Q(()=>-1.42,()=>-.84,0),P(new Qt(.012,.41,.07),h,ne*.731,1.405,-.01,0,0,-ne*.07),P(new Qt(.014,.022,2.42),A,ne*.748,1.2,-.26);for(let[ce,se]of[[.8,.64],[-.06,.42],[-.76,.64]])P(new Qt(.008,1.17-se,.012),L,ne*.749,(se+1.17)/2,ce);P(new Qt(.02,.028,.13),L,ne*.752,1.06,.06),P(new Qt(.02,.028,.13),L,ne*.752,1.06,-.2),P(new Qt(.01,.022,.62),L,ne*.749,1.155,-1.08);for(let ce of[1.12,-1.12])P(new Ir(.345,18,0,Math.PI),A,ne*.749,.29,ce,0,ne*Math.PI/2,0),P(new el(.35,.024,5,18,Math.PI),h,ne*.752,.29,ce,0,ne*Math.PI/2,0);P(new kn(.1,.12,.2,2,.04),a,ne*.83,1.24,1.02),P(new Qt(.07,.035,.05),h,ne*.775,1.2,1.03),P(new kn(.16,.4,.05,3,.075),x,ne*.56,.95,-1.703),P(new kn(.13,.37,.05,3,.062),c,ne*.56,.95,-1.716),P(new kn(.036,.27,.02,2,.016),f,ne*.56,.95,-1.742),P(new kn(.11,.06,.04,2,.02),g,ne*.56,.69,-1.707)}{let ne=new Co,de=.52,Q=1.15,ce=1.66,se=.07;ne.moveTo(-de+se,Q),ne.lineTo(de-se,Q),ne.absarc(de-se,Q+se,se,-Math.PI/2,0),ne.lineTo(de,ce-se),ne.absarc(de-se,ce-se,se,0,Math.PI/2),ne.lineTo(-de+se,ce),ne.absarc(-de+se,ce-se,se,Math.PI/2,Math.PI),ne.lineTo(-de,Q+se),ne.absarc(-de+se,Q+se,se,Math.PI,Math.PI*1.5);let ie=new ja(ne,6),F=ie.attributes.position,Me=ie.attributes.uv;for(let J=0;J<F.count;J++){let N=F.getX(J),I=F.getY(J),W=(I-Q)/(ce-Q);Me.setXY(J,(N+de)/(2*de),W),F.setX(J,N*(1-.08*W))}P(rv(ie,1),M,0,0,-B-.004,0,Math.PI,0)}P(new kn(.36,.04,.03,2,.014),d,0,1.69,-1.712),P(Se((ne,de)=>{let Q=1.19-de*.36,ce=K(Q),se=.56-.07*de,ie=.005,F=(K(Q+ie)-K(Q-ie))/(2*ie),Me=Math.hypot(1,F);return[(ne*2-1)*se,ce,Q,0,1/Me,-F/Me]},2,7,0,!1),M,0,0,0),P(new kn(.46,.25,.012,2,.05),l("#86bdb0",.6),0,.73,-1.701),P(new rn(.34,.17),b,0,.72,-1.709,0,Math.PI,0),P(new kn(.25,.034,.03,2,.013),x,0,.9,-1.708);for(let ne of[-1,1])P(new Qt(.01,.56,.006),L,ne*.47,.85,-1.703);P(new Qt(.95,.01,.006),L,0,.565,-1.703),P(new kn(1.5,.2,.26,3,.08),a,0,.44,-1.6),P(new kn(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let ne of[-1,1])P(new Qt(.13,.035,.01),z,ne*.56,.44,-1.731);P(new Bi(.036,.036,.12,12),x,.46,.29,-1.68,Math.PI/2,0,0),P(new Bi(.024,.024,.124,10),A,.46,.29,-1.68,Math.PI/2,0,0);for(let ne of[-1,1])P(new kn(.4,.26,.04,2,.06),h,ne*.42,.85,1.702),P(new Bi(.105,.105,.03,16),v,ne*.46,.85,1.72,Math.PI/2,0,0),P(new Bi(.055,.055,.03,12),v,ne*.3,.85,1.718,Math.PI/2,0,0),P(new kn(.1,.06,.04,2,.015),g,ne*.52,.66,1.705),P(new Qt(.46,.014,.014),A,ne*.25,1.215,1.2,-.3,ne*.12,0);P(new kn(.36,.12,.03,2,.03),A,0,.84,1.704);for(let ne=0;ne<3;ne++)P(new Qt(.32,.012,.012),L,0,.805+ne*.035,1.722);P(new kn(1.52,.24,.22,2,.07),h,0,.44,1.62),P(new Qt(.7,.07,.02),A,0,.4,1.732),P(new Qt(.34,.17,.01),l("#f0cc38",.3),0,.62,1.733),P(new Qt(.3,.05,.004),l("#2f5a2f",.1),0,.6,1.739),_=!0;for(let[ne,de]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){P(new Bi(.29,.29,.19,24),p,ne,.29,de,0,0,Math.PI/2),P(new Bi(.195,.195,.194,20),D,ne,.29,de,0,0,Math.PI/2),P(new Bi(.155,.155,.198,16),O,ne,.29,de,0,0,Math.PI/2);for(let Q=0;Q<5;Q++){let ce=Q/5*Math.PI*2+.3;P(new Qt(.202,.03,.15),D,ne,.29-.085*Math.sin(ce),de+.085*Math.cos(ce),ce,0,0)}P(new Bi(.045,.045,.206,10),m,ne,.29,de,0,0,Math.PI/2)}_=!1;for(let[ne,de]of T){let Q=new ht(Bh(de),ne);Q.castShadow=ne!==M&&ne!==b&&ne!==d&&ne!==v&&ne!==f,Q.receiveShadow=!0,t.add(Q)}{let ne=new ht(Bh(w),o);ne.castShadow=ne.receiveShadow=!0,i.add(ne)}{let Q=document.createElement("canvas");Q.width=48,Q.height=96;let ce=Q.getContext("2d"),se=ce.createImageData(48,96);for(let F=0;F<96;F++)for(let Me=0;Me<48;Me++){let J=Math.max(0,Math.abs((Me+.5)/48-.5)*2.1-.62),N=Math.max(0,Math.abs((F+.5)/96-.5)*2.05-.78),I=Math.hypot(J/.42,N/.24),W=Math.max(0,1-I),Y=(F*48+Me)*4;se.data[Y]=se.data[Y+1]=se.data[Y+2]=Math.round(255*W*W*(3-2*W)),se.data[Y+3]=255}ce.putImageData(se,0,0);let ie=new ht(new rn(2.2,4.1),new xn({color:0,alphaMap:new ri(Q),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));ie.rotation.x=-Math.PI/2,ie.position.y=.03,ie.renderOrder=3,i.add(ie)}let ge=(()=>{let Q=document.createElement("canvas");Q.width=16,Q.height=64;let ce=Q.getContext("2d"),se=ce.createImageData(16,64);for(let ie=0;ie<64;ie++)for(let F=0;F<16;F++){let Me=1-(ie+.5)/64,J=((F+.5)/16-.5)*2,N=Math.exp(-J*J*5)*Math.min(1,Me/.06)*Math.pow(1-Me,1.6)*(.78+.22*Math.sin(Me*31+J*2)),I=(ie*16+F)*4;se.data[I]=se.data[I+1]=se.data[I+2]=Math.round(255*Math.max(0,N)),se.data[I+3]=255}return ce.putImageData(se,0,0),new xn({map:new ri(Q),color:16726576,transparent:!0,opacity:0,blending:os,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let ne=[];for(let Q of[-.56,.56]){let ce=new rn(.22,1.5);ce.rotateX(-Math.PI/2),ce.translate(Q,.035,-1.72-.75),ne.push(ce)}let de=new ht(Bh(ne),ge);de.renderOrder=3,de.visible=!1,i.add(de),ge.mesh=de}let Pe=new fn;Pe.position.set(.02,1.19,-1.716),t.add(Pe);let te=new Qt(.52,.026,.02);te.translate(.27,0,0);let ve=new ht(y(te,h),o);ve.rotation.z=.18,Pe.add(ve);let Ne=0,Oe=new rl(16773328,0,70,.55,.65,1.2);Oe.position.set(0,.8,1.6),Oe.target.position.set(0,0,18),t.add(Oe,Oe.target);let Ee={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},We=(ne,de)=>de*Math.tanh(ne/de);return{group:i,lamps:n,lampCol:s,head:Oe,update(ne,de,Q,ce=0,se=null,ie=0){if(se){let F=We(-se.lat*.016,.045),Me=We(-se.lon*.008,.03);Ee.rv+=((F-Ee.roll)*55-Ee.rv*8)*ne,Ee.roll+=Ee.rv*ne,Ee.pv+=((Me-Ee.pitch)*60-Ee.pv*9)*ne+se.kick,Ee.pitch+=Ee.pv*ne,Ee.yv+=((se.road-Ee.y)*85-Ee.yv*8)*ne+se.jolt,Ee.y+=Ee.yv*ne,e.rotation.set(Ee.pitch,0,Ee.roll),e.position.y=.35+Ee.y}if(Ee.br+=((se?se.brake:0)-Ee.br)*Math.min(1,ne*14),c.emissiveIntensity=.35+Q*3.2+Ee.br*(1.7+Q*2),d.emissiveIntensity=Ee.br*(2.4+Q*1.6),f.emissiveIntensity=1+Q*3+Ee.br*(2+Q*2),ge.opacity=ie*Math.min(1,.22+c.emissiveIntensity*.22),ge.mesh.visible=ge.opacity>.01,ce>.15||Ne%2.6>.01){Ne+=ne;let F=Ne%2.6/2.6,Me=N=>N*N*(3-2*N),J=F<.25?Me(F/.25):F<.5?Me(1-(F-.25)/.25):0;ve.rotation.z=.18+J*2.5,ce<=.15&&F>=.5&&(Ne=0)}Oe.intensity=Q*60,v.emissiveIntensity=.15+Q*2.6}}}var oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},w3=new or(-1,1,1,-1,0,1),_d=class extends vt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},T3=new _d,xr=class{constructor(e){this._mesh=new ht(T3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var aa=class extends Di{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Br.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new xr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wl=class extends Di{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Oh=class extends Di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var kh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Le);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new aa(oa),this.copyPass.material.blending=oi,this.timer=new ol}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Wl!==void 0&&(o instanceof Wl?n=!0:o instanceof Oh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zh=class extends Di{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var av={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var la=class i extends Di{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:Cn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Yt(r,o,{type:Cn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Yt(r,o,{type:Cn,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let l=av;this.highPassUniforms=Br.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Br.clone(oa.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,premultipliedAlpha:!0,blending:os,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new xn,this._fsQuad=new xr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],a=o+1<e?t[o+1]:0,u=l+a;s.push((o*l+(o+1)*a)/u),r.push(u)}return new ft({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};la.BlurDirectionX=new Le(1,0);la.BlurDirectionY=new Le(0,1);var bd=class extends Di{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Yt(4,4,{type:Cn,depthBuffer:!1,minFilter:kt,magFilter:kt,generateMipmaps:!1}),this.mat=new ft({uniforms:{tDiffuse:{value:null},uTexel:{value:new Le(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new xr(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},E3={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Le(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Le(1/1280,1/720)},uLo:{value:new V(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function lv(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Le),l=new Yt(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:Cn,samples:n}),a=new kh(i,l);a.addPass(new zh(e,t));let u=new bd;a.addPass(u);let h=new la(new Le(o.x*r*.5,o.y*r*.5),.42,.55,.86);a.addPass(h);let p=new aa(E3);p.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},p.material.toneMapped=!1,a.addPass(p);let m=a.render.bind(a);return a.render=x=>{p.uniforms.toneMappingExposure.value=i.toneMappingExposure,m(x)},{composer:a,bloom:h,grade:p,refl:u}}function cv(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let Q=0;Q<2;Q++){let ce=s.getChannelData(Q);for(let se=0;se<n;se++)ce[se]=(Math.random()*2-1)*Math.pow(1-se/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let a=e.createGain();a.gain.value=.11,l.connect(a),a.connect(t),a.connect(r);let u=(Q,ce)=>{let se=e.createBuffer(1,e.sampleRate*Q,e.sampleRate),ie=se.getChannelData(0),F=0;for(let Me=0;Me<ie.length;Me++)ce?(F=(F+.02*(Math.random()*2-1))/1.02,ie[Me]=F*3.5):ie[Me]=Math.random()*2-1;return se},h=(Q,ce,se)=>{let ie=e.createBufferSource();ie.buffer=Q,ie.loop=!0;let F=e.createBiquadFilter();F.type=ce,F.frequency.value=se;let Me=e.createGain();return Me.gain.value=0,ie.connect(F),F.connect(Me),Me.connect(t),ie.start(),{f:F,g:Me}},p=h(u(2,!0),"lowpass",400),m=h(u(3,!1),"lowpass",700);m.g.connect(r);let x=h(u(2,!1),"bandpass",5200);x.f.Q.value=6;let y=h(u(2,!0),"lowpass",240),M=h(u(3,!1),"bandpass",2600);M.f.Q.value=.35;let c=h(u(2,!0),"lowpass",520),f=h(u(2,!1),"bandpass",1500);f.f.Q.value=.7;let d=e.createBiquadFilter(),g=e.createGain(),v=e.createOscillator(),b=e.createOscillator(),T=e.createGain();v.type="sawtooth",b.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,g.gain.value=0,T.gain.value=.5,v.connect(d),b.connect(T),T.connect(d),d.connect(g),g.connect(t),v.start(),b.start();let w=h(u(3,!1),"bandpass",750);w.f.Q.value=.6;let _=h(u(3,!0),"lowpass",420),S=h(u(2,!0),"lowpass",140),E=u(.03,!1),R=0;function C(Q,ce){let se=e.createBufferSource(),ie=e.createBiquadFilter(),F=e.createGain();se.buffer=E,ie.type="bandpass",ie.frequency.value=1800+Math.random()*2600,ie.Q.value=1.2,F.gain.setValueAtTime(ce*(.02+Math.random()*.03),Q),F.gain.exponentialRampToValueAtTime(1e-4,Q+.03),se.connect(ie),ie.connect(F),F.connect(t),se.start(Q),se.stop(Q+.04)}let P=0,A=0;function L(Q,ce){let se=e.createOscillator(),ie=e.createOscillator(),F=e.createGain(),Me=e.createBiquadFilter();Me.type="bandpass",Me.frequency.value=1150,Me.Q.value=2.2,se.type="square",se.frequency.value=745,ie.type="triangle",ie.frequency.value=1490,F.gain.setValueAtTime(0,Q),F.gain.linearRampToValueAtTime(.085*ce,Q+.004),F.gain.exponentialRampToValueAtTime(1e-4,Q+.3),se.connect(Me),ie.connect(Me),Me.connect(F),F.connect(t),F.connect(r),se.start(Q),ie.start(Q),se.stop(Q+.33),ie.stop(Q+.33)}function D(Q,ce){let se=e.createOscillator(),ie=e.createGain();se.type="sine",se.frequency.setValueAtTime(110,Q),se.frequency.exponentialRampToValueAtTime(48,Q+.12),ie.gain.setValueAtTime(1e-4,Q),ie.gain.linearRampToValueAtTime(.22*ce,Q+.006),ie.gain.exponentialRampToValueAtTime(1e-4,Q+.17),se.connect(ie),ie.connect(t),se.start(Q),se.stop(Q+.2)}let O=e.createGain();O.gain.value=1,O.connect(t);let z=e.createGain();z.gain.value=.35,O.connect(z),z.connect(r);let B=(Q=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return O;let ce=e.createStereoPanner();return ce.pan.value=Q,ce.connect(O),ce};function H(Q,ce,se,ie,F,Me,J="sine",N=0){let I=e.createOscillator(),W=e.createGain();if(I.type=J,I.frequency.setValueAtTime(ce,Q),I.frequency.exponentialRampToValueAtTime(se,Q+ie),N){let Y=e.createOscillator(),ee=e.createGain();Y.frequency.value=N,ee.gain.value=ce*.012,Y.connect(ee),ee.connect(I.frequency),Y.start(Q),Y.stop(Q+ie+.05)}return W.gain.setValueAtTime(1e-4,Q),W.gain.linearRampToValueAtTime(F,Q+Math.min(.04,ie*.25)),W.gain.setValueAtTime(F,Q+ie*.7),W.gain.exponentialRampToValueAtTime(1e-4,Q+ie),I.connect(W),W.connect(Me),I.start(Q),I.stop(Q+ie+.02),W}function k(Q,ce){let se=B(),ie=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let Me=0;Me<ie;Me++){let J=Q+Me*(.09+Math.random()*.07);H(J,F,F*(1.2+Math.random()*.3),.06,ce*.022,se)}}function X(Q,ce){let se=B();H(Q,1120,1390,1,ce*.03,se,"sine",5.5),H(Q+1.15,2350,2150,.14,ce*.03,se),H(Q+1.32,1700,1520,.13,ce*.028,se),H(Q+1.5,2750,2480,.36,ce*.032,se)}function K(Q,ce){let se=B(),ie=1+Math.floor(Math.random()*3);for(let F=0;F<ie;F++){let Me=Q+F*.48,J=e.createOscillator(),N=e.createBiquadFilter(),I=e.createGain();J.type="sawtooth",J.frequency.setValueAtTime(560,Me),J.frequency.exponentialRampToValueAtTime(420,Me+.32),N.type="bandpass",N.frequency.value=1150,N.Q.value=1.6,I.gain.setValueAtTime(1e-4,Me),I.gain.linearRampToValueAtTime(ce*.03,Me+.03),I.gain.exponentialRampToValueAtTime(1e-4,Me+.36),J.connect(N),N.connect(I),I.connect(se),J.start(Me),J.stop(Me+.4)}}function be(Q,ce){let se=B(),ie=2+Math.floor(Math.random()*2);for(let F=0;F<ie;F++)H(Q+F*.42,1750,1150,.36,ce*.022,se,"triangle",11)}function we(Q,ce){let se=B(),ie=e.createOscillator(),F=e.createBiquadFilter(),Me=e.createGain(),J=240+Math.random()*220,N=5+Math.floor(Math.random()*4);ie.type="square",ie.frequency.value=J,F.type="bandpass",F.frequency.value=J*2.4,F.Q.value=3,Me.gain.setValueAtTime(1e-4,Q);for(let I=0;I<N;I++){let W=Q+I*.038;Me.gain.linearRampToValueAtTime(ce*.014,W+.008),Me.gain.linearRampToValueAtTime(1e-4,W+.028)}ie.connect(F),F.connect(Me),Me.connect(se),ie.start(Q),ie.stop(Q+N*.038+.05)}function Se(Q,ce){let se=B(),ie=4300+Math.random()*700;for(let F=0;F<3;F++)H(Q+F*.055,ie,ie*1.01,.035,ce*.009,se)}function G(Q,ce){let se=B(0);for(let[ie,F,Me]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let J=e.createOscillator(),N=e.createGain();J.type="sine",J.frequency.value=ie,J.detune.value=(Math.random()-.5)*8,N.gain.setValueAtTime(1e-4,Q),N.gain.linearRampToValueAtTime(ce*.05*F,Q+.03),N.gain.exponentialRampToValueAtTime(1e-4,Q+Me),J.connect(N),N.connect(se),J.start(Q),J.stop(Q+Me+.1)}}function $(Q,ce){let se=B();for(let ie of[Q,Q+.22])H(ie,2650,2600,.5,ce*.018,se),H(ie,3950,3900,.35,ce*.008,se)}let ge={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Pe=Q=>Q>1e-4?-Math.log(1-Math.random()*.98)/Q:1e9,te=Q=>440*Math.pow(2,(Q-69)/12),ve=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Ne=[72,74,76,79,81,84,86,88],Oe=0,Ee=e.currentTime+.2,We=e.currentTime+3;function ne(Q){let ce=ve[Oe++%ve.length],se=11;for(let ie of ce)for(let F of[-5,5]){let Me=e.createOscillator(),J=e.createGain();Me.type=F<0?"sine":"triangle",Me.frequency.value=te(ie),Me.detune.value=F,J.gain.setValueAtTime(0,Q),J.gain.linearRampToValueAtTime(.18,Q+3.5),J.gain.setValueAtTime(.18,Q+se-4),J.gain.linearRampToValueAtTime(0,Q+se+1),Me.connect(J),J.connect(l),Me.start(Q),Me.stop(Q+se+1.2)}}function de(Q){let ce=Ne[Math.floor(Math.random()*Ne.length)],se=e.createOscillator(),ie=e.createOscillator(),F=e.createGain(),Me=e.createGain();se.type=ie.type="sine",se.frequency.value=te(ce),ie.frequency.value=te(ce)*2.01,Me.gain.value=.25,ie.connect(Me),Me.connect(F),F.gain.setValueAtTime(0,Q),F.gain.linearRampToValueAtTime(.05,Q+.02),F.gain.exponentialRampToValueAtTime(1e-4,Q+4),se.connect(F),F.connect(r),F.connect(t),se.start(Q),ie.start(Q),se.stop(Q+4.2),ie.stop(Q+4.2)}return{ac:e,muted:!1,tyres:f,engG:g,bump(Q){D(e.currentTime+.01,Q)},update(Q,ce,se,ie={}){let F=e.currentTime;if((ie.bell||0)>.01)for(P<F&&(P=F+.02);P<F+.12;)L(P,ie.bell),P+=.41;let Me=ie.rain||0;M.g.gain.setTargetAtTime(Me*.05,F,.6),c.g.gain.setTargetAtTime(Me*.05,F,.6);let J=(ie.wetRoad||0)*Math.min(1,Q)**1.5,N=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(f.g.gain.setTargetAtTime(J*.045*N,F,.4),f.f.frequency.setTargetAtTime(900+1500*Math.min(Q,2),F,.4),Me>.05&&ie.roof)for(R<F&&(R=F+.02);R<F+.12;)C(R,Me),R+=.04+Math.random()*.12/Me;let I=ie.water||0,W=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);w.g.gain.setTargetAtTime(I*.035*W,F,.25),w.f.frequency.setTargetAtTime(600+400*W,F,.25);let Y=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),ee=ie.rush||0;_.g.gain.setTargetAtTime(((ce.mountain||0)+(ce.snow||0)*.7)*.06*Y+ee*.055,F,.8),_.f.frequency.setTargetAtTime(260+420*Y+ee*500,F,.8);let ue=ie.train||0;if(y.g.gain.setTargetAtTime(ue*.16,F,.2),ue>.04)for(A<F&&(A=F+.02);A<F+.12;)D(A,ue),D(A+.15,ue*.8),A+=1.2;for(;Ee<F+1;)ne(Ee),Ee+=8;We<F+.5&&(de(We),We+=1.5+Math.random()*4.5);let xe=ie.tunnel||0;{let Z=ie.speed||0,De=ie.load||0,ye=850+2400*(1-Math.exp(-Z/15))+Math.max(0,Z-25)*60+De*1300,ke=ye/40;v.frequency.setTargetAtTime(ke,F,.25),b.frequency.setTargetAtTime(ke*2,F,.25),d.frequency.setTargetAtTime(200+ye*.08+De*260,F,.3),g.gain.setTargetAtTime((.008+.01*Math.min(1,Z/15)+.024*De)*(1-.6*(ie.rush||0))*(ie.roof===!1?.5:1)*(1+.7*xe),F,.3)}p.g.gain.setTargetAtTime((.03+Q*.06)*(1+1.6*xe),F,.35),p.f.frequency.setTargetAtTime((250+Q*500)*(1+.5*xe),F,.35),S.g.gain.setTargetAtTime(xe*.07,F,.4),o.gain.setTargetAtTime(.55+.6*xe,F,.4);let he=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);m.g.gain.setTargetAtTime(ce.coast*(.012+he*.05),F,.3),m.f.frequency.setTargetAtTime(400+he*900,F,.3);let me=1-Math.min(1,Me*1.4),Fe=1-se,Ke=ie.dusk||0,Ue=ce.snow||0,Be=1-Ue,Ve={sparrow:se*me*.22*(.3+ce.city*.5+ce.sakura+ce.country*.8+ce.coast*.2+(ce.mountain||0)*.5)*(1-Ue*.8),uguisu:se*me*ce.sakura*.06,crow:me*(Ke*.14+se*(ce.city+ce.country+(ce.mountain||0)*1.5+Ue*2.5)*.012),gull:se*ce.coast*me*.16,frog:Fe*(ce.country*5+ce.sakura*.6+ce.coast*.3)*(1+Me*.6)*Be,cricket:Fe*me*(1.6-ce.city*1.1+(ce.mountain||0)*.8)*Be,bike:se*me*ce.city*.014,bell:Ue*.022+(ce.mountain||0)*.006},et={sparrow:k,uguisu:X,crow:K,gull:be,frog:we,cricket:Se,bike:$,bell:G};for(let Z in Ve)F<ge[Z]||(Ve[Z]>1e-4&&et[Z](F+.05,.6+Math.random()*.4),ge[Z]=F+Math.max(.12,Pe(Ve[Z]||1e-6)));let lt=.5+.5*Math.sin(F*7)*Math.sin(F*.4);x.g.gain.setTargetAtTime((ce.country+ce.sakura*.3)*se*.006*lt*(1-(ce.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function uv(i){let t=new rn(.075,.05),n=new xn({color:16777215,side:bn}),s=new rs(t,n,420);s.frustumCulled=!1,s.count=0;let r=new fe("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(v=>new fe(v));for(let v=0;v<420;v++)s.setColorAt(v,r);let l=Array.from({length:420},()=>({p:new V(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),a=new je,u=new vn,h=new Kn,p=new V(1,1,1),m=new V,x=90,y=new Float32Array(x*3),M=Array.from({length:x},()=>({p:new V(1e9,0,0),ph:Math.random()*6.28})),c=new vt;c.setAttribute("position",new bt(y,3));let f=new Ao({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:os,opacity:0}),d=new za(c,f);d.frustumCulled=!1;let g=(v,b,T,w,_)=>{let S=_?8+Math.random()*42:-4+Math.random()*50,E=(Math.random()-.5)*40;v.p.set(b.x+T.x*S+w.x*E,b.y-1+Math.random()*9,b.z+T.z*S+w.z*E)};return{group:[s,d],shift(v,b){for(let T of l)T.p.x-=v,T.p.z-=b;for(let T of M)T.p.x-=v,T.p.z-=b},update(v,b,T,w,_,S,E,R,C,P=0){let A=Math.floor(420*Math.min(1,S*1.1+P*.55));n.color.setScalar(1-.72*R);let L=!1;s.count=A;for(let O=0;O<A;O++){let z=l[O];m.subVectors(z.p,T);let B=m.x*w.x+m.z*w.z,H=m.x*_.x+m.z*_.z;if(z.p.x>1e8||B<-6||B>55||Math.abs(H)>24||z.p.y<E-.5){g(z,T,w,_,z.p.x<1e8);let k=Math.random()*(S+P)<P;(k!==z.leaf||k)&&(z.leaf=k,s.setColorAt(O,k?o[Math.floor(Math.random()*o.length)]:r),L=!0)}z.p.y-=z.v*v,z.p.x+=Math.sin(b*.7+z.ph)*.4*v+.25*v,z.p.z+=Math.cos(b*.5+z.ph)*.3*v,h.set(b*z.sp+z.ph,b*z.sp*.7,z.ph),u.setFromEuler(h),p.setScalar(z.leaf?1.9:1),a.compose(z.p,u,p),s.setMatrixAt(O,a)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=R*C;if(f.opacity=D,d.visible=D>.01,d.visible){for(let O=0;O<x;O++){let z=M[O];m.subVectors(z.p,T);let B=m.x*w.x+m.z*w.z,H=m.x*_.x+m.z*_.z;if(z.p.x>1e8||B<-4||B>60||Math.abs(H)>30){let k=2+Math.random()*55,X=(Math.random()-.5)*55;z.p.set(T.x+w.x*k+_.x*X,E+.3+Math.random()*2.2,T.z+w.z*k+_.z*X)}z.p.x+=Math.sin(b*.6+z.ph*3)*.3*v,z.p.y+=Math.sin(b*.9+z.ph)*.2*v,z.p.z+=Math.cos(b*.5+z.ph*2)*.3*v,y[O*3]=z.p.x,y[O*3+1]=z.p.y,y[O*3+2]=z.p.z}c.attributes.position.needsUpdate=!0}}}}var ot=new URLSearchParams(location.search),ca=ot.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();ca&&document.body.classList.add("embed");ot.has("shot")&&document.body.classList.add("shot");km(ot.has("seed")?parseInt(ot.get("seed")):Math.random()*1e9|0);Hm(ot.get("env")||"city");var zn=i=>document.getElementById(i),ua=i=>{let e=zn("loading");e&&(e.textContent=i)};async function A3(){await new Promise(Te=>setTimeout(Te,30));let i=zn("c"),e=new sh({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ot.get("q")||(ca||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?ca?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=qt,e.toneMapping=al,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Dr,e.debug.checkShaderErrors=ot.has("debug");let r=ot.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",l=r==="old"?Promise.resolve(null):A1(o),a=L1(o),u=N1(n==="high"&&innerHeight*s>=560?"hi":"lo"),h=P1(o),p=R1(n==="high"&&innerHeight*s>=560?"hi":"lo"),m=n==="high"&&innerHeight*s>=560?"hi":"lo",x=C1(m),y=new Pr;y.fog=new Ua(13032946,.0019,700);let M=new Hn(52,innerWidth/innerHeight,.5,7e3),c=new Do(16777215,3);c.castShadow=!0;let f=n==="low"?1024:n==="mid"?1536:2048;c.shadow.mapSize.set(f,f),U0(ot.has("pcf")?parseInt(ot.get("pcf")):1);let d=62,g=c.shadow.camera,v=new je,b=new je;Object.assign(g,{left:-d,right:d,top:d,bottom:-d,near:1,far:420});let T=new V(0,1,0),w=new V,_=new V,S=new V,E=new V(0,1,0),R=new V(0,150,60),C=new V,P=new V,A=null,L=0,D=0,O=0;c.shadow.updateMatrices=function(){g.position.copy(R),g.lookAt(C),g.updateMatrixWorld(),g.updateProjectionMatrix(),b.multiplyMatrices(g.matrixWorldInverse,v).multiply(g.matrixWorld),g.projectionMatrix.multiply(b),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),this._updateMatrix(g,this.matrix,this._frustum)};let z=!0;c.shadow.bias=-4e-4;let B=()=>{c.shadow.normalBias=ot.has("nb")?parseFloat(ot.get("nb")):1.5*2*d/c.shadow.mapSize.x};B();{let[Te,xt]=(ot.get("graze")||"0,0.12").split(",").map(Number);Qm(Te,xt)}y.add(c,c.target);let H=new Do(16777215,0);H.castShadow=n!=="low"&&!ot.has("nocarsh");{let Te=ot.has("carsm")?parseInt(ot.get("carsm")):n==="high"?512:384;H.shadow.mapSize.set(Te,Te)}if(Object.assign(H.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),H.shadow.bias=-2e-4,H.shadow.normalBias=.025,y.add(H,H.target),H.castShadow){let Te=c.shadow.getFrustum(),xt=H.shadow.getFrustum();for(let st of[ht,ka]){let hn=st.prototype.intersectsFrustum;st.prototype.intersectsFrustum=function(ii){return ii===xt?this.userData.car===!0:(ii!==Te||this.userData.car!==!0)&&hn.call(this,ii)}}}let k=new il(10799359,13154464,1.6);y.add(k),ua("painting the town\u2026"),await new Promise(Te=>setTimeout(Te,10));let X=yg();Fg(X);let K=await p,be=await x,we=_g(X,m,K,be);we.houses&&n1(be.types),K&&K.img.close(),be&&be.img.close();let Se=bg(e);Gg(Se.cells),Ie.uTuftV.value.set(...Se.tuftV);let G=hg(X.textures(e),Se.tex,we.textures(e)),$=ig();$.update(e,0,0,0,0),ua("painting the clouds\u2026"),await new Promise(Te=>setTimeout(Te,10)),Xg(ot.has("leafd")?parseFloat(ot.get("leafd")):n==="high"?.72:.62);{let Te=await u;if(Te){Hi.cells=Te.cells.filter(hn=>hn.kind==="leaf"),Te.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let xt=k0(Te.tex);G.gleaf=xt.mat,G.gleafDepth=xt.depth;let st=Te.cells.filter(hn=>hn.kind==="blossom");st.length&&(Hi.bcells=st,G.gblossom=k0(Te.tex,{blossom:!0}).mat)}}jg(),h1();let ge=[2.1,1.75,3.2],Pe=[1.42,1.47,1.74],te=[.95,1.05,1.8],ve=[.91,1.34,1.2],Ne=[1.88,1.28,2],Oe=[1.97,1.54,1.62];{let Te=await h;Te&&(Te.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),yi.tex=Te.tex,yi.uFieldK.value.set(1/Te.tile[0],1/Te.tile[1]),yi.uFieldM.value.set(...Te.mean))}let Ee=new uh;G.shore=V1(n!=="high"),G.surf=G1(),na.n=n==="high"?8:4,na.drops=n==="high"?4:2,G.tetra=lg(zl,n!=="high"),G.bark=cg(n!=="high");let We=W1(),ne=nv(n,ot.has("grass")?ot.get("grass").split(",").map(Number):null);for(let Te of ne.meshes)y.add(Te);let de=new Fh(y,Ee,G,We),Q=y1();y.add(Q);let ce=M1();y.add(ce.group);let se=H1(n!=="high");y.add(se.mesh);let ie=ov();ie.group.rotation.order="YXZ",y.add(ie.group),ie.group.traverse(Te=>{Te.userData.car=!0});let F=uv(G.glowTex);F.group.forEach(Te=>y.add(Te));let Me=ot.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),J=lv(e,y,M,{msaa:Me==="msaa"?n==="high"?4:2:0,fxaa:Me==="fxaa"});Ie.uReflTex.value=J.refl.rt.texture;let N=await l,I=N?I1(N,J):null;I&&y.add(I.mesh);let W=!I||r==="both"?b1(_1(e)):null;W&&y.add(W.group);let Y=await a,ee=Y?D1(Y,J,y.fog.color):null;ee&&y.add(ee.mesh);let ue=new V,xe=new V,he=ot.get("refl")||"auto",me=ot.has("backlit")?parseFloat(ot.get("backlit")):1,Fe=[7.5,3,2.3],Ke=[1.7,1.15,1],Ue=.7,Be=[57,76,94,82,96,114,156,151,148,207,197,189,246,251,254,160,205,240],Ve=[Ie.uTpD.value,Ie.uTpS.value,Ie.uTpM.value,Ie.uTpL.value,Ie.uTpFL.value,Ie.uTpFS.value],et=[38,23,16,54,34,25,104,70,48,60,50,37,112,90,65,164,126,86],lt=[Ie.uBkS.value,Ie.uBkM.value,Ie.uBkL.value,Ie.uBkS2.value,Ie.uBkM2.value,Ie.uBkL2.value],Z=ot.has("lightson")?parseFloat(ot.get("lightson")):-1,De=new V,ye=ot.has("haze")?parseFloat(ot.get("haze")):1,ke=dg();y.add(ke.group);let He=pg();y.add(He.group);let Ae=J1(ot),it=Q1(),Qe=j1();y.add(it.mesh,Qe.mesh);let Bt=ev();y.add(Bt.mesh);let Ft=tv();y.add(Ft.mesh);let hi=new fe,bi=new fe,Gl=new mt,yr=iv();y.add(yr.mesh);let Xs=Ae.W.rain,_r=.4,ha=5.5,re={s:Math.max(100,parseFloat(ot.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Zt(parseFloat(ot.get("t"))||.4,0,.999),todPaused:ot.has("freeze"),dist:0,spray:ot.has("nospray")?0:1,grass:1,pclouds:1,band:1,waves:1,shore:1,surf:1,tetra:1,bark:1,trunks:1,cam:{low:1,eye:2,top:3,film:4}[ot.get("cam")]??(ca?4:0)},ti=!1;I&&(I.opening=["sakura","city"].includes(dn(re.s))?"center":"flank"),ua("building the road\u2026"),await new Promise(Te=>setTimeout(Te,10));let Es=ca?620:de.ahead;de.ahead=260;let fa=ot.has("detail")?parseFloat(ot.get("detail")):380,Xl=ot.has("farleaf")?parseFloat(ot.get("farleaf")):540;for(;de.update(re.s,1e9););de.flush(),de.ahead=Es;{ua("preparing the light\u2026"),await new Promise(tn=>setTimeout(tn,10));let Te=new fn,xt=new vt;xt.setAttribute("position",new $e([0,0,0,.01,0,0,0,.01,0],3)),xt.setAttribute("normal",new $e([0,1,0,0,1,0,0,1,0],3)),xt.setAttribute("uv",new $e([0,0,1,0,0,1],2)),xt.setAttribute("color",new $e([1,1,1,1,1,1,1,1,1],3));let st=new vt;st.setAttribute("position",xt.attributes.position);let hn=new Set([G.shore,G.surf,We]),ii=[G.color,G.atlas,G.foliage,G.leaf,G.lamp,G.sig,G.sodium,G.decal,G.pool,G.shore,G.surf,We,G.tetra,G.bark,...G.gleaf?[G.gleaf]:[],...G.gblossom?[G.gblossom]:[]];for(let tn=0;tn<Ci.length;tn++)ii.push(Al([Ci[tn]])),ii.push(Al([Ci[tn],Ci[(tn+1)%Ci.length]]));for(let tn of ii){let $i=new ht(hn.has(tn)?st:xt,tn);$i.castShadow=$i.receiveShadow=!hn.has(tn),$i.frustumCulled=!1,(tn===G.gleaf||tn===G.gblossom)&&($i.customDepthMaterial=G.gleafDepth),tn===G.atlas&&($i.customDepthMaterial=G.atlasDepth),Te.add($i)}Te.position.set(0,0,0),y.add(Te),c.target.position.set(0,0,0),c.position.set(0,150,60);let Tn=[it.mesh,Qe.mesh,Bt.mesh,Ft.mesh,He.group,ke.group,se.mesh].filter(tn=>!tn.visible);for(let tn of Tn)tn.visible=!0;ne.warm(!0),e.setRenderTarget(J.composer.readBuffer),e.compile(y,M),e.render(y,M),e.setRenderTarget(null);for(let tn of Tn)tn.visible=!1;ne.warm(!1),y.remove(Te),xt.dispose(),st.dispose(),J.bloom.enabled=J.refl.enabled=!0,J.composer.render(0),J.bloom.enabled=J.refl.enabled=!1}let Pt={k:Math.ceil((re.s-zr)/kr),phase:"idle",raise:1,decided:!1,t2:0},St={},zt={},Ut={},ql=ot.has("yaw")||ot.get("cam")==="top",qs=new V,br=new V,ni=new V,Zr=!1,da=new V,Kr=new V,U=zn("spd"),j=zn("dist"),pe=zn("clock"),ae=zn("zone"),le=zn("start"),qe=zn("hint"),ze=null,Ge=null,Je=0,tt=0;function _t(Te){!ti||Te===Ge||(Ge=Te,ae.querySelector(".jp").textContent=_l[Te].jp,ae.querySelector(".en").textContent=_l[Te].en,ae.classList.add("on"),clearTimeout(Je),Je=setTimeout(()=>ae.classList.remove("on"),5200))}function Mt(){if(!ti){if(ti=!0,document.body.classList.remove("pre"),!ot.has("auto"))try{ze=cv(),ze&&ze.ac.resume()}catch{ze=null}le.style.opacity=0,setTimeout(()=>le.remove(),1500),ca||(qe.style.opacity=.75,setTimeout(()=>qe.style.opacity=0,9e3))}}let Xe={};addEventListener("keydown",Te=>{Xe[Te.key]=!0,(Te.key==="m"||Te.key==="M")&&Xt(),(Te.key==="t"||Te.key==="T")&&Vt(),(Te.key==="c"||Te.key==="C")&&Nn(),(Te.key==="r"||Te.key==="R")&&As(),!ti&&(Te.key===" "||Te.key==="Enter")&&Mt()}),addEventListener("keyup",Te=>{Xe[Te.key]=!1});let ut=null;i.addEventListener("pointerdown",Te=>{ut={id:Te.pointerId,x:Te.clientX,y:Te.clientY,sy:Te.clientY,sc:re.mult}});let pn=Te=>Zt(Te.sc*Math.exp(-((Te.y-Te.sy)/innerHeight)*3.4),_r,ha);addEventListener("pointermove",Te=>{ut&&Te.pointerId===ut.id&&(ut.x=Te.clientX,ut.y=Te.clientY,re.mult=pn(ut))}),addEventListener("pointerup",()=>{ut=null}),addEventListener("pointercancel",()=>{ut=null}),i.addEventListener("touchstart",Te=>{let xt=Te.changedTouches[0];ut={id:"touch",x:xt.clientX,y:xt.clientY,sy:xt.clientY,sc:re.mult},Te.preventDefault()},{passive:!1}),i.addEventListener("touchmove",Te=>{if(!ut)return;let xt=Te.changedTouches[0];ut.x=xt.clientX,ut.y=xt.clientY,re.mult=pn(ut),Te.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{ut=null}),i.addEventListener("touchcancel",()=>{ut=null});function Xt(){ze&&(ze.toggle(),zn("snd").style.opacity=ze.muted?.4:1)}function Vt(){re.todPaused=!re.todPaused,zn("tim").style.opacity=re.todPaused?.4:1}let wn=[0,1,2,4],Ze={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Nn(){re.cam=wn[(wn.indexOf(re.cam)+1)%wn.length],zn("cam").textContent=Ze[re.cam]||"\u25D0",re.cam===4&&fi()}let It=["chase","side","road","crane","eye","side","road"],Et={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function fi(){let Te;do Te=It[Math.floor(Math.random()*It.length)];while(Te===Et.last);{let xt=zi(re.s+60);xt&&Math.abs(re.s+60-xt.s)<an+120&&(Te=Math.random()<.6?"chase":"eye")}if(Object.assign(Et,{type:Te,last:Te,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),Te==="road"){let xt=re.s+40+Math.random()*18,st=On(xt,"rw"),hn=Math.random()<.6?-1:1,ii=hn*(st+(hn<0?.9:1.3)),Tn=Ee.at(xt,{}),tn=Tn.y+Ms(xt,ii,Tn.y,st);Et.anchor={x:Tn.x+Tn.rx*ii,y:Math.max(tn,Tn.y)+1.05,z:Tn.z+Tn.rz*ii,s:xt}}Zr=!1}let Zi={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function As(){zn("wx").textContent=Zi[Ae.cycle()]}zn("wx").textContent=Zi[Ae.W.mode],zn("cam").textContent=Ze[re.cam]||"\u25D0",re.cam===4&&fi(),zn("wx").onclick=Te=>{Te.stopPropagation(),As()},zn("snd").onclick=Te=>{Te.stopPropagation(),Xt()},zn("tim").onclick=Te=>{Te.stopPropagation(),Vt()},zn("cam").onclick=Te=>{Te.stopPropagation(),Nn()};let Ht=0,mn=Te=>{let xt=performance.now();xt-Ht<120||(Ht=xt,Te.cancelable&&Te.type!=="click"&&Te.preventDefault(),Mt())};for(let Te of["touchstart","pointerdown","mousedown","click"])le.addEventListener(Te,mn,{passive:!1});let hs=()=>{ze&&ze.ac.state!=="running"&&ze.ac.resume()};for(let Te of["touchend","click","keydown"])addEventListener(Te,hs,{passive:!0});document.addEventListener("visibilitychange",()=>{ze&&(document.hidden?ze.ac.suspend():ze.ac.resume())});let Ot=!1,Ki="",Ni=52,Ys=0;function Md(){let Te=innerWidth,xt=innerHeight,st=Te/xt,hn=Te+"x"+xt+"@"+s;hn!==Ki&&(Ki=hn,e.setPixelRatio(s),e.setSize(Te,xt,!1),J.composer.setPixelRatio(s),J.composer.setSize(Te,xt),M.aspect=st,Ni=st>=1?52:Zt(2*Math.atan(Math.tan(34*Math.PI/180)/st)*180/Math.PI,52,80),M.fov=Ni+Ys,M.updateProjectionMatrix(),J.grade.uniforms.uAspect.value=st,J.grade.uniforms.uTexel.value.set(1/J.composer.readBuffer.width,1/J.composer.readBuffer.height),Ie.uReflRes.value.set(J.composer.readBuffer.width,J.composer.readBuffer.height),T1(e))}addEventListener("resize",()=>{Ot=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Ot=!0}),Md();let Yl=0;function Sd(Te=!0){if(s>1.05)s=Math.max(1,s-.25),Ot=!0;else if(z)z=!1,J.bloom.enabled=!1;else if(c.shadow.mapSize.x>1024)c.shadow.mapSize.set(1024,1024),B(),c.shadow.map&&(c.shadow.map.dispose(),c.shadow.map=null);else if(de.ahead>430)de.ahead=430;else return;if(Yl++,Te)try{localStorage.setItem("icd-q",String(Yl))}catch{}}try{let Te=parseInt(localStorage.getItem("icd-q")||"0");if(!ot.has("q"))for(let xt=0;xt<Math.min(Te,6);xt++)Sd(!1);Yl=Math.max(Yl,Te||0)}catch{}let wd=performance.now(),di=0,Td=0,pa=0,ma=()=>1-oe.night,Hh=0,en=0,Ed=0,wt=ot.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;wt&&(wt.gl=e.getContext(),wt.tq=wt.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let Mi={p:-1,a:new V,b:new V,next:5},Nt={lat:0,lon:0,road:0,jolt:0,kick:0,u:re.u,vu:0,v:0,s:re.s,yaw:0,brake:0,rk:NaN,rb:null},hv=new fe(3.6,2.8,1.8),fv=[-2.5335,-1.4665,1.4665,2.5335],Ad=[1.12,-1.12],dv=[-24.5,24.5];function Rd(Te){requestAnimationFrame(Rd);let xt=performance.now();Ot&&(Ot=!1,Md());let st=Math.min(.05,Math.max(0,(Te-wd)/1e3));wd=Te,di+=st,re.steer=0,(Xe.ArrowLeft||Xe.a||Xe.A)&&(re.steer=-1),(Xe.ArrowRight||Xe.d||Xe.D)&&(re.steer=1),(Xe.ArrowUp||Xe.w||Xe.W)&&(re.mult=Zt(re.mult*Math.exp(st*.9),_r,ha)),(Xe.ArrowDown||Xe.s||Xe.S)&&(re.mult=Zt(re.mult*Math.exp(-st*.9),_r,ha)),ut&&Math.abs(ut.y-ut.sy)<30&&(re.steer=ut.x<innerWidth/2?-1:1),re.steer&&(re.lastInput=Te,re.uHome=re.u);let hn=Go(Pt.k);re.s-hn>24&&(Pt.k++,hn=Go(Pt.k),Object.assign(Pt,{phase:"idle",raise:1,decided:!1}));let ii=Sl(hn),Tn=hn-re.s;ii&&!Pt.decided&&Tn<150&&(Pt.decided=!0,Tn>75&&ti&&re.speed*re.speed/2.5<Tn-14&&(ot.has("xing")||yn(Pt.k,99)<.8)&&(Pt.phase="warn",He.start(hn,yn(Pt.k,7)<.5?1:-1,16))),Pt.phase==="warn"?(Pt.raise=Math.max(0,Pt.raise-st/6),He.st.cleared&&(Pt.phase="clear",Pt.t2=0)):Pt.phase==="clear"?(Pt.raise=Math.max(0,Pt.raise-st/6),(Pt.t2+=st)>2.2&&(Pt.phase="raise")):Pt.phase==="raise"&&(Pt.raise=Math.min(1,Pt.raise+st/5),Pt.raise>=1&&(Pt.phase="idle"));let tn=Pt.phase==="warn"||Pt.phase==="clear"||Pt.phase==="raise"&&Pt.raise<.25,$i=On(re.s,"speed")*re.mult*(ti?1:.55);if(Pt.phase!=="idle"&&Pt.raise<.8&&Tn>0){let Re=Tn-11.2,nt=Re>0?Math.sqrt(2*1.25*Re):0;$i=Math.min($i,nt),re.speed=Math.min(re.speed,nt)}ot.has("park")&&($i=0,re.speed=0),re.speed+=($i-re.speed)*Math.min(1,st*.5),re.s+=re.speed*st,re.dist+=re.speed*st;let Zl=On(re.s,"rw");re.steer?re.u=Zt(re.u+re.steer*st*2.4,-Zl+.85,Zl-.85):Te-re.lastInput>3e3&&(re.u+=(Zt(re.uHome,-Zl+.85,Zl-.85)+Math.sin(di/11)*.1-re.u)*Math.min(1,st*.9)),!re.todPaused&&ti&&(re.tod=(re.tod+st/480*(oe.night>.5?1.7:1))%1),g1(re.tod),Ae.update(st);let Xn=Ae.W.ov,Rs=Ae.W.rain;x1(Xn,Rs),Xs=Zt(Xs+(Rs>.25?st/18:-st/120),0,1);let Cd=performance.now();de.update(re.s,ti?3.5:14);let Pd=performance.now();if(Ee.at(re.s,St),Math.abs(St.x-de.origin.x)>900||Math.abs(St.z-de.origin.z)>900){let Re=Math.round(St.x)-de.origin.x,nt=Math.round(St.z)-de.origin.z;de.setOrigin(Math.round(St.x),Math.round(St.z)),qs.x-=Re,qs.z-=nt,br.x-=Re,br.z-=nt,F.shift&&F.shift(Re,nt),yr.shift(Re,nt),Bt.shift(Re,nt)}let Ji=de.origin.x,ji=de.origin.z,pv=(Ee.at(re.s+1.5,Ut).y-Ee.at(re.s-1.5,zt).y)/3,mv=(Ut.h-zt.h)/3;if(ie.group.position.set(St.x+St.rx*re.u-Ji,St.y+.01,St.z+St.rz*re.u-ji),st>0){let Re=Nt.vu+((re.u-Nt.u)/st-Nt.vu)*Math.min(1,st*6),nt=(Re-Nt.vu)/st;Nt.u=re.u,Nt.vu=Re,Nt.lat=nt-re.speed*re.speed*mv,Nt.lon+=((re.speed-Nt.v)/st-Nt.lon)*Math.min(1,st*8),Nt.v=re.speed;let rt=Pt.phase!=="idle"&&Tn>0&&Tn<20&&re.speed<.5;if(Nt.brake=Nt.lon<-.6||rt?1:Nt.lon>-.3?0:Nt.brake,Nt.yaw=-Zt(Math.atan(Re/Math.max(re.speed,6))*.8,-.1,.1),Nt.road=.004*Math.sin(re.s*.48)+.003*Math.sin(re.s*.86+1.3),Nt.jolt=Nt.kick=0,ii)for(let at=0;at<4;at++)for(let Kt=0;Kt<2;Kt++){let $t=hn+fv[at]-Ad[Kt];if(Nt.s<$t&&re.s>=$t){let nn=.05+Math.min(re.speed,25)*.004;Nt.jolt+=nn,Nt.kick+=Kt?nn*.9:-nn*.9,ze&&ze.bump(.25+Math.min(re.speed,25)/50)}}{let at=Math.round((re.s-Xo)/Hr);at!==Nt.rk&&(Nt.rk=at,Nt.rb=ki(re.s));let Kt=Nt.rb;if(Kt)for(let $t=0;$t<2;$t++)for(let nn=0;nn<2;nn++){let pi=Kt.s+dv[$t]-Ad[nn];if(Nt.s<pi&&re.s>=pi){let Fn=.035+Math.min(re.speed,25)*.003;Nt.jolt+=Fn,Nt.kick+=nn?Fn*.9:-Fn*.9,ze&&ze.bump(.2+Math.min(re.speed,25)/60)}}}Nt.s=re.s}ie.group.rotation.set(-Math.atan(pv),St.h+Nt.yaw,0);let Mr=zi(re.s);Mr&&Math.abs(re.s-Mr.s)<700?(Ee.at(Mr.s-_n,Ut),Ie.uTunA.value.set(Ut.x-Ji,Ut.y,Ut.z-ji),Ee.at(Mr.s+_n,Ut),Ie.uTunB.value.set(Ut.x-Ji,Ut.y,Ut.z-ji),Ie.uTunR.value=On(Mr.s,"rw")+1.7):(Ie.uTunA.value.set(0,-1e4,0),Ie.uTunB.value.set(0,-1e4,0));let Vh=Mr&&Math.abs(re.s+1-Mr.s)<_n-1.5?1:0;en+=(Vh-en)*Math.min(1,st*(Vh?1.6:.7)),Ie.uCarPos.value.set(ie.group.position.x+St.fx*1.7,ie.group.position.y+.8,ie.group.position.z+St.fz*1.7),Ie.uCarFwd.value.set(St.fx,-.05,St.fz).normalize(),Ie.uHead.value=Vh,ie.update(st,re.speed,Math.max(oe.night,en),Rs,Nt,Ed),ke.update(ii&&Tn>-24&&Tn<700?vh(Ee,hn):null,de.origin,Pt.raise,tn,di),He.update(st,Ee,de.origin,At(.15,.8,oe.night),On(hn,"rw")+3.2);let Wh=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ot.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ot.has("rig")){let[Re,nt,rt,at]=ot.get("rig").split(",").map(Number);Object.assign(Wh[0],{back:Re,up:nt,ahead:rt,lookY:at})}let Sr=new V,ga=6,Id=re.cam===2;if(re.cam===4){Et.t+=st;{let rt=zi(re.s+30);rt&&Math.abs(re.s+30-rt.s)<an+70&&Et.type!=="chase"&&Et.type!=="eye"&&(Et.type="chase",Et.t=0,Et.dur=20,Zr=!1)}(Et.t>Et.dur+(Et.type==="road"?8:0)||Et.type==="road"&&Et.anchor&&re.s>Et.anchor.s+24)&&fi();let Re=ie.group.position,nt=Et.type;if(nt==="chase"||nt==="eye"){let rt=Wh[nt==="eye"?2:0];Id=nt==="eye",Ee.at(re.s-rt.back,zt),Ee.at(re.s+rt.ahead,Ut),ni.set(zt.x+zt.rx*re.u*rt.cu-Ji,zt.y+rt.up,zt.z+zt.rz*re.u*rt.cu-ji),Sr.set(Ut.x+Ut.rx*re.u*rt.lu-Ji,Ut.y+rt.lookY,Ut.z+Ut.rz*re.u*rt.lu-ji)}else if(nt==="side"){Ee.at(re.s+1.5,zt);let rt=Dt(re.s),at=rt.city+rt.sakura>.5,Kt=On(re.s,"rw"),$t=Et.sideSign>0?Kt+(at?1.45:3.4):-(Kt+1.5),nn=zt.y+Ms(re.s+1.5,$t,zt.y,Kt);ni.set(zt.x+zt.rx*$t-Ji,Math.max(nn+1.55,zt.y+1.25),zt.z+zt.rz*$t-ji),Sr.set(Re.x+St.fx*2.5,Re.y+.9,Re.z+St.fz*2.5),ga=4}else if(nt==="road"&&Et.anchor)ni.set(Et.anchor.x-Ji,Et.anchor.y,Et.anchor.z-ji),Sr.set(Re.x,Re.y+.85,Re.z),ga=30;else{Ee.at(re.s-20,zt),Ee.at(re.s+34,Ut);let rt=14+Math.min(Et.t,20)*.35;ni.set(zt.x+zt.rx*re.u*.4-Ji,zt.y+rt,zt.z+zt.rz*re.u*.4-ji),Sr.set(Ut.x-Ji,Ut.y+1,Ut.z-ji),ga=3}}else{let Re=Wh[re.cam];Ee.at(re.s-Re.back,zt),Ee.at(re.s+Re.ahead,Ut);let nt=re.u*Re.cu,rt=nt+(Re.side||0);ni.set(zt.x+zt.rx*rt-Ji,zt.y+Re.up,zt.z+zt.rz*rt-ji),Sr.set(Ut.x+Ut.rx*re.u*Re.lu-Ji,Ut.y+Re.lookY,Ut.z+Ut.rz*re.u*Re.lu-ji)}ie.group.visible=!Id,re.cam===3?M.up.set(St.fx,0,St.fz):M.up.set(0,1,0),Zr||(qs.copy(ni),br.copy(Sr),Zr=!0);let Ld=1+Math.max(0,re.speed-12)/12;qs.lerp(ni,1-Math.exp(-st*ga*Ld)),br.lerp(Sr,1-Math.exp(-st*Math.min(ga,8)*Ld));{let Re=re.cam===3?0:Math.min(Zt((re.speed-16)*.22,0,11),Math.max(0,84-Ni));Ys+=(Re-Ys)*Math.min(1,st*1.5),Math.abs(M.fov-(Ni+Ys))>.02&&(M.fov=Ni+Ys,M.updateProjectionMatrix())}M.position.copy(qs),M.lookAt(br),ot.has("yaw")&&M.rotateY(parseFloat(ot.get("yaw"))*Math.PI/180),ot.has("pitch")&&M.rotateX(parseFloat(ot.get("pitch"))*Math.PI/180),da.set(St.fx,0,St.fz),Kr.set(St.rx,0,St.rz);{let Re=ie.group.position,nt=M.position.x-Re.x,rt=M.position.z-Re.z,at=re.cam===4&&Et.type!=="chase"&&Et.type!=="eye",Kt=re.s+nt*St.fx+rt*St.fz-(at?10:0),$t=at||ql?40:Math.tan(M.fov*Math.PI/360)*M.aspect*1.08;ne.update(Ee,Kt,re.u+nt*St.rx+rt*St.rz,de.origin.x,de.origin.z,On(re.s,"rw"),$t),re.grass||ne.hide()}let jt=Dt(re.s),Gh=1+.25*oe.bright*(1-en);c.color.copy(oe.sunCol),c.intensity=oe.sunI/Gh;{let Re=oe.lightDir;if(T.angleTo(Re)>.1){let Fn=0;if(ti&&!re.todPaused)for(let si=1;si<=60&&!(od(re.tod+si*.001,P).angleTo(Re)>.09);si++)Fn=si;od(re.tod+Fn*.001,T),L=D=0}w.crossVectors(E,T).normalize(),_.crossVectors(T,w),S.set(ie.group.position.x+St.fx*26,ie.group.position.y,ie.group.position.z+St.fz*26),c.target.position.copy(S),c.position.copy(S).addScaledVector(Re,200);let nt=2*d/c.shadow.mapSize.x,rt=T.x/T.y-Re.x/Re.y,at=T.z/T.y-Re.z/Re.y;nt!==O&&(O=nt,L=D=0);{let Fn=Math.round(ie.group.position.y);if(A===null)A=Fn;else if(Math.abs(ie.group.position.y-A)>3){let si=Fn-A;L-=si*(rt*w.x+at*w.z),D-=si*(rt*_.x+at*_.z),A=Fn}}let Kt=de.origin.x,$t=de.origin.z,nn=S.dot(w)+Kt*w.x+$t*w.z-L,pi=S.dot(_)+Kt*_.x+$t*_.z-D;S.addScaledVector(w,Math.round(nn/nt)*nt-nn).addScaledVector(_,Math.round(pi/nt)*nt-pi),C.copy(S),R.copy(S).addScaledVector(T,200),v.set(1,rt,0,-A*rt,0,1,0,0,0,at,1,-A*at,0,0,0,1)}H.target.position.set(ie.group.position.x,ie.group.position.y+.9,ie.group.position.z),H.position.copy(H.target.position).addScaledVector(oe.lightDir,12),k.color.copy(oe.hemiSky),k.groundColor.copy(oe.hemiGround),k.intensity=oe.hemiI/Gh;{let Re=(1-oe.night)*(1-Xn);if(Re>.001){M.getWorldDirection(De);let nt=De.x,rt=De.z,at=Math.hypot(nt,rt)||1,Kt=oe.sunDir,$t=0;for(let pi=-2;pi<=2;pi++){let Fn=pi*.3,si=Math.cos(Fn),wr=Math.sin(Fn),Jr=(nt*si-rt*wr)/at,jr=(nt*wr+rt*si)/at,va=Math.max(0,Jr*Kt.x+jr*Kt.z),Qr=va*va;$t+=Qr*Qr*Qr}let nn=$t/5*(.1+.35*oe.warm)*1.4*Re*ye;oe.fog.r+=oe.sunCol.r*nn,oe.fog.g+=oe.sunCol.g*nn,oe.fog.b+=oe.sunCol.b*nn}}y.fog.color.copy(oe.fog);let Dd=(jt.city*.0022+jt.sakura*.0019+jt.coast*.0011+jt.country*.0014+jt.mountain*.0017+jt.snow*.0021)*(1+oe.night*.25);y.fog.near=Dd*(1+.55*Xn+.45*Rs),y.fog.far=de.ahead*.92,Ie.uSkyHor.value.copy(oe.horizon),Ie.uSkyZen.value.copy(oe.zenith),Ie.uTime.value=di,Ie.uWet.value=Xs*(1-jt.snow),Ie.uSakWet.value=Ue,Ed=Math.max(Ie.uWet.value,Ie.uSakWet.value*jt.sakura)*(1-en);{let Re=(Ie.uWet.value>.04||Ie.uSakWet.value*Math.max(jt.sakura,hh(re.s+120,"sakura"))>.04)&&n!=="low"&&en<.5&&he!=="0";if(J.refl.enabled=Re&&he!=="taps",Ie.uReflOn.value=Re&&he!=="copy"?1:0,Re){M.getWorldDirection(xe),xe.y=0,xe.normalize(),ue.copy(M.position).addScaledVector(xe,1e4).project(M),Ie.uHorizon.value=ue.y*.5+.5;let nt=Math.max(.5,M.position.y-ie.group.position.y);Ie.uReflK.value=Zt(1-2*nt/(5+nt),.05,1)}}Ie.uOrigin.value.set(de.origin.x,de.origin.z),Ie.uWind.value=1+.8*Rs,Ie.uCloudSh.value=(1-Xn)*At(.04,.3,oe.sunEl)*(1-oe.night),Ie.uCloudSh.value>.001&&$.update(e,M.position.x,M.position.z,de.origin.x,de.origin.z);let Si=Q.material.uniforms;if(Si.uBright.value=oe.bright,Si.uNight.value=oe.night,Si.uWarm.value=oe.warm,Si.uTime.value=di,Si.uCirrusCol.value.copy(oe.cLit).lerp(oe.horizon,.25),Si.uCirrus.value=.6*(1-Xn)*(1-.65*At(.4,.9,oe.night)),Si.uOvercast.value=Xn,Si.uMilky.value=At(.55,.95,oe.night)*(1-Xn),oe.night>.65&&Xn<.3&&Mi.p<0&&(Mi.next-=st)<0){let Re=Math.atan2(St.fx,St.fz)+(Math.random()-.5)*1.5,nt=.45+Math.random()*.6,rt=.22+Math.random()*.2,at=(Math.random()-.5)*.6,Kt=($t,nn)=>new V(Math.cos($t)*Math.sin(nn),Math.sin($t),Math.cos($t)*Math.cos(nn));Mi.a.copy(Kt(nt,Re)),Mi.b.copy(Kt(nt-rt,Re+at)),Mi.p=0,Mi.next=ot.has("meteors")?1:6+Math.random()*20}Mi.p>=0&&(Mi.p+=st/.85,Mi.p>1.3&&(Mi.p=-1)),Si.uMetP.value=Mi.p,Si.uMetA.value.copy(Mi.a),Si.uMetB.value.copy(Mi.b),Si.uDeckLit.value.copy(oe.horizon).lerp(oe.cLit,.35),Si.uDeckDark.value.copy(oe.zenith).lerp(oe.horizon,.25).multiplyScalar(.82),Q.position.copy(M.position);{let Re=!!I&&(re.pclouds!==0||!W);I&&(I.mesh.visible=Re,Re&&I.update(M,st)),W&&(W.group.visible=!Re,Re||W.update(M.position,st))}let gv=ee&&re.band!==0?ee.update(M,hr(re.s+200),Math.max(1,M.position.y-St.y+.45),y.fog.near,y.fog.far):0;ee&&re.band===0&&(ee.mesh.visible=!1),ce.update(M.position,Math.max(jt.snow,Dt(re.s+600).snow*.7),1-gv);let Kl=0;for(let Re of[-150,0,250,500,800])Kl=Math.max(Kl,Dt(re.s+Re).coast);se.mesh.visible=Kl>.001,se.u.uWaves.value=re.waves,se.u.uShoreW.value=re.shore,G.surf.visible=re.surf>0,G.tetra.visible=re.tetra>0,G.bark.visible=re.trunks>0,se.update(M.position,di,Dd*.8,At(0,.35,Kl),J.grade.uniforms,Ee,re.s),We.uniforms.uTime.value=di,We.uniforms.uFogD.value=y.fog.near,We.uniforms.uNight.value=oe.night,We.uniforms.uSpecK.value=1-oe.overcast*.85,Ie.uSunDir.value.copy(oe.lightDir),Ie.uSunCol.value.copy(oe.sunCol);let Fi=At(.15,.8,oe.night);G.atlas.emissiveIntensity=.1+Fi*1.05,Ie.uBacklit.value=me*1.6*(1-Xn)*(1-oe.night)*At(0,.08,oe.sunEl)*(1-At(.25,.55,oe.sunEl))*(1-en),Ie.uGhShade.value.set(yt(.8,.3,oe.bright),yt(.8,.85,oe.bright),yt(.8,1.7,oe.bright));{let Re=Zt((oe.bright-.55)/.4,0,1),nt=J.grade.uniforms,rt=Be;if(Ie.uTpK.value=Re*Re*(3-2*Re),Ie.uTpK.value>0)for(let at=0;at<6;at++)Ul(nt,rt[at*3],rt[at*3+1],rt[at*3+2],Ve[at]);if(Ie.uBkK.value=Ie.uTpK.value*re.bark,Ie.uBkK.value>0)for(let at=0;at<6;at++)Ul(nt,et[at*3],et[at*3+1],et[at*3+2],lt[at])}if(yi.tex){let Re=oe.bright;yi.uFieldC.value.set(yt(Pe[0],ge[0],Re),yt(Pe[1],ge[1],Re),yt(Pe[2],ge[2],Re)),yi.uFieldCo.value.set(yt(ve[0],te[0],Re),yt(ve[1],te[1],Re),yt(ve[2],te[2],Re)),yi.uFieldSa.value.set(yt(Oe[0],Ne[0],Re),yt(Oe[1],Ne[1],Re),yt(Oe[2],Ne[2],Re))}Ie.uBlShade.value.set(yt(Ke[0],Fe[0],oe.bright),yt(Ke[1],Fe[1],oe.bright),yt(Ke[2],Fe[2],oe.bright)),Ie.uLightsOn.value=Z>=0?Z:Math.max(At(.02,.75,oe.night),.3*Xn),G.lamp.color.setRGB(.9,.86,.74).lerp(hv,Fi),G.pool.opacity=Fi*.42*(1+.8*Xs);{let Re=ie.group.position,nt=ie.lamps,rt=Math.max(Fi,en),at=0,Kt=0,$t=0,nn=-1e3,pi=0,Fn=0,si=-1e3,wr=0,Jr=900,jr=900;if(rt>.01){let Ud=Math.floor(re.s/Gt);for(let Xh=Ud-1;Xh<=Ud+1;Xh++){let Jl=de.chunks.get(Xh);if(!Jl||!Jl.lamps)continue;let xa=Jl.lamps,Bd=Jl.group.position;for(let eo=0;eo<xa.length;eo+=4){let qh=xa[eo]+Bd.x,Yh=xa[eo+1],Zh=xa[eo+2]+Bd.z,Kh=(qh-Re.x)**2+(Yh-Re.y)**2+(Zh-Re.z)**2,jl=xa[eo+3]/(1+.045*Kh);jl>at?(Kt=at,jr=Jr,Fn=$t,si=nn,wr=pi,at=jl,Jr=Kh,$t=qh,nn=Yh,pi=Zh):jl>Kt&&(Kt=jl,jr=Kh,Fn=qh,si=Yh,wr=Zh)}}M.updateMatrixWorld()}let va=rt*at*(1+.045*Jr)*(1-At(18,30,Math.sqrt(Jr))),Qr=rt*Kt*(1+.045*jr)*(1-At(18,30,Math.sqrt(jr)));nt[0].set($t,nn,pi,1).applyMatrix4(M.matrixWorldInverse).w=va,nt[1].set(Fn,si,wr,1).applyMatrix4(M.matrixWorldInverse).w=Qr,ie.lampCol.setRGB(1,.8-.32*en,.52-.38*en),qi.uLampW.value[0].set($t,nn,pi,va),qi.uLampW.value[1].set(Fn,si,wr,Qr),qi.uLampCol.value.copy(ie.lampCol),ie.head.getWorldPosition(qi.uHeadPos.value),ie.head.target.getWorldPosition(De),qi.uHeadDir.value.copy(De).sub(qi.uHeadPos.value).normalize(),qi.uHeadI.value=ie.head.intensity/60}G.pool.visible=G.pool.opacity>.003,de.lod(re.s,fa,Fi>.15,Xl),Ie.uNight.value=Fi,J.bloom.strength=yt(.32,.55,Fi),J.bloom.threshold=yt(1.35,.95,Fi),J.bloom.radius=yt(.55,.35,Fi);{let Re=Math.max(Fi,en,At(.25,.6,oe.warm)*(1-Xn));J.bloom.enabled=z&&Re>.02,J.bloom.strength*=Math.min(1,Re*4)}e.toneMappingExposure=yt(1,1.15,Fi)*(1+.35*en)*Gh,ni.copy(M.position).addScaledVector(oe.sunDir,1e3).project(M);let Zs=J.grade.uniforms,vv=ni.z<1?1:0,xv=Math.max(Math.abs(ni.x),Math.abs(ni.y));Zs.uSun.value.set(ni.x*.5+.5,ni.y*.5+.5),Zs.uSunVis.value=vv*(1-At(1,1.9,xv))*At(-.02,.15,oe.sunEl)*(1-oe.night)*(1-Xn)*(1-en),Zs.uSat.value=1.22-.24*Xn,Zs.uVig.value=.55-.43*oe.bright,Zs.uLo.value.set(-.014+.026*oe.bright,0,.03),Zs.uDay.value=ma(),Zs.uWarm.value=oe.warm,Zs.uTime.value=di,it.update(M.position,di,Rs*(1-en)*(1-jt.snow),ma());{let Re=zi(re.s+190),nt=(jt.city+jt.country+jt.coast)*(1-Xn)*(1-Xs)*At(.6,.9,oe.sunEl)*(re.mirage??1)*(Re&&Math.abs(re.s+190-Re.s)<330?0:1);Ft.update(Ee,re.s,de.origin.x,de.origin.z,On(re.s+150,"rw"),nt,di,oe.horizon)}{let Re=Zt(jt.snow+jt.mountain*.6*Math.max(oe.night,1-At(.27,.36,re.tod)),0,1)*(1-en);hi.copy(oe.fog).multiplyScalar(.92),bi.copy(oe.sunCol).multiplyScalar(Math.min(1,oe.sunI/3)*(1-Xn)*.6);let nt=Math.cos(ie.group.rotation.y),rt=Math.sin(ie.group.rotation.y),at=ie.group.position;Gl.set(at.x-1.75*rt,at.y+.95,at.z-1.75*nt,Math.max(oe.night,en)*(.5+1.2*Nt.brake)),Bt.update(st,ie.group,re.speed,Ie.uWet.value*(1-en),jt.snow*(1-en),Re,hi,bi,Gl,M.position,re.spray)}Qe.update(M.position,di,jt.snow*(.3+.7*Xn)*(1-en),ma()),yr.setFog(y.fog.near),yr.update(st,di,M.position,da,Kr,jt,ma(),Rs,ie.group.position);let yv=performance.now();F.update(st,di,M.position,da,Kr,jt.sakura*(1-en),St.y,Fi,(jt.country+jt.sakura*.4)*(1-Rs)*(1-en),jt.mountain*(1-en));let _v=performance.now();if(ze){Ee.at(hn,Ut);let Re=Math.hypot(Ut.x-de.origin.x-M.position.x,Ut.z-de.origin.z-M.position.z),nt=He.st.active?He.group.position.distanceTo(M.position):1e9,rt=re.speed/15;ze.update(rt<1.5?rt:1.5+(rt-1.5)*.4,jt,ma(),{rush:Zt((re.speed-25)/40,0,1),bell:tn?Math.pow(Zt(1-Re/260,0,1),1.5):0,train:Math.pow(Zt(1-nt/230,0,1),2),rain:Rs*(1-en)*(1-jt.snow),wetRoad:Ie.uWet.value*(1-en),speed:re.speed,load:Zt(Nt.lon/3,0,1),roof:re.cam!==2,tunnel:en,water:(()=>{let at=ki(re.s);return Math.max(at?1-At(12,150,Math.abs(re.s-at.s)):0,jt.mountain*.45)})(),dusk:oe.warm*(re.tod>.5?1:.3)})}_t(dn(re.s+40)),wt&&(e.info.autoReset=!1,e.info.reset());let $l=null;wt&&wt.tq&&($l=wt.gl.createQuery(),wt.gl.beginQuery(wt.tq.TIME_ELAPSED_EXT,$l));let Nd=performance.now();J.composer.render(st);let Fd=performance.now();if($l){let Re=wt.gl;for(Re.endQuery(wt.tq.TIME_ELAPSED_EXT),wt.pend.push($l);wt.pend.length&&Re.getQueryParameter(wt.pend[0],Re.QUERY_RESULT_AVAILABLE);){let nt=wt.pend.shift(),rt=Re.getQueryParameter(nt,Re.QUERY_RESULT);Re.deleteQuery(nt),Re.getParameter(wt.tq.GPU_DISJOINT_EXT)||(wt.gpu=rt/1e6,wt.gpuN++,wt.gpuSum+=wt.gpu,wt.gpu>wt.gpuMax&&(wt.gpuMax=wt.gpu))}}let $r=window.__pb||(window.__pb={world:0,parts:0,render:0});if($r.world=$r.world*.95+(Pd-Cd)*.05,$r.parts=$r.parts*.95+(_v-yv)*.05,$r.render=$r.render*.95+(Fd-Nd)*.05,Hh=Hh*.95+(performance.now()-xt)*.05,window.__ft=Hh,wt){let Re=e.info,nt=performance.now()-xt,rt={t:+di.toFixed(2),s:Math.round(re.s),total:+nt.toFixed(1),world:+(Pd-Cd).toFixed(1),render:+(Fd-Nd).toFixed(1),gpu:+(wt.gpu||0).toFixed(1),progs:Re.programs.length-wt.progs,geos:Re.memory.geometries-wt.geos,tex:Re.memory.textures-wt.tex,calls:Re.render.calls,tris:Re.render.triangles};rt.progs>0&&ti&&(rt.newProgs=Re.programs.slice(-rt.progs).map(at=>(at.name||"")+":"+String(at.cacheKey).slice(0,60))),wt.progs=Re.programs.length,wt.geos=Re.memory.geometries,wt.tex=Re.memory.textures,wt.frames++,wt.sum+=nt,nt>wt.max&&(wt.max=nt),nt>12&&ti&&wt.spikes.push(rt),wt.last=rt}if((tt+=st)>.25){tt=0,U.textContent=Math.round(re.speed*3.6),j.textContent=(re.dist/1e3).toFixed(1);let Re=Math.floor(re.tod*1440);pe.textContent=`${String(Math.floor(Re/60)).padStart(2,"0")}:${String(Re%60).padStart(2,"0")}`}Td++,ti&&Td>150&&st>.03?pa+=st:pa=Math.max(0,pa-st*.5),pa>3&&!ot.has("q")&&(pa=0,Sd())}window.__dbg={renderer:e,st:re,scene:y,camera:M,world:de,TOD:oe,KEYS:Qo,X:Pt,train:He,weather:Ae,U:Ie,birds:yr,cine:Et,post:J,car:ie,sun:c,M:G,clouds:W,pclouds:I,band:ee,sky:Q,mountains:ce,shadowDir:T,CM:Nt,spray:Bt,grass:ne,sea:se,get audio(){return ze}},ua(""),le.classList.add("ready"),ot.has("auto")&&Mt(),requestAnimationFrame(Rd)}A3().catch(i=>{console.error(i),ua("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
