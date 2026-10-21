var Ph=0,Vc=1,Ih=2;var Ms=1,Lh=2,lr=3,os=0,gn=1,hn=2,Fn=0,cr=1,Fi=2,Gc=3,Wc=4,Dh=5;var bs=100,Nh=101,Uh=102,Fh=103,Bh=104,Oh=200,zh=201,kh=202,Hh=203,Xc=204,qc=205,Vh=206,Gh=207,Wh=208,Xh=209,qh=210,Yh=211,Zh=212,Jh=213,$h=214,ma=0,ga=1,xa=2,Js=3,va=4,_a=5,ya=6,Ma=7,Yc=0,Kh=1,jh=2,ui=0,Zc=1,Jc=2,$c=3,Kc=4,jc=5,Qc=6,fo=7;var tu=300,as=301,Ss=302,Za=303,Ja=304,po=306,$s=1e3,xi=1001,ba=1002,$e=1003,Qh=1004;var mo=1005;var Ye=1006,$a=1007;var Bn=1008;var On=1009,eu=1010,nu=1011,ur=1012,Ka=1013,hi=1014,ti=1015,en=1016,ja=1017,Qa=1018,hr=1020,iu=35902,su=35899,ru=1021,ou=1022,zn=1023,vi=1026,ls=1027,fr=1028,tl=1029,cs=1030,el=1031;var nl=1033,go=33776,xo=33777,vo=33778,_o=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,ll=37492,cl=37496,ul=37488,hl=37489,yo=37490,fl=37491,dl=37808,pl=37809,ml=37810,gl=37811,xl=37812,vl=37813,_l=37814,yl=37815,Ml=37816,bl=37817,Sl=37818,Tl=37819,El=37820,wl=37821,Al=36492,Rl=36494,Cl=36495,Pl=36283,Il=36284,Mo=36285,Ll=36286;var Wr=2300,Sa=2301,da=2302,Dc=2303,Nc=2400,Uc=2401,Fc=2402;var tf=3200;var Dl=0,ef=1,fi="",ze="srgb",Xr="srgb-linear",qr="linear",Ae="srgb";var pa=7680;var nf=519,sf=512,rf=513,of=514,Nl=515,af=516,lf=517,Ul=518,cf=519,uf=35044;var au="300 es",li=2e3,Ks=2001;function xp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hf(){let i=Yr("canvas");return i.style.display="block",i}var ih={},js=null;function lu(...i){let t="THREE."+i.shift();js?js("log",t,...i):console.log(t,...i)}function ff(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=ff(i);let t="THREE."+i.shift();if(js)js("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=ff(i);let t="THREE."+i.shift();if(js)js("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function vs(...i){let t=i.join(" ");t in ih||(ih[t]=!0,jt(...i))}function df(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pf={[ma]:ga,[xa]:ya,[va]:Ma,[Js]:_a,[ga]:ma,[ya]:xa,[Ma]:va,[_a]:Js},_i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var cc=Math.PI/180,Zr=180/Math.PI;function bo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function _p(i,t){return(i%t+t)%t}function uc(i,t,e){return(1-e)*i+e*t}function Fr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var du=class du{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};du.prototype.isVector2=!0;var Gt=du,cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],u=n[s+1],c=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||o!==f||u!==p||c!==g){let m=o*f+u*p+c*g+h*x;m<0&&(f=-f,p=-p,g=-g,x=-x,m=-m);let d=1-l;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);d=Math.sin(d*v)/S,l=Math.sin(l*v)/S,o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+x*l}else{o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+x*l;let v=1/Math.sqrt(o*o+u*u+c*c+h*h);o*=v,u*=v,c*=v,h*=v}}t[e]=o,t[e+1]=u,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],o=n[s+1],u=n[s+2],c=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=l*g+c*h+o*p-u*f,t[e+1]=o*g+c*f+u*h-l*p,t[e+2]=u*g+c*p+l*f-o*h,t[e+3]=c*g-l*h-o*f-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,u=l(n/2),c=l(s/2),h=l(r/2),f=o(n/2),p=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],u=e[2],c=e[6],h=e[10],f=n+l+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>l&&n>h){let p=2*Math.sqrt(1+n-l-h);this._w=(c-o)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(l>h){let p=2*Math.sqrt(1+l-n-h);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(o+c)/p}else{let p=2*Math.sqrt(1+h-n-l);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,u=e._z,c=e._w;return this._x=n*c+a*l+s*u-r*o,this._y=s*c+a*o+r*l-n*u,this._z=r*c+a*u+n*o-s*l,this._w=a*c-n*l-s*o-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){let u=Math.acos(l),c=Math.sin(u);o=Math.sin(o*u)/c,e=Math.sin(e*u)/c,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pu=class pu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,u=2*(a*s-l*n),c=2*(l*e-r*s),h=2*(r*n-a*e);return this.x=e+o*u+a*h-l*c,this.y=n+o*c+l*u-r*h,this.z=s+o*h+r*c-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hc.copy(this).projectOnVector(t),this.sub(hc)}reflect(t){return this.sub(hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pu.prototype.isVector3=!0;var B=pu,hc=new B,sh=new cn,mu=class mu{constructor(t,e,n,s,r,a,l,o,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,u)}set(t,e,n,s,r,a,l,o,u){let c=this.elements;return c[0]=t,c[1]=s,c[2]=l,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],u=n[1],c=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],v=s[1],S=s[4],_=s[7],y=s[2],b=s[5],w=s[8];return r[0]=a*x+l*v+o*y,r[3]=a*m+l*S+o*b,r[6]=a*d+l*_+o*w,r[1]=u*x+c*v+h*y,r[4]=u*m+c*S+h*b,r[7]=u*d+c*_+h*w,r[2]=f*x+p*v+g*y,r[5]=f*m+p*S+g*b,r[8]=f*d+p*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],u=t[7],c=t[8];return e*a*c-e*l*u-n*r*c+n*l*o+s*r*u-s*a*o}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],u=t[7],c=t[8],h=c*a-l*u,f=l*o-c*r,p=u*r-a*o,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(s*u-c*n)*x,t[2]=(l*n-s*a)*x,t[3]=f*x,t[4]=(c*e-s*o)*x,t[5]=(s*r-l*e)*x,t[6]=p*x,t[7]=(n*o-u*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let o=Math.cos(r),u=Math.sin(r);return this.set(n*o,n*u,-n*(o*a+u*l)+a+t,-s*u,s*o,-s*(-u*a+o*l)+l+e,0,0,1),this}scale(t,e){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(t,e)),this}rotate(t){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mu.prototype.isMatrix3=!0;var ne=mu,fc=new ne,rh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yp(){let i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:rh,fromXYZ:oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:rh,fromXYZ:oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var me=yp();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ns,Ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ns===void 0&&(Ns=Yr("canvas")),Ns.width=t.width,Ns.height=t.height;let s=Ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mp=0,Qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(dc(s[a].image)):r.push(dc(s[a]))}else r=dc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var bp=0,pc=new B,Pn=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xi,s=xi,r=Ye,a=Bn,l=zn,o=On,u=i.DEFAULT_ANISOTROPY,c=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=bo(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $s:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $s:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=tu;Pn.DEFAULT_ANISOTROPY=1;var gu=class gu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,o=t.elements,u=o[0],c=o[4],h=o[8],f=o[1],p=o[5],g=o[9],x=o[2],m=o[6],d=o[10];if(Math.abs(c-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(u+1)/2,_=(p+1)/2,y=(d+1)/2,b=(c+f)/4,w=(h+x)/4,M=(g+m)/4;return S>_&&S>y?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=w/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=w/r,s=M/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gu.prototype.isVector4=!0;var Le=gu,Ea=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Pn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends Ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jr=class extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wa=class extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ya=class Ya{constructor(t,e,n,s,r,a,l,o,u,c,h,f,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,u,c,h,f,p,g,x,m)}set(t,e,n,s,r,a,l,o,u,c,h,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=l,d[13]=o,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),a=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*c,p=a*h,g=l*c,x=l*h;e[0]=o*c,e[4]=-o*h,e[8]=u,e[1]=p+g*u,e[5]=f-x*u,e[9]=-l*o,e[2]=x-f*u,e[6]=g+p*u,e[10]=a*o}else if(t.order==="YXZ"){let f=o*c,p=o*h,g=u*c,x=u*h;e[0]=f+x*l,e[4]=g*l-p,e[8]=a*u,e[1]=a*h,e[5]=a*c,e[9]=-l,e[2]=p*l-g,e[6]=x+f*l,e[10]=a*o}else if(t.order==="ZXY"){let f=o*c,p=o*h,g=u*c,x=u*h;e[0]=f-x*l,e[4]=-a*h,e[8]=g+p*l,e[1]=p+g*l,e[5]=a*c,e[9]=x-f*l,e[2]=-a*u,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){let f=a*c,p=a*h,g=l*c,x=l*h;e[0]=o*c,e[4]=g*u-p,e[8]=f*u+x,e[1]=o*h,e[5]=x*u+f,e[9]=p*u-g,e[2]=-u,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){let f=a*o,p=a*u,g=l*o,x=l*u;e[0]=o*c,e[4]=x-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*c,e[9]=-l*c,e[2]=-u*c,e[6]=p*h+g,e[10]=f-x*h}else if(t.order==="XZY"){let f=a*o,p=a*u,g=l*o,x=l*u;e[0]=o*c,e[4]=-h,e[8]=u*c,e[1]=f*h+x,e[5]=a*c,e[9]=p*h-g,e[2]=g*h-p,e[6]=l*c,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sp,t,Tp)}lookAt(t,e,n){let s=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Zi.crossVectors(n,Gn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Zi.crossVectors(n,Gn)),Zi.normalize(),Go.crossVectors(Gn,Zi),s[0]=Zi.x,s[4]=Go.x,s[8]=Gn.x,s[1]=Zi.y,s[5]=Go.y,s[9]=Gn.y,s[2]=Zi.z,s[6]=Go.z,s[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],u=n[12],c=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],S=n[7],_=n[11],y=n[15],b=s[0],w=s[4],M=s[8],T=s[12],A=s[1],P=s[5],I=s[9],L=s[13],R=s[2],D=s[6],F=s[10],O=s[14],z=s[3],U=s[7],X=s[11],H=s[15];return r[0]=a*b+l*A+o*R+u*z,r[4]=a*w+l*P+o*D+u*U,r[8]=a*M+l*I+o*F+u*X,r[12]=a*T+l*L+o*O+u*H,r[1]=c*b+h*A+f*R+p*z,r[5]=c*w+h*P+f*D+p*U,r[9]=c*M+h*I+f*F+p*X,r[13]=c*T+h*L+f*O+p*H,r[2]=g*b+x*A+m*R+d*z,r[6]=g*w+x*P+m*D+d*U,r[10]=g*M+x*I+m*F+d*X,r[14]=g*T+x*L+m*O+d*H,r[3]=v*b+S*A+_*R+y*z,r[7]=v*w+S*P+_*D+y*U,r[11]=v*M+S*I+_*F+y*X,r[15]=v*T+S*L+_*O+y*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],u=t[13],c=t[2],h=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15],v=o*p-u*f,S=l*p-u*h,_=l*f-o*h,y=a*p-u*c,b=a*f-o*c,w=a*h-l*c;return e*(x*v-m*S+d*_)-n*(g*v-m*y+d*b)+s*(g*S-x*y+d*w)-r*(g*_-x*b+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],u=t[6],c=t[10];return e*(a*c-l*u)-n*(r*c-l*o)+s*(r*u-a*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],u=t[7],c=t[8],h=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],v=e*l-n*a,S=e*o-s*a,_=e*u-r*a,y=n*o-s*l,b=n*u-r*l,w=s*u-r*o,M=c*x-h*g,T=c*m-f*g,A=c*d-p*g,P=h*m-f*x,I=h*d-p*x,L=f*d-p*m,R=v*L-S*I+_*P+y*A-b*T+w*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return t[0]=(l*L-o*I+u*P)*D,t[1]=(s*I-n*L-r*P)*D,t[2]=(x*w-m*b+d*y)*D,t[3]=(f*b-h*w-p*y)*D,t[4]=(o*A-a*L-u*T)*D,t[5]=(e*L-s*A+r*T)*D,t[6]=(m*_-g*w-d*S)*D,t[7]=(c*w-f*_+p*S)*D,t[8]=(a*I-l*A+u*M)*D,t[9]=(n*A-e*I-r*M)*D,t[10]=(g*b-x*_+d*v)*D,t[11]=(h*_-c*b-p*v)*D,t[12]=(l*T-a*P-o*M)*D,t[13]=(e*P-n*T+s*M)*D,t[14]=(x*S-g*y-m*v)*D,t[15]=(c*y-h*S+f*v)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,u=r*a,c=r*l;return this.set(u*a+n,u*l-s*o,u*o+s*l,0,u*l+s*o,c*l+n,c*o-s*a,0,u*o-s*l,c*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,u=r+r,c=a+a,h=l+l,f=r*u,p=r*c,g=r*h,x=a*c,m=a*h,d=l*h,v=o*u,S=o*c,_=o*h,y=n.x,b=n.y,w=n.z;return s[0]=(1-(x+d))*y,s[1]=(p+_)*y,s[2]=(g-S)*y,s[3]=0,s[4]=(p-_)*b,s[5]=(1-(f+d))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+S)*w,s[9]=(m-v)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Us.set(s[0],s[1],s[2]).length(),l=Us.set(s[4],s[5],s[6]).length(),o=Us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),si.copy(this);let u=1/a,c=1/l,h=1/o;return si.elements[0]*=u,si.elements[1]*=u,si.elements[2]*=u,si.elements[4]*=c,si.elements[5]*=c,si.elements[6]*=c,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,e.setFromRotationMatrix(si),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=li,o=!1){let u=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,x;if(o)g=r/(a-r),x=a*r/(a-r);else if(l===li)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===Ks)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=li,o=!1){let u=this.elements,c=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,x;if(o)g=1/(a-r),x=a/(a-r);else if(l===li)g=-2/(a-r),x=-(a+r)/(a-r);else if(l===Ks)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ya.prototype.isMatrix4=!0;var qt=Ya,Us=new B,si=new qt,Sp=new B(0,0,0),Tp=new B(1,1,1),Zi=new B,Go=new B,Gn=new B,ah=new qt,lh=new cn,Un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],u=s[5],c=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ep=0,ch=new B,Fs=new cn,Ci=new qt,Wo=new B,Br=new B,wp=new B,Ap=new cn,uh=new B(1,0,0),hh=new B(0,1,0),fh=new B(0,0,1),dh={type:"added"},Rp={type:"removed"},Bs={type:"childadded",child:null},mc={type:"childremoved",child:null},Ke=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Un,n=new cn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new ne}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(uh,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uh,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Br,Wo,this.up):Ci.lookAt(Wo,Br,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Ci),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rp),mc.child=t,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let u=0,c=o.length;u<c;u++){let h=o[u];r(t.shapes,h)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,u=this.material.length;o<u;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){let l=a(t.geometries),o=a(t.materials),u=a(t.textures),c=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){let o=[];for(let u in l){let c=l[u];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new B(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ge=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cp={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(u,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=_p(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=gc(a,r,t+1/3),this.g=gc(a,r,t),this.b=gc(a,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return me.workingToColorSpace(Sn.copy(this),t),Math.round(ve(Sn.r*255,0,255))*65536+Math.round(ve(Sn.g*255,0,255))*256+Math.round(ve(Sn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Sn.copy(this),e);let n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,u,c=(l+a)/2;if(l===a)o=0,u=0;else{let h=a-l;switch(u=c<=.5?h/(a+l):h/(2-a-l),a){case n:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-n)/h+2;break;case r:o=(n-s)/h+4;break}o/=6}return t.h=o,t.s=u,t.l=c,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=ze){me.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,s=Sn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(Xo);let n=uc(Ji.h,Xo.h,e),s=uc(Ji.s,Xo.s,e),r=uc(Ji.l,Xo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new xt;xt.NAMES=mf;var Kr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_s=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ri=new B,Pi=new B,xc=new B,Ii=new B,Os=new B,zs=new B,ph=new B,vc=new B,_c=new B,yc=new B,Mc=new Le,bc=new Le,Sc=new Le,Qi=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ri.subVectors(s,e),Pi.subVectors(n,e),xc.subVectors(t,e);let a=ri.dot(ri),l=ri.dot(Pi),o=ri.dot(xc),u=Pi.dot(Pi),c=Pi.dot(xc),h=a*u-l*l;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(u*o-l*c)*f,g=(a*c-l*o)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,Ii)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ii.x),o.addScaledVector(a,Ii.y),o.addScaledVector(l,Ii.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return Mc.setScalar(0),bc.setScalar(0),Sc.setScalar(0),Mc.fromBufferAttribute(t,e),bc.fromBufferAttribute(t,n),Sc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Mc,r.x),a.addScaledVector(bc,r.y),a.addScaledVector(Sc,r.z),a}static isFrontFacing(t,e,n,s){return ri.subVectors(n,e),Pi.subVectors(t,e),ri.cross(Pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ri.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Os.subVectors(s,n),zs.subVectors(r,n),vc.subVectors(t,n);let o=Os.dot(vc),u=zs.dot(vc);if(o<=0&&u<=0)return e.copy(n);_c.subVectors(t,s);let c=Os.dot(_c),h=zs.dot(_c);if(c>=0&&h<=c)return e.copy(s);let f=o*h-c*u;if(f<=0&&o>=0&&c<=0)return a=o/(o-c),e.copy(n).addScaledVector(Os,a);yc.subVectors(t,r);let p=Os.dot(yc),g=zs.dot(yc);if(g>=0&&p<=g)return e.copy(r);let x=p*u-o*g;if(x<=0&&u>=0&&g<=0)return l=u/(u-g),e.copy(n).addScaledVector(zs,l);let m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return ph.subVectors(r,s),l=(h-c)/(h-c+(p-g)),e.copy(s).addScaledVector(ph,l);let d=1/(m+x+f);return a=x*d,l=f*d,e.copy(n).addScaledVector(Os,a).addScaledVector(zs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox)),qo.applyMatrix4(t.matrixWorld),this.union(qo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),Yo.subVectors(this.max,Or),ks.subVectors(t.a,Or),Hs.subVectors(t.b,Or),Vs.subVectors(t.c,Or),$i.subVectors(Hs,ks),Ki.subVectors(Vs,Hs),ps.subVectors(ks,Vs);let e=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-ps.z,ps.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,ps.z,0,-ps.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-ps.y,ps.x,0];return!Tc(e,ks,Hs,Vs,Yo)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,ks,Hs,Vs,Yo))?!1:(Zo.crossVectors($i,Ki),e=[Zo.x,Zo.y,Zo.z],Tc(e,ks,Hs,Vs,Yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Li=[new B,new B,new B,new B,new B,new B,new B,new B],oi=new B,qo=new jn,ks=new B,Hs=new B,Vs=new B,$i=new B,Ki=new B,ps=new B,Or=new B,Yo=new B,Zo=new B,ms=new B;function Tc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ms.fromArray(i,r);let l=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),o=t.dot(ms),u=e.dot(ms),c=n.dot(ms);if(Math.max(-Math.max(o,u,c),Math.min(o,u,c))>l)return!1}return!0}var Je=new B,Jo=new Gt,Pp=0,We=class extends _i{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uf,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jo.fromBufferAttribute(this,e),Jo.applyMatrix3(t),this.setXY(e,Jo.x,Jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),s=Nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var jr=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qr=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ip=new jn,zr=new B,Ec=new B,Qn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ip.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);let e=zr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Ec)),this.expandByPoint(zr.copy(t.center).sub(Ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Lp=0,Kn=new qt,wc=new Ke,Gs=new B,Wn=new jn,kr=new jn,ln=new B,_e=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xp(t)?Qr:jr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];kr.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(Wn.min,kr.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,kr.max),Wn.expandByPoint(ln)):(Wn.expandByPoint(kr.min),Wn.expandByPoint(kr.max))}Wn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ln.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ln));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],o=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)ln.fromBufferAttribute(l,u),o&&(Gs.fromBufferAttribute(t,u),ln.add(Gs)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[];for(let M=0;M<n.count;M++)l[M]=new B,o[M]=new B;let u=new B,c=new B,h=new B,f=new Gt,p=new Gt,g=new Gt,x=new B,m=new B;function d(M,T,A){u.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,A),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,A),c.sub(u),h.sub(u),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),l[M].add(x),l[T].add(x),l[A].add(x),o[M].add(m),o[T].add(m),o[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let M=0,T=v.length;M<T;++M){let A=v[M],P=A.start,I=A.count;for(let L=P,R=P+I;L<R;L+=3)d(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let S=new B,_=new B,y=new B,b=new B;function w(M){y.fromBufferAttribute(s,M),b.copy(y);let T=l[M];S.copy(T),S.sub(y.multiplyScalar(y.dot(T))).normalize(),_.crossVectors(b,T);let P=_.dot(o[M])<0?-1:1;a.setXYZW(M,S.x,S.y,S.z,P)}for(let M=0,T=v.length;M<T;++M){let A=v[M],P=A.start,I=A.count;for(let L=P,R=P+I;L<R;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,l=new B,o=new B,u=new B,c=new B,h=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),u.fromBufferAttribute(n,m),l.add(c),o.add(c),u.add(c),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(l,o){let u=l.array,c=l.itemSize,h=l.normalized,f=new u.constructor(o.length*c),p=0,g=0;for(let x=0,m=o.length;x<m;x++){l.isInterleavedBufferAttribute?p=o[x]*l.data.stride+l.offset:p=o[x]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new We(f,c,h)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],u=t(o,n);e.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let o=[],u=r[l];for(let c=0,h=u.length;c<h;c++){let f=u[c],p=t(f,n);o.push(p)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let u=a[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let u in o)o[u]!==void 0&&(t[u]=o[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let u=n[o];t.data.attributes[o]=u.toJSON(t.data)}let s={},r=!1;for(let o in this.morphAttributes){let u=this.morphAttributes[o],c=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];c.push(p.toJSON(t.data))}c.length>0&&(s[o]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let c=s[u];this.setAttribute(u,c.clone(e))}let r=t.morphAttributes;for(let u in r){let c=[],h=r[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,c=a.length;u<c;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ac=new B,Dp=new B,Np=new ne,ai=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ac.subVectors(n,e).cross(Dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Np.getNormalMatrix(t),s=this.coplanarPoint(Ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Up=0,yi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=cr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ai().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Di=new B,Rc=new B,$o=new B,Ko=new B,er=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rc.copy(t).add(e).multiplyScalar(.5),$o.copy(e).sub(t).normalize(),Ko.copy(this.origin).sub(Rc);let r=t.distanceTo(e)*.5,a=-this.direction.dot($o),l=Ko.dot(this.direction),o=-Ko.dot($o),u=Ko.lengthSq(),c=Math.abs(1-a*a),h,f,p,g;if(c>0)if(h=a*o-l,f=a*l-o,g=r*c,h>=0)if(f>=-g)if(f<=g){let x=1/c;h*=x,f*=x,p=h*(h+a*f+2*l)+f*(a*h+f+2*o)+u}else f=r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f=-r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f<=-g?(h=Math.max(0,-(-a*r+l)),f=h>0?-r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u):f<=g?(h=0,f=Math.min(Math.max(-r,-o),r),p=f*(f+2*o)+u):(h=Math.max(0,-(a*r+l)),f=h>0?r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u);else f=a>0?-r:r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Rc).addScaledVector($o,f),p}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o,u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),c>=0?(r=(t.min.y-f.y)*c,a=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,a=(t.min.y-f.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(l=(t.min.z-f.z)*h,o=(t.max.z-f.z)*h):(l=(t.max.z-f.z)*h,o=(t.min.z-f.z)*h),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,o=l.x,u=l.y,c=l.z,h=t.x-a.x,f=t.y-a.y,p=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,d=n.x-a.x,v=n.y-a.y,S=n.z-a.z,_=Math.abs(o),y=Math.abs(u),b=Math.abs(c),w,M,T,A,P,I,L,R,D,F,O,z;if(_>=y&&_>=b?(T=o,I=h,D=g,z=d,o>=0?(w=u,M=c,A=f,P=p,L=x,R=m,F=v,O=S):(w=c,M=u,A=p,P=f,L=m,R=x,F=S,O=v)):y>=b?(T=u,I=f,D=x,z=v,u>=0?(w=c,M=o,A=p,P=h,L=m,R=g,F=S,O=d):(w=o,M=c,A=h,P=p,L=g,R=m,F=d,O=S)):(T=c,I=p,D=m,z=S,c>=0?(w=o,M=u,A=h,P=f,L=g,R=x,F=d,O=v):(w=u,M=o,A=f,P=h,L=x,R=g,F=v,O=d)),T===0)return null;let U=w/T,X=M/T,H=1/T,Q=A-U*I,dt=P-X*I,Wt=L-U*D,Yt=R-X*D,zt=F-U*z,Y=O-X*z,it=zt*Yt-Y*Wt,q=Q*Y-dt*zt,Nt=Wt*dt-Yt*Q;if(s){if(it<0||q<0||Nt<0)return null}else if((it<0||q<0||Nt<0)&&(it>0||q>0||Nt>0))return null;let wt=it+q+Nt;if(wt===0)return null;let At=H*(it*I+q*D+Nt*z);return(wt>0?At<0:At>0)?null:this.at(At/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mh=new qt,gs=new er,jo=new Qn,gh=new B,Qo=new B,ta=new B,ea=new B,Cc=new B,na=new B,xh=new B,ia=new B,pe=class extends Ke{constructor(t=new _e,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){na.set(0,0,0);for(let o=0,u=r.length;o<u;o++){let c=l[o],h=r[o];c!==0&&(Cc.fromBufferAttribute(h,t),a?na.addScaledVector(Cc,c):na.addScaledVector(Cc.sub(e),c))}e.add(na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(jo.containsPoint(gs.origin)===!1&&(gs.intersectSphere(jo,gh)===null||gs.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(r).invert(),gs.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,y=S;_<y;_+=3){let b=l.getX(_),w=l.getX(_+1),M=l.getX(_+2);s=sa(this,d,t,n,u,c,h,b,w,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=l.getX(m),S=l.getX(m+1),_=l.getX(m+2);s=sa(this,a,t,n,u,c,h,v,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,y=S;_<y;_+=3){let b=_,w=_+1,M=_+2;s=sa(this,d,t,n,u,c,h,b,w,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,S=m+1,_=m+2;s=sa(this,a,t,n,u,c,h,v,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Fp(i,t,e,n,s,r,a,l){let o;if(t.side===gn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===os,l),o===null)return null;ia.copy(l),ia.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(ia);return u<e.near||u>e.far?null:{distance:u,point:ia.clone(),object:i}}function sa(i,t,e,n,s,r,a,l,o,u){i.getVertexPosition(l,Qo),i.getVertexPosition(o,ta),i.getVertexPosition(u,ea);let c=Fp(i,t,e,n,Qo,ta,ea,xh);if(c){let h=new B;Qi.getBarycoord(xh,Qo,ta,ea,h),s&&(c.uv=Qi.getInterpolatedAttribute(s,l,o,u,h,new Gt)),r&&(c.uv1=Qi.getInterpolatedAttribute(r,l,o,u,h,new Gt)),a&&(c.normal=Qi.getInterpolatedAttribute(a,l,o,u,h,new B),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let f={a:l,b:o,c:u,normal:new B,materialIndex:0};Qi.getNormal(Qo,ta,ea,f.normal),c.face=f,c.barycoord=h}return c}var ts=class extends Pn{constructor(t=null,e=1,n=1,s,r,a,l,o,u=$e,c=$e,h,f){super(null,a,l,o,u,c,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ws=new qt,vh=new qt,ra=[],_h=new jn,Bp=new qt,Hr=new pe,Vr=new Qn,Ui=class extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new In(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),_h.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(_h)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Vr.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),t.ray.intersectsSphere(Vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),vh.multiplyMatrices(n,Ws),Hr.matrixWorld=vh,Hr.raycast(t,ra);for(let a=0,l=ra.length;a<l;a++){let o=ra[a];o.instanceId=r,o.object=this,e.push(o)}ra.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new In(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(s*this.count),s,this.count,fr,ti));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xs=new Qn,Op=new Gt(.5,.5),oa=new B,nr=class{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],u=r[3],c=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],v=r[12],S=r[13],_=r[14],y=r[15];if(s[0].setComponents(u-a,p-c,d-g,y-v).normalize(),s[1].setComponents(u+a,p+c,d+g,y+v).normalize(),s[2].setComponents(u+l,p+h,d+x,y+S).normalize(),s[3].setComponents(u-l,p-h,d-x,y-S).normalize(),n)s[4].setComponents(o,f,m,_).normalize(),s[5].setComponents(u-o,p-f,d-m,y-_).normalize();else if(s[4].setComponents(u-o,p-f,d-m,y-_).normalize(),e===li)s[5].setComponents(u+o,p+f,d+m,y+_).normalize();else if(e===Ks)s[5].setComponents(o,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);let e=Op.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Aa=class extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ra=new B,Ca=new B,yh=new qt,Gr=new er,aa=new Qn,Pc=new B,Mh=new B,to=class extends Ke{constructor(t=new _e,e=new Aa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ra.fromBufferAttribute(e,s-1),Ca.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ra.distanceTo(Ca);t.setAttribute("lineDistance",new $t(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;yh.copy(s).invert(),Gr.copy(t.ray).applyMatrix4(yh);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=u){let d=c.getX(x),v=c.getX(x+1),S=la(this,t,Gr,o,d,v,x);S&&e.push(S)}if(this.isLineLoop){let x=c.getX(g-1),m=c.getX(p),d=la(this,t,Gr,o,x,m,g-1);d&&e.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=u){let d=la(this,t,Gr,o,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){let x=la(this,t,Gr,o,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function la(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(Ra.fromBufferAttribute(l,s),Ca.fromBufferAttribute(l,r),e.distanceSqToSegment(Ra,Ca,Pc,Mh)>n)return;Pc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Pc);if(!(u<t.near||u>t.far))return{distance:u,point:Mh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ir=class extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bh=new qt,Bc=new er,ca=new Qn,ua=new B,eo=class extends Ke{constructor(t=new _e,e=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;bh.copy(s).invert(),Bc.copy(t.ray).applyMatrix4(bh);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,x=p;g<x;g++){let m=u.getX(g);ua.fromBufferAttribute(h,m),Sh(ua,m,o,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,x=p;g<x;g++)ua.fromBufferAttribute(h,g),Sh(ua,g,o,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Sh(i,t,e,n,s,r,a){let l=Bc.distanceSqToPoint(i);if(l<e){let o=new B;Bc.closestPointToPoint(i,o),o.applyMatrix4(n);let u=s.ray.origin.distanceTo(o);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var no=class extends Pn{constructor(t=[],e=as,n,s,r,a,l,o,u,c){super(t,e,n,s,r,a,l,o,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xn=class extends Pn{constructor(t,e,n,s,r,a,l,o,u){super(t,e,n,s,r,a,l,o,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends Pn{constructor(t,e,n=hi,s,r,a,l=$e,o=$e,u,c=vi,h=1){if(c!==vi&&c!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,l,o,c,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Pa=class extends es{constructor(t,e=hi,n=as,s,r,a=$e,l=$e,o,u=vi){let c={width:t,height:t,depth:1},h=[c,c,c,c,c,c];super(t,t,e,n,s,r,a,l,o,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},io=class extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ci=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],u=[],c=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2));function g(x,m,d,v,S,_,y,b,w,M,T){let A=_/w,P=y/M,I=_/2,L=y/2,R=b/2,D=w+1,F=M+1,O=0,z=0,U=new B;for(let X=0;X<F;X++){let H=X*P-L;for(let Q=0;Q<D;Q++){let dt=Q*A-I;U[x]=dt*v,U[m]=H*S,U[d]=R,u.push(U.x,U.y,U.z),U[x]=0,U[m]=0,U[d]=b>0?1:-1,c.push(U.x,U.y,U.z),h.push(Q/w),h.push(1-X/M),O+=1}}for(let X=0;X<M;X++)for(let H=0;H<w;H++){let Q=f+H+D*X,dt=f+H+D*(X+1),Wt=f+(H+1)+D*(X+1),Yt=f+(H+1)+D*X;o.push(Q,dt,Yt),o.push(dt,Wt,Yt),z+=6}l.addGroup(p,z,T),p+=z,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var so=class i extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],l=[],o=[],u=new B,c=new Gt;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let p=n+h/e*s;u.x=t*Math.cos(p),u.y=t*Math.sin(p),a.push(u.x,u.y,u.z),l.push(0,0,1),c.x=(a[f]/t+1)/2,c.y=(a[f+1]/t+1)/2,o.push(c.x,c.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},sr=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let u=this;s=Math.floor(s),r=Math.floor(r);let c=[],h=[],f=[],p=[],g=0,x=[],m=n/2,d=0;v(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(p,2));function v(){let _=new B,y=new B,b=0,w=(e-t)/n;for(let M=0;M<=r;M++){let T=[],A=M/r,P=A*(e-t)+t;for(let I=0;I<=s;I++){let L=I/s,R=L*o+l,D=Math.sin(R),F=Math.cos(R);y.x=P*D,y.y=-A*n+m,y.z=P*F,h.push(y.x,y.y,y.z),_.set(D,w,F).normalize(),f.push(_.x,_.y,_.z),p.push(L,1-A),T.push(g++)}x.push(T)}for(let M=0;M<s;M++)for(let T=0;T<r;T++){let A=x[T][M],P=x[T+1][M],I=x[T+1][M+1],L=x[T][M+1];(t>0||T!==0)&&(c.push(A,P,L),b+=3),(e>0||T!==r-1)&&(c.push(P,I,L),b+=3)}u.addGroup(d,b,0),d+=b}function S(_){let y=g,b=new Gt,w=new B,M=0,T=_===!0?t:e,A=_===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*A,0),f.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let I=0;I<=s;I++){let R=I/s*o+l,D=Math.cos(R),F=Math.sin(R);w.x=T*F,w.y=m*A,w.z=T*D,h.push(w.x,w.y,w.z),f.push(0,A,0),b.x=D*.5+.5,b.y=F*.5*A+.5,p.push(b.x,b.y),g++}for(let I=0;I<s;I++){let L=y+I,R=P+I;_===!0?c.push(R,R+1,L):c.push(R+1,R,L),M+=3}u.addGroup(d,M,_===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ia=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];l(s),u(n),c(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let S=new B,_=new B,y=new B;for(let b=0;b<e.length;b+=3)p(e[b+0],S),p(e[b+1],_),p(e[b+2],y),o(S,_,y,v)}function o(v,S,_,y){let b=y+1,w=[];for(let M=0;M<=b;M++){w[M]=[];let T=v.clone().lerp(_,M/b),A=S.clone().lerp(_,M/b),P=b-M;for(let I=0;I<=P;I++)I===0&&M===b?w[M][I]=T:w[M][I]=T.clone().lerp(A,I/P)}for(let M=0;M<b;M++)for(let T=0;T<2*(b-M)-1;T++){let A=Math.floor(T/2);T%2===0?(f(w[M][A+1]),f(w[M+1][A]),f(w[M][A])):(f(w[M][A+1]),f(w[M+1][A+1]),f(w[M+1][A]))}}function u(v){let S=new B;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(v),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function c(){let v=new B;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let _=m(v)/2/Math.PI+.5,y=d(v)/Math.PI+.5;a.push(_,1-y)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){let S=a[v+0],_=a[v+2],y=a[v+4],b=Math.max(S,_,y),w=Math.min(S,_,y);b>.9&&w<.1&&(S<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,S){let _=v*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){let v=new B,S=new B,_=new B,y=new B,b=new Gt,w=new Gt,M=new Gt;for(let T=0,A=0;T<r.length;T+=9,A+=6){v.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),b.set(a[A+0],a[A+1]),w.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),y.copy(v).add(S).add(_).divideScalar(3);let P=m(y);x(b,A+0,v,P),x(w,A+2,S,P),x(M,A+4,_,P)}}function x(v,S,_,y){y<0&&v.x===1&&(a[S]=v.x-1),_.x===0&&_.z===0&&(a[S]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ro=class i extends Ia{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Qe=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),u=l+1,c=o+1,h=t/l,f=e/o,p=[],g=[],x=[],m=[];for(let d=0;d<c;d++){let v=d*f-a;for(let S=0;S<u;S++){let _=S*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(S/l),m.push(1-d/o)}}for(let d=0;d<o;d++)for(let v=0;v<l;v++){let S=v+u*d,_=v+u*(d+1),y=v+1+u*(d+1),b=v+1+u*d;p.push(S,_,b),p.push(_,y,b)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var oo=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),u=0,c=[],h=new B,f=new B,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],S=d/n,_=a+S*l,y=t*Math.cos(_),b=Math.sqrt(t*t-y*y),w=0;d===0&&a===0?w=.5/e:d===n&&o===Math.PI&&(w=-.5/e);for(let M=0;M<=e;M++){let T=M/e,A=s+T*r;h.x=-b*Math.cos(A),h.y=y,h.z=b*Math.sin(A),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(T+w,1-S),v.push(u++)}c.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let S=c[d][v+1],_=c[d][v],y=c[d+1][v],b=c[d+1][v+1];(d!==0||a>0)&&p.push(S,_,b),(d!==n-1||o<Math.PI)&&p.push(_,y,b)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Th(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Th(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Tn(i){let t={};for(let e=0;e<i.length;e++){let n=Ts(i[e]);for(let s in n)t[s]=n[s]}return t}function Th(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Es={clone:Ts,merge:Tn},kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ye=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},La=class extends ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var un=class extends yi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Da=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Na=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ic(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ns=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ua=class extends ns{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Uc:r=t,l=2*e-n;break;case Fc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Uc:a=t,o=2*n-e;break;case Fc:a=1,o=n+s[1]-s[0];break;default:a=t-1,o=e}let u=(n-e)*.5,c=this.valueSize;this._weightPrev=u/(e-l),this._weightNext=u/(o-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,u=o-l,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let y=0;y!==l;++y)r[y]=d*a[c+y]+v*a[u+y]+S*a[o+y]+_*a[h+y];return r}},Fa=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,u=o-l,c=(n-e)/(s-e),h=1-c;for(let f=0;f!==l;++f)r[f]=a[u+f]*h+a[o+f]*c;return r}},Ba=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oa=class extends ns{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,u=o-l,c=this.inTangents,h=this.outTangents;if(!c||!h){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==l;++m)r[m]=a[u+m]*x+a[o+m]*g;return r}let f=l*2,p=t-1;for(let g=0;g!==l;++g){let x=a[u+g],m=a[o+g],d=p*f+g*2,v=h[d],S=h[d+1],_=t*f+g*2,y=c[_],b=c[_+1],w=Gp(n,e,v,y,s);r[g]=gf(w,x,S,b,m)}return r}};function gf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Vp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Gp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=gf(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let o=Vp(r,t,e,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var qn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xs(e,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xs(t.times,Array),values:Xs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ic(t.settings)&&(n.settings={inTangents:Xs(t.settings.inTangents,Array),outTangents:Xs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Oa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break;case Dc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return da;case this.InterpolantFactoryMethodBezier:return Dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ic(this.settings)&&(Eh(this.settings.inTangents,t),Eh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){te("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(a!==null&&a>o){te("KeyframeTrack: Out of order keys.",this,l,o,a),t=!1;break}a=o}if(s!==void 0&&vp(s))for(let l=0,o=s.length;l!==o;++l){let u=s[l];if(isNaN(u)){te("KeyframeTrack: Value is not a valid number.",this,l,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,a=1;for(let l=1;l<r;++l){let o=!1,u=t[l],c=t[l+1];if(u!==c&&(l!==1||u!==t[0]))if(s)o=!0;else{let h=l*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=e[h+g];if(x!==e[f+g]||x!==e[p+g]){o=!0;break}}}if(o){if(l!==a){t[a]=t[l];let h=l*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,o=a*n,u=0;u!==n;++u)e[o+u]=e[l+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ic(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Sa;var is=class extends qn{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Wr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="color";var ka=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};ka.prototype.ValueTypeName="number";var Ha=class extends ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-e)/(s-e),u=t*l;for(let c=u+l;u!==c;u+=4)cn.slerpFlat(r,0,a,u-l,a,u,o);return r}},ao=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends qn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Wr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};Va.prototype.ValueTypeName="vector";var Ga=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,o,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){l++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,l),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){let h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xf=new Ga,Wa=class{constructor(t){this.manager=t!==void 0?t:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},lo=class extends rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Lc=new qt,wh=new B,Ah=new B,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Lc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===Ks||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),e.multiply(Lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ha=new B,fa=new cn,gi=new B,ys=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ha,fa,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ha,fa,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new B,Rh=new Gt,Ch=new Gt,mn=class extends ys{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ch),e.subVectors(Ch,Rh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/u,s*=a.width/o,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Oc=class extends co{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Zr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},uo=class extends rr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Oc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var rs=class extends ys{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zc=class extends co{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new zc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ar=class extends _e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var qs=-90,Ys=1,Xa=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(qs,Ys,t,e);s.layers=this.layers,this.add(s);let r=new mn(qs,Ys,t,e);r.layers=this.layers,this.add(r);let a=new mn(qs,Ys,t,e);a.layers=this.layers,this.add(a);let l=new mn(qs,Ys,t,e);l.layers=this.layers,this.add(l);let o=new mn(qs,Ys,t,e);o.layers=this.layers,this.add(o);let u=new mn(qs,Ys,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(let u of e)this.remove(u);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,u,c]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qa=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ho=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Wp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Wp(){this._document.hidden===!1&&this.reset()}var uu="\\[\\]\\.:\\/",Xp=new RegExp("["+uu+"]","g"),hu="[^"+uu+"]",qp="[^"+uu.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",hu),Zp=/(WCOD+)?/.source.replace("WCOD",qp),Jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),$p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),Kp=new RegExp("^"+Yp+Zp+Jp+$p+"$"),jp=["material","materials","bones","map"],kc=class{constructor(t,e,n){let s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xp,"")}static parseTrackName(t){let e=Kp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let o=n(l.children);if(o)return o}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=e.nodeName;te("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=kc;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J_=new Float32Array(1);var xu=class xu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};xu.prototype.isMatrix2=!0;var Hc=xu;function fu(i,t,e,n){let s=Qp(n);switch(e){case ru:return i*t;case fr:return i*t/s.components*s.byteLength;case tl:return i*t/s.components*s.byteLength;case cs:return i*t*2/s.components*s.byteLength;case el:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case nl:return i*t*4/s.components*s.byteLength;case go:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:case ol:return Math.max(i,16)*Math.max(t,8)/4;case il:case rl:return Math.max(i,8)*Math.max(t,8)/2;case al:case ll:case ul:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cl:case yo:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mo:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qp(i){switch(i){case On:case eu:return{byteLength:1,components:1};case ur:case nu:case en:return{byteLength:2,components:1};case ja:case Qa:return{byteLength:2,components:4};case hi:case Ka:case ti:return{byteLength:4,components:1};case iu:case su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function o0(i){let t=new WeakMap;function e(l,o){let u=l.array,c=l.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,u,c),l.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,o,u){let c=o.array,h=o.updateRanges;if(i.bindBuffer(u,l),h.length===0)i.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let c=t.get(l);(!c||c.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=t.get(l);if(u===void 0)t.set(l,e(l,o));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,o),u.version=l.version}}return{get:s,remove:r,update:a}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,M0=`#ifdef USE_BUMPMAP
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,P0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Q0=`#ifdef USE_ENVMAP
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
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
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
#endif`,rm=`uniform sampler2D dfgLUT;
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
}`,om=`
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qm=`float getShadowMask() {
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
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,pg=`#if DEPTH_PACKING == 3200
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
}`,mg=`#define DISTANCE
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
}`,gg=`#define DISTANCE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,bg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,Tg=`#define LAMBERT
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
}`,Eg=`#define MATCAP
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
}`,wg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,Ig=`#define STANDARD
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
}`,Lg=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Ng=`#define TOON
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
}`,Ug=`uniform float size;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,kg=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:a0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:u0,alphatest_fragment:h0,alphatest_pars_fragment:f0,aomap_fragment:d0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:x0,beginnormal_vertex:v0,bsdfs:_0,iridescence_fragment:y0,bumpmap_pars_fragment:M0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:E0,color_fragment:w0,color_pars_fragment:A0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:N0,emissivemap_fragment:U0,emissivemap_pars_fragment:F0,colorspace_fragment:B0,colorspace_pars_fragment:O0,envmap_fragment:z0,envmap_common_pars_fragment:k0,envmap_pars_fragment:H0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:Q0,envmap_vertex:G0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:Y0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:K0,lights_pars_begin:j0,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:om,lights_fragment_maps:am,lights_fragment_end:lm,lightprobes_pars_fragment:cm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:dm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:xm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:_m,morphinstance_vertex:ym,morphcolor_vertex:Mm,morphnormal_vertex:bm,morphtarget_pars_vertex:Sm,morphtarget_vertex:Tm,normal_fragment_begin:Em,normal_fragment_maps:wm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Nm,opaque_fragment:Um,packing:Fm,premultiplied_alpha_fragment:Bm,project_vertex:Om,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Zm,skinning_vertex:Jm,skinnormal_vertex:$m,specularmap_fragment:Km,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:tg,transmission_fragment:eg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:sg,uv_vertex:rg,worldpos_vertex:og,background_vert:ag,background_frag:lg,backgroundCube_vert:cg,backgroundCube_frag:ug,cube_vert:hg,cube_frag:fg,depth_vert:dg,depth_frag:pg,distance_vert:mg,distance_frag:gg,equirect_vert:xg,equirect_frag:vg,linedashed_vert:_g,linedashed_frag:yg,meshbasic_vert:Mg,meshbasic_frag:bg,meshlambert_vert:Sg,meshlambert_frag:Tg,meshmatcap_vert:Eg,meshmatcap_frag:wg,meshnormal_vert:Ag,meshnormal_frag:Rg,meshphong_vert:Cg,meshphong_frag:Pg,meshphysical_vert:Ig,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ng,points_vert:Ug,points_frag:Fg,shadow_vert:Bg,shadow_frag:Og,sprite_vert:zg,sprite_frag:kg},It={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},bi={basic:{uniforms:Tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:Tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:Tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:Tn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:Tn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new xt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:Tn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:Tn([It.points,It.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:Tn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:Tn([It.common,It.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:Tn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:Tn([It.sprite,It.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:Tn([It.common,It.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:Tn([It.lights,It.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};bi.physical={uniforms:Tn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Fl={r:0,b:0,g:0},Hg=new qt,kf=new ne;kf.set(-1,0,0,0,1,0,0,0,1);function Vg(i,t,e,n,s,r){let a=new xt(0),l=s===!0?0:1,o,u,c=null,h=0,f=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let _=v.backgroundBlurriness>0;S=t.get(S,_)}return S}function g(v){let S=!1,_=p(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),S=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,S){let _=p(S);_&&(_.isCubeTexture||_.mapping===po)?(u===void 0&&(u=new pe(new ci(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:Ts(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(kf),u.material.toneMapped=me.getTransfer(_.colorSpace)!==Ae,(c!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new pe(new Qe(2,2),new ye({name:"BackgroundMaterial",uniforms:Ts(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,o.material.toneMapped=me.getTransfer(_.colorSpace)!==Ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||h!==_.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))}function m(v,S){v.getRGB(Fl,cu(i)),e.buffers.color.setClear(Fl.r,Fl.g,Fl.b,S,r)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:g,addToRenderList:x,dispose:d}}function Gg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(P,I,L,R,D){let F=!1,O=h(P,R,L,I);r!==O&&(r=O,u(r.object)),F=p(P,R,L,D),F&&g(P,R,L,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,_(P,I,L,R),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function o(){return i.createVertexArray()}function u(P){return i.bindVertexArray(P)}function c(P){return i.deleteVertexArray(P)}function h(P,I,L,R){let D=R.wireframe===!0,F=n[I.id];F===void 0&&(F={},n[I.id]=F);let O=P.isInstancedMesh===!0?P.id:0,z=F[O];z===void 0&&(z={},F[O]=z);let U=z[L.id];U===void 0&&(U={},z[L.id]=U);let X=U[D];return X===void 0&&(X=f(o()),U[D]=X),X}function f(P){let I=[],L=[],R=[];for(let D=0;D<e;D++)I[D]=0,L[D]=0,R[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:R,object:P,attributes:{},index:null}}function p(P,I,L,R){let D=r.attributes,F=I.attributes,O=0,z=L.getAttributes();for(let U in z)if(z[U].location>=0){let H=D[U],Q=F[U];if(Q===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),H===void 0||H.attribute!==Q||Q&&H.data!==Q.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function g(P,I,L,R){let D={},F=I.attributes,O=0,z=L.getAttributes();for(let U in z)if(z[U].location>=0){let H=F[U];H===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let Q={};Q.attribute=H,H&&H.data&&(Q.data=H.data),D[U]=Q,O++}r.attributes=D,r.attributesNum=O,r.index=R}function x(){let P=r.newAttributes;for(let I=0,L=P.length;I<L;I++)P[I]=0}function m(P){d(P,0)}function d(P,I){let L=r.newAttributes,R=r.enabledAttributes,D=r.attributeDivisors;L[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),D[P]!==I&&(i.vertexAttribDivisor(P,I),D[P]=I)}function v(){let P=r.newAttributes,I=r.enabledAttributes;for(let L=0,R=I.length;L<R;L++)I[L]!==P[L]&&(i.disableVertexAttribArray(L),I[L]=0)}function S(P,I,L,R,D,F,O){O===!0?i.vertexAttribIPointer(P,I,L,D,F):i.vertexAttribPointer(P,I,L,R,D,F)}function _(P,I,L,R){x();let D=R.attributes,F=L.getAttributes(),O=I.defaultAttributeValues;for(let z in F){let U=F[z];if(U.location>=0){let X=D[z];if(X===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let H=X.normalized,Q=X.itemSize,dt=t.get(X);if(dt===void 0)continue;let Wt=dt.buffer,Yt=dt.type,zt=dt.bytesPerElement,Y=Yt===i.INT||Yt===i.UNSIGNED_INT||X.gpuType===Ka;if(X.isInterleavedBufferAttribute){let it=X.data,q=it.stride,Nt=X.offset;if(it.isInstancedInterleavedBuffer){for(let wt=0;wt<U.locationSize;wt++)d(U.location+wt,it.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let wt=0;wt<U.locationSize;wt++)m(U.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let wt=0;wt<U.locationSize;wt++)S(U.location+wt,Q/U.locationSize,Yt,H,q*zt,(Nt+Q/U.locationSize*wt)*zt,Y)}else{if(X.isInstancedBufferAttribute){for(let it=0;it<U.locationSize;it++)d(U.location+it,X.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let it=0;it<U.locationSize;it++)m(U.location+it);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let it=0;it<U.locationSize;it++)S(U.location+it,Q/U.locationSize,Yt,H,Q*zt,Q/U.locationSize*it*zt,Y)}}else if(O!==void 0){let H=O[z];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(U.location,H);break;case 3:i.vertexAttrib3fv(U.location,H);break;case 4:i.vertexAttrib4fv(U.location,H);break;default:i.vertexAttrib1fv(U.location,H)}}}}v()}function y(){T();for(let P in n){let I=n[P];for(let L in I){let R=I[L];for(let D in R){let F=R[D];for(let O in F)c(F[O].object),delete F[O];delete R[D]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let L in I){let R=I[L];for(let D in R){let F=R[D];for(let O in F)c(F[O].object),delete F[O];delete R[D]}}delete n[P.id]}function w(P){for(let I in n){let L=n[I];for(let R in L){let D=L[R];if(D[P.id]===void 0)continue;let F=D[P.id];for(let O in F)c(F[O].object),delete F[O];delete D[P.id]}}}function M(P){for(let I in n){let L=n[I],R=P.isInstancedMesh===!0?P.id:0,D=L[R];if(D!==void 0){for(let F in D){let O=D[F];for(let z in O)c(O[z].object),delete O[z];delete D[F]}delete L[R],Object.keys(L).length===0&&delete n[I]}}}function T(){A(),a=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:T,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Wg(i,t,e){let n;function s(o){n=o}function r(o,u){i.drawArrays(n,o,u),e.update(u,n,1)}function a(o,u,c){c!==0&&(i.drawArraysInstanced(n,o,u,c),e.update(u,n,c))}function l(o,u,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){let M=w===en&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==On&&w!==ti&&!M&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",c=o(u);c!==u&&(jt("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:_,maxSamples:y,samples:b}}function qg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ai,l=new ne,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=c(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{let v=r?0:n,S=v*4,_=d.clippingState||null;o.value=_,_=c(g,f,S,p);for(let y=0;y!==S;++y)_[y]=e[y];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=o.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,_=p;S!==x;++S,_+=4)a.copy(h[S]).applyMatrix4(v,l),a.normal.toArray(m,_),m[_+3]=a.constant}o.value=m,o.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var pr=4,Yg=6,Zg=20,Jg=256,So=new rs,vf=new xt,vu=null,_u=0,yu=0,Mu=!1,$g=new B,ws=new B,Ol=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=$g}=r;vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o,l),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vu,_u,yu),this._renderer.xr.enabled=Mu,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:en,format:zn,colorSpace:Xr,depthBuffer:!1},s=_f(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kg(r)),this._blurMaterial=Qg(r,t,e),this._ggxMaterial=jg(r,t,e)}return s}_compileMaterial(t){let e=new pe(new _e,t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,n,s,r){let o=new mn(90,1,e,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(vf),h.toneMapping=ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new ci,new je({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,d=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,d=!0):(m.color.copy(vf),d=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(o.up.set(0,u[S],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+c[S],r.y,r.z)):_===1?(o.up.set(0,0,u[S]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+c[S],r.z)):(o.up.set(0,u[S],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+c[S]));let y=this._cubeSize;dr(s,_*y,S>2?y:0,y,y),h.setRenderTarget(s),d&&h.render(x,o),h.render(t,o)}h.toneMapping=p,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===as||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let o=this._cubeSize;dr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(a,So)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let o=a.uniforms,u=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),f=u*1.25,p=h*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-pr?n-g+pr:0),d=4*(this._cubeSize-x);o.envMap.value=t.texture,o.roughness.value=p,o.mipInt.value=g-e,dr(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(l,So),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,dr(t,m,d,3*x,2*x),s.setRenderTarget(t),s.render(l,So)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[s];o.material=l;let u=l.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let c=this._sizeLods[s],h=3*c*(s>this._lodMax-pr?s-this._lodMax+pr:0),f=4*(this._cubeSize-c);dr(e,h,f,3*c,2*c),a.setRenderTarget(e),a.render(o,So)}};function Kg(i){let t=[],e=[],n=i,s=i-pr+1+Yg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),o=-l,u=1+l,c=[o,o,u,o,u,u,o,o,u,u,o,u],h=6,f=6,p=3,g=new Float32Array(p*f*h),x=new Float32Array(p*f*h);for(let d=0;d<h;d++){let v=d%3*2/3-1,S=d>2?0:-1,_=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(_,p*f*d);for(let y=0;y<f;y++){let b=c[y*2]*2-1,w=c[y*2+1]*2-1;d===0?ws.set(1,w,b):d===1?ws.set(-b,1,-w):d===2?ws.set(-b,w,1):d===3?ws.set(-1,w,-b):d===4?ws.set(-b,-1,w):ws.set(b,w,-1),ws.toArray(x,(d*f+y)*p)}}let m=new _e;m.setAttribute("position",new We(g,p)),m.setAttribute("outputDirection",new We(x,p)),e.push(new pe(m,null)),n>pr&&n--}return{lodMeshes:e,sizeLods:t}}function _f(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jg(i,t,e){return new ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Qg(i,t,e){return new ye({name:"SphericalGaussianBlur",defines:{SAMPLES:Zg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function yf(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Mf(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zl=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new no(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),r=new ye({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Fn});r.uniforms.tEquirect.value=e;let a=new pe(s,r),l=e.minFilter;return e.minFilter===Bn&&(e.minFilter=Ye),new Xa(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function tx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Za||p===Ja)if(t.has(f)){let g=t.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new zl(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",u),l(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===Za||p===Ja,x=p===as||p===Ss;if(g||x){let m=e.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Ol(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&o(v)?(n===null&&(n=new Ol(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function l(f,p){return p===Za?f.mapping=as:p===Ja&&(f.mapping=Ss),f}function o(f){let p=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function ex(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vs("WebGLRenderer: "+n+" extension not supported."),s}}}function nx(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function o(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(g===void 0)return;if(p!==null){let v=p.array;x=p.version;for(let S=0,_=v.length;S<_;S+=3){let y=v[S+0],b=v[S+1],w=v[S+2];f.push(y,b,b,w,w,y)}}else{let v=g.array;x=g.version;for(let S=0,_=v.length/3-1;S<_;S+=3){let y=S+0,b=S+1,w=S+2;f.push(y,b,b,w,w,y)}}let m=new(g.count>=65535?Qr:jr)(f,1);m.version=x;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function c(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:l,update:o,getWireframeAttribute:c}}function ix(i,t,e){let n;function s(h){n=h}let r,a;function l(h){r=h.type,a=h.bytesPerElement}function o(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*a,p),e.update(f,n,p))}function c(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];e.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function sx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rx(i,t,e){let n=new WeakMap,s=new Le;function r(a,l,o){let u=a.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=c!==void 0?c.length:0,f=n.get(l);if(f===void 0||f.count!==h){let T=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=l.attributes.position.count*S,y=1;_>t.maxTextureSize&&(y=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*y*4*h),w=new Jr(b,_,y,h);w.type=ti,w.needsUpdate=!0;let M=S*4;for(let A=0;A<h;A++){let P=m[A],I=d[A],L=v[A],R=_*y*4*A;for(let D=0;D<P.count;D++){let F=D*M;p===!0&&(s.fromBufferAttribute(P,D),b[R+F+0]=s.x,b[R+F+1]=s.y,b[R+F+2]=s.z,b[R+F+3]=0),g===!0&&(s.fromBufferAttribute(I,D),b[R+F+4]=s.x,b[R+F+5]=s.y,b[R+F+6]=s.z,b[R+F+7]=0),x===!0&&(s.fromBufferAttribute(L,D),b[R+F+8]=s.x,b[R+F+9]=s.y,b[R+F+10]=s.z,b[R+F+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new Gt(_,y)},n.set(l,f),l.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];let g=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",u)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ox(i,t,e,n,s){let r=new WeakMap;function a(u){let c=s.render.frame,h=u.geometry,f=t.get(u,h);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==c&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function l(){r=new WeakMap}function o(u){let c=u.target;c.removeEventListener("dispose",o),n.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:l}}var ax={[Zc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[$c]:"CINEON_TONE_MAPPING",[Kc]:"ACES_FILMIC_TONE_MAPPING",[Qc]:"AGX_TONE_MAPPING",[fo]:"NEUTRAL_TONE_MAPPING",[jc]:"CUSTOM_TONE_MAPPING"};function lx(i,t,e,n,s,r){let a=new Be(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,u=new _e;u.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new $t([0,2,0,0,2,0],2));let c=new La({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new pe(u,c),f=new rs(-1,1,1,-1,0,1),p=null,g=null,x=!1,m,d=null,v=[],S=!1;this.setSize=function(_,y){a.setSize(_,y),l!==null&&l.setSize(_,y),o!==null&&o.setSize(_,y);for(let b=0;b<v.length;b++){let w=v[b];w.setSize&&w.setSize(_,y)}},this.setEffects=function(_){v=_,S=v.length>0&&v[0].isRenderPass===!0;let y=a.width,b=a.height;v.length>0&&l===null&&(l=new Be(y,b,{type:en,depthBuffer:!1,stencilBuffer:!1}),o=new Be(y,b,{type:en,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){let M=v[w];M.setSize&&M.setSize(y,b)}},this.begin=function(_,y){if(x||_.toneMapping===ui&&v.length===0)return!1;if(d=y,y!==null){let b=y.width,w=y.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return S===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=ui,!0},this.hasRenderPass=function(){return S},this.end=function(_,y){_.toneMapping=m,x=!0;let b=a,w=l;for(let M=0;M<v.length;M++){let T=v[M];T.enabled!==!1&&(T.render(_,w,b,y),T.needsSwap!==!1&&(b=w,w=w===l?o:l))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,c.defines={},me.getTransfer(p)===Ae&&(c.defines.SRGB_TRANSFER="");let M=ax[g];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(d),_.render(h,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var Hf=new Pn,Tu=new es(1,1),Vf=new Jr,Gf=new wa,Wf=new no,bf=[],Sf=[],Tf=new Float32Array(16),Ef=new Float32Array(9),wf=new Float32Array(4);function gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vl(i,t){let e=Sf[t];e===void 0&&(e=new Int32Array(t),Sf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;wf.set(n),i.uniformMatrix2fv(this.addr,!1,wf),sn(e,n)}}function px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Ef.set(n),i.uniformMatrix3fv(this.addr,!1,Ef),sn(e,n)}}function mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),sn(e,n)}}function gx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function yx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tu.compareFunction=e.isReversedDepthBuffer()?Ul:Nl,r=Tu):r=Hf,e.setTexture2D(t||r,s)}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gf,s)}function wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wf,s)}function Ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vf,s)}function Rx(i){switch(i){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return xx;case 35668:case 35672:return vx;case 35669:case 35673:return _x;case 5125:return yx;case 36294:return Mx;case 36295:return bx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ax}}function Cx(i,t){i.uniform1fv(this.addr,t)}function Px(i,t){let e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ix(i,t){let e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function Lx(i,t){let e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function Dx(i,t){let e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nx(i,t){let e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ux(i,t){let e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fx(i,t){i.uniform1iv(this.addr,t)}function Bx(i,t){i.uniform2iv(this.addr,t)}function Ox(i,t){i.uniform3iv(this.addr,t)}function zx(i,t){i.uniform4iv(this.addr,t)}function kx(i,t){i.uniform1uiv(this.addr,t)}function Hx(i,t){i.uniform2uiv(this.addr,t)}function Vx(i,t){i.uniform3uiv(this.addr,t)}function Gx(i,t){i.uniform4uiv(this.addr,t)}function Wx(i,t,e){let n=this.cache,s=t.length,r=Vl(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tu:a=Hf;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function Xx(i,t,e){let n=this.cache,s=t.length,r=Vl(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gf,r[a])}function qx(i,t,e){let n=this.cache,s=t.length,r=Vl(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wf,r[a])}function Yx(i,t,e){let n=this.cache,s=t.length,r=Vl(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vf,r[a])}function Zx(i){switch(i){case 5126:return Cx;case 35664:return Px;case 35665:return Ix;case 35666:return Lx;case 35674:return Dx;case 35675:return Nx;case 35676:return Ux;case 5124:case 35670:return Fx;case 35667:case 35671:return Bx;case 35668:case 35672:return Ox;case 35669:case 35673:return zx;case 5125:return kx;case 36294:return Hx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Yx}}var Eu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rx(e.type)}},wu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zx(e.type)}},Au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},bu=/(\w+)(\])?(\[|\.)?/g;function Af(i,t){i.seq.push(t),i.map[t.id]=t}function Jx(i,t,e){let n=i.name,s=n.length;for(bu.lastIndex=0;;){let r=bu.exec(n),a=bu.lastIndex,l=r[1],o=r[2]==="]",u=r[3];if(o&&(l=l|0),u===void 0||u==="["&&a+2===s){Af(e,u===void 0?new Eu(l,i,t):new wu(l,i,t));break}else{let h=e.map[l];h===void 0&&(h=new Au(l),Af(e,h)),e=h}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);Jx(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Rf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $x=37297,Kx=0;function jx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var Cf=new ne;function Qx(i){me._getMatrix(Cf,me.workingColorSpace,i);let t=`mat3( ${Cf.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jx(i.getShaderSource(t),l)}else return r}function tv(i,t){let e=Qx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ev={[Zc]:"Linear",[Jc]:"Reinhard",[$c]:"Cineon",[Kc]:"ACESFilmic",[Qc]:"AgX",[fo]:"Neutral",[jc]:"Custom"};function nv(i,t){let e=ev[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bl=new B;function iv(){me.getLuminanceCoefficients(Bl);let i=Bl.x.toFixed(4),t=Bl.y.toFixed(4),e=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function rv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ov(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function Eo(i){return i!==""}function If(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var av=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(i){return i.replace(av,cv)}var lv=new Map;function cv(i,t){let e=ie[t];if(e===void 0){let n=lv.get(t);if(n!==void 0)e=ie[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ru(e)}var uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(i){return i.replace(uv,hv)}function hv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nf(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var fv={[Ms]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function dv(i){return fv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pv={[as]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function mv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":pv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var gv={[Ss]:"ENVMAP_MODE_REFRACTION"};function xv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vv={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[Kh]:"ENVMAP_BLENDING_MIX",[jh]:"ENVMAP_BLENDING_ADD"};function _v(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vv[i.combine]||"ENVMAP_BLENDING_NONE"}function yv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Mv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,o=dv(e),u=mv(e),c=xv(e),h=_v(e),f=yv(e),p=sv(e),g=rv(r),x=s.createProgram(),m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Eo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Eo).join(`
`),d.length>0&&(d+=`
`)):(m=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),d=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?ie.tonemapping_pars_fragment:"",e.toneMapping!==ui?nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,tv("linearToOutputTexel",e.outputColorSpace),iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),a=Ru(a),a=If(a,e),a=Lf(a,e),l=Ru(l),l=If(l,e),l=Lf(l,e),a=Df(a),l=Df(l),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=v+m+a,_=v+d+l,y=Rf(s,s.VERTEX_SHADER,S),b=Rf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,y),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(y)||"",R=s.getShaderInfoLog(b)||"",D=I.trim(),F=L.trim(),O=R.trim(),z=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,b);else{let X=Pf(s,y,"vertex"),H=Pf(s,b,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+X+`
`+H)}else D!==""?jt("WebGLProgram: Program Info Log:",D):(F===""||O==="")&&(U=!1);U&&(P.diagnostics={runnable:z,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:d}})}s.deleteShader(y),s.deleteShader(b),M=new mr(s,x),T=ov(s,x)}let M;this.getUniforms=function(){return M===void 0&&w(this),M};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,$x)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=b,this}var bv=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pu(t),e.set(t,n)),n}},Pu=class{constructor(t){this.id=bv++,this.code=t,this.usedTimes=0}};function Sv(i){return i===cs||i===yo||i===Mo}function Tv(i,t,e,n,s,r){let a=new $r,l=new Cu,o=new Set,u=[],c=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return o.add(M),M===0?"uv":`uv${M}`}function x(M,T,A,P,I,L){let R=P.fog,D=I.geometry,F=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,z=t.get(M.envMap||F,O),U=z&&z.mapping===po?z.image.height:null,X=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&jt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let H=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=H!==void 0?H.length:0,dt=0;D.morphAttributes.position!==void 0&&(dt=1),D.morphAttributes.normal!==void 0&&(dt=2),D.morphAttributes.color!==void 0&&(dt=3);let Wt,Yt,zt,Y;if(X){let Ce=bi[X];Wt=Ce.vertexShader,Yt=Ce.fragmentShader}else{Wt=M.vertexShader,Yt=M.fragmentShader;let Ce=l.getVertexShaderStage(M),Me=l.getFragmentShaderStage(M);l.update(M,Ce,Me),zt=Ce.id,Y=Me.id}let it=i.getRenderTarget(),q=i.state.buffers.depth.getReversed(),Nt=I.isInstancedMesh===!0,wt=I.isBatchedMesh===!0,At=!!M.map,j=!!M.matcap,st=!!z,ot=!!M.aoMap,pt=!!M.lightMap,tt=!!M.bumpMap&&M.wireframe===!1,vt=!!M.normalMap,Jt=!!M.displacementMap,he=!!M.emissiveMap,Qt=!!M.metalnessMap,fe=!!M.roughnessMap,V=M.anisotropy>0,Ne=M.clearcoat>0,ce=M.dispersion>0,N=M.retroreflectivity>0,E=M.iridescence>0,W=M.sheen>0,$=M.transmission>0,et=V&&!!M.anisotropyMap,_t=Ne&&!!M.clearcoatMap,Mt=Ne&&!!M.clearcoatNormalMap,nt=Ne&&!!M.clearcoatRoughnessMap,rt=E&&!!M.iridescenceMap,mt=E&&!!M.iridescenceThicknessMap,Ht=W&&!!M.sheenColorMap,Rt=W&&!!M.sheenRoughnessMap,bt=!!M.specularMap,Vt=!!M.specularColorMap,Zt=!!M.specularIntensityMap,re=$&&!!M.transmissionMap,k=$&&!!M.thicknessMap,St=!!M.gradientMap,lt=!!M.alphaMap,Et=M.alphaTest>0,Lt=!!M.alphaHash,ft=!!M.extensions,Xt=ui;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let Bt={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:Wt,fragmentShader:Yt,defines:M.defines,customVertexShaderID:zt,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:wt,batchingColor:wt&&I._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&I.instanceColor!==null,instancingMorph:Nt&&I.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:At,matcap:j,envMap:st,envMapMode:st&&z.mapping,envMapCubeUVHeight:U,aoMap:ot,lightMap:pt,bumpMap:tt,normalMap:vt,displacementMap:Jt,emissiveMap:he,normalMapObjectSpace:vt&&M.normalMapType===ef,normalMapTangentSpace:vt&&M.normalMapType===Dl,packedNormalMap:vt&&M.normalMapType===Dl&&Sv(M.normalMap.format),metalnessMap:Qt,roughnessMap:fe,anisotropy:V,anisotropyMap:et,clearcoat:Ne,clearcoatMap:_t,clearcoatNormalMap:Mt,clearcoatRoughnessMap:nt,dispersion:ce,retroreflection:N,iridescence:E,iridescenceMap:rt,iridescenceThicknessMap:mt,sheen:W,sheenColorMap:Ht,sheenRoughnessMap:Rt,specularMap:bt,specularColorMap:Vt,specularIntensityMap:Zt,transmission:$,transmissionMap:re,thicknessMap:k,gradientMap:St,opaque:M.transparent===!1&&M.blending===cr&&M.alphaToCoverage===!1,alphaMap:lt,alphaTest:Et,alphaHash:Lt,combine:M.combine,mapUv:At&&g(M.map.channel),aoMapUv:ot&&g(M.aoMap.channel),lightMapUv:pt&&g(M.lightMap.channel),bumpMapUv:tt&&g(M.bumpMap.channel),normalMapUv:vt&&g(M.normalMap.channel),displacementMapUv:Jt&&g(M.displacementMap.channel),emissiveMapUv:he&&g(M.emissiveMap.channel),metalnessMapUv:Qt&&g(M.metalnessMap.channel),roughnessMapUv:fe&&g(M.roughnessMap.channel),anisotropyMapUv:et&&g(M.anisotropyMap.channel),clearcoatMapUv:_t&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&g(M.sheenRoughnessMap.channel),specularMapUv:bt&&g(M.specularMap.channel),specularColorMapUv:Vt&&g(M.specularColorMap.channel),specularIntensityMapUv:Zt&&g(M.specularIntensityMap.channel),transmissionMapUv:re&&g(M.transmissionMap.channel),thicknessMapUv:k&&g(M.thicknessMap.channel),alphaMapUv:lt&&g(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(vt||V),vertexNormals:!!D.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(At||lt),fog:!!R,useFog:M.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||D.attributes.normal===void 0&&vt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:q,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:dt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:At&&M.map.isVideoTexture===!0&&me.getTransfer(M.map.colorSpace)===Ae,decodeVideoTextureEmissive:he&&M.emissiveMap.isVideoTexture===!0&&me.getTransfer(M.emissiveMap.colorSpace)===Ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Bt.vertexUv1s=o.has(1),Bt.vertexUv2s=o.has(2),Bt.vertexUv3s=o.has(3),o.clear(),Bt}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)T.push(A),T.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(d(T,M),v(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function d(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function S(M){let T=p[M.type],A;if(T){let P=bi[T];A=Es.clone(P.uniforms)}else A=M.uniforms;return A}function _(M,T){let A=c.get(T);return A!==void 0?++A.usedTimes:(A=new Mv(i,T,M,s),u.push(A),c.set(T,A)),A}function y(M){if(--M.usedTimes===0){let T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),c.delete(M.cacheKey),M.destroy()}}function b(M){l.remove(M)}function w(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:_,releaseProgram:y,releaseShaderCache:b,programs:u,dispose:w}}function Ev(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Uf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ff(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function l(f,p,g,x,m,d){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},i[t]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=d),t++,v}function o(f,p,g,x,m,d,v){v.reversedDepth===!0&&(m=-m);let S=l(f,p,g,x,m,d);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):e.push(S)}function u(f,p,g,x,m,d){let v=l(f,p,g,x,m,d);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function c(f,p){e.length>1&&e.sort(f||wv),n.length>1&&n.sort(p||Uf),s.length>1&&s.sort(p||Uf)}function h(){for(let f=t,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:u,finish:h,sort:c}}function Av(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ff,i.set(n,[a])):s>=r.length?(a=new Ff,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new xt};break;case"SpotLight":e={position:new B,direction:new B,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Cv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Pv=0;function Iv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lv(i){let t=new Rv,e=Cv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new B);let s=new B,r=new qt,a=new qt;function l(u){let c=0,h=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,S=0,_=0,y=0,b=0,w=0,M=0,T=0,A=0;u.sort(Iv);for(let I=0,L=u.length;I<L;I++){let R=u[I],D=R.color,F=R.intensity,O=R.distance,z=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cs?z=R.shadow.map.texture:z=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=D.r*F,h+=D.g*F,f+=D.b*F;else if(R.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(R.sh.coefficients[U],F);A++}else if(R.isSunLight){let U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let X=R.shadow,H=e.get(R);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=H,n.sunShadowMap[g]=z;let Q=X.getViewportCount();for(let dt=0;dt<Q;dt++)n.sunShadowMatrix[x+dt]=X.getMatrix(dt),n.sunShadowCascade[x+dt]=X._cascadeData[dt];x+=Q,g++}n.sun[p]=U,p++}else if(R.isDirectionalLight){let U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let X=R.shadow,H=e.get(R);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=R.shadow.matrix,y++}n.directional[m]=U,m++}else if(R.isSpotLight){let U=t.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(D).multiplyScalar(F),U.distance=O,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,n.spot[v]=U;let X=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,X.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[v]=X.matrix,R.castShadow){let H=e.get(R);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=z,w++}v++}else if(R.isRectAreaLight){let U=t.get(R);U.color.copy(D).multiplyScalar(F),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),n.rectArea[S]=U,S++}else if(R.isPointLight){let U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){let X=R.shadow,H=e.get(R);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[d]=H,n.pointShadowMap[d]=z,n.pointShadowMatrix[d]=R.shadow.matrix,b++}n.point[d]=U,d++}else if(R.isHemisphereLight){let U=t.get(R);U.skyColor.copy(R.color).multiplyScalar(F),U.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[_]=U,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==v||P.rectAreaLength!==S||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==w||P.numSpotMaps!==M||P.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=d,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.sunLength=p,P.directionalLength=m,P.pointLength=d,P.spotLength=v,P.rectAreaLength=S,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=w,P.numSpotMaps=M,P.numLightProbes=A,n.version=Pv++)}function o(u,c){let h=0,f=0,p=0,g=0,x=0,m=0,d=c.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){let _=u[v];if(_.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),h++}else if(_.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(_.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:o,state:n}}function Bf(i){let t=new Lv(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function l(f){n.push(f)}function o(f){s.push(f)}function u(){t.setup(e)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function Dv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Bf(i),t.set(s,[l])):r>=a.length?(l=new Bf(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uv=`uniform sampler2D shadow_pass;
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
}`,Fv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Bv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Of=new qt,To=new B,Su=new B;function Ov(i,t,e){let n=new nr,s=new Gt,r=new Gt,a=new Le,l=new Da,o=new Na,u={},c=e.maxTextureSize,h={[os]:gn,[gn]:os,[hn]:hn},f=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Nv,fragmentShader:Uv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let d=this.type;this.render=function(b,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Lh&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);let T=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Fn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let L=d!==this.type;L&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(D=>D.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,D=b.length;R<D;R++){let F=b[R],O=F.shadow;if(O===void 0){jt("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let z=O.getFrameExtents();s.multiply(z),r.copy(O.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/z.x),s.x=r.x*z.x,O.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/z.y),s.y=r.y*z.y,O.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=U,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===lr){if(F.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Be(s.x,s.y,{format:cs,type:en,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new es(s.x,s.y,ti),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=vi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$e,O.map.depthTexture.magFilter=$e}else F.isPointLight?(O.map=new zl(s.x),O.map.depthTexture=new Pa(s.x,hi)):(O.map=new Be(s.x,s.y),O.map.depthTexture=new es(s.x,s.y,hi)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=vi,this.type===Ms?(O.map.depthTexture.compareFunction=U?Ul:Nl,O.map.depthTexture.minFilter=Ye,O.map.depthTexture.magFilter=Ye):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$e,O.map.depthTexture.magFilter=$e);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let X=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();F.isPointLight!==!0&&O.updateMatrices(F,M);for(let H=0;H<X;H++){let Q=O.getCamera(H);if(F.isPointLight){let dt=O.camera,Wt=O.matrix,Yt=F.distance||dt.far;Yt!==dt.far&&(dt.far=Yt,dt.updateProjectionMatrix()),To.setFromMatrixPosition(F.matrixWorld),dt.position.copy(To),Su.copy(dt.position),Su.add(Fv[H]),dt.up.copy(Bv[H]),dt.lookAt(Su),dt.updateMatrixWorld(),Wt.makeTranslation(-To.x,-To.y,-To.z),Of.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Of,dt.coordinateSystem,dt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,H),i.clear();else{H===0&&(i.setRenderTarget(O.map),i.clear());let dt=O.getViewport(H);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),I.viewport(a)}n=O.getFrustum(H),_(w,M,Q,F,this.type)}O.isPointLightShadow!==!0&&this.type===lr&&v(O,M),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,A,P)};function v(b,w){let M=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Be(s.x,s.y,{format:cs,type:en}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,M,f,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,M,p,x,null)}function S(b,w,M,T){let A=null,P=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)A=P;else if(A=M.isPointLight===!0?o:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=A.uuid,L=w.uuid,R=u[I];R===void 0&&(R={},u[I]=R);let D=R[L];D===void 0&&(D=A.clone(),R[L]=D,w.addEventListener("dispose",y)),A=D}if(A.visible=w.visible,A.wireframe=w.wireframe,T===lr?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:h[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=i.properties.get(A);I.light=M}return A}function _(b,w,M,T,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===lr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);let L=t.update(b),R=b.material;if(Array.isArray(R)){let D=L.groups;for(let F=0,O=D.length;F<O;F++){let z=D[F],U=R[z.materialIndex];if(U&&U.visible){let X=S(b,U,T,A);b.onBeforeShadow(i,b,w,M,L,X,z),i.renderBufferDirect(M,null,L,X,b,z),b.onAfterShadow(i,b,w,M,L,X,z)}}}else if(R.visible){let D=S(b,R,T,A);b.onBeforeShadow(i,b,w,M,L,D,null),i.renderBufferDirect(M,null,L,D,b,null),b.onAfterShadow(i,b,w,M,L,D,null)}}let I=b.children;for(let L=0,R=I.length;L<R;L++)_(I[L],w,M,T,A)}function y(b){b.target.removeEventListener("dispose",y);for(let M in u){let T=u[M],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function zv(i,t){function e(){let k=!1,St=new Le,lt=null,Et=new Le(0,0,0,0);return{setMask:function(Lt){lt!==Lt&&!k&&(i.colorMask(Lt,Lt,Lt,Lt),lt=Lt)},setLocked:function(Lt){k=Lt},setClear:function(Lt,ft,Xt,Bt,Ce){Ce===!0&&(Lt*=Bt,ft*=Bt,Xt*=Bt),St.set(Lt,ft,Xt,Bt),Et.equals(St)===!1&&(i.clearColor(Lt,ft,Xt,Bt),Et.copy(St))},reset:function(){k=!1,lt=null,Et.set(-1,0,0,0)}}}function n(){let k=!1,St=!1,lt=null,Et=null,Lt=null;return{setReversed:function(ft){if(St!==ft){let Xt=t.get("EXT_clip_control");ft?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),St=ft;let Bt=Lt;Lt=null,this.setClear(Bt)}},getReversed:function(){return St},setTest:function(ft){ft?it(i.DEPTH_TEST):q(i.DEPTH_TEST)},setMask:function(ft){lt!==ft&&!k&&(i.depthMask(ft),lt=ft)},setFunc:function(ft){if(St&&(ft=pf[ft]),Et!==ft){switch(ft){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=ft}},setLocked:function(ft){k=ft},setClear:function(ft){Lt!==ft&&(Lt=ft,St&&(ft=1-ft),i.clearDepth(ft))},reset:function(){k=!1,lt=null,Et=null,Lt=null,St=!1}}}function s(){let k=!1,St=null,lt=null,Et=null,Lt=null,ft=null,Xt=null,Bt=null,Ce=null;return{setTest:function(Me){k||(Me?it(i.STENCIL_TEST):q(i.STENCIL_TEST))},setMask:function(Me){St!==Me&&!k&&(i.stencilMask(Me),St=Me)},setFunc:function(Me,vn,kn){(lt!==Me||Et!==vn||Lt!==kn)&&(i.stencilFunc(Me,vn,kn),lt=Me,Et=vn,Lt=kn)},setOp:function(Me,vn,kn){(ft!==Me||Xt!==vn||Bt!==kn)&&(i.stencilOp(Me,vn,kn),ft=Me,Xt=vn,Bt=kn)},setLocked:function(Me){k=Me},setClear:function(Me){Ce!==Me&&(i.clearStencil(Me),Ce=Me)},reset:function(){k=!1,St=null,lt=null,Et=null,Lt=null,ft=null,Xt=null,Bt=null,Ce=null}}}let r=new e,a=new n,l=new s,o=new WeakMap,u=new WeakMap,c={},h={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,S=null,_=null,y=null,b=null,w=null,M=new xt(0,0,0),T=0,A=!1,P=null,I=null,L=null,R=null,D=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,z=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),O=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),O=z>=2);let X=null,H={},Q=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Wt=new Le().fromArray(Q),Yt=new Le().fromArray(dt);function zt(k,St,lt,Et){let Lt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(k,ft),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<lt;Xt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(St+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return ft}let Y={};Y[i.TEXTURE_2D]=zt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),it(i.DEPTH_TEST),a.setFunc(Js),tt(!1),vt(Vc),it(i.CULL_FACE),ot(Fn);function it(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function q(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function Nt(k,St){return f[k]!==St?(i.bindFramebuffer(k,St),f[k]=St,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St),!0):!1}function wt(k,St){let lt=g,Et=!1;if(k){lt=p.get(St),lt===void 0&&(lt=[],p.set(St,lt));let Lt=k.textures;if(lt.length!==Lt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Xt=Lt.length;ft<Xt;ft++)lt[ft]=i.COLOR_ATTACHMENT0+ft;lt.length=Lt.length,Et=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(lt)}function At(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let j={[bs]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Uh]:i.FUNC_REVERSE_SUBTRACT};j[Fh]=i.MIN,j[Bh]=i.MAX;let st={[Oh]:i.ZERO,[zh]:i.ONE,[kh]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[qh]:i.SRC_ALPHA_SATURATE,[Wh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[qc]:i.ONE_MINUS_SRC_ALPHA,[Xh]:i.ONE_MINUS_DST_COLOR,[Gh]:i.ONE_MINUS_DST_ALPHA,[Yh]:i.CONSTANT_COLOR,[Zh]:i.ONE_MINUS_CONSTANT_COLOR,[Jh]:i.CONSTANT_ALPHA,[$h]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(k,St,lt,Et,Lt,ft,Xt,Bt,Ce,Me){if(k===Fn){m===!0&&(q(i.BLEND),m=!1);return}if(m===!1&&(it(i.BLEND),m=!0),k!==Dh){if(k!==d||Me!==A){if((v!==bs||y!==bs)&&(i.blendEquation(i.FUNC_ADD),v=bs,y=bs),Me)switch(k){case cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fi:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",k);break}else switch(k){case cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gc:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",k);break}S=null,_=null,b=null,w=null,M.set(0,0,0),T=0,d=k,A=Me}return}Lt=Lt||St,ft=ft||lt,Xt=Xt||Et,(St!==v||Lt!==y)&&(i.blendEquationSeparate(j[St],j[Lt]),v=St,y=Lt),(lt!==S||Et!==_||ft!==b||Xt!==w)&&(i.blendFuncSeparate(st[lt],st[Et],st[ft],st[Xt]),S=lt,_=Et,b=ft,w=Xt),(Bt.equals(M)===!1||Ce!==T)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Ce),M.copy(Bt),T=Ce),d=k,A=!1}function pt(k,St){k.side===hn?q(i.CULL_FACE):it(i.CULL_FACE);let lt=k.side===gn;St&&(lt=!lt),tt(lt),k.blending===cr&&k.transparent===!1?ot(Fn):ot(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Et=k.stencilWrite;l.setTest(Et),Et&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),he(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):q(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function vt(k){k!==Ph?(it(i.CULL_FACE),k!==I&&(k===Vc?i.cullFace(i.BACK):k===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):q(i.CULL_FACE),I=k}function Jt(k){k!==L&&(O&&i.lineWidth(k),L=k)}function he(k,St,lt){k?(it(i.POLYGON_OFFSET_FILL),(R!==St||D!==lt)&&(R=St,D=lt,a.getReversed()&&(St=-St),i.polygonOffset(St,lt))):q(i.POLYGON_OFFSET_FILL)}function Qt(k){k?it(i.SCISSOR_TEST):q(i.SCISSOR_TEST)}function fe(k){k===void 0&&(k=i.TEXTURE0+F-1),X!==k&&(i.activeTexture(k),X=k)}function V(k,St,lt){lt===void 0&&(X===null?lt=i.TEXTURE0+F-1:lt=X);let Et=H[lt];Et===void 0&&(Et={type:void 0,texture:void 0},H[lt]=Et),(Et.type!==k||Et.texture!==St)&&(X!==lt&&(i.activeTexture(lt),X=lt),i.bindTexture(k,St||Y[k]),Et.type=k,Et.texture=St)}function Ne(){let k=H[X];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function E(){try{i.texSubImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function W(){try{i.texSubImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function _t(){try{i.texStorage2D(...arguments)}catch(k){te("WebGLState:",k)}}function Mt(){try{i.texStorage3D(...arguments)}catch(k){te("WebGLState:",k)}}function nt(){try{i.texImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function rt(){try{i.texImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function mt(k){return h[k]!==void 0?h[k]:i.getParameter(k)}function Ht(k,St){h[k]!==St&&(i.pixelStorei(k,St),h[k]=St)}function Rt(k){Wt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Wt.copy(k))}function bt(k){Yt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Yt.copy(k))}function Vt(k,St){let lt=u.get(St);lt===void 0&&(lt=new WeakMap,u.set(St,lt));let Et=lt.get(k);Et===void 0&&(Et=i.getUniformBlockIndex(St,k.name),lt.set(k,Et))}function Zt(k,St){let Et=u.get(St).get(k);o.get(St)!==Et&&(i.uniformBlockBinding(St,Et,k.__bindingPointIndex),o.set(St,Et))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},h={},X=null,H={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,S=null,_=null,y=null,b=null,w=null,M=new xt(0,0,0),T=0,A=!1,P=null,I=null,L=null,R=null,D=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:it,disable:q,bindFramebuffer:Nt,drawBuffers:wt,useProgram:At,setBlending:ot,setMaterial:pt,setFlipSided:tt,setCullFace:vt,setLineWidth:Jt,setPolygonOffset:he,setScissorTest:Qt,activeTexture:fe,bindTexture:V,unbindTexture:Ne,compressedTexImage2D:ce,compressedTexImage3D:N,texImage2D:nt,texImage3D:rt,pixelStorei:Ht,getParameter:mt,updateUBOMapping:Vt,uniformBlockBinding:Zt,texStorage2D:_t,texStorage3D:Mt,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:$,compressedTexSubImage3D:et,scissor:Rt,viewport:bt,reset:re}}function kv(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Gt,c=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,E){return g?new OffscreenCanvas(N,E):Yr("canvas")}function m(N,E,W){let $=1,et=ce(N);if((et.width>W||et.height>W)&&($=W/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let _t=Math.floor($*et.width),Mt=Math.floor($*et.height);f===void 0&&(f=x(_t,Mt));let nt=E?x(_t,Mt):f;return nt.width=_t,nt.height=Mt,nt.getContext("2d").drawImage(N,0,0,_t,Mt),jt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+_t+"x"+Mt+")."),nt}else return"data"in N&&jt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),N;return N}function d(N){return N.generateMipmaps}function v(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,E,W,$,et,_t=!1){if(N!==null){if(i[N]!==void 0)return i[N];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Mt;$&&(Mt=t.get("EXT_texture_norm16"),Mt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=E;if(E===i.RED&&(W===i.FLOAT&&(nt=i.R32F),W===i.HALF_FLOAT&&(nt=i.R16F),W===i.UNSIGNED_BYTE&&(nt=i.R8),W===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.R16_EXT),W===i.SHORT&&Mt&&(nt=Mt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.R8UI),W===i.UNSIGNED_SHORT&&(nt=i.R16UI),W===i.UNSIGNED_INT&&(nt=i.R32UI),W===i.BYTE&&(nt=i.R8I),W===i.SHORT&&(nt=i.R16I),W===i.INT&&(nt=i.R32I)),E===i.RG&&(W===i.FLOAT&&(nt=i.RG32F),W===i.HALF_FLOAT&&(nt=i.RG16F),W===i.UNSIGNED_BYTE&&(nt=i.RG8),W===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RG16_EXT),W===i.SHORT&&Mt&&(nt=Mt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RG8UI),W===i.UNSIGNED_SHORT&&(nt=i.RG16UI),W===i.UNSIGNED_INT&&(nt=i.RG32UI),W===i.BYTE&&(nt=i.RG8I),W===i.SHORT&&(nt=i.RG16I),W===i.INT&&(nt=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),W===i.UNSIGNED_INT&&(nt=i.RGB32UI),W===i.BYTE&&(nt=i.RGB8I),W===i.SHORT&&(nt=i.RGB16I),W===i.INT&&(nt=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),W===i.UNSIGNED_INT&&(nt=i.RGBA32UI),W===i.BYTE&&(nt=i.RGBA8I),W===i.SHORT&&(nt=i.RGBA16I),W===i.INT&&(nt=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RGB16_EXT),W===i.SHORT&&Mt&&(nt=Mt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),E===i.RGBA){let rt=_t?qr:me.getTransfer(et);W===i.FLOAT&&(nt=i.RGBA32F),W===i.HALF_FLOAT&&(nt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(nt=rt===Ae?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Mt&&(nt=Mt.RGBA16_EXT),W===i.SHORT&&Mt&&(nt=Mt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function y(N,E){let W;return N?E===null||E===hi||E===hr?W=i.DEPTH24_STENCIL8:E===ti?W=i.DEPTH32F_STENCIL8:E===ur&&(W=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hi||E===hr?W=i.DEPTH_COMPONENT24:E===ti?W=i.DEPTH_COMPONENT32F:E===ur&&(W=i.DEPTH_COMPONENT16),W}function b(N,E){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==$e&&N.minFilter!==Ye?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function w(N){let E=N.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&c.delete(E),E.isHTMLTexture&&h.delete(E)}function M(N){let E=N.target;E.removeEventListener("dispose",M),P(E)}function T(N){let E=n.get(N);if(E.__webglInit===void 0)return;let W=N.source,$=p.get(W);if($){let et=$[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&A(N),Object.keys($).length===0&&p.delete(W)}n.remove(N)}function A(N){let E=n.get(N);i.deleteTexture(E.__webglTexture);let W=N.source,$=p.get(W);delete $[E.__cacheKey],a.memory.textures--}function P(N){let E=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let et=0;et<E.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(E.__webglFramebuffer[$][et]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=N.textures;for(let $=0,et=W.length;$<et;$++){let _t=n.get(W[$]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(N)}let I=0;function L(){I=0}function R(){return I}function D(N){I=N}function F(){let N=I;return N>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,N}function O(N){let E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function z(N,E){let W=n.get(N);if(N.isVideoTexture&&V(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let $=N.image;if($===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(W,N,E);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function U(N,E){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){q(W,N,E);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function X(N,E){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){q(W,N,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function H(N,E){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){Nt(W,N,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}let Q={[$s]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},dt={[$e]:i.NEAREST,[Qh]:i.NEAREST_MIPMAP_NEAREST,[mo]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},Wt={[sf]:i.NEVER,[cf]:i.ALWAYS,[rf]:i.LESS,[Nl]:i.LEQUAL,[of]:i.EQUAL,[Ul]:i.GEQUAL,[af]:i.GREATER,[lf]:i.NOTEQUAL};function Yt(N,E){if(E.type===ti&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ye||E.magFilter===$a||E.magFilter===mo||E.magFilter===Bn||E.minFilter===Ye||E.minFilter===$a||E.minFilter===mo||E.minFilter===Bn)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Q[E.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Q[E.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Q[E.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,dt[E.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,dt[E.minFilter]),E.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Wt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$e||E.minFilter!==mo&&E.minFilter!==Bn||E.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function zt(N,E){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",w));let $=E.source,et=p.get($);et===void 0&&(et={},p.set($,et));let _t=O(E);if(_t!==N.__cacheKey){et[_t]===void 0&&(et[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),et[_t].usedTimes++;let Mt=et[N.__cacheKey];Mt!==void 0&&(et[N.__cacheKey].usedTimes--,Mt.usedTimes===0&&A(E)),N.__cacheKey=_t,N.__webglTexture=et[_t].texture}return W}function Y(N,E,W){return Math.floor(Math.floor(N/W)/E)}function it(N,E,W,$){let _t=N.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,$,E.data);else{_t.sort((Ht,Rt)=>Ht.start-Rt.start);let Mt=0;for(let Ht=1;Ht<_t.length;Ht++){let Rt=_t[Mt],bt=_t[Ht],Vt=Rt.start+Rt.count,Zt=Y(bt.start,E.width,4),re=Y(Rt.start,E.width,4);bt.start<=Vt+1&&Zt===re&&Y(bt.start+bt.count-1,E.width,4)===Zt?Rt.count=Math.max(Rt.count,bt.start+bt.count-Rt.start):(++Mt,_t[Mt]=bt)}_t.length=Mt+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Ht=0,Rt=_t.length;Ht<Rt;Ht++){let bt=_t[Ht],Vt=Math.floor(bt.start/4),Zt=Math.ceil(bt.count/4),re=Vt%E.width,k=Math.floor(Vt/E.width),St=Zt,lt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,re,k,St,lt,W,$,E.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function q(N,E,W){let $=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=i.TEXTURE_3D);let et=zt(N,E),_t=E.source;e.bindTexture($,N.__webglTexture,i.TEXTURE0+W);let Mt=n.get(_t);if(_t.version!==Mt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let lt=me.getPrimaries(me.workingColorSpace),Et=E.colorSpace===fi?null:me.getPrimaries(E.colorSpace),Lt=E.colorSpace===fi||lt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let rt=m(E.image,!1,s.maxTextureSize);rt=Ne(E,rt);let mt=r.convert(E.format,E.colorSpace),Ht=r.convert(E.type),Rt=_(E.internalFormat,mt,Ht,E.normalized,E.colorSpace,E.isVideoTexture);Yt($,E);let bt,Vt=E.mipmaps,Zt=E.isVideoTexture!==!0,re=Mt.__version===void 0||et===!0,k=_t.dataReady,St=b(E,rt);if(E.isDepthTexture)Rt=y(E.format===ls,E.type),re&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Rt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,rt.width,rt.height,0,mt,Ht,null));else if(E.isDataTexture)if(Vt.length>0){Zt&&re&&e.texStorage2D(i.TEXTURE_2D,St,Rt,Vt[0].width,Vt[0].height);for(let lt=0,Et=Vt.length;lt<Et;lt++)bt=Vt[lt],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,bt.width,bt.height,mt,Ht,bt.data):e.texImage2D(i.TEXTURE_2D,lt,Rt,bt.width,bt.height,0,mt,Ht,bt.data);E.generateMipmaps=!1}else Zt?(re&&e.texStorage2D(i.TEXTURE_2D,St,Rt,rt.width,rt.height),k&&it(E,rt,mt,Ht)):e.texImage2D(i.TEXTURE_2D,0,Rt,rt.width,rt.height,0,mt,Ht,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,Vt[0].width,Vt[0].height,rt.depth);for(let lt=0,Et=Vt.length;lt<Et;lt++)if(bt=Vt[lt],E.format!==zn)if(mt!==null)if(Zt){if(k)if(E.layerUpdates.size>0){let Lt=fu(bt.width,bt.height,E.format,E.type);for(let ft of E.layerUpdates){let Xt=bt.data.subarray(ft*Lt/bt.data.BYTES_PER_ELEMENT,(ft+1)*Lt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,ft,bt.width,bt.height,1,mt,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,rt.depth,mt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Rt,bt.width,bt.height,rt.depth,0,bt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,rt.depth,mt,Ht,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Rt,bt.width,bt.height,rt.depth,0,mt,Ht,bt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Zt&&re&&e.texStorage2D(i.TEXTURE_2D,St,Rt,Vt[0].width,Vt[0].height);for(let lt=0,Et=Vt.length;lt<Et;lt++)bt=Vt[lt],E.format!==zn?mt!==null?Zt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,bt.width,bt.height,mt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Rt,bt.width,bt.height,0,bt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,bt.width,bt.height,mt,Ht,bt.data):e.texImage2D(i.TEXTURE_2D,lt,Rt,bt.width,bt.height,0,mt,Ht,bt.data)}else if(E.isDataArrayTexture)if(Zt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,rt.width,rt.height,rt.depth),k)if(E.layerUpdates.size>0){let lt=fu(rt.width,rt.height,E.format,E.type);for(let Et of E.layerUpdates){let Lt=rt.data.subarray(Et*lt/rt.data.BYTES_PER_ELEMENT,(Et+1)*lt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,rt.width,rt.height,1,mt,Ht,Lt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,mt,Ht,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,rt.width,rt.height,rt.depth,0,mt,Ht,rt.data);else if(E.isData3DTexture)Zt?(re&&e.texStorage3D(i.TEXTURE_3D,St,Rt,rt.width,rt.height,rt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,mt,Ht,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,rt.width,rt.height,rt.depth,0,mt,Ht,rt.data);else if(E.isFramebufferTexture){if(re)if(Zt)e.texStorage2D(i.TEXTURE_2D,St,Rt,rt.width,rt.height);else{let lt=rt.width,Et=rt.height;for(let Lt=0;Lt<St;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Rt,lt,Et,0,mt,Ht,null),lt>>=1,Et>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let lt=i.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),rt.parentNode!==lt){lt.appendChild(rt),h.add(E),lt.onpaint=Et=>{let Lt=Et.changedElements;for(let ft of h)Lt.includes(ft.image)&&(ft.needsUpdate=!0)},lt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let Lt=i.RGBA,ft=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,ft,Xt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(Zt&&re){let lt=ce(Vt[0]);e.texStorage2D(i.TEXTURE_2D,St,Rt,lt.width,lt.height)}for(let lt=0,Et=Vt.length;lt<Et;lt++)bt=Vt[lt],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,mt,Ht,bt):e.texImage2D(i.TEXTURE_2D,lt,Rt,mt,Ht,bt);E.generateMipmaps=!1}else if(Zt){if(re){let lt=ce(rt);e.texStorage2D(i.TEXTURE_2D,St,Rt,lt.width,lt.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ht,rt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,mt,Ht,rt);d(E)&&v($),Mt.__version=_t.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Nt(N,E,W){if(E.image.length!==6)return;let $=zt(N,E),et=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let _t=n.get(et);if(et.version!==_t.__version||$===!0){e.activeTexture(i.TEXTURE0+W);let Mt=me.getPrimaries(me.workingColorSpace),nt=E.colorSpace===fi?null:me.getPrimaries(E.colorSpace),rt=E.colorSpace===fi||Mt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let mt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ht=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let ft=0;ft<6;ft++)!mt&&!Ht?Rt[ft]=m(E.image[ft],!0,s.maxCubemapSize):Rt[ft]=Ht?E.image[ft].image:E.image[ft],Rt[ft]=Ne(E,Rt[ft]);let bt=Rt[0],Vt=r.convert(E.format,E.colorSpace),Zt=r.convert(E.type),re=_(E.internalFormat,Vt,Zt,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,St=_t.__version===void 0||$===!0,lt=et.dataReady,Et=b(E,bt);Yt(i.TEXTURE_CUBE_MAP,E);let Lt;if(mt){k&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,re,bt.width,bt.height);for(let ft=0;ft<6;ft++){Lt=Rt[ft].mipmaps;for(let Xt=0;Xt<Lt.length;Xt++){let Bt=Lt[Xt];E.format!==zn?Vt!==null?k?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,0,0,Bt.width,Bt.height,Vt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,re,Bt.width,Bt.height,0,Bt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,0,0,Bt.width,Bt.height,Vt,Zt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt,re,Bt.width,Bt.height,0,Vt,Zt,Bt.data)}}}else{if(Lt=E.mipmaps,k&&St){Lt.length>0&&Et++;let ft=ce(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,re,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Ht){k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Rt[ft].width,Rt[ft].height,Vt,Zt,Rt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,re,Rt[ft].width,Rt[ft].height,0,Vt,Zt,Rt[ft].data);for(let Xt=0;Xt<Lt.length;Xt++){let Ce=Lt[Xt].image[ft].image;k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,0,0,Ce.width,Ce.height,Vt,Zt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,re,Ce.width,Ce.height,0,Vt,Zt,Ce.data)}}else{k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Vt,Zt,Rt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,re,Vt,Zt,Rt[ft]);for(let Xt=0;Xt<Lt.length;Xt++){let Bt=Lt[Xt];k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,0,0,Vt,Zt,Bt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Xt+1,re,Vt,Zt,Bt.image[ft])}}}d(E)&&v(i.TEXTURE_CUBE_MAP),_t.__version=et.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function wt(N,E,W,$,et,_t){let Mt=r.convert(W.format,W.colorSpace),nt=r.convert(W.type),rt=_(W.internalFormat,Mt,nt,W.normalized,W.colorSpace),mt=n.get(E),Ht=n.get(W);if(Ht.__renderTarget=E,!mt.__hasExternalTextures){let Rt=Math.max(1,E.width>>_t),bt=Math.max(1,E.height>>_t);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,_t,rt,Rt,bt,E.depth,0,Mt,nt,null):e.texImage2D(et,_t,rt,Rt,bt,0,Mt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),fe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,et,Ht.__webglTexture,0,Qt(E)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,et,Ht.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(N,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),E.depthBuffer){let $=E.depthTexture,et=$&&$.isDepthTexture?$.type:null,_t=y(E.stencilBuffer,et),Mt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(E),_t,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(E),_t,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_t,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,N)}else{let $=E.textures;for(let et=0;et<$.length;et++){let _t=$[et],Mt=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),rt=_(_t.internalFormat,Mt,nt,_t.normalized,_t.colorSpace);fe(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(E),rt,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(E),rt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,rt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function j(N,E,W){let $=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(E.depthTexture);if(et.__renderTarget=E,(!et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$){if(et.__webglInit===void 0&&(et.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,E.depthTexture);let mt=r.convert(E.depthTexture.format),Ht=r.convert(E.depthTexture.type),Rt;E.depthTexture.format===vi?Rt=i.DEPTH_COMPONENT24:E.depthTexture.format===ls&&(Rt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Rt,E.width,E.height,0,mt,Ht,null)}}else z(E.depthTexture,0);let _t=et.__webglTexture,Mt=Qt(E),nt=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,rt=E.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===vi)fe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,nt,_t,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,nt,_t,0);else if(E.depthTexture.format===ls)fe(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,nt,_t,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,nt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(N){let E=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){let $=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){let et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=$}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let $=0;$<6;$++)j(E.__webglFramebuffer[$],N,$);else{let $=N.texture.mipmaps;$&&$.length>0?j(E.__webglFramebuffer[0],N,0):j(E.__webglFramebuffer,N,0)}else if(W){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=i.createRenderbuffer(),At(E.__webglDepthbuffer[$],N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=E.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,_t)}}else{let $=N.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),At(E.__webglDepthbuffer,N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(N,E,W){let $=n.get(N);E!==void 0&&wt($.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&st(N)}function pt(N){let E=N.texture,W=n.get(N),$=n.get(E);N.addEventListener("dispose",M);let et=N.textures,_t=N.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=E.version,a.memory.textures++),_t){W.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[nt]=[];for(let rt=0;rt<E.mipmaps.length;rt++)W.__webglFramebuffer[nt][rt]=i.createFramebuffer()}else W.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let nt=0;nt<E.mipmaps.length;nt++)W.__webglFramebuffer[nt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let nt=0,rt=et.length;nt<rt;nt++){let mt=n.get(et[nt]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&fe(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let nt=0;nt<et.length;nt++){let rt=et[nt];W.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[nt]);let mt=r.convert(rt.format,rt.colorSpace),Ht=r.convert(rt.type),Rt=_(rt.internalFormat,mt,Ht,rt.normalized,rt.colorSpace,N.isXRRenderTarget===!0),bt=Qt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Rt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,W.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),At(W.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,E);for(let nt=0;nt<6;nt++)if(E.mipmaps&&E.mipmaps.length>0)for(let rt=0;rt<E.mipmaps.length;rt++)wt(W.__webglFramebuffer[nt][rt],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,rt);else wt(W.__webglFramebuffer[nt],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);d(E)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let nt=0,rt=et.length;nt<rt;nt++){let mt=et[nt],Ht=n.get(mt),Rt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Rt,Ht.__webglTexture),Yt(Rt,mt),wt(W.__webglFramebuffer,N,mt,i.COLOR_ATTACHMENT0+nt,Rt,0),d(mt)&&v(Rt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(nt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,$.__webglTexture),Yt(nt,E),E.mipmaps&&E.mipmaps.length>0)for(let rt=0;rt<E.mipmaps.length;rt++)wt(W.__webglFramebuffer[rt],N,E,i.COLOR_ATTACHMENT0,nt,rt);else wt(W.__webglFramebuffer,N,E,i.COLOR_ATTACHMENT0,nt,0);d(E)&&v(nt),e.unbindTexture()}N.depthBuffer&&st(N)}function tt(N){let E=N.textures;for(let W=0,$=E.length;W<$;W++){let et=E[W];if(d(et)){let _t=S(N),Mt=n.get(et).__webglTexture;e.bindTexture(_t,Mt),v(_t),e.unbindTexture()}}}let vt=[],Jt=[];function he(N){if(N.samples>0){if(fe(N)===!1){let E=N.textures,W=N.width,$=N.height,et=i.COLOR_BUFFER_BIT,_t=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(N),nt=E.length>1;if(nt)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let rt=N.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[mt]);let Ht=n.get(E[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,et,i.NEAREST),o===!0&&(vt.length=0,Jt.length=0,vt.push(i.COLOR_ATTACHMENT0+mt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(vt.push(_t),Jt.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[mt]);let Ht=n.get(E[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&o){let E=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Qt(N){return Math.min(s.maxSamples,N.samples)}function fe(N){let E=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(N){let E=a.render.frame;c.get(N)!==E&&(c.set(N,E),N.update())}function Ne(N,E){let W=N.colorSpace,$=N.format,et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Xr&&W!==fi&&(me.getTransfer(W)===Ae?($!==zn||et!==On)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",W)),E}function ce(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.getTextureUnits=R,this.setTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=ot,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Hv(i,t){function e(n,s=fi){let r,a=me.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===eu)return i.BYTE;if(n===nu)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===en)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===ou)return i.RGB;if(n===zn)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===fr)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===cs)return i.RG;if(n===el)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===go||n===xo||n===vo||n===_o)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ll||n===cl||n===ul||n===hl||n===yo||n===fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===ll)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return r.COMPRESSED_R11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return r.COMPRESSED_RG11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dl||n===pl||n===ml||n===gl||n===xl||n===vl||n===_l||n===yl||n===Ml||n===bl||n===Sl||n===Tl||n===El||n===wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===Rl||n===Cl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Al)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Il||n===Mo||n===Ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gv=`
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

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ye({vertexShader:Vv,fragmentShader:Gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends _i{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,u=null,c=null,h=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Iu,d={},v=e.getContextAttributes(),S=null,_=null,y=[],b=[],w=new Gt,M=null,T=null,A=new mn;A.viewport=new Le;let P=new mn;P.viewport=new Le;let I=[A,P],L=new qa,R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=y[Y];return it===void 0&&(it=new tr,y[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=y[Y];return it===void 0&&(it=new tr,y[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=y[Y];return it===void 0&&(it=new tr,y[Y]=it),it.getHandSpace()};function F(Y){let it=b.indexOf(Y.inputSource);if(it===-1)return;let q=y[it];q!==void 0&&(q.update(Y.inputSource,Y.frame,u||a),q.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<y.length;Y++){let it=b[Y];it!==null&&(b[Y]=null,y[Y].disconnect(it))}R=null,D=null,m.reset();for(let Y in d)delete d[Y];if(t.setRenderTarget(S),p=null,f=null,h=null,s=null,_=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(w.width,w.height,!1),T!==null){let Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,Nt=null,wt=null;v.depth&&(wt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=v.stencil?ls:vi,Nt=v.stencil?hr:hi);let At={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Be(f.textureWidth,f.textureHeight,{format:zn,type:On,depthTexture:new es(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Be(p.framebufferWidth,p.framebufferHeight,{format:zn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),u=null,a=await s.requestReferenceSpace(l),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Y){for(let it=0;it<Y.removed.length;it++){let q=Y.removed[it],Nt=b.indexOf(q);Nt>=0&&(b[Nt]=null,y[Nt].disconnect(q))}for(let it=0;it<Y.added.length;it++){let q=Y.added[it],Nt=b.indexOf(q);if(Nt===-1){for(let At=0;At<y.length;At++)if(At>=b.length){b.push(q),Nt=At;break}else if(b[At]===null){b[At]=q,Nt=At;break}if(Nt===-1)break}let wt=y[Nt];wt&&wt.connect(q)}}let U=new B,X=new B;function H(Y,it,q){U.setFromMatrixPosition(it.matrixWorld),X.setFromMatrixPosition(q.matrixWorld);let Nt=U.distanceTo(X),wt=it.projectionMatrix.elements,At=q.projectionMatrix.elements,j=wt[14]/(wt[10]-1),st=wt[14]/(wt[10]+1),ot=(wt[9]+1)/wt[5],pt=(wt[9]-1)/wt[5],tt=(wt[8]-1)/wt[0],vt=(At[8]+1)/At[0],Jt=j*tt,he=j*vt,Qt=Nt/(-tt+vt),fe=Qt*-tt;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(fe),Y.translateZ(Qt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let V=j+Qt,Ne=st+Qt,ce=Jt-fe,N=he+(Nt-fe),E=ot*st/Ne*V,W=pt*st/Ne*V;Y.projectionMatrix.makePerspective(ce,N,E,W,V,Ne),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Q(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,q=Y.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(q=m.depthFar)),L.near=P.near=A.near=it,L.far=P.far=A.far=q,(R!==L.near||D!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),R=L.near,D=L.far),L.layers.mask=Y.layers.mask|6,A.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;let Nt=Y.parent,wt=L.cameras;Q(L,Nt);for(let At=0;At<wt.length;At++)Q(wt[At],Nt);wt.length===2?H(L,A,P):L.projectionMatrix.copy(A.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),dt(Y,L,Nt)};function dt(Y,it,q){q===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(q.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return o},this.setFoveation=function(Y){o=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return d[Y]};let Wt=null;function Yt(Y,it){if(c=it.getViewerPose(u||a),g=it,c!==null){let q=c.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Nt=!1;q.length!==L.cameras.length&&(L.cameras.length=0,Nt=!0);for(let st=0;st<q.length;st++){let ot=q[st],pt=null;if(p!==null)pt=p.getViewport(ot);else{let vt=h.getViewSubImage(f,ot);pt=vt.viewport,st===0&&(t.setRenderTargetTextures(_,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(_))}let tt=I[st];tt===void 0&&(tt=new mn,tt.layers.enable(st),tt.viewport=new Le,I[st]=tt),tt.matrix.fromArray(ot.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ot.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(pt.x,pt.y,pt.width,pt.height),st===0&&(L.matrix.copy(tt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Nt===!0&&L.cameras.push(tt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let st=h.getDepthInformation(q[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let st=0;st<q.length;st++){let ot=q[st].camera;if(ot){let pt=d[ot];pt||(pt=new io,d[ot]=pt);let tt=h.getCameraImage(ot);pt.sourceTexture=tt}}}}for(let q=0;q<y.length;q++){let Nt=b[q],wt=y[q];Nt!==null&&wt!==void 0&&wt.update(Nt,it,u||a)}Wt&&Wt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let zt=new zf;zt.setAnimationLoop(Yt),this.setAnimationLoop=function(Y){Wt=Y},this.dispose=function(){}}},Wv=new qt,Xf=new ne;Xf.set(-1,0,0,0,1,0,0,0,1);function Xv(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,cu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,S,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?o(m,d,v,S):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===gn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===gn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),S=v.envMap,_=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,v,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qv(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,y){let b=y.program;n.uniformBlockBinding(_,b)}function u(_,y){let b=s[_.id];b===void 0&&(m(_),b=c(_),s[_.id]=b,_.addEventListener("dispose",v));let w=y.program;n.updateUBOMapping(_,w);let M=t.render.frame;r[_.id]!==M&&(f(_),r[_.id]=M)}function c(_){let y=h();_.__bindingPointIndex=y;let b=i.createBuffer(),w=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function h(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],b=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,T=b.length;M<T;M++){let A=b[M];if(Array.isArray(A))for(let P=0,I=A.length;P<I;P++)p(A[P],M,P,w);else p(A,M,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,y,b,w){if(x(_,y,b,w)===!0){let M=_.__offset,T=_.value;if(Array.isArray(T)){let A=0;for(let P=0;P<T.length;P++){let I=T[P],L=d(I);g(I,_.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function g(_,y,b){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,b)}function x(_,y,b,w){let M=_.value,T=y+"_"+b;if(w[T]===void 0)return typeof M=="number"||typeof M=="boolean"?w[T]=M:ArrayBuffer.isView(M)?w[T]=M.slice():w[T]=M.clone(),!0;{let A=w[T];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return w[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function m(_){let y=_.uniforms,b=0,w=16;for(let T=0,A=y.length;T<A;T++){let P=Array.isArray(y[T])?y[T]:[y[T]];for(let I=0,L=P.length;I<L;I++){let R=P[I],D=Array.isArray(R.value)?R.value:[R.value];for(let F=0,O=D.length;F<O;F++){let z=D[F],U=d(z),X=b%w,H=X%U.boundary,Q=X+H;b+=H,Q!==0&&w-Q<U.storage&&(b+=w-Q),R.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=U.storage}}}let M=b%w;return M>0&&(b+=w-M),_.__size=b,_.__cache={},this}function d(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",_),y}function v(_){let y=_.target;y.removeEventListener("dispose",v);let b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:o,update:u,dispose:S}}var Yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function Zv(){return Mi===null&&(Mi=new ts(Yv,16,16,cs,en),Mi.name="DFG_LUT",Mi.minFilter=Ye,Mi.magFilter=Ye,Mi.wrapS=xi,Mi.wrapT=xi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var kl=class{constructor(t={}){let{canvas:e=hf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=On}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=p,m=new Set([nl,el,tl]),d=new Set([On,hi,ur,hr,ja,Qa]),v=new Uint32Array(4),S=new Int32Array(4),_=new B,y=null,b=null,w=[],M=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,I=null,L=null,R=null,D=null;this._outputColorSpace=ze;let F=0,O=0,z=null,U=-1,X=null,H=new Le,Q=new Le,dt=null,Wt=new xt(0),Yt=0,zt=e.width,Y=e.height,it=1,q=null,Nt=null,wt=new Le(0,0,zt,Y),At=new Le(0,0,zt,Y),j=!1,st=new nr,ot=!1,pt=!1,tt=new qt,vt=new B,Jt=new Le,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function fe(){return z===null?it:1}let V=n;function Ne(C,G){return e.getContext(C,G)}let ce,N,E,W,$,et,_t,Mt,nt,rt,mt,Ht,Rt,bt,Vt,Zt,re,k,St,lt,Et,Lt,ft;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",vn,!1),V===null){let G="webgl2";if(V=Ne(G,C),V===null)throw Ne(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(C){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),te("WebGLRenderer: "+C.message),C}function Xt(){ce=new ex(V),ce.init(),Et=new Hv(V,ce),N=new Xg(V,ce,t,Et),E=new zv(V,ce),N.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),L=V.createFramebuffer(),R=V.createFramebuffer(),D=V.createFramebuffer(),W=new sx(V),$=new Ev,et=new kv(V,ce,E,$,N,Et,W),_t=new tx(A),Mt=new o0(V),Lt=new Gg(V,Mt),nt=new nx(V,Mt,W,Lt),rt=new ox(V,nt,Mt,Lt,W),k=new rx(V,N,et),Vt=new qg($),mt=new Tv(A,_t,ce,N,Lt,Vt),Ht=new Xv(A,$),Rt=new Av,bt=new Dv(ce),re=new Vg(A,_t,E,rt,g,o),Zt=new Ov(A,rt,N),ft=new qv(V,W,N,E),St=new Wg(V,ce,W),lt=new ix(V,ce,W),W.programs=mt.programs,A.capabilities=N,A.extensions=ce,A.properties=$,A.renderLists=Rt,A.shadowMap=Zt,A.state=E,A.info=W}x!==On&&(T=new lx(x,e.width,e.height,l,s,r));let Bt=new Lu(A,V);this.xr=Bt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(C){C!==void 0&&(it=C,this.setSize(zt,Y,!1))},this.getSize=function(C){return C.set(zt,Y)},this.setSize=function(C,G,K=!0){if(Bt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=C,Y=G,e.width=Math.floor(C*it),e.height=Math.floor(G*it),K===!0&&(e.style.width=C+"px",e.style.height=G+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(zt*it,Y*it).floor()},this.setDrawingBufferSize=function(C,G,K){zt=C,Y=G,it=K,e.width=Math.floor(C*K),e.height=Math.floor(G*K),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(x===On){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(wt)},this.setViewport=function(C,G,K,Z){C.isVector4?wt.set(C.x,C.y,C.z,C.w):wt.set(C,G,K,Z),E.viewport(H.copy(wt).multiplyScalar(it).round())},this.getScissor=function(C){return C.copy(At)},this.setScissor=function(C,G,K,Z){C.isVector4?At.set(C.x,C.y,C.z,C.w):At.set(C,G,K,Z),E.scissor(Q.copy(At).multiplyScalar(it).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){E.setScissorTest(j=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){Nt=C},this.getClearColor=function(C){return C.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,K=!0){let Z=0;if(C){let J=!1;if(z!==null){let Pt=z.texture.format;J=m.has(Pt)}if(J){let Pt=z.texture.type,Dt=d.has(Pt),Ct=re.getClearColor(),Ot=re.getClearAlpha(),Ft=Ct.r,se=Ct.g,ue=Ct.b;Dt?(v[0]=Ft,v[1]=se,v[2]=ue,v[3]=Ot,V.clearBufferuiv(V.COLOR,0,v)):(S[0]=Ft,S[1]=se,S[2]=ue,S[3]=Ot,V.clearBufferiv(V.COLOR,0,S))}else Z|=V.COLOR_BUFFER_BIT}G&&(Z|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Z|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&V.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),re.dispose(),Rt.dispose(),bt.dispose(),$.dispose(),_t.dispose(),rt.dispose(),Lt.dispose(),ft.dispose(),mt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Is),Bt.removeEventListener("sessionend",yn),ee.stop()};function Ce(C){C.preventDefault(),lu("WebGLRenderer: Context Lost."),P=!0}function Me(){lu("WebGLRenderer: Context Restored."),P=!1;let C=W.autoReset,G=Zt.enabled,K=Zt.autoUpdate,Z=Zt.needsUpdate,J=Zt.type;Xt(),W.autoReset=C,Zt.enabled=G,Zt.autoUpdate=K,Zt.needsUpdate=Z,Zt.type=J}function vn(C){te("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function kn(C){let G=C.target;G.removeEventListener("dispose",kn),ko(G)}function ko(C){_n(C),$.remove(C)}function _n(C){let G=$.get(C).programs;G!==void 0&&(G.forEach(function(K){mt.releaseProgram(K)}),C.isShaderMaterial&&mt.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,K,Z,J,Pt){G===null&&(G=he);let Dt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ct=Ds(C,G,K,Z,J);E.setMaterial(Z,Dt);let Ot=K.index,Ft=1;if(Z.wireframe===!0){if(Ot=nt.getWireframeAttribute(K),Ot===void 0)return;Ft=2}let se=K.drawRange,ue=K.attributes.position,Tt=se.start*Ft,be=(se.start+se.count)*Ft;Pt!==null&&(Tt=Math.max(Tt,Pt.start*Ft),be=Math.min(be,(Pt.start+Pt.count)*Ft)),Ot!==null?(Tt=Math.max(Tt,0),be=Math.min(be,Ot.count)):ue!=null&&(Tt=Math.max(Tt,0),be=Math.min(be,ue.count));let Se=be-Tt;if(Se<0||Se===1/0)return;Lt.setup(J,Z,Ct,K,Ot);let we,de=St;if(Ot!==null&&(we=Mt.get(Ot),de=lt,de.setIndex(we)),J.isMesh)Z.wireframe===!0?(E.setLineWidth(Z.wireframeLinewidth*fe()),de.setMode(V.LINES)):de.setMode(V.TRIANGLES);else if(J.isLine){let Oe=Z.linewidth;Oe===void 0&&(Oe=1),E.setLineWidth(Oe*fe()),J.isLineSegments?de.setMode(V.LINES):J.isLineLoop?de.setMode(V.LINE_LOOP):de.setMode(V.LINE_STRIP)}else J.isPoints?de.setMode(V.POINTS):J.isSprite&&de.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))de.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Oe=J._multiDrawStarts,Ut=J._multiDrawCounts,pn=J._multiDrawCount,ge=Ot?Mt.get(Ot).bytesPerElement:1,Dn=$.get(Z).currentProgram.getUniforms();for(let Cn=0;Cn<pn;Cn++)Dn.setValue(V,"_gl_DrawID",Cn),de.render(Oe[Cn]/ge,Ut[Cn])}else if(J.isInstancedMesh)de.renderInstances(Tt,Se,J.count);else if(K.isInstancedBufferGeometry){let Oe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ut=Math.min(K.instanceCount,Oe);de.renderInstances(Tt,Se,Ut)}else de.render(Tt,Se)};function Nr(C,G,K,Z){I!==null&&C.isNodeMaterial&&I.setObject(Z,C),ot===!0&&Vt.setState(C,K,!1),C.transparent===!0&&C.side===hn&&C.forceSinglePass===!1?(C.side=gn,C.needsUpdate=!0,Fe(C,G,Z),C.side=os,C.needsUpdate=!0,Fe(C,G,Z),C.side=hn):Fe(C,G,Z)}this.compile=function(C,G,K=null){K===null&&(K=C),I!==null&&I.renderStart(C,G,K),b=bt.get(K),b.init(G),M.push(b),K.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),C!==K&&C.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),pt=this.localClippingEnabled,ot=Vt.init(this.clippingPlanes,pt),ot===!0&&Vt.setGlobalState(this.clippingPlanes,G),I!==null&&Zt.render(b.state.shadowsArray,K,G);let Z=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Pt=J.material;if(Pt)if(Array.isArray(Pt))for(let Dt=0;Dt<Pt.length;Dt++){let Ct=Pt[Dt];Nr(Ct,K,G,J),Z.add(Ct)}else Nr(Pt,K,G,J),Z.add(Pt)}),b=M.pop(),I!==null&&I.renderEnd(),Z},this.compileAsync=function(C,G,K=null){let Z=this.compile(C,G,K);return new Promise(J=>{function Pt(){if(Z.forEach(function(Dt){let Ot=$.get(Dt).currentProgram;(Ot===void 0||Ot.isReady())&&Z.delete(Dt)}),Z.size===0){J(C);return}setTimeout(Pt,10)}ce.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Ai=null;function Yi(C){Ai&&Ai(C)}function Is(){ee.stop()}function yn(){ee.start()}let ee=new zf;ee.setAnimationLoop(Yi),typeof self<"u"&&ee.setContext(self),this.setAnimationLoop=function(C){Ai=C,Bt.setAnimationLoop(C),C===null?ee.stop():ee.start()},Bt.addEventListener("sessionstart",Is),Bt.addEventListener("sessionend",yn),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(C,G);let K=Bt.enabled===!0&&Bt.isPresenting===!0,Z=T!==null&&(z===null||K)&&T.begin(A,z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(G),G=Bt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,G,z),b=bt.get(C,M.length),b.init(G),b.state.textureUnits=et.getTextureUnits(),M.push(b),tt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),st.setFromProjectionMatrix(tt,li,G.reversedDepth),pt=this.localClippingEnabled,ot=Vt.init(this.clippingPlanes,pt),y=Rt.get(C,w.length),y.init(),w.push(y),Bt.enabled===!0&&Bt.isPresenting===!0){let Dt=A.xr.getDepthSensingMesh();Dt!==null&&dn(Dt,G,-1/0,A.sortObjects)}dn(C,G,0,A.sortObjects),y.finish(),I!==null&&I.updateLights(b.state.lightsArray),A.sortObjects===!0&&y.sort(q,Nt),Qt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Qt&&re.addToRenderList(y,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Vt.beginShadows();let J=b.state.shadowsArray;if(Zt.render(J,C,G),ot===!0&&Vt.endShadows(),(Z&&T.hasRenderPass())===!1){let Dt=y.opaque,Ct=y.transmissive;if(b.setupLights(),G.isArrayCamera){let Ot=G.cameras;if(Ct.length>0)for(let Ft=0,se=Ot.length;Ft<se;Ft++){let ue=Ot[Ft];gt(Dt,Ct,C,ue)}Qt&&re.render(C);for(let Ft=0,se=Ot.length;Ft<se;Ft++){let ue=Ot[Ft];Ur(y,C,ue,ue.viewport)}}else Ct.length>0&&gt(Dt,Ct,C,G),Qt&&re.render(C),Ur(y,C,G)}z!==null&&O===0&&(et.updateMultisampleRenderTarget(z),et.updateRenderTargetMipmap(z)),Z&&T.end(A),C.isScene===!0&&C.onAfterRender(A,C,G),Lt.resetDefaultState(),U=-1,X=null,M.pop(),M.length>0?(b=M[M.length-1],et.setTextureUnits(b.state.textureUnits),ot===!0&&Vt.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,I!==null&&I.renderEnd()};function dn(C,G,K,Z){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLightProbeGrid)b.pushLightProbeGrid(C);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(st)){Z&&Jt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tt);let Dt=rt.update(C),Ct=C.material;Ct.visible&&y.push(C,Dt,Ct,K,Jt.z,null,G)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(st))){let Dt=rt.update(C),Ct=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Jt.copy(C.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Jt.copy(Dt.boundingSphere.center)),Jt.applyMatrix4(C.matrixWorld).applyMatrix4(tt)),Array.isArray(Ct)){let Ot=Dt.groups;for(let Ft=0,se=Ot.length;Ft<se;Ft++){let ue=Ot[Ft],Tt=Ct[ue.materialIndex];Tt&&Tt.visible&&y.push(C,Dt,Tt,K,Jt.z,ue,G)}}else Ct.visible&&y.push(C,Dt,Ct,K,Jt.z,null,G)}}let Pt=C.children;for(let Dt=0,Ct=Pt.length;Dt<Ct;Dt++)dn(Pt[Dt],G,K,Z)}function Ur(C,G,K,Z){let{opaque:J,transmissive:Pt,transparent:Dt}=C;b.setupLightsView(K),ot===!0&&Vt.setGlobalState(A.clippingPlanes,K),Z&&E.viewport(H.copy(Z)),J.length>0&&ae(J,G,K),Pt.length>0&&ae(Pt,G,K),Dt.length>0&&ae(Dt,G,K),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function gt(C,G,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){let Tt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new Be(1,1,{generateMipmaps:!0,type:Tt?en:On,minFilter:Bn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Pt=b.state.transmissionRenderTarget[Z.id],Dt=Z.viewport||H;Pt.setSize(Dt.z*A.transmissionResolutionScale,Dt.w*A.transmissionResolutionScale);let Ct=A.getRenderTarget(),Ot=A.getActiveCubeFace(),Ft=A.getActiveMipmapLevel();A.setRenderTarget(Pt),A.getClearColor(Wt),Yt=A.getClearAlpha(),Yt<1&&A.setClearColor(16777215,.5),A.clear(),Qt&&re.render(K);let se=A.toneMapping;A.toneMapping=ui;let ue=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),ot===!0&&Vt.setGlobalState(A.clippingPlanes,Z),ae(C,K,Z),et.updateMultisampleRenderTarget(Pt),et.updateRenderTargetMipmap(Pt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let be=0,Se=G.length;be<Se;be++){let we=G[be],{object:de,geometry:Oe,material:Ut,group:pn}=we;if(Ut.side===hn&&de.layers.test(Z.layers)){let ge=Ut.side;Ut.side=gn,Ut.needsUpdate=!0,Kt(de,K,Z,Oe,Ut,pn),Ut.side=ge,Ut.needsUpdate=!0,Tt=!0}}Tt===!0&&(et.updateMultisampleRenderTarget(Pt),et.updateRenderTargetMipmap(Pt))}A.setRenderTarget(Ct,Ot,Ft),A.setClearColor(Wt,Yt),ue!==void 0&&(Z.viewport=ue),A.toneMapping=se}function ae(C,G,K){let Z=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Pt=C.length;J<Pt;J++){let Dt=C[J],{object:Ct,geometry:Ot,group:Ft}=Dt,se=Dt.material;se.allowOverride===!0&&Z!==null&&(se=Z),Ct.layers.test(K.layers)&&Kt(Ct,G,K,Ot,se,Ft)}}function Kt(C,G,K,Z,J,Pt){I!==null&&J.isNodeMaterial&&I.setObject(C,J),C.onBeforeRender(A,G,K,Z,J,Pt),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(A,G,K,Z,C,Pt),J.transparent===!0&&J.side===hn&&J.forceSinglePass===!1?(J.side=gn,J.needsUpdate=!0,A.renderBufferDirect(K,G,Z,J,C,Pt),J.side=os,J.needsUpdate=!0,A.renderBufferDirect(K,G,Z,J,C,Pt),J.side=hn):A.renderBufferDirect(K,G,Z,J,C,Pt),C.onAfterRender(A,G,K,Z,J,Pt)}function Fe(C,G,K){G.isScene!==!0&&(G=he);let Z=$.get(C),J=b.state.lights,Pt=b.state.shadowsArray,Dt=J.state.version,Ct=mt.getParameters(C,J.state,Pt,G,K,b.state.lightProbeGridArray),Ot=mt.getProgramCacheKey(Ct),Ft=Z.programs;Z.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let se=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Z.envMap=_t.get(C.envMap||Z.environment,se),Z.envMapRotation=Z.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Ft===void 0&&(C.addEventListener("dispose",kn),Ft=new Map,Z.programs=Ft);let ue=Ft.get(Ot);if(ue!==void 0){if(Z.currentProgram===ue&&Z.lightsStateVersion===Dt)return Ve(C,Ct),ue}else Ct.uniforms=mt.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,K,Ct),C.onBeforeCompile(Ct,A),ue=mt.acquireProgram(Ct,Ot),Ft.set(Ot,ue),Z.uniforms=Ct.uniforms;let Tt=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Tt.clippingPlanes=Vt.uniform),Ve(C,Ct),Z.needsLights=Hn(C),Z.lightsStateVersion=Dt,Z.needsLights&&(Tt.ambientLightColor.value=J.state.ambient,Tt.lightProbe.value=J.state.probe,Tt.sunLights.value=J.state.sun,Tt.sunLightShadows.value=J.state.sunShadow,Tt.directionalLights.value=J.state.directional,Tt.directionalLightShadows.value=J.state.directionalShadow,Tt.spotLights.value=J.state.spot,Tt.spotLightShadows.value=J.state.spotShadow,Tt.rectAreaLights.value=J.state.rectArea,Tt.ltc_1.value=J.state.rectAreaLTC1,Tt.ltc_2.value=J.state.rectAreaLTC2,Tt.pointLights.value=J.state.point,Tt.pointLightShadows.value=J.state.pointShadow,Tt.hemisphereLights.value=J.state.hemi,Tt.sunShadowMatrix.value=J.state.sunShadowMatrix,Tt.sunShadowCascade.value=J.state.sunShadowCascade,Tt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Tt.spotLightMatrix.value=J.state.spotLightMatrix,Tt.spotLightMap.value=J.state.spotLightMap,Tt.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=b.state.lightProbeGridArray.length>0,Z.currentProgram=ue,Z.uniformsList=null,ue}function Pe(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=mr.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Ve(C,G){let K=$.get(C);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Ls(C,G){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(G.matrixWorld);for(let K=0,Z=C.length;K<Z;K++){let J=C[K];if(J.texture!==null&&J.boundingBox.containsPoint(_))return J}return null}function Ds(C,G,K,Z,J){G.isScene!==!0&&(G=he),et.resetTextureUnits();let Pt=G.fog,Dt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Ct=z===null?A.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:me.workingColorSpace,Ot=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ft=_t.get(Z.envMap||Dt,Ot),se=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ue=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Tt=!!K.morphAttributes.position,be=!!K.morphAttributes.normal,Se=!!K.morphAttributes.color,we=ui;Z.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(we=A.toneMapping);let de=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Oe=de!==void 0?de.length:0,Ut=$.get(Z),pn=b.state.lights;if(ot===!0&&(pt===!0||C!==X)){let kt=C===X&&Z.id===U;Vt.setState(Z,C,kt)}let ge=!1;Z.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==pn.state.version||Ut.outputColorSpace!==Ct||J.isBatchedMesh&&Ut.batching===!1||!J.isBatchedMesh&&Ut.batching===!0||J.isBatchedMesh&&Ut.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ut.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ut.instancing===!1||!J.isInstancedMesh&&Ut.instancing===!0||J.isSkinnedMesh&&Ut.skinning===!1||!J.isSkinnedMesh&&Ut.skinning===!0||J.isInstancedMesh&&Ut.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ut.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ut.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ut.instancingMorph===!1&&J.morphTexture!==null||Ut.envMap!==Ft||Z.fog===!0&&Ut.fog!==Pt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Vt.numPlanes||Ut.numIntersection!==Vt.numIntersection)||Ut.vertexAlphas!==se||Ut.vertexTangents!==ue||Ut.morphTargets!==Tt||Ut.morphNormals!==be||Ut.morphColors!==Se||Ut.toneMapping!==we||Ut.morphTargetsCount!==Oe||!!Ut.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Ut.__version=Z.version);let Dn=Ut.currentProgram;ge===!0&&(Dn=Fe(Z,G,J),I&&Z.isNodeMaterial&&I.onUpdateProgram(Z,Dn,Ut));let Cn=!1,ii=!1,Ri=!1,xe=Dn.getUniforms(),yt=Ut.uniforms;if(E.useProgram(Dn.program)&&(Cn=!0,ii=!0,Ri=!0),Z.id!==U&&(U=Z.id,ii=!0),Ut.needsLights){let kt=Ls(b.state.lightProbeGridArray,J);Ut.lightProbeGrid!==kt&&(Ut.lightProbeGrid=kt,ii=!0)}if(Cn||X!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xe.setValue(V,"projectionMatrix",C.projectionMatrix),xe.setValue(V,"viewMatrix",C.matrixWorldInverse);let an=xe.map.cameraPosition;an!==void 0&&an.setValue(V,vt.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&xe.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xe.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),X!==C&&(X=C,ii=!0,Ri=!0)}if(Ut.needsLights&&(pn.state.sunShadowMap.length>0&&xe.setValue(V,"sunShadowMap",pn.state.sunShadowMap,et),pn.state.directionalShadowMap.length>0&&xe.setValue(V,"directionalShadowMap",pn.state.directionalShadowMap,et),pn.state.spotShadowMap.length>0&&xe.setValue(V,"spotShadowMap",pn.state.spotShadowMap,et),pn.state.pointShadowMap.length>0&&xe.setValue(V,"pointShadowMap",pn.state.pointShadowMap,et)),J.isSkinnedMesh){xe.setOptional(V,J,"bindMatrix"),xe.setOptional(V,J,"bindMatrixInverse");let kt=J.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),xe.setValue(V,"boneTexture",kt.boneTexture,et))}J.isBatchedMesh&&(xe.setOptional(V,J,"batchingTexture"),xe.setValue(V,"batchingTexture",J._matricesTexture,et),xe.setOptional(V,J,"batchingIdTexture"),xe.setValue(V,"batchingIdTexture",J._indirectTexture,et),xe.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&xe.setValue(V,"batchingColorTexture",J._colorsTexture,et));let oe=K.morphAttributes;if((oe.position!==void 0||oe.normal!==void 0||oe.color!==void 0)&&k.update(J,K,Dn),(ii||Ut.receiveShadow!==J.receiveShadow)&&(Ut.receiveShadow=J.receiveShadow,xe.setValue(V,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(yt.envMapIntensity.value=G.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=Zv()),ii){if(xe.setValue(V,"toneMappingExposure",A.toneMappingExposure),Ut.needsLights&&Ho(yt,Ri),Pt&&Z.fog===!0&&Ht.refreshFogUniforms(yt,Pt),Ht.refreshMaterialUniforms(yt,Z,it,Y,b.state.transmissionRenderTarget[C.id]),Ut.needsLights&&Ut.lightProbeGrid){let kt=Ut.lightProbeGrid;yt.probesSH.value=kt.texture,yt.probesMin.value.copy(kt.boundingBox.min),yt.probesMax.value.copy(kt.boundingBox.max),yt.probesResolution.value.copy(kt.resolution)}mr.upload(V,Pe(Ut),yt,et)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(mr.upload(V,Pe(Ut),yt,et),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xe.setValue(V,"center",J.center),xe.setValue(V,"modelViewMatrix",J.modelViewMatrix),xe.setValue(V,"normalMatrix",J.normalMatrix),xe.setValue(V,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let kt=Z.uniformsGroups;for(let an=0,Mn=kt.length;an<Mn;an++){let Vn=kt[an];ft.update(Vn,Dn),ft.bind(Vn,Dn)}}return Dn}function Ho(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Hn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,G,K){let Z=$.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),$.get(C.texture).__webglTexture=G,$.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){let K=$.get(C);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,K=0){z=C,F=G,O=K;let Z=null,J=!1,Pt=!1;if(C){let Ct=$.get(C);if(Ct.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,Ct.__webglFramebuffer),H.copy(C.viewport),Q.copy(C.scissor),dt=C.scissorTest,E.viewport(H),E.scissor(Q),E.setScissorTest(dt),U=-1;return}else if(Ct.__webglFramebuffer===void 0)et.setupRenderTarget(C);else if(Ct.__hasExternalTextures)et.rebindTextures(C,$.get(C.texture).__webglTexture,$.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let se=C.depthTexture;if(Ct.__boundDepthTexture!==se){if(se!==null&&$.has(se)&&(C.width!==se.image.width||C.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(C)}}let Ot=C.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Pt=!0);let Ft=$.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ft[G])?Z=Ft[G][K]:Z=Ft[G],J=!0):C.samples>0&&et.useMultisampledRTT(C)===!1?Z=$.get(C).__webglMultisampledFramebuffer:Array.isArray(Ft)?Z=Ft[K]:Z=Ft,H.copy(C.viewport),Q.copy(C.scissor),dt=C.scissorTest}else H.copy(wt).multiplyScalar(it).floor(),Q.copy(At).multiplyScalar(it).floor(),dt=j;if(K!==0&&(Z=L),E.bindFramebuffer(V.FRAMEBUFFER,Z)&&E.drawBuffers(C,Z),E.viewport(H),E.scissor(Q),E.setScissorTest(dt),J){let Ct=$.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ct.__webglTexture,K)}else if(Pt){let Ct=G;for(let Ot=0;Ot<C.textures.length;Ot++){let Ft=$.get(C.textures[Ot]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ot,Ft.__webglTexture,K,Ct)}}else if(C!==null&&K!==0){let Ct=$.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ct.__webglTexture,K)}U=-1};function $n(C){let G=$.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=N.textureFormatReadable(C.format),G.__typeReadable=N.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,K,Z,J,Pt,Dt,Ct=0){if(!(C&&C.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=$.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){E.bindFramebuffer(V.FRAMEBUFFER,Ot);try{let Ft=C.textures[Ct],se=Ft.format,ue=Ft.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ct);let Tt=$n(Ft);if(Tt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Z&&K>=0&&K<=C.height-J&&V.readPixels(G,K,Z,J,Et.convert(se),Et.convert(ue),Pt)}finally{let Ft=z!==null?$.get(z).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,G,K,Z,J,Pt,Dt,Ct=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=$.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot)if(G>=0&&G<=C.width-Z&&K>=0&&K<=C.height-J){E.bindFramebuffer(V.FRAMEBUFFER,Ot);let Ft=C.textures[Ct],se=Ft.format,ue=Ft.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ct);let Tt=$n(Ft);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,be),V.bufferData(V.PIXEL_PACK_BUFFER,Pt.byteLength,V.STREAM_READ),V.readPixels(G,K,Z,J,Et.convert(se),Et.convert(ue),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Se=z!==null?$.get(z).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Se);let we=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await df(V,we,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,be),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(be),V.deleteSync(we),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,K=0){let Z=Math.pow(2,-K),J=Math.floor(C.image.width*Z),Pt=Math.floor(C.image.height*Z),Dt=G!==null?G.x:0,Ct=G!==null?G.y:0;et.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,Dt,Ct,J,Pt),E.unbindTexture()},this.copyTextureToTexture=function(C,G,K=null,Z=null,J=0,Pt=0){let Dt,Ct,Ot,Ft,se,ue,Tt,be,Se,we=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(K!==null)Dt=K.max.x-K.min.x,Ct=K.max.y-K.min.y,Ot=K.isBox3?K.max.z-K.min.z:1,Ft=K.min.x,se=K.min.y,ue=K.isBox3?K.min.z:0;else{let yt=Math.pow(2,-J);Dt=Math.floor(we.width*yt),Ct=Math.floor(we.height*yt),C.isDataArrayTexture?Ot=we.depth:C.isData3DTexture?Ot=Math.floor(we.depth*yt):Ot=1,Ft=0,se=0,ue=0}Z!==null?(Tt=Z.x,be=Z.y,Se=Z.z):(Tt=0,be=0,Se=0);let de=Et.convert(G.format),Oe=Et.convert(G.type),Ut;G.isData3DTexture?(et.setTexture3D(G,0),Ut=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(et.setTexture2DArray(G,0),Ut=V.TEXTURE_2D_ARRAY):(et.setTexture2D(G,0),Ut=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let pn=E.getParameter(V.UNPACK_ROW_LENGTH),ge=E.getParameter(V.UNPACK_IMAGE_HEIGHT),Dn=E.getParameter(V.UNPACK_SKIP_PIXELS),Cn=E.getParameter(V.UNPACK_SKIP_ROWS),ii=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,we.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,we.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ft),E.pixelStorei(V.UNPACK_SKIP_ROWS,se),E.pixelStorei(V.UNPACK_SKIP_IMAGES,ue);let Ri=C.isDataArrayTexture||C.isData3DTexture,xe=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){let yt=$.get(C),oe=$.get(G),kt=$.get(yt.__renderTarget),an=$.get(oe.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,kt.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let Mn=0;Mn<Ot;Mn++)Ri&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$.get(C).__webglTexture,J,ue+Mn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$.get(G).__webglTexture,Pt,Se+Mn)),V.blitFramebuffer(Ft,se,Dt,Ct,Tt,be,Dt,Ct,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||$.has(C)){let yt=$.get(C),oe=$.get(G);E.bindFramebuffer(V.READ_FRAMEBUFFER,R),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,D);for(let kt=0;kt<Ot;kt++)Ri?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,yt.__webglTexture,J,ue+kt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yt.__webglTexture,J),xe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,oe.__webglTexture,Pt,Se+kt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,oe.__webglTexture,Pt),J!==0?V.blitFramebuffer(Ft,se,Dt,Ct,Tt,be,Dt,Ct,V.COLOR_BUFFER_BIT,V.NEAREST):xe?V.copyTexSubImage3D(Ut,Pt,Tt,be,Se+kt,Ft,se,Dt,Ct):V.copyTexSubImage2D(Ut,Pt,Tt,be,Ft,se,Dt,Ct);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else xe?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Ut,Pt,Tt,be,Se,Dt,Ct,Ot,de,Oe,we.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(Ut,Pt,Tt,be,Se,Dt,Ct,Ot,de,we.data):V.texSubImage3D(Ut,Pt,Tt,be,Se,Dt,Ct,Ot,de,Oe,we):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pt,Tt,be,Dt,Ct,de,Oe,we.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pt,Tt,be,we.width,we.height,de,we.data):V.texSubImage2D(V.TEXTURE_2D,Pt,Tt,be,Dt,Ct,de,Oe,we);E.pixelStorei(V.UNPACK_ROW_LENGTH,pn),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ge),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Dn),E.pixelStorei(V.UNPACK_SKIP_ROWS,Cn),E.pixelStorei(V.UNPACK_SKIP_IMAGES,ii),Pt===0&&G.generateMipmaps&&V.generateMipmap(Ut),E.unbindTexture()},this.initRenderTarget=function(C){$.get(C).__webglFramebuffer===void 0&&et.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?et.setTextureCube(C,0):C.isData3DTexture?et.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?et.setTexture2DArray(C,0):et.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){F=0,O=0,z=null,E.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Ze=(i,t,e)=>i<t?t:i>e?e:i,Re=(i,t,e)=>i+(t-i)*e,Wl=i=>i*i*(3-2*i),De=(i,t,e)=>{let n=Ze((e-i)/(t-i),0,1);return n*n*(3-2*n)},qf=1337;function Yf(i){qf=i|0}function Jv(i){return i=i^qf|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Zn=(i,t)=>Jv(Math.imul(i|0,73856093)^Math.imul(t|0,19349663));function Yn(i,t=0){let e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return Re(Zn(e,t),Zn(e+1,t),s)}var Xl=(i,t=0)=>Yn(i,t)*.55+Yn(i*2.03,t+7)*.3+Yn(i*4.1,t+13)*.15;function En(i){let t=i>>>0,e=()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}var Gl=new xt,at=i=>(Gl.set(i),[Gl.r,Gl.g,Gl.b]),Zf=(i,t,e)=>[Re(i[0],t[0],e),Re(i[1],t[1],e),Re(i[2],t[2],e)],wn=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];var Ti=["city","sakura","coast","country","mountain","snow"],wo={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Du=1500,Jf=260,us=0,Nu=0;function Kf(i){Nu=Math.max(0,Ti.indexOf(i))}function xr(i){let t=Math.floor(i/Du),e=i-t*Du,n=Wl(Ze((e-(Du-Jf))/Jf,0,1)),s=Ti.length;return{a:Ti[((t+Nu)%s+s)%s],b:Ti[((t+Nu+1)%s+s)%s],t:n}}function Ie(i){let t=xr(i),e={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return e[t.a]+=1-t.t,e[t.b]+=t.t,e}var ke=i=>{let t=xr(i);return t.t<.5?t.a:t.b};function An(i,t){let e=xr(i);return Re(wo[e.a][t],wo[e.b][t],e.t)}var As=650,Rs=375,vr=i=>i*As+Rs;function Ao(i){if(i<300)return!1;for(let t of[-70,0,70]){let e=Ie(i+t);if(Math.max(e.city,e.country)<.9)return!1}return!0}var Uu={x:new Map,r:new Map,t:new Map};function Fu(i,t,e){let n=i.get(t);return n===void 0&&(n=e(),i.set(t,n),i.size>2e3&&i.clear()),n}function _r(i){let t=Math.round((i-Rs)/As);return Fu(Uu.x,t,()=>{let e=vr(t);return Ao(e)?{k:t,s:e}:null})}function $v(i){let t=_r(i);return t?1-De(8,45,Math.abs(i-t.s)):0}var Ro=1150,Zl=820,Co=4.6,Bu=i=>i*Ro+Zl;function Ou(i){if(i<400)return!1;for(let e of[-90,0,90]){let n=Ie(i+e);if(n.country+n.sakura<.9)return!1}let t=_r(i);return!(t&&Math.abs(t.s-i)<170)}function Bi(i){let t=Math.round((i-Zl)/Ro);return Fu(Uu.r,t,()=>{let e=Bu(t);return Ou(e)?{k:t,s:e}:null})}function Kv(i){let t=Bi(i);return t?1-De(30,70,Math.abs(i-t.s)):0}function jv(i){let t=-Co;return i<11?t-1.3:i<16?Re(t-1.3,t+.7,(i-11)/5):i<20?t+.7:i<25.5?Re(t+.7,.35,(i-20)/5.5):.35}var jf=1050,Qf=525,Xe=85,He=125,Qv=24,t_=i=>i*jf+Qf;function e_(i){if(i<300)return!1;for(let t of[-170,0,170]){let e=Ie(i+t);if(Math.max(e.mountain,e.coast)<.95)return!1}return!0}function di(i){let t=Math.round((i-Qf)/jf);return Fu(Uu.t,t,()=>{let e=t_(t);return e_(e)?{k:t,s:e}:null})}function n_(i){let t=di(i);return t?1-De(Xe+20,He+25,Math.abs(i-t.s)):0}var ql=0,Jl=(i,t)=>{let e=i/He;return Qv*(1-e*e)-Math.abs(t)*(t>0?.12:.32)};var Si=2,Yl=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(t){let e=(Yn(t/300,11)-.5)*2+(Yn(t/95,17)-.5)*.35,n=Math.abs(e);return(n<.22?0:Math.sign(e)*(n-.22)/.78)*An(t,"curv")*(1-Math.max($v(t),Kv(t),n_(t)))}elevRaw(t){return An(t,"base")+An(t,"hill")*(Xl(t/380,29)-.5)*2}elev(t){let e=this.elevRaw(t),n=_r(t);if(n){let a=1-De(8,45,Math.abs(t-n.s));a>0&&(e=Re(e,this.elevRaw(n.s),a))}let s=Bi(t);if(s){let a=1-De(30,70,Math.abs(t-s.s));a>0&&(e=Re(e,this.elevRaw(s.s),a))}let r=di(t);if(r){let a=1-De(Xe+10,He+45,Math.abs(t-r.s));a>0&&(e=Re(e,this.elevRaw(r.s),a))}return e}ensure(t){for(;(this.X.length-1)*Si<t+Si;){let e=this.X.length-1,n=e*Si,s=this.curv(n+Si/2)*Si,r=this.H[e];this.X.push(this.X[e]+Math.sin(r+s/2)*Si),this.Z.push(this.Z[e]+Math.cos(r+s/2)*Si),this.H.push(r+s),this.Y.push(this.elev(n+Si))}}at(t,e={}){t=Math.max(0,t),this.ensure(t+Si);let n=t/Si,s=Math.floor(n),r=n-s;e.x=Re(this.X[s],this.X[s+1],r),e.z=Re(this.Z[s],this.Z[s+1],r),e.y=Re(this.Y[s],this.Y[s+1],r),e.h=Re(this.H[s],this.H[s+1],r);let a=Math.sin(e.h),l=Math.cos(e.h);return e.fx=a,e.fz=l,e.rx=-l,e.rz=a,e}};function $f(i,t,e,n,s){let r=Math.abs(e);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+De(45,190,r)*16*(.45+.55*Yn(t/160+(e>0?50:0),3));case"coast":{if(e>0)return r<s+.9?-.06:-.15+De(s+1.5,80,r)*24*(.5+.5*Yn(t/170,5))+De(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?Re(1.25,-1.6,a/26):Re(-1.6,-7,Ze((a-26)/20,0,1)))-n}case"mountain":{if(e>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Yn(t/140,61),o=r-(s+1);return o<l?o:Math.min(l+(o-l)*.55,70)}if(r<s+1.2)return-.06;let a=r-(s+1.2);return a<32?-a*1.1:-35.2+De(105,230,r)*95*(.6+.4*Yn(t/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Re(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Yn(t/40+(e>0?3:0),71)-.5):.55+De(125,210,r)*40*(.45+.55*Yn(t/230+(e>0?11:0),73));case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+De(135,215,r)*36*(.4+.6*Yn(t/210+(e>0?9:0),7))}}function yr(i,t,e,n){let s=xr(i),r=$f(s.a,i,t,e,n),a=s.t>0?Re(r,$f(s.b,i,t,e,n),s.t):r;ql=0;let l=Bi(i);if(l){let g=Math.abs(i-l.s);if(g>=36)return a;let x=g<29?jv(g):Re(.35,a,De(29,36,g));return Math.abs(t)<n+3.2&&(x=Math.min(x,-.08)),x}let o=di(i);if(!o)return a;let u=i-o.s,c=Math.abs(u);if(c>=2*He)return a;let h=Math.abs(t),f=Jl(u,t),p;return c<Xe?p=h<=n+1.46?-.25:Math.max(a,f):p=Math.max(a,Math.min(f,h<n+1?-.06:h-(n+1))),ql=Math.max(0,p-a),p}function td(i){let t=Bi(i);return t?1-De(27,34,Math.abs(i-t.s)):0}var Po=new B,$l=new B,i_=[1,1,1],rn=class{constructor({uv:t=!1,color:e=!0}={}){this.hasUV=t,this.hasColor=e,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new qt,this.nm=new ne,this.e=this.m.elements,this.ne=this.nm.elements}grow(t){let e=Math.max(this.cap*2,t,512),n=this.n,s=new Float32Array(e*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(e*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let a=new Float32Array(e*2);this.U&&a.set(this.U.subarray(0,n*2)),this.U=a}if(this.hasColor){let a=new Uint8Array(e*3);this.Cl&&a.set(this.Cl.subarray(0,n*3)),this.Cl=a}this.cap=e}get count(){return this.n}setM(t){return this.m.copy(t),this.nm.getNormalMatrix(t),this}vtx(t,e,n,s,r,a,l,o,u){this.n>=this.cap&&this.grow(this.n+1);let c=this.e,h=this.ne,f=this.n*3,p=this.P,g=this.bb,x=c[0]*t+c[4]*e+c[8]*n+c[12],m=c[1]*t+c[5]*e+c[9]*n+c[13],d=c[2]*t+c[6]*e+c[10]*n+c[14];p[f]=x,p[f+1]=m,p[f+2]=d,x<g[0]&&(g[0]=x),m<g[1]&&(g[1]=m),d<g[2]&&(g[2]=d),x>g[3]&&(g[3]=x),m>g[4]&&(g[4]=m),d>g[5]&&(g[5]=d);let v=h[0]*s+h[3]*r+h[6]*a,S=h[1]*s+h[4]*r+h[7]*a,_=h[2]*s+h[5]*r+h[8]*a,y=127/(Math.sqrt(v*v+S*S+_*_)||1);if(this.N[f]=Math.round(v*y),this.N[f+1]=Math.round(S*y),this.N[f+2]=Math.round(_*y),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=o),this.hasColor){let b=u||i_,w=this.Cl;w[f]=b[0]>=1?255:b[0]<=0?0:b[0]*255+.5,w[f+1]=b[1]>=1?255:b[1]<=0?0:b[1]*255+.5,w[f+2]=b[2]>=1?255:b[2]<=0?0:b[2]*255+.5}this.n++}quad(t,e,n,s,r,a){Po.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),$l.set(s[0]-t[0],s[1]-t[1],s[2]-t[2]),$l.lengthSq()<1e-12&&$l.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),Po.cross($l).normalize();let l=Po.x,o=Po.y,u=Po.z,c=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,p=a?a.v1:1;this.vtx(t[0],t[1],t[2],l,o,u,c,f,r),this.vtx(e[0],e[1],e[2],l,o,u,h,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(t[0],t[1],t[2],l,o,u,c,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(s[0],s[1],s[2],l,o,u,c,p,r)}box(t,e,n,s,r,a,l,o=null,u=null){let c=o||{},h=u||{};this.quad([s,e,n],[t,e,n],[t,r,n],[s,r,n],h.nz||l,c.nz),this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],h.pz||l,c.pz),this.quad([t,e,n],[t,e,a],[t,r,a],[t,r,n],h.nx||l,c.nx),this.quad([s,e,a],[s,e,n],[s,r,n],[s,r,a],h.px||l,c.px),this.quad([t,r,a],[s,r,a],[s,r,n],[t,r,n],h.py||l,c.py),u&&u.noBottom||this.quad([t,e,n],[s,e,n],[s,e,a],[t,e,a],h.ny||l,c.ny)}cyl(t,e,n,s,r,a,l,o,u=!0){let c=(s-r)/a;for(let h=0;h<l;h++){let f=h/l*Math.PI*2,p=(h+1)/l*Math.PI*2,g=Math.cos(f),x=Math.sin(f),m=Math.cos(p),d=Math.sin(p),v=[t+g*s,e,n+x*s],S=[t+m*s,e,n+d*s],_=[t+m*r,e+a,n+d*r],y=[t+g*r,e+a,n+x*r];this.vtx(v[0],v[1],v[2],g,c,x,0,0,o),this.vtx(y[0],y[1],y[2],g,c,x,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(v[0],v[1],v[2],g,c,x,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(S[0],S[1],S[2],m,c,d,0,0,o),u&&r>.001&&(this.vtx(t,e+a,n,0,1,0,0,0,o),this.vtx(_[0],_[1],_[2],0,1,0,0,0,o),this.vtx(y[0],y[1],y[2],0,1,0,0,0,o))}}rod(t,e,n,s,r,a){let l=e[0]-t[0],o=e[1]-t[1],u=e[2]-t[2],c=Math.hypot(l,o,u);l/=c,o/=c,u/=c;let h=0,f=1,p=0;Math.abs(o)>.99&&(h=1,f=0);let g=o*p-u*f,x=u*h-l*p,m=l*f-o*h,d=Math.hypot(g,x,m);g/=d,x/=d,m/=d;let v=x*u-m*o,S=m*l-g*u,_=g*o-x*l;for(let y=0;y<r;y++){let b=y/r*Math.PI*2,w=(y+1)/r*Math.PI*2,M=Math.cos(b),T=Math.sin(b),A=Math.cos(w),P=Math.sin(w),I=g*M+v*T,L=x*M+S*T,R=m*M+_*T,D=g*A+v*P,F=x*A+S*P,O=m*A+_*P,z=[t[0]+I*n,t[1]+L*n,t[2]+R*n],U=[t[0]+D*n,t[1]+F*n,t[2]+O*n],X=[e[0]+D*s,e[1]+F*s,e[2]+O*s],H=[e[0]+I*s,e[1]+L*s,e[2]+R*s];this.vtx(z[0],z[1],z[2],I,L,R,0,0,a),this.vtx(U[0],U[1],U[2],D,F,O,0,0,a),this.vtx(X[0],X[1],X[2],D,F,O,0,0,a),this.vtx(z[0],z[1],z[2],I,L,R,0,0,a),this.vtx(X[0],X[1],X[2],D,F,O,0,0,a),this.vtx(H[0],H[1],H[2],I,L,R,0,0,a)}return c}blob(t,e,n,s,r,a,l=0,o=1){let u=ed[l%ed.length],c=u.attributes.position.array,h=u.attributes.normal.array,f=u.userData.disp;for(let p=0;p<c.length;p+=3){let g=1+f[p/3],x=Math.max(0,Math.min(1,h[p+1]*.5+.5)),m=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(t+c[p]*s*g,e+c[p+1]*s*g*o,n+c[p+2]*s*g,h[p],h[p+1],h[p+2],0,0,m)}}wire(t,e,n,s,r,a=10){let l=t;for(let o=1;o<=a;o++){let u=o/a,c=[t[0]+(e[0]-t[0])*u,t[1]+(e[1]-t[1])*u-n*4*u*(1-u),t[2]+(e[2]-t[2])*u];this.rod(l,c,s,s,3,r),l=c}}card(t,e,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,l,o]of r)this.vtx(t[a][0],t[a][1],t[a][2],e[a][0],e[a][1],e[a][2],l,o,s[a])}toArrays(){let t=this.n;return{n:t,P:this.P?this.P.slice(0,t*3):new Float32Array(0),N:this.N?this.N.slice(0,t*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,t*3):null,U:this.hasUV&&this.U?this.U.slice(0,t*2):null}}stamp(t,e){if(!t||!t.n)return;this.setM(e),this.n+t.n>this.cap&&this.grow(this.n+t.n);let n=this.e,s=this.ne,r=t.P,a=t.N,l=t.C,o=t.U,u=this.n,c=this.bb;for(let h=0;h<t.n*3;h+=3){let f=r[h],p=r[h+1],g=r[h+2],x=u*3+h,m=n[0]*f+n[4]*p+n[8]*g+n[12],d=n[1]*f+n[5]*p+n[9]*g+n[13],v=n[2]*f+n[6]*p+n[10]*g+n[14];this.P[x]=m,this.P[x+1]=d,this.P[x+2]=v,m<c[0]&&(c[0]=m),d<c[1]&&(c[1]=d),v<c[2]&&(c[2]=v),m>c[3]&&(c[3]=m),d>c[4]&&(c[4]=d),v>c[5]&&(c[5]=v);let S=a[h],_=a[h+1],y=a[h+2],b=s[0]*S+s[3]*_+s[6]*y,w=s[1]*S+s[4]*_+s[7]*y,M=s[2]*S+s[5]*_+s[8]*y,T=127/(Math.sqrt(b*b+w*w+M*M)||1);this.N[x]=Math.round(b*T),this.N[x+1]=Math.round(w*T),this.N[x+2]=Math.round(M*T)}this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+t.n)*3)),this.hasUV&&(o?this.U.set(o,u*2):this.U.fill(0,u*2,(u+t.n)*2)),this.n+=t.n}build(){if(!this.n)return null;let t=new _e,e=this.n,n=this.bb;return t.setAttribute("position",new We(this.P.slice(0,e*3),3)),t.setAttribute("normal",new We(this.N.slice(0,e*3),3,!0)),this.hasUV&&t.setAttribute("uv",new We(this.U.slice(0,e*2),2)),this.hasColor&&t.setAttribute("color",new We(this.Cl.slice(0,e*3),3,!0)),t.boundingBox=new jn(new B(n[0],n[1],n[2]),new B(n[3],n[4],n[5])),t.boundingSphere=t.boundingBox.getBoundingSphere(new Qn),t}},ed=[0,1,2,3].map(i=>{let t=new ro(1,1),e=t.attributes.position.array,n=new Float32Array(e.length/3),s=(r,a,l)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<e.length;r+=3)n[r/3]=s(e[r],e[r+1],e[r+2])*.14;return t.userData.disp=n,t});ie.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var s_=ie.shadowmap_pars_fragment;function zu(i){let t=n=>`texture( shadowMap, vec3( shadowCoord.xy${n}, shadowCoord.z ) )`,e=i>=4?`vec2 so = texelSize * 0.5;
shadow = 0.25 * ( ${t(" - so")} + ${t(" + so")} + ${t(" + vec2( so.x, -so.y )")} + ${t(" + vec2( -so.x, so.y )")} );`:`shadow = ${t("")};`;ie.shadowmap_pars_fragment=s_.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,e)}zu(1);ie.lights_fragment_begin=ie.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
	directionalLight = directionalLights[ 0 ];
	getDirectionalLightInfo( directionalLight, directLight );
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	if ( directLight.visible && receiveShadow ) {
		directionalLightShadow = directionalLightShadows[ 0 ];
		float sh = getShadow( directionalShadowMap[ 0 ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ 0 ] );
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var hs=4200,le={uSkyHor:{value:new xt(.7,.8,.9)},uSkyZen:{value:new xt(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uCloudSh:{value:0},uOrigin:{value:new Gt},uSunDir:{value:new B(0,1,0)},uSunCol:{value:new xt(1,1,1)},uTuftV:{value:new Gt(0,.333)},uTunA:{value:new B(0,-1e4,0)},uTunB:{value:new B(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new B},uCarFwd:{value:new B(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:r_()}};function rd(i){let t=new ts(new Uint8Array(i),i.length,1,fr);return t.minFilter=t.magFilter=$e,t.generateMipmaps=!1,t.needsUpdate=!0,t}var ei=rd([16,16,16,70,200,255,255,255]),nd=rd([28,40,70,130,200,240,255,255]);function r_(){let t=new Uint8Array(262144),e=2654435769,n=()=>{e=e+1831565813|0;let r=Math.imul(e^e>>>15,1|e);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<t.length;r++)t[r]=Math.floor(n()*256);let s=new ts(t,256,256,zn);return s.wrapS=s.wrapT=$s,s.magFilter=Ye,s.minFilter=Bn,s.generateMipmaps=!0,s.colorSpace=fi,s.needsUpdate=!0,s}var Oi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,o_=`
uniform vec2 uOrigin; uniform float uCloudSh;
float cloudShadow(vec2 xz){
  vec2 p = (xz + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
  return smoothstep(0.47, 0.58, fbm2(p)) * uCloudSh;
}`,a_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,l_=`
uniform sampler2D uNoiseTex; uniform vec2 uOrigin; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){
  vec2 p = (xz + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
  float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vnoiseV(p); p = p * 2.03 + 17.1; a *= 0.5; }
  return smoothstep(0.47, 0.58, s) * uCloudSh;
}`,c_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,u_=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,h_=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`;function Mr(i,t="",e="",n=!0){i.uniforms.uOrigin=le.uOrigin,i.uniforms.uCloudSh=le.uCloudSh,i.uniforms.uTime=le.uTime,i.uniforms.uNoiseTex=le.uNoiseTex;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=le[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?l_:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Oi}${o_}${u_}${t}`).replace("#include <opaque_fragment>",`${n?c_:a_}${e}${h_}
#include <opaque_fragment>`)}var f_=`
vec3 roadCol(float s, float u, float rw){
  float a = abs(u); vec2 p = vec2(s, u);
  vec3 c = L(vec3(0.63, 0.62, 0.61));
  c *= 0.90 + 0.14*fbm2(p*0.45) + 0.10*(hash12(floor(p*22.0)) - 0.5);
  float d1 = (abs(u + 1.6) - 0.75) / 0.22, d2 = (abs(u - 1.6) - 0.75) / 0.22; // (pow() of a negative base is NaN on many mobile GPUs)
  float tr = exp(-d1 * d1) + exp(-d2 * d2);
  c *= 1.0 - 0.08*tr;
  vec2 pc = vec2(s/9.0, (u + rw)/2.3); vec2 pf = fract(pc);
  if (hash12(floor(pc) + 3.7) > 0.88 && pf.x > 0.12 && pf.x < 0.82 && pf.y > 0.1 && pf.y < 0.9) c *= 0.85;
  float cr = abs(vnoise(p*vec2(0.7, 1.3)) - 0.5);
  c *= 1.0 - 0.2*(1.0 - smoothstep(0.0, 0.025, cr))*step(0.62, vnoise(p*0.11 + 4.0));
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
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  vec3 g = mix(L(vec3(0.42, 0.64, 0.28)), L(vec3(0.62, 0.77, 0.36)), fbm2(p*0.08)) * (0.9 + 0.15*vnoise(p*1.7));
  float pet = smoothstep(0.7, 0.8, vnoise(p*3.3)) * (1.0 - 0.6*smoothstep(rw + 6.0, rw + 20.0, abs(u)));
  return mix(g, L(vec3(1.0, 0.83, 0.89)), pet*0.85);
}
vec3 coastGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (u > 0.0) return mix(L(vec3(0.38, 0.58, 0.25)), L(vec3(0.60, 0.72, 0.34)), fbm2(p*0.05)) * (0.9 + 0.15*vnoise(p*1.3));
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
    float rows = smoothstep(0.30, 0.48, abs(fract(pu/0.33) - 0.5));
    vec3 field = mix(L(vec3(0.47, 0.66, 0.24)), L(vec3(0.62, 0.76, 0.32)), h) * (0.88 + 0.14*rows);
    vec3 water = mix(uSkyHor, L(vec3(0.55, 0.68, 0.75)), 0.3);
    if (h < 0.28) { field = mix(water, field, rows*0.5); gWater = 1.0 - rows * 0.5; }
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
`,d_=`
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
  float fr = 0.4 + 0.6 * pow(1.0 - clamp(-V.y, 0.0, 1.0), 3.0);
  outgoingLight = mix(outgoingLight, sky, clamp(gWater * fr, 0.0, 0.9));
}
#endif`,p_=`
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
  outgoingLight = mix(outgoingLight * (1.0 - 0.38 * uWet * hard), refl, k) + ring * 0.1 * uWet * (refl + 0.05);
  outgoingLight *= 1.0 - 0.12 * uWet * (1.0 - hard);
}`,od={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function ad(i){let t={};for(let e of i)t[od[e]]="";return(i.includes("city")||i.includes("country"))&&(t.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(t.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(t.K_RIDGE=""),t}var id=new Map;function Io(i){let t=[...new Set(i)].sort().join("+"),e=id.get(t);return e||(e=ld(ad(t.split("+")),t),id.set(t,e)),e}function ld(i=ad(Object.keys(od)),t="all"){let e=new un({color:16777215,gradientMap:ei});return e.defines=i,e.onBeforeCompile=n=>{n.uniforms.uSkyHor=le.uSkyHor,n.uniforms.uSkyZen=le.uSkyZen,n.uniforms.uWet=le.uWet,n.uniforms.uNight=le.uNight,n.uniforms.uSunDir=le.uSunDir,n.uniforms.uSunCol=le.uSunCol,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),Mr(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${f_}`,p_+d_,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},e.customProgramCacheKey=()=>"ground-v15-"+t,e}function sd(i,t,e,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),Mr(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-e/2).toFixed(3)} + ${e.toFixed(3)} * vnoise(vWP.xz * ${t.toFixed(2)} + vWP.y * ${(t*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}var m_=0;function br(i){let t="cs"+ ++m_;return i.onBeforeCompile=e=>Mr(e),i.customProgramCacheKey=()=>t,i}function cd(i,t){let e={};e.ground=ld(),e.color=sd(new un({vertexColors:!0,gradientMap:ei}),1.6,.1,"color-v2"),e.atlas=new un({vertexColors:!0,gradientMap:ei,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),e.atlas.onBeforeCompile=l=>Mr(l),e.atlas.customProgramCacheKey=()=>"atlas-v2",e.foliage=sd(new un({vertexColors:!0,gradientMap:nd}),2.6,.24,"foliage-v2"),e.lamp=new je({color:15789798}),e.sig=new je({color:new xt(.15,1.7,1.1)}),e.sodium=new je({color:new xt(5,2.3,.65)}),e.decal=new un({vertexColors:!0,gradientMap:ei,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),e.decal.onBeforeCompile=l=>Mr(l),e.decal.customProgramCacheKey=()=>"decal-v1",t&&(e.leaf=new un({map:t,vertexColors:!0,gradientMap:nd,alphaTest:.42,side:hn}),e.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",ie.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),Mr(l),l.uniforms.uTuftV=le.uTuftV,l.uniforms.uWind=le.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},e.leaf.customProgramCacheKey=()=>"leaf-v3"),e.wire=new je({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new Xn(n);return e.pool=new je({map:a,color:16762746,transparent:!0,opacity:0,blending:Fi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e.glowTex=a,e}var g_=at("#f2c230"),ud=at("#26272c");function Kl(i,t){let e=[];for(let n of[-1,1]){let s=t+n*4.9,r=i.at(s,{}),a=An(s,"rw"),l=n*(a+.8),o=Ie(s),u=o.city+o.sakura>.5;e.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return e}function hd(){let i=new Ge,t=br(new un({vertexColors:!0,gradientMap:ei})),e=new je({color:new xt(6,.45,.3)}),n=new je({color:new xt(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Ge,a=new Ge;r.add(a),a.position.set(-.42,1.02,-.02);let l=new rn,o=3.6;for(let h=0,f=0;f<o;h++,f+=.45)l.box(-Math.min(f+.45,o),-.065,-.065,-f,.065,.065,h%2?ud:g_);l.box(0,-.09,-.07,.38,.09,.07,ud);let u=new pe(l.build(),t);u.castShadow=!0,a.add(u);let c=[-.28,.28].map(h=>{let f=new pe(new so(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:u,lamps:c,L:o}});return i.visible=!1,{group:i,update(r,a,l,o,u){i.visible=!!r,r&&r.forEach((c,h)=>{let f=s[h];f.root.position.set(c.x-a.x,c.y,c.z-a.z),f.root.rotation.y=c.yaw,f.arm.scale.x=(c.rw+.25)/f.L,f.pivot.rotation.z=-l*(Math.PI/2-.06);let p=Math.floor(u*2.5)%2;f.lamps[0].material=o&&p===0?e:n,f.lamps[1].material=o&&p===1?e:n})}}}function x_(){let e=()=>{let d=document.createElement("canvas");return d.width=1024,d.height=512,d},n=e(),s=e(),r=n.getContext("2d"),a=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let o=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,o);for(let d=0;d<1024;d+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(d,0,2,o);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,o-14,1024,14);let u=[.1,.36,.62,.88].map(d=>d*1024),c=(d,v,S,_)=>{let y=r.createLinearGradient(d,v,d+S*.3,v+_);y.addColorStop(0,"#5d7fae"),y.addColorStop(.6,"#9db7d6"),y.addColorStop(1,"#2f3f55"),r.fillStyle=y,r.fillRect(d,v,S,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(d+S*.2,v),r.lineTo(d+S*.38,v),r.lineTo(d+S*.1,v+_),r.lineTo(d-S*.08,v+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(d,v,S,_)};for(let d=0;d<u.length-1;d++){let v=u[d]+40,S=u[d+1]-40,_=3,y=(S-v)/_;for(let b=0;b<_;b++)r.fillStyle="#6b737c",r.fillRect(v+b*y+2,34,y-4,58),c(v+b*y+6,38,y-12,50)}for(let d of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(d+2,34,28,58),c(d+5,38,22,50);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,22,60,o-36),r.fillStyle="#7b828a",r.fillRect(d-1,22,2,o-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(d-30,22,60,o-36),c(d-24,34,20,46),c(d+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let h=0,f=176,p=256,g=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,p,g),r.fillStyle="#20262e",r.fillRect(h+14,f+44,p-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+p/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,p-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,p,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,p,7);for(let d of[h+40,h+p-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(d,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(d+(d<h+p/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+g-30,p,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",h+p/2,f+220),a.fillStyle="#111",a.fillRect(h,f,p,g),a.fillStyle="#ff9a2a",a.font=`800 18px ${l}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26);for(let d of[h+40,h+p-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(d,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=d=>{let v=new Xn(d);return v.colorSpace=ze,v.anisotropy=4,v},m=(d,v,S,_)=>({u0:d/1024,u1:(d+S)/1024,v0:1-(v+_)/512,v1:1-v/512});return{map:x(n),em:x(s),side:m(0,0,1024,o),sideR:{...m(0,0,1024,o),flip:!0},front:m(h,f,p,g),plain:m(342,202,28,28)}}function fd(){let i=x_(),t=br(new un({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:ei})),e=new rn({uv:!0}),n=[1,1,1],s=at("#9aa1a9"),r=at("#3b4047"),a=at("#2a2d33"),l=19.5,o=.6,u=3,c=1.45,h=.95,f=4,p=u*l+(u-1)*o;for(let v=0;v<u;v++){let S=-p/2+l/2+v*(l+o),_=S-l/2,y=S+l/2;e.quad([_,h,c],[y,h,c],[y,f,c],[_,f,c],n,i.side),e.quad([y,h,-c],[_,h,-c],[_,f,-c],[y,f,-c],n,i.side);let b=v===u-1,w=v===0;e.quad([y,h,c],[y,h,-c],[y,f,-c],[y,f,c],b?n:at("#c9ced4"),b?i.front:i.plain),e.quad([_,h,-c],[_,h,c],[_,f,c],[_,f,-c],w?n:at("#c9ced4"),w?i.front:i.plain),e.box(_+.1,f,-c+.1,y-.1,f+.14,c-.1,s,null,{noBottom:!0});for(let M of[S-5.5,S+5.5])e.box(M-1.3,f+.14,-.8,M+1.3,f+.55,.8,at("#c4c9cf"),null,{noBottom:!0});e.box(_+2,.45,-c+.25,y-2,h,c-.25,a);for(let M of[S-7,S+7])e.box(M-1.3,.1,-1.2,M+1.3,.75,1.2,r);if(v===0){let M=S-3,T=f+.55;e.box(M-.6,f+.14,-.6,M+.6,f+.3,.6,r),e.rod([M-.5,f+.3,0],[M,T+.9,0],.03,.03,4,r),e.rod([M+.5,f+.3,0],[M,T+.9,0],.03,.03,4,r),e.rod([M,T+.9,-.85],[M,T+.9,.85],.03,.03,4,r)}}let g=new pe(e.build(),t);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let x=new Ge;x.add(g),x.visible=!1;let m={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:p},d={};return{group:x,st:m,start(v,S,_=16){Object.assign(m,{active:!0,sx:v,dir:S,speed:_,u:-S*290,ds:S>0?-2:2,cleared:!1}),x.visible=!0},update(v,S,_,y,b){if(!m.active)return;m.u+=m.dir*m.speed*v;let w=m.u-m.dir*m.length/2;if(!m.cleared&&(m.dir>0?w>b+1:w<-b-1)&&(m.cleared=!0),Math.abs(m.u)>330){m.active=!1,x.visible=!1;return}S.at(m.sx,d),x.position.set(d.x+d.fx*m.ds+d.rx*m.u-_.x,d.y+.34,d.z+d.fz*m.ds+d.rz*m.u-_.z),x.rotation.y=d.h+(m.dir>0?Math.PI:0),t.emissiveIntensity=.3+y*1.1}}}var v_='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Cs=2048,Ps=4096;function tc(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var gd=tc(256,256);{let i=gd.getContext("2d"),t=i.createImageData(256,256),e=En(7);for(let n=0;n<t.data.length;n+=4){let s=128+(e()-.5)*120+(e()<.02?-60:0);t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}var ku=class{constructor(){this.cA=tc(Cs,Ps),this.cE=tc(Cs/2,Ps/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Cs/2,Ps/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Cs,Ps),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(gd,"repeat")}add(t,e,n,s){if(this.x+e+4>Cs&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Ps)throw new Error("atlas full at "+t);let a={x:this.x,y:this.y,w:e,h:n};this.x+=e+4,this.rowH=Math.max(this.rowH,n);for(let o of[this.a,this.e])o.save(),o===this.e&&o.scale(.5,.5),o.translate(a.x,a.y),o.beginPath(),o.rect(0,0,e,n),o.clip();s(this.a,this.e,e,n),this.a.restore(),this.e.restore();let l=.5;return this.cells[t]={u0:(a.x+l)/Cs,u1:(a.x+e-l)/Cs,v0:1-(a.y+n-l)/Ps,v1:1-(a.y+l)/Ps,w:e,h:n},this.cells[t]}uv(t){let e=this.cells[t];if(!e)throw new Error("no atlas cell "+t);return e}has(t){return!!this.cells[t]}textures(t){let e=n=>{let s=new Xn(n);return s.colorSpace=ze,s.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),s.minFilter=Bn,s.generateMipmaps=!0,s};return{map:e(this.cA),emissive:e(this.cE)}}};function xn(i,t,e,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=t.grain,i.fillRect(0,0,e,n),i.restore()}function ec(i,t,e,n,s,r){let a=i.createLinearGradient(0,e,0,e+s);r.forEach(([l,o])=>a.addColorStop(l,o)),i.fillStyle=a,i.fillRect(t,e,n,s)}function Sr(i,t,e,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,e,n),ec(i,0,0,e,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,e,1.5)}xn(i,t,e,n,.13)}function zi(i,t,e,n,s,r=.13){let a=i.createLinearGradient(0,e,0,e+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(t,e,n,s)}function ut(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t,e,n,s)}function Tr(i,t,e,n,s,r,a="#d9dde2",l="rgba(40,45,60,0.55)"){ut(i,t-r,e-r,n+2*r,s+2*r,a),ut(i,t-r,e+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(t-r+.5,e-r+.5,n+2*r-1,s+2*r-1)}function ki(i,t,e,n,s,r,a=0){let l=i.createLinearGradient(t,e,t+n*.35,e+s),o=a?"#4f78b8":"#5f93d6",u=a?"#86a9d4":"#a6c8ec";l.addColorStop(0,o),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(t,e,n,s),i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(t+n*(.2+r()*.6),e+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let c=t+n*r();i.beginPath(),i.moveTo(c,e),i.lineTo(c+n*.18,e),i.lineTo(c-n*.25,e+s),i.lineTo(c-n*.43,e+s),i.fill(),i.restore()}function dd(i,t,e,n,s,r="#efe6d2"){ut(i,t,e,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(t+a,e,1.5,s);ec(i,t,e,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function nc(i,t,e=800){i.font=`${e} ${t}px ${v_}`}function Te(i,t,e,n,s,r,a,l=800,o=null){nc(i,r,l);let u=r;for(;i.measureText(t).width>s&&u>6;)u-=1,nc(i,u,l);i.textAlign="center",i.textBaseline="middle",o&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=o,i.lineJoin="round",i.strokeText(t,e,n)),i.fillStyle=a,i.fillText(t,e,n)}function jl(i,t,e,n,s,r,a,l=800,o=null){let u=[...t],c=u.length,h=Math.min(r*1.05,(s-n)/c),f=Math.min(r,h*.95);nc(i,f,l),i.textAlign="center",i.textBaseline="middle",u.forEach((p,g)=>{let x=n+(s-n-h*c)/2+h*(g+.5);o&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=o,i.strokeText(p,e,x)),i.fillStyle=a,i.fillText(p,e,x)})}function Lo(i,t,e,n,s,r,a){i.save(),i.shadowColor=r,i.shadowBlur=a,ut(i,t,e,n,s,r),i.restore()}var pd=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Ql=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],md=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],__=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function xd(){let i=new ku,t=En(2024),e=240,n=(o,u,c,h,f,p)=>{Sr(o,i,c,h,"#ece8e0",0);let g=En(p*31+(f?7:0)+5);if(p===0){let x=c*.14,m=h*.22,d=c*.72,v=h*.5;Tr(o,x,m,d,v,5),ki(o,x,m,d/2,v,g),ki(o,x+d/2,m,d/2,v,g),g()<.8&&dd(o,x+2,m+2,d*(.18+g()*.25),v-4,g()<.5?"#efe6d2":"#d9e4ea"),ut(o,x+d/2-2,m,4,v,"#cfd4da"),ut(o,x-8,m+v+5,d+16,6,"#d8d8d4"),zi(o,x-4,m+v+11,8,60),zi(o,x+d-4,m+v+11,8,60),f&&(Lo(u,x,m,d,v,"#ffcf8f",0),u.fillStyle="rgba(255,240,210,0.85)",u.fillRect(x+2,m+2,d*.3,v-4))}else if(p===1){for(let x of[.12,.56]){let m=c*x,d=h*.28,v=c*.3,S=h*.36;Tr(o,m,d,v,S,4),ki(o,m,d,v,S,g,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(m,d,v,S*.45),zi(o,m,d+S+6,v,40,.1),f&&g()<.8&&Lo(u,m,d,v,S,g()<.5?"#ffd9a0":"#e8f0ff",0)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(c*.88,h*.2,9,0,7),o.fill()}else if(p===2){let x=c*.1,m=h*.12,d=c*.8,v=h*.84;Tr(o,x,m,d,v,4),ki(o,x,m,d/2,v,g),ki(o,x+d/2,m,d/2,v,g),dd(o,x+2,m+2,d*(.2+g()*.3),v-4,t.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),ut(o,x+d/2-2,m,4,v,"#cfd4da"),f&&(Lo(u,x,m,d,v,"#ffcb85",0),u.fillStyle="rgba(255,236,200,0.9)",u.fillRect(x+2,m+2,d*.35,v-4))}else if(p===3){Sr(o,i,c,h,"#dfe3e6",0);let x=h*.25,m=h*.55;ki(o,0,x,c,m,g,1);for(let d=0;d<=c;d+=c/4)ut(o,d-2,x,4,m,"#8d98a6");if(ut(o,0,x-4,c,4,"#8d98a6"),ut(o,0,x+m,c,5,"#7d8796"),f)for(let d=0;d<4;d++)g()<.7&&(u.fillStyle=g()<.6?"#f2f6ff":"#ffe2b0",u.fillRect(d*c/4+2,x,c/4-4,m))}else if(p===4){o.fillStyle="#6b4a35",o.fillRect(0,0,c,h);for(let S=0;S<h;S+=12)ut(o,0,S,c,2,"rgba(30,18,10,0.35)"),ut(o,0,S+2,c,1,"rgba(255,220,180,0.06)");xn(o,i,c,h,.15);let x=c*.18,m=h*.25,d=c*.64,v=h*.45;ut(o,x-6,m-6,d+12,v+12,"#4a3020"),ut(o,x,m,d,v,"#efe4c8"),o.fillStyle="#5a3a26";for(let S=1;S<6;S++)o.fillRect(x+S*d/6-1.5,m,3,v);for(let S=1;S<3;S++)o.fillRect(x,m+S*v/3-1.5,d,3);if(f){u.fillStyle="#ffc070",u.fillRect(x,m,d,v),u.fillStyle="#000";for(let S=1;S<6;S++)u.fillRect(x+S*d/6-1.5,m,3,v)}}else if(p===5){ut(o,c*.08,0,7,h,"#bdbdb6"),ut(o,c*.08+5,0,2,h,"rgba(0,0,0,0.2)");let x=c*.55,m=h*.3,d=c*.22,v=h*.24;Tr(o,x,m,d,v,3),ut(o,x,m,d,v,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(x,m,d,v/2),zi(o,x,m+v+4,d,50,.12),ut(o,c*.22,h*.55,26,34,"#cfcfca"),ut(o,c*.22+4,h*.55+6,18,12,"#9aa2a8"),f&&Lo(u,x,m,d,v,"#fff0d8",0)}else if(p===6){let x=c*.4,m=h*.35,d=c*.2,v=h*.28;Tr(o,x,m,d,v,3),ki(o,x,m,d,v,g,1),zi(o,x,m+v+4,d,70,.14),f&&Lo(u,x,m,d,v,"#ffd9a0",0)}};for(let o=0;o<7;o++)i.add("win"+o,e,e,(u,c,h,f)=>n(u,c,h,f,!1,o)),i.add("win"+o+"L",e,e,(u,c,h,f)=>n(u,c,h,f,!0,o));i.add("plain",e,e,(o,u,c,h)=>{Sr(o,i,c,h,"#ece8e0"),zi(o,c*.3,0,12,h*.6,.06)}),i.add("concrete",e,e,(o,u,c,h)=>{Sr(o,i,c,h,"#d9d7d0",60);for(let f=0;f<6;f++)zi(o,f*41%c,0,10,h*.5,.07)});let s=288,r=(o,u,c,h,f,p)=>{let g=En(p);if(Sr(o,i,c,h,"#e6e2da"),f==="glass"||f==="door"||f==="konbini"||f==="cafe"){let m=h*.22,d=c-12,v=h*.78-4;ut(o,6,m,d,v,f==="konbini"?"#f6f4ea":f==="cafe"?"#7a5a40":"#8a7a68");for(let y=m+v*.25;y<m+v;y+=v*.22){ut(o,6,y,d,3,"rgba(60,50,40,0.5)");for(let b=9;b<6+d-6;b+=6+g()*8)o.fillStyle=t.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(b,y-6-g()*10,4+g()*5,6+g()*10)}f==="konbini"&&ut(o,6,m+4,d,5,"#ffffff"),o.save(),o.globalAlpha=.35,ki(o,6,m,d,v,g),o.restore(),ut(o,6,m,d,4,"#4a4e57"),f==="door"&&(ut(o,c/2-2,m,4,v,"#4a4e57"),ut(o,c/2-14,m+v*.45,3,40,"#c0c4c8"),ut(o,c/2+11,m+v*.45,3,40,"#c0c4c8"),ut(o,c/2-30,m+18,60,24,"#fff"),Te(o,"\u55B6\u696D\u4E2D",c/2,m+30,54,18,"#c82828")),f==="glass"&&g()<.7&&(ut(o,16,m+14,44,60,t.pick(["#f6d34a","#fff","#ff8aa0"])),Te(o,t.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,m+44,40,16,"#c02020")),f==="cafe"&&(ut(o,c*.62,h-70,46,62,"#2c3a30"),Te(o,"\u30E9\u30F3\u30C1",c*.62+23,h-50,40,13,"#fff",700));let _=f==="konbini"?"#c9d6e2":f==="cafe"?"#e8a060":"#e6c296";u.fillStyle=_,u.fillRect(6,m,d,v),u.fillStyle="rgba(0,0,0,0.35)";for(let y=m+v*.25;y<m+v;y+=v*.22)u.fillRect(6,y,d,3)}else if(f==="shutter"){let m=h*.2,d=c-12,v=h*.8;ut(o,6,m,d,v,"#b8bcc0");for(let S=m;S<m+v;S+=7)ut(o,6,S,d,2,"rgba(60,64,72,0.35)"),ut(o,6,S+2,d,1,"rgba(255,255,255,0.35)");ut(o,6,m,d,10,"#8f949a"),xn(o,i,c,h,.12),g()<.5&&(ut(o,c/2-40,m+v*.35,80,26,"#fff"),Te(o,t.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),c/2,m+v*.35+13,74,16,"#333",700))}else if(f==="noren"){ut(o,0,0,c,h,"#5b3c28");for(let _=0;_<c;_+=10)ut(o,_,h*.2,3,h*.8,"rgba(25,15,8,0.6)");xn(o,i,c,h,.15);let x=c*.12,m=h*.24,d=c*.76,v=h*.34,S=t.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);ut(o,x,m,d,v,S);for(let _=1;_<3;_++)ut(o,x+d*_/3-1,m+v*.25,2,v*.75,"rgba(255,255,255,0.25)");Te(o,t.pick(__),c/2,m+v*.55,d*.9,46,"#f5f0e6",800),ut(o,x,m,d,6,"#3a2a1c"),u.fillStyle="#ffae5c",u.fillRect(x,m+v,d,h-m-v),u.fillStyle="rgba(255,170,90,0.6)",u.fillRect(x,m,d,v),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c*.9,h*.36,13,19,0,0,7),o.fill(),Te(o,"\u9152",c*.9,h*.36,16,14,"#fff"),u.fillStyle="#ff6a3a",u.beginPath(),u.ellipse(c*.9,h*.36,13,19,0,0,7),u.fill()}else if(f==="house"){let x=c*.18,m=h*.3,d=c*.34,v=h*.7;ut(o,x-6,m-6,d+12,v+6,"#9a9a96"),ut(o,x,m,d,v,t.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),ut(o,x+d-14,m+v*.5,4,22,"#d8d0c0"),ut(o,x+6,m+10,d-12,v*.25,"rgba(255,255,255,0.18)"),ut(o,c*.62,h*.48,30,22,"#cfcfca"),ut(o,c*.62+6,h*.48+5,18,4,"#555");let S=c*.6,_=h*.22,y=c*.3,b=h*.2;Tr(o,S,_,y,b,3),ki(o,S,_,y,b,g,1);for(let w=0;w<3;w++)o.fillStyle="#7b5a43",o.fillRect(c*.6+w*22,h-26,16,18),o.fillStyle=t.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(c*.6+w*22+8,h-32,11,0,7),o.fill();u.fillStyle="#ffd08a",u.beginPath(),u.arc(x+d+14,m+8,6,0,7),u.fill(),g()<.6&&(u.fillStyle="#ffcf8f",u.fillRect(S,_,y,b))}else if(f==="garage"){let m=h*.25,d=c-16,v=h*.75;ut(o,8,m,d,v,"#efefec");for(let S=m;S<m+v;S+=9)ut(o,8,S,d,1.5,"rgba(80,80,90,0.25)");xn(o,i,c,h,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,u)=>{i.add("shop_"+o,e,s,(c,h,f,p)=>r(c,h,f,p,o,100+u)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",e,s,(c,h,f,p)=>r(c,h,f,p,o,200+u))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(u,c,h,f)=>{let[p,g]=Ql[o%Ql.length],x=pd[o*7%pd.length];ut(u,0,0,h,f,p),ut(u,0,0,h,5,"rgba(255,255,255,0.35)"),ut(u,0,f-6,h,6,"rgba(0,0,0,0.18)"),o%3===0&&(ut(u,12,12,f-24,f-24,g),Te(u,x[0],12+(f-24)/2,f/2,f-30,34,p)),Te(u,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g,900),xn(u,i,h,f,.08),c.fillStyle=p==="#fff"||p==="#f5efe0"?"#d9d6cc":p,c.fillRect(0,0,h,f),c.globalAlpha=.9,Te(c,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g==="#fff"?"#ffffff":g,900),c.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(u,c,h,f)=>{let[p,g]=Ql[(o*3+1)%Ql.length],x=md[o%md.length];ut(u,0,0,h,f,p),u.strokeStyle="rgba(0,0,0,0.3)",u.lineWidth=4,u.strokeRect(2,2,h-4,f-4),jl(u,x,h/2,12,f-12,56,g,900),xn(u,i,h,f,.08),ut(c,0,0,h,f,p==="#fff"?"#e8e8e8":p),jl(c,x,h/2,12,f-12,56,g==="#fff"?"#fff":g,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,u,c],h)=>i.add("bb"+h,512,240,(f,p,g,x)=>{ut(f,0,0,g,x,"#fbfaf5"),ut(f,0,0,g,x*.62,c),Te(f,o,g/2,x*.32,g*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Te(f,u,g/2,x*.8,g*.85,52,"#333",800),xn(f,i,g,x,.08),ut(p,0,0,g,x,"#555"),p.globalAlpha=.85,ut(p,0,0,g,x*.62,c),Te(p,o,g/2,x*.32,g*.9,96,"#fff",900),p.globalAlpha=1})),i.add("konbini_band",480,72,(o,u,c,h)=>{ut(o,0,0,c,h,"#fbfbf7"),ut(o,0,h*.62,c,h*.14,"#2a9a4a"),ut(o,0,h*.76,c,h*.12,"#f08a24"),ut(o,0,h*.88,c,h*.12,"#2f6fd8"),Te(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900),u.fillStyle="#f3f6f0",u.fillRect(0,0,c,h),Te(u,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(u,c,h,f)=>{let p=["#d8352a","#2f6fd8","#f4f4f0"][o];ut(u,0,0,h,f,p),ut(u,8,10,h-16,f*.55,"#eef4f8");let g=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let x=0;x<4;x++)for(let m=0;m<6;m++){let d=14+m*17,v=18+x*30;u.fillStyle=g[(x*6+m+o)%g.length],u.fillRect(d,v,11,20),u.fillStyle="rgba(255,255,255,0.5)",u.fillRect(d+2,v+2,3,14),u.fillStyle="#2a2a2a",u.fillRect(d,v+23,11,3)}ut(u,10,f*.62,h-20,22,"#222"),ut(u,h-34,f*.66,14,22,"#bbb"),ut(u,14,f*.82,h-28,22,"#1b1b1b"),Te(u,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],h/2,f*.62+11,h-28,14,"#fff",700),xn(u,i,h,f,.08),c.fillStyle="#f2f8ff",c.fillRect(8,10,h-16,f*.55);for(let x=0;x<4;x++)for(let m=0;m<6;m++)c.fillStyle=g[(x*6+m+o)%g.length],c.fillRect(14+m*17,18+x*30,11,20);c.fillStyle="#9fd0ff",c.fillRect(10,f*.62,h-20,22)});i.add("ac",128,88,(o,u,c,h)=>{ut(o,0,0,c,h,"#e9e9e4"),ec(o,0,0,c,h,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(c*.4,h*.5,h*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let f=6;f<h*.36;f+=6)o.beginPath(),o.arc(c*.4,h*.5,f,0,7),o.stroke();for(let f=12;f<h-10;f+=6)ut(o,c*.78,f,c*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,u,c,h)=>{ut(o,0,0,c,h,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,c-6,h-6),Te(o,"\u54C1\u5DDD 580",c/2,16,c*.6,14,"#2f5a2f",700),Te(o,"\u3042 12-34",c/2,42,c*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(c-2,2),o.lineTo(c/2,h-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(c-10,7),o.lineTo(c/2,h-12),o.fill(),Te(o,"\u6B62\u307E\u308C",c/2,34,c*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(c/2,22),o.lineTo(c/2+22,50),o.lineTo(c/2+8,50),o.lineTo(c/2+8,88),o.lineTo(c/2-8,88),o.lineTo(c/2-8,50),o.lineTo(c/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(c/2,h/2,c/2-9,0,7),o.stroke(),Te(o,"30",c/2,h/2+2,c*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,u,c,h)=>{ut(o,0,0,c,h,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,c-6,h-6),jl(o,"\u672C\u753A\u4E8C\u4E01\u76EE",c/2,10,h-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(u,c,h,f)=>{let p=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];ut(u,0,0,h,f,p),ut(u,4,4,h-8,f*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),Te(u,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],h/2,f*.25,h-12,18,"#fff",900);for(let g=0;g<4;g++)ut(u,8,f*.58+g*8,h-16-g%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,e,88,(u,c,h,f)=>{let p=["#e9e3d6","#dfe6ea","#efe2dc"][o];if(Sr(u,i,h,f,p),o===1)for(let g=10;g<h-6;g+=h/6)ut(u,g,10,h/6-8,f-20,"rgba(220,235,245,0.9)"),u.fillStyle="rgba(255,255,255,0.45)",u.fillRect(g,10,h/6-8,(f-20)*.4);else{ut(u,0,0,h,7,"rgba(255,255,255,0.4)");for(let g=h/3;g<h;g+=h/3)ut(u,g-1,0,2,f,"rgba(0,0,0,0.08)")}ut(u,0,f-6,h,6,"rgba(0,0,0,0.12)"),zi(u,h*.3,f-6,10,10,.2)});i.add("kawara",256,256,(o,u,c,h)=>{ut(o,0,0,c,h,"#58617a");for(let f=0;f<h;f+=16)ec(o,0,f,c,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let f=0;f<c;f+=20)ut(o,f,0,2,h,"rgba(0,0,0,0.18)");xn(o,i,c,h,.12)}),i.add("wood",256,256,(o,u,c,h)=>{ut(o,0,0,c,h,"#6d4c37");for(let f=0;f<h;f+=14)ut(o,0,f,c,2,"rgba(25,15,8,0.4)"),ut(o,0,f+2,c,1,"rgba(255,220,180,0.07)");xn(o,i,c,h,.16)}),i.add("block",256,128,(o,u,c,h)=>{ut(o,0,0,c,h,"#c9c7bf");for(let f=0;f<h;f+=32)for(let p=f/32%2?-32:0;p<c;p+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(p+1,f+1,62,30);for(let f=0;f<c;f+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(f+20,40,24,16);xn(o,i,c,h,.15),zi(o,0,0,c,40,.1)}),i.add("lantern",64,96,(o,u,c,h)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),o.fill();for(let f=16;f<h-12;f+=7)ut(o,4,f,c-8,1.5,"rgba(0,0,0,0.2)");ut(o,c/2-14,2,28,8,"#222"),ut(o,c/2-14,h-10,28,8,"#222"),Te(o,"\u796D",c/2,h/2,c*.6,28,"#fff",900),u.fillStyle="#ff6a35",u.beginPath(),u.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),u.fill()}),i.add("busstop",96,96,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.stroke(),Te(o,"\u30D0\u30B9\u505C",c/2,h/2,c*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>ut(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,u,c,h)=>{o.save(),o.translate(c/2,h/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(c/2-22,h/2-6,44,18),o.fillRect(c/2-16,h/2-16,18,12),o.fillRect(c/2+8,h/2-13,5,7),o.beginPath(),o.arc(c/2-12,h/2+15,5,0,7),o.arc(c/2+12,h/2+15,5,0,7),o.fill(),Te(o,"\u8E0F\u5207",c/2,h/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((o,u)=>i.add("bridge"+u,64,176,(c,h,f,p)=>{ut(c,0,0,f,p,"#b9b5ab"),xn(c,i,f,p,.2),ut(c,6,6,f-12,p-12,"#a7a398"),jl(c,o,f/2,14,p-14,34,"#3f3c37",800)})),i.add("signal",240,84,(o,u,c,h)=>{ut(o,0,0,c,h,"#4a4d52"),ut(o,0,0,c,5,"#5c6066"),xn(o,i,c,h,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([f,p])=>{o.fillStyle="#26282c",o.beginPath(),o.arc(p,h/2,33,0,7),o.fill(),o.fillStyle=f,o.beginPath(),o.arc(p,h/2,27,0,7),o.fill()})}),i.add("ped_sig",64,128,(o,u,c,h)=>{ut(o,0,0,c,h,"#3d4045"),o.fillStyle="#5a1814",o.fillRect(8,8,c-16,h/2-12),o.fillStyle="#0d4f44",o.fillRect(8,h/2+4,c-16,h/2-12),o.fillStyle="rgba(255,255,255,0.18)",o.beginPath(),o.arc(c/2,h*.18,6,0,7),o.fill(),o.fillRect(c/2-5,h*.24,10,18)}),i.add("tomare",256,96,(o,u,c,h)=>{o.clearRect(0,0,c,h),o.fillStyle="rgba(244,244,238,0.012)",o.fillRect(0,0,c,h),Te(o,"\u6B62\u307E\u308C",c/2,h/2+4,c*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((o,u)=>i.add("hodokyo"+u,256,44,(c,h,f,p)=>{ut(c,0,0,f,p,"#1f4f96"),c.strokeStyle="#fff",c.lineWidth=3,c.strokeRect(4,4,f-8,p-8),Te(c,o,f/2,p/2+1,f*.85,28,"#fff",800)}));let l=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];l.forEach(([o,u,c],h)=>{let f=l[(h+3)%4][0],p=l[(h+1)%4][0];i.add("ekimei"+h,320,124,(g,x,m,d)=>{ut(g,0,0,m,d,"#3a3d42"),ut(g,4,4,m-8,d-8,"#f8f8f3"),Te(g,u,m/2,20,m*.5,15,"#2b2b2b",700),Te(g,o,m/2,52,m*.6,40,"#151515",900),Te(g,c,m/2,80,m*.5,12,"#555",600),ut(g,4,d-30,m-8,26,"#1f9a50"),g.fillStyle="#fff",nc(g,12,700),g.textBaseline="middle",g.textAlign="left",g.fillText("\u2190 "+f,12,d-17),g.textAlign="right",g.fillText(p+" \u2192",m-12,d-17),xn(g,i,m,d,.06),ut(x,4,4,m-8,d-8,"#8a8a84")}),i.add("ekiplate"+h,220,48,(g,x,m,d)=>{ut(g,0,0,m,d,"#4b3326"),xn(g,i,m,d,.2),Te(g,o+"\u99C5",m/2,d/2+1,m*.8,30,"#f3ead8",800)})});for(let o of["l","r"])i.add("chev_"+o,96,120,(u,c,h,f)=>{ut(u,0,0,h,f,"#f4f4ef"),ut(u,4,4,h-8,f-8,"#1e5bb8"),u.fillStyle="#f8f8f4",u.beginPath();let p=o==="r"?1:-1,g=h/2,x=f/2;u.moveTo(g-p*26,x-40),u.lineTo(g+p*22,x),u.lineTo(g-p*26,x+40),u.lineTo(g-p*8,x+40),u.lineTo(g+p*40,x),u.lineTo(g-p*8,x-40),u.closePath(),u.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((o,u)=>i.add("tunnel"+u,360,80,(c,h,f,p)=>{ut(c,0,0,f,p,"#e9e7e0"),ut(c,4,4,f-8,p-8,"#24403b"),xn(c,i,f,p,.08),Te(c,o,f/2,p*.42,f*.8,38,"#f4f2ea",800),Te(c,"L = 170 m",f/2,p*.8,f*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(o,u,c,h)=>{ut(o,0,0,c,h,"#f6f6f2"),o.fillStyle="#d42a22";for(let f=-20;f<h;f+=26)o.beginPath(),o.moveTo(4,f),o.lineTo(c/2,f+20),o.lineTo(c-4,f),o.lineTo(c-4,f+11),o.lineTo(c/2,f+31),o.lineTo(4,f+11),o.closePath(),o.fill();o.strokeStyle="#222",o.lineWidth=3,o.strokeRect(1.5,1.5,c-3,h-3)}),i.add("xing_plate",128,48,(o,u,c,h)=>{ut(o,0,0,c,h,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,c-6,h-6),Te(o,"\u8E0F\u5207\u6CE8\u610F",c/2,h/2,c*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,u,c,h)=>{o.clearRect(0,0,c,h),ut(o,0,0,c,7,"#e9ebee"),ut(o,0,6,c,2,"rgba(60,70,80,0.5)"),ut(o,0,h-6,c,6,"#d5d8dc");for(let f=3;f<c;f+=9)ut(o,f,7,3,h-13,"#e2e5e9"),ut(o,f+2,7,1,h-13,"rgba(70,80,90,0.45)")}),i}function vd(i){let n=tc(1024,2048),s=n.getContext("2d"),r=En(321),a={},l={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},o=(h,f,p)=>{let g=l[h],x=256,m=h==="pine",d=h==="sakura";s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let v=[[x,x,m?80:92]];for(let _=0;_<(m?10:14);_++){let y=r()*6.28,b=45+r()*120;v.push([x+Math.cos(y)*b,x+Math.sin(y)*b*(m?.42:.9),Math.min(34+r()*52,232-b)])}let S=d?2300:m?2600:2300;for(let _=0;_<S;_++){let y=v[Math.floor(r()*v.length)],b=r()*6.28,w=Math.sqrt(r())*y[2],M=y[0]+Math.cos(b)*w,T=y[1]+Math.sin(b)*w*(m?.45:1),A=w/y[2],P=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(A>.82?.5:0))));if(s.fillStyle=g[P],d){let I=7+r()*8;s.beginPath(),s.arc(M,T,I,0,7),s.fill(),r()<.25&&(s.fillStyle=g[4],s.beginPath(),s.arc(M-I*.3,T-I*.3,I*.4,0,7),s.fill())}else if(m)s.save(),s.translate(M,T),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(h==="momiji"){let I=8+r()*7;s.save(),s.translate(M,T),s.rotate(r()*6.28),s.beginPath();for(let L=0;L<10;L++){let R=L%2?I*.42:I,D=L/10*6.2832;s.lineTo(Math.cos(D)*R,Math.sin(D)*R)}s.closePath(),s.fill(),s.restore()}else if(h==="ginkgo"){let I=9+r()*7;s.save(),s.translate(M,T),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,I,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let I=9+r()*10;s.beginPath(),s.ellipse(M,T,I,I*.55,r()*6.28,0,7),s.fill()}}for(let _=0;_<90;_++){let y=r()*6.28,b=150+r()*85,w=x+Math.cos(y)*b,M=x+Math.sin(y)*b*(m?.45:.92);s.fillStyle=g[1+Math.floor(r()*4)],m?(s.save(),s.translate(w,M),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(w,M,d?6+r()*6:7+r()*6,0,7),s.fill())}if(d)for(let _=0;_<14;_++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let y=x+(r()-.5)*300,b=x+60+r()*120;s.beginPath(),s.moveTo(y,b),s.lineTo(y+(r()-.5)*40,b-20-r()*30),s.stroke()}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}},u=(h,f,p,g)=>{s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let x=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],m=g?120:170;for(let d=0;d<m;d++){let v=256+(r()-.5)*(g?330:380)*Math.sqrt(r()),S=150+r()*(g?230:300)*(1-Math.abs(v-256)/300),_=(v-256)*.35+(r()-.5)*90,y=9+r()*9,b=v+_,w=512-S,M=Math.min(4,Math.floor(r()*2.2+S/380*2.6)),T=s.createLinearGradient(0,512,0,w);T.addColorStop(0,x[0]),T.addColorStop(.6,x[Math.max(1,M-1)]),T.addColorStop(1,x[M]),s.fillStyle=T,s.beginPath(),s.moveTo(v-y/2,512),s.quadraticCurveTo(v-y/2+_*.3,512-S*.55,b,w),s.quadraticCurveTo(v+y/2+_*.3,512-S*.5,v+y/2,512),s.fill()}if(g)for(let d=0;d<16;d++){let v=110+r()*290,S=150+r()*200,_=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(v+(r()-.5)*20,512),s.quadraticCurveTo(v+(r()-.5)*30,(S+512)/2,v,S),s.stroke(),_<.55){s.fillStyle="#fbfaf2";for(let y=0;y<12;y++){let b=y/12*6.283;s.beginPath(),s.ellipse(v+Math.cos(b)*11,S+Math.sin(b)*11,9,4.5,b,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(v,S,8,0,7),s.fill()}else if(_<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(v,S,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(v-3,S-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let y=0;y<6;y++)s.beginPath(),s.arc(v+(r()-.5)*16,S+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512),o("momiji",0,1024),o("ginkgo",512,1024),u("grass",0,1536,!1),u("flowers",512,1536,!0);let c=new Xn(n);return c.colorSpace=ze,c.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:c,cells:a,tuftV:[0,1-1536/2048]}}var on=[1,1,1],ct={pole:at("#b1b0a9"),metal:at("#8d9198"),black:at("#2a2b30"),yellow:at("#f2c230"),white:at("#f4f3ee"),trans:at("#a0a3a8"),lampPole:at("#727780"),lampHead:at("#dcdcd6"),trunk:at("#6a5444"),trunkDark:at("#4b3a33"),leaf:at("#86ba4c"),leafShade:at("#2c6640"),sakura:at("#ffd3e3"),sakuraShade:at("#de94b4"),pine:at("#55874c"),pineShade:at("#1d4632"),cedar:at("#41713e"),cedarShade:at("#1b3e2a"),roof:at("#bdbbb3"),parapet:at("#dcdad2"),pipe:at("#c4c4bf"),orange:at("#f07a22"),red:at("#d8352a"),vermilion:at("#e2482c"),concrete:at("#c9c7c0"),stone:at("#a8a69e"),terracotta:at("#b8653d"),rail:at("#eeeeea")},Vi=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(at),y_=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(at),Gu=null;function yd(i){Gu=i}var Ei=i=>Gu.uv(i),Do=Ei,M_=(i,t)=>Gu.has(t+"2")&&i()<.5?t+"2":t;function ic(i,t,e,n,s=0){let r=new qt().makeRotationY(s);return r.setPosition(t,e,n),new qt().multiplyMatrices(i,r)}var tn=(i,t,e,n,s,r,a,l=on)=>i.quad([e,n,r],[t,n,r],[t,s,r],[e,s,r],l,Ei(a)),Gi=(i,t,e,n,s,r,a,l=on)=>i.quad([t,s,n],[t,s,e],[t,r,e],[t,r,n],l,Ei(a)),Wi=(i,t,e,n,s,r,a,l=on)=>i.quad([t,s,e],[t,s,n],[t,r,n],[t,r,e],l,Ei(a)),Er=(i,t,e,n,s,r)=>i.quad(t,e,n,n,s,r?Ei(r):void 0),b_=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Md(i){return b_.map(t=>new B(t[0],t[1],t[2]).applyMatrix4(i))}function Wu(i,t,e,n={}){let s=i.color;s.setM(t);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,ct.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?ct.black:ct.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,ct.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,ct.metal);let a=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of a)s.cyl(0,r-.53,u,.05,.035,.17,6,ct.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,ct.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,ct.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,ct.trans),s.box(-.06,7.2,.12,.06,7.35,.26,ct.metal),e()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,ct.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,ct.metal),e()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,ct.concrete);for(let u=2.4,c=0;u<r-2;u+=.45,c++)s.rod([0,u,0],[c%2?.3:-.3,u,0],.015,.015,3,ct.metal);return i.atlas.setM(t),tn(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),e()<.4&&tn(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(e()*4)),[...a.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new B(u[0],u[1],u[2]).applyMatrix4(t))}function Xu(i,t,e,n={}){let s=i.color;s.setM(t),s.cyl(0,0,0,.08,.06,6,8,ct.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,ct.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,ct.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,ct.lampHead),i.lamp.setM(t),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,on);let r=n.poolY??.04;i.pool.setM(t),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],on,{u0:0,u1:1,v0:0,v1:1})}function bd(i,t,e=.04){let n=i.color;n.setM(t),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,ct.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,ct.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,ct.lampHead),i.lamp.setM(t),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,on),i.pool.setM(t),i.pool.quad([-3.6,e,2.2],[3.6,e,2.2],[3.6,e,-5.2],[-3.6,e,-5.2],on,{u0:0,u1:1,v0:0,v1:1})}function No(i,t){let e=i.color;e.setM(t),e.cyl(0,0,0,.07,.06,3.2,8,at("#3a3a3e")),e.box(-.2,3.2,-.2,.2,3.25,.2,at("#3a3a3e")),e.cyl(0,3.75,0,.26,.04,.3,8,at("#3a3a3e")),i.lamp.setM(t),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,on),i.pool.setM(t),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],on,{u0:0,u1:1,v0:0,v1:1})}function qu(i,t,e){let n=Math.floor(e()*3),s=[ct.red,at("#2f6fd8"),ct.white][n];i.color.setM(t),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,wn(s,.8)),i.atlas.setM(t),tn(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Hu(i,t,e,n,s){i.color.setM(t),i.color.box(e-.4,n,s,e+.4,n+.56,s+.28,at("#e6e6e1")),i.atlas.setM(t),tn(i.atlas,e-.4,e+.4,n,n+.56,s-.003,"ac")}function Sd(i,t,e){let n=i.color;n.setM(t);let s=e.pick([at("#c8ccd2"),at("#c0392b"),at("#2c6fb7"),at("#2b2b2b"),at("#e8c84a"),at("#e98fb0")]);for(let a of[-.52,.52])for(let l=0;l<12;l++){let o=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([a+Math.cos(o)*.33,.34+Math.sin(o)*.33,0],[a+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,ct.black)}let r=(a,l)=>n.rod(a,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,ct.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,ct.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,ct.metal)}function Td(i,t){let e=i.color;e.setM(t),e.box(-.2,0,-.2,.2,.04,.2,ct.orange),e.cyl(0,.04,0,.16,.03,.68,10,ct.orange),e.cyl(0,.32,0,.115,.095,.12,10,ct.white,!1)}function Ed(i,t,e,n=0,s=0){i.color.setM(t),i.color.cyl(n,0,s,.17,.21,.34,8,ct.terracotta),i.leaf.setM(t),Hi(i,[n,.45,s],n,.62,s,.32+e()*.1,e()<.5?"leafA":"leafB",5,e,[1,1,1],[.55,.62,.7],[.35,.9])}function fs(i,t,e,n,s=2.3,r=.6){i.color.setM(t),i.color.cyl(0,0,0,.035,.035,s+r/2,6,ct.metal),i.atlas.setM(t),n<0?Wi(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,e):Gi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,e)}function Yu(i,t,e){let n=i.color;n.setM(t);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?ct.white:ct.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,ct.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,ct.black),i.atlas.setM(t),e<0?Wi(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Gi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function wd(i,t){let e=i.color;e.setM(t),e.box(-.035,.84,-.035,.035,1.12,.035,at("#efefea")),e.box(-.06,1,-.06,.06,1.1,.06,at("#f0a020"))}function Zu(i,t,e){let n=i.color;n.setM(t),n.cyl(0,0,0,.05,.05,3.3,8,ct.orange);let s=0,r=3.25,a=.42,l=14;for(let o=0;o<l;o++){let u=o/l*Math.PI*2,c=(o+1)/l*Math.PI*2,h=(f,p,g)=>[e*g,r+Math.sin(f)*p,s+Math.cos(f)*p-.25];Er(n,h(0,0,-.02),h(e>0?c:u,a,-.02),h(e>0?u:c,a,-.02),ct.orange),Er(n,h(0,0,-.035),h(e>0?c:u,a*.86,-.035),h(e>0?u:c,a*.86,-.035),at("#dfe9f2"))}}var Ju=null;function Ad(i){Ju=i}var Vu=1;function Rd(i){Vu=i}function Hi(i,t,e,n,s,r,a,l,o,u,c,h,f=0){let p=Ju[a],g=1+(1-Vu)*.35;l=Math.max(2,Math.round(l*Vu));for(let x=0;x<l;x++){let m=o()*2-1,d=o()*2-1,v=o()*2-1;f&&(d=1.2+o());let S=Math.hypot(m,d,v)||1;m/=S,d/=S,v/=S;let _=-v,y=0,b=m;S=Math.hypot(_,b),S<.1&&(_=1,b=0,S=1),_/=S,b/=S;let w=d*b-v*y,M=v*_-m*b,T=m*y-d*_,A=Math.PI+(o()-.5)*.9,P=Math.cos(A),I=Math.sin(A),L=_*P+w*I,R=y*P+M*I,D=b*P+T*I,F=w*P-_*I,O=M*P-y*I,z=T*P-b*I,U=r*(1.3+o()*.45)*g/2,X=e+(o()-.5)*r*.6,H=n+(o()-.5)*r*(f?.15:.5),Q=s+(o()-.5)*r*.6,dt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([zt,Y])=>[X+(L*zt+F*Y)*U,H+(R*zt+O*Y)*U*(f?.6:1),Q+(D*zt+z*Y)*U]),Wt=dt.map(zt=>{let Y=zt[0]-t[0],it=zt[1]-t[1],q=zt[2]-t[2],Nt=Math.hypot(Y,it,q)||1;Y/=Nt,it/=Nt,q/=Nt;let wt=zt[0]-e,At=zt[1]-n,j=zt[2]-s;return Nt=Math.hypot(wt,At,j)||1,[Y*.7+wt/Nt*.3,it*.7+At/Nt*.3+(f?.5:0),q*.7+j/Nt*.3]}),Yt=dt.map(zt=>Zf(c,u,.45+.55*Math.max(0,Math.min(1,(zt[1]-h[0])/(h[1]-h[0])))));i.leaf.card(dt,Wt,p,Yt)}}function Cd(i,t,e,n="grass",s=1){let r=Ju[n],a=(.42+e()*.38)*s,l=a*1.2,o=e()*Math.PI,u=[0,1,0],c=[u,u,u,u],h=[.6,.64,.58],f=[1,1,1];i.leaf.setM(t);for(let p of[o,o+Math.PI/2]){let g=Math.cos(p)*l/2,x=Math.sin(p)*l/2;i.leaf.card([[-g,-.05,-x],[g,-.05,x],[g,a,x],[-g,a,-x]],c,r,[h,h,f,f])}}function S_(i,t,e,n=1){let s=e.range(5.5,7.5)*n;i.color.setM(t),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,ct.trunk);for(let u=0;u<3;u++){let c=e()*6.28;i.color.rod([0,s*.42,0],[Math.cos(c)*1.1*n,s*.68,Math.sin(c)*1.1*n],.09*n,.05*n,5,ct.trunk)}i.leaf.setM(t);let r=[0,s*.78,0],a=e()<.5?"leafA":"leafB",l=[s*.45,s*1.15],o=7+Math.floor(e()*3);for(let u=0;u<o;u++){let c=e()*6.28,h=(.6+e())*1.3*n;Hi(i,r,Math.cos(c)*h,s*(.62+e()*.3),Math.sin(c)*h,(1.1+e()*.6)*n,a,6,e,[1,1,1],[.55,.62,.7],l)}Hi(i,r,0,s*.98,0,1.4*n,a,7,e,[1,1,1],[.55,.62,.7],l)}function T_(i,t,e,n=1){let s=e.range(5.5,7)*n;i.color.setM(t),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,ct.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+e()*.8,h=(2.2+e()*1.6)*n,f=[Math.cos(c)*h,s*(.62+e()*.18),Math.sin(c)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,ct.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,ct.trunkDark)}i.leaf.setM(t);let a=[0,s*.72,0],l=[s*.5,s*1.1],o=[.72,.62,.72];for(let u of r)for(let c=0;c<2;c++)Hi(i,a,u[0]+(e()-.5)*1.4*n,u[1]+e()*.9*n,u[2]+(e()-.5)*1.4*n,(1.2+e()*.5)*n,"sakura",6,e,[1,1,1],o,l);Hi(i,a,0,s*.92,0,1.9*n,"sakura",9,e,[1,1,1],o,l)}function E_(i,t,e,n=1){let s=i.color;s.setM(t);let r=(e()-.5)*1.6*n,a=e.range(5,7.5)*n,l=[r*.4,a*.45,.2],o=[r,a*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,ct.trunkDark),s.rod(l,o,.15*n,.09*n,6,ct.trunkDark),i.leaf.setM(t);let u=[[o[0],o[1]+.3,o[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[o[0]+.9*n,o[1]-.6,.8,1.1]];for(let[c,h,f,p]of u)s.rod(c>l[0]?l:o,[c,h-.2,f],.07*n,.04*n,4,ct.trunkDark),Hi(i,[c,h-.8,f],c,h,f,p*n*1.3,"pine",9,e,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function w_(i,t,e,n=1){let s=e.range(4.5,6.5)*n;i.color.setM(t),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,ct.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+e()*.8,h=(1.8+e()*1.4)*n,f=[Math.cos(c)*h,s*(.55+e()*.2),Math.sin(c)*h];i.color.rod([0,s*.38,0],f,.09*n,.04*n,5,ct.trunkDark),r.push(f)}i.leaf.setM(t);let a=[0,s*.7,0],l=[s*.45,s*1.1],o=[.62,.52,.56];for(let u of r)Hi(i,a,u[0],u[1]+.4*n,u[2],(1.15+e()*.4)*n,"momiji",6,e,[1,1,1],o,l);Hi(i,a,0,s*.92,0,1.6*n,"momiji",8,e,[1,1,1],o,l)}function A_(i,t,e,n=1){let s=e.range(8,11)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,ct.trunk),i.leaf.setM(t);let r=[0,s*.62,0],a=[s*.3,s*1.02],l=[.68,.6,.52];for(let o=0;o<7;o++){let u=s*(.34+o*.09),c=(2.1-o*.24)*n,h=e()*6.28;Hi(i,r,Math.cos(h)*c*.35,u,Math.sin(h)*c*.35,Math.max(.7,c)*1.05,"ginkgo",5,e,[1,1,1],l,a)}}function R_(i,t,e,n=1){let s=i.color;s.setM(t);let r=e.range(7,10)*n,a=(e()-.5)*.5;s.rod([0,0,0],[a,r,0],.13*n,.05*n,7,at("#eeece6"));for(let l=0;l<7;l++){let o=e.range(.4,r*.85),u=o/r;s.cyl(a*u,o,0,.135*n*(1-u*.6),.13*n*(1-u*.6),.05,7,at("#2b2b30"),!1)}for(let l=0;l<7;l++){let o=r*(.45+e()*.5),u=e()*6.28,c=(.8+e()*1.6)*n,h=o/r;s.rod([a*h,o,0],[a*h+Math.cos(u)*c,o+c*.9,Math.sin(u)*c],.035*n,.012*n,4,at("#8b7f78"))}}function C_(i,t,e,n=1){let s=e.range(9,13)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ct.trunkDark),i.foliage.setM(t);let r=at("#1d3a2c"),a=at("#eef2f8"),l=at("#d7e0ec");for(let o=0;o<4;o++){let u=s*(.16+o*.19),c=(1.9-o*.38)*n,h=s*.3;i.foliage.cyl(0,u,0,c,c*.3,h,9,r),i.foliage.cyl(0,u+h*.45,0,c*.72,.05,h*.62,9,o%2?a:l)}}function P_(i,t,e,n=1){let s=e.range(9,14)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ct.trunkDark),i.foliage.setM(t),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,ct.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,ct.cedar)}var Pd={broad:S_,sakura:T_,pine:E_,cedar:P_,maple:w_,ginkgo:A_,birch:R_,snowcedar:C_},_d={};function Id(i,t){let e=i+t,n=_d[e];if(!n){let s={color:new rn,foliage:new rn,leaf:new rn({uv:!0})};Pd[i](s,new qt,En(1e3+t*77+i.length*13),1),n=_d[e]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function Ld(){for(let i in Pd)for(let t=0;t<4;t++)Id(i,t)}function Rn(i,t,e,n,s=1){let r=Id(e,Math.floor(n()*4)),a=t.clone().scale(new B(s,s,s));i.color.stamp(r.c,a),i.foliage.stamp(r.f,a),i.leaf.stamp(r.l,a)}function Uo(i,t,e,n,s,r,a){let l=Math.max(1,Math.round(e/3)),o=e/l;for(let u of[-1,1])for(let c=0;c<n.length-1;c++)for(let h=0;h<l;h++){let f=c>0&&r()<.3?"win6"+(r()<a?"L":""):r()<.2?"win5":"plain";(u>0?Gi:Wi)(i,u*t/2,h*o,(h+1)*o,n[c],n[c+1],f,s)}}function Fo(i,t,e,n,s,r=!1){i.quad([-t/2,n,e],[t/2,n,e],[t/2,n,0],[-t/2,n,0],ct.roof);let a=.5,l=.15;if(i.box(-t/2,n,-.02,t/2,n+a,l,ct.parapet),i.box(-t/2,n,e-l,t/2,n+a,e,ct.parapet),i.box(-t/2,n,0,-t/2+l,n+a,e,ct.parapet),i.box(t/2-l,n,0,t/2,n+a,e,ct.parapet),s()<.4){let o=(s()-.5)*t*.5,u=e*(.4+s()*.3);for(let[c,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(o+c-.05,n,u+h-.05,o+c+.05,n+1,u+h+.05,ct.metal);i.cyl(o,n+1,u,.85,.85,1.3,12,at("#cfd2d4"))}r&&s()<.6&&i.box(-t*.15,n,e*.4,t*.15,n+2.6,e*.75,ct.parapet),s()<.3&&i.rod([t*.3,n,e*.5],[t*.3,n+3.5,e*.5],.03,.02,4,ct.metal)}function Dd(i,t,e,n,s){i.color.box(t-.06,e,-.88,t+.06,n,-.12,ct.black);let r="vs"+Math.floor(s()*10);Wi(i.atlas,t-.065,-.88,-.12,e,n,r),Gi(i.atlas,t+.065,-.88,-.12,e,n,r),i.color.box(t-.03,e+.3,-.12,t+.03,e+.36,0,ct.metal),i.color.box(t-.03,n-.36,-.12,t+.03,n-.3,0,ct.metal)}function Xi(i,t,e,n){switch(i.atlas.setM(t),i.color.setM(t),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,ct.concrete,null,{noBottom:!0}),n.type){case"shop":return I_(i,t,e,n);case"apt":return L_(i,t,e,n);case"office":return D_(i,t,e,n);case"konbini":return N_(i,t,e,n);case"house":return U_(i,t,e,n);case"tower":return F_(i,t,e,n)}}function I_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.6,f=3,p=h+(a-1)*f,g=Math.max(1,Math.round(s/3)),x=s/g,m=-s/2,d=e.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let y=0;y<g;y++)tn(u,m+y*x,m+(y+1)*x,0,h,0,M_(e,"shop_"+d[y%d.length]));let v=e.pick([0,0,1,5,0,1]),S=[0,h];for(let y=1;y<a;y++)S.push(h+y*f);for(let y=1;y<a;y++)for(let b=0;b<g;b++){let w=b%2===1&&e()<.3?5:v;tn(u,m+b*x,m+(b+1)*x,S[y],S[y+1],0,"win"+w+(e()<o?"L":""),l)}Uo(u,s,r,S,l,e,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],wn(l,.8)),Fo(c,s,r,p,e);let _=s*.94;if(c.box(-_/2,h-.8,-.3,_/2,h+.08,-.02,ct.black),tn(u,-_/2,_/2,h-.8,h+.08,-.305,"hs"+Math.floor(e()*14)),e()<.55){let y=e.pick(y_),b=h-.85;c.quad([s/2-.2,b-.35,-1.1],[-s/2+.2,b-.35,-1.1],[-s/2+.2,b,-.02],[s/2-.2,b,-.02],y),c.quad([s/2-.2,b-.6,-1.1],[-s/2+.2,b-.6,-1.1],[-s/2+.2,b-.35,-1.1],[s/2-.2,b-.35,-1.1],wn(y,.85))}if(a>=2&&e()<.65){let y=(e()<.5?1:-1)*(s/2-.35);Dd(i,y,h+.3,Math.min(p-.15,h+2.8),e)}for(let y=1;y<a;y++)if(e()<.4){let b=Math.floor(e()*g),w=m+b*x+.15,M=m+(b+1)*x-.15,T=S[y];c.box(w,T-.12,-.9,M,T,0,ct.parapet),tn(u,w,M,T,T+1,-.9,"rail"),Wi(u,w,-.9,0,T,T+1,"rail"),Gi(u,M,-.9,0,T,T+1,"rail"),e()<.45&&Od(c,w+.1,M-.1,T+1.95,-.55,e),e()<.6&&Hu(i,t,(w+M)/2+.6,T,-.75)}else if(e()<.35){let b=Math.floor(e()*g);Hu(i,t,m+(b+.5)*x,S[y]+.15,-.3),i.color.setM(t),i.atlas.setM(t)}c.cyl(m+.12,0,-.08,.05,.05,p,6,ct.pipe,!1),c.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,at("#d9d9d3")),a>=3&&e()<.18&&Nd(i,s,p,r,e)}function Nd(i,t,e,n,s){let r=Math.min(t*.85,7),a=r*.47,l=n*.3;for(let o of[-r*.35,r*.35])i.color.box(o-.06,e,l,o+.06,e+1.2+a,l+.12,ct.metal);i.color.box(-r/2,e+1.2,l+.12,r/2,e+1.2+a,l+.3,ct.metal),tn(i.atlas,-r/2,r/2,e+1.2,e+1.2+a,l+.115,"bb"+Math.floor(s()*4))}function L_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.2,f=2.95,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3.2)),x=s/g,m=-s/2,d=[0,h];for(let _=1;_<a;_++)d.push(h+_*f);for(let _=0;_<g;_++)tn(u,m+_*x,m+(_+1)*x,0,h,0,_===Math.floor(g/2)?"shop_door":e.pick(["shop_house","shop_garage","plain"]),_===Math.floor(g/2)?on:l);let v="bal"+Math.floor(e()*3),S=wn(l,.97);for(let _=1;_<a;_++){let y=d[_];for(let b=0;b<g;b++)tn(u,m+b*x,m+(b+1)*x,y,d[_+1],0,"win2"+(e()<o?"L":""),l);c.box(m,y-.15,-1.3,-m,y,0,S),c.box(m,y,-1.3,-m,y+1.1,-1.18,S,null,{noBottom:!0});for(let b=0;b<g;b++)tn(u,m+b*x,m+(b+1)*x,y,y+1.1,-1.305,v,l);for(let b=0;b<=g;b++)c.box(m+b*x-.05,y,-1.18,m+b*x+.05,y+2.4,0,wn(l,.92));for(let b=0;b<g;b++){let w=e(),M=m+b*x+.2,T=m+(b+1)*x-.2;w<.34?Od(c,M,T,y+2.02,-.98,e):w<.46&&z_(c,M+.25,Math.min(T-.25,M+1.9),y+1.1,-1.3,e)}i.atlas.setM(t);for(let b=0;b<g;b++)e()<.55&&(Hu(i,t,m+(b+.78)*x,y,-.55),i.atlas.setM(t),i.color.setM(t))}c.box(m,p-.15,-1.3,-m,p,0,S),Uo(u,s,r,d,l,e,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],wn(l,.8)),Fo(c,s,r,p,e,!0)}function D_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=4,f=3.4,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3)),x=s/g,m=-s/2,d=[0,h];for(let v=1;v<a;v++)d.push(h+v*f);for(let v=0;v<g;v++)tn(u,m+v*x,m+(v+1)*x,0,h,0,v===1?"shop_door":"shop_glass");for(let v=1;v<a;v++)for(let S=0;S<g;S++)tn(u,m+S*x,m+(S+1)*x,d[v],d[v+1],0,"win3"+(e()<o?"L":""),l);Uo(u,s,r,d,l,e,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],wn(l,.8)),Fo(c,s,r,p,e,!0),e()<.6&&Dd(i,(e()<.5?1:-1)*(s/2-.3),h+.4,Math.min(p-.3,h+4.5),e),e()<.3&&Nd(i,s,p,r,e)}function N_(i,t,e,n){let{w:s,d:r}=n,a=i.atlas,l=i.color,o=4.4,u=-s/2,c=Math.max(3,Math.round(s/3)),h=s/c;for(let f=0;f<c;f++)tn(a,u+f*h,u+(f+1)*h,0,3.4,0,"shop_konbini");l.box(u,3.4,-.35,-u,o,0,ct.white),tn(a,u,-u,3.4,o,-.355,"konbini_band"),Uo(a,s,r,[0,o],at("#f2f2ee"),e,0),Fo(l,s,r,o,e)}function U_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=2.9,f=a*h,p=-s/2,g=e()<.5,x=Math.max(2,Math.round(s/3)),m=s/x,d=[];for(let T=0;T<=a;T++)d.push(T*h);let v=g?on:l;for(let T=0;T<a;T++)for(let A=0;A<x;A++){let P=g?"win4":"win0";T===0&&A===0?P="shop_house":e()<o&&(P+="L"),tn(u,p+A*m,p+(A+1)*m,d[T],d[T+1],0,P,P==="shop_house"?on:v)}Uo(u,s,r,d,g?at("#9a7a62"):l,e,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],wn(l,.75));let S=!!n.snow,_=S?.75:.6,y=S?Math.min(3.4,r*.46):Math.min(2.4,r*.32),b=Ei(S?"white":"kawara"),w=S?at("#f3f5fa"):at("#c8ccd8");u.quad([s/2+_,f-.25,-_],[-s/2-_,f-.25,-_],[-s/2-_,f+y,r/2],[s/2+_,f+y,r/2],w,b),u.quad([-s/2-_,f-.25,r+_],[s/2+_,f-.25,r+_],[s/2+_,f+y,r/2],[-s/2-_,f+y,r/2],w,b);let M=g?at("#7a5a42"):l;if(Er(c,[-s/2,f,0],[-s/2,f,r],[-s/2,f+y-.1,r/2],M),Er(c,[s/2,f,r],[s/2,f,0],[s/2,f+y-.1,r/2],M),c.box(-s/2-_,f+y-.05,r/2-.15,s/2+_,f+y+.18,r/2+.15,S?at("#f6f7fb"):at("#3d4456")),S){c.box(-s/2-_-.05,f-.42,-_-.1,s/2+_+.05,f-.12,-_+.3,at("#eef1f7")),c.box(-s/2-_-.05,f-.42,r+_-.3,s/2+_+.05,f-.12,r+_+.1,at("#eef1f7"));for(let T=-s/2;T<s/2;T+=.45+e()*.5)c.cyl(T,f-.42-.35,-_+.02,0,.04,.35,4,at("#dfe8f3"),!1)}if(a>1){let T=h+.05;u.quad([s/2+.1,T-.3,-.75],[-s/2-.1,T-.3,-.75],[-s/2-.1,T+.05,0],[s/2+.1,T+.05,0],w,b)}if(n.fence){let T=-n.fence,A=1.2;for(let[P,I]of[[-s/2,-1],[.4,s/2]])c.box(P,0,T-.08,I,A,T+.08,ct.concrete),tn(u,P,I,0,A,T-.085,"block")}}function F_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.4,f=a*h,p=Math.max(2,Math.round(s/6)),g=s/p,x=-s/2,m=e()<.5?"win3":"win2",d=[];for(let _=0;_<=a;_++)d.push(_*h);for(let _=0;_<a;_++)for(let y=0;y<p;y++)tn(u,x+y*g,x+(y+1)*g,d[_],d[_+1],0,m+(e()<o?"L":""),l);let v=Math.max(1,Math.round(r/6)),S=r/v;for(let _ of[-1,1])for(let y=0;y<a;y++)for(let b=0;b<v;b++)(_>0?Gi:Wi)(u,_*s/2,b*S,(b+1)*S,d[y],d[y+1],m+(e()<o?"L":""),l);Fo(c,s,r,f,e,!0)}function Ud(i,t,e){let n=i.color;n.setM(t);let s=e.pick([at("#f2f2ee"),at("#c9cdd2"),at("#2b2f38"),at("#b33a32"),at("#9fc6c0"),at("#e7d9b4"),at("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,wn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,at("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,ct.black)}function $u(i,t,e,n){let s=i.color,r=at("#8d9096"),a=at("#3a3d42");s.setM(t),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,o=-n+.62;s.box(-.14,5.08,l,.14,5.56,o,a);let u=e*.141;i.atlas.setM(t),(e>0?Gi:Wi)(i.atlas,u,l,o,5.08,5.56,"signal");let c=e>0?o:l,h=e>0?-1:1;for(let p=0;p<3;p++){let g=c+h*(.2+p*.4);s.box(e>0?.14:-.36,5.47,g-.15,e>0?.36:-.14,5.5,g+.15,a)}let f=c+h*.2;i.sig.setM(t),i.sig.box(e>0?.145:-.16,5.21,f-.11,e>0?.16:-.145,5.43,f+.11,on)}function Fd(i,t,e,n){let s=i.color,r=at("#3d6ea8"),a=at("#e8eef2"),l=at("#c7c5bf"),o=5.35;s.setM(t),s.box(-1.1,o-.65,-e,1.1,o,e,r);for(let u of[-1.1,1])s.box(u,o,-e,u+.1,o+1.1,e,a),s.box(u-.02,o+1.1,-e,u+.12,o+1.18,e,r);i.atlas.setM(t),Wi(i.atlas,-1.105,-2.2,2.2,o-.62,o-.06,n),Gi(i.atlas,1.105,-2.2,2.2,o-.62,o-.06,n),s.setM(t);for(let u of[-1,1]){let c=u*(e-1.65),h=u*(e-.15),f=Math.min(c,h),p=Math.max(c,h);s.box(-.45,.15,f+.3,.45,o-.65,p-.3,r);let g=20,x=(o-.15)/g;for(let m=0;m<g;m++)s.box(1.1+m*.3,.15,f,1.1+(m+1)*.3,o-(m+1)*x+.04,p,l);s.box(1.1,o-.1,f-.05,1.1+g*.3,o-.02,f+.05,r)}}function Bd(i,t,e,n,s,r,a){let l=i.color,o=1.22,u=3.55,c=6.7,h=at("#c8c5bd"),f=at("#ebe8de"),p=at("#7a5a42"),g=at("#5e4433"),x=at("#4d5468");l.setM(t),l.box(e,-1.4,u,n,o,c,h,null,{noBottom:!0}),l.box(e,o,u,n,o+.025,u+.32,f),l.box(e,o,u+.6,n,o+.04,u+.9,ct.yellow);let m=Math.sign(s-(e+n)/2),d=m>0?n:e,v=d+m*6.2,S=u+.9,_=c-.2,y=(U,X,H)=>[U,X,H];m>0?l.quad(y(v,.1,_),y(v,.1,S),y(d,o,S),y(d,o,_),h):l.quad(y(v,.1,S),y(v,.1,_),y(d,o,_),y(d,o,S),h);for(let U of[S,_]){let X=at("#9aa0a6");l.rod([v,.1+.9,U],[d,o+.9,U],.03,.03,5,X);for(let H=0;H<=3;H++){let Q=v+(d-v)*H/3,dt=.1+(o-.1)*H/3;l.box(Q-.03,dt,U-.03,Q+.03,dt+.9,U+.03,X)}}i.atlas.setM(t);for(let U=e;U<n-.01;U+=3){let X=Math.min(n,U+3);i.atlas.quad([U,-.6,c+.004],[X,-.6,c+.004],[X,o,c+.004],[U,o,c+.004],at("#d8d4ca"),Ei("concrete"))}l.setM(t);for(let U=e+.4;U<n;U+=2)l.box(U-.05,o,c-.12,U+.05,o+1,c-.02,at("#8f949a"));for(let U of[.45,.95])l.box(e,o+U,c-.1,n,o+U+.06,c-.04,at("#8f949a"));let b=n-e,w=U=>m>0?n-b*U:e+b*U,M=w(.47),T=M-2.3,A=M+2.3,P=u+1.35,I=c-.25;l.box(T,o,I-.12,A,o+2.45,I,p);for(let U of[T,A-.12])l.box(U,o,P+.6,U+.12,o+2.45,I,g);for(let U of[T,A-.12])l.box(U,o,P,U+.12,o+2.45,P+.12,g);l.quad([A+.4,o+2.5,P-.45],[T-.4,o+2.5,P-.45],[T-.4,o+2.85,I+.35],[A+.4,o+2.85,I+.35],x),l.quad([T-.4,o+2.42,P-.45],[A+.4,o+2.42,P-.45],[A+.4,o+2.77,I+.35],[T-.4,o+2.77,I+.35],at("#3a3f50")),l.box(T+.3,o+.42,I-.55,A-.3,o+.48,I-.15,at("#8a6a4a"));for(let U of[T+.4,A-.5])l.box(U,o,I-.5,U+.08,o+.42,I-.2,ct.metal);i.atlas.setM(t),i.atlas.quad([M-1.1,o+1.55,I+.005],[M+1.1,o+1.55,I+.005],[M+1.1,o+2.03,I+.005],[M-1.1,o+2.03,I+.005],on,Ei("ekiplate"+r));let L=w(.2),R=u+1.6,D=1.25,F=o+1.25,O=F+.95;l.setM(t);for(let U of[L-D+.12,L+D-.12])l.cyl(U,o,R,.05,.05,O-o+.05,8,at("#6b7078"));l.box(L-D,F-.03,R-.03,L+D,O+.03,R+.03,at("#3a3d42")),i.atlas.setM(t),i.atlas.quad([L-D,F,R+.035],[L+D,F,R+.035],[L+D,O,R+.035],[L-D,O,R+.035],on,Ei("ekimei"+r)),i.atlas.quad([L+D,F,R-.035],[L-D,F,R-.035],[L-D,O,R-.035],[L+D,O,R-.035],on,Ei("ekimei"+r)),l.setM(t);let z=M-m*4.2;l.box(z-.9,o+.42,c-1.25,z+.9,o+.47,c-.85,at("#3b6ea8")),l.box(z-.9,o+.47,c-.88,z+.9,o+.9,c-.83,at("#3b6ea8"));for(let U of[z-.75,z+.7])l.box(U,o,c-1.2,U+.06,o+.42,c-.9,ct.metal);for(let U=e+3;U<n-1;U+=9)No(i,ic(t,U,o,c-.45))}var B_=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(at),O_=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(at);function Od(i,t,e,n,s,r){i.rod([t,n,s],[e,n,s],.018,.018,4,ct.metal);let a=t+.12+r()*.2;for(;a<e-.35;){let l=.28+r()*.34,o=.36+r()*.42,u=r.pick(B_),c=s+(r()-.5)*.06;i.quad([a+l,n-o,c],[a,n-o,c],[a,n-.02,c],[a+l,n-.02,c],u),i.quad([a,n-o,c+.01],[a+l,n-o,c+.01],[a+l,n-.02,c+.01],[a,n-.02,c+.01],wn(u,.85)),r()<.4&&i.box(a+l*.45,n-.02,c-.02,a+l*.55,n+.06,c+.02,at("#d8d8d0")),a+=l+.06+r()*.22}}function z_(i,t,e,n,s,r){let a=r.pick(O_),l=.11;i.box(t,n-.02,s-l,e,n+.09,s+.22,a),i.box(t,n-.72,s-l,e,n+.09,s-.005,a),i.box(t+.08,n-.5,s-l-.004,e-.08,n-.42,s-l+.01,wn(a,.86))}function zd(i,t){let e=i.color,n=at("#a19f97"),s=at("#6b4a35"),r=at("#4f4a44"),a=at("#c8342a");e.setM(t),e.box(-.62,-.6,-.46,.62,.32,.46,at("#8d8b84"));for(let l of[-.52,.48])for(let o of[-.36,.32])e.box(l,.32,o,l+.05,1.5,o+.05,s);e.box(-.55,1.42,.3,.55,1.5,.4,s),e.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),e.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),e.cyl(0,.32,0,.17,.13,.44,10,n),e.blob(0,.86,0,.11,n,wn(n,.8),0),e.cyl(0,.6,0,.19,.11,.16,10,a,!1),e.cyl(0,.93,0,.115,.03,.1,8,a);for(let l of[-.32,.3])e.cyl(l,.32,-.18,.05,.06,.07,8,at("#e9e6dc"));e.box(-.06,.32,-.32,.06,.58,-.28,at("#5b8d3d"))}function kd(i,t){let e=i.color;e.setM(t);for(let n=0;n<8;n++)e.cyl(0,n*.4,0,.075,.075,.4,8,n%2?ct.black:ct.yellow,!1);e.cyl(0,3.2,0,.075,.055,.75,8,ct.black),e.box(-.5,2.55,-.06,.5,2.95,.02,ct.black);for(let n of[-.28,.28])e.box(n-.17,2.9,-.3,n+.17,2.95,-.06,ct.black);e.box(-.78,-.9,-.34,.3,0,.34,ct.concrete,null,{noBottom:!0}),e.box(-.68,0,-.26,-.16,1.18,.26,at("#e9e9e3")),e.box(-.68,1.18,-.26,-.16,1.24,.26,ct.yellow);for(let n of[Math.PI/4,-Math.PI/4]){e.setM(new qt().multiplyMatrices(t,new qt().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)e.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?ct.black:ct.yellow)}e.setM(t),i.atlas.setM(t),tn(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function Hd(i,t){let e=i.color;e.setM(t),e.box(-.4,0,-.4,.4,.25,.4,ct.stone),e.cyl(0,.25,0,.14,.12,.95,8,ct.stone),e.box(-.32,1.2,-.32,.32,1.3,.32,ct.stone),e.box(-.26,1.3,-.26,.26,1.72,.26,wn(ct.stone,1.05)),e.cyl(0,1.72,0,.55,.08,.38,6,wn(ct.stone,.92)),i.lamp.setM(t),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,on),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,on)}function Ku(i,t,e,n=6.2){let s=i.color;s.setM(t);for(let r of[-e,e])s.cyl(0,0,r,.32,.27,n,12,ct.vermilion),s.cyl(0,0,r,.38,.38,.5,12,ct.black);s.box(-.2,n*.78,-e-.6,.2,n*.78+.35,e+.6,ct.vermilion),s.box(-.35,n-.1,-e-1,.35,n+.3,e+1,ct.vermilion),s.box(-.45,n+.3,-e-1.3,.45,n+.6,e+1.3,ct.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,ct.vermilion)}function Vd(i,t,e){let n=i.color;n.setM(t);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,at("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,at("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,at("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,at("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,ct.metal),n.box(1.1,0,.3,1.2,.42,.55,ct.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,ct.metal),i.atlas.setM(t),Wi(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Gi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function Gd(i,t,e,n=1){let s=i.color;s.setM(t);let r=wn(ct.concrete,.85+e()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],l=.55*n;for(let o of a)s.rod([0,l,0],[o[0]*.95*n,l+o[1]*.95*n,o[2]*.95*n],.42*n,.26*n,7,r)}function Wd(i,t){let e=i.color;e.setM(t),i.foliage.setM(t),i.foliage.blob(0,.5,0,6,at("#8f8a80"),at("#55524c"),1,.5),e.cyl(0,2,0,2,1.4,15,14,ct.white);for(let n of[6,11])e.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,ct.red,!1);e.cyl(0,17,0,1.9,1.9,.25,14,ct.black),e.cyl(0,18.6,0,1,.25,1.2,12,ct.red),i.lamp.setM(t),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,on)}function Xd(i,t,e){let n=i.color;n.setM(t);let s=e.pick([at("#f4f4f0"),at("#3b6ea5"),at("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Er(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Er(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,ct.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,ct.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,at("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,ct.metal)}function qd(i,t,e){let n=i.color;n.setM(t),n.box(-.8,0,.6,.8,.5,2,ct.stone),n.box(-.55,.5,.9,.55,1.5,1.8,at("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],at("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],at("#4d5468")),Ku(i,ic(t,0,0,-.3,Math.PI/2),.75,2.2)}var qe=60,Yd=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],Zd=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],ju=32,Bo=[.025,.026,.032],Jd=[.05,.05,.065],qi=(i,t)=>(i%t+t)%t,ds=(i,t)=>{let e=_r(i);return!!e&&Math.abs(i-e.s)<t},Qu=(i,t)=>Math.abs(i-Math.round(i/150)*150)<t,pi=(i,t)=>{let e=di(i);return!!e&&Math.abs(i-e.s)<t},Jn=(i,t)=>{let e=Bi(i);return!!e&&Math.abs(i-e.s)<t},th=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(t,e,n){let s=this.P.length/3;for(let r=0;r<t;r++)for(let a=0;a<e;a++){let l=n(r,a);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<t-1;r++)for(let a=0;a<e-1;a++){let l=s+r*e+a,o=l+1,u=l+e,c=u+1;this.I.push(l,o,u,o,c,u)}}gridN(t,e,n,s=0,r=0){let a=e+s+r,l=new Array(t*a);for(let u=0;u<t;u++)for(let c=0;c<a;c++)l[u*a+c]=n(u,c-s);let o=(u,c)=>l[Math.min(t-1,Math.max(0,u))*a+Math.min(a-1,Math.max(0,c))];for(let u=0;u<t;u++)for(let c=s;c<s+e;c++){let h=o(u,c-1),f=o(u,c+1),p=o(u-1,c),g=o(u+1,c),x=l[u*a+c],m=f[0]-h[0],d=f[1]-h[1],v=f[2]-h[2],S=g[0]-p[0],_=g[1]-p[1],y=g[2]-p[2],b=d*y-v*_,w=v*S-m*y,M=m*_-d*S;w<0&&(b=-b,w=-w,M=-M);let T=Math.hypot(b,w,M)||1;x[3]=b/T,x[4]=w/T,x[5]=M/T}this.grid(t,e,(u,c)=>l[u*a+c+s])}build(){let t=new _e;return t.setAttribute("position",new $t(this.P,3)),t.setAttribute("normal",new $t(this.N,3)),t.setAttribute("su",new $t(this.SU,2)),t.setAttribute("zw",new $t(this.ZW,4)),t.setAttribute("rk",new $t(this.RK,2)),t.setAttribute("rv",new $t(this.RV,1)),t.setAttribute("zs",new $t(this.ZS,1)),t.setIndex(this.I),t.computeBoundingSphere(),t}},sc=class{constructor(t,e,n,s,r){this.path=e,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Ge,t.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(t,e){this.origin.x=t,this.origin.z=e;for(let n of this.chunks.values())n.group.position.set(n.ox-t,0,n.oz-e)}update(t,e){let n=Math.floor((t-this.behind)/qe),s=Math.floor((t+this.ahead)/qe);for(let[a,l]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(l),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let a=this.reveal[0];if(a){let l=a.pending.shift();l&&a.group.add(l),a.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let o=Math.max(0,n);o<=s;o++)if(!this.chunks.has(o)){l=o;break}if(l<0)return 0;l*qe-t<320&&(e=Math.max(e,12)),this.job={c:l,it:this.gen(l)}}let a=this.job.it.next();if(a.done){let l=a.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>e)return 1}}dispose(t){if(this.group.remove(t.group),t.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),t.pending){for(let n of t.pending)n.geometry&&n.geometry.dispose();t.pending.length=0}let e=this.reveal.indexOf(t);e>=0&&this.reveal.splice(e,1)}flush(){for(let t of this.reveal){for(let e of t.pending)t.group.add(e);t.pending.length=0}this.reveal.length=0}*gen(t){let e=this.path,n=t*qe,s=n+qe,r=e.at(n),a=r.x,l=r.z,o=En(Math.floor(Zn(t,777)*4294967295)),u={atlas:new rn({uv:!0}),color:new rn,foliage:new rn,leaf:new rn({uv:!0}),lamp:new rn({color:!1}),sig:new rn({color:!1}),sodium:new rn({color:!1}),decal:new rn({uv:!0}),pool:new rn({uv:!0,color:!1})},c=new th,h=[],f=[],p={},g={},x=(A,P)=>{e.at(A,g);let I=An(A,"rw");return g.y+yr(A,P,g.y,I)},m=A=>{let P=Ie(A);return[P.city,P.sakura,P.coast,P.country,P.snow]},d=(A,P,I)=>(e.at(A,p),[p.x+p.rx*P-a,I,p.z+p.rz*P-l]),v=(A,P,I,L=0,R=!0)=>{e.at(A,p);let D=p.h-Math.PI/2+(R&&P<0?Math.PI:0)+L,F=new qt().makeRotationY(D);return F.setPosition(p.x+p.rx*P-a,I,p.z+p.rz*P-l),F},S=(A,P,I=0,L=0,R=!0)=>v(A,P,x(A,P)+I,L,R),_=A=>e.at(A,g).y,y=A=>An(A,"rw"),b=A=>{let P=Ie(A);return P.city+P.sakura>.5?P.city>=P.sakura?3:2.6:0};{let A=Bi(n+qe/2),P=!!A&&A.s>n-40&&A.s<s+40,I=P?61:21,L=y(n+qe/2),R=(()=>{let Q=[0,...Yd].map(dt=>dt);return Zd.forEach(dt=>Q.push(dt-L)),Q})(),D=[...R.slice().reverse().map(H=>-H),...R],F=D.length,O=Array.from({length:I},(H,Q)=>n+Q/(I-1)*qe);{let H=di(n+qe/2);if(H)for(let Q of[H.s-Xe,H.s+Xe])Q>n+.1&&Q<s-.1&&O.push(Q-.03,Q+.03)}O.sort((H,Q)=>H-Q);let z=F/2,U=O.map(H=>(e.at(H,p),{s:H,f:{...p},rw:y(H),w:m(H),rb:P?td(H):0})),X=Math.round(z/2);for(let[H,Q,dt,Wt]of[[0,X,0,1],[X-1,z,1,0],[z,z+X+1,0,1],[z+X,F,1,0]])c.gridN(U.length,Q-H,(Yt,zt)=>{let Y=U[Yt],it=Y.f,q=H+zt,Nt=D[q],wt=Nt<0||Nt===0&&q<z?Nt-Y.rw:Nt+Y.rw,At=it.y+yr(Y.s,wt,it.y,Y.rw),j=Math.min(1,ql/1.5);return[it.x+it.rx*wt-a,At,it.z+it.rz*wt-l,0,1,0,qi(Y.s,hs),wt,Y.w[0],Y.w[1],Y.w[2],Y.w[3],Y.rw,0,Y.rb>0?Y.rb:-j,Y.w[4]]},dt,Wt),yield}yield,c.grid(31,2,(P,I)=>{let L=n+P/30*qe,R=y(L),D=I?R:-R;e.at(L,p);let F=p.y,O=(_(L+1)-_(L-1))/2,z=-O*p.fx,U=1,X=-O*p.fz,H=Math.hypot(z,U,X),Q=m(L);return[p.x+p.rx*D-a,F,p.z+p.rz*D-l,z/H,U/H,X/H,qi(L,hs),D,Q[0],Q[1],Q[2],Q[3],R,1,0,Q[4]]});{let A=[];for(let L=0;L<=30;L++){let R=n+L/30*qe;A.push({s:R,sw:b(R)})}let P=[],I=null;for(let L of A)L.sw>0?(I||(I=[],P.push(I)),I.push(L)):I=null;for(let L of P)if(!(L.length<2))for(let R of[-1,1])c.grid(L.length,2,(D,F)=>{let{s:O,sw:z}=L[D],U=y(O),X=R*(F===(R>0?0:1)?U:U+z);e.at(O,p);let H=m(O);return[p.x+p.rx*X-a,p.y+.15,p.z+p.rz*X-l,0,1,0,qi(O,hs),X,H[0],H[1],H[2],H[3],U,2,0,H[4]]}),c.grid(L.length,2,(D,F)=>{let{s:O}=L[D],z=y(O),U=R*z,X=R>0?F:1-F;e.at(O,p);let H=m(O);return[p.x+p.rx*U-a,p.y+(X?.15:0),p.z+p.rz*U-l,-R*p.rx,0,-R*p.rz,qi(O,hs),U,H[0],H[1],H[2],H[3],z,3,0,H[4]]})}yield,yield*this.placePoles(t,n,s,o,u,v,x,d,_,y);{let A=Math.ceil((n-Rs)/As),P=vr(A);P<s&&Ao(P)&&(yield*this.placeCrossing(u,c,P,v,_,y,x,b,a,l));let I=Math.ceil((n-Zl)/Ro),L=Bu(I);L<s&&Ou(L)&&(yield*this.placeRiver(u,c,L,v,_,y,x,b,a,l,o,f));let R=di(n+qe/2);R&&R.s+He>n&&R.s-He<s&&(yield*this.placeTunnel(u,c,R,n,s,v,S,x,y,a,l,o))}yield;for(let A=n;A<s;A+=4){let P=ke(A);(P==="coast"&&Ie(A).coast>.45||P==="mountain"&&Ie(A).mountain>.45)&&!pi(A+2,He+4)&&this.guardrail(u,A,Math.min(A+4,s),d,_,y)}yield*this.placeCity(u,o,n,s,v,S,_,y,b,x,c,a,l),yield*this.placeSakura(u,o,n,s,v,S,_,y,x),this.placeCoast(u,o,n,s,v,S,_,y,x,h,d),yield,yield*this.placeCountry(u,o,n,s,v,S,_,y,x),yield*this.placeMountain(u,o,n,s,v,S,_,y,x),yield*this.placeSnow(u,o,n,s,v,S,_,y,x),yield*this.placeVerge(u,o,n,s,v,x,y),yield;let w=new Ge,M=(A,P,I,L,R=0)=>{if(!A)return;let D=new pe(A,P);D.castShadow=I,D.receiveShadow=L,D.renderOrder=R,w.add(D)},T=new Set;for(let A of[n,n+20,n+40,s]){let P=xr(A);T.add(P.a),P.t>0&&T.add(P.b)}if(M(c.build(),Io([...T]),!1,!0),yield,M(u.atlas.build(),this.M.atlas,!0,!0),yield,M(u.color.build(),this.M.color,!0,!0),yield,M(u.foliage.build(),this.M.foliage,!0,!0),M(u.leaf.build(),this.M.leaf,!0,!0),yield,M(u.lamp.build(),this.M.lamp,!1,!1),M(u.sig.build(),this.M.sig,!1,!1),M(u.sodium.build(),this.M.sodium,!1,!1),M(u.decal.build(),this.M.decal,!1,!0,1),M(u.pool.build(),this.M.pool,!1,!1,2),h.length){let A=new _e,P=[],I=[],L=[];h.forEach((R,D)=>{for(let F of R)P.push(F[0],F[1],F[2]),I.push(F[3],F[4]);if(D>0){let F=(D-1)*2;L.push(F,F+2,F+1,F+1,F+2,F+3)}}),A.setAttribute("position",new $t(P,3)),A.setAttribute("su",new $t(I,2)),A.setIndex(L),A.computeBoundingSphere(),M(A,this.foamMat,!1,!1,1)}for(let A of f)M(A,this.riverMat,!1,!0);return w.position.set(a-this.origin.x,0,l-this.origin.z),{group:w,ox:a,oz:l,s0:n}}poleSpec(t){let e=t*ju+6,n=ke(e);if(n==="sakura"||ds(e,6)||Jn(e,34)||pi(e,He+12))return null;let s=An(e,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:e,u:r,z:n}}*placePoles(t,e,n,s,r,a,l,o,u,c){let h=Math.ceil((e-6)/ju),f=Math.floor((n-6-.001)/ju);for(let p=h;p<=f;p++){let g=this.poleSpec(p);if(!g)continue;let x=g.z==="city"?u(g.s)+.15:l(g.s,g.u),m=a(g.s,g.u,x),d=En(Math.floor(Zn(p,31)*4294967295)),v=Wu(r,m,d,{trans:d()<.45});g.z==="city"&&p%2===0&&bd(r,m,-.11),p%2&&(yield);let S=this.poleSpec(p+1);if(S){let _=S.z==="city"?u(S.s)+.15:l(S.s,S.u),y=Md(a(S.s,S.u,_));r.color.setM(new qt);let b=[];for(let w=0;w<v.length;w++){let M=v[w],T=y[w],A=.35+d()*.4+(w>=7?.3:0);b.push(A),r.color.wire([M.x,M.y,M.z],[T.x,T.y,T.z],A,w>=7?.022:.015,Bo,10)}if(g.z!=="coast"&&d()<.38){let w=Math.floor(d()*4),M=v[w],T=y[w],A=1+Math.floor(d()*4),P=.18+d()*.5;for(let I=0;I<A;I++){let L=Math.min(.92,P+I*(.018+d()*.025)),R=M.x+(T.x-M.x)*L,D=M.z+(T.z-M.z)*L,F=M.y+(T.y-M.y)*L-b[w]*4*L*(1-L);r.color.box(R-.07,F+.015,D-.07,R+.07,F+.19,D+.07,Jd),r.color.box(R-.045,F+.19,D-.045,R+.045,F+.27,D+.045,Jd)}}}if(g.z==="city"){r.color.setM(new qt);let _=1+Math.floor(d()*3);for(let y=0;y<_;y++){let b=v[7+y%2],w=(d()-.5)*14,M=c(g.s+w),T=d()<.55,A=T?-(M+3.15):M+3.15,P=o(g.s+w,A,u(g.s+w)+5.2+d()*2.5);r.color.wire([b.x,b.y,b.z],P,.25+d()*.4,.012,Bo,8)}}}}*intersection(t,e,n,s,r,a,l,o,u,c,h){let f=this.path.at(n,{}),p=a(n),g=l(n),x=o(n)||3,m=n-.5,d=Ie(n),v=[d.city,d.sakura,d.coast,d.country],S=(y,b,w)=>[f.x+f.fx*(y-.5)+f.rx*b-c,w,f.z+f.fz*(y-.5)+f.rz*b-h],_=g+x+.15;for(let y of[-1,1]){let b=y*(g+x),w=y*80;u.grid(21,2,(P,I)=>{let L=b+(w-b)*P/20,R=(I?-3:3)*y,D=S(R,L,p+.165);return[D[0],D[1],D[2],0,1,0,R*y,L,v[0],v[1],v[2],v[3],g,10]});{let P=y*(g+x+3.2),I=-y*1.35,L=1.15,R=.42,D=(F,O)=>S(I+y*F,P-y*O,p+.18);t.decal.setM(new qt),t.decal.quad(D(-L,-R),D(L,-R),D(L,R),D(-L,R),[1,1,1],Do("tomare"))}for(let P of[-1,1]){let I=_+15+e()*3;for(;I<52;){let L=e.range(5.5,8.5),R=y*(I+L/2),D=e(),F=r(m+P*3.3,R,p+.14,P>0?Math.PI/2:-Math.PI/2,!1);Xi(t,F,e,{type:D<.5?"house":"shop",w:L,d:e.range(7,10),floors:D<.5?2:e.int(2,3),tint:e.pick(Vi),litP:.45,fence:0}),I+=L+e.range(.2,1.2),yield}yield}let M=[30,54].map(P=>r(m+2.8,y*P,p+.15,-Math.PI/2,!1)),T=En(Math.floor(Zn(s,y>0?71:73)*4294967295)),A=M.map(P=>Wu(t,P,T,{trans:T()<.4}));t.color.setM(new qt);for(let P=0;P<7;P++){let I=A[0][P],L=A[1][P];t.color.wire([I.x,I.y,I.z],[L.x,L.y,L.z],.3+T()*.4,.014,Bo,10)}}$u(t,r(n-9,-(g+.55),p+.15,0,!0),1,g+.55-1.6),$u(t,r(n+8,g+.55,p+.15,0,!0),1,g+.55-1.6),s%3===1&&Fd(t,r(n+15,0,p,0,!1),g+x+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(t,e,n,s,r,a,l,o,u,c){let h=this.path.at(n,{}),f=h.y,p=a(n),g=o(n),x=p+g+.2,m=150,d=f+.18,v=Ie(n),S=[v.city,v.sakura,v.coast,v.country],_=(D,F,O)=>[h.x+h.fx*D+h.rx*F-u,O,h.z+h.fz*D+h.rz*F-c],y=[7.6,4.7,-4.7,-7.6];for(let[D,F]of[[-m,-x],[x,m]])e.grid(25,y.length,(z,U)=>{let X=D+(F-D)*z/24,H=y[U],dt=Math.abs(H)<5?d:Math.min(d-.05,l(n+H,X)-.03),Wt=_(H,X,dt);return[Wt[0],Wt[1],Wt[2],0,1,0,H,X,S[0],S[1],S[2],S[3],p,5]});let b=(D,F,O)=>e.grid(2,2,(z,U)=>{let X=z?F:D,H=U?-3.3:3.3,Q=_(H,X,O);return[Q[0],Q[1],Q[2],0,1,0,H,X,S[0],S[1],S[2],S[3],p,6]});b(-p,p,f+.03),g>0&&(b(-x,-p,f+.165),b(p,x,f+.165));let w=(D,F,O,z)=>e.grid(2,2,(U,X)=>{let H=U?z:O,Q=X?F:D,dt=_(Q,H,f+.025);return[dt[0],dt[1],dt[2],0,1,0,Q,H,S[0],S[1],S[2],S[3],p,7]});w(-7.15,-7.6,-p+.3,-.12),w(7.6,7.15,.12,p-.3),yield;let M=s(n,0,f,-Math.PI/2,!1),T=t.color;T.setM(M);let A=[.42,.4,.38],P=[.3,.29,.28],I=[.55,.57,.6];for(let D of[-2,2])for(let F of[-.5335,.5335]){let O=-(D+F);for(let[z,U]of[[-m,-x],[x,m]])T.box(z,.26,O-.035,U,.34,O+.035,A);T.box(-x,0,O-.035,x,.04,O+.035,P)}let L=[-146,-104,-64,-26,26,64,104,146];for(let D of L){for(let F of[-4.95,4.95])T.box(D-.12,.18,F-.12,D+.12,7.4,F+.12,I);T.box(D-.1,6.95,-5.15,D+.1,7.2,5.15,I);for(let F of[-2,2])T.box(D-.04,6.3,-F-.04,D+.04,6.95,-F+.04,I)}for(let D of[-2,2])for(let F=0;F<L.length-1;F++)T.wire([L[F],5.35,-D],[L[F+1],5.35,-D],.05,.011,Bo,6),T.wire([L[F],6.4,-D],[L[F+1],6.4,-D],.45,.011,Bo,8);yield;let R=Math.round((n-Rs)/As);if(v.country>.9&&Zn(R,17)<.7){let D=Zn(R,19)<.5?-1:1,F=D>0?p+9:-(p+9+46),O=D>0?p+9+46:-(p+9);Bd(t,M,F,O,D*(p+9),Math.abs(R)%4,En(Math.floor(Zn(R,23)*4294967295))),T.setM(M)}yield;for(let D of Kl(this.path,n)){let F=new qt().makeRotationY(D.yaw);F.setPosition(D.x-u,D.y,D.z-c),kd(t,F)}fs(t,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85),fs(t,s(n+70,a(n+70)+.6,r(n+70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(t,e,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n,{}),g=p.y,x=a(n),m=o(n),d=Ie(n),v=[d.city,d.sakura,d.coast,d.country],S=d.sakura>.5,_=222,y=x+m+.5,b=g-Co,w=(R,D,F)=>[p.x+p.fx*R+p.rx*D-u,F,p.z+p.fz*R+p.rz*D-c];{let R=[],D=[],F=[];for(let U=0;U<=74;U++){let X=-_+2*_*U/74;for(let H of[12.5,-12.5]){let Q=w(H,X,b);R.push(Q[0],Q[1],Q[2]),D.push(H,X)}if(U>0){let H=(U-1)*2;F.push(H,H+1,H+2,H+1,H+3,H+2)}}let z=new _e;z.setAttribute("position",new $t(R,3)),z.setAttribute("su",new $t(D,2)),z.setIndex(F),z.computeBoundingSphere(),f.push(z)}for(let[R,D]of[[28.9,25.7],[-25.7,-28.9]])for(let[F,O]of[[-_,-(x+3.4)],[x+3.4,_]])e.grid(41,2,(z,U)=>{let X=F+(O-F)*z/40,H=U?D:R,Q=w(H,X,g+.38);return[Q[0],Q[1],Q[2],0,1,0,H,X,v[0],v[1],v[2],v[3],x,9,1]});yield;let M=s(n,0,g,0,!1),T=t.color,A=[.74,.73,.7],P=S?[.78,.2,.15]:[.55,.72,.64];T.setM(M),T.box(-24.5,-1,-y,24.5,-.03,y,A,null,{noBottom:!1});for(let R of[-1,1])T.box(-24.5,-1.3,R>0?y-.35:-y,24.5,-.95,R>0?y:-y+.35,[.62,.61,.58]);for(let R of[-8,8])T.box(R-.7,-Co-1.4,-y+.6,R+.7,-1,y-.6,A);for(let R of[-25.7,25.7])T.box(R-1.2,-Co+.4,-y-.4,R+1.2,-.05,y+.4,A);let I=m>0?.15:0;for(let R of[-1,1]){let D=R*(y-.14);for(let F=-24;F<=24.01;F+=2)T.box(F-.06,I,D-.06,F+.06,I+1,D+.06,P);T.box(-24,I+.95,D-.08,24,I+1.08,D+.08,P),T.box(-24,I+.48,D-.03,24,I+.54,D+.03,P),T.box(-24,I+.06,D-.03,24,I+.12,D+.03,P)}let L="bridge"+Math.abs(Math.round(n/Ro))%4;for(let R of[-25,25])for(let D of[-1,1]){let F=D*(y-.1),O=[.7,.69,.65];T.box(R-.32,I,F-.32,R+.32,I+1.45,F+.32,O),T.box(R-.38,I+1.45,F-.38,R+.38,I+1.58,F+.38,[.62,.61,.57]),t.atlas.setM(M);let z=(R<0?-1:1)*.325,U=L;R<0?t.atlas.quad([R-.325,I+.3,F-.22],[R-.325,I+.3,F+.22],[R-.325,I+1.3,F+.22],[R-.325,I+1.3,F-.22],[1,1,1],Do(U)):t.atlas.quad([R+.325,I+.3,F+.22],[R+.325,I+.3,F-.22],[R+.325,I+1.3,F-.22],[R+.325,I+1.3,F+.22],[1,1,1],Do(U)),T.setM(M)}No(t,s(n-14,-(y-.45),g+I,0,!0)),No(t,s(n+14,y-.45,g+I,0,!0)),yield;for(let R of[-18,18])for(let D of[-1,1]){yield;for(let F=11+h()*4;F<(S?125:170);F+=S?h.range(8.5,11):h.range(18,34)){let O=n+R+(h()-.5)*1.5,z=D*F;Rn(t,s(O,z,l(O,z),h()*6,!1),S?"sakura":"broad",h,S?h.range(1,1.25):h.range(.9,1.25))}}}*placeTunnel(t,e,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n.s,{}),g=p.y,x=u(n.s),m=x+1.4,d=Ie(n.s),v=[d.city,d.sakura,d.coast,d.country],S=a(n.s,0,g,0,!1),_=t.color,y=Math.max(s,n.s-Xe)-n.s,b=Math.min(r,n.s+Xe)-n.s;if(b>y+.01){let M=Math.max(2,Math.ceil((b-y)/3)+1),T=[-(x+1.5),-x,-x*.5,0,x*.5,x,x+1.5];e.gridN(M,T.length,(O,z)=>{let U=y+(b-y)*O/(M-1),X=n.s+U,H=T[z],Q=g+Jl(U,H);return[p.x+p.fx*U+p.rx*H-c,Q,p.z+p.fz*U+p.rz*H-h,0,1,0,qi(X,hs),H,v[0],v[1],v[2],v[3],x,0,-1]});let A=[[-x,0],[-x,.2],[-m,.2],[-m,3.2]];for(let O=1;O<12;O++){let z=Math.PI*(1-O/12);A.push([m*Math.cos(z),3.2+3*Math.sin(z)])}A.push([m,3.2],[m,.2],[x,.2],[x,0]);let P=[.86,.82,.72],I=[.44,.45,.47],L=[.62,.61,.58],R=[];for(let O=y;O<b-.01;O+=6)R.push(O);R.push(b),_.setM(S);for(let O=0;O<R.length-1;O++)for(let z=0;z<A.length-1;z++){let[U,X]=A[z],[H,Q]=A[z+1],dt=Math.max(X,Q)<=.21?L:Math.abs(U)>m-.01&&Math.abs(H)>m-.01?P:I;_.quad([R[O],X,U],[R[O+1],X,U],[R[O+1],Q,H],[R[O],Q,H],dt)}t.sodium.setM(S),t.sig.setM(S);let D=m*Math.cos(Math.PI/6)-.12,F=3.2+3*Math.sin(Math.PI/6)-.08;for(let O=Math.ceil((y+Xe-3)/6)*6+3-Xe;O<b;O+=6)for(let z of[-1,1])t.sodium.box(O-.45,F-.07,z*D-.13,O+.45,F+.07,z*D+.13,null);for(let O=Math.ceil((y+Xe)/24)*24-Xe;O<b;O+=24)t.sig.box(O-.3,.95,-m+.01,O+.3,1.2,-m+.06,null);for(let O=Math.ceil((y+Xe-30)/60)*60+30-Xe;O<b;O+=60)for(let z of[-1.15,1.15])_.box(O-1.1,5.2,z-.36,O+1.1,5.78,z+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),_.box(O-.08,5.78,z-.05,O+.08,6.15,z+.05,[.4,.4,.42]);yield}for(let M of[-1,1]){let T=n.s+M*Xe,A=M*(Xe+.08);if(T<s||T>=r)continue;let P=[];for(let Q of Yd)Q>=1.44&&P.push(x+Q,-(x+Q));for(let Q of Zd)Q>x+3.5&&Q<x+21&&P.push(Q,-Q);for(let Q=0;Q<=24;Q++)P.push(-m+2*m*Q/24);P.push(-m-.01,m+.01),P.sort((Q,dt)=>Q-dt);let I=Q=>3.2+3*Math.sqrt(Math.max(0,1-(Q/m)**2)),L=Q=>Math.max(o(T-M*.03,Q)-g,Jl(M*(Xe-.03),Q)),R=Q=>Math.abs(Q)<=m+1e-6?I(Q):o(T+M*.03,Q)-g,D=[.78,.77,.73],F=[.66,.65,.62];_.setM(S);for(let Q=0;Q<P.length-1;Q++){let dt=P[Q],Wt=P[Q+1];if(Wt-dt<1e-4)continue;let Yt=L(dt),zt=L(Wt),Y=R(dt),it=R(Wt);Yt-Y<.01&&zt-it<.01||(M<0?_.quad([A,Y,dt],[A,it,Wt],[A,zt,Wt],[A,Yt,dt],D):_.quad([A,it,Wt],[A,Y,dt],[A,Yt,dt],[A,zt,Wt],D))}for(let Q=0;Q<24;Q++){let dt=-m+2*m*Q/24,Wt=-m+2*m*(Q+1)/24,Yt=I(dt),zt=I(Wt),Y=A+M*.02;M<0?_.quad([Y,Yt,dt],[Y,zt,Wt],[Y,zt+.55,Wt*1.08],[Y,Yt+.55,dt*1.08],F):_.quad([Y,zt,Wt],[Y,Yt,dt],[Y,Yt+.55,dt*1.08],[Y,zt+.55,Wt*1.08],F)}t.atlas.setM(S);let O=1.9,z=7.05,U=7.85,X=A+M*.03,H=Do("tunnel"+(d.coast>.5?1:Math.abs(n.k)%2?2:0));M<0?t.atlas.quad([X,z,-O],[X,z,O],[X,U,O],[X,U,-O],[1,1,1],H):t.atlas.quad([X,z,O],[X,z,-O],[X,U,-O],[X,U,O],[1,1,1],H)}yield;let w=d.mountain>.5;for(let M=Math.max(s,n.s-He*.95)+f()*3;M<Math.min(r,n.s+He*.95);M+=f.range(4,8)){let T=Math.abs(M-n.s)>Xe-4?17:4;for(let A of[-1,1]){let P=A*(x+f.range(T,50)),I=f();Rn(t,l(M,P,-.3,f()*6,!1),w?I<.5?"maple":I<.8?"cedar":"ginkgo":I<.65?"pine":"broad",f,f.range(.9,1.3))}}}*placeSnow(t,e,n,s,r,a,l,o,u){let c=h=>Ie(h).snow;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+e()*20;f<s;f+=e.range(22,40)){if(c(f)<.6||e()<.5)continue;let p=h*e.range(18,90);Xi(t,a(f,p,-.3),e,{type:"house",w:e.range(9,12.5),d:e.range(8,10),floors:e()<.5?2:1,tint:e.pick(Vi),litP:.62,fence:0,snow:!0});for(let g=0;g<2+e()*3;g++)Rn(t,a(f+e.range(-9,9),p+h*e.range(7,15),-.3,e()*6,!1),e()<.6?"snowcedar":"birch",e,e.range(.9,1.25))}yield;for(let f=n+e()*5;f<s;f+=e.range(3,7))c(f)<.5||(e()<.32&&Rn(t,a(f,h*e.range(9,40),-.25,e()*6,!1),"birch",e,e.range(.85,1.25)),e()<.55&&Rn(t,a(f,h*e.range(120,205),-.4,e()*6,!1),"snowcedar",e,e.range(1.1,1.6)));yield}for(let h=Math.ceil(n/36)*36;h<s;h+=36){if(c(h)<.55)continue;let f=o(h);Yu(t,r(h,-(f+.95),l(h)+1.3),1),Yu(t,r(h+18,f+.95,l(h+18)+1.3),-1)}}}*placeMountain(t,e,n,s,r,a,l,o,u){let c=h=>Ie(h).mountain;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+e()*4;f<s;f+=e.range(4.5,8.5)){if(c(f)<.45||pi(f,He+6))continue;let p=o(f),g=e();if(h>0){let x=g<.5?"maple":g<.72?"ginkgo":"cedar";Rn(t,a(f,p+e.range(17,70),-.25,e()*6,!1),x,e,e.range(.9,1.3))}else{let x=g<.55?"maple":g<.8?"cedar":"ginkgo";Rn(t,a(f,-(p+e.range(3.5,34)),-.25,e()*6,!1),x,e,e.range(.95,1.35))}}yield}for(let h=n+e()*4;h<s;h+=e.range(3,6)){if(c(h)<.5)continue;let f=e()<.7,p=-(o(h)+(f?e.range(108,205):e.range(36,100)));Rn(t,a(h,p,-.3,e()*6,!1),e()<.5?"cedar":e()<.75?"maple":"ginkgo",e,e.range(1.1,1.6))}yield,t.color.setM(new qt);for(let h=Math.ceil(n/10)*10;h<s;h+=10){if(c(h)<.5||pi(h,He+4))continue;let f=o(h),p=r(h,-(f+.95),l(h));wd(t,p)}for(let h=Math.ceil(n/14)*14;h<s;h+=14){if(c(h)<.6)continue;let f=this.path.curv(h);if(Math.abs(f)<1/230)continue;let p=o(h);f>0?fs(t,r(h,p+.42,l(h)),"chev_l",-1,1.25,.58):fs(t,r(h,-(p+1.15),l(h)),"chev_r",1,1.35,.58)}}}*placeVerge(t,e,n,s,r,a,l){for(let o of[-1,1]){for(let u=n+e()*1.2;u<s;u+=e.range(.55,1.5)){if(ds(u,10)||Jn(u,31)||pi(u,He+4))continue;let c=ke(u),h=l(u),f,p,g=.22,x=1;if(c==="country")f=h+(e()<.6?e.range(.2,.62):e.range(2.18,2.75)),p=.95;else if(c==="sakura")f=h+2.68+e()*1.3,p=.55,g=.3;else if(c==="coast"){if(o<0)continue;f=h+.95+e()*1.7,p=.75,g=.18}else{if(c==="snow")continue;if(c==="mountain")f=o<0?h+1+e()*.35:h+.25+e()*.2,p=o<0?.55:.18,g=.12,x=.85;else{if(Qu(u,5))continue;f=h+3.02+e()*.1,p=.1,g=.08,x=.65}}if(e()>p)continue;let m=o*f;Cd(t,r(u,m,a(u,m),e()*6.28,!1),e,e()<g?"flowers":"grass",x*e.range(.8,1.2))}yield}}guardrail(t,e,n,s,r,a){t.color.setM(new qt);let l=Math.max(1,Math.round((n-e)/2));for(let o=0;o<l;o++){let u=e+(n-e)*o/l,c=e+(n-e)*(o+1)/l,h=-(a(u)+.95),f=-(a(c)+.95),p=r(u),g=r(c),x=(y,b,w)=>s(y,b,w),m=x(u,h,p+.52),d=x(c,f,g+.52),v=x(u,h,p+.84),S=x(c,f,g+.84);t.color.quad(m,d,S,v,ct.rail),t.color.quad(d,m,v,S,[.62,.64,.66]);let _=s(u,h-.05,p);t.color.box(_[0]-.05,p,_[2]-.05,_[0]+.05,p+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(t,e,n,s,r,a,l,o,u,c,h,f,p){for(let m of[-1,1]){let d=n+e()*2;for(;d<s-2;){{let L=Ie(d);if(L.city<.62||L.mountain>.1){d+=4;continue}}{let L=_r(d+6);if(L&&d<L.s+8.5&&d+14>L.s-8.5){d=Math.max(d+1,L.s+8.5);continue}}let v=qi(d,150);if(v>145.6||v<3.4){d+=1;continue}let S=o(d),_=u(d)||3,y=S+_+.15,b=e(),w=b<.42?"shop":b<.58?"apt":b<.68?"office":b<.82?"house":b<.88?"konbini":b<.94?"parking":"gap",M=w==="shop"?e.range(5,9):w==="apt"?e.range(10,16):w==="office"?e.range(10,14):w==="house"?e.range(7,9.5):w==="konbini"?e.range(12,14):w==="parking"?e.range(7,11):e.range(2,3.5);if(d+M>s){if(s-d<5||w==="konbini")break;M=s-d-.2}{let L=Math.ceil((d+4.4)/150)*150-4.4;if(d+M>L-.1){if(L-.1-d<4){d=L+7.9;continue}M=L-.1-d}}let T=d+M/2,A=l(T),P=e.pick(Vi),I=.42;if(w==="parking"){let L=r(T,m*(y+3),A+.15);e()<.8&&Ud(t,ic(L,0,0,.5,(e()-.5)*.1),e),t.color.setM(L),t.color.box(-M/2,0,5.5,M/2,1.6,5.7,ct.concrete)}else if(w!=="gap"){let L=r(T,m*y,A+.15),R={type:w,w:M,d:w==="apt"||w==="office"?e.range(10,14):e.range(8,12),floors:w==="shop"?e.int(2,4):w==="apt"?e.int(4,9):w==="office"?e.int(4,8):2,tint:P,litP:I,fence:w==="house"&&e()<.5?1.2:0};if(Xi(t,L,e,R),w!=="house"&&e()<.28&&qu(t,r(T+(e()-.5)*(M-1.2),m*(y-.42),A+.15),e),(w==="shop"||w==="konbini")&&e()<.3)for(let D=0;D<1+e()*3;D++)Sd(t,r(T-M/2+.8+D*.55,m*(y-.75),A+.15,Math.PI/2+.1),e);if(w==="house"&&e()<.6)for(let D=0;D<2+e()*3;D++)Ed(t,r(T+1+D*.5,m*(y-.3),A+.15),e);if(e()<.03)for(let D=0;D<3;D++)Td(t,r(T+D*.9,m*(S+.35),A))}d+=M+e.range(.05,.5),yield}for(let v=n+e()*10;v<s-8;v+=e.range(14,26)){if(Ie(v).city<.7||Ie(v).mountain>.1||e()<.3||ds(v,18)||Qu(v,15))continue;let S=o(v),_=r(v,m*(S+3.2+e.range(14,20)),l(v)+.1);Xi(t,_,e,{type:e()<.6?"apt":"office",w:e.range(12,18),d:12,floors:e.int(6,11),tint:e.pick(Vi),litP:.4})}if(Ie(n+30).city>.7&&Ie(n+30).mountain<.1&&e()<.65){let v=n+e()*qe;if(ds(v,24)||Qu(v,20))continue;let S=r(v,m*e.range(55,150),l(v));Xi(t,S,e,{type:"tower",w:e.range(16,26),d:e.range(16,22),floors:e.int(12,26),tint:e.pick(Vi),litP:.45})}}let g=Math.ceil(n/150),x=Math.floor((s-.01)/150);for(let m=g;m<=x;m++){let d=m*150;if(ke(d)!=="city"||Ie(d).mountain>.1)continue;let v=o(d);yield*this.intersection(t,e,d,m,r,l,o,u,h,f,p),fs(t,r(d-1,-(v+.4),l(d)+.15),"sign_blue",1),fs(t,r(d-6,-(v+.4),l(d)+.15),"sign_stop",1,2.1,.75),Zu(t,r(d+7,v+.4,l(d)+.15),-1),m%3===0&&fs(t,r(d+20,-(v+.4),l(d)+.15),"sign_speed",1)}}*placeSakura(t,e,n,s,r,a,l,o,u){for(let f of[-1,1]){for(let p=n+e()*4;p<s;p+=e.range(7.5,10)){if(Ie(p).sakura<.45||Jn(p,30))continue;let g=o(p);Rn(t,a(p,f*(g+3.7),0,e()*6),"sakura",e,e.range(1.05,1.3)),e()<.45&&Rn(t,a(p+3,f*(g+e.range(9,18)),0,e()*6),"sakura",e,e.range(.9,1.25))}yield;for(let p=n+(f>0?0:12);p<s;p+=24){if(ke(p)!=="sakura"||Jn(p,30))continue;let g=o(p);No(t,r(p,f*(g+2.25),l(p)+.15)),qi(p,48)<24&&Hd(t,r(p+6,f*(g+3),u(p+6,f*(g+3))))}for(let p=n+e()*15;p<s;p+=e.range(14,24)){if(ke(p)!=="sakura"||e()<.35||Jn(p,45))continue;let g=o(p);Xi(t,a(p,f*(g+e.range(20,30))),e,{type:"house",w:e.range(8,11),d:e.range(7,9),floors:e()<.6?2:1,tint:e.pick(Vi),litP:.45,fence:e()<.6?1.4:0})}}let h=Math.floor((n+qe/2)/480)*480+240;h>=n&&h<s&&ke(h)==="sakura"&&!Jn(h,60)&&Ku(t,r(h,0,l(h),0,!1),o(h)+1.6,6.4)}placeCoast(t,e,n,s,r,a,l,o,u,c,h){for(let g=0;g<=20;g++){let x=n+g/20*qe;if(Ie(x).coast<.85||pi(x,He*1.25)){c.length&&c[c.length-1]!==null&&c.push(null);continue}let d=o(x),v=d+11,S=d+19,_=h(x,-v,us+.06),y=h(x,-S,us+.06);c.push([[_[0],_[1],_[2],qi(x,hs),0],[y[0],y[1],y[2],qi(x,hs),1]])}let f=c.indexOf(null);f>=0&&(c.length=f),c.length<2&&(c.length=0);for(let g=n+e()*6;g<s;g+=e.range(5,9)){if(ke(g)!=="coast"||pi(g,He+6))continue;let x=o(g);e()<.7&&Rn(t,a(g,x+e.range(3.5,26),0,e()*6,!1),"pine",e,e.range(.9,1.3)),e()<.2&&Rn(t,a(g+2,-(x+e.range(3.5,7)),0,e()*6,!1),"pine",e,e.range(.8,1.1))}for(let g=n+4;g<s;g+=e.range(18,30)){if(ke(g)!=="coast"||e()<.4||pi(g,He*1.4))continue;let x=o(g),m=3+Math.floor(e()*5);for(let d=0;d<m;d++){let v=-(x+e.range(12,17)),S=g+e.range(-3,3);Gd(t,r(S,v,Math.max(u(S,v),us-.4)+e.range(-.2,.4),e()*6),e,e.range(.9,1.2))}}for(let g=n+12;g<s;g+=48){if(ke(g)!=="coast"||pi(g,He+4))continue;let x=o(g);Xu(t,a(g,x+1),e)}if(ke(n+30)==="coast"&&e()<.5){let g=n+e()*qe,x=o(g);pi(g,He+25)||Xi(t,a(g,x+e.range(9,16)),e,{type:"house",w:e.range(7,10),d:8,floors:e()<.5?2:1,tint:e.pick(Vi),litP:.5,fence:0})}if(ke(n+30)==="coast"&&e()<.55){let g=n+e()*qe;Xd(t,r(g,-(o(g)+e.range(45,220)),us-.25,e()*6,!1),e)}let p=Math.floor((n+qe/2)/1500)*1500+700;p>=n&&p<s&&ke(p)==="coast"&&!pi(p,He*1.6)&&Wd(t,r(p,-(o(p)+75),us-1,0,!1))}*placeCountry(t,e,n,s,r,a,l,o,u){for(let g of[-1,1]){yield;for(let x=n+e()*20;x<s;x+=e.range(20,40)){if(ke(x)!=="country"||e()<.55||ds(x,16)||Jn(x,48))continue;let m=g*e.range(16,95),d=a(x,m);Xi(t,d,e,{type:"house",w:e.range(9,13),d:e.range(8,10),floors:e()<.45?2:1,tint:e.pick(Vi),litP:.5,fence:0});for(let v=0;v<2+e()*3;v++){let S=m+g*e.range(6,14),_=x+e.range(-8,8);Rn(t,a(_,S,0,e()*6),"broad",e,e.range(.9,1.3))}}for(let x=n+e()*8;x<s;x+=e.range(5,9)){if(ke(x)!=="country"||ds(x,7)||Jn(x,36))continue;let m=g*e.range(140,210);Rn(t,a(x,m,-.3,e()*6,!1),"cedar",e,e.range(.9,1.4)),e()<.12&&!ds(x+2,8)&&!Jn(x+2,34)&&Rn(t,a(x+2,g*e.range(10,130),0,e()*6),"broad",e,e.range(.8,1.2))}}let c=Math.floor((n+qe/2)/600)*600+300;if(c>=n&&c<s&&ke(c)==="country"&&!Jn(c,40)){let g=o(c);Vd(t,r(c,-(g+1.6),l(c)-.08),e)}let h=Math.floor((n+qe/2)/700)*700+120;if(h>=n&&h<s&&ke(h)==="country"&&!Jn(h,40)){let g=o(h);qu(t,r(h,-(g+.95),l(h)-.08),e),Xu(t,r(h+2,-(g+.8),l(h)-.08),e)}let f=Math.floor((n+qe/2)/900)*900+450;if(f>=n&&f<s&&ke(f)==="country"&&!Jn(f,40)){let g=o(f);qd(t,a(f,g+5),e)}let p=Math.floor((n+qe/2)/380)*380+190;if(p>=n&&p<s&&ke(p)==="country"&&!Jn(p,40)&&!ds(p,30)){let g=o(p),x=(Zn(Math.round(p),5)<.5?-1:1)*(g+2.75);zd(t,a(p,x,0))}for(let g=n;g<s;g+=30){if(ke(g)!=="country")continue;let x=this.path.curv(g);if(Math.abs(x)>1/450&&e()<.5){let m=x>0?-1:1,d=o(g);Zu(t,a(g,m*(d+.75)),m>0?-1:1)}}}};var rc=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#5a4c84","#9fb0ff",.45,"#4a4a88","#2a2030",1,"#4a4478","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#2468d8","#c2e0ff","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#c6ddf2","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.8,"#1f2466","#9a6a9a","#c06a8a",.6,"#5a5a9a","#3a3048",1,"#5e4c84","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(t=>typeof t=="string"?new xt(t):t)),ht={zenith:new xt,horizon:new xt,sunCol:new xt,sunI:1,hemiSky:new xt,hemiGround:new xt,hemiI:1,fog:new xt,cLit:new xt,cShade:new xt,cRim:new xt,night:0,warm:0,overcast:0,rain:0,sunDir:new B,moonDir:new B,lightDir:new B,sunEl:0};function Kd(i){let t=0;for(;t<rc.length-2&&rc[t+1][0]<=i;)t++;let e=rc[t],n=rc[t+1],s=Wl(Ze((i-e[0])/(n[0]-e[0]),0,1)),r=(o,u)=>u.copy(e[o]).lerp(n[o],s);r(1,ht.zenith),r(2,ht.horizon),r(3,ht.sunCol),ht.sunI=Re(e[4],n[4],s),r(5,ht.hemiSky),r(6,ht.hemiGround),ht.hemiI=Re(e[7],n[7],s),r(8,ht.fog),r(9,ht.cLit),r(10,ht.cShade),r(11,ht.cRim),ht.night=Re(e[12],n[12],s),ht.warm=Re(e[13],n[13],s);let a=Math.sin((i-.25)*Math.PI*2)*1.08,l=(i-.25)*Math.PI+.9;ht.sunEl=a,ht.sunDir.set(Math.cos(a)*Math.sin(l),Math.sin(a),Math.cos(a)*Math.cos(l)).normalize(),ht.moonDir.set(-ht.sunDir.x,Math.abs(Math.sin(a))*.8+.25,-ht.sunDir.z).normalize(),ht.lightDir.copy(ht.sunDir),a<.08&&ht.lightDir.lerpVectors(ht.moonDir,ht.sunDir,Ze((a+.12)/.2,0,1)).normalize(),ht.lightDir.y<.12&&(ht.lightDir.y=.12,ht.lightDir.normalize())}var $d={zenith:[new xt("#7b8594"),new xt("#141a28")],horizon:[new xt("#b5bcc6"),new xt("#283042")],fog:[new xt("#a8b0ba"),new xt("#232b3c")],hemiSky:[new xt("#aab3bf"),new xt("#3c4866")],hemiGround:[new xt("#8b8983"),new xt("#1e2030")],cLit:[new xt("#d0d5dc"),new xt("#2c3240")],cShade:[new xt("#7c8593"),new xt("#151922")]},eh=new xt;function jd(i,t){if(ht.overcast=i,ht.rain=t,i<=.001)return;let e=ht.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])eh.copy($d[n][0]).lerp($d[n][1],e),ht[n].lerp(eh,i*(n==="cLit"||n==="cShade"?.75:.85));ht.sunI*=1-.82*i,ht.warm*=1-i,ht.cRim.multiplyScalar(1-i),ht.sunCol.lerp(eh.setRGB(.85,.87,.9),i*.6)}function Qd(){let i=new ye({side:gn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ht.zenith},uHorizon:{value:ht.horizon},uSunDir:{value:ht.sunDir},uMoonDir:{value:ht.moonDir},uNoiseTex:le.uNoiseTex,uSunCol:{value:ht.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new xt},uOvercast:{value:0},uDeckLit:{value:new xt},uDeckDark:{value:new xt},uMilky:{value:0},uMetA:{value:new B(0,1,0)},uMetB:{value:new B(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP;
      varying vec3 vDir;
      ${Oi}
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
      }`}),t=new pe(new oo(5e3,48,24),i);return t.renderOrder=1e3,t.frustumCulled=!1,t}function H_(i,t){let e=[],s=t?.6:.88,r=(i()-.5)*.04,a=t?6:9;for(let d=0;d<a;d++){let v=.06+i()*.05;e.push([(d/(a-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let l=t?6:2,o=s*.82,u=.1+.09;for(let d=0;d<l;d++){let v=Math.max(1,Math.round(o/.11));for(let S=0;S<v;S++){let _=(v===1?0:S/(v-1)-.5)*o+(i()-.5)*.05+r*d;e.push([_,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(t?1.25:1)])}u+=t?.115:.075,o*=t?.8:.66}let c=e.slice();for(let d of c){if(e.length>92)break;let v=1+Math.floor(i()*2);for(let S=0;S<v;S++){let _=.35+i()*2.4,y=d[3]*(.35+i()*.2);e.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,y])}}let h=e.slice(0,96),f=1e9,p=-1e9,g=-1e9;for(let d of h)f=Math.min(f,d[0]-d[3]*1.12),p=Math.max(p,d[0]+d[3]*1.12),g=Math.max(g,d[1]+d[3]*1.12);let x=Math.min(1,.92/(p-f),(.95-.1)/(g-.1)),m=(f+p)/2;for(let d of h)d[0]=(d[0]-m)*x,d[1]=.1+(d[1]-.1)*x,d[3]*=x;return h}function tp(i){let e={value:Array.from({length:96},()=>new Le)},n=new ye({uniforms:{uP:e,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:le.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Oi}
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
      }`,depthTest:!1,depthWrite:!1,blending:Fn}),s=new pe(new Qe(1,1),n),r=new _s,a=new ys;r.add(s);let l=new Be(1024*2,1024*2,{generateMipmaps:!0,minFilter:Bn,magFilter:Ye}),o=i.getRenderTarget(),u=i.autoClear,c=En(99);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let p=f%2===0,g=H_(c,p);g.forEach((x,m)=>e.value[m].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=g.length,n.uniforms.uSeed.value=f*13.7,l.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(l),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:p})}return l.viewport.set(0,0,1024*2,1024*2),i.autoClear=u,i.setRenderTarget(o),n.dispose(),s.geometry.dispose(),{tex:l.texture,kinds:h,rt:l}}function ep(i){let t=En(5),e=22,n=[],s=new Qe(1,1);s.translate(0,.5,0);let r=new In(new Float32Array(e*4),4),a=new In(new Float32Array(e),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let l=new ye({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:ht.cLit},uShade:{value:ht.cShade},uRim:{value:ht.cRim},uHaze:{value:ht.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),o=new Ui(s,l,e);o.frustumCulled=!1,o.renderOrder=-5;for(let g=0;g<e;g++){let x=g<12,m=i.kinds[(g*3+(x?0:1))%i.kinds.length],d=x?m.tall?t.range(900,1500):t.range(1100,1700):t.range(380,700);n.push({phi:g/e*Math.PI*2+t.range(-.15,.15),d:x?t.range(2600,3400):t.range(1300,2200),base:x?t.range(-60,60):t.range(260,700),size:d,cell:m.cell,haze:x?.45:.18})}let u=new qt,c=new cn,h=new B,f=new B,p=new B(0,1,0);return{group:o,update(g,x){let m=Math.atan2(ht.lightDir.x,ht.lightDir.z);for(let v of n)v.phi+=x*1.2/v.d;n.slice().sort((v,S)=>S.d-v.d).forEach((v,S)=>{h.set(g.x+Math.sin(v.phi)*v.d,g.y+v.base,g.z+Math.cos(v.phi)*v.d),c.setFromAxisAngle(p,v.phi+Math.PI),f.set(v.size,v.size,1),u.compose(h,c,f),o.setMatrixAt(S,u);let _=m-v.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let y=Math.max(0,Math.min(1,(_+.35)/.7)),b=1-y*y*(3-2*y);r.setXYZW(S,v.cell[0],v.cell[1],b,v.haze),a.setX(S,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+ht.warm))}),o.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,l.uniforms.uOpacity.value=(1-ht.night*.35)*(1-ht.overcast*.55)}}}function np(){let i=new Ge;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((e,n)=>{let r=[],a=[],l=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,p=Math.sin(f)*e.R,g=Math.cos(f)*e.R,x=Xl(h/360*e.k*4,40+n*9),m=Math.pow(Math.max(0,x-.18)/.82,1.6),d=e.h*(.12+m);if(r.push(p,-60,g,p,-60+d,g),a.push(0,h/360,1,h/360),h<360){let v=h*2;l.push(v,v+1,v+2,v+1,v+3,v+2)}}let o=new _e;o.setAttribute("position",new $t(r,3)),o.setAttribute("hf",new $t(a,2)),o.setIndex(l);let u=new ye({side:hn,fog:!1,uniforms:{uCol:{value:new xt(e.col)},uHaze:{value:ht.fog},uHazeK:{value:e.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:le.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Oi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),c=new pe(o,u);c.frustumCulled=!1,c.renderOrder=999,i.add(c)}),{group:i,update(e,n=0){i.position.set(e.x,0,e.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-ht.night))*(1-.35*ht.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var wr={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function ip(i){let t=i.get("weather"),e={mode:wr[t]?t:"auto",kind:wr[t]?t:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return wr[t]&&(e.ov=wr[t][0],e.rain=wr[t][1]),{W:e,update(n){if(e.t+=n,e.mode==="auto"&&e.t>e.next){e.t=0,e.next=150+Math.random()*260;let l=Math.random();e.kind=e.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":e.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=wr[e.kind];e.ov+=Ze(s-e.ov,-n/28,n/28);let a=e.ov>.75?r:0;e.rain+=Ze(a-e.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return e.mode=n[(n.indexOf(e.mode)+1)%n.length],e.mode!=="auto"?e.kind=e.mode:e.t=0,e.mode}}}function sp(){let t=new B(42,22,42),e=new Qe(1,1),n=new ar;n.index=e.index,n.setAttribute("position",e.attributes.position),n.setAttribute("uv",e.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new In(s,4)),n.instanceCount=2400;let r=new ye({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new B},uAmt:{value:0},uBox:{value:t},uCol:{value:new xt(1,1,1)}},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv;
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
        vA = (1.0 - smoothstep(9.0, 21.0, d)) * smoothstep(0.5, 1.6, d);
        gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
      }`,fragmentShader:`
      uniform vec3 uCol; varying float vA; varying vec2 vUv;
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),a=new pe(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.62+.38*c,.66+.34*c,.78+.22*c)}}}function rp(){let t=new B(46,24,46),e=new Qe(1,1);e.translate(0,.5,0);let n=new ar;n.index=e.index,n.setAttribute("position",e.attributes.position),n.setAttribute("uv",e.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new In(s,4)),n.instanceCount=2600;let r=new ye({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new B},uRain:{value:0},uBox:{value:t},uCol:{value:new xt(.8,.85,.95)}},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv;
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
        vA = (1.0 - smoothstep(6.0, 23.0, d)) * smoothstep(0.6, 2.0, d);
        gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
      }`,fragmentShader:`
      uniform vec3 uCol; varying float vA; varying vec2 vUv;
      void main(){ gl_FragColor = vec4(uCol, vA * 0.32 * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new pe(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.55+.35*c,.6+.35*c,.7+.3*c)}}}var Ar=72;function V_(){let i=[],t=[],e=(s,r,a,l,o,u)=>{i.push(...s,...r,...a),t.push(l,o,u)};e([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),e([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),e([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),e([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])e([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),e([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),e([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new _e;return n.setAttribute("position",new $t(i,3)),n.setAttribute("aWing",new $t(t,1)),n}function op(){let i=V_(),t=new In(new Float32Array(Ar*3),3),e=new In(new Float32Array(Ar*2),2);i.setAttribute("aCol",t),i.setAttribute("aFlap",e);let n=new ye({side:hn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ht.fog},uFogD:{value:.002},uCam:{value:new B}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Ui(i,n,Ar);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},l=new qt,o=new cn,u=new Un(0,0,0,"YXZ"),c=new B,h=new B,f=()=>r.reduce((x,m)=>x+m.birds.length,0);function p(x,m,d,v){let S=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(f()+S>Ar)return;let _=45+Math.random()*85,y=(Math.random()-.5)*120,b=Math.random()<.5?1:-1,w=new B().copy(m).addScaledVector(d,_).addScaledVector(v,y-b*75);w.y=m.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let M=x==="small"?11+Math.random()*4:8+Math.random()*3,T=new B().copy(v).multiplyScalar(b*M).addScaledVector(d,(Math.random()-.3)*M*.6),A=x==="small"?.8:1.45,P=Array.from({length:S},(I,L)=>({off:new B((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:w,vel:T,birds:P,size:A,life:60})}function g(x,m,d,v){if(r.some(y=>y.kind==="gull")||f()+4>Ar)return;let S=new B().copy(x).addScaledVector(m,70).addScaledVector(d,-v*45);S.y=x.y+18;let _=Array.from({length:4},(y,b)=>({off:new B,ph:Math.random()*6.28,fq:5.5,w:b/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:S,vel:new B,birds:_,size:1.25,life:1e9})}return{mesh:s,update(x,m,d,v,S,_,y,b,w){n.uniforms.uTime.value=m,n.uniforms.uCam.value.copy(d);let M=y>.35&&b<.3,T=ht.warm>.25&&ht.sunEl<.6&&y>.2;M&&(a.small-=x)<0&&(a.small=22+Math.random()*35,_.coast<.6&&p("small",d,v,S)),(T||M&&_.city+_.country>.6&&Math.random()<4e-4)&&(a.crow-=x)<0&&(a.crow=T?14+Math.random()*18:60,p("crow",d,v,S)),_.coast>.6&&M&&g(d,v,S,1);let A=[.1+.08*y,.11+.09*y,.15+.1*y],P=0;for(let I=r.length-1;I>=0;I--){let L=r[I];if(L.kind==="gull"?(L.c.lerp(c.copy(w).addScaledVector(v,60).addScaledVector(S,-42).setY(w.y+16),Math.min(1,x*.25)),(_.coast<.4||!M)&&(L.life=Math.min(L.life,8),L.c.y+=x*6)):L.c.addScaledVector(L.vel,x),L.life-=x,L.life<0||L.kind!=="gull"&&L.c.distanceTo(d)>300){r.splice(I,1);continue}for(let R of L.birds){if(P>=Ar)break;let D,F,O,z;L.kind==="gull"?(R.w+=x*(14/R.r),D=L.c.x+Math.cos(R.w)*R.r,O=L.c.z+Math.sin(R.w)*R.r,F=L.c.y+R.h+Math.sin(m*.4+R.ph)*2,z=Math.atan2(-Math.sin(R.w),Math.cos(R.w))):(D=L.c.x+R.off.x+Math.sin(m*.7+R.ph)*1.2,F=L.c.y+R.off.y+Math.sin(m*1.1+R.ph)*.6,O=L.c.z+R.off.z,z=Math.atan2(L.vel.x,L.vel.z)),u.set(0,z,Math.sin(m+R.ph)*.15),o.setFromEuler(u),h.setScalar(L.size),l.compose(c.set(D,F,O),o,h),s.setMatrixAt(P,l);let U=L.kind==="gull"?[.92*(.5+.5*y),.93*(.5+.5*y),.95*(.5+.5*y)]:L.kind==="crow"?[.05,.05,.07]:A;t.setXYZ(P,U[0],U[1],U[2]),e.setXY(P,R.fq,R.ph),P++}}s.count=P,s.instanceMatrix.needsUpdate=!0,t.needsUpdate=!0,e.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,m){for(let d of r)d.c.x-=x,d.c.z-=m}}}function ap(){let i=new ye({fog:!1,uniforms:{uNoiseTex:le.uNoiseTex,uTime:{value:0},uCam:{value:new B},uSunDir:{value:ht.lightDir},uSunCol:{value:ht.sunCol},uHorizon:{value:ht.horizon},uZenith:{value:ht.zenith},uFog:{value:ht.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${Oi}
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
      }`}),t=new pe(new Qe(14e3,14e3),i);return t.rotation.x=-Math.PI/2,t.position.y=us,t.renderOrder=998,t.frustumCulled=!1,{mesh:t,update(e,n,s,r=1){t.position.x=e.x,t.position.z=e.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(e),i.uniforms.uNight.value=ht.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ht.overcast*.85}}}function lp(){return new ye({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new xt(1,1,1)},uNoiseTex:le.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${Oi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function cp(){return new ye({fog:!1,uniforms:{uNoiseTex:le.uNoiseTex,uTime:{value:0},uSunDir:{value:ht.lightDir},uSunCol:{value:ht.sunCol},uHorizon:{value:ht.horizon},uZenith:{value:ht.zenith},uFog:{value:ht.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
        float edge = smoothstep(9.5, 11.5, abs(vSU.x));               // a little foam where it meets the banks
        col = mix(col, vec3(0.85, 0.9, 0.92) * (1.0 - 0.7 * uNight), edge * 0.35 * vnoise(vec2(vSU.y * 0.5 - uTime, vSU.x)));
        float fd = dist * uFogD;
        gl_FragColor = vec4(mix(col, uFog, 1.0 - exp(-fd * fd)), 1.0);
      }`})}var Oo=new B;function ni(i,t,e,n,s,r){let a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;Oo.copy(t),Oo[n]=0,Oo.normalize();let u=.5*a/(a+l),c=1-Oo.angleTo(i)/o;return Math.sign(Oo[e])===1?c*u:l/(a+l)+u+u*(1-c)}var wi=class i extends ci{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let o=new B,u=new B,c=new B(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,x=new B,m=.5/a;for(let d=0,v=0;d<h.length;d+=3,v+=2)switch(o.fromArray(h,d),u.copy(o),u.x-=Math.sign(u.x)*m,u.y-=Math.sign(u.y)*m,u.z-=Math.sign(u.z)*m,u.normalize(),h[d+0]=c.x*Math.sign(o.x)+u.x*r,h[d+1]=c.y*Math.sign(o.y)+u.y*r,h[d+2]=c.z*Math.sign(o.z)+u.z*r,f[d+0]=u.x,f[d+1]=u.y,f[d+2]=u.z,Math.floor(d/g)){case 0:x.set(1,0,0),p[v+0]=ni(x,u,"z","y",r,n),p[v+1]=1-ni(x,u,"y","z",r,e);break;case 1:x.set(-1,0,0),p[v+0]=1-ni(x,u,"z","y",r,n),p[v+1]=1-ni(x,u,"y","z",r,e);break;case 2:x.set(0,1,0),p[v+0]=1-ni(x,u,"x","z",r,t),p[v+1]=ni(x,u,"z","x",r,n);break;case 3:x.set(0,-1,0),p[v+0]=1-ni(x,u,"x","z",r,t),p[v+1]=1-ni(x,u,"z","x",r,n);break;case 4:x.set(0,0,1),p[v+0]=1-ni(x,u,"x","y",r,t),p[v+1]=1-ni(x,u,"y","x",r,e);break;case 5:x.set(0,0,-1),p[v+0]=ni(x,u,"x","y",r,t),p[v+1]=1-ni(x,u,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function hp(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,o=new _e,u=0;for(let c=0;c<i.length;++c){let h=i[c],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(u,p,c),u+=p}}if(e){let c=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=i[f].attributes.position.count}o.setIndex(h)}for(let c in r){let h=up(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,h)}for(let c in a){let h=a[c][0].length;if(h!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<a[c].length;++x)p.push(a[c][x][f]);let g=up(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(g)}}}return o}function up(i){let t,e,n,s=-1,r=0;for(let u=0;u<i.length;++u){let c=i[u];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}let a=new t(r),l=new We(a,e,n),o=0;for(let u=0;u<i.length;++u){let c=i[u];if(c.isInterleavedBufferAttribute){let h=o/e;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<e;g++){let x=c.getComponent(f,g);l.setComponent(f+h,g,x)}}else a.set(c.array,o);o+=c.count*e}return s!==void 0&&(l.gpuType=s),l}function G_(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#f2cf3a",t.fillRect(0,0,256,128),t.strokeStyle="#2f5a2f",t.lineWidth=6,t.strokeRect(5,5,246,118);let e='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';t.fillStyle="#2f5a2f",t.textAlign="center",t.textBaseline="middle",t.font=`700 30px ${e}`,t.fillText("\u54C1\u5DDD 580",128,34),t.font=`800 58px ${e}`,t.fillText("\u3042 12-34",128,86);let n=new Xn(i);return n.colorSpace=ze,n}function W_(){let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#9fbfe6"),e.addColorStop(.45,"#4a6690"),e.addColorStop(1,"#1d2638"),t.fillStyle=e,t.fillRect(0,0,64,128),t.fillStyle="rgba(255,255,255,0.35)",t.beginPath(),t.moveTo(20,0),t.lineTo(34,0),t.lineTo(10,128),t.lineTo(-4,128),t.fill();let n=new Xn(i);return n.colorSpace=ze,n}function fp(){let i=new Ge,t=(b,w={})=>br(new un({color:b,gradientMap:ei,...w})),e=t("#9fd8c8"),n=t("#e9e7e0"),s=t("#2a2c33"),r=t("#1b1c20"),a=t("#c8ccd2"),l=br(new un({color:"#ffffff",map:W_(),gradientMap:ei})),o=new un({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:ei}),u=new un({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:ei}),c=new je({map:G_()}),h=new Map,f=new qt,p=new Un,g=new cn,x=new B(1,1,1),m=(b,w,M,T,A,P=0,I=0,L=0)=>{let R=b.index?b.toNonIndexed():b;p.set(P,I,L),g.setFromEuler(p),f.compose(new B(M,T,A),g,x),R.applyMatrix4(f),h.has(w)||h.set(w,[]),h.get(w).push(R)};m(new wi(1.48,.86,3.38,4,.15),e,0,.77,0),m(new wi(1.42,.66,2.6,4,.17),e,0,1.5,-.25),m(new wi(1.38,.09,2.5,3,.04),n,0,1.84,-.25),m(new Qe(1.16,.5),l,0,1.53,-1.556,0,Math.PI,0);for(let b of[-1,1])m(new Qe(2.25,.46),l,b*.712,1.54,-.2,0,b*Math.PI/2,0),m(new wi(.1,.12,.2,2,.04),e,b*.82,1.2,.95),m(new wi(.14,.48,.08,2,.035),o,b*.64,1,-1.67),m(new wi(.12,.08,.06,2,.02),u,b*.64,.7,-1.67);m(new Qe(1.2,.52),l,0,1.52,1.056,-.12,0,0),m(new wi(1.52,.22,.22,2,.07),s,0,.42,-1.62),m(new ci(.24,.04,.05),s,0,.84,-1.69),m(new Qe(.34,.17),c,0,.72,-1.7,0,Math.PI,0);for(let[b,w]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])m(new sr(.29,.29,.2,20),r,b,.29,w,0,0,Math.PI/2),m(new sr(.16,.16,.205,12),a,b,.29,w,0,0,Math.PI/2);for(let[b,w]of h){let M=new pe(hp(w),b);M.castShadow=b!==l&&b!==c,M.receiveShadow=!0,i.add(M)}let d=new Ge;d.position.set(.02,1.3,-1.57),i.add(d);let v=new ci(.52,.026,.02);v.translate(.27,0,0);let S=new pe(v,s);S.rotation.z=.18,d.add(S);let _=0,y=new uo(16773328,0,70,.55,.65,1.2);return y.position.set(0,.8,1.6),y.target.position.set(0,0,18),i.add(y,y.target),{group:i,mBody:e,update(b,w,M,T=0){if(o.emissiveIntensity=.35+M*3.2,T>.15||_%2.6>.01){_+=b;let A=_%2.6/2.6,P=L=>L*L*(3-2*L),I=A<.25?P(A/.25):A<.5?P(1-(A-.25)/.25):0;S.rotation.z=.18+I*2.5,T<=.15&&A>=.5&&(_=0)}y.intensity=M*60}}}var Rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},X_=new rs(-1,1,1,-1,0,1),nh=class extends _e{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},q_=new nh,Cr=class{constructor(t){this._mesh=new pe(q_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,X_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Pr=class extends mi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Es.clone(t.uniforms),this.material=new ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Cr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zo=class extends mi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},oc=class extends mi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ac=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Gt);this._width=n.width,this._height=n.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pr(Rr),this.copyPass.material.blending=Fn,this.timer=new ho}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}zo!==void 0&&(a instanceof zo?n=!0:a instanceof oc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var lc=class extends mi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var dp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ir=class i extends mi{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Gt(t.x,t.y):new Gt(256,256),this.clearColor=new xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(r,a,{type:en,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Be(r,a,{type:en,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Be(r,a,{type:en,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let l=dp;this.highPassUniforms=Es.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Gt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Es.clone(Rr.uniforms),this.blendMaterial=new ye({uniforms:this.copyUniforms,vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,premultipliedAlpha:!0,blending:Fi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xt,this._oldClearAlpha=1,this._basic=new je,this._fsQuad=new Cr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Gt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this._fsQuad.render(t),l=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let l=e[a],o=a+1<t?e[a+1]:0,u=l+o;s.push((a*l+(a+1)*o)/u),r.push(u)}return new ye({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Gt(.5,.5)},direction:{value:new Gt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ir.BlurDirectionX=new Gt(1,0);Ir.BlurDirectionY=new Gt(0,1);var Y_={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Gt(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    // tone mapping + sRGB output and the anime grade in ONE full-screen pass (was OutputPass + a separate grade pass)
    #include <tonemapping_pars_fragment>
    uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uSunVis, uDay, uWarm, uTime, uAspect, uVig, uSat; varying vec2 vUv;
    float h11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
    float n1(float x){ float i = floor(x), f = fract(x); return mix(h11(i), h11(i + 1.0), f * f * (3.0 - 2.0 * f)); }
    void main(){
      vec4 src = texture2D(tDiffuse, vUv);
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
    }`};function pp(i,t,e,{msaa:n=4,scale:s=1}={}){let r=i.getSize(new Gt),a=new Be(r.x*i.getPixelRatio(),r.y*i.getPixelRatio(),{type:en,samples:n}),l=new ac(i,a);l.addPass(new lc(t,e));let o=new Ir(new Gt(r.x*s*.5,r.y*s*.5),.42,.55,.86);l.addPass(o);let u=new Pr(Y_);u.material.defines={NEUTRAL_TONE_MAPPING:""},u.material.toneMapped=!1,l.addPass(u);let c=l.render.bind(l);return l.render=h=>{u.uniforms.toneMappingExposure.value=i.toneMappingExposure,c(h)},{composer:l,bloom:o,grade:u}}function mp(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let t=new i,e=t.createGain();e.gain.value=0,e.connect(t.destination),e.gain.linearRampToValueAtTime(.5,t.currentTime+4);let n=t.sampleRate*4,s=t.createBuffer(2,n,t.sampleRate);for(let j=0;j<2;j++){let st=s.getChannelData(j);for(let ot=0;ot<n;ot++)st[ot]=(Math.random()*2-1)*Math.pow(1-ot/n,3)}let r=t.createConvolver();r.buffer=s;let a=t.createGain();a.gain.value=.55,r.connect(a),a.connect(e);let l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let o=t.createGain();o.gain.value=.11,l.connect(o),o.connect(e),o.connect(r);let u=(j,st)=>{let ot=t.createBuffer(1,t.sampleRate*j,t.sampleRate),pt=ot.getChannelData(0),tt=0;for(let vt=0;vt<pt.length;vt++)st?(tt=(tt+.02*(Math.random()*2-1))/1.02,pt[vt]=tt*3.5):pt[vt]=Math.random()*2-1;return ot},c=(j,st,ot)=>{let pt=t.createBufferSource();pt.buffer=j,pt.loop=!0;let tt=t.createBiquadFilter();tt.type=st,tt.frequency.value=ot;let vt=t.createGain();return vt.gain.value=0,pt.connect(tt),tt.connect(vt),vt.connect(e),pt.start(),{f:tt,g:vt}},h=c(u(2,!0),"lowpass",400),f=c(u(3,!1),"lowpass",700);f.g.connect(r);let p=c(u(2,!1),"bandpass",5200);p.f.Q.value=6;let g=c(u(2,!0),"lowpass",240),x=c(u(3,!1),"bandpass",2600);x.f.Q.value=.35;let m=c(u(2,!0),"lowpass",520),d=c(u(3,!1),"bandpass",750);d.f.Q.value=.6;let v=c(u(3,!0),"lowpass",420),S=c(u(2,!0),"lowpass",140),_=u(.03,!1),y=0;function b(j,st){let ot=t.createBufferSource(),pt=t.createBiquadFilter(),tt=t.createGain();ot.buffer=_,pt.type="bandpass",pt.frequency.value=1800+Math.random()*2600,pt.Q.value=1.2,tt.gain.setValueAtTime(st*(.02+Math.random()*.03),j),tt.gain.exponentialRampToValueAtTime(1e-4,j+.03),ot.connect(pt),pt.connect(tt),tt.connect(e),ot.start(j),ot.stop(j+.04)}let w=0,M=0;function T(j,st){let ot=t.createOscillator(),pt=t.createOscillator(),tt=t.createGain(),vt=t.createBiquadFilter();vt.type="bandpass",vt.frequency.value=1150,vt.Q.value=2.2,ot.type="square",ot.frequency.value=745,pt.type="triangle",pt.frequency.value=1490,tt.gain.setValueAtTime(0,j),tt.gain.linearRampToValueAtTime(.085*st,j+.004),tt.gain.exponentialRampToValueAtTime(1e-4,j+.3),ot.connect(vt),pt.connect(vt),vt.connect(tt),tt.connect(e),tt.connect(r),ot.start(j),pt.start(j),ot.stop(j+.33),pt.stop(j+.33)}function A(j,st){let ot=t.createOscillator(),pt=t.createGain();ot.type="sine",ot.frequency.setValueAtTime(110,j),ot.frequency.exponentialRampToValueAtTime(48,j+.12),pt.gain.setValueAtTime(1e-4,j),pt.gain.linearRampToValueAtTime(.22*st,j+.006),pt.gain.exponentialRampToValueAtTime(1e-4,j+.17),ot.connect(pt),pt.connect(e),ot.start(j),ot.stop(j+.2)}let P=t.createGain();P.gain.value=1,P.connect(e);let I=t.createGain();I.gain.value=.35,P.connect(I),I.connect(r);let L=(j=(Math.random()-.5)*1.4)=>{if(!t.createStereoPanner)return P;let st=t.createStereoPanner();return st.pan.value=j,st.connect(P),st};function R(j,st,ot,pt,tt,vt,Jt="sine",he=0){let Qt=t.createOscillator(),fe=t.createGain();if(Qt.type=Jt,Qt.frequency.setValueAtTime(st,j),Qt.frequency.exponentialRampToValueAtTime(ot,j+pt),he){let V=t.createOscillator(),Ne=t.createGain();V.frequency.value=he,Ne.gain.value=st*.012,V.connect(Ne),Ne.connect(Qt.frequency),V.start(j),V.stop(j+pt+.05)}return fe.gain.setValueAtTime(1e-4,j),fe.gain.linearRampToValueAtTime(tt,j+Math.min(.04,pt*.25)),fe.gain.setValueAtTime(tt,j+pt*.7),fe.gain.exponentialRampToValueAtTime(1e-4,j+pt),Qt.connect(fe),fe.connect(vt),Qt.start(j),Qt.stop(j+pt+.02),fe}function D(j,st){let ot=L(),pt=2+Math.floor(Math.random()*4),tt=3200+Math.random()*1500;for(let vt=0;vt<pt;vt++){let Jt=j+vt*(.09+Math.random()*.07);R(Jt,tt,tt*(1.2+Math.random()*.3),.06,st*.022,ot)}}function F(j,st){let ot=L();R(j,1120,1390,1,st*.03,ot,"sine",5.5),R(j+1.15,2350,2150,.14,st*.03,ot),R(j+1.32,1700,1520,.13,st*.028,ot),R(j+1.5,2750,2480,.36,st*.032,ot)}function O(j,st){let ot=L(),pt=1+Math.floor(Math.random()*3);for(let tt=0;tt<pt;tt++){let vt=j+tt*.48,Jt=t.createOscillator(),he=t.createBiquadFilter(),Qt=t.createGain();Jt.type="sawtooth",Jt.frequency.setValueAtTime(560,vt),Jt.frequency.exponentialRampToValueAtTime(420,vt+.32),he.type="bandpass",he.frequency.value=1150,he.Q.value=1.6,Qt.gain.setValueAtTime(1e-4,vt),Qt.gain.linearRampToValueAtTime(st*.03,vt+.03),Qt.gain.exponentialRampToValueAtTime(1e-4,vt+.36),Jt.connect(he),he.connect(Qt),Qt.connect(ot),Jt.start(vt),Jt.stop(vt+.4)}}function z(j,st){let ot=L(),pt=2+Math.floor(Math.random()*2);for(let tt=0;tt<pt;tt++)R(j+tt*.42,1750,1150,.36,st*.022,ot,"triangle",11)}function U(j,st){let ot=L(),pt=t.createOscillator(),tt=t.createBiquadFilter(),vt=t.createGain(),Jt=240+Math.random()*220,he=5+Math.floor(Math.random()*4);pt.type="square",pt.frequency.value=Jt,tt.type="bandpass",tt.frequency.value=Jt*2.4,tt.Q.value=3,vt.gain.setValueAtTime(1e-4,j);for(let Qt=0;Qt<he;Qt++){let fe=j+Qt*.038;vt.gain.linearRampToValueAtTime(st*.014,fe+.008),vt.gain.linearRampToValueAtTime(1e-4,fe+.028)}pt.connect(tt),tt.connect(vt),vt.connect(ot),pt.start(j),pt.stop(j+he*.038+.05)}function X(j,st){let ot=L(),pt=4300+Math.random()*700;for(let tt=0;tt<3;tt++)R(j+tt*.055,pt,pt*1.01,.035,st*.009,ot)}function H(j,st){let ot=L(0);for(let[pt,tt,vt]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let Jt=t.createOscillator(),he=t.createGain();Jt.type="sine",Jt.frequency.value=pt,Jt.detune.value=(Math.random()-.5)*8,he.gain.setValueAtTime(1e-4,j),he.gain.linearRampToValueAtTime(st*.05*tt,j+.03),he.gain.exponentialRampToValueAtTime(1e-4,j+vt),Jt.connect(he),he.connect(ot),Jt.start(j),Jt.stop(j+vt+.1)}}function Q(j,st){let ot=L();for(let pt of[j,j+.22])R(pt,2650,2600,.5,st*.018,ot),R(pt,3950,3900,.35,st*.008,ot)}let dt={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Wt=j=>j>1e-4?-Math.log(1-Math.random()*.98)/j:1e9,Yt=j=>440*Math.pow(2,(j-69)/12),zt=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Y=[72,74,76,79,81,84,86,88],it=0,q=t.currentTime+.2,Nt=t.currentTime+3;function wt(j){let st=zt[it++%zt.length],ot=11;for(let pt of st)for(let tt of[-5,5]){let vt=t.createOscillator(),Jt=t.createGain();vt.type=tt<0?"sine":"triangle",vt.frequency.value=Yt(pt),vt.detune.value=tt,Jt.gain.setValueAtTime(0,j),Jt.gain.linearRampToValueAtTime(.18,j+3.5),Jt.gain.setValueAtTime(.18,j+ot-4),Jt.gain.linearRampToValueAtTime(0,j+ot+1),vt.connect(Jt),Jt.connect(l),vt.start(j),vt.stop(j+ot+1.2)}}function At(j){let st=Y[Math.floor(Math.random()*Y.length)],ot=t.createOscillator(),pt=t.createOscillator(),tt=t.createGain(),vt=t.createGain();ot.type=pt.type="sine",ot.frequency.value=Yt(st),pt.frequency.value=Yt(st)*2.01,vt.gain.value=.25,pt.connect(vt),vt.connect(tt),tt.gain.setValueAtTime(0,j),tt.gain.linearRampToValueAtTime(.05,j+.02),tt.gain.exponentialRampToValueAtTime(1e-4,j+4),ot.connect(tt),tt.connect(r),tt.connect(e),ot.start(j),pt.start(j),ot.stop(j+4.2),pt.stop(j+4.2)}return{ac:t,muted:!1,update(j,st,ot,pt={}){let tt=t.currentTime;if((pt.bell||0)>.01)for(w<tt&&(w=tt+.02);w<tt+.12;)T(w,pt.bell),w+=.41;let vt=pt.rain||0;if(x.g.gain.setTargetAtTime(vt*.05,tt,.6),m.g.gain.setTargetAtTime(vt*.05,tt,.6),vt>.05&&pt.roof)for(y<tt&&(y=tt+.02);y<tt+.12;)b(y,vt),y+=.04+Math.random()*.12/vt;let Jt=pt.water||0,he=.6+.4*Math.sin(tt*1.3)*Math.sin(tt*.37);d.g.gain.setTargetAtTime(Jt*.035*he,tt,.25),d.f.frequency.setTargetAtTime(600+400*he,tt,.25);let Qt=.35+.65*Math.pow(.5+.5*Math.sin(tt*.23)*Math.sin(tt*.071+2),2);v.g.gain.setTargetAtTime(((st.mountain||0)+(st.snow||0)*.7)*.06*Qt,tt,.8),v.f.frequency.setTargetAtTime(260+420*Qt,tt,.8);let fe=pt.train||0;if(g.g.gain.setTargetAtTime(fe*.16,tt,.2),fe>.04)for(M<tt&&(M=tt+.02);M<tt+.12;)A(M,fe),A(M+.15,fe*.8),M+=1.2;for(;q<tt+1;)wt(q),q+=8;Nt<tt+.5&&(At(Nt),Nt+=1.5+Math.random()*4.5);let V=pt.tunnel||0;h.g.gain.setTargetAtTime((.03+j*.06)*(1+1.6*V),tt,.35),h.f.frequency.setTargetAtTime((250+j*500)*(1+.5*V),tt,.35),S.g.gain.setTargetAtTime(V*.07,tt,.4),a.gain.setTargetAtTime(.55+.6*V,tt,.4);let Ne=.5+.5*Math.sin(tt*.55)*Math.sin(tt*.21+1);f.g.gain.setTargetAtTime(st.coast*(.012+Ne*.05),tt,.3),f.f.frequency.setTargetAtTime(400+Ne*900,tt,.3);let ce=1-Math.min(1,vt*1.4),N=1-ot,E=pt.dusk||0,W=st.snow||0,$=1-W,et={sparrow:ot*ce*.22*(.3+st.city*.5+st.sakura+st.country*.8+st.coast*.2+(st.mountain||0)*.5)*(1-W*.8),uguisu:ot*ce*st.sakura*.06,crow:ce*(E*.14+ot*(st.city+st.country+(st.mountain||0)*1.5+W*2.5)*.012),gull:ot*st.coast*ce*.16,frog:N*(st.country*5+st.sakura*.6+st.coast*.3)*(1+vt*.6)*$,cricket:N*ce*(1.6-st.city*1.1+(st.mountain||0)*.8)*$,bike:ot*ce*st.city*.014,bell:W*.022+(st.mountain||0)*.006},_t={sparrow:D,uguisu:F,crow:O,gull:z,frog:U,cricket:X,bike:Q,bell:H};for(let nt in et)tt<dt[nt]||(et[nt]>1e-4&&_t[nt](tt+.05,.6+Math.random()*.4),dt[nt]=tt+Math.max(.12,Wt(et[nt]||1e-6)));let Mt=.5+.5*Math.sin(tt*7)*Math.sin(tt*.4);p.g.gain.setTargetAtTime((st.country+st.sakura*.3)*ot*.006*Mt*(1-(st.snow||0)),tt,.08)},toggle(){this.muted=!this.muted,e.gain.setTargetAtTime(this.muted?0:.5,t.currentTime,.3)}}}function gp(i){let e=new Qe(.075,.05),n=new je({color:16777215,side:hn}),s=new Ui(e,n,420);s.frustumCulled=!1,s.count=0;let r=new xt("#ffd0de"),a=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(_=>new xt(_));for(let _=0;_<420;_++)s.setColorAt(_,r);let l=Array.from({length:420},()=>({p:new B(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),o=new qt,u=new cn,c=new Un,h=new B(1,1,1),f=new B,p=90,g=new Float32Array(p*3),x=Array.from({length:p},()=>({p:new B(1e9,0,0),ph:Math.random()*6.28})),m=new _e;m.setAttribute("position",new We(g,3));let d=new ir({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Fi,opacity:0}),v=new eo(m,d);v.frustumCulled=!1;let S=(_,y,b,w,M)=>{let T=M?8+Math.random()*42:-4+Math.random()*50,A=(Math.random()-.5)*40;_.p.set(y.x+b.x*T+w.x*A,y.y-1+Math.random()*9,y.z+b.z*T+w.z*A)};return{group:[s,v],shift(_,y){for(let b of l)b.p.x-=_,b.p.z-=y;for(let b of x)b.p.x-=_,b.p.z-=y},update(_,y,b,w,M,T,A,P,I,L=0){let R=Math.floor(420*Math.min(1,T*1.1+L*.55)),D=!1;s.count=R;for(let O=0;O<R;O++){let z=l[O];f.subVectors(z.p,b);let U=f.x*w.x+f.z*w.z,X=f.x*M.x+f.z*M.z;if(z.p.x>1e8||U<-6||U>55||Math.abs(X)>24||z.p.y<A-.5){S(z,b,w,M,z.p.x<1e8);let H=Math.random()*(T+L)<L;(H!==z.leaf||H)&&(z.leaf=H,s.setColorAt(O,H?a[Math.floor(Math.random()*a.length)]:r),D=!0)}z.p.y-=z.v*_,z.p.x+=Math.sin(y*.7+z.ph)*.4*_+.25*_,z.p.z+=Math.cos(y*.5+z.ph)*.3*_,c.set(y*z.sp+z.ph,y*z.sp*.7,z.ph),u.setFromEuler(c),h.setScalar(z.leaf?1.9:1),o.compose(z.p,u,h),s.setMatrixAt(O,o)}s.instanceMatrix.needsUpdate=!0,D&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let F=P*I;if(d.opacity=F,v.visible=F>.01,v.visible){for(let O=0;O<p;O++){let z=x[O];f.subVectors(z.p,b);let U=f.x*w.x+f.z*w.z,X=f.x*M.x+f.z*M.z;if(z.p.x>1e8||U<-4||U>60||Math.abs(X)>30){let H=2+Math.random()*55,Q=(Math.random()-.5)*55;z.p.set(b.x+w.x*H+M.x*Q,A+.3+Math.random()*2.2,b.z+w.z*H+M.z*Q)}z.p.x+=Math.sin(y*.6+z.ph*3)*.3*_,z.p.y+=Math.sin(y*.9+z.ph)*.2*_,z.p.z+=Math.cos(y*.5+z.ph*2)*.3*_,g[O*3]=z.p.x,g[O*3+1]=z.p.y,g[O*3+2]=z.p.z}m.attributes.position.needsUpdate=!0}}}}var Ee=new URLSearchParams(location.search),Lr=Ee.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();Lr&&document.body.classList.add("embed");Ee.has("shot")&&document.body.classList.add("shot");Yf(Ee.has("seed")?parseInt(Ee.get("seed")):Math.random()*1e9|0);Kf(Ee.get("env")||"city");var fn=i=>document.getElementById(i),Dr=i=>{let t=fn("loading");t&&(t.textContent=i)};async function Z_(){await new Promise(gt=>setTimeout(gt,30));let i=fn("c"),t=new kl({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=Ee.get("q")||(Lr||e?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?Lr?1.25:1.4:1);t.setPixelRatio(s),t.setSize(innerWidth,innerHeight,!1),t.outputColorSpace=ze,t.toneMapping=fo,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=Ms,t.debug.checkShaderErrors=Ee.has("debug");let r=new _s;r.fog=new Kr(13032946,.0019,700);let a=new mn(52,innerWidth/innerHeight,.5,7e3),l=new or(16777215,3);l.castShadow=!0;let o=n==="low"?1024:n==="mid"?1536:2048;l.shadow.mapSize.set(o,o),zu(Ee.has("pcf")?parseInt(Ee.get("pcf")):1);let u=62,c=l.shadow.camera,h=new qt,f=new qt;Object.assign(c,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let p=new B(0,1,0),g=new B,x=new B,m=new B,d=new B(0,1,0),v=new B(0,150,60),S=new B,_=null;l.shadow.updateMatrices=function(){c.position.copy(v),c.lookAt(S),c.updateMatrixWorld(),c.updateProjectionMatrix(),f.multiplyMatrices(c.matrixWorldInverse,h).multiply(c.matrixWorld),c.projectionMatrix.multiply(f),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),this._updateMatrix(c,this.matrix,this._frustum)};let y=!0;l.shadow.bias=-4e-4,l.shadow.normalBias=.05,r.add(l,l.target);let b=new or(16777215,0);b.castShadow=n!=="low"&&!Ee.has("nocarsh");{let gt=Ee.has("carsm")?parseInt(Ee.get("carsm")):n==="high"?512:384;b.shadow.mapSize.set(gt,gt)}if(Object.assign(b.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),b.shadow.bias=-2e-4,b.shadow.normalBias=.025,r.add(b,b.target),b.castShadow){let gt=l.shadow.getFrustum(),ae=b.shadow.getFrustum();for(let Kt of[pe,to]){let Fe=Kt.prototype.intersectsFrustum;Kt.prototype.intersectsFrustum=function(Pe){return Pe===ae?this.userData.car===!0:(Pe!==gt||this.userData.car!==!0)&&Fe.call(this,Pe)}}}let w=new lo(10799359,13154464,1.6);r.add(w),Dr("painting the town\u2026"),await new Promise(gt=>setTimeout(gt,10));let M=xd();yd(M);let T=vd(t);Ad(T.cells),le.uTuftV.value.set(T.tuftV[0],T.tuftV[1]);let A=cd(M.textures(t),T.tex);Dr("painting the clouds\u2026"),await new Promise(gt=>setTimeout(gt,10)),Rd(Ee.has("leafd")?parseFloat(Ee.get("leafd")):n==="high"?.72:.62),Ld();let P=new Yl,I=lp(),L=cp(),R=new sc(r,P,A,I,L),D=Qd();r.add(D);let F=ep(tp(t));r.add(F.group);let O=np();r.add(O.group);let z=ap();r.add(z.mesh);let U=fp();U.group.rotation.order="YXZ",r.add(U.group),U.group.traverse(gt=>{gt.userData.car=!0});let X=gp(A.glowTex);X.group.forEach(gt=>r.add(gt));let H=pp(t,r,a,{msaa:n==="high"?4:n==="mid"?2:0}),Q=hd();r.add(Q.group);let dt=fd();r.add(dt.group);let Wt=ip(Ee),Yt=rp(),zt=sp();r.add(Yt.mesh,zt.mesh);let Y=op();r.add(Y.mesh);let it=Wt.W.rain,q={s:Math.max(100,parseFloat(Ee.get("s"))||140),u:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Ze(parseFloat(Ee.get("t"))||.4,0,.999),todPaused:Ee.has("freeze"),dist:0,cam:{low:1,eye:2,top:3,film:4}[Ee.get("cam")]??(Lr?4:0)},Nt=!1;Dr("building the road\u2026"),await new Promise(gt=>setTimeout(gt,10));let wt=Lr?620:R.ahead;for(R.ahead=260;R.update(q.s,1e9););R.flush(),R.ahead=wt;{Dr("preparing the light\u2026"),await new Promise(Pe=>setTimeout(Pe,10));let gt=new Ge,ae=new _e;ae.setAttribute("position",new $t([0,0,0,.01,0,0,0,.01,0],3)),ae.setAttribute("normal",new $t([0,1,0,0,1,0,0,1,0],3)),ae.setAttribute("uv",new $t([0,0,1,0,0,1],2)),ae.setAttribute("color",new $t([1,1,1,1,1,1,1,1,1],3));let Kt=[A.color,A.atlas,A.foliage,A.leaf,A.lamp,A.sig,A.sodium,A.decal,A.pool,I,L];for(let Pe=0;Pe<Ti.length;Pe++)Kt.push(Io([Ti[Pe]])),Kt.push(Io([Ti[Pe],Ti[(Pe+1)%Ti.length]]));for(let Pe of Kt){let Ve=new pe(ae,Pe);Ve.castShadow=Ve.receiveShadow=!0,Ve.frustumCulled=!1,gt.add(Ve)}gt.position.set(0,0,0),r.add(gt),l.target.position.set(0,0,0),l.position.set(0,150,60);let Fe=[Yt.mesh,zt.mesh,dt.group,Q.group,z.mesh].filter(Pe=>!Pe.visible);for(let Pe of Fe)Pe.visible=!0;t.setRenderTarget(H.composer.readBuffer),t.compile(r,a),t.render(r,a),t.setRenderTarget(null);for(let Pe of Fe)Pe.visible=!1;r.remove(gt),ae.dispose(),H.bloom.enabled=!0,H.composer.render(0),H.bloom.enabled=!1}let At={k:Math.ceil((q.s-Rs)/As),phase:"idle",raise:1,decided:!1,t2:0},j={},st={},ot={},pt=new B,tt=new B,vt=new B,Jt=!1,he=new B,Qt=new B,fe=fn("spd"),V=fn("dist"),Ne=fn("clock"),ce=fn("zone"),N=fn("start"),E=fn("hint"),W=null,$=null,et=0,_t=0;function Mt(gt){!Nt||gt===$||($=gt,ce.querySelector(".jp").textContent=wo[gt].jp,ce.querySelector(".en").textContent=wo[gt].en,ce.classList.add("on"),clearTimeout(et),et=setTimeout(()=>ce.classList.remove("on"),5200))}function nt(){if(!Nt){if(Nt=!0,document.body.classList.remove("pre"),!Ee.has("auto"))try{W=mp(),W&&W.ac.resume()}catch{W=null}N.style.opacity=0,setTimeout(()=>N.remove(),1500),Lr||(E.style.opacity=.75,setTimeout(()=>E.style.opacity=0,9e3))}}let rt={};addEventListener("keydown",gt=>{rt[gt.key]=!0,(gt.key==="m"||gt.key==="M")&&Ht(),(gt.key==="t"||gt.key==="T")&&Rt(),(gt.key==="c"||gt.key==="C")&&Zt(),(gt.key==="r"||gt.key==="R")&&Et(),!Nt&&(gt.key===" "||gt.key==="Enter")&&nt()}),addEventListener("keyup",gt=>{rt[gt.key]=!1});let mt=null;i.addEventListener("pointerdown",gt=>{mt={id:gt.pointerId,x:gt.clientX,y:gt.clientY,sy:gt.clientY,sc:q.mult}}),addEventListener("pointermove",gt=>{mt&&gt.pointerId===mt.id&&(mt.x=gt.clientX,mt.y=gt.clientY,q.mult=Ze(mt.sc-(mt.y-mt.sy)/innerHeight*1.6,.4,1.8))}),addEventListener("pointerup",()=>{mt=null}),addEventListener("pointercancel",()=>{mt=null}),i.addEventListener("touchstart",gt=>{let ae=gt.changedTouches[0];mt={id:"touch",x:ae.clientX,y:ae.clientY,sy:ae.clientY,sc:q.mult},gt.preventDefault()},{passive:!1}),i.addEventListener("touchmove",gt=>{if(!mt)return;let ae=gt.changedTouches[0];mt.x=ae.clientX,mt.y=ae.clientY,q.mult=Ze(mt.sc-(mt.y-mt.sy)/innerHeight*1.6,.4,1.8),gt.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{mt=null}),i.addEventListener("touchcancel",()=>{mt=null});function Ht(){W&&(W.toggle(),fn("snd").style.opacity=W.muted?.4:1)}function Rt(){q.todPaused=!q.todPaused,fn("tim").style.opacity=q.todPaused?.4:1}let bt=[0,1,2,4],Vt={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Zt(){q.cam=bt[(bt.indexOf(q.cam)+1)%bt.length],fn("cam").textContent=Vt[q.cam]||"\u25D0",q.cam===4&&St()}let re=["chase","side","road","crane","eye","side","road"],k={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function St(){let gt;do gt=re[Math.floor(Math.random()*re.length)];while(gt===k.last);{let ae=di(q.s+60);ae&&Math.abs(q.s+60-ae.s)<He+120&&(gt=Math.random()<.6?"chase":"eye")}if(Object.assign(k,{type:gt,last:gt,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),gt==="road"){let ae=q.s+40+Math.random()*18,Kt=An(ae,"rw"),Fe=Math.random()<.6?-1:1,Pe=Fe*(Kt+(Fe<0?.9:1.3)),Ve=P.at(ae,{}),Ls=Ve.y+yr(ae,Pe,Ve.y,Kt);k.anchor={x:Ve.x+Ve.rx*Pe,y:Math.max(Ls,Ve.y)+1.05,z:Ve.z+Ve.rz*Pe,s:ae}}Jt=!1}let lt={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Et(){fn("wx").textContent=lt[Wt.cycle()]}fn("wx").textContent=lt[Wt.W.mode],fn("cam").textContent=Vt[q.cam]||"\u25D0",q.cam===4&&St(),fn("wx").onclick=gt=>{gt.stopPropagation(),Et()},fn("snd").onclick=gt=>{gt.stopPropagation(),Ht()},fn("tim").onclick=gt=>{gt.stopPropagation(),Rt()},fn("cam").onclick=gt=>{gt.stopPropagation(),Zt()};let Lt=0,ft=gt=>{let ae=performance.now();ae-Lt<120||(Lt=ae,gt.cancelable&&gt.type!=="click"&&gt.preventDefault(),nt())};for(let gt of["touchstart","pointerdown","mousedown","click"])N.addEventListener(gt,ft,{passive:!1});let Xt=()=>{W&&W.ac.state!=="running"&&W.ac.resume()};for(let gt of["touchend","click","keydown"])addEventListener(gt,Xt,{passive:!0});document.addEventListener("visibilitychange",()=>{W&&(document.hidden?W.ac.suspend():W.ac.resume())});let Bt=!1,Ce="";function Me(){let gt=innerWidth,ae=innerHeight,Kt=gt/ae,Fe=gt+"x"+ae+"@"+s;Fe!==Ce&&(Ce=Fe,t.setPixelRatio(s),t.setSize(gt,ae,!1),H.composer.setPixelRatio(s),H.composer.setSize(gt,ae),a.aspect=Kt,a.fov=Kt>=1?52:Ze(2*Math.atan(Math.tan(34*Math.PI/180)/Kt)*180/Math.PI,52,80),a.updateProjectionMatrix(),H.grade.uniforms.uAspect.value=Kt)}addEventListener("resize",()=>{Bt=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Bt=!0}),Me();let vn=0;function kn(gt=!0){if(s>1.05)s=Math.max(1,s-.25),Bt=!0;else if(y)y=!1,H.bloom.enabled=!1;else if(l.shadow.mapSize.x>1024)l.shadow.mapSize.set(1024,1024),l.shadow.map&&(l.shadow.map.dispose(),l.shadow.map=null);else if(R.ahead>430)R.ahead=430;else return;if(vn++,gt)try{localStorage.setItem("icd-q",String(vn))}catch{}}try{let gt=parseInt(localStorage.getItem("icd-q")||"0");if(!Ee.has("q"))for(let ae=0;ae<Math.min(gt,6);ae++)kn(!1);vn=Math.max(vn,gt||0)}catch{}let ko=performance.now(),_n=0,Nr=0,Ai=0,Yi=()=>1-ht.night,Is=0,yn=0,ee=Ee.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;ee&&(ee.gl=t.getContext(),ee.tq=ee.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let dn={p:-1,a:new B,b:new B,next:5};function Ur(gt){requestAnimationFrame(Ur);let ae=performance.now();Bt&&(Bt=!1,Me());let Kt=Math.min(.05,Math.max(0,(gt-ko)/1e3));ko=gt,_n+=Kt,q.steer=0,(rt.ArrowLeft||rt.a||rt.A)&&(q.steer=-1),(rt.ArrowRight||rt.d||rt.D)&&(q.steer=1),(rt.ArrowUp||rt.w||rt.W)&&(q.mult=Ze(q.mult+Kt*.4,.4,1.8)),(rt.ArrowDown||rt.s||rt.S)&&(q.mult=Ze(q.mult-Kt*.4,.4,1.8)),mt&&Math.abs(mt.y-mt.sy)<30&&(q.steer=mt.x<innerWidth/2?-1:1),q.steer&&(q.lastInput=gt);let Fe=vr(At.k);q.s-Fe>24&&(At.k++,Fe=vr(At.k),Object.assign(At,{phase:"idle",raise:1,decided:!1}));let Pe=Ao(Fe),Ve=Fe-q.s;Pe&&!At.decided&&Ve<150&&(At.decided=!0,Ve>75&&Nt&&(Ee.has("xing")||Zn(At.k,99)<.8)&&(At.phase="warn",dt.start(Fe,Zn(At.k,7)<.5?1:-1,16))),At.phase==="warn"?(At.raise=Math.max(0,At.raise-Kt/6),dt.st.cleared&&(At.phase="clear",At.t2=0)):At.phase==="clear"?(At.raise=Math.max(0,At.raise-Kt/6),(At.t2+=Kt)>2.2&&(At.phase="raise")):At.phase==="raise"&&(At.raise=Math.min(1,At.raise+Kt/5),At.raise>=1&&(At.phase="idle"));let Ls=At.phase==="warn"||At.phase==="clear"||At.phase==="raise"&&At.raise<.25,Ds=An(q.s,"speed")*q.mult*(Nt?1:.55);if(At.phase!=="idle"&&At.raise<.8&&Ve>0){let yt=Ve-11.2,oe=yt>0?Math.sqrt(2*1.25*yt):0;Ds=Math.min(Ds,oe),q.speed=Math.min(q.speed,oe)}Ee.has("park")&&(Ds=0,q.speed=0),q.speed+=(Ds-q.speed)*Math.min(1,Kt*.5),q.s+=q.speed*Kt,q.dist+=q.speed*Kt;let Ho=An(q.s,"rw");q.steer?q.u=Ze(q.u+q.steer*Kt*2.4,-Ho+.85,Ho-.85):gt-q.lastInput>3e3&&(q.u+=(-1.65+Math.sin(_n/11)*.1-q.u)*Math.min(1,Kt*.9)),!q.todPaused&&Nt&&(q.tod=(q.tod+Kt/480*(ht.night>.5?1.7:1))%1),Kd(q.tod),Wt.update(Kt);let Hn=Wt.W.ov,$n=Wt.W.rain;jd(Hn,$n),it=Ze(it+($n>.25?Kt/18:-Kt/120),0,1);let C=performance.now();R.update(q.s,Nt?3.5:14);let G=performance.now();if(P.at(q.s,j),Math.abs(j.x-R.origin.x)>900||Math.abs(j.z-R.origin.z)>900){let yt=Math.round(j.x)-R.origin.x,oe=Math.round(j.z)-R.origin.z;R.setOrigin(Math.round(j.x),Math.round(j.z)),pt.x-=yt,pt.z-=oe,tt.x-=yt,tt.z-=oe,X.shift&&X.shift(yt,oe),Y.shift(yt,oe)}let K=R.origin.x,Z=R.origin.z,J=(P.at(q.s+1.5,ot).y-P.at(q.s-1.5,st).y)/3;U.group.position.set(j.x+j.rx*q.u-K,j.y+.01,j.z+j.rz*q.u-Z);let Pt=q.steer?-q.steer*.05:0;U.group.rotation.set(-Math.atan(J),j.h+Pt,0);let Dt=di(q.s);Dt&&Math.abs(q.s-Dt.s)<700?(P.at(Dt.s-Xe,ot),le.uTunA.value.set(ot.x-K,ot.y,ot.z-Z),P.at(Dt.s+Xe,ot),le.uTunB.value.set(ot.x-K,ot.y,ot.z-Z),le.uTunR.value=An(Dt.s,"rw")+1.7):(le.uTunA.value.set(0,-1e4,0),le.uTunB.value.set(0,-1e4,0));let Ct=Dt&&Math.abs(q.s+1-Dt.s)<Xe-1.5?1:0;yn+=(Ct-yn)*Math.min(1,Kt*(Ct?1.6:.7)),le.uCarPos.value.set(U.group.position.x+j.fx*1.7,U.group.position.y+.8,U.group.position.z+j.fz*1.7),le.uCarFwd.value.set(j.fx,-.05,j.fz).normalize(),le.uHead.value=Ct,U.update(Kt,q.speed,Math.max(ht.night,yn),$n),Q.update(Pe&&Ve>-24&&Ve<700?Kl(P,Fe):null,R.origin,At.raise,Ls,_n),dt.update(Kt,P,R.origin,De(.15,.8,ht.night),An(Fe,"rw")+3.2);let Ot=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(Ee.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}],Ft=new B,se=6,ue=q.cam===2;if(q.cam===4){k.t+=Kt;{let kt=di(q.s+30);kt&&Math.abs(q.s+30-kt.s)<He+70&&k.type!=="chase"&&k.type!=="eye"&&(k.type="chase",k.t=0,k.dur=20,Jt=!1)}(k.t>k.dur+(k.type==="road"?8:0)||k.type==="road"&&k.anchor&&q.s>k.anchor.s+24)&&St();let yt=U.group.position,oe=k.type;if(oe==="chase"||oe==="eye"){let kt=Ot[oe==="eye"?2:0];ue=oe==="eye",P.at(q.s-kt.back,st),P.at(q.s+kt.ahead,ot),vt.set(st.x+st.rx*q.u*kt.cu-K,st.y+kt.up,st.z+st.rz*q.u*kt.cu-Z),Ft.set(ot.x+ot.rx*q.u*kt.lu-K,ot.y+kt.lookY,ot.z+ot.rz*q.u*kt.lu-Z)}else if(oe==="side"){P.at(q.s+1.5,st);let kt=Ie(q.s),an=kt.city+kt.sakura>.5,Mn=An(q.s,"rw"),Vn=k.sideSign>0?Mn+(an?1.45:3.4):-(Mn+1.5),Vo=st.y+yr(q.s+1.5,Vn,st.y,Mn);vt.set(st.x+st.rx*Vn-K,Math.max(Vo+1.55,st.y+1.25),st.z+st.rz*Vn-Z),Ft.set(yt.x+j.fx*2.5,yt.y+.9,yt.z+j.fz*2.5),se=4}else if(oe==="road"&&k.anchor)vt.set(k.anchor.x-K,k.anchor.y,k.anchor.z-Z),Ft.set(yt.x,yt.y+.85,yt.z),se=30;else{P.at(q.s-20,st),P.at(q.s+34,ot);let kt=14+Math.min(k.t,20)*.35;vt.set(st.x+st.rx*q.u*.4-K,st.y+kt,st.z+st.rz*q.u*.4-Z),Ft.set(ot.x-K,ot.y+1,ot.z-Z),se=3}}else{let yt=Ot[q.cam];P.at(q.s-yt.back,st),P.at(q.s+yt.ahead,ot);let oe=q.u*yt.cu,kt=oe+(yt.side||0);vt.set(st.x+st.rx*kt-K,st.y+yt.up,st.z+st.rz*kt-Z),Ft.set(ot.x+ot.rx*q.u*yt.lu-K,ot.y+yt.lookY,ot.z+ot.rz*q.u*yt.lu-Z)}U.group.visible=!ue,q.cam===3?a.up.set(j.fx,0,j.fz):a.up.set(0,1,0),Jt||(pt.copy(vt),tt.copy(Ft),Jt=!0),pt.lerp(vt,1-Math.exp(-Kt*se)),tt.lerp(Ft,1-Math.exp(-Kt*Math.min(se,8))),a.position.copy(pt),a.lookAt(tt),Ee.has("yaw")&&a.rotateY(parseFloat(Ee.get("yaw"))*Math.PI/180),Ee.has("pitch")&&a.rotateX(parseFloat(Ee.get("pitch"))*Math.PI/180),he.set(j.fx,0,j.fz),Qt.set(j.rx,0,j.rz);let Tt=Ie(q.s);l.color.copy(ht.sunCol),l.intensity=ht.sunI;{let yt=ht.lightDir;p.angleTo(yt)>.1&&p.copy(yt),g.crossVectors(d,p).normalize(),x.crossVectors(p,g),m.set(U.group.position.x+j.fx*26,U.group.position.y,U.group.position.z+j.fz*26),l.target.position.copy(m),l.position.copy(m).addScaledVector(yt,200);let oe=2*u/l.shadow.mapSize.x,kt=m.dot(g),an=m.dot(x);m.addScaledVector(g,Math.round(kt/oe)*oe-kt).addScaledVector(x,Math.round(an/oe)*oe-an),S.copy(m),v.copy(m).addScaledVector(p,200),(_===null||Math.abs(U.group.position.y-_)>3)&&(_=Math.round(U.group.position.y));let Mn=p.x/p.y-yt.x/yt.y,Vn=p.z/p.y-yt.z/yt.y;h.set(1,Mn,0,-_*Mn,0,1,0,0,0,Vn,1,-_*Vn,0,0,0,1)}b.target.position.set(U.group.position.x,U.group.position.y+.9,U.group.position.z),b.position.copy(b.target.position).addScaledVector(ht.lightDir,12),w.color.copy(ht.hemiSky),w.groundColor.copy(ht.hemiGround),w.intensity=ht.hemiI,r.fog.color.copy(ht.fog);let be=(Tt.city*.0022+Tt.sakura*.0019+Tt.coast*.0011+Tt.country*.0014+Tt.mountain*.0017+Tt.snow*.0021)*(1+ht.night*.25);r.fog.near=be*(1+.55*Hn+.45*$n),r.fog.far=R.ahead*.92,le.uSkyHor.value.copy(ht.horizon),le.uSkyZen.value.copy(ht.zenith),le.uTime.value=_n,le.uWet.value=it*(1-Tt.snow),le.uOrigin.value.set(R.origin.x,R.origin.z),le.uWind.value=1+.8*$n,le.uCloudSh.value=(1-Hn)*De(.04,.3,ht.sunEl)*(1-ht.night);let Se=D.material.uniforms;if(Se.uNight.value=ht.night,Se.uWarm.value=ht.warm,Se.uTime.value=_n,Se.uCirrusCol.value.copy(ht.cLit).lerp(ht.horizon,.25),Se.uCirrus.value=.6*(1-Hn)*(1-.65*De(.4,.9,ht.night)),Se.uOvercast.value=Hn,Se.uMilky.value=De(.55,.95,ht.night)*(1-Hn),ht.night>.65&&Hn<.3&&dn.p<0&&(dn.next-=Kt)<0){let yt=Math.atan2(j.fx,j.fz)+(Math.random()-.5)*1.5,oe=.45+Math.random()*.6,kt=.22+Math.random()*.2,an=(Math.random()-.5)*.6,Mn=(Vn,Vo)=>new B(Math.cos(Vn)*Math.sin(Vo),Math.sin(Vn),Math.cos(Vn)*Math.cos(Vo));dn.a.copy(Mn(oe,yt)),dn.b.copy(Mn(oe-kt,yt+an)),dn.p=0,dn.next=Ee.has("meteors")?1:6+Math.random()*20}dn.p>=0&&(dn.p+=Kt/.85,dn.p>1.3&&(dn.p=-1)),Se.uMetP.value=dn.p,Se.uMetA.value.copy(dn.a),Se.uMetB.value.copy(dn.b),Se.uDeckLit.value.copy(ht.horizon).lerp(ht.cLit,.35),Se.uDeckDark.value.copy(ht.zenith).lerp(ht.horizon,.25).multiplyScalar(.82),D.position.copy(a.position),F.update(a.position,Kt),O.update(a.position,Math.max(Tt.snow,Ie(q.s+600).snow*.7));let we=0;for(let yt of[-150,0,250,500,800])we=Math.max(we,Ie(q.s+yt).coast);z.mesh.visible=we>.001,z.update(a.position,_n,be*.8,De(0,.35,we)),L.uniforms.uTime.value=_n,L.uniforms.uFogD.value=r.fog.near,L.uniforms.uNight.value=ht.night,L.uniforms.uSpecK.value=1-ht.overcast*.85,le.uSunDir.value.copy(ht.lightDir),le.uSunCol.value.copy(ht.sunCol),I.uniforms.uTime.value=_n,I.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*Yi());let de=De(.15,.8,ht.night);A.atlas.emissiveIntensity=.1+de*1.05,A.lamp.color.setRGB(.85,.85,.8).lerp(new xt(3.6,2.8,1.8),de),A.pool.opacity=de*.42*(1+.8*it),le.uNight.value=de,H.bloom.strength=Re(.32,.55,de),H.bloom.threshold=Re(1.35,.95,de),H.bloom.radius=Re(.55,.35,de);{let yt=Math.max(de,yn,De(.25,.6,ht.warm)*(1-Hn));H.bloom.enabled=y&&yt>.02,H.bloom.strength*=Math.min(1,yt*4)}t.toneMappingExposure=Re(1,1.15,de)*(1+.35*yn),vt.copy(a.position).addScaledVector(ht.sunDir,1e3).project(a);let Oe=H.grade.uniforms,Ut=vt.z<1?1:0,pn=Math.max(Math.abs(vt.x),Math.abs(vt.y));Oe.uSun.value.set(vt.x*.5+.5,vt.y*.5+.5),Oe.uSunVis.value=Ut*(1-De(1,1.9,pn))*De(-.02,.15,ht.sunEl)*(1-ht.night)*(1-Hn)*(1-yn),Oe.uSat.value=1.1-.12*Hn,Oe.uDay.value=Yi(),Oe.uWarm.value=ht.warm,Oe.uTime.value=_n,Yt.update(a.position,_n,$n*(1-yn)*(1-Tt.snow),Yi()),zt.update(a.position,_n,Tt.snow*(.3+.7*Hn)*(1-yn),Yi()),Y.setFog(r.fog.near),Y.update(Kt,_n,a.position,he,Qt,Tt,Yi(),$n,U.group.position);let ge=performance.now();X.update(Kt,_n,a.position,he,Qt,Tt.sakura*(1-yn),j.y,de,(Tt.country+Tt.sakura*.4)*(1-$n)*(1-yn),Tt.mountain*(1-yn));let Dn=performance.now();if(W){P.at(Fe,ot);let yt=Math.hypot(ot.x-R.origin.x-a.position.x,ot.z-R.origin.z-a.position.z),oe=dt.st.active?dt.group.position.distanceTo(a.position):1e9;W.update(q.speed/15,Tt,Yi(),{bell:Ls?Math.pow(Ze(1-yt/260,0,1),1.5):0,train:Math.pow(Ze(1-oe/230,0,1),2),rain:$n*(1-yn)*(1-Tt.snow),roof:q.cam!==2,tunnel:yn,water:(()=>{let kt=Bi(q.s);return Math.max(kt?1-De(12,150,Math.abs(q.s-kt.s)):0,Tt.mountain*.45)})(),dusk:ht.warm*(q.tod>.5?1:.3)})}Mt(ke(q.s+40)),ee&&(t.info.autoReset=!1,t.info.reset());let Cn=null;ee&&ee.tq&&(Cn=ee.gl.createQuery(),ee.gl.beginQuery(ee.tq.TIME_ELAPSED_EXT,Cn));let ii=performance.now();H.composer.render(Kt);let Ri=performance.now();if(Cn){let yt=ee.gl;for(yt.endQuery(ee.tq.TIME_ELAPSED_EXT),ee.pend.push(Cn);ee.pend.length&&yt.getQueryParameter(ee.pend[0],yt.QUERY_RESULT_AVAILABLE);){let oe=ee.pend.shift(),kt=yt.getQueryParameter(oe,yt.QUERY_RESULT);yt.deleteQuery(oe),yt.getParameter(ee.tq.GPU_DISJOINT_EXT)||(ee.gpu=kt/1e6,ee.gpuN++,ee.gpuSum+=ee.gpu,ee.gpu>ee.gpuMax&&(ee.gpuMax=ee.gpu))}}let xe=window.__pb||(window.__pb={world:0,parts:0,render:0});if(xe.world=xe.world*.95+(G-C)*.05,xe.parts=xe.parts*.95+(Dn-ge)*.05,xe.render=xe.render*.95+(Ri-ii)*.05,Is=Is*.95+(performance.now()-ae)*.05,window.__ft=Is,ee){let yt=t.info,oe=performance.now()-ae,kt={t:+_n.toFixed(2),s:Math.round(q.s),total:+oe.toFixed(1),world:+(G-C).toFixed(1),render:+(Ri-ii).toFixed(1),gpu:+(ee.gpu||0).toFixed(1),progs:yt.programs.length-ee.progs,geos:yt.memory.geometries-ee.geos,tex:yt.memory.textures-ee.tex,calls:yt.render.calls,tris:yt.render.triangles};kt.progs>0&&Nt&&(kt.newProgs=yt.programs.slice(-kt.progs).map(an=>(an.name||"")+":"+String(an.cacheKey).slice(0,60))),ee.progs=yt.programs.length,ee.geos=yt.memory.geometries,ee.tex=yt.memory.textures,ee.frames++,ee.sum+=oe,oe>ee.max&&(ee.max=oe),oe>12&&Nt&&ee.spikes.push(kt),ee.last=kt}if((_t+=Kt)>.25){_t=0,fe.textContent=Math.round(q.speed*3.6),V.textContent=(q.dist/1e3).toFixed(1);let yt=Math.floor(q.tod*1440);Ne.textContent=`${String(Math.floor(yt/60)).padStart(2,"0")}:${String(yt%60).padStart(2,"0")}`}Nr++,Nt&&Nr>150&&Kt>.03?Ai+=Kt:Ai=Math.max(0,Ai-Kt*.5),Ai>3&&!Ee.has("q")&&(Ai=0,kn())}window.__dbg={renderer:t,st:q,scene:r,camera:a,world:R,TOD:ht,X:At,train:dt,weather:Wt,U:le,birds:Y,cine:k,post:H,car:U,sun:l,M:A,clouds:F,sky:D,mountains:O},Dr(""),N.classList.add("ready"),Ee.has("auto")&&nt(),requestAnimationFrame(Ur)}Z_().catch(i=>{console.error(i),Dr("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
