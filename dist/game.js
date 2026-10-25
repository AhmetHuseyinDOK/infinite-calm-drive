var fm=0,h0=1,dm=2;var Vr=1,pm=2,Wo=3,Es=0,Kn=1,Tn=2,ui=0,Go=1,Xi=2,f0=3,d0=4,mm=5;var Wr=100,gm=101,vm=102,xm=103,ym=104,_m=200,bm=201,Mm=202,Sm=203,p0=204,m0=205,wm=206,Tm=207,Em=208,Am=209,Rm=210,Cm=211,Pm=212,Im=213,Lm=214,Yc=0,Zc=1,Kc=2,Ao=3,$c=4,Jc=5,jc=6,Qc=7,g0=0,Dm=1,Nm=2,ds=0,v0=1,x0=2,y0=3,_0=4,b0=5,M0=6,yl=7;var S0=300,yr=301,Gr=302,Iu=303,Lu=304,_l=306,hs=1e3,bs=1001,eu=1002,Nn=1003,Fm=1004;var bl=1005;var Ot=1006,Du=1007;var zn=1008;var si=1009,w0=1010,T0=1011,qo=1012,Nu=1013,ps=1014,Yi=1015,En=1016,Fu=1017,Uu=1018,Xo=1020,E0=35902,A0=35899,R0=1021,C0=1022,ri=1023,Ms=1026,_r=1027,ms=1028,Bu=1029,br=1030,Ou=1031;var ku=1033,Ml=33776,Sl=33777,wl=33778,Tl=33779,zu=35840,Hu=35841,Vu=35842,Wu=35843,Gu=36196,qu=37492,Xu=37496,Yu=37488,Zu=37489,El=37490,Ku=37491,$u=37808,Ju=37809,ju=37810,Qu=37811,eh=37812,th=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,lh=37820,ch=37821,uh=36492,hh=36494,fh=36495,dh=36283,ph=36284,Al=36285,mh=36286;var qa=2300,tu=2301,Gc=2302,Qf=2303,e0=2400,t0=2401,n0=2402;var Um=3200;var gh=0,Bm=1,hi="",Gt="srgb",Xa="srgb-linear",Ya="linear",qt="srgb";var qc=7680;var Om=519,km=512,zm=513,Hm=514,vh=515,Vm=516,Wm=517,xh=518,Gm=519,qm=35044;var P0="300 es",us=2e3,Ro=2001;function Fx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ux(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xm(){let i=Co("canvas");return i.style.display="block",i}var Ip={},Po=null;function I0(...i){let e="THREE."+i.shift();Po?Po("log",e,...i):console.log(e,...i)}function Ym(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ft(...i){i=Ym(i);let e="THREE."+i.shift();if(Po)Po("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function gt(...i){i=Ym(i);let e="THREE."+i.shift();if(Po)Po("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ur(...i){let e=i.join(" ");e in Ip||(Ip[e]=!0,ft(...i))}function Zm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Km={[Yc]:Zc,[Kc]:jc,[$c]:Qc,[Ao]:Jc,[Zc]:Yc,[jc]:Kc,[Qc]:$c,[Jc]:Ao},Ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ef=Math.PI/180,Za=180/Math.PI;function Yo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qn[i&255]+Qn[i>>8&255]+Qn[i>>16&255]+Qn[i>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[t&63|128]+Qn[t>>8&255]+"-"+Qn[t>>16&255]+Qn[t>>24&255]+Qn[n&255]+Qn[n>>8&255]+Qn[n>>16&255]+Qn[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Bx(i,e){return(i%e+e)%e}function Af(i,e,t){return(1-t)*i+t*e}function Na(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var B0=class B0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};B0.prototype.isVector2=!0;var Fe=B0,yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let a=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3],m=r[o+0],x=r[o+1],_=r[o+2],M=r[o+3];if(p!==M||a!==m||u!==x||h!==_){let c=a*m+u*x+h*_+p*M;c<0&&(m=-m,x=-x,_=-_,M=-M,c=-c);let f=1-l;if(c<.9995){let d=Math.acos(c),g=Math.sin(d);f=Math.sin(f*d)/g,l=Math.sin(l*d)/g,a=a*f+m*l,u=u*f+x*l,h=h*f+_*l,p=p*f+M*l}else{a=a*f+m*l,u=u*f+x*l,h=h*f+_*l,p=p*f+M*l;let d=1/Math.sqrt(a*a+u*u+h*h+p*p);a*=d,u*=d,h*=d,p*=d}}e[t]=a,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],a=n[s+1],u=n[s+2],h=n[s+3],p=r[o],m=r[o+1],x=r[o+2],_=r[o+3];return e[t]=l*_+h*p+a*x-u*m,e[t+1]=a*_+h*m+u*p-l*x,e[t+2]=u*_+h*x+l*m-a*p,e[t+3]=h*_-l*p-a*m-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,u=l(n/2),h=l(s/2),p=l(r/2),m=a(n/2),x=a(s/2),_=a(r/2);switch(o){case"XYZ":this._x=m*h*p+u*x*_,this._y=u*x*p-m*h*_,this._z=u*h*_+m*x*p,this._w=u*h*p-m*x*_;break;case"YXZ":this._x=m*h*p+u*x*_,this._y=u*x*p-m*h*_,this._z=u*h*_-m*x*p,this._w=u*h*p+m*x*_;break;case"ZXY":this._x=m*h*p-u*x*_,this._y=u*x*p+m*h*_,this._z=u*h*_+m*x*p,this._w=u*h*p-m*x*_;break;case"ZYX":this._x=m*h*p-u*x*_,this._y=u*x*p+m*h*_,this._z=u*h*_-m*x*p,this._w=u*h*p+m*x*_;break;case"YZX":this._x=m*h*p+u*x*_,this._y=u*x*p+m*h*_,this._z=u*h*_-m*x*p,this._w=u*h*p-m*x*_;break;case"XZY":this._x=m*h*p-u*x*_,this._y=u*x*p-m*h*_,this._z=u*h*_+m*x*p,this._w=u*h*p+m*x*_;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],a=t[9],u=t[2],h=t[6],p=t[10],m=n+l+p;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(h-a)*x,this._y=(r-u)*x,this._z=(o-s)*x}else if(n>l&&n>p){let x=2*Math.sqrt(1+n-l-p);this._w=(h-a)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+u)/x}else if(l>p){let x=2*Math.sqrt(1+l-n-p);this._w=(r-u)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(a+h)/x}else{let x=2*Math.sqrt(1+p-n-l);this._w=(o-s)/x,this._x=(r+u)/x,this._y=(a+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,a=t._y,u=t._z,h=t._w;return this._x=n*h+o*l+s*u-r*a,this._y=s*h+o*a+r*l-n*u,this._z=r*h+o*u+n*a-s*l,this._w=o*h-n*l-s*a-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){let u=Math.acos(l),h=Math.sin(u);a=Math.sin(a*u)/h,t=Math.sin(t*u)/h,this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O0=class O0{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,a=e.w,u=2*(o*s-l*n),h=2*(l*t-r*s),p=2*(r*n-o*t);return this.x=t+a*u+o*p-l*h,this.y=n+a*h+l*u-r*p,this.z=s+a*p+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=s*a-r*l,this.y=r*o-n*a,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rf.copy(this).projectOnVector(e),this.sub(Rf)}reflect(e){return this.sub(Rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};O0.prototype.isVector3=!0;var H=O0,Rf=new H,Lp=new yn,k0=class k0{constructor(e,t,n,s,r,o,l,a,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u)}set(e,t,n,s,r,o,l,a,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],u=n[1],h=n[4],p=n[7],m=n[2],x=n[5],_=n[8],M=s[0],c=s[3],f=s[6],d=s[1],g=s[4],v=s[7],b=s[2],T=s[5],w=s[8];return r[0]=o*M+l*d+a*b,r[3]=o*c+l*g+a*T,r[6]=o*f+l*v+a*w,r[1]=u*M+h*d+p*b,r[4]=u*c+h*g+p*T,r[7]=u*f+h*v+p*w,r[2]=m*M+x*d+_*b,r[5]=m*c+x*g+_*T,r[8]=m*f+x*v+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8];return t*o*h-t*l*u-n*r*h+n*l*a+s*r*u-s*o*a}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=h*o-l*u,m=l*a-h*r,x=u*r-o*a,_=t*p+n*m+s*x;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=p*M,e[1]=(s*u-h*n)*M,e[2]=(l*n-s*o)*M,e[3]=m*M,e[4]=(h*t-s*a)*M,e[5]=(s*r-l*t)*M,e[6]=x*M,e[7]=(n*a-u*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let a=Math.cos(r),u=Math.sin(r);return this.set(n*a,n*u,-n*(a*o+u*l)+o+e,-s*u,s*a,-s*(-u*o+a*l)+l+t,0,0,1),this}scale(e,t){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cf.makeScale(e,t)),this}rotate(e){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cf.makeRotation(-e)),this}translate(e,t){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};k0.prototype.isMatrix3=!0;var vt=k0,Cf=new vt,Dp=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Np=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ox(){let i={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===qt&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===qt&&(s.r=To(s.r),s.g=To(s.g),s.b=To(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xa]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:Dp,fromXYZ:Np,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:qt,toXYZ:Dp,fromXYZ:Np,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var Pt=Ox();function Vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function To(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var co,nu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{co===void 0&&(co=Co("canvas")),co.width=e.width,co.height=e.height;let s=co.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=co}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Co("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vs(t[n]/255)*255):t[n]=Vs(t[n]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kx=0,Io=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Pf(s[o].image)):r.push(Pf(s[o]))}else r=Pf(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Pf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}var zx=0,If=new H,ti=class i extends Ss{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bs,s=bs,r=Ot,o=zn,l=ri,a=si,u=i.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Yo(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(If).x}get height(){return this.source.getSize(If).y}get depth(){return this.source.getSize(If).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=S0;ti.DEFAULT_ANISOTROPY=1;var z0=class z0{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,a=e.elements,u=a[0],h=a[4],p=a[8],m=a[1],x=a[5],_=a[9],M=a[2],c=a[6],f=a[10];if(Math.abs(h-m)<.01&&Math.abs(p-M)<.01&&Math.abs(_-c)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+M)<.1&&Math.abs(_+c)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(u+1)/2,v=(x+1)/2,b=(f+1)/2,T=(h+m)/4,w=(p+M)/4,y=(_+c)/4;return g>v&&g>b?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=T/n,r=w/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=y/r),this.set(n,s,r,t),this}let d=Math.sqrt((c-_)*(c-_)+(p-M)*(p-M)+(m-h)*(m-h));return Math.abs(d)<.001&&(d=1),this.x=(c-_)/d,this.y=(p-M)/d,this.z=(m-h)/d,this.w=Math.acos((u+x+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};z0.prototype.isVector4=!0;var dt=z0,iu=class extends Ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new ti(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends iu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ka=class extends ti{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var su=class extends ti{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pu=class Pu{constructor(e,t,n,s,r,o,l,a,u,h,p,m,x,_,M,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u,h,p,m,x,_,M,c)}set(e,t,n,s,r,o,l,a,u,h,p,m,x,_,M,c){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=l,f[13]=a,f[2]=u,f[6]=h,f[10]=p,f[14]=m,f[3]=x,f[7]=_,f[11]=M,f[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pu().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/uo.setFromMatrixColumn(e,0).length(),r=1/uo.setFromMatrixColumn(e,1).length(),o=1/uo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let m=o*h,x=o*p,_=l*h,M=l*p;t[0]=a*h,t[4]=-a*p,t[8]=u,t[1]=x+_*u,t[5]=m-M*u,t[9]=-l*a,t[2]=M-m*u,t[6]=_+x*u,t[10]=o*a}else if(e.order==="YXZ"){let m=a*h,x=a*p,_=u*h,M=u*p;t[0]=m+M*l,t[4]=_*l-x,t[8]=o*u,t[1]=o*p,t[5]=o*h,t[9]=-l,t[2]=x*l-_,t[6]=M+m*l,t[10]=o*a}else if(e.order==="ZXY"){let m=a*h,x=a*p,_=u*h,M=u*p;t[0]=m-M*l,t[4]=-o*p,t[8]=_+x*l,t[1]=x+_*l,t[5]=o*h,t[9]=M-m*l,t[2]=-o*u,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){let m=o*h,x=o*p,_=l*h,M=l*p;t[0]=a*h,t[4]=_*u-x,t[8]=m*u+M,t[1]=a*p,t[5]=M*u+m,t[9]=x*u-_,t[2]=-u,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){let m=o*a,x=o*u,_=l*a,M=l*u;t[0]=a*h,t[4]=M-m*p,t[8]=_*p+x,t[1]=p,t[5]=o*h,t[9]=-l*h,t[2]=-u*h,t[6]=x*p+_,t[10]=m-M*p}else if(e.order==="XZY"){let m=o*a,x=o*u,_=l*a,M=l*u;t[0]=a*h,t[4]=-p,t[8]=u*h,t[1]=m*p+M,t[5]=o*h,t[9]=x*p-_,t[2]=_*p-x,t[6]=l*h,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hx,e,Vx)}lookAt(e,t,n){let s=this.elements;return Ii.subVectors(e,t),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),ar.crossVectors(n,Ii),ar.lengthSq()===0&&(Math.abs(n.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),ar.crossVectors(n,Ii)),ar.normalize(),xc.crossVectors(Ii,ar),s[0]=ar.x,s[4]=xc.x,s[8]=Ii.x,s[1]=ar.y,s[5]=xc.y,s[9]=Ii.y,s[2]=ar.z,s[6]=xc.z,s[10]=Ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],u=n[12],h=n[1],p=n[5],m=n[9],x=n[13],_=n[2],M=n[6],c=n[10],f=n[14],d=n[3],g=n[7],v=n[11],b=n[15],T=s[0],w=s[4],y=s[8],S=s[12],E=s[1],C=s[5],P=s[9],L=s[13],R=s[2],I=s[6],D=s[10],F=s[14],N=s[3],U=s[7],W=s[11],k=s[15];return r[0]=o*T+l*E+a*R+u*N,r[4]=o*w+l*C+a*I+u*U,r[8]=o*y+l*P+a*D+u*W,r[12]=o*S+l*L+a*F+u*k,r[1]=h*T+p*E+m*R+x*N,r[5]=h*w+p*C+m*I+x*U,r[9]=h*y+p*P+m*D+x*W,r[13]=h*S+p*L+m*F+x*k,r[2]=_*T+M*E+c*R+f*N,r[6]=_*w+M*C+c*I+f*U,r[10]=_*y+M*P+c*D+f*W,r[14]=_*S+M*L+c*F+f*k,r[3]=d*T+g*E+v*R+b*N,r[7]=d*w+g*C+v*I+b*U,r[11]=d*y+g*P+v*D+b*W,r[15]=d*S+g*L+v*F+b*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],a=e[9],u=e[13],h=e[2],p=e[6],m=e[10],x=e[14],_=e[3],M=e[7],c=e[11],f=e[15],d=a*x-u*m,g=l*x-u*p,v=l*m-a*p,b=o*x-u*h,T=o*m-a*h,w=o*p-l*h;return t*(M*d-c*g+f*v)-n*(_*d-c*b+f*T)+s*(_*g-M*b+f*w)-r*(_*v-M*T+c*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],a=e[2],u=e[6],h=e[10];return t*(o*h-l*u)-n*(r*h-l*a)+s*(r*u-o*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=e[9],m=e[10],x=e[11],_=e[12],M=e[13],c=e[14],f=e[15],d=t*l-n*o,g=t*a-s*o,v=t*u-r*o,b=n*a-s*l,T=n*u-r*l,w=s*u-r*a,y=h*M-p*_,S=h*c-m*_,E=h*f-x*_,C=p*c-m*M,P=p*f-x*M,L=m*f-x*c,R=d*L-g*P+v*C+b*E-T*S+w*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=(l*L-a*P+u*C)*I,e[1]=(s*P-n*L-r*C)*I,e[2]=(M*w-c*T+f*b)*I,e[3]=(m*T-p*w-x*b)*I,e[4]=(a*E-o*L-u*S)*I,e[5]=(t*L-s*E+r*S)*I,e[6]=(c*v-_*w-f*g)*I,e[7]=(h*w-m*v+x*g)*I,e[8]=(o*P-l*E+u*y)*I,e[9]=(n*E-t*P-r*y)*I,e[10]=(_*T-M*v+f*d)*I,e[11]=(p*v-h*T-x*d)*I,e[12]=(l*S-o*C-a*y)*I,e[13]=(t*C-n*S+s*y)*I,e[14]=(M*g-_*b-c*d)*I,e[15]=(h*b-p*g+m*d)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,u=r*o,h=r*l;return this.set(u*o+n,u*l-s*a,u*a+s*l,0,u*l+s*a,h*l+n,h*a-s*o,0,u*a-s*l,h*a+s*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,u=r+r,h=o+o,p=l+l,m=r*u,x=r*h,_=r*p,M=o*h,c=o*p,f=l*p,d=a*u,g=a*h,v=a*p,b=n.x,T=n.y,w=n.z;return s[0]=(1-(M+f))*b,s[1]=(x+v)*b,s[2]=(_-g)*b,s[3]=0,s[4]=(x-v)*T,s[5]=(1-(m+f))*T,s[6]=(c+d)*T,s[7]=0,s[8]=(_+g)*w,s[9]=(c-d)*w,s[10]=(1-(m+M))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=uo.set(s[0],s[1],s[2]).length(),l=uo.set(s[4],s[5],s[6]).length(),a=uo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),os.copy(this);let u=1/o,h=1/l,p=1/a;return os.elements[0]*=u,os.elements[1]*=u,os.elements[2]*=u,os.elements[4]*=h,os.elements[5]*=h,os.elements[6]*=h,os.elements[8]*=p,os.elements[9]*=p,os.elements[10]*=p,t.setFromRotationMatrix(os),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,s,r,o,l=us,a=!1){let u=this.elements,h=2*r/(t-e),p=2*r/(n-s),m=(t+e)/(t-e),x=(n+s)/(n-s),_,M;if(a)_=r/(o-r),M=o*r/(o-r);else if(l===us)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(l===Ro)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=us,a=!1){let u=this.elements,h=2/(t-e),p=2/(n-s),m=-(t+e)/(t-e),x=-(n+s)/(n-s),_,M;if(a)_=1/(o-r),M=o/(o-r);else if(l===us)_=-2/(o-r),M=-(o+r)/(o-r);else if(l===Ro)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=_,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Pu.prototype.isMatrix4=!0;var st=Pu,uo=new H,os=new st,Hx=new H(0,0,0),Vx=new H(1,1,1),ar=new H,xc=new H,Ii=new H,Fp=new st,Up=new yn,ni=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],a=s[1],u=s[5],h=s[9],p=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(a,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Up.setFromEuler(this),this.setFromQuaternion(Up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var $a=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wx=0,Bp=new H,ho=new yn,Bs=new st,yc=new H,Fa=new H,Gx=new H,qx=new yn,Op=new H(1,0,0),kp=new H(0,1,0),zp=new H(0,0,1),Hp={type:"added"},Xx={type:"removed"},fo={type:"childadded",child:null},Lf={type:"childremoved",child:null},Fn=class i extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new ni,n=new yn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new vt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,t){return ho.setFromAxisAngle(e,t),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,t){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yc.copy(e):yc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bs.lookAt(Fa,yc,this.up):Bs.lookAt(yc,Fa,this.up),this.quaternion.setFromRotationMatrix(Bs),s&&(Bs.extractRotation(s.matrixWorld),ho.setFromRotationMatrix(Bs),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),fo.child=e,this.dispatchEvent(fo),fo.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xx),Lf.child=e,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let a=l.shapes;if(Array.isArray(a))for(let u=0,h=a.length;u<h;u++){let p=a[u];r(e.shapes,p)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let a=0,u=this.material.length;a<u;a++)l.push(r(e.materials,this.material[a]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let a=this.animations[l];s.animations.push(r(e.animations,a))}}if(t){let l=o(e.geometries),a=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),x=o(e.animations),_=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(l){let a=[];for(let u in l){let h=l[u];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fn.DEFAULT_UP=new H(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yx={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,a=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let M of e.hand.values()){let c=t.getJointPose(M,n),f=this._getHandJoint(u,M);c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=c.radius),f.visible=c!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=h.position.distanceTo(p.position),x=.02,_=.005;u.inputState.pinching&&m>x+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=x-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Df(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Pt.workingColorSpace){if(e=Bx(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Df(o,r,e+1/3),this.g=Df(o,r,e),this.b=Df(o,r,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=$m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Pt.workingToColorSpace(ei.copy(this),e),Math.round(Rt(ei.r*255,0,255))*65536+Math.round(Rt(ei.g*255,0,255))*256+Math.round(Rt(ei.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(ei.copy(this),t);let n=ei.r,s=ei.g,r=ei.b,o=Math.max(n,s,r),l=Math.min(n,s,r),a,u,h=(l+o)/2;if(l===o)a=0,u=0;else{let p=o-l;switch(u=h<=.5?p/(o+l):p/(2-o-l),o){case n:a=(s-r)/p+(s<r?6:0);break;case s:a=(r-n)/p+2;break;case r:a=(n-s)/p+4;break}a/=6}return e.h=a,e.s=u,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=Gt){Pt.workingToColorSpace(ei.copy(this),e);let t=ei.r,n=ei.g,s=ei.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(_c);let n=Af(lr.h,_c.h,t),s=Af(lr.s,_c.s,t),r=Af(lr.l,_c.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new ue;ue.NAMES=$m;var Ja=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Br=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},as=new H,Os=new H,Nf=new H,ks=new H,po=new H,mo=new H,Vp=new H,Ff=new H,Uf=new H,Bf=new H,Of=new dt,kf=new dt,zf=new dt,fr=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),as.subVectors(e,t),s.cross(as);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){as.subVectors(s,t),Os.subVectors(n,t),Nf.subVectors(e,t);let o=as.dot(as),l=as.dot(Os),a=as.dot(Nf),u=Os.dot(Os),h=Os.dot(Nf),p=o*u-l*l;if(p===0)return r.set(0,0,0),null;let m=1/p,x=(u*a-l*h)*m,_=(o*h-l*a)*m;return r.set(1-x-_,_,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ks)===null?!1:ks.x>=0&&ks.y>=0&&ks.x+ks.y<=1}static getInterpolation(e,t,n,s,r,o,l,a){return this.getBarycoord(e,t,n,s,ks)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,ks.x),a.addScaledVector(o,ks.y),a.addScaledVector(l,ks.z),a)}static getInterpolatedAttribute(e,t,n,s,r,o){return Of.setScalar(0),kf.setScalar(0),zf.setScalar(0),Of.fromBufferAttribute(e,t),kf.fromBufferAttribute(e,n),zf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Of,r.x),o.addScaledVector(kf,r.y),o.addScaledVector(zf,r.z),o}static isFrontFacing(e,t,n,s){return as.subVectors(n,t),Os.subVectors(e,t),as.cross(Os).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return as.subVectors(this.c,this.b),Os.subVectors(this.a,this.b),as.cross(Os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;po.subVectors(s,n),mo.subVectors(r,n),Ff.subVectors(e,n);let a=po.dot(Ff),u=mo.dot(Ff);if(a<=0&&u<=0)return t.copy(n);Uf.subVectors(e,s);let h=po.dot(Uf),p=mo.dot(Uf);if(h>=0&&p<=h)return t.copy(s);let m=a*p-h*u;if(m<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(po,o);Bf.subVectors(e,r);let x=po.dot(Bf),_=mo.dot(Bf);if(_>=0&&x<=_)return t.copy(r);let M=x*u-a*_;if(M<=0&&u>=0&&_<=0)return l=u/(u-_),t.copy(n).addScaledVector(mo,l);let c=h*_-x*p;if(c<=0&&p-h>=0&&x-_>=0)return Vp.subVectors(r,s),l=(p-h)/(p-h+(x-_)),t.copy(s).addScaledVector(Vp,l);let f=1/(c+M+m);return o=M*f,l=m*f,t.copy(n).addScaledVector(po,o).addScaledVector(mo,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_i=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ls.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ls.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ls.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ls):ls.fromBufferAttribute(r,o),ls.applyMatrix4(e.matrixWorld),this.expandByPoint(ls);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bc.copy(n.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ls),ls.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Mc.subVectors(this.max,Ua),go.subVectors(e.a,Ua),vo.subVectors(e.b,Ua),xo.subVectors(e.c,Ua),cr.subVectors(vo,go),ur.subVectors(xo,vo),Lr.subVectors(go,xo);let t=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Lr.z,Lr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Lr.z,0,-Lr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Lr.y,Lr.x,0];return!Hf(t,go,vo,xo,Mc)||(t=[1,0,0,0,1,0,0,0,1],!Hf(t,go,vo,xo,Mc))?!1:(Sc.crossVectors(cr,ur),t=[Sc.x,Sc.y,Sc.z],Hf(t,go,vo,xo,Mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ls).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ls).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zs=[new H,new H,new H,new H,new H,new H,new H,new H],ls=new H,bc=new _i,go=new H,vo=new H,xo=new H,cr=new H,ur=new H,Lr=new H,Ua=new H,Mc=new H,Sc=new H,Dr=new H;function Hf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Dr.fromArray(i,r);let l=s.x*Math.abs(Dr.x)+s.y*Math.abs(Dr.y)+s.z*Math.abs(Dr.z),a=e.dot(Dr),u=t.dot(Dr),h=n.dot(Dr);if(Math.max(-Math.max(a,u,h),Math.min(a,u,h))>l)return!1}return!0}var Dn=new H,wc=new Fe,Zx=0,_t=class extends Ss{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qm,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wc.fromBufferAttribute(this,t),wc.applyMatrix3(e),this.setXY(t,wc.x,wc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Na(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=yi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=yi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=yi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yi(t,this.array),n=yi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yi(t,this.array),n=yi(n,this.array),s=yi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yi(t,this.array),n=yi(n,this.array),s=yi(s,this.array),r=yi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ja=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qa=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kx=new _i,Ba=new H,Vf=new H,bi=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);let t=Ba.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ba,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(Vf)),this.expandByPoint(Ba.copy(e.center).sub(Vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$x=0,Gi=new st,Wf=new Fn,yo=new H,Li=new _i,Oa=new _i,Gn=new H,xt=class i extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fx(e)?Qa:ja)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,t,n){return Gi.makeTranslation(e,t,n),this.applyMatrix4(Gi),this}scale(e,t,n){return Gi.makeScale(e,t,n),this.applyMatrix4(Gi),this}lookAt(e){return Wf.lookAt(e),Wf.updateMatrix(),this.applyMatrix4(Wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Li.setFromBufferAttribute(r),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];Oa.setFromBufferAttribute(l),this.morphTargetsRelative?(Gn.addVectors(Li.min,Oa.min),Li.expandByPoint(Gn),Gn.addVectors(Li.max,Oa.max),Li.expandByPoint(Gn)):(Li.expandByPoint(Oa.min),Li.expandByPoint(Oa.max))}Li.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Gn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gn));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],a=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Gn.fromBufferAttribute(l,u),a&&(yo.fromBufferAttribute(e,u),Gn.add(yo)),s=Math.max(s,n.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],a=[];for(let y=0;y<n.count;y++)l[y]=new H,a[y]=new H;let u=new H,h=new H,p=new H,m=new Fe,x=new Fe,_=new Fe,M=new H,c=new H;function f(y,S,E){u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,E),m.fromBufferAttribute(r,y),x.fromBufferAttribute(r,S),_.fromBufferAttribute(r,E),h.sub(u),p.sub(u),x.sub(m),_.sub(m);let C=1/(x.x*_.y-_.x*x.y);isFinite(C)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(p,-x.y).multiplyScalar(C),c.copy(p).multiplyScalar(x.x).addScaledVector(h,-_.x).multiplyScalar(C),l[y].add(M),l[S].add(M),l[E].add(M),a[y].add(c),a[S].add(c),a[E].add(c))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let y=0,S=d.length;y<S;++y){let E=d[y],C=E.start,P=E.count;for(let L=C,R=C+P;L<R;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let g=new H,v=new H,b=new H,T=new H;function w(y){b.fromBufferAttribute(s,y),T.copy(b);let S=l[y];g.copy(S),g.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(T,S);let C=v.dot(a[y])<0?-1:1;o.setXYZW(y,g.x,g.y,g.z,C)}for(let y=0,S=d.length;y<S;++y){let E=d[y],C=E.start,P=E.count;for(let L=C,R=C+P;L<R;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);let s=new H,r=new H,o=new H,l=new H,a=new H,u=new H,h=new H,p=new H;if(e)for(let m=0,x=e.count;m<x;m+=3){let _=e.getX(m+0),M=e.getX(m+1),c=e.getX(m+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,c),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),l.fromBufferAttribute(n,_),a.fromBufferAttribute(n,M),u.fromBufferAttribute(n,c),l.add(h),a.add(h),u.add(h),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(c,u.x,u.y,u.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(l,a){let u=l.array,h=l.itemSize,p=l.normalized,m=new u.constructor(a.length*h),x=0,_=0;for(let M=0,c=a.length;M<c;M++){l.isInterleavedBufferAttribute?x=a[M]*l.data.stride+l.offset:x=a[M]*h;for(let f=0;f<h;f++)m[_++]=u[x++]}return new _t(m,h,p)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let a=s[l],u=e(a,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let a=[],u=r[l];for(let h=0,p=u.length;h<p;h++){let m=u[h],x=e(m,n);a.push(x)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,a=o.length;l<a;l++){let u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let u in a)a[u]!==void 0&&(e[u]=a[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let a in n){let u=n[a];e.data.attributes[a]=u.toJSON(e.data)}let s={},r=!1;for(let a in this.morphAttributes){let u=this.morphAttributes[a],h=[];for(let p=0,m=u.length;p<m;p++){let x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(s[a]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],p=r[u];for(let m=0,x=p.length;m<x;m++)h.push(p[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gf=new H,Jx=new H,jx=new vt,cs=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Gf.subVectors(n,t).cross(Jx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Gf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jx.getNormalMatrix(e),s=this.coplanarPoint(Gf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qx=0,ws=class extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Go,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=p0,this.blendDst=m0,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qc,this.stencilZFail=qc,this.stencilZPass=qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let a=r[l];delete a.metadata,o.push(a)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new cs().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Hs=new H,qf=new H,Tc=new H,Ec=new H,Do=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hs.copy(this.origin).addScaledVector(this.direction,t),Hs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qf.copy(e).add(t).multiplyScalar(.5),Tc.copy(t).sub(e).normalize(),Ec.copy(this.origin).sub(qf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Tc),l=Ec.dot(this.direction),a=-Ec.dot(Tc),u=Ec.lengthSq(),h=Math.abs(1-o*o),p,m,x,_;if(h>0)if(p=o*a-l,m=o*l-a,_=r*h,p>=0)if(m>=-_)if(m<=_){let M=1/h;p*=M,m*=M,x=p*(p+o*m+2*l)+m*(o*p+m+2*a)+u}else m=r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m=-r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m<=-_?(p=Math.max(0,-(-o*r+l)),m=p>0?-r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u):m<=_?(p=0,m=Math.min(Math.max(-r,-a),r),x=m*(m+2*a)+u):(p=Math.max(0,-(o*r+l)),m=p>0?r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u);else m=o>0?-r:r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(qf).addScaledVector(Tc,m),x}intersectSphere(e,t){if(e.radius<0)return null;Hs.subVectors(e.center,this.origin);let n=Hs.dot(this.direction),s=Hs.dot(Hs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,a,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(l=(e.min.z-m.z)*p,a=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,a=(e.min.z-m.z)*p),n>a||l>s)||((l>n||n!==n)&&(n=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hs)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,a=l.x,u=l.y,h=l.z,p=e.x-o.x,m=e.y-o.y,x=e.z-o.z,_=t.x-o.x,M=t.y-o.y,c=t.z-o.z,f=n.x-o.x,d=n.y-o.y,g=n.z-o.z,v=Math.abs(a),b=Math.abs(u),T=Math.abs(h),w,y,S,E,C,P,L,R,I,D,F,N;if(v>=b&&v>=T?(S=a,P=p,I=_,N=f,a>=0?(w=u,y=h,E=m,C=x,L=M,R=c,D=d,F=g):(w=h,y=u,E=x,C=m,L=c,R=M,D=g,F=d)):b>=T?(S=u,P=m,I=M,N=d,u>=0?(w=h,y=a,E=x,C=p,L=c,R=_,D=g,F=f):(w=a,y=h,E=p,C=x,L=_,R=c,D=f,F=g)):(S=h,P=x,I=c,N=g,h>=0?(w=a,y=u,E=p,C=m,L=_,R=M,D=f,F=d):(w=u,y=a,E=m,C=p,L=M,R=_,D=d,F=f)),S===0)return null;let U=w/S,W=y/S,k=1/S,X=E-U*P,ie=C-W*P,xe=L-U*I,Te=R-W*I,Ee=D-U*N,J=F-W*N,Q=Ee*Te-J*xe,ye=X*J-ie*Ee,Ie=xe*ie-Te*X;if(s){if(Q<0||ye<0||Ie<0)return null}else if((Q<0||ye<0||Ie<0)&&(Q>0||ye>0||Ie>0))return null;let K=Q+ye+Ie;if(K===0)return null;let ve=k*(Q*P+ye*I+Ie*N);return(K>0?ve<0:ve>0)?null:this.at(ve/K,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=g0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wp=new st,Nr=new Do,Ac=new bi,Gp=new H,Rc=new H,Cc=new H,Pc=new H,Xf=new H,Ic=new H,qp=new H,Lc=new H,pt=class extends Fn{constructor(e=new xt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Ic.set(0,0,0);for(let a=0,u=r.length;a<u;a++){let h=l[a],p=r[a];h!==0&&(Xf.fromBufferAttribute(p,e),o?Ic.addScaledVector(Xf,h):Ic.addScaledVector(Xf.sub(t),h))}t.add(Ic)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ac.copy(n.boundingSphere),Ac.applyMatrix4(r),Nr.copy(e.ray).recast(e.near),!(Ac.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Ac,Gp)===null||Nr.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Wp.copy(r).invert(),Nr.copy(e.ray).applyMatrix4(Wp),!(n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,m=r.groups,x=r.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,M=m.length;_<M;_++){let c=m[_],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(l.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=l.getX(v),w=l.getX(v+1),y=l.getX(v+2);s=Dc(this,f,e,n,u,h,p,T,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let _=Math.max(0,x.start),M=Math.min(l.count,x.start+x.count);for(let c=_,f=M;c<f;c+=3){let d=l.getX(c),g=l.getX(c+1),v=l.getX(c+2);s=Dc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let _=0,M=m.length;_<M;_++){let c=m[_],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(a.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=v,w=v+1,y=v+2;s=Dc(this,f,e,n,u,h,p,T,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let _=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let c=_,f=M;c<f;c+=3){let d=c,g=c+1,v=c+2;s=Dc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}}};function e2(i,e,t,n,s,r,o,l){let a;if(e.side===Kn?a=n.intersectTriangle(o,r,s,!0,l):a=n.intersectTriangle(s,r,o,e.side===Es,l),a===null)return null;Lc.copy(l),Lc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Lc);return u<t.near||u>t.far?null:{distance:u,point:Lc.clone(),object:i}}function Dc(i,e,t,n,s,r,o,l,a,u){i.getVertexPosition(l,Rc),i.getVertexPosition(a,Cc),i.getVertexPosition(u,Pc);let h=e2(i,e,t,n,Rc,Cc,Pc,qp);if(h){let p=new H;fr.getBarycoord(qp,Rc,Cc,Pc,p),s&&(h.uv=fr.getInterpolatedAttribute(s,l,a,u,p,new Fe)),r&&(h.uv1=fr.getInterpolatedAttribute(r,l,a,u,p,new Fe)),o&&(h.normal=fr.getInterpolatedAttribute(o,l,a,u,p,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a:l,b:a,c:u,normal:new H,materialIndex:0};fr.getNormal(Rc,Cc,Pc,m.normal),h.face=m,h.barycoord=p}return h}var Mi=class extends ti{constructor(e=null,t=1,n=1,s,r,o,l,a,u=Nn,h=Nn,p,m){super(null,o,l,a,u,h,s,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_o=new st,Xp=new st,Nc=[],Yp=new _i,t2=new st,ka=new pt,za=new bi,fs=class extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_o),Yp.copy(e.boundingBox).applyMatrix4(_o),this.boundingBox.union(Yp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_o),za.copy(e.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(za)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ka.geometry=this.geometry,ka.material=this.material,ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(n),e.ray.intersectsSphere(za)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_o),Xp.multiplyMatrices(n,_o),ka.matrixWorld=Xp,ka.raycast(e,Nc);for(let o=0,l=Nc.length;o<l;o++){let a=Nc[o];a.instanceId=r,a.object=this,t.push(a)}Nc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new kn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(s*this.count),s,this.count,ms,Yi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let l=this.geometry.morphTargetsRelative?1:1-o,a=s*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fr=new bi,n2=new Fe(.5,.5),Fc=new H,No=class{constructor(e=new cs,t=new cs,n=new cs,s=new cs,r=new cs,o=new cs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=us,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],u=r[3],h=r[4],p=r[5],m=r[6],x=r[7],_=r[8],M=r[9],c=r[10],f=r[11],d=r[12],g=r[13],v=r[14],b=r[15];if(s[0].setComponents(u-o,x-h,f-_,b-d).normalize(),s[1].setComponents(u+o,x+h,f+_,b+d).normalize(),s[2].setComponents(u+l,x+p,f+M,b+g).normalize(),s[3].setComponents(u-l,x-p,f-M,b-g).normalize(),n)s[4].setComponents(a,m,c,v).normalize(),s[5].setComponents(u-a,x-m,f-c,b-v).normalize();else if(s[4].setComponents(u-a,x-m,f-c,b-v).normalize(),t===us)s[5].setComponents(u+a,x+m,f+c,b+v).normalize();else if(t===Ro)s[5].setComponents(a,m,c,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);let t=n2.distanceTo(e.center);return Fr.radius=.7071067811865476+t,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fc.x=s.normal.x>0?e.max.x:e.min.x,Fc.y=s.normal.y>0?e.max.y:e.min.y,Fc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ru=class extends ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ou=new H,au=new H,Zp=new st,Ha=new Do,Uc=new bi,Yf=new H,Kp=new H,el=class extends Fn{constructor(e=new xt,t=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ou.fromBufferAttribute(t,s-1),au.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ou.distanceTo(au);e.setAttribute("lineDistance",new et(n,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(s),Uc.radius+=r,e.ray.intersectsSphere(Uc)===!1)return;Zp.copy(s).invert(),Ha.copy(e.ray).applyMatrix4(Zp);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let x=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let M=x,c=_-1;M<c;M+=u){let f=h.getX(M),d=h.getX(M+1),g=Bc(this,e,Ha,a,f,d,M);g&&t.push(g)}if(this.isLineLoop){let M=h.getX(_-1),c=h.getX(x),f=Bc(this,e,Ha,a,M,c,_-1);f&&t.push(f)}}else{let x=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let M=x,c=_-1;M<c;M+=u){let f=Bc(this,e,Ha,a,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=Bc(this,e,Ha,a,_-1,x,_-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Bc(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(ou.fromBufferAttribute(l,s),au.fromBufferAttribute(l,r),t.distanceSqToSegment(ou,au,Yf,Kp)>n)return;Yf.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Yf);if(!(u<e.near||u>e.far))return{distance:u,point:Kp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fo=class extends ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$p=new st,i0=new Do,Oc=new bi,kc=new H,tl=class extends Fn{constructor(e=new xt,t=new Fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),Oc.radius+=r,e.ray.intersectsSphere(Oc)===!1)return;$p.copy(s).invert(),i0.copy(e.ray).applyMatrix4($p);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=n.index,p=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let _=m,M=x;_<M;_++){let c=u.getX(_);kc.fromBufferAttribute(p,c),Jp(kc,c,a,s,e,t,this)}}else{let m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let _=m,M=x;_<M;_++)kc.fromBufferAttribute(p,_),Jp(kc,_,a,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Jp(i,e,t,n,s,r,o){let l=i0.distanceSqToPoint(i);if(l<t){let a=new H;i0.closestPointToPoint(i,a),a.applyMatrix4(n);let u=s.ray.origin.distanceTo(a);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var nl=class extends ti{constructor(e=[],t=yr,n,s,r,o,l,a,u,h){super(e,t,n,s,r,o,l,a,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ii=class extends ti{constructor(e,t,n,s,r,o,l,a,u){super(e,t,n,s,r,o,l,a,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var dr=class extends ti{constructor(e,t,n=ps,s,r,o,l=Nn,a=Nn,u,h=Ms,p=1){if(h!==Ms&&h!==_r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:p};super(m,s,r,o,l,a,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},lu=class extends dr{constructor(e,t=ps,n=yr,s,r,o=Nn,l=Nn,a,u=Ms){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,a,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},il=class extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qt=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],u=[],h=[],p=[],m=0,x=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(a),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(p,2));function _(M,c,f,d,g,v,b,T,w,y,S){let E=v/w,C=b/y,P=v/2,L=b/2,R=T/2,I=w+1,D=y+1,F=0,N=0,U=new H;for(let W=0;W<D;W++){let k=W*C-L;for(let X=0;X<I;X++){let ie=X*E-P;U[M]=ie*d,U[c]=k*g,U[f]=R,u.push(U.x,U.y,U.z),U[M]=0,U[c]=0,U[f]=T>0?1:-1,h.push(U.x,U.y,U.z),p.push(X/w),p.push(1-W/y),F+=1}}for(let W=0;W<y;W++)for(let k=0;k<w;k++){let X=m+k+I*W,ie=m+k+I*(W+1),xe=m+(k+1)+I*(W+1),Te=m+(k+1)+I*W;a.push(X,ie,Te),a.push(ie,xe,Te),N+=6}l.addGroup(x,N,S),x+=N,m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Or=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],a=[],u=new H,h=new Fe;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){let x=n+p/t*s;u.x=e*Math.cos(x),u.y=e*Math.sin(x),o.push(u.x,u.y,u.z),l.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,a.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qi=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],m=[],x=[],_=0,M=[],c=n/2,f=0;d(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(m,3)),this.setAttribute("uv",new et(x,2));function d(){let v=new H,b=new H,T=0,w=(t-e)/n;for(let y=0;y<=r;y++){let S=[],E=y/r,C=E*(t-e)+e;for(let P=0;P<=s;P++){let L=P/s,R=L*a+l,I=Math.sin(R),D=Math.cos(R);b.x=C*I,b.y=-E*n+c,b.z=C*D,p.push(b.x,b.y,b.z),v.set(I,w,D).normalize(),m.push(v.x,v.y,v.z),x.push(L,1-E),S.push(_++)}M.push(S)}for(let y=0;y<s;y++)for(let S=0;S<r;S++){let E=M[S][y],C=M[S+1][y],P=M[S+1][y+1],L=M[S][y+1];(e>0||S!==0)&&(h.push(E,C,L),T+=3),(t>0||S!==r-1)&&(h.push(C,P,L),T+=3)}u.addGroup(f,T,0),f+=T}function g(v){let b=_,T=new Fe,w=new H,y=0,S=v===!0?e:t,E=v===!0?1:-1;for(let P=1;P<=s;P++)p.push(0,c*E,0),m.push(0,E,0),x.push(.5,.5),_++;let C=_;for(let P=0;P<=s;P++){let R=P/s*a+l,I=Math.cos(R),D=Math.sin(R);w.x=S*D,w.y=c*E,w.z=S*I,p.push(w.x,w.y,w.z),m.push(0,E,0),T.x=I*.5+.5,T.y=D*.5*E+.5,x.push(T.x,T.y),_++}for(let P=0;P<s;P++){let L=b+P,R=C+P;v===!0?h.push(R,R+1,L):h.push(R+1,R,L),y+=3}u.addGroup(f,y,v===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var cu=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),u(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(d){let g=new H,v=new H,b=new H;for(let T=0;T<t.length;T+=3)x(t[T+0],g),x(t[T+1],v),x(t[T+2],b),a(g,v,b,d)}function a(d,g,v,b){let T=b+1,w=[];for(let y=0;y<=T;y++){w[y]=[];let S=d.clone().lerp(v,y/T),E=g.clone().lerp(v,y/T),C=T-y;for(let P=0;P<=C;P++)P===0&&y===T?w[y][P]=S:w[y][P]=S.clone().lerp(E,P/C)}for(let y=0;y<T;y++)for(let S=0;S<2*(T-y)-1;S++){let E=Math.floor(S/2);S%2===0?(m(w[y][E+1]),m(w[y+1][E]),m(w[y][E])):(m(w[y][E+1]),m(w[y+1][E+1]),m(w[y+1][E]))}}function u(d){let g=new H;for(let v=0;v<r.length;v+=3)g.x=r[v+0],g.y=r[v+1],g.z=r[v+2],g.normalize().multiplyScalar(d),r[v+0]=g.x,r[v+1]=g.y,r[v+2]=g.z}function h(){let d=new H;for(let g=0;g<r.length;g+=3){d.x=r[g+0],d.y=r[g+1],d.z=r[g+2];let v=c(d)/2/Math.PI+.5,b=f(d)/Math.PI+.5;o.push(v,1-b)}_(),p()}function p(){for(let d=0;d<o.length;d+=6){let g=o[d+0],v=o[d+2],b=o[d+4],T=Math.max(g,v,b),w=Math.min(g,v,b);T>.9&&w<.1&&(g<.2&&(o[d+0]+=1),v<.2&&(o[d+2]+=1),b<.2&&(o[d+4]+=1))}}function m(d){r.push(d.x,d.y,d.z)}function x(d,g){let v=d*3;g.x=e[v+0],g.y=e[v+1],g.z=e[v+2]}function _(){let d=new H,g=new H,v=new H,b=new H,T=new Fe,w=new Fe,y=new Fe;for(let S=0,E=0;S<r.length;S+=9,E+=6){d.set(r[S+0],r[S+1],r[S+2]),g.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),y.set(o[E+4],o[E+5]),b.copy(d).add(g).add(v).divideScalar(3);let C=c(b);M(T,E+0,d,C),M(w,E+2,g,C),M(y,E+4,v,C)}}function M(d,g,v,b){b<0&&d.x===1&&(o[g]=d.x-1),v.x===0&&v.z===0&&(o[g]=b/2/Math.PI+.5)}function c(d){return Math.atan2(d.z,-d.x)}function f(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,a=r-1,u;for(;l<=a;)if(s=Math.floor(l+(a-l)/2),u=n[s]-o,u<0)l=s+1;else if(u>0)a=s-1;else{a=s;break}if(s=a,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,x=(o-h)/m;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),a=t||(o.isVector2?new Fe:new H);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],o=[],l=new H,a=new st;for(let x=0;x<=e;x++){let _=x/e;s[x]=this.getTangentAt(_,new H)}r[0]=new H,o[0]=new H;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),m<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();let _=Math.acos(Rt(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(a.makeRotationAxis(l,_))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(Rt(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(x=-x);for(let _=1;_<=e;_++)r[_].applyMatrix4(a.makeRotationAxis(s[_],x*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Uo=class extends Di{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Fe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=a-this.aX,x=u-this.aY;a=m*h-x*p+this.aX,u=m*p+x*h+this.aY}return n.set(a,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},uu=class extends Uo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function L0(){let i=0,e=0,t=0,n=0;function s(r,o,l,a){i=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,u){s(o,l,u*(l-r),u*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,u,h,p){let m=(o-r)/u-(l-r)/(u+h)+(l-o)/h,x=(l-o)/h-(a-o)/(h+p)+(a-l)/p;m*=h,x*=h,s(o,l,m,x)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var jp=new H,Qp=new H,Zf=new L0,Kf=new L0,$f=new L0,hu=class extends Di{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let u,h;this.closed||l>0?u=s[(l-1)%r]:(Qp.subVectors(s[0],s[1]).add(s[0]),u=Qp);let p=s[l%r],m=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(jp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jp),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,_=Math.pow(u.distanceToSquared(p),x),M=Math.pow(p.distanceToSquared(m),x),c=Math.pow(m.distanceToSquared(h),x);M<1e-4&&(M=1),_<1e-4&&(_=M),c<1e-4&&(c=M),Zf.initNonuniformCatmullRom(u.x,p.x,m.x,h.x,_,M,c),Kf.initNonuniformCatmullRom(u.y,p.y,m.y,h.y,_,M,c),$f.initNonuniformCatmullRom(u.z,p.z,m.z,h.z,_,M,c)}else this.curveType==="catmullrom"&&(Zf.initCatmullRom(u.x,p.x,m.x,h.x,this.tension),Kf.initCatmullRom(u.y,p.y,m.y,h.y,this.tension),$f.initCatmullRom(u.z,p.z,m.z,h.z,this.tension));return n.set(Zf.calc(a),Kf.calc(a),$f.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function em(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,a=i*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*i+t}function i2(i,e){let t=1-i;return t*t*e}function s2(i,e){return 2*(1-i)*i*e}function r2(i,e){return i*i*e}function Wa(i,e,t,n){return i2(i,e)+s2(i,t)+r2(i,n)}function o2(i,e){let t=1-i;return t*t*t*e}function a2(i,e){let t=1-i;return 3*t*t*i*e}function l2(i,e){return 3*(1-i)*i*i*e}function c2(i,e){return i*i*i*e}function Ga(i,e,t,n,s){return o2(i,e)+a2(i,t)+l2(i,n)+c2(i,s)}var sl=class extends Di{constructor(e=new Fe,t=new Fe,n=new Fe,s=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ga(e,s.x,r.x,o.x,l.x),Ga(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fu=class extends Di{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ga(e,s.x,r.x,o.x,l.x),Ga(e,s.y,r.y,o.y,l.y),Ga(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends Di{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},du=class extends Di{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends Di{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Wa(e,s.x,r.x,o.x),Wa(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pu=class extends Di{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Wa(e,s.x,r.x,o.x),Wa(e,s.y,r.y,o.y),Wa(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,a=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(em(l,a.x,u.x,h.x,p.x),em(l,a.y,u.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Fe().fromArray(s))}return this}},tm=Object.freeze({__proto__:null,ArcCurve:uu,CatmullRomCurve3:hu,CubicBezierCurve:sl,CubicBezierCurve3:fu,EllipseCurve:Uo,LineCurve:rl,LineCurve3:du,QuadraticBezierCurve:ol,QuadraticBezierCurve3:pu,SplineCurve:al}),mu=class extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tm[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],a=l.getLength(),u=a===0?0:1-o/a;return l.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let u=0;u<a.length;u++){let h=a[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new tm[s.type]().fromJSON(s))}return this}},kr=class extends mu{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new rl(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ol(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new sl(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s),new Fe(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new al(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,a){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,l,a),this}absellipse(e,t,n,s,r,o,l,a){let u=new Uo(e,t,n,s,r,o,l,a);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zr=class extends kr{constructor(e){super(e),this.uuid=Yo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new kr().fromJSON(s))}return this}};function u2(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Jm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,a,u;if(n&&(r=m2(i,e,r,t)),i.length>80*t){l=i[0],a=i[1];let h=l,p=a;for(let m=t;m<s;m+=t){let x=i[m],_=i[m+1];x<l&&(l=x),_<a&&(a=_),x>h&&(h=x),_>p&&(p=_)}u=Math.max(h-l,p-a),u=u!==0?32767/u:0}return ll(r,o,t,l,a,u,0),o}function Jm(i,e,t,n,s){let r;if(s===E2(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=nm(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=nm(o/n|0,i[o],i[o+1],r);return r&&Bo(r,r.next)&&(ul(r),r=r.next),r}function Hr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Bo(t,t.next)||gn(t.prev,t,t.next)===0)){if(ul(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ll(i,e,t,n,s,r,o){if(!i)return;!o&&r&&_2(i,n,s,r);let l=i;for(;i.prev!==i.next;){let a=i.prev,u=i.next;if(r?f2(i,n,s,r):h2(i)){e.push(a.i,i.i,u.i),ul(i),i=u.next,l=u.next;continue}if(i=u,i===l){o?o===1?(i=d2(Hr(i),e),ll(i,e,t,n,s,r,2)):o===2&&p2(i,e,t,n,s,r):ll(Hr(i),e,t,n,s,r,1);break}}}function h2(i){let e=i.prev,t=i,n=i.next;if(gn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,a=t.y,u=n.y,h=Math.min(s,r,o),p=Math.min(l,a,u),m=Math.max(s,r,o),x=Math.max(l,a,u),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=m&&_.y>=p&&_.y<=x&&Va(s,l,r,a,o,u,_.x,_.y)&&gn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function f2(i,e,t,n){let s=i.prev,r=i,o=i.next;if(gn(s,r,o)>=0)return!1;let l=s.x,a=r.x,u=o.x,h=s.y,p=r.y,m=o.y,x=Math.min(l,a,u),_=Math.min(h,p,m),M=Math.max(l,a,u),c=Math.max(h,p,m),f=s0(x,_,e,t,n),d=s0(M,c,e,t,n),g=i.prevZ,v=i.nextZ;for(;g&&g.z>=f&&v&&v.z<=d;){if(g.x>=x&&g.x<=M&&g.y>=_&&g.y<=c&&g!==s&&g!==o&&Va(l,h,a,p,u,m,g.x,g.y)&&gn(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=x&&v.x<=M&&v.y>=_&&v.y<=c&&v!==s&&v!==o&&Va(l,h,a,p,u,m,v.x,v.y)&&gn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=f;){if(g.x>=x&&g.x<=M&&g.y>=_&&g.y<=c&&g!==s&&g!==o&&Va(l,h,a,p,u,m,g.x,g.y)&&gn(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=d;){if(v.x>=x&&v.x<=M&&v.y>=_&&v.y<=c&&v!==s&&v!==o&&Va(l,h,a,p,u,m,v.x,v.y)&&gn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function d2(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Bo(n,s)&&Qm(n,t,t.next,s)&&cl(n,s)&&cl(s,n)&&(e.push(n.i,t.i,s.i),ul(t),ul(t.next),t=i=s),t=t.next}while(t!==i);return Hr(t)}function p2(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&S2(o,l)){let a=eg(o,l);o=Hr(o,o.next),a=Hr(a,a.next),ll(o,e,t,n,s,r,0),ll(a,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function m2(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,a=r<o-1?e[r+1]*n:i.length,u=Jm(i,l,a,n,!1);u===u.next&&(u.steiner=!0),s.push(M2(u))}s.sort(g2);for(let r=0;r<s.length;r++)t=v2(s[r],t);return t}function g2(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function v2(i,e){let t=x2(i,e);if(!t)return e;let n=eg(t,i);return Hr(n,n.next),Hr(t,t.next)}function x2(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Bo(i,t))return t;do{if(Bo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,a=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&jm(s<u?n:r,s,a,u,s<u?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);cl(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&y2(o,t)))&&(o=t,h=p)}t=t.next}while(t!==l);return o}function y2(i,e){return gn(i.prev,i,e.prev)<0&&gn(e.next,i,i.next)<0}function _2(i,e,t,n){let s=i;do s.z===0&&(s.z=s0(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,b2(s)}function b2(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let u=0;u<t&&(l++,o=o.nextZ,!!o);u++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,a--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function s0(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function M2(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function jm(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function Va(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&jm(i,e,t,n,s,r,o,l)}function S2(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!w2(i,e)&&(cl(i,e)&&cl(e,i)&&T2(i,e)&&(gn(i.prev,i,e.prev)||gn(i,e.prev,e))||Bo(i,e)&&gn(i.prev,i,i.next)>0&&gn(e.prev,e,e.next)>0)}function gn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Bo(i,e){return i.x===e.x&&i.y===e.y}function Qm(i,e,t,n){let s=Hc(gn(i,e,t)),r=Hc(gn(i,e,n)),o=Hc(gn(t,n,i)),l=Hc(gn(t,n,e));return!!(s!==r&&o!==l||s===0&&zc(i,t,e)||r===0&&zc(i,n,e)||o===0&&zc(t,i,n)||l===0&&zc(t,e,n))}function zc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Hc(i){return i>0?1:i<0?-1:0}function w2(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function cl(i,e){return gn(i.prev,i,i.next)<0?gn(i,e,i.next)>=0&&gn(i,i.prev,e)>=0:gn(i,e,i.prev)<0||gn(i,i.next,e)<0}function T2(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function eg(i,e){let t=r0(i.i,i.x,i.y),n=r0(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function nm(i,e,t,n){let s=r0(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ul(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function r0(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E2(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var o0=class{static triangulate(e,t,n=2){return u2(e,t,n)}},Eo=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];im(e),sm(n,e);let o=e.length;t.forEach(im);for(let a=0;a<t.length;a++)s.push(o),o+=t[a].length,sm(n,t[a]);let l=o0.triangulate(n,s);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}};function im(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function sm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var hl=class i extends cu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var nn=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(s),u=l+1,h=a+1,p=e/l,m=t/a,x=[],_=[],M=[],c=[];for(let f=0;f<h;f++){let d=f*m-o;for(let g=0;g<u;g++){let v=g*p-r;_.push(v,-d,0),M.push(0,0,1),c.push(g/l),c.push(1-f/a)}}for(let f=0;f<a;f++)for(let d=0;d<l;d++){let g=d+u*f,v=d+u*(f+1),b=d+1+u*(f+1),T=d+1+u*f;x.push(g,v,T),x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new et(_,3)),this.setAttribute("normal",new et(M,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Oo=class i extends xt{constructor(e=new zr([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],l=0,a=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(o,2));function u(h){let p=s.length/3,m=h.extractPoints(t),x=m.shape,_=m.holes;Eo.isClockWise(x)===!1&&(x=x.reverse());for(let c=0,f=_.length;c<f;c++){let d=_[c];Eo.isClockWise(d)===!0&&(_[c]=d.reverse())}let M=Eo.triangulateShape(x,_);for(let c=0,f=_.length;c<f;c++){let d=_[c];x=x.concat(d)}for(let c=0,f=x.length;c<f;c++){let d=x[c];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let c=0,f=M.length;c<f;c++){let d=M[c],g=d[0]+p,v=d[1]+p,b=d[2]+p;n.push(g,v,b),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return A2(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function A2(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var fl=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let a=Math.min(o+l,Math.PI),u=0,h=[],p=new H,m=new H,x=[],_=[],M=[],c=[];for(let f=0;f<=n;f++){let d=[],g=f/n,v=o+g*l,b=e*Math.cos(v),T=Math.sqrt(e*e-b*b),w=0;f===0&&o===0?w=.5/t:f===n&&a===Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){let S=y/t,E=s+S*r;p.x=-T*Math.cos(E),p.y=b,p.z=T*Math.sin(E),_.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),c.push(S+w,1-g),d.push(u++)}h.push(d)}for(let f=0;f<n;f++)for(let d=0;d<t;d++){let g=h[f][d+1],v=h[f][d],b=h[f+1][d],T=h[f+1][d+1];(f!==0||o>0)&&x.push(g,v,T),(f!==n-1||a<Math.PI)&&x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new et(_,3)),this.setAttribute("normal",new et(M,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ko=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let a=[],u=[],h=[],p=[],m=new H,x=new H,_=new H;for(let M=0;M<=n;M++){let c=o+M/n*l;for(let f=0;f<=s;f++){let d=f/s*r;x.x=(e+t*Math.cos(c))*Math.cos(d),x.y=(e+t*Math.cos(c))*Math.sin(d),x.z=t*Math.sin(c),u.push(x.x,x.y,x.z),m.x=e*Math.cos(d),m.y=e*Math.sin(d),_.subVectors(x,m).normalize(),h.push(_.x,_.y,_.z),p.push(f/s),p.push(M/n)}}for(let M=1;M<=n;M++)for(let c=1;c<=s;c++){let f=(s+1)*M+c-1,d=(s+1)*(M-1)+c-1,g=(s+1)*(M-1)+c,v=(s+1)*M+c;a.push(f,d,v),a.push(d,g,v)}this.setIndex(a),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function qr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(rm(s))s.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(rm(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function oi(i){let e={};for(let t=0;t<i.length;t++){let n=qr(i[t]);for(let s in n)e[s]=n[s]}return e}function rm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function R2(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function D0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}var Xr={clone:qr,merge:oi},C2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C2,this.fragmentShader=P2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=R2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},gu=class extends ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var wn=class extends ws{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pr=class extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vu=class extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jf(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var mr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xu=class extends mr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:e0,endingEnd:e0}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],a=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case t0:r=e,l=2*t-n;break;case n0:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case t0:o=e,a=2*n-t;break;case n0:o=1,a=n+s[1]-s[0];break;default:o=e-1,a=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,x=this._weightNext,_=(n-t)/(s-t),M=_*_,c=M*_,f=-m*c+2*m*M-m*_,d=(1+m)*c+(-1.5-2*m)*M+(-.5+m)*_+1,g=(-1-x)*c+(1.5+x)*M+.5*_,v=x*c-x*M;for(let b=0;b!==l;++b)r[b]=f*o[h+b]+d*o[u+b]+g*o[a+b]+v*o[p+b];return r}},yu=class extends mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=(n-t)/(s-t),p=1-h;for(let m=0;m!==l;++m)r[m]=o[u+m]*p+o[a+m]*h;return r}},_u=class extends mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bu=class extends mr{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(n-t)/(s-t),M=1-_;for(let c=0;c!==l;++c)r[c]=o[u+c]*M+o[a+c]*_;return r}let m=l*2,x=e-1;for(let _=0;_!==l;++_){let M=o[u+_],c=o[a+_],f=x*m+_*2,d=p[f],g=p[f+1],v=e*m+_*2,b=h[v],T=h[v+1],w=L2(n,t,d,b,s);r[_]=tg(w,M,g,T,c)}return r}};function tg(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function I2(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function L2(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=tg(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let a=I2(r,e,t,n,s);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}var Ni=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Jf(e.settings)&&(n.settings={inTangents:bo(e.settings.inTangents,Array),outTangents:bo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case tu:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break;case Qf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ft("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return tu;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return Qf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Jf(this.settings)&&(om(this.settings.inTangents,e),om(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(gt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(gt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let a=n[l];if(typeof a=="number"&&isNaN(a)){gt("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){gt("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(s!==void 0&&Ux(s))for(let l=0,a=s.length;l!==a;++l){let u=s[l];if(isNaN(u)){gt("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=e.length-1,o=1;for(let l=1;l<r;++l){let a=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(s)a=!0;else{let p=l*n,m=p-n,x=p+n;for(let _=0;_!==n;++_){let M=t[p+_];if(M!==t[m+_]||M!==t[x+_]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];let p=l*n,m=o*n;for(let x=0;x!==n;++x)t[m+x]=t[p+x]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,u=0;u!==n;++u)t[a+u]=t[l+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Jf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function om(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=tu;var gr=class extends Ni{constructor(e,t,n){super(e,t,n)}};gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=qa;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}};Mu.prototype.ValueTypeName="color";var Su=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}};Su.prototype.ValueTypeName="number";var wu=class extends mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(s-t),u=e*l;for(let h=u+l;u!==h;u+=4)yn.slerpFlat(r,0,o,u-l,o,u,a);return r}},dl=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wu(this.times,this.values,this.getValueSize(),e)}};dl.prototype.ValueTypeName="quaternion";dl.prototype.InterpolantFactoryMethodSmooth=void 0;var vr=class extends Ni{constructor(e,t,n){super(e,t,n)}};vr.prototype.ValueTypeName="string";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=qa;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Tu=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}};Tu.prototype.ValueTypeName="vector";var Xc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(am(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!am(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function am(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Eu=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,a,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=u.length;p<m;p+=2){let x=u[p],_=u[p+1];if(x.global&&(x.lastIndex=0),x.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ng=new Eu,zo=class{constructor(e){this.manager=e!==void 0?e:ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mo=new WeakMap,Au=class extends zo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=Mo.get(o);p===void 0&&(p=[],Mo.set(o,p)),p.push({onLoad:t,onError:s})}return o}let l=Co("img");function a(){h(),t&&t(this);let p=Mo.get(this)||[];for(let m=0;m<p.length;m++){let x=p[m];x.onLoad&&x.onLoad(this)}Mo.delete(this),r.manager.itemEnd(e)}function u(p){h(),s&&s(p),Xc.remove(`image:${e}`);let m=Mo.get(this)||[];for(let x=0;x<m.length;x++){let _=m[x];_.onError&&_.onError(p)}Mo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Xc.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var pl=class extends zo{constructor(e){super(e)}load(e,t,n,s){let r=new ti,o=new Au(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ho=class extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ml=class extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},jf=new st,lm=new H,cm=new H,gl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lm.setFromMatrixPosition(e.matrixWorld),t.position.copy(lm),cm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){jf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,a=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Ro||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(jf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vc=new H,Wc=new yn,_s=new H,Ws=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=us,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vc,Wc,_s),_s.x===1&&_s.y===1&&_s.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Wc,_s.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vc,Wc,_s),_s.x===1&&_s.y===1&&_s.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Wc,_s.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hr=new H,um=new Fe,hm=new Fe,Zn=class extends Ws{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,um,hm),t.subVectors(hm,um)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ef*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/a,t-=o.offsetY*n/u,s*=o.width/a,n*=o.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},a0=class extends gl{constructor(){super(new Zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Za*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},vl=class extends Ho{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new a0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var xr=class extends Ws{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,a=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},l0=class extends gl{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new l0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ts=class extends xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var So=-90,wo=1,Ru=class extends Fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zn(So,wo,e,t);s.layers=this.layers,this.add(s);let r=new Zn(So,wo,e,t);r.layers=this.layers,this.add(r);let o=new Zn(So,wo,e,t);o.layers=this.layers,this.add(o);let l=new Zn(So,wo,e,t);l.layers=this.layers,this.add(l);let a=new Zn(So,wo,e,t);a.layers=this.layers,this.add(a);let u=new Zn(So,wo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,a]=t;for(let u of t)this.remove(u);if(e===us)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,a,u,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,m,x),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Cu=class extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=D2.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function D2(){this._document.hidden===!1&&this.reset()}var N0="\\[\\]\\.:\\/",N2=new RegExp("["+N0+"]","g"),F0="[^"+N0+"]",F2="[^"+N0.replace("\\.","")+"]",U2=/((?:WC+[\/:])*)/.source.replace("WC",F0),B2=/(WCOD+)?/.source.replace("WCOD",F2),O2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",F0),k2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",F0),z2=new RegExp("^"+U2+B2+O2+k2+"$"),H2=["material","materials","bones","map"],c0=class{constructor(e,t,n){let s=n||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},an=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N2,"")}static parseTrackName(e){let t=z2.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);H2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let a=n(l.children);if(a)return a}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;gt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};an.Composite=c0;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jw=new Float32Array(1);var H0=class H0{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};H0.prototype.isMatrix2=!0;var u0=H0;function U0(i,e,t,n){let s=V2(n);switch(t){case R0:return i*e;case ms:return i*e/s.components*s.byteLength;case Bu:return i*e/s.components*s.byteLength;case br:return i*e*2/s.components*s.byteLength;case Ou:return i*e*2/s.components*s.byteLength;case C0:return i*e*3/s.components*s.byteLength;case ri:return i*e*4/s.components*s.byteLength;case ku:return i*e*4/s.components*s.byteLength;case Ml:case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wl:case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hu:case Wu:return Math.max(i,16)*Math.max(e,8)/4;case zu:case Vu:return Math.max(i,8)*Math.max(e,8)/2;case Gu:case qu:case Yu:case Zu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xu:case El:case Ku:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $u:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ju:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ju:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case eh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case th:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ch:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uh:case hh:case fh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dh:case ph:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Al:case mh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function V2(i){switch(i){case si:case w0:return{byteLength:1,components:1};case qo:case T0:case En:return{byteLength:2,components:1};case Fu:case Uu:return{byteLength:2,components:4};case ps:case Nu:case Yi:return{byteLength:4,components:1};case E0:case A0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function wg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function K2(i){let e=new WeakMap;function t(l,a){let u=l.array,h=l.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(a,m),i.bufferData(a,u,h),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,a,u){let h=a.array,p=a.updateRanges;if(i.bindBuffer(u,l),p.length===0)i.bufferSubData(u,0,h);else{p.sort((x,_)=>x.start-_.start);let m=0;for(let x=1;x<p.length;x++){let _=p[m],M=p[x];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++m,p[m]=M)}p.length=m+1;for(let x=0,_=p.length;x<_;x++){let M=p[x];i.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let a=e.get(l);a&&(i.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,a));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,a),u.version=l.version}}return{get:s,remove:r,update:o}}var $2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J2=`#ifdef USE_ALPHAHASH
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
#endif`,j2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy=`#ifdef USE_BATCHING
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
#endif`,ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,uy=`#ifdef USE_BUMPMAP
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yy=`#define PI 3.141592653589793
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
} // validated`,_y=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,by=`vec3 transformedNormal = objectNormal;
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
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,By=`#ifdef USE_GRADIENTMAP
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
}`,Oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yy=`PhysicalMaterial material;
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
#endif`,Zy=`uniform sampler2D dfgLUT;
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
}`,Ky=`
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o_=`#if defined( USE_POINTS_UV )
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
#endif`,a_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`#ifdef USE_MORPHTARGETS
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
#endif`,d_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y_=`#ifdef USE_NORMALMAP
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
#endif`,__=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F_=`float getShadowMask() {
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
}`,U_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,O_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`#include <common>
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
}`,ib=`#if DEPTH_PACKING == 3200
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
}`,sb=`#define DISTANCE
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
}`,rb=`#define DISTANCE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`uniform float scale;
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
}`,cb=`uniform vec3 diffuse;
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
}`,ub=`#include <common>
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
}`,hb=`uniform vec3 diffuse;
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
}`,fb=`#define LAMBERT
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
}`,db=`#define LAMBERT
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
}`,pb=`#define MATCAP
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
}`,mb=`#define MATCAP
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
}`,gb=`#define NORMAL
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
}`,vb=`#define NORMAL
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
}`,xb=`#define PHONG
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
}`,yb=`#define PHONG
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
}`,_b=`#define STANDARD
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
}`,bb=`#define STANDARD
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
}`,Mb=`#define TOON
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
}`,Sb=`#define TOON
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
}`,wb=`uniform float size;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,Eb=`#include <common>
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
}`,Ab=`uniform vec3 color;
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
}`,Rb=`uniform float rotation;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:$2,alphahash_pars_fragment:J2,alphamap_fragment:j2,alphamap_pars_fragment:Q2,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:sy,batching_vertex:ry,begin_vertex:oy,beginnormal_vertex:ay,bsdfs:ly,iridescence_fragment:cy,bumpmap_pars_fragment:uy,clipping_planes_fragment:hy,clipping_planes_pars_fragment:fy,clipping_planes_pars_vertex:dy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:vy,color_vertex:xy,common:yy,cube_uv_reflection_fragment:_y,defaultnormal_vertex:by,displacementmap_pars_vertex:My,displacementmap_vertex:Sy,emissivemap_fragment:wy,emissivemap_pars_fragment:Ty,colorspace_fragment:Ey,colorspace_pars_fragment:Ay,envmap_fragment:Ry,envmap_common_pars_fragment:Cy,envmap_pars_fragment:Py,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Vy,envmap_vertex:Ly,fog_vertex:Dy,fog_pars_vertex:Ny,fog_fragment:Fy,fog_pars_fragment:Uy,gradientmap_pars_fragment:By,lightmap_pars_fragment:Oy,lights_lambert_fragment:ky,lights_lambert_pars_fragment:zy,lights_pars_begin:Hy,lights_toon_fragment:Wy,lights_toon_pars_fragment:Gy,lights_phong_fragment:qy,lights_phong_pars_fragment:Xy,lights_physical_fragment:Yy,lights_physical_pars_fragment:Zy,lights_fragment_begin:Ky,lights_fragment_maps:$y,lights_fragment_end:Jy,lightprobes_pars_fragment:jy,logdepthbuf_fragment:Qy,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:s_,map_particle_fragment:r_,map_particle_pars_fragment:o_,metalnessmap_fragment:a_,metalnessmap_pars_fragment:l_,morphinstance_vertex:c_,morphcolor_vertex:u_,morphnormal_vertex:h_,morphtarget_pars_vertex:f_,morphtarget_vertex:d_,normal_fragment_begin:p_,normal_fragment_maps:m_,normal_pars_fragment:g_,normal_pars_vertex:v_,normal_vertex:x_,normalmap_pars_fragment:y_,clearcoat_normal_fragment_begin:__,clearcoat_normal_fragment_maps:b_,clearcoat_pars_fragment:M_,iridescence_pars_fragment:S_,opaque_fragment:w_,packing:T_,premultiplied_alpha_fragment:E_,project_vertex:A_,dithering_fragment:R_,dithering_pars_fragment:C_,roughnessmap_fragment:P_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:L_,shadowmap_pars_vertex:D_,shadowmap_vertex:N_,shadowmask_pars_fragment:F_,skinbase_vertex:U_,skinning_pars_vertex:B_,skinning_vertex:O_,skinnormal_vertex:k_,specularmap_fragment:z_,specularmap_pars_fragment:H_,tonemapping_fragment:V_,tonemapping_pars_fragment:W_,transmission_fragment:G_,transmission_pars_fragment:q_,uv_pars_fragment:X_,uv_pars_vertex:Y_,uv_vertex:Z_,worldpos_vertex:K_,background_vert:$_,background_frag:J_,backgroundCube_vert:j_,backgroundCube_frag:Q_,cube_vert:eb,cube_frag:tb,depth_vert:nb,depth_frag:ib,distance_vert:sb,distance_frag:rb,equirect_vert:ob,equirect_frag:ab,linedashed_vert:lb,linedashed_frag:cb,meshbasic_vert:ub,meshbasic_frag:hb,meshlambert_vert:fb,meshlambert_frag:db,meshmatcap_vert:pb,meshmatcap_frag:mb,meshnormal_vert:gb,meshnormal_frag:vb,meshphong_vert:xb,meshphong_frag:yb,meshphysical_vert:_b,meshphysical_frag:bb,meshtoon_vert:Mb,meshtoon_frag:Sb,points_vert:wb,points_frag:Tb,shadow_vert:Eb,shadow_frag:Ab,sprite_vert:Rb,sprite_frag:Cb},Ye={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Rs={basic:{uniforms:oi([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:oi([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:oi([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:oi([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:oi([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new ue(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:oi([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:oi([Ye.points,Ye.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:oi([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:oi([Ye.common,Ye.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:oi([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:oi([Ye.sprite,Ye.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:oi([Ye.common,Ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:oi([Ye.lights,Ye.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Rs.physical={uniforms:oi([Rs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var yh={r:0,b:0,g:0},Pb=new st,Tg=new vt;Tg.set(-1,0,0,0,1,0,0,0,1);function Ib(i,e,t,n,s,r){let o=new ue(0),l=s===!0?0:1,a,u,h=null,p=0,m=null;function x(d){let g=d.isScene===!0?d.background:null;if(g&&g.isTexture){let v=d.backgroundBlurriness>0;g=e.get(g,v)}return g}function _(d){let g=!1,v=x(d);v===null?c(o,l):v&&v.isColor&&(c(v,1),g=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||g)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(d,g){let v=x(g);v&&(v.isCubeTexture||v.mapping===_l)?(u===void 0&&(u=new pt(new Qt(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:qr(Rs.backgroundCube.uniforms),vertexShader:Rs.backgroundCube.vertexShader,fragmentShader:Rs.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(g.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Tg),u.material.toneMapped=Pt.getTransfer(v.colorSpace)!==qt,(h!==v||p!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new pt(new nn(2,2),new ht({name:"BackgroundMaterial",uniforms:qr(Rs.background.uniforms),vertexShader:Rs.background.vertexShader,fragmentShader:Rs.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,a.material.toneMapped=Pt.getTransfer(v.colorSpace)!==qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||m!==i.toneMapping)&&(a.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),a.layers.enableAll(),d.unshift(a,a.geometry,a.material,0,0,null))}function c(d,g){d.getRGB(yh,D0(i)),t.buffers.color.setClear(yh.r,yh.g,yh.b,g,r)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,g=1){o.set(d),l=g,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,c(o,l)},render:_,addToRenderList:M,dispose:f}}function Lb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function l(C,P,L,R,I){let D=!1,F=p(C,R,L,P);r!==F&&(r=F,u(r.object)),D=x(C,R,L,I),D&&_(C,R,L,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(C,P,L,R),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function a(){return i.createVertexArray()}function u(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function p(C,P,L,R){let I=R.wireframe===!0,D=n[P.id];D===void 0&&(D={},n[P.id]=D);let F=C.isInstancedMesh===!0?C.id:0,N=D[F];N===void 0&&(N={},D[F]=N);let U=N[L.id];U===void 0&&(U={},N[L.id]=U);let W=U[I];return W===void 0&&(W=m(a()),U[I]=W),W}function m(C){let P=[],L=[],R=[];for(let I=0;I<t;I++)P[I]=0,L[I]=0,R[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:R,object:C,attributes:{},index:null}}function x(C,P,L,R){let I=r.attributes,D=P.attributes,F=0,N=L.getAttributes();for(let U in N)if(N[U].location>=0){let k=I[U],X=D[U];if(X===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),k===void 0||k.attribute!==X||X&&k.data!==X.data)return!0;F++}return r.attributesNum!==F||r.index!==R}function _(C,P,L,R){let I={},D=P.attributes,F=0,N=L.getAttributes();for(let U in N)if(N[U].location>=0){let k=D[U];k===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(k=C.instanceColor));let X={};X.attribute=k,k&&k.data&&(X.data=k.data),I[U]=X,F++}r.attributes=I,r.attributesNum=F,r.index=R}function M(){let C=r.newAttributes;for(let P=0,L=C.length;P<L;P++)C[P]=0}function c(C){f(C,0)}function f(C,P){let L=r.newAttributes,R=r.enabledAttributes,I=r.attributeDivisors;L[C]=1,R[C]===0&&(i.enableVertexAttribArray(C),R[C]=1),I[C]!==P&&(i.vertexAttribDivisor(C,P),I[C]=P)}function d(){let C=r.newAttributes,P=r.enabledAttributes;for(let L=0,R=P.length;L<R;L++)P[L]!==C[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function g(C,P,L,R,I,D,F){F===!0?i.vertexAttribIPointer(C,P,L,I,D):i.vertexAttribPointer(C,P,L,R,I,D)}function v(C,P,L,R){M();let I=R.attributes,D=L.getAttributes(),F=P.defaultAttributeValues;for(let N in D){let U=D[N];if(U.location>=0){let W=I[N];if(W===void 0&&(N==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),N==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){let k=W.normalized,X=W.itemSize,ie=e.get(W);if(ie===void 0)continue;let xe=ie.buffer,Te=ie.type,Ee=ie.bytesPerElement,J=Te===i.INT||Te===i.UNSIGNED_INT||W.gpuType===Nu;if(W.isInterleavedBufferAttribute){let Q=W.data,ye=Q.stride,Ie=W.offset;if(Q.isInstancedInterleavedBuffer){for(let K=0;K<U.locationSize;K++)f(U.location+K,Q.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<U.locationSize;K++)c(U.location+K);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let K=0;K<U.locationSize;K++)g(U.location+K,X/U.locationSize,Te,k,ye*Ee,(Ie+X/U.locationSize*K)*Ee,J)}else{if(W.isInstancedBufferAttribute){for(let Q=0;Q<U.locationSize;Q++)f(U.location+Q,W.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Q=0;Q<U.locationSize;Q++)c(U.location+Q);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Q=0;Q<U.locationSize;Q++)g(U.location+Q,X/U.locationSize,Te,k,X*Ee,X/U.locationSize*Q*Ee,J)}}else if(F!==void 0){let k=F[N];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(U.location,k);break;case 3:i.vertexAttrib3fv(U.location,k);break;case 4:i.vertexAttrib4fv(U.location,k);break;default:i.vertexAttrib1fv(U.location,k)}}}}d()}function b(){S();for(let C in n){let P=n[C];for(let L in P){let R=P[L];for(let I in R){let D=R[I];for(let F in D)h(D[F].object),delete D[F];delete R[I]}}delete n[C]}}function T(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let L in P){let R=P[L];for(let I in R){let D=R[I];for(let F in D)h(D[F].object),delete D[F];delete R[I]}}delete n[C.id]}function w(C){for(let P in n){let L=n[P];for(let R in L){let I=L[R];if(I[C.id]===void 0)continue;let D=I[C.id];for(let F in D)h(D[F].object),delete D[F];delete I[C.id]}}}function y(C){for(let P in n){let L=n[P],R=C.isInstancedMesh===!0?C.id:0,I=L[R];if(I!==void 0){for(let D in I){let F=I[D];for(let N in F)h(F[N].object),delete F[N];delete I[D]}delete L[R],Object.keys(L).length===0&&delete n[P]}}}function S(){E(),o=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:S,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:c,disableUnusedAttributes:d}}function Db(i,e,t){let n;function s(a){n=a}function r(a,u){i.drawArrays(n,a,u),t.update(u,n,1)}function o(a,u,h){h!==0&&(i.drawArraysInstanced(n,a,u,h),t.update(u,n,h))}function l(a,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,u,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function Nb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==ri&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){let y=w===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==si&&w!==Yi&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function a(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=a(u);h!==u&&(ft("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:c,maxAttributes:f,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:v,maxSamples:b,samples:T}}function Fb(i){let e=this,t=null,n=0,s=!1,r=!1,o=new cs,l=new vt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let x=p.length!==0||m||n!==0||s;return s=m,n=p.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,x){let _=p.clippingPlanes,M=p.clipIntersection,c=p.clipShadows,f=i.get(p);if(!s||_===null||_.length===0||r&&!c)r?h(null):u();else{let d=r?0:n,g=d*4,v=f.clippingState||null;a.value=v,v=h(_,m,g,x);for(let b=0;b!==g;++b)v[b]=t[b];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=d}};function u(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,x,_){let M=p!==null?p.length:0,c=null;if(M!==0){if(c=a.value,_!==!0||c===null){let f=x+M*4,d=m.matrixWorldInverse;l.getNormalMatrix(d),(c===null||c.length<f)&&(c=new Float32Array(f));for(let g=0,v=x;g!==M;++g,v+=4)o.copy(p[g]).applyMatrix4(d,l),o.normal.toArray(c,v),c[v+3]=o.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,c}}var Ko=4,Ub=6,Bb=20,Ob=256,Rl=new xr,ig=new ue,V0=null,W0=0,G0=0,q0=!1,kb=new H,Yr=new H,bh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=kb}=r;V0=this._renderer.getRenderTarget(),W0=this._renderer.getActiveCubeFace(),G0=this._renderer.getActiveMipmapLevel(),q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a,l),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(V0,W0,G0),this._renderer.xr.enabled=q0,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),V0=this._renderer.getRenderTarget(),W0=this._renderer.getActiveCubeFace(),G0=this._renderer.getActiveMipmapLevel(),q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:En,format:ri,colorSpace:Xa,depthBuffer:!1},s=sg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zb(r)),this._blurMaterial=Vb(r,e,t),this._ggxMaterial=Hb(r,e,t)}return s}_compileMaterial(e){let t=new pt(new xt,e);this._renderer.compile(t,Rl)}_sceneToCubeUV(e,t,n,s,r){let a=new Zn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,x=p.toneMapping;p.getClearColor(ig),p.toneMapping=ds,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Qt,new vn({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,c=M.material,f=!1,d=e.background;d?d.isColor&&(c.color.copy(d),e.background=null,f=!0):(c.color.copy(ig),f=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+h[g],r.y,r.z)):v===1?(a.up.set(0,0,u[g]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+h[g],r.z)):(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+h[g]));let b=this._cubeSize;Zo(s,v*b,g>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(M,a),p.render(e,a)}p.toneMapping=x,p.autoClear=m,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===yr||e.mapping===Gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let a=this._cubeSize;Zo(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,Rl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let a=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),m=u*1.25,x=p*m,{_lodMax:_}=this,M=this._sizeLods[n],c=3*M*(n>_-Ko?n-_+Ko:0),f=4*(this._cubeSize-M);a.envMap.value=e.texture,a.roughness.value=x,a.mipInt.value=_-t,Zo(r,c,f,3*M,2*M),s.setRenderTarget(r),s.render(l,Rl),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=_-n,Zo(e,c,f,3*M,2*M),s.setRenderTarget(e),s.render(l,Rl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,a=this._lodMeshes[s];a.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Ko?s-this._lodMax+Ko:0),m=4*(this._cubeSize-h);Zo(t,p,m,3*h,2*h),o.setRenderTarget(t),o.render(a,Rl)}};function zb(i){let e=[],t=[],n=i,s=i-Ko+1+Ub;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),a=-l,u=1+l,h=[a,a,u,a,u,u,a,a,u,u,a,u],p=6,m=6,x=3,_=new Float32Array(x*m*p),M=new Float32Array(x*m*p);for(let f=0;f<p;f++){let d=f%3*2/3-1,g=f>2?0:-1,v=[d,g,0,d+2/3,g,0,d+2/3,g+1,0,d,g,0,d+2/3,g+1,0,d,g+1,0];_.set(v,x*m*f);for(let b=0;b<m;b++){let T=h[b*2]*2-1,w=h[b*2+1]*2-1;f===0?Yr.set(1,w,T):f===1?Yr.set(-T,1,-w):f===2?Yr.set(-T,w,1):f===3?Yr.set(-1,w,-T):f===4?Yr.set(-T,-1,w):Yr.set(T,w,-1),Yr.toArray(M,(f*m+b)*x)}}let c=new xt;c.setAttribute("position",new _t(_,x)),c.setAttribute("outputDirection",new _t(M,x)),t.push(new pt(c,null)),n>Ko&&n--}return{lodMeshes:t,sizeLods:e}}function sg(i,e,t){let n=new Zt(i,e,t);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Hb(i,e,t){return new ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ob,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wh(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Vb(i,e,t){return new ht({name:"SphericalGaussianBlur",defines:{SAMPLES:Bb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wh(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function rg(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function og(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function wh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Mh=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:ui});r.uniforms.tEquirect.value=t;let o=new pt(s,r),l=t.minFilter;return t.minFilter===zn&&(t.minFilter=Ot),new Ru(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Wb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?o(m):r(m)}function r(m){if(m&&m.isTexture){let x=m.mapping;if(x===Iu||x===Lu)if(e.has(m)){let _=e.get(m).texture;return l(_,m.mapping)}else{let _=m.image;if(_&&_.height>0){let M=new Mh(_.height);return M.fromEquirectangularTexture(i,m),e.set(m,M),m.addEventListener("dispose",u),l(M.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let x=m.mapping,_=x===Iu||x===Lu,M=x===yr||x===Gr;if(_||M){let c=t.get(m),f=c!==void 0?c.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==f)return n===null&&(n=new bh(i)),c=_?n.fromEquirectangular(m,c):n.fromCubemap(m,c),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),c.texture;if(c!==void 0)return c.texture;{let d=m.image;return _&&d&&d.height>0||M&&d&&a(d)?(n===null&&(n=new bh(i)),c=_?n.fromEquirectangular(m):n.fromCubemap(m),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),m.addEventListener("dispose",h),c.texture):null}}}return m}function l(m,x){return x===Iu?m.mapping=yr:x===Lu&&(m.mapping=Gr),m}function a(m){let x=0,_=6;for(let M=0;M<_;M++)m[M]!==void 0&&x++;return x===_}function u(m){let x=m.target;x.removeEventListener("dispose",u);let _=e.get(x);_!==void 0&&(e.delete(x),_.dispose())}function h(m){let x=m.target;x.removeEventListener("dispose",h);let _=t.get(x);_!==void 0&&(t.delete(x),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Gb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ur("WebGLRenderer: "+n+" extension not supported."),s}}}function qb(i,e,t,n){let s={},r=new WeakMap;function o(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete s[m.id];let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function a(p){let m=p.attributes;for(let x in m)e.update(m[x],i.ARRAY_BUFFER)}function u(p){let m=[],x=p.index,_=p.attributes.position,M=0;if(_===void 0)return;if(x!==null){let d=x.array;M=x.version;for(let g=0,v=d.length;g<v;g+=3){let b=d[g+0],T=d[g+1],w=d[g+2];m.push(b,T,T,w,w,b)}}else{let d=_.array;M=_.version;for(let g=0,v=d.length/3-1;g<v;g+=3){let b=g+0,T=g+1,w=g+2;m.push(b,T,T,w,w,b)}}let c=new(_.count>=65535?Qa:ja)(m,1);c.version=M;let f=r.get(p);f&&e.remove(f),r.set(p,c)}function h(p){let m=r.get(p);if(m){let x=p.index;x!==null&&m.version<x.version&&u(p)}else u(p);return r.get(p)}return{get:l,update:a,getWireframeAttribute:h}}function Xb(i,e,t){let n;function s(p){n=p}let r,o;function l(p){r=p.type,o=p.bytesPerElement}function a(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function u(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),t.update(m,n,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let M=0;for(let c=0;c<x;c++)M+=m[c];t.update(M,n,1)}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=u,this.renderMultiDraw=h}function Yb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zb(i,e,t){let n=new WeakMap,s=new dt;function r(o,l,a){let u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0,m=n.get(l);if(m===void 0||m.count!==p){let S=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();let x=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],g=0;x===!0&&(g=1),_===!0&&(g=2),M===!0&&(g=3);let v=l.attributes.position.count*g,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*b*4*p),w=new Ka(T,v,b,p);w.type=Yi,w.needsUpdate=!0;let y=g*4;for(let E=0;E<p;E++){let C=c[E],P=f[E],L=d[E],R=v*b*4*E;for(let I=0;I<C.count;I++){let D=I*y;x===!0&&(s.fromBufferAttribute(C,I),T[R+D+0]=s.x,T[R+D+1]=s.y,T[R+D+2]=s.z,T[R+D+3]=0),_===!0&&(s.fromBufferAttribute(P,I),T[R+D+4]=s.x,T[R+D+5]=s.y,T[R+D+6]=s.z,T[R+D+7]=0),M===!0&&(s.fromBufferAttribute(L,I),T[R+D+8]=s.x,T[R+D+9]=s.y,T[R+D+10]=s.z,T[R+D+11]=L.itemSize===4?s.w:1)}}m={count:p,texture:w,size:new Fe(v,b)},n.set(l,m),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let M=0;M<u.length;M++)x+=u[M];let _=l.morphTargetsRelative?1:1-x;a.getUniforms().setValue(i,"morphTargetBaseInfluence",_),a.getUniforms().setValue(i,"morphTargetInfluences",u)}a.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Kb(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let x=u.skeleton;r.get(x)!==h&&(x.update(),r.set(x,h))}return m}function l(){r=new WeakMap}function a(u){let h=u.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var $b={[v0]:"LINEAR_TONE_MAPPING",[x0]:"REINHARD_TONE_MAPPING",[y0]:"CINEON_TONE_MAPPING",[_0]:"ACES_FILMIC_TONE_MAPPING",[M0]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[b0]:"CUSTOM_TONE_MAPPING"};function Jb(i,e,t,n,s,r){let o=new Zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,a=null,u=new xt;u.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new et([0,2,0,0,2,0],2));let h=new gu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new pt(u,h),m=new xr(-1,1,1,-1,0,1),x=null,_=null,M=!1,c,f=null,d=[],g=!1;this.setSize=function(v,b){o.setSize(v,b),l!==null&&l.setSize(v,b),a!==null&&a.setSize(v,b);for(let T=0;T<d.length;T++){let w=d[T];w.setSize&&w.setSize(v,b)}},this.setEffects=function(v){d=v,g=d.length>0&&d[0].isRenderPass===!0;let b=o.width,T=o.height;d.length>0&&l===null&&(l=new Zt(b,T,{type:En,depthBuffer:!1,stencilBuffer:!1}),a=new Zt(b,T,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<d.length;w++){let y=d[w];y.setSize&&y.setSize(b,T)}},this.begin=function(v,b){if(M||v.toneMapping===ds&&d.length===0)return!1;if(f=b,b!==null){let T=b.width,w=b.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return g===!1&&v.setRenderTarget(o),c=v.toneMapping,v.toneMapping=ds,!0},this.hasRenderPass=function(){return g},this.end=function(v,b){v.toneMapping=c,M=!0;let T=o,w=l;for(let y=0;y<d.length;y++){let S=d[y];S.enabled!==!1&&(S.render(v,w,T,b),S.needsSwap!==!1&&(T=w,w=w===l?a:l))}if(x!==v.outputColorSpace||_!==v.toneMapping){x=v.outputColorSpace,_=v.toneMapping,h.defines={},Pt.getTransfer(x)===qt&&(h.defines.SRGB_TRANSFER="");let y=$b[_];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(f),v.render(p,m),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),u.dispose(),h.dispose()}}var Eg=new ti,Z0=new dr(1,1),Ag=new Ka,Rg=new su,Cg=new nl,ag=[],lg=[],cg=new Float32Array(16),ug=new Float32Array(9),hg=new Float32Array(4);function Jo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ag[s];if(r===void 0&&(r=new Float32Array(s),ag[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Th(i,e){let t=lg[e];t===void 0&&(t=new Int32Array(e),lg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2fv(this.addr,e),Vn(t,e)}}function eM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Hn(t,e))return;i.uniform3fv(this.addr,e),Vn(t,e)}}function tM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4fv(this.addr,e),Vn(t,e)}}function nM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vn(t,e)}else{if(Hn(t,n))return;hg.set(n),i.uniformMatrix2fv(this.addr,!1,hg),Vn(t,n)}}function iM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vn(t,e)}else{if(Hn(t,n))return;ug.set(n),i.uniformMatrix3fv(this.addr,!1,ug),Vn(t,n)}}function sM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vn(t,e)}else{if(Hn(t,n))return;cg.set(n),i.uniformMatrix4fv(this.addr,!1,cg),Vn(t,n)}}function rM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function oM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2iv(this.addr,e),Vn(t,e)}}function aM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3iv(this.addr,e),Vn(t,e)}}function lM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4iv(this.addr,e),Vn(t,e)}}function cM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2uiv(this.addr,e),Vn(t,e)}}function hM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3uiv(this.addr,e),Vn(t,e)}}function fM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4uiv(this.addr,e),Vn(t,e)}}function dM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Z0.compareFunction=t.isReversedDepthBuffer()?xh:vh,r=Z0):r=Eg,t.setTexture2D(e||r,s)}function pM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rg,s)}function mM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cg,s)}function gM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ag,s)}function vM(i){switch(i){case 5126:return jb;case 35664:return Qb;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return hM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function xM(i,e){i.uniform1fv(this.addr,e)}function yM(i,e){let t=Jo(e,this.size,2);i.uniform2fv(this.addr,t)}function _M(i,e){let t=Jo(e,this.size,3);i.uniform3fv(this.addr,t)}function bM(i,e){let t=Jo(e,this.size,4);i.uniform4fv(this.addr,t)}function MM(i,e){let t=Jo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function SM(i,e){let t=Jo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wM(i,e){let t=Jo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function TM(i,e){i.uniform1iv(this.addr,e)}function EM(i,e){i.uniform2iv(this.addr,e)}function AM(i,e){i.uniform3iv(this.addr,e)}function RM(i,e){i.uniform4iv(this.addr,e)}function CM(i,e){i.uniform1uiv(this.addr,e)}function PM(i,e){i.uniform2uiv(this.addr,e)}function IM(i,e){i.uniform3uiv(this.addr,e)}function LM(i,e){i.uniform4uiv(this.addr,e)}function DM(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Z0:o=Eg;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function NM(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rg,r[o])}function FM(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cg,r[o])}function UM(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ag,r[o])}function BM(i){switch(i){case 5126:return xM;case 35664:return yM;case 35665:return _M;case 35666:return bM;case 35674:return MM;case 35675:return SM;case 35676:return wM;case 5124:case 35670:return TM;case 35667:case 35671:return EM;case 35668:case 35672:return AM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return PM;case 36295:return IM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return UM}}var K0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vM(t.type)}},$0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BM(t.type)}},J0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},X0=/(\w+)(\])?(\[|\.)?/g;function fg(i,e){i.seq.push(e),i.map[e.id]=e}function OM(i,e,t){let n=i.name,s=n.length;for(X0.lastIndex=0;;){let r=X0.exec(n),o=X0.lastIndex,l=r[1],a=r[2]==="]",u=r[3];if(a&&(l=l|0),u===void 0||u==="["&&o+2===s){fg(t,u===void 0?new K0(l,i,e):new $0(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new J0(l),fg(t,p)),t=p}}}var $o=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);OM(l,a,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function dg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kM=37297,zM=0;function HM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var pg=new vt;function VM(i){Pt._getMatrix(pg,Pt.workingColorSpace,i);let e=`mat3( ${pg.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(i)){case Ya:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+HM(i.getShaderSource(e),l)}else return r}function WM(i,e){let t=VM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var GM={[v0]:"Linear",[x0]:"Reinhard",[y0]:"Cineon",[_0]:"ACESFilmic",[M0]:"AgX",[yl]:"Neutral",[b0]:"Custom"};function qM(i,e){let t=GM[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _h=new H;function XM(){Pt.getLuminanceCoefficients(_h);let i=_h.x.toFixed(4),e=_h.y.toFixed(4),t=_h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function ZM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function KM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Pl(i){return i!==""}function gg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function j0(i){return i.replace($M,jM)}var JM=new Map;function jM(i,e){let t=mt[e];if(t===void 0){let n=JM.get(e);if(n!==void 0)t=mt[n],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return j0(t)}var QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xg(i){return i.replace(QM,eS)}function eS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var tS={[Vr]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function nS(i){return tS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iS={[yr]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[_l]:"ENVMAP_TYPE_CUBE_UV"};function sS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":iS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var rS={[Gr]:"ENVMAP_MODE_REFRACTION"};function oS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aS={[g0]:"ENVMAP_BLENDING_MULTIPLY",[Dm]:"ENVMAP_BLENDING_MIX",[Nm]:"ENVMAP_BLENDING_ADD"};function lS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":aS[i.combine]||"ENVMAP_BLENDING_NONE"}function cS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function uS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,a=nS(t),u=sS(t),h=oS(t),p=lS(t),m=cS(t),x=YM(t),_=ZM(r),M=s.createProgram(),c,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pl).join(`
`),c.length>0&&(c+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pl).join(`
`),f.length>0&&(f+=`
`)):(c=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),f=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?mt.tonemapping_pars_fragment:"",t.toneMapping!==ds?qM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,WM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pl).join(`
`)),o=j0(o),o=gg(o,t),o=vg(o,t),l=j0(l),l=gg(l,t),l=vg(l,t),o=xg(o),l=xg(l),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,c=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,f=["#define varying in",t.glslVersion===P0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===P0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let g=d+c+o,v=d+f+l,b=dg(s,s.VERTEX_SHADER,g),T=dg(s,s.FRAGMENT_SHADER,v);s.attachShader(M,b),s.attachShader(M,T),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(M)||"",L=s.getShaderInfoLog(b)||"",R=s.getShaderInfoLog(T)||"",I=P.trim(),D=L.trim(),F=R.trim(),N=!0,U=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,T);else{let W=mg(s,b,"vertex"),k=mg(s,T,"fragment");gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+k)}else I!==""?ft("WebGLProgram: Program Info Log:",I):(D===""||F==="")&&(U=!1);U&&(C.diagnostics={runnable:N,programLog:I,vertexShader:{log:D,prefix:c},fragmentShader:{log:F,prefix:f}})}s.deleteShader(b),s.deleteShader(T),y=new $o(s,M),S=KM(s,M)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,kM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=T,this}var hS=0,Q0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ed(e),t.set(e,n)),n}},ed=class{constructor(e){this.id=hS++,this.code=e,this.usedTimes=0}};function fS(i){return i===br||i===El||i===Al}function dS(i,e,t,n,s,r){let o=new $a,l=new Q0,a=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,m=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return a.add(y),y===0?"uv":`uv${y}`}function M(y,S,E,C,P,L){let R=C.fog,I=P.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=e.get(y.envMap||D,F),U=N&&N.mapping===_l?N.image.height:null,W=x[y.type];y.precision!==null&&(m=n.getMaxPrecision(y.precision),m!==y.precision&&ft("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,X=k!==void 0?k.length:0,ie=0;I.morphAttributes.position!==void 0&&(ie=1),I.morphAttributes.normal!==void 0&&(ie=2),I.morphAttributes.color!==void 0&&(ie=3);let xe,Te,Ee,J;if(W){let kt=Rs[W];xe=kt.vertexShader,Te=kt.fragmentShader}else{xe=y.vertexShader,Te=y.fragmentShader;let kt=l.getVertexShaderStage(y),Ht=l.getFragmentShaderStage(y);l.update(y,kt,Ht),Ee=kt.id,J=Ht.id}let Q=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ie=P.isInstancedMesh===!0,K=P.isBatchedMesh===!0,ve=!!y.map,Oe=!!y.matcap,Ve=!!N,Ge=!!y.aoMap,Ze=!!y.lightMap,ot=!!y.bumpMap&&y.wireframe===!1,ct=!!y.normalMap,Me=!!y.displacementMap,De=!!y.emissiveMap,Ne=!!y.metalnessMap,Ae=!!y.roughnessMap,V=y.anisotropy>0,He=y.clearcoat>0,oe=y.dispersion>0,O=y.retroreflectivity>0,A=y.iridescence>0,z=y.sheen>0,G=y.transmission>0,q=V&&!!y.anisotropyMap,j=He&&!!y.clearcoatMap,te=He&&!!y.clearcoatNormalMap,$=He&&!!y.clearcoatRoughnessMap,re=A&&!!y.iridescenceMap,ae=A&&!!y.iridescenceThicknessMap,ge=z&&!!y.sheenColorMap,fe=z&&!!y.sheenRoughnessMap,_e=!!y.specularMap,de=!!y.specularColorMap,Be=!!y.specularIntensityMap,ke=G&&!!y.transmissionMap,Z=G&&!!y.thicknessMap,Pe=!!y.gradientMap,pe=!!y.alphaMap,Ue=y.alphaTest>0,We=!!y.alphaHash,Re=!!y.extensions,lt=ds;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(lt=i.toneMapping);let tt={shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:xe,fragmentShader:Te,defines:y.defines,customVertexShaderID:Ee,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:K,batchingColor:K&&P._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&P.instanceColor!==null,instancingMorph:Ie&&P.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:Oe,envMap:Ve,envMapMode:Ve&&N.mapping,envMapCubeUVHeight:U,aoMap:Ge,lightMap:Ze,bumpMap:ot,normalMap:ct,displacementMap:Me,emissiveMap:De,normalMapObjectSpace:ct&&y.normalMapType===Bm,normalMapTangentSpace:ct&&y.normalMapType===gh,packedNormalMap:ct&&y.normalMapType===gh&&fS(y.normalMap.format),metalnessMap:Ne,roughnessMap:Ae,anisotropy:V,anisotropyMap:q,clearcoat:He,clearcoatMap:j,clearcoatNormalMap:te,clearcoatRoughnessMap:$,dispersion:oe,retroreflection:O,iridescence:A,iridescenceMap:re,iridescenceThicknessMap:ae,sheen:z,sheenColorMap:ge,sheenRoughnessMap:fe,specularMap:_e,specularColorMap:de,specularIntensityMap:Be,transmission:G,transmissionMap:ke,thicknessMap:Z,gradientMap:Pe,opaque:y.transparent===!1&&y.blending===Go&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ue,alphaHash:We,combine:y.combine,mapUv:ve&&_(y.map.channel),aoMapUv:Ge&&_(y.aoMap.channel),lightMapUv:Ze&&_(y.lightMap.channel),bumpMapUv:ot&&_(y.bumpMap.channel),normalMapUv:ct&&_(y.normalMap.channel),displacementMapUv:Me&&_(y.displacementMap.channel),emissiveMapUv:De&&_(y.emissiveMap.channel),metalnessMapUv:Ne&&_(y.metalnessMap.channel),roughnessMapUv:Ae&&_(y.roughnessMap.channel),anisotropyMapUv:q&&_(y.anisotropyMap.channel),clearcoatMapUv:j&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(y.sheenRoughnessMap.channel),specularMapUv:_e&&_(y.specularMap.channel),specularColorMapUv:de&&_(y.specularColorMap.channel),specularIntensityMapUv:Be&&_(y.specularIntensityMap.channel),transmissionMapUv:ke&&_(y.transmissionMap.channel),thicknessMapUv:Z&&_(y.thicknessMap.channel),alphaMapUv:pe&&_(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ct||V),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(ve||pe),fog:!!R,useFog:y.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ye,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ie,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&Pt.getTransfer(y.map.colorSpace)===qt,decodeVideoTextureEmissive:De&&y.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(y.emissiveMap.colorSpace)===qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===Kn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||K)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=a.has(1),tt.vertexUv2s=a.has(2),tt.vertexUv3s=a.has(3),a.clear(),tt}function c(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let E in y.defines)S.push(E),S.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(f(S,y),d(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function f(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function d(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function g(y){let S=x[y.type],E;if(S){let C=Rs[S];E=Xr.clone(C.uniforms)}else E=y.uniforms;return E}function v(y,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new uS(i,S,y,s),u.push(E),h.set(S,E)),E}function b(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){l.remove(y)}function w(){l.dispose()}return{getParameters:M,getProgramCacheKey:c,getUniforms:g,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:w}}function pS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _g(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function l(m,x,_,M,c,f){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:x,material:_,materialVariant:o(m),groupOrder:M,renderOrder:m.renderOrder,z:c,group:f},i[e]=d):(d.id=m.id,d.object=m,d.geometry=x,d.material=_,d.materialVariant=o(m),d.groupOrder=M,d.renderOrder=m.renderOrder,d.z=c,d.group=f),e++,d}function a(m,x,_,M,c,f,d){d.reversedDepth===!0&&(c=-c);let g=l(m,x,_,M,c,f);_.transmission>0?n.push(g):_.transparent===!0?s.push(g):t.push(g)}function u(m,x,_,M,c,f){let d=l(m,x,_,M,c,f);_.transmission>0?n.unshift(d):_.transparent===!0?s.unshift(d):t.unshift(d)}function h(m,x){t.length>1&&t.sort(m||mS),n.length>1&&n.sort(x||_g),s.length>1&&s.sort(x||_g)}function p(){for(let m=e,x=i.length;m<x;m++){let _=i[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:u,finish:p,sort:h}}function gS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new bg,i.set(n,[o])):s>=r.length?(o=new bg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function vS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new ue};break;case"SpotLight":t={position:new H,direction:new H,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function xS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yS=0;function _S(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bS(i){let e=new vS,t=xS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);let s=new H,r=new st,o=new st;function l(u){let h=0,p=0,m=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let x=0,_=0,M=0,c=0,f=0,d=0,g=0,v=0,b=0,T=0,w=0,y=0,S=0,E=0;u.sort(_S);for(let P=0,L=u.length;P<L;P++){let R=u[P],I=R.color,D=R.intensity,F=R.distance,N=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===br?N=R.shadow.map.texture:N=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=I.r*D,p+=I.g*D,m+=I.b*D;else if(R.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(R.sh.coefficients[U],D);E++}else if(R.isSunLight){let U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[_]=k,n.sunShadowMap[_]=N;let X=W.getViewportCount();for(let ie=0;ie<X;ie++)n.sunShadowMatrix[M+ie]=W.getMatrix(ie),n.sunShadowCascade[M+ie]=W._cascadeData[ie];M+=X,_++}n.sun[x]=U,x++}else if(R.isDirectionalLight){let U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[c]=k,n.directionalShadowMap[c]=N,n.directionalShadowMatrix[c]=R.shadow.matrix,b++}n.directional[c]=U,c++}else if(R.isSpotLight){let U=e.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(I).multiplyScalar(D),U.distance=F,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,n.spot[d]=U;let W=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,W.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[d]=W.matrix,R.castShadow){let k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[d]=k,n.spotShadowMap[d]=N,w++}d++}else if(R.isRectAreaLight){let U=e.get(R);U.color.copy(I).multiplyScalar(D),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=U,g++}else if(R.isPointLight){let U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){let W=R.shadow,k=t.get(R);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[f]=k,n.pointShadowMap[f]=N,n.pointShadowMatrix[f]=R.shadow.matrix,T++}n.point[f]=U,f++}else if(R.isHemisphereLight){let U=e.get(R);U.skyColor.copy(R.color).multiplyScalar(D),U.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[v]=U,v++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;let C=n.hash;(C.sunLength!==x||C.directionalLength!==c||C.pointLength!==f||C.spotLength!==d||C.rectAreaLength!==g||C.hemiLength!==v||C.numSunShadows!==_||C.numDirectionalShadows!==b||C.numPointShadows!==T||C.numSpotShadows!==w||C.numSpotMaps!==y||C.numLightProbes!==E)&&(n.sun.length=x,n.directional.length=c,n.spot.length=d,n.rectArea.length=g,n.point.length=f,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-S,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,C.sunLength=x,C.directionalLength=c,C.pointLength=f,C.spotLength=d,C.rectAreaLength=g,C.hemiLength=v,C.numSunShadows=_,C.numDirectionalShadows=b,C.numPointShadows=T,C.numSpotShadows=w,C.numSpotMaps=y,C.numLightProbes=E,n.version=yS++)}function a(u,h){let p=0,m=0,x=0,_=0,M=0,c=0,f=h.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){let v=u[d];if(v.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let b=n.directional[m];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(v.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),_++}else if(v.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let b=n.point[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),x++}else if(v.isHemisphereLight){let b=n.hemi[c];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),c++}}}return{setup:l,setupView:a,state:n}}function Mg(i){let e=new bS(i),t=[],n=[],s=[];function r(m){p.camera=m,t.length=0,n.length=0,s.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function a(m){s.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:a}}function MS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new Mg(i),e.set(s,[l])):r>=o.length?(l=new Mg(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var SS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
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
}`,TS=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],ES=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Sg=new st,Cl=new H,Y0=new H;function AS(i,e,t){let n=new No,s=new Fe,r=new Fe,o=new dt,l=new pr,a=new vu,u={},h=t.maxTextureSize,p={[Es]:Kn,[Kn]:Es,[Tn]:Tn},m=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:SS,fragmentShader:wS}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let _=new xt;_.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new pt(_,m),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let f=this.type;this.render=function(T,w,y){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||T.length===0)return;this.type===pm&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ui),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=f!==this.type;L&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(I=>I.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,I=T.length;R<I;R++){let D=T[R],F=D.shadow;if(F===void 0){ft("WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let N=F.getFrameExtents();s.multiply(N),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/N.x),s.x=r.x*N.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/N.y),s.y=r.y*N.y,F.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=U,F.map===null||L===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Wo){if(D.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Zt(s.x,s.y,{format:br,type:En,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),F.map.texture.name=D.name+".shadowMap",F.map.depthTexture=new dr(s.x,s.y,Yi),F.map.depthTexture.name=D.name+".shadowMapDepth",F.map.depthTexture.format=Ms,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn}else D.isPointLight?(F.map=new Mh(s.x),F.map.depthTexture=new lu(s.x,ps)):(F.map=new Zt(s.x,s.y),F.map.depthTexture=new dr(s.x,s.y,ps)),F.map.depthTexture.name=D.name+".shadowMap",F.map.depthTexture.format=Ms,this.type===Vr?(F.map.depthTexture.compareFunction=U?xh:vh,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let W=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();D.isPointLight!==!0&&F.updateMatrices(D,y);for(let k=0;k<W;k++){let X=F.getCamera(k);if(D.isPointLight){let ie=F.camera,xe=F.matrix,Te=D.distance||ie.far;Te!==ie.far&&(ie.far=Te,ie.updateProjectionMatrix()),Cl.setFromMatrixPosition(D.matrixWorld),ie.position.copy(Cl),Y0.copy(ie.position),Y0.add(TS[k]),ie.up.copy(ES[k]),ie.lookAt(Y0),ie.updateMatrixWorld(),xe.makeTranslation(-Cl.x,-Cl.y,-Cl.z),Sg.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Sg,ie.coordinateSystem,ie.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,k),i.clear();else{k===0&&(i.setRenderTarget(F.map),i.clear());let ie=F.getViewport(k);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),P.viewport(o)}n=F.getFrustum(k),v(w,y,X,D,this.type)}F.isPointLightShadow!==!0&&this.type===Wo&&d(F,y),F.needsUpdate=!1}f=this.type,c.needsUpdate=!1,i.setRenderTarget(S,E,C)};function d(T,w){let y=e.update(M);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null?T.mapPass=new Zt(s.x,s.y,{format:br,type:En}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,y,m,M,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value.set(T.map.width,T.map.height),x.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,y,x,M,null)}function g(T,w,y,S){let E=null,C=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)E=C;else if(E=y.isPointLight===!0?a:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let P=E.uuid,L=w.uuid,R=u[P];R===void 0&&(R={},u[P]=R);let I=R[L];I===void 0&&(I=E.clone(),R[L]=I,w.addEventListener("dispose",b)),E=I}if(E.visible=w.visible,E.wireframe=w.wireframe,S===Wo?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:p[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let P=i.properties.get(E);P.light=y}return E}function v(T,w,y,S,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Wo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let L=e.update(T),R=T.material;if(Array.isArray(R)){let I=L.groups;for(let D=0,F=I.length;D<F;D++){let N=I[D],U=R[N.materialIndex];if(U&&U.visible){let W=g(T,U,S,E);T.onBeforeShadow(i,T,w,y,L,W,N),i.renderBufferDirect(y,null,L,W,T,N),T.onAfterShadow(i,T,w,y,L,W,N)}}}else if(R.visible){let I=g(T,R,S,E);T.onBeforeShadow(i,T,w,y,L,I,null),i.renderBufferDirect(y,null,L,I,T,null),T.onAfterShadow(i,T,w,y,L,I,null)}}let P=T.children;for(let L=0,R=P.length;L<R;L++)v(P[L],w,y,S,E)}function b(T){T.target.removeEventListener("dispose",b);for(let y in u){let S=u[y],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function RS(i,e){function t(){let Z=!1,Pe=new dt,pe=null,Ue=new dt(0,0,0,0);return{setMask:function(We){pe!==We&&!Z&&(i.colorMask(We,We,We,We),pe=We)},setLocked:function(We){Z=We},setClear:function(We,Re,lt,tt,kt){kt===!0&&(We*=tt,Re*=tt,lt*=tt),Pe.set(We,Re,lt,tt),Ue.equals(Pe)===!1&&(i.clearColor(We,Re,lt,tt),Ue.copy(Pe))},reset:function(){Z=!1,pe=null,Ue.set(-1,0,0,0)}}}function n(){let Z=!1,Pe=!1,pe=null,Ue=null,We=null;return{setReversed:function(Re){if(Pe!==Re){let lt=e.get("EXT_clip_control");Re?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),Pe=Re;let tt=We;We=null,this.setClear(tt)}},getReversed:function(){return Pe},setTest:function(Re){Re?Q(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Re){pe!==Re&&!Z&&(i.depthMask(Re),pe=Re)},setFunc:function(Re){if(Pe&&(Re=Km[Re]),Ue!==Re){switch(Re){case Yc:i.depthFunc(i.NEVER);break;case Zc:i.depthFunc(i.ALWAYS);break;case Kc:i.depthFunc(i.LESS);break;case Ao:i.depthFunc(i.LEQUAL);break;case $c:i.depthFunc(i.EQUAL);break;case Jc:i.depthFunc(i.GEQUAL);break;case jc:i.depthFunc(i.GREATER);break;case Qc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=Re}},setLocked:function(Re){Z=Re},setClear:function(Re){We!==Re&&(We=Re,Pe&&(Re=1-Re),i.clearDepth(Re))},reset:function(){Z=!1,pe=null,Ue=null,We=null,Pe=!1}}}function s(){let Z=!1,Pe=null,pe=null,Ue=null,We=null,Re=null,lt=null,tt=null,kt=null;return{setTest:function(Ht){Z||(Ht?Q(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ht){Pe!==Ht&&!Z&&(i.stencilMask(Ht),Pe=Ht)},setFunc:function(Ht,Ai,zi){(pe!==Ht||Ue!==Ai||We!==zi)&&(i.stencilFunc(Ht,Ai,zi),pe=Ht,Ue=Ai,We=zi)},setOp:function(Ht,Ai,zi){(Re!==Ht||lt!==Ai||tt!==zi)&&(i.stencilOp(Ht,Ai,zi),Re=Ht,lt=Ai,tt=zi)},setLocked:function(Ht){Z=Ht},setClear:function(Ht){kt!==Ht&&(i.clearStencil(Ht),kt=Ht)},reset:function(){Z=!1,Pe=null,pe=null,Ue=null,We=null,Re=null,lt=null,tt=null,kt=null}}}let r=new t,o=new n,l=new s,a=new WeakMap,u=new WeakMap,h={},p={},m={},x=new WeakMap,_=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,y=new ue(0,0,0),S=0,E=!1,C=null,P=null,L=null,R=null,I=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,N=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),F=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),F=N>=2);let W=null,k={},X=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),xe=new dt().fromArray(X),Te=new dt().fromArray(ie);function Ee(Z,Pe,pe,Ue){let We=new Uint8Array(4),Re=i.createTexture();i.bindTexture(Z,Re),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<pe;lt++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,We):i.texImage2D(Pe+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,We);return Re}let J={};J[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Ao),ot(!1),ct(h0),Q(i.CULL_FACE),Ge(ui);function Q(Z){h[Z]!==!0&&(i.enable(Z),h[Z]=!0)}function ye(Z){h[Z]!==!1&&(i.disable(Z),h[Z]=!1)}function Ie(Z,Pe){return m[Z]!==Pe?(i.bindFramebuffer(Z,Pe),m[Z]=Pe,Z===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Pe),Z===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function K(Z,Pe){let pe=_,Ue=!1;if(Z){pe=x.get(Pe),pe===void 0&&(pe=[],x.set(Pe,pe));let We=Z.textures;if(pe.length!==We.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,lt=We.length;Re<lt;Re++)pe[Re]=i.COLOR_ATTACHMENT0+Re;pe.length=We.length,Ue=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(pe)}function ve(Z){return M!==Z?(i.useProgram(Z),M=Z,!0):!1}let Oe={[Wr]:i.FUNC_ADD,[gm]:i.FUNC_SUBTRACT,[vm]:i.FUNC_REVERSE_SUBTRACT};Oe[xm]=i.MIN,Oe[ym]=i.MAX;let Ve={[_m]:i.ZERO,[bm]:i.ONE,[Mm]:i.SRC_COLOR,[p0]:i.SRC_ALPHA,[Rm]:i.SRC_ALPHA_SATURATE,[Em]:i.DST_COLOR,[wm]:i.DST_ALPHA,[Sm]:i.ONE_MINUS_SRC_COLOR,[m0]:i.ONE_MINUS_SRC_ALPHA,[Am]:i.ONE_MINUS_DST_COLOR,[Tm]:i.ONE_MINUS_DST_ALPHA,[Cm]:i.CONSTANT_COLOR,[Pm]:i.ONE_MINUS_CONSTANT_COLOR,[Im]:i.CONSTANT_ALPHA,[Lm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(Z,Pe,pe,Ue,We,Re,lt,tt,kt,Ht){if(Z===ui){c===!0&&(ye(i.BLEND),c=!1);return}if(c===!1&&(Q(i.BLEND),c=!0),Z!==mm){if(Z!==f||Ht!==E){if((d!==Wr||b!==Wr)&&(i.blendEquation(i.FUNC_ADD),d=Wr,b=Wr),Ht)switch(Z){case Go:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case f0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case d0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:gt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case f0:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d0:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",Z);break}g=null,v=null,T=null,w=null,y.set(0,0,0),S=0,f=Z,E=Ht}return}We=We||Pe,Re=Re||pe,lt=lt||Ue,(Pe!==d||We!==b)&&(i.blendEquationSeparate(Oe[Pe],Oe[We]),d=Pe,b=We),(pe!==g||Ue!==v||Re!==T||lt!==w)&&(i.blendFuncSeparate(Ve[pe],Ve[Ue],Ve[Re],Ve[lt]),g=pe,v=Ue,T=Re,w=lt),(tt.equals(y)===!1||kt!==S)&&(i.blendColor(tt.r,tt.g,tt.b,kt),y.copy(tt),S=kt),f=Z,E=!1}function Ze(Z,Pe){Z.side===Tn?ye(i.CULL_FACE):Q(i.CULL_FACE);let pe=Z.side===Kn;Pe&&(pe=!pe),ot(pe),Z.blending===Go&&Z.transparent===!1?Ge(ui):Ge(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let Ue=Z.stencilWrite;l.setTest(Ue),Ue&&(l.setMask(Z.stencilWriteMask),l.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),l.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),De(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(Z){C!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),C=Z)}function ct(Z){Z!==fm?(Q(i.CULL_FACE),Z!==P&&(Z===h0?i.cullFace(i.BACK):Z===dm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),P=Z}function Me(Z){Z!==L&&(F&&i.lineWidth(Z),L=Z)}function De(Z,Pe,pe){Z?(Q(i.POLYGON_OFFSET_FILL),(R!==Pe||I!==pe)&&(R=Pe,I=pe,o.getReversed()&&(Pe=-Pe),i.polygonOffset(Pe,pe))):ye(i.POLYGON_OFFSET_FILL)}function Ne(Z){Z?Q(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Ae(Z){Z===void 0&&(Z=i.TEXTURE0+D-1),W!==Z&&(i.activeTexture(Z),W=Z)}function V(Z,Pe,pe){pe===void 0&&(W===null?pe=i.TEXTURE0+D-1:pe=W);let Ue=k[pe];Ue===void 0&&(Ue={type:void 0,texture:void 0},k[pe]=Ue),(Ue.type!==Z||Ue.texture!==Pe)&&(W!==pe&&(i.activeTexture(pe),W=pe),i.bindTexture(Z,Pe||J[Z]),Ue.type=Z,Ue.texture=Pe)}function He(){let Z=k[W];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function oe(){try{i.compressedTexImage2D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function A(){try{i.texSubImage2D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function z(){try{i.texSubImage3D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function j(){try{i.texStorage2D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function te(){try{i.texStorage3D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function $(){try{i.texImage2D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function re(){try{i.texImage3D(...arguments)}catch(Z){gt("WebGLState:",Z)}}function ae(Z){return p[Z]!==void 0?p[Z]:i.getParameter(Z)}function ge(Z,Pe){p[Z]!==Pe&&(i.pixelStorei(Z,Pe),p[Z]=Pe)}function fe(Z){xe.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),xe.copy(Z))}function _e(Z){Te.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Te.copy(Z))}function de(Z,Pe){let pe=u.get(Pe);pe===void 0&&(pe=new WeakMap,u.set(Pe,pe));let Ue=pe.get(Z);Ue===void 0&&(Ue=i.getUniformBlockIndex(Pe,Z.name),pe.set(Z,Ue))}function Be(Z,Pe){let Ue=u.get(Pe).get(Z);a.get(Pe)!==Ue&&(i.uniformBlockBinding(Pe,Ue,Z.__bindingPointIndex),a.set(Pe,Ue))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},W=null,k={},m={},x=new WeakMap,_=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,y=new ue(0,0,0),S=0,E=!1,C=null,P=null,L=null,R=null,I=null,xe.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:Q,disable:ye,bindFramebuffer:Ie,drawBuffers:K,useProgram:ve,setBlending:Ge,setMaterial:Ze,setFlipSided:ot,setCullFace:ct,setLineWidth:Me,setPolygonOffset:De,setScissorTest:Ne,activeTexture:Ae,bindTexture:V,unbindTexture:He,compressedTexImage2D:oe,compressedTexImage3D:O,texImage2D:$,texImage3D:re,pixelStorei:ge,getParameter:ae,updateUBOMapping:de,uniformBlockBinding:Be,texStorage2D:j,texStorage3D:te,texSubImage2D:A,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:fe,viewport:_e,reset:ke}}function CS(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,h=new WeakMap,p=new Set,m,x=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,A){return _?new OffscreenCanvas(O,A):Co("canvas")}function c(O,A,z){let G=1,q=oe(O);if((q.width>z||q.height>z)&&(G=z/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let j=Math.floor(G*q.width),te=Math.floor(G*q.height);m===void 0&&(m=M(j,te));let $=A?M(j,te):m;return $.width=j,$.height=te,$.getContext("2d").drawImage(O,0,0,j,te),ft("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+j+"x"+te+")."),$}else return"data"in O&&ft("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),O;return O}function f(O){return O.generateMipmaps}function d(O){i.generateMipmap(O)}function g(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(O,A,z,G,q,j=!1){if(O!==null){if(i[O]!==void 0)return i[O];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let te;G&&(te=e.get("EXT_texture_norm16"),te||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=A;if(A===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8),z===i.UNSIGNED_SHORT&&te&&($=te.R16_EXT),z===i.SHORT&&te&&($=te.R16_SNORM_EXT)),A===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),A===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8),z===i.UNSIGNED_SHORT&&te&&($=te.RG16_EXT),z===i.SHORT&&te&&($=te.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),A===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),A===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),A===i.RGB&&(z===i.UNSIGNED_SHORT&&te&&($=te.RGB16_EXT),z===i.SHORT&&te&&($=te.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),A===i.RGBA){let re=j?Ya:Pt.getTransfer(q);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=re===qt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&te&&($=te.RGBA16_EXT),z===i.SHORT&&te&&($=te.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(O,A){let z;return O?A===null||A===ps||A===Xo?z=i.DEPTH24_STENCIL8:A===Yi?z=i.DEPTH32F_STENCIL8:A===qo&&(z=i.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ps||A===Xo?z=i.DEPTH_COMPONENT24:A===Yi?z=i.DEPTH_COMPONENT32F:A===qo&&(z=i.DEPTH_COMPONENT16),z}function T(O,A){return f(O)===!0||O.isFramebufferTexture&&O.minFilter!==Nn&&O.minFilter!==Ot?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function w(O){let A=O.target;A.removeEventListener("dispose",w),S(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&p.delete(A)}function y(O){let A=O.target;A.removeEventListener("dispose",y),C(A)}function S(O){let A=n.get(O);if(A.__webglInit===void 0)return;let z=O.source,G=x.get(z);if(G){let q=G[A.__cacheKey];q.usedTimes--,q.usedTimes===0&&E(O),Object.keys(G).length===0&&x.delete(z)}n.remove(O)}function E(O){let A=n.get(O);i.deleteTexture(A.__webglTexture);let z=O.source,G=x.get(z);delete G[A.__cacheKey],o.memory.textures--}function C(O){let A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(A.__webglFramebuffer[G]))for(let q=0;q<A.__webglFramebuffer[G].length;q++)i.deleteFramebuffer(A.__webglFramebuffer[G][q]);else i.deleteFramebuffer(A.__webglFramebuffer[G]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[G])}else{if(Array.isArray(A.__webglFramebuffer))for(let G=0;G<A.__webglFramebuffer.length;G++)i.deleteFramebuffer(A.__webglFramebuffer[G]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let G=0;G<A.__webglColorRenderbuffer.length;G++)A.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[G]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let z=O.textures;for(let G=0,q=z.length;G<q;G++){let j=n.get(z[G]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[G])}n.remove(O)}let P=0;function L(){P=0}function R(){return P}function I(O){P=O}function D(){let O=P;return O>=s.maxTextures&&ft("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,O}function F(O){let A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function N(O,A){let z=n.get(O);if(O.isVideoTexture&&V(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&z.__version!==O.version){let G=O.image;if(G===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(z,O,A);return}}else O.isExternalTexture&&(z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+A)}function U(O,A){let z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&z.__version!==O.version){ye(z,O,A);return}else O.isExternalTexture&&(z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+A)}function W(O,A){let z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&z.__version!==O.version){ye(z,O,A);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+A)}function k(O,A){let z=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&z.__version!==O.version){Ie(z,O,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+A)}let X={[hs]:i.REPEAT,[bs]:i.CLAMP_TO_EDGE,[eu]:i.MIRRORED_REPEAT},ie={[Nn]:i.NEAREST,[Fm]:i.NEAREST_MIPMAP_NEAREST,[bl]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Du]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},xe={[km]:i.NEVER,[Gm]:i.ALWAYS,[zm]:i.LESS,[vh]:i.LEQUAL,[Hm]:i.EQUAL,[xh]:i.GEQUAL,[Vm]:i.GREATER,[Wm]:i.NOTEQUAL};function Te(O,A){if(A.type===Yi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ot||A.magFilter===Du||A.magFilter===bl||A.magFilter===zn||A.minFilter===Ot||A.minFilter===Du||A.minFilter===bl||A.minFilter===zn)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,X[A.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,X[A.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,X[A.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ie[A.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ie[A.minFilter]),A.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,xe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Nn||A.minFilter!==bl&&A.minFilter!==zn||A.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ee(O,A){let z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",w));let G=A.source,q=x.get(G);q===void 0&&(q={},x.set(G,q));let j=F(A);if(j!==O.__cacheKey){q[j]===void 0&&(q[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),q[j].usedTimes++;let te=q[O.__cacheKey];te!==void 0&&(q[O.__cacheKey].usedTimes--,te.usedTimes===0&&E(A)),O.__cacheKey=j,O.__webglTexture=q[j].texture}return z}function J(O,A,z){return Math.floor(Math.floor(O/z)/A)}function Q(O,A,z,G){let j=O.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,z,G,A.data);else{j.sort((ge,fe)=>ge.start-fe.start);let te=0;for(let ge=1;ge<j.length;ge++){let fe=j[te],_e=j[ge],de=fe.start+fe.count,Be=J(_e.start,A.width,4),ke=J(fe.start,A.width,4);_e.start<=de+1&&Be===ke&&J(_e.start+_e.count-1,A.width,4)===Be?fe.count=Math.max(fe.count,_e.start+_e.count-fe.start):(++te,j[te]=_e)}j.length=te+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let ge=0,fe=j.length;ge<fe;ge++){let _e=j[ge],de=Math.floor(_e.start/4),Be=Math.ceil(_e.count/4),ke=de%A.width,Z=Math.floor(de/A.width),Pe=Be,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,ke,Z,Pe,pe,z,G,A.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ye(O,A,z){let G=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(G=i.TEXTURE_3D);let q=Ee(O,A),j=A.source;t.bindTexture(G,O.__webglTexture,i.TEXTURE0+z);let te=n.get(j);if(j.version!==te.__version||q===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let pe=Pt.getPrimaries(Pt.workingColorSpace),Ue=A.colorSpace===hi?null:Pt.getPrimaries(A.colorSpace),We=A.colorSpace===hi||pe===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let re=c(A.image,!1,s.maxTextureSize);re=He(A,re);let ae=r.convert(A.format,A.colorSpace),ge=r.convert(A.type),fe=v(A.internalFormat,ae,ge,A.normalized,A.colorSpace,A.isVideoTexture);Te(G,A);let _e,de=A.mipmaps,Be=A.isVideoTexture!==!0,ke=te.__version===void 0||q===!0,Z=j.dataReady,Pe=T(A,re);if(A.isDepthTexture)fe=b(A.format===_r,A.type),ke&&(Be?t.texStorage2D(i.TEXTURE_2D,1,fe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,fe,re.width,re.height,0,ae,ge,null));else if(A.isDataTexture)if(de.length>0){Be&&ke&&t.texStorage2D(i.TEXTURE_2D,Pe,fe,de[0].width,de[0].height);for(let pe=0,Ue=de.length;pe<Ue;pe++)_e=de[pe],Be?Z&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,_e.width,_e.height,ae,ge,_e.data):t.texImage2D(i.TEXTURE_2D,pe,fe,_e.width,_e.height,0,ae,ge,_e.data);A.generateMipmaps=!1}else Be?(ke&&t.texStorage2D(i.TEXTURE_2D,Pe,fe,re.width,re.height),Z&&Q(A,re,ae,ge)):t.texImage2D(i.TEXTURE_2D,0,fe,re.width,re.height,0,ae,ge,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Be&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,fe,de[0].width,de[0].height,re.depth);for(let pe=0,Ue=de.length;pe<Ue;pe++)if(_e=de[pe],A.format!==ri)if(ae!==null)if(Be){if(Z)if(A.layerUpdates.size>0){let We=U0(_e.width,_e.height,A.format,A.type);for(let Re of A.layerUpdates){let lt=_e.data.subarray(Re*We/_e.data.BYTES_PER_ELEMENT,(Re+1)*We/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Re,_e.width,_e.height,1,ae,lt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,re.depth,ae,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,fe,_e.width,_e.height,re.depth,0,_e.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,re.depth,ae,ge,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,fe,_e.width,_e.height,re.depth,0,ae,ge,_e.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Be&&ke&&t.texStorage2D(i.TEXTURE_2D,Pe,fe,de[0].width,de[0].height);for(let pe=0,Ue=de.length;pe<Ue;pe++)_e=de[pe],A.format!==ri?ae!==null?Be?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,_e.width,_e.height,ae,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,fe,_e.width,_e.height,0,_e.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Z&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,_e.width,_e.height,ae,ge,_e.data):t.texImage2D(i.TEXTURE_2D,pe,fe,_e.width,_e.height,0,ae,ge,_e.data)}else if(A.isDataArrayTexture)if(Be){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,fe,re.width,re.height,re.depth),Z)if(A.layerUpdates.size>0){let pe=U0(re.width,re.height,A.format,A.type);for(let Ue of A.layerUpdates){let We=re.data.subarray(Ue*pe/re.data.BYTES_PER_ELEMENT,(Ue+1)*pe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,re.width,re.height,1,ae,ge,We)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ae,ge,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,re.width,re.height,re.depth,0,ae,ge,re.data);else if(A.isData3DTexture)Be?(ke&&t.texStorage3D(i.TEXTURE_3D,Pe,fe,re.width,re.height,re.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ae,ge,re.data)):t.texImage3D(i.TEXTURE_3D,0,fe,re.width,re.height,re.depth,0,ae,ge,re.data);else if(A.isFramebufferTexture){if(ke)if(Be)t.texStorage2D(i.TEXTURE_2D,Pe,fe,re.width,re.height);else{let pe=re.width,Ue=re.height;for(let We=0;We<Pe;We++)t.texImage2D(i.TEXTURE_2D,We,fe,pe,Ue,0,ae,ge,null),pe>>=1,Ue>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),re.parentNode!==pe){pe.appendChild(re),p.add(A),pe.onpaint=Ue=>{let We=Ue.changedElements;for(let Re of p)We.includes(Re.image)&&(Re.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let We=i.RGBA,Re=i.RGBA,lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,We,Re,lt,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(de.length>0){if(Be&&ke){let pe=oe(de[0]);t.texStorage2D(i.TEXTURE_2D,Pe,fe,pe.width,pe.height)}for(let pe=0,Ue=de.length;pe<Ue;pe++)_e=de[pe],Be?Z&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ae,ge,_e):t.texImage2D(i.TEXTURE_2D,pe,fe,ae,ge,_e);A.generateMipmaps=!1}else if(Be){if(ke){let pe=oe(re);t.texStorage2D(i.TEXTURE_2D,Pe,fe,pe.width,pe.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ge,re)}else t.texImage2D(i.TEXTURE_2D,0,fe,ae,ge,re);f(A)&&d(G),te.__version=j.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Ie(O,A,z){if(A.image.length!==6)return;let G=Ee(O,A),q=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+z);let j=n.get(q);if(q.version!==j.__version||G===!0){t.activeTexture(i.TEXTURE0+z);let te=Pt.getPrimaries(Pt.workingColorSpace),$=A.colorSpace===hi?null:Pt.getPrimaries(A.colorSpace),re=A.colorSpace===hi||te===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ae=A.isCompressedTexture||A.image[0].isCompressedTexture,ge=A.image[0]&&A.image[0].isDataTexture,fe=[];for(let Re=0;Re<6;Re++)!ae&&!ge?fe[Re]=c(A.image[Re],!0,s.maxCubemapSize):fe[Re]=ge?A.image[Re].image:A.image[Re],fe[Re]=He(A,fe[Re]);let _e=fe[0],de=r.convert(A.format,A.colorSpace),Be=r.convert(A.type),ke=v(A.internalFormat,de,Be,A.normalized,A.colorSpace),Z=A.isVideoTexture!==!0,Pe=j.__version===void 0||G===!0,pe=q.dataReady,Ue=T(A,_e);Te(i.TEXTURE_CUBE_MAP,A);let We;if(ae){Z&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ke,_e.width,_e.height);for(let Re=0;Re<6;Re++){We=fe[Re].mipmaps;for(let lt=0;lt<We.length;lt++){let tt=We[lt];A.format!==ri?de!==null?Z?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,lt,0,0,tt.width,tt.height,de,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,lt,ke,tt.width,tt.height,0,tt.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,lt,0,0,tt.width,tt.height,de,Be,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,lt,ke,tt.width,tt.height,0,de,Be,tt.data)}}}else{if(We=A.mipmaps,Z&&Pe){We.length>0&&Ue++;let Re=oe(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ke,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(ge){Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,fe[Re].width,fe[Re].height,de,Be,fe[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ke,fe[Re].width,fe[Re].height,0,de,Be,fe[Re].data);for(let lt=0;lt<We.length;lt++){let kt=We[lt].image[Re].image;Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,lt+1,0,0,kt.width,kt.height,de,Be,kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,lt+1,ke,kt.width,kt.height,0,de,Be,kt.data)}}else{Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,de,Be,fe[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ke,de,Be,fe[Re]);for(let lt=0;lt<We.length;lt++){let tt=We[lt];Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,lt+1,0,0,de,Be,tt.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,lt+1,ke,de,Be,tt.image[Re])}}}f(A)&&d(i.TEXTURE_CUBE_MAP),j.__version=q.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function K(O,A,z,G,q,j){let te=r.convert(z.format,z.colorSpace),$=r.convert(z.type),re=v(z.internalFormat,te,$,z.normalized,z.colorSpace),ae=n.get(A),ge=n.get(z);if(ge.__renderTarget=A,!ae.__hasExternalTextures){let fe=Math.max(1,A.width>>j),_e=Math.max(1,A.height>>j);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,j,re,fe,_e,A.depth,0,te,$,null):t.texImage2D(q,j,re,fe,_e,0,te,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Ae(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,q,ge.__webglTexture,0,Ne(A)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,q,ge.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(O,A,z){if(i.bindRenderbuffer(i.RENDERBUFFER,O),A.depthBuffer){let G=A.depthTexture,q=G&&G.isDepthTexture?G.type:null,j=b(A.stencilBuffer,q),te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(A),j,A.width,A.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(A),j,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,O)}else{let G=A.textures;for(let q=0;q<G.length;q++){let j=G[q],te=r.convert(j.format,j.colorSpace),$=r.convert(j.type),re=v(j.internalFormat,te,$,j.normalized,j.colorSpace);Ae(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(A),re,A.width,A.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(A),re,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,re,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(O,A,z){let G=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(A.depthTexture);if(q.__renderTarget=A,(!q.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Te(i.TEXTURE_CUBE_MAP,A.depthTexture);let ae=r.convert(A.depthTexture.format),ge=r.convert(A.depthTexture.type),fe;A.depthTexture.format===Ms?fe=i.DEPTH_COMPONENT24:A.depthTexture.format===_r&&(fe=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,fe,A.width,A.height,0,ae,ge,null)}}else N(A.depthTexture,0);let j=q.__webglTexture,te=Ne(A),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,re=A.depthTexture.format===_r?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ms)Ae(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,$,j,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,re,$,j,0);else if(A.depthTexture.format===_r)Ae(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,$,j,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,re,$,j,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(O){let A=n.get(O),z=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){let G=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),G){let q=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),A.__depthDisposeCallback=q}A.__boundDepthTexture=G}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)Oe(A.__webglFramebuffer[G],O,G);else{let G=O.texture.mipmaps;G&&G.length>0?Oe(A.__webglFramebuffer[0],O,0):Oe(A.__webglFramebuffer,O,0)}else if(z){A.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[G]),A.__webglDepthbuffer[G]===void 0)A.__webglDepthbuffer[G]=i.createRenderbuffer(),ve(A.__webglDepthbuffer[G],O,!1);else{let q=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,j)}}else{let G=O.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ve(A.__webglDepthbuffer,O,!1);else{let q=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(O,A,z){let G=n.get(O);A!==void 0&&K(G.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ve(O)}function Ze(O){let A=O.texture,z=n.get(O),G=n.get(A);O.addEventListener("dispose",y);let q=O.textures,j=O.isWebGLCubeRenderTarget===!0,te=q.length>1;if(te||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=A.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let re=0;re<A.mipmaps.length;re++)z.__webglFramebuffer[$][re]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<A.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(te)for(let $=0,re=q.length;$<re;$++){let ae=n.get(q[$]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Ae(O)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<q.length;$++){let re=q[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);let ae=r.convert(re.format,re.colorSpace),ge=r.convert(re.type),fe=v(re.internalFormat,ae,ge,re.normalized,re.colorSpace,O.isXRRenderTarget===!0),_e=Ne(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,fe,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Te(i.TEXTURE_CUBE_MAP,A);for(let $=0;$<6;$++)if(A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)K(z.__webglFramebuffer[$][re],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,re);else K(z.__webglFramebuffer[$],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(A)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){for(let $=0,re=q.length;$<re;$++){let ae=q[$],ge=n.get(ae),fe=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(fe=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ge.__webglTexture),Te(fe,ae),K(z.__webglFramebuffer,O,ae,i.COLOR_ATTACHMENT0+$,fe,0),f(ae)&&d(fe)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&($=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,G.__webglTexture),Te($,A),A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)K(z.__webglFramebuffer[re],O,A,i.COLOR_ATTACHMENT0,$,re);else K(z.__webglFramebuffer,O,A,i.COLOR_ATTACHMENT0,$,0);f(A)&&d($),t.unbindTexture()}O.depthBuffer&&Ve(O)}function ot(O){let A=O.textures;for(let z=0,G=A.length;z<G;z++){let q=A[z];if(f(q)){let j=g(O),te=n.get(q).__webglTexture;t.bindTexture(j,te),d(j),t.unbindTexture()}}}let ct=[],Me=[];function De(O){if(O.samples>0){if(Ae(O)===!1){let A=O.textures,z=O.width,G=O.height,q=i.COLOR_BUFFER_BIT,j=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(O),$=A.length>1;if($)for(let ae=0;ae<A.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);let re=O.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ae=0;ae<A.length;ae++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[ae]);let ge=n.get(A[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,z,G,0,0,z,G,q,i.NEAREST),a===!0&&(ct.length=0,Me.length=0,ct.push(i.COLOR_ATTACHMENT0+ae),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ct.push(j),Me.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ae=0;ae<A.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,te.__webglColorRenderbuffer[ae]);let ge=n.get(A[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&a){let A=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ne(O){return Math.min(s.maxSamples,O.samples)}function Ae(O){let A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function V(O){let A=o.render.frame;h.get(O)!==A&&(h.set(O,A),O.update())}function He(O,A){let z=O.colorSpace,G=O.format,q=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||z!==Xa&&z!==hi&&(Pt.getTransfer(z)===qt?(G!==ri||q!==si)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",z)),A}function oe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(u.width=O.naturalWidth||O.width,u.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(u.width=O.displayWidth,u.height=O.displayHeight):(u.width=O.width,u.height=O.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.getTextureUnits=R,this.setTextureUnits=I,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=Ge,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function PS(i,e){function t(n,s=hi){let r,o=Pt.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===Fu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===E0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===A0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===w0)return i.BYTE;if(n===T0)return i.SHORT;if(n===qo)return i.UNSIGNED_SHORT;if(n===Nu)return i.INT;if(n===ps)return i.UNSIGNED_INT;if(n===Yi)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===R0)return i.ALPHA;if(n===C0)return i.RGB;if(n===ri)return i.RGBA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===_r)return i.DEPTH_STENCIL;if(n===ms)return i.RED;if(n===Bu)return i.RED_INTEGER;if(n===br)return i.RG;if(n===Ou)return i.RG_INTEGER;if(n===ku)return i.RGBA_INTEGER;if(n===Ml||n===Sl||n===wl||n===Tl)if(o===qt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ml)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zu||n===Hu||n===Vu||n===Wu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gu||n===qu||n===Xu||n===Yu||n===Zu||n===El||n===Ku)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gu||n===qu)return o===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xu)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yu)return r.COMPRESSED_R11_EAC;if(n===Zu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===El)return r.COMPRESSED_RG11_EAC;if(n===Ku)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$u||n===Ju||n===ju||n===Qu||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$u)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ju)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ju)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qu)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===th)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ih)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ah)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lh)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ch)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uh||n===hh||n===fh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uh)return o===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===ph||n===Al||n===mh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===dh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LS=`
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

}`,td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new il(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ht({vertexShader:IS,fragmentShader:LS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nd=class extends Ss{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",a=1,u=null,h=null,p=null,m=null,x=null,_=null,M=typeof XRWebGLBinding<"u",c=new td,f={},d=t.getContextAttributes(),g=null,v=null,b=[],T=[],w=new Fe,y=null,S=null,E=new Zn;E.viewport=new dt;let C=new Zn;C.viewport=new dt;let P=[E,C],L=new Cu,R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=b[J];return Q===void 0&&(Q=new Lo,b[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=b[J];return Q===void 0&&(Q=new Lo,b[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=b[J];return Q===void 0&&(Q=new Lo,b[J]=Q),Q.getHandSpace()};function D(J){let Q=T.indexOf(J.inputSource);if(Q===-1)return;let ye=b[Q];ye!==void 0&&(ye.update(J.inputSource,J.frame,u||o),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",N);for(let J=0;J<b.length;J++){let Q=T[J];Q!==null&&(T[J]=null,b[J].disconnect(Q))}R=null,I=null,c.reset();for(let J in f)delete f[J];if(e.setRenderTarget(g),x=null,m=null,p=null,s=null,v=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),S!==null){let J=S.camera;J.fov=S.fov,J.zoom=S.zoom,J.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,n.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ie=null,K=null;d.depth&&(K=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=d.stencil?_r:Ms,Ie=d.stencil?Xo:ps);let ve={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(ve),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new Zt(m.textureWidth,m.textureHeight,{format:ri,type:si,depthTexture:new dr(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ye={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new Zt(x.framebufferWidth,x.framebufferHeight,{format:ri,type:si,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),u=null,o=await s.requestReferenceSpace(l),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function N(J){for(let Q=0;Q<J.removed.length;Q++){let ye=J.removed[Q],Ie=T.indexOf(ye);Ie>=0&&(T[Ie]=null,b[Ie].disconnect(ye))}for(let Q=0;Q<J.added.length;Q++){let ye=J.added[Q],Ie=T.indexOf(ye);if(Ie===-1){for(let ve=0;ve<b.length;ve++)if(ve>=T.length){T.push(ye),Ie=ve;break}else if(T[ve]===null){T[ve]=ye,Ie=ve;break}if(Ie===-1)break}let K=b[Ie];K&&K.connect(ye)}}let U=new H,W=new H;function k(J,Q,ye){U.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(ye.matrixWorld);let Ie=U.distanceTo(W),K=Q.projectionMatrix.elements,ve=ye.projectionMatrix.elements,Oe=K[14]/(K[10]-1),Ve=K[14]/(K[10]+1),Ge=(K[9]+1)/K[5],Ze=(K[9]-1)/K[5],ot=(K[8]-1)/K[0],ct=(ve[8]+1)/ve[0],Me=Oe*ot,De=Oe*ct,Ne=Ie/(-ot+ct),Ae=Ne*-ot;if(Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ae),J.translateZ(Ne),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),K[10]===-1)J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let V=Oe+Ne,He=Ve+Ne,oe=Me-Ae,O=De+(Ie-Ae),A=Ge*Ve/He*V,z=Ze*Ve/He*V;J.projectionMatrix.makePerspective(oe,O,A,z,V,He),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function X(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let Q=J.near,ye=J.far;c.texture!==null&&(c.depthNear>0&&(Q=c.depthNear),c.depthFar>0&&(ye=c.depthFar)),L.near=C.near=E.near=Q,L.far=C.far=E.far=ye,(R!==L.near||I!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),R=L.near,I=L.far),L.layers.mask=J.layers.mask|6,E.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;let Ie=J.parent,K=L.cameras;X(L,Ie);for(let ve=0;ve<K.length;ve++)X(K[ve],Ie);K.length===2?k(L,E,C):L.projectionMatrix.copy(E.projectionMatrix),S===null&&J.isPerspectiveCamera&&(S={camera:J,fov:J.fov,zoom:J.zoom}),ie(J,L,Ie)};function ie(J,Q,ye){ye===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Za*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(m===null&&x===null))return a},this.setFoveation=function(J){a=J,m!==null&&(m.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(L)},this.getCameraTexture=function(J){return f[J]};let xe=null;function Te(J,Q){if(h=Q.getViewerPose(u||o),_=Q,h!==null){let ye=h.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let Ie=!1;ye.length!==L.cameras.length&&(L.cameras.length=0,Ie=!0);for(let Ve=0;Ve<ye.length;Ve++){let Ge=ye[Ve],Ze=null;if(x!==null)Ze=x.getViewport(Ge);else{let ct=p.getViewSubImage(m,Ge);Ze=ct.viewport,Ve===0&&(e.setRenderTargetTextures(v,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(v))}let ot=P[Ve];ot===void 0&&(ot=new Zn,ot.layers.enable(Ve),ot.viewport=new dt,P[Ve]=ot),ot.matrix.fromArray(Ge.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Ge.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ve===0&&(L.matrix.copy(ot.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ie===!0&&L.cameras.push(ot)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let Ve=p.getDepthInformation(ye[0]);Ve&&Ve.isValid&&Ve.texture&&c.init(Ve,s.renderState)}if(K&&K.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Ve=0;Ve<ye.length;Ve++){let Ge=ye[Ve].camera;if(Ge){let Ze=f[Ge];Ze||(Ze=new il,f[Ge]=Ze);let ot=p.getCameraImage(Ge);Ze.sourceTexture=ot}}}}for(let ye=0;ye<b.length;ye++){let Ie=T[ye],K=b[ye];Ie!==null&&K!==void 0&&K.update(Ie,Q,u||o)}xe&&xe(J,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}let Ee=new wg;Ee.setAnimationLoop(Te),this.setAnimationLoop=function(J){xe=J},this.dispose=function(){}}},DS=new st,Pg=new vt;Pg.set(-1,0,0,0,1,0,0,0,1);function NS(i,e){function t(c,f){c.matrixAutoUpdate===!0&&c.updateMatrix(),f.value.copy(c.matrix)}function n(c,f){f.color.getRGB(c.fogColor.value,D0(i)),f.isFog?(c.fogNear.value=f.near,c.fogFar.value=f.far):f.isFogExp2&&(c.fogDensity.value=f.density)}function s(c,f,d,g,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(c,f):f.isMeshLambertMaterial?(r(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(c,f),p(c,f)):f.isMeshPhongMaterial?(r(c,f),h(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(c,f),m(c,f),f.isMeshPhysicalMaterial&&x(c,f,v)):f.isMeshMatcapMaterial?(r(c,f),_(c,f)):f.isMeshDepthMaterial?r(c,f):f.isMeshDistanceMaterial?(r(c,f),M(c,f)):f.isMeshNormalMaterial?r(c,f):f.isLineBasicMaterial?(o(c,f),f.isLineDashedMaterial&&l(c,f)):f.isPointsMaterial?a(c,f,d,g):f.isSpriteMaterial?u(c,f):f.isShadowMaterial?(c.color.value.copy(f.color),c.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(c,f){c.opacity.value=f.opacity,f.color&&c.diffuse.value.copy(f.color),f.emissive&&c.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.bumpMap&&(c.bumpMap.value=f.bumpMap,t(f.bumpMap,c.bumpMapTransform),c.bumpScale.value=f.bumpScale,f.side===Kn&&(c.bumpScale.value*=-1)),f.normalMap&&(c.normalMap.value=f.normalMap,t(f.normalMap,c.normalMapTransform),c.normalScale.value.copy(f.normalScale),f.side===Kn&&c.normalScale.value.negate()),f.displacementMap&&(c.displacementMap.value=f.displacementMap,t(f.displacementMap,c.displacementMapTransform),c.displacementScale.value=f.displacementScale,c.displacementBias.value=f.displacementBias),f.emissiveMap&&(c.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,c.emissiveMapTransform)),f.specularMap&&(c.specularMap.value=f.specularMap,t(f.specularMap,c.specularMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest);let d=e.get(f),g=d.envMap,v=d.envMapRotation;g&&(c.envMap.value=g,c.envMapRotation.value.setFromMatrix4(DS.makeRotationFromEuler(v)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(Pg),c.reflectivity.value=f.reflectivity,c.ior.value=f.ior,c.refractionRatio.value=f.refractionRatio),f.lightMap&&(c.lightMap.value=f.lightMap,c.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,c.lightMapTransform)),f.aoMap&&(c.aoMap.value=f.aoMap,c.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,c.aoMapTransform))}function o(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform))}function l(c,f){c.dashSize.value=f.dashSize,c.totalSize.value=f.dashSize+f.gapSize,c.scale.value=f.scale}function a(c,f,d,g){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.size.value=f.size*d,c.scale.value=g*.5,f.map&&(c.map.value=f.map,t(f.map,c.uvTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function u(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.rotation.value=f.rotation,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function h(c,f){c.specular.value.copy(f.specular),c.shininess.value=Math.max(f.shininess,1e-4)}function p(c,f){f.gradientMap&&(c.gradientMap.value=f.gradientMap)}function m(c,f){c.metalness.value=f.metalness,f.metalnessMap&&(c.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,c.metalnessMapTransform)),c.roughness.value=f.roughness,f.roughnessMap&&(c.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,c.roughnessMapTransform)),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)}function x(c,f,d){c.ior.value=f.ior,f.sheen>0&&(c.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),c.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(c.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,c.sheenColorMapTransform)),f.sheenRoughnessMap&&(c.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,c.sheenRoughnessMapTransform))),f.clearcoat>0&&(c.clearcoat.value=f.clearcoat,c.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(c.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,c.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(c.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kn&&c.clearcoatNormalScale.value.negate())),f.dispersion>0&&(c.dispersion.value=f.dispersion),f.retroreflectivity>0&&(c.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(c.iridescence.value=f.iridescence,c.iridescenceIOR.value=f.iridescenceIOR,c.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(c.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,c.iridescenceMapTransform)),f.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),f.transmission>0&&(c.transmission.value=f.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),f.transmissionMap&&(c.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,c.transmissionMapTransform)),c.thickness.value=f.thickness,f.thicknessMap&&(c.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=f.attenuationDistance,c.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(c.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(c.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=f.specularIntensity,c.specularColor.value.copy(f.specularColor),f.specularColorMap&&(c.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,c.specularColorMapTransform)),f.specularIntensityMap&&(c.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,c.specularIntensityMapTransform))}function _(c,f){f.matcap&&(c.matcap.value=f.matcap)}function M(c,f){let d=e.get(f).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function FS(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(v,b){let T=b.program;n.uniformBlockBinding(v,T)}function u(v,b){let T=s[v.id];T===void 0&&(c(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",d));let w=b.program;n.updateUBOMapping(v,w);let y=e.render.frame;r[v.id]!==y&&(m(v),r[v.id]=y)}function h(v){let b=p();v.__bindingPointIndex=b;let T=i.createBuffer(),w=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function p(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){let b=s[v.id],T=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,S=T.length;y<S;y++){let E=T[y];if(Array.isArray(E))for(let C=0,P=E.length;C<P;C++)x(E[C],y,C,w);else x(E,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(v,b,T,w){if(M(v,b,T,w)===!0){let y=v.__offset,S=v.value;if(Array.isArray(S)){let E=0;for(let C=0;C<S.length;C++){let P=S[C],L=f(P);_(P,v.__data,E),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(E+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function _(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function M(v,b,T,w){let y=v.value,S=b+"_"+T;if(w[S]===void 0)return typeof y=="number"||typeof y=="boolean"?w[S]=y:ArrayBuffer.isView(y)?w[S]=y.slice():w[S]=y.clone(),!0;{let E=w[S];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return w[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function c(v){let b=v.uniforms,T=0,w=16;for(let S=0,E=b.length;S<E;S++){let C=Array.isArray(b[S])?b[S]:[b[S]];for(let P=0,L=C.length;P<L;P++){let R=C[P],I=Array.isArray(R.value)?R.value:[R.value];for(let D=0,F=I.length;D<F;D++){let N=I[D],U=f(N),W=T%w,k=W%U.boundary,X=W+k;T+=k,X!==0&&w-X<U.storage&&(T+=w-X),R.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=T,T+=U.storage}}}let y=T%w;return y>0&&(T+=w-y),v.__size=T,v.__cache={},this}function f(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",v),b}function d(v){let b=v.target;b.removeEventListener("dispose",d);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:a,update:u,dispose:g}}var US=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),As=null;function BS(){return As===null&&(As=new Mi(US,16,16,br,En),As.name="DFG_LUT",As.minFilter=Ot,As.magFilter=Ot,As.wrapS=bs,As.wrapT=bs,As.generateMipmaps=!1,As.needsUpdate=!0),As}var Sh=class{constructor(e={}){let{canvas:t=Xm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:x=si}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let M=x,c=new Set([ku,Ou,Bu]),f=new Set([si,ps,qo,Xo,Fu,Uu]),d=new Uint32Array(4),g=new Int32Array(4),v=new H,b=null,T=null,w=[],y=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,C=!1,P=null,L=null,R=null,I=null;this._outputColorSpace=Gt;let D=0,F=0,N=null,U=-1,W=null,k=new dt,X=new dt,ie=null,xe=new ue(0),Te=0,Ee=t.width,J=t.height,Q=1,ye=null,Ie=null,K=new dt(0,0,Ee,J),ve=new dt(0,0,Ee,J),Oe=!1,Ve=new No,Ge=!1,Ze=!1,ot=new st,ct=new H,Me=new dt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Ae(){return N===null?Q:1}let V=n;function He(B,ne){return t.getContext(B,ne)}let oe,O,A,z,G,q,j,te,$,re,ae,ge,fe,_e,de,Be,ke,Z,Pe,pe,Ue,We,Re;try{let B={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",Ht,!1),t.addEventListener("webglcontextcreationerror",Ai,!1),V===null){let ne="webgl2";if(V=He(ne,B),V===null)throw He(ne)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(B){throw t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Ht,!1),t.removeEventListener("webglcontextcreationerror",Ai,!1),gt("WebGLRenderer: "+B.message),B}function lt(){oe=new Gb(V),oe.init(),Ue=new PS(V,oe),O=new Nb(V,oe,e,Ue),A=new RS(V,oe),O.reversedDepthBuffer&&m&&A.buffers.depth.setReversed(!0),L=V.createFramebuffer(),R=V.createFramebuffer(),I=V.createFramebuffer(),z=new Yb(V),G=new pS,q=new CS(V,oe,A,G,O,Ue,z),j=new Wb(E),te=new K2(V),We=new Lb(V,te),$=new qb(V,te,z,We),re=new Kb(V,$,te,We,z),Z=new Zb(V,O,q),de=new Fb(G),ae=new dS(E,j,oe,O,We,de),ge=new NS(E,G),fe=new gS,_e=new MS(oe),ke=new Ib(E,j,A,re,_,a),Be=new AS(E,re,O),Re=new FS(V,z,O,A),Pe=new Db(V,oe,z),pe=new Xb(V,oe,z),z.programs=ae.programs,E.capabilities=O,E.extensions=oe,E.properties=G,E.renderLists=fe,E.shadowMap=Be,E.state=A,E.info=z}M!==si&&(S=new Jb(M,t.width,t.height,l,s,r));let tt=new nd(E,V);this.xr=tt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let B=oe.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=oe.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(B){B!==void 0&&(Q=B,this.setSize(Ee,J,!1))},this.getSize=function(B){return B.set(Ee,J)},this.setSize=function(B,ne,he=!0){if(tt.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=B,J=ne,t.width=Math.floor(B*Q),t.height=Math.floor(ne*Q),he===!0&&(t.style.width=B+"px",t.style.height=ne+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,B,ne)},this.getDrawingBufferSize=function(B){return B.set(Ee*Q,J*Q).floor()},this.setDrawingBufferSize=function(B,ne,he){Ee=B,J=ne,Q=he,t.width=Math.floor(B*he),t.height=Math.floor(ne*he),this.setViewport(0,0,B,ne)},this.setEffects=function(B){if(M===si){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let ne=0;ne<B.length;ne++)if(B[ne].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(k)},this.getViewport=function(B){return B.copy(K)},this.setViewport=function(B,ne,he,le){B.isVector4?K.set(B.x,B.y,B.z,B.w):K.set(B,ne,he,le),A.viewport(k.copy(K).multiplyScalar(Q).round())},this.getScissor=function(B){return B.copy(ve)},this.setScissor=function(B,ne,he,le){B.isVector4?ve.set(B.x,B.y,B.z,B.w):ve.set(B,ne,he,le),A.scissor(X.copy(ve).multiplyScalar(Q).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(B){A.setScissorTest(Oe=B)},this.setOpaqueSort=function(B){ye=B},this.setTransparentSort=function(B){Ie=B},this.getClearColor=function(B){return B.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(B=!0,ne=!0,he=!0){let le=0;if(B){let ce=!1;if(N!==null){let qe=N.texture.format;ce=c.has(qe)}if(ce){let qe=N.texture.type,$e=f.has(qe),Xe=ke.getClearColor(),je=ke.getClearAlpha(),rt=Xe.r,yt=Xe.g,bt=Xe.b;$e?(d[0]=rt,d[1]=yt,d[2]=bt,d[3]=je,V.clearBufferuiv(V.COLOR,0,d)):(g[0]=rt,g[1]=yt,g[2]=bt,g[3]=je,V.clearBufferiv(V.COLOR,0,g))}else le|=V.COLOR_BUFFER_BIT}ne&&(le|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(le|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&V.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),P=B},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Ht,!1),t.removeEventListener("webglcontextcreationerror",Ai,!1),ke.dispose(),fe.dispose(),_e.dispose(),G.dispose(),j.dispose(),re.dispose(),We.dispose(),Re.dispose(),ae.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",sc),tt.removeEventListener("sessionend",rc),Ns.stop()};function kt(B){B.preventDefault(),I0("WebGLRenderer: Context Lost."),C=!0}function Ht(){I0("WebGLRenderer: Context Restored."),C=!1;let B=z.autoReset,ne=Be.enabled,he=Be.autoUpdate,le=Be.needsUpdate,ce=Be.type;lt(),z.autoReset=B,Be.enabled=ne,Be.autoUpdate=he,Be.needsUpdate=le,Be.type=ce}function Ai(B){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function zi(B){let ne=B.target;ne.removeEventListener("dispose",zi),af(ne)}function af(B){lf(B),G.remove(B)}function lf(B){let ne=G.get(B).programs;ne!==void 0&&(ne.forEach(function(he){ae.releaseProgram(he)}),B.isShaderMaterial&&ae.releaseShaderCache(B))}this.renderBufferDirect=function(B,ne,he,le,ce,qe){ne===null&&(ne=De);let $e=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Xe=tp(B,ne,he,le,ce);A.setMaterial(le,$e);let je=he.index,rt=1;if(le.wireframe===!0){if(je=$.getWireframeAttribute(he),je===void 0)return;rt=2}let yt=he.drawRange,bt=he.attributes.position,Qe=yt.start*rt,Vt=(yt.start+yt.count)*rt;qe!==null&&(Qe=Math.max(Qe,qe.start*rt),Vt=Math.min(Vt,(qe.start+qe.count)*rt)),je!==null?(Qe=Math.max(Qe,0),Vt=Math.min(Vt,je.count)):bt!=null&&(Qe=Math.max(Qe,0),Vt=Math.min(Vt,bt.count));let dn=Vt-Qe;if(dn<0||dn===1/0)return;We.setup(ce,le,Xe,he,je);let Ft,Lt=Pe;if(je!==null&&(Ft=te.get(je),Lt=pe,Lt.setIndex(Ft)),ce.isMesh)le.wireframe===!0?(A.setLineWidth(le.wireframeLinewidth*Ae()),Lt.setMode(V.LINES)):Lt.setMode(V.TRIANGLES);else if(ce.isLine){let Cn=le.linewidth;Cn===void 0&&(Cn=1),A.setLineWidth(Cn*Ae()),ce.isLineSegments?Lt.setMode(V.LINES):ce.isLineLoop?Lt.setMode(V.LINE_LOOP):Lt.setMode(V.LINE_STRIP)}else ce.isPoints?Lt.setMode(V.POINTS):ce.isSprite&&Lt.setMode(V.TRIANGLES);if(ce.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{let Cn=ce._multiDrawStarts,Ke=ce._multiDrawCounts,Mn=ce._multiDrawCount,At=je?te.get(je).bytesPerElement:1,li=G.get(le).currentProgram.getUniforms();for(let Ri=0;Ri<Mn;Ri++)li.setValue(V,"_gl_DrawID",Ri),Lt.render(Cn[Ri]/At,Ke[Ri])}else if(ce.isInstancedMesh)Lt.renderInstances(Qe,dn,ce.count);else if(he.isInstancedBufferGeometry){let Cn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ke=Math.min(he.instanceCount,Cn);Lt.renderInstances(Qe,dn,Ke)}else Lt.render(Qe,dn)};function ic(B,ne,he,le){P!==null&&B.isNodeMaterial&&P.setObject(le,B),Ge===!0&&de.setState(B,he,!1),B.transparent===!0&&B.side===Tn&&B.forceSinglePass===!1?(B.side=Kn,B.needsUpdate=!0,ro(B,ne,le),B.side=Es,B.needsUpdate=!0,ro(B,ne,le),B.side=Tn):ro(B,ne,le)}this.compile=function(B,ne,he=null){he===null&&(he=B),P!==null&&P.renderStart(B,ne,he),T=_e.get(he),T.init(ne),y.push(T),he.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ne.layers)&&(T.pushLight(ce),ce.castShadow&&T.pushShadow(ce))}),B!==he&&B.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ne.layers)&&(T.pushLight(ce),ce.castShadow&&T.pushShadow(ce))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),Ze=this.localClippingEnabled,Ge=de.init(this.clippingPlanes,Ze),Ge===!0&&de.setGlobalState(this.clippingPlanes,ne),P!==null&&Be.render(T.state.shadowsArray,he,ne);let le=new Set;return B.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;let qe=ce.material;if(qe)if(Array.isArray(qe))for(let $e=0;$e<qe.length;$e++){let Xe=qe[$e];ic(Xe,he,ne,ce),le.add(Xe)}else ic(qe,he,ne,ce),le.add(qe)}),T=y.pop(),P!==null&&P.renderEnd(),le},this.compileAsync=function(B,ne,he=null){let le=this.compile(B,ne,he);return new Promise(ce=>{function qe(){if(le.forEach(function($e){let je=G.get($e).currentProgram;(je===void 0||je.isReady())&&le.delete($e)}),le.size===0){ce(B);return}setTimeout(qe,10)}oe.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let Ma=null;function cf(B){Ma&&Ma(B)}function sc(){Ns.stop()}function rc(){Ns.start()}let Ns=new wg;Ns.setAnimationLoop(cf),typeof self<"u"&&Ns.setContext(self),this.setAnimationLoop=function(B){Ma=B,tt.setAnimationLoop(B),B===null?Ns.stop():Ns.start()},tt.addEventListener("sessionstart",sc),tt.addEventListener("sessionend",rc),this.render=function(B,ne){if(ne!==void 0&&ne.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(B,ne);let he=tt.enabled===!0&&tt.isPresenting===!0,le=S!==null&&(N===null||he)&&S.begin(E,N);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(ne),ne=tt.getCamera()),B.isScene===!0&&B.onBeforeRender(E,B,ne,N),T=_e.get(B,y.length),T.init(ne),T.state.textureUnits=q.getTextureUnits(),y.push(T),ot.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Ve.setFromProjectionMatrix(ot,us,ne.reversedDepth),Ze=this.localClippingEnabled,Ge=de.init(this.clippingPlanes,Ze),b=fe.get(B,w.length),b.init(),w.push(b),tt.enabled===!0&&tt.isPresenting===!0){let $e=E.xr.getDepthSensingMesh();$e!==null&&Sa($e,ne,-1/0,E.sortObjects)}Sa(B,ne,0,E.sortObjects),b.finish(),P!==null&&P.updateLights(T.state.lightsArray),E.sortObjects===!0&&b.sort(ye,Ie),Ne=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Ne&&ke.addToRenderList(b,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ge===!0&&de.beginShadows();let ce=T.state.shadowsArray;if(Be.render(ce,B,ne),Ge===!0&&de.endShadows(),(le&&S.hasRenderPass())===!1){let $e=b.opaque,Xe=b.transmissive;if(T.setupLights(),ne.isArrayCamera){let je=ne.cameras;if(Xe.length>0)for(let rt=0,yt=je.length;rt<yt;rt++){let bt=je[rt];ac($e,Xe,B,bt)}Ne&&ke.render(B);for(let rt=0,yt=je.length;rt<yt;rt++){let bt=je[rt];oc(b,B,bt,bt.viewport)}}else Xe.length>0&&ac($e,Xe,B,ne),Ne&&ke.render(B),oc(b,B,ne)}N!==null&&F===0&&(q.updateMultisampleRenderTarget(N),q.updateRenderTargetMipmap(N)),le&&S.end(E),B.isScene===!0&&B.onAfterRender(E,B,ne),We.resetDefaultState(),U=-1,W=null,y.pop(),y.length>0?(T=y[y.length-1],q.setTextureUnits(T.state.textureUnits),Ge===!0&&de.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,P!==null&&P.renderEnd()};function Sa(B,ne,he,le){if(B.visible===!1)return;if(B.layers.test(ne.layers)){if(B.isGroup)he=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(ne);else if(B.isLightProbeGrid)T.pushLightProbeGrid(B);else if(B.isLight)T.pushLight(B),B.castShadow&&T.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(Ve)){le&&Me.setFromMatrixPosition(B.matrixWorld).applyMatrix4(ot);let $e=re.update(B),Xe=B.material;Xe.visible&&b.push(B,$e,Xe,he,Me.z,null,ne)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(Ve))){let $e=re.update(B),Xe=B.material;if(le&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Me.copy(B.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),Me.copy($e.boundingSphere.center)),Me.applyMatrix4(B.matrixWorld).applyMatrix4(ot)),Array.isArray(Xe)){let je=$e.groups;for(let rt=0,yt=je.length;rt<yt;rt++){let bt=je[rt],Qe=Xe[bt.materialIndex];Qe&&Qe.visible&&b.push(B,$e,Qe,he,Me.z,bt,ne)}}else Xe.visible&&b.push(B,$e,Xe,he,Me.z,null,ne)}}let qe=B.children;for(let $e=0,Xe=qe.length;$e<Xe;$e++)Sa(qe[$e],ne,he,le)}function oc(B,ne,he,le){let{opaque:ce,transmissive:qe,transparent:$e}=B;T.setupLightsView(he),Ge===!0&&de.setGlobalState(E.clippingPlanes,he),le&&A.viewport(k.copy(le)),ce.length>0&&xs(ce,ne,he),qe.length>0&&xs(qe,ne,he),$e.length>0&&xs($e,ne,he),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function ac(B,ne,he,le){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[le.id]===void 0){let Qe=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[le.id]=new Zt(1,1,{generateMipmaps:!0,type:Qe?En:si,minFilter:zn,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let qe=T.state.transmissionRenderTarget[le.id],$e=le.viewport||k;qe.setSize($e.z*E.transmissionResolutionScale,$e.w*E.transmissionResolutionScale);let Xe=E.getRenderTarget(),je=E.getActiveCubeFace(),rt=E.getActiveMipmapLevel();E.setRenderTarget(qe),E.getClearColor(xe),Te=E.getClearAlpha(),Te<1&&E.setClearColor(16777215,.5),E.clear(),Ne&&ke.render(he);let yt=E.toneMapping;E.toneMapping=ds;let bt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),T.setupLightsView(le),Ge===!0&&de.setGlobalState(E.clippingPlanes,le),xs(B,he,le),q.updateMultisampleRenderTarget(qe),q.updateRenderTargetMipmap(qe),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Vt=0,dn=ne.length;Vt<dn;Vt++){let Ft=ne[Vt],{object:Lt,geometry:Cn,material:Ke,group:Mn}=Ft;if(Ke.side===Tn&&Lt.layers.test(le.layers)){let At=Ke.side;Ke.side=Kn,Ke.needsUpdate=!0,lc(Lt,he,le,Cn,Ke,Mn),Ke.side=At,Ke.needsUpdate=!0,Qe=!0}}Qe===!0&&(q.updateMultisampleRenderTarget(qe),q.updateRenderTargetMipmap(qe))}E.setRenderTarget(Xe,je,rt),E.setClearColor(xe,Te),bt!==void 0&&(le.viewport=bt),E.toneMapping=yt}function xs(B,ne,he){let le=ne.isScene===!0?ne.overrideMaterial:null;for(let ce=0,qe=B.length;ce<qe;ce++){let $e=B[ce],{object:Xe,geometry:je,group:rt}=$e,yt=$e.material;yt.allowOverride===!0&&le!==null&&(yt=le),Xe.layers.test(he.layers)&&lc(Xe,ne,he,je,yt,rt)}}function lc(B,ne,he,le,ce,qe){P!==null&&ce.isNodeMaterial&&P.setObject(B,ce),B.onBeforeRender(E,ne,he,le,ce,qe),B.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),ce.onBeforeRender(E,ne,he,le,B,qe),ce.transparent===!0&&ce.side===Tn&&ce.forceSinglePass===!1?(ce.side=Kn,ce.needsUpdate=!0,E.renderBufferDirect(he,ne,le,ce,B,qe),ce.side=Es,ce.needsUpdate=!0,E.renderBufferDirect(he,ne,le,ce,B,qe),ce.side=Tn):E.renderBufferDirect(he,ne,le,ce,B,qe),B.onAfterRender(E,ne,he,le,ce,qe)}function ro(B,ne,he){ne.isScene!==!0&&(ne=De);let le=G.get(B),ce=T.state.lights,qe=T.state.shadowsArray,$e=ce.state.version,Xe=ae.getParameters(B,ce.state,qe,ne,he,T.state.lightProbeGridArray),je=ae.getProgramCacheKey(Xe),rt=le.programs;le.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?ne.environment:null,le.fog=ne.fog;let yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;le.envMap=j.get(B.envMap||le.environment,yt),le.envMapRotation=le.environment!==null&&B.envMap===null?ne.environmentRotation:B.envMapRotation,rt===void 0&&(B.addEventListener("dispose",zi),rt=new Map,le.programs=rt);let bt=rt.get(je);if(bt!==void 0){if(le.currentProgram===bt&&le.lightsStateVersion===$e)return hf(B,Xe),bt}else Xe.uniforms=ae.getUniforms(B),P!==null&&B.isNodeMaterial&&P.build(B,he,Xe),B.onBeforeCompile(Xe,E),bt=ae.acquireProgram(Xe,je),rt.set(je,bt),le.uniforms=Xe.uniforms;let Qe=le.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Qe.clippingPlanes=de.uniform),hf(B,Xe),le.needsLights=df(B),le.lightsStateVersion=$e,le.needsLights&&(Qe.ambientLightColor.value=ce.state.ambient,Qe.lightProbe.value=ce.state.probe,Qe.sunLights.value=ce.state.sun,Qe.sunLightShadows.value=ce.state.sunShadow,Qe.directionalLights.value=ce.state.directional,Qe.directionalLightShadows.value=ce.state.directionalShadow,Qe.spotLights.value=ce.state.spot,Qe.spotLightShadows.value=ce.state.spotShadow,Qe.rectAreaLights.value=ce.state.rectArea,Qe.ltc_1.value=ce.state.rectAreaLTC1,Qe.ltc_2.value=ce.state.rectAreaLTC2,Qe.pointLights.value=ce.state.point,Qe.pointLightShadows.value=ce.state.pointShadow,Qe.hemisphereLights.value=ce.state.hemi,Qe.sunShadowMatrix.value=ce.state.sunShadowMatrix,Qe.sunShadowCascade.value=ce.state.sunShadowCascade,Qe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ce.state.spotLightMatrix,Qe.spotLightMap.value=ce.state.spotLightMap,Qe.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=T.state.lightProbeGridArray.length>0,le.currentProgram=bt,le.uniformsList=null,bt}function uf(B){if(B.uniformsList===null){let ne=B.currentProgram.getUniforms();B.uniformsList=$o.seqWithValue(ne.seq,B.uniforms)}return B.uniformsList}function hf(B,ne){let he=G.get(B);he.outputColorSpace=ne.outputColorSpace,he.batching=ne.batching,he.batchingColor=ne.batchingColor,he.instancing=ne.instancing,he.instancingColor=ne.instancingColor,he.instancingMorph=ne.instancingMorph,he.skinning=ne.skinning,he.morphTargets=ne.morphTargets,he.morphNormals=ne.morphNormals,he.morphColors=ne.morphColors,he.morphTargetsCount=ne.morphTargetsCount,he.numClippingPlanes=ne.numClippingPlanes,he.numIntersection=ne.numClipIntersection,he.vertexAlphas=ne.vertexAlphas,he.vertexTangents=ne.vertexTangents,he.toneMapping=ne.toneMapping}function ep(B,ne){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;v.setFromMatrixPosition(ne.matrixWorld);for(let he=0,le=B.length;he<le;he++){let ce=B[he];if(ce.texture!==null&&ce.boundingBox.containsPoint(v))return ce}return null}function tp(B,ne,he,le,ce){ne.isScene!==!0&&(ne=De),q.resetTextureUnits();let qe=ne.fog,$e=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?ne.environment:null,Xe=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Pt.workingColorSpace,je=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,rt=j.get(le.envMap||$e,je),yt=le.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,bt=!!he.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Qe=!!he.morphAttributes.position,Vt=!!he.morphAttributes.normal,dn=!!he.morphAttributes.color,Ft=ds;le.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ft=E.toneMapping);let Lt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Cn=Lt!==void 0?Lt.length:0,Ke=G.get(le),Mn=T.state.lights;if(Ge===!0&&(Ze===!0||B!==W)){let ee=B===W&&le.id===U;de.setState(le,B,ee)}let At=!1;le.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Mn.state.version||Ke.outputColorSpace!==Xe||ce.isBatchedMesh&&Ke.batching===!1||!ce.isBatchedMesh&&Ke.batching===!0||ce.isBatchedMesh&&Ke.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&Ke.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&Ke.instancing===!1||!ce.isInstancedMesh&&Ke.instancing===!0||ce.isSkinnedMesh&&Ke.skinning===!1||!ce.isSkinnedMesh&&Ke.skinning===!0||ce.isInstancedMesh&&Ke.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&Ke.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&Ke.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&Ke.instancingMorph===!1&&ce.morphTexture!==null||Ke.envMap!==rt||le.fog===!0&&Ke.fog!==qe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==de.numPlanes||Ke.numIntersection!==de.numIntersection)||Ke.vertexAlphas!==yt||Ke.vertexTangents!==bt||Ke.morphTargets!==Qe||Ke.morphNormals!==Vt||Ke.morphColors!==dn||Ke.toneMapping!==Ft||Ke.morphTargetsCount!==Cn||!!Ke.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,Ke.__version=le.version);let li=Ke.currentProgram;At===!0&&(li=ro(le,ne,ce),P&&le.isNodeMaterial&&P.onUpdateProgram(le,li,Ke));let Ri=!1,is=!1,Hi=!1,Ut=li.getUniforms(),sn=Ke.uniforms;if(A.useProgram(li.program)&&(Ri=!0,is=!0,Hi=!0),le.id!==U&&(U=le.id,is=!0),Ke.needsLights){let ee=ep(T.state.lightProbeGridArray,ce);Ke.lightProbeGrid!==ee&&(Ke.lightProbeGrid=ee,is=!0)}if(Ri||W!==B){A.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Ut.setValue(V,"projectionMatrix",B.projectionMatrix),Ut.setValue(V,"viewMatrix",B.matrixWorldInverse);let Sn=Ut.map.cameraPosition;Sn!==void 0&&Sn.setValue(V,ct.setFromMatrixPosition(B.matrixWorld)),O.logarithmicDepthBuffer&&Ut.setValue(V,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ut.setValue(V,"isOrthographic",B.isOrthographicCamera===!0),W!==B&&(W=B,is=!0,Hi=!0)}if(Ke.needsLights&&(Mn.state.sunShadowMap.length>0&&Ut.setValue(V,"sunShadowMap",Mn.state.sunShadowMap,q),Mn.state.directionalShadowMap.length>0&&Ut.setValue(V,"directionalShadowMap",Mn.state.directionalShadowMap,q),Mn.state.spotShadowMap.length>0&&Ut.setValue(V,"spotShadowMap",Mn.state.spotShadowMap,q),Mn.state.pointShadowMap.length>0&&Ut.setValue(V,"pointShadowMap",Mn.state.pointShadowMap,q)),ce.isSkinnedMesh){Ut.setOptional(V,ce,"bindMatrix"),Ut.setOptional(V,ce,"bindMatrixInverse");let ee=ce.skeleton;ee&&(ee.boneTexture===null&&ee.computeBoneTexture(),Ut.setValue(V,"boneTexture",ee.boneTexture,q))}ce.isBatchedMesh&&(Ut.setOptional(V,ce,"batchingTexture"),Ut.setValue(V,"batchingTexture",ce._matricesTexture,q),Ut.setOptional(V,ce,"batchingIdTexture"),Ut.setValue(V,"batchingIdTexture",ce._indirectTexture,q),Ut.setOptional(V,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Ut.setValue(V,"batchingColorTexture",ce._colorsTexture,q));let Vi=he.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&Z.update(ce,he,li),(is||Ke.receiveShadow!==ce.receiveShadow)&&(Ke.receiveShadow=ce.receiveShadow,Ut.setValue(V,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&ne.environment!==null&&(sn.envMapIntensity.value=ne.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=BS()),is){if(Ut.setValue(V,"toneMappingExposure",E.toneMappingExposure),Ke.needsLights&&ff(sn,Hi),qe&&le.fog===!0&&ge.refreshFogUniforms(sn,qe),ge.refreshMaterialUniforms(sn,le,Q,J,T.state.transmissionRenderTarget[B.id]),Ke.needsLights&&Ke.lightProbeGrid){let ee=Ke.lightProbeGrid;sn.probesSH.value=ee.texture,sn.probesMin.value.copy(ee.boundingBox.min),sn.probesMax.value.copy(ee.boundingBox.max),sn.probesResolution.value.copy(ee.resolution)}$o.upload(V,uf(Ke),sn,q)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&($o.upload(V,uf(Ke),sn,q),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ut.setValue(V,"center",ce.center),Ut.setValue(V,"modelViewMatrix",ce.modelViewMatrix),Ut.setValue(V,"normalMatrix",ce.normalMatrix),Ut.setValue(V,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){let ee=le.uniformsGroups;for(let Sn=0,nr=ee.length;Sn<nr;Sn++){let cc=ee[Sn];Re.update(cc,li),Re.bind(cc,li)}}return li}function ff(B,ne){B.ambientLightColor.needsUpdate=ne,B.lightProbe.needsUpdate=ne,B.sunLights.needsUpdate=ne,B.sunLightShadows.needsUpdate=ne,B.directionalLights.needsUpdate=ne,B.directionalLightShadows.needsUpdate=ne,B.pointLights.needsUpdate=ne,B.pointLightShadows.needsUpdate=ne,B.spotLights.needsUpdate=ne,B.spotLightShadows.needsUpdate=ne,B.rectAreaLights.needsUpdate=ne,B.hemisphereLights.needsUpdate=ne}function df(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(B,ne,he){let le=G.get(B);le.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),G.get(B.texture).__webglTexture=ne,G.get(B.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:he,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,ne){let he=G.get(B);he.__webglFramebuffer=ne,he.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(B,ne=0,he=0){N=B,D=ne,F=he;let le=null,ce=!1,qe=!1;if(B){let Xe=G.get(B);if(Xe.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(V.FRAMEBUFFER,Xe.__webglFramebuffer),k.copy(B.viewport),X.copy(B.scissor),ie=B.scissorTest,A.viewport(k),A.scissor(X),A.setScissorTest(ie),U=-1;return}else if(Xe.__webglFramebuffer===void 0)q.setupRenderTarget(B);else if(Xe.__hasExternalTextures)q.rebindTextures(B,G.get(B.texture).__webglTexture,G.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let yt=B.depthTexture;if(Xe.__boundDepthTexture!==yt){if(yt!==null&&G.has(yt)&&(B.width!==yt.image.width||B.height!==yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(B)}}let je=B.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(qe=!0);let rt=G.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(rt[ne])?le=rt[ne][he]:le=rt[ne],ce=!0):B.samples>0&&q.useMultisampledRTT(B)===!1?le=G.get(B).__webglMultisampledFramebuffer:Array.isArray(rt)?le=rt[he]:le=rt,k.copy(B.viewport),X.copy(B.scissor),ie=B.scissorTest}else k.copy(K).multiplyScalar(Q).floor(),X.copy(ve).multiplyScalar(Q).floor(),ie=Oe;if(he!==0&&(le=L),A.bindFramebuffer(V.FRAMEBUFFER,le)&&A.drawBuffers(B,le),A.viewport(k),A.scissor(X),A.setScissorTest(ie),ce){let Xe=G.get(B.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Xe.__webglTexture,he)}else if(qe){let Xe=ne;for(let je=0;je<B.textures.length;je++){let rt=G.get(B.textures[je]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+je,rt.__webglTexture,he,Xe)}}else if(B!==null&&he!==0){let Xe=G.get(B.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Xe.__webglTexture,he)}U=-1};function tr(B){let ne=G.get(B);return(ne.__readFormat!==B.format||ne.__readType!==B.type)&&(ne.__readFormat=B.format,ne.__readType=B.type,ne.__formatReadable=O.textureFormatReadable(B.format),ne.__typeReadable=O.textureTypeReadable(B.type)),ne}this.readRenderTargetPixels=function(B,ne,he,le,ce,qe,$e,Xe=0){if(!(B&&B.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=G.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&$e!==void 0&&(je=je[$e]),je){A.bindFramebuffer(V.FRAMEBUFFER,je);try{let rt=B.textures[Xe],yt=rt.format,bt=rt.type;B.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Xe);let Qe=tr(rt);if(Qe.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=B.width-le&&he>=0&&he<=B.height-ce&&V.readPixels(ne,he,le,ce,Ue.convert(yt),Ue.convert(bt),qe)}finally{let rt=N!==null?G.get(N).__webglFramebuffer:null;A.bindFramebuffer(V.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(B,ne,he,le,ce,qe,$e,Xe=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=G.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&$e!==void 0&&(je=je[$e]),je)if(ne>=0&&ne<=B.width-le&&he>=0&&he<=B.height-ce){A.bindFramebuffer(V.FRAMEBUFFER,je);let rt=B.textures[Xe],yt=rt.format,bt=rt.type;B.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Xe);let Qe=tr(rt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Vt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Vt),V.bufferData(V.PIXEL_PACK_BUFFER,qe.byteLength,V.STREAM_READ),V.readPixels(ne,he,le,ce,Ue.convert(yt),Ue.convert(bt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let dn=N!==null?G.get(N).__webglFramebuffer:null;A.bindFramebuffer(V.FRAMEBUFFER,dn);let Ft=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Zm(V,Ft,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Vt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,qe),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Vt),V.deleteSync(Ft),qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,ne=null,he=0){let le=Math.pow(2,-he),ce=Math.floor(B.image.width*le),qe=Math.floor(B.image.height*le),$e=ne!==null?ne.x:0,Xe=ne!==null?ne.y:0;q.setTexture2D(B,0),V.copyTexSubImage2D(V.TEXTURE_2D,he,0,0,$e,Xe,ce,qe),A.unbindTexture()},this.copyTextureToTexture=function(B,ne,he=null,le=null,ce=0,qe=0){let $e,Xe,je,rt,yt,bt,Qe,Vt,dn,Ft=B.isCompressedTexture?B.mipmaps[qe]:B.image;if(he!==null)$e=he.max.x-he.min.x,Xe=he.max.y-he.min.y,je=he.isBox3?he.max.z-he.min.z:1,rt=he.min.x,yt=he.min.y,bt=he.isBox3?he.min.z:0;else{let sn=Math.pow(2,-ce);$e=Math.floor(Ft.width*sn),Xe=Math.floor(Ft.height*sn),B.isDataArrayTexture?je=Ft.depth:B.isData3DTexture?je=Math.floor(Ft.depth*sn):je=1,rt=0,yt=0,bt=0}le!==null?(Qe=le.x,Vt=le.y,dn=le.z):(Qe=0,Vt=0,dn=0);let Lt=Ue.convert(ne.format),Cn=Ue.convert(ne.type),Ke;ne.isData3DTexture?(q.setTexture3D(ne,0),Ke=V.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(q.setTexture2DArray(ne,0),Ke=V.TEXTURE_2D_ARRAY):(q.setTexture2D(ne,0),Ke=V.TEXTURE_2D),A.activeTexture(V.TEXTURE0),A.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ne.flipY),A.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),A.pixelStorei(V.UNPACK_ALIGNMENT,ne.unpackAlignment);let Mn=A.getParameter(V.UNPACK_ROW_LENGTH),At=A.getParameter(V.UNPACK_IMAGE_HEIGHT),li=A.getParameter(V.UNPACK_SKIP_PIXELS),Ri=A.getParameter(V.UNPACK_SKIP_ROWS),is=A.getParameter(V.UNPACK_SKIP_IMAGES);A.pixelStorei(V.UNPACK_ROW_LENGTH,Ft.width),A.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft.height),A.pixelStorei(V.UNPACK_SKIP_PIXELS,rt),A.pixelStorei(V.UNPACK_SKIP_ROWS,yt),A.pixelStorei(V.UNPACK_SKIP_IMAGES,bt);let Hi=B.isDataArrayTexture||B.isData3DTexture,Ut=ne.isDataArrayTexture||ne.isData3DTexture;if(B.isDepthTexture){let sn=G.get(B),Vi=G.get(ne),ee=G.get(sn.__renderTarget),Sn=G.get(Vi.__renderTarget);A.bindFramebuffer(V.READ_FRAMEBUFFER,ee.__webglFramebuffer),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let nr=0;nr<je;nr++)Hi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,G.get(B).__webglTexture,ce,bt+nr),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,G.get(ne).__webglTexture,qe,dn+nr)),V.blitFramebuffer(rt,yt,$e,Xe,Qe,Vt,$e,Xe,V.DEPTH_BUFFER_BIT,V.NEAREST);A.bindFramebuffer(V.READ_FRAMEBUFFER,null),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ce!==0||B.isRenderTargetTexture||G.has(B)){let sn=G.get(B),Vi=G.get(ne);A.bindFramebuffer(V.READ_FRAMEBUFFER,R),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,I);for(let ee=0;ee<je;ee++)Hi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,ce,bt+ee):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,ce),Ut?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vi.__webglTexture,qe,dn+ee):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Vi.__webglTexture,qe),ce!==0?V.blitFramebuffer(rt,yt,$e,Xe,Qe,Vt,$e,Xe,V.COLOR_BUFFER_BIT,V.NEAREST):Ut?V.copyTexSubImage3D(Ke,qe,Qe,Vt,dn+ee,rt,yt,$e,Xe):V.copyTexSubImage2D(Ke,qe,Qe,Vt,rt,yt,$e,Xe);A.bindFramebuffer(V.READ_FRAMEBUFFER,null),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ut?B.isDataTexture||B.isData3DTexture?V.texSubImage3D(Ke,qe,Qe,Vt,dn,$e,Xe,je,Lt,Cn,Ft.data):ne.isCompressedArrayTexture?V.compressedTexSubImage3D(Ke,qe,Qe,Vt,dn,$e,Xe,je,Lt,Ft.data):V.texSubImage3D(Ke,qe,Qe,Vt,dn,$e,Xe,je,Lt,Cn,Ft):B.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,qe,Qe,Vt,$e,Xe,Lt,Cn,Ft.data):B.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,qe,Qe,Vt,Ft.width,Ft.height,Lt,Ft.data):V.texSubImage2D(V.TEXTURE_2D,qe,Qe,Vt,$e,Xe,Lt,Cn,Ft);A.pixelStorei(V.UNPACK_ROW_LENGTH,Mn),A.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At),A.pixelStorei(V.UNPACK_SKIP_PIXELS,li),A.pixelStorei(V.UNPACK_SKIP_ROWS,Ri),A.pixelStorei(V.UNPACK_SKIP_IMAGES,is),qe===0&&ne.generateMipmaps&&V.generateMipmap(Ke),A.unbindTexture()},this.initRenderTarget=function(B){G.get(B).__webglFramebuffer===void 0&&q.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?q.setTextureCube(B,0):B.isData3DTexture?q.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?q.setTexture2DArray(B,0):q.setTexture2D(B,0),A.unbindTexture()},this.resetState=function(){D=0,F=0,N=null,A.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}};var Jt=(i,e,t)=>i<e?e:i>t?t:i,at=(i,e,t)=>i+(e-i)*t,jo=i=>i*i*(3-2*i),wt=(i,e,t)=>{let n=Jt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Ig=1337;function Lg(i){Ig=i|0}function OS(i){return i=i^Ig|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var _n=(i,e)=>OS(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Fi(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return at(_n(t,e),_n(t+1,e),s)}var Ah=(i,e=0)=>Fi(i,e)*.55+Fi(i*2.03,e+7)*.3+Fi(i*4.1,e+13)*.15;function Tt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Eh=new ue,be=i=>(Eh.set(i),[Eh.r,Eh.g,Eh.b]),id=(i,e,t)=>[at(i[0],e[0],t),at(i[1],e[1],t),at(i[2],e[2],t)],qn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Ui=["city","sakura","coast","country","mountain","snow"],Il={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Bi=1500,Qo=260,gs=0,Dl=2,kS=-2.2,Ll=0;function Ng(i){Ll=Math.max(0,Ui.indexOf(i))}function Mr(i){let e=Math.floor(i/Bi),t=i-e*Bi,n=jo(Jt((t-(Bi-Qo))/Qo,0,1)),s=Ui.length;return{a:Ui[((e+Ll)%s+s)%s],b:Ui[((e+Ll+1)%s+s)%s],t:n}}function It(i){let e=Mr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var mn=i=>{let e=Mr(i);return e.t<.5?e.a:e.b};function Cs(i,e){let t=Math.floor(i/Bi),n=i-t*Bi,s=jo(Jt((n-(Bi-Qo))/Qo,0,1)),r=Ui.length;return(Ui[((t+Ll)%r+r)%r]===e?1-s:0)+(Ui[((t+Ll+1)%r+r)%r]===e?s:0)}function Xn(i,e){let t=Mr(i);return at(Il[t.a][e],Il[t.b][e],t.t)}var Zr=650,Kr=375,ea=i=>i*Zr+Kr;function Nl(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=It(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var sd={x:new Map,r:new Map,t:new Map};function rd(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function Sr(i){let e=Math.round((i-Kr)/Zr);return rd(sd.x,e,()=>{let t=ea(e);return Nl(t)?{k:e,s:t}:null})}function zS(i){let e=Sr(i);return e?1-wt(8,45,Math.abs(i-e.s)):0}var $r=1150,ta=820,Fl=4.6,od=i=>i*$r+ta;function ad(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=It(i+t);if(n.country+n.sakura<.9)return!1}let e=Sr(i);return!(e&&Math.abs(e.s-i)<170)}function Zi(i){let e=Math.round((i-ta)/$r);return rd(sd.r,e,()=>{let t=od(e);return ad(t)?{k:e,s:t}:null})}function HS(i){let e=Zi(i);return e?1-wt(30,70,Math.abs(i-e.s)):0}function VS(i){let e=-Fl;return i<11?e-1.3:i<16?at(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?at(e+.7,.35,(i-20)/5.5):.35}var Fg=1050,Ug=525,bn=85,ln=125,WS=24,GS=i=>i*Fg+Ug;function qS(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=It(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function Ki(i){let e=Math.round((i-Ug)/Fg);return rd(sd.t,e,()=>{let t=GS(e);return qS(t)?{k:e,s:t}:null})}function XS(i){let e=Ki(i);return e?1-wt(bn+20,ln+25,Math.abs(i-e.s)):0}var Rh=0,Ph=(i,e)=>{let t=i/ln;return WS*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var Si=2,Ch=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.I=[0],this.Y=[this.elev(0)]}curv(e){let t=(Fi(e/300,11)-.5)*2+(Fi(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Xn(e,"curv")*(1-Math.max(zS(e),HS(e),XS(e)))}elevRaw(e){return Xn(e,"base")+Xn(e,"hill")*(Ah(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=Sr(e);if(n){let o=1-wt(8,45,Math.abs(e-n.s));o>0&&(t=at(t,this.elevRaw(n.s),o))}let s=Zi(e);if(s){let o=1-wt(30,70,Math.abs(e-s.s));o>0&&(t=at(t,this.elevRaw(s.s),o))}let r=Ki(e);if(r){let o=1-wt(bn+10,ln+45,Math.abs(e-r.s));o>0&&(t=at(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*Si<e+Si;){let t=this.X.length-1,n=t*Si,s=this.curv(n+Si/2)*Si,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*Si),this.Z.push(this.Z[t]+Math.cos(r+s/2)*Si),this.H.push(r+s),this.I.push(this.I[t]+(r+s/2)*Si),this.Y.push(this.elev(n+Si))}}headInt(e){e=Math.max(0,e),this.ensure(e+Si);let t=e/Si,n=Math.floor(t),s=t-n,r=this.H[n];return this.I[n]+Si*s*(r+(this.H[n+1]-r)*s/2)}meanHeading(e,t){let n=Math.max(0,e-t),s=e+t;return(this.headInt(s)-this.headInt(n))/(s-n)}at(e,t={}){e=Math.max(0,e),this.ensure(e+Si);let n=e/Si,s=Math.floor(n),r=n-s;t.x=at(this.X[s],this.X[s+1],r),t.z=at(this.Z[s],this.Z[s+1],r),t.y=at(this.Y[s],this.Y[s+1],r),t.h=at(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),l=Math.cos(t.h);return t.fx=o,t.fz=l,t.rx=-l,t.rz=o,t}};function Dg(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+wt(45,190,r)*16*(.45+.55*Fi(e/160+(t>0?50:0),3));case"coast":return t>0?r<s+.9?-.06:-.15+wt(s+1.5,80,r)*24*(.5+.5*Fi(e/170,5))+wt(80,200,r)*30:r<s+1.5?-.06:r<s+1.95?-.04:kS-Math.min(r-(s+2),40)*.13-n;case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Fi(e/140,61),a=r-(s+1);return a<l?a:Math.min(l+(a-l)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+wt(105,230,r)*95*(.6+.4*Fi(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?at(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Fi(e/40+(t>0?3:0),71)-.5):.55+wt(125,210,r)*40*(.45+.55*Fi(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+wt(140,215,r)*7*(.4+.6*Fi(e/210+(t>0?9:0),7))}}function Ps(i,e,t,n){let s=Mr(i),r=Dg(s.a,i,e,t,n),o=s.t;e<0&&o>0&&(s.b==="coast"?o=wt(.25,.9,o):s.a==="coast"&&(o=wt(.1,.75,o)));let l=s.t>0?at(r,Dg(s.b,i,e,t,n),o):r;Rh=0;let a=Zi(i);if(a){let M=Math.abs(i-a.s);if(M>=36)return l;let c=M<29?VS(M):at(.35,l,wt(29,36,M));return Math.abs(e)<n+3.2&&(c=Math.min(c,-.08)),c}let u=Ki(i);if(!u)return l;let h=i-u.s,p=Math.abs(h);if(p>=2*ln)return l;let m=Math.abs(e),x=Ph(h,e),_;return p<bn?_=m<=n+1.46?-.25:Math.max(l,x):_=Math.max(l,Math.min(x,m<n+1?-.06:m-(n+1))),Rh=Math.max(0,_-l),_}function Bg(i){let e=Zi(i);return e?1-wt(27,34,Math.abs(i-e.s)):0}var Ul=new H,Ih=new H,YS=[1,1,1],ZS=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],kg=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),zg=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),en=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1,idx:o=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.hasIdx=o,this.I=null,this.ni=0,this.icap=0,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new st,this.nm=new vt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}growI(e){let t=Math.max(this.icap*2,e,1024),n=new Uint32Array(t);this.I&&n.set(this.I.subarray(0,this.ni)),this.I=n,this.icap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,l,a,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,p=this.ne,m=this.n*3,x=this.P,_=this.bb,M=h[0]*e+h[4]*t+h[8]*n+h[12],c=h[1]*e+h[5]*t+h[9]*n+h[13],f=h[2]*e+h[6]*t+h[10]*n+h[14];x[m]=M,x[m+1]=c,x[m+2]=f,M<_[0]&&(_[0]=M),c<_[1]&&(_[1]=c),f<_[2]&&(_[2]=f),M>_[3]&&(_[3]=M),c>_[4]&&(_[4]=c),f>_[5]&&(_[5]=f);let d=p[0]*s+p[3]*r+p[6]*o,g=p[1]*s+p[4]*r+p[7]*o,v=p[2]*s+p[5]*r+p[8]*o,b=127/(Math.sqrt(d*d+g*g+v*v)||1);if(this.N[m]=Math.round(d*b),this.N[m+1]=Math.round(g*b),this.N[m+2]=Math.round(v*b),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=a),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(c)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let T=u||YS,w=this.Cl;w[m]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,w[m+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,w[m+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){Ul.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Ih.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Ih.lengthSq()<1e-12&&Ih.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Ul.cross(Ih).normalize();let l=Ul.x,a=Ul.y,u=Ul.z,h=o?o.u0:0,p=o?o.u1:1,m=o?o.v0:0,x=o?o.v1:1;this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(t[0],t[1],t[2],l,a,u,p,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(s[0],s[1],s[2],l,a,u,h,x,r)}box(e,t,n,s,r,o,l,a=null,u=null){let h=a||{},p=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],p.nz||l,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],p.pz||l,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],p.nx||l,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],p.px||l,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],p.py||l,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],p.ny||l,h.ny)}cyl(e,t,n,s,r,o,l,a,u=!0){let h=(s-r)/o;for(let p=0;p<l;p++){let m=p/l*Math.PI*2,x=(p+1)/l*Math.PI*2,_=Math.cos(m),M=Math.sin(m),c=Math.cos(x),f=Math.sin(x),d=[e+_*s,t,n+M*s],g=[e+c*s,t,n+f*s],v=[e+c*r,t+o,n+f*r],b=[e+_*r,t+o,n+M*r];this.vtx(d[0],d[1],d[2],_,h,M,0,0,a),this.vtx(b[0],b[1],b[2],_,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(d[0],d[1],d[2],_,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(g[0],g[1],g[2],c,h,f,0,0,a),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,a),this.vtx(v[0],v[1],v[2],0,1,0,0,0,a),this.vtx(b[0],b[1],b[2],0,1,0,0,0,a))}}rod(e,t,n,s,r,o){let l=t[0]-e[0],a=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(l,a,u);l/=h,a/=h,u/=h;let p=0,m=1,x=0;Math.abs(a)>.99&&(p=1,m=0);let _=a*x-u*m,M=u*p-l*x,c=l*m-a*p,f=Math.hypot(_,M,c);_/=f,M/=f,c/=f;let d=M*u-c*a,g=c*l-_*u,v=_*a-M*l;for(let b=0;b<r;b++){let T=b/r*Math.PI*2,w=(b+1)/r*Math.PI*2,y=Math.cos(T),S=Math.sin(T),E=Math.cos(w),C=Math.sin(w),P=_*y+d*S,L=M*y+g*S,R=c*y+v*S,I=_*E+d*C,D=M*E+g*C,F=c*E+v*C,N=[e[0]+P*n,e[1]+L*n,e[2]+R*n],U=[e[0]+I*n,e[1]+D*n,e[2]+F*n],W=[t[0]+I*s,t[1]+D*s,t[2]+F*s],k=[t[0]+P*s,t[1]+L*s,t[2]+R*s];this.vtx(N[0],N[1],N[2],P,L,R,0,0,o),this.vtx(U[0],U[1],U[2],I,D,F,0,0,o),this.vtx(W[0],W[1],W[2],I,D,F,0,0,o),this.vtx(N[0],N[1],N[2],P,L,R,0,0,o),this.vtx(W[0],W[1],W[2],I,D,F,0,0,o),this.vtx(k[0],k[1],k[2],P,L,R,0,0,o)}return h}blob(e,t,n,s,r,o,l=0,a=1){let u=Og[l%Og.length],h=u.attributes.position.array,p=u.attributes.normal.array,m=u.userData.disp;for(let x=0;x<h.length;x+=3){let _=1+m[x/3],M=Math.max(0,Math.min(1,p[x+1]*.5+.5)),c=[o[0]+(r[0]-o[0])*M,o[1]+(r[1]-o[1])*M,o[2]+(r[2]-o[2])*M];this.vtx(e+h[x]*s*_,t+h[x+1]*s*_*a,n+h[x+2]*s*_,p[x],p[x+1],p[x+2],0,0,c)}}wire(e,t,n,s,r,o=10){let l=e;this.noShadow=!0;for(let a=1;a<=o;a++){let u=a/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,h,s,s,3,r),l=h}this.noShadow=!1}tube(e,t,n,s,r=null,o=0){let l=e.length,a=this.n,u=n+1,h=0,p=0,m=0,x=o;for(let c=0;c<l;c++){let f=e[c>0?c-1:0],d=e[c<l-1?c+1:l-1],g=d[0]-f[0],v=d[1]-f[1],b=d[2]-f[2],T=Math.hypot(g,v,b)||1;if(g/=T,v/=T,b/=T,c===0){let I=r||(Math.abs(v)<.9?[0,1,0]:[1,0,0]);h=I[0],p=I[1],m=I[2]}else x+=Math.hypot(e[c][0]-e[c-1][0],e[c][1]-e[c-1][1],e[c][2]-e[c-1][2]);let w=h*g+p*v+m*b;h-=w*g,p-=w*v,m-=w*b;let y=Math.hypot(h,p,m);y<1e-4&&(h=Math.abs(g)<.9?0:1,p=Math.abs(g)<.9?1:0,m=0,w=h*g+p*v+m*b,h-=w*g,p-=w*v,m-=w*b,y=Math.hypot(h,p,m)),h/=y,p/=y,m/=y;let S=v*m-b*p,E=b*h-g*m,C=g*p-v*h,P=(t[c<l-1?c+1:l-1]-t[c>0?c-1:0])/(T||1),L=e[c],R=t[c];for(let I=0;I<=n;I++){let D=I/n*Math.PI*2,F=Math.cos(D),N=Math.sin(D),U=h*F+S*N,W=p*F+E*N,k=m*F+C*N;this.vtx(L[0]+U*R,L[1]+W*R,L[2]+k*R,U-P*g,W-P*v,k-P*b,D,x,s)}}let _=(l-1)*n*6;this.ni+_>this.icap&&this.growI(this.ni+_);let M=this.I;for(let c=0;c<l-1;c++)for(let f=0;f<n;f++){let d=a+c*u+f,g=d+1,v=d+u,b=v+1,T=this.ni;M[T]=d,M[T+1]=g,M[T+2]=b,M[T+3]=d,M[T+4]=b,M[T+5]=v,this.ni+=6}return x}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,l,a]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],l,a,s[o])}bill(e,t,n,s,r,o,l,a,u,h,p=ZS,m=1){let x=(u.u1-u.u0)*.5,_=(u.v1-u.v0)*.5,M=u.u0+x,c=u.v0+_;for(let f=0;f<p.length;f+=2){let d=p[f],g=p[f+1];this.offX=d*l,this.offY=g*a,this.vtx(e,t,n,s,r,o,M+d*x*m,c+g*_*m,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null,I:this.hasIdx&&this.I?this.I.slice(0,this.ni):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,l=e.C,a=e.U,u=this.n,h=this.bb;for(let p=0;p<e.n*3;p+=3){let m=r[p],x=r[p+1],_=r[p+2],M=u*3+p,c=n[0]*m+n[4]*x+n[8]*_+n[12],f=n[1]*m+n[5]*x+n[9]*_+n[13],d=n[2]*m+n[6]*x+n[10]*_+n[14];this.P[M]=c,this.P[M+1]=f,this.P[M+2]=d,this.hasAO&&(this.A[u+p/3]=this.aoByte(f)),c<h[0]&&(h[0]=c),f<h[1]&&(h[1]=f),d<h[2]&&(h[2]=d),c>h[3]&&(h[3]=c),f>h[4]&&(h[4]=f),d>h[5]&&(h[5]=d);let g=o[p],v=o[p+1],b=o[p+2],T=s[0]*g+s[3]*v+s[6]*b,w=s[1]*g+s[4]*v+s[7]*b,y=s[2]*g+s[5]*v+s[8]*b,S=127/(Math.sqrt(T*T+w*w+y*y)||1);this.N[M]=Math.round(T*S),this.N[M+1]=Math.round(w*S),this.N[M+2]=Math.round(y*S)}if(this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(a?this.U.set(a,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasIdx&&e.I){let p=e.I,m=this.ni;m+p.length>this.icap&&this.growI(m+p.length);for(let x=0;x<p.length;x++)this.I[m+x]=p[x]+u;this.ni+=p.length}if(this.hasOff){let p=Math.hypot(n[0],n[1],n[2]),m=e.O;if(m)for(let x=0;x<e.n*2;x++)this.O[u*2+x]=m[x]*p;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new xt,t=this.n,n=this.bb;if(e.setAttribute("position",new _t(this.P.slice(0,t*3),3)),e.setAttribute("normal",new _t(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new _t(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new _t(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new _t(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new _t(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new _t(this.Cl.slice(0,t*3),3,!0)),this.hasIdx&&e.setIndex(new _t(t>65535?this.I.slice(0,this.ni):new Uint16Array(this.I.subarray(0,this.ni)),1)),e.boundingBox=new _i(new H(n[0],n[1],n[2]),new H(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new bi),e}},Og=[0,1,2,3].map(i=>{let e=new hl(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,l)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});mt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var KS=mt.shadowmap_pars_fragment;function $S(){let i=`#ifdef SH_SOFT
float k = clamp( 2.0 - shDepth * shadowRadius, 0.0, 1.0 );
#else
float k = 0.0;
#endif
if ( k > 0.0 ) { // (s: the point's place in its texel, from the nearest texel corner; the taps' offsets in texels, \xD7 k)
	vec2 s = fract( shadowCoord.xy * shadowMapSize + 0.5 ), w0 = 3.0 - 2.0 * s, w1 = 4.0 - w0, kt = k * texelSize;
	vec2 p0 = shadowCoord.xy + ( ( 2.0 - s ) / w0 - s - 1.0 ) * kt, p1 = shadowCoord.xy + ( s / w1 + 1.0 - s ) * kt;
	shadow = ( w0.x * w0.y * texture( shadowMap, vec3( p0, shadowCoord.z ) ) + w1.x * w0.y * texture( shadowMap, vec3( p1.x, p0.y, shadowCoord.z ) )
		+ w0.x * w1.y * texture( shadowMap, vec3( p0.x, p1.y, shadowCoord.z ) ) + w1.x * w1.y * texture( shadowMap, vec3( p1, shadowCoord.z ) ) ) * 0.0625;
} else shadow = texture( shadowMap, vec3( shadowCoord.xy, shadowCoord.z ) );`;mt.shadowmap_pars_fragment=KS.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,i).replace("float getShadow( sampler2DShadow",`float shDepth = 0.0; // (the view depth, set by the lights chunk: how far the tent reaches)
float getShadow( sampler2DShadow`)}$S();function Xg(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";mt.shadowmap_pars_fragment=t+mt.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}mt.lights_fragment_begin=mt.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
	directionalLight = directionalLights[ 0 ];
	getDirectionalLightInfo( directionalLight, directLight );
	#ifdef CAR_KEY
	// the car is lit by the painter's sun (car.js, main.js): the sun swung round to ahead of the car, so its back is in the
	// shade as in every painting; the shadows it casts and receives stay the real sun's
	vec3 sunV = directLight.direction; directLight.direction = uCarKey;
	#endif
	#ifdef VOL_KEY
	// the scenery's painted volumes (the broadleaf crowns, the tetrapods) are lit from the paintings' side (VOL_KEY names the
	// material's key: main.js uLeafKey / uVolKey, the sun swung round towards the camera), their shadows the real sun's where
	// it reaches them
	vec3 sunV = directLight.direction; directLight.direction = VOL_KEY;
	#endif
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	if ( directLight.visible && receiveShadow ) {
		#ifdef SHADOWMAP_TYPE_PCF
		shDepth = - geometryPosition.z; // (the soft tent's reach: see getShadow)
		#endif
		#ifdef GRAZE_FADE
		// walls the sun only grazes keep the toon ramp: there the map can't resolve their own depth (acne stripes that crawl as the sun moves)
		#ifdef VOL_KEY
		float gz = smoothstep( GRAZE_LO, GRAZE_HI, dot( geometryNormal, sunV ) ); // (and faces turned from the real sun: the key's ramp alone)
		#else
		float gz = smoothstep( GRAZE_LO, GRAZE_HI, dot( geometryNormal, directLight.direction ) );
		#endif
		#else
		float gz = 1.0;
		#endif
		// (faces turned from the sun, which the fade gives the ramp alone, skip the lookup: its result was thrown away)
		float sh = 1.0;
		if ( gz > 0.0 ) { directionalLightShadow = directionalLightShadows[ 0 ];
			sh = mix( 1.0, getShadow( directionalShadowMap[ 0 ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ 0 ] ), gz ); }
		#if NUM_DIR_LIGHT_SHADOWS > 1
		// surfaces turning away from the sun keep just the toon ramp: the sharp map would cut their wrapped light
		// into jagged bands (the car shadowing its own back)
		#if defined( CAR_KEY ) || defined( VOL_KEY )
		float nl = smoothstep( 0.0, 0.2, dot( geometryNormal, sunV ) ); // (the car's own shadows: where the real sun reaches)
		#else
		float nl = smoothstep( 0.0, 0.2, dot( geometryNormal, directLight.direction ) );
		#endif
		if ( nl > 0.0 ) { directionalLightShadow = directionalLightShadows[ 1 ];
			sh = min( sh, mix( 1.0, getShadow( directionalShadowMap[ 1 ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ 1 ] ), nl ) ); }
		#endif
		directLight.color *= sh;
	}
	#endif
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var ai=4200,we={uSkyHor:{value:new ue(.7,.8,.9)},uSkyZen:{value:new ue(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Fe},uSunDir:{value:new H(0,1,0)},uSunCol:{value:new ue(1,1,1)},uTuftV:{value:new dt(.167,.333,.164,.165)},uGhShade:{value:new H(.3,.85,1.7)},uGhTint:{value:new H(1,1,1)},uTpK:{value:0},uTpD:{value:new ue},uTpS:{value:new ue},uTpM:{value:new ue},uTpL:{value:new ue},uTpFL:{value:new ue},uTpFS:{value:new ue},uBkK:{value:0},uBkS:{value:new ue},uBkM:{value:new ue},uBkL:{value:new ue},uBkS2:{value:new ue},uBkM2:{value:new ue},uBkL2:{value:new ue},uBlShade:{value:new H(7.5,3,2.3)},uBlMid:{value:new dt(.6105,.1413,.305,1/.7)},uBlTip:{value:new dt(1-.6105,.807-.1413,.8879-.305,-.3/.7)},uRoadN:{value:new H(1,1,1)},uRoadF:{value:new H(1,1,1)},uTunA:{value:new H(0,-1e4,0)},uTunB:{value:new H(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new H},uCarFwd:{value:new H(0,0,1)},uHead:{value:0},uCarKey:{value:new H(0,1,0)},uVolKey:{value:new H(0,1,0)},uLeafKey:{value:new H(0,1,0)},uCarFill:{value:new H},uWind:{value:1},uNoiseTex:{value:JS()},uCloudTex:{value:null},uCloudOrg:{value:new Fe},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Fe(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function Yg(i){let e=new Mi(new Uint8Array(i),i.length,1,ms);return e.minFilter=e.magFilter=Nn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Jr=Yg([16,16,16,70,200,255,255,255]),cd=Yg([28,40,70,130,200,240,255,255]),Dh=(()=>{let e=new Uint8Array(64);for(let n=0;n<64;n++){let s=(n+.5)/64*2-1,r=Math.min(1,Math.max(0,(s+.03)/.25));e[n]=Math.round(255*r*r*(3-2*r))}let t=new Mi(e,64,1,ms);return t.minFilter=t.magFilter=Ot,t.generateMipmaps=!1,t.needsUpdate=!0,t})();function JS(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new Mi(e,256,256,ri);return s.wrapS=s.wrapT=hs,s.magFilter=Ot,s.minFilter=zn,s.generateMipmaps=!0,s.colorSpace=hi,s.needsUpdate=!0,s}var Oi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Lh=1600,ld=256,jS=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Lh).toFixed(8)} + 0.5).r * uCloudSh; }`,QS=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Zg=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Lh).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,Kg=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,e3=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,t3=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,Nh=new pr;Nh.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};Nh.customProgramCacheKey=()=>"propdepth";function $g(){let i=new Zt(ld,ld,{format:ms,type:si,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),e=new ht({uniforms:{uCenter:{value:new Fe},uOrigin:we.uOrigin,uTime:we.uTime,uNoiseTex:we.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Lh.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new pt(new nn(2,2),e),n=new Ws;t.frustumCulled=!1,we.uCloudTex.value=i.texture,we.uCloudTex.rt=i;let s=Lh/ld;return{update(r,o,l,a,u){let h=Math.round((o+a)/s)*s-a,p=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(h,p),we.uCloudOrg.value.set(h,p);let m=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(m)}}}function Is(i,e="",t="",n=!0){i.uniforms.uOrigin=we.uOrigin,i.uniforms.uCloudSh=we.uCloudSh,i.uniforms.uTime=we.uTime,i.uniforms.uNoiseTex=we.uNoiseTex,i.uniforms.uCloudTex=we.uCloudTex,i.uniforms.uCloudOrg=we.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=we[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?Zg:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Oi}${jS}${e3}${e}`).replace("#include <opaque_fragment>",`${n?Kg:QS}${t}${t3}
#include <opaque_fragment>`)}var n3=`
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
`,i3=`
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
#endif`,s3=`
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
}`,Jg={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},wi={tex:null,uFieldK:{value:new Fe(1/12,1/21)},uFieldC:{value:new H(1,1,1)},uFieldCo:{value:new H(1,1,1)},uFieldSa:{value:new H(1,1,1)},uFieldM:{value:new H(.16,.32,.05)}};function jg(i){let e={};for(let t of i)e[Jg[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),wi.tex&&(i.includes("country")||i.includes("coast")||i.includes("sakura"))&&(e.F_PAINT=""),e}var Hg=new Map;function Bl(i){let e=[...new Set(i)].sort().join("+"),t=Hg.get(e);return t||(t=Qg(jg(e.split("+")),e),Hg.set(e,t)),t}function Qg(i=jg(Object.keys(Jg)),e="all"){let t=new wn({color:16777215,gradientMap:Jr});t.defines={...i,SH_SOFT:""};let n=i.F_PAINT!==void 0;return t.onBeforeCompile=s=>{s.uniforms.uSkyHor=we.uSkyHor,s.uniforms.uSkyZen=we.uSkyZen,s.uniforms.uWet=we.uWet,s.uniforms.uSakWet=we.uSakWet,s.uniforms.uNight=we.uNight,s.uniforms.uSunDir=we.uSunDir,s.uniforms.uSunCol=we.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK","uRoadN","uRoadF"])s.uniforms[r]=we[r];if(n){s.uniforms.uFieldTex={value:wi.tex};for(let r of["uFieldK","uFieldC","uFieldCo","uFieldSa","uFieldM"])s.uniforms[r]=wi[r]}s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),Is(s,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol, uRoadN, uRoadF; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0; vec3 gRoadT = vec3(1.0);
${n3}`,s3+i3,!1),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
#if defined(Z_COAST) || defined(Z_COUNTRY)
reflectedLight.directDiffuse *= gRoadT;
#endif`)},t.customProgramCacheKey=()=>"ground-v21-"+e+(n?"-fp":""),t}function e1(i,e){i.uniforms[e]=we[e],i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 ${e};`)}function Vg(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),Is(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function t1(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=we[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function r3(i){i.uniforms.uLightsOn=we.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function ud(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function n1(i,e=!1){let t=new wn({vertexColors:!0,gradientMap:Fh(-.15,.3,0)});return t.defines={VOL_KEY:"uVolKey"},e&&(t.defines.TP_LITE=""),t.onBeforeCompile=n=>{for(let s of["uTpK","uTpD","uTpS","uTpM","uTpL","uTpFL","uTpFS"])n.uniforms[s]=we[s];e1(n,"uVolKey"),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
  reflectedLight.directDiffuse = tpDD; reflectedLight.indirectDiffuse = tpID; }`),Is(n)},t.customProgramCacheKey=()=>e?"tetra-v2-lite":"tetra-v2",t}var o3="#7a6556",a3="#6a5444",Wg=i=>{let e=new ue(i);return`vec3(${e.r.toFixed(4)}, ${e.g.toFixed(4)}, ${e.b.toFixed(4)})`};function i1(i=!1){let e=new wn({vertexColors:!0,gradientMap:Fh(-.35,.42,0)});return i&&(e.defines={BK_LITE:""}),e.onBeforeCompile=t=>{for(let n of["uBkK","uBkS","uBkM","uBkL","uBkS2","uBkM2","uBkL2"])t.uniforms[n]=we[n];ud(t),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb = mix(${Wg(o3)}, ${Wg(a3)}, vColor.r) * vColor.g * bk;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
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
#endif`),Is(t)},e.customProgramCacheKey=()=>i?"bark-v1-lite":"bark-v1",e}function hd(i){return i.onBeforeCompile=e=>Is(e),i.customProgramCacheKey=()=>"cs",i}var l3="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",c3=(i,e,t="")=>`
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
  #ifdef CAR_KEY
  vec3 H = normalize(uCarKey + vV); // (the car's glint: from the painter's sun that lights it)
  #else
  vec3 H = normalize(normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz) + vV);
  #endif
  outgoingLight += uSunCol * pow(max(dot(nV, H), 0.0), 90.0) * 1.6 * gm * lit;
  ${t}
}`;function fd(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=we[o];s&&Object.assign(r.uniforms,s.uniforms),Is(r,l3+(s?s.pars:""),c3(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var wr=48;function s1(i,e){let t=new wn({color:16777215,gradientMap:cd}),n=!!wi.tex;return t.onBeforeCompile=s=>{Object.assign(s.uniforms,e,i);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])s.uniforms[r]=we[r];n&&(s.uniforms.uFieldC=wi.uFieldC,s.uniforms.uFieldM=wi.uFieldM),s.vertexShader=s.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${Zg}
uniform vec4 uG[${wr}], uGM[${wr/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${n?`
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${wr-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  float gsw = mod(gs, ${ai.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);`:`
  vec2 pid = floor(vec2(mod(gs, ${ai.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${Kg}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Gg(i,e,t=!1){i.uniforms.uPMap={value:e.map},t||(i.uniforms.uPEm={value:e.emissive}),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uPMap;${t?"":" uniform sampler2D uPEm;"}`).replace("#include <map_fragment>",`
bool pgP = vMapUv.x > 1.5;
vec4 sampledDiffuseColor;
if (pgP) sampledDiffuseColor = texture2D(uPMap, vMapUv - vec2(2.0, 0.0));
else sampledDiffuseColor = texture2D(map, vMapUv);
diffuseColor *= sampledDiffuseColor;`),t||(i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`
vec4 emissiveColor;
if (pgP) emissiveColor = texture2D(uPEm, vEmissiveMapUv - vec2(2.0, 0.0));
else emissiveColor = texture2D(emissiveMap, vEmissiveMapUv);
totalEmissiveRadiance *= emissiveColor.rgb;`))}function r1(i,e,t){let n={};n.ground=Qg(),n.color=Vg(new wn({vertexColors:!0,gradientMap:Jr}),1.6,.1,"color-v3",ud),n.atlas=new wn({vertexColors:!0,gradientMap:Jr,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),n.atlas.onBeforeCompile=a=>{ud(a),r3(a),Is(a),Gg(a,t)},n.atlas.customProgramCacheKey=()=>"atlas-v7",n.atlasDepth=new pr,n.atlasDepth.onBeforeCompile=a=>Gg(a,t,!0),n.atlasDepth.customProgramCacheKey=()=>"atlasdepth-v2",n.ptex=t,n.foliage=Vg(new wn({vertexColors:!0,gradientMap:cd}),2.6,.24,"foliage-v2"),n.lamp=new vn({color:15789798}),n.sig=new vn({color:new ue(.15,1.7,1.1)}),n.sodium=new vn({color:new ue(5,2.3,.65)}),n.decal=new wn({vertexColors:!0,gradientMap:Jr,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),n.decal.onBeforeCompile=a=>Is(a),n.decal.customProgramCacheKey=()=>"decal-v1",e&&(n.leaf=new wn({map:e,vertexColors:!0,gradientMap:cd,alphaTest:.42,side:Tn}),n.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",mt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),Is(a),t1(a),a.uniforms.uTuftV=we.uTuftV,a.uniforms.uWind=we.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},n.leaf.customProgramCacheKey=()=>"leaf-v5"),n.wire=new vn({color:2303020});let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(255,255,255,0.45)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,128,128);let l=new ii(s);return n.pool=new vn({map:l,color:16762746,transparent:!0,opacity:0,blending:Xi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n.glowTex=l,n}function Fh(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let l=(o+.5)/64*2-1,a=Math.min(1,Math.max(0,(l-i)/(e-i))),u=a*a*(3-2*a);s[o]=Math.round(255*(t+(1-t)*u))}let r=new Mi(s,64,1,ms);return r.minFilter=r.magFilter=Ot,r.generateMipmaps=!1,r.needsUpdate=!0,r}var u3=Fh(-.05,.5,.05),h3=Fh(-.5,.45,.12);function qg(i,e){i.uniforms.uTime=we.uTime,i.uniforms.uWind=we.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var f3=(i,e,t)=>{let n=new ue().setRGB(i/255,e/255,t/255,Gt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},d3=`float blT = clamp(gTx.b * uBlMid.w + uBlTip.w, 0.0, 1.0); // (smoothstep(edge, 1, b): the edge's maths done on the CPU)
diffuseColor.rgb *= mix(${f3(62,38,34)}, uBlMid.rgb + uBlTip.rgb * (blT * blT * (3.0 - 2.0 * blT)), smoothstep(0.1, 0.26, gTx.b));`;function dd(i,{blossom:e=!1}={}){let t=new wn({map:i,vertexColors:!0,color:e?16777215:new ue().setRGB(.68,.85,.46,Gt),gradientMap:e?h3:u3,alphaTest:.5,side:Es});t.shadowSide=Tn,e||(t.defines={VOL_KEY:"uLeafKey"}),t.onBeforeCompile=s=>{Is(s),t1(s),qg(s,!1),s.uniforms.uGhShade=e?we.uBlShade:we.uGhShade,e?(s.uniforms.uBlMid=we.uBlMid,s.uniforms.uBlTip=we.uBlTip):(s.uniforms.uGhTint=we.uGhTint,e1(s,"uLeafKey")),s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`+(e?" uniform vec4 uBlMid, uBlTip;":" uniform vec3 uGhTint;")).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?d3:"diffuseColor.rgb *= gTx.b * uGhTint;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v2":"gleaf-v2";let n=new pr;return n.onBeforeCompile=s=>qg(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var p3=be("#f2c230"),o1=be("#26272c");function Uh(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=Xn(s,"rw"),l=n*(o+.8),a=It(s),u=a.city+a.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function a1(){let i=new pn,e=hd(new wn({vertexColors:!0,gradientMap:Jr})),t=new vn({color:new ue(6,.45,.3)}),n=new vn({color:new ue(.22,.03,.03)}),s=[0,1].map(()=>{let r=new pn,o=new pn;r.add(o),o.position.set(-.42,1.02,-.02);let l=new en,a=3.6;for(let p=0,m=0;m<a;p++,m+=.45)l.box(-Math.min(m+.45,a),-.065,-.065,-m,.065,.065,p%2?o1:p3);l.box(0,-.09,-.07,.38,.09,.07,o1);let u=new pt(l.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(p=>{let m=new pt(new Or(.13,18),n);return m.position.set(p,2.75,-.1),m.rotation.y=Math.PI,r.add(m),m});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:a}});return i.visible=!1,{group:i,update(r,o,l,a,u){i.visible=!!r,r&&r.forEach((h,p)=>{let m=s[p];m.root.position.set(h.x-o.x,h.y,h.z-o.z),m.root.rotation.y=h.yaw,m.arm.scale.x=(h.rw+.25)/m.L,m.pivot.rotation.z=-l*(Math.PI/2-.06);let x=Math.floor(u*2.5)%2;m.lamps[0].material=a&&x===0?t:n,m.lamps[1].material=a&&x===1?t:n})}}}function m3(){let t=()=>{let f=document.createElement("canvas");return f.width=1024,f.height=512,f},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let a=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,a);for(let f=0;f<1024;f+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(f,0,2,a);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,a-14,1024,14);let u=[.1,.36,.62,.88].map(f=>f*1024),h=(f,d,g,v)=>{let b=r.createLinearGradient(f,d,f+g*.3,d+v);b.addColorStop(0,"#5d7fae"),b.addColorStop(.6,"#9db7d6"),b.addColorStop(1,"#2f3f55"),r.fillStyle=b,r.fillRect(f,d,g,v),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(f+g*.2,d),r.lineTo(f+g*.38,d),r.lineTo(f+g*.1,d+v),r.lineTo(f-g*.08,d+v),r.fill(),o.fillStyle="#ffeccc",o.fillRect(f,d,g,v)};for(let f=0;f<u.length-1;f++){let d=u[f]+40,g=u[f+1]-40,v=3,b=(g-d)/v;for(let T=0;T<v;T++)r.fillStyle="#6b737c",r.fillRect(d+T*b+2,34,b-4,58),h(d+T*b+6,38,b-12,50)}for(let f of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(f+2,34,28,58),h(f+5,38,22,50);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,22,60,a-36),r.fillStyle="#7b828a",r.fillRect(f-1,22,2,a-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(f-30,22,60,a-36),h(f-24,34,20,46),h(f+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let p=0,m=176,x=256,_=256;r.fillStyle="#d3d7dc",r.fillRect(p,m,x,_),r.fillStyle="#20262e",r.fillRect(p+14,m+44,x-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(p+40,m+44),r.lineTo(p+80,m+44),r.lineTo(p+40,m+140),r.lineTo(p+14,m+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(p+x/2-4,m+44,8,96),r.fillStyle="#111",r.fillRect(p+50,m+12,x-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26),r.fillStyle="#1f9a50",r.fillRect(p,m+150,x,18),r.fillStyle="#e8892b",r.fillRect(p,m+170,x,7);for(let f of[p+40,p+x-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(f,m+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(f+(f<p+x/2?28:-28),m+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(p,m+_-30,x,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",p+x/2,m+220),o.fillStyle="#111",o.fillRect(p,m,x,_),o.fillStyle="#ff9a2a",o.font=`800 18px ${l}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26);for(let f of[p+40,p+x-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(f,m+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let M=f=>{let d=new ii(f);return d.colorSpace=Gt,d.anisotropy=4,d},c=(f,d,g,v)=>({u0:f/1024,u1:(f+g)/1024,v0:1-(d+v)/512,v1:1-d/512});return{map:M(n),em:M(s),side:c(0,0,1024,a),sideR:{...c(0,0,1024,a),flip:!0},front:c(p,m,x,_),plain:c(342,202,28,28)}}function l1(){let i=m3(),e=hd(new wn({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Jr})),t=new en({uv:!0}),n=[1,1,1],s=be("#9aa1a9"),r=be("#3b4047"),o=be("#2a2d33"),l=19.5,a=.6,u=3,h=1.45,p=.95,m=4,x=4,_=.3,M=be("#33363b"),c={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},f=(y,S,E,C,P,L,R,I=!1)=>t.box(y,S,E,C,P,L,R,c,I?{noBottom:!0}:null),d=(y,S,E,C,P,L)=>{let I=E-P/2,D=E+P/2;for(let F=0;F<12;F++){let N=F/12*Math.PI*2,U=(F+1)/12*Math.PI*2,W=y+Math.cos(N)*C,k=S+Math.sin(N)*C,X=y+Math.cos(U)*C,ie=S+Math.sin(U)*C;t.quad([W,k,I],[X,ie,I],[X,ie,D],[W,k,D],L,i.plain),t.quad([y,S,D],[W,k,D],[X,ie,D],[X,ie,D],L,i.plain),t.quad([y,S,I],[X,ie,I],[W,k,I],[W,k,I],L,i.plain)}},g=u*l+(u-1)*a;for(let y=0;y<u;y++){let S=-g/2+l/2+y*(l+a),E=S-l/2,C=S+l/2;t.quad([E,p,h],[C,p,h],[C,m,h],[E,m,h],n,i.side),t.quad([C,p,-h],[E,p,-h],[E,m,-h],[C,m,-h],n,i.side);let P=y===u-1,L=y===0;t.quad([C,p,h],[C,p,-h],[C,m,-h],[C,m,h],P?n:be("#c9ced4"),P?i.front:i.plain),t.quad([E,p,-h],[E,p,h],[E,m,h],[E,m,-h],L?n:be("#c9ced4"),L?i.front:i.plain);for(let R=0;R<x;R++)for(let I of[1,-1]){let D=R/x*Math.PI/2,F=(R+1)/x*Math.PI/2,N=I*h*Math.cos(D),U=m+_*Math.sin(D),W=I*h*Math.cos(F),k=m+_*Math.sin(F);t.quad([E,U,N],[C,U,N],[C,k,W],[E,k,W],s,i.plain);for(let X of[E,C]){let ie=[[X,m,0],[X,U,N],[X,k,W]];t.quad(ie[0],ie[1],ie[2],ie[2],s,i.plain),t.quad(ie[0],ie[2],ie[1],ie[1],s,i.plain)}}for(let R of[1,-1])f(E,m-.02,R*h-.04,C,m+.05,R*h+.04,r);for(let R of[S-5.5,S+5.5])f(R-1.3,m+.2,-.8,R+1.3,m+.62,.8,be("#c4c9cf"),!0);f(E+.3,.82,-h+.1,C-.3,p,h-.1,o);for(let[R,I,D,F]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])f(S+R-I/2,.82-D,-1.15+F*.2,S+R+I/2,.82,1.15+F*.2,F>0?o:r);for(let R of[S-7,S+7]){for(let I of[1,-1]){f(R-1.35,.32,I*.86,R+1.35,.56,I*1.02,r);for(let D of[-1.05,1.05])f(R+D-.17,.3,I*.84,R+D+.17,.58,I*1.06,o)}f(R-.35,.5,-1,R+.35,.8,1,r);for(let I of[-1.05,1.05])for(let D of[1,-1])d(R+I,.43,D*.6,.43,.13,M)}if(y<u-1&&f(C,p+.15,-.95,C+a,m-.1,.95,be("#3a3e44")),y===0){let R=S-3,I=m+.7;t.box(R-.6,m+.26,-.6,R+.6,m+.42,.6,r),t.rod([R-.5,m+.42,0],[R,I+.9,0],.03,.03,4,r),t.rod([R+.5,m+.42,0],[R,I+.9,0],.03,.03,4,r),t.rod([R,I+.9,-.85],[R,I+.9,.85],.03,.03,4,r)}}let v=new pt(t.build(),e);v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1;let b=new pn;b.add(v),b.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:g},w={};return{group:b,st:T,start(y,S,E=16){Object.assign(T,{active:!0,sx:y,dir:S,speed:E,u:-S*290,ds:S>0?-2:2,cleared:!1}),b.visible=!0},update(y,S,E,C,P){if(!T.active)return;T.u+=T.dir*T.speed*y;let L=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?L>P+1:L<-P-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,b.visible=!1;return}S.at(T.sx,w),b.position.set(w.x+w.fx*T.ds+w.rx*T.u-E.x,w.y+.34,w.z+w.fz*T.ds+w.rz*T.u-E.z),b.rotation.y=w.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+C*1.1}}}var g3='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Xs=2048,v3=4096;function Oh(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var f1=Oh(256,256);{let i=f1.getContext("2d"),e=i.createImageData(256,256),t=Tt(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var kh=class{constructor(e=v3,t=0,n={}){let s=this.H=e;this.cA=Oh(Xs,s),this.cE=Oh(Xs/2,s/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Xs/2,s/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Xs,s),this.x=0,this.y=0,this.rowH=0,this.cells=n,this.uOff=t,this.grain=this.a.createPattern(f1,"repeat")}add(e,t,n,s){if(this.x+t+4>Xs&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.H)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let h of[this.a,this.e])h.save(),h===this.e&&h.scale(.5,.5),h.translate(o.x,o.y),h.beginPath(),h.rect(0,0,t,n),h.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5,a=this.H,u=this.uOff;return this.cells[e]={u0:u+(o.x+l)/Xs,u1:u+(o.x+t-l)/Xs,v0:1-(o.y+n-l)/a,v1:1-(o.y+l)/a,w:t,h:n,px:o.x,py:o.y},this.cells[e]}paintCell(e,t,n,s,r,o,l){let a=this.cells[e];!a||a.u0>1.5!=this.uOff>1.5||(this.a.drawImage(t,n,s,r,o,a.px,a.py,a.w,a.h),l>=0?this.e.drawImage(t,n,l,r,o,a.px/2,a.py/2,a.w/2,a.h/2):(this.e.fillStyle="#000",this.e.fillRect(a.px/2,a.py/2,a.w/2,a.h/2)))}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new ii(n);return s.colorSpace=Gt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=zn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function cn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Rn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,a])=>o.addColorStop(l,a)),i.fillStyle=o,i.fillRect(e,t,n,s)}function na(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Rn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}cn(i,e,t,n,.13)}function Gs(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function Y(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function ia(i,e,t,n,s,r,o="#d9dde2",l="rgba(40,45,60,0.55)"){Y(i,e-r,t-r,n+2*r,s+2*r,o),Y(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function qs(i,e,t,n,s,r,o=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),a=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";l.addColorStop(0,a),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function c1(i,e,t,n,s,r="#efe6d2"){Y(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Rn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function zh(i,e,t=800){i.font=`${t} ${e}px ${g3}`}function Ct(i,e,t,n,s,r,o,l=800,a=null){zh(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,zh(i,u,l);i.textAlign="center",i.textBaseline="middle",a&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=a,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function Qr(i,e,t,n,s,r,o,l=800,a=null){let u=[...e],h=u.length,p=Math.min(r*1.05,(s-n)/h),m=Math.min(r,p*.95);zh(i,m,l),i.textAlign="center",i.textBaseline="middle",u.forEach((x,_)=>{let M=n+(s-n-p*h)/2+p*(_+.5);a&&(i.lineWidth=Math.max(2,m*.12),i.strokeStyle=a,i.strokeText(x,t,M)),i.fillStyle=o,i.fillText(x,t,M)})}function jr(i,e,t,n,s,r,o,l=!0){if(Y(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Rn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let a=e+n*.2*o();a<e+n-4;a+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-a),h=s*(.12+o()*.25);i.fillRect(a,t+s-h,u,h)}}i.restore()}function x3(i,e,t,n,s,r,o){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",Y(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,Y(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Rn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var u1=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Bh=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],h1=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],y3=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function d1(){let i=new kh,e=Tt(2024),t=240,n=(c,f,d,g,v,b,T=!1)=>{na(c,i,d,g,"#ece8e0",0);let w=Tt(b*31+(v?7:0)+5);if(b===0){let y=d*.14,S=g*.22,E=d*.72,C=g*.5;ia(c,y,S,E,C,5),qs(c,y,S,E/2,C,w),qs(c,y+E/2,S,E/2,C,w);let P=w()<.8?E*(.18+w()*.25):0;P&&c1(c,y+2,S+2,P,C-4,w()<.5?"#efe6d2":"#d9e4ea"),Y(c,y+E/2-2,S,4,C,"#cfd4da"),Y(c,y-8,S+C+5,E+16,6,"#d8d8d4"),Gs(c,y-4,S+C+11,8,60),Gs(c,y+E-4,S+C+11,8,60),v&&(jr(f,y,S,E,C,T?"#e6eeff":"#ffcf8f",w),P&&Y(f,y+2,S+2,P,C-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),Y(f,y+E/2-2,S,4,C,"#000"))}else if(b===1){for(let y of[.12,.56]){let S=d*y,E=g*.28,C=d*.3,P=g*.36;ia(c,S,E,C,P,4),qs(c,S,E,C,P,w,1),c.fillStyle="rgba(255,255,255,0.35)",c.fillRect(S,E,C,P*.45),Gs(c,S,E+P+6,C,40,.1),v&&w()<.8&&jr(f,S,E,C,P,w()<.5?"#ffd9a0":"#e8f0ff",w)}c.fillStyle="#c9c9c4",c.beginPath(),c.arc(d*.88,g*.2,9,0,7),c.fill()}else if(b===2){let y=d*.1,S=g*.12,E=d*.8,C=g*.84;ia(c,y,S,E,C,4),qs(c,y,S,E/2,C,w),qs(c,y+E/2,S,E/2,C,w);let P=E*(.2+w()*.3);c1(c,y+2,S+2,P,C-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),Y(c,y+E/2-2,S,4,C,"#cfd4da"),v&&(jr(f,y,S,E,C,T?"#e6eeff":"#ffcb85",w),Y(f,y+2,S+2,P,C-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),Y(f,y+E/2-2,S,4,C,"#000"))}else if(b===3){na(c,i,d,g,"#dfe3e6",0);let y=g*.25,S=g*.55;qs(c,0,y,d,S,w,1);for(let E=0;E<=d;E+=d/4)Y(c,E-2,y,4,S,"#8d98a6");if(Y(c,0,y-4,d,4,"#8d98a6"),Y(c,0,y+S,d,5,"#7d8796"),v)for(let E=0;E<4;E++)w()<.7&&jr(f,E*d/4+2,y,d/4-4,S,w()<.6?"#f2f6ff":"#ffe2b0",w)}else if(b===4){c.fillStyle="#6b4a35",c.fillRect(0,0,d,g);for(let P=0;P<g;P+=12)Y(c,0,P,d,2,"rgba(30,18,10,0.35)"),Y(c,0,P+2,d,1,"rgba(255,220,180,0.06)");cn(c,i,d,g,.15);let y=d*.18,S=g*.25,E=d*.64,C=g*.45;Y(c,y-6,S-6,E+12,C+12,"#4a3020"),Y(c,y,S,E,C,"#efe4c8"),c.fillStyle="#5a3a26";for(let P=1;P<6;P++)c.fillRect(y+P*E/6-1.5,S,3,C);for(let P=1;P<3;P++)c.fillRect(y,S+P*C/3-1.5,E,3);if(v){jr(f,y,S,E,C,"#ffc070",w,!1),f.fillStyle="#000";for(let P=1;P<6;P++)f.fillRect(y+P*E/6-1.5,S,3,C);for(let P=1;P<3;P++)f.fillRect(y,S+P*C/3-1.5,E,3)}}else if(b===5){Y(c,d*.08,0,7,g,"#bdbdb6"),Y(c,d*.08+5,0,2,g,"rgba(0,0,0,0.2)");let y=d*.55,S=g*.3,E=d*.22,C=g*.24;ia(c,y,S,E,C,3),Y(c,y,S,E,C,"#d6dfe4"),c.fillStyle="rgba(255,255,255,0.4)",c.fillRect(y,S,E,C/2),Gs(c,y,S+C+4,E,50,.12),Y(c,d*.22,g*.55,26,34,"#cfcfca"),Y(c,d*.22+4,g*.55+6,18,12,"#9aa2a8"),v&&jr(f,y,S,E,C,T?"#eef2ff":"#fff0d8",w,!1)}else if(b===6){let y=d*.4,S=g*.35,E=d*.2,C=g*.28;ia(c,y,S,E,C,3),qs(c,y,S,E,C,w,1),Gs(c,y,S+C+4,E,70,.14),v&&jr(f,y,S,E,C,T?"#e8efff":"#ffd9a0",w)}};for(let c=0;c<7;c++)i.add("win"+c,t,t,(f,d,g,v)=>n(f,d,g,v,!1,c)),i.add("win"+c+"L",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c));for(let c of[0,2,5,6])i.add("win"+c+"C",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c,!0));i.add("plain",t,t,(c,f,d,g)=>{na(c,i,d,g,"#ece8e0"),Gs(c,d*.3,0,12,g*.6,.06)}),i.add("concrete",t,t,(c,f,d,g)=>{na(c,i,d,g,"#d9d7d0",60);for(let v=0;v<6;v++)Gs(c,v*41%d,0,10,g*.5,.07)});let s=288,r=(c,f,d,g,v,b,T)=>{let w=(S,E,C,P,L,R=0)=>{c.fillStyle=L,c.beginPath(),c.ellipse(S,E,C,P,R,0,7),c.fill()},y=S=>S[Math.floor(b()*S.length)];if(T==="bakery"){Y(c,f,d,g,v,"#d9b98a"),Rn(c,f,d,g,v,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let S=d+v*.28;S<d+v*.72;S+=v*.2){Y(c,f,S,g,5,"#8a5a32");for(let E=f+8;E<f+g-8;E+=15+b()*10){let C=7+b()*6,P=4+b()*3;w(E,S-P,C,P,y(["#c98a3e","#b4732e","#d9a256","#a4632a"])),w(E-C*.2,S-P*1.4,C*.5,P*.35,"rgba(255,230,180,0.5)")}}Y(c,f+4,d+v*.8,g-8,v*.2,"#efe7d8"),Y(c,f+4,d+v*.8,g-8,3,"#9a9a96");for(let S=f+14;S<f+g-10;S+=18)w(S,d+v*.9,6,4,y(["#e8b35a","#c06a3a","#f2d29a"]));Y(c,f+g-64,d+10,52,22,"#7a3e1e"),Ct(c,"\u713C\u304D\u305F\u3066",f+g-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){Y(c,f,d,g,v,"#6f5a46");for(let S=d+6;S<d+v*.72;S+=v*.17){Y(c,f,S+v*.15,g,4,"#4a3828");for(let E=f+3;E<f+g-4;){let C=3+b()*4,P=v*(.1+b()*.045);Y(c,E,S+v*.15-P,C,P,y(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),E+=C+(b()<.1?4:.6)}}Y(c,f+4,d+v*.76,g-8,v*.24,"#8a7560");for(let S=f+8;S<f+g-22;S+=24)Y(c,S,d+v*.79,20,28,y(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),Y(c,S+3,d+v*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){Y(c,f,d,g,v,"#e8e2d2"),Rn(c,f,d,g,v,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let S=0;S<7;S++){let E=f+8+b()*(g-16),C=v*(.15+b()*.25);for(let P=0;P<C;P+=3.5)w(E+Math.sin(P*.25+S)*4+(b()-.5)*6,d+4+P,3.4,1.8,y(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),b()*3)}for(let S=0;S<3;S++){let E=d+v*(.5+S*.17);Y(c,f,E+14,g,4,"#9a8a76");for(let C=f+10+S*6;C<f+g-8;C+=19){let P=y(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let L=0;L<6;L++){c.strokeStyle="#4a7a3a",c.lineWidth=1.2,c.beginPath();let R=C+(b()-.5)*14;c.moveTo(C,E+10),c.lineTo(R,E-6-b()*8),c.stroke(),w(R,E-8-b()*8,3.2,3,P)}Y(c,C-6,E+4,12,11,y(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){Y(c,f,d,g,v,"#efece6"),Rn(c,f,d,g,v,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),Y(c,f+6,d+v*.18,g-60,3,"#7a7a7a");for(let E=f+12;E<f+g-66;E+=13+b()*5){c.fillStyle=y(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let C=d+v*.18+3,P=v*(.3+b()*.2);c.beginPath(),c.moveTo(E-5,C),c.lineTo(E+5,C),c.lineTo(E+8,C+P),c.lineTo(E-8,C+P),c.closePath(),c.fill()}let S=f+g-32;w(S,d+v*.16,7,8,"#d8cfc4"),c.fillStyle=y(["#c84a5a","#4a6a9a","#e8d8b8"]),c.beginPath(),c.moveTo(S-14,d+v*.24),c.lineTo(S+14,d+v*.24),c.lineTo(S+18,d+v*.66),c.lineTo(S-18,d+v*.66),c.closePath(),c.fill(),Y(c,S-2,d+v*.66,4,v*.24,"#8a8a8a"),Y(c,f+8,d+v*.74,g*.55,6,"#8a6a4a");for(let E=f+12;E<f+g*.55;E+=14)Y(c,E,d+v*.74-8,11,8,y(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let S=7;for(let E=d+v*.25;E<d+v;E+=v*.22)for(let C=f+3;C<f+g-6;C+=6+b()*8)e(),S=Math.imul(S,31)+Math.floor(b()*997+b()*61+b()*7)|0;T==="cafe"?h(c,f,d,g,v,Tt(S>>>0)):u(c,f,d,g,v,Tt(S>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],l=(c,f,d,g,v,b,T="bbccutp")=>{let w=f+1+b()*3;for(;w<d-4;){let y=T[Math.floor(b()*T.length)],S=o[Math.floor(b()*o.length)],E=b()<.5?"#f8f6f0":o[Math.floor(b()*o.length)],C={b:8+b()*6,c:6+b()*2,u:9+b()*2,t:5+b()*2,p:12+b()*5}[y],P=Math.min(v,{b:14+b()*12,c:11+b()*3,u:10+b()*3,t:18+b()*9,p:14+b()*8}[y]),L=2+Math.floor(b()*5);for(let R=0;R<L&&w+C<d-1;R++,w+=C+.6){let I=g-P;y==="t"?(Y(c,w,I+P*.3,C,P*.7,S),Y(c,w+C*.3,I+P*.1,C*.4,P*.22,S),Y(c,w+C*.28,I,C*.44,P*.11,E==="#f8f6f0"?"#e8e8e4":"#d83a2a"),Y(c,w,I+P*.5,C,P*.22,E)):y==="c"?(Y(c,w,I,C,P,S),Y(c,w,I,C,1.5,"#d8dce0"),Y(c,w,I+P*.35,C,P*.3,E)):y==="u"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,I+2),c.lineTo(w+C,I+2),c.lineTo(w+C-1.2,g),c.lineTo(w+1.2,g),c.fill(),Y(c,w-.4,I,C+.8,2.2,"#f2efe6"),Y(c,w+1,I+P*.45,C-2,P*.25,E)):y==="p"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,g),c.lineTo(w,I+3),c.quadraticCurveTo(w+C/2,I-1.5,w+C,I+3),c.lineTo(w+C,g),c.fill(),Y(c,w+1.5,I+P*.35,C-3,P*.35,E),Y(c,w,I+2,C,1,"rgba(0,0,0,0.18)")):(Y(c,w,I,C,P,S),Y(c,w+1.5,I+P*.3,C-3,P*.4,E)),Y(c,w,I+1,1,P-1,"rgba(255,255,255,0.28)"),Y(c,w+C-1.3,I+1,1.3,P-1,"rgba(0,0,0,0.22)")}w+=1.5+b()*3}},a=(c,f,d,g,v)=>{Rn(c,f,g+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),Y(c,f,g,d,4,"#d3d6da"),Y(c,f,g+3.2,d,.8,"rgba(40,40,50,0.45)");for(let b=f+4+v()*10;b<f+d-6;b+=14+v()*16)Y(c,b,g+.6,5,2.6,v()<.25?"#f2d23a":v()<.2?"#e84a3a":"#ffffff")},u=(c,f,d,g,v,b,T)=>{Y(c,f,d,g,v,T?"#f3f1ea":"#ece5d8"),Y(c,f,d,g,v*.13,T?"#f6f6f2":"#efebe2");for(let E of[.035,.085])Y(c,f,d+v*E,g,2.4,"#ffffff"),Rn(c,f,d+v*E+2.4,g,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Rn(c,f,d+v*.13,g,v*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let E=0,C=f+18+b()*30;E<2&&C<f+g-40;E++,C+=90+b()*40)Y(c,C+13,d+v*.13,1,6,"#888"),Y(c,C,d+v*.13+6,28,9,o[Math.floor(b()*9)]),Y(c,C+4,d+v*.13+9.5,20,2,"rgba(255,255,255,0.8)");let y=d+v*.25,S=v*.165;Y(c,f,y-4,g,4,"#c9ccd0");for(let E=0;E<4;E++){let C=y+S*(E+1);Rn(c,f,C-S,g,S,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),l(c,f,f+g,C,S-6,b),a(c,f,g,C,b)}Y(c,f,y+S*4+4,g,d+v-y-S*4-4,"#5c6068"),Y(c,f,y+S*4+4,g,1.5,"#8a8e96");for(let E=f+2+b()*20;E<f+g;E+=70+b()*12)Y(c,E,y-4,3,S*4+8,"#b4b8be"),Y(c,E+2.2,y-4,.8,S*4+8,"rgba(0,0,0,0.3)");if(T){let E=d+v*.7;Y(c,f,E+26,g,d+v-E-26,"#7a7e86"),Y(c,f,E+26,g,2,"#a8acb2");for(let C=f+2;C<f+g-14;C+=15.5){let P=o[Math.floor(b()*o.length)],L=b()*2;Y(c,C,E+L,14,26-L,P),Y(c,C,E+L,14,5,b()<.6?"#ffffff":"#e8343a"),Y(c,C+2,E+L+8,10,10,b()<.5?"#f2c8a8":o[Math.floor(b()*o.length)]),Y(c,C+13,E+L,1,26-L,"rgba(0,0,0,0.25)")}}},h=(c,f,d,g,v,b)=>{Y(c,f,d,g,v,"#b88a5e"),Rn(c,f,d,g,v,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let w=f;w<f+g;w+=9)Y(c,w,d+v*.55,1,v*.45,"rgba(60,35,20,0.25)");let T=d+v*.3;for(let w=0;w<2;w++){let y=T+w*22;Y(c,f+8,y,g*.55,3,"#6a4428"),l(c,f+10,f+g*.55+6,y,14,b,"ctu")}Y(c,f+g*.64,d+v*.22,g*.28,v*.26,"#2e3a32"),Y(c,f+g*.64,d+v*.22,g*.28,2,"#6a4428");for(let w=0;w<5;w++)Y(c,f+g*.67,d+v*(.27+w*.04),g*(.12+b()*.1),1.6,"rgba(240,240,230,0.75)");Y(c,f+4,d+v*.56,g-8,6,"#5a3820"),Y(c,f+4,d+v*.56+6,g-8,v*.08,"#7a5232"),Y(c,f+g*.3,d+v*.47,18,v*.09,"#c8ccd0"),Y(c,f+g*.3+3,d+v*.47+3,12,5,"#3a3a40");for(let w=f+30+b()*20;w<f+g-20;w+=70+b()*20)Y(c,w,d,1,v*.14,"#3a2a1e"),c.fillStyle="#2f3a36",c.beginPath(),c.moveTo(w-9,d+v*.2),c.quadraticCurveTo(w+.5,d+v*.12,w+10,d+v*.2),c.fill(),c.fillStyle="rgba(255,214,150,0.9)",c.beginPath(),c.ellipse(w+.5,d+v*.2,7,2,0,0,7),c.fill();for(let w=f+26+b()*16;w<f+g-26;w+=78+b()*20){Y(c,w-16,d+v*.74,32,4,"#4a2e1c"),Y(c,w-1.5,d+v*.74+4,3,v*.2,"#2e2420"),Y(c,w-8,d+v*.94,16,2,"#2e2420");for(let y of[-24,24])Y(c,w+y-6,d+v*.8,12,3,"#3a2618"),Y(c,w+y+(y<0?-6:4),d+v*.66,2,v*.17,"#3a2618"),Y(c,w+y-5,d+v*.83,1.6,v*.13,"#3a2618"),Y(c,w+y+3.4,d+v*.83,1.6,v*.13,"#3a2618");c.fillStyle="#f4f0e8",c.beginPath(),c.ellipse(w-6,d+v*.74-1.5,3,1.5,0,0,7),c.fill()}},p=(c,f,d,g,v,b,T="")=>{let w=Tt(b);if(na(c,i,d,g,"#e6e2da"),v==="glass"||v==="door"||v==="konbini"||v==="cafe"){let S=g*.22,E=d-12,C=g*.78-4;Y(c,6,S,E,C,v==="konbini"?"#f6f4ea":v==="cafe"?"#7a5a40":"#8a7a68"),r(c,6,S,E,C,w,T||v),v==="konbini"&&Y(c,6,S+4,E,5,"#ffffff"),v==="door"&&(Y(c,d/2-30,S+18,60,24,"#fff"),Ct(c,"\u55B6\u696D\u4E2D",d/2,S+30,54,18,"#c82828")),v==="glass"&&!T&&w()<.7&&(Y(c,16,S+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Ct(c,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,S+44,40,16,"#c02020")),x3(c,f,6,S,E,C,v==="konbini"?"#e4eef8":v==="cafe"?"#f0a868":"#f2d2a6"),c.save(),c.globalAlpha=.35,qs(c,6,S,E,C,w),c.restore(),Y(c,6,S,E,4,"#4a4e57"),Y(f,6,S,E,4,"#000"),v==="door"&&(Y(c,d/2-2,S,4,C,"#4a4e57"),Y(f,d/2-2,S,4,C,"#000"),Y(c,d/2-14,S+C*.45,3,40,"#c0c4c8"),Y(c,d/2+11,S+C*.45,3,40,"#c0c4c8")),v==="cafe"&&(Y(c,d*.62,g-70,46,62,"#2c3a30"),Y(f,d*.62,g-70,46,62,"#000"),Ct(c,"\u30E9\u30F3\u30C1",d*.62+23,g-50,40,13,"#fff",700))}else if(v==="shutter"){let S=g*.2,E=d-12,C=g*.8;Y(c,6,S,E,C,"#b8bcc0");for(let P=S;P<S+C;P+=7)Y(c,6,P,E,2,"rgba(60,64,72,0.35)"),Y(c,6,P+2,E,1,"rgba(255,255,255,0.35)");Y(c,6,S,E,10,"#8f949a"),cn(c,i,d,g,.12),w()<.5&&(Y(c,d/2-40,S+C*.35,80,26,"#fff"),Ct(c,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,S+C*.35+13,74,16,"#333",700))}else if(v==="noren"){Y(c,0,0,d,g,"#5b3c28");for(let L=0;L<d;L+=10)Y(c,L,g*.2,3,g*.8,"rgba(25,15,8,0.6)");cn(c,i,d,g,.15);let y=d*.12,S=g*.24,E=d*.76,C=g*.34,P=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);Y(c,y,S,E,C,P);for(let L=1;L<3;L++)Y(c,y+E*L/3-1,S+C*.25,2,C*.75,"rgba(255,255,255,0.25)");Ct(c,e.pick(y3),d/2,S+C*.55,E*.9,46,"#f5f0e6",800),Y(c,y,S,E,6,"#3a2a1c"),f.fillStyle="#ffae5c",f.fillRect(y,S+C,E,g-S-C),f.fillStyle="rgba(255,170,90,0.6)",f.fillRect(y,S,E,C),c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d*.9,g*.36,13,19,0,0,7),c.fill(),Ct(c,"\u9152",d*.9,g*.36,16,14,"#fff"),f.fillStyle="#ff6a3a",f.beginPath(),f.ellipse(d*.9,g*.36,13,19,0,0,7),f.fill()}else if(v==="house"){let y=d*.18,S=g*.3,E=d*.34,C=g*.7;Y(c,y-6,S-6,E+12,C+6,"#9a9a96"),Y(c,y,S,E,C,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),Y(c,y+E-14,S+C*.5,4,22,"#d8d0c0"),Y(c,y+6,S+10,E-12,C*.25,"rgba(255,255,255,0.18)"),Y(c,d*.62,g*.48,30,22,"#cfcfca"),Y(c,d*.62+6,g*.48+5,18,4,"#555");let P=d*.6,L=g*.22,R=d*.3,I=g*.2;ia(c,P,L,R,I,3),qs(c,P,L,R,I,w,1);for(let D=0;D<3;D++)c.fillStyle="#7b5a43",c.fillRect(d*.6+D*22,g-26,16,18),c.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),c.beginPath(),c.arc(d*.6+D*22+8,g-32,11,0,7),c.fill();f.fillStyle="#ffd08a",f.beginPath(),f.arc(y+E+14,S+8,6,0,7),f.fill(),w()<.6&&(f.fillStyle="#ffcf8f",f.fillRect(P,L,R,I))}else if(v==="garage"){let S=g*.25,E=d-16,C=g*.75;Y(c,8,S,E,C,"#efefec");for(let P=S;P<S+C;P+=9)Y(c,8,P,E,1.5,"rgba(80,80,90,0.25)");cn(c,i,d,g,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((c,f)=>{i.add("shop_"+c,t,s,(d,g,v,b)=>p(d,g,v,b,c,100+f)),(c==="glass"||c==="noren"||c==="house")&&i.add("shop_"+c+"2",t,s,(d,g,v,b)=>p(d,g,v,b,c,200+f)),c==="glass"&&["bakery","books","florist","clothes"].forEach((d,g)=>i.add("shop_glass"+(g+3),t,s,(v,b,T,w)=>p(v,b,T,w,"glass",300+g,d)))});for(let c=0;c<14;c++)i.add("hs"+c,512,76,(f,d,g,v)=>{let[b,T]=Bh[c%Bh.length],w=u1[c*7%u1.length];Y(f,0,0,g,v,b),Y(f,0,0,g,5,"rgba(255,255,255,0.35)"),Y(f,0,v-6,g,6,"rgba(0,0,0,0.18)"),c%3===0&&(Y(f,12,12,v-24,v-24,T),Ct(f,w[0],12+(v-24)/2,v/2,v-30,34,b)),Ct(f,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T,900),cn(f,i,g,v,.08),d.fillStyle=b==="#fff"||b==="#f5efe0"?"#d9d6cc":b,d.fillRect(0,0,g,v),d.globalAlpha=.9,Ct(d,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[c,f,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+c,512,76,(g,v,b,T)=>{Y(g,0,0,b,T,f),Y(g,0,0,b,5,"rgba(255,255,255,0.35)"),Y(g,0,T-6,b,6,"rgba(0,0,0,0.18)"),Ct(g,c,b/2,T/2+2,b*.7,50,d,900),cn(g,i,b,T,.08),v.fillStyle=f,v.fillRect(0,0,b,T),v.globalAlpha=.9,Ct(v,c,b/2,T/2+2,b*.7,50,d,900),v.globalAlpha=1});let m=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],x=(c,f,d,g,v,b)=>{c.beginPath(),c.moveTo(f+b,d),c.arcTo(f+g,d,f+g,d+v,b),c.arcTo(f+g,d+v,f,d+v,b),c.arcTo(f,d+v,f,d,b),c.arcTo(f,d,f+g,d,b),c.closePath()};for(let c=0;c<10;c++)i.add("vs"+c,72,288,(f,d,g,v)=>{let b=h1[c%h1.length],T=m[(c*5+2)%m.length],w=c%10===3||c%10===6||c%10===8,[y,S]=Bh[(c*3+1)%Bh.length],E=w?y==="#fff"||y==="#f5efe0"?"#2b2b33":y:"#fbf7ef",C=w?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][c%4];Y(f,0,0,g,v,"#2a2b30"),x(f,3,3,g-6,v-6,8),f.fillStyle=E,f.fill(),Rn(f,3,3,g-6,v-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),f.save(),x(f,8,8,g-16,v-16,6),f.strokeStyle=T,f.globalAlpha=.55,f.lineWidth=7,f.stroke(),f.globalAlpha=1,f.strokeStyle="#fff6fb",f.lineWidth=2.2,f.stroke(),f.restore(),Qr(f,b,g/2,18,v-18,50,C,900),cn(f,i,g,v,.06),Y(d,0,0,g,v,"#000"),x(d,3,3,g-6,v-6,8),d.fillStyle=w?"#3a3a3e":"#4a4844",d.fill(),d.save(),x(d,8,8,g-16,v-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),Qr(d,b,g/2,18,v-18,50,w?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([c,f,d],g)=>i.add("bb"+g,512,240,(v,b,T,w)=>{Y(v,0,0,T,w,"#fbfaf5"),Y(v,0,0,T,w*.62,d),Ct(v,c,T/2,w*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Ct(v,f,T/2,w*.8,T*.85,52,"#333",800),cn(v,i,T,w,.08),Y(b,0,0,T,w,"#555"),b.globalAlpha=.85,Y(b,0,0,T,w*.62,d),Ct(b,c,T/2,w*.32,T*.9,96,"#fff",900),b.globalAlpha=1})),i.add("konbini_band",480,72,(c,f,d,g)=>{Y(c,0,0,d,g,"#fbfbf7"),Y(c,0,g*.62,d,g*.14,"#2a9a4a"),Y(c,0,g*.76,d,g*.12,"#f08a24"),Y(c,0,g*.88,d,g*.12,"#2f6fd8"),Ct(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900),f.fillStyle="#f3f6f0",f.fillRect(0,0,d,g),Ct(f,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900)});for(let c=0;c<3;c++)i.add("vend"+c,128,234,(f,d,g,v)=>{let b=["#d8352a","#2f6fd8","#f4f4f0"][c];Y(f,0,0,g,v,b),Y(f,8,10,g-16,v*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let w=0;w<4;w++)for(let y=0;y<6;y++){let S=14+y*17,E=18+w*30;f.fillStyle=T[(w*6+y+c)%T.length],f.fillRect(S,E,11,20),f.fillStyle="rgba(255,255,255,0.5)",f.fillRect(S+2,E+2,3,14),f.fillStyle="#2a2a2a",f.fillRect(S,E+23,11,3)}Y(f,10,v*.62,g-20,22,"#222"),Y(f,g-34,v*.66,14,22,"#bbb"),Y(f,14,v*.82,g-28,22,"#1b1b1b"),Ct(f,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][c],g/2,v*.62+11,g-28,14,"#fff",700),cn(f,i,g,v,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,g-16,v*.55);for(let w=0;w<4;w++)for(let y=0;y<6;y++)d.fillStyle=T[(w*6+y+c)%T.length],d.fillRect(14+y*17,18+w*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,v*.62,g-20,22)});i.add("ac",128,88,(c,f,d,g)=>{Y(c,0,0,d,g,"#e9e9e4"),Rn(c,0,0,d,g,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),c.fillStyle="#9a9c9e",c.beginPath(),c.arc(d*.4,g*.5,g*.36,0,7),c.fill(),c.strokeStyle="#d6d6d2",c.lineWidth=2;for(let v=6;v<g*.36;v+=6)c.beginPath(),c.arc(d*.4,g*.5,v,0,7),c.stroke();for(let v=12;v<g-10;v+=6)Y(c,d*.78,v,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(c,f,d,g)=>{Y(c,0,0,d,g,"#f2cf3a"),c.strokeStyle="#2f5a2f",c.lineWidth=3,c.strokeRect(3,3,d-6,g-6),Ct(c,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),Ct(c,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.moveTo(2,2),c.lineTo(d-2,2),c.lineTo(d/2,g-2),c.fill(),c.fillStyle="#d8231c",c.beginPath(),c.moveTo(10,7),c.lineTo(d-10,7),c.lineTo(d/2,g-12),c.fill(),Ct(c,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.fillStyle="#1e5bb8",c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.fill(),c.fillStyle="#fff",c.beginPath(),c.moveTo(d/2,22),c.lineTo(d/2+22,50),c.lineTo(d/2+8,50),c.lineTo(d/2+8,88),c.lineTo(d/2-8,88),c.lineTo(d/2-8,50),c.lineTo(d/2-22,50),c.fill()}),i.add("sign_speed",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=12,c.beginPath(),c.arc(d/2,g/2,d/2-9,0,7),c.stroke(),Ct(c,"30",d/2,g/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(c,f,d,g)=>{Y(c,0,0,d,g,"#1d4f9a"),c.strokeStyle="#fff",c.lineWidth=2,c.strokeRect(3,3,d-6,g-6),Qr(c,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,g-10,24,"#fff",700)});for(let c=0;c<4;c++)i.add("poster"+c,64,90,(f,d,g,v)=>{let b=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][c];Y(f,0,0,g,v,b),Y(f,4,4,g-8,v*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][c]),Ct(f,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][c],g/2,v*.25,g-12,18,"#fff",900);for(let T=0;T<4;T++)Y(f,8,v*.58+T*8,g-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let c=0;c<3;c++)i.add("bal"+c,t,88,(f,d,g,v)=>{let b=["#e9e3d6","#dfe6ea","#efe2dc"][c];if(na(f,i,g,v,b),c===1)for(let T=10;T<g-6;T+=g/6)Y(f,T,10,g/6-8,v-20,"rgba(220,235,245,0.9)"),f.fillStyle="rgba(255,255,255,0.45)",f.fillRect(T,10,g/6-8,(v-20)*.4);else{Y(f,0,0,g,7,"rgba(255,255,255,0.4)");for(let T=g/3;T<g;T+=g/3)Y(f,T-1,0,2,v,"rgba(0,0,0,0.08)")}Y(f,0,v-6,g,6,"rgba(0,0,0,0.12)"),Gs(f,g*.3,v-6,10,10,.2)});i.add("kawara",272,256,(c,f,d,g)=>{Y(c,0,0,d,g,"#58617a");for(let v=0;v<g;v+=16)Rn(c,0,v,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let v=-4;v<d;v+=20)Y(c,v,0,2,g,"rgba(0,0,0,0.18)");cn(c,i,d,g,.12)}),i.add("wood",256,256,(c,f,d,g)=>{Y(c,0,0,d,g,"#6d4c37");for(let v=0;v<g;v+=14)Y(c,0,v,d,2,"rgba(25,15,8,0.4)"),Y(c,0,v+2,d,1,"rgba(255,220,180,0.07)");cn(c,i,d,g,.16)}),i.add("block",256,128,(c,f,d,g)=>{Y(c,0,0,d,g,"#c9c7bf");for(let v=0;v<g;v+=32)for(let b=v/32%2?-32:0;b<d;b+=64)c.strokeStyle="rgba(80,80,80,0.35)",c.lineWidth=2,c.strokeRect(b+1,v+1,62,30);for(let v=0;v<d;v+=64)c.fillStyle="rgba(70,70,70,0.25)",c.fillRect(v+20,40,24,16);cn(c,i,d,g,.15),Gs(c,0,0,d,40,.1)}),i.add("lantern",64,96,(c,f,d,g)=>{c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),c.fill();for(let v=16;v<g-12;v+=7)Y(c,4,v,d-8,1.5,"rgba(0,0,0,0.2)");Y(c,d/2-14,2,28,8,"#222"),Y(c,d/2-14,g-10,28,8,"#222"),Ct(c,"\u796D",d/2,g/2,d*.6,28,"#fff",900),f.fillStyle="#ff6a35",f.beginPath(),f.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),f.fill()}),i.add("busstop",96,96,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=8,c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.stroke(),Ct(c,"\u30D0\u30B9\u505C",d/2,g/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,c=>Y(c,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(c,f,d,g)=>{c.save(),c.translate(d/2,g/2),c.rotate(Math.PI/4),c.fillStyle="#1b1b1b",c.fillRect(-41,-41,82,82),c.fillStyle="#f2c230",c.fillRect(-37,-37,74,74),c.restore(),c.fillStyle="#1b1b1b",c.fillRect(d/2-22,g/2-6,44,18),c.fillRect(d/2-16,g/2-16,18,12),c.fillRect(d/2+8,g/2-13,5,7),c.beginPath(),c.arc(d/2-12,g/2+15,5,0,7),c.arc(d/2+12,g/2+15,5,0,7),c.fill(),Ct(c,"\u8E0F\u5207",d/2,g/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((c,f)=>i.add("bridge"+f,64,176,(d,g,v,b)=>{Y(d,0,0,v,b,"#b9b5ab"),cn(d,i,v,b,.2),Y(d,6,6,v-12,b-12,"#a7a398"),Qr(d,c,v/2,14,b-14,34,"#3f3c37",800)})),i.add("signal",240,84,(c,f,d,g)=>{Y(c,0,0,d,g,"#4a4d52"),Y(c,0,0,d,5,"#5c6066"),cn(c,i,d,g,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([v,b])=>{c.fillStyle="#26282c",c.beginPath(),c.arc(b,g/2,33,0,7),c.fill(),c.fillStyle=v,c.beginPath(),c.arc(b,g/2,27,0,7),c.fill()})}),i.add("ped_sig",64,128,(c,f,d,g)=>{Y(c,0,0,d,g,"#3d4045"),c.fillStyle="#5a1814",c.fillRect(8,8,d-16,g/2-12),c.fillStyle="#0d4f44",c.fillRect(8,g/2+4,d-16,g/2-12),c.fillStyle="rgba(255,255,255,0.18)",c.beginPath(),c.arc(d/2,g*.18,6,0,7),c.fill(),c.fillRect(d/2-5,g*.24,10,18)}),i.add("tomare",256,96,(c,f,d,g)=>{c.clearRect(0,0,d,g),c.fillStyle="rgba(244,244,238,0.012)",c.fillRect(0,0,d,g),Ct(c,"\u6B62\u307E\u308C",d/2,g/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((c,f)=>i.add("hodokyo"+f,256,44,(d,g,v,b)=>{Y(d,0,0,v,b,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,v-8,b-8),Ct(d,c,v/2,b/2+1,v*.85,28,"#fff",800)}));let M=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];M.forEach(([c,f,d],g)=>{let v=M[(g+3)%4][0],b=M[(g+1)%4][0];i.add("ekimei"+g,320,124,(T,w,y,S)=>{Y(T,0,0,y,S,"#3a3d42"),Y(T,4,4,y-8,S-8,"#f8f8f3"),Ct(T,f,y/2,20,y*.5,15,"#2b2b2b",700),Ct(T,c,y/2,52,y*.6,40,"#151515",900),Ct(T,d,y/2,80,y*.5,12,"#555",600),Y(T,4,S-30,y-8,26,"#1f9a50"),T.fillStyle="#fff",zh(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+v,12,S-17),T.textAlign="right",T.fillText(b+" \u2192",y-12,S-17),cn(T,i,y,S,.06),Y(w,4,4,y-8,S-8,"#8a8a84")}),i.add("ekiplate"+g,220,48,(T,w,y,S)=>{Y(T,0,0,y,S,"#4b3326"),cn(T,i,y,S,.2),Ct(T,c+"\u99C5",y/2,S/2+1,y*.8,30,"#f3ead8",800)})});for(let c of["l","r"])i.add("chev_"+c,96,120,(f,d,g,v)=>{Y(f,0,0,g,v,"#f4f4ef"),Y(f,4,4,g-8,v-8,"#1e5bb8"),f.fillStyle="#f8f8f4",f.beginPath();let b=c==="r"?1:-1,T=g/2,w=v/2;f.moveTo(T-b*26,w-40),f.lineTo(T+b*22,w),f.lineTo(T-b*26,w+40),f.lineTo(T-b*8,w+40),f.lineTo(T+b*40,w),f.lineTo(T-b*8,w-40),f.closePath(),f.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((c,f)=>i.add("tunnel"+f,360,80,(d,g,v,b)=>{Y(d,0,0,v,b,"#e9e7e0"),Y(d,4,4,v-8,b-8,"#24403b"),cn(d,i,v,b,.08),Ct(d,c,v/2,b*.42,v*.8,38,"#f4f2ea",800),Ct(d,"L = 170 m",v/2,b*.8,v*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(c,f,d,g)=>{Y(c,0,0,d,g,"#f6f6f2"),c.fillStyle="#d42a22";for(let v=-20;v<g;v+=26)c.beginPath(),c.moveTo(4,v),c.lineTo(d/2,v+20),c.lineTo(d-4,v),c.lineTo(d-4,v+11),c.lineTo(d/2,v+31),c.lineTo(4,v+11),c.closePath(),c.fill();c.strokeStyle="#222",c.lineWidth=3,c.strokeRect(1.5,1.5,d-3,g-3)}),i.add("xing_plate",128,48,(c,f,d,g)=>{Y(c,0,0,d,g,"#f6f6f2"),c.strokeStyle="#d8231c",c.lineWidth=4,c.strokeRect(3,3,d-6,g-6),Ct(c,"\u8E0F\u5207\u6CE8\u610F",d/2,g/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),Y(c,0,0,d,7,"#e9ebee"),Y(c,0,6,d,2,"rgba(60,70,80,0.5)"),Y(c,0,g-6,d,6,"#d5d8dc");for(let v=3;v<d;v+=9)Y(c,v,7,3,g-13,"#e2e5e9"),Y(c,v+2,7,1,g-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(c,f,d,g)=>{let v=Tt(4242);Y(c,0,0,d,g,"#3d3f3c");let b=38,T=b/Math.SQRT2;c.save(),c.beginPath(),c.rect(0,22,d,g-22),c.clip();for(let w=-2;w*T<g+b;w++)for(let y=-2;y*b<d+b;y++){let S=y*b+(w%2?b/2:0),E=22+w*T,C=.52+v()*.17,P=Math.min(1,Math.max(0,(E-g*.55)/(g*.4))),L=Math.round(255*C*(1-.38*P)),R=`rgb(${L-4},${L-2},${L-9})`;c.fillStyle=R,c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E+T-3.5),c.lineTo(S-T+3.5,E),c.closePath(),c.fill(),c.fillStyle="rgba(255,255,255,0.12)",c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E),c.closePath(),c.fill(),P>.3&&v()<.5&&(c.fillStyle=`rgba(70,96,52,${.25+.3*v()})`,c.beginPath(),c.arc(S+(v()-.5)*10,E+6,4+v()*6,0,7),c.fill())}c.restore(),Rn(c,0,g*.55,d,g*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),Y(c,0,0,d,22,"#8c8d87"),Y(c,0,18,d,4,"rgba(0,0,0,0.3)"),Y(c,0,0,d,3,"rgba(255,255,255,0.2)"),cn(c,i,d,g,.12)}),i.add("wrail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),Y(c,0,0,d,9,"#6a4a34"),Y(c,0,0,d,2,"rgba(255,225,190,0.25)"),Y(c,0,8,d,2,"rgba(20,10,5,0.45)"),Y(c,0,g-10,d,10,"#5e412e"),Y(c,0,g-10,d,2,"rgba(255,225,190,0.18)");for(let v=4;v<d;v+=12)Y(c,v,9,5,g-19,"#634632"),Y(c,v,9,1.2,g-19,"rgba(255,225,190,0.18)"),Y(c,v+4,9,1,g-19,"rgba(20,10,5,0.4)");cn(c,i,d,g,.15)}),i.add("woodwall",t,t,(c,f,d,g)=>{let v=Tt(5151);Y(c,0,0,d,g,"#5e4130");for(let b=0;b<g;b+=16){let T=v();Y(c,0,b,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),Y(c,0,b,d,2,"rgba(255,220,180,0.12)"),Y(c,0,b+14,d,2,"rgba(15,8,4,0.45)");for(let w=v()*80;w<d;w+=60+v()*90)Y(c,w,b+2,1.5,12,"rgba(15,8,4,0.35)")}Rn(c,0,0,d,g,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),cn(c,i,d,g,.2)}),i}var _3=11,b3=[7,8,9,10,11],M3=[["\u713C\u304D\u9CE5","#fbf6f2","#c8102e","#ff4fd8",1],["\u5C45\u9152\u5C4B","#fdf8ee","#c41e2a",null,1],["\u305D\u3070","#fbf7ef","#1f2a6e","#3fd8ff",1],["\u6D0B\u54C1\u5E97","#2a8a5a","#ffffff",null,0],["\u30B9\u30CA\u30C3\u30AF","#2a1f4a","#ff8ae8","#b45cff",0],["\u30AB\u30E9\u30AA\u30B1","#c8287a","#ffffff","#ffd0f0",0],["\u4E2D\u83EF\u6599\u7406","#1f4fa8","#ffffff",null,0],["\u30E9\u30FC\u30E1\u30F3","#c8241c","#fff6d8","#ffc94a",0],["\u55AB\u8336","#fdf4e4","#6a3a1e","#ffb84a",1],["\u713C\u8089","#fbf6f2","#b8186a","#b45cff",1],["\u713C\u304D\u9CE5","#fbf4fb","#a0128a","#b45cff",1]],Ol=(i,e,t,n,s,r)=>{i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()};function S3(i,e,t,n,s,[r,o,l,a,u]){let h=n/160,p=6*h,m=12*h;Y(e,0,0,n,s,"#2a2b30"),Ol(e,p*.5,p*.5,n-p,s-p,m),e.fillStyle=o,e.fill(),e.save(),Ol(e,p*.5,p*.5,n-p,s-p,m),e.clip();let x=e.createRadialGradient(n/2,s/2,n*.1,n/2,s/2,s*.62);x.addColorStop(0,u?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"),x.addColorStop(1,"rgba(0,0,0,0.14)"),e.fillStyle=x,e.fillRect(0,0,n,s),e.restore();let _=(d,g,v,b)=>{d.save(),Ol(d,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),d.shadowColor=g,d.shadowBlur=v*h,d.strokeStyle=g,d.lineWidth=6*h,d.stroke(),d.shadowBlur=0,d.strokeStyle=b,d.lineWidth=2.2*h,d.stroke(),d.restore()};a?_(e,a,10,"#fff4fb"):(e.save(),Ol(e,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),e.strokeStyle=l,e.globalAlpha=.7,e.lineWidth=3*h,e.stroke(),e.restore());let M=p+20*h,c=s-p-20*h,f=Math.min(n*.62,(c-M)/[...r].length);Qr(e,r,n/2,M,c,f,l,900,u?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.25)"),cn(e,i,n,s,.05),Y(t,0,0,n,s,"#000"),Ol(t,p*.5,p*.5,n-p,s-p,m),t.fillStyle=u?"#b4aea4":a&&o==="#2a1f4a"?"#100c1c":o,t.globalAlpha=u?1:.55,t.fill(),t.globalAlpha=1,a&&_(t,a,12,"#ffffff"),Qr(t,r,n/2,M,c,f,u||o==="#2a1f4a"?l:"#ffffff",900),u&&(t.save(),t.globalCompositeOperation="multiply",Qr(t,r,n/2,M,c,f,"#8a8a8a",900),t.restore())}function w3(i,e,t,n,s){let r=Tt(7331),o=s/1.26/(n/3);e.clearRect(0,0,n,s);let l=11,a=n/l,u=.15*(s/1.26);Y(e,0,0,n,s-u*.5,"#4d5f92");for(let h=0;h<l;h++){let p=h*a,m=e.createLinearGradient(p,0,p+a,0);m.addColorStop(0,"#2c3760"),m.addColorStop(.18,"#5a70a8"),m.addColorStop(.45,"#9fb4e0"),m.addColorStop(.7,"#6a80b8"),m.addColorStop(1,"#33416e"),e.fillStyle=m,e.fillRect(p,0,a,s-u*.5)}for(let h=s-u*.5-52;h>0;h-=52)Rn(e,0,h,n,10,[[0,"rgba(20,26,50,0.45)"],[1,"rgba(20,26,50,0)"]]),Y(e,0,h-2,n,2,"rgba(200,215,240,0.35)");for(let h=0;h<l;h++){let p=(h+.5)*a,m=s-u*.5,x=a*.47;e.save(),e.translate(p,m),e.scale(1,o),e.fillStyle="#26305a",e.beginPath(),e.arc(0,0,x,0,7),e.fill(),e.fillStyle="#5c72aa",e.beginPath(),e.arc(0,0,x*.8,0,7),e.fill(),e.fillStyle="rgba(190,206,240,0.8)",e.beginPath(),e.arc(-x*.2,-x*.25,x*.38,0,7),e.fill(),e.fillStyle="#3a4878",e.beginPath(),e.arc(0,0,x*.22,0,7),e.fill(),e.restore()}e.save(),e.globalCompositeOperation="source-atop",e.globalAlpha=.12,e.fillStyle=i.grain,e.fillRect(0,0,n,s),e.restore();for(let h=0;h<40;h++)e.fillStyle=r()<.5?"rgba(255,255,255,0.08)":"rgba(0,0,20,0.1)",e.fillRect(r()*n,r()*(s-u),a*(.5+r()),3+r()*6)}function T3(i,e,t,n,s,r){Y(e,0,0,n,s,"#1c2b5e"),Y(e,0,0,n,4,"rgba(255,255,255,0.3)"),Y(e,0,s-5,n,5,"rgba(0,0,0,0.25)"),e.strokeStyle="#d9b44a",e.lineWidth=2,e.strokeRect(7,7,n-14,s-14),Ct(e,r,n/2,s/2+2,n*.66,52,"#f6d35a",900,"rgba(60,40,0,0.5)"),cn(e,i,n,s,.06),Y(t,0,0,n,s,"#0a1024"),Ct(t,r,n/2,s/2+2,n*.66,52,"#f0c850",900)}function E3(i,e,t,n,s,r,o){let l=Tt(r),a=n/360;Y(e,0,0,n,s,"#4b3426"),Rn(e,0,0,n,s,[[0,"rgba(255,230,200,0.08)"],[1,"rgba(0,0,0,0.2)"]]);let u=n*.12,h=s*(o?.3:.17),p=n*.76,m=s*(o?.62:.56);for(let x of[e,t])Y(x,u,h,p,m,"#e9b56c"),Rn(x,u,h,p,m,[[0,"rgba(255,240,200,0.55)"],[1,"rgba(110,60,25,0.4)"]]);if(!o)for(let x=h+m*.32;x<h+m-6*a;x+=m*.22){for(let _=u+4*a;_<u+p-10*a;_+=(9+l()*12)*a){let M=(10+l()*12)*a;Y(e,_,x-M,7*a,M,["#c0503a","#3a6ab0","#e8c050","#5a9a50","#d07a9a"][Math.floor(l()*5)])}Y(e,u,x,p,5*a,"#6e4a30")}o&&(Y(e,u,h-s*.12,p,s*.16,"#28356a"),Y(t,u,h-s*.12,p,s*.16,"#000")),Y(e,u+p/2-4*a,h,8*a,m,"#4b3426"),Y(t,u+p/2-4*a,h,8*a,m,"#000"),Y(e,0,h+m,n,6*a,"#3a281d"),cn(e,i,n,s,.15)}function A3(i,e,t,n,s,r,o){let l=n/360;if(Y(e,0,0,n,s,r?"#5e4130":"#ece2cc"),r)for(let m=0;m<s;m+=16*l)Y(e,0,m,n,2*l,"rgba(15,8,4,0.4)");for(let m of[0,n-14*l])Y(e,m,0,14*l,s,"#4b3426");Y(e,0,s-12*l,n,12*l,"#3a281d");let a=n*.2,u=s*.22,h=n*.6,p=s*.46;Y(e,a-8*l,u-8*l,h+16*l,p+16*l,"#4a3020"),Rn(e,a,u,h,p,[[0,"#4f78b8"],[1,"#a6c8ec"]]),Y(e,a+h/2-3*l,u,6*l,p,"#4a3020"),o&&(Y(t,a,u,h,p,"#ffcf8f"),Y(t,a+h/2-3*l,u,6*l,p,"#000")),cn(e,i,n,s,.12)}function R3(i){let e=0,t=0,n=0;for(let[s,r]of i)e+s+4>Xs&&(e=0,t+=n+4,n=0),e+=s+4,n=Math.max(n,r);return t+n}function p1(i,e,t,n){let s=e==="hi"?1:.5,r=[360*s,432*s],o=[360*s,348*s],l=[160*s,384*s],a=[512,76],u=[],h=[],p=[];for(let c=0;c<_3;c++)u.push(["shop_p"+c,r,(f,d,g,v,b)=>E3(f,d,g,v,b,6100+c,c===2||c===7||c===10)]);for(let c of b3)for(let f of[!1,!0])h.push(["win"+c+(f?"L":""),o,(d,g,v,b,T)=>A3(d,g,v,b,T,c===8||c===11,f)]);M3.forEach((c,f)=>p.push(["vsB"+f,l,(d,g,v,b,T)=>S3(d,g,v,b,T,c)]));let m=[...u.slice(0,5),p[0],...u.slice(5,10),p[1],u[10],...h.slice(0,4),p[2],...h.slice(4,9),p[3],h[9],...p.slice(4),["hsN_\u6D0B\u54C1\u5E97",a,(c,f,d,g,v)=>T3(c,f,d,g,v,"\u6D0B\u54C1\u5E97")],["kawaraC",[240,256],w3]],x=R3(m.map(c=>c[1])),_=Math.ceil((x+(n?16+n.rows:4))/4)*4,M=new kh(_,2,i.cells);for(let[c,[f,d],g]of m)M.add(c,f,d,(v,b,T,w)=>g(M,v,b,T,w));if(t){let c=t.img.width,f=t.img.height;for(let d of t.tiles)M.paintCell(d.name,t.img,d.x*c,d.y*f,d.w*c,d.h*f,d.ey<0?-1:d.ey*f)}return M.houses=!!n&&C3(M,n),M}function C3(i,e){let n=i.y+i.rowH+4+12;if(n+e.rows>i.H)return!1;i.x=0,i.y=n,i.rowH=0,i.a.clearRect(0,n-8,Xs,i.H-n+8);try{for(let s of e.tiles)i.add(s.name,s.w,s.h,(r,o,l,a)=>{r.clearRect(0,0,l,a),r.drawImage(e.img,s.x,s.y,s.w,s.h,0,0,l,a),o.drawImage(e.img,s.x,s.ey,s.w,s.h,0,0,l,a)})}catch(s){return console.warn("painted houses:",s.message),!1}return!0}function m1(i){let l=Oh(1024,3328),a=l.getContext("2d"),u=Tt(321),h={},p={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},m=(b,T,w)=>{let y=p[b],S=256,E=b==="pine",C=b==="sakura";a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let P=[[S,S,E?80:92]];for(let R=0;R<(E?10:14);R++){let I=u()*6.28,D=45+u()*120;P.push([S+Math.cos(I)*D,S+Math.sin(I)*D*(E?.42:.9),Math.min(34+u()*52,232-D)])}let L=C?2300:E?2600:2300;for(let R=0;R<L;R++){let I=P[Math.floor(u()*P.length)],D=u()*6.28,F=Math.sqrt(u())*I[2],N=I[0]+Math.cos(D)*F,U=I[1]+Math.sin(D)*F*(E?.45:1),W=F/I[2],k=Math.min(4,Math.max(0,Math.floor(.55+u()*2.7+(W>.82?.5:0))));if(a.fillStyle=y[k],C){let X=7+u()*8;a.beginPath(),a.arc(N,U,X,0,7),a.fill(),u()<.25&&(a.fillStyle=y[4],a.beginPath(),a.arc(N-X*.3,U-X*.3,X*.4,0,7),a.fill())}else if(E)a.save(),a.translate(N,U),a.rotate((u()-.5)*1.2),a.fillRect(-11,-1.6,22,3.2),a.restore();else if(b==="momiji"){let X=8+u()*7;a.save(),a.translate(N,U),a.rotate(u()*6.28),a.beginPath();for(let ie=0;ie<10;ie++){let xe=ie%2?X*.42:X,Te=ie/10*6.2832;a.lineTo(Math.cos(Te)*xe,Math.sin(Te)*xe)}a.closePath(),a.fill(),a.restore()}else if(b==="ginkgo"){let X=9+u()*7;a.save(),a.translate(N,U),a.rotate(u()*6.28),a.beginPath(),a.moveTo(0,0),a.arc(0,0,X,-.95,.95),a.closePath(),a.fill(),a.restore()}else{let X=9+u()*10;a.beginPath(),a.ellipse(N,U,X,X*.55,u()*6.28,0,7),a.fill()}}for(let R=0;R<90;R++){let I=u()*6.28,D=150+u()*85,F=S+Math.cos(I)*D,N=S+Math.sin(I)*D*(E?.45:.92);a.fillStyle=y[1+Math.floor(u()*4)],E?(a.save(),a.translate(F,N),a.rotate((u()-.5)*1.2),a.fillRect(-9,-1.6,18,3.2),a.restore()):(a.beginPath(),a.arc(F,N,C?6+u()*6:7+u()*6,0,7),a.fill())}if(C)for(let R=0;R<14;R++){a.strokeStyle="rgba(150,90,100,0.35)",a.lineWidth=1.5;let I=S+(u()-.5)*300,D=S+60+u()*120;a.beginPath(),a.moveTo(I,D),a.lineTo(I+(u()-.5)*40,D-20-u()*30),a.stroke()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},x=(b,T,w,y)=>{a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let S=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],E=y?120:170;for(let C=0;C<E;C++){let P=256+(u()-.5)*(y?330:380)*Math.sqrt(u()),L=150+u()*(y?230:300)*(1-Math.abs(P-256)/300),R=(P-256)*.35+(u()-.5)*90,I=9+u()*9,D=P+R,F=512-L,N=Math.min(4,Math.floor(u()*2.2+L/380*2.6)),U=a.createLinearGradient(0,512,0,F);U.addColorStop(0,S[0]),U.addColorStop(.6,S[Math.max(1,N-1)]),U.addColorStop(1,S[N]),a.fillStyle=U,a.beginPath(),a.moveTo(P-I/2,512),a.quadraticCurveTo(P-I/2+R*.3,512-L*.55,D,F),a.quadraticCurveTo(P+I/2+R*.3,512-L*.5,P+I/2,512),a.fill()}if(y)for(let C=0;C<16;C++){let P=110+u()*290,L=150+u()*200,R=u();if(a.strokeStyle="#3e7334",a.lineWidth=5,a.beginPath(),a.moveTo(P+(u()-.5)*20,512),a.quadraticCurveTo(P+(u()-.5)*30,(L+512)/2,P,L),a.stroke(),R<.55){a.fillStyle="#fbfaf2";for(let I=0;I<12;I++){let D=I/12*6.283;a.beginPath(),a.ellipse(P+Math.cos(D)*11,L+Math.sin(D)*11,9,4.5,D,0,7),a.fill()}a.fillStyle="#f2c230",a.beginPath(),a.arc(P,L,8,0,7),a.fill()}else if(R<.85)a.fillStyle="#f6c62e",a.beginPath(),a.arc(P,L,15,0,7),a.fill(),a.fillStyle="#ffe27a",a.beginPath(),a.arc(P-3,L-3,8,0,7),a.fill();else{a.fillStyle="#9b7fd6";for(let I=0;I<6;I++)a.beginPath(),a.arc(P+(u()-.5)*16,L+(u()-.5)*16,6,0,7),a.fill()}}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},_=(b,T,w)=>{let y=Tt(97);a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip(),a.lineCap="round";let S=(E,C,P,L,R,I)=>{let D=E+Math.cos(P)*L,F=C+Math.sin(P)*L;if(a.strokeStyle=I>3?"#76605f":I>1?"#6c5458":"#62494f",a.lineWidth=R,a.beginPath(),a.moveTo(E,C),a.lineTo(D,F),a.stroke(),I<=0||R<.7)return;let N=2+(y()<.4?1:0);for(let U=0;U<N;U++){let W=P+(y()-.5)*1.1+(U-(N-1)/2)*.42;W=W*.8+-Math.PI/2*.2,S(D,F,W,L*(.62+y()*.2),R*.68,I-1)}};for(let E=0;E<6;E++)S(256+(y()-.5)*40,500,-Math.PI/2+(y()-.5)*.9,110+y()*50,5.6,6);a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},M=(b,T,w,y,S,E=4,C=!1)=>{let P=Tt(y),L=1024,R=504,I=C?246/504:1;a.save(),a.translate(T,w+8*I),a.beginPath(),a.rect(0,0,512,R*I),a.clip(),a.scale(.5,I);let D=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],F=ie=>{let xe=ie/L;return(.5+.5*Math.min(1,xe/.45)**.8)*(1-.4*Math.max(0,(xe-.9)/.1))},N=(ie,xe,Te,Ee)=>{xe=Math.min(xe,R*.985);let J=ie+Te,Q=R-xe,ye=ie+Te*.25,Ie=R-xe*.62-Math.abs(Te)*.35;a.moveTo(ie-Ee/2,R),a.quadraticCurveTo(ye-Ee*.42,Ie,J,Q),a.quadraticCurveTo(ye+Ee*.42,Ie+Ee*.5,ie+Ee/2,R),a.closePath()},U=[];for(let ie=24+P()*24;ie<L-20;ie+=(ie<L*.25?56:44)+P()*26)U.push(ie);let W=()=>U[Math.floor(P()*U.length)],k=(ie,xe,Te,Ee,J,Q,ye,Ie,K)=>{let ve=D.map(()=>[]);for(let Oe=0;Oe<ie;Oe++){let Ve=W(),Ge=Ve+(P()-.5)*34,Ze=F(Ge),ot=Ge/L,ct=R*(xe+P()*(Te-xe))*Ze*1.12,Me=(P()-.5)*Ee+(Ge-L*.45)*.12;ve[Math.min(8,Ie+Math.floor(P()*(K-Ie+1)+ot*1.2))].push([Ge,ct,Me,J+P()*(Q-J)])}ve.forEach((Oe,Ve)=>{if(!Oe.length)return;let Ge=a.createLinearGradient(0,R,0,R*(1-Te*.8));Ge.addColorStop(0,D[ye]),Ge.addColorStop(.55,D[Math.round((ye+Ve)/2)]),Ge.addColorStop(1,D[Ve]),a.fillStyle=Ge,a.beginPath();for(let Ze of Oe)N(Ze[0],Ze[1],Ze[2],Ze[3]);a.fill()})};k(360,.25,.55,150,12,22,0,2,3),k(240,.4,.78,260,10,17,1,4,6);let X=[];for(let ie=0;ie<E;ie++){let xe=L*(.14+P()*.74),Te=F(xe);X.push({fx:xe,fy:Math.max(56,R-R*(.56+P()*.38)*Te*1.05),kind:P()<S?0:1,sz:.85+P()*.4,tilt:.72+P()*.28,rot:P()*6.28,sx:xe+(P()-.5)*60})}a.lineCap="round";for(let ie of X)a.strokeStyle="#2c6623",a.lineWidth=6,a.beginPath(),a.moveTo(ie.sx,R),a.quadraticCurveTo((ie.sx+ie.fx)/2+(P()-.5)*40,(R+ie.fy)/2,ie.fx,ie.fy+8),a.stroke();k(150,.5,.92,330,9,16,2,6,7);for(let ie of X){if(a.save(),a.translate(ie.fx,ie.fy),a.scale(1,ie.tilt),ie.kind===0){let xe=38*ie.sz;for(let Te=0;Te<16;Te++){let Ee=ie.rot+Te/16*6.283;a.fillStyle=Math.sin(Ee)>.4?"#e2e3ea":"#fdfdf6",a.beginPath(),a.ellipse(Math.cos(Ee)*xe*.56,Math.sin(Ee)*xe*.56,xe*.48,xe*.14,Ee,0,7),a.fill()}a.fillStyle="#f2b51a",a.beginPath(),a.arc(0,0,xe*.28,0,7),a.fill(),a.fillStyle="#fbe060",a.beginPath(),a.arc(-xe*.07,-xe*.07,xe*.14,0,7),a.fill()}else{let xe=40*ie.sz;for(let Te=0;Te<5;Te++){let Ee=ie.rot+Te/5*6.283;a.fillStyle="#fccc1e",a.beginPath(),a.ellipse(Math.cos(Ee)*xe*.52,Math.sin(Ee)*xe*.52,xe*.52,xe*.38,Ee,0,7),a.fill()}for(let Te=0;Te<5;Te++){let Ee=ie.rot+Te/5*6.283;a.fillStyle="#ffe873",a.beginPath(),a.ellipse(Math.cos(Ee)*xe*.62,Math.sin(Ee)*xe*.62-3,xe*.26,xe*.15,Ee,0,7),a.fill()}a.fillStyle="#e39b14",a.beginPath(),a.arc(0,0,xe*.2,0,7),a.fill()}a.restore()}k(40,.42,.85,280,8,14,3,6,7),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512*I)/3328,v1:1-(w+8*I)/3328}},c=(b,T,w,y)=>{let S=Tt(y),E=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let C=[];for(let P=0;P<15;P++){let L=(P+S()*.6)/15,R=40+L*432,I=500-300*Math.sqrt(Math.max(0,1-((R-256)/232)**2));C.push([R,I+60+S()*50,54+S()*46])}for(let P=0;P<2600;P++){let L=C[Math.floor(S()*C.length)],R=S()*6.283,I=Math.sqrt(S())*L[2],D=L[0]+Math.cos(R)*I,F=Math.min(505,L[1]+Math.sin(R)*I*.85),N=Math.sin(R)<-.2?1:0,U=Math.max(0,Math.min(6,Math.floor(S()*2.4+(1-F/512)*3.2+N*1.3+I/L[2]*.8)));a.fillStyle=E[U],a.beginPath(),a.ellipse(D,F,7+S()*7,4+S()*4,S()*6.28,0,7),a.fill()}for(let P=0;P<130;P++){let L=C[Math.floor(S()*C.length)],R=-Math.PI*(.1+S()*.8),I=(.35+S()*.6)*L[2],D=L[0]+Math.cos(R)*I,F=L[1]+Math.sin(R)*I*.85;if(F>470)continue;let N=6+S()*5,U=S()*6.28,W=S()<.12;a.fillStyle=W?"#f3d2dc":"#fbfbf6";for(let k=0;k<5;k++){let X=U+k/5*6.283;a.beginPath(),a.ellipse(D+Math.cos(X)*N*.55,F+Math.sin(X)*N*.5,N*.5,N*.36,X,0,7),a.fill()}a.fillStyle="#d9b628",a.beginPath(),a.arc(D,F,N*.22,0,7),a.fill()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},f=(b,T,w,y)=>{let S=Tt(y),E=1024,C=512;a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,250),a.clip(),a.scale(.5,250/512);let P=["#0c2a12","#143a19","#1f4f23","#2e682f","#46843a","#66a047","#8ebd58","#b6d874"],L=F=>Math.max(0,1-((F-E/2)/(E*.47))**2)**.6,R=(F,N,U,W)=>{let k=F+U,X=C-N,ie=F+U*.3,xe=C-N*.6;a.moveTo(F-W/2,C),a.quadraticCurveTo(ie-W*.5,xe,k,X),a.quadraticCurveTo(ie+W*.5,xe+W*.4,F+W/2,C),a.closePath()},I=(F,N,U,W,k,X,ie)=>{let xe=P.map(()=>[]);for(let Te=0;Te<F;Te++){let Ee=E/2+(S()-.5)*E*.8*Math.sqrt(S()),J=L(Ee),Q=C*.9*J*(N+S()*(U-N)),ye=(Ee-E/2)*.22+(S()-.5)*120,Ie=Math.min(7,X+Math.floor(S()*(ie-X+1)));J>.03&&xe[Ie].push([Ee,Q,ye,W+S()*(k-W)])}xe.forEach((Te,Ee)=>{if(!Te.length)return;let J=a.createLinearGradient(0,C,0,C*.1);J.addColorStop(0,P[Math.max(0,Ee-3)]),J.addColorStop(1,P[Ee]),a.fillStyle=J,a.beginPath();for(let Q of Te)R(Q[0],Q[1],Q[2],Q[3]);a.fill()})};I(150,.35,.7,26,46,1,3),I(110,.5,.92,22,38,3,5);let D=[["#d27ac4","#f4bce6"],["#9f74da","#d2b6f4"],["#fbfbf6","#ffffff"],["#ea88b2","#fcc8de"]];for(let F=0;F<48;F++){let N=E/2+(S()-.5)*E*.84,U=L(N),W=C-C*.9*U*(.55+S()*.42),[k,X]=D[Math.floor(S()*D.length)],ie=22+S()*12,xe=S()*6.28;if(!(U<.15)){a.fillStyle=k;for(let Te=0;Te<5;Te++){let Ee=xe+Te*1.2566;a.beginPath(),a.ellipse(N+Math.cos(Ee)*ie*.55,W+Math.sin(Ee)*ie*.45,ie*.52,ie*.36,Ee,0,7),a.fill()}a.fillStyle=X;for(let Te=0;Te<5;Te++){let Ee=xe+Te*1.2566;a.beginPath(),a.ellipse(N+Math.cos(Ee)*ie*.45,W+Math.sin(Ee)*ie*.35-3,ie*.25,ie*.16,Ee,0,7),a.fill()}a.fillStyle=k==="#fbfbf6"?"#f2b51a":"#6e2f62",a.beginPath(),a.arc(N,W,ie*.18,0,7),a.fill()}}I(34,.4,.75,20,34,4,6),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+250)/3328,v1:1-w/3328}};_("twigs",0,0),c("flowerbush",512,0,6151),m("leafA",0,512),m("leafB",512,512),m("sakura",0,1024),m("pine",512,1024),m("momiji",0,1536),m("ginkgo",512,1536),x("grass",0,2304,!1),x("flowers",512,2304,!0),M("bankA",0,2816,4111,.7),M("bankB",512,2816,4127,.35),f("bedA",0,2048,7741),M("bankC",512,2048,4133,0,0,!0);let d=new ii(l);d.colorSpace=Gt,d.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let g=1-2816/3328,v=1-2824/3328;return{tex:d,cells:h,tuftV:[g,1-2304/3328,v,(g+v)/2]}}var hn=[1,1,1],Ce={pole:be("#b1b0a9"),metal:be("#8d9198"),black:be("#2a2b30"),yellow:be("#f2c230"),white:be("#f4f3ee"),trans:be("#a0a3a8"),lampPole:be("#727780"),lampHead:be("#dcdcd6"),trunk:be("#6a5444"),trunkDark:be("#4b3a33"),bark:be("#7a6556"),leaf:be("#86ba4c"),leafShade:be("#2c6640"),sakura:be("#ffd3e3"),sakuraShade:be("#de94b4"),pine:be("#55874c"),pineShade:be("#1d4632"),cedar:be("#41713e"),cedarShade:be("#1b3e2a"),roof:be("#bdbbb3"),parapet:be("#dcdad2"),pipe:be("#c4c4bf"),orange:be("#f07a22"),red:be("#d8352a"),vermilion:be("#e2482c"),concrete:be("#c9c7c0"),stone:be("#a8a69e"),terracotta:be("#b8653d"),rail:be("#eeeeea")},yd=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(be),Ys=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(be),P3=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(be),g1=["#c62f2a","#2b46a6","#7b3c9e","#b8336f","#a8282a","#273b86"].map(be),qh=null;function C1(i){qh=i}var fi=i=>qh.uv(i),aa=fi,P1=(i,e)=>{let t=1;for(;qh.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function I1(i,e,t,n,s=0){let r=new st().makeRotationY(s);r.setPosition(e,t,n);let o=new st().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var _d=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let l=e[5];(l==="g"&&e[6]==="l"||l==="d"||l==="k"||l==="c"||l==="n"||l==="p")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},un=(i,e,t,n,s,r,o,l=hn)=>{_d(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,fi(o)),i.litV=0},Ji=(i,e,t,n,s,r,o,l=hn)=>{_d(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,fi(o)),i.litV=0},ji=(i,e,t,n,s,r,o,l=hn)=>{_d(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,fi(o)),i.litV=0},ra=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?fi(r):void 0),I3=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function L1(i){return I3.map(e=>new H(e[0],e[1],e[2]).applyMatrix4(i))}function bd(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Ce.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Ce.black:Ce.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Ce.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Ce.metal);let o=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,Ce.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,Ce.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Ce.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Ce.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Ce.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Ce.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Ce.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Ce.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,Ce.metal);return i.atlas.setM(e),un(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&un(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new H(u[0],u[1],u[2]).applyMatrix4(e))}var Hh=new H;function Tr(i,e,t,n,s,r){i.lamps&&(Hh.set(t,n,s).applyMatrix4(e),i.lamps.push(Hh.x,Hh.y,Hh.z,r))}function Md(i,e,t,n={}){let s=i.color;s.setM(e),Tr(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Ce.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Ce.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Ce.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Ce.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,hn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],hn,{u0:0,u1:1,v0:0,v1:1})}function D1(i,e,t=.04){let n=i.color;n.setM(e),Tr(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Ce.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Ce.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Ce.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,hn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],hn,{u0:0,u1:1,v0:0,v1:1})}function sa(i,e,t,n,s,r,o=!1,l=!1){let a=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[h,p]=a[u],[m,x]=a[(u+1)%4];i.quad([h*n,e,p*n],[h*s,t,p*s],[m*s,t,x*s],[m*n,e,x*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),l&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var L3=be("#202127");function Hl(i,e){let t=i.color;t.setM(e),Tr(i,e,0,3.4,0,.9);let n=L3,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),sa(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),sa(t,3.64,3.84,.23,.05,n),sa(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,hn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],hn,{u0:0,u1:1,v0:0,v1:1})}function Sd(i,e,t){let n=Math.floor(t()*3),s=[Ce.red,be("#2f6fd8"),Ce.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,qn(s,.8)),i.atlas.setM(e),un(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function vd(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,be("#e6e6e1")),i.atlas.setM(e),un(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function N1(i,e,t){let n=i.color;n.setM(e);let s=t.pick([be("#c8ccd2"),be("#c0392b"),be("#2c6fb7"),be("#2b2b2b"),be("#e8c84a"),be("#e98fb0")]);for(let o of[-.52,.52])for(let l=0;l<12;l++){let a=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([o+Math.cos(a)*.33,.34+Math.sin(a)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Ce.black)}let r=(o,l)=>n.rod(o,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Ce.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Ce.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Ce.metal)}function F1(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Ce.orange),t.cyl(0,.04,0,.16,.03,.68,10,Ce.orange),t.cyl(0,.32,0,.115,.095,.12,10,Ce.white,!1)}function wd(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Ce.terracotta),i.leaf.setM(e),Qi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}var D3=[[.35,.455],[.455,.56],[.56,.665]],v1=be("#6b4a32");function x1(i,e,t,n,s){let r=i.color,o=i.atlas,l=.62,a=fi("shop_p1"),u=a.u1-a.u0,h=a.v1-a.v0;r.setM(e),o.setM(e);for(let p of[-1,1])r.box(t+p*l-.03,0,n-.32,t+p*l+.03,1.32,n+.24,v1);for(let p=0,m=Math.floor(s()*3);p<3;p++){let x=.2+p*.4,_=x+.36,M=n-.26+p*.16,c=M+.14,[f,d]=D3[(p+m)%3];o.quad([t+l,x,M],[t-l,x,M],[t-l,_,c],[t+l,_,c],hn,{u0:a.u0+u*.14,u1:a.u0+u*.86,v0:a.v1-h*d,v1:a.v1-h*f}),r.box(t-l,x-.05,M-.06,t+l,x,M+.12,v1)}}function U1(i,e,t,n=.8){i.leaf.setM(e),Qi(i,[0,n*.3,0],0,n*.6,0,n,t()<.5?"leafA":"leafB",7,t,[1,1,1],[.5,.58,.66],[0,n*1.4])}function Er(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Ce.metal),i.atlas.setM(e),n<0?ji(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Ji(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function Td(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Ce.white:Ce.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Ce.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Ce.black),i.atlas.setM(e),t<0?ji(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Ji(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function B1(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,be("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,be("#f0a020"))}function Ed(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Ce.orange);let s=0,r=3.25,o=.42,l=14;for(let a=0;a<l;a++){let u=a/l*Math.PI*2,h=(a+1)/l*Math.PI*2,p=(m,x,_)=>[t*_,r+Math.sin(m)*x,s+Math.cos(m)*x-.25];ra(n,p(0,0,-.02),p(t>0?h:u,o,-.02),p(t>0?u:h,o,-.02),Ce.orange),ra(n,p(0,0,-.035),p(t>0?h:u,o*.86,-.035),p(t>0?u:h,o*.86,-.035),be("#dfe9f2"))}}var la=null;function O1(i){la=i}var oa=1;function k1(i){oa=i}function Qi(i,e,t,n,s,r,o,l,a,u,h,p,m=0){let x=la[o],_=1+(1-oa)*.35;l=Math.max(2,Math.round(l*oa));for(let M=0;M<l;M++){let c=a()*2-1,f=a()*2-1,d=a()*2-1;m&&(f=1.2+a());let g=Math.hypot(c,f,d)||1;c/=g,f/=g,d/=g;let v=-d,b=0,T=c;g=Math.hypot(v,T),g<.1&&(v=1,T=0,g=1),v/=g,T/=g;let w=f*T-d*b,y=d*v-c*T,S=c*b-f*v,E=Math.PI+(a()-.5)*.9,C=Math.cos(E),P=Math.sin(E),L=v*C+w*P,R=b*C+y*P,I=T*C+S*P,D=w*C-v*P,F=y*C-b*P,N=S*C-T*P,U=r*(1.3+a()*.45)*_/2,W=t+(a()-.5)*r*.6,k=n+(a()-.5)*r*(m?.15:.5),X=s+(a()-.5)*r*.6,ie=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ee,J])=>[W+(L*Ee+D*J)*U,k+(R*Ee+F*J)*U*(m?.6:1),X+(I*Ee+N*J)*U]),xe=ie.map(Ee=>{let J=Ee[0]-e[0],Q=Ee[1]-e[1],ye=Ee[2]-e[2],Ie=Math.hypot(J,Q,ye)||1;J/=Ie,Q/=Ie,ye/=Ie;let K=Ee[0]-t,ve=Ee[1]-n,Oe=Ee[2]-s;return Ie=Math.hypot(K,ve,Oe)||1,[J*.7+K/Ie*.3,Q*.7+ve/Ie*.3+(m?.5:0),ye*.7+Oe/Ie*.3]}),Te=ie.map(Ee=>id(h,u,.45+.55*Math.max(0,Math.min(1,(Ee[1]-p[0])/(p[1]-p[0])))));i.leaf.card(ie,xe,x,Te)}}function Ad(i,e,t,n="grass",s=1){let r=la[n],o=(.42+t()*.38)*s,l=o*1.2,a=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],p=[.6,.64,.58],m=[1,1,1];i.leaf.setM(e);for(let x of[a,a+Math.PI/2]){let _=Math.cos(x)*l/2,M=Math.sin(x)*l/2;i.leaf.card([[-_,-.05,-M],[_,-.05,M],[_,o,M],[-_,o,-M]],h,r,[p,p,m,m])}}function Vl(i,e,t,n=1){let s=la.flowerbush;if(!s)return;let r=(.8+t()*.35)*n,o=r*1.7,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,_=Math.sin(m)*o/2;i.leaf.card([[-x,-.06,-_],[x,-.06,_],[x,r,_],[-x,r,-_]],u,s,[h,h,p,p])}}function Xh(i,e,t,n=1){let s=la.bedA;if(!s)return;let r=(.36+t()*.16)*n,o=r*2,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,_=Math.sin(m)*o/2;i.leaf.card([[-x,-.04,-_],[x,-.04,_],[x,r,_],[-x,r,-_]],u,s,[h,h,p,p])}}var N3=[.62,.68,.74],z1=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],F3=[0,1,2,0,2,3,0,3,4],U3=z1.map(([,i])=>id(N3,hn,i));function Rd(i,e,t,n,s,r,o,l=1,a=null){let u=la[a||(o()<.5?"bankA":"bankB")],h=.82*l,p=(h+.06)*2.03,m=i.leaf;for(let x of F3){let[_,M]=z1[x],c=(_-.5)*p;m.vtx(e+s*c,t+M*(h+.06)-.06,n+r*c,0,1,0,u.u0+(u.u1-u.u0)*_,u.v0+(u.v1-u.v0)*M,U3[x])}}var H1=()=>oa>.7?.9:1.25;function B3(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Ce.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Ce.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],a=7+Math.floor(t()*3);for(let u=0;u<a;u++){let h=t()*6.28,p=(.6+t())*1.3*n;Qi(i,r,Math.cos(h)*p,s*(.62+t()*.3),Math.sin(h)*p,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],l)}Qi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],l)}function y1(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Ce.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(2.2+t()*1.6)*n,m=[Math.cos(h)*p,s*(.62+t()*.18),Math.sin(h)*p];i.color.rod([0,s*.4,0],m,.12*n,.05*n,5,Ce.trunkDark),r.push(m),i.color.rod(m,[m[0]*1.25,m[1]+.9*n,m[2]*1.25],.05*n,.02*n,4,Ce.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],l=[s*.5,s*1.1],a=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Qi(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],a,l);Qi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],a,l)}function O3(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,l=[r*.4,o*.45,.2],a=[r,o*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,Ce.trunkDark),s.rod(l,a,.15*n,.09*n,6,Ce.trunkDark),i.leaf.setM(e);let u=[[a[0],a[1]+.3,a[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[a[0]+.9*n,a[1]-.6,.8,1.1]];for(let[h,p,m,x]of u)s.rod(h>l[0]?l:a,[h,p-.2,m],.07*n,.04*n,4,Ce.trunkDark),Qi(i,[h,p-.8,m],h,p,m,x*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[p-.7,p+.5],1)}function k3(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Ce.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(1.8+t()*1.4)*n,m=[Math.cos(h)*p,s*(.55+t()*.2),Math.sin(h)*p];i.color.rod([0,s*.38,0],m,.09*n,.04*n,5,Ce.trunkDark),r.push(m)}i.leaf.setM(e);let o=[0,s*.7,0],l=[s*.45,s*1.1],a=[.62,.52,.56];for(let u of r)Qi(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],a,l);Qi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],a,l)}function z3(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Ce.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],l=[.68,.6,.52];for(let a=0;a<7;a++){let u=s*(.34+a*.09),h=(2.1-a*.24)*n,p=t()*6.28;Qi(i,r,Math.cos(p)*h*.35,u,Math.sin(p)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],l,o)}}function H3(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,be("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),p=h/r;s.cyl(o*p,h,0,.135*n*(1-p*.6),.13*n*(1-p*.6),.05,7,be("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),p=t()*6.28,m=(.8+t()*1.6)*n,x=h/r;s.rod([o*x,h,0],[o*x+Math.cos(p)*m,h+m*.9,Math.sin(p)*m],.035*n,.012*n,4,be("#8b7f78"))}let l=r*.7,a=(1.5+t()*.5)*n;i.leaf.setM(e),Qi(i,[o*.7,l,0],o*.7,l,0,a,"twigs",3,t,[1,1,1],[.92,.9,.92],[l-a,l+a])}function V3(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Ce.trunkDark),i.foliage.setM(e);let r=be("#1d3a2c"),o=be("#eef2f8"),l=be("#d7e0ec");for(let a=0;a<4;a++){let u=s*(.16+a*.19),h=(1.9-a*.38)*n,p=s*.3;i.foliage.cyl(0,u,0,h,h*.3,p,9,r),i.foliage.cyl(0,u+p*.45,0,h*.72,.05,p*.62,9,a%2?o:l)}}function W3(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Ce.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Ce.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Ce.cedar)}var V1=()=>oa>.7?[12,9,6,4,5]:[8,6,4,3,4],_1=[0,1,1],b1=[1,1,1],M1=[0,.82,1],G3=[1,.8,1],Vh=[0,1,0],q3=[0,0,1],Wh=i=>{let e=[];for(let t=0;t<=i;t++)e.push(t/i);return e};function zl(i,e,t,n){let s=2*e[0]-(i[0]+t[0])/2,r=2*e[1]-(i[1]+t[1])/2,o=2*e[2]-(i[2]+t[2])/2;return n.map(l=>{let a=1-l,u=a*a,h=2*a*l,p=l*l;return[u*i[0]+h*s+p*t[0],u*i[1]+h*r+p*t[1],u*i[2]+h*o+p*t[2]]})}var Gh=(i,e,t)=>i.map(n=>t+(e-t)*Math.pow(1-n,.7));function W1(i,e,t,n,s,r,o){let l=[0,.06,.15,.4,.7,1],a=-.25,u=e[1]+.1,h=zl([0,a,0],[e[0]*.5+s[0],(a+u)/2,e[2]*.5+s[1]],[e[0],u,e[2]],l),p=l.map((m,x)=>{let _=Math.max(0,1-(h[x][1]-a)/.75);return(t+(n-t)*Math.pow(m,1.3))*(1+.62*Math.pow(_,2.5))});h.push([e[0],u+n*.5,e[2]]),p.push(n*.1),i.tube(h,p,r,o,q3)}var $i={cells:null,bcells:null};function X3(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.bark;o.setM(e);let l=r*t.range(.3,.38),a=Tt(Math.floor(r*7919+l*104729)),[u,h,p,,m]=V1();W1(o,[0,l,0],.27*n*s,.2*n*s,[a.range(-.05,.05)*n,a.range(-.05,.05)*n],u,b1);let x=r*.64,_=t.range(2.6,3.2)*n*s,M=t.range(2,2.5)*n*s,c=n*s,f=[],d=5+Math.floor(t()*3);for(let y=0;y<d;y++){let S=y/d*6.283+t()*.6,E=t.range(-.15,.75),C=Math.sqrt(1-E*E);f.push([Math.cos(S)*C,E,Math.sin(S)*C])}f.push([0,1,0]);let g=[[0,x+.15*M,0,1.76*c,1]],v=26+Math.floor(t()*7);for(let y=0;y<v;y++){let S=t()*2-1,E=t.range(-.55,1),C=t()*2-1,P=Math.hypot(S,E,C)||1;S/=P,E/=P,C/=P;let L=f[0],R=-2;for(let D of f){let F=D[0]*S+D[1]*E+D[2]*C;F>R&&(R=F,L=D)}S=S*.45+L[0]*.55,E=E*.45+L[1]*.55,C=C*.45+L[2]*.55,P=Math.hypot(S,E,C)||1,S/=P,E/=P,C/=P;let I=t.range(.78,.95);g.push([S*_*I,x+E*M*I,C*_*I,t.range(.8,1.1)*c,0])}for(let y=0;y<4;y++){let S=f[y%d],E=Math.hypot(S[0],S[2])||1,C=S[0]/E,P=S[2]/E,L=[C*.06*c,l*.86,P*.06*c],R=[S[0]*_*.55,x+Math.min(0,S[1])*M*.4-.3*n,S[2]*_*.55],I=[(L[0]+R[0])*.5-C*.12*c,(L[1]+R[1])*.5+.18*c,(L[2]+R[2])*.5-P*.12*c],D=Wh(m),F=zl(L,I,R,D);o.tube(F,Gh(D,.16*c,.06*n),h,b1,Vh);for(let N=0,U=1+(a()<.5?1:0);N<U;N++){let W=F[m-2+N],k=Math.atan2(P,C)+(N?1:-1)*a.range(.35,.8),X=a.range(.9,1.4)*c,ie=[W[0]+Math.cos(k)*X*.8,W[1]+X*a.range(.6,.9),W[2]+Math.sin(k)*X*.8],xe=Wh(3);o.tube(zl(W,[(W[0]+ie[0])/2,(W[1]+ie[1])/2+.1*X,(W[2]+ie[2])/2],ie,xe),Gh(xe,.07*c,.025*n),p,G3,Vh)}}let b=t(),T=b<.5?[1,1,.92+b*.16]:[1-(b-.5)*.12,1,.9],w=i.gleaf;w.setM(e);for(let[y,S,E,C,P]of g){let L=y,R=(S-x)*(_/M)+.1*_,I=E,D=Math.hypot(L,R,I)||1;L/=D,R/=D,I/=D,P&&(L=I=0,R=-1);let F=Math.min(1,Math.max(0,(S-(x-M))/(2*M))),N=P?.55:.72+.28*F,U=C/.8*.88;w.bill(y,S,E,L,R,I,U,U,$i.cells[Math.floor(t()*$i.cells.length)],[T[0]*N,T[1]*N,T[2]*N],kg,.88)}}function S1(i,e,t,n=1,s=!1){let r=i.bark;r.setM(e);let o=s?1:0,l=t.range(2.2,2.7)*n,a=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,l,o*.3*n],h=Tt(Math.floor(l*7919+a*104729)+(s?17:0)),[p,m,x,_,M]=V1();W1(r,u,a,a*.8,[h.range(-.07,.07)*n,h.range(-.07,.07)*n],p,_1);let c=t.range(6.3,6.9)*n,f=-o*.5*n,d=t.range(4,4.5)*n,g=t.range(3.6,4)*n,v=t.range(1.7,2)*n,b=t()<.35?4:3,T=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let L=0;L<b;L++){let R=T+L/b*6.283+t.range(-.3,.3),I=Math.cos(R),D=Math.sin(R),F=t.range(.32,.46),N=[u[0]+I*d*F,c-v*t.range(.35,.55),u[2]*.5+f*.4+D*g*F],U=[u[0]+(N[0]-u[0])*.45+I*.25*n,l+(N[1]-l)*.55,u[2]+(N[2]-u[2])*.45+D*.25*n],W=[u[0]+I*a*.3,l-a*.45,u[2]+D*a*.3],k=Wh(M),X=zl(W,U,N,k);r.tube(X,Gh(k,a*.64,a*.3),m,_1,Vh);let ie=X[M-1],xe=L%2?1:2;for(let Te=0;Te<xe;Te++){let Ee=(Te?1:-1)*t.range(.3,.9),J=t.range(1.2,1.9)*n,Q=[N[0]+Math.cos(R+Ee)*J,N[1]+t.range(.7,1.2)*n,N[2]+Math.sin(R+Ee)*J],ye=Wh(3),Ie=zl(ie,[(ie[0]+Q[0])/2,(ie[1]+Q[1])/2+J*.1,(ie[2]+Q[2])/2],Q,ye);r.tube(Ie,Gh(ye,a*.27,.035*n),x,M1,Vh);let K=Ie[1],ve=R+Ee+(h()<.5?-1:1)*h.range(.5,1),Oe=h.range(.8,1.3)*n,Ve=[K[0]+Math.cos(ve)*Oe,K[1]+Oe*h.range(.15,.45),K[2]+Math.sin(ve)*Oe];r.tube([K,[(K[0]+Ve[0])/2,(K[1]+Ve[1])/2+.06*Oe,(K[2]+Ve[2])/2],Ve],[.05*n,.032*n,.014*n],_,M1)}}let w=[],y=6+Math.floor(t()*2);for(let L=0;L<y;L++){let R=L/y*6.283+t()*.5,I=t.range(-.2,.6),D=Math.sqrt(1-I*I);w.push([Math.cos(R)*D,I,Math.sin(R)*D])}w.push([0,1,0]);let S=[[-d*.3,c,f,1.75*n,1],[d*.3,c,f,1.75*n,1]],E=21+Math.floor(t()*4);for(let L=0;L<E;L++){let R=t()*2-1,I=t.range(-.3,1),D=t()*2-1,F=Math.hypot(R,I,D)||1;R/=F,I/=F,D/=F;let N=w[0],U=-2;for(let k of w){let X=k[0]*R+k[1]*I+k[2]*D;X>U&&(U=X,N=k)}R=R*.5+N[0]*.5,I=I*.5+N[1]*.5,D=D*.5+N[2]*.5,F=Math.hypot(R,I,D)||1,R/=F,I/=F,D/=F;let W=t.range(.8,.95);S.push([R*d*W,c+I*v*W,f+D*g*W,t.range(1,1.3)*n,0])}let C=[1,t.range(.96,1.03),t.range(.97,1.02)],P=i.gblossom;P.setM(e);for(let[L,R,I,D,F]of S){let N=L/d,U=(R-c)/v+.12,W=(I-f)/g,k=Math.hypot(N,U,W)||1;N/=k,U/=k,W/=k,F&&(N=W=0,U=-1);let X=Math.min(1,Math.max(0,(R-(c-v))/(2*v))),ie=F?.62:.8+.2*X,xe=D/.8*.86;P.bill(L,R,I,N,U,W,xe,xe,$i.bcells[Math.floor(t()*$i.bcells.length)],[C[0]*ie,C[1]*ie,C[2]*ie],zg,.86)}}var G1={broad:(i,e,t,n)=>($i.cells?X3:B3)(i,e,t,n),sakura:(i,e,t,n)=>$i.bcells?S1(i,e,t,n):y1(i,e,t,n),sakuraAve:(i,e,t,n)=>$i.bcells?S1(i,e,t,n,!0):y1(i,e,t,n),pine:O3,cedar:W3,maple:k3,ginkgo:z3,birch:H3,snowcedar:V3},w1={};function q1(i,e){let t=i+e,n=w1[t];if(!n){let s={color:new en,foliage:new en,leaf:new en({uv:!0}),gleaf:new en({uv:!0,off:!0}),gblossom:new en({uv:!0,off:!0}),bark:new en({uv:!0,idx:!0})};G1[i](s,new st,Tt(1e3+e*77+i.length*13),1),n=w1[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays(),k:s.bark.toArrays()}}return n}function X1(){for(let i in G1)for(let e=0;e<4;e++)q1(i,e)}function $n(i,e,t,n,s=1){let r=q1(t,Math.floor(n()*4)),o=e.clone().scale(new H(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o),r.k.n&&i.bark.stamp(r.k,o)}var Y3=new Set(["win0","win2","win5","win6"]),Ls=(i,e,t)=>e<t?i+(e<t*.35&&Y3.has(i)?"C":"L"):i;function Wl(i,e,t,n,s,r,o){let l=Math.max(1,Math.round(t/3)),a=t/l;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let p=0;p<l;p++){let m=h>0&&r()<.3?Ls("win6",r(),o):r()<.2?"win5":"plain";(u>0?Ji:ji)(i,u*e/2,p*a,(p+1)*a,n[h],n[h+1],m,s)}}function Gl(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Ce.roof);let o=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+o,l,Ce.parapet),i.box(-e/2,n,t-l,e/2,n+o,t,Ce.parapet),i.box(-e/2,n,0,-e/2+l,n+o,t,Ce.parapet),i.box(e/2-l,n,0,e/2,n+o,t,Ce.parapet),s()<.4){let a=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,p]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(a+h-.05,n,u+p-.05,a+h+.05,n+1,u+p+.05,Ce.metal);i.cyl(a,n+1,u,.85,.85,1.3,12,be("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Ce.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Ce.metal)}function Cd(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Ce.black);let r="vs"+Math.floor(s()*10);ji(i.atlas,e-.065,-.88,-.12,t,n,r),Ji(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Ce.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Ce.metal)}var pd=be("#d9d6cf");function Z3(i,e,t,n,s,r=""){let o=Math.floor(s()*10),l=r||"vsB"+o,a=Math.min(1.15,(n-t)*.417),u=-.14,h=u-a,p=.1,m=i.color;m.quad([e+p,t,h],[e-p,t,h],[e-p,n,h],[e+p,n,h],pd),m.quad([e-p,n,u],[e+p,n,u],[e+p,n,h],[e-p,n,h],pd),m.quad([e-p,t,h],[e+p,t,h],[e+p,t,u],[e-p,t,u],pd),ji(i.atlas,e-p,h,u,t,n,l),Ji(i.atlas,e+p,h,u,t,n,l);for(let x of[t+.28,n-.34])i.color.box(e-.03,x,u,e+.03,x+.06,0,Ce.metal)}function es(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Ce.concrete,null,{noBottom:!0}),n.type){case"shop":return j3(i,e,t,n);case"machiya":return Q3(i,e,t,n);case"apt":return ew(i,e,t,n);case"office":return tw(i,e,t,n);case"konbini":return nw(i,e,t,n);case"house":return n.ptype?ow(i,e,t,n):sw(i,e,t,n);case"tower":return aw(i,e,t,n)}}var Y1=new Set(["glass","door","cafe","noren"]),T1=["shop_p0","shop_p3","shop_p4","shop_p5","shop_p6","shop_p8","shop_p9"],K3=["shop_p2","shop_p2","shop_p7","shop_p10"],$3={shop_p1:"hs9",shop_p3:"hs7",shop_p4:"hs5",shop_p5:"hs_\u82B1\u5C4B",shop_p6:"hsN_\u6D0B\u54C1\u5E97",shop_p8:"hs13",shop_p9:"hs12"},J3={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function j3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.6,m=3,x=p+(o-1)*m,_=Math.max(1,Math.round(s/3)),M=s/_,c=-s/2,f=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],g=0;for(let y=0;y<_;y++){let S=P1(t,"shop_"+f[y%f.length]);d.push(S),!g&&S.startsWith("shop_glass")&&S.length>10&&(g=+S.slice(10))}for(let y=0;y<_;y++){let S=f[y%f.length];un(u,c+y*M,c+(y+1)*M,0,p,0,g&&S==="glass"?"shop_glass"+g:d[y]),Y1.has(S)&&Tr(i,e,c+(y+.5)*M,1.9,-.8,.7)}let v=t.pick([0,0,1,5,0,1]),b=[0,p];for(let y=1;y<o;y++)b.push(p+y*m);for(let y=1;y<o;y++)for(let S=0;S<_;S++){let E=S%2===1&&t()<.3?5:v;un(u,c+S*M,c+(S+1)*M,b[y],b[y+1],0,Ls("win"+E,t(),a),l)}Wl(u,s,r,b,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],qn(l,.8)),Gl(h,s,r,x,t);let T=s*.94;h.box(-T/2,p-.8,-.3,T/2,p+.08,-.02,Ce.black);let w="hs"+Math.floor(t()*14);if(un(u,-T/2,T/2,p-.8,p+.08,-.305,J3[g]||w),t()<.55){let y=t.pick(P3),S=p-.85;h.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],y),h.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],qn(y,.85))}if(o>=2&&t()<.85){let y=(t()<.5?1:-1)*(s/2-.35);Cd(i,y,p+.3,Math.min(x-.15,p+2.8),t)}for(let y=1;y<o;y++)if(t()<.4){let S=Math.floor(t()*_),E=c+S*M+.15,C=c+(S+1)*M-.15,P=b[y];h.box(E,P-.12,-.9,C,P,0,Ce.parapet),un(u,E,C,P,P+1,-.9,"rail"),ji(u,E,-.9,0,P,P+1,"rail"),Ji(u,C,-.9,0,P,P+1,"rail"),t()<.45&&Q1(h,E+.1,C-.1,P+1.95,-.55,t),t()<.6&&vd(i,e,(E+C)/2+.6,P,-.75)}else if(t()<.35){let S=Math.floor(t()*_);vd(i,e,c+(S+.5)*M,b[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(c+.12,0,-.08,.05,.05,x,6,Ce.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,be("#d9d9d3")),o>=3&&t()<.18&&Z1(i,s,x,r,t)}function Q3(i,e,t,n){let{w:s,d:r,floors:o,litP:l}=n,a=i.atlas,u=i.color,h=3.6,p=2.9,m=h+(o-1)*p,x=-s/2,_=Math.max(2,Math.round(s/3)),M=s/_,c=be("#5c4030"),f=be("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","door"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),g=n.at!==void 0&&Math.abs(n.at-(n.side<0?139:146))<s/2&&o>=2?n.side:0;g&&(d=["glass","door","glass"]);let v=Tt(Math.floor((i.atlas.e[12]*71.3+i.atlas.e[14]*37.9)*977)^11101),b=t.pick(["shop_p0","shop_p0","shop_p1","shop_p3"]),T=[],w=g?g<0?"shop_p1":"shop_p6":b==="shop_p1"?b:T1[Math.floor(v()*T1.length)],y=v.pick(K3),S=v()<.65?v.pick(["shop_p7","shop_p10"]):"";for(let K=0;K<_;K++){let ve=d[K%d.length];T.push(ve==="glass"?w:ve==="door"?y:ve==="cafe"?"shop_p3":(Oe=>ve==="noren"&&S||Oe)(P1(t,"shop_"+ve)))}let E=t(),C=E<.5?"":d.includes("glass")&&b==="shop_p1"?"hs9":d.includes("cafe")||d.includes("glass")&&b==="shop_p3"?"hs7":"",P=T.includes("shop_p7")?"hs0":T.includes("shop_p10")?"hs3":"",L=g?g>0?"hsN_\u6D0B\u54C1\u5E97":"hs9":d.includes("glass")&&E>=.2?$3[w]||P:d.includes("cafe")&&E>=.5?"hs7":E>=.2?P:"";for(let K=0;K<_;K++){let ve=d[K%d.length];un(a,x+K*M,x+(K+1)*M,0,h,0,T[K]),Y1.has(ve)&&Tr(i,e,x+(K+.5)*M,1.9,-.8,.7)}let R=!!n.plaster,I=n.tint,D=[0,h];for(let K=1;K<o;K++)D.push(h+K*p);let F=R?v.pick(["win7","win7","win9","win10"]):v.pick(["win8","win8","win11"]);for(let K=1;K<o;K++)for(let ve=0;ve<_;ve++){let Oe=R&&ve%2===1&&t()<.3?"win5":F;un(a,x+ve*M,x+(ve+1)*M,D[K],D[K+1],0,Ls(Oe,t(),l),Oe==="win5"?I:hn)}{let K=Math.max(1,Math.round(r/3)),ve=r/K;for(let Oe of[-1,1])for(let Ve=0;Ve<D.length-1;Ve++)for(let Ge=0;Ge<K;Ge++){let Ze=R?Ve>0?Ls(t()<.5?"win7":"win6",t(),l):"plain":Ve>0&&t()<.45?Ls("win4",t(),l):"woodwall";(Oe>0?Ji:ji)(a,Oe*s/2,Ge*ve,(Ge+1)*ve,D[Ve],D[Ve+1],Ze,R&&Ze[3]!=="7"?I:hn)}}u.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],R?qn(I,.8):be("#6a5240"));for(let K of[x,-x])u.box(K-.09,0,-.12,K+.09,m,.02,f);if(R)for(let K=2;K<o;K++)u.box(x,D[K]-.1,-.08,-x,D[K]+.06,0,f);let{RC:N,k:U}=K1(i,n,s,r,m,t,!R),W=h+.62,k=1.05,X=.7,ie=Math.max(2,Math.round((s+.3)/3)),xe=qh.has("kawaraC")?fi("kawaraC"):null;for(let K=0;K<ie;K++){let ve=x-.15+(s+.3)*K/ie,Oe=x-.15+(s+.3)*(K+1)/ie;a.quad([Oe,W-X,-k],[ve,W-X,-k],[ve,W,0],[Oe,W,0],xe?hn:N,xe||U)}u.quad([x-.15,W-X-.03,-k],[-x+.15,W-X-.03,-k],[-x+.15,W-.1,0],[x-.15,W-.1,0],c);let Te=Math.min(s*.9,4.4),Ee=W-X+.02,J=Ee-.62;u.box(-Te/2,J,-k-.02,Te/2,Ee,-k+.07,f);{let K=C?"":"hs"+Math.floor(t()*14);un(a,-Te/2,Te/2,J,Ee,-k-.025,L||K||"hs"+Math.floor(v()*14))}for(let K of[-Te/2+.25,Te/2-.25])u.box(K-.03,Ee,-k+.02,K+.03,W-X*.1,-k+.06,f);i.sodium.setM(e),u.noShadow=!0;for(let K=0;K<_;K++){let ve=x+(K+.5)*M;u.box(ve-.008,J-.02,-.62,ve+.008,W-X*.6,-.6,f),i.sodium.box(ve-.06,J-.16,-.67,ve+.06,J-.04,-.55,null)}u.noShadow=!1;let Q=!1;if(t()<.5||g){Q=!0;let K=g?g1[0]:t.pick(g1),ve=J-.12;u.quad([s/2-.2,ve-.32,-.95],[-s/2+.2,ve-.32,-.95],[-s/2+.2,ve,-.02],[s/2-.2,ve,-.02],K),u.quad([s/2-.2,ve-.55,-.95],[-s/2+.2,ve-.55,-.95],[-s/2+.2,ve-.32,-.95],[s/2-.2,ve-.32,-.95],qn(K,.85))}if(o>=2&&(!R||t()<.5)){let K=D[1]+.42,ve=-.5,Oe=x+.12,Ve=-x-.12;u.box(Oe,K-.07,ve-.04,Ve,K,0,c);for(let Ge=0;Ge<_;Ge++)un(a,x+.12+(s-.24)*Ge/_,x+.12+(s-.24)*(Ge+1)/_,K,K+.95,ve,"wrail");ji(a,Oe,ve,0,K,K+.95,"wrail"),Ji(a,Ve,ve,0,K,K+.95,"wrail"),i.leaf.setM(e);for(let Ge=0;Ge<_;Ge++)if(t()<.7){let Ze=x+(Ge+.5)*M,ot=Math.min(M*.7,1.6);u.noShadow=!0,u.box(Ze-ot/2,K+.72,ve-.2,Ze+ot/2,K+.92,ve-.02,be("#7a5236")),u.noShadow=!1;for(let ct=Ze-ot/2+.2;ct<Ze+ot/2-.1;ct+=.32)Qi(i,[ct,K+.95,ve-.11],ct,K+1.05,ve-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[K+.9,K+1.3])}}if(o>=2&&(t()<.9||g)){let K=t()<.5?1:-1,ve=g||K;Z3(i,ve*(s/2-.35),W+.1,Math.min(m-.2,W+2.8),t,g?g<0?"vsB10":"vsB0":""),s>7&&t()<.35&&Cd(i,-ve*(s/2-.35),h+.8,Math.min(m-.2,h+2.5),t)}{let K=d.includes("noren")||d.includes("cafe"),ve=Q?0:K?2:t()<.3?1:0;i.sodium.setM(e);for(let Oe=0;Oe<ve;Oe++){let Ve=ve===2?(Oe?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),Ge=J-.5;u.noShadow=!0,u.box(Ve-.006,Ge+.42,-k+.12,Ve+.006,J,-k+.14,f),i.sodium.cyl(Ve,Ge,-k+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(Ve,Ge+.18,-k+.13,.16,.11,.18,10,null,!1),u.cyl(Ve,Ge-.035,-k+.13,.1,.1,.04,8,f),u.cyl(Ve,Ge+.355,-k+.13,.1,.1,.04,8,f),u.noShadow=!1}}let ye=1e9,Ie=1e9;w==="shop_p1"&&d.includes("glass")&&(ye=x+(d.indexOf("glass")+.5)*M,x1(i,e,ye,-.62,t)),g<0&&_>=3&&(Ie=x+2.5*M,x1(i,e,Ie,-.62,t));for(let K=x+.45+t()*.4;K<-x-.3;K+=.7+t()*1.3)t()<.7&&Math.abs(K-ye)>.95&&Math.abs(K-Ie)>.95&&wd(i,e,t,K,-.4);i.color.setM(e),i.atlas.setM(e)}function Z1(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,l=n*.3;for(let a of[-r*.35,r*.35])i.color.box(a-.06,t,l,a+.06,t+1.2+o,l+.12,Ce.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+o,l+.3,Ce.metal),un(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,l+.115,"bb"+Math.floor(s()*4))}function ew(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.2,m=2.95,x=p+(o-1)*m,_=Math.max(2,Math.round(s/3.2)),M=s/_,c=-s/2,f=[0,p];for(let v=1;v<o;v++)f.push(p+v*m);for(let v=0;v<_;v++)un(u,c+v*M,c+(v+1)*M,0,p,0,v===Math.floor(_/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),v===Math.floor(_/2)?hn:l);let d="bal"+Math.floor(t()*3),g=qn(l,.97);for(let v=1;v<o;v++){let b=f[v];for(let T=0;T<_;T++)un(u,c+T*M,c+(T+1)*M,b,f[v+1],0,Ls("win2",t(),a),l);h.box(c,b-.15,-1.3,-c,b,0,g),h.box(c,b,-1.3,-c,b+1.1,-1.18,g,null,{noBottom:!0});for(let T=0;T<_;T++)un(u,c+T*M,c+(T+1)*M,b,b+1.1,-1.305,d,l);for(let T=0;T<=_;T++)h.box(c+T*M-.05,b,-1.18,c+T*M+.05,b+2.4,0,qn(l,.92));for(let T=0;T<_;T++){let w=t(),y=c+T*M+.2,S=c+(T+1)*M-.2;w<.34?Q1(h,y,S,b+2.02,-.98,t):w<.46&&uw(h,y+.25,Math.min(S-.25,y+1.9),b+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<_;T++)t()<.55&&(vd(i,e,c+(T+.78)*M,b,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(c,x-.15,-1.3,-c,x,0,g),Wl(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],qn(l,.8)),Gl(h,s,r,x,t,!0)}function tw(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=4,m=3.4,x=p+(o-1)*m,_=Math.max(2,Math.round(s/3)),M=s/_,c=-s/2,f=[0,p];for(let d=1;d<o;d++)f.push(p+d*m);for(let d=0;d<_;d++)un(u,c+d*M,c+(d+1)*M,0,p,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let g=0;g<_;g++)un(u,c+g*M,c+(g+1)*M,f[d],f[d+1],0,Ls("win3",t(),a),l);Wl(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],qn(l,.8)),Gl(h,s,r,x,t,!0),t()<.6&&Cd(i,(t()<.5?1:-1)*(s/2-.3),p+.4,Math.min(x-.3,p+4.5),t),t()<.3&&Z1(i,s,x,r,t)}function nw(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,l=i.color,a=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),p=s/h;for(let m=0;m<h;m++)un(o,u+m*p,u+(m+1)*p,0,3.4,0,"shop_konbini"),Tr(i,e,u+(m+.5)*p,1.9,-.8,.8);l.box(u,3.4,-.35,-u,a,0,Ce.white),un(o,u,-u,3.4,a,-.355,"konbini_band"),Wl(o,s,r,[0,a],be("#f2f2ee"),t,0),Gl(l,s,r,a,t)}var E1=(i,e)=>e?be("#7a5a42"):i.tint,md=null,iw=()=>{if(!md){let i=fi("kawara"),e=16/272*(i.u1-i.u0);md={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return md};function K1(i,e,t,n,s,r,o){let l=i.atlas,a=i.color,u=!!e.snow,h=u?.75:.6,p=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),m=u?fi("white"):iw(),x=u?be("#f3f5fa"):be("#c8ccd8"),_=u?be("#e4e8f0"):be("#3d4456"),M=u?1:Math.max(2,Math.round((t+2*h)/3)),c=g=>-t/2-h+(t+2*h)*g/M;for(let g=0;g<M;g++){let v=c(g),b=c(g+1);l.quad([b,s-.25,-h],[v,s-.25,-h],[v,s+p,n/2],[b,s+p,n/2],x,m),l.quad([v,s-.25,n+h],[b,s-.25,n+h],[b,s+p,n/2],[v,s+p,n/2],x,m)}let f=(g,v,b,T,w,y)=>{y<0?(a.quad([v,b,w],[g,b,w],[g,T,w],[v,T,w],_),a.quad([g,b,w],[v,b,w],[v,b,w+.08],[g,b,w+.08],_)):(a.quad([g,b,w],[v,b,w],[v,T,w],[g,T,w],_),a.quad([v,b,w],[g,b,w],[g,b,w-.08],[v,b,w-.08],_))};for(let[g,v]of[[-h,0],[n+h,n]])f(-t/2-h,t/2+h,s-.42,s-.22,g<0?g-.04:g+.04,g<0?-1:1),a.quad(g<0?[-t/2-h,s-.26,g]:[t/2+h,s-.26,g],g<0?[t/2+h,s-.26,g]:[-t/2-h,s-.26,g],g<0?[t/2+h,s-.26,v]:[-t/2-h,s-.26,v],g<0?[-t/2-h,s-.26,v]:[t/2+h,s-.26,v],qn(E1(e,o),.62));for(let g of[-1,1]){let v=g*(t/2+h+.02),b=.2,T=[v,s-.25,-h],w=[v,s+p,n/2],y=[v,s-.25,n+h],S=E=>[E[0],E[1]-b,E[2]];g>0?(a.quad(S(w),S(T),T,w,_),a.quad(S(y),S(w),w,y,_)):(a.quad(S(T),S(w),w,T,_),a.quad(S(w),S(y),y,w,_))}let d=E1(e,o);if(ra(a,[-t/2,s,0],[-t/2,s,n],[-t/2,s+p-.1,n/2],d),ra(a,[t/2,s,n],[t/2,s,0],[t/2,s+p-.1,n/2],d),a.box(-t/2-h,s+p-.05,n/2-.15,t/2+h,s+p+.18,n/2+.15,u?be("#f6f7fb"):be("#3d4456")),u){a.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,be("#eef1f7")),a.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,be("#eef1f7"));for(let g=-t/2;g<t/2;g+=.45+r()*.5)a.cyl(g,s-.42-.35,-h+.02,0,.04,.35,4,be("#dfe8f3"),!1)}return{RC:x,k:m,fascia:f,nS:M}}function sw(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=2.9,m=o*p,x=-s/2,_=t()<.5,M=Math.max(2,Math.round(s/3)),c=s/M,f=[];for(let w=0;w<=o;w++)f.push(w*p);let d=_?hn:l;for(let w=0;w<o;w++)for(let y=0;y<M;y++){let S=_?"win4":"win0";w===0&&y===0?S="shop_house":S=Ls(S,t(),a),un(u,x+y*c,x+(y+1)*c,f[w],f[w+1],0,S,S==="shop_house"?hn:d)}Wl(u,s,r,f,_?be("#9a7a62"):l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],qn(l,.75));let{RC:g,k:v,fascia:b,nS:T}=K1(i,n,s,r,m,t,_);if(o>1){let w=p+.05;for(let y=0;y<T;y++){let S=-s/2-.1+(s+.2)*y/T,E=-s/2-.1+(s+.2)*(y+1)/T;u.quad([E,w-.3,-.75],[S,w-.3,-.75],[S,w+.05,0],[E,w+.05,0],g,v)}b(-s/2-.1,s/2+.1,w-.42,w-.28,-.79,-1)}if(n.fence){let w=-n.fence,y=1.2;for(let[S,E]of[[-s/2,-1],[.4,s/2]])h.box(S,0,w-.08,E,y,w+.08,Ce.concrete),un(u,S,E,0,y,w-.085,"block")}}var xd={byZone:null};function $1(i){let e={};for(let t of i)for(let n of t.zones)(e[n]||(e[n]=[])).push(t);xd.byZone=e}function Yh(i,e){let t=xd.byZone&&xd.byZone[i];return t?t[Math.floor(e()*t.length)]:null}var kl={u0:0,u1:0,v0:0,v1:0},vs=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],A1=(i,e)=>{for(let t=0;t<4;t++)vs[t][0]=i[e+t*3],vs[t][1]=i[e+t*3+1],vs[t][2]=i[e+t*3+2]},rw=(i,e,t)=>{let n=Math.sin(e*12.9898+t*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;return 24+Math.floor((n-Math.floor(n))*231)};function ow(i,e,t,n){let s=n.ptype,r=i.atlas,o=i.color,l=fi(s.f),a=fi(s.s);for(let u of s.pieces){let h=u.t==="f"?l:a,p=h.u1-h.u0,m=h.v1-h.v0;kl.u0=h.u0+u.uv[0]*p,kl.u1=h.u0+u.uv[2]*p,kl.v1=h.v1-u.uv[1]*m,kl.v0=h.v1-u.uv[3]*m,A1(u.p,0),u.lit&&r.hasLit&&(r.litV=s.day?6:rw(r,u.p[0]+u.p[2],u.p[1])),r.quad(vs[0],vs[1],vs[2],vs[3],hn,kl),r.litV=0}o.noShadow=!0;for(let u of s.soffits)A1(u,0),o.quad(vs[0],vs[1],vs[2],vs[3],s.soffit);if(o.noShadow=!1,n.fence){let u=-n.fence,h=1.1,p=s.ww+1;for(let[m,x]of[[-p/2,-1],[.4,p/2]])o.box(m,0,u-.08,x,h,u+.08,Ce.concrete),un(r,m,x,0,h,u-.085,"block")}}function aw(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.4,m=o*p,x=Math.max(2,Math.round(s/6)),_=s/x,M=-s/2,c=t()<.5?"win3":"win2",f=[];for(let v=0;v<=o;v++)f.push(v*p);for(let v=0;v<o;v++)for(let b=0;b<x;b++)un(u,M+b*_,M+(b+1)*_,f[v],f[v+1],0,Ls(c,t(),a),l);let d=Math.max(1,Math.round(r/6)),g=r/d;for(let v of[-1,1])for(let b=0;b<o;b++)for(let T=0;T<d;T++)(v>0?Ji:ji)(u,v*s/2,T*g,(T+1)*g,f[b],f[b+1],Ls(c,t(),a),l);Gl(h,s,r,m,t,!0)}function Pd(i,e,t,n){let s=i.color,r=be("#8d9096"),o=be("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,a=-n+.62;s.box(-.14,5.08,l,.14,5.56,a,o);let u=t*.141;i.atlas.setM(e),(t>0?Ji:ji)(i.atlas,u,l,a,5.08,5.56,"signal");let h=t>0?a:l,p=t>0?-1:1;for(let x=0;x<3;x++){let _=h+p*(.2+x*.4);s.box(t>0?.14:-.36,5.47,_-.15,t>0?.36:-.14,5.5,_+.15,o)}let m=h+p*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,m-.11,t>0?.16:-.145,5.43,m+.11,hn)}function J1(i,e,t,n){let s=i.color,r=be("#3d6ea8"),o=be("#e8eef2"),l=be("#c7c5bf"),a=5.35;s.setM(e),s.box(-1.1,a-.65,-t,1.1,a,t,r);for(let u of[-1.1,1])s.box(u,a,-t,u+.1,a+1.1,t,o),s.box(u-.02,a+1.1,-t,u+.12,a+1.18,t,r);i.atlas.setM(e),ji(i.atlas,-1.105,-2.2,2.2,a-.62,a-.06,n),Ji(i.atlas,1.105,-2.2,2.2,a-.62,a-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),p=u*(t-.15),m=Math.min(h,p),x=Math.max(h,p);s.box(-.45,.15,m+.3,.45,a-.65,x-.3,r);let _=20,M=(a-.15)/_;for(let c=0;c<_;c++)s.box(1.1+c*.3,.15,m,1.1+(c+1)*.3,a-(c+1)*M+.04,x,l);s.box(1.1,a-.1,m-.05,1.1+_*.3,a-.02,m+.05,r)}}function j1(i,e,t,n,s,r,o){let l=i.color,a=1.22,u=3.55,h=6.7,p=be("#c8c5bd"),m=be("#ebe8de"),x=be("#7a5a42"),_=be("#5e4433"),M=be("#4d5468");l.setM(e),l.box(t,-1.4,u,n,a,h,p,null,{noBottom:!0}),l.box(t,a,u,n,a+.025,u+.32,m),l.box(t,a,u+.6,n,a+.04,u+.9,Ce.yellow);let c=Math.sign(s-(t+n)/2),f=c>0?n:t,d=f+c*6.2,g=u+.9,v=h-.2,b=(U,W,k)=>[U,W,k];c>0?l.quad(b(d,.1,v),b(d,.1,g),b(f,a,g),b(f,a,v),p):l.quad(b(d,.1,g),b(d,.1,v),b(f,a,v),b(f,a,g),p);for(let U of[g,v]){let W=be("#9aa0a6");l.rod([d,.1+.9,U],[f,a+.9,U],.03,.03,5,W);for(let k=0;k<=3;k++){let X=d+(f-d)*k/3,ie=.1+(a-.1)*k/3;l.box(X-.03,ie,U-.03,X+.03,ie+.9,U+.03,W)}}i.atlas.setM(e);for(let U=t;U<n-.01;U+=3){let W=Math.min(n,U+3);i.atlas.quad([U,-.6,h+.004],[W,-.6,h+.004],[W,a,h+.004],[U,a,h+.004],be("#d8d4ca"),fi("concrete"))}l.setM(e);for(let U=t+.4;U<n;U+=2)l.box(U-.05,a,h-.12,U+.05,a+1,h-.02,be("#8f949a"));for(let U of[.45,.95])l.box(t,a+U,h-.1,n,a+U+.06,h-.04,be("#8f949a"));let T=n-t,w=U=>c>0?n-T*U:t+T*U,y=w(.47),S=y-2.3,E=y+2.3,C=u+1.35,P=h-.25;l.box(S,a,P-.12,E,a+2.45,P,x);for(let U of[S,E-.12])l.box(U,a,C+.6,U+.12,a+2.45,P,_);for(let U of[S,E-.12])l.box(U,a,C,U+.12,a+2.45,C+.12,_);l.quad([E+.4,a+2.5,C-.45],[S-.4,a+2.5,C-.45],[S-.4,a+2.85,P+.35],[E+.4,a+2.85,P+.35],M),l.quad([S-.4,a+2.42,C-.45],[E+.4,a+2.42,C-.45],[E+.4,a+2.77,P+.35],[S-.4,a+2.77,P+.35],be("#3a3f50")),l.box(S+.3,a+.42,P-.55,E-.3,a+.48,P-.15,be("#8a6a4a"));for(let U of[S+.4,E-.5])l.box(U,a,P-.5,U+.08,a+.42,P-.2,Ce.metal);i.atlas.setM(e),i.atlas.quad([y-1.1,a+1.55,P+.005],[y+1.1,a+1.55,P+.005],[y+1.1,a+2.03,P+.005],[y-1.1,a+2.03,P+.005],hn,fi("ekiplate"+r));let L=w(.2),R=u+1.6,I=1.25,D=a+1.25,F=D+.95;l.setM(e);for(let U of[L-I+.12,L+I-.12])l.cyl(U,a,R,.05,.05,F-a+.05,8,be("#6b7078"));l.box(L-I,D-.03,R-.03,L+I,F+.03,R+.03,be("#3a3d42")),i.atlas.setM(e),i.atlas.quad([L-I,D,R+.035],[L+I,D,R+.035],[L+I,F,R+.035],[L-I,F,R+.035],hn,fi("ekimei"+r)),i.atlas.quad([L+I,D,R-.035],[L-I,D,R-.035],[L-I,F,R-.035],[L+I,F,R-.035],hn,fi("ekimei"+r)),l.setM(e);let N=y-c*4.2;l.box(N-.9,a+.42,h-1.25,N+.9,a+.47,h-.85,be("#3b6ea8")),l.box(N-.9,a+.47,h-.88,N+.9,a+.9,h-.83,be("#3b6ea8"));for(let U of[N-.75,N+.7])l.box(U,a,h-1.2,U+.06,a+.42,h-.9,Ce.metal);for(let U=t+3;U<n-1;U+=9)Hl(i,I1(e,U,a,h-.45))}var lw=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(be),cw=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(be);function Q1(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Ce.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let l=.28+r()*.34,a=.36+r()*.42,u=r.pick(lw),h=s+(r()-.5)*.06;i.quad([o+l,n-a,h],[o,n-a,h],[o,n-.02,h],[o+l,n-.02,h],u),i.quad([o,n-a,h+.01],[o+l,n-a,h+.01],[o+l,n-.02,h+.01],[o,n-.02,h+.01],qn(u,.85)),r()<.4&&i.box(o+l*.45,n-.02,h-.02,o+l*.55,n+.06,h+.02,be("#d8d8d0")),o+=l+.06+r()*.22}}function uw(i,e,t,n,s,r){let o=r.pick(cw),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,o),i.box(e,n-.72,s-l,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,qn(o,.86))}function ev(i,e){let t=i.color,n=be("#a19f97"),s=be("#6b4a35"),r=be("#4f4a44"),o=be("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,be("#8d8b84"));for(let l of[-.52,.48])for(let a of[-.36,.32])t.box(l,.32,a,l+.05,1.5,a+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,qn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,be("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,be("#5b8d3d"))}function tv(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Ce.black:Ce.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Ce.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Ce.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Ce.black);t.box(-.78,-.9,-.34,.3,0,.34,Ce.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,be("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Ce.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new st().multiplyMatrices(e,new st().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Ce.black:Ce.yellow)}t.setM(e),i.atlas.setM(e),un(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function nv(i,e){let t=i.color;t.setM(e);let n=Ce.stone,s=qn(Ce.stone,1.06),r=qn(Ce.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),sa(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),sa(t,1.48,1.54,.25,.35,r,!1,!0),sa(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,hn),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,hn)}function Id(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Ce.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Ce.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Ce.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Ce.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Ce.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Ce.vermilion)}function iv(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,be("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,be("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,be("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,be("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Ce.metal),n.box(1.1,0,.3,1.2,.42,.55,Ce.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Ce.metal),i.atlas.setM(e),ji(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Ji(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}var hw=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],fw=be("#a7a7aa"),dw=[1,.95,.9],R1={},pw=()=>oa>.7?12:6;function sv(i,e){let t=i*16+e,n=R1[t];if(!n){let s=new en({uv:!0,idx:!0}),r=qn(fw,dw[i]),o=.42,l=.25,a=.075,u=o-l,h=1-a,p=o+(l-o)*h,m=p-a,x=(M,c,f)=>s.vtx(M[0],M[1],M[2],c[0],c[1],c[2],f,0,r),_=[];for(let M of hw){let c=0,f=1,d=0;Math.abs(M[1])>.99&&(c=1,f=0);let g=M[1]*d-M[2]*f,v=M[2]*c-M[0]*d,b=M[0]*f-M[1]*c,T=Math.hypot(g,v,b);g/=T,v/=T,b/=T;let w=v*M[2]-b*M[1],y=b*M[0]-g*M[2],S=g*M[1]-v*M[0],E=[];for(let D=0;D<e;D++){let F=D/e*Math.PI*2,N=Math.cos(F),U=Math.sin(F);E.push([g*N+w*U,v*N+y*U,b*N+S*U])}let C=(D,F,N)=>[M[0]*N+D[0]*F,M[1]*N+D[1]*F,M[2]*N+D[2]*F],P=s.n,L=P+e,R=L+e,I=R+e;for(let D of E)x(C(D,o,0),[D[0]+M[0]*u,D[1]+M[1]*u,D[2]+M[2]*u],0);for(let D of E)x(C(D,p,h),[D[0]+M[0]*u,D[1]+M[1]*u,D[2]+M[2]*u],h);for(let D of E)x(C(D,m,1),M,1);x(M,M,1);for(let D=0;D<e;D++){let F=(D+1)%e;_.push(P+D,L+F,P+F,P+D,L+D,L+F),_.push(L+D,R+F,L+F,L+D,R+D,R+F),_.push(I,R+F,R+D)}}n=R1[t]=s.toArrays(),n.I=Uint16Array.from(_)}return n}var mw=new yn,gd=new ni,gw=new H,vw=new H;function Ld(i,e,t,n,s,r,o=0,l=.6,a=0){s()<l?gd.set((s()-.5)*.4,s()*6.283,(s()-.5)*.4):gd.set(s()*6.283,s()*6.283,s()*6.283);let u=new st().compose(gw.set(e,t,n),mw.setFromEuler(gd),vw.set(r,r,r));u.groundY=o;let h=i.tetra,p=h.n;h.stamp(sv(Math.floor(s()*3),pw()),u);for(let m=p*2+1;m<h.n*2;m+=2)h.U[m]=a}function rv(){for(let i=0;i<3;i++)for(let e of[6,12])sv(i,e)}function ov(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,be("#8f8a80"),be("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Ce.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Ce.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Ce.black),t.cyl(0,18.6,0,1,.25,1.2,12,Ce.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,hn)}function av(i,e,t){let n=i.color;n.setM(e);let s=t.pick([be("#f4f4f0"),be("#3b6ea5"),be("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),ra(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),ra(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Ce.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Ce.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,be("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Ce.metal)}function lv(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Ce.stone),n.box(-.55,.5,.9,.55,1.5,1.8,be("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],be("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],be("#4d5468")),Id(i,I1(e,0,0,-.3,Math.PI/2),.75,2.2)}var ca=[[0,"#070b26","#1c2752","#a8b6f0",.55,"#30427a","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#b0bcf2",.45,"#46548a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#1d4492","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#283c88","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#232f78","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1a2260","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#a8b6f0",.55,"#32447c","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#a8b6f0",.55,"#30427a","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new ue(e):e)),se={zenith:new ue,horizon:new ue,sunCol:new ue,sunI:1,hemiSky:new ue,hemiGround:new ue,hemiI:1,fog:new ue,cLit:new ue,cShade:new ue,cRim:new ue,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new H,moonDir:new H,lightDir:new H,sunEl:0,t:.4,head:null};function hv(i,e=null){se.t=i,se.head=e;let t=0;for(;t<ca.length-2&&ca[t+1][0]<=i;)t++;let n=ca[t],s=ca[t+1],r=jo(Jt((i-n[0])/(s[0]-n[0]),0,1)),o=(l,a)=>a.copy(n[l]).lerp(s[l],r);o(1,se.zenith),o(2,se.horizon),o(3,se.sunCol),se.sunI=at(n[4],s[4],r),o(5,se.hemiSky),o(6,se.hemiGround),se.hemiI=at(n[7],s[7],r),o(8,se.fog),o(9,se.cLit),o(10,se.cShade),o(11,se.cRim),se.night=at(n[12],s[12],r),se.warm=at(n[13],s[13],r),se.sunEl=fv(i,se.sunDir,se.moonDir,se.lightDir,e)}var Nd=Math.PI/180,yw=70*Nd,cv=8*Nd,_w=20*Nd,bw=i=>cv+(yw-cv)*jo(Jt(i<.5?(i-.25)/.15:(.75-i)/.25,0,1));function fv(i,e,t,n,s=null){let r=Math.sin((i-.25)*Math.PI*2)*1.08,o=Math.cos(r),l=Math.abs(Math.sin(r))*.8+.25;if(s===null){let a=(i-.25)*Math.PI+.9;e.set(o*Math.sin(a),Math.sin(r),o*Math.cos(a)).normalize(),t.set(-e.x,l,-e.z).normalize()}else{let a=s+bw(i),u=s+_w;e.set(o*Math.sin(a),Math.sin(r),o*Math.cos(a)).normalize(),t.set(o*Math.sin(u),l,o*Math.cos(u)).normalize()}return n.copy(e),r<.08&&n.lerpVectors(t,e,Jt((r+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),r}var Mw=new H,Sw=new H;function dv(i,e,t=null){return fv((i%1+1)%1,Mw,Sw,e,t),e}var uv={zenith:[new ue("#7b8594"),new ue("#141a28")],horizon:[new ue("#b5bcc6"),new ue("#283042")],fog:[new ue("#a8b0ba"),new ue("#232b3c")],hemiSky:[new ue("#aab3bf"),new ue("#3c4866")],hemiGround:[new ue("#8b8983"),new ue("#1e2030")],cLit:[new ue("#d0d5dc"),new ue("#2c3240")],cShade:[new ue("#7c8593"),new ue("#151922")]},Dd=new ue;function pv(i,e){if(se.overcast=i,se.rain=e,se.bright=(1-se.night)*(1-se.warm)*(1-i),i<=.001)return;let t=se.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Dd.copy(uv[n][0]).lerp(uv[n][1],t),se[n].lerp(Dd,i*(n==="cLit"||n==="cShade"?.75:.85));se.sunI*=1-.82*i,se.warm*=1-i,se.cRim.multiplyScalar(1-i),se.sunCol.lerp(Dd.setRGB(.85,.87,.9),i*.6)}function mv(){let i=new ht({side:Kn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:se.zenith},uHorizon:{value:se.horizon},uSunDir:{value:se.sunDir},uMoonDir:{value:se.moonDir},uNoiseTex:we.uNoiseTex,uSunCol:{value:se.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new ue},uOvercast:{value:0},uDeckLit:{value:new ue},uDeckDark:{value:new ue},uMilky:{value:0},uMetA:{value:new H(0,1,0)},uMetB:{value:new H(0,1,0)},uMetP:{value:-1},uBright:{value:0},uMoon:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright, uMoon;
      varying vec3 vDir;
      ${Oi}
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
          float md = dot(d, uMoonDir); // (the moon: uMoon, out of the twilight's sky: main.js)
          col += vec3(0.5, 0.58, 0.85) * pow(max(md, 0.0), 60.0) * 0.35 * uMoon;
          col = mix(col, vec3(1.6, 1.6, 1.5), smoothstep(0.99955, 0.9998, md) * uMoon);
        }
        gl_FragColor = vec4(col, 1.0);
      }`}),e=new pt(new fl(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function ww(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let g=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+g*.5,(i()-.5)*.2,g])}let l=e?6:2,a=s*.82,u=.1+.09;for(let d=0;d<l;d++){let g=Math.max(1,Math.round(a/.11));for(let v=0;v<g;v++){let b=(g===1?0:v/(g-1)-.5)*a+(i()-.5)*.05+r*d;t.push([b,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,a*=e?.8:.66}let h=t.slice();for(let d of h){if(t.length>84)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.82,d[1]+Math.sin(b)*d[3]*.82,d[2]+.04,T])}}let p=t.slice(h.length);for(let d of h){if(d[1]<.1+.12||t.length>104)continue;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.3+i()*2.5,T=d[3]*(.3+i()*.4),w=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(b)*T,d[1]+Math.sin(b)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-w*.6,w])}}for(let d of p){if(t.length>124)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.85,d[1]+Math.sin(b)*d[3]*.85,d[2]+.02,T])}}let m=t.slice(0,128),x=1e9,_=-1e9,M=-1e9;for(let d of m)x=Math.min(x,d[0]-d[3]*1.12),_=Math.max(_,d[0]+d[3]*1.12),M=Math.max(M,d[1]+d[3]*1.12);let c=Math.min(1,.92/(_-x),(.95-.1)/(M-.1)),f=(x+_)/2;for(let d of m)d[0]=(d[0]-f)*c,d[1]=.1+(d[1]-.1)*c,d[3]*=c;return m}function gv(i){let t={value:Array.from({length:128},()=>new dt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new ht({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:we.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Oi}
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
      }`,depthTest:!1,depthWrite:!1,blending:ui}),r=new Zt(1024,1024,{generateMipmaps:!0,minFilter:zn,magFilter:Ot,depthBuffer:!1}),o=new ht({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:we.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${Oi}
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
      }`,depthTest:!1,depthWrite:!1,blending:ui}),l=new pt(new nn(1,1),s),a=new Br,u=new Ws;a.add(l);let h=new Zt(1024*2,1024*2,{generateMipmaps:!0,minFilter:zn,magFilter:Ot}),p=i.getRenderTarget(),m=i.autoClear,x=Tt(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let _=[];for(let M=0;M<4;M++){let c=M%2===0,f=ww(x,c);f.forEach((d,g)=>t.value[g].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=f.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=M*13.7,l.material=s,i.setRenderTarget(r),i.render(a,u),l.material=o,h.viewport.set(M%2*1024,Math.floor(M/2)*1024,1024,1024),i.setRenderTarget(h),i.render(a,u),_.push({cell:[M%2,Math.floor(M/2)],tall:c})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=m,i.setRenderTarget(p),s.dispose(),o.dispose(),r.dispose(),l.geometry.dispose(),{tex:h.texture,kinds:_,rt:h}}function vv(i){let e=Tt(5),t=22,n=[],s=new nn(1,1);s.translate(0,.5,0);let r=new kn(new Float32Array(t*4),4),o=new kn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let l=new ht({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new ue},uShade:{value:se.cShade},uRim:{value:se.cRim},uHaze:{value:se.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),a=new fs(s,l,t);a.frustumCulled=!1,a.renderOrder=-5;for(let _=0;_<t;_++){let M=_<12,c=i.kinds[(_*3+(M?0:1))%i.kinds.length],f=M?c.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:_/t*Math.PI*2+e.range(-.15,.15),d:M?e.range(2600,3400):e.range(1300,2200),base:M?e.range(-60,60):e.range(260,700),size:f,cell:c.cell,haze:M?.45:.18})}let u=new st,h=new yn,p=new H,m=new H,x=new H(0,1,0);return{group:a,update(_,M){let c=Math.atan2(se.lightDir.x,se.lightDir.z);for(let d of n)d.phi+=M*1.2/d.d;n.slice().sort((d,g)=>g.d-d.d).forEach((d,g)=>{p.set(_.x+Math.sin(d.phi)*d.d,_.y+d.base,_.z+Math.cos(d.phi)*d.d),h.setFromAxisAngle(x,d.phi+Math.PI),m.set(d.size,d.size,1),u.compose(p,h,m),a.setMatrixAt(g,u);let v=c-d.phi;v=Math.atan2(Math.sin(v),Math.cos(v));let b=Math.max(0,Math.min(1,(v+.35)/.7)),T=1-b*b*(3-2*b);r.setXYZW(g,d.cell[0],d.cell[1],T,d.haze),o.setX(g,.35+.9*Math.pow(Math.max(Math.cos(v),0),3)*(.4+se.warm))}),a.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,l.uniforms.uOpacity.value=(1-se.night*.35)*(1-se.overcast*.55)*(1-.85*se.rain),l.uniforms.uLit.value.copy(se.cLit).multiplyScalar(1+.35*se.bright)}}}function xv(){let i=new pn;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],l=[];for(let p=0;p<=360;p++){let m=p/360*Math.PI*2,x=Math.sin(m)*t.R,_=Math.cos(m)*t.R,M=Ah(p/360*t.k*4,40+n*9),c=Math.pow(Math.max(0,M-.18)/.82,1.6),f=t.h*(.12+c);if(r.push(x,-60,_,x,-60+f,_),o.push(0,p/360,1,p/360),p<360){let d=p*2;l.push(d,d+1,d+2,d+1,d+3,d+2)}}let a=new xt;a.setAttribute("position",new et(r,3)),a.setAttribute("hf",new et(o,2)),a.setIndex(l);let u=new ht({side:Tn,fog:!1,uniforms:{uCol:{value:new ue(t.col)},uHaze:{value:se.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:we.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Oi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new pt(a,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-se.night))*(1-.35*se.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var to="./assets/",wv=`
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
}`,Zs=[.299,.587,.114],ua=[.03,.014,-.018],Tw=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Ti=[0,0,0],Fd=(i,e,t,n,s,r)=>{let o=i-e*(1-n)-t*n*s;return Math.min(.985,Math.max(0,Tw(Math.min(1,Math.max(0,n+(o-n)/r)))))};function Ew(i,e,t,n,s){let r=i.toneMappingExposure.value,o=i.uSat.value,l=i.uLo.value,a=i.uDay.value,u=e/255,h=t/255,p=n/255,m=l.x*Zs[0]+l.y*Zs[1]+l.z*Zs[2],x=(ua[0]*Zs[0]+ua[1]*Zs[1]+ua[2]*Zs[2])*a,_=(u*Zs[0]+h*Zs[1]+p*Zs[2]-m)/(1-m+x);Ti[0]=Fd(u,l.x,ua[0],_,a,o),Ti[1]=Fd(h,l.y,ua[1],_,a,o),Ti[2]=Fd(p,l.z,ua[2],_,a,o);let M=.76,c=.24,f=Math.max(Ti[0],Ti[1],Ti[2]);if(f>=M){let v=c*c/(1-f)-c+M,b=1-1/(.15*(v-f)+1),T=v/f;for(let w=0;w<3;w++)Ti[w]=(Ti[w]-b*f)/Math.max(1-b,.001)*T}let d=Math.min(Ti[0],Ti[1],Ti[2]),g=d<.04?Math.sqrt(Math.max(d,0)/6.25)-d:.04;return s.setRGB((Ti[0]+g)/r,(Ti[1]+g)/r,(Ti[2]+g)/r)}function Ks(i){let e=Object.keys(i[0][1]),t={};for(let n of e)t[n]=[0,0,0];return{cur:t,at(n){let s=0;for(;s<i.length-2&&i[s+1][0]<=n;)s++;let r=i[s],o=i[s+1],l=Math.min(Math.max((n-r[0])/(o[0]-r[0]),0),1),a=l*l*(3-2*l);for(let u of e){let h=r[1][u],p=o[1][u],m=t[u];m[0]=h[0]+(p[0]-h[0])*a,m[1]=h[1]+(p[1]-h[1])*a,m[2]=h[2]+(p[2]-h[2])*a}return this},ug(n,s,r){let o=t[s];return Ew(n,o[0],o[1],o[2],r)},rgb(n){return t[n]}}}function fn(i,e,t){let n={};for(let s of Object.keys(i))n[s]=[0,1,2].map(r=>i[s][r]+(e[s][r]-i[s][r])*t);return n}var Yl={on:1},$s=()=>{let i=Math.min(Math.max(((Yl.on?1-se.overcast:se.bright)-.55)/.4,0),1);return i*i*(3-2*i)},Tv={value:new Fe(1280,720)};function Ev(i){i.getDrawingBufferSize(Tv.value)}function Av(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:Tv}}async function zd(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),l;try{l=await new pl().loadAsync(o)}catch(a){throw URL.revokeObjectURL(o),a}return l.onUpdate=()=>{URL.revokeObjectURL(o),l.onUpdate=null},l.colorSpace=hi,l.generateMipmaps=!0,l.minFilter=zn,l.magFilter=Ot,{tex:l,file:n}}async function no(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function Rv(i,e=15e3){let t=to+"clouds/";return no((async()=>{let n=await fetch(t+"clouds2.json");if(!n.ok)throw new Error("clouds2.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(l=>l.u1>l.u0&&l.v1>l.v0&&l.w>0&&l.h>0&&l.lum&&l.lum[1]>l.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await zd(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function Cv(i,e=15e3){let t=to+"fronts/";return no((async()=>{let n=await fetch(t+"fronts3.json");if(!n.ok)throw new Error("fronts3.json "+n.status);let s=await n.json(),r=(s.tiles||[]).filter(h=>h.name&&h.w>0&&h.h>0&&h.x>=0&&h.x+h.w<=1&&h.y>=0&&h.y+h.h<=1&&h.ey+h.h<=1);if(!r.length)throw new Error("no fronts listed");let o=s.files&&s.files[i]?i:"hi",l=await fetch(t+s.files[o]);if(!l.ok)throw new Error(s.files[o]+" "+l.status);let a=await l.blob();if(s.bytes&&s.bytes[o]&&a.size!==s.bytes[o])throw new Error(s.files[o]+" is "+a.size+" bytes, not "+s.bytes[o]);let u=await createImageBitmap(a);if(s.size&&s.size[o]&&(u.width!==s.size[o][0]||u.height!==s.size[o][1]))throw new Error(s.files[o]+" has the wrong size");return{img:u,tiles:r,tier:o}})(),e,"painted fronts unavailable, keeping the procedural shopfronts:")}async function Pv(i,e=15e3){let t=to+"houses/";return no((async()=>{let n=await fetch(t+"houses2.json");if(!n.ok)throw new Error("houses2.json "+n.status);let s=await n.json(),r=s.files&&s.files[i]?i:"hi",o=s.tiles&&s.tiles[r]||[],l=(s.types||[]).filter(p=>p.f&&p.s&&p.pieces&&p.pieces.length&&o.some(m=>m.name===p.f)&&o.some(m=>m.name===p.s));if(!l.length||!(s.rows&&s.rows[r]>0))throw new Error("no houses listed");let a=await fetch(t+s.files[r]);if(!a.ok)throw new Error(s.files[r]+" "+a.status);let u=await a.blob();if(s.bytes&&s.bytes[r]&&u.size!==s.bytes[r])throw new Error(s.files[r]+" is "+u.size+" bytes, not "+s.bytes[r]);let h=await createImageBitmap(u,{premultiplyAlpha:"none"});if(s.size&&s.size[r]&&(h.width!==s.size[r][0]||h.height!==s.size[r][1]))throw new Error(s.files[r]+" has the wrong size");if(o.some(p=>!(p.w>0&&p.h>0&&p.x>=0&&p.x+p.w<=h.width&&p.ey+p.h<=h.height)))throw new Error("a tile lies outside the sheet");return{img:h,tiles:o,types:l,rows:s.rows[r],tier:r}})(),e,"painted houses unavailable, keeping the procedural ones:")}async function Iv(i,e=15e3){let t=to+"fields/";return no((async()=>{let n=await fetch(t+"fields2.json");if(!n.ok)throw new Error("fields2.json "+n.status);let s=await n.json();if(!(s.tile&&s.tile[0]>0&&s.tile[1]>0&&Math.abs(ai/s.tile[1]-Math.round(ai/s.tile[1]))<1e-6))throw new Error("bad tile size");if(!(s.mean&&s.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await zd(t,s,i);return r.colorSpace=Gt,r.wrapS=r.wrapT=hs,{tex:r,tile:s.tile,mean:s.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var Zh=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],Aw=140*Math.PI/180,$h=Math.PI/180,Rr=i=>Math.atan2(Math.sin(i),Math.cos(i));function Rw(i,e){let t=Tt(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/Zh[0][1];for(let[a,u,h,p,m,x,_]of Zh)for(let M=0;M<u;M++){let c;a==="tower"?c=s+M*r+t.range(-.22,.22)*r:a==="mid"?c=s+(M+.5)*r*(Zh[0][1]/u)+t.range(-.2,.2)*r:a==="high"?c=s+(M*(Zh[0][1]/u)+.5)*r+t.range(-.3,.3)*r:c=s+(M+t())/u*Math.PI*2,n.push({role:a,kinds:x,phi:c,d:t.range(h[0],h[1]),e0:t.range(p[0],p[1])*$h,ah:t.range(m[0],m[1])*$h,haze:_,k:-1,flip:!1})}let o=i.map(()=>[]),l=n.map((a,u)=>u);for(let a=l.length-1;a>0;a--){let u=Math.floor(t()*(a+1)),h=l[a];l[a]=l[u],l[u]=h}for(let a of l){let u=n[a],h=-1,p=1e9;i.forEach((m,x)=>{let _=u.kinds.indexOf(m.kind);if(_<0)return;let c=(o[x].some(f=>Math.abs(Rr(f-u.phi))<Aw)?1e3:0)+o[x].length*10+_*4+t();c<p&&(p=c,h=x)}),h<0&&(h=Math.floor(t()*i.length)),u.k=h,o[h].push(u.phi)}for(let a of n){let u=i[a.k],h=a.d*Math.tan(a.e0);a.y0=h,a.h=a.d*Math.tan(a.e0+a.ah)-h,a.w=a.h*u.w/u.h,a.half=Math.atan2(a.w/2,a.d)}return n.sort((a,u)=>u.d-a.d)}var yv={shade:[172,196,234],mid:[214,226,246],lit:[246,249,253],rim:[255,246,228]},_v={shade:[137,114,117],mid:[184,147,138],lit:[238,196,146],rim:[255,214,150]},Ud={shade:[96,65,92],mid:[158,82,98],lit:[226,124,100],rim:[242,172,122]},Kh={shade:[33,58,90],mid:[45,76,116],lit:[78,112,152],rim:[140,166,200]},Bd={shade:[58,56,96],mid:[104,86,132],lit:[170,128,168],rim:[214,150,170]},Cw=Ks([[0,Kh],[.2,fn(Kh,Bd,.5)],[.245,fn(Ud,_v,.4)],[.3,yv],[.62,yv],[.7,_v],[.75,Ud],[.765,fn(Ud,Bd,.4)],[.8,Bd],[.86,Kh],[1,Kh]]),bv=new ue;function Lv(i,e,t=5){let n=i.list,s=Rw(n,t),r=s.length,o=new nn(1,1);o.translate(0,.5,0);let l=new kn(new Float32Array(r*4),4),a=new kn(new Float32Array(r*4),4),u=new kn(new Float32Array(r),1);o.setAttribute("aRect",l),o.setAttribute("aInfo",a),o.setAttribute("aRim",u),s.forEach((b,T)=>{let w=n[b.k];l.setXYZW(T,w.u0,w.v0,w.u1-w.u0,w.v1-w.v0),a.setXYZW(T,0,w.lum[0],1/Math.max(.05,w.lum[1]-w.lum[0]),b.haze)});let h=new ht({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new ue},uMid:{value:new ue},uShade:{value:new ue},uRimCol:{value:new ue},uHaze:{value:se.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...Av(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:wv+`
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
      }`}),p=new fs(o,h,r);p.frustumCulled=!1,p.renderOrder=-5;let m=new st,x=new yn,_=new H,M=new H,c=new H(0,1,0),f=new H,d=!0;function g(b,T){let w=s.filter(R=>R.role==="tower").sort((R,I)=>Rr(R.phi-b)-Rr(I.phi-b)),y=null,S=1e9;for(let R=0;R<w.length;R++){let I=w[R],D=w[(R+1)%w.length],F=T==="center"?I.phi:I.phi+Rr(D.phi-I.phi)/2,N=Math.abs(Rr(F-b));N<S&&(S=N,y=T==="center"?[I,I,F]:[I,D,F])}if(!y)return;let[E,C,P]=y,L=Rr(b-P);for(let R of s)R.phi+=L;for(let R of new Set([E,C])){let I=Math.max(R.ah,31*$h),D=R.d*Math.tan(R.e0+I)-R.y0;R.w*=D/R.h,R.h=D,R.ah=I,R.half=Math.atan2(R.w/2,R.d)}}let v={mesh:p,count:r,opening:"flank",layout:s,update(b,T){let w=b.position,y=Math.atan2(se.lightDir.x,se.lightDir.z);b.getWorldDirection(f);let S=Math.atan2(f.x,f.z),E=Math.atan(Math.tan(b.fov*$h/2)*b.aspect);d&&g(S,v.opening);for(let I=0;I<r;I++){let D=s[I];D.phi+=T*1.2/D.d,_.set(w.x+Math.sin(D.phi)*D.d,w.y+D.y0,w.z+Math.cos(D.phi)*D.d),x.setFromAxisAngle(c,D.phi+Math.PI),M.set(D.w,D.h,1),m.compose(_,x,M),p.setMatrixAt(I,m);let F=Rr(y-D.phi),N=F>0!==n[D.k].litLeft;N!==D.flip&&Math.abs(Math.sin(F))>.2&&(d||Math.abs(Rr(D.phi-S))>E+D.half+.05)&&(D.flip=N),a.setX(I,D.flip?1:0);let U=Math.max(Math.cos(F),0);u.setX(I,.35+.9*U*U*U*(.4+se.warm))}d=!1,p.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,u.needsUpdate=!0;let C=h.uniforms;{let I=Math.min(Math.max((se.bright-.55)/.4,0),1);C.uPaint.value=I*I*(3-2*I)}let P=e.grade.uniforms,L=Cw.at(se.t),R=1-$s();L.ug(P,"shade",C.uShade.value).lerp(se.cShade,R),L.ug(P,"mid",C.uMid.value).lerp(bv.copy(se.cShade).lerp(se.cLit,.5),R),L.ug(P,"lit",C.uLit.value).lerp(bv.copy(se.cLit).multiplyScalar(1+.35*se.bright),R),L.ug(P,"rim",C.uRimCol.value).lerp(se.cRim,R),C.uOpacity.value=(1-se.night*(.08+.27*R))*(1-se.overcast*.55)*(1-.85*se.rain)}};return v}async function Dv(i,e=15e3){let t=to+"band/";return no((async()=>{let n=await fetch(t+"band3.json");if(!n.ok)throw new Error("band3.json "+n.status);let s=await n.json(),{tex:r,file:o}=await zd(t,s,i),l={};for(let[a,u]of Object.entries(s.zones&&s.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(l[a]=new dt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(l).length)throw new Error("no zones listed");return r.wrapS=hs,{tex:r,zones:l,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var Mv={shade:[84,112,132],mid:[142,170,190],lit:[200,220,234],ch:[.6,.6,.6]},Sv={shade:[70,78,100],mid:[110,108,124],lit:[160,140,134],ch:[.3,.3,.3]},ql={shade:[46,36,58],mid:[84,56,84],lit:[130,76,92],ch:[.25,.25,.25]},ha={shade:[20,38,60],mid:[30,54,84],lit:[46,76,112],ch:[.12,.12,.12]},Pw=Ks([[0,ha],[.2,fn(ha,ql,.3)],[.245,fn(ql,Sv,.4)],[.3,Mv],[.62,Mv],[.7,Sv],[.75,ql],[.765,fn(ql,ha,.25)],[.8,fn(ql,ha,.55)],[.86,ha],[1,ha]]),Xl=2500,Iw=-8,eo=new H,Ar=new ue,Od=new ue("#fff5dd").multiplyScalar(3.35),kd=new ue("#8fb1ec").multiplyScalar(1.35*2);function Nv(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(v=>v.w)),r=192,o=360/i.period,l=new Float32Array((r+1)*6),a=new Float32Array((r+1)*4),u=[],h=Math.tan(Iw*Math.PI/180),p=s+.004;for(let v=0;v<=r;v++){let b=v/r*Math.PI*2,T=Math.sin(b)*Xl,w=Math.cos(b)*Xl;if(l.set([T,h*Xl,w,T,p*Xl,w],v*6),a.set([-(v/r)*o,h,-(v/r)*o,p],v*4),v<r){let y=v*2;u.push(y,y+2,y+1,y+1,y+2,y+3)}}let m=new xt;m.setAttribute("position",new _t(l,3)),m.setAttribute("uv",new _t(a,2)),m.setIndex(u);let x=Math.PI/180,_=(e.composer.readBuffer.samples||0)>0,M=new ht({fog:!1,side:Tn,alphaToCoverage:_,defines:_?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new dt},uRowB:{value:new dt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new ue(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*x)},uGnd:{value:new H(2.8,.0014,700)},uSpan:{value:new Fe(h,p)},...Av(e),uTone:{value:0},uBS:{value:new H},uBM:{value:new H},uBH:{value:new H},uBCh:{value:0},uWin:{value:new Fe},uLightsOn:we.uLightsOn},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${Xl.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:wv+`
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
      }`}),c=new pt(m,M);c.frustumCulled=!1,c.renderOrder=999;let f=M.uniforms,d=new H,g=!0;return{mesh:c,zones:n,hero:.125,update(v,b,T=2.8,w=.0014,y=700){let S=n[b.a],E=n[b.b],C=b.t,P=0;if(S&&E?(f.uRowA.value.copy(S),f.uRowB.value.copy(E),f.uMix.value=S===E?0:C,P=1):(S||E)&&(f.uRowA.value.copy(S||E),f.uMix.value=0,P=S?1-C:C),f.uAlpha.value=P,c.visible=P>.002,!c.visible)return 0;c.position.copy(v.position),f.uGnd.value.set(T,w,y),f.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(T/140)+.3*x)),Math.max(S?S.w:0,E?E.w:0)+.003),g&&(v.getWorldDirection(d),f.uRot.value=this.hero+Math.atan2(d.x,d.z)/(Math.PI*2)*o,g=!1),Ar.copy(se.sunCol).multiplyScalar(se.sunI),eo.set(Ar.r,Ar.g,Ar.b),Ar.copy(se.hemiSky).multiplyScalar(se.hemiI*2),eo.x+=Ar.r,eo.y+=Ar.g,eo.z+=Ar.b;let L=Math.min(Math.max((se.bright-.55)/.4,0),1),R=L*L*(3-2*L);if(f.uLightC.value.setRGB(eo.x/(Od.r+kd.r),eo.y/(Od.g+kd.g),eo.z/(Od.b+kd.b)),f.uPaint.value=R,f.uTone.value=$s()*(1-R),f.uTone.value>0){let U=Pw.at(se.t);f.uBS.value.fromArray(U.rgb("shade")).divideScalar(255),f.uBM.value.fromArray(U.rgb("mid")).divideScalar(255),f.uBH.value.fromArray(U.rgb("lit")).divideScalar(255),f.uBCh.value=U.rgb("ch")[0]}let I=Math.min(Math.max((se.night-.15)/.65,0),1),D=I*I*(3-2*I)*(1-.6*se.overcast);f.uWin.value.set(b.a==="city"?D*Yl.on:0,b.b==="city"?D*Yl.on:0);let F=Math.max(4*f.uMix.value*(1-f.uMix.value),Math.min(1,2*(1-P))),N=_?0:.45*F*F*F;return f.uHaze.value=1-(1-(1-(1-.12*se.warm-.25*se.night)*(1-.55*se.overcast)*(1-.6*se.rain))*(1-R))*(1-N),P}}}async function Lw(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((m,x)=>e[x]!==m))throw new Error("not a PNG");let s=8,r=0,o=0,l=[];for(;s+12<=e.length;){let m=t.getUint32(s),x=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+m>e.length)throw new Error("PNG truncated");if(x==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(x==="IDAT")l.push(e.subarray(s+8,s+8+m));else if(x==="IEND")break;s+=12+m}if(!r||!o||!l.length)throw new Error("PNG has no image");let a=new Uint8Array(await new Response(new Blob(l).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,h=new Uint8Array(u*o),p=new Uint8Array(u);if(a.length<(u+1)*o)throw new Error("PNG data short");for(let m=0;m<o;m++){let x=a[m*(u+1)],_=m*(u+1)+1,M=(o-1-m)*u,c=m?h.subarray(M+u,M+2*u):p,f=h.subarray(M,M+u),d=a.subarray(_,_+u);if(x===0)f.set(d);else if(x===1){for(let g=0;g<4;g++)f[g]=d[g];for(let g=4;g<u;g++)f[g]=d[g]+f[g-4]}else if(x===2)for(let g=0;g<u;g++)f[g]=d[g]+c[g];else if(x===3){for(let g=0;g<4;g++)f[g]=d[g]+(c[g]>>1);for(let g=4;g<u;g++)f[g]=d[g]+(f[g-4]+c[g]>>1)}else if(x===4){for(let g=0;g<4;g++)f[g]=d[g]+c[g];for(let g=4;g<u;g++){let v=f[g-4],b=c[g],T=c[g-4],w=Math.abs(b-T),y=Math.abs(v-T),S=Math.abs(v+b-T-T);f[g]=d[g]+(w<=y&&w<=S?v:y<=S?b:T)}}else throw new Error("PNG filter "+x)}return{w:r,h:o,data:h}}function Dw(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],l=Math.floor(r*255)+1,a=new Uint32Array(256),u=[],h=(_,M,c,f,d,g)=>{a.fill(0);for(let v=0;v<g;v++){let b=((f+v)*M+c)*4+3;for(let T=0;T<d;T++)a[_[b+T*4]]++}};for(let _=0;_<s;_++)for(let M=0;M<n;M++){let c=i/n,f=e/s;h(t,i,M*c,_*f,c,f);let d=0;for(let g=l;g<256;g++)d+=a[g];u.push(d/(c*f))}let p=i,m=e,x=t;for(;p>1&&m>1;){let _=p>>1,M=m>>1,c=new Uint8Array(_*M*4),f=p*4;for(let v=0;v<M;v++){let b=v*2*f,T=v*_*4;for(let w=0;w<_;w++,b+=8)for(let y=0;y<4;y++,T++)c[T]=x[b+y]+x[b+y+4]+x[b+y+f]+x[b+y+f+4]+2>>2}let d=_/n,g=M/s;if(d>=2&&g>=2&&d===Math.floor(d)&&g===Math.floor(g))for(let v=0;v<s;v++)for(let b=0;b<n;b++){h(c,_,b*d,v*g,d,g);let T=Math.round(u[v*n+b]*d*g),w=255,y=a[255];for(;w>1&&y<T;)y+=a[--w];let S=T>0?Math.min(6,Math.max(.5,l/w)):1;if(S!==1)for(let E=0;E<g;E++){let C=((v*g+E)*_+b*d)*4+3;for(let P=0;P<d;P++)c[C+P*4]=Math.min(255,Math.round(c[C+P*4]*S))}}o.push({data:c,width:_,height:M}),x=c,p=_,m=M}return o}async function Fv(i,e=15e3){let t=to+"trees/";return no((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let l=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&l.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+l.byteLength+" bytes, not "+s.bytes[r]);let a=await Lw(l),u=s.cols,h=s.rows;if(!(u>0&&h>0)||a.w%u||a.h%h)throw new Error("bad atlas layout");let p=(s.cells||[]).filter(_=>_.col<u&&_.row<h).map(_=>{let M=.5/a.w,c=.5/a.h;return{kind:_.kind,u0:_.col/u+M,u1:(_.col+1)/u-M,v0:1-(_.row+1)/h+c,v1:1-_.row/h-c}});if(!p.some(_=>_.kind==="leaf"))throw new Error("no leaf clusters listed");let m=Dw(a.w,a.h,a.data,u,h,.5),x=new Mi(a.data,a.w,a.h,ri);return x.mipmaps=m,x.generateMipmaps=!1,x.minFilter=zn,x.magFilter=Ot,x.colorSpace=hi,x.needsUpdate=!0,{tex:x,cells:p,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var Js={T:6.5,N:400,TH:.75},Vv=Js.N/ai,Nw=Vv*Math.tan(Js.TH),jh=Math.cos(Js.TH),Kl=Math.sin(Js.TH),Qh=4,Jn=i=>i.toFixed(7),jl=`
float shorePhase(float s, float d){ return uTime * ${Jn(1/Js.T)} + s * ${Jn(Vv)} + d * ${Jn(Nw)}; }`,$l=256/ai,Uv=i=>Math.max(1,Math.round(i*Kl/$l))*$l/Kl,Fw=i=>Math.max(1,Math.round(i*jh/$l))*$l/jh,Hd=i=>Math.max(1,Math.round(i*Js.N*Qh/256))*256/(Js.N*Qh),Uw=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,Jl={uNoiseTex:we.uNoiseTex,uOrigin:we.uOrigin,uTime:{value:0},uCam:{value:new H},uSunDir:{value:se.lightDir},uSunCol:{value:se.sunCol},uHorizon:{value:se.horizon},uZenith:{value:se.zenith},uFog:{value:se.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new ue},uPMid:{value:new ue},uPFace:{value:new ue},uPLite:{value:new ue},uPMidD:{value:new ue},uPMidM:{value:new ue},uPMidF:{value:new ue},uPMidL:{value:new ue},uPFarD:{value:new ue},uPFar:{value:new ue},uPFarF:{value:new ue},uPFarL:{value:new ue},uPHz:{value:new ue},uFoamLit:{value:new ue(1,1,1)},uFoamShade:{value:new ue(.5,.6,.8)},uSeaDir:{value:new Fe(1,0)},uWaves:{value:1},uPWBack:{value:new ue},uPWFace:{value:new ue},uPWLite:{value:new ue},uPWTurq:{value:new ue},uShoreW:{value:1},uPPath:{value:new ue},uPGlint:{value:new ue},uPathDir:{value:new H(0,1,0)},uPathK:{value:0},uPSpark:{value:new ue(1,1,1)}},Bv={trough:[0,98,182],mid:[10,132,218],face:[49,163,242],lite:[140,210,250],midD:[4,124,212],midM:[27,148,232],midF:[49,163,242],midL:[140,205,248],farD:[36,139,221],far:[69,169,243],farF:[114,191,246],farL:[190,228,251],hz:[111,196,250],foam:[246,251,254],foamShade:[160,205,240],wBack:[1,109,193],wFace:[68,163,212],wLite:[113,188,241],wTurq:[46,154,201],path:[140,210,250],glint:[246,251,254],pk:[0,0,0],spark:[246,251,254]},Ov={trough:[62,71,85],mid:[100,105,118],face:[157,129,131],lite:[193,169,149],midD:[82,97,123],midM:[146,129,126],midF:[212,165,128],midL:[242,200,139],farD:[137,119,127],far:[228,186,134],farF:[246,222,154],farL:[243,227,168],hz:[238,201,149],foam:[250,223,177],foamShade:[182,164,157],wBack:[63,79,98],wFace:[148,128,110],wLite:[181,149,139],wTurq:[94,114,112],path:[238,197,147],glint:[253,232,165],pk:[.8,.8,.8],spark:[244,214,172]},Zl={trough:[63,47,73],mid:[91,73,99],face:[129,80,110],lite:[202,125,125],midD:[74,63,95],midM:[94,76,105],midF:[101,74,105],midL:[122,86,102],farD:[84,58,86],far:[104,70,98],farF:[124,78,100],farL:[146,84,98],hz:[126,76,100],foam:[247,180,162],foamShade:[177,122,140],wBack:[67,56,82],wFace:[125,86,95],wLite:[157,106,126],wTurq:[94,84,91],path:[244,171,118],glint:[255,228,149],pk:[1,1,1],spark:[196,128,128]},fa={trough:[8,33,62],mid:[17,57,92],face:[28,64,106],lite:[50,88,126],midD:[9,42,76],midM:[17,53,90],midF:[18,55,95],midL:[32,62,96],farD:[14,41,72],far:[29,63,96],farF:[20,66,111],farL:[40,78,120],hz:[13,76,131],foam:[133,172,202],foamShade:[70,105,140],wBack:[12,43,73],wFace:[50,77,103],wLite:[63,96,136],wTurq:[32,71,90],path:[185,221,236],glint:[230,250,254],pk:[.75,.75,.75],spark:[58,96,134]},Bw=Ks([[0,fa],[.2,{...fn(fa,Zl,.25),pk:[0,0,0]}],[.245,fn(Zl,Ov,.35)],[.3,Bv],[.62,Bv],[.7,Ov],[.75,Zl],[.765,{...fn(Zl,fa,.25),pk:[0,0,0]}],[.8,{...fn(Zl,fa,.55),pk:[0,0,0]}],[.86,fa],[1,fa]]),Wv=`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint, uWaves, uPathK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPLite, uPMidD, uPMidM, uPMidF, uPMidL, uPFarD, uPFar, uPFarF, uPFarL, uPHz, uFoamLit, uFoamShade, uPPath, uPGlint, uPathDir, uPSpark;
uniform vec2 uOrigin, uSeaDir;
${Oi}${Uw}
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
}`;function Gv(i=!1){let e=new ht({fog:!1,defines:i?{SEA_LITE:""}:{},uniforms:Jl,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${Wv}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),t=new pt(new nn(14e3,14e3),e);t.rotation.x=-Math.PI/2,t.position.y=gs,t.renderOrder=998,t.frustumCulled=!1;let n=Jl;return{mesh:t,u:n,update(s,r,o,l=1,a=null,u=null,h=0){t.position.x=s.x,t.position.z=s.z,u&&l>0&&Ow(u,h,n.uSeaDir.value),n.uTime.value=r,n.uCam.value.copy(s),n.uNight.value=se.night,n.uBright.value=se.bright,n.uFogD.value=o,n.uVis.value=l,n.uSpecK.value=1-se.overcast*.85;let p=a?$s():0;n.uPaint.value=p;let m=1+.25*se.bright,x=1/(Math.PI*m),_=se.sunCol,M=se.hemiSky,c=se.sunI*.8,f=se.hemiI;if(n.uFoamLit.value.setRGB((_.r*c+M.r*f)*x,(_.g*c+M.g*f)*x,(_.b*c+M.b*f)*x),n.uFoamShade.value.setRGB(M.r*f*.9*x,M.g*f*.9*x,M.b*f*.9*x),n.uPathK.value=0,p>0){let d=Bw.at(se.t),g=a;d.ug(g,"trough",n.uPTrough.value),d.ug(g,"mid",n.uPMid.value),d.ug(g,"face",n.uPFace.value),d.ug(g,"lite",n.uPLite.value),d.ug(g,"midD",n.uPMidD.value),d.ug(g,"midM",n.uPMidM.value),d.ug(g,"midF",n.uPMidF.value),d.ug(g,"midL",n.uPMidL.value),d.ug(g,"farD",n.uPFarD.value),d.ug(g,"far",n.uPFar.value),d.ug(g,"farF",n.uPFarF.value),d.ug(g,"farL",n.uPFarL.value),d.ug(g,"hz",n.uPHz.value),n.uFoamLit.value.lerp(d.ug(g,"foam",kv),p),n.uFoamShade.value.lerp(d.ug(g,"foamShade",kv),p),d.ug(g,"spark",n.uPSpark.value),Jh(d,g,"wBack",n.uPWBack.value,n.uPMid.value),Jh(d,g,"wFace",n.uPWFace.value,n.uPMid.value),Jh(d,g,"wLite",n.uPWLite.value,n.uPMid.value),Jh(d,g,"wTurq",n.uPWTurq.value,n.uPMid.value);let v=se.sunEl>-.04?se.sunDir:se.moonDir,b=Math.min(Math.max((v.y-.3)/.3,0),1);n.uPathK.value=d.rgb("pk")[0]*p*n.uWaves.value*(1-b*b*(3-2*b)),n.uPathK.value>0&&(n.uPathDir.value.copy(v),d.ug(g,"path",n.uPPath.value),d.ug(g,"glint",n.uPGlint.value))}}}}var kv=new ue,Jh=(i,e,t,n,s)=>{i.ug(e,t,n),n.r-=s.r,n.g-=s.g,n.b-=s.b},da={zone:-1,x:1,z:0},zv={},Hv=.35;function Ow(i,e,t){let n=Math.floor((e-150)/Bi),s=Math.floor((e+800)/Bi)+1;for(let r=n;r<=s;r++)if(!(Cs(r*Bi+Bi/2,"coast")<.99)){if(r!==da.zone){let o=0,l=0;for(let h=r*Bi-Qo;h<=(r+1)*Bi;h+=25)i.at(Math.max(h,0),zv),o+=zv.h,l++;o/=l,da.zone=r;let a=Math.cos(Hv),u=Math.sin(Hv);da.x=-Math.sin(o)*a-Math.cos(o)*u,da.z=-Math.cos(o)*a+Math.sin(o)*u}t.set(da.x,da.z);return}}function qv(i=!1){let e=Uv(5.5),t=Uv(.45),n=8*$l/Kl,s=Fw(2.6),r=Hd(.8),o=Hd(17.3),l=Hd(3.7);return new ht({fog:!1,defines:i?{SHORE_LITE:"",SEA_LITE:""}:{},uniforms:Jl,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${Wv}${jl}
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
          float a = d * ${Jn(jh)} - s * ${Jn(Kl)}, b = s * ${Jn(jh)} + d * ${Jn(Kl)};
          vec4 nA = vnoise4(vec2(s * 0.0609524, d * 0.12 + uTime * 0.01));
          float wob = (nA.x - 0.5) * 0.9;   // (the rows wander)
          // the waves drawn here: the smallest (OCT to each big one) out to 8 m from us, then doubling at each doubling of
          // the distance, every other crest fading out in between, so the sizes hand over without a seam. q: the phase in
          // this size's waves; e: from the nearest crest of this size, e1: of the next size up (in their own waves); f:
          // since the last big wave passed
          float ph1 = (shorePhase(s, d) + wob) * ${Qh.toFixed(1)}, f = fract(ph1 * ${(1/Qh).toFixed(3)}), fw1 = fwidth(ph1) + 1e-4;
          float L = clamp(log2(dist * 0.125), 0.0, 3.0), k0 = floor(L), fr = L - k0, P = exp2(k0);
          float q = ph1 / P, n0 = floor(q + 0.5), n1 = floor(0.5 * q + 0.5), ev = 1.0 - mod(n0, 2.0), aa = fw1 / P * 1.2;
          // the details' coordinates and their footprints on screen first (they are read only near the crests and where
          // there is foam): the crest's torn edge and its beads ride with the crest; the lace stays in the water as the
          // waves pass through it, drifting in slowly. Along the road they repeat with S_WRAP
          vec2 pC = vec2(a * ${Jn(e)}, ph1 * ${Jn(r)}), cx = dFdx(pC), cy = dFdy(pC);
          vec2 pL = vec2(a * ${Jn(t)}, (b + uTime * 0.3) * ${Jn(s)}), lx = dFdx(pL), ly = dFdy(pL);
          // the waves in full out to ~14 m from the wall, easing into the open sea's own wavelets by the strip's edge; their
          // crests fade as they shrink to a few pixels far ahead
          float near = 1.0 - smoothstep(14.0, 36.0, d), vis = 1.0 - smoothstep(0.07, 0.18, aa * 0.8333), nw = 1.0 - smoothstep(3.0, 20.0, d);
          // a short-crested sea, as the painting's: each crest a few of its wavelengths long, bowed, bigger and smaller
          // along it, breaking where it is biggest (more of it near the wall), each its own: one pattern per crest, riding
          // with it, at its size (E0 for the crests of this size, E1 for the next size's)
          vec4 E0 = vnoise4L(vec2(a * ${Jn(n)} / P + n0 * P * ${Jn(o)}, n0 * P * ${Jn(l)})), E1 = vec4(0.5);
          // (the next size's only between two sizes: inside 8 m and beyond 64 m every use of it is weighted by fr = 0)
          if (fr > 0.0) E1 = vnoise4L(vec2(a * ${Jn(n)} * 0.5 / P + n1 * 2.0 * P * ${Jn(o)}, n1 * 2.0 * P * ${Jn(l)}));
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
      }`})}function Xv(){return new ht({fog:!1,uniforms:{uNoiseTex:we.uNoiseTex,uTime:{value:0},uSunDir:{value:se.lightDir},uSunCol:{value:se.sunCol},uHorizon:{value:se.horizon},uZenith:{value:se.zenith},uFog:{value:se.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Oi}
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
      }`})}var pa={n:8,drops:4};function Yv(){return new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:Jl,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC; attribute float aK;
      varying vec2 vUv; varying vec4 vK;
      ${jl}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        // two bursts to each big wave: its own, and a smaller one halfway to the next (the waves between, as the shore's)
        float ph = (shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13)) * 2.0; // (each a moment after the wave arrives)
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13) * (1.0 - 0.4 * mod(wave, 2.0)); // how hard it hits here
        float age = fract(ph) * ${(Js.T/2).toFixed(3)};
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
      ${Oi}
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
      }`})}function Zv(i){let e=i.length/8;if(!e)return null;let t=1+pa.drops,n=e*t,s=new Float32Array(n*12),r=new Float32Array(n*16),o=new Float32Array(n*12),l=new Float32Array(n*4),a=new Uint16Array(n*6),u=[-1,1,1,-1],h=[-1,-1,1,1],p=1/0,m=1/0,x=1/0,_=-1/0,M=-1/0,c=-1/0;for(let d=0;d<e;d++){let g=d*8;for(let v=0;v<t;v++){let b=d*t+v;for(let T=0;T<4;T++){let w=b*4+T;s[w*3]=i[g],s[w*3+1]=i[g+1],s[w*3+2]=i[g+2],r[w*4]=i[g+3],r[w*4+1]=i[g+4],r[w*4+2]=i[g+5],r[w*4+3]=i[g+6],o[w*3]=u[T],o[w*3+1]=h[T],o[w*3+2]=i[g+7],l[w]=v}a.set([b*4,b*4+1,b*4+2,b*4,b*4+2,b*4+3],b*6)}p=Math.min(p,i[g]),m=Math.min(m,i[g+1]),x=Math.min(x,i[g+2]),_=Math.max(_,i[g]),M=Math.max(M,i[g+1]),c=Math.max(c,i[g+2])}let f=new xt;return f.setAttribute("position",new _t(s,3)),f.setAttribute("aB",new _t(r,4)),f.setAttribute("aC",new _t(o,3)),f.setAttribute("aK",new _t(l,1)),f.setIndex(new _t(a,1)),f.boundingBox=new _i(new H(p-4,m-1,x-4),new H(_+4,M+4,c+4)),f.boundingSphere=f.boundingBox.getBoundingSphere(new bi),f}var Xt=60,Vd=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],Kv=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],$v=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],js=32,Wd=[-.2,2.2,5.5,10,17,27,38],Ql=[.025,.026,.032],Jv=[.05,.05,.065],jv=new st,Ds=(i,e)=>(i%e+e)%e,Qs=(i,e)=>{let t=Sr(i);return!!t&&Math.abs(i-t.s)<e},ef=i=>Ds(i,4)===0,kw=i=>Ds(i,2)===0,Yd=1.4,Qv=i=>ef(i)?4.4:Yd+.9,Gd=i=>ef(i)?3.4:Yd-.1,qd=(i,e)=>Math.abs(i-Math.round(i/300)*300)<e,ki=(i,e)=>{let t=Ki(i);return!!t&&Math.abs(i-t.s)<e},di=(i,e)=>{let t=Zi(i);return!!t&&Math.abs(i-t.s)<e},Xd=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let l=n(r,o);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let l=s+r*t+o,a=l+1,u=l+t,h=u+1;this.I.push(l,a,u,a,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,l=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)l[u*o+h]=n(u,h-s);let a=(u,h)=>l[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let p=a(u,h-1),m=a(u,h+1),x=a(u-1,h),_=a(u+1,h),M=l[u*o+h],c=m[0]-p[0],f=m[1]-p[1],d=m[2]-p[2],g=_[0]-x[0],v=_[1]-x[1],b=_[2]-x[2],T=f*b-d*v,w=d*g-c*b,y=c*v-f*g;w<0&&(T=-T,w=-w,y=-y);let S=Math.hypot(T,w,y)||1;M[3]=T/S,M[4]=w/S,M[5]=y/S}this.grid(e,t,(u,h)=>l[u*o+h+s])}build(){let e=new xt;return e.setAttribute("position",new et(this.P,3)),e.setAttribute("normal",new et(this.N,3)),e.setAttribute("su",new et(this.SU,2)),e.setAttribute("zw",new et(this.ZW,4)),e.setAttribute("rk",new et(this.RK,2)),e.setAttribute("rv",new et(this.RV,1)),e.setAttribute("zs",new et(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},tf=class{constructor(e,t,n,s){this.path=t,this.M=n,this.riverMat=s,this.heapCache=new Map,this.group=new pn,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Xt),s=Math.floor((e+this.ahead)/Xt);for(let[o,l]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(l),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let l=o.pending.shift();l&&o.group.add(l),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let a=Math.max(0,n);a<=s;a++)if(!this.chunks.has(a)){l=a;break}if(l<0)return 0;l*Xt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let o=this.job.it.next();if(o.done){let l=o.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let l=o*Xt-e,a=r.group.children;for(let u=0;u<a.length;u++){let h=a[u],p=h.userData.detail;p&&(h.visible=p==="leaf"?l<s:l<t||n&&p==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Xt,s=n+Xt,r=t.at(n),o=r.x,l=r.z,a=Tt(Math.floor(_n(e,777)*4294967295)),u={atlas:new en({uv:!0,ao:!0,lit:!0}),color:new en({ao:!0}),foliage:new en,leaf:new en({uv:!0}),lamp:new en({color:!1}),sig:new en({color:!1}),sodium:new en({color:!1}),decal:new en({uv:!0}),pool:new en({uv:!0,color:!1}),gleaf:new en({uv:!0,off:!0}),gblossom:new en({uv:!0,off:!0}),tetra:new en({uv:!0,ao:!0,idx:!0}),bark:new en({uv:!0,ao:!0,idx:!0})},h=new Xd,p={rows:[],puffs:[]},m=[];u.lamps=[];let x={},_={},M=(E,C)=>{t.at(E,_);let P=Xn(E,"rw");return _.y+Ps(E,C,_.y,P)},c=E=>{let C=It(E);return[C.city,C.sakura,C.coast,C.country,C.snow]},f=(E,C,P)=>(t.at(E,x),[x.x+x.rx*C-o,P,x.z+x.rz*C-l]),d=(E,C,P,L=0,R=!0)=>{t.at(E,x);let I=x.h-Math.PI/2+(R&&C<0?Math.PI:0)+L,D=new st().makeRotationY(I);return D.setPosition(x.x+x.rx*C-o,P,x.z+x.rz*C-l),D.groundY=P,D},g=(E,C,P=0,L=0,R=!0)=>{let I=M(E,C),D=d(E,C,I+P,L,R);return D.groundY=I,D},v=E=>t.at(E,_).y,b=E=>Xn(E,"rw"),T=E=>{let C=It(E);return C.city+C.sakura>.5?C.city>=C.sakura?3:2.6:0};{let E=Zi(n+Xt/2),C=!!E&&E.s>n-40&&E.s<s+40,P=C?61:21,L=b(n+Xt/2),R=(()=>{let X=[0,...Kv].map(ie=>ie);return $v.forEach(ie=>X.push(ie-L)),X})(),I=[...R.slice().reverse().map(k=>-k),...R],D=I.length,F=Array.from({length:P},(k,X)=>n+X/(P-1)*Xt);{let k=Ki(n+Xt/2);if(k)for(let X of[k.s-bn,k.s+bn])X>n+.1&&X<s-.1&&F.push(X-.03,X+.03)}F.sort((k,X)=>k-X);let N=D/2,U=F.map(k=>(t.at(k,x),{s:k,f:{...x},rw:b(k),w:c(k),rb:C?Bg(k):0})),W=Math.round(N/2);for(let[k,X,ie,xe]of[[0,W,0,1],[W-1,N,1,0],[N,N+W+1,0,1],[N+W,D,1,0]])h.gridN(U.length,X-k,(Te,Ee)=>{let J=U[Te],Q=J.f,ye=k+Ee,Ie=I[ye],K=Ie===0&&J.w[2]>0?.15:0,ve=Ie<0||Ie===0&&ye<N?Ie-J.rw+K:Ie+J.rw-K,Oe=Q.y+Ps(J.s,ve,Q.y,J.rw),Ve=Math.abs(ve)>J.rw+.98?Math.min(1,Rh/.5):0;return[Q.x+Q.rx*ve-o,Oe,Q.z+Q.rz*ve-l,0,1,0,Ds(J.s,ai),ve,J.w[0],J.w[1],J.w[2],J.w[3],J.rw,0,J.rb>0?J.rb:-Ve,J.w[4]]},ie,xe),yield}yield,h.grid(31,2,(C,P)=>{let L=n+C/30*Xt,R=b(L),I=P?R:-R;t.at(L,x);let D=x.y,F=(v(L+1)-v(L-1))/2,N=-F*x.fx,U=1,W=-F*x.fz,k=Math.hypot(N,U,W),X=c(L);return[x.x+x.rx*I-o,D,x.z+x.rz*I-l,N/k,U/k,W/k,Ds(L,ai),I,X[0],X[1],X[2],X[3],R,1,0,X[4]]});{let E=[];for(let L=0;L<=30;L++){let R=n+L/30*Xt;E.push({s:R,sw:T(R)})}let C=[],P=null;for(let L of E)L.sw>0?(P||(P=[],C.push(P)),P.push(L)):P=null;for(let L of C)if(!(L.length<2))for(let R of[-1,1])h.grid(L.length,2,(I,D)=>{let{s:F,sw:N}=L[I],U=b(F),W=R*(D===(R>0?0:1)?U:U+N);t.at(F,x);let k=c(F);return[x.x+x.rx*W-o,x.y+.15,x.z+x.rz*W-l,0,1,0,Ds(F,ai),W,k[0],k[1],k[2],k[3],U,2,0,k[4]]}),h.grid(L.length,2,(I,D)=>{let{s:F}=L[I],N=b(F),U=R*N,W=R>0?D:1-D;t.at(F,x);let k=c(F);return[x.x+x.rx*U-o,x.y+(W?.15:0),x.z+x.rz*U-l,-R*x.rx,0,-R*x.rz,Ds(F,ai),U,k[0],k[1],k[2],k[3],N,3,0,k[4]]})}yield,yield*this.placePoles(e,n,s,a,u,d,M,f,v,b);{let E=Math.ceil((n-Kr)/Zr),C=ea(E);C<s&&Nl(C)&&(yield*this.placeCrossing(u,h,C,d,v,b,M,T,o,l));let P=Math.ceil((n-ta)/$r),L=od(P);L<s&&ad(L)&&(yield*this.placeRiver(u,h,L,d,v,b,M,T,o,l,a,m));let R=Ki(n+Xt/2);R&&R.s+ln>n&&R.s-ln<s&&(yield*this.placeTunnel(u,h,R,n,s,d,g,M,b,o,l,a))}yield;for(let E=n;E<s;E+=4){let C=mn(E);(C==="coast"&&It(E).coast>.45||C==="mountain"&&It(E).mountain>.45)&&!ki(E+2,ln+4)&&this.guardrail(u,E,Math.min(E+4,s),f,v,b)}yield*this.placeCity(u,a,n,s,d,g,v,b,T,M,h,o,l),yield*this.placeSakura(u,a,n,s,d,g,v,b,M),yield*this.placeCoast(u,a,e,n,s,d,g,b,p,f),yield,yield*this.placeCountry(u,a,n,s,d,g,v,b,M),yield*this.placeMountain(u,a,n,s,d,g,v,b,M),yield*this.placeSnow(u,a,n,s,d,g,v,b,M),yield*this.placeVerge(u,a,n,s,d,M,b,e,o,l),yield;let w=new pn,y=(E,C,P,L,R=0,I)=>{if(!E)return null;let D=new pt(E,C);return D.castShadow=P,D.receiveShadow=L,D.renderOrder=R,I&&(D.userData.detail=I),w.add(D),D},S=new Set;for(let E of[n,n+20,n+40,s]){let C=Mr(E);S.add(C.a),C.t>0&&S.add(C.b)}y(h.build(),Bl([...S]),!1,!0),yield;{let E=y(u.atlas.build(),this.M.atlas,!0,!0);E&&(E.customDepthMaterial=this.M.atlasDepth)}yield;{let E=y(u.color.build(),this.M.color,!0,!0);E&&(E.customDepthMaterial=Nh)}if(yield,y(u.tetra.build(),this.M.tetra,!0,!0),y(u.bark.build(),this.M.bark,!0,!0,0,"leaf"),yield,y(u.foliage.build(),this.M.foliage,!0,!0),y(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let E=y(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let E=y(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(yield,y(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),y(u.sig.build(),this.M.sig,!1,!1,0,"small"),y(u.sodium.build(),this.M.sodium,!1,!1),y(u.decal.build(),this.M.decal,!1,!0,1,"small"),y(u.pool.build(),this.M.pool,!1,!1,2,"light"),p.rows.length>1){let E=p.rows,C=Wd.length,P=E.length*C,L=new Float32Array(P*3),R=new Float32Array(P*2),I=new Float32Array(P*2),D=[];E.forEach((N,U)=>{for(let W=0;W<C;W++){let k=U*C+W,X=W*7;L.set(N.subarray(X,X+3),k*3),R[k*2]=N[X+3],R[k*2+1]=N[X+4],I[k*2]=N[X+5],I[k*2+1]=N[X+6]}if(U>0)for(let W=0;W<C-1;W++){let k=(U-1)*C+W,X=k+C;D.push(k,X,k+1,k+1,X,X+1)}});let F=new xt;F.setAttribute("position",new _t(L,3)),F.setAttribute("su",new _t(R,2)),F.setAttribute("hf",new _t(I,2)),F.setIndex(D),F.computeBoundingSphere(),y(F,this.M.shore,!1,!1,997)}p.puffs.length&&y(Zv(p.puffs),this.M.surf,!1,!1,2,"small");for(let E of m)y(E,this.riverMat,!1,!0);return w.position.set(o-this.origin.x,0,l-this.origin.z),{group:w,ox:o,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*js+6,n=mn(t);if(n==="sakura"||Qs(t,6)||di(t,34)||ki(t,ln+12))return null;let s=Xn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,l,a,u,h){let p=Math.ceil((t-6)/js),m=Math.floor((n-6-.001)/js);for(let x=p;x<=m;x++){let _=this.poleSpec(x);if(!_)continue;let M=_.z==="city"?u(_.s)+.15:l(_.s,_.u),c=o(_.s,_.u,M),f=Tt(Math.floor(_n(x,31)*4294967295)),d=bd(r,c,f,{trans:f()<.45});_.z==="city"&&x%2===0&&D1(r,c,-.11),x%2&&(yield);let g=this.poleSpec(x+1);if(g){let v=g.z==="city"?u(g.s)+.15:l(g.s,g.u),b=L1(o(g.s,g.u,v));r.color.setM(new st);let T=[];for(let w=0;w<d.length;w++){let y=d[w],S=b[w],E=.35+f()*.4+(w>=7?.3:0);T.push(E),r.color.wire([y.x,y.y,y.z],[S.x,S.y,S.z],E,w>=7?.022:.015,Ql,10)}if(_.z!=="coast"&&f()<.38){let w=Math.floor(f()*4),y=d[w],S=b[w],E=1+Math.floor(f()*4),C=.18+f()*.5;for(let P=0;P<E;P++){let L=Math.min(.92,C+P*(.018+f()*.025)),R=y.x+(S.x-y.x)*L,I=y.z+(S.z-y.z)*L,D=y.y+(S.y-y.y)*L-T[w]*4*L*(1-L);r.color.box(R-.07,D+.015,I-.07,R+.07,D+.19,I+.07,Jv),r.color.box(R-.045,D+.19,I-.045,R+.045,D+.27,I+.045,Jv)}}}if(_.z==="city"){r.color.setM(new st);let v=1+Math.floor(f()*3);for(let b=0;b<v;b++){let T=d[7+b%2],w=(f()-.5)*14,y=h(_.s+w),S=f()<.55,E=S?-(y+3.15):y+3.15,C=a(_.s+w,E,u(_.s+w)+5.2+f()*2.5);r.color.wire([T.x,T.y,T.z],C,.25+f()*.4,.012,Ql,8)}}}}*intersection(e,t,n,s,r,o,l,a,u,h,p){let m=this.path.at(n,{}),x=o(n),_=l(n),M=a(n)||3,c=n-.5,f=It(n),d=[f.city,f.sakura,f.coast,f.country],g=(w,y,S)=>[m.x+m.fx*(w-.5)+m.rx*y-h,S,m.z+m.fz*(w-.5)+m.rz*y-p],v=_+M+.15,b=ef(s),T=b?3:Yd;for(let w of[-1,1]){let y=w*(_+M),S=w*80;if(u.grid(21,2,(L,R)=>{let I=y+(S-y)*L/20,D=(R?-T:T)*w,F=g(D,I,x+.165);return[F[0],F[1],F[2],0,1,0,D*w,I,d[0],d[1],d[2],d[3],_,10]}),b){let L=w*(_+M+3.2),R=-w*1.35,I=1.15,D=.42,F=(N,U)=>g(R+w*N,L-w*U,x+.18);e.decal.setM(new st),e.decal.quad(F(-I,-D),F(I,-D),F(I,D),F(-I,D),[1,1,1],aa("tomare"))}for(let L of[-1,1]){let R=v+15+t()*3;for(;R<52;){let I=t.range(5.5,8.5),D=w*(R+I/2),F=t(),N=r(c+L*(T+.3),D,x+.14,L>0?Math.PI/2:-Math.PI/2,!1);es(e,N,t,{type:F<.5?"house":"shop",w:I,d:t.range(7,10),floors:F<.5?2:t.int(2,3),tint:t.pick(Ys),litP:.45,fence:0}),R+=I+t.range(.2,1.2),yield}yield}let E=[30,54].map(L=>r(c+T-.2,w*L,x+.15,-Math.PI/2,!1)),C=Tt(Math.floor(_n(s,w>0?71:73)*4294967295)),P=E.map(L=>bd(e,L,C,{trans:C()<.4}));e.color.setM(new st);for(let L=0;L<7;L++){let R=P[0][L],I=P[1][L];e.color.wire([R.x,R.y,R.z],[I.x,I.y,I.z],.3+C()*.4,.014,Ql,10)}}b&&(Pd(e,r(n-9,-(_+.55),x+.15,0,!0),1,_+.55-1.6),Pd(e,r(n+8,_+.55,x+.15,0,!0),1,_+.55-1.6),s%8===0&&J1(e,r(n+15,0,x,0,!1),_+M+.1,"hodokyo"+Math.abs(s/8)%3))}*placeCrossing(e,t,n,s,r,o,l,a,u,h){let p=this.path.at(n,{}),m=p.y,x=o(n),_=a(n),M=x+_+.2,c=150,f=m+.18,d=It(n),g=[d.city,d.sakura,d.coast,d.country],v=(I,D,F)=>[p.x+p.fx*I+p.rx*D-u,F,p.z+p.fz*I+p.rz*D-h],b=[7.6,4.7,-4.7,-7.6];for(let[I,D]of[[-c,-M],[M,c]])t.grid(25,b.length,(N,U)=>{let W=I+(D-I)*N/24,k=b[U],ie=Math.abs(k)<5?f:Math.min(f-.05,l(n+k,W)-.03),xe=v(k,W,ie);return[xe[0],xe[1],xe[2],0,1,0,k,W,g[0],g[1],g[2],g[3],x,5]});let T=(I,D,F)=>t.grid(2,2,(N,U)=>{let W=N?D:I,k=U?-3.3:3.3,X=v(k,W,F);return[X[0],X[1],X[2],0,1,0,k,W,g[0],g[1],g[2],g[3],x,6]});T(-x,x,m+.03),_>0&&(T(-M,-x,m+.165),T(x,M,m+.165));let w=(I,D,F,N)=>t.grid(2,2,(U,W)=>{let k=U?N:F,X=W?D:I,ie=v(X,k,m+.025);return[ie[0],ie[1],ie[2],0,1,0,X,k,g[0],g[1],g[2],g[3],x,7]});w(-7.15,-7.6,-x+.3,-.12),w(7.6,7.15,.12,x-.3),yield;let y=s(n,0,m,-Math.PI/2,!1),S=e.color;S.setM(y);let E=[.42,.4,.38],C=[.3,.29,.28],P=[.55,.57,.6];for(let I of[-2,2])for(let D of[-.5335,.5335]){let F=-(I+D);for(let[N,U]of[[-c,-M],[M,c]])S.box(N,.26,F-.035,U,.34,F+.035,E);S.box(-M,0,F-.035,M,.04,F+.035,C)}let L=[-146,-104,-64,-26,26,64,104,146];for(let I of L){for(let D of[-4.95,4.95])S.box(I-.12,.18,D-.12,I+.12,7.4,D+.12,P);S.box(I-.1,6.95,-5.15,I+.1,7.2,5.15,P);for(let D of[-2,2])S.box(I-.04,6.3,-D-.04,I+.04,6.95,-D+.04,P)}for(let I of[-2,2])for(let D=0;D<L.length-1;D++)S.wire([L[D],5.35,-I],[L[D+1],5.35,-I],.05,.011,Ql,6),S.wire([L[D],6.4,-I],[L[D+1],6.4,-I],.45,.011,Ql,8);yield;let R=Math.round((n-Kr)/Zr);if(d.country>.9&&_n(R,17)<.7){let I=_n(R,19)<.5?-1:1,D=I>0?x+9:-(x+9+46),F=I>0?x+9+46:-(x+9);j1(e,y,D,F,I*(x+9),Math.abs(R)%4,Tt(Math.floor(_n(R,23)*4294967295))),S.setM(y)}yield;for(let I of Uh(this.path,n)){let D=new st().makeRotationY(I.yaw);D.setPosition(I.x-u,I.y,I.z-h),tv(e,D)}Er(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85),Er(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n,{}),_=x.y,M=o(n),c=a(n),f=It(n),d=[f.city,f.sakura,f.coast,f.country],g=f.sakura>.5,v=222,b=M+c+.5,T=_-Fl,w=(R,I,D)=>[x.x+x.fx*R+x.rx*I-u,D,x.z+x.fz*R+x.rz*I-h];{let R=[],I=[],D=[];for(let U=0;U<=74;U++){let W=-v+2*v*U/74;for(let k of[14.3,-14.3]){let X=w(k,W,T);R.push(X[0],X[1],X[2]),I.push(k,W)}if(U>0){let k=(U-1)*2;D.push(k,k+1,k+2,k+1,k+3,k+2)}}let N=new xt;N.setAttribute("position",new et(R,3)),N.setAttribute("su",new et(I,2)),N.setIndex(D),N.computeBoundingSphere(),m.push(N)}for(let[R,I]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,F]of[[-v,-(M+3.4)],[M+3.4,v]])t.grid(41,2,(N,U)=>{let W=D+(F-D)*N/40,k=U?I:R,X=w(k,W,_+.38);return[X[0],X[1],X[2],0,1,0,k,W,d[0],d[1],d[2],d[3],M,9,1]});yield;let y=s(n,0,_,0,!1),S=e.color,E=[.74,.73,.7],C=g?[.78,.2,.15]:[.55,.72,.64];S.setM(y),S.box(-24.5,-1,-b,24.5,-.03,b,E,null,{noBottom:!1});for(let R of[-1,1])S.box(-24.5,-1.3,R>0?b-.35:-b,24.5,-.95,R>0?b:-b+.35,[.62,.61,.58]);for(let R of[-8,8])S.box(R-.7,-Fl-1.4,-b+.6,R+.7,-1,b-.6,E);for(let R of[-25.7,25.7])S.box(R-1.2,-Fl+.4,-b-.4,R+1.2,-.05,b+.4,E);for(let R of[-24.5,24.5])S.box(R-.16,.004,-M,R+.16,.016,M,[.33,.32,.31]),S.box(R-.02,.016,-M,R+.02,.02,M,[.2,.19,.19]);let P=c>0?.15:0;for(let R of[-1,1]){let I=R*(b-.14);for(let D=-24;D<=24.01;D+=2)S.box(D-.06,P,I-.06,D+.06,P+1,I+.06,C);S.box(-24,P+.95,I-.08,24,P+1.08,I+.08,C),S.box(-24,P+.48,I-.03,24,P+.54,I+.03,C),S.box(-24,P+.06,I-.03,24,P+.12,I+.03,C)}let L="bridge"+Math.abs(Math.round(n/$r))%4;for(let R of[-25,25])for(let I of[-1,1]){let D=I*(b-.1),F=[.7,.69,.65];S.box(R-.32,P,D-.32,R+.32,P+1.45,D+.32,F),S.box(R-.38,P+1.45,D-.38,R+.38,P+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(y);let N=(R<0?-1:1)*.325,U=L;R<0?e.atlas.quad([R-.325,P+.3,D-.22],[R-.325,P+.3,D+.22],[R-.325,P+1.3,D+.22],[R-.325,P+1.3,D-.22],[1,1,1],aa(U)):e.atlas.quad([R+.325,P+.3,D+.22],[R+.325,P+.3,D-.22],[R+.325,P+1.3,D-.22],[R+.325,P+1.3,D+.22],[1,1,1],aa(U)),S.setM(y)}Hl(e,s(n-14,-(b-.45),_+P,0,!0)),Hl(e,s(n+14,b-.45,_+P,0,!0)),yield;{e.atlas.setM(new st);let R=aa("gogan"),I=2.4,D=150;for(let F of[-1,1])for(let N=-D;N<D-.01;N+=I){let U=N+I,W=w(F*13.9,N,T-.12),k=w(F*13.9,U,T-.12),X=w(F*16.05,U,T+.72),ie=w(F*16.05,N,T+.72),xe=(k[1]-W[1])*(ie[2]-W[2])-(k[2]-W[2])*(ie[1]-W[1]),Te=(k[0]-W[0])*(ie[1]-W[1])-(k[1]-W[1])*(ie[0]-W[0]),Ee=w(0,(N+U)/2,T),J=xe*(Ee[0]-W[0])+Te*(Ee[2]-W[2])>0,Q={u0:R.u0,u1:R.u1,v0:R.v0,v1:R.v1};J?e.atlas.quad(W,k,X,ie,[1,1,1],Q):e.atlas.quad(k,W,ie,X,[1,1,1],{u0:R.u1,u1:R.u0,v0:R.v0,v1:R.v1})}for(let F of[-1,1])for(let N of[-1,1])for(let U=14+p()*3;U<125;U+=p.range(2.4,5)){if(p()<.35)continue;let W=F*(16.2+p()*1.1),k=N*U,X=1+(p()<.4?1:0);for(let ie=0;ie<X;ie++){let xe=w(W+F*p()*.6,k+(p()-.5)*.9,T+.7),Te=new st().makeRotationY(p()*6.28);Te.setPosition(xe[0],xe[1],xe[2]),Ad(e,Te,p,"grass",p.range(1.9,2.8))}}}yield;for(let R of[-18,18])for(let I of[-1,1]){yield;for(let D=11+p()*4;D<(g?125:170);D+=g?p.range(8.5,11):p.range(18,34)){let F=n+R+(p()-.5)*1.5,N=I*D;$n(e,s(F,N,l(F,N),p()*6,!1),g?"sakura":"broad",p,g?p.range(1,1.25):p.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n.s,{}),_=x.y,M=u(n.s),c=M+1.4,f=It(n.s),d=[f.city,f.sakura,f.coast,f.country],g=o(n.s,0,_,0,!1),v=e.color,b=Math.max(s,n.s-bn)-n.s,T=Math.min(r,n.s+bn)-n.s;if(T>b+.01){let U=Math.max(2,Math.ceil((T-b)/3)+1),W=[-(M+1.5),-M,-M*.5,0,M*.5,M,M+1.5];t.gridN(U,W.length,(Q,ye)=>{let Ie=b+(T-b)*Q/(U-1),K=n.s+Ie,ve=W[ye],Oe=_+Ph(Ie,ve);return[x.x+x.fx*Ie+x.rx*ve-h,Oe,x.z+x.fz*Ie+x.rz*ve-p,0,1,0,Ds(K,ai),ve,d[0],d[1],d[2],d[3],M,0,-1]});let k=[[-M,0],[-M,.2],[-c,.2],[-c,3.2]];for(let Q=1;Q<12;Q++){let ye=Math.PI*(1-Q/12);k.push([c*Math.cos(ye),3.2+3*Math.sin(ye)])}k.push([c,3.2],[c,.2],[M,.2],[M,0]);let X=[.86,.82,.72],ie=[.44,.45,.47],xe=[.62,.61,.58],Te=[];for(let Q=b;Q<T-.01;Q+=6)Te.push(Q);Te.push(T),v.setM(g);for(let Q=0;Q<Te.length-1;Q++)for(let ye=0;ye<k.length-1;ye++){let[Ie,K]=k[ye],[ve,Oe]=k[ye+1],Ve=Math.max(K,Oe)<=.21?xe:Math.abs(Ie)>c-.01&&Math.abs(ve)>c-.01?X:ie;v.quad([Te[Q],K,Ie],[Te[Q+1],K,Ie],[Te[Q+1],Oe,ve],[Te[Q],Oe,ve],Ve)}e.sodium.setM(g),e.sig.setM(g);let Ee=c*Math.cos(Math.PI/6)-.12,J=3.2+3*Math.sin(Math.PI/6)-.08;for(let Q=Math.ceil((b+bn-3)/6)*6+3-bn;Q<T;Q+=6)for(let ye of[-1,1])e.sodium.box(Q-.45,J-.07,ye*Ee-.13,Q+.45,J+.07,ye*Ee+.13,null),Tr(e,g,Q,J-.1,ye*Ee,1);for(let Q=Math.ceil((b+bn)/24)*24-bn;Q<T;Q+=24)e.sig.box(Q-.3,.95,-c+.01,Q+.3,1.2,-c+.06,null);for(let Q=Math.ceil((b+bn-30)/60)*60+30-bn;Q<T;Q+=60)for(let ye of[-1.15,1.15])v.box(Q-1.1,5.2,ye-.36,Q+1.1,5.78,ye+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),v.box(Q-.08,5.78,ye-.05,Q+.08,6.15,ye+.05,[.4,.4,.42]);yield}let w=(U,W)=>{let k=Math.sin(U*12.9898+W*78.233+n.k*37.719)*43758.5453;return k-Math.floor(k)},y=(U,W,k)=>[U[0]+(W[0]-U[0])*k,U[1]+(W[1]-U[1])*k,U[2]+(W[2]-U[2])*k],S=[.5,.5,.47],E=[.55,.53,.47],C=[.6,.6,.57],P=[.58,.58,.55],L=[.42,.42,.4],R=(U,W)=>{let k=w(U,W);return I?y([.26,.29,.08],[.42,.3,.09],k):y([.22,.29,.08],[.36,.36,.12],k)},I=f.mountain>.5,D=c+2.6,F=2.6;for(let U of[-1,1]){let W=n.s+U*bn,k=U*(bn+.08);if(W<s||W>=r)continue;let X=[];for(let oe of Kv)oe>=1.44&&X.push(M+oe,-(M+oe));for(let oe of $v)oe>M+3.5&&oe<M+21&&X.push(oe,-oe);for(let oe=0;oe<=24;oe++)X.push(-c+2*c*oe/24);X.push(-c-.01,c+.01,-D,D),X.sort((oe,O)=>oe-O);let ie=oe=>3.2+3*Math.sqrt(Math.max(0,1-(oe/c)**2)),xe=oe=>Math.max(a(W-U*.03,oe)-_,Ph(U*(bn-.03),oe)),Te=oe=>Math.abs(oe)<=c+1e-6?ie(oe):a(W+U*.03,oe)-_,Ee=8.4;for(let oe of X)Math.abs(oe)<=D&&(Ee=Math.min(Ee,xe(oe)-.4));let J=Ee>6.6;v.setM(g);let Q=U,ye=(oe,O,A,z,G,q,j,te)=>{let $=[k,A,oe],re=[k,z,O],ae=[k,q,O],ge=[k,G,oe],fe=U<0?[$,re,ae,ge]:[re,$,ge,ae],_e=U<0?[j,j,te,te]:[j,j,te,te];for(let de of[0,1,2,0,2,3])v.vtx(fe[de][0],fe[de][1],fe[de][2],Q,0,0,0,0,_e[de])},Ie=(oe,O,A)=>oe+(O-oe)*A;for(let oe=0;oe<X.length-1;oe++){let O=X[oe],A=X[oe+1];if(A-O<1e-4)continue;let z=xe(O),G=xe(A),q=Te(O),j=Te(A);if(z-q<.01&&G-j<.01)continue;let te=(O+A)/2,$=J&&Math.abs(te)<D,re=q,ae=j;if($){let de=y(S,[.46,.46,.44],w(Math.floor(te/2.4),3.1)),Be=.8+2.6*w(Math.floor(te/.8),7.7),ke=y(de,[.27,.27,.26],.35+.3*w(Math.floor(te/.8),9.9)),Z=Math.min(Ee,z),Pe=Math.min(Ee,G),pe=Math.max(q,Z-Be),Ue=Math.max(j,Pe-Be);if(Math.abs(te)>c){let We=Math.min(pe,q+.9),Re=Math.min(Ue,j+.9);ye(O,A,q,j,We,Re,y(de,[.25,.29,.18],.45),de),ye(O,A,We,Re,pe,Ue,de,de)}else ye(O,A,q,j,pe,Ue,de,de);if(ye(O,A,pe,Ue,Z,Pe,de,ke),re=Z,ae=Pe,z-Z<.01&&G-Pe<.01)continue}let ge=Math.floor(te/F),fe=re,_e=ae;for(let de=Math.floor(Math.min(fe,_e)/F)+1;fe<z-.01||_e<G-.01;de++){let Be=de*F,ke=Math.min(z,Math.max(fe,Be)),Z=Math.min(G,Math.max(_e,Be)),Pe=R(ge,de);if(ye(O,A,fe,_e,ke,Z,y(Pe,[.2,.22,.1],.25),Pe),fe=ke,_e=Z,de>60)break}}let K=Math.min(k,k+U*.12),ve=Math.max(k,k+U*.12),Oe=oe=>{for(let O=0;O<X.length-1;O++)if(oe>=X[O]&&oe<=X[O+1]&&X[O+1]>X[O]){let A=(oe-X[O])/(X[O+1]-X[O]);return[Ie(Te(X[O]),Te(X[O+1]),A),Ie(xe(X[O]),xe(X[O+1]),A)]}return null},Ve=X[0],Ge=X[X.length-1];for(let oe=Math.ceil(Ve/F)*F;oe<Ge;oe+=F){let O=Oe(oe);if(!O)continue;let A=(J&&Math.abs(oe)<D?Math.max(Ee+.3,O[0]):O[0])+.05,z=O[1]-.05;z-A>.4&&!(Math.abs(oe)<=c+.3&&!J)&&v.box(K,A,oe-.14,ve,z,oe+.14,E)}for(let oe=1;oe<60;oe++){let O=oe*F,A=null,z=()=>{A&&A[1]-A[0]>.3&&v.box(K,O-.14,A[0],ve,O+.14,A[1],E),A=null},G=!1;for(let q=0;q<X.length-1;q++){let j=X[q],te=X[q+1];if(te-j<1e-4)continue;let $=(j+te)/2,re=Math.max(Te(j),Te(te),J&&Math.abs($)<D?Ee+.3:-1e9),ae=Math.min(xe(j),xe(te));O>re+.2&&O<ae-.2?(G=!0,A?A[1]=te:A=[j,te]):z()}if(z(),!G&&O>30)break}J&&v.box(Math.min(k,k+U*.32),Ee-.05,-D,Math.max(k,k+U*.32),Ee+.3,D,C);let Ze=k+U*.32,ot=oe=>-c+2*c*oe/24,ct=oe=>[ot(oe),ie(ot(oe))],Me=oe=>[ot(oe)*1.12,ie(ot(oe))+.6];for(let oe=0;oe<24;oe++){let[O,A]=ct(oe),[z,G]=ct(oe+1),[q,j]=Me(oe),[te,$]=Me(oe+1);U<0?v.quad([Ze,A,O],[Ze,G,z],[Ze,$,te],[Ze,j,q],P):v.quad([Ze,G,z],[Ze,A,O],[Ze,j,q],[Ze,$,te],P),U<0?v.quad([k,A,O],[k,G,z],[Ze,G,z],[Ze,A,O],L):v.quad([k,G,z],[k,A,O],[Ze,A,O],[Ze,G,z],L),U<0?v.quad([k,$,te],[k,j,q],[Ze,j,q],[Ze,$,te],P):v.quad([k,j,q],[k,$,te],[Ze,$,te],[Ze,j,q],P)}for(let oe of[-1,1])v.box(Math.min(k,Ze),.2,oe>0?c:-c*1.12,Math.max(k,Ze),3.2,oe>0?c*1.12:-c,P);e.atlas.setM(g);let De=1.9,Ne=7.05,Ae=7.85,V=k+U*.03,He=aa("tunnel"+(f.coast>.5?1:Math.abs(n.k)%2?2:0));U<0?e.atlas.quad([V,Ne,-De],[V,Ne,De],[V,Ae,De],[V,Ae,-De],[1,1,1],He):e.atlas.quad([V,Ne,De],[V,Ne,-De],[V,Ae,-De],[V,Ae,De],[1,1,1],He)}yield;let N=f.mountain>.5;for(let U=Math.max(s,n.s-ln*.95)+m()*3;U<Math.min(r,n.s+ln*.95);U+=m.range(4,8)){let W=Math.abs(U-n.s)>bn-4?17:4;for(let k of[-1,1]){let X=k*(M+m.range(W,50)),ie=m();$n(e,l(U,X,-.3,m()*6,!1),N?ie<.5?"maple":ie<.8?"cedar":"ginkgo":ie<.65?"pine":"broad",m,m.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,l,a,u){let h=p=>It(p).snow;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*20;m<s;m+=t.range(22,40)){if(h(m)<.6||t()<.5)continue;let x=p*t.range(18,90);es(e,o(m,x,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Ys),litP:.62,fence:0,snow:!0});for(let _=0;_<2+t()*3;_++)$n(e,o(m+t.range(-9,9),x+p*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let m=n+t()*5;m<s;m+=t.range(3,7))h(m)<.5||(t()<.32&&$n(e,o(m,p*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&$n(e,o(m,p*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let p=Math.ceil(n/36)*36;p<s;p+=36){if(h(p)<.55)continue;let m=a(p);{let x=r(p,-(m+.95),l(p)+1.3),_=r(p+18,m+.95,l(p+18)+1.3);x.groundY=l(p),_.groundY=l(p+18),Td(e,x,1),Td(e,_,-1)}}}}*placeMountain(e,t,n,s,r,o,l,a,u){let h=p=>It(p).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(4.5,8.5)){if(h(m)<.45||ki(m,ln+6))continue;let x=a(m),_=t();if(p>0){let M=_<.5?"maple":_<.72?"ginkgo":"cedar";$n(e,o(m,x+t.range(17,70),-.25,t()*6,!1),M,t,t.range(.9,1.3))}else{let M=_<.55?"maple":_<.8?"cedar":"ginkgo";$n(e,o(m,-(x+t.range(3.5,34)),-.25,t()*6,!1),M,t,t.range(.95,1.35))}}yield}for(let p=n+t()*4;p<s;p+=t.range(3,6)){if(h(p)<.5)continue;let m=t()<.7,x=-(a(p)+(m?t.range(108,205):t.range(36,100)));$n(e,o(p,x,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new st);for(let p=Math.ceil(n/10)*10;p<s;p+=10){if(h(p)<.5||ki(p,ln+4))continue;let m=a(p),x=r(p,-(m+.95),l(p));B1(e,x)}for(let p=Math.ceil(n/14)*14;p<s;p+=14){if(h(p)<.6)continue;let m=this.path.curv(p);if(Math.abs(m)<1/230)continue;let x=a(p);m>0?Er(e,r(p,x+.42,l(p)),"chev_l",-1,1.25,.58):Er(e,r(p,-(x+1.15),l(p)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,l){let a=this.path,u={},h=Tt(Math.floor(_n(t,1789)*4294967295)),p=H1(),m=Math.floor((n+Xt/2)/600)*600+300,x=Math.floor((n+Xt/2)/700)*700+120,_=Math.floor((n+Xt/2)/380)*380+190,M=_n(Math.round(_),5)<.5?-1:1;for(let g of[-1,1]){e.leaf.setM(jv);for(let v=n+h()*p;v<s;v+=p*h.range(.75,1.25)){if(mn(v)!=="country"||Qs(v,10)||di(v,31)||g<0&&(Math.abs(v-m)<2.9||v>x-1.3&&v<x+2.7)||g===M&&Math.abs(v-_)<1.6)continue;a.at(v,u);let b=l(v),T=g*(b+.95+(h()-.5)*.36),w=u.y+Ps(v,T,u.y,b),y=(h()-.5)*.8,S=Math.cos(y)*g,E=Math.sin(y)*g;Rd(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,h,h.range(.85,1.15))}yield}let c=Tt(Math.floor(_n(t,1811)*4294967295)),f=p>1?p*1.35:p;e.leaf.setM(jv);for(let g=n+c()*f;g<s;g+=f*c.range(.75,1.25)){if(It(g).coast<.6||ki(g,ln+6))continue;let v=g-6-Math.round((g-6)/js)*js;if(Math.abs(v)<.9||Math.abs(g-(n+12))<.8)continue;a.at(g,u);let b=l(g),T=b+.95+(c()-.5)*.3,w=u.y+Ps(g,T,u.y,b),y=(c()-.5)*.8,S=Math.cos(y),E=Math.sin(y);Rd(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,c,c.range(.62,.85),"bankC")}for(let g=n+c()*14;g<s;g+=c.range(14,30)){if(It(g).coast<.6||ki(g,ln+6))continue;let v=g-6-Math.round((g-6)/js)*js;if(Math.abs(v)<1.4||Math.abs(g-(n+12))<1.2)continue;a.at(g,u);let b=l(g),T=b+c.range(1.3,2.3),w=u.y+Ps(g,T,u.y,b),y=new st().makeRotationY(c()*6.28);y.setPosition(u.x+u.rx*T-r,w,u.z+u.rz*T-o),Xh(e,y,c,c.range(1.1,1.4))}let d=Tt(Math.floor(_n(t,2417)*4294967295));for(let g of[-1,1])for(let v=n+d()*8;v<s;v+=d.range(8,14)){if(It(v).sakura<.6||di(v,31))continue;let b=1+Math.floor(d()*3),T=g*(l(v)+2.95+d()*.4);a.at(v,u);let w=u.y+Ps(v,T,u.y,l(v));for(let y=0;y<b;y++){let S=y*.75+d()*.25,E=T+g*(d()-.5)*.3,C=new st().makeRotationY(d()*6.28);C.setPosition(u.x+u.fx*S+u.rx*E-r,w,u.z+u.fz*S+u.rz*E-o),d()<.5?Xh(e,C,d,d.range(1.05,1.35)):Vl(e,C,d,d.range(.45,.6))}}}*placeVerge(e,t,n,s,r,o,l,a,u,h){yield*this.placeBanks(e,a,n,s,u,h,l);for(let p of[-1,1]){for(let m=n+t()*1.2;m<s;m+=t.range(.55,1.5)){if(Qs(m,10)||di(m,31)||ki(m,ln+4))continue;let x=mn(m),_=l(m),M,c,f=.22,d=1;if(x==="country")M=_+t.range(2.05,2.8),c=.25,f=.35;else if(x==="sakura")M=_+2.68+t()*1.3,c=.55,f=.3;else if(x==="coast"){if(p<0)continue;M=_+.95+t()*1.7,c=.75,f=.18}else{if(x==="snow")continue;if(x==="mountain")M=p<0?_+1+t()*.35:_+.25+t()*.2,c=p<0?.55:.18,f=.12,d=.85;else{if(qd(m,5))continue;M=_+3.02+t()*.1,c=.1,f=.08,d=.65}}if(t()>c)continue;let g=p*M;Ad(e,r(m,g,o(m,g),t()*6.28,!1),t,t()<f?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new st);let l=Math.max(1,Math.round((n-t)/2)),a=Ce.rail,u=[.62,.64,.66],h=[.74,.76,.79],p=[.95,.55,.16];for(let m=0;m<l;m++){let x=t+(n-t)*m/l,_=t+(n-t)*(m+1)/l,M=-(o(x)+.95),c=-(o(_)+.95),f=r(x),d=r(_);for(let v=0;v<Vd.length-1;v++){let[b,T]=Vd[v],[w,y]=Vd[v+1];e.color.quad(s(x,M+T,f+b),s(_,c+T,d+b),s(_,c+y,d+w),s(x,M+y,f+w),a)}e.color.quad(s(_,c+.05,d+.5),s(x,M+.05,f+.5),s(x,M+.05,f+.84),s(_,c+.05,d+.84),u),e.color.noShadow=!0;let g=s(x,M-.04,f);if(e.color.cyl(g[0],f,g[2],.055,.055,.8,6,h,!1),Math.round(x/2)%2===0){let v=s(x,M+.035,f+.64),b=s(x+.09,M+.035,f+.64);e.color.quad(b,v,[v[0],v[1]+.07,v[2]],[b[0],b[1]+.07,b[2]],p)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,l,a,u,h,p,m,x){for(let c of[-1,1]){let f=n+t()*2;for(;f<s-2;){{let I=It(f);if(I.city<.62||I.mountain>.1){f+=4;continue}}{let I=Sr(f+6);if(I&&f<I.s+8.5&&f+14>I.s-8.5){f=Math.max(f+1,I.s+8.5);continue}}let d=2*Math.round(f/300),g=d*150;if(f>g-Qv(d)&&f<g+Gd(d)){f=g+Gd(d)+.05;continue}let v=a(f),b=u(f)||3,T=v+b+.15,w=t(),y=f<420||w<.84?"machiya":w<.89?"shop":w<.93?"apt":w<.96?"konbini":"house",S=y==="shop"?t.range(5,9):y==="machiya"?t.range(6,9.5):y==="apt"?t.range(10,16):y==="house"?t.range(7,9.5):t.range(12,14);if(f+S>s){if(s-f<5||y==="konbini")break;S=s-f-.2}{let I=f<g?d:d+2,D=I*150-Qv(I);if(f+S>D-.1){if(D-.1-f<4){f=I*150+Gd(I)+.05;continue}S=D-.1-f}}let E=f+S/2,C=l(E),P=t.pick(Ys),L=.42,R=y==="machiya"&&t()<.6;{let I=r(E,c*T,C+.15),D={type:y,w:S,at:E,side:c,d:y==="apt"?t.range(10,14):t.range(8,12),floors:y==="shop"?t.int(2,4):y==="machiya"?t()<.7?2:3:y==="apt"?t.int(4,9):2,tint:R?yd[Math.floor(t()*yd.length)]:P,litP:L,plaster:R,fence:y==="house"&&t()<.5?1.2:0};if(es(e,I,t,D),y!=="house"&&t()<.28&&Sd(e,r(E+(t()-.5)*(S-1.2),c*(T-.42),C+.15),t),(y==="shop"||y==="konbini"||y==="machiya")&&t()<.3)for(let F=0;F<1+t()*3;F++)N1(e,r(E-S/2+.8+F*.55,c*(T-.75),C+.15,Math.PI/2+.1),t);if(y==="house"&&t()<.6)for(let F=0;F<2+t()*3;F++)wd(e,r(E+1+F*.5,c*(T-.3),C+.15),t);if(t()<.03)for(let F=0;F<3;F++)F1(e,r(E+F*.9,c*(v+.35),C))}f+=S+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(It(d).city<.7||It(d).mountain>.1||t()<.3||Qs(d,18)||qd(d,15))continue;let g=a(d),v=r(d,c*(g+3.2+t.range(14,20)),l(d)+.1);es(e,v,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Ys),litP:.4})}if(It(n+30).city>.7&&It(n+30).mountain<.1&&t()<.65){let d=n+t()*Xt;if(Qs(d,24)||qd(d,20))continue;let g=r(d,c*t.range(55,150),l(d));es(e,g,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Ys),litP:.45})}}let _=Math.ceil(n/150),M=Math.floor((s-.01)/150);for(let c=_;c<=M;c++){let f=c*150;if(!kw(c)||mn(f)!=="city"||It(f).mountain>.1)continue;let d=a(f);yield*this.intersection(e,t,f,c,r,l,a,u,p,m,x),ef(c)&&(Er(e,r(f-1,-(d+.4),l(f)+.15),"sign_blue",1),Er(e,r(f-6,-(d+.4),l(f)+.15),"sign_stop",1,2.1,.75),Ed(e,r(f+7,d+.4,l(f)+.15),-1),c%8===4&&Er(e,r(f+20,-(d+.4),l(f)+.15),"sign_speed",1))}}houseGarden(e,t,n,s,r,o,l,a,u,h){let p=o.ww/2;if(a)for(let m=-p-.6;m<p+.6;m+=t.range(1.2,1.9)){if(Math.abs(m)<.9&&a===1&&t()<.7)continue;let x=l(n+m,s-r*t.range(1.1,1.7),0,t()*6,!1);a===2&&t()<.6?Vl(e,x,t,t.range(.75,1)):U1(e,x,t,t.range(.5,.75))}for(let m=0;m<u;m++){let x=(m%2?-1:1)*(t()<.5?1:-1);$n(e,l(n+x*(p+t.range(3.2,5.5)),s+r*t.range(1,o.wd),0,t()*6),"broad",t,t.range(.9,1.25))}for(let m=0;m<h;m++)$n(e,l(n+t.range(-p-2,p+2),s+r*(o.wd+t.range(3.5,7)),0,t()*6),"broad",t,t.range(.95,1.3))}*placeSakura(e,t,n,s,r,o,l,a,u){let h=Tt(Math.floor(_n(Math.round(n/Xt),2423)*4294967295));for(let x of[-1,1]){for(let _=n+t()*4;_<s;_+=t.range(7.5,10)){if(It(_).sakura<.45||di(_,30))continue;let M=a(_);if($n(e,o(_,x*(M+3.7),0,$i.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),It(_).sakura>.6&&h()<.65)for(let c=0,f=2+(h()<.4?1:0),d=h()*6.28;c<f;c++){let g=d+c/f*6.28+(h()-.5)*1.2,v=h.range(.75,1.15),b=Math.max(M+2.9,M+3.7+Math.sin(g)*v*.8),T=o(_+Math.cos(g)*v,x*b,0,h()*6.28,!1);h()<.6?Xh(e,T,h,h.range(1.2,1.55)):Vl(e,T,h,h.range(.5,.65))}t()<.45&&$n(e,o(_+3,x*(M+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let _=n+(x>0?0:12);_<s;_+=24){if(mn(_)!=="sakura"||di(_,30))continue;let M=a(_);Hl(e,r(_,x*(M+2.25),l(_)+.15)),Ds(_,48)<24&&nv(e,r(_+6,x*(M+3),u(_+6,x*(M+3))))}for(let _=n+t()*15;_<s;_+=t.range(14,24)){if(mn(_)!=="sakura"||t()<.35||di(_,45))continue;let M=a(_),c=Yh("sakura",t);if(!c){es(e,o(_,x*(M+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Ys),litP:.45,fence:t()<.6?1.4:0});continue}let f=x*(M+t.range(19,26)),d=t()<.45?1.4:0;es(e,o(_,f),t,{type:"house",w:c.ww,d:c.wd,ptype:c,fence:d}),this.houseGarden(e,t,_,f,x,c,o,d?0:1,0,0)}}let m=Math.floor((n+Xt/2)/480)*480+240;m>=n&&m<s&&mn(m)==="sakura"&&!di(m,60)&&Id(e,r(m,0,l(m),0,!1),a(m)+1.6,6.4)}coastWall(e){return It(e).coast>=.7&&!ki(e,ln+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=Tt(Math.floor(_n(e,5501)*4294967295)),s=e*Xt,r=s+Xt;for(let o=s+1+n()*12;o<r-3;o+=n.range(12,26)){let l=n.range(1.25,1.5),a=n.range(4.5,11),u=n()<.4?3:2,h=Math.min(o+a,r-.5);!this.coastWall(o)||!this.coastWall(h)||t.push({sa:o,sb:h,L:l,rows:u,dOut:(.8+(u-1)*1.45+.95)*l})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,s,r,o,l,a,u,h){let p=this.path,m={},x=this.coastHeaps(n),_=Tt(Math.floor(_n(n,5507)*4294967295)),M=Ds(s,ai)-s;for(let w of x){let y=w.L;for(let E=0;E<w.rows;E++){let C=.8*y+E*1.45*y,P=(E===0?.28:E===1?0:-.3)*y;for(let L=w.sa+_()*.7*y;L<w.sb;L+=1.5*y*_.range(.88,1.12)){let R=a(L),I=h(L,-(R+Dl+C+(_()-.5)*.45*y),0);if(Ld(e,I[0],gs+P+(_()-.5)*.3*y,I[2],_,y*_.range(.92,1.08),gs-.7,E===0?.8:.45,L+M),E===0&&w.rows>1&&_()<.4){let D=h(L+.7*y,-(R+Dl+C+.72*y),0);Ld(e,D[0],gs+1.05*y,D[2],_,y*_.range(.9,1),gs-.7,.6,L+M)}}}let S=Math.max(3,Math.round(pa.n*(w.sb-w.sa+2)/7));for(let E=0;E<S;E++){let C=w.sa+(w.sb-w.sa)*(E+.5)/S+(_()-.5)*1.4,P=a(C);p.at(C,m);let L=h(C,-(P+Dl+w.dOut*(.8+.3*_())-.2),gs+.35);u.puffs.push(L[0],L[1],L[2],-m.rx,-m.rz,w.dOut,_(),C+M)}yield}let c=[...this.coastHeaps(n-1),...x,...this.coastHeaps(n+1)],f=Ds(s,ai),d=[];for(let w=0;w<=10;w++)d.push(s+w*6);for(let w of c)for(let y of[w.sa-3.2,w.sa-.4,w.sb+.4,w.sb+3.2])y>s+.5&&y<r-.5&&d.push(y);d.sort((w,y)=>w-y);for(let w=0;w<d.length;w++){let y=d[w];if(w>0&&y-d[w-1]<.6)continue;if(!this.coastWall(y)){if(u.rows.length)break;continue}let S=1;for(let P=1;P<=3;P++)if(!this.coastWall(y-2*P)||!this.coastWall(y+2*P)){S=(P-1)/3;break}let E=a(y),C=new Float32Array(Wd.length*7);Wd.forEach((P,L)=>{let R=h(y,-(E+Dl+P),gs+.03),I=0;for(let D of c)I=Math.max(I,(1-wt(.4,3.2,Math.max(D.sa-y,y-D.sb,0)))*(1-wt(.2,3.4,P-D.dOut)));C.set([R[0],R[1],R[2],f+(y-s),P,I,S],L*7)}),u.rows.push(C)}u.rows.length&&(yield);let g=Tt(Math.floor(_n(n,5531)*4294967295)),v=null;if(mn(s+30)==="coast"&&g()<.5){let w=s+g()*Xt,y=a(w);ki(w,ln+25)||(v={s:w,rw:y,T:Yh("coast",g),u:y+g.range(11,17)})}for(let w=s+t()*6;w<r;w+=t.range(5,9)){if(mn(w)!=="coast"||ki(w,ln+6))continue;let y=a(w),S=t();if(S>=.58)continue;let E=y+t.range(4.5,30);v&&v.T&&Math.abs(w-v.s)<v.T.ww/2+2.5&&E>v.u-3.5&&E<v.u+v.T.wd+2.5||$n(e,l(w,E,0,t()*6,!1),S<.48?"broad":"pine",t,t.range(1,1.4))}for(let w=s+4;w<r;)w+=t.range(18,30);for(let w=s+12;w<r;w+=48){if(mn(w)!=="coast"||ki(w,ln+4))continue;let y=a(w);Md(e,l(w,y+1),t)}let b=Tt(Math.floor(_n(n,5519)*4294967295));for(let w=s+b()*5;w<r;w+=b.range(5,11)){if(It(w).coast<.6||ki(w,ln+6))continue;let y=1+Math.floor(b()*2.4);for(let S=0;S<y;S++){let E=w+S*b.range(1.1,1.8),C=a(E)+b.range(1.4,2.5),P=b()*6.28,L=b.range(1.05,1.45),R=E-6-Math.round((E-6)/js)*js,I=E-12-Math.round((E-12)/48)*48;Math.abs(R)<1.4||Math.abs(I)<1.2||Vl(e,l(E,C,0,P,!1),b,L)}}if(v){let{s:w,rw:y,T:S,u:E}=v;S?(es(e,l(w,E),g,{type:"house",w:S.ww,d:S.wd,ptype:S}),this.houseGarden(e,g,w,E,1,S,l,2,1,1)):es(e,l(w,y+g.range(9,16)),g,{type:"house",w:g.range(7,10),d:8,floors:g()<.5?2:1,tint:g.pick(Ys),litP:.5,fence:0})}if(mn(s+30)==="coast"&&t()<.55){let w=s+t()*Xt;av(e,o(w,-(a(w)+t.range(45,220)),gs-.25,t()*6,!1),t)}let T=Math.floor((s+Xt/2)/1500)*1500+700;T>=s&&T<r&&mn(T)==="coast"&&!ki(T,ln*1.6)&&ov(e,o(T,-(a(T)+75),gs-1,0,!1))}*placeCountry(e,t,n,s,r,o,l,a,u){for(let _ of[-1,1]){yield;for(let M=n+t()*20;M<s;M+=t.range(20,40)){if(mn(M)!=="country"||t()<.55||Qs(M,16)||di(M,48))continue;let c=_*t.range(16,95),f=o(M,c),d=Yh("country",t);if(d){es(e,f,t,{type:"house",w:d.ww,d:d.wd,ptype:d}),this.houseGarden(e,t,M,c,_,d,o,1,2,2);continue}es(e,f,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Ys),litP:.5,fence:0});for(let g=0;g<2+t()*3;g++){let v=c+_*t.range(6,14),b=M+t.range(-8,8);$n(e,o(b,v,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let M=n+t()*8;M<s;M+=t.range(5,9)){if(mn(M)!=="country"||Qs(M,7)||di(M,36))continue;let c=_*t.range(140,210);$n(e,o(M,c,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Qs(M+2,8)&&!di(M+2,34)&&$n(e,o(M+2,_*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Xt/2)/600)*600+300;if(h>=n&&h<s&&mn(h)==="country"&&!di(h,40)){let _=a(h);iv(e,r(h,-(_+1.6),l(h)-.08),t)}let p=Math.floor((n+Xt/2)/700)*700+120;if(p>=n&&p<s&&mn(p)==="country"&&!di(p,40)){let _=a(p);Sd(e,r(p,-(_+.95),l(p)-.08),t),Md(e,r(p+2,-(_+.8),l(p)-.08),t)}let m=Math.floor((n+Xt/2)/900)*900+450;if(m>=n&&m<s&&mn(m)==="country"&&!di(m,40)){let _=a(m);lv(e,o(m,_+5),t)}let x=Math.floor((n+Xt/2)/380)*380+190;if(x>=n&&x<s&&mn(x)==="country"&&!di(x,40)&&!Qs(x,30)){let _=a(x),M=(_n(Math.round(x),5)<.5?-1:1)*(_+2.75);ev(e,o(x,M,0))}for(let _=n;_<s;_+=30){if(mn(_)!=="country")continue;let M=this.path.curv(_);if(Math.abs(M)>1/450&&t()<.5){let c=M>0?-1:1,f=a(_);Ed(e,o(_,c*(f+.75)),c>0?-1:1)}}}};var ma={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function ex(i){let e=i.get("weather"),t={mode:ma[e]?e:"auto",kind:ma[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return ma[e]&&(t.ov=ma[e][0],t.rain=ma[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=ma[t.kind];t.ov+=Jt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=Jt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var ts={uHeadPos:{value:new H},uHeadDir:{value:new H(0,0,1)},uHeadI:{value:0},uLampW:{value:[new dt(0,-1e3,0,0),new dt(0,-1e3,0,0)]},uLampCol:{value:new ue(1,.8,.52)}},nf=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function tx(){let e=new H(42,22,42),t=new nn(1,1),n=new Ts;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new kn(s,4)),n.instanceCount=2400;let r=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uAmt:{value:0},uBox:{value:e},uCol:{value:new ue(1,1,1)},...ts},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${nf}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new pt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function nx(){let e=new H(46,24,46),t=new nn(1,1);t.translate(0,.5,0);let n=new Ts;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new kn(s,4)),n.instanceCount=2600;let r=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uRain:{value:0},uBox:{value:e},uCol:{value:new ue(.8,.85,.95)},...ts},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${nf}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new pt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var pi=64,Zd=[2.2,1.3,2.6],zw=[-2.4,.35,-1.6];function ix(){let i=new Float32Array(pi*3),e=new Float32Array(pi*3),t=new Float32Array(pi*4),n=new Float32Array(pi),s=new Uint8Array(pi),r=new Float32Array(pi);for(let g=0;g<pi;g++)t[g*4]=t[g*4+1]=1;let o=new nn(1,1),l=new Ts;l.index=o.index,l.setAttribute("position",o.attributes.position),l.setAttribute("uv",o.attributes.uv),l.instanceCount=0;let a=new Float32Array(pi*4),u=new Float32Array(pi*4),h={uP:{value:a},uC:{value:u},uNoiseTex:we.uNoiseTex,uAmb:{value:new ue},uSun:{value:new ue},uTail:{value:new dt},uCam:{value:new H},...ts},p=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${pi}], uC[${pi}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${nf}
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
      }`}),m=new pt(l,p);m.frustumCulled=!1,m.renderOrder=4,m.visible=!1;let x=0,_=0,M=0,c=0,f=!1;function d(g,v,b,T,w,y,S,E,C,P,L){let R=x;x=(x+1)%pi,i[R*3]=v,i[R*3+1]=b,i[R*3+2]=T,e[R*3]=w,e[R*3+1]=y,e[R*3+2]=S,t[R*4]=0,t[R*4+1]=E,t[R*4+2]=C,t[R*4+3]=P,n[R]=L,s[R]=g,r[R]=Math.random()}return{mesh:m,update(g,v,b,T,w,y,S,E,C,P,L){if(!L){if(f){for(let J=0;J<pi;J++)t[J*4]=t[J*4+1];f=!1}m.visible=!1;return}let R=v.position,I=v.rotation.y,D=Math.cos(I),F=Math.sin(I),N=F*b,U=D*b,W=Math.min(1,Math.max(0,(b-2)/14)),k=w>.3?2:0,X=k?w:T;for(_+=24*X*W*g;_>=1;){_-=1;let J=(c^=1)?1:-1,Q=J*.67,ye=-1.28-Math.random()*.2,Ie=Math.random(),K=Math.random(),ve=1.6+1.6*Ie,Oe=k?.5+.7*K:.9+1*K,Ve=J*(.3+.6*Math.random());d(k,R.x+Q*D+ye*F,R.y+.12,R.z-Q*F+ye*D,N*.55-F*ve+Ve*D,Oe,U*.55-D*ve-Ve*F,k?.45+.3*Ie:.55+.35*Ie,.2+.1*K,k?.7+.35*K:.8+.4*K,.5*(.5+.5*W)*Math.min(1,X*1.5))}for(M+=(5+4*W)*y*g;M>=1;){M-=1;let J=Math.random();d(1,R.x-.42*D-1.78*F,R.y+.26,R.z+.42*F-1.78*D,N*.5-F*.8,.25+.2*J,U*.5-D*.8,1.3+.6*J,.14,.8+.4*Math.random(),.32*Math.min(1,y*1.5))}let ie=0,xe=Math.exp(-Zd[0]*g),Te=Math.exp(-Zd[1]*g),Ee=Math.exp(-Zd[2]*g);for(let J=0;J<pi;J++){let Q=J*4;if(t[Q]>=t[Q+1])continue;let ye=t[Q]+=g,Ie=t[Q+1];if(ye>=Ie)continue;let K=s[J],ve=K===0?xe:K===1?Te:Ee,Oe=J*3,Ve=i[Oe]-P.x,Ge=i[Oe+1]-P.y,Ze=i[Oe+2]-P.z;if(Ve*Ve+Ge*Ge+Ze*Ze<20.25){t[Q]=Ie;continue}e[Oe]*=ve,e[Oe+1]=e[Oe+1]*ve+zw[K]*g,e[Oe+2]*=ve,i[Oe]+=e[Oe]*g,i[Oe+1]=Math.max(R.y+.05,i[Oe+1]+e[Oe+1]*g),i[Oe+2]+=e[Oe+2]*g;let ot=ye/Ie,ct=ie*4;a[ct]=i[Oe],a[ct+1]=i[Oe+1],a[ct+2]=i[Oe+2],a[ct+3]=t[Q+2]+(t[Q+3]-t[Q+2])*Math.sqrt(ot),u[ct]=n[J]*Math.min(1,ot*6)*(1-ot)*(1-ot),u[ct+1]=K,u[ct+2]=r[J],ie++}f=ie>0,m.visible=f,l.instanceCount=ie,f&&(h.uAmb.value.copy(S),h.uSun.value.copy(E),h.uTail.value.copy(C),h.uCam.value.copy(P))},shift(g,v){for(let b=0;b<pi;b++)i[b*3]-=g,i[b*3+2]-=v}}}var io=24,Hw=55,Vw=12;function sx(){let i=[],e=new Float32Array(io*2*2),t=new Float32Array(io*2*3);for(let u=0;u<io;u++)if(e.set([u,-1,u,1],u*4),u<io-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new xt;n.setAttribute("position",new _t(t,3)),n.setAttribute("aI",new _t(e,2)),n.setIndex(i);let s=new Float32Array(io*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new ue},uTime:{value:0},uNoiseTex:we.uNoiseTex},o=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${io}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${Oi}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),l=new pt(n,o);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let a={};return{mesh:l,update(u,h,p,m,x,_,M,c){if(l.visible=_>.01,!!l.visible){for(let f=0;f<io;f++)u.at(h+Hw+f*Vw,a),s[f*4]=a.x-p,s[f*4+1]=a.y,s[f*4+2]=a.z-m,s[f*4+3]=a.h;r.uW.value=x*.85,r.uHot.value=_,r.uTime.value=M,r.uSky.value.copy(c)}}}}var ga=1.6;function rx(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,l=t?16:14,a=[4,Math.round(s*.4),Math.round(s*.65),s].filter((L,R,I)=>!R||L>I[R-1]),u=[s,Math.round((s+r)/2),r],h=(L,R)=>{let I=new Ts;return I.setAttribute("position",new et(L,3)),I.setIndex(R),I},p=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],m=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],x=new Float32Array(wr*4),_=new Float32Array(wr),M={uG:{value:x},uGM:{value:_},uGP:{value:new dt(0,1/ga,3.1,0)},uGQ:{value:new dt(0,1.05,3,0)},uRingD:{value:new dt(s,r,0,0)}},c=[],f=(L,R,I)=>{let D={uRing:{value:new dt(0,0,I?2*n:n,I)},uRingC:{value:new dt(0,0,0,0)}},F=h(...I?m:p);F.instanceCount=0;let N=new pt(F,s1(D,M));N.frustumCulled=!1,N.castShadow=!1,N.receiveShadow=!1,N.visible=!1,c.push({mesh:N,u:D,dA:L,dB:R,size:I?2*n:n,W:I?l:o,last:R===s||R===r})};for(let L=0;L<a.length-1;L++)f(a[L],a[L+1],0);for(let L=0;L<u.length-1;L++)f(u[L],u[L+1],1);let d=new Int32Array(64).fill(-2147483648),g=new Float32Array(64),v=new Uint8Array(64),b=L=>{let R=L&63;if(d[R]!==L){d[R]=L;let I=L*ga,D=Sr(I),F=Zi(I),N=It(I).country,U=Math.min(1,Math.max(0,(N-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(I-D.s)-13)/7)):1)*(F?Math.min(1,Math.max(0,(Math.abs(I-F.s)-38)/10)):1);g[R]=U>0?3+4*Math.round(U*15):0,v[R]=N>0?1:0}return R},T=L=>g[b(L)],w=L=>v[b(L)],y={},S=NaN,E=NaN,C=NaN,P=0;return{meshes:c.map(L=>L.mesh),hide(){for(let L=0;L<c.length;L++)c[L].mesh.visible=!1},warm(L){for(let R of c)R.mesh.visible=L,L&&(R.u.uRing.value.y=1,R.u.uRingC.value.set(1,1,R.W,0),R.mesh.geometry.instanceCount=2)},update(L,R,I,D,F,N,U){let W=Math.floor((R-3)/ga);if(!w(W)&&!w(W+wr-1))P=0;else{if(W!==S||D!==E||F!==C){S=W,E=D,C=F,P=0;for(let k=0;k<wr;k++)L.at((W+k)*ga,y),x[k*4]=y.x-D,x[k*4+1]=y.y,x[k*4+2]=y.z-F,x[k*4+3]=y.h,P|=_[k]=T(W+k)}M.uGP.value.set(W*ga,1/ga,N,R),M.uGQ.value.set(I,U,3,0)}for(let k=0;k<c.length;k++){let X=c[k];if(!P){X.mesh.visible=!1;continue}let ie=Math.floor((R+X.dA)/X.size),xe=Math.floor((R+X.dB)/X.size)+(X.last?1:0),Te=U*X.dB+3,Ee=N+2.6,J=Math.min(X.W,Math.max(0,Te-(Ee+I))),Q=Math.min(X.W,Math.max(0,Te-(Ee-I))),ye=J>0?Math.ceil(J/X.size)+1:0,Ie=Q>0?Math.ceil(Q/X.size)+1:0;X.u.uRing.value.x=ie,X.u.uRing.value.y=xe-ie,X.u.uRingC.value.set(ye,Ie,X.W,0),X.mesh.geometry.instanceCount=(xe-ie)*(ye+Ie),X.mesh.visible=X.mesh.geometry.instanceCount>0}}}}var va=72;function Ww(){let i=[],e=[],t=(s,r,o,l,a,u)=>{i.push(...s,...r,...o),e.push(l,a,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new xt;return n.setAttribute("position",new et(i,3)),n.setAttribute("aWing",new et(e,1)),n}function ox(){let i=Ww(),e=new kn(new Float32Array(va*3),3),t=new kn(new Float32Array(va*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new ht({side:Tn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:se.fog},uFogD:{value:.002},uCam:{value:new H}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new fs(i,n,va);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},l=new st,a=new yn,u=new ni(0,0,0,"YXZ"),h=new H,p=new H,m=()=>r.reduce((M,c)=>M+c.birds.length,0);function x(M,c,f,d){let g=M==="small"?6+Math.floor(Math.random()*7):M==="crow"?3+Math.floor(Math.random()*5):4;if(m()+g>va)return;let v=45+Math.random()*85,b=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,w=new H().copy(c).addScaledVector(f,v).addScaledVector(d,b-T*75);w.y=c.y+(M==="crow"?18+Math.random()*24:10+Math.random()*18);let y=M==="small"?11+Math.random()*4:8+Math.random()*3,S=new H().copy(d).multiplyScalar(T*y).addScaledVector(f,(Math.random()-.3)*y*.6),E=M==="small"?.8:1.45,C=Array.from({length:g},(P,L)=>({off:new H((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:M==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:M,c:w,vel:S,birds:C,size:E,life:60})}function _(M,c,f,d){if(r.some(b=>b.kind==="gull")||m()+4>va)return;let g=new H().copy(M).addScaledVector(c,70).addScaledVector(f,-d*45);g.y=M.y+18;let v=Array.from({length:4},(b,T)=>({off:new H,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:g,vel:new H,birds:v,size:1.25,life:1e9})}return{mesh:s,update(M,c,f,d,g,v,b,T,w){n.uniforms.uTime.value=c,n.uniforms.uCam.value.copy(f);let y=b>.35&&T<.3,S=se.warm>.25&&se.sunEl<.6&&b>.2;y&&(o.small-=M)<0&&(o.small=22+Math.random()*35,v.coast<.6&&x("small",f,d,g)),(S||y&&v.city+v.country>.6&&Math.random()<4e-4)&&(o.crow-=M)<0&&(o.crow=S?14+Math.random()*18:60,x("crow",f,d,g)),v.coast>.6&&y&&_(f,d,g,1);let E=[.1+.08*b,.11+.09*b,.15+.1*b],C=0;for(let P=r.length-1;P>=0;P--){let L=r[P];if(L.kind==="gull"?(L.c.lerp(h.copy(w).addScaledVector(d,60).addScaledVector(g,-42).setY(w.y+16),Math.min(1,M*.25)),(v.coast<.4||!y)&&(L.life=Math.min(L.life,8),L.c.y+=M*6)):L.c.addScaledVector(L.vel,M),L.life-=M,L.life<0||L.kind!=="gull"&&L.c.distanceTo(f)>300){r.splice(P,1);continue}for(let R of L.birds){if(C>=va)break;let I,D,F,N;L.kind==="gull"?(R.w+=M*(14/R.r),I=L.c.x+Math.cos(R.w)*R.r,F=L.c.z+Math.sin(R.w)*R.r,D=L.c.y+R.h+Math.sin(c*.4+R.ph)*2,N=Math.atan2(-Math.sin(R.w),Math.cos(R.w))):(I=L.c.x+R.off.x+Math.sin(c*.7+R.ph)*1.2,D=L.c.y+R.off.y+Math.sin(c*1.1+R.ph)*.6,F=L.c.z+R.off.z,N=Math.atan2(L.vel.x,L.vel.z)),u.set(0,N,Math.sin(c+R.ph)*.15),a.setFromEuler(u),p.setScalar(L.size),l.compose(h.set(I,D,F),a,p),s.setMatrixAt(C,l);let U=L.kind==="gull"?[.92*(.5+.5*b),.93*(.5+.5*b),.95*(.5+.5*b)]:L.kind==="crow"?[.05,.05,.07]:E;e.setXYZ(C,U[0],U[1],U[2]),t.setXY(C,R.fq,R.ph),C++}}s.count=C,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(M){n.uniforms.uFogD.value=M},shift(M,c){for(let f of r)f.c.x-=M,f.c.z-=c}}}var ec=new H;function ns(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),a=Math.PI/4;ec.copy(e),ec[n]=0,ec.normalize();let u=.5*o/(o+l),h=1-ec.angleTo(i)/a;return Math.sign(ec[t])===1?h*u:l/(o+l)+u+u*(1-h)}var jn=class i extends Qt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let a=new H,u=new H,h=new H(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,m=this.attributes.normal.array,x=this.attributes.uv.array,_=p.length/6,M=new H,c=.5/o;for(let f=0,d=0;f<p.length;f+=3,d+=2)switch(a.fromArray(p,f),u.copy(a),u.x-=Math.sign(u.x)*c,u.y-=Math.sign(u.y)*c,u.z-=Math.sign(u.z)*c,u.normalize(),p[f+0]=h.x*Math.sign(a.x)+u.x*r,p[f+1]=h.y*Math.sign(a.y)+u.y*r,p[f+2]=h.z*Math.sign(a.z)+u.z*r,m[f+0]=u.x,m[f+1]=u.y,m[f+2]=u.z,Math.floor(f/_)){case 0:M.set(1,0,0),x[d+0]=ns(M,u,"z","y",r,n),x[d+1]=1-ns(M,u,"y","z",r,t);break;case 1:M.set(-1,0,0),x[d+0]=1-ns(M,u,"z","y",r,n),x[d+1]=1-ns(M,u,"y","z",r,t);break;case 2:M.set(0,1,0),x[d+0]=1-ns(M,u,"x","z",r,e),x[d+1]=ns(M,u,"z","x",r,n);break;case 3:M.set(0,-1,0),x[d+0]=1-ns(M,u,"x","z",r,e),x[d+1]=1-ns(M,u,"z","x",r,n);break;case 4:M.set(0,0,1),x[d+0]=1-ns(M,u,"x","y",r,e),x[d+1]=1-ns(M,u,"y","x",r,t);break;case 5:M.set(0,0,-1),x[d+0]=ns(M,u,"x","y",r,e),x[d+1]=1-ns(M,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function tc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,a=new xt,u=0;for(let h=0;h<i.length;++h){let p=i[h],m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(p.attributes[x]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[x]===void 0&&(o[x]=[]),o[x].push(p.morphAttributes[x])}if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(u,x,h),u+=x}}if(t){let h=0,p=[];for(let m=0;m<i.length;++m){let x=i[m].index;for(let _=0;_<x.count;++_)p.push(x.getX(_)+h);h+=i[m].attributes.position.count}a.setIndex(p)}for(let h in r){let p=ax(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let m=0;m<p;++m){let x=[];for(let M=0;M<o[h].length;++M)x.push(o[h][M][m]);let _=ax(x);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(_)}}}return a}function ax(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new _t(o,t,n),a=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=a/t;for(let m=0,x=h.count;m<x;m++)for(let _=0;_<t;_++){let M=h.getComponent(m,_);l.setComponent(m+p,_,M)}}else o.set(h.array,a);a+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function Gw(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new ii(i);return n.colorSpace=Gt,n}var Kd=4,lx=.37,cx=.61;function qw(){let t=document.createElement("canvas");t.width=128*Kd,t.height=128;let n=t.getContext("2d"),s=(o,l,a,u,h)=>{n.beginPath(),n.moveTo(o+h,l),n.arcTo(o+a,l,o+a,l+u,h),n.arcTo(o+a,l+u,o,l+u,h),n.arcTo(o,l+u,o,l,h),n.arcTo(o,l,o+a,l,h),n.closePath(),n.fill()};for(let o=0;o<Kd;o++){let l=o*128,a=n.createLinearGradient(0,0,0,128);a.addColorStop(0,"#9fbfe6"),a.addColorStop(.45,"#4a6690"),a.addColorStop(1,"#1d2638"),n.fillStyle=a,n.fillRect(l,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(l+14,84,30,50,9),s(l+84,84,30,50,9),n.fillRect(l+6,112,116,16),s(l+52,92,24,40,7)),o===2&&(s(l+62,66,44,70,12),n.fillRect(l+50,118,70,10)),o===3&&(s(l+70,78,40,60,11),n.fillRect(l+56,120,64,8)),n.save(),n.beginPath(),n.rect(l,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(l+40,0),n.lineTo(l+68,0),n.lineTo(l+20,128),n.lineTo(l-8,128),n.fill(),n.restore()}let r=new ii(t);return r.colorSpace=Gt,r}function ux(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/Kd)}return i}function hx(){let i=new pn,e=new pn,t=new pn;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new dt,new dt],s=new ue(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s},uCarKey:we.uCarKey},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol, uCarKey;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=A=>(A.defines={CAR_KEY:""},A),l=`
#include <lights_fragment_end>
{ vec3 bd = BRDF_Lambert(diffuseColor.rgb); // (the toon's direct light is ramp \xD7 shadow \xD7 sun \xD7 paint in each channel)
  float lf = clamp(reflectedLight.directDiffuse.g / max(directionalLights[0].color.g * bd.g, 1e-7), 0.0, 1.0);
  reflectedLight.indirectDiffuse = (reflectedLight.indirectDiffuse + bd * uCarFill * (1.0 - lf)) * (0.6 + 0.4 * clamp((vWP.y - uCarPos.y + 0.45) / 0.85, 0.0, 1.0)); }`,a={uniforms:{...r.uniforms,uCarFill:we.uCarFill},pars:r.pars+`
uniform vec3 uCarFill;`,apply:r.apply},u=o(fd(new wn({color:"#ffffff",vertexColors:!0,gradientMap:Dh}),.85,.06,"paint-l",a));{let A=u.onBeforeCompile;u.onBeforeCompile=z=>{A(z),z.fragmentShader=z.fragmentShader.replace("#include <lights_fragment_end>",l)}}let h=(A,z)=>Object.assign(new ue(A),{gloss:z}),p=h("#9fd8c8",1),m=h("#eeece4",.6),x=h("#2a2c33",.35),_=h("#1b1c20",.04),M=h("#c8ccd2",.8),c=h("#d4d8de",1.3),f=(A,z)=>{let G=A.attributes.position.count,q=new Float32Array(G*4);for(let j=0;j<G;j++)q.set([z.r,z.g,z.b,z.gloss],j*4);return A.setAttribute("color",new et(q,4)),A},d=o(fd(new wn({color:"#ffffff",map:qw(),gradientMap:Dh}),1.2,.08,"glass-l",r)),g=A=>{A.uniforms.uCarKey=we.uCarKey,A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uCarKey;`)},v=A=>{let z=o(new wn({...A,gradientMap:Dh}));return z.onBeforeCompile=g,z.customProgramCacheKey=()=>"car-lamp",z},b=v({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4}),T=v({color:"#ffb8a0",emissive:"#ffd3a6",emissiveIntensity:1}),w=v({color:"#b02030",emissive:"#ff2a2a",emissiveIntensity:.55}),y=v({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.35}),S=v({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15}),E=new vn({map:Gw()}),C=new Map,P=[],L=!1,R=new st,I=new ni,D=new yn,F=new H(1,1,1),N=(A,z,G,q,j,te=0,$=0,re=0)=>{let ae=A.index?A.toNonIndexed():A;if(z.isColor&&(f(ae,z),z=u),I.set(te,$,re),D.setFromEuler(I),R.compose(new H(G,q,j),D,F),ae.applyMatrix4(R),L){P.push(ae);return}C.has(z)||C.set(z,[]),C.get(z).push(ae)},U=h("#16171b",0),W=h("#2b3134",.15),k=h("#b9bfc6",.9),X=h("#4d5258",.4),ie=h("#9a1c22",.6),xe=h("#3a4462",.5),Te=h("#6a1820",.9),Ee=(A,z,G,q)=>{let j=($,re,ae)=>{let ge=re/2,fe=ae/2-ge;return $.moveTo(ge,-fe),$.lineTo(ge,fe),$.absarc(0,fe,ge,0,Math.PI,!1),$.lineTo(-ge,-fe),$.absarc(0,-fe,ge,Math.PI,Math.PI*2,!1),$},te=j(new zr,A,z);return te.holes.push(j(new kr,G,q)),new Oo(te,6)},J=(A,z,G,q,j,te,$)=>{let re=(A.index?A.toNonIndexed():A).translate(j,te,$),ae=re.attributes.position,ge=new Float32Array(ae.count*4);for(let fe=0;fe<ae.count;fe+=3){let _e=(ae.getY(fe)+ae.getY(fe+1)+ae.getY(fe+2))/3<q?z:G;for(let de=0;de<3;de++)ge.set([_e.r,_e.g,_e.b,_e.gloss],(fe+de)*4)}re.setAttribute("color",new et(ge,4)),N(re,u,0,0,0)},Q=1.7,ye=.745,Ie=.3,K=(A,z,G)=>{let q=Math.min(1,Math.max(0,(G-A)/(z-A)));return q*q*(3-2*q)},ve=A=>A<.8?1.8:A<1.22?1.8-.6*K(.8,1.22,A):1.2-.1*((A-1.22)/(Q-1.22))**2,Oe=A=>1-.085*K(1.15,1.8,A),Ve=(A,z)=>{let G=ye-z,q=Ie+z*.6,j=ve(A)-z*(A<0?.4:1),te=Math.max(.05,.1-z*.5),$=Math.max(.06,(A<.8?.17:.13)-z*.5),re=[[0,q],[(G-te)*.5,q],[G-te,q]];for(let ge=1;ge<4;ge++){let fe=-Math.PI/2+ge/8*Math.PI;re.push([G-te+te*Math.cos(fe),q+te+te*Math.sin(fe)])}for(let ge=0;ge<=8;ge++)re.push([G,q+te+ge/8*(j-$-q-te)]);for(let ge=1;ge<5;ge++){let fe=ge/10*Math.PI;re.push([G-$+$*Math.cos(fe),j-$+$*Math.sin(fe)])}re.push([G-$,j],[(G-$)*.5,j],[0,j]);let ae=re.map(([ge,fe])=>[ge*Oe(fe),fe]);for(let ge=re.length-2;ge>0;ge--)ae.push([-ae[ge][0],ae[ge][1]]);return ae};{let A=[];for(let de=0;de<=6;de++){let Be=de/6*Math.PI/2;A.push([-Q+.2*(1-Math.cos(Be)),.2*(1-Math.sin(Be))])}for(let de=-Q+.2+.12;de<.78;de+=.13)A.push([de,0]);for(let de=.8;de<1.225;de+=.06)A.push([de,0]);for(let de of[1.3,1.39])A.push([de,0]);for(let de=6;de>=0;de--){let Be=de/6*Math.PI/2;A.push([Q-.22*(1-Math.cos(Be)),.22*(1-Math.sin(Be))])}let q=[],j=[],te=A.map(([de,Be])=>Ve(de,Be)),$=te[0].length;te.forEach((de,Be)=>de.forEach(([ke,Z])=>q.push(ke,Z,A[Be][0])));for(let de=0;de<te.length-1;de++)for(let Be=0;Be<$;Be++){let ke=de*$+Be,Z=de*$+(Be+1)%$,Pe=ke+$,pe=Z+$;j.push(ke,Z,Pe,Z,pe,Pe)}for(let[de,Be]of[[0,-1],[te.length-1,1]]){let ke=q.length/3,Z=te[de];q.push(0,(Z[0][1]+Z[$/2|0][1])/2,A[de][0]);for(let Pe=0;Pe<$;Pe++){let pe=de*$+Pe,Ue=de*$+(Pe+1)%$;Be<0?j.push(ke,Ue,pe):j.push(ke,pe,Ue)}}let re=new xt;re.setAttribute("position",new et(q,3)),re.setIndex(j),re.computeVertexNormals();{let de=re.attributes.normal,Be=$*10+12;if(de.getX(Be)<0){for(let ke=0;ke<j.length;ke+=3){let Z=j[ke+1];j[ke+1]=j[ke+2],j[ke+2]=Z}re.setIndex(j),re.computeVertexNormals()}}re.setAttribute("uv",new et(new Float32Array(q.length/3*2),2));let ae=re.toNonIndexed(),ge=ae.attributes.position,fe=new Float32Array(ge.count*4),_e=(te.length-1)*$*6;for(let de=0;de<ge.count;de+=3){let Be=de<_e?de-de%6:de,ke=de<_e?6:3,Z=0,Pe=0;for(let Ue=0;Ue<ke;Ue++)Z+=ge.getY(Be+Ue),Pe+=ge.getZ(Be+Ue);Z/=ke,Pe/=ke;let pe=Z>1.665&&Pe<.84&&Pe>-1.52?m:p;for(let Ue=0;Ue<3;Ue++)fe.set([pe.r,pe.g,pe.b,pe.gloss],(de+Ue)*4)}ae.setAttribute("color",new et(fe,4)),N(ae,u,0,0,0)}N(new jn(1.42,.08,2.62,3,.038),m,0,1.815,-.44);let Ge=(A,z,G,q,j)=>{let te=new xt,$=[],re=[],ae=[],ge=[];for(let fe=0;fe<=G;fe++)for(let _e=0;_e<=z;_e++){let de=_e/z,Be=fe/G,ke=A(de,Be);$.push(ke[0]+ke[3]*.004,ke[1]+ke[4]*.004,ke[2]+ke[5]*.004),re.push(ke[3],ke[4],ke[5]),ae.push(de,Be)}for(let fe=0;fe<G;fe++)for(let _e=0;_e<z;_e++){let de=fe*(z+1)+_e,Be=de+1,ke=de+z+1,Z=ke+1;ge.push(de,Be,Z,de,Z,ke)}te.setAttribute("position",new et($,3)),te.setAttribute("normal",new et(re,3)),te.setAttribute("uv",new et(ae,2)),te.setIndex(ge);{let fe=new H().fromArray($,0),_e=new H().fromArray($,3),de=new H().fromArray($,(z+1)*3),Be=new H().fromArray(re,0);if(_e.sub(fe).cross(de.sub(fe)).dot(Be)<0){for(let ke=0;ke<ge.length;ke+=3){let Z=ge[ke+1];ge[ke+1]=ge[ke+2],ge[ke+2]=Z}te.setIndex(ge)}}return ux(te,q,j)},Ze=A=>{let G=ye*(Oe(A+.01)-Oe(A-.01))/.02,q=Math.hypot(1,G);return[1/q,-G/q]},ot=A=>{let z=.8,G=1.22;for(let q=0;q<24;q++){let j=(z+G)/2;ve(j)>A?z=j:G=j}return z};for(let A of[-1,1]){let z=A<0,G=(q,j,te)=>N(Ge(($,re)=>{let ae=1.21+re*.39,ge=A>0?j(ae)+(q(ae)-j(ae))*$:q(ae)+(j(ae)-q(ae))*$,[fe,_e]=Ze(ae);return[A*ye*Oe(ae),ae,ge,A*fe,_e,0]},1,6,te,!1),d,0,0,0);G(()=>.06,q=>ot(q)-.07,2),G(()=>-.72,()=>-.08,3),G(()=>-1.42,()=>-.84,0),N(new Qt(.012,.41,.07),x,A*.731,1.405,-.01,0,0,-A*.07),N(new Qt(.014,.022,2.42),U,A*.748,1.2,-.26);for(let[q,j]of[[.8,.64],[-.06,.42],[-.76,.64]])N(new Qt(.008,1.17-j,.012),W,A*.749,(j+1.17)/2,q);N(new Qt(.02,.028,.13),W,A*.752,1.06,.06),N(new Qt(.02,.028,.13),W,A*.752,1.06,-.2),N(new Qt(.01,.022,.62),W,A*.749,1.155,-1.08);for(let q of[1.12,-1.12])N(new Or(.345,18,0,Math.PI),U,A*.749,.29,q,0,A*Math.PI/2,0),N(new ko(.35,.024,5,18,Math.PI),x,A*.752,.29,q,0,A*Math.PI/2,0);N(new jn(.1,.12,.2,2,.04),p,A*.83,1.24,1.02),N(new Qt(.07,.035,.05),x,A*.775,1.2,1.03),N(new jn(.16,.4,.05,3,.075),Te,A*.56,.95,-1.703),N(new jn(.13,.37,.05,3,.062),b,A*.56,.95,-1.716),N(Ee(.11,.346,.08,.316),T,A*.56,.95,-1.7425,0,Math.PI,0),N(new jn(.11,.06,.04,2,.02),y,A*.56,.69,-1.707)}{let A=new zr,z=.52,G=1.15,q=1.66,j=.07;A.moveTo(-z+j,G),A.lineTo(z-j,G),A.absarc(z-j,G+j,j,-Math.PI/2,0),A.lineTo(z,q-j),A.absarc(z-j,q-j,j,0,Math.PI/2),A.lineTo(-z+j,q),A.absarc(-z+j,q-j,j,Math.PI/2,Math.PI),A.lineTo(-z,G+j),A.absarc(-z+j,G+j,j,Math.PI,Math.PI*1.5);let te=new Oo(A,6),$=te.attributes.position,re=te.attributes.uv;for(let ae=0;ae<$.count;ae++){let ge=$.getX(ae),fe=$.getY(ae),_e=(fe-G)/(q-G);re.setXY(ae,(ge+z)/(2*z),_e),$.setX(ae,ge*(1-.08*_e))}N(ux(te,1),d,0,0,-Q-.004,0,Math.PI,0)}N(new jn(.36,.04,.03,2,.014),w,0,1.69,-1.712),N(Ge((A,z)=>{let G=1.19-z*.36,q=ve(G),j=.56-.07*z,te=.005,$=(ve(G+te)-ve(G-te))/(2*te),re=Math.hypot(1,$);return[(A*2-1)*j,q,G,0,1/re,-$/re]},2,7,0,!1),d,0,0,0),N(new jn(.46,.25,.012,2,.05),h("#86bdb0",.6),0,.73,-1.701),N(new nn(.34,.17),E,0,.72,-1.709,0,Math.PI,0),N(new jn(.25,.034,.03,2,.013),c,0,.9,-1.708);for(let A of[-1,1])N(new Qt(.01,.56,.006),W,A*.47,.85,-1.703);N(new Qt(.95,.01,.006),W,0,.565,-1.703),J(new jn(1.5,.2,.26,3,.08),xe,p,.455,0,.44,-1.6),N(new jn(1.38,.08,.22,2,.03),x,0,.33,-1.61);for(let A of[-1,1])N(new Qt(.13,.032,.01),ie,A*.56,.425,-1.731);N(new ko(.034,.0065,4,20),c,0,1.035,-1.704,0,Math.PI,0);for(let A of[-1,1])N(new Qt(.009,.042,.006),c,A*.011,1.035,-1.706,0,0,A*.42);N(new qi(.036,.036,.12,12),c,.46,.29,-1.68,Math.PI/2,0,0),N(new qi(.024,.024,.124,10),U,.46,.29,-1.68,Math.PI/2,0,0);for(let A of[-1,1])N(new jn(.4,.26,.04,2,.06),x,A*.42,.85,1.702),N(new qi(.105,.105,.03,16),S,A*.46,.85,1.72,Math.PI/2,0,0),N(new qi(.055,.055,.03,12),S,A*.3,.85,1.718,Math.PI/2,0,0),N(new jn(.1,.06,.04,2,.015),y,A*.52,.66,1.705),N(new Qt(.46,.014,.014),U,A*.25,1.215,1.2,-.3,A*.12,0);N(new jn(.36,.12,.03,2,.03),U,0,.84,1.704);for(let A=0;A<3;A++)N(new Qt(.32,.012,.012),W,0,.805+A*.035,1.722);N(new jn(1.52,.24,.22,2,.07),x,0,.44,1.62),N(new Qt(.7,.07,.02),U,0,.4,1.732),N(new Qt(.34,.17,.01),h("#f0cc38",.3),0,.62,1.733),N(new Qt(.3,.05,.004),h("#2f5a2f",.1),0,.6,1.739),L=!0;for(let[A,z]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){N(new qi(.29,.29,.19,24),_,A,.29,z,0,0,Math.PI/2),N(new qi(.195,.195,.194,20),k,A,.29,z,0,0,Math.PI/2),N(new qi(.155,.155,.198,16),X,A,.29,z,0,0,Math.PI/2);for(let G=0;G<5;G++){let q=G/5*Math.PI*2+.3;N(new Qt(.202,.03,.15),k,A,.29-.085*Math.sin(q),z+.085*Math.cos(q),q,0,0)}N(new qi(.045,.045,.206,10),M,A,.29,z,0,0,Math.PI/2)}L=!1;for(let[A,z]of C){let G=new pt(tc(z),A);G.castShadow=A!==d&&A!==E&&A!==w&&A!==S&&A!==T,G.receiveShadow=!0,t.add(G)}{let A=new pt(tc(P),u);A.castShadow=A.receiveShadow=!0,i.add(A)}{let G=document.createElement("canvas");G.width=48,G.height=96;let q=G.getContext("2d"),j=q.createImageData(48,96);for(let $=0;$<96;$++)for(let re=0;re<48;re++){let ae=Math.max(0,Math.abs((re+.5)/48-.5)*2.1-.62),ge=Math.max(0,Math.abs(($+.5)/96-.5)*2.05-.78),fe=Math.hypot(ae/.42,ge/.24),_e=Math.max(0,1-fe),de=($*48+re)*4;j.data[de]=j.data[de+1]=j.data[de+2]=Math.round(255*_e*_e*(3-2*_e)),j.data[de+3]=255}q.putImageData(j,0,0);let te=new pt(new nn(2.2,4.1),new vn({color:0,alphaMap:new ii(G),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));te.rotation.x=-Math.PI/2,te.position.y=.03,te.renderOrder=3,i.add(te)}let ct=(()=>{let G=document.createElement("canvas");G.width=16,G.height=64;let q=G.getContext("2d"),j=q.createImageData(16,64);for(let te=0;te<64;te++)for(let $=0;$<16;$++){let re=1-(te+.5)/64,ae=(($+.5)/16-.5)*2,ge=Math.exp(-ae*ae*5)*Math.min(1,re/.06)*Math.pow(1-re,1.6)*(.78+.22*Math.sin(re*31+ae*2)),fe=(te*16+$)*4;j.data[fe]=j.data[fe+1]=j.data[fe+2]=Math.round(255*Math.max(0,ge)),j.data[fe+3]=255}return q.putImageData(j,0,0),new vn({map:new ii(G),color:16726576,transparent:!0,opacity:0,blending:Xi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let A=[];for(let G of[-.56,.56]){let q=new nn(.22,1.5);q.rotateX(-Math.PI/2),q.translate(G,.035,-1.72-.75),A.push(q)}let z=new pt(tc(A),ct);z.renderOrder=3,z.visible=!1,i.add(z),ct.mesh=z}let Me=(()=>{let G=document.createElement("canvas");G.width=40,G.height=64;let q=G.getContext("2d"),j=q.createImageData(40,64);for(let te=0;te<64;te++)for(let $=0;$<40;$++){let re=Math.abs((($+.5)/40-.5)*lx),ae=Math.abs(((te+.5)/64-.5)*cx),ge=Math.hypot(re,Math.max(0,ae-.12))-.065,fe=ge<0?.2+.8*K(-.03,-.002,ge):Math.exp(-((ge/.06)**2)),_e=(te*40+$)*4;j.data[_e]=j.data[_e+1]=j.data[_e+2]=Math.round(255*fe),j.data[_e+3]=255}return q.putImageData(j,0,0),new vn({map:new ii(G),color:new ue(1,.2,.16),transparent:!0,opacity:0,blending:Xi,depthWrite:!1})})();{let A=[];for(let G of[-.56,.56]){let q=new nn(lx,cx);q.rotateY(Math.PI),q.translate(G,.95,-1.765),A.push(q)}let z=new pt(tc(A),Me);z.renderOrder=3,t.add(z)}let De=new pn;De.position.set(.02,1.19,-1.716),t.add(De);let Ne=new Qt(.52,.026,.02);Ne.translate(.27,0,0);let Ae=new pt(f(Ne,x),u);Ae.rotation.z=.18,De.add(Ae);let V=0,He=new vl(16773328,0,70,.55,.65,1.2);He.position.set(0,.8,1.6),He.target.position.set(0,0,18),t.add(He,He.target);let oe={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},O=(A,z)=>z*Math.tanh(A/z);return{group:i,lamps:n,lampCol:s,head:He,update(A,z,G,q=0,j=null,te=0){if(j){let $=O(-j.lat*.016,.045),re=O(-j.lon*.008,.03);oe.rv+=(($-oe.roll)*55-oe.rv*8)*A,oe.roll+=oe.rv*A,oe.pv+=((re-oe.pitch)*60-oe.pv*9)*A+j.kick,oe.pitch+=oe.pv*A,oe.yv+=((j.road-oe.y)*85-oe.yv*8)*A+j.jolt,oe.y+=oe.yv*A,e.rotation.set(oe.pitch,0,oe.roll),e.position.y=.35+oe.y}oe.br+=((j?j.brake:0)-oe.br)*Math.min(1,A*14),b.emissiveIntensity=.85+G*.35+oe.br*(1.7+G*2),w.emissiveIntensity=.55+oe.br*(2.4+G*1.6);{let $=Math.min(1,G+oe.br*.7);T.emissive.setRGB(1,.69+(.1-.69)*$,.39+(.07-.39)*$)}if(T.emissiveIntensity=.95+G*3.05+oe.br*(2+G*2),Me.opacity=(.36+.3*oe.br)*(1-.2*G),ct.opacity=te*Math.min(1,.22+(.35+G*3.2+oe.br*(1.7+G*2))*.22),ct.mesh.visible=ct.opacity>.01,q>.15||V%2.6>.01){V+=A;let $=V%2.6/2.6,re=ge=>ge*ge*(3-2*ge),ae=$<.25?re($/.25):$<.5?re(1-($-.25)/.25):0;Ae.rotation.z=.18+ae*2.5,q<=.15&&$>=.5&&(V=0)}He.intensity=G*60,S.emissiveIntensity=.15+G*2.6}}}var xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Xw=new xr(-1,1,1,-1,0,1),$d=class extends xt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},Yw=new $d,er=class{constructor(e){this._mesh=new pt(Yw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ya=class extends Ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xr.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new er(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var nc=class extends Ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sf=class extends Ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var rf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ya(xa),this.copyPass.material.blending=ui,this.timer=new xl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}nc!==void 0&&(o instanceof nc?n=!0:o instanceof sf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var of=class extends Ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ue}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var fx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _a=class i extends Ei{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,o,{type:En,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Zt(r,o,{type:En,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Zt(r,o,{type:En,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let l=fx;this.highPassUniforms=Xr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Fe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xr.clone(xa.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,premultipliedAlpha:!0,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new vn,this._fsQuad=new er(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],a=o+1<e?t[o+1]:0,u=l+a;s.push((o*l+(o+1)*a)/u),r.push(u)}return new ht({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};_a.BlurDirectionX=new Fe(1,0);_a.BlurDirectionY=new Fe(0,1);var Jd=class extends Ei{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Zt(4,4,{type:En,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),this.mat=new ht({uniforms:{tDiffuse:{value:null},uTexel:{value:new Fe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new er(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},dx=[1,.8,.6,.4,.2],jd="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function Zw(i){let e=[],t=i/3,n=r=>r.toFixed(6);for(let r=0;r<i;r++)e.push(.39894*Math.exp(-.5*r*r/(t*t))/t);let s="";for(let r=1;r<i;r+=2){let o=e[r],l=r+1<i?e[r+1]:0,a=(r*o+(r+1)*l)/(o+l);s+=` s += (texture2D(tSrc, vUv + uStep * ${n(a)}).rgb + texture2D(tSrc, vUv - uStep * ${n(a)}).rgb) * ${n(o+l)};`}return new ht({uniforms:{tSrc:{value:null},uStep:{value:new Fe}},vertexShader:jd,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D tSrc; uniform vec2 uStep; varying vec2 vUv; void main(){ vec3 s = texture2D(tSrc, vUv).rgb * ${n(e[0])};${s} gl_FragColor = vec4(s, 1.0); }`})}var Qd=class extends Ei{constructor(){super(),this.needsSwap=!1,this.strength=1,this.radius=0,this.threshold=1;let e=()=>new Zt(1,1,{type:En,depthBuffer:!1,generateMipmaps:!1});this.bright=e(),this.rtH=[],this.rtV=[],this.blur=[];for(let t=0;t<5;t++)this.rtH.push(e()),this.rtV.push(e()),this.blur.push(Zw(3+2*t));this.high=new ht({uniforms:{tDiffuse:{value:null},uHalf:{value:new Fe(1,1)},uThreshold:{value:1}},vertexShader:jd,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uHalf; uniform float uThreshold;
        vec3 hp(vec2 p){ vec3 c = texture2D(tDiffuse, p / uHalf).rgb; return c * smoothstep(uThreshold, uThreshold + 0.01, luminance(c)); }
        void main(){ vec2 p = floor(gl_FragCoord.xy) * 2.0 + 0.5; gl_FragColor = vec4(0.25 * (hp(p) + hp(p + vec2(1.0, 0.0)) + hp(p + vec2(0.0, 1.0)) + hp(p + 1.0)), 1.0); }`}),this.comp=new ht({uniforms:{t0:{value:this.rtV[0].texture},t1:{value:this.rtV[1].texture},t2:{value:this.rtV[2].texture},t3:{value:this.rtV[3].texture},t4:{value:this.rtV[4].texture},uW:{value:[0,0,0,0,0]}},vertexShader:jd,depthTest:!1,depthWrite:!1,fragmentShader:`uniform sampler2D t0, t1, t2, t3, t4; uniform float uW[5]; varying vec2 vUv;
        void main(){ gl_FragColor = vec4(uW[0] * texture2D(t0, vUv).rgb + uW[1] * texture2D(t1, vUv).rgb + uW[2] * texture2D(t2, vUv).rgb + uW[3] * texture2D(t3, vUv).rgb + uW[4] * texture2D(t4, vUv).rgb, 1.0); }`}),this.texture=this.rtH[0].texture,this.uvScale=new Fe(1,1),this.quad=new er(null),this.clearColor=new ue(0,0,0),this.oldClear=new ue}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2)),r=Math.ceil(n/2),o=Math.ceil(s/2);this.high.uniforms.uHalf.value.set(n,s),this.uvScale.set(n/(2*r),s/(2*o)),this.bright.setSize(r,o);for(let l=0;l<5;l++)this.rtH[l].setSize(r,o),this.rtV[l].setSize(r,o),r=Math.max(1,Math.round(r/2)),o=Math.max(1,Math.round(o/2))}draw(e,t,n){this.quad.material=t,e.setRenderTarget(n),e.clear(),this.quad.render(e)}render(e,t,n){let s=e.autoClear,r=e.getClearAlpha();e.getClearColor(this.oldClear),e.autoClear=!1,e.setClearColor(this.clearColor,0),this.high.uniforms.tDiffuse.value=n.texture,this.high.uniforms.uThreshold.value=this.threshold,this.draw(e,this.high,this.bright);let o=this.bright;for(let u=0;u<5;u++){let h=this.blur[u],p=h.uniforms,m=this.rtH[u],x=this.rtV[u];p.tSrc.value=o.texture,p.uStep.value.set(1/m.width,0),this.draw(e,h,m),p.tSrc.value=m.texture,p.uStep.value.set(0,1/x.height),this.draw(e,h,x),o=x}let l=this.comp.uniforms.uW.value,a=3*this.strength;for(let u=0;u<5;u++)l[u]=a*(dx[u]+(1.2-2*dx[u])*this.radius);this.draw(e,this.comp,this.rtH[0]),e.setClearColor(this.oldClear,r),e.autoClear=s}};function Kw(){let e=new Uint8Array(8192),t=o=>o-Math.floor(o),n=o=>{let l=t(o*.1031);return l*=l+33.33,l*=l+l,t(l)},s=o=>{let l=Math.floor(o),a=o-l;return n(l)+(n(l+1)-n(l))*a*a*(3-2*a)};for(let o=0;o<4096;o++)e[o]=Math.round(s(((o+.5)/4096-.5)*Math.PI*2*7+3)*255),e[4096+o]=Math.round(s(((o+.5)/4096-.5)*512)*255);let r=new Mi(e,4096,2,ms);return r.wrapS=hs,r.minFilter=r.magFilter=Ot,r.generateMipmaps=!1,r.needsUpdate=!0,r}var $w={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Fe(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Fe(1/1280,1/720)},uLo:{value:new H(-.014,0,.03)},tBloom:{value:null},uBloomK:{value:0},uBloomUv:{value:new Fe(1,1)},uRays:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    // tone mapping + sRGB output and the anime grade in ONE full-screen pass (was OutputPass + a separate grade pass)
    #include <tonemapping_pars_fragment>
    uniform sampler2D tDiffuse, uRays; uniform vec2 uSun; uniform float uSunVis, uDay, uWarm, uTime, uAspect, uVig, uSat; uniform vec3 uLo; varying vec2 vUv;
    #ifdef LITE_BLOOM
    uniform sampler2D tBloom; uniform float uBloomK; uniform vec2 uBloomUv; // (phones: the bloom, added here)
    #endif
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
        // the rays: two layers of value noise round the sun (n1(7\xB7ang + 3), n1(19\xB7ang \u2212 0.03\xB7t)), read from a table (raysTable)
        float rays = pow(texture2D(uRays, vec2(ang * 0.15915494 + 0.5, 0.25)).r * 0.55 + texture2D(uRays, vec2((ang * 19.0 - uTime * 0.03) * 0.001953125 + 0.5, 0.75)).r * 0.45, 2.6);
        float e1 = exp(-dist * 1.5);
        c += rc * (rays * 0.2 + e1 * e1 * 0.12) * e1 * uSunVis;
        // the lens ghosts: three discs on the line from the sun through the centre (only pixels near it can be in one)
        vec2 axis = vec2(0.5) - uSun, ax = axis * vec2(uAspect, 1.0);
        if (abs(d.x * ax.y - d.y * ax.x) < 0.125 * length(ax)) {
          for (int i = 1; i <= 3; i++) {
            vec2 gp = uSun + axis * (0.55 + float(i) * 0.42), gd = vUv - gp; gd.x *= uAspect;
            float g = 1.0 - smoothstep(0.0, 0.05 + float(i) * 0.025, length(gd));
            c += rc * g * 0.045 * uSunVis;
          }
        }
      }
      vec2 v = vUv - 0.5; c *= 1.0 - dot(v, v) * uVig;
      gl_FragColor = vec4(c, 1.0);
    }`};function px(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1,lite:o=!1}={}){let l=i.getSize(new Fe),a=new Zt(l.x*i.getPixelRatio(),l.y*i.getPixelRatio(),{type:En,samples:n}),u=new rf(i,a);u.addPass(new of(e,t));let h=new Jd;u.addPass(h);let p=o?new Qd:new _a(new Fe(l.x*r*.5,l.y*r*.5),.42,.55,.86);u.addPass(p);let m=new ya($w);m.uniforms.uRays.value=Kw(),m.material.defines={NEUTRAL_TONE_MAPPING:""},s&&(m.material.defines.USE_FXAA=""),o&&(m.material.defines.LITE_BLOOM="",m.uniforms.tBloom.value=p.texture,m.uniforms.uBloomUv.value=p.uvScale),m.material.toneMapped=!1,u.addPass(m);let x=u.render.bind(u);return u.render=_=>{m.uniforms.toneMappingExposure.value=i.toneMappingExposure,m.uniforms.uBloomK.value=p.enabled?1:0,x(_)},{composer:u,bloom:p,grade:m,refl:h}}function mx(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let Me=0;Me<2;Me++){let De=s.getChannelData(Me);for(let Ne=0;Ne<n;Ne++)De[Ne]=(Math.random()*2-1)*Math.pow(1-Ne/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let a=e.createGain();a.gain.value=.11,l.connect(a),a.connect(t),a.connect(r);let u=(Me,De)=>{let Ne=e.createBuffer(1,e.sampleRate*Me,e.sampleRate),Ae=Ne.getChannelData(0),V=0;for(let He=0;He<Ae.length;He++)De?(V=(V+.02*(Math.random()*2-1))/1.02,Ae[He]=V*3.5):Ae[He]=Math.random()*2-1;return Ne},h=(Me,De,Ne)=>{let Ae=e.createBufferSource();Ae.buffer=Me,Ae.loop=!0;let V=e.createBiquadFilter();V.type=De,V.frequency.value=Ne;let He=e.createGain();return He.gain.value=0,Ae.connect(V),V.connect(He),He.connect(t),Ae.start(),{f:V,g:He}},p=h(u(2,!0),"lowpass",400),m=h(u(3,!1),"lowpass",700);m.g.connect(r);let x=h(u(2,!1),"bandpass",5200);x.f.Q.value=6;let _=h(u(2,!0),"lowpass",240),M=h(u(3,!1),"bandpass",2600);M.f.Q.value=.35;let c=h(u(2,!0),"lowpass",520),f=h(u(2,!1),"bandpass",1500);f.f.Q.value=.7;let d=e.createBiquadFilter(),g=e.createGain(),v=e.createOscillator(),b=e.createOscillator(),T=e.createGain();v.type="sawtooth",b.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,g.gain.value=0,T.gain.value=.5,v.connect(d),b.connect(T),T.connect(d),d.connect(g),g.connect(t),v.start(),b.start();let w=h(u(3,!1),"bandpass",750);w.f.Q.value=.6;let y=h(u(3,!0),"lowpass",420),S=h(u(2,!0),"lowpass",140),E=u(.03,!1),C=0;function P(Me,De){let Ne=e.createBufferSource(),Ae=e.createBiquadFilter(),V=e.createGain();Ne.buffer=E,Ae.type="bandpass",Ae.frequency.value=1800+Math.random()*2600,Ae.Q.value=1.2,V.gain.setValueAtTime(De*(.02+Math.random()*.03),Me),V.gain.exponentialRampToValueAtTime(1e-4,Me+.03),Ne.connect(Ae),Ae.connect(V),V.connect(t),Ne.start(Me),Ne.stop(Me+.04)}let L=0,R=0;function I(Me,De){let Ne=e.createOscillator(),Ae=e.createOscillator(),V=e.createGain(),He=e.createBiquadFilter();He.type="bandpass",He.frequency.value=1150,He.Q.value=2.2,Ne.type="square",Ne.frequency.value=745,Ae.type="triangle",Ae.frequency.value=1490,V.gain.setValueAtTime(0,Me),V.gain.linearRampToValueAtTime(.085*De,Me+.004),V.gain.exponentialRampToValueAtTime(1e-4,Me+.3),Ne.connect(He),Ae.connect(He),He.connect(V),V.connect(t),V.connect(r),Ne.start(Me),Ae.start(Me),Ne.stop(Me+.33),Ae.stop(Me+.33)}function D(Me,De){let Ne=e.createOscillator(),Ae=e.createGain();Ne.type="sine",Ne.frequency.setValueAtTime(110,Me),Ne.frequency.exponentialRampToValueAtTime(48,Me+.12),Ae.gain.setValueAtTime(1e-4,Me),Ae.gain.linearRampToValueAtTime(.22*De,Me+.006),Ae.gain.exponentialRampToValueAtTime(1e-4,Me+.17),Ne.connect(Ae),Ae.connect(t),Ne.start(Me),Ne.stop(Me+.2)}let F=e.createGain();F.gain.value=1,F.connect(t);let N=e.createGain();N.gain.value=.35,F.connect(N),N.connect(r);let U=(Me=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return F;let De=e.createStereoPanner();return De.pan.value=Me,De.connect(F),De};function W(Me,De,Ne,Ae,V,He,oe="sine",O=0){let A=e.createOscillator(),z=e.createGain();if(A.type=oe,A.frequency.setValueAtTime(De,Me),A.frequency.exponentialRampToValueAtTime(Ne,Me+Ae),O){let G=e.createOscillator(),q=e.createGain();G.frequency.value=O,q.gain.value=De*.012,G.connect(q),q.connect(A.frequency),G.start(Me),G.stop(Me+Ae+.05)}return z.gain.setValueAtTime(1e-4,Me),z.gain.linearRampToValueAtTime(V,Me+Math.min(.04,Ae*.25)),z.gain.setValueAtTime(V,Me+Ae*.7),z.gain.exponentialRampToValueAtTime(1e-4,Me+Ae),A.connect(z),z.connect(He),A.start(Me),A.stop(Me+Ae+.02),z}function k(Me,De){let Ne=U(),Ae=2+Math.floor(Math.random()*4),V=3200+Math.random()*1500;for(let He=0;He<Ae;He++){let oe=Me+He*(.09+Math.random()*.07);W(oe,V,V*(1.2+Math.random()*.3),.06,De*.022,Ne)}}function X(Me,De){let Ne=U();W(Me,1120,1390,1,De*.03,Ne,"sine",5.5),W(Me+1.15,2350,2150,.14,De*.03,Ne),W(Me+1.32,1700,1520,.13,De*.028,Ne),W(Me+1.5,2750,2480,.36,De*.032,Ne)}function ie(Me,De){let Ne=U(),Ae=1+Math.floor(Math.random()*3);for(let V=0;V<Ae;V++){let He=Me+V*.48,oe=e.createOscillator(),O=e.createBiquadFilter(),A=e.createGain();oe.type="sawtooth",oe.frequency.setValueAtTime(560,He),oe.frequency.exponentialRampToValueAtTime(420,He+.32),O.type="bandpass",O.frequency.value=1150,O.Q.value=1.6,A.gain.setValueAtTime(1e-4,He),A.gain.linearRampToValueAtTime(De*.03,He+.03),A.gain.exponentialRampToValueAtTime(1e-4,He+.36),oe.connect(O),O.connect(A),A.connect(Ne),oe.start(He),oe.stop(He+.4)}}function xe(Me,De){let Ne=U(),Ae=2+Math.floor(Math.random()*2);for(let V=0;V<Ae;V++)W(Me+V*.42,1750,1150,.36,De*.022,Ne,"triangle",11)}function Te(Me,De){let Ne=U(),Ae=e.createOscillator(),V=e.createBiquadFilter(),He=e.createGain(),oe=240+Math.random()*220,O=5+Math.floor(Math.random()*4);Ae.type="square",Ae.frequency.value=oe,V.type="bandpass",V.frequency.value=oe*2.4,V.Q.value=3,He.gain.setValueAtTime(1e-4,Me);for(let A=0;A<O;A++){let z=Me+A*.038;He.gain.linearRampToValueAtTime(De*.014,z+.008),He.gain.linearRampToValueAtTime(1e-4,z+.028)}Ae.connect(V),V.connect(He),He.connect(Ne),Ae.start(Me),Ae.stop(Me+O*.038+.05)}function Ee(Me,De){let Ne=U(),Ae=4300+Math.random()*700;for(let V=0;V<3;V++)W(Me+V*.055,Ae,Ae*1.01,.035,De*.009,Ne)}function J(Me,De){let Ne=U(0);for(let[Ae,V,He]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let oe=e.createOscillator(),O=e.createGain();oe.type="sine",oe.frequency.value=Ae,oe.detune.value=(Math.random()-.5)*8,O.gain.setValueAtTime(1e-4,Me),O.gain.linearRampToValueAtTime(De*.05*V,Me+.03),O.gain.exponentialRampToValueAtTime(1e-4,Me+He),oe.connect(O),O.connect(Ne),oe.start(Me),oe.stop(Me+He+.1)}}function Q(Me,De){let Ne=U();for(let Ae of[Me,Me+.22])W(Ae,2650,2600,.5,De*.018,Ne),W(Ae,3950,3900,.35,De*.008,Ne)}let ye={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ie=Me=>Me>1e-4?-Math.log(1-Math.random()*.98)/Me:1e9,K=Me=>440*Math.pow(2,(Me-69)/12),ve=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Oe=[72,74,76,79,81,84,86,88],Ve=0,Ge=e.currentTime+.2,Ze=e.currentTime+3;function ot(Me){let De=ve[Ve++%ve.length],Ne=11;for(let Ae of De)for(let V of[-5,5]){let He=e.createOscillator(),oe=e.createGain();He.type=V<0?"sine":"triangle",He.frequency.value=K(Ae),He.detune.value=V,oe.gain.setValueAtTime(0,Me),oe.gain.linearRampToValueAtTime(.18,Me+3.5),oe.gain.setValueAtTime(.18,Me+Ne-4),oe.gain.linearRampToValueAtTime(0,Me+Ne+1),He.connect(oe),oe.connect(l),He.start(Me),He.stop(Me+Ne+1.2)}}function ct(Me){let De=Oe[Math.floor(Math.random()*Oe.length)],Ne=e.createOscillator(),Ae=e.createOscillator(),V=e.createGain(),He=e.createGain();Ne.type=Ae.type="sine",Ne.frequency.value=K(De),Ae.frequency.value=K(De)*2.01,He.gain.value=.25,Ae.connect(He),He.connect(V),V.gain.setValueAtTime(0,Me),V.gain.linearRampToValueAtTime(.05,Me+.02),V.gain.exponentialRampToValueAtTime(1e-4,Me+4),Ne.connect(V),V.connect(r),V.connect(t),Ne.start(Me),Ae.start(Me),Ne.stop(Me+4.2),Ae.stop(Me+4.2)}return{ac:e,muted:!1,tyres:f,engG:g,bump(Me){D(e.currentTime+.01,Me)},update(Me,De,Ne,Ae={}){let V=e.currentTime;if((Ae.bell||0)>.01)for(L<V&&(L=V+.02);L<V+.12;)I(L,Ae.bell),L+=.41;let He=Ae.rain||0;M.g.gain.setTargetAtTime(He*.05,V,.6),c.g.gain.setTargetAtTime(He*.05,V,.6);let oe=(Ae.wetRoad||0)*Math.min(1,Me)**1.5,O=.8+.2*Math.sin(V*2.3)*Math.sin(V*.9+1);if(f.g.gain.setTargetAtTime(oe*.045*O,V,.4),f.f.frequency.setTargetAtTime(900+1500*Math.min(Me,2),V,.4),He>.05&&Ae.roof)for(C<V&&(C=V+.02);C<V+.12;)P(C,He),C+=.04+Math.random()*.12/He;let A=Ae.water||0,z=.6+.4*Math.sin(V*1.3)*Math.sin(V*.37);w.g.gain.setTargetAtTime(A*.035*z,V,.25),w.f.frequency.setTargetAtTime(600+400*z,V,.25);let G=.35+.65*Math.pow(.5+.5*Math.sin(V*.23)*Math.sin(V*.071+2),2),q=Ae.rush||0;y.g.gain.setTargetAtTime(((De.mountain||0)+(De.snow||0)*.7)*.06*G+q*.055,V,.8),y.f.frequency.setTargetAtTime(260+420*G+q*500,V,.8);let j=Ae.train||0;if(_.g.gain.setTargetAtTime(j*.16,V,.2),j>.04)for(R<V&&(R=V+.02);R<V+.12;)D(R,j),D(R+.15,j*.8),R+=1.2;for(;Ge<V+1;)ot(Ge),Ge+=8;Ze<V+.5&&(ct(Ze),Ze+=1.5+Math.random()*4.5);let te=Ae.tunnel||0;{let Z=Ae.speed||0,Pe=Ae.load||0,pe=850+2400*(1-Math.exp(-Z/15))+Math.max(0,Z-25)*60+Pe*1300,Ue=pe/40;v.frequency.setTargetAtTime(Ue,V,.25),b.frequency.setTargetAtTime(Ue*2,V,.25),d.frequency.setTargetAtTime(200+pe*.08+Pe*260,V,.3),g.gain.setTargetAtTime((.008+.01*Math.min(1,Z/15)+.024*Pe)*(1-.6*(Ae.rush||0))*(Ae.roof===!1?.5:1)*(1+.7*te),V,.3)}p.g.gain.setTargetAtTime((.03+Me*.06)*(1+1.6*te),V,.35),p.f.frequency.setTargetAtTime((250+Me*500)*(1+.5*te),V,.35),S.g.gain.setTargetAtTime(te*.07,V,.4),o.gain.setTargetAtTime(.55+.6*te,V,.4);let $=.5+.5*Math.sin(V*.55)*Math.sin(V*.21+1);m.g.gain.setTargetAtTime(De.coast*(.012+$*.05),V,.3),m.f.frequency.setTargetAtTime(400+$*900,V,.3);let re=1-Math.min(1,He*1.4),ae=1-Ne,ge=Ae.dusk||0,fe=De.snow||0,_e=1-fe,de={sparrow:Ne*re*.22*(.3+De.city*.5+De.sakura+De.country*.8+De.coast*.2+(De.mountain||0)*.5)*(1-fe*.8),uguisu:Ne*re*De.sakura*.06,crow:re*(ge*.14+Ne*(De.city+De.country+(De.mountain||0)*1.5+fe*2.5)*.012),gull:Ne*De.coast*re*.16,frog:ae*(De.country*5+De.sakura*.6+De.coast*.3)*(1+He*.6)*_e,cricket:ae*re*(1.6-De.city*1.1+(De.mountain||0)*.8)*_e,bike:Ne*re*De.city*.014,bell:fe*.022+(De.mountain||0)*.006},Be={sparrow:k,uguisu:X,crow:ie,gull:xe,frog:Te,cricket:Ee,bike:Q,bell:J};for(let Z in de)V<ye[Z]||(de[Z]>1e-4&&Be[Z](V+.05,.6+Math.random()*.4),ye[Z]=V+Math.max(.12,Ie(de[Z]||1e-6)));let ke=.5+.5*Math.sin(V*7)*Math.sin(V*.4);x.g.gain.setTargetAtTime((De.country+De.sakura*.3)*Ne*.006*ke*(1-(De.snow||0)),V,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function gx(i){let t=new nn(.075,.05),n=new vn({color:16777215,side:Tn}),s=new fs(t,n,420);s.frustumCulled=!1,s.count=0;let r=new ue("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(v=>new ue(v));for(let v=0;v<420;v++)s.setColorAt(v,r);let l=Array.from({length:420},()=>({p:new H(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),a=new st,u=new yn,h=new ni,p=new H(1,1,1),m=new H,x=90,_=new Float32Array(x*3),M=Array.from({length:x},()=>({p:new H(1e9,0,0),ph:Math.random()*6.28})),c=new xt;c.setAttribute("position",new _t(_,3));let f=new Fo({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Xi,opacity:0}),d=new tl(c,f);d.frustumCulled=!1;let g=(v,b,T,w,y)=>{let S=y?8+Math.random()*42:-4+Math.random()*50,E=(Math.random()-.5)*40;v.p.set(b.x+T.x*S+w.x*E,b.y-1+Math.random()*9,b.z+T.z*S+w.z*E)};return{group:[s,d],shift(v,b){for(let T of l)T.p.x-=v,T.p.z-=b;for(let T of M)T.p.x-=v,T.p.z-=b},update(v,b,T,w,y,S,E,C,P,L=0){let R=Math.floor(420*Math.min(1,S*1.1+L*.55));n.color.setScalar(1-.72*C);let I=!1;s.count=R;for(let F=0;F<R;F++){let N=l[F];m.subVectors(N.p,T);let U=m.x*w.x+m.z*w.z,W=m.x*y.x+m.z*y.z;if(N.p.x>1e8||U<-6||U>55||Math.abs(W)>24||N.p.y<E-.5){g(N,T,w,y,N.p.x<1e8);let k=Math.random()*(S+L)<L;(k!==N.leaf||k)&&(N.leaf=k,s.setColorAt(F,k?o[Math.floor(Math.random()*o.length)]:r),I=!0)}N.p.y-=N.v*v,N.p.x+=Math.sin(b*.7+N.ph)*.4*v+.25*v,N.p.z+=Math.cos(b*.5+N.ph)*.3*v,h.set(b*N.sp+N.ph,b*N.sp*.7,N.ph),u.setFromEuler(h),p.setScalar(N.leaf?1.9:1),a.compose(N.p,u,p),s.setMatrixAt(F,a)}s.instanceMatrix.needsUpdate=!0,I&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=C*P;if(f.opacity=D,d.visible=D>.01,d.visible){for(let F=0;F<x;F++){let N=M[F];m.subVectors(N.p,T);let U=m.x*w.x+m.z*w.z,W=m.x*y.x+m.z*y.z;if(N.p.x>1e8||U<-4||U>60||Math.abs(W)>30){let k=2+Math.random()*55,X=(Math.random()-.5)*55;N.p.set(T.x+w.x*k+y.x*X,E+.3+Math.random()*2.2,T.z+w.z*k+y.z*X)}N.p.x+=Math.sin(b*.6+N.ph*3)*.3*v,N.p.y+=Math.sin(b*.9+N.ph)*.2*v,N.p.z+=Math.cos(b*.5+N.ph*2)*.3*v,_[F*3]=N.p.x,_[F*3+1]=N.p.y,_[F*3+2]=N.p.z}c.attributes.position.needsUpdate=!0}}}}var ut=new URLSearchParams(location.search),ba=ut.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();ba&&document.body.classList.add("embed");ut.has("shot")&&document.body.classList.add("shot");Lg(ut.has("seed")?parseInt(ut.get("seed")):Math.random()*1e9|0);Ng(ut.get("env")||"city");var Yn=i=>document.getElementById(i),so=i=>{let e=Yn("loading");e&&(e.textContent=i)};async function Jw(){await new Promise(me=>setTimeout(me,30));let i=Yn("c"),e=new Sh({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ut.get("q")||(ba||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?ba?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=Gt,e.toneMapping=yl,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Vr,e.debug.checkShaderErrors=ut.has("debug");let r=ut.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",l=Fv(n==="high"&&innerHeight*s>=560?"hi":"lo"),a=Iv(o),u=Cv(n==="high"&&innerHeight*s>=560?"hi":"lo"),h=n==="high"&&innerHeight*s>=560?"hi":"lo",p=Pv(h),m=Promise.race([Promise.all([l,a,u,p]),new Promise(me=>setTimeout(me,4e3))]),x=r==="old"?Promise.resolve(null):m.then(()=>Rv(o)),_=m.then(()=>Dv(o)),M=new Br;M.fog=new Ja(13032946,.0019,700);let c=new Zn(52,innerWidth/innerHeight,.5,7e3),f=new Vo(16777215,3);f.castShadow=!0;let d=n==="low"?1024:n==="mid"?1536:2048;f.shadow.mapSize.set(d,d);let g=62,v=f.shadow.camera,b=new st,T=new st;Object.assign(v,{left:-g,right:g,top:g,bottom:-g,near:1,far:420});let w={R:g,HH:25,HL:10,HC:15},y=4e-4*419,S=new dt(0,0,1,1);f.shadow.getViewport=()=>S;let E=new H(0,1,0),C=new H,P=new H,L=new H,R=new H(0,1,0),I=new H(0,150,60),D=new H,F=new H,N=null,U=0,W=0,k=0;f.shadow.updateMatrices=function(){v.position.copy(I),v.lookAt(D),v.updateMatrixWorld(),v.updateProjectionMatrix(),T.multiplyMatrices(v.matrixWorldInverse,b).multiply(v.matrixWorld),v.projectionMatrix.multiply(T),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),this._updateMatrix(v,this.matrix,this._frustum,S)};let X=!0;f.shadow.bias=-4e-4;let ie=()=>{f.shadow.normalBias=ut.has("nb")?parseFloat(ut.get("nb")):1.5*2*g/f.shadow.mapSize.x};ie();{let[me,nt]=(ut.get("graze")||"0,0.12").split(",").map(Number);Xg(me,nt)}M.add(f,f.target);let xe=new Vo(16777215,0);xe.castShadow=n!=="low"&&!ut.has("nocarsh");{let me=ut.has("carsm")?parseInt(ut.get("carsm")):n==="high"?512:384;xe.shadow.mapSize.set(me,me)}if(Object.assign(xe.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),xe.shadow.bias=-2e-4,xe.shadow.normalBias=.025,M.add(xe,xe.target),xe.castShadow){let me=f.shadow.getFrustum(),nt=xe.shadow.getFrustum();for(let Je of[pt,el]){let Wt=Je.prototype.intersectsFrustum;Je.prototype.intersectsFrustum=function(Wn){return Wn===nt?this.userData.car===!0:(Wn!==me||this.userData.car!==!0)&&Wt.call(this,Wn)}}}let Te=new ml(10799359,13154464,1.6);M.add(Te),so("painting the town\u2026"),await new Promise(me=>setTimeout(me,10));let Ee=d1();C1(Ee);let J=await u,Q=await p,ye=p1(Ee,h,J,Q);ye.houses&&$1(Q.types),J&&J.img.close(),Q&&Q.img.close();let Ie=m1(e);O1(Ie.cells),we.uTuftV.value.set(...Ie.tuftV);let K=r1(Ee.textures(e),Ie.tex,ye.textures(e)),ve=$g();ve.update(e,0,0,0,0),so("painting the clouds\u2026"),await new Promise(me=>setTimeout(me,10)),k1(ut.has("leafd")?parseFloat(ut.get("leafd")):n==="high"?.72:.62);{let me=await l;if(me){$i.cells=me.cells.filter(Wt=>Wt.kind==="leaf"),me.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let nt=dd(me.tex);K.gleaf=nt.mat,K.gleafDepth=nt.depth;let Je=me.cells.filter(Wt=>Wt.kind==="blossom");Je.length&&($i.bcells=Je,K.gblossom=dd(me.tex,{blossom:!0}).mat)}}X1(),rv();let Oe=[2.1,1.75,3.2],Ve=[1.42,1.47,1.74],Ge=[.95,1.05,1.8],Ze=[.91,1.34,1.2],ot=[1.88,1.28,2],ct=[1.97,1.54,1.62],Me=(me,nt,Je)=>({c:me,co:nt,sa:Je}),De=Me([...Oe],[...Ge],[...ot]),Ne=Me([3.8,1.6,3.2],[3.4,2,3],[7,4.6,2.6]),Ae=Me([2.3,1.4,5.6],[.62,.85,4],[2.6,2.3,10]),V=Me([2.6,1.8,6],[5.5,3,8],[4,2.6,6]),He=Ks([[0,V],[.2,fn(V,Ae,.3)],[.245,fn(Ae,Ne,.4)],[.3,De],[.62,De],[.7,Ne],[.75,Ae],[.765,fn(Ae,V,.25)],[.8,fn(Ae,V,.55)],[.86,V],[1,V]]);{let me=await a;me&&(me.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),wi.tex=me.tex,wi.uFieldK.value.set(1/me.tile[0],1/me.tile[1]),wi.uFieldM.value.set(...me.mean))}let oe=new Ch;K.shore=qv(n!=="high"),K.surf=Yv(),pa.n=n==="high"?8:4,pa.drops=n==="high"?4:2,K.tetra=n1(jl,n!=="high"),K.bark=i1(n!=="high");let O=Xv(),A=rx(n,ut.has("grass")?ut.get("grass").split(",").map(Number):null);for(let me of A.meshes)M.add(me);let z=new tf(M,oe,K,O),G=mv();M.add(G);let q=xv();M.add(q.group);let j=Gv(n!=="high");M.add(j.mesh);let te=hx();te.group.rotation.order="YXZ",M.add(te.group),te.group.traverse(me=>{me.userData.car=!0});let $=gx(K.glowTex);$.group.forEach(me=>M.add(me));let re=ut.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),ae=px(e,M,c,{msaa:re==="msaa"?n==="high"?4:2:0,fxaa:re==="fxaa",lite:n!=="high"});we.uReflTex.value=ae.refl.rt.texture;let ge=null,fe=null,_e=null,de=new H,Be=new H,ke=ut.get("refl")||"auto",Z=ut.has("backlit")?parseFloat(ut.get("backlit")):1,Pe=[7.5,3,2.3],pe=[1.7,1.15,1],Ue=.7,We={b:[...Pe]},Re={c:[1,1,1]},lt={c:[.78,.82,1.15]},tt={c:[.52,.56,1.3]},kt={c:[1.25,1.9,2.2]},Ht=Ks([[0,kt],[.2,fn(kt,tt,.3)],[.245,fn(tt,lt,.4)],[.3,Re],[.62,Re],[.7,lt],[.75,tt],[.765,fn(tt,kt,.25)],[.8,fn(tt,kt,.55)],[.86,kt],[1,kt]]),Ai=Ks([[0,{b:[22,16,6]}],[.2,{b:[16,12,5.5]}],[.245,{b:[7,4.6,3]}],[.3,We],[.62,We],[.7,{b:[7.5,5,2.3]}],[.75,{b:[4.2,3,2.6]}],[.765,{b:[8,6.5,3.8]}],[.8,{b:[14,11,5]}],[.86,{b:[22,16,6]}],[1,{b:[22,16,6]}]]),zi={d:[57,76,94],s:[82,96,114],m:[156,151,148],l:[207,197,189],fl:[246,251,254],fs:[160,205,240]},af={d:[77,65,62],s:[93,73,69],m:[160,111,81],l:[209,153,107],fl:[250,223,177],fs:[182,164,157]},lf={d:[42,33,47],s:[56,41,56],m:[74,52,68],l:[124,80,90],fl:[247,180,162],fs:[177,122,140]},ic={d:[30,38,48],s:[42,52,64],m:[56,68,82],l:[84,98,116],fl:[133,172,202],fs:[70,105,140]},Ma=["d","s","m","l","fl","fs"],cf=[we.uTpD.value,we.uTpS.value,we.uTpM.value,we.uTpL.value,we.uTpFL.value,we.uTpFS.value],sc={s:[38,23,16],m:[54,34,25],l:[104,70,48],s2:[60,50,37],m2:[112,90,65],l2:[164,126,86]},rc={s:[41,24,18],m:[51,29,20],l:[100,58,34],s2:[81,43,24],m2:[106,61,36],l2:[150,95,50]},Ns={s:[26,18,22],m:[34,22,26],l:[72,42,42],s2:[55,32,35],m2:[80,45,45],l2:[132,70,50]},Sa={s:[14,15,22],m:[20,22,30],l:[40,48,66],s2:[30,32,38],m2:[42,44,52],l2:[70,78,95]},oc=["s","m","l","s2","m2","l2"],ac=[we.uBkS.value,we.uBkM.value,we.uBkL.value,we.uBkS2.value,we.uBkM2.value,we.uBkL2.value],xs=(me,nt,Je,Wt)=>Ks([[0,me],[.2,fn(me,nt,.3)],[.245,fn(nt,Wt,.4)],[.3,Je],[.62,Je],[.7,Wt],[.75,nt],[.765,fn(nt,me,.25)],[.8,fn(nt,me,.55)],[.86,me],[1,me]]),lc=xs(ic,lf,zi,af),ro=xs(Sa,Ns,sc,rc),ff=xs({n:[1,1,1],f:[1,1,1]},{n:[.4,.8,1.2],f:[1.1,1.5,1.4]},{n:[.46,.53,.68],f:[.95,1.05,1.3]},{n:[.55,.55,.7],f:[.85,.62,.75]}),df=xs({f:[.2,.32,.55]},{f:[.84,.4,.59]},{f:[1.04,1.28,1.59]},{f:[.65,.34,.54]}),tr={m:[205,105,150],w:[.3,0,0]},B={m:[188,88,132],w:[.47,0,0]},ne=xs(tr,tr,B,tr),he=new ue,le=new ue().setRGB(1,232/255,242/255,Gt),ce=ut.has("lightson")?parseFloat(ut.get("lightson")):-1,qe=1.4,$e=new H,Xe=200,je=new H,rt=110*Math.PI/180,yt=150*Math.PI/180,bt=(me,nt,Je,Wt)=>{let Wn=Math.hypot(me.x,me.z),xn=me.x*nt.z-me.z*nt.x<0?-1:1,$t=Math.cos(Je)*Wn,vi=Math.sin(Je)*Wn*xn;return Wt.set(nt.x*$t+nt.z*vi,me.y,nt.z*$t-nt.x*vi).transformDirection(c.matrixWorldInverse)},Qe=new H,Vt=ut.has("haze")?parseFloat(ut.get("haze")):1,dn=a1();M.add(dn.group);let Ft=l1();M.add(Ft.group);let Lt=ex(ut),Cn=nx(),Ke=tx();M.add(Cn.mesh,Ke.mesh);let Mn=ix();M.add(Mn.mesh);let At=sx();M.add(At.mesh);let li=new ue,Ri=new ue,is=new dt,Hi=ox();M.add(Hi.mesh);let Ut=Lt.W.rain,sn=.4,Vi=5.5,ee={s:Math.max(100,parseFloat(ut.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Jt(parseFloat(ut.get("t"))||.4,0,.999),todPaused:ut.has("freeze"),dist:0,spray:ut.has("nospray")?0:1,grass:1,pclouds:1,band:1,waves:1,shore:1,surf:1,tetra:1,bark:1,trunks:1,todpaint:1,road:1,carkey:1,sunroad:1,volkey:1,shsoft:1,shfit:1,cam:{low:1,eye:2,top:3,film:4}[ut.get("cam")]??(ba?4:0)},Sn=!1;so("building the road\u2026"),await new Promise(me=>setTimeout(me,10));let nr=ba?620:z.ahead;z.ahead=260;let cc=ut.has("detail")?parseFloat(ut.get("detail")):380,vx=ut.has("farleaf")?parseFloat(ut.get("farleaf")):540;for(;z.update(ee.s,1e9););z.flush(),z.ahead=nr;{so("preparing the light\u2026"),await new Promise($t=>setTimeout($t,10));let me=new pn,nt=new xt;nt.setAttribute("position",new et([0,0,0,.01,0,0,0,.01,0],3)),nt.setAttribute("normal",new et([0,1,0,0,1,0,0,1,0],3)),nt.setAttribute("uv",new et([0,0,1,0,0,1],2)),nt.setAttribute("color",new et([1,1,1,1,1,1,1,1,1],3));let Je=new xt;Je.setAttribute("position",nt.attributes.position);let Wt=new Set([K.shore,K.surf,O]),Wn=[K.color,K.atlas,K.foliage,K.leaf,K.lamp,K.sig,K.sodium,K.decal,K.pool,K.shore,K.surf,O,K.tetra,K.bark,...K.gleaf?[K.gleaf]:[],...K.gblossom?[K.gblossom]:[]];for(let $t=0;$t<Ui.length;$t++)Wn.push(Bl([Ui[$t]])),Wn.push(Bl([Ui[$t],Ui[($t+1)%Ui.length]]));for(let $t of Wn){let vi=new pt(Wt.has($t)?Je:nt,$t);vi.castShadow=vi.receiveShadow=!Wt.has($t),vi.frustumCulled=!1,($t===K.gleaf||$t===K.gblossom)&&(vi.customDepthMaterial=K.gleafDepth),$t===K.atlas&&(vi.customDepthMaterial=K.atlasDepth),me.add(vi)}me.position.set(0,0,0),M.add(me),f.target.position.set(0,0,0),f.position.set(0,150,60);let xn=[Cn.mesh,Ke.mesh,Mn.mesh,At.mesh,Ft.group,dn.group,j.mesh].filter($t=>!$t.visible);for(let $t of xn)$t.visible=!0;A.warm(!0),e.setRenderTarget(ae.composer.readBuffer),e.compile(M,c),e.render(M,c),e.setRenderTarget(null);for(let $t of xn)$t.visible=!1;A.warm(!1),M.remove(me),nt.dispose(),Je.dispose(),ae.bloom.enabled=ae.refl.enabled=!0,ae.composer.render(0),ae.bloom.enabled=ae.refl.enabled=!1}{so("painting the sky\u2026");let me=await x;ge=me?Lv(me,ae):null,ge&&M.add(ge.mesh),fe=!ge||r==="both"?vv(gv(e)):null,fe&&M.add(fe.group),ge&&(ge.opening=["sakura","city"].includes(mn(ee.s))?"center":"flank");let nt=await _;_e=nt?Nv(nt,ae,M.fog.color):null,_e&&M.add(_e.mesh),e.setRenderTarget(ae.composer.readBuffer),e.compile(M,c),e.setRenderTarget(null),me&&e.initTexture(me.tex),nt&&e.initTexture(nt.tex)}let zt={k:Math.ceil((ee.s-Kr)/Zr),phase:"idle",raise:1,decided:!1,t2:0},Dt={},Kt={},Yt={},xx=ut.has("yaw")||ut.get("cam")==="top",wa=new H,Ta=new H,Ci=new H,uc=!1,pf=new H,mf=new H,yx=Yn("spd"),_x=Yn("dist"),bx=Yn("clock"),hc=Yn("zone"),fc=Yn("start"),np=Yn("hint"),Pn=null,ip=null,sp=0,rp=0;function Mx(me){!Sn||me===ip||(ip=me,hc.querySelector(".jp").textContent=Il[me].jp,hc.querySelector(".en").textContent=Il[me].en,hc.classList.add("on"),clearTimeout(sp),sp=setTimeout(()=>hc.classList.remove("on"),5200))}function gf(){if(!Sn){if(Sn=!0,document.body.classList.remove("pre"),!ut.has("auto"))try{Pn=mx(),Pn&&Pn.ac.resume()}catch{Pn=null}fc.style.opacity=0,setTimeout(()=>fc.remove(),1500),ba||(np.style.opacity=.75,setTimeout(()=>np.style.opacity=0,9e3))}}let mi={};addEventListener("keydown",me=>{mi[me.key]=!0,(me.key==="m"||me.key==="M")&&ap(),(me.key==="t"||me.key==="T")&&lp(),(me.key==="c"||me.key==="C")&&up(),(me.key==="r"||me.key==="R")&&dp(),!Sn&&(me.key===" "||me.key==="Enter")&&gf()}),addEventListener("keyup",me=>{mi[me.key]=!1});let Un=null;i.addEventListener("pointerdown",me=>{Un={id:me.pointerId,x:me.clientX,y:me.clientY,sy:me.clientY,sc:ee.mult}});let op=me=>Jt(me.sc*Math.exp(-((me.y-me.sy)/innerHeight)*3.4),sn,Vi);addEventListener("pointermove",me=>{Un&&me.pointerId===Un.id&&(Un.x=me.clientX,Un.y=me.clientY,ee.mult=op(Un))}),addEventListener("pointerup",()=>{Un=null}),addEventListener("pointercancel",()=>{Un=null}),i.addEventListener("touchstart",me=>{let nt=me.changedTouches[0];Un={id:"touch",x:nt.clientX,y:nt.clientY,sy:nt.clientY,sc:ee.mult},me.preventDefault()},{passive:!1}),i.addEventListener("touchmove",me=>{if(!Un)return;let nt=me.changedTouches[0];Un.x=nt.clientX,Un.y=nt.clientY,ee.mult=op(Un),me.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{Un=null}),i.addEventListener("touchcancel",()=>{Un=null});function ap(){Pn&&(Pn.toggle(),Yn("snd").style.opacity=Pn.muted?.4:1)}function lp(){ee.todPaused=!ee.todPaused,Yn("tim").style.opacity=ee.todPaused?.4:1}let vf=[0,1,2,4],cp={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function up(){ee.cam=vf[(vf.indexOf(ee.cam)+1)%vf.length],Yn("cam").textContent=cp[ee.cam]||"\u25D0",ee.cam===4&&xf()}let hp=["chase","side","road","crane","eye","side","road"],rn={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function xf(){let me;do me=hp[Math.floor(Math.random()*hp.length)];while(me===rn.last);{let nt=Ki(ee.s+60);nt&&Math.abs(ee.s+60-nt.s)<ln+120&&(me=Math.random()<.6?"chase":"eye")}if(Object.assign(rn,{type:me,last:me,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),me==="road"){let nt=ee.s+40+Math.random()*18,Je=Xn(nt,"rw"),Wt=Math.random()<.6?-1:1,Wn=Wt*(Je+(Wt<0?.9:1.3)),xn=oe.at(nt,{}),$t=xn.y+Ps(nt,Wn,xn.y,Je);rn.anchor={x:xn.x+xn.rx*Wn,y:Math.max($t,xn.y)+1.05,z:xn.z+xn.rz*Wn,s:nt}}uc=!1}let fp={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function dp(){Yn("wx").textContent=fp[Lt.cycle()]}Yn("wx").textContent=fp[Lt.W.mode],Yn("cam").textContent=cp[ee.cam]||"\u25D0",ee.cam===4&&xf(),Yn("wx").onclick=me=>{me.stopPropagation(),dp()},Yn("snd").onclick=me=>{me.stopPropagation(),ap()},Yn("tim").onclick=me=>{me.stopPropagation(),lp()},Yn("cam").onclick=me=>{me.stopPropagation(),up()};let pp=0,Sx=me=>{let nt=performance.now();nt-pp<120||(pp=nt,me.cancelable&&me.type!=="click"&&me.preventDefault(),gf())};for(let me of["touchstart","pointerdown","mousedown","click"])fc.addEventListener(me,Sx,{passive:!1});let wx=()=>{Pn&&Pn.ac.state!=="running"&&Pn.ac.resume()};for(let me of["touchend","click","keydown"])addEventListener(me,wx,{passive:!0});document.addEventListener("visibilitychange",()=>{Pn&&(document.hidden?Pn.ac.suspend():Pn.ac.resume())});let Ea=!1,mp="",Aa=52,Ra=0;function gp(){let me=innerWidth,nt=innerHeight,Je=me/nt,Wt=me+"x"+nt+"@"+s;Wt!==mp&&(mp=Wt,e.setPixelRatio(s),e.setSize(me,nt,!1),ae.composer.setPixelRatio(s),ae.composer.setSize(me,nt),c.aspect=Je,Aa=Je>=1?52:Jt(2*Math.atan(Math.tan(34*Math.PI/180)/Je)*180/Math.PI,52,80),c.fov=Aa+Ra,c.updateProjectionMatrix(),ae.grade.uniforms.uAspect.value=Je,ae.grade.uniforms.uTexel.value.set(1/ae.composer.readBuffer.width,1/ae.composer.readBuffer.height),we.uReflRes.value.set(ae.composer.readBuffer.width,ae.composer.readBuffer.height),Ev(e))}addEventListener("resize",()=>{Ea=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Ea=!0}),gp();let dc=0;function vp(me=!0){if(s>1.05)s=Math.max(1,s-.25),Ea=!0;else if(X)X=!1,ae.bloom.enabled=!1;else if(f.shadow.mapSize.x>1024)f.shadow.mapSize.set(1024,1024),ie(),f.shadow.map&&(f.shadow.map.dispose(),f.shadow.map=null);else if(z.ahead>430)z.ahead=430;else return;if(dc++,me)try{localStorage.setItem("icd-q",String(dc))}catch{}}try{let me=parseInt(localStorage.getItem("icd-q")||"0");if(!ut.has("q"))for(let nt=0;nt<Math.min(me,6);nt++)vp(!1);dc=Math.max(dc,me||0)}catch{}let xp=performance.now(),gi=0,yp=0,Ca=0,Pa=()=>1-se.night,yf=0,on=0,_p=0,St=ut.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;St&&(St.gl=e.getContext(),St.tq=St.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let Pi={p:-1,a:new H,b:new H,next:5},Nt={lat:0,lon:0,road:0,jolt:0,kick:0,u:ee.u,vu:0,v:0,s:ee.s,yaw:0,brake:0,rk:NaN,rb:null},Tx=new ue(3.6,2.8,1.8),bp=(me,nt,Je,Wt)=>dv(ee.tod+(nt?me*.001:0),Wt,se.head===null?null:oe.meanHeading(ee.s+me*Je,Xe)),Ex=[-2.5335,-1.4665,1.4665,2.5335],Mp=[1.12,-1.12],Ax=[-24.5,24.5];function Sp(me){requestAnimationFrame(Sp);let nt=performance.now();Ea&&(Ea=!1,gp());let Je=Math.min(.05,Math.max(0,(me-xp)/1e3));xp=me,gi+=Je,ee.steer=0,(mi.ArrowLeft||mi.a||mi.A)&&(ee.steer=-1),(mi.ArrowRight||mi.d||mi.D)&&(ee.steer=1),(mi.ArrowUp||mi.w||mi.W)&&(ee.mult=Jt(ee.mult*Math.exp(Je*.9),sn,Vi)),(mi.ArrowDown||mi.s||mi.S)&&(ee.mult=Jt(ee.mult*Math.exp(-Je*.9),sn,Vi)),Un&&Math.abs(Un.y-Un.sy)<30&&(ee.steer=Un.x<innerWidth/2?-1:1),ee.steer&&(ee.lastInput=me,ee.uHome=ee.u);let Wt=ea(zt.k);ee.s-Wt>24&&(zt.k++,Wt=ea(zt.k),Object.assign(zt,{phase:"idle",raise:1,decided:!1}));let Wn=Nl(Wt),xn=Wt-ee.s;Wn&&!zt.decided&&xn<150&&(zt.decided=!0,xn>75&&Sn&&ee.speed*ee.speed/2.5<xn-14&&(ut.has("xing")||_n(zt.k,99)<.8)&&(zt.phase="warn",Ft.start(Wt,_n(zt.k,7)<.5?1:-1,16))),zt.phase==="warn"?(zt.raise=Math.max(0,zt.raise-Je/6),Ft.st.cleared&&(zt.phase="clear",zt.t2=0)):zt.phase==="clear"?(zt.raise=Math.max(0,zt.raise-Je/6),(zt.t2+=Je)>2.2&&(zt.phase="raise")):zt.phase==="raise"&&(zt.raise=Math.min(1,zt.raise+Je/5),zt.raise>=1&&(zt.phase="idle"));let $t=zt.phase==="warn"||zt.phase==="clear"||zt.phase==="raise"&&zt.raise<.25,vi=Xn(ee.s,"speed")*ee.mult*(Sn?1:.55);if(zt.phase!=="idle"&&zt.raise<.8&&xn>0){let Se=xn-11.2,Le=Se>0?Math.sqrt(2*1.25*Se):0;vi=Math.min(vi,Le),ee.speed=Math.min(ee.speed,Le)}ut.has("park")&&(vi=0,ee.speed=0),ee.speed+=(vi-ee.speed)*Math.min(1,Je*.5),ee.s+=ee.speed*Je,ee.dist+=ee.speed*Je;let pc=Xn(ee.s,"rw");ee.steer?ee.u=Jt(ee.u+ee.steer*Je*2.4,-pc+.85,pc-.85):me-ee.lastInput>3e3&&(ee.u+=(Jt(ee.uHome,-pc+.85,pc-.85)+Math.sin(gi/11)*.1-ee.u)*Math.min(1,Je*.9)),!ee.todPaused&&Sn&&(ee.tod=(ee.tod+Je/480*(se.night>.5?1.7:1))%1),hv(ee.tod,ee.sunroad?oe.meanHeading(ee.s,Xe):null),Lt.update(Je);let Bn=Lt.W.ov,Fs=Lt.W.rain;pv(Bn,Fs),Ut=Jt(Ut+(Fs>.25?Je/18:-Je/120),0,1);let wp=performance.now();z.update(ee.s,Sn?3.5:14);let Tp=performance.now();if(oe.at(ee.s,Dt),Math.abs(Dt.x-z.origin.x)>900||Math.abs(Dt.z-z.origin.z)>900){let Se=Math.round(Dt.x)-z.origin.x,Le=Math.round(Dt.z)-z.origin.z;z.setOrigin(Math.round(Dt.x),Math.round(Dt.z)),wa.x-=Se,wa.z-=Le,Ta.x-=Se,Ta.z-=Le,$.shift&&$.shift(Se,Le),Hi.shift(Se,Le),Mn.shift(Se,Le)}let ss=z.origin.x,rs=z.origin.z,Rx=(oe.at(ee.s+1.5,Yt).y-oe.at(ee.s-1.5,Kt).y)/3,Cx=(Yt.h-Kt.h)/3;if(te.group.position.set(Dt.x+Dt.rx*ee.u-ss,Dt.y+.01,Dt.z+Dt.rz*ee.u-rs),Je>0){let Se=Nt.vu+((ee.u-Nt.u)/Je-Nt.vu)*Math.min(1,Je*6),Le=(Se-Nt.vu)/Je;Nt.u=ee.u,Nt.vu=Se,Nt.lat=Le-ee.speed*ee.speed*Cx,Nt.lon+=((ee.speed-Nt.v)/Je-Nt.lon)*Math.min(1,Je*8),Nt.v=ee.speed;let ze=zt.phase!=="idle"&&xn>0&&xn<20&&ee.speed<.5;if(Nt.brake=Nt.lon<-.6||ze?1:Nt.lon>-.3?0:Nt.brake,Nt.yaw=-Jt(Math.atan(Se/Math.max(ee.speed,6))*.8,-.1,.1),Nt.road=.004*Math.sin(ee.s*.48)+.003*Math.sin(ee.s*.86+1.3),Nt.jolt=Nt.kick=0,Wn)for(let it=0;it<4;it++)for(let Et=0;Et<2;Et++){let Bt=Wt+Ex[it]-Mp[Et];if(Nt.s<Bt&&ee.s>=Bt){let Mt=.05+Math.min(ee.speed,25)*.004;Nt.jolt+=Mt,Nt.kick+=Et?Mt*.9:-Mt*.9,Pn&&Pn.bump(.25+Math.min(ee.speed,25)/50)}}{let it=Math.round((ee.s-ta)/$r);it!==Nt.rk&&(Nt.rk=it,Nt.rb=Zi(ee.s));let Et=Nt.rb;if(Et)for(let Bt=0;Bt<2;Bt++)for(let Mt=0;Mt<2;Mt++){let In=Et.s+Ax[Bt]-Mp[Mt];if(Nt.s<In&&ee.s>=In){let jt=.035+Math.min(ee.speed,25)*.003;Nt.jolt+=jt,Nt.kick+=Mt?jt*.9:-jt*.9,Pn&&Pn.bump(.2+Math.min(ee.speed,25)/60)}}}Nt.s=ee.s}te.group.rotation.set(-Math.atan(Rx),Dt.h+Nt.yaw,0);let Cr=Ki(ee.s);Cr&&Math.abs(ee.s-Cr.s)<700?(oe.at(Cr.s-bn,Yt),we.uTunA.value.set(Yt.x-ss,Yt.y,Yt.z-rs),oe.at(Cr.s+bn,Yt),we.uTunB.value.set(Yt.x-ss,Yt.y,Yt.z-rs),we.uTunR.value=Xn(Cr.s,"rw")+1.7):(we.uTunA.value.set(0,-1e4,0),we.uTunB.value.set(0,-1e4,0));let _f=Cr&&Math.abs(ee.s+1-Cr.s)<bn-1.5?1:0;on+=(_f-on)*Math.min(1,Je*(_f?1.6:.7)),we.uCarPos.value.set(te.group.position.x+Dt.fx*1.7,te.group.position.y+.8,te.group.position.z+Dt.fz*1.7),we.uCarFwd.value.set(Dt.fx,-.05,Dt.fz).normalize(),we.uHead.value=_f,te.update(Je,ee.speed,Math.max(se.night,on),Fs,Nt,_p),dn.update(Wn&&xn>-24&&xn<700?Uh(oe,Wt):null,z.origin,zt.raise,$t,gi),Ft.update(Je,oe,z.origin,wt(.15,.8,se.night),Xn(Wt,"rw")+3.2);let bf=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ut.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ut.has("rig")){let[Se,Le,ze,it]=ut.get("rig").split(",").map(Number);Object.assign(bf[0],{back:Se,up:Le,ahead:ze,lookY:it})}let Pr=new H,Ia=6,Ep=ee.cam===2;if(ee.cam===4){rn.t+=Je;{let ze=Ki(ee.s+30);ze&&Math.abs(ee.s+30-ze.s)<ln+70&&rn.type!=="chase"&&rn.type!=="eye"&&(rn.type="chase",rn.t=0,rn.dur=20,uc=!1)}(rn.t>rn.dur+(rn.type==="road"?8:0)||rn.type==="road"&&rn.anchor&&ee.s>rn.anchor.s+24)&&xf();let Se=te.group.position,Le=rn.type;if(Le==="chase"||Le==="eye"){let ze=bf[Le==="eye"?2:0];Ep=Le==="eye",oe.at(ee.s-ze.back,Kt),oe.at(ee.s+ze.ahead,Yt),Ci.set(Kt.x+Kt.rx*ee.u*ze.cu-ss,Kt.y+ze.up,Kt.z+Kt.rz*ee.u*ze.cu-rs),Pr.set(Yt.x+Yt.rx*ee.u*ze.lu-ss,Yt.y+ze.lookY,Yt.z+Yt.rz*ee.u*ze.lu-rs)}else if(Le==="side"){oe.at(ee.s+1.5,Kt);let ze=It(ee.s),it=ze.city+ze.sakura>.5,Et=Xn(ee.s,"rw"),Bt=rn.sideSign>0?Et+(it?1.45:3.4):-(Et+1.5),Mt=Kt.y+Ps(ee.s+1.5,Bt,Kt.y,Et);Ci.set(Kt.x+Kt.rx*Bt-ss,Math.max(Mt+1.55,Kt.y+1.25),Kt.z+Kt.rz*Bt-rs),Pr.set(Se.x+Dt.fx*2.5,Se.y+.9,Se.z+Dt.fz*2.5),Ia=4}else if(Le==="road"&&rn.anchor)Ci.set(rn.anchor.x-ss,rn.anchor.y,rn.anchor.z-rs),Pr.set(Se.x,Se.y+.85,Se.z),Ia=30;else{oe.at(ee.s-20,Kt),oe.at(ee.s+34,Yt);let ze=14+Math.min(rn.t,20)*.35;Ci.set(Kt.x+Kt.rx*ee.u*.4-ss,Kt.y+ze,Kt.z+Kt.rz*ee.u*.4-rs),Pr.set(Yt.x-ss,Yt.y+1,Yt.z-rs),Ia=3}}else{let Se=bf[ee.cam];oe.at(ee.s-Se.back,Kt),oe.at(ee.s+Se.ahead,Yt);let Le=ee.u*Se.cu,ze=Le+(Se.side||0);Ci.set(Kt.x+Kt.rx*ze-ss,Kt.y+Se.up,Kt.z+Kt.rz*ze-rs),Pr.set(Yt.x+Yt.rx*ee.u*Se.lu-ss,Yt.y+Se.lookY,Yt.z+Yt.rz*ee.u*Se.lu-rs)}te.group.visible=!Ep,ee.cam===3?c.up.set(Dt.fx,0,Dt.fz):c.up.set(0,1,0),uc||(wa.copy(Ci),Ta.copy(Pr),uc=!0);let Ap=1+Math.max(0,ee.speed-12)/12;wa.lerp(Ci,1-Math.exp(-Je*Ia*Ap)),Ta.lerp(Pr,1-Math.exp(-Je*Math.min(Ia,8)*Ap));{let Se=ee.cam===3?0:Math.min(Jt((ee.speed-16)*.22,0,11),Math.max(0,84-Aa));Ra+=(Se-Ra)*Math.min(1,Je*1.5),Math.abs(c.fov-(Aa+Ra))>.02&&(c.fov=Aa+Ra,c.updateProjectionMatrix())}c.position.copy(wa),c.lookAt(Ta),ut.has("yaw")&&c.rotateY(parseFloat(ut.get("yaw"))*Math.PI/180),ut.has("pitch")&&c.rotateX(parseFloat(ut.get("pitch"))*Math.PI/180),pf.set(Dt.fx,0,Dt.fz),mf.set(Dt.rx,0,Dt.rz);{let Se=te.group.position,Le=c.position.x-Se.x,ze=c.position.z-Se.z,it=ee.cam===4&&rn.type!=="chase"&&rn.type!=="eye",Et=ee.s+Le*Dt.fx+ze*Dt.fz-(it?10:0),Bt=it||xx?40:Math.tan(c.fov*Math.PI/360)*c.aspect*1.08;A.update(oe,Et,ee.u+Le*Dt.rx+ze*Dt.rz,z.origin.x,z.origin.z,Xn(ee.s,"rw"),Bt),ee.grass||A.hide()}let tn=It(ee.s),Mf=1+.25*se.bright*(1-on);f.color.copy(se.sunCol),f.intensity=se.sunI/Mf;{let Se=se.lightDir;if(E.angleTo(Se)>.1){let jt=Sn&&!ee.todPaused,Ln=se.head===null?0:ee.speed*(se.night>.5?.28:.48),On=0;if(jt||Ln>.01)for(let ci=1;ci<=60&&!(bp(ci,jt,Ln,F).angleTo(Se)>.09);ci++)On=ci;bp(On,jt,Ln,E),U=W=0}C.crossVectors(R,E).normalize(),P.crossVectors(E,C),L.set(te.group.position.x+Dt.fx*26,te.group.position.y,te.group.position.z+Dt.fz*26),f.target.position.copy(L),f.position.copy(L).addScaledVector(Se,200);let Le=2*g/f.shadow.mapSize.x,ze=E.x/E.y-Se.x/Se.y,it=E.z/E.y-Se.z/Se.y;Le!==k&&(k=Le,U=W=0);{let jt=Math.round(te.group.position.y);if(N===null)N=jt;else if(Math.abs(te.group.position.y-N)>3){let Ln=jt-N;U-=Ln*(ze*C.x+it*C.z),W-=Ln*(ze*P.x+it*P.z),N=jt}}{let jt=E.y,Ln=Math.hypot(E.x,E.z),On=f.shadow.mapSize.y/2,ci=Math.max(Cs(ee.s+26,"mountain")+Cs(ee.s+26,"snow"),Cs(ee.s+110,"mountain")+Cs(ee.s+110,"snow")),sr=Math.max(Cs(ee.s+26,"city"),Cs(ee.s+110,"city")),Us=w.HH+15*ci+3,rr=w.HL+20*ci+3,La=w.HC+65*sr+25*ci,Da=ze*P.x+it*P.z,ao=ze*E.x+it*E.z,or=Math.max(.05,Ln+Da),lo=On,ys=On,Ir=1;ee.shfit&&(lo=Math.min(On,Math.ceil((w.R*jt+Us*or)/Le)+1),ys=Math.min(On,Math.ceil((w.R*jt+rr*or)/Le)+1),Ir=Math.max(1,200-(w.R*Ln+Us*jt+La/jt+Math.max(0,(Us+La)*ao)))),v.top=lo*Le,v.bottom=-ys*Le,v.near=Ir,S.set(0,0,1,(lo+ys)/(2*On)),f.shadow.bias=-y/(v.far-Ir)}f.shadow.radius=ee.shsoft?4*Math.tan(c.fov*Math.PI/360)/(Le*innerHeight*s):1e6,xe.shadow.radius=ee.shsoft?0:1e6;let Et=z.origin.x,Bt=z.origin.z,Mt=L.dot(C)+Et*C.x+Bt*C.z-U,In=L.dot(P)+Et*P.x+Bt*P.z-W;L.addScaledVector(C,Math.round(Mt/Le)*Le-Mt).addScaledVector(P,Math.round(In/Le)*Le-In),D.copy(L),I.copy(L).addScaledVector(E,200),b.set(1,ze,0,-N*ze,0,1,0,0,0,it,1,-N*it,0,0,0,1)}xe.target.position.set(te.group.position.x,te.group.position.y+.9,te.group.position.z),xe.position.copy(xe.target.position).addScaledVector(se.lightDir,12),Te.color.copy(se.hemiSky),Te.groundColor.copy(se.hemiGround),Te.intensity=se.hemiI/Mf;{let Se=te.group.rotation.y,Le=Math.sin(Se),ze=Math.cos(Se),it=se.lightDir,Et=it.x*Le+it.z*ze,Bt=it.x*ze-it.z*Le,Mt=Math.hypot(Et,Bt),In=Math.atan2(Bt,Et),jt=Math.abs(In);jt>qe&&ee.carkey&&(In=Math.sign(In)*qe*(Math.PI-jt)/(Math.PI-qe));let Ln=Math.cos(In)*Mt,On=Math.sin(In)*Mt;$e.set(Le*Ln+ze*On,it.y,ze*Ln-Le*On),c.updateMatrixWorld(),we.uCarKey.value.copy($e).transformDirection(c.matrixWorldInverse),c.getWorldDirection(je),je.y=0,je.normalize(),ee.volkey?(bt(it,je,rt,we.uVolKey.value),bt(it,je,yt,we.uLeafKey.value)):(we.uVolKey.value.copy(it).transformDirection(c.matrixWorldInverse),we.uLeafKey.value.copy(we.uVolKey.value))}{let Se=df.at(se.t).rgb("f"),Le=$s()*ee.carkey;we.uCarFill.value.set(Se[0]*Le,Se[1]*Le,Se[2]*Le)}{let Se=(1-se.night)*(1-Bn);if(Se>.001){c.getWorldDirection(Qe);let Le=Qe.x,ze=Qe.z,it=Math.hypot(Le,ze)||1,Et=se.sunDir,Bt=0;for(let In=-2;In<=2;In++){let jt=In*.3,Ln=Math.cos(jt),On=Math.sin(jt),ci=(Le*Ln-ze*On)/it,sr=(Le*On+ze*Ln)/it,Us=Math.max(0,ci*Et.x+sr*Et.z),rr=Us*Us;Bt+=rr*rr*rr}let Mt=Bt/5*(.1+.35*se.warm)*1.4*Se*Vt;se.fog.r+=se.sunCol.r*Mt,se.fog.g+=se.sunCol.g*Mt,se.fog.b+=se.sunCol.b*Mt}}M.fog.color.copy(se.fog);let Rp=(tn.city*.0022+tn.sakura*.0019+tn.coast*.0011+tn.country*.0014+tn.mountain*.0017+tn.snow*.0021)*(1+se.night*.25);M.fog.near=Rp*(1+.55*Bn+.45*Fs),M.fog.far=z.ahead*.92,we.uSkyHor.value.copy(se.horizon),we.uSkyZen.value.copy(se.zenith),we.uTime.value=gi,we.uWet.value=Ut*(1-tn.snow),we.uSakWet.value=Ue,_p=Math.max(we.uWet.value,we.uSakWet.value*tn.sakura)*(1-on);{let Se=(we.uWet.value>.04||we.uSakWet.value*Math.max(tn.sakura,Cs(ee.s+120,"sakura"))>.04)&&n!=="low"&&on<.5&&ke!=="0";if(ae.refl.enabled=Se&&ke!=="taps",we.uReflOn.value=Se&&ke!=="copy"?1:0,Se){c.getWorldDirection(Be),Be.y=0,Be.normalize(),de.copy(c.position).addScaledVector(Be,1e4).project(c),we.uHorizon.value=de.y*.5+.5;let Le=Math.max(.5,c.position.y-te.group.position.y);we.uReflK.value=Jt(1-2*Le/(5+Le),.05,1)}}we.uOrigin.value.set(z.origin.x,z.origin.z),we.uWind.value=1+.8*Fs,we.uCloudSh.value=(1-Bn)*wt(.04,.3,se.sunEl)*(1-se.night),we.uCloudSh.value>.001&&ve.update(e,c.position.x,c.position.z,z.origin.x,z.origin.z);let xi=G.material.uniforms;if(xi.uBright.value=se.bright,xi.uNight.value=se.night,xi.uWarm.value=se.warm,xi.uTime.value=gi,xi.uCirrusCol.value.copy(se.cLit).lerp(se.horizon,.25),xi.uCirrus.value=.6*(1-Bn)*(1-.65*wt(.4,.9,se.night)),xi.uOvercast.value=Bn,xi.uMilky.value=wt(.55,.95,se.night)*(1-Bn),xi.uMoon.value=wt(.4,.8,se.night),se.night>.65&&Bn<.3&&Pi.p<0&&(Pi.next-=Je)<0){let Se=Math.atan2(Dt.fx,Dt.fz)+(Math.random()-.5)*1.5,Le=.45+Math.random()*.6,ze=.22+Math.random()*.2,it=(Math.random()-.5)*.6,Et=(Bt,Mt)=>new H(Math.cos(Bt)*Math.sin(Mt),Math.sin(Bt),Math.cos(Bt)*Math.cos(Mt));Pi.a.copy(Et(Le,Se)),Pi.b.copy(Et(Le-ze,Se+it)),Pi.p=0,Pi.next=ut.has("meteors")?1:6+Math.random()*20}Pi.p>=0&&(Pi.p+=Je/.85,Pi.p>1.3&&(Pi.p=-1)),xi.uMetP.value=Pi.p,xi.uMetA.value.copy(Pi.a),xi.uMetB.value.copy(Pi.b),xi.uDeckLit.value.copy(se.horizon).lerp(se.cLit,.35),xi.uDeckDark.value.copy(se.zenith).lerp(se.horizon,.25).multiplyScalar(.82),G.position.copy(c.position);{let Se=!!ge&&(ee.pclouds!==0||!fe);ge&&(ge.mesh.visible=Se,Se&&ge.update(c,Je)),fe&&(fe.group.visible=!Se,Se||fe.update(c.position,Je))}let Px=_e&&ee.band!==0?_e.update(c,Mr(ee.s+200),Math.max(1,c.position.y-Dt.y+.45),M.fog.near,M.fog.far):0;_e&&ee.band===0&&(_e.mesh.visible=!1),q.update(c.position,Math.max(tn.snow,It(ee.s+600).snow*.7),1-Px);let mc=0;for(let Se of[-150,0,250,500,800])mc=Math.max(mc,It(ee.s+Se).coast);j.mesh.visible=mc>.001,Yl.on=ee.todpaint,j.u.uWaves.value=ee.waves,j.u.uShoreW.value=ee.shore,K.surf.visible=ee.surf>0,K.tetra.visible=ee.tetra>0,K.bark.visible=ee.trunks>0,j.update(c.position,gi,Rp*.8,wt(0,.35,mc),ae.grade.uniforms,oe,ee.s),O.uniforms.uTime.value=gi,O.uniforms.uFogD.value=M.fog.near,O.uniforms.uNight.value=se.night,O.uniforms.uSpecK.value=1-se.overcast*.85,we.uSunDir.value.copy(se.lightDir),we.uSunCol.value.copy(se.sunCol);let Wi=wt(.15,.8,se.night);K.atlas.emissiveIntensity=.1+Wi*1.05,we.uBacklit.value=Z*1.6*(1-Bn)*(1-se.night)*wt(0,.08,se.sunEl)*(1-wt(.25,.55,se.sunEl))*(1-on),we.uGhShade.value.set(at(.8,.3,se.bright),at(.8,.85,se.bright),at(.8,1.7,se.bright));{let Se=Ht.at(se.t).rgb("c"),Le=1-Bn;we.uGhTint.value.set(at(1,Se[0],Le),at(1,Se[1],Le),at(1,Se[2],Le))}{let Se=ae.grade.uniforms;if(we.uTpK.value=$s(),we.uTpK.value>0){let Le=lc.at(se.t);for(let ze=0;ze<6;ze++)Le.ug(Se,Ma[ze],cf[ze])}if(we.uBkK.value=we.uTpK.value*ee.bark,we.uBkK.value>0){let Le=ro.at(se.t);for(let ze=0;ze<6;ze++)Le.ug(Se,oc[ze],ac[ze])}}{let Se=ff.at(se.t),Le=Se.rgb("n"),ze=Se.rgb("f"),it=$s()*ee.road;we.uRoadN.value.set(at(1,Le[0],it),at(1,Le[1],it),at(1,Le[2],it)),we.uRoadF.value.set(at(1,ze[0],it),at(1,ze[1],it),at(1,ze[2],it))}if(wi.tex){let Se=1-se.warm;for(let Mt=0;Mt<3;Mt++)De.c[Mt]=at(Ve[Mt],Oe[Mt],Se),De.co[Mt]=at(Ze[Mt],Ge[Mt],Se),De.sa[Mt]=at(ct[Mt],ot[Mt],Se);let Le=1-Bn,ze=He.at(se.t),it=ze.rgb("c"),Et=ze.rgb("co"),Bt=ze.rgb("sa");wi.uFieldC.value.set(at(Ve[0],it[0],Le),at(Ve[1],it[1],Le),at(Ve[2],it[2],Le)),wi.uFieldCo.value.set(at(Ze[0],Et[0],Le),at(Ze[1],Et[1],Le),at(Ze[2],Et[2],Le)),wi.uFieldSa.value.set(at(ct[0],Bt[0],Le),at(ct[1],Bt[1],Le),at(ct[2],Bt[2],Le))}{for(let ze=0;ze<3;ze++)We.b[ze]=at(pe[ze],Pe[ze],1-se.warm);let Se=Ai.at(se.t).rgb("b"),Le=1-Bn;we.uBlShade.value.set(at(pe[0],Se[0],Le),at(pe[1],Se[1],Le),at(pe[2],Se[2],Le))}{let Se=ne.at(se.t),Le=Se.rgb("m"),ze=tr.m,it=$s();he.setRGB(at(ze[0],Le[0],it)/255,at(ze[1],Le[1],it)/255,at(ze[2],Le[2],it)/255,Gt);let Et=at(tr.w[0],Se.rgb("w")[0],it);we.uBlMid.value.set(he.r,he.g,he.b,1/(1-Et)),we.uBlTip.value.set(le.r-he.r,le.g-he.g,le.b-he.b,-Et/(1-Et))}we.uLightsOn.value=ce>=0?ce:Math.max(wt(.02,.75,se.night),.3*Bn),K.lamp.color.setRGB(.9,.86,.74).lerp(Tx,Wi),K.pool.opacity=Wi*.42*(1+.8*Ut);{let Se=te.group.position,Le=te.lamps,ze=Math.max(Wi,on),it=0,Et=0,Bt=0,Mt=-1e3,In=0,jt=0,Ln=-1e3,On=0,ci=900,sr=900;if(ze>.01){let La=Math.floor(ee.s/Xt);for(let Da=La-1;Da<=La+1;Da++){let ao=z.chunks.get(Da);if(!ao||!ao.lamps)continue;let or=ao.lamps,lo=ao.group.position;for(let ys=0;ys<or.length;ys+=4){let Ir=or[ys]+lo.x,Sf=or[ys+1],wf=or[ys+2]+lo.z,Tf=(Ir-Se.x)**2+(Sf-Se.y)**2+(wf-Se.z)**2,vc=or[ys+3]/(1+.045*Tf);vc>it?(Et=it,sr=ci,jt=Bt,Ln=Mt,On=In,it=vc,ci=Tf,Bt=Ir,Mt=Sf,In=wf):vc>Et&&(Et=vc,sr=Tf,jt=Ir,Ln=Sf,On=wf)}}c.updateMatrixWorld()}let Us=ze*it*(1+.045*ci)*(1-wt(18,30,Math.sqrt(ci))),rr=ze*Et*(1+.045*sr)*(1-wt(18,30,Math.sqrt(sr)));Le[0].set(Bt,Mt,In,1).applyMatrix4(c.matrixWorldInverse).w=Us,Le[1].set(jt,Ln,On,1).applyMatrix4(c.matrixWorldInverse).w=rr,te.lampCol.setRGB(1,.8-.32*on,.52-.38*on),ts.uLampW.value[0].set(Bt,Mt,In,Us),ts.uLampW.value[1].set(jt,Ln,On,rr),ts.uLampCol.value.copy(te.lampCol),te.head.getWorldPosition(ts.uHeadPos.value),te.head.target.getWorldPosition(Qe),ts.uHeadDir.value.copy(Qe).sub(ts.uHeadPos.value).normalize(),ts.uHeadI.value=te.head.intensity/60}K.pool.visible=K.pool.opacity>.003,z.lod(ee.s,cc,Wi>.15,vx),we.uNight.value=Wi,ae.bloom.strength=at(.32,.55,Wi),ae.bloom.threshold=at(1.35,.95,Wi),ae.bloom.radius=at(.55,.35,Wi);{let Se=Math.max(Wi,on,wt(.25,.6,se.warm)*(1-Bn));ae.bloom.enabled=X&&Se>.02,ae.bloom.strength*=Math.min(1,Se*4)}e.toneMappingExposure=at(1,1.15,Wi)*(1+.35*on)*Mf,Ci.copy(c.position).addScaledVector(se.sunDir,1e3).project(c);let ir=ae.grade.uniforms,Ix=Ci.z<1?1:0,Lx=Math.max(Math.abs(Ci.x),Math.abs(Ci.y));ir.uSun.value.set(Ci.x*.5+.5,Ci.y*.5+.5),ir.uSunVis.value=Ix*(1-wt(1,1.9,Lx))*wt(.45,.65,se.sunEl)*(1-se.night)*(1-Bn)*(1-on),ir.uSat.value=1.22-.24*Bn,ir.uVig.value=.55-.43*se.bright,ir.uLo.value.set(-.014+.026*se.bright,0,.03),ir.uDay.value=Pa(),ir.uWarm.value=se.warm,ir.uTime.value=gi,Cn.update(c.position,gi,Fs*(1-on)*(1-tn.snow),Pa());{let Se=Ki(ee.s+190),Le=(tn.city+tn.country+tn.coast)*(1-Bn)*(1-Ut)*wt(.6,.9,se.sunEl)*(ee.mirage??1)*(Se&&Math.abs(ee.s+190-Se.s)<330?0:1);At.update(oe,ee.s,z.origin.x,z.origin.z,Xn(ee.s+150,"rw"),Le,gi,se.horizon)}{let Se=Jt(tn.snow+tn.mountain*.6*Math.max(se.night,1-wt(.27,.36,ee.tod)),0,1)*(1-on);li.copy(se.fog).multiplyScalar(.92),Ri.copy(se.sunCol).multiplyScalar(Math.min(1,se.sunI/3)*(1-Bn)*.6);let Le=Math.cos(te.group.rotation.y),ze=Math.sin(te.group.rotation.y),it=te.group.position;is.set(it.x-1.75*ze,it.y+.95,it.z-1.75*Le,Math.max(se.night,on)*(.5+1.2*Nt.brake)),Mn.update(Je,te.group,ee.speed,we.uWet.value*(1-on),tn.snow*(1-on),Se,li,Ri,is,c.position,ee.spray)}Ke.update(c.position,gi,tn.snow*(.3+.7*Bn)*(1-on),Pa()),Hi.setFog(M.fog.near),Hi.update(Je,gi,c.position,pf,mf,tn,Pa(),Fs,te.group.position);let Dx=performance.now();$.update(Je,gi,c.position,pf,mf,tn.sakura*(1-on),Dt.y,Wi,(tn.country+tn.sakura*.4)*(1-Fs)*(1-on),tn.mountain*(1-on));let Nx=performance.now();if(Pn){oe.at(Wt,Yt);let Se=Math.hypot(Yt.x-z.origin.x-c.position.x,Yt.z-z.origin.z-c.position.z),Le=Ft.st.active?Ft.group.position.distanceTo(c.position):1e9,ze=ee.speed/15;Pn.update(ze<1.5?ze:1.5+(ze-1.5)*.4,tn,Pa(),{rush:Jt((ee.speed-25)/40,0,1),bell:$t?Math.pow(Jt(1-Se/260,0,1),1.5):0,train:Math.pow(Jt(1-Le/230,0,1),2),rain:Fs*(1-on)*(1-tn.snow),wetRoad:we.uWet.value*(1-on),speed:ee.speed,load:Jt(Nt.lon/3,0,1),roof:ee.cam!==2,tunnel:on,water:(()=>{let it=Zi(ee.s);return Math.max(it?1-wt(12,150,Math.abs(ee.s-it.s)):0,tn.mountain*.45)})(),dusk:se.warm*(ee.tod>.5?1:.3)})}Mx(mn(ee.s+40)),St&&(e.info.autoReset=!1,e.info.reset());let gc=null;St&&St.tq&&(gc=St.gl.createQuery(),St.gl.beginQuery(St.tq.TIME_ELAPSED_EXT,gc));let Cp=performance.now();ae.composer.render(Je);let Pp=performance.now();if(gc){let Se=St.gl;for(Se.endQuery(St.tq.TIME_ELAPSED_EXT),St.pend.push(gc);St.pend.length&&Se.getQueryParameter(St.pend[0],Se.QUERY_RESULT_AVAILABLE);){let Le=St.pend.shift(),ze=Se.getQueryParameter(Le,Se.QUERY_RESULT);Se.deleteQuery(Le),Se.getParameter(St.tq.GPU_DISJOINT_EXT)||(St.gpu=ze/1e6,St.gpuN++,St.gpuSum+=St.gpu,St.gpu>St.gpuMax&&(St.gpuMax=St.gpu))}}let oo=window.__pb||(window.__pb={world:0,parts:0,render:0});if(oo.world=oo.world*.95+(Tp-wp)*.05,oo.parts=oo.parts*.95+(Nx-Dx)*.05,oo.render=oo.render*.95+(Pp-Cp)*.05,yf=yf*.95+(performance.now()-nt)*.05,window.__ft=yf,St){let Se=e.info,Le=performance.now()-nt,ze={t:+gi.toFixed(2),s:Math.round(ee.s),total:+Le.toFixed(1),world:+(Tp-wp).toFixed(1),render:+(Pp-Cp).toFixed(1),gpu:+(St.gpu||0).toFixed(1),progs:Se.programs.length-St.progs,geos:Se.memory.geometries-St.geos,tex:Se.memory.textures-St.tex,calls:Se.render.calls,tris:Se.render.triangles};ze.progs>0&&Sn&&(ze.newProgs=Se.programs.slice(-ze.progs).map(it=>(it.name||"")+":"+String(it.cacheKey).slice(0,60))),St.progs=Se.programs.length,St.geos=Se.memory.geometries,St.tex=Se.memory.textures,St.frames++,St.sum+=Le,Le>St.max&&(St.max=Le),Le>12&&Sn&&St.spikes.push(ze),St.last=ze}if((rp+=Je)>.25){rp=0,yx.textContent=Math.round(ee.speed*3.6),_x.textContent=(ee.dist/1e3).toFixed(1);let Se=Math.floor(ee.tod*1440);bx.textContent=`${String(Math.floor(Se/60)).padStart(2,"0")}:${String(Se%60).padStart(2,"0")}`}yp++,Sn&&yp>150&&Je>.03?Ca+=Je:Ca=Math.max(0,Ca-Je*.5),Ca>3&&!ut.has("q")&&(Ca=0,vp())}window.__dbg={renderer:e,st:ee,scene:M,camera:c,world:z,TOD:se,KEYS:ca,X:zt,train:Ft,weather:Lt,U:we,birds:Hi,cine:rn,post:ae,car:te,sun:f,M:K,clouds:fe,pclouds:ge,band:_e,sky:G,mountains:q,shadowDir:E,CM:Nt,spray:Mn,grass:A,sea:j,get audio(){return Pn}},so(""),fc.classList.add("ready"),ut.has("auto")&&gf(),requestAnimationFrame(Sp)}Jw().catch(i=>{console.error(i),so("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
