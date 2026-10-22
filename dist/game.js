var Ff=0,Iu=1,Of=2;var Us=1,Bf=2,Nr=3,ms=0,bn=1,xn=2,Gn=0,Ur=1,qi=2,Lu=3,Du=4,zf=5;var Fs=100,kf=101,Hf=102,Vf=103,Gf=104,Wf=200,Xf=201,qf=202,Yf=203,Nu=204,Uu=205,Zf=206,$f=207,Jf=208,Kf=209,jf=210,Qf=211,ed=212,td=213,nd=214,Za=0,$a=1,Ja=2,Mr=3,Ka=4,ja=5,Qa=6,el=7,Fu=0,id=1,sd=2,yi=0,Ou=1,Bu=2,zu=3,ku=4,Hu=5,Vu=6,Xo=7;var Gu=300,gs=301,Os=302,wl=303,Al=304,qo=306,br=1e3,Ai=1001,tl=1002,rn=1003,rd=1004;var Yo=1005;var kt=1006,Rl=1007;var Wn=1008;var Rn=1009,Wu=1010,Xu=1011,Fr=1012,Cl=1013,Mi=1014,oi=1015,an=1016,Pl=1017,Il=1018,Or=1020,qu=35902,Yu=35899,Zu=1021,$u=1022,Xn=1023,Ri=1026,vs=1027,Bs=1028,Ll=1029,xs=1030,Dl=1031;var Nl=1033,Zo=33776,$o=33777,Jo=33778,Ko=33779,Ul=35840,Fl=35841,Ol=35842,Bl=35843,zl=36196,kl=37492,Hl=37496,Vl=37488,Gl=37489,jo=37490,Wl=37491,Xl=37808,ql=37809,Yl=37810,Zl=37811,$l=37812,Jl=37813,Kl=37814,jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,sc=37821,rc=36492,oc=36494,ac=36495,lc=36283,cc=36284,Qo=36285,uc=36286;var So=2300,nl=2301,qa=2302,bu=2303,Su=2400,Tu=2401,Eu=2402;var od=3200;var hc=0,ad=1,bi="",Kt="srgb",To="srgb-linear",Eo="linear",Pt="srgb";var Ya=7680;var ld=519,cd=512,ud=513,hd=514,fc=515,fd=516,dd=517,dc=518,pd=519,md=35044;var Ju="300 es",xi=2e3,Sr=2001;function Dp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Np(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){let i=wo("canvas");return i.style.display="block",i}var cf={},Tr=null;function Ku(...i){let e="THREE."+i.shift();Tr?Tr("log",e,...i):console.log(e,...i)}function vd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function st(...i){i=vd(i);let e="THREE."+i.shift();if(Tr)Tr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function at(...i){i=vd(i);let e="THREE."+i.shift();if(Tr)Tr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ds(...i){let e=i.join(" ");e in cf||(cf[e]=!0,st(...i))}function xd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _d={[Za]:$a,[Ja]:Qa,[Ka]:el,[Mr]:ja,[$a]:Za,[Qa]:Ja,[el]:Ka,[ja]:Mr},Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jc=Math.PI/180,Ao=180/Math.PI;function ea(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function Up(i,e){return(i%e+e)%e}function Qc(i,e,t){return(1-t)*i+t*e}function mo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nh=class nh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nh.prototype.isVector2=!0;var Xe=nh,vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let o=n[s+0],u=n[s+1],c=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(h!==v||o!==f||u!==p||c!==g){let m=o*f+u*p+c*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-l;if(m<.9995){let x=Math.acos(m),b=Math.sin(x);d=Math.sin(d*x)/b,l=Math.sin(l*x)/b,o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+v*l}else{o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+v*l;let x=1/Math.sqrt(o*o+u*u+c*c+h*h);o*=x,u*=x,c*=x,h*=x}}e[t]=o,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let l=n[s],o=n[s+1],u=n[s+2],c=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=l*g+c*h+o*p-u*f,e[t+1]=o*g+c*f+u*h-l*p,e[t+2]=u*g+c*p+l*f-o*h,e[t+3]=c*g-l*h-o*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,u=l(n/2),c=l(s/2),h=l(r/2),f=o(n/2),p=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],u=t[2],c=t[6],h=t[10],f=n+l+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>l&&n>h){let p=2*Math.sqrt(1+n-l-h);this._w=(c-o)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(l>h){let p=2*Math.sqrt(1+l-n-h);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(o+c)/p}else{let p=2*Math.sqrt(1+h-n-l);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,u=t._z,c=t._w;return this._x=n*c+a*l+s*u-r*o,this._y=s*c+a*o+r*l-n*u,this._z=r*c+a*u+n*o-s*l,this._w=a*c-n*l-s*o-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){let u=Math.acos(l),c=Math.sin(u);o=Math.sin(o*u)/c,t=Math.sin(t*u)/c,this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ih=class ih{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,u=2*(a*s-l*n),c=2*(l*t-r*s),h=2*(r*n-a*t);return this.x=t+o*u+a*h-l*c,this.y=n+o*c+l*u-r*h,this.z=s+o*h+r*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ih.prototype.isVector3=!0;var H=ih,eu=new H,uf=new vn,sh=class sh{constructor(e,t,n,s,r,a,l,o,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,u)}set(e,t,n,s,r,a,l,o,u){let c=this.elements;return c[0]=e,c[1]=s,c[2]=l,c[3]=t,c[4]=r,c[5]=o,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],o=n[6],u=n[1],c=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],x=s[1],b=s[4],_=s[7],y=s[2],S=s[5],R=s[8];return r[0]=a*v+l*x+o*y,r[3]=a*m+l*b+o*S,r[6]=a*d+l*_+o*R,r[1]=u*v+c*x+h*y,r[4]=u*m+c*b+h*S,r[7]=u*d+c*_+h*R,r[2]=f*v+p*x+g*y,r[5]=f*m+p*b+g*S,r[8]=f*d+p*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8];return t*a*c-t*l*u-n*r*c+n*l*o+s*r*u-s*a*o}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=c*a-l*u,f=l*o-c*r,p=u*r-a*o,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*u-c*n)*v,e[2]=(l*n-s*a)*v,e[3]=f*v,e[4]=(c*t-s*o)*v,e[5]=(s*r-l*t)*v,e[6]=p*v,e[7]=(n*o-u*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){let o=Math.cos(r),u=Math.sin(r);return this.set(n*o,n*u,-n*(o*a+u*l)+a+e,-s*u,s*o,-s*(-u*a+o*l)+l+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tu.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tu.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;var ut=sh,tu=new ut,hf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ff=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fp(){let i={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Pt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Pt&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[To]:{primaries:e,whitePoint:n,transfer:Eo,toXYZ:hf,fromXYZ:ff,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:hf,fromXYZ:ff,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}var yt=Fp();function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var or,il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=wo("canvas")),or.width=e.width,or.height=e.height;let s=or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Op=0,Er=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(nu(s[a].image)):r.push(nu(s[a]))}else r=nu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var Bp=0,iu=new H,Nn=class i extends Ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=kt,a=Wn,l=Xn,o=Rn,u=i.DEFAULT_ANISOTROPY,c=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ea(),this.name="",this.source=new Er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Gu;Nn.DEFAULT_ANISOTROPY=1;var rh=class rh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,o=e.elements,u=o[0],c=o[4],h=o[8],f=o[1],p=o[5],g=o[9],v=o[2],m=o[6],d=o[10];if(Math.abs(c-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(u+1)/2,_=(p+1)/2,y=(d+1)/2,S=(c+f)/4,R=(h+v)/4,M=(g+m)/4;return b>_&&b>y?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=R/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=R/r,s=M/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(f-c)/x,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;var Mt=rh,sl=class extends Ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Nn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Er(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ro=class extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var El=class El{constructor(e,t,n,s,r,a,l,o,u,c,h,f,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,u,c,h,f,p,g,v,m)}set(e,t,n,s,r,a,l,o,u,c,h,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=l,d[13]=o,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new El().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),a=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*c,p=a*h,g=l*c,v=l*h;t[0]=o*c,t[4]=-o*h,t[8]=u,t[1]=p+g*u,t[5]=f-v*u,t[9]=-l*o,t[2]=v-f*u,t[6]=g+p*u,t[10]=a*o}else if(e.order==="YXZ"){let f=o*c,p=o*h,g=u*c,v=u*h;t[0]=f+v*l,t[4]=g*l-p,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-l,t[2]=p*l-g,t[6]=v+f*l,t[10]=a*o}else if(e.order==="ZXY"){let f=o*c,p=o*h,g=u*c,v=u*h;t[0]=f-v*l,t[4]=-a*h,t[8]=g+p*l,t[1]=p+g*l,t[5]=a*c,t[9]=v-f*l,t[2]=-a*u,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){let f=a*c,p=a*h,g=l*c,v=l*h;t[0]=o*c,t[4]=g*u-p,t[8]=f*u+v,t[1]=o*h,t[5]=v*u+f,t[9]=p*u-g,t[2]=-u,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){let f=a*o,p=a*u,g=l*o,v=l*u;t[0]=o*c,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*c,t[9]=-l*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){let f=a*o,p=a*u,g=l*o,v=l*u;t[0]=o*c,t[4]=-h,t[8]=u*c,t[1]=f*h+v,t[5]=a*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=l*c,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,kp)}lookAt(e,t,n){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),ns.crossVectors(n,Yn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),ns.crossVectors(n,Yn)),ns.normalize(),ba.crossVectors(Yn,ns),s[0]=ns.x,s[4]=ba.x,s[8]=Yn.x,s[1]=ns.y,s[5]=ba.y,s[9]=Yn.y,s[2]=ns.z,s[6]=ba.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],o=n[8],u=n[12],c=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],x=n[3],b=n[7],_=n[11],y=n[15],S=s[0],R=s[4],M=s[8],E=s[12],A=s[1],P=s[5],I=s[9],D=s[13],w=s[2],L=s[6],U=s[10],B=s[14],k=s[3],z=s[7],V=s[11],G=s[15];return r[0]=a*S+l*A+o*w+u*k,r[4]=a*R+l*P+o*L+u*z,r[8]=a*M+l*I+o*U+u*V,r[12]=a*E+l*D+o*B+u*G,r[1]=c*S+h*A+f*w+p*k,r[5]=c*R+h*P+f*L+p*z,r[9]=c*M+h*I+f*U+p*V,r[13]=c*E+h*D+f*B+p*G,r[2]=g*S+v*A+m*w+d*k,r[6]=g*R+v*P+m*L+d*z,r[10]=g*M+v*I+m*U+d*V,r[14]=g*E+v*D+m*B+d*G,r[3]=x*S+b*A+_*w+y*k,r[7]=x*R+b*P+_*L+y*z,r[11]=x*M+b*I+_*U+y*V,r[15]=x*E+b*D+_*B+y*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15],x=o*p-u*f,b=l*p-u*h,_=l*f-o*h,y=a*p-u*c,S=a*f-o*c,R=a*h-l*c;return t*(v*x-m*b+d*_)-n*(g*x-m*y+d*S)+s*(g*b-v*y+d*R)-r*(g*_-v*S+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],u=e[6],c=e[10];return t*(a*c-l*u)-n*(r*c-l*o)+s*(r*u-a*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],x=t*l-n*a,b=t*o-s*a,_=t*u-r*a,y=n*o-s*l,S=n*u-r*l,R=s*u-r*o,M=c*v-h*g,E=c*m-f*g,A=c*d-p*g,P=h*m-f*v,I=h*d-p*v,D=f*d-p*m,w=x*D-b*I+_*P+y*A-S*E+R*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/w;return e[0]=(l*D-o*I+u*P)*L,e[1]=(s*I-n*D-r*P)*L,e[2]=(v*R-m*S+d*y)*L,e[3]=(f*S-h*R-p*y)*L,e[4]=(o*A-a*D-u*E)*L,e[5]=(t*D-s*A+r*E)*L,e[6]=(m*_-g*R-d*b)*L,e[7]=(c*R-f*_+p*b)*L,e[8]=(a*I-l*A+u*M)*L,e[9]=(n*A-t*I-r*M)*L,e[10]=(g*S-v*_+d*x)*L,e[11]=(h*_-c*S-p*x)*L,e[12]=(l*E-a*P-o*M)*L,e[13]=(t*P-n*E+s*M)*L,e[14]=(v*b-g*y-m*x)*L,e[15]=(c*y-h*b+f*x)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,o=e.z,u=r*a,c=r*l;return this.set(u*a+n,u*l-s*o,u*o+s*l,0,u*l+s*o,c*l+n,c*o-s*a,0,u*o-s*l,c*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,u=r+r,c=a+a,h=l+l,f=r*u,p=r*c,g=r*h,v=a*c,m=a*h,d=l*h,x=o*u,b=o*c,_=o*h,y=n.x,S=n.y,R=n.z;return s[0]=(1-(v+d))*y,s[1]=(p+_)*y,s[2]=(g-b)*y,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(f+d))*S,s[6]=(m+x)*S,s[7]=0,s[8]=(g+b)*R,s[9]=(m-x)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ar.set(s[0],s[1],s[2]).length(),l=ar.set(s[4],s[5],s[6]).length(),o=ar.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pi.copy(this);let u=1/a,c=1/l,h=1/o;return pi.elements[0]*=u,pi.elements[1]*=u,pi.elements[2]*=u,pi.elements[4]*=c,pi.elements[5]*=c,pi.elements[6]*=c,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=a,n.y=l,n.z=o,this}makePerspective(e,t,n,s,r,a,l=xi,o=!1){let u=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,v;if(o)g=r/(a-r),v=a*r/(a-r);else if(l===xi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===Sr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=xi,o=!1){let u=this.elements,c=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,v;if(o)g=1/(a-r),v=a/(a-r);else if(l===xi)g=-2/(a-r),v=-(a+r)/(a-r);else if(l===Sr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};El.prototype.isMatrix4=!0;var je=El,ar=new H,pi=new je,zp=new H(0,0,0),kp=new H(1,1,1),ns=new H,ba=new H,Yn=new H,df=new je,pf=new vn,Hn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],u=s[5],c=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hp=0,mf=new H,lr=new vn,Bi=new je,Sa=new H,go=new H,Vp=new H,Gp=new vn,gf=new H(1,0,0),vf=new H(0,1,0),xf=new H(0,0,1),_f={type:"added"},Wp={type:"removed"},cr={type:"childadded",child:null},su={type:"childremoved",child:null},on=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Hn,n=new vn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new ut}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(vf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(vf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(go,Sa,this.up):Bi.lookAt(Sa,go,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),lr.setFromRotationMatrix(Bi),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_f),cr.child=e,this.dispatchEvent(cr),cr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wp),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_f),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,Gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let u=0,c=o.length;u<c;u++){let h=o[u];r(e.shapes,h)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,u=this.material.length;o<u;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){let l=a(e.geometries),o=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){let o=[];for(let u in l){let c=l[u];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new H(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $t=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xp={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(u,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function ru(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=Up(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ru(a,r,e+1/3),this.g=ru(a,r,e),this.b=ru(a,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return yt.workingToColorSpace(An.copy(this),e),Math.round(bt(An.r*255,0,255))*65536+Math.round(bt(An.g*255,0,255))*256+Math.round(bt(An.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(An.copy(this),t);let n=An.r,s=An.g,r=An.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,u,c=(l+a)/2;if(l===a)o=0,u=0;else{let h=a-l;switch(u=c<=.5?h/(a+l):h/(2-a-l),a){case n:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-n)/h+2;break;case r:o=(n-s)/h+4;break}o/=6}return e.h=o,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Kt){yt.workingToColorSpace(An.copy(this),e);let t=An.r,n=An.g,s=An.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Ta);let n=Qc(is.h,Ta.h,t),s=Qc(is.s,Ta.s,t),r=Qc(is.l,Ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new de;de.NAMES=yd;var Po=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ns=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mi=new H,zi=new H,ou=new H,ki=new H,ur=new H,hr=new H,yf=new H,au=new H,lu=new H,cu=new H,uu=new Mt,hu=new Mt,fu=new Mt,as=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),zi.subVectors(n,t),ou.subVectors(e,t);let a=mi.dot(mi),l=mi.dot(zi),o=mi.dot(ou),u=zi.dot(zi),c=zi.dot(ou),h=a*u-l*l;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(u*o-l*c)*f,g=(a*c-l*o)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,l,o){return this.getBarycoord(e,t,n,s,ki)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,ki.x),o.addScaledVector(a,ki.y),o.addScaledVector(l,ki.z),o)}static getInterpolatedAttribute(e,t,n,s,r,a){return uu.setScalar(0),hu.setScalar(0),fu.setScalar(0),uu.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(uu,r.x),a.addScaledVector(hu,r.y),a.addScaledVector(fu,r.z),a}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),zi.subVectors(e,t),mi.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),mi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,l;ur.subVectors(s,n),hr.subVectors(r,n),au.subVectors(e,n);let o=ur.dot(au),u=hr.dot(au);if(o<=0&&u<=0)return t.copy(n);lu.subVectors(e,s);let c=ur.dot(lu),h=hr.dot(lu);if(c>=0&&h<=c)return t.copy(s);let f=o*h-c*u;if(f<=0&&o>=0&&c<=0)return a=o/(o-c),t.copy(n).addScaledVector(ur,a);cu.subVectors(e,r);let p=ur.dot(cu),g=hr.dot(cu);if(g>=0&&p<=g)return t.copy(r);let v=p*u-o*g;if(v<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(n).addScaledVector(hr,l);let m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return yf.subVectors(r,s),l=(h-c)/(h-c+(p-g)),t.copy(s).addScaledVector(yf,l);let d=1/(m+v+f);return a=v*d,l=f*d,t.copy(n).addScaledVector(ur,a).addScaledVector(hr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),wa.subVectors(this.max,vo),fr.subVectors(e.a,vo),dr.subVectors(e.b,vo),pr.subVectors(e.c,vo),ss.subVectors(dr,fr),rs.subVectors(pr,dr),Cs.subVectors(fr,pr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Cs.z,Cs.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Cs.z,0,-Cs.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Cs.y,Cs.x,0];return!du(t,fr,dr,pr,wa)||(t=[1,0,0,0,1,0,0,0,1],!du(t,fr,dr,pr,wa))?!1:(Aa.crossVectors(ss,rs),t=[Aa.x,Aa.y,Aa.z],du(t,fr,dr,pr,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new H,new H,new H,new H,new H,new H,new H,new H],gi=new H,Ea=new si,fr=new H,dr=new H,pr=new H,ss=new H,rs=new H,Cs=new H,vo=new H,wa=new H,Aa=new H,Ps=new H;function du(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ps.fromArray(i,r);let l=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),o=e.dot(Ps),u=t.dot(Ps),c=n.dot(Ps);if(Math.max(-Math.max(o,u,c),Math.min(o,u,c))>l)return!1}return!0}var sn=new H,Ra=new Xe,qp=0,Ft=class extends Ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=md,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),s=kn(s,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lo=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yp=new si,xo=new H,pu=new H,ri=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);let t=xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(pu)),this.expandByPoint(xo.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zp=0,ii=new je,mu=new on,mr=new H,Zn=new si,_o=new si,gn=new H,xt=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dp(e)?Lo:Io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];_o.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(Zn.min,_o.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,_o.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(_o.min),Zn.expandByPoint(_o.max))}Zn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gn));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],o=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)gn.fromBufferAttribute(l,u),o&&(mr.fromBufferAttribute(e,u),gn.add(mr)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[];for(let M=0;M<n.count;M++)l[M]=new H,o[M]=new H;let u=new H,c=new H,h=new H,f=new Xe,p=new Xe,g=new Xe,v=new H,m=new H;function d(M,E,A){u.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,A),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,A),c.sub(u),h.sub(u),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),l[M].add(v),l[E].add(v),l[A].add(v),o[M].add(m),o[E].add(m),o[A].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let M=0,E=x.length;M<E;++M){let A=x[M],P=A.start,I=A.count;for(let D=P,w=P+I;D<w;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let b=new H,_=new H,y=new H,S=new H;function R(M){y.fromBufferAttribute(s,M),S.copy(y);let E=l[M];b.copy(E),b.sub(y.multiplyScalar(y.dot(E))).normalize(),_.crossVectors(S,E);let P=_.dot(o[M])<0?-1:1;a.setXYZW(M,b.x,b.y,b.z,P)}for(let M=0,E=x.length;M<E;++M){let A=x[M],P=A.start,I=A.count;for(let D=P,w=P+I;D<w;D+=3)R(e.getX(D+0)),R(e.getX(D+1)),R(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,a=new H,l=new H,o=new H,u=new H,c=new H,h=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,v),u.fromBufferAttribute(n,m),l.add(c),o.add(c),u.add(c),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(l,o){let u=l.array,c=l.itemSize,h=l.normalized,f=new u.constructor(o.length*c),p=0,g=0;for(let v=0,m=o.length;v<m;v++){l.isInterleavedBufferAttribute?p=o[v]*l.data.stride+l.offset:p=o[v]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new Ft(f,c,h)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],u=e(o,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let o=[],u=r[l];for(let c=0,h=u.length;c<h;c++){let f=u[c],p=e(f,n);o.push(p)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let u in o)o[u]!==void 0&&(e[u]=o[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let o in n){let u=n[o];e.data.attributes[o]=u.toJSON(e.data)}let s={},r=!1;for(let o in this.morphAttributes){let u=this.morphAttributes[o],c=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(s[o]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let c=s[u];this.setAttribute(u,c.clone(t))}let r=e.morphAttributes;for(let u in r){let c=[],h=r[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,c=a.length;u<c;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gu=new H,$p=new H,Jp=new ut,vi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gu.subVectors(n,t).cross($p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(gu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jp.getNormalMatrix(e),s=this.coplanarPoint(gu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Kp=0,Pi=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Ur,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nu,this.blendDst=Uu,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new vi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Vi=new H,vu=new H,Ca=new H,Pa=new H,Ar=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vu.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Pa.copy(this.origin).sub(vu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),l=Pa.dot(this.direction),o=-Pa.dot(Ca),u=Pa.lengthSq(),c=Math.abs(1-a*a),h,f,p,g;if(c>0)if(h=a*o-l,f=a*l-o,g=r*c,h>=0)if(f>=-g)if(f<=g){let v=1/c;h*=v,f*=v,p=h*(h+a*f+2*l)+f*(a*h+f+2*o)+u}else f=r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f=-r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f<=-g?(h=Math.max(0,-(-a*r+l)),f=h>0?-r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u):f<=g?(h=0,f=Math.min(Math.max(-r,-o),r),p=f*(f+2*o)+u):(h=Math.max(0,-(a*r+l)),f=h>0?r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u);else f=a>0?-r:r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(vu).addScaledVector(Ca,f),p}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),s=Vi.dot(Vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,o,u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),c>=0?(r=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(l=(e.min.z-f.z)*h,o=(e.max.z-f.z)*h):(l=(e.max.z-f.z)*h,o=(e.min.z-f.z)*h),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,l=this.direction,o=l.x,u=l.y,c=l.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,d=n.x-a.x,x=n.y-a.y,b=n.z-a.z,_=Math.abs(o),y=Math.abs(u),S=Math.abs(c),R,M,E,A,P,I,D,w,L,U,B,k;if(_>=y&&_>=S?(E=o,I=h,L=g,k=d,o>=0?(R=u,M=c,A=f,P=p,D=v,w=m,U=x,B=b):(R=c,M=u,A=p,P=f,D=m,w=v,U=b,B=x)):y>=S?(E=u,I=f,L=v,k=x,u>=0?(R=c,M=o,A=p,P=h,D=m,w=g,U=b,B=d):(R=o,M=c,A=h,P=p,D=g,w=m,U=d,B=b)):(E=c,I=p,L=m,k=b,c>=0?(R=o,M=u,A=h,P=f,D=g,w=v,U=d,B=x):(R=u,M=o,A=f,P=h,D=v,w=g,U=x,B=d)),E===0)return null;let z=R/E,V=M/E,G=1/E,J=A-z*I,re=P-V*I,Oe=D-z*L,ge=w-V*L,Ne=U-z*k,q=B-V*k,Z=Ne*ge-q*Oe,Se=J*q-re*Ne,Ie=Oe*re-ge*J;if(s){if(Z<0||Se<0||Ie<0)return null}else if((Z<0||Se<0||Ie<0)&&(Z>0||Se>0||Ie>0))return null;let ve=Z+Se+Ie;if(ve===0)return null;let Je=G*(Z*I+Se*L+Ie*k);return(ve>0?Je<0:Je>0)?null:this.at(Je/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mf=new je,Is=new Ar,Ia=new ri,bf=new H,La=new H,Da=new H,Na=new H,xu=new H,Ua=new H,Sf=new H,Fa=new H,ft=class extends on{constructor(e=new xt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Ua.set(0,0,0);for(let o=0,u=r.length;o<u;o++){let c=l[o],h=r[o];c!==0&&(xu.fromBufferAttribute(h,e),a?Ua.addScaledVector(xu,c):Ua.addScaledVector(xu.sub(t),c))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(Ia.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Ia,bf)===null||Is.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(Mf.copy(r).invert(),Is.copy(e.ray).applyMatrix4(Mf),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,y=b;_<y;_+=3){let S=l.getX(_),R=l.getX(_+1),M=l.getX(_+2);s=Oa(this,d,e,n,u,c,h,S,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let x=l.getX(m),b=l.getX(m+1),_=l.getX(m+2);s=Oa(this,a,e,n,u,c,h,x,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,y=b;_<y;_+=3){let S=_,R=_+1,M=_+2;s=Oa(this,d,e,n,u,c,h,S,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let x=m,b=m+1,_=m+2;s=Oa(this,a,e,n,u,c,h,x,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function jp(i,e,t,n,s,r,a,l){let o;if(e.side===bn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,e.side===ms,l),o===null)return null;Fa.copy(l),Fa.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Fa);return u<t.near||u>t.far?null:{distance:u,point:Fa.clone(),object:i}}function Oa(i,e,t,n,s,r,a,l,o,u){i.getVertexPosition(l,La),i.getVertexPosition(o,Da),i.getVertexPosition(u,Na);let c=jp(i,e,t,n,La,Da,Na,Sf);if(c){let h=new H;as.getBarycoord(Sf,La,Da,Na,h),s&&(c.uv=as.getInterpolatedAttribute(s,l,o,u,h,new Xe)),r&&(c.uv1=as.getInterpolatedAttribute(r,l,o,u,h,new Xe)),a&&(c.normal=as.getInterpolatedAttribute(a,l,o,u,h,new H),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let f={a:l,b:o,c:u,normal:new H,materialIndex:0};as.getNormal(La,Da,Na,f.normal),c.face=f,c.barycoord=h}return c}var ls=class extends Nn{constructor(e=null,t=1,n=1,s,r,a,l,o,u=rn,c=rn,h,f){super(null,a,l,o,u,c,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new je,Tf=new je,Ba=[],Ef=new si,Qp=new je,yo=new ft,Mo=new ri,Wi=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Un(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Ef.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(Ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Mo.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),Tf.multiplyMatrices(n,gr),yo.matrixWorld=Tf,yo.raycast(e,Ba);for(let a=0,l=Ba.length;a<l;a++){let o=Ba[a];o.instanceId=r,o.object=this,t.push(o)}Ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Un(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ls(new Float32Array(s*this.count),s,this.count,Bs,oi));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ls=new ri,em=new Xe(.5,.5),za=new H,Rr=class{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],u=r[3],c=r[4],h=r[5],f=r[6],p=r[7],g=r[8],v=r[9],m=r[10],d=r[11],x=r[12],b=r[13],_=r[14],y=r[15];if(s[0].setComponents(u-a,p-c,d-g,y-x).normalize(),s[1].setComponents(u+a,p+c,d+g,y+x).normalize(),s[2].setComponents(u+l,p+h,d+v,y+b).normalize(),s[3].setComponents(u-l,p-h,d-v,y-b).normalize(),n)s[4].setComponents(o,f,m,_).normalize(),s[5].setComponents(u-o,p-f,d-m,y-_).normalize();else if(s[4].setComponents(u-o,p-f,d-m,y-_).normalize(),t===xi)s[5].setComponents(u+o,p+f,d+m,y+_).normalize();else if(t===Sr)s[5].setComponents(o,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let t=em.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ol=class extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},al=new H,ll=new H,wf=new je,bo=new Ar,ka=new ri,_u=new H,Af=new H,Do=class extends on{constructor(e=new xt,t=new ol){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)al.fromBufferAttribute(t,s-1),ll.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=al.distanceTo(ll);e.setAttribute("lineDistance",new et(n,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;wf.copy(s).invert(),bo.copy(e.ray).applyMatrix4(wf);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=u){let d=c.getX(v),x=c.getX(v+1),b=Ha(this,e,bo,o,d,x,v);b&&t.push(b)}if(this.isLineLoop){let v=c.getX(g-1),m=c.getX(p),d=Ha(this,e,bo,o,v,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=u){let d=Ha(this,e,bo,o,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=Ha(this,e,bo,o,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Ha(i,e,t,n,s,r,a){let l=i.geometry.attributes.position;if(al.fromBufferAttribute(l,s),ll.fromBufferAttribute(l,r),t.distanceSqToSegment(al,ll,_u,Af)>n)return;_u.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(_u);if(!(u<e.near||u>e.far))return{distance:u,point:Af.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Cr=class extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rf=new je,wu=new Ar,Va=new ri,Ga=new H,No=class extends on{constructor(e=new xt,t=new Cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;Rf.copy(s).invert(),wu.copy(e.ray).applyMatrix4(Rf);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,v=p;g<v;g++){let m=u.getX(g);Ga.fromBufferAttribute(h,m),Cf(Ga,m,o,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)Ga.fromBufferAttribute(h,g),Cf(Ga,g,o,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Cf(i,e,t,n,s,r,a){let l=wu.distanceSqToPoint(i);if(l<t){let o=new H;wu.closestPointToPoint(i,o),o.applyMatrix4(n);let u=s.ray.origin.distanceTo(o);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Uo=class extends Nn{constructor(e=[],t=gs,n,s,r,a,l,o,u,c){super(e,t,n,s,r,a,l,o,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vn=class extends Nn{constructor(e,t,n,s,r,a,l,o,u){super(e,t,n,s,r,a,l,o,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cs=class extends Nn{constructor(e,t,n=Mi,s,r,a,l=rn,o=rn,u,c=Ri,h=1){if(c!==Ri&&c!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,a,l,o,c,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cl=class extends cs{constructor(e,t=Mi,n=gs,s,r,a=rn,l=rn,o,u=Ri){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,n,s,r,a,l,o,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fo=class extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_i=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],u=[],c=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2));function g(v,m,d,x,b,_,y,S,R,M,E){let A=_/R,P=y/M,I=_/2,D=y/2,w=S/2,L=R+1,U=M+1,B=0,k=0,z=new H;for(let V=0;V<U;V++){let G=V*P-D;for(let J=0;J<L;J++){let re=J*A-I;z[v]=re*x,z[m]=G*b,z[d]=w,u.push(z.x,z.y,z.z),z[v]=0,z[m]=0,z[d]=S>0?1:-1,c.push(z.x,z.y,z.z),h.push(J/R),h.push(1-V/M),B+=1}}for(let V=0;V<M;V++)for(let G=0;G<R;G++){let J=f+G+L*V,re=f+G+L*(V+1),Oe=f+(G+1)+L*(V+1),ge=f+(G+1)+L*V;o.push(J,re,ge),o.push(re,Oe,ge),k+=6}l.addGroup(p,k,E),p+=k,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Oo=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],l=[],o=[],u=new H,c=new Xe;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;u.x=e*Math.cos(p),u.y=e*Math.sin(p),a.push(u.x,u.y,u.z),l.push(0,0,1),c.x=(a[f]/e+1)/2,c.y=(a[f+1]/e+1)/2,o.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pr=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let u=this;s=Math.floor(s),r=Math.floor(r);let c=[],h=[],f=[],p=[],g=0,v=[],m=n/2,d=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2));function x(){let _=new H,y=new H,S=0,R=(t-e)/n;for(let M=0;M<=r;M++){let E=[],A=M/r,P=A*(t-e)+e;for(let I=0;I<=s;I++){let D=I/s,w=D*o+l,L=Math.sin(w),U=Math.cos(w);y.x=P*L,y.y=-A*n+m,y.z=P*U,h.push(y.x,y.y,y.z),_.set(L,R,U).normalize(),f.push(_.x,_.y,_.z),p.push(D,1-A),E.push(g++)}v.push(E)}for(let M=0;M<s;M++)for(let E=0;E<r;E++){let A=v[E][M],P=v[E+1][M],I=v[E+1][M+1],D=v[E][M+1];(e>0||E!==0)&&(c.push(A,P,D),S+=3),(t>0||E!==r-1)&&(c.push(P,I,D),S+=3)}u.addGroup(d,S,0),d+=S}function b(_){let y=g,S=new Xe,R=new H,M=0,E=_===!0?e:t,A=_===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*A,0),f.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let I=0;I<=s;I++){let w=I/s*o+l,L=Math.cos(w),U=Math.sin(w);R.x=E*U,R.y=m*A,R.z=E*L,h.push(R.x,R.y,R.z),f.push(0,A,0),S.x=L*.5+.5,S.y=U*.5*A+.5,p.push(S.x,S.y),g++}for(let I=0;I<s;I++){let D=y+I,w=P+I;_===!0?c.push(w,w+1,D):c.push(w+1,w,D),M+=3}u.addGroup(d,M,_===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ul=class i extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];l(s),u(n),c(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let b=new H,_=new H,y=new H;for(let S=0;S<t.length;S+=3)p(t[S+0],b),p(t[S+1],_),p(t[S+2],y),o(b,_,y,x)}function o(x,b,_,y){let S=y+1,R=[];for(let M=0;M<=S;M++){R[M]=[];let E=x.clone().lerp(_,M/S),A=b.clone().lerp(_,M/S),P=S-M;for(let I=0;I<=P;I++)I===0&&M===S?R[M][I]=E:R[M][I]=E.clone().lerp(A,I/P)}for(let M=0;M<S;M++)for(let E=0;E<2*(S-M)-1;E++){let A=Math.floor(E/2);E%2===0?(f(R[M][A+1]),f(R[M+1][A]),f(R[M][A])):(f(R[M][A+1]),f(R[M+1][A+1]),f(R[M+1][A]))}}function u(x){let b=new H;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(x),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function c(){let x=new H;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];let _=m(x)/2/Math.PI+.5,y=d(x)/Math.PI+.5;a.push(_,1-y)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){let b=a[x+0],_=a[x+2],y=a[x+4],S=Math.max(b,_,y),R=Math.min(b,_,y);S>.9&&R<.1&&(b<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),y<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,b){let _=x*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let x=new H,b=new H,_=new H,y=new H,S=new Xe,R=new Xe,M=new Xe;for(let E=0,A=0;E<r.length;E+=9,A+=6){x.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(a[A+0],a[A+1]),R.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),y.copy(x).add(b).add(_).divideScalar(3);let P=m(y);v(S,A+0,x,P),v(R,A+2,b,P),v(M,A+4,_,P)}}function v(x,b,_,y){y<0&&x.x===1&&(a[b]=x.x-1),_.x===0&&_.z===0&&(a[b]=y/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Bo=class i extends ul{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Xt=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(n),o=Math.floor(s),u=l+1,c=o+1,h=e/l,f=t/o,p=[],g=[],v=[],m=[];for(let d=0;d<c;d++){let x=d*f-a;for(let b=0;b<u;b++){let _=b*h-r;g.push(_,-x,0),v.push(0,0,1),m.push(b/l),m.push(1-d/o)}}for(let d=0;d<o;d++)for(let x=0;x<l;x++){let b=x+u*d,_=x+u*(d+1),y=x+1+u*(d+1),S=x+1+u*d;p.push(b,_,S),p.push(_,y,S)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zo=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),u=0,c=[],h=new H,f=new H,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let x=[],b=d/n,_=a+b*l,y=e*Math.cos(_),S=Math.sqrt(e*e-y*y),R=0;d===0&&a===0?R=.5/t:d===n&&o===Math.PI&&(R=-.5/t);for(let M=0;M<=t;M++){let E=M/t,A=s+E*r;h.x=-S*Math.cos(A),h.y=y,h.z=S*Math.sin(A),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(E+R,1-b),x.push(u++)}c.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){let b=c[d][x+1],_=c[d][x],y=c[d+1][x],S=c[d+1][x+1];(d!==0||a>0)&&p.push(b,_,S),(d!==n-1||o<Math.PI)&&p.push(_,y,S)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Pf(s))s.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Pf(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Cn(i){let e={};for(let t=0;t<i.length;t++){let n=zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Pf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ju(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var ks={clone:zs,merge:Cn},nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hl=class extends pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var un=class extends Pi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ir=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fl=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function yu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var us=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends us{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Su,endingEnd:Su}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Tu:r=e,l=2*t-n;break;case Eu:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Tu:a=e,o=2*n-t;break;case Eu:a=1,o=n+s[1]-s[0];break;default:a=e-1,o=t}let u=(n-t)*.5,c=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(o-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,x=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let y=0;y!==l;++y)r[y]=d*a[c+y]+x*a[u+y]+b*a[o+y]+_*a[h+y];return r}},pl=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=(n-t)/(s-t),h=1-c;for(let f=0;f!==l;++f)r[f]=a[u+f]*h+a[o+f]*c;return r}},ml=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gl=class extends us{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this.inTangents,h=this.outTangents;if(!c||!h){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==l;++m)r[m]=a[u+m]*v+a[o+m]*g;return r}let f=l*2,p=e-1;for(let g=0;g!==l;++g){let v=a[u+g],m=a[o+g],d=p*f+g*2,x=h[d],b=h[d+1],_=e*f+g*2,y=c[_],S=c[_+1],R=rm(n,t,x,y,s);r[g]=Md(R,v,b,S,m)}return r}};function Md(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function sm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function rm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let l=Md(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let o=sm(r,e,t,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var $n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),yu(e.settings)&&(n.settings={inTangents:vr(e.settings.inTangents,Array),outTangents:vr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case nl:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break;case bu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return st("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return nl;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;yu(this.settings)&&(If(this.settings.inTangents,e),If(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){at("KeyframeTrack: Time is not a valid number.",this,l,o),e=!1;break}if(a!==null&&a>o){at("KeyframeTrack: Out of order keys.",this,l,o,a),e=!1;break}a=o}if(s!==void 0&&Np(s))for(let l=0,o=s.length;l!==o;++l){let u=s[l];if(isNaN(u)){at("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qa,r=e.length-1,a=1;for(let l=1;l<r;++l){let o=!1,u=e[l],c=e[l+1];if(u!==c&&(l!==1||u!==e[0]))if(s)o=!0;else{let h=l*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[f+g]||v!==t[p+g]){o=!0;break}}}if(o){if(l!==a){e[a]=e[l];let h=l*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,o=a*n,u=0;u!==n;++u)t[o+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,yu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function If(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=nl;var hs=class extends $n{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=So;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};vl.prototype.ValueTypeName="color";var xl=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};xl.prototype.ValueTypeName="number";var _l=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-t)/(s-t),u=e*l;for(let c=u+l;u!==c;u+=4)vn.slerpFlat(r,0,a,u-l,a,u,o);return r}},ko=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}};ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends $n{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=So;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};yl.prototype.ValueTypeName="vector";var Ml=class{constructor(e,t,n){let s=this,r=!1,a=0,l=0,o,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){l++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,l),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){let h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bd=new Ml,bl=class{constructor(e){this.manager=e!==void 0?e:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=class extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ho=class extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Mu=new je,Lf=new H,Df=new H,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lf),Df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Df),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Mu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Mu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Sr||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(Mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wa=new H,Xa=new vn,wi=new H,Xi=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wa,Xa,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Wa,Xa,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new H,Nf=new Xe,Uf=new Xe,Mn=class extends Xi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Nf,Uf),t.subVectors(Uf,Nf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*n/u,s*=a.width/o,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Au=class extends Vo{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ao*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Go=class extends Lr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var ds=class extends Xi{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ru=class extends Vo{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ps=class extends xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var xr=-90,_r=1,Sl=class extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(xr,_r,e,t);s.layers=this.layers,this.add(s);let r=new Mn(xr,_r,e,t);r.layers=this.layers,this.add(r);let a=new Mn(xr,_r,e,t);a.layers=this.layers,this.add(a);let l=new Mn(xr,_r,e,t);l.layers=this.layers,this.add(l);let o=new Mn(xr,_r,e,t);o.layers=this.layers,this.add(o);let u=new Mn(xr,_r,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,o]=t;for(let u of t)this.remove(u);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Tl=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Wo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=om.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function om(){this._document.hidden===!1&&this.reset()}var Qu="\\[\\]\\.:\\/",am=new RegExp("["+Qu+"]","g"),eh="[^"+Qu+"]",lm="[^"+Qu.replace("\\.","")+"]",cm=/((?:WC+[\/:])*)/.source.replace("WC",eh),um=/(WCOD+)?/.source.replace("WCOD",lm),hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),dm=new RegExp("^"+cm+um+hm+fm+"$"),pm=["material","materials","bones","map"],Cu=class{constructor(e,t,n){let s=n||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(am,"")}static parseTrackName(e){let t=dm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let o=n(l.children);if(o)return o}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;at("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=Cu;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var My=new Float32Array(1);var oh=class oh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};oh.prototype.isMatrix2=!0;var Pu=oh;function th(i,e,t,n){let s=mm(n);switch(t){case Zu:return i*e;case Bs:return i*e/s.components*s.byteLength;case Ll:return i*e/s.components*s.byteLength;case xs:return i*e*2/s.components*s.byteLength;case Dl:return i*e*2/s.components*s.byteLength;case $u:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case Nl:return i*e*4/s.components*s.byteLength;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case Ul:case Ol:return Math.max(i,8)*Math.max(e,8)/2;case zl:case kl:case Vl:case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:case jo:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rc:case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mm(i){switch(i){case Rn:case Wu:return{byteLength:1,components:1};case Fr:case Xu:case an:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case Mi:case Cl:case oi:return{byteLength:4,components:1};case qu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bm(i){let e=new WeakMap;function t(l,o){let u=l.array,c=l.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,u,c),l.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,o,u){let c=o.array,h=o.updateRanges;if(i.bindBuffer(u,l),h.length===0)i.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=e.get(l);o&&(i.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let c=e.get(l);(!c||c.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,o));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,o),u.version=l.version}}return{get:s,remove:r,update:a}}var Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qm=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ug=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
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
#endif`,Mg=`uniform sampler2D dfgLUT;
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
}`,bg=`
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dg=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qg=`#ifdef USE_NORMALMAP
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
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lv=`float getShadowMask() {
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
}`,cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#ifdef USE_TRANSMISSION
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tv=`uniform sampler2D t2D;
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`#include <common>
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
}`,Pv=`#if DEPTH_PACKING == 3200
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
}`,Iv=`#define DISTANCE
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
}`,Lv=`#define DISTANCE
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`uniform float scale;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#define LAMBERT
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
}`,kv=`#define LAMBERT
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
}`,Hv=`#define MATCAP
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
}`,Vv=`#define MATCAP
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
}`,Gv=`#define NORMAL
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
}`,Wv=`#define NORMAL
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
}`,Xv=`#define PHONG
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
}`,qv=`#define PHONG
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
}`,Yv=`#define STANDARD
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
}`,Zv=`#define STANDARD
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
}`,$v=`#define TOON
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
}`,Jv=`#define TOON
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
}`,Kv=`uniform float size;
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
}`,jv=`uniform vec3 diffuse;
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
}`,Qv=`#include <common>
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
}`,ex=`uniform vec3 color;
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
}`,tx=`uniform float rotation;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Sm,alphahash_pars_fragment:Tm,alphamap_fragment:Em,alphamap_pars_fragment:wm,alphatest_fragment:Am,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Im,batching_vertex:Lm,begin_vertex:Dm,beginnormal_vertex:Nm,bsdfs:Um,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Hm,color_fragment:Vm,color_pars_fragment:Gm,color_pars_vertex:Wm,color_vertex:Xm,common:qm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:Zm,displacementmap_pars_vertex:$m,displacementmap_vertex:Jm,emissivemap_fragment:Km,emissivemap_pars_fragment:jm,colorspace_fragment:Qm,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:mg,envmap_vertex:rg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:ug,lightmap_pars_fragment:hg,lights_lambert_fragment:fg,lights_lambert_pars_fragment:dg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:vg,lights_phong_fragment:xg,lights_phong_pars_fragment:_g,lights_physical_fragment:yg,lights_physical_pars_fragment:Mg,lights_fragment_begin:bg,lights_fragment_maps:Sg,lights_fragment_end:Tg,lightprobes_pars_fragment:Eg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Cg,map_fragment:Pg,map_pars_fragment:Ig,map_particle_fragment:Lg,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Fg,morphcolor_vertex:Og,morphnormal_vertex:Bg,morphtarget_pars_vertex:zg,morphtarget_vertex:kg,normal_fragment_begin:Hg,normal_fragment_maps:Vg,normal_pars_fragment:Gg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:qg,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:Zg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Jg,opaque_fragment:Kg,packing:jg,premultiplied_alpha_fragment:Qg,project_vertex:ev,dithering_fragment:tv,dithering_pars_fragment:nv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:rv,shadowmap_pars_vertex:ov,shadowmap_vertex:av,shadowmask_pars_fragment:lv,skinbase_vertex:cv,skinning_pars_vertex:uv,skinning_vertex:hv,skinnormal_vertex:fv,specularmap_fragment:dv,specularmap_pars_fragment:pv,tonemapping_fragment:mv,tonemapping_pars_fragment:gv,transmission_fragment:vv,transmission_pars_fragment:xv,uv_pars_fragment:_v,uv_pars_vertex:yv,uv_vertex:Mv,worldpos_vertex:bv,background_vert:Sv,background_frag:Tv,backgroundCube_vert:Ev,backgroundCube_frag:wv,cube_vert:Av,cube_frag:Rv,depth_vert:Cv,depth_frag:Pv,distance_vert:Iv,distance_frag:Lv,equirect_vert:Dv,equirect_frag:Nv,linedashed_vert:Uv,linedashed_frag:Fv,meshbasic_vert:Ov,meshbasic_frag:Bv,meshlambert_vert:zv,meshlambert_frag:kv,meshmatcap_vert:Hv,meshmatcap_frag:Vv,meshnormal_vert:Gv,meshnormal_frag:Wv,meshphong_vert:Xv,meshphong_frag:qv,meshphysical_vert:Yv,meshphysical_frag:Zv,meshtoon_vert:$v,meshtoon_frag:Jv,points_vert:Kv,points_frag:jv,shadow_vert:Qv,shadow_frag:ex,sprite_vert:tx,sprite_frag:nx},Ue={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Li={basic:{uniforms:Cn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Cn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Cn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Cn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Cn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new de(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Cn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Cn([Ue.points,Ue.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Cn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Cn([Ue.common,Ue.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Cn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Cn([Ue.sprite,Ue.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:Cn([Ue.common,Ue.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:Cn([Ue.lights,Ue.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Li.physical={uniforms:Cn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var pc={r:0,b:0,g:0},ix=new je,Xd=new ut;Xd.set(-1,0,0,0,1,0,0,0,1);function sx(i,e,t,n,s,r){let a=new de(0),l=s===!0?0:1,o,u,c=null,h=0,f=null;function p(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let _=x.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(x){let b=!1,_=p(x);_===null?m(a,l):_&&_.isColor&&(m(_,1),b=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===qo)?(u===void 0&&(u=new ft(new _i(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:zs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ix.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Xd),u.material.toneMapped=yt.getTransfer(_.colorSpace)!==Pt,(c!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new ft(new Xt(2,2),new pt({name:"BackgroundMaterial",uniforms:zs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,o.material.toneMapped=yt.getTransfer(_.colorSpace)!==Pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||h!==_.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function m(x,b){x.getRGB(pc,ju(i)),t.buffers.color.setClear(pc.r,pc.g,pc.b,b,r)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:g,addToRenderList:v,dispose:d}}function rx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(P,I,D,w,L){let U=!1,B=h(P,w,D,I);r!==B&&(r=B,u(r.object)),U=p(P,w,D,L),U&&g(P,w,D,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(P,I,D,w),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function o(){return i.createVertexArray()}function u(P){return i.bindVertexArray(P)}function c(P){return i.deleteVertexArray(P)}function h(P,I,D,w){let L=w.wireframe===!0,U=n[I.id];U===void 0&&(U={},n[I.id]=U);let B=P.isInstancedMesh===!0?P.id:0,k=U[B];k===void 0&&(k={},U[B]=k);let z=k[D.id];z===void 0&&(z={},k[D.id]=z);let V=z[L];return V===void 0&&(V=f(o()),z[L]=V),V}function f(P){let I=[],D=[],w=[];for(let L=0;L<t;L++)I[L]=0,D[L]=0,w[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:w,object:P,attributes:{},index:null}}function p(P,I,D,w){let L=r.attributes,U=I.attributes,B=0,k=D.getAttributes();for(let z in k)if(k[z].location>=0){let G=L[z],J=U[z];if(J===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;B++}return r.attributesNum!==B||r.index!==w}function g(P,I,D,w){let L={},U=I.attributes,B=0,k=D.getAttributes();for(let z in k)if(k[z].location>=0){let G=U[z];G===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(G=P.instanceColor));let J={};J.attribute=G,G&&G.data&&(J.data=G.data),L[z]=J,B++}r.attributes=L,r.attributesNum=B,r.index=w}function v(){let P=r.newAttributes;for(let I=0,D=P.length;I<D;I++)P[I]=0}function m(P){d(P,0)}function d(P,I){let D=r.newAttributes,w=r.enabledAttributes,L=r.attributeDivisors;D[P]=1,w[P]===0&&(i.enableVertexAttribArray(P),w[P]=1),L[P]!==I&&(i.vertexAttribDivisor(P,I),L[P]=I)}function x(){let P=r.newAttributes,I=r.enabledAttributes;for(let D=0,w=I.length;D<w;D++)I[D]!==P[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function b(P,I,D,w,L,U,B){B===!0?i.vertexAttribIPointer(P,I,D,L,U):i.vertexAttribPointer(P,I,D,w,L,U)}function _(P,I,D,w){v();let L=w.attributes,U=D.getAttributes(),B=I.defaultAttributeValues;for(let k in U){let z=U[k];if(z.location>=0){let V=L[k];if(V===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let G=V.normalized,J=V.itemSize,re=e.get(V);if(re===void 0)continue;let Oe=re.buffer,ge=re.type,Ne=re.bytesPerElement,q=ge===i.INT||ge===i.UNSIGNED_INT||V.gpuType===Cl;if(V.isInterleavedBufferAttribute){let Z=V.data,Se=Z.stride,Ie=V.offset;if(Z.isInstancedInterleavedBuffer){for(let ve=0;ve<z.locationSize;ve++)d(z.location+ve,Z.meshPerAttribute);P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ve=0;ve<z.locationSize;ve++)m(z.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let ve=0;ve<z.locationSize;ve++)b(z.location+ve,J/z.locationSize,ge,G,Se*Ne,(Ie+J/z.locationSize*ve)*Ne,q)}else{if(V.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)d(z.location+Z,V.meshPerAttribute);P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Z=0;Z<z.locationSize;Z++)m(z.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Z=0;Z<z.locationSize;Z++)b(z.location+Z,J/z.locationSize,ge,G,J*Ne,J/z.locationSize*Z*Ne,q)}}else if(B!==void 0){let G=B[k];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(z.location,G);break;case 3:i.vertexAttrib3fv(z.location,G);break;case 4:i.vertexAttrib4fv(z.location,G);break;default:i.vertexAttrib1fv(z.location,G)}}}}x()}function y(){E();for(let P in n){let I=n[P];for(let D in I){let w=I[D];for(let L in w){let U=w[L];for(let B in U)c(U[B].object),delete U[B];delete w[L]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let D in I){let w=I[D];for(let L in w){let U=w[L];for(let B in U)c(U[B].object),delete U[B];delete w[L]}}delete n[P.id]}function R(P){for(let I in n){let D=n[I];for(let w in D){let L=D[w];if(L[P.id]===void 0)continue;let U=L[P.id];for(let B in U)c(U[B].object),delete U[B];delete L[P.id]}}}function M(P){for(let I in n){let D=n[I],w=P.isInstancedMesh===!0?P.id:0,L=D[w];if(L!==void 0){for(let U in L){let B=L[U];for(let k in B)c(B[k].object),delete B[k];delete L[U]}delete D[w],Object.keys(D).length===0&&delete n[I]}}}function E(){A(),a=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function ox(i,e,t){let n;function s(o){n=o}function r(o,u){i.drawArrays(n,o,u),t.update(u,n,1)}function a(o,u,c){c!==0&&(i.drawArraysInstanced(n,o,u,c),t.update(u,n,c))}function l(o,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function ax(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){let M=R===an&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Rn&&R!==oi&&!M&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",c=o(u);c!==u&&(st("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:_,maxSamples:y,samples:S}}function lx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new vi,l=new ut,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{let x=r?0:n,b=x*4,_=d.clippingState||null;o.value=_,_=c(g,f,b,p);for(let y=0;y!==b;++y)_[y]=t[y];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=o.value,g!==!0||m===null){let d=p+v*4,x=f.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,_=p;b!==v;++b,_+=4)a.copy(h[b]).applyMatrix4(x,l),a.normal.toArray(m,_),m[_+3]=a.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var zr=4,cx=6,ux=20,hx=256,ta=new ds,Sd=new de,ah=null,lh=0,ch=0,uh=!1,fx=new H,Hs=new H,gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:l=fx}=r;ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o,l),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,lh,ch),this._renderer.xr.enabled=uh,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:an,format:Xn,colorSpace:To,depthBuffer:!1},s=Td(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dx(r)),this._blurMaterial=mx(r,e,t),this._ggxMaterial=px(r,e,t)}return s}_compileMaterial(e){let t=new ft(new xt,e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,n,s,r){let o=new Mn(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Sd),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new _i,new nn({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,d=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,d=!0):(m.color.copy(Sd),d=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(o.up.set(0,u[b],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+c[b],r.y,r.z)):_===1?(o.up.set(0,0,u[b]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+c[b],r.z)):(o.up.set(0,u[b],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+c[b]));let y=this._cubeSize;Br(s,_*y,b>2?y:0,y,y),h.setRenderTarget(s),d&&h.render(v,o),h.render(e,o)}h.toneMapping=p,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===gs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let o=this._cubeSize;Br(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,ta)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let o=a.uniforms,u=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),f=u*1.25,p=h*f,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-zr?n-g+zr:0),d=4*(this._cubeSize-v);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=g-t,Br(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(l,ta),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,Br(e,m,d,3*v,2*v),s.setRenderTarget(e),s.render(l,ta)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[s];o.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let c=this._sizeLods[s],h=3*c*(s>this._lodMax-zr?s-this._lodMax+zr:0),f=4*(this._cubeSize-c);Br(t,h,f,3*c,2*c),a.setRenderTarget(t),a.render(o,ta)}};function dx(i){let e=[],t=[],n=i,s=i-zr+1+cx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),o=-l,u=1+l,c=[o,o,u,o,u,u,o,o,u,u,o,u],h=6,f=6,p=3,g=new Float32Array(p*f*h),v=new Float32Array(p*f*h);for(let d=0;d<h;d++){let x=d%3*2/3-1,b=d>2?0:-1,_=[x,b,0,x+2/3,b,0,x+2/3,b+1,0,x,b,0,x+2/3,b+1,0,x,b+1,0];g.set(_,p*f*d);for(let y=0;y<f;y++){let S=c[y*2]*2-1,R=c[y*2+1]*2-1;d===0?Hs.set(1,R,S):d===1?Hs.set(-S,1,-R):d===2?Hs.set(-S,R,1):d===3?Hs.set(-1,R,-S):d===4?Hs.set(-S,-1,R):Hs.set(S,R,-1),Hs.toArray(v,(d*f+y)*p)}}let m=new xt;m.setAttribute("position",new Ft(g,p)),m.setAttribute("outputDirection",new Ft(v,p)),t.push(new ft(m,null)),n>zr&&n--}return{lodMeshes:t,sizeLods:e}}function Td(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function px(i,e,t){return new pt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function mx(i,e,t){return new pt({name:"SphericalGaussianBlur",defines:{SAMPLES:ux,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ed(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function wd(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vc=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _i(5,5,5),r=new pt({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Gn});r.uniforms.tEquirect.value=t;let a=new ft(s,r),l=t.minFilter;return t.minFilter===Wn&&(t.minFilter=kt),new Sl(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function gx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===wl||p===Al)if(e.has(f)){let g=e.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let v=new vc(g.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",u),l(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===wl||p===Al,v=p===gs||p===Os;if(g||v){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new gc(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let x=f.image;return g&&x&&x.height>0||v&&x&&o(x)?(n===null&&(n=new gc(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function l(f,p){return p===wl?f.mapping=gs:p===Al&&(f.mapping=Os),f}function o(f){let p=0,g=6;for(let v=0;v<g;v++)f[v]!==void 0&&p++;return p===g}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function vx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function xx(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function o(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,g=h.attributes.position,v=0;if(g===void 0)return;if(p!==null){let x=p.array;v=p.version;for(let b=0,_=x.length;b<_;b+=3){let y=x[b+0],S=x[b+1],R=x[b+2];f.push(y,S,S,R,R,y)}}else{let x=g.array;v=g.version;for(let b=0,_=x.length/3-1;b<_;b+=3){let y=b+0,S=b+1,R=b+2;f.push(y,S,S,R,R,y)}}let m=new(g.count>=65535?Lo:Io)(f,1);m.version=v;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function c(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:l,update:o,getWireframeAttribute:c}}function _x(i,e,t){let n;function s(h){n=h}let r,a;function l(h){r=h.type,a=h.bytesPerElement}function o(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*a,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let v=0;for(let m=0;m<p;m++)v+=f[m];t.update(v,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function yx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,e,t){let n=new WeakMap,s=new Mt;function r(a,l,o){let u=a.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=c!==void 0?c.length:0,f=n.get(l);if(f===void 0||f.count!==h){let E=function(){R.dispose(),n.delete(l),l.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let _=l.attributes.position.count*b,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*y*4*h),R=new Ro(S,_,y,h);R.type=oi,R.needsUpdate=!0;let M=b*4;for(let A=0;A<h;A++){let P=m[A],I=d[A],D=x[A],w=_*y*4*A;for(let L=0;L<P.count;L++){let U=L*M;p===!0&&(s.fromBufferAttribute(P,L),S[w+U+0]=s.x,S[w+U+1]=s.y,S[w+U+2]=s.z,S[w+U+3]=0),g===!0&&(s.fromBufferAttribute(I,L),S[w+U+4]=s.x,S[w+U+5]=s.y,S[w+U+6]=s.z,S[w+U+7]=0),v===!0&&(s.fromBufferAttribute(D,L),S[w+U+8]=s.x,S[w+U+9]=s.y,S[w+U+10]=s.z,S[w+U+11]=D.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new Xe(_,y)},n.set(l,f),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<u.length;v++)p+=u[v];let g=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",u)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function bx(i,e,t,n,s){let r=new WeakMap;function a(u){let c=s.render.frame,h=u.geometry,f=e.get(u,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==c&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function l(){r=new WeakMap}function o(u){let c=u.target;c.removeEventListener("dispose",o),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:l}}var Sx={[Ou]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[zu]:"CINEON_TONE_MAPPING",[ku]:"ACES_FILMIC_TONE_MAPPING",[Vu]:"AGX_TONE_MAPPING",[Xo]:"NEUTRAL_TONE_MAPPING",[Hu]:"CUSTOM_TONE_MAPPING"};function Tx(i,e,t,n,s,r){let a=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,u=new xt;u.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new et([0,2,0,0,2,0],2));let c=new hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ft(u,c),f=new ds(-1,1,1,-1,0,1),p=null,g=null,v=!1,m,d=null,x=[],b=!1;this.setSize=function(_,y){a.setSize(_,y),l!==null&&l.setSize(_,y),o!==null&&o.setSize(_,y);for(let S=0;S<x.length;S++){let R=x[S];R.setSize&&R.setSize(_,y)}},this.setEffects=function(_){x=_,b=x.length>0&&x[0].isRenderPass===!0;let y=a.width,S=a.height;x.length>0&&l===null&&(l=new Ot(y,S,{type:an,depthBuffer:!1,stencilBuffer:!1}),o=new Ot(y,S,{type:an,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let M=x[R];M.setSize&&M.setSize(y,S)}},this.begin=function(_,y){if(v||_.toneMapping===yi&&x.length===0)return!1;if(d=y,y!==null){let S=y.width,R=y.height;(a.width!==S||a.height!==R)&&this.setSize(S,R)}return b===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=yi,!0},this.hasRenderPass=function(){return b},this.end=function(_,y){_.toneMapping=m,v=!0;let S=a,R=l;for(let M=0;M<x.length;M++){let E=x[M];E.enabled!==!1&&(E.render(_,R,S,y),E.needsSwap!==!1&&(S=R,R=R===l?o:l))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,c.defines={},yt.getTransfer(p)===Pt&&(c.defines.SRGB_TRANSFER="");let M=Sx[g];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(d),_.render(h,f),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var qd=new Nn,dh=new cs(1,1),Yd=new Ro,Zd=new rl,$d=new Uo,Ad=[],Rd=[],Cd=new Float32Array(16),Pd=new Float32Array(9),Id=new Float32Array(4);function Hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ad[s];if(r===void 0&&(r=new Float32Array(s),Ad[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yc(i,e){let t=Rd[e];t===void 0&&(t=new Int32Array(e),Rd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ex(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function Cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Id.set(n),i.uniformMatrix2fv(this.addr,!1,Id),fn(t,n)}}function Px(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Pd.set(n),i.uniformMatrix3fv(this.addr,!1,Pd),fn(t,n)}}function Ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),fn(t,n)}}function Lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function Fx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dh.compareFunction=t.isReversedDepthBuffer()?dc:fc,r=dh):r=qd,t.setTexture2D(e||r,s)}function Hx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zd,s)}function Vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$d,s)}function Gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yd,s)}function Wx(i){switch(i){case 5126:return Ex;case 35664:return wx;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Ix;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return Fx;case 36294:return Ox;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Xx(i,e){i.uniform1fv(this.addr,e)}function qx(i,e){let t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Yx(i,e){let t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function Zx(i,e){let t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function $x(i,e){let t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jx(i,e){let t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kx(i,e){let t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jx(i,e){i.uniform1iv(this.addr,e)}function Qx(i,e){i.uniform2iv(this.addr,e)}function e1(i,e){i.uniform3iv(this.addr,e)}function t1(i,e){i.uniform4iv(this.addr,e)}function n1(i,e){i.uniform1uiv(this.addr,e)}function i1(i,e){i.uniform2uiv(this.addr,e)}function s1(i,e){i.uniform3uiv(this.addr,e)}function r1(i,e){i.uniform4uiv(this.addr,e)}function o1(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=dh:a=qd;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function a1(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zd,r[a])}function l1(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$d,r[a])}function c1(i,e,t){let n=this.cache,s=e.length,r=yc(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yd,r[a])}function u1(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return Zx;case 35674:return $x;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Qx;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}var ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wx(t.type)}},mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u1(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},hh=/(\w+)(\])?(\[|\.)?/g;function Ld(i,e){i.seq.push(e),i.map[e.id]=e}function h1(i,e,t){let n=i.name,s=n.length;for(hh.lastIndex=0;;){let r=hh.exec(n),a=hh.lastIndex,l=r[1],o=r[2]==="]",u=r[3];if(o&&(l=l|0),u===void 0||u==="["&&a+2===s){Ld(t,u===void 0?new ph(l,i,e):new mh(l,i,e));break}else{let h=t.map[l];h===void 0&&(h=new gh(l),Ld(t,h)),t=h}}}var kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);h1(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Dd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var f1=37297,d1=0;function p1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var Nd=new ut;function m1(i){yt._getMatrix(Nd,yt.workingColorSpace,i);let e=`mat3( ${Nd.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Eo:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ud(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+p1(i.getShaderSource(e),l)}else return r}function g1(i,e){let t=m1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var v1={[Ou]:"Linear",[Bu]:"Reinhard",[zu]:"Cineon",[ku]:"ACESFilmic",[Vu]:"AgX",[Xo]:"Neutral",[Hu]:"Custom"};function x1(i,e){let t=v1[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mc=new H;function _1(){yt.getLuminanceCoefficients(mc);let i=mc.x.toFixed(4),e=mc.y.toFixed(4),t=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function M1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function ia(i){return i!==""}function Fd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Od(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(S1,E1)}var T1=new Map;function E1(i,e){let t=ot[e];if(t===void 0){let n=T1.get(e);if(n!==void 0)t=ot[n],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vh(t)}var w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(i){return i.replace(w1,A1)}function A1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var R1={[Us]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function C1(i){return R1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P1={[gs]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE_UV"};function I1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":P1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var L1={[Os]:"ENVMAP_MODE_REFRACTION"};function D1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":L1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N1={[Fu]:"ENVMAP_BLENDING_MULTIPLY",[id]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};function U1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":N1[i.combine]||"ENVMAP_BLENDING_NONE"}function F1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function O1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,o=C1(t),u=I1(t),c=D1(t),h=U1(t),f=F1(t),p=y1(t),g=M1(r),v=s.createProgram(),m,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ia).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(m=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?ot.tonemapping_pars_fragment:"",t.toneMapping!==yi?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,g1("linearToOutputTexel",t.outputColorSpace),_1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=vh(a),a=Fd(a,t),a=Od(a,t),l=vh(l),l=Fd(l,t),l=Od(l,t),a=Bd(a),l=Bd(l),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=x+m+a,_=x+d+l,y=Dd(s,s.VERTEX_SHADER,b),S=Dd(s,s.FRAGMENT_SHADER,_);s.attachShader(v,y),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(v)||"",D=s.getShaderInfoLog(y)||"",w=s.getShaderInfoLog(S)||"",L=I.trim(),U=D.trim(),B=w.trim(),k=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,S);else{let V=Ud(s,y,"vertex"),G=Ud(s,S,"fragment");at("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+V+`
`+G)}else L!==""?st("WebGLProgram: Program Info Log:",L):(U===""||B==="")&&(z=!1);z&&(P.diagnostics={runnable:k,programLog:L,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(y),s.deleteShader(S),M=new kr(s,v),E=b1(s,v)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,f1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=S,this}var B1=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _h(e),t.set(e,n)),n}},_h=class{constructor(e){this.id=B1++,this.code=e,this.usedTimes=0}};function z1(i){return i===xs||i===jo||i===Qo}function k1(i,e,t,n,s,r){let a=new Co,l=new xh,o=new Set,u=[],c=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return o.add(M),M===0?"uv":`uv${M}`}function v(M,E,A,P,I,D){let w=P.fog,L=I.geometry,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,k=e.get(M.envMap||U,B),z=k&&k.mapping===qo?k.image.height:null,V=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&st("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let G=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=G!==void 0?G.length:0,re=0;L.morphAttributes.position!==void 0&&(re=1),L.morphAttributes.normal!==void 0&&(re=2),L.morphAttributes.color!==void 0&&(re=3);let Oe,ge,Ne,q;if(V){let ct=Li[V];Oe=ct.vertexShader,ge=ct.fragmentShader}else{Oe=M.vertexShader,ge=M.fragmentShader;let ct=l.getVertexShaderStage(M),St=l.getFragmentShaderStage(M);l.update(M,ct,St),Ne=ct.id,q=St.id}let Z=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,ve=I.isBatchedMesh===!0,Je=!!M.map,tt=!!M.matcap,lt=!!k,dt=!!M.aoMap,mt=!!M.lightMap,nt=!!M.bumpMap&&M.wireframe===!1,gt=!!M.normalMap,oe=!!M.displacementMap,_e=!!M.emissiveMap,me=!!M.metalnessMap,pe=!!M.roughnessMap,F=M.anisotropy>0,Pe=M.clearcoat>0,We=M.dispersion>0,O=M.retroreflectivity>0,T=M.iridescence>0,Y=M.sheen>0,N=M.transmission>0,ee=F&&!!M.anisotropyMap,xe=Pe&&!!M.clearcoatMap,Te=Pe&&!!M.clearcoatNormalMap,ne=Pe&&!!M.clearcoatRoughnessMap,Q=T&&!!M.iridescenceMap,ue=T&&!!M.iridescenceThicknessMap,be=Y&&!!M.sheenColorMap,he=Y&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ke=!!M.specularColorMap,He=!!M.specularIntensityMap,rt=N&&!!M.transmissionMap,W=N&&!!M.thicknessMap,we=!!M.gradientMap,ie=!!M.alphaMap,Re=M.alphaTest>0,Fe=!!M.alphaHash,fe=!!M.extensions,$e=yi;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&($e=i.toneMapping);let qe={shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:ge,defines:M.defines,customVertexShaderID:Ne,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ve,batchingColor:ve&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:tt,envMap:lt,envMapMode:lt&&k.mapping,envMapCubeUVHeight:z,aoMap:dt,lightMap:mt,bumpMap:nt,normalMap:gt,displacementMap:oe,emissiveMap:_e,normalMapObjectSpace:gt&&M.normalMapType===ad,normalMapTangentSpace:gt&&M.normalMapType===hc,packedNormalMap:gt&&M.normalMapType===hc&&z1(M.normalMap.format),metalnessMap:me,roughnessMap:pe,anisotropy:F,anisotropyMap:ee,clearcoat:Pe,clearcoatMap:xe,clearcoatNormalMap:Te,clearcoatRoughnessMap:ne,dispersion:We,retroreflection:O,iridescence:T,iridescenceMap:Q,iridescenceThicknessMap:ue,sheen:Y,sheenColorMap:be,sheenRoughnessMap:he,specularMap:Ee,specularColorMap:ke,specularIntensityMap:He,transmission:N,transmissionMap:rt,thicknessMap:W,gradientMap:we,opaque:M.transparent===!1&&M.blending===Ur&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:Re,alphaHash:Fe,combine:M.combine,mapUv:Je&&g(M.map.channel),aoMapUv:dt&&g(M.aoMap.channel),lightMapUv:mt&&g(M.lightMap.channel),bumpMapUv:nt&&g(M.bumpMap.channel),normalMapUv:gt&&g(M.normalMap.channel),displacementMapUv:oe&&g(M.displacementMap.channel),emissiveMapUv:_e&&g(M.emissiveMap.channel),metalnessMapUv:me&&g(M.metalnessMap.channel),roughnessMapUv:pe&&g(M.roughnessMap.channel),anisotropyMapUv:ee&&g(M.anisotropyMap.channel),clearcoatMapUv:xe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(M.sheenRoughnessMap.channel),specularMapUv:Ee&&g(M.specularMap.channel),specularColorMapUv:ke&&g(M.specularColorMap.channel),specularIntensityMapUv:He&&g(M.specularIntensityMap.channel),transmissionMapUv:rt&&g(M.transmissionMap.channel),thicknessMapUv:W&&g(M.thicknessMap.channel),alphaMapUv:ie&&g(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(gt||F),vertexNormals:!!L.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Je||ie),fog:!!w,useFog:M.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||L.attributes.normal===void 0&&gt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:re,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===Pt,decodeVideoTextureEmissive:_e&&M.emissiveMap.isVideoTexture===!0&&yt.getTransfer(M.emissiveMap.colorSpace)===Pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:fe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&M.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=o.has(1),qe.vertexUv2s=o.has(2),qe.vertexUv3s=o.has(3),o.clear(),qe}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)E.push(A),E.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(d(E,M),x(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function d(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function b(M){let E=p[M.type],A;if(E){let P=Li[E];A=ks.clone(P.uniforms)}else A=M.uniforms;return A}function _(M,E){let A=c.get(E);return A!==void 0?++A.usedTimes:(A=new O1(i,E,M,s),u.push(A),c.set(E,A)),A}function y(M){if(--M.usedTimes===0){let E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),c.delete(M.cacheKey),M.destroy()}}function S(M){l.remove(M)}function R(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:y,releaseShaderCache:S,programs:u,dispose:R}}function H1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function kd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function l(f,p,g,v,m,d){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},i[e]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=g,x.materialVariant=a(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=m,x.group=d),e++,x}function o(f,p,g,v,m,d,x){x.reversedDepth===!0&&(m=-m);let b=l(f,p,g,v,m,d);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function u(f,p,g,v,m,d){let x=l(f,p,g,v,m,d);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function c(f,p){t.length>1&&t.sort(f||V1),n.length>1&&n.sort(p||kd),s.length>1&&s.sort(p||kd)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:u,finish:h,sort:c}}function G1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hd,i.set(n,[a])):s>=r.length?(a=new Hd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function W1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new de};break;case"SpotLight":t={position:new H,direction:new H,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function X1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var q1=0;function Y1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z1(i){let e=new W1,t=X1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);let s=new H,r=new je,a=new je;function l(u){let c=0,h=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,x=0,b=0,_=0,y=0,S=0,R=0,M=0,E=0,A=0;u.sort(Y1);for(let I=0,D=u.length;I<D;I++){let w=u[I],L=w.color,U=w.intensity,B=w.distance,k=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===xs?k=w.shadow.map.texture:k=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)c+=L.r*U,h+=L.g*U,f+=L.b*U;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],U);A++}else if(w.isSunLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let V=w.shadow,G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=G,n.sunShadowMap[g]=k;let J=V.getViewportCount();for(let re=0;re<J;re++)n.sunShadowMatrix[v+re]=V.getMatrix(re),n.sunShadowCascade[v+re]=V._cascadeData[re];v+=J,g++}n.sun[p]=z,p++}else if(w.isDirectionalLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let V=w.shadow,G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=w.shadow.matrix,y++}n.directional[m]=z,m++}else if(w.isSpotLight){let z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(L).multiplyScalar(U),z.distance=B,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[x]=z;let V=w.shadow;if(w.map&&(n.spotLightMap[M]=w.map,M++,V.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[x]=V.matrix,w.castShadow){let G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=k,R++}x++}else if(w.isRectAreaLight){let z=e.get(w);z.color.copy(L).multiplyScalar(U),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[b]=z,b++}else if(w.isPointLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){let V=w.shadow,G=t.get(w);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,n.pointShadow[d]=G,n.pointShadowMap[d]=k,n.pointShadowMatrix[d]=w.shadow.matrix,S++}n.point[d]=z,d++}else if(w.isHemisphereLight){let z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(U),z.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[_]=z,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==x||P.rectAreaLength!==b||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==R||P.numSpotMaps!==M||P.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=m,n.spot.length=x,n.rectArea.length=b,n.point.length=d,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.sunLength=p,P.directionalLength=m,P.pointLength=d,P.spotLength=x,P.rectAreaLength=b,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=R,P.numSpotMaps=M,P.numLightProbes=A,n.version=q1++)}function o(u,c){let h=0,f=0,p=0,g=0,v=0,m=0,d=c.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){let _=u[x];if(_.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),h++}else if(_.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(_.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let y=n.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:o,state:n}}function Vd(i){let e=new Z1(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function l(f){n.push(f)}function o(f){s.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function $1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new Vd(i),e.set(s,[l])):r>=a.length?(l=new Vd(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var J1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
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
}`,j1=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Q1=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Gd=new je,na=new H,fh=new H;function e_(i,e,t){let n=new Rr,s=new Xe,r=new Xe,a=new Mt,l=new Ir,o=new fl,u={},c=t.maxTextureSize,h={[ms]:bn,[bn]:ms,[xn]:xn},f=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:J1,fragmentShader:K1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let d=this.type;this.render=function(S,R,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Bf&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let E=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Gn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=d!==this.type;D&&R.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(L=>L.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,L=S.length;w<L;w++){let U=S[w],B=U.shadow;if(B===void 0){st("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let k=B.getFrameExtents();s.multiply(k),r.copy(B.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/k.x),s.x=r.x*k.x,B.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/k.y),s.y=r.y*k.y,B.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=z,B.map===null||D===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Nr){if(U.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ot(s.x,s.y,{format:xs,type:an,minFilter:kt,magFilter:kt,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new cs(s.x,s.y,oi),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Ri,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=rn,B.map.depthTexture.magFilter=rn}else U.isPointLight?(B.map=new vc(s.x),B.map.depthTexture=new cl(s.x,Mi)):(B.map=new Ot(s.x,s.y),B.map.depthTexture=new cs(s.x,s.y,Mi)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Ri,this.type===Us?(B.map.depthTexture.compareFunction=z?dc:fc,B.map.depthTexture.minFilter=kt,B.map.depthTexture.magFilter=kt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=rn,B.map.depthTexture.magFilter=rn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let V=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();U.isPointLight!==!0&&B.updateMatrices(U,M);for(let G=0;G<V;G++){let J=B.getCamera(G);if(U.isPointLight){let re=B.camera,Oe=B.matrix,ge=U.distance||re.far;ge!==re.far&&(re.far=ge,re.updateProjectionMatrix()),na.setFromMatrixPosition(U.matrixWorld),re.position.copy(na),fh.copy(re.position),fh.add(j1[G]),re.up.copy(Q1[G]),re.lookAt(fh),re.updateMatrixWorld(),Oe.makeTranslation(-na.x,-na.y,-na.z),Gd.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Gd,re.coordinateSystem,re.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,G),i.clear();else{G===0&&(i.setRenderTarget(B.map),i.clear());let re=B.getViewport(G);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),I.viewport(a)}n=B.getFrustum(G),_(R,M,J,U,this.type)}B.isPointLightShadow!==!0&&this.type===Nr&&x(B,M),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,A,P)};function x(S,R){let M=e.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ot(s.x,s.y,{format:xs,type:an}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,M,f,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,M,p,v,null)}function b(S,R,M,E){let A=null,P=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)A=P;else if(A=M.isPointLight===!0?o:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let I=A.uuid,D=R.uuid,w=u[I];w===void 0&&(w={},u[I]=w);let L=w[D];L===void 0&&(L=A.clone(),w[D]=L,R.addEventListener("dispose",y)),A=L}if(A.visible=R.visible,A.wireframe=R.wireframe,E===Nr?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:h[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=i.properties.get(A);I.light=M}return A}function _(S,R,M,E,A){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Nr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let D=e.update(S),w=S.material;if(Array.isArray(w)){let L=D.groups;for(let U=0,B=L.length;U<B;U++){let k=L[U],z=w[k.materialIndex];if(z&&z.visible){let V=b(S,z,E,A);S.onBeforeShadow(i,S,R,M,D,V,k),i.renderBufferDirect(M,null,D,V,S,k),S.onAfterShadow(i,S,R,M,D,V,k)}}}else if(w.visible){let L=b(S,w,E,A);S.onBeforeShadow(i,S,R,M,D,L,null),i.renderBufferDirect(M,null,D,L,S,null),S.onAfterShadow(i,S,R,M,D,L,null)}}let I=S.children;for(let D=0,w=I.length;D<w;D++)_(I[D],R,M,E,A)}function y(S){S.target.removeEventListener("dispose",y);for(let M in u){let E=u[M],A=S.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function t_(i,e){function t(){let W=!1,we=new Mt,ie=null,Re=new Mt(0,0,0,0);return{setMask:function(Fe){ie!==Fe&&!W&&(i.colorMask(Fe,Fe,Fe,Fe),ie=Fe)},setLocked:function(Fe){W=Fe},setClear:function(Fe,fe,$e,qe,ct){ct===!0&&(Fe*=qe,fe*=qe,$e*=qe),we.set(Fe,fe,$e,qe),Re.equals(we)===!1&&(i.clearColor(Fe,fe,$e,qe),Re.copy(we))},reset:function(){W=!1,ie=null,Re.set(-1,0,0,0)}}}function n(){let W=!1,we=!1,ie=null,Re=null,Fe=null;return{setReversed:function(fe){if(we!==fe){let $e=e.get("EXT_clip_control");fe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),we=fe;let qe=Fe;Fe=null,this.setClear(qe)}},getReversed:function(){return we},setTest:function(fe){fe?Z(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(fe){ie!==fe&&!W&&(i.depthMask(fe),ie=fe)},setFunc:function(fe){if(we&&(fe=_d[fe]),Re!==fe){switch(fe){case Za:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case el:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=fe}},setLocked:function(fe){W=fe},setClear:function(fe){Fe!==fe&&(Fe=fe,we&&(fe=1-fe),i.clearDepth(fe))},reset:function(){W=!1,ie=null,Re=null,Fe=null,we=!1}}}function s(){let W=!1,we=null,ie=null,Re=null,Fe=null,fe=null,$e=null,qe=null,ct=null;return{setTest:function(St){W||(St?Z(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(St){we!==St&&!W&&(i.stencilMask(St),we=St)},setFunc:function(St,On,qn){(ie!==St||Re!==On||Fe!==qn)&&(i.stencilFunc(St,On,qn),ie=St,Re=On,Fe=qn)},setOp:function(St,On,qn){(fe!==St||$e!==On||qe!==qn)&&(i.stencilOp(St,On,qn),fe=St,$e=On,qe=qn)},setLocked:function(St){W=St},setClear:function(St){ct!==St&&(i.clearStencil(St),ct=St)},reset:function(){W=!1,we=null,ie=null,Re=null,Fe=null,fe=null,$e=null,qe=null,ct=null}}}let r=new t,a=new n,l=new s,o=new WeakMap,u=new WeakMap,c={},h={},f={},p=new WeakMap,g=[],v=null,m=!1,d=null,x=null,b=null,_=null,y=null,S=null,R=null,M=new de(0,0,0),E=0,A=!1,P=null,I=null,D=null,w=null,L=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,k=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=k>=2);let V=null,G={},J=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Oe=new Mt().fromArray(J),ge=new Mt().fromArray(re);function Ne(W,we,ie,Re){let Fe=new Uint8Array(4),fe=i.createTexture();i.bindTexture(W,fe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<ie;$e++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(we+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return fe}let q={};q[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Mr),nt(!1),gt(Iu),Z(i.CULL_FACE),dt(Gn);function Z(W){c[W]!==!0&&(i.enable(W),c[W]=!0)}function Se(W){c[W]!==!1&&(i.disable(W),c[W]=!1)}function Ie(W,we){return f[W]!==we?(i.bindFramebuffer(W,we),f[W]=we,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=we),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=we),!0):!1}function ve(W,we){let ie=g,Re=!1;if(W){ie=p.get(we),ie===void 0&&(ie=[],p.set(we,ie));let Fe=W.textures;if(ie.length!==Fe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,$e=Fe.length;fe<$e;fe++)ie[fe]=i.COLOR_ATTACHMENT0+fe;ie.length=Fe.length,Re=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ie)}function Je(W){return v!==W?(i.useProgram(W),v=W,!0):!1}let tt={[Fs]:i.FUNC_ADD,[kf]:i.FUNC_SUBTRACT,[Hf]:i.FUNC_REVERSE_SUBTRACT};tt[Vf]=i.MIN,tt[Gf]=i.MAX;let lt={[Wf]:i.ZERO,[Xf]:i.ONE,[qf]:i.SRC_COLOR,[Nu]:i.SRC_ALPHA,[jf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[Uu]:i.ONE_MINUS_SRC_ALPHA,[Kf]:i.ONE_MINUS_DST_COLOR,[$f]:i.ONE_MINUS_DST_ALPHA,[Qf]:i.CONSTANT_COLOR,[ed]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(W,we,ie,Re,Fe,fe,$e,qe,ct,St){if(W===Gn){m===!0&&(Se(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),W!==zf){if(W!==d||St!==A){if((x!==Fs||y!==Fs)&&(i.blendEquation(i.FUNC_ADD),x=Fs,y=Fs),St)switch(W){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFunc(i.ONE,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Du:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:at("WebGLState: Invalid blending: ",W);break}else switch(W){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lu:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",W);break}b=null,_=null,S=null,R=null,M.set(0,0,0),E=0,d=W,A=St}return}Fe=Fe||we,fe=fe||ie,$e=$e||Re,(we!==x||Fe!==y)&&(i.blendEquationSeparate(tt[we],tt[Fe]),x=we,y=Fe),(ie!==b||Re!==_||fe!==S||$e!==R)&&(i.blendFuncSeparate(lt[ie],lt[Re],lt[fe],lt[$e]),b=ie,_=Re,S=fe,R=$e),(qe.equals(M)===!1||ct!==E)&&(i.blendColor(qe.r,qe.g,qe.b,ct),M.copy(qe),E=ct),d=W,A=!1}function mt(W,we){W.side===xn?Se(i.CULL_FACE):Z(i.CULL_FACE);let ie=W.side===bn;we&&(ie=!ie),nt(ie),W.blending===Ur&&W.transparent===!1?dt(Gn):dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Re=W.stencilWrite;l.setTest(Re),Re&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),_e(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(W){P!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),P=W)}function gt(W){W!==Ff?(Z(i.CULL_FACE),W!==I&&(W===Iu?i.cullFace(i.BACK):W===Of?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),I=W}function oe(W){W!==D&&(B&&i.lineWidth(W),D=W)}function _e(W,we,ie){W?(Z(i.POLYGON_OFFSET_FILL),(w!==we||L!==ie)&&(w=we,L=ie,a.getReversed()&&(we=-we),i.polygonOffset(we,ie))):Se(i.POLYGON_OFFSET_FILL)}function me(W){W?Z(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function pe(W){W===void 0&&(W=i.TEXTURE0+U-1),V!==W&&(i.activeTexture(W),V=W)}function F(W,we,ie){ie===void 0&&(V===null?ie=i.TEXTURE0+U-1:ie=V);let Re=G[ie];Re===void 0&&(Re={type:void 0,texture:void 0},G[ie]=Re),(Re.type!==W||Re.texture!==we)&&(V!==ie&&(i.activeTexture(ie),V=ie),i.bindTexture(W,we||q[W]),Re.type=W,Re.texture=we)}function Pe(){let W=G[V];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(W){at("WebGLState:",W)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(W){at("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){at("WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){at("WebGLState:",W)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(W){at("WebGLState:",W)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(W){at("WebGLState:",W)}}function xe(){try{i.texStorage2D(...arguments)}catch(W){at("WebGLState:",W)}}function Te(){try{i.texStorage3D(...arguments)}catch(W){at("WebGLState:",W)}}function ne(){try{i.texImage2D(...arguments)}catch(W){at("WebGLState:",W)}}function Q(){try{i.texImage3D(...arguments)}catch(W){at("WebGLState:",W)}}function ue(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function be(W,we){h[W]!==we&&(i.pixelStorei(W,we),h[W]=we)}function he(W){Oe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Oe.copy(W))}function Ee(W){ge.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ge.copy(W))}function ke(W,we){let ie=u.get(we);ie===void 0&&(ie=new WeakMap,u.set(we,ie));let Re=ie.get(W);Re===void 0&&(Re=i.getUniformBlockIndex(we,W.name),ie.set(W,Re))}function He(W,we){let Re=u.get(we).get(W);o.get(we)!==Re&&(i.uniformBlockBinding(we,Re,W.__bindingPointIndex),o.set(we,Re))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},h={},V=null,G={},f={},p=new WeakMap,g=[],v=null,m=!1,d=null,x=null,b=null,_=null,y=null,S=null,R=null,M=new de(0,0,0),E=0,A=!1,P=null,I=null,D=null,w=null,L=null,Oe.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Z,disable:Se,bindFramebuffer:Ie,drawBuffers:ve,useProgram:Je,setBlending:dt,setMaterial:mt,setFlipSided:nt,setCullFace:gt,setLineWidth:oe,setPolygonOffset:_e,setScissorTest:me,activeTexture:pe,bindTexture:F,unbindTexture:Pe,compressedTexImage2D:We,compressedTexImage3D:O,texImage2D:ne,texImage3D:Q,pixelStorei:be,getParameter:ue,updateUBOMapping:ke,uniformBlockBinding:He,texStorage2D:xe,texStorage3D:Te,texSubImage2D:T,texSubImage3D:Y,compressedTexSubImage2D:N,compressedTexSubImage3D:ee,scissor:he,viewport:Ee,reset:rt}}function n_(i,e,t,n,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xe,c=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(O,T){return g?new OffscreenCanvas(O,T):wo("canvas")}function m(O,T,Y){let N=1,ee=We(O);if((ee.width>Y||ee.height>Y)&&(N=Y/Math.max(ee.width,ee.height)),N<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let xe=Math.floor(N*ee.width),Te=Math.floor(N*ee.height);f===void 0&&(f=v(xe,Te));let ne=T?v(xe,Te):f;return ne.width=xe,ne.height=Te,ne.getContext("2d").drawImage(O,0,0,xe,Te),st("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+xe+"x"+Te+")."),ne}else return"data"in O&&st("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),O;return O}function d(O){return O.generateMipmaps}function x(O){i.generateMipmap(O)}function b(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(O,T,Y,N,ee,xe=!1){if(O!==null){if(i[O]!==void 0)return i[O];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Te;N&&(Te=e.get("EXT_texture_norm16"),Te||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=T;if(T===i.RED&&(Y===i.FLOAT&&(ne=i.R32F),Y===i.HALF_FLOAT&&(ne=i.R16F),Y===i.UNSIGNED_BYTE&&(ne=i.R8),Y===i.UNSIGNED_SHORT&&Te&&(ne=Te.R16_EXT),Y===i.SHORT&&Te&&(ne=Te.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.R8UI),Y===i.UNSIGNED_SHORT&&(ne=i.R16UI),Y===i.UNSIGNED_INT&&(ne=i.R32UI),Y===i.BYTE&&(ne=i.R8I),Y===i.SHORT&&(ne=i.R16I),Y===i.INT&&(ne=i.R32I)),T===i.RG&&(Y===i.FLOAT&&(ne=i.RG32F),Y===i.HALF_FLOAT&&(ne=i.RG16F),Y===i.UNSIGNED_BYTE&&(ne=i.RG8),Y===i.UNSIGNED_SHORT&&Te&&(ne=Te.RG16_EXT),Y===i.SHORT&&Te&&(ne=Te.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ne=i.RG16UI),Y===i.UNSIGNED_INT&&(ne=i.RG32UI),Y===i.BYTE&&(ne=i.RG8I),Y===i.SHORT&&(ne=i.RG16I),Y===i.INT&&(ne=i.RG32I)),T===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),Y===i.UNSIGNED_INT&&(ne=i.RGB32UI),Y===i.BYTE&&(ne=i.RGB8I),Y===i.SHORT&&(ne=i.RGB16I),Y===i.INT&&(ne=i.RGB32I)),T===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ne=i.RGBA32UI),Y===i.BYTE&&(ne=i.RGBA8I),Y===i.SHORT&&(ne=i.RGBA16I),Y===i.INT&&(ne=i.RGBA32I)),T===i.RGB&&(Y===i.UNSIGNED_SHORT&&Te&&(ne=Te.RGB16_EXT),Y===i.SHORT&&Te&&(ne=Te.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),T===i.RGBA){let Q=xe?Eo:yt.getTransfer(ee);Y===i.FLOAT&&(ne=i.RGBA32F),Y===i.HALF_FLOAT&&(ne=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ne=Q===Pt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Te&&(ne=Te.RGBA16_EXT),Y===i.SHORT&&Te&&(ne=Te.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function y(O,T){let Y;return O?T===null||T===Mi||T===Or?Y=i.DEPTH24_STENCIL8:T===oi?Y=i.DEPTH32F_STENCIL8:T===Fr&&(Y=i.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Mi||T===Or?Y=i.DEPTH_COMPONENT24:T===oi?Y=i.DEPTH_COMPONENT32F:T===Fr&&(Y=i.DEPTH_COMPONENT16),Y}function S(O,T){return d(O)===!0||O.isFramebufferTexture&&O.minFilter!==rn&&O.minFilter!==kt?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function R(O){let T=O.target;T.removeEventListener("dispose",R),E(T),T.isVideoTexture&&c.delete(T),T.isHTMLTexture&&h.delete(T)}function M(O){let T=O.target;T.removeEventListener("dispose",M),P(T)}function E(O){let T=n.get(O);if(T.__webglInit===void 0)return;let Y=O.source,N=p.get(Y);if(N){let ee=N[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(O),Object.keys(N).length===0&&p.delete(Y)}n.remove(O)}function A(O){let T=n.get(O);i.deleteTexture(T.__webglTexture);let Y=O.source,N=p.get(Y);delete N[T.__cacheKey],a.memory.textures--}function P(O){let T=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(T.__webglFramebuffer[N]))for(let ee=0;ee<T.__webglFramebuffer[N].length;ee++)i.deleteFramebuffer(T.__webglFramebuffer[N][ee]);else i.deleteFramebuffer(T.__webglFramebuffer[N]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[N])}else{if(Array.isArray(T.__webglFramebuffer))for(let N=0;N<T.__webglFramebuffer.length;N++)i.deleteFramebuffer(T.__webglFramebuffer[N]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let N=0;N<T.__webglColorRenderbuffer.length;N++)T.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[N]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Y=O.textures;for(let N=0,ee=Y.length;N<ee;N++){let xe=n.get(Y[N]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(Y[N])}n.remove(O)}let I=0;function D(){I=0}function w(){return I}function L(O){I=O}function U(){let O=I;return O>=s.maxTextures&&st("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,O}function B(O){let T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function k(O,T){let Y=n.get(O);if(O.isVideoTexture&&F(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){let N=O.image;if(N===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(Y,O,T);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+T)}function z(O,T){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){Se(Y,O,T);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+T)}function V(O,T){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){Se(Y,O,T);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+T)}function G(O,T){let Y=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){Ie(Y,O,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+T)}let J={[br]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},re={[rn]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[Yo]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},Oe={[cd]:i.NEVER,[pd]:i.ALWAYS,[ud]:i.LESS,[fc]:i.LEQUAL,[hd]:i.EQUAL,[dc]:i.GEQUAL,[fd]:i.GREATER,[dd]:i.NOTEQUAL};function ge(O,T){if(T.type===oi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kt||T.magFilter===Rl||T.magFilter===Yo||T.magFilter===Wn||T.minFilter===kt||T.minFilter===Rl||T.minFilter===Yo||T.minFilter===Wn)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,J[T.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,J[T.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,J[T.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,re[T.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===rn||T.minFilter!==Yo&&T.minFilter!==Wn||T.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(O,T){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",R));let N=T.source,ee=p.get(N);ee===void 0&&(ee={},p.set(N,ee));let xe=B(T);if(xe!==O.__cacheKey){ee[xe]===void 0&&(ee[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ee[xe].usedTimes++;let Te=ee[O.__cacheKey];Te!==void 0&&(ee[O.__cacheKey].usedTimes--,Te.usedTimes===0&&A(T)),O.__cacheKey=xe,O.__webglTexture=ee[xe].texture}return Y}function q(O,T,Y){return Math.floor(Math.floor(O/Y)/T)}function Z(O,T,Y,N){let xe=O.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Y,N,T.data);else{xe.sort((be,he)=>be.start-he.start);let Te=0;for(let be=1;be<xe.length;be++){let he=xe[Te],Ee=xe[be],ke=he.start+he.count,He=q(Ee.start,T.width,4),rt=q(he.start,T.width,4);Ee.start<=ke+1&&He===rt&&q(Ee.start+Ee.count-1,T.width,4)===He?he.count=Math.max(he.count,Ee.start+Ee.count-he.start):(++Te,xe[Te]=Ee)}xe.length=Te+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let be=0,he=xe.length;be<he;be++){let Ee=xe[be],ke=Math.floor(Ee.start/4),He=Math.ceil(Ee.count/4),rt=ke%T.width,W=Math.floor(ke/T.width),we=He,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,rt,W,we,ie,Y,N,T.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function Se(O,T,Y){let N=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(N=i.TEXTURE_3D);let ee=Ne(O,T),xe=T.source;t.bindTexture(N,O.__webglTexture,i.TEXTURE0+Y);let Te=n.get(xe);if(xe.version!==Te.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ie=yt.getPrimaries(yt.workingColorSpace),Re=T.colorSpace===bi?null:yt.getPrimaries(T.colorSpace),Fe=T.colorSpace===bi||ie===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let Q=m(T.image,!1,s.maxTextureSize);Q=Pe(T,Q);let ue=r.convert(T.format,T.colorSpace),be=r.convert(T.type),he=_(T.internalFormat,ue,be,T.normalized,T.colorSpace,T.isVideoTexture);ge(N,T);let Ee,ke=T.mipmaps,He=T.isVideoTexture!==!0,rt=Te.__version===void 0||ee===!0,W=xe.dataReady,we=S(T,Q);if(T.isDepthTexture)he=y(T.format===vs,T.type),rt&&(He?t.texStorage2D(i.TEXTURE_2D,1,he,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,ue,be,null));else if(T.isDataTexture)if(ke.length>0){He&&rt&&t.texStorage2D(i.TEXTURE_2D,we,he,ke[0].width,ke[0].height);for(let ie=0,Re=ke.length;ie<Re;ie++)Ee=ke[ie],He?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ee.width,Ee.height,ue,be,Ee.data):t.texImage2D(i.TEXTURE_2D,ie,he,Ee.width,Ee.height,0,ue,be,Ee.data);T.generateMipmaps=!1}else He?(rt&&t.texStorage2D(i.TEXTURE_2D,we,he,Q.width,Q.height),W&&Z(T,Q,ue,be)):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,ue,be,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){He&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,he,ke[0].width,ke[0].height,Q.depth);for(let ie=0,Re=ke.length;ie<Re;ie++)if(Ee=ke[ie],T.format!==Xn)if(ue!==null)if(He){if(W)if(T.layerUpdates.size>0){let Fe=th(Ee.width,Ee.height,T.format,T.type);for(let fe of T.layerUpdates){let $e=Ee.data.subarray(fe*Fe/Ee.data.BYTES_PER_ELEMENT,(fe+1)*Fe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,fe,Ee.width,Ee.height,1,ue,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ee.width,Ee.height,Q.depth,ue,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,he,Ee.width,Ee.height,Q.depth,0,Ee.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ee.width,Ee.height,Q.depth,ue,be,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,he,Ee.width,Ee.height,Q.depth,0,ue,be,Ee.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{He&&rt&&t.texStorage2D(i.TEXTURE_2D,we,he,ke[0].width,ke[0].height);for(let ie=0,Re=ke.length;ie<Re;ie++)Ee=ke[ie],T.format!==Xn?ue!==null?He?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Ee.width,Ee.height,ue,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,he,Ee.width,Ee.height,0,Ee.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ee.width,Ee.height,ue,be,Ee.data):t.texImage2D(i.TEXTURE_2D,ie,he,Ee.width,Ee.height,0,ue,be,Ee.data)}else if(T.isDataArrayTexture)if(He){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,he,Q.width,Q.height,Q.depth),W)if(T.layerUpdates.size>0){let ie=th(Q.width,Q.height,T.format,T.type);for(let Re of T.layerUpdates){let Fe=Q.data.subarray(Re*ie/Q.data.BYTES_PER_ELEMENT,(Re+1)*ie/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,Q.width,Q.height,1,ue,be,Fe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,be,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,Q.width,Q.height,Q.depth,0,ue,be,Q.data);else if(T.isData3DTexture)He?(rt&&t.texStorage3D(i.TEXTURE_3D,we,he,Q.width,Q.height,Q.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,be,Q.data)):t.texImage3D(i.TEXTURE_3D,0,he,Q.width,Q.height,Q.depth,0,ue,be,Q.data);else if(T.isFramebufferTexture){if(rt)if(He)t.texStorage2D(i.TEXTURE_2D,we,he,Q.width,Q.height);else{let ie=Q.width,Re=Q.height;for(let Fe=0;Fe<we;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,he,ie,Re,0,ue,be,null),ie>>=1,Re>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Q.parentNode!==ie){ie.appendChild(Q),h.add(T),ie.onpaint=Re=>{let Fe=Re.changedElements;for(let fe of h)Fe.includes(fe.image)&&(fe.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Fe=i.RGBA,fe=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,fe,$e,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(He&&rt){let ie=We(ke[0]);t.texStorage2D(i.TEXTURE_2D,we,he,ie.width,ie.height)}for(let ie=0,Re=ke.length;ie<Re;ie++)Ee=ke[ie],He?W&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ue,be,Ee):t.texImage2D(i.TEXTURE_2D,ie,he,ue,be,Ee);T.generateMipmaps=!1}else if(He){if(rt){let ie=We(Q);t.texStorage2D(i.TEXTURE_2D,we,he,ie.width,ie.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,be,Q)}else t.texImage2D(i.TEXTURE_2D,0,he,ue,be,Q);d(T)&&x(N),Te.__version=xe.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ie(O,T,Y){if(T.image.length!==6)return;let N=Ne(O,T),ee=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Y);let xe=n.get(ee);if(ee.version!==xe.__version||N===!0){t.activeTexture(i.TEXTURE0+Y);let Te=yt.getPrimaries(yt.workingColorSpace),ne=T.colorSpace===bi?null:yt.getPrimaries(T.colorSpace),Q=T.colorSpace===bi||Te===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ue=T.isCompressedTexture||T.image[0].isCompressedTexture,be=T.image[0]&&T.image[0].isDataTexture,he=[];for(let fe=0;fe<6;fe++)!ue&&!be?he[fe]=m(T.image[fe],!0,s.maxCubemapSize):he[fe]=be?T.image[fe].image:T.image[fe],he[fe]=Pe(T,he[fe]);let Ee=he[0],ke=r.convert(T.format,T.colorSpace),He=r.convert(T.type),rt=_(T.internalFormat,ke,He,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,we=xe.__version===void 0||N===!0,ie=ee.dataReady,Re=S(T,Ee);ge(i.TEXTURE_CUBE_MAP,T);let Fe;if(ue){W&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,rt,Ee.width,Ee.height);for(let fe=0;fe<6;fe++){Fe=he[fe].mipmaps;for(let $e=0;$e<Fe.length;$e++){let qe=Fe[$e];T.format!==Xn?ke!==null?W?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e,0,0,qe.width,qe.height,ke,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e,rt,qe.width,qe.height,0,qe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e,0,0,qe.width,qe.height,ke,He,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e,rt,qe.width,qe.height,0,ke,He,qe.data)}}}else{if(Fe=T.mipmaps,W&&we){Fe.length>0&&Re++;let fe=We(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,rt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(be){W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,he[fe].width,he[fe].height,ke,He,he[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,rt,he[fe].width,he[fe].height,0,ke,He,he[fe].data);for(let $e=0;$e<Fe.length;$e++){let ct=Fe[$e].image[fe].image;W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e+1,0,0,ct.width,ct.height,ke,He,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e+1,rt,ct.width,ct.height,0,ke,He,ct.data)}}else{W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke,He,he[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,rt,ke,He,he[fe]);for(let $e=0;$e<Fe.length;$e++){let qe=Fe[$e];W?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e+1,0,0,ke,He,qe.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,$e+1,rt,ke,He,qe.image[fe])}}}d(T)&&x(i.TEXTURE_CUBE_MAP),xe.__version=ee.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ve(O,T,Y,N,ee,xe){let Te=r.convert(Y.format,Y.colorSpace),ne=r.convert(Y.type),Q=_(Y.internalFormat,Te,ne,Y.normalized,Y.colorSpace),ue=n.get(T),be=n.get(Y);if(be.__renderTarget=T,!ue.__hasExternalTextures){let he=Math.max(1,T.width>>xe),Ee=Math.max(1,T.height>>xe);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,xe,Q,he,Ee,T.depth,0,Te,ne,null):t.texImage2D(ee,xe,Q,he,Ee,0,Te,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),pe(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,ee,be.__webglTexture,0,me(T)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,ee,be.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(O,T,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,O),T.depthBuffer){let N=T.depthTexture,ee=N&&N.isDepthTexture?N.type:null,xe=y(T.stencilBuffer,ee),Te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(T),xe,T.width,T.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(T),xe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,O)}else{let N=T.textures;for(let ee=0;ee<N.length;ee++){let xe=N[ee],Te=r.convert(xe.format,xe.colorSpace),ne=r.convert(xe.type),Q=_(xe.internalFormat,Te,ne,xe.normalized,xe.colorSpace);pe(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(T),Q,T.width,T.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(T),Q,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Q,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(O,T,Y){let N=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(T.depthTexture);if(ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),N){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,T.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ge(i.TEXTURE_CUBE_MAP,T.depthTexture);let ue=r.convert(T.depthTexture.format),be=r.convert(T.depthTexture.type),he;T.depthTexture.format===Ri?he=i.DEPTH_COMPONENT24:T.depthTexture.format===vs&&(he=i.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,he,T.width,T.height,0,ue,be,null)}}else k(T.depthTexture,0);let xe=ee.__webglTexture,Te=me(T),ne=N?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,Q=T.depthTexture.format===vs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ri)pe(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ne,xe,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,Q,ne,xe,0);else if(T.depthTexture.format===vs)pe(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ne,xe,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,Q,ne,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(O){let T=n.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){let N=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),N){let ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,N.removeEventListener("dispose",ee)};N.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=N}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let N=0;N<6;N++)tt(T.__webglFramebuffer[N],O,N);else{let N=O.texture.mipmaps;N&&N.length>0?tt(T.__webglFramebuffer[0],O,0):tt(T.__webglFramebuffer,O,0)}else if(Y){T.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[N]),T.__webglDepthbuffer[N]===void 0)T.__webglDepthbuffer[N]=i.createRenderbuffer(),Je(T.__webglDepthbuffer[N],O,!1);else{let ee=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,xe)}}else{let N=O.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Je(T.__webglDepthbuffer,O,!1);else{let ee=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(O,T,Y){let N=n.get(O);T!==void 0&&ve(N.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&lt(O)}function mt(O){let T=O.texture,Y=n.get(O),N=n.get(T);O.addEventListener("dispose",M);let ee=O.textures,xe=O.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=T.version,a.memory.textures++),xe){Y.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[ne]=[];for(let Q=0;Q<T.mipmaps.length;Q++)Y.__webglFramebuffer[ne][Q]=i.createFramebuffer()}else Y.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ne=0;ne<T.mipmaps.length;ne++)Y.__webglFramebuffer[ne]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ne=0,Q=ee.length;ne<Q;ne++){let ue=n.get(ee[ne]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(O.samples>0&&pe(O)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){let Q=ee[ne];Y.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ne]);let ue=r.convert(Q.format,Q.colorSpace),be=r.convert(Q.type),he=_(Q.internalFormat,ue,be,Q.normalized,Q.colorSpace,O.isXRRenderTarget===!0),Ee=me(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,he,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(Y.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),ge(i.TEXTURE_CUBE_MAP,T);for(let ne=0;ne<6;ne++)if(T.mipmaps&&T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)ve(Y.__webglFramebuffer[ne][Q],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Q);else ve(Y.__webglFramebuffer[ne],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ne=0,Q=ee.length;ne<Q;ne++){let ue=ee[ne],be=n.get(ue),he=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(he=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,be.__webglTexture),ge(he,ue),ve(Y.__webglFramebuffer,O,ue,i.COLOR_ATTACHMENT0+ne,he,0),d(ue)&&x(he)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ne=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),ge(ne,T),T.mipmaps&&T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)ve(Y.__webglFramebuffer[Q],O,T,i.COLOR_ATTACHMENT0,ne,Q);else ve(Y.__webglFramebuffer,O,T,i.COLOR_ATTACHMENT0,ne,0);d(T)&&x(ne),t.unbindTexture()}O.depthBuffer&&lt(O)}function nt(O){let T=O.textures;for(let Y=0,N=T.length;Y<N;Y++){let ee=T[Y];if(d(ee)){let xe=b(O),Te=n.get(ee).__webglTexture;t.bindTexture(xe,Te),x(xe),t.unbindTexture()}}}let gt=[],oe=[];function _e(O){if(O.samples>0){if(pe(O)===!1){let T=O.textures,Y=O.width,N=O.height,ee=i.COLOR_BUFFER_BIT,xe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(O),ne=T.length>1;if(ne)for(let ue=0;ue<T.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let Q=O.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ue=0;ue<T.length;ue++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);let be=n.get(T[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,Y,N,0,0,Y,N,ee,i.NEAREST),o===!0&&(gt.length=0,oe.length=0,gt.push(i.COLOR_ATTACHMENT0+ue),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(gt.push(xe),oe.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ue=0;ue<T.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);let be=n.get(T[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&o){let T=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function me(O){return Math.min(s.maxSamples,O.samples)}function pe(O){let T=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function F(O){let T=a.render.frame;c.get(O)!==T&&(c.set(O,T),O.update())}function Pe(O,T){let Y=O.colorSpace,N=O.format,ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==To&&Y!==bi&&(yt.getTransfer(Y)===Pt?(N!==Xn||ee!==Rn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",Y)),T}function We(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(u.width=O.naturalWidth||O.width,u.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(u.width=O.displayWidth,u.height=O.displayHeight):(u.width=O.width,u.height=O.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.getTextureUnits=w,this.setTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=dt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function i_(i,e){function t(n,s=bi){let r,a=yt.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wu)return i.BYTE;if(n===Xu)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===Zu)return i.ALPHA;if(n===$u)return i.RGB;if(n===Xn)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===Bs)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===xs)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===Zo||n===$o||n===Jo||n===Ko)if(a===Pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Fl||n===Ol||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===jo||n===Wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===kl)return a===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vl)return r.COMPRESSED_R11_EAC;if(n===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jo)return r.COMPRESSED_RG11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ql)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return a===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rc||n===oc||n===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rc)return a===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===cc||n===Qo||n===uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
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

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pt({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Xt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Ci{constructor(e,t){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,u=null,c=null,h=null,f=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new yh,d={},x=t.getContextAttributes(),b=null,_=null,y=[],S=[],R=new Xe,M=null,E=null,A=new Mn;A.viewport=new Mt;let P=new Mn;P.viewport=new Mt;let I=[A,P],D=new Tl,w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=y[q];return Z===void 0&&(Z=new wr,y[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=y[q];return Z===void 0&&(Z=new wr,y[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=y[q];return Z===void 0&&(Z=new wr,y[q]=Z),Z.getHandSpace()};function U(q){let Z=S.indexOf(q.inputSource);if(Z===-1)return;let Se=y[Z];Se!==void 0&&(Se.update(q.inputSource,q.frame,u||a),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",k);for(let q=0;q<y.length;q++){let Z=S[q];Z!==null&&(S[q]=null,y[q].disconnect(Z))}w=null,L=null,m.reset();for(let q in d)delete d[q];if(e.setRenderTarget(b),p=null,f=null,h=null,s=null,_=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),E!==null){let q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?vs:Ri,Ie=x.stencil?Or:Mi);let Je={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ot(f.textureWidth,f.textureHeight,{format:Xn,type:Rn,depthTexture:new cs(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ot(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),u=null,a=await s.requestReferenceSpace(l),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(q){for(let Z=0;Z<q.removed.length;Z++){let Se=q.removed[Z],Ie=S.indexOf(Se);Ie>=0&&(S[Ie]=null,y[Ie].disconnect(Se))}for(let Z=0;Z<q.added.length;Z++){let Se=q.added[Z],Ie=S.indexOf(Se);if(Ie===-1){for(let Je=0;Je<y.length;Je++)if(Je>=S.length){S.push(Se),Ie=Je;break}else if(S[Je]===null){S[Je]=Se,Ie=Je;break}if(Ie===-1)break}let ve=y[Ie];ve&&ve.connect(Se)}}let z=new H,V=new H;function G(q,Z,Se){z.setFromMatrixPosition(Z.matrixWorld),V.setFromMatrixPosition(Se.matrixWorld);let Ie=z.distanceTo(V),ve=Z.projectionMatrix.elements,Je=Se.projectionMatrix.elements,tt=ve[14]/(ve[10]-1),lt=ve[14]/(ve[10]+1),dt=(ve[9]+1)/ve[5],mt=(ve[9]-1)/ve[5],nt=(ve[8]-1)/ve[0],gt=(Je[8]+1)/Je[0],oe=tt*nt,_e=tt*gt,me=Ie/(-nt+gt),pe=me*-nt;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pe),q.translateZ(me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ve[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let F=tt+me,Pe=lt+me,We=oe-pe,O=_e+(Ie-pe),T=dt*lt/Pe*F,Y=mt*lt/Pe*F;q.projectionMatrix.makePerspective(We,O,T,Y,F,Pe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,Se=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),D.near=P.near=A.near=Z,D.far=P.far=A.far=Se,(w!==D.near||L!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),w=D.near,L=D.far),D.layers.mask=q.layers.mask|6,A.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Ie=q.parent,ve=D.cameras;J(D,Ie);for(let Je=0;Je<ve.length;Je++)J(ve[Je],Ie);ve.length===2?G(D,A,P):D.projectionMatrix.copy(A.projectionMatrix),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),re(q,D,Ie)};function re(q,Z,Se){Se===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ao*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return o},this.setFoveation=function(q){o=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return d[q]};let Oe=null;function ge(q,Z){if(c=Z.getViewerPose(u||a),g=Z,c!==null){let Se=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Ie=!1;Se.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let lt=0;lt<Se.length;lt++){let dt=Se[lt],mt=null;if(p!==null)mt=p.getViewport(dt);else{let gt=h.getViewSubImage(f,dt);mt=gt.viewport,lt===0&&(e.setRenderTargetTextures(_,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(_))}let nt=I[lt];nt===void 0&&(nt=new Mn,nt.layers.enable(lt),nt.viewport=new Mt,I[lt]=nt),nt.matrix.fromArray(dt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(dt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(mt.x,mt.y,mt.width,mt.height),lt===0&&(D.matrix.copy(nt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push(nt)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let lt=h.getDepthInformation(Se[0]);lt&&lt.isValid&&lt.texture&&m.init(lt,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let lt=0;lt<Se.length;lt++){let dt=Se[lt].camera;if(dt){let mt=d[dt];mt||(mt=new Fo,d[dt]=mt);let nt=h.getCameraImage(dt);mt.sourceTexture=nt}}}}for(let Se=0;Se<y.length;Se++){let Ie=S[Se],ve=y[Se];Ie!==null&&ve!==void 0&&ve.update(Ie,Z,u||a)}Oe&&Oe(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let Ne=new Wd;Ne.setAnimationLoop(ge),this.setAnimationLoop=function(q){Oe=q},this.dispose=function(){}}},o_=new je,Jd=new ut;Jd.set(-1,0,0,0,1,0,0,0,1);function a_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ju(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,b,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?o(m,d,x,b):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===bn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===bn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x=e.get(d),b=x.envMap,_=x.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jd),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,x,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l_(i,e,t,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,y){let S=y.program;n.uniformBlockBinding(_,S)}function u(_,y){let S=s[_.id];S===void 0&&(m(_),S=c(_),s[_.id]=S,_.addEventListener("dispose",x));let R=y.program;n.updateUBOMapping(_,R);let M=e.render.frame;r[_.id]!==M&&(f(_),r[_.id]=M)}function c(_){let y=h();_.__bindingPointIndex=y;let S=i.createBuffer(),R=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function h(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],S=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,E=S.length;M<E;M++){let A=S[M];if(Array.isArray(A))for(let P=0,I=A.length;P<I;P++)p(A[P],M,P,R);else p(A,M,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,y,S,R){if(v(_,y,S,R)===!0){let M=_.__offset,E=_.value;if(Array.isArray(E)){let A=0;for(let P=0;P<E.length;P++){let I=E[P],D=d(I);g(I,_.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function g(_,y,S){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,S)}function v(_,y,S,R){let M=_.value,E=y+"_"+S;if(R[E]===void 0)return typeof M=="number"||typeof M=="boolean"?R[E]=M:ArrayBuffer.isView(M)?R[E]=M.slice():R[E]=M.clone(),!0;{let A=R[E];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return R[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function m(_){let y=_.uniforms,S=0,R=16;for(let E=0,A=y.length;E<A;E++){let P=Array.isArray(y[E])?y[E]:[y[E]];for(let I=0,D=P.length;I<D;I++){let w=P[I],L=Array.isArray(w.value)?w.value:[w.value];for(let U=0,B=L.length;U<B;U++){let k=L[U],z=d(k),V=S%R,G=V%z.boundary,J=V+G;S+=G,J!==0&&R-J<z.storage&&(S+=R-J),w.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,S+=z.storage}}}let M=S%R;return M>0&&(S+=R-M),_.__size=S,_.__cache={},this}function d(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):st("WebGLRenderer: Unsupported uniform value type.",_),y}function x(_){let y=_.target;y.removeEventListener("dispose",x);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:o,update:u,dispose:b}}var c_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function u_(){return Ii===null&&(Ii=new ls(c_,16,16,xs,an),Ii.name="DFG_LUT",Ii.minFilter=kt,Ii.magFilter=kt,Ii.wrapS=Ai,Ii.wrapT=Ai,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var xc=class{constructor(e={}){let{canvas:t=gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=p,m=new Set([Nl,Dl,Ll]),d=new Set([Rn,Mi,Fr,Or,Pl,Il]),x=new Uint32Array(4),b=new Int32Array(4),_=new H,y=null,S=null,R=[],M=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,I=null,D=null,w=null,L=null;this._outputColorSpace=Kt;let U=0,B=0,k=null,z=-1,V=null,G=new Mt,J=new Mt,re=null,Oe=new de(0),ge=0,Ne=t.width,q=t.height,Z=1,Se=null,Ie=null,ve=new Mt(0,0,Ne,q),Je=new Mt(0,0,Ne,q),tt=!1,lt=new Rr,dt=!1,mt=!1,nt=new je,gt=new H,oe=new Mt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function pe(){return k===null?Z:1}let F=n;function Pe(C,X){return t.getContext(C,X)}let We,O,T,Y,N,ee,xe,Te,ne,Q,ue,be,he,Ee,ke,He,rt,W,we,ie,Re,Fe,fe;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",On,!1),F===null){let X="webgl2";if(F=Pe(X,C),F===null)throw Pe(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(C){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",On,!1),at("WebGLRenderer: "+C.message),C}function $e(){We=new vx(F),We.init(),Re=new i_(F,We),O=new ax(F,We,e,Re),T=new t_(F,We),O.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),D=F.createFramebuffer(),w=F.createFramebuffer(),L=F.createFramebuffer(),Y=new yx(F),N=new H1,ee=new n_(F,We,T,N,O,Re,Y),xe=new gx(A),Te=new bm(F),Fe=new rx(F,Te),ne=new xx(F,Te,Y,Fe),Q=new bx(F,ne,Te,Fe,Y),W=new Mx(F,O,ee),ke=new lx(N),ue=new k1(A,xe,We,O,Fe,ke),be=new a_(A,N),he=new G1,Ee=new $1(We),rt=new sx(A,xe,T,Q,g,o),He=new e_(A,Q,O),fe=new l_(F,Y,O,T),we=new ox(F,We,Y),ie=new _x(F,We,Y),Y.programs=ue.programs,A.capabilities=O,A.extensions=We,A.properties=N,A.renderLists=he,A.shadowMap=He,A.state=T,A.info=Y}v!==Rn&&(E=new Tx(v,t.width,t.height,l,s,r));let qe=new Mh(A,F);this.xr=qe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=We.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=We.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(Ne,q,!1))},this.getSize=function(C){return C.set(Ne,q)},this.setSize=function(C,X,te=!0){if(qe.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=C,q=X,t.width=Math.floor(C*Z),t.height=Math.floor(X*Z),te===!0&&(t.style.width=C+"px",t.style.height=X+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(Ne*Z,q*Z).floor()},this.setDrawingBufferSize=function(C,X,te){Ne=C,q=X,Z=te,t.width=Math.floor(C*te),t.height=Math.floor(X*te),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(v===Rn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(ve)},this.setViewport=function(C,X,te,K){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,X,te,K),T.viewport(G.copy(ve).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(Je)},this.setScissor=function(C,X,te,K){C.isVector4?Je.set(C.x,C.y,C.z,C.w):Je.set(C,X,te,K),T.scissor(J.copy(Je).multiplyScalar(Z).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(C){T.setScissorTest(tt=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){Ie=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,te=!0){let K=0;if(C){let j=!1;if(k!==null){let ye=k.texture.format;j=m.has(ye)}if(j){let ye=k.texture.type,Be=d.has(ye),Ce=rt.getClearColor(),ze=rt.getClearAlpha(),Ye=Ce.r,Ze=Ce.g,Le=Ce.b;Be?(x[0]=Ye,x[1]=Ze,x[2]=Le,x[3]=ze,F.clearBufferuiv(F.COLOR,0,x)):(b[0]=Ye,b[1]=Ze,b[2]=Le,b[3]=ze,F.clearBufferiv(F.COLOR,0,b))}else K|=F.COLOR_BUFFER_BIT}X&&(K|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",On,!1),rt.dispose(),he.dispose(),Ee.dispose(),N.dispose(),xe.dispose(),Q.dispose(),Fe.dispose(),fe.dispose(),ue.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",ro),qe.removeEventListener("sessionend",oo),ui.stop()};function ct(C){C.preventDefault(),Ku("WebGLRenderer: Context Lost."),P=!0}function St(){Ku("WebGLRenderer: Context Restored."),P=!1;let C=Y.autoReset,X=He.enabled,te=He.autoUpdate,K=He.needsUpdate,j=He.type;$e(),Y.autoReset=C,He.enabled=X,He.autoUpdate=te,He.needsUpdate=K,He.type=j}function On(C){at("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qn(C){let X=C.target;X.removeEventListener("dispose",qn),Gc(X)}function Gc(C){so(C),N.remove(C)}function so(C){let X=N.get(C).programs;X!==void 0&&(X.forEach(function(te){ue.releaseProgram(te)}),C.isShaderMaterial&&ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,te,K,j,ye){X===null&&(X=_e);let Be=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ce=Xc(C,X,te,K,j);T.setMaterial(K,Be);let ze=te.index,Ye=1;if(K.wireframe===!0){if(ze=ne.getWireframeAttribute(te),ze===void 0)return;Ye=2}let Ze=te.drawRange,Le=te.attributes.position,De=Ze.start*Ye,Ge=(Ze.start+Ze.count)*Ye;ye!==null&&(De=Math.max(De,ye.start*Ye),Ge=Math.min(Ge,(ye.start+ye.count)*Ye)),ze!==null?(De=Math.max(De,0),Ge=Math.min(Ge,ze.count)):Le!=null&&(De=Math.max(De,0),Ge=Math.min(Ge,Le.count));let en=Ge-De;if(en<0||en===1/0)return;Fe.setup(j,K,Ce,te,ze);let Ut,Lt=we;if(ze!==null&&(Ut=Te.get(ze),Lt=ie,Lt.setIndex(Ut)),j.isMesh)K.wireframe===!0?(T.setLineWidth(K.wireframeLinewidth*pe()),Lt.setMode(F.LINES)):Lt.setMode(F.TRIANGLES);else if(j.isLine){let cn=K.linewidth;cn===void 0&&(cn=1),T.setLineWidth(cn*pe()),j.isLineSegments?Lt.setMode(F.LINES):j.isLineLoop?Lt.setMode(F.LINE_LOOP):Lt.setMode(F.LINE_STRIP)}else j.isPoints?Lt.setMode(F.POINTS):j.isSprite&&Lt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let cn=j._multiDrawStarts,$=j._multiDrawCounts,Ke=j._multiDrawCount,Me=ze?Te.get(ze).bytesPerElement:1,Tt=N.get(K).currentProgram.getUniforms();for(let vt=0;vt<Ke;vt++)Tt.setValue(F,"_gl_DrawID",vt),Lt.render(cn[vt]/Me,$[vt])}else if(j.isInstancedMesh)Lt.renderInstances(De,en,j.count);else if(te.isInstancedBufferGeometry){let cn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,$=Math.min(te.instanceCount,cn);Lt.renderInstances(De,en,$)}else Lt.render(De,en)};function yn(C,X,te,K){I!==null&&C.isNodeMaterial&&I.setObject(K,C),dt===!0&&ke.setState(C,te,!1),C.transparent===!0&&C.side===xn&&C.forceSinglePass===!1?(C.side=bn,C.needsUpdate=!0,Ts(C,X,K),C.side=ms,C.needsUpdate=!0,Ts(C,X,K),C.side=xn):Ts(C,X,K)}this.compile=function(C,X,te=null){te===null&&(te=C),I!==null&&I.renderStart(C,X,te),S=Ee.get(te),S.init(X),M.push(S),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),C!==te&&C.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights(),I!==null&&I.updateLights(S.state.lightsArray),mt=this.localClippingEnabled,dt=ke.init(this.clippingPlanes,mt),dt===!0&&ke.setGlobalState(this.clippingPlanes,X),I!==null&&He.render(S.state.shadowsArray,te,X);let K=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let ye=j.material;if(ye)if(Array.isArray(ye))for(let Be=0;Be<ye.length;Be++){let Ce=ye[Be];yn(Ce,te,X,j),K.add(Ce)}else yn(ye,te,X,j),K.add(ye)}),S=M.pop(),I!==null&&I.renderEnd(),K},this.compileAsync=function(C,X,te=null){let K=this.compile(C,X,te);return new Promise(j=>{function ye(){if(K.forEach(function(Be){let ze=N.get(Be).currentProgram;(ze===void 0||ze.isReady())&&K.delete(Be)}),K.size===0){j(C);return}setTimeout(ye,10)}We.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Jt=null;function ga(C){Jt&&Jt(C)}function ro(){ui.stop()}function oo(){ui.start()}let ui=new Wd;ui.setAnimationLoop(ga),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(C){Jt=C,qe.setAnimationLoop(C),C===null?ui.stop():ui.start()},qe.addEventListener("sessionstart",ro),qe.addEventListener("sessionend",oo),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(C,X);let te=qe.enabled===!0&&qe.isPresenting===!0,K=E!==null&&(k===null||te)&&E.begin(A,k);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(X),X=qe.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,k),S=Ee.get(C,M.length),S.init(X),S.state.textureUnits=ee.getTextureUnits(),M.push(S),nt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),lt.setFromProjectionMatrix(nt,xi,X.reversedDepth),mt=this.localClippingEnabled,dt=ke.init(this.clippingPlanes,mt),y=he.get(C,R.length),y.init(),R.push(y),qe.enabled===!0&&qe.isPresenting===!0){let Be=A.xr.getDepthSensingMesh();Be!==null&&js(Be,X,-1/0,A.sortObjects)}js(C,X,0,A.sortObjects),y.finish(),I!==null&&I.updateLights(S.state.lightsArray),A.sortObjects===!0&&y.sort(Se,Ie),me=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,me&&rt.addToRenderList(y,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&ke.beginShadows();let j=S.state.shadowsArray;if(He.render(j,C,X),dt===!0&&ke.endShadows(),(K&&E.hasRenderPass())===!1){let Be=y.opaque,Ce=y.transmissive;if(S.setupLights(),X.isArrayCamera){let ze=X.cameras;if(Ce.length>0)for(let Ye=0,Ze=ze.length;Ye<Ze;Ye++){let Le=ze[Ye];lo(Be,Ce,C,Le)}me&&rt.render(C);for(let Ye=0,Ze=ze.length;Ye<Ze;Ye++){let Le=ze[Ye];ao(y,C,Le,Le.viewport)}}else Ce.length>0&&lo(Be,Ce,C,X),me&&rt.render(C),ao(y,C,X)}k!==null&&B===0&&(ee.updateMultisampleRenderTarget(k),ee.updateRenderTargetMipmap(k)),K&&E.end(A),C.isScene===!0&&C.onAfterRender(A,C,X),Fe.resetDefaultState(),z=-1,V=null,M.pop(),M.length>0?(S=M[M.length-1],ee.setTextureUnits(S.state.textureUnits),dt===!0&&ke.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,I!==null&&I.renderEnd()};function js(C,X,te,K){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLightProbeGrid)S.pushLightProbeGrid(C);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(lt)){K&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nt);let Be=Q.update(C),Ce=C.material;Ce.visible&&y.push(C,Be,Ce,te,oe.z,null,X)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(lt))){let Be=Q.update(C),Ce=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),oe.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),oe.copy(Be.boundingSphere.center)),oe.applyMatrix4(C.matrixWorld).applyMatrix4(nt)),Array.isArray(Ce)){let ze=Be.groups;for(let Ye=0,Ze=ze.length;Ye<Ze;Ye++){let Le=ze[Ye],De=Ce[Le.materialIndex];De&&De.visible&&y.push(C,Be,De,te,oe.z,Le,X)}}else Ce.visible&&y.push(C,Be,Ce,te,oe.z,null,X)}}let ye=C.children;for(let Be=0,Ce=ye.length;Be<Ce;Be++)js(ye[Be],X,te,K)}function ao(C,X,te,K){let{opaque:j,transmissive:ye,transparent:Be}=C;S.setupLightsView(te),dt===!0&&ke.setGlobalState(A.clippingPlanes,te),K&&T.viewport(G.copy(K)),j.length>0&&Nt(j,X,te),ye.length>0&&Nt(ye,X,te),Be.length>0&&Nt(Be,X,te),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function lo(C,X,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){let De=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Ot(1,1,{generateMipmaps:!0,type:De?an:Rn,minFilter:Wn,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let ye=S.state.transmissionRenderTarget[K.id],Be=K.viewport||G;ye.setSize(Be.z*A.transmissionResolutionScale,Be.w*A.transmissionResolutionScale);let Ce=A.getRenderTarget(),ze=A.getActiveCubeFace(),Ye=A.getActiveMipmapLevel();A.setRenderTarget(ye),A.getClearColor(Oe),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),me&&rt.render(te);let Ze=A.toneMapping;A.toneMapping=yi;let Le=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),dt===!0&&ke.setGlobalState(A.clippingPlanes,K),Nt(C,te,K),ee.updateMultisampleRenderTarget(ye),ee.updateRenderTargetMipmap(ye),We.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ge=0,en=X.length;Ge<en;Ge++){let Ut=X[Ge],{object:Lt,geometry:cn,material:$,group:Ke}=Ut;if($.side===xn&&Lt.layers.test(K.layers)){let Me=$.side;$.side=bn,$.needsUpdate=!0,Qs(Lt,te,K,cn,$,Ke),$.side=Me,$.needsUpdate=!0,De=!0}}De===!0&&(ee.updateMultisampleRenderTarget(ye),ee.updateRenderTargetMipmap(ye))}A.setRenderTarget(Ce,ze,Ye),A.setClearColor(Oe,ge),Le!==void 0&&(K.viewport=Le),A.toneMapping=Ze}function Nt(C,X,te){let K=X.isScene===!0?X.overrideMaterial:null;for(let j=0,ye=C.length;j<ye;j++){let Be=C[j],{object:Ce,geometry:ze,group:Ye}=Be,Ze=Be.material;Ze.allowOverride===!0&&K!==null&&(Ze=K),Ce.layers.test(te.layers)&&Qs(Ce,X,te,ze,Ze,Ye)}}function Qs(C,X,te,K,j,ye){I!==null&&j.isNodeMaterial&&I.setObject(C,j),C.onBeforeRender(A,X,te,K,j,ye),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(A,X,te,K,C,ye),j.transparent===!0&&j.side===xn&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,A.renderBufferDirect(te,X,K,j,C,ye),j.side=ms,j.needsUpdate=!0,A.renderBufferDirect(te,X,K,j,C,ye),j.side=xn):A.renderBufferDirect(te,X,K,j,C,ye),C.onAfterRender(A,X,te,K,j,ye)}function Ts(C,X,te){X.isScene!==!0&&(X=_e);let K=N.get(C),j=S.state.lights,ye=S.state.shadowsArray,Be=j.state.version,Ce=ue.getParameters(C,j.state,ye,X,te,S.state.lightProbeGridArray),ze=ue.getProgramCacheKey(Ce),Ye=K.programs;K.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,K.fog=X.fog;let Ze=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;K.envMap=xe.get(C.envMap||K.environment,Ze),K.envMapRotation=K.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",qn),Ye=new Map,K.programs=Ye);let Le=Ye.get(ze);if(Le!==void 0){if(K.currentProgram===Le&&K.lightsStateVersion===Be)return uo(C,Ce),Le}else Ce.uniforms=ue.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,te,Ce),C.onBeforeCompile(Ce,A),Le=ue.acquireProgram(Ce,ze),Ye.set(ze,Le),K.uniforms=Ce.uniforms;let De=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(De.clippingPlanes=ke.uniform),uo(C,Ce),K.needsLights=va(C),K.lightsStateVersion=Be,K.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.sunLights.value=j.state.sun,De.sunLightShadows.value=j.state.sunShadow,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.sunShadowMatrix.value=j.state.sunShadowMatrix,De.sunShadowCascade.value=j.state.sunShadowCascade,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),K.lightProbeGrid=S.state.lightProbeGridArray.length>0,K.currentProgram=Le,K.uniformsList=null,Le}function co(C){if(C.uniformsList===null){let X=C.currentProgram.getUniforms();C.uniformsList=kr.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function uo(C,X){let te=N.get(C);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Wc(C,X){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(X.matrixWorld);for(let te=0,K=C.length;te<K;te++){let j=C[te];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function Xc(C,X,te,K,j){X.isScene!==!0&&(X=_e),ee.resetTextureUnits();let ye=X.fog,Be=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?X.environment:null,Ce=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:yt.workingColorSpace,ze=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ye=xe.get(K.envMap||Be,ze),Ze=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Le=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),De=!!te.morphAttributes.position,Ge=!!te.morphAttributes.normal,en=!!te.morphAttributes.color,Ut=yi;K.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ut=A.toneMapping);let Lt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,cn=Lt!==void 0?Lt.length:0,$=N.get(K),Ke=S.state.lights;if(dt===!0&&(mt===!0||C!==V)){let _t=C===V&&K.id===z;ke.setState(K,C,_t)}let Me=!1;K.version===$.__version?($.needsLights&&$.lightsStateVersion!==Ke.state.version||$.outputColorSpace!==Ce||j.isBatchedMesh&&$.batching===!1||!j.isBatchedMesh&&$.batching===!0||j.isBatchedMesh&&$.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&$.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&$.instancing===!1||!j.isInstancedMesh&&$.instancing===!0||j.isSkinnedMesh&&$.skinning===!1||!j.isSkinnedMesh&&$.skinning===!0||j.isInstancedMesh&&$.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&$.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&$.instancingMorph===!1&&j.morphTexture!==null||$.envMap!==Ye||K.fog===!0&&$.fog!==ye||$.numClippingPlanes!==void 0&&($.numClippingPlanes!==ke.numPlanes||$.numIntersection!==ke.numIntersection)||$.vertexAlphas!==Ze||$.vertexTangents!==Le||$.morphTargets!==De||$.morphNormals!==Ge||$.morphColors!==en||$.toneMapping!==Ut||$.morphTargetsCount!==cn||!!$.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,$.__version=K.version);let Tt=$.currentProgram;Me===!0&&(Tt=Ts(K,X,j),I&&K.isNodeMaterial&&I.onUpdateProgram(K,Tt,$));let vt=!1,Rt=!1,hi=!1,Et=Tt.getUniforms(),zt=$.uniforms;if(T.useProgram(Tt.program)&&(vt=!0,Rt=!0,hi=!0),K.id!==z&&(z=K.id,Rt=!0),$.needsLights){let _t=Wc(S.state.lightProbeGridArray,j);$.lightProbeGrid!==_t&&($.lightProbeGrid=_t,Rt=!0)}if(vt||V!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Et.setValue(F,"projectionMatrix",C.projectionMatrix),Et.setValue(F,"viewMatrix",C.matrixWorldInverse);let fi=Et.map.cameraPosition;fi!==void 0&&fi.setValue(F,gt.setFromMatrixPosition(C.matrixWorld)),O.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Et.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,Rt=!0,hi=!0)}if($.needsLights&&(Ke.state.sunShadowMap.length>0&&Et.setValue(F,"sunShadowMap",Ke.state.sunShadowMap,ee),Ke.state.directionalShadowMap.length>0&&Et.setValue(F,"directionalShadowMap",Ke.state.directionalShadowMap,ee),Ke.state.spotShadowMap.length>0&&Et.setValue(F,"spotShadowMap",Ke.state.spotShadowMap,ee),Ke.state.pointShadowMap.length>0&&Et.setValue(F,"pointShadowMap",Ke.state.pointShadowMap,ee)),j.isSkinnedMesh){Et.setOptional(F,j,"bindMatrix"),Et.setOptional(F,j,"bindMatrixInverse");let _t=j.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),Et.setValue(F,"boneTexture",_t.boneTexture,ee))}j.isBatchedMesh&&(Et.setOptional(F,j,"batchingTexture"),Et.setValue(F,"batchingTexture",j._matricesTexture,ee),Et.setOptional(F,j,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",j._indirectTexture,ee),Et.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",j._colorsTexture,ee));let Yt=te.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&W.update(j,te,Tt),(Rt||$.receiveShadow!==j.receiveShadow)&&($.receiveShadow=j.receiveShadow,Et.setValue(F,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&X.environment!==null&&(zt.envMapIntensity.value=X.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=u_()),Rt){if(Et.setValue(F,"toneMappingExposure",A.toneMappingExposure),$.needsLights&&Es(zt,hi),ye&&K.fog===!0&&be.refreshFogUniforms(zt,ye),be.refreshMaterialUniforms(zt,K,Z,q,S.state.transmissionRenderTarget[C.id]),$.needsLights&&$.lightProbeGrid){let _t=$.lightProbeGrid;zt.probesSH.value=_t.texture,zt.probesMin.value.copy(_t.boundingBox.min),zt.probesMax.value.copy(_t.boundingBox.max),zt.probesResolution.value.copy(_t.resolution)}kr.upload(F,co($),zt,ee)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(kr.upload(F,co($),zt,ee),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Et.setValue(F,"center",j.center),Et.setValue(F,"modelViewMatrix",j.modelViewMatrix),Et.setValue(F,"normalMatrix",j.normalMatrix),Et.setValue(F,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){let _t=K.uniformsGroups;for(let fi=0,Oi=_t.length;fi<Oi;fi++){let Bn=_t[fi];fe.update(Bn,Tt),fe.bind(Bn,Tt)}}return Tt}function Es(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.sunLights.needsUpdate=X,C.sunLightShadows.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function va(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,X,te){let K=N.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),N.get(C.texture).__webglTexture=X,N.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){let te=N.get(C);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,te=0){k=C,U=X,B=te;let K=null,j=!1,ye=!1;if(C){let Ce=N.get(C);if(Ce.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(F.FRAMEBUFFER,Ce.__webglFramebuffer),G.copy(C.viewport),J.copy(C.scissor),re=C.scissorTest,T.viewport(G),T.scissor(J),T.setScissorTest(re),z=-1;return}else if(Ce.__webglFramebuffer===void 0)ee.setupRenderTarget(C);else if(Ce.__hasExternalTextures)ee.rebindTextures(C,N.get(C.texture).__webglTexture,N.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ze=C.depthTexture;if(Ce.__boundDepthTexture!==Ze){if(Ze!==null&&N.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(C)}}let ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);let Ye=N.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?K=Ye[X][te]:K=Ye[X],j=!0):C.samples>0&&ee.useMultisampledRTT(C)===!1?K=N.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?K=Ye[te]:K=Ye,G.copy(C.viewport),J.copy(C.scissor),re=C.scissorTest}else G.copy(ve).multiplyScalar(Z).floor(),J.copy(Je).multiplyScalar(Z).floor(),re=tt;if(te!==0&&(K=D),T.bindFramebuffer(F.FRAMEBUFFER,K)&&T.drawBuffers(C,K),T.viewport(G),T.scissor(J),T.setScissorTest(re),j){let Ce=N.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,te)}else if(ye){let Ce=X;for(let ze=0;ze<C.textures.length;ze++){let Ye=N.get(C.textures[ze]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ze,Ye.__webglTexture,te,Ce)}}else if(C!==null&&te!==0){let Ce=N.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ce.__webglTexture,te)}z=-1};function ts(C){let X=N.get(C);return(X.__readFormat!==C.format||X.__readType!==C.type)&&(X.__readFormat=C.format,X.__readType=C.type,X.__formatReadable=O.textureFormatReadable(C.format),X.__typeReadable=O.textureTypeReadable(C.type)),X}this.readRenderTargetPixels=function(C,X,te,K,j,ye,Be,Ce=0){if(!(C&&C.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=N.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(ze=ze[Be]),ze){T.bindFramebuffer(F.FRAMEBUFFER,ze);try{let Ye=C.textures[Ce],Ze=Ye.format,Le=Ye.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ce);let De=ts(Ye);if(De.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-K&&te>=0&&te<=C.height-j&&F.readPixels(X,te,K,j,Re.convert(Ze),Re.convert(Le),ye)}finally{let Ye=k!==null?N.get(k).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,X,te,K,j,ye,Be,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=N.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(ze=ze[Be]),ze)if(X>=0&&X<=C.width-K&&te>=0&&te<=C.height-j){T.bindFramebuffer(F.FRAMEBUFFER,ze);let Ye=C.textures[Ce],Ze=Ye.format,Le=Ye.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ce);let De=ts(Ye);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ge),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),F.readPixels(X,te,K,j,Re.convert(Ze),Re.convert(Le),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let en=k!==null?N.get(k).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,en);let Ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xd(F,Ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ge),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ge),F.deleteSync(Ut),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,te=0){let K=Math.pow(2,-te),j=Math.floor(C.image.width*K),ye=Math.floor(C.image.height*K),Be=X!==null?X.x:0,Ce=X!==null?X.y:0;ee.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,te,0,0,Be,Ce,j,ye),T.unbindTexture()},this.copyTextureToTexture=function(C,X,te=null,K=null,j=0,ye=0){let Be,Ce,ze,Ye,Ze,Le,De,Ge,en,Ut=C.isCompressedTexture?C.mipmaps[ye]:C.image;if(te!==null)Be=te.max.x-te.min.x,Ce=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,Ze=te.min.y,Le=te.isBox3?te.min.z:0;else{let zt=Math.pow(2,-j);Be=Math.floor(Ut.width*zt),Ce=Math.floor(Ut.height*zt),C.isDataArrayTexture?ze=Ut.depth:C.isData3DTexture?ze=Math.floor(Ut.depth*zt):ze=1,Ye=0,Ze=0,Le=0}K!==null?(De=K.x,Ge=K.y,en=K.z):(De=0,Ge=0,en=0);let Lt=Re.convert(X.format),cn=Re.convert(X.type),$;X.isData3DTexture?(ee.setTexture3D(X,0),$=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ee.setTexture2DArray(X,0),$=F.TEXTURE_2D_ARRAY):(ee.setTexture2D(X,0),$=F.TEXTURE_2D),T.activeTexture(F.TEXTURE0),T.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),T.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),T.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);let Ke=T.getParameter(F.UNPACK_ROW_LENGTH),Me=T.getParameter(F.UNPACK_IMAGE_HEIGHT),Tt=T.getParameter(F.UNPACK_SKIP_PIXELS),vt=T.getParameter(F.UNPACK_SKIP_ROWS),Rt=T.getParameter(F.UNPACK_SKIP_IMAGES);T.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),T.pixelStorei(F.UNPACK_SKIP_PIXELS,Ye),T.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),T.pixelStorei(F.UNPACK_SKIP_IMAGES,Le);let hi=C.isDataArrayTexture||C.isData3DTexture,Et=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){let zt=N.get(C),Yt=N.get(X),_t=N.get(zt.__renderTarget),fi=N.get(Yt.__renderTarget);T.bindFramebuffer(F.READ_FRAMEBUFFER,_t.__webglFramebuffer),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let Oi=0;Oi<ze;Oi++)hi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,N.get(C).__webglTexture,j,Le+Oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,N.get(X).__webglTexture,ye,en+Oi)),F.blitFramebuffer(Ye,Ze,Be,Ce,De,Ge,Be,Ce,F.DEPTH_BUFFER_BIT,F.NEAREST);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||N.has(C)){let zt=N.get(C),Yt=N.get(X);T.bindFramebuffer(F.READ_FRAMEBUFFER,w),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let _t=0;_t<ze;_t++)hi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.__webglTexture,j,Le+_t):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zt.__webglTexture,j),Et?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.__webglTexture,ye,en+_t):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yt.__webglTexture,ye),j!==0?F.blitFramebuffer(Ye,Ze,Be,Ce,De,Ge,Be,Ce,F.COLOR_BUFFER_BIT,F.NEAREST):Et?F.copyTexSubImage3D($,ye,De,Ge,en+_t,Ye,Ze,Be,Ce):F.copyTexSubImage2D($,ye,De,Ge,Ye,Ze,Be,Ce);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Et?C.isDataTexture||C.isData3DTexture?F.texSubImage3D($,ye,De,Ge,en,Be,Ce,ze,Lt,cn,Ut.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D($,ye,De,Ge,en,Be,Ce,ze,Lt,Ut.data):F.texSubImage3D($,ye,De,Ge,en,Be,Ce,ze,Lt,cn,Ut):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ye,De,Ge,Be,Ce,Lt,cn,Ut.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ye,De,Ge,Ut.width,Ut.height,Lt,Ut.data):F.texSubImage2D(F.TEXTURE_2D,ye,De,Ge,Be,Ce,Lt,cn,Ut);T.pixelStorei(F.UNPACK_ROW_LENGTH,Ke),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me),T.pixelStorei(F.UNPACK_SKIP_PIXELS,Tt),T.pixelStorei(F.UNPACK_SKIP_ROWS,vt),T.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt),ye===0&&X.generateMipmaps&&F.generateMipmap($),T.unbindTexture()},this.initRenderTarget=function(C){N.get(C).__webglFramebuffer===void 0&&ee.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ee.setTextureCube(C,0):C.isData3DTexture?ee.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ee.setTexture2DArray(C,0):ee.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){U=0,B=0,k=null,T.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var Bt=(i,e,t)=>i<e?e:i>t?t:i,It=(i,e,t)=>i+(e-i)*t,bc=i=>i*i*(3-2*i),Ct=(i,e,t)=>{let n=Bt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Kd=1337;function jd(i){Kd=i|0}function h_(i){return i=i^Kd|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Kn=(i,e)=>h_(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Jn(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return It(Kn(t,e),Kn(t+1,e),s)}var Sc=(i,e=0)=>Jn(i,e)*.55+Jn(i*2.03,e+7)*.3+Jn(i*4.1,e+13)*.15;function Pn(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Mc=new de,se=i=>(Mc.set(i),[Mc.r,Mc.g,Mc.b]),Qd=(i,e,t)=>[It(i[0],e[0],t),It(i[1],e[1],t),It(i[2],e[2],t)],In=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Ni=["city","sakura","coast","country","mountain","snow"],sa={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},bh=1500,e0=260,_s=0,Sh=0;function n0(i){Sh=Math.max(0,Ni.indexOf(i))}function Vr(i){let e=Math.floor(i/bh),t=i-e*bh,n=bc(Bt((t-(bh-e0))/e0,0,1)),s=Ni.length;return{a:Ni[((e+Sh)%s+s)%s],b:Ni[((e+Sh+1)%s+s)%s],t:n}}function Dt(i){let e=Vr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var jt=i=>{let e=Vr(i);return e.t<.5?e.a:e.b};function Tn(i,e){let t=Vr(i);return It(sa[t.a][e],sa[t.b][e],t.t)}var Vs=650,Gs=375,Gr=i=>i*Vs+Gs;function ra(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Dt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var Th={x:new Map,r:new Map,t:new Map};function Eh(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function Wr(i){let e=Math.round((i-Gs)/Vs);return Eh(Th.x,e,()=>{let t=Gr(e);return ra(t)?{k:e,s:t}:null})}function f_(i){let e=Wr(i);return e?1-Ct(8,45,Math.abs(i-e.s)):0}var Ws=1150,Xr=820,oa=4.6,wh=i=>i*Ws+Xr;function Ah(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Dt(i+t);if(n.country+n.sakura<.9)return!1}let e=Wr(i);return!(e&&Math.abs(e.s-i)<170)}function Ui(i){let e=Math.round((i-Xr)/Ws);return Eh(Th.r,e,()=>{let t=wh(e);return Ah(t)?{k:e,s:t}:null})}function d_(i){let e=Ui(i);return e?1-Ct(30,70,Math.abs(i-e.s)):0}function p_(i){let e=-oa;return i<11?e-1.3:i<16?It(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?It(e+.7,.35,(i-20)/5.5):.35}var i0=1050,s0=525,tn=85,Qt=125,m_=24,g_=i=>i*i0+s0;function v_(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Dt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function ai(i){let e=Math.round((i-s0)/i0);return Eh(Th.t,e,()=>{let t=g_(e);return v_(t)?{k:e,s:t}:null})}function x_(i){let e=ai(i);return e?1-Ct(tn+20,Qt+25,Math.abs(i-e.s)):0}var Tc=0,wc=(i,e)=>{let t=i/Qt;return m_*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var Di=2,Ec=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Jn(e/300,11)-.5)*2+(Jn(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Tn(e,"curv")*(1-Math.max(f_(e),d_(e),x_(e)))}elevRaw(e){return Tn(e,"base")+Tn(e,"hill")*(Sc(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=Wr(e);if(n){let a=1-Ct(8,45,Math.abs(e-n.s));a>0&&(t=It(t,this.elevRaw(n.s),a))}let s=Ui(e);if(s){let a=1-Ct(30,70,Math.abs(e-s.s));a>0&&(t=It(t,this.elevRaw(s.s),a))}let r=ai(e);if(r){let a=1-Ct(tn+10,Qt+45,Math.abs(e-r.s));a>0&&(t=It(t,this.elevRaw(r.s),a))}return t}ensure(e){for(;(this.X.length-1)*Di<e+Di;){let t=this.X.length-1,n=t*Di,s=this.curv(n+Di/2)*Di,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*Di),this.Z.push(this.Z[t]+Math.cos(r+s/2)*Di),this.H.push(r+s),this.Y.push(this.elev(n+Di))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+Di);let n=e/Di,s=Math.floor(n),r=n-s;t.x=It(this.X[s],this.X[s+1],r),t.z=It(this.Z[s],this.Z[s+1],r),t.y=It(this.Y[s],this.Y[s+1],r),t.h=It(this.H[s],this.H[s+1],r);let a=Math.sin(t.h),l=Math.cos(t.h);return t.fx=a,t.fz=l,t.rx=-l,t.rz=a,t}};function t0(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Ct(45,190,r)*16*(.45+.55*Jn(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+Ct(s+1.5,80,r)*24*(.5+.5*Jn(e/170,5))+Ct(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?It(1.25,-1.6,a/26):It(-1.6,-7,Bt((a-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Jn(e/140,61),o=r-(s+1);return o<l?o:Math.min(l+(o-l)*.55,70)}if(r<s+1.2)return-.06;let a=r-(s+1.2);return a<32?-a*1.1:-35.2+Ct(105,230,r)*95*(.6+.4*Jn(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?It(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Jn(e/40+(t>0?3:0),71)-.5):.55+Ct(125,210,r)*40*(.45+.55*Jn(e/230+(t>0?11:0),73));case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+Ct(135,215,r)*36*(.4+.6*Jn(e/210+(t>0?9:0),7))}}function qr(i,e,t,n){let s=Vr(i),r=t0(s.a,i,e,t,n),a=s.t>0?It(r,t0(s.b,i,e,t,n),s.t):r;Tc=0;let l=Ui(i);if(l){let g=Math.abs(i-l.s);if(g>=36)return a;let v=g<29?p_(g):It(.35,a,Ct(29,36,g));return Math.abs(e)<n+3.2&&(v=Math.min(v,-.08)),v}let o=ai(i);if(!o)return a;let u=i-o.s,c=Math.abs(u);if(c>=2*Qt)return a;let h=Math.abs(e),f=wc(u,e),p;return c<tn?p=h<=n+1.46?-.25:Math.max(a,f):p=Math.max(a,Math.min(f,h<n+1?-.06:h-(n+1))),Tc=Math.max(0,p-a),p}function r0(i){let e=Ui(i);return e?1-Ct(27,34,Math.abs(i-e.s)):0}var aa=new H,Ac=new H,__=[1,1,1],dn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new je,this.nm=new ut,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let a=new Float32Array(t*2);this.U&&a.set(this.U.subarray(0,n*2)),this.U=a}if(this.hasColor){let a=new Uint8Array(t*3);this.Cl&&a.set(this.Cl.subarray(0,n*3)),this.Cl=a}if(this.hasAO){let a=new Uint8Array(t);this.A&&a.set(this.A.subarray(0,n)),this.A=a}if(this.hasLit){let a=new Uint8Array(t);this.Lt&&a.set(this.Lt.subarray(0,n)),this.Lt=a}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,a,l,o,u){this.n>=this.cap&&this.grow(this.n+1);let c=this.e,h=this.ne,f=this.n*3,p=this.P,g=this.bb,v=c[0]*e+c[4]*t+c[8]*n+c[12],m=c[1]*e+c[5]*t+c[9]*n+c[13],d=c[2]*e+c[6]*t+c[10]*n+c[14];p[f]=v,p[f+1]=m,p[f+2]=d,v<g[0]&&(g[0]=v),m<g[1]&&(g[1]=m),d<g[2]&&(g[2]=d),v>g[3]&&(g[3]=v),m>g[4]&&(g[4]=m),d>g[5]&&(g[5]=d);let x=h[0]*s+h[3]*r+h[6]*a,b=h[1]*s+h[4]*r+h[7]*a,_=h[2]*s+h[5]*r+h[8]*a,y=127/(Math.sqrt(x*x+b*b+_*_)||1);if(this.N[f]=Math.round(x*y),this.N[f+1]=Math.round(b*y),this.N[f+2]=Math.round(_*y),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=o),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(m)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasColor){let S=u||__,R=this.Cl;R[f]=S[0]>=1?255:S[0]<=0?0:S[0]*255+.5,R[f+1]=S[1]>=1?255:S[1]<=0?0:S[1]*255+.5,R[f+2]=S[2]>=1?255:S[2]<=0?0:S[2]*255+.5}this.n++}quad(e,t,n,s,r,a){aa.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Ac.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Ac.lengthSq()<1e-12&&Ac.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),aa.cross(Ac).normalize();let l=aa.x,o=aa.y,u=aa.z,c=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,p=a?a.v1:1;this.vtx(e[0],e[1],e[2],l,o,u,c,f,r),this.vtx(t[0],t[1],t[2],l,o,u,h,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(e[0],e[1],e[2],l,o,u,c,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(s[0],s[1],s[2],l,o,u,c,p,r)}box(e,t,n,s,r,a,l,o=null,u=null){let c=o||{},h=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],h.nz||l,c.nz),this.quad([e,t,a],[s,t,a],[s,r,a],[e,r,a],h.pz||l,c.pz),this.quad([e,t,n],[e,t,a],[e,r,a],[e,r,n],h.nx||l,c.nx),this.quad([s,t,a],[s,t,n],[s,r,n],[s,r,a],h.px||l,c.px),this.quad([e,r,a],[s,r,a],[s,r,n],[e,r,n],h.py||l,c.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,a],[e,t,a],h.ny||l,c.ny)}cyl(e,t,n,s,r,a,l,o,u=!0){let c=(s-r)/a;for(let h=0;h<l;h++){let f=h/l*Math.PI*2,p=(h+1)/l*Math.PI*2,g=Math.cos(f),v=Math.sin(f),m=Math.cos(p),d=Math.sin(p),x=[e+g*s,t,n+v*s],b=[e+m*s,t,n+d*s],_=[e+m*r,t+a,n+d*r],y=[e+g*r,t+a,n+v*r];this.vtx(x[0],x[1],x[2],g,c,v,0,0,o),this.vtx(y[0],y[1],y[2],g,c,v,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(x[0],x[1],x[2],g,c,v,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(b[0],b[1],b[2],m,c,d,0,0,o),u&&r>.001&&(this.vtx(e,t+a,n,0,1,0,0,0,o),this.vtx(_[0],_[1],_[2],0,1,0,0,0,o),this.vtx(y[0],y[1],y[2],0,1,0,0,0,o))}}rod(e,t,n,s,r,a){let l=t[0]-e[0],o=t[1]-e[1],u=t[2]-e[2],c=Math.hypot(l,o,u);l/=c,o/=c,u/=c;let h=0,f=1,p=0;Math.abs(o)>.99&&(h=1,f=0);let g=o*p-u*f,v=u*h-l*p,m=l*f-o*h,d=Math.hypot(g,v,m);g/=d,v/=d,m/=d;let x=v*u-m*o,b=m*l-g*u,_=g*o-v*l;for(let y=0;y<r;y++){let S=y/r*Math.PI*2,R=(y+1)/r*Math.PI*2,M=Math.cos(S),E=Math.sin(S),A=Math.cos(R),P=Math.sin(R),I=g*M+x*E,D=v*M+b*E,w=m*M+_*E,L=g*A+x*P,U=v*A+b*P,B=m*A+_*P,k=[e[0]+I*n,e[1]+D*n,e[2]+w*n],z=[e[0]+L*n,e[1]+U*n,e[2]+B*n],V=[t[0]+L*s,t[1]+U*s,t[2]+B*s],G=[t[0]+I*s,t[1]+D*s,t[2]+w*s];this.vtx(k[0],k[1],k[2],I,D,w,0,0,a),this.vtx(z[0],z[1],z[2],L,U,B,0,0,a),this.vtx(V[0],V[1],V[2],L,U,B,0,0,a),this.vtx(k[0],k[1],k[2],I,D,w,0,0,a),this.vtx(V[0],V[1],V[2],L,U,B,0,0,a),this.vtx(G[0],G[1],G[2],I,D,w,0,0,a)}return c}blob(e,t,n,s,r,a,l=0,o=1){let u=o0[l%o0.length],c=u.attributes.position.array,h=u.attributes.normal.array,f=u.userData.disp;for(let p=0;p<c.length;p+=3){let g=1+f[p/3],v=Math.max(0,Math.min(1,h[p+1]*.5+.5)),m=[a[0]+(r[0]-a[0])*v,a[1]+(r[1]-a[1])*v,a[2]+(r[2]-a[2])*v];this.vtx(e+c[p]*s*g,t+c[p+1]*s*g*o,n+c[p+2]*s*g,h[p],h[p+1],h[p+2],0,0,m)}}wire(e,t,n,s,r,a=10){let l=e;this.noShadow=!0;for(let o=1;o<=a;o++){let u=o/a,c=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,c,s,s,3,r),l=c}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,l,o]of r)this.vtx(e[a][0],e[a][1],e[a][2],t[a][0],t[a][1],t[a][2],l,o,s[a])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,a=e.N,l=e.C,o=e.U,u=this.n,c=this.bb;for(let h=0;h<e.n*3;h+=3){let f=r[h],p=r[h+1],g=r[h+2],v=u*3+h,m=n[0]*f+n[4]*p+n[8]*g+n[12],d=n[1]*f+n[5]*p+n[9]*g+n[13],x=n[2]*f+n[6]*p+n[10]*g+n[14];this.P[v]=m,this.P[v+1]=d,this.P[v+2]=x,this.hasAO&&(this.A[u+h/3]=this.aoByte(d)),m<c[0]&&(c[0]=m),d<c[1]&&(c[1]=d),x<c[2]&&(c[2]=x),m>c[3]&&(c[3]=m),d>c[4]&&(c[4]=d),x>c[5]&&(c[5]=x);let b=a[h],_=a[h+1],y=a[h+2],S=s[0]*b+s[3]*_+s[6]*y,R=s[1]*b+s[4]*_+s[7]*y,M=s[2]*b+s[5]*_+s[8]*y,E=127/(Math.sqrt(S*S+R*R+M*M)||1);this.N[v]=Math.round(S*E),this.N[v+1]=Math.round(R*E),this.N[v+2]=Math.round(M*E)}this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(o?this.U.set(o,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new xt,t=this.n,n=this.bb;return e.setAttribute("position",new Ft(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Ft(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Ft(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Ft(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Ft(this.Lt.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new Ft(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new si(new H(n[0],n[1],n[2]),new H(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new ri),e}},o0=[0,1,2,3].map(i=>{let e=new Bo(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,a,l)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ot.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var y_=ot.shadowmap_pars_fragment;function Ch(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ot.shadowmap_pars_fragment=y_.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}Ch(1);function h0(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";ot.shadowmap_pars_fragment=t+ot.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}ot.lights_fragment_begin=ot.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var ys=4200,Ve={uSkyHor:{value:new de(.7,.8,.9)},uSkyZen:{value:new de(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uLightsOn:{value:1},uCloudSh:{value:0},uOrigin:{value:new Xe},uSunDir:{value:new H(0,1,0)},uSunCol:{value:new de(1,1,1)},uTuftV:{value:new Xe(0,.333)},uTunA:{value:new H(0,-1e4,0)},uTunB:{value:new H(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new H},uCarFwd:{value:new H(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:M_()},uCloudTex:{value:null},uCloudOrg:{value:new Xe},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Xe(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function f0(i){let e=new ls(new Uint8Array(i),i.length,1,Bs);return e.minFilter=e.magFilter=rn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var jn=f0([16,16,16,70,200,255,255,255]),a0=f0([28,40,70,130,200,240,255,255]);function M_(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ls(e,256,256,Xn);return s.wrapS=s.wrapT=br,s.magFilter=kt,s.minFilter=Wn,s.generateMipmaps=!0,s.colorSpace=bi,s.needsUpdate=!0,s}var Si=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Rc=1600,Rh=256,b_=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Rc).toFixed(8)} + 0.5).r * uCloudSh; }`,S_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,T_=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Rc).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,E_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,w_=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,A_=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,Cc=new Ir;Cc.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};Cc.customProgramCacheKey=()=>"propdepth";function d0(){let i=new Ot(Rh,Rh,{format:Bs,type:Rn,depthBuffer:!1,minFilter:kt,magFilter:kt,generateMipmaps:!1}),e=new pt({uniforms:{uCenter:{value:new Xe},uOrigin:Ve.uOrigin,uTime:Ve.uTime,uNoiseTex:Ve.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Rc.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ft(new Xt(2,2),e),n=new Xi;t.frustumCulled=!1,Ve.uCloudTex.value=i.texture,Ve.uCloudTex.rt=i;let s=Rc/Rh;return{update(r,a,l,o,u){let c=Math.round((a+o)/s)*s-o,h=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(c,h),Ve.uCloudOrg.value.set(c,h);let f=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(f)}}}function Xs(i,e="",t="",n=!0){i.uniforms.uOrigin=Ve.uOrigin,i.uniforms.uCloudSh=Ve.uCloudSh,i.uniforms.uTime=Ve.uTime,i.uniforms.uNoiseTex=Ve.uNoiseTex,i.uniforms.uCloudTex=Ve.uCloudTex,i.uniforms.uCloudOrg=Ve.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=Ve[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?T_:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Si}${b_}${w_}${e}`).replace("#include <opaque_fragment>",`${n?E_:S_}${t}${A_}
#include <opaque_fragment>`)}var R_=`
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
`,C_=`
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
#endif`,P_=`
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
}`,p0={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function m0(i){let e={};for(let t of i)e[p0[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var l0=new Map;function la(i){let e=[...new Set(i)].sort().join("+"),t=l0.get(e);return t||(t=g0(m0(e.split("+")),e),l0.set(e,t)),t}function g0(i=m0(Object.keys(p0)),e="all"){let t=new un({color:16777215,gradientMap:jn});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=Ve.uSkyHor,n.uniforms.uSkyZen=Ve.uSkyZen,n.uniforms.uWet=Ve.uWet,n.uniforms.uNight=Ve.uNight,n.uniforms.uSunDir=Ve.uSunDir,n.uniforms.uSunCol=Ve.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=Ve[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),Xs(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${R_}`,P_+C_,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v17-"+e,t}function c0(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),Xs(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function I_(i){i.uniforms.uLightsOn=Ve.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function u0(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function Ph(i){return i.onBeforeCompile=e=>Xs(e),i.customProgramCacheKey=()=>"cs",i}var L_="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",D_=(i,e,t="")=>`
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
}`;function Ih(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let a of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[a]=Ve[a];s&&Object.assign(r.uniforms,s.uniforms),Xs(r,L_+(s?s.pars:""),D_(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}function v0(i,e){let t={};t.ground=g0(),t.color=c0(new un({vertexColors:!0,gradientMap:jn}),1.6,.1,"color-v3",u0),t.atlas=new un({vertexColors:!0,gradientMap:jn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=l=>{u0(l),I_(l),Xs(l)},t.atlas.customProgramCacheKey=()=>"atlas-v4",t.foliage=c0(new un({vertexColors:!0,gradientMap:a0}),2.6,.24,"foliage-v2"),t.lamp=new nn({color:15789798}),t.sig=new nn({color:new de(.15,1.7,1.1)}),t.sodium=new nn({color:new de(5,2.3,.65)}),t.decal=new un({vertexColors:!0,gradientMap:jn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=l=>Xs(l),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new un({map:e,vertexColors:!0,gradientMap:a0,alphaTest:.42,side:xn}),t.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",ot.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),Xs(l),l.uniforms.uTuftV=Ve.uTuftV,l.uniforms.uWind=Ve.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v3"),t.wire=new nn({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new Vn(n);return t.pool=new nn({map:a,color:16762746,transparent:!0,opacity:0,blending:qi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=a,t}var N_=se("#f2c230"),x0=se("#26272c");function Pc(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),a=Tn(s,"rw"),l=n*(a+.8),o=Dt(s),u=o.city+o.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return t}function _0(){let i=new $t,e=Ph(new un({vertexColors:!0,gradientMap:jn})),t=new nn({color:new de(6,.45,.3)}),n=new nn({color:new de(.22,.03,.03)}),s=[0,1].map(()=>{let r=new $t,a=new $t;r.add(a),a.position.set(-.42,1.02,-.02);let l=new dn,o=3.6;for(let h=0,f=0;f<o;h++,f+=.45)l.box(-Math.min(f+.45,o),-.065,-.065,-f,.065,.065,h%2?x0:N_);l.box(0,-.09,-.07,.38,.09,.07,x0);let u=new ft(l.build(),e);u.castShadow=!0,a.add(u);let c=[-.28,.28].map(h=>{let f=new ft(new Oo(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:u,lamps:c,L:o}});return i.visible=!1,{group:i,update(r,a,l,o,u){i.visible=!!r,r&&r.forEach((c,h)=>{let f=s[h];f.root.position.set(c.x-a.x,c.y,c.z-a.z),f.root.rotation.y=c.yaw,f.arm.scale.x=(c.rw+.25)/f.L,f.pivot.rotation.z=-l*(Math.PI/2-.06);let p=Math.floor(u*2.5)%2;f.lamps[0].material=o&&p===0?t:n,f.lamps[1].material=o&&p===1?t:n})}}}function U_(){let t=()=>{let d=document.createElement("canvas");return d.width=1024,d.height=512,d},n=t(),s=t(),r=n.getContext("2d"),a=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let o=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,o);for(let d=0;d<1024;d+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(d,0,2,o);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,o-14,1024,14);let u=[.1,.36,.62,.88].map(d=>d*1024),c=(d,x,b,_)=>{let y=r.createLinearGradient(d,x,d+b*.3,x+_);y.addColorStop(0,"#5d7fae"),y.addColorStop(.6,"#9db7d6"),y.addColorStop(1,"#2f3f55"),r.fillStyle=y,r.fillRect(d,x,b,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(d+b*.2,x),r.lineTo(d+b*.38,x),r.lineTo(d+b*.1,x+_),r.lineTo(d-b*.08,x+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(d,x,b,_)};for(let d=0;d<u.length-1;d++){let x=u[d]+40,b=u[d+1]-40,_=3,y=(b-x)/_;for(let S=0;S<_;S++)r.fillStyle="#6b737c",r.fillRect(x+S*y+2,34,y-4,58),c(x+S*y+6,38,y-12,50)}for(let d of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(d+2,34,28,58),c(d+5,38,22,50);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,22,60,o-36),r.fillStyle="#7b828a",r.fillRect(d-1,22,2,o-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(d-30,22,60,o-36),c(d-24,34,20,46),c(d+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let h=0,f=176,p=256,g=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,p,g),r.fillStyle="#20262e",r.fillRect(h+14,f+44,p-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+p/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,p-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,p,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,p,7);for(let d of[h+40,h+p-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(d,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(d+(d<h+p/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+g-30,p,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",h+p/2,f+220),a.fillStyle="#111",a.fillRect(h,f,p,g),a.fillStyle="#ff9a2a",a.font=`800 18px ${l}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26);for(let d of[h+40,h+p-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(d,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let v=d=>{let x=new Vn(d);return x.colorSpace=Kt,x.anisotropy=4,x},m=(d,x,b,_)=>({u0:d/1024,u1:(d+b)/1024,v0:1-(x+_)/512,v1:1-x/512});return{map:v(n),em:v(s),side:m(0,0,1024,o),sideR:{...m(0,0,1024,o),flip:!0},front:m(h,f,p,g),plain:m(342,202,28,28)}}function y0(){let i=U_(),e=Ph(new un({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:jn})),t=new dn({uv:!0}),n=[1,1,1],s=se("#9aa1a9"),r=se("#3b4047"),a=se("#2a2d33"),l=19.5,o=.6,u=3,c=1.45,h=.95,f=4,p=u*l+(u-1)*o;for(let x=0;x<u;x++){let b=-p/2+l/2+x*(l+o),_=b-l/2,y=b+l/2;t.quad([_,h,c],[y,h,c],[y,f,c],[_,f,c],n,i.side),t.quad([y,h,-c],[_,h,-c],[_,f,-c],[y,f,-c],n,i.side);let S=x===u-1,R=x===0;t.quad([y,h,c],[y,h,-c],[y,f,-c],[y,f,c],S?n:se("#c9ced4"),S?i.front:i.plain),t.quad([_,h,-c],[_,h,c],[_,f,c],[_,f,-c],R?n:se("#c9ced4"),R?i.front:i.plain),t.box(_+.1,f,-c+.1,y-.1,f+.14,c-.1,s,null,{noBottom:!0});for(let M of[b-5.5,b+5.5])t.box(M-1.3,f+.14,-.8,M+1.3,f+.55,.8,se("#c4c9cf"),null,{noBottom:!0});t.box(_+2,.45,-c+.25,y-2,h,c-.25,a);for(let M of[b-7,b+7])t.box(M-1.3,.1,-1.2,M+1.3,.75,1.2,r);if(x===0){let M=b-3,E=f+.55;t.box(M-.6,f+.14,-.6,M+.6,f+.3,.6,r),t.rod([M-.5,f+.3,0],[M,E+.9,0],.03,.03,4,r),t.rod([M+.5,f+.3,0],[M,E+.9,0],.03,.03,4,r),t.rod([M,E+.9,-.85],[M,E+.9,.85],.03,.03,4,r)}}let g=new ft(t.build(),e);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let v=new $t;v.add(g),v.visible=!1;let m={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:p},d={};return{group:v,st:m,start(x,b,_=16){Object.assign(m,{active:!0,sx:x,dir:b,speed:_,u:-b*290,ds:b>0?-2:2,cleared:!1}),v.visible=!0},update(x,b,_,y,S){if(!m.active)return;m.u+=m.dir*m.speed*x;let R=m.u-m.dir*m.length/2;if(!m.cleared&&(m.dir>0?R>S+1:R<-S-1)&&(m.cleared=!0),Math.abs(m.u)>330){m.active=!1,v.visible=!1;return}b.at(m.sx,d),v.position.set(d.x+d.fx*m.ds+d.rx*m.u-_.x,d.y+.34,d.z+d.fz*m.ds+d.rz*m.u-_.z),v.rotation.y=d.h+(m.dir>0?Math.PI:0),e.emissiveIntensity=.3+y*1.1}}}var F_='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',qs=2048,Ys=4096;function Dc(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var T0=Dc(256,256);{let i=T0.getContext("2d"),e=i.createImageData(256,256),t=Pn(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var Lh=class{constructor(){this.cA=Dc(qs,Ys),this.cE=Dc(qs/2,Ys/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,qs/2,Ys/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,qs,Ys),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(T0,"repeat")}add(e,t,n,s){if(this.x+t+4>qs&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Ys)throw new Error("atlas full at "+e);let a={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let o of[this.a,this.e])o.save(),o===this.e&&o.scale(.5,.5),o.translate(a.x,a.y),o.beginPath(),o.rect(0,0,t,n),o.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5;return this.cells[e]={u0:(a.x+l)/qs,u1:(a.x+t-l)/qs,v0:1-(a.y+n-l)/Ys,v1:1-(a.y+l)/Ys,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new Vn(n);return s.colorSpace=Kt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Wn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function En(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function $r(i,e,t,n,s,r){let a=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,o])=>a.addColorStop(l,o)),i.fillStyle=a,i.fillRect(e,t,n,s)}function Yr(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),$r(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,t,1.5)}En(i,e,t,n,.13)}function Yi(i,e,t,n,s,r=.13){let a=i.createLinearGradient(0,t,0,t+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(e,t,n,s)}function ae(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Zr(i,e,t,n,s,r,a="#d9dde2",l="rgba(40,45,60,0.55)"){ae(i,e-r,t-r,n+2*r,s+2*r,a),ae(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function Zi(i,e,t,n,s,r,a=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),o=a?"#4f78b8":"#5f93d6",u=a?"#86a9d4":"#a6c8ec";l.addColorStop(0,o),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let c=e+n*r();i.beginPath(),i.moveTo(c,t),i.lineTo(c+n*.18,t),i.lineTo(c-n*.25,t+s),i.lineTo(c-n*.43,t+s),i.fill(),i.restore()}function M0(i,e,t,n,s,r="#efe6d2"){ae(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(e+a,t,1.5,s);$r(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function Nc(i,e,t=800){i.font=`${t} ${e}px ${F_}`}function At(i,e,t,n,s,r,a,l=800,o=null){Nc(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,Nc(i,u,l);i.textAlign="center",i.textBaseline="middle",o&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=o,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=a,i.fillText(e,t,n)}function Ic(i,e,t,n,s,r,a,l=800,o=null){let u=[...e],c=u.length,h=Math.min(r*1.05,(s-n)/c),f=Math.min(r,h*.95);Nc(i,f,l),i.textAlign="center",i.textBaseline="middle",u.forEach((p,g)=>{let v=n+(s-n-h*c)/2+h*(g+.5);o&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=o,i.strokeText(p,t,v)),i.fillStyle=a,i.fillText(p,t,v)})}function Zs(i,e,t,n,s,r,a,l=!0){if(ae(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",$r(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let o=e+n*.2*a();o<e+n-4;o+=n*(.18+a()*.3)){let u=Math.min(n*(.1+a()*.2),e+n-o),c=s*(.12+a()*.25);i.fillRect(o,t+s-c,u,c)}}i.restore()}function O_(i,e,t,n,s,r,a){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",ae(e,t,n,s,r,a),e.globalCompositeOperation="lighter",e.globalAlpha=.22,ae(e,t,n,s,r,a),e.globalCompositeOperation="multiply",e.globalAlpha=1,$r(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var b0=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Lc=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],S0=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],B_=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function E0(){let i=new Lh,e=Pn(2024),t=240,n=(o,u,c,h,f,p,g=!1)=>{Yr(o,i,c,h,"#ece8e0",0);let v=Pn(p*31+(f?7:0)+5);if(p===0){let m=c*.14,d=h*.22,x=c*.72,b=h*.5;Zr(o,m,d,x,b,5),Zi(o,m,d,x/2,b,v),Zi(o,m+x/2,d,x/2,b,v);let _=v()<.8?x*(.18+v()*.25):0;_&&M0(o,m+2,d+2,_,b-4,v()<.5?"#efe6d2":"#d9e4ea"),ae(o,m+x/2-2,d,4,b,"#cfd4da"),ae(o,m-8,d+b+5,x+16,6,"#d8d8d4"),Yi(o,m-4,d+b+11,8,60),Yi(o,m+x-4,d+b+11,8,60),f&&(Zs(u,m,d,x,b,g?"#e6eeff":"#ffcf8f",v),_&&ae(u,m+2,d+2,_,b-4,g?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),ae(u,m+x/2-2,d,4,b,"#000"))}else if(p===1){for(let m of[.12,.56]){let d=c*m,x=h*.28,b=c*.3,_=h*.36;Zr(o,d,x,b,_,4),Zi(o,d,x,b,_,v,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(d,x,b,_*.45),Yi(o,d,x+_+6,b,40,.1),f&&v()<.8&&Zs(u,d,x,b,_,v()<.5?"#ffd9a0":"#e8f0ff",v)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(c*.88,h*.2,9,0,7),o.fill()}else if(p===2){let m=c*.1,d=h*.12,x=c*.8,b=h*.84;Zr(o,m,d,x,b,4),Zi(o,m,d,x/2,b,v),Zi(o,m+x/2,d,x/2,b,v);let _=x*(.2+v()*.3);M0(o,m+2,d+2,_,b-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),ae(o,m+x/2-2,d,4,b,"#cfd4da"),f&&(Zs(u,m,d,x,b,g?"#e6eeff":"#ffcb85",v),ae(u,m+2,d+2,_,b-4,g?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),ae(u,m+x/2-2,d,4,b,"#000"))}else if(p===3){Yr(o,i,c,h,"#dfe3e6",0);let m=h*.25,d=h*.55;Zi(o,0,m,c,d,v,1);for(let x=0;x<=c;x+=c/4)ae(o,x-2,m,4,d,"#8d98a6");if(ae(o,0,m-4,c,4,"#8d98a6"),ae(o,0,m+d,c,5,"#7d8796"),f)for(let x=0;x<4;x++)v()<.7&&Zs(u,x*c/4+2,m,c/4-4,d,v()<.6?"#f2f6ff":"#ffe2b0",v)}else if(p===4){o.fillStyle="#6b4a35",o.fillRect(0,0,c,h);for(let _=0;_<h;_+=12)ae(o,0,_,c,2,"rgba(30,18,10,0.35)"),ae(o,0,_+2,c,1,"rgba(255,220,180,0.06)");En(o,i,c,h,.15);let m=c*.18,d=h*.25,x=c*.64,b=h*.45;ae(o,m-6,d-6,x+12,b+12,"#4a3020"),ae(o,m,d,x,b,"#efe4c8"),o.fillStyle="#5a3a26";for(let _=1;_<6;_++)o.fillRect(m+_*x/6-1.5,d,3,b);for(let _=1;_<3;_++)o.fillRect(m,d+_*b/3-1.5,x,3);if(f){Zs(u,m,d,x,b,"#ffc070",v,!1),u.fillStyle="#000";for(let _=1;_<6;_++)u.fillRect(m+_*x/6-1.5,d,3,b);for(let _=1;_<3;_++)u.fillRect(m,d+_*b/3-1.5,x,3)}}else if(p===5){ae(o,c*.08,0,7,h,"#bdbdb6"),ae(o,c*.08+5,0,2,h,"rgba(0,0,0,0.2)");let m=c*.55,d=h*.3,x=c*.22,b=h*.24;Zr(o,m,d,x,b,3),ae(o,m,d,x,b,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(m,d,x,b/2),Yi(o,m,d+b+4,x,50,.12),ae(o,c*.22,h*.55,26,34,"#cfcfca"),ae(o,c*.22+4,h*.55+6,18,12,"#9aa2a8"),f&&Zs(u,m,d,x,b,g?"#eef2ff":"#fff0d8",v,!1)}else if(p===6){let m=c*.4,d=h*.35,x=c*.2,b=h*.28;Zr(o,m,d,x,b,3),Zi(o,m,d,x,b,v,1),Yi(o,m,d+b+4,x,70,.14),f&&Zs(u,m,d,x,b,g?"#e8efff":"#ffd9a0",v)}};for(let o=0;o<7;o++)i.add("win"+o,t,t,(u,c,h,f)=>n(u,c,h,f,!1,o)),i.add("win"+o+"L",t,t,(u,c,h,f)=>n(u,c,h,f,!0,o));for(let o of[0,2,5,6])i.add("win"+o+"C",t,t,(u,c,h,f)=>n(u,c,h,f,!0,o,!0));i.add("plain",t,t,(o,u,c,h)=>{Yr(o,i,c,h,"#ece8e0"),Yi(o,c*.3,0,12,h*.6,.06)}),i.add("concrete",t,t,(o,u,c,h)=>{Yr(o,i,c,h,"#d9d7d0",60);for(let f=0;f<6;f++)Yi(o,f*41%c,0,10,h*.5,.07)});let s=288,r=(o,u,c,h,f,p)=>{let g=Pn(p);if(Yr(o,i,c,h,"#e6e2da"),f==="glass"||f==="door"||f==="konbini"||f==="cafe"){let m=h*.22,d=c-12,x=h*.78-4;ae(o,6,m,d,x,f==="konbini"?"#f6f4ea":f==="cafe"?"#7a5a40":"#8a7a68");for(let _=m+x*.25;_<m+x;_+=x*.22){ae(o,6,_,d,3,"rgba(60,50,40,0.5)");for(let y=9;y<6+d-6;y+=6+g()*8)o.fillStyle=e.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(y,_-6-g()*10,4+g()*5,6+g()*10)}f==="konbini"&&ae(o,6,m+4,d,5,"#ffffff"),f==="door"&&(ae(o,c/2-30,m+18,60,24,"#fff"),At(o,"\u55B6\u696D\u4E2D",c/2,m+30,54,18,"#c82828")),f==="glass"&&g()<.7&&(ae(o,16,m+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),At(o,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,m+44,40,16,"#c02020")),O_(o,u,6,m,d,x,f==="konbini"?"#e4eef8":f==="cafe"?"#f0a868":"#f2d2a6"),o.save(),o.globalAlpha=.35,Zi(o,6,m,d,x,g),o.restore(),ae(o,6,m,d,4,"#4a4e57"),ae(u,6,m,d,4,"#000"),f==="door"&&(ae(o,c/2-2,m,4,x,"#4a4e57"),ae(u,c/2-2,m,4,x,"#000"),ae(o,c/2-14,m+x*.45,3,40,"#c0c4c8"),ae(o,c/2+11,m+x*.45,3,40,"#c0c4c8")),f==="cafe"&&(ae(o,c*.62,h-70,46,62,"#2c3a30"),ae(u,c*.62,h-70,46,62,"#000"),At(o,"\u30E9\u30F3\u30C1",c*.62+23,h-50,40,13,"#fff",700))}else if(f==="shutter"){let m=h*.2,d=c-12,x=h*.8;ae(o,6,m,d,x,"#b8bcc0");for(let b=m;b<m+x;b+=7)ae(o,6,b,d,2,"rgba(60,64,72,0.35)"),ae(o,6,b+2,d,1,"rgba(255,255,255,0.35)");ae(o,6,m,d,10,"#8f949a"),En(o,i,c,h,.12),g()<.5&&(ae(o,c/2-40,m+x*.35,80,26,"#fff"),At(o,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),c/2,m+x*.35+13,74,16,"#333",700))}else if(f==="noren"){ae(o,0,0,c,h,"#5b3c28");for(let _=0;_<c;_+=10)ae(o,_,h*.2,3,h*.8,"rgba(25,15,8,0.6)");En(o,i,c,h,.15);let v=c*.12,m=h*.24,d=c*.76,x=h*.34,b=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);ae(o,v,m,d,x,b);for(let _=1;_<3;_++)ae(o,v+d*_/3-1,m+x*.25,2,x*.75,"rgba(255,255,255,0.25)");At(o,e.pick(B_),c/2,m+x*.55,d*.9,46,"#f5f0e6",800),ae(o,v,m,d,6,"#3a2a1c"),u.fillStyle="#ffae5c",u.fillRect(v,m+x,d,h-m-x),u.fillStyle="rgba(255,170,90,0.6)",u.fillRect(v,m,d,x),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c*.9,h*.36,13,19,0,0,7),o.fill(),At(o,"\u9152",c*.9,h*.36,16,14,"#fff"),u.fillStyle="#ff6a3a",u.beginPath(),u.ellipse(c*.9,h*.36,13,19,0,0,7),u.fill()}else if(f==="house"){let v=c*.18,m=h*.3,d=c*.34,x=h*.7;ae(o,v-6,m-6,d+12,x+6,"#9a9a96"),ae(o,v,m,d,x,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),ae(o,v+d-14,m+x*.5,4,22,"#d8d0c0"),ae(o,v+6,m+10,d-12,x*.25,"rgba(255,255,255,0.18)"),ae(o,c*.62,h*.48,30,22,"#cfcfca"),ae(o,c*.62+6,h*.48+5,18,4,"#555");let b=c*.6,_=h*.22,y=c*.3,S=h*.2;Zr(o,b,_,y,S,3),Zi(o,b,_,y,S,g,1);for(let R=0;R<3;R++)o.fillStyle="#7b5a43",o.fillRect(c*.6+R*22,h-26,16,18),o.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(c*.6+R*22+8,h-32,11,0,7),o.fill();u.fillStyle="#ffd08a",u.beginPath(),u.arc(v+d+14,m+8,6,0,7),u.fill(),g()<.6&&(u.fillStyle="#ffcf8f",u.fillRect(b,_,y,S))}else if(f==="garage"){let m=h*.25,d=c-16,x=h*.75;ae(o,8,m,d,x,"#efefec");for(let b=m;b<m+x;b+=9)ae(o,8,b,d,1.5,"rgba(80,80,90,0.25)");En(o,i,c,h,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,u)=>{i.add("shop_"+o,t,s,(c,h,f,p)=>r(c,h,f,p,o,100+u)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",t,s,(c,h,f,p)=>r(c,h,f,p,o,200+u))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(u,c,h,f)=>{let[p,g]=Lc[o%Lc.length],v=b0[o*7%b0.length];ae(u,0,0,h,f,p),ae(u,0,0,h,5,"rgba(255,255,255,0.35)"),ae(u,0,f-6,h,6,"rgba(0,0,0,0.18)"),o%3===0&&(ae(u,12,12,f-24,f-24,g),At(u,v[0],12+(f-24)/2,f/2,f-30,34,p)),At(u,v,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g,900),En(u,i,h,f,.08),c.fillStyle=p==="#fff"||p==="#f5efe0"?"#d9d6cc":p,c.fillRect(0,0,h,f),c.globalAlpha=.9,At(c,v,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g==="#fff"?"#ffffff":g,900),c.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(u,c,h,f)=>{let[p,g]=Lc[(o*3+1)%Lc.length],v=S0[o%S0.length];ae(u,0,0,h,f,p),u.strokeStyle="rgba(0,0,0,0.3)",u.lineWidth=4,u.strokeRect(2,2,h-4,f-4),Ic(u,v,h/2,12,f-12,56,g,900),En(u,i,h,f,.08),ae(c,0,0,h,f,p==="#fff"?"#e8e8e8":p),Ic(c,v,h/2,12,f-12,56,g==="#fff"?"#fff":g,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,u,c],h)=>i.add("bb"+h,512,240,(f,p,g,v)=>{ae(f,0,0,g,v,"#fbfaf5"),ae(f,0,0,g,v*.62,c),At(f,o,g/2,v*.32,g*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),At(f,u,g/2,v*.8,g*.85,52,"#333",800),En(f,i,g,v,.08),ae(p,0,0,g,v,"#555"),p.globalAlpha=.85,ae(p,0,0,g,v*.62,c),At(p,o,g/2,v*.32,g*.9,96,"#fff",900),p.globalAlpha=1})),i.add("konbini_band",480,72,(o,u,c,h)=>{ae(o,0,0,c,h,"#fbfbf7"),ae(o,0,h*.62,c,h*.14,"#2a9a4a"),ae(o,0,h*.76,c,h*.12,"#f08a24"),ae(o,0,h*.88,c,h*.12,"#2f6fd8"),At(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900),u.fillStyle="#f3f6f0",u.fillRect(0,0,c,h),At(u,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(u,c,h,f)=>{let p=["#d8352a","#2f6fd8","#f4f4f0"][o];ae(u,0,0,h,f,p),ae(u,8,10,h-16,f*.55,"#eef4f8");let g=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let v=0;v<4;v++)for(let m=0;m<6;m++){let d=14+m*17,x=18+v*30;u.fillStyle=g[(v*6+m+o)%g.length],u.fillRect(d,x,11,20),u.fillStyle="rgba(255,255,255,0.5)",u.fillRect(d+2,x+2,3,14),u.fillStyle="#2a2a2a",u.fillRect(d,x+23,11,3)}ae(u,10,f*.62,h-20,22,"#222"),ae(u,h-34,f*.66,14,22,"#bbb"),ae(u,14,f*.82,h-28,22,"#1b1b1b"),At(u,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],h/2,f*.62+11,h-28,14,"#fff",700),En(u,i,h,f,.08),c.fillStyle="#f2f8ff",c.fillRect(8,10,h-16,f*.55);for(let v=0;v<4;v++)for(let m=0;m<6;m++)c.fillStyle=g[(v*6+m+o)%g.length],c.fillRect(14+m*17,18+v*30,11,20);c.fillStyle="#9fd0ff",c.fillRect(10,f*.62,h-20,22)});i.add("ac",128,88,(o,u,c,h)=>{ae(o,0,0,c,h,"#e9e9e4"),$r(o,0,0,c,h,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(c*.4,h*.5,h*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let f=6;f<h*.36;f+=6)o.beginPath(),o.arc(c*.4,h*.5,f,0,7),o.stroke();for(let f=12;f<h-10;f+=6)ae(o,c*.78,f,c*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,u,c,h)=>{ae(o,0,0,c,h,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,c-6,h-6),At(o,"\u54C1\u5DDD 580",c/2,16,c*.6,14,"#2f5a2f",700),At(o,"\u3042 12-34",c/2,42,c*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(c-2,2),o.lineTo(c/2,h-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(c-10,7),o.lineTo(c/2,h-12),o.fill(),At(o,"\u6B62\u307E\u308C",c/2,34,c*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(c/2,22),o.lineTo(c/2+22,50),o.lineTo(c/2+8,50),o.lineTo(c/2+8,88),o.lineTo(c/2-8,88),o.lineTo(c/2-8,50),o.lineTo(c/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(c/2,h/2,c/2-9,0,7),o.stroke(),At(o,"30",c/2,h/2+2,c*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,u,c,h)=>{ae(o,0,0,c,h,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,c-6,h-6),Ic(o,"\u672C\u753A\u4E8C\u4E01\u76EE",c/2,10,h-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(u,c,h,f)=>{let p=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];ae(u,0,0,h,f,p),ae(u,4,4,h-8,f*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),At(u,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],h/2,f*.25,h-12,18,"#fff",900);for(let g=0;g<4;g++)ae(u,8,f*.58+g*8,h-16-g%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,t,88,(u,c,h,f)=>{let p=["#e9e3d6","#dfe6ea","#efe2dc"][o];if(Yr(u,i,h,f,p),o===1)for(let g=10;g<h-6;g+=h/6)ae(u,g,10,h/6-8,f-20,"rgba(220,235,245,0.9)"),u.fillStyle="rgba(255,255,255,0.45)",u.fillRect(g,10,h/6-8,(f-20)*.4);else{ae(u,0,0,h,7,"rgba(255,255,255,0.4)");for(let g=h/3;g<h;g+=h/3)ae(u,g-1,0,2,f,"rgba(0,0,0,0.08)")}ae(u,0,f-6,h,6,"rgba(0,0,0,0.12)"),Yi(u,h*.3,f-6,10,10,.2)});i.add("kawara",256,256,(o,u,c,h)=>{ae(o,0,0,c,h,"#58617a");for(let f=0;f<h;f+=16)$r(o,0,f,c,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let f=0;f<c;f+=20)ae(o,f,0,2,h,"rgba(0,0,0,0.18)");En(o,i,c,h,.12)}),i.add("wood",256,256,(o,u,c,h)=>{ae(o,0,0,c,h,"#6d4c37");for(let f=0;f<h;f+=14)ae(o,0,f,c,2,"rgba(25,15,8,0.4)"),ae(o,0,f+2,c,1,"rgba(255,220,180,0.07)");En(o,i,c,h,.16)}),i.add("block",256,128,(o,u,c,h)=>{ae(o,0,0,c,h,"#c9c7bf");for(let f=0;f<h;f+=32)for(let p=f/32%2?-32:0;p<c;p+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(p+1,f+1,62,30);for(let f=0;f<c;f+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(f+20,40,24,16);En(o,i,c,h,.15),Yi(o,0,0,c,40,.1)}),i.add("lantern",64,96,(o,u,c,h)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),o.fill();for(let f=16;f<h-12;f+=7)ae(o,4,f,c-8,1.5,"rgba(0,0,0,0.2)");ae(o,c/2-14,2,28,8,"#222"),ae(o,c/2-14,h-10,28,8,"#222"),At(o,"\u796D",c/2,h/2,c*.6,28,"#fff",900),u.fillStyle="#ff6a35",u.beginPath(),u.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),u.fill()}),i.add("busstop",96,96,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.stroke(),At(o,"\u30D0\u30B9\u505C",c/2,h/2,c*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>ae(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,u,c,h)=>{o.save(),o.translate(c/2,h/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(c/2-22,h/2-6,44,18),o.fillRect(c/2-16,h/2-16,18,12),o.fillRect(c/2+8,h/2-13,5,7),o.beginPath(),o.arc(c/2-12,h/2+15,5,0,7),o.arc(c/2+12,h/2+15,5,0,7),o.fill(),At(o,"\u8E0F\u5207",c/2,h/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((o,u)=>i.add("bridge"+u,64,176,(c,h,f,p)=>{ae(c,0,0,f,p,"#b9b5ab"),En(c,i,f,p,.2),ae(c,6,6,f-12,p-12,"#a7a398"),Ic(c,o,f/2,14,p-14,34,"#3f3c37",800)})),i.add("signal",240,84,(o,u,c,h)=>{ae(o,0,0,c,h,"#4a4d52"),ae(o,0,0,c,5,"#5c6066"),En(o,i,c,h,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([f,p])=>{o.fillStyle="#26282c",o.beginPath(),o.arc(p,h/2,33,0,7),o.fill(),o.fillStyle=f,o.beginPath(),o.arc(p,h/2,27,0,7),o.fill()})}),i.add("ped_sig",64,128,(o,u,c,h)=>{ae(o,0,0,c,h,"#3d4045"),o.fillStyle="#5a1814",o.fillRect(8,8,c-16,h/2-12),o.fillStyle="#0d4f44",o.fillRect(8,h/2+4,c-16,h/2-12),o.fillStyle="rgba(255,255,255,0.18)",o.beginPath(),o.arc(c/2,h*.18,6,0,7),o.fill(),o.fillRect(c/2-5,h*.24,10,18)}),i.add("tomare",256,96,(o,u,c,h)=>{o.clearRect(0,0,c,h),o.fillStyle="rgba(244,244,238,0.012)",o.fillRect(0,0,c,h),At(o,"\u6B62\u307E\u308C",c/2,h/2+4,c*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((o,u)=>i.add("hodokyo"+u,256,44,(c,h,f,p)=>{ae(c,0,0,f,p,"#1f4f96"),c.strokeStyle="#fff",c.lineWidth=3,c.strokeRect(4,4,f-8,p-8),At(c,o,f/2,p/2+1,f*.85,28,"#fff",800)}));let l=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];l.forEach(([o,u,c],h)=>{let f=l[(h+3)%4][0],p=l[(h+1)%4][0];i.add("ekimei"+h,320,124,(g,v,m,d)=>{ae(g,0,0,m,d,"#3a3d42"),ae(g,4,4,m-8,d-8,"#f8f8f3"),At(g,u,m/2,20,m*.5,15,"#2b2b2b",700),At(g,o,m/2,52,m*.6,40,"#151515",900),At(g,c,m/2,80,m*.5,12,"#555",600),ae(g,4,d-30,m-8,26,"#1f9a50"),g.fillStyle="#fff",Nc(g,12,700),g.textBaseline="middle",g.textAlign="left",g.fillText("\u2190 "+f,12,d-17),g.textAlign="right",g.fillText(p+" \u2192",m-12,d-17),En(g,i,m,d,.06),ae(v,4,4,m-8,d-8,"#8a8a84")}),i.add("ekiplate"+h,220,48,(g,v,m,d)=>{ae(g,0,0,m,d,"#4b3326"),En(g,i,m,d,.2),At(g,o+"\u99C5",m/2,d/2+1,m*.8,30,"#f3ead8",800)})});for(let o of["l","r"])i.add("chev_"+o,96,120,(u,c,h,f)=>{ae(u,0,0,h,f,"#f4f4ef"),ae(u,4,4,h-8,f-8,"#1e5bb8"),u.fillStyle="#f8f8f4",u.beginPath();let p=o==="r"?1:-1,g=h/2,v=f/2;u.moveTo(g-p*26,v-40),u.lineTo(g+p*22,v),u.lineTo(g-p*26,v+40),u.lineTo(g-p*8,v+40),u.lineTo(g+p*40,v),u.lineTo(g-p*8,v-40),u.closePath(),u.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((o,u)=>i.add("tunnel"+u,360,80,(c,h,f,p)=>{ae(c,0,0,f,p,"#e9e7e0"),ae(c,4,4,f-8,p-8,"#24403b"),En(c,i,f,p,.08),At(c,o,f/2,p*.42,f*.8,38,"#f4f2ea",800),At(c,"L = 170 m",f/2,p*.8,f*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(o,u,c,h)=>{ae(o,0,0,c,h,"#f6f6f2"),o.fillStyle="#d42a22";for(let f=-20;f<h;f+=26)o.beginPath(),o.moveTo(4,f),o.lineTo(c/2,f+20),o.lineTo(c-4,f),o.lineTo(c-4,f+11),o.lineTo(c/2,f+31),o.lineTo(4,f+11),o.closePath(),o.fill();o.strokeStyle="#222",o.lineWidth=3,o.strokeRect(1.5,1.5,c-3,h-3)}),i.add("xing_plate",128,48,(o,u,c,h)=>{ae(o,0,0,c,h,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,c-6,h-6),At(o,"\u8E0F\u5207\u6CE8\u610F",c/2,h/2,c*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,u,c,h)=>{o.clearRect(0,0,c,h),ae(o,0,0,c,7,"#e9ebee"),ae(o,0,6,c,2,"rgba(60,70,80,0.5)"),ae(o,0,h-6,c,6,"#d5d8dc");for(let f=3;f<c;f+=9)ae(o,f,7,3,h-13,"#e2e5e9"),ae(o,f+2,7,1,h-13,"rgba(70,80,90,0.45)")}),i}function w0(i){let n=Dc(1024,2048),s=n.getContext("2d"),r=Pn(321),a={},l={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},o=(h,f,p)=>{let g=l[h],v=256,m=h==="pine",d=h==="sakura";s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let x=[[v,v,m?80:92]];for(let _=0;_<(m?10:14);_++){let y=r()*6.28,S=45+r()*120;x.push([v+Math.cos(y)*S,v+Math.sin(y)*S*(m?.42:.9),Math.min(34+r()*52,232-S)])}let b=d?2300:m?2600:2300;for(let _=0;_<b;_++){let y=x[Math.floor(r()*x.length)],S=r()*6.28,R=Math.sqrt(r())*y[2],M=y[0]+Math.cos(S)*R,E=y[1]+Math.sin(S)*R*(m?.45:1),A=R/y[2],P=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(A>.82?.5:0))));if(s.fillStyle=g[P],d){let I=7+r()*8;s.beginPath(),s.arc(M,E,I,0,7),s.fill(),r()<.25&&(s.fillStyle=g[4],s.beginPath(),s.arc(M-I*.3,E-I*.3,I*.4,0,7),s.fill())}else if(m)s.save(),s.translate(M,E),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(h==="momiji"){let I=8+r()*7;s.save(),s.translate(M,E),s.rotate(r()*6.28),s.beginPath();for(let D=0;D<10;D++){let w=D%2?I*.42:I,L=D/10*6.2832;s.lineTo(Math.cos(L)*w,Math.sin(L)*w)}s.closePath(),s.fill(),s.restore()}else if(h==="ginkgo"){let I=9+r()*7;s.save(),s.translate(M,E),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,I,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let I=9+r()*10;s.beginPath(),s.ellipse(M,E,I,I*.55,r()*6.28,0,7),s.fill()}}for(let _=0;_<90;_++){let y=r()*6.28,S=150+r()*85,R=v+Math.cos(y)*S,M=v+Math.sin(y)*S*(m?.45:.92);s.fillStyle=g[1+Math.floor(r()*4)],m?(s.save(),s.translate(R,M),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(R,M,d?6+r()*6:7+r()*6,0,7),s.fill())}if(d)for(let _=0;_<14;_++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let y=v+(r()-.5)*300,S=v+60+r()*120;s.beginPath(),s.moveTo(y,S),s.lineTo(y+(r()-.5)*40,S-20-r()*30),s.stroke()}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}},u=(h,f,p,g)=>{s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let v=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],m=g?120:170;for(let d=0;d<m;d++){let x=256+(r()-.5)*(g?330:380)*Math.sqrt(r()),b=150+r()*(g?230:300)*(1-Math.abs(x-256)/300),_=(x-256)*.35+(r()-.5)*90,y=9+r()*9,S=x+_,R=512-b,M=Math.min(4,Math.floor(r()*2.2+b/380*2.6)),E=s.createLinearGradient(0,512,0,R);E.addColorStop(0,v[0]),E.addColorStop(.6,v[Math.max(1,M-1)]),E.addColorStop(1,v[M]),s.fillStyle=E,s.beginPath(),s.moveTo(x-y/2,512),s.quadraticCurveTo(x-y/2+_*.3,512-b*.55,S,R),s.quadraticCurveTo(x+y/2+_*.3,512-b*.5,x+y/2,512),s.fill()}if(g)for(let d=0;d<16;d++){let x=110+r()*290,b=150+r()*200,_=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(x+(r()-.5)*20,512),s.quadraticCurveTo(x+(r()-.5)*30,(b+512)/2,x,b),s.stroke(),_<.55){s.fillStyle="#fbfaf2";for(let y=0;y<12;y++){let S=y/12*6.283;s.beginPath(),s.ellipse(x+Math.cos(S)*11,b+Math.sin(S)*11,9,4.5,S,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(x,b,8,0,7),s.fill()}else if(_<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(x,b,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(x-3,b-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let y=0;y<6;y++)s.beginPath(),s.arc(x+(r()-.5)*16,b+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512),o("momiji",0,1024),o("ginkgo",512,1024),u("grass",0,1536,!1),u("flowers",512,1536,!0);let c=new Vn(n);return c.colorSpace=Kt,c.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:c,cells:a,tuftV:[0,1-1536/2048]}}var pn=[1,1,1],ce={pole:se("#b1b0a9"),metal:se("#8d9198"),black:se("#2a2b30"),yellow:se("#f2c230"),white:se("#f4f3ee"),trans:se("#a0a3a8"),lampPole:se("#727780"),lampHead:se("#dcdcd6"),trunk:se("#6a5444"),trunkDark:se("#4b3a33"),leaf:se("#86ba4c"),leafShade:se("#2c6640"),sakura:se("#ffd3e3"),sakuraShade:se("#de94b4"),pine:se("#55874c"),pineShade:se("#1d4632"),cedar:se("#41713e"),cedarShade:se("#1b3e2a"),roof:se("#bdbbb3"),parapet:se("#dcdad2"),pipe:se("#c4c4bf"),orange:se("#f07a22"),red:se("#d8352a"),vermilion:se("#e2482c"),concrete:se("#c9c7c0"),stone:se("#a8a69e"),terracotta:se("#b8653d"),rail:se("#eeeeea")},Ji=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(se),z_=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(se),Uh=null;function R0(i){Uh=i}var Fi=i=>Uh.uv(i),ca=Fi,k_=(i,e)=>Uh.has(e+"2")&&i()<.5?e+"2":e;function Fc(i,e,t,n,s=0){let r=new je().makeRotationY(s);r.setPosition(e,t,n);let a=new je().multiplyMatrices(i,r);return a.groundY=i.groundY,a}var Fh=(i,e,t,n)=>{if(!i.hasLit||e.charCodeAt(0)!==119)return;let s=e.charCodeAt(e.length-1);if(s!==76&&s!==67)return;let r=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((r-Math.floor(r))*231)},ln=(i,e,t,n,s,r,a,l=pn)=>{Fh(i,a,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,Fi(a)),i.litV=0},Ki=(i,e,t,n,s,r,a,l=pn)=>{Fh(i,a,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,Fi(a)),i.litV=0},ji=(i,e,t,n,s,r,a,l=pn)=>{Fh(i,a,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,Fi(a)),i.litV=0},Jr=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Fi(r):void 0),H_=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function C0(i){return H_.map(e=>new H(e[0],e[1],e[2]).applyMatrix4(i))}function Oh(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,ce.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?ce.black:ce.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,ce.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,ce.metal);let a=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of a)s.cyl(0,r-.53,u,.05,.035,.17,6,ce.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,ce.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,ce.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,ce.trans),s.box(-.06,7.2,.12,.06,7.35,.26,ce.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,ce.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,ce.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,ce.concrete);for(let u=2.4,c=0;u<r-2;u+=.45,c++)s.rod([0,u,0],[c%2?.3:-.3,u,0],.015,.015,3,ce.metal);return i.atlas.setM(e),ln(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&ln(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...a.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new H(u[0],u[1],u[2]).applyMatrix4(e))}var Uc=new H;function Js(i,e,t,n,s,r){i.lamps&&(Uc.set(t,n,s).applyMatrix4(e),i.lamps.push(Uc.x,Uc.y,Uc.z,r))}function Bh(i,e,t,n={}){let s=i.color;s.setM(e),Js(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,ce.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,ce.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,ce.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,ce.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,pn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],pn,{u0:0,u1:1,v0:0,v1:1})}function P0(i,e,t=.04){let n=i.color;n.setM(e),Js(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,ce.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,ce.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,ce.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,pn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],pn,{u0:0,u1:1,v0:0,v1:1})}function ua(i,e){let t=i.color;t.setM(e),Js(i,e,0,3.5,0,.9),t.cyl(0,0,0,.07,.06,3.2,8,se("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,se("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,se("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,pn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],pn,{u0:0,u1:1,v0:0,v1:1})}function zh(i,e,t){let n=Math.floor(t()*3),s=[ce.red,se("#2f6fd8"),ce.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,In(s,.8)),i.atlas.setM(e),ln(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Dh(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,se("#e6e6e1")),i.atlas.setM(e),ln(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function I0(i,e,t){let n=i.color;n.setM(e);let s=t.pick([se("#c8ccd2"),se("#c0392b"),se("#2c6fb7"),se("#2b2b2b"),se("#e8c84a"),se("#e98fb0")]);for(let a of[-.52,.52])for(let l=0;l<12;l++){let o=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([a+Math.cos(o)*.33,.34+Math.sin(o)*.33,0],[a+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,ce.black)}let r=(a,l)=>n.rod(a,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,ce.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,ce.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,ce.metal)}function L0(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,ce.orange),t.cyl(0,.04,0,.16,.03,.68,10,ce.orange),t.cyl(0,.32,0,.115,.095,.12,10,ce.white,!1)}function D0(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,ce.terracotta),i.leaf.setM(e),$i(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function Ms(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,ce.metal),i.atlas.setM(e),n<0?ji(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Ki(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function kh(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?ce.white:ce.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,ce.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,ce.black),i.atlas.setM(e),t<0?ji(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Ki(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function N0(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,se("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,se("#f0a020"))}function Hh(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,ce.orange);let s=0,r=3.25,a=.42,l=14;for(let o=0;o<l;o++){let u=o/l*Math.PI*2,c=(o+1)/l*Math.PI*2,h=(f,p,g)=>[t*g,r+Math.sin(f)*p,s+Math.cos(f)*p-.25];Jr(n,h(0,0,-.02),h(t>0?c:u,a,-.02),h(t>0?u:c,a,-.02),ce.orange),Jr(n,h(0,0,-.035),h(t>0?c:u,a*.86,-.035),h(t>0?u:c,a*.86,-.035),se("#dfe9f2"))}}var Vh=null;function U0(i){Vh=i}var Nh=1;function F0(i){Nh=i}function $i(i,e,t,n,s,r,a,l,o,u,c,h,f=0){let p=Vh[a],g=1+(1-Nh)*.35;l=Math.max(2,Math.round(l*Nh));for(let v=0;v<l;v++){let m=o()*2-1,d=o()*2-1,x=o()*2-1;f&&(d=1.2+o());let b=Math.hypot(m,d,x)||1;m/=b,d/=b,x/=b;let _=-x,y=0,S=m;b=Math.hypot(_,S),b<.1&&(_=1,S=0,b=1),_/=b,S/=b;let R=d*S-x*y,M=x*_-m*S,E=m*y-d*_,A=Math.PI+(o()-.5)*.9,P=Math.cos(A),I=Math.sin(A),D=_*P+R*I,w=y*P+M*I,L=S*P+E*I,U=R*P-_*I,B=M*P-y*I,k=E*P-S*I,z=r*(1.3+o()*.45)*g/2,V=t+(o()-.5)*r*.6,G=n+(o()-.5)*r*(f?.15:.5),J=s+(o()-.5)*r*.6,re=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ne,q])=>[V+(D*Ne+U*q)*z,G+(w*Ne+B*q)*z*(f?.6:1),J+(L*Ne+k*q)*z]),Oe=re.map(Ne=>{let q=Ne[0]-e[0],Z=Ne[1]-e[1],Se=Ne[2]-e[2],Ie=Math.hypot(q,Z,Se)||1;q/=Ie,Z/=Ie,Se/=Ie;let ve=Ne[0]-t,Je=Ne[1]-n,tt=Ne[2]-s;return Ie=Math.hypot(ve,Je,tt)||1,[q*.7+ve/Ie*.3,Z*.7+Je/Ie*.3+(f?.5:0),Se*.7+tt/Ie*.3]}),ge=re.map(Ne=>Qd(c,u,.45+.55*Math.max(0,Math.min(1,(Ne[1]-h[0])/(h[1]-h[0])))));i.leaf.card(re,Oe,p,ge)}}function O0(i,e,t,n="grass",s=1){let r=Vh[n],a=(.42+t()*.38)*s,l=a*1.2,o=t()*Math.PI,u=[0,1,0],c=[u,u,u,u],h=[.6,.64,.58],f=[1,1,1];i.leaf.setM(e);for(let p of[o,o+Math.PI/2]){let g=Math.cos(p)*l/2,v=Math.sin(p)*l/2;i.leaf.card([[-g,-.05,-v],[g,-.05,v],[g,a,v],[-g,a,-v]],c,r,[h,h,f,f])}}function V_(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,ce.trunk);for(let u=0;u<3;u++){let c=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(c)*1.1*n,s*.68,Math.sin(c)*1.1*n],.09*n,.05*n,5,ce.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],a=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],o=7+Math.floor(t()*3);for(let u=0;u<o;u++){let c=t()*6.28,h=(.6+t())*1.3*n;$i(i,r,Math.cos(c)*h,s*(.62+t()*.3),Math.sin(c)*h,(1.1+t()*.6)*n,a,6,t,[1,1,1],[.55,.62,.7],l)}$i(i,r,0,s*.98,0,1.4*n,a,7,t,[1,1,1],[.55,.62,.7],l)}function G_(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,ce.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+t()*.8,h=(2.2+t()*1.6)*n,f=[Math.cos(c)*h,s*(.62+t()*.18),Math.sin(c)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,ce.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,ce.trunkDark)}i.leaf.setM(e);let a=[0,s*.72,0],l=[s*.5,s*1.1],o=[.72,.62,.72];for(let u of r)for(let c=0;c<2;c++)$i(i,a,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],o,l);$i(i,a,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],o,l)}function W_(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,a=t.range(5,7.5)*n,l=[r*.4,a*.45,.2],o=[r,a*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,ce.trunkDark),s.rod(l,o,.15*n,.09*n,6,ce.trunkDark),i.leaf.setM(e);let u=[[o[0],o[1]+.3,o[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[o[0]+.9*n,o[1]-.6,.8,1.1]];for(let[c,h,f,p]of u)s.rod(c>l[0]?l:o,[c,h-.2,f],.07*n,.04*n,4,ce.trunkDark),$i(i,[c,h-.8,f],c,h,f,p*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function X_(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,ce.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+t()*.8,h=(1.8+t()*1.4)*n,f=[Math.cos(c)*h,s*(.55+t()*.2),Math.sin(c)*h];i.color.rod([0,s*.38,0],f,.09*n,.04*n,5,ce.trunkDark),r.push(f)}i.leaf.setM(e);let a=[0,s*.7,0],l=[s*.45,s*1.1],o=[.62,.52,.56];for(let u of r)$i(i,a,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],o,l);$i(i,a,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],o,l)}function q_(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,ce.trunk),i.leaf.setM(e);let r=[0,s*.62,0],a=[s*.3,s*1.02],l=[.68,.6,.52];for(let o=0;o<7;o++){let u=s*(.34+o*.09),c=(2.1-o*.24)*n,h=t()*6.28;$i(i,r,Math.cos(h)*c*.35,u,Math.sin(h)*c*.35,Math.max(.7,c)*1.05,"ginkgo",5,t,[1,1,1],l,a)}}function Y_(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,a=(t()-.5)*.5;s.rod([0,0,0],[a,r,0],.13*n,.05*n,7,se("#eeece6"));for(let l=0;l<7;l++){let o=t.range(.4,r*.85),u=o/r;s.cyl(a*u,o,0,.135*n*(1-u*.6),.13*n*(1-u*.6),.05,7,se("#2b2b30"),!1)}for(let l=0;l<7;l++){let o=r*(.45+t()*.5),u=t()*6.28,c=(.8+t()*1.6)*n,h=o/r;s.rod([a*h,o,0],[a*h+Math.cos(u)*c,o+c*.9,Math.sin(u)*c],.035*n,.012*n,4,se("#8b7f78"))}}function Z_(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ce.trunkDark),i.foliage.setM(e);let r=se("#1d3a2c"),a=se("#eef2f8"),l=se("#d7e0ec");for(let o=0;o<4;o++){let u=s*(.16+o*.19),c=(1.9-o*.38)*n,h=s*.3;i.foliage.cyl(0,u,0,c,c*.3,h,9,r),i.foliage.cyl(0,u+h*.45,0,c*.72,.05,h*.62,9,o%2?a:l)}}function $_(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ce.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,ce.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,ce.cedar)}var B0={broad:V_,sakura:G_,pine:W_,cedar:$_,maple:X_,ginkgo:q_,birch:Y_,snowcedar:Z_},A0={};function z0(i,e){let t=i+e,n=A0[t];if(!n){let s={color:new dn,foliage:new dn,leaf:new dn({uv:!0})};B0[i](s,new je,Pn(1e3+e*77+i.length*13),1),n=A0[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function k0(){for(let i in B0)for(let e=0;e<4;e++)z0(i,e)}function Ln(i,e,t,n,s=1){let r=z0(t,Math.floor(n()*4)),a=e.clone().scale(new H(s,s,s));a.groundY=e.groundY,i.color.stamp(r.c,a),i.foliage.stamp(r.f,a),i.leaf.stamp(r.l,a)}var J_=new Set(["win0","win2","win5","win6"]),$s=(i,e,t)=>e<t?i+(e<t*.35&&J_.has(i)?"C":"L"):i;function ha(i,e,t,n,s,r,a){let l=Math.max(1,Math.round(t/3)),o=t/l;for(let u of[-1,1])for(let c=0;c<n.length-1;c++)for(let h=0;h<l;h++){let f=c>0&&r()<.3?$s("win6",r(),a):r()<.2?"win5":"plain";(u>0?Ki:ji)(i,u*e/2,h*o,(h+1)*o,n[c],n[c+1],f,s)}}function fa(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],ce.roof);let a=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+a,l,ce.parapet),i.box(-e/2,n,t-l,e/2,n+a,t,ce.parapet),i.box(-e/2,n,0,-e/2+l,n+a,t,ce.parapet),i.box(e/2-l,n,0,e/2,n+a,t,ce.parapet),s()<.4){let o=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[c,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(o+c-.05,n,u+h-.05,o+c+.05,n+1,u+h+.05,ce.metal);i.cyl(o,n+1,u,.85,.85,1.3,12,se("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,ce.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,ce.metal)}function H0(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,ce.black);let r="vs"+Math.floor(s()*10);ji(i.atlas,e-.065,-.88,-.12,t,n,r),Ki(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,ce.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,ce.metal)}function Qi(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,ce.concrete,null,{noBottom:!0}),n.type){case"shop":return j_(i,e,t,n);case"apt":return Q_(i,e,t,n);case"office":return ey(i,e,t,n);case"konbini":return ty(i,e,t,n);case"house":return ny(i,e,t,n);case"tower":return iy(i,e,t,n)}}var K_=new Set(["glass","door","cafe","noren"]);function j_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.6,f=3,p=h+(a-1)*f,g=Math.max(1,Math.round(s/3)),v=s/g,m=-s/2,d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let y=0;y<g;y++){let S=d[y%d.length];ln(u,m+y*v,m+(y+1)*v,0,h,0,k_(t,"shop_"+S)),K_.has(S)&&Js(i,e,m+(y+.5)*v,1.9,-.8,.7)}let x=t.pick([0,0,1,5,0,1]),b=[0,h];for(let y=1;y<a;y++)b.push(h+y*f);for(let y=1;y<a;y++)for(let S=0;S<g;S++){let R=S%2===1&&t()<.3?5:x;ln(u,m+S*v,m+(S+1)*v,b[y],b[y+1],0,$s("win"+R,t(),o),l)}ha(u,s,r,b,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],In(l,.8)),fa(c,s,r,p,t);let _=s*.94;if(c.box(-_/2,h-.8,-.3,_/2,h+.08,-.02,ce.black),ln(u,-_/2,_/2,h-.8,h+.08,-.305,"hs"+Math.floor(t()*14)),t()<.55){let y=t.pick(z_),S=h-.85;c.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],y),c.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],In(y,.85))}if(a>=2&&t()<.65){let y=(t()<.5?1:-1)*(s/2-.35);H0(i,y,h+.3,Math.min(p-.15,h+2.8),t)}for(let y=1;y<a;y++)if(t()<.4){let S=Math.floor(t()*g),R=m+S*v+.15,M=m+(S+1)*v-.15,E=b[y];c.box(R,E-.12,-.9,M,E,0,ce.parapet),ln(u,R,M,E,E+1,-.9,"rail"),ji(u,R,-.9,0,E,E+1,"rail"),Ki(u,M,-.9,0,E,E+1,"rail"),t()<.45&&q0(c,R+.1,M-.1,E+1.95,-.55,t),t()<.6&&Dh(i,e,(R+M)/2+.6,E,-.75)}else if(t()<.35){let S=Math.floor(t()*g);Dh(i,e,m+(S+.5)*v,b[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}c.cyl(m+.12,0,-.08,.05,.05,p,6,ce.pipe,!1),c.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,se("#d9d9d3")),a>=3&&t()<.18&&V0(i,s,p,r,t)}function V0(i,e,t,n,s){let r=Math.min(e*.85,7),a=r*.47,l=n*.3;for(let o of[-r*.35,r*.35])i.color.box(o-.06,t,l,o+.06,t+1.2+a,l+.12,ce.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+a,l+.3,ce.metal),ln(i.atlas,-r/2,r/2,t+1.2,t+1.2+a,l+.115,"bb"+Math.floor(s()*4))}function Q_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.2,f=2.95,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3.2)),v=s/g,m=-s/2,d=[0,h];for(let _=1;_<a;_++)d.push(h+_*f);for(let _=0;_<g;_++)ln(u,m+_*v,m+(_+1)*v,0,h,0,_===Math.floor(g/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),_===Math.floor(g/2)?pn:l);let x="bal"+Math.floor(t()*3),b=In(l,.97);for(let _=1;_<a;_++){let y=d[_];for(let S=0;S<g;S++)ln(u,m+S*v,m+(S+1)*v,y,d[_+1],0,$s("win2",t(),o),l);c.box(m,y-.15,-1.3,-m,y,0,b),c.box(m,y,-1.3,-m,y+1.1,-1.18,b,null,{noBottom:!0});for(let S=0;S<g;S++)ln(u,m+S*v,m+(S+1)*v,y,y+1.1,-1.305,x,l);for(let S=0;S<=g;S++)c.box(m+S*v-.05,y,-1.18,m+S*v+.05,y+2.4,0,In(l,.92));for(let S=0;S<g;S++){let R=t(),M=m+S*v+.2,E=m+(S+1)*v-.2;R<.34?q0(c,M,E,y+2.02,-.98,t):R<.46&&oy(c,M+.25,Math.min(E-.25,M+1.9),y+1.1,-1.3,t)}i.atlas.setM(e);for(let S=0;S<g;S++)t()<.55&&(Dh(i,e,m+(S+.78)*v,y,-.55),i.atlas.setM(e),i.color.setM(e))}c.box(m,p-.15,-1.3,-m,p,0,b),ha(u,s,r,d,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],In(l,.8)),fa(c,s,r,p,t,!0)}function ey(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=4,f=3.4,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3)),v=s/g,m=-s/2,d=[0,h];for(let x=1;x<a;x++)d.push(h+x*f);for(let x=0;x<g;x++)ln(u,m+x*v,m+(x+1)*v,0,h,0,x===1?"shop_door":"shop_glass");for(let x=1;x<a;x++)for(let b=0;b<g;b++)ln(u,m+b*v,m+(b+1)*v,d[x],d[x+1],0,$s("win3",t(),o),l);ha(u,s,r,d,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],In(l,.8)),fa(c,s,r,p,t,!0),t()<.6&&H0(i,(t()<.5?1:-1)*(s/2-.3),h+.4,Math.min(p-.3,h+4.5),t),t()<.3&&V0(i,s,p,r,t)}function ty(i,e,t,n){let{w:s,d:r}=n,a=i.atlas,l=i.color,o=4.4,u=-s/2,c=Math.max(3,Math.round(s/3)),h=s/c;for(let f=0;f<c;f++)ln(a,u+f*h,u+(f+1)*h,0,3.4,0,"shop_konbini"),Js(i,e,u+(f+.5)*h,1.9,-.8,.8);l.box(u,3.4,-.35,-u,o,0,ce.white),ln(a,u,-u,3.4,o,-.355,"konbini_band"),ha(a,s,r,[0,o],se("#f2f2ee"),t,0),fa(l,s,r,o,t)}function ny(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=2.9,f=a*h,p=-s/2,g=t()<.5,v=Math.max(2,Math.round(s/3)),m=s/v,d=[];for(let E=0;E<=a;E++)d.push(E*h);let x=g?pn:l;for(let E=0;E<a;E++)for(let A=0;A<v;A++){let P=g?"win4":"win0";E===0&&A===0?P="shop_house":P=$s(P,t(),o),ln(u,p+A*m,p+(A+1)*m,d[E],d[E+1],0,P,P==="shop_house"?pn:x)}ha(u,s,r,d,g?se("#9a7a62"):l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],In(l,.75));let b=!!n.snow,_=b?.75:.6,y=b?Math.min(3.4,r*.46):Math.min(2.4,r*.32),S=Fi(b?"white":"kawara"),R=b?se("#f3f5fa"):se("#c8ccd8");u.quad([s/2+_,f-.25,-_],[-s/2-_,f-.25,-_],[-s/2-_,f+y,r/2],[s/2+_,f+y,r/2],R,S),u.quad([-s/2-_,f-.25,r+_],[s/2+_,f-.25,r+_],[s/2+_,f+y,r/2],[-s/2-_,f+y,r/2],R,S);let M=g?se("#7a5a42"):l;if(Jr(c,[-s/2,f,0],[-s/2,f,r],[-s/2,f+y-.1,r/2],M),Jr(c,[s/2,f,r],[s/2,f,0],[s/2,f+y-.1,r/2],M),c.box(-s/2-_,f+y-.05,r/2-.15,s/2+_,f+y+.18,r/2+.15,b?se("#f6f7fb"):se("#3d4456")),b){c.box(-s/2-_-.05,f-.42,-_-.1,s/2+_+.05,f-.12,-_+.3,se("#eef1f7")),c.box(-s/2-_-.05,f-.42,r+_-.3,s/2+_+.05,f-.12,r+_+.1,se("#eef1f7"));for(let E=-s/2;E<s/2;E+=.45+t()*.5)c.cyl(E,f-.42-.35,-_+.02,0,.04,.35,4,se("#dfe8f3"),!1)}if(a>1){let E=h+.05;u.quad([s/2+.1,E-.3,-.75],[-s/2-.1,E-.3,-.75],[-s/2-.1,E+.05,0],[s/2+.1,E+.05,0],R,S)}if(n.fence){let E=-n.fence,A=1.2;for(let[P,I]of[[-s/2,-1],[.4,s/2]])c.box(P,0,E-.08,I,A,E+.08,ce.concrete),ln(u,P,I,0,A,E-.085,"block")}}function iy(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.4,f=a*h,p=Math.max(2,Math.round(s/6)),g=s/p,v=-s/2,m=t()<.5?"win3":"win2",d=[];for(let _=0;_<=a;_++)d.push(_*h);for(let _=0;_<a;_++)for(let y=0;y<p;y++)ln(u,v+y*g,v+(y+1)*g,d[_],d[_+1],0,$s(m,t(),o),l);let x=Math.max(1,Math.round(r/6)),b=r/x;for(let _ of[-1,1])for(let y=0;y<a;y++)for(let S=0;S<x;S++)(_>0?Ki:ji)(u,_*s/2,S*b,(S+1)*b,d[y],d[y+1],$s(m,t(),o),l);fa(c,s,r,f,t,!0)}function G0(i,e,t){let n=i.color;n.setM(e);let s=t.pick([se("#f2f2ee"),se("#c9cdd2"),se("#2b2f38"),se("#b33a32"),se("#9fc6c0"),se("#e7d9b4"),se("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,In(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,se("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,ce.black)}function Gh(i,e,t,n){let s=i.color,r=se("#8d9096"),a=se("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,o=-n+.62;s.box(-.14,5.08,l,.14,5.56,o,a);let u=t*.141;i.atlas.setM(e),(t>0?Ki:ji)(i.atlas,u,l,o,5.08,5.56,"signal");let c=t>0?o:l,h=t>0?-1:1;for(let p=0;p<3;p++){let g=c+h*(.2+p*.4);s.box(t>0?.14:-.36,5.47,g-.15,t>0?.36:-.14,5.5,g+.15,a)}let f=c+h*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,f-.11,t>0?.16:-.145,5.43,f+.11,pn)}function W0(i,e,t,n){let s=i.color,r=se("#3d6ea8"),a=se("#e8eef2"),l=se("#c7c5bf"),o=5.35;s.setM(e),s.box(-1.1,o-.65,-t,1.1,o,t,r);for(let u of[-1.1,1])s.box(u,o,-t,u+.1,o+1.1,t,a),s.box(u-.02,o+1.1,-t,u+.12,o+1.18,t,r);i.atlas.setM(e),ji(i.atlas,-1.105,-2.2,2.2,o-.62,o-.06,n),Ki(i.atlas,1.105,-2.2,2.2,o-.62,o-.06,n),s.setM(e);for(let u of[-1,1]){let c=u*(t-1.65),h=u*(t-.15),f=Math.min(c,h),p=Math.max(c,h);s.box(-.45,.15,f+.3,.45,o-.65,p-.3,r);let g=20,v=(o-.15)/g;for(let m=0;m<g;m++)s.box(1.1+m*.3,.15,f,1.1+(m+1)*.3,o-(m+1)*v+.04,p,l);s.box(1.1,o-.1,f-.05,1.1+g*.3,o-.02,f+.05,r)}}function X0(i,e,t,n,s,r,a){let l=i.color,o=1.22,u=3.55,c=6.7,h=se("#c8c5bd"),f=se("#ebe8de"),p=se("#7a5a42"),g=se("#5e4433"),v=se("#4d5468");l.setM(e),l.box(t,-1.4,u,n,o,c,h,null,{noBottom:!0}),l.box(t,o,u,n,o+.025,u+.32,f),l.box(t,o,u+.6,n,o+.04,u+.9,ce.yellow);let m=Math.sign(s-(t+n)/2),d=m>0?n:t,x=d+m*6.2,b=u+.9,_=c-.2,y=(z,V,G)=>[z,V,G];m>0?l.quad(y(x,.1,_),y(x,.1,b),y(d,o,b),y(d,o,_),h):l.quad(y(x,.1,b),y(x,.1,_),y(d,o,_),y(d,o,b),h);for(let z of[b,_]){let V=se("#9aa0a6");l.rod([x,.1+.9,z],[d,o+.9,z],.03,.03,5,V);for(let G=0;G<=3;G++){let J=x+(d-x)*G/3,re=.1+(o-.1)*G/3;l.box(J-.03,re,z-.03,J+.03,re+.9,z+.03,V)}}i.atlas.setM(e);for(let z=t;z<n-.01;z+=3){let V=Math.min(n,z+3);i.atlas.quad([z,-.6,c+.004],[V,-.6,c+.004],[V,o,c+.004],[z,o,c+.004],se("#d8d4ca"),Fi("concrete"))}l.setM(e);for(let z=t+.4;z<n;z+=2)l.box(z-.05,o,c-.12,z+.05,o+1,c-.02,se("#8f949a"));for(let z of[.45,.95])l.box(t,o+z,c-.1,n,o+z+.06,c-.04,se("#8f949a"));let S=n-t,R=z=>m>0?n-S*z:t+S*z,M=R(.47),E=M-2.3,A=M+2.3,P=u+1.35,I=c-.25;l.box(E,o,I-.12,A,o+2.45,I,p);for(let z of[E,A-.12])l.box(z,o,P+.6,z+.12,o+2.45,I,g);for(let z of[E,A-.12])l.box(z,o,P,z+.12,o+2.45,P+.12,g);l.quad([A+.4,o+2.5,P-.45],[E-.4,o+2.5,P-.45],[E-.4,o+2.85,I+.35],[A+.4,o+2.85,I+.35],v),l.quad([E-.4,o+2.42,P-.45],[A+.4,o+2.42,P-.45],[A+.4,o+2.77,I+.35],[E-.4,o+2.77,I+.35],se("#3a3f50")),l.box(E+.3,o+.42,I-.55,A-.3,o+.48,I-.15,se("#8a6a4a"));for(let z of[E+.4,A-.5])l.box(z,o,I-.5,z+.08,o+.42,I-.2,ce.metal);i.atlas.setM(e),i.atlas.quad([M-1.1,o+1.55,I+.005],[M+1.1,o+1.55,I+.005],[M+1.1,o+2.03,I+.005],[M-1.1,o+2.03,I+.005],pn,Fi("ekiplate"+r));let D=R(.2),w=u+1.6,L=1.25,U=o+1.25,B=U+.95;l.setM(e);for(let z of[D-L+.12,D+L-.12])l.cyl(z,o,w,.05,.05,B-o+.05,8,se("#6b7078"));l.box(D-L,U-.03,w-.03,D+L,B+.03,w+.03,se("#3a3d42")),i.atlas.setM(e),i.atlas.quad([D-L,U,w+.035],[D+L,U,w+.035],[D+L,B,w+.035],[D-L,B,w+.035],pn,Fi("ekimei"+r)),i.atlas.quad([D+L,U,w-.035],[D-L,U,w-.035],[D-L,B,w-.035],[D+L,B,w-.035],pn,Fi("ekimei"+r)),l.setM(e);let k=M-m*4.2;l.box(k-.9,o+.42,c-1.25,k+.9,o+.47,c-.85,se("#3b6ea8")),l.box(k-.9,o+.47,c-.88,k+.9,o+.9,c-.83,se("#3b6ea8"));for(let z of[k-.75,k+.7])l.box(z,o,c-1.2,z+.06,o+.42,c-.9,ce.metal);for(let z=t+3;z<n-1;z+=9)ua(i,Fc(e,z,o,c-.45))}var sy=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(se),ry=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(se);function q0(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,ce.metal);let a=e+.12+r()*.2;for(;a<t-.35;){let l=.28+r()*.34,o=.36+r()*.42,u=r.pick(sy),c=s+(r()-.5)*.06;i.quad([a+l,n-o,c],[a,n-o,c],[a,n-.02,c],[a+l,n-.02,c],u),i.quad([a,n-o,c+.01],[a+l,n-o,c+.01],[a+l,n-.02,c+.01],[a,n-.02,c+.01],In(u,.85)),r()<.4&&i.box(a+l*.45,n-.02,c-.02,a+l*.55,n+.06,c+.02,se("#d8d8d0")),a+=l+.06+r()*.22}}function oy(i,e,t,n,s,r){let a=r.pick(ry),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,a),i.box(e,n-.72,s-l,t,n+.09,s-.005,a),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,In(a,.86))}function Y0(i,e){let t=i.color,n=se("#a19f97"),s=se("#6b4a35"),r=se("#4f4a44"),a=se("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,se("#8d8b84"));for(let l of[-.52,.48])for(let o of[-.36,.32])t.box(l,.32,o,l+.05,1.5,o+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,In(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,a,!1),t.cyl(0,.93,0,.115,.03,.1,8,a);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,se("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,se("#5b8d3d"))}function Z0(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?ce.black:ce.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,ce.black),t.box(-.5,2.55,-.06,.5,2.95,.02,ce.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,ce.black);t.box(-.78,-.9,-.34,.3,0,.34,ce.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,se("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,ce.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new je().multiplyMatrices(e,new je().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?ce.black:ce.yellow)}t.setM(e),i.atlas.setM(e),ln(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function $0(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,ce.stone),t.cyl(0,.25,0,.14,.12,.95,8,ce.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,ce.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,In(ce.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,In(ce.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,pn),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,pn)}function Wh(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,ce.vermilion),s.cyl(0,0,r,.38,.38,.5,12,ce.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,ce.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,ce.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,ce.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,ce.vermilion)}function J0(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,se("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,se("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,se("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,se("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,ce.metal),n.box(1.1,0,.3,1.2,.42,.55,ce.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,ce.metal),i.atlas.setM(e),ji(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Ki(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function K0(i,e,t,n=1){let s=i.color;s.setM(e);let r=In(ce.concrete,.85+t()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],l=.55*n;for(let o of a)s.rod([0,l,0],[o[0]*.95*n,l+o[1]*.95*n,o[2]*.95*n],.42*n,.26*n,7,r)}function j0(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,se("#8f8a80"),se("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,ce.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,ce.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,ce.black),t.cyl(0,18.6,0,1,.25,1.2,12,ce.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,pn)}function Q0(i,e,t){let n=i.color;n.setM(e);let s=t.pick([se("#f4f4f0"),se("#3b6ea5"),se("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Jr(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Jr(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,ce.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,ce.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,se("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,ce.metal)}function ep(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,ce.stone),n.box(-.55,.5,.9,.55,1.5,1.8,se("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],se("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],se("#4d5468")),Wh(i,Fc(e,0,0,-.3,Math.PI/2),.75,2.2)}var qt=60,tp=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],np=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Xh=32,da=[.025,.026,.032],ip=[.05,.05,.065],es=(i,e)=>(i%e+e)%e,bs=(i,e)=>{let t=Wr(i);return!!t&&Math.abs(i-t.s)<e},qh=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Ti=(i,e)=>{let t=ai(i);return!!t&&Math.abs(i-t.s)<e},Qn=(i,e)=>{let t=Ui(i);return!!t&&Math.abs(i-t.s)<e},Yh=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let a=0;a<t;a++){let l=n(r,a);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let a=0;a<t-1;a++){let l=s+r*t+a,o=l+1,u=l+t,c=u+1;this.I.push(l,o,u,o,c,u)}}gridN(e,t,n,s=0,r=0){let a=t+s+r,l=new Array(e*a);for(let u=0;u<e;u++)for(let c=0;c<a;c++)l[u*a+c]=n(u,c-s);let o=(u,c)=>l[Math.min(e-1,Math.max(0,u))*a+Math.min(a-1,Math.max(0,c))];for(let u=0;u<e;u++)for(let c=s;c<s+t;c++){let h=o(u,c-1),f=o(u,c+1),p=o(u-1,c),g=o(u+1,c),v=l[u*a+c],m=f[0]-h[0],d=f[1]-h[1],x=f[2]-h[2],b=g[0]-p[0],_=g[1]-p[1],y=g[2]-p[2],S=d*y-x*_,R=x*b-m*y,M=m*_-d*b;R<0&&(S=-S,R=-R,M=-M);let E=Math.hypot(S,R,M)||1;v[3]=S/E,v[4]=R/E,v[5]=M/E}this.grid(e,t,(u,c)=>l[u*a+c+s])}build(){let e=new xt;return e.setAttribute("position",new et(this.P,3)),e.setAttribute("normal",new et(this.N,3)),e.setAttribute("su",new et(this.SU,2)),e.setAttribute("zw",new et(this.ZW,4)),e.setAttribute("rk",new et(this.RK,2)),e.setAttribute("rv",new et(this.RV,1)),e.setAttribute("zs",new et(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},Oc=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new $t,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/qt),s=Math.floor((e+this.ahead)/qt);for(let[a,l]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(l),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let a=this.reveal[0];if(a){let l=a.pending.shift();l&&a.group.add(l),a.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let o=Math.max(0,n);o<=s;o++)if(!this.chunks.has(o)){l=o;break}if(l<0)return 0;l*qt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let a=this.job.it.next();if(a.done){let l=a.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,a)=>{let l=a*qt-e,o=r.group.children;for(let u=0;u<o.length;u++){let c=o[u],h=c.userData.detail;h&&(c.visible=h==="leaf"?l<s:l<t||n&&h==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*qt,s=n+qt,r=t.at(n),a=r.x,l=r.z,o=Pn(Math.floor(Kn(e,777)*4294967295)),u={atlas:new dn({uv:!0,ao:!0,lit:!0}),color:new dn({ao:!0}),foliage:new dn,leaf:new dn({uv:!0}),lamp:new dn({color:!1}),sig:new dn({color:!1}),sodium:new dn({color:!1}),decal:new dn({uv:!0}),pool:new dn({uv:!0,color:!1})},c=new Yh,h=[],f=[];u.lamps=[];let p={},g={},v=(A,P)=>{t.at(A,g);let I=Tn(A,"rw");return g.y+qr(A,P,g.y,I)},m=A=>{let P=Dt(A);return[P.city,P.sakura,P.coast,P.country,P.snow]},d=(A,P,I)=>(t.at(A,p),[p.x+p.rx*P-a,I,p.z+p.rz*P-l]),x=(A,P,I,D=0,w=!0)=>{t.at(A,p);let L=p.h-Math.PI/2+(w&&P<0?Math.PI:0)+D,U=new je().makeRotationY(L);return U.setPosition(p.x+p.rx*P-a,I,p.z+p.rz*P-l),U.groundY=I,U},b=(A,P,I=0,D=0,w=!0)=>{let L=v(A,P),U=x(A,P,L+I,D,w);return U.groundY=L,U},_=A=>t.at(A,g).y,y=A=>Tn(A,"rw"),S=A=>{let P=Dt(A);return P.city+P.sakura>.5?P.city>=P.sakura?3:2.6:0};{let A=Ui(n+qt/2),P=!!A&&A.s>n-40&&A.s<s+40,I=P?61:21,D=y(n+qt/2),w=(()=>{let J=[0,...tp].map(re=>re);return np.forEach(re=>J.push(re-D)),J})(),L=[...w.slice().reverse().map(G=>-G),...w],U=L.length,B=Array.from({length:I},(G,J)=>n+J/(I-1)*qt);{let G=ai(n+qt/2);if(G)for(let J of[G.s-tn,G.s+tn])J>n+.1&&J<s-.1&&B.push(J-.03,J+.03)}B.sort((G,J)=>G-J);let k=U/2,z=B.map(G=>(t.at(G,p),{s:G,f:{...p},rw:y(G),w:m(G),rb:P?r0(G):0})),V=Math.round(k/2);for(let[G,J,re,Oe]of[[0,V,0,1],[V-1,k,1,0],[k,k+V+1,0,1],[k+V,U,1,0]])c.gridN(z.length,J-G,(ge,Ne)=>{let q=z[ge],Z=q.f,Se=G+Ne,Ie=L[Se],ve=Ie<0||Ie===0&&Se<k?Ie-q.rw:Ie+q.rw,Je=Z.y+qr(q.s,ve,Z.y,q.rw),tt=Math.abs(ve)>q.rw+.98?Math.min(1,Tc/.5):0;return[Z.x+Z.rx*ve-a,Je,Z.z+Z.rz*ve-l,0,1,0,es(q.s,ys),ve,q.w[0],q.w[1],q.w[2],q.w[3],q.rw,0,q.rb>0?q.rb:-tt,q.w[4]]},re,Oe),yield}yield,c.grid(31,2,(P,I)=>{let D=n+P/30*qt,w=y(D),L=I?w:-w;t.at(D,p);let U=p.y,B=(_(D+1)-_(D-1))/2,k=-B*p.fx,z=1,V=-B*p.fz,G=Math.hypot(k,z,V),J=m(D);return[p.x+p.rx*L-a,U,p.z+p.rz*L-l,k/G,z/G,V/G,es(D,ys),L,J[0],J[1],J[2],J[3],w,1,0,J[4]]});{let A=[];for(let D=0;D<=30;D++){let w=n+D/30*qt;A.push({s:w,sw:S(w)})}let P=[],I=null;for(let D of A)D.sw>0?(I||(I=[],P.push(I)),I.push(D)):I=null;for(let D of P)if(!(D.length<2))for(let w of[-1,1])c.grid(D.length,2,(L,U)=>{let{s:B,sw:k}=D[L],z=y(B),V=w*(U===(w>0?0:1)?z:z+k);t.at(B,p);let G=m(B);return[p.x+p.rx*V-a,p.y+.15,p.z+p.rz*V-l,0,1,0,es(B,ys),V,G[0],G[1],G[2],G[3],z,2,0,G[4]]}),c.grid(D.length,2,(L,U)=>{let{s:B}=D[L],k=y(B),z=w*k,V=w>0?U:1-U;t.at(B,p);let G=m(B);return[p.x+p.rx*z-a,p.y+(V?.15:0),p.z+p.rz*z-l,-w*p.rx,0,-w*p.rz,es(B,ys),z,G[0],G[1],G[2],G[3],k,3,0,G[4]]})}yield,yield*this.placePoles(e,n,s,o,u,x,v,d,_,y);{let A=Math.ceil((n-Gs)/Vs),P=Gr(A);P<s&&ra(P)&&(yield*this.placeCrossing(u,c,P,x,_,y,v,S,a,l));let I=Math.ceil((n-Xr)/Ws),D=wh(I);D<s&&Ah(D)&&(yield*this.placeRiver(u,c,D,x,_,y,v,S,a,l,o,f));let w=ai(n+qt/2);w&&w.s+Qt>n&&w.s-Qt<s&&(yield*this.placeTunnel(u,c,w,n,s,x,b,v,y,a,l,o))}yield;for(let A=n;A<s;A+=4){let P=jt(A);(P==="coast"&&Dt(A).coast>.45||P==="mountain"&&Dt(A).mountain>.45)&&!Ti(A+2,Qt+4)&&this.guardrail(u,A,Math.min(A+4,s),d,_,y)}yield*this.placeCity(u,o,n,s,x,b,_,y,S,v,c,a,l),yield*this.placeSakura(u,o,n,s,x,b,_,y,v),this.placeCoast(u,o,n,s,x,b,_,y,v,h,d),yield,yield*this.placeCountry(u,o,n,s,x,b,_,y,v),yield*this.placeMountain(u,o,n,s,x,b,_,y,v),yield*this.placeSnow(u,o,n,s,x,b,_,y,v),yield*this.placeVerge(u,o,n,s,x,v,y),yield;let R=new $t,M=(A,P,I,D,w=0,L)=>{if(!A)return null;let U=new ft(A,P);return U.castShadow=I,U.receiveShadow=D,U.renderOrder=w,L&&(U.userData.detail=L),R.add(U),U},E=new Set;for(let A of[n,n+20,n+40,s]){let P=Vr(A);E.add(P.a),P.t>0&&E.add(P.b)}M(c.build(),la([...E]),!1,!0),yield,M(u.atlas.build(),this.M.atlas,!0,!0),yield;{let A=M(u.color.build(),this.M.color,!0,!0);A&&(A.customDepthMaterial=Cc)}if(yield,M(u.foliage.build(),this.M.foliage,!0,!0),M(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,M(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),M(u.sig.build(),this.M.sig,!1,!1,0,"small"),M(u.sodium.build(),this.M.sodium,!1,!1),M(u.decal.build(),this.M.decal,!1,!0,1,"small"),M(u.pool.build(),this.M.pool,!1,!1,2,"light"),h.length){let A=new xt,P=[],I=[],D=[];h.forEach((w,L)=>{for(let U of w)P.push(U[0],U[1],U[2]),I.push(U[3],U[4]);if(L>0){let U=(L-1)*2;D.push(U,U+2,U+1,U+1,U+2,U+3)}}),A.setAttribute("position",new et(P,3)),A.setAttribute("su",new et(I,2)),A.setIndex(D),A.computeBoundingSphere(),M(A,this.foamMat,!1,!1,1)}for(let A of f)M(A,this.riverMat,!1,!0);return R.position.set(a-this.origin.x,0,l-this.origin.z),{group:R,ox:a,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Xh+6,n=jt(t);if(n==="sakura"||bs(t,6)||Qn(t,34)||Ti(t,Qt+12))return null;let s=Tn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,a,l,o,u,c){let h=Math.ceil((t-6)/Xh),f=Math.floor((n-6-.001)/Xh);for(let p=h;p<=f;p++){let g=this.poleSpec(p);if(!g)continue;let v=g.z==="city"?u(g.s)+.15:l(g.s,g.u),m=a(g.s,g.u,v),d=Pn(Math.floor(Kn(p,31)*4294967295)),x=Oh(r,m,d,{trans:d()<.45});g.z==="city"&&p%2===0&&P0(r,m,-.11),p%2&&(yield);let b=this.poleSpec(p+1);if(b){let _=b.z==="city"?u(b.s)+.15:l(b.s,b.u),y=C0(a(b.s,b.u,_));r.color.setM(new je);let S=[];for(let R=0;R<x.length;R++){let M=x[R],E=y[R],A=.35+d()*.4+(R>=7?.3:0);S.push(A),r.color.wire([M.x,M.y,M.z],[E.x,E.y,E.z],A,R>=7?.022:.015,da,10)}if(g.z!=="coast"&&d()<.38){let R=Math.floor(d()*4),M=x[R],E=y[R],A=1+Math.floor(d()*4),P=.18+d()*.5;for(let I=0;I<A;I++){let D=Math.min(.92,P+I*(.018+d()*.025)),w=M.x+(E.x-M.x)*D,L=M.z+(E.z-M.z)*D,U=M.y+(E.y-M.y)*D-S[R]*4*D*(1-D);r.color.box(w-.07,U+.015,L-.07,w+.07,U+.19,L+.07,ip),r.color.box(w-.045,U+.19,L-.045,w+.045,U+.27,L+.045,ip)}}}if(g.z==="city"){r.color.setM(new je);let _=1+Math.floor(d()*3);for(let y=0;y<_;y++){let S=x[7+y%2],R=(d()-.5)*14,M=c(g.s+R),E=d()<.55,A=E?-(M+3.15):M+3.15,P=o(g.s+R,A,u(g.s+R)+5.2+d()*2.5);r.color.wire([S.x,S.y,S.z],P,.25+d()*.4,.012,da,8)}}}}*intersection(e,t,n,s,r,a,l,o,u,c,h){let f=this.path.at(n,{}),p=a(n),g=l(n),v=o(n)||3,m=n-.5,d=Dt(n),x=[d.city,d.sakura,d.coast,d.country],b=(y,S,R)=>[f.x+f.fx*(y-.5)+f.rx*S-c,R,f.z+f.fz*(y-.5)+f.rz*S-h],_=g+v+.15;for(let y of[-1,1]){let S=y*(g+v),R=y*80;u.grid(21,2,(P,I)=>{let D=S+(R-S)*P/20,w=(I?-3:3)*y,L=b(w,D,p+.165);return[L[0],L[1],L[2],0,1,0,w*y,D,x[0],x[1],x[2],x[3],g,10]});{let P=y*(g+v+3.2),I=-y*1.35,D=1.15,w=.42,L=(U,B)=>b(I+y*U,P-y*B,p+.18);e.decal.setM(new je),e.decal.quad(L(-D,-w),L(D,-w),L(D,w),L(-D,w),[1,1,1],ca("tomare"))}for(let P of[-1,1]){let I=_+15+t()*3;for(;I<52;){let D=t.range(5.5,8.5),w=y*(I+D/2),L=t(),U=r(m+P*3.3,w,p+.14,P>0?Math.PI/2:-Math.PI/2,!1);Qi(e,U,t,{type:L<.5?"house":"shop",w:D,d:t.range(7,10),floors:L<.5?2:t.int(2,3),tint:t.pick(Ji),litP:.45,fence:0}),I+=D+t.range(.2,1.2),yield}yield}let M=[30,54].map(P=>r(m+2.8,y*P,p+.15,-Math.PI/2,!1)),E=Pn(Math.floor(Kn(s,y>0?71:73)*4294967295)),A=M.map(P=>Oh(e,P,E,{trans:E()<.4}));e.color.setM(new je);for(let P=0;P<7;P++){let I=A[0][P],D=A[1][P];e.color.wire([I.x,I.y,I.z],[D.x,D.y,D.z],.3+E()*.4,.014,da,10)}}Gh(e,r(n-9,-(g+.55),p+.15,0,!0),1,g+.55-1.6),Gh(e,r(n+8,g+.55,p+.15,0,!0),1,g+.55-1.6),s%3===1&&W0(e,r(n+15,0,p,0,!1),g+v+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,a,l,o,u,c){let h=this.path.at(n,{}),f=h.y,p=a(n),g=o(n),v=p+g+.2,m=150,d=f+.18,x=Dt(n),b=[x.city,x.sakura,x.coast,x.country],_=(L,U,B)=>[h.x+h.fx*L+h.rx*U-u,B,h.z+h.fz*L+h.rz*U-c],y=[7.6,4.7,-4.7,-7.6];for(let[L,U]of[[-m,-v],[v,m]])t.grid(25,y.length,(k,z)=>{let V=L+(U-L)*k/24,G=y[z],re=Math.abs(G)<5?d:Math.min(d-.05,l(n+G,V)-.03),Oe=_(G,V,re);return[Oe[0],Oe[1],Oe[2],0,1,0,G,V,b[0],b[1],b[2],b[3],p,5]});let S=(L,U,B)=>t.grid(2,2,(k,z)=>{let V=k?U:L,G=z?-3.3:3.3,J=_(G,V,B);return[J[0],J[1],J[2],0,1,0,G,V,b[0],b[1],b[2],b[3],p,6]});S(-p,p,f+.03),g>0&&(S(-v,-p,f+.165),S(p,v,f+.165));let R=(L,U,B,k)=>t.grid(2,2,(z,V)=>{let G=z?k:B,J=V?U:L,re=_(J,G,f+.025);return[re[0],re[1],re[2],0,1,0,J,G,b[0],b[1],b[2],b[3],p,7]});R(-7.15,-7.6,-p+.3,-.12),R(7.6,7.15,.12,p-.3),yield;let M=s(n,0,f,-Math.PI/2,!1),E=e.color;E.setM(M);let A=[.42,.4,.38],P=[.3,.29,.28],I=[.55,.57,.6];for(let L of[-2,2])for(let U of[-.5335,.5335]){let B=-(L+U);for(let[k,z]of[[-m,-v],[v,m]])E.box(k,.26,B-.035,z,.34,B+.035,A);E.box(-v,0,B-.035,v,.04,B+.035,P)}let D=[-146,-104,-64,-26,26,64,104,146];for(let L of D){for(let U of[-4.95,4.95])E.box(L-.12,.18,U-.12,L+.12,7.4,U+.12,I);E.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,I);for(let U of[-2,2])E.box(L-.04,6.3,-U-.04,L+.04,6.95,-U+.04,I)}for(let L of[-2,2])for(let U=0;U<D.length-1;U++)E.wire([D[U],5.35,-L],[D[U+1],5.35,-L],.05,.011,da,6),E.wire([D[U],6.4,-L],[D[U+1],6.4,-L],.45,.011,da,8);yield;let w=Math.round((n-Gs)/Vs);if(x.country>.9&&Kn(w,17)<.7){let L=Kn(w,19)<.5?-1:1,U=L>0?p+9:-(p+9+46),B=L>0?p+9+46:-(p+9);X0(e,M,U,B,L*(p+9),Math.abs(w)%4,Pn(Math.floor(Kn(w,23)*4294967295))),E.setM(M)}yield;for(let L of Pc(this.path,n)){let U=new je().makeRotationY(L.yaw);U.setPosition(L.x-u,L.y,L.z-c),Z0(e,U)}Ms(e,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85),Ms(e,s(n+70,a(n+70)+.6,r(n+70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n,{}),g=p.y,v=a(n),m=o(n),d=Dt(n),x=[d.city,d.sakura,d.coast,d.country],b=d.sakura>.5,_=222,y=v+m+.5,S=g-oa,R=(w,L,U)=>[p.x+p.fx*w+p.rx*L-u,U,p.z+p.fz*w+p.rz*L-c];{let w=[],L=[],U=[];for(let z=0;z<=74;z++){let V=-_+2*_*z/74;for(let G of[12.5,-12.5]){let J=R(G,V,S);w.push(J[0],J[1],J[2]),L.push(G,V)}if(z>0){let G=(z-1)*2;U.push(G,G+1,G+2,G+1,G+3,G+2)}}let k=new xt;k.setAttribute("position",new et(w,3)),k.setAttribute("su",new et(L,2)),k.setIndex(U),k.computeBoundingSphere(),f.push(k)}for(let[w,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[U,B]of[[-_,-(v+3.4)],[v+3.4,_]])t.grid(41,2,(k,z)=>{let V=U+(B-U)*k/40,G=z?L:w,J=R(G,V,g+.38);return[J[0],J[1],J[2],0,1,0,G,V,x[0],x[1],x[2],x[3],v,9,1]});yield;let M=s(n,0,g,0,!1),E=e.color,A=[.74,.73,.7],P=b?[.78,.2,.15]:[.55,.72,.64];E.setM(M),E.box(-24.5,-1,-y,24.5,-.03,y,A,null,{noBottom:!1});for(let w of[-1,1])E.box(-24.5,-1.3,w>0?y-.35:-y,24.5,-.95,w>0?y:-y+.35,[.62,.61,.58]);for(let w of[-8,8])E.box(w-.7,-oa-1.4,-y+.6,w+.7,-1,y-.6,A);for(let w of[-25.7,25.7])E.box(w-1.2,-oa+.4,-y-.4,w+1.2,-.05,y+.4,A);for(let w of[-24.5,24.5])E.box(w-.16,.004,-v,w+.16,.016,v,[.33,.32,.31]),E.box(w-.02,.016,-v,w+.02,.02,v,[.2,.19,.19]);let I=m>0?.15:0;for(let w of[-1,1]){let L=w*(y-.14);for(let U=-24;U<=24.01;U+=2)E.box(U-.06,I,L-.06,U+.06,I+1,L+.06,P);E.box(-24,I+.95,L-.08,24,I+1.08,L+.08,P),E.box(-24,I+.48,L-.03,24,I+.54,L+.03,P),E.box(-24,I+.06,L-.03,24,I+.12,L+.03,P)}let D="bridge"+Math.abs(Math.round(n/Ws))%4;for(let w of[-25,25])for(let L of[-1,1]){let U=L*(y-.1),B=[.7,.69,.65];E.box(w-.32,I,U-.32,w+.32,I+1.45,U+.32,B),E.box(w-.38,I+1.45,U-.38,w+.38,I+1.58,U+.38,[.62,.61,.57]),e.atlas.setM(M);let k=(w<0?-1:1)*.325,z=D;w<0?e.atlas.quad([w-.325,I+.3,U-.22],[w-.325,I+.3,U+.22],[w-.325,I+1.3,U+.22],[w-.325,I+1.3,U-.22],[1,1,1],ca(z)):e.atlas.quad([w+.325,I+.3,U+.22],[w+.325,I+.3,U-.22],[w+.325,I+1.3,U-.22],[w+.325,I+1.3,U+.22],[1,1,1],ca(z)),E.setM(M)}ua(e,s(n-14,-(y-.45),g+I,0,!0)),ua(e,s(n+14,y-.45,g+I,0,!0)),yield;for(let w of[-18,18])for(let L of[-1,1]){yield;for(let U=11+h()*4;U<(b?125:170);U+=b?h.range(8.5,11):h.range(18,34)){let B=n+w+(h()-.5)*1.5,k=L*U;Ln(e,s(B,k,l(B,k),h()*6,!1),b?"sakura":"broad",h,b?h.range(1,1.25):h.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n.s,{}),g=p.y,v=u(n.s),m=v+1.4,d=Dt(n.s),x=[d.city,d.sakura,d.coast,d.country],b=a(n.s,0,g,0,!1),_=e.color,y=Math.max(s,n.s-tn)-n.s,S=Math.min(r,n.s+tn)-n.s;if(S>y+.01){let M=Math.max(2,Math.ceil((S-y)/3)+1),E=[-(v+1.5),-v,-v*.5,0,v*.5,v,v+1.5];t.gridN(M,E.length,(B,k)=>{let z=y+(S-y)*B/(M-1),V=n.s+z,G=E[k],J=g+wc(z,G);return[p.x+p.fx*z+p.rx*G-c,J,p.z+p.fz*z+p.rz*G-h,0,1,0,es(V,ys),G,x[0],x[1],x[2],x[3],v,0,-1]});let A=[[-v,0],[-v,.2],[-m,.2],[-m,3.2]];for(let B=1;B<12;B++){let k=Math.PI*(1-B/12);A.push([m*Math.cos(k),3.2+3*Math.sin(k)])}A.push([m,3.2],[m,.2],[v,.2],[v,0]);let P=[.86,.82,.72],I=[.44,.45,.47],D=[.62,.61,.58],w=[];for(let B=y;B<S-.01;B+=6)w.push(B);w.push(S),_.setM(b);for(let B=0;B<w.length-1;B++)for(let k=0;k<A.length-1;k++){let[z,V]=A[k],[G,J]=A[k+1],re=Math.max(V,J)<=.21?D:Math.abs(z)>m-.01&&Math.abs(G)>m-.01?P:I;_.quad([w[B],V,z],[w[B+1],V,z],[w[B+1],J,G],[w[B],J,G],re)}e.sodium.setM(b),e.sig.setM(b);let L=m*Math.cos(Math.PI/6)-.12,U=3.2+3*Math.sin(Math.PI/6)-.08;for(let B=Math.ceil((y+tn-3)/6)*6+3-tn;B<S;B+=6)for(let k of[-1,1])e.sodium.box(B-.45,U-.07,k*L-.13,B+.45,U+.07,k*L+.13,null),Js(e,b,B,U-.1,k*L,1);for(let B=Math.ceil((y+tn)/24)*24-tn;B<S;B+=24)e.sig.box(B-.3,.95,-m+.01,B+.3,1.2,-m+.06,null);for(let B=Math.ceil((y+tn-30)/60)*60+30-tn;B<S;B+=60)for(let k of[-1.15,1.15])_.box(B-1.1,5.2,k-.36,B+1.1,5.78,k+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),_.box(B-.08,5.78,k-.05,B+.08,6.15,k+.05,[.4,.4,.42]);yield}for(let M of[-1,1]){let E=n.s+M*tn,A=M*(tn+.08);if(E<s||E>=r)continue;let P=[];for(let J of tp)J>=1.44&&P.push(v+J,-(v+J));for(let J of np)J>v+3.5&&J<v+21&&P.push(J,-J);for(let J=0;J<=24;J++)P.push(-m+2*m*J/24);P.push(-m-.01,m+.01),P.sort((J,re)=>J-re);let I=J=>3.2+3*Math.sqrt(Math.max(0,1-(J/m)**2)),D=J=>Math.max(o(E-M*.03,J)-g,wc(M*(tn-.03),J)),w=J=>Math.abs(J)<=m+1e-6?I(J):o(E+M*.03,J)-g,L=[.78,.77,.73],U=[.66,.65,.62];_.setM(b);for(let J=0;J<P.length-1;J++){let re=P[J],Oe=P[J+1];if(Oe-re<1e-4)continue;let ge=D(re),Ne=D(Oe),q=w(re),Z=w(Oe);ge-q<.01&&Ne-Z<.01||(M<0?_.quad([A,q,re],[A,Z,Oe],[A,Ne,Oe],[A,ge,re],L):_.quad([A,Z,Oe],[A,q,re],[A,ge,re],[A,Ne,Oe],L))}for(let J=0;J<24;J++){let re=-m+2*m*J/24,Oe=-m+2*m*(J+1)/24,ge=I(re),Ne=I(Oe),q=A+M*.02;M<0?_.quad([q,ge,re],[q,Ne,Oe],[q,Ne+.55,Oe*1.08],[q,ge+.55,re*1.08],U):_.quad([q,Ne,Oe],[q,ge,re],[q,ge+.55,re*1.08],[q,Ne+.55,Oe*1.08],U)}e.atlas.setM(b);let B=1.9,k=7.05,z=7.85,V=A+M*.03,G=ca("tunnel"+(d.coast>.5?1:Math.abs(n.k)%2?2:0));M<0?e.atlas.quad([V,k,-B],[V,k,B],[V,z,B],[V,z,-B],[1,1,1],G):e.atlas.quad([V,k,B],[V,k,-B],[V,z,-B],[V,z,B],[1,1,1],G)}yield;let R=d.mountain>.5;for(let M=Math.max(s,n.s-Qt*.95)+f()*3;M<Math.min(r,n.s+Qt*.95);M+=f.range(4,8)){let E=Math.abs(M-n.s)>tn-4?17:4;for(let A of[-1,1]){let P=A*(v+f.range(E,50)),I=f();Ln(e,l(M,P,-.3,f()*6,!1),R?I<.5?"maple":I<.8?"cedar":"ginkgo":I<.65?"pine":"broad",f,f.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,a,l,o,u){let c=h=>Dt(h).snow;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+t()*20;f<s;f+=t.range(22,40)){if(c(f)<.6||t()<.5)continue;let p=h*t.range(18,90);Qi(e,a(f,p,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Ji),litP:.62,fence:0,snow:!0});for(let g=0;g<2+t()*3;g++)Ln(e,a(f+t.range(-9,9),p+h*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let f=n+t()*5;f<s;f+=t.range(3,7))c(f)<.5||(t()<.32&&Ln(e,a(f,h*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Ln(e,a(f,h*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let h=Math.ceil(n/36)*36;h<s;h+=36){if(c(h)<.55)continue;let f=o(h);{let p=r(h,-(f+.95),l(h)+1.3),g=r(h+18,f+.95,l(h+18)+1.3);p.groundY=l(h),g.groundY=l(h+18),kh(e,p,1),kh(e,g,-1)}}}}*placeMountain(e,t,n,s,r,a,l,o,u){let c=h=>Dt(h).mountain;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+t()*4;f<s;f+=t.range(4.5,8.5)){if(c(f)<.45||Ti(f,Qt+6))continue;let p=o(f),g=t();if(h>0){let v=g<.5?"maple":g<.72?"ginkgo":"cedar";Ln(e,a(f,p+t.range(17,70),-.25,t()*6,!1),v,t,t.range(.9,1.3))}else{let v=g<.55?"maple":g<.8?"cedar":"ginkgo";Ln(e,a(f,-(p+t.range(3.5,34)),-.25,t()*6,!1),v,t,t.range(.95,1.35))}}yield}for(let h=n+t()*4;h<s;h+=t.range(3,6)){if(c(h)<.5)continue;let f=t()<.7,p=-(o(h)+(f?t.range(108,205):t.range(36,100)));Ln(e,a(h,p,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new je);for(let h=Math.ceil(n/10)*10;h<s;h+=10){if(c(h)<.5||Ti(h,Qt+4))continue;let f=o(h),p=r(h,-(f+.95),l(h));N0(e,p)}for(let h=Math.ceil(n/14)*14;h<s;h+=14){if(c(h)<.6)continue;let f=this.path.curv(h);if(Math.abs(f)<1/230)continue;let p=o(h);f>0?Ms(e,r(h,p+.42,l(h)),"chev_l",-1,1.25,.58):Ms(e,r(h,-(p+1.15),l(h)),"chev_r",1,1.35,.58)}}}*placeVerge(e,t,n,s,r,a,l){for(let o of[-1,1]){for(let u=n+t()*1.2;u<s;u+=t.range(.55,1.5)){if(bs(u,10)||Qn(u,31)||Ti(u,Qt+4))continue;let c=jt(u),h=l(u),f,p,g=.22,v=1;if(c==="country")f=h+(t()<.6?t.range(.2,.62):t.range(2.18,2.75)),p=.95;else if(c==="sakura")f=h+2.68+t()*1.3,p=.55,g=.3;else if(c==="coast"){if(o<0)continue;f=h+.95+t()*1.7,p=.75,g=.18}else{if(c==="snow")continue;if(c==="mountain")f=o<0?h+1+t()*.35:h+.25+t()*.2,p=o<0?.55:.18,g=.12,v=.85;else{if(qh(u,5))continue;f=h+3.02+t()*.1,p=.1,g=.08,v=.65}}if(t()>p)continue;let m=o*f;O0(e,r(u,m,a(u,m),t()*6.28,!1),t,t()<g?"flowers":"grass",v*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,a){e.color.setM(new je);let l=Math.max(1,Math.round((n-t)/2));for(let o=0;o<l;o++){let u=t+(n-t)*o/l,c=t+(n-t)*(o+1)/l,h=-(a(u)+.95),f=-(a(c)+.95),p=r(u),g=r(c),v=(y,S,R)=>s(y,S,R),m=v(u,h,p+.52),d=v(c,f,g+.52),x=v(u,h,p+.84),b=v(c,f,g+.84);e.color.quad(m,d,b,x,ce.rail),e.color.quad(d,m,x,b,[.62,.64,.66]);let _=s(u,h-.05,p);e.color.box(_[0]-.05,p,_[2]-.05,_[0]+.05,p+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(e,t,n,s,r,a,l,o,u,c,h,f,p){for(let m of[-1,1]){let d=n+t()*2;for(;d<s-2;){{let D=Dt(d);if(D.city<.62||D.mountain>.1){d+=4;continue}}{let D=Wr(d+6);if(D&&d<D.s+8.5&&d+14>D.s-8.5){d=Math.max(d+1,D.s+8.5);continue}}let x=es(d,150);if(x>145.6||x<3.4){d+=1;continue}let b=o(d),_=u(d)||3,y=b+_+.15,S=t(),R=S<.42?"shop":S<.58?"apt":S<.68?"office":S<.82?"house":S<.88?"konbini":S<.94?"parking":"gap",M=R==="shop"?t.range(5,9):R==="apt"?t.range(10,16):R==="office"?t.range(10,14):R==="house"?t.range(7,9.5):R==="konbini"?t.range(12,14):R==="parking"?t.range(7,11):t.range(2,3.5);if(d+M>s){if(s-d<5||R==="konbini")break;M=s-d-.2}{let D=Math.ceil((d+4.4)/150)*150-4.4;if(d+M>D-.1){if(D-.1-d<4){d=D+7.9;continue}M=D-.1-d}}let E=d+M/2,A=l(E),P=t.pick(Ji),I=.42;if(R==="parking"){let D=r(E,m*(y+3),A+.15);t()<.8&&G0(e,Fc(D,0,0,.5,(t()-.5)*.1),t),e.color.setM(D),e.color.box(-M/2,0,5.5,M/2,1.6,5.7,ce.concrete)}else if(R!=="gap"){let D=r(E,m*y,A+.15),w={type:R,w:M,d:R==="apt"||R==="office"?t.range(10,14):t.range(8,12),floors:R==="shop"?t.int(2,4):R==="apt"?t.int(4,9):R==="office"?t.int(4,8):2,tint:P,litP:I,fence:R==="house"&&t()<.5?1.2:0};if(Qi(e,D,t,w),R!=="house"&&t()<.28&&zh(e,r(E+(t()-.5)*(M-1.2),m*(y-.42),A+.15),t),(R==="shop"||R==="konbini")&&t()<.3)for(let L=0;L<1+t()*3;L++)I0(e,r(E-M/2+.8+L*.55,m*(y-.75),A+.15,Math.PI/2+.1),t);if(R==="house"&&t()<.6)for(let L=0;L<2+t()*3;L++)D0(e,r(E+1+L*.5,m*(y-.3),A+.15),t);if(t()<.03)for(let L=0;L<3;L++)L0(e,r(E+L*.9,m*(b+.35),A))}d+=M+t.range(.05,.5),yield}for(let x=n+t()*10;x<s-8;x+=t.range(14,26)){if(Dt(x).city<.7||Dt(x).mountain>.1||t()<.3||bs(x,18)||qh(x,15))continue;let b=o(x),_=r(x,m*(b+3.2+t.range(14,20)),l(x)+.1);Qi(e,_,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Ji),litP:.4})}if(Dt(n+30).city>.7&&Dt(n+30).mountain<.1&&t()<.65){let x=n+t()*qt;if(bs(x,24)||qh(x,20))continue;let b=r(x,m*t.range(55,150),l(x));Qi(e,b,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Ji),litP:.45})}}let g=Math.ceil(n/150),v=Math.floor((s-.01)/150);for(let m=g;m<=v;m++){let d=m*150;if(jt(d)!=="city"||Dt(d).mountain>.1)continue;let x=o(d);yield*this.intersection(e,t,d,m,r,l,o,u,h,f,p),Ms(e,r(d-1,-(x+.4),l(d)+.15),"sign_blue",1),Ms(e,r(d-6,-(x+.4),l(d)+.15),"sign_stop",1,2.1,.75),Hh(e,r(d+7,x+.4,l(d)+.15),-1),m%3===0&&Ms(e,r(d+20,-(x+.4),l(d)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,a,l,o,u){for(let f of[-1,1]){for(let p=n+t()*4;p<s;p+=t.range(7.5,10)){if(Dt(p).sakura<.45||Qn(p,30))continue;let g=o(p);Ln(e,a(p,f*(g+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&Ln(e,a(p+3,f*(g+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let p=n+(f>0?0:12);p<s;p+=24){if(jt(p)!=="sakura"||Qn(p,30))continue;let g=o(p);ua(e,r(p,f*(g+2.25),l(p)+.15)),es(p,48)<24&&$0(e,r(p+6,f*(g+3),u(p+6,f*(g+3))))}for(let p=n+t()*15;p<s;p+=t.range(14,24)){if(jt(p)!=="sakura"||t()<.35||Qn(p,45))continue;let g=o(p);Qi(e,a(p,f*(g+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Ji),litP:.45,fence:t()<.6?1.4:0})}}let h=Math.floor((n+qt/2)/480)*480+240;h>=n&&h<s&&jt(h)==="sakura"&&!Qn(h,60)&&Wh(e,r(h,0,l(h),0,!1),o(h)+1.6,6.4)}placeCoast(e,t,n,s,r,a,l,o,u,c,h){for(let g=0;g<=20;g++){let v=n+g/20*qt;if(Dt(v).coast<.85||Ti(v,Qt*1.25)){c.length&&c[c.length-1]!==null&&c.push(null);continue}let d=o(v),x=d+11,b=d+19,_=h(v,-x,_s+.06),y=h(v,-b,_s+.06);c.push([[_[0],_[1],_[2],es(v,ys),0],[y[0],y[1],y[2],es(v,ys),1]])}let f=c.indexOf(null);f>=0&&(c.length=f),c.length<2&&(c.length=0);for(let g=n+t()*6;g<s;g+=t.range(5,9)){if(jt(g)!=="coast"||Ti(g,Qt+6))continue;let v=o(g);t()<.7&&Ln(e,a(g,v+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&Ln(e,a(g+2,-(v+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let g=n+4;g<s;g+=t.range(18,30)){if(jt(g)!=="coast"||t()<.4||Ti(g,Qt*1.4))continue;let v=o(g),m=3+Math.floor(t()*5);for(let d=0;d<m;d++){let x=-(v+t.range(12,17)),b=g+t.range(-3,3);K0(e,r(b,x,Math.max(u(b,x),_s-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let g=n+12;g<s;g+=48){if(jt(g)!=="coast"||Ti(g,Qt+4))continue;let v=o(g);Bh(e,a(g,v+1),t)}if(jt(n+30)==="coast"&&t()<.5){let g=n+t()*qt,v=o(g);Ti(g,Qt+25)||Qi(e,a(g,v+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(Ji),litP:.5,fence:0})}if(jt(n+30)==="coast"&&t()<.55){let g=n+t()*qt;Q0(e,r(g,-(o(g)+t.range(45,220)),_s-.25,t()*6,!1),t)}let p=Math.floor((n+qt/2)/1500)*1500+700;p>=n&&p<s&&jt(p)==="coast"&&!Ti(p,Qt*1.6)&&j0(e,r(p,-(o(p)+75),_s-1,0,!1))}*placeCountry(e,t,n,s,r,a,l,o,u){for(let g of[-1,1]){yield;for(let v=n+t()*20;v<s;v+=t.range(20,40)){if(jt(v)!=="country"||t()<.55||bs(v,16)||Qn(v,48))continue;let m=g*t.range(16,95),d=a(v,m);Qi(e,d,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Ji),litP:.5,fence:0});for(let x=0;x<2+t()*3;x++){let b=m+g*t.range(6,14),_=v+t.range(-8,8);Ln(e,a(_,b,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let v=n+t()*8;v<s;v+=t.range(5,9)){if(jt(v)!=="country"||bs(v,7)||Qn(v,36))continue;let m=g*t.range(140,210);Ln(e,a(v,m,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!bs(v+2,8)&&!Qn(v+2,34)&&Ln(e,a(v+2,g*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let c=Math.floor((n+qt/2)/600)*600+300;if(c>=n&&c<s&&jt(c)==="country"&&!Qn(c,40)){let g=o(c);J0(e,r(c,-(g+1.6),l(c)-.08),t)}let h=Math.floor((n+qt/2)/700)*700+120;if(h>=n&&h<s&&jt(h)==="country"&&!Qn(h,40)){let g=o(h);zh(e,r(h,-(g+.95),l(h)-.08),t),Bh(e,r(h+2,-(g+.8),l(h)-.08),t)}let f=Math.floor((n+qt/2)/900)*900+450;if(f>=n&&f<s&&jt(f)==="country"&&!Qn(f,40)){let g=o(f);ep(e,a(f,g+5),t)}let p=Math.floor((n+qt/2)/380)*380+190;if(p>=n&&p<s&&jt(p)==="country"&&!Qn(p,40)&&!bs(p,30)){let g=o(p),v=(Kn(Math.round(p),5)<.5?-1:1)*(g+2.75);Y0(e,a(p,v,0))}for(let g=n;g<s;g+=30){if(jt(g)!=="country")continue;let v=this.path.curv(g);if(Math.abs(v)>1/450&&t()<.5){let m=v>0?-1:1,d=o(g);Hh(e,a(g,m*(d+.75)),m>0?-1:1)}}}};var Bc=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3473d4","#cde3f8","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#cfe0ef","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new de(e):e)),le={zenith:new de,horizon:new de,sunCol:new de,sunI:1,hemiSky:new de,hemiGround:new de,hemiI:1,fog:new de,cLit:new de,cShade:new de,cRim:new de,night:0,warm:0,overcast:0,rain:0,sunDir:new H,moonDir:new H,lightDir:new H,sunEl:0};function rp(i){let e=0;for(;e<Bc.length-2&&Bc[e+1][0]<=i;)e++;let t=Bc[e],n=Bc[e+1],s=bc(Bt((i-t[0])/(n[0]-t[0]),0,1)),r=(a,l)=>l.copy(t[a]).lerp(n[a],s);r(1,le.zenith),r(2,le.horizon),r(3,le.sunCol),le.sunI=It(t[4],n[4],s),r(5,le.hemiSky),r(6,le.hemiGround),le.hemiI=It(t[7],n[7],s),r(8,le.fog),r(9,le.cLit),r(10,le.cShade),r(11,le.cRim),le.night=It(t[12],n[12],s),le.warm=It(t[13],n[13],s),le.sunEl=op(i,le.sunDir,le.moonDir,le.lightDir)}function op(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Bt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var ly=new H,cy=new H;function $h(i,e){return op((i%1+1)%1,ly,cy,e),e}var sp={zenith:[new de("#7b8594"),new de("#141a28")],horizon:[new de("#b5bcc6"),new de("#283042")],fog:[new de("#a8b0ba"),new de("#232b3c")],hemiSky:[new de("#aab3bf"),new de("#3c4866")],hemiGround:[new de("#8b8983"),new de("#1e2030")],cLit:[new de("#d0d5dc"),new de("#2c3240")],cShade:[new de("#7c8593"),new de("#151922")]},Zh=new de;function ap(i,e){if(le.overcast=i,le.rain=e,i<=.001)return;let t=le.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Zh.copy(sp[n][0]).lerp(sp[n][1],t),le[n].lerp(Zh,i*(n==="cLit"||n==="cShade"?.75:.85));le.sunI*=1-.82*i,le.warm*=1-i,le.cRim.multiplyScalar(1-i),le.sunCol.lerp(Zh.setRGB(.85,.87,.9),i*.6)}function lp(){let i=new pt({side:bn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:le.zenith},uHorizon:{value:le.horizon},uSunDir:{value:le.sunDir},uMoonDir:{value:le.moonDir},uNoiseTex:Ve.uNoiseTex,uSunCol:{value:le.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new de},uOvercast:{value:0},uDeckLit:{value:new de},uDeckDark:{value:new de},uMilky:{value:0},uMetA:{value:new H(0,1,0)},uMetB:{value:new H(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP;
      varying vec3 vDir;
      ${Si}
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
      }`}),e=new ft(new zo(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function uy(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,a=e?6:9;for(let d=0;d<a;d++){let x=.06+i()*.05;t.push([(d/(a-1)-.5)*s+(i()-.5)*.03,.1+x*.5,(i()-.5)*.2,x])}let l=e?6:2,o=s*.82,u=.1+.09;for(let d=0;d<l;d++){let x=Math.max(1,Math.round(o/.11));for(let b=0;b<x;b++){let _=(x===1?0:b/(x-1)-.5)*o+(i()-.5)*.05+r*d;t.push([_,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,o*=e?.8:.66}let c=t.slice();for(let d of c){if(t.length>92)break;let x=1+Math.floor(i()*2);for(let b=0;b<x;b++){let _=.35+i()*2.4,y=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,y])}}let h=t.slice(0,96),f=1e9,p=-1e9,g=-1e9;for(let d of h)f=Math.min(f,d[0]-d[3]*1.12),p=Math.max(p,d[0]+d[3]*1.12),g=Math.max(g,d[1]+d[3]*1.12);let v=Math.min(1,.92/(p-f),(.95-.1)/(g-.1)),m=(f+p)/2;for(let d of h)d[0]=(d[0]-m)*v,d[1]=.1+(d[1]-.1)*v,d[3]*=v;return h}function cp(i){let t={value:Array.from({length:96},()=>new Mt)},n=new pt({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Ve.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Si}
      void main(){
        vec2 p = vec2(vUv.x - 0.5, vUv.y);
        float best = -1e9, union_ = 0.0; vec3 nrm = vec3(0.0, 0.0, 1.0);
        for (int i = 0; i < 96; i++) {
          if (i >= uN) break;
          vec4 q = uP[i]; vec2 d = p - q.xy;
          float ang = atan(d.y, d.x);
          float r = q.w * (1.0 + 0.09 * (fbm2(vec2(ang * 2.5 + float(i) * 7.1, uSeed)) - 0.5) + 0.05 * (vnoise(p * 60.0 + float(i)) - 0.5));
          float dd = dot(d, d);
          union_ = max(union_, 1.0 - smoothstep(r * 0.93, r, sqrt(dd)));
          if (dd < r * r) { float hz = sqrt(r * r - dd); float depth = q.z + hz; if (depth > best) { best = depth; nrm = normalize(vec3(d, hz)); } }
        }
        float a = union_ * smoothstep(uBase - 0.012, uBase + 0.02, p.y);
        if (a < 0.002) { gl_FragColor = vec4(0.0); return; }
        float ao = smoothstep(uBase, uBase + 0.32, p.y), grain = (fbm2(p * 18.0 + uSeed) - 0.5) * 0.1;
        // lit from the upper left (R) and from the upper right (B): the billboard blends between them,
        // so a cloud never "flips" when the sun passes behind it
        float lamL = dot(nrm, normalize(vec3(-0.55, 0.62, 0.55))), lamR = dot(nrm, normalize(vec3(0.55, 0.62, 0.55)));
        float litL = clamp((smoothstep(-0.25, 0.12, lamL) * 0.55 + smoothstep(0.32, 0.58, lamL) * 0.45) * mix(0.5, 1.0, ao) + grain, 0.0, 1.0);
        float litR = clamp((smoothstep(-0.25, 0.12, lamR) * 0.55 + smoothstep(0.32, 0.58, lamR) * 0.45) * mix(0.5, 1.0, ao) + grain, 0.0, 1.0);
        float rim = 1.0 - smoothstep(0.0, 0.55, nrm.z);
        gl_FragColor = vec4(vec3(litL, rim, litR) * a, a);
      }`,depthTest:!1,depthWrite:!1,blending:Gn}),s=new ft(new Xt(1,1),n),r=new Ns,a=new Xi;r.add(s);let l=new Ot(1024*2,1024*2,{generateMipmaps:!0,minFilter:Wn,magFilter:kt}),o=i.getRenderTarget(),u=i.autoClear,c=Pn(99);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let p=f%2===0,g=uy(c,p);g.forEach((v,m)=>t.value[m].set(v[0],v[1],v[2],v[3])),n.uniforms.uN.value=g.length,n.uniforms.uSeed.value=f*13.7,l.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(l),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:p})}return l.viewport.set(0,0,1024*2,1024*2),i.autoClear=u,i.setRenderTarget(o),n.dispose(),s.geometry.dispose(),{tex:l.texture,kinds:h,rt:l}}function up(i){let e=Pn(5),t=22,n=[],s=new Xt(1,1);s.translate(0,.5,0);let r=new Un(new Float32Array(t*4),4),a=new Un(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let l=new pt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:le.cLit},uShade:{value:le.cShade},uRim:{value:le.cRim},uHaze:{value:le.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),o=new Wi(s,l,t);o.frustumCulled=!1,o.renderOrder=-5;for(let g=0;g<t;g++){let v=g<12,m=i.kinds[(g*3+(v?0:1))%i.kinds.length],d=v?m.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:g/t*Math.PI*2+e.range(-.15,.15),d:v?e.range(2600,3400):e.range(1300,2200),base:v?e.range(-60,60):e.range(260,700),size:d,cell:m.cell,haze:v?.45:.18})}let u=new je,c=new vn,h=new H,f=new H,p=new H(0,1,0);return{group:o,update(g,v){let m=Math.atan2(le.lightDir.x,le.lightDir.z);for(let x of n)x.phi+=v*1.2/x.d;n.slice().sort((x,b)=>b.d-x.d).forEach((x,b)=>{h.set(g.x+Math.sin(x.phi)*x.d,g.y+x.base,g.z+Math.cos(x.phi)*x.d),c.setFromAxisAngle(p,x.phi+Math.PI),f.set(x.size,x.size,1),u.compose(h,c,f),o.setMatrixAt(b,u);let _=m-x.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let y=Math.max(0,Math.min(1,(_+.35)/.7)),S=1-y*y*(3-2*y);r.setXYZW(b,x.cell[0],x.cell[1],S,x.haze),a.setX(b,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+le.warm))}),o.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,l.uniforms.uOpacity.value=(1-le.night*.35)*(1-le.overcast*.55)*(1-.85*le.rain)}}}function hp(){let i=new $t;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],a=[],l=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,p=Math.sin(f)*t.R,g=Math.cos(f)*t.R,v=Sc(h/360*t.k*4,40+n*9),m=Math.pow(Math.max(0,v-.18)/.82,1.6),d=t.h*(.12+m);if(r.push(p,-60,g,p,-60+d,g),a.push(0,h/360,1,h/360),h<360){let x=h*2;l.push(x,x+1,x+2,x+1,x+3,x+2)}}let o=new xt;o.setAttribute("position",new et(r,3)),o.setAttribute("hf",new et(a,2)),o.setIndex(l);let u=new pt({side:xn,fog:!1,uniforms:{uCol:{value:new de(t.col)},uHaze:{value:le.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Ve.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Si}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),c=new ft(o,u);c.frustumCulled=!1,c.renderOrder=999,i.add(c)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-le.night))*(1-.35*le.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var Kr={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function fp(i){let e=i.get("weather"),t={mode:Kr[e]?e:"auto",kind:Kr[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return Kr[e]&&(t.ov=Kr[e][0],t.rain=Kr[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=Kr[t.kind];t.ov+=Bt(s-t.ov,-n/28,n/28);let a=t.ov>.75?r:0;t.rain+=Bt(a-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var li={uHeadPos:{value:new H},uHeadDir:{value:new H(0,0,1)},uHeadI:{value:0},uLampW:{value:[new Mt(0,-1e3,0,0),new Mt(0,-1e3,0,0)]},uLampCol:{value:new de(1,.8,.52)}},zc=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function dp(){let e=new H(42,22,42),t=new Xt(1,1),n=new ps;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Un(s,4)),n.instanceCount=2400;let r=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uAmt:{value:0},uBox:{value:e},uCol:{value:new de(1,1,1)},...li},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${zc}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),a=new ft(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*c,.33+.67*c,.42+.58*c)}}}function pp(){let e=new H(46,24,46),t=new Xt(1,1);t.translate(0,.5,0);let n=new ps;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Un(s,4)),n.instanceCount=2600;let r=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uRain:{value:0},uBox:{value:e},uCol:{value:new de(.8,.85,.95)},...li},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${zc}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new ft(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*c,.12+.83*c,.16+.84*c)}}}var Fn=64,Jh=[2.2,1.3,2.6],hy=[-2.4,.35,-1.6];function mp(){let i=new Float32Array(Fn*3),e=new Float32Array(Fn*3),t=new Float32Array(Fn*4),n=new Float32Array(Fn),s=new Uint8Array(Fn),r=new Float32Array(Fn);for(let b=0;b<Fn;b++)t[b*4]=t[b*4+1]=1;let a=new Xt(1,1),l=new ps;l.index=a.index,l.setAttribute("position",a.attributes.position),l.setAttribute("uv",a.attributes.uv),l.instanceCount=0;let o=new Float32Array(Fn*4),u=new Float32Array(Fn*4),c={uP:{value:o},uC:{value:u},uNoiseTex:Ve.uNoiseTex,uAmb:{value:new de},uSun:{value:new de},uTail:{value:new Mt},uCam:{value:new H},...li},h=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:c,vertexShader:`
      uniform vec4 uP[${Fn}], uC[${Fn}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${zc}
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
      }`}),f=new ft(l,h);f.frustumCulled=!1,f.renderOrder=4,f.visible=!1;let p=0,g=0,v=0,m=0,d=!1;function x(b,_,y,S,R,M,E,A,P,I,D){let w=p;p=(p+1)%Fn,i[w*3]=_,i[w*3+1]=y,i[w*3+2]=S,e[w*3]=R,e[w*3+1]=M,e[w*3+2]=E,t[w*4]=0,t[w*4+1]=A,t[w*4+2]=P,t[w*4+3]=I,n[w]=D,s[w]=b,r[w]=Math.random()}return{mesh:f,update(b,_,y,S,R,M,E,A,P,I,D){if(!D){if(d){for(let q=0;q<Fn;q++)t[q*4]=t[q*4+1];d=!1}f.visible=!1;return}let w=_.position,L=_.rotation.y,U=Math.cos(L),B=Math.sin(L),k=B*y,z=U*y,V=Math.min(1,Math.max(0,(y-2)/14)),G=R>.3?2:0,J=G?R:S;for(g+=24*J*V*b;g>=1;){g-=1;let q=(m^=1)?1:-1,Z=q*.67,Se=-1.28-Math.random()*.2,Ie=Math.random(),ve=Math.random(),Je=1.6+1.6*Ie,tt=G?.5+.7*ve:.9+1*ve,lt=q*(.3+.6*Math.random());x(G,w.x+Z*U+Se*B,w.y+.12,w.z-Z*B+Se*U,k*.55-B*Je+lt*U,tt,z*.55-U*Je-lt*B,G?.45+.3*Ie:.55+.35*Ie,.2+.1*ve,G?.7+.35*ve:.8+.4*ve,.5*(.5+.5*V)*Math.min(1,J*1.5))}for(v+=(5+4*V)*M*b;v>=1;){v-=1;let q=Math.random();x(1,w.x-.42*U-1.78*B,w.y+.26,w.z+.42*B-1.78*U,k*.5-B*.8,.25+.2*q,z*.5-U*.8,1.3+.6*q,.14,.8+.4*Math.random(),.32*Math.min(1,M*1.5))}let re=0,Oe=Math.exp(-Jh[0]*b),ge=Math.exp(-Jh[1]*b),Ne=Math.exp(-Jh[2]*b);for(let q=0;q<Fn;q++){let Z=q*4;if(t[Z]>=t[Z+1])continue;let Se=t[Z]+=b,Ie=t[Z+1];if(Se>=Ie)continue;let ve=s[q],Je=ve===0?Oe:ve===1?ge:Ne,tt=q*3,lt=i[tt]-I.x,dt=i[tt+1]-I.y,mt=i[tt+2]-I.z;if(lt*lt+dt*dt+mt*mt<20.25){t[Z]=Ie;continue}e[tt]*=Je,e[tt+1]=e[tt+1]*Je+hy[ve]*b,e[tt+2]*=Je,i[tt]+=e[tt]*b,i[tt+1]=Math.max(w.y+.05,i[tt+1]+e[tt+1]*b),i[tt+2]+=e[tt+2]*b;let nt=Se/Ie,gt=re*4;o[gt]=i[tt],o[gt+1]=i[tt+1],o[gt+2]=i[tt+2],o[gt+3]=t[Z+2]+(t[Z+3]-t[Z+2])*Math.sqrt(nt),u[gt]=n[q]*Math.min(1,nt*6)*(1-nt)*(1-nt),u[gt+1]=ve,u[gt+2]=r[q],re++}d=re>0,f.visible=d,l.instanceCount=re,d&&(c.uAmb.value.copy(E),c.uSun.value.copy(A),c.uTail.value.copy(P),c.uCam.value.copy(I))},shift(b,_){for(let y=0;y<Fn;y++)i[y*3]-=b,i[y*3+2]-=_}}}var Ks=24,fy=55,dy=12;function gp(){let i=[],e=new Float32Array(Ks*2*2),t=new Float32Array(Ks*2*3);for(let u=0;u<Ks;u++)if(e.set([u,-1,u,1],u*4),u<Ks-1){let c=u*2;i.push(c,c+1,c+2,c+1,c+3,c+2)}let n=new xt;n.setAttribute("position",new Ft(t,3)),n.setAttribute("aI",new Ft(e,2)),n.setIndex(i);let s=new Float32Array(Ks*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new de},uTime:{value:0},uNoiseTex:Ve.uNoiseTex},a=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${Ks}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${Si}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),l=new ft(n,a);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let o={};return{mesh:l,update(u,c,h,f,p,g,v,m){if(l.visible=g>.01,!!l.visible){for(let d=0;d<Ks;d++)u.at(c+fy+d*dy,o),s[d*4]=o.x-h,s[d*4+1]=o.y,s[d*4+2]=o.z-f,s[d*4+3]=o.h;r.uW.value=p*.85,r.uHot.value=g,r.uTime.value=v,r.uSky.value.copy(m)}}}}var jr=72;function py(){let i=[],e=[],t=(s,r,a,l,o,u)=>{i.push(...s,...r,...a),e.push(l,o,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new xt;return n.setAttribute("position",new et(i,3)),n.setAttribute("aWing",new et(e,1)),n}function vp(){let i=py(),e=new Un(new Float32Array(jr*3),3),t=new Un(new Float32Array(jr*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new pt({side:xn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:le.fog},uFogD:{value:.002},uCam:{value:new H}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Wi(i,n,jr);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},l=new je,o=new vn,u=new Hn(0,0,0,"YXZ"),c=new H,h=new H,f=()=>r.reduce((v,m)=>v+m.birds.length,0);function p(v,m,d,x){let b=v==="small"?6+Math.floor(Math.random()*7):v==="crow"?3+Math.floor(Math.random()*5):4;if(f()+b>jr)return;let _=45+Math.random()*85,y=(Math.random()-.5)*120,S=Math.random()<.5?1:-1,R=new H().copy(m).addScaledVector(d,_).addScaledVector(x,y-S*75);R.y=m.y+(v==="crow"?18+Math.random()*24:10+Math.random()*18);let M=v==="small"?11+Math.random()*4:8+Math.random()*3,E=new H().copy(x).multiplyScalar(S*M).addScaledVector(d,(Math.random()-.3)*M*.6),A=v==="small"?.8:1.45,P=Array.from({length:b},(I,D)=>({off:new H((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:v==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:v,c:R,vel:E,birds:P,size:A,life:60})}function g(v,m,d,x){if(r.some(y=>y.kind==="gull")||f()+4>jr)return;let b=new H().copy(v).addScaledVector(m,70).addScaledVector(d,-x*45);b.y=v.y+18;let _=Array.from({length:4},(y,S)=>({off:new H,ph:Math.random()*6.28,fq:5.5,w:S/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:b,vel:new H,birds:_,size:1.25,life:1e9})}return{mesh:s,update(v,m,d,x,b,_,y,S,R){n.uniforms.uTime.value=m,n.uniforms.uCam.value.copy(d);let M=y>.35&&S<.3,E=le.warm>.25&&le.sunEl<.6&&y>.2;M&&(a.small-=v)<0&&(a.small=22+Math.random()*35,_.coast<.6&&p("small",d,x,b)),(E||M&&_.city+_.country>.6&&Math.random()<4e-4)&&(a.crow-=v)<0&&(a.crow=E?14+Math.random()*18:60,p("crow",d,x,b)),_.coast>.6&&M&&g(d,x,b,1);let A=[.1+.08*y,.11+.09*y,.15+.1*y],P=0;for(let I=r.length-1;I>=0;I--){let D=r[I];if(D.kind==="gull"?(D.c.lerp(c.copy(R).addScaledVector(x,60).addScaledVector(b,-42).setY(R.y+16),Math.min(1,v*.25)),(_.coast<.4||!M)&&(D.life=Math.min(D.life,8),D.c.y+=v*6)):D.c.addScaledVector(D.vel,v),D.life-=v,D.life<0||D.kind!=="gull"&&D.c.distanceTo(d)>300){r.splice(I,1);continue}for(let w of D.birds){if(P>=jr)break;let L,U,B,k;D.kind==="gull"?(w.w+=v*(14/w.r),L=D.c.x+Math.cos(w.w)*w.r,B=D.c.z+Math.sin(w.w)*w.r,U=D.c.y+w.h+Math.sin(m*.4+w.ph)*2,k=Math.atan2(-Math.sin(w.w),Math.cos(w.w))):(L=D.c.x+w.off.x+Math.sin(m*.7+w.ph)*1.2,U=D.c.y+w.off.y+Math.sin(m*1.1+w.ph)*.6,B=D.c.z+w.off.z,k=Math.atan2(D.vel.x,D.vel.z)),u.set(0,k,Math.sin(m+w.ph)*.15),o.setFromEuler(u),h.setScalar(D.size),l.compose(c.set(L,U,B),o,h),s.setMatrixAt(P,l);let z=D.kind==="gull"?[.92*(.5+.5*y),.93*(.5+.5*y),.95*(.5+.5*y)]:D.kind==="crow"?[.05,.05,.07]:A;e.setXYZ(P,z[0],z[1],z[2]),t.setXY(P,w.fq,w.ph),P++}}s.count=P,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(v){n.uniforms.uFogD.value=v},shift(v,m){for(let d of r)d.c.x-=v,d.c.z-=m}}}function xp(){let i=new pt({fog:!1,uniforms:{uNoiseTex:Ve.uNoiseTex,uTime:{value:0},uCam:{value:new H},uSunDir:{value:le.lightDir},uSunCol:{value:le.sunCol},uHorizon:{value:le.horizon},uZenith:{value:le.zenith},uFog:{value:le.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${Si}
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
      }`}),e=new ft(new Xt(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=_s,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=le.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-le.overcast*.85}}}function _p(){return new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new de(1,1,1)},uNoiseTex:Ve.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${Si}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function yp(){return new pt({fog:!1,uniforms:{uNoiseTex:Ve.uNoiseTex,uTime:{value:0},uSunDir:{value:le.lightDir},uSunCol:{value:le.sunCol},uHorizon:{value:le.horizon},uZenith:{value:le.zenith},uFog:{value:le.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Si}
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
        float edge = smoothstep(9.5, 11.5, abs(vSU.x));               // a little foam where it meets the banks
        col = mix(col, vec3(0.85, 0.9, 0.92) * (1.0 - 0.7 * uNight), edge * 0.35 * vnoise(vec2(vSU.y * 0.5 - uTime, vSU.x)));
        float fd = dist * uFogD;
        gl_FragColor = vec4(mix(col, uFog, 1.0 - exp(-fd * fd)), 1.0);
      }`})}var pa=new H;function ci(i,e,t,n,s,r){let a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;pa.copy(e),pa[n]=0,pa.normalize();let u=.5*a/(a+l),c=1-pa.angleTo(i)/o;return Math.sign(pa[t])===1?c*u:l/(a+l)+u+u*(1-c)}var Ei=class i extends _i{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let o=new H,u=new H,c=new H(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,v=new H,m=.5/a;for(let d=0,x=0;d<h.length;d+=3,x+=2)switch(o.fromArray(h,d),u.copy(o),u.x-=Math.sign(u.x)*m,u.y-=Math.sign(u.y)*m,u.z-=Math.sign(u.z)*m,u.normalize(),h[d+0]=c.x*Math.sign(o.x)+u.x*r,h[d+1]=c.y*Math.sign(o.y)+u.y*r,h[d+2]=c.z*Math.sign(o.z)+u.z*r,f[d+0]=u.x,f[d+1]=u.y,f[d+2]=u.z,Math.floor(d/g)){case 0:v.set(1,0,0),p[x+0]=ci(v,u,"z","y",r,n),p[x+1]=1-ci(v,u,"y","z",r,t);break;case 1:v.set(-1,0,0),p[x+0]=1-ci(v,u,"z","y",r,n),p[x+1]=1-ci(v,u,"y","z",r,t);break;case 2:v.set(0,1,0),p[x+0]=1-ci(v,u,"x","z",r,e),p[x+1]=ci(v,u,"z","x",r,n);break;case 3:v.set(0,-1,0),p[x+0]=1-ci(v,u,"x","z",r,e),p[x+1]=1-ci(v,u,"z","x",r,n);break;case 4:v.set(0,0,1),p[x+0]=1-ci(v,u,"x","y",r,e),p[x+1]=1-ci(v,u,"y","x",r,t);break;case 5:v.set(0,0,-1),p[x+0]=ci(v,u,"x","y",r,e),p[x+1]=1-ci(v,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Kh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,o=new xt,u=0;for(let c=0;c<i.length;++c){let h=i[c],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(u,p,c),u+=p}}if(t){let c=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=i[f].attributes.position.count}o.setIndex(h)}for(let c in r){let h=Mp(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,h)}for(let c in a){let h=a[c][0].length;if(h!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let f=0;f<h;++f){let p=[];for(let v=0;v<a[c].length;++v)p.push(a[c][v][f]);let g=Mp(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(g)}}}return o}function Mp(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}let a=new e(r),l=new Ft(a,t,n),o=0;for(let u=0;u<i.length;++u){let c=i[u];if(c.isInterleavedBufferAttribute){let h=o/t;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<t;g++){let v=c.getComponent(f,g);l.setComponent(f+h,g,v)}}else a.set(c.array,o);o+=c.count*t}return s!==void 0&&(l.gpuType=s),l}function my(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new Vn(i);return n.colorSpace=Kt,n}function gy(){let i=document.createElement("canvas");i.width=64,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"#9fbfe6"),t.addColorStop(.45,"#4a6690"),t.addColorStop(1,"#1d2638"),e.fillStyle=t,e.fillRect(0,0,64,128),e.fillStyle="rgba(255,255,255,0.35)",e.beginPath(),e.moveTo(20,0),e.lineTo(34,0),e.lineTo(10,128),e.lineTo(-4,128),e.fill();let n=new Vn(i);return n.colorSpace=Kt,n}function bp(){let i=new $t,e=new $t,t=new $t;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new Mt,new Mt],s=new de(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},a=Ih(new un({color:"#ffffff",vertexColors:!0,gradientMap:jn}),.85,.06,"paint-l",r),l=(k,z)=>Object.assign(new de(k),{gloss:z}),o=l("#9fd8c8",1),u=l("#e9e7e0",.55),c=l("#2a2c33",.35),h=l("#1b1c20",.04),f=l("#c8ccd2",.8),p=(k,z)=>{let V=k.attributes.position.count,G=new Float32Array(V*4);for(let J=0;J<V;J++)G.set([z.r,z.g,z.b,z.gloss],J*4);return k.setAttribute("color",new et(G,4)),k},g=Ih(new un({color:"#ffffff",map:gy(),gradientMap:jn}),1.2,.08,"glass-l",r),v=new un({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:jn}),m=new un({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:jn}),d=new un({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:jn}),x=new nn({map:my()}),b=new Map,_=[],y=!1,S=new je,R=new Hn,M=new vn,E=new H(1,1,1),A=(k,z,V,G,J,re=0,Oe=0,ge=0)=>{let Ne=k.index?k.toNonIndexed():k;if(z.isColor&&(p(Ne,z),z=a),R.set(re,Oe,ge),M.setFromEuler(R),S.compose(new H(V,G,J),M,E),Ne.applyMatrix4(S),y){_.push(Ne);return}b.has(z)||b.set(z,[]),b.get(z).push(Ne)};A(new Ei(1.48,.86,3.38,4,.15),o,0,.77,0),A(new Ei(1.42,.66,2.6,4,.17),o,0,1.5,-.25),A(new Ei(1.38,.09,2.5,3,.04),u,0,1.84,-.25),A(new Xt(1.16,.5),g,0,1.53,-1.556,0,Math.PI,0),A(new Ei(.42,.045,.04,2,.015),m,0,1.752,-1.578);for(let k of[-1,1])A(new Xt(2.25,.46),g,k*.712,1.54,-.2,0,k*Math.PI/2,0),A(new Ei(.1,.12,.2,2,.04),o,k*.82,1.2,.95),A(new Ei(.14,.48,.08,2,.035),v,k*.64,1,-1.67),A(new Ei(.12,.08,.06,2,.02),d,k*.64,.7,-1.67);A(new Xt(1.2,.52),g,0,1.52,1.056,-.12,0,0),A(new Ei(1.52,.22,.22,2,.07),c,0,.42,-1.62),A(new _i(.24,.04,.05),c,0,.84,-1.69),A(new Xt(.34,.17),x,0,.72,-1.7,0,Math.PI,0),y=!0;for(let[k,z]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])A(new Pr(.29,.29,.2,20),h,k,.29,z,0,0,Math.PI/2),A(new Pr(.16,.16,.205,12),f,k,.29,z,0,0,Math.PI/2);y=!1;for(let[k,z]of b){let V=new ft(Kh(z),k);V.castShadow=k!==g&&k!==x&&k!==m,V.receiveShadow=!0,t.add(V)}{let k=new ft(Kh(_),a);k.castShadow=k.receiveShadow=!0,i.add(k)}{let V=document.createElement("canvas");V.width=48,V.height=96;let G=V.getContext("2d"),J=G.createImageData(48,96);for(let Oe=0;Oe<96;Oe++)for(let ge=0;ge<48;ge++){let Ne=Math.max(0,Math.abs((ge+.5)/48-.5)*2.1-.62),q=Math.max(0,Math.abs((Oe+.5)/96-.5)*2.05-.78),Z=Math.hypot(Ne/.42,q/.24),Se=Math.max(0,1-Z),Ie=(Oe*48+ge)*4;J.data[Ie]=J.data[Ie+1]=J.data[Ie+2]=Math.round(255*Se*Se*(3-2*Se)),J.data[Ie+3]=255}G.putImageData(J,0,0);let re=new ft(new Xt(2.2,4.1),new nn({color:0,alphaMap:new Vn(V),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));re.rotation.x=-Math.PI/2,re.position.y=.03,re.renderOrder=3,i.add(re)}let P=new $t;P.position.set(.02,1.3,-1.57),t.add(P);let I=new _i(.52,.026,.02);I.translate(.27,0,0);let D=new ft(p(I,c),a);D.rotation.z=.18,P.add(D);let w=0,L=new Go(16773328,0,70,.55,.65,1.2);L.position.set(0,.8,1.6),L.target.position.set(0,0,18),t.add(L,L.target);let U={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},B=(k,z)=>z*Math.tanh(k/z);return{group:i,lamps:n,lampCol:s,head:L,update(k,z,V,G=0,J=null){if(J){let re=B(-J.lat*.016,.045),Oe=B(-J.lon*.008,.03);U.rv+=((re-U.roll)*55-U.rv*8)*k,U.roll+=U.rv*k,U.pv+=((Oe-U.pitch)*60-U.pv*9)*k+J.kick,U.pitch+=U.pv*k,U.yv+=((J.road-U.y)*85-U.yv*8)*k+J.jolt,U.y+=U.yv*k,e.rotation.set(U.pitch,0,U.roll),e.position.y=.35+U.y}if(U.br+=((J?J.brake:0)-U.br)*Math.min(1,k*14),v.emissiveIntensity=.35+V*3.2+U.br*(1.7+V*2),m.emissiveIntensity=U.br*(2.4+V*1.6),G>.15||w%2.6>.01){w+=k;let re=w%2.6/2.6,Oe=Ne=>Ne*Ne*(3-2*Ne),ge=re<.25?Oe(re/.25):re<.5?Oe(1-(re-.25)/.25):0;D.rotation.z=.18+ge*2.5,G<=.15&&re>=.5&&(w=0)}L.intensity=V*60}}}var Qr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vy=new ds(-1,1,1,-1,0,1),jh=class extends xt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},xy=new jh,Ss=class{constructor(e){this._mesh=new ft(xy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var eo=class extends ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ks.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ss(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ma=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},kc=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Hc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new eo(Qr),this.copyPass.material.blending=Gn,this.timer=new Wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}ma!==void 0&&(a instanceof ma?n=!0:a instanceof kc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vc=class extends ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Sp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var to=class i extends ei{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:an,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Ot(r,a,{type:an,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Ot(r,a,{type:an,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let l=Sp;this.highPassUniforms=ks.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Xe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ks.clone(Qr.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader,premultipliedAlpha:!0,blending:qi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new nn,this._fsQuad=new Ss(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Xe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let l=t[a],o=a+1<e?t[a+1]:0,u=l+o;s.push((a*l+(a+1)*o)/u),r.push(u)}return new pt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};to.BlurDirectionX=new Xe(1,0);to.BlurDirectionY=new Xe(0,1);var Qh=class extends ei{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Ot(4,4,{type:an,depthBuffer:!1,minFilter:kt,magFilter:kt,generateMipmaps:!1}),this.mat=new pt({uniforms:{tDiffuse:{value:null},uTexel:{value:new Xe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new Ss(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},_y={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Xe(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Xe(1/1280,1/720)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function Tp(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let a=i.getSize(new Xe),l=new Ot(a.x*i.getPixelRatio(),a.y*i.getPixelRatio(),{type:an,samples:n}),o=new Hc(i,l);o.addPass(new Vc(e,t));let u=new Qh;o.addPass(u);let c=new to(new Xe(a.x*r*.5,a.y*r*.5),.42,.55,.86);o.addPass(c);let h=new eo(_y);h.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},h.material.toneMapped=!1,o.addPass(h);let f=o.render.bind(o);return o.render=p=>{h.uniforms.toneMappingExposure.value=i.toneMappingExposure,f(p)},{composer:o,bloom:c,grade:h,refl:u}}function Ep(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let oe=0;oe<2;oe++){let _e=s.getChannelData(oe);for(let me=0;me<n;me++)_e[me]=(Math.random()*2-1)*Math.pow(1-me/n,3)}let r=e.createConvolver();r.buffer=s;let a=e.createGain();a.gain.value=.55,r.connect(a),a.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let o=e.createGain();o.gain.value=.11,l.connect(o),o.connect(t),o.connect(r);let u=(oe,_e)=>{let me=e.createBuffer(1,e.sampleRate*oe,e.sampleRate),pe=me.getChannelData(0),F=0;for(let Pe=0;Pe<pe.length;Pe++)_e?(F=(F+.02*(Math.random()*2-1))/1.02,pe[Pe]=F*3.5):pe[Pe]=Math.random()*2-1;return me},c=(oe,_e,me)=>{let pe=e.createBufferSource();pe.buffer=oe,pe.loop=!0;let F=e.createBiquadFilter();F.type=_e,F.frequency.value=me;let Pe=e.createGain();return Pe.gain.value=0,pe.connect(F),F.connect(Pe),Pe.connect(t),pe.start(),{f:F,g:Pe}},h=c(u(2,!0),"lowpass",400),f=c(u(3,!1),"lowpass",700);f.g.connect(r);let p=c(u(2,!1),"bandpass",5200);p.f.Q.value=6;let g=c(u(2,!0),"lowpass",240),v=c(u(3,!1),"bandpass",2600);v.f.Q.value=.35;let m=c(u(2,!0),"lowpass",520),d=c(u(2,!1),"bandpass",1500);d.f.Q.value=.7;let x=e.createBiquadFilter(),b=e.createGain(),_=e.createOscillator(),y=e.createOscillator(),S=e.createGain();_.type="sawtooth",y.type="triangle",x.type="lowpass",x.frequency.value=320,x.Q.value=.6,b.gain.value=0,S.gain.value=.5,_.connect(x),y.connect(S),S.connect(x),x.connect(b),b.connect(t),_.start(),y.start();let R=c(u(3,!1),"bandpass",750);R.f.Q.value=.6;let M=c(u(3,!0),"lowpass",420),E=c(u(2,!0),"lowpass",140),A=u(.03,!1),P=0;function I(oe,_e){let me=e.createBufferSource(),pe=e.createBiquadFilter(),F=e.createGain();me.buffer=A,pe.type="bandpass",pe.frequency.value=1800+Math.random()*2600,pe.Q.value=1.2,F.gain.setValueAtTime(_e*(.02+Math.random()*.03),oe),F.gain.exponentialRampToValueAtTime(1e-4,oe+.03),me.connect(pe),pe.connect(F),F.connect(t),me.start(oe),me.stop(oe+.04)}let D=0,w=0;function L(oe,_e){let me=e.createOscillator(),pe=e.createOscillator(),F=e.createGain(),Pe=e.createBiquadFilter();Pe.type="bandpass",Pe.frequency.value=1150,Pe.Q.value=2.2,me.type="square",me.frequency.value=745,pe.type="triangle",pe.frequency.value=1490,F.gain.setValueAtTime(0,oe),F.gain.linearRampToValueAtTime(.085*_e,oe+.004),F.gain.exponentialRampToValueAtTime(1e-4,oe+.3),me.connect(Pe),pe.connect(Pe),Pe.connect(F),F.connect(t),F.connect(r),me.start(oe),pe.start(oe),me.stop(oe+.33),pe.stop(oe+.33)}function U(oe,_e){let me=e.createOscillator(),pe=e.createGain();me.type="sine",me.frequency.setValueAtTime(110,oe),me.frequency.exponentialRampToValueAtTime(48,oe+.12),pe.gain.setValueAtTime(1e-4,oe),pe.gain.linearRampToValueAtTime(.22*_e,oe+.006),pe.gain.exponentialRampToValueAtTime(1e-4,oe+.17),me.connect(pe),pe.connect(t),me.start(oe),me.stop(oe+.2)}let B=e.createGain();B.gain.value=1,B.connect(t);let k=e.createGain();k.gain.value=.35,B.connect(k),k.connect(r);let z=(oe=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return B;let _e=e.createStereoPanner();return _e.pan.value=oe,_e.connect(B),_e};function V(oe,_e,me,pe,F,Pe,We="sine",O=0){let T=e.createOscillator(),Y=e.createGain();if(T.type=We,T.frequency.setValueAtTime(_e,oe),T.frequency.exponentialRampToValueAtTime(me,oe+pe),O){let N=e.createOscillator(),ee=e.createGain();N.frequency.value=O,ee.gain.value=_e*.012,N.connect(ee),ee.connect(T.frequency),N.start(oe),N.stop(oe+pe+.05)}return Y.gain.setValueAtTime(1e-4,oe),Y.gain.linearRampToValueAtTime(F,oe+Math.min(.04,pe*.25)),Y.gain.setValueAtTime(F,oe+pe*.7),Y.gain.exponentialRampToValueAtTime(1e-4,oe+pe),T.connect(Y),Y.connect(Pe),T.start(oe),T.stop(oe+pe+.02),Y}function G(oe,_e){let me=z(),pe=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let Pe=0;Pe<pe;Pe++){let We=oe+Pe*(.09+Math.random()*.07);V(We,F,F*(1.2+Math.random()*.3),.06,_e*.022,me)}}function J(oe,_e){let me=z();V(oe,1120,1390,1,_e*.03,me,"sine",5.5),V(oe+1.15,2350,2150,.14,_e*.03,me),V(oe+1.32,1700,1520,.13,_e*.028,me),V(oe+1.5,2750,2480,.36,_e*.032,me)}function re(oe,_e){let me=z(),pe=1+Math.floor(Math.random()*3);for(let F=0;F<pe;F++){let Pe=oe+F*.48,We=e.createOscillator(),O=e.createBiquadFilter(),T=e.createGain();We.type="sawtooth",We.frequency.setValueAtTime(560,Pe),We.frequency.exponentialRampToValueAtTime(420,Pe+.32),O.type="bandpass",O.frequency.value=1150,O.Q.value=1.6,T.gain.setValueAtTime(1e-4,Pe),T.gain.linearRampToValueAtTime(_e*.03,Pe+.03),T.gain.exponentialRampToValueAtTime(1e-4,Pe+.36),We.connect(O),O.connect(T),T.connect(me),We.start(Pe),We.stop(Pe+.4)}}function Oe(oe,_e){let me=z(),pe=2+Math.floor(Math.random()*2);for(let F=0;F<pe;F++)V(oe+F*.42,1750,1150,.36,_e*.022,me,"triangle",11)}function ge(oe,_e){let me=z(),pe=e.createOscillator(),F=e.createBiquadFilter(),Pe=e.createGain(),We=240+Math.random()*220,O=5+Math.floor(Math.random()*4);pe.type="square",pe.frequency.value=We,F.type="bandpass",F.frequency.value=We*2.4,F.Q.value=3,Pe.gain.setValueAtTime(1e-4,oe);for(let T=0;T<O;T++){let Y=oe+T*.038;Pe.gain.linearRampToValueAtTime(_e*.014,Y+.008),Pe.gain.linearRampToValueAtTime(1e-4,Y+.028)}pe.connect(F),F.connect(Pe),Pe.connect(me),pe.start(oe),pe.stop(oe+O*.038+.05)}function Ne(oe,_e){let me=z(),pe=4300+Math.random()*700;for(let F=0;F<3;F++)V(oe+F*.055,pe,pe*1.01,.035,_e*.009,me)}function q(oe,_e){let me=z(0);for(let[pe,F,Pe]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let We=e.createOscillator(),O=e.createGain();We.type="sine",We.frequency.value=pe,We.detune.value=(Math.random()-.5)*8,O.gain.setValueAtTime(1e-4,oe),O.gain.linearRampToValueAtTime(_e*.05*F,oe+.03),O.gain.exponentialRampToValueAtTime(1e-4,oe+Pe),We.connect(O),O.connect(me),We.start(oe),We.stop(oe+Pe+.1)}}function Z(oe,_e){let me=z();for(let pe of[oe,oe+.22])V(pe,2650,2600,.5,_e*.018,me),V(pe,3950,3900,.35,_e*.008,me)}let Se={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ie=oe=>oe>1e-4?-Math.log(1-Math.random()*.98)/oe:1e9,ve=oe=>440*Math.pow(2,(oe-69)/12),Je=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],tt=[72,74,76,79,81,84,86,88],lt=0,dt=e.currentTime+.2,mt=e.currentTime+3;function nt(oe){let _e=Je[lt++%Je.length],me=11;for(let pe of _e)for(let F of[-5,5]){let Pe=e.createOscillator(),We=e.createGain();Pe.type=F<0?"sine":"triangle",Pe.frequency.value=ve(pe),Pe.detune.value=F,We.gain.setValueAtTime(0,oe),We.gain.linearRampToValueAtTime(.18,oe+3.5),We.gain.setValueAtTime(.18,oe+me-4),We.gain.linearRampToValueAtTime(0,oe+me+1),Pe.connect(We),We.connect(l),Pe.start(oe),Pe.stop(oe+me+1.2)}}function gt(oe){let _e=tt[Math.floor(Math.random()*tt.length)],me=e.createOscillator(),pe=e.createOscillator(),F=e.createGain(),Pe=e.createGain();me.type=pe.type="sine",me.frequency.value=ve(_e),pe.frequency.value=ve(_e)*2.01,Pe.gain.value=.25,pe.connect(Pe),Pe.connect(F),F.gain.setValueAtTime(0,oe),F.gain.linearRampToValueAtTime(.05,oe+.02),F.gain.exponentialRampToValueAtTime(1e-4,oe+4),me.connect(F),F.connect(r),F.connect(t),me.start(oe),pe.start(oe),me.stop(oe+4.2),pe.stop(oe+4.2)}return{ac:e,muted:!1,tyres:d,engG:b,bump(oe){U(e.currentTime+.01,oe)},update(oe,_e,me,pe={}){let F=e.currentTime;if((pe.bell||0)>.01)for(D<F&&(D=F+.02);D<F+.12;)L(D,pe.bell),D+=.41;let Pe=pe.rain||0;v.g.gain.setTargetAtTime(Pe*.05,F,.6),m.g.gain.setTargetAtTime(Pe*.05,F,.6);let We=(pe.wetRoad||0)*Math.min(1,oe)**1.5,O=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(d.g.gain.setTargetAtTime(We*.045*O,F,.4),d.f.frequency.setTargetAtTime(900+1500*Math.min(oe,2),F,.4),Pe>.05&&pe.roof)for(P<F&&(P=F+.02);P<F+.12;)I(P,Pe),P+=.04+Math.random()*.12/Pe;let T=pe.water||0,Y=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);R.g.gain.setTargetAtTime(T*.035*Y,F,.25),R.f.frequency.setTargetAtTime(600+400*Y,F,.25);let N=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),ee=pe.rush||0;M.g.gain.setTargetAtTime(((_e.mountain||0)+(_e.snow||0)*.7)*.06*N+ee*.055,F,.8),M.f.frequency.setTargetAtTime(260+420*N+ee*500,F,.8);let xe=pe.train||0;if(g.g.gain.setTargetAtTime(xe*.16,F,.2),xe>.04)for(w<F&&(w=F+.02);w<F+.12;)U(w,xe),U(w+.15,xe*.8),w+=1.2;for(;dt<F+1;)nt(dt),dt+=8;mt<F+.5&&(gt(mt),mt+=1.5+Math.random()*4.5);let Te=pe.tunnel||0;{let W=pe.speed||0,we=pe.load||0,ie=850+2400*(1-Math.exp(-W/15))+Math.max(0,W-25)*60+we*1300,Re=ie/40;_.frequency.setTargetAtTime(Re,F,.25),y.frequency.setTargetAtTime(Re*2,F,.25),x.frequency.setTargetAtTime(200+ie*.08+we*260,F,.3),b.gain.setTargetAtTime((.008+.01*Math.min(1,W/15)+.024*we)*(1-.6*(pe.rush||0))*(pe.roof===!1?.5:1)*(1+.7*Te),F,.3)}h.g.gain.setTargetAtTime((.03+oe*.06)*(1+1.6*Te),F,.35),h.f.frequency.setTargetAtTime((250+oe*500)*(1+.5*Te),F,.35),E.g.gain.setTargetAtTime(Te*.07,F,.4),a.gain.setTargetAtTime(.55+.6*Te,F,.4);let ne=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);f.g.gain.setTargetAtTime(_e.coast*(.012+ne*.05),F,.3),f.f.frequency.setTargetAtTime(400+ne*900,F,.3);let Q=1-Math.min(1,Pe*1.4),ue=1-me,be=pe.dusk||0,he=_e.snow||0,Ee=1-he,ke={sparrow:me*Q*.22*(.3+_e.city*.5+_e.sakura+_e.country*.8+_e.coast*.2+(_e.mountain||0)*.5)*(1-he*.8),uguisu:me*Q*_e.sakura*.06,crow:Q*(be*.14+me*(_e.city+_e.country+(_e.mountain||0)*1.5+he*2.5)*.012),gull:me*_e.coast*Q*.16,frog:ue*(_e.country*5+_e.sakura*.6+_e.coast*.3)*(1+Pe*.6)*Ee,cricket:ue*Q*(1.6-_e.city*1.1+(_e.mountain||0)*.8)*Ee,bike:me*Q*_e.city*.014,bell:he*.022+(_e.mountain||0)*.006},He={sparrow:G,uguisu:J,crow:re,gull:Oe,frog:ge,cricket:Ne,bike:Z,bell:q};for(let W in ke)F<Se[W]||(ke[W]>1e-4&&He[W](F+.05,.6+Math.random()*.4),Se[W]=F+Math.max(.12,Ie(ke[W]||1e-6)));let rt=.5+.5*Math.sin(F*7)*Math.sin(F*.4);p.g.gain.setTargetAtTime((_e.country+_e.sakura*.3)*me*.006*rt*(1-(_e.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function wp(i){let t=new Xt(.075,.05),n=new nn({color:16777215,side:xn}),s=new Wi(t,n,420);s.frustumCulled=!1,s.count=0;let r=new de("#ffd0de"),a=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(_=>new de(_));for(let _=0;_<420;_++)s.setColorAt(_,r);let l=Array.from({length:420},()=>({p:new H(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),o=new je,u=new vn,c=new Hn,h=new H(1,1,1),f=new H,p=90,g=new Float32Array(p*3),v=Array.from({length:p},()=>({p:new H(1e9,0,0),ph:Math.random()*6.28})),m=new xt;m.setAttribute("position",new Ft(g,3));let d=new Cr({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:qi,opacity:0}),x=new No(m,d);x.frustumCulled=!1;let b=(_,y,S,R,M)=>{let E=M?8+Math.random()*42:-4+Math.random()*50,A=(Math.random()-.5)*40;_.p.set(y.x+S.x*E+R.x*A,y.y-1+Math.random()*9,y.z+S.z*E+R.z*A)};return{group:[s,x],shift(_,y){for(let S of l)S.p.x-=_,S.p.z-=y;for(let S of v)S.p.x-=_,S.p.z-=y},update(_,y,S,R,M,E,A,P,I,D=0){let w=Math.floor(420*Math.min(1,E*1.1+D*.55)),L=!1;s.count=w;for(let B=0;B<w;B++){let k=l[B];f.subVectors(k.p,S);let z=f.x*R.x+f.z*R.z,V=f.x*M.x+f.z*M.z;if(k.p.x>1e8||z<-6||z>55||Math.abs(V)>24||k.p.y<A-.5){b(k,S,R,M,k.p.x<1e8);let G=Math.random()*(E+D)<D;(G!==k.leaf||G)&&(k.leaf=G,s.setColorAt(B,G?a[Math.floor(Math.random()*a.length)]:r),L=!0)}k.p.y-=k.v*_,k.p.x+=Math.sin(y*.7+k.ph)*.4*_+.25*_,k.p.z+=Math.cos(y*.5+k.ph)*.3*_,c.set(y*k.sp+k.ph,y*k.sp*.7,k.ph),u.setFromEuler(c),h.setScalar(k.leaf?1.9:1),o.compose(k.p,u,h),s.setMatrixAt(B,o)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let U=P*I;if(d.opacity=U,x.visible=U>.01,x.visible){for(let B=0;B<p;B++){let k=v[B];f.subVectors(k.p,S);let z=f.x*R.x+f.z*R.z,V=f.x*M.x+f.z*M.z;if(k.p.x>1e8||z<-4||z>60||Math.abs(V)>30){let G=2+Math.random()*55,J=(Math.random()-.5)*55;k.p.set(S.x+R.x*G+M.x*J,A+.3+Math.random()*2.2,S.z+R.z*G+M.z*J)}k.p.x+=Math.sin(y*.6+k.ph*3)*.3*_,k.p.y+=Math.sin(y*.9+k.ph)*.2*_,k.p.z+=Math.cos(y*.5+k.ph*2)*.3*_,g[B*3]=k.p.x,g[B*3+1]=k.p.y,g[B*3+2]=k.p.z}m.attributes.position.needsUpdate=!0}}}}var ht=new URLSearchParams(location.search),no=ht.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();no&&document.body.classList.add("embed");ht.has("shot")&&document.body.classList.add("shot");jd(ht.has("seed")?parseInt(ht.get("seed")):Math.random()*1e9|0);n0(ht.get("env")||"city");var _n=i=>document.getElementById(i),io=i=>{let e=_n("loading");e&&(e.textContent=i)};async function yy(){await new Promise($=>setTimeout($,30));let i=_n("c"),e=new xc({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ht.get("q")||(no||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?no?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=Kt,e.toneMapping=Xo,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Us,e.debug.checkShaderErrors=ht.has("debug");let r=new Ns;r.fog=new Po(13032946,.0019,700);let a=new Mn(52,innerWidth/innerHeight,.5,7e3),l=new Dr(16777215,3);l.castShadow=!0;let o=n==="low"?1024:n==="mid"?1536:2048;l.shadow.mapSize.set(o,o),Ch(ht.has("pcf")?parseInt(ht.get("pcf")):1);let u=62,c=l.shadow.camera,h=new je,f=new je;Object.assign(c,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let p=new H(0,1,0),g=new H,v=new H,m=new H,d=new H(0,1,0),x=new H(0,150,60),b=new H,_=new H,y=null,S=0,R=0,M=0;l.shadow.updateMatrices=function(){c.position.copy(x),c.lookAt(b),c.updateMatrixWorld(),c.updateProjectionMatrix(),f.multiplyMatrices(c.matrixWorldInverse,h).multiply(c.matrixWorld),c.projectionMatrix.multiply(f),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),this._updateMatrix(c,this.matrix,this._frustum)};let E=!0;l.shadow.bias=-4e-4;let A=()=>{l.shadow.normalBias=ht.has("nb")?parseFloat(ht.get("nb")):1.5*2*u/l.shadow.mapSize.x};A();{let[$,Ke]=(ht.get("graze")||"0,0.12").split(",").map(Number);h0($,Ke)}r.add(l,l.target);let P=new Dr(16777215,0);P.castShadow=n!=="low"&&!ht.has("nocarsh");{let $=ht.has("carsm")?parseInt(ht.get("carsm")):n==="high"?512:384;P.shadow.mapSize.set($,$)}if(Object.assign(P.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),P.shadow.bias=-2e-4,P.shadow.normalBias=.025,r.add(P,P.target),P.castShadow){let $=l.shadow.getFrustum(),Ke=P.shadow.getFrustum();for(let Me of[ft,Do]){let Tt=Me.prototype.intersectsFrustum;Me.prototype.intersectsFrustum=function(vt){return vt===Ke?this.userData.car===!0:(vt!==$||this.userData.car!==!0)&&Tt.call(this,vt)}}}let I=new Ho(10799359,13154464,1.6);r.add(I),io("painting the town\u2026"),await new Promise($=>setTimeout($,10));let D=E0();R0(D);let w=w0(e);U0(w.cells),Ve.uTuftV.value.set(w.tuftV[0],w.tuftV[1]);let L=v0(D.textures(e),w.tex),U=d0();U.update(e,0,0,0,0),io("painting the clouds\u2026"),await new Promise($=>setTimeout($,10)),F0(ht.has("leafd")?parseFloat(ht.get("leafd")):n==="high"?.72:.62),k0();let B=new Ec,k=_p(),z=yp(),V=new Oc(r,B,L,k,z),G=lp();r.add(G);let J=up(cp(e));r.add(J.group);let re=hp();r.add(re.group);let Oe=xp();r.add(Oe.mesh);let ge=bp();ge.group.rotation.order="YXZ",r.add(ge.group),ge.group.traverse($=>{$.userData.car=!0});let Ne=wp(L.glowTex);Ne.group.forEach($=>r.add($));let q=ht.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Z=Tp(e,r,a,{msaa:q==="msaa"?n==="high"?4:2:0,fxaa:q==="fxaa"});Ve.uReflTex.value=Z.refl.rt.texture;let Se=new H,Ie=new H,ve=ht.get("refl")||"auto",Je=ht.has("lightson")?parseFloat(ht.get("lightson")):-1,tt=new H,lt=ht.has("haze")?parseFloat(ht.get("haze")):1,dt=_0();r.add(dt.group);let mt=y0();r.add(mt.group);let nt=fp(ht),gt=pp(),oe=dp();r.add(gt.mesh,oe.mesh);let _e=mp();r.add(_e.mesh);let me=gp();r.add(me.mesh);let pe=new de,F=new de,Pe=new Mt,We=vp();r.add(We.mesh);let O=nt.W.rain,T=.4,Y=5.5,N={s:Math.max(100,parseFloat(ht.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Bt(parseFloat(ht.get("t"))||.4,0,.999),todPaused:ht.has("freeze"),dist:0,spray:ht.has("nospray")?0:1,cam:{low:1,eye:2,top:3,film:4}[ht.get("cam")]??(no?4:0)},ee=!1;io("building the road\u2026"),await new Promise($=>setTimeout($,10));let xe=no?620:V.ahead;V.ahead=260;let Te=ht.has("detail")?parseFloat(ht.get("detail")):380,ne=ht.has("farleaf")?parseFloat(ht.get("farleaf")):540;for(;V.update(N.s,1e9););V.flush(),V.ahead=xe;{io("preparing the light\u2026"),await new Promise(vt=>setTimeout(vt,10));let $=new $t,Ke=new xt;Ke.setAttribute("position",new et([0,0,0,.01,0,0,0,.01,0],3)),Ke.setAttribute("normal",new et([0,1,0,0,1,0,0,1,0],3)),Ke.setAttribute("uv",new et([0,0,1,0,0,1],2)),Ke.setAttribute("color",new et([1,1,1,1,1,1,1,1,1],3));let Me=[L.color,L.atlas,L.foliage,L.leaf,L.lamp,L.sig,L.sodium,L.decal,L.pool,k,z];for(let vt=0;vt<Ni.length;vt++)Me.push(la([Ni[vt]])),Me.push(la([Ni[vt],Ni[(vt+1)%Ni.length]]));for(let vt of Me){let Rt=new ft(Ke,vt);Rt.castShadow=Rt.receiveShadow=!0,Rt.frustumCulled=!1,$.add(Rt)}$.position.set(0,0,0),r.add($),l.target.position.set(0,0,0),l.position.set(0,150,60);let Tt=[gt.mesh,oe.mesh,_e.mesh,me.mesh,mt.group,dt.group,Oe.mesh].filter(vt=>!vt.visible);for(let vt of Tt)vt.visible=!0;e.setRenderTarget(Z.composer.readBuffer),e.compile(r,a),e.render(r,a),e.setRenderTarget(null);for(let vt of Tt)vt.visible=!1;r.remove($),Ke.dispose(),Z.bloom.enabled=Z.refl.enabled=!0,Z.composer.render(0),Z.bloom.enabled=Z.refl.enabled=!1}let Q={k:Math.ceil((N.s-Gs)/Vs),phase:"idle",raise:1,decided:!1,t2:0},ue={},be={},he={},Ee=new H,ke=new H,He=new H,rt=!1,W=new H,we=new H,ie=_n("spd"),Re=_n("dist"),Fe=_n("clock"),fe=_n("zone"),$e=_n("start"),qe=_n("hint"),ct=null,St=null,On=0,qn=0;function Gc($){!ee||$===St||(St=$,fe.querySelector(".jp").textContent=sa[$].jp,fe.querySelector(".en").textContent=sa[$].en,fe.classList.add("on"),clearTimeout(On),On=setTimeout(()=>fe.classList.remove("on"),5200))}function so(){if(!ee){if(ee=!0,document.body.classList.remove("pre"),!ht.has("auto"))try{ct=Ep(),ct&&ct.ac.resume()}catch{ct=null}$e.style.opacity=0,setTimeout(()=>$e.remove(),1500),no||(qe.style.opacity=.75,setTimeout(()=>qe.style.opacity=0,9e3))}}let yn={};addEventListener("keydown",$=>{yn[$.key]=!0,($.key==="m"||$.key==="M")&&ro(),($.key==="t"||$.key==="T")&&oo(),($.key==="c"||$.key==="C")&&ao(),($.key==="r"||$.key==="R")&&co(),!ee&&($.key===" "||$.key==="Enter")&&so()}),addEventListener("keyup",$=>{yn[$.key]=!1});let Jt=null;i.addEventListener("pointerdown",$=>{Jt={id:$.pointerId,x:$.clientX,y:$.clientY,sy:$.clientY,sc:N.mult}});let ga=$=>Bt($.sc*Math.exp(-(($.y-$.sy)/innerHeight)*3.4),T,Y);addEventListener("pointermove",$=>{Jt&&$.pointerId===Jt.id&&(Jt.x=$.clientX,Jt.y=$.clientY,N.mult=ga(Jt))}),addEventListener("pointerup",()=>{Jt=null}),addEventListener("pointercancel",()=>{Jt=null}),i.addEventListener("touchstart",$=>{let Ke=$.changedTouches[0];Jt={id:"touch",x:Ke.clientX,y:Ke.clientY,sy:Ke.clientY,sc:N.mult},$.preventDefault()},{passive:!1}),i.addEventListener("touchmove",$=>{if(!Jt)return;let Ke=$.changedTouches[0];Jt.x=Ke.clientX,Jt.y=Ke.clientY,N.mult=ga(Jt),$.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{Jt=null}),i.addEventListener("touchcancel",()=>{Jt=null});function ro(){ct&&(ct.toggle(),_n("snd").style.opacity=ct.muted?.4:1)}function oo(){N.todPaused=!N.todPaused,_n("tim").style.opacity=N.todPaused?.4:1}let ui=[0,1,2,4],js={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function ao(){N.cam=ui[(ui.indexOf(N.cam)+1)%ui.length],_n("cam").textContent=js[N.cam]||"\u25D0",N.cam===4&&Qs()}let lo=["chase","side","road","crane","eye","side","road"],Nt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function Qs(){let $;do $=lo[Math.floor(Math.random()*lo.length)];while($===Nt.last);{let Ke=ai(N.s+60);Ke&&Math.abs(N.s+60-Ke.s)<Qt+120&&($=Math.random()<.6?"chase":"eye")}if(Object.assign(Nt,{type:$,last:$,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),$==="road"){let Ke=N.s+40+Math.random()*18,Me=Tn(Ke,"rw"),Tt=Math.random()<.6?-1:1,vt=Tt*(Me+(Tt<0?.9:1.3)),Rt=B.at(Ke,{}),hi=Rt.y+qr(Ke,vt,Rt.y,Me);Nt.anchor={x:Rt.x+Rt.rx*vt,y:Math.max(hi,Rt.y)+1.05,z:Rt.z+Rt.rz*vt,s:Ke}}rt=!1}let Ts={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function co(){_n("wx").textContent=Ts[nt.cycle()]}_n("wx").textContent=Ts[nt.W.mode],_n("cam").textContent=js[N.cam]||"\u25D0",N.cam===4&&Qs(),_n("wx").onclick=$=>{$.stopPropagation(),co()},_n("snd").onclick=$=>{$.stopPropagation(),ro()},_n("tim").onclick=$=>{$.stopPropagation(),oo()},_n("cam").onclick=$=>{$.stopPropagation(),ao()};let uo=0,Wc=$=>{let Ke=performance.now();Ke-uo<120||(uo=Ke,$.cancelable&&$.type!=="click"&&$.preventDefault(),so())};for(let $ of["touchstart","pointerdown","mousedown","click"])$e.addEventListener($,Wc,{passive:!1});let Xc=()=>{ct&&ct.ac.state!=="running"&&ct.ac.resume()};for(let $ of["touchend","click","keydown"])addEventListener($,Xc,{passive:!0});document.addEventListener("visibilitychange",()=>{ct&&(document.hidden?ct.ac.suspend():ct.ac.resume())});let Es=!1,va="",ts=52,C=0;function X(){let $=innerWidth,Ke=innerHeight,Me=$/Ke,Tt=$+"x"+Ke+"@"+s;Tt!==va&&(va=Tt,e.setPixelRatio(s),e.setSize($,Ke,!1),Z.composer.setPixelRatio(s),Z.composer.setSize($,Ke),a.aspect=Me,ts=Me>=1?52:Bt(2*Math.atan(Math.tan(34*Math.PI/180)/Me)*180/Math.PI,52,80),a.fov=ts+C,a.updateProjectionMatrix(),Z.grade.uniforms.uAspect.value=Me,Z.grade.uniforms.uTexel.value.set(1/Z.composer.readBuffer.width,1/Z.composer.readBuffer.height),Ve.uReflRes.value.set(Z.composer.readBuffer.width,Z.composer.readBuffer.height))}addEventListener("resize",()=>{Es=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Es=!0}),X();let te=0;function K($=!0){if(s>1.05)s=Math.max(1,s-.25),Es=!0;else if(E)E=!1,Z.bloom.enabled=!1;else if(l.shadow.mapSize.x>1024)l.shadow.mapSize.set(1024,1024),A(),l.shadow.map&&(l.shadow.map.dispose(),l.shadow.map=null);else if(V.ahead>430)V.ahead=430;else return;if(te++,$)try{localStorage.setItem("icd-q",String(te))}catch{}}try{let $=parseInt(localStorage.getItem("icd-q")||"0");if(!ht.has("q"))for(let Ke=0;Ke<Math.min($,6);Ke++)K(!1);te=Math.max(te,$||0)}catch{}let j=performance.now(),ye=0,Be=0,Ce=0,ze=()=>1-le.night,Ye=0,Ze=0,Le=ht.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;Le&&(Le.gl=e.getContext(),Le.tq=Le.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let De={p:-1,a:new H,b:new H,next:5},Ge={lat:0,lon:0,road:0,jolt:0,kick:0,u:N.u,vu:0,v:0,s:N.s,yaw:0,brake:0,rk:NaN,rb:null},en=[-2.5335,-1.4665,1.4665,2.5335],Ut=[1.12,-1.12],Lt=[-24.5,24.5];function cn($){requestAnimationFrame(cn);let Ke=performance.now();Es&&(Es=!1,X());let Me=Math.min(.05,Math.max(0,($-j)/1e3));j=$,ye+=Me,N.steer=0,(yn.ArrowLeft||yn.a||yn.A)&&(N.steer=-1),(yn.ArrowRight||yn.d||yn.D)&&(N.steer=1),(yn.ArrowUp||yn.w||yn.W)&&(N.mult=Bt(N.mult*Math.exp(Me*.9),T,Y)),(yn.ArrowDown||yn.s||yn.S)&&(N.mult=Bt(N.mult*Math.exp(-Me*.9),T,Y)),Jt&&Math.abs(Jt.y-Jt.sy)<30&&(N.steer=Jt.x<innerWidth/2?-1:1),N.steer&&(N.lastInput=$,N.uHome=N.u);let Tt=Gr(Q.k);N.s-Tt>24&&(Q.k++,Tt=Gr(Q.k),Object.assign(Q,{phase:"idle",raise:1,decided:!1}));let vt=ra(Tt),Rt=Tt-N.s;vt&&!Q.decided&&Rt<150&&(Q.decided=!0,Rt>75&&ee&&N.speed*N.speed/2.5<Rt-14&&(ht.has("xing")||Kn(Q.k,99)<.8)&&(Q.phase="warn",mt.start(Tt,Kn(Q.k,7)<.5?1:-1,16))),Q.phase==="warn"?(Q.raise=Math.max(0,Q.raise-Me/6),mt.st.cleared&&(Q.phase="clear",Q.t2=0)):Q.phase==="clear"?(Q.raise=Math.max(0,Q.raise-Me/6),(Q.t2+=Me)>2.2&&(Q.phase="raise")):Q.phase==="raise"&&(Q.raise=Math.min(1,Q.raise+Me/5),Q.raise>=1&&(Q.phase="idle"));let hi=Q.phase==="warn"||Q.phase==="clear"||Q.phase==="raise"&&Q.raise<.25,Et=Tn(N.s,"speed")*N.mult*(ee?1:.55);if(Q.phase!=="idle"&&Q.raise<.8&&Rt>0){let Ae=Rt-11.2,Qe=Ae>0?Math.sqrt(2*1.25*Ae):0;Et=Math.min(Et,Qe),N.speed=Math.min(N.speed,Qe)}ht.has("park")&&(Et=0,N.speed=0),N.speed+=(Et-N.speed)*Math.min(1,Me*.5),N.s+=N.speed*Me,N.dist+=N.speed*Me;let zt=Tn(N.s,"rw");N.steer?N.u=Bt(N.u+N.steer*Me*2.4,-zt+.85,zt-.85):$-N.lastInput>3e3&&(N.u+=(Bt(N.uHome,-zt+.85,zt-.85)+Math.sin(ye/11)*.1-N.u)*Math.min(1,Me*.9)),!N.todPaused&&ee&&(N.tod=(N.tod+Me/480*(le.night>.5?1.7:1))%1),rp(N.tod),nt.update(Me);let Yt=nt.W.ov,_t=nt.W.rain;ap(Yt,_t),O=Bt(O+(_t>.25?Me/18:-Me/120),0,1);let fi=performance.now();V.update(N.s,ee?3.5:14);let Oi=performance.now();if(B.at(N.s,ue),Math.abs(ue.x-V.origin.x)>900||Math.abs(ue.z-V.origin.z)>900){let Ae=Math.round(ue.x)-V.origin.x,Qe=Math.round(ue.z)-V.origin.z;V.setOrigin(Math.round(ue.x),Math.round(ue.z)),Ee.x-=Ae,Ee.z-=Qe,ke.x-=Ae,ke.z-=Qe,Ne.shift&&Ne.shift(Ae,Qe),We.shift(Ae,Qe),_e.shift(Ae,Qe)}let Bn=V.origin.x,di=V.origin.z,Ap=(B.at(N.s+1.5,he).y-B.at(N.s-1.5,be).y)/3,Rp=(he.h-be.h)/3;if(ge.group.position.set(ue.x+ue.rx*N.u-Bn,ue.y+.01,ue.z+ue.rz*N.u-di),Me>0){let Ae=Ge.vu+((N.u-Ge.u)/Me-Ge.vu)*Math.min(1,Me*6),Qe=(Ae-Ge.vu)/Me;Ge.u=N.u,Ge.vu=Ae,Ge.lat=Qe-N.speed*N.speed*Rp,Ge.lon+=((N.speed-Ge.v)/Me-Ge.lon)*Math.min(1,Me*8),Ge.v=N.speed;let it=Q.phase!=="idle"&&Rt>0&&Rt<20&&N.speed<.5;if(Ge.brake=Ge.lon<-.6||it?1:Ge.lon>-.3?0:Ge.brake,Ge.yaw=-Bt(Math.atan(Ae/Math.max(N.speed,6))*.8,-.1,.1),Ge.road=.004*Math.sin(N.s*.48)+.003*Math.sin(N.s*.86+1.3),Ge.jolt=Ge.kick=0,vt)for(let wt=0;wt<4;wt++)for(let Ht=0;Ht<2;Ht++){let Vt=Tt+en[wt]-Ut[Ht];if(Ge.s<Vt&&N.s>=Vt){let Gt=.05+Math.min(N.speed,25)*.004;Ge.jolt+=Gt,Ge.kick+=Ht?Gt*.9:-Gt*.9,ct&&ct.bump(.25+Math.min(N.speed,25)/50)}}{let wt=Math.round((N.s-Xr)/Ws);wt!==Ge.rk&&(Ge.rk=wt,Ge.rb=Ui(N.s));let Ht=Ge.rb;if(Ht)for(let Vt=0;Vt<2;Vt++)for(let Gt=0;Gt<2;Gt++){let zn=Ht.s+Lt[Vt]-Ut[Gt];if(Ge.s<zn&&N.s>=zn){let mn=.035+Math.min(N.speed,25)*.003;Ge.jolt+=mn,Ge.kick+=Gt?mn*.9:-mn*.9,ct&&ct.bump(.2+Math.min(N.speed,25)/60)}}}Ge.s=N.s}ge.group.rotation.set(-Math.atan(Ap),ue.h+Ge.yaw,0);let ws=ai(N.s);ws&&Math.abs(N.s-ws.s)<700?(B.at(ws.s-tn,he),Ve.uTunA.value.set(he.x-Bn,he.y,he.z-di),B.at(ws.s+tn,he),Ve.uTunB.value.set(he.x-Bn,he.y,he.z-di),Ve.uTunR.value=Tn(ws.s,"rw")+1.7):(Ve.uTunA.value.set(0,-1e4,0),Ve.uTunB.value.set(0,-1e4,0));let qc=ws&&Math.abs(N.s+1-ws.s)<tn-1.5?1:0;Ze+=(qc-Ze)*Math.min(1,Me*(qc?1.6:.7)),Ve.uCarPos.value.set(ge.group.position.x+ue.fx*1.7,ge.group.position.y+.8,ge.group.position.z+ue.fz*1.7),Ve.uCarFwd.value.set(ue.fx,-.05,ue.fz).normalize(),Ve.uHead.value=qc,ge.update(Me,N.speed,Math.max(le.night,Ze),_t,Ge),dt.update(vt&&Rt>-24&&Rt<700?Pc(B,Tt):null,V.origin,Q.raise,hi,ye),mt.update(Me,B,V.origin,Ct(.15,.8,le.night),Tn(Tt,"rw")+3.2);let ef=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ht.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}],As=new H,ho=6,tf=N.cam===2;if(N.cam===4){Nt.t+=Me;{let it=ai(N.s+30);it&&Math.abs(N.s+30-it.s)<Qt+70&&Nt.type!=="chase"&&Nt.type!=="eye"&&(Nt.type="chase",Nt.t=0,Nt.dur=20,rt=!1)}(Nt.t>Nt.dur+(Nt.type==="road"?8:0)||Nt.type==="road"&&Nt.anchor&&N.s>Nt.anchor.s+24)&&Qs();let Ae=ge.group.position,Qe=Nt.type;if(Qe==="chase"||Qe==="eye"){let it=ef[Qe==="eye"?2:0];tf=Qe==="eye",B.at(N.s-it.back,be),B.at(N.s+it.ahead,he),He.set(be.x+be.rx*N.u*it.cu-Bn,be.y+it.up,be.z+be.rz*N.u*it.cu-di),As.set(he.x+he.rx*N.u*it.lu-Bn,he.y+it.lookY,he.z+he.rz*N.u*it.lu-di)}else if(Qe==="side"){B.at(N.s+1.5,be);let it=Dt(N.s),wt=it.city+it.sakura>.5,Ht=Tn(N.s,"rw"),Vt=Nt.sideSign>0?Ht+(wt?1.45:3.4):-(Ht+1.5),Gt=be.y+qr(N.s+1.5,Vt,be.y,Ht);He.set(be.x+be.rx*Vt-Bn,Math.max(Gt+1.55,be.y+1.25),be.z+be.rz*Vt-di),As.set(Ae.x+ue.fx*2.5,Ae.y+.9,Ae.z+ue.fz*2.5),ho=4}else if(Qe==="road"&&Nt.anchor)He.set(Nt.anchor.x-Bn,Nt.anchor.y,Nt.anchor.z-di),As.set(Ae.x,Ae.y+.85,Ae.z),ho=30;else{B.at(N.s-20,be),B.at(N.s+34,he);let it=14+Math.min(Nt.t,20)*.35;He.set(be.x+be.rx*N.u*.4-Bn,be.y+it,be.z+be.rz*N.u*.4-di),As.set(he.x-Bn,he.y+1,he.z-di),ho=3}}else{let Ae=ef[N.cam];B.at(N.s-Ae.back,be),B.at(N.s+Ae.ahead,he);let Qe=N.u*Ae.cu,it=Qe+(Ae.side||0);He.set(be.x+be.rx*it-Bn,be.y+Ae.up,be.z+be.rz*it-di),As.set(he.x+he.rx*N.u*Ae.lu-Bn,he.y+Ae.lookY,he.z+he.rz*N.u*Ae.lu-di)}ge.group.visible=!tf,N.cam===3?a.up.set(ue.fx,0,ue.fz):a.up.set(0,1,0),rt||(Ee.copy(He),ke.copy(As),rt=!0);let nf=1+Math.max(0,N.speed-12)/12;Ee.lerp(He,1-Math.exp(-Me*ho*nf)),ke.lerp(As,1-Math.exp(-Me*Math.min(ho,8)*nf));{let Ae=N.cam===3?0:Math.min(Bt((N.speed-16)*.22,0,11),Math.max(0,84-ts));C+=(Ae-C)*Math.min(1,Me*1.5),Math.abs(a.fov-(ts+C))>.02&&(a.fov=ts+C,a.updateProjectionMatrix())}a.position.copy(Ee),a.lookAt(ke),ht.has("yaw")&&a.rotateY(parseFloat(ht.get("yaw"))*Math.PI/180),ht.has("pitch")&&a.rotateX(parseFloat(ht.get("pitch"))*Math.PI/180),W.set(ue.fx,0,ue.fz),we.set(ue.rx,0,ue.rz);let Zt=Dt(N.s);l.color.copy(le.sunCol),l.intensity=le.sunI;{let Ae=le.lightDir;if(p.angleTo(Ae)>.1){let mn=0;if(ee&&!N.todPaused)for(let Dn=1;Dn<=60&&!($h(N.tod+Dn*.001,_).angleTo(Ae)>.09);Dn++)mn=Dn;$h(N.tod+mn*.001,p),S=R=0}g.crossVectors(d,p).normalize(),v.crossVectors(p,g),m.set(ge.group.position.x+ue.fx*26,ge.group.position.y,ge.group.position.z+ue.fz*26),l.target.position.copy(m),l.position.copy(m).addScaledVector(Ae,200);let Qe=2*u/l.shadow.mapSize.x,it=p.x/p.y-Ae.x/Ae.y,wt=p.z/p.y-Ae.z/Ae.y;Qe!==M&&(M=Qe,S=R=0);{let mn=Math.round(ge.group.position.y);if(y===null)y=mn;else if(Math.abs(ge.group.position.y-y)>3){let Dn=mn-y;S-=Dn*(it*g.x+wt*g.z),R-=Dn*(it*v.x+wt*v.z),y=mn}}let Ht=V.origin.x,Vt=V.origin.z,Gt=m.dot(g)+Ht*g.x+Vt*g.z-S,zn=m.dot(v)+Ht*v.x+Vt*v.z-R;m.addScaledVector(g,Math.round(Gt/Qe)*Qe-Gt).addScaledVector(v,Math.round(zn/Qe)*Qe-zn),b.copy(m),x.copy(m).addScaledVector(p,200),h.set(1,it,0,-y*it,0,1,0,0,0,wt,1,-y*wt,0,0,0,1)}P.target.position.set(ge.group.position.x,ge.group.position.y+.9,ge.group.position.z),P.position.copy(P.target.position).addScaledVector(le.lightDir,12),I.color.copy(le.hemiSky),I.groundColor.copy(le.hemiGround),I.intensity=le.hemiI;{let Ae=(1-le.night)*(1-Yt);if(Ae>.001){a.getWorldDirection(tt);let Qe=tt.x,it=tt.z,wt=Math.hypot(Qe,it)||1,Ht=le.sunDir,Vt=0;for(let zn=-2;zn<=2;zn++){let mn=zn*.3,Dn=Math.cos(mn),Rs=Math.sin(mn),nr=(Qe*Dn-it*Rs)/wt,ir=(Qe*Rs+it*Dn)/wt,fo=Math.max(0,nr*Ht.x+ir*Ht.z),sr=fo*fo;Vt+=sr*sr*sr}let Gt=Vt/5*(.1+.35*le.warm)*1.4*Ae*lt;le.fog.r+=le.sunCol.r*Gt,le.fog.g+=le.sunCol.g*Gt,le.fog.b+=le.sunCol.b*Gt}}r.fog.color.copy(le.fog);let sf=(Zt.city*.0022+Zt.sakura*.0019+Zt.coast*.0011+Zt.country*.0014+Zt.mountain*.0017+Zt.snow*.0021)*(1+le.night*.25);r.fog.near=sf*(1+.55*Yt+.45*_t),r.fog.far=V.ahead*.92,Ve.uSkyHor.value.copy(le.horizon),Ve.uSkyZen.value.copy(le.zenith),Ve.uTime.value=ye,Ve.uWet.value=O*(1-Zt.snow);{let Ae=Ve.uWet.value>.04&&n!=="low"&&Ze<.5&&ve!=="0";if(Z.refl.enabled=Ae&&ve!=="taps",Ve.uReflOn.value=Ae&&ve!=="copy"?1:0,Ae){a.getWorldDirection(Ie),Ie.y=0,Ie.normalize(),Se.copy(a.position).addScaledVector(Ie,1e4).project(a),Ve.uHorizon.value=Se.y*.5+.5;let Qe=Math.max(.5,a.position.y-ge.group.position.y);Ve.uReflK.value=Bt(1-2*Qe/(5+Qe),.05,1)}}Ve.uOrigin.value.set(V.origin.x,V.origin.z),Ve.uWind.value=1+.8*_t,Ve.uCloudSh.value=(1-Yt)*Ct(.04,.3,le.sunEl)*(1-le.night),Ve.uCloudSh.value>.001&&U.update(e,a.position.x,a.position.z,V.origin.x,V.origin.z);let ti=G.material.uniforms;if(ti.uNight.value=le.night,ti.uWarm.value=le.warm,ti.uTime.value=ye,ti.uCirrusCol.value.copy(le.cLit).lerp(le.horizon,.25),ti.uCirrus.value=.6*(1-Yt)*(1-.65*Ct(.4,.9,le.night)),ti.uOvercast.value=Yt,ti.uMilky.value=Ct(.55,.95,le.night)*(1-Yt),le.night>.65&&Yt<.3&&De.p<0&&(De.next-=Me)<0){let Ae=Math.atan2(ue.fx,ue.fz)+(Math.random()-.5)*1.5,Qe=.45+Math.random()*.6,it=.22+Math.random()*.2,wt=(Math.random()-.5)*.6,Ht=(Vt,Gt)=>new H(Math.cos(Vt)*Math.sin(Gt),Math.sin(Vt),Math.cos(Vt)*Math.cos(Gt));De.a.copy(Ht(Qe,Ae)),De.b.copy(Ht(Qe-it,Ae+wt)),De.p=0,De.next=ht.has("meteors")?1:6+Math.random()*20}De.p>=0&&(De.p+=Me/.85,De.p>1.3&&(De.p=-1)),ti.uMetP.value=De.p,ti.uMetA.value.copy(De.a),ti.uMetB.value.copy(De.b),ti.uDeckLit.value.copy(le.horizon).lerp(le.cLit,.35),ti.uDeckDark.value.copy(le.zenith).lerp(le.horizon,.25).multiplyScalar(.82),G.position.copy(a.position),J.update(a.position,Me),re.update(a.position,Math.max(Zt.snow,Dt(N.s+600).snow*.7));let xa=0;for(let Ae of[-150,0,250,500,800])xa=Math.max(xa,Dt(N.s+Ae).coast);Oe.mesh.visible=xa>.001,Oe.update(a.position,ye,sf*.8,Ct(0,.35,xa)),z.uniforms.uTime.value=ye,z.uniforms.uFogD.value=r.fog.near,z.uniforms.uNight.value=le.night,z.uniforms.uSpecK.value=1-le.overcast*.85,Ve.uSunDir.value.copy(le.lightDir),Ve.uSunCol.value.copy(le.sunCol),k.uniforms.uTime.value=ye,k.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*ze());let ni=Ct(.15,.8,le.night);L.atlas.emissiveIntensity=.1+ni*1.05,Ve.uLightsOn.value=Je>=0?Je:Math.max(Ct(.02,.75,le.night),.3*Yt),L.lamp.color.setRGB(.85,.85,.8).lerp(new de(3.6,2.8,1.8),ni),L.pool.opacity=ni*.42*(1+.8*O);{let Ae=ge.group.position,Qe=ge.lamps,it=Math.max(ni,Ze),wt=0,Ht=0,Vt=0,Gt=-1e3,zn=0,mn=0,Dn=-1e3,Rs=0,nr=900,ir=900;if(it>.01){let af=Math.floor(N.s/qt);for(let Yc=af-1;Yc<=af+1;Yc++){let ya=V.chunks.get(Yc);if(!ya||!ya.lamps)continue;let po=ya.lamps,lf=ya.group.position;for(let rr=0;rr<po.length;rr+=4){let Zc=po[rr]+lf.x,$c=po[rr+1],Jc=po[rr+2]+lf.z,Kc=(Zc-Ae.x)**2+($c-Ae.y)**2+(Jc-Ae.z)**2,Ma=po[rr+3]/(1+.045*Kc);Ma>wt?(Ht=wt,ir=nr,mn=Vt,Dn=Gt,Rs=zn,wt=Ma,nr=Kc,Vt=Zc,Gt=$c,zn=Jc):Ma>Ht&&(Ht=Ma,ir=Kc,mn=Zc,Dn=$c,Rs=Jc)}}a.updateMatrixWorld()}let fo=it*wt*(1+.045*nr)*(1-Ct(18,30,Math.sqrt(nr))),sr=it*Ht*(1+.045*ir)*(1-Ct(18,30,Math.sqrt(ir)));Qe[0].set(Vt,Gt,zn,1).applyMatrix4(a.matrixWorldInverse).w=fo,Qe[1].set(mn,Dn,Rs,1).applyMatrix4(a.matrixWorldInverse).w=sr,ge.lampCol.setRGB(1,.8-.32*Ze,.52-.38*Ze),li.uLampW.value[0].set(Vt,Gt,zn,fo),li.uLampW.value[1].set(mn,Dn,Rs,sr),li.uLampCol.value.copy(ge.lampCol),ge.head.getWorldPosition(li.uHeadPos.value),ge.head.target.getWorldPosition(tt),li.uHeadDir.value.copy(tt).sub(li.uHeadPos.value).normalize(),li.uHeadI.value=ge.head.intensity/60}L.pool.visible=L.pool.opacity>.003,V.lod(N.s,Te,ni>.15,ne),Ve.uNight.value=ni,Z.bloom.strength=It(.32,.55,ni),Z.bloom.threshold=It(1.35,.95,ni),Z.bloom.radius=It(.55,.35,ni);{let Ae=Math.max(ni,Ze,Ct(.25,.6,le.warm)*(1-Yt));Z.bloom.enabled=E&&Ae>.02,Z.bloom.strength*=Math.min(1,Ae*4)}e.toneMappingExposure=It(1,1.15,ni)*(1+.35*Ze),He.copy(a.position).addScaledVector(le.sunDir,1e3).project(a);let er=Z.grade.uniforms,Cp=He.z<1?1:0,Pp=Math.max(Math.abs(He.x),Math.abs(He.y));er.uSun.value.set(He.x*.5+.5,He.y*.5+.5),er.uSunVis.value=Cp*(1-Ct(1,1.9,Pp))*Ct(-.02,.15,le.sunEl)*(1-le.night)*(1-Yt)*(1-Ze),er.uSat.value=1.1-.12*Yt,er.uDay.value=ze(),er.uWarm.value=le.warm,er.uTime.value=ye,gt.update(a.position,ye,_t*(1-Ze)*(1-Zt.snow),ze());{let Ae=ai(N.s+190),Qe=(Zt.city+Zt.country+Zt.coast)*(1-Yt)*(1-O)*Ct(.6,.9,le.sunEl)*(N.mirage??1)*(Ae&&Math.abs(N.s+190-Ae.s)<330?0:1);me.update(B,N.s,V.origin.x,V.origin.z,Tn(N.s+150,"rw"),Qe,ye,le.horizon)}{let Ae=Bt(Zt.snow+Zt.mountain*.6*Math.max(le.night,1-Ct(.27,.36,N.tod)),0,1)*(1-Ze);pe.copy(le.fog).multiplyScalar(.92),F.copy(le.sunCol).multiplyScalar(Math.min(1,le.sunI/3)*(1-Yt)*.6);let Qe=Math.cos(ge.group.rotation.y),it=Math.sin(ge.group.rotation.y),wt=ge.group.position;Pe.set(wt.x-1.75*it,wt.y+.95,wt.z-1.75*Qe,Math.max(le.night,Ze)*(.5+1.2*Ge.brake)),_e.update(Me,ge.group,N.speed,Ve.uWet.value*(1-Ze),Zt.snow*(1-Ze),Ae,pe,F,Pe,a.position,N.spray)}oe.update(a.position,ye,Zt.snow*(.3+.7*Yt)*(1-Ze),ze()),We.setFog(r.fog.near),We.update(Me,ye,a.position,W,we,Zt,ze(),_t,ge.group.position);let Ip=performance.now();Ne.update(Me,ye,a.position,W,we,Zt.sakura*(1-Ze),ue.y,ni,(Zt.country+Zt.sakura*.4)*(1-_t)*(1-Ze),Zt.mountain*(1-Ze));let Lp=performance.now();if(ct){B.at(Tt,he);let Ae=Math.hypot(he.x-V.origin.x-a.position.x,he.z-V.origin.z-a.position.z),Qe=mt.st.active?mt.group.position.distanceTo(a.position):1e9,it=N.speed/15;ct.update(it<1.5?it:1.5+(it-1.5)*.4,Zt,ze(),{rush:Bt((N.speed-25)/40,0,1),bell:hi?Math.pow(Bt(1-Ae/260,0,1),1.5):0,train:Math.pow(Bt(1-Qe/230,0,1),2),rain:_t*(1-Ze)*(1-Zt.snow),wetRoad:Ve.uWet.value*(1-Ze),speed:N.speed,load:Bt(Ge.lon/3,0,1),roof:N.cam!==2,tunnel:Ze,water:(()=>{let wt=Ui(N.s);return Math.max(wt?1-Ct(12,150,Math.abs(N.s-wt.s)):0,Zt.mountain*.45)})(),dusk:le.warm*(N.tod>.5?1:.3)})}Gc(jt(N.s+40)),Le&&(e.info.autoReset=!1,e.info.reset());let _a=null;Le&&Le.tq&&(_a=Le.gl.createQuery(),Le.gl.beginQuery(Le.tq.TIME_ELAPSED_EXT,_a));let rf=performance.now();Z.composer.render(Me);let of=performance.now();if(_a){let Ae=Le.gl;for(Ae.endQuery(Le.tq.TIME_ELAPSED_EXT),Le.pend.push(_a);Le.pend.length&&Ae.getQueryParameter(Le.pend[0],Ae.QUERY_RESULT_AVAILABLE);){let Qe=Le.pend.shift(),it=Ae.getQueryParameter(Qe,Ae.QUERY_RESULT);Ae.deleteQuery(Qe),Ae.getParameter(Le.tq.GPU_DISJOINT_EXT)||(Le.gpu=it/1e6,Le.gpuN++,Le.gpuSum+=Le.gpu,Le.gpu>Le.gpuMax&&(Le.gpuMax=Le.gpu))}}let tr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(tr.world=tr.world*.95+(Oi-fi)*.05,tr.parts=tr.parts*.95+(Lp-Ip)*.05,tr.render=tr.render*.95+(of-rf)*.05,Ye=Ye*.95+(performance.now()-Ke)*.05,window.__ft=Ye,Le){let Ae=e.info,Qe=performance.now()-Ke,it={t:+ye.toFixed(2),s:Math.round(N.s),total:+Qe.toFixed(1),world:+(Oi-fi).toFixed(1),render:+(of-rf).toFixed(1),gpu:+(Le.gpu||0).toFixed(1),progs:Ae.programs.length-Le.progs,geos:Ae.memory.geometries-Le.geos,tex:Ae.memory.textures-Le.tex,calls:Ae.render.calls,tris:Ae.render.triangles};it.progs>0&&ee&&(it.newProgs=Ae.programs.slice(-it.progs).map(wt=>(wt.name||"")+":"+String(wt.cacheKey).slice(0,60))),Le.progs=Ae.programs.length,Le.geos=Ae.memory.geometries,Le.tex=Ae.memory.textures,Le.frames++,Le.sum+=Qe,Qe>Le.max&&(Le.max=Qe),Qe>12&&ee&&Le.spikes.push(it),Le.last=it}if((qn+=Me)>.25){qn=0,ie.textContent=Math.round(N.speed*3.6),Re.textContent=(N.dist/1e3).toFixed(1);let Ae=Math.floor(N.tod*1440);Fe.textContent=`${String(Math.floor(Ae/60)).padStart(2,"0")}:${String(Ae%60).padStart(2,"0")}`}Be++,ee&&Be>150&&Me>.03?Ce+=Me:Ce=Math.max(0,Ce-Me*.5),Ce>3&&!ht.has("q")&&(Ce=0,K())}window.__dbg={renderer:e,st:N,scene:r,camera:a,world:V,TOD:le,X:Q,train:mt,weather:nt,U:Ve,birds:We,cine:Nt,post:Z,car:ge,sun:l,M:L,clouds:J,sky:G,mountains:re,shadowDir:p,CM:Ge,spray:_e,get audio(){return ct}},io(""),$e.classList.add("ready"),ht.has("auto")&&so(),requestAnimationFrame(cn)}yy().catch(i=>{console.error(i),io("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
