var rf=0,ru=1,of=2;var As=1,af=2,_r=3,ls=0,pn=1,hn=2,Fn=0,yr=1,Ui=2,ou=3,au=4,lf=5;var Rs=100,cf=101,uf=102,hf=103,ff=104,df=200,pf=201,mf=202,gf=203,lu=204,cu=205,xf=206,vf=207,_f=208,yf=209,Mf=210,bf=211,Sf=212,Tf=213,Ef=214,La=0,Da=1,Na=2,rr=3,Ua=4,Fa=5,Oa=6,Ba=7,uu=0,wf=1,Af=2,ci=0,hu=1,fu=2,du=3,pu=4,mu=5,gu=6,wo=7;var xu=300,cs=301,Cs=302,ul=303,hl=304,Ao=306,or=1e3,xi=1001,za=1002,Kt=1003,Rf=1004;var Ro=1005;var Lt=1006,fl=1007;var On=1008;var yn=1009,vu=1010,_u=1011,Mr=1012,dl=1013,ui=1014,Qn=1015,Qt=1016,pl=1017,ml=1018,br=1020,yu=35902,Mu=35899,bu=1021,Su=1022,Bn=1023,vi=1026,us=1027,Ps=1028,gl=1029,hs=1030,xl=1031;var vl=1033,Co=33776,Po=33777,Io=33778,Lo=33779,_l=35840,yl=35841,Ml=35842,bl=35843,Sl=36196,Tl=37492,El=37496,wl=37488,Al=37489,Do=37490,Rl=37491,Cl=37808,Pl=37809,Il=37810,Ll=37811,Dl=37812,Nl=37813,Ul=37814,Fl=37815,Ol=37816,Bl=37817,zl=37818,kl=37819,Hl=37820,Vl=37821,Gl=36492,Wl=36494,Xl=36495,ql=36283,Yl=36284,No=36285,Zl=36286;var io=2300,ka=2301,Pa=2302,$c=2303,Kc=2400,jc=2401,Qc=2402;var Cf=3200;var Jl=0,Pf=1,hi="",zt="srgb",so="srgb-linear",ro="linear",St="srgb";var Ia=7680;var If=519,Lf=512,Df=513,Nf=514,$l=515,Uf=516,Ff=517,Kl=518,Of=519,Bf=35044;var Tu="300 es",ai=2e3,ar=2001;function jp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zf(){let i=oo("canvas");return i.style.display="block",i}var Ih={},lr=null;function Eu(...i){let e="THREE."+i.shift();lr?lr("log",e,...i):console.log(e,...i)}function kf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=kf(i);let e="THREE."+i.shift();if(lr)lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=kf(i);let e="THREE."+i.shift();if(lr)lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Es(...i){let e=i.join(" ");e in Ih||(Ih[e]=!0,Qe(...i))}function Hf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Vf={[La]:Da,[Na]:Oa,[Ua]:Ba,[rr]:Fa,[Da]:La,[Oa]:Na,[Ba]:Ua,[Fa]:rr},_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wc=Math.PI/180,ao=180/Math.PI;function Uo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function e0(i,e){return(i%e+e)%e}function Ac(i,e,t){return(1-t)*i+t*e}function Jr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pu=class Pu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pu.prototype.isVector2=!0;var Ge=Pu,cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,l){let o=n[s+0],u=n[s+1],c=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||o!==f||u!==p||c!==g){let m=o*f+u*p+c*g+h*x;m<0&&(f=-f,p=-p,g=-g,x=-x,m=-m);let d=1-l;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);d=Math.sin(d*v)/S,l=Math.sin(l*v)/S,o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+x*l}else{o=o*d+f*l,u=u*d+p*l,c=c*d+g*l,h=h*d+x*l;let v=1/Math.sqrt(o*o+u*u+c*c+h*h);o*=v,u*=v,c*=v,h*=v}}e[t]=o,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let l=n[s],o=n[s+1],u=n[s+2],c=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=l*g+c*h+o*p-u*f,e[t+1]=o*g+c*f+u*h-l*p,e[t+2]=u*g+c*p+l*f-o*h,e[t+3]=c*g-l*h-o*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,u=l(n/2),c=l(s/2),h=l(r/2),f=o(n/2),p=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],u=t[2],c=t[6],h=t[10],f=n+l+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>l&&n>h){let p=2*Math.sqrt(1+n-l-h);this._w=(c-o)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(l>h){let p=2*Math.sqrt(1+l-n-h);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(o+c)/p}else{let p=2*Math.sqrt(1+h-n-l);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,u=t._z,c=t._w;return this._x=n*c+a*l+s*u-r*o,this._y=s*c+a*o+r*l-n*u,this._z=r*c+a*u+n*o-s*l,this._w=a*c-n*l-s*o-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){let u=Math.acos(l),c=Math.sin(u);o=Math.sin(o*u)/c,t=Math.sin(t*u)/c,this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Iu=class Iu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,u=2*(a*s-l*n),c=2*(l*t-r*s),h=2*(r*n-a*t);return this.x=t+o*u+a*h-l*c,this.y=n+o*c+l*u-r*h,this.z=s+o*h+r*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Iu.prototype.isVector3=!0;var B=Iu,Rc=new B,Lh=new cn,Lu=class Lu{constructor(e,t,n,s,r,a,l,o,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,u)}set(e,t,n,s,r,a,l,o,u){let c=this.elements;return c[0]=e,c[1]=s,c[2]=l,c[3]=t,c[4]=r,c[5]=o,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[3],o=n[6],u=n[1],c=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],v=s[1],S=s[4],_=s[7],y=s[2],b=s[5],A=s[8];return r[0]=a*x+l*v+o*y,r[3]=a*m+l*S+o*b,r[6]=a*d+l*_+o*A,r[1]=u*x+c*v+h*y,r[4]=u*m+c*S+h*b,r[7]=u*d+c*_+h*A,r[2]=f*x+p*v+g*y,r[5]=f*m+p*S+g*b,r[8]=f*d+p*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8];return t*a*c-t*l*u-n*r*c+n*l*o+s*r*u-s*a*o}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=c*a-l*u,f=l*o-c*r,p=u*r-a*o,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*u-c*n)*x,e[2]=(l*n-s*a)*x,e[3]=f*x,e[4]=(c*t-s*o)*x,e[5]=(s*r-l*t)*x,e[6]=p*x,e[7]=(n*o-u*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,l){let o=Math.cos(r),u=Math.sin(r);return this.set(n*o,n*u,-n*(o*a+u*l)+a+e,-s*u,s*o,-s*(-u*a+o*l)+l+t,0,0,1),this}scale(e,t){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lu.prototype.isMatrix3=!0;var st=Lu,Cc=new st,Dh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){let i={enabled:!0,workingColorSpace:so,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[so]:{primaries:e,whitePoint:n,transfer:ro,toXYZ:Dh,fromXYZ:Nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Dh,fromXYZ:Nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}var pt=t0();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ws,Ha=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ws===void 0&&(Ws=oo("canvas")),Ws.width=e.width,Ws.height=e.height;let s=Ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n0=0,cr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Pc(s[a].image)):r.push(Pc(s[a]))}else r=Pc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var i0=0,Ic=new B,An=class i extends _i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xi,s=xi,r=Lt,a=On,l=Bn,o=yn,u=i.DEFAULT_ANISOTROPY,c=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Uo(),this.name="",this.source=new cr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ic).x}get height(){return this.source.getSize(Ic).y}get depth(){return this.source.getSize(Ic).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=xu;An.DEFAULT_ANISOTROPY=1;var Du=class Du{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,o=e.elements,u=o[0],c=o[4],h=o[8],f=o[1],p=o[5],g=o[9],x=o[2],m=o[6],d=o[10];if(Math.abs(c-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(u+1)/2,_=(p+1)/2,y=(d+1)/2,b=(c+f)/4,A=(h+x)/4,M=(g+m)/4;return S>_&&S>y?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=A/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=A/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Du.prototype.isVector4=!0;var Dt=Du,Va=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new An(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new cr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends Va{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lo=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var cl=class cl{constructor(e,t,n,s,r,a,l,o,u,c,h,f,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,l,o,u,c,h,f,p,g,x,m)}set(e,t,n,s,r,a,l,o,u,c,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=l,d[13]=o,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*c,p=a*h,g=l*c,x=l*h;t[0]=o*c,t[4]=-o*h,t[8]=u,t[1]=p+g*u,t[5]=f-x*u,t[9]=-l*o,t[2]=x-f*u,t[6]=g+p*u,t[10]=a*o}else if(e.order==="YXZ"){let f=o*c,p=o*h,g=u*c,x=u*h;t[0]=f+x*l,t[4]=g*l-p,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-l,t[2]=p*l-g,t[6]=x+f*l,t[10]=a*o}else if(e.order==="ZXY"){let f=o*c,p=o*h,g=u*c,x=u*h;t[0]=f-x*l,t[4]=-a*h,t[8]=g+p*l,t[1]=p+g*l,t[5]=a*c,t[9]=x-f*l,t[2]=-a*u,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){let f=a*c,p=a*h,g=l*c,x=l*h;t[0]=o*c,t[4]=g*u-p,t[8]=f*u+x,t[1]=o*h,t[5]=x*u+f,t[9]=p*u-g,t[2]=-u,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){let f=a*o,p=a*u,g=l*o,x=l*u;t[0]=o*c,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*c,t[9]=-l*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=a*o,p=a*u,g=l*o,x=l*u;t[0]=o*c,t[4]=-h,t[8]=u*c,t[1]=f*h+x,t[5]=a*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=l*c,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,r0)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),$i.crossVectors(n,zn),$i.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),$i.crossVectors(n,zn)),$i.normalize(),oa.crossVectors(zn,$i),s[0]=$i.x,s[4]=oa.x,s[8]=zn.x,s[1]=$i.y,s[5]=oa.y,s[9]=zn.y,s[2]=$i.z,s[6]=oa.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],l=n[4],o=n[8],u=n[12],c=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],S=n[7],_=n[11],y=n[15],b=s[0],A=s[4],M=s[8],E=s[12],C=s[1],P=s[5],I=s[9],D=s[13],w=s[2],L=s[6],U=s[10],F=s[14],z=s[3],O=s[7],k=s[11],H=s[15];return r[0]=a*b+l*C+o*w+u*z,r[4]=a*A+l*P+o*L+u*O,r[8]=a*M+l*I+o*U+u*k,r[12]=a*E+l*D+o*F+u*H,r[1]=c*b+h*C+f*w+p*z,r[5]=c*A+h*P+f*L+p*O,r[9]=c*M+h*I+f*U+p*k,r[13]=c*E+h*D+f*F+p*H,r[2]=g*b+x*C+m*w+d*z,r[6]=g*A+x*P+m*L+d*O,r[10]=g*M+x*I+m*U+d*k,r[14]=g*E+x*D+m*F+d*H,r[3]=v*b+S*C+_*w+y*z,r[7]=v*A+S*P+_*L+y*O,r[11]=v*M+S*I+_*U+y*k,r[15]=v*E+S*D+_*F+y*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15],v=o*p-u*f,S=l*p-u*h,_=l*f-o*h,y=a*p-u*c,b=a*f-o*c,A=a*h-l*c;return t*(x*v-m*S+d*_)-n*(g*v-m*y+d*b)+s*(g*S-x*y+d*A)-r*(g*_-x*b+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],u=e[6],c=e[10];return t*(a*c-l*u)-n*(r*c-l*o)+s*(r*u-a*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],v=t*l-n*a,S=t*o-s*a,_=t*u-r*a,y=n*o-s*l,b=n*u-r*l,A=s*u-r*o,M=c*x-h*g,E=c*m-f*g,C=c*d-p*g,P=h*m-f*x,I=h*d-p*x,D=f*d-p*m,w=v*D-S*I+_*P+y*C-b*E+A*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/w;return e[0]=(l*D-o*I+u*P)*L,e[1]=(s*I-n*D-r*P)*L,e[2]=(x*A-m*b+d*y)*L,e[3]=(f*b-h*A-p*y)*L,e[4]=(o*C-a*D-u*E)*L,e[5]=(t*D-s*C+r*E)*L,e[6]=(m*_-g*A-d*S)*L,e[7]=(c*A-f*_+p*S)*L,e[8]=(a*I-l*C+u*M)*L,e[9]=(n*C-t*I-r*M)*L,e[10]=(g*b-x*_+d*v)*L,e[11]=(h*_-c*b-p*v)*L,e[12]=(l*E-a*P-o*M)*L,e[13]=(t*P-n*E+s*M)*L,e[14]=(x*S-g*y-m*v)*L,e[15]=(c*y-h*S+f*v)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,l=e.y,o=e.z,u=r*a,c=r*l;return this.set(u*a+n,u*l-s*o,u*o+s*l,0,u*l+s*o,c*l+n,c*o-s*a,0,u*o-s*l,c*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,u=r+r,c=a+a,h=l+l,f=r*u,p=r*c,g=r*h,x=a*c,m=a*h,d=l*h,v=o*u,S=o*c,_=o*h,y=n.x,b=n.y,A=n.z;return s[0]=(1-(x+d))*y,s[1]=(p+_)*y,s[2]=(g-S)*y,s[3]=0,s[4]=(p-_)*b,s[5]=(1-(f+d))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+S)*A,s[9]=(m-v)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Xs.set(s[0],s[1],s[2]).length(),l=Xs.set(s[4],s[5],s[6]).length(),o=Xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ii.copy(this);let u=1/a,c=1/l,h=1/o;return ii.elements[0]*=u,ii.elements[1]*=u,ii.elements[2]*=u,ii.elements[4]*=c,ii.elements[5]*=c,ii.elements[6]*=c,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,t.setFromRotationMatrix(ii),n.x=a,n.y=l,n.z=o,this}makePerspective(e,t,n,s,r,a,l=ai,o=!1){let u=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(o)g=r/(a-r),x=a*r/(a-r);else if(l===ai)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===ar)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,l=ai,o=!1){let u=this.elements,c=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(o)g=1/(a-r),x=a/(a-r);else if(l===ai)g=-2/(a-r),x=-(a+r)/(a-r);else if(l===ar)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};cl.prototype.isMatrix4=!0;var $e=cl,Xs=new B,ii=new $e,s0=new B(0,0,0),r0=new B(1,1,1),$i=new B,oa=new B,zn=new B,Uh=new $e,Fh=new cn,Nn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],u=s[5],c=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},o0=0,Oh=new B,qs=new cn,Ai=new $e,aa=new B,$r=new B,a0=new B,l0=new cn,Bh=new B(1,0,0),zh=new B(0,1,0),kh=new B(0,0,1),Hh={type:"added"},c0={type:"removed"},Ys={type:"childadded",child:null},Lc={type:"childremoved",child:null},jt=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new Nn,n=new cn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new st}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(zh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(zh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt($r,aa,this.up):Ai.lookAt(aa,$r,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Ai),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hh),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c0),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hh),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let u=0,c=o.length;u<c;u++){let h=o[u];r(e.shapes,h)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,u=this.material.length;o<u;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){let l=a(e.geometries),o=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){let o=[];for(let u in l){let c=l[u];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jt.DEFAULT_UP=new B(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bt=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},u0={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(u,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},la={h:0,s:0,l:0};function Dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=e0(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Dc(a,r,e+1/3),this.g=Dc(a,r,e),this.b=Dc(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return pt.workingToColorSpace(_n.copy(this),e),Math.round(mt(_n.r*255,0,255))*65536+Math.round(mt(_n.g*255,0,255))*256+Math.round(mt(_n.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(_n.copy(this),t);let n=_n.r,s=_n.g,r=_n.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,u,c=(l+a)/2;if(l===a)o=0,u=0;else{let h=a-l;switch(u=c<=.5?h/(a+l):h/(2-a-l),a){case n:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-n)/h+2;break;case r:o=(n-s)/h+4;break}o/=6}return e.h=o,e.s=u,e.l=c,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=zt){pt.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,s=_n.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(la);let n=Ac(Ki.h,la.h,t),s=Ac(Ki.s,la.s,t),r=Ac(Ki.l,la.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new me;me.NAMES=Gf;var uo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ws=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=new B,Ri=new B,Nc=new B,Ci=new B,Zs=new B,Js=new B,Vh=new B,Uc=new B,Fc=new B,Oc=new B,Bc=new Dt,zc=new Dt,kc=new Dt,ts=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){si.subVectors(s,t),Ri.subVectors(n,t),Nc.subVectors(e,t);let a=si.dot(si),l=si.dot(Ri),o=si.dot(Nc),u=Ri.dot(Ri),c=Ri.dot(Nc),h=a*u-l*l;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(u*o-l*c)*f,g=(a*c-l*o)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,s,r,a,l,o){return this.getBarycoord(e,t,n,s,Ci)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ci.x),o.addScaledVector(a,Ci.y),o.addScaledVector(l,Ci.z),o)}static getInterpolatedAttribute(e,t,n,s,r,a){return Bc.setScalar(0),zc.setScalar(0),kc.setScalar(0),Bc.fromBufferAttribute(e,t),zc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Bc,r.x),a.addScaledVector(zc,r.y),a.addScaledVector(kc,r.z),a}static isFrontFacing(e,t,n,s){return si.subVectors(n,t),Ri.subVectors(e,t),si.cross(Ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),si.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,l;Zs.subVectors(s,n),Js.subVectors(r,n),Uc.subVectors(e,n);let o=Zs.dot(Uc),u=Js.dot(Uc);if(o<=0&&u<=0)return t.copy(n);Fc.subVectors(e,s);let c=Zs.dot(Fc),h=Js.dot(Fc);if(c>=0&&h<=c)return t.copy(s);let f=o*h-c*u;if(f<=0&&o>=0&&c<=0)return a=o/(o-c),t.copy(n).addScaledVector(Zs,a);Oc.subVectors(e,r);let p=Zs.dot(Oc),g=Js.dot(Oc);if(g>=0&&p<=g)return t.copy(r);let x=p*u-o*g;if(x<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(n).addScaledVector(Js,l);let m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return Vh.subVectors(r,s),l=(h-c)/(h-c+(p-g)),t.copy(s).addScaledVector(Vh,l);let d=1/(m+x+f);return a=x*d,l=f*d,t.copy(n).addScaledVector(Zs,a).addScaledVector(Js,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),ua.subVectors(this.max,Kr),$s.subVectors(e.a,Kr),Ks.subVectors(e.b,Kr),js.subVectors(e.c,Kr),ji.subVectors(Ks,$s),Qi.subVectors(js,Ks),Ms.subVectors($s,js);let t=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-Ms.z,Ms.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,Ms.z,0,-Ms.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-Ms.y,Ms.x,0];return!Hc(t,$s,Ks,js,ua)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,$s,Ks,js,ua))?!1:(ha.crossVectors(ji,Qi),t=[ha.x,ha.y,ha.z],Hc(t,$s,Ks,js,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new B,new B,new B,new B,new B,new B,new B,new B],ri=new B,ca=new Kn,$s=new B,Ks=new B,js=new B,ji=new B,Qi=new B,Ms=new B,Kr=new B,ua=new B,ha=new B,bs=new B;function Hc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bs.fromArray(i,r);let l=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),o=e.dot(bs),u=t.dot(bs),c=n.dot(bs);if(Math.max(-Math.max(o,u,c),Math.min(o,u,c))>l)return!1}return!0}var $t=new B,fa=new Ge,h0=0,kt=class extends _i{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bf,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),s=Dn(s,this.array),r=Dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ho=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fo=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},f0=new Kn,jr=new B,Vc=new B,jn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):f0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(jr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Vc)),this.expandByPoint(jr.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},d0=0,$n=new $e,Gc=new jt,Qs=new B,kn=new Kn,Qr=new Kn,ln=new B,gt=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?fo:ho)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];Qr.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(kn.min,Qr.min),kn.expandByPoint(ln),ln.addVectors(kn.max,Qr.max),kn.expandByPoint(ln)):(kn.expandByPoint(Qr.min),kn.expandByPoint(Qr.max))}kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],o=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)ln.fromBufferAttribute(l,u),o&&(Qs.fromBufferAttribute(e,u),ln.add(Qs)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[];for(let M=0;M<n.count;M++)l[M]=new B,o[M]=new B;let u=new B,c=new B,h=new B,f=new Ge,p=new Ge,g=new Ge,x=new B,m=new B;function d(M,E,C){u.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,C),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,C),c.sub(u),h.sub(u),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),l[M].add(x),l[E].add(x),l[C].add(x),o[M].add(m),o[E].add(m),o[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,E=v.length;M<E;++M){let C=v[M],P=C.start,I=C.count;for(let D=P,w=P+I;D<w;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let S=new B,_=new B,y=new B,b=new B;function A(M){y.fromBufferAttribute(s,M),b.copy(y);let E=l[M];S.copy(E),S.sub(y.multiplyScalar(y.dot(E))).normalize(),_.crossVectors(b,E);let P=_.dot(o[M])<0?-1:1;a.setXYZW(M,S.x,S.y,S.z,P)}for(let M=0,E=v.length;M<E;++M){let C=v[M],P=C.start,I=C.count;for(let D=P,w=P+I;D<w;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,l=new B,o=new B,u=new B,c=new B,h=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),u.fromBufferAttribute(n,m),l.add(c),o.add(c),u.add(c),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(l,o){let u=l.array,c=l.itemSize,h=l.normalized,f=new u.constructor(o.length*c),p=0,g=0;for(let x=0,m=o.length;x<m;x++){l.isInterleavedBufferAttribute?p=o[x]*l.data.stride+l.offset:p=o[x]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new kt(f,c,h)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],u=e(o,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let o=[],u=r[l];for(let c=0,h=u.length;c<h;c++){let f=u[c],p=e(f,n);o.push(p)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let u in o)o[u]!==void 0&&(e[u]=o[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let o in n){let u=n[o];e.data.attributes[o]=u.toJSON(e.data)}let s={},r=!1;for(let o in this.morphAttributes){let u=this.morphAttributes[o],c=[];for(let h=0,f=u.length;h<f;h++){let p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(s[o]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let c=s[u];this.setAttribute(u,c.clone(t))}let r=e.morphAttributes;for(let u in r){let c=[],h=r[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,c=a.length;u<c;u++){let h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wc=new B,p0=new B,m0=new st,oi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wc.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Wc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||m0.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},g0=0,yi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=yr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new oi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ii=new B,Xc=new B,da=new B,pa=new B,hr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),pa.copy(this.origin).sub(Xc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(da),l=pa.dot(this.direction),o=-pa.dot(da),u=pa.lengthSq(),c=Math.abs(1-a*a),h,f,p,g;if(c>0)if(h=a*o-l,f=a*l-o,g=r*c,h>=0)if(f>=-g)if(f<=g){let x=1/c;h*=x,f*=x,p=h*(h+a*f+2*l)+f*(a*h+f+2*o)+u}else f=r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f=-r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;else f<=-g?(h=Math.max(0,-(-a*r+l)),f=h>0?-r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u):f<=g?(h=0,f=Math.min(Math.max(-r,-o),r),p=f*(f+2*o)+u):(h=Math.max(0,-(a*r+l)),f=h>0?r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+u);else f=a>0?-r:r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xc).addScaledVector(da,f),p}intersectSphere(e,t){if(e.radius<0)return null;Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,l,o,u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),c>=0?(r=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(l=(e.min.z-f.z)*h,o=(e.max.z-f.z)*h):(l=(e.max.z-f.z)*h,o=(e.min.z-f.z)*h),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,l=this.direction,o=l.x,u=l.y,c=l.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,d=n.x-a.x,v=n.y-a.y,S=n.z-a.z,_=Math.abs(o),y=Math.abs(u),b=Math.abs(c),A,M,E,C,P,I,D,w,L,U,F,z;if(_>=y&&_>=b?(E=o,I=h,L=g,z=d,o>=0?(A=u,M=c,C=f,P=p,D=x,w=m,U=v,F=S):(A=c,M=u,C=p,P=f,D=m,w=x,U=S,F=v)):y>=b?(E=u,I=f,L=x,z=v,u>=0?(A=c,M=o,C=p,P=h,D=m,w=g,U=S,F=d):(A=o,M=c,C=h,P=p,D=g,w=m,U=d,F=S)):(E=c,I=p,L=m,z=S,c>=0?(A=o,M=u,C=h,P=f,D=g,w=x,U=d,F=v):(A=u,M=o,C=f,P=h,D=x,w=g,U=v,F=d)),E===0)return null;let O=A/E,k=M/E,H=1/E,ee=C-O*I,de=P-k*I,Ze=D-O*L,Ie=w-k*L,ze=U-O*z,$=F-k*z,Q=ze*Ie-$*Ze,Le=ee*$-de*ze,He=Ze*de-Ie*ee;if(s){if(Q<0||Le<0||He<0)return null}else if((Q<0||Le<0||He<0)&&(Q>0||Le>0||He>0))return null;let Ee=Q+Le+He;if(Ee===0)return null;let et=H*(Q*I+Le*L+He*z);return(Ee>0?et<0:et>0)?null:this.at(et/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gh=new $e,Ss=new hr,ma=new jn,Wh=new B,ga=new B,xa=new B,va=new B,qc=new B,_a=new B,Xh=new B,ya=new B,ct=class extends jt{constructor(e=new gt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){_a.set(0,0,0);for(let o=0,u=r.length;o<u;o++){let c=l[o],h=r[o];c!==0&&(qc.fromBufferAttribute(h,e),a?_a.addScaledVector(qc,c):_a.addScaledVector(qc.sub(t),c))}t.add(_a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(ma.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(ma,Wh)===null||Ss.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,y=S;_<y;_+=3){let b=l.getX(_),A=l.getX(_+1),M=l.getX(_+2);s=Ma(this,d,e,n,u,c,h,b,A,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=l.getX(m),S=l.getX(m+1),_=l.getX(m+2);s=Ma(this,a,e,n,u,c,h,v,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,y=S;_<y;_+=3){let b=_,A=_+1,M=_+2;s=Ma(this,d,e,n,u,c,h,b,A,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,S=m+1,_=m+2;s=Ma(this,a,e,n,u,c,h,v,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function x0(i,e,t,n,s,r,a,l){let o;if(e.side===pn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,e.side===ls,l),o===null)return null;ya.copy(l),ya.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(ya);return u<t.near||u>t.far?null:{distance:u,point:ya.clone(),object:i}}function Ma(i,e,t,n,s,r,a,l,o,u){i.getVertexPosition(l,ga),i.getVertexPosition(o,xa),i.getVertexPosition(u,va);let c=x0(i,e,t,n,ga,xa,va,Xh);if(c){let h=new B;ts.getBarycoord(Xh,ga,xa,va,h),s&&(c.uv=ts.getInterpolatedAttribute(s,l,o,u,h,new Ge)),r&&(c.uv1=ts.getInterpolatedAttribute(r,l,o,u,h,new Ge)),a&&(c.normal=ts.getInterpolatedAttribute(a,l,o,u,h,new B),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let f={a:l,b:o,c:u,normal:new B,materialIndex:0};ts.getNormal(ga,xa,va,f.normal),c.face=f,c.barycoord=h}return c}var ns=class extends An{constructor(e=null,t=1,n=1,s,r,a,l,o,u=Kt,c=Kt,h,f){super(null,a,l,o,u,c,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},er=new $e,qh=new $e,ba=[],Yh=new Kn,v0=new $e,eo=new ct,to=new jn,Di=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,v0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),Yh.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(Yh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),to.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),qh.multiplyMatrices(n,er),eo.matrixWorld=qh,eo.raycast(e,ba);for(let a=0,l=ba.length;a<l;a++){let o=ba[a];o.instanceId=r,o.object=this,t.push(o)}ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(s*this.count),s,this.count,Ps,Qn));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new jn,_0=new Ge(.5,.5),Sa=new B,fr=class{constructor(e=new oi,t=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],u=r[3],c=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],v=r[12],S=r[13],_=r[14],y=r[15];if(s[0].setComponents(u-a,p-c,d-g,y-v).normalize(),s[1].setComponents(u+a,p+c,d+g,y+v).normalize(),s[2].setComponents(u+l,p+h,d+x,y+S).normalize(),s[3].setComponents(u-l,p-h,d-x,y-S).normalize(),n)s[4].setComponents(o,f,m,_).normalize(),s[5].setComponents(u-o,p-f,d-m,y-_).normalize();else if(s[4].setComponents(u-o,p-f,d-m,y-_).normalize(),t===ai)s[5].setComponents(u+o,p+f,d+m,y+_).normalize();else if(t===ar)s[5].setComponents(o,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);let t=_0.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wa=class extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xa=new B,qa=new B,Zh=new $e,no=new hr,Ta=new jn,Yc=new B,Jh=new B,po=class extends jt{constructor(e=new gt,t=new Wa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xa.fromBufferAttribute(t,s-1),qa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xa.distanceTo(qa);e.setAttribute("lineDistance",new Ke(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;Zh.copy(s).invert(),no.copy(e.ray).applyMatrix4(Zh);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=u){let d=c.getX(x),v=c.getX(x+1),S=Ea(this,e,no,o,d,v,x);S&&t.push(S)}if(this.isLineLoop){let x=c.getX(g-1),m=c.getX(p),d=Ea(this,e,no,o,x,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=u){let d=Ea(this,e,no,o,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=Ea(this,e,no,o,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Ea(i,e,t,n,s,r,a){let l=i.geometry.attributes.position;if(Xa.fromBufferAttribute(l,s),qa.fromBufferAttribute(l,r),t.distanceSqToSegment(Xa,qa,Yc,Jh)>n)return;Yc.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Yc);if(!(u<e.near||u>e.far))return{distance:u,point:Jh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var dr=class extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$h=new $e,eu=new hr,wa=new jn,Aa=new B,mo=class extends jt{constructor(e=new gt,t=new dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;$h.copy(s).invert(),eu.copy(e.ray).applyMatrix4($h);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,x=p;g<x;g++){let m=u.getX(g);Aa.fromBufferAttribute(h,m),Kh(Aa,m,o,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,x=p;g<x;g++)Aa.fromBufferAttribute(h,g),Kh(Aa,g,o,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Kh(i,e,t,n,s,r,a){let l=eu.distanceSqToPoint(i);if(l<t){let o=new B;eu.closestPointToPoint(i,o),o.applyMatrix4(n);let u=s.ray.origin.distanceTo(o);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var go=class extends An{constructor(e=[],t=cs,n,s,r,a,l,o,u,c){super(e,t,n,s,r,a,l,o,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Un=class extends An{constructor(e,t,n,s,r,a,l,o,u){super(e,t,n,s,r,a,l,o,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var is=class extends An{constructor(e,t,n=ui,s,r,a,l=Kt,o=Kt,u,c=vi,h=1){if(c!==vi&&c!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,a,l,o,c,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ya=class extends is{constructor(e,t=ui,n=cs,s,r,a=Kt,l=Kt,o,u=vi){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,n,s,r,a,l,o,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xo=class extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},li=class i extends gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],u=[],c=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2));function g(x,m,d,v,S,_,y,b,A,M,E){let C=_/A,P=y/M,I=_/2,D=y/2,w=b/2,L=A+1,U=M+1,F=0,z=0,O=new B;for(let k=0;k<U;k++){let H=k*P-D;for(let ee=0;ee<L;ee++){let de=ee*C-I;O[x]=de*v,O[m]=H*S,O[d]=w,u.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[d]=b>0?1:-1,c.push(O.x,O.y,O.z),h.push(ee/A),h.push(1-k/M),F+=1}}for(let k=0;k<M;k++)for(let H=0;H<A;H++){let ee=f+H+L*k,de=f+H+L*(k+1),Ze=f+(H+1)+L*(k+1),Ie=f+(H+1)+L*k;o.push(ee,de,Ie),o.push(de,Ze,Ie),z+=6}l.addGroup(p,z,E),p+=z,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var vo=class i extends gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],l=[],o=[],u=new B,c=new Ge;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;u.x=e*Math.cos(p),u.y=e*Math.sin(p),a.push(u.x,u.y,u.z),l.push(0,0,1),c.x=(a[f]/e+1)/2,c.y=(a[f+1]/e+1)/2,o.push(c.x,c.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pr=class i extends gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let u=this;s=Math.floor(s),r=Math.floor(r);let c=[],h=[],f=[],p=[],g=0,x=[],m=n/2,d=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(p,2));function v(){let _=new B,y=new B,b=0,A=(t-e)/n;for(let M=0;M<=r;M++){let E=[],C=M/r,P=C*(t-e)+e;for(let I=0;I<=s;I++){let D=I/s,w=D*o+l,L=Math.sin(w),U=Math.cos(w);y.x=P*L,y.y=-C*n+m,y.z=P*U,h.push(y.x,y.y,y.z),_.set(L,A,U).normalize(),f.push(_.x,_.y,_.z),p.push(D,1-C),E.push(g++)}x.push(E)}for(let M=0;M<s;M++)for(let E=0;E<r;E++){let C=x[E][M],P=x[E+1][M],I=x[E+1][M+1],D=x[E][M+1];(e>0||E!==0)&&(c.push(C,P,D),b+=3),(t>0||E!==r-1)&&(c.push(P,I,D),b+=3)}u.addGroup(d,b,0),d+=b}function S(_){let y=g,b=new Ge,A=new B,M=0,E=_===!0?e:t,C=_===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*C,0),f.push(0,C,0),p.push(.5,.5),g++;let P=g;for(let I=0;I<=s;I++){let w=I/s*o+l,L=Math.cos(w),U=Math.sin(w);A.x=E*U,A.y=m*C,A.z=E*L,h.push(A.x,A.y,A.z),f.push(0,C,0),b.x=L*.5+.5,b.y=U*.5*C+.5,p.push(b.x,b.y),g++}for(let I=0;I<s;I++){let D=y+I,w=P+I;_===!0?c.push(w,w+1,D):c.push(w+1,w,D),M+=3}u.addGroup(d,M,_===!0?1:2),d+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Za=class i extends gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];l(s),u(n),c(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let S=new B,_=new B,y=new B;for(let b=0;b<t.length;b+=3)p(t[b+0],S),p(t[b+1],_),p(t[b+2],y),o(S,_,y,v)}function o(v,S,_,y){let b=y+1,A=[];for(let M=0;M<=b;M++){A[M]=[];let E=v.clone().lerp(_,M/b),C=S.clone().lerp(_,M/b),P=b-M;for(let I=0;I<=P;I++)I===0&&M===b?A[M][I]=E:A[M][I]=E.clone().lerp(C,I/P)}for(let M=0;M<b;M++)for(let E=0;E<2*(b-M)-1;E++){let C=Math.floor(E/2);E%2===0?(f(A[M][C+1]),f(A[M+1][C]),f(A[M][C])):(f(A[M][C+1]),f(A[M+1][C+1]),f(A[M+1][C]))}}function u(v){let S=new B;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(v),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function c(){let v=new B;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let _=m(v)/2/Math.PI+.5,y=d(v)/Math.PI+.5;a.push(_,1-y)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){let S=a[v+0],_=a[v+2],y=a[v+4],b=Math.max(S,_,y),A=Math.min(S,_,y);b>.9&&A<.1&&(S<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,S){let _=v*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){let v=new B,S=new B,_=new B,y=new B,b=new Ge,A=new Ge,M=new Ge;for(let E=0,C=0;E<r.length;E+=9,C+=6){v.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),b.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),y.copy(v).add(S).add(_).divideScalar(3);let P=m(y);x(b,C+0,v,P),x(A,C+2,S,P),x(M,C+4,_,P)}}function x(v,S,_,y){y<0&&v.x===1&&(a[S]=v.x-1),_.x===0&&_.z===0&&(a[S]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var _o=class i extends Za{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ht=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(n),o=Math.floor(s),u=l+1,c=o+1,h=e/l,f=t/o,p=[],g=[],x=[],m=[];for(let d=0;d<c;d++){let v=d*f-a;for(let S=0;S<u;S++){let _=S*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(S/l),m.push(1-d/o)}}for(let d=0;d<o;d++)for(let v=0;v<l;v++){let S=v+u*d,_=v+u*(d+1),y=v+1+u*(d+1),b=v+1+u*d;p.push(S,_,b),p.push(_,y,b)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var yo=class i extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),u=0,c=[],h=new B,f=new B,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],S=d/n,_=a+S*l,y=e*Math.cos(_),b=Math.sqrt(e*e-y*y),A=0;d===0&&a===0?A=.5/t:d===n&&o===Math.PI&&(A=-.5/t);for(let M=0;M<=t;M++){let E=M/t,C=s+E*r;h.x=-b*Math.cos(C),h.y=y,h.z=b*Math.sin(C),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+A,1-S),v.push(u++)}c.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let S=c[d][v+1],_=c[d][v],y=c[d+1][v],b=c[d+1][v+1];(d!==0||a>0)&&p.push(S,_,b),(d!==n-1||o<Math.PI)&&p.push(_,y,b)}this.setIndex(p),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(jh(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(jh(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Mn(i){let e={};for(let t=0;t<i.length;t++){let n=Is(i[t]);for(let s in n)e[s]=n[s]}return e}function jh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function y0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Ls={clone:Is,merge:Mn},M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=b0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ja=class extends ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var un=class extends yi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mr=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$a=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function tr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Zc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ss=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends ss{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case jc:r=e,l=2*t-n;break;case Qc:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case jc:a=e,o=2*n-t;break;case Qc:a=1,o=n+s[1]-s[0];break;default:a=e-1,o=t}let u=(n-t)*.5,c=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(o-n),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let y=0;y!==l;++y)r[y]=d*a[c+y]+v*a[u+y]+S*a[o+y]+_*a[h+y];return r}},ja=class extends ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=(n-t)/(s-t),h=1-c;for(let f=0;f!==l;++f)r[f]=a[u+f]*h+a[o+f]*c;return r}},Qa=class extends ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},el=class extends ss{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this.inTangents,h=this.outTangents;if(!c||!h){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==l;++m)r[m]=a[u+m]*x+a[o+m]*g;return r}let f=l*2,p=e-1;for(let g=0;g!==l;++g){let x=a[u+g],m=a[o+g],d=p*f+g*2,v=h[d],S=h[d+1],_=e*f+g*2,y=c[_],b=c[_+1],A=T0(n,t,v,y,s);r[g]=Wf(A,x,S,b,m)}return r}};function Wf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function S0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function T0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let l=Wf(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let o=S0(r,e,t,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var Hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tr(t,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tr(e.times,Array),values:tr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Zc(e.settings)&&(n.settings={inTangents:tr(e.settings.inTangents,Array),outTangents:tr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new el(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case io:t=this.InterpolantFactoryMethodDiscrete;break;case ka:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break;case $c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Zc(this.settings)&&(Qh(this.settings.inTangents,e),Qh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){nt("KeyframeTrack: Time is not a valid number.",this,l,o),e=!1;break}if(a!==null&&a>o){nt("KeyframeTrack: Out of order keys.",this,l,o,a),e=!1;break}a=o}if(s!==void 0&&Qp(s))for(let l=0,o=s.length;l!==o;++l){let u=s[l];if(isNaN(u)){nt("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pa,r=e.length-1,a=1;for(let l=1;l<r;++l){let o=!1,u=e[l],c=e[l+1];if(u!==c&&(l!==1||u!==e[0]))if(s)o=!0;else{let h=l*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){o=!0;break}}}if(o){if(l!==a){e[a]=e[l];let h=l*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let l=r*n,o=a*n,u=0;u!==n;++u)t[o+u]=t[l+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Zc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=ka;var rs=class extends Hn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=io;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};tl.prototype.ValueTypeName="color";var nl=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};nl.prototype.ValueTypeName="number";var il=class extends ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-t)/(s-t),u=e*l;for(let c=u+l;u!==c;u+=4)cn.slerpFlat(r,0,a,u-l,a,u,o);return r}},Mo=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Hn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=io;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};sl.prototype.ValueTypeName="vector";var rl=class{constructor(e,t,n){let s=this,r=!1,a=0,l=0,o,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){l++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,l),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){let h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){let p=u[h],g=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xf=new rl,ol=class{constructor(e){this.manager=e!==void 0?e:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},bo=class extends gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jc=new $e,ef=new B,tf=new B,So=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Jc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Jc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===ar||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ra=new B,Ca=new cn,gi=new B,Ni=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ra,Ca,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ra,Ca,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new B,nf=new Ge,sf=new Ge,dn=class extends Ni{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,nf,sf),t.subVectors(sf,nf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*n/u,s*=a.width/o,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tu=class extends So{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ao*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},To=class extends gr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var as=class extends Ni{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nu=class extends So{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xr=class extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new nu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vr=class extends gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var nr=-90,ir=1,al=class extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(nr,ir,e,t);s.layers=this.layers,this.add(s);let r=new dn(nr,ir,e,t);r.layers=this.layers,this.add(r);let a=new dn(nr,ir,e,t);a.layers=this.layers,this.add(a);let l=new dn(nr,ir,e,t);l.layers=this.layers,this.add(l);let o=new dn(nr,ir,e,t);o.layers=this.layers,this.add(o);let u=new dn(nr,ir,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,l,o]=t;for(let u of t)this.remove(u);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ll=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Eo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=E0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function E0(){this._document.hidden===!1&&this.reset()}var Au="\\[\\]\\.:\\/",w0=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",A0="[^"+Au.replace("\\.","")+"]",R0=/((?:WC+[\/:])*)/.source.replace("WC",Ru),C0=/(WCOD+)?/.source.replace("WCOD",A0),P0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),L0=new RegExp("^"+R0+C0+P0+I0+"$"),D0=["material","materials","bones","map"],iu=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w0,"")}static parseTrackName(e){let t=L0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);D0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let o=n(l.children);if(o)return o}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=iu;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U_=new Float32Array(1);var Nu=class Nu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Nu.prototype.isMatrix2=!0;var su=Nu;function Cu(i,e,t,n){let s=N0(n);switch(t){case bu:return i*e;case Ps:return i*e/s.components*s.byteLength;case gl:return i*e/s.components*s.byteLength;case hs:return i*e*2/s.components*s.byteLength;case xl:return i*e*2/s.components*s.byteLength;case Su:return i*e*3/s.components*s.byteLength;case Bn:return i*e*4/s.components*s.byteLength;case vl:return i*e*4/s.components*s.byteLength;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:case bl:return Math.max(i,16)*Math.max(e,8)/4;case _l:case Ml:return Math.max(i,8)*Math.max(e,8)/2;case Sl:case Tl:case wl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case El:case Do:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ql:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case No:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N0(i){switch(i){case yn:case vu:return{byteLength:1,components:1};case Mr:case _u:case Qt:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case ui:case dl:case Qn:return{byteLength:4,components:1};case yu:case Mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function dd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function H0(i){let e=new WeakMap;function t(l,o){let u=l.array,c=l.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,u,c),l.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,o,u){let c=o.array,h=o.updateRanges;if(i.bindBuffer(u,l),h.length===0)i.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=e.get(l);o&&(i.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let c=e.get(l);(!c||c.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,o));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,o),u.version=l.version}}return{get:s,remove:r,update:a}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
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
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
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
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tm=`#ifdef USE_IRIDESCENCE
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
#endif`,nm=`#ifdef USE_BUMPMAP
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,km=`uniform sampler2D dfgLUT;
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
}`,Hm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#define LAMBERT
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
}`,rx=`#define LAMBERT
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
}`,ox=`#define MATCAP
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
}`,ax=`#define MATCAP
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
}`,lx=`#define NORMAL
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
}`,cx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,hx=`#define PHONG
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
}`,fx=`#define STANDARD
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
}`,dx=`#define STANDARD
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
}`,px=`#define TOON
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
}`,mx=`#define TOON
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
}`,gx=`uniform float size;
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,_x=`uniform vec3 color;
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
}`,yx=`uniform float rotation;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:q0,alphatest_pars_fragment:Y0,aomap_fragment:Z0,aomap_pars_fragment:J0,batching_pars_vertex:$0,batching_vertex:K0,begin_vertex:j0,beginnormal_vertex:Q0,bsdfs:em,iridescence_fragment:tm,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:sm,clipping_planes_pars_vertex:rm,clipping_planes_vertex:om,color_fragment:am,color_pars_fragment:lm,color_pars_vertex:cm,color_vertex:um,common:hm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:dm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:xm,colorspace_fragment:vm,colorspace_pars_fragment:_m,envmap_fragment:ym,envmap_common_pars_fragment:Mm,envmap_pars_fragment:bm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Nm,envmap_vertex:Tm,fog_vertex:Em,fog_pars_vertex:wm,fog_fragment:Am,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Lm,lights_pars_begin:Dm,lights_toon_fragment:Um,lights_toon_pars_fragment:Fm,lights_phong_fragment:Om,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:km,lights_fragment_begin:Hm,lights_fragment_maps:Vm,lights_fragment_end:Gm,lightprobes_pars_fragment:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:$m,map_particle_fragment:Km,map_particle_pars_fragment:jm,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:eg,morphinstance_vertex:tg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:og,normal_fragment_maps:ag,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:ug,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:_g,dithering_fragment:yg,dithering_pars_fragment:Mg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Eg,shadowmap_vertex:wg,shadowmask_pars_fragment:Ag,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Pg,skinnormal_vertex:Ig,specularmap_fragment:Lg,specularmap_pars_fragment:Dg,tonemapping_fragment:Ng,tonemapping_pars_fragment:Ug,transmission_fragment:Fg,transmission_pars_fragment:Og,uv_pars_fragment:Bg,uv_pars_vertex:zg,uv_vertex:kg,worldpos_vertex:Hg,background_vert:Vg,background_frag:Gg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:qg,cube_frag:Yg,depth_vert:Zg,depth_frag:Jg,distance_vert:$g,distance_frag:Kg,equirect_vert:jg,equirect_frag:Qg,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:sx,meshlambert_frag:rx,meshmatcap_vert:ox,meshmatcap_frag:ax,meshnormal_vert:lx,meshnormal_frag:cx,meshphong_vert:ux,meshphong_frag:hx,meshphysical_vert:fx,meshphysical_frag:dx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:xx,shadow_vert:vx,shadow_frag:_x,sprite_vert:yx,sprite_frag:Mx},Ue={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},bi={basic:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Mn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Mn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Mn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new me(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Mn([Ue.points,Ue.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Mn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Mn([Ue.common,Ue.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Mn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Mn([Ue.sprite,Ue.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Mn([Ue.common,Ue.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Mn([Ue.lights,Ue.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};bi.physical={uniforms:Mn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var jl={r:0,b:0,g:0},bx=new $e,pd=new st;pd.set(-1,0,0,0,1,0,0,0,1);function Sx(i,e,t,n,s,r){let a=new me(0),l=s===!0?0:1,o,u,c=null,h=0,f=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let _=v.backgroundBlurriness>0;S=e.get(S,_)}return S}function g(v){let S=!1,_=p(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),S=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,S){let _=p(S);_&&(_.isCubeTexture||_.mapping===Ao)?(u===void 0&&(u=new ct(new li(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:Is(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(pd),u.material.toneMapped=pt.getTransfer(_.colorSpace)!==St,(c!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new ct(new Ht(2,2),new ft({name:"BackgroundMaterial",uniforms:Is(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,o.material.toneMapped=pt.getTransfer(_.colorSpace)!==St,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||h!==_.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,c=_,h=_.version,f=i.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))}function m(v,S){v.getRGB(jl,wu(i)),t.buffers.color.setClear(jl.r,jl.g,jl.b,S,r)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:g,addToRenderList:x,dispose:d}}function Tx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(P,I,D,w,L){let U=!1,F=h(P,w,D,I);r!==F&&(r=F,u(r.object)),U=p(P,w,D,L),U&&g(P,w,D,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(P,I,D,w),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function o(){return i.createVertexArray()}function u(P){return i.bindVertexArray(P)}function c(P){return i.deleteVertexArray(P)}function h(P,I,D,w){let L=w.wireframe===!0,U=n[I.id];U===void 0&&(U={},n[I.id]=U);let F=P.isInstancedMesh===!0?P.id:0,z=U[F];z===void 0&&(z={},U[F]=z);let O=z[D.id];O===void 0&&(O={},z[D.id]=O);let k=O[L];return k===void 0&&(k=f(o()),O[L]=k),k}function f(P){let I=[],D=[],w=[];for(let L=0;L<t;L++)I[L]=0,D[L]=0,w[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:w,object:P,attributes:{},index:null}}function p(P,I,D,w){let L=r.attributes,U=I.attributes,F=0,z=D.getAttributes();for(let O in z)if(z[O].location>=0){let H=L[O],ee=U[O];if(ee===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;F++}return r.attributesNum!==F||r.index!==w}function g(P,I,D,w){let L={},U=I.attributes,F=0,z=D.getAttributes();for(let O in z)if(z[O].location>=0){let H=U[O];H===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),L[O]=ee,F++}r.attributes=L,r.attributesNum=F,r.index=w}function x(){let P=r.newAttributes;for(let I=0,D=P.length;I<D;I++)P[I]=0}function m(P){d(P,0)}function d(P,I){let D=r.newAttributes,w=r.enabledAttributes,L=r.attributeDivisors;D[P]=1,w[P]===0&&(i.enableVertexAttribArray(P),w[P]=1),L[P]!==I&&(i.vertexAttribDivisor(P,I),L[P]=I)}function v(){let P=r.newAttributes,I=r.enabledAttributes;for(let D=0,w=I.length;D<w;D++)I[D]!==P[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function S(P,I,D,w,L,U,F){F===!0?i.vertexAttribIPointer(P,I,D,L,U):i.vertexAttribPointer(P,I,D,w,L,U)}function _(P,I,D,w){x();let L=w.attributes,U=D.getAttributes(),F=I.defaultAttributeValues;for(let z in U){let O=U[z];if(O.location>=0){let k=L[z];if(k===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let H=k.normalized,ee=k.itemSize,de=e.get(k);if(de===void 0)continue;let Ze=de.buffer,Ie=de.type,ze=de.bytesPerElement,$=Ie===i.INT||Ie===i.UNSIGNED_INT||k.gpuType===dl;if(k.isInterleavedBufferAttribute){let Q=k.data,Le=Q.stride,He=k.offset;if(Q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<O.locationSize;Ee++)d(O.location+Ee,Q.meshPerAttribute);P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<O.locationSize;Ee++)m(O.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Ee=0;Ee<O.locationSize;Ee++)S(O.location+Ee,ee/O.locationSize,Ie,H,Le*ze,(He+ee/O.locationSize*Ee)*ze,$)}else{if(k.isInstancedBufferAttribute){for(let Q=0;Q<O.locationSize;Q++)d(O.location+Q,k.meshPerAttribute);P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Q=0;Q<O.locationSize;Q++)m(O.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Q=0;Q<O.locationSize;Q++)S(O.location+Q,ee/O.locationSize,Ie,H,ee*ze,ee/O.locationSize*Q*ze,$)}}else if(F!==void 0){let H=F[z];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(O.location,H);break;case 3:i.vertexAttrib3fv(O.location,H);break;case 4:i.vertexAttrib4fv(O.location,H);break;default:i.vertexAttrib1fv(O.location,H)}}}}v()}function y(){E();for(let P in n){let I=n[P];for(let D in I){let w=I[D];for(let L in w){let U=w[L];for(let F in U)c(U[F].object),delete U[F];delete w[L]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let D in I){let w=I[D];for(let L in w){let U=w[L];for(let F in U)c(U[F].object),delete U[F];delete w[L]}}delete n[P.id]}function A(P){for(let I in n){let D=n[I];for(let w in D){let L=D[w];if(L[P.id]===void 0)continue;let U=L[P.id];for(let F in U)c(U[F].object),delete U[F];delete L[P.id]}}}function M(P){for(let I in n){let D=n[I],w=P.isInstancedMesh===!0?P.id:0,L=D[w];if(L!==void 0){for(let U in L){let F=L[U];for(let z in F)c(F[z].object),delete F[z];delete L[U]}delete D[w],Object.keys(D).length===0&&delete n[I]}}}function E(){C(),a=!0,r!==s&&(r=s,u(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Ex(i,e,t){let n;function s(o){n=o}function r(o,u){i.drawArrays(n,o,u),t.update(u,n,1)}function a(o,u,c){c!==0&&(i.drawArraysInstanced(n,o,u,c),t.update(u,n,c))}function l(o,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function wx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){let M=A===Qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yn&&A!==Qn&&!M&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",c=o(u);c!==u&&(Qe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:_,maxSamples:y,samples:b}}function Ax(i){let e=this,t=null,n=0,s=!1,r=!1,a=new oi,l=new st,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{let v=r?0:n,S=v*4,_=d.clippingState||null;o.value=_,_=c(g,f,S,p);for(let y=0;y!==S;++y)_[y]=t[y];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=o.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,_=p;S!==x;++S,_+=4)a.copy(h[S]).applyMatrix4(v,l),a.normal.toArray(m,_),m[_+3]=a.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Tr=4,Rx=6,Cx=20,Px=256,Fo=new as,qf=new me,Uu=null,Fu=0,Ou=0,Bu=!1,Ix=new B,Ds=new B,ec=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:l=Ix}=r;Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o,l),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Fu,Ou),this._renderer.xr.enabled=Bu,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Qt,format:Bn,colorSpace:so,depthBuffer:!1},s=Yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lx(r)),this._blurMaterial=Nx(r,e,t),this._ggxMaterial=Dx(r,e,t)}return s}_compileMaterial(e){let t=new ct(new gt,e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,n,s,r){let o=new dn(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(qf),h.toneMapping=ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new li,new Zt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,d=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy(qf),d=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(o.up.set(0,u[S],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+c[S],r.y,r.z)):_===1?(o.up.set(0,0,u[S]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+c[S],r.z)):(o.up.set(0,u[S],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+c[S]));let y=this._cubeSize;Sr(s,_*y,S>2?y:0,y,y),h.setRenderTarget(s),d&&h.render(x,o),h.render(e,o)}h.toneMapping=p,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===cs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let o=this._cubeSize;Sr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Fo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let o=a.uniforms,u=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),f=u*1.25,p=h*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Tr?n-g+Tr:0),d=4*(this._cubeSize-x);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=g-t,Sr(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(l,Fo),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,Sr(e,m,d,3*x,2*x),s.setRenderTarget(e),s.render(l,Fo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[s];o.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let c=this._sizeLods[s],h=3*c*(s>this._lodMax-Tr?s-this._lodMax+Tr:0),f=4*(this._cubeSize-c);Sr(t,h,f,3*c,2*c),a.setRenderTarget(t),a.render(o,Fo)}};function Lx(i){let e=[],t=[],n=i,s=i-Tr+1+Rx;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let l=1/(a-2),o=-l,u=1+l,c=[o,o,u,o,u,u,o,o,u,u,o,u],h=6,f=6,p=3,g=new Float32Array(p*f*h),x=new Float32Array(p*f*h);for(let d=0;d<h;d++){let v=d%3*2/3-1,S=d>2?0:-1,_=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(_,p*f*d);for(let y=0;y<f;y++){let b=c[y*2]*2-1,A=c[y*2+1]*2-1;d===0?Ds.set(1,A,b):d===1?Ds.set(-b,1,-A):d===2?Ds.set(-b,A,1):d===3?Ds.set(-1,A,-b):d===4?Ds.set(-b,-1,A):Ds.set(b,A,-1),Ds.toArray(x,(d*f+y)*p)}}let m=new gt;m.setAttribute("position",new kt(g,p)),m.setAttribute("outputDirection",new kt(x,p)),t.push(new ct(m,null)),n>Tr&&n--}return{lodMeshes:t,sizeLods:e}}function Yf(i,e,t){let n=new It(i,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dx(i,e,t){return new ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Nx(i,e,t){return new ft({name:"SphericalGaussianBlur",defines:{SAMPLES:Cx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Zf(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Jf(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tc=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new go(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new li(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Fn});r.uniforms.tEquirect.value=t;let a=new ct(s,r),l=t.minFilter;return t.minFilter===On&&(t.minFilter=Lt),new al(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Ux(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===ul||p===hl)if(e.has(f)){let g=e.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new tc(g.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",u),l(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===ul||p===hl,x=p===cs||p===Cs;if(g||x){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new ec(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&o(v)?(n===null&&(n=new ec(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function l(f,p){return p===ul?f.mapping=cs:p===hl&&(f.mapping=Cs),f}function o(f){let p=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Fx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function Ox(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function o(h){let f=h.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function u(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(g===void 0)return;if(p!==null){let v=p.array;x=p.version;for(let S=0,_=v.length;S<_;S+=3){let y=v[S+0],b=v[S+1],A=v[S+2];f.push(y,b,b,A,A,y)}}else{let v=g.array;x=g.version;for(let S=0,_=v.length/3-1;S<_;S+=3){let y=S+0,b=S+1,A=S+2;f.push(y,b,b,A,A,y)}}let m=new(g.count>=65535?fo:ho)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function c(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:l,update:o,getWireframeAttribute:c}}function Bx(i,e,t){let n;function s(h){n=h}let r,a;function l(h){r=h.type,a=h.bytesPerElement}function o(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function u(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*a,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function zx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kx(i,e,t){let n=new WeakMap,s=new Dt;function r(a,l,o){let u=a.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=c!==void 0?c.length:0,f=n.get(l);if(f===void 0||f.count!==h){let E=function(){A.dispose(),n.delete(l),l.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=l.attributes.position.count*S,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*y*4*h),A=new lo(b,_,y,h);A.type=Qn,A.needsUpdate=!0;let M=S*4;for(let C=0;C<h;C++){let P=m[C],I=d[C],D=v[C],w=_*y*4*C;for(let L=0;L<P.count;L++){let U=L*M;p===!0&&(s.fromBufferAttribute(P,L),b[w+U+0]=s.x,b[w+U+1]=s.y,b[w+U+2]=s.z,b[w+U+3]=0),g===!0&&(s.fromBufferAttribute(I,L),b[w+U+4]=s.x,b[w+U+5]=s.y,b[w+U+6]=s.z,b[w+U+7]=0),x===!0&&(s.fromBufferAttribute(D,L),b[w+U+8]=s.x,b[w+U+9]=s.y,b[w+U+10]=s.z,b[w+U+11]=D.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Ge(_,y)},n.set(l,f),l.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];let g=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",u)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Hx(i,e,t,n,s){let r=new WeakMap;function a(u){let c=s.render.frame,h=u.geometry,f=e.get(u,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),r.get(u)!==c&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function l(){r=new WeakMap}function o(u){let c=u.target;c.removeEventListener("dispose",o),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:l}}var Vx={[hu]:"LINEAR_TONE_MAPPING",[fu]:"REINHARD_TONE_MAPPING",[du]:"CINEON_TONE_MAPPING",[pu]:"ACES_FILMIC_TONE_MAPPING",[gu]:"AGX_TONE_MAPPING",[wo]:"NEUTRAL_TONE_MAPPING",[mu]:"CUSTOM_TONE_MAPPING"};function Gx(i,e,t,n,s,r){let a=new It(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,u=new gt;u.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let c=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ct(u,c),f=new as(-1,1,1,-1,0,1),p=null,g=null,x=!1,m,d=null,v=[],S=!1;this.setSize=function(_,y){a.setSize(_,y),l!==null&&l.setSize(_,y),o!==null&&o.setSize(_,y);for(let b=0;b<v.length;b++){let A=v[b];A.setSize&&A.setSize(_,y)}},this.setEffects=function(_){v=_,S=v.length>0&&v[0].isRenderPass===!0;let y=a.width,b=a.height;v.length>0&&l===null&&(l=new It(y,b,{type:Qt,depthBuffer:!1,stencilBuffer:!1}),o=new It(y,b,{type:Qt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let M=v[A];M.setSize&&M.setSize(y,b)}},this.begin=function(_,y){if(x||_.toneMapping===ci&&v.length===0)return!1;if(d=y,y!==null){let b=y.width,A=y.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return S===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=ci,!0},this.hasRenderPass=function(){return S},this.end=function(_,y){_.toneMapping=m,x=!0;let b=a,A=l;for(let M=0;M<v.length;M++){let E=v[M];E.enabled!==!1&&(E.render(_,A,b,y),E.needsSwap!==!1&&(b=A,A=A===l?o:l))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,c.defines={},pt.getTransfer(p)===St&&(c.defines.SRGB_TRANSFER="");let M=Vx[g];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(d),_.render(h,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),c.dispose()}}var md=new An,Hu=new is(1,1),gd=new lo,xd=new Ga,vd=new go,$f=[],Kf=[],jf=new Float32Array(16),Qf=new Float32Array(9),ed=new Float32Array(4);function wr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$f[s];if(r===void 0&&(r=new Float32Array(s),$f[s]=r),e!==0){n.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(r,l)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sc(i,e){let t=Kf[e];t===void 0&&(t=new Int32Array(e),Kf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function Zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;ed.set(n),i.uniformMatrix2fv(this.addr,!1,ed),sn(t,n)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Qf.set(n),i.uniformMatrix3fv(this.addr,!1,Qf),sn(t,n)}}function $x(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;jf.set(n),i.uniformMatrix4fv(this.addr,!1,jf),sn(t,n)}}function Kx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function rv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hu.compareFunction=t.isReversedDepthBuffer()?Kl:$l,r=Hu):r=md,t.setTexture2D(e||r,s)}function ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xd,s)}function av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vd,s)}function lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gd,s)}function cv(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return Zx;case 35675:return Jx;case 35676:return $x;case 5124:case 35670:return Kx;case 35667:case 35671:return jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function uv(i,e){i.uniform1fv(this.addr,e)}function hv(i,e){let t=wr(e,this.size,2);i.uniform2fv(this.addr,t)}function fv(i,e){let t=wr(e,this.size,3);i.uniform3fv(this.addr,t)}function dv(i,e){let t=wr(e,this.size,4);i.uniform4fv(this.addr,t)}function pv(i,e){let t=wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mv(i,e){let t=wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gv(i,e){let t=wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xv(i,e){i.uniform1iv(this.addr,e)}function vv(i,e){i.uniform2iv(this.addr,e)}function _v(i,e){i.uniform3iv(this.addr,e)}function yv(i,e){i.uniform4iv(this.addr,e)}function Mv(i,e){i.uniform1uiv(this.addr,e)}function bv(i,e){i.uniform2uiv(this.addr,e)}function Sv(i,e){i.uniform3uiv(this.addr,e)}function Tv(i,e){i.uniform4uiv(this.addr,e)}function Ev(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hu:a=md;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function wv(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xd,r[a])}function Av(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vd,r[a])}function Rv(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gd,r[a])}function Cv(i){switch(i){case 5126:return uv;case 35664:return hv;case 35665:return fv;case 35666:return dv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return vv;case 35668:case 35672:return _v;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return bv;case 36295:return Sv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}var Vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}},Gu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}},Wu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},zu=/(\w+)(\])?(\[|\.)?/g;function td(i,e){i.seq.push(e),i.map[e.id]=e}function Pv(i,e,t){let n=i.name,s=n.length;for(zu.lastIndex=0;;){let r=zu.exec(n),a=zu.lastIndex,l=r[1],o=r[2]==="]",u=r[3];if(o&&(l=l|0),u===void 0||u==="["&&a+2===s){td(t,u===void 0?new Vu(l,i,e):new Gu(l,i,e));break}else{let h=t.map[l];h===void 0&&(h=new Wu(l),td(t,h)),t=h}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);Pv(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function nd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Iv=37297,Lv=0;function Dv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}var id=new st;function Nv(i){pt._getMatrix(id,pt.workingColorSpace,i);let e=`mat3( ${id.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case ro:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Dv(i.getShaderSource(e),l)}else return r}function Uv(i,e){let t=Nv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Fv={[hu]:"Linear",[fu]:"Reinhard",[du]:"Cineon",[pu]:"ACESFilmic",[gu]:"AgX",[wo]:"Neutral",[mu]:"Custom"};function Ov(i,e){let t=Fv[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ql=new B;function Bv(){pt.getLuminanceCoefficients(Ql);let i=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function kv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Bo(i){return i!==""}function rd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(i){return i.replace(Vv,Wv)}var Gv=new Map;function Wv(i,e){let t=tt[e];if(t===void 0){let n=Gv.get(e);if(n!==void 0)t=tt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xu(t)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(i){return i.replace(Xv,qv)}function qv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Yv={[As]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function Zv(i){return Yv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jv={[cs]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE_UV"};function $v(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Kv={[Cs]:"ENVMAP_MODE_REFRACTION"};function jv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qv={[uu]:"ENVMAP_BLENDING_MULTIPLY",[wf]:"ENVMAP_BLENDING_MIX",[Af]:"ENVMAP_BLENDING_ADD"};function e1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qv[i.combine]||"ENVMAP_BLENDING_NONE"}function t1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function n1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,o=Zv(t),u=$v(t),c=jv(t),h=e1(t),f=t1(t),p=zv(t),g=kv(r),x=s.createProgram(),m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bo).join(`
`),d.length>0&&(d+=`
`)):(m=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),d=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?tt.tonemapping_pars_fragment:"",t.toneMapping!==ci?Ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Uv("linearToOutputTexel",t.outputColorSpace),Bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),a=Xu(a),a=rd(a,t),a=od(a,t),l=Xu(l),l=rd(l,t),l=od(l,t),a=ad(a),l=ad(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=v+m+a,_=v+d+l,y=nd(s,s.VERTEX_SHADER,S),b=nd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,y),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(y)||"",w=s.getShaderInfoLog(b)||"",L=I.trim(),U=D.trim(),F=w.trim(),z=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,b);else{let k=sd(s,y,"vertex"),H=sd(s,b,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+k+`
`+H)}else L!==""?Qe("WebGLProgram: Program Info Log:",L):(U===""||F==="")&&(O=!1);O&&(P.diagnostics={runnable:z,programLog:L,vertexShader:{log:U,prefix:m},fragmentShader:{log:F,prefix:d}})}s.deleteShader(y),s.deleteShader(b),M=new Er(s,x),E=Hv(s,x)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Iv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=b,this}var i1=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yu(e),t.set(e,n)),n}},Yu=class{constructor(e){this.id=i1++,this.code=e,this.usedTimes=0}};function s1(i){return i===hs||i===Do||i===No}function r1(i,e,t,n,s,r){let a=new co,l=new qu,o=new Set,u=[],c=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return o.add(M),M===0?"uv":`uv${M}`}function x(M,E,C,P,I,D){let w=P.fog,L=I.geometry,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,F=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,z=e.get(M.envMap||U,F),O=z&&z.mapping===Ao?z.image.height:null,k=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Qe("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=H!==void 0?H.length:0,de=0;L.morphAttributes.position!==void 0&&(de=1),L.morphAttributes.normal!==void 0&&(de=2),L.morphAttributes.color!==void 0&&(de=3);let Ze,Ie,ze,$;if(k){let Et=bi[k];Ze=Et.vertexShader,Ie=Et.fragmentShader}else{Ze=M.vertexShader,Ie=M.fragmentShader;let Et=l.getVertexShaderStage(M),vt=l.getFragmentShaderStage(M);l.update(M,Et,vt),ze=Et.id,$=vt.id}let Q=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),He=I.isInstancedMesh===!0,Ee=I.isBatchedMesh===!0,et=!!M.map,se=!!M.matcap,ce=!!z,fe=!!M.aoMap,pe=!!M.lightMap,ne=!!M.bumpMap&&M.wireframe===!1,Me=!!M.normalMap,je=!!M.displacementMap,ht=!!M.emissiveMap,Z=!!M.metalnessMap,it=!!M.roughnessMap,G=M.anisotropy>0,Ct=M.clearcoat>0,xt=M.dispersion>0,N=M.retroreflectivity>0,T=M.iridescence>0,W=M.sheen>0,Y=M.transmission>0,te=G&&!!M.anisotropyMap,ve=Ct&&!!M.clearcoatMap,_e=Ct&&!!M.clearcoatNormalMap,ie=Ct&&!!M.clearcoatRoughnessMap,re=T&&!!M.iridescenceMap,Se=T&&!!M.iridescenceThicknessMap,Xe=W&&!!M.sheenColorMap,De=W&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,We=!!M.specularColorMap,Je=!!M.specularIntensityMap,rt=Y&&!!M.transmissionMap,V=Y&&!!M.thicknessMap,we=!!M.gradientMap,ae=!!M.alphaMap,Ae=M.alphaTest>0,Fe=!!M.alphaHash,he=!!M.extensions,Be=ci;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Be=i.toneMapping);let Re={shaderID:k,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:Ie,defines:M.defines,customVertexShaderID:ze,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&I._colorsTexture!==null,instancing:He,instancingColor:He&&I.instanceColor!==null,instancingMorph:He&&I.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:se,envMap:ce,envMapMode:ce&&z.mapping,envMapCubeUVHeight:O,aoMap:fe,lightMap:pe,bumpMap:ne,normalMap:Me,displacementMap:je,emissiveMap:ht,normalMapObjectSpace:Me&&M.normalMapType===Pf,normalMapTangentSpace:Me&&M.normalMapType===Jl,packedNormalMap:Me&&M.normalMapType===Jl&&s1(M.normalMap.format),metalnessMap:Z,roughnessMap:it,anisotropy:G,anisotropyMap:te,clearcoat:Ct,clearcoatMap:ve,clearcoatNormalMap:_e,clearcoatRoughnessMap:ie,dispersion:xt,retroreflection:N,iridescence:T,iridescenceMap:re,iridescenceThicknessMap:Se,sheen:W,sheenColorMap:Xe,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:We,specularIntensityMap:Je,transmission:Y,transmissionMap:rt,thicknessMap:V,gradientMap:we,opaque:M.transparent===!1&&M.blending===yr&&M.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ae,alphaHash:Fe,combine:M.combine,mapUv:et&&g(M.map.channel),aoMapUv:fe&&g(M.aoMap.channel),lightMapUv:pe&&g(M.lightMap.channel),bumpMapUv:ne&&g(M.bumpMap.channel),normalMapUv:Me&&g(M.normalMap.channel),displacementMapUv:je&&g(M.displacementMap.channel),emissiveMapUv:ht&&g(M.emissiveMap.channel),metalnessMapUv:Z&&g(M.metalnessMap.channel),roughnessMapUv:it&&g(M.roughnessMap.channel),anisotropyMapUv:te&&g(M.anisotropyMap.channel),clearcoatMapUv:ve&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(M.sheenRoughnessMap.channel),specularMapUv:Ce&&g(M.specularMap.channel),specularColorMapUv:We&&g(M.specularColorMap.channel),specularIntensityMapUv:Je&&g(M.specularIntensityMap.channel),transmissionMapUv:rt&&g(M.transmissionMap.channel),thicknessMapUv:V&&g(M.thicknessMap.channel),alphaMapUv:ae&&g(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Me||G),vertexNormals:!!L.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(et||ae),fog:!!w,useFog:M.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||L.attributes.normal===void 0&&Me===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Le,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:de,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:ht&&M.emissiveMap.isVideoTexture===!0&&pt.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&M.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Re.vertexUv1s=o.has(1),Re.vertexUv2s=o.has(2),Re.vertexUv3s=o.has(3),o.clear(),Re}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)E.push(C),E.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(d(E,M),v(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function d(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function S(M){let E=p[M.type],C;if(E){let P=bi[E];C=Ls.clone(P.uniforms)}else C=M.uniforms;return C}function _(M,E){let C=c.get(E);return C!==void 0?++C.usedTimes:(C=new n1(i,E,M,s),u.push(C),c.set(E,C)),C}function y(M){if(--M.usedTimes===0){let E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),c.delete(M.cacheKey),M.destroy()}}function b(M){l.remove(M)}function A(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:_,releaseProgram:y,releaseShaderCache:b,programs:u,dispose:A}}function o1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function a1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ud(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function l(f,p,g,x,m,d){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},i[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=d),e++,v}function o(f,p,g,x,m,d,v){v.reversedDepth===!0&&(m=-m);let S=l(f,p,g,x,m,d);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function u(f,p,g,x,m,d){let v=l(f,p,g,x,m,d);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function c(f,p){t.length>1&&t.sort(f||a1),n.length>1&&n.sort(p||cd),s.length>1&&s.sort(p||cd)}function h(){for(let f=e,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:u,finish:h,sort:c}}function l1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ud,i.set(n,[a])):s>=r.length?(a=new ud,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function c1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new me};break;case"SpotLight":t={position:new B,direction:new B,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function u1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var h1=0;function f1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d1(i){let e=new c1,t=u1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new B);let s=new B,r=new $e,a=new $e;function l(u){let c=0,h=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,S=0,_=0,y=0,b=0,A=0,M=0,E=0,C=0;u.sort(f1);for(let I=0,D=u.length;I<D;I++){let w=u[I],L=w.color,U=w.intensity,F=w.distance,z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===hs?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)c+=L.r*U,h+=L.g*U,f+=L.b*U;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],U);C++}else if(w.isSunLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let k=w.shadow,H=t.get(w);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=H,n.sunShadowMap[g]=z;let ee=k.getViewportCount();for(let de=0;de<ee;de++)n.sunShadowMatrix[x+de]=k.getMatrix(de),n.sunShadowCascade[x+de]=k._cascadeData[de];x+=ee,g++}n.sun[p]=O,p++}else if(w.isDirectionalLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let k=w.shadow,H=t.get(w);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=w.shadow.matrix,y++}n.directional[m]=O,m++}else if(w.isSpotLight){let O=e.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(L).multiplyScalar(U),O.distance=F,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[v]=O;let k=w.shadow;if(w.map&&(n.spotLightMap[M]=w.map,M++,k.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[v]=k.matrix,w.castShadow){let H=t.get(w);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=z,A++}v++}else if(w.isRectAreaLight){let O=e.get(w);O.color.copy(L).multiplyScalar(U),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[S]=O,S++}else if(w.isPointLight){let O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){let k=w.shadow,H=t.get(w);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[d]=H,n.pointShadowMap[d]=z,n.pointShadowMatrix[d]=w.shadow.matrix,b++}n.point[d]=O,d++}else if(w.isHemisphereLight){let O=e.get(w);O.skyColor.copy(w.color).multiplyScalar(U),O.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[_]=O,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==d||P.spotLength!==v||P.rectAreaLength!==S||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==A||P.numSpotMaps!==M||P.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=d,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.sunLength=p,P.directionalLength=m,P.pointLength=d,P.spotLength=v,P.rectAreaLength=S,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=A,P.numSpotMaps=M,P.numLightProbes=C,n.version=h1++)}function o(u,c){let h=0,f=0,p=0,g=0,x=0,m=0,d=c.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){let _=u[v];if(_.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),h++}else if(_.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(_.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:o,state:n}}function hd(i){let e=new d1(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function l(f){n.push(f)}function o(f){s.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function p1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new hd(i),e.set(s,[l])):r>=a.length?(l=new hd(i),a.push(l)):l=a[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`,x1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],v1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],fd=new $e,Oo=new B,ku=new B;function _1(i,e,t){let n=new fr,s=new Ge,r=new Ge,a=new Dt,l=new mr,o=new $a,u={},c=t.maxTextureSize,h={[ls]:pn,[pn]:ls,[hn]:hn},f=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ct(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=As;let d=this.type;this.render=function(b,A,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===af&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=As);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Fn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=d!==this.type;D&&A.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(L=>L.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,L=b.length;w<L;w++){let U=b[w],F=U.shadow;if(F===void 0){Qe("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let z=F.getFrameExtents();s.multiply(z),r.copy(F.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/z.x),s.x=r.x*z.x,F.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/z.y),s.y=r.y*z.y,F.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=O,F.map===null||D===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===_r){if(U.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new It(s.x,s.y,{format:hs,type:Qt,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new is(s.x,s.y,Qn),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=vi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Kt,F.map.depthTexture.magFilter=Kt}else U.isPointLight?(F.map=new tc(s.x),F.map.depthTexture=new Ya(s.x,ui)):(F.map=new It(s.x,s.y),F.map.depthTexture=new is(s.x,s.y,ui)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=vi,this.type===As?(F.map.depthTexture.compareFunction=O?Kl:$l,F.map.depthTexture.minFilter=Lt,F.map.depthTexture.magFilter=Lt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Kt,F.map.depthTexture.magFilter=Kt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let k=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();U.isPointLight!==!0&&F.updateMatrices(U,M);for(let H=0;H<k;H++){let ee=F.getCamera(H);if(U.isPointLight){let de=F.camera,Ze=F.matrix,Ie=U.distance||de.far;Ie!==de.far&&(de.far=Ie,de.updateProjectionMatrix()),Oo.setFromMatrixPosition(U.matrixWorld),de.position.copy(Oo),ku.copy(de.position),ku.add(x1[H]),de.up.copy(v1[H]),de.lookAt(ku),de.updateMatrixWorld(),Ze.makeTranslation(-Oo.x,-Oo.y,-Oo.z),fd.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),F._frustum.setFromProjectionMatrix(fd,de.coordinateSystem,de.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,H),i.clear();else{H===0&&(i.setRenderTarget(F.map),i.clear());let de=F.getViewport(H);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),I.viewport(a)}n=F.getFrustum(H),_(A,M,ee,U,this.type)}F.isPointLightShadow!==!0&&this.type===_r&&v(F,M),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,P)};function v(b,A){let M=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new It(s.x,s.y,{format:hs,type:Qt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,M,f,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,M,p,x,null)}function S(b,A,M,E){let C=null,P=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)C=P;else if(C=M.isPointLight===!0?o:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let I=C.uuid,D=A.uuid,w=u[I];w===void 0&&(w={},u[I]=w);let L=w[D];L===void 0&&(L=C.clone(),w[D]=L,A.addEventListener("dispose",y)),C=L}if(C.visible=A.visible,C.wireframe=A.wireframe,E===_r?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=i.properties.get(C);I.light=M}return C}function _(b,A,M,E,C){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===_r)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);let D=e.update(b),w=b.material;if(Array.isArray(w)){let L=D.groups;for(let U=0,F=L.length;U<F;U++){let z=L[U],O=w[z.materialIndex];if(O&&O.visible){let k=S(b,O,E,C);b.onBeforeShadow(i,b,A,M,D,k,z),i.renderBufferDirect(M,null,D,k,b,z),b.onAfterShadow(i,b,A,M,D,k,z)}}}else if(w.visible){let L=S(b,w,E,C);b.onBeforeShadow(i,b,A,M,D,L,null),i.renderBufferDirect(M,null,D,L,b,null),b.onAfterShadow(i,b,A,M,D,L,null)}}let I=b.children;for(let D=0,w=I.length;D<w;D++)_(I[D],A,M,E,C)}function y(b){b.target.removeEventListener("dispose",y);for(let M in u){let E=u[M],C=b.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function y1(i,e){function t(){let V=!1,we=new Dt,ae=null,Ae=new Dt(0,0,0,0);return{setMask:function(Fe){ae!==Fe&&!V&&(i.colorMask(Fe,Fe,Fe,Fe),ae=Fe)},setLocked:function(Fe){V=Fe},setClear:function(Fe,he,Be,Re,Et){Et===!0&&(Fe*=Re,he*=Re,Be*=Re),we.set(Fe,he,Be,Re),Ae.equals(we)===!1&&(i.clearColor(Fe,he,Be,Re),Ae.copy(we))},reset:function(){V=!1,ae=null,Ae.set(-1,0,0,0)}}}function n(){let V=!1,we=!1,ae=null,Ae=null,Fe=null;return{setReversed:function(he){if(we!==he){let Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),we=he;let Re=Fe;Fe=null,this.setClear(Re)}},getReversed:function(){return we},setTest:function(he){he?Q(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(he){ae!==he&&!V&&(i.depthMask(he),ae=he)},setFunc:function(he){if(we&&(he=Vf[he]),Ae!==he){switch(he){case La:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=he}},setLocked:function(he){V=he},setClear:function(he){Fe!==he&&(Fe=he,we&&(he=1-he),i.clearDepth(he))},reset:function(){V=!1,ae=null,Ae=null,Fe=null,we=!1}}}function s(){let V=!1,we=null,ae=null,Ae=null,Fe=null,he=null,Be=null,Re=null,Et=null;return{setTest:function(vt){V||(vt?Q(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(vt){we!==vt&&!V&&(i.stencilMask(vt),we=vt)},setFunc:function(vt,Pn,In){(ae!==vt||Ae!==Pn||Fe!==In)&&(i.stencilFunc(vt,Pn,In),ae=vt,Ae=Pn,Fe=In)},setOp:function(vt,Pn,In){(he!==vt||Be!==Pn||Re!==In)&&(i.stencilOp(vt,Pn,In),he=vt,Be=Pn,Re=In)},setLocked:function(vt){V=vt},setClear:function(vt){Et!==vt&&(i.clearStencil(vt),Et=vt)},reset:function(){V=!1,we=null,ae=null,Ae=null,Fe=null,he=null,Be=null,Re=null,Et=null}}}let r=new t,a=new n,l=new s,o=new WeakMap,u=new WeakMap,c={},h={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,S=null,_=null,y=null,b=null,A=null,M=new me(0,0,0),E=0,C=!1,P=null,I=null,D=null,w=null,L=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=z>=2);let k=null,H={},ee=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Ze=new Dt().fromArray(ee),Ie=new Dt().fromArray(de);function ze(V,we,ae,Ae){let Fe=new Uint8Array(4),he=i.createTexture();i.bindTexture(V,he),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<ae;Be++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(we+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return he}let $={};$[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Q(i.DEPTH_TEST),a.setFunc(rr),ne(!1),Me(ru),Q(i.CULL_FACE),fe(Fn);function Q(V){c[V]!==!0&&(i.enable(V),c[V]=!0)}function Le(V){c[V]!==!1&&(i.disable(V),c[V]=!1)}function He(V,we){return f[V]!==we?(i.bindFramebuffer(V,we),f[V]=we,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=we),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Ee(V,we){let ae=g,Ae=!1;if(V){ae=p.get(we),ae===void 0&&(ae=[],p.set(we,ae));let Fe=V.textures;if(ae.length!==Fe.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Be=Fe.length;he<Be;he++)ae[he]=i.COLOR_ATTACHMENT0+he;ae.length=Fe.length,Ae=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ae)}function et(V){return x!==V?(i.useProgram(V),x=V,!0):!1}let se={[Rs]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};se[hf]=i.MIN,se[ff]=i.MAX;let ce={[df]:i.ZERO,[pf]:i.ONE,[mf]:i.SRC_COLOR,[lu]:i.SRC_ALPHA,[Mf]:i.SRC_ALPHA_SATURATE,[_f]:i.DST_COLOR,[xf]:i.DST_ALPHA,[gf]:i.ONE_MINUS_SRC_COLOR,[cu]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[bf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[Ef]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(V,we,ae,Ae,Fe,he,Be,Re,Et,vt){if(V===Fn){m===!0&&(Le(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),V!==lf){if(V!==d||vt!==C){if((v!==Rs||y!==Rs)&&(i.blendEquation(i.FUNC_ADD),v=Rs,y=Rs),vt)switch(V){case yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",V);break}else switch(V){case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ou:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case au:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",V);break}S=null,_=null,b=null,A=null,M.set(0,0,0),E=0,d=V,C=vt}return}Fe=Fe||we,he=he||ae,Be=Be||Ae,(we!==v||Fe!==y)&&(i.blendEquationSeparate(se[we],se[Fe]),v=we,y=Fe),(ae!==S||Ae!==_||he!==b||Be!==A)&&(i.blendFuncSeparate(ce[ae],ce[Ae],ce[he],ce[Be]),S=ae,_=Ae,b=he,A=Be),(Re.equals(M)===!1||Et!==E)&&(i.blendColor(Re.r,Re.g,Re.b,Et),M.copy(Re),E=Et),d=V,C=!1}function pe(V,we){V.side===hn?Le(i.CULL_FACE):Q(i.CULL_FACE);let ae=V.side===pn;we&&(ae=!ae),ne(ae),V.blending===yr&&V.transparent===!1?fe(Fn):fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Ae=V.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ht(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(V){P!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),P=V)}function Me(V){V!==rf?(Q(i.CULL_FACE),V!==I&&(V===ru?i.cullFace(i.BACK):V===of?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),I=V}function je(V){V!==D&&(F&&i.lineWidth(V),D=V)}function ht(V,we,ae){V?(Q(i.POLYGON_OFFSET_FILL),(w!==we||L!==ae)&&(w=we,L=ae,a.getReversed()&&(we=-we),i.polygonOffset(we,ae))):Le(i.POLYGON_OFFSET_FILL)}function Z(V){V?Q(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function it(V){V===void 0&&(V=i.TEXTURE0+U-1),k!==V&&(i.activeTexture(V),k=V)}function G(V,we,ae){ae===void 0&&(k===null?ae=i.TEXTURE0+U-1:ae=k);let Ae=H[ae];Ae===void 0&&(Ae={type:void 0,texture:void 0},H[ae]=Ae),(Ae.type!==V||Ae.texture!==we)&&(k!==ae&&(i.activeTexture(ae),k=ae),i.bindTexture(V,we||$[V]),Ae.type=V,Ae.texture=we)}function Ct(){let V=H[k];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function xt(){try{i.compressedTexImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function T(){try{i.texSubImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function W(){try{i.texSubImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function ve(){try{i.texStorage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function _e(){try{i.texStorage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function ie(){try{i.texImage2D(...arguments)}catch(V){nt("WebGLState:",V)}}function re(){try{i.texImage3D(...arguments)}catch(V){nt("WebGLState:",V)}}function Se(V){return h[V]!==void 0?h[V]:i.getParameter(V)}function Xe(V,we){h[V]!==we&&(i.pixelStorei(V,we),h[V]=we)}function De(V){Ze.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Ze.copy(V))}function Ce(V){Ie.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Ie.copy(V))}function We(V,we){let ae=u.get(we);ae===void 0&&(ae=new WeakMap,u.set(we,ae));let Ae=ae.get(V);Ae===void 0&&(Ae=i.getUniformBlockIndex(we,V.name),ae.set(V,Ae))}function Je(V,we){let Ae=u.get(we).get(V);o.get(we)!==Ae&&(i.uniformBlockBinding(we,Ae,V.__bindingPointIndex),o.set(we,Ae))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},h={},k=null,H={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,S=null,_=null,y=null,b=null,A=null,M=new me(0,0,0),E=0,C=!1,P=null,I=null,D=null,w=null,L=null,Ze.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Q,disable:Le,bindFramebuffer:He,drawBuffers:Ee,useProgram:et,setBlending:fe,setMaterial:pe,setFlipSided:ne,setCullFace:Me,setLineWidth:je,setPolygonOffset:ht,setScissorTest:Z,activeTexture:it,bindTexture:G,unbindTexture:Ct,compressedTexImage2D:xt,compressedTexImage3D:N,texImage2D:ie,texImage3D:re,pixelStorei:Xe,getParameter:Se,updateUBOMapping:We,uniformBlockBinding:Je,texStorage2D:ve,texStorage3D:_e,texSubImage2D:T,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:te,scissor:De,viewport:Ce,reset:rt}}function M1(i,e,t,n,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ge,c=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,T){return g?new OffscreenCanvas(N,T):oo("canvas")}function m(N,T,W){let Y=1,te=xt(N);if((te.width>W||te.height>W)&&(Y=W/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ve=Math.floor(Y*te.width),_e=Math.floor(Y*te.height);f===void 0&&(f=x(ve,_e));let ie=T?x(ve,_e):f;return ie.width=ve,ie.height=_e,ie.getContext("2d").drawImage(N,0,0,ve,_e),Qe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ve+"x"+_e+")."),ie}else return"data"in N&&Qe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),N;return N}function d(N){return N.generateMipmaps}function v(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,T,W,Y,te,ve=!1){if(N!==null){if(i[N]!==void 0)return i[N];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let _e;Y&&(_e=e.get("EXT_texture_norm16"),_e||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=T;if(T===i.RED&&(W===i.FLOAT&&(ie=i.R32F),W===i.HALF_FLOAT&&(ie=i.R16F),W===i.UNSIGNED_BYTE&&(ie=i.R8),W===i.UNSIGNED_SHORT&&_e&&(ie=_e.R16_EXT),W===i.SHORT&&_e&&(ie=_e.R16_SNORM_EXT)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.R8UI),W===i.UNSIGNED_SHORT&&(ie=i.R16UI),W===i.UNSIGNED_INT&&(ie=i.R32UI),W===i.BYTE&&(ie=i.R8I),W===i.SHORT&&(ie=i.R16I),W===i.INT&&(ie=i.R32I)),T===i.RG&&(W===i.FLOAT&&(ie=i.RG32F),W===i.HALF_FLOAT&&(ie=i.RG16F),W===i.UNSIGNED_BYTE&&(ie=i.RG8),W===i.UNSIGNED_SHORT&&_e&&(ie=_e.RG16_EXT),W===i.SHORT&&_e&&(ie=_e.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.RG8UI),W===i.UNSIGNED_SHORT&&(ie=i.RG16UI),W===i.UNSIGNED_INT&&(ie=i.RG32UI),W===i.BYTE&&(ie=i.RG8I),W===i.SHORT&&(ie=i.RG16I),W===i.INT&&(ie=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),W===i.UNSIGNED_INT&&(ie=i.RGB32UI),W===i.BYTE&&(ie=i.RGB8I),W===i.SHORT&&(ie=i.RGB16I),W===i.INT&&(ie=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),W===i.UNSIGNED_INT&&(ie=i.RGBA32UI),W===i.BYTE&&(ie=i.RGBA8I),W===i.SHORT&&(ie=i.RGBA16I),W===i.INT&&(ie=i.RGBA32I)),T===i.RGB&&(W===i.UNSIGNED_SHORT&&_e&&(ie=_e.RGB16_EXT),W===i.SHORT&&_e&&(ie=_e.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),T===i.RGBA){let re=ve?ro:pt.getTransfer(te);W===i.FLOAT&&(ie=i.RGBA32F),W===i.HALF_FLOAT&&(ie=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ie=re===St?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&_e&&(ie=_e.RGBA16_EXT),W===i.SHORT&&_e&&(ie=_e.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(N,T){let W;return N?T===null||T===ui||T===br?W=i.DEPTH24_STENCIL8:T===Qn?W=i.DEPTH32F_STENCIL8:T===Mr&&(W=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ui||T===br?W=i.DEPTH_COMPONENT24:T===Qn?W=i.DEPTH_COMPONENT32F:T===Mr&&(W=i.DEPTH_COMPONENT16),W}function b(N,T){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Kt&&N.minFilter!==Lt?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function A(N){let T=N.target;T.removeEventListener("dispose",A),E(T),T.isVideoTexture&&c.delete(T),T.isHTMLTexture&&h.delete(T)}function M(N){let T=N.target;T.removeEventListener("dispose",M),P(T)}function E(N){let T=n.get(N);if(T.__webglInit===void 0)return;let W=N.source,Y=p.get(W);if(Y){let te=Y[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(N),Object.keys(Y).length===0&&p.delete(W)}n.remove(N)}function C(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let W=N.source,Y=p.get(W);delete Y[T.__cacheKey],a.memory.textures--}function P(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let te=0;te<T.__webglFramebuffer[Y].length;te++)i.deleteFramebuffer(T.__webglFramebuffer[Y][te]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=N.textures;for(let Y=0,te=W.length;Y<te;Y++){let ve=n.get(W[Y]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(W[Y])}n.remove(N)}let I=0;function D(){I=0}function w(){return I}function L(N){I=N}function U(){let N=I;return N>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,N}function F(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function z(N,T){let W=n.get(N);if(N.isVideoTexture&&G(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let Y=N.image;if(Y===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(W,N,T);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function O(N,T){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){Le(W,N,T);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function k(N,T){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){Le(W,N,T);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function H(N,T){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){He(W,N,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}let ee={[or]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},de={[Kt]:i.NEAREST,[Rf]:i.NEAREST_MIPMAP_NEAREST,[Ro]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[fl]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Ze={[Lf]:i.NEVER,[Of]:i.ALWAYS,[Df]:i.LESS,[$l]:i.LEQUAL,[Nf]:i.EQUAL,[Kl]:i.GEQUAL,[Uf]:i.GREATER,[Ff]:i.NOTEQUAL};function Ie(N,T){if(T.type===Qn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Lt||T.magFilter===fl||T.magFilter===Ro||T.magFilter===On||T.minFilter===Lt||T.minFilter===fl||T.minFilter===Ro||T.minFilter===On)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ee[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ee[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ee[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,de[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,de[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Ze[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Kt||T.minFilter!==Ro&&T.minFilter!==On||T.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ze(N,T){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",A));let Y=T.source,te=p.get(Y);te===void 0&&(te={},p.set(Y,te));let ve=F(T);if(ve!==N.__cacheKey){te[ve]===void 0&&(te[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),te[ve].usedTimes++;let _e=te[N.__cacheKey];_e!==void 0&&(te[N.__cacheKey].usedTimes--,_e.usedTimes===0&&C(T)),N.__cacheKey=ve,N.__webglTexture=te[ve].texture}return W}function $(N,T,W){return Math.floor(Math.floor(N/W)/T)}function Q(N,T,W,Y){let ve=N.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,W,Y,T.data);else{ve.sort((Xe,De)=>Xe.start-De.start);let _e=0;for(let Xe=1;Xe<ve.length;Xe++){let De=ve[_e],Ce=ve[Xe],We=De.start+De.count,Je=$(Ce.start,T.width,4),rt=$(De.start,T.width,4);Ce.start<=We+1&&Je===rt&&$(Ce.start+Ce.count-1,T.width,4)===Je?De.count=Math.max(De.count,Ce.start+Ce.count-De.start):(++_e,ve[_e]=Ce)}ve.length=_e+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Xe=0,De=ve.length;Xe<De;Xe++){let Ce=ve[Xe],We=Math.floor(Ce.start/4),Je=Math.ceil(Ce.count/4),rt=We%T.width,V=Math.floor(We/T.width),we=Je,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,rt,V,we,ae,W,Y,T.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Le(N,T,W){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);let te=ze(N,T),ve=T.source;t.bindTexture(Y,N.__webglTexture,i.TEXTURE0+W);let _e=n.get(ve);if(ve.version!==_e.__version||te===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ae=pt.getPrimaries(pt.workingColorSpace),Ae=T.colorSpace===hi?null:pt.getPrimaries(T.colorSpace),Fe=T.colorSpace===hi||ae===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let re=m(T.image,!1,s.maxTextureSize);re=Ct(T,re);let Se=r.convert(T.format,T.colorSpace),Xe=r.convert(T.type),De=_(T.internalFormat,Se,Xe,T.normalized,T.colorSpace,T.isVideoTexture);Ie(Y,T);let Ce,We=T.mipmaps,Je=T.isVideoTexture!==!0,rt=_e.__version===void 0||te===!0,V=ve.dataReady,we=b(T,re);if(T.isDepthTexture)De=y(T.format===us,T.type),rt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,Se,Xe,null));else if(T.isDataTexture)if(We.length>0){Je&&rt&&t.texStorage2D(i.TEXTURE_2D,we,De,We[0].width,We[0].height);for(let ae=0,Ae=We.length;ae<Ae;ae++)Ce=We[ae],Je?V&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,Se,Xe,Ce.data):t.texImage2D(i.TEXTURE_2D,ae,De,Ce.width,Ce.height,0,Se,Xe,Ce.data);T.generateMipmaps=!1}else Je?(rt&&t.texStorage2D(i.TEXTURE_2D,we,De,re.width,re.height),V&&Q(T,re,Se,Xe)):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,Se,Xe,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Je&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,De,We[0].width,We[0].height,re.depth);for(let ae=0,Ae=We.length;ae<Ae;ae++)if(Ce=We[ae],T.format!==Bn)if(Se!==null)if(Je){if(V)if(T.layerUpdates.size>0){let Fe=Cu(Ce.width,Ce.height,T.format,T.type);for(let he of T.layerUpdates){let Be=Ce.data.subarray(he*Fe/Ce.data.BYTES_PER_ELEMENT,(he+1)*Fe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,he,Ce.width,Ce.height,1,Se,Be)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ce.width,Ce.height,re.depth,Se,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,De,Ce.width,Ce.height,re.depth,0,Ce.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ce.width,Ce.height,re.depth,Se,Xe,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,De,Ce.width,Ce.height,re.depth,0,Se,Xe,Ce.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Je&&rt&&t.texStorage2D(i.TEXTURE_2D,we,De,We[0].width,We[0].height);for(let ae=0,Ae=We.length;ae<Ae;ae++)Ce=We[ae],T.format!==Bn?Se!==null?Je?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,Se,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,De,Ce.width,Ce.height,0,Ce.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?V&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,Se,Xe,Ce.data):t.texImage2D(i.TEXTURE_2D,ae,De,Ce.width,Ce.height,0,Se,Xe,Ce.data)}else if(T.isDataArrayTexture)if(Je){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,De,re.width,re.height,re.depth),V)if(T.layerUpdates.size>0){let ae=Cu(re.width,re.height,T.format,T.type);for(let Ae of T.layerUpdates){let Fe=re.data.subarray(Ae*ae/re.data.BYTES_PER_ELEMENT,(Ae+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,re.width,re.height,1,Se,Xe,Fe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Xe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,Se,Xe,re.data);else if(T.isData3DTexture)Je?(rt&&t.texStorage3D(i.TEXTURE_3D,we,De,re.width,re.height,re.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Xe,re.data)):t.texImage3D(i.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,Se,Xe,re.data);else if(T.isFramebufferTexture){if(rt)if(Je)t.texStorage2D(i.TEXTURE_2D,we,De,re.width,re.height);else{let ae=re.width,Ae=re.height;for(let Fe=0;Fe<we;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,De,ae,Ae,0,Se,Xe,null),ae>>=1,Ae>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),re.parentNode!==ae){ae.appendChild(re),h.add(T),ae.onpaint=Ae=>{let Fe=Ae.changedElements;for(let he of h)Fe.includes(he.image)&&(he.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Fe=i.RGBA,he=i.RGBA,Be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,he,Be,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(We.length>0){if(Je&&rt){let ae=xt(We[0]);t.texStorage2D(i.TEXTURE_2D,we,De,ae.width,ae.height)}for(let ae=0,Ae=We.length;ae<Ae;ae++)Ce=We[ae],Je?V&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Se,Xe,Ce):t.texImage2D(i.TEXTURE_2D,ae,De,Se,Xe,Ce);T.generateMipmaps=!1}else if(Je){if(rt){let ae=xt(re);t.texStorage2D(i.TEXTURE_2D,we,De,ae.width,ae.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Xe,re)}else t.texImage2D(i.TEXTURE_2D,0,De,Se,Xe,re);d(T)&&v(Y),_e.__version=ve.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function He(N,T,W){if(T.image.length!==6)return;let Y=ze(N,T),te=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let ve=n.get(te);if(te.version!==ve.__version||Y===!0){t.activeTexture(i.TEXTURE0+W);let _e=pt.getPrimaries(pt.workingColorSpace),ie=T.colorSpace===hi?null:pt.getPrimaries(T.colorSpace),re=T.colorSpace===hi||_e===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Se=T.isCompressedTexture||T.image[0].isCompressedTexture,Xe=T.image[0]&&T.image[0].isDataTexture,De=[];for(let he=0;he<6;he++)!Se&&!Xe?De[he]=m(T.image[he],!0,s.maxCubemapSize):De[he]=Xe?T.image[he].image:T.image[he],De[he]=Ct(T,De[he]);let Ce=De[0],We=r.convert(T.format,T.colorSpace),Je=r.convert(T.type),rt=_(T.internalFormat,We,Je,T.normalized,T.colorSpace),V=T.isVideoTexture!==!0,we=ve.__version===void 0||Y===!0,ae=te.dataReady,Ae=b(T,Ce);Ie(i.TEXTURE_CUBE_MAP,T);let Fe;if(Se){V&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,rt,Ce.width,Ce.height);for(let he=0;he<6;he++){Fe=De[he].mipmaps;for(let Be=0;Be<Fe.length;Be++){let Re=Fe[Be];T.format!==Bn?We!==null?V?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,Re.width,Re.height,We,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,rt,Re.width,Re.height,0,Re.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,Re.width,Re.height,We,Je,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,rt,Re.width,Re.height,0,We,Je,Re.data)}}}else{if(Fe=T.mipmaps,V&&we){Fe.length>0&&Ae++;let he=xt(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,rt,he.width,he.height)}for(let he=0;he<6;he++)if(Xe){V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De[he].width,De[he].height,We,Je,De[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,De[he].width,De[he].height,0,We,Je,De[he].data);for(let Be=0;Be<Fe.length;Be++){let Et=Fe[Be].image[he].image;V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,Et.width,Et.height,We,Je,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,rt,Et.width,Et.height,0,We,Je,Et.data)}}else{V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Je,De[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,We,Je,De[he]);for(let Be=0;Be<Fe.length;Be++){let Re=Fe[Be];V?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,We,Je,Re.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,rt,We,Je,Re.image[he])}}}d(T)&&v(i.TEXTURE_CUBE_MAP),ve.__version=te.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ee(N,T,W,Y,te,ve){let _e=r.convert(W.format,W.colorSpace),ie=r.convert(W.type),re=_(W.internalFormat,_e,ie,W.normalized,W.colorSpace),Se=n.get(T),Xe=n.get(W);if(Xe.__renderTarget=T,!Se.__hasExternalTextures){let De=Math.max(1,T.width>>ve),Ce=Math.max(1,T.height>>ve);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ve,re,De,Ce,T.depth,0,_e,ie,null):t.texImage2D(te,ve,re,De,Ce,0,_e,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),it(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,te,Xe.__webglTexture,0,Z(T)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,te,Xe.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(N,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let Y=T.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,ve=y(T.stencilBuffer,te),_e=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z(T),ve,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z(T),ve,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ve,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,N)}else{let Y=T.textures;for(let te=0;te<Y.length;te++){let ve=Y[te],_e=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),re=_(ve.internalFormat,_e,ie,ve.normalized,ve.colorSpace);it(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z(T),re,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z(T),re,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,re,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(N,T,W){let Y=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(T.depthTexture);if(te.__renderTarget=T,(!te.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y){if(te.__webglInit===void 0&&(te.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,T.depthTexture);let Se=r.convert(T.depthTexture.format),Xe=r.convert(T.depthTexture.type),De;T.depthTexture.format===vi?De=i.DEPTH_COMPONENT24:T.depthTexture.format===us&&(De=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,De,T.width,T.height,0,Se,Xe,null)}}else z(T.depthTexture,0);let ve=te.__webglTexture,_e=Z(T),ie=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,re=T.depthTexture.format===us?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===vi)it(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ie,ve,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,re,ie,ve,0);else if(T.depthTexture.format===us)it(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ie,ve,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,re,ie,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(N){let T=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let Y=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){let te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=Y}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)se(T.__webglFramebuffer[Y],N,Y);else{let Y=N.texture.mipmaps;Y&&Y.length>0?se(T.__webglFramebuffer[0],N,0):se(T.__webglFramebuffer,N,0)}else if(W){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),et(T.__webglDepthbuffer[Y],N,!1);else{let te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ve)}}else{let Y=N.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),et(T.__webglDepthbuffer,N,!1);else{let te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ve)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(N,T,W){let Y=n.get(N);T!==void 0&&Ee(Y.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ce(N)}function pe(N){let T=N.texture,W=n.get(N),Y=n.get(T);N.addEventListener("dispose",M);let te=N.textures,ve=N.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,a.memory.textures++),ve){W.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ie]=[];for(let re=0;re<T.mipmaps.length;re++)W.__webglFramebuffer[ie][re]=i.createFramebuffer()}else W.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ie=0;ie<T.mipmaps.length;ie++)W.__webglFramebuffer[ie]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ie=0,re=te.length;ie<re;ie++){let Se=n.get(te[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&it(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){let re=te[ie];W.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ie]);let Se=r.convert(re.format,re.colorSpace),Xe=r.convert(re.type),De=_(re.internalFormat,Se,Xe,re.normalized,re.colorSpace,N.isXRRenderTarget===!0),Ce=Z(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,De,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,W.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),et(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,T);for(let ie=0;ie<6;ie++)if(T.mipmaps&&T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)Ee(W.__webglFramebuffer[ie][re],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else Ee(W.__webglFramebuffer[ie],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(T)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ie=0,re=te.length;ie<re;ie++){let Se=te[ie],Xe=n.get(Se),De=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,Xe.__webglTexture),Ie(De,Se),Ee(W.__webglFramebuffer,N,Se,i.COLOR_ATTACHMENT0+ie,De,0),d(Se)&&v(De)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ie=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),Ie(ie,T),T.mipmaps&&T.mipmaps.length>0)for(let re=0;re<T.mipmaps.length;re++)Ee(W.__webglFramebuffer[re],N,T,i.COLOR_ATTACHMENT0,ie,re);else Ee(W.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,ie,0);d(T)&&v(ie),t.unbindTexture()}N.depthBuffer&&ce(N)}function ne(N){let T=N.textures;for(let W=0,Y=T.length;W<Y;W++){let te=T[W];if(d(te)){let ve=S(N),_e=n.get(te).__webglTexture;t.bindTexture(ve,_e),v(ve),t.unbindTexture()}}}let Me=[],je=[];function ht(N){if(N.samples>0){if(it(N)===!1){let T=N.textures,W=N.width,Y=N.height,te=i.COLOR_BUFFER_BIT,ve=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(N),ie=T.length>1;if(ie)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let re=N.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Se]);let Xe=n.get(T[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,te,i.NEAREST),o===!0&&(Me.length=0,je.length=0,Me.push(i.COLOR_ATTACHMENT0+Se),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Me.push(ve),je.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Se]);let Xe=n.get(T[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&o){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Z(N){return Math.min(s.maxSamples,N.samples)}function it(N){let T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function G(N){let T=a.render.frame;c.get(N)!==T&&(c.set(N,T),N.update())}function Ct(N,T){let W=N.colorSpace,Y=N.format,te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==so&&W!==hi&&(pt.getTransfer(W)===St?(Y!==Bn||te!==yn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",W)),T}function xt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.getTextureUnits=w,this.setTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=fe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function b1(i,e){function t(n,s=hi){let r,a=pt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vu)return i.BYTE;if(n===_u)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Qt)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===Su)return i.RGB;if(n===Bn)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===Ps)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===xl)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===Co||n===Po||n===Io||n===Lo)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===yl||n===Ml||n===bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===Tl||n===El||n===wl||n===Al||n===Do||n===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===Tl)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wl)return r.COMPRESSED_R11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Do)return r.COMPRESSED_RG11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ul)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Wl||n===Xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ql||n===Yl||n===No||n===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ql)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T1=`
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

}`,Zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ft({vertexShader:S1,fragmentShader:T1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ju=class extends _i{constructor(e,t){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,u=null,c=null,h=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Zu,d={},v=t.getContextAttributes(),S=null,_=null,y=[],b=[],A=new Ge,M=null,E=null,C=new dn;C.viewport=new Dt;let P=new dn;P.viewport=new Dt;let I=[C,P],D=new ll,w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=y[$];return Q===void 0&&(Q=new ur,y[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=y[$];return Q===void 0&&(Q=new ur,y[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=y[$];return Q===void 0&&(Q=new ur,y[$]=Q),Q.getHandSpace()};function U($){let Q=b.indexOf($.inputSource);if(Q===-1)return;let Le=y[Q];Le!==void 0&&(Le.update($.inputSource,$.frame,u||a),Le.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",z);for(let $=0;$<y.length;$++){let Q=b[$];Q!==null&&(b[$]=null,y[$].disconnect(Q))}w=null,L=null,m.reset();for(let $ in d)delete d[$];if(e.setRenderTarget(S),p=null,f=null,h=null,s=null,_=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,He=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=v.stencil?us:vi,He=v.stencil?br:ui);let et={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(et),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new It(f.textureWidth,f.textureHeight,{format:Bn,type:yn,depthTexture:new is(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new It(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),u=null,a=await s.requestReferenceSpace(l),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z($){for(let Q=0;Q<$.removed.length;Q++){let Le=$.removed[Q],He=b.indexOf(Le);He>=0&&(b[He]=null,y[He].disconnect(Le))}for(let Q=0;Q<$.added.length;Q++){let Le=$.added[Q],He=b.indexOf(Le);if(He===-1){for(let et=0;et<y.length;et++)if(et>=b.length){b.push(Le),He=et;break}else if(b[et]===null){b[et]=Le,He=et;break}if(He===-1)break}let Ee=y[He];Ee&&Ee.connect(Le)}}let O=new B,k=new B;function H($,Q,Le){O.setFromMatrixPosition(Q.matrixWorld),k.setFromMatrixPosition(Le.matrixWorld);let He=O.distanceTo(k),Ee=Q.projectionMatrix.elements,et=Le.projectionMatrix.elements,se=Ee[14]/(Ee[10]-1),ce=Ee[14]/(Ee[10]+1),fe=(Ee[9]+1)/Ee[5],pe=(Ee[9]-1)/Ee[5],ne=(Ee[8]-1)/Ee[0],Me=(et[8]+1)/et[0],je=se*ne,ht=se*Me,Z=He/(-ne+Me),it=Z*-ne;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ(Z),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let G=se+Z,Ct=ce+Z,xt=je-it,N=ht+(He-it),T=fe*ce/Ct*G,W=pe*ce/Ct*G;$.projectionMatrix.makePerspective(xt,N,T,W,G,Ct),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ee($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,Le=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Le=m.depthFar)),D.near=P.near=C.near=Q,D.far=P.far=C.far=Le,(w!==D.near||L!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),w=D.near,L=D.far),D.layers.mask=$.layers.mask|6,C.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let He=$.parent,Ee=D.cameras;ee(D,He);for(let et=0;et<Ee.length;et++)ee(Ee[et],He);Ee.length===2?H(D,C,P):D.projectionMatrix.copy(C.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),de($,D,He)};function de($,Q,Le){Le===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(Le.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ao*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return o},this.setFoveation=function($){o=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function($){return d[$]};let Ze=null;function Ie($,Q){if(c=Q.getViewerPose(u||a),g=Q,c!==null){let Le=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let He=!1;Le.length!==D.cameras.length&&(D.cameras.length=0,He=!0);for(let ce=0;ce<Le.length;ce++){let fe=Le[ce],pe=null;if(p!==null)pe=p.getViewport(fe);else{let Me=h.getViewSubImage(f,fe);pe=Me.viewport,ce===0&&(e.setRenderTargetTextures(_,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(_))}let ne=I[ce];ne===void 0&&(ne=new dn,ne.layers.enable(ce),ne.viewport=new Dt,I[ce]=ne),ne.matrix.fromArray(fe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(fe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(pe.x,pe.y,pe.width,pe.height),ce===0&&(D.matrix.copy(ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),He===!0&&D.cameras.push(ne)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let ce=h.getDepthInformation(Le[0]);ce&&ce.isValid&&ce.texture&&m.init(ce,s.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let ce=0;ce<Le.length;ce++){let fe=Le[ce].camera;if(fe){let pe=d[fe];pe||(pe=new xo,d[fe]=pe);let ne=h.getCameraImage(fe);pe.sourceTexture=ne}}}}for(let Le=0;Le<y.length;Le++){let He=b[Le],Ee=y[Le];He!==null&&Ee!==void 0&&Ee.update(He,Q,u||a)}Ze&&Ze($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ze=new dd;ze.setAnimationLoop(Ie),this.setAnimationLoop=function($){Ze=$},this.dispose=function(){}}},E1=new $e,_d=new st;_d.set(-1,0,0,0,1,0,0,0,1);function w1(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,wu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,S,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?o(m,d,v,S):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d),S=v.envMap,_=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(E1.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_d),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,v,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A1(i,e,t,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,y){let b=y.program;n.uniformBlockBinding(_,b)}function u(_,y){let b=s[_.id];b===void 0&&(m(_),b=c(_),s[_.id]=b,_.addEventListener("dispose",v));let A=y.program;n.updateUBOMapping(_,A);let M=e.render.frame;r[_.id]!==M&&(f(_),r[_.id]=M)}function c(_){let y=h();_.__bindingPointIndex=y;let b=i.createBuffer(),A=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function h(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],b=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,E=b.length;M<E;M++){let C=b[M];if(Array.isArray(C))for(let P=0,I=C.length;P<I;P++)p(C[P],M,P,A);else p(C,M,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,y,b,A){if(x(_,y,b,A)===!0){let M=_.__offset,E=_.value;if(Array.isArray(E)){let C=0;for(let P=0;P<E.length;P++){let I=E[P],D=d(I);g(I,_.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function g(_,y,b){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,b)}function x(_,y,b,A){let M=_.value,E=y+"_"+b;if(A[E]===void 0)return typeof M=="number"||typeof M=="boolean"?A[E]=M:ArrayBuffer.isView(M)?A[E]=M.slice():A[E]=M.clone(),!0;{let C=A[E];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return A[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function m(_){let y=_.uniforms,b=0,A=16;for(let E=0,C=y.length;E<C;E++){let P=Array.isArray(y[E])?y[E]:[y[E]];for(let I=0,D=P.length;I<D;I++){let w=P[I],L=Array.isArray(w.value)?w.value:[w.value];for(let U=0,F=L.length;U<F;U++){let z=L[U],O=d(z),k=b%A,H=k%O.boundary,ee=k+H;b+=H,ee!==0&&A-ee<O.storage&&(b+=A-ee),w.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,b+=O.storage}}}let M=b%A;return M>0&&(b+=A-M),_.__size=b,_.__cache={},this}function d(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",_),y}function v(_){let y=_.target;y.removeEventListener("dispose",v);let b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:o,update:u,dispose:S}}var R1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function C1(){return Mi===null&&(Mi=new ns(R1,16,16,hs,Qt),Mi.name="DFG_LUT",Mi.minFilter=Lt,Mi.magFilter=Lt,Mi.wrapS=xi,Mi.wrapT=xi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var nc=class{constructor(e={}){let{canvas:t=zf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=yn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=p,m=new Set([vl,xl,gl]),d=new Set([yn,ui,Mr,br,pl,ml]),v=new Uint32Array(4),S=new Int32Array(4),_=new B,y=null,b=null,A=[],M=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,I=null,D=null,w=null,L=null;this._outputColorSpace=zt;let U=0,F=0,z=null,O=-1,k=null,H=new Dt,ee=new Dt,de=null,Ze=new me(0),Ie=0,ze=t.width,$=t.height,Q=1,Le=null,He=null,Ee=new Dt(0,0,ze,$),et=new Dt(0,0,ze,$),se=!1,ce=new fr,fe=!1,pe=!1,ne=new $e,Me=new B,je=new Dt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function it(){return z===null?Q:1}let G=n;function Ct(R,X){return t.getContext(R,X)}let xt,N,T,W,Y,te,ve,_e,ie,re,Se,Xe,De,Ce,We,Je,rt,V,we,ae,Ae,Fe,he;try{let R={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),G===null){let X="webgl2";if(G=Ct(X,R),G===null)throw Ct(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(R){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),nt("WebGLRenderer: "+R.message),R}function Be(){xt=new Fx(G),xt.init(),Ae=new b1(G,xt),N=new wx(G,xt,e,Ae),T=new y1(G,xt),N.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),D=G.createFramebuffer(),w=G.createFramebuffer(),L=G.createFramebuffer(),W=new zx(G),Y=new o1,te=new M1(G,xt,T,Y,N,Ae,W),ve=new Ux(C),_e=new H0(G),Fe=new Tx(G,_e),ie=new Ox(G,_e,W,Fe),re=new Hx(G,ie,_e,Fe,W),V=new kx(G,N,te),We=new Ax(Y),Se=new r1(C,ve,xt,N,Fe,We),Xe=new w1(C,Y),De=new l1,Ce=new p1(xt),rt=new Sx(C,ve,T,re,g,o),Je=new _1(C,re,N),he=new A1(G,W,N,T),we=new Ex(G,xt,W),ae=new Bx(G,xt,W),W.programs=Se.programs,C.capabilities=N,C.extensions=xt,C.properties=Y,C.renderLists=De,C.shadowMap=Je,C.state=T,C.info=W}x!==yn&&(E=new Gx(x,t.width,t.height,l,s,r));let Re=new Ju(C,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(ze,$,!1))},this.getSize=function(R){return R.set(ze,$)},this.setSize=function(R,X,j=!0){if(Re.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=R,$=X,t.width=Math.floor(R*Q),t.height=Math.floor(X*Q),j===!0&&(t.style.width=R+"px",t.style.height=X+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(ze*Q,$*Q).floor()},this.setDrawingBufferSize=function(R,X,j){ze=R,$=X,Q=j,t.width=Math.floor(R*j),t.height=Math.floor(X*j),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(x===yn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(Ee)},this.setViewport=function(R,X,j,q){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,X,j,q),T.viewport(H.copy(Ee).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(et)},this.setScissor=function(R,X,j,q){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,X,j,q),T.scissor(ee.copy(et).multiplyScalar(Q).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(R){T.setScissorTest(se=R)},this.setOpaqueSort=function(R){Le=R},this.setTransparentSort=function(R){He=R},this.getClearColor=function(R){return R.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,j=!0){let q=0;if(R){let J=!1;if(z!==null){let xe=z.texture.format;J=m.has(xe)}if(J){let xe=z.texture.type,ke=d.has(xe),Ne=rt.getClearColor(),Ve=rt.getClearAlpha(),K=Ne.r,Te=Ne.g,ye=Ne.b;ke?(v[0]=K,v[1]=Te,v[2]=ye,v[3]=Ve,G.clearBufferuiv(G.COLOR,0,v)):(S[0]=K,S[1]=Te,S[2]=ye,S[3]=Ve,G.clearBufferiv(G.COLOR,0,S))}else q|=G.COLOR_BUFFER_BIT}X&&(q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),rt.dispose(),De.dispose(),Ce.dispose(),Y.dispose(),ve.dispose(),re.dispose(),Fe.dispose(),he.dispose(),Se.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Wr),Re.removeEventListener("sessionend",Xr),pi.stop()};function Et(R){R.preventDefault(),Eu("WebGLRenderer: Context Lost."),P=!0}function vt(){Eu("WebGLRenderer: Context Restored."),P=!1;let R=W.autoReset,X=Je.enabled,j=Je.autoUpdate,q=Je.needsUpdate,J=Je.type;Be(),W.autoReset=R,Je.enabled=X,Je.autoUpdate=j,Je.needsUpdate=q,Je.type=J}function Pn(R){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function In(R){let X=R.target;X.removeEventListener("dispose",In),jo(X)}function jo(R){Qo(R),Y.remove(R)}function Qo(R){let X=Y.get(R).programs;X!==void 0&&(X.forEach(function(j){Se.releaseProgram(j)}),R.isShaderMaterial&&Se.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,j,q,J,xe){X===null&&(X=ht);let ke=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ne=na(R,X,j,q,J);T.setMaterial(q,ke);let Ve=j.index,K=1;if(q.wireframe===!0){if(Ve=ie.getWireframeAttribute(j),Ve===void 0)return;K=2}let Te=j.drawRange,ye=j.attributes.position,be=Te.start*K,Ye=(Te.start+Te.count)*K;xe!==null&&(be=Math.max(be,xe.start*K),Ye=Math.min(Ye,(xe.start+xe.count)*K)),Ve!==null?(be=Math.max(be,0),Ye=Math.min(Ye,Ve.count)):ye!=null&&(be=Math.max(be,0),Ye=Math.min(Ye,ye.count));let lt=Ye-be;if(lt<0||lt===1/0)return;Fe.setup(J,q,Ne,j,Ve);let Mt,_t=we;if(Ve!==null&&(Mt=_e.get(Ve),_t=ae,_t.setIndex(Mt)),J.isMesh)q.wireframe===!0?(T.setLineWidth(q.wireframeLinewidth*it()),_t.setMode(G.LINES)):_t.setMode(G.TRIANGLES);else if(J.isLine){let Yt=q.linewidth;Yt===void 0&&(Yt=1),T.setLineWidth(Yt*it()),J.isLineSegments?_t.setMode(G.LINES):J.isLineLoop?_t.setMode(G.LINE_LOOP):_t.setMode(G.LINE_STRIP)}else J.isPoints?_t.setMode(G.POINTS):J.isSprite&&_t.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))_t.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Yt=J._multiDrawStarts,Pe=J._multiDrawCounts,Ut=J._multiDrawCount,dt=Ve?_e.get(Ve).bytesPerElement:1,wn=Y.get(q).currentProgram.getUniforms();for(let Xt=0;Xt<Ut;Xt++)wn.setValue(G,"_gl_DrawID",Xt),_t.render(Yt[Xt]/dt,Pe[Xt])}else if(J.isInstancedMesh)_t.renderInstances(be,lt,J.count);else if(j.isInstancedBufferGeometry){let Yt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pe=Math.min(j.instanceCount,Yt);_t.renderInstances(be,lt,Pe)}else _t.render(be,lt)};function Vr(R,X,j,q){I!==null&&R.isNodeMaterial&&I.setObject(q,R),fe===!0&&We.setState(R,j,!1),R.transparent===!0&&R.side===hn&&R.forceSinglePass===!1?(R.side=pn,R.needsUpdate=!0,mi(R,X,q),R.side=ls,R.needsUpdate=!0,mi(R,X,q),R.side=hn):mi(R,X,q)}this.compile=function(R,X,j=null){j===null&&(j=R),I!==null&&I.renderStart(R,X,j),b=Ce.get(j),b.init(X),M.push(b),j.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),R!==j&&R.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(b.pushLight(J),J.castShadow&&b.pushShadow(J))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),pe=this.localClippingEnabled,fe=We.init(this.clippingPlanes,pe),fe===!0&&We.setGlobalState(this.clippingPlanes,X),I!==null&&Je.render(b.state.shadowsArray,j,X);let q=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let xe=J.material;if(xe)if(Array.isArray(xe))for(let ke=0;ke<xe.length;ke++){let Ne=xe[ke];Vr(Ne,j,X,J),q.add(Ne)}else Vr(xe,j,X,J),q.add(xe)}),b=M.pop(),I!==null&&I.renderEnd(),q},this.compileAsync=function(R,X,j=null){let q=this.compile(R,X,j);return new Promise(J=>{function xe(){if(q.forEach(function(ke){let Ve=Y.get(ke).currentProgram;(Ve===void 0||Ve.isReady())&&q.delete(ke)}),q.size===0){J(R);return}setTimeout(xe,10)}xt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Pt=null;function Gr(R){Pt&&Pt(R)}function Wr(){pi.stop()}function Xr(){pi.start()}let pi=new dd;pi.setAnimationLoop(Gr),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(R){Pt=R,Re.setAnimationLoop(R),R===null?pi.stop():pi.start()},Re.addEventListener("sessionstart",Wr),Re.addEventListener("sessionend",Xr),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(R,X);let j=Re.enabled===!0&&Re.isPresenting===!0,q=E!==null&&(z===null||j)&&E.begin(C,z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,X,z),b=Ce.get(R,M.length),b.init(X),b.state.textureUnits=te.getTextureUnits(),M.push(b),ne.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ce.setFromProjectionMatrix(ne,ai,X.reversedDepth),pe=this.localClippingEnabled,fe=We.init(this.clippingPlanes,pe),y=De.get(R,A.length),y.init(),A.push(y),Re.enabled===!0&&Re.isPresenting===!0){let ke=C.xr.getDepthSensingMesh();ke!==null&&qr(ke,X,-1/0,C.sortObjects)}qr(R,X,0,C.sortObjects),y.finish(),I!==null&&I.updateLights(b.state.lightsArray),C.sortObjects===!0&&y.sort(Le,He),Z=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Z&&rt.addToRenderList(y,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&We.beginShadows();let J=b.state.shadowsArray;if(Je.render(J,R,X),fe===!0&&We.endShadows(),(q&&E.hasRenderPass())===!1){let ke=y.opaque,Ne=y.transmissive;if(b.setupLights(),X.isArrayCamera){let Ve=X.cameras;if(Ne.length>0)for(let K=0,Te=Ve.length;K<Te;K++){let ye=Ve[K];qi(ke,Ne,R,ye)}Z&&rt.render(R);for(let K=0,Te=Ve.length;K<Te;K++){let ye=Ve[K];ea(y,R,ye,ye.viewport)}}else Ne.length>0&&qi(ke,Ne,R,X),Z&&rt.render(R),ea(y,R,X)}z!==null&&F===0&&(te.updateMultisampleRenderTarget(z),te.updateRenderTargetMipmap(z)),q&&E.end(C),R.isScene===!0&&R.onAfterRender(C,R,X),Fe.resetDefaultState(),O=-1,k=null,M.pop(),M.length>0?(b=M[M.length-1],te.setTextureUnits(b.state.textureUnits),fe===!0&&We.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,I!==null&&I.renderEnd()};function qr(R,X,j,q){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(ce)){q&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);let ke=re.update(R),Ne=R.material;Ne.visible&&y.push(R,ke,Ne,j,je.z,null,X)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(ce))){let ke=re.update(R),Ne=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),je.copy(ke.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(Ne)){let Ve=ke.groups;for(let K=0,Te=Ve.length;K<Te;K++){let ye=Ve[K],be=Ne[ye.materialIndex];be&&be.visible&&y.push(R,ke,be,j,je.z,ye,X)}}else Ne.visible&&y.push(R,ke,Ne,j,je.z,null,X)}}let xe=R.children;for(let ke=0,Ne=xe.length;ke<Ne;ke++)qr(xe[ke],X,j,q)}function ea(R,X,j,q){let{opaque:J,transmissive:xe,transparent:ke}=R;b.setupLightsView(j),fe===!0&&We.setGlobalState(C.clippingPlanes,j),q&&T.viewport(H.copy(q)),J.length>0&&xs(J,X,j),xe.length>0&&xs(xe,X,j),ke.length>0&&xs(ke,X,j),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function qi(R,X,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){let be=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new It(1,1,{generateMipmaps:!0,type:be?Qt:yn,minFilter:On,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let xe=b.state.transmissionRenderTarget[q.id],ke=q.viewport||H;xe.setSize(ke.z*C.transmissionResolutionScale,ke.w*C.transmissionResolutionScale);let Ne=C.getRenderTarget(),Ve=C.getActiveCubeFace(),K=C.getActiveMipmapLevel();C.setRenderTarget(xe),C.getClearColor(Ze),Ie=C.getClearAlpha(),Ie<1&&C.setClearColor(16777215,.5),C.clear(),Z&&rt.render(j);let Te=C.toneMapping;C.toneMapping=ci;let ye=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),fe===!0&&We.setGlobalState(C.clippingPlanes,q),xs(R,j,q),te.updateMultisampleRenderTarget(xe),te.updateRenderTargetMipmap(xe),xt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ye=0,lt=X.length;Ye<lt;Ye++){let Mt=X[Ye],{object:_t,geometry:Yt,material:Pe,group:Ut}=Mt;if(Pe.side===hn&&_t.layers.test(q.layers)){let dt=Pe.side;Pe.side=pn,Pe.needsUpdate=!0,Yi(_t,j,q,Yt,Pe,Ut),Pe.side=dt,Pe.needsUpdate=!0,be=!0}}be===!0&&(te.updateMultisampleRenderTarget(xe),te.updateRenderTargetMipmap(xe))}C.setRenderTarget(Ne,Ve,K),C.setClearColor(Ze,Ie),ye!==void 0&&(q.viewport=ye),C.toneMapping=Te}function xs(R,X,j){let q=X.isScene===!0?X.overrideMaterial:null;for(let J=0,xe=R.length;J<xe;J++){let ke=R[J],{object:Ne,geometry:Ve,group:K}=ke,Te=ke.material;Te.allowOverride===!0&&q!==null&&(Te=q),Ne.layers.test(j.layers)&&Yi(Ne,X,j,Ve,Te,K)}}function Yi(R,X,j,q,J,xe){I!==null&&J.isNodeMaterial&&I.setObject(R,J),R.onBeforeRender(C,X,j,q,J,xe),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(C,X,j,q,R,xe),J.transparent===!0&&J.side===hn&&J.forceSinglePass===!1?(J.side=pn,J.needsUpdate=!0,C.renderBufferDirect(j,X,q,J,R,xe),J.side=ls,J.needsUpdate=!0,C.renderBufferDirect(j,X,q,J,R,xe),J.side=hn):C.renderBufferDirect(j,X,q,J,R,xe),R.onAfterRender(C,X,j,q,J,xe)}function mi(R,X,j){X.isScene!==!0&&(X=ht);let q=Y.get(R),J=b.state.lights,xe=b.state.shadowsArray,ke=J.state.version,Ne=Se.getParameters(R,J.state,xe,X,j,b.state.lightProbeGridArray),Ve=Se.getProgramCacheKey(Ne),K=q.programs;q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,q.fog=X.fog;let Te=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;q.envMap=ve.get(R.envMap||q.environment,Te),q.envMapRotation=q.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,K===void 0&&(R.addEventListener("dispose",In),K=new Map,q.programs=K);let ye=K.get(Ve);if(ye!==void 0){if(q.currentProgram===ye&&q.lightsStateVersion===ke)return vs(R,Ne),ye}else Ne.uniforms=Se.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,j,Ne),R.onBeforeCompile(Ne,C),ye=Se.acquireProgram(Ne,Ve),K.set(Ve,ye),q.uniforms=Ne.uniforms;let be=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(be.clippingPlanes=We.uniform),vs(R,Ne),q.needsLights=ia(R),q.lightsStateVersion=ke,q.needsLights&&(be.ambientLightColor.value=J.state.ambient,be.lightProbe.value=J.state.probe,be.sunLights.value=J.state.sun,be.sunLightShadows.value=J.state.sunShadow,be.directionalLights.value=J.state.directional,be.directionalLightShadows.value=J.state.directionalShadow,be.spotLights.value=J.state.spot,be.spotLightShadows.value=J.state.spotShadow,be.rectAreaLights.value=J.state.rectArea,be.ltc_1.value=J.state.rectAreaLTC1,be.ltc_2.value=J.state.rectAreaLTC2,be.pointLights.value=J.state.point,be.pointLightShadows.value=J.state.pointShadow,be.hemisphereLights.value=J.state.hemi,be.sunShadowMatrix.value=J.state.sunShadowMatrix,be.sunShadowCascade.value=J.state.sunShadowCascade,be.directionalShadowMatrix.value=J.state.directionalShadowMatrix,be.spotLightMatrix.value=J.state.spotLightMatrix,be.spotLightMap.value=J.state.spotLightMap,be.pointShadowMatrix.value=J.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=ye,q.uniformsList=null,ye}function Yr(R){if(R.uniformsList===null){let X=R.currentProgram.getUniforms();R.uniformsList=Er.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function vs(R,X){let j=Y.get(R);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function ta(R,X){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;_.setFromMatrixPosition(X.matrixWorld);for(let j=0,q=R.length;j<q;j++){let J=R[j];if(J.texture!==null&&J.boundingBox.containsPoint(_))return J}return null}function na(R,X,j,q,J){X.isScene!==!0&&(X=ht),te.resetTextureUnits();let xe=X.fog,ke=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?X.environment:null,Ne=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:pt.workingColorSpace,Ve=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,K=ve.get(q.envMap||ke,Ve),Te=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ye=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),be=!!j.morphAttributes.position,Ye=!!j.morphAttributes.normal,lt=!!j.morphAttributes.color,Mt=ci;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Mt=C.toneMapping);let _t=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Yt=_t!==void 0?_t.length:0,Pe=Y.get(q),Ut=b.state.lights;if(fe===!0&&(pe===!0||R!==k)){let At=R===k&&q.id===O;We.setState(q,R,At)}let dt=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ut.state.version||Pe.outputColorSpace!==Ne||J.isBatchedMesh&&Pe.batching===!1||!J.isBatchedMesh&&Pe.batching===!0||J.isBatchedMesh&&Pe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Pe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Pe.instancing===!1||!J.isInstancedMesh&&Pe.instancing===!0||J.isSkinnedMesh&&Pe.skinning===!1||!J.isSkinnedMesh&&Pe.skinning===!0||J.isInstancedMesh&&Pe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Pe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Pe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Pe.instancingMorph===!1&&J.morphTexture!==null||Pe.envMap!==K||q.fog===!0&&Pe.fog!==xe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==We.numPlanes||Pe.numIntersection!==We.numIntersection)||Pe.vertexAlphas!==Te||Pe.vertexTangents!==ye||Pe.morphTargets!==be||Pe.morphNormals!==Ye||Pe.morphColors!==lt||Pe.toneMapping!==Mt||Pe.morphTargetsCount!==Yt||!!Pe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Pe.__version=q.version);let wn=Pe.currentProgram;dt===!0&&(wn=mi(q,X,J),I&&q.isNodeMaterial&&I.onUpdateProgram(q,wn,Pe));let Xt=!1,Jt=!1,Ji=!1,bt=wn.getUniforms(),wt=Pe.uniforms;if(T.useProgram(wn.program)&&(Xt=!0,Jt=!0,Ji=!0),q.id!==O&&(O=q.id,Jt=!0),Pe.needsLights){let At=ta(b.state.lightProbeGridArray,J);Pe.lightProbeGrid!==At&&(Pe.lightProbeGrid=At,Jt=!0)}if(Xt||k!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),bt.setValue(G,"projectionMatrix",R.projectionMatrix),bt.setValue(G,"viewMatrix",R.matrixWorldInverse);let xn=bt.map.cameraPosition;xn!==void 0&&xn.setValue(G,Me.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&bt.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),k!==R&&(k=R,Jt=!0,Ji=!0)}if(Pe.needsLights&&(Ut.state.sunShadowMap.length>0&&bt.setValue(G,"sunShadowMap",Ut.state.sunShadowMap,te),Ut.state.directionalShadowMap.length>0&&bt.setValue(G,"directionalShadowMap",Ut.state.directionalShadowMap,te),Ut.state.spotShadowMap.length>0&&bt.setValue(G,"spotShadowMap",Ut.state.spotShadowMap,te),Ut.state.pointShadowMap.length>0&&bt.setValue(G,"pointShadowMap",Ut.state.pointShadowMap,te)),J.isSkinnedMesh){bt.setOptional(G,J,"bindMatrix"),bt.setOptional(G,J,"bindMatrixInverse");let At=J.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),bt.setValue(G,"boneTexture",At.boneTexture,te))}J.isBatchedMesh&&(bt.setOptional(G,J,"batchingTexture"),bt.setValue(G,"batchingTexture",J._matricesTexture,te),bt.setOptional(G,J,"batchingIdTexture"),bt.setValue(G,"batchingIdTexture",J._indirectTexture,te),bt.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&bt.setValue(G,"batchingColorTexture",J._colorsTexture,te));let qn=j.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&V.update(J,j,wn),(Jt||Pe.receiveShadow!==J.receiveShadow)&&(Pe.receiveShadow=J.receiveShadow,bt.setValue(G,"receiveShadow",J.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&X.environment!==null&&(wt.envMapIntensity.value=X.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=C1()),Jt){if(bt.setValue(G,"toneMappingExposure",C.toneMappingExposure),Pe.needsLights&&gn(wt,Ji),xe&&q.fog===!0&&Xe.refreshFogUniforms(wt,xe),Xe.refreshMaterialUniforms(wt,q,Q,$,b.state.transmissionRenderTarget[R.id]),Pe.needsLights&&Pe.lightProbeGrid){let At=Pe.lightProbeGrid;wt.probesSH.value=At.texture,wt.probesMin.value.copy(At.boundingBox.min),wt.probesMax.value.copy(At.boundingBox.max),wt.probesResolution.value.copy(At.resolution)}Er.upload(G,Yr(Pe),wt,te)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Er.upload(G,Yr(Pe),wt,te),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(G,"center",J.center),bt.setValue(G,"modelViewMatrix",J.modelViewMatrix),bt.setValue(G,"normalMatrix",J.normalMatrix),bt.setValue(G,"modelMatrix",J.matrixWorld),q.uniformsGroups!==void 0){let At=q.uniformsGroups;for(let xn=0,Yn=At.length;xn<Yn;xn++){let Zr=At[xn];he.update(Zr,wn),he.bind(Zr,wn)}}return wn}function gn(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.sunLights.needsUpdate=X,R.sunLightShadows.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function ia(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,X,j){let q=Y.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Y.get(R.texture).__webglTexture=X,Y.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){let j=Y.get(R);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,j=0){z=R,U=X,F=j;let q=null,J=!1,xe=!1;if(R){let Ne=Y.get(R);if(Ne.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(G.FRAMEBUFFER,Ne.__webglFramebuffer),H.copy(R.viewport),ee.copy(R.scissor),de=R.scissorTest,T.viewport(H),T.scissor(ee),T.setScissorTest(de),O=-1;return}else if(Ne.__webglFramebuffer===void 0)te.setupRenderTarget(R);else if(Ne.__hasExternalTextures)te.rebindTextures(R,Y.get(R.texture).__webglTexture,Y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Te=R.depthTexture;if(Ne.__boundDepthTexture!==Te){if(Te!==null&&Y.has(Te)&&(R.width!==Te.image.width||R.height!==Te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(R)}}let Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);let K=Y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(K[X])?q=K[X][j]:q=K[X],J=!0):R.samples>0&&te.useMultisampledRTT(R)===!1?q=Y.get(R).__webglMultisampledFramebuffer:Array.isArray(K)?q=K[j]:q=K,H.copy(R.viewport),ee.copy(R.scissor),de=R.scissorTest}else H.copy(Ee).multiplyScalar(Q).floor(),ee.copy(et).multiplyScalar(Q).floor(),de=se;if(j!==0&&(q=D),T.bindFramebuffer(G.FRAMEBUFFER,q)&&T.drawBuffers(R,q),T.viewport(H),T.scissor(ee),T.setScissorTest(de),J){let Ne=Y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,j)}else if(xe){let Ne=X;for(let Ve=0;Ve<R.textures.length;Ve++){let K=Y.get(R.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,K.__webglTexture,j,Ne)}}else if(R!==null&&j!==0){let Ne=Y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ne.__webglTexture,j)}O=-1};function Zi(R){let X=Y.get(R);return(X.__readFormat!==R.format||X.__readType!==R.type)&&(X.__readFormat=R.format,X.__readType=R.type,X.__formatReadable=N.textureFormatReadable(R.format),X.__typeReadable=N.textureTypeReadable(R.type)),X}this.readRenderTargetPixels=function(R,X,j,q,J,xe,ke,Ne=0){if(!(R&&R.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve){T.bindFramebuffer(G.FRAMEBUFFER,Ve);try{let K=R.textures[Ne],Te=K.format,ye=K.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne);let be=Zi(K);if(be.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-q&&j>=0&&j<=R.height-J&&G.readPixels(X,j,q,J,Ae.convert(Te),Ae.convert(ye),xe)}finally{let K=z!==null?Y.get(z).__webglFramebuffer:null;T.bindFramebuffer(G.FRAMEBUFFER,K)}}},this.readRenderTargetPixelsAsync=async function(R,X,j,q,J,xe,ke,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve)if(X>=0&&X<=R.width-q&&j>=0&&j<=R.height-J){T.bindFramebuffer(G.FRAMEBUFFER,Ve);let K=R.textures[Ne],Te=K.format,ye=K.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne);let be=Zi(K);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.bufferData(G.PIXEL_PACK_BUFFER,xe.byteLength,G.STREAM_READ),G.readPixels(X,j,q,J,Ae.convert(Te),Ae.convert(ye),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let lt=z!==null?Y.get(z).__webglFramebuffer:null;T.bindFramebuffer(G.FRAMEBUFFER,lt);let Mt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Hf(G,Mt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ye),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,xe),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Ye),G.deleteSync(Mt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,j=0){let q=Math.pow(2,-j),J=Math.floor(R.image.width*q),xe=Math.floor(R.image.height*q),ke=X!==null?X.x:0,Ne=X!==null?X.y:0;te.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,ke,Ne,J,xe),T.unbindTexture()},this.copyTextureToTexture=function(R,X,j=null,q=null,J=0,xe=0){let ke,Ne,Ve,K,Te,ye,be,Ye,lt,Mt=R.isCompressedTexture?R.mipmaps[xe]:R.image;if(j!==null)ke=j.max.x-j.min.x,Ne=j.max.y-j.min.y,Ve=j.isBox3?j.max.z-j.min.z:1,K=j.min.x,Te=j.min.y,ye=j.isBox3?j.min.z:0;else{let wt=Math.pow(2,-J);ke=Math.floor(Mt.width*wt),Ne=Math.floor(Mt.height*wt),R.isDataArrayTexture?Ve=Mt.depth:R.isData3DTexture?Ve=Math.floor(Mt.depth*wt):Ve=1,K=0,Te=0,ye=0}q!==null?(be=q.x,Ye=q.y,lt=q.z):(be=0,Ye=0,lt=0);let _t=Ae.convert(X.format),Yt=Ae.convert(X.type),Pe;X.isData3DTexture?(te.setTexture3D(X,0),Pe=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(te.setTexture2DArray(X,0),Pe=G.TEXTURE_2D_ARRAY):(te.setTexture2D(X,0),Pe=G.TEXTURE_2D),T.activeTexture(G.TEXTURE0),T.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),T.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),T.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);let Ut=T.getParameter(G.UNPACK_ROW_LENGTH),dt=T.getParameter(G.UNPACK_IMAGE_HEIGHT),wn=T.getParameter(G.UNPACK_SKIP_PIXELS),Xt=T.getParameter(G.UNPACK_SKIP_ROWS),Jt=T.getParameter(G.UNPACK_SKIP_IMAGES);T.pixelStorei(G.UNPACK_ROW_LENGTH,Mt.width),T.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mt.height),T.pixelStorei(G.UNPACK_SKIP_PIXELS,K),T.pixelStorei(G.UNPACK_SKIP_ROWS,Te),T.pixelStorei(G.UNPACK_SKIP_IMAGES,ye);let Ji=R.isDataArrayTexture||R.isData3DTexture,bt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){let wt=Y.get(R),qn=Y.get(X),At=Y.get(wt.__renderTarget),xn=Y.get(qn.__renderTarget);T.bindFramebuffer(G.READ_FRAMEBUFFER,At.__webglFramebuffer),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Yn=0;Yn<Ve;Yn++)Ji&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Y.get(R).__webglTexture,J,ye+Yn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Y.get(X).__webglTexture,xe,lt+Yn)),G.blitFramebuffer(K,Te,ke,Ne,be,Ye,ke,Ne,G.DEPTH_BUFFER_BIT,G.NEAREST);T.bindFramebuffer(G.READ_FRAMEBUFFER,null),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||Y.has(R)){let wt=Y.get(R),qn=Y.get(X);T.bindFramebuffer(G.READ_FRAMEBUFFER,w),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,L);for(let At=0;At<Ve;At++)Ji?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wt.__webglTexture,J,ye+At):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wt.__webglTexture,J),bt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qn.__webglTexture,xe,lt+At):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,qn.__webglTexture,xe),J!==0?G.blitFramebuffer(K,Te,ke,Ne,be,Ye,ke,Ne,G.COLOR_BUFFER_BIT,G.NEAREST):bt?G.copyTexSubImage3D(Pe,xe,be,Ye,lt+At,K,Te,ke,Ne):G.copyTexSubImage2D(Pe,xe,be,Ye,K,Te,ke,Ne);T.bindFramebuffer(G.READ_FRAMEBUFFER,null),T.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bt?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Pe,xe,be,Ye,lt,ke,Ne,Ve,_t,Yt,Mt.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Pe,xe,be,Ye,lt,ke,Ne,Ve,_t,Mt.data):G.texSubImage3D(Pe,xe,be,Ye,lt,ke,Ne,Ve,_t,Yt,Mt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,xe,be,Ye,ke,Ne,_t,Yt,Mt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,xe,be,Ye,Mt.width,Mt.height,_t,Mt.data):G.texSubImage2D(G.TEXTURE_2D,xe,be,Ye,ke,Ne,_t,Yt,Mt);T.pixelStorei(G.UNPACK_ROW_LENGTH,Ut),T.pixelStorei(G.UNPACK_IMAGE_HEIGHT,dt),T.pixelStorei(G.UNPACK_SKIP_PIXELS,wn),T.pixelStorei(G.UNPACK_SKIP_ROWS,Xt),T.pixelStorei(G.UNPACK_SKIP_IMAGES,Jt),xe===0&&X.generateMipmaps&&G.generateMipmap(Pe),T.unbindTexture()},this.initRenderTarget=function(R){Y.get(R).__webglFramebuffer===void 0&&te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){U=0,F=0,z=null,T.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Ot=(i,e,t)=>i<e?e:i>t?t:i,Tt=(i,e,t)=>i+(e-i)*t,oc=i=>i*i*(3-2*i),Nt=(i,e,t)=>{let n=Ot((t-i)/(e-i),0,1);return n*n*(3-2*n)},yd=1337;function Md(i){yd=i|0}function P1(i){return i=i^yd|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Gn=(i,e)=>P1(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Vn(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Tt(Gn(t,e),Gn(t+1,e),s)}var ac=(i,e=0)=>Vn(i,e)*.55+Vn(i*2.03,e+7)*.3+Vn(i*4.1,e+13)*.15;function bn(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var rc=new me,oe=i=>(rc.set(i),[rc.r,rc.g,rc.b]),bd=(i,e,t)=>[Tt(i[0],e[0],t),Tt(i[1],e[1],t),Tt(i[2],e[2],t)],Sn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Ti=["city","sakura","coast","country","mountain","snow"],zo={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},$u=1500,Sd=260,fs=0,Ku=0;function Ed(i){Ku=Math.max(0,Ti.indexOf(i))}function Ar(i){let e=Math.floor(i/$u),t=i-e*$u,n=oc(Ot((t-($u-Sd))/Sd,0,1)),s=Ti.length;return{a:Ti[((e+Ku)%s+s)%s],b:Ti[((e+Ku+1)%s+s)%s],t:n}}function Rt(i){let e=Ar(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var Vt=i=>{let e=Ar(i);return e.t<.5?e.a:e.b};function Tn(i,e){let t=Ar(i);return Tt(zo[t.a][e],zo[t.b][e],t.t)}var Ns=650,Us=375,Rr=i=>i*Ns+Us;function ko(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Rt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var ju={x:new Map,r:new Map,t:new Map};function Qu(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function Cr(i){let e=Math.round((i-Us)/Ns);return Qu(ju.x,e,()=>{let t=Rr(e);return ko(t)?{k:e,s:t}:null})}function I1(i){let e=Cr(i);return e?1-Nt(8,45,Math.abs(i-e.s)):0}var Ho=1150,uc=820,Vo=4.6,eh=i=>i*Ho+uc;function th(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Rt(i+t);if(n.country+n.sakura<.9)return!1}let e=Cr(i);return!(e&&Math.abs(e.s-i)<170)}function Fi(i){let e=Math.round((i-uc)/Ho);return Qu(ju.r,e,()=>{let t=eh(e);return th(t)?{k:e,s:t}:null})}function L1(i){let e=Fi(i);return e?1-Nt(30,70,Math.abs(i-e.s)):0}function D1(i){let e=-Vo;return i<11?e-1.3:i<16?Tt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Tt(e+.7,.35,(i-20)/5.5):.35}var wd=1050,Ad=525,qt=85,Gt=125,N1=24,U1=i=>i*wd+Ad;function F1(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Rt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function fi(i){let e=Math.round((i-Ad)/wd);return Qu(ju.t,e,()=>{let t=U1(e);return F1(t)?{k:e,s:t}:null})}function O1(i){let e=fi(i);return e?1-Nt(qt+20,Gt+25,Math.abs(i-e.s)):0}var lc=0,hc=(i,e)=>{let t=i/Gt;return N1*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var Si=2,cc=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Vn(e/300,11)-.5)*2+(Vn(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Tn(e,"curv")*(1-Math.max(I1(e),L1(e),O1(e)))}elevRaw(e){return Tn(e,"base")+Tn(e,"hill")*(ac(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=Cr(e);if(n){let a=1-Nt(8,45,Math.abs(e-n.s));a>0&&(t=Tt(t,this.elevRaw(n.s),a))}let s=Fi(e);if(s){let a=1-Nt(30,70,Math.abs(e-s.s));a>0&&(t=Tt(t,this.elevRaw(s.s),a))}let r=fi(e);if(r){let a=1-Nt(qt+10,Gt+45,Math.abs(e-r.s));a>0&&(t=Tt(t,this.elevRaw(r.s),a))}return t}ensure(e){for(;(this.X.length-1)*Si<e+Si;){let t=this.X.length-1,n=t*Si,s=this.curv(n+Si/2)*Si,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*Si),this.Z.push(this.Z[t]+Math.cos(r+s/2)*Si),this.H.push(r+s),this.Y.push(this.elev(n+Si))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+Si);let n=e/Si,s=Math.floor(n),r=n-s;t.x=Tt(this.X[s],this.X[s+1],r),t.z=Tt(this.Z[s],this.Z[s+1],r),t.y=Tt(this.Y[s],this.Y[s+1],r),t.h=Tt(this.H[s],this.H[s+1],r);let a=Math.sin(t.h),l=Math.cos(t.h);return t.fx=a,t.fz=l,t.rx=-l,t.rz=a,t}};function Td(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Nt(45,190,r)*16*(.45+.55*Vn(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+Nt(s+1.5,80,r)*24*(.5+.5*Vn(e/170,5))+Nt(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?Tt(1.25,-1.6,a/26):Tt(-1.6,-7,Ot((a-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Vn(e/140,61),o=r-(s+1);return o<l?o:Math.min(l+(o-l)*.55,70)}if(r<s+1.2)return-.06;let a=r-(s+1.2);return a<32?-a*1.1:-35.2+Nt(105,230,r)*95*(.6+.4*Vn(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Tt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Vn(e/40+(t>0?3:0),71)-.5):.55+Nt(125,210,r)*40*(.45+.55*Vn(e/230+(t>0?11:0),73));case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+Nt(135,215,r)*36*(.4+.6*Vn(e/210+(t>0?9:0),7))}}function Pr(i,e,t,n){let s=Ar(i),r=Td(s.a,i,e,t,n),a=s.t>0?Tt(r,Td(s.b,i,e,t,n),s.t):r;lc=0;let l=Fi(i);if(l){let g=Math.abs(i-l.s);if(g>=36)return a;let x=g<29?D1(g):Tt(.35,a,Nt(29,36,g));return Math.abs(e)<n+3.2&&(x=Math.min(x,-.08)),x}let o=fi(i);if(!o)return a;let u=i-o.s,c=Math.abs(u);if(c>=2*Gt)return a;let h=Math.abs(e),f=hc(u,e),p;return c<qt?p=h<=n+1.46?-.25:Math.max(a,f):p=Math.max(a,Math.min(f,h<n+1?-.06:h-(n+1))),lc=Math.max(0,p-a),p}function Rd(i){let e=Fi(i);return e?1-Nt(27,34,Math.abs(i-e.s)):0}var Go=new B,fc=new B,B1=[1,1,1],rn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new $e,this.nm=new st,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let a=new Float32Array(t*2);this.U&&a.set(this.U.subarray(0,n*2)),this.U=a}if(this.hasColor){let a=new Uint8Array(t*3);this.Cl&&a.set(this.Cl.subarray(0,n*3)),this.Cl=a}if(this.hasAO){let a=new Uint8Array(t);this.A&&a.set(this.A.subarray(0,n)),this.A=a}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,a,l,o,u){this.n>=this.cap&&this.grow(this.n+1);let c=this.e,h=this.ne,f=this.n*3,p=this.P,g=this.bb,x=c[0]*e+c[4]*t+c[8]*n+c[12],m=c[1]*e+c[5]*t+c[9]*n+c[13],d=c[2]*e+c[6]*t+c[10]*n+c[14];p[f]=x,p[f+1]=m,p[f+2]=d,x<g[0]&&(g[0]=x),m<g[1]&&(g[1]=m),d<g[2]&&(g[2]=d),x>g[3]&&(g[3]=x),m>g[4]&&(g[4]=m),d>g[5]&&(g[5]=d);let v=h[0]*s+h[3]*r+h[6]*a,S=h[1]*s+h[4]*r+h[7]*a,_=h[2]*s+h[5]*r+h[8]*a,y=127/(Math.sqrt(v*v+S*S+_*_)||1);if(this.N[f]=Math.round(v*y),this.N[f+1]=Math.round(S*y),this.N[f+2]=Math.round(_*y),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=o),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(m)),this.hasColor){let b=u||B1,A=this.Cl;A[f]=b[0]>=1?255:b[0]<=0?0:b[0]*255+.5,A[f+1]=b[1]>=1?255:b[1]<=0?0:b[1]*255+.5,A[f+2]=b[2]>=1?255:b[2]<=0?0:b[2]*255+.5}this.n++}quad(e,t,n,s,r,a){Go.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),fc.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),fc.lengthSq()<1e-12&&fc.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Go.cross(fc).normalize();let l=Go.x,o=Go.y,u=Go.z,c=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,p=a?a.v1:1;this.vtx(e[0],e[1],e[2],l,o,u,c,f,r),this.vtx(t[0],t[1],t[2],l,o,u,h,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(e[0],e[1],e[2],l,o,u,c,f,r),this.vtx(n[0],n[1],n[2],l,o,u,h,p,r),this.vtx(s[0],s[1],s[2],l,o,u,c,p,r)}box(e,t,n,s,r,a,l,o=null,u=null){let c=o||{},h=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],h.nz||l,c.nz),this.quad([e,t,a],[s,t,a],[s,r,a],[e,r,a],h.pz||l,c.pz),this.quad([e,t,n],[e,t,a],[e,r,a],[e,r,n],h.nx||l,c.nx),this.quad([s,t,a],[s,t,n],[s,r,n],[s,r,a],h.px||l,c.px),this.quad([e,r,a],[s,r,a],[s,r,n],[e,r,n],h.py||l,c.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,a],[e,t,a],h.ny||l,c.ny)}cyl(e,t,n,s,r,a,l,o,u=!0){let c=(s-r)/a;for(let h=0;h<l;h++){let f=h/l*Math.PI*2,p=(h+1)/l*Math.PI*2,g=Math.cos(f),x=Math.sin(f),m=Math.cos(p),d=Math.sin(p),v=[e+g*s,t,n+x*s],S=[e+m*s,t,n+d*s],_=[e+m*r,t+a,n+d*r],y=[e+g*r,t+a,n+x*r];this.vtx(v[0],v[1],v[2],g,c,x,0,0,o),this.vtx(y[0],y[1],y[2],g,c,x,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(v[0],v[1],v[2],g,c,x,0,0,o),this.vtx(_[0],_[1],_[2],m,c,d,0,0,o),this.vtx(S[0],S[1],S[2],m,c,d,0,0,o),u&&r>.001&&(this.vtx(e,t+a,n,0,1,0,0,0,o),this.vtx(_[0],_[1],_[2],0,1,0,0,0,o),this.vtx(y[0],y[1],y[2],0,1,0,0,0,o))}}rod(e,t,n,s,r,a){let l=t[0]-e[0],o=t[1]-e[1],u=t[2]-e[2],c=Math.hypot(l,o,u);l/=c,o/=c,u/=c;let h=0,f=1,p=0;Math.abs(o)>.99&&(h=1,f=0);let g=o*p-u*f,x=u*h-l*p,m=l*f-o*h,d=Math.hypot(g,x,m);g/=d,x/=d,m/=d;let v=x*u-m*o,S=m*l-g*u,_=g*o-x*l;for(let y=0;y<r;y++){let b=y/r*Math.PI*2,A=(y+1)/r*Math.PI*2,M=Math.cos(b),E=Math.sin(b),C=Math.cos(A),P=Math.sin(A),I=g*M+v*E,D=x*M+S*E,w=m*M+_*E,L=g*C+v*P,U=x*C+S*P,F=m*C+_*P,z=[e[0]+I*n,e[1]+D*n,e[2]+w*n],O=[e[0]+L*n,e[1]+U*n,e[2]+F*n],k=[t[0]+L*s,t[1]+U*s,t[2]+F*s],H=[t[0]+I*s,t[1]+D*s,t[2]+w*s];this.vtx(z[0],z[1],z[2],I,D,w,0,0,a),this.vtx(O[0],O[1],O[2],L,U,F,0,0,a),this.vtx(k[0],k[1],k[2],L,U,F,0,0,a),this.vtx(z[0],z[1],z[2],I,D,w,0,0,a),this.vtx(k[0],k[1],k[2],L,U,F,0,0,a),this.vtx(H[0],H[1],H[2],I,D,w,0,0,a)}return c}blob(e,t,n,s,r,a,l=0,o=1){let u=Cd[l%Cd.length],c=u.attributes.position.array,h=u.attributes.normal.array,f=u.userData.disp;for(let p=0;p<c.length;p+=3){let g=1+f[p/3],x=Math.max(0,Math.min(1,h[p+1]*.5+.5)),m=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(e+c[p]*s*g,t+c[p+1]*s*g*o,n+c[p+2]*s*g,h[p],h[p+1],h[p+2],0,0,m)}}wire(e,t,n,s,r,a=10){let l=e;this.noShadow=!0;for(let o=1;o<=a;o++){let u=o/a,c=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,c,s,s,3,r),l=c}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,l,o]of r)this.vtx(e[a][0],e[a][1],e[a][2],t[a][0],t[a][1],t[a][2],l,o,s[a])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,a=e.N,l=e.C,o=e.U,u=this.n,c=this.bb;for(let h=0;h<e.n*3;h+=3){let f=r[h],p=r[h+1],g=r[h+2],x=u*3+h,m=n[0]*f+n[4]*p+n[8]*g+n[12],d=n[1]*f+n[5]*p+n[9]*g+n[13],v=n[2]*f+n[6]*p+n[10]*g+n[14];this.P[x]=m,this.P[x+1]=d,this.P[x+2]=v,this.hasAO&&(this.A[u+h/3]=this.aoByte(d)),m<c[0]&&(c[0]=m),d<c[1]&&(c[1]=d),v<c[2]&&(c[2]=v),m>c[3]&&(c[3]=m),d>c[4]&&(c[4]=d),v>c[5]&&(c[5]=v);let S=a[h],_=a[h+1],y=a[h+2],b=s[0]*S+s[3]*_+s[6]*y,A=s[1]*S+s[4]*_+s[7]*y,M=s[2]*S+s[5]*_+s[8]*y,E=127/(Math.sqrt(b*b+A*A+M*M)||1);this.N[x]=Math.round(b*E),this.N[x+1]=Math.round(A*E),this.N[x+2]=Math.round(M*E)}this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(o?this.U.set(o,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new gt,t=this.n,n=this.bb;return e.setAttribute("position",new kt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new kt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new kt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new kt(this.A.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new kt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new Kn(new B(n[0],n[1],n[2]),new B(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new jn),e}},Cd=[0,1,2,3].map(i=>{let e=new _o(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,a,l)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});tt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var z1=tt.shadowmap_pars_fragment;function ih(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;tt.shadowmap_pars_fragment=z1.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}ih(1);function Nd(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";tt.shadowmap_pars_fragment=t+tt.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}tt.lights_fragment_begin=tt.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var ds=4200,qe={uSkyHor:{value:new me(.7,.8,.9)},uSkyZen:{value:new me(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ge},uSunDir:{value:new B(0,1,0)},uSunCol:{value:new me(1,1,1)},uTuftV:{value:new Ge(0,.333)},uTunA:{value:new B(0,-1e4,0)},uTunB:{value:new B(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new B},uCarFwd:{value:new B(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:k1()},uCloudTex:{value:null},uCloudOrg:{value:new Ge},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Ge(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function Ud(i){let e=new ns(new Uint8Array(i),i.length,1,Ps);return e.minFilter=e.magFilter=Kt,e.generateMipmaps=!1,e.needsUpdate=!0,e}var ei=Ud([16,16,16,70,200,255,255,255]),Pd=Ud([28,40,70,130,200,240,255,255]);function k1(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ns(e,256,256,Bn);return s.wrapS=s.wrapT=or,s.magFilter=Lt,s.minFilter=On,s.generateMipmaps=!0,s.colorSpace=hi,s.needsUpdate=!0,s}var Oi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,dc=1600,nh=256,H1=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/dc).toFixed(8)} + 0.5).r * uCloudSh; }`,V1=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,G1=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/dc).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,W1=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,X1=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,q1=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,pc=new mr;pc.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};pc.customProgramCacheKey=()=>"propdepth";function Fd(){let i=new It(nh,nh,{format:Ps,type:yn,depthBuffer:!1,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),e=new ft({uniforms:{uCenter:{value:new Ge},uOrigin:qe.uOrigin,uTime:qe.uTime,uNoiseTex:qe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${dc.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ct(new Ht(2,2),e),n=new Ni;t.frustumCulled=!1,qe.uCloudTex.value=i.texture,qe.uCloudTex.rt=i;let s=dc/nh;return{update(r,a,l,o,u){let c=Math.round((a+o)/s)*s-o,h=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(c,h),qe.uCloudOrg.value.set(c,h);let f=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(f)}}}function Fs(i,e="",t="",n=!0){i.uniforms.uOrigin=qe.uOrigin,i.uniforms.uCloudSh=qe.uCloudSh,i.uniforms.uTime=qe.uTime,i.uniforms.uNoiseTex=qe.uNoiseTex,i.uniforms.uCloudTex=qe.uCloudTex,i.uniforms.uCloudOrg=qe.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=qe[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?G1:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Oi}${H1}${X1}${e}`).replace("#include <opaque_fragment>",`${n?W1:V1}${t}${q1}
#include <opaque_fragment>`)}var Y1=`
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
`,Z1=`
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
#endif`,J1=`
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
}`,Od={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function Bd(i){let e={};for(let t of i)e[Od[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var Id=new Map;function Wo(i){let e=[...new Set(i)].sort().join("+"),t=Id.get(e);return t||(t=zd(Bd(e.split("+")),e),Id.set(e,t)),t}function zd(i=Bd(Object.keys(Od)),e="all"){let t=new un({color:16777215,gradientMap:ei});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=qe.uSkyHor,n.uniforms.uSkyZen=qe.uSkyZen,n.uniforms.uWet=qe.uWet,n.uniforms.uNight=qe.uNight,n.uniforms.uSunDir=qe.uSunDir,n.uniforms.uSunCol=qe.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=qe[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),Fs(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${Y1}`,J1+Z1,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v16-"+e,t}function Ld(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),Fs(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function Dd(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function sh(i){return i.onBeforeCompile=e=>Fs(e),i.customProgramCacheKey=()=>"cs",i}var $1="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",K1=(i,e)=>`
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
}`;function rh(i,e,t=.06,n="gloss"){return i.onBeforeCompile=s=>{for(let r of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])s.uniforms[r]=qe[r];Fs(s,$1,K1(e,t))},i.customProgramCacheKey=()=>n+e,i}function kd(i,e){let t={};t.ground=zd(),t.color=Ld(new un({vertexColors:!0,gradientMap:ei}),1.6,.1,"color-v3",Dd),t.atlas=new un({vertexColors:!0,gradientMap:ei,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=l=>{Dd(l),Fs(l)},t.atlas.customProgramCacheKey=()=>"atlas-v3",t.foliage=Ld(new un({vertexColors:!0,gradientMap:Pd}),2.6,.24,"foliage-v2"),t.lamp=new Zt({color:15789798}),t.sig=new Zt({color:new me(.15,1.7,1.1)}),t.sodium=new Zt({color:new me(5,2.3,.65)}),t.decal=new un({vertexColors:!0,gradientMap:ei,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=l=>Fs(l),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new un({map:e,vertexColors:!0,gradientMap:Pd,alphaTest:.42,side:hn}),t.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",tt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),Fs(l),l.uniforms.uTuftV=qe.uTuftV,l.uniforms.uWind=qe.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v3"),t.wire=new Zt({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new Un(n);return t.pool=new Zt({map:a,color:16762746,transparent:!0,opacity:0,blending:Ui,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=a,t}var j1=oe("#f2c230"),Hd=oe("#26272c");function mc(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),a=Tn(s,"rw"),l=n*(a+.8),o=Rt(s),u=o.city+o.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return t}function Vd(){let i=new Bt,e=sh(new un({vertexColors:!0,gradientMap:ei})),t=new Zt({color:new me(6,.45,.3)}),n=new Zt({color:new me(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Bt,a=new Bt;r.add(a),a.position.set(-.42,1.02,-.02);let l=new rn,o=3.6;for(let h=0,f=0;f<o;h++,f+=.45)l.box(-Math.min(f+.45,o),-.065,-.065,-f,.065,.065,h%2?Hd:j1);l.box(0,-.09,-.07,.38,.09,.07,Hd);let u=new ct(l.build(),e);u.castShadow=!0,a.add(u);let c=[-.28,.28].map(h=>{let f=new ct(new vo(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:u,lamps:c,L:o}});return i.visible=!1,{group:i,update(r,a,l,o,u){i.visible=!!r,r&&r.forEach((c,h)=>{let f=s[h];f.root.position.set(c.x-a.x,c.y,c.z-a.z),f.root.rotation.y=c.yaw,f.arm.scale.x=(c.rw+.25)/f.L,f.pivot.rotation.z=-l*(Math.PI/2-.06);let p=Math.floor(u*2.5)%2;f.lamps[0].material=o&&p===0?t:n,f.lamps[1].material=o&&p===1?t:n})}}}function Q1(){let t=()=>{let d=document.createElement("canvas");return d.width=1024,d.height=512,d},n=t(),s=t(),r=n.getContext("2d"),a=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let o=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,o);for(let d=0;d<1024;d+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(d,0,2,o);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,o-14,1024,14);let u=[.1,.36,.62,.88].map(d=>d*1024),c=(d,v,S,_)=>{let y=r.createLinearGradient(d,v,d+S*.3,v+_);y.addColorStop(0,"#5d7fae"),y.addColorStop(.6,"#9db7d6"),y.addColorStop(1,"#2f3f55"),r.fillStyle=y,r.fillRect(d,v,S,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(d+S*.2,v),r.lineTo(d+S*.38,v),r.lineTo(d+S*.1,v+_),r.lineTo(d-S*.08,v+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(d,v,S,_)};for(let d=0;d<u.length-1;d++){let v=u[d]+40,S=u[d+1]-40,_=3,y=(S-v)/_;for(let b=0;b<_;b++)r.fillStyle="#6b737c",r.fillRect(v+b*y+2,34,y-4,58),c(v+b*y+6,38,y-12,50)}for(let d of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(d+2,34,28,58),c(d+5,38,22,50);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,22,60,o-36),r.fillStyle="#7b828a",r.fillRect(d-1,22,2,o-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(d-30,22,60,o-36),c(d-24,34,20,46),c(d+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let d of u)r.fillStyle="#c3c8ce",r.fillRect(d-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let h=0,f=176,p=256,g=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,p,g),r.fillStyle="#20262e",r.fillRect(h+14,f+44,p-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+p/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,p-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,p,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,p,7);for(let d of[h+40,h+p-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(d,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(d+(d<h+p/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+g-30,p,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",h+p/2,f+220),a.fillStyle="#111",a.fillRect(h,f,p,g),a.fillStyle="#ff9a2a",a.font=`800 18px ${l}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26);for(let d of[h+40,h+p-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(d,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=d=>{let v=new Un(d);return v.colorSpace=zt,v.anisotropy=4,v},m=(d,v,S,_)=>({u0:d/1024,u1:(d+S)/1024,v0:1-(v+_)/512,v1:1-v/512});return{map:x(n),em:x(s),side:m(0,0,1024,o),sideR:{...m(0,0,1024,o),flip:!0},front:m(h,f,p,g),plain:m(342,202,28,28)}}function Gd(){let i=Q1(),e=sh(new un({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:ei})),t=new rn({uv:!0}),n=[1,1,1],s=oe("#9aa1a9"),r=oe("#3b4047"),a=oe("#2a2d33"),l=19.5,o=.6,u=3,c=1.45,h=.95,f=4,p=u*l+(u-1)*o;for(let v=0;v<u;v++){let S=-p/2+l/2+v*(l+o),_=S-l/2,y=S+l/2;t.quad([_,h,c],[y,h,c],[y,f,c],[_,f,c],n,i.side),t.quad([y,h,-c],[_,h,-c],[_,f,-c],[y,f,-c],n,i.side);let b=v===u-1,A=v===0;t.quad([y,h,c],[y,h,-c],[y,f,-c],[y,f,c],b?n:oe("#c9ced4"),b?i.front:i.plain),t.quad([_,h,-c],[_,h,c],[_,f,c],[_,f,-c],A?n:oe("#c9ced4"),A?i.front:i.plain),t.box(_+.1,f,-c+.1,y-.1,f+.14,c-.1,s,null,{noBottom:!0});for(let M of[S-5.5,S+5.5])t.box(M-1.3,f+.14,-.8,M+1.3,f+.55,.8,oe("#c4c9cf"),null,{noBottom:!0});t.box(_+2,.45,-c+.25,y-2,h,c-.25,a);for(let M of[S-7,S+7])t.box(M-1.3,.1,-1.2,M+1.3,.75,1.2,r);if(v===0){let M=S-3,E=f+.55;t.box(M-.6,f+.14,-.6,M+.6,f+.3,.6,r),t.rod([M-.5,f+.3,0],[M,E+.9,0],.03,.03,4,r),t.rod([M+.5,f+.3,0],[M,E+.9,0],.03,.03,4,r),t.rod([M,E+.9,-.85],[M,E+.9,.85],.03,.03,4,r)}}let g=new ct(t.build(),e);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let x=new Bt;x.add(g),x.visible=!1;let m={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:p},d={};return{group:x,st:m,start(v,S,_=16){Object.assign(m,{active:!0,sx:v,dir:S,speed:_,u:-S*290,ds:S>0?-2:2,cleared:!1}),x.visible=!0},update(v,S,_,y,b){if(!m.active)return;m.u+=m.dir*m.speed*v;let A=m.u-m.dir*m.length/2;if(!m.cleared&&(m.dir>0?A>b+1:A<-b-1)&&(m.cleared=!0),Math.abs(m.u)>330){m.active=!1,x.visible=!1;return}S.at(m.sx,d),x.position.set(d.x+d.fx*m.ds+d.rx*m.u-_.x,d.y+.34,d.z+d.fz*m.ds+d.rz*m.u-_.z),x.rotation.y=d.h+(m.dir>0?Math.PI:0),e.emissiveIntensity=.3+y*1.1}}}var e_='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Os=2048,Bs=4096;function vc(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var Yd=vc(256,256);{let i=Yd.getContext("2d"),e=i.createImageData(256,256),t=bn(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var oh=class{constructor(){this.cA=vc(Os,Bs),this.cE=vc(Os/2,Bs/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Os/2,Bs/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Os,Bs),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Yd,"repeat")}add(e,t,n,s){if(this.x+t+4>Os&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Bs)throw new Error("atlas full at "+e);let a={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let o of[this.a,this.e])o.save(),o===this.e&&o.scale(.5,.5),o.translate(a.x,a.y),o.beginPath(),o.rect(0,0,t,n),o.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5;return this.cells[e]={u0:(a.x+l)/Os,u1:(a.x+t-l)/Os,v0:1-(a.y+n-l)/Bs,v1:1-(a.y+l)/Bs,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new Un(n);return s.colorSpace=zt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=On,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function mn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Dr(i,e,t,n,s,r){let a=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,o])=>a.addColorStop(l,o)),i.fillStyle=a,i.fillRect(e,t,n,s)}function Ir(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Dr(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,t,1.5)}mn(i,e,t,n,.13)}function Bi(i,e,t,n,s,r=.13){let a=i.createLinearGradient(0,t,0,t+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(e,t,n,s)}function le(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Lr(i,e,t,n,s,r,a="#d9dde2",l="rgba(40,45,60,0.55)"){le(i,e-r,t-r,n+2*r,s+2*r,a),le(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function zi(i,e,t,n,s,r,a=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),o=a?"#4f78b8":"#5f93d6",u=a?"#86a9d4":"#a6c8ec";l.addColorStop(0,o),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let c=e+n*r();i.beginPath(),i.moveTo(c,t),i.lineTo(c+n*.18,t),i.lineTo(c-n*.25,t+s),i.lineTo(c-n*.43,t+s),i.fill(),i.restore()}function Wd(i,e,t,n,s,r="#efe6d2"){le(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(e+a,t,1.5,s);Dr(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function _c(i,e,t=800){i.font=`${t} ${e}px ${e_}`}function yt(i,e,t,n,s,r,a,l=800,o=null){_c(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,_c(i,u,l);i.textAlign="center",i.textBaseline="middle",o&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=o,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=a,i.fillText(e,t,n)}function gc(i,e,t,n,s,r,a,l=800,o=null){let u=[...e],c=u.length,h=Math.min(r*1.05,(s-n)/c),f=Math.min(r,h*.95);_c(i,f,l),i.textAlign="center",i.textBaseline="middle",u.forEach((p,g)=>{let x=n+(s-n-h*c)/2+h*(g+.5);o&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=o,i.strokeText(p,t,x)),i.fillStyle=a,i.fillText(p,t,x)})}function zs(i,e,t,n,s,r,a,l=!0){if(le(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Dr(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let o=e+n*.2*a();o<e+n-4;o+=n*(.18+a()*.3)){let u=Math.min(n*(.1+a()*.2),e+n-o),c=s*(.12+a()*.25);i.fillRect(o,t+s-c,u,c)}}i.restore()}function t_(i,e,t,n,s,r,a){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",le(e,t,n,s,r,a),e.globalCompositeOperation="lighter",e.globalAlpha=.22,le(e,t,n,s,r,a),e.globalCompositeOperation="multiply",e.globalAlpha=1,Dr(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Xd=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],xc=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],qd=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],n_=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Zd(){let i=new oh,e=bn(2024),t=240,n=(o,u,c,h,f,p,g=!1)=>{Ir(o,i,c,h,"#ece8e0",0);let x=bn(p*31+(f?7:0)+5);if(p===0){let m=c*.14,d=h*.22,v=c*.72,S=h*.5;Lr(o,m,d,v,S,5),zi(o,m,d,v/2,S,x),zi(o,m+v/2,d,v/2,S,x);let _=x()<.8?v*(.18+x()*.25):0;_&&Wd(o,m+2,d+2,_,S-4,x()<.5?"#efe6d2":"#d9e4ea"),le(o,m+v/2-2,d,4,S,"#cfd4da"),le(o,m-8,d+S+5,v+16,6,"#d8d8d4"),Bi(o,m-4,d+S+11,8,60),Bi(o,m+v-4,d+S+11,8,60),f&&(zs(u,m,d,v,S,g?"#e6eeff":"#ffcf8f",x),_&&le(u,m+2,d+2,_,S-4,g?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),le(u,m+v/2-2,d,4,S,"#000"))}else if(p===1){for(let m of[.12,.56]){let d=c*m,v=h*.28,S=c*.3,_=h*.36;Lr(o,d,v,S,_,4),zi(o,d,v,S,_,x,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(d,v,S,_*.45),Bi(o,d,v+_+6,S,40,.1),f&&x()<.8&&zs(u,d,v,S,_,x()<.5?"#ffd9a0":"#e8f0ff",x)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(c*.88,h*.2,9,0,7),o.fill()}else if(p===2){let m=c*.1,d=h*.12,v=c*.8,S=h*.84;Lr(o,m,d,v,S,4),zi(o,m,d,v/2,S,x),zi(o,m+v/2,d,v/2,S,x);let _=v*(.2+x()*.3);Wd(o,m+2,d+2,_,S-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),le(o,m+v/2-2,d,4,S,"#cfd4da"),f&&(zs(u,m,d,v,S,g?"#e6eeff":"#ffcb85",x),le(u,m+2,d+2,_,S-4,g?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),le(u,m+v/2-2,d,4,S,"#000"))}else if(p===3){Ir(o,i,c,h,"#dfe3e6",0);let m=h*.25,d=h*.55;zi(o,0,m,c,d,x,1);for(let v=0;v<=c;v+=c/4)le(o,v-2,m,4,d,"#8d98a6");if(le(o,0,m-4,c,4,"#8d98a6"),le(o,0,m+d,c,5,"#7d8796"),f)for(let v=0;v<4;v++)x()<.7&&zs(u,v*c/4+2,m,c/4-4,d,x()<.6?"#f2f6ff":"#ffe2b0",x)}else if(p===4){o.fillStyle="#6b4a35",o.fillRect(0,0,c,h);for(let _=0;_<h;_+=12)le(o,0,_,c,2,"rgba(30,18,10,0.35)"),le(o,0,_+2,c,1,"rgba(255,220,180,0.06)");mn(o,i,c,h,.15);let m=c*.18,d=h*.25,v=c*.64,S=h*.45;le(o,m-6,d-6,v+12,S+12,"#4a3020"),le(o,m,d,v,S,"#efe4c8"),o.fillStyle="#5a3a26";for(let _=1;_<6;_++)o.fillRect(m+_*v/6-1.5,d,3,S);for(let _=1;_<3;_++)o.fillRect(m,d+_*S/3-1.5,v,3);if(f){zs(u,m,d,v,S,"#ffc070",x,!1),u.fillStyle="#000";for(let _=1;_<6;_++)u.fillRect(m+_*v/6-1.5,d,3,S);for(let _=1;_<3;_++)u.fillRect(m,d+_*S/3-1.5,v,3)}}else if(p===5){le(o,c*.08,0,7,h,"#bdbdb6"),le(o,c*.08+5,0,2,h,"rgba(0,0,0,0.2)");let m=c*.55,d=h*.3,v=c*.22,S=h*.24;Lr(o,m,d,v,S,3),le(o,m,d,v,S,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(m,d,v,S/2),Bi(o,m,d+S+4,v,50,.12),le(o,c*.22,h*.55,26,34,"#cfcfca"),le(o,c*.22+4,h*.55+6,18,12,"#9aa2a8"),f&&zs(u,m,d,v,S,g?"#eef2ff":"#fff0d8",x,!1)}else if(p===6){let m=c*.4,d=h*.35,v=c*.2,S=h*.28;Lr(o,m,d,v,S,3),zi(o,m,d,v,S,x,1),Bi(o,m,d+S+4,v,70,.14),f&&zs(u,m,d,v,S,g?"#e8efff":"#ffd9a0",x)}};for(let o=0;o<7;o++)i.add("win"+o,t,t,(u,c,h,f)=>n(u,c,h,f,!1,o)),i.add("win"+o+"L",t,t,(u,c,h,f)=>n(u,c,h,f,!0,o));for(let o of[0,2,5,6])i.add("win"+o+"C",t,t,(u,c,h,f)=>n(u,c,h,f,!0,o,!0));i.add("plain",t,t,(o,u,c,h)=>{Ir(o,i,c,h,"#ece8e0"),Bi(o,c*.3,0,12,h*.6,.06)}),i.add("concrete",t,t,(o,u,c,h)=>{Ir(o,i,c,h,"#d9d7d0",60);for(let f=0;f<6;f++)Bi(o,f*41%c,0,10,h*.5,.07)});let s=288,r=(o,u,c,h,f,p)=>{let g=bn(p);if(Ir(o,i,c,h,"#e6e2da"),f==="glass"||f==="door"||f==="konbini"||f==="cafe"){let m=h*.22,d=c-12,v=h*.78-4;le(o,6,m,d,v,f==="konbini"?"#f6f4ea":f==="cafe"?"#7a5a40":"#8a7a68");for(let _=m+v*.25;_<m+v;_+=v*.22){le(o,6,_,d,3,"rgba(60,50,40,0.5)");for(let y=9;y<6+d-6;y+=6+g()*8)o.fillStyle=e.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(y,_-6-g()*10,4+g()*5,6+g()*10)}f==="konbini"&&le(o,6,m+4,d,5,"#ffffff"),f==="door"&&(le(o,c/2-30,m+18,60,24,"#fff"),yt(o,"\u55B6\u696D\u4E2D",c/2,m+30,54,18,"#c82828")),f==="glass"&&g()<.7&&(le(o,16,m+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),yt(o,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,m+44,40,16,"#c02020")),t_(o,u,6,m,d,v,f==="konbini"?"#e4eef8":f==="cafe"?"#f0a868":"#f2d2a6"),o.save(),o.globalAlpha=.35,zi(o,6,m,d,v,g),o.restore(),le(o,6,m,d,4,"#4a4e57"),le(u,6,m,d,4,"#000"),f==="door"&&(le(o,c/2-2,m,4,v,"#4a4e57"),le(u,c/2-2,m,4,v,"#000"),le(o,c/2-14,m+v*.45,3,40,"#c0c4c8"),le(o,c/2+11,m+v*.45,3,40,"#c0c4c8")),f==="cafe"&&(le(o,c*.62,h-70,46,62,"#2c3a30"),le(u,c*.62,h-70,46,62,"#000"),yt(o,"\u30E9\u30F3\u30C1",c*.62+23,h-50,40,13,"#fff",700))}else if(f==="shutter"){let m=h*.2,d=c-12,v=h*.8;le(o,6,m,d,v,"#b8bcc0");for(let S=m;S<m+v;S+=7)le(o,6,S,d,2,"rgba(60,64,72,0.35)"),le(o,6,S+2,d,1,"rgba(255,255,255,0.35)");le(o,6,m,d,10,"#8f949a"),mn(o,i,c,h,.12),g()<.5&&(le(o,c/2-40,m+v*.35,80,26,"#fff"),yt(o,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),c/2,m+v*.35+13,74,16,"#333",700))}else if(f==="noren"){le(o,0,0,c,h,"#5b3c28");for(let _=0;_<c;_+=10)le(o,_,h*.2,3,h*.8,"rgba(25,15,8,0.6)");mn(o,i,c,h,.15);let x=c*.12,m=h*.24,d=c*.76,v=h*.34,S=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);le(o,x,m,d,v,S);for(let _=1;_<3;_++)le(o,x+d*_/3-1,m+v*.25,2,v*.75,"rgba(255,255,255,0.25)");yt(o,e.pick(n_),c/2,m+v*.55,d*.9,46,"#f5f0e6",800),le(o,x,m,d,6,"#3a2a1c"),u.fillStyle="#ffae5c",u.fillRect(x,m+v,d,h-m-v),u.fillStyle="rgba(255,170,90,0.6)",u.fillRect(x,m,d,v),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c*.9,h*.36,13,19,0,0,7),o.fill(),yt(o,"\u9152",c*.9,h*.36,16,14,"#fff"),u.fillStyle="#ff6a3a",u.beginPath(),u.ellipse(c*.9,h*.36,13,19,0,0,7),u.fill()}else if(f==="house"){let x=c*.18,m=h*.3,d=c*.34,v=h*.7;le(o,x-6,m-6,d+12,v+6,"#9a9a96"),le(o,x,m,d,v,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),le(o,x+d-14,m+v*.5,4,22,"#d8d0c0"),le(o,x+6,m+10,d-12,v*.25,"rgba(255,255,255,0.18)"),le(o,c*.62,h*.48,30,22,"#cfcfca"),le(o,c*.62+6,h*.48+5,18,4,"#555");let S=c*.6,_=h*.22,y=c*.3,b=h*.2;Lr(o,S,_,y,b,3),zi(o,S,_,y,b,g,1);for(let A=0;A<3;A++)o.fillStyle="#7b5a43",o.fillRect(c*.6+A*22,h-26,16,18),o.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(c*.6+A*22+8,h-32,11,0,7),o.fill();u.fillStyle="#ffd08a",u.beginPath(),u.arc(x+d+14,m+8,6,0,7),u.fill(),g()<.6&&(u.fillStyle="#ffcf8f",u.fillRect(S,_,y,b))}else if(f==="garage"){let m=h*.25,d=c-16,v=h*.75;le(o,8,m,d,v,"#efefec");for(let S=m;S<m+v;S+=9)le(o,8,S,d,1.5,"rgba(80,80,90,0.25)");mn(o,i,c,h,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,u)=>{i.add("shop_"+o,t,s,(c,h,f,p)=>r(c,h,f,p,o,100+u)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",t,s,(c,h,f,p)=>r(c,h,f,p,o,200+u))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(u,c,h,f)=>{let[p,g]=xc[o%xc.length],x=Xd[o*7%Xd.length];le(u,0,0,h,f,p),le(u,0,0,h,5,"rgba(255,255,255,0.35)"),le(u,0,f-6,h,6,"rgba(0,0,0,0.18)"),o%3===0&&(le(u,12,12,f-24,f-24,g),yt(u,x[0],12+(f-24)/2,f/2,f-30,34,p)),yt(u,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g,900),mn(u,i,h,f,.08),c.fillStyle=p==="#fff"||p==="#f5efe0"?"#d9d6cc":p,c.fillRect(0,0,h,f),c.globalAlpha=.9,yt(c,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g==="#fff"?"#ffffff":g,900),c.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(u,c,h,f)=>{let[p,g]=xc[(o*3+1)%xc.length],x=qd[o%qd.length];le(u,0,0,h,f,p),u.strokeStyle="rgba(0,0,0,0.3)",u.lineWidth=4,u.strokeRect(2,2,h-4,f-4),gc(u,x,h/2,12,f-12,56,g,900),mn(u,i,h,f,.08),le(c,0,0,h,f,p==="#fff"?"#e8e8e8":p),gc(c,x,h/2,12,f-12,56,g==="#fff"?"#fff":g,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,u,c],h)=>i.add("bb"+h,512,240,(f,p,g,x)=>{le(f,0,0,g,x,"#fbfaf5"),le(f,0,0,g,x*.62,c),yt(f,o,g/2,x*.32,g*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),yt(f,u,g/2,x*.8,g*.85,52,"#333",800),mn(f,i,g,x,.08),le(p,0,0,g,x,"#555"),p.globalAlpha=.85,le(p,0,0,g,x*.62,c),yt(p,o,g/2,x*.32,g*.9,96,"#fff",900),p.globalAlpha=1})),i.add("konbini_band",480,72,(o,u,c,h)=>{le(o,0,0,c,h,"#fbfbf7"),le(o,0,h*.62,c,h*.14,"#2a9a4a"),le(o,0,h*.76,c,h*.12,"#f08a24"),le(o,0,h*.88,c,h*.12,"#2f6fd8"),yt(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900),u.fillStyle="#f3f6f0",u.fillRect(0,0,c,h),yt(u,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",c/2,h*.32,c*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(u,c,h,f)=>{let p=["#d8352a","#2f6fd8","#f4f4f0"][o];le(u,0,0,h,f,p),le(u,8,10,h-16,f*.55,"#eef4f8");let g=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let x=0;x<4;x++)for(let m=0;m<6;m++){let d=14+m*17,v=18+x*30;u.fillStyle=g[(x*6+m+o)%g.length],u.fillRect(d,v,11,20),u.fillStyle="rgba(255,255,255,0.5)",u.fillRect(d+2,v+2,3,14),u.fillStyle="#2a2a2a",u.fillRect(d,v+23,11,3)}le(u,10,f*.62,h-20,22,"#222"),le(u,h-34,f*.66,14,22,"#bbb"),le(u,14,f*.82,h-28,22,"#1b1b1b"),yt(u,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],h/2,f*.62+11,h-28,14,"#fff",700),mn(u,i,h,f,.08),c.fillStyle="#f2f8ff",c.fillRect(8,10,h-16,f*.55);for(let x=0;x<4;x++)for(let m=0;m<6;m++)c.fillStyle=g[(x*6+m+o)%g.length],c.fillRect(14+m*17,18+x*30,11,20);c.fillStyle="#9fd0ff",c.fillRect(10,f*.62,h-20,22)});i.add("ac",128,88,(o,u,c,h)=>{le(o,0,0,c,h,"#e9e9e4"),Dr(o,0,0,c,h,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(c*.4,h*.5,h*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let f=6;f<h*.36;f+=6)o.beginPath(),o.arc(c*.4,h*.5,f,0,7),o.stroke();for(let f=12;f<h-10;f+=6)le(o,c*.78,f,c*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,u,c,h)=>{le(o,0,0,c,h,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,c-6,h-6),yt(o,"\u54C1\u5DDD 580",c/2,16,c*.6,14,"#2f5a2f",700),yt(o,"\u3042 12-34",c/2,42,c*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(c-2,2),o.lineTo(c/2,h-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(c-10,7),o.lineTo(c/2,h-12),o.fill(),yt(o,"\u6B62\u307E\u308C",c/2,34,c*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(c/2,22),o.lineTo(c/2+22,50),o.lineTo(c/2+8,50),o.lineTo(c/2+8,88),o.lineTo(c/2-8,88),o.lineTo(c/2-8,50),o.lineTo(c/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(c/2,h/2,c/2-9,0,7),o.stroke(),yt(o,"30",c/2,h/2+2,c*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,u,c,h)=>{le(o,0,0,c,h,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,c-6,h-6),gc(o,"\u672C\u753A\u4E8C\u4E01\u76EE",c/2,10,h-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(u,c,h,f)=>{let p=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];le(u,0,0,h,f,p),le(u,4,4,h-8,f*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),yt(u,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],h/2,f*.25,h-12,18,"#fff",900);for(let g=0;g<4;g++)le(u,8,f*.58+g*8,h-16-g%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,t,88,(u,c,h,f)=>{let p=["#e9e3d6","#dfe6ea","#efe2dc"][o];if(Ir(u,i,h,f,p),o===1)for(let g=10;g<h-6;g+=h/6)le(u,g,10,h/6-8,f-20,"rgba(220,235,245,0.9)"),u.fillStyle="rgba(255,255,255,0.45)",u.fillRect(g,10,h/6-8,(f-20)*.4);else{le(u,0,0,h,7,"rgba(255,255,255,0.4)");for(let g=h/3;g<h;g+=h/3)le(u,g-1,0,2,f,"rgba(0,0,0,0.08)")}le(u,0,f-6,h,6,"rgba(0,0,0,0.12)"),Bi(u,h*.3,f-6,10,10,.2)});i.add("kawara",256,256,(o,u,c,h)=>{le(o,0,0,c,h,"#58617a");for(let f=0;f<h;f+=16)Dr(o,0,f,c,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let f=0;f<c;f+=20)le(o,f,0,2,h,"rgba(0,0,0,0.18)");mn(o,i,c,h,.12)}),i.add("wood",256,256,(o,u,c,h)=>{le(o,0,0,c,h,"#6d4c37");for(let f=0;f<h;f+=14)le(o,0,f,c,2,"rgba(25,15,8,0.4)"),le(o,0,f+2,c,1,"rgba(255,220,180,0.07)");mn(o,i,c,h,.16)}),i.add("block",256,128,(o,u,c,h)=>{le(o,0,0,c,h,"#c9c7bf");for(let f=0;f<h;f+=32)for(let p=f/32%2?-32:0;p<c;p+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(p+1,f+1,62,30);for(let f=0;f<c;f+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(f+20,40,24,16);mn(o,i,c,h,.15),Bi(o,0,0,c,40,.1)}),i.add("lantern",64,96,(o,u,c,h)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),o.fill();for(let f=16;f<h-12;f+=7)le(o,4,f,c-8,1.5,"rgba(0,0,0,0.2)");le(o,c/2-14,2,28,8,"#222"),le(o,c/2-14,h-10,28,8,"#222"),yt(o,"\u796D",c/2,h/2,c*.6,28,"#fff",900),u.fillStyle="#ff6a35",u.beginPath(),u.ellipse(c/2,h/2,c/2-2,h/2-8,0,0,7),u.fill()}),i.add("busstop",96,96,(o,u,c,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(c/2,h/2,c/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(c/2,h/2,c/2-6,0,7),o.stroke(),yt(o,"\u30D0\u30B9\u505C",c/2,h/2,c*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>le(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,u,c,h)=>{o.save(),o.translate(c/2,h/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(c/2-22,h/2-6,44,18),o.fillRect(c/2-16,h/2-16,18,12),o.fillRect(c/2+8,h/2-13,5,7),o.beginPath(),o.arc(c/2-12,h/2+15,5,0,7),o.arc(c/2+12,h/2+15,5,0,7),o.fill(),yt(o,"\u8E0F\u5207",c/2,h/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((o,u)=>i.add("bridge"+u,64,176,(c,h,f,p)=>{le(c,0,0,f,p,"#b9b5ab"),mn(c,i,f,p,.2),le(c,6,6,f-12,p-12,"#a7a398"),gc(c,o,f/2,14,p-14,34,"#3f3c37",800)})),i.add("signal",240,84,(o,u,c,h)=>{le(o,0,0,c,h,"#4a4d52"),le(o,0,0,c,5,"#5c6066"),mn(o,i,c,h,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([f,p])=>{o.fillStyle="#26282c",o.beginPath(),o.arc(p,h/2,33,0,7),o.fill(),o.fillStyle=f,o.beginPath(),o.arc(p,h/2,27,0,7),o.fill()})}),i.add("ped_sig",64,128,(o,u,c,h)=>{le(o,0,0,c,h,"#3d4045"),o.fillStyle="#5a1814",o.fillRect(8,8,c-16,h/2-12),o.fillStyle="#0d4f44",o.fillRect(8,h/2+4,c-16,h/2-12),o.fillStyle="rgba(255,255,255,0.18)",o.beginPath(),o.arc(c/2,h*.18,6,0,7),o.fill(),o.fillRect(c/2-5,h*.24,10,18)}),i.add("tomare",256,96,(o,u,c,h)=>{o.clearRect(0,0,c,h),o.fillStyle="rgba(244,244,238,0.012)",o.fillRect(0,0,c,h),yt(o,"\u6B62\u307E\u308C",c/2,h/2+4,c*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((o,u)=>i.add("hodokyo"+u,256,44,(c,h,f,p)=>{le(c,0,0,f,p,"#1f4f96"),c.strokeStyle="#fff",c.lineWidth=3,c.strokeRect(4,4,f-8,p-8),yt(c,o,f/2,p/2+1,f*.85,28,"#fff",800)}));let l=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];l.forEach(([o,u,c],h)=>{let f=l[(h+3)%4][0],p=l[(h+1)%4][0];i.add("ekimei"+h,320,124,(g,x,m,d)=>{le(g,0,0,m,d,"#3a3d42"),le(g,4,4,m-8,d-8,"#f8f8f3"),yt(g,u,m/2,20,m*.5,15,"#2b2b2b",700),yt(g,o,m/2,52,m*.6,40,"#151515",900),yt(g,c,m/2,80,m*.5,12,"#555",600),le(g,4,d-30,m-8,26,"#1f9a50"),g.fillStyle="#fff",_c(g,12,700),g.textBaseline="middle",g.textAlign="left",g.fillText("\u2190 "+f,12,d-17),g.textAlign="right",g.fillText(p+" \u2192",m-12,d-17),mn(g,i,m,d,.06),le(x,4,4,m-8,d-8,"#8a8a84")}),i.add("ekiplate"+h,220,48,(g,x,m,d)=>{le(g,0,0,m,d,"#4b3326"),mn(g,i,m,d,.2),yt(g,o+"\u99C5",m/2,d/2+1,m*.8,30,"#f3ead8",800)})});for(let o of["l","r"])i.add("chev_"+o,96,120,(u,c,h,f)=>{le(u,0,0,h,f,"#f4f4ef"),le(u,4,4,h-8,f-8,"#1e5bb8"),u.fillStyle="#f8f8f4",u.beginPath();let p=o==="r"?1:-1,g=h/2,x=f/2;u.moveTo(g-p*26,x-40),u.lineTo(g+p*22,x),u.lineTo(g-p*26,x+40),u.lineTo(g-p*8,x+40),u.lineTo(g+p*40,x),u.lineTo(g-p*8,x-40),u.closePath(),u.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((o,u)=>i.add("tunnel"+u,360,80,(c,h,f,p)=>{le(c,0,0,f,p,"#e9e7e0"),le(c,4,4,f-8,p-8,"#24403b"),mn(c,i,f,p,.08),yt(c,o,f/2,p*.42,f*.8,38,"#f4f2ea",800),yt(c,"L = 170 m",f/2,p*.8,f*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(o,u,c,h)=>{le(o,0,0,c,h,"#f6f6f2"),o.fillStyle="#d42a22";for(let f=-20;f<h;f+=26)o.beginPath(),o.moveTo(4,f),o.lineTo(c/2,f+20),o.lineTo(c-4,f),o.lineTo(c-4,f+11),o.lineTo(c/2,f+31),o.lineTo(4,f+11),o.closePath(),o.fill();o.strokeStyle="#222",o.lineWidth=3,o.strokeRect(1.5,1.5,c-3,h-3)}),i.add("xing_plate",128,48,(o,u,c,h)=>{le(o,0,0,c,h,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,c-6,h-6),yt(o,"\u8E0F\u5207\u6CE8\u610F",c/2,h/2,c*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,u,c,h)=>{o.clearRect(0,0,c,h),le(o,0,0,c,7,"#e9ebee"),le(o,0,6,c,2,"rgba(60,70,80,0.5)"),le(o,0,h-6,c,6,"#d5d8dc");for(let f=3;f<c;f+=9)le(o,f,7,3,h-13,"#e2e5e9"),le(o,f+2,7,1,h-13,"rgba(70,80,90,0.45)")}),i}function Jd(i){let n=vc(1024,2048),s=n.getContext("2d"),r=bn(321),a={},l={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},o=(h,f,p)=>{let g=l[h],x=256,m=h==="pine",d=h==="sakura";s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let v=[[x,x,m?80:92]];for(let _=0;_<(m?10:14);_++){let y=r()*6.28,b=45+r()*120;v.push([x+Math.cos(y)*b,x+Math.sin(y)*b*(m?.42:.9),Math.min(34+r()*52,232-b)])}let S=d?2300:m?2600:2300;for(let _=0;_<S;_++){let y=v[Math.floor(r()*v.length)],b=r()*6.28,A=Math.sqrt(r())*y[2],M=y[0]+Math.cos(b)*A,E=y[1]+Math.sin(b)*A*(m?.45:1),C=A/y[2],P=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(C>.82?.5:0))));if(s.fillStyle=g[P],d){let I=7+r()*8;s.beginPath(),s.arc(M,E,I,0,7),s.fill(),r()<.25&&(s.fillStyle=g[4],s.beginPath(),s.arc(M-I*.3,E-I*.3,I*.4,0,7),s.fill())}else if(m)s.save(),s.translate(M,E),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(h==="momiji"){let I=8+r()*7;s.save(),s.translate(M,E),s.rotate(r()*6.28),s.beginPath();for(let D=0;D<10;D++){let w=D%2?I*.42:I,L=D/10*6.2832;s.lineTo(Math.cos(L)*w,Math.sin(L)*w)}s.closePath(),s.fill(),s.restore()}else if(h==="ginkgo"){let I=9+r()*7;s.save(),s.translate(M,E),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,I,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let I=9+r()*10;s.beginPath(),s.ellipse(M,E,I,I*.55,r()*6.28,0,7),s.fill()}}for(let _=0;_<90;_++){let y=r()*6.28,b=150+r()*85,A=x+Math.cos(y)*b,M=x+Math.sin(y)*b*(m?.45:.92);s.fillStyle=g[1+Math.floor(r()*4)],m?(s.save(),s.translate(A,M),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(A,M,d?6+r()*6:7+r()*6,0,7),s.fill())}if(d)for(let _=0;_<14;_++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let y=x+(r()-.5)*300,b=x+60+r()*120;s.beginPath(),s.moveTo(y,b),s.lineTo(y+(r()-.5)*40,b-20-r()*30),s.stroke()}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}},u=(h,f,p,g)=>{s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let x=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],m=g?120:170;for(let d=0;d<m;d++){let v=256+(r()-.5)*(g?330:380)*Math.sqrt(r()),S=150+r()*(g?230:300)*(1-Math.abs(v-256)/300),_=(v-256)*.35+(r()-.5)*90,y=9+r()*9,b=v+_,A=512-S,M=Math.min(4,Math.floor(r()*2.2+S/380*2.6)),E=s.createLinearGradient(0,512,0,A);E.addColorStop(0,x[0]),E.addColorStop(.6,x[Math.max(1,M-1)]),E.addColorStop(1,x[M]),s.fillStyle=E,s.beginPath(),s.moveTo(v-y/2,512),s.quadraticCurveTo(v-y/2+_*.3,512-S*.55,b,A),s.quadraticCurveTo(v+y/2+_*.3,512-S*.5,v+y/2,512),s.fill()}if(g)for(let d=0;d<16;d++){let v=110+r()*290,S=150+r()*200,_=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(v+(r()-.5)*20,512),s.quadraticCurveTo(v+(r()-.5)*30,(S+512)/2,v,S),s.stroke(),_<.55){s.fillStyle="#fbfaf2";for(let y=0;y<12;y++){let b=y/12*6.283;s.beginPath(),s.ellipse(v+Math.cos(b)*11,S+Math.sin(b)*11,9,4.5,b,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(v,S,8,0,7),s.fill()}else if(_<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(v,S,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(v-3,S-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let y=0;y<6;y++)s.beginPath(),s.arc(v+(r()-.5)*16,S+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512),o("momiji",0,1024),o("ginkgo",512,1024),u("grass",0,1536,!1),u("flowers",512,1536,!0);let c=new Un(n);return c.colorSpace=zt,c.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:c,cells:a,tuftV:[0,1-1536/2048]}}var on=[1,1,1],ue={pole:oe("#b1b0a9"),metal:oe("#8d9198"),black:oe("#2a2b30"),yellow:oe("#f2c230"),white:oe("#f4f3ee"),trans:oe("#a0a3a8"),lampPole:oe("#727780"),lampHead:oe("#dcdcd6"),trunk:oe("#6a5444"),trunkDark:oe("#4b3a33"),leaf:oe("#86ba4c"),leafShade:oe("#2c6640"),sakura:oe("#ffd3e3"),sakuraShade:oe("#de94b4"),pine:oe("#55874c"),pineShade:oe("#1d4632"),cedar:oe("#41713e"),cedarShade:oe("#1b3e2a"),roof:oe("#bdbbb3"),parapet:oe("#dcdad2"),pipe:oe("#c4c4bf"),orange:oe("#f07a22"),red:oe("#d8352a"),vermilion:oe("#e2482c"),concrete:oe("#c9c7c0"),stone:oe("#a8a69e"),terracotta:oe("#b8653d"),rail:oe("#eeeeea")},Hi=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(oe),i_=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(oe),ch=null;function Kd(i){ch=i}var Ei=i=>ch.uv(i),Xo=Ei,s_=(i,e)=>ch.has(e+"2")&&i()<.5?e+"2":e;function yc(i,e,t,n,s=0){let r=new $e().makeRotationY(s);r.setPosition(e,t,n);let a=new $e().multiplyMatrices(i,r);return a.groundY=i.groundY,a}var en=(i,e,t,n,s,r,a,l=on)=>i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,Ei(a)),Vi=(i,e,t,n,s,r,a,l=on)=>i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,Ei(a)),Gi=(i,e,t,n,s,r,a,l=on)=>i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,Ei(a)),Nr=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Ei(r):void 0),r_=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function jd(i){return r_.map(e=>new B(e[0],e[1],e[2]).applyMatrix4(i))}function uh(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,ue.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?ue.black:ue.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,ue.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,ue.metal);let a=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of a)s.cyl(0,r-.53,u,.05,.035,.17,6,ue.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,ue.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,ue.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,ue.trans),s.box(-.06,7.2,.12,.06,7.35,.26,ue.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,ue.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,ue.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,ue.concrete);for(let u=2.4,c=0;u<r-2;u+=.45,c++)s.rod([0,u,0],[c%2?.3:-.3,u,0],.015,.015,3,ue.metal);return i.atlas.setM(e),en(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&en(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...a.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new B(u[0],u[1],u[2]).applyMatrix4(e))}function hh(i,e,t,n={}){let s=i.color;s.setM(e),s.cyl(0,0,0,.08,.06,6,8,ue.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,ue.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,ue.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,ue.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,on);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],on,{u0:0,u1:1,v0:0,v1:1})}function Qd(i,e,t=.04){let n=i.color;n.setM(e),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,ue.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,ue.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,ue.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,on),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],on,{u0:0,u1:1,v0:0,v1:1})}function qo(i,e){let t=i.color;t.setM(e),t.cyl(0,0,0,.07,.06,3.2,8,oe("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,oe("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,oe("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,on),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],on,{u0:0,u1:1,v0:0,v1:1})}function fh(i,e,t){let n=Math.floor(t()*3),s=[ue.red,oe("#2f6fd8"),ue.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Sn(s,.8)),i.atlas.setM(e),en(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function ah(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,oe("#e6e6e1")),i.atlas.setM(e),en(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function ep(i,e,t){let n=i.color;n.setM(e);let s=t.pick([oe("#c8ccd2"),oe("#c0392b"),oe("#2c6fb7"),oe("#2b2b2b"),oe("#e8c84a"),oe("#e98fb0")]);for(let a of[-.52,.52])for(let l=0;l<12;l++){let o=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([a+Math.cos(o)*.33,.34+Math.sin(o)*.33,0],[a+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,ue.black)}let r=(a,l)=>n.rod(a,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,ue.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,ue.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,ue.metal)}function tp(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,ue.orange),t.cyl(0,.04,0,.16,.03,.68,10,ue.orange),t.cyl(0,.32,0,.115,.095,.12,10,ue.white,!1)}function np(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,ue.terracotta),i.leaf.setM(e),ki(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function ps(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,ue.metal),i.atlas.setM(e),n<0?Gi(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Vi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function dh(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?ue.white:ue.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,ue.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,ue.black),i.atlas.setM(e),t<0?Gi(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Vi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function ip(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,oe("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,oe("#f0a020"))}function ph(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,ue.orange);let s=0,r=3.25,a=.42,l=14;for(let o=0;o<l;o++){let u=o/l*Math.PI*2,c=(o+1)/l*Math.PI*2,h=(f,p,g)=>[t*g,r+Math.sin(f)*p,s+Math.cos(f)*p-.25];Nr(n,h(0,0,-.02),h(t>0?c:u,a,-.02),h(t>0?u:c,a,-.02),ue.orange),Nr(n,h(0,0,-.035),h(t>0?c:u,a*.86,-.035),h(t>0?u:c,a*.86,-.035),oe("#dfe9f2"))}}var mh=null;function sp(i){mh=i}var lh=1;function rp(i){lh=i}function ki(i,e,t,n,s,r,a,l,o,u,c,h,f=0){let p=mh[a],g=1+(1-lh)*.35;l=Math.max(2,Math.round(l*lh));for(let x=0;x<l;x++){let m=o()*2-1,d=o()*2-1,v=o()*2-1;f&&(d=1.2+o());let S=Math.hypot(m,d,v)||1;m/=S,d/=S,v/=S;let _=-v,y=0,b=m;S=Math.hypot(_,b),S<.1&&(_=1,b=0,S=1),_/=S,b/=S;let A=d*b-v*y,M=v*_-m*b,E=m*y-d*_,C=Math.PI+(o()-.5)*.9,P=Math.cos(C),I=Math.sin(C),D=_*P+A*I,w=y*P+M*I,L=b*P+E*I,U=A*P-_*I,F=M*P-y*I,z=E*P-b*I,O=r*(1.3+o()*.45)*g/2,k=t+(o()-.5)*r*.6,H=n+(o()-.5)*r*(f?.15:.5),ee=s+(o()-.5)*r*.6,de=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([ze,$])=>[k+(D*ze+U*$)*O,H+(w*ze+F*$)*O*(f?.6:1),ee+(L*ze+z*$)*O]),Ze=de.map(ze=>{let $=ze[0]-e[0],Q=ze[1]-e[1],Le=ze[2]-e[2],He=Math.hypot($,Q,Le)||1;$/=He,Q/=He,Le/=He;let Ee=ze[0]-t,et=ze[1]-n,se=ze[2]-s;return He=Math.hypot(Ee,et,se)||1,[$*.7+Ee/He*.3,Q*.7+et/He*.3+(f?.5:0),Le*.7+se/He*.3]}),Ie=de.map(ze=>bd(c,u,.45+.55*Math.max(0,Math.min(1,(ze[1]-h[0])/(h[1]-h[0])))));i.leaf.card(de,Ze,p,Ie)}}function op(i,e,t,n="grass",s=1){let r=mh[n],a=(.42+t()*.38)*s,l=a*1.2,o=t()*Math.PI,u=[0,1,0],c=[u,u,u,u],h=[.6,.64,.58],f=[1,1,1];i.leaf.setM(e);for(let p of[o,o+Math.PI/2]){let g=Math.cos(p)*l/2,x=Math.sin(p)*l/2;i.leaf.card([[-g,-.05,-x],[g,-.05,x],[g,a,x],[-g,a,-x]],c,r,[h,h,f,f])}}function o_(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,ue.trunk);for(let u=0;u<3;u++){let c=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(c)*1.1*n,s*.68,Math.sin(c)*1.1*n],.09*n,.05*n,5,ue.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],a=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],o=7+Math.floor(t()*3);for(let u=0;u<o;u++){let c=t()*6.28,h=(.6+t())*1.3*n;ki(i,r,Math.cos(c)*h,s*(.62+t()*.3),Math.sin(c)*h,(1.1+t()*.6)*n,a,6,t,[1,1,1],[.55,.62,.7],l)}ki(i,r,0,s*.98,0,1.4*n,a,7,t,[1,1,1],[.55,.62,.7],l)}function a_(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,ue.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+t()*.8,h=(2.2+t()*1.6)*n,f=[Math.cos(c)*h,s*(.62+t()*.18),Math.sin(c)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,ue.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,ue.trunkDark)}i.leaf.setM(e);let a=[0,s*.72,0],l=[s*.5,s*1.1],o=[.72,.62,.72];for(let u of r)for(let c=0;c<2;c++)ki(i,a,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],o,l);ki(i,a,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],o,l)}function l_(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,a=t.range(5,7.5)*n,l=[r*.4,a*.45,.2],o=[r,a*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,ue.trunkDark),s.rod(l,o,.15*n,.09*n,6,ue.trunkDark),i.leaf.setM(e);let u=[[o[0],o[1]+.3,o[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[o[0]+.9*n,o[1]-.6,.8,1.1]];for(let[c,h,f,p]of u)s.rod(c>l[0]?l:o,[c,h-.2,f],.07*n,.04*n,4,ue.trunkDark),ki(i,[c,h-.8,f],c,h,f,p*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function c_(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,ue.trunkDark);let r=[];for(let u=0;u<5;u++){let c=u/5*6.28+t()*.8,h=(1.8+t()*1.4)*n,f=[Math.cos(c)*h,s*(.55+t()*.2),Math.sin(c)*h];i.color.rod([0,s*.38,0],f,.09*n,.04*n,5,ue.trunkDark),r.push(f)}i.leaf.setM(e);let a=[0,s*.7,0],l=[s*.45,s*1.1],o=[.62,.52,.56];for(let u of r)ki(i,a,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],o,l);ki(i,a,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],o,l)}function u_(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,ue.trunk),i.leaf.setM(e);let r=[0,s*.62,0],a=[s*.3,s*1.02],l=[.68,.6,.52];for(let o=0;o<7;o++){let u=s*(.34+o*.09),c=(2.1-o*.24)*n,h=t()*6.28;ki(i,r,Math.cos(h)*c*.35,u,Math.sin(h)*c*.35,Math.max(.7,c)*1.05,"ginkgo",5,t,[1,1,1],l,a)}}function h_(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,a=(t()-.5)*.5;s.rod([0,0,0],[a,r,0],.13*n,.05*n,7,oe("#eeece6"));for(let l=0;l<7;l++){let o=t.range(.4,r*.85),u=o/r;s.cyl(a*u,o,0,.135*n*(1-u*.6),.13*n*(1-u*.6),.05,7,oe("#2b2b30"),!1)}for(let l=0;l<7;l++){let o=r*(.45+t()*.5),u=t()*6.28,c=(.8+t()*1.6)*n,h=o/r;s.rod([a*h,o,0],[a*h+Math.cos(u)*c,o+c*.9,Math.sin(u)*c],.035*n,.012*n,4,oe("#8b7f78"))}}function f_(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ue.trunkDark),i.foliage.setM(e);let r=oe("#1d3a2c"),a=oe("#eef2f8"),l=oe("#d7e0ec");for(let o=0;o<4;o++){let u=s*(.16+o*.19),c=(1.9-o*.38)*n,h=s*.3;i.foliage.cyl(0,u,0,c,c*.3,h,9,r),i.foliage.cyl(0,u+h*.45,0,c*.72,.05,h*.62,9,o%2?a:l)}}function d_(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ue.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,ue.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,ue.cedar)}var ap={broad:o_,sakura:a_,pine:l_,cedar:d_,maple:c_,ginkgo:u_,birch:h_,snowcedar:f_},$d={};function lp(i,e){let t=i+e,n=$d[t];if(!n){let s={color:new rn,foliage:new rn,leaf:new rn({uv:!0})};ap[i](s,new $e,bn(1e3+e*77+i.length*13),1),n=$d[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function cp(){for(let i in ap)for(let e=0;e<4;e++)lp(i,e)}function En(i,e,t,n,s=1){let r=lp(t,Math.floor(n()*4)),a=e.clone().scale(new B(s,s,s));a.groundY=e.groundY,i.color.stamp(r.c,a),i.foliage.stamp(r.f,a),i.leaf.stamp(r.l,a)}var p_=new Set(["win0","win2","win5","win6"]),ks=(i,e,t)=>e<t?i+(e<t*.35&&p_.has(i)?"C":"L"):i;function Yo(i,e,t,n,s,r,a){let l=Math.max(1,Math.round(t/3)),o=t/l;for(let u of[-1,1])for(let c=0;c<n.length-1;c++)for(let h=0;h<l;h++){let f=c>0&&r()<.3?ks("win6",r(),a):r()<.2?"win5":"plain";(u>0?Vi:Gi)(i,u*e/2,h*o,(h+1)*o,n[c],n[c+1],f,s)}}function Zo(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],ue.roof);let a=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+a,l,ue.parapet),i.box(-e/2,n,t-l,e/2,n+a,t,ue.parapet),i.box(-e/2,n,0,-e/2+l,n+a,t,ue.parapet),i.box(e/2-l,n,0,e/2,n+a,t,ue.parapet),s()<.4){let o=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[c,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(o+c-.05,n,u+h-.05,o+c+.05,n+1,u+h+.05,ue.metal);i.cyl(o,n+1,u,.85,.85,1.3,12,oe("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,ue.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,ue.metal)}function up(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,ue.black);let r="vs"+Math.floor(s()*10);Gi(i.atlas,e-.065,-.88,-.12,t,n,r),Vi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,ue.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,ue.metal)}function Wi(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,ue.concrete,null,{noBottom:!0}),n.type){case"shop":return m_(i,e,t,n);case"apt":return g_(i,e,t,n);case"office":return x_(i,e,t,n);case"konbini":return v_(i,e,t,n);case"house":return __(i,e,t,n);case"tower":return y_(i,e,t,n)}}function m_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.6,f=3,p=h+(a-1)*f,g=Math.max(1,Math.round(s/3)),x=s/g,m=-s/2,d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let y=0;y<g;y++)en(u,m+y*x,m+(y+1)*x,0,h,0,s_(t,"shop_"+d[y%d.length]));let v=t.pick([0,0,1,5,0,1]),S=[0,h];for(let y=1;y<a;y++)S.push(h+y*f);for(let y=1;y<a;y++)for(let b=0;b<g;b++){let A=b%2===1&&t()<.3?5:v;en(u,m+b*x,m+(b+1)*x,S[y],S[y+1],0,ks("win"+A,t(),o),l)}Yo(u,s,r,S,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],Sn(l,.8)),Zo(c,s,r,p,t);let _=s*.94;if(c.box(-_/2,h-.8,-.3,_/2,h+.08,-.02,ue.black),en(u,-_/2,_/2,h-.8,h+.08,-.305,"hs"+Math.floor(t()*14)),t()<.55){let y=t.pick(i_),b=h-.85;c.quad([s/2-.2,b-.35,-1.1],[-s/2+.2,b-.35,-1.1],[-s/2+.2,b,-.02],[s/2-.2,b,-.02],y),c.quad([s/2-.2,b-.6,-1.1],[-s/2+.2,b-.6,-1.1],[-s/2+.2,b-.35,-1.1],[s/2-.2,b-.35,-1.1],Sn(y,.85))}if(a>=2&&t()<.65){let y=(t()<.5?1:-1)*(s/2-.35);up(i,y,h+.3,Math.min(p-.15,h+2.8),t)}for(let y=1;y<a;y++)if(t()<.4){let b=Math.floor(t()*g),A=m+b*x+.15,M=m+(b+1)*x-.15,E=S[y];c.box(A,E-.12,-.9,M,E,0,ue.parapet),en(u,A,M,E,E+1,-.9,"rail"),Gi(u,A,-.9,0,E,E+1,"rail"),Vi(u,M,-.9,0,E,E+1,"rail"),t()<.45&&mp(c,A+.1,M-.1,E+1.95,-.55,t),t()<.6&&ah(i,e,(A+M)/2+.6,E,-.75)}else if(t()<.35){let b=Math.floor(t()*g);ah(i,e,m+(b+.5)*x,S[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}c.cyl(m+.12,0,-.08,.05,.05,p,6,ue.pipe,!1),c.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,oe("#d9d9d3")),a>=3&&t()<.18&&hp(i,s,p,r,t)}function hp(i,e,t,n,s){let r=Math.min(e*.85,7),a=r*.47,l=n*.3;for(let o of[-r*.35,r*.35])i.color.box(o-.06,t,l,o+.06,t+1.2+a,l+.12,ue.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+a,l+.3,ue.metal),en(i.atlas,-r/2,r/2,t+1.2,t+1.2+a,l+.115,"bb"+Math.floor(s()*4))}function g_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.2,f=2.95,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3.2)),x=s/g,m=-s/2,d=[0,h];for(let _=1;_<a;_++)d.push(h+_*f);for(let _=0;_<g;_++)en(u,m+_*x,m+(_+1)*x,0,h,0,_===Math.floor(g/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),_===Math.floor(g/2)?on:l);let v="bal"+Math.floor(t()*3),S=Sn(l,.97);for(let _=1;_<a;_++){let y=d[_];for(let b=0;b<g;b++)en(u,m+b*x,m+(b+1)*x,y,d[_+1],0,ks("win2",t(),o),l);c.box(m,y-.15,-1.3,-m,y,0,S),c.box(m,y,-1.3,-m,y+1.1,-1.18,S,null,{noBottom:!0});for(let b=0;b<g;b++)en(u,m+b*x,m+(b+1)*x,y,y+1.1,-1.305,v,l);for(let b=0;b<=g;b++)c.box(m+b*x-.05,y,-1.18,m+b*x+.05,y+2.4,0,Sn(l,.92));for(let b=0;b<g;b++){let A=t(),M=m+b*x+.2,E=m+(b+1)*x-.2;A<.34?mp(c,M,E,y+2.02,-.98,t):A<.46&&S_(c,M+.25,Math.min(E-.25,M+1.9),y+1.1,-1.3,t)}i.atlas.setM(e);for(let b=0;b<g;b++)t()<.55&&(ah(i,e,m+(b+.78)*x,y,-.55),i.atlas.setM(e),i.color.setM(e))}c.box(m,p-.15,-1.3,-m,p,0,S),Yo(u,s,r,d,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],Sn(l,.8)),Zo(c,s,r,p,t,!0)}function x_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=4,f=3.4,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3)),x=s/g,m=-s/2,d=[0,h];for(let v=1;v<a;v++)d.push(h+v*f);for(let v=0;v<g;v++)en(u,m+v*x,m+(v+1)*x,0,h,0,v===1?"shop_door":"shop_glass");for(let v=1;v<a;v++)for(let S=0;S<g;S++)en(u,m+S*x,m+(S+1)*x,d[v],d[v+1],0,ks("win3",t(),o),l);Yo(u,s,r,d,l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],Sn(l,.8)),Zo(c,s,r,p,t,!0),t()<.6&&up(i,(t()<.5?1:-1)*(s/2-.3),h+.4,Math.min(p-.3,h+4.5),t),t()<.3&&hp(i,s,p,r,t)}function v_(i,e,t,n){let{w:s,d:r}=n,a=i.atlas,l=i.color,o=4.4,u=-s/2,c=Math.max(3,Math.round(s/3)),h=s/c;for(let f=0;f<c;f++)en(a,u+f*h,u+(f+1)*h,0,3.4,0,"shop_konbini");l.box(u,3.4,-.35,-u,o,0,ue.white),en(a,u,-u,3.4,o,-.355,"konbini_band"),Yo(a,s,r,[0,o],oe("#f2f2ee"),t,0),Zo(l,s,r,o,t)}function __(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=2.9,f=a*h,p=-s/2,g=t()<.5,x=Math.max(2,Math.round(s/3)),m=s/x,d=[];for(let E=0;E<=a;E++)d.push(E*h);let v=g?on:l;for(let E=0;E<a;E++)for(let C=0;C<x;C++){let P=g?"win4":"win0";E===0&&C===0?P="shop_house":P=ks(P,t(),o),en(u,p+C*m,p+(C+1)*m,d[E],d[E+1],0,P,P==="shop_house"?on:v)}Yo(u,s,r,d,g?oe("#9a7a62"):l,t,o),c.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],Sn(l,.75));let S=!!n.snow,_=S?.75:.6,y=S?Math.min(3.4,r*.46):Math.min(2.4,r*.32),b=Ei(S?"white":"kawara"),A=S?oe("#f3f5fa"):oe("#c8ccd8");u.quad([s/2+_,f-.25,-_],[-s/2-_,f-.25,-_],[-s/2-_,f+y,r/2],[s/2+_,f+y,r/2],A,b),u.quad([-s/2-_,f-.25,r+_],[s/2+_,f-.25,r+_],[s/2+_,f+y,r/2],[-s/2-_,f+y,r/2],A,b);let M=g?oe("#7a5a42"):l;if(Nr(c,[-s/2,f,0],[-s/2,f,r],[-s/2,f+y-.1,r/2],M),Nr(c,[s/2,f,r],[s/2,f,0],[s/2,f+y-.1,r/2],M),c.box(-s/2-_,f+y-.05,r/2-.15,s/2+_,f+y+.18,r/2+.15,S?oe("#f6f7fb"):oe("#3d4456")),S){c.box(-s/2-_-.05,f-.42,-_-.1,s/2+_+.05,f-.12,-_+.3,oe("#eef1f7")),c.box(-s/2-_-.05,f-.42,r+_-.3,s/2+_+.05,f-.12,r+_+.1,oe("#eef1f7"));for(let E=-s/2;E<s/2;E+=.45+t()*.5)c.cyl(E,f-.42-.35,-_+.02,0,.04,.35,4,oe("#dfe8f3"),!1)}if(a>1){let E=h+.05;u.quad([s/2+.1,E-.3,-.75],[-s/2-.1,E-.3,-.75],[-s/2-.1,E+.05,0],[s/2+.1,E+.05,0],A,b)}if(n.fence){let E=-n.fence,C=1.2;for(let[P,I]of[[-s/2,-1],[.4,s/2]])c.box(P,0,E-.08,I,C,E+.08,ue.concrete),en(u,P,I,0,C,E-.085,"block")}}function y_(i,e,t,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,u=i.atlas,c=i.color,h=3.4,f=a*h,p=Math.max(2,Math.round(s/6)),g=s/p,x=-s/2,m=t()<.5?"win3":"win2",d=[];for(let _=0;_<=a;_++)d.push(_*h);for(let _=0;_<a;_++)for(let y=0;y<p;y++)en(u,x+y*g,x+(y+1)*g,d[_],d[_+1],0,ks(m,t(),o),l);let v=Math.max(1,Math.round(r/6)),S=r/v;for(let _ of[-1,1])for(let y=0;y<a;y++)for(let b=0;b<v;b++)(_>0?Vi:Gi)(u,_*s/2,b*S,(b+1)*S,d[y],d[y+1],ks(m,t(),o),l);Zo(c,s,r,f,t,!0)}function fp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([oe("#f2f2ee"),oe("#c9cdd2"),oe("#2b2f38"),oe("#b33a32"),oe("#9fc6c0"),oe("#e7d9b4"),oe("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,Sn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,oe("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,ue.black)}function gh(i,e,t,n){let s=i.color,r=oe("#8d9096"),a=oe("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,o=-n+.62;s.box(-.14,5.08,l,.14,5.56,o,a);let u=t*.141;i.atlas.setM(e),(t>0?Vi:Gi)(i.atlas,u,l,o,5.08,5.56,"signal");let c=t>0?o:l,h=t>0?-1:1;for(let p=0;p<3;p++){let g=c+h*(.2+p*.4);s.box(t>0?.14:-.36,5.47,g-.15,t>0?.36:-.14,5.5,g+.15,a)}let f=c+h*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,f-.11,t>0?.16:-.145,5.43,f+.11,on)}function dp(i,e,t,n){let s=i.color,r=oe("#3d6ea8"),a=oe("#e8eef2"),l=oe("#c7c5bf"),o=5.35;s.setM(e),s.box(-1.1,o-.65,-t,1.1,o,t,r);for(let u of[-1.1,1])s.box(u,o,-t,u+.1,o+1.1,t,a),s.box(u-.02,o+1.1,-t,u+.12,o+1.18,t,r);i.atlas.setM(e),Gi(i.atlas,-1.105,-2.2,2.2,o-.62,o-.06,n),Vi(i.atlas,1.105,-2.2,2.2,o-.62,o-.06,n),s.setM(e);for(let u of[-1,1]){let c=u*(t-1.65),h=u*(t-.15),f=Math.min(c,h),p=Math.max(c,h);s.box(-.45,.15,f+.3,.45,o-.65,p-.3,r);let g=20,x=(o-.15)/g;for(let m=0;m<g;m++)s.box(1.1+m*.3,.15,f,1.1+(m+1)*.3,o-(m+1)*x+.04,p,l);s.box(1.1,o-.1,f-.05,1.1+g*.3,o-.02,f+.05,r)}}function pp(i,e,t,n,s,r,a){let l=i.color,o=1.22,u=3.55,c=6.7,h=oe("#c8c5bd"),f=oe("#ebe8de"),p=oe("#7a5a42"),g=oe("#5e4433"),x=oe("#4d5468");l.setM(e),l.box(t,-1.4,u,n,o,c,h,null,{noBottom:!0}),l.box(t,o,u,n,o+.025,u+.32,f),l.box(t,o,u+.6,n,o+.04,u+.9,ue.yellow);let m=Math.sign(s-(t+n)/2),d=m>0?n:t,v=d+m*6.2,S=u+.9,_=c-.2,y=(O,k,H)=>[O,k,H];m>0?l.quad(y(v,.1,_),y(v,.1,S),y(d,o,S),y(d,o,_),h):l.quad(y(v,.1,S),y(v,.1,_),y(d,o,_),y(d,o,S),h);for(let O of[S,_]){let k=oe("#9aa0a6");l.rod([v,.1+.9,O],[d,o+.9,O],.03,.03,5,k);for(let H=0;H<=3;H++){let ee=v+(d-v)*H/3,de=.1+(o-.1)*H/3;l.box(ee-.03,de,O-.03,ee+.03,de+.9,O+.03,k)}}i.atlas.setM(e);for(let O=t;O<n-.01;O+=3){let k=Math.min(n,O+3);i.atlas.quad([O,-.6,c+.004],[k,-.6,c+.004],[k,o,c+.004],[O,o,c+.004],oe("#d8d4ca"),Ei("concrete"))}l.setM(e);for(let O=t+.4;O<n;O+=2)l.box(O-.05,o,c-.12,O+.05,o+1,c-.02,oe("#8f949a"));for(let O of[.45,.95])l.box(t,o+O,c-.1,n,o+O+.06,c-.04,oe("#8f949a"));let b=n-t,A=O=>m>0?n-b*O:t+b*O,M=A(.47),E=M-2.3,C=M+2.3,P=u+1.35,I=c-.25;l.box(E,o,I-.12,C,o+2.45,I,p);for(let O of[E,C-.12])l.box(O,o,P+.6,O+.12,o+2.45,I,g);for(let O of[E,C-.12])l.box(O,o,P,O+.12,o+2.45,P+.12,g);l.quad([C+.4,o+2.5,P-.45],[E-.4,o+2.5,P-.45],[E-.4,o+2.85,I+.35],[C+.4,o+2.85,I+.35],x),l.quad([E-.4,o+2.42,P-.45],[C+.4,o+2.42,P-.45],[C+.4,o+2.77,I+.35],[E-.4,o+2.77,I+.35],oe("#3a3f50")),l.box(E+.3,o+.42,I-.55,C-.3,o+.48,I-.15,oe("#8a6a4a"));for(let O of[E+.4,C-.5])l.box(O,o,I-.5,O+.08,o+.42,I-.2,ue.metal);i.atlas.setM(e),i.atlas.quad([M-1.1,o+1.55,I+.005],[M+1.1,o+1.55,I+.005],[M+1.1,o+2.03,I+.005],[M-1.1,o+2.03,I+.005],on,Ei("ekiplate"+r));let D=A(.2),w=u+1.6,L=1.25,U=o+1.25,F=U+.95;l.setM(e);for(let O of[D-L+.12,D+L-.12])l.cyl(O,o,w,.05,.05,F-o+.05,8,oe("#6b7078"));l.box(D-L,U-.03,w-.03,D+L,F+.03,w+.03,oe("#3a3d42")),i.atlas.setM(e),i.atlas.quad([D-L,U,w+.035],[D+L,U,w+.035],[D+L,F,w+.035],[D-L,F,w+.035],on,Ei("ekimei"+r)),i.atlas.quad([D+L,U,w-.035],[D-L,U,w-.035],[D-L,F,w-.035],[D+L,F,w-.035],on,Ei("ekimei"+r)),l.setM(e);let z=M-m*4.2;l.box(z-.9,o+.42,c-1.25,z+.9,o+.47,c-.85,oe("#3b6ea8")),l.box(z-.9,o+.47,c-.88,z+.9,o+.9,c-.83,oe("#3b6ea8"));for(let O of[z-.75,z+.7])l.box(O,o,c-1.2,O+.06,o+.42,c-.9,ue.metal);for(let O=t+3;O<n-1;O+=9)qo(i,yc(e,O,o,c-.45))}var M_=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(oe),b_=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(oe);function mp(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,ue.metal);let a=e+.12+r()*.2;for(;a<t-.35;){let l=.28+r()*.34,o=.36+r()*.42,u=r.pick(M_),c=s+(r()-.5)*.06;i.quad([a+l,n-o,c],[a,n-o,c],[a,n-.02,c],[a+l,n-.02,c],u),i.quad([a,n-o,c+.01],[a+l,n-o,c+.01],[a+l,n-.02,c+.01],[a,n-.02,c+.01],Sn(u,.85)),r()<.4&&i.box(a+l*.45,n-.02,c-.02,a+l*.55,n+.06,c+.02,oe("#d8d8d0")),a+=l+.06+r()*.22}}function S_(i,e,t,n,s,r){let a=r.pick(b_),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,a),i.box(e,n-.72,s-l,t,n+.09,s-.005,a),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,Sn(a,.86))}function gp(i,e){let t=i.color,n=oe("#a19f97"),s=oe("#6b4a35"),r=oe("#4f4a44"),a=oe("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,oe("#8d8b84"));for(let l of[-.52,.48])for(let o of[-.36,.32])t.box(l,.32,o,l+.05,1.5,o+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,Sn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,a,!1),t.cyl(0,.93,0,.115,.03,.1,8,a);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,oe("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,oe("#5b8d3d"))}function xp(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?ue.black:ue.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,ue.black),t.box(-.5,2.55,-.06,.5,2.95,.02,ue.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,ue.black);t.box(-.78,-.9,-.34,.3,0,.34,ue.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,oe("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,ue.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new $e().multiplyMatrices(e,new $e().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?ue.black:ue.yellow)}t.setM(e),i.atlas.setM(e),en(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function vp(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,ue.stone),t.cyl(0,.25,0,.14,.12,.95,8,ue.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,ue.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,Sn(ue.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,Sn(ue.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,on),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,on)}function xh(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,ue.vermilion),s.cyl(0,0,r,.38,.38,.5,12,ue.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,ue.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,ue.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,ue.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,ue.vermilion)}function _p(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,oe("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,oe("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,oe("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,oe("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,ue.metal),n.box(1.1,0,.3,1.2,.42,.55,ue.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,ue.metal),i.atlas.setM(e),Gi(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Vi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function yp(i,e,t,n=1){let s=i.color;s.setM(e);let r=Sn(ue.concrete,.85+t()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],l=.55*n;for(let o of a)s.rod([0,l,0],[o[0]*.95*n,l+o[1]*.95*n,o[2]*.95*n],.42*n,.26*n,7,r)}function Mp(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,oe("#8f8a80"),oe("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,ue.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,ue.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,ue.black),t.cyl(0,18.6,0,1,.25,1.2,12,ue.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,on)}function bp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([oe("#f4f4f0"),oe("#3b6ea5"),oe("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Nr(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Nr(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,ue.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,ue.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,oe("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,ue.metal)}function Sp(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,ue.stone),n.box(-.55,.5,.9,.55,1.5,1.8,oe("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],oe("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],oe("#4d5468")),xh(i,yc(e,0,0,-.3,Math.PI/2),.75,2.2)}var Wt=60,Tp=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],Ep=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],vh=32,Jo=[.025,.026,.032],wp=[.05,.05,.065],Xi=(i,e)=>(i%e+e)%e,ms=(i,e)=>{let t=Cr(i);return!!t&&Math.abs(i-t.s)<e},_h=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,di=(i,e)=>{let t=fi(i);return!!t&&Math.abs(i-t.s)<e},Wn=(i,e)=>{let t=Fi(i);return!!t&&Math.abs(i-t.s)<e},yh=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let a=0;a<t;a++){let l=n(r,a);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let a=0;a<t-1;a++){let l=s+r*t+a,o=l+1,u=l+t,c=u+1;this.I.push(l,o,u,o,c,u)}}gridN(e,t,n,s=0,r=0){let a=t+s+r,l=new Array(e*a);for(let u=0;u<e;u++)for(let c=0;c<a;c++)l[u*a+c]=n(u,c-s);let o=(u,c)=>l[Math.min(e-1,Math.max(0,u))*a+Math.min(a-1,Math.max(0,c))];for(let u=0;u<e;u++)for(let c=s;c<s+t;c++){let h=o(u,c-1),f=o(u,c+1),p=o(u-1,c),g=o(u+1,c),x=l[u*a+c],m=f[0]-h[0],d=f[1]-h[1],v=f[2]-h[2],S=g[0]-p[0],_=g[1]-p[1],y=g[2]-p[2],b=d*y-v*_,A=v*S-m*y,M=m*_-d*S;A<0&&(b=-b,A=-A,M=-M);let E=Math.hypot(b,A,M)||1;x[3]=b/E,x[4]=A/E,x[5]=M/E}this.grid(e,t,(u,c)=>l[u*a+c+s])}build(){let e=new gt;return e.setAttribute("position",new Ke(this.P,3)),e.setAttribute("normal",new Ke(this.N,3)),e.setAttribute("su",new Ke(this.SU,2)),e.setAttribute("zw",new Ke(this.ZW,4)),e.setAttribute("rk",new Ke(this.RK,2)),e.setAttribute("rv",new Ke(this.RV,1)),e.setAttribute("zs",new Ke(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},Mc=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Bt,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Wt),s=Math.floor((e+this.ahead)/Wt);for(let[a,l]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(l),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let a=this.reveal[0];if(a){let l=a.pending.shift();l&&a.group.add(l),a.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let o=Math.max(0,n);o<=s;o++)if(!this.chunks.has(o)){l=o;break}if(l<0)return 0;l*Wt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let a=this.job.it.next();if(a.done){let l=a.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,a)=>{let l=a*Wt-e,o=r.group.children;for(let u=0;u<o.length;u++){let c=o[u],h=c.userData.detail;h&&(c.visible=h==="leaf"?l<s:l<t||n&&h==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Wt,s=n+Wt,r=t.at(n),a=r.x,l=r.z,o=bn(Math.floor(Gn(e,777)*4294967295)),u={atlas:new rn({uv:!0,ao:!0}),color:new rn({ao:!0}),foliage:new rn,leaf:new rn({uv:!0}),lamp:new rn({color:!1}),sig:new rn({color:!1}),sodium:new rn({color:!1}),decal:new rn({uv:!0}),pool:new rn({uv:!0,color:!1})},c=new yh,h=[],f=[],p={},g={},x=(C,P)=>{t.at(C,g);let I=Tn(C,"rw");return g.y+Pr(C,P,g.y,I)},m=C=>{let P=Rt(C);return[P.city,P.sakura,P.coast,P.country,P.snow]},d=(C,P,I)=>(t.at(C,p),[p.x+p.rx*P-a,I,p.z+p.rz*P-l]),v=(C,P,I,D=0,w=!0)=>{t.at(C,p);let L=p.h-Math.PI/2+(w&&P<0?Math.PI:0)+D,U=new $e().makeRotationY(L);return U.setPosition(p.x+p.rx*P-a,I,p.z+p.rz*P-l),U.groundY=I,U},S=(C,P,I=0,D=0,w=!0)=>{let L=x(C,P),U=v(C,P,L+I,D,w);return U.groundY=L,U},_=C=>t.at(C,g).y,y=C=>Tn(C,"rw"),b=C=>{let P=Rt(C);return P.city+P.sakura>.5?P.city>=P.sakura?3:2.6:0};{let C=Fi(n+Wt/2),P=!!C&&C.s>n-40&&C.s<s+40,I=P?61:21,D=y(n+Wt/2),w=(()=>{let ee=[0,...Tp].map(de=>de);return Ep.forEach(de=>ee.push(de-D)),ee})(),L=[...w.slice().reverse().map(H=>-H),...w],U=L.length,F=Array.from({length:I},(H,ee)=>n+ee/(I-1)*Wt);{let H=fi(n+Wt/2);if(H)for(let ee of[H.s-qt,H.s+qt])ee>n+.1&&ee<s-.1&&F.push(ee-.03,ee+.03)}F.sort((H,ee)=>H-ee);let z=U/2,O=F.map(H=>(t.at(H,p),{s:H,f:{...p},rw:y(H),w:m(H),rb:P?Rd(H):0})),k=Math.round(z/2);for(let[H,ee,de,Ze]of[[0,k,0,1],[k-1,z,1,0],[z,z+k+1,0,1],[z+k,U,1,0]])c.gridN(O.length,ee-H,(Ie,ze)=>{let $=O[Ie],Q=$.f,Le=H+ze,He=L[Le],Ee=He<0||He===0&&Le<z?He-$.rw:He+$.rw,et=Q.y+Pr($.s,Ee,Q.y,$.rw),se=Math.min(1,lc/1.5);return[Q.x+Q.rx*Ee-a,et,Q.z+Q.rz*Ee-l,0,1,0,Xi($.s,ds),Ee,$.w[0],$.w[1],$.w[2],$.w[3],$.rw,0,$.rb>0?$.rb:-se,$.w[4]]},de,Ze),yield}yield,c.grid(31,2,(P,I)=>{let D=n+P/30*Wt,w=y(D),L=I?w:-w;t.at(D,p);let U=p.y,F=(_(D+1)-_(D-1))/2,z=-F*p.fx,O=1,k=-F*p.fz,H=Math.hypot(z,O,k),ee=m(D);return[p.x+p.rx*L-a,U,p.z+p.rz*L-l,z/H,O/H,k/H,Xi(D,ds),L,ee[0],ee[1],ee[2],ee[3],w,1,0,ee[4]]});{let C=[];for(let D=0;D<=30;D++){let w=n+D/30*Wt;C.push({s:w,sw:b(w)})}let P=[],I=null;for(let D of C)D.sw>0?(I||(I=[],P.push(I)),I.push(D)):I=null;for(let D of P)if(!(D.length<2))for(let w of[-1,1])c.grid(D.length,2,(L,U)=>{let{s:F,sw:z}=D[L],O=y(F),k=w*(U===(w>0?0:1)?O:O+z);t.at(F,p);let H=m(F);return[p.x+p.rx*k-a,p.y+.15,p.z+p.rz*k-l,0,1,0,Xi(F,ds),k,H[0],H[1],H[2],H[3],O,2,0,H[4]]}),c.grid(D.length,2,(L,U)=>{let{s:F}=D[L],z=y(F),O=w*z,k=w>0?U:1-U;t.at(F,p);let H=m(F);return[p.x+p.rx*O-a,p.y+(k?.15:0),p.z+p.rz*O-l,-w*p.rx,0,-w*p.rz,Xi(F,ds),O,H[0],H[1],H[2],H[3],z,3,0,H[4]]})}yield,yield*this.placePoles(e,n,s,o,u,v,x,d,_,y);{let C=Math.ceil((n-Us)/Ns),P=Rr(C);P<s&&ko(P)&&(yield*this.placeCrossing(u,c,P,v,_,y,x,b,a,l));let I=Math.ceil((n-uc)/Ho),D=eh(I);D<s&&th(D)&&(yield*this.placeRiver(u,c,D,v,_,y,x,b,a,l,o,f));let w=fi(n+Wt/2);w&&w.s+Gt>n&&w.s-Gt<s&&(yield*this.placeTunnel(u,c,w,n,s,v,S,x,y,a,l,o))}yield;for(let C=n;C<s;C+=4){let P=Vt(C);(P==="coast"&&Rt(C).coast>.45||P==="mountain"&&Rt(C).mountain>.45)&&!di(C+2,Gt+4)&&this.guardrail(u,C,Math.min(C+4,s),d,_,y)}yield*this.placeCity(u,o,n,s,v,S,_,y,b,x,c,a,l),yield*this.placeSakura(u,o,n,s,v,S,_,y,x),this.placeCoast(u,o,n,s,v,S,_,y,x,h,d),yield,yield*this.placeCountry(u,o,n,s,v,S,_,y,x),yield*this.placeMountain(u,o,n,s,v,S,_,y,x),yield*this.placeSnow(u,o,n,s,v,S,_,y,x),yield*this.placeVerge(u,o,n,s,v,x,y),yield;let A=new Bt,M=(C,P,I,D,w=0,L)=>{if(!C)return null;let U=new ct(C,P);return U.castShadow=I,U.receiveShadow=D,U.renderOrder=w,L&&(U.userData.detail=L),A.add(U),U},E=new Set;for(let C of[n,n+20,n+40,s]){let P=Ar(C);E.add(P.a),P.t>0&&E.add(P.b)}M(c.build(),Wo([...E]),!1,!0),yield,M(u.atlas.build(),this.M.atlas,!0,!0),yield;{let C=M(u.color.build(),this.M.color,!0,!0);C&&(C.customDepthMaterial=pc)}if(yield,M(u.foliage.build(),this.M.foliage,!0,!0),M(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,M(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),M(u.sig.build(),this.M.sig,!1,!1,0,"small"),M(u.sodium.build(),this.M.sodium,!1,!1),M(u.decal.build(),this.M.decal,!1,!0,1,"small"),M(u.pool.build(),this.M.pool,!1,!1,2,"light"),h.length){let C=new gt,P=[],I=[],D=[];h.forEach((w,L)=>{for(let U of w)P.push(U[0],U[1],U[2]),I.push(U[3],U[4]);if(L>0){let U=(L-1)*2;D.push(U,U+2,U+1,U+1,U+2,U+3)}}),C.setAttribute("position",new Ke(P,3)),C.setAttribute("su",new Ke(I,2)),C.setIndex(D),C.computeBoundingSphere(),M(C,this.foamMat,!1,!1,1)}for(let C of f)M(C,this.riverMat,!1,!0);return A.position.set(a-this.origin.x,0,l-this.origin.z),{group:A,ox:a,oz:l,s0:n}}poleSpec(e){let t=e*vh+6,n=Vt(t);if(n==="sakura"||ms(t,6)||Wn(t,34)||di(t,Gt+12))return null;let s=Tn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,a,l,o,u,c){let h=Math.ceil((t-6)/vh),f=Math.floor((n-6-.001)/vh);for(let p=h;p<=f;p++){let g=this.poleSpec(p);if(!g)continue;let x=g.z==="city"?u(g.s)+.15:l(g.s,g.u),m=a(g.s,g.u,x),d=bn(Math.floor(Gn(p,31)*4294967295)),v=uh(r,m,d,{trans:d()<.45});g.z==="city"&&p%2===0&&Qd(r,m,-.11),p%2&&(yield);let S=this.poleSpec(p+1);if(S){let _=S.z==="city"?u(S.s)+.15:l(S.s,S.u),y=jd(a(S.s,S.u,_));r.color.setM(new $e);let b=[];for(let A=0;A<v.length;A++){let M=v[A],E=y[A],C=.35+d()*.4+(A>=7?.3:0);b.push(C),r.color.wire([M.x,M.y,M.z],[E.x,E.y,E.z],C,A>=7?.022:.015,Jo,10)}if(g.z!=="coast"&&d()<.38){let A=Math.floor(d()*4),M=v[A],E=y[A],C=1+Math.floor(d()*4),P=.18+d()*.5;for(let I=0;I<C;I++){let D=Math.min(.92,P+I*(.018+d()*.025)),w=M.x+(E.x-M.x)*D,L=M.z+(E.z-M.z)*D,U=M.y+(E.y-M.y)*D-b[A]*4*D*(1-D);r.color.box(w-.07,U+.015,L-.07,w+.07,U+.19,L+.07,wp),r.color.box(w-.045,U+.19,L-.045,w+.045,U+.27,L+.045,wp)}}}if(g.z==="city"){r.color.setM(new $e);let _=1+Math.floor(d()*3);for(let y=0;y<_;y++){let b=v[7+y%2],A=(d()-.5)*14,M=c(g.s+A),E=d()<.55,C=E?-(M+3.15):M+3.15,P=o(g.s+A,C,u(g.s+A)+5.2+d()*2.5);r.color.wire([b.x,b.y,b.z],P,.25+d()*.4,.012,Jo,8)}}}}*intersection(e,t,n,s,r,a,l,o,u,c,h){let f=this.path.at(n,{}),p=a(n),g=l(n),x=o(n)||3,m=n-.5,d=Rt(n),v=[d.city,d.sakura,d.coast,d.country],S=(y,b,A)=>[f.x+f.fx*(y-.5)+f.rx*b-c,A,f.z+f.fz*(y-.5)+f.rz*b-h],_=g+x+.15;for(let y of[-1,1]){let b=y*(g+x),A=y*80;u.grid(21,2,(P,I)=>{let D=b+(A-b)*P/20,w=(I?-3:3)*y,L=S(w,D,p+.165);return[L[0],L[1],L[2],0,1,0,w*y,D,v[0],v[1],v[2],v[3],g,10]});{let P=y*(g+x+3.2),I=-y*1.35,D=1.15,w=.42,L=(U,F)=>S(I+y*U,P-y*F,p+.18);e.decal.setM(new $e),e.decal.quad(L(-D,-w),L(D,-w),L(D,w),L(-D,w),[1,1,1],Xo("tomare"))}for(let P of[-1,1]){let I=_+15+t()*3;for(;I<52;){let D=t.range(5.5,8.5),w=y*(I+D/2),L=t(),U=r(m+P*3.3,w,p+.14,P>0?Math.PI/2:-Math.PI/2,!1);Wi(e,U,t,{type:L<.5?"house":"shop",w:D,d:t.range(7,10),floors:L<.5?2:t.int(2,3),tint:t.pick(Hi),litP:.45,fence:0}),I+=D+t.range(.2,1.2),yield}yield}let M=[30,54].map(P=>r(m+2.8,y*P,p+.15,-Math.PI/2,!1)),E=bn(Math.floor(Gn(s,y>0?71:73)*4294967295)),C=M.map(P=>uh(e,P,E,{trans:E()<.4}));e.color.setM(new $e);for(let P=0;P<7;P++){let I=C[0][P],D=C[1][P];e.color.wire([I.x,I.y,I.z],[D.x,D.y,D.z],.3+E()*.4,.014,Jo,10)}}gh(e,r(n-9,-(g+.55),p+.15,0,!0),1,g+.55-1.6),gh(e,r(n+8,g+.55,p+.15,0,!0),1,g+.55-1.6),s%3===1&&dp(e,r(n+15,0,p,0,!1),g+x+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,a,l,o,u,c){let h=this.path.at(n,{}),f=h.y,p=a(n),g=o(n),x=p+g+.2,m=150,d=f+.18,v=Rt(n),S=[v.city,v.sakura,v.coast,v.country],_=(L,U,F)=>[h.x+h.fx*L+h.rx*U-u,F,h.z+h.fz*L+h.rz*U-c],y=[7.6,4.7,-4.7,-7.6];for(let[L,U]of[[-m,-x],[x,m]])t.grid(25,y.length,(z,O)=>{let k=L+(U-L)*z/24,H=y[O],de=Math.abs(H)<5?d:Math.min(d-.05,l(n+H,k)-.03),Ze=_(H,k,de);return[Ze[0],Ze[1],Ze[2],0,1,0,H,k,S[0],S[1],S[2],S[3],p,5]});let b=(L,U,F)=>t.grid(2,2,(z,O)=>{let k=z?U:L,H=O?-3.3:3.3,ee=_(H,k,F);return[ee[0],ee[1],ee[2],0,1,0,H,k,S[0],S[1],S[2],S[3],p,6]});b(-p,p,f+.03),g>0&&(b(-x,-p,f+.165),b(p,x,f+.165));let A=(L,U,F,z)=>t.grid(2,2,(O,k)=>{let H=O?z:F,ee=k?U:L,de=_(ee,H,f+.025);return[de[0],de[1],de[2],0,1,0,ee,H,S[0],S[1],S[2],S[3],p,7]});A(-7.15,-7.6,-p+.3,-.12),A(7.6,7.15,.12,p-.3),yield;let M=s(n,0,f,-Math.PI/2,!1),E=e.color;E.setM(M);let C=[.42,.4,.38],P=[.3,.29,.28],I=[.55,.57,.6];for(let L of[-2,2])for(let U of[-.5335,.5335]){let F=-(L+U);for(let[z,O]of[[-m,-x],[x,m]])E.box(z,.26,F-.035,O,.34,F+.035,C);E.box(-x,0,F-.035,x,.04,F+.035,P)}let D=[-146,-104,-64,-26,26,64,104,146];for(let L of D){for(let U of[-4.95,4.95])E.box(L-.12,.18,U-.12,L+.12,7.4,U+.12,I);E.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,I);for(let U of[-2,2])E.box(L-.04,6.3,-U-.04,L+.04,6.95,-U+.04,I)}for(let L of[-2,2])for(let U=0;U<D.length-1;U++)E.wire([D[U],5.35,-L],[D[U+1],5.35,-L],.05,.011,Jo,6),E.wire([D[U],6.4,-L],[D[U+1],6.4,-L],.45,.011,Jo,8);yield;let w=Math.round((n-Us)/Ns);if(v.country>.9&&Gn(w,17)<.7){let L=Gn(w,19)<.5?-1:1,U=L>0?p+9:-(p+9+46),F=L>0?p+9+46:-(p+9);pp(e,M,U,F,L*(p+9),Math.abs(w)%4,bn(Math.floor(Gn(w,23)*4294967295))),E.setM(M)}yield;for(let L of mc(this.path,n)){let U=new $e().makeRotationY(L.yaw);U.setPosition(L.x-u,L.y,L.z-c),xp(e,U)}ps(e,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85),ps(e,s(n+70,a(n+70)+.6,r(n+70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n,{}),g=p.y,x=a(n),m=o(n),d=Rt(n),v=[d.city,d.sakura,d.coast,d.country],S=d.sakura>.5,_=222,y=x+m+.5,b=g-Vo,A=(w,L,U)=>[p.x+p.fx*w+p.rx*L-u,U,p.z+p.fz*w+p.rz*L-c];{let w=[],L=[],U=[];for(let O=0;O<=74;O++){let k=-_+2*_*O/74;for(let H of[12.5,-12.5]){let ee=A(H,k,b);w.push(ee[0],ee[1],ee[2]),L.push(H,k)}if(O>0){let H=(O-1)*2;U.push(H,H+1,H+2,H+1,H+3,H+2)}}let z=new gt;z.setAttribute("position",new Ke(w,3)),z.setAttribute("su",new Ke(L,2)),z.setIndex(U),z.computeBoundingSphere(),f.push(z)}for(let[w,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[U,F]of[[-_,-(x+3.4)],[x+3.4,_]])t.grid(41,2,(z,O)=>{let k=U+(F-U)*z/40,H=O?L:w,ee=A(H,k,g+.38);return[ee[0],ee[1],ee[2],0,1,0,H,k,v[0],v[1],v[2],v[3],x,9,1]});yield;let M=s(n,0,g,0,!1),E=e.color,C=[.74,.73,.7],P=S?[.78,.2,.15]:[.55,.72,.64];E.setM(M),E.box(-24.5,-1,-y,24.5,-.03,y,C,null,{noBottom:!1});for(let w of[-1,1])E.box(-24.5,-1.3,w>0?y-.35:-y,24.5,-.95,w>0?y:-y+.35,[.62,.61,.58]);for(let w of[-8,8])E.box(w-.7,-Vo-1.4,-y+.6,w+.7,-1,y-.6,C);for(let w of[-25.7,25.7])E.box(w-1.2,-Vo+.4,-y-.4,w+1.2,-.05,y+.4,C);let I=m>0?.15:0;for(let w of[-1,1]){let L=w*(y-.14);for(let U=-24;U<=24.01;U+=2)E.box(U-.06,I,L-.06,U+.06,I+1,L+.06,P);E.box(-24,I+.95,L-.08,24,I+1.08,L+.08,P),E.box(-24,I+.48,L-.03,24,I+.54,L+.03,P),E.box(-24,I+.06,L-.03,24,I+.12,L+.03,P)}let D="bridge"+Math.abs(Math.round(n/Ho))%4;for(let w of[-25,25])for(let L of[-1,1]){let U=L*(y-.1),F=[.7,.69,.65];E.box(w-.32,I,U-.32,w+.32,I+1.45,U+.32,F),E.box(w-.38,I+1.45,U-.38,w+.38,I+1.58,U+.38,[.62,.61,.57]),e.atlas.setM(M);let z=(w<0?-1:1)*.325,O=D;w<0?e.atlas.quad([w-.325,I+.3,U-.22],[w-.325,I+.3,U+.22],[w-.325,I+1.3,U+.22],[w-.325,I+1.3,U-.22],[1,1,1],Xo(O)):e.atlas.quad([w+.325,I+.3,U+.22],[w+.325,I+.3,U-.22],[w+.325,I+1.3,U-.22],[w+.325,I+1.3,U+.22],[1,1,1],Xo(O)),E.setM(M)}qo(e,s(n-14,-(y-.45),g+I,0,!0)),qo(e,s(n+14,y-.45,g+I,0,!0)),yield;for(let w of[-18,18])for(let L of[-1,1]){yield;for(let U=11+h()*4;U<(S?125:170);U+=S?h.range(8.5,11):h.range(18,34)){let F=n+w+(h()-.5)*1.5,z=L*U;En(e,s(F,z,l(F,z),h()*6,!1),S?"sakura":"broad",h,S?h.range(1,1.25):h.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,a,l,o,u,c,h,f){let p=this.path.at(n.s,{}),g=p.y,x=u(n.s),m=x+1.4,d=Rt(n.s),v=[d.city,d.sakura,d.coast,d.country],S=a(n.s,0,g,0,!1),_=e.color,y=Math.max(s,n.s-qt)-n.s,b=Math.min(r,n.s+qt)-n.s;if(b>y+.01){let M=Math.max(2,Math.ceil((b-y)/3)+1),E=[-(x+1.5),-x,-x*.5,0,x*.5,x,x+1.5];t.gridN(M,E.length,(F,z)=>{let O=y+(b-y)*F/(M-1),k=n.s+O,H=E[z],ee=g+hc(O,H);return[p.x+p.fx*O+p.rx*H-c,ee,p.z+p.fz*O+p.rz*H-h,0,1,0,Xi(k,ds),H,v[0],v[1],v[2],v[3],x,0,-1]});let C=[[-x,0],[-x,.2],[-m,.2],[-m,3.2]];for(let F=1;F<12;F++){let z=Math.PI*(1-F/12);C.push([m*Math.cos(z),3.2+3*Math.sin(z)])}C.push([m,3.2],[m,.2],[x,.2],[x,0]);let P=[.86,.82,.72],I=[.44,.45,.47],D=[.62,.61,.58],w=[];for(let F=y;F<b-.01;F+=6)w.push(F);w.push(b),_.setM(S);for(let F=0;F<w.length-1;F++)for(let z=0;z<C.length-1;z++){let[O,k]=C[z],[H,ee]=C[z+1],de=Math.max(k,ee)<=.21?D:Math.abs(O)>m-.01&&Math.abs(H)>m-.01?P:I;_.quad([w[F],k,O],[w[F+1],k,O],[w[F+1],ee,H],[w[F],ee,H],de)}e.sodium.setM(S),e.sig.setM(S);let L=m*Math.cos(Math.PI/6)-.12,U=3.2+3*Math.sin(Math.PI/6)-.08;for(let F=Math.ceil((y+qt-3)/6)*6+3-qt;F<b;F+=6)for(let z of[-1,1])e.sodium.box(F-.45,U-.07,z*L-.13,F+.45,U+.07,z*L+.13,null);for(let F=Math.ceil((y+qt)/24)*24-qt;F<b;F+=24)e.sig.box(F-.3,.95,-m+.01,F+.3,1.2,-m+.06,null);for(let F=Math.ceil((y+qt-30)/60)*60+30-qt;F<b;F+=60)for(let z of[-1.15,1.15])_.box(F-1.1,5.2,z-.36,F+1.1,5.78,z+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),_.box(F-.08,5.78,z-.05,F+.08,6.15,z+.05,[.4,.4,.42]);yield}for(let M of[-1,1]){let E=n.s+M*qt,C=M*(qt+.08);if(E<s||E>=r)continue;let P=[];for(let ee of Tp)ee>=1.44&&P.push(x+ee,-(x+ee));for(let ee of Ep)ee>x+3.5&&ee<x+21&&P.push(ee,-ee);for(let ee=0;ee<=24;ee++)P.push(-m+2*m*ee/24);P.push(-m-.01,m+.01),P.sort((ee,de)=>ee-de);let I=ee=>3.2+3*Math.sqrt(Math.max(0,1-(ee/m)**2)),D=ee=>Math.max(o(E-M*.03,ee)-g,hc(M*(qt-.03),ee)),w=ee=>Math.abs(ee)<=m+1e-6?I(ee):o(E+M*.03,ee)-g,L=[.78,.77,.73],U=[.66,.65,.62];_.setM(S);for(let ee=0;ee<P.length-1;ee++){let de=P[ee],Ze=P[ee+1];if(Ze-de<1e-4)continue;let Ie=D(de),ze=D(Ze),$=w(de),Q=w(Ze);Ie-$<.01&&ze-Q<.01||(M<0?_.quad([C,$,de],[C,Q,Ze],[C,ze,Ze],[C,Ie,de],L):_.quad([C,Q,Ze],[C,$,de],[C,Ie,de],[C,ze,Ze],L))}for(let ee=0;ee<24;ee++){let de=-m+2*m*ee/24,Ze=-m+2*m*(ee+1)/24,Ie=I(de),ze=I(Ze),$=C+M*.02;M<0?_.quad([$,Ie,de],[$,ze,Ze],[$,ze+.55,Ze*1.08],[$,Ie+.55,de*1.08],U):_.quad([$,ze,Ze],[$,Ie,de],[$,Ie+.55,de*1.08],[$,ze+.55,Ze*1.08],U)}e.atlas.setM(S);let F=1.9,z=7.05,O=7.85,k=C+M*.03,H=Xo("tunnel"+(d.coast>.5?1:Math.abs(n.k)%2?2:0));M<0?e.atlas.quad([k,z,-F],[k,z,F],[k,O,F],[k,O,-F],[1,1,1],H):e.atlas.quad([k,z,F],[k,z,-F],[k,O,-F],[k,O,F],[1,1,1],H)}yield;let A=d.mountain>.5;for(let M=Math.max(s,n.s-Gt*.95)+f()*3;M<Math.min(r,n.s+Gt*.95);M+=f.range(4,8)){let E=Math.abs(M-n.s)>qt-4?17:4;for(let C of[-1,1]){let P=C*(x+f.range(E,50)),I=f();En(e,l(M,P,-.3,f()*6,!1),A?I<.5?"maple":I<.8?"cedar":"ginkgo":I<.65?"pine":"broad",f,f.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,a,l,o,u){let c=h=>Rt(h).snow;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+t()*20;f<s;f+=t.range(22,40)){if(c(f)<.6||t()<.5)continue;let p=h*t.range(18,90);Wi(e,a(f,p,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Hi),litP:.62,fence:0,snow:!0});for(let g=0;g<2+t()*3;g++)En(e,a(f+t.range(-9,9),p+h*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let f=n+t()*5;f<s;f+=t.range(3,7))c(f)<.5||(t()<.32&&En(e,a(f,h*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&En(e,a(f,h*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let h=Math.ceil(n/36)*36;h<s;h+=36){if(c(h)<.55)continue;let f=o(h);{let p=r(h,-(f+.95),l(h)+1.3),g=r(h+18,f+.95,l(h+18)+1.3);p.groundY=l(h),g.groundY=l(h+18),dh(e,p,1),dh(e,g,-1)}}}}*placeMountain(e,t,n,s,r,a,l,o,u){let c=h=>Rt(h).mountain;if(!(c(n)<.3&&c(s)<.3)){for(let h of[-1,1]){for(let f=n+t()*4;f<s;f+=t.range(4.5,8.5)){if(c(f)<.45||di(f,Gt+6))continue;let p=o(f),g=t();if(h>0){let x=g<.5?"maple":g<.72?"ginkgo":"cedar";En(e,a(f,p+t.range(17,70),-.25,t()*6,!1),x,t,t.range(.9,1.3))}else{let x=g<.55?"maple":g<.8?"cedar":"ginkgo";En(e,a(f,-(p+t.range(3.5,34)),-.25,t()*6,!1),x,t,t.range(.95,1.35))}}yield}for(let h=n+t()*4;h<s;h+=t.range(3,6)){if(c(h)<.5)continue;let f=t()<.7,p=-(o(h)+(f?t.range(108,205):t.range(36,100)));En(e,a(h,p,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new $e);for(let h=Math.ceil(n/10)*10;h<s;h+=10){if(c(h)<.5||di(h,Gt+4))continue;let f=o(h),p=r(h,-(f+.95),l(h));ip(e,p)}for(let h=Math.ceil(n/14)*14;h<s;h+=14){if(c(h)<.6)continue;let f=this.path.curv(h);if(Math.abs(f)<1/230)continue;let p=o(h);f>0?ps(e,r(h,p+.42,l(h)),"chev_l",-1,1.25,.58):ps(e,r(h,-(p+1.15),l(h)),"chev_r",1,1.35,.58)}}}*placeVerge(e,t,n,s,r,a,l){for(let o of[-1,1]){for(let u=n+t()*1.2;u<s;u+=t.range(.55,1.5)){if(ms(u,10)||Wn(u,31)||di(u,Gt+4))continue;let c=Vt(u),h=l(u),f,p,g=.22,x=1;if(c==="country")f=h+(t()<.6?t.range(.2,.62):t.range(2.18,2.75)),p=.95;else if(c==="sakura")f=h+2.68+t()*1.3,p=.55,g=.3;else if(c==="coast"){if(o<0)continue;f=h+.95+t()*1.7,p=.75,g=.18}else{if(c==="snow")continue;if(c==="mountain")f=o<0?h+1+t()*.35:h+.25+t()*.2,p=o<0?.55:.18,g=.12,x=.85;else{if(_h(u,5))continue;f=h+3.02+t()*.1,p=.1,g=.08,x=.65}}if(t()>p)continue;let m=o*f;op(e,r(u,m,a(u,m),t()*6.28,!1),t,t()<g?"flowers":"grass",x*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,a){e.color.setM(new $e);let l=Math.max(1,Math.round((n-t)/2));for(let o=0;o<l;o++){let u=t+(n-t)*o/l,c=t+(n-t)*(o+1)/l,h=-(a(u)+.95),f=-(a(c)+.95),p=r(u),g=r(c),x=(y,b,A)=>s(y,b,A),m=x(u,h,p+.52),d=x(c,f,g+.52),v=x(u,h,p+.84),S=x(c,f,g+.84);e.color.quad(m,d,S,v,ue.rail),e.color.quad(d,m,v,S,[.62,.64,.66]);let _=s(u,h-.05,p);e.color.box(_[0]-.05,p,_[2]-.05,_[0]+.05,p+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(e,t,n,s,r,a,l,o,u,c,h,f,p){for(let m of[-1,1]){let d=n+t()*2;for(;d<s-2;){{let D=Rt(d);if(D.city<.62||D.mountain>.1){d+=4;continue}}{let D=Cr(d+6);if(D&&d<D.s+8.5&&d+14>D.s-8.5){d=Math.max(d+1,D.s+8.5);continue}}let v=Xi(d,150);if(v>145.6||v<3.4){d+=1;continue}let S=o(d),_=u(d)||3,y=S+_+.15,b=t(),A=b<.42?"shop":b<.58?"apt":b<.68?"office":b<.82?"house":b<.88?"konbini":b<.94?"parking":"gap",M=A==="shop"?t.range(5,9):A==="apt"?t.range(10,16):A==="office"?t.range(10,14):A==="house"?t.range(7,9.5):A==="konbini"?t.range(12,14):A==="parking"?t.range(7,11):t.range(2,3.5);if(d+M>s){if(s-d<5||A==="konbini")break;M=s-d-.2}{let D=Math.ceil((d+4.4)/150)*150-4.4;if(d+M>D-.1){if(D-.1-d<4){d=D+7.9;continue}M=D-.1-d}}let E=d+M/2,C=l(E),P=t.pick(Hi),I=.42;if(A==="parking"){let D=r(E,m*(y+3),C+.15);t()<.8&&fp(e,yc(D,0,0,.5,(t()-.5)*.1),t),e.color.setM(D),e.color.box(-M/2,0,5.5,M/2,1.6,5.7,ue.concrete)}else if(A!=="gap"){let D=r(E,m*y,C+.15),w={type:A,w:M,d:A==="apt"||A==="office"?t.range(10,14):t.range(8,12),floors:A==="shop"?t.int(2,4):A==="apt"?t.int(4,9):A==="office"?t.int(4,8):2,tint:P,litP:I,fence:A==="house"&&t()<.5?1.2:0};if(Wi(e,D,t,w),A!=="house"&&t()<.28&&fh(e,r(E+(t()-.5)*(M-1.2),m*(y-.42),C+.15),t),(A==="shop"||A==="konbini")&&t()<.3)for(let L=0;L<1+t()*3;L++)ep(e,r(E-M/2+.8+L*.55,m*(y-.75),C+.15,Math.PI/2+.1),t);if(A==="house"&&t()<.6)for(let L=0;L<2+t()*3;L++)np(e,r(E+1+L*.5,m*(y-.3),C+.15),t);if(t()<.03)for(let L=0;L<3;L++)tp(e,r(E+L*.9,m*(S+.35),C))}d+=M+t.range(.05,.5),yield}for(let v=n+t()*10;v<s-8;v+=t.range(14,26)){if(Rt(v).city<.7||Rt(v).mountain>.1||t()<.3||ms(v,18)||_h(v,15))continue;let S=o(v),_=r(v,m*(S+3.2+t.range(14,20)),l(v)+.1);Wi(e,_,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Hi),litP:.4})}if(Rt(n+30).city>.7&&Rt(n+30).mountain<.1&&t()<.65){let v=n+t()*Wt;if(ms(v,24)||_h(v,20))continue;let S=r(v,m*t.range(55,150),l(v));Wi(e,S,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Hi),litP:.45})}}let g=Math.ceil(n/150),x=Math.floor((s-.01)/150);for(let m=g;m<=x;m++){let d=m*150;if(Vt(d)!=="city"||Rt(d).mountain>.1)continue;let v=o(d);yield*this.intersection(e,t,d,m,r,l,o,u,h,f,p),ps(e,r(d-1,-(v+.4),l(d)+.15),"sign_blue",1),ps(e,r(d-6,-(v+.4),l(d)+.15),"sign_stop",1,2.1,.75),ph(e,r(d+7,v+.4,l(d)+.15),-1),m%3===0&&ps(e,r(d+20,-(v+.4),l(d)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,a,l,o,u){for(let f of[-1,1]){for(let p=n+t()*4;p<s;p+=t.range(7.5,10)){if(Rt(p).sakura<.45||Wn(p,30))continue;let g=o(p);En(e,a(p,f*(g+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&En(e,a(p+3,f*(g+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let p=n+(f>0?0:12);p<s;p+=24){if(Vt(p)!=="sakura"||Wn(p,30))continue;let g=o(p);qo(e,r(p,f*(g+2.25),l(p)+.15)),Xi(p,48)<24&&vp(e,r(p+6,f*(g+3),u(p+6,f*(g+3))))}for(let p=n+t()*15;p<s;p+=t.range(14,24)){if(Vt(p)!=="sakura"||t()<.35||Wn(p,45))continue;let g=o(p);Wi(e,a(p,f*(g+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Hi),litP:.45,fence:t()<.6?1.4:0})}}let h=Math.floor((n+Wt/2)/480)*480+240;h>=n&&h<s&&Vt(h)==="sakura"&&!Wn(h,60)&&xh(e,r(h,0,l(h),0,!1),o(h)+1.6,6.4)}placeCoast(e,t,n,s,r,a,l,o,u,c,h){for(let g=0;g<=20;g++){let x=n+g/20*Wt;if(Rt(x).coast<.85||di(x,Gt*1.25)){c.length&&c[c.length-1]!==null&&c.push(null);continue}let d=o(x),v=d+11,S=d+19,_=h(x,-v,fs+.06),y=h(x,-S,fs+.06);c.push([[_[0],_[1],_[2],Xi(x,ds),0],[y[0],y[1],y[2],Xi(x,ds),1]])}let f=c.indexOf(null);f>=0&&(c.length=f),c.length<2&&(c.length=0);for(let g=n+t()*6;g<s;g+=t.range(5,9)){if(Vt(g)!=="coast"||di(g,Gt+6))continue;let x=o(g);t()<.7&&En(e,a(g,x+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&En(e,a(g+2,-(x+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let g=n+4;g<s;g+=t.range(18,30)){if(Vt(g)!=="coast"||t()<.4||di(g,Gt*1.4))continue;let x=o(g),m=3+Math.floor(t()*5);for(let d=0;d<m;d++){let v=-(x+t.range(12,17)),S=g+t.range(-3,3);yp(e,r(S,v,Math.max(u(S,v),fs-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let g=n+12;g<s;g+=48){if(Vt(g)!=="coast"||di(g,Gt+4))continue;let x=o(g);hh(e,a(g,x+1),t)}if(Vt(n+30)==="coast"&&t()<.5){let g=n+t()*Wt,x=o(g);di(g,Gt+25)||Wi(e,a(g,x+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(Hi),litP:.5,fence:0})}if(Vt(n+30)==="coast"&&t()<.55){let g=n+t()*Wt;bp(e,r(g,-(o(g)+t.range(45,220)),fs-.25,t()*6,!1),t)}let p=Math.floor((n+Wt/2)/1500)*1500+700;p>=n&&p<s&&Vt(p)==="coast"&&!di(p,Gt*1.6)&&Mp(e,r(p,-(o(p)+75),fs-1,0,!1))}*placeCountry(e,t,n,s,r,a,l,o,u){for(let g of[-1,1]){yield;for(let x=n+t()*20;x<s;x+=t.range(20,40)){if(Vt(x)!=="country"||t()<.55||ms(x,16)||Wn(x,48))continue;let m=g*t.range(16,95),d=a(x,m);Wi(e,d,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Hi),litP:.5,fence:0});for(let v=0;v<2+t()*3;v++){let S=m+g*t.range(6,14),_=x+t.range(-8,8);En(e,a(_,S,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let x=n+t()*8;x<s;x+=t.range(5,9)){if(Vt(x)!=="country"||ms(x,7)||Wn(x,36))continue;let m=g*t.range(140,210);En(e,a(x,m,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!ms(x+2,8)&&!Wn(x+2,34)&&En(e,a(x+2,g*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let c=Math.floor((n+Wt/2)/600)*600+300;if(c>=n&&c<s&&Vt(c)==="country"&&!Wn(c,40)){let g=o(c);_p(e,r(c,-(g+1.6),l(c)-.08),t)}let h=Math.floor((n+Wt/2)/700)*700+120;if(h>=n&&h<s&&Vt(h)==="country"&&!Wn(h,40)){let g=o(h);fh(e,r(h,-(g+.95),l(h)-.08),t),hh(e,r(h+2,-(g+.8),l(h)-.08),t)}let f=Math.floor((n+Wt/2)/900)*900+450;if(f>=n&&f<s&&Vt(f)==="country"&&!Wn(f,40)){let g=o(f);Sp(e,a(f,g+5),t)}let p=Math.floor((n+Wt/2)/380)*380+190;if(p>=n&&p<s&&Vt(p)==="country"&&!Wn(p,40)&&!ms(p,30)){let g=o(p),x=(Gn(Math.round(p),5)<.5?-1:1)*(g+2.75);gp(e,a(p,x,0))}for(let g=n;g<s;g+=30){if(Vt(g)!=="country")continue;let x=this.path.curv(g);if(Math.abs(x)>1/450&&t()<.5){let m=x>0?-1:1,d=o(g);ph(e,a(g,m*(d+.75)),m>0?-1:1)}}}};var bc=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#5a4c84","#9fb0ff",.45,"#4a4a88","#2a2030",1,"#4a4478","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#2468d8","#c2e0ff","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#c6ddf2","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.8,"#1f2466","#9a6a9a","#c06a8a",.6,"#5a5a9a","#3a3048",1,"#5e4c84","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new me(e):e)),ge={zenith:new me,horizon:new me,sunCol:new me,sunI:1,hemiSky:new me,hemiGround:new me,hemiI:1,fog:new me,cLit:new me,cShade:new me,cRim:new me,night:0,warm:0,overcast:0,rain:0,sunDir:new B,moonDir:new B,lightDir:new B,sunEl:0};function Rp(i){let e=0;for(;e<bc.length-2&&bc[e+1][0]<=i;)e++;let t=bc[e],n=bc[e+1],s=oc(Ot((i-t[0])/(n[0]-t[0]),0,1)),r=(a,l)=>l.copy(t[a]).lerp(n[a],s);r(1,ge.zenith),r(2,ge.horizon),r(3,ge.sunCol),ge.sunI=Tt(t[4],n[4],s),r(5,ge.hemiSky),r(6,ge.hemiGround),ge.hemiI=Tt(t[7],n[7],s),r(8,ge.fog),r(9,ge.cLit),r(10,ge.cShade),r(11,ge.cRim),ge.night=Tt(t[12],n[12],s),ge.warm=Tt(t[13],n[13],s),ge.sunEl=Cp(i,ge.sunDir,ge.moonDir,ge.lightDir)}function Cp(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Ot((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var E_=new B,w_=new B;function bh(i,e){return Cp((i%1+1)%1,E_,w_,e),e}var Ap={zenith:[new me("#7b8594"),new me("#141a28")],horizon:[new me("#b5bcc6"),new me("#283042")],fog:[new me("#a8b0ba"),new me("#232b3c")],hemiSky:[new me("#aab3bf"),new me("#3c4866")],hemiGround:[new me("#8b8983"),new me("#1e2030")],cLit:[new me("#d0d5dc"),new me("#2c3240")],cShade:[new me("#7c8593"),new me("#151922")]},Mh=new me;function Pp(i,e){if(ge.overcast=i,ge.rain=e,i<=.001)return;let t=ge.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Mh.copy(Ap[n][0]).lerp(Ap[n][1],t),ge[n].lerp(Mh,i*(n==="cLit"||n==="cShade"?.75:.85));ge.sunI*=1-.82*i,ge.warm*=1-i,ge.cRim.multiplyScalar(1-i),ge.sunCol.lerp(Mh.setRGB(.85,.87,.9),i*.6)}function Ip(){let i=new ft({side:pn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ge.zenith},uHorizon:{value:ge.horizon},uSunDir:{value:ge.sunDir},uMoonDir:{value:ge.moonDir},uNoiseTex:qe.uNoiseTex,uSunCol:{value:ge.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new me},uOvercast:{value:0},uDeckLit:{value:new me},uDeckDark:{value:new me},uMilky:{value:0},uMetA:{value:new B(0,1,0)},uMetB:{value:new B(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
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
      }`}),e=new ct(new yo(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function A_(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,a=e?6:9;for(let d=0;d<a;d++){let v=.06+i()*.05;t.push([(d/(a-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let l=e?6:2,o=s*.82,u=.1+.09;for(let d=0;d<l;d++){let v=Math.max(1,Math.round(o/.11));for(let S=0;S<v;S++){let _=(v===1?0:S/(v-1)-.5)*o+(i()-.5)*.05+r*d;t.push([_,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,o*=e?.8:.66}let c=t.slice();for(let d of c){if(t.length>92)break;let v=1+Math.floor(i()*2);for(let S=0;S<v;S++){let _=.35+i()*2.4,y=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,y])}}let h=t.slice(0,96),f=1e9,p=-1e9,g=-1e9;for(let d of h)f=Math.min(f,d[0]-d[3]*1.12),p=Math.max(p,d[0]+d[3]*1.12),g=Math.max(g,d[1]+d[3]*1.12);let x=Math.min(1,.92/(p-f),(.95-.1)/(g-.1)),m=(f+p)/2;for(let d of h)d[0]=(d[0]-m)*x,d[1]=.1+(d[1]-.1)*x,d[3]*=x;return h}function Lp(i){let t={value:Array.from({length:96},()=>new Dt)},n=new ft({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:qe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1,blending:Fn}),s=new ct(new Ht(1,1),n),r=new ws,a=new Ni;r.add(s);let l=new It(1024*2,1024*2,{generateMipmaps:!0,minFilter:On,magFilter:Lt}),o=i.getRenderTarget(),u=i.autoClear,c=bn(99);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let p=f%2===0,g=A_(c,p);g.forEach((x,m)=>t.value[m].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=g.length,n.uniforms.uSeed.value=f*13.7,l.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(l),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:p})}return l.viewport.set(0,0,1024*2,1024*2),i.autoClear=u,i.setRenderTarget(o),n.dispose(),s.geometry.dispose(),{tex:l.texture,kinds:h,rt:l}}function Dp(i){let e=bn(5),t=22,n=[],s=new Ht(1,1);s.translate(0,.5,0);let r=new Rn(new Float32Array(t*4),4),a=new Rn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let l=new ft({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:ge.cLit},uShade:{value:ge.cShade},uRim:{value:ge.cRim},uHaze:{value:ge.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),o=new Di(s,l,t);o.frustumCulled=!1,o.renderOrder=-5;for(let g=0;g<t;g++){let x=g<12,m=i.kinds[(g*3+(x?0:1))%i.kinds.length],d=x?m.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:g/t*Math.PI*2+e.range(-.15,.15),d:x?e.range(2600,3400):e.range(1300,2200),base:x?e.range(-60,60):e.range(260,700),size:d,cell:m.cell,haze:x?.45:.18})}let u=new $e,c=new cn,h=new B,f=new B,p=new B(0,1,0);return{group:o,update(g,x){let m=Math.atan2(ge.lightDir.x,ge.lightDir.z);for(let v of n)v.phi+=x*1.2/v.d;n.slice().sort((v,S)=>S.d-v.d).forEach((v,S)=>{h.set(g.x+Math.sin(v.phi)*v.d,g.y+v.base,g.z+Math.cos(v.phi)*v.d),c.setFromAxisAngle(p,v.phi+Math.PI),f.set(v.size,v.size,1),u.compose(h,c,f),o.setMatrixAt(S,u);let _=m-v.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let y=Math.max(0,Math.min(1,(_+.35)/.7)),b=1-y*y*(3-2*y);r.setXYZW(S,v.cell[0],v.cell[1],b,v.haze),a.setX(S,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+ge.warm))}),o.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,l.uniforms.uOpacity.value=(1-ge.night*.35)*(1-ge.overcast*.55)}}}function Np(){let i=new Bt;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],a=[],l=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,p=Math.sin(f)*t.R,g=Math.cos(f)*t.R,x=ac(h/360*t.k*4,40+n*9),m=Math.pow(Math.max(0,x-.18)/.82,1.6),d=t.h*(.12+m);if(r.push(p,-60,g,p,-60+d,g),a.push(0,h/360,1,h/360),h<360){let v=h*2;l.push(v,v+1,v+2,v+1,v+3,v+2)}}let o=new gt;o.setAttribute("position",new Ke(r,3)),o.setAttribute("hf",new Ke(a,2)),o.setIndex(l);let u=new ft({side:hn,fog:!1,uniforms:{uCol:{value:new me(t.col)},uHaze:{value:ge.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:qe.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Oi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),c=new ct(o,u);c.frustumCulled=!1,c.renderOrder=999,i.add(c)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-ge.night))*(1-.35*ge.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var Ur={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function Up(i){let e=i.get("weather"),t={mode:Ur[e]?e:"auto",kind:Ur[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return Ur[e]&&(t.ov=Ur[e][0],t.rain=Ur[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=Ur[t.kind];t.ov+=Ot(s-t.ov,-n/28,n/28);let a=t.ov>.75?r:0;t.rain+=Ot(a-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}function Fp(){let e=new B(42,22,42),t=new Ht(1,1),n=new vr;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Rn(s,4)),n.instanceCount=2400;let r=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new B},uAmt:{value:0},uBox:{value:e},uCol:{value:new me(1,1,1)}},vertexShader:`
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),a=new ct(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.62+.38*c,.66+.34*c,.78+.22*c)}}}function Op(){let e=new B(46,24,46),t=new Ht(1,1);t.translate(0,.5,0);let n=new vr;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Rn(s,4)),n.instanceCount=2600;let r=new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new B},uRain:{value:0},uBox:{value:e},uCol:{value:new me(.8,.85,.95)}},vertexShader:`
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
      void main(){ gl_FragColor = vec4(uCol, vA * 0.32 * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new ct(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,u,c){a.visible=u>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.55+.35*c,.6+.35*c,.7+.3*c)}}}var Fr=72;function R_(){let i=[],e=[],t=(s,r,a,l,o,u)=>{i.push(...s,...r,...a),e.push(l,o,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new gt;return n.setAttribute("position",new Ke(i,3)),n.setAttribute("aWing",new Ke(e,1)),n}function Bp(){let i=R_(),e=new Rn(new Float32Array(Fr*3),3),t=new Rn(new Float32Array(Fr*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new ft({side:hn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ge.fog},uFogD:{value:.002},uCam:{value:new B}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Di(i,n,Fr);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},l=new $e,o=new cn,u=new Nn(0,0,0,"YXZ"),c=new B,h=new B,f=()=>r.reduce((x,m)=>x+m.birds.length,0);function p(x,m,d,v){let S=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(f()+S>Fr)return;let _=45+Math.random()*85,y=(Math.random()-.5)*120,b=Math.random()<.5?1:-1,A=new B().copy(m).addScaledVector(d,_).addScaledVector(v,y-b*75);A.y=m.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let M=x==="small"?11+Math.random()*4:8+Math.random()*3,E=new B().copy(v).multiplyScalar(b*M).addScaledVector(d,(Math.random()-.3)*M*.6),C=x==="small"?.8:1.45,P=Array.from({length:S},(I,D)=>({off:new B((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:A,vel:E,birds:P,size:C,life:60})}function g(x,m,d,v){if(r.some(y=>y.kind==="gull")||f()+4>Fr)return;let S=new B().copy(x).addScaledVector(m,70).addScaledVector(d,-v*45);S.y=x.y+18;let _=Array.from({length:4},(y,b)=>({off:new B,ph:Math.random()*6.28,fq:5.5,w:b/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:S,vel:new B,birds:_,size:1.25,life:1e9})}return{mesh:s,update(x,m,d,v,S,_,y,b,A){n.uniforms.uTime.value=m,n.uniforms.uCam.value.copy(d);let M=y>.35&&b<.3,E=ge.warm>.25&&ge.sunEl<.6&&y>.2;M&&(a.small-=x)<0&&(a.small=22+Math.random()*35,_.coast<.6&&p("small",d,v,S)),(E||M&&_.city+_.country>.6&&Math.random()<4e-4)&&(a.crow-=x)<0&&(a.crow=E?14+Math.random()*18:60,p("crow",d,v,S)),_.coast>.6&&M&&g(d,v,S,1);let C=[.1+.08*y,.11+.09*y,.15+.1*y],P=0;for(let I=r.length-1;I>=0;I--){let D=r[I];if(D.kind==="gull"?(D.c.lerp(c.copy(A).addScaledVector(v,60).addScaledVector(S,-42).setY(A.y+16),Math.min(1,x*.25)),(_.coast<.4||!M)&&(D.life=Math.min(D.life,8),D.c.y+=x*6)):D.c.addScaledVector(D.vel,x),D.life-=x,D.life<0||D.kind!=="gull"&&D.c.distanceTo(d)>300){r.splice(I,1);continue}for(let w of D.birds){if(P>=Fr)break;let L,U,F,z;D.kind==="gull"?(w.w+=x*(14/w.r),L=D.c.x+Math.cos(w.w)*w.r,F=D.c.z+Math.sin(w.w)*w.r,U=D.c.y+w.h+Math.sin(m*.4+w.ph)*2,z=Math.atan2(-Math.sin(w.w),Math.cos(w.w))):(L=D.c.x+w.off.x+Math.sin(m*.7+w.ph)*1.2,U=D.c.y+w.off.y+Math.sin(m*1.1+w.ph)*.6,F=D.c.z+w.off.z,z=Math.atan2(D.vel.x,D.vel.z)),u.set(0,z,Math.sin(m+w.ph)*.15),o.setFromEuler(u),h.setScalar(D.size),l.compose(c.set(L,U,F),o,h),s.setMatrixAt(P,l);let O=D.kind==="gull"?[.92*(.5+.5*y),.93*(.5+.5*y),.95*(.5+.5*y)]:D.kind==="crow"?[.05,.05,.07]:C;e.setXYZ(P,O[0],O[1],O[2]),t.setXY(P,w.fq,w.ph),P++}}s.count=P,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,m){for(let d of r)d.c.x-=x,d.c.z-=m}}}function zp(){let i=new ft({fog:!1,uniforms:{uNoiseTex:qe.uNoiseTex,uTime:{value:0},uCam:{value:new B},uSunDir:{value:ge.lightDir},uSunCol:{value:ge.sunCol},uHorizon:{value:ge.horizon},uZenith:{value:ge.zenith},uFog:{value:ge.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
      }`}),e=new ct(new Ht(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=fs,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=ge.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ge.overcast*.85}}}function kp(){return new ft({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new me(1,1,1)},uNoiseTex:qe.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${Oi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function Hp(){return new ft({fog:!1,uniforms:{uNoiseTex:qe.uNoiseTex,uTime:{value:0},uSunDir:{value:ge.lightDir},uSunCol:{value:ge.sunCol},uHorizon:{value:ge.horizon},uZenith:{value:ge.zenith},uFog:{value:ge.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
      }`})}var $o=new B;function ti(i,e,t,n,s,r){let a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;$o.copy(e),$o[n]=0,$o.normalize();let u=.5*a/(a+l),c=1-$o.angleTo(i)/o;return Math.sign($o[t])===1?c*u:l/(a+l)+u+u*(1-c)}var wi=class i extends li{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let o=new B,u=new B,c=new B(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,x=new B,m=.5/a;for(let d=0,v=0;d<h.length;d+=3,v+=2)switch(o.fromArray(h,d),u.copy(o),u.x-=Math.sign(u.x)*m,u.y-=Math.sign(u.y)*m,u.z-=Math.sign(u.z)*m,u.normalize(),h[d+0]=c.x*Math.sign(o.x)+u.x*r,h[d+1]=c.y*Math.sign(o.y)+u.y*r,h[d+2]=c.z*Math.sign(o.z)+u.z*r,f[d+0]=u.x,f[d+1]=u.y,f[d+2]=u.z,Math.floor(d/g)){case 0:x.set(1,0,0),p[v+0]=ti(x,u,"z","y",r,n),p[v+1]=1-ti(x,u,"y","z",r,t);break;case 1:x.set(-1,0,0),p[v+0]=1-ti(x,u,"z","y",r,n),p[v+1]=1-ti(x,u,"y","z",r,t);break;case 2:x.set(0,1,0),p[v+0]=1-ti(x,u,"x","z",r,e),p[v+1]=ti(x,u,"z","x",r,n);break;case 3:x.set(0,-1,0),p[v+0]=1-ti(x,u,"x","z",r,e),p[v+1]=1-ti(x,u,"z","x",r,n);break;case 4:x.set(0,0,1),p[v+0]=1-ti(x,u,"x","y",r,e),p[v+1]=1-ti(x,u,"y","x",r,t);break;case 5:x.set(0,0,-1),p[v+0]=ti(x,u,"x","y",r,e),p[v+1]=1-ti(x,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Sh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,o=new gt,u=0;for(let c=0;c<i.length;++c){let h=i[c],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(u,p,c),u+=p}}if(t){let c=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+c);c+=i[f].attributes.position.count}o.setIndex(h)}for(let c in r){let h=Vp(r[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,h)}for(let c in a){let h=a[c][0].length;if(h!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<a[c].length;++x)p.push(a[c][x][f]);let g=Vp(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(g)}}}return o}function Vp(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let c=i[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}let a=new e(r),l=new kt(a,t,n),o=0;for(let u=0;u<i.length;++u){let c=i[u];if(c.isInterleavedBufferAttribute){let h=o/t;for(let f=0,p=c.count;f<p;f++)for(let g=0;g<t;g++){let x=c.getComponent(f,g);l.setComponent(f+h,g,x)}}else a.set(c.array,o);o+=c.count*t}return s!==void 0&&(l.gpuType=s),l}function C_(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new Un(i);return n.colorSpace=zt,n}function P_(){let i=document.createElement("canvas");i.width=64,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"#9fbfe6"),t.addColorStop(.45,"#4a6690"),t.addColorStop(1,"#1d2638"),e.fillStyle=t,e.fillRect(0,0,64,128),e.fillStyle="rgba(255,255,255,0.35)",e.beginPath(),e.moveTo(20,0),e.lineTo(34,0),e.lineTo(10,128),e.lineTo(-4,128),e.fill();let n=new Un(i);return n.colorSpace=zt,n}function Gp(){let i=new Bt,e=new Bt,t=new Bt;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=rh(new un({color:"#ffffff",vertexColors:!0,gradientMap:ei}),.85,.06,"paint"),s=(w,L)=>Object.assign(new me(w),{gloss:L}),r=s("#9fd8c8",1),a=s("#e9e7e0",.55),l=s("#2a2c33",.35),o=s("#1b1c20",.04),u=s("#c8ccd2",.8),c=(w,L)=>{let U=w.attributes.position.count,F=new Float32Array(U*4);for(let z=0;z<U;z++)F.set([L.r,L.g,L.b,L.gloss],z*4);return w.setAttribute("color",new Ke(F,4)),w},h=rh(new un({color:"#ffffff",map:P_(),gradientMap:ei}),1.2,.08,"glass"),f=new un({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:ei}),p=new un({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:ei}),g=new Zt({map:C_()}),x=new Map,m=[],d=!1,v=new $e,S=new Nn,_=new cn,y=new B(1,1,1),b=(w,L,U,F,z,O=0,k=0,H=0)=>{let ee=w.index?w.toNonIndexed():w;if(L.isColor&&(c(ee,L),L=n),S.set(O,k,H),_.setFromEuler(S),v.compose(new B(U,F,z),_,y),ee.applyMatrix4(v),d){m.push(ee);return}x.has(L)||x.set(L,[]),x.get(L).push(ee)};b(new wi(1.48,.86,3.38,4,.15),r,0,.77,0),b(new wi(1.42,.66,2.6,4,.17),r,0,1.5,-.25),b(new wi(1.38,.09,2.5,3,.04),a,0,1.84,-.25),b(new Ht(1.16,.5),h,0,1.53,-1.556,0,Math.PI,0);for(let w of[-1,1])b(new Ht(2.25,.46),h,w*.712,1.54,-.2,0,w*Math.PI/2,0),b(new wi(.1,.12,.2,2,.04),r,w*.82,1.2,.95),b(new wi(.14,.48,.08,2,.035),f,w*.64,1,-1.67),b(new wi(.12,.08,.06,2,.02),p,w*.64,.7,-1.67);b(new Ht(1.2,.52),h,0,1.52,1.056,-.12,0,0),b(new wi(1.52,.22,.22,2,.07),l,0,.42,-1.62),b(new li(.24,.04,.05),l,0,.84,-1.69),b(new Ht(.34,.17),g,0,.72,-1.7,0,Math.PI,0),d=!0;for(let[w,L]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])b(new pr(.29,.29,.2,20),o,w,.29,L,0,0,Math.PI/2),b(new pr(.16,.16,.205,12),u,w,.29,L,0,0,Math.PI/2);d=!1;for(let[w,L]of x){let U=new ct(Sh(L),w);U.castShadow=w!==h&&w!==g,U.receiveShadow=!0,t.add(U)}{let w=new ct(Sh(m),n);w.castShadow=w.receiveShadow=!0,i.add(w)}{let U=document.createElement("canvas");U.width=48,U.height=96;let F=U.getContext("2d"),z=F.createImageData(48,96);for(let k=0;k<96;k++)for(let H=0;H<48;H++){let ee=Math.max(0,Math.abs((H+.5)/48-.5)*2.1-.62),de=Math.max(0,Math.abs((k+.5)/96-.5)*2.05-.78),Ze=Math.hypot(ee/.42,de/.24),Ie=Math.max(0,1-Ze),ze=(k*48+H)*4;z.data[ze]=z.data[ze+1]=z.data[ze+2]=Math.round(255*Ie*Ie*(3-2*Ie)),z.data[ze+3]=255}F.putImageData(z,0,0);let O=new ct(new Ht(2.2,4.1),new Zt({color:0,alphaMap:new Un(U),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));O.rotation.x=-Math.PI/2,O.position.y=.03,O.renderOrder=3,i.add(O)}let A=new Bt;A.position.set(.02,1.3,-1.57),t.add(A);let M=new li(.52,.026,.02);M.translate(.27,0,0);let E=new ct(c(M,l),n);E.rotation.z=.18,A.add(E);let C=0,P=new To(16773328,0,70,.55,.65,1.2);P.position.set(0,.8,1.6),P.target.position.set(0,0,18),t.add(P,P.target);let I={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0},D=(w,L)=>L*Math.tanh(w/L);return{group:i,update(w,L,U,F=0,z=null){if(z){let O=D(-z.lat*.016,.045),k=D(-z.lon*.008,.03);I.rv+=((O-I.roll)*55-I.rv*8)*w,I.roll+=I.rv*w,I.pv+=((k-I.pitch)*60-I.pv*9)*w+z.kick,I.pitch+=I.pv*w,I.yv+=((z.road-I.y)*85-I.yv*8)*w+z.jolt,I.y+=I.yv*w,e.rotation.set(I.pitch,0,I.roll),e.position.y=.35+I.y}if(f.emissiveIntensity=.35+U*3.2,F>.15||C%2.6>.01){C+=w;let O=C%2.6/2.6,k=ee=>ee*ee*(3-2*ee),H=O<.25?k(O/.25):O<.5?k(1-(O-.25)/.25):0;E.rotation.z=.18+H*2.5,F<=.15&&O>=.5&&(C=0)}P.intensity=U*60}}}var Or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},I_=new as(-1,1,1,-1,0,1),Th=class extends gt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},L_=new Th,gs=class{constructor(e){this._mesh=new ct(L_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,I_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Br=class extends Xn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ls.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ko=class extends Xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Sc=class extends Xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Tc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ge);this._width=n.width,this._height=n.height,t=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Br(Or),this.copyPass.material.blending=Fn,this.timer=new Eo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(a instanceof Ko?n=!0:a instanceof Sc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ec=class extends Xn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new me}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Wp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zr=class i extends Xn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new It(r,a,{type:Qt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new It(r,a,{type:Qt,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new It(r,a,{type:Qt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let l=Wp;this.highPassUniforms=Ls.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Ge(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ls.clone(Or.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,premultipliedAlpha:!0,blending:Ui,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new me,this._oldClearAlpha=1,this._basic=new Zt,this._fsQuad=new gs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ge(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[o]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[o]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let l=t[a],o=a+1<e?t[a+1]:0,u=l+o;s.push((a*l+(a+1)*o)/u),r.push(u)}return new ft({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};zr.BlurDirectionX=new Ge(1,0);zr.BlurDirectionY=new Ge(0,1);var Eh=class extends Xn{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new It(4,4,{type:Qt,depthBuffer:!1,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),this.mat=new ft({uniforms:{tDiffuse:{value:null},uTexel:{value:new Ge(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new gs(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},D_={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Ge(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Ge(1/1280,1/720)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function Xp(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let a=i.getSize(new Ge),l=new It(a.x*i.getPixelRatio(),a.y*i.getPixelRatio(),{type:Qt,samples:n}),o=new Tc(i,l);o.addPass(new Ec(e,t));let u=new Eh;o.addPass(u);let c=new zr(new Ge(a.x*r*.5,a.y*r*.5),.42,.55,.86);o.addPass(c);let h=new Br(D_);h.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},h.material.toneMapped=!1,o.addPass(h);let f=o.render.bind(o);return o.render=p=>{h.uniforms.toneMappingExposure.value=i.toneMappingExposure,f(p)},{composer:o,bloom:c,grade:h,refl:u}}function qp(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let se=0;se<2;se++){let ce=s.getChannelData(se);for(let fe=0;fe<n;fe++)ce[fe]=(Math.random()*2-1)*Math.pow(1-fe/n,3)}let r=e.createConvolver();r.buffer=s;let a=e.createGain();a.gain.value=.55,r.connect(a),a.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let o=e.createGain();o.gain.value=.11,l.connect(o),o.connect(t),o.connect(r);let u=(se,ce)=>{let fe=e.createBuffer(1,e.sampleRate*se,e.sampleRate),pe=fe.getChannelData(0),ne=0;for(let Me=0;Me<pe.length;Me++)ce?(ne=(ne+.02*(Math.random()*2-1))/1.02,pe[Me]=ne*3.5):pe[Me]=Math.random()*2-1;return fe},c=(se,ce,fe)=>{let pe=e.createBufferSource();pe.buffer=se,pe.loop=!0;let ne=e.createBiquadFilter();ne.type=ce,ne.frequency.value=fe;let Me=e.createGain();return Me.gain.value=0,pe.connect(ne),ne.connect(Me),Me.connect(t),pe.start(),{f:ne,g:Me}},h=c(u(2,!0),"lowpass",400),f=c(u(3,!1),"lowpass",700);f.g.connect(r);let p=c(u(2,!1),"bandpass",5200);p.f.Q.value=6;let g=c(u(2,!0),"lowpass",240),x=c(u(3,!1),"bandpass",2600);x.f.Q.value=.35;let m=c(u(2,!0),"lowpass",520),d=c(u(3,!1),"bandpass",750);d.f.Q.value=.6;let v=c(u(3,!0),"lowpass",420),S=c(u(2,!0),"lowpass",140),_=u(.03,!1),y=0;function b(se,ce){let fe=e.createBufferSource(),pe=e.createBiquadFilter(),ne=e.createGain();fe.buffer=_,pe.type="bandpass",pe.frequency.value=1800+Math.random()*2600,pe.Q.value=1.2,ne.gain.setValueAtTime(ce*(.02+Math.random()*.03),se),ne.gain.exponentialRampToValueAtTime(1e-4,se+.03),fe.connect(pe),pe.connect(ne),ne.connect(t),fe.start(se),fe.stop(se+.04)}let A=0,M=0;function E(se,ce){let fe=e.createOscillator(),pe=e.createOscillator(),ne=e.createGain(),Me=e.createBiquadFilter();Me.type="bandpass",Me.frequency.value=1150,Me.Q.value=2.2,fe.type="square",fe.frequency.value=745,pe.type="triangle",pe.frequency.value=1490,ne.gain.setValueAtTime(0,se),ne.gain.linearRampToValueAtTime(.085*ce,se+.004),ne.gain.exponentialRampToValueAtTime(1e-4,se+.3),fe.connect(Me),pe.connect(Me),Me.connect(ne),ne.connect(t),ne.connect(r),fe.start(se),pe.start(se),fe.stop(se+.33),pe.stop(se+.33)}function C(se,ce){let fe=e.createOscillator(),pe=e.createGain();fe.type="sine",fe.frequency.setValueAtTime(110,se),fe.frequency.exponentialRampToValueAtTime(48,se+.12),pe.gain.setValueAtTime(1e-4,se),pe.gain.linearRampToValueAtTime(.22*ce,se+.006),pe.gain.exponentialRampToValueAtTime(1e-4,se+.17),fe.connect(pe),pe.connect(t),fe.start(se),fe.stop(se+.2)}let P=e.createGain();P.gain.value=1,P.connect(t);let I=e.createGain();I.gain.value=.35,P.connect(I),I.connect(r);let D=(se=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return P;let ce=e.createStereoPanner();return ce.pan.value=se,ce.connect(P),ce};function w(se,ce,fe,pe,ne,Me,je="sine",ht=0){let Z=e.createOscillator(),it=e.createGain();if(Z.type=je,Z.frequency.setValueAtTime(ce,se),Z.frequency.exponentialRampToValueAtTime(fe,se+pe),ht){let G=e.createOscillator(),Ct=e.createGain();G.frequency.value=ht,Ct.gain.value=ce*.012,G.connect(Ct),Ct.connect(Z.frequency),G.start(se),G.stop(se+pe+.05)}return it.gain.setValueAtTime(1e-4,se),it.gain.linearRampToValueAtTime(ne,se+Math.min(.04,pe*.25)),it.gain.setValueAtTime(ne,se+pe*.7),it.gain.exponentialRampToValueAtTime(1e-4,se+pe),Z.connect(it),it.connect(Me),Z.start(se),Z.stop(se+pe+.02),it}function L(se,ce){let fe=D(),pe=2+Math.floor(Math.random()*4),ne=3200+Math.random()*1500;for(let Me=0;Me<pe;Me++){let je=se+Me*(.09+Math.random()*.07);w(je,ne,ne*(1.2+Math.random()*.3),.06,ce*.022,fe)}}function U(se,ce){let fe=D();w(se,1120,1390,1,ce*.03,fe,"sine",5.5),w(se+1.15,2350,2150,.14,ce*.03,fe),w(se+1.32,1700,1520,.13,ce*.028,fe),w(se+1.5,2750,2480,.36,ce*.032,fe)}function F(se,ce){let fe=D(),pe=1+Math.floor(Math.random()*3);for(let ne=0;ne<pe;ne++){let Me=se+ne*.48,je=e.createOscillator(),ht=e.createBiquadFilter(),Z=e.createGain();je.type="sawtooth",je.frequency.setValueAtTime(560,Me),je.frequency.exponentialRampToValueAtTime(420,Me+.32),ht.type="bandpass",ht.frequency.value=1150,ht.Q.value=1.6,Z.gain.setValueAtTime(1e-4,Me),Z.gain.linearRampToValueAtTime(ce*.03,Me+.03),Z.gain.exponentialRampToValueAtTime(1e-4,Me+.36),je.connect(ht),ht.connect(Z),Z.connect(fe),je.start(Me),je.stop(Me+.4)}}function z(se,ce){let fe=D(),pe=2+Math.floor(Math.random()*2);for(let ne=0;ne<pe;ne++)w(se+ne*.42,1750,1150,.36,ce*.022,fe,"triangle",11)}function O(se,ce){let fe=D(),pe=e.createOscillator(),ne=e.createBiquadFilter(),Me=e.createGain(),je=240+Math.random()*220,ht=5+Math.floor(Math.random()*4);pe.type="square",pe.frequency.value=je,ne.type="bandpass",ne.frequency.value=je*2.4,ne.Q.value=3,Me.gain.setValueAtTime(1e-4,se);for(let Z=0;Z<ht;Z++){let it=se+Z*.038;Me.gain.linearRampToValueAtTime(ce*.014,it+.008),Me.gain.linearRampToValueAtTime(1e-4,it+.028)}pe.connect(ne),ne.connect(Me),Me.connect(fe),pe.start(se),pe.stop(se+ht*.038+.05)}function k(se,ce){let fe=D(),pe=4300+Math.random()*700;for(let ne=0;ne<3;ne++)w(se+ne*.055,pe,pe*1.01,.035,ce*.009,fe)}function H(se,ce){let fe=D(0);for(let[pe,ne,Me]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let je=e.createOscillator(),ht=e.createGain();je.type="sine",je.frequency.value=pe,je.detune.value=(Math.random()-.5)*8,ht.gain.setValueAtTime(1e-4,se),ht.gain.linearRampToValueAtTime(ce*.05*ne,se+.03),ht.gain.exponentialRampToValueAtTime(1e-4,se+Me),je.connect(ht),ht.connect(fe),je.start(se),je.stop(se+Me+.1)}}function ee(se,ce){let fe=D();for(let pe of[se,se+.22])w(pe,2650,2600,.5,ce*.018,fe),w(pe,3950,3900,.35,ce*.008,fe)}let de={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ze=se=>se>1e-4?-Math.log(1-Math.random()*.98)/se:1e9,Ie=se=>440*Math.pow(2,(se-69)/12),ze=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],$=[72,74,76,79,81,84,86,88],Q=0,Le=e.currentTime+.2,He=e.currentTime+3;function Ee(se){let ce=ze[Q++%ze.length],fe=11;for(let pe of ce)for(let ne of[-5,5]){let Me=e.createOscillator(),je=e.createGain();Me.type=ne<0?"sine":"triangle",Me.frequency.value=Ie(pe),Me.detune.value=ne,je.gain.setValueAtTime(0,se),je.gain.linearRampToValueAtTime(.18,se+3.5),je.gain.setValueAtTime(.18,se+fe-4),je.gain.linearRampToValueAtTime(0,se+fe+1),Me.connect(je),je.connect(l),Me.start(se),Me.stop(se+fe+1.2)}}function et(se){let ce=$[Math.floor(Math.random()*$.length)],fe=e.createOscillator(),pe=e.createOscillator(),ne=e.createGain(),Me=e.createGain();fe.type=pe.type="sine",fe.frequency.value=Ie(ce),pe.frequency.value=Ie(ce)*2.01,Me.gain.value=.25,pe.connect(Me),Me.connect(ne),ne.gain.setValueAtTime(0,se),ne.gain.linearRampToValueAtTime(.05,se+.02),ne.gain.exponentialRampToValueAtTime(1e-4,se+4),fe.connect(ne),ne.connect(r),ne.connect(t),fe.start(se),pe.start(se),fe.stop(se+4.2),pe.stop(se+4.2)}return{ac:e,muted:!1,bump(se){C(e.currentTime+.01,se)},update(se,ce,fe,pe={}){let ne=e.currentTime;if((pe.bell||0)>.01)for(A<ne&&(A=ne+.02);A<ne+.12;)E(A,pe.bell),A+=.41;let Me=pe.rain||0;if(x.g.gain.setTargetAtTime(Me*.05,ne,.6),m.g.gain.setTargetAtTime(Me*.05,ne,.6),Me>.05&&pe.roof)for(y<ne&&(y=ne+.02);y<ne+.12;)b(y,Me),y+=.04+Math.random()*.12/Me;let je=pe.water||0,ht=.6+.4*Math.sin(ne*1.3)*Math.sin(ne*.37);d.g.gain.setTargetAtTime(je*.035*ht,ne,.25),d.f.frequency.setTargetAtTime(600+400*ht,ne,.25);let Z=.35+.65*Math.pow(.5+.5*Math.sin(ne*.23)*Math.sin(ne*.071+2),2),it=pe.rush||0;v.g.gain.setTargetAtTime(((ce.mountain||0)+(ce.snow||0)*.7)*.06*Z+it*.055,ne,.8),v.f.frequency.setTargetAtTime(260+420*Z+it*500,ne,.8);let G=pe.train||0;if(g.g.gain.setTargetAtTime(G*.16,ne,.2),G>.04)for(M<ne&&(M=ne+.02);M<ne+.12;)C(M,G),C(M+.15,G*.8),M+=1.2;for(;Le<ne+1;)Ee(Le),Le+=8;He<ne+.5&&(et(He),He+=1.5+Math.random()*4.5);let Ct=pe.tunnel||0;h.g.gain.setTargetAtTime((.03+se*.06)*(1+1.6*Ct),ne,.35),h.f.frequency.setTargetAtTime((250+se*500)*(1+.5*Ct),ne,.35),S.g.gain.setTargetAtTime(Ct*.07,ne,.4),a.gain.setTargetAtTime(.55+.6*Ct,ne,.4);let xt=.5+.5*Math.sin(ne*.55)*Math.sin(ne*.21+1);f.g.gain.setTargetAtTime(ce.coast*(.012+xt*.05),ne,.3),f.f.frequency.setTargetAtTime(400+xt*900,ne,.3);let N=1-Math.min(1,Me*1.4),T=1-fe,W=pe.dusk||0,Y=ce.snow||0,te=1-Y,ve={sparrow:fe*N*.22*(.3+ce.city*.5+ce.sakura+ce.country*.8+ce.coast*.2+(ce.mountain||0)*.5)*(1-Y*.8),uguisu:fe*N*ce.sakura*.06,crow:N*(W*.14+fe*(ce.city+ce.country+(ce.mountain||0)*1.5+Y*2.5)*.012),gull:fe*ce.coast*N*.16,frog:T*(ce.country*5+ce.sakura*.6+ce.coast*.3)*(1+Me*.6)*te,cricket:T*N*(1.6-ce.city*1.1+(ce.mountain||0)*.8)*te,bike:fe*N*ce.city*.014,bell:Y*.022+(ce.mountain||0)*.006},_e={sparrow:L,uguisu:U,crow:F,gull:z,frog:O,cricket:k,bike:ee,bell:H};for(let re in ve)ne<de[re]||(ve[re]>1e-4&&_e[re](ne+.05,.6+Math.random()*.4),de[re]=ne+Math.max(.12,Ze(ve[re]||1e-6)));let ie=.5+.5*Math.sin(ne*7)*Math.sin(ne*.4);p.g.gain.setTargetAtTime((ce.country+ce.sakura*.3)*fe*.006*ie*(1-(ce.snow||0)),ne,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function Yp(i){let t=new Ht(.075,.05),n=new Zt({color:16777215,side:hn}),s=new Di(t,n,420);s.frustumCulled=!1,s.count=0;let r=new me("#ffd0de"),a=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(_=>new me(_));for(let _=0;_<420;_++)s.setColorAt(_,r);let l=Array.from({length:420},()=>({p:new B(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),o=new $e,u=new cn,c=new Nn,h=new B(1,1,1),f=new B,p=90,g=new Float32Array(p*3),x=Array.from({length:p},()=>({p:new B(1e9,0,0),ph:Math.random()*6.28})),m=new gt;m.setAttribute("position",new kt(g,3));let d=new dr({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Ui,opacity:0}),v=new mo(m,d);v.frustumCulled=!1;let S=(_,y,b,A,M)=>{let E=M?8+Math.random()*42:-4+Math.random()*50,C=(Math.random()-.5)*40;_.p.set(y.x+b.x*E+A.x*C,y.y-1+Math.random()*9,y.z+b.z*E+A.z*C)};return{group:[s,v],shift(_,y){for(let b of l)b.p.x-=_,b.p.z-=y;for(let b of x)b.p.x-=_,b.p.z-=y},update(_,y,b,A,M,E,C,P,I,D=0){let w=Math.floor(420*Math.min(1,E*1.1+D*.55)),L=!1;s.count=w;for(let F=0;F<w;F++){let z=l[F];f.subVectors(z.p,b);let O=f.x*A.x+f.z*A.z,k=f.x*M.x+f.z*M.z;if(z.p.x>1e8||O<-6||O>55||Math.abs(k)>24||z.p.y<C-.5){S(z,b,A,M,z.p.x<1e8);let H=Math.random()*(E+D)<D;(H!==z.leaf||H)&&(z.leaf=H,s.setColorAt(F,H?a[Math.floor(Math.random()*a.length)]:r),L=!0)}z.p.y-=z.v*_,z.p.x+=Math.sin(y*.7+z.ph)*.4*_+.25*_,z.p.z+=Math.cos(y*.5+z.ph)*.3*_,c.set(y*z.sp+z.ph,y*z.sp*.7,z.ph),u.setFromEuler(c),h.setScalar(z.leaf?1.9:1),o.compose(z.p,u,h),s.setMatrixAt(F,o)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let U=P*I;if(d.opacity=U,v.visible=U>.01,v.visible){for(let F=0;F<p;F++){let z=x[F];f.subVectors(z.p,b);let O=f.x*A.x+f.z*A.z,k=f.x*M.x+f.z*M.z;if(z.p.x>1e8||O<-4||O>60||Math.abs(k)>30){let H=2+Math.random()*55,ee=(Math.random()-.5)*55;z.p.set(b.x+A.x*H+M.x*ee,C+.3+Math.random()*2.2,b.z+A.z*H+M.z*ee)}z.p.x+=Math.sin(y*.6+z.ph*3)*.3*_,z.p.y+=Math.sin(y*.9+z.ph)*.2*_,z.p.z+=Math.cos(y*.5+z.ph*2)*.3*_,g[F*3]=z.p.x,g[F*3+1]=z.p.y,g[F*3+2]=z.p.z}m.attributes.position.needsUpdate=!0}}}}var ut=new URLSearchParams(location.search),kr=ut.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();kr&&document.body.classList.add("embed");ut.has("shot")&&document.body.classList.add("shot");Md(ut.has("seed")?parseInt(ut.get("seed")):Math.random()*1e9|0);Ed(ut.get("env")||"city");var fn=i=>document.getElementById(i),Hr=i=>{let e=fn("loading");e&&(e.textContent=i)};async function N_(){await new Promise(K=>setTimeout(K,30));let i=fn("c"),e=new nc({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ut.get("q")||(kr||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?kr?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=zt,e.toneMapping=wo,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=As,e.debug.checkShaderErrors=ut.has("debug");let r=new ws;r.fog=new uo(13032946,.0019,700);let a=new dn(52,innerWidth/innerHeight,.5,7e3),l=new xr(16777215,3);l.castShadow=!0;let o=n==="low"?1024:n==="mid"?1536:2048;l.shadow.mapSize.set(o,o),ih(ut.has("pcf")?parseInt(ut.get("pcf")):1);let u=62,c=l.shadow.camera,h=new $e,f=new $e;Object.assign(c,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let p=new B(0,1,0),g=new B,x=new B,m=new B,d=new B(0,1,0),v=new B(0,150,60),S=new B,_=new B,y=null,b=0,A=0,M=0;l.shadow.updateMatrices=function(){c.position.copy(v),c.lookAt(S),c.updateMatrixWorld(),c.updateProjectionMatrix(),f.multiplyMatrices(c.matrixWorldInverse,h).multiply(c.matrixWorld),c.projectionMatrix.multiply(f),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),this._updateMatrix(c,this.matrix,this._frustum)};let E=!0;l.shadow.bias=-4e-4;let C=()=>{l.shadow.normalBias=ut.has("nb")?parseFloat(ut.get("nb")):1.5*2*u/l.shadow.mapSize.x};C();{let[K,Te]=(ut.get("graze")||"0,0.12").split(",").map(Number);Nd(K,Te)}r.add(l,l.target);let P=new xr(16777215,0);P.castShadow=n!=="low"&&!ut.has("nocarsh");{let K=ut.has("carsm")?parseInt(ut.get("carsm")):n==="high"?512:384;P.shadow.mapSize.set(K,K)}if(Object.assign(P.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),P.shadow.bias=-2e-4,P.shadow.normalBias=.025,r.add(P,P.target),P.castShadow){let K=l.shadow.getFrustum(),Te=P.shadow.getFrustum();for(let ye of[ct,po]){let be=ye.prototype.intersectsFrustum;ye.prototype.intersectsFrustum=function(Ye){return Ye===Te?this.userData.car===!0:(Ye!==K||this.userData.car!==!0)&&be.call(this,Ye)}}}let I=new bo(10799359,13154464,1.6);r.add(I),Hr("painting the town\u2026"),await new Promise(K=>setTimeout(K,10));let D=Zd();Kd(D);let w=Jd(e);sp(w.cells),qe.uTuftV.value.set(w.tuftV[0],w.tuftV[1]);let L=kd(D.textures(e),w.tex),U=Fd();U.update(e,0,0,0,0),Hr("painting the clouds\u2026"),await new Promise(K=>setTimeout(K,10)),rp(ut.has("leafd")?parseFloat(ut.get("leafd")):n==="high"?.72:.62),cp();let F=new cc,z=kp(),O=Hp(),k=new Mc(r,F,L,z,O),H=Ip();r.add(H);let ee=Dp(Lp(e));r.add(ee.group);let de=Np();r.add(de.group);let Ze=zp();r.add(Ze.mesh);let Ie=Gp();Ie.group.rotation.order="YXZ",r.add(Ie.group),Ie.group.traverse(K=>{K.userData.car=!0});let ze=Yp(L.glowTex);ze.group.forEach(K=>r.add(K));let $=ut.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Q=Xp(e,r,a,{msaa:$==="msaa"?n==="high"?4:2:0,fxaa:$==="fxaa"});qe.uReflTex.value=Q.refl.rt.texture;let Le=new B,He=new B,Ee=ut.get("refl")||"auto",et=Vd();r.add(et.group);let se=Gd();r.add(se.group);let ce=Up(ut),fe=Op(),pe=Fp();r.add(fe.mesh,pe.mesh);let ne=Bp();r.add(ne.mesh);let Me=ce.W.rain,je=.4,ht=5.5,Z={s:Math.max(100,parseFloat(ut.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Ot(parseFloat(ut.get("t"))||.4,0,.999),todPaused:ut.has("freeze"),dist:0,cam:{low:1,eye:2,top:3,film:4}[ut.get("cam")]??(kr?4:0)},it=!1;Hr("building the road\u2026"),await new Promise(K=>setTimeout(K,10));let G=kr?620:k.ahead;k.ahead=260;let Ct=ut.has("detail")?parseFloat(ut.get("detail")):380,xt=ut.has("farleaf")?parseFloat(ut.get("farleaf")):540;for(;k.update(Z.s,1e9););k.flush(),k.ahead=G;{Hr("preparing the light\u2026"),await new Promise(Ye=>setTimeout(Ye,10));let K=new Bt,Te=new gt;Te.setAttribute("position",new Ke([0,0,0,.01,0,0,0,.01,0],3)),Te.setAttribute("normal",new Ke([0,1,0,0,1,0,0,1,0],3)),Te.setAttribute("uv",new Ke([0,0,1,0,0,1],2)),Te.setAttribute("color",new Ke([1,1,1,1,1,1,1,1,1],3));let ye=[L.color,L.atlas,L.foliage,L.leaf,L.lamp,L.sig,L.sodium,L.decal,L.pool,z,O];for(let Ye=0;Ye<Ti.length;Ye++)ye.push(Wo([Ti[Ye]])),ye.push(Wo([Ti[Ye],Ti[(Ye+1)%Ti.length]]));for(let Ye of ye){let lt=new ct(Te,Ye);lt.castShadow=lt.receiveShadow=!0,lt.frustumCulled=!1,K.add(lt)}K.position.set(0,0,0),r.add(K),l.target.position.set(0,0,0),l.position.set(0,150,60);let be=[fe.mesh,pe.mesh,se.group,et.group,Ze.mesh].filter(Ye=>!Ye.visible);for(let Ye of be)Ye.visible=!0;e.setRenderTarget(Q.composer.readBuffer),e.compile(r,a),e.render(r,a),e.setRenderTarget(null);for(let Ye of be)Ye.visible=!1;r.remove(K),Te.dispose(),Q.bloom.enabled=Q.refl.enabled=!0,Q.composer.render(0),Q.bloom.enabled=Q.refl.enabled=!1}let N={k:Math.ceil((Z.s-Us)/Ns),phase:"idle",raise:1,decided:!1,t2:0},T={},W={},Y={},te=new B,ve=new B,_e=new B,ie=!1,re=new B,Se=new B,Xe=fn("spd"),De=fn("dist"),Ce=fn("clock"),We=fn("zone"),Je=fn("start"),rt=fn("hint"),V=null,we=null,ae=0,Ae=0;function Fe(K){!it||K===we||(we=K,We.querySelector(".jp").textContent=zo[K].jp,We.querySelector(".en").textContent=zo[K].en,We.classList.add("on"),clearTimeout(ae),ae=setTimeout(()=>We.classList.remove("on"),5200))}function he(){if(!it){if(it=!0,document.body.classList.remove("pre"),!ut.has("auto"))try{V=qp(),V&&V.ac.resume()}catch{V=null}Je.style.opacity=0,setTimeout(()=>Je.remove(),1500),kr||(rt.style.opacity=.75,setTimeout(()=>rt.style.opacity=0,9e3))}}let Be={};addEventListener("keydown",K=>{Be[K.key]=!0,(K.key==="m"||K.key==="M")&&vt(),(K.key==="t"||K.key==="T")&&Pn(),(K.key==="c"||K.key==="C")&&Qo(),(K.key==="r"||K.key==="R")&&Xr(),!it&&(K.key===" "||K.key==="Enter")&&he()}),addEventListener("keyup",K=>{Be[K.key]=!1});let Re=null;i.addEventListener("pointerdown",K=>{Re={id:K.pointerId,x:K.clientX,y:K.clientY,sy:K.clientY,sc:Z.mult}});let Et=K=>Ot(K.sc*Math.exp(-((K.y-K.sy)/innerHeight)*3.4),je,ht);addEventListener("pointermove",K=>{Re&&K.pointerId===Re.id&&(Re.x=K.clientX,Re.y=K.clientY,Z.mult=Et(Re))}),addEventListener("pointerup",()=>{Re=null}),addEventListener("pointercancel",()=>{Re=null}),i.addEventListener("touchstart",K=>{let Te=K.changedTouches[0];Re={id:"touch",x:Te.clientX,y:Te.clientY,sy:Te.clientY,sc:Z.mult},K.preventDefault()},{passive:!1}),i.addEventListener("touchmove",K=>{if(!Re)return;let Te=K.changedTouches[0];Re.x=Te.clientX,Re.y=Te.clientY,Z.mult=Et(Re),K.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{Re=null}),i.addEventListener("touchcancel",()=>{Re=null});function vt(){V&&(V.toggle(),fn("snd").style.opacity=V.muted?.4:1)}function Pn(){Z.todPaused=!Z.todPaused,fn("tim").style.opacity=Z.todPaused?.4:1}let In=[0,1,2,4],jo={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Qo(){Z.cam=In[(In.indexOf(Z.cam)+1)%In.length],fn("cam").textContent=jo[Z.cam]||"\u25D0",Z.cam===4&&Gr()}let Vr=["chase","side","road","crane","eye","side","road"],Pt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function Gr(){let K;do K=Vr[Math.floor(Math.random()*Vr.length)];while(K===Pt.last);{let Te=fi(Z.s+60);Te&&Math.abs(Z.s+60-Te.s)<Gt+120&&(K=Math.random()<.6?"chase":"eye")}if(Object.assign(Pt,{type:K,last:K,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),K==="road"){let Te=Z.s+40+Math.random()*18,ye=Tn(Te,"rw"),be=Math.random()<.6?-1:1,Ye=be*(ye+(be<0?.9:1.3)),lt=F.at(Te,{}),Mt=lt.y+Pr(Te,Ye,lt.y,ye);Pt.anchor={x:lt.x+lt.rx*Ye,y:Math.max(Mt,lt.y)+1.05,z:lt.z+lt.rz*Ye,s:Te}}ie=!1}let Wr={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Xr(){fn("wx").textContent=Wr[ce.cycle()]}fn("wx").textContent=Wr[ce.W.mode],fn("cam").textContent=jo[Z.cam]||"\u25D0",Z.cam===4&&Gr(),fn("wx").onclick=K=>{K.stopPropagation(),Xr()},fn("snd").onclick=K=>{K.stopPropagation(),vt()},fn("tim").onclick=K=>{K.stopPropagation(),Pn()},fn("cam").onclick=K=>{K.stopPropagation(),Qo()};let pi=0,qr=K=>{let Te=performance.now();Te-pi<120||(pi=Te,K.cancelable&&K.type!=="click"&&K.preventDefault(),he())};for(let K of["touchstart","pointerdown","mousedown","click"])Je.addEventListener(K,qr,{passive:!1});let ea=()=>{V&&V.ac.state!=="running"&&V.ac.resume()};for(let K of["touchend","click","keydown"])addEventListener(K,ea,{passive:!0});document.addEventListener("visibilitychange",()=>{V&&(document.hidden?V.ac.suspend():V.ac.resume())});let qi=!1,xs="",Yi=52,mi=0;function Yr(){let K=innerWidth,Te=innerHeight,ye=K/Te,be=K+"x"+Te+"@"+s;be!==xs&&(xs=be,e.setPixelRatio(s),e.setSize(K,Te,!1),Q.composer.setPixelRatio(s),Q.composer.setSize(K,Te),a.aspect=ye,Yi=ye>=1?52:Ot(2*Math.atan(Math.tan(34*Math.PI/180)/ye)*180/Math.PI,52,80),a.fov=Yi+mi,a.updateProjectionMatrix(),Q.grade.uniforms.uAspect.value=ye,Q.grade.uniforms.uTexel.value.set(1/Q.composer.readBuffer.width,1/Q.composer.readBuffer.height),qe.uReflRes.value.set(Q.composer.readBuffer.width,Q.composer.readBuffer.height))}addEventListener("resize",()=>{qi=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{qi=!0}),Yr();let vs=0;function ta(K=!0){if(s>1.05)s=Math.max(1,s-.25),qi=!0;else if(E)E=!1,Q.bloom.enabled=!1;else if(l.shadow.mapSize.x>1024)l.shadow.mapSize.set(1024,1024),C(),l.shadow.map&&(l.shadow.map.dispose(),l.shadow.map=null);else if(k.ahead>430)k.ahead=430;else return;if(vs++,K)try{localStorage.setItem("icd-q",String(vs))}catch{}}try{let K=parseInt(localStorage.getItem("icd-q")||"0");if(!ut.has("q"))for(let Te=0;Te<Math.min(K,6);Te++)ta(!1);vs=Math.max(vs,K||0)}catch{}let na=performance.now(),gn=0,ia=0,Zi=0,R=()=>1-ge.night,X=0,j=0,q=ut.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;q&&(q.gl=e.getContext(),q.tq=q.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let J={p:-1,a:new B,b:new B,next:5},xe={lat:0,lon:0,road:0,jolt:0,kick:0,u:Z.u,vu:0,v:0,s:Z.s,yaw:0},ke=[-2.5335,-1.4665,1.4665,2.5335],Ne=[1.12,-1.12];function Ve(K){requestAnimationFrame(Ve);let Te=performance.now();qi&&(qi=!1,Yr());let ye=Math.min(.05,Math.max(0,(K-na)/1e3));na=K,gn+=ye,Z.steer=0,(Be.ArrowLeft||Be.a||Be.A)&&(Z.steer=-1),(Be.ArrowRight||Be.d||Be.D)&&(Z.steer=1),(Be.ArrowUp||Be.w||Be.W)&&(Z.mult=Ot(Z.mult*Math.exp(ye*.9),je,ht)),(Be.ArrowDown||Be.s||Be.S)&&(Z.mult=Ot(Z.mult*Math.exp(-ye*.9),je,ht)),Re&&Math.abs(Re.y-Re.sy)<30&&(Z.steer=Re.x<innerWidth/2?-1:1),Z.steer&&(Z.lastInput=K,Z.uHome=Z.u);let be=Rr(N.k);Z.s-be>24&&(N.k++,be=Rr(N.k),Object.assign(N,{phase:"idle",raise:1,decided:!1}));let Ye=ko(be),lt=be-Z.s;Ye&&!N.decided&&lt<150&&(N.decided=!0,lt>75&&it&&Z.speed*Z.speed/2.5<lt-14&&(ut.has("xing")||Gn(N.k,99)<.8)&&(N.phase="warn",se.start(be,Gn(N.k,7)<.5?1:-1,16))),N.phase==="warn"?(N.raise=Math.max(0,N.raise-ye/6),se.st.cleared&&(N.phase="clear",N.t2=0)):N.phase==="clear"?(N.raise=Math.max(0,N.raise-ye/6),(N.t2+=ye)>2.2&&(N.phase="raise")):N.phase==="raise"&&(N.raise=Math.min(1,N.raise+ye/5),N.raise>=1&&(N.phase="idle"));let Mt=N.phase==="warn"||N.phase==="clear"||N.phase==="raise"&&N.raise<.25,_t=Tn(Z.s,"speed")*Z.mult*(it?1:.55);if(N.phase!=="idle"&&N.raise<.8&&lt>0){let Oe=lt-11.2,ot=Oe>0?Math.sqrt(2*1.25*Oe):0;_t=Math.min(_t,ot),Z.speed=Math.min(Z.speed,ot)}ut.has("park")&&(_t=0,Z.speed=0),Z.speed+=(_t-Z.speed)*Math.min(1,ye*.5),Z.s+=Z.speed*ye,Z.dist+=Z.speed*ye;let Yt=Tn(Z.s,"rw");Z.steer?Z.u=Ot(Z.u+Z.steer*ye*2.4,-Yt+.85,Yt-.85):K-Z.lastInput>3e3&&(Z.u+=(Ot(Z.uHome,-Yt+.85,Yt-.85)+Math.sin(gn/11)*.1-Z.u)*Math.min(1,ye*.9)),!Z.todPaused&&it&&(Z.tod=(Z.tod+ye/480*(ge.night>.5?1.7:1))%1),Rp(Z.tod),ce.update(ye);let Pe=ce.W.ov,Ut=ce.W.rain;Pp(Pe,Ut),Me=Ot(Me+(Ut>.25?ye/18:-ye/120),0,1);let dt=performance.now();k.update(Z.s,it?3.5:14);let wn=performance.now();if(F.at(Z.s,T),Math.abs(T.x-k.origin.x)>900||Math.abs(T.z-k.origin.z)>900){let Oe=Math.round(T.x)-k.origin.x,ot=Math.round(T.z)-k.origin.z;k.setOrigin(Math.round(T.x),Math.round(T.z)),te.x-=Oe,te.z-=ot,ve.x-=Oe,ve.z-=ot,ze.shift&&ze.shift(Oe,ot),ne.shift(Oe,ot)}let Xt=k.origin.x,Jt=k.origin.z,Ji=(F.at(Z.s+1.5,Y).y-F.at(Z.s-1.5,W).y)/3,bt=(Y.h-W.h)/3;if(Ie.group.position.set(T.x+T.rx*Z.u-Xt,T.y+.01,T.z+T.rz*Z.u-Jt),ye>0){let Oe=xe.vu+((Z.u-xe.u)/ye-xe.vu)*Math.min(1,ye*6),ot=(Oe-xe.vu)/ye;if(xe.u=Z.u,xe.vu=Oe,xe.lat=ot-Z.speed*Z.speed*bt,xe.lon+=((Z.speed-xe.v)/ye-xe.lon)*Math.min(1,ye*8),xe.v=Z.speed,xe.yaw=-Ot(Math.atan(Oe/Math.max(Z.speed,6))*.8,-.1,.1),xe.road=.004*Math.sin(Z.s*.48)+.003*Math.sin(Z.s*.86+1.3),xe.jolt=xe.kick=0,Ye)for(let at=0;at<4;at++)for(let tn=0;tn<2;tn++){let Jn=be+ke[at]-Ne[tn];if(xe.s<Jn&&Z.s>=Jn){let Ln=.05+Math.min(Z.speed,25)*.004;xe.jolt+=Ln,xe.kick+=tn?Ln*.9:-Ln*.9,V&&V.bump(.25+Math.min(Z.speed,25)/50)}}xe.s=Z.s}Ie.group.rotation.set(-Math.atan(Ji),T.h+xe.yaw,0);let wt=fi(Z.s);wt&&Math.abs(Z.s-wt.s)<700?(F.at(wt.s-qt,Y),qe.uTunA.value.set(Y.x-Xt,Y.y,Y.z-Jt),F.at(wt.s+qt,Y),qe.uTunB.value.set(Y.x-Xt,Y.y,Y.z-Jt),qe.uTunR.value=Tn(wt.s,"rw")+1.7):(qe.uTunA.value.set(0,-1e4,0),qe.uTunB.value.set(0,-1e4,0));let qn=wt&&Math.abs(Z.s+1-wt.s)<qt-1.5?1:0;j+=(qn-j)*Math.min(1,ye*(qn?1.6:.7)),qe.uCarPos.value.set(Ie.group.position.x+T.fx*1.7,Ie.group.position.y+.8,Ie.group.position.z+T.fz*1.7),qe.uCarFwd.value.set(T.fx,-.05,T.fz).normalize(),qe.uHead.value=qn,Ie.update(ye,Z.speed,Math.max(ge.night,j),Ut,xe),et.update(Ye&&lt>-24&&lt<700?mc(F,be):null,k.origin,N.raise,Mt,gn),se.update(ye,F,k.origin,Nt(.15,.8,ge.night),Tn(be,"rw")+3.2);let At=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ut.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}],xn=new B,Yn=6,Zr=Z.cam===2;if(Z.cam===4){Pt.t+=ye;{let at=fi(Z.s+30);at&&Math.abs(Z.s+30-at.s)<Gt+70&&Pt.type!=="chase"&&Pt.type!=="eye"&&(Pt.type="chase",Pt.t=0,Pt.dur=20,ie=!1)}(Pt.t>Pt.dur+(Pt.type==="road"?8:0)||Pt.type==="road"&&Pt.anchor&&Z.s>Pt.anchor.s+24)&&Gr();let Oe=Ie.group.position,ot=Pt.type;if(ot==="chase"||ot==="eye"){let at=At[ot==="eye"?2:0];Zr=ot==="eye",F.at(Z.s-at.back,W),F.at(Z.s+at.ahead,Y),_e.set(W.x+W.rx*Z.u*at.cu-Xt,W.y+at.up,W.z+W.rz*Z.u*at.cu-Jt),xn.set(Y.x+Y.rx*Z.u*at.lu-Xt,Y.y+at.lookY,Y.z+Y.rz*Z.u*at.lu-Jt)}else if(ot==="side"){F.at(Z.s+1.5,W);let at=Rt(Z.s),tn=at.city+at.sakura>.5,Jn=Tn(Z.s,"rw"),Ln=Pt.sideSign>0?Jn+(tn?1.45:3.4):-(Jn+1.5),_s=W.y+Pr(Z.s+1.5,Ln,W.y,Jn);_e.set(W.x+W.rx*Ln-Xt,Math.max(_s+1.55,W.y+1.25),W.z+W.rz*Ln-Jt),xn.set(Oe.x+T.fx*2.5,Oe.y+.9,Oe.z+T.fz*2.5),Yn=4}else if(ot==="road"&&Pt.anchor)_e.set(Pt.anchor.x-Xt,Pt.anchor.y,Pt.anchor.z-Jt),xn.set(Oe.x,Oe.y+.85,Oe.z),Yn=30;else{F.at(Z.s-20,W),F.at(Z.s+34,Y);let at=14+Math.min(Pt.t,20)*.35;_e.set(W.x+W.rx*Z.u*.4-Xt,W.y+at,W.z+W.rz*Z.u*.4-Jt),xn.set(Y.x-Xt,Y.y+1,Y.z-Jt),Yn=3}}else{let Oe=At[Z.cam];F.at(Z.s-Oe.back,W),F.at(Z.s+Oe.ahead,Y);let ot=Z.u*Oe.cu,at=ot+(Oe.side||0);_e.set(W.x+W.rx*at-Xt,W.y+Oe.up,W.z+W.rz*at-Jt),xn.set(Y.x+Y.rx*Z.u*Oe.lu-Xt,Y.y+Oe.lookY,Y.z+Y.rz*Z.u*Oe.lu-Jt)}Ie.group.visible=!Zr,Z.cam===3?a.up.set(T.fx,0,T.fz):a.up.set(0,1,0),ie||(te.copy(_e),ve.copy(xn),ie=!0);let wh=1+Math.max(0,Z.speed-12)/12;te.lerp(_e,1-Math.exp(-ye*Yn*wh)),ve.lerp(xn,1-Math.exp(-ye*Math.min(Yn,8)*wh));{let Oe=Z.cam===3?0:Math.min(Ot((Z.speed-16)*.22,0,11),Math.max(0,84-Yi));mi+=(Oe-mi)*Math.min(1,ye*1.5),Math.abs(a.fov-(Yi+mi))>.02&&(a.fov=Yi+mi,a.updateProjectionMatrix())}a.position.copy(te),a.lookAt(ve),ut.has("yaw")&&a.rotateY(parseFloat(ut.get("yaw"))*Math.PI/180),ut.has("pitch")&&a.rotateX(parseFloat(ut.get("pitch"))*Math.PI/180),re.set(T.fx,0,T.fz),Se.set(T.rx,0,T.rz);let an=Rt(Z.s);l.color.copy(ge.sunCol),l.intensity=ge.sunI;{let Oe=ge.lightDir;if(p.angleTo(Oe)>.1){let Gs=0;if(it&&!Z.todPaused)for(let ys=1;ys<=60&&!(bh(Z.tod+ys*.001,_).angleTo(Oe)>.09);ys++)Gs=ys;bh(Z.tod+Gs*.001,p),b=A=0}g.crossVectors(d,p).normalize(),x.crossVectors(p,g),m.set(Ie.group.position.x+T.fx*26,Ie.group.position.y,Ie.group.position.z+T.fz*26),l.target.position.copy(m),l.position.copy(m).addScaledVector(Oe,200);let ot=2*u/l.shadow.mapSize.x,at=p.x/p.y-Oe.x/Oe.y,tn=p.z/p.y-Oe.z/Oe.y;ot!==M&&(M=ot,b=A=0);{let Gs=Math.round(Ie.group.position.y);if(y===null)y=Gs;else if(Math.abs(Ie.group.position.y-y)>3){let ys=Gs-y;b-=ys*(at*g.x+tn*g.z),A-=ys*(at*x.x+tn*x.z),y=Gs}}let Jn=k.origin.x,Ln=k.origin.z,_s=m.dot(g)+Jn*g.x+Ln*g.z-b,Ph=m.dot(x)+Jn*x.x+Ln*x.z-A;m.addScaledVector(g,Math.round(_s/ot)*ot-_s).addScaledVector(x,Math.round(Ph/ot)*ot-Ph),S.copy(m),v.copy(m).addScaledVector(p,200),h.set(1,at,0,-y*at,0,1,0,0,0,tn,1,-y*tn,0,0,0,1)}P.target.position.set(Ie.group.position.x,Ie.group.position.y+.9,Ie.group.position.z),P.position.copy(P.target.position).addScaledVector(ge.lightDir,12),I.color.copy(ge.hemiSky),I.groundColor.copy(ge.hemiGround),I.intensity=ge.hemiI,r.fog.color.copy(ge.fog);let Ah=(an.city*.0022+an.sakura*.0019+an.coast*.0011+an.country*.0014+an.mountain*.0017+an.snow*.0021)*(1+ge.night*.25);r.fog.near=Ah*(1+.55*Pe+.45*Ut),r.fog.far=k.ahead*.92,qe.uSkyHor.value.copy(ge.horizon),qe.uSkyZen.value.copy(ge.zenith),qe.uTime.value=gn,qe.uWet.value=Me*(1-an.snow);{let Oe=qe.uWet.value>.04&&n!=="low"&&j<.5&&Ee!=="0";if(Q.refl.enabled=Oe&&Ee!=="taps",qe.uReflOn.value=Oe&&Ee!=="copy"?1:0,Oe){a.getWorldDirection(He),He.y=0,He.normalize(),Le.copy(a.position).addScaledVector(He,1e4).project(a),qe.uHorizon.value=Le.y*.5+.5;let ot=Math.max(.5,a.position.y-Ie.group.position.y);qe.uReflK.value=Ot(1-2*ot/(5+ot),.05,1)}}qe.uOrigin.value.set(k.origin.x,k.origin.z),qe.uWind.value=1+.8*Ut,qe.uCloudSh.value=(1-Pe)*Nt(.04,.3,ge.sunEl)*(1-ge.night),qe.uCloudSh.value>.001&&U.update(e,a.position.x,a.position.z,k.origin.x,k.origin.z);let Zn=H.material.uniforms;if(Zn.uNight.value=ge.night,Zn.uWarm.value=ge.warm,Zn.uTime.value=gn,Zn.uCirrusCol.value.copy(ge.cLit).lerp(ge.horizon,.25),Zn.uCirrus.value=.6*(1-Pe)*(1-.65*Nt(.4,.9,ge.night)),Zn.uOvercast.value=Pe,Zn.uMilky.value=Nt(.55,.95,ge.night)*(1-Pe),ge.night>.65&&Pe<.3&&J.p<0&&(J.next-=ye)<0){let Oe=Math.atan2(T.fx,T.fz)+(Math.random()-.5)*1.5,ot=.45+Math.random()*.6,at=.22+Math.random()*.2,tn=(Math.random()-.5)*.6,Jn=(Ln,_s)=>new B(Math.cos(Ln)*Math.sin(_s),Math.sin(Ln),Math.cos(Ln)*Math.cos(_s));J.a.copy(Jn(ot,Oe)),J.b.copy(Jn(ot-at,Oe+tn)),J.p=0,J.next=ut.has("meteors")?1:6+Math.random()*20}J.p>=0&&(J.p+=ye/.85,J.p>1.3&&(J.p=-1)),Zn.uMetP.value=J.p,Zn.uMetA.value.copy(J.a),Zn.uMetB.value.copy(J.b),Zn.uDeckLit.value.copy(ge.horizon).lerp(ge.cLit,.35),Zn.uDeckDark.value.copy(ge.zenith).lerp(ge.horizon,.25).multiplyScalar(.82),H.position.copy(a.position),ee.update(a.position,ye),de.update(a.position,Math.max(an.snow,Rt(Z.s+600).snow*.7));let sa=0;for(let Oe of[-150,0,250,500,800])sa=Math.max(sa,Rt(Z.s+Oe).coast);Ze.mesh.visible=sa>.001,Ze.update(a.position,gn,Ah*.8,Nt(0,.35,sa)),O.uniforms.uTime.value=gn,O.uniforms.uFogD.value=r.fog.near,O.uniforms.uNight.value=ge.night,O.uniforms.uSpecK.value=1-ge.overcast*.85,qe.uSunDir.value.copy(ge.lightDir),qe.uSunCol.value.copy(ge.sunCol),z.uniforms.uTime.value=gn,z.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*R());let ni=Nt(.15,.8,ge.night);L.atlas.emissiveIntensity=.1+ni*1.05,L.lamp.color.setRGB(.85,.85,.8).lerp(new me(3.6,2.8,1.8),ni),L.pool.opacity=ni*.42*(1+.8*Me),L.pool.visible=L.pool.opacity>.003,k.lod(Z.s,Ct,ni>.15,xt),qe.uNight.value=ni,Q.bloom.strength=Tt(.32,.55,ni),Q.bloom.threshold=Tt(1.35,.95,ni),Q.bloom.radius=Tt(.55,.35,ni);{let Oe=Math.max(ni,j,Nt(.25,.6,ge.warm)*(1-Pe));Q.bloom.enabled=E&&Oe>.02,Q.bloom.strength*=Math.min(1,Oe*4)}e.toneMappingExposure=Tt(1,1.15,ni)*(1+.35*j),_e.copy(a.position).addScaledVector(ge.sunDir,1e3).project(a);let Hs=Q.grade.uniforms,Zp=_e.z<1?1:0,Jp=Math.max(Math.abs(_e.x),Math.abs(_e.y));Hs.uSun.value.set(_e.x*.5+.5,_e.y*.5+.5),Hs.uSunVis.value=Zp*(1-Nt(1,1.9,Jp))*Nt(-.02,.15,ge.sunEl)*(1-ge.night)*(1-Pe)*(1-j),Hs.uSat.value=1.1-.12*Pe,Hs.uDay.value=R(),Hs.uWarm.value=ge.warm,Hs.uTime.value=gn,fe.update(a.position,gn,Ut*(1-j)*(1-an.snow),R()),pe.update(a.position,gn,an.snow*(.3+.7*Pe)*(1-j),R()),ne.setFog(r.fog.near),ne.update(ye,gn,a.position,re,Se,an,R(),Ut,Ie.group.position);let $p=performance.now();ze.update(ye,gn,a.position,re,Se,an.sakura*(1-j),T.y,ni,(an.country+an.sakura*.4)*(1-Ut)*(1-j),an.mountain*(1-j));let Kp=performance.now();if(V){F.at(be,Y);let Oe=Math.hypot(Y.x-k.origin.x-a.position.x,Y.z-k.origin.z-a.position.z),ot=se.st.active?se.group.position.distanceTo(a.position):1e9,at=Z.speed/15;V.update(at<1.5?at:1.5+(at-1.5)*.4,an,R(),{rush:Ot((Z.speed-25)/40,0,1),bell:Mt?Math.pow(Ot(1-Oe/260,0,1),1.5):0,train:Math.pow(Ot(1-ot/230,0,1),2),rain:Ut*(1-j)*(1-an.snow),roof:Z.cam!==2,tunnel:j,water:(()=>{let tn=Fi(Z.s);return Math.max(tn?1-Nt(12,150,Math.abs(Z.s-tn.s)):0,an.mountain*.45)})(),dusk:ge.warm*(Z.tod>.5?1:.3)})}Fe(Vt(Z.s+40)),q&&(e.info.autoReset=!1,e.info.reset());let ra=null;q&&q.tq&&(ra=q.gl.createQuery(),q.gl.beginQuery(q.tq.TIME_ELAPSED_EXT,ra));let Rh=performance.now();Q.composer.render(ye);let Ch=performance.now();if(ra){let Oe=q.gl;for(Oe.endQuery(q.tq.TIME_ELAPSED_EXT),q.pend.push(ra);q.pend.length&&Oe.getQueryParameter(q.pend[0],Oe.QUERY_RESULT_AVAILABLE);){let ot=q.pend.shift(),at=Oe.getQueryParameter(ot,Oe.QUERY_RESULT);Oe.deleteQuery(ot),Oe.getParameter(q.tq.GPU_DISJOINT_EXT)||(q.gpu=at/1e6,q.gpuN++,q.gpuSum+=q.gpu,q.gpu>q.gpuMax&&(q.gpuMax=q.gpu))}}let Vs=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Vs.world=Vs.world*.95+(wn-dt)*.05,Vs.parts=Vs.parts*.95+(Kp-$p)*.05,Vs.render=Vs.render*.95+(Ch-Rh)*.05,X=X*.95+(performance.now()-Te)*.05,window.__ft=X,q){let Oe=e.info,ot=performance.now()-Te,at={t:+gn.toFixed(2),s:Math.round(Z.s),total:+ot.toFixed(1),world:+(wn-dt).toFixed(1),render:+(Ch-Rh).toFixed(1),gpu:+(q.gpu||0).toFixed(1),progs:Oe.programs.length-q.progs,geos:Oe.memory.geometries-q.geos,tex:Oe.memory.textures-q.tex,calls:Oe.render.calls,tris:Oe.render.triangles};at.progs>0&&it&&(at.newProgs=Oe.programs.slice(-at.progs).map(tn=>(tn.name||"")+":"+String(tn.cacheKey).slice(0,60))),q.progs=Oe.programs.length,q.geos=Oe.memory.geometries,q.tex=Oe.memory.textures,q.frames++,q.sum+=ot,ot>q.max&&(q.max=ot),ot>12&&it&&q.spikes.push(at),q.last=at}if((Ae+=ye)>.25){Ae=0,Xe.textContent=Math.round(Z.speed*3.6),De.textContent=(Z.dist/1e3).toFixed(1);let Oe=Math.floor(Z.tod*1440);Ce.textContent=`${String(Math.floor(Oe/60)).padStart(2,"0")}:${String(Oe%60).padStart(2,"0")}`}ia++,it&&ia>150&&ye>.03?Zi+=ye:Zi=Math.max(0,Zi-ye*.5),Zi>3&&!ut.has("q")&&(Zi=0,ta())}window.__dbg={renderer:e,st:Z,scene:r,camera:a,world:k,TOD:ge,X:N,train:se,weather:ce,U:qe,birds:ne,cine:Pt,post:Q,car:Ie,sun:l,M:L,clouds:ee,sky:H,mountains:de,shadowDir:p,CM:xe},Hr(""),Je.classList.add("ready"),ut.has("auto")&&he(),requestAnimationFrame(Ve)}N_().catch(i=>{console.error(i),Hr("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
