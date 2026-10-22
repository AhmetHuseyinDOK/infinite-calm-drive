var Df=0,Cu=1,Nf=2;var Us=1,Uf=2,Ur=3,fs=0,yn=1,xn=2,Vn=0,Fr=1,Gi=2,Pu=3,Iu=4,Ff=5;var Fs=100,Of=101,Bf=102,zf=103,kf=104,Hf=200,Vf=201,Gf=202,Wf=203,Lu=204,Du=205,Xf=206,qf=207,Yf=208,Zf=209,$f=210,Jf=211,Kf=212,jf=213,Qf=214,$a=0,Ja=1,Ka=2,br=3,ja=4,Qa=5,el=6,tl=7,Nu=0,ed=1,td=2,xi=0,Uu=1,Fu=2,Ou=3,Bu=4,zu=5,ku=6,Go=7;var Hu=300,ds=301,Os=302,Al=303,Rl=304,Wo=306,Sr=1e3,Ei=1001,nl=1002,sn=1003,nd=1004;var Xo=1005;var Ot=1006,Cl=1007;var Gn=1008;var En=1009,Vu=1010,Gu=1011,Or=1012,Pl=1013,vi=1014,oi=1015,on=1016,Il=1017,Ll=1018,Br=1020,Wu=35902,Xu=35899,qu=1021,Yu=1022,Wn=1023,wi=1026,ps=1027,Bs=1028,Dl=1029,ms=1030,Nl=1031;var Ul=1033,qo=33776,Yo=33777,Zo=33778,$o=33779,Fl=35840,Ol=35841,Bl=35842,zl=35843,kl=36196,Hl=37492,Vl=37496,Gl=37488,Wl=37489,Jo=37490,Xl=37491,ql=37808,Yl=37809,Zl=37810,$l=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,oc=36492,ac=36494,lc=36495,cc=36283,uc=36284,Ko=36285,hc=36286;var Mo=2300,il=2301,Ya=2302,yu=2303,Mu=2400,bu=2401,Su=2402;var id=3200;var fc=0,sd=1,_i="",qt="srgb",bo="srgb-linear",So="linear",At="srgb";var Za=7680;var rd=519,od=512,ad=513,ld=514,dc=515,cd=516,ud=517,pc=518,hd=519,fd=35044;var Zu="300 es",mi=2e3,Tr=2001;function R0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function C0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=To("canvas");return i.style.display="block",i}var of={},Er=null;function $u(...i){let e="THREE."+i.shift();Er?Er("log",e,...i):console.log(e,...i)}function pd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=pd(i);let e="THREE."+i.shift();if(Er)Er("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=pd(i);let e="THREE."+i.shift();if(Er)Er("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ds(...i){let e=i.join(" ");e in of||(of[e]=!0,nt(...i))}function md(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gd={[$a]:Ja,[Ka]:el,[ja]:tl,[br]:Qa,[Ja]:$a,[el]:Ka,[tl]:ja,[Qa]:br},Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jc=Math.PI/180,Eo=180/Math.PI;function jo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function P0(i,e){return(i%e+e)%e}function Kc(i,e,t){return(1-t)*i+t*e}function fo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var eh=class eh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eh.prototype.isVector2=!0;var Ge=eh,gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let o=n[s+0],u=n[s+1],c=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||o!==f||u!==p||c!==g){let m=o*f+u*p+c*g+h*x;m<0&&(f=-f,p=-p,g=-g,x=-x,m=-m);let d=1-l;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);d=Math.sin(d*v)/S,l=Math.sin(l*v)/S,o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+x*l}else{o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+x*l;let v=1/Math.sqrt(o*o+u*u+c*c+h*h);o*=v,u*=v,c*=v,h*=v}}e[t]=o,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let l=n[s],o=n[s+1],u=n[s+2],c=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=l*g+c*h+o*p-u*f,e[t+1]=o*g+c*f+u*h-l*p,e[t+2]=u*g+c*p+l*f-o*h,e[t+3]=c*g-l*h-o*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,u=l(n/2),c=l(s/2),h=l(r/2),f=o(n/2),p=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],u=t[2],c=t[6],h=t[10],f=n+l+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>l&&n>h){let p=2*Math.sqrt(1+n-l-h);this._w=(c-o)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(l>h){let p=2*Math.sqrt(1+l-n-h);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(o+c)/p}else{let p=2*Math.sqrt(1+h-n-l);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,u=t._z,c=t._w;return this._x=n*c+a*l+s*u-r*o,this._y=s*c+a*o+r*l-n*u,this._z=r*c+a*u+n*o-s*l,this._w=a*c-n*l-s*o-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){let u=Math.acos(l),c=Math.sin(u);o=Math.sin(o*u)/c,t=Math.sin(t*u)/c,this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},th=class th{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(af.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,u=2*(a*s-l*n),c=2*(l*t-r*s),h=2*(r*n-a*t);return this.x=t+o*u+a*h-l*c,this.y=n+o*c+l*u-r*h,this.z=s+o*h+r*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};th.prototype.isVector3=!0;var B=th,jc=new B,af=new gn,nh=class nh{constructor(e,t,n,s,r,a,l,o,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,u)}set(e,t,n,s,r,a,l,o,u){let c=this.elements;return c[0]=e,c[1]=s,c[2]=l,c[3]=t,c[4]=r,c[5]=o,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],o=n[6],u=n[1],c=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],v=s[1],S=s[4],_=s[7],M=s[2],T=s[5],R=s[8];return r[0]=a*x+l*v+o*M,r[3]=a*m+l*S+o*T,r[6]=a*d+l*_+o*R,r[1]=u*x+c*v+h*M,r[4]=u*m+c*S+h*T,r[7]=u*d+c*_+h*R,r[2]=f*x+p*v+g*M,r[5]=f*m+p*S+g*T,r[8]=f*d+p*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8];return t*a*c-t*l*u-n*r*c+n*l*o+s*r*u-s*a*o}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=c*a-l*u,f=l*o-c*r,p=u*r-a*o,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*u-c*n)*x,e[2]=(l*n-s*a)*x,e[3]=f*x,e[4]=(c*t-s*o)*x,e[5]=(s*r-l*t)*x,e[6]=p*x,e[7]=(n*o-u*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){let o=Math.cos(r),u=Math.sin(r);return this.set(n*o,n*u,-n*(o*a+u*l)+a+e,-s*u,s*o,-s*(-u*a+o*l)+l+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nh.prototype.isMatrix3=!0;var at=nh,Qc=new at,lf=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I0(){let i={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?So:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bo]:{primaries:e,whitePoint:n,transfer:So,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:At,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var xt=I0();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ar,sl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ar===void 0&&(ar=To("canvas")),ar.width=e.width,ar.height=e.height;let s=ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},L0=0,wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(eu(s[a].image)):r.push(eu(s[a]))}else r=eu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function eu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var D0=0,tu=new B,Nn=class i extends Ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=Ot,a=Gn,l=Wn,o=En,u=i.DEFAULT_ANISOTROPY,c=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=jo(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Hu;Nn.DEFAULT_ANISOTROPY=1;var ih=class ih{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,o=e.elements,u=o[0],c=o[4],h=o[8],f=o[1],p=o[5],g=o[9],x=o[2],m=o[6],d=o[10];if(Math.abs(c-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(u+1)/2,_=(p+1)/2,M=(d+1)/2,T=(c+f)/4,R=(h+x)/4,b=(g+m)/4;return S>_&&S>M?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=R/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ih.prototype.isVector4=!0;var vt=ih,rl=class extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Nn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wo=class extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wl=class wl{constructor(e,t,n,s,r,a,l,o,u,c,h,f,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,u,c,h,f,p,g,x,m)}set(e,t,n,s,r,a,l,o,u,c,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=l,d[13]=o,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*c,p=a*h,g=l*c,x=l*h;t[0]=o*c,t[4]=-o*h,t[8]=u,t[1]=p+g*u,t[5]=f-x*u,t[9]=-l*o,t[2]=x-f*u,t[6]=g+p*u,t[10]=a*o}else if(e.order==="YXZ"){let f=o*c,p=o*h,g=u*c,x=u*h;t[0]=f+x*l,t[4]=g*l-p,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-l,t[2]=p*l-g,t[6]=x+f*l,t[10]=a*o}else if(e.order==="ZXY"){let f=o*c,p=o*h,g=u*c,x=u*h;t[0]=f-x*l,t[4]=-a*h,t[8]=g+p*l,t[1]=p+g*l,t[5]=a*c,t[9]=x-f*l,t[2]=-a*u,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){let f=a*c,p=a*h,g=l*c,x=l*h;t[0]=o*c,t[4]=g*u-p,t[8]=f*u+x,t[1]=o*h,t[5]=x*u+f,t[9]=p*u-g,t[2]=-u,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){let f=a*o,p=a*u,g=l*o,x=l*u;t[0]=o*c,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*c,t[9]=-l*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=a*o,p=a*u,g=l*o,x=l*u;t[0]=o*c,t[4]=-h,t[8]=u*c,t[1]=f*h+x,t[5]=a*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=l*c,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,U0)}lookAt(e,t,n){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Qi.crossVectors(n,Yn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Qi.crossVectors(n,Yn)),Qi.normalize(),Sa.crossVectors(Yn,Qi),s[0]=Qi.x,s[4]=Sa.x,s[8]=Yn.x,s[1]=Qi.y,s[5]=Sa.y,s[9]=Yn.y,s[2]=Qi.z,s[6]=Sa.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],o=n[8],u=n[12],c=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],S=n[7],_=n[11],M=n[15],T=s[0],R=s[4],b=s[8],E=s[12],A=s[1],P=s[5],L=s[9],D=s[13],w=s[2],I=s[6],N=s[10],U=s[14],z=s[3],O=s[7],k=s[11],H=s[15];return r[0]=a*T+l*A+o*w+u*z,r[4]=a*R+l*P+o*I+u*O,r[8]=a*b+l*L+o*N+u*k,r[12]=a*E+l*D+o*U+u*H,r[1]=c*T+h*A+f*w+p*z,r[5]=c*R+h*P+f*I+p*O,r[9]=c*b+h*L+f*N+p*k,r[13]=c*E+h*D+f*U+p*H,r[2]=g*T+x*A+m*w+d*z,r[6]=g*R+x*P+m*I+d*O,r[10]=g*b+x*L+m*N+d*k,r[14]=g*E+x*D+m*U+d*H,r[3]=v*T+S*A+_*w+M*z,r[7]=v*R+S*P+_*I+M*O,r[11]=v*b+S*L+_*N+M*k,r[15]=v*E+S*D+_*U+M*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15],v=o*p-u*f,S=l*p-u*h,_=l*f-o*h,M=a*p-u*c,T=a*f-o*c,R=a*h-l*c;return t*(x*v-m*S+d*_)-n*(g*v-m*M+d*T)+s*(g*S-x*M+d*R)-r*(g*_-x*T+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],u=e[6],c=e[10];return t*(a*c-l*u)-n*(r*c-l*o)+s*(r*u-a*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],v=t*l-n*a,S=t*o-s*a,_=t*u-r*a,M=n*o-s*l,T=n*u-r*l,R=s*u-r*o,b=c*x-h*g,E=c*m-f*g,A=c*d-p*g,P=h*m-f*x,L=h*d-p*x,D=f*d-p*m,w=v*D-S*L+_*P+M*A-T*E+R*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/w;return e[0]=(l*D-o*L+u*P)*I,e[1]=(s*L-n*D-r*P)*I,e[2]=(x*R-m*T+d*M)*I,e[3]=(f*T-h*R-p*M)*I,e[4]=(o*A-a*D-u*E)*I,e[5]=(t*D-s*A+r*E)*I,e[6]=(m*_-g*R-d*S)*I,e[7]=(c*R-f*_+p*S)*I,e[8]=(a*L-l*A+u*b)*I,e[9]=(n*A-t*L-r*b)*I,e[10]=(g*T-x*_+d*v)*I,e[11]=(h*_-c*T-p*v)*I,e[12]=(l*E-a*P-o*b)*I,e[13]=(t*P-n*E+s*b)*I,e[14]=(x*S-g*M-m*v)*I,e[15]=(c*M-h*S+f*v)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,o=e.z,u=r*a,c=r*l;return this.set(u*a+n,u*l-s*o,u*o+s*l,0,u*l+s*o,c*l+n,c*o-s*a,0,u*o-s*l,c*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,u=r+r,c=a+a,h=l+l,f=r*u,p=r*c,g=r*h,x=a*c,m=a*h,d=l*h,v=o*u,S=o*c,_=o*h,M=n.x,T=n.y,R=n.z;return s[0]=(1-(x+d))*M,s[1]=(p+_)*M,s[2]=(g-S)*M,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(f+d))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+S)*R,s[9]=(m-v)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=lr.set(s[0],s[1],s[2]).length(),l=lr.set(s[4],s[5],s[6]).length(),o=lr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hi.copy(this);let u=1/a,c=1/l,h=1/o;return hi.elements[0]*=u,hi.elements[1]*=u,hi.elements[2]*=u,hi.elements[4]*=c,hi.elements[5]*=c,hi.elements[6]*=c,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,t.setFromRotationMatrix(hi),n.x=a,n.y=l,n.z=o,this}makePerspective(e,t,n,s,r,a,l=mi,o=!1){let u=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(o)g=r/(a-r),x=a*r/(a-r);else if(l===mi)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===Tr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=mi,o=!1){let u=this.elements,c=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(o)g=1/(a-r),x=a/(a-r);else if(l===mi)g=-2/(a-r),x=-(a+r)/(a-r);else if(l===Tr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wl.prototype.isMatrix4=!0;var Je=wl,lr=new B,hi=new Je,N0=new B(0,0,0),U0=new B(1,1,1),Qi=new B,Sa=new B,Yn=new B,uf=new Je,hf=new gn,kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],u=s[5],c=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hf.setFromEuler(this),this.setFromQuaternion(hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},F0=0,ff=new B,cr=new gn,Ui=new Je,Ta=new B,po=new B,O0=new B,B0=new gn,df=new B(1,0,0),pf=new B(0,1,0),mf=new B(0,0,1),gf={type:"added"},z0={type:"removed"},ur={type:"childadded",child:null},nu={type:"childremoved",child:null},rn=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new kn,n=new gn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new at}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(df,e)}rotateY(e){return this.rotateOnAxis(pf,e)}rotateZ(e){return this.rotateOnAxis(mf,e)}translateOnAxis(e,t){return ff.copy(e).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(df,e)}translateY(e){return this.translateOnAxis(pf,e)}translateZ(e){return this.translateOnAxis(mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(po,Ta,this.up):Ui.lookAt(Ta,po,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Ui),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gf),ur.child=e,this.dispatchEvent(ur),ur.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z0),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gf),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let u=0,c=o.length;u<c;u++){let h=o[u];r(e.shapes,h)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,u=this.material.length;o<u;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){let l=a(e.geometries),o=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){let o=[];for(let u in l){let c=l[u];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new B(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},k0={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(u,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function iu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=P0(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=iu(a,r,e+1/3),this.g=iu(a,r,e),this.b=iu(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return xt.workingToColorSpace(Tn.copy(this),e),Math.round(yt(Tn.r*255,0,255))*65536+Math.round(yt(Tn.g*255,0,255))*256+Math.round(yt(Tn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,u,c=(l+a)/2;if(l===a)o=0,u=0;else{let h=a-l;switch(u=c<=.5?h/(a+l):h/(2-a-l),a){case n:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-n)/h+2;break;case r:o=(n-s)/h+4;break}o/=6}return e.h=o,e.s=u,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=qt){xt.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Ea);let n=Kc(es.h,Ea.h,t),s=Kc(es.s,Ea.s,t),r=Kc(es.l,Ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new xe;xe.NAMES=xd;var Ro=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ns=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new B,Fi=new B,su=new B,Oi=new B,hr=new B,fr=new B,xf=new B,ru=new B,ou=new B,au=new B,lu=new vt,cu=new vt,uu=new vt,ss=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),Fi.subVectors(n,t),su.subVectors(e,t);let a=fi.dot(fi),l=fi.dot(Fi),o=fi.dot(su),u=Fi.dot(Fi),c=Fi.dot(su),h=a*u-l*l;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(u*o-l*c)*f,g=(a*c-l*o)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,s,r,a,l,o){return this.getBarycoord(e,t,n,s,Oi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Oi.x),o.addScaledVector(a,Oi.y),o.addScaledVector(l,Oi.z),o)}static getInterpolatedAttribute(e,t,n,s,r,a){return lu.setScalar(0),cu.setScalar(0),uu.setScalar(0),lu.fromBufferAttribute(e,t),cu.fromBufferAttribute(e,n),uu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lu,r.x),a.addScaledVector(cu,r.y),a.addScaledVector(uu,r.z),a}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),Fi.subVectors(e,t),fi.cross(Fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),fi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,l;hr.subVectors(s,n),fr.subVectors(r,n),ru.subVectors(e,n);let o=hr.dot(ru),u=fr.dot(ru);if(o<=0&&u<=0)return t.copy(n);ou.subVectors(e,s);let c=hr.dot(ou),h=fr.dot(ou);if(c>=0&&h<=c)return t.copy(s);let f=o*h-c*u;if(f<=0&&o>=0&&c<=0)return a=o/(o-c),t.copy(n).addScaledVector(hr,a);au.subVectors(e,r);let p=hr.dot(au),g=fr.dot(au);if(g>=0&&p<=g)return t.copy(r);let x=p*u-o*g;if(x<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(n).addScaledVector(fr,l);let m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return xf.subVectors(r,s),l=(h-c)/(h-c+(p-g)),t.copy(s).addScaledVector(xf,l);let d=1/(m+x+f);return a=x*d,l=f*d,t.copy(n).addScaledVector(hr,a).addScaledVector(fr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Aa.subVectors(this.max,mo),dr.subVectors(e.a,mo),pr.subVectors(e.b,mo),mr.subVectors(e.c,mo),ts.subVectors(pr,dr),ns.subVectors(mr,pr),Cs.subVectors(dr,mr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Cs.z,Cs.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Cs.z,0,-Cs.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Cs.y,Cs.x,0];return!hu(t,dr,pr,mr,Aa)||(t=[1,0,0,0,1,0,0,0,1],!hu(t,dr,pr,mr,Aa))?!1:(Ra.crossVectors(ts,ns),t=[Ra.x,Ra.y,Ra.z],hu(t,dr,pr,mr,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new B,new B,new B,new B,new B,new B,new B,new B],di=new B,wa=new si,dr=new B,pr=new B,mr=new B,ts=new B,ns=new B,Cs=new B,mo=new B,Aa=new B,Ra=new B,Ps=new B;function hu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ps.fromArray(i,r);let l=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),o=e.dot(Ps),u=t.dot(Ps),c=n.dot(Ps);if(Math.max(-Math.max(o,u,c),Math.min(o,u,c))>l)return!1}return!0}var nn=new B,Ca=new Ge,H0=0,Yt=class extends Ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fd,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),s=zn(s,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Co=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Po=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},V0=new si,go=new B,fu=new B,ri=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):V0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);let t=go.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(go,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(fu)),this.expandByPoint(go.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},G0=0,ii=new Je,du=new rn,gr=new B,Zn=new si,xo=new si,mn=new B,Mt=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R0(e)?Po:Co)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];xo.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(Zn.min,xo.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,xo.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(xo.min),Zn.expandByPoint(xo.max))}Zn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],o=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)mn.fromBufferAttribute(l,u),o&&(gr.fromBufferAttribute(e,u),mn.add(gr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[];for(let b=0;b<n.count;b++)l[b]=new B,o[b]=new B;let u=new B,c=new B,h=new B,f=new Ge,p=new Ge,g=new Ge,x=new B,m=new B;function d(b,E,A){u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,A),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,A),c.sub(u),h.sub(u),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),l[b].add(x),l[E].add(x),l[A].add(x),o[b].add(m),o[E].add(m),o[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,E=v.length;b<E;++b){let A=v[b],P=A.start,L=A.count;for(let D=P,w=P+L;D<w;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let S=new B,_=new B,M=new B,T=new B;function R(b){M.fromBufferAttribute(s,b),T.copy(M);let E=l[b];S.copy(E),S.sub(M.multiplyScalar(M.dot(E))).normalize(),_.crossVectors(T,E);let P=_.dot(o[b])<0?-1:1;a.setXYZW(b,S.x,S.y,S.z,P)}for(let b=0,E=v.length;b<E;++b){let A=v[b],P=A.start,L=A.count;for(let D=P,w=P+L;D<w;D+=3)R(e.getX(D+0)),R(e.getX(D+1)),R(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,l=new B,o=new B,u=new B,c=new B,h=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),u.fromBufferAttribute(n,m),l.add(c),o.add(c),u.add(c),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(l,o){let u=l.array,c=l.itemSize,h=l.normalized,f=new u.constructor(o.length*c),p=0,g=0;for(let x=0,m=o.length;x<m;x++){l.isInterleavedBufferAttribute?p=o[x]*l.data.stride+l.offset:p=o[x]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new Yt(f,c,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],u=e(o,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let o=[],u=r[l];for(let c=0,h=u.length;c<h;c++){let f=u[c],p=e(f,n);o.push(p)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let u in o)o[u]!==void 0&&(e[u]=o[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let o in n){let u=n[o];e.data.attributes[o]=u.toJSON(e.data)}let s={},r=!1;for(let o in this.morphAttributes){let u=this.morphAttributes[o],c=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(s[o]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let c=s[u];this.setAttribute(u,c.clone(t))}let r=e.morphAttributes;for(let u in r){let c=[],h=r[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,c=a.length;u<c;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pu=new B,W0=new B,X0=new at,pi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pu.subVectors(n,t).cross(W0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(pu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||X0.getNormalMatrix(e),s=this.coplanarPoint(pu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},q0=0,Ri=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Fr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Du,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var zi=new B,mu=new B,Pa=new B,Ia=new B,Rr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mu.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ia.copy(this.origin).sub(mu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),l=Ia.dot(this.direction),o=-Ia.dot(Pa),u=Ia.lengthSq(),c=Math.abs(1-a*a),h,f,p,g;if(c>0)if(h=a*o-l,f=a*l-o,g=r*c,h>=0)if(f>=-g)if(f<=g){let x=1/c;h*=x,f*=x,p=h*(h+a*f+2*l)+f*(a*h+f+2*o)+u}else f=r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f=-r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f<=-g?(h=Math.max(0,-(-a*r+l)),f=h>0?-r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u):f<=g?(h=0,f=Math.min(Math.max(-r,-o),r),p=f*(f+2*o)+u):(h=Math.max(0,-(a*r+l)),f=h>0?r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u);else f=a>0?-r:r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(mu).addScaledVector(Pa,f),p}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,o,u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),c>=0?(r=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(l=(e.min.z-f.z)*h,o=(e.max.z-f.z)*h):(l=(e.max.z-f.z)*h,o=(e.min.z-f.z)*h),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,l=this.direction,o=l.x,u=l.y,c=l.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,d=n.x-a.x,v=n.y-a.y,S=n.z-a.z,_=Math.abs(o),M=Math.abs(u),T=Math.abs(c),R,b,E,A,P,L,D,w,I,N,U,z;if(_>=M&&_>=T?(E=o,L=h,I=g,z=d,o>=0?(R=u,b=c,A=f,P=p,D=x,w=m,N=v,U=S):(R=c,b=u,A=p,P=f,D=m,w=x,N=S,U=v)):M>=T?(E=u,L=f,I=x,z=v,u>=0?(R=c,b=o,A=p,P=h,D=m,w=g,N=S,U=d):(R=o,b=c,A=h,P=p,D=g,w=m,N=d,U=S)):(E=c,L=p,I=m,z=S,c>=0?(R=o,b=u,A=h,P=f,D=g,w=x,N=d,U=v):(R=u,b=o,A=f,P=h,D=x,w=g,N=v,U=d)),E===0)return null;let O=R/E,k=b/E,H=1/E,$=A-O*L,le=P-k*L,ke=D-O*I,ye=w-k*I,Ne=N-O*z,X=U-k*z,Z=Ne*ye-X*ke,Ee=$*X-le*Ne,Pe=ke*le-ye*$;if(s){if(Z<0||Ee<0||Pe<0)return null}else if((Z<0||Ee<0||Pe<0)&&(Z>0||Ee>0||Pe>0))return null;let Me=Z+Ee+Pe;if(Me===0)return null;let Ze=H*(Z*L+Ee*I+Pe*z);return(Me>0?Ze<0:Ze>0)?null:this.at(Ze/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vf=new Je,Is=new Rr,La=new ri,_f=new B,Da=new B,Na=new B,Ua=new B,gu=new B,Fa=new B,yf=new B,Oa=new B,ft=class extends rn{constructor(e=new Mt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Fa.set(0,0,0);for(let o=0,u=r.length;o<u;o++){let c=l[o],h=r[o];c!==0&&(gu.fromBufferAttribute(h,e),a?Fa.addScaledVector(gu,c):Fa.addScaledVector(gu.sub(t),c))}t.add(Fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(La.containsPoint(Is.origin)===!1&&(Is.intersectSphere(La,_f)===null||Is.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(vf.copy(r).invert(),Is.copy(e.ray).applyMatrix4(vf),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,M=S;_<M;_+=3){let T=l.getX(_),R=l.getX(_+1),b=l.getX(_+2);s=Ba(this,d,e,n,u,c,h,T,R,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=l.getX(m),S=l.getX(m+1),_=l.getX(m+2);s=Ba(this,a,e,n,u,c,h,v,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,M=S;_<M;_+=3){let T=_,R=_+1,b=_+2;s=Ba(this,d,e,n,u,c,h,T,R,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,S=m+1,_=m+2;s=Ba(this,a,e,n,u,c,h,v,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Y0(i,e,t,n,s,r,a,l){let o;if(e.side===yn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,e.side===fs,l),o===null)return null;Oa.copy(l),Oa.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Oa);return u<t.near||u>t.far?null:{distance:u,point:Oa.clone(),object:i}}function Ba(i,e,t,n,s,r,a,l,o,u){i.getVertexPosition(l,Da),i.getVertexPosition(o,Na),i.getVertexPosition(u,Ua);let c=Y0(i,e,t,n,Da,Na,Ua,yf);if(c){let h=new B;ss.getBarycoord(yf,Da,Na,Ua,h),s&&(c.uv=ss.getInterpolatedAttribute(s,l,o,u,h,new Ge)),r&&(c.uv1=ss.getInterpolatedAttribute(r,l,o,u,h,new Ge)),a&&(c.normal=ss.getInterpolatedAttribute(a,l,o,u,h,new B),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let f={a:l,b:o,c:u,normal:new B,materialIndex:0};ss.getNormal(Da,Na,Ua,f.normal),c.face=f,c.barycoord=h}return c}var rs=class extends Nn{constructor(e=null,t=1,n=1,s,r,a,l,o,u=sn,c=sn,h,f){super(null,a,l,o,u,c,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xr=new Je,Mf=new Je,za=[],bf=new si,Z0=new Je,vo=new ft,_o=new ri,Hi=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Un(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Z0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),bf.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(bf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xr),_o.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(_o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(n),e.ray.intersectsSphere(_o)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xr),Mf.multiplyMatrices(n,xr),vo.matrixWorld=Mf,vo.raycast(e,za);for(let a=0,l=za.length;a<l;a++){let o=za[a];o.instanceId=r,o.object=this,t.push(o)}za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Un(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rs(new Float32Array(s*this.count),s,this.count,Bs,oi));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ls=new ri,$0=new Ge(.5,.5),ka=new B,Cr=class{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],u=r[3],c=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],v=r[12],S=r[13],_=r[14],M=r[15];if(s[0].setComponents(u-a,p-c,d-g,M-v).normalize(),s[1].setComponents(u+a,p+c,d+g,M+v).normalize(),s[2].setComponents(u+l,p+h,d+x,M+S).normalize(),s[3].setComponents(u-l,p-h,d-x,M-S).normalize(),n)s[4].setComponents(o,f,m,_).normalize(),s[5].setComponents(u-o,p-f,d-m,M-_).normalize();else if(s[4].setComponents(u-o,p-f,d-m,M-_).normalize(),t===mi)s[5].setComponents(u+o,p+f,d+m,M+_).normalize();else if(t===Tr)s[5].setComponents(o,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let t=$0.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var al=class extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ll=new B,cl=new B,Sf=new Je,yo=new Rr,Ha=new ri,xu=new B,Tf=new B,Io=class extends rn{constructor(e=new Mt,t=new al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ll.fromBufferAttribute(t,s-1),cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ll.distanceTo(cl);e.setAttribute("lineDistance",new Qe(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;Sf.copy(s).invert(),yo.copy(e.ray).applyMatrix4(Sf);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=u){let d=c.getX(x),v=c.getX(x+1),S=Va(this,e,yo,o,d,v,x);S&&t.push(S)}if(this.isLineLoop){let x=c.getX(g-1),m=c.getX(p),d=Va(this,e,yo,o,x,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=u){let d=Va(this,e,yo,o,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=Va(this,e,yo,o,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Va(i,e,t,n,s,r,a){let l=i.geometry.attributes.position;if(ll.fromBufferAttribute(l,s),cl.fromBufferAttribute(l,r),t.distanceSqToSegment(ll,cl,xu,Tf)>n)return;xu.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(xu);if(!(u<e.near||u>e.far))return{distance:u,point:Tf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Pr=class extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ef=new Je,Tu=new Rr,Ga=new ri,Wa=new B,Lo=class extends rn{constructor(e=new Mt,t=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;Ef.copy(s).invert(),Tu.copy(e.ray).applyMatrix4(Ef);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,x=p;g<x;g++){let m=u.getX(g);Wa.fromBufferAttribute(h,m),wf(Wa,m,o,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,x=p;g<x;g++)Wa.fromBufferAttribute(h,g),wf(Wa,g,o,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function wf(i,e,t,n,s,r,a){let l=Tu.distanceSqToPoint(i);if(l<t){let o=new B;Tu.closestPointToPoint(i,o),o.applyMatrix4(n);let u=s.ray.origin.distanceTo(o);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Do=class extends Nn{constructor(e=[],t=ds,n,s,r,a,l,o,u,c){super(e,t,n,s,r,a,l,o,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hn=class extends Nn{constructor(e,t,n,s,r,a,l,o,u){super(e,t,n,s,r,a,l,o,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var os=class extends Nn{constructor(e,t,n=vi,s,r,a,l=sn,o=sn,u,c=wi,h=1){if(c!==wi&&c!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,a,l,o,c,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ul=class extends os{constructor(e,t=vi,n=ds,s,r,a=sn,l=sn,o,u=wi){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,n,s,r,a,l,o,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},No=class extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},gi=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],u=[],c=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2));function g(x,m,d,v,S,_,M,T,R,b,E){let A=_/R,P=M/b,L=_/2,D=M/2,w=T/2,I=R+1,N=b+1,U=0,z=0,O=new B;for(let k=0;k<N;k++){let H=k*P-D;for(let $=0;$<I;$++){let le=$*A-L;O[x]=le*v,O[m]=H*S,O[d]=w,u.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[d]=T>0?1:-1,c.push(O.x,O.y,O.z),h.push($/R),h.push(1-k/b),U+=1}}for(let k=0;k<b;k++)for(let H=0;H<R;H++){let $=f+H+I*k,le=f+H+I*(k+1),ke=f+(H+1)+I*(k+1),ye=f+(H+1)+I*k;o.push($,le,ye),o.push(le,ke,ye),z+=6}l.addGroup(p,z,E),p+=z,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Uo=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],l=[],o=[],u=new B,c=new Ge;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;u.x=e*Math.cos(p),u.y=e*Math.sin(p),a.push(u.x,u.y,u.z),l.push(0,0,1),c.x=(a[f]/e+1)/2,c.y=(a[f+1]/e+1)/2,o.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ir=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let u=this;s=Math.floor(s),r=Math.floor(r);let c=[],h=[],f=[],p=[],g=0,x=[],m=n/2,d=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(p,2));function v(){let _=new B,M=new B,T=0,R=(t-e)/n;for(let b=0;b<=r;b++){let E=[],A=b/r,P=A*(t-e)+e;for(let L=0;L<=s;L++){let D=L/s,w=D*o+l,I=Math.sin(w),N=Math.cos(w);M.x=P*I,M.y=-A*n+m,M.z=P*N,h.push(M.x,M.y,M.z),_.set(I,R,N).normalize(),f.push(_.x,_.y,_.z),p.push(D,1-A),E.push(g++)}x.push(E)}for(let b=0;b<s;b++)for(let E=0;E<r;E++){let A=x[E][b],P=x[E+1][b],L=x[E+1][b+1],D=x[E][b+1];(e>0||E!==0)&&(c.push(A,P,D),T+=3),(t>0||E!==r-1)&&(c.push(P,L,D),T+=3)}u.addGroup(d,T,0),d+=T}function S(_){let M=g,T=new Ge,R=new B,b=0,E=_===!0?e:t,A=_===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*A,0),f.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let L=0;L<=s;L++){let w=L/s*o+l,I=Math.cos(w),N=Math.sin(w);R.x=E*N,R.y=m*A,R.z=E*I,h.push(R.x,R.y,R.z),f.push(0,A,0),T.x=I*.5+.5,T.y=N*.5*A+.5,p.push(T.x,T.y),g++}for(let L=0;L<s;L++){let D=M+L,w=P+L;_===!0?c.push(w,w+1,D):c.push(w+1,w,D),b+=3}u.addGroup(d,b,_===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hl=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];l(s),u(n),c(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let S=new B,_=new B,M=new B;for(let T=0;T<t.length;T+=3)p(t[T+0],S),p(t[T+1],_),p(t[T+2],M),o(S,_,M,v)}function o(v,S,_,M){let T=M+1,R=[];for(let b=0;b<=T;b++){R[b]=[];let E=v.clone().lerp(_,b/T),A=S.clone().lerp(_,b/T),P=T-b;for(let L=0;L<=P;L++)L===0&&b===T?R[b][L]=E:R[b][L]=E.clone().lerp(A,L/P)}for(let b=0;b<T;b++)for(let E=0;E<2*(T-b)-1;E++){let A=Math.floor(E/2);E%2===0?(f(R[b][A+1]),f(R[b+1][A]),f(R[b][A])):(f(R[b][A+1]),f(R[b+1][A+1]),f(R[b+1][A]))}}function u(v){let S=new B;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(v),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function c(){let v=new B;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let _=m(v)/2/Math.PI+.5,M=d(v)/Math.PI+.5;a.push(_,1-M)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){let S=a[v+0],_=a[v+2],M=a[v+4],T=Math.max(S,_,M),R=Math.min(S,_,M);T>.9&&R<.1&&(S<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,S){let _=v*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){let v=new B,S=new B,_=new B,M=new B,T=new Ge,R=new Ge,b=new Ge;for(let E=0,A=0;E<r.length;E+=9,A+=6){v.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),T.set(a[A+0],a[A+1]),R.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),M.copy(v).add(S).add(_).divideScalar(3);let P=m(M);x(T,A+0,v,P),x(R,A+2,S,P),x(b,A+4,_,P)}}function x(v,S,_,M){M<0&&v.x===1&&(a[S]=v.x-1),_.x===0&&_.z===0&&(a[S]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Fo=class i extends hl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Gt=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(n),o=Math.floor(s),u=l+1,c=o+1,h=e/l,f=t/o,p=[],g=[],x=[],m=[];for(let d=0;d<c;d++){let v=d*f-a;for(let S=0;S<u;S++){let _=S*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(S/l),m.push(1-d/o)}}for(let d=0;d<o;d++)for(let v=0;v<l;v++){let S=v+u*d,_=v+u*(d+1),M=v+1+u*(d+1),T=v+1+u*d;p.push(S,_,T),p.push(_,M,T)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Oo=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),u=0,c=[],h=new B,f=new B,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],S=d/n,_=a+S*l,M=e*Math.cos(_),T=Math.sqrt(e*e-M*M),R=0;d===0&&a===0?R=.5/t:d===n&&o===Math.PI&&(R=-.5/t);for(let b=0;b<=t;b++){let E=b/t,A=s+E*r;h.x=-T*Math.cos(A),h.y=M,h.z=T*Math.sin(A),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+R,1-S),v.push(u++)}c.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let S=c[d][v+1],_=c[d][v],M=c[d+1][v],T=c[d+1][v+1];(d!==0||a>0)&&p.push(S,_,T),(d!==n-1||o<Math.PI)&&p.push(_,M,T)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Af(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Af(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function wn(i){let e={};for(let t=0;t<i.length;t++){let n=zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Af(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function J0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var ks={clone:zs,merge:wn},K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=J0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fl=class extends pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ln=class extends Ri{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lr=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dl=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var as=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pl=class extends as{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mu,endingEnd:Mu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case bu:r=e,l=2*t-n;break;case Su:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case bu:a=e,o=2*n-t;break;case Su:a=1,o=n+s[1]-s[0];break;default:a=e-1,o=t}let u=(n-t)*.5,c=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(o-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let M=0;M!==l;++M)r[M]=d*a[c+M]+v*a[u+M]+S*a[o+M]+_*a[h+M];return r}},ml=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=(n-t)/(s-t),h=1-c;for(let f=0;f!==l;++f)r[f]=a[u+f]*h+a[o+f]*c;return r}},gl=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xl=class extends as{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this.inTangents,h=this.outTangents;if(!c||!h){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==l;++m)r[m]=a[u+m]*x+a[o+m]*g;return r}let f=l*2,p=e-1;for(let g=0;g!==l;++g){let x=a[u+g],m=a[o+g],d=p*f+g*2,v=h[d],S=h[d+1],_=e*f+g*2,M=c[_],T=c[_+1],R=em(n,t,v,M,s);r[g]=vd(R,x,S,T,m)}return r}};function vd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Q0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function em(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let l=vd(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let o=Q0(r,e,t,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var $n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),vu(e.settings)&&(n.settings={inTangents:vr(e.settings.inTangents,Array),outTangents:vr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case il:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break;case yu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return Ya;case this.InterpolantFactoryMethodBezier:return yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;vu(this.settings)&&(Rf(this.settings.inTangents,e),Rf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){rt("KeyframeTrack: Time is not a valid number.",this,l,o),e=!1;break}if(a!==null&&a>o){rt("KeyframeTrack: Out of order keys.",this,l,o,a),e=!1;break}a=o}if(s!==void 0&&C0(s))for(let l=0,o=s.length;l!==o;++l){let u=s[l];if(isNaN(u)){rt("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1,a=1;for(let l=1;l<r;++l){let o=!1,u=e[l],c=e[l+1];if(u!==c&&(l!==1||u!==e[0]))if(s)o=!0;else{let h=l*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){o=!0;break}}}if(o){if(l!==a){e[a]=e[l];let h=l*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,o=a*n,u=0;u!==n;++u)t[o+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,vu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=il;var ls=class extends $n{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Mo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};vl.prototype.ValueTypeName="color";var _l=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};_l.prototype.ValueTypeName="number";var yl=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-t)/(s-t),u=e*l;for(let c=u+l;u!==c;u+=4)gn.slerpFlat(r,0,a,u-l,a,u,o);return r}},Bo=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};Bo.prototype.ValueTypeName="quaternion";Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends $n{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Mo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}};Ml.prototype.ValueTypeName="vector";var bl=class{constructor(e,t,n){let s=this,r=!1,a=0,l=0,o,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){l++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,l),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){let h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_d=new bl,Sl=class{constructor(e){this.manager=e!==void 0?e:_d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dr=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zo=class extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_u=new Je,Cf=new B,Pf=new B,ko=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cf),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){_u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_u,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new B,qa=new gn,Ti=new B,Vi=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xa,qa,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new B,If=new Ge,Lf=new Ge,_n=class extends Vi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,If,Lf),t.subVectors(Lf,If)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*n/u,s*=a.width/o,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Eu=class extends ko{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Eo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ho=class extends Dr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Eu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var us=class extends Vi{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wu=class extends ko{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nr=class extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var hs=class extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var _r=-90,yr=1,Tl=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(_r,yr,e,t);s.layers=this.layers,this.add(s);let r=new _n(_r,yr,e,t);r.layers=this.layers,this.add(r);let a=new _n(_r,yr,e,t);a.layers=this.layers,this.add(a);let l=new _n(_r,yr,e,t);l.layers=this.layers,this.add(l);let o=new _n(_r,yr,e,t);o.layers=this.layers,this.add(o);let u=new _n(_r,yr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,o]=t;for(let u of t)this.remove(u);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},El=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=tm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function tm(){this._document.hidden===!1&&this.reset()}var Ku="\\[\\]\\.:\\/",nm=new RegExp("["+Ku+"]","g"),ju="[^"+Ku+"]",im="[^"+Ku.replace("\\.","")+"]",sm=/((?:WC+[\/:])*)/.source.replace("WC",ju),rm=/(WCOD+)?/.source.replace("WCOD",im),om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),lm=new RegExp("^"+sm+rm+om+am+"$"),cm=["material","materials","bones","map"],Au=class{constructor(e,t,n){let s=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nm,"")}static parseTrackName(e){let t=lm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let o=n(l.children);if(o)return o}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Au;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dy=new Float32Array(1);var sh=class sh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};sh.prototype.isMatrix2=!0;var Ru=sh;function Qu(i,e,t,n){let s=um(n);switch(t){case qu:return i*e;case Bs:return i*e/s.components*s.byteLength;case Dl:return i*e/s.components*s.byteLength;case ms:return i*e*2/s.components*s.byteLength;case Nl:return i*e*2/s.components*s.byteLength;case Yu:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case Ul:return i*e*4/s.components*s.byteLength;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case zl:return Math.max(i,16)*Math.max(e,8)/4;case Fl:case Bl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Hl:case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Jo:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oc:case ac:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ko:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function um(i){switch(i){case En:case Vu:return{byteLength:1,components:1};case Or:case Gu:case on:return{byteLength:2,components:1};case Il:case Ll:return{byteLength:2,components:4};case vi:case Pl:case oi:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xm(i){let e=new WeakMap;function t(l,o){let u=l.array,c=l.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,u,c),l.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,o,u){let c=o.array,h=o.updateRanges;if(i.bindBuffer(u,l),h.length===0)i.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=e.get(l);o&&(i.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let c=e.get(l);(!c||c.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,o));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,o),u.version=l.version}}return{get:s,remove:r,update:a}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_m=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Im=`#ifdef USE_IRIDESCENCE
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
#endif`,Lm=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hm=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",$m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
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
}`,og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
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
#endif`,gg=`uniform sampler2D dfgLUT;
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
}`,xg=`
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rg=`#if defined( USE_POINTS_UV )
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
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
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
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hg=`#ifdef USE_NORMALMAP
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
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ix=`float getShadowMask() {
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
}`,sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
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
}`,Ex=`#if DEPTH_PACKING == 3200
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
}`,wx=`#define DISTANCE
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
}`,Ax=`#define DISTANCE
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Nx=`#define LAMBERT
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
}`,Ux=`#define LAMBERT
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
}`,Fx=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,Bx=`#define NORMAL
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
}`,zx=`#define NORMAL
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
}`,kx=`#define PHONG
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
}`,Hx=`#define PHONG
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
}`,Vx=`#define STANDARD
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
}`,Gx=`#define STANDARD
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
}`,Wx=`#define TOON
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
}`,Xx=`#define TOON
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
}`,qx=`uniform float size;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Zx=`#include <common>
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
}`,$x=`uniform vec3 color;
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
}`,Jx=`uniform float rotation;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:vm,alphahash_pars_fragment:_m,alphamap_fragment:ym,alphamap_pars_fragment:Mm,alphatest_fragment:bm,alphatest_pars_fragment:Sm,aomap_fragment:Tm,aomap_pars_fragment:Em,batching_pars_vertex:wm,batching_vertex:Am,begin_vertex:Rm,beginnormal_vertex:Cm,bsdfs:Pm,iridescence_fragment:Im,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Fm,color_fragment:Om,color_pars_fragment:Bm,color_pars_vertex:zm,color_vertex:km,common:Hm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:Zm,colorspace_pars_fragment:$m,envmap_fragment:Jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:ug,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:sg,gradientmap_pars_fragment:rg,lightmap_pars_fragment:og,lights_lambert_fragment:ag,lights_lambert_pars_fragment:lg,lights_pars_begin:cg,lights_toon_fragment:hg,lights_toon_pars_fragment:fg,lights_phong_fragment:dg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:gg,lights_fragment_begin:xg,lights_fragment_maps:vg,lights_fragment_end:_g,lightprobes_pars_fragment:yg,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:bg,logdepthbuf_pars_vertex:Sg,logdepthbuf_vertex:Tg,map_fragment:Eg,map_pars_fragment:wg,map_particle_fragment:Ag,map_particle_pars_fragment:Rg,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Pg,morphinstance_vertex:Ig,morphcolor_vertex:Lg,morphnormal_vertex:Dg,morphtarget_pars_vertex:Ng,morphtarget_vertex:Ug,normal_fragment_begin:Fg,normal_fragment_maps:Og,normal_pars_fragment:Bg,normal_pars_vertex:zg,normal_vertex:kg,normalmap_pars_fragment:Hg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:Xg,opaque_fragment:qg,packing:Yg,premultiplied_alpha_fragment:Zg,project_vertex:$g,dithering_fragment:Jg,dithering_pars_fragment:Kg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:sx,skinning_pars_vertex:rx,skinning_vertex:ox,skinnormal_vertex:ax,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:ux,tonemapping_pars_fragment:hx,transmission_fragment:fx,transmission_pars_fragment:dx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:xx,background_vert:vx,background_frag:_x,backgroundCube_vert:yx,backgroundCube_frag:Mx,cube_vert:bx,cube_frag:Sx,depth_vert:Tx,depth_frag:Ex,distance_vert:wx,distance_frag:Ax,equirect_vert:Rx,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Ix,meshbasic_vert:Lx,meshbasic_frag:Dx,meshlambert_vert:Nx,meshlambert_frag:Ux,meshmatcap_vert:Fx,meshmatcap_frag:Ox,meshnormal_vert:Bx,meshnormal_frag:zx,meshphong_vert:kx,meshphong_frag:Hx,meshphysical_vert:Vx,meshphysical_frag:Gx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:Zx,shadow_frag:$x,sprite_vert:Jx,sprite_frag:Kx},Oe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Pi={basic:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:wn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:wn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new xe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:wn([Oe.points,Oe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:wn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:wn([Oe.common,Oe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:wn([Oe.sprite,Oe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:wn([Oe.common,Oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:wn([Oe.lights,Oe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Pi.physical={uniforms:wn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var mc={r:0,b:0,g:0},jx=new Je,Vd=new at;Vd.set(-1,0,0,0,1,0,0,0,1);function Qx(i,e,t,n,s,r){let a=new xe(0),l=s===!0?0:1,o,u,c=null,h=0,f=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let _=v.backgroundBlurriness>0;S=e.get(S,_)}return S}function g(v){let S=!1,_=p(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),S=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,S){let _=p(S);_&&(_.isCubeTexture||_.mapping===Wo)?(u===void 0&&(u=new ft(new gi(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:zs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Vd),u.material.toneMapped=xt.getTransfer(_.colorSpace)!==At,(c!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new ft(new Gt(2,2),new pt({name:"BackgroundMaterial",uniforms:zs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,o.material.toneMapped=xt.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||h!==_.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))}function m(v,S){v.getRGB(mc,Ju(i)),t.buffers.color.setClear(mc.r,mc.g,mc.b,S,r)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:g,addToRenderList:x,dispose:d}}function ev(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(P,L,D,w,I){let N=!1,U=h(P,w,D,L);r!==U&&(r=U,u(r.object)),N=p(P,w,D,I),N&&g(P,w,D,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,_(P,L,D,w),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function o(){return i.createVertexArray()}function u(P){return i.bindVertexArray(P)}function c(P){return i.deleteVertexArray(P)}function h(P,L,D,w){let I=w.wireframe===!0,N=n[L.id];N===void 0&&(N={},n[L.id]=N);let U=P.isInstancedMesh===!0?P.id:0,z=N[U];z===void 0&&(z={},N[U]=z);let O=z[D.id];O===void 0&&(O={},z[D.id]=O);let k=O[I];return k===void 0&&(k=f(o()),O[I]=k),k}function f(P){let L=[],D=[],w=[];for(let I=0;I<t;I++)L[I]=0,D[I]=0,w[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:w,object:P,attributes:{},index:null}}function p(P,L,D,w){let I=r.attributes,N=L.attributes,U=0,z=D.getAttributes();for(let O in z)if(z[O].location>=0){let H=I[O],$=N[O];if($===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),H===void 0||H.attribute!==$||$&&H.data!==$.data)return!0;U++}return r.attributesNum!==U||r.index!==w}function g(P,L,D,w){let I={},N=L.attributes,U=0,z=D.getAttributes();for(let O in z)if(z[O].location>=0){let H=N[O];H===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let $={};$.attribute=H,H&&H.data&&($.data=H.data),I[O]=$,U++}r.attributes=I,r.attributesNum=U,r.index=w}function x(){let P=r.newAttributes;for(let L=0,D=P.length;L<D;L++)P[L]=0}function m(P){d(P,0)}function d(P,L){let D=r.newAttributes,w=r.enabledAttributes,I=r.attributeDivisors;D[P]=1,w[P]===0&&(i.enableVertexAttribArray(P),w[P]=1),I[P]!==L&&(i.vertexAttribDivisor(P,L),I[P]=L)}function v(){let P=r.newAttributes,L=r.enabledAttributes;for(let D=0,w=L.length;D<w;D++)L[D]!==P[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function S(P,L,D,w,I,N,U){U===!0?i.vertexAttribIPointer(P,L,D,I,N):i.vertexAttribPointer(P,L,D,w,I,N)}function _(P,L,D,w){x();let I=w.attributes,N=D.getAttributes(),U=L.defaultAttributeValues;for(let z in N){let O=N[z];if(O.location>=0){let k=I[z];if(k===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let H=k.normalized,$=k.itemSize,le=e.get(k);if(le===void 0)continue;let ke=le.buffer,ye=le.type,Ne=le.bytesPerElement,X=ye===i.INT||ye===i.UNSIGNED_INT||k.gpuType===Pl;if(k.isInterleavedBufferAttribute){let Z=k.data,Ee=Z.stride,Pe=k.offset;if(Z.isInstancedInterleavedBuffer){for(let Me=0;Me<O.locationSize;Me++)d(O.location+Me,Z.meshPerAttribute);P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Me=0;Me<O.locationSize;Me++)m(O.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Me=0;Me<O.locationSize;Me++)S(O.location+Me,$/O.locationSize,ye,H,Ee*Ne,(Pe+$/O.locationSize*Me)*Ne,X)}else{if(k.isInstancedBufferAttribute){for(let Z=0;Z<O.locationSize;Z++)d(O.location+Z,k.meshPerAttribute);P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Z=0;Z<O.locationSize;Z++)m(O.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Z=0;Z<O.locationSize;Z++)S(O.location+Z,$/O.locationSize,ye,H,$*Ne,$/O.locationSize*Z*Ne,X)}}else if(U!==void 0){let H=U[z];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(O.location,H);break;case 3:i.vertexAttrib3fv(O.location,H);break;case 4:i.vertexAttrib4fv(O.location,H);break;default:i.vertexAttrib1fv(O.location,H)}}}}v()}function M(){E();for(let P in n){let L=n[P];for(let D in L){let w=L[D];for(let I in w){let N=w[I];for(let U in N)c(N[U].object),delete N[U];delete w[I]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let D in L){let w=L[D];for(let I in w){let N=w[I];for(let U in N)c(N[U].object),delete N[U];delete w[I]}}delete n[P.id]}function R(P){for(let L in n){let D=n[L];for(let w in D){let I=D[w];if(I[P.id]===void 0)continue;let N=I[P.id];for(let U in N)c(N[U].object),delete N[U];delete I[P.id]}}}function b(P){for(let L in n){let D=n[L],w=P.isInstancedMesh===!0?P.id:0,I=D[w];if(I!==void 0){for(let N in I){let U=I[N];for(let z in U)c(U[z].object),delete U[z];delete I[N]}delete D[w],Object.keys(D).length===0&&delete n[L]}}}function E(){A(),a=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function tv(i,e,t){let n;function s(o){n=o}function r(o,u){i.drawArrays(n,o,u),t.update(u,n,1)}function a(o,u,c){c!==0&&(i.drawArraysInstanced(n,o,u,c),t.update(u,n,c))}function l(o,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function nv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){let b=R===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==En&&R!==oi&&!b&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",c=o(u);c!==u&&(nt("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:_,maxSamples:M,samples:T}}function iv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new pi,l=new at,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{let v=r?0:n,S=v*4,_=d.clippingState||null;o.value=_,_=c(g,f,S,p);for(let M=0;M!==S;++M)_[M]=t[M];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=o.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,_=p;S!==x;++S,_+=4)a.copy(h[S]).applyMatrix4(v,l),a.normal.toArray(m,_),m[_+3]=a.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var kr=4,sv=6,rv=20,ov=256,Qo=new us,yd=new xe,rh=null,oh=0,ah=0,lh=!1,av=new B,Hs=new B,xc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:l=av}=r;rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o,l),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,oh,ah),this._renderer.xr.enabled=lh,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:on,format:Wn,colorSpace:bo,depthBuffer:!1},s=Md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lv(r)),this._blurMaterial=uv(r,e,t),this._ggxMaterial=cv(r,e,t)}return s}_compileMaterial(e){let t=new ft(new Mt,e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,n,s,r){let o=new _n(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(yd),h.toneMapping=xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new gi,new en({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,d=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy(yd),d=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(o.up.set(0,u[S],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+c[S],r.y,r.z)):_===1?(o.up.set(0,0,u[S]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+c[S],r.z)):(o.up.set(0,u[S],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+c[S]));let M=this._cubeSize;zr(s,_*M,S>2?M:0,M,M),h.setRenderTarget(s),d&&h.render(x,o),h.render(e,o)}h.toneMapping=p,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ds||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let o=this._cubeSize;zr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let o=a.uniforms,u=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),f=u*1.25,p=h*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-kr?n-g+kr:0),d=4*(this._cubeSize-x);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=g-t,zr(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(l,Qo),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,zr(e,m,d,3*x,2*x),s.setRenderTarget(e),s.render(l,Qo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[s];o.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let c=this._sizeLods[s],h=3*c*(s>this._lodMax-kr?s-this._lodMax+kr:0),f=4*(this._cubeSize-c);zr(t,h,f,3*c,2*c),a.setRenderTarget(t),a.render(o,Qo)}};function lv(i){let e=[],t=[],n=i,s=i-kr+1+sv;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),o=-l,u=1+l,c=[o,o,u,o,u,u,o,o,u,u,o,u],h=6,f=6,p=3,g=new Float32Array(p*f*h),x=new Float32Array(p*f*h);for(let d=0;d<h;d++){let v=d%3*2/3-1,S=d>2?0:-1,_=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(_,p*f*d);for(let M=0;M<f;M++){let T=c[M*2]*2-1,R=c[M*2+1]*2-1;d===0?Hs.set(1,R,T):d===1?Hs.set(-T,1,-R):d===2?Hs.set(-T,R,1):d===3?Hs.set(-1,R,-T):d===4?Hs.set(-T,-1,R):Hs.set(T,R,-1),Hs.toArray(x,(d*f+M)*p)}}let m=new Mt;m.setAttribute("position",new Yt(g,p)),m.setAttribute("outputDirection",new Yt(x,p)),t.push(new ft(m,null)),n>kr&&n--}return{lodMeshes:t,sizeLods:e}}function Md(i,e,t){let n=new Ut(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cv(i,e,t){return new pt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ov,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function uv(i,e,t){return new pt({name:"SphericalGaussianBlur",defines:{SAMPLES:rv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function bd(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Sd(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vc=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Do(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new pt({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Vn});r.uniforms.tEquirect.value=t;let a=new ft(s,r),l=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Ot),new Tl(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function hv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Al||p===Rl)if(e.has(f)){let g=e.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new vc(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",u),l(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===Al||p===Rl,x=p===ds||p===Os;if(g||x){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new xc(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&o(v)?(n===null&&(n=new xc(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function l(f,p){return p===Al?f.mapping=ds:p===Rl&&(f.mapping=Os),f}function o(f){let p=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function fv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function dv(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function o(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(g===void 0)return;if(p!==null){let v=p.array;x=p.version;for(let S=0,_=v.length;S<_;S+=3){let M=v[S+0],T=v[S+1],R=v[S+2];f.push(M,T,T,R,R,M)}}else{let v=g.array;x=g.version;for(let S=0,_=v.length/3-1;S<_;S+=3){let M=S+0,T=S+1,R=S+2;f.push(M,T,T,R,R,M)}}let m=new(g.count>=65535?Po:Co)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function c(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:l,update:o,getWireframeAttribute:c}}function pv(i,e,t){let n;function s(h){n=h}let r,a;function l(h){r=h.type,a=h.bytesPerElement}function o(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*a,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function mv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gv(i,e,t){let n=new WeakMap,s=new vt;function r(a,l,o){let u=a.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=c!==void 0?c.length:0,f=n.get(l);if(f===void 0||f.count!==h){let E=function(){R.dispose(),n.delete(l),l.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=l.attributes.position.count*S,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*M*4*h),R=new wo(T,_,M,h);R.type=oi,R.needsUpdate=!0;let b=S*4;for(let A=0;A<h;A++){let P=m[A],L=d[A],D=v[A],w=_*M*4*A;for(let I=0;I<P.count;I++){let N=I*b;p===!0&&(s.fromBufferAttribute(P,I),T[w+N+0]=s.x,T[w+N+1]=s.y,T[w+N+2]=s.z,T[w+N+3]=0),g===!0&&(s.fromBufferAttribute(L,I),T[w+N+4]=s.x,T[w+N+5]=s.y,T[w+N+6]=s.z,T[w+N+7]=0),x===!0&&(s.fromBufferAttribute(D,I),T[w+N+8]=s.x,T[w+N+9]=s.y,T[w+N+10]=s.z,T[w+N+11]=D.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new Ge(_,M)},n.set(l,f),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];let g=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",u)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function xv(i,e,t,n,s){let r=new WeakMap;function a(u){let c=s.render.frame,h=u.geometry,f=e.get(u,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==c&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function l(){r=new WeakMap}function o(u){let c=u.target;c.removeEventListener("dispose",o),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:l}}var vv={[Uu]:"LINEAR_TONE_MAPPING",[Fu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[Bu]:"ACES_FILMIC_TONE_MAPPING",[ku]:"AGX_TONE_MAPPING",[Go]:"NEUTRAL_TONE_MAPPING",[zu]:"CUSTOM_TONE_MAPPING"};function _v(i,e,t,n,s,r){let a=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,u=new Mt;u.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let c=new fl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ft(u,c),f=new us(-1,1,1,-1,0,1),p=null,g=null,x=!1,m,d=null,v=[],S=!1;this.setSize=function(_,M){a.setSize(_,M),l!==null&&l.setSize(_,M),o!==null&&o.setSize(_,M);for(let T=0;T<v.length;T++){let R=v[T];R.setSize&&R.setSize(_,M)}},this.setEffects=function(_){v=_,S=v.length>0&&v[0].isRenderPass===!0;let M=a.width,T=a.height;v.length>0&&l===null&&(l=new Ut(M,T,{type:on,depthBuffer:!1,stencilBuffer:!1}),o=new Ut(M,T,{type:on,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let b=v[R];b.setSize&&b.setSize(M,T)}},this.begin=function(_,M){if(x||_.toneMapping===xi&&v.length===0)return!1;if(d=M,M!==null){let T=M.width,R=M.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return S===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=xi,!0},this.hasRenderPass=function(){return S},this.end=function(_,M){_.toneMapping=m,x=!0;let T=a,R=l;for(let b=0;b<v.length;b++){let E=v[b];E.enabled!==!1&&(E.render(_,R,T,M),E.needsSwap!==!1&&(T=R,R=R===l?o:l))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,c.defines={},xt.getTransfer(p)===At&&(c.defines.SRGB_TRANSFER="");let b=vv[g];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(d),_.render(h,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var Gd=new Nn,hh=new os(1,1),Wd=new wo,Xd=new ol,qd=new Do,Td=[],Ed=[],wd=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function Vr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Td[s];if(r===void 0&&(r=new Float32Array(s),Td[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mc(i,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),un(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),un(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),un(t,e)}}function Tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),un(t,n)}}function Ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),un(t,n)}}function wv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;wd.set(n),i.uniformMatrix4fv(this.addr,!1,wd),un(t,n)}}function Av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),un(t,e)}}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),un(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),un(t,e)}}function Iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),un(t,e)}}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),un(t,e)}}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),un(t,e)}}function Uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hh.compareFunction=t.isReversedDepthBuffer()?pc:dc,r=hh):r=Gd,t.setTexture2D(e||r,s)}function Fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xd,s)}function Ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qd,s)}function Bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wd,s)}function zv(i){switch(i){case 5126:return yv;case 35664:return Mv;case 35665:return bv;case 35666:return Sv;case 35674:return Tv;case 35675:return Ev;case 35676:return wv;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Iv;case 36294:return Lv;case 36295:return Dv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Bv}}function kv(i,e){i.uniform1fv(this.addr,e)}function Hv(i,e){let t=Vr(e,this.size,2);i.uniform2fv(this.addr,t)}function Vv(i,e){let t=Vr(e,this.size,3);i.uniform3fv(this.addr,t)}function Gv(i,e){let t=Vr(e,this.size,4);i.uniform4fv(this.addr,t)}function Wv(i,e){let t=Vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xv(i,e){let t=Vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qv(i,e){let t=Vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yv(i,e){i.uniform1iv(this.addr,e)}function Zv(i,e){i.uniform2iv(this.addr,e)}function $v(i,e){i.uniform3iv(this.addr,e)}function Jv(i,e){i.uniform4iv(this.addr,e)}function Kv(i,e){i.uniform1uiv(this.addr,e)}function jv(i,e){i.uniform2uiv(this.addr,e)}function Qv(i,e){i.uniform3uiv(this.addr,e)}function e1(i,e){i.uniform4uiv(this.addr,e)}function t1(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=hh:a=Gd;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function n1(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xd,r[a])}function i1(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qd,r[a])}function s1(i,e,t){let n=this.cache,s=e.length,r=Mc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wd,r[a])}function r1(i){switch(i){case 5126:return kv;case 35664:return Hv;case 35665:return Vv;case 35666:return Gv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Jv;case 5125:return Kv;case 36294:return jv;case 36295:return Qv;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return s1}}var fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zv(t.type)}},dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r1(t.type)}},ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},ch=/(\w+)(\])?(\[|\.)?/g;function Cd(i,e){i.seq.push(e),i.map[e.id]=e}function o1(i,e,t){let n=i.name,s=n.length;for(ch.lastIndex=0;;){let r=ch.exec(n),a=ch.lastIndex,l=r[1],o=r[2]==="]",u=r[3];if(o&&(l=l|0),u===void 0||u==="["&&a+2===s){Cd(t,u===void 0?new fh(l,i,e):new dh(l,i,e));break}else{let h=t.map[l];h===void 0&&(h=new ph(l),Cd(t,h)),t=h}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);o1(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Pd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var a1=37297,l1=0;function c1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var Id=new at;function u1(i){xt._getMatrix(Id,xt.workingColorSpace,i);let e=`mat3( ${Id.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case So:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ld(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+c1(i.getShaderSource(e),l)}else return r}function h1(i,e){let t=u1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var f1={[Uu]:"Linear",[Fu]:"Reinhard",[Ou]:"Cineon",[Bu]:"ACESFilmic",[ku]:"AgX",[Go]:"Neutral",[zu]:"Custom"};function d1(i,e){let t=f1[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new B;function p1(){xt.getLuminanceCoefficients(gc);let i=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function g1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function ta(i){return i!==""}function Dd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(v1,y1)}var _1=new Map;function y1(i,e){let t=it[e];if(t===void 0){let n=_1.get(e);if(n!==void 0)t=it[n],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mh(t)}var M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(i){return i.replace(M1,b1)}function b1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var S1={[Us]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function T1(i){return S1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E1={[ds]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function w1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":E1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var A1={[Os]:"ENVMAP_MODE_REFRACTION"};function R1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":A1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var C1={[Nu]:"ENVMAP_BLENDING_MULTIPLY",[ed]:"ENVMAP_BLENDING_MIX",[td]:"ENVMAP_BLENDING_ADD"};function P1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":C1[i.combine]||"ENVMAP_BLENDING_NONE"}function I1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function L1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,o=T1(t),u=w1(t),c=R1(t),h=P1(t),f=I1(t),p=m1(t),g=g1(r),x=s.createProgram(),m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),d.length>0&&(d+=`
`)):(m=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),d=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?it.tonemapping_pars_fragment:"",t.toneMapping!==xi?d1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,h1("linearToOutputTexel",t.outputColorSpace),p1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),a=mh(a),a=Dd(a,t),a=Nd(a,t),l=mh(l),l=Dd(l,t),l=Nd(l,t),a=Ud(a),l=Ud(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=v+m+a,_=v+d+l,M=Pd(s,s.VERTEX_SHADER,S),T=Pd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(M)||"",w=s.getShaderInfoLog(T)||"",I=L.trim(),N=D.trim(),U=w.trim(),z=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,T);else{let k=Ld(s,M,"vertex"),H=Ld(s,T,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+k+`
`+H)}else I!==""?nt("WebGLProgram: Program Info Log:",I):(N===""||U==="")&&(O=!1);O&&(P.diagnostics={runnable:z,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:U,prefix:d}})}s.deleteShader(M),s.deleteShader(T),b=new Hr(s,x),E=x1(s,x)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,a1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=T,this}var D1=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xh(e),t.set(e,n)),n}},xh=class{constructor(e){this.id=D1++,this.code=e,this.usedTimes=0}};function N1(i){return i===ms||i===Jo||i===Ko}function U1(i,e,t,n,s,r){let a=new Ao,l=new gh,o=new Set,u=[],c=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return o.add(b),b===0?"uv":`uv${b}`}function x(b,E,A,P,L,D){let w=P.fog,I=L.geometry,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,z=e.get(b.envMap||N,U),O=z&&z.mapping===Wo?z.image.height:null,k=p[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&nt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let H=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,$=H!==void 0?H.length:0,le=0;I.morphAttributes.position!==void 0&&(le=1),I.morphAttributes.normal!==void 0&&(le=2),I.morphAttributes.color!==void 0&&(le=3);let ke,ye,Ne,X;if(k){let Pt=Pi[k];ke=Pt.vertexShader,ye=Pt.fragmentShader}else{ke=b.vertexShader,ye=b.fragmentShader;let Pt=l.getVertexShaderStage(b),bt=l.getFragmentShaderStage(b);l.update(b,Pt,bt),Ne=Pt.id,X=bt.id}let Z=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,Me=L.isBatchedMesh===!0,Ze=!!b.map,st=!!b.matcap,te=!!z,de=!!b.aoMap,ve=!!b.lightMap,ce=!!b.bumpMap&&b.wireframe===!1,ne=!!b.normalMap,Ae=!!b.displacementMap,ot=!!b.emissiveMap,lt=!!b.metalnessMap,ht=!!b.roughnessMap,V=b.anisotropy>0,Ct=b.clearcoat>0,mt=b.dispersion>0,F=b.retroreflectivity>0,y=b.iridescence>0,q=b.sheen>0,K=b.transmission>0,ie=V&&!!b.anisotropyMap,Se=Ct&&!!b.clearcoatMap,he=Ct&&!!b.clearcoatNormalMap,j=Ct&&!!b.clearcoatRoughnessMap,Q=y&&!!b.iridescenceMap,me=y&&!!b.iridescenceThicknessMap,He=q&&!!b.sheenColorMap,Te=q&&!!b.sheenRoughnessMap,be=!!b.specularMap,qe=!!b.specularColorMap,Ke=!!b.specularIntensityMap,ct=K&&!!b.transmissionMap,W=K&&!!b.thicknessMap,Ie=!!b.gradientMap,ae=!!b.alphaMap,Re=b.alphaTest>0,Fe=!!b.alphaHash,ge=!!b.extensions,Ue=xi;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let We={shaderID:k,shaderType:b.type,shaderName:b.name,vertexShader:ke,fragmentShader:ye,defines:b.defines,customVertexShaderID:Ne,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Me,batchingColor:Me&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ze,matcap:st,envMap:te,envMapMode:te&&z.mapping,envMapCubeUVHeight:O,aoMap:de,lightMap:ve,bumpMap:ce,normalMap:ne,displacementMap:Ae,emissiveMap:ot,normalMapObjectSpace:ne&&b.normalMapType===sd,normalMapTangentSpace:ne&&b.normalMapType===fc,packedNormalMap:ne&&b.normalMapType===fc&&N1(b.normalMap.format),metalnessMap:lt,roughnessMap:ht,anisotropy:V,anisotropyMap:ie,clearcoat:Ct,clearcoatMap:Se,clearcoatNormalMap:he,clearcoatRoughnessMap:j,dispersion:mt,retroreflection:F,iridescence:y,iridescenceMap:Q,iridescenceThicknessMap:me,sheen:q,sheenColorMap:He,sheenRoughnessMap:Te,specularMap:be,specularColorMap:qe,specularIntensityMap:Ke,transmission:K,transmissionMap:ct,thicknessMap:W,gradientMap:Ie,opaque:b.transparent===!1&&b.blending===Fr&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:Re,alphaHash:Fe,combine:b.combine,mapUv:Ze&&g(b.map.channel),aoMapUv:de&&g(b.aoMap.channel),lightMapUv:ve&&g(b.lightMap.channel),bumpMapUv:ce&&g(b.bumpMap.channel),normalMapUv:ne&&g(b.normalMap.channel),displacementMapUv:Ae&&g(b.displacementMap.channel),emissiveMapUv:ot&&g(b.emissiveMap.channel),metalnessMapUv:lt&&g(b.metalnessMap.channel),roughnessMapUv:ht&&g(b.roughnessMap.channel),anisotropyMapUv:ie&&g(b.anisotropyMap.channel),clearcoatMapUv:Se&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(b.sheenRoughnessMap.channel),specularMapUv:be&&g(b.specularMap.channel),specularColorMapUv:qe&&g(b.specularColorMap.channel),specularIntensityMapUv:Ke&&g(b.specularIntensityMap.channel),transmissionMapUv:ct&&g(b.transmissionMap.channel),thicknessMapUv:W&&g(b.thicknessMap.channel),alphaMapUv:ae&&g(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ne||V),vertexNormals:!!I.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Ze||ae),fog:!!w,useFog:b.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||I.attributes.normal===void 0&&ne===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:le,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ze&&b.map.isVideoTexture===!0&&xt.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:ot&&b.emissiveMap.isVideoTexture===!0&&xt.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ge&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&b.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=o.has(1),We.vertexUv2s=o.has(2),We.vertexUv3s=o.has(3),o.clear(),We}function m(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)E.push(A),E.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(d(E,b),v(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function d(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numSunLights),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numSunLightShadows),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function S(b){let E=p[b.type],A;if(E){let P=Pi[E];A=ks.clone(P.uniforms)}else A=b.uniforms;return A}function _(b,E){let A=c.get(E);return A!==void 0?++A.usedTimes:(A=new L1(i,E,b,s),u.push(A),c.set(E,A)),A}function M(b){if(--b.usedTimes===0){let E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),c.delete(b.cacheKey),b.destroy()}}function T(b){l.remove(b)}function R(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:_,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:R}}function F1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function O1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function l(f,p,g,x,m,d){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},i[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=d),e++,v}function o(f,p,g,x,m,d,v){v.reversedDepth===!0&&(m=-m);let S=l(f,p,g,x,m,d);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function u(f,p,g,x,m,d){let v=l(f,p,g,x,m,d);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function c(f,p){t.length>1&&t.sort(f||O1),n.length>1&&n.sort(p||Od),s.length>1&&s.sort(p||Od)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:u,finish:h,sort:c}}function B1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Bd,i.set(n,[a])):s>=r.length?(a=new Bd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function z1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new xe};break;case"SpotLight":t={position:new B,direction:new B,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function k1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var H1=0;function V1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function G1(i){let e=new z1,t=k1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new B);let s=new B,r=new Je,a=new Je;function l(u){let c=0,h=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,S=0,_=0,M=0,T=0,R=0,b=0,E=0,A=0;u.sort(V1);for(let L=0,D=u.length;L<D;L++){let w=u[L],I=w.color,N=w.intensity,U=w.distance,z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ms?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)c+=I.r*N,h+=I.g*N,f+=I.b*N;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],N);A++}else if(w.isSunLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let k=w.shadow,H=t.get(w);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=H,n.sunShadowMap[g]=z;let $=k.getViewportCount();for(let le=0;le<$;le++)n.sunShadowMatrix[x+le]=k.getMatrix(le),n.sunShadowCascade[x+le]=k._cascadeData[le];x+=$,g++}n.sun[p]=O,p++}else if(w.isDirectionalLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let k=w.shadow,H=t.get(w);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=w.shadow.matrix,M++}n.directional[m]=O,m++}else if(w.isSpotLight){let O=e.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(I).multiplyScalar(N),O.distance=U,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[v]=O;let k=w.shadow;if(w.map&&(n.spotLightMap[b]=w.map,b++,k.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[v]=k.matrix,w.castShadow){let H=t.get(w);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=z,R++}v++}else if(w.isRectAreaLight){let O=e.get(w);O.color.copy(I).multiplyScalar(N),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[S]=O,S++}else if(w.isPointLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){let k=w.shadow,H=t.get(w);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[d]=H,n.pointShadowMap[d]=z,n.pointShadowMatrix[d]=w.shadow.matrix,T++}n.point[d]=O,d++}else if(w.isHemisphereLight){let O=e.get(w);O.skyColor.copy(w.color).multiplyScalar(N),O.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[_]=O,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==v||P.rectAreaLength!==S||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==M||P.numPointShadows!==T||P.numSpotShadows!==R||P.numSpotMaps!==b||P.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=d,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.sunLength=p,P.directionalLength=m,P.pointLength=d,P.spotLength=v,P.rectAreaLength=S,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=M,P.numPointShadows=T,P.numSpotShadows=R,P.numSpotMaps=b,P.numLightProbes=A,n.version=H1++)}function o(u,c){let h=0,f=0,p=0,g=0,x=0,m=0,d=c.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){let _=u[v];if(_.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(d),h++}else if(_.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),f++}else if(_.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:l,setupView:o,state:n}}function zd(i){let e=new G1(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function l(f){n.push(f)}function o(f){s.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function W1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new zd(i),e.set(s,[l])):r>=a.length?(l=new zd(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var X1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q1=`uniform sampler2D shadow_pass;
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
}`,Y1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Z1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],kd=new Je,ea=new B,uh=new B;function $1(i,e,t){let n=new Cr,s=new Ge,r=new Ge,a=new vt,l=new Lr,o=new dl,u={},c=t.maxTextureSize,h={[fs]:yn,[yn]:fs,[xn]:xn},f=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:X1,fragmentShader:q1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let d=this.type;this.render=function(T,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Uf&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let E=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Vn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=d!==this.type;D&&R.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(I=>I.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,I=T.length;w<I;w++){let N=T[w],U=N.shadow;if(U===void 0){nt("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let z=U.getFrameExtents();s.multiply(z),r.copy(U.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/z.x),s.x=r.x*z.x,U.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/z.y),s.y=r.y*z.y,U.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=O,U.map===null||D===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ur){if(N.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ut(s.x,s.y,{format:ms,type:on,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new os(s.x,s.y,oi),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=wi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=sn,U.map.depthTexture.magFilter=sn}else N.isPointLight?(U.map=new vc(s.x),U.map.depthTexture=new ul(s.x,vi)):(U.map=new Ut(s.x,s.y),U.map.depthTexture=new os(s.x,s.y,vi)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=wi,this.type===Us?(U.map.depthTexture.compareFunction=O?pc:dc,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=sn,U.map.depthTexture.magFilter=sn);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let k=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();N.isPointLight!==!0&&U.updateMatrices(N,b);for(let H=0;H<k;H++){let $=U.getCamera(H);if(N.isPointLight){let le=U.camera,ke=U.matrix,ye=N.distance||le.far;ye!==le.far&&(le.far=ye,le.updateProjectionMatrix()),ea.setFromMatrixPosition(N.matrixWorld),le.position.copy(ea),uh.copy(le.position),uh.add(Y1[H]),le.up.copy(Z1[H]),le.lookAt(uh),le.updateMatrixWorld(),ke.makeTranslation(-ea.x,-ea.y,-ea.z),kd.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),U._frustum.setFromProjectionMatrix(kd,le.coordinateSystem,le.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,H),i.clear();else{H===0&&(i.setRenderTarget(U.map),i.clear());let le=U.getViewport(H);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),L.viewport(a)}n=U.getFrustum(H),_(R,b,$,N,this.type)}U.isPointLightShadow!==!0&&this.type===Ur&&v(U,b),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,A,P)};function v(T,R){let b=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ut(s.x,s.y,{format:ms,type:on}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,b,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,b,p,x,null)}function S(T,R,b,E){let A=null,P=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)A=P;else if(A=b.isPointLight===!0?o:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=A.uuid,D=R.uuid,w=u[L];w===void 0&&(w={},u[L]=w);let I=w[D];I===void 0&&(I=A.clone(),w[D]=I,R.addEventListener("dispose",M)),A=I}if(A.visible=R.visible,A.wireframe=R.wireframe,E===Ur?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:h[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=b}return A}function _(T,R,b,E,A){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===Ur)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let D=e.update(T),w=T.material;if(Array.isArray(w)){let I=D.groups;for(let N=0,U=I.length;N<U;N++){let z=I[N],O=w[z.materialIndex];if(O&&O.visible){let k=S(T,O,E,A);T.onBeforeShadow(i,T,R,b,D,k,z),i.renderBufferDirect(b,null,D,k,T,z),T.onAfterShadow(i,T,R,b,D,k,z)}}}else if(w.visible){let I=S(T,w,E,A);T.onBeforeShadow(i,T,R,b,D,I,null),i.renderBufferDirect(b,null,D,I,T,null),T.onAfterShadow(i,T,R,b,D,I,null)}}let L=T.children;for(let D=0,w=L.length;D<w;D++)_(L[D],R,b,E,A)}function M(T){T.target.removeEventListener("dispose",M);for(let b in u){let E=u[b],A=T.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function J1(i,e){function t(){let W=!1,Ie=new vt,ae=null,Re=new vt(0,0,0,0);return{setMask:function(Fe){ae!==Fe&&!W&&(i.colorMask(Fe,Fe,Fe,Fe),ae=Fe)},setLocked:function(Fe){W=Fe},setClear:function(Fe,ge,Ue,We,Pt){Pt===!0&&(Fe*=We,ge*=We,Ue*=We),Ie.set(Fe,ge,Ue,We),Re.equals(Ie)===!1&&(i.clearColor(Fe,ge,Ue,We),Re.copy(Ie))},reset:function(){W=!1,ae=null,Re.set(-1,0,0,0)}}}function n(){let W=!1,Ie=!1,ae=null,Re=null,Fe=null;return{setReversed:function(ge){if(Ie!==ge){let Ue=e.get("EXT_clip_control");ge?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ie=ge;let We=Fe;Fe=null,this.setClear(We)}},getReversed:function(){return Ie},setTest:function(ge){ge?Z(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(ge){ae!==ge&&!W&&(i.depthMask(ge),ae=ge)},setFunc:function(ge){if(Ie&&(ge=gd[ge]),Re!==ge){switch(ge){case $a:i.depthFunc(i.NEVER);break;case Ja:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case el:i.depthFunc(i.GREATER);break;case tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=ge}},setLocked:function(ge){W=ge},setClear:function(ge){Fe!==ge&&(Fe=ge,Ie&&(ge=1-ge),i.clearDepth(ge))},reset:function(){W=!1,ae=null,Re=null,Fe=null,Ie=!1}}}function s(){let W=!1,Ie=null,ae=null,Re=null,Fe=null,ge=null,Ue=null,We=null,Pt=null;return{setTest:function(bt){W||(bt?Z(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(bt){Ie!==bt&&!W&&(i.stencilMask(bt),Ie=bt)},setFunc:function(bt,Xn,On){(ae!==bt||Re!==Xn||Fe!==On)&&(i.stencilFunc(bt,Xn,On),ae=bt,Re=Xn,Fe=On)},setOp:function(bt,Xn,On){(ge!==bt||Ue!==Xn||We!==On)&&(i.stencilOp(bt,Xn,On),ge=bt,Ue=Xn,We=On)},setLocked:function(bt){W=bt},setClear:function(bt){Pt!==bt&&(i.clearStencil(bt),Pt=bt)},reset:function(){W=!1,Ie=null,ae=null,Re=null,Fe=null,ge=null,Ue=null,We=null,Pt=null}}}let r=new t,a=new n,l=new s,o=new WeakMap,u=new WeakMap,c={},h={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,S=null,_=null,M=null,T=null,R=null,b=new xe(0,0,0),E=0,A=!1,P=null,L=null,D=null,w=null,I=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),U=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),U=z>=2);let k=null,H={},$=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),ke=new vt().fromArray($),ye=new vt().fromArray(le);function Ne(W,Ie,ae,Re){let Fe=new Uint8Array(4),ge=i.createTexture();i.bindTexture(W,ge),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<ae;Ue++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Ie+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return ge}let X={};X[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Z(i.DEPTH_TEST),a.setFunc(br),ce(!1),ne(Cu),Z(i.CULL_FACE),de(Vn);function Z(W){c[W]!==!0&&(i.enable(W),c[W]=!0)}function Ee(W){c[W]!==!1&&(i.disable(W),c[W]=!1)}function Pe(W,Ie){return f[W]!==Ie?(i.bindFramebuffer(W,Ie),f[W]=Ie,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ie),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Me(W,Ie){let ae=g,Re=!1;if(W){ae=p.get(Ie),ae===void 0&&(ae=[],p.set(Ie,ae));let Fe=W.textures;if(ae.length!==Fe.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Ue=Fe.length;ge<Ue;ge++)ae[ge]=i.COLOR_ATTACHMENT0+ge;ae.length=Fe.length,Re=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ae)}function Ze(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let st={[Fs]:i.FUNC_ADD,[Of]:i.FUNC_SUBTRACT,[Bf]:i.FUNC_REVERSE_SUBTRACT};st[zf]=i.MIN,st[kf]=i.MAX;let te={[Hf]:i.ZERO,[Vf]:i.ONE,[Gf]:i.SRC_COLOR,[Lu]:i.SRC_ALPHA,[$f]:i.SRC_ALPHA_SATURATE,[Yf]:i.DST_COLOR,[Xf]:i.DST_ALPHA,[Wf]:i.ONE_MINUS_SRC_COLOR,[Du]:i.ONE_MINUS_SRC_ALPHA,[Zf]:i.ONE_MINUS_DST_COLOR,[qf]:i.ONE_MINUS_DST_ALPHA,[Jf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[jf]:i.CONSTANT_ALPHA,[Qf]:i.ONE_MINUS_CONSTANT_ALPHA};function de(W,Ie,ae,Re,Fe,ge,Ue,We,Pt,bt){if(W===Vn){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),W!==Ff){if(W!==d||bt!==A){if((v!==Fs||M!==Fs)&&(i.blendEquation(i.FUNC_ADD),v=Fs,M=Fs),bt)switch(W){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gi:i.blendFunc(i.ONE,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pu:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iu:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",W);break}S=null,_=null,T=null,R=null,b.set(0,0,0),E=0,d=W,A=bt}return}Fe=Fe||Ie,ge=ge||ae,Ue=Ue||Re,(Ie!==v||Fe!==M)&&(i.blendEquationSeparate(st[Ie],st[Fe]),v=Ie,M=Fe),(ae!==S||Re!==_||ge!==T||Ue!==R)&&(i.blendFuncSeparate(te[ae],te[Re],te[ge],te[Ue]),S=ae,_=Re,T=ge,R=Ue),(We.equals(b)===!1||Pt!==E)&&(i.blendColor(We.r,We.g,We.b,Pt),b.copy(We),E=Pt),d=W,A=!1}function ve(W,Ie){W.side===xn?Ee(i.CULL_FACE):Z(i.CULL_FACE);let ae=W.side===yn;Ie&&(ae=!ae),ce(ae),W.blending===Fr&&W.transparent===!1?de(Vn):de(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Re=W.stencilWrite;l.setTest(Re),Re&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ot(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(W){P!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),P=W)}function ne(W){W!==Df?(Z(i.CULL_FACE),W!==L&&(W===Cu?i.cullFace(i.BACK):W===Nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),L=W}function Ae(W){W!==D&&(U&&i.lineWidth(W),D=W)}function ot(W,Ie,ae){W?(Z(i.POLYGON_OFFSET_FILL),(w!==Ie||I!==ae)&&(w=Ie,I=ae,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,ae))):Ee(i.POLYGON_OFFSET_FILL)}function lt(W){W?Z(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function ht(W){W===void 0&&(W=i.TEXTURE0+N-1),k!==W&&(i.activeTexture(W),k=W)}function V(W,Ie,ae){ae===void 0&&(k===null?ae=i.TEXTURE0+N-1:ae=k);let Re=H[ae];Re===void 0&&(Re={type:void 0,texture:void 0},H[ae]=Re),(Re.type!==W||Re.texture!==Ie)&&(k!==ae&&(i.activeTexture(ae),k=ae),i.bindTexture(W,Ie||X[W]),Re.type=W,Re.texture=Ie)}function Ct(){let W=H[k];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function y(){try{i.texSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function q(){try{i.texSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function Se(){try{i.texStorage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function he(){try{i.texStorage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function j(){try{i.texImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function Q(){try{i.texImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function me(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function He(W,Ie){h[W]!==Ie&&(i.pixelStorei(W,Ie),h[W]=Ie)}function Te(W){ke.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ke.copy(W))}function be(W){ye.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ye.copy(W))}function qe(W,Ie){let ae=u.get(Ie);ae===void 0&&(ae=new WeakMap,u.set(Ie,ae));let Re=ae.get(W);Re===void 0&&(Re=i.getUniformBlockIndex(Ie,W.name),ae.set(W,Re))}function Ke(W,Ie){let Re=u.get(Ie).get(W);o.get(Ie)!==Re&&(i.uniformBlockBinding(Ie,Re,W.__bindingPointIndex),o.set(Ie,Re))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},h={},k=null,H={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,S=null,_=null,M=null,T=null,R=null,b=new xe(0,0,0),E=0,A=!1,P=null,L=null,D=null,w=null,I=null,ke.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Z,disable:Ee,bindFramebuffer:Pe,drawBuffers:Me,useProgram:Ze,setBlending:de,setMaterial:ve,setFlipSided:ce,setCullFace:ne,setLineWidth:Ae,setPolygonOffset:ot,setScissorTest:lt,activeTexture:ht,bindTexture:V,unbindTexture:Ct,compressedTexImage2D:mt,compressedTexImage3D:F,texImage2D:j,texImage3D:Q,pixelStorei:He,getParameter:me,updateUBOMapping:qe,uniformBlockBinding:Ke,texStorage2D:Se,texStorage3D:he,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:K,compressedTexSubImage3D:ie,scissor:Te,viewport:be,reset:ct}}function K1(i,e,t,n,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ge,c=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,y){return g?new OffscreenCanvas(F,y):To("canvas")}function m(F,y,q){let K=1,ie=mt(F);if((ie.width>q||ie.height>q)&&(K=q/Math.max(ie.width,ie.height)),K<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Se=Math.floor(K*ie.width),he=Math.floor(K*ie.height);f===void 0&&(f=x(Se,he));let j=y?x(Se,he):f;return j.width=Se,j.height=he,j.getContext("2d").drawImage(F,0,0,Se,he),nt("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Se+"x"+he+")."),j}else return"data"in F&&nt("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),F;return F}function d(F){return F.generateMipmaps}function v(F){i.generateMipmap(F)}function S(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(F,y,q,K,ie,Se=!1){if(F!==null){if(i[F]!==void 0)return i[F];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let he;K&&(he=e.get("EXT_texture_norm16"),he||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=y;if(y===i.RED&&(q===i.FLOAT&&(j=i.R32F),q===i.HALF_FLOAT&&(j=i.R16F),q===i.UNSIGNED_BYTE&&(j=i.R8),q===i.UNSIGNED_SHORT&&he&&(j=he.R16_EXT),q===i.SHORT&&he&&(j=he.R16_SNORM_EXT)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.R8UI),q===i.UNSIGNED_SHORT&&(j=i.R16UI),q===i.UNSIGNED_INT&&(j=i.R32UI),q===i.BYTE&&(j=i.R8I),q===i.SHORT&&(j=i.R16I),q===i.INT&&(j=i.R32I)),y===i.RG&&(q===i.FLOAT&&(j=i.RG32F),q===i.HALF_FLOAT&&(j=i.RG16F),q===i.UNSIGNED_BYTE&&(j=i.RG8),q===i.UNSIGNED_SHORT&&he&&(j=he.RG16_EXT),q===i.SHORT&&he&&(j=he.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RG8UI),q===i.UNSIGNED_SHORT&&(j=i.RG16UI),q===i.UNSIGNED_INT&&(j=i.RG32UI),q===i.BYTE&&(j=i.RG8I),q===i.SHORT&&(j=i.RG16I),q===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGB8UI),q===i.UNSIGNED_SHORT&&(j=i.RGB16UI),q===i.UNSIGNED_INT&&(j=i.RGB32UI),q===i.BYTE&&(j=i.RGB8I),q===i.SHORT&&(j=i.RGB16I),q===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),q===i.UNSIGNED_INT&&(j=i.RGBA32UI),q===i.BYTE&&(j=i.RGBA8I),q===i.SHORT&&(j=i.RGBA16I),q===i.INT&&(j=i.RGBA32I)),y===i.RGB&&(q===i.UNSIGNED_SHORT&&he&&(j=he.RGB16_EXT),q===i.SHORT&&he&&(j=he.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),y===i.RGBA){let Q=Se?So:xt.getTransfer(ie);q===i.FLOAT&&(j=i.RGBA32F),q===i.HALF_FLOAT&&(j=i.RGBA16F),q===i.UNSIGNED_BYTE&&(j=Q===At?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&he&&(j=he.RGBA16_EXT),q===i.SHORT&&he&&(j=he.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(F,y){let q;return F?y===null||y===vi||y===Br?q=i.DEPTH24_STENCIL8:y===oi?q=i.DEPTH32F_STENCIL8:y===Or&&(q=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vi||y===Br?q=i.DEPTH_COMPONENT24:y===oi?q=i.DEPTH_COMPONENT32F:y===Or&&(q=i.DEPTH_COMPONENT16),q}function T(F,y){return d(F)===!0||F.isFramebufferTexture&&F.minFilter!==sn&&F.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?y.mipmaps.length:1}function R(F){let y=F.target;y.removeEventListener("dispose",R),E(y),y.isVideoTexture&&c.delete(y),y.isHTMLTexture&&h.delete(y)}function b(F){let y=F.target;y.removeEventListener("dispose",b),P(y)}function E(F){let y=n.get(F);if(y.__webglInit===void 0)return;let q=F.source,K=p.get(q);if(K){let ie=K[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(F),Object.keys(K).length===0&&p.delete(q)}n.remove(F)}function A(F){let y=n.get(F);i.deleteTexture(y.__webglTexture);let q=F.source,K=p.get(q);delete K[y.__cacheKey],a.memory.textures--}function P(F){let y=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let ie=0;ie<y.__webglFramebuffer[K].length;ie++)i.deleteFramebuffer(y.__webglFramebuffer[K][ie]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=F.textures;for(let K=0,ie=q.length;K<ie;K++){let Se=n.get(q[K]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(q[K])}n.remove(F)}let L=0;function D(){L=0}function w(){return L}function I(F){L=F}function N(){let F=L;return F>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,F}function U(F){let y=[];return y.push(F.wrapS),y.push(F.wrapT),y.push(F.wrapR||0),y.push(F.magFilter),y.push(F.minFilter),y.push(F.anisotropy),y.push(F.internalFormat),y.push(F.format),y.push(F.type),y.push(F.generateMipmaps),y.push(F.premultiplyAlpha),y.push(F.flipY),y.push(F.unpackAlignment),y.push(F.colorSpace),y.join()}function z(F,y){let q=n.get(F);if(F.isVideoTexture&&V(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&q.__version!==F.version){let K=F.image;if(K===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(q,F,y);return}}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function O(F,y){let q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){Ee(q,F,y);return}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function k(F,y){let q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){Ee(q,F,y);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function H(F,y){let q=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&q.__version!==F.version){Pe(q,F,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}let $={[Sr]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[nl]:i.MIRRORED_REPEAT},le={[sn]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[Xo]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Cl]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},ke={[od]:i.NEVER,[hd]:i.ALWAYS,[ad]:i.LESS,[dc]:i.LEQUAL,[ld]:i.EQUAL,[pc]:i.GEQUAL,[cd]:i.GREATER,[ud]:i.NOTEQUAL};function ye(F,y){if(y.type===oi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===Cl||y.magFilter===Xo||y.magFilter===Gn||y.minFilter===Ot||y.minFilter===Cl||y.minFilter===Xo||y.minFilter===Gn)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,$[y.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,$[y.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,$[y.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,le[y.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==Xo&&y.minFilter!==Gn||y.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ne(F,y){let q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,y.addEventListener("dispose",R));let K=y.source,ie=p.get(K);ie===void 0&&(ie={},p.set(K,ie));let Se=U(y);if(Se!==F.__cacheKey){ie[Se]===void 0&&(ie[Se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ie[Se].usedTimes++;let he=ie[F.__cacheKey];he!==void 0&&(ie[F.__cacheKey].usedTimes--,he.usedTimes===0&&A(y)),F.__cacheKey=Se,F.__webglTexture=ie[Se].texture}return q}function X(F,y,q){return Math.floor(Math.floor(F/q)/y)}function Z(F,y,q,K){let Se=F.updateRanges;if(Se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,q,K,y.data);else{Se.sort((He,Te)=>He.start-Te.start);let he=0;for(let He=1;He<Se.length;He++){let Te=Se[he],be=Se[He],qe=Te.start+Te.count,Ke=X(be.start,y.width,4),ct=X(Te.start,y.width,4);be.start<=qe+1&&Ke===ct&&X(be.start+be.count-1,y.width,4)===Ke?Te.count=Math.max(Te.count,be.start+be.count-Te.start):(++he,Se[he]=be)}Se.length=he+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let He=0,Te=Se.length;He<Te;He++){let be=Se[He],qe=Math.floor(be.start/4),Ke=Math.ceil(be.count/4),ct=qe%y.width,W=Math.floor(qe/y.width),Ie=Ke,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,ct,W,Ie,ae,q,K,y.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function Ee(F,y,q){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);let ie=Ne(F,y),Se=y.source;t.bindTexture(K,F.__webglTexture,i.TEXTURE0+q);let he=n.get(Se);if(Se.version!==he.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ae=xt.getPrimaries(xt.workingColorSpace),Re=y.colorSpace===_i?null:xt.getPrimaries(y.colorSpace),Fe=y.colorSpace===_i||ae===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=m(y.image,!1,s.maxTextureSize);Q=Ct(y,Q);let me=r.convert(y.format,y.colorSpace),He=r.convert(y.type),Te=_(y.internalFormat,me,He,y.normalized,y.colorSpace,y.isVideoTexture);ye(K,y);let be,qe=y.mipmaps,Ke=y.isVideoTexture!==!0,ct=he.__version===void 0||ie===!0,W=Se.dataReady,Ie=T(y,Q);if(y.isDepthTexture)Te=M(y.format===ps,y.type),ct&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,me,He,null));else if(y.isDataTexture)if(qe.length>0){Ke&&ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Te,qe[0].width,qe[0].height);for(let ae=0,Re=qe.length;ae<Re;ae++)be=qe[ae],Ke?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,be.width,be.height,me,He,be.data):t.texImage2D(i.TEXTURE_2D,ae,Te,be.width,be.height,0,me,He,be.data);y.generateMipmaps=!1}else Ke?(ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Te,Q.width,Q.height),W&&Z(y,Q,me,He)):t.texImage2D(i.TEXTURE_2D,0,Te,Q.width,Q.height,0,me,He,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Te,qe[0].width,qe[0].height,Q.depth);for(let ae=0,Re=qe.length;ae<Re;ae++)if(be=qe[ae],y.format!==Wn)if(me!==null)if(Ke){if(W)if(y.layerUpdates.size>0){let Fe=Qu(be.width,be.height,y.format,y.type);for(let ge of y.layerUpdates){let Ue=be.data.subarray(ge*Fe/be.data.BYTES_PER_ELEMENT,(ge+1)*Fe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ge,be.width,be.height,1,me,Ue)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,Q.depth,me,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Te,be.width,be.height,Q.depth,0,be.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,Q.depth,me,He,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Te,be.width,be.height,Q.depth,0,me,He,be.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ke&&ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Te,qe[0].width,qe[0].height);for(let ae=0,Re=qe.length;ae<Re;ae++)be=qe[ae],y.format!==Wn?me!==null?Ke?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,be.width,be.height,me,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Te,be.width,be.height,0,be.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,be.width,be.height,me,He,be.data):t.texImage2D(i.TEXTURE_2D,ae,Te,be.width,be.height,0,me,He,be.data)}else if(y.isDataArrayTexture)if(Ke){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Te,Q.width,Q.height,Q.depth),W)if(y.layerUpdates.size>0){let ae=Qu(Q.width,Q.height,y.format,y.type);for(let Re of y.layerUpdates){let Fe=Q.data.subarray(Re*ae/Q.data.BYTES_PER_ELEMENT,(Re+1)*ae/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,Q.width,Q.height,1,me,He,Fe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,He,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,me,He,Q.data);else if(y.isData3DTexture)Ke?(ct&&t.texStorage3D(i.TEXTURE_3D,Ie,Te,Q.width,Q.height,Q.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,He,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,me,He,Q.data);else if(y.isFramebufferTexture){if(ct)if(Ke)t.texStorage2D(i.TEXTURE_2D,Ie,Te,Q.width,Q.height);else{let ae=Q.width,Re=Q.height;for(let Fe=0;Fe<Ie;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Te,ae,Re,0,me,He,null),ae>>=1,Re>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Q.parentNode!==ae){ae.appendChild(Q),h.add(y),ae.onpaint=Re=>{let Fe=Re.changedElements;for(let ge of h)Fe.includes(ge.image)&&(ge.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Fe=i.RGBA,ge=i.RGBA,Ue=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,ge,Ue,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qe.length>0){if(Ke&&ct){let ae=mt(qe[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Te,ae.width,ae.height)}for(let ae=0,Re=qe.length;ae<Re;ae++)be=qe[ae],Ke?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,me,He,be):t.texImage2D(i.TEXTURE_2D,ae,Te,me,He,be);y.generateMipmaps=!1}else if(Ke){if(ct){let ae=mt(Q);t.texStorage2D(i.TEXTURE_2D,Ie,Te,ae.width,ae.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,He,Q)}else t.texImage2D(i.TEXTURE_2D,0,Te,me,He,Q);d(y)&&v(K),he.__version=Se.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function Pe(F,y,q){if(y.image.length!==6)return;let K=Ne(F,y),ie=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+q);let Se=n.get(ie);if(ie.version!==Se.__version||K===!0){t.activeTexture(i.TEXTURE0+q);let he=xt.getPrimaries(xt.workingColorSpace),j=y.colorSpace===_i?null:xt.getPrimaries(y.colorSpace),Q=y.colorSpace===_i||he===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let me=y.isCompressedTexture||y.image[0].isCompressedTexture,He=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let ge=0;ge<6;ge++)!me&&!He?Te[ge]=m(y.image[ge],!0,s.maxCubemapSize):Te[ge]=He?y.image[ge].image:y.image[ge],Te[ge]=Ct(y,Te[ge]);let be=Te[0],qe=r.convert(y.format,y.colorSpace),Ke=r.convert(y.type),ct=_(y.internalFormat,qe,Ke,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,Ie=Se.__version===void 0||K===!0,ae=ie.dataReady,Re=T(y,be);ye(i.TEXTURE_CUBE_MAP,y);let Fe;if(me){W&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,ct,be.width,be.height);for(let ge=0;ge<6;ge++){Fe=Te[ge].mipmaps;for(let Ue=0;Ue<Fe.length;Ue++){let We=Fe[Ue];y.format!==Wn?qe!==null?W?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,0,0,We.width,We.height,qe,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,ct,We.width,We.height,0,We.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,0,0,We.width,We.height,qe,Ke,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,ct,We.width,We.height,0,qe,Ke,We.data)}}}else{if(Fe=y.mipmaps,W&&Ie){Fe.length>0&&Re++;let ge=mt(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,ct,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(He){W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Te[ge].width,Te[ge].height,qe,Ke,Te[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ct,Te[ge].width,Te[ge].height,0,qe,Ke,Te[ge].data);for(let Ue=0;Ue<Fe.length;Ue++){let Pt=Fe[Ue].image[ge].image;W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,0,0,Pt.width,Pt.height,qe,Ke,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,ct,Pt.width,Pt.height,0,qe,Ke,Pt.data)}}else{W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,qe,Ke,Te[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ct,qe,Ke,Te[ge]);for(let Ue=0;Ue<Fe.length;Ue++){let We=Fe[Ue];W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,0,0,qe,Ke,We.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,ct,qe,Ke,We.image[ge])}}}d(y)&&v(i.TEXTURE_CUBE_MAP),Se.__version=ie.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function Me(F,y,q,K,ie,Se){let he=r.convert(q.format,q.colorSpace),j=r.convert(q.type),Q=_(q.internalFormat,he,j,q.normalized,q.colorSpace),me=n.get(y),He=n.get(q);if(He.__renderTarget=y,!me.__hasExternalTextures){let Te=Math.max(1,y.width>>Se),be=Math.max(1,y.height>>Se);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Se,Q,Te,be,y.depth,0,he,j,null):t.texImage2D(ie,Se,Q,Te,be,0,he,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),ht(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ie,He.__webglTexture,0,lt(y)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ie,He.__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(F,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,F),y.depthBuffer){let K=y.depthTexture,ie=K&&K.isDepthTexture?K.type:null,Se=M(y.stencilBuffer,ie),he=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(y),Se,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(y),Se,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Se,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,F)}else{let K=y.textures;for(let ie=0;ie<K.length;ie++){let Se=K[ie],he=r.convert(Se.format,Se.colorSpace),j=r.convert(Se.type),Q=_(Se.internalFormat,he,j,Se.normalized,Se.colorSpace);ht(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(y),Q,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(y),Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(F,y,q){let K=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(y.depthTexture);if(ie.__renderTarget=y,(!ie.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ye(i.TEXTURE_CUBE_MAP,y.depthTexture);let me=r.convert(y.depthTexture.format),He=r.convert(y.depthTexture.type),Te;y.depthTexture.format===wi?Te=i.DEPTH_COMPONENT24:y.depthTexture.format===ps&&(Te=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Te,y.width,y.height,0,me,He,null)}}else z(y.depthTexture,0);let Se=ie.__webglTexture,he=lt(y),j=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Q=y.depthTexture.format===ps?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===wi)ht(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,j,Se,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,Q,j,Se,0);else if(y.depthTexture.format===ps)ht(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,j,Se,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,Q,j,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(F){let y=n.get(F),q=F.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==F.depthTexture){let K=F.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){let ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",ie)};K.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=K}if(F.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let K=0;K<6;K++)st(y.__webglFramebuffer[K],F,K);else{let K=F.texture.mipmaps;K&&K.length>0?st(y.__webglFramebuffer[0],F,0):st(y.__webglFramebuffer,F,0)}else if(q){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),Ze(y.__webglDepthbuffer[K],F,!1);else{let ie=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Se)}}else{let K=F.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ze(y.__webglDepthbuffer,F,!1);else{let ie=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(F,y,q){let K=n.get(F);y!==void 0&&Me(K.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&te(F)}function ve(F){let y=F.texture,q=n.get(F),K=n.get(y);F.addEventListener("dispose",b);let ie=F.textures,Se=F.isWebGLCubeRenderTarget===!0,he=ie.length>1;if(he||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,a.memory.textures++),Se){q.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[j]=[];for(let Q=0;Q<y.mipmaps.length;Q++)q.__webglFramebuffer[j][Q]=i.createFramebuffer()}else q.__webglFramebuffer[j]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)q.__webglFramebuffer[j]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(he)for(let j=0,Q=ie.length;j<Q;j++){let me=n.get(ie[j]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&ht(F)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let j=0;j<ie.length;j++){let Q=ie[j];q.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[j]);let me=r.convert(Q.format,Q.colorSpace),He=r.convert(Q.type),Te=_(Q.internalFormat,me,He,Q.normalized,Q.colorSpace,F.isXRRenderTarget===!0),be=lt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Te,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,q.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ye(i.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Me(q.__webglFramebuffer[j][Q],F,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else Me(q.__webglFramebuffer[j],F,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);d(y)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let j=0,Q=ie.length;j<Q;j++){let me=ie[j],He=n.get(me),Te=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Te=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,He.__webglTexture),ye(Te,me),Me(q.__webglFramebuffer,F,me,i.COLOR_ATTACHMENT0+j,Te,0),d(me)&&v(Te)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(j=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,K.__webglTexture),ye(j,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Me(q.__webglFramebuffer[Q],F,y,i.COLOR_ATTACHMENT0,j,Q);else Me(q.__webglFramebuffer,F,y,i.COLOR_ATTACHMENT0,j,0);d(y)&&v(j),t.unbindTexture()}F.depthBuffer&&te(F)}function ce(F){let y=F.textures;for(let q=0,K=y.length;q<K;q++){let ie=y[q];if(d(ie)){let Se=S(F),he=n.get(ie).__webglTexture;t.bindTexture(Se,he),v(Se),t.unbindTexture()}}}let ne=[],Ae=[];function ot(F){if(F.samples>0){if(ht(F)===!1){let y=F.textures,q=F.width,K=F.height,ie=i.COLOR_BUFFER_BIT,Se=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(F),j=y.length>1;if(j)for(let me=0;me<y.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let Q=F.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<y.length;me++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[me]);let He=n.get(y[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,q,K,0,0,q,K,ie,i.NEAREST),o===!0&&(ne.length=0,Ae.length=0,ne.push(i.COLOR_ATTACHMENT0+me),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(ne.push(Se),Ae.push(Se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let me=0;me<y.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,he.__webglColorRenderbuffer[me]);let He=n.get(y[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&o){let y=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function lt(F){return Math.min(s.maxSamples,F.samples)}function ht(F){let y=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function V(F){let y=a.render.frame;c.get(F)!==y&&(c.set(F,y),F.update())}function Ct(F,y){let q=F.colorSpace,K=F.format,ie=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||q!==bo&&q!==_i&&(xt.getTransfer(q)===At?(K!==Wn||ie!==En)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",q)),y}function mt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.getTextureUnits=w,this.setTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=de,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function j1(i,e){function t(n,s=_i){let r,a=xt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===qu)return i.ALPHA;if(n===Yu)return i.RGB;if(n===Wn)return i.RGBA;if(n===wi)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===Bs)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Ul)return i.RGBA_INTEGER;if(n===qo||n===Yo||n===Zo||n===$o)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Ol||n===Bl||n===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Jo||n===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Hl)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return r.COMPRESSED_R11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jo)return r.COMPRESSED_RG11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===ac||n===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===uc||n===Ko||n===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
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

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new No(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pt({vertexShader:Q1,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends Ai{constructor(e,t){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,u=null,c=null,h=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new vh,d={},v=t.getContextAttributes(),S=null,_=null,M=[],T=[],R=new Ge,b=null,E=null,A=new _n;A.viewport=new vt;let P=new _n;P.viewport=new vt;let L=[A,P],D=new El,w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=M[X];return Z===void 0&&(Z=new Ar,M[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=M[X];return Z===void 0&&(Z=new Ar,M[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=M[X];return Z===void 0&&(Z=new Ar,M[X]=Z),Z.getHandSpace()};function N(X){let Z=T.indexOf(X.inputSource);if(Z===-1)return;let Ee=M[Z];Ee!==void 0&&(Ee.update(X.inputSource,X.frame,u||a),Ee.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let X=0;X<M.length;X++){let Z=T[X];Z!==null&&(T[X]=null,M[X].disconnect(Z))}w=null,I=null,m.reset();for(let X in d)delete d[X];if(e.setRenderTarget(S),p=null,f=null,h=null,s=null,_=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),E!==null){let X=E.camera;X.fov=E.fov,X.zoom=E.zoom,X.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Pe=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?ps:wi,Pe=v.stencil?Br:vi);let Ze={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ut(f.textureWidth,f.textureHeight,{format:Wn,type:En,depthTexture:new os(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ut(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),u=null,a=await s.requestReferenceSpace(l),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(X){for(let Z=0;Z<X.removed.length;Z++){let Ee=X.removed[Z],Pe=T.indexOf(Ee);Pe>=0&&(T[Pe]=null,M[Pe].disconnect(Ee))}for(let Z=0;Z<X.added.length;Z++){let Ee=X.added[Z],Pe=T.indexOf(Ee);if(Pe===-1){for(let Ze=0;Ze<M.length;Ze++)if(Ze>=T.length){T.push(Ee),Pe=Ze;break}else if(T[Ze]===null){T[Ze]=Ee,Pe=Ze;break}if(Pe===-1)break}let Me=M[Pe];Me&&Me.connect(Ee)}}let O=new B,k=new B;function H(X,Z,Ee){O.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(Ee.matrixWorld);let Pe=O.distanceTo(k),Me=Z.projectionMatrix.elements,Ze=Ee.projectionMatrix.elements,st=Me[14]/(Me[10]-1),te=Me[14]/(Me[10]+1),de=(Me[9]+1)/Me[5],ve=(Me[9]-1)/Me[5],ce=(Me[8]-1)/Me[0],ne=(Ze[8]+1)/Ze[0],Ae=st*ce,ot=st*ne,lt=Pe/(-ce+ne),ht=lt*-ce;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ht),X.translateZ(lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Me[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let V=st+lt,Ct=te+lt,mt=Ae-ht,F=ot+(Pe-ht),y=de*te/Ct*V,q=ve*te/Ct*V;X.projectionMatrix.makePerspective(mt,F,y,q,V,Ct),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Z=X.near,Ee=X.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),D.near=P.near=A.near=Z,D.far=P.far=A.far=Ee,(w!==D.near||I!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),w=D.near,I=D.far),D.layers.mask=X.layers.mask|6,A.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Pe=X.parent,Me=D.cameras;$(D,Pe);for(let Ze=0;Ze<Me.length;Ze++)$(Me[Ze],Pe);Me.length===2?H(D,A,P):D.projectionMatrix.copy(A.projectionMatrix),E===null&&X.isPerspectiveCamera&&(E={camera:X,fov:X.fov,zoom:X.zoom}),le(X,D,Pe)};function le(X,Z,Ee){Ee===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(Ee.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Eo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return o},this.setFoveation=function(X){o=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(X){return d[X]};let ke=null;function ye(X,Z){if(c=Z.getViewerPose(u||a),g=Z,c!==null){let Ee=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Pe=!1;Ee.length!==D.cameras.length&&(D.cameras.length=0,Pe=!0);for(let te=0;te<Ee.length;te++){let de=Ee[te],ve=null;if(p!==null)ve=p.getViewport(de);else{let ne=h.getViewSubImage(f,de);ve=ne.viewport,te===0&&(e.setRenderTargetTextures(_,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(_))}let ce=L[te];ce===void 0&&(ce=new _n,ce.layers.enable(te),ce.viewport=new vt,L[te]=ce),ce.matrix.fromArray(de.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(de.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ve.x,ve.y,ve.width,ve.height),te===0&&(D.matrix.copy(ce.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Pe===!0&&D.cameras.push(ce)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let te=h.getDepthInformation(Ee[0]);te&&te.isValid&&te.texture&&m.init(te,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let te=0;te<Ee.length;te++){let de=Ee[te].camera;if(de){let ve=d[de];ve||(ve=new No,d[de]=ve);let ce=h.getCameraImage(de);ve.sourceTexture=ce}}}}for(let Ee=0;Ee<M.length;Ee++){let Pe=T[Ee],Me=M[Ee];Pe!==null&&Me!==void 0&&Me.update(Pe,Z,u||a)}ke&&ke(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let Ne=new Hd;Ne.setAnimationLoop(ye),this.setAnimationLoop=function(X){ke=X},this.dispose=function(){}}},t_=new Je,Yd=new at;Yd.set(-1,0,0,0,1,0,0,0,1);function n_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ju(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,S,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?o(m,d,v,S):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===yn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===yn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d),S=v.envMap,_=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yd),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,v,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===yn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i_(i,e,t,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,M){let T=M.program;n.uniformBlockBinding(_,T)}function u(_,M){let T=s[_.id];T===void 0&&(m(_),T=c(_),s[_.id]=T,_.addEventListener("dispose",v));let R=M.program;n.updateUBOMapping(_,R);let b=e.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function c(_){let M=h();_.__bindingPointIndex=M;let T=i.createBuffer(),R=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function h(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=s[_.id],T=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,E=T.length;b<E;b++){let A=T[b];if(Array.isArray(A))for(let P=0,L=A.length;P<L;P++)p(A[P],b,P,R);else p(A,b,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,M,T,R){if(x(_,M,T,R)===!0){let b=_.__offset,E=_.value;if(Array.isArray(E)){let A=0;for(let P=0;P<E.length;P++){let L=E[P],D=d(L);g(L,_.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function g(_,M,T){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,T)}function x(_,M,T,R){let b=_.value,E=M+"_"+T;if(R[E]===void 0)return typeof b=="number"||typeof b=="boolean"?R[E]=b:ArrayBuffer.isView(b)?R[E]=b.slice():R[E]=b.clone(),!0;{let A=R[E];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return R[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function m(_){let M=_.uniforms,T=0,R=16;for(let E=0,A=M.length;E<A;E++){let P=Array.isArray(M[E])?M[E]:[M[E]];for(let L=0,D=P.length;L<D;L++){let w=P[L],I=Array.isArray(w.value)?w.value:[w.value];for(let N=0,U=I.length;N<U;N++){let z=I[N],O=d(z),k=T%R,H=k%O.boundary,$=k+H;T+=H,$!==0&&R-$<O.storage&&(T+=R-$),w.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=T,T+=O.storage}}}let b=T%R;return b>0&&(T+=R-b),_.__size=T,_.__cache={},this}function d(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",_),M}function v(_){let M=_.target;M.removeEventListener("dispose",v);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:o,update:u,dispose:S}}var s_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function r_(){return Ci===null&&(Ci=new rs(s_,16,16,ms,on),Ci.name="DFG_LUT",Ci.minFilter=Ot,Ci.magFilter=Ot,Ci.wrapS=Ei,Ci.wrapT=Ei,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var _c=class{constructor(e={}){let{canvas:t=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=En}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=p,m=new Set([Ul,Nl,Dl]),d=new Set([En,vi,Or,Br,Il,Ll]),v=new Uint32Array(4),S=new Int32Array(4),_=new B,M=null,T=null,R=[],b=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,L=null,D=null,w=null,I=null;this._outputColorSpace=qt;let N=0,U=0,z=null,O=-1,k=null,H=new vt,$=new vt,le=null,ke=new xe(0),ye=0,Ne=t.width,X=t.height,Z=1,Ee=null,Pe=null,Me=new vt(0,0,Ne,X),Ze=new vt(0,0,Ne,X),st=!1,te=new Cr,de=!1,ve=!1,ce=new Je,ne=new B,Ae=new vt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function ht(){return z===null?Z:1}let V=n;function Ct(C,G){return t.getContext(C,G)}let mt,F,y,q,K,ie,Se,he,j,Q,me,He,Te,be,qe,Ke,ct,W,Ie,ae,Re,Fe,ge;try{let C={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),V===null){let G="webgl2";if(V=Ct(G,C),V===null)throw Ct(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(C){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),rt("WebGLRenderer: "+C.message),C}function Ue(){mt=new fv(V),mt.init(),Re=new j1(V,mt),F=new nv(V,mt,e,Re),y=new J1(V,mt),F.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),D=V.createFramebuffer(),w=V.createFramebuffer(),I=V.createFramebuffer(),q=new mv(V),K=new F1,ie=new K1(V,mt,y,K,F,Re,q),Se=new hv(A),he=new xm(V),Fe=new ev(V,he),j=new dv(V,he,q,Fe),Q=new xv(V,j,he,Fe,q),W=new gv(V,F,ie),qe=new iv(K),me=new U1(A,Se,mt,F,Fe,qe),He=new n_(A,K),Te=new B1,be=new W1(mt),ct=new Qx(A,Se,y,Q,g,o),Ke=new $1(A,Q,F),ge=new i_(V,q,F,y),Ie=new tv(V,mt,q),ae=new pv(V,mt,q),q.programs=me.programs,A.capabilities=F,A.extensions=mt,A.properties=K,A.renderLists=Te,A.shadowMap=Ke,A.state=y,A.info=q}x!==En&&(E=new _v(x,t.width,t.height,l,s,r));let We=new _h(A,V);this.xr=We,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(Ne,X,!1))},this.getSize=function(C){return C.set(Ne,X)},this.setSize=function(C,G,ee=!0){if(We.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=C,X=G,t.width=Math.floor(C*Z),t.height=Math.floor(G*Z),ee===!0&&(t.style.width=C+"px",t.style.height=G+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(Ne*Z,X*Z).floor()},this.setDrawingBufferSize=function(C,G,ee){Ne=C,X=G,Z=ee,t.width=Math.floor(C*ee),t.height=Math.floor(G*ee),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(x===En){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(Me)},this.setViewport=function(C,G,ee,Y){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,G,ee,Y),y.viewport(H.copy(Me).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(Ze)},this.setScissor=function(C,G,ee,Y){C.isVector4?Ze.set(C.x,C.y,C.z,C.w):Ze.set(C,G,ee,Y),y.scissor($.copy(Ze).multiplyScalar(Z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(C){y.setScissorTest(st=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){Pe=C},this.getClearColor=function(C){return C.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,ee=!0){let Y=0;if(C){let J=!1;if(z!==null){let Le=z.texture.format;J=m.has(Le)}if(J){let Le=z.texture.type,Be=d.has(Le),De=ct.getClearColor(),we=ct.getClearAlpha(),_e=De.r,je=De.g,ze=De.b;Be?(v[0]=_e,v[1]=je,v[2]=ze,v[3]=we,V.clearBufferuiv(V.COLOR,0,v)):(S[0]=_e,S[1]=je,S[2]=ze,S[3]=we,V.clearBufferiv(V.COLOR,0,S))}else Y|=V.COLOR_BUFFER_BIT}G&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),L=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),ct.dispose(),Te.dispose(),be.dispose(),K.dispose(),Se.dispose(),Q.dispose(),Fe.dispose(),ge.dispose(),me.dispose(),We.dispose(),We.removeEventListener("sessionstart",js),We.removeEventListener("sessionend",oo),Si.stop()};function Pt(C){C.preventDefault(),$u("WebGLRenderer: Context Lost."),P=!0}function bt(){$u("WebGLRenderer: Context Restored."),P=!1;let C=q.autoReset,G=Ke.enabled,ee=Ke.autoUpdate,Y=Ke.needsUpdate,J=Ke.type;Ue(),q.autoReset=C,Ke.enabled=G,Ke.autoUpdate=ee,Ke.needsUpdate=Y,Ke.type=J}function Xn(C){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function On(C){let G=C.target;G.removeEventListener("dispose",On),bn(G)}function bn(C){jt(C),K.remove(C)}function jt(C){let G=K.get(C).programs;G!==void 0&&(G.forEach(function(ee){me.releaseProgram(ee)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,ee,Y,J,Le){G===null&&(G=ot);let Be=J.isMesh&&J.matrixWorld.determinantAffine()<0,De=xa(C,G,ee,Y,J);y.setMaterial(Y,Be);let we=ee.index,_e=1;if(Y.wireframe===!0){if(we=j.getWireframeAttribute(ee),we===void 0)return;_e=2}let je=ee.drawRange,ze=ee.attributes.position,Ve=je.start*_e,St=(je.start+je.count)*_e;Le!==null&&(Ve=Math.max(Ve,Le.start*_e),St=Math.min(St,(Le.start+Le.count)*_e)),we!==null?(Ve=Math.max(Ve,0),St=Math.min(St,we.count)):ze!=null&&(Ve=Math.max(Ve,0),St=Math.min(St,ze.count));let Jt=St-Ve;if(Jt<0||Jt===1/0)return;Fe.setup(J,Y,De,ee,we);let Nt,se=Ie;if(we!==null&&(Nt=he.get(we),se=ae,se.setIndex(Nt)),J.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*ht()),se.setMode(V.LINES)):se.setMode(V.TRIANGLES);else if(J.isLine){let $e=Y.linewidth;$e===void 0&&($e=1),y.setLineWidth($e*ht()),J.isLineSegments?se.setMode(V.LINES):J.isLineLoop?se.setMode(V.LINE_LOOP):se.setMode(V.LINE_STRIP)}else J.isPoints?se.setMode(V.POINTS):J.isSprite&&se.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let $e=J._multiDrawStarts,oe=J._multiDrawCounts,gt=J._multiDrawCount,Ye=we?he.get(we).bytesPerElement:1,_t=K.get(Y).currentProgram.getUniforms();for(let Ln=0;Ln<gt;Ln++)_t.setValue(V,"_gl_DrawID",Ln),se.render($e[Ln]/Ye,oe[Ln])}else if(J.isInstancedMesh)se.renderInstances(Ve,Jt,J.count);else if(ee.isInstancedBufferGeometry){let $e=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,oe=Math.min(ee.instanceCount,$e);se.renderInstances(Ve,Jt,oe)}else se.render(Ve,Jt)};function ro(C,G,ee,Y){L!==null&&C.isNodeMaterial&&L.setObject(Y,C),de===!0&&qe.setState(C,ee,!1),C.transparent===!0&&C.side===xn&&C.forceSinglePass===!1?(C.side=yn,C.needsUpdate=!0,bs(C,G,Y),C.side=fs,C.needsUpdate=!0,bs(C,G,Y),C.side=xn):bs(C,G,Y)}this.compile=function(C,G,ee=null){ee===null&&(ee=C),L!==null&&L.renderStart(C,G,ee),T=be.get(ee),T.init(G),b.push(T),ee.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),C!==ee&&C.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),ve=this.localClippingEnabled,de=qe.init(this.clippingPlanes,ve),de===!0&&qe.setGlobalState(this.clippingPlanes,G),L!==null&&Ke.render(T.state.shadowsArray,ee,G);let Y=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Le=J.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){let De=Le[Be];ro(De,ee,G,J),Y.add(De)}else ro(Le,ee,G,J),Y.add(Le)}),T=b.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(C,G,ee=null){let Y=this.compile(C,G,ee);return new Promise(J=>{function Le(){if(Y.forEach(function(Be){let we=K.get(Be).currentProgram;(we===void 0||we.isReady())&&Y.delete(Be)}),Y.size===0){J(C);return}setTimeout(Le,10)}mt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Ks=null;function pa(C){Ks&&Ks(C)}function js(){Si.stop()}function oo(){Si.start()}let Si=new Hd;Si.setAnimationLoop(pa),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(C){Ks=C,We.setAnimationLoop(C),C===null?Si.stop():Si.start()},We.addEventListener("sessionstart",js),We.addEventListener("sessionend",oo),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(C,G);let ee=We.enabled===!0&&We.isPresenting===!0,Y=E!==null&&(z===null||ee)&&E.begin(A,z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(G),G=We.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,G,z),T=be.get(C,b.length),T.init(G),T.state.textureUnits=ie.getTextureUnits(),b.push(T),ce.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),te.setFromProjectionMatrix(ce,mi,G.reversedDepth),ve=this.localClippingEnabled,de=qe.init(this.clippingPlanes,ve),M=Te.get(C,R.length),M.init(),R.push(M),We.enabled===!0&&We.isPresenting===!0){let Be=A.xr.getDepthSensingMesh();Be!==null&&Qs(Be,G,-1/0,A.sortObjects)}Qs(C,G,0,A.sortObjects),M.finish(),L!==null&&L.updateLights(T.state.lightsArray),A.sortObjects===!0&&M.sort(Ee,Pe),lt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,lt&&ct.addToRenderList(M,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&qe.beginShadows();let J=T.state.shadowsArray;if(Ke.render(J,C,G),de===!0&&qe.endShadows(),(Y&&E.hasRenderPass())===!1){let Be=M.opaque,De=M.transmissive;if(T.setupLights(),G.isArrayCamera){let we=G.cameras;if(De.length>0)for(let _e=0,je=we.length;_e<je;_e++){let ze=we[_e];er(Be,De,C,ze)}lt&&ct.render(C);for(let _e=0,je=we.length;_e<je;_e++){let ze=we[_e];Ft(M,C,ze,ze.viewport)}}else De.length>0&&er(Be,De,C,G),lt&&ct.render(C),Ft(M,C,G)}z!==null&&U===0&&(ie.updateMultisampleRenderTarget(z),ie.updateRenderTargetMipmap(z)),Y&&E.end(A),C.isScene===!0&&C.onAfterRender(A,C,G),Fe.resetDefaultState(),O=-1,k=null,b.pop(),b.length>0?(T=b[b.length-1],ie.setTextureUnits(T.state.textureUnits),de===!0&&qe.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,L!==null&&L.renderEnd()};function Qs(C,G,ee,Y){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(te)){Y&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ce);let Be=Q.update(C),De=C.material;De.visible&&M.push(C,Be,De,ee,Ae.z,null,G)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(te))){let Be=Q.update(C),De=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ae.copy(Be.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(ce)),Array.isArray(De)){let we=Be.groups;for(let _e=0,je=we.length;_e<je;_e++){let ze=we[_e],Ve=De[ze.materialIndex];Ve&&Ve.visible&&M.push(C,Be,Ve,ee,Ae.z,ze,G)}}else De.visible&&M.push(C,Be,De,ee,Ae.z,null,G)}}let Le=C.children;for(let Be=0,De=Le.length;Be<De;Be++)Qs(Le[Be],G,ee,Y)}function Ft(C,G,ee,Y){let{opaque:J,transmissive:Le,transparent:Be}=C;T.setupLightsView(ee),de===!0&&qe.setGlobalState(A.clippingPlanes,ee),Y&&y.viewport(H.copy(Y)),J.length>0&&Ms(J,G,ee),Le.length>0&&Ms(Le,G,ee),Be.length>0&&Ms(Be,G,ee),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function er(C,G,ee,Y){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let Ve=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new Ut(1,1,{generateMipmaps:!0,type:Ve?on:En,minFilter:Gn,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let Le=T.state.transmissionRenderTarget[Y.id],Be=Y.viewport||H;Le.setSize(Be.z*A.transmissionResolutionScale,Be.w*A.transmissionResolutionScale);let De=A.getRenderTarget(),we=A.getActiveCubeFace(),_e=A.getActiveMipmapLevel();A.setRenderTarget(Le),A.getClearColor(ke),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),lt&&ct.render(ee);let je=A.toneMapping;A.toneMapping=xi;let ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),de===!0&&qe.setGlobalState(A.clippingPlanes,Y),Ms(C,ee,Y),ie.updateMultisampleRenderTarget(Le),ie.updateRenderTargetMipmap(Le),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let St=0,Jt=G.length;St<Jt;St++){let Nt=G[St],{object:se,geometry:$e,material:oe,group:gt}=Nt;if(oe.side===xn&&se.layers.test(Y.layers)){let Ye=oe.side;oe.side=yn,oe.needsUpdate=!0,ao(se,ee,Y,$e,oe,gt),oe.side=Ye,oe.needsUpdate=!0,Ve=!0}}Ve===!0&&(ie.updateMultisampleRenderTarget(Le),ie.updateRenderTargetMipmap(Le))}A.setRenderTarget(De,we,_e),A.setClearColor(ke,ye),ze!==void 0&&(Y.viewport=ze),A.toneMapping=je}function Ms(C,G,ee){let Y=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Le=C.length;J<Le;J++){let Be=C[J],{object:De,geometry:we,group:_e}=Be,je=Be.material;je.allowOverride===!0&&Y!==null&&(je=Y),De.layers.test(ee.layers)&&ao(De,G,ee,we,je,_e)}}function ao(C,G,ee,Y,J,Le){L!==null&&J.isNodeMaterial&&L.setObject(C,J),C.onBeforeRender(A,G,ee,Y,J,Le),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(A,G,ee,Y,C,Le),J.transparent===!0&&J.side===xn&&J.forceSinglePass===!1?(J.side=yn,J.needsUpdate=!0,A.renderBufferDirect(ee,G,Y,J,C,Le),J.side=fs,J.needsUpdate=!0,A.renderBufferDirect(ee,G,Y,J,C,Le),J.side=xn):A.renderBufferDirect(ee,G,Y,J,C,Le),C.onAfterRender(A,G,ee,Y,J,Le)}function bs(C,G,ee){G.isScene!==!0&&(G=ot);let Y=K.get(C),J=T.state.lights,Le=T.state.shadowsArray,Be=J.state.version,De=me.getParameters(C,J.state,Le,G,ee,T.state.lightProbeGridArray),we=me.getProgramCacheKey(De),_e=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;let je=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=Se.get(C.envMap||Y.environment,je),Y.envMapRotation=Y.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,_e===void 0&&(C.addEventListener("dispose",On),_e=new Map,Y.programs=_e);let ze=_e.get(we);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===Be)return ga(C,De),ze}else De.uniforms=me.getUniforms(C),L!==null&&C.isNodeMaterial&&L.build(C,ee,De),C.onBeforeCompile(De,A),ze=me.acquireProgram(De,we),_e.set(we,ze),Y.uniforms=De.uniforms;let Ve=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=qe.uniform),ga(C,De),Y.needsLights=Es(C),Y.lightsStateVersion=Be,Y.needsLights&&(Ve.ambientLightColor.value=J.state.ambient,Ve.lightProbe.value=J.state.probe,Ve.sunLights.value=J.state.sun,Ve.sunLightShadows.value=J.state.sunShadow,Ve.directionalLights.value=J.state.directional,Ve.directionalLightShadows.value=J.state.directionalShadow,Ve.spotLights.value=J.state.spot,Ve.spotLightShadows.value=J.state.spotShadow,Ve.rectAreaLights.value=J.state.rectArea,Ve.ltc_1.value=J.state.rectAreaLTC1,Ve.ltc_2.value=J.state.rectAreaLTC2,Ve.pointLights.value=J.state.point,Ve.pointLightShadows.value=J.state.pointShadow,Ve.hemisphereLights.value=J.state.hemi,Ve.sunShadowMatrix.value=J.state.sunShadowMatrix,Ve.sunShadowCascade.value=J.state.sunShadowCascade,Ve.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ve.spotLightMatrix.value=J.state.spotLightMatrix,Ve.spotLightMap.value=J.state.spotLightMap,Ve.pointShadowMatrix.value=J.state.pointShadowMatrix),Y.lightProbeGrid=T.state.lightProbeGridArray.length>0,Y.currentProgram=ze,Y.uniformsList=null,ze}function ma(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=Hr.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function ga(C,G){let ee=K.get(C);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Ss(C,G){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(G.matrixWorld);for(let ee=0,Y=C.length;ee<Y;ee++){let J=C[ee];if(J.texture!==null&&J.boundingBox.containsPoint(_))return J}return null}function xa(C,G,ee,Y,J){G.isScene!==!0&&(G=ot),ie.resetTextureUnits();let Le=G.fog,Be=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,De=z===null?A.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:xt.workingColorSpace,we=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,_e=Se.get(Y.envMap||Be,we),je=Y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ze=!!ee.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ve=!!ee.morphAttributes.position,St=!!ee.morphAttributes.normal,Jt=!!ee.morphAttributes.color,Nt=xi;Y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Nt=A.toneMapping);let se=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,$e=se!==void 0?se.length:0,oe=K.get(Y),gt=T.state.lights;if(de===!0&&(ve===!0||C!==k)){let It=C===k&&Y.id===O;qe.setState(Y,C,It)}let Ye=!1;Y.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==gt.state.version||oe.outputColorSpace!==De||J.isBatchedMesh&&oe.batching===!1||!J.isBatchedMesh&&oe.batching===!0||J.isBatchedMesh&&oe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&oe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&oe.instancing===!1||!J.isInstancedMesh&&oe.instancing===!0||J.isSkinnedMesh&&oe.skinning===!1||!J.isSkinnedMesh&&oe.skinning===!0||J.isInstancedMesh&&oe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&oe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&oe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&oe.instancingMorph===!1&&J.morphTexture!==null||oe.envMap!==_e||Y.fog===!0&&oe.fog!==Le||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==qe.numPlanes||oe.numIntersection!==qe.numIntersection)||oe.vertexAlphas!==je||oe.vertexTangents!==ze||oe.morphTargets!==Ve||oe.morphNormals!==St||oe.morphColors!==Jt||oe.toneMapping!==Nt||oe.morphTargetsCount!==$e||!!oe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,oe.__version=Y.version);let _t=oe.currentProgram;Ye===!0&&(_t=bs(Y,G,J),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,_t,oe));let Ln=!1,qn=!1,ci=!1,dt=_t.getUniforms(),wt=oe.uniforms;if(y.useProgram(_t.program)&&(Ln=!0,qn=!0,ci=!0),Y.id!==O&&(O=Y.id,qn=!0),oe.needsLights){let It=Ss(T.state.lightProbeGridArray,J);oe.lightProbeGrid!==It&&(oe.lightProbeGrid=It,qn=!0)}if(Ln||k!==C){y.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),dt.setValue(V,"projectionMatrix",C.projectionMatrix),dt.setValue(V,"viewMatrix",C.matrixWorldInverse);let tn=dt.map.cameraPosition;tn!==void 0&&tn.setValue(V,ne.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&dt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&dt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,qn=!0,ci=!0)}if(oe.needsLights&&(gt.state.sunShadowMap.length>0&&dt.setValue(V,"sunShadowMap",gt.state.sunShadowMap,ie),gt.state.directionalShadowMap.length>0&&dt.setValue(V,"directionalShadowMap",gt.state.directionalShadowMap,ie),gt.state.spotShadowMap.length>0&&dt.setValue(V,"spotShadowMap",gt.state.spotShadowMap,ie),gt.state.pointShadowMap.length>0&&dt.setValue(V,"pointShadowMap",gt.state.pointShadowMap,ie)),J.isSkinnedMesh){dt.setOptional(V,J,"bindMatrix"),dt.setOptional(V,J,"bindMatrixInverse");let It=J.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),dt.setValue(V,"boneTexture",It.boneTexture,ie))}J.isBatchedMesh&&(dt.setOptional(V,J,"batchingTexture"),dt.setValue(V,"batchingTexture",J._matricesTexture,ie),dt.setOptional(V,J,"batchingIdTexture"),dt.setValue(V,"batchingIdTexture",J._indirectTexture,ie),dt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&dt.setValue(V,"batchingColorTexture",J._colorsTexture,ie));let ui=ee.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&W.update(J,ee,_t),(qn||oe.receiveShadow!==J.receiveShadow)&&(oe.receiveShadow=J.receiveShadow,dt.setValue(V,"receiveShadow",J.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(wt.envMapIntensity.value=G.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=r_()),qn){if(dt.setValue(V,"toneMappingExposure",A.toneMappingExposure),oe.needsLights&&Ts(wt,ci),Le&&Y.fog===!0&&He.refreshFogUniforms(wt,Le),He.refreshMaterialUniforms(wt,Y,Z,X,T.state.transmissionRenderTarget[C.id]),oe.needsLights&&oe.lightProbeGrid){let It=oe.lightProbeGrid;wt.probesSH.value=It.texture,wt.probesMin.value.copy(It.boundingBox.min),wt.probesMax.value.copy(It.boundingBox.max),wt.probesResolution.value.copy(It.resolution)}Hr.upload(V,ma(oe),wt,ie)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Hr.upload(V,ma(oe),wt,ie),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&dt.setValue(V,"center",J.center),dt.setValue(V,"modelViewMatrix",J.modelViewMatrix),dt.setValue(V,"normalMatrix",J.normalMatrix),dt.setValue(V,"modelMatrix",J.matrixWorld),Y.uniformsGroups!==void 0){let It=Y.uniformsGroups;for(let tn=0,dn=It.length;tn<dn;tn++){let va=It[tn];ge.update(va,_t),ge.bind(va,_t)}}return _t}function Ts(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Es(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,G,ee){let Y=K.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),K.get(C.texture).__webglTexture=G,K.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:ee,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){let ee=K.get(C);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,ee=0){z=C,N=G,U=ee;let Y=null,J=!1,Le=!1;if(C){let De=K.get(C);if(De.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(V.FRAMEBUFFER,De.__webglFramebuffer),H.copy(C.viewport),$.copy(C.scissor),le=C.scissorTest,y.viewport(H),y.scissor($),y.setScissorTest(le),O=-1;return}else if(De.__webglFramebuffer===void 0)ie.setupRenderTarget(C);else if(De.__hasExternalTextures)ie.rebindTextures(C,K.get(C.texture).__webglTexture,K.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let je=C.depthTexture;if(De.__boundDepthTexture!==je){if(je!==null&&K.has(je)&&(C.width!==je.image.width||C.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(C)}}let we=C.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Le=!0);let _e=K.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(_e[G])?Y=_e[G][ee]:Y=_e[G],J=!0):C.samples>0&&ie.useMultisampledRTT(C)===!1?Y=K.get(C).__webglMultisampledFramebuffer:Array.isArray(_e)?Y=_e[ee]:Y=_e,H.copy(C.viewport),$.copy(C.scissor),le=C.scissorTest}else H.copy(Me).multiplyScalar(Z).floor(),$.copy(Ze).multiplyScalar(Z).floor(),le=st;if(ee!==0&&(Y=D),y.bindFramebuffer(V.FRAMEBUFFER,Y)&&y.drawBuffers(C,Y),y.viewport(H),y.scissor($),y.setScissorTest(le),J){let De=K.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,ee)}else if(Le){let De=G;for(let we=0;we<C.textures.length;we++){let _e=K.get(C.textures[we]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+we,_e.__webglTexture,ee,De)}}else if(C!==null&&ee!==0){let De=K.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,ee)}O=-1};function lo(C){let G=K.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=F.textureFormatReadable(C.format),G.__typeReadable=F.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,ee,Y,J,Le,Be,De=0){if(!(C&&C.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(we=we[Be]),we){y.bindFramebuffer(V.FRAMEBUFFER,we);try{let _e=C.textures[De],je=_e.format,ze=_e.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);let Ve=lo(_e);if(Ve.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Y&&ee>=0&&ee<=C.height-J&&V.readPixels(G,ee,Y,J,Re.convert(je),Re.convert(ze),Le)}finally{let _e=z!==null?K.get(z).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(C,G,ee,Y,J,Le,Be,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(we=we[Be]),we)if(G>=0&&G<=C.width-Y&&ee>=0&&ee<=C.height-J){y.bindFramebuffer(V.FRAMEBUFFER,we);let _e=C.textures[De],je=_e.format,ze=_e.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De);let Ve=lo(_e);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,St),V.bufferData(V.PIXEL_PACK_BUFFER,Le.byteLength,V.STREAM_READ),V.readPixels(G,ee,Y,J,Re.convert(je),Re.convert(ze),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Jt=z!==null?K.get(z).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,Jt);let Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await md(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,St),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Le),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(St),V.deleteSync(Nt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,ee=0){let Y=Math.pow(2,-ee),J=Math.floor(C.image.width*Y),Le=Math.floor(C.image.height*Y),Be=G!==null?G.x:0,De=G!==null?G.y:0;ie.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ee,0,0,Be,De,J,Le),y.unbindTexture()},this.copyTextureToTexture=function(C,G,ee=null,Y=null,J=0,Le=0){let Be,De,we,_e,je,ze,Ve,St,Jt,Nt=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(ee!==null)Be=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,we=ee.isBox3?ee.max.z-ee.min.z:1,_e=ee.min.x,je=ee.min.y,ze=ee.isBox3?ee.min.z:0;else{let wt=Math.pow(2,-J);Be=Math.floor(Nt.width*wt),De=Math.floor(Nt.height*wt),C.isDataArrayTexture?we=Nt.depth:C.isData3DTexture?we=Math.floor(Nt.depth*wt):we=1,_e=0,je=0,ze=0}Y!==null?(Ve=Y.x,St=Y.y,Jt=Y.z):(Ve=0,St=0,Jt=0);let se=Re.convert(G.format),$e=Re.convert(G.type),oe;G.isData3DTexture?(ie.setTexture3D(G,0),oe=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ie.setTexture2DArray(G,0),oe=V.TEXTURE_2D_ARRAY):(ie.setTexture2D(G,0),oe=V.TEXTURE_2D),y.activeTexture(V.TEXTURE0),y.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let gt=y.getParameter(V.UNPACK_ROW_LENGTH),Ye=y.getParameter(V.UNPACK_IMAGE_HEIGHT),_t=y.getParameter(V.UNPACK_SKIP_PIXELS),Ln=y.getParameter(V.UNPACK_SKIP_ROWS),qn=y.getParameter(V.UNPACK_SKIP_IMAGES);y.pixelStorei(V.UNPACK_ROW_LENGTH,Nt.width),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt.height),y.pixelStorei(V.UNPACK_SKIP_PIXELS,_e),y.pixelStorei(V.UNPACK_SKIP_ROWS,je),y.pixelStorei(V.UNPACK_SKIP_IMAGES,ze);let ci=C.isDataArrayTexture||C.isData3DTexture,dt=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){let wt=K.get(C),ui=K.get(G),It=K.get(wt.__renderTarget),tn=K.get(ui.__renderTarget);y.bindFramebuffer(V.READ_FRAMEBUFFER,It.__webglFramebuffer),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,tn.__webglFramebuffer);for(let dn=0;dn<we;dn++)ci&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,K.get(C).__webglTexture,J,ze+dn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,K.get(G).__webglTexture,Le,Jt+dn)),V.blitFramebuffer(_e,je,Be,De,Ve,St,Be,De,V.DEPTH_BUFFER_BIT,V.NEAREST);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||K.has(C)){let wt=K.get(C),ui=K.get(G);y.bindFramebuffer(V.READ_FRAMEBUFFER,w),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,I);for(let It=0;It<we;It++)ci?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,wt.__webglTexture,J,ze+It):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,wt.__webglTexture,J),dt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ui.__webglTexture,Le,Jt+It):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ui.__webglTexture,Le),J!==0?V.blitFramebuffer(_e,je,Be,De,Ve,St,Be,De,V.COLOR_BUFFER_BIT,V.NEAREST):dt?V.copyTexSubImage3D(oe,Le,Ve,St,Jt+It,_e,je,Be,De):V.copyTexSubImage2D(oe,Le,Ve,St,_e,je,Be,De);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else dt?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(oe,Le,Ve,St,Jt,Be,De,we,se,$e,Nt.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(oe,Le,Ve,St,Jt,Be,De,we,se,Nt.data):V.texSubImage3D(oe,Le,Ve,St,Jt,Be,De,we,se,$e,Nt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Le,Ve,St,Be,De,se,$e,Nt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Le,Ve,St,Nt.width,Nt.height,se,Nt.data):V.texSubImage2D(V.TEXTURE_2D,Le,Ve,St,Be,De,se,$e,Nt);y.pixelStorei(V.UNPACK_ROW_LENGTH,gt),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye),y.pixelStorei(V.UNPACK_SKIP_PIXELS,_t),y.pixelStorei(V.UNPACK_SKIP_ROWS,Ln),y.pixelStorei(V.UNPACK_SKIP_IMAGES,qn),Le===0&&G.generateMipmaps&&V.generateMipmap(oe),y.unbindTexture()},this.initRenderTarget=function(C){K.get(C).__webglFramebuffer===void 0&&ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ie.setTextureCube(C,0):C.isData3DTexture?ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ie.setTexture2DArray(C,0):ie.setTexture2D(C,0),y.unbindTexture()},this.resetState=function(){N=0,U=0,z=null,y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var Bt=(i,e,t)=>i<e?e:i>t?t:i,Rt=(i,e,t)=>i+(e-i)*t,Sc=i=>i*i*(3-2*i),Lt=(i,e,t)=>{let n=Bt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Zd=1337;function $d(i){Zd=i|0}function o_(i){return i=i^Zd|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Kn=(i,e)=>o_(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Jn(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Rt(Kn(t,e),Kn(t+1,e),s)}var Tc=(i,e=0)=>Jn(i,e)*.55+Jn(i*2.03,e+7)*.3+Jn(i*4.1,e+13)*.15;function Rn(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var bc=new xe,re=i=>(bc.set(i),[bc.r,bc.g,bc.b]),Jd=(i,e,t)=>[Rt(i[0],e[0],t),Rt(i[1],e[1],t),Rt(i[2],e[2],t)],Cn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Li=["city","sakura","coast","country","mountain","snow"],na={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},yh=1500,Kd=260,gs=0,Mh=0;function Qd(i){Mh=Math.max(0,Li.indexOf(i))}function Gr(i){let e=Math.floor(i/yh),t=i-e*yh,n=Sc(Bt((t-(yh-Kd))/Kd,0,1)),s=Li.length;return{a:Li[((e+Mh)%s+s)%s],b:Li[((e+Mh+1)%s+s)%s],t:n}}function Dt(i){let e=Gr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var Zt=i=>{let e=Gr(i);return e.t<.5?e.a:e.b};function Pn(i,e){let t=Gr(i);return Rt(na[t.a][e],na[t.b][e],t.t)}var Vs=650,Gs=375,Wr=i=>i*Vs+Gs;function ia(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Dt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var bh={x:new Map,r:new Map,t:new Map};function Sh(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function Xr(i){let e=Math.round((i-Gs)/Vs);return Sh(bh.x,e,()=>{let t=Wr(e);return ia(t)?{k:e,s:t}:null})}function a_(i){let e=Xr(i);return e?1-Lt(8,45,Math.abs(i-e.s)):0}var Ws=1150,qr=820,sa=4.6,Th=i=>i*Ws+qr;function Eh(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Dt(i+t);if(n.country+n.sakura<.9)return!1}let e=Xr(i);return!(e&&Math.abs(e.s-i)<170)}function Di(i){let e=Math.round((i-qr)/Ws);return Sh(bh.r,e,()=>{let t=Th(e);return Eh(t)?{k:e,s:t}:null})}function l_(i){let e=Di(i);return e?1-Lt(30,70,Math.abs(i-e.s)):0}function c_(i){let e=-sa;return i<11?e-1.3:i<16?Rt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Rt(e+.7,.35,(i-20)/5.5):.35}var ep=1050,tp=525,Kt=85,$t=125,u_=24,h_=i=>i*ep+tp;function f_(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Dt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function yi(i){let e=Math.round((i-tp)/ep);return Sh(bh.t,e,()=>{let t=h_(e);return f_(t)?{k:e,s:t}:null})}function d_(i){let e=yi(i);return e?1-Lt(Kt+20,$t+25,Math.abs(i-e.s)):0}var Ec=0,Ac=(i,e)=>{let t=i/$t;return u_*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var Ii=2,wc=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Jn(e/300,11)-.5)*2+(Jn(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Pn(e,"curv")*(1-Math.max(a_(e),l_(e),d_(e)))}elevRaw(e){return Pn(e,"base")+Pn(e,"hill")*(Tc(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=Xr(e);if(n){let a=1-Lt(8,45,Math.abs(e-n.s));a>0&&(t=Rt(t,this.elevRaw(n.s),a))}let s=Di(e);if(s){let a=1-Lt(30,70,Math.abs(e-s.s));a>0&&(t=Rt(t,this.elevRaw(s.s),a))}let r=yi(e);if(r){let a=1-Lt(Kt+10,$t+45,Math.abs(e-r.s));a>0&&(t=Rt(t,this.elevRaw(r.s),a))}return t}ensure(e){for(;(this.X.length-1)*Ii<e+Ii;){let t=this.X.length-1,n=t*Ii,s=this.curv(n+Ii/2)*Ii,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*Ii),this.Z.push(this.Z[t]+Math.cos(r+s/2)*Ii),this.H.push(r+s),this.Y.push(this.elev(n+Ii))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+Ii);let n=e/Ii,s=Math.floor(n),r=n-s;t.x=Rt(this.X[s],this.X[s+1],r),t.z=Rt(this.Z[s],this.Z[s+1],r),t.y=Rt(this.Y[s],this.Y[s+1],r),t.h=Rt(this.H[s],this.H[s+1],r);let a=Math.sin(t.h),l=Math.cos(t.h);return t.fx=a,t.fz=l,t.rx=-l,t.rz=a,t}};function jd(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Lt(45,190,r)*16*(.45+.55*Jn(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+Lt(s+1.5,80,r)*24*(.5+.5*Jn(e/170,5))+Lt(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?Rt(1.25,-1.6,a/26):Rt(-1.6,-7,Bt((a-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Jn(e/140,61),o=r-(s+1);return o<l?o:Math.min(l+(o-l)*.55,70)}if(r<s+1.2)return-.06;let a=r-(s+1.2);return a<32?-a*1.1:-35.2+Lt(105,230,r)*95*(.6+.4*Jn(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Rt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Jn(e/40+(t>0?3:0),71)-.5):.55+Lt(125,210,r)*40*(.45+.55*Jn(e/230+(t>0?11:0),73));case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+Lt(135,215,r)*36*(.4+.6*Jn(e/210+(t>0?9:0),7))}}function Yr(i,e,t,n){let s=Gr(i),r=jd(s.a,i,e,t,n),a=s.t>0?Rt(r,jd(s.b,i,e,t,n),s.t):r;Ec=0;let l=Di(i);if(l){let g=Math.abs(i-l.s);if(g>=36)return a;let x=g<29?c_(g):Rt(.35,a,Lt(29,36,g));return Math.abs(e)<n+3.2&&(x=Math.min(x,-.08)),x}let o=yi(i);if(!o)return a;let u=i-o.s,c=Math.abs(u);if(c>=2*$t)return a;let h=Math.abs(e),f=Ac(u,e),p;return c<Kt?p=h<=n+1.46?-.25:Math.max(a,f):p=Math.max(a,Math.min(f,h<n+1?-.06:h-(n+1))),Ec=Math.max(0,p-a),p}function np(i){let e=Di(i);return e?1-Lt(27,34,Math.abs(i-e.s)):0}var ra=new B,Rc=new B,p_=[1,1,1],hn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new Je,this.nm=new at,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let a=new Float32Array(t*2);this.U&&a.set(this.U.subarray(0,n*2)),this.U=a}if(this.hasColor){let a=new Uint8Array(t*3);this.Cl&&a.set(this.Cl.subarray(0,n*3)),this.Cl=a}if(this.hasAO){let a=new Uint8Array(t);this.A&&a.set(this.A.subarray(0,n)),this.A=a}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,a,l,o,u){this.n>=this.cap&&this.grow(this.n+1);let c=this.e,h=this.ne,f=this.n*3,p=this.P,g=this.bb,x=c[0]*e+c[4]*t+c[8]*n+c[12],m=c[1]*e+c[5]*t+c[9]*n+c[13],d=c[2]*e+c[6]*t+c[10]*n+c[14];p[f]=x,p[f+1]=m,p[f+2]=d,x<g[0]&&(g[0]=x),m<g[1]&&(g[1]=m),d<g[2]&&(g[2]=d),x>g[3]&&(g[3]=x),m>g[4]&&(g[4]=m),d>g[5]&&(g[5]=d);let v=h[0]*s+h[3]*r+h[6]*a,S=h[1]*s+h[4]*r+h[7]*a,_=h[2]*s+h[5]*r+h[8]*a,M=127/(Math.sqrt(v*v+S*S+_*_)||1);if(this.N[f]=Math.round(v*M),this.N[f+1]=Math.round(S*M),this.N[f+2]=Math.round(_*M),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=o),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(m)),this.hasColor){let T=u||p_,R=this.Cl;R[f]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,R[f+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,R[f+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,a){ra.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Rc.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Rc.lengthSq()<1e-12&&Rc.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),ra.cross(Rc).normalize();let l=ra.x,o=ra.y,u=ra.z,c=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,p=a?a.v1:1;this.vtx(e[0],e[1],e[2],l,o,u,c,f,r),this.vtx(t[0],t[1],t[2],l,o,u,h,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(e[0],e[1],e[2],l,o,u,c,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(s[0],s[1],s[2],l,o,u,c,p,r)}box(e,t,n,s,r,a,l,o=null,u=null){let c=o||{},h=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],h.nz||l,c.nz),this.quad([e,t,a],[s,t,a],[s,r,a],[e,r,a],h.pz||l,c.pz),this.quad([e,t,n],[e,t,a],[e,r,a],[e,r,n],h.nx||l,c.nx),this.quad([s,t,a],[s,t,n],[s,r,n],[s,r,a],h.px||l,c.px),this.quad([e,r,a],[s,r,a],[s,r,n],[e,r,n],h.py||l,c.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,a],[e,t,a],h.ny||l,c.ny)}cyl(e,t,n,s,r,a,l,o,u=!0){let c=(s-r)/a;for(let h=0;h<l;h++){let f=h/l*Math.PI*2,p=(h+1)/l*Math.PI*2,g=Math.cos(f),x=Math.sin(f),m=Math.cos(p),d=Math.sin(p),v=[e+g*s,t,n+x*s],S=[e+m*s,t,n+d*s],_=[e+m*r,t+a,n+d*r],M=[e+g*r,t+a,n+x*r];this.vtx(v[0],v[1],v[2],g,c,x,0,0,o),this.vtx(M[0],M[1],M[2],g,c,x,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(v[0],v[1],v[2],g,c,x,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(S[0],S[1],S[2],m,c,d,0,0,o),u&&r>.001&&(this.vtx(e,t+a,n,0,1,0,0,0,o),this.vtx(_[0],_[1],_[2],0,1,0,0,0,o),this.vtx(M[0],M[1],M[2],0,1,0,0,0,o))}}rod(e,t,n,s,r,a){let l=t[0]-e[0],o=t[1]-e[1],u=t[2]-e[2],c=Math.hypot(l,o,u);l/=c,o/=c,u/=c;let h=0,f=1,p=0;Math.abs(o)>.99&&(h=1,f=0);let g=o*p-u*f,x=u*h-l*p,m=l*f-o*h,d=Math.hypot(g,x,m);g/=d,x/=d,m/=d;let v=x*u-m*o,S=m*l-g*u,_=g*o-x*l;for(let M=0;M<r;M++){let T=M/r*Math.PI*2,R=(M+1)/r*Math.PI*2,b=Math.cos(T),E=Math.sin(T),A=Math.cos(R),P=Math.sin(R),L=g*b+v*E,D=x*b+S*E,w=m*b+_*E,I=g*A+v*P,N=x*A+S*P,U=m*A+_*P,z=[e[0]+L*n,e[1]+D*n,e[2]+w*n],O=[e[0]+I*n,e[1]+N*n,e[2]+U*n],k=[t[0]+I*s,t[1]+N*s,t[2]+U*s],H=[t[0]+L*s,t[1]+D*s,t[2]+w*s];this.vtx(z[0],z[1],z[2],L,D,w,0,0,a),this.vtx(O[0],O[1],O[2],I,N,U,0,0,a),this.vtx(k[0],k[1],k[2],I,N,U,0,0,a),this.vtx(z[0],z[1],z[2],L,D,w,0,0,a),this.vtx(k[0],k[1],k[2],I,N,U,0,0,a),this.vtx(H[0],H[1],H[2],L,D,w,0,0,a)}return c}blob(e,t,n,s,r,a,l=0,o=1){let u=ip[l%ip.length],c=u.attributes.position.array,h=u.attributes.normal.array,f=u.userData.disp;for(let p=0;p<c.length;p+=3){let g=1+f[p/3],x=Math.max(0,Math.min(1,h[p+1]*.5+.5)),m=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(e+c[p]*s*g,t+c[p+1]*s*g*o,n+c[p+2]*s*g,h[p],h[p+1],h[p+2],0,0,m)}}wire(e,t,n,s,r,a=10){let l=e;this.noShadow=!0;for(let o=1;o<=a;o++){let u=o/a,c=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,c,s,s,3,r),l=c}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,l,o]of r)this.vtx(e[a][0],e[a][1],e[a][2],t[a][0],t[a][1],t[a][2],l,o,s[a])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,a=e.N,l=e.C,o=e.U,u=this.n,c=this.bb;for(let h=0;h<e.n*3;h+=3){let f=r[h],p=r[h+1],g=r[h+2],x=u*3+h,m=n[0]*f+n[4]*p+n[8]*g+n[12],d=n[1]*f+n[5]*p+n[9]*g+n[13],v=n[2]*f+n[6]*p+n[10]*g+n[14];this.P[x]=m,this.P[x+1]=d,this.P[x+2]=v,this.hasAO&&(this.A[u+h/3]=this.aoByte(d)),m<c[0]&&(c[0]=m),d<c[1]&&(c[1]=d),v<c[2]&&(c[2]=v),m>c[3]&&(c[3]=m),d>c[4]&&(c[4]=d),v>c[5]&&(c[5]=v);let S=a[h],_=a[h+1],M=a[h+2],T=s[0]*S+s[3]*_+s[6]*M,R=s[1]*S+s[4]*_+s[7]*M,b=s[2]*S+s[5]*_+s[8]*M,E=127/(Math.sqrt(T*T+R*R+b*b)||1);this.N[x]=Math.round(T*E),this.N[x+1]=Math.round(R*E),this.N[x+2]=Math.round(b*E)}this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(o?this.U.set(o,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new Mt,t=this.n,n=this.bb;return e.setAttribute("position",new Yt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Yt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Yt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Yt(this.A.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new Yt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new si(new B(n[0],n[1],n[2]),new B(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new ri),e}},ip=[0,1,2,3].map(i=>{let e=new Fo(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,a,l)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});it.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var m_=it.shadowmap_pars_fragment;function Ah(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;it.shadowmap_pars_fragment=m_.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}Ah(1);function lp(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";it.shadowmap_pars_fragment=t+it.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}it.lights_fragment_begin=it.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var xs=4200,Xe={uSkyHor:{value:new xe(.7,.8,.9)},uSkyZen:{value:new xe(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ge},uSunDir:{value:new B(0,1,0)},uSunCol:{value:new xe(1,1,1)},uTuftV:{value:new Ge(0,.333)},uTunA:{value:new B(0,-1e4,0)},uTunB:{value:new B(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new B},uCarFwd:{value:new B(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:g_()},uCloudTex:{value:null},uCloudOrg:{value:new Ge},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Ge(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function cp(i){let e=new rs(new Uint8Array(i),i.length,1,Bs);return e.minFilter=e.magFilter=sn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var jn=cp([16,16,16,70,200,255,255,255]),sp=cp([28,40,70,130,200,240,255,255]);function g_(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new rs(e,256,256,Wn);return s.wrapS=s.wrapT=Sr,s.magFilter=Ot,s.minFilter=Gn,s.generateMipmaps=!0,s.colorSpace=_i,s.needsUpdate=!0,s}var Wi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Cc=1600,wh=256,x_=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Cc).toFixed(8)} + 0.5).r * uCloudSh; }`,v_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,__=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Cc).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,y_=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,M_=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,b_=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,Pc=new Lr;Pc.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};Pc.customProgramCacheKey=()=>"propdepth";function up(){let i=new Ut(wh,wh,{format:Bs,type:En,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),e=new pt({uniforms:{uCenter:{value:new Ge},uOrigin:Xe.uOrigin,uTime:Xe.uTime,uNoiseTex:Xe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Cc.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ft(new Gt(2,2),e),n=new Vi;t.frustumCulled=!1,Xe.uCloudTex.value=i.texture,Xe.uCloudTex.rt=i;let s=Cc/wh;return{update(r,a,l,o,u){let c=Math.round((a+o)/s)*s-o,h=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(c,h),Xe.uCloudOrg.value.set(c,h);let f=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(f)}}}function Xs(i,e="",t="",n=!0){i.uniforms.uOrigin=Xe.uOrigin,i.uniforms.uCloudSh=Xe.uCloudSh,i.uniforms.uTime=Xe.uTime,i.uniforms.uNoiseTex=Xe.uNoiseTex,i.uniforms.uCloudTex=Xe.uCloudTex,i.uniforms.uCloudOrg=Xe.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=Xe[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?__:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Wi}${x_}${M_}${e}`).replace("#include <opaque_fragment>",`${n?y_:v_}${t}${b_}
#include <opaque_fragment>`)}var S_=`
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
`,T_=`
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
#endif`,E_=`
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
}`,hp={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function fp(i){let e={};for(let t of i)e[hp[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var rp=new Map;function oa(i){let e=[...new Set(i)].sort().join("+"),t=rp.get(e);return t||(t=dp(fp(e.split("+")),e),rp.set(e,t)),t}function dp(i=fp(Object.keys(hp)),e="all"){let t=new ln({color:16777215,gradientMap:jn});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=Xe.uSkyHor,n.uniforms.uSkyZen=Xe.uSkyZen,n.uniforms.uWet=Xe.uWet,n.uniforms.uNight=Xe.uNight,n.uniforms.uSunDir=Xe.uSunDir,n.uniforms.uSunCol=Xe.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=Xe[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),Xs(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${S_}`,E_+T_,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v16-"+e,t}function op(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),Xs(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function ap(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function Rh(i){return i.onBeforeCompile=e=>Xs(e),i.customProgramCacheKey=()=>"cs",i}var w_="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",A_=(i,e,t="")=>`
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
}`;function Ch(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let a of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[a]=Xe[a];s&&Object.assign(r.uniforms,s.uniforms),Xs(r,w_+(s?s.pars:""),A_(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}function pp(i,e){let t={};t.ground=dp(),t.color=op(new ln({vertexColors:!0,gradientMap:jn}),1.6,.1,"color-v3",ap),t.atlas=new ln({vertexColors:!0,gradientMap:jn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=l=>{ap(l),Xs(l)},t.atlas.customProgramCacheKey=()=>"atlas-v3",t.foliage=op(new ln({vertexColors:!0,gradientMap:sp}),2.6,.24,"foliage-v2"),t.lamp=new en({color:15789798}),t.sig=new en({color:new xe(.15,1.7,1.1)}),t.sodium=new en({color:new xe(5,2.3,.65)}),t.decal=new ln({vertexColors:!0,gradientMap:jn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=l=>Xs(l),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new ln({map:e,vertexColors:!0,gradientMap:sp,alphaTest:.42,side:xn}),t.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",it.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),Xs(l),l.uniforms.uTuftV=Xe.uTuftV,l.uniforms.uWind=Xe.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v3"),t.wire=new en({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new Hn(n);return t.pool=new en({map:a,color:16762746,transparent:!0,opacity:0,blending:Gi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=a,t}var R_=re("#f2c230"),mp=re("#26272c");function Ic(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),a=Pn(s,"rw"),l=n*(a+.8),o=Dt(s),u=o.city+o.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return t}function gp(){let i=new Xt,e=Rh(new ln({vertexColors:!0,gradientMap:jn})),t=new en({color:new xe(6,.45,.3)}),n=new en({color:new xe(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Xt,a=new Xt;r.add(a),a.position.set(-.42,1.02,-.02);let l=new hn,o=3.6;for(let h=0,f=0;f<o;h++,f+=.45)l.box(-Math.min(f+.45,o),-.065,-.065,-f,.065,.065,h%2?mp:R_);l.box(0,-.09,-.07,.38,.09,.07,mp);let u=new ft(l.build(),e);u.castShadow=!0,a.add(u);let c=[-.28,.28].map(h=>{let f=new ft(new Uo(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:u,lamps:c,L:o}});return i.visible=!1,{group:i,update(r,a,l,o,u){i.visible=!!r,r&&r.forEach((c,h)=>{let f=s[h];f.root.position.set(c.x-a.x,c.y,c.z-a.z),f.root.rotation.y=c.yaw,f.arm.scale.x=(c.rw+.25)/f.L,f.pivot.rotation.z=-l*(Math.PI/2-.06);let p=Math.floor(u*2.5)%2;f.lamps[0].material=o&&p===0?t:n,f.lamps[1].material=o&&p===1?t:n})}}}function C_(){let t=()=>{let d=document.createElement("canvas");return d.width=1024,d.height=512,d},n=t(),s=t(),r=n.getContext("2d"),a=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let o=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,o);for(let d=0;d<1024;d+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(d,0,2,o);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,o-14,1024,14);let u=[.1,.36,.62,.88].map(d=>d*1024),c=(d,v,S,_)=>{let M=r.createLinearGradient(d,v,d+S*.3,v+_);M.addColorStop(0,"#5d7fae"),M.addColorStop(.6,"#9db7d6"),M.addColorStop(1,"#2f3f55"),r.fillStyle=M,r.fillRect(d,v,S,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(d+S*.2,v),r.lineTo(d+S*.38,v),r.lineTo(d+S*.1,v+_),r.lineTo(d-S*.08,v+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(d,v,S,_)};for(let d=0;d<u.length-1;d++){let v=u[d]+40,S=u[d+1]-40,_=3,M=(S-v)/_;for(let T=0;T<_;T++)r.fillStyle="#6b737c",r.fillRect(v+T*M+2,34,M-4,58),c(v+T*M+6,38,M-12,50)}for(let d of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(d+2,34,28,58),c(d+5,38,22,50);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,22,60,o-36),r.fillStyle="#7b828a",r.fillRect(d-1,22,2,o-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(d-30,22,60,o-36),c(d-24,34,20,46),c(d+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let h=0,f=176,p=256,g=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,p,g),r.fillStyle="#20262e",r.fillRect(h+14,f+44,p-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+p/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,p-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,p,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,p,7);for(let d of[h+40,h+p-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(d,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(d+(d<h+p/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+g-30,p,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",h+p/2,f+220),a.fillStyle="#111",a.fillRect(h,f,p,g),a.fillStyle="#ff9a2a",a.font=`800 18px ${l}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26);for(let d of[h+40,h+p-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(d,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=d=>{let v=new Hn(d);return v.colorSpace=qt,v.anisotropy=4,v},m=(d,v,S,_)=>({u0:d/1024,u1:(d+S)/1024,v0:1-(v+_)/512,v1:1-v/512});return{map:x(n),em:x(s),side:m(0,0,1024,o),sideR:{...m(0,0,1024,o),flip:!0},front:m(h,f,p,g),plain:m(342,202,28,28)}}function xp(){let i=C_(),e=Rh(new ln({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:jn})),t=new hn({uv:!0}),n=[1,1,1],s=re("#9aa1a9"),r=re("#3b4047"),a=re("#2a2d33"),l=19.5,o=.6,u=3,c=1.45,h=.95,f=4,p=u*l+(u-1)*o;for(let v=0;v<u;v++){let S=-p/2+l/2+v*(l+o),_=S-l/2,M=S+l/2;t.quad([_,h,c],[M,h,c],[M,f,c],[_,f,c],n,i.side),t.quad([M,h,-c],[_,h,-c],[_,f,-c],[M,f,-c],n,i.side);let T=v===u-1,R=v===0;t.quad([M,h,c],[M,h,-c],[M,f,-c],[M,f,c],T?n:re("#c9ced4"),T?i.front:i.plain),t.quad([_,h,-c],[_,h,c],[_,f,c],[_,f,-c],R?n:re("#c9ced4"),R?i.front:i.plain),t.box(_+.1,f,-c+.1,M-.1,f+.14,c-.1,s,null,{noBottom:!0});for(let b of[S-5.5,S+5.5])t.box(b-1.3,f+.14,-.8,b+1.3,f+.55,.8,re("#c4c9cf"),null,{noBottom:!0});t.box(_+2,.45,-c+.25,M-2,h,c-.25,a);for(let b of[S-7,S+7])t.box(b-1.3,.1,-1.2,b+1.3,.75,1.2,r);if(v===0){let b=S-3,E=f+.55;t.box(b-.6,f+.14,-.6,b+.6,f+.3,.6,r),t.rod([b-.5,f+.3,0],[b,E+.9,0],.03,.03,4,r),t.rod([b+.5,f+.3,0],[b,E+.9,0],.03,.03,4,r),t.rod([b,E+.9,-.85],[b,E+.9,.85],.03,.03,4,r)}}let g=new ft(t.build(),e);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let x=new Xt;x.add(g),x.visible=!1;let m={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:p},d={};return{group:x,st:m,start(v,S,_=16){Object.assign(m,{active:!0,sx:v,dir:S,speed:_,u:-S*290,ds:S>0?-2:2,cleared:!1}),x.visible=!0},update(v,S,_,M,T){if(!m.active)return;m.u+=m.dir*m.speed*v;let R=m.u-m.dir*m.length/2;if(!m.cleared&&(m.dir>0?R>T+1:R<-T-1)&&(m.cleared=!0),Math.abs(m.u)>330){m.active=!1,x.visible=!1;return}S.at(m.sx,d),x.position.set(d.x+d.fx*m.ds+d.rx*m.u-_.x,d.y+.34,d.z+d.fz*m.ds+d.rz*m.u-_.z),x.rotation.y=d.h+(m.dir>0?Math.PI:0),e.emissiveIntensity=.3+M*1.1}}}var P_='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',qs=2048,Ys=4096;function Nc(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var Mp=Nc(256,256);{let i=Mp.getContext("2d"),e=i.createImageData(256,256),t=Rn(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var Ph=class{constructor(){this.cA=Nc(qs,Ys),this.cE=Nc(qs/2,Ys/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,qs/2,Ys/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,qs,Ys),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Mp,"repeat")}add(e,t,n,s){if(this.x+t+4>qs&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Ys)throw new Error("atlas full at "+e);let a={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let o of[this.a,this.e])o.save(),o===this.e&&o.scale(.5,.5),o.translate(a.x,a.y),o.beginPath(),o.rect(0,0,t,n),o.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5;return this.cells[e]={u0:(a.x+l)/qs,u1:(a.x+t-l)/qs,v0:1-(a.y+n-l)/Ys,v1:1-(a.y+l)/Ys,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new Hn(n);return s.colorSpace=qt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Gn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function Mn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Jr(i,e,t,n,s,r){let a=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,o])=>a.addColorStop(l,o)),i.fillStyle=a,i.fillRect(e,t,n,s)}function Zr(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Jr(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,t,1.5)}Mn(i,e,t,n,.13)}function Xi(i,e,t,n,s,r=.13){let a=i.createLinearGradient(0,t,0,t+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(e,t,n,s)}function ue(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function $r(i,e,t,n,s,r,a="#d9dde2",l="rgba(40,45,60,0.55)"){ue(i,e-r,t-r,n+2*r,s+2*r,a),ue(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function qi(i,e,t,n,s,r,a=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),o=a?"#4f78b8":"#5f93d6",u=a?"#86a9d4":"#a6c8ec";l.addColorStop(0,o),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let c=e+n*r();i.beginPath(),i.moveTo(c,t),i.lineTo(c+n*.18,t),i.lineTo(c-n*.25,t+s),i.lineTo(c-n*.43,t+s),i.fill(),i.restore()}function vp(i,e,t,n,s,r="#efe6d2"){ue(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(e+a,t,1.5,s);Jr(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function Uc(i,e,t=800){i.font=`${t} ${e}px ${P_}`}function Et(i,e,t,n,s,r,a,l=800,o=null){Uc(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,Uc(i,u,l);i.textAlign="center",i.textBaseline="middle",o&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=o,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=a,i.fillText(e,t,n)}function Lc(i,e,t,n,s,r,a,l=800,o=null){let u=[...e],c=u.length,h=Math.min(r*1.05,(s-n)/c),f=Math.min(r,h*.95);Uc(i,f,l),i.textAlign="center",i.textBaseline="middle",u.forEach((p,g)=>{let x=n+(s-n-h*c)/2+h*(g+.5);o&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=o,i.strokeText(p,t,x)),i.fillStyle=a,i.fillText(p,t,x)})}function Zs(i,e,t,n,s,r,a,l=!0){if(ue(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Jr(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let o=e+n*.2*a();o<e+n-4;o+=n*(.18+a()*.3)){let u=Math.min(n*(.1+a()*.2),e+n-o),c=s*(.12+a()*.25);i.fillRect(o,t+s-c,u,c)}}i.restore()}function I_(i,e,t,n,s,r,a){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",ue(e,t,n,s,r,a),e.globalCompositeOperation="lighter",e.globalAlpha=.22,ue(e,t,n,s,r,a),e.globalCompositeOperation="multiply",e.globalAlpha=1,Jr(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var _p=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Dc=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],yp=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],L_=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function bp(){let i=new Ph,e=Rn(2024),t=240,n=(o,u,c,h,f,p,g=!1)=>{Zr(o,i,c,h,"#ece8e0",0);let x=Rn(p*31+(f?7:0)+5);if(p===0){let m=c*.14,d=h*.22,v=c*.72,S=h*.5;$r(o,m,d,v,S,5),qi(o,m,d,v/2,S,x),qi(o,m+v/2,d,v/2,S,x);let _=x()<.8?v*(.18+x()*.25):0;_&&vp(o,m+2,d+2,_,S-4,x()<.5?"#efe6d2":"#d9e4ea"),ue(o,m+v/2-2,d,4,S,"#cfd4da"),ue(o,m-8,d+S+5,v+16,6,"#d8d8d4"),Xi(o,m-4,d+S+11,8,60),Xi(o,m+v-4,d+S+11,8,60),f&&(Zs(u,m,d,v,S,g?"#e6eeff":"#ffcf8f",x),_&&ue(u,m+2,d+2,_,S-4,g?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),ue(u,m+v/2-2,d,4,S,"#000"))}else if(p===1){for(let m of[.12,.56]){let d=c*m,v=h*.28,S=c*.3,_=h*.36;$r(o,d,v,S,_,4),qi(o,d,v,S,_,x,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(d,v,S,_*.45),Xi(o,d,v+_+6,S,40,.1),f&&x()<.8&&Zs(u,d,v,S,_,x()<.5?"#ffd9a0":"#e8f0ff",x)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(c*.88,h*.2,9,0,7),o.fill()}else if(p===2){let m=c*.1,d=h*.12,v=c*.8,S=h*.84;$r(o,m,d,v,S,4),qi(o,m,d,v/2,S,x),qi(o,m+v/2,d,v/2,S,x);let _=v*(.2+x()*.3);vp(o,m+2,d+2,_,S-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),ue(o,m+v/2-2,d,4,S,"#cfd4da"),f&&(Zs(u,m,d,v,S,g?"#e6eeff":"#ffcb85",x),ue(u,m+2,d+2,_,S-4,g?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),ue(u,m+v/2-2,d,4,S,"#000"))}else if(p===3){Zr(o,i,c,h,"#dfe3e6",0);let m=h*.25,d=h*.55;qi(o,0,m,c,d,x,1);for(let v=0;v<=c;v+=c/4)ue(o,v-2,m,4,d,"#8d98a6");if(ue(o,0,m-4,c,4,"#8d98a6"),ue(o,0,m+d,c,5,"#7d8796"),f)for(let v=0;v<4;v++)x()<.7&&Zs(u,v*c/4+2,m,c/4-4,d,x()<.6?"#f2f6ff":"#ffe2b0",x)}else if(p===4){o.fillStyle="#6b4a35",o.fillRect(0,0,c,h);for(let _=0;_<h;_+=12)ue(o,0,_,c,2,"rgba(30,18,10,0.35)"),ue(o,0,_+2,c,1,"rgba(255,220,180,0.06)");Mn(o,i,c,h,.15);let m=c*.18,d=h*.25,v=c*.64,S=h*.45;ue(o,m-6,d-6,v+12,S+12,"#4a3020"),ue(o,m,d,v,S,"#efe4c8"),o.fillStyle="#5a3a26";for(let _=1;_<6;_++)o.fillRect(m+_*v/6-1.5,d,3,S);for(let _=1;_<3;_++)o.fillRect(m,d+_*S/3-1.5,v,3);if(f){Zs(u,m,d,v,S,"#ffc070",x,!1),u.fillStyle="#000";for(let _=1;_<6;_++)u.fillRect(m+_*v/6-1.5,d,3,S);for(let _=1;_<3;_++)u.fillRect(m,d+_*S/3-1.5,v,3)}}else if(p===5){ue(o,c*.08,0,7,h,"#bdbdb6"),ue(o,c*.08+5,0,2,h,"rgba(0,0,0,0.2)");let m=c*.55,d=h*.3,v=c*.22,S=h*.24;$r(o,m,d,v,S,3),ue(o,m,d,v,S,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(m,d,v,S/2),Xi(o,m,d+S+4,v,50,.12),ue(o,c*.22,h*.55,26,34,"#cfcfca"),ue(o,c*.22+4,h*.55+6,18,12,"#9aa2a8"),f&&Zs(u,m,d,v,S,g?"#eef2ff":"#fff0d8",x,!1)}else if(p===6){let m=c*.4,d=h*.35,v=c*.2,S=h*.28;$r(o,m,d,v,S,3),qi(o,m,d,v,S,x,1),Xi(o,m,d+S+4,v,70,.14),f&&Zs(u,m,d,v,S,g?"#e8efff":"#ffd9a0",x)}};for(let o=0;o<7;o++)i.add("win"+o,t,t,(u,c,h,f)=>n(u,c,h,f,!1,o)),i.add("win"+o+"L",t,t,(u,c,h,f)=>n(u,c,h,f,!0,o));for(let o of[0,2,5,6])i.add("win"+o+"C",t,t,(u,c,h,f)=>n(u,c,h,f,!0,o,!0));i.add("plain",t,t,(o,u,c,h)=>{Zr(o,i,c,h,"#ece8e0"),Xi(o,c*.3,0,12,h*.6,.06)}),i.add("concrete",t,t,(o,u,c,h)=>{Zr(o,i,c,h,"#d9d7d0",60);for(let f=0;f<6;f++)Xi(o,f*41%c,0,10,h*.5,.07)});let s=288,r=(o,u,c,h,f,p)=>{let g=Rn(p);if(Zr(o,i,c,h,"#e6e2da"),f==="glass"||f==="door"||f==="konbini"||f==="cafe"){let m=h*.22,d=c-12,v=h*.78-4;ue(o,6,m,d,v,f==="konbini"?"#f6f4ea":f==="cafe"?"#7a5a40":"#8a7a68");for(let _=m+v*.25;_<m+v;_+=v*.22){ue(o,6,_,d,3,"rgba(60,50,40,0.5)");for(let M=9;M<6+d-6;M+=6+g()*8)o.fillStyle=e.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(M,_-6-g()*10,4+g()*5,6+g()*10)}f==="konbini"&&ue(o,6,m+4,d,5,"#ffffff"),f==="door"&&(ue(o,c/2-30,m+18,60,24,"#fff"),Et(o,"\u55B6\u696D\u4E2D",c/2,m+30,54,18,"#c82828")),f==="glass"&&g()<.7&&(ue(o,16,m+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Et(o,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,m+44,40,16,"#c02020")),I_(o,u,6,m,d,v,f==="konbini"?"#e4eef8":f==="cafe"?"#f0a868":"#f2d2a6"),o.save(),o.globalAlpha=.35,qi(o,6,m,d,v,g),o.restore(),ue(o,6,m,d,4,"#4a4e57"),ue(u,6,m,d,4,"#000"),f==="door"&&(ue(o,c/2-2,m,4,v,"#4a4e57"),ue(u,c/2-2,m,4,v,"#000"),ue(o,c/2-14,m+v*.45,3,40,"#c0c4c8"),ue(o,c/2+11,m+v*.45,3,40,"#c0c4c8")),f==="cafe"&&(ue(o,c*.62,h-70,46,62,"#2c3a30"),ue(u,c*.62,h-70,46,62,"#000"),Et(o,"\u30E9\u30F3\u30C1",c*.62+23,h-50,40,13,"#fff",700))}else if(f==="shutter"){let m=h*.2,d=c-12,v=h*.8;ue(o,6,m,d,v,"#b8bcc0");for(let S=m;S<m+v;S+=7)ue(o,6,S,d,2,"rgba(60,64,72,0.35)"),ue(o,6,S+2,d,1,"rgba(255,255,255,0.35)");ue(o,6,m,d,10,"#8f949a"),Mn(o,i,c,h,.12),g()<.5&&(ue(o,c/2-40,m+v*.35,80,26,"#fff"),Et(o,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),c/2,m+v*.35+13,74,16,"#333",700))}else if(f==="noren"){ue(o,0,0,c,h,"#5b3c28");for(let _=0;_<c;_+=10)ue(o,_,h*.2,3,h*.8,"rgba(25,15,8,0.6)");Mn(o,i,c,h,.15);let x=c*.12,m=h*.24,d=c*.76,v=h*.34,S=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);ue(o,x,m,d,v,S);for(let _=1;_<3;_++)ue(o,x+d*_/3-1,m+v*.25,2,v*.75,"rgba(255,255,255,0.25)");Et(o,e.pick(L_),c/2,m+v*.55,d*.9,46,"#f5f0e6",800),ue(o,x,m,d,6,"#3a2a1c"),u.fillStyle="#ffae5c",u.fillRect(x,m+v,d,h-m-v),u.fillStyle="rgba(255,170,90,0.6)",u.fillRect(x,m,d,v),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c*.9,h*.36,13,19,0,0,7),o.fill(),Et(o,"\u9152",c*.9,h*.36,16,14,"#fff"),u.fillStyle="#ff6a3a",u.beginPath(),u.ellipse(c*.9,h*.36,13,19,0,0,7),u.fill()}else if(f==="house"){let x=c*.18,m=h*.3,d=c*.34,v=h*.7;ue(o,x-6,m-6,d+12,v+6,"#9a9a96"),ue(o,x,m,d,v,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),ue(o,x+d-14,m+v*.5,4,22,"#d8d0c0"),ue(o,x+6,m+10,d-12,v*.25,"rgba(255,255,255,0.18)"),ue(o,c*.62,h*.48,30,22,"#cfcfca"),ue(o,c*.62+6,h*.48+5,18,4,"#555");let S=c*.6,_=h*.22,M=c*.3,T=h*.2;$r(o,S,_,M,T,3),qi(o,S,_,M,T,g,1);for(let R=0;R<3;R++)o.fillStyle="#7b5a43",o.fillRect(c*.6+R*22,h-26,16,18),o.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(c*.6+R*22+8,h-32,11,0,7),o.fill();u.fillStyle="#ffd08a",u.beginPath(),u.arc(x+d+14,m+8,6,0,7),u.fill(),g()<.6&&(u.fillStyle="#ffcf8f",u.fillRect(S,_,M,T))}else if(f==="garage"){let m=h*.25,d=c-16,v=h*.75;ue(o,8,m,d,v,"#efefec");for(let S=m;S<m+v;S+=9)ue(o,8,S,d,1.5,"rgba(80,80,90,0.25)");Mn(o,i,c,h,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,u)=>{i.add("shop_"+o,t,s,(c,h,f,p)=>r(c,h,f,p,o,100+u)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",t,s,(c,h,f,p)=>r(c,h,f,p,o,200+u))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(u,c,h,f)=>{let[p,g]=Dc[o%Dc.length],x=_p[o*7%_p.length];ue(u,0,0,h,f,p),ue(u,0,0,h,5,"rgba(255,255,255,0.35)"),ue(u,0,f-6,h,6,"rgba(0,0,0,0.18)"),o%3===0&&(ue(u,12,12,f-24,f-24,g),Et(u,x[0],12+(f-24)/2,f/2,f-30,34,p)),Et(u,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g,900),Mn(u,i,h,f,.08),c.fillStyle=p==="#fff"||p==="#f5efe0"?"#d9d6cc":p,c.fillRect(0,0,h,f),c.globalAlpha=.9,Et(c,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g==="#fff"?"#ffffff":g,900),c.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(u,c,h,f)=>{let[p,g]=Dc[(o*3+1)%Dc.length],x=yp[o%yp.length];ue(u,0,0,h,f,p),u.strokeStyle="rgba(0,0,0,0.3)",u.lineWidth=4,u.strokeRect(2,2,h-4,f-4),Lc(u,x,h/2,12,f-12,56,g,900),Mn(u,i,h,f,.08),ue(c,0,0,h,f,p==="#fff"?"#e8e8e8":p),Lc(c,x,h/2,12,f-12,56,g==="#fff"?"#fff":g,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,u,c],h)=>i.add("bb"+h,512,240,(f,p,g,x)=>{ue(f,0,0,g,x,"#fbfaf5"),ue(f,0,0,g,x*.62,c),Et(f,o,g/2,x*.32,g*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Et(f,u,g/2,x*.8,g*.85,52,"#333",800),Mn(f,i,g,x,.08),ue(p,0,0,g,x,"#555"),p.globalAlpha=.85,ue(p,0,0,g,x*.62,c),Et(p,o,g/2,x*.32,g*.9,96,"#fff",900),p.globalAlpha=1})),i.add("konbini_band",480,72,(o,u,c,h)=>{ue(o,0,0,c,h,"#fbfbf7"),ue(o,0,h*.62,c,h*.14,"#2a9a4a"),ue(o,0,h*.76,c,h*.12,"#f08a24"),ue(o,0,h*.88,c,h*.12,"#2f6fd8"),Et(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900),u.fillStyle="#f3f6f0",u.fillRect(0,0,c,h),Et(u,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(u,c,h,f)=>{let p=["#d8352a","#2f6fd8","#f4f4f0"][o];ue(u,0,0,h,f,p),ue(u,8,10,h-16,f*.55,"#eef4f8");let g=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let x=0;x<4;x++)for(let m=0;m<6;m++){let d=14+m*17,v=18+x*30;u.fillStyle=g[(x*6+m+o)%g.length],u.fillRect(d,v,11,20),u.fillStyle="rgba(255,255,255,0.5)",u.fillRect(d+2,v+2,3,14),u.fillStyle="#2a2a2a",u.fillRect(d,v+23,11,3)}ue(u,10,f*.62,h-20,22,"#222"),ue(u,h-34,f*.66,14,22,"#bbb"),ue(u,14,f*.82,h-28,22,"#1b1b1b"),Et(u,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],h/2,f*.62+11,h-28,14,"#fff",700),Mn(u,i,h,f,.08),c.fillStyle="#f2f8ff",c.fillRect(8,10,h-16,f*.55);for(let x=0;x<4;x++)for(let m=0;m<6;m++)c.fillStyle=g[(x*6+m+o)%g.length],c.fillRect(14+m*17,18+x*30,11,20);c.fillStyle="#9fd0ff",c.fillRect(10,f*.62,h-20,22)});i.add("ac",128,88,(o,u,c,h)=>{ue(o,0,0,c,h,"#e9e9e4"),Jr(o,0,0,c,h,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(c*.4,h*.5,h*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let f=6;f<h*.36;f+=6)o.beginPath(),o.arc(c*.4,h*.5,f,0,7),o.stroke();for(let f=12;f<h-10;f+=6)ue(o,c*.78,f,c*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,u,c,h)=>{ue(o,0,0,c,h,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,c-6,h-6),Et(o,"\u54C1\u5DDD 580",c/2,16,c*.6,14,"#2f5a2f",700),Et(o,"\u3042 12-34",c/2,42,c*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(c-2,2),o.lineTo(c/2,h-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(c-10,7),o.lineTo(c/2,h-12),o.fill(),Et(o,"\u6B62\u307E\u308C",c/2,34,c*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(c/2,22),o.lineTo(c/2+22,50),o.lineTo(c/2+8,50),o.lineTo(c/2+8,88),o.lineTo(c/2-8,88),o.lineTo(c/2-8,50),o.lineTo(c/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(c/2,h/2,c/2-9,0,7),o.stroke(),Et(o,"30",c/2,h/2+2,c*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,u,c,h)=>{ue(o,0,0,c,h,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,c-6,h-6),Lc(o,"\u672C\u753A\u4E8C\u4E01\u76EE",c/2,10,h-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(u,c,h,f)=>{let p=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];ue(u,0,0,h,f,p),ue(u,4,4,h-8,f*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),Et(u,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],h/2,f*.25,h-12,18,"#fff",900);for(let g=0;g<4;g++)ue(u,8,f*.58+g*8,h-16-g%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,t,88,(u,c,h,f)=>{let p=["#e9e3d6","#dfe6ea","#efe2dc"][o];if(Zr(u,i,h,f,p),o===1)for(let g=10;g<h-6;g+=h/6)ue(u,g,10,h/6-8,f-20,"rgba(220,235,245,0.9)"),u.fillStyle="rgba(255,255,255,0.45)",u.fillRect(g,10,h/6-8,(f-20)*.4);else{ue(u,0,0,h,7,"rgba(255,255,255,0.4)");for(let g=h/3;g<h;g+=h/3)ue(u,g-1,0,2,f,"rgba(0,0,0,0.08)")}ue(u,0,f-6,h,6,"rgba(0,0,0,0.12)"),Xi(u,h*.3,f-6,10,10,.2)});i.add("kawara",256,256,(o,u,c,h)=>{ue(o,0,0,c,h,"#58617a");for(let f=0;f<h;f+=16)Jr(o,0,f,c,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let f=0;f<c;f+=20)ue(o,f,0,2,h,"rgba(0,0,0,0.18)");Mn(o,i,c,h,.12)}),i.add("wood",256,256,(o,u,c,h)=>{ue(o,0,0,c,h,"#6d4c37");for(let f=0;f<h;f+=14)ue(o,0,f,c,2,"rgba(25,15,8,0.4)"),ue(o,0,f+2,c,1,"rgba(255,220,180,0.07)");Mn(o,i,c,h,.16)}),i.add("block",256,128,(o,u,c,h)=>{ue(o,0,0,c,h,"#c9c7bf");for(let f=0;f<h;f+=32)for(let p=f/32%2?-32:0;p<c;p+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(p+1,f+1,62,30);for(let f=0;f<c;f+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(f+20,40,24,16);Mn(o,i,c,h,.15),Xi(o,0,0,c,40,.1)}),i.add("lantern",64,96,(o,u,c,h)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),o.fill();for(let f=16;f<h-12;f+=7)ue(o,4,f,c-8,1.5,"rgba(0,0,0,0.2)");ue(o,c/2-14,2,28,8,"#222"),ue(o,c/2-14,h-10,28,8,"#222"),Et(o,"\u796D",c/2,h/2,c*.6,28,"#fff",900),u.fillStyle="#ff6a35",u.beginPath(),u.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),u.fill()}),i.add("busstop",96,96,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.stroke(),Et(o,"\u30D0\u30B9\u505C",c/2,h/2,c*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>ue(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,u,c,h)=>{o.save(),o.translate(c/2,h/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(c/2-22,h/2-6,44,18),o.fillRect(c/2-16,h/2-16,18,12),o.fillRect(c/2+8,h/2-13,5,7),o.beginPath(),o.arc(c/2-12,h/2+15,5,0,7),o.arc(c/2+12,h/2+15,5,0,7),o.fill(),Et(o,"\u8E0F\u5207",c/2,h/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((o,u)=>i.add("bridge"+u,64,176,(c,h,f,p)=>{ue(c,0,0,f,p,"#b9b5ab"),Mn(c,i,f,p,.2),ue(c,6,6,f-12,p-12,"#a7a398"),Lc(c,o,f/2,14,p-14,34,"#3f3c37",800)})),i.add("signal",240,84,(o,u,c,h)=>{ue(o,0,0,c,h,"#4a4d52"),ue(o,0,0,c,5,"#5c6066"),Mn(o,i,c,h,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([f,p])=>{o.fillStyle="#26282c",o.beginPath(),o.arc(p,h/2,33,0,7),o.fill(),o.fillStyle=f,o.beginPath(),o.arc(p,h/2,27,0,7),o.fill()})}),i.add("ped_sig",64,128,(o,u,c,h)=>{ue(o,0,0,c,h,"#3d4045"),o.fillStyle="#5a1814",o.fillRect(8,8,c-16,h/2-12),o.fillStyle="#0d4f44",o.fillRect(8,h/2+4,c-16,h/2-12),o.fillStyle="rgba(255,255,255,0.18)",o.beginPath(),o.arc(c/2,h*.18,6,0,7),o.fill(),o.fillRect(c/2-5,h*.24,10,18)}),i.add("tomare",256,96,(o,u,c,h)=>{o.clearRect(0,0,c,h),o.fillStyle="rgba(244,244,238,0.012)",o.fillRect(0,0,c,h),Et(o,"\u6B62\u307E\u308C",c/2,h/2+4,c*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((o,u)=>i.add("hodokyo"+u,256,44,(c,h,f,p)=>{ue(c,0,0,f,p,"#1f4f96"),c.strokeStyle="#fff",c.lineWidth=3,c.strokeRect(4,4,f-8,p-8),Et(c,o,f/2,p/2+1,f*.85,28,"#fff",800)}));let l=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];l.forEach(([o,u,c],h)=>{let f=l[(h+3)%4][0],p=l[(h+1)%4][0];i.add("ekimei"+h,320,124,(g,x,m,d)=>{ue(g,0,0,m,d,"#3a3d42"),ue(g,4,4,m-8,d-8,"#f8f8f3"),Et(g,u,m/2,20,m*.5,15,"#2b2b2b",700),Et(g,o,m/2,52,m*.6,40,"#151515",900),Et(g,c,m/2,80,m*.5,12,"#555",600),ue(g,4,d-30,m-8,26,"#1f9a50"),g.fillStyle="#fff",Uc(g,12,700),g.textBaseline="middle",g.textAlign="left",g.fillText("\u2190 "+f,12,d-17),g.textAlign="right",g.fillText(p+" \u2192",m-12,d-17),Mn(g,i,m,d,.06),ue(x,4,4,m-8,d-8,"#8a8a84")}),i.add("ekiplate"+h,220,48,(g,x,m,d)=>{ue(g,0,0,m,d,"#4b3326"),Mn(g,i,m,d,.2),Et(g,o+"\u99C5",m/2,d/2+1,m*.8,30,"#f3ead8",800)})});for(let o of["l","r"])i.add("chev_"+o,96,120,(u,c,h,f)=>{ue(u,0,0,h,f,"#f4f4ef"),ue(u,4,4,h-8,f-8,"#1e5bb8"),u.fillStyle="#f8f8f4",u.beginPath();let p=o==="r"?1:-1,g=h/2,x=f/2;u.moveTo(g-p*26,x-40),u.lineTo(g+p*22,x),u.lineTo(g-p*26,x+40),u.lineTo(g-p*8,x+40),u.lineTo(g+p*40,x),u.lineTo(g-p*8,x-40),u.closePath(),u.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((o,u)=>i.add("tunnel"+u,360,80,(c,h,f,p)=>{ue(c,0,0,f,p,"#e9e7e0"),ue(c,4,4,f-8,p-8,"#24403b"),Mn(c,i,f,p,.08),Et(c,o,f/2,p*.42,f*.8,38,"#f4f2ea",800),Et(c,"L = 170 m",f/2,p*.8,f*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(o,u,c,h)=>{ue(o,0,0,c,h,"#f6f6f2"),o.fillStyle="#d42a22";for(let f=-20;f<h;f+=26)o.beginPath(),o.moveTo(4,f),o.lineTo(c/2,f+20),o.lineTo(c-4,f),o.lineTo(c-4,f+11),o.lineTo(c/2,f+31),o.lineTo(4,f+11),o.closePath(),o.fill();o.strokeStyle="#222",o.lineWidth=3,o.strokeRect(1.5,1.5,c-3,h-3)}),i.add("xing_plate",128,48,(o,u,c,h)=>{ue(o,0,0,c,h,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,c-6,h-6),Et(o,"\u8E0F\u5207\u6CE8\u610F",c/2,h/2,c*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,u,c,h)=>{o.clearRect(0,0,c,h),ue(o,0,0,c,7,"#e9ebee"),ue(o,0,6,c,2,"rgba(60,70,80,0.5)"),ue(o,0,h-6,c,6,"#d5d8dc");for(let f=3;f<c;f+=9)ue(o,f,7,3,h-13,"#e2e5e9"),ue(o,f+2,7,1,h-13,"rgba(70,80,90,0.45)")}),i}function Sp(i){let n=Nc(1024,2048),s=n.getContext("2d"),r=Rn(321),a={},l={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},o=(h,f,p)=>{let g=l[h],x=256,m=h==="pine",d=h==="sakura";s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let v=[[x,x,m?80:92]];for(let _=0;_<(m?10:14);_++){let M=r()*6.28,T=45+r()*120;v.push([x+Math.cos(M)*T,x+Math.sin(M)*T*(m?.42:.9),Math.min(34+r()*52,232-T)])}let S=d?2300:m?2600:2300;for(let _=0;_<S;_++){let M=v[Math.floor(r()*v.length)],T=r()*6.28,R=Math.sqrt(r())*M[2],b=M[0]+Math.cos(T)*R,E=M[1]+Math.sin(T)*R*(m?.45:1),A=R/M[2],P=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(A>.82?.5:0))));if(s.fillStyle=g[P],d){let L=7+r()*8;s.beginPath(),s.arc(b,E,L,0,7),s.fill(),r()<.25&&(s.fillStyle=g[4],s.beginPath(),s.arc(b-L*.3,E-L*.3,L*.4,0,7),s.fill())}else if(m)s.save(),s.translate(b,E),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(h==="momiji"){let L=8+r()*7;s.save(),s.translate(b,E),s.rotate(r()*6.28),s.beginPath();for(let D=0;D<10;D++){let w=D%2?L*.42:L,I=D/10*6.2832;s.lineTo(Math.cos(I)*w,Math.sin(I)*w)}s.closePath(),s.fill(),s.restore()}else if(h==="ginkgo"){let L=9+r()*7;s.save(),s.translate(b,E),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,L,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let L=9+r()*10;s.beginPath(),s.ellipse(b,E,L,L*.55,r()*6.28,0,7),s.fill()}}for(let _=0;_<90;_++){let M=r()*6.28,T=150+r()*85,R=x+Math.cos(M)*T,b=x+Math.sin(M)*T*(m?.45:.92);s.fillStyle=g[1+Math.floor(r()*4)],m?(s.save(),s.translate(R,b),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(R,b,d?6+r()*6:7+r()*6,0,7),s.fill())}if(d)for(let _=0;_<14;_++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let M=x+(r()-.5)*300,T=x+60+r()*120;s.beginPath(),s.moveTo(M,T),s.lineTo(M+(r()-.5)*40,T-20-r()*30),s.stroke()}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}},u=(h,f,p,g)=>{s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let x=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],m=g?120:170;for(let d=0;d<m;d++){let v=256+(r()-.5)*(g?330:380)*Math.sqrt(r()),S=150+r()*(g?230:300)*(1-Math.abs(v-256)/300),_=(v-256)*.35+(r()-.5)*90,M=9+r()*9,T=v+_,R=512-S,b=Math.min(4,Math.floor(r()*2.2+S/380*2.6)),E=s.createLinearGradient(0,512,0,R);E.addColorStop(0,x[0]),E.addColorStop(.6,x[Math.max(1,b-1)]),E.addColorStop(1,x[b]),s.fillStyle=E,s.beginPath(),s.moveTo(v-M/2,512),s.quadraticCurveTo(v-M/2+_*.3,512-S*.55,T,R),s.quadraticCurveTo(v+M/2+_*.3,512-S*.5,v+M/2,512),s.fill()}if(g)for(let d=0;d<16;d++){let v=110+r()*290,S=150+r()*200,_=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(v+(r()-.5)*20,512),s.quadraticCurveTo(v+(r()-.5)*30,(S+512)/2,v,S),s.stroke(),_<.55){s.fillStyle="#fbfaf2";for(let M=0;M<12;M++){let T=M/12*6.283;s.beginPath(),s.ellipse(v+Math.cos(T)*11,S+Math.sin(T)*11,9,4.5,T,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(v,S,8,0,7),s.fill()}else if(_<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(v,S,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(v-3,S-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let M=0;M<6;M++)s.beginPath(),s.arc(v+(r()-.5)*16,S+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512),o("momiji",0,1024),o("ginkgo",512,1024),u("grass",0,1536,!1),u("flowers",512,1536,!0);let c=new Hn(n);return c.colorSpace=qt,c.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:c,cells:a,tuftV:[0,1-1536/2048]}}var fn=[1,1,1],pe={pole:re("#b1b0a9"),metal:re("#8d9198"),black:re("#2a2b30"),yellow:re("#f2c230"),white:re("#f4f3ee"),trans:re("#a0a3a8"),lampPole:re("#727780"),lampHead:re("#dcdcd6"),trunk:re("#6a5444"),trunkDark:re("#4b3a33"),leaf:re("#86ba4c"),leafShade:re("#2c6640"),sakura:re("#ffd3e3"),sakuraShade:re("#de94b4"),pine:re("#55874c"),pineShade:re("#1d4632"),cedar:re("#41713e"),cedarShade:re("#1b3e2a"),roof:re("#bdbbb3"),parapet:re("#dcdad2"),pipe:re("#c4c4bf"),orange:re("#f07a22"),red:re("#d8352a"),vermilion:re("#e2482c"),concrete:re("#c9c7c0"),stone:re("#a8a69e"),terracotta:re("#b8653d"),rail:re("#eeeeea")},Zi=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(re),D_=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(re),Dh=null;function Ep(i){Dh=i}var Ni=i=>Dh.uv(i),aa=Ni,N_=(i,e)=>Dh.has(e+"2")&&i()<.5?e+"2":e;function Oc(i,e,t,n,s=0){let r=new Je().makeRotationY(s);r.setPosition(e,t,n);let a=new Je().multiplyMatrices(i,r);return a.groundY=i.groundY,a}var an=(i,e,t,n,s,r,a,l=fn)=>i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,Ni(a)),$i=(i,e,t,n,s,r,a,l=fn)=>i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,Ni(a)),Ji=(i,e,t,n,s,r,a,l=fn)=>i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,Ni(a)),Kr=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Ni(r):void 0),U_=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function wp(i){return U_.map(e=>new B(e[0],e[1],e[2]).applyMatrix4(i))}function Nh(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,pe.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?pe.black:pe.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,pe.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,pe.metal);let a=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of a)s.cyl(0,r-.53,u,.05,.035,.17,6,pe.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,pe.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,pe.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,pe.trans),s.box(-.06,7.2,.12,.06,7.35,.26,pe.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,pe.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,pe.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,pe.concrete);for(let u=2.4,c=0;u<r-2;u+=.45,c++)s.rod([0,u,0],[c%2?.3:-.3,u,0],.015,.015,3,pe.metal);return i.atlas.setM(e),an(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&an(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...a.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new B(u[0],u[1],u[2]).applyMatrix4(e))}var Fc=new B;function Js(i,e,t,n,s,r){i.lamps&&(Fc.set(t,n,s).applyMatrix4(e),i.lamps.push(Fc.x,Fc.y,Fc.z,r))}function Uh(i,e,t,n={}){let s=i.color;s.setM(e),Js(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,pe.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,pe.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,pe.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,pe.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,fn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function Ap(i,e,t=.04){let n=i.color;n.setM(e),Js(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,pe.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,pe.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,pe.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,fn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function la(i,e){let t=i.color;t.setM(e),Js(i,e,0,3.5,0,.9),t.cyl(0,0,0,.07,.06,3.2,8,re("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,re("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,re("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,fn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],fn,{u0:0,u1:1,v0:0,v1:1})}function Fh(i,e,t){let n=Math.floor(t()*3),s=[pe.red,re("#2f6fd8"),pe.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Cn(s,.8)),i.atlas.setM(e),an(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Ih(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,re("#e6e6e1")),i.atlas.setM(e),an(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function Rp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([re("#c8ccd2"),re("#c0392b"),re("#2c6fb7"),re("#2b2b2b"),re("#e8c84a"),re("#e98fb0")]);for(let a of[-.52,.52])for(let l=0;l<12;l++){let o=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([a+Math.cos(o)*.33,.34+Math.sin(o)*.33,0],[a+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,pe.black)}let r=(a,l)=>n.rod(a,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,pe.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,pe.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,pe.metal)}function Cp(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,pe.orange),t.cyl(0,.04,0,.16,.03,.68,10,pe.orange),t.cyl(0,.32,0,.115,.095,.12,10,pe.white,!1)}function Pp(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,pe.terracotta),i.leaf.setM(e),Yi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function vs(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,pe.metal),i.atlas.setM(e),n<0?Ji(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):$i(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function Oh(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?pe.white:pe.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,pe.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,pe.black),i.atlas.setM(e),t<0?Ji(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):$i(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function Ip(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,re("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,re("#f0a020"))}function Bh(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,pe.orange);let s=0,r=3.25,a=.42,l=14;for(let o=0;o<l;o++){let u=o/l*Math.PI*2,c=(o+1)/l*Math.PI*2,h=(f,p,g)=>[t*g,r+Math.sin(f)*p,s+Math.cos(f)*p-.25];Kr(n,h(0,0,-.02),h(t>0?c:u,a,-.02),h(t>0?u:c,a,-.02),pe.orange),Kr(n,h(0,0,-.035),h(t>0?c:u,a*.86,-.035),h(t>0?u:c,a*.86,-.035),re("#dfe9f2"))}}var zh=null;function Lp(i){zh=i}var Lh=1;function Dp(i){Lh=i}function Yi(i,e,t,n,s,r,a,l,o,u,c,h,f=0){let p=zh[a],g=1+(1-Lh)*.35;l=Math.max(2,Math.round(l*Lh));for(let x=0;x<l;x++){let m=o()*2-1,d=o()*2-1,v=o()*2-1;f&&(d=1.2+o());let S=Math.hypot(m,d,v)||1;m/=S,d/=S,v/=S;let _=-v,M=0,T=m;S=Math.hypot(_,T),S<.1&&(_=1,T=0,S=1),_/=S,T/=S;let R=d*T-v*M,b=v*_-m*T,E=m*M-d*_,A=Math.PI+(o()-.5)*.9,P=Math.cos(A),L=Math.sin(A),D=_*P+R*L,w=M*P+b*L,I=T*P+E*L,N=R*P-_*L,U=b*P-M*L,z=E*P-T*L,O=r*(1.3+o()*.45)*g/2,k=t+(o()-.5)*r*.6,H=n+(o()-.5)*r*(f?.15:.5),$=s+(o()-.5)*r*.6,le=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ne,X])=>[k+(D*Ne+N*X)*O,H+(w*Ne+U*X)*O*(f?.6:1),$+(I*Ne+z*X)*O]),ke=le.map(Ne=>{let X=Ne[0]-e[0],Z=Ne[1]-e[1],Ee=Ne[2]-e[2],Pe=Math.hypot(X,Z,Ee)||1;X/=Pe,Z/=Pe,Ee/=Pe;let Me=Ne[0]-t,Ze=Ne[1]-n,st=Ne[2]-s;return Pe=Math.hypot(Me,Ze,st)||1,[X*.7+Me/Pe*.3,Z*.7+Ze/Pe*.3+(f?.5:0),Ee*.7+st/Pe*.3]}),ye=le.map(Ne=>Jd(c,u,.45+.55*Math.max(0,Math.min(1,(Ne[1]-h[0])/(h[1]-h[0])))));i.leaf.card(le,ke,p,ye)}}function Np(i,e,t,n="grass",s=1){let r=zh[n],a=(.42+t()*.38)*s,l=a*1.2,o=t()*Math.PI,u=[0,1,0],c=[u,u,u,u],h=[.6,.64,.58],f=[1,1,1];i.leaf.setM(e);for(let p of[o,o+Math.PI/2]){let g=Math.cos(p)*l/2,x=Math.sin(p)*l/2;i.leaf.card([[-g,-.05,-x],[g,-.05,x],[g,a,x],[-g,a,-x]],c,r,[h,h,f,f])}}function F_(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,pe.trunk);for(let u=0;u<3;u++){let c=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(c)*1.1*n,s*.68,Math.sin(c)*1.1*n],.09*n,.05*n,5,pe.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],a=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],o=7+Math.floor(t()*3);for(let u=0;u<o;u++){let c=t()*6.28,h=(.6+t())*1.3*n;Yi(i,r,Math.cos(c)*h,s*(.62+t()*.3),Math.sin(c)*h,(1.1+t()*.6)*n,a,6,t,[1,1,1],[.55,.62,.7],l)}Yi(i,r,0,s*.98,0,1.4*n,a,7,t,[1,1,1],[.55,.62,.7],l)}function O_(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,pe.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+t()*.8,h=(2.2+t()*1.6)*n,f=[Math.cos(c)*h,s*(.62+t()*.18),Math.sin(c)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,pe.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,pe.trunkDark)}i.leaf.setM(e);let a=[0,s*.72,0],l=[s*.5,s*1.1],o=[.72,.62,.72];for(let u of r)for(let c=0;c<2;c++)Yi(i,a,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],o,l);Yi(i,a,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],o,l)}function B_(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,a=t.range(5,7.5)*n,l=[r*.4,a*.45,.2],o=[r,a*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,pe.trunkDark),s.rod(l,o,.15*n,.09*n,6,pe.trunkDark),i.leaf.setM(e);let u=[[o[0],o[1]+.3,o[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[o[0]+.9*n,o[1]-.6,.8,1.1]];for(let[c,h,f,p]of u)s.rod(c>l[0]?l:o,[c,h-.2,f],.07*n,.04*n,4,pe.trunkDark),Yi(i,[c,h-.8,f],c,h,f,p*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function z_(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,pe.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+t()*.8,h=(1.8+t()*1.4)*n,f=[Math.cos(c)*h,s*(.55+t()*.2),Math.sin(c)*h];i.color.rod([0,s*.38,0],f,.09*n,.04*n,5,pe.trunkDark),r.push(f)}i.leaf.setM(e);let a=[0,s*.7,0],l=[s*.45,s*1.1],o=[.62,.52,.56];for(let u of r)Yi(i,a,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],o,l);Yi(i,a,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],o,l)}function k_(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,pe.trunk),i.leaf.setM(e);let r=[0,s*.62,0],a=[s*.3,s*1.02],l=[.68,.6,.52];for(let o=0;o<7;o++){let u=s*(.34+o*.09),c=(2.1-o*.24)*n,h=t()*6.28;Yi(i,r,Math.cos(h)*c*.35,u,Math.sin(h)*c*.35,Math.max(.7,c)*1.05,"ginkgo",5,t,[1,1,1],l,a)}}function H_(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,a=(t()-.5)*.5;s.rod([0,0,0],[a,r,0],.13*n,.05*n,7,re("#eeece6"));for(let l=0;l<7;l++){let o=t.range(.4,r*.85),u=o/r;s.cyl(a*u,o,0,.135*n*(1-u*.6),.13*n*(1-u*.6),.05,7,re("#2b2b30"),!1)}for(let l=0;l<7;l++){let o=r*(.45+t()*.5),u=t()*6.28,c=(.8+t()*1.6)*n,h=o/r;s.rod([a*h,o,0],[a*h+Math.cos(u)*c,o+c*.9,Math.sin(u)*c],.035*n,.012*n,4,re("#8b7f78"))}}function V_(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,pe.trunkDark),i.foliage.setM(e);let r=re("#1d3a2c"),a=re("#eef2f8"),l=re("#d7e0ec");for(let o=0;o<4;o++){let u=s*(.16+o*.19),c=(1.9-o*.38)*n,h=s*.3;i.foliage.cyl(0,u,0,c,c*.3,h,9,r),i.foliage.cyl(0,u+h*.45,0,c*.72,.05,h*.62,9,o%2?a:l)}}function G_(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,pe.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,pe.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,pe.cedar)}var Up={broad:F_,sakura:O_,pine:B_,cedar:G_,maple:z_,ginkgo:k_,birch:H_,snowcedar:V_},Tp={};function Fp(i,e){let t=i+e,n=Tp[t];if(!n){let s={color:new hn,foliage:new hn,leaf:new hn({uv:!0})};Up[i](s,new Je,Rn(1e3+e*77+i.length*13),1),n=Tp[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function Op(){for(let i in Up)for(let e=0;e<4;e++)Fp(i,e)}function In(i,e,t,n,s=1){let r=Fp(t,Math.floor(n()*4)),a=e.clone().scale(new B(s,s,s));a.groundY=e.groundY,i.color.stamp(r.c,a),i.foliage.stamp(r.f,a),i.leaf.stamp(r.l,a)}var W_=new Set(["win0","win2","win5","win6"]),$s=(i,e,t)=>e<t?i+(e<t*.35&&W_.has(i)?"C":"L"):i;function ca(i,e,t,n,s,r,a){let l=Math.max(1,Math.round(t/3)),o=t/l;for(let u of[-1,1])for(let c=0;c<n.length-1;c++)for(let h=0;h<l;h++){let f=c>0&&r()<.3?$s("win6",r(),a):r()<.2?"win5":"plain";(u>0?$i:Ji)(i,u*e/2,h*o,(h+1)*o,n[c],n[c+1],f,s)}}function ua(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],pe.roof);let a=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+a,l,pe.parapet),i.box(-e/2,n,t-l,e/2,n+a,t,pe.parapet),i.box(-e/2,n,0,-e/2+l,n+a,t,pe.parapet),i.box(e/2-l,n,0,e/2,n+a,t,pe.parapet),s()<.4){let o=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[c,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(o+c-.05,n,u+h-.05,o+c+.05,n+1,u+h+.05,pe.metal);i.cyl(o,n+1,u,.85,.85,1.3,12,re("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,pe.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,pe.metal)}function Bp(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,pe.black);let r="vs"+Math.floor(s()*10);Ji(i.atlas,e-.065,-.88,-.12,t,n,r),$i(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,pe.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,pe.metal)}function Ki(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,pe.concrete,null,{noBottom:!0}),n.type){case"shop":return q_(i,e,t,n);case"apt":return Y_(i,e,t,n);case"office":return Z_(i,e,t,n);case"konbini":return $_(i,e,t,n);case"house":return J_(i,e,t,n);case"tower":return K_(i,e,t,n)}}var X_=new Set(["glass","door","cafe","noren"]);function q_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.6,f=3,p=h+(a-1)*f,g=Math.max(1,Math.round(s/3)),x=s/g,m=-s/2,d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let M=0;M<g;M++){let T=d[M%d.length];an(u,m+M*x,m+(M+1)*x,0,h,0,N_(t,"shop_"+T)),X_.has(T)&&Js(i,e,m+(M+.5)*x,1.9,-.8,.7)}let v=t.pick([0,0,1,5,0,1]),S=[0,h];for(let M=1;M<a;M++)S.push(h+M*f);for(let M=1;M<a;M++)for(let T=0;T<g;T++){let R=T%2===1&&t()<.3?5:v;an(u,m+T*x,m+(T+1)*x,S[M],S[M+1],0,$s("win"+R,t(),o),l)}ca(u,s,r,S,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],Cn(l,.8)),ua(c,s,r,p,t);let _=s*.94;if(c.box(-_/2,h-.8,-.3,_/2,h+.08,-.02,pe.black),an(u,-_/2,_/2,h-.8,h+.08,-.305,"hs"+Math.floor(t()*14)),t()<.55){let M=t.pick(D_),T=h-.85;c.quad([s/2-.2,T-.35,-1.1],[-s/2+.2,T-.35,-1.1],[-s/2+.2,T,-.02],[s/2-.2,T,-.02],M),c.quad([s/2-.2,T-.6,-1.1],[-s/2+.2,T-.6,-1.1],[-s/2+.2,T-.35,-1.1],[s/2-.2,T-.35,-1.1],Cn(M,.85))}if(a>=2&&t()<.65){let M=(t()<.5?1:-1)*(s/2-.35);Bp(i,M,h+.3,Math.min(p-.15,h+2.8),t)}for(let M=1;M<a;M++)if(t()<.4){let T=Math.floor(t()*g),R=m+T*x+.15,b=m+(T+1)*x-.15,E=S[M];c.box(R,E-.12,-.9,b,E,0,pe.parapet),an(u,R,b,E,E+1,-.9,"rail"),Ji(u,R,-.9,0,E,E+1,"rail"),$i(u,b,-.9,0,E,E+1,"rail"),t()<.45&&Gp(c,R+.1,b-.1,E+1.95,-.55,t),t()<.6&&Ih(i,e,(R+b)/2+.6,E,-.75)}else if(t()<.35){let T=Math.floor(t()*g);Ih(i,e,m+(T+.5)*x,S[M]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}c.cyl(m+.12,0,-.08,.05,.05,p,6,pe.pipe,!1),c.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,re("#d9d9d3")),a>=3&&t()<.18&&zp(i,s,p,r,t)}function zp(i,e,t,n,s){let r=Math.min(e*.85,7),a=r*.47,l=n*.3;for(let o of[-r*.35,r*.35])i.color.box(o-.06,t,l,o+.06,t+1.2+a,l+.12,pe.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+a,l+.3,pe.metal),an(i.atlas,-r/2,r/2,t+1.2,t+1.2+a,l+.115,"bb"+Math.floor(s()*4))}function Y_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.2,f=2.95,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3.2)),x=s/g,m=-s/2,d=[0,h];for(let _=1;_<a;_++)d.push(h+_*f);for(let _=0;_<g;_++)an(u,m+_*x,m+(_+1)*x,0,h,0,_===Math.floor(g/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),_===Math.floor(g/2)?fn:l);let v="bal"+Math.floor(t()*3),S=Cn(l,.97);for(let _=1;_<a;_++){let M=d[_];for(let T=0;T<g;T++)an(u,m+T*x,m+(T+1)*x,M,d[_+1],0,$s("win2",t(),o),l);c.box(m,M-.15,-1.3,-m,M,0,S),c.box(m,M,-1.3,-m,M+1.1,-1.18,S,null,{noBottom:!0});for(let T=0;T<g;T++)an(u,m+T*x,m+(T+1)*x,M,M+1.1,-1.305,v,l);for(let T=0;T<=g;T++)c.box(m+T*x-.05,M,-1.18,m+T*x+.05,M+2.4,0,Cn(l,.92));for(let T=0;T<g;T++){let R=t(),b=m+T*x+.2,E=m+(T+1)*x-.2;R<.34?Gp(c,b,E,M+2.02,-.98,t):R<.46&&ey(c,b+.25,Math.min(E-.25,b+1.9),M+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<g;T++)t()<.55&&(Ih(i,e,m+(T+.78)*x,M,-.55),i.atlas.setM(e),i.color.setM(e))}c.box(m,p-.15,-1.3,-m,p,0,S),ca(u,s,r,d,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],Cn(l,.8)),ua(c,s,r,p,t,!0)}function Z_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=4,f=3.4,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3)),x=s/g,m=-s/2,d=[0,h];for(let v=1;v<a;v++)d.push(h+v*f);for(let v=0;v<g;v++)an(u,m+v*x,m+(v+1)*x,0,h,0,v===1?"shop_door":"shop_glass");for(let v=1;v<a;v++)for(let S=0;S<g;S++)an(u,m+S*x,m+(S+1)*x,d[v],d[v+1],0,$s("win3",t(),o),l);ca(u,s,r,d,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],Cn(l,.8)),ua(c,s,r,p,t,!0),t()<.6&&Bp(i,(t()<.5?1:-1)*(s/2-.3),h+.4,Math.min(p-.3,h+4.5),t),t()<.3&&zp(i,s,p,r,t)}function $_(i,e,t,n){let{w:s,d:r}=n,a=i.atlas,l=i.color,o=4.4,u=-s/2,c=Math.max(3,Math.round(s/3)),h=s/c;for(let f=0;f<c;f++)an(a,u+f*h,u+(f+1)*h,0,3.4,0,"shop_konbini"),Js(i,e,u+(f+.5)*h,1.9,-.8,.8);l.box(u,3.4,-.35,-u,o,0,pe.white),an(a,u,-u,3.4,o,-.355,"konbini_band"),ca(a,s,r,[0,o],re("#f2f2ee"),t,0),ua(l,s,r,o,t)}function J_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=2.9,f=a*h,p=-s/2,g=t()<.5,x=Math.max(2,Math.round(s/3)),m=s/x,d=[];for(let E=0;E<=a;E++)d.push(E*h);let v=g?fn:l;for(let E=0;E<a;E++)for(let A=0;A<x;A++){let P=g?"win4":"win0";E===0&&A===0?P="shop_house":P=$s(P,t(),o),an(u,p+A*m,p+(A+1)*m,d[E],d[E+1],0,P,P==="shop_house"?fn:v)}ca(u,s,r,d,g?re("#9a7a62"):l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],Cn(l,.75));let S=!!n.snow,_=S?.75:.6,M=S?Math.min(3.4,r*.46):Math.min(2.4,r*.32),T=Ni(S?"white":"kawara"),R=S?re("#f3f5fa"):re("#c8ccd8");u.quad([s/2+_,f-.25,-_],[-s/2-_,f-.25,-_],[-s/2-_,f+M,r/2],[s/2+_,f+M,r/2],R,T),u.quad([-s/2-_,f-.25,r+_],[s/2+_,f-.25,r+_],[s/2+_,f+M,r/2],[-s/2-_,f+M,r/2],R,T);let b=g?re("#7a5a42"):l;if(Kr(c,[-s/2,f,0],[-s/2,f,r],[-s/2,f+M-.1,r/2],b),Kr(c,[s/2,f,r],[s/2,f,0],[s/2,f+M-.1,r/2],b),c.box(-s/2-_,f+M-.05,r/2-.15,s/2+_,f+M+.18,r/2+.15,S?re("#f6f7fb"):re("#3d4456")),S){c.box(-s/2-_-.05,f-.42,-_-.1,s/2+_+.05,f-.12,-_+.3,re("#eef1f7")),c.box(-s/2-_-.05,f-.42,r+_-.3,s/2+_+.05,f-.12,r+_+.1,re("#eef1f7"));for(let E=-s/2;E<s/2;E+=.45+t()*.5)c.cyl(E,f-.42-.35,-_+.02,0,.04,.35,4,re("#dfe8f3"),!1)}if(a>1){let E=h+.05;u.quad([s/2+.1,E-.3,-.75],[-s/2-.1,E-.3,-.75],[-s/2-.1,E+.05,0],[s/2+.1,E+.05,0],R,T)}if(n.fence){let E=-n.fence,A=1.2;for(let[P,L]of[[-s/2,-1],[.4,s/2]])c.box(P,0,E-.08,L,A,E+.08,pe.concrete),an(u,P,L,0,A,E-.085,"block")}}function K_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.4,f=a*h,p=Math.max(2,Math.round(s/6)),g=s/p,x=-s/2,m=t()<.5?"win3":"win2",d=[];for(let _=0;_<=a;_++)d.push(_*h);for(let _=0;_<a;_++)for(let M=0;M<p;M++)an(u,x+M*g,x+(M+1)*g,d[_],d[_+1],0,$s(m,t(),o),l);let v=Math.max(1,Math.round(r/6)),S=r/v;for(let _ of[-1,1])for(let M=0;M<a;M++)for(let T=0;T<v;T++)(_>0?$i:Ji)(u,_*s/2,T*S,(T+1)*S,d[M],d[M+1],$s(m,t(),o),l);ua(c,s,r,f,t,!0)}function kp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([re("#f2f2ee"),re("#c9cdd2"),re("#2b2f38"),re("#b33a32"),re("#9fc6c0"),re("#e7d9b4"),re("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,Cn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,re("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,pe.black)}function kh(i,e,t,n){let s=i.color,r=re("#8d9096"),a=re("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,o=-n+.62;s.box(-.14,5.08,l,.14,5.56,o,a);let u=t*.141;i.atlas.setM(e),(t>0?$i:Ji)(i.atlas,u,l,o,5.08,5.56,"signal");let c=t>0?o:l,h=t>0?-1:1;for(let p=0;p<3;p++){let g=c+h*(.2+p*.4);s.box(t>0?.14:-.36,5.47,g-.15,t>0?.36:-.14,5.5,g+.15,a)}let f=c+h*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,f-.11,t>0?.16:-.145,5.43,f+.11,fn)}function Hp(i,e,t,n){let s=i.color,r=re("#3d6ea8"),a=re("#e8eef2"),l=re("#c7c5bf"),o=5.35;s.setM(e),s.box(-1.1,o-.65,-t,1.1,o,t,r);for(let u of[-1.1,1])s.box(u,o,-t,u+.1,o+1.1,t,a),s.box(u-.02,o+1.1,-t,u+.12,o+1.18,t,r);i.atlas.setM(e),Ji(i.atlas,-1.105,-2.2,2.2,o-.62,o-.06,n),$i(i.atlas,1.105,-2.2,2.2,o-.62,o-.06,n),s.setM(e);for(let u of[-1,1]){let c=u*(t-1.65),h=u*(t-.15),f=Math.min(c,h),p=Math.max(c,h);s.box(-.45,.15,f+.3,.45,o-.65,p-.3,r);let g=20,x=(o-.15)/g;for(let m=0;m<g;m++)s.box(1.1+m*.3,.15,f,1.1+(m+1)*.3,o-(m+1)*x+.04,p,l);s.box(1.1,o-.1,f-.05,1.1+g*.3,o-.02,f+.05,r)}}function Vp(i,e,t,n,s,r,a){let l=i.color,o=1.22,u=3.55,c=6.7,h=re("#c8c5bd"),f=re("#ebe8de"),p=re("#7a5a42"),g=re("#5e4433"),x=re("#4d5468");l.setM(e),l.box(t,-1.4,u,n,o,c,h,null,{noBottom:!0}),l.box(t,o,u,n,o+.025,u+.32,f),l.box(t,o,u+.6,n,o+.04,u+.9,pe.yellow);let m=Math.sign(s-(t+n)/2),d=m>0?n:t,v=d+m*6.2,S=u+.9,_=c-.2,M=(O,k,H)=>[O,k,H];m>0?l.quad(M(v,.1,_),M(v,.1,S),M(d,o,S),M(d,o,_),h):l.quad(M(v,.1,S),M(v,.1,_),M(d,o,_),M(d,o,S),h);for(let O of[S,_]){let k=re("#9aa0a6");l.rod([v,.1+.9,O],[d,o+.9,O],.03,.03,5,k);for(let H=0;H<=3;H++){let $=v+(d-v)*H/3,le=.1+(o-.1)*H/3;l.box($-.03,le,O-.03,$+.03,le+.9,O+.03,k)}}i.atlas.setM(e);for(let O=t;O<n-.01;O+=3){let k=Math.min(n,O+3);i.atlas.quad([O,-.6,c+.004],[k,-.6,c+.004],[k,o,c+.004],[O,o,c+.004],re("#d8d4ca"),Ni("concrete"))}l.setM(e);for(let O=t+.4;O<n;O+=2)l.box(O-.05,o,c-.12,O+.05,o+1,c-.02,re("#8f949a"));for(let O of[.45,.95])l.box(t,o+O,c-.1,n,o+O+.06,c-.04,re("#8f949a"));let T=n-t,R=O=>m>0?n-T*O:t+T*O,b=R(.47),E=b-2.3,A=b+2.3,P=u+1.35,L=c-.25;l.box(E,o,L-.12,A,o+2.45,L,p);for(let O of[E,A-.12])l.box(O,o,P+.6,O+.12,o+2.45,L,g);for(let O of[E,A-.12])l.box(O,o,P,O+.12,o+2.45,P+.12,g);l.quad([A+.4,o+2.5,P-.45],[E-.4,o+2.5,P-.45],[E-.4,o+2.85,L+.35],[A+.4,o+2.85,L+.35],x),l.quad([E-.4,o+2.42,P-.45],[A+.4,o+2.42,P-.45],[A+.4,o+2.77,L+.35],[E-.4,o+2.77,L+.35],re("#3a3f50")),l.box(E+.3,o+.42,L-.55,A-.3,o+.48,L-.15,re("#8a6a4a"));for(let O of[E+.4,A-.5])l.box(O,o,L-.5,O+.08,o+.42,L-.2,pe.metal);i.atlas.setM(e),i.atlas.quad([b-1.1,o+1.55,L+.005],[b+1.1,o+1.55,L+.005],[b+1.1,o+2.03,L+.005],[b-1.1,o+2.03,L+.005],fn,Ni("ekiplate"+r));let D=R(.2),w=u+1.6,I=1.25,N=o+1.25,U=N+.95;l.setM(e);for(let O of[D-I+.12,D+I-.12])l.cyl(O,o,w,.05,.05,U-o+.05,8,re("#6b7078"));l.box(D-I,N-.03,w-.03,D+I,U+.03,w+.03,re("#3a3d42")),i.atlas.setM(e),i.atlas.quad([D-I,N,w+.035],[D+I,N,w+.035],[D+I,U,w+.035],[D-I,U,w+.035],fn,Ni("ekimei"+r)),i.atlas.quad([D+I,N,w-.035],[D-I,N,w-.035],[D-I,U,w-.035],[D+I,U,w-.035],fn,Ni("ekimei"+r)),l.setM(e);let z=b-m*4.2;l.box(z-.9,o+.42,c-1.25,z+.9,o+.47,c-.85,re("#3b6ea8")),l.box(z-.9,o+.47,c-.88,z+.9,o+.9,c-.83,re("#3b6ea8"));for(let O of[z-.75,z+.7])l.box(O,o,c-1.2,O+.06,o+.42,c-.9,pe.metal);for(let O=t+3;O<n-1;O+=9)la(i,Oc(e,O,o,c-.45))}var j_=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(re),Q_=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(re);function Gp(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,pe.metal);let a=e+.12+r()*.2;for(;a<t-.35;){let l=.28+r()*.34,o=.36+r()*.42,u=r.pick(j_),c=s+(r()-.5)*.06;i.quad([a+l,n-o,c],[a,n-o,c],[a,n-.02,c],[a+l,n-.02,c],u),i.quad([a,n-o,c+.01],[a+l,n-o,c+.01],[a+l,n-.02,c+.01],[a,n-.02,c+.01],Cn(u,.85)),r()<.4&&i.box(a+l*.45,n-.02,c-.02,a+l*.55,n+.06,c+.02,re("#d8d8d0")),a+=l+.06+r()*.22}}function ey(i,e,t,n,s,r){let a=r.pick(Q_),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,a),i.box(e,n-.72,s-l,t,n+.09,s-.005,a),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,Cn(a,.86))}function Wp(i,e){let t=i.color,n=re("#a19f97"),s=re("#6b4a35"),r=re("#4f4a44"),a=re("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,re("#8d8b84"));for(let l of[-.52,.48])for(let o of[-.36,.32])t.box(l,.32,o,l+.05,1.5,o+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,Cn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,a,!1),t.cyl(0,.93,0,.115,.03,.1,8,a);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,re("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,re("#5b8d3d"))}function Xp(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?pe.black:pe.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,pe.black),t.box(-.5,2.55,-.06,.5,2.95,.02,pe.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,pe.black);t.box(-.78,-.9,-.34,.3,0,.34,pe.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,re("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,pe.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new Je().multiplyMatrices(e,new Je().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?pe.black:pe.yellow)}t.setM(e),i.atlas.setM(e),an(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function qp(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,pe.stone),t.cyl(0,.25,0,.14,.12,.95,8,pe.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,pe.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,Cn(pe.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,Cn(pe.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,fn),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,fn)}function Hh(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,pe.vermilion),s.cyl(0,0,r,.38,.38,.5,12,pe.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,pe.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,pe.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,pe.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,pe.vermilion)}function Yp(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,re("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,re("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,re("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,re("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,pe.metal),n.box(1.1,0,.3,1.2,.42,.55,pe.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,pe.metal),i.atlas.setM(e),Ji(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),$i(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function Zp(i,e,t,n=1){let s=i.color;s.setM(e);let r=Cn(pe.concrete,.85+t()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],l=.55*n;for(let o of a)s.rod([0,l,0],[o[0]*.95*n,l+o[1]*.95*n,o[2]*.95*n],.42*n,.26*n,7,r)}function $p(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,re("#8f8a80"),re("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,pe.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,pe.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,pe.black),t.cyl(0,18.6,0,1,.25,1.2,12,pe.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,fn)}function Jp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([re("#f4f4f0"),re("#3b6ea5"),re("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Kr(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Kr(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,pe.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,pe.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,re("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,pe.metal)}function Kp(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,pe.stone),n.box(-.55,.5,.9,.55,1.5,1.8,re("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],re("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],re("#4d5468")),Hh(i,Oc(e,0,0,-.3,Math.PI/2),.75,2.2)}var Wt=60,jp=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],Qp=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Vh=32,ha=[.025,.026,.032],e0=[.05,.05,.065],ji=(i,e)=>(i%e+e)%e,_s=(i,e)=>{let t=Xr(i);return!!t&&Math.abs(i-t.s)<e},Gh=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Mi=(i,e)=>{let t=yi(i);return!!t&&Math.abs(i-t.s)<e},Qn=(i,e)=>{let t=Di(i);return!!t&&Math.abs(i-t.s)<e},Wh=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let a=0;a<t;a++){let l=n(r,a);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let a=0;a<t-1;a++){let l=s+r*t+a,o=l+1,u=l+t,c=u+1;this.I.push(l,o,u,o,c,u)}}gridN(e,t,n,s=0,r=0){let a=t+s+r,l=new Array(e*a);for(let u=0;u<e;u++)for(let c=0;c<a;c++)l[u*a+c]=n(u,c-s);let o=(u,c)=>l[Math.min(e-1,Math.max(0,u))*a+Math.min(a-1,Math.max(0,c))];for(let u=0;u<e;u++)for(let c=s;c<s+t;c++){let h=o(u,c-1),f=o(u,c+1),p=o(u-1,c),g=o(u+1,c),x=l[u*a+c],m=f[0]-h[0],d=f[1]-h[1],v=f[2]-h[2],S=g[0]-p[0],_=g[1]-p[1],M=g[2]-p[2],T=d*M-v*_,R=v*S-m*M,b=m*_-d*S;R<0&&(T=-T,R=-R,b=-b);let E=Math.hypot(T,R,b)||1;x[3]=T/E,x[4]=R/E,x[5]=b/E}this.grid(e,t,(u,c)=>l[u*a+c+s])}build(){let e=new Mt;return e.setAttribute("position",new Qe(this.P,3)),e.setAttribute("normal",new Qe(this.N,3)),e.setAttribute("su",new Qe(this.SU,2)),e.setAttribute("zw",new Qe(this.ZW,4)),e.setAttribute("rk",new Qe(this.RK,2)),e.setAttribute("rv",new Qe(this.RV,1)),e.setAttribute("zs",new Qe(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},Bc=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Xt,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Wt),s=Math.floor((e+this.ahead)/Wt);for(let[a,l]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(l),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let a=this.reveal[0];if(a){let l=a.pending.shift();l&&a.group.add(l),a.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let o=Math.max(0,n);o<=s;o++)if(!this.chunks.has(o)){l=o;break}if(l<0)return 0;l*Wt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let a=this.job.it.next();if(a.done){let l=a.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,a)=>{let l=a*Wt-e,o=r.group.children;for(let u=0;u<o.length;u++){let c=o[u],h=c.userData.detail;h&&(c.visible=h==="leaf"?l<s:l<t||n&&h==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Wt,s=n+Wt,r=t.at(n),a=r.x,l=r.z,o=Rn(Math.floor(Kn(e,777)*4294967295)),u={atlas:new hn({uv:!0,ao:!0}),color:new hn({ao:!0}),foliage:new hn,leaf:new hn({uv:!0}),lamp:new hn({color:!1}),sig:new hn({color:!1}),sodium:new hn({color:!1}),decal:new hn({uv:!0}),pool:new hn({uv:!0,color:!1})},c=new Wh,h=[],f=[];u.lamps=[];let p={},g={},x=(A,P)=>{t.at(A,g);let L=Pn(A,"rw");return g.y+Yr(A,P,g.y,L)},m=A=>{let P=Dt(A);return[P.city,P.sakura,P.coast,P.country,P.snow]},d=(A,P,L)=>(t.at(A,p),[p.x+p.rx*P-a,L,p.z+p.rz*P-l]),v=(A,P,L,D=0,w=!0)=>{t.at(A,p);let I=p.h-Math.PI/2+(w&&P<0?Math.PI:0)+D,N=new Je().makeRotationY(I);return N.setPosition(p.x+p.rx*P-a,L,p.z+p.rz*P-l),N.groundY=L,N},S=(A,P,L=0,D=0,w=!0)=>{let I=x(A,P),N=v(A,P,I+L,D,w);return N.groundY=I,N},_=A=>t.at(A,g).y,M=A=>Pn(A,"rw"),T=A=>{let P=Dt(A);return P.city+P.sakura>.5?P.city>=P.sakura?3:2.6:0};{let A=Di(n+Wt/2),P=!!A&&A.s>n-40&&A.s<s+40,L=P?61:21,D=M(n+Wt/2),w=(()=>{let $=[0,...jp].map(le=>le);return Qp.forEach(le=>$.push(le-D)),$})(),I=[...w.slice().reverse().map(H=>-H),...w],N=I.length,U=Array.from({length:L},(H,$)=>n+$/(L-1)*Wt);{let H=yi(n+Wt/2);if(H)for(let $ of[H.s-Kt,H.s+Kt])$>n+.1&&$<s-.1&&U.push($-.03,$+.03)}U.sort((H,$)=>H-$);let z=N/2,O=U.map(H=>(t.at(H,p),{s:H,f:{...p},rw:M(H),w:m(H),rb:P?np(H):0})),k=Math.round(z/2);for(let[H,$,le,ke]of[[0,k,0,1],[k-1,z,1,0],[z,z+k+1,0,1],[z+k,N,1,0]])c.gridN(O.length,$-H,(ye,Ne)=>{let X=O[ye],Z=X.f,Ee=H+Ne,Pe=I[Ee],Me=Pe<0||Pe===0&&Ee<z?Pe-X.rw:Pe+X.rw,Ze=Z.y+Yr(X.s,Me,Z.y,X.rw),st=Math.abs(Me)>X.rw+.98?Math.min(1,Ec/.5):0;return[Z.x+Z.rx*Me-a,Ze,Z.z+Z.rz*Me-l,0,1,0,ji(X.s,xs),Me,X.w[0],X.w[1],X.w[2],X.w[3],X.rw,0,X.rb>0?X.rb:-st,X.w[4]]},le,ke),yield}yield,c.grid(31,2,(P,L)=>{let D=n+P/30*Wt,w=M(D),I=L?w:-w;t.at(D,p);let N=p.y,U=(_(D+1)-_(D-1))/2,z=-U*p.fx,O=1,k=-U*p.fz,H=Math.hypot(z,O,k),$=m(D);return[p.x+p.rx*I-a,N,p.z+p.rz*I-l,z/H,O/H,k/H,ji(D,xs),I,$[0],$[1],$[2],$[3],w,1,0,$[4]]});{let A=[];for(let D=0;D<=30;D++){let w=n+D/30*Wt;A.push({s:w,sw:T(w)})}let P=[],L=null;for(let D of A)D.sw>0?(L||(L=[],P.push(L)),L.push(D)):L=null;for(let D of P)if(!(D.length<2))for(let w of[-1,1])c.grid(D.length,2,(I,N)=>{let{s:U,sw:z}=D[I],O=M(U),k=w*(N===(w>0?0:1)?O:O+z);t.at(U,p);let H=m(U);return[p.x+p.rx*k-a,p.y+.15,p.z+p.rz*k-l,0,1,0,ji(U,xs),k,H[0],H[1],H[2],H[3],O,2,0,H[4]]}),c.grid(D.length,2,(I,N)=>{let{s:U}=D[I],z=M(U),O=w*z,k=w>0?N:1-N;t.at(U,p);let H=m(U);return[p.x+p.rx*O-a,p.y+(k?.15:0),p.z+p.rz*O-l,-w*p.rx,0,-w*p.rz,ji(U,xs),O,H[0],H[1],H[2],H[3],z,3,0,H[4]]})}yield,yield*this.placePoles(e,n,s,o,u,v,x,d,_,M);{let A=Math.ceil((n-Gs)/Vs),P=Wr(A);P<s&&ia(P)&&(yield*this.placeCrossing(u,c,P,v,_,M,x,T,a,l));let L=Math.ceil((n-qr)/Ws),D=Th(L);D<s&&Eh(D)&&(yield*this.placeRiver(u,c,D,v,_,M,x,T,a,l,o,f));let w=yi(n+Wt/2);w&&w.s+$t>n&&w.s-$t<s&&(yield*this.placeTunnel(u,c,w,n,s,v,S,x,M,a,l,o))}yield;for(let A=n;A<s;A+=4){let P=Zt(A);(P==="coast"&&Dt(A).coast>.45||P==="mountain"&&Dt(A).mountain>.45)&&!Mi(A+2,$t+4)&&this.guardrail(u,A,Math.min(A+4,s),d,_,M)}yield*this.placeCity(u,o,n,s,v,S,_,M,T,x,c,a,l),yield*this.placeSakura(u,o,n,s,v,S,_,M,x),this.placeCoast(u,o,n,s,v,S,_,M,x,h,d),yield,yield*this.placeCountry(u,o,n,s,v,S,_,M,x),yield*this.placeMountain(u,o,n,s,v,S,_,M,x),yield*this.placeSnow(u,o,n,s,v,S,_,M,x),yield*this.placeVerge(u,o,n,s,v,x,M),yield;let R=new Xt,b=(A,P,L,D,w=0,I)=>{if(!A)return null;let N=new ft(A,P);return N.castShadow=L,N.receiveShadow=D,N.renderOrder=w,I&&(N.userData.detail=I),R.add(N),N},E=new Set;for(let A of[n,n+20,n+40,s]){let P=Gr(A);E.add(P.a),P.t>0&&E.add(P.b)}b(c.build(),oa([...E]),!1,!0),yield,b(u.atlas.build(),this.M.atlas,!0,!0),yield;{let A=b(u.color.build(),this.M.color,!0,!0);A&&(A.customDepthMaterial=Pc)}if(yield,b(u.foliage.build(),this.M.foliage,!0,!0),b(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,b(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),b(u.sig.build(),this.M.sig,!1,!1,0,"small"),b(u.sodium.build(),this.M.sodium,!1,!1),b(u.decal.build(),this.M.decal,!1,!0,1,"small"),b(u.pool.build(),this.M.pool,!1,!1,2,"light"),h.length){let A=new Mt,P=[],L=[],D=[];h.forEach((w,I)=>{for(let N of w)P.push(N[0],N[1],N[2]),L.push(N[3],N[4]);if(I>0){let N=(I-1)*2;D.push(N,N+2,N+1,N+1,N+2,N+3)}}),A.setAttribute("position",new Qe(P,3)),A.setAttribute("su",new Qe(L,2)),A.setIndex(D),A.computeBoundingSphere(),b(A,this.foamMat,!1,!1,1)}for(let A of f)b(A,this.riverMat,!1,!0);return R.position.set(a-this.origin.x,0,l-this.origin.z),{group:R,ox:a,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Vh+6,n=Zt(t);if(n==="sakura"||_s(t,6)||Qn(t,34)||Mi(t,$t+12))return null;let s=Pn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,a,l,o,u,c){let h=Math.ceil((t-6)/Vh),f=Math.floor((n-6-.001)/Vh);for(let p=h;p<=f;p++){let g=this.poleSpec(p);if(!g)continue;let x=g.z==="city"?u(g.s)+.15:l(g.s,g.u),m=a(g.s,g.u,x),d=Rn(Math.floor(Kn(p,31)*4294967295)),v=Nh(r,m,d,{trans:d()<.45});g.z==="city"&&p%2===0&&Ap(r,m,-.11),p%2&&(yield);let S=this.poleSpec(p+1);if(S){let _=S.z==="city"?u(S.s)+.15:l(S.s,S.u),M=wp(a(S.s,S.u,_));r.color.setM(new Je);let T=[];for(let R=0;R<v.length;R++){let b=v[R],E=M[R],A=.35+d()*.4+(R>=7?.3:0);T.push(A),r.color.wire([b.x,b.y,b.z],[E.x,E.y,E.z],A,R>=7?.022:.015,ha,10)}if(g.z!=="coast"&&d()<.38){let R=Math.floor(d()*4),b=v[R],E=M[R],A=1+Math.floor(d()*4),P=.18+d()*.5;for(let L=0;L<A;L++){let D=Math.min(.92,P+L*(.018+d()*.025)),w=b.x+(E.x-b.x)*D,I=b.z+(E.z-b.z)*D,N=b.y+(E.y-b.y)*D-T[R]*4*D*(1-D);r.color.box(w-.07,N+.015,I-.07,w+.07,N+.19,I+.07,e0),r.color.box(w-.045,N+.19,I-.045,w+.045,N+.27,I+.045,e0)}}}if(g.z==="city"){r.color.setM(new Je);let _=1+Math.floor(d()*3);for(let M=0;M<_;M++){let T=v[7+M%2],R=(d()-.5)*14,b=c(g.s+R),E=d()<.55,A=E?-(b+3.15):b+3.15,P=o(g.s+R,A,u(g.s+R)+5.2+d()*2.5);r.color.wire([T.x,T.y,T.z],P,.25+d()*.4,.012,ha,8)}}}}*intersection(e,t,n,s,r,a,l,o,u,c,h){let f=this.path.at(n,{}),p=a(n),g=l(n),x=o(n)||3,m=n-.5,d=Dt(n),v=[d.city,d.sakura,d.coast,d.country],S=(M,T,R)=>[f.x+f.fx*(M-.5)+f.rx*T-c,R,f.z+f.fz*(M-.5)+f.rz*T-h],_=g+x+.15;for(let M of[-1,1]){let T=M*(g+x),R=M*80;u.grid(21,2,(P,L)=>{let D=T+(R-T)*P/20,w=(L?-3:3)*M,I=S(w,D,p+.165);return[I[0],I[1],I[2],0,1,0,w*M,D,v[0],v[1],v[2],v[3],g,10]});{let P=M*(g+x+3.2),L=-M*1.35,D=1.15,w=.42,I=(N,U)=>S(L+M*N,P-M*U,p+.18);e.decal.setM(new Je),e.decal.quad(I(-D,-w),I(D,-w),I(D,w),I(-D,w),[1,1,1],aa("tomare"))}for(let P of[-1,1]){let L=_+15+t()*3;for(;L<52;){let D=t.range(5.5,8.5),w=M*(L+D/2),I=t(),N=r(m+P*3.3,w,p+.14,P>0?Math.PI/2:-Math.PI/2,!1);Ki(e,N,t,{type:I<.5?"house":"shop",w:D,d:t.range(7,10),floors:I<.5?2:t.int(2,3),tint:t.pick(Zi),litP:.45,fence:0}),L+=D+t.range(.2,1.2),yield}yield}let b=[30,54].map(P=>r(m+2.8,M*P,p+.15,-Math.PI/2,!1)),E=Rn(Math.floor(Kn(s,M>0?71:73)*4294967295)),A=b.map(P=>Nh(e,P,E,{trans:E()<.4}));e.color.setM(new Je);for(let P=0;P<7;P++){let L=A[0][P],D=A[1][P];e.color.wire([L.x,L.y,L.z],[D.x,D.y,D.z],.3+E()*.4,.014,ha,10)}}kh(e,r(n-9,-(g+.55),p+.15,0,!0),1,g+.55-1.6),kh(e,r(n+8,g+.55,p+.15,0,!0),1,g+.55-1.6),s%3===1&&Hp(e,r(n+15,0,p,0,!1),g+x+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,a,l,o,u,c){let h=this.path.at(n,{}),f=h.y,p=a(n),g=o(n),x=p+g+.2,m=150,d=f+.18,v=Dt(n),S=[v.city,v.sakura,v.coast,v.country],_=(I,N,U)=>[h.x+h.fx*I+h.rx*N-u,U,h.z+h.fz*I+h.rz*N-c],M=[7.6,4.7,-4.7,-7.6];for(let[I,N]of[[-m,-x],[x,m]])t.grid(25,M.length,(z,O)=>{let k=I+(N-I)*z/24,H=M[O],le=Math.abs(H)<5?d:Math.min(d-.05,l(n+H,k)-.03),ke=_(H,k,le);return[ke[0],ke[1],ke[2],0,1,0,H,k,S[0],S[1],S[2],S[3],p,5]});let T=(I,N,U)=>t.grid(2,2,(z,O)=>{let k=z?N:I,H=O?-3.3:3.3,$=_(H,k,U);return[$[0],$[1],$[2],0,1,0,H,k,S[0],S[1],S[2],S[3],p,6]});T(-p,p,f+.03),g>0&&(T(-x,-p,f+.165),T(p,x,f+.165));let R=(I,N,U,z)=>t.grid(2,2,(O,k)=>{let H=O?z:U,$=k?N:I,le=_($,H,f+.025);return[le[0],le[1],le[2],0,1,0,$,H,S[0],S[1],S[2],S[3],p,7]});R(-7.15,-7.6,-p+.3,-.12),R(7.6,7.15,.12,p-.3),yield;let b=s(n,0,f,-Math.PI/2,!1),E=e.color;E.setM(b);let A=[.42,.4,.38],P=[.3,.29,.28],L=[.55,.57,.6];for(let I of[-2,2])for(let N of[-.5335,.5335]){let U=-(I+N);for(let[z,O]of[[-m,-x],[x,m]])E.box(z,.26,U-.035,O,.34,U+.035,A);E.box(-x,0,U-.035,x,.04,U+.035,P)}let D=[-146,-104,-64,-26,26,64,104,146];for(let I of D){for(let N of[-4.95,4.95])E.box(I-.12,.18,N-.12,I+.12,7.4,N+.12,L);E.box(I-.1,6.95,-5.15,I+.1,7.2,5.15,L);for(let N of[-2,2])E.box(I-.04,6.3,-N-.04,I+.04,6.95,-N+.04,L)}for(let I of[-2,2])for(let N=0;N<D.length-1;N++)E.wire([D[N],5.35,-I],[D[N+1],5.35,-I],.05,.011,ha,6),E.wire([D[N],6.4,-I],[D[N+1],6.4,-I],.45,.011,ha,8);yield;let w=Math.round((n-Gs)/Vs);if(v.country>.9&&Kn(w,17)<.7){let I=Kn(w,19)<.5?-1:1,N=I>0?p+9:-(p+9+46),U=I>0?p+9+46:-(p+9);Vp(e,b,N,U,I*(p+9),Math.abs(w)%4,Rn(Math.floor(Kn(w,23)*4294967295))),E.setM(b)}yield;for(let I of Ic(this.path,n)){let N=new Je().makeRotationY(I.yaw);N.setPosition(I.x-u,I.y,I.z-c),Xp(e,N)}vs(e,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85),vs(e,s(n+70,a(n+70)+.6,r(n+70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n,{}),g=p.y,x=a(n),m=o(n),d=Dt(n),v=[d.city,d.sakura,d.coast,d.country],S=d.sakura>.5,_=222,M=x+m+.5,T=g-sa,R=(w,I,N)=>[p.x+p.fx*w+p.rx*I-u,N,p.z+p.fz*w+p.rz*I-c];{let w=[],I=[],N=[];for(let O=0;O<=74;O++){let k=-_+2*_*O/74;for(let H of[12.5,-12.5]){let $=R(H,k,T);w.push($[0],$[1],$[2]),I.push(H,k)}if(O>0){let H=(O-1)*2;N.push(H,H+1,H+2,H+1,H+3,H+2)}}let z=new Mt;z.setAttribute("position",new Qe(w,3)),z.setAttribute("su",new Qe(I,2)),z.setIndex(N),z.computeBoundingSphere(),f.push(z)}for(let[w,I]of[[28.9,25.7],[-25.7,-28.9]])for(let[N,U]of[[-_,-(x+3.4)],[x+3.4,_]])t.grid(41,2,(z,O)=>{let k=N+(U-N)*z/40,H=O?I:w,$=R(H,k,g+.38);return[$[0],$[1],$[2],0,1,0,H,k,v[0],v[1],v[2],v[3],x,9,1]});yield;let b=s(n,0,g,0,!1),E=e.color,A=[.74,.73,.7],P=S?[.78,.2,.15]:[.55,.72,.64];E.setM(b),E.box(-24.5,-1,-M,24.5,-.03,M,A,null,{noBottom:!1});for(let w of[-1,1])E.box(-24.5,-1.3,w>0?M-.35:-M,24.5,-.95,w>0?M:-M+.35,[.62,.61,.58]);for(let w of[-8,8])E.box(w-.7,-sa-1.4,-M+.6,w+.7,-1,M-.6,A);for(let w of[-25.7,25.7])E.box(w-1.2,-sa+.4,-M-.4,w+1.2,-.05,M+.4,A);for(let w of[-24.5,24.5])E.box(w-.16,.004,-x,w+.16,.016,x,[.33,.32,.31]),E.box(w-.02,.016,-x,w+.02,.02,x,[.2,.19,.19]);let L=m>0?.15:0;for(let w of[-1,1]){let I=w*(M-.14);for(let N=-24;N<=24.01;N+=2)E.box(N-.06,L,I-.06,N+.06,L+1,I+.06,P);E.box(-24,L+.95,I-.08,24,L+1.08,I+.08,P),E.box(-24,L+.48,I-.03,24,L+.54,I+.03,P),E.box(-24,L+.06,I-.03,24,L+.12,I+.03,P)}let D="bridge"+Math.abs(Math.round(n/Ws))%4;for(let w of[-25,25])for(let I of[-1,1]){let N=I*(M-.1),U=[.7,.69,.65];E.box(w-.32,L,N-.32,w+.32,L+1.45,N+.32,U),E.box(w-.38,L+1.45,N-.38,w+.38,L+1.58,N+.38,[.62,.61,.57]),e.atlas.setM(b);let z=(w<0?-1:1)*.325,O=D;w<0?e.atlas.quad([w-.325,L+.3,N-.22],[w-.325,L+.3,N+.22],[w-.325,L+1.3,N+.22],[w-.325,L+1.3,N-.22],[1,1,1],aa(O)):e.atlas.quad([w+.325,L+.3,N+.22],[w+.325,L+.3,N-.22],[w+.325,L+1.3,N-.22],[w+.325,L+1.3,N+.22],[1,1,1],aa(O)),E.setM(b)}la(e,s(n-14,-(M-.45),g+L,0,!0)),la(e,s(n+14,M-.45,g+L,0,!0)),yield;for(let w of[-18,18])for(let I of[-1,1]){yield;for(let N=11+h()*4;N<(S?125:170);N+=S?h.range(8.5,11):h.range(18,34)){let U=n+w+(h()-.5)*1.5,z=I*N;In(e,s(U,z,l(U,z),h()*6,!1),S?"sakura":"broad",h,S?h.range(1,1.25):h.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n.s,{}),g=p.y,x=u(n.s),m=x+1.4,d=Dt(n.s),v=[d.city,d.sakura,d.coast,d.country],S=a(n.s,0,g,0,!1),_=e.color,M=Math.max(s,n.s-Kt)-n.s,T=Math.min(r,n.s+Kt)-n.s;if(T>M+.01){let b=Math.max(2,Math.ceil((T-M)/3)+1),E=[-(x+1.5),-x,-x*.5,0,x*.5,x,x+1.5];t.gridN(b,E.length,(U,z)=>{let O=M+(T-M)*U/(b-1),k=n.s+O,H=E[z],$=g+Ac(O,H);return[p.x+p.fx*O+p.rx*H-c,$,p.z+p.fz*O+p.rz*H-h,0,1,0,ji(k,xs),H,v[0],v[1],v[2],v[3],x,0,-1]});let A=[[-x,0],[-x,.2],[-m,.2],[-m,3.2]];for(let U=1;U<12;U++){let z=Math.PI*(1-U/12);A.push([m*Math.cos(z),3.2+3*Math.sin(z)])}A.push([m,3.2],[m,.2],[x,.2],[x,0]);let P=[.86,.82,.72],L=[.44,.45,.47],D=[.62,.61,.58],w=[];for(let U=M;U<T-.01;U+=6)w.push(U);w.push(T),_.setM(S);for(let U=0;U<w.length-1;U++)for(let z=0;z<A.length-1;z++){let[O,k]=A[z],[H,$]=A[z+1],le=Math.max(k,$)<=.21?D:Math.abs(O)>m-.01&&Math.abs(H)>m-.01?P:L;_.quad([w[U],k,O],[w[U+1],k,O],[w[U+1],$,H],[w[U],$,H],le)}e.sodium.setM(S),e.sig.setM(S);let I=m*Math.cos(Math.PI/6)-.12,N=3.2+3*Math.sin(Math.PI/6)-.08;for(let U=Math.ceil((M+Kt-3)/6)*6+3-Kt;U<T;U+=6)for(let z of[-1,1])e.sodium.box(U-.45,N-.07,z*I-.13,U+.45,N+.07,z*I+.13,null),Js(e,S,U,N-.1,z*I,1);for(let U=Math.ceil((M+Kt)/24)*24-Kt;U<T;U+=24)e.sig.box(U-.3,.95,-m+.01,U+.3,1.2,-m+.06,null);for(let U=Math.ceil((M+Kt-30)/60)*60+30-Kt;U<T;U+=60)for(let z of[-1.15,1.15])_.box(U-1.1,5.2,z-.36,U+1.1,5.78,z+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),_.box(U-.08,5.78,z-.05,U+.08,6.15,z+.05,[.4,.4,.42]);yield}for(let b of[-1,1]){let E=n.s+b*Kt,A=b*(Kt+.08);if(E<s||E>=r)continue;let P=[];for(let $ of jp)$>=1.44&&P.push(x+$,-(x+$));for(let $ of Qp)$>x+3.5&&$<x+21&&P.push($,-$);for(let $=0;$<=24;$++)P.push(-m+2*m*$/24);P.push(-m-.01,m+.01),P.sort(($,le)=>$-le);let L=$=>3.2+3*Math.sqrt(Math.max(0,1-($/m)**2)),D=$=>Math.max(o(E-b*.03,$)-g,Ac(b*(Kt-.03),$)),w=$=>Math.abs($)<=m+1e-6?L($):o(E+b*.03,$)-g,I=[.78,.77,.73],N=[.66,.65,.62];_.setM(S);for(let $=0;$<P.length-1;$++){let le=P[$],ke=P[$+1];if(ke-le<1e-4)continue;let ye=D(le),Ne=D(ke),X=w(le),Z=w(ke);ye-X<.01&&Ne-Z<.01||(b<0?_.quad([A,X,le],[A,Z,ke],[A,Ne,ke],[A,ye,le],I):_.quad([A,Z,ke],[A,X,le],[A,ye,le],[A,Ne,ke],I))}for(let $=0;$<24;$++){let le=-m+2*m*$/24,ke=-m+2*m*($+1)/24,ye=L(le),Ne=L(ke),X=A+b*.02;b<0?_.quad([X,ye,le],[X,Ne,ke],[X,Ne+.55,ke*1.08],[X,ye+.55,le*1.08],N):_.quad([X,Ne,ke],[X,ye,le],[X,ye+.55,le*1.08],[X,Ne+.55,ke*1.08],N)}e.atlas.setM(S);let U=1.9,z=7.05,O=7.85,k=A+b*.03,H=aa("tunnel"+(d.coast>.5?1:Math.abs(n.k)%2?2:0));b<0?e.atlas.quad([k,z,-U],[k,z,U],[k,O,U],[k,O,-U],[1,1,1],H):e.atlas.quad([k,z,U],[k,z,-U],[k,O,-U],[k,O,U],[1,1,1],H)}yield;let R=d.mountain>.5;for(let b=Math.max(s,n.s-$t*.95)+f()*3;b<Math.min(r,n.s+$t*.95);b+=f.range(4,8)){let E=Math.abs(b-n.s)>Kt-4?17:4;for(let A of[-1,1]){let P=A*(x+f.range(E,50)),L=f();In(e,l(b,P,-.3,f()*6,!1),R?L<.5?"maple":L<.8?"cedar":"ginkgo":L<.65?"pine":"broad",f,f.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,a,l,o,u){let c=h=>Dt(h).snow;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+t()*20;f<s;f+=t.range(22,40)){if(c(f)<.6||t()<.5)continue;let p=h*t.range(18,90);Ki(e,a(f,p,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Zi),litP:.62,fence:0,snow:!0});for(let g=0;g<2+t()*3;g++)In(e,a(f+t.range(-9,9),p+h*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let f=n+t()*5;f<s;f+=t.range(3,7))c(f)<.5||(t()<.32&&In(e,a(f,h*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&In(e,a(f,h*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let h=Math.ceil(n/36)*36;h<s;h+=36){if(c(h)<.55)continue;let f=o(h);{let p=r(h,-(f+.95),l(h)+1.3),g=r(h+18,f+.95,l(h+18)+1.3);p.groundY=l(h),g.groundY=l(h+18),Oh(e,p,1),Oh(e,g,-1)}}}}*placeMountain(e,t,n,s,r,a,l,o,u){let c=h=>Dt(h).mountain;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+t()*4;f<s;f+=t.range(4.5,8.5)){if(c(f)<.45||Mi(f,$t+6))continue;let p=o(f),g=t();if(h>0){let x=g<.5?"maple":g<.72?"ginkgo":"cedar";In(e,a(f,p+t.range(17,70),-.25,t()*6,!1),x,t,t.range(.9,1.3))}else{let x=g<.55?"maple":g<.8?"cedar":"ginkgo";In(e,a(f,-(p+t.range(3.5,34)),-.25,t()*6,!1),x,t,t.range(.95,1.35))}}yield}for(let h=n+t()*4;h<s;h+=t.range(3,6)){if(c(h)<.5)continue;let f=t()<.7,p=-(o(h)+(f?t.range(108,205):t.range(36,100)));In(e,a(h,p,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new Je);for(let h=Math.ceil(n/10)*10;h<s;h+=10){if(c(h)<.5||Mi(h,$t+4))continue;let f=o(h),p=r(h,-(f+.95),l(h));Ip(e,p)}for(let h=Math.ceil(n/14)*14;h<s;h+=14){if(c(h)<.6)continue;let f=this.path.curv(h);if(Math.abs(f)<1/230)continue;let p=o(h);f>0?vs(e,r(h,p+.42,l(h)),"chev_l",-1,1.25,.58):vs(e,r(h,-(p+1.15),l(h)),"chev_r",1,1.35,.58)}}}*placeVerge(e,t,n,s,r,a,l){for(let o of[-1,1]){for(let u=n+t()*1.2;u<s;u+=t.range(.55,1.5)){if(_s(u,10)||Qn(u,31)||Mi(u,$t+4))continue;let c=Zt(u),h=l(u),f,p,g=.22,x=1;if(c==="country")f=h+(t()<.6?t.range(.2,.62):t.range(2.18,2.75)),p=.95;else if(c==="sakura")f=h+2.68+t()*1.3,p=.55,g=.3;else if(c==="coast"){if(o<0)continue;f=h+.95+t()*1.7,p=.75,g=.18}else{if(c==="snow")continue;if(c==="mountain")f=o<0?h+1+t()*.35:h+.25+t()*.2,p=o<0?.55:.18,g=.12,x=.85;else{if(Gh(u,5))continue;f=h+3.02+t()*.1,p=.1,g=.08,x=.65}}if(t()>p)continue;let m=o*f;Np(e,r(u,m,a(u,m),t()*6.28,!1),t,t()<g?"flowers":"grass",x*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,a){e.color.setM(new Je);let l=Math.max(1,Math.round((n-t)/2));for(let o=0;o<l;o++){let u=t+(n-t)*o/l,c=t+(n-t)*(o+1)/l,h=-(a(u)+.95),f=-(a(c)+.95),p=r(u),g=r(c),x=(M,T,R)=>s(M,T,R),m=x(u,h,p+.52),d=x(c,f,g+.52),v=x(u,h,p+.84),S=x(c,f,g+.84);e.color.quad(m,d,S,v,pe.rail),e.color.quad(d,m,v,S,[.62,.64,.66]);let _=s(u,h-.05,p);e.color.box(_[0]-.05,p,_[2]-.05,_[0]+.05,p+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(e,t,n,s,r,a,l,o,u,c,h,f,p){for(let m of[-1,1]){let d=n+t()*2;for(;d<s-2;){{let D=Dt(d);if(D.city<.62||D.mountain>.1){d+=4;continue}}{let D=Xr(d+6);if(D&&d<D.s+8.5&&d+14>D.s-8.5){d=Math.max(d+1,D.s+8.5);continue}}let v=ji(d,150);if(v>145.6||v<3.4){d+=1;continue}let S=o(d),_=u(d)||3,M=S+_+.15,T=t(),R=T<.42?"shop":T<.58?"apt":T<.68?"office":T<.82?"house":T<.88?"konbini":T<.94?"parking":"gap",b=R==="shop"?t.range(5,9):R==="apt"?t.range(10,16):R==="office"?t.range(10,14):R==="house"?t.range(7,9.5):R==="konbini"?t.range(12,14):R==="parking"?t.range(7,11):t.range(2,3.5);if(d+b>s){if(s-d<5||R==="konbini")break;b=s-d-.2}{let D=Math.ceil((d+4.4)/150)*150-4.4;if(d+b>D-.1){if(D-.1-d<4){d=D+7.9;continue}b=D-.1-d}}let E=d+b/2,A=l(E),P=t.pick(Zi),L=.42;if(R==="parking"){let D=r(E,m*(M+3),A+.15);t()<.8&&kp(e,Oc(D,0,0,.5,(t()-.5)*.1),t),e.color.setM(D),e.color.box(-b/2,0,5.5,b/2,1.6,5.7,pe.concrete)}else if(R!=="gap"){let D=r(E,m*M,A+.15),w={type:R,w:b,d:R==="apt"||R==="office"?t.range(10,14):t.range(8,12),floors:R==="shop"?t.int(2,4):R==="apt"?t.int(4,9):R==="office"?t.int(4,8):2,tint:P,litP:L,fence:R==="house"&&t()<.5?1.2:0};if(Ki(e,D,t,w),R!=="house"&&t()<.28&&Fh(e,r(E+(t()-.5)*(b-1.2),m*(M-.42),A+.15),t),(R==="shop"||R==="konbini")&&t()<.3)for(let I=0;I<1+t()*3;I++)Rp(e,r(E-b/2+.8+I*.55,m*(M-.75),A+.15,Math.PI/2+.1),t);if(R==="house"&&t()<.6)for(let I=0;I<2+t()*3;I++)Pp(e,r(E+1+I*.5,m*(M-.3),A+.15),t);if(t()<.03)for(let I=0;I<3;I++)Cp(e,r(E+I*.9,m*(S+.35),A))}d+=b+t.range(.05,.5),yield}for(let v=n+t()*10;v<s-8;v+=t.range(14,26)){if(Dt(v).city<.7||Dt(v).mountain>.1||t()<.3||_s(v,18)||Gh(v,15))continue;let S=o(v),_=r(v,m*(S+3.2+t.range(14,20)),l(v)+.1);Ki(e,_,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Zi),litP:.4})}if(Dt(n+30).city>.7&&Dt(n+30).mountain<.1&&t()<.65){let v=n+t()*Wt;if(_s(v,24)||Gh(v,20))continue;let S=r(v,m*t.range(55,150),l(v));Ki(e,S,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Zi),litP:.45})}}let g=Math.ceil(n/150),x=Math.floor((s-.01)/150);for(let m=g;m<=x;m++){let d=m*150;if(Zt(d)!=="city"||Dt(d).mountain>.1)continue;let v=o(d);yield*this.intersection(e,t,d,m,r,l,o,u,h,f,p),vs(e,r(d-1,-(v+.4),l(d)+.15),"sign_blue",1),vs(e,r(d-6,-(v+.4),l(d)+.15),"sign_stop",1,2.1,.75),Bh(e,r(d+7,v+.4,l(d)+.15),-1),m%3===0&&vs(e,r(d+20,-(v+.4),l(d)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,a,l,o,u){for(let f of[-1,1]){for(let p=n+t()*4;p<s;p+=t.range(7.5,10)){if(Dt(p).sakura<.45||Qn(p,30))continue;let g=o(p);In(e,a(p,f*(g+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&In(e,a(p+3,f*(g+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let p=n+(f>0?0:12);p<s;p+=24){if(Zt(p)!=="sakura"||Qn(p,30))continue;let g=o(p);la(e,r(p,f*(g+2.25),l(p)+.15)),ji(p,48)<24&&qp(e,r(p+6,f*(g+3),u(p+6,f*(g+3))))}for(let p=n+t()*15;p<s;p+=t.range(14,24)){if(Zt(p)!=="sakura"||t()<.35||Qn(p,45))continue;let g=o(p);Ki(e,a(p,f*(g+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Zi),litP:.45,fence:t()<.6?1.4:0})}}let h=Math.floor((n+Wt/2)/480)*480+240;h>=n&&h<s&&Zt(h)==="sakura"&&!Qn(h,60)&&Hh(e,r(h,0,l(h),0,!1),o(h)+1.6,6.4)}placeCoast(e,t,n,s,r,a,l,o,u,c,h){for(let g=0;g<=20;g++){let x=n+g/20*Wt;if(Dt(x).coast<.85||Mi(x,$t*1.25)){c.length&&c[c.length-1]!==null&&c.push(null);continue}let d=o(x),v=d+11,S=d+19,_=h(x,-v,gs+.06),M=h(x,-S,gs+.06);c.push([[_[0],_[1],_[2],ji(x,xs),0],[M[0],M[1],M[2],ji(x,xs),1]])}let f=c.indexOf(null);f>=0&&(c.length=f),c.length<2&&(c.length=0);for(let g=n+t()*6;g<s;g+=t.range(5,9)){if(Zt(g)!=="coast"||Mi(g,$t+6))continue;let x=o(g);t()<.7&&In(e,a(g,x+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&In(e,a(g+2,-(x+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let g=n+4;g<s;g+=t.range(18,30)){if(Zt(g)!=="coast"||t()<.4||Mi(g,$t*1.4))continue;let x=o(g),m=3+Math.floor(t()*5);for(let d=0;d<m;d++){let v=-(x+t.range(12,17)),S=g+t.range(-3,3);Zp(e,r(S,v,Math.max(u(S,v),gs-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let g=n+12;g<s;g+=48){if(Zt(g)!=="coast"||Mi(g,$t+4))continue;let x=o(g);Uh(e,a(g,x+1),t)}if(Zt(n+30)==="coast"&&t()<.5){let g=n+t()*Wt,x=o(g);Mi(g,$t+25)||Ki(e,a(g,x+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(Zi),litP:.5,fence:0})}if(Zt(n+30)==="coast"&&t()<.55){let g=n+t()*Wt;Jp(e,r(g,-(o(g)+t.range(45,220)),gs-.25,t()*6,!1),t)}let p=Math.floor((n+Wt/2)/1500)*1500+700;p>=n&&p<s&&Zt(p)==="coast"&&!Mi(p,$t*1.6)&&$p(e,r(p,-(o(p)+75),gs-1,0,!1))}*placeCountry(e,t,n,s,r,a,l,o,u){for(let g of[-1,1]){yield;for(let x=n+t()*20;x<s;x+=t.range(20,40)){if(Zt(x)!=="country"||t()<.55||_s(x,16)||Qn(x,48))continue;let m=g*t.range(16,95),d=a(x,m);Ki(e,d,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Zi),litP:.5,fence:0});for(let v=0;v<2+t()*3;v++){let S=m+g*t.range(6,14),_=x+t.range(-8,8);In(e,a(_,S,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let x=n+t()*8;x<s;x+=t.range(5,9)){if(Zt(x)!=="country"||_s(x,7)||Qn(x,36))continue;let m=g*t.range(140,210);In(e,a(x,m,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!_s(x+2,8)&&!Qn(x+2,34)&&In(e,a(x+2,g*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let c=Math.floor((n+Wt/2)/600)*600+300;if(c>=n&&c<s&&Zt(c)==="country"&&!Qn(c,40)){let g=o(c);Yp(e,r(c,-(g+1.6),l(c)-.08),t)}let h=Math.floor((n+Wt/2)/700)*700+120;if(h>=n&&h<s&&Zt(h)==="country"&&!Qn(h,40)){let g=o(h);Fh(e,r(h,-(g+.95),l(h)-.08),t),Uh(e,r(h+2,-(g+.8),l(h)-.08),t)}let f=Math.floor((n+Wt/2)/900)*900+450;if(f>=n&&f<s&&Zt(f)==="country"&&!Qn(f,40)){let g=o(f);Kp(e,a(f,g+5),t)}let p=Math.floor((n+Wt/2)/380)*380+190;if(p>=n&&p<s&&Zt(p)==="country"&&!Qn(p,40)&&!_s(p,30)){let g=o(p),x=(Kn(Math.round(p),5)<.5?-1:1)*(g+2.75);Wp(e,a(p,x,0))}for(let g=n;g<s;g+=30){if(Zt(g)!=="country")continue;let x=this.path.curv(g);if(Math.abs(x)>1/450&&t()<.5){let m=x>0?-1:1,d=o(g);Bh(e,a(g,m*(d+.75)),m>0?-1:1)}}}};var zc=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3473d4","#cde3f8","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#cfe0ef","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new xe(e):e)),fe={zenith:new xe,horizon:new xe,sunCol:new xe,sunI:1,hemiSky:new xe,hemiGround:new xe,hemiI:1,fog:new xe,cLit:new xe,cShade:new xe,cRim:new xe,night:0,warm:0,overcast:0,rain:0,sunDir:new B,moonDir:new B,lightDir:new B,sunEl:0};function n0(i){let e=0;for(;e<zc.length-2&&zc[e+1][0]<=i;)e++;let t=zc[e],n=zc[e+1],s=Sc(Bt((i-t[0])/(n[0]-t[0]),0,1)),r=(a,l)=>l.copy(t[a]).lerp(n[a],s);r(1,fe.zenith),r(2,fe.horizon),r(3,fe.sunCol),fe.sunI=Rt(t[4],n[4],s),r(5,fe.hemiSky),r(6,fe.hemiGround),fe.hemiI=Rt(t[7],n[7],s),r(8,fe.fog),r(9,fe.cLit),r(10,fe.cShade),r(11,fe.cRim),fe.night=Rt(t[12],n[12],s),fe.warm=Rt(t[13],n[13],s),fe.sunEl=i0(i,fe.sunDir,fe.moonDir,fe.lightDir)}function i0(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Bt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var ny=new B,iy=new B;function qh(i,e){return i0((i%1+1)%1,ny,iy,e),e}var t0={zenith:[new xe("#7b8594"),new xe("#141a28")],horizon:[new xe("#b5bcc6"),new xe("#283042")],fog:[new xe("#a8b0ba"),new xe("#232b3c")],hemiSky:[new xe("#aab3bf"),new xe("#3c4866")],hemiGround:[new xe("#8b8983"),new xe("#1e2030")],cLit:[new xe("#d0d5dc"),new xe("#2c3240")],cShade:[new xe("#7c8593"),new xe("#151922")]},Xh=new xe;function s0(i,e){if(fe.overcast=i,fe.rain=e,i<=.001)return;let t=fe.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Xh.copy(t0[n][0]).lerp(t0[n][1],t),fe[n].lerp(Xh,i*(n==="cLit"||n==="cShade"?.75:.85));fe.sunI*=1-.82*i,fe.warm*=1-i,fe.cRim.multiplyScalar(1-i),fe.sunCol.lerp(Xh.setRGB(.85,.87,.9),i*.6)}function r0(){let i=new pt({side:yn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:fe.zenith},uHorizon:{value:fe.horizon},uSunDir:{value:fe.sunDir},uMoonDir:{value:fe.moonDir},uNoiseTex:Xe.uNoiseTex,uSunCol:{value:fe.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new xe},uOvercast:{value:0},uDeckLit:{value:new xe},uDeckDark:{value:new xe},uMilky:{value:0},uMetA:{value:new B(0,1,0)},uMetB:{value:new B(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP;
      varying vec3 vDir;
      ${Wi}
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
      }`}),e=new ft(new Oo(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function sy(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,a=e?6:9;for(let d=0;d<a;d++){let v=.06+i()*.05;t.push([(d/(a-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let l=e?6:2,o=s*.82,u=.1+.09;for(let d=0;d<l;d++){let v=Math.max(1,Math.round(o/.11));for(let S=0;S<v;S++){let _=(v===1?0:S/(v-1)-.5)*o+(i()-.5)*.05+r*d;t.push([_,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,o*=e?.8:.66}let c=t.slice();for(let d of c){if(t.length>92)break;let v=1+Math.floor(i()*2);for(let S=0;S<v;S++){let _=.35+i()*2.4,M=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,M])}}let h=t.slice(0,96),f=1e9,p=-1e9,g=-1e9;for(let d of h)f=Math.min(f,d[0]-d[3]*1.12),p=Math.max(p,d[0]+d[3]*1.12),g=Math.max(g,d[1]+d[3]*1.12);let x=Math.min(1,.92/(p-f),(.95-.1)/(g-.1)),m=(f+p)/2;for(let d of h)d[0]=(d[0]-m)*x,d[1]=.1+(d[1]-.1)*x,d[3]*=x;return h}function o0(i){let t={value:Array.from({length:96},()=>new vt)},n=new pt({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Xe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Wi}
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
      }`,depthTest:!1,depthWrite:!1,blending:Vn}),s=new ft(new Gt(1,1),n),r=new Ns,a=new Vi;r.add(s);let l=new Ut(1024*2,1024*2,{generateMipmaps:!0,minFilter:Gn,magFilter:Ot}),o=i.getRenderTarget(),u=i.autoClear,c=Rn(99);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let p=f%2===0,g=sy(c,p);g.forEach((x,m)=>t.value[m].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=g.length,n.uniforms.uSeed.value=f*13.7,l.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(l),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:p})}return l.viewport.set(0,0,1024*2,1024*2),i.autoClear=u,i.setRenderTarget(o),n.dispose(),s.geometry.dispose(),{tex:l.texture,kinds:h,rt:l}}function a0(i){let e=Rn(5),t=22,n=[],s=new Gt(1,1);s.translate(0,.5,0);let r=new Un(new Float32Array(t*4),4),a=new Un(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let l=new pt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:fe.cLit},uShade:{value:fe.cShade},uRim:{value:fe.cRim},uHaze:{value:fe.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),o=new Hi(s,l,t);o.frustumCulled=!1,o.renderOrder=-5;for(let g=0;g<t;g++){let x=g<12,m=i.kinds[(g*3+(x?0:1))%i.kinds.length],d=x?m.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:g/t*Math.PI*2+e.range(-.15,.15),d:x?e.range(2600,3400):e.range(1300,2200),base:x?e.range(-60,60):e.range(260,700),size:d,cell:m.cell,haze:x?.45:.18})}let u=new Je,c=new gn,h=new B,f=new B,p=new B(0,1,0);return{group:o,update(g,x){let m=Math.atan2(fe.lightDir.x,fe.lightDir.z);for(let v of n)v.phi+=x*1.2/v.d;n.slice().sort((v,S)=>S.d-v.d).forEach((v,S)=>{h.set(g.x+Math.sin(v.phi)*v.d,g.y+v.base,g.z+Math.cos(v.phi)*v.d),c.setFromAxisAngle(p,v.phi+Math.PI),f.set(v.size,v.size,1),u.compose(h,c,f),o.setMatrixAt(S,u);let _=m-v.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let M=Math.max(0,Math.min(1,(_+.35)/.7)),T=1-M*M*(3-2*M);r.setXYZW(S,v.cell[0],v.cell[1],T,v.haze),a.setX(S,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+fe.warm))}),o.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,l.uniforms.uOpacity.value=(1-fe.night*.35)*(1-fe.overcast*.55)*(1-.85*fe.rain)}}}function l0(){let i=new Xt;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],a=[],l=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,p=Math.sin(f)*t.R,g=Math.cos(f)*t.R,x=Tc(h/360*t.k*4,40+n*9),m=Math.pow(Math.max(0,x-.18)/.82,1.6),d=t.h*(.12+m);if(r.push(p,-60,g,p,-60+d,g),a.push(0,h/360,1,h/360),h<360){let v=h*2;l.push(v,v+1,v+2,v+1,v+3,v+2)}}let o=new Mt;o.setAttribute("position",new Qe(r,3)),o.setAttribute("hf",new Qe(a,2)),o.setIndex(l);let u=new pt({side:xn,fog:!1,uniforms:{uCol:{value:new xe(t.col)},uHaze:{value:fe.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Xe.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Wi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),c=new ft(o,u);c.frustumCulled=!1,c.renderOrder=999,i.add(c)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-fe.night))*(1-.35*fe.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var jr={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function c0(i){let e=i.get("weather"),t={mode:jr[e]?e:"auto",kind:jr[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return jr[e]&&(t.ov=jr[e][0],t.rain=jr[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=jr[t.kind];t.ov+=Bt(s-t.ov,-n/28,n/28);let a=t.ov>.75?r:0;t.rain+=Bt(a-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var ai={uHeadPos:{value:new B},uHeadDir:{value:new B(0,0,1)},uHeadI:{value:0},uLampW:{value:[new vt(0,-1e3,0,0),new vt(0,-1e3,0,0)]},uLampCol:{value:new xe(1,.8,.52)}},kc=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function u0(){let e=new B(42,22,42),t=new Gt(1,1),n=new hs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Un(s,4)),n.instanceCount=2400;let r=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new B},uAmt:{value:0},uBox:{value:e},uCol:{value:new xe(1,1,1)},...ai},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${kc}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),a=new ft(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*c,.33+.67*c,.42+.58*c)}}}function h0(){let e=new B(46,24,46),t=new Gt(1,1);t.translate(0,.5,0);let n=new hs;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Un(s,4)),n.instanceCount=2600;let r=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new B},uRain:{value:0},uBox:{value:e},uCol:{value:new xe(.8,.85,.95)},...ai},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${kc}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new ft(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*c,.12+.83*c,.16+.84*c)}}}var Fn=64,Yh=[2.2,1.3,2.6],ry=[-2.4,.35,-1.6];function f0(){let i=new Float32Array(Fn*3),e=new Float32Array(Fn*3),t=new Float32Array(Fn*4),n=new Float32Array(Fn),s=new Uint8Array(Fn),r=new Float32Array(Fn);for(let S=0;S<Fn;S++)t[S*4]=t[S*4+1]=1;let a=new Gt(1,1),l=new hs;l.index=a.index,l.setAttribute("position",a.attributes.position),l.setAttribute("uv",a.attributes.uv),l.instanceCount=0;let o=new Float32Array(Fn*4),u=new Float32Array(Fn*4),c={uP:{value:o},uC:{value:u},uNoiseTex:Xe.uNoiseTex,uAmb:{value:new xe},uSun:{value:new xe},uTail:{value:new vt},uCam:{value:new B},...ai},h=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:c,vertexShader:`
      uniform vec4 uP[${Fn}], uC[${Fn}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${kc}
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
      }`}),f=new ft(l,h);f.frustumCulled=!1,f.renderOrder=4,f.visible=!1;let p=0,g=0,x=0,m=0,d=!1;function v(S,_,M,T,R,b,E,A,P,L,D){let w=p;p=(p+1)%Fn,i[w*3]=_,i[w*3+1]=M,i[w*3+2]=T,e[w*3]=R,e[w*3+1]=b,e[w*3+2]=E,t[w*4]=0,t[w*4+1]=A,t[w*4+2]=P,t[w*4+3]=L,n[w]=D,s[w]=S,r[w]=Math.random()}return{mesh:f,update(S,_,M,T,R,b,E,A,P,L,D){if(!D){if(d){for(let X=0;X<Fn;X++)t[X*4]=t[X*4+1];d=!1}f.visible=!1;return}let w=_.position,I=_.rotation.y,N=Math.cos(I),U=Math.sin(I),z=U*M,O=N*M,k=Math.min(1,Math.max(0,(M-2)/14)),H=R>.3?2:0,$=H?R:T;for(g+=24*$*k*S;g>=1;){g-=1;let X=(m^=1)?1:-1,Z=X*.67,Ee=-1.28-Math.random()*.2,Pe=Math.random(),Me=Math.random(),Ze=1.6+1.6*Pe,st=H?.5+.7*Me:.9+1*Me,te=X*(.3+.6*Math.random());v(H,w.x+Z*N+Ee*U,w.y+.12,w.z-Z*U+Ee*N,z*.55-U*Ze+te*N,st,O*.55-N*Ze-te*U,H?.45+.3*Pe:.55+.35*Pe,.2+.1*Me,H?.7+.35*Me:.8+.4*Me,.5*(.5+.5*k)*Math.min(1,$*1.5))}for(x+=(5+4*k)*b*S;x>=1;){x-=1;let X=Math.random();v(1,w.x-.42*N-1.78*U,w.y+.26,w.z+.42*U-1.78*N,z*.5-U*.8,.25+.2*X,O*.5-N*.8,1.3+.6*X,.14,.8+.4*Math.random(),.32*Math.min(1,b*1.5))}let le=0,ke=Math.exp(-Yh[0]*S),ye=Math.exp(-Yh[1]*S),Ne=Math.exp(-Yh[2]*S);for(let X=0;X<Fn;X++){let Z=X*4;if(t[Z]>=t[Z+1])continue;let Ee=t[Z]+=S,Pe=t[Z+1];if(Ee>=Pe)continue;let Me=s[X],Ze=Me===0?ke:Me===1?ye:Ne,st=X*3,te=i[st]-L.x,de=i[st+1]-L.y,ve=i[st+2]-L.z;if(te*te+de*de+ve*ve<20.25){t[Z]=Pe;continue}e[st]*=Ze,e[st+1]=e[st+1]*Ze+ry[Me]*S,e[st+2]*=Ze,i[st]+=e[st]*S,i[st+1]=Math.max(w.y+.05,i[st+1]+e[st+1]*S),i[st+2]+=e[st+2]*S;let ce=Ee/Pe,ne=le*4;o[ne]=i[st],o[ne+1]=i[st+1],o[ne+2]=i[st+2],o[ne+3]=t[Z+2]+(t[Z+3]-t[Z+2])*Math.sqrt(ce),u[ne]=n[X]*Math.min(1,ce*6)*(1-ce)*(1-ce),u[ne+1]=Me,u[ne+2]=r[X],le++}d=le>0,f.visible=d,l.instanceCount=le,d&&(c.uAmb.value.copy(E),c.uSun.value.copy(A),c.uTail.value.copy(P),c.uCam.value.copy(L))},shift(S,_){for(let M=0;M<Fn;M++)i[M*3]-=S,i[M*3+2]-=_}}}var Qr=72;function oy(){let i=[],e=[],t=(s,r,a,l,o,u)=>{i.push(...s,...r,...a),e.push(l,o,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new Mt;return n.setAttribute("position",new Qe(i,3)),n.setAttribute("aWing",new Qe(e,1)),n}function d0(){let i=oy(),e=new Un(new Float32Array(Qr*3),3),t=new Un(new Float32Array(Qr*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new pt({side:xn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:fe.fog},uFogD:{value:.002},uCam:{value:new B}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Hi(i,n,Qr);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},l=new Je,o=new gn,u=new kn(0,0,0,"YXZ"),c=new B,h=new B,f=()=>r.reduce((x,m)=>x+m.birds.length,0);function p(x,m,d,v){let S=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(f()+S>Qr)return;let _=45+Math.random()*85,M=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,R=new B().copy(m).addScaledVector(d,_).addScaledVector(v,M-T*75);R.y=m.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let b=x==="small"?11+Math.random()*4:8+Math.random()*3,E=new B().copy(v).multiplyScalar(T*b).addScaledVector(d,(Math.random()-.3)*b*.6),A=x==="small"?.8:1.45,P=Array.from({length:S},(L,D)=>({off:new B((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:R,vel:E,birds:P,size:A,life:60})}function g(x,m,d,v){if(r.some(M=>M.kind==="gull")||f()+4>Qr)return;let S=new B().copy(x).addScaledVector(m,70).addScaledVector(d,-v*45);S.y=x.y+18;let _=Array.from({length:4},(M,T)=>({off:new B,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:S,vel:new B,birds:_,size:1.25,life:1e9})}return{mesh:s,update(x,m,d,v,S,_,M,T,R){n.uniforms.uTime.value=m,n.uniforms.uCam.value.copy(d);let b=M>.35&&T<.3,E=fe.warm>.25&&fe.sunEl<.6&&M>.2;b&&(a.small-=x)<0&&(a.small=22+Math.random()*35,_.coast<.6&&p("small",d,v,S)),(E||b&&_.city+_.country>.6&&Math.random()<4e-4)&&(a.crow-=x)<0&&(a.crow=E?14+Math.random()*18:60,p("crow",d,v,S)),_.coast>.6&&b&&g(d,v,S,1);let A=[.1+.08*M,.11+.09*M,.15+.1*M],P=0;for(let L=r.length-1;L>=0;L--){let D=r[L];if(D.kind==="gull"?(D.c.lerp(c.copy(R).addScaledVector(v,60).addScaledVector(S,-42).setY(R.y+16),Math.min(1,x*.25)),(_.coast<.4||!b)&&(D.life=Math.min(D.life,8),D.c.y+=x*6)):D.c.addScaledVector(D.vel,x),D.life-=x,D.life<0||D.kind!=="gull"&&D.c.distanceTo(d)>300){r.splice(L,1);continue}for(let w of D.birds){if(P>=Qr)break;let I,N,U,z;D.kind==="gull"?(w.w+=x*(14/w.r),I=D.c.x+Math.cos(w.w)*w.r,U=D.c.z+Math.sin(w.w)*w.r,N=D.c.y+w.h+Math.sin(m*.4+w.ph)*2,z=Math.atan2(-Math.sin(w.w),Math.cos(w.w))):(I=D.c.x+w.off.x+Math.sin(m*.7+w.ph)*1.2,N=D.c.y+w.off.y+Math.sin(m*1.1+w.ph)*.6,U=D.c.z+w.off.z,z=Math.atan2(D.vel.x,D.vel.z)),u.set(0,z,Math.sin(m+w.ph)*.15),o.setFromEuler(u),h.setScalar(D.size),l.compose(c.set(I,N,U),o,h),s.setMatrixAt(P,l);let O=D.kind==="gull"?[.92*(.5+.5*M),.93*(.5+.5*M),.95*(.5+.5*M)]:D.kind==="crow"?[.05,.05,.07]:A;e.setXYZ(P,O[0],O[1],O[2]),t.setXY(P,w.fq,w.ph),P++}}s.count=P,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,m){for(let d of r)d.c.x-=x,d.c.z-=m}}}function p0(){let i=new pt({fog:!1,uniforms:{uNoiseTex:Xe.uNoiseTex,uTime:{value:0},uCam:{value:new B},uSunDir:{value:fe.lightDir},uSunCol:{value:fe.sunCol},uHorizon:{value:fe.horizon},uZenith:{value:fe.zenith},uFog:{value:fe.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${Wi}
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
      }`}),e=new ft(new Gt(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=gs,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=fe.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-fe.overcast*.85}}}function m0(){return new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new xe(1,1,1)},uNoiseTex:Xe.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${Wi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function g0(){return new pt({fog:!1,uniforms:{uNoiseTex:Xe.uNoiseTex,uTime:{value:0},uSunDir:{value:fe.lightDir},uSunCol:{value:fe.sunCol},uHorizon:{value:fe.horizon},uZenith:{value:fe.zenith},uFog:{value:fe.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Wi}
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
      }`})}var fa=new B;function li(i,e,t,n,s,r){let a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;fa.copy(e),fa[n]=0,fa.normalize();let u=.5*a/(a+l),c=1-fa.angleTo(i)/o;return Math.sign(fa[t])===1?c*u:l/(a+l)+u+u*(1-c)}var bi=class i extends gi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let o=new B,u=new B,c=new B(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,x=new B,m=.5/a;for(let d=0,v=0;d<h.length;d+=3,v+=2)switch(o.fromArray(h,d),u.copy(o),u.x-=Math.sign(u.x)*m,u.y-=Math.sign(u.y)*m,u.z-=Math.sign(u.z)*m,u.normalize(),h[d+0]=c.x*Math.sign(o.x)+u.x*r,h[d+1]=c.y*Math.sign(o.y)+u.y*r,h[d+2]=c.z*Math.sign(o.z)+u.z*r,f[d+0]=u.x,f[d+1]=u.y,f[d+2]=u.z,Math.floor(d/g)){case 0:x.set(1,0,0),p[v+0]=li(x,u,"z","y",r,n),p[v+1]=1-li(x,u,"y","z",r,t);break;case 1:x.set(-1,0,0),p[v+0]=1-li(x,u,"z","y",r,n),p[v+1]=1-li(x,u,"y","z",r,t);break;case 2:x.set(0,1,0),p[v+0]=1-li(x,u,"x","z",r,e),p[v+1]=li(x,u,"z","x",r,n);break;case 3:x.set(0,-1,0),p[v+0]=1-li(x,u,"x","z",r,e),p[v+1]=1-li(x,u,"z","x",r,n);break;case 4:x.set(0,0,1),p[v+0]=1-li(x,u,"x","y",r,e),p[v+1]=1-li(x,u,"y","x",r,t);break;case 5:x.set(0,0,-1),p[v+0]=li(x,u,"x","y",r,e),p[v+1]=1-li(x,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Zh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,o=new Mt,u=0;for(let c=0;c<i.length;++c){let h=i[c],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(u,p,c),u+=p}}if(t){let c=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=i[f].attributes.position.count}o.setIndex(h)}for(let c in r){let h=x0(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,h)}for(let c in a){let h=a[c][0].length;if(h!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<a[c].length;++x)p.push(a[c][x][f]);let g=x0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(g)}}}return o}function x0(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}let a=new e(r),l=new Yt(a,t,n),o=0;for(let u=0;u<i.length;++u){let c=i[u];if(c.isInterleavedBufferAttribute){let h=o/t;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<t;g++){let x=c.getComponent(f,g);l.setComponent(f+h,g,x)}}else a.set(c.array,o);o+=c.count*t}return s!==void 0&&(l.gpuType=s),l}function ay(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new Hn(i);return n.colorSpace=qt,n}function ly(){let i=document.createElement("canvas");i.width=64,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"#9fbfe6"),t.addColorStop(.45,"#4a6690"),t.addColorStop(1,"#1d2638"),e.fillStyle=t,e.fillRect(0,0,64,128),e.fillStyle="rgba(255,255,255,0.35)",e.beginPath(),e.moveTo(20,0),e.lineTo(34,0),e.lineTo(10,128),e.lineTo(-4,128),e.fill();let n=new Hn(i);return n.colorSpace=qt,n}function v0(){let i=new Xt,e=new Xt,t=new Xt;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new vt,new vt],s=new xe(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},a=Ch(new ln({color:"#ffffff",vertexColors:!0,gradientMap:jn}),.85,.06,"paint-l",r),l=(z,O)=>Object.assign(new xe(z),{gloss:O}),o=l("#9fd8c8",1),u=l("#e9e7e0",.55),c=l("#2a2c33",.35),h=l("#1b1c20",.04),f=l("#c8ccd2",.8),p=(z,O)=>{let k=z.attributes.position.count,H=new Float32Array(k*4);for(let $=0;$<k;$++)H.set([O.r,O.g,O.b,O.gloss],$*4);return z.setAttribute("color",new Qe(H,4)),z},g=Ch(new ln({color:"#ffffff",map:ly(),gradientMap:jn}),1.2,.08,"glass-l",r),x=new ln({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:jn}),m=new ln({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:jn}),d=new ln({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:jn}),v=new en({map:ay()}),S=new Map,_=[],M=!1,T=new Je,R=new kn,b=new gn,E=new B(1,1,1),A=(z,O,k,H,$,le=0,ke=0,ye=0)=>{let Ne=z.index?z.toNonIndexed():z;if(O.isColor&&(p(Ne,O),O=a),R.set(le,ke,ye),b.setFromEuler(R),T.compose(new B(k,H,$),b,E),Ne.applyMatrix4(T),M){_.push(Ne);return}S.has(O)||S.set(O,[]),S.get(O).push(Ne)};A(new bi(1.48,.86,3.38,4,.15),o,0,.77,0),A(new bi(1.42,.66,2.6,4,.17),o,0,1.5,-.25),A(new bi(1.38,.09,2.5,3,.04),u,0,1.84,-.25),A(new Gt(1.16,.5),g,0,1.53,-1.556,0,Math.PI,0),A(new bi(.42,.045,.04,2,.015),m,0,1.752,-1.578);for(let z of[-1,1])A(new Gt(2.25,.46),g,z*.712,1.54,-.2,0,z*Math.PI/2,0),A(new bi(.1,.12,.2,2,.04),o,z*.82,1.2,.95),A(new bi(.14,.48,.08,2,.035),x,z*.64,1,-1.67),A(new bi(.12,.08,.06,2,.02),d,z*.64,.7,-1.67);A(new Gt(1.2,.52),g,0,1.52,1.056,-.12,0,0),A(new bi(1.52,.22,.22,2,.07),c,0,.42,-1.62),A(new gi(.24,.04,.05),c,0,.84,-1.69),A(new Gt(.34,.17),v,0,.72,-1.7,0,Math.PI,0),M=!0;for(let[z,O]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])A(new Ir(.29,.29,.2,20),h,z,.29,O,0,0,Math.PI/2),A(new Ir(.16,.16,.205,12),f,z,.29,O,0,0,Math.PI/2);M=!1;for(let[z,O]of S){let k=new ft(Zh(O),z);k.castShadow=z!==g&&z!==v&&z!==m,k.receiveShadow=!0,t.add(k)}{let z=new ft(Zh(_),a);z.castShadow=z.receiveShadow=!0,i.add(z)}{let k=document.createElement("canvas");k.width=48,k.height=96;let H=k.getContext("2d"),$=H.createImageData(48,96);for(let ke=0;ke<96;ke++)for(let ye=0;ye<48;ye++){let Ne=Math.max(0,Math.abs((ye+.5)/48-.5)*2.1-.62),X=Math.max(0,Math.abs((ke+.5)/96-.5)*2.05-.78),Z=Math.hypot(Ne/.42,X/.24),Ee=Math.max(0,1-Z),Pe=(ke*48+ye)*4;$.data[Pe]=$.data[Pe+1]=$.data[Pe+2]=Math.round(255*Ee*Ee*(3-2*Ee)),$.data[Pe+3]=255}H.putImageData($,0,0);let le=new ft(new Gt(2.2,4.1),new en({color:0,alphaMap:new Hn(k),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));le.rotation.x=-Math.PI/2,le.position.y=.03,le.renderOrder=3,i.add(le)}let P=new Xt;P.position.set(.02,1.3,-1.57),t.add(P);let L=new gi(.52,.026,.02);L.translate(.27,0,0);let D=new ft(p(L,c),a);D.rotation.z=.18,P.add(D);let w=0,I=new Ho(16773328,0,70,.55,.65,1.2);I.position.set(0,.8,1.6),I.target.position.set(0,0,18),t.add(I,I.target);let N={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},U=(z,O)=>O*Math.tanh(z/O);return{group:i,lamps:n,lampCol:s,head:I,update(z,O,k,H=0,$=null){if($){let le=U(-$.lat*.016,.045),ke=U(-$.lon*.008,.03);N.rv+=((le-N.roll)*55-N.rv*8)*z,N.roll+=N.rv*z,N.pv+=((ke-N.pitch)*60-N.pv*9)*z+$.kick,N.pitch+=N.pv*z,N.yv+=(($.road-N.y)*85-N.yv*8)*z+$.jolt,N.y+=N.yv*z,e.rotation.set(N.pitch,0,N.roll),e.position.y=.35+N.y}if(N.br+=(($?$.brake:0)-N.br)*Math.min(1,z*14),x.emissiveIntensity=.35+k*3.2+N.br*(1.7+k*2),m.emissiveIntensity=N.br*(2.4+k*1.6),H>.15||w%2.6>.01){w+=z;let le=w%2.6/2.6,ke=Ne=>Ne*Ne*(3-2*Ne),ye=le<.25?ke(le/.25):le<.5?ke(1-(le-.25)/.25):0;D.rotation.z=.18+ye*2.5,H<=.15&&le>=.5&&(w=0)}I.intensity=k*60}}}var eo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cy=new us(-1,1,1,-1,0,1),$h=class extends Mt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},uy=new $h,ys=class{constructor(e){this._mesh=new ft(uy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var to=class extends ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ks.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ys(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var da=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Hc=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Vc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ge);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new to(eo),this.copyPass.material.blending=Vn,this.timer=new Vo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}da!==void 0&&(a instanceof da?n=!0:a instanceof Hc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gc=class extends ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var _0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var no=class i extends ei{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:on,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Ut(r,a,{type:on,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Ut(r,a,{type:on,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let l=_0;this.highPassUniforms=ks.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Ge(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ks.clone(eo.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader,premultipliedAlpha:!0,blending:Gi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new en,this._fsQuad=new ys(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ge(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let l=t[a],o=a+1<e?t[a+1]:0,u=l+o;s.push((a*l+(a+1)*o)/u),r.push(u)}return new pt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};no.BlurDirectionX=new Ge(1,0);no.BlurDirectionY=new Ge(0,1);var Jh=class extends ei{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Ut(4,4,{type:on,depthBuffer:!1,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),this.mat=new pt({uniforms:{tDiffuse:{value:null},uTexel:{value:new Ge(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new ys(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},hy={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Ge(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Ge(1/1280,1/720)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function y0(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let a=i.getSize(new Ge),l=new Ut(a.x*i.getPixelRatio(),a.y*i.getPixelRatio(),{type:on,samples:n}),o=new Vc(i,l);o.addPass(new Gc(e,t));let u=new Jh;o.addPass(u);let c=new no(new Ge(a.x*r*.5,a.y*r*.5),.42,.55,.86);o.addPass(c);let h=new to(hy);h.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},h.material.toneMapped=!1,o.addPass(h);let f=o.render.bind(o);return o.render=p=>{h.uniforms.toneMappingExposure.value=i.toneMappingExposure,f(p)},{composer:o,bloom:c,grade:h,refl:u}}function M0(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let te=0;te<2;te++){let de=s.getChannelData(te);for(let ve=0;ve<n;ve++)de[ve]=(Math.random()*2-1)*Math.pow(1-ve/n,3)}let r=e.createConvolver();r.buffer=s;let a=e.createGain();a.gain.value=.55,r.connect(a),a.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let o=e.createGain();o.gain.value=.11,l.connect(o),o.connect(t),o.connect(r);let u=(te,de)=>{let ve=e.createBuffer(1,e.sampleRate*te,e.sampleRate),ce=ve.getChannelData(0),ne=0;for(let Ae=0;Ae<ce.length;Ae++)de?(ne=(ne+.02*(Math.random()*2-1))/1.02,ce[Ae]=ne*3.5):ce[Ae]=Math.random()*2-1;return ve},c=(te,de,ve)=>{let ce=e.createBufferSource();ce.buffer=te,ce.loop=!0;let ne=e.createBiquadFilter();ne.type=de,ne.frequency.value=ve;let Ae=e.createGain();return Ae.gain.value=0,ce.connect(ne),ne.connect(Ae),Ae.connect(t),ce.start(),{f:ne,g:Ae}},h=c(u(2,!0),"lowpass",400),f=c(u(3,!1),"lowpass",700);f.g.connect(r);let p=c(u(2,!1),"bandpass",5200);p.f.Q.value=6;let g=c(u(2,!0),"lowpass",240),x=c(u(3,!1),"bandpass",2600);x.f.Q.value=.35;let m=c(u(2,!0),"lowpass",520),d=c(u(2,!1),"bandpass",1500);d.f.Q.value=.7;let v=c(u(3,!1),"bandpass",750);v.f.Q.value=.6;let S=c(u(3,!0),"lowpass",420),_=c(u(2,!0),"lowpass",140),M=u(.03,!1),T=0;function R(te,de){let ve=e.createBufferSource(),ce=e.createBiquadFilter(),ne=e.createGain();ve.buffer=M,ce.type="bandpass",ce.frequency.value=1800+Math.random()*2600,ce.Q.value=1.2,ne.gain.setValueAtTime(de*(.02+Math.random()*.03),te),ne.gain.exponentialRampToValueAtTime(1e-4,te+.03),ve.connect(ce),ce.connect(ne),ne.connect(t),ve.start(te),ve.stop(te+.04)}let b=0,E=0;function A(te,de){let ve=e.createOscillator(),ce=e.createOscillator(),ne=e.createGain(),Ae=e.createBiquadFilter();Ae.type="bandpass",Ae.frequency.value=1150,Ae.Q.value=2.2,ve.type="square",ve.frequency.value=745,ce.type="triangle",ce.frequency.value=1490,ne.gain.setValueAtTime(0,te),ne.gain.linearRampToValueAtTime(.085*de,te+.004),ne.gain.exponentialRampToValueAtTime(1e-4,te+.3),ve.connect(Ae),ce.connect(Ae),Ae.connect(ne),ne.connect(t),ne.connect(r),ve.start(te),ce.start(te),ve.stop(te+.33),ce.stop(te+.33)}function P(te,de){let ve=e.createOscillator(),ce=e.createGain();ve.type="sine",ve.frequency.setValueAtTime(110,te),ve.frequency.exponentialRampToValueAtTime(48,te+.12),ce.gain.setValueAtTime(1e-4,te),ce.gain.linearRampToValueAtTime(.22*de,te+.006),ce.gain.exponentialRampToValueAtTime(1e-4,te+.17),ve.connect(ce),ce.connect(t),ve.start(te),ve.stop(te+.2)}let L=e.createGain();L.gain.value=1,L.connect(t);let D=e.createGain();D.gain.value=.35,L.connect(D),D.connect(r);let w=(te=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return L;let de=e.createStereoPanner();return de.pan.value=te,de.connect(L),de};function I(te,de,ve,ce,ne,Ae,ot="sine",lt=0){let ht=e.createOscillator(),V=e.createGain();if(ht.type=ot,ht.frequency.setValueAtTime(de,te),ht.frequency.exponentialRampToValueAtTime(ve,te+ce),lt){let Ct=e.createOscillator(),mt=e.createGain();Ct.frequency.value=lt,mt.gain.value=de*.012,Ct.connect(mt),mt.connect(ht.frequency),Ct.start(te),Ct.stop(te+ce+.05)}return V.gain.setValueAtTime(1e-4,te),V.gain.linearRampToValueAtTime(ne,te+Math.min(.04,ce*.25)),V.gain.setValueAtTime(ne,te+ce*.7),V.gain.exponentialRampToValueAtTime(1e-4,te+ce),ht.connect(V),V.connect(Ae),ht.start(te),ht.stop(te+ce+.02),V}function N(te,de){let ve=w(),ce=2+Math.floor(Math.random()*4),ne=3200+Math.random()*1500;for(let Ae=0;Ae<ce;Ae++){let ot=te+Ae*(.09+Math.random()*.07);I(ot,ne,ne*(1.2+Math.random()*.3),.06,de*.022,ve)}}function U(te,de){let ve=w();I(te,1120,1390,1,de*.03,ve,"sine",5.5),I(te+1.15,2350,2150,.14,de*.03,ve),I(te+1.32,1700,1520,.13,de*.028,ve),I(te+1.5,2750,2480,.36,de*.032,ve)}function z(te,de){let ve=w(),ce=1+Math.floor(Math.random()*3);for(let ne=0;ne<ce;ne++){let Ae=te+ne*.48,ot=e.createOscillator(),lt=e.createBiquadFilter(),ht=e.createGain();ot.type="sawtooth",ot.frequency.setValueAtTime(560,Ae),ot.frequency.exponentialRampToValueAtTime(420,Ae+.32),lt.type="bandpass",lt.frequency.value=1150,lt.Q.value=1.6,ht.gain.setValueAtTime(1e-4,Ae),ht.gain.linearRampToValueAtTime(de*.03,Ae+.03),ht.gain.exponentialRampToValueAtTime(1e-4,Ae+.36),ot.connect(lt),lt.connect(ht),ht.connect(ve),ot.start(Ae),ot.stop(Ae+.4)}}function O(te,de){let ve=w(),ce=2+Math.floor(Math.random()*2);for(let ne=0;ne<ce;ne++)I(te+ne*.42,1750,1150,.36,de*.022,ve,"triangle",11)}function k(te,de){let ve=w(),ce=e.createOscillator(),ne=e.createBiquadFilter(),Ae=e.createGain(),ot=240+Math.random()*220,lt=5+Math.floor(Math.random()*4);ce.type="square",ce.frequency.value=ot,ne.type="bandpass",ne.frequency.value=ot*2.4,ne.Q.value=3,Ae.gain.setValueAtTime(1e-4,te);for(let ht=0;ht<lt;ht++){let V=te+ht*.038;Ae.gain.linearRampToValueAtTime(de*.014,V+.008),Ae.gain.linearRampToValueAtTime(1e-4,V+.028)}ce.connect(ne),ne.connect(Ae),Ae.connect(ve),ce.start(te),ce.stop(te+lt*.038+.05)}function H(te,de){let ve=w(),ce=4300+Math.random()*700;for(let ne=0;ne<3;ne++)I(te+ne*.055,ce,ce*1.01,.035,de*.009,ve)}function $(te,de){let ve=w(0);for(let[ce,ne,Ae]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let ot=e.createOscillator(),lt=e.createGain();ot.type="sine",ot.frequency.value=ce,ot.detune.value=(Math.random()-.5)*8,lt.gain.setValueAtTime(1e-4,te),lt.gain.linearRampToValueAtTime(de*.05*ne,te+.03),lt.gain.exponentialRampToValueAtTime(1e-4,te+Ae),ot.connect(lt),lt.connect(ve),ot.start(te),ot.stop(te+Ae+.1)}}function le(te,de){let ve=w();for(let ce of[te,te+.22])I(ce,2650,2600,.5,de*.018,ve),I(ce,3950,3900,.35,de*.008,ve)}let ke={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},ye=te=>te>1e-4?-Math.log(1-Math.random()*.98)/te:1e9,Ne=te=>440*Math.pow(2,(te-69)/12),X=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Z=[72,74,76,79,81,84,86,88],Ee=0,Pe=e.currentTime+.2,Me=e.currentTime+3;function Ze(te){let de=X[Ee++%X.length],ve=11;for(let ce of de)for(let ne of[-5,5]){let Ae=e.createOscillator(),ot=e.createGain();Ae.type=ne<0?"sine":"triangle",Ae.frequency.value=Ne(ce),Ae.detune.value=ne,ot.gain.setValueAtTime(0,te),ot.gain.linearRampToValueAtTime(.18,te+3.5),ot.gain.setValueAtTime(.18,te+ve-4),ot.gain.linearRampToValueAtTime(0,te+ve+1),Ae.connect(ot),ot.connect(l),Ae.start(te),Ae.stop(te+ve+1.2)}}function st(te){let de=Z[Math.floor(Math.random()*Z.length)],ve=e.createOscillator(),ce=e.createOscillator(),ne=e.createGain(),Ae=e.createGain();ve.type=ce.type="sine",ve.frequency.value=Ne(de),ce.frequency.value=Ne(de)*2.01,Ae.gain.value=.25,ce.connect(Ae),Ae.connect(ne),ne.gain.setValueAtTime(0,te),ne.gain.linearRampToValueAtTime(.05,te+.02),ne.gain.exponentialRampToValueAtTime(1e-4,te+4),ve.connect(ne),ne.connect(r),ne.connect(t),ve.start(te),ce.start(te),ve.stop(te+4.2),ce.stop(te+4.2)}return{ac:e,muted:!1,tyres:d,bump(te){P(e.currentTime+.01,te)},update(te,de,ve,ce={}){let ne=e.currentTime;if((ce.bell||0)>.01)for(b<ne&&(b=ne+.02);b<ne+.12;)A(b,ce.bell),b+=.41;let Ae=ce.rain||0;x.g.gain.setTargetAtTime(Ae*.05,ne,.6),m.g.gain.setTargetAtTime(Ae*.05,ne,.6);let ot=(ce.wetRoad||0)*Math.min(1,te)**1.5,lt=.8+.2*Math.sin(ne*2.3)*Math.sin(ne*.9+1);if(d.g.gain.setTargetAtTime(ot*.045*lt,ne,.4),d.f.frequency.setTargetAtTime(900+1500*Math.min(te,2),ne,.4),Ae>.05&&ce.roof)for(T<ne&&(T=ne+.02);T<ne+.12;)R(T,Ae),T+=.04+Math.random()*.12/Ae;let ht=ce.water||0,V=.6+.4*Math.sin(ne*1.3)*Math.sin(ne*.37);v.g.gain.setTargetAtTime(ht*.035*V,ne,.25),v.f.frequency.setTargetAtTime(600+400*V,ne,.25);let Ct=.35+.65*Math.pow(.5+.5*Math.sin(ne*.23)*Math.sin(ne*.071+2),2),mt=ce.rush||0;S.g.gain.setTargetAtTime(((de.mountain||0)+(de.snow||0)*.7)*.06*Ct+mt*.055,ne,.8),S.f.frequency.setTargetAtTime(260+420*Ct+mt*500,ne,.8);let F=ce.train||0;if(g.g.gain.setTargetAtTime(F*.16,ne,.2),F>.04)for(E<ne&&(E=ne+.02);E<ne+.12;)P(E,F),P(E+.15,F*.8),E+=1.2;for(;Pe<ne+1;)Ze(Pe),Pe+=8;Me<ne+.5&&(st(Me),Me+=1.5+Math.random()*4.5);let y=ce.tunnel||0;h.g.gain.setTargetAtTime((.03+te*.06)*(1+1.6*y),ne,.35),h.f.frequency.setTargetAtTime((250+te*500)*(1+.5*y),ne,.35),_.g.gain.setTargetAtTime(y*.07,ne,.4),a.gain.setTargetAtTime(.55+.6*y,ne,.4);let q=.5+.5*Math.sin(ne*.55)*Math.sin(ne*.21+1);f.g.gain.setTargetAtTime(de.coast*(.012+q*.05),ne,.3),f.f.frequency.setTargetAtTime(400+q*900,ne,.3);let K=1-Math.min(1,Ae*1.4),ie=1-ve,Se=ce.dusk||0,he=de.snow||0,j=1-he,Q={sparrow:ve*K*.22*(.3+de.city*.5+de.sakura+de.country*.8+de.coast*.2+(de.mountain||0)*.5)*(1-he*.8),uguisu:ve*K*de.sakura*.06,crow:K*(Se*.14+ve*(de.city+de.country+(de.mountain||0)*1.5+he*2.5)*.012),gull:ve*de.coast*K*.16,frog:ie*(de.country*5+de.sakura*.6+de.coast*.3)*(1+Ae*.6)*j,cricket:ie*K*(1.6-de.city*1.1+(de.mountain||0)*.8)*j,bike:ve*K*de.city*.014,bell:he*.022+(de.mountain||0)*.006},me={sparrow:N,uguisu:U,crow:z,gull:O,frog:k,cricket:H,bike:le,bell:$};for(let Te in Q)ne<ke[Te]||(Q[Te]>1e-4&&me[Te](ne+.05,.6+Math.random()*.4),ke[Te]=ne+Math.max(.12,ye(Q[Te]||1e-6)));let He=.5+.5*Math.sin(ne*7)*Math.sin(ne*.4);p.g.gain.setTargetAtTime((de.country+de.sakura*.3)*ve*.006*He*(1-(de.snow||0)),ne,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function b0(i){let t=new Gt(.075,.05),n=new en({color:16777215,side:xn}),s=new Hi(t,n,420);s.frustumCulled=!1,s.count=0;let r=new xe("#ffd0de"),a=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(_=>new xe(_));for(let _=0;_<420;_++)s.setColorAt(_,r);let l=Array.from({length:420},()=>({p:new B(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),o=new Je,u=new gn,c=new kn,h=new B(1,1,1),f=new B,p=90,g=new Float32Array(p*3),x=Array.from({length:p},()=>({p:new B(1e9,0,0),ph:Math.random()*6.28})),m=new Mt;m.setAttribute("position",new Yt(g,3));let d=new Pr({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Gi,opacity:0}),v=new Lo(m,d);v.frustumCulled=!1;let S=(_,M,T,R,b)=>{let E=b?8+Math.random()*42:-4+Math.random()*50,A=(Math.random()-.5)*40;_.p.set(M.x+T.x*E+R.x*A,M.y-1+Math.random()*9,M.z+T.z*E+R.z*A)};return{group:[s,v],shift(_,M){for(let T of l)T.p.x-=_,T.p.z-=M;for(let T of x)T.p.x-=_,T.p.z-=M},update(_,M,T,R,b,E,A,P,L,D=0){let w=Math.floor(420*Math.min(1,E*1.1+D*.55)),I=!1;s.count=w;for(let U=0;U<w;U++){let z=l[U];f.subVectors(z.p,T);let O=f.x*R.x+f.z*R.z,k=f.x*b.x+f.z*b.z;if(z.p.x>1e8||O<-6||O>55||Math.abs(k)>24||z.p.y<A-.5){S(z,T,R,b,z.p.x<1e8);let H=Math.random()*(E+D)<D;(H!==z.leaf||H)&&(z.leaf=H,s.setColorAt(U,H?a[Math.floor(Math.random()*a.length)]:r),I=!0)}z.p.y-=z.v*_,z.p.x+=Math.sin(M*.7+z.ph)*.4*_+.25*_,z.p.z+=Math.cos(M*.5+z.ph)*.3*_,c.set(M*z.sp+z.ph,M*z.sp*.7,z.ph),u.setFromEuler(c),h.setScalar(z.leaf?1.9:1),o.compose(z.p,u,h),s.setMatrixAt(U,o)}s.instanceMatrix.needsUpdate=!0,I&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let N=P*L;if(d.opacity=N,v.visible=N>.01,v.visible){for(let U=0;U<p;U++){let z=x[U];f.subVectors(z.p,T);let O=f.x*R.x+f.z*R.z,k=f.x*b.x+f.z*b.z;if(z.p.x>1e8||O<-4||O>60||Math.abs(k)>30){let H=2+Math.random()*55,$=(Math.random()-.5)*55;z.p.set(T.x+R.x*H+b.x*$,A+.3+Math.random()*2.2,T.z+R.z*H+b.z*$)}z.p.x+=Math.sin(M*.6+z.ph*3)*.3*_,z.p.y+=Math.sin(M*.9+z.ph)*.2*_,z.p.z+=Math.cos(M*.5+z.ph*2)*.3*_,g[U*3]=z.p.x,g[U*3+1]=z.p.y,g[U*3+2]=z.p.z}m.attributes.position.needsUpdate=!0}}}}var ut=new URLSearchParams(location.search),io=ut.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();io&&document.body.classList.add("embed");ut.has("shot")&&document.body.classList.add("shot");$d(ut.has("seed")?parseInt(ut.get("seed")):Math.random()*1e9|0);Qd(ut.get("env")||"city");var vn=i=>document.getElementById(i),so=i=>{let e=vn("loading");e&&(e.textContent=i)};async function fy(){await new Promise(se=>setTimeout(se,30));let i=vn("c"),e=new _c({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ut.get("q")||(io||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?io?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=qt,e.toneMapping=Go,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Us,e.debug.checkShaderErrors=ut.has("debug");let r=new Ns;r.fog=new Ro(13032946,.0019,700);let a=new _n(52,innerWidth/innerHeight,.5,7e3),l=new Nr(16777215,3);l.castShadow=!0;let o=n==="low"?1024:n==="mid"?1536:2048;l.shadow.mapSize.set(o,o),Ah(ut.has("pcf")?parseInt(ut.get("pcf")):1);let u=62,c=l.shadow.camera,h=new Je,f=new Je;Object.assign(c,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let p=new B(0,1,0),g=new B,x=new B,m=new B,d=new B(0,1,0),v=new B(0,150,60),S=new B,_=new B,M=null,T=0,R=0,b=0;l.shadow.updateMatrices=function(){c.position.copy(v),c.lookAt(S),c.updateMatrixWorld(),c.updateProjectionMatrix(),f.multiplyMatrices(c.matrixWorldInverse,h).multiply(c.matrixWorld),c.projectionMatrix.multiply(f),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),this._updateMatrix(c,this.matrix,this._frustum)};let E=!0;l.shadow.bias=-4e-4;let A=()=>{l.shadow.normalBias=ut.has("nb")?parseFloat(ut.get("nb")):1.5*2*u/l.shadow.mapSize.x};A();{let[se,$e]=(ut.get("graze")||"0,0.12").split(",").map(Number);lp(se,$e)}r.add(l,l.target);let P=new Nr(16777215,0);P.castShadow=n!=="low"&&!ut.has("nocarsh");{let se=ut.has("carsm")?parseInt(ut.get("carsm")):n==="high"?512:384;P.shadow.mapSize.set(se,se)}if(Object.assign(P.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),P.shadow.bias=-2e-4,P.shadow.normalBias=.025,r.add(P,P.target),P.castShadow){let se=l.shadow.getFrustum(),$e=P.shadow.getFrustum();for(let oe of[ft,Io]){let gt=oe.prototype.intersectsFrustum;oe.prototype.intersectsFrustum=function(Ye){return Ye===$e?this.userData.car===!0:(Ye!==se||this.userData.car!==!0)&&gt.call(this,Ye)}}}let L=new zo(10799359,13154464,1.6);r.add(L),so("painting the town\u2026"),await new Promise(se=>setTimeout(se,10));let D=bp();Ep(D);let w=Sp(e);Lp(w.cells),Xe.uTuftV.value.set(w.tuftV[0],w.tuftV[1]);let I=pp(D.textures(e),w.tex),N=up();N.update(e,0,0,0,0),so("painting the clouds\u2026"),await new Promise(se=>setTimeout(se,10)),Dp(ut.has("leafd")?parseFloat(ut.get("leafd")):n==="high"?.72:.62),Op();let U=new wc,z=m0(),O=g0(),k=new Bc(r,U,I,z,O),H=r0();r.add(H);let $=a0(o0(e));r.add($.group);let le=l0();r.add(le.group);let ke=p0();r.add(ke.mesh);let ye=v0();ye.group.rotation.order="YXZ",r.add(ye.group),ye.group.traverse(se=>{se.userData.car=!0});let Ne=b0(I.glowTex);Ne.group.forEach(se=>r.add(se));let X=ut.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Z=y0(e,r,a,{msaa:X==="msaa"?n==="high"?4:2:0,fxaa:X==="fxaa"});Xe.uReflTex.value=Z.refl.rt.texture;let Ee=new B,Pe=new B,Me=ut.get("refl")||"auto",Ze=new B,st=ut.has("haze")?parseFloat(ut.get("haze")):1,te=gp();r.add(te.group);let de=xp();r.add(de.group);let ve=c0(ut),ce=h0(),ne=u0();r.add(ce.mesh,ne.mesh);let Ae=f0();r.add(Ae.mesh);let ot=new xe,lt=new xe,ht=new vt,V=d0();r.add(V.mesh);let Ct=ve.W.rain,mt=.4,F=5.5,y={s:Math.max(100,parseFloat(ut.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Bt(parseFloat(ut.get("t"))||.4,0,.999),todPaused:ut.has("freeze"),dist:0,spray:ut.has("nospray")?0:1,cam:{low:1,eye:2,top:3,film:4}[ut.get("cam")]??(io?4:0)},q=!1;so("building the road\u2026"),await new Promise(se=>setTimeout(se,10));let K=io?620:k.ahead;k.ahead=260;let ie=ut.has("detail")?parseFloat(ut.get("detail")):380,Se=ut.has("farleaf")?parseFloat(ut.get("farleaf")):540;for(;k.update(y.s,1e9););k.flush(),k.ahead=K;{so("preparing the light\u2026"),await new Promise(Ye=>setTimeout(Ye,10));let se=new Xt,$e=new Mt;$e.setAttribute("position",new Qe([0,0,0,.01,0,0,0,.01,0],3)),$e.setAttribute("normal",new Qe([0,1,0,0,1,0,0,1,0],3)),$e.setAttribute("uv",new Qe([0,0,1,0,0,1],2)),$e.setAttribute("color",new Qe([1,1,1,1,1,1,1,1,1],3));let oe=[I.color,I.atlas,I.foliage,I.leaf,I.lamp,I.sig,I.sodium,I.decal,I.pool,z,O];for(let Ye=0;Ye<Li.length;Ye++)oe.push(oa([Li[Ye]])),oe.push(oa([Li[Ye],Li[(Ye+1)%Li.length]]));for(let Ye of oe){let _t=new ft($e,Ye);_t.castShadow=_t.receiveShadow=!0,_t.frustumCulled=!1,se.add(_t)}se.position.set(0,0,0),r.add(se),l.target.position.set(0,0,0),l.position.set(0,150,60);let gt=[ce.mesh,ne.mesh,Ae.mesh,de.group,te.group,ke.mesh].filter(Ye=>!Ye.visible);for(let Ye of gt)Ye.visible=!0;e.setRenderTarget(Z.composer.readBuffer),e.compile(r,a),e.render(r,a),e.setRenderTarget(null);for(let Ye of gt)Ye.visible=!1;r.remove(se),$e.dispose(),Z.bloom.enabled=Z.refl.enabled=!0,Z.composer.render(0),Z.bloom.enabled=Z.refl.enabled=!1}let he={k:Math.ceil((y.s-Gs)/Vs),phase:"idle",raise:1,decided:!1,t2:0},j={},Q={},me={},He=new B,Te=new B,be=new B,qe=!1,Ke=new B,ct=new B,W=vn("spd"),Ie=vn("dist"),ae=vn("clock"),Re=vn("zone"),Fe=vn("start"),ge=vn("hint"),Ue=null,We=null,Pt=0,bt=0;function Xn(se){!q||se===We||(We=se,Re.querySelector(".jp").textContent=na[se].jp,Re.querySelector(".en").textContent=na[se].en,Re.classList.add("on"),clearTimeout(Pt),Pt=setTimeout(()=>Re.classList.remove("on"),5200))}function On(){if(!q){if(q=!0,document.body.classList.remove("pre"),!ut.has("auto"))try{Ue=M0(),Ue&&Ue.ac.resume()}catch{Ue=null}Fe.style.opacity=0,setTimeout(()=>Fe.remove(),1500),io||(ge.style.opacity=.75,setTimeout(()=>ge.style.opacity=0,9e3))}}let bn={};addEventListener("keydown",se=>{bn[se.key]=!0,(se.key==="m"||se.key==="M")&&Ks(),(se.key==="t"||se.key==="T")&&pa(),(se.key==="c"||se.key==="C")&&Si(),(se.key==="r"||se.key==="R")&&ao(),!q&&(se.key===" "||se.key==="Enter")&&On()}),addEventListener("keyup",se=>{bn[se.key]=!1});let jt=null;i.addEventListener("pointerdown",se=>{jt={id:se.pointerId,x:se.clientX,y:se.clientY,sy:se.clientY,sc:y.mult}});let ro=se=>Bt(se.sc*Math.exp(-((se.y-se.sy)/innerHeight)*3.4),mt,F);addEventListener("pointermove",se=>{jt&&se.pointerId===jt.id&&(jt.x=se.clientX,jt.y=se.clientY,y.mult=ro(jt))}),addEventListener("pointerup",()=>{jt=null}),addEventListener("pointercancel",()=>{jt=null}),i.addEventListener("touchstart",se=>{let $e=se.changedTouches[0];jt={id:"touch",x:$e.clientX,y:$e.clientY,sy:$e.clientY,sc:y.mult},se.preventDefault()},{passive:!1}),i.addEventListener("touchmove",se=>{if(!jt)return;let $e=se.changedTouches[0];jt.x=$e.clientX,jt.y=$e.clientY,y.mult=ro(jt),se.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{jt=null}),i.addEventListener("touchcancel",()=>{jt=null});function Ks(){Ue&&(Ue.toggle(),vn("snd").style.opacity=Ue.muted?.4:1)}function pa(){y.todPaused=!y.todPaused,vn("tim").style.opacity=y.todPaused?.4:1}let js=[0,1,2,4],oo={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Si(){y.cam=js[(js.indexOf(y.cam)+1)%js.length],vn("cam").textContent=oo[y.cam]||"\u25D0",y.cam===4&&er()}let Qs=["chase","side","road","crane","eye","side","road"],Ft={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function er(){let se;do se=Qs[Math.floor(Math.random()*Qs.length)];while(se===Ft.last);{let $e=yi(y.s+60);$e&&Math.abs(y.s+60-$e.s)<$t+120&&(se=Math.random()<.6?"chase":"eye")}if(Object.assign(Ft,{type:se,last:se,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),se==="road"){let $e=y.s+40+Math.random()*18,oe=Pn($e,"rw"),gt=Math.random()<.6?-1:1,Ye=gt*(oe+(gt<0?.9:1.3)),_t=U.at($e,{}),Ln=_t.y+Yr($e,Ye,_t.y,oe);Ft.anchor={x:_t.x+_t.rx*Ye,y:Math.max(Ln,_t.y)+1.05,z:_t.z+_t.rz*Ye,s:$e}}qe=!1}let Ms={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function ao(){vn("wx").textContent=Ms[ve.cycle()]}vn("wx").textContent=Ms[ve.W.mode],vn("cam").textContent=oo[y.cam]||"\u25D0",y.cam===4&&er(),vn("wx").onclick=se=>{se.stopPropagation(),ao()},vn("snd").onclick=se=>{se.stopPropagation(),Ks()},vn("tim").onclick=se=>{se.stopPropagation(),pa()},vn("cam").onclick=se=>{se.stopPropagation(),Si()};let bs=0,ma=se=>{let $e=performance.now();$e-bs<120||(bs=$e,se.cancelable&&se.type!=="click"&&se.preventDefault(),On())};for(let se of["touchstart","pointerdown","mousedown","click"])Fe.addEventListener(se,ma,{passive:!1});let ga=()=>{Ue&&Ue.ac.state!=="running"&&Ue.ac.resume()};for(let se of["touchend","click","keydown"])addEventListener(se,ga,{passive:!0});document.addEventListener("visibilitychange",()=>{Ue&&(document.hidden?Ue.ac.suspend():Ue.ac.resume())});let Ss=!1,xa="",Ts=52,Es=0;function lo(){let se=innerWidth,$e=innerHeight,oe=se/$e,gt=se+"x"+$e+"@"+s;gt!==xa&&(xa=gt,e.setPixelRatio(s),e.setSize(se,$e,!1),Z.composer.setPixelRatio(s),Z.composer.setSize(se,$e),a.aspect=oe,Ts=oe>=1?52:Bt(2*Math.atan(Math.tan(34*Math.PI/180)/oe)*180/Math.PI,52,80),a.fov=Ts+Es,a.updateProjectionMatrix(),Z.grade.uniforms.uAspect.value=oe,Z.grade.uniforms.uTexel.value.set(1/Z.composer.readBuffer.width,1/Z.composer.readBuffer.height),Xe.uReflRes.value.set(Z.composer.readBuffer.width,Z.composer.readBuffer.height))}addEventListener("resize",()=>{Ss=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Ss=!0}),lo();let C=0;function G(se=!0){if(s>1.05)s=Math.max(1,s-.25),Ss=!0;else if(E)E=!1,Z.bloom.enabled=!1;else if(l.shadow.mapSize.x>1024)l.shadow.mapSize.set(1024,1024),A(),l.shadow.map&&(l.shadow.map.dispose(),l.shadow.map=null);else if(k.ahead>430)k.ahead=430;else return;if(C++,se)try{localStorage.setItem("icd-q",String(C))}catch{}}try{let se=parseInt(localStorage.getItem("icd-q")||"0");if(!ut.has("q"))for(let $e=0;$e<Math.min(se,6);$e++)G(!1);C=Math.max(C,se||0)}catch{}let ee=performance.now(),Y=0,J=0,Le=0,Be=()=>1-fe.night,De=0,we=0,_e=ut.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;_e&&(_e.gl=e.getContext(),_e.tq=_e.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let je={p:-1,a:new B,b:new B,next:5},ze={lat:0,lon:0,road:0,jolt:0,kick:0,u:y.u,vu:0,v:0,s:y.s,yaw:0,brake:0,rk:NaN,rb:null},Ve=[-2.5335,-1.4665,1.4665,2.5335],St=[1.12,-1.12],Jt=[-24.5,24.5];function Nt(se){requestAnimationFrame(Nt);let $e=performance.now();Ss&&(Ss=!1,lo());let oe=Math.min(.05,Math.max(0,(se-ee)/1e3));ee=se,Y+=oe,y.steer=0,(bn.ArrowLeft||bn.a||bn.A)&&(y.steer=-1),(bn.ArrowRight||bn.d||bn.D)&&(y.steer=1),(bn.ArrowUp||bn.w||bn.W)&&(y.mult=Bt(y.mult*Math.exp(oe*.9),mt,F)),(bn.ArrowDown||bn.s||bn.S)&&(y.mult=Bt(y.mult*Math.exp(-oe*.9),mt,F)),jt&&Math.abs(jt.y-jt.sy)<30&&(y.steer=jt.x<innerWidth/2?-1:1),y.steer&&(y.lastInput=se,y.uHome=y.u);let gt=Wr(he.k);y.s-gt>24&&(he.k++,gt=Wr(he.k),Object.assign(he,{phase:"idle",raise:1,decided:!1}));let Ye=ia(gt),_t=gt-y.s;Ye&&!he.decided&&_t<150&&(he.decided=!0,_t>75&&q&&y.speed*y.speed/2.5<_t-14&&(ut.has("xing")||Kn(he.k,99)<.8)&&(he.phase="warn",de.start(gt,Kn(he.k,7)<.5?1:-1,16))),he.phase==="warn"?(he.raise=Math.max(0,he.raise-oe/6),de.st.cleared&&(he.phase="clear",he.t2=0)):he.phase==="clear"?(he.raise=Math.max(0,he.raise-oe/6),(he.t2+=oe)>2.2&&(he.phase="raise")):he.phase==="raise"&&(he.raise=Math.min(1,he.raise+oe/5),he.raise>=1&&(he.phase="idle"));let Ln=he.phase==="warn"||he.phase==="clear"||he.phase==="raise"&&he.raise<.25,qn=Pn(y.s,"speed")*y.mult*(q?1:.55);if(he.phase!=="idle"&&he.raise<.8&&_t>0){let Ce=_t-11.2,et=Ce>0?Math.sqrt(2*1.25*Ce):0;qn=Math.min(qn,et),y.speed=Math.min(y.speed,et)}ut.has("park")&&(qn=0,y.speed=0),y.speed+=(qn-y.speed)*Math.min(1,oe*.5),y.s+=y.speed*oe,y.dist+=y.speed*oe;let ci=Pn(y.s,"rw");y.steer?y.u=Bt(y.u+y.steer*oe*2.4,-ci+.85,ci-.85):se-y.lastInput>3e3&&(y.u+=(Bt(y.uHome,-ci+.85,ci-.85)+Math.sin(Y/11)*.1-y.u)*Math.min(1,oe*.9)),!y.todPaused&&q&&(y.tod=(y.tod+oe/480*(fe.night>.5?1.7:1))%1),n0(y.tod),ve.update(oe);let dt=ve.W.ov,wt=ve.W.rain;s0(dt,wt),Ct=Bt(Ct+(wt>.25?oe/18:-oe/120),0,1);let ui=performance.now();k.update(y.s,q?3.5:14);let It=performance.now();if(U.at(y.s,j),Math.abs(j.x-k.origin.x)>900||Math.abs(j.z-k.origin.z)>900){let Ce=Math.round(j.x)-k.origin.x,et=Math.round(j.z)-k.origin.z;k.setOrigin(Math.round(j.x),Math.round(j.z)),He.x-=Ce,He.z-=et,Te.x-=Ce,Te.z-=et,Ne.shift&&Ne.shift(Ce,et),V.shift(Ce,et),Ae.shift(Ce,et)}let tn=k.origin.x,dn=k.origin.z,va=(U.at(y.s+1.5,me).y-U.at(y.s-1.5,Q).y)/3,S0=(me.h-Q.h)/3;if(ye.group.position.set(j.x+j.rx*y.u-tn,j.y+.01,j.z+j.rz*y.u-dn),oe>0){let Ce=ze.vu+((y.u-ze.u)/oe-ze.vu)*Math.min(1,oe*6),et=(Ce-ze.vu)/oe;ze.u=y.u,ze.vu=Ce,ze.lat=et-y.speed*y.speed*S0,ze.lon+=((y.speed-ze.v)/oe-ze.lon)*Math.min(1,oe*8),ze.v=y.speed;let tt=he.phase!=="idle"&&_t>0&&_t<20&&y.speed<.5;if(ze.brake=ze.lon<-.6||tt?1:ze.lon>-.3?0:ze.brake,ze.yaw=-Bt(Math.atan(Ce/Math.max(y.speed,6))*.8,-.1,.1),ze.road=.004*Math.sin(y.s*.48)+.003*Math.sin(y.s*.86+1.3),ze.jolt=ze.kick=0,Ye)for(let Tt=0;Tt<4;Tt++)for(let zt=0;zt<2;zt++){let kt=gt+Ve[Tt]-St[zt];if(ze.s<kt&&y.s>=kt){let Ht=.05+Math.min(y.speed,25)*.004;ze.jolt+=Ht,ze.kick+=zt?Ht*.9:-Ht*.9,Ue&&Ue.bump(.25+Math.min(y.speed,25)/50)}}{let Tt=Math.round((y.s-qr)/Ws);Tt!==ze.rk&&(ze.rk=Tt,ze.rb=Di(y.s));let zt=ze.rb;if(zt)for(let kt=0;kt<2;kt++)for(let Ht=0;Ht<2;Ht++){let Bn=zt.s+Jt[kt]-St[Ht];if(ze.s<Bn&&y.s>=Bn){let pn=.035+Math.min(y.speed,25)*.003;ze.jolt+=pn,ze.kick+=Ht?pn*.9:-pn*.9,Ue&&Ue.bump(.2+Math.min(y.speed,25)/60)}}}ze.s=y.s}ye.group.rotation.set(-Math.atan(va),j.h+ze.yaw,0);let ws=yi(y.s);ws&&Math.abs(y.s-ws.s)<700?(U.at(ws.s-Kt,me),Xe.uTunA.value.set(me.x-tn,me.y,me.z-dn),U.at(ws.s+Kt,me),Xe.uTunB.value.set(me.x-tn,me.y,me.z-dn),Xe.uTunR.value=Pn(ws.s,"rw")+1.7):(Xe.uTunA.value.set(0,-1e4,0),Xe.uTunB.value.set(0,-1e4,0));let Wc=ws&&Math.abs(y.s+1-ws.s)<Kt-1.5?1:0;we+=(Wc-we)*Math.min(1,oe*(Wc?1.6:.7)),Xe.uCarPos.value.set(ye.group.position.x+j.fx*1.7,ye.group.position.y+.8,ye.group.position.z+j.fz*1.7),Xe.uCarFwd.value.set(j.fx,-.05,j.fz).normalize(),Xe.uHead.value=Wc,ye.update(oe,y.speed,Math.max(fe.night,we),wt,ze),te.update(Ye&&_t>-24&&_t<700?Ic(U,gt):null,k.origin,he.raise,Ln,Y),de.update(oe,U,k.origin,Lt(.15,.8,fe.night),Pn(gt,"rw")+3.2);let Kh=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ut.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}],As=new B,co=6,jh=y.cam===2;if(y.cam===4){Ft.t+=oe;{let tt=yi(y.s+30);tt&&Math.abs(y.s+30-tt.s)<$t+70&&Ft.type!=="chase"&&Ft.type!=="eye"&&(Ft.type="chase",Ft.t=0,Ft.dur=20,qe=!1)}(Ft.t>Ft.dur+(Ft.type==="road"?8:0)||Ft.type==="road"&&Ft.anchor&&y.s>Ft.anchor.s+24)&&er();let Ce=ye.group.position,et=Ft.type;if(et==="chase"||et==="eye"){let tt=Kh[et==="eye"?2:0];jh=et==="eye",U.at(y.s-tt.back,Q),U.at(y.s+tt.ahead,me),be.set(Q.x+Q.rx*y.u*tt.cu-tn,Q.y+tt.up,Q.z+Q.rz*y.u*tt.cu-dn),As.set(me.x+me.rx*y.u*tt.lu-tn,me.y+tt.lookY,me.z+me.rz*y.u*tt.lu-dn)}else if(et==="side"){U.at(y.s+1.5,Q);let tt=Dt(y.s),Tt=tt.city+tt.sakura>.5,zt=Pn(y.s,"rw"),kt=Ft.sideSign>0?zt+(Tt?1.45:3.4):-(zt+1.5),Ht=Q.y+Yr(y.s+1.5,kt,Q.y,zt);be.set(Q.x+Q.rx*kt-tn,Math.max(Ht+1.55,Q.y+1.25),Q.z+Q.rz*kt-dn),As.set(Ce.x+j.fx*2.5,Ce.y+.9,Ce.z+j.fz*2.5),co=4}else if(et==="road"&&Ft.anchor)be.set(Ft.anchor.x-tn,Ft.anchor.y,Ft.anchor.z-dn),As.set(Ce.x,Ce.y+.85,Ce.z),co=30;else{U.at(y.s-20,Q),U.at(y.s+34,me);let tt=14+Math.min(Ft.t,20)*.35;be.set(Q.x+Q.rx*y.u*.4-tn,Q.y+tt,Q.z+Q.rz*y.u*.4-dn),As.set(me.x-tn,me.y+1,me.z-dn),co=3}}else{let Ce=Kh[y.cam];U.at(y.s-Ce.back,Q),U.at(y.s+Ce.ahead,me);let et=y.u*Ce.cu,tt=et+(Ce.side||0);be.set(Q.x+Q.rx*tt-tn,Q.y+Ce.up,Q.z+Q.rz*tt-dn),As.set(me.x+me.rx*y.u*Ce.lu-tn,me.y+Ce.lookY,me.z+me.rz*y.u*Ce.lu-dn)}ye.group.visible=!jh,y.cam===3?a.up.set(j.fx,0,j.fz):a.up.set(0,1,0),qe||(He.copy(be),Te.copy(As),qe=!0);let Qh=1+Math.max(0,y.speed-12)/12;He.lerp(be,1-Math.exp(-oe*co*Qh)),Te.lerp(As,1-Math.exp(-oe*Math.min(co,8)*Qh));{let Ce=y.cam===3?0:Math.min(Bt((y.speed-16)*.22,0,11),Math.max(0,84-Ts));Es+=(Ce-Es)*Math.min(1,oe*1.5),Math.abs(a.fov-(Ts+Es))>.02&&(a.fov=Ts+Es,a.updateProjectionMatrix())}a.position.copy(He),a.lookAt(Te),ut.has("yaw")&&a.rotateY(parseFloat(ut.get("yaw"))*Math.PI/180),ut.has("pitch")&&a.rotateX(parseFloat(ut.get("pitch"))*Math.PI/180),Ke.set(j.fx,0,j.fz),ct.set(j.rx,0,j.rz);let Qt=Dt(y.s);l.color.copy(fe.sunCol),l.intensity=fe.sunI;{let Ce=fe.lightDir;if(p.angleTo(Ce)>.1){let pn=0;if(q&&!y.todPaused)for(let Dn=1;Dn<=60&&!(qh(y.tod+Dn*.001,_).angleTo(Ce)>.09);Dn++)pn=Dn;qh(y.tod+pn*.001,p),T=R=0}g.crossVectors(d,p).normalize(),x.crossVectors(p,g),m.set(ye.group.position.x+j.fx*26,ye.group.position.y,ye.group.position.z+j.fz*26),l.target.position.copy(m),l.position.copy(m).addScaledVector(Ce,200);let et=2*u/l.shadow.mapSize.x,tt=p.x/p.y-Ce.x/Ce.y,Tt=p.z/p.y-Ce.z/Ce.y;et!==b&&(b=et,T=R=0);{let pn=Math.round(ye.group.position.y);if(M===null)M=pn;else if(Math.abs(ye.group.position.y-M)>3){let Dn=pn-M;T-=Dn*(tt*g.x+Tt*g.z),R-=Dn*(tt*x.x+Tt*x.z),M=pn}}let zt=k.origin.x,kt=k.origin.z,Ht=m.dot(g)+zt*g.x+kt*g.z-T,Bn=m.dot(x)+zt*x.x+kt*x.z-R;m.addScaledVector(g,Math.round(Ht/et)*et-Ht).addScaledVector(x,Math.round(Bn/et)*et-Bn),S.copy(m),v.copy(m).addScaledVector(p,200),h.set(1,tt,0,-M*tt,0,1,0,0,0,Tt,1,-M*Tt,0,0,0,1)}P.target.position.set(ye.group.position.x,ye.group.position.y+.9,ye.group.position.z),P.position.copy(P.target.position).addScaledVector(fe.lightDir,12),L.color.copy(fe.hemiSky),L.groundColor.copy(fe.hemiGround),L.intensity=fe.hemiI;{let Ce=(1-fe.night)*(1-dt);if(Ce>.001){a.getWorldDirection(Ze);let et=Ze.x,tt=Ze.z,Tt=Math.hypot(et,tt)||1,zt=fe.sunDir,kt=0;for(let Bn=-2;Bn<=2;Bn++){let pn=Bn*.3,Dn=Math.cos(pn),Rs=Math.sin(pn),ir=(et*Dn-tt*Rs)/Tt,sr=(et*Rs+tt*Dn)/Tt,uo=Math.max(0,ir*zt.x+sr*zt.z),rr=uo*uo;kt+=rr*rr*rr}let Ht=kt/5*(.1+.35*fe.warm)*1.4*Ce*st;fe.fog.r+=fe.sunCol.r*Ht,fe.fog.g+=fe.sunCol.g*Ht,fe.fog.b+=fe.sunCol.b*Ht}}r.fog.color.copy(fe.fog);let ef=(Qt.city*.0022+Qt.sakura*.0019+Qt.coast*.0011+Qt.country*.0014+Qt.mountain*.0017+Qt.snow*.0021)*(1+fe.night*.25);r.fog.near=ef*(1+.55*dt+.45*wt),r.fog.far=k.ahead*.92,Xe.uSkyHor.value.copy(fe.horizon),Xe.uSkyZen.value.copy(fe.zenith),Xe.uTime.value=Y,Xe.uWet.value=Ct*(1-Qt.snow);{let Ce=Xe.uWet.value>.04&&n!=="low"&&we<.5&&Me!=="0";if(Z.refl.enabled=Ce&&Me!=="taps",Xe.uReflOn.value=Ce&&Me!=="copy"?1:0,Ce){a.getWorldDirection(Pe),Pe.y=0,Pe.normalize(),Ee.copy(a.position).addScaledVector(Pe,1e4).project(a),Xe.uHorizon.value=Ee.y*.5+.5;let et=Math.max(.5,a.position.y-ye.group.position.y);Xe.uReflK.value=Bt(1-2*et/(5+et),.05,1)}}Xe.uOrigin.value.set(k.origin.x,k.origin.z),Xe.uWind.value=1+.8*wt,Xe.uCloudSh.value=(1-dt)*Lt(.04,.3,fe.sunEl)*(1-fe.night),Xe.uCloudSh.value>.001&&N.update(e,a.position.x,a.position.z,k.origin.x,k.origin.z);let ti=H.material.uniforms;if(ti.uNight.value=fe.night,ti.uWarm.value=fe.warm,ti.uTime.value=Y,ti.uCirrusCol.value.copy(fe.cLit).lerp(fe.horizon,.25),ti.uCirrus.value=.6*(1-dt)*(1-.65*Lt(.4,.9,fe.night)),ti.uOvercast.value=dt,ti.uMilky.value=Lt(.55,.95,fe.night)*(1-dt),fe.night>.65&&dt<.3&&je.p<0&&(je.next-=oe)<0){let Ce=Math.atan2(j.fx,j.fz)+(Math.random()-.5)*1.5,et=.45+Math.random()*.6,tt=.22+Math.random()*.2,Tt=(Math.random()-.5)*.6,zt=(kt,Ht)=>new B(Math.cos(kt)*Math.sin(Ht),Math.sin(kt),Math.cos(kt)*Math.cos(Ht));je.a.copy(zt(et,Ce)),je.b.copy(zt(et-tt,Ce+Tt)),je.p=0,je.next=ut.has("meteors")?1:6+Math.random()*20}je.p>=0&&(je.p+=oe/.85,je.p>1.3&&(je.p=-1)),ti.uMetP.value=je.p,ti.uMetA.value.copy(je.a),ti.uMetB.value.copy(je.b),ti.uDeckLit.value.copy(fe.horizon).lerp(fe.cLit,.35),ti.uDeckDark.value.copy(fe.zenith).lerp(fe.horizon,.25).multiplyScalar(.82),H.position.copy(a.position),$.update(a.position,oe),le.update(a.position,Math.max(Qt.snow,Dt(y.s+600).snow*.7));let _a=0;for(let Ce of[-150,0,250,500,800])_a=Math.max(_a,Dt(y.s+Ce).coast);ke.mesh.visible=_a>.001,ke.update(a.position,Y,ef*.8,Lt(0,.35,_a)),O.uniforms.uTime.value=Y,O.uniforms.uFogD.value=r.fog.near,O.uniforms.uNight.value=fe.night,O.uniforms.uSpecK.value=1-fe.overcast*.85,Xe.uSunDir.value.copy(fe.lightDir),Xe.uSunCol.value.copy(fe.sunCol),z.uniforms.uTime.value=Y,z.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*Be());let ni=Lt(.15,.8,fe.night);I.atlas.emissiveIntensity=.1+ni*1.05,I.lamp.color.setRGB(.85,.85,.8).lerp(new xe(3.6,2.8,1.8),ni),I.pool.opacity=ni*.42*(1+.8*Ct);{let Ce=ye.group.position,et=ye.lamps,tt=Math.max(ni,we),Tt=0,zt=0,kt=0,Ht=-1e3,Bn=0,pn=0,Dn=-1e3,Rs=0,ir=900,sr=900;if(tt>.01){let sf=Math.floor(y.s/Wt);for(let Xc=sf-1;Xc<=sf+1;Xc++){let Ma=k.chunks.get(Xc);if(!Ma||!Ma.lamps)continue;let ho=Ma.lamps,rf=Ma.group.position;for(let or=0;or<ho.length;or+=4){let qc=ho[or]+rf.x,Yc=ho[or+1],Zc=ho[or+2]+rf.z,$c=(qc-Ce.x)**2+(Yc-Ce.y)**2+(Zc-Ce.z)**2,ba=ho[or+3]/(1+.045*$c);ba>Tt?(zt=Tt,sr=ir,pn=kt,Dn=Ht,Rs=Bn,Tt=ba,ir=$c,kt=qc,Ht=Yc,Bn=Zc):ba>zt&&(zt=ba,sr=$c,pn=qc,Dn=Yc,Rs=Zc)}}a.updateMatrixWorld()}let uo=tt*Tt*(1+.045*ir)*(1-Lt(18,30,Math.sqrt(ir))),rr=tt*zt*(1+.045*sr)*(1-Lt(18,30,Math.sqrt(sr)));et[0].set(kt,Ht,Bn,1).applyMatrix4(a.matrixWorldInverse).w=uo,et[1].set(pn,Dn,Rs,1).applyMatrix4(a.matrixWorldInverse).w=rr,ye.lampCol.setRGB(1,.8-.32*we,.52-.38*we),ai.uLampW.value[0].set(kt,Ht,Bn,uo),ai.uLampW.value[1].set(pn,Dn,Rs,rr),ai.uLampCol.value.copy(ye.lampCol),ye.head.getWorldPosition(ai.uHeadPos.value),ye.head.target.getWorldPosition(Ze),ai.uHeadDir.value.copy(Ze).sub(ai.uHeadPos.value).normalize(),ai.uHeadI.value=ye.head.intensity/60}I.pool.visible=I.pool.opacity>.003,k.lod(y.s,ie,ni>.15,Se),Xe.uNight.value=ni,Z.bloom.strength=Rt(.32,.55,ni),Z.bloom.threshold=Rt(1.35,.95,ni),Z.bloom.radius=Rt(.55,.35,ni);{let Ce=Math.max(ni,we,Lt(.25,.6,fe.warm)*(1-dt));Z.bloom.enabled=E&&Ce>.02,Z.bloom.strength*=Math.min(1,Ce*4)}e.toneMappingExposure=Rt(1,1.15,ni)*(1+.35*we),be.copy(a.position).addScaledVector(fe.sunDir,1e3).project(a);let tr=Z.grade.uniforms,T0=be.z<1?1:0,E0=Math.max(Math.abs(be.x),Math.abs(be.y));tr.uSun.value.set(be.x*.5+.5,be.y*.5+.5),tr.uSunVis.value=T0*(1-Lt(1,1.9,E0))*Lt(-.02,.15,fe.sunEl)*(1-fe.night)*(1-dt)*(1-we),tr.uSat.value=1.1-.12*dt,tr.uDay.value=Be(),tr.uWarm.value=fe.warm,tr.uTime.value=Y,ce.update(a.position,Y,wt*(1-we)*(1-Qt.snow),Be());{let Ce=Bt(Qt.snow+Qt.mountain*.6*Math.max(fe.night,1-Lt(.27,.36,y.tod)),0,1)*(1-we);ot.copy(fe.fog).multiplyScalar(.92),lt.copy(fe.sunCol).multiplyScalar(Math.min(1,fe.sunI/3)*(1-dt)*.6);let et=Math.cos(ye.group.rotation.y),tt=Math.sin(ye.group.rotation.y),Tt=ye.group.position;ht.set(Tt.x-1.75*tt,Tt.y+.95,Tt.z-1.75*et,Math.max(fe.night,we)*(.5+1.2*ze.brake)),Ae.update(oe,ye.group,y.speed,Xe.uWet.value*(1-we),Qt.snow*(1-we),Ce,ot,lt,ht,a.position,y.spray)}ne.update(a.position,Y,Qt.snow*(.3+.7*dt)*(1-we),Be()),V.setFog(r.fog.near),V.update(oe,Y,a.position,Ke,ct,Qt,Be(),wt,ye.group.position);let w0=performance.now();Ne.update(oe,Y,a.position,Ke,ct,Qt.sakura*(1-we),j.y,ni,(Qt.country+Qt.sakura*.4)*(1-wt)*(1-we),Qt.mountain*(1-we));let A0=performance.now();if(Ue){U.at(gt,me);let Ce=Math.hypot(me.x-k.origin.x-a.position.x,me.z-k.origin.z-a.position.z),et=de.st.active?de.group.position.distanceTo(a.position):1e9,tt=y.speed/15;Ue.update(tt<1.5?tt:1.5+(tt-1.5)*.4,Qt,Be(),{rush:Bt((y.speed-25)/40,0,1),bell:Ln?Math.pow(Bt(1-Ce/260,0,1),1.5):0,train:Math.pow(Bt(1-et/230,0,1),2),rain:wt*(1-we)*(1-Qt.snow),wetRoad:Xe.uWet.value*(1-we),roof:y.cam!==2,tunnel:we,water:(()=>{let Tt=Di(y.s);return Math.max(Tt?1-Lt(12,150,Math.abs(y.s-Tt.s)):0,Qt.mountain*.45)})(),dusk:fe.warm*(y.tod>.5?1:.3)})}Xn(Zt(y.s+40)),_e&&(e.info.autoReset=!1,e.info.reset());let ya=null;_e&&_e.tq&&(ya=_e.gl.createQuery(),_e.gl.beginQuery(_e.tq.TIME_ELAPSED_EXT,ya));let tf=performance.now();Z.composer.render(oe);let nf=performance.now();if(ya){let Ce=_e.gl;for(Ce.endQuery(_e.tq.TIME_ELAPSED_EXT),_e.pend.push(ya);_e.pend.length&&Ce.getQueryParameter(_e.pend[0],Ce.QUERY_RESULT_AVAILABLE);){let et=_e.pend.shift(),tt=Ce.getQueryParameter(et,Ce.QUERY_RESULT);Ce.deleteQuery(et),Ce.getParameter(_e.tq.GPU_DISJOINT_EXT)||(_e.gpu=tt/1e6,_e.gpuN++,_e.gpuSum+=_e.gpu,_e.gpu>_e.gpuMax&&(_e.gpuMax=_e.gpu))}}let nr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(nr.world=nr.world*.95+(It-ui)*.05,nr.parts=nr.parts*.95+(A0-w0)*.05,nr.render=nr.render*.95+(nf-tf)*.05,De=De*.95+(performance.now()-$e)*.05,window.__ft=De,_e){let Ce=e.info,et=performance.now()-$e,tt={t:+Y.toFixed(2),s:Math.round(y.s),total:+et.toFixed(1),world:+(It-ui).toFixed(1),render:+(nf-tf).toFixed(1),gpu:+(_e.gpu||0).toFixed(1),progs:Ce.programs.length-_e.progs,geos:Ce.memory.geometries-_e.geos,tex:Ce.memory.textures-_e.tex,calls:Ce.render.calls,tris:Ce.render.triangles};tt.progs>0&&q&&(tt.newProgs=Ce.programs.slice(-tt.progs).map(Tt=>(Tt.name||"")+":"+String(Tt.cacheKey).slice(0,60))),_e.progs=Ce.programs.length,_e.geos=Ce.memory.geometries,_e.tex=Ce.memory.textures,_e.frames++,_e.sum+=et,et>_e.max&&(_e.max=et),et>12&&q&&_e.spikes.push(tt),_e.last=tt}if((bt+=oe)>.25){bt=0,W.textContent=Math.round(y.speed*3.6),Ie.textContent=(y.dist/1e3).toFixed(1);let Ce=Math.floor(y.tod*1440);ae.textContent=`${String(Math.floor(Ce/60)).padStart(2,"0")}:${String(Ce%60).padStart(2,"0")}`}J++,q&&J>150&&oe>.03?Le+=oe:Le=Math.max(0,Le-oe*.5),Le>3&&!ut.has("q")&&(Le=0,G())}window.__dbg={renderer:e,st:y,scene:r,camera:a,world:k,TOD:fe,X:he,train:de,weather:ve,U:Xe,birds:V,cine:Ft,post:Z,car:ye,sun:l,M:I,clouds:$,sky:H,mountains:le,shadowDir:p,CM:ze,spray:Ae,get audio(){return Ue}},so(""),Fe.classList.add("ready"),ut.has("auto")&&On(),requestAnimationFrame(Nt)}fy().catch(i=>{console.error(i),so("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
