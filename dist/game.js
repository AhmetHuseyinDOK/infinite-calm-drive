var fp=0,Pf=1,dp=2;var Ir=1,pp=2,Lo=3,xs=0,Hn=1,bn=2,oi=0,Do=1,os=2,If=3,Lf=4,mp=5;var Lr=100,gp=101,vp=102,xp=103,yp=104,_p=200,bp=201,Mp=202,Sp=203,Df=204,Nf=205,wp=206,Tp=207,Ep=208,Ap=209,Rp=210,Cp=211,Pp=212,Ip=213,Lp=214,wc=0,Tc=1,Ec=2,vo=3,Ac=4,Rc=5,Cc=6,Pc=7,Ff=0,Dp=1,Np=2,as=0,Uf=1,Bf=2,Of=3,kf=4,zf=5,Hf=6,sl=7;var Vf=300,or=301,Dr=302,lu=303,cu=304,rl=306,Ns=1e3,ds=1001,Ic=1002,En=1003,Fp=1004;var ol=1005;var Ot=1006,uu=1007;var In=1008;var Jn=1009,Wf=1010,Gf=1011,No=1012,hu=1013,ls=1014,Oi=1015,Rn=1016,fu=1017,du=1018,Fo=1020,Xf=35902,qf=35899,Yf=1021,Zf=1022,jn=1023,ps=1026,ar=1027,lr=1028,pu=1029,cr=1030,mu=1031;var gu=1033,al=33776,ll=33777,cl=33778,ul=33779,vu=35840,xu=35841,yu=35842,_u=35843,bu=36196,Mu=37492,Su=37496,wu=37488,Tu=37489,hl=37490,Eu=37491,Au=37808,Ru=37809,Cu=37810,Pu=37811,Iu=37812,Lu=37813,Du=37814,Nu=37815,Fu=37816,Uu=37817,Bu=37818,Ou=37819,ku=37820,zu=37821,Hu=36492,Vu=36494,Wu=36495,Gu=36283,Xu=36284,fl=36285,qu=36286;var Aa=2300,Lc=2301,bc=2302,xf=2303,yf=2400,_f=2401,bf=2402;var Up=3200;var Yu=0,Bp=1,ai="",qt="srgb",Ra="srgb-linear",Ca="linear",Vt="srgb";var Mc=7680;var Op=519,kp=512,zp=513,Hp=514,Zu=515,Vp=516,Wp=517,Ku=518,Gp=519,Xp=35044;var Kf="300 es",is=2e3,xo=2001;function lv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qp(){let i=yo("canvas");return i.style.display="block",i}var Id={},_o=null;function $f(...i){let e="THREE."+i.shift();_o?_o("log",e,...i):console.log(e,...i)}function Yp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ut(...i){i=Yp(i);let e="THREE."+i.shift();if(_o)_o("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=Yp(i);let e="THREE."+i.shift();if(_o)_o("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ar(...i){let e=i.join(" ");e in Id||(Id[e]=!0,ut(...i))}function Zp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Kp={[wc]:Tc,[Ec]:Cc,[Ac]:Pc,[vo]:Rc,[Tc]:wc,[Cc]:Ec,[Pc]:Ac,[Rc]:vo},ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gh=Math.PI/180,Pa=180/Math.PI;function Uo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yn[i&255]+Yn[i>>8&255]+Yn[i>>16&255]+Yn[i>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[n&255]+Yn[n>>8&255]+Yn[n>>16&255]+Yn[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function uv(i,e){return(i%e+e)%e}function Xh(i,e,t){return(1-t)*i+t*e}function ga(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var n0=class n0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};n0.prototype.isVector2=!0;var Ie=n0,vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let a=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3],m=r[o+0],x=r[o+1],y=r[o+2],M=r[o+3];if(p!==M||a!==m||u!==x||h!==y){let c=a*m+u*x+h*y+p*M;c<0&&(m=-m,x=-x,y=-y,M=-M,c=-c);let f=1-l;if(c<.9995){let d=Math.acos(c),g=Math.sin(d);f=Math.sin(f*d)/g,l=Math.sin(l*d)/g,a=a*f+m*l,u=u*f+x*l,h=h*f+y*l,p=p*f+M*l}else{a=a*f+m*l,u=u*f+x*l,h=h*f+y*l,p=p*f+M*l;let d=1/Math.sqrt(a*a+u*u+h*h+p*p);a*=d,u*=d,h*=d,p*=d}}e[t]=a,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],a=n[s+1],u=n[s+2],h=n[s+3],p=r[o],m=r[o+1],x=r[o+2],y=r[o+3];return e[t]=l*y+h*p+a*x-u*m,e[t+1]=a*y+h*m+u*p-l*x,e[t+2]=u*y+h*x+l*m-a*p,e[t+3]=h*y-l*p-a*m-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,u=l(n/2),h=l(s/2),p=l(r/2),m=a(n/2),x=a(s/2),y=a(r/2);switch(o){case"XYZ":this._x=m*h*p+u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p-m*x*y;break;case"YXZ":this._x=m*h*p+u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p+m*x*y;break;case"ZXY":this._x=m*h*p-u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p-m*x*y;break;case"ZYX":this._x=m*h*p-u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p+m*x*y;break;case"YZX":this._x=m*h*p+u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p-m*x*y;break;case"XZY":this._x=m*h*p-u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p+m*x*y;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],a=t[9],u=t[2],h=t[6],p=t[10],m=n+l+p;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(h-a)*x,this._y=(r-u)*x,this._z=(o-s)*x}else if(n>l&&n>p){let x=2*Math.sqrt(1+n-l-p);this._w=(h-a)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+u)/x}else if(l>p){let x=2*Math.sqrt(1+l-n-p);this._w=(r-u)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(a+h)/x}else{let x=2*Math.sqrt(1+p-n-l);this._w=(o-s)/x,this._x=(r+u)/x,this._y=(a+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,a=t._y,u=t._z,h=t._w;return this._x=n*h+o*l+s*u-r*a,this._y=s*h+o*a+r*l-n*u,this._z=r*h+o*u+n*a-s*l,this._w=o*h-n*l-s*a-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){let u=Math.acos(l),h=Math.sin(u);a=Math.sin(a*u)/h,t=Math.sin(t*u)/h,this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},i0=class i0{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ld.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,a=e.w,u=2*(o*s-l*n),h=2*(l*t-r*s),p=2*(r*n-o*t);return this.x=t+a*u+o*p-l*h,this.y=n+a*h+l*u-r*p,this.z=s+a*p+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=s*a-r*l,this.y=r*o-n*a,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};i0.prototype.isVector3=!0;var z=i0,qh=new z,Ld=new vn,s0=class s0{constructor(e,t,n,s,r,o,l,a,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u)}set(e,t,n,s,r,o,l,a,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],u=n[1],h=n[4],p=n[7],m=n[2],x=n[5],y=n[8],M=s[0],c=s[3],f=s[6],d=s[1],g=s[4],v=s[7],b=s[2],T=s[5],w=s[8];return r[0]=o*M+l*d+a*b,r[3]=o*c+l*g+a*T,r[6]=o*f+l*v+a*w,r[1]=u*M+h*d+p*b,r[4]=u*c+h*g+p*T,r[7]=u*f+h*v+p*w,r[2]=m*M+x*d+y*b,r[5]=m*c+x*g+y*T,r[8]=m*f+x*v+y*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8];return t*o*h-t*l*u-n*r*h+n*l*a+s*r*u-s*o*a}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=h*o-l*u,m=l*a-h*r,x=u*r-o*a,y=t*p+n*m+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return e[0]=p*M,e[1]=(s*u-h*n)*M,e[2]=(l*n-s*o)*M,e[3]=m*M,e[4]=(h*t-s*a)*M,e[5]=(s*r-l*t)*M,e[6]=x*M,e[7]=(n*a-u*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let a=Math.cos(r),u=Math.sin(r);return this.set(n*a,n*u,-n*(a*o+u*l)+o+e,-s*u,s*a,-s*(-u*o+a*l)+l+t,0,0,1),this}scale(e,t){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yh.makeScale(e,t)),this}rotate(e){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yh.makeRotation(-e)),this}translate(e,t){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};s0.prototype.isMatrix3=!0;var gt=s0,Yh=new gt,Dd=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nd=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hv(){let i={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Vt&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(s.r=mo(s.r),s.g=mo(s.g),s.b=mo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ra]:{primaries:e,whitePoint:n,transfer:Ca,toXYZ:Dd,fromXYZ:Nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Vt,toXYZ:Dd,fromXYZ:Nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var It=hv();function Ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qr,Dc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=yo("canvas")),Qr.width=e.width,Qr.height=e.height;let s=Qr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ds(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ds(t[n]/255)*255):t[n]=Ds(t[n]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fv=0,bo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Zh(s[o].image)):r.push(Zh(s[o]))}else r=Zh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}var dv=0,Kh=new z,Kn=class i extends ms{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ds,s=ds,r=Ot,o=In,l=jn,a=Jn,u=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Uo(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Vf;Kn.DEFAULT_ANISOTROPY=1;var r0=class r0{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,a=e.elements,u=a[0],h=a[4],p=a[8],m=a[1],x=a[5],y=a[9],M=a[2],c=a[6],f=a[10];if(Math.abs(h-m)<.01&&Math.abs(p-M)<.01&&Math.abs(y-c)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+M)<.1&&Math.abs(y+c)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(u+1)/2,v=(x+1)/2,b=(f+1)/2,T=(h+m)/4,w=(p+M)/4,_=(y+c)/4;return g>v&&g>b?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=T/n,r=w/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=_/r),this.set(n,s,r,t),this}let d=Math.sqrt((c-y)*(c-y)+(p-M)*(p-M)+(m-h)*(m-h));return Math.abs(d)<.001&&(d=1),this.x=(c-y)/d,this.y=(p-M)/d,this.z=(m-h)/d,this.w=Math.acos((u+x+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};r0.prototype.isVector4=!0;var mt=r0,Nc=class extends ms{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Kn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new bo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Nc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ia=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fc=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var au=class au{constructor(e,t,n,s,r,o,l,a,u,h,p,m,x,y,M,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u,h,p,m,x,y,M,c)}set(e,t,n,s,r,o,l,a,u,h,p,m,x,y,M,c){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=l,f[13]=a,f[2]=u,f[6]=h,f[10]=p,f[14]=m,f[3]=x,f[7]=y,f[11]=M,f[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new au().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/eo.setFromMatrixColumn(e,0).length(),r=1/eo.setFromMatrixColumn(e,1).length(),o=1/eo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let m=o*h,x=o*p,y=l*h,M=l*p;t[0]=a*h,t[4]=-a*p,t[8]=u,t[1]=x+y*u,t[5]=m-M*u,t[9]=-l*a,t[2]=M-m*u,t[6]=y+x*u,t[10]=o*a}else if(e.order==="YXZ"){let m=a*h,x=a*p,y=u*h,M=u*p;t[0]=m+M*l,t[4]=y*l-x,t[8]=o*u,t[1]=o*p,t[5]=o*h,t[9]=-l,t[2]=x*l-y,t[6]=M+m*l,t[10]=o*a}else if(e.order==="ZXY"){let m=a*h,x=a*p,y=u*h,M=u*p;t[0]=m-M*l,t[4]=-o*p,t[8]=y+x*l,t[1]=x+y*l,t[5]=o*h,t[9]=M-m*l,t[2]=-o*u,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){let m=o*h,x=o*p,y=l*h,M=l*p;t[0]=a*h,t[4]=y*u-x,t[8]=m*u+M,t[1]=a*p,t[5]=M*u+m,t[9]=x*u-y,t[2]=-u,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){let m=o*a,x=o*u,y=l*a,M=l*u;t[0]=a*h,t[4]=M-m*p,t[8]=y*p+x,t[1]=p,t[5]=o*h,t[9]=-l*h,t[2]=-u*h,t[6]=x*p+y,t[10]=m-M*p}else if(e.order==="XZY"){let m=o*a,x=o*u,y=l*a,M=l*u;t[0]=a*h,t[4]=-p,t[8]=u*h,t[1]=m*p+M,t[5]=o*h,t[9]=x*p-y,t[2]=y*p-x,t[6]=l*h,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pv,e,mv)}lookAt(e,t,n){let s=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Zs.crossVectors(n,Ti),Zs.lengthSq()===0&&(Math.abs(n.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Zs.crossVectors(n,Ti)),Zs.normalize(),Kl.crossVectors(Ti,Zs),s[0]=Zs.x,s[4]=Kl.x,s[8]=Ti.x,s[1]=Zs.y,s[5]=Kl.y,s[9]=Ti.y,s[2]=Zs.z,s[6]=Kl.z,s[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],u=n[12],h=n[1],p=n[5],m=n[9],x=n[13],y=n[2],M=n[6],c=n[10],f=n[14],d=n[3],g=n[7],v=n[11],b=n[15],T=s[0],w=s[4],_=s[8],S=s[12],E=s[1],A=s[5],C=s[9],I=s[13],R=s[2],L=s[6],D=s[10],O=s[14],H=s[3],B=s[7],V=s[11],k=s[15];return r[0]=o*T+l*E+a*R+u*H,r[4]=o*w+l*A+a*L+u*B,r[8]=o*_+l*C+a*D+u*V,r[12]=o*S+l*I+a*O+u*k,r[1]=h*T+p*E+m*R+x*H,r[5]=h*w+p*A+m*L+x*B,r[9]=h*_+p*C+m*D+x*V,r[13]=h*S+p*I+m*O+x*k,r[2]=y*T+M*E+c*R+f*H,r[6]=y*w+M*A+c*L+f*B,r[10]=y*_+M*C+c*D+f*V,r[14]=y*S+M*I+c*O+f*k,r[3]=d*T+g*E+v*R+b*H,r[7]=d*w+g*A+v*L+b*B,r[11]=d*_+g*C+v*D+b*V,r[15]=d*S+g*I+v*O+b*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],a=e[9],u=e[13],h=e[2],p=e[6],m=e[10],x=e[14],y=e[3],M=e[7],c=e[11],f=e[15],d=a*x-u*m,g=l*x-u*p,v=l*m-a*p,b=o*x-u*h,T=o*m-a*h,w=o*p-l*h;return t*(M*d-c*g+f*v)-n*(y*d-c*b+f*T)+s*(y*g-M*b+f*w)-r*(y*v-M*T+c*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],a=e[2],u=e[6],h=e[10];return t*(o*h-l*u)-n*(r*h-l*a)+s*(r*u-o*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=e[9],m=e[10],x=e[11],y=e[12],M=e[13],c=e[14],f=e[15],d=t*l-n*o,g=t*a-s*o,v=t*u-r*o,b=n*a-s*l,T=n*u-r*l,w=s*u-r*a,_=h*M-p*y,S=h*c-m*y,E=h*f-x*y,A=p*c-m*M,C=p*f-x*M,I=m*f-x*c,R=d*I-g*C+v*A+b*E-T*S+w*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=(l*I-a*C+u*A)*L,e[1]=(s*C-n*I-r*A)*L,e[2]=(M*w-c*T+f*b)*L,e[3]=(m*T-p*w-x*b)*L,e[4]=(a*E-o*I-u*S)*L,e[5]=(t*I-s*E+r*S)*L,e[6]=(c*v-y*w-f*g)*L,e[7]=(h*w-m*v+x*g)*L,e[8]=(o*C-l*E+u*_)*L,e[9]=(n*E-t*C-r*_)*L,e[10]=(y*T-M*v+f*d)*L,e[11]=(p*v-h*T-x*d)*L,e[12]=(l*S-o*A-a*_)*L,e[13]=(t*A-n*S+s*_)*L,e[14]=(M*g-y*b-c*d)*L,e[15]=(h*b-p*g+m*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,u=r*o,h=r*l;return this.set(u*o+n,u*l-s*a,u*a+s*l,0,u*l+s*a,h*l+n,h*a-s*o,0,u*a-s*l,h*a+s*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,u=r+r,h=o+o,p=l+l,m=r*u,x=r*h,y=r*p,M=o*h,c=o*p,f=l*p,d=a*u,g=a*h,v=a*p,b=n.x,T=n.y,w=n.z;return s[0]=(1-(M+f))*b,s[1]=(x+v)*b,s[2]=(y-g)*b,s[3]=0,s[4]=(x-v)*T,s[5]=(1-(m+f))*T,s[6]=(c+d)*T,s[7]=0,s[8]=(y+g)*w,s[9]=(c-d)*w,s[10]=(1-(m+M))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=eo.set(s[0],s[1],s[2]).length(),l=eo.set(s[4],s[5],s[6]).length(),a=eo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qi.copy(this);let u=1/o,h=1/l,p=1/a;return Qi.elements[0]*=u,Qi.elements[1]*=u,Qi.elements[2]*=u,Qi.elements[4]*=h,Qi.elements[5]*=h,Qi.elements[6]*=h,Qi.elements[8]*=p,Qi.elements[9]*=p,Qi.elements[10]*=p,t.setFromRotationMatrix(Qi),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,s,r,o,l=is,a=!1){let u=this.elements,h=2*r/(t-e),p=2*r/(n-s),m=(t+e)/(t-e),x=(n+s)/(n-s),y,M;if(a)y=r/(o-r),M=o*r/(o-r);else if(l===is)y=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(l===xo)y=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=is,a=!1){let u=this.elements,h=2/(t-e),p=2/(n-s),m=-(t+e)/(t-e),x=-(n+s)/(n-s),y,M;if(a)y=1/(o-r),M=o/(o-r);else if(l===is)y=-2/(o-r),M=-(o+r)/(o-r);else if(l===xo)y=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};au.prototype.isMatrix4=!0;var Je=au,eo=new z,Qi=new Je,pv=new z(0,0,0),mv=new z(1,1,1),Zs=new z,Kl=new z,Ti=new z,Fd=new Je,Ud=new vn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],a=s[1],u=s[5],h=s[9],p=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(a,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gv=0,Bd=new z,to=new vn,Rs=new Je,$l=new z,va=new z,vv=new z,xv=new vn,Od=new z(1,0,0),kd=new z(0,1,0),zd=new z(0,0,1),Hd={type:"added"},yv={type:"removed"},no={type:"childadded",child:null},$h={type:"childremoved",child:null},An=class i extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new $n,n=new vn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new gt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(Od,e)}rotateY(e){return this.rotateOnAxis(kd,e)}rotateZ(e){return this.rotateOnAxis(zd,e)}translateOnAxis(e,t){return Bd.copy(e).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Od,e)}translateY(e){return this.translateOnAxis(kd,e)}translateZ(e){return this.translateOnAxis(zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$l.copy(e):$l.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rs.lookAt(va,$l,this.up):Rs.lookAt($l,va,this.up),this.quaternion.setFromRotationMatrix(Rs),s&&(Rs.extractRotation(s.matrixWorld),to.setFromRotationMatrix(Rs),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),no.child=e,this.dispatchEvent(no),no.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yv),$h.child=e,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,vv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,xv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let a=l.shapes;if(Array.isArray(a))for(let u=0,h=a.length;u<h;u++){let p=a[u];r(e.shapes,p)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let a=0,u=this.material.length;a<u;a++)l.push(r(e.materials,this.material[a]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let a=this.animations[l];s.animations.push(r(e.animations,a))}}if(t){let l=o(e.geometries),a=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),x=o(e.animations),y=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(l){let a=[];for(let u in l){let h=l[u];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};An.DEFAULT_UP=new z(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},_v={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,a=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let M of e.hand.values()){let c=t.getJointPose(M,n),f=this._getHandJoint(u,M);c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=c.radius),f.visible=c!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=h.position.distanceTo(p.position),x=.02,y=.005;u.inputState.pinching&&m>x+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=x-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Jh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=It.workingColorSpace){if(e=uv(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Jh(o,r,e+1/3),this.g=Jh(o,r,e),this.b=Jh(o,r,e-1/3)}return It.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=$p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return It.workingToColorSpace(Zn.copy(this),e),Math.round(Rt(Zn.r*255,0,255))*65536+Math.round(Rt(Zn.g*255,0,255))*256+Math.round(Rt(Zn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Zn.copy(this),t);let n=Zn.r,s=Zn.g,r=Zn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),a,u,h=(l+o)/2;if(l===o)a=0,u=0;else{let p=o-l;switch(u=h<=.5?p/(o+l):p/(2-o-l),o){case n:a=(s-r)/p+(s<r?6:0);break;case s:a=(r-n)/p+2;break;case r:a=(n-s)/p+4;break}a/=6}return e.h=a,e.s=u,e.l=h,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Zn.copy(this),t),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=qt){It.workingToColorSpace(Zn.copy(this),e);let t=Zn.r,n=Zn.g,s=Zn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ks),this.setHSL(Ks.h+e,Ks.s+t,Ks.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ks),e.getHSL(Jl);let n=Xh(Ks.h,Jl.h,t),s=Xh(Ks.s,Jl.s,t),r=Xh(Ks.l,Jl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zn=new pe;pe.NAMES=$p;var Da=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rr=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},es=new z,Cs=new z,jh=new z,Ps=new z,io=new z,so=new z,Vd=new z,Qh=new z,ef=new z,tf=new z,nf=new mt,sf=new mt,rf=new mt,Qs=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),es.subVectors(e,t),s.cross(es);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){es.subVectors(s,t),Cs.subVectors(n,t),jh.subVectors(e,t);let o=es.dot(es),l=es.dot(Cs),a=es.dot(jh),u=Cs.dot(Cs),h=Cs.dot(jh),p=o*u-l*l;if(p===0)return r.set(0,0,0),null;let m=1/p,x=(u*a-l*h)*m,y=(o*h-l*a)*m;return r.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ps)===null?!1:Ps.x>=0&&Ps.y>=0&&Ps.x+Ps.y<=1}static getInterpolation(e,t,n,s,r,o,l,a){return this.getBarycoord(e,t,n,s,Ps)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,Ps.x),a.addScaledVector(o,Ps.y),a.addScaledVector(l,Ps.z),a)}static getInterpolatedAttribute(e,t,n,s,r,o){return nf.setScalar(0),sf.setScalar(0),rf.setScalar(0),nf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,n),rf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(nf,r.x),o.addScaledVector(sf,r.y),o.addScaledVector(rf,r.z),o}static isFrontFacing(e,t,n,s){return es.subVectors(n,t),Cs.subVectors(e,t),es.cross(Cs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return es.subVectors(this.c,this.b),Cs.subVectors(this.a,this.b),es.cross(Cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;io.subVectors(s,n),so.subVectors(r,n),Qh.subVectors(e,n);let a=io.dot(Qh),u=so.dot(Qh);if(a<=0&&u<=0)return t.copy(n);ef.subVectors(e,s);let h=io.dot(ef),p=so.dot(ef);if(h>=0&&p<=h)return t.copy(s);let m=a*p-h*u;if(m<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(io,o);tf.subVectors(e,r);let x=io.dot(tf),y=so.dot(tf);if(y>=0&&x<=y)return t.copy(r);let M=x*u-a*y;if(M<=0&&u>=0&&y<=0)return l=u/(u-y),t.copy(n).addScaledVector(so,l);let c=h*y-x*p;if(c<=0&&p-h>=0&&x-y>=0)return Vd.subVectors(r,s),l=(p-h)/(p-h+(x-y)),t.copy(s).addScaledVector(Vd,l);let f=1/(c+M+m);return o=M*f,l=m*f,t.copy(n).addScaledVector(io,o).addScaledVector(so,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ts.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ts.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ts.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ts):ts.fromBufferAttribute(r,o),ts.applyMatrix4(e.matrixWorld),this.expandByPoint(ts);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jl.copy(n.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ts),ts.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),Ql.subVectors(this.max,xa),ro.subVectors(e.a,xa),oo.subVectors(e.b,xa),ao.subVectors(e.c,xa),$s.subVectors(oo,ro),Js.subVectors(ao,oo),Sr.subVectors(ro,ao);let t=[0,-$s.z,$s.y,0,-Js.z,Js.y,0,-Sr.z,Sr.y,$s.z,0,-$s.x,Js.z,0,-Js.x,Sr.z,0,-Sr.x,-$s.y,$s.x,0,-Js.y,Js.x,0,-Sr.y,Sr.x,0];return!of(t,ro,oo,ao,Ql)||(t=[1,0,0,0,1,0,0,0,1],!of(t,ro,oo,ao,Ql))?!1:(ec.crossVectors($s,Js),t=[ec.x,ec.y,ec.z],of(t,ro,oo,ao,Ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ts).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ts).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Is=[new z,new z,new z,new z,new z,new z,new z,new z],ts=new z,jl=new vi,ro=new z,oo=new z,ao=new z,$s=new z,Js=new z,Sr=new z,xa=new z,Ql=new z,ec=new z,wr=new z;function of(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wr.fromArray(i,r);let l=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),a=e.dot(wr),u=t.dot(wr),h=n.dot(wr);if(Math.max(-Math.max(a,u,h),Math.min(a,u,h))>l)return!1}return!0}var Tn=new z,tc=new Ie,bv=0,Mt=class extends ms{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ga(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ga(t,this.array)),t}setX(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ga(t,this.array)),t}setY(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ga(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ga(t,this.array)),t}setW(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),n=gi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),n=gi(n,this.array),s=gi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),n=gi(n,this.array),s=gi(s,this.array),r=gi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Na=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fa=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mv=new vi,ya=new z,af=new z,xi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ya,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(af)),this.expandByPoint(ya.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sv=0,Ui=new Je,lf=new An,lo=new z,Ei=new vi,_a=new vi,Fn=new z,vt=class i extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?Fa:Na)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,t,n){return Ui.makeTranslation(e,t,n),this.applyMatrix4(Ui),this}scale(e,t,n){return Ui.makeScale(e,t,n),this.applyMatrix4(Ui),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];_a.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(Ei.min,_a.min),Ei.expandByPoint(Fn),Fn.addVectors(Ei.max,_a.max),Ei.expandByPoint(Fn)):(Ei.expandByPoint(_a.min),Ei.expandByPoint(_a.max))}Ei.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Fn));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],a=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Fn.fromBufferAttribute(l,u),a&&(lo.fromBufferAttribute(e,u),Fn.add(lo)),s=Math.max(s,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],a=[];for(let _=0;_<n.count;_++)l[_]=new z,a[_]=new z;let u=new z,h=new z,p=new z,m=new Ie,x=new Ie,y=new Ie,M=new z,c=new z;function f(_,S,E){u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,E),m.fromBufferAttribute(r,_),x.fromBufferAttribute(r,S),y.fromBufferAttribute(r,E),h.sub(u),p.sub(u),x.sub(m),y.sub(m);let A=1/(x.x*y.y-y.x*x.y);isFinite(A)&&(M.copy(h).multiplyScalar(y.y).addScaledVector(p,-x.y).multiplyScalar(A),c.copy(p).multiplyScalar(x.x).addScaledVector(h,-y.x).multiplyScalar(A),l[_].add(M),l[S].add(M),l[E].add(M),a[_].add(c),a[S].add(c),a[E].add(c))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let _=0,S=d.length;_<S;++_){let E=d[_],A=E.start,C=E.count;for(let I=A,R=A+C;I<R;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let g=new z,v=new z,b=new z,T=new z;function w(_){b.fromBufferAttribute(s,_),T.copy(b);let S=l[_];g.copy(S),g.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(T,S);let A=v.dot(a[_])<0?-1:1;o.setXYZW(_,g.x,g.y,g.z,A)}for(let _=0,S=d.length;_<S;++_){let E=d[_],A=E.start,C=E.count;for(let I=A,R=A+C;I<R;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);let s=new z,r=new z,o=new z,l=new z,a=new z,u=new z,h=new z,p=new z;if(e)for(let m=0,x=e.count;m<x;m+=3){let y=e.getX(m+0),M=e.getX(m+1),c=e.getX(m+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,c),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),l.fromBufferAttribute(n,y),a.fromBufferAttribute(n,M),u.fromBufferAttribute(n,c),l.add(h),a.add(h),u.add(h),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(c,u.x,u.y,u.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(l,a){let u=l.array,h=l.itemSize,p=l.normalized,m=new u.constructor(a.length*h),x=0,y=0;for(let M=0,c=a.length;M<c;M++){l.isInterleavedBufferAttribute?x=a[M]*l.data.stride+l.offset:x=a[M]*h;for(let f=0;f<h;f++)m[y++]=u[x++]}return new Mt(m,h,p)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let a=s[l],u=e(a,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let a=[],u=r[l];for(let h=0,p=u.length;h<p;h++){let m=u[h],x=e(m,n);a.push(x)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,a=o.length;l<a;l++){let u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let u in a)a[u]!==void 0&&(e[u]=a[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let a in n){let u=n[a];e.data.attributes[a]=u.toJSON(e.data)}let s={},r=!1;for(let a in this.morphAttributes){let u=this.morphAttributes[a],h=[];for(let p=0,m=u.length;p<m;p++){let x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(s[a]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],p=r[u];for(let m=0,x=p.length;m<x;m++)h.push(p[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var cf=new z,wv=new z,Tv=new gt,ns=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=cf.subVectors(n,t).cross(wv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(cf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tv.getNormalMatrix(e),s=this.coplanarPoint(cf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ev=0,gs=class extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=Do,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=Nf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mc,this.stencilZFail=Mc,this.stencilZPass=Mc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let a=r[l];delete a.metadata,o.push(a)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ns().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ls=new z,uf=new z,nc=new z,ic=new z,So=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ls)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ls.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ls.copy(this.origin).addScaledVector(this.direction,t),Ls.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uf.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),ic.copy(this.origin).sub(uf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(nc),l=ic.dot(this.direction),a=-ic.dot(nc),u=ic.lengthSq(),h=Math.abs(1-o*o),p,m,x,y;if(h>0)if(p=o*a-l,m=o*l-a,y=r*h,p>=0)if(m>=-y)if(m<=y){let M=1/h;p*=M,m*=M,x=p*(p+o*m+2*l)+m*(o*p+m+2*a)+u}else m=r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m=-r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m<=-y?(p=Math.max(0,-(-o*r+l)),m=p>0?-r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u):m<=y?(p=0,m=Math.min(Math.max(-r,-a),r),x=m*(m+2*a)+u):(p=Math.max(0,-(o*r+l)),m=p>0?r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u);else m=o>0?-r:r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(uf).addScaledVector(nc,m),x}intersectSphere(e,t){if(e.radius<0)return null;Ls.subVectors(e.center,this.origin);let n=Ls.dot(this.direction),s=Ls.dot(Ls)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,a,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(l=(e.min.z-m.z)*p,a=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,a=(e.min.z-m.z)*p),n>a||l>s)||((l>n||n!==n)&&(n=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ls)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,a=l.x,u=l.y,h=l.z,p=e.x-o.x,m=e.y-o.y,x=e.z-o.z,y=t.x-o.x,M=t.y-o.y,c=t.z-o.z,f=n.x-o.x,d=n.y-o.y,g=n.z-o.z,v=Math.abs(a),b=Math.abs(u),T=Math.abs(h),w,_,S,E,A,C,I,R,L,D,O,H;if(v>=b&&v>=T?(S=a,C=p,L=y,H=f,a>=0?(w=u,_=h,E=m,A=x,I=M,R=c,D=d,O=g):(w=h,_=u,E=x,A=m,I=c,R=M,D=g,O=d)):b>=T?(S=u,C=m,L=M,H=d,u>=0?(w=h,_=a,E=x,A=p,I=c,R=y,D=g,O=f):(w=a,_=h,E=p,A=x,I=y,R=c,D=f,O=g)):(S=h,C=x,L=c,H=g,h>=0?(w=a,_=u,E=p,A=m,I=y,R=M,D=f,O=d):(w=u,_=a,E=m,A=p,I=M,R=y,D=d,O=f)),S===0)return null;let B=w/S,V=_/S,k=1/S,q=E-B*C,ee=A-V*C,we=I-B*L,Ae=R-V*L,Me=D-B*H,G=O-V*H,J=Me*Ae-G*we,xe=q*G-ee*Me,Pe=we*ee-Ae*q;if(s){if(J<0||xe<0||Pe<0)return null}else if((J<0||xe<0||Pe<0)&&(J>0||xe>0||Pe>0))return null;let re=J+xe+Pe;if(re===0)return null;let ye=k*(J*C+xe*L+Pe*H);return(re>0?ye<0:ye>0)?null:this.at(ye/re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wd=new Je,Tr=new So,sc=new xi,Gd=new z,rc=new z,oc=new z,ac=new z,hf=new z,lc=new z,Xd=new z,cc=new z,ht=class extends An{constructor(e=new vt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){lc.set(0,0,0);for(let a=0,u=r.length;a<u;a++){let h=l[a],p=r[a];h!==0&&(hf.fromBufferAttribute(p,e),o?lc.addScaledVector(hf,h):lc.addScaledVector(hf.sub(t),h))}t.add(lc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(r),Tr.copy(e.ray).recast(e.near),!(sc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(sc,Gd)===null||Tr.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Wd.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(Wd),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,m=r.groups,x=r.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,M=m.length;y<M;y++){let c=m[y],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(l.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=l.getX(v),w=l.getX(v+1),_=l.getX(v+2);s=uc(this,f,e,n,u,h,p,T,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),M=Math.min(l.count,x.start+x.count);for(let c=y,f=M;c<f;c+=3){let d=l.getX(c),g=l.getX(c+1),v=l.getX(c+2);s=uc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let y=0,M=m.length;y<M;y++){let c=m[y],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(a.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=v,w=v+1,_=v+2;s=uc(this,f,e,n,u,h,p,T,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let c=y,f=M;c<f;c+=3){let d=c,g=c+1,v=c+2;s=uc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}}};function Av(i,e,t,n,s,r,o,l){let a;if(e.side===Hn?a=n.intersectTriangle(o,r,s,!0,l):a=n.intersectTriangle(s,r,o,e.side===xs,l),a===null)return null;cc.copy(l),cc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(cc);return u<t.near||u>t.far?null:{distance:u,point:cc.clone(),object:i}}function uc(i,e,t,n,s,r,o,l,a,u){i.getVertexPosition(l,rc),i.getVertexPosition(a,oc),i.getVertexPosition(u,ac);let h=Av(i,e,t,n,rc,oc,ac,Xd);if(h){let p=new z;Qs.getBarycoord(Xd,rc,oc,ac,p),s&&(h.uv=Qs.getInterpolatedAttribute(s,l,a,u,p,new Ie)),r&&(h.uv1=Qs.getInterpolatedAttribute(r,l,a,u,p,new Ie)),o&&(h.normal=Qs.getInterpolatedAttribute(o,l,a,u,p,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a:l,b:a,c:u,normal:new z,materialIndex:0};Qs.getNormal(rc,oc,ac,m.normal),h.face=m,h.barycoord=p}return h}var ss=class extends Kn{constructor(e=null,t=1,n=1,s,r,o,l,a,u=En,h=En,p,m){super(null,o,l,a,u,h,s,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},co=new Je,qd=new Je,hc=[],Yd=new vi,Rv=new Je,ba=new ht,Ma=new xi,rs=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,co),Yd.copy(e.boundingBox).applyMatrix4(co),this.boundingBox.union(Yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,co),Ma.copy(e.boundingSphere).applyMatrix4(co),this.boundingSphere.union(Ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),e.ray.intersectsSphere(Ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,co),qd.multiplyMatrices(n,co),ba.matrixWorld=qd,ba.raycast(e,hc);for(let o=0,l=hc.length;o<l;o++){let a=hc[o];a.instanceId=r,a.object=this,t.push(a)}hc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ss(new Float32Array(s*this.count),s,this.count,lr,Oi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let l=this.geometry.morphTargetsRelative?1:1-o,a=s*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Er=new xi,Cv=new Ie(.5,.5),fc=new z,wo=class{constructor(e=new ns,t=new ns,n=new ns,s=new ns,r=new ns,o=new ns){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=is,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],u=r[3],h=r[4],p=r[5],m=r[6],x=r[7],y=r[8],M=r[9],c=r[10],f=r[11],d=r[12],g=r[13],v=r[14],b=r[15];if(s[0].setComponents(u-o,x-h,f-y,b-d).normalize(),s[1].setComponents(u+o,x+h,f+y,b+d).normalize(),s[2].setComponents(u+l,x+p,f+M,b+g).normalize(),s[3].setComponents(u-l,x-p,f-M,b-g).normalize(),n)s[4].setComponents(a,m,c,v).normalize(),s[5].setComponents(u-a,x-m,f-c,b-v).normalize();else if(s[4].setComponents(u-a,x-m,f-c,b-v).normalize(),t===is)s[5].setComponents(u+a,x+m,f+c,b+v).normalize();else if(t===xo)s[5].setComponents(a,m,c,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);let t=Cv.distanceTo(e.center);return Er.radius=.7071067811865476+t,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fc.x=s.normal.x>0?e.max.x:e.min.x,fc.y=s.normal.y>0?e.max.y:e.min.y,fc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Uc=class extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bc=new z,Oc=new z,Zd=new Je,Sa=new So,dc=new xi,ff=new z,Kd=new z,Ua=class extends An{constructor(e=new vt,t=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bc.fromBufferAttribute(t,s-1),Oc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bc.distanceTo(Oc);e.setAttribute("lineDistance",new Ke(n,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(s),dc.radius+=r,e.ray.intersectsSphere(dc)===!1)return;Zd.copy(s).invert(),Sa.copy(e.ray).applyMatrix4(Zd);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let x=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let M=x,c=y-1;M<c;M+=u){let f=h.getX(M),d=h.getX(M+1),g=pc(this,e,Sa,a,f,d,M);g&&t.push(g)}if(this.isLineLoop){let M=h.getX(y-1),c=h.getX(x),f=pc(this,e,Sa,a,M,c,y-1);f&&t.push(f)}}else{let x=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let M=x,c=y-1;M<c;M+=u){let f=pc(this,e,Sa,a,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=pc(this,e,Sa,a,y-1,x,y-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function pc(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(Bc.fromBufferAttribute(l,s),Oc.fromBufferAttribute(l,r),t.distanceSqToSegment(Bc,Oc,ff,Kd)>n)return;ff.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(ff);if(!(u<e.near||u>e.far))return{distance:u,point:Kd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var To=class extends gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new Je,Mf=new So,mc=new xi,gc=new z,Ba=class extends An{constructor(e=new vt,t=new To){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),mc.radius+=r,e.ray.intersectsSphere(mc)===!1)return;$d.copy(s).invert(),Mf.copy(e.ray).applyMatrix4($d);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=n.index,p=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let y=m,M=x;y<M;y++){let c=u.getX(y);gc.fromBufferAttribute(p,c),Jd(gc,c,a,s,e,t,this)}}else{let m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let y=m,M=x;y<M;y++)gc.fromBufferAttribute(p,y),Jd(gc,y,a,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Jd(i,e,t,n,s,r,o){let l=Mf.distanceSqToPoint(i);if(l<t){let a=new z;Mf.closestPointToPoint(i,a),a.applyMatrix4(n);let u=s.ray.origin.distanceTo(a);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Oa=class extends Kn{constructor(e=[],t=or,n,s,r,o,l,a,u,h){super(e,t,n,s,r,o,l,a,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ri=class extends Kn{constructor(e,t,n,s,r,o,l,a,u){super(e,t,n,s,r,o,l,a,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var er=class extends Kn{constructor(e,t,n=ls,s,r,o,l=En,a=En,u,h=ps,p=1){if(h!==ps&&h!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:p};super(m,s,r,o,l,a,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},kc=class extends er{constructor(e,t=ls,n=or,s,r,o=En,l=En,a,u=ps){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,a,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ka=class extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],u=[],h=[],p=[],m=0,x=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(a),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(p,2));function y(M,c,f,d,g,v,b,T,w,_,S){let E=v/w,A=b/_,C=v/2,I=b/2,R=T/2,L=w+1,D=_+1,O=0,H=0,B=new z;for(let V=0;V<D;V++){let k=V*A-I;for(let q=0;q<L;q++){let ee=q*E-C;B[M]=ee*d,B[c]=k*g,B[f]=R,u.push(B.x,B.y,B.z),B[M]=0,B[c]=0,B[f]=T>0?1:-1,h.push(B.x,B.y,B.z),p.push(q/w),p.push(1-V/_),O+=1}}for(let V=0;V<_;V++)for(let k=0;k<w;k++){let q=m+k+L*V,ee=m+k+L*(V+1),we=m+(k+1)+L*(V+1),Ae=m+(k+1)+L*V;a.push(q,ee,Ae),a.push(ee,we,Ae),H+=6}l.addGroup(x,H,S),x+=H,m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Cr=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],a=[],u=new z,h=new Ie;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){let x=n+p/t*s;u.x=e*Math.cos(x),u.y=e*Math.sin(x),o.push(u.x,u.y,u.z),l.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,a.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bi=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],m=[],x=[],y=0,M=[],c=n/2,f=0;d(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(m,3)),this.setAttribute("uv",new Ke(x,2));function d(){let v=new z,b=new z,T=0,w=(t-e)/n;for(let _=0;_<=r;_++){let S=[],E=_/r,A=E*(t-e)+e;for(let C=0;C<=s;C++){let I=C/s,R=I*a+l,L=Math.sin(R),D=Math.cos(R);b.x=A*L,b.y=-E*n+c,b.z=A*D,p.push(b.x,b.y,b.z),v.set(L,w,D).normalize(),m.push(v.x,v.y,v.z),x.push(I,1-E),S.push(y++)}M.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let E=M[S][_],A=M[S+1][_],C=M[S+1][_+1],I=M[S][_+1];(e>0||S!==0)&&(h.push(E,A,I),T+=3),(t>0||S!==r-1)&&(h.push(A,C,I),T+=3)}u.addGroup(f,T,0),f+=T}function g(v){let b=y,T=new Ie,w=new z,_=0,S=v===!0?e:t,E=v===!0?1:-1;for(let C=1;C<=s;C++)p.push(0,c*E,0),m.push(0,E,0),x.push(.5,.5),y++;let A=y;for(let C=0;C<=s;C++){let R=C/s*a+l,L=Math.cos(R),D=Math.sin(R);w.x=S*D,w.y=c*E,w.z=S*L,p.push(w.x,w.y,w.z),m.push(0,E,0),T.x=L*.5+.5,T.y=D*.5*E+.5,x.push(T.x,T.y),y++}for(let C=0;C<s;C++){let I=b+C,R=A+C;v===!0?h.push(R,R+1,I):h.push(R+1,R,I),_+=3}u.addGroup(f,_,v===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var zc=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),u(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(d){let g=new z,v=new z,b=new z;for(let T=0;T<t.length;T+=3)x(t[T+0],g),x(t[T+1],v),x(t[T+2],b),a(g,v,b,d)}function a(d,g,v,b){let T=b+1,w=[];for(let _=0;_<=T;_++){w[_]=[];let S=d.clone().lerp(v,_/T),E=g.clone().lerp(v,_/T),A=T-_;for(let C=0;C<=A;C++)C===0&&_===T?w[_][C]=S:w[_][C]=S.clone().lerp(E,C/A)}for(let _=0;_<T;_++)for(let S=0;S<2*(T-_)-1;S++){let E=Math.floor(S/2);S%2===0?(m(w[_][E+1]),m(w[_+1][E]),m(w[_][E])):(m(w[_][E+1]),m(w[_+1][E+1]),m(w[_+1][E]))}}function u(d){let g=new z;for(let v=0;v<r.length;v+=3)g.x=r[v+0],g.y=r[v+1],g.z=r[v+2],g.normalize().multiplyScalar(d),r[v+0]=g.x,r[v+1]=g.y,r[v+2]=g.z}function h(){let d=new z;for(let g=0;g<r.length;g+=3){d.x=r[g+0],d.y=r[g+1],d.z=r[g+2];let v=c(d)/2/Math.PI+.5,b=f(d)/Math.PI+.5;o.push(v,1-b)}y(),p()}function p(){for(let d=0;d<o.length;d+=6){let g=o[d+0],v=o[d+2],b=o[d+4],T=Math.max(g,v,b),w=Math.min(g,v,b);T>.9&&w<.1&&(g<.2&&(o[d+0]+=1),v<.2&&(o[d+2]+=1),b<.2&&(o[d+4]+=1))}}function m(d){r.push(d.x,d.y,d.z)}function x(d,g){let v=d*3;g.x=e[v+0],g.y=e[v+1],g.z=e[v+2]}function y(){let d=new z,g=new z,v=new z,b=new z,T=new Ie,w=new Ie,_=new Ie;for(let S=0,E=0;S<r.length;S+=9,E+=6){d.set(r[S+0],r[S+1],r[S+2]),g.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),_.set(o[E+4],o[E+5]),b.copy(d).add(g).add(v).divideScalar(3);let A=c(b);M(T,E+0,d,A),M(w,E+2,g,A),M(_,E+4,v,A)}}function M(d,g,v,b){b<0&&d.x===1&&(o[g]=d.x-1),v.x===0&&v.z===0&&(o[g]=b/2/Math.PI+.5)}function c(d){return Math.atan2(d.z,-d.x)}function f(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,a=r-1,u;for(;l<=a;)if(s=Math.floor(l+(a-l)/2),u=n[s]-o,u<0)l=s+1;else if(u>0)a=s-1;else{a=s;break}if(s=a,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,x=(o-h)/m;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),a=t||(o.isVector2?new Ie:new z);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],o=[],l=new z,a=new Je;for(let x=0;x<=e;x++){let y=x/e;s[x]=this.getTangentAt(y,new z)}r[0]=new z,o[0]=new z;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),m<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();let y=Math.acos(Rt(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(a.makeRotationAxis(l,y))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(Rt(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(x=-x);for(let y=1;y<=e;y++)r[y].applyMatrix4(a.makeRotationAxis(s[y],x*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Eo=class extends Ai{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=a-this.aX,x=u-this.aY;a=m*h-x*p+this.aX,u=m*p+x*h+this.aY}return n.set(a,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hc=class extends Eo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jf(){let i=0,e=0,t=0,n=0;function s(r,o,l,a){i=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,u){s(o,l,u*(l-r),u*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,u,h,p){let m=(o-r)/u-(l-r)/(u+h)+(l-o)/h,x=(l-o)/h-(a-o)/(h+p)+(a-l)/p;m*=h,x*=h,s(o,l,m,x)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var jd=new z,Qd=new z,df=new Jf,pf=new Jf,mf=new Jf,Vc=class extends Ai{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let u,h;this.closed||l>0?u=s[(l-1)%r]:(Qd.subVectors(s[0],s[1]).add(s[0]),u=Qd);let p=s[l%r],m=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(jd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jd),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,y=Math.pow(u.distanceToSquared(p),x),M=Math.pow(p.distanceToSquared(m),x),c=Math.pow(m.distanceToSquared(h),x);M<1e-4&&(M=1),y<1e-4&&(y=M),c<1e-4&&(c=M),df.initNonuniformCatmullRom(u.x,p.x,m.x,h.x,y,M,c),pf.initNonuniformCatmullRom(u.y,p.y,m.y,h.y,y,M,c),mf.initNonuniformCatmullRom(u.z,p.z,m.z,h.z,y,M,c)}else this.curveType==="catmullrom"&&(df.initCatmullRom(u.x,p.x,m.x,h.x,this.tension),pf.initCatmullRom(u.y,p.y,m.y,h.y,this.tension),mf.initCatmullRom(u.z,p.z,m.z,h.z,this.tension));return n.set(df.calc(a),pf.calc(a),mf.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ep(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,a=i*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*i+t}function Pv(i,e){let t=1-i;return t*t*e}function Iv(i,e){return 2*(1-i)*i*e}function Lv(i,e){return i*i*e}function Ta(i,e,t,n){return Pv(i,e)+Iv(i,t)+Lv(i,n)}function Dv(i,e){let t=1-i;return t*t*t*e}function Nv(i,e){let t=1-i;return 3*t*t*i*e}function Fv(i,e){return 3*(1-i)*i*i*e}function Uv(i,e){return i*i*i*e}function Ea(i,e,t,n,s){return Dv(i,e)+Nv(i,t)+Fv(i,n)+Uv(i,s)}var za=class extends Ai{constructor(e=new Ie,t=new Ie,n=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ea(e,s.x,r.x,o.x,l.x),Ea(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wc=class extends Ai{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ea(e,s.x,r.x,o.x,l.x),Ea(e,s.y,r.y,o.y,l.y),Ea(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends Ai{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends Ai{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends Ai{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ta(e,s.x,r.x,o.x),Ta(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xc=class extends Ai{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ta(e,s.x,r.x,o.x),Ta(e,s.y,r.y,o.y),Ta(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,a=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(ep(l,a.x,u.x,h.x,p.x),ep(l,a.y,u.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}},tp=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:Vc,CubicBezierCurve:za,CubicBezierCurve3:Wc,EllipseCurve:Eo,LineCurve:Ha,LineCurve3:Gc,QuadraticBezierCurve:Va,QuadraticBezierCurve3:Xc,SplineCurve:Wa}),qc=class extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],a=l.getLength(),u=a===0?0:1-o/a;return l.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let u=0;u<a.length;u++){let h=a[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new tp[s.type]().fromJSON(s))}return this}},Ga=class extends qc{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ha(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Va(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new za(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s),new Ie(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,a){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,l,a),this}absellipse(e,t,n,s,r,o,l,a){let u=new Eo(e,t,n,s,r,o,l,a);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ao=class extends Ga{constructor(e){super(e),this.uuid=Uo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ga().fromJSON(s))}return this}};function Bv(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Jp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,a,u;if(n&&(r=Vv(i,e,r,t)),i.length>80*t){l=i[0],a=i[1];let h=l,p=a;for(let m=t;m<s;m+=t){let x=i[m],y=i[m+1];x<l&&(l=x),y<a&&(a=y),x>h&&(h=x),y>p&&(p=y)}u=Math.max(h-l,p-a),u=u!==0?32767/u:0}return Xa(r,o,t,l,a,u,0),o}function Jp(i,e,t,n,s){let r;if(s===Qv(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=np(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=np(o/n|0,i[o],i[o+1],r);return r&&Ro(r,r.next)&&(Ya(r),r=r.next),r}function Pr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ro(t,t.next)||gn(t.prev,t,t.next)===0)){if(Ya(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Yv(i,n,s,r);let l=i;for(;i.prev!==i.next;){let a=i.prev,u=i.next;if(r?kv(i,n,s,r):Ov(i)){e.push(a.i,i.i,u.i),Ya(i),i=u.next,l=u.next;continue}if(i=u,i===l){o?o===1?(i=zv(Pr(i),e),Xa(i,e,t,n,s,r,2)):o===2&&Hv(i,e,t,n,s,r):Xa(Pr(i),e,t,n,s,r,1);break}}}function Ov(i){let e=i.prev,t=i,n=i.next;if(gn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,a=t.y,u=n.y,h=Math.min(s,r,o),p=Math.min(l,a,u),m=Math.max(s,r,o),x=Math.max(l,a,u),y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=m&&y.y>=p&&y.y<=x&&wa(s,l,r,a,o,u,y.x,y.y)&&gn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function kv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(gn(s,r,o)>=0)return!1;let l=s.x,a=r.x,u=o.x,h=s.y,p=r.y,m=o.y,x=Math.min(l,a,u),y=Math.min(h,p,m),M=Math.max(l,a,u),c=Math.max(h,p,m),f=Sf(x,y,e,t,n),d=Sf(M,c,e,t,n),g=i.prevZ,v=i.nextZ;for(;g&&g.z>=f&&v&&v.z<=d;){if(g.x>=x&&g.x<=M&&g.y>=y&&g.y<=c&&g!==s&&g!==o&&wa(l,h,a,p,u,m,g.x,g.y)&&gn(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=x&&v.x<=M&&v.y>=y&&v.y<=c&&v!==s&&v!==o&&wa(l,h,a,p,u,m,v.x,v.y)&&gn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=f;){if(g.x>=x&&g.x<=M&&g.y>=y&&g.y<=c&&g!==s&&g!==o&&wa(l,h,a,p,u,m,g.x,g.y)&&gn(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=d;){if(v.x>=x&&v.x<=M&&v.y>=y&&v.y<=c&&v!==s&&v!==o&&wa(l,h,a,p,u,m,v.x,v.y)&&gn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function zv(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ro(n,s)&&Qp(n,t,t.next,s)&&qa(n,s)&&qa(s,n)&&(e.push(n.i,t.i,s.i),Ya(t),Ya(t.next),t=i=s),t=t.next}while(t!==i);return Pr(t)}function Hv(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&$v(o,l)){let a=em(o,l);o=Pr(o,o.next),a=Pr(a,a.next),Xa(o,e,t,n,s,r,0),Xa(a,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function Vv(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,a=r<o-1?e[r+1]*n:i.length,u=Jp(i,l,a,n,!1);u===u.next&&(u.steiner=!0),s.push(Kv(u))}s.sort(Wv);for(let r=0;r<s.length;r++)t=Gv(s[r],t);return t}function Wv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Gv(i,e){let t=Xv(i,e);if(!t)return e;let n=em(t,i);return Pr(n,n.next),Pr(t,t.next)}function Xv(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ro(i,t))return t;do{if(Ro(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,a=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&jp(s<u?n:r,s,a,u,s<u?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);qa(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&qv(o,t)))&&(o=t,h=p)}t=t.next}while(t!==l);return o}function qv(i,e){return gn(i.prev,i,e.prev)<0&&gn(e.next,i,i.next)<0}function Yv(i,e,t,n){let s=i;do s.z===0&&(s.z=Sf(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zv(s)}function Zv(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let u=0;u<t&&(l++,o=o.nextZ,!!o);u++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,a--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Sf(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Kv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function jp(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function wa(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&jp(i,e,t,n,s,r,o,l)}function $v(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Jv(i,e)&&(qa(i,e)&&qa(e,i)&&jv(i,e)&&(gn(i.prev,i,e.prev)||gn(i,e.prev,e))||Ro(i,e)&&gn(i.prev,i,i.next)>0&&gn(e.prev,e,e.next)>0)}function gn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ro(i,e){return i.x===e.x&&i.y===e.y}function Qp(i,e,t,n){let s=xc(gn(i,e,t)),r=xc(gn(i,e,n)),o=xc(gn(t,n,i)),l=xc(gn(t,n,e));return!!(s!==r&&o!==l||s===0&&vc(i,t,e)||r===0&&vc(i,n,e)||o===0&&vc(t,i,n)||l===0&&vc(t,e,n))}function vc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xc(i){return i>0?1:i<0?-1:0}function Jv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function qa(i,e){return gn(i.prev,i,i.next)<0?gn(i,e,i.next)>=0&&gn(i,i.prev,e)>=0:gn(i,e,i.prev)<0||gn(i,i.next,e)<0}function jv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function em(i,e){let t=wf(i.i,i.x,i.y),n=wf(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function np(i,e,t,n){let s=wf(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wf(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Tf=class{static triangulate(e,t,n=2){return Bv(e,t,n)}},go=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ip(e),sp(n,e);let o=e.length;t.forEach(ip);for(let a=0;a<t.length;a++)s.push(o),o+=t[a].length,sp(n,t[a]);let l=Tf.triangulate(n,s);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}};function ip(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function sp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Za=class i extends zc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var rn=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(s),u=l+1,h=a+1,p=e/l,m=t/a,x=[],y=[],M=[],c=[];for(let f=0;f<h;f++){let d=f*m-o;for(let g=0;g<u;g++){let v=g*p-r;y.push(v,-d,0),M.push(0,0,1),c.push(g/l),c.push(1-f/a)}}for(let f=0;f<a;f++)for(let d=0;d<l;d++){let g=d+u*f,v=d+u*(f+1),b=d+1+u*(f+1),T=d+1+u*f;x.push(g,v,T),x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new Ke(y,3)),this.setAttribute("normal",new Ke(M,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ka=class i extends vt{constructor(e=new Ao([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],l=0,a=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(o,2));function u(h){let p=s.length/3,m=h.extractPoints(t),x=m.shape,y=m.holes;go.isClockWise(x)===!1&&(x=x.reverse());for(let c=0,f=y.length;c<f;c++){let d=y[c];go.isClockWise(d)===!0&&(y[c]=d.reverse())}let M=go.triangulateShape(x,y);for(let c=0,f=y.length;c<f;c++){let d=y[c];x=x.concat(d)}for(let c=0,f=x.length;c<f;c++){let d=x[c];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let c=0,f=M.length;c<f;c++){let d=M[c],g=d[0]+p,v=d[1]+p,b=d[2]+p;n.push(g,v,b),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ex(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function ex(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var $a=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let a=Math.min(o+l,Math.PI),u=0,h=[],p=new z,m=new z,x=[],y=[],M=[],c=[];for(let f=0;f<=n;f++){let d=[],g=f/n,v=o+g*l,b=e*Math.cos(v),T=Math.sqrt(e*e-b*b),w=0;f===0&&o===0?w=.5/t:f===n&&a===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){let S=_/t,E=s+S*r;p.x=-T*Math.cos(E),p.y=b,p.z=T*Math.sin(E),y.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),c.push(S+w,1-g),d.push(u++)}h.push(d)}for(let f=0;f<n;f++)for(let d=0;d<t;d++){let g=h[f][d+1],v=h[f][d],b=h[f+1][d],T=h[f+1][d+1];(f!==0||o>0)&&x.push(g,v,T),(f!==n-1||a<Math.PI)&&x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new Ke(y,3)),this.setAttribute("normal",new Ke(M,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ja=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let a=[],u=[],h=[],p=[],m=new z,x=new z,y=new z;for(let M=0;M<=n;M++){let c=o+M/n*l;for(let f=0;f<=s;f++){let d=f/s*r;x.x=(e+t*Math.cos(c))*Math.cos(d),x.y=(e+t*Math.cos(c))*Math.sin(d),x.z=t*Math.sin(c),u.push(x.x,x.y,x.z),m.x=e*Math.cos(d),m.y=e*Math.sin(d),y.subVectors(x,m).normalize(),h.push(y.x,y.y,y.z),p.push(f/s),p.push(M/n)}}for(let M=1;M<=n;M++)for(let c=1;c<=s;c++){let f=(s+1)*M+c-1,d=(s+1)*(M-1)+c-1,g=(s+1)*(M-1)+c,v=(s+1)*M+c;a.push(f,d,v),a.push(d,g,v)}this.setIndex(a),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(rp(s))s.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(rp(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Qn(i){let e={};for(let t=0;t<i.length;t++){let n=Nr(i[t]);for(let s in n)e[s]=n[s]}return e}function rp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}var Fr={clone:Nr,merge:Qn},nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yc=class extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var dn=class extends gs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yu,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tr=class extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zc=class extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function uo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gf(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var nr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kc=class extends nr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yf,endingEnd:yf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],a=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case _f:r=e,l=2*t-n;break;case bf:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case _f:o=e,a=2*n-t;break;case bf:o=1,a=n+s[1]-s[0];break;default:o=e-1,a=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,x=this._weightNext,y=(n-t)/(s-t),M=y*y,c=M*y,f=-m*c+2*m*M-m*y,d=(1+m)*c+(-1.5-2*m)*M+(-.5+m)*y+1,g=(-1-x)*c+(1.5+x)*M+.5*y,v=x*c-x*M;for(let b=0;b!==l;++b)r[b]=f*o[h+b]+d*o[u+b]+g*o[a+b]+v*o[p+b];return r}},$c=class extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=(n-t)/(s-t),p=1-h;for(let m=0;m!==l;++m)r[m]=o[u+m]*p+o[a+m]*h;return r}},Jc=class extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jc=class extends nr{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let y=(n-t)/(s-t),M=1-y;for(let c=0;c!==l;++c)r[c]=o[u+c]*M+o[a+c]*y;return r}let m=l*2,x=e-1;for(let y=0;y!==l;++y){let M=o[u+y],c=o[a+y],f=x*m+y*2,d=p[f],g=p[f+1],v=e*m+y*2,b=h[v],T=h[v+1],w=rx(n,t,d,b,s);r[y]=tm(w,M,g,T,c)}return r}};function tm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function sx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function rx(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=tm(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let a=sx(r,e,t,n,s);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}var Ri=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),gf(e.settings)&&(n.settings={inTangents:uo(e.settings.inTangents,Array),outTangents:uo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case Lc:t=this.InterpolantFactoryMethodLinear;break;case bc:t=this.InterpolantFactoryMethodSmooth;break;case xf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ut("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Lc;case this.InterpolantFactoryMethodSmooth:return bc;case this.InterpolantFactoryMethodBezier:return xf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;gf(this.settings)&&(op(this.settings.inTangents,e),op(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let a=n[l];if(typeof a=="number"&&isNaN(a)){pt("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){pt("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(s!==void 0&&cv(s))for(let l=0,a=s.length;l!==a;++l){let u=s[l];if(isNaN(u)){pt("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bc,r=e.length-1,o=1;for(let l=1;l<r;++l){let a=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(s)a=!0;else{let p=l*n,m=p-n,x=p+n;for(let y=0;y!==n;++y){let M=t[p+y];if(M!==t[m+y]||M!==t[x+y]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];let p=l*n,m=o*n;for(let x=0;x!==n;++x)t[m+x]=t[p+x]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,u=0;u!==n;++u)t[a+u]=t[l+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,gf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function op(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Lc;var ir=class extends Ri{constructor(e,t,n){super(e,t,n)}};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Aa;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}};Qc.prototype.ValueTypeName="color";var eu=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}};eu.prototype.ValueTypeName="number";var tu=class extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(s-t),u=e*l;for(let h=u+l;u!==h;u+=4)vn.slerpFlat(r,0,o,u-l,o,u,a);return r}},ja=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}};ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends Ri{constructor(e,t,n){super(e,t,n)}};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Aa;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var nu=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}};nu.prototype.ValueTypeName="vector";var Sc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ap(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ap(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ap(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var iu=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,a,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=u.length;p<m;p+=2){let x=u[p],y=u[p+1];if(x.global&&(x.lastIndex=0),x.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nm=new iu,Co=class{constructor(e){this.manager=e!==void 0?e:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";var ho=new WeakMap,su=class extends Co{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Sc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=ho.get(o);p===void 0&&(p=[],ho.set(o,p)),p.push({onLoad:t,onError:s})}return o}let l=yo("img");function a(){h(),t&&t(this);let p=ho.get(this)||[];for(let m=0;m<p.length;m++){let x=p[m];x.onLoad&&x.onLoad(this)}ho.delete(this),r.manager.itemEnd(e)}function u(p){h(),s&&s(p),Sc.remove(`image:${e}`);let m=ho.get(this)||[];for(let x=0;x<m.length;x++){let y=m[x];y.onError&&y.onError(p)}ho.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Sc.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var Qa=class extends Co{constructor(e){super(e)}load(e,t,n,s){let r=new Kn,o=new su(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Po=class extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},el=class extends Po{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vf=new Je,lp=new z,cp=new z,tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lp.setFromMatrixPosition(e.matrixWorld),t.position.copy(lp),cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){vf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,a=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===xo||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(vf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yc=new z,_c=new vn,fs=new z,Fs=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=is,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yc,_c,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,_c,fs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yc,_c,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,_c,fs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},js=new z,up=new Ie,hp=new Ie,zn=class extends Fs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,up,hp),t.subVectors(hp,up)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/a,t-=o.offsetY*n/u,s*=o.width/a,n*=o.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ef=class extends tl{constructor(){super(new zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Pa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},nl=class extends Po{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ef}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var rr=class extends Fs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,a=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Af=class extends tl{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Io=class extends Po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Af}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vs=class extends vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var fo=-90,po=1,ru=class extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zn(fo,po,e,t);s.layers=this.layers,this.add(s);let r=new zn(fo,po,e,t);r.layers=this.layers,this.add(r);let o=new zn(fo,po,e,t);o.layers=this.layers,this.add(o);let l=new zn(fo,po,e,t);l.layers=this.layers,this.add(l);let a=new zn(fo,po,e,t);a.layers=this.layers,this.add(a);let u=new zn(fo,po,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,a]=t;for(let u of t)this.remove(u);if(e===is)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,a,u,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,m,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},ou=class extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},il=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ox.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ox(){this._document.hidden===!1&&this.reset()}var Qf="\\[\\]\\.:\\/",ax=new RegExp("["+Qf+"]","g"),e0="[^"+Qf+"]",lx="[^"+Qf.replace("\\.","")+"]",cx=/((?:WC+[\/:])*)/.source.replace("WC",e0),ux=/(WCOD+)?/.source.replace("WCOD",lx),hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",e0),fx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",e0),dx=new RegExp("^"+cx+ux+hx+fx+"$"),px=["material","materials","bones","map"],Rf=class{constructor(e,t,n){let s=n||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},sn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ax,"")}static parseTrackName(e){let t=dx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let a=n(l.children);if(a)return a}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;pt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=Rf;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var h3=new Float32Array(1);var o0=class o0{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};o0.prototype.isMatrix2=!0;var Cf=o0;function t0(i,e,t,n){let s=mx(n);switch(t){case Yf:return i*e;case lr:return i*e/s.components*s.byteLength;case pu:return i*e/s.components*s.byteLength;case cr:return i*e*2/s.components*s.byteLength;case mu:return i*e*2/s.components*s.byteLength;case Zf:return i*e*3/s.components*s.byteLength;case jn:return i*e*4/s.components*s.byteLength;case gu:return i*e*4/s.components*s.byteLength;case al:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xu:case _u:return Math.max(i,16)*Math.max(e,8)/4;case vu:case yu:return Math.max(i,8)*Math.max(e,8)/2;case bu:case Mu:case wu:case Tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Su:case hl:case Eu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ku:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hu:case Vu:case Wu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gu:case Xu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fl:case qu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mx(i){switch(i){case Jn:case Wf:return{byteLength:1,components:1};case No:case Gf:case Rn:return{byteLength:2,components:1};case fu:case du:return{byteLength:2,components:4};case ls:case hu:case Oi:return{byteLength:4,components:1};case Xf:case qf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function wm(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mx(i){let e=new WeakMap;function t(l,a){let u=l.array,h=l.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(a,m),i.bufferData(a,u,h),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,a,u){let h=a.array,p=a.updateRanges;if(i.bindBuffer(u,l),p.length===0)i.bufferSubData(u,0,h);else{p.sort((x,y)=>x.start-y.start);let m=0;for(let x=1;x<p.length;x++){let y=p[m],M=p[x];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++m,p[m]=M)}p.length=m+1;for(let x=0,y=p.length;x<y;x++){let M=p[x];i.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let a=e.get(l);a&&(i.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,a));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,a),u.version=l.version}}return{get:s,remove:r,update:o}}var Sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
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
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
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
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ix=`#ifdef USE_BATCHING
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
#endif`,Lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ux=`#ifdef USE_IRIDESCENCE
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
#endif`,Bx=`#ifdef USE_BUMPMAP
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
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qx=`#define PI 3.141592653589793
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
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",e2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t2=`#ifdef USE_ENVMAP
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
#endif`,n2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,i2=`#ifdef USE_ENVMAP
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
#endif`,s2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r2=`#ifdef USE_ENVMAP
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
#endif`,o2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u2=`#ifdef USE_GRADIENTMAP
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
}`,h2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,m2=`#ifdef USE_ENVMAP
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
#endif`,g2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_2=`PhysicalMaterial material;
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
#endif`,b2=`uniform sampler2D dfgLUT;
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
}`,M2=`
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
#endif`,S2=`#if defined( RE_IndirectDiffuse )
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
#endif`,w2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,E2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D2=`#if defined( USE_POINTS_UV )
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
#endif`,N2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k2=`#ifdef USE_MORPHTARGETS
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
#endif`,z2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q2=`#ifdef USE_NORMALMAP
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
#endif`,Y2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ly=`float getShadowMask() {
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
}`,cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,my=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vy=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#ifdef USE_TRANSMISSION
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wy=`uniform sampler2D t2D;
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
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
}`,Py=`#if DEPTH_PACKING == 3200
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
}`,Iy=`#define DISTANCE
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
}`,Ly=`#define DISTANCE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,ky=`#define LAMBERT
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
}`,zy=`#define LAMBERT
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
}`,Hy=`#define MATCAP
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
}`,Vy=`#define MATCAP
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
}`,Wy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Xy=`#define PHONG
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
}`,qy=`#define PHONG
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
}`,Yy=`#define STANDARD
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
}`,Zy=`#define STANDARD
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
}`,Ky=`#define TOON
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
}`,$y=`#define TOON
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
}`,Jy=`uniform float size;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,e_=`uniform vec3 color;
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
}`,t_=`uniform float rotation;
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
}`,n_=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Sx,alphahash_pars_fragment:wx,alphamap_fragment:Tx,alphamap_pars_fragment:Ex,alphatest_fragment:Ax,alphatest_pars_fragment:Rx,aomap_fragment:Cx,aomap_pars_fragment:Px,batching_pars_vertex:Ix,batching_vertex:Lx,begin_vertex:Dx,beginnormal_vertex:Nx,bsdfs:Fx,iridescence_fragment:Ux,bumpmap_pars_fragment:Bx,clipping_planes_fragment:Ox,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:zx,clipping_planes_vertex:Hx,color_fragment:Vx,color_pars_fragment:Wx,color_pars_vertex:Gx,color_vertex:Xx,common:qx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Kx,displacementmap_vertex:$x,emissivemap_fragment:Jx,emissivemap_pars_fragment:jx,colorspace_fragment:Qx,colorspace_pars_fragment:e2,envmap_fragment:t2,envmap_common_pars_fragment:n2,envmap_pars_fragment:i2,envmap_pars_vertex:s2,envmap_physical_pars_fragment:m2,envmap_vertex:r2,fog_vertex:o2,fog_pars_vertex:a2,fog_fragment:l2,fog_pars_fragment:c2,gradientmap_pars_fragment:u2,lightmap_pars_fragment:h2,lights_lambert_fragment:f2,lights_lambert_pars_fragment:d2,lights_pars_begin:p2,lights_toon_fragment:g2,lights_toon_pars_fragment:v2,lights_phong_fragment:x2,lights_phong_pars_fragment:y2,lights_physical_fragment:_2,lights_physical_pars_fragment:b2,lights_fragment_begin:M2,lights_fragment_maps:S2,lights_fragment_end:w2,lightprobes_pars_fragment:T2,logdepthbuf_fragment:E2,logdepthbuf_pars_fragment:A2,logdepthbuf_pars_vertex:R2,logdepthbuf_vertex:C2,map_fragment:P2,map_pars_fragment:I2,map_particle_fragment:L2,map_particle_pars_fragment:D2,metalnessmap_fragment:N2,metalnessmap_pars_fragment:F2,morphinstance_vertex:U2,morphcolor_vertex:B2,morphnormal_vertex:O2,morphtarget_pars_vertex:k2,morphtarget_vertex:z2,normal_fragment_begin:H2,normal_fragment_maps:V2,normal_pars_fragment:W2,normal_pars_vertex:G2,normal_vertex:X2,normalmap_pars_fragment:q2,clearcoat_normal_fragment_begin:Y2,clearcoat_normal_fragment_maps:Z2,clearcoat_pars_fragment:K2,iridescence_pars_fragment:$2,opaque_fragment:J2,packing:j2,premultiplied_alpha_fragment:Q2,project_vertex:ey,dithering_fragment:ty,dithering_pars_fragment:ny,roughnessmap_fragment:iy,roughnessmap_pars_fragment:sy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:oy,shadowmap_vertex:ay,shadowmask_pars_fragment:ly,skinbase_vertex:cy,skinning_pars_vertex:uy,skinning_vertex:hy,skinnormal_vertex:fy,specularmap_fragment:dy,specularmap_pars_fragment:py,tonemapping_fragment:my,tonemapping_pars_fragment:gy,transmission_fragment:vy,transmission_pars_fragment:xy,uv_pars_fragment:yy,uv_pars_vertex:_y,uv_vertex:by,worldpos_vertex:My,background_vert:Sy,background_frag:wy,backgroundCube_vert:Ty,backgroundCube_frag:Ey,cube_vert:Ay,cube_frag:Ry,depth_vert:Cy,depth_frag:Py,distance_vert:Iy,distance_frag:Ly,equirect_vert:Dy,equirect_frag:Ny,linedashed_vert:Fy,linedashed_frag:Uy,meshbasic_vert:By,meshbasic_frag:Oy,meshlambert_vert:ky,meshlambert_frag:zy,meshmatcap_vert:Hy,meshmatcap_frag:Vy,meshnormal_vert:Wy,meshnormal_frag:Gy,meshphong_vert:Xy,meshphong_frag:qy,meshphysical_vert:Yy,meshphysical_frag:Zy,meshtoon_vert:Ky,meshtoon_frag:$y,points_vert:Jy,points_frag:jy,shadow_vert:Qy,shadow_frag:e_,sprite_vert:t_,sprite_frag:n_},Xe={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},_s={basic:{uniforms:Qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Qn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Qn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new pe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Qn([Xe.points,Xe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Qn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Qn([Xe.common,Xe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Qn([Xe.sprite,Xe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Qn([Xe.common,Xe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Qn([Xe.lights,Xe.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};_s.physical={uniforms:Qn([_s.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var $u={r:0,b:0,g:0},i_=new Je,Tm=new gt;Tm.set(-1,0,0,0,1,0,0,0,1);function s_(i,e,t,n,s,r){let o=new pe(0),l=s===!0?0:1,a,u,h=null,p=0,m=null;function x(d){let g=d.isScene===!0?d.background:null;if(g&&g.isTexture){let v=d.backgroundBlurriness>0;g=e.get(g,v)}return g}function y(d){let g=!1,v=x(d);v===null?c(o,l):v&&v.isColor&&(c(v,1),g=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||g)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(d,g){let v=x(g);v&&(v.isCubeTexture||v.mapping===rl)?(u===void 0&&(u=new ht(new Qt(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Nr(_s.backgroundCube.uniforms),vertexShader:_s.backgroundCube.vertexShader,fragmentShader:_s.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(i_.makeRotationFromEuler(g.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Tm),u.material.toneMapped=It.getTransfer(v.colorSpace)!==Vt,(h!==v||p!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new ht(new rn(2,2),new ft({name:"BackgroundMaterial",uniforms:Nr(_s.background.uniforms),vertexShader:_s.background.vertexShader,fragmentShader:_s.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,a.material.toneMapped=It.getTransfer(v.colorSpace)!==Vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||m!==i.toneMapping)&&(a.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),a.layers.enableAll(),d.unshift(a,a.geometry,a.material,0,0,null))}function c(d,g){d.getRGB($u,jf(i)),t.buffers.color.setClear($u.r,$u.g,$u.b,g,r)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,g=1){o.set(d),l=g,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,c(o,l)},render:y,addToRenderList:M,dispose:f}}function r_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function l(A,C,I,R,L){let D=!1,O=p(A,R,I,C);r!==O&&(r=O,u(r.object)),D=x(A,R,I,L),D&&y(A,R,I,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(A,C,I,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function a(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function p(A,C,I,R){let L=R.wireframe===!0,D=n[C.id];D===void 0&&(D={},n[C.id]=D);let O=A.isInstancedMesh===!0?A.id:0,H=D[O];H===void 0&&(H={},D[O]=H);let B=H[I.id];B===void 0&&(B={},H[I.id]=B);let V=B[L];return V===void 0&&(V=m(a()),B[L]=V),V}function m(A){let C=[],I=[],R=[];for(let L=0;L<t;L++)C[L]=0,I[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:R,object:A,attributes:{},index:null}}function x(A,C,I,R){let L=r.attributes,D=C.attributes,O=0,H=I.getAttributes();for(let B in H)if(H[B].location>=0){let k=L[B],q=D[B];if(q===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(q=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(q=A.instanceColor)),k===void 0||k.attribute!==q||q&&k.data!==q.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function y(A,C,I,R){let L={},D=C.attributes,O=0,H=I.getAttributes();for(let B in H)if(H[B].location>=0){let k=D[B];k===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(k=A.instanceColor));let q={};q.attribute=k,k&&k.data&&(q.data=k.data),L[B]=q,O++}r.attributes=L,r.attributesNum=O,r.index=R}function M(){let A=r.newAttributes;for(let C=0,I=A.length;C<I;C++)A[C]=0}function c(A){f(A,0)}function f(A,C){let I=r.newAttributes,R=r.enabledAttributes,L=r.attributeDivisors;I[A]=1,R[A]===0&&(i.enableVertexAttribArray(A),R[A]=1),L[A]!==C&&(i.vertexAttribDivisor(A,C),L[A]=C)}function d(){let A=r.newAttributes,C=r.enabledAttributes;for(let I=0,R=C.length;I<R;I++)C[I]!==A[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function g(A,C,I,R,L,D,O){O===!0?i.vertexAttribIPointer(A,C,I,L,D):i.vertexAttribPointer(A,C,I,R,L,D)}function v(A,C,I,R){M();let L=R.attributes,D=I.getAttributes(),O=C.defaultAttributeValues;for(let H in D){let B=D[H];if(B.location>=0){let V=L[H];if(V===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(V=A.instanceColor)),V!==void 0){let k=V.normalized,q=V.itemSize,ee=e.get(V);if(ee===void 0)continue;let we=ee.buffer,Ae=ee.type,Me=ee.bytesPerElement,G=Ae===i.INT||Ae===i.UNSIGNED_INT||V.gpuType===hu;if(V.isInterleavedBufferAttribute){let J=V.data,xe=J.stride,Pe=V.offset;if(J.isInstancedInterleavedBuffer){for(let re=0;re<B.locationSize;re++)f(B.location+re,J.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let re=0;re<B.locationSize;re++)c(B.location+re);i.bindBuffer(i.ARRAY_BUFFER,we);for(let re=0;re<B.locationSize;re++)g(B.location+re,q/B.locationSize,Ae,k,xe*Me,(Pe+q/B.locationSize*re)*Me,G)}else{if(V.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)f(B.location+J,V.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let J=0;J<B.locationSize;J++)c(B.location+J);i.bindBuffer(i.ARRAY_BUFFER,we);for(let J=0;J<B.locationSize;J++)g(B.location+J,q/B.locationSize,Ae,k,q*Me,q/B.locationSize*J*Me,G)}}else if(O!==void 0){let k=O[H];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(B.location,k);break;case 3:i.vertexAttrib3fv(B.location,k);break;case 4:i.vertexAttrib4fv(B.location,k);break;default:i.vertexAttrib1fv(B.location,k)}}}}d()}function b(){S();for(let A in n){let C=n[A];for(let I in C){let R=C[I];for(let L in R){let D=R[L];for(let O in D)h(D[O].object),delete D[O];delete R[L]}}delete n[A]}}function T(A){if(n[A.id]===void 0)return;let C=n[A.id];for(let I in C){let R=C[I];for(let L in R){let D=R[L];for(let O in D)h(D[O].object),delete D[O];delete R[L]}}delete n[A.id]}function w(A){for(let C in n){let I=n[C];for(let R in I){let L=I[R];if(L[A.id]===void 0)continue;let D=L[A.id];for(let O in D)h(D[O].object),delete D[O];delete L[A.id]}}}function _(A){for(let C in n){let I=n[C],R=A.isInstancedMesh===!0?A.id:0,L=I[R];if(L!==void 0){for(let D in L){let O=L[D];for(let H in O)h(O[H].object),delete O[H];delete L[D]}delete I[R],Object.keys(I).length===0&&delete n[C]}}}function S(){E(),o=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:S,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:c,disableUnusedAttributes:d}}function o_(i,e,t){let n;function s(a){n=a}function r(a,u){i.drawArrays(n,a,u),t.update(u,n,1)}function o(a,u,h){h!==0&&(i.drawArraysInstanced(n,a,u,h),t.update(u,n,h))}function l(a,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,u,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function a_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==jn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){let _=w===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Jn&&w!==Oi&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function a(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=a(u);h!==u&&(ut("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:c,maxAttributes:f,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:v,maxSamples:b,samples:T}}function l_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ns,l=new gt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let x=p.length!==0||m||n!==0||s;return s=m,n=p.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,x){let y=p.clippingPlanes,M=p.clipIntersection,c=p.clipShadows,f=i.get(p);if(!s||y===null||y.length===0||r&&!c)r?h(null):u();else{let d=r?0:n,g=d*4,v=f.clippingState||null;a.value=v,v=h(y,m,g,x);for(let b=0;b!==g;++b)v[b]=t[b];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=d}};function u(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,x,y){let M=p!==null?p.length:0,c=null;if(M!==0){if(c=a.value,y!==!0||c===null){let f=x+M*4,d=m.matrixWorldInverse;l.getNormalMatrix(d),(c===null||c.length<f)&&(c=new Float32Array(f));for(let g=0,v=x;g!==M;++g,v+=4)o.copy(p[g]).applyMatrix4(d,l),o.normal.toArray(c,v),c[v+3]=o.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,c}}var Oo=4,c_=6,u_=20,h_=256,dl=new rr,im=new pe,a0=null,l0=0,c0=0,u0=!1,f_=new z,Ur=new z,ju=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=f_}=r;a0=this._renderer.getRenderTarget(),l0=this._renderer.getActiveCubeFace(),c0=this._renderer.getActiveMipmapLevel(),u0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a,l),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(a0,l0,c0),this._renderer.xr.enabled=u0,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),a0=this._renderer.getRenderTarget(),l0=this._renderer.getActiveCubeFace(),c0=this._renderer.getActiveMipmapLevel(),u0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Rn,format:jn,colorSpace:Ra,depthBuffer:!1},s=sm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=d_(r)),this._blurMaterial=m_(r,e,t),this._ggxMaterial=p_(r,e,t)}return s}_compileMaterial(e){let t=new ht(new vt,e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,s,r){let a=new zn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,x=p.toneMapping;p.getClearColor(im),p.toneMapping=as,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new Qt,new xn({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,c=M.material,f=!1,d=e.background;d?d.isColor&&(c.color.copy(d),e.background=null,f=!0):(c.color.copy(im),f=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+h[g],r.y,r.z)):v===1?(a.up.set(0,0,u[g]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+h[g],r.z)):(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+h[g]));let b=this._cubeSize;Bo(s,v*b,g>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(M,a),p.render(e,a)}p.toneMapping=x,p.autoClear=m,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===or||e.mapping===Dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let a=this._cubeSize;Bo(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,dl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let a=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),m=u*1.25,x=p*m,{_lodMax:y}=this,M=this._sizeLods[n],c=3*M*(n>y-Oo?n-y+Oo:0),f=4*(this._cubeSize-M);a.envMap.value=e.texture,a.roughness.value=x,a.mipInt.value=y-t,Bo(r,c,f,3*M,2*M),s.setRenderTarget(r),s.render(l,dl),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=y-n,Bo(e,c,f,3*M,2*M),s.setRenderTarget(e),s.render(l,dl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,a=this._lodMeshes[s];a.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Oo?s-this._lodMax+Oo:0),m=4*(this._cubeSize-h);Bo(t,p,m,3*h,2*h),o.setRenderTarget(t),o.render(a,dl)}};function d_(i){let e=[],t=[],n=i,s=i-Oo+1+c_;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),a=-l,u=1+l,h=[a,a,u,a,u,u,a,a,u,u,a,u],p=6,m=6,x=3,y=new Float32Array(x*m*p),M=new Float32Array(x*m*p);for(let f=0;f<p;f++){let d=f%3*2/3-1,g=f>2?0:-1,v=[d,g,0,d+2/3,g,0,d+2/3,g+1,0,d,g,0,d+2/3,g+1,0,d,g+1,0];y.set(v,x*m*f);for(let b=0;b<m;b++){let T=h[b*2]*2-1,w=h[b*2+1]*2-1;f===0?Ur.set(1,w,T):f===1?Ur.set(-T,1,-w):f===2?Ur.set(-T,w,1):f===3?Ur.set(-1,w,-T):f===4?Ur.set(-T,-1,w):Ur.set(T,w,-1),Ur.toArray(M,(f*m+b)*x)}}let c=new vt;c.setAttribute("position",new Mt(y,x)),c.setAttribute("outputDirection",new Mt(M,x)),t.push(new ht(c,null)),n>Oo&&n--}return{lodMeshes:t,sizeLods:e}}function sm(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function p_(i,e,t){return new ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:th(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function m_(i,e,t){return new ft({name:"SphericalGaussianBlur",defines:{SAMPLES:u_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:th(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function rm(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function om(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function th(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qu=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Oa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:oi});r.uniforms.tEquirect.value=t;let o=new ht(s,r),l=t.minFilter;return t.minFilter===In&&(t.minFilter=Ot),new ru(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function g_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?o(m):r(m)}function r(m){if(m&&m.isTexture){let x=m.mapping;if(x===lu||x===cu)if(e.has(m)){let y=e.get(m).texture;return l(y,m.mapping)}else{let y=m.image;if(y&&y.height>0){let M=new Qu(y.height);return M.fromEquirectangularTexture(i,m),e.set(m,M),m.addEventListener("dispose",u),l(M.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let x=m.mapping,y=x===lu||x===cu,M=x===or||x===Dr;if(y||M){let c=t.get(m),f=c!==void 0?c.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==f)return n===null&&(n=new ju(i)),c=y?n.fromEquirectangular(m,c):n.fromCubemap(m,c),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),c.texture;if(c!==void 0)return c.texture;{let d=m.image;return y&&d&&d.height>0||M&&d&&a(d)?(n===null&&(n=new ju(i)),c=y?n.fromEquirectangular(m):n.fromCubemap(m),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),m.addEventListener("dispose",h),c.texture):null}}}return m}function l(m,x){return x===lu?m.mapping=or:x===cu&&(m.mapping=Dr),m}function a(m){let x=0,y=6;for(let M=0;M<y;M++)m[M]!==void 0&&x++;return x===y}function u(m){let x=m.target;x.removeEventListener("dispose",u);let y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function h(m){let x=m.target;x.removeEventListener("dispose",h);let y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function v_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ar("WebGLRenderer: "+n+" extension not supported."),s}}}function x_(i,e,t,n){let s={},r=new WeakMap;function o(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",o),delete s[m.id];let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function a(p){let m=p.attributes;for(let x in m)e.update(m[x],i.ARRAY_BUFFER)}function u(p){let m=[],x=p.index,y=p.attributes.position,M=0;if(y===void 0)return;if(x!==null){let d=x.array;M=x.version;for(let g=0,v=d.length;g<v;g+=3){let b=d[g+0],T=d[g+1],w=d[g+2];m.push(b,T,T,w,w,b)}}else{let d=y.array;M=y.version;for(let g=0,v=d.length/3-1;g<v;g+=3){let b=g+0,T=g+1,w=g+2;m.push(b,T,T,w,w,b)}}let c=new(y.count>=65535?Fa:Na)(m,1);c.version=M;let f=r.get(p);f&&e.remove(f),r.set(p,c)}function h(p){let m=r.get(p);if(m){let x=p.index;x!==null&&m.version<x.version&&u(p)}else u(p);return r.get(p)}return{get:l,update:a,getWireframeAttribute:h}}function y_(i,e,t){let n;function s(p){n=p}let r,o;function l(p){r=p.type,o=p.bytesPerElement}function a(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function u(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),t.update(m,n,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let M=0;for(let c=0;c<x;c++)M+=m[c];t.update(M,n,1)}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=u,this.renderMultiDraw=h}function __(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function b_(i,e,t){let n=new WeakMap,s=new mt;function r(o,l,a){let u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0,m=n.get(l);if(m===void 0||m.count!==p){let S=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();let x=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],g=0;x===!0&&(g=1),y===!0&&(g=2),M===!0&&(g=3);let v=l.attributes.position.count*g,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*b*4*p),w=new Ia(T,v,b,p);w.type=Oi,w.needsUpdate=!0;let _=g*4;for(let E=0;E<p;E++){let A=c[E],C=f[E],I=d[E],R=v*b*4*E;for(let L=0;L<A.count;L++){let D=L*_;x===!0&&(s.fromBufferAttribute(A,L),T[R+D+0]=s.x,T[R+D+1]=s.y,T[R+D+2]=s.z,T[R+D+3]=0),y===!0&&(s.fromBufferAttribute(C,L),T[R+D+4]=s.x,T[R+D+5]=s.y,T[R+D+6]=s.z,T[R+D+7]=0),M===!0&&(s.fromBufferAttribute(I,L),T[R+D+8]=s.x,T[R+D+9]=s.y,T[R+D+10]=s.z,T[R+D+11]=I.itemSize===4?s.w:1)}}m={count:p,texture:w,size:new Ie(v,b)},n.set(l,m),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let M=0;M<u.length;M++)x+=u[M];let y=l.morphTargetsRelative?1:1-x;a.getUniforms().setValue(i,"morphTargetBaseInfluence",y),a.getUniforms().setValue(i,"morphTargetInfluences",u)}a.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function M_(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let x=u.skeleton;r.get(x)!==h&&(x.update(),r.set(x,h))}return m}function l(){r=new WeakMap}function a(u){let h=u.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var S_={[Uf]:"LINEAR_TONE_MAPPING",[Bf]:"REINHARD_TONE_MAPPING",[Of]:"CINEON_TONE_MAPPING",[kf]:"ACES_FILMIC_TONE_MAPPING",[Hf]:"AGX_TONE_MAPPING",[sl]:"NEUTRAL_TONE_MAPPING",[zf]:"CUSTOM_TONE_MAPPING"};function w_(i,e,t,n,s,r){let o=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,a=null,u=new vt;u.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let h=new Yc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ht(u,h),m=new rr(-1,1,1,-1,0,1),x=null,y=null,M=!1,c,f=null,d=[],g=!1;this.setSize=function(v,b){o.setSize(v,b),l!==null&&l.setSize(v,b),a!==null&&a.setSize(v,b);for(let T=0;T<d.length;T++){let w=d[T];w.setSize&&w.setSize(v,b)}},this.setEffects=function(v){d=v,g=d.length>0&&d[0].isRenderPass===!0;let b=o.width,T=o.height;d.length>0&&l===null&&(l=new Yt(b,T,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),a=new Yt(b,T,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<d.length;w++){let _=d[w];_.setSize&&_.setSize(b,T)}},this.begin=function(v,b){if(M||v.toneMapping===as&&d.length===0)return!1;if(f=b,b!==null){let T=b.width,w=b.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return g===!1&&v.setRenderTarget(o),c=v.toneMapping,v.toneMapping=as,!0},this.hasRenderPass=function(){return g},this.end=function(v,b){v.toneMapping=c,M=!0;let T=o,w=l;for(let _=0;_<d.length;_++){let S=d[_];S.enabled!==!1&&(S.render(v,w,T,b),S.needsSwap!==!1&&(T=w,w=w===l?a:l))}if(x!==v.outputColorSpace||y!==v.toneMapping){x=v.outputColorSpace,y=v.toneMapping,h.defines={},It.getTransfer(x)===Vt&&(h.defines.SRGB_TRANSFER="");let _=S_[y];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(f),v.render(p,m),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),u.dispose(),h.dispose()}}var Em=new Kn,d0=new er(1,1),Am=new Ia,Rm=new Fc,Cm=new Oa,am=[],lm=[],cm=new Float32Array(16),um=new Float32Array(9),hm=new Float32Array(4);function zo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=am[s];if(r===void 0&&(r=new Float32Array(s),am[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nh(i,e){let t=lm[e];t===void 0&&(t=new Int32Array(e),lm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2fv(this.addr,e),Dn(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;i.uniform3fv(this.addr,e),Dn(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4fv(this.addr,e),Dn(t,e)}}function C_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;hm.set(n),i.uniformMatrix2fv(this.addr,!1,hm),Dn(t,n)}}function P_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;um.set(n),i.uniformMatrix3fv(this.addr,!1,um),Dn(t,n)}}function I_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;cm.set(n),i.uniformMatrix4fv(this.addr,!1,cm),Dn(t,n)}}function L_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2iv(this.addr,e),Dn(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3iv(this.addr,e),Dn(t,e)}}function F_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4iv(this.addr,e),Dn(t,e)}}function U_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2uiv(this.addr,e),Dn(t,e)}}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3uiv(this.addr,e),Dn(t,e)}}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4uiv(this.addr,e),Dn(t,e)}}function z_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(d0.compareFunction=t.isReversedDepthBuffer()?Ku:Zu,r=d0):r=Em,t.setTexture2D(e||r,s)}function H_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rm,s)}function V_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cm,s)}function W_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Am,s)}function G_(i){switch(i){case 5126:return T_;case 35664:return E_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return F_;case 5125:return U_;case 36294:return B_;case 36295:return O_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}function X_(i,e){i.uniform1fv(this.addr,e)}function q_(i,e){let t=zo(e,this.size,2);i.uniform2fv(this.addr,t)}function Y_(i,e){let t=zo(e,this.size,3);i.uniform3fv(this.addr,t)}function Z_(i,e){let t=zo(e,this.size,4);i.uniform4fv(this.addr,t)}function K_(i,e){let t=zo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $_(i,e){let t=zo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function J_(i,e){let t=zo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function j_(i,e){i.uniform1iv(this.addr,e)}function Q_(i,e){i.uniform2iv(this.addr,e)}function eb(i,e){i.uniform3iv(this.addr,e)}function tb(i,e){i.uniform4iv(this.addr,e)}function nb(i,e){i.uniform1uiv(this.addr,e)}function ib(i,e){i.uniform2uiv(this.addr,e)}function sb(i,e){i.uniform3uiv(this.addr,e)}function rb(i,e){i.uniform4uiv(this.addr,e)}function ob(i,e,t){let n=this.cache,s=e.length,r=nh(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=d0:o=Em;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function ab(i,e,t){let n=this.cache,s=e.length,r=nh(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rm,r[o])}function lb(i,e,t){let n=this.cache,s=e.length,r=nh(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cm,r[o])}function cb(i,e,t){let n=this.cache,s=e.length,r=nh(t,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Am,r[o])}function ub(i){switch(i){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return Z_;case 35674:return K_;case 35675:return $_;case 35676:return J_;case 5124:case 35670:return j_;case 35667:case 35671:return Q_;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}var p0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=G_(t.type)}},m0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ub(t.type)}},g0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},h0=/(\w+)(\])?(\[|\.)?/g;function fm(i,e){i.seq.push(e),i.map[e.id]=e}function hb(i,e,t){let n=i.name,s=n.length;for(h0.lastIndex=0;;){let r=h0.exec(n),o=h0.lastIndex,l=r[1],a=r[2]==="]",u=r[3];if(a&&(l=l|0),u===void 0||u==="["&&o+2===s){fm(t,u===void 0?new p0(l,i,e):new m0(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new g0(l),fm(t,p)),t=p}}}var ko=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);hb(l,a,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function dm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fb=37297,db=0;function pb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var pm=new gt;function mb(i){It._getMatrix(pm,It.workingColorSpace,i);let e=`mat3( ${pm.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(i)){case Ca:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+pb(i.getShaderSource(e),l)}else return r}function gb(i,e){let t=mb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vb={[Uf]:"Linear",[Bf]:"Reinhard",[Of]:"Cineon",[kf]:"ACESFilmic",[Hf]:"AgX",[sl]:"Neutral",[zf]:"Custom"};function xb(i,e){let t=vb[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ju=new z;function yb(){It.getLuminanceCoefficients(Ju);let i=Ju.x.toFixed(4),e=Ju.y.toFixed(4),t=Ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function bb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function ml(i){return i!==""}function gm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function v0(i){return i.replace(Sb,Tb)}var wb=new Map;function Tb(i,e){let t=dt[e];if(t===void 0){let n=wb.get(e);if(n!==void 0)t=dt[n],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return v0(t)}var Eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(i){return i.replace(Eb,Ab)}function Ab(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ym(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Rb={[Ir]:"SHADOWMAP_TYPE_PCF",[Lo]:"SHADOWMAP_TYPE_VSM"};function Cb(i){return Rb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Pb={[or]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE_UV"};function Ib(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Pb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lb={[Dr]:"ENVMAP_MODE_REFRACTION"};function Db(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nb={[Ff]:"ENVMAP_BLENDING_MULTIPLY",[Dp]:"ENVMAP_BLENDING_MIX",[Np]:"ENVMAP_BLENDING_ADD"};function Fb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Nb[i.combine]||"ENVMAP_BLENDING_NONE"}function Ub(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,a=Cb(t),u=Ib(t),h=Db(t),p=Fb(t),m=Ub(t),x=_b(t),y=bb(r),M=s.createProgram(),c,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ml).join(`
`),c.length>0&&(c+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ml).join(`
`),f.length>0&&(f+=`
`)):(c=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),f=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?dt.tonemapping_pars_fragment:"",t.toneMapping!==as?xb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,gb("linearToOutputTexel",t.outputColorSpace),yb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ml).join(`
`)),o=v0(o),o=gm(o,t),o=vm(o,t),l=v0(l),l=gm(l,t),l=vm(l,t),o=xm(o),l=xm(l),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,c=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,f=["#define varying in",t.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let g=d+c+o,v=d+f+l,b=dm(s,s.VERTEX_SHADER,g),T=dm(s,s.FRAGMENT_SHADER,v);s.attachShader(M,b),s.attachShader(M,T),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(A){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(M)||"",I=s.getShaderInfoLog(b)||"",R=s.getShaderInfoLog(T)||"",L=C.trim(),D=I.trim(),O=R.trim(),H=!0,B=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,T);else{let V=mm(s,b,"vertex"),k=mm(s,T,"fragment");pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+V+`
`+k)}else L!==""?ut("WebGLProgram: Program Info Log:",L):(D===""||O==="")&&(B=!1);B&&(A.diagnostics={runnable:H,programLog:L,vertexShader:{log:D,prefix:c},fragmentShader:{log:O,prefix:f}})}s.deleteShader(b),s.deleteShader(T),_=new ko(s,M),S=Mb(s,M)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,fb)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=db++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=T,this}var Ob=0,x0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new y0(e),t.set(e,n)),n}},y0=class{constructor(e){this.id=Ob++,this.code=e,this.usedTimes=0}};function kb(i){return i===cr||i===hl||i===fl}function zb(i,e,t,n,s,r){let o=new La,l=new x0,a=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,m=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return a.add(_),_===0?"uv":`uv${_}`}function M(_,S,E,A,C,I){let R=A.fog,L=C.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||D,O),B=H&&H.mapping===rl?H.image.height:null,V=x[_.type];_.precision!==null&&(m=n.getMaxPrecision(_.precision),m!==_.precision&&ut("WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,q=k!==void 0?k.length:0,ee=0;L.morphAttributes.position!==void 0&&(ee=1),L.morphAttributes.normal!==void 0&&(ee=2),L.morphAttributes.color!==void 0&&(ee=3);let we,Ae,Me,G;if(V){let Gt=_s[V];we=Gt.vertexShader,Ae=Gt.fragmentShader}else{we=_.vertexShader,Ae=_.fragmentShader;let Gt=l.getVertexShaderStage(_),Ft=l.getFragmentShaderStage(_);l.update(_,Gt,Ft),Me=Gt.id,G=Ft.id}let J=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Pe=C.isInstancedMesh===!0,re=C.isBatchedMesh===!0,ye=!!_.map,Oe=!!_.matcap,ke=!!H,Te=!!_.aoMap,He=!!_.lightMap,te=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,j=!!_.displacementMap,ce=!!_.emissiveMap,ie=!!_.metalnessMap,ne=!!_.roughnessMap,F=_.anisotropy>0,be=_.clearcoat>0,K=_.dispersion>0,N=_.retroreflectivity>0,P=_.iridescence>0,W=_.sheen>0,Y=_.transmission>0,Q=F&&!!_.anisotropyMap,ue=be&&!!_.clearcoatMap,ve=be&&!!_.clearcoatNormalMap,he=be&&!!_.clearcoatRoughnessMap,me=P&&!!_.iridescenceMap,Ne=P&&!!_.iridescenceThicknessMap,Ze=W&&!!_.sheenColorMap,Fe=W&&!!_.sheenRoughnessMap,Be=!!_.specularMap,ze=!!_.specularColorMap,tt=!!_.specularIntensityMap,at=Y&&!!_.transmissionMap,Z=Y&&!!_.thicknessMap,Le=!!_.gradientMap,ge=!!_.alphaMap,De=_.alphaTest>0,Ve=!!_.alphaHash,Re=!!_.extensions,nt=as;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(nt=i.toneMapping);let je={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:we,fragmentShader:Ae,defines:_.defines,customVertexShaderID:Me,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:re,batchingColor:re&&C._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&C.instanceColor!==null,instancingMorph:Pe&&C.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ye,matcap:Oe,envMap:ke,envMapMode:ke&&H.mapping,envMapCubeUVHeight:B,aoMap:Te,lightMap:He,bumpMap:te,normalMap:de,displacementMap:j,emissiveMap:ce,normalMapObjectSpace:de&&_.normalMapType===Bp,normalMapTangentSpace:de&&_.normalMapType===Yu,packedNormalMap:de&&_.normalMapType===Yu&&kb(_.normalMap.format),metalnessMap:ie,roughnessMap:ne,anisotropy:F,anisotropyMap:Q,clearcoat:be,clearcoatMap:ue,clearcoatNormalMap:ve,clearcoatRoughnessMap:he,dispersion:K,retroreflection:N,iridescence:P,iridescenceMap:me,iridescenceThicknessMap:Ne,sheen:W,sheenColorMap:Ze,sheenRoughnessMap:Fe,specularMap:Be,specularColorMap:ze,specularIntensityMap:tt,transmission:Y,transmissionMap:at,thicknessMap:Z,gradientMap:Le,opaque:_.transparent===!1&&_.blending===Do&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:De,alphaHash:Ve,combine:_.combine,mapUv:ye&&y(_.map.channel),aoMapUv:Te&&y(_.aoMap.channel),lightMapUv:He&&y(_.lightMap.channel),bumpMapUv:te&&y(_.bumpMap.channel),normalMapUv:de&&y(_.normalMap.channel),displacementMapUv:j&&y(_.displacementMap.channel),emissiveMapUv:ce&&y(_.emissiveMap.channel),metalnessMapUv:ie&&y(_.metalnessMap.channel),roughnessMapUv:ne&&y(_.roughnessMap.channel),anisotropyMapUv:Q&&y(_.anisotropyMap.channel),clearcoatMapUv:ue&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:ve&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&y(_.sheenRoughnessMap.channel),specularMapUv:Be&&y(_.specularMap.channel),specularColorMapUv:ze&&y(_.specularColorMap.channel),specularIntensityMapUv:tt&&y(_.specularIntensityMap.channel),transmissionMapUv:at&&y(_.transmissionMap.channel),thicknessMapUv:Z&&y(_.thicknessMap.channel),alphaMapUv:ge&&y(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(de||F),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(ye||ge),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ee,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:ye&&_.map.isVideoTexture===!0&&It.getTransfer(_.map.colorSpace)===Vt,decodeVideoTextureEmissive:ce&&_.emissiveMap.isVideoTexture===!0&&It.getTransfer(_.emissiveMap.colorSpace)===Vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bn,flipSided:_.side===Hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&_.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=a.has(1),je.vertexUv2s=a.has(2),je.vertexUv3s=a.has(3),a.clear(),je}function c(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)S.push(E),S.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(f(S,_),d(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function f(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function d(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function g(_){let S=x[_.type],E;if(S){let A=_s[S];E=Fr.clone(A.uniforms)}else E=_.uniforms;return E}function v(_,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new Bb(i,S,_,s),u.push(E),h.set(S,E)),E}function b(_){if(--_.usedTimes===0){let S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){l.remove(_)}function w(){l.dispose()}return{getParameters:M,getProgramCacheKey:c,getUniforms:g,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:w}}function Hb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _m(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function l(m,x,y,M,c,f){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:x,material:y,materialVariant:o(m),groupOrder:M,renderOrder:m.renderOrder,z:c,group:f},i[e]=d):(d.id=m.id,d.object=m,d.geometry=x,d.material=y,d.materialVariant=o(m),d.groupOrder=M,d.renderOrder=m.renderOrder,d.z=c,d.group=f),e++,d}function a(m,x,y,M,c,f,d){d.reversedDepth===!0&&(c=-c);let g=l(m,x,y,M,c,f);y.transmission>0?n.push(g):y.transparent===!0?s.push(g):t.push(g)}function u(m,x,y,M,c,f){let d=l(m,x,y,M,c,f);y.transmission>0?n.unshift(d):y.transparent===!0?s.unshift(d):t.unshift(d)}function h(m,x){t.length>1&&t.sort(m||Vb),n.length>1&&n.sort(x||_m),s.length>1&&s.sort(x||_m)}function p(){for(let m=e,x=i.length;m<x;m++){let y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:u,finish:p,sort:h}}function Wb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new bm,i.set(n,[o])):s>=r.length?(o=new bm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new pe};break;case"SpotLight":t={position:new z,direction:new z,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Xb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qb=0;function Yb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zb(i){let e=new Gb,t=Xb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new z);let s=new z,r=new Je,o=new Je;function l(u){let h=0,p=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,y=0,M=0,c=0,f=0,d=0,g=0,v=0,b=0,T=0,w=0,_=0,S=0,E=0;u.sort(Yb);for(let C=0,I=u.length;C<I;C++){let R=u[C],L=R.color,D=R.intensity,O=R.distance,H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cr?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=L.r*D,p+=L.g*D,m+=L.b*D;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],D);E++}else if(R.isSunLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,k=t.get(R);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[y]=k,n.sunShadowMap[y]=H;let q=V.getViewportCount();for(let ee=0;ee<q;ee++)n.sunShadowMatrix[M+ee]=V.getMatrix(ee),n.sunShadowCascade[M+ee]=V._cascadeData[ee];M+=q,y++}n.sun[x]=B,x++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,k=t.get(R);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[c]=k,n.directionalShadowMap[c]=H,n.directionalShadowMatrix[c]=R.shadow.matrix,b++}n.directional[c]=B,c++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(L).multiplyScalar(D),B.distance=O,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[d]=B;let V=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,V.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[d]=V.matrix,R.castShadow){let k=t.get(R);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[d]=k,n.spotShadowMap[d]=H,w++}d++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(L).multiplyScalar(D),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=B,g++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let V=R.shadow,k=t.get(R);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[f]=k,n.pointShadowMap[f]=H,n.pointShadowMatrix[f]=R.shadow.matrix,T++}n.point[f]=B,f++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(D),B.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[v]=B,v++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;let A=n.hash;(A.sunLength!==x||A.directionalLength!==c||A.pointLength!==f||A.spotLength!==d||A.rectAreaLength!==g||A.hemiLength!==v||A.numSunShadows!==y||A.numDirectionalShadows!==b||A.numPointShadows!==T||A.numSpotShadows!==w||A.numSpotMaps!==_||A.numLightProbes!==E)&&(n.sun.length=x,n.directional.length=c,n.spot.length=d,n.rectArea.length=g,n.point.length=f,n.hemi.length=v,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-S,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,A.sunLength=x,A.directionalLength=c,A.pointLength=f,A.spotLength=d,A.rectAreaLength=g,A.hemiLength=v,A.numSunShadows=y,A.numDirectionalShadows=b,A.numPointShadows=T,A.numSpotShadows=w,A.numSpotMaps=_,A.numLightProbes=E,n.version=qb++)}function a(u,h){let p=0,m=0,x=0,y=0,M=0,c=0,f=h.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){let v=u[d];if(v.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let b=n.directional[m];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(v.isSpotLight){let b=n.spot[y];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),y++}else if(v.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let b=n.point[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),x++}else if(v.isHemisphereLight){let b=n.hemi[c];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),c++}}}return{setup:l,setupView:a,state:n}}function Mm(i){let e=new Zb(i),t=[],n=[],s=[];function r(m){p.camera=m,t.length=0,n.length=0,s.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function a(m){s.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:a}}function Kb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new Mm(i),e.set(s,[l])):r>=o.length?(l=new Mm(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
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
}`,jb=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Qb=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Sm=new Je,pl=new z,f0=new z;function eM(i,e,t){let n=new wo,s=new Ie,r=new Ie,o=new mt,l=new tr,a=new Zc,u={},h=t.maxTextureSize,p={[xs]:Hn,[Hn]:xs,[bn]:bn},m=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:$b,fragmentShader:Jb}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let y=new vt;y.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ht(y,m),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ir;let f=this.type;this.render=function(T,w,_){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||T.length===0)return;this.type===pp&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ir);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),C=i.state;C.setBlending(oi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let I=f!==this.type;I&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(L=>L.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,L=T.length;R<L;R++){let D=T[R],O=D.shadow;if(O===void 0){ut("WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let H=O.getFrameExtents();s.multiply(H),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,O.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Lo){if(D.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Yt(s.x,s.y,{format:cr,type:Rn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),O.map.texture.name=D.name+".shadowMap",O.map.depthTexture=new er(s.x,s.y,Oi),O.map.depthTexture.name=D.name+".shadowMapDepth",O.map.depthTexture.format=ps,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=En,O.map.depthTexture.magFilter=En}else D.isPointLight?(O.map=new Qu(s.x),O.map.depthTexture=new kc(s.x,ls)):(O.map=new Yt(s.x,s.y),O.map.depthTexture=new er(s.x,s.y,ls)),O.map.depthTexture.name=D.name+".shadowMap",O.map.depthTexture.format=ps,this.type===Ir?(O.map.depthTexture.compareFunction=B?Ku:Zu,O.map.depthTexture.minFilter=Ot,O.map.depthTexture.magFilter=Ot):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=En,O.map.depthTexture.magFilter=En);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let V=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();D.isPointLight!==!0&&O.updateMatrices(D,_);for(let k=0;k<V;k++){let q=O.getCamera(k);if(D.isPointLight){let ee=O.camera,we=O.matrix,Ae=D.distance||ee.far;Ae!==ee.far&&(ee.far=Ae,ee.updateProjectionMatrix()),pl.setFromMatrixPosition(D.matrixWorld),ee.position.copy(pl),f0.copy(ee.position),f0.add(jb[k]),ee.up.copy(Qb[k]),ee.lookAt(f0),ee.updateMatrixWorld(),we.makeTranslation(-pl.x,-pl.y,-pl.z),Sm.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Sm,ee.coordinateSystem,ee.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,k),i.clear();else{k===0&&(i.setRenderTarget(O.map),i.clear());let ee=O.getViewport(k);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),C.viewport(o)}n=O.getFrustum(k),v(w,_,q,D,this.type)}O.isPointLightShadow!==!0&&this.type===Lo&&d(O,_),O.needsUpdate=!1}f=this.type,c.needsUpdate=!1,i.setRenderTarget(S,E,A)};function d(T,w){let _=e.update(M);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null?T.mapPass=new Yt(s.x,s.y,{format:cr,type:Rn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,_,m,M,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value.set(T.map.width,T.map.height),x.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,_,x,M,null)}function g(T,w,_,S){let E=null,A=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)E=A;else if(E=_.isPointLight===!0?a:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let C=E.uuid,I=w.uuid,R=u[C];R===void 0&&(R={},u[C]=R);let L=R[I];L===void 0&&(L=E.clone(),R[I]=L,w.addEventListener("dispose",b)),E=L}if(E.visible=w.visible,E.wireframe=w.wireframe,S===Lo?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:p[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,_.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let C=i.properties.get(E);C.light=_}return E}function v(T,w,_,S,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Lo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let I=e.update(T),R=T.material;if(Array.isArray(R)){let L=I.groups;for(let D=0,O=L.length;D<O;D++){let H=L[D],B=R[H.materialIndex];if(B&&B.visible){let V=g(T,B,S,E);T.onBeforeShadow(i,T,w,_,I,V,H),i.renderBufferDirect(_,null,I,V,T,H),T.onAfterShadow(i,T,w,_,I,V,H)}}}else if(R.visible){let L=g(T,R,S,E);T.onBeforeShadow(i,T,w,_,I,L,null),i.renderBufferDirect(_,null,I,L,T,null),T.onAfterShadow(i,T,w,_,I,L,null)}}let C=T.children;for(let I=0,R=C.length;I<R;I++)v(C[I],w,_,S,E)}function b(T){T.target.removeEventListener("dispose",b);for(let _ in u){let S=u[_],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function tM(i,e){function t(){let Z=!1,Le=new mt,ge=null,De=new mt(0,0,0,0);return{setMask:function(Ve){ge!==Ve&&!Z&&(i.colorMask(Ve,Ve,Ve,Ve),ge=Ve)},setLocked:function(Ve){Z=Ve},setClear:function(Ve,Re,nt,je,Gt){Gt===!0&&(Ve*=je,Re*=je,nt*=je),Le.set(Ve,Re,nt,je),De.equals(Le)===!1&&(i.clearColor(Ve,Re,nt,je),De.copy(Le))},reset:function(){Z=!1,ge=null,De.set(-1,0,0,0)}}}function n(){let Z=!1,Le=!1,ge=null,De=null,Ve=null;return{setReversed:function(Re){if(Le!==Re){let nt=e.get("EXT_clip_control");Re?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Le=Re;let je=Ve;Ve=null,this.setClear(je)}},getReversed:function(){return Le},setTest:function(Re){Re?J(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Re){ge!==Re&&!Z&&(i.depthMask(Re),ge=Re)},setFunc:function(Re){if(Le&&(Re=Kp[Re]),De!==Re){switch(Re){case wc:i.depthFunc(i.NEVER);break;case Tc:i.depthFunc(i.ALWAYS);break;case Ec:i.depthFunc(i.LESS);break;case vo:i.depthFunc(i.LEQUAL);break;case Ac:i.depthFunc(i.EQUAL);break;case Rc:i.depthFunc(i.GEQUAL);break;case Cc:i.depthFunc(i.GREATER);break;case Pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=Re}},setLocked:function(Re){Z=Re},setClear:function(Re){Ve!==Re&&(Ve=Re,Le&&(Re=1-Re),i.clearDepth(Re))},reset:function(){Z=!1,ge=null,De=null,Ve=null,Le=!1}}}function s(){let Z=!1,Le=null,ge=null,De=null,Ve=null,Re=null,nt=null,je=null,Gt=null;return{setTest:function(Ft){Z||(Ft?J(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Ft){Le!==Ft&&!Z&&(i.stencilMask(Ft),Le=Ft)},setFunc:function(Ft,hi,Gn){(ge!==Ft||De!==hi||Ve!==Gn)&&(i.stencilFunc(Ft,hi,Gn),ge=Ft,De=hi,Ve=Gn)},setOp:function(Ft,hi,Gn){(Re!==Ft||nt!==hi||je!==Gn)&&(i.stencilOp(Ft,hi,Gn),Re=Ft,nt=hi,je=Gn)},setLocked:function(Ft){Z=Ft},setClear:function(Ft){Gt!==Ft&&(i.clearStencil(Ft),Gt=Ft)},reset:function(){Z=!1,Le=null,ge=null,De=null,Ve=null,Re=null,nt=null,je=null,Gt=null}}}let r=new t,o=new n,l=new s,a=new WeakMap,u=new WeakMap,h={},p={},m={},x=new WeakMap,y=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,_=new pe(0,0,0),S=0,E=!1,A=null,C=null,I=null,R=null,L=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,H=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=H>=2);let V=null,k={},q=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),we=new mt().fromArray(q),Ae=new mt().fromArray(ee);function Me(Z,Le,ge,De){let Ve=new Uint8Array(4),Re=i.createTexture();i.bindTexture(Z,Re),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<ge;nt++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(Le+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return Re}let G={};G[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),J(i.DEPTH_TEST),o.setFunc(vo),te(!1),de(Pf),J(i.CULL_FACE),Te(oi);function J(Z){h[Z]!==!0&&(i.enable(Z),h[Z]=!0)}function xe(Z){h[Z]!==!1&&(i.disable(Z),h[Z]=!1)}function Pe(Z,Le){return m[Z]!==Le?(i.bindFramebuffer(Z,Le),m[Z]=Le,Z===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Le),Z===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function re(Z,Le){let ge=y,De=!1;if(Z){ge=x.get(Le),ge===void 0&&(ge=[],x.set(Le,ge));let Ve=Z.textures;if(ge.length!==Ve.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,nt=Ve.length;Re<nt;Re++)ge[Re]=i.COLOR_ATTACHMENT0+Re;ge.length=Ve.length,De=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,De=!0);De&&i.drawBuffers(ge)}function ye(Z){return M!==Z?(i.useProgram(Z),M=Z,!0):!1}let Oe={[Lr]:i.FUNC_ADD,[gp]:i.FUNC_SUBTRACT,[vp]:i.FUNC_REVERSE_SUBTRACT};Oe[xp]=i.MIN,Oe[yp]=i.MAX;let ke={[_p]:i.ZERO,[bp]:i.ONE,[Mp]:i.SRC_COLOR,[Df]:i.SRC_ALPHA,[Rp]:i.SRC_ALPHA_SATURATE,[Ep]:i.DST_COLOR,[wp]:i.DST_ALPHA,[Sp]:i.ONE_MINUS_SRC_COLOR,[Nf]:i.ONE_MINUS_SRC_ALPHA,[Ap]:i.ONE_MINUS_DST_COLOR,[Tp]:i.ONE_MINUS_DST_ALPHA,[Cp]:i.CONSTANT_COLOR,[Pp]:i.ONE_MINUS_CONSTANT_COLOR,[Ip]:i.CONSTANT_ALPHA,[Lp]:i.ONE_MINUS_CONSTANT_ALPHA};function Te(Z,Le,ge,De,Ve,Re,nt,je,Gt,Ft){if(Z===oi){c===!0&&(xe(i.BLEND),c=!1);return}if(c===!1&&(J(i.BLEND),c=!0),Z!==mp){if(Z!==f||Ft!==E){if((d!==Lr||b!==Lr)&&(i.blendEquation(i.FUNC_ADD),d=Lr,b=Lr),Ft)switch(Z){case Do:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case If:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Do:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case If:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lf:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",Z);break}g=null,v=null,T=null,w=null,_.set(0,0,0),S=0,f=Z,E=Ft}return}Ve=Ve||Le,Re=Re||ge,nt=nt||De,(Le!==d||Ve!==b)&&(i.blendEquationSeparate(Oe[Le],Oe[Ve]),d=Le,b=Ve),(ge!==g||De!==v||Re!==T||nt!==w)&&(i.blendFuncSeparate(ke[ge],ke[De],ke[Re],ke[nt]),g=ge,v=De,T=Re,w=nt),(je.equals(_)===!1||Gt!==S)&&(i.blendColor(je.r,je.g,je.b,Gt),_.copy(je),S=Gt),f=Z,E=!1}function He(Z,Le){Z.side===bn?xe(i.CULL_FACE):J(i.CULL_FACE);let ge=Z.side===Hn;Le&&(ge=!ge),te(ge),Z.blending===Do&&Z.transparent===!1?Te(oi):Te(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let De=Z.stencilWrite;l.setTest(De),De&&(l.setMask(Z.stencilWriteMask),l.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),l.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ce(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(Z){A!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),A=Z)}function de(Z){Z!==fp?(J(i.CULL_FACE),Z!==C&&(Z===Pf?i.cullFace(i.BACK):Z===dp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),C=Z}function j(Z){Z!==I&&(O&&i.lineWidth(Z),I=Z)}function ce(Z,Le,ge){Z?(J(i.POLYGON_OFFSET_FILL),(R!==Le||L!==ge)&&(R=Le,L=ge,o.getReversed()&&(Le=-Le),i.polygonOffset(Le,ge))):xe(i.POLYGON_OFFSET_FILL)}function ie(Z){Z?J(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function ne(Z){Z===void 0&&(Z=i.TEXTURE0+D-1),V!==Z&&(i.activeTexture(Z),V=Z)}function F(Z,Le,ge){ge===void 0&&(V===null?ge=i.TEXTURE0+D-1:ge=V);let De=k[ge];De===void 0&&(De={type:void 0,texture:void 0},k[ge]=De),(De.type!==Z||De.texture!==Le)&&(V!==ge&&(i.activeTexture(ge),V=ge),i.bindTexture(Z,Le||G[Z]),De.type=Z,De.texture=Le)}function be(){let Z=k[V];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function P(){try{i.texSubImage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function W(){try{i.texSubImage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function ue(){try{i.texStorage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function ve(){try{i.texStorage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function he(){try{i.texImage2D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function me(){try{i.texImage3D(...arguments)}catch(Z){pt("WebGLState:",Z)}}function Ne(Z){return p[Z]!==void 0?p[Z]:i.getParameter(Z)}function Ze(Z,Le){p[Z]!==Le&&(i.pixelStorei(Z,Le),p[Z]=Le)}function Fe(Z){we.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),we.copy(Z))}function Be(Z){Ae.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Ae.copy(Z))}function ze(Z,Le){let ge=u.get(Le);ge===void 0&&(ge=new WeakMap,u.set(Le,ge));let De=ge.get(Z);De===void 0&&(De=i.getUniformBlockIndex(Le,Z.name),ge.set(Z,De))}function tt(Z,Le){let De=u.get(Le).get(Z);a.get(Le)!==De&&(i.uniformBlockBinding(Le,De,Z.__bindingPointIndex),a.set(Le,De))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},V=null,k={},m={},x=new WeakMap,y=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,_=new pe(0,0,0),S=0,E=!1,A=null,C=null,I=null,R=null,L=null,we.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:J,disable:xe,bindFramebuffer:Pe,drawBuffers:re,useProgram:ye,setBlending:Te,setMaterial:He,setFlipSided:te,setCullFace:de,setLineWidth:j,setPolygonOffset:ce,setScissorTest:ie,activeTexture:ne,bindTexture:F,unbindTexture:be,compressedTexImage2D:K,compressedTexImage3D:N,texImage2D:he,texImage3D:me,pixelStorei:Ze,getParameter:Ne,updateUBOMapping:ze,uniformBlockBinding:tt,texStorage2D:ue,texStorage3D:ve,texSubImage2D:P,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:Fe,viewport:Be,reset:at}}function nM(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,h=new WeakMap,p=new Set,m,x=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,P){return y?new OffscreenCanvas(N,P):yo("canvas")}function c(N,P,W){let Y=1,Q=K(N);if((Q.width>W||Q.height>W)&&(Y=W/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ue=Math.floor(Y*Q.width),ve=Math.floor(Y*Q.height);m===void 0&&(m=M(ue,ve));let he=P?M(ue,ve):m;return he.width=ue,he.height=ve,he.getContext("2d").drawImage(N,0,0,ue,ve),ut("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+ve+")."),he}else return"data"in N&&ut("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function f(N){return N.generateMipmaps}function d(N){i.generateMipmap(N)}function g(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,P,W,Y,Q,ue=!1){if(N!==null){if(i[N]!==void 0)return i[N];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ve;Y&&(ve=e.get("EXT_texture_norm16"),ve||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=P;if(P===i.RED&&(W===i.FLOAT&&(he=i.R32F),W===i.HALF_FLOAT&&(he=i.R16F),W===i.UNSIGNED_BYTE&&(he=i.R8),W===i.UNSIGNED_SHORT&&ve&&(he=ve.R16_EXT),W===i.SHORT&&ve&&(he=ve.R16_SNORM_EXT)),P===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.R8UI),W===i.UNSIGNED_SHORT&&(he=i.R16UI),W===i.UNSIGNED_INT&&(he=i.R32UI),W===i.BYTE&&(he=i.R8I),W===i.SHORT&&(he=i.R16I),W===i.INT&&(he=i.R32I)),P===i.RG&&(W===i.FLOAT&&(he=i.RG32F),W===i.HALF_FLOAT&&(he=i.RG16F),W===i.UNSIGNED_BYTE&&(he=i.RG8),W===i.UNSIGNED_SHORT&&ve&&(he=ve.RG16_EXT),W===i.SHORT&&ve&&(he=ve.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RG8UI),W===i.UNSIGNED_SHORT&&(he=i.RG16UI),W===i.UNSIGNED_INT&&(he=i.RG32UI),W===i.BYTE&&(he=i.RG8I),W===i.SHORT&&(he=i.RG16I),W===i.INT&&(he=i.RG32I)),P===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RGB8UI),W===i.UNSIGNED_SHORT&&(he=i.RGB16UI),W===i.UNSIGNED_INT&&(he=i.RGB32UI),W===i.BYTE&&(he=i.RGB8I),W===i.SHORT&&(he=i.RGB16I),W===i.INT&&(he=i.RGB32I)),P===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),W===i.UNSIGNED_INT&&(he=i.RGBA32UI),W===i.BYTE&&(he=i.RGBA8I),W===i.SHORT&&(he=i.RGBA16I),W===i.INT&&(he=i.RGBA32I)),P===i.RGB&&(W===i.UNSIGNED_SHORT&&ve&&(he=ve.RGB16_EXT),W===i.SHORT&&ve&&(he=ve.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(he=i.R11F_G11F_B10F)),P===i.RGBA){let me=ue?Ca:It.getTransfer(Q);W===i.FLOAT&&(he=i.RGBA32F),W===i.HALF_FLOAT&&(he=i.RGBA16F),W===i.UNSIGNED_BYTE&&(he=me===Vt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ve&&(he=ve.RGBA16_EXT),W===i.SHORT&&ve&&(he=ve.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(N,P){let W;return N?P===null||P===ls||P===Fo?W=i.DEPTH24_STENCIL8:P===Oi?W=i.DEPTH32F_STENCIL8:P===No&&(W=i.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ls||P===Fo?W=i.DEPTH_COMPONENT24:P===Oi?W=i.DEPTH_COMPONENT32F:P===No&&(W=i.DEPTH_COMPONENT16),W}function T(N,P){return f(N)===!0||N.isFramebufferTexture&&N.minFilter!==En&&N.minFilter!==Ot?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function w(N){let P=N.target;P.removeEventListener("dispose",w),S(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&p.delete(P)}function _(N){let P=N.target;P.removeEventListener("dispose",_),A(P)}function S(N){let P=n.get(N);if(P.__webglInit===void 0)return;let W=N.source,Y=x.get(W);if(Y){let Q=Y[P.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(N),Object.keys(Y).length===0&&x.delete(W)}n.remove(N)}function E(N){let P=n.get(N);i.deleteTexture(P.__webglTexture);let W=N.source,Y=x.get(W);delete Y[P.__cacheKey],o.memory.textures--}function A(N){let P=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(P.__webglFramebuffer[Y]))for(let Q=0;Q<P.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(P.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(P.__webglFramebuffer[Y]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[Y])}else{if(Array.isArray(P.__webglFramebuffer))for(let Y=0;Y<P.__webglFramebuffer.length;Y++)i.deleteFramebuffer(P.__webglFramebuffer[Y]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let Y=0;Y<P.__webglColorRenderbuffer.length;Y++)P.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[Y]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let W=N.textures;for(let Y=0,Q=W.length;Y<Q;Y++){let ue=n.get(W[Y]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(W[Y])}n.remove(N)}let C=0;function I(){C=0}function R(){return C}function L(N){C=N}function D(){let N=C;return N>=s.maxTextures&&ut("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function O(N){let P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function H(N,P){let W=n.get(N);if(N.isVideoTexture&&F(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let Y=N.image;if(Y===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(W,N,P);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+P)}function B(N,P){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){xe(W,N,P);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+P)}function V(N,P){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){xe(W,N,P);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+P)}function k(N,P){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){Pe(W,N,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+P)}let q={[Ns]:i.REPEAT,[ds]:i.CLAMP_TO_EDGE,[Ic]:i.MIRRORED_REPEAT},ee={[En]:i.NEAREST,[Fp]:i.NEAREST_MIPMAP_NEAREST,[ol]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[uu]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},we={[kp]:i.NEVER,[Gp]:i.ALWAYS,[zp]:i.LESS,[Zu]:i.LEQUAL,[Hp]:i.EQUAL,[Ku]:i.GEQUAL,[Vp]:i.GREATER,[Wp]:i.NOTEQUAL};function Ae(N,P){if(P.type===Oi&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Ot||P.magFilter===uu||P.magFilter===ol||P.magFilter===In||P.minFilter===Ot||P.minFilter===uu||P.minFilter===ol||P.minFilter===In)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,q[P.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,q[P.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,q[P.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ee[P.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ee[P.minFilter]),P.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,we[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===En||P.minFilter!==ol&&P.minFilter!==In||P.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Me(N,P){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",w));let Y=P.source,Q=x.get(Y);Q===void 0&&(Q={},x.set(Y,Q));let ue=O(P);if(ue!==N.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Q[ue].usedTimes++;let ve=Q[N.__cacheKey];ve!==void 0&&(Q[N.__cacheKey].usedTimes--,ve.usedTimes===0&&E(P)),N.__cacheKey=ue,N.__webglTexture=Q[ue].texture}return W}function G(N,P,W){return Math.floor(Math.floor(N/W)/P)}function J(N,P,W,Y){let ue=N.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,W,Y,P.data);else{ue.sort((Ze,Fe)=>Ze.start-Fe.start);let ve=0;for(let Ze=1;Ze<ue.length;Ze++){let Fe=ue[ve],Be=ue[Ze],ze=Fe.start+Fe.count,tt=G(Be.start,P.width,4),at=G(Fe.start,P.width,4);Be.start<=ze+1&&tt===at&&G(Be.start+Be.count-1,P.width,4)===tt?Fe.count=Math.max(Fe.count,Be.start+Be.count-Fe.start):(++ve,ue[ve]=Be)}ue.length=ve+1;let he=t.getParameter(i.UNPACK_ROW_LENGTH),me=t.getParameter(i.UNPACK_SKIP_PIXELS),Ne=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let Ze=0,Fe=ue.length;Ze<Fe;Ze++){let Be=ue[Ze],ze=Math.floor(Be.start/4),tt=Math.ceil(Be.count/4),at=ze%P.width,Z=Math.floor(ze/P.width),Le=tt,ge=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,at,Z,Le,ge,W,Y,P.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,he),t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function xe(N,P,W){let Y=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=Me(N,P),ue=P.source;t.bindTexture(Y,N.__webglTexture,i.TEXTURE0+W);let ve=n.get(ue);if(ue.version!==ve.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let ge=It.getPrimaries(It.workingColorSpace),De=P.colorSpace===ai?null:It.getPrimaries(P.colorSpace),Ve=P.colorSpace===ai||ge===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let me=c(P.image,!1,s.maxTextureSize);me=be(P,me);let Ne=r.convert(P.format,P.colorSpace),Ze=r.convert(P.type),Fe=v(P.internalFormat,Ne,Ze,P.normalized,P.colorSpace,P.isVideoTexture);Ae(Y,P);let Be,ze=P.mipmaps,tt=P.isVideoTexture!==!0,at=ve.__version===void 0||Q===!0,Z=ue.dataReady,Le=T(P,me);if(P.isDepthTexture)Fe=b(P.format===ar,P.type),at&&(tt?t.texStorage2D(i.TEXTURE_2D,1,Fe,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Fe,me.width,me.height,0,Ne,Ze,null));else if(P.isDataTexture)if(ze.length>0){tt&&at&&t.texStorage2D(i.TEXTURE_2D,Le,Fe,ze[0].width,ze[0].height);for(let ge=0,De=ze.length;ge<De;ge++)Be=ze[ge],tt?Z&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Be.width,Be.height,Ne,Ze,Be.data):t.texImage2D(i.TEXTURE_2D,ge,Fe,Be.width,Be.height,0,Ne,Ze,Be.data);P.generateMipmaps=!1}else tt?(at&&t.texStorage2D(i.TEXTURE_2D,Le,Fe,me.width,me.height),Z&&J(P,me,Ne,Ze)):t.texImage2D(i.TEXTURE_2D,0,Fe,me.width,me.height,0,Ne,Ze,me.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){tt&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Fe,ze[0].width,ze[0].height,me.depth);for(let ge=0,De=ze.length;ge<De;ge++)if(Be=ze[ge],P.format!==jn)if(Ne!==null)if(tt){if(Z)if(P.layerUpdates.size>0){let Ve=t0(Be.width,Be.height,P.format,P.type);for(let Re of P.layerUpdates){let nt=Be.data.subarray(Re*Ve/Be.data.BYTES_PER_ELEMENT,(Re+1)*Ve/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Re,Be.width,Be.height,1,Ne,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Be.width,Be.height,me.depth,Ne,Be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Fe,Be.width,Be.height,me.depth,0,Be.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Be.width,Be.height,me.depth,Ne,Ze,Be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Fe,Be.width,Be.height,me.depth,0,Ne,Ze,Be.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{tt&&at&&t.texStorage2D(i.TEXTURE_2D,Le,Fe,ze[0].width,ze[0].height);for(let ge=0,De=ze.length;ge<De;ge++)Be=ze[ge],P.format!==jn?Ne!==null?tt?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Be.width,Be.height,Ne,Be.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Fe,Be.width,Be.height,0,Be.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?Z&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Be.width,Be.height,Ne,Ze,Be.data):t.texImage2D(i.TEXTURE_2D,ge,Fe,Be.width,Be.height,0,Ne,Ze,Be.data)}else if(P.isDataArrayTexture)if(tt){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Fe,me.width,me.height,me.depth),Z)if(P.layerUpdates.size>0){let ge=t0(me.width,me.height,P.format,P.type);for(let De of P.layerUpdates){let Ve=me.data.subarray(De*ge/me.data.BYTES_PER_ELEMENT,(De+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,me.width,me.height,1,Ne,Ze,Ve)}P.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ne,Ze,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,me.width,me.height,me.depth,0,Ne,Ze,me.data);else if(P.isData3DTexture)tt?(at&&t.texStorage3D(i.TEXTURE_3D,Le,Fe,me.width,me.height,me.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ne,Ze,me.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,me.width,me.height,me.depth,0,Ne,Ze,me.data);else if(P.isFramebufferTexture){if(at)if(tt)t.texStorage2D(i.TEXTURE_2D,Le,Fe,me.width,me.height);else{let ge=me.width,De=me.height;for(let Ve=0;Ve<Le;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,Fe,ge,De,0,Ne,Ze,null),ge>>=1,De>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let ge=i.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),me.parentNode!==ge){ge.appendChild(me),p.add(P),ge.onpaint=De=>{let Ve=De.changedElements;for(let Re of p)Ve.includes(Re.image)&&(Re.needsUpdate=!0)},ge.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,me);else{let Ve=i.RGBA,Re=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ve,Re,nt,me)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(tt&&at){let ge=K(ze[0]);t.texStorage2D(i.TEXTURE_2D,Le,Fe,ge.width,ge.height)}for(let ge=0,De=ze.length;ge<De;ge++)Be=ze[ge],tt?Z&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ne,Ze,Be):t.texImage2D(i.TEXTURE_2D,ge,Fe,Ne,Ze,Be);P.generateMipmaps=!1}else if(tt){if(at){let ge=K(me);t.texStorage2D(i.TEXTURE_2D,Le,Fe,ge.width,ge.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,Ze,me)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Ne,Ze,me);f(P)&&d(Y),ve.__version=ue.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Pe(N,P,W){if(P.image.length!==6)return;let Y=Me(N,P),Q=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let ue=n.get(Q);if(Q.version!==ue.__version||Y===!0){t.activeTexture(i.TEXTURE0+W);let ve=It.getPrimaries(It.workingColorSpace),he=P.colorSpace===ai?null:It.getPrimaries(P.colorSpace),me=P.colorSpace===ai||ve===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ne=P.isCompressedTexture||P.image[0].isCompressedTexture,Ze=P.image[0]&&P.image[0].isDataTexture,Fe=[];for(let Re=0;Re<6;Re++)!Ne&&!Ze?Fe[Re]=c(P.image[Re],!0,s.maxCubemapSize):Fe[Re]=Ze?P.image[Re].image:P.image[Re],Fe[Re]=be(P,Fe[Re]);let Be=Fe[0],ze=r.convert(P.format,P.colorSpace),tt=r.convert(P.type),at=v(P.internalFormat,ze,tt,P.normalized,P.colorSpace),Z=P.isVideoTexture!==!0,Le=ue.__version===void 0||Y===!0,ge=Q.dataReady,De=T(P,Be);Ae(i.TEXTURE_CUBE_MAP,P);let Ve;if(Ne){Z&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,at,Be.width,Be.height);for(let Re=0;Re<6;Re++){Ve=Fe[Re].mipmaps;for(let nt=0;nt<Ve.length;nt++){let je=Ve[nt];P.format!==jn?ze!==null?Z?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,0,0,je.width,je.height,ze,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,at,je.width,je.height,0,je.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,0,0,je.width,je.height,ze,tt,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt,at,je.width,je.height,0,ze,tt,je.data)}}}else{if(Ve=P.mipmaps,Z&&Le){Ve.length>0&&De++;let Re=K(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,at,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Ze){Z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Fe[Re].width,Fe[Re].height,ze,tt,Fe[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,at,Fe[Re].width,Fe[Re].height,0,ze,tt,Fe[Re].data);for(let nt=0;nt<Ve.length;nt++){let Gt=Ve[nt].image[Re].image;Z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,0,0,Gt.width,Gt.height,ze,tt,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,at,Gt.width,Gt.height,0,ze,tt,Gt.data)}}else{Z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ze,tt,Fe[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,at,ze,tt,Fe[Re]);for(let nt=0;nt<Ve.length;nt++){let je=Ve[nt];Z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,0,0,ze,tt,je.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,nt+1,at,ze,tt,je.image[Re])}}}f(P)&&d(i.TEXTURE_CUBE_MAP),ue.__version=Q.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function re(N,P,W,Y,Q,ue){let ve=r.convert(W.format,W.colorSpace),he=r.convert(W.type),me=v(W.internalFormat,ve,he,W.normalized,W.colorSpace),Ne=n.get(P),Ze=n.get(W);if(Ze.__renderTarget=P,!Ne.__hasExternalTextures){let Fe=Math.max(1,P.width>>ue),Be=Math.max(1,P.height>>ue);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,me,Fe,Be,P.depth,0,ve,he,null):t.texImage2D(Q,ue,me,Fe,Be,0,ve,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ne(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,Ze.__webglTexture,0,ie(P)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,Ze.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(N,P,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),P.depthBuffer){let Y=P.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,ue=b(P.stencilBuffer,Q),ve=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ne(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(P),ue,P.width,P.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(P),ue,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ue,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,N)}else{let Y=P.textures;for(let Q=0;Q<Y.length;Q++){let ue=Y[Q],ve=r.convert(ue.format,ue.colorSpace),he=r.convert(ue.type),me=v(ue.internalFormat,ve,he,ue.normalized,ue.colorSpace);ne(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(P),me,P.width,P.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(P),me,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,me,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(N,P,W){let Y=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(P.depthTexture);if(Q.__renderTarget=P,(!Q.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,P.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,P.depthTexture);let Ne=r.convert(P.depthTexture.format),Ze=r.convert(P.depthTexture.type),Fe;P.depthTexture.format===ps?Fe=i.DEPTH_COMPONENT24:P.depthTexture.format===ar&&(Fe=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Fe,P.width,P.height,0,Ne,Ze,null)}}else H(P.depthTexture,0);let ue=Q.__webglTexture,ve=ie(P),he=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,me=P.depthTexture.format===ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===ps)ne(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,he,ue,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,me,he,ue,0);else if(P.depthTexture.format===ar)ne(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,he,ue,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,me,he,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(N){let P=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){let Y=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),Y){let Q=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),P.__depthDisposeCallback=Q}P.__boundDepthTexture=Y}if(N.depthTexture&&!P.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)Oe(P.__webglFramebuffer[Y],N,Y);else{let Y=N.texture.mipmaps;Y&&Y.length>0?Oe(P.__webglFramebuffer[0],N,0):Oe(P.__webglFramebuffer,N,0)}else if(W){P.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[Y]),P.__webglDepthbuffer[Y]===void 0)P.__webglDepthbuffer[Y]=i.createRenderbuffer(),ye(P.__webglDepthbuffer[Y],N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=P.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}else{let Y=N.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),ye(P.__webglDepthbuffer,N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(N,P,W){let Y=n.get(N);P!==void 0&&re(Y.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ke(N)}function He(N){let P=N.texture,W=n.get(N),Y=n.get(P);N.addEventListener("dispose",_);let Q=N.textures,ue=N.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=P.version,o.memory.textures++),ue){W.__webglFramebuffer=[];for(let he=0;he<6;he++)if(P.mipmaps&&P.mipmaps.length>0){W.__webglFramebuffer[he]=[];for(let me=0;me<P.mipmaps.length;me++)W.__webglFramebuffer[he][me]=i.createFramebuffer()}else W.__webglFramebuffer[he]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){W.__webglFramebuffer=[];for(let he=0;he<P.mipmaps.length;he++)W.__webglFramebuffer[he]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ve)for(let he=0,me=Q.length;he<me;he++){let Ne=n.get(Q[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ne(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){let me=Q[he];W.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[he]);let Ne=r.convert(me.format,me.colorSpace),Ze=r.convert(me.type),Fe=v(me.internalFormat,Ne,Ze,me.normalized,me.colorSpace,N.isXRRenderTarget===!0),Be=ie(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Fe,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,W.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,P);for(let he=0;he<6;he++)if(P.mipmaps&&P.mipmaps.length>0)for(let me=0;me<P.mipmaps.length;me++)re(W.__webglFramebuffer[he][me],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else re(W.__webglFramebuffer[he],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);f(P)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let he=0,me=Q.length;he<me;he++){let Ne=Q[he],Ze=n.get(Ne),Fe=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Fe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Ze.__webglTexture),Ae(Fe,Ne),re(W.__webglFramebuffer,N,Ne,i.COLOR_ATTACHMENT0+he,Fe,0),f(Ne)&&d(Fe)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),Ae(he,P),P.mipmaps&&P.mipmaps.length>0)for(let me=0;me<P.mipmaps.length;me++)re(W.__webglFramebuffer[me],N,P,i.COLOR_ATTACHMENT0,he,me);else re(W.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0,he,0);f(P)&&d(he),t.unbindTexture()}N.depthBuffer&&ke(N)}function te(N){let P=N.textures;for(let W=0,Y=P.length;W<Y;W++){let Q=P[W];if(f(Q)){let ue=g(N),ve=n.get(Q).__webglTexture;t.bindTexture(ue,ve),d(ue),t.unbindTexture()}}}let de=[],j=[];function ce(N){if(N.samples>0){if(ne(N)===!1){let P=N.textures,W=N.width,Y=N.height,Q=i.COLOR_BUFFER_BIT,ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(N),he=P.length>1;if(he)for(let Ne=0;Ne<P.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let me=N.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ne=0;Ne<P.length;Ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]);let Ze=n.get(P[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,Q,i.NEAREST),a===!0&&(de.length=0,j.length=0,de.push(i.COLOR_ATTACHMENT0+Ne),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(de.push(ue),j.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Ne=0;Ne<P.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]);let Ze=n.get(P[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&a){let P=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function ie(N){return Math.min(s.maxSamples,N.samples)}function ne(N){let P=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function F(N){let P=o.render.frame;h.get(N)!==P&&(h.set(N,P),N.update())}function be(N,P){let W=N.colorSpace,Y=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Ra&&W!==ai&&(It.getTransfer(W)===Vt?(Y!==jn||Q!==Jn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",W)),P}function K(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.getTextureUnits=R,this.setTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=Te,this.setupRenderTarget=He,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iM(i,e){function t(n,s=ai){let r,o=It.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===fu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===du)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wf)return i.BYTE;if(n===Gf)return i.SHORT;if(n===No)return i.UNSIGNED_SHORT;if(n===hu)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===Oi)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Yf)return i.ALPHA;if(n===Zf)return i.RGB;if(n===jn)return i.RGBA;if(n===ps)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===lr)return i.RED;if(n===pu)return i.RED_INTEGER;if(n===cr)return i.RG;if(n===mu)return i.RG_INTEGER;if(n===gu)return i.RGBA_INTEGER;if(n===al||n===ll||n===cl||n===ul)if(o===Vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ul)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vu||n===xu||n===yu||n===_u)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_u)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bu||n===Mu||n===Su||n===wu||n===Tu||n===hl||n===Eu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bu||n===Mu)return o===Vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Su)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wu)return r.COMPRESSED_R11_EAC;if(n===Tu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hl)return r.COMPRESSED_RG11_EAC;if(n===Eu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Fu||n===Uu||n===Bu||n===Ou||n===ku||n===zu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Au)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ru)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Iu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Du)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ou)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ku)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zu)return o===Vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hu||n===Vu||n===Wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Hu)return o===Vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gu||n===Xu||n===fl||n===qu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
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

}`,_0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ft({vertexShader:sM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},b0=class extends ms{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",a=1,u=null,h=null,p=null,m=null,x=null,y=null,M=typeof XRWebGLBinding<"u",c=new _0,f={},d=t.getContextAttributes(),g=null,v=null,b=[],T=[],w=new Ie,_=null,S=null,E=new zn;E.viewport=new mt;let A=new zn;A.viewport=new mt;let C=[E,A],I=new ou,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=b[G];return J===void 0&&(J=new Mo,b[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=b[G];return J===void 0&&(J=new Mo,b[G]=J),J.getGripSpace()},this.getHand=function(G){let J=b[G];return J===void 0&&(J=new Mo,b[G]=J),J.getHandSpace()};function D(G){let J=T.indexOf(G.inputSource);if(J===-1)return;let xe=b[J];xe!==void 0&&(xe.update(G.inputSource,G.frame,u||o),xe.dispatchEvent({type:G.type,data:G.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let G=0;G<b.length;G++){let J=T[G];J!==null&&(T[G]=null,b[G].disconnect(J))}R=null,L=null,c.reset();for(let G in f)delete f[G];if(e.setRenderTarget(g),x=null,m=null,p=null,s=null,v=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),S!==null){let G=S.camera;G.fov=S.fov,G.zoom=S.zoom,G.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,n.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Pe=null,re=null;d.depth&&(re=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=d.stencil?ar:ps,Pe=d.stencil?Fo:ls);let ye={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(ye),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new Yt(m.textureWidth,m.textureHeight,{format:jn,type:Jn,depthTexture:new er(m.textureWidth,m.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let xe={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new Yt(x.framebufferWidth,x.framebufferHeight,{format:jn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),u=null,o=await s.requestReferenceSpace(l),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function H(G){for(let J=0;J<G.removed.length;J++){let xe=G.removed[J],Pe=T.indexOf(xe);Pe>=0&&(T[Pe]=null,b[Pe].disconnect(xe))}for(let J=0;J<G.added.length;J++){let xe=G.added[J],Pe=T.indexOf(xe);if(Pe===-1){for(let ye=0;ye<b.length;ye++)if(ye>=T.length){T.push(xe),Pe=ye;break}else if(T[ye]===null){T[ye]=xe,Pe=ye;break}if(Pe===-1)break}let re=b[Pe];re&&re.connect(xe)}}let B=new z,V=new z;function k(G,J,xe){B.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(xe.matrixWorld);let Pe=B.distanceTo(V),re=J.projectionMatrix.elements,ye=xe.projectionMatrix.elements,Oe=re[14]/(re[10]-1),ke=re[14]/(re[10]+1),Te=(re[9]+1)/re[5],He=(re[9]-1)/re[5],te=(re[8]-1)/re[0],de=(ye[8]+1)/ye[0],j=Oe*te,ce=Oe*de,ie=Pe/(-te+de),ne=ie*-te;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),re[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let F=Oe+ie,be=ke+ie,K=j-ne,N=ce+(Pe-ne),P=Te*ke/be*F,W=He*ke/be*F;G.projectionMatrix.makePerspective(K,N,P,W,F,be),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function q(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let J=G.near,xe=G.far;c.texture!==null&&(c.depthNear>0&&(J=c.depthNear),c.depthFar>0&&(xe=c.depthFar)),I.near=A.near=E.near=J,I.far=A.far=E.far=xe,(R!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,L=I.far),I.layers.mask=G.layers.mask|6,E.layers.mask=I.layers.mask&-5,A.layers.mask=I.layers.mask&-3;let Pe=G.parent,re=I.cameras;q(I,Pe);for(let ye=0;ye<re.length;ye++)q(re[ye],Pe);re.length===2?k(I,E,A):I.projectionMatrix.copy(E.projectionMatrix),S===null&&G.isPerspectiveCamera&&(S={camera:G,fov:G.fov,zoom:G.zoom}),ee(G,I,Pe)};function ee(G,J,xe){xe===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(xe.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Pa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(m===null&&x===null))return a},this.setFoveation=function(G){a=G,m!==null&&(m.fixedFoveation=G),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=G)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(I)},this.getCameraTexture=function(G){return f[G]};let we=null;function Ae(G,J){if(h=J.getViewerPose(u||o),y=J,h!==null){let xe=h.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let Pe=!1;xe.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let ke=0;ke<xe.length;ke++){let Te=xe[ke],He=null;if(x!==null)He=x.getViewport(Te);else{let de=p.getViewSubImage(m,Te);He=de.viewport,ke===0&&(e.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(v))}let te=C[ke];te===void 0&&(te=new zn,te.layers.enable(ke),te.viewport=new mt,C[ke]=te),te.matrix.fromArray(Te.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Te.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(He.x,He.y,He.width,He.height),ke===0&&(I.matrix.copy(te.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(te)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let ke=p.getDepthInformation(xe[0]);ke&&ke.isValid&&ke.texture&&c.init(ke,s.renderState)}if(re&&re.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let ke=0;ke<xe.length;ke++){let Te=xe[ke].camera;if(Te){let He=f[Te];He||(He=new ka,f[Te]=He);let te=p.getCameraImage(Te);He.sourceTexture=te}}}}for(let xe=0;xe<b.length;xe++){let Pe=T[xe],re=b[xe];Pe!==null&&re!==void 0&&re.update(Pe,J,u||o)}we&&we(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),y=null}let Me=new wm;Me.setAnimationLoop(Ae),this.setAnimationLoop=function(G){we=G},this.dispose=function(){}}},oM=new Je,Pm=new gt;Pm.set(-1,0,0,0,1,0,0,0,1);function aM(i,e){function t(c,f){c.matrixAutoUpdate===!0&&c.updateMatrix(),f.value.copy(c.matrix)}function n(c,f){f.color.getRGB(c.fogColor.value,jf(i)),f.isFog?(c.fogNear.value=f.near,c.fogFar.value=f.far):f.isFogExp2&&(c.fogDensity.value=f.density)}function s(c,f,d,g,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(c,f):f.isMeshLambertMaterial?(r(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(c,f),p(c,f)):f.isMeshPhongMaterial?(r(c,f),h(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(c,f),m(c,f),f.isMeshPhysicalMaterial&&x(c,f,v)):f.isMeshMatcapMaterial?(r(c,f),y(c,f)):f.isMeshDepthMaterial?r(c,f):f.isMeshDistanceMaterial?(r(c,f),M(c,f)):f.isMeshNormalMaterial?r(c,f):f.isLineBasicMaterial?(o(c,f),f.isLineDashedMaterial&&l(c,f)):f.isPointsMaterial?a(c,f,d,g):f.isSpriteMaterial?u(c,f):f.isShadowMaterial?(c.color.value.copy(f.color),c.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(c,f){c.opacity.value=f.opacity,f.color&&c.diffuse.value.copy(f.color),f.emissive&&c.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.bumpMap&&(c.bumpMap.value=f.bumpMap,t(f.bumpMap,c.bumpMapTransform),c.bumpScale.value=f.bumpScale,f.side===Hn&&(c.bumpScale.value*=-1)),f.normalMap&&(c.normalMap.value=f.normalMap,t(f.normalMap,c.normalMapTransform),c.normalScale.value.copy(f.normalScale),f.side===Hn&&c.normalScale.value.negate()),f.displacementMap&&(c.displacementMap.value=f.displacementMap,t(f.displacementMap,c.displacementMapTransform),c.displacementScale.value=f.displacementScale,c.displacementBias.value=f.displacementBias),f.emissiveMap&&(c.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,c.emissiveMapTransform)),f.specularMap&&(c.specularMap.value=f.specularMap,t(f.specularMap,c.specularMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest);let d=e.get(f),g=d.envMap,v=d.envMapRotation;g&&(c.envMap.value=g,c.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(v)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(Pm),c.reflectivity.value=f.reflectivity,c.ior.value=f.ior,c.refractionRatio.value=f.refractionRatio),f.lightMap&&(c.lightMap.value=f.lightMap,c.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,c.lightMapTransform)),f.aoMap&&(c.aoMap.value=f.aoMap,c.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,c.aoMapTransform))}function o(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform))}function l(c,f){c.dashSize.value=f.dashSize,c.totalSize.value=f.dashSize+f.gapSize,c.scale.value=f.scale}function a(c,f,d,g){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.size.value=f.size*d,c.scale.value=g*.5,f.map&&(c.map.value=f.map,t(f.map,c.uvTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function u(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.rotation.value=f.rotation,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function h(c,f){c.specular.value.copy(f.specular),c.shininess.value=Math.max(f.shininess,1e-4)}function p(c,f){f.gradientMap&&(c.gradientMap.value=f.gradientMap)}function m(c,f){c.metalness.value=f.metalness,f.metalnessMap&&(c.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,c.metalnessMapTransform)),c.roughness.value=f.roughness,f.roughnessMap&&(c.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,c.roughnessMapTransform)),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)}function x(c,f,d){c.ior.value=f.ior,f.sheen>0&&(c.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),c.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(c.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,c.sheenColorMapTransform)),f.sheenRoughnessMap&&(c.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,c.sheenRoughnessMapTransform))),f.clearcoat>0&&(c.clearcoat.value=f.clearcoat,c.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(c.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,c.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(c.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Hn&&c.clearcoatNormalScale.value.negate())),f.dispersion>0&&(c.dispersion.value=f.dispersion),f.retroreflectivity>0&&(c.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(c.iridescence.value=f.iridescence,c.iridescenceIOR.value=f.iridescenceIOR,c.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(c.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,c.iridescenceMapTransform)),f.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),f.transmission>0&&(c.transmission.value=f.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),f.transmissionMap&&(c.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,c.transmissionMapTransform)),c.thickness.value=f.thickness,f.thicknessMap&&(c.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=f.attenuationDistance,c.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(c.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(c.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=f.specularIntensity,c.specularColor.value.copy(f.specularColor),f.specularColorMap&&(c.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,c.specularColorMapTransform)),f.specularIntensityMap&&(c.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,c.specularIntensityMapTransform))}function y(c,f){f.matcap&&(c.matcap.value=f.matcap)}function M(c,f){let d=e.get(f).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lM(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(v,b){let T=b.program;n.uniformBlockBinding(v,T)}function u(v,b){let T=s[v.id];T===void 0&&(c(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",d));let w=b.program;n.updateUBOMapping(v,w);let _=e.render.frame;r[v.id]!==_&&(m(v),r[v.id]=_)}function h(v){let b=p();v.__bindingPointIndex=b;let T=i.createBuffer(),w=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function p(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){let b=s[v.id],T=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,S=T.length;_<S;_++){let E=T[_];if(Array.isArray(E))for(let A=0,C=E.length;A<C;A++)x(E[A],_,A,w);else x(E,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(v,b,T,w){if(M(v,b,T,w)===!0){let _=v.__offset,S=v.value;if(Array.isArray(S)){let E=0;for(let A=0;A<S.length;A++){let C=S[A],I=f(C);y(C,v.__data,E),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(E+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function y(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function M(v,b,T,w){let _=v.value,S=b+"_"+T;if(w[S]===void 0)return typeof _=="number"||typeof _=="boolean"?w[S]=_:ArrayBuffer.isView(_)?w[S]=_.slice():w[S]=_.clone(),!0;{let E=w[S];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return w[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function c(v){let b=v.uniforms,T=0,w=16;for(let S=0,E=b.length;S<E;S++){let A=Array.isArray(b[S])?b[S]:[b[S]];for(let C=0,I=A.length;C<I;C++){let R=A[C],L=Array.isArray(R.value)?R.value:[R.value];for(let D=0,O=L.length;D<O;D++){let H=L[D],B=f(H),V=T%w,k=V%B.boundary,q=V+k;T+=k,q!==0&&w-q<B.storage&&(T+=w-q),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=T,T+=B.storage}}}let _=T%w;return _>0&&(T+=w-_),v.__size=T,v.__cache={},this}function f(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",v),b}function d(v){let b=v.target;b.removeEventListener("dispose",d);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:a,update:u,dispose:g}}var cM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ys=null;function uM(){return ys===null&&(ys=new ss(cM,16,16,cr,Rn),ys.name="DFG_LUT",ys.minFilter=Ot,ys.magFilter=Ot,ys.wrapS=ds,ys.wrapT=ds,ys.generateMipmaps=!1,ys.needsUpdate=!0),ys}var eh=class{constructor(e={}){let{canvas:t=qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:x=Jn}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=o;let M=x,c=new Set([gu,mu,pu]),f=new Set([Jn,ls,No,Fo,fu,du]),d=new Uint32Array(4),g=new Int32Array(4),v=new z,b=null,T=null,w=[],_=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,A=!1,C=null,I=null,R=null,L=null;this._outputColorSpace=qt;let D=0,O=0,H=null,B=-1,V=null,k=new mt,q=new mt,ee=null,we=new pe(0),Ae=0,Me=t.width,G=t.height,J=1,xe=null,Pe=null,re=new mt(0,0,Me,G),ye=new mt(0,0,Me,G),Oe=!1,ke=new wo,Te=!1,He=!1,te=new Je,de=new z,j=new mt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function ne(){return H===null?J:1}let F=n;function be(U,$){return t.getContext(U,$)}let K,N,P,W,Y,Q,ue,ve,he,me,Ne,Ze,Fe,Be,ze,tt,at,Z,Le,ge,De,Ve,Re;try{let U={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",hi,!1),F===null){let $="webgl2";if(F=be($,U),F===null)throw be($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(U){throw t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",hi,!1),pt("WebGLRenderer: "+U.message),U}function nt(){K=new v_(F),K.init(),De=new iM(F,K),N=new a_(F,K,e,De),P=new tM(F,K),N.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),I=F.createFramebuffer(),R=F.createFramebuffer(),L=F.createFramebuffer(),W=new __(F),Y=new Hb,Q=new nM(F,K,P,Y,N,De,W),ue=new g_(E),ve=new Mx(F),Ve=new r_(F,ve),he=new x_(F,ve,W,Ve),me=new M_(F,he,ve,Ve,W),Z=new b_(F,N,Q),ze=new l_(Y),Ne=new zb(E,ue,K,N,Ve,ze),Ze=new aM(E,Y),Fe=new Wb,Be=new Kb(K),at=new s_(E,ue,P,me,y,a),tt=new eM(E,me,N),Re=new lM(F,W,N,P),Le=new o_(F,K,W),ge=new y_(F,K,W),W.programs=Ne.programs,E.capabilities=N,E.extensions=K,E.properties=Y,E.renderLists=Fe,E.shadowMap=tt,E.state=P,E.info=W}M!==Jn&&(S=new w_(M,t.width,t.height,l,s,r));let je=new b0(E,F);this.xr=je,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let U=K.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=K.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(U){U!==void 0&&(J=U,this.setSize(Me,G,!1))},this.getSize=function(U){return U.set(Me,G)},this.setSize=function(U,$,fe=!0){if(je.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=U,G=$,t.width=Math.floor(U*J),t.height=Math.floor($*J),fe===!0&&(t.style.width=U+"px",t.style.height=$+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,U,$)},this.getDrawingBufferSize=function(U){return U.set(Me*J,G*J).floor()},this.setDrawingBufferSize=function(U,$,fe){Me=U,G=$,J=fe,t.width=Math.floor(U*fe),t.height=Math.floor($*fe),this.setViewport(0,0,U,$)},this.setEffects=function(U){if(M===Jn){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let $=0;$<U.length;$++)if(U[$].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(k)},this.getViewport=function(U){return U.copy(re)},this.setViewport=function(U,$,fe,le){U.isVector4?re.set(U.x,U.y,U.z,U.w):re.set(U,$,fe,le),P.viewport(k.copy(re).multiplyScalar(J).round())},this.getScissor=function(U){return U.copy(ye)},this.setScissor=function(U,$,fe,le){U.isVector4?ye.set(U.x,U.y,U.z,U.w):ye.set(U,$,fe,le),P.scissor(q.copy(ye).multiplyScalar(J).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(U){P.setScissorTest(Oe=U)},this.setOpaqueSort=function(U){xe=U},this.setTransparentSort=function(U){Pe=U},this.getClearColor=function(U){return U.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(U=!0,$=!0,fe=!0){let le=0;if(U){let se=!1;if(H!==null){let Ge=H.texture.format;se=c.has(Ge)}if(se){let Ge=H.texture.type,Ye=f.has(Ge),We=at.getClearColor(),Qe=at.getClearAlpha(),et=We.r,lt=We.g,ot=We.b;Ye?(d[0]=et,d[1]=lt,d[2]=ot,d[3]=Qe,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=et,g[1]=lt,g[2]=ot,g[3]=Qe,F.clearBufferiv(F.COLOR,0,g))}else le|=F.COLOR_BUFFER_BIT}$&&(le|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(le|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&F.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),C=U},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",hi,!1),at.dispose(),Fe.dispose(),Be.dispose(),Y.dispose(),ue.dispose(),me.dispose(),Ve.dispose(),Re.dispose(),Ne.dispose(),je.dispose(),je.removeEventListener("sessionstart",zl),je.removeEventListener("sessionend",Hl),Ts.stop()};function Gt(U){U.preventDefault(),$f("WebGLRenderer: Context Lost."),A=!0}function Ft(){$f("WebGLRenderer: Context Restored."),A=!1;let U=W.autoReset,$=tt.enabled,fe=tt.autoUpdate,le=tt.needsUpdate,se=tt.type;nt(),W.autoReset=U,tt.enabled=$,tt.autoUpdate=fe,tt.needsUpdate=le,tt.type=se}function hi(U){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Gn(U){let $=U.target;$.removeEventListener("dispose",Gn),xr($)}function xr(U){la(U),Y.remove(U)}function la(U){let $=Y.get(U).programs;$!==void 0&&($.forEach(function(fe){Ne.releaseProgram(fe)}),U.isShaderMaterial&&Ne.releaseShaderCache(U))}this.renderBufferDirect=function(U,$,fe,le,se,Ge){$===null&&($=ce);let Ye=se.isMesh&&se.matrixWorld.determinantAffine()<0,We=ca(U,$,fe,le,se);P.setMaterial(le,Ye);let Qe=fe.index,et=1;if(le.wireframe===!0){if(Qe=he.getWireframeAttribute(fe),Qe===void 0)return;et=2}let lt=fe.drawRange,ot=fe.attributes.position,$e=lt.start*et,Ut=(lt.start+lt.count)*et;Ge!==null&&($e=Math.max($e,Ge.start*et),Ut=Math.min(Ut,(Ge.start+Ge.count)*et)),Qe!==null?($e=Math.max($e,0),Ut=Math.min(Ut,Qe.count)):ot!=null&&($e=Math.max($e,0),Ut=Math.min(Ut,ot.count));let mn=Ut-$e;if(mn<0||mn===1/0)return;Ve.setup(se,le,We,fe,Qe);let Xt,zt=Le;if(Qe!==null&&(Xt=ve.get(Qe),zt=ge,zt.setIndex(Xt)),se.isMesh)le.wireframe===!0?(P.setLineWidth(le.wireframeLinewidth*ne()),zt.setMode(F.LINES)):zt.setMode(F.TRIANGLES);else if(se.isLine){let Cn=le.linewidth;Cn===void 0&&(Cn=1),P.setLineWidth(Cn*ne()),se.isLineSegments?zt.setMode(F.LINES):se.isLineLoop?zt.setMode(F.LINE_LOOP):zt.setMode(F.LINE_STRIP)}else se.isPoints?zt.setMode(F.POINTS):se.isSprite&&zt.setMode(F.TRIANGLES);if(se.isBatchedMesh)if(K.get("WEBGL_multi_draw"))zt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let Cn=se._multiDrawStarts,qe=se._multiDrawCounts,bt=se._multiDrawCount,At=Qe?ve.get(Qe).bytesPerElement:1,ni=Y.get(le).currentProgram.getUniforms();for(let Mi=0;Mi<bt;Mi++)ni.setValue(F,"_gl_DrawID",Mi),zt.render(Cn[Mi]/At,qe[Mi])}else if(se.isInstancedMesh)zt.renderInstances($e,mn,se.count);else if(fe.isInstancedBufferGeometry){let Cn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,qe=Math.min(fe.instanceCount,Cn);zt.renderInstances($e,mn,qe)}else zt.render($e,mn)};function qr(U,$,fe,le){C!==null&&U.isNodeMaterial&&C.setObject(le,U),Te===!0&&ze.setState(U,fe,!1),U.transparent===!0&&U.side===bn&&U.forceSinglePass===!1?(U.side=Hn,U.needsUpdate=!0,hs(U,$,le),U.side=xs,U.needsUpdate=!0,hs(U,$,le),U.side=bn):hs(U,$,le)}this.compile=function(U,$,fe=null){fe===null&&(fe=U),C!==null&&C.renderStart(U,$,fe),T=Be.get(fe),T.init($),_.push(T),fe.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(T.pushLight(se),se.castShadow&&T.pushShadow(se))}),U!==fe&&U.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(T.pushLight(se),se.castShadow&&T.pushShadow(se))}),T.setupLights(),C!==null&&C.updateLights(T.state.lightsArray),He=this.localClippingEnabled,Te=ze.init(this.clippingPlanes,He),Te===!0&&ze.setGlobalState(this.clippingPlanes,$),C!==null&&tt.render(T.state.shadowsArray,fe,$);let le=new Set;return U.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Ge=se.material;if(Ge)if(Array.isArray(Ge))for(let Ye=0;Ye<Ge.length;Ye++){let We=Ge[Ye];qr(We,fe,$,se),le.add(We)}else qr(Ge,fe,$,se),le.add(Ge)}),T=_.pop(),C!==null&&C.renderEnd(),le},this.compileAsync=function(U,$,fe=null){let le=this.compile(U,$,fe);return new Promise(se=>{function Ge(){if(le.forEach(function(Ye){let Qe=Y.get(Ye).currentProgram;(Qe===void 0||Qe.isReady())&&le.delete(Ye)}),le.size===0){se(U);return}setTimeout(Ge,10)}K.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let oe=null;function fi(U){oe&&oe(U)}function zl(){Ts.stop()}function Hl(){Ts.start()}let Ts=new wm;Ts.setAnimationLoop(fi),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(U){oe=U,je.setAnimationLoop(U),U===null?Ts.stop():Ts.start()},je.addEventListener("sessionstart",zl),je.addEventListener("sessionend",Hl),this.render=function(U,$){if($!==void 0&&$.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C!==null&&C.renderStart(U,$);let fe=je.enabled===!0&&je.isPresenting===!0,le=S!==null&&(H===null||fe)&&S.begin(E,H);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera($),$=je.getCamera()),U.isScene===!0&&U.onBeforeRender(E,U,$,H),T=Be.get(U,_.length),T.init($),T.state.textureUnits=Q.getTextureUnits(),_.push(T),te.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ke.setFromProjectionMatrix(te,is,$.reversedDepth),He=this.localClippingEnabled,Te=ze.init(this.clippingPlanes,He),b=Fe.get(U,w.length),b.init(),w.push(b),je.enabled===!0&&je.isPresenting===!0){let Ye=E.xr.getDepthSensingMesh();Ye!==null&&Et(Ye,$,-1/0,E.sortObjects)}Et(U,$,0,E.sortObjects),b.finish(),C!==null&&C.updateLights(T.state.lightsArray),E.sortObjects===!0&&b.sort(xe,Pe),ie=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,ie&&at.addToRenderList(b,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&ze.beginShadows();let se=T.state.shadowsArray;if(tt.render(se,U,$),Te===!0&&ze.endShadows(),(le&&S.hasRenderPass())===!1){let Ye=b.opaque,We=b.transmissive;if(T.setupLights(),$.isArrayCamera){let Qe=$.cameras;if(We.length>0)for(let et=0,lt=Qe.length;et<lt;et++){let ot=Qe[et];kt(Ye,We,U,ot)}ie&&at.render(U);for(let et=0,lt=Qe.length;et<lt;et++){let ot=Qe[et];wt(b,U,ot,ot.viewport)}}else We.length>0&&kt(Ye,We,U,$),ie&&at.render(U),wt(b,U,$)}H!==null&&O===0&&(Q.updateMultisampleRenderTarget(H),Q.updateRenderTargetMipmap(H)),le&&S.end(E),U.isScene===!0&&U.onAfterRender(E,U,$),Ve.resetDefaultState(),B=-1,V=null,_.pop(),_.length>0?(T=_[_.length-1],Q.setTextureUnits(T.state.textureUnits),Te===!0&&ze.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,C!==null&&C.renderEnd()};function Et(U,$,fe,le){if(U.visible===!1)return;if(U.layers.test($.layers)){if(U.isGroup)fe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update($);else if(U.isLightProbeGrid)T.pushLightProbeGrid(U);else if(U.isLight)T.pushLight(U),U.castShadow&&T.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(ke)){le&&j.setFromMatrixPosition(U.matrixWorld).applyMatrix4(te);let Ye=me.update(U),We=U.material;We.visible&&b.push(U,Ye,We,fe,j.z,null,$)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(ke))){let Ye=me.update(U),We=U.material;if(le&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),j.copy(U.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),j.copy(Ye.boundingSphere.center)),j.applyMatrix4(U.matrixWorld).applyMatrix4(te)),Array.isArray(We)){let Qe=Ye.groups;for(let et=0,lt=Qe.length;et<lt;et++){let ot=Qe[et],$e=We[ot.materialIndex];$e&&$e.visible&&b.push(U,Ye,$e,fe,j.z,ot,$)}}else We.visible&&b.push(U,Ye,We,fe,j.z,null,$)}}let Ge=U.children;for(let Ye=0,We=Ge.length;Ye<We;Ye++)Et(Ge[Ye],$,fe,le)}function wt(U,$,fe,le){let{opaque:se,transmissive:Ge,transparent:Ye}=U;T.setupLightsView(fe),Te===!0&&ze.setGlobalState(E.clippingPlanes,fe),le&&P.viewport(k.copy(le)),se.length>0&&Nt(se,$,fe),Ge.length>0&&Nt(Ge,$,fe),Ye.length>0&&Nt(Ye,$,fe),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function kt(U,$,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[le.id]===void 0){let $e=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[le.id]=new Yt(1,1,{generateMipmaps:!0,type:$e?Rn:Jn,minFilter:In,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}let Ge=T.state.transmissionRenderTarget[le.id],Ye=le.viewport||k;Ge.setSize(Ye.z*E.transmissionResolutionScale,Ye.w*E.transmissionResolutionScale);let We=E.getRenderTarget(),Qe=E.getActiveCubeFace(),et=E.getActiveMipmapLevel();E.setRenderTarget(Ge),E.getClearColor(we),Ae=E.getClearAlpha(),Ae<1&&E.setClearColor(16777215,.5),E.clear(),ie&&at.render(fe);let lt=E.toneMapping;E.toneMapping=as;let ot=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),T.setupLightsView(le),Te===!0&&ze.setGlobalState(E.clippingPlanes,le),Nt(U,fe,le),Q.updateMultisampleRenderTarget(Ge),Q.updateRenderTargetMipmap(Ge),K.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ut=0,mn=$.length;Ut<mn;Ut++){let Xt=$[Ut],{object:zt,geometry:Cn,material:qe,group:bt}=Xt;if(qe.side===bn&&zt.layers.test(le.layers)){let At=qe.side;qe.side=Hn,qe.needsUpdate=!0,Vl(zt,fe,le,Cn,qe,bt),qe.side=At,qe.needsUpdate=!0,$e=!0}}$e===!0&&(Q.updateMultisampleRenderTarget(Ge),Q.updateRenderTargetMipmap(Ge))}E.setRenderTarget(We,Qe,et),E.setClearColor(we,Ae),ot!==void 0&&(le.viewport=ot),E.toneMapping=lt}function Nt(U,$,fe){let le=$.isScene===!0?$.overrideMaterial:null;for(let se=0,Ge=U.length;se<Ge;se++){let Ye=U[se],{object:We,geometry:Qe,group:et}=Ye,lt=Ye.material;lt.allowOverride===!0&&le!==null&&(lt=le),We.layers.test(fe.layers)&&Vl(We,$,fe,Qe,lt,et)}}function Vl(U,$,fe,le,se,Ge){C!==null&&se.isNodeMaterial&&C.setObject(U,se),U.onBeforeRender(E,$,fe,le,se,Ge),U.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),se.onBeforeRender(E,$,fe,le,U,Ge),se.transparent===!0&&se.side===bn&&se.forceSinglePass===!1?(se.side=Hn,se.needsUpdate=!0,E.renderBufferDirect(fe,$,le,se,U,Ge),se.side=xs,se.needsUpdate=!0,E.renderBufferDirect(fe,$,le,se,U,Ge),se.side=bn):E.renderBufferDirect(fe,$,le,se,U,Ge),U.onAfterRender(E,$,fe,le,se,Ge)}function hs(U,$,fe){$.isScene!==!0&&($=ce);let le=Y.get(U),se=T.state.lights,Ge=T.state.shadowsArray,Ye=se.state.version,We=Ne.getParameters(U,se.state,Ge,$,fe,T.state.lightProbeGridArray),Qe=Ne.getProgramCacheKey(We),et=le.programs;le.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?$.environment:null,le.fog=$.fog;let lt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;le.envMap=ue.get(U.envMap||le.environment,lt),le.envMapRotation=le.environment!==null&&U.envMap===null?$.environmentRotation:U.envMapRotation,et===void 0&&(U.addEventListener("dispose",Gn),et=new Map,le.programs=et);let ot=et.get(Qe);if(ot!==void 0){if(le.currentProgram===ot&&le.lightsStateVersion===Ye)return Xn(U,We),ot}else We.uniforms=Ne.getUniforms(U),C!==null&&U.isNodeMaterial&&C.build(U,fe,We),U.onBeforeCompile(We,E),ot=Ne.acquireProgram(We,Qe),et.set(Qe,ot),le.uniforms=We.uniforms;let $e=le.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&($e.clippingPlanes=ze.uniform),Xn(U,We),le.needsLights=Nh(U),le.lightsStateVersion=Ye,le.needsLights&&($e.ambientLightColor.value=se.state.ambient,$e.lightProbe.value=se.state.probe,$e.sunLights.value=se.state.sun,$e.sunLightShadows.value=se.state.sunShadow,$e.directionalLights.value=se.state.directional,$e.directionalLightShadows.value=se.state.directionalShadow,$e.spotLights.value=se.state.spot,$e.spotLightShadows.value=se.state.spotShadow,$e.rectAreaLights.value=se.state.rectArea,$e.ltc_1.value=se.state.rectAreaLTC1,$e.ltc_2.value=se.state.rectAreaLTC2,$e.pointLights.value=se.state.point,$e.pointLightShadows.value=se.state.pointShadow,$e.hemisphereLights.value=se.state.hemi,$e.sunShadowMatrix.value=se.state.sunShadowMatrix,$e.sunShadowCascade.value=se.state.sunShadowCascade,$e.directionalShadowMatrix.value=se.state.directionalShadowMatrix,$e.spotLightMatrix.value=se.state.spotLightMatrix,$e.spotLightMap.value=se.state.spotLightMap,$e.pointShadowMatrix.value=se.state.pointShadowMatrix),le.lightProbeGrid=T.state.lightProbeGridArray.length>0,le.currentProgram=ot,le.uniformsList=null,ot}function Xs(U){if(U.uniformsList===null){let $=U.currentProgram.getUniforms();U.uniformsList=ko.seqWithValue($.seq,U.uniforms)}return U.uniformsList}function Xn(U,$){let fe=Y.get(U);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function Yr(U,$){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;v.setFromMatrixPosition($.matrixWorld);for(let fe=0,le=U.length;fe<le;fe++){let se=U[fe];if(se.texture!==null&&se.boundingBox.containsPoint(v))return se}return null}function ca(U,$,fe,le,se){$.isScene!==!0&&($=ce),Q.resetTextureUnits();let Ge=$.fog,Ye=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?$.environment:null,We=H===null?E.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:It.workingColorSpace,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,et=ue.get(le.envMap||Ye,Qe),lt=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ot=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),$e=!!fe.morphAttributes.position,Ut=!!fe.morphAttributes.normal,mn=!!fe.morphAttributes.color,Xt=as;le.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xt=E.toneMapping);let zt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Cn=zt!==void 0?zt.length:0,qe=Y.get(le),bt=T.state.lights;if(Te===!0&&(He===!0||U!==V)){let Bt=U===V&&le.id===B;ze.setState(le,U,Bt)}let At=!1;le.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==bt.state.version||qe.outputColorSpace!==We||se.isBatchedMesh&&qe.batching===!1||!se.isBatchedMesh&&qe.batching===!0||se.isBatchedMesh&&qe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&qe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&qe.instancing===!1||!se.isInstancedMesh&&qe.instancing===!0||se.isSkinnedMesh&&qe.skinning===!1||!se.isSkinnedMesh&&qe.skinning===!0||se.isInstancedMesh&&qe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&qe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&qe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&qe.instancingMorph===!1&&se.morphTexture!==null||qe.envMap!==et||le.fog===!0&&qe.fog!==Ge||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ze.numPlanes||qe.numIntersection!==ze.numIntersection)||qe.vertexAlphas!==lt||qe.vertexTangents!==ot||qe.morphTargets!==$e||qe.morphNormals!==Ut||qe.morphColors!==mn||qe.toneMapping!==Xt||qe.morphTargetsCount!==Cn||!!qe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,qe.__version=le.version);let ni=qe.currentProgram;At===!0&&(ni=hs(le,$,se),C&&le.isNodeMaterial&&C.onUpdateProgram(le,ni,qe));let Mi=!1,Zi=!1,qs=!1,Ht=ni.getUniforms(),Kt=qe.uniforms;if(P.useProgram(ni.program)&&(Mi=!0,Zi=!0,qs=!0),le.id!==B&&(B=le.id,Zi=!0),qe.needsLights){let Bt=Yr(T.state.lightProbeGridArray,se);qe.lightProbeGrid!==Bt&&(qe.lightProbeGrid=Bt,Zi=!0)}if(Mi||V!==U){P.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ht.setValue(F,"projectionMatrix",U.projectionMatrix),Ht.setValue(F,"viewMatrix",U.matrixWorldInverse);let di=Ht.map.cameraPosition;di!==void 0&&di.setValue(F,de.setFromMatrixPosition(U.matrixWorld)),N.logarithmicDepthBuffer&&Ht.setValue(F,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ht.setValue(F,"isOrthographic",U.isOrthographicCamera===!0),V!==U&&(V=U,Zi=!0,qs=!0)}if(qe.needsLights&&(bt.state.sunShadowMap.length>0&&Ht.setValue(F,"sunShadowMap",bt.state.sunShadowMap,Q),bt.state.directionalShadowMap.length>0&&Ht.setValue(F,"directionalShadowMap",bt.state.directionalShadowMap,Q),bt.state.spotShadowMap.length>0&&Ht.setValue(F,"spotShadowMap",bt.state.spotShadowMap,Q),bt.state.pointShadowMap.length>0&&Ht.setValue(F,"pointShadowMap",bt.state.pointShadowMap,Q)),se.isSkinnedMesh){Ht.setOptional(F,se,"bindMatrix"),Ht.setOptional(F,se,"bindMatrixInverse");let Bt=se.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ht.setValue(F,"boneTexture",Bt.boneTexture,Q))}se.isBatchedMesh&&(Ht.setOptional(F,se,"batchingTexture"),Ht.setValue(F,"batchingTexture",se._matricesTexture,Q),Ht.setOptional(F,se,"batchingIdTexture"),Ht.setValue(F,"batchingIdTexture",se._indirectTexture,Q),Ht.setOptional(F,se,"batchingColorTexture"),se._colorsTexture!==null&&Ht.setValue(F,"batchingColorTexture",se._colorsTexture,Q));let Ki=fe.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Z.update(se,fe,ni),(Zi||qe.receiveShadow!==se.receiveShadow)&&(qe.receiveShadow=se.receiveShadow,Ht.setValue(F,"receiveShadow",se.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&$.environment!==null&&(Kt.envMapIntensity.value=$.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=uM()),Zi){if(Ht.setValue(F,"toneMappingExposure",E.toneMappingExposure),qe.needsLights&&ua(Kt,qs),Ge&&le.fog===!0&&Ze.refreshFogUniforms(Kt,Ge),Ze.refreshMaterialUniforms(Kt,le,J,G,T.state.transmissionRenderTarget[U.id]),qe.needsLights&&qe.lightProbeGrid){let Bt=qe.lightProbeGrid;Kt.probesSH.value=Bt.texture,Kt.probesMin.value.copy(Bt.boundingBox.min),Kt.probesMax.value.copy(Bt.boundingBox.max),Kt.probesResolution.value.copy(Bt.resolution)}ko.upload(F,Xs(qe),Kt,Q)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(ko.upload(F,Xs(qe),Kt,Q),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ht.setValue(F,"center",se.center),Ht.setValue(F,"modelViewMatrix",se.modelViewMatrix),Ht.setValue(F,"normalMatrix",se.normalMatrix),Ht.setValue(F,"modelMatrix",se.matrixWorld),le.uniformsGroups!==void 0){let Bt=le.uniformsGroups;for(let di=0,Es=Bt.length;di<Es;di++){let yr=Bt[di];Re.update(yr,ni),Re.bind(yr,ni)}}return ni}function ua(U,$){U.ambientLightColor.needsUpdate=$,U.lightProbe.needsUpdate=$,U.sunLights.needsUpdate=$,U.sunLightShadows.needsUpdate=$,U.directionalLights.needsUpdate=$,U.directionalLightShadows.needsUpdate=$,U.pointLights.needsUpdate=$,U.pointLightShadows.needsUpdate=$,U.spotLights.needsUpdate=$,U.spotLightShadows.needsUpdate=$,U.rectAreaLights.needsUpdate=$,U.hemisphereLights.needsUpdate=$}function Nh(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(U,$,fe){let le=Y.get(U);le.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Y.get(U.texture).__webglTexture=$,Y.get(U.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,$){let fe=Y.get(U);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(U,$=0,fe=0){H=U,D=$,O=fe;let le=null,se=!1,Ge=!1;if(U){let We=Y.get(U);if(We.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(F.FRAMEBUFFER,We.__webglFramebuffer),k.copy(U.viewport),q.copy(U.scissor),ee=U.scissorTest,P.viewport(k),P.scissor(q),P.setScissorTest(ee),B=-1;return}else if(We.__webglFramebuffer===void 0)Q.setupRenderTarget(U);else if(We.__hasExternalTextures)Q.rebindTextures(U,Y.get(U.texture).__webglTexture,Y.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let lt=U.depthTexture;if(We.__boundDepthTexture!==lt){if(lt!==null&&Y.has(lt)&&(U.width!==lt.image.width||U.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(U)}}let Qe=U.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ge=!0);let et=Y.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(et[$])?le=et[$][fe]:le=et[$],se=!0):U.samples>0&&Q.useMultisampledRTT(U)===!1?le=Y.get(U).__webglMultisampledFramebuffer:Array.isArray(et)?le=et[fe]:le=et,k.copy(U.viewport),q.copy(U.scissor),ee=U.scissorTest}else k.copy(re).multiplyScalar(J).floor(),q.copy(ye).multiplyScalar(J).floor(),ee=Oe;if(fe!==0&&(le=I),P.bindFramebuffer(F.FRAMEBUFFER,le)&&P.drawBuffers(U,le),P.viewport(k),P.scissor(q),P.setScissorTest(ee),se){let We=Y.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,We.__webglTexture,fe)}else if(Ge){let We=$;for(let Qe=0;Qe<U.textures.length;Qe++){let et=Y.get(U.textures[Qe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Qe,et.__webglTexture,fe,We)}}else if(U!==null&&fe!==0){let We=Y.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,fe)}B=-1};function Wl(U){let $=Y.get(U);return($.__readFormat!==U.format||$.__readType!==U.type)&&($.__readFormat=U.format,$.__readType=U.type,$.__formatReadable=N.textureFormatReadable(U.format),$.__typeReadable=N.textureTypeReadable(U.type)),$}this.readRenderTargetPixels=function(U,$,fe,le,se,Ge,Ye,We=0){if(!(U&&U.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Y.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){P.bindFramebuffer(F.FRAMEBUFFER,Qe);try{let et=U.textures[We],lt=et.format,ot=et.type;U.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We);let $e=Wl(et);if($e.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=U.width-le&&fe>=0&&fe<=U.height-se&&F.readPixels($,fe,le,se,De.convert(lt),De.convert(ot),Ge)}finally{let et=H!==null?Y.get(H).__webglFramebuffer:null;P.bindFramebuffer(F.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(U,$,fe,le,se,Ge,Ye,We=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Y.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe)if($>=0&&$<=U.width-le&&fe>=0&&fe<=U.height-se){P.bindFramebuffer(F.FRAMEBUFFER,Qe);let et=U.textures[We],lt=et.format,ot=et.type;U.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We);let $e=Wl(et);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ut),F.bufferData(F.PIXEL_PACK_BUFFER,Ge.byteLength,F.STREAM_READ),F.readPixels($,fe,le,se,De.convert(lt),De.convert(ot),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let mn=H!==null?Y.get(H).__webglFramebuffer:null;P.bindFramebuffer(F.FRAMEBUFFER,mn);let Xt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zp(F,Xt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ge),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ut),F.deleteSync(Xt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,$=null,fe=0){let le=Math.pow(2,-fe),se=Math.floor(U.image.width*le),Ge=Math.floor(U.image.height*le),Ye=$!==null?$.x:0,We=$!==null?$.y:0;Q.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,fe,0,0,Ye,We,se,Ge),P.unbindTexture()},this.copyTextureToTexture=function(U,$,fe=null,le=null,se=0,Ge=0){let Ye,We,Qe,et,lt,ot,$e,Ut,mn,Xt=U.isCompressedTexture?U.mipmaps[Ge]:U.image;if(fe!==null)Ye=fe.max.x-fe.min.x,We=fe.max.y-fe.min.y,Qe=fe.isBox3?fe.max.z-fe.min.z:1,et=fe.min.x,lt=fe.min.y,ot=fe.isBox3?fe.min.z:0;else{let Kt=Math.pow(2,-se);Ye=Math.floor(Xt.width*Kt),We=Math.floor(Xt.height*Kt),U.isDataArrayTexture?Qe=Xt.depth:U.isData3DTexture?Qe=Math.floor(Xt.depth*Kt):Qe=1,et=0,lt=0,ot=0}le!==null?($e=le.x,Ut=le.y,mn=le.z):($e=0,Ut=0,mn=0);let zt=De.convert($.format),Cn=De.convert($.type),qe;$.isData3DTexture?(Q.setTexture3D($,0),qe=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Q.setTexture2DArray($,0),qe=F.TEXTURE_2D_ARRAY):(Q.setTexture2D($,0),qe=F.TEXTURE_2D),P.activeTexture(F.TEXTURE0),P.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),P.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),P.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);let bt=P.getParameter(F.UNPACK_ROW_LENGTH),At=P.getParameter(F.UNPACK_IMAGE_HEIGHT),ni=P.getParameter(F.UNPACK_SKIP_PIXELS),Mi=P.getParameter(F.UNPACK_SKIP_ROWS),Zi=P.getParameter(F.UNPACK_SKIP_IMAGES);P.pixelStorei(F.UNPACK_ROW_LENGTH,Xt.width),P.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xt.height),P.pixelStorei(F.UNPACK_SKIP_PIXELS,et),P.pixelStorei(F.UNPACK_SKIP_ROWS,lt),P.pixelStorei(F.UNPACK_SKIP_IMAGES,ot);let qs=U.isDataArrayTexture||U.isData3DTexture,Ht=$.isDataArrayTexture||$.isData3DTexture;if(U.isDepthTexture){let Kt=Y.get(U),Ki=Y.get($),Bt=Y.get(Kt.__renderTarget),di=Y.get(Ki.__renderTarget);P.bindFramebuffer(F.READ_FRAMEBUFFER,Bt.__webglFramebuffer),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let Es=0;Es<Qe;Es++)qs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,se,ot+Es),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get($).__webglTexture,Ge,mn+Es)),F.blitFramebuffer(et,lt,Ye,We,$e,Ut,Ye,We,F.DEPTH_BUFFER_BIT,F.NEAREST);P.bindFramebuffer(F.READ_FRAMEBUFFER,null),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(se!==0||U.isRenderTargetTexture||Y.has(U)){let Kt=Y.get(U),Ki=Y.get($);P.bindFramebuffer(F.READ_FRAMEBUFFER,R),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let Bt=0;Bt<Qe;Bt++)qs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,se,ot+Bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Kt.__webglTexture,se),Ht?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ki.__webglTexture,Ge,mn+Bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ki.__webglTexture,Ge),se!==0?F.blitFramebuffer(et,lt,Ye,We,$e,Ut,Ye,We,F.COLOR_BUFFER_BIT,F.NEAREST):Ht?F.copyTexSubImage3D(qe,Ge,$e,Ut,mn+Bt,et,lt,Ye,We):F.copyTexSubImage2D(qe,Ge,$e,Ut,et,lt,Ye,We);P.bindFramebuffer(F.READ_FRAMEBUFFER,null),P.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ht?U.isDataTexture||U.isData3DTexture?F.texSubImage3D(qe,Ge,$e,Ut,mn,Ye,We,Qe,zt,Cn,Xt.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(qe,Ge,$e,Ut,mn,Ye,We,Qe,zt,Xt.data):F.texSubImage3D(qe,Ge,$e,Ut,mn,Ye,We,Qe,zt,Cn,Xt):U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ge,$e,Ut,Ye,We,zt,Cn,Xt.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ge,$e,Ut,Xt.width,Xt.height,zt,Xt.data):F.texSubImage2D(F.TEXTURE_2D,Ge,$e,Ut,Ye,We,zt,Cn,Xt);P.pixelStorei(F.UNPACK_ROW_LENGTH,bt),P.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At),P.pixelStorei(F.UNPACK_SKIP_PIXELS,ni),P.pixelStorei(F.UNPACK_SKIP_ROWS,Mi),P.pixelStorei(F.UNPACK_SKIP_IMAGES,Zi),Ge===0&&$.generateMipmaps&&F.generateMipmap(qe),P.unbindTexture()},this.initRenderTarget=function(U){Y.get(U).__webglFramebuffer===void 0&&Q.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Q.setTextureCube(U,0):U.isData3DTexture?Q.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Q.setTexture2DArray(U,0):Q.setTexture2D(U,0),P.unbindTexture()},this.resetState=function(){D=0,O=0,H=null,P.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}};var Zt=(i,e,t)=>i<e?e:i>t?t:i,_t=(i,e,t)=>i+(e-i)*t,gl=i=>i*i*(3-2*i),Tt=(i,e,t)=>{let n=Zt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Im=1337;function Lm(i){Im=i|0}function hM(i){return i=i^Im|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var yn=(i,e)=>hM(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Ci(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return _t(yn(t,e),yn(t+1,e),s)}var sh=(i,e=0)=>Ci(i,e)*.55+Ci(i*2.03,e+7)*.3+Ci(i*4.1,e+13)*.15;function Ct(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var ih=new pe,_e=i=>(ih.set(i),[ih.r,ih.g,ih.b]),M0=(i,e,t)=>[_t(i[0],e[0],t),_t(i[1],e[1],t),_t(i[2],e[2],t)],Un=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Pi=["city","sakura","coast","country","mountain","snow"],vl={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Ii=1500,Ho=260,cs=0,yl=2,fM=-2.2,xl=0;function Nm(i){xl=Math.max(0,Pi.indexOf(i))}function ur(i){let e=Math.floor(i/Ii),t=i-e*Ii,n=gl(Zt((t-(Ii-Ho))/Ho,0,1)),s=Pi.length;return{a:Pi[((e+xl)%s+s)%s],b:Pi[((e+xl+1)%s+s)%s],t:n}}function Lt(i){let e=ur(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var pn=i=>{let e=ur(i);return e.t<.5?e.a:e.b};function ah(i,e){let t=Math.floor(i/Ii),n=i-t*Ii,s=gl(Zt((n-(Ii-Ho))/Ho,0,1)),r=Pi.length;return(Pi[((t+xl)%r+r)%r]===e?1-s:0)+(Pi[((t+xl+1)%r+r)%r]===e?s:0)}function Bn(i,e){let t=ur(i);return _t(vl[t.a][e],vl[t.b][e],t.t)}var Br=650,Or=375,Vo=i=>i*Br+Or;function _l(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Lt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var S0={x:new Map,r:new Map,t:new Map};function w0(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function hr(i){let e=Math.round((i-Or)/Br);return w0(S0.x,e,()=>{let t=Vo(e);return _l(t)?{k:e,s:t}:null})}function dM(i){let e=hr(i);return e?1-Tt(8,45,Math.abs(i-e.s)):0}var kr=1150,Wo=820,bl=4.6,T0=i=>i*kr+Wo;function E0(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Lt(i+t);if(n.country+n.sakura<.9)return!1}let e=hr(i);return!(e&&Math.abs(e.s-i)<170)}function ki(i){let e=Math.round((i-Wo)/kr);return w0(S0.r,e,()=>{let t=T0(e);return E0(t)?{k:e,s:t}:null})}function pM(i){let e=ki(i);return e?1-Tt(30,70,Math.abs(i-e.s)):0}function mM(i){let e=-bl;return i<11?e-1.3:i<16?_t(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?_t(e+.7,.35,(i-20)/5.5):.35}var Fm=1050,Um=525,_n=85,on=125,gM=24,vM=i=>i*Fm+Um;function xM(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Lt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function zi(i){let e=Math.round((i-Um)/Fm);return w0(S0.t,e,()=>{let t=vM(e);return xM(t)?{k:e,s:t}:null})}function yM(i){let e=zi(i);return e?1-Tt(_n+20,on+25,Math.abs(i-e.s)):0}var rh=0,lh=(i,e)=>{let t=i/on;return gM*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var bs=2,oh=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Ci(e/300,11)-.5)*2+(Ci(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Bn(e,"curv")*(1-Math.max(dM(e),pM(e),yM(e)))}elevRaw(e){return Bn(e,"base")+Bn(e,"hill")*(sh(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=hr(e);if(n){let o=1-Tt(8,45,Math.abs(e-n.s));o>0&&(t=_t(t,this.elevRaw(n.s),o))}let s=ki(e);if(s){let o=1-Tt(30,70,Math.abs(e-s.s));o>0&&(t=_t(t,this.elevRaw(s.s),o))}let r=zi(e);if(r){let o=1-Tt(_n+10,on+45,Math.abs(e-r.s));o>0&&(t=_t(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*bs<e+bs;){let t=this.X.length-1,n=t*bs,s=this.curv(n+bs/2)*bs,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*bs),this.Z.push(this.Z[t]+Math.cos(r+s/2)*bs),this.H.push(r+s),this.Y.push(this.elev(n+bs))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+bs);let n=e/bs,s=Math.floor(n),r=n-s;t.x=_t(this.X[s],this.X[s+1],r),t.z=_t(this.Z[s],this.Z[s+1],r),t.y=_t(this.Y[s],this.Y[s+1],r),t.h=_t(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),l=Math.cos(t.h);return t.fx=o,t.fz=l,t.rx=-l,t.rz=o,t}};function Dm(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Tt(45,190,r)*16*(.45+.55*Ci(e/160+(t>0?50:0),3));case"coast":return t>0?r<s+.9?-.06:-.15+Tt(s+1.5,80,r)*24*(.5+.5*Ci(e/170,5))+Tt(80,200,r)*30:r<s+1.5?-.06:r<s+1.95?-.04:fM-Math.min(r-(s+2),40)*.13-n;case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Ci(e/140,61),a=r-(s+1);return a<l?a:Math.min(l+(a-l)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+Tt(105,230,r)*95*(.6+.4*Ci(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?_t(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Ci(e/40+(t>0?3:0),71)-.5):.55+Tt(125,210,r)*40*(.45+.55*Ci(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+Tt(140,215,r)*7*(.4+.6*Ci(e/210+(t>0?9:0),7))}}function Ms(i,e,t,n){let s=ur(i),r=Dm(s.a,i,e,t,n),o=s.t;e<0&&o>0&&(s.b==="coast"?o=Tt(.25,.9,o):s.a==="coast"&&(o=Tt(.1,.75,o)));let l=s.t>0?_t(r,Dm(s.b,i,e,t,n),o):r;rh=0;let a=ki(i);if(a){let M=Math.abs(i-a.s);if(M>=36)return l;let c=M<29?mM(M):_t(.35,l,Tt(29,36,M));return Math.abs(e)<n+3.2&&(c=Math.min(c,-.08)),c}let u=zi(i);if(!u)return l;let h=i-u.s,p=Math.abs(h);if(p>=2*on)return l;let m=Math.abs(e),x=lh(h,e),y;return p<_n?y=m<=n+1.46?-.25:Math.max(l,x):y=Math.max(l,Math.min(x,m<n+1?-.06:m-(n+1))),rh=Math.max(0,y-l),y}function Bm(i){let e=ki(i);return e?1-Tt(27,34,Math.abs(i-e.s)):0}var Ml=new z,ch=new z,_M=[1,1,1],bM=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],km=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),zm=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),an=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new Je,this.nm=new gt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,l,a,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,p=this.ne,m=this.n*3,x=this.P,y=this.bb,M=h[0]*e+h[4]*t+h[8]*n+h[12],c=h[1]*e+h[5]*t+h[9]*n+h[13],f=h[2]*e+h[6]*t+h[10]*n+h[14];x[m]=M,x[m+1]=c,x[m+2]=f,M<y[0]&&(y[0]=M),c<y[1]&&(y[1]=c),f<y[2]&&(y[2]=f),M>y[3]&&(y[3]=M),c>y[4]&&(y[4]=c),f>y[5]&&(y[5]=f);let d=p[0]*s+p[3]*r+p[6]*o,g=p[1]*s+p[4]*r+p[7]*o,v=p[2]*s+p[5]*r+p[8]*o,b=127/(Math.sqrt(d*d+g*g+v*v)||1);if(this.N[m]=Math.round(d*b),this.N[m+1]=Math.round(g*b),this.N[m+2]=Math.round(v*b),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=a),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(c)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let T=u||_M,w=this.Cl;w[m]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,w[m+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,w[m+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){Ml.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),ch.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),ch.lengthSq()<1e-12&&ch.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Ml.cross(ch).normalize();let l=Ml.x,a=Ml.y,u=Ml.z,h=o?o.u0:0,p=o?o.u1:1,m=o?o.v0:0,x=o?o.v1:1;this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(t[0],t[1],t[2],l,a,u,p,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(s[0],s[1],s[2],l,a,u,h,x,r)}box(e,t,n,s,r,o,l,a=null,u=null){let h=a||{},p=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],p.nz||l,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],p.pz||l,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],p.nx||l,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],p.px||l,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],p.py||l,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],p.ny||l,h.ny)}cyl(e,t,n,s,r,o,l,a,u=!0){let h=(s-r)/o;for(let p=0;p<l;p++){let m=p/l*Math.PI*2,x=(p+1)/l*Math.PI*2,y=Math.cos(m),M=Math.sin(m),c=Math.cos(x),f=Math.sin(x),d=[e+y*s,t,n+M*s],g=[e+c*s,t,n+f*s],v=[e+c*r,t+o,n+f*r],b=[e+y*r,t+o,n+M*r];this.vtx(d[0],d[1],d[2],y,h,M,0,0,a),this.vtx(b[0],b[1],b[2],y,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(d[0],d[1],d[2],y,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(g[0],g[1],g[2],c,h,f,0,0,a),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,a),this.vtx(v[0],v[1],v[2],0,1,0,0,0,a),this.vtx(b[0],b[1],b[2],0,1,0,0,0,a))}}rod(e,t,n,s,r,o){let l=t[0]-e[0],a=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(l,a,u);l/=h,a/=h,u/=h;let p=0,m=1,x=0;Math.abs(a)>.99&&(p=1,m=0);let y=a*x-u*m,M=u*p-l*x,c=l*m-a*p,f=Math.hypot(y,M,c);y/=f,M/=f,c/=f;let d=M*u-c*a,g=c*l-y*u,v=y*a-M*l;for(let b=0;b<r;b++){let T=b/r*Math.PI*2,w=(b+1)/r*Math.PI*2,_=Math.cos(T),S=Math.sin(T),E=Math.cos(w),A=Math.sin(w),C=y*_+d*S,I=M*_+g*S,R=c*_+v*S,L=y*E+d*A,D=M*E+g*A,O=c*E+v*A,H=[e[0]+C*n,e[1]+I*n,e[2]+R*n],B=[e[0]+L*n,e[1]+D*n,e[2]+O*n],V=[t[0]+L*s,t[1]+D*s,t[2]+O*s],k=[t[0]+C*s,t[1]+I*s,t[2]+R*s];this.vtx(H[0],H[1],H[2],C,I,R,0,0,o),this.vtx(B[0],B[1],B[2],L,D,O,0,0,o),this.vtx(V[0],V[1],V[2],L,D,O,0,0,o),this.vtx(H[0],H[1],H[2],C,I,R,0,0,o),this.vtx(V[0],V[1],V[2],L,D,O,0,0,o),this.vtx(k[0],k[1],k[2],C,I,R,0,0,o)}return h}blob(e,t,n,s,r,o,l=0,a=1){let u=Om[l%Om.length],h=u.attributes.position.array,p=u.attributes.normal.array,m=u.userData.disp;for(let x=0;x<h.length;x+=3){let y=1+m[x/3],M=Math.max(0,Math.min(1,p[x+1]*.5+.5)),c=[o[0]+(r[0]-o[0])*M,o[1]+(r[1]-o[1])*M,o[2]+(r[2]-o[2])*M];this.vtx(e+h[x]*s*y,t+h[x+1]*s*y*a,n+h[x+2]*s*y,p[x],p[x+1],p[x+2],0,0,c)}}wire(e,t,n,s,r,o=10){let l=e;this.noShadow=!0;for(let a=1;a<=o;a++){let u=a/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,h,s,s,3,r),l=h}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,l,a]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],l,a,s[o])}bill(e,t,n,s,r,o,l,a,u,h,p=bM,m=1){let x=(u.u1-u.u0)*.5,y=(u.v1-u.v0)*.5,M=u.u0+x,c=u.v0+y;for(let f=0;f<p.length;f+=2){let d=p[f],g=p[f+1];this.offX=d*l,this.offY=g*a,this.vtx(e,t,n,s,r,o,M+d*x*m,c+g*y*m,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,l=e.C,a=e.U,u=this.n,h=this.bb;for(let p=0;p<e.n*3;p+=3){let m=r[p],x=r[p+1],y=r[p+2],M=u*3+p,c=n[0]*m+n[4]*x+n[8]*y+n[12],f=n[1]*m+n[5]*x+n[9]*y+n[13],d=n[2]*m+n[6]*x+n[10]*y+n[14];this.P[M]=c,this.P[M+1]=f,this.P[M+2]=d,this.hasAO&&(this.A[u+p/3]=this.aoByte(f)),c<h[0]&&(h[0]=c),f<h[1]&&(h[1]=f),d<h[2]&&(h[2]=d),c>h[3]&&(h[3]=c),f>h[4]&&(h[4]=f),d>h[5]&&(h[5]=d);let g=o[p],v=o[p+1],b=o[p+2],T=s[0]*g+s[3]*v+s[6]*b,w=s[1]*g+s[4]*v+s[7]*b,_=s[2]*g+s[5]*v+s[8]*b,S=127/(Math.sqrt(T*T+w*w+_*_)||1);this.N[M]=Math.round(T*S),this.N[M+1]=Math.round(w*S),this.N[M+2]=Math.round(_*S)}if(this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(a?this.U.set(a,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasOff){let p=Math.hypot(n[0],n[1],n[2]),m=e.O;if(m)for(let x=0;x<e.n*2;x++)this.O[u*2+x]=m[x]*p;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new vt,t=this.n,n=this.bb;if(e.setAttribute("position",new Mt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Mt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Mt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Mt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Mt(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new Mt(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new Mt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new vi(new z(n[0],n[1],n[2]),new z(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new xi),e}},Om=[0,1,2,3].map(i=>{let e=new Za(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,l)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});dt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var MM=dt.shadowmap_pars_fragment;function C0(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;dt.shadowmap_pars_fragment=MM.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}C0(1);function qm(i,e){let t=i<e?`#define GRAZE_FADE
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var ei=4200,Ue={uSkyHor:{value:new pe(.7,.8,.9)},uSkyZen:{value:new pe(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ie},uSunDir:{value:new z(0,1,0)},uSunCol:{value:new pe(1,1,1)},uTuftV:{value:new mt(.167,.333,.164,.165)},uGhShade:{value:new z(.3,.85,1.7)},uTpK:{value:0},uTpD:{value:new pe},uTpS:{value:new pe},uTpM:{value:new pe},uTpL:{value:new pe},uTpFL:{value:new pe},uTpFS:{value:new pe},uBlShade:{value:new z(7.5,3,2.3)},uTunA:{value:new z(0,-1e4,0)},uTunB:{value:new z(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new z},uCarFwd:{value:new z(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:SM()},uCloudTex:{value:null},uCloudOrg:{value:new Ie},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Ie(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function Ym(i){let e=new ss(new Uint8Array(i),i.length,1,lr);return e.minFilter=e.magFilter=En,e.generateMipmaps=!1,e.needsUpdate=!0,e}var yi=Ym([16,16,16,70,200,255,255,255]),Sl=Ym([28,40,70,130,200,240,255,255]);function SM(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ss(e,256,256,jn);return s.wrapS=s.wrapT=Ns,s.magFilter=Ot,s.minFilter=In,s.generateMipmaps=!0,s.colorSpace=ai,s.needsUpdate=!0,s}var Li=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,uh=1600,A0=256,wM=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/uh).toFixed(8)} + 0.5).r * uCloudSh; }`,TM=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Zm=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/uh).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,Km=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,EM=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,AM=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,hh=new tr;hh.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};hh.customProgramCacheKey=()=>"propdepth";function $m(){let i=new Yt(A0,A0,{format:lr,type:Jn,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),e=new ft({uniforms:{uCenter:{value:new Ie},uOrigin:Ue.uOrigin,uTime:Ue.uTime,uNoiseTex:Ue.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${uh.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ht(new rn(2,2),e),n=new Fs;t.frustumCulled=!1,Ue.uCloudTex.value=i.texture,Ue.uCloudTex.rt=i;let s=uh/A0;return{update(r,o,l,a,u){let h=Math.round((o+a)/s)*s-a,p=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(h,p),Ue.uCloudOrg.value.set(h,p);let m=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(m)}}}function Us(i,e="",t="",n=!0){i.uniforms.uOrigin=Ue.uOrigin,i.uniforms.uCloudSh=Ue.uCloudSh,i.uniforms.uTime=Ue.uTime,i.uniforms.uNoiseTex=Ue.uNoiseTex,i.uniforms.uCloudTex=Ue.uCloudTex,i.uniforms.uCloudOrg=Ue.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=Ue[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?Zm:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Li}${wM}${EM}${e}`).replace("#include <opaque_fragment>",`${n?Km:TM}${t}${AM}
#include <opaque_fragment>`)}var RM=`
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
`,CM=`
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
#endif`,PM=`
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
}`,Jm={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},_i={tex:null,uFieldK:{value:new Ie(1/12,1/21)},uFieldC:{value:new z(1,1,1)},uFieldCo:{value:new z(1,1,1)},uFieldSa:{value:new z(1,1,1)},uFieldM:{value:new z(.16,.32,.05)}};function jm(i){let e={};for(let t of i)e[Jm[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),_i.tex&&(i.includes("country")||i.includes("coast")||i.includes("sakura"))&&(e.F_PAINT=""),e}var Hm=new Map;function wl(i){let e=[...new Set(i)].sort().join("+"),t=Hm.get(e);return t||(t=Qm(jm(e.split("+")),e),Hm.set(e,t)),t}function Qm(i=jm(Object.keys(Jm)),e="all"){let t=new dn({color:16777215,gradientMap:yi});t.defines=i;let n=i.F_PAINT!==void 0;return t.onBeforeCompile=s=>{s.uniforms.uSkyHor=Ue.uSkyHor,s.uniforms.uSkyZen=Ue.uSkyZen,s.uniforms.uWet=Ue.uWet,s.uniforms.uSakWet=Ue.uSakWet,s.uniforms.uNight=Ue.uNight,s.uniforms.uSunDir=Ue.uSunDir,s.uniforms.uSunCol=Ue.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])s.uniforms[r]=Ue[r];if(n){s.uniforms.uFieldTex={value:_i.tex};for(let r of["uFieldK","uFieldC","uFieldCo","uFieldSa","uFieldM"])s.uniforms[r]=_i[r]}s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),Us(s,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${RM}`,PM+CM,!1),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v20-"+e+(n?"-fp":""),t}function Vm(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),Us(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function eg(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=Ue[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function IM(i){i.uniforms.uLightsOn=Ue.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function Wm(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function tg(i,e=!1){let t=new dn({vertexColors:!0,gradientMap:L0(-.15,.3,0)});return e&&(t.defines={TP_LITE:""}),t.onBeforeCompile=n=>{for(let s of["uTpK","uTpD","uTpS","uTpM","uTpL","uTpFL","uTpFS"])n.uniforms[s]=Ue[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
  reflectedLight.directDiffuse = tpDD; reflectedLight.indirectDiffuse = tpID; }`),Us(n)},t.customProgramCacheKey=()=>e?"tetra-v1-lite":"tetra-v1",t}function P0(i){return i.onBeforeCompile=e=>Us(e),i.customProgramCacheKey=()=>"cs",i}var LM="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",DM=(i,e,t="")=>`
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
}`;function I0(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=Ue[o];s&&Object.assign(r.uniforms,s.uniforms),Us(r,LM+(s?s.pars:""),DM(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var fr=48;function ng(i,e){let t=new dn({color:16777215,gradientMap:Sl}),n=!!_i.tex;return t.onBeforeCompile=s=>{Object.assign(s.uniforms,e,i);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])s.uniforms[r]=Ue[r];n&&(s.uniforms.uFieldC=_i.uFieldC,s.uniforms.uFieldM=_i.uFieldM),s.vertexShader=s.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${Zm}
uniform vec4 uG[${fr}], uGM[${fr/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${n?`
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${fr-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  float gsw = mod(gs, ${ei.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);`:`
  vec2 pid = floor(vec2(mod(gs, ${ei.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${Km}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Gm(i,e,t=!1){i.uniforms.uPMap={value:e.map},t||(i.uniforms.uPEm={value:e.emissive}),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uPMap;${t?"":" uniform sampler2D uPEm;"}`).replace("#include <map_fragment>",`
bool pgP = vMapUv.x > 1.5;
vec4 sampledDiffuseColor;
if (pgP) sampledDiffuseColor = texture2D(uPMap, vMapUv - vec2(2.0, 0.0));
else sampledDiffuseColor = texture2D(map, vMapUv);
diffuseColor *= sampledDiffuseColor;`),t||(i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`
vec4 emissiveColor;
if (pgP) emissiveColor = texture2D(uPEm, vEmissiveMapUv - vec2(2.0, 0.0));
else emissiveColor = texture2D(emissiveMap, vEmissiveMapUv);
totalEmissiveRadiance *= emissiveColor.rgb;`))}function ig(i,e,t){let n={};n.ground=Qm(),n.color=Vm(new dn({vertexColors:!0,gradientMap:yi}),1.6,.1,"color-v3",Wm),n.atlas=new dn({vertexColors:!0,gradientMap:yi,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),n.atlas.onBeforeCompile=a=>{Wm(a),IM(a),Us(a),Gm(a,t)},n.atlas.customProgramCacheKey=()=>"atlas-v7",n.atlasDepth=new tr,n.atlasDepth.onBeforeCompile=a=>Gm(a,t,!0),n.atlasDepth.customProgramCacheKey=()=>"atlasdepth-v2",n.ptex=t,n.foliage=Vm(new dn({vertexColors:!0,gradientMap:Sl}),2.6,.24,"foliage-v2"),n.lamp=new xn({color:15789798}),n.sig=new xn({color:new pe(.15,1.7,1.1)}),n.sodium=new xn({color:new pe(5,2.3,.65)}),n.decal=new dn({vertexColors:!0,gradientMap:yi,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),n.decal.onBeforeCompile=a=>Us(a),n.decal.customProgramCacheKey=()=>"decal-v1",e&&(n.leaf=new dn({map:e,vertexColors:!0,gradientMap:Sl,alphaTest:.42,side:bn}),n.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",dt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),Us(a),eg(a),a.uniforms.uTuftV=Ue.uTuftV,a.uniforms.uWind=Ue.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},n.leaf.customProgramCacheKey=()=>"leaf-v5"),n.wire=new xn({color:2303020});let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(255,255,255,0.45)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,128,128);let l=new ri(s);return n.pool=new xn({map:l,color:16762746,transparent:!0,opacity:0,blending:os,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n.glowTex=l,n}function L0(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let l=(o+.5)/64*2-1,a=Math.min(1,Math.max(0,(l-i)/(e-i))),u=a*a*(3-2*a);s[o]=Math.round(255*(t+(1-t)*u))}let r=new ss(s,64,1,lr);return r.minFilter=r.magFilter=Ot,r.generateMipmaps=!1,r.needsUpdate=!0,r}var NM=L0(-.05,.5,.05),FM=L0(-.5,.45,.12);function Xm(i,e){i.uniforms.uTime=Ue.uTime,i.uniforms.uWind=Ue.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var R0=(i,e,t)=>{let n=new pe().setRGB(i/255,e/255,t/255,qt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},UM=`diffuseColor.rgb *= mix(${R0(62,38,34)}, mix(${R0(205,105,150)}, ${R0(255,232,242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;function D0(i,{blossom:e=!1}={}){let t=new dn({map:i,vertexColors:!0,color:e?16777215:new pe().setRGB(.68,.85,.46,qt),gradientMap:e?FM:NM,alphaTest:.5,side:xs});t.shadowSide=bn,t.onBeforeCompile=s=>{Us(s),eg(s),Xm(s,!1),s.uniforms.uGhShade=e?Ue.uBlShade:Ue.uGhShade,s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?UM:"diffuseColor.rgb *= gTx.b;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v1":"gleaf-v1";let n=new tr;return n.onBeforeCompile=s=>Xm(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var BM=_e("#f2c230"),sg=_e("#26272c");function fh(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=Bn(s,"rw"),l=n*(o+.8),a=Lt(s),u=a.city+a.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function rg(){let i=new fn,e=P0(new dn({vertexColors:!0,gradientMap:yi})),t=new xn({color:new pe(6,.45,.3)}),n=new xn({color:new pe(.22,.03,.03)}),s=[0,1].map(()=>{let r=new fn,o=new fn;r.add(o),o.position.set(-.42,1.02,-.02);let l=new an,a=3.6;for(let p=0,m=0;m<a;p++,m+=.45)l.box(-Math.min(m+.45,a),-.065,-.065,-m,.065,.065,p%2?sg:BM);l.box(0,-.09,-.07,.38,.09,.07,sg);let u=new ht(l.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(p=>{let m=new ht(new Cr(.13,18),n);return m.position.set(p,2.75,-.1),m.rotation.y=Math.PI,r.add(m),m});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:a}});return i.visible=!1,{group:i,update(r,o,l,a,u){i.visible=!!r,r&&r.forEach((h,p)=>{let m=s[p];m.root.position.set(h.x-o.x,h.y,h.z-o.z),m.root.rotation.y=h.yaw,m.arm.scale.x=(h.rw+.25)/m.L,m.pivot.rotation.z=-l*(Math.PI/2-.06);let x=Math.floor(u*2.5)%2;m.lamps[0].material=a&&x===0?t:n,m.lamps[1].material=a&&x===1?t:n})}}}function OM(){let t=()=>{let f=document.createElement("canvas");return f.width=1024,f.height=512,f},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let a=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,a);for(let f=0;f<1024;f+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(f,0,2,a);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,a-14,1024,14);let u=[.1,.36,.62,.88].map(f=>f*1024),h=(f,d,g,v)=>{let b=r.createLinearGradient(f,d,f+g*.3,d+v);b.addColorStop(0,"#5d7fae"),b.addColorStop(.6,"#9db7d6"),b.addColorStop(1,"#2f3f55"),r.fillStyle=b,r.fillRect(f,d,g,v),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(f+g*.2,d),r.lineTo(f+g*.38,d),r.lineTo(f+g*.1,d+v),r.lineTo(f-g*.08,d+v),r.fill(),o.fillStyle="#ffeccc",o.fillRect(f,d,g,v)};for(let f=0;f<u.length-1;f++){let d=u[f]+40,g=u[f+1]-40,v=3,b=(g-d)/v;for(let T=0;T<v;T++)r.fillStyle="#6b737c",r.fillRect(d+T*b+2,34,b-4,58),h(d+T*b+6,38,b-12,50)}for(let f of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(f+2,34,28,58),h(f+5,38,22,50);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,22,60,a-36),r.fillStyle="#7b828a",r.fillRect(f-1,22,2,a-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(f-30,22,60,a-36),h(f-24,34,20,46),h(f+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let p=0,m=176,x=256,y=256;r.fillStyle="#d3d7dc",r.fillRect(p,m,x,y),r.fillStyle="#20262e",r.fillRect(p+14,m+44,x-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(p+40,m+44),r.lineTo(p+80,m+44),r.lineTo(p+40,m+140),r.lineTo(p+14,m+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(p+x/2-4,m+44,8,96),r.fillStyle="#111",r.fillRect(p+50,m+12,x-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26),r.fillStyle="#1f9a50",r.fillRect(p,m+150,x,18),r.fillStyle="#e8892b",r.fillRect(p,m+170,x,7);for(let f of[p+40,p+x-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(f,m+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(f+(f<p+x/2?28:-28),m+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(p,m+y-30,x,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",p+x/2,m+220),o.fillStyle="#111",o.fillRect(p,m,x,y),o.fillStyle="#ff9a2a",o.font=`800 18px ${l}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26);for(let f of[p+40,p+x-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(f,m+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let M=f=>{let d=new ri(f);return d.colorSpace=qt,d.anisotropy=4,d},c=(f,d,g,v)=>({u0:f/1024,u1:(f+g)/1024,v0:1-(d+v)/512,v1:1-d/512});return{map:M(n),em:M(s),side:c(0,0,1024,a),sideR:{...c(0,0,1024,a),flip:!0},front:c(p,m,x,y),plain:c(342,202,28,28)}}function og(){let i=OM(),e=P0(new dn({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:yi})),t=new an({uv:!0}),n=[1,1,1],s=_e("#9aa1a9"),r=_e("#3b4047"),o=_e("#2a2d33"),l=19.5,a=.6,u=3,h=1.45,p=.95,m=4,x=4,y=.3,M=_e("#33363b"),c={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},f=(_,S,E,A,C,I,R,L=!1)=>t.box(_,S,E,A,C,I,R,c,L?{noBottom:!0}:null),d=(_,S,E,A,C,I)=>{let L=E-C/2,D=E+C/2;for(let O=0;O<12;O++){let H=O/12*Math.PI*2,B=(O+1)/12*Math.PI*2,V=_+Math.cos(H)*A,k=S+Math.sin(H)*A,q=_+Math.cos(B)*A,ee=S+Math.sin(B)*A;t.quad([V,k,L],[q,ee,L],[q,ee,D],[V,k,D],I,i.plain),t.quad([_,S,D],[V,k,D],[q,ee,D],[q,ee,D],I,i.plain),t.quad([_,S,L],[q,ee,L],[V,k,L],[V,k,L],I,i.plain)}},g=u*l+(u-1)*a;for(let _=0;_<u;_++){let S=-g/2+l/2+_*(l+a),E=S-l/2,A=S+l/2;t.quad([E,p,h],[A,p,h],[A,m,h],[E,m,h],n,i.side),t.quad([A,p,-h],[E,p,-h],[E,m,-h],[A,m,-h],n,i.side);let C=_===u-1,I=_===0;t.quad([A,p,h],[A,p,-h],[A,m,-h],[A,m,h],C?n:_e("#c9ced4"),C?i.front:i.plain),t.quad([E,p,-h],[E,p,h],[E,m,h],[E,m,-h],I?n:_e("#c9ced4"),I?i.front:i.plain);for(let R=0;R<x;R++)for(let L of[1,-1]){let D=R/x*Math.PI/2,O=(R+1)/x*Math.PI/2,H=L*h*Math.cos(D),B=m+y*Math.sin(D),V=L*h*Math.cos(O),k=m+y*Math.sin(O);t.quad([E,B,H],[A,B,H],[A,k,V],[E,k,V],s,i.plain);for(let q of[E,A]){let ee=[[q,m,0],[q,B,H],[q,k,V]];t.quad(ee[0],ee[1],ee[2],ee[2],s,i.plain),t.quad(ee[0],ee[2],ee[1],ee[1],s,i.plain)}}for(let R of[1,-1])f(E,m-.02,R*h-.04,A,m+.05,R*h+.04,r);for(let R of[S-5.5,S+5.5])f(R-1.3,m+.2,-.8,R+1.3,m+.62,.8,_e("#c4c9cf"),!0);f(E+.3,.82,-h+.1,A-.3,p,h-.1,o);for(let[R,L,D,O]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])f(S+R-L/2,.82-D,-1.15+O*.2,S+R+L/2,.82,1.15+O*.2,O>0?o:r);for(let R of[S-7,S+7]){for(let L of[1,-1]){f(R-1.35,.32,L*.86,R+1.35,.56,L*1.02,r);for(let D of[-1.05,1.05])f(R+D-.17,.3,L*.84,R+D+.17,.58,L*1.06,o)}f(R-.35,.5,-1,R+.35,.8,1,r);for(let L of[-1.05,1.05])for(let D of[1,-1])d(R+L,.43,D*.6,.43,.13,M)}if(_<u-1&&f(A,p+.15,-.95,A+a,m-.1,.95,_e("#3a3e44")),_===0){let R=S-3,L=m+.7;t.box(R-.6,m+.26,-.6,R+.6,m+.42,.6,r),t.rod([R-.5,m+.42,0],[R,L+.9,0],.03,.03,4,r),t.rod([R+.5,m+.42,0],[R,L+.9,0],.03,.03,4,r),t.rod([R,L+.9,-.85],[R,L+.9,.85],.03,.03,4,r)}}let v=new ht(t.build(),e);v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1;let b=new fn;b.add(v),b.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:g},w={};return{group:b,st:T,start(_,S,E=16){Object.assign(T,{active:!0,sx:_,dir:S,speed:E,u:-S*290,ds:S>0?-2:2,cleared:!1}),b.visible=!0},update(_,S,E,A,C){if(!T.active)return;T.u+=T.dir*T.speed*_;let I=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?I>C+1:I<-C-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,b.visible=!1;return}S.at(T.sx,w),b.position.set(w.x+w.fx*T.ds+w.rx*T.u-E.x,w.y+.34,w.z+w.fz*T.ds+w.rz*T.u-E.z),b.rotation.y=w.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+A*1.1}}}var kM='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',ks=2048,zM=4096;function ph(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var ug=ph(256,256);{let i=ug.getContext("2d"),e=i.createImageData(256,256),t=Ct(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var mh=class{constructor(e=zM,t=0,n={}){let s=this.H=e;this.cA=ph(ks,s),this.cE=ph(ks/2,s/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,ks/2,s/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,ks,s),this.x=0,this.y=0,this.rowH=0,this.cells=n,this.uOff=t,this.grain=this.a.createPattern(ug,"repeat")}add(e,t,n,s){if(this.x+t+4>ks&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.H)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let h of[this.a,this.e])h.save(),h===this.e&&h.scale(.5,.5),h.translate(o.x,o.y),h.beginPath(),h.rect(0,0,t,n),h.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5,a=this.H,u=this.uOff;return this.cells[e]={u0:u+(o.x+l)/ks,u1:u+(o.x+t-l)/ks,v0:1-(o.y+n-l)/a,v1:1-(o.y+l)/a,w:t,h:n,px:o.x,py:o.y},this.cells[e]}paintCell(e,t,n,s,r,o,l){let a=this.cells[e];!a||a.u0>1.5!=this.uOff>1.5||(this.a.drawImage(t,n,s,r,o,a.px,a.py,a.w,a.h),l>=0?this.e.drawImage(t,n,l,r,o,a.px/2,a.py/2,a.w/2,a.h/2):(this.e.fillStyle="#000",this.e.fillRect(a.px/2,a.py/2,a.w/2,a.h/2)))}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new ri(n);return s.colorSpace=qt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=In,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function ln(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Sn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,a])=>o.addColorStop(l,a)),i.fillStyle=o,i.fillRect(e,t,n,s)}function Go(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Sn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}ln(i,e,t,n,.13)}function Bs(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function X(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Xo(i,e,t,n,s,r,o="#d9dde2",l="rgba(40,45,60,0.55)"){X(i,e-r,t-r,n+2*r,s+2*r,o),X(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function Os(i,e,t,n,s,r,o=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),a=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";l.addColorStop(0,a),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function ag(i,e,t,n,s,r="#efe6d2"){X(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Sn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function gh(i,e,t=800){i.font=`${t} ${e}px ${kM}`}function Pt(i,e,t,n,s,r,o,l=800,a=null){gh(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,gh(i,u,l);i.textAlign="center",i.textBaseline="middle",a&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=a,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function Hr(i,e,t,n,s,r,o,l=800,a=null){let u=[...e],h=u.length,p=Math.min(r*1.05,(s-n)/h),m=Math.min(r,p*.95);gh(i,m,l),i.textAlign="center",i.textBaseline="middle",u.forEach((x,y)=>{let M=n+(s-n-p*h)/2+p*(y+.5);a&&(i.lineWidth=Math.max(2,m*.12),i.strokeStyle=a,i.strokeText(x,t,M)),i.fillStyle=o,i.fillText(x,t,M)})}function zr(i,e,t,n,s,r,o,l=!0){if(X(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Sn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let a=e+n*.2*o();a<e+n-4;a+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-a),h=s*(.12+o()*.25);i.fillRect(a,t+s-h,u,h)}}i.restore()}function HM(i,e,t,n,s,r,o){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",X(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,X(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Sn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var lg=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],dh=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],cg=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],VM=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function hg(){let i=new mh,e=Ct(2024),t=240,n=(c,f,d,g,v,b,T=!1)=>{Go(c,i,d,g,"#ece8e0",0);let w=Ct(b*31+(v?7:0)+5);if(b===0){let _=d*.14,S=g*.22,E=d*.72,A=g*.5;Xo(c,_,S,E,A,5),Os(c,_,S,E/2,A,w),Os(c,_+E/2,S,E/2,A,w);let C=w()<.8?E*(.18+w()*.25):0;C&&ag(c,_+2,S+2,C,A-4,w()<.5?"#efe6d2":"#d9e4ea"),X(c,_+E/2-2,S,4,A,"#cfd4da"),X(c,_-8,S+A+5,E+16,6,"#d8d8d4"),Bs(c,_-4,S+A+11,8,60),Bs(c,_+E-4,S+A+11,8,60),v&&(zr(f,_,S,E,A,T?"#e6eeff":"#ffcf8f",w),C&&X(f,_+2,S+2,C,A-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),X(f,_+E/2-2,S,4,A,"#000"))}else if(b===1){for(let _ of[.12,.56]){let S=d*_,E=g*.28,A=d*.3,C=g*.36;Xo(c,S,E,A,C,4),Os(c,S,E,A,C,w,1),c.fillStyle="rgba(255,255,255,0.35)",c.fillRect(S,E,A,C*.45),Bs(c,S,E+C+6,A,40,.1),v&&w()<.8&&zr(f,S,E,A,C,w()<.5?"#ffd9a0":"#e8f0ff",w)}c.fillStyle="#c9c9c4",c.beginPath(),c.arc(d*.88,g*.2,9,0,7),c.fill()}else if(b===2){let _=d*.1,S=g*.12,E=d*.8,A=g*.84;Xo(c,_,S,E,A,4),Os(c,_,S,E/2,A,w),Os(c,_+E/2,S,E/2,A,w);let C=E*(.2+w()*.3);ag(c,_+2,S+2,C,A-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),X(c,_+E/2-2,S,4,A,"#cfd4da"),v&&(zr(f,_,S,E,A,T?"#e6eeff":"#ffcb85",w),X(f,_+2,S+2,C,A-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),X(f,_+E/2-2,S,4,A,"#000"))}else if(b===3){Go(c,i,d,g,"#dfe3e6",0);let _=g*.25,S=g*.55;Os(c,0,_,d,S,w,1);for(let E=0;E<=d;E+=d/4)X(c,E-2,_,4,S,"#8d98a6");if(X(c,0,_-4,d,4,"#8d98a6"),X(c,0,_+S,d,5,"#7d8796"),v)for(let E=0;E<4;E++)w()<.7&&zr(f,E*d/4+2,_,d/4-4,S,w()<.6?"#f2f6ff":"#ffe2b0",w)}else if(b===4){c.fillStyle="#6b4a35",c.fillRect(0,0,d,g);for(let C=0;C<g;C+=12)X(c,0,C,d,2,"rgba(30,18,10,0.35)"),X(c,0,C+2,d,1,"rgba(255,220,180,0.06)");ln(c,i,d,g,.15);let _=d*.18,S=g*.25,E=d*.64,A=g*.45;X(c,_-6,S-6,E+12,A+12,"#4a3020"),X(c,_,S,E,A,"#efe4c8"),c.fillStyle="#5a3a26";for(let C=1;C<6;C++)c.fillRect(_+C*E/6-1.5,S,3,A);for(let C=1;C<3;C++)c.fillRect(_,S+C*A/3-1.5,E,3);if(v){zr(f,_,S,E,A,"#ffc070",w,!1),f.fillStyle="#000";for(let C=1;C<6;C++)f.fillRect(_+C*E/6-1.5,S,3,A);for(let C=1;C<3;C++)f.fillRect(_,S+C*A/3-1.5,E,3)}}else if(b===5){X(c,d*.08,0,7,g,"#bdbdb6"),X(c,d*.08+5,0,2,g,"rgba(0,0,0,0.2)");let _=d*.55,S=g*.3,E=d*.22,A=g*.24;Xo(c,_,S,E,A,3),X(c,_,S,E,A,"#d6dfe4"),c.fillStyle="rgba(255,255,255,0.4)",c.fillRect(_,S,E,A/2),Bs(c,_,S+A+4,E,50,.12),X(c,d*.22,g*.55,26,34,"#cfcfca"),X(c,d*.22+4,g*.55+6,18,12,"#9aa2a8"),v&&zr(f,_,S,E,A,T?"#eef2ff":"#fff0d8",w,!1)}else if(b===6){let _=d*.4,S=g*.35,E=d*.2,A=g*.28;Xo(c,_,S,E,A,3),Os(c,_,S,E,A,w,1),Bs(c,_,S+A+4,E,70,.14),v&&zr(f,_,S,E,A,T?"#e8efff":"#ffd9a0",w)}};for(let c=0;c<7;c++)i.add("win"+c,t,t,(f,d,g,v)=>n(f,d,g,v,!1,c)),i.add("win"+c+"L",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c));for(let c of[0,2,5,6])i.add("win"+c+"C",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c,!0));i.add("plain",t,t,(c,f,d,g)=>{Go(c,i,d,g,"#ece8e0"),Bs(c,d*.3,0,12,g*.6,.06)}),i.add("concrete",t,t,(c,f,d,g)=>{Go(c,i,d,g,"#d9d7d0",60);for(let v=0;v<6;v++)Bs(c,v*41%d,0,10,g*.5,.07)});let s=288,r=(c,f,d,g,v,b,T)=>{let w=(S,E,A,C,I,R=0)=>{c.fillStyle=I,c.beginPath(),c.ellipse(S,E,A,C,R,0,7),c.fill()},_=S=>S[Math.floor(b()*S.length)];if(T==="bakery"){X(c,f,d,g,v,"#d9b98a"),Sn(c,f,d,g,v,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let S=d+v*.28;S<d+v*.72;S+=v*.2){X(c,f,S,g,5,"#8a5a32");for(let E=f+8;E<f+g-8;E+=15+b()*10){let A=7+b()*6,C=4+b()*3;w(E,S-C,A,C,_(["#c98a3e","#b4732e","#d9a256","#a4632a"])),w(E-A*.2,S-C*1.4,A*.5,C*.35,"rgba(255,230,180,0.5)")}}X(c,f+4,d+v*.8,g-8,v*.2,"#efe7d8"),X(c,f+4,d+v*.8,g-8,3,"#9a9a96");for(let S=f+14;S<f+g-10;S+=18)w(S,d+v*.9,6,4,_(["#e8b35a","#c06a3a","#f2d29a"]));X(c,f+g-64,d+10,52,22,"#7a3e1e"),Pt(c,"\u713C\u304D\u305F\u3066",f+g-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){X(c,f,d,g,v,"#6f5a46");for(let S=d+6;S<d+v*.72;S+=v*.17){X(c,f,S+v*.15,g,4,"#4a3828");for(let E=f+3;E<f+g-4;){let A=3+b()*4,C=v*(.1+b()*.045);X(c,E,S+v*.15-C,A,C,_(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),E+=A+(b()<.1?4:.6)}}X(c,f+4,d+v*.76,g-8,v*.24,"#8a7560");for(let S=f+8;S<f+g-22;S+=24)X(c,S,d+v*.79,20,28,_(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),X(c,S+3,d+v*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){X(c,f,d,g,v,"#e8e2d2"),Sn(c,f,d,g,v,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let S=0;S<7;S++){let E=f+8+b()*(g-16),A=v*(.15+b()*.25);for(let C=0;C<A;C+=3.5)w(E+Math.sin(C*.25+S)*4+(b()-.5)*6,d+4+C,3.4,1.8,_(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),b()*3)}for(let S=0;S<3;S++){let E=d+v*(.5+S*.17);X(c,f,E+14,g,4,"#9a8a76");for(let A=f+10+S*6;A<f+g-8;A+=19){let C=_(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let I=0;I<6;I++){c.strokeStyle="#4a7a3a",c.lineWidth=1.2,c.beginPath();let R=A+(b()-.5)*14;c.moveTo(A,E+10),c.lineTo(R,E-6-b()*8),c.stroke(),w(R,E-8-b()*8,3.2,3,C)}X(c,A-6,E+4,12,11,_(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){X(c,f,d,g,v,"#efece6"),Sn(c,f,d,g,v,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),X(c,f+6,d+v*.18,g-60,3,"#7a7a7a");for(let E=f+12;E<f+g-66;E+=13+b()*5){c.fillStyle=_(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let A=d+v*.18+3,C=v*(.3+b()*.2);c.beginPath(),c.moveTo(E-5,A),c.lineTo(E+5,A),c.lineTo(E+8,A+C),c.lineTo(E-8,A+C),c.closePath(),c.fill()}let S=f+g-32;w(S,d+v*.16,7,8,"#d8cfc4"),c.fillStyle=_(["#c84a5a","#4a6a9a","#e8d8b8"]),c.beginPath(),c.moveTo(S-14,d+v*.24),c.lineTo(S+14,d+v*.24),c.lineTo(S+18,d+v*.66),c.lineTo(S-18,d+v*.66),c.closePath(),c.fill(),X(c,S-2,d+v*.66,4,v*.24,"#8a8a8a"),X(c,f+8,d+v*.74,g*.55,6,"#8a6a4a");for(let E=f+12;E<f+g*.55;E+=14)X(c,E,d+v*.74-8,11,8,_(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let S=7;for(let E=d+v*.25;E<d+v;E+=v*.22)for(let A=f+3;A<f+g-6;A+=6+b()*8)e(),S=Math.imul(S,31)+Math.floor(b()*997+b()*61+b()*7)|0;T==="cafe"?h(c,f,d,g,v,Ct(S>>>0)):u(c,f,d,g,v,Ct(S>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],l=(c,f,d,g,v,b,T="bbccutp")=>{let w=f+1+b()*3;for(;w<d-4;){let _=T[Math.floor(b()*T.length)],S=o[Math.floor(b()*o.length)],E=b()<.5?"#f8f6f0":o[Math.floor(b()*o.length)],A={b:8+b()*6,c:6+b()*2,u:9+b()*2,t:5+b()*2,p:12+b()*5}[_],C=Math.min(v,{b:14+b()*12,c:11+b()*3,u:10+b()*3,t:18+b()*9,p:14+b()*8}[_]),I=2+Math.floor(b()*5);for(let R=0;R<I&&w+A<d-1;R++,w+=A+.6){let L=g-C;_==="t"?(X(c,w,L+C*.3,A,C*.7,S),X(c,w+A*.3,L+C*.1,A*.4,C*.22,S),X(c,w+A*.28,L,A*.44,C*.11,E==="#f8f6f0"?"#e8e8e4":"#d83a2a"),X(c,w,L+C*.5,A,C*.22,E)):_==="c"?(X(c,w,L,A,C,S),X(c,w,L,A,1.5,"#d8dce0"),X(c,w,L+C*.35,A,C*.3,E)):_==="u"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,L+2),c.lineTo(w+A,L+2),c.lineTo(w+A-1.2,g),c.lineTo(w+1.2,g),c.fill(),X(c,w-.4,L,A+.8,2.2,"#f2efe6"),X(c,w+1,L+C*.45,A-2,C*.25,E)):_==="p"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,g),c.lineTo(w,L+3),c.quadraticCurveTo(w+A/2,L-1.5,w+A,L+3),c.lineTo(w+A,g),c.fill(),X(c,w+1.5,L+C*.35,A-3,C*.35,E),X(c,w,L+2,A,1,"rgba(0,0,0,0.18)")):(X(c,w,L,A,C,S),X(c,w+1.5,L+C*.3,A-3,C*.4,E)),X(c,w,L+1,1,C-1,"rgba(255,255,255,0.28)"),X(c,w+A-1.3,L+1,1.3,C-1,"rgba(0,0,0,0.22)")}w+=1.5+b()*3}},a=(c,f,d,g,v)=>{Sn(c,f,g+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),X(c,f,g,d,4,"#d3d6da"),X(c,f,g+3.2,d,.8,"rgba(40,40,50,0.45)");for(let b=f+4+v()*10;b<f+d-6;b+=14+v()*16)X(c,b,g+.6,5,2.6,v()<.25?"#f2d23a":v()<.2?"#e84a3a":"#ffffff")},u=(c,f,d,g,v,b,T)=>{X(c,f,d,g,v,T?"#f3f1ea":"#ece5d8"),X(c,f,d,g,v*.13,T?"#f6f6f2":"#efebe2");for(let E of[.035,.085])X(c,f,d+v*E,g,2.4,"#ffffff"),Sn(c,f,d+v*E+2.4,g,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Sn(c,f,d+v*.13,g,v*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let E=0,A=f+18+b()*30;E<2&&A<f+g-40;E++,A+=90+b()*40)X(c,A+13,d+v*.13,1,6,"#888"),X(c,A,d+v*.13+6,28,9,o[Math.floor(b()*9)]),X(c,A+4,d+v*.13+9.5,20,2,"rgba(255,255,255,0.8)");let _=d+v*.25,S=v*.165;X(c,f,_-4,g,4,"#c9ccd0");for(let E=0;E<4;E++){let A=_+S*(E+1);Sn(c,f,A-S,g,S,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),l(c,f,f+g,A,S-6,b),a(c,f,g,A,b)}X(c,f,_+S*4+4,g,d+v-_-S*4-4,"#5c6068"),X(c,f,_+S*4+4,g,1.5,"#8a8e96");for(let E=f+2+b()*20;E<f+g;E+=70+b()*12)X(c,E,_-4,3,S*4+8,"#b4b8be"),X(c,E+2.2,_-4,.8,S*4+8,"rgba(0,0,0,0.3)");if(T){let E=d+v*.7;X(c,f,E+26,g,d+v-E-26,"#7a7e86"),X(c,f,E+26,g,2,"#a8acb2");for(let A=f+2;A<f+g-14;A+=15.5){let C=o[Math.floor(b()*o.length)],I=b()*2;X(c,A,E+I,14,26-I,C),X(c,A,E+I,14,5,b()<.6?"#ffffff":"#e8343a"),X(c,A+2,E+I+8,10,10,b()<.5?"#f2c8a8":o[Math.floor(b()*o.length)]),X(c,A+13,E+I,1,26-I,"rgba(0,0,0,0.25)")}}},h=(c,f,d,g,v,b)=>{X(c,f,d,g,v,"#b88a5e"),Sn(c,f,d,g,v,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let w=f;w<f+g;w+=9)X(c,w,d+v*.55,1,v*.45,"rgba(60,35,20,0.25)");let T=d+v*.3;for(let w=0;w<2;w++){let _=T+w*22;X(c,f+8,_,g*.55,3,"#6a4428"),l(c,f+10,f+g*.55+6,_,14,b,"ctu")}X(c,f+g*.64,d+v*.22,g*.28,v*.26,"#2e3a32"),X(c,f+g*.64,d+v*.22,g*.28,2,"#6a4428");for(let w=0;w<5;w++)X(c,f+g*.67,d+v*(.27+w*.04),g*(.12+b()*.1),1.6,"rgba(240,240,230,0.75)");X(c,f+4,d+v*.56,g-8,6,"#5a3820"),X(c,f+4,d+v*.56+6,g-8,v*.08,"#7a5232"),X(c,f+g*.3,d+v*.47,18,v*.09,"#c8ccd0"),X(c,f+g*.3+3,d+v*.47+3,12,5,"#3a3a40");for(let w=f+30+b()*20;w<f+g-20;w+=70+b()*20)X(c,w,d,1,v*.14,"#3a2a1e"),c.fillStyle="#2f3a36",c.beginPath(),c.moveTo(w-9,d+v*.2),c.quadraticCurveTo(w+.5,d+v*.12,w+10,d+v*.2),c.fill(),c.fillStyle="rgba(255,214,150,0.9)",c.beginPath(),c.ellipse(w+.5,d+v*.2,7,2,0,0,7),c.fill();for(let w=f+26+b()*16;w<f+g-26;w+=78+b()*20){X(c,w-16,d+v*.74,32,4,"#4a2e1c"),X(c,w-1.5,d+v*.74+4,3,v*.2,"#2e2420"),X(c,w-8,d+v*.94,16,2,"#2e2420");for(let _ of[-24,24])X(c,w+_-6,d+v*.8,12,3,"#3a2618"),X(c,w+_+(_<0?-6:4),d+v*.66,2,v*.17,"#3a2618"),X(c,w+_-5,d+v*.83,1.6,v*.13,"#3a2618"),X(c,w+_+3.4,d+v*.83,1.6,v*.13,"#3a2618");c.fillStyle="#f4f0e8",c.beginPath(),c.ellipse(w-6,d+v*.74-1.5,3,1.5,0,0,7),c.fill()}},p=(c,f,d,g,v,b,T="")=>{let w=Ct(b);if(Go(c,i,d,g,"#e6e2da"),v==="glass"||v==="door"||v==="konbini"||v==="cafe"){let S=g*.22,E=d-12,A=g*.78-4;X(c,6,S,E,A,v==="konbini"?"#f6f4ea":v==="cafe"?"#7a5a40":"#8a7a68"),r(c,6,S,E,A,w,T||v),v==="konbini"&&X(c,6,S+4,E,5,"#ffffff"),v==="door"&&(X(c,d/2-30,S+18,60,24,"#fff"),Pt(c,"\u55B6\u696D\u4E2D",d/2,S+30,54,18,"#c82828")),v==="glass"&&!T&&w()<.7&&(X(c,16,S+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Pt(c,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,S+44,40,16,"#c02020")),HM(c,f,6,S,E,A,v==="konbini"?"#e4eef8":v==="cafe"?"#f0a868":"#f2d2a6"),c.save(),c.globalAlpha=.35,Os(c,6,S,E,A,w),c.restore(),X(c,6,S,E,4,"#4a4e57"),X(f,6,S,E,4,"#000"),v==="door"&&(X(c,d/2-2,S,4,A,"#4a4e57"),X(f,d/2-2,S,4,A,"#000"),X(c,d/2-14,S+A*.45,3,40,"#c0c4c8"),X(c,d/2+11,S+A*.45,3,40,"#c0c4c8")),v==="cafe"&&(X(c,d*.62,g-70,46,62,"#2c3a30"),X(f,d*.62,g-70,46,62,"#000"),Pt(c,"\u30E9\u30F3\u30C1",d*.62+23,g-50,40,13,"#fff",700))}else if(v==="shutter"){let S=g*.2,E=d-12,A=g*.8;X(c,6,S,E,A,"#b8bcc0");for(let C=S;C<S+A;C+=7)X(c,6,C,E,2,"rgba(60,64,72,0.35)"),X(c,6,C+2,E,1,"rgba(255,255,255,0.35)");X(c,6,S,E,10,"#8f949a"),ln(c,i,d,g,.12),w()<.5&&(X(c,d/2-40,S+A*.35,80,26,"#fff"),Pt(c,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,S+A*.35+13,74,16,"#333",700))}else if(v==="noren"){X(c,0,0,d,g,"#5b3c28");for(let I=0;I<d;I+=10)X(c,I,g*.2,3,g*.8,"rgba(25,15,8,0.6)");ln(c,i,d,g,.15);let _=d*.12,S=g*.24,E=d*.76,A=g*.34,C=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);X(c,_,S,E,A,C);for(let I=1;I<3;I++)X(c,_+E*I/3-1,S+A*.25,2,A*.75,"rgba(255,255,255,0.25)");Pt(c,e.pick(VM),d/2,S+A*.55,E*.9,46,"#f5f0e6",800),X(c,_,S,E,6,"#3a2a1c"),f.fillStyle="#ffae5c",f.fillRect(_,S+A,E,g-S-A),f.fillStyle="rgba(255,170,90,0.6)",f.fillRect(_,S,E,A),c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d*.9,g*.36,13,19,0,0,7),c.fill(),Pt(c,"\u9152",d*.9,g*.36,16,14,"#fff"),f.fillStyle="#ff6a3a",f.beginPath(),f.ellipse(d*.9,g*.36,13,19,0,0,7),f.fill()}else if(v==="house"){let _=d*.18,S=g*.3,E=d*.34,A=g*.7;X(c,_-6,S-6,E+12,A+6,"#9a9a96"),X(c,_,S,E,A,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),X(c,_+E-14,S+A*.5,4,22,"#d8d0c0"),X(c,_+6,S+10,E-12,A*.25,"rgba(255,255,255,0.18)"),X(c,d*.62,g*.48,30,22,"#cfcfca"),X(c,d*.62+6,g*.48+5,18,4,"#555");let C=d*.6,I=g*.22,R=d*.3,L=g*.2;Xo(c,C,I,R,L,3),Os(c,C,I,R,L,w,1);for(let D=0;D<3;D++)c.fillStyle="#7b5a43",c.fillRect(d*.6+D*22,g-26,16,18),c.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),c.beginPath(),c.arc(d*.6+D*22+8,g-32,11,0,7),c.fill();f.fillStyle="#ffd08a",f.beginPath(),f.arc(_+E+14,S+8,6,0,7),f.fill(),w()<.6&&(f.fillStyle="#ffcf8f",f.fillRect(C,I,R,L))}else if(v==="garage"){let S=g*.25,E=d-16,A=g*.75;X(c,8,S,E,A,"#efefec");for(let C=S;C<S+A;C+=9)X(c,8,C,E,1.5,"rgba(80,80,90,0.25)");ln(c,i,d,g,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((c,f)=>{i.add("shop_"+c,t,s,(d,g,v,b)=>p(d,g,v,b,c,100+f)),(c==="glass"||c==="noren"||c==="house")&&i.add("shop_"+c+"2",t,s,(d,g,v,b)=>p(d,g,v,b,c,200+f)),c==="glass"&&["bakery","books","florist","clothes"].forEach((d,g)=>i.add("shop_glass"+(g+3),t,s,(v,b,T,w)=>p(v,b,T,w,"glass",300+g,d)))});for(let c=0;c<14;c++)i.add("hs"+c,512,76,(f,d,g,v)=>{let[b,T]=dh[c%dh.length],w=lg[c*7%lg.length];X(f,0,0,g,v,b),X(f,0,0,g,5,"rgba(255,255,255,0.35)"),X(f,0,v-6,g,6,"rgba(0,0,0,0.18)"),c%3===0&&(X(f,12,12,v-24,v-24,T),Pt(f,w[0],12+(v-24)/2,v/2,v-30,34,b)),Pt(f,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T,900),ln(f,i,g,v,.08),d.fillStyle=b==="#fff"||b==="#f5efe0"?"#d9d6cc":b,d.fillRect(0,0,g,v),d.globalAlpha=.9,Pt(d,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[c,f,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+c,512,76,(g,v,b,T)=>{X(g,0,0,b,T,f),X(g,0,0,b,5,"rgba(255,255,255,0.35)"),X(g,0,T-6,b,6,"rgba(0,0,0,0.18)"),Pt(g,c,b/2,T/2+2,b*.7,50,d,900),ln(g,i,b,T,.08),v.fillStyle=f,v.fillRect(0,0,b,T),v.globalAlpha=.9,Pt(v,c,b/2,T/2+2,b*.7,50,d,900),v.globalAlpha=1});let m=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],x=(c,f,d,g,v,b)=>{c.beginPath(),c.moveTo(f+b,d),c.arcTo(f+g,d,f+g,d+v,b),c.arcTo(f+g,d+v,f,d+v,b),c.arcTo(f,d+v,f,d,b),c.arcTo(f,d,f+g,d,b),c.closePath()};for(let c=0;c<10;c++)i.add("vs"+c,72,288,(f,d,g,v)=>{let b=cg[c%cg.length],T=m[(c*5+2)%m.length],w=c%10===3||c%10===6||c%10===8,[_,S]=dh[(c*3+1)%dh.length],E=w?_==="#fff"||_==="#f5efe0"?"#2b2b33":_:"#fbf7ef",A=w?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][c%4];X(f,0,0,g,v,"#2a2b30"),x(f,3,3,g-6,v-6,8),f.fillStyle=E,f.fill(),Sn(f,3,3,g-6,v-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),f.save(),x(f,8,8,g-16,v-16,6),f.strokeStyle=T,f.globalAlpha=.55,f.lineWidth=7,f.stroke(),f.globalAlpha=1,f.strokeStyle="#fff6fb",f.lineWidth=2.2,f.stroke(),f.restore(),Hr(f,b,g/2,18,v-18,50,A,900),ln(f,i,g,v,.06),X(d,0,0,g,v,"#000"),x(d,3,3,g-6,v-6,8),d.fillStyle=w?"#3a3a3e":"#4a4844",d.fill(),d.save(),x(d,8,8,g-16,v-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),Hr(d,b,g/2,18,v-18,50,w?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([c,f,d],g)=>i.add("bb"+g,512,240,(v,b,T,w)=>{X(v,0,0,T,w,"#fbfaf5"),X(v,0,0,T,w*.62,d),Pt(v,c,T/2,w*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Pt(v,f,T/2,w*.8,T*.85,52,"#333",800),ln(v,i,T,w,.08),X(b,0,0,T,w,"#555"),b.globalAlpha=.85,X(b,0,0,T,w*.62,d),Pt(b,c,T/2,w*.32,T*.9,96,"#fff",900),b.globalAlpha=1})),i.add("konbini_band",480,72,(c,f,d,g)=>{X(c,0,0,d,g,"#fbfbf7"),X(c,0,g*.62,d,g*.14,"#2a9a4a"),X(c,0,g*.76,d,g*.12,"#f08a24"),X(c,0,g*.88,d,g*.12,"#2f6fd8"),Pt(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900),f.fillStyle="#f3f6f0",f.fillRect(0,0,d,g),Pt(f,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900)});for(let c=0;c<3;c++)i.add("vend"+c,128,234,(f,d,g,v)=>{let b=["#d8352a","#2f6fd8","#f4f4f0"][c];X(f,0,0,g,v,b),X(f,8,10,g-16,v*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let w=0;w<4;w++)for(let _=0;_<6;_++){let S=14+_*17,E=18+w*30;f.fillStyle=T[(w*6+_+c)%T.length],f.fillRect(S,E,11,20),f.fillStyle="rgba(255,255,255,0.5)",f.fillRect(S+2,E+2,3,14),f.fillStyle="#2a2a2a",f.fillRect(S,E+23,11,3)}X(f,10,v*.62,g-20,22,"#222"),X(f,g-34,v*.66,14,22,"#bbb"),X(f,14,v*.82,g-28,22,"#1b1b1b"),Pt(f,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][c],g/2,v*.62+11,g-28,14,"#fff",700),ln(f,i,g,v,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,g-16,v*.55);for(let w=0;w<4;w++)for(let _=0;_<6;_++)d.fillStyle=T[(w*6+_+c)%T.length],d.fillRect(14+_*17,18+w*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,v*.62,g-20,22)});i.add("ac",128,88,(c,f,d,g)=>{X(c,0,0,d,g,"#e9e9e4"),Sn(c,0,0,d,g,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),c.fillStyle="#9a9c9e",c.beginPath(),c.arc(d*.4,g*.5,g*.36,0,7),c.fill(),c.strokeStyle="#d6d6d2",c.lineWidth=2;for(let v=6;v<g*.36;v+=6)c.beginPath(),c.arc(d*.4,g*.5,v,0,7),c.stroke();for(let v=12;v<g-10;v+=6)X(c,d*.78,v,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(c,f,d,g)=>{X(c,0,0,d,g,"#f2cf3a"),c.strokeStyle="#2f5a2f",c.lineWidth=3,c.strokeRect(3,3,d-6,g-6),Pt(c,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),Pt(c,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.moveTo(2,2),c.lineTo(d-2,2),c.lineTo(d/2,g-2),c.fill(),c.fillStyle="#d8231c",c.beginPath(),c.moveTo(10,7),c.lineTo(d-10,7),c.lineTo(d/2,g-12),c.fill(),Pt(c,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.fillStyle="#1e5bb8",c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.fill(),c.fillStyle="#fff",c.beginPath(),c.moveTo(d/2,22),c.lineTo(d/2+22,50),c.lineTo(d/2+8,50),c.lineTo(d/2+8,88),c.lineTo(d/2-8,88),c.lineTo(d/2-8,50),c.lineTo(d/2-22,50),c.fill()}),i.add("sign_speed",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=12,c.beginPath(),c.arc(d/2,g/2,d/2-9,0,7),c.stroke(),Pt(c,"30",d/2,g/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(c,f,d,g)=>{X(c,0,0,d,g,"#1d4f9a"),c.strokeStyle="#fff",c.lineWidth=2,c.strokeRect(3,3,d-6,g-6),Hr(c,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,g-10,24,"#fff",700)});for(let c=0;c<4;c++)i.add("poster"+c,64,90,(f,d,g,v)=>{let b=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][c];X(f,0,0,g,v,b),X(f,4,4,g-8,v*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][c]),Pt(f,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][c],g/2,v*.25,g-12,18,"#fff",900);for(let T=0;T<4;T++)X(f,8,v*.58+T*8,g-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let c=0;c<3;c++)i.add("bal"+c,t,88,(f,d,g,v)=>{let b=["#e9e3d6","#dfe6ea","#efe2dc"][c];if(Go(f,i,g,v,b),c===1)for(let T=10;T<g-6;T+=g/6)X(f,T,10,g/6-8,v-20,"rgba(220,235,245,0.9)"),f.fillStyle="rgba(255,255,255,0.45)",f.fillRect(T,10,g/6-8,(v-20)*.4);else{X(f,0,0,g,7,"rgba(255,255,255,0.4)");for(let T=g/3;T<g;T+=g/3)X(f,T-1,0,2,v,"rgba(0,0,0,0.08)")}X(f,0,v-6,g,6,"rgba(0,0,0,0.12)"),Bs(f,g*.3,v-6,10,10,.2)});i.add("kawara",272,256,(c,f,d,g)=>{X(c,0,0,d,g,"#58617a");for(let v=0;v<g;v+=16)Sn(c,0,v,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let v=-4;v<d;v+=20)X(c,v,0,2,g,"rgba(0,0,0,0.18)");ln(c,i,d,g,.12)}),i.add("wood",256,256,(c,f,d,g)=>{X(c,0,0,d,g,"#6d4c37");for(let v=0;v<g;v+=14)X(c,0,v,d,2,"rgba(25,15,8,0.4)"),X(c,0,v+2,d,1,"rgba(255,220,180,0.07)");ln(c,i,d,g,.16)}),i.add("block",256,128,(c,f,d,g)=>{X(c,0,0,d,g,"#c9c7bf");for(let v=0;v<g;v+=32)for(let b=v/32%2?-32:0;b<d;b+=64)c.strokeStyle="rgba(80,80,80,0.35)",c.lineWidth=2,c.strokeRect(b+1,v+1,62,30);for(let v=0;v<d;v+=64)c.fillStyle="rgba(70,70,70,0.25)",c.fillRect(v+20,40,24,16);ln(c,i,d,g,.15),Bs(c,0,0,d,40,.1)}),i.add("lantern",64,96,(c,f,d,g)=>{c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),c.fill();for(let v=16;v<g-12;v+=7)X(c,4,v,d-8,1.5,"rgba(0,0,0,0.2)");X(c,d/2-14,2,28,8,"#222"),X(c,d/2-14,g-10,28,8,"#222"),Pt(c,"\u796D",d/2,g/2,d*.6,28,"#fff",900),f.fillStyle="#ff6a35",f.beginPath(),f.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),f.fill()}),i.add("busstop",96,96,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=8,c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.stroke(),Pt(c,"\u30D0\u30B9\u505C",d/2,g/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,c=>X(c,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(c,f,d,g)=>{c.save(),c.translate(d/2,g/2),c.rotate(Math.PI/4),c.fillStyle="#1b1b1b",c.fillRect(-41,-41,82,82),c.fillStyle="#f2c230",c.fillRect(-37,-37,74,74),c.restore(),c.fillStyle="#1b1b1b",c.fillRect(d/2-22,g/2-6,44,18),c.fillRect(d/2-16,g/2-16,18,12),c.fillRect(d/2+8,g/2-13,5,7),c.beginPath(),c.arc(d/2-12,g/2+15,5,0,7),c.arc(d/2+12,g/2+15,5,0,7),c.fill(),Pt(c,"\u8E0F\u5207",d/2,g/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((c,f)=>i.add("bridge"+f,64,176,(d,g,v,b)=>{X(d,0,0,v,b,"#b9b5ab"),ln(d,i,v,b,.2),X(d,6,6,v-12,b-12,"#a7a398"),Hr(d,c,v/2,14,b-14,34,"#3f3c37",800)})),i.add("signal",240,84,(c,f,d,g)=>{X(c,0,0,d,g,"#4a4d52"),X(c,0,0,d,5,"#5c6066"),ln(c,i,d,g,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([v,b])=>{c.fillStyle="#26282c",c.beginPath(),c.arc(b,g/2,33,0,7),c.fill(),c.fillStyle=v,c.beginPath(),c.arc(b,g/2,27,0,7),c.fill()})}),i.add("ped_sig",64,128,(c,f,d,g)=>{X(c,0,0,d,g,"#3d4045"),c.fillStyle="#5a1814",c.fillRect(8,8,d-16,g/2-12),c.fillStyle="#0d4f44",c.fillRect(8,g/2+4,d-16,g/2-12),c.fillStyle="rgba(255,255,255,0.18)",c.beginPath(),c.arc(d/2,g*.18,6,0,7),c.fill(),c.fillRect(d/2-5,g*.24,10,18)}),i.add("tomare",256,96,(c,f,d,g)=>{c.clearRect(0,0,d,g),c.fillStyle="rgba(244,244,238,0.012)",c.fillRect(0,0,d,g),Pt(c,"\u6B62\u307E\u308C",d/2,g/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((c,f)=>i.add("hodokyo"+f,256,44,(d,g,v,b)=>{X(d,0,0,v,b,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,v-8,b-8),Pt(d,c,v/2,b/2+1,v*.85,28,"#fff",800)}));let M=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];M.forEach(([c,f,d],g)=>{let v=M[(g+3)%4][0],b=M[(g+1)%4][0];i.add("ekimei"+g,320,124,(T,w,_,S)=>{X(T,0,0,_,S,"#3a3d42"),X(T,4,4,_-8,S-8,"#f8f8f3"),Pt(T,f,_/2,20,_*.5,15,"#2b2b2b",700),Pt(T,c,_/2,52,_*.6,40,"#151515",900),Pt(T,d,_/2,80,_*.5,12,"#555",600),X(T,4,S-30,_-8,26,"#1f9a50"),T.fillStyle="#fff",gh(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+v,12,S-17),T.textAlign="right",T.fillText(b+" \u2192",_-12,S-17),ln(T,i,_,S,.06),X(w,4,4,_-8,S-8,"#8a8a84")}),i.add("ekiplate"+g,220,48,(T,w,_,S)=>{X(T,0,0,_,S,"#4b3326"),ln(T,i,_,S,.2),Pt(T,c+"\u99C5",_/2,S/2+1,_*.8,30,"#f3ead8",800)})});for(let c of["l","r"])i.add("chev_"+c,96,120,(f,d,g,v)=>{X(f,0,0,g,v,"#f4f4ef"),X(f,4,4,g-8,v-8,"#1e5bb8"),f.fillStyle="#f8f8f4",f.beginPath();let b=c==="r"?1:-1,T=g/2,w=v/2;f.moveTo(T-b*26,w-40),f.lineTo(T+b*22,w),f.lineTo(T-b*26,w+40),f.lineTo(T-b*8,w+40),f.lineTo(T+b*40,w),f.lineTo(T-b*8,w-40),f.closePath(),f.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((c,f)=>i.add("tunnel"+f,360,80,(d,g,v,b)=>{X(d,0,0,v,b,"#e9e7e0"),X(d,4,4,v-8,b-8,"#24403b"),ln(d,i,v,b,.08),Pt(d,c,v/2,b*.42,v*.8,38,"#f4f2ea",800),Pt(d,"L = 170 m",v/2,b*.8,v*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(c,f,d,g)=>{X(c,0,0,d,g,"#f6f6f2"),c.fillStyle="#d42a22";for(let v=-20;v<g;v+=26)c.beginPath(),c.moveTo(4,v),c.lineTo(d/2,v+20),c.lineTo(d-4,v),c.lineTo(d-4,v+11),c.lineTo(d/2,v+31),c.lineTo(4,v+11),c.closePath(),c.fill();c.strokeStyle="#222",c.lineWidth=3,c.strokeRect(1.5,1.5,d-3,g-3)}),i.add("xing_plate",128,48,(c,f,d,g)=>{X(c,0,0,d,g,"#f6f6f2"),c.strokeStyle="#d8231c",c.lineWidth=4,c.strokeRect(3,3,d-6,g-6),Pt(c,"\u8E0F\u5207\u6CE8\u610F",d/2,g/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),X(c,0,0,d,7,"#e9ebee"),X(c,0,6,d,2,"rgba(60,70,80,0.5)"),X(c,0,g-6,d,6,"#d5d8dc");for(let v=3;v<d;v+=9)X(c,v,7,3,g-13,"#e2e5e9"),X(c,v+2,7,1,g-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(c,f,d,g)=>{let v=Ct(4242);X(c,0,0,d,g,"#3d3f3c");let b=38,T=b/Math.SQRT2;c.save(),c.beginPath(),c.rect(0,22,d,g-22),c.clip();for(let w=-2;w*T<g+b;w++)for(let _=-2;_*b<d+b;_++){let S=_*b+(w%2?b/2:0),E=22+w*T,A=.52+v()*.17,C=Math.min(1,Math.max(0,(E-g*.55)/(g*.4))),I=Math.round(255*A*(1-.38*C)),R=`rgb(${I-4},${I-2},${I-9})`;c.fillStyle=R,c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E+T-3.5),c.lineTo(S-T+3.5,E),c.closePath(),c.fill(),c.fillStyle="rgba(255,255,255,0.12)",c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E),c.closePath(),c.fill(),C>.3&&v()<.5&&(c.fillStyle=`rgba(70,96,52,${.25+.3*v()})`,c.beginPath(),c.arc(S+(v()-.5)*10,E+6,4+v()*6,0,7),c.fill())}c.restore(),Sn(c,0,g*.55,d,g*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),X(c,0,0,d,22,"#8c8d87"),X(c,0,18,d,4,"rgba(0,0,0,0.3)"),X(c,0,0,d,3,"rgba(255,255,255,0.2)"),ln(c,i,d,g,.12)}),i.add("wrail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),X(c,0,0,d,9,"#6a4a34"),X(c,0,0,d,2,"rgba(255,225,190,0.25)"),X(c,0,8,d,2,"rgba(20,10,5,0.45)"),X(c,0,g-10,d,10,"#5e412e"),X(c,0,g-10,d,2,"rgba(255,225,190,0.18)");for(let v=4;v<d;v+=12)X(c,v,9,5,g-19,"#634632"),X(c,v,9,1.2,g-19,"rgba(255,225,190,0.18)"),X(c,v+4,9,1,g-19,"rgba(20,10,5,0.4)");ln(c,i,d,g,.15)}),i.add("woodwall",t,t,(c,f,d,g)=>{let v=Ct(5151);X(c,0,0,d,g,"#5e4130");for(let b=0;b<g;b+=16){let T=v();X(c,0,b,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),X(c,0,b,d,2,"rgba(255,220,180,0.12)"),X(c,0,b+14,d,2,"rgba(15,8,4,0.45)");for(let w=v()*80;w<d;w+=60+v()*90)X(c,w,b+2,1.5,12,"rgba(15,8,4,0.35)")}Sn(c,0,0,d,g,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),ln(c,i,d,g,.2)}),i}var WM=11,GM=[7,8,9,10,11],XM=[["\u713C\u304D\u9CE5","#fbf6f2","#c8102e","#ff4fd8",1],["\u5C45\u9152\u5C4B","#fdf8ee","#c41e2a",null,1],["\u305D\u3070","#fbf7ef","#1f2a6e","#3fd8ff",1],["\u6D0B\u54C1\u5E97","#2a8a5a","#ffffff",null,0],["\u30B9\u30CA\u30C3\u30AF","#2a1f4a","#ff8ae8","#b45cff",0],["\u30AB\u30E9\u30AA\u30B1","#c8287a","#ffffff","#ffd0f0",0],["\u4E2D\u83EF\u6599\u7406","#1f4fa8","#ffffff",null,0],["\u30E9\u30FC\u30E1\u30F3","#c8241c","#fff6d8","#ffc94a",0],["\u55AB\u8336","#fdf4e4","#6a3a1e","#ffb84a",1],["\u713C\u8089","#fbf6f2","#b8186a","#b45cff",1],["\u713C\u304D\u9CE5","#fbf4fb","#a0128a","#b45cff",1]],Tl=(i,e,t,n,s,r)=>{i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()};function qM(i,e,t,n,s,[r,o,l,a,u]){let h=n/160,p=6*h,m=12*h;X(e,0,0,n,s,"#2a2b30"),Tl(e,p*.5,p*.5,n-p,s-p,m),e.fillStyle=o,e.fill(),e.save(),Tl(e,p*.5,p*.5,n-p,s-p,m),e.clip();let x=e.createRadialGradient(n/2,s/2,n*.1,n/2,s/2,s*.62);x.addColorStop(0,u?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"),x.addColorStop(1,"rgba(0,0,0,0.14)"),e.fillStyle=x,e.fillRect(0,0,n,s),e.restore();let y=(d,g,v,b)=>{d.save(),Tl(d,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),d.shadowColor=g,d.shadowBlur=v*h,d.strokeStyle=g,d.lineWidth=6*h,d.stroke(),d.shadowBlur=0,d.strokeStyle=b,d.lineWidth=2.2*h,d.stroke(),d.restore()};a?y(e,a,10,"#fff4fb"):(e.save(),Tl(e,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),e.strokeStyle=l,e.globalAlpha=.7,e.lineWidth=3*h,e.stroke(),e.restore());let M=p+20*h,c=s-p-20*h,f=Math.min(n*.62,(c-M)/[...r].length);Hr(e,r,n/2,M,c,f,l,900,u?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.25)"),ln(e,i,n,s,.05),X(t,0,0,n,s,"#000"),Tl(t,p*.5,p*.5,n-p,s-p,m),t.fillStyle=u?"#b4aea4":a&&o==="#2a1f4a"?"#100c1c":o,t.globalAlpha=u?1:.55,t.fill(),t.globalAlpha=1,a&&y(t,a,12,"#ffffff"),Hr(t,r,n/2,M,c,f,u||o==="#2a1f4a"?l:"#ffffff",900),u&&(t.save(),t.globalCompositeOperation="multiply",Hr(t,r,n/2,M,c,f,"#8a8a8a",900),t.restore())}function YM(i,e,t,n,s){let r=Ct(7331),o=s/1.26/(n/3);e.clearRect(0,0,n,s);let l=11,a=n/l,u=.15*(s/1.26);X(e,0,0,n,s-u*.5,"#4d5f92");for(let h=0;h<l;h++){let p=h*a,m=e.createLinearGradient(p,0,p+a,0);m.addColorStop(0,"#2c3760"),m.addColorStop(.18,"#5a70a8"),m.addColorStop(.45,"#9fb4e0"),m.addColorStop(.7,"#6a80b8"),m.addColorStop(1,"#33416e"),e.fillStyle=m,e.fillRect(p,0,a,s-u*.5)}for(let h=s-u*.5-52;h>0;h-=52)Sn(e,0,h,n,10,[[0,"rgba(20,26,50,0.45)"],[1,"rgba(20,26,50,0)"]]),X(e,0,h-2,n,2,"rgba(200,215,240,0.35)");for(let h=0;h<l;h++){let p=(h+.5)*a,m=s-u*.5,x=a*.47;e.save(),e.translate(p,m),e.scale(1,o),e.fillStyle="#26305a",e.beginPath(),e.arc(0,0,x,0,7),e.fill(),e.fillStyle="#5c72aa",e.beginPath(),e.arc(0,0,x*.8,0,7),e.fill(),e.fillStyle="rgba(190,206,240,0.8)",e.beginPath(),e.arc(-x*.2,-x*.25,x*.38,0,7),e.fill(),e.fillStyle="#3a4878",e.beginPath(),e.arc(0,0,x*.22,0,7),e.fill(),e.restore()}e.save(),e.globalCompositeOperation="source-atop",e.globalAlpha=.12,e.fillStyle=i.grain,e.fillRect(0,0,n,s),e.restore();for(let h=0;h<40;h++)e.fillStyle=r()<.5?"rgba(255,255,255,0.08)":"rgba(0,0,20,0.1)",e.fillRect(r()*n,r()*(s-u),a*(.5+r()),3+r()*6)}function ZM(i,e,t,n,s,r){X(e,0,0,n,s,"#1c2b5e"),X(e,0,0,n,4,"rgba(255,255,255,0.3)"),X(e,0,s-5,n,5,"rgba(0,0,0,0.25)"),e.strokeStyle="#d9b44a",e.lineWidth=2,e.strokeRect(7,7,n-14,s-14),Pt(e,r,n/2,s/2+2,n*.66,52,"#f6d35a",900,"rgba(60,40,0,0.5)"),ln(e,i,n,s,.06),X(t,0,0,n,s,"#0a1024"),Pt(t,r,n/2,s/2+2,n*.66,52,"#f0c850",900)}function KM(i,e,t,n,s,r,o){let l=Ct(r),a=n/360;X(e,0,0,n,s,"#4b3426"),Sn(e,0,0,n,s,[[0,"rgba(255,230,200,0.08)"],[1,"rgba(0,0,0,0.2)"]]);let u=n*.12,h=s*(o?.3:.17),p=n*.76,m=s*(o?.62:.56);for(let x of[e,t])X(x,u,h,p,m,"#e9b56c"),Sn(x,u,h,p,m,[[0,"rgba(255,240,200,0.55)"],[1,"rgba(110,60,25,0.4)"]]);if(!o)for(let x=h+m*.32;x<h+m-6*a;x+=m*.22){for(let y=u+4*a;y<u+p-10*a;y+=(9+l()*12)*a){let M=(10+l()*12)*a;X(e,y,x-M,7*a,M,["#c0503a","#3a6ab0","#e8c050","#5a9a50","#d07a9a"][Math.floor(l()*5)])}X(e,u,x,p,5*a,"#6e4a30")}o&&(X(e,u,h-s*.12,p,s*.16,"#28356a"),X(t,u,h-s*.12,p,s*.16,"#000")),X(e,u+p/2-4*a,h,8*a,m,"#4b3426"),X(t,u+p/2-4*a,h,8*a,m,"#000"),X(e,0,h+m,n,6*a,"#3a281d"),ln(e,i,n,s,.15)}function $M(i,e,t,n,s,r,o){let l=n/360;if(X(e,0,0,n,s,r?"#5e4130":"#ece2cc"),r)for(let m=0;m<s;m+=16*l)X(e,0,m,n,2*l,"rgba(15,8,4,0.4)");for(let m of[0,n-14*l])X(e,m,0,14*l,s,"#4b3426");X(e,0,s-12*l,n,12*l,"#3a281d");let a=n*.2,u=s*.22,h=n*.6,p=s*.46;X(e,a-8*l,u-8*l,h+16*l,p+16*l,"#4a3020"),Sn(e,a,u,h,p,[[0,"#4f78b8"],[1,"#a6c8ec"]]),X(e,a+h/2-3*l,u,6*l,p,"#4a3020"),o&&(X(t,a,u,h,p,"#ffcf8f"),X(t,a+h/2-3*l,u,6*l,p,"#000")),ln(e,i,n,s,.12)}function JM(i){let e=0,t=0,n=0;for(let[s,r]of i)e+s+4>ks&&(e=0,t+=n+4,n=0),e+=s+4,n=Math.max(n,r);return t+n}function fg(i,e,t,n){let s=e==="hi"?1:.5,r=[360*s,432*s],o=[360*s,348*s],l=[160*s,384*s],a=[512,76],u=[],h=[],p=[];for(let c=0;c<WM;c++)u.push(["shop_p"+c,r,(f,d,g,v,b)=>KM(f,d,g,v,b,6100+c,c===2||c===7||c===10)]);for(let c of GM)for(let f of[!1,!0])h.push(["win"+c+(f?"L":""),o,(d,g,v,b,T)=>$M(d,g,v,b,T,c===8||c===11,f)]);XM.forEach((c,f)=>p.push(["vsB"+f,l,(d,g,v,b,T)=>qM(d,g,v,b,T,c)]));let m=[...u.slice(0,5),p[0],...u.slice(5,10),p[1],u[10],...h.slice(0,4),p[2],...h.slice(4,9),p[3],h[9],...p.slice(4),["hsN_\u6D0B\u54C1\u5E97",a,(c,f,d,g,v)=>ZM(c,f,d,g,v,"\u6D0B\u54C1\u5E97")],["kawaraC",[240,256],YM]],x=JM(m.map(c=>c[1])),y=Math.ceil((x+(n?16+n.rows:4))/4)*4,M=new mh(y,2,i.cells);for(let[c,[f,d],g]of m)M.add(c,f,d,(v,b,T,w)=>g(M,v,b,T,w));if(t){let c=t.img.width,f=t.img.height;for(let d of t.tiles)M.paintCell(d.name,t.img,d.x*c,d.y*f,d.w*c,d.h*f,d.ey<0?-1:d.ey*f)}return M.houses=!!n&&jM(M,n),M}function jM(i,e){let n=i.y+i.rowH+4+12;if(n+e.rows>i.H)return!1;i.x=0,i.y=n,i.rowH=0,i.a.clearRect(0,n-8,ks,i.H-n+8);try{for(let s of e.tiles)i.add(s.name,s.w,s.h,(r,o,l,a)=>{r.clearRect(0,0,l,a),r.drawImage(e.img,s.x,s.y,s.w,s.h,0,0,l,a),o.drawImage(e.img,s.x,s.ey,s.w,s.h,0,0,l,a)})}catch(s){return console.warn("painted houses:",s.message),!1}return!0}function dg(i){let l=ph(1024,3328),a=l.getContext("2d"),u=Ct(321),h={},p={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},m=(b,T,w)=>{let _=p[b],S=256,E=b==="pine",A=b==="sakura";a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let C=[[S,S,E?80:92]];for(let R=0;R<(E?10:14);R++){let L=u()*6.28,D=45+u()*120;C.push([S+Math.cos(L)*D,S+Math.sin(L)*D*(E?.42:.9),Math.min(34+u()*52,232-D)])}let I=A?2300:E?2600:2300;for(let R=0;R<I;R++){let L=C[Math.floor(u()*C.length)],D=u()*6.28,O=Math.sqrt(u())*L[2],H=L[0]+Math.cos(D)*O,B=L[1]+Math.sin(D)*O*(E?.45:1),V=O/L[2],k=Math.min(4,Math.max(0,Math.floor(.55+u()*2.7+(V>.82?.5:0))));if(a.fillStyle=_[k],A){let q=7+u()*8;a.beginPath(),a.arc(H,B,q,0,7),a.fill(),u()<.25&&(a.fillStyle=_[4],a.beginPath(),a.arc(H-q*.3,B-q*.3,q*.4,0,7),a.fill())}else if(E)a.save(),a.translate(H,B),a.rotate((u()-.5)*1.2),a.fillRect(-11,-1.6,22,3.2),a.restore();else if(b==="momiji"){let q=8+u()*7;a.save(),a.translate(H,B),a.rotate(u()*6.28),a.beginPath();for(let ee=0;ee<10;ee++){let we=ee%2?q*.42:q,Ae=ee/10*6.2832;a.lineTo(Math.cos(Ae)*we,Math.sin(Ae)*we)}a.closePath(),a.fill(),a.restore()}else if(b==="ginkgo"){let q=9+u()*7;a.save(),a.translate(H,B),a.rotate(u()*6.28),a.beginPath(),a.moveTo(0,0),a.arc(0,0,q,-.95,.95),a.closePath(),a.fill(),a.restore()}else{let q=9+u()*10;a.beginPath(),a.ellipse(H,B,q,q*.55,u()*6.28,0,7),a.fill()}}for(let R=0;R<90;R++){let L=u()*6.28,D=150+u()*85,O=S+Math.cos(L)*D,H=S+Math.sin(L)*D*(E?.45:.92);a.fillStyle=_[1+Math.floor(u()*4)],E?(a.save(),a.translate(O,H),a.rotate((u()-.5)*1.2),a.fillRect(-9,-1.6,18,3.2),a.restore()):(a.beginPath(),a.arc(O,H,A?6+u()*6:7+u()*6,0,7),a.fill())}if(A)for(let R=0;R<14;R++){a.strokeStyle="rgba(150,90,100,0.35)",a.lineWidth=1.5;let L=S+(u()-.5)*300,D=S+60+u()*120;a.beginPath(),a.moveTo(L,D),a.lineTo(L+(u()-.5)*40,D-20-u()*30),a.stroke()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},x=(b,T,w,_)=>{a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let S=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],E=_?120:170;for(let A=0;A<E;A++){let C=256+(u()-.5)*(_?330:380)*Math.sqrt(u()),I=150+u()*(_?230:300)*(1-Math.abs(C-256)/300),R=(C-256)*.35+(u()-.5)*90,L=9+u()*9,D=C+R,O=512-I,H=Math.min(4,Math.floor(u()*2.2+I/380*2.6)),B=a.createLinearGradient(0,512,0,O);B.addColorStop(0,S[0]),B.addColorStop(.6,S[Math.max(1,H-1)]),B.addColorStop(1,S[H]),a.fillStyle=B,a.beginPath(),a.moveTo(C-L/2,512),a.quadraticCurveTo(C-L/2+R*.3,512-I*.55,D,O),a.quadraticCurveTo(C+L/2+R*.3,512-I*.5,C+L/2,512),a.fill()}if(_)for(let A=0;A<16;A++){let C=110+u()*290,I=150+u()*200,R=u();if(a.strokeStyle="#3e7334",a.lineWidth=5,a.beginPath(),a.moveTo(C+(u()-.5)*20,512),a.quadraticCurveTo(C+(u()-.5)*30,(I+512)/2,C,I),a.stroke(),R<.55){a.fillStyle="#fbfaf2";for(let L=0;L<12;L++){let D=L/12*6.283;a.beginPath(),a.ellipse(C+Math.cos(D)*11,I+Math.sin(D)*11,9,4.5,D,0,7),a.fill()}a.fillStyle="#f2c230",a.beginPath(),a.arc(C,I,8,0,7),a.fill()}else if(R<.85)a.fillStyle="#f6c62e",a.beginPath(),a.arc(C,I,15,0,7),a.fill(),a.fillStyle="#ffe27a",a.beginPath(),a.arc(C-3,I-3,8,0,7),a.fill();else{a.fillStyle="#9b7fd6";for(let L=0;L<6;L++)a.beginPath(),a.arc(C+(u()-.5)*16,I+(u()-.5)*16,6,0,7),a.fill()}}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},y=(b,T,w)=>{let _=Ct(97);a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip(),a.lineCap="round";let S=(E,A,C,I,R,L)=>{let D=E+Math.cos(C)*I,O=A+Math.sin(C)*I;if(a.strokeStyle=L>3?"#76605f":L>1?"#6c5458":"#62494f",a.lineWidth=R,a.beginPath(),a.moveTo(E,A),a.lineTo(D,O),a.stroke(),L<=0||R<.7)return;let H=2+(_()<.4?1:0);for(let B=0;B<H;B++){let V=C+(_()-.5)*1.1+(B-(H-1)/2)*.42;V=V*.8+-Math.PI/2*.2,S(D,O,V,I*(.62+_()*.2),R*.68,L-1)}};for(let E=0;E<6;E++)S(256+(_()-.5)*40,500,-Math.PI/2+(_()-.5)*.9,110+_()*50,5.6,6);a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},M=(b,T,w,_,S,E=4,A=!1)=>{let C=Ct(_),I=1024,R=504,L=A?246/504:1;a.save(),a.translate(T,w+8*L),a.beginPath(),a.rect(0,0,512,R*L),a.clip(),a.scale(.5,L);let D=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],O=ee=>{let we=ee/I;return(.5+.5*Math.min(1,we/.45)**.8)*(1-.4*Math.max(0,(we-.9)/.1))},H=(ee,we,Ae,Me)=>{we=Math.min(we,R*.985);let G=ee+Ae,J=R-we,xe=ee+Ae*.25,Pe=R-we*.62-Math.abs(Ae)*.35;a.moveTo(ee-Me/2,R),a.quadraticCurveTo(xe-Me*.42,Pe,G,J),a.quadraticCurveTo(xe+Me*.42,Pe+Me*.5,ee+Me/2,R),a.closePath()},B=[];for(let ee=24+C()*24;ee<I-20;ee+=(ee<I*.25?56:44)+C()*26)B.push(ee);let V=()=>B[Math.floor(C()*B.length)],k=(ee,we,Ae,Me,G,J,xe,Pe,re)=>{let ye=D.map(()=>[]);for(let Oe=0;Oe<ee;Oe++){let ke=V(),Te=ke+(C()-.5)*34,He=O(Te),te=Te/I,de=R*(we+C()*(Ae-we))*He*1.12,j=(C()-.5)*Me+(Te-I*.45)*.12;ye[Math.min(8,Pe+Math.floor(C()*(re-Pe+1)+te*1.2))].push([Te,de,j,G+C()*(J-G)])}ye.forEach((Oe,ke)=>{if(!Oe.length)return;let Te=a.createLinearGradient(0,R,0,R*(1-Ae*.8));Te.addColorStop(0,D[xe]),Te.addColorStop(.55,D[Math.round((xe+ke)/2)]),Te.addColorStop(1,D[ke]),a.fillStyle=Te,a.beginPath();for(let He of Oe)H(He[0],He[1],He[2],He[3]);a.fill()})};k(360,.25,.55,150,12,22,0,2,3),k(240,.4,.78,260,10,17,1,4,6);let q=[];for(let ee=0;ee<E;ee++){let we=I*(.14+C()*.74),Ae=O(we);q.push({fx:we,fy:Math.max(56,R-R*(.56+C()*.38)*Ae*1.05),kind:C()<S?0:1,sz:.85+C()*.4,tilt:.72+C()*.28,rot:C()*6.28,sx:we+(C()-.5)*60})}a.lineCap="round";for(let ee of q)a.strokeStyle="#2c6623",a.lineWidth=6,a.beginPath(),a.moveTo(ee.sx,R),a.quadraticCurveTo((ee.sx+ee.fx)/2+(C()-.5)*40,(R+ee.fy)/2,ee.fx,ee.fy+8),a.stroke();k(150,.5,.92,330,9,16,2,6,7);for(let ee of q){if(a.save(),a.translate(ee.fx,ee.fy),a.scale(1,ee.tilt),ee.kind===0){let we=38*ee.sz;for(let Ae=0;Ae<16;Ae++){let Me=ee.rot+Ae/16*6.283;a.fillStyle=Math.sin(Me)>.4?"#e2e3ea":"#fdfdf6",a.beginPath(),a.ellipse(Math.cos(Me)*we*.56,Math.sin(Me)*we*.56,we*.48,we*.14,Me,0,7),a.fill()}a.fillStyle="#f2b51a",a.beginPath(),a.arc(0,0,we*.28,0,7),a.fill(),a.fillStyle="#fbe060",a.beginPath(),a.arc(-we*.07,-we*.07,we*.14,0,7),a.fill()}else{let we=40*ee.sz;for(let Ae=0;Ae<5;Ae++){let Me=ee.rot+Ae/5*6.283;a.fillStyle="#fccc1e",a.beginPath(),a.ellipse(Math.cos(Me)*we*.52,Math.sin(Me)*we*.52,we*.52,we*.38,Me,0,7),a.fill()}for(let Ae=0;Ae<5;Ae++){let Me=ee.rot+Ae/5*6.283;a.fillStyle="#ffe873",a.beginPath(),a.ellipse(Math.cos(Me)*we*.62,Math.sin(Me)*we*.62-3,we*.26,we*.15,Me,0,7),a.fill()}a.fillStyle="#e39b14",a.beginPath(),a.arc(0,0,we*.2,0,7),a.fill()}a.restore()}k(40,.42,.85,280,8,14,3,6,7),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512*L)/3328,v1:1-(w+8*L)/3328}},c=(b,T,w,_)=>{let S=Ct(_),E=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let A=[];for(let C=0;C<15;C++){let I=(C+S()*.6)/15,R=40+I*432,L=500-300*Math.sqrt(Math.max(0,1-((R-256)/232)**2));A.push([R,L+60+S()*50,54+S()*46])}for(let C=0;C<2600;C++){let I=A[Math.floor(S()*A.length)],R=S()*6.283,L=Math.sqrt(S())*I[2],D=I[0]+Math.cos(R)*L,O=Math.min(505,I[1]+Math.sin(R)*L*.85),H=Math.sin(R)<-.2?1:0,B=Math.max(0,Math.min(6,Math.floor(S()*2.4+(1-O/512)*3.2+H*1.3+L/I[2]*.8)));a.fillStyle=E[B],a.beginPath(),a.ellipse(D,O,7+S()*7,4+S()*4,S()*6.28,0,7),a.fill()}for(let C=0;C<130;C++){let I=A[Math.floor(S()*A.length)],R=-Math.PI*(.1+S()*.8),L=(.35+S()*.6)*I[2],D=I[0]+Math.cos(R)*L,O=I[1]+Math.sin(R)*L*.85;if(O>470)continue;let H=6+S()*5,B=S()*6.28,V=S()<.12;a.fillStyle=V?"#f3d2dc":"#fbfbf6";for(let k=0;k<5;k++){let q=B+k/5*6.283;a.beginPath(),a.ellipse(D+Math.cos(q)*H*.55,O+Math.sin(q)*H*.5,H*.5,H*.36,q,0,7),a.fill()}a.fillStyle="#d9b628",a.beginPath(),a.arc(D,O,H*.22,0,7),a.fill()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},f=(b,T,w,_)=>{let S=Ct(_),E=1024,A=512;a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,250),a.clip(),a.scale(.5,250/512);let C=["#0c2a12","#143a19","#1f4f23","#2e682f","#46843a","#66a047","#8ebd58","#b6d874"],I=O=>Math.max(0,1-((O-E/2)/(E*.47))**2)**.6,R=(O,H,B,V)=>{let k=O+B,q=A-H,ee=O+B*.3,we=A-H*.6;a.moveTo(O-V/2,A),a.quadraticCurveTo(ee-V*.5,we,k,q),a.quadraticCurveTo(ee+V*.5,we+V*.4,O+V/2,A),a.closePath()},L=(O,H,B,V,k,q,ee)=>{let we=C.map(()=>[]);for(let Ae=0;Ae<O;Ae++){let Me=E/2+(S()-.5)*E*.8*Math.sqrt(S()),G=I(Me),J=A*.9*G*(H+S()*(B-H)),xe=(Me-E/2)*.22+(S()-.5)*120,Pe=Math.min(7,q+Math.floor(S()*(ee-q+1)));G>.03&&we[Pe].push([Me,J,xe,V+S()*(k-V)])}we.forEach((Ae,Me)=>{if(!Ae.length)return;let G=a.createLinearGradient(0,A,0,A*.1);G.addColorStop(0,C[Math.max(0,Me-3)]),G.addColorStop(1,C[Me]),a.fillStyle=G,a.beginPath();for(let J of Ae)R(J[0],J[1],J[2],J[3]);a.fill()})};L(150,.35,.7,26,46,1,3),L(110,.5,.92,22,38,3,5);let D=[["#d27ac4","#f4bce6"],["#9f74da","#d2b6f4"],["#fbfbf6","#ffffff"],["#ea88b2","#fcc8de"]];for(let O=0;O<48;O++){let H=E/2+(S()-.5)*E*.84,B=I(H),V=A-A*.9*B*(.55+S()*.42),[k,q]=D[Math.floor(S()*D.length)],ee=22+S()*12,we=S()*6.28;if(!(B<.15)){a.fillStyle=k;for(let Ae=0;Ae<5;Ae++){let Me=we+Ae*1.2566;a.beginPath(),a.ellipse(H+Math.cos(Me)*ee*.55,V+Math.sin(Me)*ee*.45,ee*.52,ee*.36,Me,0,7),a.fill()}a.fillStyle=q;for(let Ae=0;Ae<5;Ae++){let Me=we+Ae*1.2566;a.beginPath(),a.ellipse(H+Math.cos(Me)*ee*.45,V+Math.sin(Me)*ee*.35-3,ee*.25,ee*.16,Me,0,7),a.fill()}a.fillStyle=k==="#fbfbf6"?"#f2b51a":"#6e2f62",a.beginPath(),a.arc(H,V,ee*.18,0,7),a.fill()}}L(34,.4,.75,20,34,4,6),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+250)/3328,v1:1-w/3328}};y("twigs",0,0),c("flowerbush",512,0,6151),m("leafA",0,512),m("leafB",512,512),m("sakura",0,1024),m("pine",512,1024),m("momiji",0,1536),m("ginkgo",512,1536),x("grass",0,2304,!1),x("flowers",512,2304,!0),M("bankA",0,2816,4111,.7),M("bankB",512,2816,4127,.35),f("bedA",0,2048,7741),M("bankC",512,2048,4133,0,0,!0);let d=new ri(l);d.colorSpace=qt,d.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let g=1-2816/3328,v=1-2824/3328;return{tex:d,cells:h,tuftV:[g,1-2304/3328,v,(g+v)/2]}}var un=[1,1,1],Ee={pole:_e("#b1b0a9"),metal:_e("#8d9198"),black:_e("#2a2b30"),yellow:_e("#f2c230"),white:_e("#f4f3ee"),trans:_e("#a0a3a8"),lampPole:_e("#727780"),lampHead:_e("#dcdcd6"),trunk:_e("#6a5444"),trunkDark:_e("#4b3a33"),bark:_e("#7a6556"),leaf:_e("#86ba4c"),leafShade:_e("#2c6640"),sakura:_e("#ffd3e3"),sakuraShade:_e("#de94b4"),pine:_e("#55874c"),pineShade:_e("#1d4632"),cedar:_e("#41713e"),cedarShade:_e("#1b3e2a"),roof:_e("#bdbbb3"),parapet:_e("#dcdad2"),pipe:_e("#c4c4bf"),orange:_e("#f07a22"),red:_e("#d8352a"),vermilion:_e("#e2482c"),concrete:_e("#c9c7c0"),stone:_e("#a8a69e"),terracotta:_e("#b8653d"),rail:_e("#eeeeea")},k0=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(_e),zs=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(_e),QM=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(_e),pg=["#c62f2a","#2b46a6","#7b3c9e","#b8336f","#a8282a","#273b86"].map(_e),xh=null;function wg(i){xh=i}var li=i=>xh.uv(i),Zo=li,Tg=(i,e)=>{let t=1;for(;xh.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function Eg(i,e,t,n,s=0){let r=new Je().makeRotationY(s);r.setPosition(e,t,n);let o=new Je().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var z0=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let l=e[5];(l==="g"&&e[6]==="l"||l==="d"||l==="k"||l==="c"||l==="n"||l==="p")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},cn=(i,e,t,n,s,r,o,l=un)=>{z0(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,li(o)),i.litV=0},Vi=(i,e,t,n,s,r,o,l=un)=>{z0(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,li(o)),i.litV=0},Wi=(i,e,t,n,s,r,o,l=un)=>{z0(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,li(o)),i.litV=0},Yo=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?li(r):void 0),eS=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Ag(i){return eS.map(e=>new z(e[0],e[1],e[2]).applyMatrix4(i))}function H0(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Ee.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Ee.black:Ee.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Ee.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Ee.metal);let o=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,Ee.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,Ee.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Ee.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Ee.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Ee.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Ee.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Ee.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Ee.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,Ee.metal);return i.atlas.setM(e),cn(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&cn(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new z(u[0],u[1],u[2]).applyMatrix4(e))}var vh=new z;function dr(i,e,t,n,s,r){i.lamps&&(vh.set(t,n,s).applyMatrix4(e),i.lamps.push(vh.x,vh.y,vh.z,r))}function V0(i,e,t,n={}){let s=i.color;s.setM(e),dr(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Ee.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Ee.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Ee.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Ee.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,un);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Rg(i,e,t=.04){let n=i.color;n.setM(e),dr(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Ee.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Ee.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Ee.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,un),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function qo(i,e,t,n,s,r,o=!1,l=!1){let a=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[h,p]=a[u],[m,x]=a[(u+1)%4];i.quad([h*n,e,p*n],[h*s,t,p*s],[m*s,t,x*s],[m*n,e,x*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),l&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var tS=_e("#202127");function Rl(i,e){let t=i.color;t.setM(e),dr(i,e,0,3.4,0,.9);let n=tS,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),qo(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),qo(t,3.64,3.84,.23,.05,n),qo(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,un),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],un,{u0:0,u1:1,v0:0,v1:1})}function W0(i,e,t){let n=Math.floor(t()*3),s=[Ee.red,_e("#2f6fd8"),Ee.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Un(s,.8)),i.atlas.setM(e),cn(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function B0(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,_e("#e6e6e1")),i.atlas.setM(e),cn(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function Cg(i,e,t){let n=i.color;n.setM(e);let s=t.pick([_e("#c8ccd2"),_e("#c0392b"),_e("#2c6fb7"),_e("#2b2b2b"),_e("#e8c84a"),_e("#e98fb0")]);for(let o of[-.52,.52])for(let l=0;l<12;l++){let a=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([o+Math.cos(a)*.33,.34+Math.sin(a)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Ee.black)}let r=(o,l)=>n.rod(o,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Ee.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Ee.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Ee.metal)}function Pg(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Ee.orange),t.cyl(0,.04,0,.16,.03,.68,10,Ee.orange),t.cyl(0,.32,0,.115,.095,.12,10,Ee.white,!1)}function G0(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Ee.terracotta),i.leaf.setM(e),Gi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}var nS=[[.35,.455],[.455,.56],[.56,.665]],mg=_e("#6b4a32");function gg(i,e,t,n,s){let r=i.color,o=i.atlas,l=.62,a=li("shop_p1"),u=a.u1-a.u0,h=a.v1-a.v0;r.setM(e),o.setM(e);for(let p of[-1,1])r.box(t+p*l-.03,0,n-.32,t+p*l+.03,1.32,n+.24,mg);for(let p=0,m=Math.floor(s()*3);p<3;p++){let x=.2+p*.4,y=x+.36,M=n-.26+p*.16,c=M+.14,[f,d]=nS[(p+m)%3];o.quad([t+l,x,M],[t-l,x,M],[t-l,y,c],[t+l,y,c],un,{u0:a.u0+u*.14,u1:a.u0+u*.86,v0:a.v1-h*d,v1:a.v1-h*f}),r.box(t-l,x-.05,M-.06,t+l,x,M+.12,mg)}}function Ig(i,e,t,n=.8){i.leaf.setM(e),Gi(i,[0,n*.3,0],0,n*.6,0,n,t()<.5?"leafA":"leafB",7,t,[1,1,1],[.5,.58,.66],[0,n*1.4])}function pr(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Ee.metal),i.atlas.setM(e),n<0?Wi(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Vi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function X0(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Ee.white:Ee.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Ee.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Ee.black),i.atlas.setM(e),t<0?Wi(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Vi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function Lg(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,_e("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,_e("#f0a020"))}function q0(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Ee.orange);let s=0,r=3.25,o=.42,l=14;for(let a=0;a<l;a++){let u=a/l*Math.PI*2,h=(a+1)/l*Math.PI*2,p=(m,x,y)=>[t*y,r+Math.sin(m)*x,s+Math.cos(m)*x-.25];Yo(n,p(0,0,-.02),p(t>0?h:u,o,-.02),p(t>0?u:h,o,-.02),Ee.orange),Yo(n,p(0,0,-.035),p(t>0?h:u,o*.86,-.035),p(t>0?u:h,o*.86,-.035),_e("#dfe9f2"))}}var Ko=null;function Dg(i){Ko=i}var Al=1;function Ng(i){Al=i}function Gi(i,e,t,n,s,r,o,l,a,u,h,p,m=0){let x=Ko[o],y=1+(1-Al)*.35;l=Math.max(2,Math.round(l*Al));for(let M=0;M<l;M++){let c=a()*2-1,f=a()*2-1,d=a()*2-1;m&&(f=1.2+a());let g=Math.hypot(c,f,d)||1;c/=g,f/=g,d/=g;let v=-d,b=0,T=c;g=Math.hypot(v,T),g<.1&&(v=1,T=0,g=1),v/=g,T/=g;let w=f*T-d*b,_=d*v-c*T,S=c*b-f*v,E=Math.PI+(a()-.5)*.9,A=Math.cos(E),C=Math.sin(E),I=v*A+w*C,R=b*A+_*C,L=T*A+S*C,D=w*A-v*C,O=_*A-b*C,H=S*A-T*C,B=r*(1.3+a()*.45)*y/2,V=t+(a()-.5)*r*.6,k=n+(a()-.5)*r*(m?.15:.5),q=s+(a()-.5)*r*.6,ee=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Me,G])=>[V+(I*Me+D*G)*B,k+(R*Me+O*G)*B*(m?.6:1),q+(L*Me+H*G)*B]),we=ee.map(Me=>{let G=Me[0]-e[0],J=Me[1]-e[1],xe=Me[2]-e[2],Pe=Math.hypot(G,J,xe)||1;G/=Pe,J/=Pe,xe/=Pe;let re=Me[0]-t,ye=Me[1]-n,Oe=Me[2]-s;return Pe=Math.hypot(re,ye,Oe)||1,[G*.7+re/Pe*.3,J*.7+ye/Pe*.3+(m?.5:0),xe*.7+Oe/Pe*.3]}),Ae=ee.map(Me=>M0(h,u,.45+.55*Math.max(0,Math.min(1,(Me[1]-p[0])/(p[1]-p[0])))));i.leaf.card(ee,we,x,Ae)}}function Y0(i,e,t,n="grass",s=1){let r=Ko[n],o=(.42+t()*.38)*s,l=o*1.2,a=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],p=[.6,.64,.58],m=[1,1,1];i.leaf.setM(e);for(let x of[a,a+Math.PI/2]){let y=Math.cos(x)*l/2,M=Math.sin(x)*l/2;i.leaf.card([[-y,-.05,-M],[y,-.05,M],[y,o,M],[-y,o,-M]],h,r,[p,p,m,m])}}function Cl(i,e,t,n=1){let s=Ko.flowerbush;if(!s)return;let r=(.8+t()*.35)*n,o=r*1.7,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,y=Math.sin(m)*o/2;i.leaf.card([[-x,-.06,-y],[x,-.06,y],[x,r,y],[-x,r,-y]],u,s,[h,h,p,p])}}function yh(i,e,t,n=1){let s=Ko.bedA;if(!s)return;let r=(.36+t()*.16)*n,o=r*2,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,y=Math.sin(m)*o/2;i.leaf.card([[-x,-.04,-y],[x,-.04,y],[x,r,y],[-x,r,-y]],u,s,[h,h,p,p])}}var iS=[.62,.68,.74],Fg=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],sS=[0,1,2,0,2,3,0,3,4],rS=Fg.map(([,i])=>M0(iS,un,i));function Z0(i,e,t,n,s,r,o,l=1,a=null){let u=Ko[a||(o()<.5?"bankA":"bankB")],h=.82*l,p=(h+.06)*2.03,m=i.leaf;for(let x of sS){let[y,M]=Fg[x],c=(y-.5)*p;m.vtx(e+s*c,t+M*(h+.06)-.06,n+r*c,0,1,0,u.u0+(u.u1-u.u0)*y,u.v0+(u.v1-u.v0)*M,rS[x])}}var Ug=()=>Al>.7?.9:1.25;function oS(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Ee.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Ee.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],a=7+Math.floor(t()*3);for(let u=0;u<a;u++){let h=t()*6.28,p=(.6+t())*1.3*n;Gi(i,r,Math.cos(h)*p,s*(.62+t()*.3),Math.sin(h)*p,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],l)}Gi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],l)}function vg(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Ee.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(2.2+t()*1.6)*n,m=[Math.cos(h)*p,s*(.62+t()*.18),Math.sin(h)*p];i.color.rod([0,s*.4,0],m,.12*n,.05*n,5,Ee.trunkDark),r.push(m),i.color.rod(m,[m[0]*1.25,m[1]+.9*n,m[2]*1.25],.05*n,.02*n,4,Ee.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],l=[s*.5,s*1.1],a=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Gi(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],a,l);Gi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],a,l)}function aS(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,l=[r*.4,o*.45,.2],a=[r,o*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,Ee.trunkDark),s.rod(l,a,.15*n,.09*n,6,Ee.trunkDark),i.leaf.setM(e);let u=[[a[0],a[1]+.3,a[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[a[0]+.9*n,a[1]-.6,.8,1.1]];for(let[h,p,m,x]of u)s.rod(h>l[0]?l:a,[h,p-.2,m],.07*n,.04*n,4,Ee.trunkDark),Gi(i,[h,p-.8,m],h,p,m,x*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[p-.7,p+.5],1)}function lS(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Ee.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(1.8+t()*1.4)*n,m=[Math.cos(h)*p,s*(.55+t()*.2),Math.sin(h)*p];i.color.rod([0,s*.38,0],m,.09*n,.04*n,5,Ee.trunkDark),r.push(m)}i.leaf.setM(e);let o=[0,s*.7,0],l=[s*.45,s*1.1],a=[.62,.52,.56];for(let u of r)Gi(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],a,l);Gi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],a,l)}function cS(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Ee.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],l=[.68,.6,.52];for(let a=0;a<7;a++){let u=s*(.34+a*.09),h=(2.1-a*.24)*n,p=t()*6.28;Gi(i,r,Math.cos(p)*h*.35,u,Math.sin(p)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],l,o)}}function uS(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,_e("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),p=h/r;s.cyl(o*p,h,0,.135*n*(1-p*.6),.13*n*(1-p*.6),.05,7,_e("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),p=t()*6.28,m=(.8+t()*1.6)*n,x=h/r;s.rod([o*x,h,0],[o*x+Math.cos(p)*m,h+m*.9,Math.sin(p)*m],.035*n,.012*n,4,_e("#8b7f78"))}let l=r*.7,a=(1.5+t()*.5)*n;i.leaf.setM(e),Gi(i,[o*.7,l,0],o*.7,l,0,a,"twigs",3,t,[1,1,1],[.92,.9,.92],[l-a,l+a])}function hS(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Ee.trunkDark),i.foliage.setM(e);let r=_e("#1d3a2c"),o=_e("#eef2f8"),l=_e("#d7e0ec");for(let a=0;a<4;a++){let u=s*(.16+a*.19),h=(1.9-a*.38)*n,p=s*.3;i.foliage.cyl(0,u,0,h,h*.3,p,9,r),i.foliage.cyl(0,u+p*.45,0,h*.72,.05,p*.62,9,a%2?o:l)}}function fS(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Ee.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Ee.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Ee.cedar)}var Hi={cells:null,bcells:null};function dS(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.color;o.setM(e);let l=r*t.range(.3,.38);o.cyl(0,0,0,.27*n*s,.2*n*s,l,8,Ee.trunk);let a=r*.64,u=t.range(2.6,3.2)*n*s,h=t.range(2,2.5)*n*s,p=n*s,m=[],x=5+Math.floor(t()*3);for(let g=0;g<x;g++){let v=g/x*6.283+t()*.6,b=t.range(-.15,.75),T=Math.sqrt(1-b*b);m.push([Math.cos(v)*T,b,Math.sin(v)*T])}m.push([0,1,0]);let y=[[0,a+.15*h,0,1.76*p,1]],M=26+Math.floor(t()*7);for(let g=0;g<M;g++){let v=t()*2-1,b=t.range(-.55,1),T=t()*2-1,w=Math.hypot(v,b,T)||1;v/=w,b/=w,T/=w;let _=m[0],S=-2;for(let A of m){let C=A[0]*v+A[1]*b+A[2]*T;C>S&&(S=C,_=A)}v=v*.45+_[0]*.55,b=b*.45+_[1]*.55,T=T*.45+_[2]*.55,w=Math.hypot(v,b,T)||1,v/=w,b/=w,T/=w;let E=t.range(.78,.95);y.push([v*u*E,a+b*h*E,T*u*E,t.range(.8,1.1)*p,0])}for(let g=0;g<4;g++){let v=m[g%x];o.rod([0,l*.9,0],[v[0]*u*.55,a+Math.min(0,v[1])*h*.4-.3*n,v[2]*u*.55],.15*p,.06*n,6,Ee.trunk)}let c=t(),f=c<.5?[1,1,.92+c*.16]:[1-(c-.5)*.12,1,.9],d=i.gleaf;d.setM(e);for(let[g,v,b,T,w]of y){let _=g,S=(v-a)*(u/h)+.1*u,E=b,A=Math.hypot(_,S,E)||1;_/=A,S/=A,E/=A,w&&(_=E=0,S=-1);let C=Math.min(1,Math.max(0,(v-(a-h))/(2*h))),I=w?.55:.72+.28*C,R=T/.8*.88;d.bill(g,v,b,_,S,E,R,R,Hi.cells[Math.floor(t()*Hi.cells.length)],[f[0]*I,f[1]*I,f[2]*I],km,.88)}}function xg(i,e,t,n=1,s=!1){let r=i.color;r.setM(e);let o=s?1:0,l=t.range(2.2,2.7)*n,a=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,l,o*.3*n];r.rod([0,0,0],u,a,a*.8,7,Ee.bark),r.cyl(0,0,0,a*1.25,a,.35*n,7,Ee.bark,!1);let h=t.range(6.3,6.9)*n,p=-o*.5*n,m=t.range(4,4.5)*n,x=t.range(3.6,4)*n,y=t.range(1.7,2)*n,M=t()<.35?4:3,c=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let w=0;w<M;w++){let _=c+w/M*6.283+t.range(-.3,.3),S=Math.cos(_),E=Math.sin(_),A=t.range(.32,.46),C=[u[0]+S*m*A,h-y*t.range(.35,.55),u[2]*.5+p*.4+E*x*A],I=[u[0]+(C[0]-u[0])*.45+S*.25*n,l+(C[1]-l)*.55,u[2]+(C[2]-u[2])*.45+E*.25*n],R=(O,H,B)=>{let V=Math.hypot(H[0]-O[0],H[1]-O[1],H[2]-O[2])||1;return[H[0]-(H[0]-O[0])/V*B,H[1]-(H[1]-O[1])/V*B,H[2]-(H[2]-O[2])/V*B]};r.rod(u,I,a*.62,a*.46,6,Ee.bark),r.rod(R(u,I,a*.5),C,a*.47,a*.3,5,Ee.bark);let L=R(I,C,a*.35),D=w%2?1:2;for(let O=0;O<D;O++){let H=(O?1:-1)*t.range(.3,.9),B=t.range(1.2,1.9)*n;r.rod(L,[C[0]+Math.cos(_+H)*B,C[1]+t.range(.7,1.2)*n,C[2]+Math.sin(_+H)*B],a*.27,.04*n,4,Ee.bark)}}let f=[],d=6+Math.floor(t()*2);for(let w=0;w<d;w++){let _=w/d*6.283+t()*.5,S=t.range(-.2,.6),E=Math.sqrt(1-S*S);f.push([Math.cos(_)*E,S,Math.sin(_)*E])}f.push([0,1,0]);let g=[[-m*.3,h,p,1.75*n,1],[m*.3,h,p,1.75*n,1]],v=21+Math.floor(t()*4);for(let w=0;w<v;w++){let _=t()*2-1,S=t.range(-.3,1),E=t()*2-1,A=Math.hypot(_,S,E)||1;_/=A,S/=A,E/=A;let C=f[0],I=-2;for(let L of f){let D=L[0]*_+L[1]*S+L[2]*E;D>I&&(I=D,C=L)}_=_*.5+C[0]*.5,S=S*.5+C[1]*.5,E=E*.5+C[2]*.5,A=Math.hypot(_,S,E)||1,_/=A,S/=A,E/=A;let R=t.range(.8,.95);g.push([_*m*R,h+S*y*R,p+E*x*R,t.range(1,1.3)*n,0])}let b=[1,t.range(.96,1.03),t.range(.97,1.02)],T=i.gblossom;T.setM(e);for(let[w,_,S,E,A]of g){let C=w/m,I=(_-h)/y+.12,R=(S-p)/x,L=Math.hypot(C,I,R)||1;C/=L,I/=L,R/=L,A&&(C=R=0,I=-1);let D=Math.min(1,Math.max(0,(_-(h-y))/(2*y))),O=A?.62:.8+.2*D,H=E/.8*.86;T.bill(w,_,S,C,I,R,H,H,Hi.bcells[Math.floor(t()*Hi.bcells.length)],[b[0]*O,b[1]*O,b[2]*O],zm,.86)}}var Bg={broad:(i,e,t,n)=>(Hi.cells?dS:oS)(i,e,t,n),sakura:(i,e,t,n)=>Hi.bcells?xg(i,e,t,n):vg(i,e,t,n),sakuraAve:(i,e,t,n)=>Hi.bcells?xg(i,e,t,n,!0):vg(i,e,t,n),pine:aS,cedar:fS,maple:lS,ginkgo:cS,birch:uS,snowcedar:hS},yg={};function Og(i,e){let t=i+e,n=yg[t];if(!n){let s={color:new an,foliage:new an,leaf:new an({uv:!0}),gleaf:new an({uv:!0,off:!0}),gblossom:new an({uv:!0,off:!0})};Bg[i](s,new Je,Ct(1e3+e*77+i.length*13),1),n=yg[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays()}}return n}function kg(){for(let i in Bg)for(let e=0;e<4;e++)Og(i,e)}function Vn(i,e,t,n,s=1){let r=Og(t,Math.floor(n()*4)),o=e.clone().scale(new z(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o)}var pS=new Set(["win0","win2","win5","win6"]),Ss=(i,e,t)=>e<t?i+(e<t*.35&&pS.has(i)?"C":"L"):i;function Pl(i,e,t,n,s,r,o){let l=Math.max(1,Math.round(t/3)),a=t/l;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let p=0;p<l;p++){let m=h>0&&r()<.3?Ss("win6",r(),o):r()<.2?"win5":"plain";(u>0?Vi:Wi)(i,u*e/2,p*a,(p+1)*a,n[h],n[h+1],m,s)}}function Il(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Ee.roof);let o=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+o,l,Ee.parapet),i.box(-e/2,n,t-l,e/2,n+o,t,Ee.parapet),i.box(-e/2,n,0,-e/2+l,n+o,t,Ee.parapet),i.box(e/2-l,n,0,e/2,n+o,t,Ee.parapet),s()<.4){let a=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,p]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(a+h-.05,n,u+p-.05,a+h+.05,n+1,u+p+.05,Ee.metal);i.cyl(a,n+1,u,.85,.85,1.3,12,_e("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Ee.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Ee.metal)}function K0(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Ee.black);let r="vs"+Math.floor(s()*10);Wi(i.atlas,e-.065,-.88,-.12,t,n,r),Vi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Ee.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Ee.metal)}var N0=_e("#d9d6cf");function mS(i,e,t,n,s,r=""){let o=Math.floor(s()*10),l=r||"vsB"+o,a=Math.min(1.15,(n-t)*.417),u=-.14,h=u-a,p=.1,m=i.color;m.quad([e+p,t,h],[e-p,t,h],[e-p,n,h],[e+p,n,h],N0),m.quad([e-p,n,u],[e+p,n,u],[e+p,n,h],[e-p,n,h],N0),m.quad([e-p,t,h],[e+p,t,h],[e+p,t,u],[e-p,t,u],N0),Wi(i.atlas,e-p,h,u,t,n,l),Vi(i.atlas,e+p,h,u,t,n,l);for(let x of[t+.28,n-.34])i.color.box(e-.03,x,u,e+.03,x+.06,0,Ee.metal)}function Xi(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Ee.concrete,null,{noBottom:!0}),n.type){case"shop":return yS(i,e,t,n);case"machiya":return _S(i,e,t,n);case"apt":return bS(i,e,t,n);case"office":return MS(i,e,t,n);case"konbini":return SS(i,e,t,n);case"house":return n.ptype?AS(i,e,t,n):TS(i,e,t,n);case"tower":return RS(i,e,t,n)}}var zg=new Set(["glass","door","cafe","noren"]),_g=["shop_p0","shop_p3","shop_p4","shop_p5","shop_p6","shop_p8","shop_p9"],gS=["shop_p2","shop_p2","shop_p7","shop_p10"],vS={shop_p1:"hs9",shop_p3:"hs7",shop_p4:"hs5",shop_p5:"hs_\u82B1\u5C4B",shop_p6:"hsN_\u6D0B\u54C1\u5E97",shop_p8:"hs13",shop_p9:"hs12"},xS={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function yS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.6,m=3,x=p+(o-1)*m,y=Math.max(1,Math.round(s/3)),M=s/y,c=-s/2,f=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],g=0;for(let _=0;_<y;_++){let S=Tg(t,"shop_"+f[_%f.length]);d.push(S),!g&&S.startsWith("shop_glass")&&S.length>10&&(g=+S.slice(10))}for(let _=0;_<y;_++){let S=f[_%f.length];cn(u,c+_*M,c+(_+1)*M,0,p,0,g&&S==="glass"?"shop_glass"+g:d[_]),zg.has(S)&&dr(i,e,c+(_+.5)*M,1.9,-.8,.7)}let v=t.pick([0,0,1,5,0,1]),b=[0,p];for(let _=1;_<o;_++)b.push(p+_*m);for(let _=1;_<o;_++)for(let S=0;S<y;S++){let E=S%2===1&&t()<.3?5:v;cn(u,c+S*M,c+(S+1)*M,b[_],b[_+1],0,Ss("win"+E,t(),a),l)}Pl(u,s,r,b,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Un(l,.8)),Il(h,s,r,x,t);let T=s*.94;h.box(-T/2,p-.8,-.3,T/2,p+.08,-.02,Ee.black);let w="hs"+Math.floor(t()*14);if(cn(u,-T/2,T/2,p-.8,p+.08,-.305,xS[g]||w),t()<.55){let _=t.pick(QM),S=p-.85;h.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],_),h.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],Un(_,.85))}if(o>=2&&t()<.85){let _=(t()<.5?1:-1)*(s/2-.35);K0(i,_,p+.3,Math.min(x-.15,p+2.8),t)}for(let _=1;_<o;_++)if(t()<.4){let S=Math.floor(t()*y),E=c+S*M+.15,A=c+(S+1)*M-.15,C=b[_];h.box(E,C-.12,-.9,A,C,0,Ee.parapet),cn(u,E,A,C,C+1,-.9,"rail"),Wi(u,E,-.9,0,C,C+1,"rail"),Vi(u,A,-.9,0,C,C+1,"rail"),t()<.45&&qg(h,E+.1,A-.1,C+1.95,-.55,t),t()<.6&&B0(i,e,(E+A)/2+.6,C,-.75)}else if(t()<.35){let S=Math.floor(t()*y);B0(i,e,c+(S+.5)*M,b[_]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(c+.12,0,-.08,.05,.05,x,6,Ee.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,_e("#d9d9d3")),o>=3&&t()<.18&&Hg(i,s,x,r,t)}function _S(i,e,t,n){let{w:s,d:r,floors:o,litP:l}=n,a=i.atlas,u=i.color,h=3.6,p=2.9,m=h+(o-1)*p,x=-s/2,y=Math.max(2,Math.round(s/3)),M=s/y,c=_e("#5c4030"),f=_e("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","door"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),g=n.at!==void 0&&Math.abs(n.at-(n.side<0?139:146))<s/2&&o>=2?n.side:0;g&&(d=["glass","door","glass"]);let v=Ct(Math.floor((i.atlas.e[12]*71.3+i.atlas.e[14]*37.9)*977)^11101),b=t.pick(["shop_p0","shop_p0","shop_p1","shop_p3"]),T=[],w=g?g<0?"shop_p1":"shop_p6":b==="shop_p1"?b:_g[Math.floor(v()*_g.length)],_=v.pick(gS),S=v()<.65?v.pick(["shop_p7","shop_p10"]):"";for(let re=0;re<y;re++){let ye=d[re%d.length];T.push(ye==="glass"?w:ye==="door"?_:ye==="cafe"?"shop_p3":(Oe=>ye==="noren"&&S||Oe)(Tg(t,"shop_"+ye)))}let E=t(),A=E<.5?"":d.includes("glass")&&b==="shop_p1"?"hs9":d.includes("cafe")||d.includes("glass")&&b==="shop_p3"?"hs7":"",C=T.includes("shop_p7")?"hs0":T.includes("shop_p10")?"hs3":"",I=g?g>0?"hsN_\u6D0B\u54C1\u5E97":"hs9":d.includes("glass")&&E>=.2?vS[w]||C:d.includes("cafe")&&E>=.5?"hs7":E>=.2?C:"";for(let re=0;re<y;re++){let ye=d[re%d.length];cn(a,x+re*M,x+(re+1)*M,0,h,0,T[re]),zg.has(ye)&&dr(i,e,x+(re+.5)*M,1.9,-.8,.7)}let R=!!n.plaster,L=n.tint,D=[0,h];for(let re=1;re<o;re++)D.push(h+re*p);let O=R?v.pick(["win7","win7","win9","win10"]):v.pick(["win8","win8","win11"]);for(let re=1;re<o;re++)for(let ye=0;ye<y;ye++){let Oe=R&&ye%2===1&&t()<.3?"win5":O;cn(a,x+ye*M,x+(ye+1)*M,D[re],D[re+1],0,Ss(Oe,t(),l),Oe==="win5"?L:un)}{let re=Math.max(1,Math.round(r/3)),ye=r/re;for(let Oe of[-1,1])for(let ke=0;ke<D.length-1;ke++)for(let Te=0;Te<re;Te++){let He=R?ke>0?Ss(t()<.5?"win7":"win6",t(),l):"plain":ke>0&&t()<.45?Ss("win4",t(),l):"woodwall";(Oe>0?Vi:Wi)(a,Oe*s/2,Te*ye,(Te+1)*ye,D[ke],D[ke+1],He,R&&He[3]!=="7"?L:un)}}u.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],R?Un(L,.8):_e("#6a5240"));for(let re of[x,-x])u.box(re-.09,0,-.12,re+.09,m,.02,f);if(R)for(let re=2;re<o;re++)u.box(x,D[re]-.1,-.08,-x,D[re]+.06,0,f);let{RC:H,k:B}=Vg(i,n,s,r,m,t,!R),V=h+.62,k=1.05,q=.7,ee=Math.max(2,Math.round((s+.3)/3)),we=xh.has("kawaraC")?li("kawaraC"):null;for(let re=0;re<ee;re++){let ye=x-.15+(s+.3)*re/ee,Oe=x-.15+(s+.3)*(re+1)/ee;a.quad([Oe,V-q,-k],[ye,V-q,-k],[ye,V,0],[Oe,V,0],we?un:H,we||B)}u.quad([x-.15,V-q-.03,-k],[-x+.15,V-q-.03,-k],[-x+.15,V-.1,0],[x-.15,V-.1,0],c);let Ae=Math.min(s*.9,4.4),Me=V-q+.02,G=Me-.62;u.box(-Ae/2,G,-k-.02,Ae/2,Me,-k+.07,f);{let re=A?"":"hs"+Math.floor(t()*14);cn(a,-Ae/2,Ae/2,G,Me,-k-.025,I||re||"hs"+Math.floor(v()*14))}for(let re of[-Ae/2+.25,Ae/2-.25])u.box(re-.03,Me,-k+.02,re+.03,V-q*.1,-k+.06,f);i.sodium.setM(e),u.noShadow=!0;for(let re=0;re<y;re++){let ye=x+(re+.5)*M;u.box(ye-.008,G-.02,-.62,ye+.008,V-q*.6,-.6,f),i.sodium.box(ye-.06,G-.16,-.67,ye+.06,G-.04,-.55,null)}u.noShadow=!1;let J=!1;if(t()<.5||g){J=!0;let re=g?pg[0]:t.pick(pg),ye=G-.12;u.quad([s/2-.2,ye-.32,-.95],[-s/2+.2,ye-.32,-.95],[-s/2+.2,ye,-.02],[s/2-.2,ye,-.02],re),u.quad([s/2-.2,ye-.55,-.95],[-s/2+.2,ye-.55,-.95],[-s/2+.2,ye-.32,-.95],[s/2-.2,ye-.32,-.95],Un(re,.85))}if(o>=2&&(!R||t()<.5)){let re=D[1]+.42,ye=-.5,Oe=x+.12,ke=-x-.12;u.box(Oe,re-.07,ye-.04,ke,re,0,c);for(let Te=0;Te<y;Te++)cn(a,x+.12+(s-.24)*Te/y,x+.12+(s-.24)*(Te+1)/y,re,re+.95,ye,"wrail");Wi(a,Oe,ye,0,re,re+.95,"wrail"),Vi(a,ke,ye,0,re,re+.95,"wrail"),i.leaf.setM(e);for(let Te=0;Te<y;Te++)if(t()<.7){let He=x+(Te+.5)*M,te=Math.min(M*.7,1.6);u.noShadow=!0,u.box(He-te/2,re+.72,ye-.2,He+te/2,re+.92,ye-.02,_e("#7a5236")),u.noShadow=!1;for(let de=He-te/2+.2;de<He+te/2-.1;de+=.32)Gi(i,[de,re+.95,ye-.11],de,re+1.05,ye-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[re+.9,re+1.3])}}if(o>=2&&(t()<.9||g)){let re=t()<.5?1:-1,ye=g||re;mS(i,ye*(s/2-.35),V+.1,Math.min(m-.2,V+2.8),t,g?g<0?"vsB10":"vsB0":""),s>7&&t()<.35&&K0(i,-ye*(s/2-.35),h+.8,Math.min(m-.2,h+2.5),t)}{let re=d.includes("noren")||d.includes("cafe"),ye=J?0:re?2:t()<.3?1:0;i.sodium.setM(e);for(let Oe=0;Oe<ye;Oe++){let ke=ye===2?(Oe?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),Te=G-.5;u.noShadow=!0,u.box(ke-.006,Te+.42,-k+.12,ke+.006,G,-k+.14,f),i.sodium.cyl(ke,Te,-k+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(ke,Te+.18,-k+.13,.16,.11,.18,10,null,!1),u.cyl(ke,Te-.035,-k+.13,.1,.1,.04,8,f),u.cyl(ke,Te+.355,-k+.13,.1,.1,.04,8,f),u.noShadow=!1}}let xe=1e9,Pe=1e9;w==="shop_p1"&&d.includes("glass")&&(xe=x+(d.indexOf("glass")+.5)*M,gg(i,e,xe,-.62,t)),g<0&&y>=3&&(Pe=x+2.5*M,gg(i,e,Pe,-.62,t));for(let re=x+.45+t()*.4;re<-x-.3;re+=.7+t()*1.3)t()<.7&&Math.abs(re-xe)>.95&&Math.abs(re-Pe)>.95&&G0(i,e,t,re,-.4);i.color.setM(e),i.atlas.setM(e)}function Hg(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,l=n*.3;for(let a of[-r*.35,r*.35])i.color.box(a-.06,t,l,a+.06,t+1.2+o,l+.12,Ee.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+o,l+.3,Ee.metal),cn(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,l+.115,"bb"+Math.floor(s()*4))}function bS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.2,m=2.95,x=p+(o-1)*m,y=Math.max(2,Math.round(s/3.2)),M=s/y,c=-s/2,f=[0,p];for(let v=1;v<o;v++)f.push(p+v*m);for(let v=0;v<y;v++)cn(u,c+v*M,c+(v+1)*M,0,p,0,v===Math.floor(y/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),v===Math.floor(y/2)?un:l);let d="bal"+Math.floor(t()*3),g=Un(l,.97);for(let v=1;v<o;v++){let b=f[v];for(let T=0;T<y;T++)cn(u,c+T*M,c+(T+1)*M,b,f[v+1],0,Ss("win2",t(),a),l);h.box(c,b-.15,-1.3,-c,b,0,g),h.box(c,b,-1.3,-c,b+1.1,-1.18,g,null,{noBottom:!0});for(let T=0;T<y;T++)cn(u,c+T*M,c+(T+1)*M,b,b+1.1,-1.305,d,l);for(let T=0;T<=y;T++)h.box(c+T*M-.05,b,-1.18,c+T*M+.05,b+2.4,0,Un(l,.92));for(let T=0;T<y;T++){let w=t(),_=c+T*M+.2,S=c+(T+1)*M-.2;w<.34?qg(h,_,S,b+2.02,-.98,t):w<.46&&IS(h,_+.25,Math.min(S-.25,_+1.9),b+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<y;T++)t()<.55&&(B0(i,e,c+(T+.78)*M,b,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(c,x-.15,-1.3,-c,x,0,g),Pl(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Un(l,.8)),Il(h,s,r,x,t,!0)}function MS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=4,m=3.4,x=p+(o-1)*m,y=Math.max(2,Math.round(s/3)),M=s/y,c=-s/2,f=[0,p];for(let d=1;d<o;d++)f.push(p+d*m);for(let d=0;d<y;d++)cn(u,c+d*M,c+(d+1)*M,0,p,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let g=0;g<y;g++)cn(u,c+g*M,c+(g+1)*M,f[d],f[d+1],0,Ss("win3",t(),a),l);Pl(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Un(l,.8)),Il(h,s,r,x,t,!0),t()<.6&&K0(i,(t()<.5?1:-1)*(s/2-.3),p+.4,Math.min(x-.3,p+4.5),t),t()<.3&&Hg(i,s,x,r,t)}function SS(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,l=i.color,a=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),p=s/h;for(let m=0;m<h;m++)cn(o,u+m*p,u+(m+1)*p,0,3.4,0,"shop_konbini"),dr(i,e,u+(m+.5)*p,1.9,-.8,.8);l.box(u,3.4,-.35,-u,a,0,Ee.white),cn(o,u,-u,3.4,a,-.355,"konbini_band"),Pl(o,s,r,[0,a],_e("#f2f2ee"),t,0),Il(l,s,r,a,t)}var bg=(i,e)=>e?_e("#7a5a42"):i.tint,F0=null,wS=()=>{if(!F0){let i=li("kawara"),e=16/272*(i.u1-i.u0);F0={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return F0};function Vg(i,e,t,n,s,r,o){let l=i.atlas,a=i.color,u=!!e.snow,h=u?.75:.6,p=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),m=u?li("white"):wS(),x=u?_e("#f3f5fa"):_e("#c8ccd8"),y=u?_e("#e4e8f0"):_e("#3d4456"),M=u?1:Math.max(2,Math.round((t+2*h)/3)),c=g=>-t/2-h+(t+2*h)*g/M;for(let g=0;g<M;g++){let v=c(g),b=c(g+1);l.quad([b,s-.25,-h],[v,s-.25,-h],[v,s+p,n/2],[b,s+p,n/2],x,m),l.quad([v,s-.25,n+h],[b,s-.25,n+h],[b,s+p,n/2],[v,s+p,n/2],x,m)}let f=(g,v,b,T,w,_)=>{_<0?(a.quad([v,b,w],[g,b,w],[g,T,w],[v,T,w],y),a.quad([g,b,w],[v,b,w],[v,b,w+.08],[g,b,w+.08],y)):(a.quad([g,b,w],[v,b,w],[v,T,w],[g,T,w],y),a.quad([v,b,w],[g,b,w],[g,b,w-.08],[v,b,w-.08],y))};for(let[g,v]of[[-h,0],[n+h,n]])f(-t/2-h,t/2+h,s-.42,s-.22,g<0?g-.04:g+.04,g<0?-1:1),a.quad(g<0?[-t/2-h,s-.26,g]:[t/2+h,s-.26,g],g<0?[t/2+h,s-.26,g]:[-t/2-h,s-.26,g],g<0?[t/2+h,s-.26,v]:[-t/2-h,s-.26,v],g<0?[-t/2-h,s-.26,v]:[t/2+h,s-.26,v],Un(bg(e,o),.62));for(let g of[-1,1]){let v=g*(t/2+h+.02),b=.2,T=[v,s-.25,-h],w=[v,s+p,n/2],_=[v,s-.25,n+h],S=E=>[E[0],E[1]-b,E[2]];g>0?(a.quad(S(w),S(T),T,w,y),a.quad(S(_),S(w),w,_,y)):(a.quad(S(T),S(w),w,T,y),a.quad(S(w),S(_),_,w,y))}let d=bg(e,o);if(Yo(a,[-t/2,s,0],[-t/2,s,n],[-t/2,s+p-.1,n/2],d),Yo(a,[t/2,s,n],[t/2,s,0],[t/2,s+p-.1,n/2],d),a.box(-t/2-h,s+p-.05,n/2-.15,t/2+h,s+p+.18,n/2+.15,u?_e("#f6f7fb"):_e("#3d4456")),u){a.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,_e("#eef1f7")),a.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,_e("#eef1f7"));for(let g=-t/2;g<t/2;g+=.45+r()*.5)a.cyl(g,s-.42-.35,-h+.02,0,.04,.35,4,_e("#dfe8f3"),!1)}return{RC:x,k:m,fascia:f,nS:M}}function TS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=2.9,m=o*p,x=-s/2,y=t()<.5,M=Math.max(2,Math.round(s/3)),c=s/M,f=[];for(let w=0;w<=o;w++)f.push(w*p);let d=y?un:l;for(let w=0;w<o;w++)for(let _=0;_<M;_++){let S=y?"win4":"win0";w===0&&_===0?S="shop_house":S=Ss(S,t(),a),cn(u,x+_*c,x+(_+1)*c,f[w],f[w+1],0,S,S==="shop_house"?un:d)}Pl(u,s,r,f,y?_e("#9a7a62"):l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],Un(l,.75));let{RC:g,k:v,fascia:b,nS:T}=Vg(i,n,s,r,m,t,y);if(o>1){let w=p+.05;for(let _=0;_<T;_++){let S=-s/2-.1+(s+.2)*_/T,E=-s/2-.1+(s+.2)*(_+1)/T;u.quad([E,w-.3,-.75],[S,w-.3,-.75],[S,w+.05,0],[E,w+.05,0],g,v)}b(-s/2-.1,s/2+.1,w-.42,w-.28,-.79,-1)}if(n.fence){let w=-n.fence,_=1.2;for(let[S,E]of[[-s/2,-1],[.4,s/2]])h.box(S,0,w-.08,E,_,w+.08,Ee.concrete),cn(u,S,E,0,_,w-.085,"block")}}var O0={byZone:null};function Wg(i){let e={};for(let t of i)for(let n of t.zones)(e[n]||(e[n]=[])).push(t);O0.byZone=e}function _h(i,e){let t=O0.byZone&&O0.byZone[i];return t?t[Math.floor(e()*t.length)]:null}var El={u0:0,u1:0,v0:0,v1:0},us=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Mg=(i,e)=>{for(let t=0;t<4;t++)us[t][0]=i[e+t*3],us[t][1]=i[e+t*3+1],us[t][2]=i[e+t*3+2]},ES=(i,e,t)=>{let n=Math.sin(e*12.9898+t*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;return 24+Math.floor((n-Math.floor(n))*231)};function AS(i,e,t,n){let s=n.ptype,r=i.atlas,o=i.color,l=li(s.f),a=li(s.s);for(let u of s.pieces){let h=u.t==="f"?l:a,p=h.u1-h.u0,m=h.v1-h.v0;El.u0=h.u0+u.uv[0]*p,El.u1=h.u0+u.uv[2]*p,El.v1=h.v1-u.uv[1]*m,El.v0=h.v1-u.uv[3]*m,Mg(u.p,0),u.lit&&r.hasLit&&(r.litV=s.day?6:ES(r,u.p[0]+u.p[2],u.p[1])),r.quad(us[0],us[1],us[2],us[3],un,El),r.litV=0}o.noShadow=!0;for(let u of s.soffits)Mg(u,0),o.quad(us[0],us[1],us[2],us[3],s.soffit);if(o.noShadow=!1,n.fence){let u=-n.fence,h=1.1,p=s.ww+1;for(let[m,x]of[[-p/2,-1],[.4,p/2]])o.box(m,0,u-.08,x,h,u+.08,Ee.concrete),cn(r,m,x,0,h,u-.085,"block")}}function RS(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.4,m=o*p,x=Math.max(2,Math.round(s/6)),y=s/x,M=-s/2,c=t()<.5?"win3":"win2",f=[];for(let v=0;v<=o;v++)f.push(v*p);for(let v=0;v<o;v++)for(let b=0;b<x;b++)cn(u,M+b*y,M+(b+1)*y,f[v],f[v+1],0,Ss(c,t(),a),l);let d=Math.max(1,Math.round(r/6)),g=r/d;for(let v of[-1,1])for(let b=0;b<o;b++)for(let T=0;T<d;T++)(v>0?Vi:Wi)(u,v*s/2,T*g,(T+1)*g,f[b],f[b+1],Ss(c,t(),a),l);Il(h,s,r,m,t,!0)}function $0(i,e,t,n){let s=i.color,r=_e("#8d9096"),o=_e("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,a=-n+.62;s.box(-.14,5.08,l,.14,5.56,a,o);let u=t*.141;i.atlas.setM(e),(t>0?Vi:Wi)(i.atlas,u,l,a,5.08,5.56,"signal");let h=t>0?a:l,p=t>0?-1:1;for(let x=0;x<3;x++){let y=h+p*(.2+x*.4);s.box(t>0?.14:-.36,5.47,y-.15,t>0?.36:-.14,5.5,y+.15,o)}let m=h+p*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,m-.11,t>0?.16:-.145,5.43,m+.11,un)}function Gg(i,e,t,n){let s=i.color,r=_e("#3d6ea8"),o=_e("#e8eef2"),l=_e("#c7c5bf"),a=5.35;s.setM(e),s.box(-1.1,a-.65,-t,1.1,a,t,r);for(let u of[-1.1,1])s.box(u,a,-t,u+.1,a+1.1,t,o),s.box(u-.02,a+1.1,-t,u+.12,a+1.18,t,r);i.atlas.setM(e),Wi(i.atlas,-1.105,-2.2,2.2,a-.62,a-.06,n),Vi(i.atlas,1.105,-2.2,2.2,a-.62,a-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),p=u*(t-.15),m=Math.min(h,p),x=Math.max(h,p);s.box(-.45,.15,m+.3,.45,a-.65,x-.3,r);let y=20,M=(a-.15)/y;for(let c=0;c<y;c++)s.box(1.1+c*.3,.15,m,1.1+(c+1)*.3,a-(c+1)*M+.04,x,l);s.box(1.1,a-.1,m-.05,1.1+y*.3,a-.02,m+.05,r)}}function Xg(i,e,t,n,s,r,o){let l=i.color,a=1.22,u=3.55,h=6.7,p=_e("#c8c5bd"),m=_e("#ebe8de"),x=_e("#7a5a42"),y=_e("#5e4433"),M=_e("#4d5468");l.setM(e),l.box(t,-1.4,u,n,a,h,p,null,{noBottom:!0}),l.box(t,a,u,n,a+.025,u+.32,m),l.box(t,a,u+.6,n,a+.04,u+.9,Ee.yellow);let c=Math.sign(s-(t+n)/2),f=c>0?n:t,d=f+c*6.2,g=u+.9,v=h-.2,b=(B,V,k)=>[B,V,k];c>0?l.quad(b(d,.1,v),b(d,.1,g),b(f,a,g),b(f,a,v),p):l.quad(b(d,.1,g),b(d,.1,v),b(f,a,v),b(f,a,g),p);for(let B of[g,v]){let V=_e("#9aa0a6");l.rod([d,.1+.9,B],[f,a+.9,B],.03,.03,5,V);for(let k=0;k<=3;k++){let q=d+(f-d)*k/3,ee=.1+(a-.1)*k/3;l.box(q-.03,ee,B-.03,q+.03,ee+.9,B+.03,V)}}i.atlas.setM(e);for(let B=t;B<n-.01;B+=3){let V=Math.min(n,B+3);i.atlas.quad([B,-.6,h+.004],[V,-.6,h+.004],[V,a,h+.004],[B,a,h+.004],_e("#d8d4ca"),li("concrete"))}l.setM(e);for(let B=t+.4;B<n;B+=2)l.box(B-.05,a,h-.12,B+.05,a+1,h-.02,_e("#8f949a"));for(let B of[.45,.95])l.box(t,a+B,h-.1,n,a+B+.06,h-.04,_e("#8f949a"));let T=n-t,w=B=>c>0?n-T*B:t+T*B,_=w(.47),S=_-2.3,E=_+2.3,A=u+1.35,C=h-.25;l.box(S,a,C-.12,E,a+2.45,C,x);for(let B of[S,E-.12])l.box(B,a,A+.6,B+.12,a+2.45,C,y);for(let B of[S,E-.12])l.box(B,a,A,B+.12,a+2.45,A+.12,y);l.quad([E+.4,a+2.5,A-.45],[S-.4,a+2.5,A-.45],[S-.4,a+2.85,C+.35],[E+.4,a+2.85,C+.35],M),l.quad([S-.4,a+2.42,A-.45],[E+.4,a+2.42,A-.45],[E+.4,a+2.77,C+.35],[S-.4,a+2.77,C+.35],_e("#3a3f50")),l.box(S+.3,a+.42,C-.55,E-.3,a+.48,C-.15,_e("#8a6a4a"));for(let B of[S+.4,E-.5])l.box(B,a,C-.5,B+.08,a+.42,C-.2,Ee.metal);i.atlas.setM(e),i.atlas.quad([_-1.1,a+1.55,C+.005],[_+1.1,a+1.55,C+.005],[_+1.1,a+2.03,C+.005],[_-1.1,a+2.03,C+.005],un,li("ekiplate"+r));let I=w(.2),R=u+1.6,L=1.25,D=a+1.25,O=D+.95;l.setM(e);for(let B of[I-L+.12,I+L-.12])l.cyl(B,a,R,.05,.05,O-a+.05,8,_e("#6b7078"));l.box(I-L,D-.03,R-.03,I+L,O+.03,R+.03,_e("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-L,D,R+.035],[I+L,D,R+.035],[I+L,O,R+.035],[I-L,O,R+.035],un,li("ekimei"+r)),i.atlas.quad([I+L,D,R-.035],[I-L,D,R-.035],[I-L,O,R-.035],[I+L,O,R-.035],un,li("ekimei"+r)),l.setM(e);let H=_-c*4.2;l.box(H-.9,a+.42,h-1.25,H+.9,a+.47,h-.85,_e("#3b6ea8")),l.box(H-.9,a+.47,h-.88,H+.9,a+.9,h-.83,_e("#3b6ea8"));for(let B of[H-.75,H+.7])l.box(B,a,h-1.2,B+.06,a+.42,h-.9,Ee.metal);for(let B=t+3;B<n-1;B+=9)Rl(i,Eg(e,B,a,h-.45))}var CS=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(_e),PS=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(_e);function qg(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Ee.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let l=.28+r()*.34,a=.36+r()*.42,u=r.pick(CS),h=s+(r()-.5)*.06;i.quad([o+l,n-a,h],[o,n-a,h],[o,n-.02,h],[o+l,n-.02,h],u),i.quad([o,n-a,h+.01],[o+l,n-a,h+.01],[o+l,n-.02,h+.01],[o,n-.02,h+.01],Un(u,.85)),r()<.4&&i.box(o+l*.45,n-.02,h-.02,o+l*.55,n+.06,h+.02,_e("#d8d8d0")),o+=l+.06+r()*.22}}function IS(i,e,t,n,s,r){let o=r.pick(PS),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,o),i.box(e,n-.72,s-l,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,Un(o,.86))}function Yg(i,e){let t=i.color,n=_e("#a19f97"),s=_e("#6b4a35"),r=_e("#4f4a44"),o=_e("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,_e("#8d8b84"));for(let l of[-.52,.48])for(let a of[-.36,.32])t.box(l,.32,a,l+.05,1.5,a+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,Un(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,_e("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,_e("#5b8d3d"))}function Zg(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Ee.black:Ee.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Ee.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Ee.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Ee.black);t.box(-.78,-.9,-.34,.3,0,.34,Ee.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,_e("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Ee.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new Je().multiplyMatrices(e,new Je().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Ee.black:Ee.yellow)}t.setM(e),i.atlas.setM(e),cn(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function Kg(i,e){let t=i.color;t.setM(e);let n=Ee.stone,s=Un(Ee.stone,1.06),r=Un(Ee.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),qo(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),qo(t,1.48,1.54,.25,.35,r,!1,!0),qo(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,un),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,un)}function J0(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Ee.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Ee.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Ee.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Ee.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Ee.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Ee.vermilion)}function $g(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,_e("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,_e("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,_e("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,_e("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Ee.metal),n.box(1.1,0,.3,1.2,.42,.55,Ee.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Ee.metal),i.atlas.setM(e),Wi(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Vi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}var LS=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],DS=_e("#a7a7aa"),NS=[1,.95,.9],Sg={},FS=()=>Al>.7?12:6;function Jg(i,e){let t=i*16+e,n=Sg[t];if(!n){let s=new an({uv:!0}),r=Un(DS,NS[i]),o=.42,l=.25,a=.075,u=o-l,h=1-a,p=o+(l-o)*h,m=p-a,x=(y,M,c)=>s.vtx(y[0],y[1],y[2],M[0],M[1],M[2],c,0,r);for(let y of LS){let M=0,c=1,f=0;Math.abs(y[1])>.99&&(M=1,c=0);let d=y[1]*f-y[2]*c,g=y[2]*M-y[0]*f,v=y[0]*c-y[1]*M,b=Math.hypot(d,g,v);d/=b,g/=b,v/=b;let T=g*y[2]-v*y[1],w=v*y[0]-d*y[2],_=d*y[1]-g*y[0],S=[];for(let A=0;A<=e;A++){let C=A/e*Math.PI*2,I=Math.cos(C),R=Math.sin(C);S.push([d*I+T*R,g*I+w*R,v*I+_*R])}let E=(A,C,I)=>[y[0]*I+A[0]*C,y[1]*I+A[1]*C,y[2]*I+A[2]*C];for(let A=0;A<e;A++){let C=S[A],I=S[A+1],R=[C[0]+y[0]*u,C[1]+y[1]*u,C[2]+y[2]*u],L=[I[0]+y[0]*u,I[1]+y[1]*u,I[2]+y[2]*u],D=E(C,o,0),O=E(I,o,0),H=E(I,p,h),B=E(C,p,h),V=E(I,m,1),k=E(C,m,1);x(D,R,0),x(H,L,h),x(O,L,0),x(D,R,0),x(B,R,h),x(H,L,h),x(B,R,h),x(V,y,1),x(H,L,h),x(B,R,h),x(k,y,1),x(V,y,1),x(y,y,1),x(V,y,1),x(k,y,1)}}n=Sg[t]=s.toArrays()}return n}var US=new vn,U0=new $n,BS=new z,OS=new z;function j0(i,e,t,n,s,r,o=0,l=.6,a=0){s()<l?U0.set((s()-.5)*.4,s()*6.283,(s()-.5)*.4):U0.set(s()*6.283,s()*6.283,s()*6.283);let u=new Je().compose(BS.set(e,t,n),US.setFromEuler(U0),OS.set(r,r,r));u.groundY=o;let h=i.tetra,p=h.n;h.stamp(Jg(Math.floor(s()*3),FS()),u);for(let m=p*2+1;m<h.n*2;m+=2)h.U[m]=a}function jg(){for(let i=0;i<3;i++)for(let e of[6,12])Jg(i,e)}function Qg(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,_e("#8f8a80"),_e("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Ee.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Ee.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Ee.black),t.cyl(0,18.6,0,1,.25,1.2,12,Ee.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,un)}function e1(i,e,t){let n=i.color;n.setM(e);let s=t.pick([_e("#f4f4f0"),_e("#3b6ea5"),_e("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Yo(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Yo(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Ee.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Ee.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,_e("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Ee.metal)}function t1(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Ee.stone),n.box(-.55,.5,.9,.55,1.5,1.8,_e("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],_e("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],_e("#4d5468")),J0(i,Eg(e,0,0,-.3,Math.PI/2),.75,2.2)}var $o=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new pe(e):e)),ae={zenith:new pe,horizon:new pe,sunCol:new pe,sunI:1,hemiSky:new pe,hemiGround:new pe,hemiI:1,fog:new pe,cLit:new pe,cShade:new pe,cRim:new pe,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new z,moonDir:new z,lightDir:new z,sunEl:0};function i1(i){let e=0;for(;e<$o.length-2&&$o[e+1][0]<=i;)e++;let t=$o[e],n=$o[e+1],s=gl(Zt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,l)=>l.copy(t[o]).lerp(n[o],s);r(1,ae.zenith),r(2,ae.horizon),r(3,ae.sunCol),ae.sunI=_t(t[4],n[4],s),r(5,ae.hemiSky),r(6,ae.hemiGround),ae.hemiI=_t(t[7],n[7],s),r(8,ae.fog),r(9,ae.cLit),r(10,ae.cShade),r(11,ae.cRim),ae.night=_t(t[12],n[12],s),ae.warm=_t(t[13],n[13],s),ae.sunEl=s1(i,ae.sunDir,ae.moonDir,ae.lightDir)}function s1(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Zt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var zS=new z,HS=new z;function ed(i,e){return s1((i%1+1)%1,zS,HS,e),e}var n1={zenith:[new pe("#7b8594"),new pe("#141a28")],horizon:[new pe("#b5bcc6"),new pe("#283042")],fog:[new pe("#a8b0ba"),new pe("#232b3c")],hemiSky:[new pe("#aab3bf"),new pe("#3c4866")],hemiGround:[new pe("#8b8983"),new pe("#1e2030")],cLit:[new pe("#d0d5dc"),new pe("#2c3240")],cShade:[new pe("#7c8593"),new pe("#151922")]},Q0=new pe;function r1(i,e){if(ae.overcast=i,ae.rain=e,ae.bright=(1-ae.night)*(1-ae.warm)*(1-i),i<=.001)return;let t=ae.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Q0.copy(n1[n][0]).lerp(n1[n][1],t),ae[n].lerp(Q0,i*(n==="cLit"||n==="cShade"?.75:.85));ae.sunI*=1-.82*i,ae.warm*=1-i,ae.cRim.multiplyScalar(1-i),ae.sunCol.lerp(Q0.setRGB(.85,.87,.9),i*.6)}function o1(){let i=new ft({side:Hn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ae.zenith},uHorizon:{value:ae.horizon},uSunDir:{value:ae.sunDir},uMoonDir:{value:ae.moonDir},uNoiseTex:Ue.uNoiseTex,uSunCol:{value:ae.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new pe},uOvercast:{value:0},uDeckLit:{value:new pe},uDeckDark:{value:new pe},uMilky:{value:0},uMetA:{value:new z(0,1,0)},uMetB:{value:new z(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
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
      }`}),e=new ht(new $a(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function VS(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let g=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+g*.5,(i()-.5)*.2,g])}let l=e?6:2,a=s*.82,u=.1+.09;for(let d=0;d<l;d++){let g=Math.max(1,Math.round(a/.11));for(let v=0;v<g;v++){let b=(g===1?0:v/(g-1)-.5)*a+(i()-.5)*.05+r*d;t.push([b,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,a*=e?.8:.66}let h=t.slice();for(let d of h){if(t.length>84)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.82,d[1]+Math.sin(b)*d[3]*.82,d[2]+.04,T])}}let p=t.slice(h.length);for(let d of h){if(d[1]<.1+.12||t.length>104)continue;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.3+i()*2.5,T=d[3]*(.3+i()*.4),w=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(b)*T,d[1]+Math.sin(b)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-w*.6,w])}}for(let d of p){if(t.length>124)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.85,d[1]+Math.sin(b)*d[3]*.85,d[2]+.02,T])}}let m=t.slice(0,128),x=1e9,y=-1e9,M=-1e9;for(let d of m)x=Math.min(x,d[0]-d[3]*1.12),y=Math.max(y,d[0]+d[3]*1.12),M=Math.max(M,d[1]+d[3]*1.12);let c=Math.min(1,.92/(y-x),(.95-.1)/(M-.1)),f=(x+y)/2;for(let d of m)d[0]=(d[0]-f)*c,d[1]=.1+(d[1]-.1)*c,d[3]*=c;return m}function a1(i){let t={value:Array.from({length:128},()=>new mt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new ft({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Ue.uNoiseTex},vertexShader:n,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1,blending:oi}),r=new Yt(1024,1024,{generateMipmaps:!0,minFilter:In,magFilter:Ot,depthBuffer:!1}),o=new ft({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:Ue.uNoiseTex},vertexShader:n,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1,blending:oi}),l=new ht(new rn(1,1),s),a=new Rr,u=new Fs;a.add(l);let h=new Yt(1024*2,1024*2,{generateMipmaps:!0,minFilter:In,magFilter:Ot}),p=i.getRenderTarget(),m=i.autoClear,x=Ct(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let y=[];for(let M=0;M<4;M++){let c=M%2===0,f=VS(x,c);f.forEach((d,g)=>t.value[g].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=f.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=M*13.7,l.material=s,i.setRenderTarget(r),i.render(a,u),l.material=o,h.viewport.set(M%2*1024,Math.floor(M/2)*1024,1024,1024),i.setRenderTarget(h),i.render(a,u),y.push({cell:[M%2,Math.floor(M/2)],tall:c})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=m,i.setRenderTarget(p),s.dispose(),o.dispose(),r.dispose(),l.geometry.dispose(),{tex:h.texture,kinds:y,rt:h}}function l1(i){let e=Ct(5),t=22,n=[],s=new rn(1,1);s.translate(0,.5,0);let r=new Pn(new Float32Array(t*4),4),o=new Pn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let l=new ft({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new pe},uShade:{value:ae.cShade},uRim:{value:ae.cRim},uHaze:{value:ae.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),a=new rs(s,l,t);a.frustumCulled=!1,a.renderOrder=-5;for(let y=0;y<t;y++){let M=y<12,c=i.kinds[(y*3+(M?0:1))%i.kinds.length],f=M?c.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:y/t*Math.PI*2+e.range(-.15,.15),d:M?e.range(2600,3400):e.range(1300,2200),base:M?e.range(-60,60):e.range(260,700),size:f,cell:c.cell,haze:M?.45:.18})}let u=new Je,h=new vn,p=new z,m=new z,x=new z(0,1,0);return{group:a,update(y,M){let c=Math.atan2(ae.lightDir.x,ae.lightDir.z);for(let d of n)d.phi+=M*1.2/d.d;n.slice().sort((d,g)=>g.d-d.d).forEach((d,g)=>{p.set(y.x+Math.sin(d.phi)*d.d,y.y+d.base,y.z+Math.cos(d.phi)*d.d),h.setFromAxisAngle(x,d.phi+Math.PI),m.set(d.size,d.size,1),u.compose(p,h,m),a.setMatrixAt(g,u);let v=c-d.phi;v=Math.atan2(Math.sin(v),Math.cos(v));let b=Math.max(0,Math.min(1,(v+.35)/.7)),T=1-b*b*(3-2*b);r.setXYZW(g,d.cell[0],d.cell[1],T,d.haze),o.setX(g,.35+.9*Math.pow(Math.max(Math.cos(v),0),3)*(.4+ae.warm))}),a.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,l.uniforms.uOpacity.value=(1-ae.night*.35)*(1-ae.overcast*.55)*(1-.85*ae.rain),l.uniforms.uLit.value.copy(ae.cLit).multiplyScalar(1+.35*ae.bright)}}}function c1(){let i=new fn;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],l=[];for(let p=0;p<=360;p++){let m=p/360*Math.PI*2,x=Math.sin(m)*t.R,y=Math.cos(m)*t.R,M=sh(p/360*t.k*4,40+n*9),c=Math.pow(Math.max(0,M-.18)/.82,1.6),f=t.h*(.12+c);if(r.push(x,-60,y,x,-60+f,y),o.push(0,p/360,1,p/360),p<360){let d=p*2;l.push(d,d+1,d+2,d+1,d+3,d+2)}}let a=new vt;a.setAttribute("position",new Ke(r,3)),a.setAttribute("hf",new Ke(o,2)),a.setIndex(l);let u=new ft({side:bn,fog:!1,uniforms:{uCol:{value:new pe(t.col)},uHaze:{value:ae.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Ue.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Li}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new ht(a,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-ae.night))*(1-.35*ae.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var Wr="./assets/",u1=`
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
}`,Hs=[.299,.587,.114],Jo=[.03,.014,-.018],WS=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),bi=[0,0,0],td=(i,e,t,n,s,r)=>{let o=i-e*(1-n)-t*n*s;return Math.min(.985,Math.max(0,WS(Math.min(1,Math.max(0,n+(o-n)/r)))))};function Sh(i,e,t,n,s){let r=i.toneMappingExposure.value,o=i.uSat.value,l=i.uLo.value,a=i.uDay.value,u=e/255,h=t/255,p=n/255,m=l.x*Hs[0]+l.y*Hs[1]+l.z*Hs[2],x=(Jo[0]*Hs[0]+Jo[1]*Hs[1]+Jo[2]*Hs[2])*a,y=(u*Hs[0]+h*Hs[1]+p*Hs[2]-m)/(1-m+x);bi[0]=td(u,l.x,Jo[0],y,a,o),bi[1]=td(h,l.y,Jo[1],y,a,o),bi[2]=td(p,l.z,Jo[2],y,a,o);let M=.76,c=.24,f=Math.max(bi[0],bi[1],bi[2]);if(f>=M){let v=c*c/(1-f)-c+M,b=1-1/(.15*(v-f)+1),T=v/f;for(let w=0;w<3;w++)bi[w]=(bi[w]-b*f)/Math.max(1-b,.001)*T}let d=Math.min(bi[0],bi[1],bi[2]),g=d<.04?Math.sqrt(Math.max(d,0)/6.25)-d:.04;return s.setRGB((bi[0]+g)/r,(bi[1]+g)/r,(bi[2]+g)/r)}var h1={value:new Ie(1280,720)};function f1(i){i.getDrawingBufferSize(h1.value)}function d1(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:h1}}async function sd(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),l;try{l=await new Qa().loadAsync(o)}catch(a){throw URL.revokeObjectURL(o),a}return l.onUpdate=()=>{URL.revokeObjectURL(o),l.onUpdate=null},l.colorSpace=ai,l.generateMipmaps=!0,l.minFilter=In,l.magFilter=Ot,{tex:l,file:n}}async function Gr(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function p1(i,e=15e3){let t=Wr+"clouds/";return Gr((async()=>{let n=await fetch(t+"clouds.json");if(!n.ok)throw new Error("clouds.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(l=>l.u1>l.u0&&l.v1>l.v0&&l.w>0&&l.h>0&&l.lum&&l.lum[1]>l.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await sd(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function m1(i,e=15e3){let t=Wr+"fronts/";return Gr((async()=>{let n=await fetch(t+"fronts2.json");if(!n.ok)throw new Error("fronts2.json "+n.status);let s=await n.json(),r=(s.tiles||[]).filter(h=>h.name&&h.w>0&&h.h>0&&h.x>=0&&h.x+h.w<=1&&h.y>=0&&h.y+h.h<=1&&h.ey+h.h<=1);if(!r.length)throw new Error("no fronts listed");let o=s.files&&s.files[i]?i:"hi",l=await fetch(t+s.files[o]);if(!l.ok)throw new Error(s.files[o]+" "+l.status);let a=await l.blob();if(s.bytes&&s.bytes[o]&&a.size!==s.bytes[o])throw new Error(s.files[o]+" is "+a.size+" bytes, not "+s.bytes[o]);let u=await createImageBitmap(a);if(s.size&&s.size[o]&&(u.width!==s.size[o][0]||u.height!==s.size[o][1]))throw new Error(s.files[o]+" has the wrong size");return{img:u,tiles:r,tier:o}})(),e,"painted fronts unavailable, keeping the procedural shopfronts:")}async function g1(i,e=15e3){let t=Wr+"houses/";return Gr((async()=>{let n=await fetch(t+"houses.json");if(!n.ok)throw new Error("houses.json "+n.status);let s=await n.json(),r=s.files&&s.files[i]?i:"hi",o=s.tiles&&s.tiles[r]||[],l=(s.types||[]).filter(p=>p.f&&p.s&&p.pieces&&p.pieces.length&&o.some(m=>m.name===p.f)&&o.some(m=>m.name===p.s));if(!l.length||!(s.rows&&s.rows[r]>0))throw new Error("no houses listed");let a=await fetch(t+s.files[r]);if(!a.ok)throw new Error(s.files[r]+" "+a.status);let u=await a.blob();if(s.bytes&&s.bytes[r]&&u.size!==s.bytes[r])throw new Error(s.files[r]+" is "+u.size+" bytes, not "+s.bytes[r]);let h=await createImageBitmap(u,{premultiplyAlpha:"none"});if(s.size&&s.size[r]&&(h.width!==s.size[r][0]||h.height!==s.size[r][1]))throw new Error(s.files[r]+" has the wrong size");if(o.some(p=>!(p.w>0&&p.h>0&&p.x>=0&&p.x+p.w<=h.width&&p.ey+p.h<=h.height)))throw new Error("a tile lies outside the sheet");return{img:h,tiles:o,types:l,rows:s.rows[r],tier:r}})(),e,"painted houses unavailable, keeping the procedural ones:")}async function v1(i,e=15e3){let t=Wr+"fields/";return Gr((async()=>{let n=await fetch(t+"fields.json");if(!n.ok)throw new Error("fields.json "+n.status);let s=await n.json();if(!(s.tile&&s.tile[0]>0&&s.tile[1]>0&&Math.abs(ei/s.tile[1]-Math.round(ei/s.tile[1]))<1e-6))throw new Error("bad tile size");if(!(s.mean&&s.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await sd(t,s,i);return r.colorSpace=qt,r.wrapS=r.wrapT=Ns,{tex:r,tile:s.tile,mean:s.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var bh=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],GS=140*Math.PI/180,Mh=Math.PI/180,gr=i=>Math.atan2(Math.sin(i),Math.cos(i));function XS(i,e){let t=Ct(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/bh[0][1];for(let[a,u,h,p,m,x,y]of bh)for(let M=0;M<u;M++){let c;a==="tower"?c=s+M*r+t.range(-.22,.22)*r:a==="mid"?c=s+(M+.5)*r*(bh[0][1]/u)+t.range(-.2,.2)*r:a==="high"?c=s+(M*(bh[0][1]/u)+.5)*r+t.range(-.3,.3)*r:c=s+(M+t())/u*Math.PI*2,n.push({role:a,kinds:x,phi:c,d:t.range(h[0],h[1]),e0:t.range(p[0],p[1])*Mh,ah:t.range(m[0],m[1])*Mh,haze:y,k:-1,flip:!1})}let o=i.map(()=>[]),l=n.map((a,u)=>u);for(let a=l.length-1;a>0;a--){let u=Math.floor(t()*(a+1)),h=l[a];l[a]=l[u],l[u]=h}for(let a of l){let u=n[a],h=-1,p=1e9;i.forEach((m,x)=>{let y=u.kinds.indexOf(m.kind);if(y<0)return;let c=(o[x].some(f=>Math.abs(gr(f-u.phi))<GS)?1e3:0)+o[x].length*10+y*4+t();c<p&&(p=c,h=x)}),h<0&&(h=Math.floor(t()*i.length)),u.k=h,o[h].push(u.phi)}for(let a of n){let u=i[a.k],h=a.d*Math.tan(a.e0);a.y0=h,a.h=a.d*Math.tan(a.e0+a.ah)-h,a.w=a.h*u.w/u.h,a.half=Math.atan2(a.w/2,a.d)}return n.sort((a,u)=>u.d-a.d)}function x1(i,e,t=5){let n=i.list,s=XS(n,t),r=s.length,o=new rn(1,1);o.translate(0,.5,0);let l=new Pn(new Float32Array(r*4),4),a=new Pn(new Float32Array(r*4),4),u=new Pn(new Float32Array(r),1);o.setAttribute("aRect",l),o.setAttribute("aInfo",a),o.setAttribute("aRim",u),s.forEach((b,T)=>{let w=n[b.k];l.setXYZW(T,w.u0,w.v0,w.u1-w.u0,w.v1-w.v0),a.setXYZW(T,0,w.lum[0],1/Math.max(.05,w.lum[1]-w.lum[0]),b.haze)});let h=new ft({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new pe},uShade:{value:ae.cShade},uRimCol:{value:ae.cRim},uHaze:{value:ae.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...d1(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:u1+`
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
      }`}),p=new rs(o,h,r);p.frustumCulled=!1,p.renderOrder=-5;let m=new Je,x=new vn,y=new z,M=new z,c=new z(0,1,0),f=new z,d=!0;function g(b,T){let w=s.filter(R=>R.role==="tower").sort((R,L)=>gr(R.phi-b)-gr(L.phi-b)),_=null,S=1e9;for(let R=0;R<w.length;R++){let L=w[R],D=w[(R+1)%w.length],O=T==="center"?L.phi:L.phi+gr(D.phi-L.phi)/2,H=Math.abs(gr(O-b));H<S&&(S=H,_=T==="center"?[L,L,O]:[L,D,O])}if(!_)return;let[E,A,C]=_,I=gr(b-C);for(let R of s)R.phi+=I;for(let R of new Set([E,A])){let L=Math.max(R.ah,31*Mh),D=R.d*Math.tan(R.e0+L)-R.y0;R.w*=D/R.h,R.h=D,R.ah=L,R.half=Math.atan2(R.w/2,R.d)}}let v={mesh:p,count:r,opening:"flank",layout:s,update(b,T){let w=b.position,_=Math.atan2(ae.lightDir.x,ae.lightDir.z);b.getWorldDirection(f);let S=Math.atan2(f.x,f.z),E=Math.atan(Math.tan(b.fov*Mh/2)*b.aspect);d&&g(S,v.opening);for(let C=0;C<r;C++){let I=s[C];I.phi+=T*1.2/I.d,y.set(w.x+Math.sin(I.phi)*I.d,w.y+I.y0,w.z+Math.cos(I.phi)*I.d),x.setFromAxisAngle(c,I.phi+Math.PI),M.set(I.w,I.h,1),m.compose(y,x,M),p.setMatrixAt(C,m);let R=gr(_-I.phi),L=R>0!==n[I.k].litLeft;L!==I.flip&&Math.abs(Math.sin(R))>.2&&(d||Math.abs(gr(I.phi-S))>E+I.half+.05)&&(I.flip=L),a.setX(C,I.flip?1:0);let D=Math.max(Math.cos(R),0);u.setX(C,.35+.9*D*D*D*(.4+ae.warm))}d=!1,p.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,u.needsUpdate=!0;let A=h.uniforms;{let C=Math.min(Math.max((ae.bright-.55)/.4,0),1);A.uPaint.value=C*C*(3-2*C)}A.uLit.value.copy(ae.cLit).multiplyScalar(1+.35*ae.bright),A.uOpacity.value=(1-ae.night*.35)*(1-ae.overcast*.55)*(1-.85*ae.rain)}};return v}async function y1(i,e=15e3){let t=Wr+"band/";return Gr((async()=>{let n=await fetch(t+"band2.json");if(!n.ok)throw new Error("band2.json "+n.status);let s=await n.json(),{tex:r,file:o}=await sd(t,s,i),l={};for(let[a,u]of Object.entries(s.zones&&s.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(l[a]=new mt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(l).length)throw new Error("no zones listed");return r.wrapS=Ns,{tex:r,zones:l,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var Ll=2500,qS=-8,Vr=new z,mr=new pe,nd=new pe("#fff5dd").multiplyScalar(3.35),id=new pe("#8fb1ec").multiplyScalar(1.35*2);function _1(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(v=>v.w)),r=192,o=360/i.period,l=new Float32Array((r+1)*6),a=new Float32Array((r+1)*4),u=[],h=Math.tan(qS*Math.PI/180),p=s+.004;for(let v=0;v<=r;v++){let b=v/r*Math.PI*2,T=Math.sin(b)*Ll,w=Math.cos(b)*Ll;if(l.set([T,h*Ll,w,T,p*Ll,w],v*6),a.set([-(v/r)*o,h,-(v/r)*o,p],v*4),v<r){let _=v*2;u.push(_,_+2,_+1,_+1,_+2,_+3)}}let m=new vt;m.setAttribute("position",new Mt(l,3)),m.setAttribute("uv",new Mt(a,2)),m.setIndex(u);let x=Math.PI/180,y=(e.composer.readBuffer.samples||0)>0,M=new ft({fog:!1,side:bn,alphaToCoverage:y,defines:y?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new mt},uRowB:{value:new mt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new pe(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*x)},uGnd:{value:new z(2.8,.0014,700)},uSpan:{value:new Ie(h,p)},...d1(e)},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${Ll.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:u1+`
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
      }`}),c=new ht(m,M);c.frustumCulled=!1,c.renderOrder=999;let f=M.uniforms,d=new z,g=!0;return{mesh:c,zones:n,hero:.125,update(v,b,T=2.8,w=.0014,_=700){let S=n[b.a],E=n[b.b],A=b.t,C=0;if(S&&E?(f.uRowA.value.copy(S),f.uRowB.value.copy(E),f.uMix.value=S===E?0:A,C=1):(S||E)&&(f.uRowA.value.copy(S||E),f.uMix.value=0,C=S?1-A:A),f.uAlpha.value=C,c.visible=C>.002,!c.visible)return 0;c.position.copy(v.position),f.uGnd.value.set(T,w,_),f.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(T/140)+.3*x)),Math.max(S?S.w:0,E?E.w:0)+.003),g&&(v.getWorldDirection(d),f.uRot.value=this.hero+Math.atan2(d.x,d.z)/(Math.PI*2)*o,g=!1),mr.copy(ae.sunCol).multiplyScalar(ae.sunI),Vr.set(mr.r,mr.g,mr.b),mr.copy(ae.hemiSky).multiplyScalar(ae.hemiI*2),Vr.x+=mr.r,Vr.y+=mr.g,Vr.z+=mr.b;let I=Math.min(Math.max((ae.bright-.55)/.4,0),1),R=I*I*(3-2*I);f.uLightC.value.setRGB(Vr.x/(nd.r+id.r),Vr.y/(nd.g+id.g),Vr.z/(nd.b+id.b)),f.uPaint.value=R;let L=Math.max(4*f.uMix.value*(1-f.uMix.value),Math.min(1,2*(1-C))),D=y?0:.45*L*L*L;return f.uHaze.value=1-(1-(1-(1-.12*ae.warm-.25*ae.night)*(1-.55*ae.overcast)*(1-.6*ae.rain))*(1-R))*(1-D),C}}}async function YS(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((m,x)=>e[x]!==m))throw new Error("not a PNG");let s=8,r=0,o=0,l=[];for(;s+12<=e.length;){let m=t.getUint32(s),x=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+m>e.length)throw new Error("PNG truncated");if(x==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(x==="IDAT")l.push(e.subarray(s+8,s+8+m));else if(x==="IEND")break;s+=12+m}if(!r||!o||!l.length)throw new Error("PNG has no image");let a=new Uint8Array(await new Response(new Blob(l).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,h=new Uint8Array(u*o),p=new Uint8Array(u);if(a.length<(u+1)*o)throw new Error("PNG data short");for(let m=0;m<o;m++){let x=a[m*(u+1)],y=m*(u+1)+1,M=(o-1-m)*u,c=m?h.subarray(M+u,M+2*u):p,f=h.subarray(M,M+u),d=a.subarray(y,y+u);if(x===0)f.set(d);else if(x===1){for(let g=0;g<4;g++)f[g]=d[g];for(let g=4;g<u;g++)f[g]=d[g]+f[g-4]}else if(x===2)for(let g=0;g<u;g++)f[g]=d[g]+c[g];else if(x===3){for(let g=0;g<4;g++)f[g]=d[g]+(c[g]>>1);for(let g=4;g<u;g++)f[g]=d[g]+(f[g-4]+c[g]>>1)}else if(x===4){for(let g=0;g<4;g++)f[g]=d[g]+c[g];for(let g=4;g<u;g++){let v=f[g-4],b=c[g],T=c[g-4],w=Math.abs(b-T),_=Math.abs(v-T),S=Math.abs(v+b-T-T);f[g]=d[g]+(w<=_&&w<=S?v:_<=S?b:T)}}else throw new Error("PNG filter "+x)}return{w:r,h:o,data:h}}function ZS(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],l=Math.floor(r*255)+1,a=new Uint32Array(256),u=[],h=(y,M,c,f,d,g)=>{a.fill(0);for(let v=0;v<g;v++){let b=((f+v)*M+c)*4+3;for(let T=0;T<d;T++)a[y[b+T*4]]++}};for(let y=0;y<s;y++)for(let M=0;M<n;M++){let c=i/n,f=e/s;h(t,i,M*c,y*f,c,f);let d=0;for(let g=l;g<256;g++)d+=a[g];u.push(d/(c*f))}let p=i,m=e,x=t;for(;p>1&&m>1;){let y=p>>1,M=m>>1,c=new Uint8Array(y*M*4),f=p*4;for(let v=0;v<M;v++){let b=v*2*f,T=v*y*4;for(let w=0;w<y;w++,b+=8)for(let _=0;_<4;_++,T++)c[T]=x[b+_]+x[b+_+4]+x[b+_+f]+x[b+_+f+4]+2>>2}let d=y/n,g=M/s;if(d>=2&&g>=2&&d===Math.floor(d)&&g===Math.floor(g))for(let v=0;v<s;v++)for(let b=0;b<n;b++){h(c,y,b*d,v*g,d,g);let T=Math.round(u[v*n+b]*d*g),w=255,_=a[255];for(;w>1&&_<T;)_+=a[--w];let S=T>0?Math.min(6,Math.max(.5,l/w)):1;if(S!==1)for(let E=0;E<g;E++){let A=((v*g+E)*y+b*d)*4+3;for(let C=0;C<d;C++)c[A+C*4]=Math.min(255,Math.round(c[A+C*4]*S))}}o.push({data:c,width:y,height:M}),x=c,p=y,m=M}return o}async function b1(i,e=15e3){let t=Wr+"trees/";return Gr((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let l=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&l.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+l.byteLength+" bytes, not "+s.bytes[r]);let a=await YS(l),u=s.cols,h=s.rows;if(!(u>0&&h>0)||a.w%u||a.h%h)throw new Error("bad atlas layout");let p=(s.cells||[]).filter(y=>y.col<u&&y.row<h).map(y=>{let M=.5/a.w,c=.5/a.h;return{kind:y.kind,u0:y.col/u+M,u1:(y.col+1)/u-M,v0:1-(y.row+1)/h+c,v1:1-y.row/h-c}});if(!p.some(y=>y.kind==="leaf"))throw new Error("no leaf clusters listed");let m=ZS(a.w,a.h,a.data,u,h,.5),x=new ss(a.data,a.w,a.h,jn);return x.mipmaps=m,x.generateMipmaps=!1,x.minFilter=In,x.magFilter=Ot,x.colorSpace=ai,x.needsUpdate=!0,{tex:x,cells:p,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var Vs={T:6.5,N:400,TH:.75},E1=Vs.N/ei,KS=E1*Math.tan(Vs.TH),Th=Math.cos(Vs.TH),Dl=Math.sin(Vs.TH),Eh=4,Wn=i=>i.toFixed(7),Ul=`
float shorePhase(float s, float d){ return uTime * ${Wn(1/Vs.T)} + s * ${Wn(E1)} + d * ${Wn(KS)}; }`,Nl=256/ei,M1=i=>Math.max(1,Math.round(i*Dl/Nl))*Nl/Dl,$S=i=>Math.max(1,Math.round(i*Th/Nl))*Nl/Th,rd=i=>Math.max(1,Math.round(i*Vs.N*Eh/256))*256/(Vs.N*Eh),JS=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,Fl={uNoiseTex:Ue.uNoiseTex,uOrigin:Ue.uOrigin,uTime:{value:0},uCam:{value:new z},uSunDir:{value:ae.lightDir},uSunCol:{value:ae.sunCol},uHorizon:{value:ae.horizon},uZenith:{value:ae.zenith},uFog:{value:ae.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new pe},uPMid:{value:new pe},uPFace:{value:new pe},uPLite:{value:new pe},uPMidD:{value:new pe},uPMidM:{value:new pe},uPMidF:{value:new pe},uPMidL:{value:new pe},uPFarD:{value:new pe},uPFar:{value:new pe},uPFarF:{value:new pe},uPFarL:{value:new pe},uPHz:{value:new pe},uFoamLit:{value:new pe(1,1,1)},uFoamShade:{value:new pe(.5,.6,.8)},uSeaDir:{value:new Ie(1,0)},uWaves:{value:1},uPWBack:{value:new pe},uPWFace:{value:new pe},uPWLite:{value:new pe},uPWTurq:{value:new pe},uShoreW:{value:1}},jS={trough:[0,98,182],mid:[10,132,218],face:[49,163,242],lite:[140,210,250],midD:[4,124,212],midM:[27,148,232],midF:[49,163,242],midL:[140,205,248],farD:[36,139,221],far:[69,169,243],farF:[114,191,246],farL:[190,228,251],hz:[111,196,250],foam:[246,251,254],foamShade:[160,205,240],wBack:[1,109,193],wFace:[68,163,212],wLite:[113,188,241],wTurq:[46,154,201]},A1=`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint, uWaves; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPLite, uPMidD, uPMidM, uPMidF, uPMidL, uPFarD, uPFar, uPFarF, uPFarL, uPHz, uFoamLit, uFoamShade;
uniform vec2 uOrigin, uSeaDir;
${Li}${JS}
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
}`;function R1(i=!1){let e=new ft({fog:!1,defines:i?{SEA_LITE:""}:{},uniforms:Fl,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${A1}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),t=new ht(new rn(14e3,14e3),e);t.rotation.x=-Math.PI/2,t.position.y=cs,t.renderOrder=998,t.frustumCulled=!1;let n=Fl;return{mesh:t,u:n,update(s,r,o,l=1,a=null,u=null,h=0){t.position.x=s.x,t.position.z=s.z,u&&l>0&&QS(u,h,n.uSeaDir.value),n.uTime.value=r,n.uCam.value.copy(s),n.uNight.value=ae.night,n.uBright.value=ae.bright,n.uFogD.value=o,n.uVis.value=l,n.uSpecK.value=1-ae.overcast*.85;let p=Math.min(Math.max((ae.bright-.55)/.4,0),1),m=a?p*p*(3-2*p):0;n.uPaint.value=m;let x=1+.25*ae.bright,y=1/(Math.PI*x),M=ae.sunCol,c=ae.hemiSky,f=ae.sunI*.8,d=ae.hemiI;if(n.uFoamLit.value.setRGB((M.r*f+c.r*d)*y,(M.g*f+c.g*d)*y,(M.b*f+c.b*d)*y),n.uFoamShade.value.setRGB(c.r*d*.9*y,c.g*d*.9*y,c.b*d*.9*y),m>0){let g=jS;ti(a,g.trough,n.uPTrough.value),ti(a,g.mid,n.uPMid.value),ti(a,g.face,n.uPFace.value),ti(a,g.lite,n.uPLite.value),ti(a,g.midD,n.uPMidD.value),ti(a,g.midM,n.uPMidM.value),ti(a,g.midF,n.uPMidF.value),ti(a,g.midL,n.uPMidL.value),ti(a,g.farD,n.uPFarD.value),ti(a,g.far,n.uPFar.value),ti(a,g.farF,n.uPFarF.value),ti(a,g.farL,n.uPFarL.value),ti(a,g.hz,n.uPHz.value),n.uFoamLit.value.lerp(ti(a,g.foam,S1),m),n.uFoamShade.value.lerp(ti(a,g.foamShade,S1),m),wh(a,g.wBack,n.uPWBack.value,n.uPMid.value),wh(a,g.wFace,n.uPWFace.value,n.uPMid.value),wh(a,g.wLite,n.uPWLite.value,n.uPMid.value),wh(a,g.wTurq,n.uPWTurq.value,n.uPMid.value)}}}}var S1=new pe,ti=(i,e,t)=>Sh(i,e[0],e[1],e[2],t),wh=(i,e,t,n)=>{ti(i,e,t),t.r-=n.r,t.g-=n.g,t.b-=n.b},jo={zone:-1,x:1,z:0},w1={},T1=.35;function QS(i,e,t){let n=Math.floor((e-150)/Ii),s=Math.floor((e+800)/Ii)+1;for(let r=n;r<=s;r++)if(!(ah(r*Ii+Ii/2,"coast")<.99)){if(r!==jo.zone){let o=0,l=0;for(let h=r*Ii-Ho;h<=(r+1)*Ii;h+=25)i.at(Math.max(h,0),w1),o+=w1.h,l++;o/=l,jo.zone=r;let a=Math.cos(T1),u=Math.sin(T1);jo.x=-Math.sin(o)*a-Math.cos(o)*u,jo.z=-Math.cos(o)*a+Math.sin(o)*u}t.set(jo.x,jo.z);return}}function C1(i=!1){let e=M1(5.5),t=M1(.45),n=8*Nl/Dl,s=$S(2.6),r=rd(.8),o=rd(17.3),l=rd(3.7);return new ft({fog:!1,defines:i?{SHORE_LITE:"",SEA_LITE:""}:{},uniforms:Fl,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${A1}${Ul}
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
          float a = d * ${Wn(Th)} - s * ${Wn(Dl)}, b = s * ${Wn(Th)} + d * ${Wn(Dl)};
          vec4 nA = vnoise4(vec2(s * 0.0609524, d * 0.12 + uTime * 0.01));
          float wob = (nA.x - 0.5) * 0.9;   // (the rows wander)
          // the waves drawn here: the smallest (OCT to each big one) out to 8 m from us, then doubling at each doubling of
          // the distance, every other crest fading out in between, so the sizes hand over without a seam. q: the phase in
          // this size's waves; e: from the nearest crest of this size, e1: of the next size up (in their own waves); f:
          // since the last big wave passed
          float ph1 = (shorePhase(s, d) + wob) * ${Eh.toFixed(1)}, f = fract(ph1 * ${(1/Eh).toFixed(3)}), fw1 = fwidth(ph1) + 1e-4;
          float L = clamp(log2(dist * 0.125), 0.0, 3.0), k0 = floor(L), fr = L - k0, P = exp2(k0);
          float q = ph1 / P, n0 = floor(q + 0.5), n1 = floor(0.5 * q + 0.5), ev = 1.0 - mod(n0, 2.0), aa = fw1 / P * 1.2;
          // the details' coordinates and their footprints on screen first (they are read only near the crests and where
          // there is foam): the crest's torn edge and its beads ride with the crest; the lace stays in the water as the
          // waves pass through it, drifting in slowly. Along the road they repeat with S_WRAP
          vec2 pC = vec2(a * ${Wn(e)}, ph1 * ${Wn(r)}), cx = dFdx(pC), cy = dFdy(pC);
          vec2 pL = vec2(a * ${Wn(t)}, (b + uTime * 0.3) * ${Wn(s)}), lx = dFdx(pL), ly = dFdy(pL);
          // the waves in full out to ~14 m from the wall, easing into the open sea's own wavelets by the strip's edge; their
          // crests fade as they shrink to a few pixels far ahead
          float near = 1.0 - smoothstep(14.0, 36.0, d), vis = 1.0 - smoothstep(0.07, 0.18, aa * 0.8333), nw = 1.0 - smoothstep(3.0, 20.0, d);
          // a short-crested sea, as the painting's: each crest a few of its wavelengths long, bowed, bigger and smaller
          // along it, breaking where it is biggest (more of it near the wall), each its own: one pattern per crest, riding
          // with it, at its size (E0 for the crests of this size, E1 for the next size's)
          vec4 E0 = vnoise4L(vec2(a * ${Wn(n)} / P + n0 * P * ${Wn(o)}, n0 * P * ${Wn(l)}));
          vec4 E1 = vnoise4L(vec2(a * ${Wn(n)} * 0.5 / P + n1 * 2.0 * P * ${Wn(o)}, n1 * 2.0 * P * ${Wn(l)}));
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
      }`})}function P1(){return new ft({fog:!1,uniforms:{uNoiseTex:Ue.uNoiseTex,uTime:{value:0},uSunDir:{value:ae.lightDir},uSunCol:{value:ae.sunCol},uHorizon:{value:ae.horizon},uZenith:{value:ae.zenith},uFog:{value:ae.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
      }`})}var Qo={n:8,drops:4};function I1(){return new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:Fl,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC; attribute float aK;
      varying vec2 vUv; varying vec4 vK;
      ${Ul}
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
      }`})}function L1(i){let e=i.length/8;if(!e)return null;let t=1+Qo.drops,n=e*t,s=new Float32Array(n*12),r=new Float32Array(n*16),o=new Float32Array(n*12),l=new Float32Array(n*4),a=new Uint16Array(n*6),u=[-1,1,1,-1],h=[-1,-1,1,1],p=1/0,m=1/0,x=1/0,y=-1/0,M=-1/0,c=-1/0;for(let d=0;d<e;d++){let g=d*8;for(let v=0;v<t;v++){let b=d*t+v;for(let T=0;T<4;T++){let w=b*4+T;s[w*3]=i[g],s[w*3+1]=i[g+1],s[w*3+2]=i[g+2],r[w*4]=i[g+3],r[w*4+1]=i[g+4],r[w*4+2]=i[g+5],r[w*4+3]=i[g+6],o[w*3]=u[T],o[w*3+1]=h[T],o[w*3+2]=i[g+7],l[w]=v}a.set([b*4,b*4+1,b*4+2,b*4,b*4+2,b*4+3],b*6)}p=Math.min(p,i[g]),m=Math.min(m,i[g+1]),x=Math.min(x,i[g+2]),y=Math.max(y,i[g]),M=Math.max(M,i[g+1]),c=Math.max(c,i[g+2])}let f=new vt;return f.setAttribute("position",new Mt(s,3)),f.setAttribute("aB",new Mt(r,4)),f.setAttribute("aC",new Mt(o,3)),f.setAttribute("aK",new Mt(l,1)),f.setIndex(new Mt(a,1)),f.boundingBox=new vi(new z(p-4,m-1,x-4),new z(y+4,M+4,c+4)),f.boundingSphere=f.boundingBox.getBoundingSphere(new xi),f}var Wt=60,od=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],D1=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],N1=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Ws=32,ad=[-.2,2.2,5.5,10,17,27,38],Bl=[.025,.026,.032],F1=[.05,.05,.065],U1=new Je,ws=(i,e)=>(i%e+e)%e,Gs=(i,e)=>{let t=hr(i);return!!t&&Math.abs(i-t.s)<e},Ah=i=>ws(i,4)===0,e3=i=>ws(i,2)===0,hd=1.4,B1=i=>Ah(i)?4.4:hd+.9,ld=i=>Ah(i)?3.4:hd-.1,cd=(i,e)=>Math.abs(i-Math.round(i/300)*300)<e,Di=(i,e)=>{let t=zi(i);return!!t&&Math.abs(i-t.s)<e},ci=(i,e)=>{let t=ki(i);return!!t&&Math.abs(i-t.s)<e},ud=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let l=n(r,o);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let l=s+r*t+o,a=l+1,u=l+t,h=u+1;this.I.push(l,a,u,a,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,l=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)l[u*o+h]=n(u,h-s);let a=(u,h)=>l[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let p=a(u,h-1),m=a(u,h+1),x=a(u-1,h),y=a(u+1,h),M=l[u*o+h],c=m[0]-p[0],f=m[1]-p[1],d=m[2]-p[2],g=y[0]-x[0],v=y[1]-x[1],b=y[2]-x[2],T=f*b-d*v,w=d*g-c*b,_=c*v-f*g;w<0&&(T=-T,w=-w,_=-_);let S=Math.hypot(T,w,_)||1;M[3]=T/S,M[4]=w/S,M[5]=_/S}this.grid(e,t,(u,h)=>l[u*o+h+s])}build(){let e=new vt;return e.setAttribute("position",new Ke(this.P,3)),e.setAttribute("normal",new Ke(this.N,3)),e.setAttribute("su",new Ke(this.SU,2)),e.setAttribute("zw",new Ke(this.ZW,4)),e.setAttribute("rk",new Ke(this.RK,2)),e.setAttribute("rv",new Ke(this.RV,1)),e.setAttribute("zs",new Ke(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},Rh=class{constructor(e,t,n,s){this.path=t,this.M=n,this.riverMat=s,this.heapCache=new Map,this.group=new fn,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Wt),s=Math.floor((e+this.ahead)/Wt);for(let[o,l]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(l),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let l=o.pending.shift();l&&o.group.add(l),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let a=Math.max(0,n);a<=s;a++)if(!this.chunks.has(a)){l=a;break}if(l<0)return 0;l*Wt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let o=this.job.it.next();if(o.done){let l=o.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let l=o*Wt-e,a=r.group.children;for(let u=0;u<a.length;u++){let h=a[u],p=h.userData.detail;p&&(h.visible=p==="leaf"?l<s:l<t||n&&p==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Wt,s=n+Wt,r=t.at(n),o=r.x,l=r.z,a=Ct(Math.floor(yn(e,777)*4294967295)),u={atlas:new an({uv:!0,ao:!0,lit:!0}),color:new an({ao:!0}),foliage:new an,leaf:new an({uv:!0}),lamp:new an({color:!1}),sig:new an({color:!1}),sodium:new an({color:!1}),decal:new an({uv:!0}),pool:new an({uv:!0,color:!1}),gleaf:new an({uv:!0,off:!0}),gblossom:new an({uv:!0,off:!0}),tetra:new an({uv:!0,ao:!0})},h=new ud,p={rows:[],puffs:[]},m=[];u.lamps=[];let x={},y={},M=(E,A)=>{t.at(E,y);let C=Bn(E,"rw");return y.y+Ms(E,A,y.y,C)},c=E=>{let A=Lt(E);return[A.city,A.sakura,A.coast,A.country,A.snow]},f=(E,A,C)=>(t.at(E,x),[x.x+x.rx*A-o,C,x.z+x.rz*A-l]),d=(E,A,C,I=0,R=!0)=>{t.at(E,x);let L=x.h-Math.PI/2+(R&&A<0?Math.PI:0)+I,D=new Je().makeRotationY(L);return D.setPosition(x.x+x.rx*A-o,C,x.z+x.rz*A-l),D.groundY=C,D},g=(E,A,C=0,I=0,R=!0)=>{let L=M(E,A),D=d(E,A,L+C,I,R);return D.groundY=L,D},v=E=>t.at(E,y).y,b=E=>Bn(E,"rw"),T=E=>{let A=Lt(E);return A.city+A.sakura>.5?A.city>=A.sakura?3:2.6:0};{let E=ki(n+Wt/2),A=!!E&&E.s>n-40&&E.s<s+40,C=A?61:21,I=b(n+Wt/2),R=(()=>{let q=[0,...D1].map(ee=>ee);return N1.forEach(ee=>q.push(ee-I)),q})(),L=[...R.slice().reverse().map(k=>-k),...R],D=L.length,O=Array.from({length:C},(k,q)=>n+q/(C-1)*Wt);{let k=zi(n+Wt/2);if(k)for(let q of[k.s-_n,k.s+_n])q>n+.1&&q<s-.1&&O.push(q-.03,q+.03)}O.sort((k,q)=>k-q);let H=D/2,B=O.map(k=>(t.at(k,x),{s:k,f:{...x},rw:b(k),w:c(k),rb:A?Bm(k):0})),V=Math.round(H/2);for(let[k,q,ee,we]of[[0,V,0,1],[V-1,H,1,0],[H,H+V+1,0,1],[H+V,D,1,0]])h.gridN(B.length,q-k,(Ae,Me)=>{let G=B[Ae],J=G.f,xe=k+Me,Pe=L[xe],re=Pe===0&&G.w[2]>0?.15:0,ye=Pe<0||Pe===0&&xe<H?Pe-G.rw+re:Pe+G.rw-re,Oe=J.y+Ms(G.s,ye,J.y,G.rw),ke=Math.abs(ye)>G.rw+.98?Math.min(1,rh/.5):0;return[J.x+J.rx*ye-o,Oe,J.z+J.rz*ye-l,0,1,0,ws(G.s,ei),ye,G.w[0],G.w[1],G.w[2],G.w[3],G.rw,0,G.rb>0?G.rb:-ke,G.w[4]]},ee,we),yield}yield,h.grid(31,2,(A,C)=>{let I=n+A/30*Wt,R=b(I),L=C?R:-R;t.at(I,x);let D=x.y,O=(v(I+1)-v(I-1))/2,H=-O*x.fx,B=1,V=-O*x.fz,k=Math.hypot(H,B,V),q=c(I);return[x.x+x.rx*L-o,D,x.z+x.rz*L-l,H/k,B/k,V/k,ws(I,ei),L,q[0],q[1],q[2],q[3],R,1,0,q[4]]});{let E=[];for(let I=0;I<=30;I++){let R=n+I/30*Wt;E.push({s:R,sw:T(R)})}let A=[],C=null;for(let I of E)I.sw>0?(C||(C=[],A.push(C)),C.push(I)):C=null;for(let I of A)if(!(I.length<2))for(let R of[-1,1])h.grid(I.length,2,(L,D)=>{let{s:O,sw:H}=I[L],B=b(O),V=R*(D===(R>0?0:1)?B:B+H);t.at(O,x);let k=c(O);return[x.x+x.rx*V-o,x.y+.15,x.z+x.rz*V-l,0,1,0,ws(O,ei),V,k[0],k[1],k[2],k[3],B,2,0,k[4]]}),h.grid(I.length,2,(L,D)=>{let{s:O}=I[L],H=b(O),B=R*H,V=R>0?D:1-D;t.at(O,x);let k=c(O);return[x.x+x.rx*B-o,x.y+(V?.15:0),x.z+x.rz*B-l,-R*x.rx,0,-R*x.rz,ws(O,ei),B,k[0],k[1],k[2],k[3],H,3,0,k[4]]})}yield,yield*this.placePoles(e,n,s,a,u,d,M,f,v,b);{let E=Math.ceil((n-Or)/Br),A=Vo(E);A<s&&_l(A)&&(yield*this.placeCrossing(u,h,A,d,v,b,M,T,o,l));let C=Math.ceil((n-Wo)/kr),I=T0(C);I<s&&E0(I)&&(yield*this.placeRiver(u,h,I,d,v,b,M,T,o,l,a,m));let R=zi(n+Wt/2);R&&R.s+on>n&&R.s-on<s&&(yield*this.placeTunnel(u,h,R,n,s,d,g,M,b,o,l,a))}yield;for(let E=n;E<s;E+=4){let A=pn(E);(A==="coast"&&Lt(E).coast>.45||A==="mountain"&&Lt(E).mountain>.45)&&!Di(E+2,on+4)&&this.guardrail(u,E,Math.min(E+4,s),f,v,b)}yield*this.placeCity(u,a,n,s,d,g,v,b,T,M,h,o,l),yield*this.placeSakura(u,a,n,s,d,g,v,b,M),yield*this.placeCoast(u,a,e,n,s,d,g,b,p,f),yield,yield*this.placeCountry(u,a,n,s,d,g,v,b,M),yield*this.placeMountain(u,a,n,s,d,g,v,b,M),yield*this.placeSnow(u,a,n,s,d,g,v,b,M),yield*this.placeVerge(u,a,n,s,d,M,b,e,o,l),yield;let w=new fn,_=(E,A,C,I,R=0,L)=>{if(!E)return null;let D=new ht(E,A);return D.castShadow=C,D.receiveShadow=I,D.renderOrder=R,L&&(D.userData.detail=L),w.add(D),D},S=new Set;for(let E of[n,n+20,n+40,s]){let A=ur(E);S.add(A.a),A.t>0&&S.add(A.b)}_(h.build(),wl([...S]),!1,!0),yield;{let E=_(u.atlas.build(),this.M.atlas,!0,!0);E&&(E.customDepthMaterial=this.M.atlasDepth)}yield;{let E=_(u.color.build(),this.M.color,!0,!0);E&&(E.customDepthMaterial=hh)}if(yield,_(u.tetra.build(),this.M.tetra,!0,!0),_(u.foliage.build(),this.M.foliage,!0,!0),_(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let E=_(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let E=_(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(yield,_(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),_(u.sig.build(),this.M.sig,!1,!1,0,"small"),_(u.sodium.build(),this.M.sodium,!1,!1),_(u.decal.build(),this.M.decal,!1,!0,1,"small"),_(u.pool.build(),this.M.pool,!1,!1,2,"light"),p.rows.length>1){let E=p.rows,A=ad.length,C=E.length*A,I=new Float32Array(C*3),R=new Float32Array(C*2),L=new Float32Array(C*2),D=[];E.forEach((H,B)=>{for(let V=0;V<A;V++){let k=B*A+V,q=V*7;I.set(H.subarray(q,q+3),k*3),R[k*2]=H[q+3],R[k*2+1]=H[q+4],L[k*2]=H[q+5],L[k*2+1]=H[q+6]}if(B>0)for(let V=0;V<A-1;V++){let k=(B-1)*A+V,q=k+A;D.push(k,q,k+1,k+1,q,q+1)}});let O=new vt;O.setAttribute("position",new Mt(I,3)),O.setAttribute("su",new Mt(R,2)),O.setAttribute("hf",new Mt(L,2)),O.setIndex(D),O.computeBoundingSphere(),_(O,this.M.shore,!1,!1,997)}p.puffs.length&&_(L1(p.puffs),this.M.surf,!1,!1,2,"small");for(let E of m)_(E,this.riverMat,!1,!0);return w.position.set(o-this.origin.x,0,l-this.origin.z),{group:w,ox:o,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Ws+6,n=pn(t);if(n==="sakura"||Gs(t,6)||ci(t,34)||Di(t,on+12))return null;let s=Bn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,l,a,u,h){let p=Math.ceil((t-6)/Ws),m=Math.floor((n-6-.001)/Ws);for(let x=p;x<=m;x++){let y=this.poleSpec(x);if(!y)continue;let M=y.z==="city"?u(y.s)+.15:l(y.s,y.u),c=o(y.s,y.u,M),f=Ct(Math.floor(yn(x,31)*4294967295)),d=H0(r,c,f,{trans:f()<.45});y.z==="city"&&x%2===0&&Rg(r,c,-.11),x%2&&(yield);let g=this.poleSpec(x+1);if(g){let v=g.z==="city"?u(g.s)+.15:l(g.s,g.u),b=Ag(o(g.s,g.u,v));r.color.setM(new Je);let T=[];for(let w=0;w<d.length;w++){let _=d[w],S=b[w],E=.35+f()*.4+(w>=7?.3:0);T.push(E),r.color.wire([_.x,_.y,_.z],[S.x,S.y,S.z],E,w>=7?.022:.015,Bl,10)}if(y.z!=="coast"&&f()<.38){let w=Math.floor(f()*4),_=d[w],S=b[w],E=1+Math.floor(f()*4),A=.18+f()*.5;for(let C=0;C<E;C++){let I=Math.min(.92,A+C*(.018+f()*.025)),R=_.x+(S.x-_.x)*I,L=_.z+(S.z-_.z)*I,D=_.y+(S.y-_.y)*I-T[w]*4*I*(1-I);r.color.box(R-.07,D+.015,L-.07,R+.07,D+.19,L+.07,F1),r.color.box(R-.045,D+.19,L-.045,R+.045,D+.27,L+.045,F1)}}}if(y.z==="city"){r.color.setM(new Je);let v=1+Math.floor(f()*3);for(let b=0;b<v;b++){let T=d[7+b%2],w=(f()-.5)*14,_=h(y.s+w),S=f()<.55,E=S?-(_+3.15):_+3.15,A=a(y.s+w,E,u(y.s+w)+5.2+f()*2.5);r.color.wire([T.x,T.y,T.z],A,.25+f()*.4,.012,Bl,8)}}}}*intersection(e,t,n,s,r,o,l,a,u,h,p){let m=this.path.at(n,{}),x=o(n),y=l(n),M=a(n)||3,c=n-.5,f=Lt(n),d=[f.city,f.sakura,f.coast,f.country],g=(w,_,S)=>[m.x+m.fx*(w-.5)+m.rx*_-h,S,m.z+m.fz*(w-.5)+m.rz*_-p],v=y+M+.15,b=Ah(s),T=b?3:hd;for(let w of[-1,1]){let _=w*(y+M),S=w*80;if(u.grid(21,2,(I,R)=>{let L=_+(S-_)*I/20,D=(R?-T:T)*w,O=g(D,L,x+.165);return[O[0],O[1],O[2],0,1,0,D*w,L,d[0],d[1],d[2],d[3],y,10]}),b){let I=w*(y+M+3.2),R=-w*1.35,L=1.15,D=.42,O=(H,B)=>g(R+w*H,I-w*B,x+.18);e.decal.setM(new Je),e.decal.quad(O(-L,-D),O(L,-D),O(L,D),O(-L,D),[1,1,1],Zo("tomare"))}for(let I of[-1,1]){let R=v+15+t()*3;for(;R<52;){let L=t.range(5.5,8.5),D=w*(R+L/2),O=t(),H=r(c+I*(T+.3),D,x+.14,I>0?Math.PI/2:-Math.PI/2,!1);Xi(e,H,t,{type:O<.5?"house":"shop",w:L,d:t.range(7,10),floors:O<.5?2:t.int(2,3),tint:t.pick(zs),litP:.45,fence:0}),R+=L+t.range(.2,1.2),yield}yield}let E=[30,54].map(I=>r(c+T-.2,w*I,x+.15,-Math.PI/2,!1)),A=Ct(Math.floor(yn(s,w>0?71:73)*4294967295)),C=E.map(I=>H0(e,I,A,{trans:A()<.4}));e.color.setM(new Je);for(let I=0;I<7;I++){let R=C[0][I],L=C[1][I];e.color.wire([R.x,R.y,R.z],[L.x,L.y,L.z],.3+A()*.4,.014,Bl,10)}}b&&($0(e,r(n-9,-(y+.55),x+.15,0,!0),1,y+.55-1.6),$0(e,r(n+8,y+.55,x+.15,0,!0),1,y+.55-1.6),s%8===0&&Gg(e,r(n+15,0,x,0,!1),y+M+.1,"hodokyo"+Math.abs(s/8)%3))}*placeCrossing(e,t,n,s,r,o,l,a,u,h){let p=this.path.at(n,{}),m=p.y,x=o(n),y=a(n),M=x+y+.2,c=150,f=m+.18,d=Lt(n),g=[d.city,d.sakura,d.coast,d.country],v=(L,D,O)=>[p.x+p.fx*L+p.rx*D-u,O,p.z+p.fz*L+p.rz*D-h],b=[7.6,4.7,-4.7,-7.6];for(let[L,D]of[[-c,-M],[M,c]])t.grid(25,b.length,(H,B)=>{let V=L+(D-L)*H/24,k=b[B],ee=Math.abs(k)<5?f:Math.min(f-.05,l(n+k,V)-.03),we=v(k,V,ee);return[we[0],we[1],we[2],0,1,0,k,V,g[0],g[1],g[2],g[3],x,5]});let T=(L,D,O)=>t.grid(2,2,(H,B)=>{let V=H?D:L,k=B?-3.3:3.3,q=v(k,V,O);return[q[0],q[1],q[2],0,1,0,k,V,g[0],g[1],g[2],g[3],x,6]});T(-x,x,m+.03),y>0&&(T(-M,-x,m+.165),T(x,M,m+.165));let w=(L,D,O,H)=>t.grid(2,2,(B,V)=>{let k=B?H:O,q=V?D:L,ee=v(q,k,m+.025);return[ee[0],ee[1],ee[2],0,1,0,q,k,g[0],g[1],g[2],g[3],x,7]});w(-7.15,-7.6,-x+.3,-.12),w(7.6,7.15,.12,x-.3),yield;let _=s(n,0,m,-Math.PI/2,!1),S=e.color;S.setM(_);let E=[.42,.4,.38],A=[.3,.29,.28],C=[.55,.57,.6];for(let L of[-2,2])for(let D of[-.5335,.5335]){let O=-(L+D);for(let[H,B]of[[-c,-M],[M,c]])S.box(H,.26,O-.035,B,.34,O+.035,E);S.box(-M,0,O-.035,M,.04,O+.035,A)}let I=[-146,-104,-64,-26,26,64,104,146];for(let L of I){for(let D of[-4.95,4.95])S.box(L-.12,.18,D-.12,L+.12,7.4,D+.12,C);S.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,C);for(let D of[-2,2])S.box(L-.04,6.3,-D-.04,L+.04,6.95,-D+.04,C)}for(let L of[-2,2])for(let D=0;D<I.length-1;D++)S.wire([I[D],5.35,-L],[I[D+1],5.35,-L],.05,.011,Bl,6),S.wire([I[D],6.4,-L],[I[D+1],6.4,-L],.45,.011,Bl,8);yield;let R=Math.round((n-Or)/Br);if(d.country>.9&&yn(R,17)<.7){let L=yn(R,19)<.5?-1:1,D=L>0?x+9:-(x+9+46),O=L>0?x+9+46:-(x+9);Xg(e,_,D,O,L*(x+9),Math.abs(R)%4,Ct(Math.floor(yn(R,23)*4294967295))),S.setM(_)}yield;for(let L of fh(this.path,n)){let D=new Je().makeRotationY(L.yaw);D.setPosition(L.x-u,L.y,L.z-h),Zg(e,D)}pr(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85),pr(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n,{}),y=x.y,M=o(n),c=a(n),f=Lt(n),d=[f.city,f.sakura,f.coast,f.country],g=f.sakura>.5,v=222,b=M+c+.5,T=y-bl,w=(R,L,D)=>[x.x+x.fx*R+x.rx*L-u,D,x.z+x.fz*R+x.rz*L-h];{let R=[],L=[],D=[];for(let B=0;B<=74;B++){let V=-v+2*v*B/74;for(let k of[14.3,-14.3]){let q=w(k,V,T);R.push(q[0],q[1],q[2]),L.push(k,V)}if(B>0){let k=(B-1)*2;D.push(k,k+1,k+2,k+1,k+3,k+2)}}let H=new vt;H.setAttribute("position",new Ke(R,3)),H.setAttribute("su",new Ke(L,2)),H.setIndex(D),H.computeBoundingSphere(),m.push(H)}for(let[R,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,O]of[[-v,-(M+3.4)],[M+3.4,v]])t.grid(41,2,(H,B)=>{let V=D+(O-D)*H/40,k=B?L:R,q=w(k,V,y+.38);return[q[0],q[1],q[2],0,1,0,k,V,d[0],d[1],d[2],d[3],M,9,1]});yield;let _=s(n,0,y,0,!1),S=e.color,E=[.74,.73,.7],A=g?[.78,.2,.15]:[.55,.72,.64];S.setM(_),S.box(-24.5,-1,-b,24.5,-.03,b,E,null,{noBottom:!1});for(let R of[-1,1])S.box(-24.5,-1.3,R>0?b-.35:-b,24.5,-.95,R>0?b:-b+.35,[.62,.61,.58]);for(let R of[-8,8])S.box(R-.7,-bl-1.4,-b+.6,R+.7,-1,b-.6,E);for(let R of[-25.7,25.7])S.box(R-1.2,-bl+.4,-b-.4,R+1.2,-.05,b+.4,E);for(let R of[-24.5,24.5])S.box(R-.16,.004,-M,R+.16,.016,M,[.33,.32,.31]),S.box(R-.02,.016,-M,R+.02,.02,M,[.2,.19,.19]);let C=c>0?.15:0;for(let R of[-1,1]){let L=R*(b-.14);for(let D=-24;D<=24.01;D+=2)S.box(D-.06,C,L-.06,D+.06,C+1,L+.06,A);S.box(-24,C+.95,L-.08,24,C+1.08,L+.08,A),S.box(-24,C+.48,L-.03,24,C+.54,L+.03,A),S.box(-24,C+.06,L-.03,24,C+.12,L+.03,A)}let I="bridge"+Math.abs(Math.round(n/kr))%4;for(let R of[-25,25])for(let L of[-1,1]){let D=L*(b-.1),O=[.7,.69,.65];S.box(R-.32,C,D-.32,R+.32,C+1.45,D+.32,O),S.box(R-.38,C+1.45,D-.38,R+.38,C+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(_);let H=(R<0?-1:1)*.325,B=I;R<0?e.atlas.quad([R-.325,C+.3,D-.22],[R-.325,C+.3,D+.22],[R-.325,C+1.3,D+.22],[R-.325,C+1.3,D-.22],[1,1,1],Zo(B)):e.atlas.quad([R+.325,C+.3,D+.22],[R+.325,C+.3,D-.22],[R+.325,C+1.3,D-.22],[R+.325,C+1.3,D+.22],[1,1,1],Zo(B)),S.setM(_)}Rl(e,s(n-14,-(b-.45),y+C,0,!0)),Rl(e,s(n+14,b-.45,y+C,0,!0)),yield;{e.atlas.setM(new Je);let R=Zo("gogan"),L=2.4,D=150;for(let O of[-1,1])for(let H=-D;H<D-.01;H+=L){let B=H+L,V=w(O*13.9,H,T-.12),k=w(O*13.9,B,T-.12),q=w(O*16.05,B,T+.72),ee=w(O*16.05,H,T+.72),we=(k[1]-V[1])*(ee[2]-V[2])-(k[2]-V[2])*(ee[1]-V[1]),Ae=(k[0]-V[0])*(ee[1]-V[1])-(k[1]-V[1])*(ee[0]-V[0]),Me=w(0,(H+B)/2,T),G=we*(Me[0]-V[0])+Ae*(Me[2]-V[2])>0,J={u0:R.u0,u1:R.u1,v0:R.v0,v1:R.v1};G?e.atlas.quad(V,k,q,ee,[1,1,1],J):e.atlas.quad(k,V,ee,q,[1,1,1],{u0:R.u1,u1:R.u0,v0:R.v0,v1:R.v1})}for(let O of[-1,1])for(let H of[-1,1])for(let B=14+p()*3;B<125;B+=p.range(2.4,5)){if(p()<.35)continue;let V=O*(16.2+p()*1.1),k=H*B,q=1+(p()<.4?1:0);for(let ee=0;ee<q;ee++){let we=w(V+O*p()*.6,k+(p()-.5)*.9,T+.7),Ae=new Je().makeRotationY(p()*6.28);Ae.setPosition(we[0],we[1],we[2]),Y0(e,Ae,p,"grass",p.range(1.9,2.8))}}}yield;for(let R of[-18,18])for(let L of[-1,1]){yield;for(let D=11+p()*4;D<(g?125:170);D+=g?p.range(8.5,11):p.range(18,34)){let O=n+R+(p()-.5)*1.5,H=L*D;Vn(e,s(O,H,l(O,H),p()*6,!1),g?"sakura":"broad",p,g?p.range(1,1.25):p.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n.s,{}),y=x.y,M=u(n.s),c=M+1.4,f=Lt(n.s),d=[f.city,f.sakura,f.coast,f.country],g=o(n.s,0,y,0,!1),v=e.color,b=Math.max(s,n.s-_n)-n.s,T=Math.min(r,n.s+_n)-n.s;if(T>b+.01){let B=Math.max(2,Math.ceil((T-b)/3)+1),V=[-(M+1.5),-M,-M*.5,0,M*.5,M,M+1.5];t.gridN(B,V.length,(J,xe)=>{let Pe=b+(T-b)*J/(B-1),re=n.s+Pe,ye=V[xe],Oe=y+lh(Pe,ye);return[x.x+x.fx*Pe+x.rx*ye-h,Oe,x.z+x.fz*Pe+x.rz*ye-p,0,1,0,ws(re,ei),ye,d[0],d[1],d[2],d[3],M,0,-1]});let k=[[-M,0],[-M,.2],[-c,.2],[-c,3.2]];for(let J=1;J<12;J++){let xe=Math.PI*(1-J/12);k.push([c*Math.cos(xe),3.2+3*Math.sin(xe)])}k.push([c,3.2],[c,.2],[M,.2],[M,0]);let q=[.86,.82,.72],ee=[.44,.45,.47],we=[.62,.61,.58],Ae=[];for(let J=b;J<T-.01;J+=6)Ae.push(J);Ae.push(T),v.setM(g);for(let J=0;J<Ae.length-1;J++)for(let xe=0;xe<k.length-1;xe++){let[Pe,re]=k[xe],[ye,Oe]=k[xe+1],ke=Math.max(re,Oe)<=.21?we:Math.abs(Pe)>c-.01&&Math.abs(ye)>c-.01?q:ee;v.quad([Ae[J],re,Pe],[Ae[J+1],re,Pe],[Ae[J+1],Oe,ye],[Ae[J],Oe,ye],ke)}e.sodium.setM(g),e.sig.setM(g);let Me=c*Math.cos(Math.PI/6)-.12,G=3.2+3*Math.sin(Math.PI/6)-.08;for(let J=Math.ceil((b+_n-3)/6)*6+3-_n;J<T;J+=6)for(let xe of[-1,1])e.sodium.box(J-.45,G-.07,xe*Me-.13,J+.45,G+.07,xe*Me+.13,null),dr(e,g,J,G-.1,xe*Me,1);for(let J=Math.ceil((b+_n)/24)*24-_n;J<T;J+=24)e.sig.box(J-.3,.95,-c+.01,J+.3,1.2,-c+.06,null);for(let J=Math.ceil((b+_n-30)/60)*60+30-_n;J<T;J+=60)for(let xe of[-1.15,1.15])v.box(J-1.1,5.2,xe-.36,J+1.1,5.78,xe+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),v.box(J-.08,5.78,xe-.05,J+.08,6.15,xe+.05,[.4,.4,.42]);yield}let w=(B,V)=>{let k=Math.sin(B*12.9898+V*78.233+n.k*37.719)*43758.5453;return k-Math.floor(k)},_=(B,V,k)=>[B[0]+(V[0]-B[0])*k,B[1]+(V[1]-B[1])*k,B[2]+(V[2]-B[2])*k],S=[.5,.5,.47],E=[.55,.53,.47],A=[.6,.6,.57],C=[.58,.58,.55],I=[.42,.42,.4],R=(B,V)=>{let k=w(B,V);return L?_([.26,.29,.08],[.42,.3,.09],k):_([.22,.29,.08],[.36,.36,.12],k)},L=f.mountain>.5,D=c+2.6,O=2.6;for(let B of[-1,1]){let V=n.s+B*_n,k=B*(_n+.08);if(V<s||V>=r)continue;let q=[];for(let K of D1)K>=1.44&&q.push(M+K,-(M+K));for(let K of N1)K>M+3.5&&K<M+21&&q.push(K,-K);for(let K=0;K<=24;K++)q.push(-c+2*c*K/24);q.push(-c-.01,c+.01,-D,D),q.sort((K,N)=>K-N);let ee=K=>3.2+3*Math.sqrt(Math.max(0,1-(K/c)**2)),we=K=>Math.max(a(V-B*.03,K)-y,lh(B*(_n-.03),K)),Ae=K=>Math.abs(K)<=c+1e-6?ee(K):a(V+B*.03,K)-y,Me=8.4;for(let K of q)Math.abs(K)<=D&&(Me=Math.min(Me,we(K)-.4));let G=Me>6.6;v.setM(g);let J=B,xe=(K,N,P,W,Y,Q,ue,ve)=>{let he=[k,P,K],me=[k,W,N],Ne=[k,Q,N],Ze=[k,Y,K],Fe=B<0?[he,me,Ne,Ze]:[me,he,Ze,Ne],Be=B<0?[ue,ue,ve,ve]:[ue,ue,ve,ve];for(let ze of[0,1,2,0,2,3])v.vtx(Fe[ze][0],Fe[ze][1],Fe[ze][2],J,0,0,0,0,Be[ze])},Pe=(K,N,P)=>K+(N-K)*P;for(let K=0;K<q.length-1;K++){let N=q[K],P=q[K+1];if(P-N<1e-4)continue;let W=we(N),Y=we(P),Q=Ae(N),ue=Ae(P);if(W-Q<.01&&Y-ue<.01)continue;let ve=(N+P)/2,he=G&&Math.abs(ve)<D,me=Q,Ne=ue;if(he){let ze=_(S,[.46,.46,.44],w(Math.floor(ve/2.4),3.1)),tt=.8+2.6*w(Math.floor(ve/.8),7.7),at=_(ze,[.27,.27,.26],.35+.3*w(Math.floor(ve/.8),9.9)),Z=Math.min(Me,W),Le=Math.min(Me,Y),ge=Math.max(Q,Z-tt),De=Math.max(ue,Le-tt);if(Math.abs(ve)>c){let Ve=Math.min(ge,Q+.9),Re=Math.min(De,ue+.9);xe(N,P,Q,ue,Ve,Re,_(ze,[.25,.29,.18],.45),ze),xe(N,P,Ve,Re,ge,De,ze,ze)}else xe(N,P,Q,ue,ge,De,ze,ze);if(xe(N,P,ge,De,Z,Le,ze,at),me=Z,Ne=Le,W-Z<.01&&Y-Le<.01)continue}let Ze=Math.floor(ve/O),Fe=me,Be=Ne;for(let ze=Math.floor(Math.min(Fe,Be)/O)+1;Fe<W-.01||Be<Y-.01;ze++){let tt=ze*O,at=Math.min(W,Math.max(Fe,tt)),Z=Math.min(Y,Math.max(Be,tt)),Le=R(Ze,ze);if(xe(N,P,Fe,Be,at,Z,_(Le,[.2,.22,.1],.25),Le),Fe=at,Be=Z,ze>60)break}}let re=Math.min(k,k+B*.12),ye=Math.max(k,k+B*.12),Oe=K=>{for(let N=0;N<q.length-1;N++)if(K>=q[N]&&K<=q[N+1]&&q[N+1]>q[N]){let P=(K-q[N])/(q[N+1]-q[N]);return[Pe(Ae(q[N]),Ae(q[N+1]),P),Pe(we(q[N]),we(q[N+1]),P)]}return null},ke=q[0],Te=q[q.length-1];for(let K=Math.ceil(ke/O)*O;K<Te;K+=O){let N=Oe(K);if(!N)continue;let P=(G&&Math.abs(K)<D?Math.max(Me+.3,N[0]):N[0])+.05,W=N[1]-.05;W-P>.4&&!(Math.abs(K)<=c+.3&&!G)&&v.box(re,P,K-.14,ye,W,K+.14,E)}for(let K=1;K<60;K++){let N=K*O,P=null,W=()=>{P&&P[1]-P[0]>.3&&v.box(re,N-.14,P[0],ye,N+.14,P[1],E),P=null},Y=!1;for(let Q=0;Q<q.length-1;Q++){let ue=q[Q],ve=q[Q+1];if(ve-ue<1e-4)continue;let he=(ue+ve)/2,me=Math.max(Ae(ue),Ae(ve),G&&Math.abs(he)<D?Me+.3:-1e9),Ne=Math.min(we(ue),we(ve));N>me+.2&&N<Ne-.2?(Y=!0,P?P[1]=ve:P=[ue,ve]):W()}if(W(),!Y&&N>30)break}G&&v.box(Math.min(k,k+B*.32),Me-.05,-D,Math.max(k,k+B*.32),Me+.3,D,A);let He=k+B*.32,te=K=>-c+2*c*K/24,de=K=>[te(K),ee(te(K))],j=K=>[te(K)*1.12,ee(te(K))+.6];for(let K=0;K<24;K++){let[N,P]=de(K),[W,Y]=de(K+1),[Q,ue]=j(K),[ve,he]=j(K+1);B<0?v.quad([He,P,N],[He,Y,W],[He,he,ve],[He,ue,Q],C):v.quad([He,Y,W],[He,P,N],[He,ue,Q],[He,he,ve],C),B<0?v.quad([k,P,N],[k,Y,W],[He,Y,W],[He,P,N],I):v.quad([k,Y,W],[k,P,N],[He,P,N],[He,Y,W],I),B<0?v.quad([k,he,ve],[k,ue,Q],[He,ue,Q],[He,he,ve],C):v.quad([k,ue,Q],[k,he,ve],[He,he,ve],[He,ue,Q],C)}for(let K of[-1,1])v.box(Math.min(k,He),.2,K>0?c:-c*1.12,Math.max(k,He),3.2,K>0?c*1.12:-c,C);e.atlas.setM(g);let ce=1.9,ie=7.05,ne=7.85,F=k+B*.03,be=Zo("tunnel"+(f.coast>.5?1:Math.abs(n.k)%2?2:0));B<0?e.atlas.quad([F,ie,-ce],[F,ie,ce],[F,ne,ce],[F,ne,-ce],[1,1,1],be):e.atlas.quad([F,ie,ce],[F,ie,-ce],[F,ne,-ce],[F,ne,ce],[1,1,1],be)}yield;let H=f.mountain>.5;for(let B=Math.max(s,n.s-on*.95)+m()*3;B<Math.min(r,n.s+on*.95);B+=m.range(4,8)){let V=Math.abs(B-n.s)>_n-4?17:4;for(let k of[-1,1]){let q=k*(M+m.range(V,50)),ee=m();Vn(e,l(B,q,-.3,m()*6,!1),H?ee<.5?"maple":ee<.8?"cedar":"ginkgo":ee<.65?"pine":"broad",m,m.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,l,a,u){let h=p=>Lt(p).snow;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*20;m<s;m+=t.range(22,40)){if(h(m)<.6||t()<.5)continue;let x=p*t.range(18,90);Xi(e,o(m,x,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(zs),litP:.62,fence:0,snow:!0});for(let y=0;y<2+t()*3;y++)Vn(e,o(m+t.range(-9,9),x+p*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let m=n+t()*5;m<s;m+=t.range(3,7))h(m)<.5||(t()<.32&&Vn(e,o(m,p*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Vn(e,o(m,p*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let p=Math.ceil(n/36)*36;p<s;p+=36){if(h(p)<.55)continue;let m=a(p);{let x=r(p,-(m+.95),l(p)+1.3),y=r(p+18,m+.95,l(p+18)+1.3);x.groundY=l(p),y.groundY=l(p+18),X0(e,x,1),X0(e,y,-1)}}}}*placeMountain(e,t,n,s,r,o,l,a,u){let h=p=>Lt(p).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(4.5,8.5)){if(h(m)<.45||Di(m,on+6))continue;let x=a(m),y=t();if(p>0){let M=y<.5?"maple":y<.72?"ginkgo":"cedar";Vn(e,o(m,x+t.range(17,70),-.25,t()*6,!1),M,t,t.range(.9,1.3))}else{let M=y<.55?"maple":y<.8?"cedar":"ginkgo";Vn(e,o(m,-(x+t.range(3.5,34)),-.25,t()*6,!1),M,t,t.range(.95,1.35))}}yield}for(let p=n+t()*4;p<s;p+=t.range(3,6)){if(h(p)<.5)continue;let m=t()<.7,x=-(a(p)+(m?t.range(108,205):t.range(36,100)));Vn(e,o(p,x,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new Je);for(let p=Math.ceil(n/10)*10;p<s;p+=10){if(h(p)<.5||Di(p,on+4))continue;let m=a(p),x=r(p,-(m+.95),l(p));Lg(e,x)}for(let p=Math.ceil(n/14)*14;p<s;p+=14){if(h(p)<.6)continue;let m=this.path.curv(p);if(Math.abs(m)<1/230)continue;let x=a(p);m>0?pr(e,r(p,x+.42,l(p)),"chev_l",-1,1.25,.58):pr(e,r(p,-(x+1.15),l(p)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,l){let a=this.path,u={},h=Ct(Math.floor(yn(t,1789)*4294967295)),p=Ug(),m=Math.floor((n+Wt/2)/600)*600+300,x=Math.floor((n+Wt/2)/700)*700+120,y=Math.floor((n+Wt/2)/380)*380+190,M=yn(Math.round(y),5)<.5?-1:1;for(let g of[-1,1]){e.leaf.setM(U1);for(let v=n+h()*p;v<s;v+=p*h.range(.75,1.25)){if(pn(v)!=="country"||Gs(v,10)||ci(v,31)||g<0&&(Math.abs(v-m)<2.9||v>x-1.3&&v<x+2.7)||g===M&&Math.abs(v-y)<1.6)continue;a.at(v,u);let b=l(v),T=g*(b+.95+(h()-.5)*.36),w=u.y+Ms(v,T,u.y,b),_=(h()-.5)*.8,S=Math.cos(_)*g,E=Math.sin(_)*g;Z0(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,h,h.range(.85,1.15))}yield}let c=Ct(Math.floor(yn(t,1811)*4294967295)),f=p>1?p*1.35:p;e.leaf.setM(U1);for(let g=n+c()*f;g<s;g+=f*c.range(.75,1.25)){if(Lt(g).coast<.6||Di(g,on+6))continue;let v=g-6-Math.round((g-6)/Ws)*Ws;if(Math.abs(v)<.9||Math.abs(g-(n+12))<.8)continue;a.at(g,u);let b=l(g),T=b+.95+(c()-.5)*.3,w=u.y+Ms(g,T,u.y,b),_=(c()-.5)*.8,S=Math.cos(_),E=Math.sin(_);Z0(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,c,c.range(.62,.85),"bankC")}for(let g=n+c()*14;g<s;g+=c.range(14,30)){if(Lt(g).coast<.6||Di(g,on+6))continue;let v=g-6-Math.round((g-6)/Ws)*Ws;if(Math.abs(v)<1.4||Math.abs(g-(n+12))<1.2)continue;a.at(g,u);let b=l(g),T=b+c.range(1.3,2.3),w=u.y+Ms(g,T,u.y,b),_=new Je().makeRotationY(c()*6.28);_.setPosition(u.x+u.rx*T-r,w,u.z+u.rz*T-o),yh(e,_,c,c.range(1.1,1.4))}let d=Ct(Math.floor(yn(t,2417)*4294967295));for(let g of[-1,1])for(let v=n+d()*8;v<s;v+=d.range(8,14)){if(Lt(v).sakura<.6||ci(v,31))continue;let b=1+Math.floor(d()*3),T=g*(l(v)+2.95+d()*.4);a.at(v,u);let w=u.y+Ms(v,T,u.y,l(v));for(let _=0;_<b;_++){let S=_*.75+d()*.25,E=T+g*(d()-.5)*.3,A=new Je().makeRotationY(d()*6.28);A.setPosition(u.x+u.fx*S+u.rx*E-r,w,u.z+u.fz*S+u.rz*E-o),d()<.5?yh(e,A,d,d.range(1.05,1.35)):Cl(e,A,d,d.range(.45,.6))}}}*placeVerge(e,t,n,s,r,o,l,a,u,h){yield*this.placeBanks(e,a,n,s,u,h,l);for(let p of[-1,1]){for(let m=n+t()*1.2;m<s;m+=t.range(.55,1.5)){if(Gs(m,10)||ci(m,31)||Di(m,on+4))continue;let x=pn(m),y=l(m),M,c,f=.22,d=1;if(x==="country")M=y+t.range(2.05,2.8),c=.25,f=.35;else if(x==="sakura")M=y+2.68+t()*1.3,c=.55,f=.3;else if(x==="coast"){if(p<0)continue;M=y+.95+t()*1.7,c=.75,f=.18}else{if(x==="snow")continue;if(x==="mountain")M=p<0?y+1+t()*.35:y+.25+t()*.2,c=p<0?.55:.18,f=.12,d=.85;else{if(cd(m,5))continue;M=y+3.02+t()*.1,c=.1,f=.08,d=.65}}if(t()>c)continue;let g=p*M;Y0(e,r(m,g,o(m,g),t()*6.28,!1),t,t()<f?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new Je);let l=Math.max(1,Math.round((n-t)/2)),a=Ee.rail,u=[.62,.64,.66],h=[.74,.76,.79],p=[.95,.55,.16];for(let m=0;m<l;m++){let x=t+(n-t)*m/l,y=t+(n-t)*(m+1)/l,M=-(o(x)+.95),c=-(o(y)+.95),f=r(x),d=r(y);for(let v=0;v<od.length-1;v++){let[b,T]=od[v],[w,_]=od[v+1];e.color.quad(s(x,M+T,f+b),s(y,c+T,d+b),s(y,c+_,d+w),s(x,M+_,f+w),a)}e.color.quad(s(y,c+.05,d+.5),s(x,M+.05,f+.5),s(x,M+.05,f+.84),s(y,c+.05,d+.84),u),e.color.noShadow=!0;let g=s(x,M-.04,f);if(e.color.cyl(g[0],f,g[2],.055,.055,.8,6,h,!1),Math.round(x/2)%2===0){let v=s(x,M+.035,f+.64),b=s(x+.09,M+.035,f+.64);e.color.quad(b,v,[v[0],v[1]+.07,v[2]],[b[0],b[1]+.07,b[2]],p)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,l,a,u,h,p,m,x){for(let c of[-1,1]){let f=n+t()*2;for(;f<s-2;){{let L=Lt(f);if(L.city<.62||L.mountain>.1){f+=4;continue}}{let L=hr(f+6);if(L&&f<L.s+8.5&&f+14>L.s-8.5){f=Math.max(f+1,L.s+8.5);continue}}let d=2*Math.round(f/300),g=d*150;if(f>g-B1(d)&&f<g+ld(d)){f=g+ld(d)+.05;continue}let v=a(f),b=u(f)||3,T=v+b+.15,w=t(),_=f<420||w<.84?"machiya":w<.89?"shop":w<.93?"apt":w<.96?"konbini":"house",S=_==="shop"?t.range(5,9):_==="machiya"?t.range(6,9.5):_==="apt"?t.range(10,16):_==="house"?t.range(7,9.5):t.range(12,14);if(f+S>s){if(s-f<5||_==="konbini")break;S=s-f-.2}{let L=f<g?d:d+2,D=L*150-B1(L);if(f+S>D-.1){if(D-.1-f<4){f=L*150+ld(L)+.05;continue}S=D-.1-f}}let E=f+S/2,A=l(E),C=t.pick(zs),I=.42,R=_==="machiya"&&t()<.6;{let L=r(E,c*T,A+.15),D={type:_,w:S,at:E,side:c,d:_==="apt"?t.range(10,14):t.range(8,12),floors:_==="shop"?t.int(2,4):_==="machiya"?t()<.7?2:3:_==="apt"?t.int(4,9):2,tint:R?k0[Math.floor(t()*k0.length)]:C,litP:I,plaster:R,fence:_==="house"&&t()<.5?1.2:0};if(Xi(e,L,t,D),_!=="house"&&t()<.28&&W0(e,r(E+(t()-.5)*(S-1.2),c*(T-.42),A+.15),t),(_==="shop"||_==="konbini"||_==="machiya")&&t()<.3)for(let O=0;O<1+t()*3;O++)Cg(e,r(E-S/2+.8+O*.55,c*(T-.75),A+.15,Math.PI/2+.1),t);if(_==="house"&&t()<.6)for(let O=0;O<2+t()*3;O++)G0(e,r(E+1+O*.5,c*(T-.3),A+.15),t);if(t()<.03)for(let O=0;O<3;O++)Pg(e,r(E+O*.9,c*(v+.35),A))}f+=S+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Lt(d).city<.7||Lt(d).mountain>.1||t()<.3||Gs(d,18)||cd(d,15))continue;let g=a(d),v=r(d,c*(g+3.2+t.range(14,20)),l(d)+.1);Xi(e,v,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(zs),litP:.4})}if(Lt(n+30).city>.7&&Lt(n+30).mountain<.1&&t()<.65){let d=n+t()*Wt;if(Gs(d,24)||cd(d,20))continue;let g=r(d,c*t.range(55,150),l(d));Xi(e,g,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(zs),litP:.45})}}let y=Math.ceil(n/150),M=Math.floor((s-.01)/150);for(let c=y;c<=M;c++){let f=c*150;if(!e3(c)||pn(f)!=="city"||Lt(f).mountain>.1)continue;let d=a(f);yield*this.intersection(e,t,f,c,r,l,a,u,p,m,x),Ah(c)&&(pr(e,r(f-1,-(d+.4),l(f)+.15),"sign_blue",1),pr(e,r(f-6,-(d+.4),l(f)+.15),"sign_stop",1,2.1,.75),q0(e,r(f+7,d+.4,l(f)+.15),-1),c%8===4&&pr(e,r(f+20,-(d+.4),l(f)+.15),"sign_speed",1))}}houseGarden(e,t,n,s,r,o,l,a,u,h){let p=o.ww/2;if(a)for(let m=-p-.6;m<p+.6;m+=t.range(1.2,1.9)){if(Math.abs(m)<.9&&a===1&&t()<.7)continue;let x=l(n+m,s-r*t.range(1.1,1.7),0,t()*6,!1);a===2&&t()<.6?Cl(e,x,t,t.range(.75,1)):Ig(e,x,t,t.range(.5,.75))}for(let m=0;m<u;m++){let x=(m%2?-1:1)*(t()<.5?1:-1);Vn(e,l(n+x*(p+t.range(3.2,5.5)),s+r*t.range(1,o.wd),0,t()*6),"broad",t,t.range(.9,1.25))}for(let m=0;m<h;m++)Vn(e,l(n+t.range(-p-2,p+2),s+r*(o.wd+t.range(3.5,7)),0,t()*6),"broad",t,t.range(.95,1.3))}*placeSakura(e,t,n,s,r,o,l,a,u){let h=Ct(Math.floor(yn(Math.round(n/Wt),2423)*4294967295));for(let x of[-1,1]){for(let y=n+t()*4;y<s;y+=t.range(7.5,10)){if(Lt(y).sakura<.45||ci(y,30))continue;let M=a(y);if(Vn(e,o(y,x*(M+3.7),0,Hi.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),Lt(y).sakura>.6&&h()<.65)for(let c=0,f=2+(h()<.4?1:0),d=h()*6.28;c<f;c++){let g=d+c/f*6.28+(h()-.5)*1.2,v=h.range(.75,1.15),b=Math.max(M+2.9,M+3.7+Math.sin(g)*v*.8),T=o(y+Math.cos(g)*v,x*b,0,h()*6.28,!1);h()<.6?yh(e,T,h,h.range(1.2,1.55)):Cl(e,T,h,h.range(.5,.65))}t()<.45&&Vn(e,o(y+3,x*(M+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let y=n+(x>0?0:12);y<s;y+=24){if(pn(y)!=="sakura"||ci(y,30))continue;let M=a(y);Rl(e,r(y,x*(M+2.25),l(y)+.15)),ws(y,48)<24&&Kg(e,r(y+6,x*(M+3),u(y+6,x*(M+3))))}for(let y=n+t()*15;y<s;y+=t.range(14,24)){if(pn(y)!=="sakura"||t()<.35||ci(y,45))continue;let M=a(y),c=_h("sakura",t);if(!c){Xi(e,o(y,x*(M+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(zs),litP:.45,fence:t()<.6?1.4:0});continue}let f=x*(M+t.range(19,26)),d=t()<.45?1.4:0;Xi(e,o(y,f),t,{type:"house",w:c.ww,d:c.wd,ptype:c,fence:d}),this.houseGarden(e,t,y,f,x,c,o,d?0:1,0,0)}}let m=Math.floor((n+Wt/2)/480)*480+240;m>=n&&m<s&&pn(m)==="sakura"&&!ci(m,60)&&J0(e,r(m,0,l(m),0,!1),a(m)+1.6,6.4)}coastWall(e){return Lt(e).coast>=.7&&!Di(e,on+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=Ct(Math.floor(yn(e,5501)*4294967295)),s=e*Wt,r=s+Wt;for(let o=s+1+n()*12;o<r-3;o+=n.range(12,26)){let l=n.range(1.25,1.5),a=n.range(4.5,11),u=n()<.4?3:2,h=Math.min(o+a,r-.5);!this.coastWall(o)||!this.coastWall(h)||t.push({sa:o,sb:h,L:l,rows:u,dOut:(.8+(u-1)*1.45+.95)*l})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,s,r,o,l,a,u,h){let p=this.path,m={},x=this.coastHeaps(n),y=Ct(Math.floor(yn(n,5507)*4294967295)),M=ws(s,ei)-s;for(let w of x){let _=w.L;for(let E=0;E<w.rows;E++){let A=.8*_+E*1.45*_,C=(E===0?.28:E===1?0:-.3)*_;for(let I=w.sa+y()*.7*_;I<w.sb;I+=1.5*_*y.range(.88,1.12)){let R=a(I),L=h(I,-(R+yl+A+(y()-.5)*.45*_),0);if(j0(e,L[0],cs+C+(y()-.5)*.3*_,L[2],y,_*y.range(.92,1.08),cs-.7,E===0?.8:.45,I+M),E===0&&w.rows>1&&y()<.4){let D=h(I+.7*_,-(R+yl+A+.72*_),0);j0(e,D[0],cs+1.05*_,D[2],y,_*y.range(.9,1),cs-.7,.6,I+M)}}}let S=Math.max(3,Math.round(Qo.n*(w.sb-w.sa+2)/7));for(let E=0;E<S;E++){let A=w.sa+(w.sb-w.sa)*(E+.5)/S+(y()-.5)*1.4,C=a(A);p.at(A,m);let I=h(A,-(C+yl+w.dOut*(.8+.3*y())-.2),cs+.35);u.puffs.push(I[0],I[1],I[2],-m.rx,-m.rz,w.dOut,y(),A+M)}yield}let c=[...this.coastHeaps(n-1),...x,...this.coastHeaps(n+1)],f=ws(s,ei),d=[];for(let w=0;w<=10;w++)d.push(s+w*6);for(let w of c)for(let _ of[w.sa-3.2,w.sa-.4,w.sb+.4,w.sb+3.2])_>s+.5&&_<r-.5&&d.push(_);d.sort((w,_)=>w-_);for(let w=0;w<d.length;w++){let _=d[w];if(w>0&&_-d[w-1]<.6)continue;if(!this.coastWall(_)){if(u.rows.length)break;continue}let S=1;for(let C=1;C<=3;C++)if(!this.coastWall(_-2*C)||!this.coastWall(_+2*C)){S=(C-1)/3;break}let E=a(_),A=new Float32Array(ad.length*7);ad.forEach((C,I)=>{let R=h(_,-(E+yl+C),cs+.03),L=0;for(let D of c)L=Math.max(L,(1-Tt(.4,3.2,Math.max(D.sa-_,_-D.sb,0)))*(1-Tt(.2,3.4,C-D.dOut)));A.set([R[0],R[1],R[2],f+(_-s),C,L,S],I*7)}),u.rows.push(A)}u.rows.length&&(yield);let g=Ct(Math.floor(yn(n,5531)*4294967295)),v=null;if(pn(s+30)==="coast"&&g()<.5){let w=s+g()*Wt,_=a(w);Di(w,on+25)||(v={s:w,rw:_,T:_h("coast",g),u:_+g.range(11,17)})}for(let w=s+t()*6;w<r;w+=t.range(5,9)){if(pn(w)!=="coast"||Di(w,on+6))continue;let _=a(w),S=t();if(S>=.58)continue;let E=_+t.range(4.5,30);v&&v.T&&Math.abs(w-v.s)<v.T.ww/2+2.5&&E>v.u-3.5&&E<v.u+v.T.wd+2.5||Vn(e,l(w,E,0,t()*6,!1),S<.48?"broad":"pine",t,t.range(1,1.4))}for(let w=s+4;w<r;)w+=t.range(18,30);for(let w=s+12;w<r;w+=48){if(pn(w)!=="coast"||Di(w,on+4))continue;let _=a(w);V0(e,l(w,_+1),t)}let b=Ct(Math.floor(yn(n,5519)*4294967295));for(let w=s+b()*5;w<r;w+=b.range(5,11)){if(Lt(w).coast<.6||Di(w,on+6))continue;let _=1+Math.floor(b()*2.4);for(let S=0;S<_;S++){let E=w+S*b.range(1.1,1.8),A=a(E)+b.range(1.4,2.5),C=b()*6.28,I=b.range(1.05,1.45),R=E-6-Math.round((E-6)/Ws)*Ws,L=E-12-Math.round((E-12)/48)*48;Math.abs(R)<1.4||Math.abs(L)<1.2||Cl(e,l(E,A,0,C,!1),b,I)}}if(v){let{s:w,rw:_,T:S,u:E}=v;S?(Xi(e,l(w,E),g,{type:"house",w:S.ww,d:S.wd,ptype:S}),this.houseGarden(e,g,w,E,1,S,l,2,1,1)):Xi(e,l(w,_+g.range(9,16)),g,{type:"house",w:g.range(7,10),d:8,floors:g()<.5?2:1,tint:g.pick(zs),litP:.5,fence:0})}if(pn(s+30)==="coast"&&t()<.55){let w=s+t()*Wt;e1(e,o(w,-(a(w)+t.range(45,220)),cs-.25,t()*6,!1),t)}let T=Math.floor((s+Wt/2)/1500)*1500+700;T>=s&&T<r&&pn(T)==="coast"&&!Di(T,on*1.6)&&Qg(e,o(T,-(a(T)+75),cs-1,0,!1))}*placeCountry(e,t,n,s,r,o,l,a,u){for(let y of[-1,1]){yield;for(let M=n+t()*20;M<s;M+=t.range(20,40)){if(pn(M)!=="country"||t()<.55||Gs(M,16)||ci(M,48))continue;let c=y*t.range(16,95),f=o(M,c),d=_h("country",t);if(d){Xi(e,f,t,{type:"house",w:d.ww,d:d.wd,ptype:d}),this.houseGarden(e,t,M,c,y,d,o,1,2,2);continue}Xi(e,f,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(zs),litP:.5,fence:0});for(let g=0;g<2+t()*3;g++){let v=c+y*t.range(6,14),b=M+t.range(-8,8);Vn(e,o(b,v,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let M=n+t()*8;M<s;M+=t.range(5,9)){if(pn(M)!=="country"||Gs(M,7)||ci(M,36))continue;let c=y*t.range(140,210);Vn(e,o(M,c,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Gs(M+2,8)&&!ci(M+2,34)&&Vn(e,o(M+2,y*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Wt/2)/600)*600+300;if(h>=n&&h<s&&pn(h)==="country"&&!ci(h,40)){let y=a(h);$g(e,r(h,-(y+1.6),l(h)-.08),t)}let p=Math.floor((n+Wt/2)/700)*700+120;if(p>=n&&p<s&&pn(p)==="country"&&!ci(p,40)){let y=a(p);W0(e,r(p,-(y+.95),l(p)-.08),t),V0(e,r(p+2,-(y+.8),l(p)-.08),t)}let m=Math.floor((n+Wt/2)/900)*900+450;if(m>=n&&m<s&&pn(m)==="country"&&!ci(m,40)){let y=a(m);t1(e,o(m,y+5),t)}let x=Math.floor((n+Wt/2)/380)*380+190;if(x>=n&&x<s&&pn(x)==="country"&&!ci(x,40)&&!Gs(x,30)){let y=a(x),M=(yn(Math.round(x),5)<.5?-1:1)*(y+2.75);Yg(e,o(x,M,0))}for(let y=n;y<s;y+=30){if(pn(y)!=="country")continue;let M=this.path.curv(y);if(Math.abs(M)>1/450&&t()<.5){let c=M>0?-1:1,f=a(y);q0(e,o(y,c*(f+.75)),c>0?-1:1)}}}};var ea={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function O1(i){let e=i.get("weather"),t={mode:ea[e]?e:"auto",kind:ea[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return ea[e]&&(t.ov=ea[e][0],t.rain=ea[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=ea[t.kind];t.ov+=Zt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=Zt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var qi={uHeadPos:{value:new z},uHeadDir:{value:new z(0,0,1)},uHeadI:{value:0},uLampW:{value:[new mt(0,-1e3,0,0),new mt(0,-1e3,0,0)]},uLampCol:{value:new pe(1,.8,.52)}},Ch=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function k1(){let e=new z(42,22,42),t=new rn(1,1),n=new vs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Pn(s,4)),n.instanceCount=2400;let r=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new z},uAmt:{value:0},uBox:{value:e},uCol:{value:new pe(1,1,1)},...qi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Ch}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new ht(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function z1(){let e=new z(46,24,46),t=new rn(1,1);t.translate(0,.5,0);let n=new vs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Pn(s,4)),n.instanceCount=2600;let r=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new z},uRain:{value:0},uBox:{value:e},uCol:{value:new pe(.8,.85,.95)},...qi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Ch}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new ht(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var ui=64,fd=[2.2,1.3,2.6],t3=[-2.4,.35,-1.6];function H1(){let i=new Float32Array(ui*3),e=new Float32Array(ui*3),t=new Float32Array(ui*4),n=new Float32Array(ui),s=new Uint8Array(ui),r=new Float32Array(ui);for(let g=0;g<ui;g++)t[g*4]=t[g*4+1]=1;let o=new rn(1,1),l=new vs;l.index=o.index,l.setAttribute("position",o.attributes.position),l.setAttribute("uv",o.attributes.uv),l.instanceCount=0;let a=new Float32Array(ui*4),u=new Float32Array(ui*4),h={uP:{value:a},uC:{value:u},uNoiseTex:Ue.uNoiseTex,uAmb:{value:new pe},uSun:{value:new pe},uTail:{value:new mt},uCam:{value:new z},...qi},p=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${ui}], uC[${ui}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${Ch}
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
      }`}),m=new ht(l,p);m.frustumCulled=!1,m.renderOrder=4,m.visible=!1;let x=0,y=0,M=0,c=0,f=!1;function d(g,v,b,T,w,_,S,E,A,C,I){let R=x;x=(x+1)%ui,i[R*3]=v,i[R*3+1]=b,i[R*3+2]=T,e[R*3]=w,e[R*3+1]=_,e[R*3+2]=S,t[R*4]=0,t[R*4+1]=E,t[R*4+2]=A,t[R*4+3]=C,n[R]=I,s[R]=g,r[R]=Math.random()}return{mesh:m,update(g,v,b,T,w,_,S,E,A,C,I){if(!I){if(f){for(let G=0;G<ui;G++)t[G*4]=t[G*4+1];f=!1}m.visible=!1;return}let R=v.position,L=v.rotation.y,D=Math.cos(L),O=Math.sin(L),H=O*b,B=D*b,V=Math.min(1,Math.max(0,(b-2)/14)),k=w>.3?2:0,q=k?w:T;for(y+=24*q*V*g;y>=1;){y-=1;let G=(c^=1)?1:-1,J=G*.67,xe=-1.28-Math.random()*.2,Pe=Math.random(),re=Math.random(),ye=1.6+1.6*Pe,Oe=k?.5+.7*re:.9+1*re,ke=G*(.3+.6*Math.random());d(k,R.x+J*D+xe*O,R.y+.12,R.z-J*O+xe*D,H*.55-O*ye+ke*D,Oe,B*.55-D*ye-ke*O,k?.45+.3*Pe:.55+.35*Pe,.2+.1*re,k?.7+.35*re:.8+.4*re,.5*(.5+.5*V)*Math.min(1,q*1.5))}for(M+=(5+4*V)*_*g;M>=1;){M-=1;let G=Math.random();d(1,R.x-.42*D-1.78*O,R.y+.26,R.z+.42*O-1.78*D,H*.5-O*.8,.25+.2*G,B*.5-D*.8,1.3+.6*G,.14,.8+.4*Math.random(),.32*Math.min(1,_*1.5))}let ee=0,we=Math.exp(-fd[0]*g),Ae=Math.exp(-fd[1]*g),Me=Math.exp(-fd[2]*g);for(let G=0;G<ui;G++){let J=G*4;if(t[J]>=t[J+1])continue;let xe=t[J]+=g,Pe=t[J+1];if(xe>=Pe)continue;let re=s[G],ye=re===0?we:re===1?Ae:Me,Oe=G*3,ke=i[Oe]-C.x,Te=i[Oe+1]-C.y,He=i[Oe+2]-C.z;if(ke*ke+Te*Te+He*He<20.25){t[J]=Pe;continue}e[Oe]*=ye,e[Oe+1]=e[Oe+1]*ye+t3[re]*g,e[Oe+2]*=ye,i[Oe]+=e[Oe]*g,i[Oe+1]=Math.max(R.y+.05,i[Oe+1]+e[Oe+1]*g),i[Oe+2]+=e[Oe+2]*g;let te=xe/Pe,de=ee*4;a[de]=i[Oe],a[de+1]=i[Oe+1],a[de+2]=i[Oe+2],a[de+3]=t[J+2]+(t[J+3]-t[J+2])*Math.sqrt(te),u[de]=n[G]*Math.min(1,te*6)*(1-te)*(1-te),u[de+1]=re,u[de+2]=r[G],ee++}f=ee>0,m.visible=f,l.instanceCount=ee,f&&(h.uAmb.value.copy(S),h.uSun.value.copy(E),h.uTail.value.copy(A),h.uCam.value.copy(C))},shift(g,v){for(let b=0;b<ui;b++)i[b*3]-=g,i[b*3+2]-=v}}}var Xr=24,n3=55,i3=12;function V1(){let i=[],e=new Float32Array(Xr*2*2),t=new Float32Array(Xr*2*3);for(let u=0;u<Xr;u++)if(e.set([u,-1,u,1],u*4),u<Xr-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new vt;n.setAttribute("position",new Mt(t,3)),n.setAttribute("aI",new Mt(e,2)),n.setIndex(i);let s=new Float32Array(Xr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new pe},uTime:{value:0},uNoiseTex:Ue.uNoiseTex},o=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${Xr}]; uniform float uW; varying vec3 vW; varying float vSide;
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
      }`}),l=new ht(n,o);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let a={};return{mesh:l,update(u,h,p,m,x,y,M,c){if(l.visible=y>.01,!!l.visible){for(let f=0;f<Xr;f++)u.at(h+n3+f*i3,a),s[f*4]=a.x-p,s[f*4+1]=a.y,s[f*4+2]=a.z-m,s[f*4+3]=a.h;r.uW.value=x*.85,r.uHot.value=y,r.uTime.value=M,r.uSky.value.copy(c)}}}}var ta=1.6;function W1(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,l=t?16:14,a=[4,Math.round(s*.4),Math.round(s*.65),s].filter((I,R,L)=>!R||I>L[R-1]),u=[s,Math.round((s+r)/2),r],h=(I,R)=>{let L=new vs;return L.setAttribute("position",new Ke(I,3)),L.setIndex(R),L},p=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],m=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],x=new Float32Array(fr*4),y=new Float32Array(fr),M={uG:{value:x},uGM:{value:y},uGP:{value:new mt(0,1/ta,3.1,0)},uGQ:{value:new mt(0,1.05,3,0)},uRingD:{value:new mt(s,r,0,0)}},c=[],f=(I,R,L)=>{let D={uRing:{value:new mt(0,0,L?2*n:n,L)},uRingC:{value:new mt(0,0,0,0)}},O=h(...L?m:p);O.instanceCount=0;let H=new ht(O,ng(D,M));H.frustumCulled=!1,H.castShadow=!1,H.receiveShadow=!1,H.visible=!1,c.push({mesh:H,u:D,dA:I,dB:R,size:L?2*n:n,W:L?l:o,last:R===s||R===r})};for(let I=0;I<a.length-1;I++)f(a[I],a[I+1],0);for(let I=0;I<u.length-1;I++)f(u[I],u[I+1],1);let d=new Int32Array(64).fill(-2147483648),g=new Float32Array(64),v=new Uint8Array(64),b=I=>{let R=I&63;if(d[R]!==I){d[R]=I;let L=I*ta,D=hr(L),O=ki(L),H=Lt(L).country,B=Math.min(1,Math.max(0,(H-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(L-D.s)-13)/7)):1)*(O?Math.min(1,Math.max(0,(Math.abs(L-O.s)-38)/10)):1);g[R]=B>0?3+4*Math.round(B*15):0,v[R]=H>0?1:0}return R},T=I=>g[b(I)],w=I=>v[b(I)],_={},S=NaN,E=NaN,A=NaN,C=0;return{meshes:c.map(I=>I.mesh),hide(){for(let I=0;I<c.length;I++)c[I].mesh.visible=!1},warm(I){for(let R of c)R.mesh.visible=I,I&&(R.u.uRing.value.y=1,R.u.uRingC.value.set(1,1,R.W,0),R.mesh.geometry.instanceCount=2)},update(I,R,L,D,O,H,B){let V=Math.floor((R-3)/ta);if(!w(V)&&!w(V+fr-1))C=0;else{if(V!==S||D!==E||O!==A){S=V,E=D,A=O,C=0;for(let k=0;k<fr;k++)I.at((V+k)*ta,_),x[k*4]=_.x-D,x[k*4+1]=_.y,x[k*4+2]=_.z-O,x[k*4+3]=_.h,C|=y[k]=T(V+k)}M.uGP.value.set(V*ta,1/ta,H,R),M.uGQ.value.set(L,B,3,0)}for(let k=0;k<c.length;k++){let q=c[k];if(!C){q.mesh.visible=!1;continue}let ee=Math.floor((R+q.dA)/q.size),we=Math.floor((R+q.dB)/q.size)+(q.last?1:0),Ae=B*q.dB+3,Me=H+2.6,G=Math.min(q.W,Math.max(0,Ae-(Me+L))),J=Math.min(q.W,Math.max(0,Ae-(Me-L))),xe=G>0?Math.ceil(G/q.size)+1:0,Pe=J>0?Math.ceil(J/q.size)+1:0;q.u.uRing.value.x=ee,q.u.uRing.value.y=we-ee,q.u.uRingC.value.set(xe,Pe,q.W,0),q.mesh.geometry.instanceCount=(we-ee)*(xe+Pe),q.mesh.visible=q.mesh.geometry.instanceCount>0}}}}var na=72;function s3(){let i=[],e=[],t=(s,r,o,l,a,u)=>{i.push(...s,...r,...o),e.push(l,a,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new vt;return n.setAttribute("position",new Ke(i,3)),n.setAttribute("aWing",new Ke(e,1)),n}function G1(){let i=s3(),e=new Pn(new Float32Array(na*3),3),t=new Pn(new Float32Array(na*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new ft({side:bn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ae.fog},uFogD:{value:.002},uCam:{value:new z}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new rs(i,n,na);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},l=new Je,a=new vn,u=new $n(0,0,0,"YXZ"),h=new z,p=new z,m=()=>r.reduce((M,c)=>M+c.birds.length,0);function x(M,c,f,d){let g=M==="small"?6+Math.floor(Math.random()*7):M==="crow"?3+Math.floor(Math.random()*5):4;if(m()+g>na)return;let v=45+Math.random()*85,b=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,w=new z().copy(c).addScaledVector(f,v).addScaledVector(d,b-T*75);w.y=c.y+(M==="crow"?18+Math.random()*24:10+Math.random()*18);let _=M==="small"?11+Math.random()*4:8+Math.random()*3,S=new z().copy(d).multiplyScalar(T*_).addScaledVector(f,(Math.random()-.3)*_*.6),E=M==="small"?.8:1.45,A=Array.from({length:g},(C,I)=>({off:new z((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:M==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:M,c:w,vel:S,birds:A,size:E,life:60})}function y(M,c,f,d){if(r.some(b=>b.kind==="gull")||m()+4>na)return;let g=new z().copy(M).addScaledVector(c,70).addScaledVector(f,-d*45);g.y=M.y+18;let v=Array.from({length:4},(b,T)=>({off:new z,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:g,vel:new z,birds:v,size:1.25,life:1e9})}return{mesh:s,update(M,c,f,d,g,v,b,T,w){n.uniforms.uTime.value=c,n.uniforms.uCam.value.copy(f);let _=b>.35&&T<.3,S=ae.warm>.25&&ae.sunEl<.6&&b>.2;_&&(o.small-=M)<0&&(o.small=22+Math.random()*35,v.coast<.6&&x("small",f,d,g)),(S||_&&v.city+v.country>.6&&Math.random()<4e-4)&&(o.crow-=M)<0&&(o.crow=S?14+Math.random()*18:60,x("crow",f,d,g)),v.coast>.6&&_&&y(f,d,g,1);let E=[.1+.08*b,.11+.09*b,.15+.1*b],A=0;for(let C=r.length-1;C>=0;C--){let I=r[C];if(I.kind==="gull"?(I.c.lerp(h.copy(w).addScaledVector(d,60).addScaledVector(g,-42).setY(w.y+16),Math.min(1,M*.25)),(v.coast<.4||!_)&&(I.life=Math.min(I.life,8),I.c.y+=M*6)):I.c.addScaledVector(I.vel,M),I.life-=M,I.life<0||I.kind!=="gull"&&I.c.distanceTo(f)>300){r.splice(C,1);continue}for(let R of I.birds){if(A>=na)break;let L,D,O,H;I.kind==="gull"?(R.w+=M*(14/R.r),L=I.c.x+Math.cos(R.w)*R.r,O=I.c.z+Math.sin(R.w)*R.r,D=I.c.y+R.h+Math.sin(c*.4+R.ph)*2,H=Math.atan2(-Math.sin(R.w),Math.cos(R.w))):(L=I.c.x+R.off.x+Math.sin(c*.7+R.ph)*1.2,D=I.c.y+R.off.y+Math.sin(c*1.1+R.ph)*.6,O=I.c.z+R.off.z,H=Math.atan2(I.vel.x,I.vel.z)),u.set(0,H,Math.sin(c+R.ph)*.15),a.setFromEuler(u),p.setScalar(I.size),l.compose(h.set(L,D,O),a,p),s.setMatrixAt(A,l);let B=I.kind==="gull"?[.92*(.5+.5*b),.93*(.5+.5*b),.95*(.5+.5*b)]:I.kind==="crow"?[.05,.05,.07]:E;e.setXYZ(A,B[0],B[1],B[2]),t.setXY(A,R.fq,R.ph),A++}}s.count=A,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(M){n.uniforms.uFogD.value=M},shift(M,c){for(let f of r)f.c.x-=M,f.c.z-=c}}}var Ol=new z;function Yi(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),a=Math.PI/4;Ol.copy(e),Ol[n]=0,Ol.normalize();let u=.5*o/(o+l),h=1-Ol.angleTo(i)/a;return Math.sign(Ol[t])===1?h*u:l/(o+l)+u+u*(1-h)}var On=class i extends Qt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let a=new z,u=new z,h=new z(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,m=this.attributes.normal.array,x=this.attributes.uv.array,y=p.length/6,M=new z,c=.5/o;for(let f=0,d=0;f<p.length;f+=3,d+=2)switch(a.fromArray(p,f),u.copy(a),u.x-=Math.sign(u.x)*c,u.y-=Math.sign(u.y)*c,u.z-=Math.sign(u.z)*c,u.normalize(),p[f+0]=h.x*Math.sign(a.x)+u.x*r,p[f+1]=h.y*Math.sign(a.y)+u.y*r,p[f+2]=h.z*Math.sign(a.z)+u.z*r,m[f+0]=u.x,m[f+1]=u.y,m[f+2]=u.z,Math.floor(f/y)){case 0:M.set(1,0,0),x[d+0]=Yi(M,u,"z","y",r,n),x[d+1]=1-Yi(M,u,"y","z",r,t);break;case 1:M.set(-1,0,0),x[d+0]=1-Yi(M,u,"z","y",r,n),x[d+1]=1-Yi(M,u,"y","z",r,t);break;case 2:M.set(0,1,0),x[d+0]=1-Yi(M,u,"x","z",r,e),x[d+1]=Yi(M,u,"z","x",r,n);break;case 3:M.set(0,-1,0),x[d+0]=1-Yi(M,u,"x","z",r,e),x[d+1]=1-Yi(M,u,"z","x",r,n);break;case 4:M.set(0,0,1),x[d+0]=1-Yi(M,u,"x","y",r,e),x[d+1]=1-Yi(M,u,"y","x",r,t);break;case 5:M.set(0,0,-1),x[d+0]=Yi(M,u,"x","y",r,e),x[d+1]=1-Yi(M,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Ph(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,a=new vt,u=0;for(let h=0;h<i.length;++h){let p=i[h],m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(p.attributes[x]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[x]===void 0&&(o[x]=[]),o[x].push(p.morphAttributes[x])}if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(u,x,h),u+=x}}if(t){let h=0,p=[];for(let m=0;m<i.length;++m){let x=i[m].index;for(let y=0;y<x.count;++y)p.push(x.getX(y)+h);h+=i[m].attributes.position.count}a.setIndex(p)}for(let h in r){let p=X1(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let m=0;m<p;++m){let x=[];for(let M=0;M<o[h].length;++M)x.push(o[h][M][m]);let y=X1(x);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(y)}}}return a}function X1(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new Mt(o,t,n),a=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=a/t;for(let m=0,x=h.count;m<x;m++)for(let y=0;y<t;y++){let M=h.getComponent(m,y);l.setComponent(m+p,y,M)}}else o.set(h.array,a);a+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function r3(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new ri(i);return n.colorSpace=qt,n}var dd=4;function o3(){let t=document.createElement("canvas");t.width=128*dd,t.height=128;let n=t.getContext("2d"),s=(o,l,a,u,h)=>{n.beginPath(),n.moveTo(o+h,l),n.arcTo(o+a,l,o+a,l+u,h),n.arcTo(o+a,l+u,o,l+u,h),n.arcTo(o,l+u,o,l,h),n.arcTo(o,l,o+a,l,h),n.closePath(),n.fill()};for(let o=0;o<dd;o++){let l=o*128,a=n.createLinearGradient(0,0,0,128);a.addColorStop(0,"#9fbfe6"),a.addColorStop(.45,"#4a6690"),a.addColorStop(1,"#1d2638"),n.fillStyle=a,n.fillRect(l,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(l+14,84,30,50,9),s(l+84,84,30,50,9),n.fillRect(l+6,112,116,16),s(l+52,92,24,40,7)),o===2&&(s(l+62,66,44,70,12),n.fillRect(l+50,118,70,10)),o===3&&(s(l+70,78,40,60,11),n.fillRect(l+56,120,64,8)),n.save(),n.beginPath(),n.rect(l,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(l+40,0),n.lineTo(l+68,0),n.lineTo(l+20,128),n.lineTo(l-8,128),n.fill(),n.restore()}let r=new ri(t);return r.colorSpace=qt,r}function q1(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/dd)}return i}function Y1(){let i=new fn,e=new fn,t=new fn;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new mt,new mt],s=new pe(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=I0(new dn({color:"#ffffff",vertexColors:!0,gradientMap:Sl}),.85,.06,"paint-l",r),l=(te,de)=>Object.assign(new pe(te),{gloss:de}),a=l("#9fd8c8",1),u=l("#eeece4",.6),h=l("#2a2c33",.35),p=l("#1b1c20",.04),m=l("#c8ccd2",.8),x=l("#d4d8de",1.3),y=(te,de)=>{let j=te.attributes.position.count,ce=new Float32Array(j*4);for(let ie=0;ie<j;ie++)ce.set([de.r,de.g,de.b,de.gloss],ie*4);return te.setAttribute("color",new Ke(ce,4)),te},M=I0(new dn({color:"#ffffff",map:o3(),gradientMap:yi}),1.2,.08,"glass-l",r),c=new dn({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:yi}),f=new dn({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:yi}),d=new dn({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:yi}),g=new dn({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:yi}),v=new dn({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:yi}),b=new xn({map:r3()}),T=new Map,w=[],_=!1,S=new Je,E=new $n,A=new vn,C=new z(1,1,1),I=(te,de,j,ce,ie,ne=0,F=0,be=0)=>{let K=te.index?te.toNonIndexed():te;if(de.isColor&&(y(K,de),de=o),E.set(ne,F,be),A.setFromEuler(E),S.compose(new z(j,ce,ie),A,C),K.applyMatrix4(S),_){w.push(K);return}T.has(de)||T.set(de,[]),T.get(de).push(K)},R=l("#16171b",0),L=l("#2b3134",.15),D=l("#b9bfc6",.9),O=l("#4d5258",.4),H=l("#9a1c22",.6),B=1.7,V=.745,k=.3,q=(te,de,j)=>{let ce=Math.min(1,Math.max(0,(j-te)/(de-te)));return ce*ce*(3-2*ce)},ee=te=>te<.8?1.8:te<1.22?1.8-.6*q(.8,1.22,te):1.2-.1*((te-1.22)/(B-1.22))**2,we=te=>1-.085*q(1.15,1.8,te),Ae=(te,de)=>{let j=V-de,ce=k+de*.6,ie=ee(te)-de*(te<0?.4:1),ne=Math.max(.05,.1-de*.5),F=Math.max(.06,(te<.8?.17:.13)-de*.5),be=[[0,ce],[(j-ne)*.5,ce],[j-ne,ce]];for(let N=1;N<4;N++){let P=-Math.PI/2+N/8*Math.PI;be.push([j-ne+ne*Math.cos(P),ce+ne+ne*Math.sin(P)])}for(let N=0;N<=8;N++)be.push([j,ce+ne+N/8*(ie-F-ce-ne)]);for(let N=1;N<5;N++){let P=N/10*Math.PI;be.push([j-F+F*Math.cos(P),ie-F+F*Math.sin(P)])}be.push([j-F,ie],[(j-F)*.5,ie],[0,ie]);let K=be.map(([N,P])=>[N*we(P),P]);for(let N=be.length-2;N>0;N--)K.push([-K[N][0],K[N][1]]);return K};{let te=[];for(let W=0;W<=6;W++){let Y=W/6*Math.PI/2;te.push([-B+.2*(1-Math.cos(Y)),.2*(1-Math.sin(Y))])}for(let W=-B+.2+.12;W<.78;W+=.13)te.push([W,0]);for(let W=.8;W<1.225;W+=.06)te.push([W,0]);for(let W of[1.3,1.39])te.push([W,0]);for(let W=6;W>=0;W--){let Y=W/6*Math.PI/2;te.push([B-.22*(1-Math.cos(Y)),.22*(1-Math.sin(Y))])}let ce=[],ie=[],ne=te.map(([W,Y])=>Ae(W,Y)),F=ne[0].length;ne.forEach((W,Y)=>W.forEach(([Q,ue])=>ce.push(Q,ue,te[Y][0])));for(let W=0;W<ne.length-1;W++)for(let Y=0;Y<F;Y++){let Q=W*F+Y,ue=W*F+(Y+1)%F,ve=Q+F,he=ue+F;ie.push(Q,ue,ve,ue,he,ve)}for(let[W,Y]of[[0,-1],[ne.length-1,1]]){let Q=ce.length/3,ue=ne[W];ce.push(0,(ue[0][1]+ue[F/2|0][1])/2,te[W][0]);for(let ve=0;ve<F;ve++){let he=W*F+ve,me=W*F+(ve+1)%F;Y<0?ie.push(Q,me,he):ie.push(Q,he,me)}}let be=new vt;be.setAttribute("position",new Ke(ce,3)),be.setIndex(ie),be.computeVertexNormals();{let W=be.attributes.normal,Y=F*10+12;if(W.getX(Y)<0){for(let Q=0;Q<ie.length;Q+=3){let ue=ie[Q+1];ie[Q+1]=ie[Q+2],ie[Q+2]=ue}be.setIndex(ie),be.computeVertexNormals()}}be.setAttribute("uv",new Ke(new Float32Array(ce.length/3*2),2));let K=be.toNonIndexed(),N=K.attributes.position,P=new Float32Array(N.count*4);for(let W=0;W<N.count;W+=3){let Y=(N.getY(W)+N.getY(W+1)+N.getY(W+2))/3,Q=(N.getZ(W)+N.getZ(W+1)+N.getZ(W+2))/3,ue=Y>1.665&&Q<.84&&Q>-1.52?u:a;for(let ve=0;ve<3;ve++)P.set([ue.r,ue.g,ue.b,ue.gloss],(W+ve)*4)}K.setAttribute("color",new Ke(P,4)),I(K,o,0,0,0)}I(new On(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let Me=(te,de,j,ce,ie)=>{let ne=new vt,F=[],be=[],K=[],N=[];for(let P=0;P<=j;P++)for(let W=0;W<=de;W++){let Y=W/de,Q=P/j,ue=te(Y,Q);F.push(ue[0]+ue[3]*.004,ue[1]+ue[4]*.004,ue[2]+ue[5]*.004),be.push(ue[3],ue[4],ue[5]),K.push(Y,Q)}for(let P=0;P<j;P++)for(let W=0;W<de;W++){let Y=P*(de+1)+W,Q=Y+1,ue=Y+de+1,ve=ue+1;N.push(Y,Q,ve,Y,ve,ue)}ne.setAttribute("position",new Ke(F,3)),ne.setAttribute("normal",new Ke(be,3)),ne.setAttribute("uv",new Ke(K,2)),ne.setIndex(N);{let P=new z().fromArray(F,0),W=new z().fromArray(F,3),Y=new z().fromArray(F,(de+1)*3),Q=new z().fromArray(be,0);if(W.sub(P).cross(Y.sub(P)).dot(Q)<0){for(let ue=0;ue<N.length;ue+=3){let ve=N[ue+1];N[ue+1]=N[ue+2],N[ue+2]=ve}ne.setIndex(N)}}return q1(ne,ce,ie)},G=te=>{let j=V*(we(te+.01)-we(te-.01))/.02,ce=Math.hypot(1,j);return[1/ce,-j/ce]},J=te=>{let de=.8,j=1.22;for(let ce=0;ce<24;ce++){let ie=(de+j)/2;ee(ie)>te?de=ie:j=ie}return de};for(let te of[-1,1]){let de=te<0,j=(ce,ie,ne)=>I(Me((F,be)=>{let K=1.21+be*.39,N=te>0?ie(K)+(ce(K)-ie(K))*F:ce(K)+(ie(K)-ce(K))*F,[P,W]=G(K);return[te*V*we(K),K,N,te*P,W,0]},1,6,ne,!1),M,0,0,0);j(()=>.06,ce=>J(ce)-.07,2),j(()=>-.72,()=>-.08,3),j(()=>-1.42,()=>-.84,0),I(new Qt(.012,.41,.07),h,te*.731,1.405,-.01,0,0,-te*.07),I(new Qt(.014,.022,2.42),R,te*.748,1.2,-.26);for(let[ce,ie]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new Qt(.008,1.17-ie,.012),L,te*.749,(ie+1.17)/2,ce);I(new Qt(.02,.028,.13),L,te*.752,1.06,.06),I(new Qt(.02,.028,.13),L,te*.752,1.06,-.2),I(new Qt(.01,.022,.62),L,te*.749,1.155,-1.08);for(let ce of[1.12,-1.12])I(new Cr(.345,18,0,Math.PI),R,te*.749,.29,ce,0,te*Math.PI/2,0),I(new Ja(.35,.024,5,18,Math.PI),h,te*.752,.29,ce,0,te*Math.PI/2,0);I(new On(.1,.12,.2,2,.04),a,te*.83,1.24,1.02),I(new Qt(.07,.035,.05),h,te*.775,1.2,1.03),I(new On(.16,.4,.05,3,.075),x,te*.56,.95,-1.703),I(new On(.13,.37,.05,3,.062),c,te*.56,.95,-1.716),I(new On(.036,.27,.02,2,.016),f,te*.56,.95,-1.742),I(new On(.11,.06,.04,2,.02),g,te*.56,.69,-1.707)}{let te=new Ao,de=.52,j=1.15,ce=1.66,ie=.07;te.moveTo(-de+ie,j),te.lineTo(de-ie,j),te.absarc(de-ie,j+ie,ie,-Math.PI/2,0),te.lineTo(de,ce-ie),te.absarc(de-ie,ce-ie,ie,0,Math.PI/2),te.lineTo(-de+ie,ce),te.absarc(-de+ie,ce-ie,ie,Math.PI/2,Math.PI),te.lineTo(-de,j+ie),te.absarc(-de+ie,j+ie,ie,Math.PI,Math.PI*1.5);let ne=new Ka(te,6),F=ne.attributes.position,be=ne.attributes.uv;for(let K=0;K<F.count;K++){let N=F.getX(K),P=F.getY(K),W=(P-j)/(ce-j);be.setXY(K,(N+de)/(2*de),W),F.setX(K,N*(1-.08*W))}I(q1(ne,1),M,0,0,-B-.004,0,Math.PI,0)}I(new On(.36,.04,.03,2,.014),d,0,1.69,-1.712),I(Me((te,de)=>{let j=1.19-de*.36,ce=ee(j),ie=.56-.07*de,ne=.005,F=(ee(j+ne)-ee(j-ne))/(2*ne),be=Math.hypot(1,F);return[(te*2-1)*ie,ce,j,0,1/be,-F/be]},2,7,0,!1),M,0,0,0),I(new On(.46,.25,.012,2,.05),l("#86bdb0",.6),0,.73,-1.701),I(new rn(.34,.17),b,0,.72,-1.709,0,Math.PI,0),I(new On(.25,.034,.03,2,.013),x,0,.9,-1.708);for(let te of[-1,1])I(new Qt(.01,.56,.006),L,te*.47,.85,-1.703);I(new Qt(.95,.01,.006),L,0,.565,-1.703),I(new On(1.5,.2,.26,3,.08),a,0,.44,-1.6),I(new On(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let te of[-1,1])I(new Qt(.13,.035,.01),H,te*.56,.44,-1.731);I(new Bi(.036,.036,.12,12),x,.46,.29,-1.68,Math.PI/2,0,0),I(new Bi(.024,.024,.124,10),R,.46,.29,-1.68,Math.PI/2,0,0);for(let te of[-1,1])I(new On(.4,.26,.04,2,.06),h,te*.42,.85,1.702),I(new Bi(.105,.105,.03,16),v,te*.46,.85,1.72,Math.PI/2,0,0),I(new Bi(.055,.055,.03,12),v,te*.3,.85,1.718,Math.PI/2,0,0),I(new On(.1,.06,.04,2,.015),g,te*.52,.66,1.705),I(new Qt(.46,.014,.014),R,te*.25,1.215,1.2,-.3,te*.12,0);I(new On(.36,.12,.03,2,.03),R,0,.84,1.704);for(let te=0;te<3;te++)I(new Qt(.32,.012,.012),L,0,.805+te*.035,1.722);I(new On(1.52,.24,.22,2,.07),h,0,.44,1.62),I(new Qt(.7,.07,.02),R,0,.4,1.732),I(new Qt(.34,.17,.01),l("#f0cc38",.3),0,.62,1.733),I(new Qt(.3,.05,.004),l("#2f5a2f",.1),0,.6,1.739),_=!0;for(let[te,de]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new Bi(.29,.29,.19,24),p,te,.29,de,0,0,Math.PI/2),I(new Bi(.195,.195,.194,20),D,te,.29,de,0,0,Math.PI/2),I(new Bi(.155,.155,.198,16),O,te,.29,de,0,0,Math.PI/2);for(let j=0;j<5;j++){let ce=j/5*Math.PI*2+.3;I(new Qt(.202,.03,.15),D,te,.29-.085*Math.sin(ce),de+.085*Math.cos(ce),ce,0,0)}I(new Bi(.045,.045,.206,10),m,te,.29,de,0,0,Math.PI/2)}_=!1;for(let[te,de]of T){let j=new ht(Ph(de),te);j.castShadow=te!==M&&te!==b&&te!==d&&te!==v&&te!==f,j.receiveShadow=!0,t.add(j)}{let te=new ht(Ph(w),o);te.castShadow=te.receiveShadow=!0,i.add(te)}{let j=document.createElement("canvas");j.width=48,j.height=96;let ce=j.getContext("2d"),ie=ce.createImageData(48,96);for(let F=0;F<96;F++)for(let be=0;be<48;be++){let K=Math.max(0,Math.abs((be+.5)/48-.5)*2.1-.62),N=Math.max(0,Math.abs((F+.5)/96-.5)*2.05-.78),P=Math.hypot(K/.42,N/.24),W=Math.max(0,1-P),Y=(F*48+be)*4;ie.data[Y]=ie.data[Y+1]=ie.data[Y+2]=Math.round(255*W*W*(3-2*W)),ie.data[Y+3]=255}ce.putImageData(ie,0,0);let ne=new ht(new rn(2.2,4.1),new xn({color:0,alphaMap:new ri(j),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));ne.rotation.x=-Math.PI/2,ne.position.y=.03,ne.renderOrder=3,i.add(ne)}let xe=(()=>{let j=document.createElement("canvas");j.width=16,j.height=64;let ce=j.getContext("2d"),ie=ce.createImageData(16,64);for(let ne=0;ne<64;ne++)for(let F=0;F<16;F++){let be=1-(ne+.5)/64,K=((F+.5)/16-.5)*2,N=Math.exp(-K*K*5)*Math.min(1,be/.06)*Math.pow(1-be,1.6)*(.78+.22*Math.sin(be*31+K*2)),P=(ne*16+F)*4;ie.data[P]=ie.data[P+1]=ie.data[P+2]=Math.round(255*Math.max(0,N)),ie.data[P+3]=255}return ce.putImageData(ie,0,0),new xn({map:new ri(j),color:16726576,transparent:!0,opacity:0,blending:os,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let te=[];for(let j of[-.56,.56]){let ce=new rn(.22,1.5);ce.rotateX(-Math.PI/2),ce.translate(j,.035,-1.72-.75),te.push(ce)}let de=new ht(Ph(te),xe);de.renderOrder=3,de.visible=!1,i.add(de),xe.mesh=de}let Pe=new fn;Pe.position.set(.02,1.19,-1.716),t.add(Pe);let re=new Qt(.52,.026,.02);re.translate(.27,0,0);let ye=new ht(y(re,h),o);ye.rotation.z=.18,Pe.add(ye);let Oe=0,ke=new nl(16773328,0,70,.55,.65,1.2);ke.position.set(0,.8,1.6),ke.target.position.set(0,0,18),t.add(ke,ke.target);let Te={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},He=(te,de)=>de*Math.tanh(te/de);return{group:i,lamps:n,lampCol:s,head:ke,update(te,de,j,ce=0,ie=null,ne=0){if(ie){let F=He(-ie.lat*.016,.045),be=He(-ie.lon*.008,.03);Te.rv+=((F-Te.roll)*55-Te.rv*8)*te,Te.roll+=Te.rv*te,Te.pv+=((be-Te.pitch)*60-Te.pv*9)*te+ie.kick,Te.pitch+=Te.pv*te,Te.yv+=((ie.road-Te.y)*85-Te.yv*8)*te+ie.jolt,Te.y+=Te.yv*te,e.rotation.set(Te.pitch,0,Te.roll),e.position.y=.35+Te.y}if(Te.br+=((ie?ie.brake:0)-Te.br)*Math.min(1,te*14),c.emissiveIntensity=.35+j*3.2+Te.br*(1.7+j*2),d.emissiveIntensity=Te.br*(2.4+j*1.6),f.emissiveIntensity=1+j*3+Te.br*(2+j*2),xe.opacity=ne*Math.min(1,.22+c.emissiveIntensity*.22),xe.mesh.visible=xe.opacity>.01,ce>.15||Oe%2.6>.01){Oe+=te;let F=Oe%2.6/2.6,be=N=>N*N*(3-2*N),K=F<.25?be(F/.25):F<.5?be(1-(F-.25)/.25):0;ye.rotation.z=.18+K*2.5,ce<=.15&&F>=.5&&(Oe=0)}ke.intensity=j*60,v.emissiveIntensity=.15+j*2.6}}}var ia={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ni=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},a3=new rr(-1,1,1,-1,0,1),pd=class extends vt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},l3=new pd,vr=class{constructor(e){this._mesh=new ht(l3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var sa=class extends Ni{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fr.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var kl=class extends Ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ih=class extends Ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Lh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sa(ia),this.copyPass.material.blending=oi,this.timer=new il}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}kl!==void 0&&(o instanceof kl?n=!0:o instanceof Ih&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Dh=class extends Ni{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Z1={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ra=class i extends Ni{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:Rn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Yt(r,o,{type:Rn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Yt(r,o,{type:Rn,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let l=Z1;this.highPassUniforms=Fr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fr.clone(ia.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader,premultipliedAlpha:!0,blending:os,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pe,this._oldClearAlpha=1,this._basic=new xn,this._fsQuad=new vr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],a=o+1<e?t[o+1]:0,u=l+a;s.push((o*l+(o+1)*a)/u),r.push(u)}return new ft({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};ra.BlurDirectionX=new Ie(1,0);ra.BlurDirectionY=new Ie(0,1);var md=class extends Ni{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Yt(4,4,{type:Rn,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),this.mat=new ft({uniforms:{tDiffuse:{value:null},uTexel:{value:new Ie(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new vr(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},c3={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Ie(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Ie(1/1280,1/720)},uLo:{value:new z(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function K1(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Ie),l=new Yt(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:Rn,samples:n}),a=new Lh(i,l);a.addPass(new Dh(e,t));let u=new md;a.addPass(u);let h=new ra(new Ie(o.x*r*.5,o.y*r*.5),.42,.55,.86);a.addPass(h);let p=new sa(c3);p.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},p.material.toneMapped=!1,a.addPass(p);let m=a.render.bind(a);return a.render=x=>{p.uniforms.toneMappingExposure.value=i.toneMappingExposure,m(x)},{composer:a,bloom:h,grade:p,refl:u}}function $1(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let j=0;j<2;j++){let ce=s.getChannelData(j);for(let ie=0;ie<n;ie++)ce[ie]=(Math.random()*2-1)*Math.pow(1-ie/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let a=e.createGain();a.gain.value=.11,l.connect(a),a.connect(t),a.connect(r);let u=(j,ce)=>{let ie=e.createBuffer(1,e.sampleRate*j,e.sampleRate),ne=ie.getChannelData(0),F=0;for(let be=0;be<ne.length;be++)ce?(F=(F+.02*(Math.random()*2-1))/1.02,ne[be]=F*3.5):ne[be]=Math.random()*2-1;return ie},h=(j,ce,ie)=>{let ne=e.createBufferSource();ne.buffer=j,ne.loop=!0;let F=e.createBiquadFilter();F.type=ce,F.frequency.value=ie;let be=e.createGain();return be.gain.value=0,ne.connect(F),F.connect(be),be.connect(t),ne.start(),{f:F,g:be}},p=h(u(2,!0),"lowpass",400),m=h(u(3,!1),"lowpass",700);m.g.connect(r);let x=h(u(2,!1),"bandpass",5200);x.f.Q.value=6;let y=h(u(2,!0),"lowpass",240),M=h(u(3,!1),"bandpass",2600);M.f.Q.value=.35;let c=h(u(2,!0),"lowpass",520),f=h(u(2,!1),"bandpass",1500);f.f.Q.value=.7;let d=e.createBiquadFilter(),g=e.createGain(),v=e.createOscillator(),b=e.createOscillator(),T=e.createGain();v.type="sawtooth",b.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,g.gain.value=0,T.gain.value=.5,v.connect(d),b.connect(T),T.connect(d),d.connect(g),g.connect(t),v.start(),b.start();let w=h(u(3,!1),"bandpass",750);w.f.Q.value=.6;let _=h(u(3,!0),"lowpass",420),S=h(u(2,!0),"lowpass",140),E=u(.03,!1),A=0;function C(j,ce){let ie=e.createBufferSource(),ne=e.createBiquadFilter(),F=e.createGain();ie.buffer=E,ne.type="bandpass",ne.frequency.value=1800+Math.random()*2600,ne.Q.value=1.2,F.gain.setValueAtTime(ce*(.02+Math.random()*.03),j),F.gain.exponentialRampToValueAtTime(1e-4,j+.03),ie.connect(ne),ne.connect(F),F.connect(t),ie.start(j),ie.stop(j+.04)}let I=0,R=0;function L(j,ce){let ie=e.createOscillator(),ne=e.createOscillator(),F=e.createGain(),be=e.createBiquadFilter();be.type="bandpass",be.frequency.value=1150,be.Q.value=2.2,ie.type="square",ie.frequency.value=745,ne.type="triangle",ne.frequency.value=1490,F.gain.setValueAtTime(0,j),F.gain.linearRampToValueAtTime(.085*ce,j+.004),F.gain.exponentialRampToValueAtTime(1e-4,j+.3),ie.connect(be),ne.connect(be),be.connect(F),F.connect(t),F.connect(r),ie.start(j),ne.start(j),ie.stop(j+.33),ne.stop(j+.33)}function D(j,ce){let ie=e.createOscillator(),ne=e.createGain();ie.type="sine",ie.frequency.setValueAtTime(110,j),ie.frequency.exponentialRampToValueAtTime(48,j+.12),ne.gain.setValueAtTime(1e-4,j),ne.gain.linearRampToValueAtTime(.22*ce,j+.006),ne.gain.exponentialRampToValueAtTime(1e-4,j+.17),ie.connect(ne),ne.connect(t),ie.start(j),ie.stop(j+.2)}let O=e.createGain();O.gain.value=1,O.connect(t);let H=e.createGain();H.gain.value=.35,O.connect(H),H.connect(r);let B=(j=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return O;let ce=e.createStereoPanner();return ce.pan.value=j,ce.connect(O),ce};function V(j,ce,ie,ne,F,be,K="sine",N=0){let P=e.createOscillator(),W=e.createGain();if(P.type=K,P.frequency.setValueAtTime(ce,j),P.frequency.exponentialRampToValueAtTime(ie,j+ne),N){let Y=e.createOscillator(),Q=e.createGain();Y.frequency.value=N,Q.gain.value=ce*.012,Y.connect(Q),Q.connect(P.frequency),Y.start(j),Y.stop(j+ne+.05)}return W.gain.setValueAtTime(1e-4,j),W.gain.linearRampToValueAtTime(F,j+Math.min(.04,ne*.25)),W.gain.setValueAtTime(F,j+ne*.7),W.gain.exponentialRampToValueAtTime(1e-4,j+ne),P.connect(W),W.connect(be),P.start(j),P.stop(j+ne+.02),W}function k(j,ce){let ie=B(),ne=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let be=0;be<ne;be++){let K=j+be*(.09+Math.random()*.07);V(K,F,F*(1.2+Math.random()*.3),.06,ce*.022,ie)}}function q(j,ce){let ie=B();V(j,1120,1390,1,ce*.03,ie,"sine",5.5),V(j+1.15,2350,2150,.14,ce*.03,ie),V(j+1.32,1700,1520,.13,ce*.028,ie),V(j+1.5,2750,2480,.36,ce*.032,ie)}function ee(j,ce){let ie=B(),ne=1+Math.floor(Math.random()*3);for(let F=0;F<ne;F++){let be=j+F*.48,K=e.createOscillator(),N=e.createBiquadFilter(),P=e.createGain();K.type="sawtooth",K.frequency.setValueAtTime(560,be),K.frequency.exponentialRampToValueAtTime(420,be+.32),N.type="bandpass",N.frequency.value=1150,N.Q.value=1.6,P.gain.setValueAtTime(1e-4,be),P.gain.linearRampToValueAtTime(ce*.03,be+.03),P.gain.exponentialRampToValueAtTime(1e-4,be+.36),K.connect(N),N.connect(P),P.connect(ie),K.start(be),K.stop(be+.4)}}function we(j,ce){let ie=B(),ne=2+Math.floor(Math.random()*2);for(let F=0;F<ne;F++)V(j+F*.42,1750,1150,.36,ce*.022,ie,"triangle",11)}function Ae(j,ce){let ie=B(),ne=e.createOscillator(),F=e.createBiquadFilter(),be=e.createGain(),K=240+Math.random()*220,N=5+Math.floor(Math.random()*4);ne.type="square",ne.frequency.value=K,F.type="bandpass",F.frequency.value=K*2.4,F.Q.value=3,be.gain.setValueAtTime(1e-4,j);for(let P=0;P<N;P++){let W=j+P*.038;be.gain.linearRampToValueAtTime(ce*.014,W+.008),be.gain.linearRampToValueAtTime(1e-4,W+.028)}ne.connect(F),F.connect(be),be.connect(ie),ne.start(j),ne.stop(j+N*.038+.05)}function Me(j,ce){let ie=B(),ne=4300+Math.random()*700;for(let F=0;F<3;F++)V(j+F*.055,ne,ne*1.01,.035,ce*.009,ie)}function G(j,ce){let ie=B(0);for(let[ne,F,be]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let K=e.createOscillator(),N=e.createGain();K.type="sine",K.frequency.value=ne,K.detune.value=(Math.random()-.5)*8,N.gain.setValueAtTime(1e-4,j),N.gain.linearRampToValueAtTime(ce*.05*F,j+.03),N.gain.exponentialRampToValueAtTime(1e-4,j+be),K.connect(N),N.connect(ie),K.start(j),K.stop(j+be+.1)}}function J(j,ce){let ie=B();for(let ne of[j,j+.22])V(ne,2650,2600,.5,ce*.018,ie),V(ne,3950,3900,.35,ce*.008,ie)}let xe={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Pe=j=>j>1e-4?-Math.log(1-Math.random()*.98)/j:1e9,re=j=>440*Math.pow(2,(j-69)/12),ye=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Oe=[72,74,76,79,81,84,86,88],ke=0,Te=e.currentTime+.2,He=e.currentTime+3;function te(j){let ce=ye[ke++%ye.length],ie=11;for(let ne of ce)for(let F of[-5,5]){let be=e.createOscillator(),K=e.createGain();be.type=F<0?"sine":"triangle",be.frequency.value=re(ne),be.detune.value=F,K.gain.setValueAtTime(0,j),K.gain.linearRampToValueAtTime(.18,j+3.5),K.gain.setValueAtTime(.18,j+ie-4),K.gain.linearRampToValueAtTime(0,j+ie+1),be.connect(K),K.connect(l),be.start(j),be.stop(j+ie+1.2)}}function de(j){let ce=Oe[Math.floor(Math.random()*Oe.length)],ie=e.createOscillator(),ne=e.createOscillator(),F=e.createGain(),be=e.createGain();ie.type=ne.type="sine",ie.frequency.value=re(ce),ne.frequency.value=re(ce)*2.01,be.gain.value=.25,ne.connect(be),be.connect(F),F.gain.setValueAtTime(0,j),F.gain.linearRampToValueAtTime(.05,j+.02),F.gain.exponentialRampToValueAtTime(1e-4,j+4),ie.connect(F),F.connect(r),F.connect(t),ie.start(j),ne.start(j),ie.stop(j+4.2),ne.stop(j+4.2)}return{ac:e,muted:!1,tyres:f,engG:g,bump(j){D(e.currentTime+.01,j)},update(j,ce,ie,ne={}){let F=e.currentTime;if((ne.bell||0)>.01)for(I<F&&(I=F+.02);I<F+.12;)L(I,ne.bell),I+=.41;let be=ne.rain||0;M.g.gain.setTargetAtTime(be*.05,F,.6),c.g.gain.setTargetAtTime(be*.05,F,.6);let K=(ne.wetRoad||0)*Math.min(1,j)**1.5,N=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(f.g.gain.setTargetAtTime(K*.045*N,F,.4),f.f.frequency.setTargetAtTime(900+1500*Math.min(j,2),F,.4),be>.05&&ne.roof)for(A<F&&(A=F+.02);A<F+.12;)C(A,be),A+=.04+Math.random()*.12/be;let P=ne.water||0,W=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);w.g.gain.setTargetAtTime(P*.035*W,F,.25),w.f.frequency.setTargetAtTime(600+400*W,F,.25);let Y=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),Q=ne.rush||0;_.g.gain.setTargetAtTime(((ce.mountain||0)+(ce.snow||0)*.7)*.06*Y+Q*.055,F,.8),_.f.frequency.setTargetAtTime(260+420*Y+Q*500,F,.8);let ue=ne.train||0;if(y.g.gain.setTargetAtTime(ue*.16,F,.2),ue>.04)for(R<F&&(R=F+.02);R<F+.12;)D(R,ue),D(R+.15,ue*.8),R+=1.2;for(;Te<F+1;)te(Te),Te+=8;He<F+.5&&(de(He),He+=1.5+Math.random()*4.5);let ve=ne.tunnel||0;{let Z=ne.speed||0,Le=ne.load||0,ge=850+2400*(1-Math.exp(-Z/15))+Math.max(0,Z-25)*60+Le*1300,De=ge/40;v.frequency.setTargetAtTime(De,F,.25),b.frequency.setTargetAtTime(De*2,F,.25),d.frequency.setTargetAtTime(200+ge*.08+Le*260,F,.3),g.gain.setTargetAtTime((.008+.01*Math.min(1,Z/15)+.024*Le)*(1-.6*(ne.rush||0))*(ne.roof===!1?.5:1)*(1+.7*ve),F,.3)}p.g.gain.setTargetAtTime((.03+j*.06)*(1+1.6*ve),F,.35),p.f.frequency.setTargetAtTime((250+j*500)*(1+.5*ve),F,.35),S.g.gain.setTargetAtTime(ve*.07,F,.4),o.gain.setTargetAtTime(.55+.6*ve,F,.4);let he=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);m.g.gain.setTargetAtTime(ce.coast*(.012+he*.05),F,.3),m.f.frequency.setTargetAtTime(400+he*900,F,.3);let me=1-Math.min(1,be*1.4),Ne=1-ie,Ze=ne.dusk||0,Fe=ce.snow||0,Be=1-Fe,ze={sparrow:ie*me*.22*(.3+ce.city*.5+ce.sakura+ce.country*.8+ce.coast*.2+(ce.mountain||0)*.5)*(1-Fe*.8),uguisu:ie*me*ce.sakura*.06,crow:me*(Ze*.14+ie*(ce.city+ce.country+(ce.mountain||0)*1.5+Fe*2.5)*.012),gull:ie*ce.coast*me*.16,frog:Ne*(ce.country*5+ce.sakura*.6+ce.coast*.3)*(1+be*.6)*Be,cricket:Ne*me*(1.6-ce.city*1.1+(ce.mountain||0)*.8)*Be,bike:ie*me*ce.city*.014,bell:Fe*.022+(ce.mountain||0)*.006},tt={sparrow:k,uguisu:q,crow:ee,gull:we,frog:Ae,cricket:Me,bike:J,bell:G};for(let Z in ze)F<xe[Z]||(ze[Z]>1e-4&&tt[Z](F+.05,.6+Math.random()*.4),xe[Z]=F+Math.max(.12,Pe(ze[Z]||1e-6)));let at=.5+.5*Math.sin(F*7)*Math.sin(F*.4);x.g.gain.setTargetAtTime((ce.country+ce.sakura*.3)*ie*.006*at*(1-(ce.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function J1(i){let t=new rn(.075,.05),n=new xn({color:16777215,side:bn}),s=new rs(t,n,420);s.frustumCulled=!1,s.count=0;let r=new pe("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(v=>new pe(v));for(let v=0;v<420;v++)s.setColorAt(v,r);let l=Array.from({length:420},()=>({p:new z(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),a=new Je,u=new vn,h=new $n,p=new z(1,1,1),m=new z,x=90,y=new Float32Array(x*3),M=Array.from({length:x},()=>({p:new z(1e9,0,0),ph:Math.random()*6.28})),c=new vt;c.setAttribute("position",new Mt(y,3));let f=new To({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:os,opacity:0}),d=new Ba(c,f);d.frustumCulled=!1;let g=(v,b,T,w,_)=>{let S=_?8+Math.random()*42:-4+Math.random()*50,E=(Math.random()-.5)*40;v.p.set(b.x+T.x*S+w.x*E,b.y-1+Math.random()*9,b.z+T.z*S+w.z*E)};return{group:[s,d],shift(v,b){for(let T of l)T.p.x-=v,T.p.z-=b;for(let T of M)T.p.x-=v,T.p.z-=b},update(v,b,T,w,_,S,E,A,C,I=0){let R=Math.floor(420*Math.min(1,S*1.1+I*.55));n.color.setScalar(1-.72*A);let L=!1;s.count=R;for(let O=0;O<R;O++){let H=l[O];m.subVectors(H.p,T);let B=m.x*w.x+m.z*w.z,V=m.x*_.x+m.z*_.z;if(H.p.x>1e8||B<-6||B>55||Math.abs(V)>24||H.p.y<E-.5){g(H,T,w,_,H.p.x<1e8);let k=Math.random()*(S+I)<I;(k!==H.leaf||k)&&(H.leaf=k,s.setColorAt(O,k?o[Math.floor(Math.random()*o.length)]:r),L=!0)}H.p.y-=H.v*v,H.p.x+=Math.sin(b*.7+H.ph)*.4*v+.25*v,H.p.z+=Math.cos(b*.5+H.ph)*.3*v,h.set(b*H.sp+H.ph,b*H.sp*.7,H.ph),u.setFromEuler(h),p.setScalar(H.leaf?1.9:1),a.compose(H.p,u,p),s.setMatrixAt(O,a)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=A*C;if(f.opacity=D,d.visible=D>.01,d.visible){for(let O=0;O<x;O++){let H=M[O];m.subVectors(H.p,T);let B=m.x*w.x+m.z*w.z,V=m.x*_.x+m.z*_.z;if(H.p.x>1e8||B<-4||B>60||Math.abs(V)>30){let k=2+Math.random()*55,q=(Math.random()-.5)*55;H.p.set(T.x+w.x*k+_.x*q,E+.3+Math.random()*2.2,T.z+w.z*k+_.z*q)}H.p.x+=Math.sin(b*.6+H.ph*3)*.3*v,H.p.y+=Math.sin(b*.9+H.ph)*.2*v,H.p.z+=Math.cos(b*.5+H.ph*2)*.3*v,y[O*3]=H.p.x,y[O*3+1]=H.p.y,y[O*3+2]=H.p.z}c.attributes.position.needsUpdate=!0}}}}var ct=new URLSearchParams(location.search),oa=ct.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();oa&&document.body.classList.add("embed");ct.has("shot")&&document.body.classList.add("shot");Lm(ct.has("seed")?parseInt(ct.get("seed")):Math.random()*1e9|0);Nm(ct.get("env")||"city");var kn=i=>document.getElementById(i),aa=i=>{let e=kn("loading");e&&(e.textContent=i)};async function u3(){await new Promise(Se=>setTimeout(Se,30));let i=kn("c"),e=new eh({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ct.get("q")||(oa||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?oa?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=qt,e.toneMapping=sl,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Ir,e.debug.checkShaderErrors=ct.has("debug");let r=ct.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",l=r==="old"?Promise.resolve(null):p1(o),a=y1(o),u=b1(n==="high"&&innerHeight*s>=560?"hi":"lo"),h=v1(o),p=m1(n==="high"&&innerHeight*s>=560?"hi":"lo"),m=n==="high"&&innerHeight*s>=560?"hi":"lo",x=g1(m),y=new Rr;y.fog=new Da(13032946,.0019,700);let M=new zn(52,innerWidth/innerHeight,.5,7e3),c=new Io(16777215,3);c.castShadow=!0;let f=n==="low"?1024:n==="mid"?1536:2048;c.shadow.mapSize.set(f,f),C0(ct.has("pcf")?parseInt(ct.get("pcf")):1);let d=62,g=c.shadow.camera,v=new Je,b=new Je;Object.assign(g,{left:-d,right:d,top:d,bottom:-d,near:1,far:420});let T=new z(0,1,0),w=new z,_=new z,S=new z,E=new z(0,1,0),A=new z(0,150,60),C=new z,I=new z,R=null,L=0,D=0,O=0;c.shadow.updateMatrices=function(){g.position.copy(A),g.lookAt(C),g.updateMatrixWorld(),g.updateProjectionMatrix(),b.multiplyMatrices(g.matrixWorldInverse,v).multiply(g.matrixWorld),g.projectionMatrix.multiply(b),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),this._updateMatrix(g,this.matrix,this._frustum)};let H=!0;c.shadow.bias=-4e-4;let B=()=>{c.shadow.normalBias=ct.has("nb")?parseFloat(ct.get("nb")):1.5*2*d/c.shadow.mapSize.x};B();{let[Se,yt]=(ct.get("graze")||"0,0.12").split(",").map(Number);qm(Se,yt)}y.add(c,c.target);let V=new Io(16777215,0);V.castShadow=n!=="low"&&!ct.has("nocarsh");{let Se=ct.has("carsm")?parseInt(ct.get("carsm")):n==="high"?512:384;V.shadow.mapSize.set(Se,Se)}if(Object.assign(V.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),V.shadow.bias=-2e-4,V.shadow.normalBias=.025,y.add(V,V.target),V.castShadow){let Se=c.shadow.getFrustum(),yt=V.shadow.getFrustum();for(let st of[ht,Ua]){let hn=st.prototype.intersectsFrustum;st.prototype.intersectsFrustum=function(ii){return ii===yt?this.userData.car===!0:(ii!==Se||this.userData.car!==!0)&&hn.call(this,ii)}}}let k=new el(10799359,13154464,1.6);y.add(k),aa("painting the town\u2026"),await new Promise(Se=>setTimeout(Se,10));let q=hg();wg(q);let ee=await p,we=await x,Ae=fg(q,m,ee,we);Ae.houses&&Wg(we.types),ee&&ee.img.close(),we&&we.img.close();let Me=dg(e);Dg(Me.cells),Ue.uTuftV.value.set(...Me.tuftV);let G=ig(q.textures(e),Me.tex,Ae.textures(e)),J=$m();J.update(e,0,0,0,0),aa("painting the clouds\u2026"),await new Promise(Se=>setTimeout(Se,10)),Ng(ct.has("leafd")?parseFloat(ct.get("leafd")):n==="high"?.72:.62);{let Se=await u;if(Se){Hi.cells=Se.cells.filter(hn=>hn.kind==="leaf"),Se.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let yt=D0(Se.tex);G.gleaf=yt.mat,G.gleafDepth=yt.depth;let st=Se.cells.filter(hn=>hn.kind==="blossom");st.length&&(Hi.bcells=st,G.gblossom=D0(Se.tex,{blossom:!0}).mat)}}kg(),jg();let xe=[2.1,1.75,3.2],Pe=[1.42,1.47,1.74],re=[.95,1.05,1.8],ye=[.91,1.34,1.2],Oe=[1.88,1.28,2],ke=[1.97,1.54,1.62];{let Se=await h;Se&&(Se.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),_i.tex=Se.tex,_i.uFieldK.value.set(1/Se.tile[0],1/Se.tile[1]),_i.uFieldM.value.set(...Se.mean))}let Te=new oh;G.shore=C1(n!=="high"),G.surf=I1(),Qo.n=n==="high"?8:4,Qo.drops=n==="high"?4:2,G.tetra=tg(Ul,n!=="high");let He=P1(),te=W1(n,ct.has("grass")?ct.get("grass").split(",").map(Number):null);for(let Se of te.meshes)y.add(Se);let de=new Rh(y,Te,G,He),j=o1();y.add(j);let ce=c1();y.add(ce.group);let ie=R1(n!=="high");y.add(ie.mesh);let ne=Y1();ne.group.rotation.order="YXZ",y.add(ne.group),ne.group.traverse(Se=>{Se.userData.car=!0});let F=J1(G.glowTex);F.group.forEach(Se=>y.add(Se));let be=ct.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),K=K1(e,y,M,{msaa:be==="msaa"?n==="high"?4:2:0,fxaa:be==="fxaa"});Ue.uReflTex.value=K.refl.rt.texture;let N=await l,P=N?x1(N,K):null;P&&y.add(P.mesh);let W=!P||r==="both"?l1(a1(e)):null;W&&y.add(W.group);let Y=await a,Q=Y?_1(Y,K,y.fog.color):null;Q&&y.add(Q.mesh);let ue=new z,ve=new z,he=ct.get("refl")||"auto",me=ct.has("backlit")?parseFloat(ct.get("backlit")):1,Ne=[7.5,3,2.3],Ze=[1.7,1.15,1],Fe=.7,Be=[57,76,94,82,96,114,156,151,148,207,197,189,246,251,254,160,205,240],ze=[Ue.uTpD.value,Ue.uTpS.value,Ue.uTpM.value,Ue.uTpL.value,Ue.uTpFL.value,Ue.uTpFS.value],tt=ct.has("lightson")?parseFloat(ct.get("lightson")):-1,at=new z,Z=ct.has("haze")?parseFloat(ct.get("haze")):1,Le=rg();y.add(Le.group);let ge=og();y.add(ge.group);let De=O1(ct),Ve=z1(),Re=k1();y.add(Ve.mesh,Re.mesh);let nt=H1();y.add(nt.mesh);let je=V1();y.add(je.mesh);let Gt=new pe,Ft=new pe,hi=new mt,Gn=G1();y.add(Gn.mesh);let xr=De.W.rain,la=.4,qr=5.5,oe={s:Math.max(100,parseFloat(ct.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Zt(parseFloat(ct.get("t"))||.4,0,.999),todPaused:ct.has("freeze"),dist:0,spray:ct.has("nospray")?0:1,grass:1,pclouds:1,band:1,waves:1,shore:1,surf:1,tetra:1,cam:{low:1,eye:2,top:3,film:4}[ct.get("cam")]??(oa?4:0)},fi=!1;P&&(P.opening=["sakura","city"].includes(pn(oe.s))?"center":"flank"),aa("building the road\u2026"),await new Promise(Se=>setTimeout(Se,10));let zl=oa?620:de.ahead;de.ahead=260;let Hl=ct.has("detail")?parseFloat(ct.get("detail")):380,Ts=ct.has("farleaf")?parseFloat(ct.get("farleaf")):540;for(;de.update(oe.s,1e9););de.flush(),de.ahead=zl;{aa("preparing the light\u2026"),await new Promise(tn=>setTimeout(tn,10));let Se=new fn,yt=new vt;yt.setAttribute("position",new Ke([0,0,0,.01,0,0,0,.01,0],3)),yt.setAttribute("normal",new Ke([0,1,0,0,1,0,0,1,0],3)),yt.setAttribute("uv",new Ke([0,0,1,0,0,1],2)),yt.setAttribute("color",new Ke([1,1,1,1,1,1,1,1,1],3));let st=new vt;st.setAttribute("position",yt.attributes.position);let hn=new Set([G.shore,G.surf,He]),ii=[G.color,G.atlas,G.foliage,G.leaf,G.lamp,G.sig,G.sodium,G.decal,G.pool,G.shore,G.surf,He,G.tetra,...G.gleaf?[G.gleaf]:[],...G.gblossom?[G.gblossom]:[]];for(let tn=0;tn<Pi.length;tn++)ii.push(wl([Pi[tn]])),ii.push(wl([Pi[tn],Pi[(tn+1)%Pi.length]]));for(let tn of ii){let $i=new ht(hn.has(tn)?st:yt,tn);$i.castShadow=$i.receiveShadow=!hn.has(tn),$i.frustumCulled=!1,(tn===G.gleaf||tn===G.gblossom)&&($i.customDepthMaterial=G.gleafDepth),tn===G.atlas&&($i.customDepthMaterial=G.atlasDepth),Se.add($i)}Se.position.set(0,0,0),y.add(Se),c.target.position.set(0,0,0),c.position.set(0,150,60);let wn=[Ve.mesh,Re.mesh,nt.mesh,je.mesh,ge.group,Le.group,ie.mesh].filter(tn=>!tn.visible);for(let tn of wn)tn.visible=!0;te.warm(!0),e.setRenderTarget(K.composer.readBuffer),e.compile(y,M),e.render(y,M),e.setRenderTarget(null);for(let tn of wn)tn.visible=!1;te.warm(!1),y.remove(Se),yt.dispose(),st.dispose(),K.bloom.enabled=K.refl.enabled=!0,K.composer.render(0),K.bloom.enabled=K.refl.enabled=!1}let Et={k:Math.ceil((oe.s-Or)/Br),phase:"idle",raise:1,decided:!1,t2:0},wt={},kt={},Nt={},Vl=ct.has("yaw")||ct.get("cam")==="top",hs=new z,Xs=new z,Xn=new z,Yr=!1,ca=new z,ua=new z,Nh=kn("spd"),Wl=kn("dist"),U=kn("clock"),$=kn("zone"),fe=kn("start"),le=kn("hint"),se=null,Ge=null,Ye=0,We=0;function Qe(Se){!fi||Se===Ge||(Ge=Se,$.querySelector(".jp").textContent=vl[Se].jp,$.querySelector(".en").textContent=vl[Se].en,$.classList.add("on"),clearTimeout(Ye),Ye=setTimeout(()=>$.classList.remove("on"),5200))}function et(){if(!fi){if(fi=!0,document.body.classList.remove("pre"),!ct.has("auto"))try{se=$1(),se&&se.ac.resume()}catch{se=null}fe.style.opacity=0,setTimeout(()=>fe.remove(),1500),oa||(le.style.opacity=.75,setTimeout(()=>le.style.opacity=0,9e3))}}let lt={};addEventListener("keydown",Se=>{lt[Se.key]=!0,(Se.key==="m"||Se.key==="M")&&Ut(),(Se.key==="t"||Se.key==="T")&&mn(),(Se.key==="c"||Se.key==="C")&&Cn(),(Se.key==="r"||Se.key==="R")&&Mi(),!fi&&(Se.key===" "||Se.key==="Enter")&&et()}),addEventListener("keyup",Se=>{lt[Se.key]=!1});let ot=null;i.addEventListener("pointerdown",Se=>{ot={id:Se.pointerId,x:Se.clientX,y:Se.clientY,sy:Se.clientY,sc:oe.mult}});let $e=Se=>Zt(Se.sc*Math.exp(-((Se.y-Se.sy)/innerHeight)*3.4),la,qr);addEventListener("pointermove",Se=>{ot&&Se.pointerId===ot.id&&(ot.x=Se.clientX,ot.y=Se.clientY,oe.mult=$e(ot))}),addEventListener("pointerup",()=>{ot=null}),addEventListener("pointercancel",()=>{ot=null}),i.addEventListener("touchstart",Se=>{let yt=Se.changedTouches[0];ot={id:"touch",x:yt.clientX,y:yt.clientY,sy:yt.clientY,sc:oe.mult},Se.preventDefault()},{passive:!1}),i.addEventListener("touchmove",Se=>{if(!ot)return;let yt=Se.changedTouches[0];ot.x=yt.clientX,ot.y=yt.clientY,oe.mult=$e(ot),Se.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{ot=null}),i.addEventListener("touchcancel",()=>{ot=null});function Ut(){se&&(se.toggle(),kn("snd").style.opacity=se.muted?.4:1)}function mn(){oe.todPaused=!oe.todPaused,kn("tim").style.opacity=oe.todPaused?.4:1}let Xt=[0,1,2,4],zt={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Cn(){oe.cam=Xt[(Xt.indexOf(oe.cam)+1)%Xt.length],kn("cam").textContent=zt[oe.cam]||"\u25D0",oe.cam===4&&At()}let qe=["chase","side","road","crane","eye","side","road"],bt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function At(){let Se;do Se=qe[Math.floor(Math.random()*qe.length)];while(Se===bt.last);{let yt=zi(oe.s+60);yt&&Math.abs(oe.s+60-yt.s)<on+120&&(Se=Math.random()<.6?"chase":"eye")}if(Object.assign(bt,{type:Se,last:Se,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),Se==="road"){let yt=oe.s+40+Math.random()*18,st=Bn(yt,"rw"),hn=Math.random()<.6?-1:1,ii=hn*(st+(hn<0?.9:1.3)),wn=Te.at(yt,{}),tn=wn.y+Ms(yt,ii,wn.y,st);bt.anchor={x:wn.x+wn.rx*ii,y:Math.max(tn,wn.y)+1.05,z:wn.z+wn.rz*ii,s:yt}}Yr=!1}let ni={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Mi(){kn("wx").textContent=ni[De.cycle()]}kn("wx").textContent=ni[De.W.mode],kn("cam").textContent=zt[oe.cam]||"\u25D0",oe.cam===4&&At(),kn("wx").onclick=Se=>{Se.stopPropagation(),Mi()},kn("snd").onclick=Se=>{Se.stopPropagation(),Ut()},kn("tim").onclick=Se=>{Se.stopPropagation(),mn()},kn("cam").onclick=Se=>{Se.stopPropagation(),Cn()};let Zi=0,qs=Se=>{let yt=performance.now();yt-Zi<120||(Zi=yt,Se.cancelable&&Se.type!=="click"&&Se.preventDefault(),et())};for(let Se of["touchstart","pointerdown","mousedown","click"])fe.addEventListener(Se,qs,{passive:!1});let Ht=()=>{se&&se.ac.state!=="running"&&se.ac.resume()};for(let Se of["touchend","click","keydown"])addEventListener(Se,Ht,{passive:!0});document.addEventListener("visibilitychange",()=>{se&&(document.hidden?se.ac.suspend():se.ac.resume())});let Kt=!1,Ki="",Bt=52,di=0;function Es(){let Se=innerWidth,yt=innerHeight,st=Se/yt,hn=Se+"x"+yt+"@"+s;hn!==Ki&&(Ki=hn,e.setPixelRatio(s),e.setSize(Se,yt,!1),K.composer.setPixelRatio(s),K.composer.setSize(Se,yt),M.aspect=st,Bt=st>=1?52:Zt(2*Math.atan(Math.tan(34*Math.PI/180)/st)*180/Math.PI,52,80),M.fov=Bt+di,M.updateProjectionMatrix(),K.grade.uniforms.uAspect.value=st,K.grade.uniforms.uTexel.value.set(1/K.composer.readBuffer.width,1/K.composer.readBuffer.height),Ue.uReflRes.value.set(K.composer.readBuffer.width,K.composer.readBuffer.height),f1(e))}addEventListener("resize",()=>{Kt=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Kt=!0}),Es();let yr=0;function gd(Se=!0){if(s>1.05)s=Math.max(1,s-.25),Kt=!0;else if(H)H=!1,K.bloom.enabled=!1;else if(c.shadow.mapSize.x>1024)c.shadow.mapSize.set(1024,1024),B(),c.shadow.map&&(c.shadow.map.dispose(),c.shadow.map=null);else if(de.ahead>430)de.ahead=430;else return;if(yr++,Se)try{localStorage.setItem("icd-q",String(yr))}catch{}}try{let Se=parseInt(localStorage.getItem("icd-q")||"0");if(!ct.has("q"))for(let yt=0;yt<Math.min(Se,6);yt++)gd(!1);yr=Math.max(yr,Se||0)}catch{}let vd=performance.now(),pi=0,xd=0,ha=0,fa=()=>1-ae.night,Fh=0,en=0,yd=0,St=ct.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;St&&(St.gl=e.getContext(),St.tq=St.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let Si={p:-1,a:new z,b:new z,next:5},Dt={lat:0,lon:0,road:0,jolt:0,kick:0,u:oe.u,vu:0,v:0,s:oe.s,yaw:0,brake:0,rk:NaN,rb:null},j1=new pe(3.6,2.8,1.8),Q1=[-2.5335,-1.4665,1.4665,2.5335],_d=[1.12,-1.12],ev=[-24.5,24.5];function bd(Se){requestAnimationFrame(bd);let yt=performance.now();Kt&&(Kt=!1,Es());let st=Math.min(.05,Math.max(0,(Se-vd)/1e3));vd=Se,pi+=st,oe.steer=0,(lt.ArrowLeft||lt.a||lt.A)&&(oe.steer=-1),(lt.ArrowRight||lt.d||lt.D)&&(oe.steer=1),(lt.ArrowUp||lt.w||lt.W)&&(oe.mult=Zt(oe.mult*Math.exp(st*.9),la,qr)),(lt.ArrowDown||lt.s||lt.S)&&(oe.mult=Zt(oe.mult*Math.exp(-st*.9),la,qr)),ot&&Math.abs(ot.y-ot.sy)<30&&(oe.steer=ot.x<innerWidth/2?-1:1),oe.steer&&(oe.lastInput=Se,oe.uHome=oe.u);let hn=Vo(Et.k);oe.s-hn>24&&(Et.k++,hn=Vo(Et.k),Object.assign(Et,{phase:"idle",raise:1,decided:!1}));let ii=_l(hn),wn=hn-oe.s;ii&&!Et.decided&&wn<150&&(Et.decided=!0,wn>75&&fi&&oe.speed*oe.speed/2.5<wn-14&&(ct.has("xing")||yn(Et.k,99)<.8)&&(Et.phase="warn",ge.start(hn,yn(Et.k,7)<.5?1:-1,16))),Et.phase==="warn"?(Et.raise=Math.max(0,Et.raise-st/6),ge.st.cleared&&(Et.phase="clear",Et.t2=0)):Et.phase==="clear"?(Et.raise=Math.max(0,Et.raise-st/6),(Et.t2+=st)>2.2&&(Et.phase="raise")):Et.phase==="raise"&&(Et.raise=Math.min(1,Et.raise+st/5),Et.raise>=1&&(Et.phase="idle"));let tn=Et.phase==="warn"||Et.phase==="clear"||Et.phase==="raise"&&Et.raise<.25,$i=Bn(oe.s,"speed")*oe.mult*(fi?1:.55);if(Et.phase!=="idle"&&Et.raise<.8&&wn>0){let Ce=wn-11.2,it=Ce>0?Math.sqrt(2*1.25*Ce):0;$i=Math.min($i,it),oe.speed=Math.min(oe.speed,it)}ct.has("park")&&($i=0,oe.speed=0),oe.speed+=($i-oe.speed)*Math.min(1,st*.5),oe.s+=oe.speed*st,oe.dist+=oe.speed*st;let Gl=Bn(oe.s,"rw");oe.steer?oe.u=Zt(oe.u+oe.steer*st*2.4,-Gl+.85,Gl-.85):Se-oe.lastInput>3e3&&(oe.u+=(Zt(oe.uHome,-Gl+.85,Gl-.85)+Math.sin(pi/11)*.1-oe.u)*Math.min(1,st*.9)),!oe.todPaused&&fi&&(oe.tod=(oe.tod+st/480*(ae.night>.5?1.7:1))%1),i1(oe.tod),De.update(st);let qn=De.W.ov,As=De.W.rain;r1(qn,As),xr=Zt(xr+(As>.25?st/18:-st/120),0,1);let Md=performance.now();de.update(oe.s,fi?3.5:14);let Sd=performance.now();if(Te.at(oe.s,wt),Math.abs(wt.x-de.origin.x)>900||Math.abs(wt.z-de.origin.z)>900){let Ce=Math.round(wt.x)-de.origin.x,it=Math.round(wt.z)-de.origin.z;de.setOrigin(Math.round(wt.x),Math.round(wt.z)),hs.x-=Ce,hs.z-=it,Xs.x-=Ce,Xs.z-=it,F.shift&&F.shift(Ce,it),Gn.shift(Ce,it),nt.shift(Ce,it)}let Ji=de.origin.x,ji=de.origin.z,tv=(Te.at(oe.s+1.5,Nt).y-Te.at(oe.s-1.5,kt).y)/3,nv=(Nt.h-kt.h)/3;if(ne.group.position.set(wt.x+wt.rx*oe.u-Ji,wt.y+.01,wt.z+wt.rz*oe.u-ji),st>0){let Ce=Dt.vu+((oe.u-Dt.u)/st-Dt.vu)*Math.min(1,st*6),it=(Ce-Dt.vu)/st;Dt.u=oe.u,Dt.vu=Ce,Dt.lat=it-oe.speed*oe.speed*nv,Dt.lon+=((oe.speed-Dt.v)/st-Dt.lon)*Math.min(1,st*8),Dt.v=oe.speed;let rt=Et.phase!=="idle"&&wn>0&&wn<20&&oe.speed<.5;if(Dt.brake=Dt.lon<-.6||rt?1:Dt.lon>-.3?0:Dt.brake,Dt.yaw=-Zt(Math.atan(Ce/Math.max(oe.speed,6))*.8,-.1,.1),Dt.road=.004*Math.sin(oe.s*.48)+.003*Math.sin(oe.s*.86+1.3),Dt.jolt=Dt.kick=0,ii)for(let xt=0;xt<4;xt++)for(let $t=0;$t<2;$t++){let Jt=hn+Q1[xt]-_d[$t];if(Dt.s<Jt&&oe.s>=Jt){let nn=.05+Math.min(oe.speed,25)*.004;Dt.jolt+=nn,Dt.kick+=$t?nn*.9:-nn*.9,se&&se.bump(.25+Math.min(oe.speed,25)/50)}}{let xt=Math.round((oe.s-Wo)/kr);xt!==Dt.rk&&(Dt.rk=xt,Dt.rb=ki(oe.s));let $t=Dt.rb;if($t)for(let Jt=0;Jt<2;Jt++)for(let nn=0;nn<2;nn++){let mi=$t.s+ev[Jt]-_d[nn];if(Dt.s<mi&&oe.s>=mi){let Nn=.035+Math.min(oe.speed,25)*.003;Dt.jolt+=Nn,Dt.kick+=nn?Nn*.9:-Nn*.9,se&&se.bump(.2+Math.min(oe.speed,25)/60)}}}Dt.s=oe.s}ne.group.rotation.set(-Math.atan(tv),wt.h+Dt.yaw,0);let _r=zi(oe.s);_r&&Math.abs(oe.s-_r.s)<700?(Te.at(_r.s-_n,Nt),Ue.uTunA.value.set(Nt.x-Ji,Nt.y,Nt.z-ji),Te.at(_r.s+_n,Nt),Ue.uTunB.value.set(Nt.x-Ji,Nt.y,Nt.z-ji),Ue.uTunR.value=Bn(_r.s,"rw")+1.7):(Ue.uTunA.value.set(0,-1e4,0),Ue.uTunB.value.set(0,-1e4,0));let Uh=_r&&Math.abs(oe.s+1-_r.s)<_n-1.5?1:0;en+=(Uh-en)*Math.min(1,st*(Uh?1.6:.7)),Ue.uCarPos.value.set(ne.group.position.x+wt.fx*1.7,ne.group.position.y+.8,ne.group.position.z+wt.fz*1.7),Ue.uCarFwd.value.set(wt.fx,-.05,wt.fz).normalize(),Ue.uHead.value=Uh,ne.update(st,oe.speed,Math.max(ae.night,en),As,Dt,yd),Le.update(ii&&wn>-24&&wn<700?fh(Te,hn):null,de.origin,Et.raise,tn,pi),ge.update(st,Te,de.origin,Tt(.15,.8,ae.night),Bn(hn,"rw")+3.2);let Bh=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ct.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ct.has("rig")){let[Ce,it,rt,xt]=ct.get("rig").split(",").map(Number);Object.assign(Bh[0],{back:Ce,up:it,ahead:rt,lookY:xt})}let br=new z,da=6,wd=oe.cam===2;if(oe.cam===4){bt.t+=st;{let rt=zi(oe.s+30);rt&&Math.abs(oe.s+30-rt.s)<on+70&&bt.type!=="chase"&&bt.type!=="eye"&&(bt.type="chase",bt.t=0,bt.dur=20,Yr=!1)}(bt.t>bt.dur+(bt.type==="road"?8:0)||bt.type==="road"&&bt.anchor&&oe.s>bt.anchor.s+24)&&At();let Ce=ne.group.position,it=bt.type;if(it==="chase"||it==="eye"){let rt=Bh[it==="eye"?2:0];wd=it==="eye",Te.at(oe.s-rt.back,kt),Te.at(oe.s+rt.ahead,Nt),Xn.set(kt.x+kt.rx*oe.u*rt.cu-Ji,kt.y+rt.up,kt.z+kt.rz*oe.u*rt.cu-ji),br.set(Nt.x+Nt.rx*oe.u*rt.lu-Ji,Nt.y+rt.lookY,Nt.z+Nt.rz*oe.u*rt.lu-ji)}else if(it==="side"){Te.at(oe.s+1.5,kt);let rt=Lt(oe.s),xt=rt.city+rt.sakura>.5,$t=Bn(oe.s,"rw"),Jt=bt.sideSign>0?$t+(xt?1.45:3.4):-($t+1.5),nn=kt.y+Ms(oe.s+1.5,Jt,kt.y,$t);Xn.set(kt.x+kt.rx*Jt-Ji,Math.max(nn+1.55,kt.y+1.25),kt.z+kt.rz*Jt-ji),br.set(Ce.x+wt.fx*2.5,Ce.y+.9,Ce.z+wt.fz*2.5),da=4}else if(it==="road"&&bt.anchor)Xn.set(bt.anchor.x-Ji,bt.anchor.y,bt.anchor.z-ji),br.set(Ce.x,Ce.y+.85,Ce.z),da=30;else{Te.at(oe.s-20,kt),Te.at(oe.s+34,Nt);let rt=14+Math.min(bt.t,20)*.35;Xn.set(kt.x+kt.rx*oe.u*.4-Ji,kt.y+rt,kt.z+kt.rz*oe.u*.4-ji),br.set(Nt.x-Ji,Nt.y+1,Nt.z-ji),da=3}}else{let Ce=Bh[oe.cam];Te.at(oe.s-Ce.back,kt),Te.at(oe.s+Ce.ahead,Nt);let it=oe.u*Ce.cu,rt=it+(Ce.side||0);Xn.set(kt.x+kt.rx*rt-Ji,kt.y+Ce.up,kt.z+kt.rz*rt-ji),br.set(Nt.x+Nt.rx*oe.u*Ce.lu-Ji,Nt.y+Ce.lookY,Nt.z+Nt.rz*oe.u*Ce.lu-ji)}ne.group.visible=!wd,oe.cam===3?M.up.set(wt.fx,0,wt.fz):M.up.set(0,1,0),Yr||(hs.copy(Xn),Xs.copy(br),Yr=!0);let Td=1+Math.max(0,oe.speed-12)/12;hs.lerp(Xn,1-Math.exp(-st*da*Td)),Xs.lerp(br,1-Math.exp(-st*Math.min(da,8)*Td));{let Ce=oe.cam===3?0:Math.min(Zt((oe.speed-16)*.22,0,11),Math.max(0,84-Bt));di+=(Ce-di)*Math.min(1,st*1.5),Math.abs(M.fov-(Bt+di))>.02&&(M.fov=Bt+di,M.updateProjectionMatrix())}M.position.copy(hs),M.lookAt(Xs),ct.has("yaw")&&M.rotateY(parseFloat(ct.get("yaw"))*Math.PI/180),ct.has("pitch")&&M.rotateX(parseFloat(ct.get("pitch"))*Math.PI/180),ca.set(wt.fx,0,wt.fz),ua.set(wt.rx,0,wt.rz);{let Ce=ne.group.position,it=M.position.x-Ce.x,rt=M.position.z-Ce.z,xt=oe.cam===4&&bt.type!=="chase"&&bt.type!=="eye",$t=oe.s+it*wt.fx+rt*wt.fz-(xt?10:0),Jt=xt||Vl?40:Math.tan(M.fov*Math.PI/360)*M.aspect*1.08;te.update(Te,$t,oe.u+it*wt.rx+rt*wt.rz,de.origin.x,de.origin.z,Bn(oe.s,"rw"),Jt),oe.grass||te.hide()}let jt=Lt(oe.s),Oh=1+.25*ae.bright*(1-en);c.color.copy(ae.sunCol),c.intensity=ae.sunI/Oh;{let Ce=ae.lightDir;if(T.angleTo(Ce)>.1){let Nn=0;if(fi&&!oe.todPaused)for(let si=1;si<=60&&!(ed(oe.tod+si*.001,I).angleTo(Ce)>.09);si++)Nn=si;ed(oe.tod+Nn*.001,T),L=D=0}w.crossVectors(E,T).normalize(),_.crossVectors(T,w),S.set(ne.group.position.x+wt.fx*26,ne.group.position.y,ne.group.position.z+wt.fz*26),c.target.position.copy(S),c.position.copy(S).addScaledVector(Ce,200);let it=2*d/c.shadow.mapSize.x,rt=T.x/T.y-Ce.x/Ce.y,xt=T.z/T.y-Ce.z/Ce.y;it!==O&&(O=it,L=D=0);{let Nn=Math.round(ne.group.position.y);if(R===null)R=Nn;else if(Math.abs(ne.group.position.y-R)>3){let si=Nn-R;L-=si*(rt*w.x+xt*w.z),D-=si*(rt*_.x+xt*_.z),R=Nn}}let $t=de.origin.x,Jt=de.origin.z,nn=S.dot(w)+$t*w.x+Jt*w.z-L,mi=S.dot(_)+$t*_.x+Jt*_.z-D;S.addScaledVector(w,Math.round(nn/it)*it-nn).addScaledVector(_,Math.round(mi/it)*it-mi),C.copy(S),A.copy(S).addScaledVector(T,200),v.set(1,rt,0,-R*rt,0,1,0,0,0,xt,1,-R*xt,0,0,0,1)}V.target.position.set(ne.group.position.x,ne.group.position.y+.9,ne.group.position.z),V.position.copy(V.target.position).addScaledVector(ae.lightDir,12),k.color.copy(ae.hemiSky),k.groundColor.copy(ae.hemiGround),k.intensity=ae.hemiI/Oh;{let Ce=(1-ae.night)*(1-qn);if(Ce>.001){M.getWorldDirection(at);let it=at.x,rt=at.z,xt=Math.hypot(it,rt)||1,$t=ae.sunDir,Jt=0;for(let mi=-2;mi<=2;mi++){let Nn=mi*.3,si=Math.cos(Nn),Mr=Math.sin(Nn),Kr=(it*si-rt*Mr)/xt,$r=(it*Mr+rt*si)/xt,pa=Math.max(0,Kr*$t.x+$r*$t.z),Jr=pa*pa;Jt+=Jr*Jr*Jr}let nn=Jt/5*(.1+.35*ae.warm)*1.4*Ce*Z;ae.fog.r+=ae.sunCol.r*nn,ae.fog.g+=ae.sunCol.g*nn,ae.fog.b+=ae.sunCol.b*nn}}y.fog.color.copy(ae.fog);let Ed=(jt.city*.0022+jt.sakura*.0019+jt.coast*.0011+jt.country*.0014+jt.mountain*.0017+jt.snow*.0021)*(1+ae.night*.25);y.fog.near=Ed*(1+.55*qn+.45*As),y.fog.far=de.ahead*.92,Ue.uSkyHor.value.copy(ae.horizon),Ue.uSkyZen.value.copy(ae.zenith),Ue.uTime.value=pi,Ue.uWet.value=xr*(1-jt.snow),Ue.uSakWet.value=Fe,yd=Math.max(Ue.uWet.value,Ue.uSakWet.value*jt.sakura)*(1-en);{let Ce=(Ue.uWet.value>.04||Ue.uSakWet.value*Math.max(jt.sakura,ah(oe.s+120,"sakura"))>.04)&&n!=="low"&&en<.5&&he!=="0";if(K.refl.enabled=Ce&&he!=="taps",Ue.uReflOn.value=Ce&&he!=="copy"?1:0,Ce){M.getWorldDirection(ve),ve.y=0,ve.normalize(),ue.copy(M.position).addScaledVector(ve,1e4).project(M),Ue.uHorizon.value=ue.y*.5+.5;let it=Math.max(.5,M.position.y-ne.group.position.y);Ue.uReflK.value=Zt(1-2*it/(5+it),.05,1)}}Ue.uOrigin.value.set(de.origin.x,de.origin.z),Ue.uWind.value=1+.8*As,Ue.uCloudSh.value=(1-qn)*Tt(.04,.3,ae.sunEl)*(1-ae.night),Ue.uCloudSh.value>.001&&J.update(e,M.position.x,M.position.z,de.origin.x,de.origin.z);let wi=j.material.uniforms;if(wi.uBright.value=ae.bright,wi.uNight.value=ae.night,wi.uWarm.value=ae.warm,wi.uTime.value=pi,wi.uCirrusCol.value.copy(ae.cLit).lerp(ae.horizon,.25),wi.uCirrus.value=.6*(1-qn)*(1-.65*Tt(.4,.9,ae.night)),wi.uOvercast.value=qn,wi.uMilky.value=Tt(.55,.95,ae.night)*(1-qn),ae.night>.65&&qn<.3&&Si.p<0&&(Si.next-=st)<0){let Ce=Math.atan2(wt.fx,wt.fz)+(Math.random()-.5)*1.5,it=.45+Math.random()*.6,rt=.22+Math.random()*.2,xt=(Math.random()-.5)*.6,$t=(Jt,nn)=>new z(Math.cos(Jt)*Math.sin(nn),Math.sin(Jt),Math.cos(Jt)*Math.cos(nn));Si.a.copy($t(it,Ce)),Si.b.copy($t(it-rt,Ce+xt)),Si.p=0,Si.next=ct.has("meteors")?1:6+Math.random()*20}Si.p>=0&&(Si.p+=st/.85,Si.p>1.3&&(Si.p=-1)),wi.uMetP.value=Si.p,wi.uMetA.value.copy(Si.a),wi.uMetB.value.copy(Si.b),wi.uDeckLit.value.copy(ae.horizon).lerp(ae.cLit,.35),wi.uDeckDark.value.copy(ae.zenith).lerp(ae.horizon,.25).multiplyScalar(.82),j.position.copy(M.position);{let Ce=!!P&&(oe.pclouds!==0||!W);P&&(P.mesh.visible=Ce,Ce&&P.update(M,st)),W&&(W.group.visible=!Ce,Ce||W.update(M.position,st))}let iv=Q&&oe.band!==0?Q.update(M,ur(oe.s+200),Math.max(1,M.position.y-wt.y+.45),y.fog.near,y.fog.far):0;Q&&oe.band===0&&(Q.mesh.visible=!1),ce.update(M.position,Math.max(jt.snow,Lt(oe.s+600).snow*.7),1-iv);let Xl=0;for(let Ce of[-150,0,250,500,800])Xl=Math.max(Xl,Lt(oe.s+Ce).coast);ie.mesh.visible=Xl>.001,ie.u.uWaves.value=oe.waves,ie.u.uShoreW.value=oe.shore,G.surf.visible=oe.surf>0,G.tetra.visible=oe.tetra>0,ie.update(M.position,pi,Ed*.8,Tt(0,.35,Xl),K.grade.uniforms,Te,oe.s),He.uniforms.uTime.value=pi,He.uniforms.uFogD.value=y.fog.near,He.uniforms.uNight.value=ae.night,He.uniforms.uSpecK.value=1-ae.overcast*.85,Ue.uSunDir.value.copy(ae.lightDir),Ue.uSunCol.value.copy(ae.sunCol);let Fi=Tt(.15,.8,ae.night);G.atlas.emissiveIntensity=.1+Fi*1.05,Ue.uBacklit.value=me*1.6*(1-qn)*(1-ae.night)*Tt(0,.08,ae.sunEl)*(1-Tt(.25,.55,ae.sunEl))*(1-en),Ue.uGhShade.value.set(_t(.8,.3,ae.bright),_t(.8,.85,ae.bright),_t(.8,1.7,ae.bright));{let Ce=Zt((ae.bright-.55)/.4,0,1),it=K.grade.uniforms,rt=Be;if(Ue.uTpK.value=Ce*Ce*(3-2*Ce),Ue.uTpK.value>0)for(let xt=0;xt<6;xt++)Sh(it,rt[xt*3],rt[xt*3+1],rt[xt*3+2],ze[xt])}if(_i.tex){let Ce=ae.bright;_i.uFieldC.value.set(_t(Pe[0],xe[0],Ce),_t(Pe[1],xe[1],Ce),_t(Pe[2],xe[2],Ce)),_i.uFieldCo.value.set(_t(ye[0],re[0],Ce),_t(ye[1],re[1],Ce),_t(ye[2],re[2],Ce)),_i.uFieldSa.value.set(_t(ke[0],Oe[0],Ce),_t(ke[1],Oe[1],Ce),_t(ke[2],Oe[2],Ce))}Ue.uBlShade.value.set(_t(Ze[0],Ne[0],ae.bright),_t(Ze[1],Ne[1],ae.bright),_t(Ze[2],Ne[2],ae.bright)),Ue.uLightsOn.value=tt>=0?tt:Math.max(Tt(.02,.75,ae.night),.3*qn),G.lamp.color.setRGB(.9,.86,.74).lerp(j1,Fi),G.pool.opacity=Fi*.42*(1+.8*xr);{let Ce=ne.group.position,it=ne.lamps,rt=Math.max(Fi,en),xt=0,$t=0,Jt=0,nn=-1e3,mi=0,Nn=0,si=-1e3,Mr=0,Kr=900,$r=900;if(rt>.01){let Cd=Math.floor(oe.s/Wt);for(let kh=Cd-1;kh<=Cd+1;kh++){let Yl=de.chunks.get(kh);if(!Yl||!Yl.lamps)continue;let ma=Yl.lamps,Pd=Yl.group.position;for(let jr=0;jr<ma.length;jr+=4){let zh=ma[jr]+Pd.x,Hh=ma[jr+1],Vh=ma[jr+2]+Pd.z,Wh=(zh-Ce.x)**2+(Hh-Ce.y)**2+(Vh-Ce.z)**2,Zl=ma[jr+3]/(1+.045*Wh);Zl>xt?($t=xt,$r=Kr,Nn=Jt,si=nn,Mr=mi,xt=Zl,Kr=Wh,Jt=zh,nn=Hh,mi=Vh):Zl>$t&&($t=Zl,$r=Wh,Nn=zh,si=Hh,Mr=Vh)}}M.updateMatrixWorld()}let pa=rt*xt*(1+.045*Kr)*(1-Tt(18,30,Math.sqrt(Kr))),Jr=rt*$t*(1+.045*$r)*(1-Tt(18,30,Math.sqrt($r)));it[0].set(Jt,nn,mi,1).applyMatrix4(M.matrixWorldInverse).w=pa,it[1].set(Nn,si,Mr,1).applyMatrix4(M.matrixWorldInverse).w=Jr,ne.lampCol.setRGB(1,.8-.32*en,.52-.38*en),qi.uLampW.value[0].set(Jt,nn,mi,pa),qi.uLampW.value[1].set(Nn,si,Mr,Jr),qi.uLampCol.value.copy(ne.lampCol),ne.head.getWorldPosition(qi.uHeadPos.value),ne.head.target.getWorldPosition(at),qi.uHeadDir.value.copy(at).sub(qi.uHeadPos.value).normalize(),qi.uHeadI.value=ne.head.intensity/60}G.pool.visible=G.pool.opacity>.003,de.lod(oe.s,Hl,Fi>.15,Ts),Ue.uNight.value=Fi,K.bloom.strength=_t(.32,.55,Fi),K.bloom.threshold=_t(1.35,.95,Fi),K.bloom.radius=_t(.55,.35,Fi);{let Ce=Math.max(Fi,en,Tt(.25,.6,ae.warm)*(1-qn));K.bloom.enabled=H&&Ce>.02,K.bloom.strength*=Math.min(1,Ce*4)}e.toneMappingExposure=_t(1,1.15,Fi)*(1+.35*en)*Oh,Xn.copy(M.position).addScaledVector(ae.sunDir,1e3).project(M);let Ys=K.grade.uniforms,sv=Xn.z<1?1:0,rv=Math.max(Math.abs(Xn.x),Math.abs(Xn.y));Ys.uSun.value.set(Xn.x*.5+.5,Xn.y*.5+.5),Ys.uSunVis.value=sv*(1-Tt(1,1.9,rv))*Tt(-.02,.15,ae.sunEl)*(1-ae.night)*(1-qn)*(1-en),Ys.uSat.value=1.22-.24*qn,Ys.uVig.value=.55-.43*ae.bright,Ys.uLo.value.set(-.014+.026*ae.bright,0,.03),Ys.uDay.value=fa(),Ys.uWarm.value=ae.warm,Ys.uTime.value=pi,Ve.update(M.position,pi,As*(1-en)*(1-jt.snow),fa());{let Ce=zi(oe.s+190),it=(jt.city+jt.country+jt.coast)*(1-qn)*(1-xr)*Tt(.6,.9,ae.sunEl)*(oe.mirage??1)*(Ce&&Math.abs(oe.s+190-Ce.s)<330?0:1);je.update(Te,oe.s,de.origin.x,de.origin.z,Bn(oe.s+150,"rw"),it,pi,ae.horizon)}{let Ce=Zt(jt.snow+jt.mountain*.6*Math.max(ae.night,1-Tt(.27,.36,oe.tod)),0,1)*(1-en);Gt.copy(ae.fog).multiplyScalar(.92),Ft.copy(ae.sunCol).multiplyScalar(Math.min(1,ae.sunI/3)*(1-qn)*.6);let it=Math.cos(ne.group.rotation.y),rt=Math.sin(ne.group.rotation.y),xt=ne.group.position;hi.set(xt.x-1.75*rt,xt.y+.95,xt.z-1.75*it,Math.max(ae.night,en)*(.5+1.2*Dt.brake)),nt.update(st,ne.group,oe.speed,Ue.uWet.value*(1-en),jt.snow*(1-en),Ce,Gt,Ft,hi,M.position,oe.spray)}Re.update(M.position,pi,jt.snow*(.3+.7*qn)*(1-en),fa()),Gn.setFog(y.fog.near),Gn.update(st,pi,M.position,ca,ua,jt,fa(),As,ne.group.position);let ov=performance.now();F.update(st,pi,M.position,ca,ua,jt.sakura*(1-en),wt.y,Fi,(jt.country+jt.sakura*.4)*(1-As)*(1-en),jt.mountain*(1-en));let av=performance.now();if(se){Te.at(hn,Nt);let Ce=Math.hypot(Nt.x-de.origin.x-M.position.x,Nt.z-de.origin.z-M.position.z),it=ge.st.active?ge.group.position.distanceTo(M.position):1e9,rt=oe.speed/15;se.update(rt<1.5?rt:1.5+(rt-1.5)*.4,jt,fa(),{rush:Zt((oe.speed-25)/40,0,1),bell:tn?Math.pow(Zt(1-Ce/260,0,1),1.5):0,train:Math.pow(Zt(1-it/230,0,1),2),rain:As*(1-en)*(1-jt.snow),wetRoad:Ue.uWet.value*(1-en),speed:oe.speed,load:Zt(Dt.lon/3,0,1),roof:oe.cam!==2,tunnel:en,water:(()=>{let xt=ki(oe.s);return Math.max(xt?1-Tt(12,150,Math.abs(oe.s-xt.s)):0,jt.mountain*.45)})(),dusk:ae.warm*(oe.tod>.5?1:.3)})}Qe(pn(oe.s+40)),St&&(e.info.autoReset=!1,e.info.reset());let ql=null;St&&St.tq&&(ql=St.gl.createQuery(),St.gl.beginQuery(St.tq.TIME_ELAPSED_EXT,ql));let Ad=performance.now();K.composer.render(st);let Rd=performance.now();if(ql){let Ce=St.gl;for(Ce.endQuery(St.tq.TIME_ELAPSED_EXT),St.pend.push(ql);St.pend.length&&Ce.getQueryParameter(St.pend[0],Ce.QUERY_RESULT_AVAILABLE);){let it=St.pend.shift(),rt=Ce.getQueryParameter(it,Ce.QUERY_RESULT);Ce.deleteQuery(it),Ce.getParameter(St.tq.GPU_DISJOINT_EXT)||(St.gpu=rt/1e6,St.gpuN++,St.gpuSum+=St.gpu,St.gpu>St.gpuMax&&(St.gpuMax=St.gpu))}}let Zr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Zr.world=Zr.world*.95+(Sd-Md)*.05,Zr.parts=Zr.parts*.95+(av-ov)*.05,Zr.render=Zr.render*.95+(Rd-Ad)*.05,Fh=Fh*.95+(performance.now()-yt)*.05,window.__ft=Fh,St){let Ce=e.info,it=performance.now()-yt,rt={t:+pi.toFixed(2),s:Math.round(oe.s),total:+it.toFixed(1),world:+(Sd-Md).toFixed(1),render:+(Rd-Ad).toFixed(1),gpu:+(St.gpu||0).toFixed(1),progs:Ce.programs.length-St.progs,geos:Ce.memory.geometries-St.geos,tex:Ce.memory.textures-St.tex,calls:Ce.render.calls,tris:Ce.render.triangles};rt.progs>0&&fi&&(rt.newProgs=Ce.programs.slice(-rt.progs).map(xt=>(xt.name||"")+":"+String(xt.cacheKey).slice(0,60))),St.progs=Ce.programs.length,St.geos=Ce.memory.geometries,St.tex=Ce.memory.textures,St.frames++,St.sum+=it,it>St.max&&(St.max=it),it>12&&fi&&St.spikes.push(rt),St.last=rt}if((We+=st)>.25){We=0,Nh.textContent=Math.round(oe.speed*3.6),Wl.textContent=(oe.dist/1e3).toFixed(1);let Ce=Math.floor(oe.tod*1440);U.textContent=`${String(Math.floor(Ce/60)).padStart(2,"0")}:${String(Ce%60).padStart(2,"0")}`}xd++,fi&&xd>150&&st>.03?ha+=st:ha=Math.max(0,ha-st*.5),ha>3&&!ct.has("q")&&(ha=0,gd())}window.__dbg={renderer:e,st:oe,scene:y,camera:M,world:de,TOD:ae,KEYS:$o,X:Et,train:ge,weather:De,U:Ue,birds:Gn,cine:bt,post:K,car:ne,sun:c,M:G,clouds:W,pclouds:P,band:Q,sky:j,mountains:ce,shadowDir:T,CM:Dt,spray:nt,grass:te,sea:ie,get audio(){return se}},aa(""),fe.classList.add("ready"),ct.has("auto")&&et(),requestAnimationFrame(bd)}u3().catch(i=>{console.error(i),aa("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
