var mh=0,kc=1,gh=2;var gs=1,xh=2,nr=3,Yi=0,an=1,nn=2,En=0,ir=1,Si=2,Hc=3,Vc=4,vh=5;var xs=100,_h=101,yh=102,Mh=103,bh=104,Sh=200,Th=201,Eh=202,wh=203,Gc=204,Wc=205,Ah=206,Rh=207,Ch=208,Ph=209,Ih=210,Lh=211,Dh=212,Nh=213,Uh=214,da=0,pa=1,ma=2,qs=3,ga=4,xa=5,va=6,_a=7,Xc=0,Fh=1,Bh=2,Kn=0,io=1,so=2,ro=3,oo=4,ao=5,lo=6,vs=7;var qc=300,Zi=301,_s=302,Ga=303,Wa=304,co=306,ya=1e3,ri=1001,Ma=1002,He=1003,Oh=1004;var uo=1005;var Xe=1006,Xa=1007;var zn=1008;var wn=1009,Yc=1010,Zc=1011,sr=1012,qa=1013,Qn=1014,kn=1015,Ze=1016,Ya=1017,Za=1018,rr=1020,Jc=35902,$c=35899,Kc=1021,Qc=1022,Hn=1023,oi=1026,Ji=1027,or=1028,Ja=1029,$i=1030,$a=1031;var Ka=1033,ho=33776,fo=33777,po=33778,mo=33779,Qa=35840,ja=35841,tl=35842,el=35843,nl=36196,il=37492,sl=37496,rl=37488,ol=37489,go=37490,al=37491,ll=37808,cl=37809,ul=37810,hl=37811,fl=37812,dl=37813,pl=37814,ml=37815,gl=37816,xl=37817,vl=37818,_l=37819,yl=37820,Ml=37821,bl=36492,Sl=36494,Tl=36495,El=36283,wl=36284,xo=36285,Al=36286;var Dr=2300,ba=2301,ha=2302,Ic=2303,Lc=2400,Dc=2401,Nc=2402;var zh=3200;var Rl=0,kh=1,Ti="",Pe="srgb",Nr="srgb-linear",Ur="linear",pe="srgb";var fa=7680;var Hh=519,Vh=512,Gh=513,Wh=514,Cl=515,Xh=516,qh=517,Pl=518,Yh=519,Zh=35044;var jc="300 es",Jn=2e3,Ys=2001;function qd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){let i=Fr("canvas");return i.style.display="block",i}var Wu={},Zs=null;function tu(...i){let t="THREE."+i.shift();Zs?Zs("log",t,...i):console.log(t,...i)}function $h(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=$h(i);let t="THREE."+i.shift();if(Zs)Zs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=$h(i);let t="THREE."+i.shift();if(Zs)Zs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){let t=i.join(" ");t in Wu||(Wu[t]=!0,Kt(...i))}function Kh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Qh={[da]:pa,[ma]:va,[ga]:_a,[qs]:xa,[pa]:da,[va]:ma,[_a]:ga,[xa]:qs},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var lc=Math.PI/180,Br=180/Math.PI;function vo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function Zd(i,t){return(i%t+t)%t}function cc(i,t,e){return(1-e)*i+e*t}function wr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ru=class ru{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ru.prototype.isVector2=!0;var qt=ru,tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||o!==f||c!==p||u!==g){let m=o*f+c*p+u*g+h*x;m<0&&(f=-f,p=-p,g=-g,x=-x,m=-m);let d=1-l;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);d=Math.sin(d*v)/T,l=Math.sin(l*v)/T,o=o*d+f*l,c=c*d+p*l,u=u*d+g*l,h=h*d+x*l}else{o=o*d+f*l,c=c*d+p*l,u=u*d+g*l,h=h*d+x*l;let v=1/Math.sqrt(o*o+c*c+u*u+h*h);o*=v,c*=v,u*=v,h*=v}}t[e]=o,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],o=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=l*g+u*h+o*p-c*f,t[e+1]=o*g+u*f+c*h-l*p,t[e+2]=c*g+u*p+l*f-o*h,t[e+3]=u*g-l*h-o*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,c=l(n/2),u=l(s/2),h=l(r/2),f=o(n/2),p=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],c=e[2],u=e[6],h=e[10],f=n+l+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-o)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>l&&n>h){let p=2*Math.sqrt(1+n-l-h);this._w=(u-o)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(l>h){let p=2*Math.sqrt(1+l-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(o+u)/p}else{let p=2*Math.sqrt(1+h-n-l);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,c=e._z,u=e._w;return this._x=n*u+a*l+s*c-r*o,this._y=s*u+a*o+r*l-n*c,this._z=r*u+a*c+n*o-s*l,this._w=a*u-n*l-s*o-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){let c=Math.acos(l),u=Math.sin(c);o=Math.sin(o*c)/u,e=Math.sin(e*c)/u,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ou=class ou{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,c=2*(a*s-l*n),u=2*(l*e-r*s),h=2*(r*n-a*e);return this.x=e+o*c+a*h-l*u,this.y=n+o*u+l*c-r*h,this.z=s+o*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ou.prototype.isVector3=!0;var z=ou,uc=new z,Xu=new tn,au=class au{constructor(t,e,n,s,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c)}set(t,e,n,s,r,a,l,o,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=o,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],v=s[1],T=s[4],M=s[7],_=s[2],b=s[5],R=s[8];return r[0]=a*x+l*v+o*_,r[3]=a*m+l*T+o*b,r[6]=a*d+l*M+o*R,r[1]=c*x+u*v+h*_,r[4]=c*m+u*T+h*b,r[7]=c*d+u*M+h*R,r[2]=f*x+p*v+g*_,r[5]=f*m+p*T+g*b,r[8]=f*d+p*M+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],u=t[8];return e*a*u-e*l*c-n*r*u+n*l*o+s*r*c-s*a*o}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],u=t[8],h=u*a-l*c,f=l*o-u*r,p=c*r-a*o,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(l*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*o)*x,t[5]=(s*r-l*e)*x,t[6]=p*x,t[7]=(n*o-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let o=Math.cos(r),c=Math.sin(r);return this.set(n*o,n*c,-n*(o*a+c*l)+a+t,-s*c,s*o,-s*(-c*a+o*l)+l+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hc.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;var te=au,hc=new te,qu=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){let i={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Nr]:{primaries:t,whitePoint:n,transfer:Ur,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var re=Jd();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,Sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Is===void 0&&(Is=Fr("canvas")),Is.width=t.width,Is.height=t.height;let s=Is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$d=0,Js=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(fc(s[a].image)):r.push(fc(s[a]))}else r=fc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Kd=0,dc=new z,vn=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=Xe,a=zn,l=Hn,o=wn,c=i.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=vo(),this.name="",this.source=new Js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ya:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ya:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=qc;vn.DEFAULT_ANISOTROPY=1;var lu=class lu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,o=t.elements,c=o[0],u=o[4],h=o[8],f=o[1],p=o[5],g=o[9],x=o[2],m=o[6],d=o[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(p+1)/2,_=(d+1)/2,b=(u+f)/4,R=(h+x)/4,y=(g+m)/4;return T>M&&T>_?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=R/n):M>_?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=y/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=R/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lu.prototype.isVector4=!0;var Ee=lu,Ta=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new vn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Js(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Re=class extends Ta{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Or=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ea=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Va=class Va{constructor(t,e,n,s,r,a,l,o,c,u,h,f,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c,u,h,f,p,g,x,m)}set(t,e,n,s,r,a,l,o,c,u,h,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=l,d[13]=o,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Va().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),a=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*h,g=l*u,x=l*h;e[0]=o*u,e[4]=-o*h,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-l*o,e[2]=x-f*c,e[6]=g+p*c,e[10]=a*o}else if(t.order==="YXZ"){let f=o*u,p=o*h,g=c*u,x=c*h;e[0]=f+x*l,e[4]=g*l-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-l,e[2]=p*l-g,e[6]=x+f*l,e[10]=a*o}else if(t.order==="ZXY"){let f=o*u,p=o*h,g=c*u,x=c*h;e[0]=f-x*l,e[4]=-a*h,e[8]=g+p*l,e[1]=p+g*l,e[5]=a*u,e[9]=x-f*l,e[2]=-a*c,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){let f=a*u,p=a*h,g=l*u,x=l*h;e[0]=o*u,e[4]=g*c-p,e[8]=f*c+x,e[1]=o*h,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){let f=a*o,p=a*c,g=l*o,x=l*c;e[0]=o*u,e[4]=x-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-l*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-x*h}else if(t.order==="XZY"){let f=a*o,p=a*c,g=l*o,x=l*c;e[0]=o*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=l*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qd,t,jd)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Fi.crossVectors(n,Cn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Fi.crossVectors(n,Cn)),Fi.normalize(),Go.crossVectors(Cn,Fi),s[0]=Fi.x,s[4]=Go.x,s[8]=Cn.x,s[1]=Fi.y,s[5]=Go.y,s[9]=Cn.y,s[2]=Fi.z,s[6]=Go.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],T=n[7],M=n[11],_=n[15],b=s[0],R=s[4],y=s[8],S=s[12],C=s[1],D=s[5],P=s[9],L=s[13],w=s[2],I=s[6],O=s[10],N=s[14],B=s[3],U=s[7],k=s[11],W=s[15];return r[0]=a*b+l*C+o*w+c*B,r[4]=a*R+l*D+o*I+c*U,r[8]=a*y+l*P+o*O+c*k,r[12]=a*S+l*L+o*N+c*W,r[1]=u*b+h*C+f*w+p*B,r[5]=u*R+h*D+f*I+p*U,r[9]=u*y+h*P+f*O+p*k,r[13]=u*S+h*L+f*N+p*W,r[2]=g*b+x*C+m*w+d*B,r[6]=g*R+x*D+m*I+d*U,r[10]=g*y+x*P+m*O+d*k,r[14]=g*S+x*L+m*N+d*W,r[3]=v*b+T*C+M*w+_*B,r[7]=v*R+T*D+M*I+_*U,r[11]=v*y+T*P+M*O+_*k,r[15]=v*S+T*L+M*N+_*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15],v=o*p-c*f,T=l*p-c*h,M=l*f-o*h,_=a*p-c*u,b=a*f-o*u,R=a*h-l*u;return e*(x*v-m*T+d*M)-n*(g*v-m*_+d*b)+s*(g*T-x*_+d*R)-r*(g*M-x*b+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],c=t[6],u=t[10];return e*(a*u-l*c)-n*(r*u-l*o)+s*(r*c-a*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],v=e*l-n*a,T=e*o-s*a,M=e*c-r*a,_=n*o-s*l,b=n*c-r*l,R=s*c-r*o,y=u*x-h*g,S=u*m-f*g,C=u*d-p*g,D=h*m-f*x,P=h*d-p*x,L=f*d-p*m,w=v*L-T*P+M*D+_*C-b*S+R*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/w;return t[0]=(l*L-o*P+c*D)*I,t[1]=(s*P-n*L-r*D)*I,t[2]=(x*R-m*b+d*_)*I,t[3]=(f*b-h*R-p*_)*I,t[4]=(o*C-a*L-c*S)*I,t[5]=(e*L-s*C+r*S)*I,t[6]=(m*M-g*R-d*T)*I,t[7]=(u*R-f*M+p*T)*I,t[8]=(a*P-l*C+c*y)*I,t[9]=(n*C-e*P-r*y)*I,t[10]=(g*b-x*M+d*v)*I,t[11]=(h*M-u*b-p*v)*I,t[12]=(l*S-a*D-o*y)*I,t[13]=(e*D-n*S+s*y)*I,t[14]=(x*T-g*_-m*v)*I,t[15]=(u*_-h*T+f*v)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,c=r*a,u=r*l;return this.set(c*a+n,c*l-s*o,c*o+s*l,0,c*l+s*o,u*l+n,u*o-s*a,0,c*o-s*l,u*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,c=r+r,u=a+a,h=l+l,f=r*c,p=r*u,g=r*h,x=a*u,m=a*h,d=l*h,v=o*c,T=o*u,M=o*h,_=n.x,b=n.y,R=n.z;return s[0]=(1-(x+d))*_,s[1]=(p+M)*_,s[2]=(g-T)*_,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(f+d))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+T)*R,s[9]=(m-v)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ls.set(s[0],s[1],s[2]).length(),l=Ls.set(s[4],s[5],s[6]).length(),o=Ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Xn.copy(this);let c=1/a,u=1/l,h=1/o;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,e.setFromRotationMatrix(Xn),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=Jn,o=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,x;if(o)g=r/(a-r),x=a*r/(a-r);else if(l===Jn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===Ys)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Jn,o=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,x;if(o)g=1/(a-r),x=a/(a-r);else if(l===Jn)g=-2/(a-r),x=-(a+r)/(a-r);else if(l===Ys)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Va.prototype.isMatrix4=!0;var Zt=Va,Ls=new z,Xn=new Zt,Qd=new z(0,0,0),jd=new z(1,1,1),Fi=new z,Go=new z,Cn=new z,Zu=new Zt,Ju=new tn,Sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tp=0,$u=new z,Ds=new tn,pi=new Zt,Wo=new z,Ar=new z,ep=new z,np=new tn,Ku=new z(1,0,0),Qu=new z(0,1,0),ju=new z(0,0,1),th={type:"added"},ip={type:"removed"},Ns={type:"childadded",child:null},pc={type:"childremoved",child:null},qe=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Sn,n=new tn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new te}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Ku,t)}rotateY(t){return this.rotateOnAxis(Qu,t)}rotateZ(t){return this.rotateOnAxis(ju,t)}translateOnAxis(t,e){return $u.copy(t).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ku,t)}translateY(t){return this.translateOnAxis(Qu,t)}translateZ(t){return this.translateOnAxis(ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ar,Wo,this.up):pi.lookAt(Wo,Ar,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(pi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(th),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ip),pc.child=t,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(th),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){let h=o[c];r(t.shapes,h)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){let l=a(t.geometries),o=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){let o=[];for(let c in l){let u=l[c];delete u.metadata,o.push(u)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qe.DEFAULT_UP=new z(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ke=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},sp={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function mc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Zd(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=mc(a,r,t+1/3),this.g=mc(a,r,t),this.b=mc(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return re.workingToColorSpace(fn.copy(this),t),Math.round(le(fn.r*255,0,255))*65536+Math.round(le(fn.g*255,0,255))*256+Math.round(le(fn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(fn.copy(this),e);let n=fn.r,s=fn.g,r=fn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,c,u=(l+a)/2;if(l===a)o=0,c=0;else{let h=a-l;switch(c=u<=.5?h/(a+l):h/(2-a-l),a){case n:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-n)/h+2;break;case r:o=(n-s)/h+4;break}o/=6}return t.h=o,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Pe){re.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,s=fn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Xo);let n=cc(Bi.h,Xo.h,e),s=cc(Bi.s,Xo.s,e),r=cc(Bi.l,Xo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new mt;mt.NAMES=jh;var kr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new mt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ds=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qn=new z,mi=new z,gc=new z,gi=new z,Us=new z,Fs=new z,eh=new z,xc=new z,vc=new z,_c=new z,yc=new Ee,Mc=new Ee,bc=new Ee,Hi=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qn.subVectors(t,e),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qn.subVectors(s,e),mi.subVectors(n,e),gc.subVectors(t,e);let a=qn.dot(qn),l=qn.dot(mi),o=qn.dot(gc),c=mi.dot(mi),u=mi.dot(gc),h=a*c-l*l;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*o-l*u)*f,g=(a*u-l*o)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,gi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,gi.x),o.addScaledVector(a,gi.y),o.addScaledVector(l,gi.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return yc.setScalar(0),Mc.setScalar(0),bc.setScalar(0),yc.fromBufferAttribute(t,e),Mc.fromBufferAttribute(t,n),bc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(yc,r.x),a.addScaledVector(Mc,r.y),a.addScaledVector(bc,r.z),a}static isFrontFacing(t,e,n,s){return qn.subVectors(n,e),mi.subVectors(t,e),qn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),qn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Us.subVectors(s,n),Fs.subVectors(r,n),xc.subVectors(t,n);let o=Us.dot(xc),c=Fs.dot(xc);if(o<=0&&c<=0)return e.copy(n);vc.subVectors(t,s);let u=Us.dot(vc),h=Fs.dot(vc);if(u>=0&&h<=u)return e.copy(s);let f=o*h-u*c;if(f<=0&&o>=0&&u<=0)return a=o/(o-u),e.copy(n).addScaledVector(Us,a);_c.subVectors(t,r);let p=Us.dot(_c),g=Fs.dot(_c);if(g>=0&&p<=g)return e.copy(r);let x=p*c-o*g;if(x<=0&&c>=0&&g<=0)return l=c/(c-g),e.copy(n).addScaledVector(Fs,l);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return eh.subVectors(r,s),l=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(eh,l);let d=1/(m+x+f);return a=x*d,l=f*d,e.copy(n).addScaledVector(Us,a).addScaledVector(Fs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},li=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox)),qo.applyMatrix4(t.matrixWorld),this.union(qo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),Yo.subVectors(this.max,Rr),Bs.subVectors(t.a,Rr),Os.subVectors(t.b,Rr),zs.subVectors(t.c,Rr),Oi.subVectors(Os,Bs),zi.subVectors(zs,Os),ls.subVectors(Bs,zs);let e=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-ls.z,ls.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,ls.z,0,-ls.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-ls.y,ls.x,0];return!Sc(e,Bs,Os,zs,Yo)||(e=[1,0,0,0,1,0,0,0,1],!Sc(e,Bs,Os,zs,Yo))?!1:(Zo.crossVectors(Oi,zi),e=[Zo.x,Zo.y,Zo.z],Sc(e,Bs,Os,zs,Yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new z,new z,new z,new z,new z,new z,new z,new z],Yn=new z,qo=new li,Bs=new z,Os=new z,zs=new z,Oi=new z,zi=new z,ls=new z,Rr=new z,Yo=new z,Zo=new z,cs=new z;function Sc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){cs.fromArray(i,r);let l=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),o=t.dot(cs),c=e.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>l)return!1}return!0}var ze=new z,Jo=new qt,rp=0,on=class extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jo.fromBufferAttribute(this,e),Jo.applyMatrix3(t),this.setXY(e,Jo.x,Jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),s=bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),s=bn(s,this.array),r=bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hr=class extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}},op=new li,Cr=new z,Tc=new z,yi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):op.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(Tc)),this.expandByPoint(Cr.copy(t.center).sub(Tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ap=0,On=new Zt,Ec=new qe,ks=new z,Pn=new li,Pr=new li,je=new z,me=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qd(t)?Vr:Hr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return Ec.lookAt(t),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Pr.setFromBufferAttribute(l),this.morphTargetsRelative?(je.addVectors(Pn.min,Pr.min),Pn.expandByPoint(je),je.addVectors(Pn.max,Pr.max),Pn.expandByPoint(je)):(Pn.expandByPoint(Pr.min),Pn.expandByPoint(Pr.max))}Pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],o=this.morphTargetsRelative;for(let c=0,u=l.count;c<u;c++)je.fromBufferAttribute(l,c),o&&(ks.fromBufferAttribute(t,c),je.add(ks)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[];for(let y=0;y<n.count;y++)l[y]=new z,o[y]=new z;let c=new z,u=new z,h=new z,f=new qt,p=new qt,g=new qt,x=new z,m=new z;function d(y,S,C){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,C),f.fromBufferAttribute(r,y),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,C),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),l[y].add(x),l[S].add(x),l[C].add(x),o[y].add(m),o[S].add(m),o[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,S=v.length;y<S;++y){let C=v[y],D=C.start,P=C.count;for(let L=D,w=D+P;L<w;L+=3)d(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let T=new z,M=new z,_=new z,b=new z;function R(y){_.fromBufferAttribute(s,y),b.copy(_);let S=l[y];T.copy(S),T.sub(_.multiplyScalar(_.dot(S))).normalize(),M.crossVectors(b,S);let D=M.dot(o[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,D)}for(let y=0,S=v.length;y<S;++y){let C=v[y],D=C.start,P=C.count;for(let L=D,w=D+P;L<w;L+=3)R(t.getX(L+0)),R(t.getX(L+1)),R(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,a=new z,l=new z,o=new z,c=new z,u=new z,h=new z;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),l.add(u),o.add(u),c.add(u),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(l,o){let c=l.array,u=l.itemSize,h=l.normalized,f=new c.constructor(o.length*u),p=0,g=0;for(let x=0,m=o.length;x<m;x++){l.isInterleavedBufferAttribute?p=o[x]*l.data.stride+l.offset:p=o[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new on(f,u,h)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],c=t(o,n);e.setAttribute(l,c)}let r=this.morphAttributes;for(let l in r){let o=[],c=r[l];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=t(f,n);o.push(p)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let c=a[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let c in o)o[c]!==void 0&&(t[c]=o[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let c=n[o];t.data.attributes[o]=c.toJSON(t.data)}let s={},r=!1;for(let o in this.morphAttributes){let c=this.morphAttributes[o],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[o]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wc=new z,lp=new z,cp=new te,Zn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=wc.subVectors(n,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(wc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cp.getNormalMatrix(t),s=this.coplanarPoint(wc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},up=0,Mi=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=ir,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vi=new z,Ac=new z,$o=new z,Ko=new z,Gr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ac.copy(t).add(e).multiplyScalar(.5),$o.copy(e).sub(t).normalize(),Ko.copy(this.origin).sub(Ac);let r=t.distanceTo(e)*.5,a=-this.direction.dot($o),l=Ko.dot(this.direction),o=-Ko.dot($o),c=Ko.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*o-l,f=a*l-o,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+a*f+2*l)+f*(a*h+f+2*o)+c}else f=r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+c;else f=-r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+c;else f<=-g?(h=Math.max(0,-(-a*r+l)),f=h>0?-r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-o),r),p=f*(f+2*o)+c):(h=Math.max(0,-(a*r+l)),f=h>0?r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ac).addScaledVector($o,f),p}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(l=(t.min.z-f.z)*h,o=(t.max.z-f.z)*h):(l=(t.max.z-f.z)*h,o=(t.min.z-f.z)*h),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,o=l.x,c=l.y,u=l.z,h=t.x-a.x,f=t.y-a.y,p=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,d=n.x-a.x,v=n.y-a.y,T=n.z-a.z,M=Math.abs(o),_=Math.abs(c),b=Math.abs(u),R,y,S,C,D,P,L,w,I,O,N,B;if(M>=_&&M>=b?(S=o,P=h,I=g,B=d,o>=0?(R=c,y=u,C=f,D=p,L=x,w=m,O=v,N=T):(R=u,y=c,C=p,D=f,L=m,w=x,O=T,N=v)):_>=b?(S=c,P=f,I=x,B=v,c>=0?(R=u,y=o,C=p,D=h,L=m,w=g,O=T,N=d):(R=o,y=u,C=h,D=p,L=g,w=m,O=d,N=T)):(S=u,P=p,I=m,B=T,u>=0?(R=o,y=c,C=h,D=f,L=g,w=x,O=d,N=v):(R=c,y=o,C=f,D=h,L=x,w=g,O=v,N=d)),S===0)return null;let U=R/S,k=y/S,W=1/S,j=C-U*P,ot=D-k*P,zt=L-U*I,Ft=w-k*I,Vt=O-U*B,J=N-k*B,nt=Vt*Ft-J*zt,St=j*J-ot*Vt,Yt=zt*ot-Ft*j;if(s){if(nt<0||St<0||Yt<0)return null}else if((nt<0||St<0||Yt<0)&&(nt>0||St>0||Yt>0))return null;let Rt=nt+St+Yt;if(Rt===0)return null;let tt=W*(nt*P+St*I+Yt*B);return(Rt>0?tt<0:tt>0)?null:this.at(tt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nh=new Zt,us=new Gr,Qo=new yi,ih=new z,jo=new z,ta=new z,ea=new z,Rc=new z,na=new z,sh=new z,ia=new z,fe=class extends qe{constructor(t=new me,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){na.set(0,0,0);for(let o=0,c=r.length;o<c;o++){let u=l[o],h=r[o];u!==0&&(Rc.fromBufferAttribute(h,t),a?na.addScaledVector(Rc,u):na.addScaledVector(Rc.sub(e),u))}e.add(na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(Qo.containsPoint(us.origin)===!1&&(us.intersectSphere(Qo,ih)===null||us.origin.distanceToSquared(ih)>(t.far-t.near)**2))&&(nh.copy(r).invert(),us.copy(t.ray).applyMatrix4(nh),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,_=T;M<_;M+=3){let b=l.getX(M),R=l.getX(M+1),y=l.getX(M+2);s=sa(this,d,t,n,c,u,h,b,R,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=l.getX(m),T=l.getX(m+1),M=l.getX(m+2);s=sa(this,a,t,n,c,u,h,v,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,_=T;M<_;M+=3){let b=M,R=M+1,y=M+2;s=sa(this,d,t,n,c,u,h,b,R,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,T=m+1,M=m+2;s=sa(this,a,t,n,c,u,h,v,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function hp(i,t,e,n,s,r,a,l){let o;if(t.side===an?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===Yi,l),o===null)return null;ia.copy(l),ia.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ia);return c<e.near||c>e.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,t,e,n,s,r,a,l,o,c){i.getVertexPosition(l,jo),i.getVertexPosition(o,ta),i.getVertexPosition(c,ea);let u=hp(i,t,e,n,jo,ta,ea,sh);if(u){let h=new z;Hi.getBarycoord(sh,jo,ta,ea,h),s&&(u.uv=Hi.getInterpolatedAttribute(s,l,o,c,h,new qt)),r&&(u.uv1=Hi.getInterpolatedAttribute(r,l,o,c,h,new qt)),a&&(u.normal=Hi.getInterpolatedAttribute(a,l,o,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:o,c,normal:new z,materialIndex:0};Hi.getNormal(jo,ta,ea,f.normal),u.face=f,u.barycoord=h}return u}var ps=class extends vn{constructor(t=null,e=1,n=1,s,r,a,l,o,c=He,u=He,h,f){super(null,a,l,o,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hs=new Zt,rh=new Zt,ra=[],oh=new li,fp=new Zt,Ir=new fe,Lr=new yi,bi=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),oh.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(oh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Lr.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),t.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),rh.multiplyMatrices(n,Hs),Ir.matrixWorld=rh,Ir.raycast(t,ra);for(let a=0,l=ra.length;a<l;a++){let o=ra[a];o.instanceId=r,o.object=this,e.push(o)}ra.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Tn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ps(new Float32Array(s*this.count),s,this.count,or,kn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new yi,dp=new qt(.5,.5),oa=new z,Ks=class{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],v=r[12],T=r[13],M=r[14],_=r[15];if(s[0].setComponents(c-a,p-u,d-g,_-v).normalize(),s[1].setComponents(c+a,p+u,d+g,_+v).normalize(),s[2].setComponents(c+l,p+h,d+x,_+T).normalize(),s[3].setComponents(c-l,p-h,d-x,_-T).normalize(),n)s[4].setComponents(o,f,m,M).normalize(),s[5].setComponents(c-o,p-f,d-m,_-M).normalize();else if(s[4].setComponents(c-o,p-f,d-m,_-M).normalize(),e===Jn)s[5].setComponents(c+o,p+f,d+m,_+M).normalize();else if(e===Ys)s[5].setComponents(o,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=dp.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qs=class extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ah=new Zt,Uc=new Gr,aa=new yi,la=new z,Wr=class extends qe{constructor(t=new me,e=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;ah.copy(s).invert(),Uc.copy(t.ray).applyMatrix4(ah);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);la.fromBufferAttribute(h,m),lh(la,m,o,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,x=p;g<x;g++)la.fromBufferAttribute(h,g),lh(la,g,o,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function lh(i,t,e,n,s,r,a){let l=Uc.distanceSqToPoint(i);if(l<e){let o=new z;Uc.closestPointToPoint(i,o),o.applyMatrix4(n);let c=s.ray.origin.distanceTo(o);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Xr=class extends vn{constructor(t=[],e=Zi,n,s,r,a,l,o,c,u){super(t,e,n,s,r,a,l,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},In=class extends vn{constructor(t,e,n,s,r,a,l,o,c){super(t,e,n,s,r,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends vn{constructor(t,e,n=Qn,s,r,a,l=He,o=He,c,u=oi,h=1){if(u!==oi&&u!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,l,o,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},wa=class extends Vi{constructor(t,e=Qn,n=Zi,s,r,a=He,l=He,o,c=oi){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,l,o,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qr=class extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$n=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function g(x,m,d,v,T,M,_,b,R,y,S){let C=M/R,D=_/y,P=M/2,L=_/2,w=b/2,I=R+1,O=y+1,N=0,B=0,U=new z;for(let k=0;k<O;k++){let W=k*D-L;for(let j=0;j<I;j++){let ot=j*C-P;U[x]=ot*v,U[m]=W*T,U[d]=w,c.push(U.x,U.y,U.z),U[x]=0,U[m]=0,U[d]=b>0?1:-1,u.push(U.x,U.y,U.z),h.push(j/R),h.push(1-k/y),N+=1}}for(let k=0;k<y;k++)for(let W=0;W<R;W++){let j=f+W+I*k,ot=f+W+I*(k+1),zt=f+(W+1)+I*(k+1),Ft=f+(W+1)+I*k;o.push(j,ot,Ft),o.push(ot,zt,Ft),B+=6}l.addGroup(p,B,S),p+=B,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Yr=class i extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],l=[],o=[],c=new z,u=new qt;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),l.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,o.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},js=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,x=[],m=n/2,d=0;v(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(p,2));function v(){let M=new z,_=new z,b=0,R=(e-t)/n;for(let y=0;y<=r;y++){let S=[],C=y/r,D=C*(e-t)+t;for(let P=0;P<=s;P++){let L=P/s,w=L*o+l,I=Math.sin(w),O=Math.cos(w);_.x=D*I,_.y=-C*n+m,_.z=D*O,h.push(_.x,_.y,_.z),M.set(I,R,O).normalize(),f.push(M.x,M.y,M.z),p.push(L,1-C),S.push(g++)}x.push(S)}for(let y=0;y<s;y++)for(let S=0;S<r;S++){let C=x[S][y],D=x[S+1][y],P=x[S+1][y+1],L=x[S][y+1];(t>0||S!==0)&&(u.push(C,D,L),b+=3),(e>0||S!==r-1)&&(u.push(D,P,L),b+=3)}c.addGroup(d,b,0),d+=b}function T(M){let _=g,b=new qt,R=new z,y=0,S=M===!0?t:e,C=M===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*C,0),f.push(0,C,0),p.push(.5,.5),g++;let D=g;for(let P=0;P<=s;P++){let w=P/s*o+l,I=Math.cos(w),O=Math.sin(w);R.x=S*O,R.y=m*C,R.z=S*I,h.push(R.x,R.y,R.z),f.push(0,C,0),b.x=I*.5+.5,b.y=O*.5*C+.5,p.push(b.x,b.y),g++}for(let P=0;P<s;P++){let L=_+P,w=D+P;M===!0?u.push(w,w+1,L):u.push(w+1,w,L),y+=3}c.addGroup(d,y,M===!0?1:2),d+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Aa=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];l(s),c(n),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let T=new z,M=new z,_=new z;for(let b=0;b<e.length;b+=3)p(e[b+0],T),p(e[b+1],M),p(e[b+2],_),o(T,M,_,v)}function o(v,T,M,_){let b=_+1,R=[];for(let y=0;y<=b;y++){R[y]=[];let S=v.clone().lerp(M,y/b),C=T.clone().lerp(M,y/b),D=b-y;for(let P=0;P<=D;P++)P===0&&y===b?R[y][P]=S:R[y][P]=S.clone().lerp(C,P/D)}for(let y=0;y<b;y++)for(let S=0;S<2*(b-y)-1;S++){let C=Math.floor(S/2);S%2===0?(f(R[y][C+1]),f(R[y+1][C]),f(R[y][C])):(f(R[y][C+1]),f(R[y+1][C+1]),f(R[y+1][C]))}}function c(v){let T=new z;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(v),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function u(){let v=new z;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let M=m(v)/2/Math.PI+.5,_=d(v)/Math.PI+.5;a.push(M,1-_)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){let T=a[v+0],M=a[v+2],_=a[v+4],b=Math.max(T,M,_),R=Math.min(T,M,_);b>.9&&R<.1&&(T<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),_<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,T){let M=v*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function g(){let v=new z,T=new z,M=new z,_=new z,b=new qt,R=new qt,y=new qt;for(let S=0,C=0;S<r.length;S+=9,C+=6){v.set(r[S+0],r[S+1],r[S+2]),T.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),b.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),_.copy(v).add(T).add(M).divideScalar(3);let D=m(_);x(b,C+0,v,D),x(R,C+2,T,D),x(y,C+4,M,D)}}function x(v,T,M,_){_<0&&v.x===1&&(a[T]=v.x-1),M.x===0&&M.z===0&&(a[T]=_/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Zr=class i extends Aa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ye=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),c=l+1,u=o+1,h=t/l,f=e/o,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let v=d*f-a;for(let T=0;T<c;T++){let M=T*h-r;g.push(M,-v,0),x.push(0,0,1),m.push(T/l),m.push(1-d/o)}}for(let d=0;d<o;d++)for(let v=0;v<l;v++){let T=v+c*d,M=v+c*(d+1),_=v+1+c*(d+1),b=v+1+c*d;p.push(T,M,b),p.push(M,_,b)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Jr=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),c=0,u=[],h=new z,f=new z,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],T=d/n,M=a+T*l,_=t*Math.cos(M),b=Math.sqrt(t*t-_*_),R=0;d===0&&a===0?R=.5/e:d===n&&o===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let S=y/e,C=s+S*r;h.x=-b*Math.cos(C),h.y=_,h.z=b*Math.sin(C),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(S+R,1-T),v.push(c++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let T=u[d][v+1],M=u[d][v],_=u[d+1][v],b=u[d+1][v+1];(d!==0||a>0)&&p.push(T,M,b),(d!==n-1||o<Math.PI)&&p.push(M,_,b)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ch(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ch(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){let t={};for(let e=0;e<i.length;e++){let n=ys(i[e]);for(let s in n)t[s]=n[s]}return t}function ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function eu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Ei={clone:ys,merge:dn},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ce=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new mt().setHex(s.value);break;case"v2":this.uniforms[n].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Zt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},tr=class extends ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var en=class extends Mi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ra=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ca=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pa=class extends Gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Dc:r=t,l=2*e-n;break;case Nc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Dc:a=t,o=2*n-e;break;case Nc:a=1,o=n+s[1]-s[0];break;default:a=t-1,o=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-l),this._weightNext=c/(o-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,c=o-l,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-p)*m+(1.5+p)*x+.5*g,M=p*m-p*x;for(let _=0;_!==l;++_)r[_]=d*a[u+_]+v*a[c+_]+T*a[o+_]+M*a[h+_];return r}},Ia=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,c=o-l,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==l;++f)r[f]=a[c+f]*h+a[o+f]*u;return r}},La=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Da=class extends Gi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,c=o-l,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==l;++m)r[m]=a[c+m]*x+a[o+m]*g;return r}let f=l*2,p=t-1;for(let g=0;g!==l;++g){let x=a[c+g],m=a[o+g],d=p*f+g*2,v=h[d],T=h[d+1],M=t*f+g*2,_=u[M],b=u[M+1],R=vp(n,e,v,_,s);r[g]=tf(R,x,T,b,m)}return r}};function tf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function xp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function vp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=tf(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let o=xp(r,t,e,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vs(e,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vs(t.times,Array),values:Vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Cc(t.settings)&&(n.settings={inTangents:Vs(t.settings.inTangents,Array),outTangents:Vs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case ba:e=this.InterpolantFactoryMethodLinear;break;case ha:e=this.InterpolantFactoryMethodSmooth;break;case Ic:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return ha;case this.InterpolantFactoryMethodBezier:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Cc(this.settings)&&(uh(this.settings.inTangents,t),uh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){jt("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(a!==null&&a>o){jt("KeyframeTrack: Out of order keys.",this,l,o,a),t=!1;break}a=o}if(s!==void 0&&Yd(s))for(let l=0,o=s.length;l!==o;++l){let c=s[l];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,l,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ha,r=t.length-1,a=1;for(let l=1;l<r;++l){let o=!1,c=t[l],u=t[l+1];if(c!==u&&(l!==1||c!==t[0]))if(s)o=!0;else{let h=l*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=e[h+g];if(x!==e[f+g]||x!==e[p+g]){o=!0;break}}}if(o){if(l!==a){t[a]=t[l];let h=l*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,o=a*n,c=0;c!==n;++c)e[o+c]=e[l+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Cc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=ba;var Wi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Dr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};Na.prototype.ValueTypeName="color";var Ua=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};Ua.prototype.ValueTypeName="number";var Fa=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-e)/(s-e),c=t*l;for(let u=c+l;c!==u;c+=4)tn.slerpFlat(r,0,a,c-l,a,c,o);return r}},$r=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Dr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};Ba.prototype.ValueTypeName="vector";var Oa=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,o,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ef=new Oa,za=class{constructor(t){this.manager=t!==void 0?t:ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};za.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Kr=class extends er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Pc=new Zt,hh=new z,fh=new z,Qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(hh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Pc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ys||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),e.multiply(Pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ca=new z,ua=new tn,si=new z,ms=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ca,ua,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ua,si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ca,ua,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ua,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new z,dh=new qt,ph=new qt,rn=class extends ms{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,dh,ph),e.subVectors(ph,dh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/c,s*=a.width/o,n*=a.height/c}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fc=class extends Qr{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Br*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},jr=class extends er{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var qi=class extends ms{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bc=class extends Qr{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Bc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var eo=class extends me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Gs=-90,Ws=1,ka=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Gs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new rn(Gs,Ws,t,e);r.layers=this.layers,this.add(r);let a=new rn(Gs,Ws,t,e);a.layers=this.layers,this.add(a);let l=new rn(Gs,Ws,t,e);l.layers=this.layers,this.add(l);let o=new rn(Gs,Ws,t,e);o.layers=this.layers,this.add(o);let c=new rn(Gs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ha=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},no=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=_p.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function _p(){this._document.hidden===!1&&this.reset()}var nu="\\[\\]\\.:\\/",yp=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",Mp="[^"+nu.replace("\\.","")+"]",bp=/((?:WC+[\/:])*)/.source.replace("WC",iu),Sp=/(WCOD+)?/.source.replace("WCOD",Mp),Tp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),wp=new RegExp("^"+bp+Sp+Tp+Ep+"$"),Ap=["material","materials","bones","map"],Oc=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yp,"")}static parseTrackName(t){let e=wp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ap.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let o=n(l.children);if(o)return o}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Oc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var __=new Float32Array(1);var cu=class cu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};cu.prototype.isMatrix2=!0;var zc=cu;function su(i,t,e,n){let s=Rp(n);switch(e){case Kc:return i*t;case or:return i*t/s.components*s.byteLength;case Ja:return i*t/s.components*s.byteLength;case $i:return i*t*2/s.components*s.byteLength;case $a:return i*t*2/s.components*s.byteLength;case Qc:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case Ka:return i*t*4/s.components*s.byteLength;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case el:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case tl:return Math.max(i,8)*Math.max(t,8)/2;case nl:case il:case rl:case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sl:case go:case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bl:case Sl:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case El:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xo:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rp(i){switch(i){case wn:case Yc:return{byteLength:1,components:1};case sr:case Zc:case Ze:return{byteLength:2,components:1};case Ya:case Za:return{byteLength:2,components:4};case Qn:case qa:case kn:return{byteLength:4,components:1};case Jc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Up(i){let t=new WeakMap;function e(l,o){let c=l.array,u=l.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,c,u),l.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,o,c){let u=o.array,h=o.updateRanges;if(i.bindBuffer(c,l),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let c=t.get(l);if(c===void 0)t.set(l,e(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
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
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,$p=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#endif`,N0=`uniform sampler2D dfgLUT;
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
}`,U0=`
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Km=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,tg=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,ng=`#define NORMAL
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
}`,ig=`#define NORMAL
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
}`,sg=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,cg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,pg=`uniform float rotation;
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
}`,mg=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Fp,alphahash_pars_fragment:Bp,alphamap_fragment:Op,alphamap_pars_fragment:zp,alphatest_fragment:kp,alphatest_pars_fragment:Hp,aomap_fragment:Vp,aomap_pars_fragment:Gp,batching_pars_vertex:Wp,batching_vertex:Xp,begin_vertex:qp,beginnormal_vertex:Yp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:t0,color_fragment:e0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:u0,emissivemap_pars_fragment:h0,colorspace_fragment:f0,colorspace_pars_fragment:d0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:R0,envmap_vertex:v0,fog_vertex:_0,fog_pars_vertex:y0,fog_fragment:M0,fog_pars_fragment:b0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:T0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:w0,lights_pars_begin:A0,lights_toon_fragment:C0,lights_toon_pars_fragment:P0,lights_phong_fragment:I0,lights_phong_pars_fragment:L0,lights_physical_fragment:D0,lights_physical_pars_fragment:N0,lights_fragment_begin:U0,lights_fragment_maps:F0,lights_fragment_end:B0,lightprobes_pars_fragment:O0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:V0,map_fragment:G0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:J0,morphcolor_vertex:$0,morphnormal_vertex:K0,morphtarget_pars_vertex:Q0,morphtarget_vertex:j0,normal_fragment_begin:tm,normal_fragment_maps:em,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:um,packing:hm,premultiplied_alpha_fragment:fm,project_vertex:dm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:_m,shadowmap_vertex:ym,shadowmask_pars_fragment:Mm,skinbase_vertex:bm,skinning_pars_vertex:Sm,skinning_vertex:Tm,skinnormal_vertex:Em,specularmap_fragment:wm,specularmap_pars_fragment:Am,tonemapping_fragment:Rm,tonemapping_pars_fragment:Cm,transmission_fragment:Pm,transmission_pars_fragment:Im,uv_pars_fragment:Lm,uv_pars_vertex:Dm,uv_vertex:Nm,worldpos_vertex:Um,background_vert:Fm,background_frag:Bm,backgroundCube_vert:Om,backgroundCube_frag:zm,cube_vert:km,cube_frag:Hm,depth_vert:Vm,depth_frag:Gm,distance_vert:Wm,distance_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:Zm,linedashed_frag:Jm,meshbasic_vert:$m,meshbasic_frag:Km,meshlambert_vert:Qm,meshlambert_frag:jm,meshmatcap_vert:tg,meshmatcap_frag:eg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:sg,meshphong_frag:rg,meshphysical_vert:og,meshphysical_frag:ag,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:ug,points_frag:hg,shadow_vert:fg,shadow_frag:dg,sprite_vert:pg,sprite_frag:mg},It={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ui={basic:{uniforms:dn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:dn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:dn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:dn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:dn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new mt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:dn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:dn([It.points,It.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:dn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:dn([It.common,It.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:dn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:dn([It.sprite,It.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:dn([It.common,It.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:dn([It.lights,It.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ui.physical={uniforms:dn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Il={r:0,b:0,g:0},gg=new Zt,Ef=new te;Ef.set(-1,0,0,0,1,0,0,0,1);function xg(i,t,e,n,s,r){let a=new mt(0),l=s===!0?0:1,o,c,u=null,h=0,f=null;function p(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let M=v.backgroundBlurriness>0;T=t.get(T,M)}return T}function g(v){let T=!1,M=p(v);M===null?m(a,l):M&&M.isColor&&(m(M,1),T=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,T){let M=p(T);M&&(M.isCubeTexture||M.mapping===co)?(c===void 0&&(c=new fe(new $n(1,1,1),new ce({name:"BackgroundCubeMaterial",uniforms:ys(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gg.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ef),c.material.toneMapped=re.getTransfer(M.colorSpace)!==pe,(u!==M||h!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(o===void 0&&(o=new fe(new Ye(2,2),new ce({name:"BackgroundMaterial",uniforms:ys(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=M,o.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,o.material.toneMapped=re.getTransfer(M.colorSpace)!==pe,M.matrixAutoUpdate===!0&&M.updateMatrix(),o.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))}function m(v,T){v.getRGB(Il,eu(i)),e.buffers.color.setClear(Il.r,Il.g,Il.b,T,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),l=T,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:g,addToRenderList:x,dispose:d}}function vg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(D,P,L,w,I){let O=!1,N=h(D,w,L,P);r!==N&&(r=N,c(r.object)),O=p(D,w,L,I),O&&g(D,w,L,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(D,P,L,w),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function o(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function h(D,P,L,w){let I=w.wireframe===!0,O=n[P.id];O===void 0&&(O={},n[P.id]=O);let N=D.isInstancedMesh===!0?D.id:0,B=O[N];B===void 0&&(B={},O[N]=B);let U=B[L.id];U===void 0&&(U={},B[L.id]=U);let k=U[I];return k===void 0&&(k=f(o()),U[I]=k),k}function f(D){let P=[],L=[],w=[];for(let I=0;I<e;I++)P[I]=0,L[I]=0,w[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:w,object:D,attributes:{},index:null}}function p(D,P,L,w){let I=r.attributes,O=P.attributes,N=0,B=L.getAttributes();for(let U in B)if(B[U].location>=0){let W=I[U],j=O[U];if(j===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),W===void 0||W.attribute!==j||j&&W.data!==j.data)return!0;N++}return r.attributesNum!==N||r.index!==w}function g(D,P,L,w){let I={},O=P.attributes,N=0,B=L.getAttributes();for(let U in B)if(B[U].location>=0){let W=O[U];W===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(W=D.instanceColor));let j={};j.attribute=W,W&&W.data&&(j.data=W.data),I[U]=j,N++}r.attributes=I,r.attributesNum=N,r.index=w}function x(){let D=r.newAttributes;for(let P=0,L=D.length;P<L;P++)D[P]=0}function m(D){d(D,0)}function d(D,P){let L=r.newAttributes,w=r.enabledAttributes,I=r.attributeDivisors;L[D]=1,w[D]===0&&(i.enableVertexAttribArray(D),w[D]=1),I[D]!==P&&(i.vertexAttribDivisor(D,P),I[D]=P)}function v(){let D=r.newAttributes,P=r.enabledAttributes;for(let L=0,w=P.length;L<w;L++)P[L]!==D[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function T(D,P,L,w,I,O,N){N===!0?i.vertexAttribIPointer(D,P,L,I,O):i.vertexAttribPointer(D,P,L,w,I,O)}function M(D,P,L,w){x();let I=w.attributes,O=L.getAttributes(),N=P.defaultAttributeValues;for(let B in O){let U=O[B];if(U.location>=0){let k=I[B];if(k===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(k=D.instanceColor)),k!==void 0){let W=k.normalized,j=k.itemSize,ot=t.get(k);if(ot===void 0)continue;let zt=ot.buffer,Ft=ot.type,Vt=ot.bytesPerElement,J=Ft===i.INT||Ft===i.UNSIGNED_INT||k.gpuType===qa;if(k.isInterleavedBufferAttribute){let nt=k.data,St=nt.stride,Yt=k.offset;if(nt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<U.locationSize;Rt++)d(U.location+Rt,nt.meshPerAttribute);D.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Rt=0;Rt<U.locationSize;Rt++)m(U.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Rt=0;Rt<U.locationSize;Rt++)T(U.location+Rt,j/U.locationSize,Ft,W,St*Vt,(Yt+j/U.locationSize*Rt)*Vt,J)}else{if(k.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)d(U.location+nt,k.meshPerAttribute);D.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let nt=0;nt<U.locationSize;nt++)T(U.location+nt,j/U.locationSize,Ft,W,j*Vt,j/U.locationSize*nt*Vt,J)}}else if(N!==void 0){let W=N[B];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(U.location,W);break;case 3:i.vertexAttrib3fv(U.location,W);break;case 4:i.vertexAttrib4fv(U.location,W);break;default:i.vertexAttrib1fv(U.location,W)}}}}v()}function _(){S();for(let D in n){let P=n[D];for(let L in P){let w=P[L];for(let I in w){let O=w[I];for(let N in O)u(O[N].object),delete O[N];delete w[I]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let P=n[D.id];for(let L in P){let w=P[L];for(let I in w){let O=w[I];for(let N in O)u(O[N].object),delete O[N];delete w[I]}}delete n[D.id]}function R(D){for(let P in n){let L=n[P];for(let w in L){let I=L[w];if(I[D.id]===void 0)continue;let O=I[D.id];for(let N in O)u(O[N].object),delete O[N];delete I[D.id]}}}function y(D){for(let P in n){let L=n[P],w=D.isInstancedMesh===!0?D.id:0,I=L[w];if(I!==void 0){for(let O in I){let N=I[O];for(let B in N)u(N[B].object),delete N[B];delete I[O]}delete L[w],Object.keys(L).length===0&&delete n[P]}}}function S(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:S,resetDefaultState:C,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function _g(i,t,e){let n;function s(o){n=o}function r(o,c){i.drawArrays(n,o,c),e.update(c,n,1)}function a(o,c,u){u!==0&&(i.drawArraysInstanced(n,o,c,u),e.update(c,n,u))}function l(o,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function yg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){let y=R===Ze&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==wn&&R!==kn&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=o(c);u!==c&&(Kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:M,maxSamples:_,samples:b}}function Mg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Zn,l=new te,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,T=v*4,M=d.clippingState||null;o.value=M,M=u(g,f,T,p);for(let _=0;_!==T;++_)M[_]=e[_];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=o.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,M=p;T!==x;++T,M+=4)a.copy(h[T]).applyMatrix4(v,l),a.normal.toArray(m,M),m[M+3]=a.constant}o.value=m,o.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var lr=4,bg=6,Sg=20,Tg=256,_o=new qi,nf=new mt,uu=null,hu=0,fu=0,du=!1,Eg=new z,Ms=new z,Dl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=Eg}=r;uu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o,l),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uu,hu,fu),this._renderer.xr.enabled=du,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Ze,format:Hn,colorSpace:Nr,depthBuffer:!1},s=sf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wg(r)),this._blurMaterial=Rg(r,t,e),this._ggxMaterial=Ag(r,t,e)}return s}_compileMaterial(t){let e=new fe(new me,t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,s,r){let o=new rn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(nf),h.toneMapping=Kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new $n,new Ve({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,d=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,d=!0):(m.color.copy(nf),d=!0);for(let T=0;T<6;T++){let M=T%3;M===0?(o.up.set(0,c[T],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+u[T],r.y,r.z)):M===1?(o.up.set(0,0,c[T]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+u[T],r.z)):(o.up.set(0,c[T],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+u[T]));let _=this._cubeSize;ar(s,M*_,T>2?_:0,_,_),h.setRenderTarget(s),d&&h.render(x,o),h.render(t,o)}h.toneMapping=p,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Zi||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let o=this._cubeSize;ar(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(a,_o)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let o=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,p=h*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-lr?n-g+lr:0),d=4*(this._cubeSize-x);o.envMap.value=t.texture,o.roughness.value=p,o.mipInt.value=g-e,ar(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(l,_o),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,ar(t,m,d,3*x,2*x),s.setRenderTarget(t),s.render(l,_o)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[s];o.material=l;let c=l.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-lr?s-this._lodMax+lr:0),f=4*(this._cubeSize-u);ar(e,h,f,3*u,2*u),a.setRenderTarget(e),a.render(o,_o)}};function wg(i){let t=[],e=[],n=i,s=i-lr+1+bg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),o=-l,c=1+l,u=[o,o,c,o,c,c,o,o,c,c,o,c],h=6,f=6,p=3,g=new Float32Array(p*f*h),x=new Float32Array(p*f*h);for(let d=0;d<h;d++){let v=d%3*2/3-1,T=d>2?0:-1,M=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(M,p*f*d);for(let _=0;_<f;_++){let b=u[_*2]*2-1,R=u[_*2+1]*2-1;d===0?Ms.set(1,R,b):d===1?Ms.set(-b,1,-R):d===2?Ms.set(-b,R,1):d===3?Ms.set(-1,R,-b):d===4?Ms.set(-b,-1,R):Ms.set(b,R,-1),Ms.toArray(x,(d*f+_)*p)}}let m=new me;m.setAttribute("position",new on(g,p)),m.setAttribute("outputDirection",new on(x,p)),e.push(new fe(m,null)),n>lr&&n--}return{lodMeshes:e,sizeLods:t}}function sf(i,t,e){let n=new Re(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ag(i,t,e){return new ce({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Rg(i,t,e){return new ce({name:"SphericalGaussianBlur",defines:{SAMPLES:Sg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function rf(){return new ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function of(){return new ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nl=class extends Re{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new ce({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:En});r.uniforms.tEquirect.value=e;let a=new fe(s,r),l=e.minFilter;return e.minFilter===zn&&(e.minFilter=Xe),new ka(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Cg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Ga||p===Wa)if(t.has(f)){let g=t.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new Nl(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),l(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===Ga||p===Wa,x=p===Zi||p===_s;if(g||x){let m=e.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Dl(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&o(v)?(n===null&&(n=new Dl(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function l(f,p){return p===Ga?f.mapping=Zi:p===Wa&&(f.mapping=_s),f}function o(f){let p=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Ig(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function o(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(g===void 0)return;if(p!==null){let v=p.array;x=p.version;for(let T=0,M=v.length;T<M;T+=3){let _=v[T+0],b=v[T+1],R=v[T+2];f.push(_,b,b,R,R,_)}}else{let v=g.array;x=g.version;for(let T=0,M=v.length/3-1;T<M;T+=3){let _=T+0,b=T+1,R=T+2;f.push(_,b,b,R,R,_)}}let m=new(g.count>=65535?Vr:Hr)(f,1);m.version=x;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:l,update:o,getWireframeAttribute:u}}function Lg(i,t,e){let n;function s(h){n=h}let r,a;function l(h){r=h.type,a=h.bytesPerElement}function o(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function c(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*a,p),e.update(f,n,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];e.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Dg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,t,e){let n=new WeakMap,s=new Ee;function r(a,l,o){let c=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(l);if(f===void 0||f.count!==h){let S=function(){R.dispose(),n.delete(l),l.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let M=l.attributes.position.count*T,_=1;M>t.maxTextureSize&&(_=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*_*4*h),R=new Or(b,M,_,h);R.type=kn,R.needsUpdate=!0;let y=T*4;for(let C=0;C<h;C++){let D=m[C],P=d[C],L=v[C],w=M*_*4*C;for(let I=0;I<D.count;I++){let O=I*y;p===!0&&(s.fromBufferAttribute(D,I),b[w+O+0]=s.x,b[w+O+1]=s.y,b[w+O+2]=s.z,b[w+O+3]=0),g===!0&&(s.fromBufferAttribute(P,I),b[w+O+4]=s.x,b[w+O+5]=s.y,b[w+O+6]=s.z,b[w+O+7]=0),x===!0&&(s.fromBufferAttribute(L,I),b[w+O+8]=s.x,b[w+O+9]=s.y,b[w+O+10]=s.z,b[w+O+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new qt(M,_)},n.set(l,f),l.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ug(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function l(){r=new WeakMap}function o(c){let u=c.target;u.removeEventListener("dispose",o),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:l}}var Fg={[io]:"LINEAR_TONE_MAPPING",[so]:"REINHARD_TONE_MAPPING",[ro]:"CINEON_TONE_MAPPING",[oo]:"ACES_FILMIC_TONE_MAPPING",[lo]:"AGX_TONE_MAPPING",[vs]:"NEUTRAL_TONE_MAPPING",[ao]:"CUSTOM_TONE_MAPPING"};function Bg(i,t,e,n,s,r){let a=new Re(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,c=new me;c.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $t([0,2,0,0,2,0],2));let u=new tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new fe(c,u),f=new qi(-1,1,1,-1,0,1),p=null,g=null,x=!1,m,d=null,v=[],T=!1;this.setSize=function(M,_){a.setSize(M,_),l!==null&&l.setSize(M,_),o!==null&&o.setSize(M,_);for(let b=0;b<v.length;b++){let R=v[b];R.setSize&&R.setSize(M,_)}},this.setEffects=function(M){v=M,T=v.length>0&&v[0].isRenderPass===!0;let _=a.width,b=a.height;v.length>0&&l===null&&(l=new Re(_,b,{type:Ze,depthBuffer:!1,stencilBuffer:!1}),o=new Re(_,b,{type:Ze,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let y=v[R];y.setSize&&y.setSize(_,b)}},this.begin=function(M,_){if(x||M.toneMapping===Kn&&v.length===0)return!1;if(d=_,_!==null){let b=_.width,R=_.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return T===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Kn,!0},this.hasRenderPass=function(){return T},this.end=function(M,_){M.toneMapping=m,x=!0;let b=a,R=l;for(let y=0;y<v.length;y++){let S=v[y];S.enabled!==!1&&(S.render(M,R,b,_),S.needsSwap!==!1&&(b=R,R=R===l?o:l))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,u.defines={},re.getTransfer(p)===pe&&(u.defines.SRGB_TRANSFER="");let y=Fg[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(d),M.render(h,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),c.dispose(),u.dispose()}}var wf=new vn,gu=new Vi(1,1),Af=new Or,Rf=new Ea,Cf=new Xr,af=[],lf=[],cf=new Float32Array(16),uf=new Float32Array(9),hf=new Float32Array(4);function ur(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=af[s];if(r===void 0&&(r=new Float32Array(s),af[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bl(i,t){let e=lf[t];e===void 0&&(e=new Int32Array(t),lf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,n))return;hf.set(n),i.uniformMatrix2fv(this.addr,!1,hf),$e(e,n)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),$e(e,n)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,n))return;cf.set(n),i.uniformMatrix4fv(this.addr,!1,cf),$e(e,n)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gu.compareFunction=e.isReversedDepthBuffer()?Pl:Cl,r=gu):r=wf,e.setTexture2D(t||r,s)}function tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rf,s)}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cf,s)}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Af,s)}function ix(i){switch(i){case 5126:return Og;case 35664:return zg;case 35665:return kg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}function sx(i,t){i.uniform1fv(this.addr,t)}function rx(i,t){let e=ur(t,this.size,2);i.uniform2fv(this.addr,e)}function ox(i,t){let e=ur(t,this.size,3);i.uniform3fv(this.addr,e)}function ax(i,t){let e=ur(t,this.size,4);i.uniform4fv(this.addr,e)}function lx(i,t){let e=ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cx(i,t){let e=ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ux(i,t){let e=ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hx(i,t){i.uniform1iv(this.addr,t)}function fx(i,t){i.uniform2iv(this.addr,t)}function dx(i,t){i.uniform3iv(this.addr,t)}function px(i,t){i.uniform4iv(this.addr,t)}function mx(i,t){i.uniform1uiv(this.addr,t)}function gx(i,t){i.uniform2uiv(this.addr,t)}function xx(i,t){i.uniform3uiv(this.addr,t)}function vx(i,t){i.uniform4uiv(this.addr,t)}function _x(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=gu:a=wf;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function yx(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rf,r[a])}function Mx(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cf,r[a])}function bx(i,t,e){let n=this.cache,s=t.length,r=Bl(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Af,r[a])}function Sx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ox;case 35666:return ax;case 35674:return lx;case 35675:return cx;case 35676:return ux;case 5124:case 35670:return hx;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return bx}}var xu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ix(e.type)}},vu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sx(e.type)}},_u=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},pu=/(\w+)(\])?(\[|\.)?/g;function ff(i,t){i.seq.push(t),i.map[t.id]=t}function Tx(i,t,e){let n=i.name,s=n.length;for(pu.lastIndex=0;;){let r=pu.exec(n),a=pu.lastIndex,l=r[1],o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){ff(e,c===void 0?new xu(l,i,t):new vu(l,i,t));break}else{let h=e.map[l];h===void 0&&(h=new _u(l),ff(e,h)),e=h}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);Tx(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function df(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ex=37297,wx=0;function Ax(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var pf=new te;function Rx(i){re._getMatrix(pf,re.workingColorSpace,i);let t=`mat3( ${pf.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ax(i.getShaderSource(t),l)}else return r}function Cx(i,t){let e=Rx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Px={[io]:"Linear",[so]:"Reinhard",[ro]:"Cineon",[oo]:"ACESFilmic",[lo]:"AgX",[vs]:"Neutral",[ao]:"Custom"};function Ix(i,t){let e=Px[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ll=new z;function Lx(){re.getLuminanceCoefficients(Ll);let i=Ll.x.toFixed(4),t=Ll.y.toFixed(4),e=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function Nx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ux(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function Mo(i){return i!==""}function gf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(i){return i.replace(Fx,Ox)}var Bx=new Map;function Ox(i,t){let e=ie[t];if(e===void 0){let n=Bx.get(t);if(n!==void 0)e=ie[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yu(e)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(zx,kx)}function kx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Hx={[gs]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function Vx(i){return Hx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Gx={[Zi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function Wx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Gx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xx={[_s]:"ENVMAP_MODE_REFRACTION"};function qx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yx={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[Fh]:"ENVMAP_BLENDING_MIX",[Bh]:"ENVMAP_BLENDING_ADD"};function Zx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yx[i.combine]||"ENVMAP_BLENDING_NONE"}function Jx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $x(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,o=Vx(e),c=Wx(e),u=qx(e),h=Zx(e),f=Jx(e),p=Dx(e),g=Nx(r),x=s.createProgram(),m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mo).join(`
`),d.length>0&&(d+=`
`)):(m=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),d=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Kn?Ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Cx("linearToOutputTexel",e.outputColorSpace),Lx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mo).join(`
`)),a=yu(a),a=gf(a,e),a=xf(a,e),l=yu(l),l=gf(l,e),l=xf(l,e),a=vf(a),l=vf(l),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=v+m+a,M=v+d+l,_=df(s,s.VERTEX_SHADER,T),b=df(s,s.FRAGMENT_SHADER,M);s.attachShader(x,_),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(_)||"",w=s.getShaderInfoLog(b)||"",I=P.trim(),O=L.trim(),N=w.trim(),B=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,_,b);else{let k=mf(s,_,"vertex"),W=mf(s,b,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+k+`
`+W)}else I!==""?Kt("WebGLProgram: Program Info Log:",I):(O===""||N==="")&&(U=!1);U&&(D.diagnostics={runnable:B,programLog:I,vertexShader:{log:O,prefix:m},fragmentShader:{log:N,prefix:d}})}s.deleteShader(_),s.deleteShader(b),y=new cr(s,x),S=Ux(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Ex)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=b,this}var Kx=0,Mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bu(t),e.set(t,n)),n}},bu=class{constructor(t){this.id=Kx++,this.code=t,this.usedTimes=0}};function Qx(i){return i===$i||i===go||i===xo}function jx(i,t,e,n,s,r){let a=new zr,l=new Mu,o=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return o.add(y),y===0?"uv":`uv${y}`}function x(y,S,C,D,P,L){let w=D.fog,I=P.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=t.get(y.envMap||O,N),U=B&&B.mapping===co?B.image.height:null,k=p[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Kt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=W!==void 0?W.length:0,ot=0;I.morphAttributes.position!==void 0&&(ot=1),I.morphAttributes.normal!==void 0&&(ot=2),I.morphAttributes.color!==void 0&&(ot=3);let zt,Ft,Vt,J;if(k){let Nt=ui[k];zt=Nt.vertexShader,Ft=Nt.fragmentShader}else{zt=y.vertexShader,Ft=y.fragmentShader;let Nt=l.getVertexShaderStage(y),ne=l.getFragmentShaderStage(y);l.update(y,Nt,ne),Vt=Nt.id,J=ne.id}let nt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Yt=P.isInstancedMesh===!0,Rt=P.isBatchedMesh===!0,tt=!!y.map,pt=!!y.matcap,ft=!!B,dt=!!y.aoMap,st=!!y.lightMap,gt=!!y.bumpMap&&y.wireframe===!1,Jt=!!y.normalMap,Qt=!!y.displacementMap,Xt=!!y.emissiveMap,se=!!y.metalnessMap,ue=!!y.roughnessMap,V=y.anisotropy>0,Se=y.clearcoat>0,ae=y.dispersion>0,F=y.retroreflectivity>0,E=y.iridescence>0,X=y.sheen>0,Z=y.transmission>0,Q=V&&!!y.anisotropyMap,yt=Se&&!!y.clearcoatMap,Tt=Se&&!!y.clearcoatNormalMap,et=Se&&!!y.clearcoatRoughnessMap,rt=E&&!!y.iridescenceMap,Et=E&&!!y.iridescenceThicknessMap,Gt=X&&!!y.sheenColorMap,wt=X&&!!y.sheenRoughnessMap,At=!!y.specularMap,Wt=!!y.specularColorMap,Ot=!!y.specularIntensityMap,ee=Z&&!!y.transmissionMap,G=Z&&!!y.thicknessMap,bt=!!y.gradientMap,it=!!y.alphaMap,vt=y.alphaTest>0,Mt=!!y.alphaHash,lt=!!y.extensions,K=Kn;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(K=i.toneMapping);let _t={shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:zt,fragmentShader:Ft,defines:y.defines,customVertexShaderID:Vt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&P._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&P.instanceColor!==null,instancingMorph:Yt&&P.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:pt,envMap:ft,envMapMode:ft&&B.mapping,envMapCubeUVHeight:U,aoMap:dt,lightMap:st,bumpMap:gt,normalMap:Jt,displacementMap:Qt,emissiveMap:Xt,normalMapObjectSpace:Jt&&y.normalMapType===kh,normalMapTangentSpace:Jt&&y.normalMapType===Rl,packedNormalMap:Jt&&y.normalMapType===Rl&&Qx(y.normalMap.format),metalnessMap:se,roughnessMap:ue,anisotropy:V,anisotropyMap:Q,clearcoat:Se,clearcoatMap:yt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:et,dispersion:ae,retroreflection:F,iridescence:E,iridescenceMap:rt,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:Gt,sheenRoughnessMap:wt,specularMap:At,specularColorMap:Wt,specularIntensityMap:Ot,transmission:Z,transmissionMap:ee,thicknessMap:G,gradientMap:bt,opaque:y.transparent===!1&&y.blending===ir&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:vt,alphaHash:Mt,combine:y.combine,mapUv:tt&&g(y.map.channel),aoMapUv:dt&&g(y.aoMap.channel),lightMapUv:st&&g(y.lightMap.channel),bumpMapUv:gt&&g(y.bumpMap.channel),normalMapUv:Jt&&g(y.normalMap.channel),displacementMapUv:Qt&&g(y.displacementMap.channel),emissiveMapUv:Xt&&g(y.emissiveMap.channel),metalnessMapUv:se&&g(y.metalnessMap.channel),roughnessMapUv:ue&&g(y.roughnessMap.channel),anisotropyMapUv:Q&&g(y.anisotropyMap.channel),clearcoatMapUv:yt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(y.sheenRoughnessMap.channel),specularMapUv:At&&g(y.specularMap.channel),specularColorMapUv:Wt&&g(y.specularColorMap.channel),specularIntensityMapUv:Ot&&g(y.specularIntensityMap.channel),transmissionMapUv:ee&&g(y.transmissionMap.channel),thicknessMapUv:G&&g(y.thicknessMap.channel),alphaMapUv:it&&g(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Jt||V),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(tt||it),fog:!!w,useFog:y.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&Jt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:St,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ot,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:K,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:Xt&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nn,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=o.has(1),_t.vertexUv2s=o.has(2),_t.vertexUv3s=o.has(3),o.clear(),_t}function m(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(d(S,y),v(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function d(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){let S=p[y.type],C;if(S){let D=ui[S];C=Ei.clone(D.uniforms)}else C=y.uniforms;return C}function M(y,S){let C=u.get(S);return C!==void 0?++C.usedTimes:(C=new $x(i,S,y,s),c.push(C),u.set(S,C)),C}function _(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){l.remove(y)}function R(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:_,releaseShaderCache:b,programs:c,dispose:R}}function tv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ev(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function yf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function l(f,p,g,x,m,d){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},i[t]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=d),t++,v}function o(f,p,g,x,m,d,v){v.reversedDepth===!0&&(m=-m);let T=l(f,p,g,x,m,d);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(f,p,g,x,m,d){let v=l(f,p,g,x,m,d);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(f,p){e.length>1&&e.sort(f||ev),n.length>1&&n.sort(p||yf),s.length>1&&s.sort(p||yf)}function h(){for(let f=t,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:u}}function nv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Mf,i.set(n,[a])):s>=r.length?(a=new Mf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function iv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new mt};break;case"SpotLight":e={position:new z,direction:new z,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function sv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var rv=0;function ov(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function av(i){let t=new iv,e=sv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Zt,a=new Zt;function l(c){let u=0,h=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,T=0,M=0,_=0,b=0,R=0,y=0,S=0,C=0;c.sort(ov);for(let P=0,L=c.length;P<L;P++){let w=c[P],I=w.color,O=w.intensity,N=w.distance,B=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===$i?B=w.shadow.map.texture:B=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=I.r*O,h+=I.g*O,f+=I.b*O;else if(w.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(w.sh.coefficients[U],O);C++}else if(w.isSunLight){let U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let k=w.shadow,W=e.get(w);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=W,n.sunShadowMap[g]=B;let j=k.getViewportCount();for(let ot=0;ot<j;ot++)n.sunShadowMatrix[x+ot]=k.getMatrix(ot),n.sunShadowCascade[x+ot]=k._cascadeData[ot];x+=j,g++}n.sun[p]=U,p++}else if(w.isDirectionalLight){let U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let k=w.shadow,W=e.get(w);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=w.shadow.matrix,_++}n.directional[m]=U,m++}else if(w.isSpotLight){let U=t.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(I).multiplyScalar(O),U.distance=N,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,n.spot[v]=U;let k=w.shadow;if(w.map&&(n.spotLightMap[y]=w.map,y++,k.updateMatrices(w),w.castShadow&&S++),n.spotLightMatrix[v]=k.matrix,w.castShadow){let W=e.get(w);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=B,R++}v++}else if(w.isRectAreaLight){let U=t.get(w);U.color.copy(I).multiplyScalar(O),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),n.rectArea[T]=U,T++}else if(w.isPointLight){let U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){let k=w.shadow,W=e.get(w);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,n.pointShadow[d]=W,n.pointShadowMap[d]=B,n.pointShadowMatrix[d]=w.shadow.matrix,b++}n.point[d]=U,d++}else if(w.isHemisphereLight){let U=t.get(w);U.skyColor.copy(w.color).multiplyScalar(O),U.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[M]=U,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==_||D.numPointShadows!==b||D.numSpotShadows!==R||D.numSpotMaps!==y||D.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=d,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-S,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,D.sunLength=p,D.directionalLength=m,D.pointLength=d,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=_,D.numPointShadows=b,D.numSpotShadows=R,D.numSpotMaps=y,D.numLightProbes=C,n.version=rv++)}function o(c,u){let h=0,f=0,p=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let M=c[v];if(M.isSunLight){let _=n.sun[h];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(d),h++}else if(M.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),f++}else if(M.isSpotLight){let _=n.spot[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(d),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),g++}else if(M.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let _=n.point[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){let _=n.hemi[m];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(d),m++}}}return{setup:l,setupView:o,state:n}}function bf(i){let t=new av(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function l(f){n.push(f)}function o(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function lv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new bf(i),t.set(s,[l])):r>=a.length?(l=new bf(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
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
}`,hv=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],fv=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Sf=new Zt,yo=new z,mu=new z;function dv(i,t,e){let n=new Ks,s=new qt,r=new qt,a=new Ee,l=new Ra,o=new Ca,c={},u=e.maxTextureSize,h={[Yi]:an,[an]:Yi,[nn]:nn},f=new ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:cv,fragmentShader:uv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let d=this.type;this.render=function(b,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===xh&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);let S=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),P=i.state;P.setBlending(En),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=d!==this.type;L&&R.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(I=>I.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,I=b.length;w<I;w++){let O=b[w],N=O.shadow;if(N===void 0){Kt("WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let B=N.getFrameExtents();s.multiply(B),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/B.x),s.x=r.x*B.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/B.y),s.y=r.y*B.y,N.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=U,N.map===null||L===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===nr){if(O.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Re(s.x,s.y,{format:$i,type:Ze,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),N.map.texture.name=O.name+".shadowMap",N.map.depthTexture=new Vi(s.x,s.y,kn),N.map.depthTexture.name=O.name+".shadowMapDepth",N.map.depthTexture.format=oi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=He,N.map.depthTexture.magFilter=He}else O.isPointLight?(N.map=new Nl(s.x),N.map.depthTexture=new wa(s.x,Qn)):(N.map=new Re(s.x,s.y),N.map.depthTexture=new Vi(s.x,s.y,Qn)),N.map.depthTexture.name=O.name+".shadowMap",N.map.depthTexture.format=oi,this.type===gs?(N.map.depthTexture.compareFunction=U?Pl:Cl,N.map.depthTexture.minFilter=Xe,N.map.depthTexture.magFilter=Xe):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=He,N.map.depthTexture.magFilter=He);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let k=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();O.isPointLight!==!0&&N.updateMatrices(O,y);for(let W=0;W<k;W++){let j=N.getCamera(W);if(O.isPointLight){let ot=N.camera,zt=N.matrix,Ft=O.distance||ot.far;Ft!==ot.far&&(ot.far=Ft,ot.updateProjectionMatrix()),yo.setFromMatrixPosition(O.matrixWorld),ot.position.copy(yo),mu.copy(ot.position),mu.add(hv[W]),ot.up.copy(fv[W]),ot.lookAt(mu),ot.updateMatrixWorld(),zt.makeTranslation(-yo.x,-yo.y,-yo.z),Sf.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Sf,ot.coordinateSystem,ot.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,W),i.clear();else{W===0&&(i.setRenderTarget(N.map),i.clear());let ot=N.getViewport(W);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),P.viewport(a)}n=N.getFrustum(W),M(R,y,j,O,this.type)}N.isPointLightShadow!==!0&&this.type===nr&&v(N,y),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,C,D)};function v(b,R){let y=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Re(s.x,s.y,{format:$i,type:Ze}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,y,f,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,y,p,x,null)}function T(b,R,y,S){let C=null,D=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?o:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let P=C.uuid,L=R.uuid,w=c[P];w===void 0&&(w={},c[P]=w);let I=w[L];I===void 0&&(I=C.clone(),w[L]=I,R.addEventListener("dispose",_)),C=I}if(C.visible=R.visible,C.wireframe=R.wireframe,S===nr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:h[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=i.properties.get(C);P.light=y}return C}function M(b,R,y,S,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===nr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let L=t.update(b),w=b.material;if(Array.isArray(w)){let I=L.groups;for(let O=0,N=I.length;O<N;O++){let B=I[O],U=w[B.materialIndex];if(U&&U.visible){let k=T(b,U,S,C);b.onBeforeShadow(i,b,R,y,L,k,B),i.renderBufferDirect(y,null,L,k,b,B),b.onAfterShadow(i,b,R,y,L,k,B)}}}else if(w.visible){let I=T(b,w,S,C);b.onBeforeShadow(i,b,R,y,L,I,null),i.renderBufferDirect(y,null,L,I,b,null),b.onAfterShadow(i,b,R,y,L,I,null)}}let P=b.children;for(let L=0,w=P.length;L<w;L++)M(P[L],R,y,S,C)}function _(b){b.target.removeEventListener("dispose",_);for(let y in c){let S=c[y],C=b.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function pv(i,t){function e(){let G=!1,bt=new Ee,it=null,vt=new Ee(0,0,0,0);return{setMask:function(Mt){it!==Mt&&!G&&(i.colorMask(Mt,Mt,Mt,Mt),it=Mt)},setLocked:function(Mt){G=Mt},setClear:function(Mt,lt,K,_t,Nt){Nt===!0&&(Mt*=_t,lt*=_t,K*=_t),bt.set(Mt,lt,K,_t),vt.equals(bt)===!1&&(i.clearColor(Mt,lt,K,_t),vt.copy(bt))},reset:function(){G=!1,it=null,vt.set(-1,0,0,0)}}}function n(){let G=!1,bt=!1,it=null,vt=null,Mt=null;return{setReversed:function(lt){if(bt!==lt){let K=t.get("EXT_clip_control");lt?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT),bt=lt;let _t=Mt;Mt=null,this.setClear(_t)}},getReversed:function(){return bt},setTest:function(lt){lt?nt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(lt){it!==lt&&!G&&(i.depthMask(lt),it=lt)},setFunc:function(lt){if(bt&&(lt=Qh[lt]),vt!==lt){switch(lt){case da:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=lt}},setLocked:function(lt){G=lt},setClear:function(lt){Mt!==lt&&(Mt=lt,bt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){G=!1,it=null,vt=null,Mt=null,bt=!1}}}function s(){let G=!1,bt=null,it=null,vt=null,Mt=null,lt=null,K=null,_t=null,Nt=null;return{setTest:function(ne){G||(ne?nt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ne){bt!==ne&&!G&&(i.stencilMask(ne),bt=ne)},setFunc:function(ne,Qe,we){(it!==ne||vt!==Qe||Mt!==we)&&(i.stencilFunc(ne,Qe,we),it=ne,vt=Qe,Mt=we)},setOp:function(ne,Qe,we){(lt!==ne||K!==Qe||_t!==we)&&(i.stencilOp(ne,Qe,we),lt=ne,K=Qe,_t=we)},setLocked:function(ne){G=ne},setClear:function(ne){Nt!==ne&&(i.clearStencil(ne),Nt=ne)},reset:function(){G=!1,bt=null,it=null,vt=null,Mt=null,lt=null,K=null,_t=null,Nt=null}}}let r=new e,a=new n,l=new s,o=new WeakMap,c=new WeakMap,u={},h={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,T=null,M=null,_=null,b=null,R=null,y=new mt(0,0,0),S=0,C=!1,D=null,P=null,L=null,w=null,I=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,B=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=B>=1):U.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=B>=2);let k=null,W={},j=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),zt=new Ee().fromArray(j),Ft=new Ee().fromArray(ot);function Vt(G,bt,it,vt){let Mt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(G,lt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let K=0;K<it;K++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(bt+K,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return lt}let J={};J[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),nt(i.DEPTH_TEST),a.setFunc(qs),gt(!1),Jt(kc),nt(i.CULL_FACE),dt(En);function nt(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function St(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Yt(G,bt){return f[G]!==bt?(i.bindFramebuffer(G,bt),f[G]=bt,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Rt(G,bt){let it=g,vt=!1;if(G){it=p.get(bt),it===void 0&&(it=[],p.set(bt,it));let Mt=G.textures;if(it.length!==Mt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,K=Mt.length;lt<K;lt++)it[lt]=i.COLOR_ATTACHMENT0+lt;it.length=Mt.length,vt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,vt=!0);vt&&i.drawBuffers(it)}function tt(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let pt={[xs]:i.FUNC_ADD,[_h]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};pt[Mh]=i.MIN,pt[bh]=i.MAX;let ft={[Sh]:i.ZERO,[Th]:i.ONE,[Eh]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[Ih]:i.SRC_ALPHA_SATURATE,[Ch]:i.DST_COLOR,[Ah]:i.DST_ALPHA,[wh]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[Ph]:i.ONE_MINUS_DST_COLOR,[Rh]:i.ONE_MINUS_DST_ALPHA,[Lh]:i.CONSTANT_COLOR,[Dh]:i.ONE_MINUS_CONSTANT_COLOR,[Nh]:i.CONSTANT_ALPHA,[Uh]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(G,bt,it,vt,Mt,lt,K,_t,Nt,ne){if(G===En){m===!0&&(St(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),G!==vh){if(G!==d||ne!==C){if((v!==xs||_!==xs)&&(i.blendEquation(i.FUNC_ADD),v=xs,_=xs),ne)switch(G){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",G);break}else switch(G){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hc:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",G);break}T=null,M=null,b=null,R=null,y.set(0,0,0),S=0,d=G,C=ne}return}Mt=Mt||bt,lt=lt||it,K=K||vt,(bt!==v||Mt!==_)&&(i.blendEquationSeparate(pt[bt],pt[Mt]),v=bt,_=Mt),(it!==T||vt!==M||lt!==b||K!==R)&&(i.blendFuncSeparate(ft[it],ft[vt],ft[lt],ft[K]),T=it,M=vt,b=lt,R=K),(_t.equals(y)===!1||Nt!==S)&&(i.blendColor(_t.r,_t.g,_t.b,Nt),y.copy(_t),S=Nt),d=G,C=!1}function st(G,bt){G.side===nn?St(i.CULL_FACE):nt(i.CULL_FACE);let it=G.side===an;bt&&(it=!it),gt(it),G.blending===ir&&G.transparent===!1?dt(En):dt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let vt=G.stencilWrite;l.setTest(vt),vt&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Xt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(G){D!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),D=G)}function Jt(G){G!==mh?(nt(i.CULL_FACE),G!==P&&(G===kc?i.cullFace(i.BACK):G===gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),P=G}function Qt(G){G!==L&&(N&&i.lineWidth(G),L=G)}function Xt(G,bt,it){G?(nt(i.POLYGON_OFFSET_FILL),(w!==bt||I!==it)&&(w=bt,I=it,a.getReversed()&&(bt=-bt),i.polygonOffset(bt,it))):St(i.POLYGON_OFFSET_FILL)}function se(G){G?nt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function ue(G){G===void 0&&(G=i.TEXTURE0+O-1),k!==G&&(i.activeTexture(G),k=G)}function V(G,bt,it){it===void 0&&(k===null?it=i.TEXTURE0+O-1:it=k);let vt=W[it];vt===void 0&&(vt={type:void 0,texture:void 0},W[it]=vt),(vt.type!==G||vt.texture!==bt)&&(k!==it&&(i.activeTexture(it),k=it),i.bindTexture(G,bt||J[G]),vt.type=G,vt.texture=bt)}function Se(){let G=W[k];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ae(){try{i.compressedTexImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function E(){try{i.texSubImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function X(){try{i.texSubImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function yt(){try{i.texStorage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function Tt(){try{i.texStorage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function et(){try{i.texImage2D(...arguments)}catch(G){jt("WebGLState:",G)}}function rt(){try{i.texImage3D(...arguments)}catch(G){jt("WebGLState:",G)}}function Et(G){return h[G]!==void 0?h[G]:i.getParameter(G)}function Gt(G,bt){h[G]!==bt&&(i.pixelStorei(G,bt),h[G]=bt)}function wt(G){zt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),zt.copy(G))}function At(G){Ft.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ft.copy(G))}function Wt(G,bt){let it=c.get(bt);it===void 0&&(it=new WeakMap,c.set(bt,it));let vt=it.get(G);vt===void 0&&(vt=i.getUniformBlockIndex(bt,G.name),it.set(G,vt))}function Ot(G,bt){let vt=c.get(bt).get(G);o.get(bt)!==vt&&(i.uniformBlockBinding(bt,vt,G.__bindingPointIndex),o.set(bt,vt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},k=null,W={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,T=null,M=null,_=null,b=null,R=null,y=new mt(0,0,0),S=0,C=!1,D=null,P=null,L=null,w=null,I=null,zt.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:nt,disable:St,bindFramebuffer:Yt,drawBuffers:Rt,useProgram:tt,setBlending:dt,setMaterial:st,setFlipSided:gt,setCullFace:Jt,setLineWidth:Qt,setPolygonOffset:Xt,setScissorTest:se,activeTexture:ue,bindTexture:V,unbindTexture:Se,compressedTexImage2D:ae,compressedTexImage3D:F,texImage2D:et,texImage3D:rt,pixelStorei:Gt,getParameter:Et,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:yt,texStorage3D:Tt,texSubImage2D:E,texSubImage3D:X,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:wt,viewport:At,reset:ee}}function mv(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,u=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,E){return g?new OffscreenCanvas(F,E):Fr("canvas")}function m(F,E,X){let Z=1,Q=ae(F);if((Q.width>X||Q.height>X)&&(Z=X/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let yt=Math.floor(Z*Q.width),Tt=Math.floor(Z*Q.height);f===void 0&&(f=x(yt,Tt));let et=E?x(yt,Tt):f;return et.width=yt,et.height=Tt,et.getContext("2d").drawImage(F,0,0,yt,Tt),Kt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+yt+"x"+Tt+")."),et}else return"data"in F&&Kt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),F;return F}function d(F){return F.generateMipmaps}function v(F){i.generateMipmap(F)}function T(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,E,X,Z,Q,yt=!1){if(F!==null){if(i[F]!==void 0)return i[F];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Tt;Z&&(Tt=t.get("EXT_texture_norm16"),Tt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=E;if(E===i.RED&&(X===i.FLOAT&&(et=i.R32F),X===i.HALF_FLOAT&&(et=i.R16F),X===i.UNSIGNED_BYTE&&(et=i.R8),X===i.UNSIGNED_SHORT&&Tt&&(et=Tt.R16_EXT),X===i.SHORT&&Tt&&(et=Tt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.R8UI),X===i.UNSIGNED_SHORT&&(et=i.R16UI),X===i.UNSIGNED_INT&&(et=i.R32UI),X===i.BYTE&&(et=i.R8I),X===i.SHORT&&(et=i.R16I),X===i.INT&&(et=i.R32I)),E===i.RG&&(X===i.FLOAT&&(et=i.RG32F),X===i.HALF_FLOAT&&(et=i.RG16F),X===i.UNSIGNED_BYTE&&(et=i.RG8),X===i.UNSIGNED_SHORT&&Tt&&(et=Tt.RG16_EXT),X===i.SHORT&&Tt&&(et=Tt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RG8UI),X===i.UNSIGNED_SHORT&&(et=i.RG16UI),X===i.UNSIGNED_INT&&(et=i.RG32UI),X===i.BYTE&&(et=i.RG8I),X===i.SHORT&&(et=i.RG16I),X===i.INT&&(et=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGB8UI),X===i.UNSIGNED_SHORT&&(et=i.RGB16UI),X===i.UNSIGNED_INT&&(et=i.RGB32UI),X===i.BYTE&&(et=i.RGB8I),X===i.SHORT&&(et=i.RGB16I),X===i.INT&&(et=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),X===i.UNSIGNED_INT&&(et=i.RGBA32UI),X===i.BYTE&&(et=i.RGBA8I),X===i.SHORT&&(et=i.RGBA16I),X===i.INT&&(et=i.RGBA32I)),E===i.RGB&&(X===i.UNSIGNED_SHORT&&Tt&&(et=Tt.RGB16_EXT),X===i.SHORT&&Tt&&(et=Tt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),E===i.RGBA){let rt=yt?Ur:re.getTransfer(Q);X===i.FLOAT&&(et=i.RGBA32F),X===i.HALF_FLOAT&&(et=i.RGBA16F),X===i.UNSIGNED_BYTE&&(et=rt===pe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Tt&&(et=Tt.RGBA16_EXT),X===i.SHORT&&Tt&&(et=Tt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(F,E){let X;return F?E===null||E===Qn||E===rr?X=i.DEPTH24_STENCIL8:E===kn?X=i.DEPTH32F_STENCIL8:E===sr&&(X=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qn||E===rr?X=i.DEPTH_COMPONENT24:E===kn?X=i.DEPTH_COMPONENT32F:E===sr&&(X=i.DEPTH_COMPONENT16),X}function b(F,E){return d(F)===!0||F.isFramebufferTexture&&F.minFilter!==He&&F.minFilter!==Xe?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function R(F){let E=F.target;E.removeEventListener("dispose",R),S(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function y(F){let E=F.target;E.removeEventListener("dispose",y),D(E)}function S(F){let E=n.get(F);if(E.__webglInit===void 0)return;let X=F.source,Z=p.get(X);if(Z){let Q=Z[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(F),Object.keys(Z).length===0&&p.delete(X)}n.remove(F)}function C(F){let E=n.get(F);i.deleteTexture(E.__webglTexture);let X=F.source,Z=p.get(X);delete Z[E.__cacheKey],a.memory.textures--}function D(F){let E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let Q=0;Q<E.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)i.deleteFramebuffer(E.__webglFramebuffer[Z]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let X=F.textures;for(let Z=0,Q=X.length;Z<Q;Z++){let yt=n.get(X[Z]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(X[Z])}n.remove(F)}let P=0;function L(){P=0}function w(){return P}function I(F){P=F}function O(){let F=P;return F>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,F}function N(F){let E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function B(F,E){let X=n.get(F);if(F.isVideoTexture&&V(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&X.__version!==F.version){let Z=F.image;if(Z===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(X,F,E);return}}else F.isExternalTexture&&(X.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function U(F,E){let X=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){St(X,F,E);return}else F.isExternalTexture&&(X.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function k(F,E){let X=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){St(X,F,E);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function W(F,E){let X=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&X.__version!==F.version){Yt(X,F,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}let j={[ya]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},ot={[He]:i.NEAREST,[Oh]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},zt={[Vh]:i.NEVER,[Yh]:i.ALWAYS,[Gh]:i.LESS,[Cl]:i.LEQUAL,[Wh]:i.EQUAL,[Pl]:i.GEQUAL,[Xh]:i.GREATER,[qh]:i.NOTEQUAL};function Ft(F,E){if(E.type===kn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Xe||E.magFilter===Xa||E.magFilter===uo||E.magFilter===zn||E.minFilter===Xe||E.minFilter===Xa||E.minFilter===uo||E.minFilter===zn)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,j[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,j[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,j[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ot[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ot[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,zt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===He||E.minFilter!==uo&&E.minFilter!==zn||E.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Vt(F,E){let X=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",R));let Z=E.source,Q=p.get(Z);Q===void 0&&(Q={},p.set(Z,Q));let yt=N(E);if(yt!==F.__cacheKey){Q[yt]===void 0&&(Q[yt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),Q[yt].usedTimes++;let Tt=Q[F.__cacheKey];Tt!==void 0&&(Q[F.__cacheKey].usedTimes--,Tt.usedTimes===0&&C(E)),F.__cacheKey=yt,F.__webglTexture=Q[yt].texture}return X}function J(F,E,X){return Math.floor(Math.floor(F/X)/E)}function nt(F,E,X,Z){let yt=F.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,X,Z,E.data);else{yt.sort((Gt,wt)=>Gt.start-wt.start);let Tt=0;for(let Gt=1;Gt<yt.length;Gt++){let wt=yt[Tt],At=yt[Gt],Wt=wt.start+wt.count,Ot=J(At.start,E.width,4),ee=J(wt.start,E.width,4);At.start<=Wt+1&&Ot===ee&&J(At.start+At.count-1,E.width,4)===Ot?wt.count=Math.max(wt.count,At.start+At.count-wt.start):(++Tt,yt[Tt]=At)}yt.length=Tt+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Gt=0,wt=yt.length;Gt<wt;Gt++){let At=yt[Gt],Wt=Math.floor(At.start/4),Ot=Math.ceil(At.count/4),ee=Wt%E.width,G=Math.floor(Wt/E.width),bt=Ot,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,ee,G,bt,it,X,Z,E.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function St(F,E,X){let Z=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=i.TEXTURE_3D);let Q=Vt(F,E),yt=E.source;e.bindTexture(Z,F.__webglTexture,i.TEXTURE0+X);let Tt=n.get(yt);if(yt.version!==Tt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let it=re.getPrimaries(re.workingColorSpace),vt=E.colorSpace===Ti?null:re.getPrimaries(E.colorSpace),Mt=E.colorSpace===Ti||it===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let rt=m(E.image,!1,s.maxTextureSize);rt=Se(E,rt);let Et=r.convert(E.format,E.colorSpace),Gt=r.convert(E.type),wt=M(E.internalFormat,Et,Gt,E.normalized,E.colorSpace,E.isVideoTexture);Ft(Z,E);let At,Wt=E.mipmaps,Ot=E.isVideoTexture!==!0,ee=Tt.__version===void 0||Q===!0,G=yt.dataReady,bt=b(E,rt);if(E.isDepthTexture)wt=_(E.format===Ji,E.type),ee&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,wt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,wt,rt.width,rt.height,0,Et,Gt,null));else if(E.isDataTexture)if(Wt.length>0){Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,bt,wt,Wt[0].width,Wt[0].height);for(let it=0,vt=Wt.length;it<vt;it++)At=Wt[it],Ot?G&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,At.width,At.height,Et,Gt,At.data):e.texImage2D(i.TEXTURE_2D,it,wt,At.width,At.height,0,Et,Gt,At.data);E.generateMipmaps=!1}else Ot?(ee&&e.texStorage2D(i.TEXTURE_2D,bt,wt,rt.width,rt.height),G&&nt(E,rt,Et,Gt)):e.texImage2D(i.TEXTURE_2D,0,wt,rt.width,rt.height,0,Et,Gt,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,wt,Wt[0].width,Wt[0].height,rt.depth);for(let it=0,vt=Wt.length;it<vt;it++)if(At=Wt[it],E.format!==Hn)if(Et!==null)if(Ot){if(G)if(E.layerUpdates.size>0){let Mt=su(At.width,At.height,E.format,E.type);for(let lt of E.layerUpdates){let K=At.data.subarray(lt*Mt/At.data.BYTES_PER_ELEMENT,(lt+1)*Mt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,lt,At.width,At.height,1,Et,K)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,At.width,At.height,rt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,wt,At.width,At.height,rt.depth,0,At.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,At.width,At.height,rt.depth,Et,Gt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,wt,At.width,At.height,rt.depth,0,Et,Gt,At.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ot&&ee&&e.texStorage2D(i.TEXTURE_2D,bt,wt,Wt[0].width,Wt[0].height);for(let it=0,vt=Wt.length;it<vt;it++)At=Wt[it],E.format!==Hn?Et!==null?Ot?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,it,wt,At.width,At.height,0,At.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?G&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,At.width,At.height,Et,Gt,At.data):e.texImage2D(i.TEXTURE_2D,it,wt,At.width,At.height,0,Et,Gt,At.data)}else if(E.isDataArrayTexture)if(Ot){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,wt,rt.width,rt.height,rt.depth),G)if(E.layerUpdates.size>0){let it=su(rt.width,rt.height,E.format,E.type);for(let vt of E.layerUpdates){let Mt=rt.data.subarray(vt*it/rt.data.BYTES_PER_ELEMENT,(vt+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,rt.width,rt.height,1,Et,Gt,Mt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Et,Gt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,rt.width,rt.height,rt.depth,0,Et,Gt,rt.data);else if(E.isData3DTexture)Ot?(ee&&e.texStorage3D(i.TEXTURE_3D,bt,wt,rt.width,rt.height,rt.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Et,Gt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,wt,rt.width,rt.height,rt.depth,0,Et,Gt,rt.data);else if(E.isFramebufferTexture){if(ee)if(Ot)e.texStorage2D(i.TEXTURE_2D,bt,wt,rt.width,rt.height);else{let it=rt.width,vt=rt.height;for(let Mt=0;Mt<bt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,wt,it,vt,0,Et,Gt,null),it>>=1,vt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),rt.parentNode!==it){it.appendChild(rt),h.add(E),it.onpaint=vt=>{let Mt=vt.changedElements;for(let lt of h)Mt.includes(lt.image)&&(lt.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let Mt=i.RGBA,lt=i.RGBA,K=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Mt,lt,K,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Ot&&ee){let it=ae(Wt[0]);e.texStorage2D(i.TEXTURE_2D,bt,wt,it.width,it.height)}for(let it=0,vt=Wt.length;it<vt;it++)At=Wt[it],Ot?G&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Et,Gt,At):e.texImage2D(i.TEXTURE_2D,it,wt,Et,Gt,At);E.generateMipmaps=!1}else if(Ot){if(ee){let it=ae(rt);e.texStorage2D(i.TEXTURE_2D,bt,wt,it.width,it.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Gt,rt)}else e.texImage2D(i.TEXTURE_2D,0,wt,Et,Gt,rt);d(E)&&v(Z),Tt.__version=yt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Yt(F,E,X){if(E.image.length!==6)return;let Z=Vt(F,E),Q=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+X);let yt=n.get(Q);if(Q.version!==yt.__version||Z===!0){e.activeTexture(i.TEXTURE0+X);let Tt=re.getPrimaries(re.workingColorSpace),et=E.colorSpace===Ti?null:re.getPrimaries(E.colorSpace),rt=E.colorSpace===Ti||Tt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Et=E.isCompressedTexture||E.image[0].isCompressedTexture,Gt=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let lt=0;lt<6;lt++)!Et&&!Gt?wt[lt]=m(E.image[lt],!0,s.maxCubemapSize):wt[lt]=Gt?E.image[lt].image:E.image[lt],wt[lt]=Se(E,wt[lt]);let At=wt[0],Wt=r.convert(E.format,E.colorSpace),Ot=r.convert(E.type),ee=M(E.internalFormat,Wt,Ot,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,bt=yt.__version===void 0||Z===!0,it=Q.dataReady,vt=b(E,At);Ft(i.TEXTURE_CUBE_MAP,E);let Mt;if(Et){G&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ee,At.width,At.height);for(let lt=0;lt<6;lt++){Mt=wt[lt].mipmaps;for(let K=0;K<Mt.length;K++){let _t=Mt[K];E.format!==Hn?Wt!==null?G?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,K,0,0,_t.width,_t.height,Wt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,K,ee,_t.width,_t.height,0,_t.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,K,0,0,_t.width,_t.height,Wt,Ot,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,K,ee,_t.width,_t.height,0,Wt,Ot,_t.data)}}}else{if(Mt=E.mipmaps,G&&bt){Mt.length>0&&vt++;let lt=ae(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ee,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Gt){G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,wt[lt].width,wt[lt].height,Wt,Ot,wt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,wt[lt].width,wt[lt].height,0,Wt,Ot,wt[lt].data);for(let K=0;K<Mt.length;K++){let Nt=Mt[K].image[lt].image;G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,K+1,0,0,Nt.width,Nt.height,Wt,Ot,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,K+1,ee,Nt.width,Nt.height,0,Wt,Ot,Nt.data)}}else{G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Wt,Ot,wt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,Wt,Ot,wt[lt]);for(let K=0;K<Mt.length;K++){let _t=Mt[K];G?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,K+1,0,0,Wt,Ot,_t.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,K+1,ee,Wt,Ot,_t.image[lt])}}}d(E)&&v(i.TEXTURE_CUBE_MAP),yt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Rt(F,E,X,Z,Q,yt){let Tt=r.convert(X.format,X.colorSpace),et=r.convert(X.type),rt=M(X.internalFormat,Tt,et,X.normalized,X.colorSpace),Et=n.get(E),Gt=n.get(X);if(Gt.__renderTarget=E,!Et.__hasExternalTextures){let wt=Math.max(1,E.width>>yt),At=Math.max(1,E.height>>yt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,yt,rt,wt,At,E.depth,0,Tt,et,null):e.texImage2D(Q,yt,rt,wt,At,0,Tt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),ue(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,Gt.__webglTexture,0,se(E)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,Gt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(F,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){let Z=E.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,yt=_(E.stencilBuffer,Q),Tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(E),yt,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(E),yt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,yt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,F)}else{let Z=E.textures;for(let Q=0;Q<Z.length;Q++){let yt=Z[Q],Tt=r.convert(yt.format,yt.colorSpace),et=r.convert(yt.type),rt=M(yt.internalFormat,Tt,et,yt.normalized,yt.colorSpace);ue(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se(E),rt,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,se(E),rt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,rt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(F,E,X){let Z=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(E.depthTexture);if(Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,E.depthTexture);let Et=r.convert(E.depthTexture.format),Gt=r.convert(E.depthTexture.type),wt;E.depthTexture.format===oi?wt=i.DEPTH_COMPONENT24:E.depthTexture.format===Ji&&(wt=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,wt,E.width,E.height,0,Et,Gt,null)}}else B(E.depthTexture,0);let yt=Q.__webglTexture,Tt=se(E),et=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,rt=E.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===oi)ue(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,et,yt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,et,yt,0);else if(E.depthTexture.format===Ji)ue(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,et,yt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,et,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(F){let E=n.get(F),X=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){let Z=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=Z}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let Z=0;Z<6;Z++)pt(E.__webglFramebuffer[Z],F,Z);else{let Z=F.texture.mipmaps;Z&&Z.length>0?pt(E.__webglFramebuffer[0],F,0):pt(E.__webglFramebuffer,F,0)}else if(X){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=i.createRenderbuffer(),tt(E.__webglDepthbuffer[Z],F,!1);else{let Q=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=E.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,yt)}}else{let Z=F.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),tt(E.__webglDepthbuffer,F,!1);else{let Q=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(F,E,X){let Z=n.get(F);E!==void 0&&Rt(Z.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ft(F)}function st(F){let E=F.texture,X=n.get(F),Z=n.get(E);F.addEventListener("dispose",y);let Q=F.textures,yt=F.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=E.version,a.memory.textures++),yt){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let rt=0;rt<E.mipmaps.length;rt++)X.__webglFramebuffer[et][rt]=i.createFramebuffer()}else X.__webglFramebuffer[et]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<E.mipmaps.length;et++)X.__webglFramebuffer[et]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let et=0,rt=Q.length;et<rt;et++){let Et=n.get(Q[et]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&ue(F)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<Q.length;et++){let rt=Q[et];X.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[et]);let Et=r.convert(rt.format,rt.colorSpace),Gt=r.convert(rt.type),wt=M(rt.internalFormat,Et,Gt,rt.normalized,rt.colorSpace,F.isXRRenderTarget===!0),At=se(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,wt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,X.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(X.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,E);for(let et=0;et<6;et++)if(E.mipmaps&&E.mipmaps.length>0)for(let rt=0;rt<E.mipmaps.length;rt++)Rt(X.__webglFramebuffer[et][rt],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,rt);else Rt(X.__webglFramebuffer[et],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);d(E)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let et=0,rt=Q.length;et<rt;et++){let Et=Q[et],Gt=n.get(Et),wt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(wt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Gt.__webglTexture),Ft(wt,Et),Rt(X.__webglFramebuffer,F,Et,i.COLOR_ATTACHMENT0+et,wt,0),d(Et)&&v(wt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(et=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,Z.__webglTexture),Ft(et,E),E.mipmaps&&E.mipmaps.length>0)for(let rt=0;rt<E.mipmaps.length;rt++)Rt(X.__webglFramebuffer[rt],F,E,i.COLOR_ATTACHMENT0,et,rt);else Rt(X.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,et,0);d(E)&&v(et),e.unbindTexture()}F.depthBuffer&&ft(F)}function gt(F){let E=F.textures;for(let X=0,Z=E.length;X<Z;X++){let Q=E[X];if(d(Q)){let yt=T(F),Tt=n.get(Q).__webglTexture;e.bindTexture(yt,Tt),v(yt),e.unbindTexture()}}}let Jt=[],Qt=[];function Xt(F){if(F.samples>0){if(ue(F)===!1){let E=F.textures,X=F.width,Z=F.height,Q=i.COLOR_BUFFER_BIT,yt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(F),et=E.length>1;if(et)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let rt=F.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);let Gt=n.get(E[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,X,Z,0,0,X,Z,Q,i.NEAREST),o===!0&&(Jt.length=0,Qt.length=0,Jt.push(i.COLOR_ATTACHMENT0+Et),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Jt.push(yt),Qt.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);let Gt=n.get(E[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&o){let E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function se(F){return Math.min(s.maxSamples,F.samples)}function ue(F){let E=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(F){let E=a.render.frame;u.get(F)!==E&&(u.set(F,E),F.update())}function Se(F,E){let X=F.colorSpace,Z=F.format,Q=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||X!==Nr&&X!==Ti&&(re.getTransfer(X)===pe?(Z!==Hn||Q!==wn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",X)),E}function ae(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.getTextureUnits=w,this.setTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=dt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gv(i,t){function e(n,s=Ti){let r,a=re.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Ze)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===Hn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===or)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===ho||n===fo||n===po||n===mo)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===ja||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===go||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rl)return r.COMPRESSED_R11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===go)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===vl||n===_l||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ll)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===Sl||n===Tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===wl||n===xo||n===Al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===El)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
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

}`,Su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ce({vertexShader:xv,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tu=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,c=null,u=null,h=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Su,d={},v=e.getContextAttributes(),T=null,M=null,_=[],b=[],R=new qt,y=null,S=null,C=new rn;C.viewport=new Ee;let D=new rn;D.viewport=new Ee;let P=[C,D],L=new Ha,w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=_[J];return nt===void 0&&(nt=new $s,_[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=_[J];return nt===void 0&&(nt=new $s,_[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=_[J];return nt===void 0&&(nt=new $s,_[J]=nt),nt.getHandSpace()};function O(J){let nt=b.indexOf(J.inputSource);if(nt===-1)return;let St=_[nt];St!==void 0&&(St.update(J.inputSource,J.frame,c||a),St.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",B);for(let J=0;J<_.length;J++){let nt=b[J];nt!==null&&(b[J]=null,_[J].disconnect(nt))}w=null,I=null,m.reset();for(let J in d)delete d[J];if(t.setRenderTarget(T),p=null,f=null,h=null,s=null,M=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),S!==null){let J=S.camera;J.fov=S.fov,J.zoom=S.zoom,J.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Yt=null,Rt=null;v.depth&&(Rt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=v.stencil?Ji:oi,Yt=v.stencil?rr:Qn);let tt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Re(f.textureWidth,f.textureHeight,{format:Hn,type:wn,depthTexture:new Vi(f.textureWidth,f.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let St={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Re(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(J){for(let nt=0;nt<J.removed.length;nt++){let St=J.removed[nt],Yt=b.indexOf(St);Yt>=0&&(b[Yt]=null,_[Yt].disconnect(St))}for(let nt=0;nt<J.added.length;nt++){let St=J.added[nt],Yt=b.indexOf(St);if(Yt===-1){for(let tt=0;tt<_.length;tt++)if(tt>=b.length){b.push(St),Yt=tt;break}else if(b[tt]===null){b[tt]=St,Yt=tt;break}if(Yt===-1)break}let Rt=_[Yt];Rt&&Rt.connect(St)}}let U=new z,k=new z;function W(J,nt,St){U.setFromMatrixPosition(nt.matrixWorld),k.setFromMatrixPosition(St.matrixWorld);let Yt=U.distanceTo(k),Rt=nt.projectionMatrix.elements,tt=St.projectionMatrix.elements,pt=Rt[14]/(Rt[10]-1),ft=Rt[14]/(Rt[10]+1),dt=(Rt[9]+1)/Rt[5],st=(Rt[9]-1)/Rt[5],gt=(Rt[8]-1)/Rt[0],Jt=(tt[8]+1)/tt[0],Qt=pt*gt,Xt=pt*Jt,se=Yt/(-gt+Jt),ue=se*-gt;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ue),J.translateZ(se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Rt[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let V=pt+se,Se=ft+se,ae=Qt-ue,F=Xt+(Yt-ue),E=dt*ft/Se*V,X=st*ft/Se*V;J.projectionMatrix.makePerspective(ae,F,E,X,V,Se),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function j(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let nt=J.near,St=J.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(St=m.depthFar)),L.near=D.near=C.near=nt,L.far=D.far=C.far=St,(w!==L.near||I!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),w=L.near,I=L.far),L.layers.mask=J.layers.mask|6,C.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;let Yt=J.parent,Rt=L.cameras;j(L,Yt);for(let tt=0;tt<Rt.length;tt++)j(Rt[tt],Yt);Rt.length===2?W(L,C,D):L.projectionMatrix.copy(C.projectionMatrix),S===null&&J.isPerspectiveCamera&&(S={camera:J,fov:J.fov,zoom:J.zoom}),ot(J,L,Yt)};function ot(J,nt,St){St===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Br*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return o},this.setFoveation=function(J){o=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(J){return d[J]};let zt=null;function Ft(J,nt){if(u=nt.getViewerPose(c||a),g=nt,u!==null){let St=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Yt=!1;St.length!==L.cameras.length&&(L.cameras.length=0,Yt=!0);for(let ft=0;ft<St.length;ft++){let dt=St[ft],st=null;if(p!==null)st=p.getViewport(dt);else{let Jt=h.getViewSubImage(f,dt);st=Jt.viewport,ft===0&&(t.setRenderTargetTextures(M,Jt.colorTexture,Jt.depthStencilTexture),t.setRenderTarget(M))}let gt=P[ft];gt===void 0&&(gt=new rn,gt.layers.enable(ft),gt.viewport=new Ee,P[ft]=gt),gt.matrix.fromArray(dt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(dt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(st.x,st.y,st.width,st.height),ft===0&&(L.matrix.copy(gt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Yt===!0&&L.cameras.push(gt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let ft=h.getDepthInformation(St[0]);ft&&ft.isValid&&ft.texture&&m.init(ft,s.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let ft=0;ft<St.length;ft++){let dt=St[ft].camera;if(dt){let st=d[dt];st||(st=new qr,d[dt]=st);let gt=h.getCameraImage(dt);st.sourceTexture=gt}}}}for(let St=0;St<_.length;St++){let Yt=b[St],Rt=_[St];Yt!==null&&Rt!==void 0&&Rt.update(Yt,nt,c||a)}zt&&zt(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Vt=new Tf;Vt.setAnimationLoop(Ft),this.setAnimationLoop=function(J){zt=J},this.dispose=function(){}}},_v=new Zt,Pf=new te;Pf.set(-1,0,0,0,1,0,0,0,1);function yv(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,eu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,T,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?o(m,d,v,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===an&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===an&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),T=v.envMap,M=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,v,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mv(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(M,_){let b=_.program;n.uniformBlockBinding(M,b)}function c(M,_){let b=s[M.id];b===void 0&&(m(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",v));let R=_.program;n.updateUBOMapping(M,R);let y=t.render.frame;r[M.id]!==y&&(f(M),r[M.id]=y)}function u(M){let _=h();M.__bindingPointIndex=_;let b=i.createBuffer(),R=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function h(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=s[M.id],b=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let y=0,S=b.length;y<S;y++){let C=b[y];if(Array.isArray(C))for(let D=0,P=C.length;D<P;D++)p(C[D],y,D,R);else p(C,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,_,b,R){if(x(M,_,b,R)===!0){let y=M.__offset,S=M.value;if(Array.isArray(S)){let C=0;for(let D=0;D<S.length;D++){let P=S[D],L=d(P);g(P,M.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function g(M,_,b){typeof M=="number"||typeof M=="boolean"?_[0]=M:M.isMatrix3?(_[0]=M.elements[0],_[1]=M.elements[1],_[2]=M.elements[2],_[3]=0,_[4]=M.elements[3],_[5]=M.elements[4],_[6]=M.elements[5],_[7]=0,_[8]=M.elements[6],_[9]=M.elements[7],_[10]=M.elements[8],_[11]=0):ArrayBuffer.isView(M)?_.set(new M.constructor(M.buffer,M.byteOffset,_.length)):M.toArray(_,b)}function x(M,_,b,R){let y=M.value,S=_+"_"+b;if(R[S]===void 0)return typeof y=="number"||typeof y=="boolean"?R[S]=y:ArrayBuffer.isView(y)?R[S]=y.slice():R[S]=y.clone(),!0;{let C=R[S];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return R[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(M){let _=M.uniforms,b=0,R=16;for(let S=0,C=_.length;S<C;S++){let D=Array.isArray(_[S])?_[S]:[_[S]];for(let P=0,L=D.length;P<L;P++){let w=D[P],I=Array.isArray(w.value)?w.value:[w.value];for(let O=0,N=I.length;O<N;O++){let B=I[O],U=d(B),k=b%R,W=k%U.boundary,j=k+W;b+=W,j!==0&&R-j<U.storage&&(b+=R-j),w.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,b+=U.storage}}}let y=b%R;return y>0&&(b+=R-y),M.__size=b,M.__cache={},this}function d(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",M),_}function v(M){let _=M.target;_.removeEventListener("dispose",v);let b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function T(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:o,update:c,dispose:T}}var bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function Sv(){return ci===null&&(ci=new ps(bv,16,16,$i,Ze),ci.name="DFG_LUT",ci.minFilter=Xe,ci.magFilter=Xe,ci.wrapS=ri,ci.wrapT=ri,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var Ul=class{constructor(t={}){let{canvas:e=Jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=wn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=p,m=new Set([Ka,$a,Ja]),d=new Set([wn,Qn,sr,rr,Ya,Za]),v=new Uint32Array(4),T=new Int32Array(4),M=new z,_=null,b=null,R=[],y=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,P=null,L=null,w=null,I=null;this._outputColorSpace=Pe;let O=0,N=0,B=null,U=-1,k=null,W=new Ee,j=new Ee,ot=null,zt=new mt(0),Ft=0,Vt=e.width,J=e.height,nt=1,St=null,Yt=null,Rt=new Ee(0,0,Vt,J),tt=new Ee(0,0,Vt,J),pt=!1,ft=new Ks,dt=!1,st=!1,gt=new Zt,Jt=new z,Qt=new Ee,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function ue(){return B===null?nt:1}let V=n;function Se(A,H){return e.getContext(A,H)}let ae,F,E,X,Z,Q,yt,Tt,et,rt,Et,Gt,wt,At,Wt,Ot,ee,G,bt,it,vt,Mt,lt;try{let A={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",Qe,!1),V===null){let H="webgl2";if(V=Se(H,A),V===null)throw Se(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}K()}catch(A){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",Qe,!1),jt("WebGLRenderer: "+A.message),A}function K(){ae=new Pg(V),ae.init(),vt=new gv(V,ae),F=new yg(V,ae,t,vt),E=new pv(V,ae),F.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),L=V.createFramebuffer(),w=V.createFramebuffer(),I=V.createFramebuffer(),X=new Dg(V),Z=new tv,Q=new mv(V,ae,E,Z,F,vt,X),yt=new Cg(C),Tt=new Up(V),Mt=new vg(V,Tt),et=new Ig(V,Tt,X,Mt),rt=new Ug(V,et,Tt,Mt,X),G=new Ng(V,F,Q),Wt=new Mg(Z),Et=new jx(C,yt,ae,F,Mt,Wt),Gt=new yv(C,Z),wt=new nv,At=new lv(ae),ee=new xg(C,yt,E,rt,g,o),Ot=new dv(C,rt,F),lt=new Mv(V,X,F,E),bt=new _g(V,ae,X),it=new Lg(V,ae,X),X.programs=Et.programs,C.capabilities=F,C.extensions=ae,C.properties=Z,C.renderLists=wt,C.shadowMap=Ot,C.state=E,C.info=X}x!==wn&&(S=new Bg(x,e.width,e.height,l,s,r));let _t=new Tu(C,V);this.xr=_t,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(A){A!==void 0&&(nt=A,this.setSize(Vt,J,!1))},this.getSize=function(A){return A.set(Vt,J)},this.setSize=function(A,H,$=!0){if(_t.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=A,J=H,e.width=Math.floor(A*nt),e.height=Math.floor(H*nt),$===!0&&(e.style.width=A+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Vt*nt,J*nt).floor()},this.setDrawingBufferSize=function(A,H,$){Vt=A,J=H,nt=$,e.width=Math.floor(A*$),e.height=Math.floor(H*$),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(x===wn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(W)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,H,$,q){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,H,$,q),E.viewport(W.copy(Rt).multiplyScalar(nt).round())},this.getScissor=function(A){return A.copy(tt)},this.setScissor=function(A,H,$,q){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,H,$,q),E.scissor(j.copy(tt).multiplyScalar(nt).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){E.setScissorTest(pt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){Yt=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,$=!0){let q=0;if(A){let Y=!1;if(B!==null){let Pt=B.texture.format;Y=m.has(Pt)}if(Y){let Pt=B.texture.type,Dt=d.has(Pt),Ct=ee.getClearColor(),Lt=ee.getClearAlpha(),xt=Ct.r,kt=Ct.g,Ht=Ct.b;Dt?(v[0]=xt,v[1]=kt,v[2]=Ht,v[3]=Lt,V.clearBufferuiv(V.COLOR,0,v)):(T[0]=xt,T[1]=kt,T[2]=Ht,T[3]=Lt,V.clearBufferiv(V.COLOR,0,T))}else q|=V.COLOR_BUFFER_BIT}H&&(q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",Qe,!1),ee.dispose(),wt.dispose(),At.dispose(),Z.dispose(),yt.dispose(),rt.dispose(),Mt.dispose(),lt.dispose(),Et.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Bo),_t.removeEventListener("sessionend",Oo),We.stop()};function Nt(A){A.preventDefault(),tu("WebGLRenderer: Context Lost."),D=!0}function ne(){tu("WebGLRenderer: Context Restored."),D=!1;let A=X.autoReset,H=Ot.enabled,$=Ot.autoUpdate,q=Ot.needsUpdate,Y=Ot.type;K(),X.autoReset=A,Ot.enabled=H,Ot.autoUpdate=$,Ot.needsUpdate=q,Ot.type=Y}function Qe(A){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function we(A){let H=A.target;H.removeEventListener("dispose",we),ws(H)}function ws(A){As(A),Z.remove(A)}function As(A){let H=Z.get(A).programs;H!==void 0&&(H.forEach(function($){Et.releaseProgram($)}),A.isShaderMaterial&&Et.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,$,q,Y,Pt){H===null&&(H=Xt);let Dt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ct=yn(A,H,$,q,Y);E.setMaterial(q,Dt);let Lt=$.index,xt=1;if(q.wireframe===!0){if(Lt=et.getWireframeAttribute($),Lt===void 0)return;xt=2}let kt=$.drawRange,Ht=$.attributes.position,Bt=kt.start*xt,oe=(kt.start+kt.count)*xt;Pt!==null&&(Bt=Math.max(Bt,Pt.start*xt),oe=Math.min(oe,(Pt.start+Pt.count)*xt)),Lt!==null?(Bt=Math.max(Bt,0),oe=Math.min(oe,Lt.count)):Ht!=null&&(Bt=Math.max(Bt,0),oe=Math.min(oe,Ht.count));let _e=oe-Bt;if(_e<0||_e===1/0)return;Mt.setup(Y,q,Ct,$,Lt);let xe,Me=bt;if(Lt!==null&&(xe=Tt.get(Lt),Me=it,Me.setIndex(xe)),Y.isMesh)q.wireframe===!0?(E.setLineWidth(q.wireframeLinewidth*ue()),Me.setMode(V.LINES)):Me.setMode(V.TRIANGLES);else if(Y.isLine){let un=q.linewidth;un===void 0&&(un=1),E.setLineWidth(un*ue()),Y.isLineSegments?Me.setMode(V.LINES):Y.isLineLoop?Me.setMode(V.LINE_LOOP):Me.setMode(V.LINE_STRIP)}else Y.isPoints?Me.setMode(V.POINTS):Y.isSprite&&Me.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let un=Y._multiDrawStarts,Ut=Y._multiDrawCounts,xn=Y._multiDrawCount,he=Lt?Tt.get(Lt).bytesPerElement:1,Bn=Z.get(q).currentProgram.getUniforms();for(let ii=0;ii<xn;ii++)Bn.setValue(V,"_gl_DrawID",ii),Me.render(un[ii]/he,Ut[ii])}else if(Y.isInstancedMesh)Me.renderInstances(Bt,_e,Y.count);else if($.isInstancedBufferGeometry){let un=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ut=Math.min($.instanceCount,un);Me.renderInstances(Bt,_e,Ut)}else Me.render(Bt,_e)};function Er(A,H,$,q){P!==null&&A.isNodeMaterial&&P.setObject(q,A),dt===!0&&Wt.setState(A,$,!1),A.transparent===!0&&A.side===nn&&A.forceSinglePass===!1?(A.side=an,A.needsUpdate=!0,os(A,H,q),A.side=Yi,A.needsUpdate=!0,os(A,H,q),A.side=nn):os(A,H,q)}this.compile=function(A,H,$=null){$===null&&($=A),P!==null&&P.renderStart(A,H,$),b=At.get($),b.init(H),y.push(b),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),A!==$&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),st=this.localClippingEnabled,dt=Wt.init(this.clippingPlanes,st),dt===!0&&Wt.setGlobalState(this.clippingPlanes,H),P!==null&&Ot.render(b.state.shadowsArray,$,H);let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Pt=Y.material;if(Pt)if(Array.isArray(Pt))for(let Dt=0;Dt<Pt.length;Dt++){let Ct=Pt[Dt];Er(Ct,$,H,Y),q.add(Ct)}else Er(Pt,$,H,Y),q.add(Pt)}),b=y.pop(),P!==null&&P.renderEnd(),q},this.compileAsync=function(A,H,$=null){let q=this.compile(A,H,$);return new Promise(Y=>{function Pt(){if(q.forEach(function(Dt){let Lt=Z.get(Dt).currentProgram;(Lt===void 0||Lt.isReady())&&q.delete(Dt)}),q.size===0){Y(A);return}setTimeout(Pt,10)}ae.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Rn=null;function Wn(A){Rn&&Rn(A)}function Bo(){We.stop()}function Oo(){We.start()}let We=new Tf;We.setAnimationLoop(Wn),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(A){Rn=A,_t.setAnimationLoop(A),A===null?We.stop():We.start()},_t.addEventListener("sessionstart",Bo),_t.addEventListener("sessionend",Oo),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(A,H);let $=_t.enabled===!0&&_t.isPresenting===!0,q=S!==null&&(B===null||$)&&S.begin(C,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(H),H=_t.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,H,B),b=At.get(A,y.length),b.init(H),b.state.textureUnits=Q.getTextureUnits(),y.push(b),gt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ft.setFromProjectionMatrix(gt,Jn,H.reversedDepth),st=this.localClippingEnabled,dt=Wt.init(this.clippingPlanes,st),_=wt.get(A,R.length),_.init(),R.push(_),_t.enabled===!0&&_t.isPresenting===!0){let Dt=C.xr.getDepthSensingMesh();Dt!==null&&gn(Dt,H,-1/0,C.sortObjects)}gn(A,H,0,C.sortObjects),_.finish(),P!==null&&P.updateLights(b.state.lightsArray),C.sortObjects===!0&&_.sort(St,Yt),se=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,se&&ee.addToRenderList(_,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Wt.beginShadows();let Y=b.state.shadowsArray;if(Ot.render(Y,A,H),dt===!0&&Wt.endShadows(),(q&&S.hasRenderPass())===!1){let Dt=_.opaque,Ct=_.transmissive;if(b.setupLights(),H.isArrayCamera){let Lt=H.cameras;if(Ct.length>0)for(let xt=0,kt=Lt.length;xt<kt;xt++){let Ht=Lt[xt];ko(Dt,Ct,A,Ht)}se&&ee.render(A);for(let xt=0,kt=Lt.length;xt<kt;xt++){let Ht=Lt[xt];zo(_,A,Ht,Ht.viewport)}}else Ct.length>0&&ko(Dt,Ct,A,H),se&&ee.render(A),zo(_,A,H)}B!==null&&N===0&&(Q.updateMultisampleRenderTarget(B),Q.updateRenderTargetMipmap(B)),q&&S.end(C),A.isScene===!0&&A.onAfterRender(C,A,H),Mt.resetDefaultState(),U=-1,k=null,y.pop(),y.length>0?(b=y[y.length-1],Q.setTextureUnits(b.state.textureUnits),dt===!0&&Wt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?_=R[R.length-1]:_=null,P!==null&&P.renderEnd()};function gn(A,H,$,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ft)){q&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);let Dt=rt.update(A),Ct=A.material;Ct.visible&&_.push(A,Dt,Ct,$,Qt.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ft))){let Dt=rt.update(A),Ct=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(Ct)){let Lt=Dt.groups;for(let xt=0,kt=Lt.length;xt<kt;xt++){let Ht=Lt[xt],Bt=Ct[Ht.materialIndex];Bt&&Bt.visible&&_.push(A,Dt,Bt,$,Qt.z,Ht,H)}}else Ct.visible&&_.push(A,Dt,Ct,$,Qt.z,null,H)}}let Pt=A.children;for(let Dt=0,Ct=Pt.length;Dt<Ct;Dt++)gn(Pt[Dt],H,$,q)}function zo(A,H,$,q){let{opaque:Y,transmissive:Pt,transparent:Dt}=A;b.setupLightsView($),dt===!0&&Wt.setGlobalState(C.clippingPlanes,$),q&&E.viewport(W.copy(q)),Y.length>0&&Fn(Y,H,$),Pt.length>0&&Fn(Pt,H,$),Dt.length>0&&Fn(Dt,H,$),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ko(A,H,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){let Bt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new Re(1,1,{generateMipmaps:!0,type:Bt?Ze:wn,minFilter:zn,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let Pt=b.state.transmissionRenderTarget[q.id],Dt=q.viewport||W;Pt.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);let Ct=C.getRenderTarget(),Lt=C.getActiveCubeFace(),xt=C.getActiveMipmapLevel();C.setRenderTarget(Pt),C.getClearColor(zt),Ft=C.getClearAlpha(),Ft<1&&C.setClearColor(16777215,.5),C.clear(),se&&ee.render($);let kt=C.toneMapping;C.toneMapping=Kn;let Ht=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),dt===!0&&Wt.setGlobalState(C.clippingPlanes,q),Fn(A,$,q),Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let oe=0,_e=H.length;oe<_e;oe++){let xe=H[oe],{object:Me,geometry:un,material:Ut,group:xn}=xe;if(Ut.side===nn&&Me.layers.test(q.layers)){let he=Ut.side;Ut.side=an,Ut.needsUpdate=!0,Rs(Me,$,q,un,Ut,xn),Ut.side=he,Ut.needsUpdate=!0,Bt=!0}}Bt===!0&&(Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt))}C.setRenderTarget(Ct,Lt,xt),C.setClearColor(zt,Ft),Ht!==void 0&&(q.viewport=Ht),C.toneMapping=kt}function Fn(A,H,$){let q=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Pt=A.length;Y<Pt;Y++){let Dt=A[Y],{object:Ct,geometry:Lt,group:xt}=Dt,kt=Dt.material;kt.allowOverride===!0&&q!==null&&(kt=q),Ct.layers.test($.layers)&&Rs(Ct,H,$,Lt,kt,xt)}}function Rs(A,H,$,q,Y,Pt){P!==null&&Y.isNodeMaterial&&P.setObject(A,Y),A.onBeforeRender(C,H,$,q,Y,Pt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,H,$,q,A,Pt),Y.transparent===!0&&Y.side===nn&&Y.forceSinglePass===!1?(Y.side=an,Y.needsUpdate=!0,C.renderBufferDirect($,H,q,Y,A,Pt),Y.side=Yi,Y.needsUpdate=!0,C.renderBufferDirect($,H,q,Y,A,Pt),Y.side=nn):C.renderBufferDirect($,H,q,Y,A,Pt),A.onAfterRender(C,H,$,q,Y,Pt)}function os(A,H,$){H.isScene!==!0&&(H=Xt);let q=Z.get(A),Y=b.state.lights,Pt=b.state.shadowsArray,Dt=Y.state.version,Ct=Et.getParameters(A,Y.state,Pt,H,$,b.state.lightProbeGridArray),Lt=Et.getProgramCacheKey(Ct),xt=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;let kt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=yt.get(A.envMap||q.environment,kt),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,xt===void 0&&(A.addEventListener("dispose",we),xt=new Map,q.programs=xt);let Ht=xt.get(Lt);if(Ht!==void 0){if(q.currentProgram===Ht&&q.lightsStateVersion===Dt)return Li(A,Ct),Ht}else Ct.uniforms=Et.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,$,Ct),A.onBeforeCompile(Ct,C),Ht=Et.acquireProgram(Ct,Lt),xt.set(Lt,Ht),q.uniforms=Ct.uniforms;let Bt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=Wt.uniform),Li(A,Ct),q.needsLights=Mn(A),q.lightsStateVersion=Dt,q.needsLights&&(Bt.ambientLightColor.value=Y.state.ambient,Bt.lightProbe.value=Y.state.probe,Bt.sunLights.value=Y.state.sun,Bt.sunLightShadows.value=Y.state.sunShadow,Bt.directionalLights.value=Y.state.directional,Bt.directionalLightShadows.value=Y.state.directionalShadow,Bt.spotLights.value=Y.state.spot,Bt.spotLightShadows.value=Y.state.spotShadow,Bt.rectAreaLights.value=Y.state.rectArea,Bt.ltc_1.value=Y.state.rectAreaLTC1,Bt.ltc_2.value=Y.state.rectAreaLTC2,Bt.pointLights.value=Y.state.point,Bt.pointLightShadows.value=Y.state.pointShadow,Bt.hemisphereLights.value=Y.state.hemi,Bt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Bt.sunShadowCascade.value=Y.state.sunShadowCascade,Bt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Bt.spotLightMatrix.value=Y.state.spotLightMatrix,Bt.spotLightMap.value=Y.state.spotLightMap,Bt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=Ht,q.uniformsList=null,Ht}function ni(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=cr.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Li(A,H){let $=Z.get(A);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Ho(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;M.setFromMatrixPosition(H.matrixWorld);for(let $=0,q=A.length;$<q;$++){let Y=A[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function yn(A,H,$,q,Y){H.isScene!==!0&&(H=Xt),Q.resetTextureUnits();let Pt=H.fog,Dt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,Ct=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:re.workingColorSpace,Lt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,xt=yt.get(q.envMap||Dt,Lt),kt=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ht=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!$.morphAttributes.position,oe=!!$.morphAttributes.normal,_e=!!$.morphAttributes.color,xe=Kn;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(xe=C.toneMapping);let Me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,un=Me!==void 0?Me.length:0,Ut=Z.get(q),xn=b.state.lights;if(dt===!0&&(st===!0||A!==k)){let Te=A===k&&q.id===U;Wt.setState(q,A,Te)}let he=!1;q.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==xn.state.version||Ut.outputColorSpace!==Ct||Y.isBatchedMesh&&Ut.batching===!1||!Y.isBatchedMesh&&Ut.batching===!0||Y.isBatchedMesh&&Ut.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ut.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ut.instancing===!1||!Y.isInstancedMesh&&Ut.instancing===!0||Y.isSkinnedMesh&&Ut.skinning===!1||!Y.isSkinnedMesh&&Ut.skinning===!0||Y.isInstancedMesh&&Ut.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ut.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ut.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ut.instancingMorph===!1&&Y.morphTexture!==null||Ut.envMap!==xt||q.fog===!0&&Ut.fog!==Pt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Wt.numPlanes||Ut.numIntersection!==Wt.numIntersection)||Ut.vertexAlphas!==kt||Ut.vertexTangents!==Ht||Ut.morphTargets!==Bt||Ut.morphNormals!==oe||Ut.morphColors!==_e||Ut.toneMapping!==xe||Ut.morphTargetsCount!==un||!!Ut.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Ut.__version=q.version);let Bn=Ut.currentProgram;he===!0&&(Bn=os(q,H,Y),P&&q.isNodeMaterial&&P.onUpdateProgram(q,Bn,Ut));let ii=!1,Di=!1,Cs=!1,ye=Bn.getUniforms(),Ue=Ut.uniforms;if(E.useProgram(Bn.program)&&(ii=!0,Di=!0,Cs=!0),q.id!==U&&(U=q.id,Di=!0),Ut.needsLights){let Te=Ho(b.state.lightProbeGridArray,Y);Ut.lightProbeGrid!==Te&&(Ut.lightProbeGrid=Te,Di=!0)}if(ii||k!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ye.setValue(V,"projectionMatrix",A.projectionMatrix),ye.setValue(V,"viewMatrix",A.matrixWorldInverse);let Ui=ye.map.cameraPosition;Ui!==void 0&&Ui.setValue(V,Jt.setFromMatrixPosition(A.matrixWorld)),F.logarithmicDepthBuffer&&ye.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ye.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,Di=!0,Cs=!0)}if(Ut.needsLights&&(xn.state.sunShadowMap.length>0&&ye.setValue(V,"sunShadowMap",xn.state.sunShadowMap,Q),xn.state.directionalShadowMap.length>0&&ye.setValue(V,"directionalShadowMap",xn.state.directionalShadowMap,Q),xn.state.spotShadowMap.length>0&&ye.setValue(V,"spotShadowMap",xn.state.spotShadowMap,Q),xn.state.pointShadowMap.length>0&&ye.setValue(V,"pointShadowMap",xn.state.pointShadowMap,Q)),Y.isSkinnedMesh){ye.setOptional(V,Y,"bindMatrix"),ye.setOptional(V,Y,"bindMatrixInverse");let Te=Y.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ye.setValue(V,"boneTexture",Te.boneTexture,Q))}Y.isBatchedMesh&&(ye.setOptional(V,Y,"batchingTexture"),ye.setValue(V,"batchingTexture",Y._matricesTexture,Q),ye.setOptional(V,Y,"batchingIdTexture"),ye.setValue(V,"batchingIdTexture",Y._indirectTexture,Q),ye.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ye.setValue(V,"batchingColorTexture",Y._colorsTexture,Q));let Ni=$.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&G.update(Y,$,Bn),(Di||Ut.receiveShadow!==Y.receiveShadow)&&(Ut.receiveShadow=Y.receiveShadow,ye.setValue(V,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(Ue.envMapIntensity.value=H.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=Sv()),Di){if(ye.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ut.needsLights&&Vo(Ue,Cs),Pt&&q.fog===!0&&Gt.refreshFogUniforms(Ue,Pt),Gt.refreshMaterialUniforms(Ue,q,nt,J,b.state.transmissionRenderTarget[A.id]),Ut.needsLights&&Ut.lightProbeGrid){let Te=Ut.lightProbeGrid;Ue.probesSH.value=Te.texture,Ue.probesMin.value.copy(Te.boundingBox.min),Ue.probesMax.value.copy(Te.boundingBox.max),Ue.probesResolution.value.copy(Te.resolution)}cr.upload(V,ni(Ut),Ue,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(cr.upload(V,ni(Ut),Ue,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ye.setValue(V,"center",Y.center),ye.setValue(V,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(V,"normalMatrix",Y.normalMatrix),ye.setValue(V,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Te=q.uniformsGroups;for(let Ui=0,Ps=Te.length;Ui<Ps;Ui++){let Gu=Te[Ui];lt.update(Gu,Bn),lt.bind(Gu,Bn)}}return Bn}function Vo(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Mn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,H,$){let q=Z.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(A.texture).__webglTexture=H,Z.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let $=Z.get(A);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,$=0){B=A,O=H,N=$;let q=null,Y=!1,Pt=!1;if(A){let Ct=Z.get(A);if(Ct.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,Ct.__webglFramebuffer),W.copy(A.viewport),j.copy(A.scissor),ot=A.scissorTest,E.viewport(W),E.scissor(j),E.setScissorTest(ot),U=-1;return}else if(Ct.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(Ct.__hasExternalTextures)Q.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let kt=A.depthTexture;if(Ct.__boundDepthTexture!==kt){if(kt!==null&&Z.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}let Lt=A.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Pt=!0);let xt=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(xt[H])?q=xt[H][$]:q=xt[H],Y=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?q=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(xt)?q=xt[$]:q=xt,W.copy(A.viewport),j.copy(A.scissor),ot=A.scissorTest}else W.copy(Rt).multiplyScalar(nt).floor(),j.copy(tt).multiplyScalar(nt).floor(),ot=pt;if($!==0&&(q=L),E.bindFramebuffer(V.FRAMEBUFFER,q)&&E.drawBuffers(A,q),E.viewport(W),E.scissor(j),E.setScissorTest(ot),Y){let Ct=Z.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ct.__webglTexture,$)}else if(Pt){let Ct=H;for(let Lt=0;Lt<A.textures.length;Lt++){let xt=Z.get(A.textures[Lt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Lt,xt.__webglTexture,$,Ct)}}else if(A!==null&&$!==0){let Ct=Z.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ct.__webglTexture,$)}U=-1};function as(A){let H=Z.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=F.textureFormatReadable(A.format),H.__typeReadable=F.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,$,q,Y,Pt,Dt,Ct=0){if(!(A&&A.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt){E.bindFramebuffer(V.FRAMEBUFFER,Lt);try{let xt=A.textures[Ct],kt=xt.format,Ht=xt.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ct);let Bt=as(xt);if(Bt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&$>=0&&$<=A.height-Y&&V.readPixels(H,$,q,Y,vt.convert(kt),vt.convert(Ht),Pt)}finally{let xt=B!==null?Z.get(B).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(A,H,$,q,Y,Pt,Dt,Ct=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt)if(H>=0&&H<=A.width-q&&$>=0&&$<=A.height-Y){E.bindFramebuffer(V.FRAMEBUFFER,Lt);let xt=A.textures[Ct],kt=xt.format,Ht=xt.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ct);let Bt=as(xt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,oe),V.bufferData(V.PIXEL_PACK_BUFFER,Pt.byteLength,V.STREAM_READ),V.readPixels(H,$,q,Y,vt.convert(kt),vt.convert(Ht),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let _e=B!==null?Z.get(B).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,_e);let xe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Kh(V,xe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,oe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(oe),V.deleteSync(xe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,$=0){let q=Math.pow(2,-$),Y=Math.floor(A.image.width*q),Pt=Math.floor(A.image.height*q),Dt=H!==null?H.x:0,Ct=H!==null?H.y:0;Q.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,Dt,Ct,Y,Pt),E.unbindTexture()},this.copyTextureToTexture=function(A,H,$=null,q=null,Y=0,Pt=0){let Dt,Ct,Lt,xt,kt,Ht,Bt,oe,_e,xe=A.isCompressedTexture?A.mipmaps[Pt]:A.image;if($!==null)Dt=$.max.x-$.min.x,Ct=$.max.y-$.min.y,Lt=$.isBox3?$.max.z-$.min.z:1,xt=$.min.x,kt=$.min.y,Ht=$.isBox3?$.min.z:0;else{let Ue=Math.pow(2,-Y);Dt=Math.floor(xe.width*Ue),Ct=Math.floor(xe.height*Ue),A.isDataArrayTexture?Lt=xe.depth:A.isData3DTexture?Lt=Math.floor(xe.depth*Ue):Lt=1,xt=0,kt=0,Ht=0}q!==null?(Bt=q.x,oe=q.y,_e=q.z):(Bt=0,oe=0,_e=0);let Me=vt.convert(H.format),un=vt.convert(H.type),Ut;H.isData3DTexture?(Q.setTexture3D(H,0),Ut=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),Ut=V.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),Ut=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);let xn=E.getParameter(V.UNPACK_ROW_LENGTH),he=E.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(V.UNPACK_SKIP_PIXELS),ii=E.getParameter(V.UNPACK_SKIP_ROWS),Di=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,xe.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xe.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,xt),E.pixelStorei(V.UNPACK_SKIP_ROWS,kt),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Ht);let Cs=A.isDataArrayTexture||A.isData3DTexture,ye=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let Ue=Z.get(A),Ni=Z.get(H),Te=Z.get(Ue.__renderTarget),Ui=Z.get(Ni.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,Te.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ps=0;Ps<Lt;Ps++)Cs&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Z.get(A).__webglTexture,Y,Ht+Ps),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,Pt,_e+Ps)),V.blitFramebuffer(xt,kt,Dt,Ct,Bt,oe,Dt,Ct,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Z.has(A)){let Ue=Z.get(A),Ni=Z.get(H);E.bindFramebuffer(V.READ_FRAMEBUFFER,w),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,I);for(let Te=0;Te<Lt;Te++)Cs?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ue.__webglTexture,Y,Ht+Te):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ue.__webglTexture,Y),ye?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ni.__webglTexture,Pt,_e+Te):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ni.__webglTexture,Pt),Y!==0?V.blitFramebuffer(xt,kt,Dt,Ct,Bt,oe,Dt,Ct,V.COLOR_BUFFER_BIT,V.NEAREST):ye?V.copyTexSubImage3D(Ut,Pt,Bt,oe,_e+Te,xt,kt,Dt,Ct):V.copyTexSubImage2D(Ut,Pt,Bt,oe,xt,kt,Dt,Ct);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ye?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ut,Pt,Bt,oe,_e,Dt,Ct,Lt,Me,un,xe.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(Ut,Pt,Bt,oe,_e,Dt,Ct,Lt,Me,xe.data):V.texSubImage3D(Ut,Pt,Bt,oe,_e,Dt,Ct,Lt,Me,un,xe):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pt,Bt,oe,Dt,Ct,Me,un,xe.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pt,Bt,oe,xe.width,xe.height,Me,xe.data):V.texSubImage2D(V.TEXTURE_2D,Pt,Bt,oe,Dt,Ct,Me,un,xe);E.pixelStorei(V.UNPACK_ROW_LENGTH,xn),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,he),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(V.UNPACK_SKIP_ROWS,ii),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Di),Pt===0&&H.generateMipmaps&&V.generateMipmap(Ut),E.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){O=0,N=0,B=null,E.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var Fe=(i,t,e)=>i<t?t:i>e?e:i,ve=(i,t,e)=>i+(t-i)*e,zl=i=>i*i*(3-2*i),Ce=(i,t,e)=>{let n=Fe((e-i)/(t-i),0,1);return n*n*(3-2*n)},If=1337;function Lf(i){If=i|0}function Tv(i){return i=i^If|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var An=(i,t)=>Tv(Math.imul(i|0,73856093)^Math.imul(t|0,19349663));function jn(i,t=0){let e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return ve(An(e,t),An(e+1,t),s)}var kl=(i,t=0)=>jn(i,t)*.55+jn(i*2.03,t+7)*.3+jn(i*4.1,t+13)*.15;function ln(i){let t=i>>>0,e=()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}var Ol=new mt,at=i=>(Ol.set(i),[Ol.r,Ol.g,Ol.b]),Df=(i,t,e)=>[ve(i[0],t[0],e),ve(i[1],t[1],e),ve(i[2],t[2],e)],pn=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];var Hl=["city","sakura","coast","country","mountain"],bo={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10}},Eu=1500,Nf=260,Ki=0,wu=0;function Ff(i){wu=Math.max(0,Hl.indexOf(i))}function Wl(i){let t=Math.floor(i/Eu),e=i-t*Eu,n=zl(Fe((e-(Eu-Nf))/Nf,0,1)),s=Hl.length;return{a:Hl[((t+wu)%s+s)%s],b:Hl[((t+wu+1)%s+s)%s],t:n}}function be(i){let t=Wl(i),e={city:0,sakura:0,coast:0,country:0,mountain:0};return e[t.a]+=1-t.t,e[t.b]+=t.t,e}var Ie=i=>{let t=Wl(i);return t.t<.5?t.a:t.b};function mn(i,t){let e=Wl(i);return ve(bo[e.a][t],bo[e.b][t],e.t)}var bs=650,Ss=375,hr=i=>i*bs+Ss;function So(i){if(i<300)return!1;for(let t of[-70,0,70]){let e=be(i+t);if(Math.max(e.city,e.country)<.9)return!1}return!0}function fr(i){let t=Math.round((i-Ss)/bs),e=hr(t);return So(e)?{k:t,s:e}:null}function Ev(i){let t=fr(i);return t?1-Ce(8,45,Math.abs(i-t.s)):0}var To=1150,Xl=820,Eo=4.6,Au=i=>i*To+Xl;function Ru(i){if(i<400)return!1;for(let e of[-90,0,90]){let n=be(i+e);if(n.country+n.sakura<.9)return!1}let t=fr(i);return!(t&&Math.abs(t.s-i)<170)}function wi(i){let t=Math.round((i-Xl)/To),e=Au(t);return Ru(e)?{k:t,s:e}:null}function wv(i){let t=wi(i);return t?1-Ce(30,70,Math.abs(i-t.s)):0}function Av(i){let t=-Eo;return i<11?t-1.3:i<16?ve(t-1.3,t+.7,(i-11)/5):i<20?t+.7:i<25.5?ve(t+.7,.35,(i-20)/5.5):.35}var Bf=1050,Of=525,Ne=85,Le=125,Rv=24,Cv=i=>i*Bf+Of;function Pv(i){if(i<300)return!1;for(let t of[-170,0,170]){let e=be(i+t);if(Math.max(e.mountain,e.coast)<.95)return!1}return!0}function ti(i){let t=Math.round((i-Of)/Bf),e=Cv(t);return Pv(e)?{k:t,s:e}:null}function Iv(i){let t=ti(i);return t?1-Ce(Ne+20,Le+25,Math.abs(i-t.s)):0}var Vl=0,ql=(i,t)=>{let e=i/Le;return Rv*(1-e*e)-Math.abs(t)*(t>0?.12:.32)};var hi=2,Gl=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(t){let e=(jn(t/300,11)-.5)*2+(jn(t/95,17)-.5)*.35,n=Math.abs(e);return(n<.22?0:Math.sign(e)*(n-.22)/.78)*mn(t,"curv")*(1-Math.max(Ev(t),wv(t),Iv(t)))}elevRaw(t){return mn(t,"base")+mn(t,"hill")*(kl(t/380,29)-.5)*2}elev(t){let e=this.elevRaw(t),n=fr(t);if(n){let a=1-Ce(8,45,Math.abs(t-n.s));a>0&&(e=ve(e,this.elevRaw(n.s),a))}let s=wi(t);if(s){let a=1-Ce(30,70,Math.abs(t-s.s));a>0&&(e=ve(e,this.elevRaw(s.s),a))}let r=ti(t);if(r){let a=1-Ce(Ne+10,Le+45,Math.abs(t-r.s));a>0&&(e=ve(e,this.elevRaw(r.s),a))}return e}ensure(t){for(;(this.X.length-1)*hi<t+hi;){let e=this.X.length-1,n=e*hi,s=this.curv(n+hi/2)*hi,r=this.H[e];this.X.push(this.X[e]+Math.sin(r+s/2)*hi),this.Z.push(this.Z[e]+Math.cos(r+s/2)*hi),this.H.push(r+s),this.Y.push(this.elev(n+hi))}}at(t,e={}){t=Math.max(0,t),this.ensure(t+hi);let n=t/hi,s=Math.floor(n),r=n-s;e.x=ve(this.X[s],this.X[s+1],r),e.z=ve(this.Z[s],this.Z[s+1],r),e.y=ve(this.Y[s],this.Y[s+1],r),e.h=ve(this.H[s],this.H[s+1],r);let a=Math.sin(e.h),l=Math.cos(e.h);return e.fx=a,e.fz=l,e.rx=-l,e.rz=a,e}};function Uf(i,t,e,n,s){let r=Math.abs(e);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Ce(45,190,r)*16*(.45+.55*jn(t/160+(e>0?50:0),3));case"coast":{if(e>0)return r<s+.9?-.06:-.15+Ce(s+1.5,80,r)*24*(.5+.5*jn(t/170,5))+Ce(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?ve(1.25,-1.6,a/26):ve(-1.6,-7,Fe((a-26)/20,0,1)))-n}case"mountain":{if(e>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*jn(t/140,61),o=r-(s+1);return o<l?o:Math.min(l+(o-l)*.55,70)}if(r<s+1.2)return-.06;let a=r-(s+1.2);return a<32?-a*1.1:-35.2+Ce(105,230,r)*95*(.6+.4*jn(t/220,67))}case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+Ce(135,215,r)*36*(.4+.6*jn(t/210+(e>0?9:0),7))}}function dr(i,t,e,n){let s=Wl(i),r=Uf(s.a,i,t,e,n),a=s.t>0?ve(r,Uf(s.b,i,t,e,n),s.t):r;Vl=0;let l=wi(i);if(l){let g=Math.abs(i-l.s);if(g>=36)return a;let x=g<29?Av(g):ve(.35,a,Ce(29,36,g));return Math.abs(t)<n+3.2&&(x=Math.min(x,-.08)),x}let o=ti(i);if(!o)return a;let c=i-o.s,u=Math.abs(c);if(u>=2*Le)return a;let h=Math.abs(t),f=ql(c,t),p;return u<Ne?p=h<=n+1.46?-.25:Math.max(a,f):p=Math.max(a,Math.min(f,h<n+1?-.06:h-(n+1))),Vl=Math.max(0,p-a),p}function zf(i){let t=wi(i);return t?1-Ce(27,34,Math.abs(i-t.s)):0}var wo=new z,Yl=new z,Lv=[1,1,1],Be=class{constructor({uv:t=!1,color:e=!0}={}){this.hasUV=t,this.hasColor=e,this.P=[],this.N=[],this.U=[],this.Cl=[],this.m=new Zt,this.nm=new te,this.e=this.m.elements,this.ne=this.nm.elements}get count(){return this.P.length/3}setM(t){return this.m.copy(t),this.nm.getNormalMatrix(t),this}vtx(t,e,n,s,r,a,l,o,c){let u=this.e,h=this.ne;this.P.push(u[0]*t+u[4]*e+u[8]*n+u[12],u[1]*t+u[5]*e+u[9]*n+u[13],u[2]*t+u[6]*e+u[10]*n+u[14]);let f=h[0]*s+h[3]*r+h[6]*a,p=h[1]*s+h[4]*r+h[7]*a,g=h[2]*s+h[5]*r+h[8]*a,x=1/(Math.sqrt(f*f+p*p+g*g)||1);if(this.N.push(f*x,p*x,g*x),this.hasUV&&this.U.push(l,o),this.hasColor){let m=c||Lv;this.Cl.push(m[0],m[1],m[2])}}quad(t,e,n,s,r,a){wo.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),Yl.set(s[0]-t[0],s[1]-t[1],s[2]-t[2]),Yl.lengthSq()<1e-12&&Yl.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),wo.cross(Yl).normalize();let l=wo.x,o=wo.y,c=wo.z,u=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,p=a?a.v1:1;this.vtx(t[0],t[1],t[2],l,o,c,u,f,r),this.vtx(e[0],e[1],e[2],l,o,c,h,f,r),this.vtx(n[0],n[1],n[2],l,o,c,h,p,r),this.vtx(t[0],t[1],t[2],l,o,c,u,f,r),this.vtx(n[0],n[1],n[2],l,o,c,h,p,r),this.vtx(s[0],s[1],s[2],l,o,c,u,p,r)}box(t,e,n,s,r,a,l,o=null,c=null){let u=o||{},h=c||{};this.quad([s,e,n],[t,e,n],[t,r,n],[s,r,n],h.nz||l,u.nz),this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],h.pz||l,u.pz),this.quad([t,e,n],[t,e,a],[t,r,a],[t,r,n],h.nx||l,u.nx),this.quad([s,e,a],[s,e,n],[s,r,n],[s,r,a],h.px||l,u.px),this.quad([t,r,a],[s,r,a],[s,r,n],[t,r,n],h.py||l,u.py),c&&c.noBottom||this.quad([t,e,n],[s,e,n],[s,e,a],[t,e,a],h.ny||l,u.ny)}cyl(t,e,n,s,r,a,l,o,c=!0){let u=(s-r)/a;for(let h=0;h<l;h++){let f=h/l*Math.PI*2,p=(h+1)/l*Math.PI*2,g=Math.cos(f),x=Math.sin(f),m=Math.cos(p),d=Math.sin(p),v=[t+g*s,e,n+x*s],T=[t+m*s,e,n+d*s],M=[t+m*r,e+a,n+d*r],_=[t+g*r,e+a,n+x*r];this.vtx(v[0],v[1],v[2],g,u,x,0,0,o),this.vtx(_[0],_[1],_[2],g,u,x,0,0,o),this.vtx(M[0],M[1],M[2],m,u,d,0,0,o),this.vtx(v[0],v[1],v[2],g,u,x,0,0,o),this.vtx(M[0],M[1],M[2],m,u,d,0,0,o),this.vtx(T[0],T[1],T[2],m,u,d,0,0,o),c&&r>.001&&(this.vtx(t,e+a,n,0,1,0,0,0,o),this.vtx(M[0],M[1],M[2],0,1,0,0,0,o),this.vtx(_[0],_[1],_[2],0,1,0,0,0,o))}}rod(t,e,n,s,r,a){let l=e[0]-t[0],o=e[1]-t[1],c=e[2]-t[2],u=Math.hypot(l,o,c);l/=u,o/=u,c/=u;let h=0,f=1,p=0;Math.abs(o)>.99&&(h=1,f=0);let g=o*p-c*f,x=c*h-l*p,m=l*f-o*h,d=Math.hypot(g,x,m);g/=d,x/=d,m/=d;let v=x*c-m*o,T=m*l-g*c,M=g*o-x*l;for(let _=0;_<r;_++){let b=_/r*Math.PI*2,R=(_+1)/r*Math.PI*2,y=Math.cos(b),S=Math.sin(b),C=Math.cos(R),D=Math.sin(R),P=g*y+v*S,L=x*y+T*S,w=m*y+M*S,I=g*C+v*D,O=x*C+T*D,N=m*C+M*D,B=[t[0]+P*n,t[1]+L*n,t[2]+w*n],U=[t[0]+I*n,t[1]+O*n,t[2]+N*n],k=[e[0]+I*s,e[1]+O*s,e[2]+N*s],W=[e[0]+P*s,e[1]+L*s,e[2]+w*s];this.vtx(B[0],B[1],B[2],P,L,w,0,0,a),this.vtx(U[0],U[1],U[2],I,O,N,0,0,a),this.vtx(k[0],k[1],k[2],I,O,N,0,0,a),this.vtx(B[0],B[1],B[2],P,L,w,0,0,a),this.vtx(k[0],k[1],k[2],I,O,N,0,0,a),this.vtx(W[0],W[1],W[2],P,L,w,0,0,a)}return u}blob(t,e,n,s,r,a,l=0,o=1){let c=kf[l%kf.length],u=c.attributes.position.array,h=c.attributes.normal.array,f=c.userData.disp;for(let p=0;p<u.length;p+=3){let g=1+f[p/3],x=Math.max(0,Math.min(1,h[p+1]*.5+.5)),m=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(t+u[p]*s*g,e+u[p+1]*s*g*o,n+u[p+2]*s*g,h[p],h[p+1],h[p+2],0,0,m)}}wire(t,e,n,s,r,a=10){let l=t;for(let o=1;o<=a;o++){let c=o/a,u=[t[0]+(e[0]-t[0])*c,t[1]+(e[1]-t[1])*c-n*4*c*(1-c),t[2]+(e[2]-t[2])*c];this.rod(l,u,s,s,3,r),l=u}}card(t,e,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,l,o]of r)this.vtx(t[a][0],t[a][1],t[a][2],e[a][0],e[a][1],e[a][2],l,o,s[a])}toArrays(){return{P:new Float32Array(this.P),N:new Float32Array(this.N),C:this.hasColor?new Float32Array(this.Cl):null,U:this.hasUV?new Float32Array(this.U):null}}stamp(t,e){if(!t||!t.P.length)return;this.setM(e);let n=this.e,s=this.ne,r=t.P,a=t.N,l=t.C,o=t.U,c=this.P,u=this.N;for(let h=0;h<r.length;h+=3){let f=r[h],p=r[h+1],g=r[h+2];c.push(n[0]*f+n[4]*p+n[8]*g+n[12],n[1]*f+n[5]*p+n[9]*g+n[13],n[2]*f+n[6]*p+n[10]*g+n[14]);let x=a[h],m=a[h+1],d=a[h+2],v=s[0]*x+s[3]*m+s[6]*d,T=s[1]*x+s[4]*m+s[7]*d,M=s[2]*x+s[5]*m+s[8]*d,_=1/(Math.sqrt(v*v+T*T+M*M)||1);u.push(v*_,T*_,M*_)}if(this.hasColor)if(l)for(let h=0;h<l.length;h++)this.Cl.push(l[h]);else for(let h=0;h<r.length;h++)this.Cl.push(1);if(this.hasUV)if(o)for(let h=0;h<o.length;h++)this.U.push(o[h]);else for(let h=0;h<r.length/3*2;h++)this.U.push(0)}build(){if(!this.P.length)return null;let t=new me;return t.setAttribute("position",new $t(this.P,3)),t.setAttribute("normal",new $t(this.N,3)),this.hasUV&&t.setAttribute("uv",new $t(this.U,2)),this.hasColor&&t.setAttribute("color",new $t(this.Cl,3)),t.computeBoundingSphere(),t}},kf=[0,1,2,3].map(i=>{let t=new Zr(1,1),e=t.attributes.position.array,n=new Float32Array(e.length/3),s=(r,a,l)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<e.length;r+=3)n[r/3]=s(e[r],e[r+1],e[r+2])*.14;return t.userData.disp=n,t});ie.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var Qi=4200,de={uSkyHor:{value:new mt(.7,.8,.9)},uSkyZen:{value:new mt(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uCloudSh:{value:0},uOrigin:{value:new qt},uSunDir:{value:new z(0,1,0)},uSunCol:{value:new mt(1,1,1)},uTuftV:{value:new qt(0,.333)},uTunA:{value:new z(0,-1e4,0)},uTunB:{value:new z(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new z},uCarFwd:{value:new z(0,0,1)},uHead:{value:0},uWind:{value:1}};function Gf(i){let t=new ps(new Uint8Array(i),i.length,1,or);return t.minFilter=t.magFilter=He,t.generateMipmaps=!1,t.needsUpdate=!0,t}var Vn=Gf([16,16,16,70,200,255,255,255]),Hf=Gf([28,40,70,130,200,240,255,255]),Ai=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1.,0.)), u.x), mix(hash12(i+vec2(0.,1.)), hash12(i+vec2(1.,1.)), u.x), u.y); }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Dv=`
uniform vec2 uOrigin; uniform float uCloudSh;
float cloudShadow(vec2 xz){
  vec2 p = (xz + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
  return smoothstep(0.47, 0.58, fbm2(p)) * uCloudSh;
}`,Nv=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Uv=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,Fv=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`;function pr(i,t="",e=""){i.uniforms.uOrigin=de.uOrigin,i.uniforms.uCloudSh=de.uCloudSh,i.uniforms.uTime=de.uTime;for(let n of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[n]=de[n];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;
${Ai}${Dv}${Uv}${t}`).replace("#include <opaque_fragment>",`${Nv}${e}${Fv}
#include <opaque_fragment>`)}var Bv=`
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
  float city = vZW.x, paint = 0.0, mtn = clamp(1.0 - dot(vZW, vec4(1.0)), 0.0, 1.0);
  paint += step(abs(a - (rw - 0.28)), 0.07);
  paint += (1.0 - step(0.5, city)) * (1.0 - step(0.5, mtn)) * step(a, 0.07) * step(fract(s/10.0), 0.55);
  float cs = mod(s, 150.0);
  if (city > 0.5) {
    if (cs < 4.0 && a < rw - 0.45) paint += step(0.5, fract(u/0.9 + 0.25));
    if (cs > 147.2 && cs < 147.65 && u < -0.1 && u > -rw + 0.4) paint += 1.0;
    vec2 dm = vec2((cs - 118.0)/3.2, (u + 1.55)/0.62); float dd = abs(dm.x) + abs(dm.y);
    if (dd < 1.0 && dd > 0.82) paint += 1.0;
  }
  paint = clamp(paint, 0.0, 1.0) * (0.8 + 0.2*vnoise(p*6.0));
  c = mix(c, L(vec3(0.96, 0.96, 0.93)), paint);
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
  if (kind > 4.5 && kind < 5.5) return trackBed(s, u);
  if (kind > 5.5 && kind < 6.5) return crossingPanel(s, u);
  if (kind > 9.5) return sideStreet(s, u);
  if (kind > 8.5) return L(vec3(0.78, 0.72, 0.6)) * (0.86 + 0.18 * vnoise(vec2(s, u) * 3.0));   // levee-top path
  if (kind > 6.5) return L(vec3(0.95, 0.95, 0.92)) * (0.82 + 0.18 * vnoise(vec2(s, u) * 6.0));
  vec3 c = vec3(0.0);
  if (vZW.x > 0.004) c += vZW.x * cityGround(s, u, rw);
  if (vZW.y > 0.004) c += vZW.y * sakuraGround(s, u, rw);
  if (vZW.z > 0.004) c += vZW.z * coastGround(s, u, rw);
  if (vZW.w > 0.004) c += vZW.w * countryGround(s, u, rw);
  float wMtn = clamp(1.0 - dot(vZW, vec4(1.0)), 0.0, 1.0);
  if (wMtn > 0.004) c += wMtn * mountainGround(s, u, rw);
  float rbw = max(vRV, 0.0), rdg = max(-vRV, 0.0);               // + river bank, \u2212 a tunnel's ridge
  gWater *= vZW.w * (1.0 - rbw) * (1.0 - rdg);
  c = mix(c, riverBankCol(s, u), rbw);
  c = mix(c, ridgeCol(s, u, wMtn), rdg);
  return c * (0.92 + 0.16*fbm2(vec2(s, u)*0.015));
}
`,Ov=`
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
}`,zv=`
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
}`;function kv(){let i=new en({color:16777215,gradientMap:Vn});return i.onBeforeCompile=t=>{t.uniforms.uSkyHor=de.uSkyHor,t.uniforms.uSkyZen=de.uSkyZen,t.uniforms.uWet=de.uWet,t.uniforms.uNight=de.uNight,t.uniforms.uSunDir=de.uSunDir,t.uniforms.uSunCol=de.uSunCol,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),pr(t,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN;
float gWater = 0.0;
${Bv}`,zv+Ov),t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},i.customProgramCacheKey=()=>"ground-v12",i}function Vf(i,t,e,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),pr(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-e/2).toFixed(3)} + ${e.toFixed(3)} * vnoise(vWP.xz * ${t.toFixed(2)} + vWP.y * ${(t*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}var Hv=0;function mr(i){let t="cs"+ ++Hv;return i.onBeforeCompile=e=>pr(e),i.customProgramCacheKey=()=>t,i}function Wf(i,t){let e={};e.ground=kv(),e.color=Vf(new en({vertexColors:!0,gradientMap:Vn}),1.6,.1,"color-v2"),e.atlas=new en({vertexColors:!0,gradientMap:Vn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),e.atlas.onBeforeCompile=l=>pr(l),e.atlas.customProgramCacheKey=()=>"atlas-v2",e.foliage=Vf(new en({vertexColors:!0,gradientMap:Hf}),2.6,.24,"foliage-v2"),e.lamp=new Ve({color:15789798}),e.sig=new Ve({color:new mt(.15,1.7,1.1)}),e.sodium=new Ve({color:new mt(5,2.3,.65)}),e.decal=new en({vertexColors:!0,gradientMap:Vn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),e.decal.onBeforeCompile=l=>pr(l),e.decal.customProgramCacheKey=()=>"decal-v1",t&&(e.leaf=new en({map:t,vertexColors:!0,gradientMap:Hf,alphaTest:.42,side:nn}),e.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",ie.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),pr(l),l.uniforms.uTuftV=de.uTuftV,l.uniforms.uWind=de.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},e.leaf.customProgramCacheKey=()=>"leaf-v3"),e.wire=new Ve({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new In(n);return e.pool=new Ve({map:a,color:16762746,transparent:!0,opacity:0,blending:Si,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e.glowTex=a,e}var Vv=at("#f2c230"),Xf=at("#26272c");function Zl(i,t){let e=[];for(let n of[-1,1]){let s=t+n*4.9,r=i.at(s,{}),a=mn(s,"rw"),l=n*(a+.8),o=be(s),c=o.city+o.sakura>.5;e.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(c?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return e}function qf(){let i=new ke,t=mr(new en({vertexColors:!0,gradientMap:Vn})),e=new Ve({color:new mt(6,.45,.3)}),n=new Ve({color:new mt(.22,.03,.03)}),s=[0,1].map(()=>{let r=new ke,a=new ke;r.add(a),a.position.set(-.42,1.02,-.02);let l=new Be,o=3.6;for(let h=0,f=0;f<o;h++,f+=.45)l.box(-Math.min(f+.45,o),-.065,-.065,-f,.065,.065,h%2?Xf:Vv);l.box(0,-.09,-.07,.38,.09,.07,Xf);let c=new fe(l.build(),t);c.castShadow=!0,a.add(c);let u=[-.28,.28].map(h=>{let f=new fe(new Yr(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:c,lamps:u,L:o}});return i.visible=!1,{group:i,update(r,a,l,o,c){i.visible=!!r,r&&r.forEach((u,h)=>{let f=s[h];f.root.position.set(u.x-a.x,u.y,u.z-a.z),f.root.rotation.y=u.yaw,f.arm.scale.x=(u.rw+.25)/f.L,f.pivot.rotation.z=-l*(Math.PI/2-.06);let p=Math.floor(c*2.5)%2;f.lamps[0].material=o&&p===0?e:n,f.lamps[1].material=o&&p===1?e:n})}}}function Gv(){let e=()=>{let d=document.createElement("canvas");return d.width=1024,d.height=512,d},n=e(),s=e(),r=n.getContext("2d"),a=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let o=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,o);for(let d=0;d<1024;d+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(d,0,2,o);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,o-14,1024,14);let c=[.1,.36,.62,.88].map(d=>d*1024),u=(d,v,T,M)=>{let _=r.createLinearGradient(d,v,d+T*.3,v+M);_.addColorStop(0,"#5d7fae"),_.addColorStop(.6,"#9db7d6"),_.addColorStop(1,"#2f3f55"),r.fillStyle=_,r.fillRect(d,v,T,M),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(d+T*.2,v),r.lineTo(d+T*.38,v),r.lineTo(d+T*.1,v+M),r.lineTo(d-T*.08,v+M),r.fill(),a.fillStyle="#ffeccc",a.fillRect(d,v,T,M)};for(let d=0;d<c.length-1;d++){let v=c[d]+40,T=c[d+1]-40,M=3,_=(T-v)/M;for(let b=0;b<M;b++)r.fillStyle="#6b737c",r.fillRect(v+b*_+2,34,_-4,58),u(v+b*_+6,38,_-12,50)}for(let d of[c[0]-70,c[3]+40])r.fillStyle="#6b737c",r.fillRect(d+2,34,28,58),u(d+5,38,22,50);for(let d of c)r.fillStyle="#c3c8ce",r.fillRect(d-30,22,60,o-36),r.fillStyle="#7b828a",r.fillRect(d-1,22,2,o-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(d-30,22,60,o-36),u(d-24,34,20,46),u(d+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let d of c)r.fillStyle="#c3c8ce",r.fillRect(d-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",c[1]+40,136);let h=0,f=176,p=256,g=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,p,g),r.fillStyle="#20262e",r.fillRect(h+14,f+44,p-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+p/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,p-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,p,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,p,7);for(let d of[h+40,h+p-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(d,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(d+(d<h+p/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+g-30,p,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",h+p/2,f+220),a.fillStyle="#111",a.fillRect(h,f,p,g),a.fillStyle="#ff9a2a",a.font=`800 18px ${l}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26);for(let d of[h+40,h+p-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(d,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=d=>{let v=new In(d);return v.colorSpace=Pe,v.anisotropy=4,v},m=(d,v,T,M)=>({u0:d/1024,u1:(d+T)/1024,v0:1-(v+M)/512,v1:1-v/512});return{map:x(n),em:x(s),side:m(0,0,1024,o),sideR:{...m(0,0,1024,o),flip:!0},front:m(h,f,p,g),plain:m(342,202,28,28)}}function Yf(){let i=Gv(),t=mr(new en({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Vn})),e=new Be({uv:!0}),n=[1,1,1],s=at("#9aa1a9"),r=at("#3b4047"),a=at("#2a2d33"),l=19.5,o=.6,c=3,u=1.45,h=.95,f=4,p=c*l+(c-1)*o;for(let v=0;v<c;v++){let T=-p/2+l/2+v*(l+o),M=T-l/2,_=T+l/2;e.quad([M,h,u],[_,h,u],[_,f,u],[M,f,u],n,i.side),e.quad([_,h,-u],[M,h,-u],[M,f,-u],[_,f,-u],n,i.side);let b=v===c-1,R=v===0;e.quad([_,h,u],[_,h,-u],[_,f,-u],[_,f,u],b?n:at("#c9ced4"),b?i.front:i.plain),e.quad([M,h,-u],[M,h,u],[M,f,u],[M,f,-u],R?n:at("#c9ced4"),R?i.front:i.plain),e.box(M+.1,f,-u+.1,_-.1,f+.14,u-.1,s,null,{noBottom:!0});for(let y of[T-5.5,T+5.5])e.box(y-1.3,f+.14,-.8,y+1.3,f+.55,.8,at("#c4c9cf"),null,{noBottom:!0});e.box(M+2,.45,-u+.25,_-2,h,u-.25,a);for(let y of[T-7,T+7])e.box(y-1.3,.1,-1.2,y+1.3,.75,1.2,r);if(v===0){let y=T-3,S=f+.55;e.box(y-.6,f+.14,-.6,y+.6,f+.3,.6,r),e.rod([y-.5,f+.3,0],[y,S+.9,0],.03,.03,4,r),e.rod([y+.5,f+.3,0],[y,S+.9,0],.03,.03,4,r),e.rod([y,S+.9,-.85],[y,S+.9,.85],.03,.03,4,r)}}let g=new fe(e.build(),t);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let x=new ke;x.add(g),x.visible=!1;let m={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:p},d={};return{group:x,st:m,start(v,T,M=16){Object.assign(m,{active:!0,sx:v,dir:T,speed:M,u:-T*290,ds:T>0?-2:2,cleared:!1}),x.visible=!0},update(v,T,M,_,b){if(!m.active)return;m.u+=m.dir*m.speed*v;let R=m.u-m.dir*m.length/2;if(!m.cleared&&(m.dir>0?R>b+1:R<-b-1)&&(m.cleared=!0),Math.abs(m.u)>330){m.active=!1,x.visible=!1;return}T.at(m.sx,d),x.position.set(d.x+d.fx*m.ds+d.rx*m.u-M.x,d.y+.34,d.z+d.fz*m.ds+d.rz*m.u-M.z),x.rotation.y=d.h+(m.dir>0?Math.PI:0),t.emissiveIntensity=.3+_*1.1}}}var Wv='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Ts=2048,Es=4096;function Kl(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var Kf=Kl(256,256);{let i=Kf.getContext("2d"),t=i.createImageData(256,256),e=ln(7);for(let n=0;n<t.data.length;n+=4){let s=128+(e()-.5)*120+(e()<.02?-60:0);t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}var Cu=class{constructor(){this.cA=Kl(Ts,Es),this.cE=Kl(Ts/2,Es/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Ts/2,Es/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Ts,Es),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Kf,"repeat")}add(t,e,n,s){if(this.x+e+4>Ts&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Es)throw new Error("atlas full at "+t);let a={x:this.x,y:this.y,w:e,h:n};this.x+=e+4,this.rowH=Math.max(this.rowH,n);for(let o of[this.a,this.e])o.save(),o===this.e&&o.scale(.5,.5),o.translate(a.x,a.y),o.beginPath(),o.rect(0,0,e,n),o.clip();s(this.a,this.e,e,n),this.a.restore(),this.e.restore();let l=.5;return this.cells[t]={u0:(a.x+l)/Ts,u1:(a.x+e-l)/Ts,v0:1-(a.y+n-l)/Es,v1:1-(a.y+l)/Es,w:e,h:n},this.cells[t]}uv(t){let e=this.cells[t];if(!e)throw new Error("no atlas cell "+t);return e}has(t){return!!this.cells[t]}textures(t){let e=n=>{let s=new In(n);return s.colorSpace=Pe,s.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),s.minFilter=zn,s.generateMipmaps=!0,s};return{map:e(this.cA),emissive:e(this.cE)}}};function cn(i,t,e,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=t.grain,i.fillRect(0,0,e,n),i.restore()}function Ql(i,t,e,n,s,r){let a=i.createLinearGradient(0,e,0,e+s);r.forEach(([l,o])=>a.addColorStop(l,o)),i.fillStyle=a,i.fillRect(t,e,n,s)}function gr(i,t,e,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,e,n),Ql(i,0,0,e,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,e,1.5)}cn(i,t,e,n,.13)}function Ri(i,t,e,n,s,r=.13){let a=i.createLinearGradient(0,e,0,e+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(t,e,n,s)}function ct(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t,e,n,s)}function xr(i,t,e,n,s,r,a="#d9dde2",l="rgba(40,45,60,0.55)"){ct(i,t-r,e-r,n+2*r,s+2*r,a),ct(i,t-r,e+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(t-r+.5,e-r+.5,n+2*r-1,s+2*r-1)}function Ci(i,t,e,n,s,r,a=0){let l=i.createLinearGradient(t,e,t+n*.35,e+s),o=a?"#4f78b8":"#5f93d6",c=a?"#86a9d4":"#a6c8ec";l.addColorStop(0,o),l.addColorStop(.55,c),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(t,e,n,s),i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(t+n*(.2+r()*.6),e+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let u=t+n*r();i.beginPath(),i.moveTo(u,e),i.lineTo(u+n*.18,e),i.lineTo(u-n*.25,e+s),i.lineTo(u-n*.43,e+s),i.fill(),i.restore()}function Zf(i,t,e,n,s,r="#efe6d2"){ct(i,t,e,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(t+a,e,1.5,s);Ql(i,t,e,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function jl(i,t,e=800){i.font=`${e} ${t}px ${Wv}`}function ge(i,t,e,n,s,r,a,l=800,o=null){jl(i,r,l);let c=r;for(;i.measureText(t).width>s&&c>6;)c-=1,jl(i,c,l);i.textAlign="center",i.textBaseline="middle",o&&(i.lineWidth=Math.max(2,c*.12),i.strokeStyle=o,i.lineJoin="round",i.strokeText(t,e,n)),i.fillStyle=a,i.fillText(t,e,n)}function Jl(i,t,e,n,s,r,a,l=800,o=null){let c=[...t],u=c.length,h=Math.min(r*1.05,(s-n)/u),f=Math.min(r,h*.95);jl(i,f,l),i.textAlign="center",i.textBaseline="middle",c.forEach((p,g)=>{let x=n+(s-n-h*u)/2+h*(g+.5);o&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=o,i.strokeText(p,e,x)),i.fillStyle=a,i.fillText(p,e,x)})}function Ao(i,t,e,n,s,r,a){i.save(),i.shadowColor=r,i.shadowBlur=a,ct(i,t,e,n,s,r),i.restore()}var Jf=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],$l=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],$f=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],Xv=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Qf(){let i=new Cu,t=ln(2024),e=240,n=(o,c,u,h,f,p)=>{gr(o,i,u,h,"#ece8e0",0);let g=ln(p*31+(f?7:0)+5);if(p===0){let x=u*.14,m=h*.22,d=u*.72,v=h*.5;xr(o,x,m,d,v,5),Ci(o,x,m,d/2,v,g),Ci(o,x+d/2,m,d/2,v,g),g()<.8&&Zf(o,x+2,m+2,d*(.18+g()*.25),v-4,g()<.5?"#efe6d2":"#d9e4ea"),ct(o,x+d/2-2,m,4,v,"#cfd4da"),ct(o,x-8,m+v+5,d+16,6,"#d8d8d4"),Ri(o,x-4,m+v+11,8,60),Ri(o,x+d-4,m+v+11,8,60),f&&(Ao(c,x,m,d,v,"#ffcf8f",0),c.fillStyle="rgba(255,240,210,0.85)",c.fillRect(x+2,m+2,d*.3,v-4))}else if(p===1){for(let x of[.12,.56]){let m=u*x,d=h*.28,v=u*.3,T=h*.36;xr(o,m,d,v,T,4),Ci(o,m,d,v,T,g,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(m,d,v,T*.45),Ri(o,m,d+T+6,v,40,.1),f&&g()<.8&&Ao(c,m,d,v,T,g()<.5?"#ffd9a0":"#e8f0ff",0)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(u*.88,h*.2,9,0,7),o.fill()}else if(p===2){let x=u*.1,m=h*.12,d=u*.8,v=h*.84;xr(o,x,m,d,v,4),Ci(o,x,m,d/2,v,g),Ci(o,x+d/2,m,d/2,v,g),Zf(o,x+2,m+2,d*(.2+g()*.3),v-4,t.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),ct(o,x+d/2-2,m,4,v,"#cfd4da"),f&&(Ao(c,x,m,d,v,"#ffcb85",0),c.fillStyle="rgba(255,236,200,0.9)",c.fillRect(x+2,m+2,d*.35,v-4))}else if(p===3){gr(o,i,u,h,"#dfe3e6",0);let x=h*.25,m=h*.55;Ci(o,0,x,u,m,g,1);for(let d=0;d<=u;d+=u/4)ct(o,d-2,x,4,m,"#8d98a6");if(ct(o,0,x-4,u,4,"#8d98a6"),ct(o,0,x+m,u,5,"#7d8796"),f)for(let d=0;d<4;d++)g()<.7&&(c.fillStyle=g()<.6?"#f2f6ff":"#ffe2b0",c.fillRect(d*u/4+2,x,u/4-4,m))}else if(p===4){o.fillStyle="#6b4a35",o.fillRect(0,0,u,h);for(let T=0;T<h;T+=12)ct(o,0,T,u,2,"rgba(30,18,10,0.35)"),ct(o,0,T+2,u,1,"rgba(255,220,180,0.06)");cn(o,i,u,h,.15);let x=u*.18,m=h*.25,d=u*.64,v=h*.45;ct(o,x-6,m-6,d+12,v+12,"#4a3020"),ct(o,x,m,d,v,"#efe4c8"),o.fillStyle="#5a3a26";for(let T=1;T<6;T++)o.fillRect(x+T*d/6-1.5,m,3,v);for(let T=1;T<3;T++)o.fillRect(x,m+T*v/3-1.5,d,3);if(f){c.fillStyle="#ffc070",c.fillRect(x,m,d,v),c.fillStyle="#000";for(let T=1;T<6;T++)c.fillRect(x+T*d/6-1.5,m,3,v)}}else if(p===5){ct(o,u*.08,0,7,h,"#bdbdb6"),ct(o,u*.08+5,0,2,h,"rgba(0,0,0,0.2)");let x=u*.55,m=h*.3,d=u*.22,v=h*.24;xr(o,x,m,d,v,3),ct(o,x,m,d,v,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(x,m,d,v/2),Ri(o,x,m+v+4,d,50,.12),ct(o,u*.22,h*.55,26,34,"#cfcfca"),ct(o,u*.22+4,h*.55+6,18,12,"#9aa2a8"),f&&Ao(c,x,m,d,v,"#fff0d8",0)}else if(p===6){let x=u*.4,m=h*.35,d=u*.2,v=h*.28;xr(o,x,m,d,v,3),Ci(o,x,m,d,v,g,1),Ri(o,x,m+v+4,d,70,.14),f&&Ao(c,x,m,d,v,"#ffd9a0",0)}};for(let o=0;o<7;o++)i.add("win"+o,e,e,(c,u,h,f)=>n(c,u,h,f,!1,o)),i.add("win"+o+"L",e,e,(c,u,h,f)=>n(c,u,h,f,!0,o));i.add("plain",e,e,(o,c,u,h)=>{gr(o,i,u,h,"#ece8e0"),Ri(o,u*.3,0,12,h*.6,.06)}),i.add("concrete",e,e,(o,c,u,h)=>{gr(o,i,u,h,"#d9d7d0",60);for(let f=0;f<6;f++)Ri(o,f*41%u,0,10,h*.5,.07)});let s=288,r=(o,c,u,h,f,p)=>{let g=ln(p);if(gr(o,i,u,h,"#e6e2da"),f==="glass"||f==="door"||f==="konbini"||f==="cafe"){let m=h*.22,d=u-12,v=h*.78-4;ct(o,6,m,d,v,f==="konbini"?"#f6f4ea":f==="cafe"?"#7a5a40":"#8a7a68");for(let _=m+v*.25;_<m+v;_+=v*.22){ct(o,6,_,d,3,"rgba(60,50,40,0.5)");for(let b=9;b<6+d-6;b+=6+g()*8)o.fillStyle=t.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(b,_-6-g()*10,4+g()*5,6+g()*10)}f==="konbini"&&ct(o,6,m+4,d,5,"#ffffff"),o.save(),o.globalAlpha=.35,Ci(o,6,m,d,v,g),o.restore(),ct(o,6,m,d,4,"#4a4e57"),f==="door"&&(ct(o,u/2-2,m,4,v,"#4a4e57"),ct(o,u/2-14,m+v*.45,3,40,"#c0c4c8"),ct(o,u/2+11,m+v*.45,3,40,"#c0c4c8"),ct(o,u/2-30,m+18,60,24,"#fff"),ge(o,"\u55B6\u696D\u4E2D",u/2,m+30,54,18,"#c82828")),f==="glass"&&g()<.7&&(ct(o,16,m+14,44,60,t.pick(["#f6d34a","#fff","#ff8aa0"])),ge(o,t.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,m+44,40,16,"#c02020")),f==="cafe"&&(ct(o,u*.62,h-70,46,62,"#2c3a30"),ge(o,"\u30E9\u30F3\u30C1",u*.62+23,h-50,40,13,"#fff",700));let M=f==="konbini"?"#c9d6e2":f==="cafe"?"#e8a060":"#e6c296";c.fillStyle=M,c.fillRect(6,m,d,v),c.fillStyle="rgba(0,0,0,0.35)";for(let _=m+v*.25;_<m+v;_+=v*.22)c.fillRect(6,_,d,3)}else if(f==="shutter"){let m=h*.2,d=u-12,v=h*.8;ct(o,6,m,d,v,"#b8bcc0");for(let T=m;T<m+v;T+=7)ct(o,6,T,d,2,"rgba(60,64,72,0.35)"),ct(o,6,T+2,d,1,"rgba(255,255,255,0.35)");ct(o,6,m,d,10,"#8f949a"),cn(o,i,u,h,.12),g()<.5&&(ct(o,u/2-40,m+v*.35,80,26,"#fff"),ge(o,t.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),u/2,m+v*.35+13,74,16,"#333",700))}else if(f==="noren"){ct(o,0,0,u,h,"#5b3c28");for(let M=0;M<u;M+=10)ct(o,M,h*.2,3,h*.8,"rgba(25,15,8,0.6)");cn(o,i,u,h,.15);let x=u*.12,m=h*.24,d=u*.76,v=h*.34,T=t.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);ct(o,x,m,d,v,T);for(let M=1;M<3;M++)ct(o,x+d*M/3-1,m+v*.25,2,v*.75,"rgba(255,255,255,0.25)");ge(o,t.pick(Xv),u/2,m+v*.55,d*.9,46,"#f5f0e6",800),ct(o,x,m,d,6,"#3a2a1c"),c.fillStyle="#ffae5c",c.fillRect(x,m+v,d,h-m-v),c.fillStyle="rgba(255,170,90,0.6)",c.fillRect(x,m,d,v),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(u*.9,h*.36,13,19,0,0,7),o.fill(),ge(o,"\u9152",u*.9,h*.36,16,14,"#fff"),c.fillStyle="#ff6a3a",c.beginPath(),c.ellipse(u*.9,h*.36,13,19,0,0,7),c.fill()}else if(f==="house"){let x=u*.18,m=h*.3,d=u*.34,v=h*.7;ct(o,x-6,m-6,d+12,v+6,"#9a9a96"),ct(o,x,m,d,v,t.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),ct(o,x+d-14,m+v*.5,4,22,"#d8d0c0"),ct(o,x+6,m+10,d-12,v*.25,"rgba(255,255,255,0.18)"),ct(o,u*.62,h*.48,30,22,"#cfcfca"),ct(o,u*.62+6,h*.48+5,18,4,"#555");let T=u*.6,M=h*.22,_=u*.3,b=h*.2;xr(o,T,M,_,b,3),Ci(o,T,M,_,b,g,1);for(let R=0;R<3;R++)o.fillStyle="#7b5a43",o.fillRect(u*.6+R*22,h-26,16,18),o.fillStyle=t.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(u*.6+R*22+8,h-32,11,0,7),o.fill();c.fillStyle="#ffd08a",c.beginPath(),c.arc(x+d+14,m+8,6,0,7),c.fill(),g()<.6&&(c.fillStyle="#ffcf8f",c.fillRect(T,M,_,b))}else if(f==="garage"){let m=h*.25,d=u-16,v=h*.75;ct(o,8,m,d,v,"#efefec");for(let T=m;T<m+v;T+=9)ct(o,8,T,d,1.5,"rgba(80,80,90,0.25)");cn(o,i,u,h,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,c)=>{i.add("shop_"+o,e,s,(u,h,f,p)=>r(u,h,f,p,o,100+c)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",e,s,(u,h,f,p)=>r(u,h,f,p,o,200+c))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(c,u,h,f)=>{let[p,g]=$l[o%$l.length],x=Jf[o*7%Jf.length];ct(c,0,0,h,f,p),ct(c,0,0,h,5,"rgba(255,255,255,0.35)"),ct(c,0,f-6,h,6,"rgba(0,0,0,0.18)"),o%3===0&&(ct(c,12,12,f-24,f-24,g),ge(c,x[0],12+(f-24)/2,f/2,f-30,34,p)),ge(c,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g,900),cn(c,i,h,f,.08),u.fillStyle=p==="#fff"||p==="#f5efe0"?"#d9d6cc":p,u.fillRect(0,0,h,f),u.globalAlpha=.9,ge(u,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g==="#fff"?"#ffffff":g,900),u.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(c,u,h,f)=>{let[p,g]=$l[(o*3+1)%$l.length],x=$f[o%$f.length];ct(c,0,0,h,f,p),c.strokeStyle="rgba(0,0,0,0.3)",c.lineWidth=4,c.strokeRect(2,2,h-4,f-4),Jl(c,x,h/2,12,f-12,56,g,900),cn(c,i,h,f,.08),ct(u,0,0,h,f,p==="#fff"?"#e8e8e8":p),Jl(u,x,h/2,12,f-12,56,g==="#fff"?"#fff":g,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,c,u],h)=>i.add("bb"+h,512,240,(f,p,g,x)=>{ct(f,0,0,g,x,"#fbfaf5"),ct(f,0,0,g,x*.62,u),ge(f,o,g/2,x*.32,g*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),ge(f,c,g/2,x*.8,g*.85,52,"#333",800),cn(f,i,g,x,.08),ct(p,0,0,g,x,"#555"),p.globalAlpha=.85,ct(p,0,0,g,x*.62,u),ge(p,o,g/2,x*.32,g*.9,96,"#fff",900),p.globalAlpha=1})),i.add("konbini_band",480,72,(o,c,u,h)=>{ct(o,0,0,u,h,"#fbfbf7"),ct(o,0,h*.62,u,h*.14,"#2a9a4a"),ct(o,0,h*.76,u,h*.12,"#f08a24"),ct(o,0,h*.88,u,h*.12,"#2f6fd8"),ge(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",u/2,h*.32,u*.8,40,"#1d3d8a",900),c.fillStyle="#f3f6f0",c.fillRect(0,0,u,h),ge(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",u/2,h*.32,u*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(c,u,h,f)=>{let p=["#d8352a","#2f6fd8","#f4f4f0"][o];ct(c,0,0,h,f,p),ct(c,8,10,h-16,f*.55,"#eef4f8");let g=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let x=0;x<4;x++)for(let m=0;m<6;m++){let d=14+m*17,v=18+x*30;c.fillStyle=g[(x*6+m+o)%g.length],c.fillRect(d,v,11,20),c.fillStyle="rgba(255,255,255,0.5)",c.fillRect(d+2,v+2,3,14),c.fillStyle="#2a2a2a",c.fillRect(d,v+23,11,3)}ct(c,10,f*.62,h-20,22,"#222"),ct(c,h-34,f*.66,14,22,"#bbb"),ct(c,14,f*.82,h-28,22,"#1b1b1b"),ge(c,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],h/2,f*.62+11,h-28,14,"#fff",700),cn(c,i,h,f,.08),u.fillStyle="#f2f8ff",u.fillRect(8,10,h-16,f*.55);for(let x=0;x<4;x++)for(let m=0;m<6;m++)u.fillStyle=g[(x*6+m+o)%g.length],u.fillRect(14+m*17,18+x*30,11,20);u.fillStyle="#9fd0ff",u.fillRect(10,f*.62,h-20,22)});i.add("ac",128,88,(o,c,u,h)=>{ct(o,0,0,u,h,"#e9e9e4"),Ql(o,0,0,u,h,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(u*.4,h*.5,h*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let f=6;f<h*.36;f+=6)o.beginPath(),o.arc(u*.4,h*.5,f,0,7),o.stroke();for(let f=12;f<h-10;f+=6)ct(o,u*.78,f,u*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,c,u,h)=>{ct(o,0,0,u,h,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,u-6,h-6),ge(o,"\u54C1\u5DDD 580",u/2,16,u*.6,14,"#2f5a2f",700),ge(o,"\u3042 12-34",u/2,42,u*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,c,u,h)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(u-2,2),o.lineTo(u/2,h-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(u-10,7),o.lineTo(u/2,h-12),o.fill(),ge(o,"\u6B62\u307E\u308C",u/2,34,u*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,c,u,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(u/2,h/2,u/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(u/2,h/2,u/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(u/2,22),o.lineTo(u/2+22,50),o.lineTo(u/2+8,50),o.lineTo(u/2+8,88),o.lineTo(u/2-8,88),o.lineTo(u/2-8,50),o.lineTo(u/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,c,u,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(u/2,h/2,u/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(u/2,h/2,u/2-9,0,7),o.stroke(),ge(o,"30",u/2,h/2+2,u*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,c,u,h)=>{ct(o,0,0,u,h,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,u-6,h-6),Jl(o,"\u672C\u753A\u4E8C\u4E01\u76EE",u/2,10,h-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(c,u,h,f)=>{let p=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];ct(c,0,0,h,f,p),ct(c,4,4,h-8,f*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),ge(c,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],h/2,f*.25,h-12,18,"#fff",900);for(let g=0;g<4;g++)ct(c,8,f*.58+g*8,h-16-g%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,e,88,(c,u,h,f)=>{let p=["#e9e3d6","#dfe6ea","#efe2dc"][o];if(gr(c,i,h,f,p),o===1)for(let g=10;g<h-6;g+=h/6)ct(c,g,10,h/6-8,f-20,"rgba(220,235,245,0.9)"),c.fillStyle="rgba(255,255,255,0.45)",c.fillRect(g,10,h/6-8,(f-20)*.4);else{ct(c,0,0,h,7,"rgba(255,255,255,0.4)");for(let g=h/3;g<h;g+=h/3)ct(c,g-1,0,2,f,"rgba(0,0,0,0.08)")}ct(c,0,f-6,h,6,"rgba(0,0,0,0.12)"),Ri(c,h*.3,f-6,10,10,.2)});i.add("kawara",256,256,(o,c,u,h)=>{ct(o,0,0,u,h,"#58617a");for(let f=0;f<h;f+=16)Ql(o,0,f,u,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let f=0;f<u;f+=20)ct(o,f,0,2,h,"rgba(0,0,0,0.18)");cn(o,i,u,h,.12)}),i.add("wood",256,256,(o,c,u,h)=>{ct(o,0,0,u,h,"#6d4c37");for(let f=0;f<h;f+=14)ct(o,0,f,u,2,"rgba(25,15,8,0.4)"),ct(o,0,f+2,u,1,"rgba(255,220,180,0.07)");cn(o,i,u,h,.16)}),i.add("block",256,128,(o,c,u,h)=>{ct(o,0,0,u,h,"#c9c7bf");for(let f=0;f<h;f+=32)for(let p=f/32%2?-32:0;p<u;p+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(p+1,f+1,62,30);for(let f=0;f<u;f+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(f+20,40,24,16);cn(o,i,u,h,.15),Ri(o,0,0,u,40,.1)}),i.add("lantern",64,96,(o,c,u,h)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(u/2,h/2,u/2-2,h/2-8,0,0,7),o.fill();for(let f=16;f<h-12;f+=7)ct(o,4,f,u-8,1.5,"rgba(0,0,0,0.2)");ct(o,u/2-14,2,28,8,"#222"),ct(o,u/2-14,h-10,28,8,"#222"),ge(o,"\u796D",u/2,h/2,u*.6,28,"#fff",900),c.fillStyle="#ff6a35",c.beginPath(),c.ellipse(u/2,h/2,u/2-2,h/2-8,0,0,7),c.fill()}),i.add("busstop",96,96,(o,c,u,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(u/2,h/2,u/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(u/2,h/2,u/2-6,0,7),o.stroke(),ge(o,"\u30D0\u30B9\u505C",u/2,h/2,u*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>ct(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,c,u,h)=>{o.save(),o.translate(u/2,h/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(u/2-22,h/2-6,44,18),o.fillRect(u/2-16,h/2-16,18,12),o.fillRect(u/2+8,h/2-13,5,7),o.beginPath(),o.arc(u/2-12,h/2+15,5,0,7),o.arc(u/2+12,h/2+15,5,0,7),o.fill(),ge(o,"\u8E0F\u5207",u/2,h/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((o,c)=>i.add("bridge"+c,64,176,(u,h,f,p)=>{ct(u,0,0,f,p,"#b9b5ab"),cn(u,i,f,p,.2),ct(u,6,6,f-12,p-12,"#a7a398"),Jl(u,o,f/2,14,p-14,34,"#3f3c37",800)})),i.add("signal",240,84,(o,c,u,h)=>{ct(o,0,0,u,h,"#4a4d52"),ct(o,0,0,u,5,"#5c6066"),cn(o,i,u,h,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([f,p])=>{o.fillStyle="#26282c",o.beginPath(),o.arc(p,h/2,33,0,7),o.fill(),o.fillStyle=f,o.beginPath(),o.arc(p,h/2,27,0,7),o.fill()})}),i.add("ped_sig",64,128,(o,c,u,h)=>{ct(o,0,0,u,h,"#3d4045"),o.fillStyle="#5a1814",o.fillRect(8,8,u-16,h/2-12),o.fillStyle="#0d4f44",o.fillRect(8,h/2+4,u-16,h/2-12),o.fillStyle="rgba(255,255,255,0.18)",o.beginPath(),o.arc(u/2,h*.18,6,0,7),o.fill(),o.fillRect(u/2-5,h*.24,10,18)}),i.add("tomare",256,96,(o,c,u,h)=>{o.clearRect(0,0,u,h),o.fillStyle="rgba(244,244,238,0.012)",o.fillRect(0,0,u,h),ge(o,"\u6B62\u307E\u308C",u/2,h/2+4,u*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((o,c)=>i.add("hodokyo"+c,256,44,(u,h,f,p)=>{ct(u,0,0,f,p,"#1f4f96"),u.strokeStyle="#fff",u.lineWidth=3,u.strokeRect(4,4,f-8,p-8),ge(u,o,f/2,p/2+1,f*.85,28,"#fff",800)}));let l=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];l.forEach(([o,c,u],h)=>{let f=l[(h+3)%4][0],p=l[(h+1)%4][0];i.add("ekimei"+h,320,124,(g,x,m,d)=>{ct(g,0,0,m,d,"#3a3d42"),ct(g,4,4,m-8,d-8,"#f8f8f3"),ge(g,c,m/2,20,m*.5,15,"#2b2b2b",700),ge(g,o,m/2,52,m*.6,40,"#151515",900),ge(g,u,m/2,80,m*.5,12,"#555",600),ct(g,4,d-30,m-8,26,"#1f9a50"),g.fillStyle="#fff",jl(g,12,700),g.textBaseline="middle",g.textAlign="left",g.fillText("\u2190 "+f,12,d-17),g.textAlign="right",g.fillText(p+" \u2192",m-12,d-17),cn(g,i,m,d,.06),ct(x,4,4,m-8,d-8,"#8a8a84")}),i.add("ekiplate"+h,220,48,(g,x,m,d)=>{ct(g,0,0,m,d,"#4b3326"),cn(g,i,m,d,.2),ge(g,o+"\u99C5",m/2,d/2+1,m*.8,30,"#f3ead8",800)})});for(let o of["l","r"])i.add("chev_"+o,96,120,(c,u,h,f)=>{ct(c,0,0,h,f,"#f4f4ef"),ct(c,4,4,h-8,f-8,"#1e5bb8"),c.fillStyle="#f8f8f4",c.beginPath();let p=o==="r"?1:-1,g=h/2,x=f/2;c.moveTo(g-p*26,x-40),c.lineTo(g+p*22,x),c.lineTo(g-p*26,x+40),c.lineTo(g-p*8,x+40),c.lineTo(g+p*40,x),c.lineTo(g-p*8,x-40),c.closePath(),c.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((o,c)=>i.add("tunnel"+c,360,80,(u,h,f,p)=>{ct(u,0,0,f,p,"#e9e7e0"),ct(u,4,4,f-8,p-8,"#24403b"),cn(u,i,f,p,.08),ge(u,o,f/2,p*.42,f*.8,38,"#f4f2ea",800),ge(u,"L = 170 m",f/2,p*.8,f*.4,13,"#c9d6cf",600)})),i.add("xing_plate",128,48,(o,c,u,h)=>{ct(o,0,0,u,h,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,u-6,h-6),ge(o,"\u8E0F\u5207\u6CE8\u610F",u/2,h/2,u*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,c,u,h)=>{o.clearRect(0,0,u,h),ct(o,0,0,u,7,"#e9ebee"),ct(o,0,6,u,2,"rgba(60,70,80,0.5)"),ct(o,0,h-6,u,6,"#d5d8dc");for(let f=3;f<u;f+=9)ct(o,f,7,3,h-13,"#e2e5e9"),ct(o,f+2,7,1,h-13,"rgba(70,80,90,0.45)")}),i}function jf(i){let n=Kl(1024,2048),s=n.getContext("2d"),r=ln(321),a={},l={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},o=(h,f,p)=>{let g=l[h],x=256,m=h==="pine",d=h==="sakura";s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let v=[[x,x,m?80:92]];for(let M=0;M<(m?10:14);M++){let _=r()*6.28,b=45+r()*120;v.push([x+Math.cos(_)*b,x+Math.sin(_)*b*(m?.42:.9),Math.min(34+r()*52,232-b)])}let T=d?2300:m?2600:2300;for(let M=0;M<T;M++){let _=v[Math.floor(r()*v.length)],b=r()*6.28,R=Math.sqrt(r())*_[2],y=_[0]+Math.cos(b)*R,S=_[1]+Math.sin(b)*R*(m?.45:1),C=R/_[2],D=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(C>.82?.5:0))));if(s.fillStyle=g[D],d){let P=7+r()*8;s.beginPath(),s.arc(y,S,P,0,7),s.fill(),r()<.25&&(s.fillStyle=g[4],s.beginPath(),s.arc(y-P*.3,S-P*.3,P*.4,0,7),s.fill())}else if(m)s.save(),s.translate(y,S),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(h==="momiji"){let P=8+r()*7;s.save(),s.translate(y,S),s.rotate(r()*6.28),s.beginPath();for(let L=0;L<10;L++){let w=L%2?P*.42:P,I=L/10*6.2832;s.lineTo(Math.cos(I)*w,Math.sin(I)*w)}s.closePath(),s.fill(),s.restore()}else if(h==="ginkgo"){let P=9+r()*7;s.save(),s.translate(y,S),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,P,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let P=9+r()*10;s.beginPath(),s.ellipse(y,S,P,P*.55,r()*6.28,0,7),s.fill()}}for(let M=0;M<90;M++){let _=r()*6.28,b=150+r()*85,R=x+Math.cos(_)*b,y=x+Math.sin(_)*b*(m?.45:.92);s.fillStyle=g[1+Math.floor(r()*4)],m?(s.save(),s.translate(R,y),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(R,y,d?6+r()*6:7+r()*6,0,7),s.fill())}if(d)for(let M=0;M<14;M++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let _=x+(r()-.5)*300,b=x+60+r()*120;s.beginPath(),s.moveTo(_,b),s.lineTo(_+(r()-.5)*40,b-20-r()*30),s.stroke()}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}},c=(h,f,p,g)=>{s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let x=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],m=g?120:170;for(let d=0;d<m;d++){let v=256+(r()-.5)*(g?330:380)*Math.sqrt(r()),T=150+r()*(g?230:300)*(1-Math.abs(v-256)/300),M=(v-256)*.35+(r()-.5)*90,_=9+r()*9,b=v+M,R=512-T,y=Math.min(4,Math.floor(r()*2.2+T/380*2.6)),S=s.createLinearGradient(0,512,0,R);S.addColorStop(0,x[0]),S.addColorStop(.6,x[Math.max(1,y-1)]),S.addColorStop(1,x[y]),s.fillStyle=S,s.beginPath(),s.moveTo(v-_/2,512),s.quadraticCurveTo(v-_/2+M*.3,512-T*.55,b,R),s.quadraticCurveTo(v+_/2+M*.3,512-T*.5,v+_/2,512),s.fill()}if(g)for(let d=0;d<16;d++){let v=110+r()*290,T=150+r()*200,M=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(v+(r()-.5)*20,512),s.quadraticCurveTo(v+(r()-.5)*30,(T+512)/2,v,T),s.stroke(),M<.55){s.fillStyle="#fbfaf2";for(let _=0;_<12;_++){let b=_/12*6.283;s.beginPath(),s.ellipse(v+Math.cos(b)*11,T+Math.sin(b)*11,9,4.5,b,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(v,T,8,0,7),s.fill()}else if(M<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(v,T,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(v-3,T-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let _=0;_<6;_++)s.beginPath(),s.arc(v+(r()-.5)*16,T+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512),o("momiji",0,1024),o("ginkgo",512,1024),c("grass",0,1536,!1),c("flowers",512,1536,!0);let u=new In(n);return u.colorSpace=Pe,u.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:u,cells:a,tuftV:[0,1-1536/2048]}}var Ke=[1,1,1],ut={pole:at("#b1b0a9"),metal:at("#8d9198"),black:at("#2a2b30"),yellow:at("#f2c230"),white:at("#f4f3ee"),trans:at("#a0a3a8"),lampPole:at("#727780"),lampHead:at("#dcdcd6"),trunk:at("#6a5444"),trunkDark:at("#4b3a33"),leaf:at("#86ba4c"),leafShade:at("#2c6640"),sakura:at("#ffd3e3"),sakuraShade:at("#de94b4"),pine:at("#55874c"),pineShade:at("#1d4632"),cedar:at("#41713e"),cedarShade:at("#1b3e2a"),roof:at("#bdbbb3"),parapet:at("#dcdad2"),pipe:at("#c4c4bf"),orange:at("#f07a22"),red:at("#d8352a"),vermilion:at("#e2482c"),concrete:at("#c9c7c0"),stone:at("#a8a69e"),terracotta:at("#b8653d"),rail:at("#eeeeea")},ji=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(at),qv=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(at),Iu=null;function ed(i){Iu=i}var fi=i=>Iu.uv(i),Ro=fi,Yv=(i,t)=>Iu.has(t+"2")&&i()<.5?t+"2":t;function tc(i,t,e,n,s=0){let r=new Zt().makeRotationY(s);return r.setPosition(t,e,n),new Zt().multiplyMatrices(i,r)}var Ge=(i,t,e,n,s,r,a,l=Ke)=>i.quad([e,n,r],[t,n,r],[t,s,r],[e,s,r],l,fi(a)),ts=(i,t,e,n,s,r,a,l=Ke)=>i.quad([t,s,n],[t,s,e],[t,r,e],[t,r,n],l,fi(a)),es=(i,t,e,n,s,r,a,l=Ke)=>i.quad([t,s,e],[t,s,n],[t,r,n],[t,r,e],l,fi(a)),vr=(i,t,e,n,s,r)=>i.quad(t,e,n,n,s,r?fi(r):void 0);function ec(i,t,e,n={}){let s=i.color;s.setM(t);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,ut.pole);for(let c=0;c<5;c++)s.cyl(0,.25+c*.3,0,.185,.185,.15,10,c%2?ut.black:ut.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,ut.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,ut.metal);let a=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let c of a)s.cyl(0,r-.53,c,.05,.035,.17,6,ut.white);for(let c of l)s.cyl(0,r-1.65,c,.045,.03,.15,6,ut.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,ut.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,ut.trans),s.box(-.06,7.2,.12,.06,7.35,.26,ut.metal),e()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,ut.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,ut.metal),e()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,ut.concrete);for(let c=2.4,u=0;c<r-2;c+=.45,u++)s.rod([0,c,0],[u%2?.3:-.3,c,0],.015,.015,3,ut.metal);return i.atlas.setM(t),Ge(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),e()<.4&&Ge(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(e()*4)),[...a.map(c=>[0,r-.4,c]),...l.map(c=>[0,r-1.52,c]),[0,5.72,-.3],[0,5.72,.3]].map(c=>new z(c[0],c[1],c[2]).applyMatrix4(t))}function Lu(i,t,e,n={}){let s=i.color;s.setM(t),s.cyl(0,0,0,.08,.06,6,8,ut.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,ut.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,ut.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,ut.lampHead),i.lamp.setM(t),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,Ke);let r=n.poolY??.04;i.pool.setM(t),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],Ke,{u0:0,u1:1,v0:0,v1:1})}function nd(i,t,e=.04){let n=i.color;n.setM(t),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,ut.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,ut.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,ut.lampHead),i.lamp.setM(t),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,Ke),i.pool.setM(t),i.pool.quad([-3.6,e,2.2],[3.6,e,2.2],[3.6,e,-5.2],[-3.6,e,-5.2],Ke,{u0:0,u1:1,v0:0,v1:1})}function Co(i,t){let e=i.color;e.setM(t),e.cyl(0,0,0,.07,.06,3.2,8,at("#3a3a3e")),e.box(-.2,3.2,-.2,.2,3.25,.2,at("#3a3a3e")),e.cyl(0,3.75,0,.26,.04,.3,8,at("#3a3a3e")),i.lamp.setM(t),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,Ke),i.pool.setM(t),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],Ke,{u0:0,u1:1,v0:0,v1:1})}function Du(i,t,e){let n=Math.floor(e()*3),s=[ut.red,at("#2f6fd8"),ut.white][n];i.color.setM(t),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,pn(s,.8)),i.atlas.setM(t),Ge(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Pu(i,t,e,n,s){i.color.setM(t),i.color.box(e-.4,n,s,e+.4,n+.56,s+.28,at("#e6e6e1")),i.atlas.setM(t),Ge(i.atlas,e-.4,e+.4,n,n+.56,s-.003,"ac")}function id(i,t,e){let n=i.color;n.setM(t);let s=e.pick([at("#c8ccd2"),at("#c0392b"),at("#2c6fb7"),at("#2b2b2b"),at("#e8c84a"),at("#e98fb0")]);for(let a of[-.52,.52])for(let l=0;l<12;l++){let o=l/12*Math.PI*2,c=(l+1)/12*Math.PI*2;n.rod([a+Math.cos(o)*.33,.34+Math.sin(o)*.33,0],[a+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],.022,.022,3,ut.black)}let r=(a,l)=>n.rod(a,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,ut.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,ut.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,ut.metal)}function sd(i,t){let e=i.color;e.setM(t),e.box(-.2,0,-.2,.2,.04,.2,ut.orange),e.cyl(0,.04,0,.16,.03,.68,10,ut.orange),e.cyl(0,.32,0,.115,.095,.12,10,ut.white,!1)}function rd(i,t,e,n=0,s=0){i.color.setM(t),i.color.cyl(n,0,s,.17,.21,.34,8,ut.terracotta),i.leaf.setM(t),Pi(i,[n,.45,s],n,.62,s,.32+e()*.1,e()<.5?"leafA":"leafB",5,e,[1,1,1],[.55,.62,.7],[.35,.9])}function ns(i,t,e,n,s=2.3,r=.6){i.color.setM(t),i.color.cyl(0,0,0,.035,.035,s+r/2,6,ut.metal),i.atlas.setM(t),n<0?es(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,e):ts(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,e)}function od(i,t){let e=i.color;e.setM(t),e.box(-.035,.84,-.035,.035,1.12,.035,at("#efefea")),e.box(-.06,1,-.06,.06,1.1,.06,at("#f0a020"))}function Nu(i,t,e){let n=i.color;n.setM(t),n.cyl(0,0,0,.05,.05,3.3,8,ut.orange);let s=0,r=3.25,a=.42,l=14;for(let o=0;o<l;o++){let c=o/l*Math.PI*2,u=(o+1)/l*Math.PI*2,h=(f,p,g)=>[e*g,r+Math.sin(f)*p,s+Math.cos(f)*p-.25];vr(n,h(0,0,-.02),h(e>0?u:c,a,-.02),h(e>0?c:u,a,-.02),ut.orange),vr(n,h(0,0,-.035),h(e>0?u:c,a*.86,-.035),h(e>0?c:u,a*.86,-.035),at("#dfe9f2"))}}var Uu=null;function ad(i){Uu=i}function Pi(i,t,e,n,s,r,a,l,o,c,u,h,f=0){let p=Uu[a];for(let g=0;g<l;g++){let x=o()*2-1,m=o()*2-1,d=o()*2-1;f&&(m=1.2+o());let v=Math.hypot(x,m,d)||1;x/=v,m/=v,d/=v;let T=-d,M=0,_=x;v=Math.hypot(T,_),v<.1&&(T=1,_=0,v=1),T/=v,_/=v;let b=m*_-d*M,R=d*T-x*_,y=x*M-m*T,S=Math.PI+(o()-.5)*.9,C=Math.cos(S),D=Math.sin(S),P=T*C+b*D,L=M*C+R*D,w=_*C+y*D,I=b*C-T*D,O=R*C-M*D,N=y*C-_*D,B=r*(1.3+o()*.45)/2,U=e+(o()-.5)*r*.6,k=n+(o()-.5)*r*(f?.15:.5),W=s+(o()-.5)*r*.6,j=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ft,Vt])=>[U+(P*Ft+I*Vt)*B,k+(L*Ft+O*Vt)*B*(f?.6:1),W+(w*Ft+N*Vt)*B]),ot=j.map(Ft=>{let Vt=Ft[0]-t[0],J=Ft[1]-t[1],nt=Ft[2]-t[2],St=Math.hypot(Vt,J,nt)||1;Vt/=St,J/=St,nt/=St;let Yt=Ft[0]-e,Rt=Ft[1]-n,tt=Ft[2]-s;return St=Math.hypot(Yt,Rt,tt)||1,[Vt*.7+Yt/St*.3,J*.7+Rt/St*.3+(f?.5:0),nt*.7+tt/St*.3]}),zt=j.map(Ft=>Df(u,c,.45+.55*Math.max(0,Math.min(1,(Ft[1]-h[0])/(h[1]-h[0])))));i.leaf.card(j,ot,p,zt)}}function ld(i,t,e,n="grass",s=1){let r=Uu[n],a=(.42+e()*.38)*s,l=a*1.2,o=e()*Math.PI,c=[0,1,0],u=[c,c,c,c],h=[.6,.64,.58],f=[1,1,1];i.leaf.setM(t);for(let p of[o,o+Math.PI/2]){let g=Math.cos(p)*l/2,x=Math.sin(p)*l/2;i.leaf.card([[-g,-.05,-x],[g,-.05,x],[g,a,x],[-g,a,-x]],u,r,[h,h,f,f])}}function Zv(i,t,e,n=1){let s=e.range(5.5,7.5)*n;i.color.setM(t),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,ut.trunk);for(let c=0;c<3;c++){let u=e()*6.28;i.color.rod([0,s*.42,0],[Math.cos(u)*1.1*n,s*.68,Math.sin(u)*1.1*n],.09*n,.05*n,5,ut.trunk)}i.leaf.setM(t);let r=[0,s*.78,0],a=e()<.5?"leafA":"leafB",l=[s*.45,s*1.15],o=7+Math.floor(e()*3);for(let c=0;c<o;c++){let u=e()*6.28,h=(.6+e())*1.3*n;Pi(i,r,Math.cos(u)*h,s*(.62+e()*.3),Math.sin(u)*h,(1.1+e()*.6)*n,a,6,e,[1,1,1],[.55,.62,.7],l)}Pi(i,r,0,s*.98,0,1.4*n,a,7,e,[1,1,1],[.55,.62,.7],l)}function Jv(i,t,e,n=1){let s=e.range(5.5,7)*n;i.color.setM(t),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,ut.trunkDark);let r=[];for(let c=0;c<5;c++){let u=c/5*6.28+e()*.8,h=(2.2+e()*1.6)*n,f=[Math.cos(u)*h,s*(.62+e()*.18),Math.sin(u)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,ut.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,ut.trunkDark)}i.leaf.setM(t);let a=[0,s*.72,0],l=[s*.5,s*1.1],o=[.72,.62,.72];for(let c of r)for(let u=0;u<2;u++)Pi(i,a,c[0]+(e()-.5)*1.4*n,c[1]+e()*.9*n,c[2]+(e()-.5)*1.4*n,(1.2+e()*.5)*n,"sakura",6,e,[1,1,1],o,l);Pi(i,a,0,s*.92,0,1.9*n,"sakura",9,e,[1,1,1],o,l)}function $v(i,t,e,n=1){let s=i.color;s.setM(t);let r=(e()-.5)*1.6*n,a=e.range(5,7.5)*n,l=[r*.4,a*.45,.2],o=[r,a*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,ut.trunkDark),s.rod(l,o,.15*n,.09*n,6,ut.trunkDark),i.leaf.setM(t);let c=[[o[0],o[1]+.3,o[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[o[0]+.9*n,o[1]-.6,.8,1.1]];for(let[u,h,f,p]of c)s.rod(u>l[0]?l:o,[u,h-.2,f],.07*n,.04*n,4,ut.trunkDark),Pi(i,[u,h-.8,f],u,h,f,p*n*1.3,"pine",9,e,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function Kv(i,t,e,n=1){let s=e.range(4.5,6.5)*n;i.color.setM(t),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,ut.trunkDark);let r=[];for(let c=0;c<5;c++){let u=c/5*6.28+e()*.8,h=(1.8+e()*1.4)*n,f=[Math.cos(u)*h,s*(.55+e()*.2),Math.sin(u)*h];i.color.rod([0,s*.38,0],f,.09*n,.04*n,5,ut.trunkDark),r.push(f)}i.leaf.setM(t);let a=[0,s*.7,0],l=[s*.45,s*1.1],o=[.62,.52,.56];for(let c of r)Pi(i,a,c[0],c[1]+.4*n,c[2],(1.15+e()*.4)*n,"momiji",6,e,[1,1,1],o,l);Pi(i,a,0,s*.92,0,1.6*n,"momiji",8,e,[1,1,1],o,l)}function Qv(i,t,e,n=1){let s=e.range(8,11)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,ut.trunk),i.leaf.setM(t);let r=[0,s*.62,0],a=[s*.3,s*1.02],l=[.68,.6,.52];for(let o=0;o<7;o++){let c=s*(.34+o*.09),u=(2.1-o*.24)*n,h=e()*6.28;Pi(i,r,Math.cos(h)*u*.35,c,Math.sin(h)*u*.35,Math.max(.7,u)*1.05,"ginkgo",5,e,[1,1,1],l,a)}}function jv(i,t,e,n=1){let s=e.range(9,14)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,ut.trunkDark),i.foliage.setM(t),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,ut.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,ut.cedar)}var t_={broad:Zv,sakura:Jv,pine:$v,cedar:jv,maple:Kv,ginkgo:Qv},td={};function Dn(i,t,e,n,s=1){let r=Math.floor(n()*4),a=e+r,l=td[a];if(!l){let c={color:new Be,foliage:new Be,leaf:new Be({uv:!0})};t_[e](c,new Zt,ln(1e3+r*77+e.length*13),1),l=td[a]={c:c.color.toArrays(),f:c.foliage.toArrays(),l:c.leaf.toArrays()}}let o=t.clone().scale(new z(s,s,s));i.color.stamp(l.c,o),i.foliage.stamp(l.f,o),i.leaf.stamp(l.l,o)}function Po(i,t,e,n,s,r,a){let l=Math.max(1,Math.round(e/3)),o=e/l;for(let c of[-1,1])for(let u=0;u<n.length-1;u++)for(let h=0;h<l;h++){let f=u>0&&r()<.3?"win6"+(r()<a?"L":""):r()<.2?"win5":"plain";(c>0?ts:es)(i,c*t/2,h*o,(h+1)*o,n[u],n[u+1],f,s)}}function Io(i,t,e,n,s,r=!1){i.quad([-t/2,n,e],[t/2,n,e],[t/2,n,0],[-t/2,n,0],ut.roof);let a=.5,l=.15;if(i.box(-t/2,n,-.02,t/2,n+a,l,ut.parapet),i.box(-t/2,n,e-l,t/2,n+a,e,ut.parapet),i.box(-t/2,n,0,-t/2+l,n+a,e,ut.parapet),i.box(t/2-l,n,0,t/2,n+a,e,ut.parapet),s()<.4){let o=(s()-.5)*t*.5,c=e*(.4+s()*.3);for(let[u,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(o+u-.05,n,c+h-.05,o+u+.05,n+1,c+h+.05,ut.metal);i.cyl(o,n+1,c,.85,.85,1.3,12,at("#cfd2d4"))}r&&s()<.6&&i.box(-t*.15,n,e*.4,t*.15,n+2.6,e*.75,ut.parapet),s()<.3&&i.rod([t*.3,n,e*.5],[t*.3,n+3.5,e*.5],.03,.02,4,ut.metal)}function cd(i,t,e,n,s){i.color.box(t-.06,e,-.88,t+.06,n,-.12,ut.black);let r="vs"+Math.floor(s()*10);es(i.atlas,t-.065,-.88,-.12,e,n,r),ts(i.atlas,t+.065,-.88,-.12,e,n,r),i.color.box(t-.03,e+.3,-.12,t+.03,e+.36,0,ut.metal),i.color.box(t-.03,n-.36,-.12,t+.03,n-.3,0,ut.metal)}function is(i,t,e,n){switch(i.atlas.setM(t),i.color.setM(t),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,ut.concrete,null,{noBottom:!0}),n.type){case"shop":return e_(i,t,e,n);case"apt":return n_(i,t,e,n);case"office":return i_(i,t,e,n);case"konbini":return s_(i,t,e,n);case"house":return r_(i,t,e,n);case"tower":return o_(i,t,e,n)}}function e_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=3.6,f=3,p=h+(a-1)*f,g=Math.max(1,Math.round(s/3)),x=s/g,m=-s/2,d=e.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let _=0;_<g;_++)Ge(c,m+_*x,m+(_+1)*x,0,h,0,Yv(e,"shop_"+d[_%d.length]));let v=e.pick([0,0,1,5,0,1]),T=[0,h];for(let _=1;_<a;_++)T.push(h+_*f);for(let _=1;_<a;_++)for(let b=0;b<g;b++){let R=b%2===1&&e()<.3?5:v;Ge(c,m+b*x,m+(b+1)*x,T[_],T[_+1],0,"win"+R+(e()<o?"L":""),l)}Po(c,s,r,T,l,e,o),u.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],pn(l,.8)),Io(u,s,r,p,e);let M=s*.94;if(u.box(-M/2,h-.8,-.3,M/2,h+.08,-.02,ut.black),Ge(c,-M/2,M/2,h-.8,h+.08,-.305,"hs"+Math.floor(e()*14)),e()<.55){let _=e.pick(qv),b=h-.85;u.quad([s/2-.2,b-.35,-1.1],[-s/2+.2,b-.35,-1.1],[-s/2+.2,b,-.02],[s/2-.2,b,-.02],_),u.quad([s/2-.2,b-.6,-1.1],[-s/2+.2,b-.6,-1.1],[-s/2+.2,b-.35,-1.1],[s/2-.2,b-.35,-1.1],pn(_,.85))}if(a>=2&&e()<.65){let _=(e()<.5?1:-1)*(s/2-.35);cd(i,_,h+.3,Math.min(p-.15,h+2.8),e)}for(let _=1;_<a;_++)if(e()<.4){let b=Math.floor(e()*g),R=m+b*x+.15,y=m+(b+1)*x-.15,S=T[_];u.box(R,S-.12,-.9,y,S,0,ut.parapet),Ge(c,R,y,S,S+1,-.9,"rail"),es(c,R,-.9,0,S,S+1,"rail"),ts(c,y,-.9,0,S,S+1,"rail"),e()<.45&&pd(u,R+.1,y-.1,S+1.95,-.55,e),e()<.6&&Pu(i,t,(R+y)/2+.6,S,-.75)}else if(e()<.35){let b=Math.floor(e()*g);Pu(i,t,m+(b+.5)*x,T[_]+.15,-.3),i.color.setM(t),i.atlas.setM(t)}u.cyl(m+.12,0,-.08,.05,.05,p,6,ut.pipe,!1),u.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,at("#d9d9d3")),a>=3&&e()<.18&&ud(i,s,p,r,e)}function ud(i,t,e,n,s){let r=Math.min(t*.85,7),a=r*.47,l=n*.3;for(let o of[-r*.35,r*.35])i.color.box(o-.06,e,l,o+.06,e+1.2+a,l+.12,ut.metal);i.color.box(-r/2,e+1.2,l+.12,r/2,e+1.2+a,l+.3,ut.metal),Ge(i.atlas,-r/2,r/2,e+1.2,e+1.2+a,l+.115,"bb"+Math.floor(s()*4))}function n_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=3.2,f=2.95,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3.2)),x=s/g,m=-s/2,d=[0,h];for(let M=1;M<a;M++)d.push(h+M*f);for(let M=0;M<g;M++)Ge(c,m+M*x,m+(M+1)*x,0,h,0,M===Math.floor(g/2)?"shop_door":e.pick(["shop_house","shop_garage","plain"]),M===Math.floor(g/2)?Ke:l);let v="bal"+Math.floor(e()*3),T=pn(l,.97);for(let M=1;M<a;M++){let _=d[M];for(let b=0;b<g;b++)Ge(c,m+b*x,m+(b+1)*x,_,d[M+1],0,"win2"+(e()<o?"L":""),l);u.box(m,_-.15,-1.3,-m,_,0,T),u.box(m,_,-1.3,-m,_+1.1,-1.18,T,null,{noBottom:!0});for(let b=0;b<g;b++)Ge(c,m+b*x,m+(b+1)*x,_,_+1.1,-1.305,v,l);for(let b=0;b<=g;b++)u.box(m+b*x-.05,_,-1.18,m+b*x+.05,_+2.4,0,pn(l,.92));for(let b=0;b<g;b++){let R=e(),y=m+b*x+.2,S=m+(b+1)*x-.2;R<.34?pd(u,y,S,_+2.02,-.98,e):R<.46&&c_(u,y+.25,Math.min(S-.25,y+1.9),_+1.1,-1.3,e)}i.atlas.setM(t);for(let b=0;b<g;b++)e()<.55&&(Pu(i,t,m+(b+.78)*x,_,-.55),i.atlas.setM(t),i.color.setM(t))}u.box(m,p-.15,-1.3,-m,p,0,T),Po(c,s,r,d,l,e,o),u.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],pn(l,.8)),Io(u,s,r,p,e,!0)}function i_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=4,f=3.4,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3)),x=s/g,m=-s/2,d=[0,h];for(let v=1;v<a;v++)d.push(h+v*f);for(let v=0;v<g;v++)Ge(c,m+v*x,m+(v+1)*x,0,h,0,v===1?"shop_door":"shop_glass");for(let v=1;v<a;v++)for(let T=0;T<g;T++)Ge(c,m+T*x,m+(T+1)*x,d[v],d[v+1],0,"win3"+(e()<o?"L":""),l);Po(c,s,r,d,l,e,o),u.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],pn(l,.8)),Io(u,s,r,p,e,!0),e()<.6&&cd(i,(e()<.5?1:-1)*(s/2-.3),h+.4,Math.min(p-.3,h+4.5),e),e()<.3&&ud(i,s,p,r,e)}function s_(i,t,e,n){let{w:s,d:r}=n,a=i.atlas,l=i.color,o=4.4,c=-s/2,u=Math.max(3,Math.round(s/3)),h=s/u;for(let f=0;f<u;f++)Ge(a,c+f*h,c+(f+1)*h,0,3.4,0,"shop_konbini");l.box(c,3.4,-.35,-c,o,0,ut.white),Ge(a,c,-c,3.4,o,-.355,"konbini_band"),Po(a,s,r,[0,o],at("#f2f2ee"),e,0),Io(l,s,r,o,e)}function r_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=2.9,f=a*h,p=-s/2,g=e()<.5,x=Math.max(2,Math.round(s/3)),m=s/x,d=[];for(let y=0;y<=a;y++)d.push(y*h);let v=g?Ke:l;for(let y=0;y<a;y++)for(let S=0;S<x;S++){let C=g?"win4":"win0";y===0&&S===0?C="shop_house":e()<o&&(C+="L"),Ge(c,p+S*m,p+(S+1)*m,d[y],d[y+1],0,C,C==="shop_house"?Ke:v)}Po(c,s,r,d,g?at("#9a7a62"):l,e,o),u.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],pn(l,.75));let T=.6,M=Math.min(2.4,r*.32),_=fi("kawara"),b=at("#c8ccd8");c.quad([s/2+T,f-.25,-T],[-s/2-T,f-.25,-T],[-s/2-T,f+M,r/2],[s/2+T,f+M,r/2],b,_),c.quad([-s/2-T,f-.25,r+T],[s/2+T,f-.25,r+T],[s/2+T,f+M,r/2],[-s/2-T,f+M,r/2],b,_);let R=g?at("#7a5a42"):l;if(vr(u,[-s/2,f,0],[-s/2,f,r],[-s/2,f+M-.1,r/2],R),vr(u,[s/2,f,r],[s/2,f,0],[s/2,f+M-.1,r/2],R),u.box(-s/2-T,f+M-.05,r/2-.15,s/2+T,f+M+.18,r/2+.15,at("#3d4456")),a>1){let y=h+.05;c.quad([s/2+.1,y-.3,-.75],[-s/2-.1,y-.3,-.75],[-s/2-.1,y+.05,0],[s/2+.1,y+.05,0],b,_)}if(n.fence){let y=-n.fence,S=1.2;for(let[C,D]of[[-s/2,-1],[.4,s/2]])u.box(C,0,y-.08,D,S,y+.08,ut.concrete),Ge(c,C,D,0,S,y-.085,"block")}}function o_(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=3.4,f=a*h,p=Math.max(2,Math.round(s/6)),g=s/p,x=-s/2,m=e()<.5?"win3":"win2",d=[];for(let M=0;M<=a;M++)d.push(M*h);for(let M=0;M<a;M++)for(let _=0;_<p;_++)Ge(c,x+_*g,x+(_+1)*g,d[M],d[M+1],0,m+(e()<o?"L":""),l);let v=Math.max(1,Math.round(r/6)),T=r/v;for(let M of[-1,1])for(let _=0;_<a;_++)for(let b=0;b<v;b++)(M>0?ts:es)(c,M*s/2,b*T,(b+1)*T,d[_],d[_+1],m+(e()<o?"L":""),l);Io(u,s,r,f,e,!0)}function hd(i,t,e){let n=i.color;n.setM(t);let s=e.pick([at("#f2f2ee"),at("#c9cdd2"),at("#2b2f38"),at("#b33a32"),at("#9fc6c0"),at("#e7d9b4"),at("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,pn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,at("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,ut.black)}function Fu(i,t,e,n){let s=i.color,r=at("#8d9096"),a=at("#3a3d42");s.setM(t),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,o=-n+.62;s.box(-.14,5.08,l,.14,5.56,o,a);let c=e*.141;i.atlas.setM(t),(e>0?ts:es)(i.atlas,c,l,o,5.08,5.56,"signal");let u=e>0?o:l,h=e>0?-1:1;for(let p=0;p<3;p++){let g=u+h*(.2+p*.4);s.box(e>0?.14:-.36,5.47,g-.15,e>0?.36:-.14,5.5,g+.15,a)}let f=u+h*.2;i.sig.setM(t),i.sig.box(e>0?.145:-.16,5.21,f-.11,e>0?.16:-.145,5.43,f+.11,Ke)}function fd(i,t,e,n){let s=i.color,r=at("#3d6ea8"),a=at("#e8eef2"),l=at("#c7c5bf"),o=5.35;s.setM(t),s.box(-1.1,o-.65,-e,1.1,o,e,r);for(let c of[-1.1,1])s.box(c,o,-e,c+.1,o+1.1,e,a),s.box(c-.02,o+1.1,-e,c+.12,o+1.18,e,r);i.atlas.setM(t),es(i.atlas,-1.105,-2.2,2.2,o-.62,o-.06,n),ts(i.atlas,1.105,-2.2,2.2,o-.62,o-.06,n),s.setM(t);for(let c of[-1,1]){let u=c*(e-1.65),h=c*(e-.15),f=Math.min(u,h),p=Math.max(u,h);s.box(-.45,.15,f+.3,.45,o-.65,p-.3,r);let g=20,x=(o-.15)/g;for(let m=0;m<g;m++)s.box(1.1+m*.3,.15,f,1.1+(m+1)*.3,o-(m+1)*x+.04,p,l);s.box(1.1,o-.1,f-.05,1.1+g*.3,o-.02,f+.05,r)}}function dd(i,t,e,n,s,r,a){let l=i.color,o=1.22,c=3.55,u=6.7,h=at("#c8c5bd"),f=at("#ebe8de"),p=at("#7a5a42"),g=at("#5e4433"),x=at("#4d5468");l.setM(t),l.box(e,-1.4,c,n,o,u,h,null,{noBottom:!0}),l.box(e,o,c,n,o+.025,c+.32,f),l.box(e,o,c+.6,n,o+.04,c+.9,ut.yellow);let m=Math.sign(s-(e+n)/2),d=m>0?n:e,v=d+m*6.2,T=c+.9,M=u-.2,_=(U,k,W)=>[U,k,W];m>0?l.quad(_(v,.1,M),_(v,.1,T),_(d,o,T),_(d,o,M),h):l.quad(_(v,.1,T),_(v,.1,M),_(d,o,M),_(d,o,T),h);for(let U of[T,M]){let k=at("#9aa0a6");l.rod([v,.1+.9,U],[d,o+.9,U],.03,.03,5,k);for(let W=0;W<=3;W++){let j=v+(d-v)*W/3,ot=.1+(o-.1)*W/3;l.box(j-.03,ot,U-.03,j+.03,ot+.9,U+.03,k)}}i.atlas.setM(t);for(let U=e;U<n-.01;U+=3){let k=Math.min(n,U+3);i.atlas.quad([U,-.6,u+.004],[k,-.6,u+.004],[k,o,u+.004],[U,o,u+.004],at("#d8d4ca"),fi("concrete"))}l.setM(t);for(let U=e+.4;U<n;U+=2)l.box(U-.05,o,u-.12,U+.05,o+1,u-.02,at("#8f949a"));for(let U of[.45,.95])l.box(e,o+U,u-.1,n,o+U+.06,u-.04,at("#8f949a"));let b=n-e,R=U=>m>0?n-b*U:e+b*U,y=R(.47),S=y-2.3,C=y+2.3,D=c+1.35,P=u-.25;l.box(S,o,P-.12,C,o+2.45,P,p);for(let U of[S,C-.12])l.box(U,o,D+.6,U+.12,o+2.45,P,g);for(let U of[S,C-.12])l.box(U,o,D,U+.12,o+2.45,D+.12,g);l.quad([C+.4,o+2.5,D-.45],[S-.4,o+2.5,D-.45],[S-.4,o+2.85,P+.35],[C+.4,o+2.85,P+.35],x),l.quad([S-.4,o+2.42,D-.45],[C+.4,o+2.42,D-.45],[C+.4,o+2.77,P+.35],[S-.4,o+2.77,P+.35],at("#3a3f50")),l.box(S+.3,o+.42,P-.55,C-.3,o+.48,P-.15,at("#8a6a4a"));for(let U of[S+.4,C-.5])l.box(U,o,P-.5,U+.08,o+.42,P-.2,ut.metal);i.atlas.setM(t),i.atlas.quad([y-1.1,o+1.55,P+.005],[y+1.1,o+1.55,P+.005],[y+1.1,o+2.03,P+.005],[y-1.1,o+2.03,P+.005],Ke,fi("ekiplate"+r));let L=R(.2),w=c+1.6,I=1.25,O=o+1.25,N=O+.95;l.setM(t);for(let U of[L-I+.12,L+I-.12])l.cyl(U,o,w,.05,.05,N-o+.05,8,at("#6b7078"));l.box(L-I,O-.03,w-.03,L+I,N+.03,w+.03,at("#3a3d42")),i.atlas.setM(t),i.atlas.quad([L-I,O,w+.035],[L+I,O,w+.035],[L+I,N,w+.035],[L-I,N,w+.035],Ke,fi("ekimei"+r)),i.atlas.quad([L+I,O,w-.035],[L-I,O,w-.035],[L-I,N,w-.035],[L+I,N,w-.035],Ke,fi("ekimei"+r)),l.setM(t);let B=y-m*4.2;l.box(B-.9,o+.42,u-1.25,B+.9,o+.47,u-.85,at("#3b6ea8")),l.box(B-.9,o+.47,u-.88,B+.9,o+.9,u-.83,at("#3b6ea8"));for(let U of[B-.75,B+.7])l.box(U,o,u-1.2,U+.06,o+.42,u-.9,ut.metal);for(let U=e+3;U<n-1;U+=9)Co(i,tc(t,U,o,u-.45))}var a_=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(at),l_=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(at);function pd(i,t,e,n,s,r){i.rod([t,n,s],[e,n,s],.018,.018,4,ut.metal);let a=t+.12+r()*.2;for(;a<e-.35;){let l=.28+r()*.34,o=.36+r()*.42,c=r.pick(a_),u=s+(r()-.5)*.06;i.quad([a+l,n-o,u],[a,n-o,u],[a,n-.02,u],[a+l,n-.02,u],c),i.quad([a,n-o,u+.01],[a+l,n-o,u+.01],[a+l,n-.02,u+.01],[a,n-.02,u+.01],pn(c,.85)),r()<.4&&i.box(a+l*.45,n-.02,u-.02,a+l*.55,n+.06,u+.02,at("#d8d8d0")),a+=l+.06+r()*.22}}function c_(i,t,e,n,s,r){let a=r.pick(l_),l=.11;i.box(t,n-.02,s-l,e,n+.09,s+.22,a),i.box(t,n-.72,s-l,e,n+.09,s-.005,a),i.box(t+.08,n-.5,s-l-.004,e-.08,n-.42,s-l+.01,pn(a,.86))}function md(i,t){let e=i.color,n=at("#a19f97"),s=at("#6b4a35"),r=at("#4f4a44"),a=at("#c8342a");e.setM(t),e.box(-.62,-.6,-.46,.62,.32,.46,at("#8d8b84"));for(let l of[-.52,.48])for(let o of[-.36,.32])e.box(l,.32,o,l+.05,1.5,o+.05,s);e.box(-.55,1.42,.3,.55,1.5,.4,s),e.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),e.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),e.cyl(0,.32,0,.17,.13,.44,10,n),e.blob(0,.86,0,.11,n,pn(n,.8),0),e.cyl(0,.6,0,.19,.11,.16,10,a,!1),e.cyl(0,.93,0,.115,.03,.1,8,a);for(let l of[-.32,.3])e.cyl(l,.32,-.18,.05,.06,.07,8,at("#e9e6dc"));e.box(-.06,.32,-.32,.06,.58,-.28,at("#5b8d3d"))}function gd(i,t){let e=i.color;e.setM(t);for(let n=0;n<8;n++)e.cyl(0,n*.4,0,.075,.075,.4,8,n%2?ut.black:ut.yellow,!1);e.cyl(0,3.2,0,.075,.055,.75,8,ut.black),e.box(-.5,2.55,-.06,.5,2.95,.02,ut.black);for(let n of[-.28,.28])e.box(n-.17,2.9,-.3,n+.17,2.95,-.06,ut.black);e.box(-.78,-.9,-.34,.3,0,.34,ut.concrete,null,{noBottom:!0}),e.box(-.68,0,-.26,-.16,1.18,.26,at("#e9e9e3")),e.box(-.68,1.18,-.26,-.16,1.24,.26,ut.yellow);for(let n of[Math.PI/4,-Math.PI/4]){e.setM(new Zt().multiplyMatrices(t,new Zt().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)e.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?ut.black:ut.yellow)}e.setM(t),i.atlas.setM(t),Ge(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function xd(i,t){let e=i.color;e.setM(t),e.box(-.4,0,-.4,.4,.25,.4,ut.stone),e.cyl(0,.25,0,.14,.12,.95,8,ut.stone),e.box(-.32,1.2,-.32,.32,1.3,.32,ut.stone),e.box(-.26,1.3,-.26,.26,1.72,.26,pn(ut.stone,1.05)),e.cyl(0,1.72,0,.55,.08,.38,6,pn(ut.stone,.92)),i.lamp.setM(t),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,Ke),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,Ke)}function Bu(i,t,e,n=6.2){let s=i.color;s.setM(t);for(let r of[-e,e])s.cyl(0,0,r,.32,.27,n,12,ut.vermilion),s.cyl(0,0,r,.38,.38,.5,12,ut.black);s.box(-.2,n*.78,-e-.6,.2,n*.78+.35,e+.6,ut.vermilion),s.box(-.35,n-.1,-e-1,.35,n+.3,e+1,ut.vermilion),s.box(-.45,n+.3,-e-1.3,.45,n+.6,e+1.3,ut.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,ut.vermilion)}function vd(i,t,e){let n=i.color;n.setM(t);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,at("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,at("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,at("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,at("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,ut.metal),n.box(1.1,0,.3,1.2,.42,.55,ut.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,ut.metal),i.atlas.setM(t),es(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),ts(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function _d(i,t,e,n=1){let s=i.color;s.setM(t);let r=pn(ut.concrete,.85+e()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],l=.55*n;for(let o of a)s.rod([0,l,0],[o[0]*.95*n,l+o[1]*.95*n,o[2]*.95*n],.42*n,.26*n,7,r)}function yd(i,t){let e=i.color;e.setM(t),i.foliage.setM(t),i.foliage.blob(0,.5,0,6,at("#8f8a80"),at("#55524c"),1,.5),e.cyl(0,2,0,2,1.4,15,14,ut.white);for(let n of[6,11])e.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,ut.red,!1);e.cyl(0,17,0,1.9,1.9,.25,14,ut.black),e.cyl(0,18.6,0,1,.25,1.2,12,ut.red),i.lamp.setM(t),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,Ke)}function Md(i,t,e){let n=i.color;n.setM(t);let s=e.pick([at("#f4f4f0"),at("#3b6ea5"),at("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),vr(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),vr(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,ut.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,ut.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,at("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,ut.metal)}function bd(i,t,e){let n=i.color;n.setM(t),n.box(-.8,0,.6,.8,.5,2,ut.stone),n.box(-.55,.5,.9,.55,1.5,1.8,at("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],at("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],at("#4d5468")),Bu(i,tc(t,0,0,-.3,Math.PI/2),.75,2.2)}var Oe=60,Sd=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],Td=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Ou=32,Lo=[.025,.026,.032],Ed=[.05,.05,.065],Ii=(i,t)=>(i%t+t)%t,ss=(i,t)=>{let e=fr(i);return!!e&&Math.abs(i-e.s)<t},zu=(i,t)=>Math.abs(i-Math.round(i/150)*150)<t,ei=(i,t)=>{let e=ti(i);return!!e&&Math.abs(i-e.s)<t},Nn=(i,t)=>{let e=wi(i);return!!e&&Math.abs(i-e.s)<t},ku=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.I=[]}grid(t,e,n){let s=this.P.length/3;for(let r=0;r<t;r++)for(let a=0;a<e;a++){let l=n(r,a);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0)}for(let r=0;r<t-1;r++)for(let a=0;a<e-1;a++){let l=s+r*e+a,o=l+1,c=l+e,u=c+1;this.I.push(l,o,c,o,u,c)}}gridN(t,e,n){let s=this.P.length/3;this.grid(t,e,n);let r=this.P,a=this.N,l=(o,c)=>(s+Math.min(t-1,Math.max(0,o))*e+Math.min(e-1,Math.max(0,c)))*3;for(let o=0;o<t;o++)for(let c=0;c<e;c++){let u=l(o,c-1),h=l(o,c+1),f=l(o-1,c),p=l(o+1,c),g=r[h]-r[u],x=r[h+1]-r[u+1],m=r[h+2]-r[u+2],d=r[p]-r[f],v=r[p+1]-r[f+1],T=r[p+2]-r[f+2],M=x*T-m*v,_=m*d-g*T,b=g*v-x*d;_<0&&(M=-M,_=-_,b=-b);let R=Math.hypot(M,_,b)||1,y=l(o,c);a[y]=M/R,a[y+1]=_/R,a[y+2]=b/R}}build(){let t=new me;return t.setAttribute("position",new $t(this.P,3)),t.setAttribute("normal",new $t(this.N,3)),t.setAttribute("su",new $t(this.SU,2)),t.setAttribute("zw",new $t(this.ZW,4)),t.setAttribute("rk",new $t(this.RK,2)),t.setAttribute("rv",new $t(this.RV,1)),t.setIndex(this.I),t.computeBoundingSphere(),t}},nc=class{constructor(t,e,n,s,r){this.path=e,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new ke,t.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.ahead=760,this.behind=40}setOrigin(t,e){this.origin.x=t,this.origin.z=e;for(let n of this.chunks.values())n.group.position.set(n.ox-t,0,n.oz-e)}update(t,e){let n=Math.floor((t-this.behind)/Oe),s=Math.floor((t+this.ahead)/Oe);for(let[a,l]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(l),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);let r=performance.now();for(;;){if(!this.job){let l=-1;for(let o=Math.max(0,n);o<=s;o++)if(!this.chunks.has(o)){l=o;break}if(l<0)return 0;this.job={c:l,it:this.gen(l)}}let a=this.job.it.next();if(a.done&&(this.chunks.set(this.job.c,a.value),this.group.add(a.value.group),this.job=null),performance.now()-r>e)return 1}}dispose(t){this.group.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose()})}*gen(t){let e=this.path,n=t*Oe,s=n+Oe,r=e.at(n),a=r.x,l=r.z,o=ln(Math.floor(An(t,777)*4294967295)),c={atlas:new Be({uv:!0}),color:new Be,foliage:new Be,leaf:new Be({uv:!0}),lamp:new Be({color:!1}),sig:new Be({color:!1}),sodium:new Be({color:!1}),decal:new Be({uv:!0}),pool:new Be({uv:!0,color:!1})},u=new ku,h=[],f=[],p={},g={},x=(S,C)=>{e.at(S,g);let D=mn(S,"rw");return g.y+dr(S,C,g.y,D)},m=S=>{let C=be(S);return[C.city,C.sakura,C.coast,C.country]},d=(S,C,D)=>(e.at(S,p),[p.x+p.rx*C-a,D,p.z+p.rz*C-l]),v=(S,C,D,P=0,L=!0)=>{e.at(S,p);let w=p.h-Math.PI/2+(L&&C<0?Math.PI:0)+P,I=new Zt().makeRotationY(w);return I.setPosition(p.x+p.rx*C-a,D,p.z+p.rz*C-l),I},T=(S,C,D=0,P=0,L=!0)=>v(S,C,x(S,C)+D,P,L),M=S=>e.at(S,g).y,_=S=>mn(S,"rw"),b=S=>{let C=be(S);return C.city+C.sakura>.5?C.city>=C.sakura?3:2.6:0};{let S=wi(n+Oe/2),C=!!S&&S.s>n-40&&S.s<s+40,D=C?61:21,P=_(n+Oe/2),L=(()=>{let k=[0,...Sd].map(W=>W);return Td.forEach(W=>k.push(W-P)),k})(),w=[...L.slice().reverse().map(U=>-U),...L],I=w.length,O=Array.from({length:D},(U,k)=>n+k/(D-1)*Oe);{let U=ti(n+Oe/2);if(U)for(let k of[U.s-Ne,U.s+Ne])k>n+.1&&k<s-.1&&O.push(k-.03,k+.03)}O.sort((U,k)=>U-k);let N=I/2,B=O.map(U=>(e.at(U,p),{s:U,f:{...p},rw:_(U),w:m(U),rb:C?zf(U):0}));for(let[U,k]of[[0,N],[N,I]])u.gridN(B.length,k-U,(W,j)=>{let ot=B[W],zt=ot.f,Ft=U+j,Vt=w[Ft],J=Vt<0||Vt===0&&Ft<N?Vt-ot.rw:Vt+ot.rw,nt=zt.y+dr(ot.s,J,zt.y,ot.rw),St=Math.min(1,Vl/1.5);return[zt.x+zt.rx*J-a,nt,zt.z+zt.rz*J-l,0,1,0,Ii(ot.s,Qi),J,ot.w[0],ot.w[1],ot.w[2],ot.w[3],ot.rw,0,ot.rb>0?ot.rb:-St]}),yield}yield,u.grid(31,2,(C,D)=>{let P=n+C/30*Oe,L=_(P),w=D?L:-L;e.at(P,p);let I=p.y,O=(M(P+1)-M(P-1))/2,N=-O*p.fx,B=1,U=-O*p.fz,k=Math.hypot(N,B,U),W=m(P);return[p.x+p.rx*w-a,I,p.z+p.rz*w-l,N/k,B/k,U/k,Ii(P,Qi),w,W[0],W[1],W[2],W[3],L,1]});{let S=[];for(let P=0;P<=30;P++){let L=n+P/30*Oe;S.push({s:L,sw:b(L)})}let C=[],D=null;for(let P of S)P.sw>0?(D||(D=[],C.push(D)),D.push(P)):D=null;for(let P of C)if(!(P.length<2))for(let L of[-1,1])u.grid(P.length,2,(w,I)=>{let{s:O,sw:N}=P[w],B=_(O),U=L*(I===(L>0?0:1)?B:B+N);e.at(O,p);let k=m(O);return[p.x+p.rx*U-a,p.y+.15,p.z+p.rz*U-l,0,1,0,Ii(O,Qi),U,k[0],k[1],k[2],k[3],B,2]}),u.grid(P.length,2,(w,I)=>{let{s:O}=P[w],N=_(O),B=L*N,U=L>0?I:1-I;e.at(O,p);let k=m(O);return[p.x+p.rx*B-a,p.y+(U?.15:0),p.z+p.rz*B-l,-L*p.rx,0,-L*p.rz,Ii(O,Qi),B,k[0],k[1],k[2],k[3],N,3]})}yield,this.placePoles(t,n,s,o,c,v,x,d,M,_);{let S=Math.ceil((n-Ss)/bs),C=hr(S);C<s&&So(C)&&this.placeCrossing(c,u,C,v,M,_,x,b,a,l);let D=Math.ceil((n-Xl)/To),P=Au(D);P<s&&Ru(P)&&(yield*this.placeRiver(c,u,P,v,M,_,x,b,a,l,o,f));let L=ti(n+Oe/2);L&&L.s+Le>n&&L.s-Le<s&&(yield*this.placeTunnel(c,u,L,n,s,v,T,x,_,a,l,o))}yield;for(let S=n;S<s;S+=4){let C=Ie(S);(C==="coast"&&be(S).coast>.45||C==="mountain"&&be(S).mountain>.45)&&!ei(S+2,Le+4)&&this.guardrail(c,S,Math.min(S+4,s),d,M,_)}yield*this.placeCity(c,o,n,s,v,T,M,_,b,x,u,a,l),yield*this.placeSakura(c,o,n,s,v,T,M,_,x),this.placeCoast(c,o,n,s,v,T,M,_,x,h,d),yield,yield*this.placeCountry(c,o,n,s,v,T,M,_,x),yield*this.placeMountain(c,o,n,s,v,T,M,_,x),yield*this.placeVerge(c,o,n,s,v,x,_),yield;let R=new ke,y=(S,C,D,P,L=0)=>{if(!S)return;let w=new fe(S,C);w.castShadow=D,w.receiveShadow=P,w.renderOrder=L,R.add(w)};if(y(u.build(),this.M.ground,!1,!0),yield,y(c.atlas.build(),this.M.atlas,!0,!0),yield,y(c.color.build(),this.M.color,!0,!0),yield,y(c.foliage.build(),this.M.foliage,!0,!0),y(c.leaf.build(),this.M.leaf,!0,!0),yield,y(c.lamp.build(),this.M.lamp,!1,!1),y(c.sig.build(),this.M.sig,!1,!1),y(c.sodium.build(),this.M.sodium,!1,!1),y(c.decal.build(),this.M.decal,!1,!0,1),y(c.pool.build(),this.M.pool,!1,!1,2),h.length){let S=new me,C=[],D=[],P=[];h.forEach((L,w)=>{for(let I of L)C.push(I[0],I[1],I[2]),D.push(I[3],I[4]);if(w>0){let I=(w-1)*2;P.push(I,I+2,I+1,I+1,I+2,I+3)}}),S.setAttribute("position",new $t(C,3)),S.setAttribute("su",new $t(D,2)),S.setIndex(P),S.computeBoundingSphere(),y(S,this.foamMat,!1,!1,1)}for(let S of f)y(S,this.riverMat,!1,!0);return R.position.set(a-this.origin.x,0,l-this.origin.z),{group:R,ox:a,oz:l,s0:n}}poleSpec(t){let e=t*Ou+6,n=Ie(e);if(n==="sakura"||ss(e,6)||Nn(e,34)||ei(e,Le+12))return null;let s=mn(e,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):s+2.35;return{s:e,u:r,z:n}}placePoles(t,e,n,s,r,a,l,o,c,u){let h=Math.ceil((e-6)/Ou),f=Math.floor((n-6-.001)/Ou);for(let p=h;p<=f;p++){let g=this.poleSpec(p);if(!g)continue;let x=g.z==="city"?c(g.s)+.15:l(g.s,g.u),m=a(g.s,g.u,x),d=ln(Math.floor(An(p,31)*4294967295)),v=ec(r,m,d,{trans:d()<.45});g.z==="city"&&p%2===0&&nd(r,m,-.11);let T=this.poleSpec(p+1);if(T){let M=T.z==="city"?c(T.s)+.15:l(T.s,T.u),_=a(T.s,T.u,M),b=ec({color:new Be,atlas:new Be({uv:!0})},_,ln(Math.floor(An(p+1,31)*4294967295)),{});r.color.setM(new Zt);let R=[];for(let y=0;y<v.length;y++){let S=v[y],C=b[y],D=.35+d()*.4+(y>=7?.3:0);R.push(D),r.color.wire([S.x,S.y,S.z],[C.x,C.y,C.z],D,y>=7?.022:.015,Lo,10)}if(g.z!=="coast"&&d()<.38){let y=Math.floor(d()*4),S=v[y],C=b[y],D=1+Math.floor(d()*4),P=.18+d()*.5;for(let L=0;L<D;L++){let w=Math.min(.92,P+L*(.018+d()*.025)),I=S.x+(C.x-S.x)*w,O=S.z+(C.z-S.z)*w,N=S.y+(C.y-S.y)*w-R[y]*4*w*(1-w);r.color.box(I-.07,N+.015,O-.07,I+.07,N+.19,O+.07,Ed),r.color.box(I-.045,N+.19,O-.045,I+.045,N+.27,O+.045,Ed)}}}if(g.z==="city"){r.color.setM(new Zt);let M=1+Math.floor(d()*3);for(let _=0;_<M;_++){let b=v[7+_%2],R=(d()-.5)*14,y=u(g.s+R),S=d()<.55,C=S?-(y+3.15):y+3.15,D=o(g.s+R,C,c(g.s+R)+5.2+d()*2.5);r.color.wire([b.x,b.y,b.z],D,.25+d()*.4,.012,Lo,8)}}}}*intersection(t,e,n,s,r,a,l,o,c,u,h){let f=this.path.at(n,{}),p=a(n),g=l(n),x=o(n)||3,m=n-.5,d=be(n),v=[d.city,d.sakura,d.coast,d.country],T=(_,b,R)=>[f.x+f.fx*(_-.5)+f.rx*b-u,R,f.z+f.fz*(_-.5)+f.rz*b-h],M=g+x+.15;for(let _ of[-1,1]){let b=_*(g+x),R=_*80;c.grid(21,2,(D,P)=>{let L=b+(R-b)*D/20,w=(P?-3:3)*_,I=T(w,L,p+.165);return[I[0],I[1],I[2],0,1,0,w*_,L,v[0],v[1],v[2],v[3],g,10]});{let D=_*(g+x+3.2),P=-_*1.35,L=1.15,w=.42,I=(O,N)=>T(P+_*O,D-_*N,p+.18);t.decal.setM(new Zt),t.decal.quad(I(-L,-w),I(L,-w),I(L,w),I(-L,w),[1,1,1],Ro("tomare"))}for(let D of[-1,1]){let P=M+15+e()*3;for(;P<52;){let L=e.range(5.5,8.5),w=_*(P+L/2),I=e(),O=r(m+D*3.3,w,p+.14,D>0?Math.PI/2:-Math.PI/2,!1);is(t,O,e,{type:I<.5?"house":"shop",w:L,d:e.range(7,10),floors:I<.5?2:e.int(2,3),tint:e.pick(ji),litP:.45,fence:0}),P+=L+e.range(.2,1.2)}yield}let y=[30,54].map(D=>r(m+2.8,_*D,p+.15,-Math.PI/2,!1)),S=ln(Math.floor(An(s,_>0?71:73)*4294967295)),C=y.map(D=>ec(t,D,S,{trans:S()<.4}));t.color.setM(new Zt);for(let D=0;D<7;D++){let P=C[0][D],L=C[1][D];t.color.wire([P.x,P.y,P.z],[L.x,L.y,L.z],.3+S()*.4,.014,Lo,10)}}Fu(t,r(n-9,-(g+.55),p+.15,0,!0),1,g+.55-1.6),Fu(t,r(n+8,g+.55,p+.15,0,!0),1,g+.55-1.6),s%3===1&&fd(t,r(n+15,0,p,0,!1),g+x+.1,"hodokyo"+Math.abs(s)%3)}placeCrossing(t,e,n,s,r,a,l,o,c,u){let h=this.path.at(n,{}),f=h.y,p=a(n),g=o(n),x=p+g+.2,m=150,d=f+.18,v=be(n),T=[v.city,v.sakura,v.coast,v.country],M=(I,O,N)=>[h.x+h.fx*I+h.rx*O-c,N,h.z+h.fz*I+h.rz*O-u],_=[7.6,4.7,-4.7,-7.6];for(let[I,O]of[[-m,-x],[x,m]])e.grid(25,_.length,(B,U)=>{let k=I+(O-I)*B/24,W=_[U],ot=Math.abs(W)<5?d:Math.min(d-.05,l(n+W,k)-.03),zt=M(W,k,ot);return[zt[0],zt[1],zt[2],0,1,0,W,k,T[0],T[1],T[2],T[3],p,5]});let b=(I,O,N)=>e.grid(2,2,(B,U)=>{let k=B?O:I,W=U?-3.3:3.3,j=M(W,k,N);return[j[0],j[1],j[2],0,1,0,W,k,T[0],T[1],T[2],T[3],p,6]});b(-p,p,f+.03),g>0&&(b(-x,-p,f+.165),b(p,x,f+.165));let R=(I,O,N,B)=>e.grid(2,2,(U,k)=>{let W=U?B:N,j=k?O:I,ot=M(j,W,f+.025);return[ot[0],ot[1],ot[2],0,1,0,j,W,T[0],T[1],T[2],T[3],p,7]});R(-7.15,-7.6,-p+.3,-.12),R(7.6,7.15,.12,p-.3);let y=s(n,0,f,-Math.PI/2,!1),S=t.color;S.setM(y);let C=[.42,.4,.38],D=[.3,.29,.28],P=[.55,.57,.6];for(let I of[-2,2])for(let O of[-.5335,.5335]){let N=-(I+O);for(let[B,U]of[[-m,-x],[x,m]])S.box(B,.26,N-.035,U,.34,N+.035,C);S.box(-x,0,N-.035,x,.04,N+.035,D)}let L=[-146,-104,-64,-26,26,64,104,146];for(let I of L){for(let O of[-4.95,4.95])S.box(I-.12,.18,O-.12,I+.12,7.4,O+.12,P);S.box(I-.1,6.95,-5.15,I+.1,7.2,5.15,P);for(let O of[-2,2])S.box(I-.04,6.3,-O-.04,I+.04,6.95,-O+.04,P)}for(let I of[-2,2])for(let O=0;O<L.length-1;O++)S.wire([L[O],5.35,-I],[L[O+1],5.35,-I],.05,.011,Lo,6),S.wire([L[O],6.4,-I],[L[O+1],6.4,-I],.45,.011,Lo,8);let w=Math.round((n-Ss)/bs);if(v.country>.9&&An(w,17)<.7){let I=An(w,19)<.5?-1:1,O=I>0?p+9:-(p+9+46),N=I>0?p+9+46:-(p+9);dd(t,y,O,N,I*(p+9),Math.abs(w)%4,ln(Math.floor(An(w,23)*4294967295))),S.setM(y)}for(let I of Zl(this.path,n)){let O=new Zt().makeRotationY(I.yaw);O.setPosition(I.x-c,I.y,I.z-u),gd(t,O)}ns(t,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85),ns(t,s(n+70,a(n+70)+.6,r(n+70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(t,e,n,s,r,a,l,o,c,u,h,f){let p=this.path.at(n,{}),g=p.y,x=a(n),m=o(n),d=be(n),v=[d.city,d.sakura,d.coast,d.country],T=d.sakura>.5,M=222,_=x+m+.5,b=g-Eo,R=(w,I,O)=>[p.x+p.fx*w+p.rx*I-c,O,p.z+p.fz*w+p.rz*I-u];{let w=[],I=[],O=[];for(let U=0;U<=74;U++){let k=-M+2*M*U/74;for(let W of[12.5,-12.5]){let j=R(W,k,b);w.push(j[0],j[1],j[2]),I.push(W,k)}if(U>0){let W=(U-1)*2;O.push(W,W+1,W+2,W+1,W+3,W+2)}}let B=new me;B.setAttribute("position",new $t(w,3)),B.setAttribute("su",new $t(I,2)),B.setIndex(O),B.computeBoundingSphere(),f.push(B)}for(let[w,I]of[[28.9,25.7],[-25.7,-28.9]])for(let[O,N]of[[-M,-(x+3.4)],[x+3.4,M]])e.grid(41,2,(B,U)=>{let k=O+(N-O)*B/40,W=U?I:w,j=R(W,k,g+.38);return[j[0],j[1],j[2],0,1,0,W,k,v[0],v[1],v[2],v[3],x,9,1]});yield;let y=s(n,0,g,0,!1),S=t.color,C=[.74,.73,.7],D=T?[.78,.2,.15]:[.55,.72,.64];S.setM(y),S.box(-24.5,-1,-_,24.5,-.03,_,C,null,{noBottom:!1});for(let w of[-1,1])S.box(-24.5,-1.3,w>0?_-.35:-_,24.5,-.95,w>0?_:-_+.35,[.62,.61,.58]);for(let w of[-8,8])S.box(w-.7,-Eo-1.4,-_+.6,w+.7,-1,_-.6,C);for(let w of[-25.7,25.7])S.box(w-1.2,-Eo+.4,-_-.4,w+1.2,-.05,_+.4,C);let P=m>0?.15:0;for(let w of[-1,1]){let I=w*(_-.14);for(let O=-24;O<=24.01;O+=2)S.box(O-.06,P,I-.06,O+.06,P+1,I+.06,D);S.box(-24,P+.95,I-.08,24,P+1.08,I+.08,D),S.box(-24,P+.48,I-.03,24,P+.54,I+.03,D),S.box(-24,P+.06,I-.03,24,P+.12,I+.03,D)}let L="bridge"+Math.abs(Math.round(n/To))%4;for(let w of[-25,25])for(let I of[-1,1]){let O=I*(_-.1),N=[.7,.69,.65];S.box(w-.32,P,O-.32,w+.32,P+1.45,O+.32,N),S.box(w-.38,P+1.45,O-.38,w+.38,P+1.58,O+.38,[.62,.61,.57]),t.atlas.setM(y);let B=(w<0?-1:1)*.325,U=L;w<0?t.atlas.quad([w-.325,P+.3,O-.22],[w-.325,P+.3,O+.22],[w-.325,P+1.3,O+.22],[w-.325,P+1.3,O-.22],[1,1,1],Ro(U)):t.atlas.quad([w+.325,P+.3,O+.22],[w+.325,P+.3,O-.22],[w+.325,P+1.3,O-.22],[w+.325,P+1.3,O+.22],[1,1,1],Ro(U)),S.setM(y)}Co(t,s(n-14,-(_-.45),g+P,0,!0)),Co(t,s(n+14,_-.45,g+P,0,!0)),yield;for(let w of[-18,18])for(let I of[-1,1]){yield;for(let O=11+h()*4;O<(T?125:170);O+=T?h.range(8.5,11):h.range(18,34)){let N=n+w+(h()-.5)*1.5,B=I*O;Dn(t,s(N,B,l(N,B),h()*6,!1),T?"sakura":"broad",h,T?h.range(1,1.25):h.range(.9,1.25))}}}*placeTunnel(t,e,n,s,r,a,l,o,c,u,h,f){let p=this.path.at(n.s,{}),g=p.y,x=c(n.s),m=x+1.4,d=be(n.s),v=[d.city,d.sakura,d.coast,d.country],T=a(n.s,0,g,0,!1),M=t.color,_=Math.max(s,n.s-Ne)-n.s,b=Math.min(r,n.s+Ne)-n.s;if(b>_+.01){let y=Math.max(2,Math.ceil((b-_)/3)+1),S=[-(x+1.5),-x,-x*.5,0,x*.5,x,x+1.5];e.gridN(y,S.length,(N,B)=>{let U=_+(b-_)*N/(y-1),k=n.s+U,W=S[B],j=g+ql(U,W);return[p.x+p.fx*U+p.rx*W-u,j,p.z+p.fz*U+p.rz*W-h,0,1,0,Ii(k,Qi),W,v[0],v[1],v[2],v[3],x,0,-1]});let C=[[-x,0],[-x,.2],[-m,.2],[-m,3.2]];for(let N=1;N<12;N++){let B=Math.PI*(1-N/12);C.push([m*Math.cos(B),3.2+3*Math.sin(B)])}C.push([m,3.2],[m,.2],[x,.2],[x,0]);let D=[.86,.82,.72],P=[.44,.45,.47],L=[.62,.61,.58],w=[];for(let N=_;N<b-.01;N+=6)w.push(N);w.push(b),M.setM(T);for(let N=0;N<w.length-1;N++)for(let B=0;B<C.length-1;B++){let[U,k]=C[B],[W,j]=C[B+1],ot=Math.max(k,j)<=.21?L:Math.abs(U)>m-.01&&Math.abs(W)>m-.01?D:P;M.quad([w[N],k,U],[w[N+1],k,U],[w[N+1],j,W],[w[N],j,W],ot)}t.sodium.setM(T),t.sig.setM(T);let I=m*Math.cos(Math.PI/6)-.12,O=3.2+3*Math.sin(Math.PI/6)-.08;for(let N=Math.ceil((_+Ne-3)/6)*6+3-Ne;N<b;N+=6)for(let B of[-1,1])t.sodium.box(N-.45,O-.07,B*I-.13,N+.45,O+.07,B*I+.13,null);for(let N=Math.ceil((_+Ne)/24)*24-Ne;N<b;N+=24)t.sig.box(N-.3,.95,-m+.01,N+.3,1.2,-m+.06,null);for(let N=Math.ceil((_+Ne-30)/60)*60+30-Ne;N<b;N+=60)for(let B of[-1.15,1.15])M.box(N-1.1,5.2,B-.36,N+1.1,5.78,B+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),M.box(N-.08,5.78,B-.05,N+.08,6.15,B+.05,[.4,.4,.42]);yield}for(let y of[-1,1]){let S=n.s+y*Ne,C=y*(Ne+.08);if(S<s||S>=r)continue;let D=[];for(let j of Sd)j>=1.44&&D.push(x+j,-(x+j));for(let j of Td)j>x+3.5&&j<x+21&&D.push(j,-j);for(let j=0;j<=24;j++)D.push(-m+2*m*j/24);D.push(-m-.01,m+.01),D.sort((j,ot)=>j-ot);let P=j=>3.2+3*Math.sqrt(Math.max(0,1-(j/m)**2)),L=j=>Math.max(o(S-y*.03,j)-g,ql(y*(Ne-.03),j)),w=j=>Math.abs(j)<=m+1e-6?P(j):o(S+y*.03,j)-g,I=[.78,.77,.73],O=[.66,.65,.62];M.setM(T);for(let j=0;j<D.length-1;j++){let ot=D[j],zt=D[j+1];if(zt-ot<1e-4)continue;let Ft=L(ot),Vt=L(zt),J=w(ot),nt=w(zt);Ft-J<.01&&Vt-nt<.01||(y<0?M.quad([C,J,ot],[C,nt,zt],[C,Vt,zt],[C,Ft,ot],I):M.quad([C,nt,zt],[C,J,ot],[C,Ft,ot],[C,Vt,zt],I))}for(let j=0;j<24;j++){let ot=-m+2*m*j/24,zt=-m+2*m*(j+1)/24,Ft=P(ot),Vt=P(zt),J=C+y*.02;y<0?M.quad([J,Ft,ot],[J,Vt,zt],[J,Vt+.55,zt*1.08],[J,Ft+.55,ot*1.08],O):M.quad([J,Vt,zt],[J,Ft,ot],[J,Ft+.55,ot*1.08],[J,Vt+.55,zt*1.08],O)}t.atlas.setM(T);let N=1.9,B=7.05,U=7.85,k=C+y*.03,W=Ro("tunnel"+(d.coast>.5?1:Math.abs(n.k)%2?2:0));y<0?t.atlas.quad([k,B,-N],[k,B,N],[k,U,N],[k,U,-N],[1,1,1],W):t.atlas.quad([k,B,N],[k,B,-N],[k,U,-N],[k,U,N],[1,1,1],W)}yield;let R=d.mountain>.5;for(let y=Math.max(s,n.s-Le*.95)+f()*3;y<Math.min(r,n.s+Le*.95);y+=f.range(4,8)){let S=Math.abs(y-n.s)>Ne-4?17:4;for(let C of[-1,1]){let D=C*(x+f.range(S,50)),P=f();Dn(t,l(y,D,-.3,f()*6,!1),R?P<.5?"maple":P<.8?"cedar":"ginkgo":P<.65?"pine":"broad",f,f.range(.9,1.3))}}}*placeMountain(t,e,n,s,r,a,l,o,c){let u=h=>be(h).mountain;if(!(u(n)<.3&&u(s)<.3)){for(let h of[-1,1]){for(let f=n+e()*4;f<s;f+=e.range(4.5,8.5)){if(u(f)<.45||ei(f,Le+6))continue;let p=o(f),g=e();if(h>0){let x=g<.5?"maple":g<.72?"ginkgo":"cedar";Dn(t,a(f,p+e.range(17,70),-.25,e()*6,!1),x,e,e.range(.9,1.3))}else{let x=g<.55?"maple":g<.8?"cedar":"ginkgo";Dn(t,a(f,-(p+e.range(3.5,34)),-.25,e()*6,!1),x,e,e.range(.95,1.35))}}yield}for(let h=n+e()*4;h<s;h+=e.range(3,6)){if(u(h)<.5)continue;let f=e()<.7,p=-(o(h)+(f?e.range(108,205):e.range(36,100)));Dn(t,a(h,p,-.3,e()*6,!1),e()<.5?"cedar":e()<.75?"maple":"ginkgo",e,e.range(1.1,1.6))}yield,t.color.setM(new Zt);for(let h=Math.ceil(n/10)*10;h<s;h+=10){if(u(h)<.5||ei(h,Le+4))continue;let f=o(h),p=r(h,-(f+.95),l(h));od(t,p)}for(let h=Math.ceil(n/14)*14;h<s;h+=14){if(u(h)<.6)continue;let f=this.path.curv(h);if(Math.abs(f)<1/230)continue;let p=o(h);f>0?ns(t,r(h,p+.42,l(h)),"chev_l",-1,1.25,.58):ns(t,r(h,-(p+1.15),l(h)),"chev_r",1,1.35,.58)}}}*placeVerge(t,e,n,s,r,a,l){for(let o of[-1,1]){for(let c=n+e()*1.2;c<s;c+=e.range(.55,1.5)){if(ss(c,10)||Nn(c,31)||ei(c,Le+4))continue;let u=Ie(c),h=l(c),f,p,g=.22,x=1;if(u==="country")f=h+(e()<.6?e.range(.2,.62):e.range(2.18,2.75)),p=.95;else if(u==="sakura")f=h+2.68+e()*1.3,p=.55,g=.3;else if(u==="coast"){if(o<0)continue;f=h+.95+e()*1.7,p=.75,g=.18}else if(u==="mountain")f=o<0?h+1+e()*.35:h+.25+e()*.2,p=o<0?.55:.18,g=.12,x=.85;else{if(zu(c,5))continue;f=h+3.02+e()*.1,p=.1,g=.08,x=.65}if(e()>p)continue;let m=o*f;ld(t,r(c,m,a(c,m),e()*6.28,!1),e,e()<g?"flowers":"grass",x*e.range(.8,1.2))}yield}}guardrail(t,e,n,s,r,a){t.color.setM(new Zt);let l=Math.max(1,Math.round((n-e)/2));for(let o=0;o<l;o++){let c=e+(n-e)*o/l,u=e+(n-e)*(o+1)/l,h=-(a(c)+.95),f=-(a(u)+.95),p=r(c),g=r(u),x=(_,b,R)=>s(_,b,R),m=x(c,h,p+.52),d=x(u,f,g+.52),v=x(c,h,p+.84),T=x(u,f,g+.84);t.color.quad(m,d,T,v,ut.rail),t.color.quad(d,m,v,T,[.62,.64,.66]);let M=s(c,h-.05,p);t.color.box(M[0]-.05,p,M[2]-.05,M[0]+.05,p+.8,M[2]+.05,[.7,.72,.75])}}*placeCity(t,e,n,s,r,a,l,o,c,u,h,f,p){for(let m of[-1,1]){let d=n+e()*2;for(;d<s-2;){{let L=be(d);if(L.city<.62||L.mountain>.1){d+=4;continue}}{let L=fr(d+6);if(L&&d<L.s+8.5&&d+14>L.s-8.5){d=Math.max(d+1,L.s+8.5);continue}}let v=Ii(d,150);if(v>145.6||v<3.4){d+=1;continue}let T=o(d),M=c(d)||3,_=T+M+.15,b=e(),R=b<.42?"shop":b<.58?"apt":b<.68?"office":b<.82?"house":b<.88?"konbini":b<.94?"parking":"gap",y=R==="shop"?e.range(5,9):R==="apt"?e.range(10,16):R==="office"?e.range(10,14):R==="house"?e.range(7,9.5):R==="konbini"?e.range(12,14):R==="parking"?e.range(7,11):e.range(2,3.5);if(d+y>s){if(s-d<5||R==="konbini")break;y=s-d-.2}{let L=Math.ceil((d+4.4)/150)*150-4.4;if(d+y>L-.1){if(L-.1-d<4){d=L+7.9;continue}y=L-.1-d}}let S=d+y/2,C=l(S),D=e.pick(ji),P=.42;if(R==="parking"){let L=r(S,m*(_+3),C+.15);e()<.8&&hd(t,tc(L,0,0,.5,(e()-.5)*.1),e),t.color.setM(L),t.color.box(-y/2,0,5.5,y/2,1.6,5.7,ut.concrete)}else if(R!=="gap"){let L=r(S,m*_,C+.15),w={type:R,w:y,d:R==="apt"||R==="office"?e.range(10,14):e.range(8,12),floors:R==="shop"?e.int(2,4):R==="apt"?e.int(4,9):R==="office"?e.int(4,8):2,tint:D,litP:P,fence:R==="house"&&e()<.5?1.2:0};if(is(t,L,e,w),R!=="house"&&e()<.28&&Du(t,r(S+(e()-.5)*(y-1.2),m*(_-.42),C+.15),e),(R==="shop"||R==="konbini")&&e()<.3)for(let I=0;I<1+e()*3;I++)id(t,r(S-y/2+.8+I*.55,m*(_-.75),C+.15,Math.PI/2+.1),e);if(R==="house"&&e()<.6)for(let I=0;I<2+e()*3;I++)rd(t,r(S+1+I*.5,m*(_-.3),C+.15),e);if(e()<.03)for(let I=0;I<3;I++)sd(t,r(S+I*.9,m*(T+.35),C))}d+=y+e.range(.05,.5),yield}for(let v=n+e()*10;v<s-8;v+=e.range(14,26)){if(be(v).city<.7||be(v).mountain>.1||e()<.3||ss(v,18)||zu(v,15))continue;let T=o(v),M=r(v,m*(T+3.2+e.range(14,20)),l(v)+.1);is(t,M,e,{type:e()<.6?"apt":"office",w:e.range(12,18),d:12,floors:e.int(6,11),tint:e.pick(ji),litP:.4})}if(be(n+30).city>.7&&be(n+30).mountain<.1&&e()<.65){let v=n+e()*Oe;if(ss(v,24)||zu(v,20))continue;let T=r(v,m*e.range(55,150),l(v));is(t,T,e,{type:"tower",w:e.range(16,26),d:e.range(16,22),floors:e.int(12,26),tint:e.pick(ji),litP:.45})}}let g=Math.ceil(n/150),x=Math.floor((s-.01)/150);for(let m=g;m<=x;m++){let d=m*150;if(Ie(d)!=="city"||be(d).mountain>.1)continue;let v=o(d);yield*this.intersection(t,e,d,m,r,l,o,c,h,f,p),ns(t,r(d-1,-(v+.4),l(d)+.15),"sign_blue",1),ns(t,r(d-6,-(v+.4),l(d)+.15),"sign_stop",1,2.1,.75),Nu(t,r(d+7,v+.4,l(d)+.15),-1),m%3===0&&ns(t,r(d+20,-(v+.4),l(d)+.15),"sign_speed",1)}}*placeSakura(t,e,n,s,r,a,l,o,c){for(let f of[-1,1]){for(let p=n+e()*4;p<s;p+=e.range(7.5,10)){if(be(p).sakura<.45||Nn(p,30))continue;let g=o(p);Dn(t,a(p,f*(g+3.7),0,e()*6),"sakura",e,e.range(1.05,1.3)),e()<.45&&Dn(t,a(p+3,f*(g+e.range(9,18)),0,e()*6),"sakura",e,e.range(.9,1.25))}yield;for(let p=n+(f>0?0:12);p<s;p+=24){if(Ie(p)!=="sakura"||Nn(p,30))continue;let g=o(p);Co(t,r(p,f*(g+2.25),l(p)+.15)),Ii(p,48)<24&&xd(t,r(p+6,f*(g+3),c(p+6,f*(g+3))))}for(let p=n+e()*15;p<s;p+=e.range(14,24)){if(Ie(p)!=="sakura"||e()<.35||Nn(p,45))continue;let g=o(p);is(t,a(p,f*(g+e.range(20,30))),e,{type:"house",w:e.range(8,11),d:e.range(7,9),floors:e()<.6?2:1,tint:e.pick(ji),litP:.45,fence:e()<.6?1.4:0})}}let h=Math.floor((n+Oe/2)/480)*480+240;h>=n&&h<s&&Ie(h)==="sakura"&&!Nn(h,60)&&Bu(t,r(h,0,l(h),0,!1),o(h)+1.6,6.4)}placeCoast(t,e,n,s,r,a,l,o,c,u,h){for(let g=0;g<=20;g++){let x=n+g/20*Oe;if(be(x).coast<.85||ei(x,Le*1.25)){u.length&&u[u.length-1]!==null&&u.push(null);continue}let d=o(x),v=d+11,T=d+19,M=h(x,-v,Ki+.06),_=h(x,-T,Ki+.06);u.push([[M[0],M[1],M[2],Ii(x,Qi),0],[_[0],_[1],_[2],Ii(x,Qi),1]])}let f=u.indexOf(null);f>=0&&(u.length=f),u.length<2&&(u.length=0);for(let g=n+e()*6;g<s;g+=e.range(5,9)){if(Ie(g)!=="coast"||ei(g,Le+6))continue;let x=o(g);e()<.7&&Dn(t,a(g,x+e.range(3.5,26),0,e()*6,!1),"pine",e,e.range(.9,1.3)),e()<.2&&Dn(t,a(g+2,-(x+e.range(3.5,7)),0,e()*6,!1),"pine",e,e.range(.8,1.1))}for(let g=n+4;g<s;g+=e.range(18,30)){if(Ie(g)!=="coast"||e()<.4||ei(g,Le*1.4))continue;let x=o(g),m=3+Math.floor(e()*5);for(let d=0;d<m;d++){let v=-(x+e.range(12,17)),T=g+e.range(-3,3);_d(t,r(T,v,Math.max(c(T,v),Ki-.4)+e.range(-.2,.4),e()*6),e,e.range(.9,1.2))}}for(let g=n+12;g<s;g+=48){if(Ie(g)!=="coast"||ei(g,Le+4))continue;let x=o(g);Lu(t,a(g,x+1),e)}if(Ie(n+30)==="coast"&&e()<.5){let g=n+e()*Oe,x=o(g);ei(g,Le+25)||is(t,a(g,x+e.range(9,16)),e,{type:"house",w:e.range(7,10),d:8,floors:e()<.5?2:1,tint:e.pick(ji),litP:.5,fence:0})}if(Ie(n+30)==="coast"&&e()<.55){let g=n+e()*Oe;Md(t,r(g,-(o(g)+e.range(45,220)),Ki-.25,e()*6,!1),e)}let p=Math.floor((n+Oe/2)/1500)*1500+700;p>=n&&p<s&&Ie(p)==="coast"&&!ei(p,Le*1.6)&&yd(t,r(p,-(o(p)+75),Ki-1,0,!1))}*placeCountry(t,e,n,s,r,a,l,o,c){for(let g of[-1,1]){yield;for(let x=n+e()*20;x<s;x+=e.range(20,40)){if(Ie(x)!=="country"||e()<.55||ss(x,16)||Nn(x,48))continue;let m=g*e.range(16,95),d=a(x,m);is(t,d,e,{type:"house",w:e.range(9,13),d:e.range(8,10),floors:e()<.45?2:1,tint:e.pick(ji),litP:.5,fence:0});for(let v=0;v<2+e()*3;v++){let T=m+g*e.range(6,14),M=x+e.range(-8,8);Dn(t,a(M,T,0,e()*6),"broad",e,e.range(.9,1.3))}}for(let x=n+e()*8;x<s;x+=e.range(5,9)){if(Ie(x)!=="country"||ss(x,7)||Nn(x,36))continue;let m=g*e.range(140,210);Dn(t,a(x,m,-.3,e()*6,!1),"cedar",e,e.range(.9,1.4)),e()<.12&&!ss(x+2,8)&&!Nn(x+2,34)&&Dn(t,a(x+2,g*e.range(10,130),0,e()*6),"broad",e,e.range(.8,1.2))}}let u=Math.floor((n+Oe/2)/600)*600+300;if(u>=n&&u<s&&Ie(u)==="country"&&!Nn(u,40)){let g=o(u);vd(t,r(u,-(g+1.6),l(u)-.08),e)}let h=Math.floor((n+Oe/2)/700)*700+120;if(h>=n&&h<s&&Ie(h)==="country"&&!Nn(h,40)){let g=o(h);Du(t,r(h,-(g+.95),l(h)-.08),e),Lu(t,r(h+2,-(g+.8),l(h)-.08),e)}let f=Math.floor((n+Oe/2)/900)*900+450;if(f>=n&&f<s&&Ie(f)==="country"&&!Nn(f,40)){let g=o(f);bd(t,a(f,g+5),e)}let p=Math.floor((n+Oe/2)/380)*380+190;if(p>=n&&p<s&&Ie(p)==="country"&&!Nn(p,40)&&!ss(p,30)){let g=o(p),x=(An(Math.round(p),5)<.5?-1:1)*(g+2.75);md(t,a(p,x,0))}for(let g=n;g<s;g+=30){if(Ie(g)!=="country")continue;let x=this.path.curv(g);if(Math.abs(x)>1/450&&e()<.5){let m=x>0?-1:1,d=o(g);Nu(t,a(g,m*(d+.75)),m>0?-1:1)}}}};var ic=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#5a4c84","#9fb0ff",.45,"#4a4a88","#2a2030",1,"#4a4478","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#2468d8","#c2e0ff","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#c6ddf2","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.8,"#1f2466","#9a6a9a","#c06a8a",.6,"#5a5a9a","#3a3048",1,"#5e4c84","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(t=>typeof t=="string"?new mt(t):t)),ht={zenith:new mt,horizon:new mt,sunCol:new mt,sunI:1,hemiSky:new mt,hemiGround:new mt,hemiI:1,fog:new mt,cLit:new mt,cShade:new mt,cRim:new mt,night:0,warm:0,overcast:0,rain:0,sunDir:new z,moonDir:new z,lightDir:new z,sunEl:0};function Ad(i){let t=0;for(;t<ic.length-2&&ic[t+1][0]<=i;)t++;let e=ic[t],n=ic[t+1],s=zl(Fe((i-e[0])/(n[0]-e[0]),0,1)),r=(o,c)=>c.copy(e[o]).lerp(n[o],s);r(1,ht.zenith),r(2,ht.horizon),r(3,ht.sunCol),ht.sunI=ve(e[4],n[4],s),r(5,ht.hemiSky),r(6,ht.hemiGround),ht.hemiI=ve(e[7],n[7],s),r(8,ht.fog),r(9,ht.cLit),r(10,ht.cShade),r(11,ht.cRim),ht.night=ve(e[12],n[12],s),ht.warm=ve(e[13],n[13],s);let a=Math.sin((i-.25)*Math.PI*2)*1.08,l=(i-.25)*Math.PI+.9;ht.sunEl=a,ht.sunDir.set(Math.cos(a)*Math.sin(l),Math.sin(a),Math.cos(a)*Math.cos(l)).normalize(),ht.moonDir.set(-ht.sunDir.x,Math.abs(Math.sin(a))*.8+.25,-ht.sunDir.z).normalize(),ht.lightDir.copy(ht.sunDir),a<.08&&ht.lightDir.lerpVectors(ht.moonDir,ht.sunDir,Fe((a+.12)/.2,0,1)).normalize(),ht.lightDir.y<.12&&(ht.lightDir.y=.12,ht.lightDir.normalize())}var wd={zenith:[new mt("#7b8594"),new mt("#141a28")],horizon:[new mt("#b5bcc6"),new mt("#283042")],fog:[new mt("#a8b0ba"),new mt("#232b3c")],hemiSky:[new mt("#aab3bf"),new mt("#3c4866")],hemiGround:[new mt("#8b8983"),new mt("#1e2030")],cLit:[new mt("#d0d5dc"),new mt("#2c3240")],cShade:[new mt("#7c8593"),new mt("#151922")]},Hu=new mt;function Rd(i,t){if(ht.overcast=i,ht.rain=t,i<=.001)return;let e=ht.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Hu.copy(wd[n][0]).lerp(wd[n][1],e),ht[n].lerp(Hu,i*(n==="cLit"||n==="cShade"?.75:.85));ht.sunI*=1-.82*i,ht.warm*=1-i,ht.cRim.multiplyScalar(1-i),ht.sunCol.lerp(Hu.setRGB(.85,.87,.9),i*.6)}function Cd(){let i=new ce({side:an,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ht.zenith},uHorizon:{value:ht.horizon},uSunDir:{value:ht.sunDir},uMoonDir:{value:ht.moonDir},uSunCol:{value:ht.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new mt},uOvercast:{value:0},uDeckLit:{value:new mt},uDeckDark:{value:new mt},uMilky:{value:0},uMetA:{value:new z(0,1,0)},uMetB:{value:new z(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP;
      varying vec3 vDir;
      ${Ai}
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
      }`}),t=new fe(new Jr(5e3,48,24),i);return t.renderOrder=-10,t.frustumCulled=!1,t}function h_(i,t){let e=[],s=t?.6:.88,r=(i()-.5)*.04,a=t?6:9;for(let d=0;d<a;d++){let v=.06+i()*.05;e.push([(d/(a-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let l=t?6:2,o=s*.82,c=.1+.09;for(let d=0;d<l;d++){let v=Math.max(1,Math.round(o/.11));for(let T=0;T<v;T++){let M=(v===1?0:T/(v-1)-.5)*o+(i()-.5)*.05+r*d;e.push([M,c+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(t?1.25:1)])}c+=t?.115:.075,o*=t?.8:.66}let u=e.slice();for(let d of u){if(e.length>92)break;let v=1+Math.floor(i()*2);for(let T=0;T<v;T++){let M=.35+i()*2.4,_=d[3]*(.35+i()*.2);e.push([d[0]+Math.cos(M)*d[3]*.82,d[1]+Math.sin(M)*d[3]*.82,d[2]+.04,_])}}let h=e.slice(0,96),f=1e9,p=-1e9,g=-1e9;for(let d of h)f=Math.min(f,d[0]-d[3]*1.12),p=Math.max(p,d[0]+d[3]*1.12),g=Math.max(g,d[1]+d[3]*1.12);let x=Math.min(1,.92/(p-f),(.95-.1)/(g-.1)),m=(f+p)/2;for(let d of h)d[0]=(d[0]-m)*x,d[1]=.1+(d[1]-.1)*x,d[3]*=x;return h}function Pd(i){let e={value:Array.from({length:96},()=>new Ee)},n=new ce({uniforms:{uP:e,uN:{value:0},uSeed:{value:0},uBase:{value:.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Ai}
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
      }`,depthTest:!1,depthWrite:!1,blending:En}),s=new fe(new Ye(1,1),n),r=new ds,a=new ms;r.add(s);let l=new Re(1024*2,1024*2,{generateMipmaps:!0,minFilter:zn,magFilter:Xe}),o=i.getRenderTarget(),c=i.autoClear,u=ln(99);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let p=f%2===0,g=h_(u,p);g.forEach((x,m)=>e.value[m].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=g.length,n.uniforms.uSeed.value=f*13.7,l.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(l),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:p})}return l.viewport.set(0,0,1024*2,1024*2),i.autoClear=c,i.setRenderTarget(o),n.dispose(),s.geometry.dispose(),{tex:l.texture,kinds:h,rt:l}}function Id(i){let t=ln(5),e=22,n=[],s=new Ye(1,1);s.translate(0,.5,0);let r=new Tn(new Float32Array(e*4),4),a=new Tn(new Float32Array(e),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let l=new ce({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:ht.cLit},uShade:{value:ht.cShade},uRim:{value:ht.cRim},uHaze:{value:ht.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),o=new bi(s,l,e);o.frustumCulled=!1,o.renderOrder=-5;for(let g=0;g<e;g++){let x=g<12,m=i.kinds[(g*3+(x?0:1))%i.kinds.length],d=x?m.tall?t.range(900,1500):t.range(1100,1700):t.range(380,700);n.push({phi:g/e*Math.PI*2+t.range(-.15,.15),d:x?t.range(2600,3400):t.range(1300,2200),base:x?t.range(-60,60):t.range(260,700),size:d,cell:m.cell,haze:x?.45:.18})}let c=new Zt,u=new tn,h=new z,f=new z,p=new z(0,1,0);return{group:o,update(g,x){let m=Math.atan2(ht.lightDir.x,ht.lightDir.z);for(let v of n)v.phi+=x*1.2/v.d;n.slice().sort((v,T)=>T.d-v.d).forEach((v,T)=>{h.set(g.x+Math.sin(v.phi)*v.d,g.y+v.base,g.z+Math.cos(v.phi)*v.d),u.setFromAxisAngle(p,v.phi+Math.PI),f.set(v.size,v.size,1),c.compose(h,u,f),o.setMatrixAt(T,c);let M=m-v.phi;M=Math.atan2(Math.sin(M),Math.cos(M));let _=Math.max(0,Math.min(1,(M+.35)/.7)),b=1-_*_*(3-2*_);r.setXYZW(T,v.cell[0],v.cell[1],b,v.haze),a.setX(T,.35+.9*Math.pow(Math.max(Math.cos(M),0),3)*(.4+ht.warm))}),o.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,l.uniforms.uOpacity.value=(1-ht.night*.35)*(1-ht.overcast*.55)}}}function Ld(){let i=new ke;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((e,n)=>{let r=[],a=[],l=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,p=Math.sin(f)*e.R,g=Math.cos(f)*e.R,x=kl(h/360*e.k*4,40+n*9),m=Math.pow(Math.max(0,x-.18)/.82,1.6),d=e.h*(.12+m);if(r.push(p,-60,g,p,-60+d,g),a.push(0,h/360,1,h/360),h<360){let v=h*2;l.push(v,v+1,v+2,v+1,v+3,v+2)}}let o=new me;o.setAttribute("position",new $t(r,3)),o.setAttribute("hf",new $t(a,2)),o.setIndex(l);let c=new ce({side:nn,fog:!1,uniforms:{uCol:{value:new mt(e.col)},uHaze:{value:ht.fog},uHazeK:{value:e.haze},uLight:{value:1},uSeed:{value:n*17}},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed; varying vec2 vH; varying float vY;
        ${Ai}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),u=new fe(o,c);u.frustumCulled=!1,u.renderOrder=-8,i.add(u)}),{group:i,update(e){i.position.set(e.x,0,e.z);let n=(.35+.65*(1-ht.night))*(1-.35*ht.overcast);for(let s of i.children)s.material.uniforms.uLight.value=n}}}var _r={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function Dd(i){let t=i.get("weather"),e={mode:_r[t]?t:"auto",kind:_r[t]?t:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return _r[t]&&(e.ov=_r[t][0],e.rain=_r[t][1]),{W:e,update(n){if(e.t+=n,e.mode==="auto"&&e.t>e.next){e.t=0,e.next=150+Math.random()*260;let l=Math.random();e.kind=e.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":e.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=_r[e.kind];e.ov+=Fe(s-e.ov,-n/28,n/28);let a=e.ov>.75?r:0;e.rain+=Fe(a-e.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return e.mode=n[(n.indexOf(e.mode)+1)%n.length],e.mode!=="auto"?e.kind=e.mode:e.t=0,e.mode}}}function Nd(){let t=new z(46,24,46),e=new Ye(1,1);e.translate(0,.5,0);let n=new eo;n.index=e.index,n.setAttribute("position",e.attributes.position),n.setAttribute("uv",e.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Tn(s,4)),n.instanceCount=2600;let r=new ce({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new z},uRain:{value:0},uBox:{value:t},uCol:{value:new mt(.8,.85,.95)}},vertexShader:`
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
      void main(){ gl_FragColor = vec4(uCol, vA * 0.32 * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new fe(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,c,u){a.visible=c>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=c,r.uniforms.uCol.value.setRGB(.55+.35*u,.6+.35*u,.7+.3*u)}}}var yr=72;function f_(){let i=[],t=[],e=(s,r,a,l,o,c)=>{i.push(...s,...r,...a),t.push(l,o,c)};e([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),e([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),e([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),e([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])e([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),e([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),e([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new me;return n.setAttribute("position",new $t(i,3)),n.setAttribute("aWing",new $t(t,1)),n}function Ud(){let i=f_(),t=new Tn(new Float32Array(yr*3),3),e=new Tn(new Float32Array(yr*2),2);i.setAttribute("aCol",t),i.setAttribute("aFlap",e);let n=new ce({side:nn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ht.fog},uFogD:{value:.002},uCam:{value:new z}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new bi(i,n,yr);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},l=new Zt,o=new tn,c=new Sn(0,0,0,"YXZ"),u=new z,h=new z,f=()=>r.reduce((x,m)=>x+m.birds.length,0);function p(x,m,d,v){let T=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(f()+T>yr)return;let M=45+Math.random()*85,_=(Math.random()-.5)*120,b=Math.random()<.5?1:-1,R=new z().copy(m).addScaledVector(d,M).addScaledVector(v,_-b*75);R.y=m.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let y=x==="small"?11+Math.random()*4:8+Math.random()*3,S=new z().copy(v).multiplyScalar(b*y).addScaledVector(d,(Math.random()-.3)*y*.6),C=x==="small"?.8:1.45,D=Array.from({length:T},(P,L)=>({off:new z((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:R,vel:S,birds:D,size:C,life:60})}function g(x,m,d,v){if(r.some(_=>_.kind==="gull")||f()+4>yr)return;let T=new z().copy(x).addScaledVector(m,70).addScaledVector(d,-v*45);T.y=x.y+18;let M=Array.from({length:4},(_,b)=>({off:new z,ph:Math.random()*6.28,fq:5.5,w:b/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:T,vel:new z,birds:M,size:1.25,life:1e9})}return{mesh:s,update(x,m,d,v,T,M,_,b,R){n.uniforms.uTime.value=m,n.uniforms.uCam.value.copy(d);let y=_>.35&&b<.3,S=ht.warm>.25&&ht.sunEl<.6&&_>.2;y&&(a.small-=x)<0&&(a.small=22+Math.random()*35,M.coast<.6&&p("small",d,v,T)),(S||y&&M.city+M.country>.6&&Math.random()<4e-4)&&(a.crow-=x)<0&&(a.crow=S?14+Math.random()*18:60,p("crow",d,v,T)),M.coast>.6&&y&&g(d,v,T,1);let C=[.1+.08*_,.11+.09*_,.15+.1*_],D=0;for(let P=r.length-1;P>=0;P--){let L=r[P];if(L.kind==="gull"?(L.c.lerp(u.copy(R).addScaledVector(v,60).addScaledVector(T,-42).setY(R.y+16),Math.min(1,x*.25)),(M.coast<.4||!y)&&(L.life=Math.min(L.life,8),L.c.y+=x*6)):L.c.addScaledVector(L.vel,x),L.life-=x,L.life<0||L.kind!=="gull"&&L.c.distanceTo(d)>300){r.splice(P,1);continue}for(let w of L.birds){if(D>=yr)break;let I,O,N,B;L.kind==="gull"?(w.w+=x*(14/w.r),I=L.c.x+Math.cos(w.w)*w.r,N=L.c.z+Math.sin(w.w)*w.r,O=L.c.y+w.h+Math.sin(m*.4+w.ph)*2,B=Math.atan2(-Math.sin(w.w),Math.cos(w.w))):(I=L.c.x+w.off.x+Math.sin(m*.7+w.ph)*1.2,O=L.c.y+w.off.y+Math.sin(m*1.1+w.ph)*.6,N=L.c.z+w.off.z,B=Math.atan2(L.vel.x,L.vel.z)),c.set(0,B,Math.sin(m+w.ph)*.15),o.setFromEuler(c),h.setScalar(L.size),l.compose(u.set(I,O,N),o,h),s.setMatrixAt(D,l);let U=L.kind==="gull"?[.92*(.5+.5*_),.93*(.5+.5*_),.95*(.5+.5*_)]:L.kind==="crow"?[.05,.05,.07]:C;t.setXYZ(D,U[0],U[1],U[2]),e.setXY(D,w.fq,w.ph),D++}}s.count=D,s.instanceMatrix.needsUpdate=!0,t.needsUpdate=!0,e.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,m){for(let d of r)d.c.x-=x,d.c.z-=m}}}function Fd(){let i=new ce({fog:!1,uniforms:{uTime:{value:0},uCam:{value:new z},uSunDir:{value:ht.lightDir},uSunCol:{value:ht.sunCol},uHorizon:{value:ht.horizon},uZenith:{value:ht.zenith},uFog:{value:ht.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${Ai}
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
      }`}),t=new fe(new Ye(14e3,14e3),i);return t.rotation.x=-Math.PI/2,t.position.y=Ki,t.renderOrder=-6,t.frustumCulled=!1,{mesh:t,update(e,n,s,r=1){t.position.x=e.x,t.position.z=e.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(e),i.uniforms.uNight.value=ht.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ht.overcast*.85}}}function Bd(){return new ce({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new mt(1,1,1)}},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${Ai}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function Od(){return new ce({fog:!1,uniforms:{uTime:{value:0},uSunDir:{value:ht.lightDir},uSunCol:{value:ht.sunCol},uHorizon:{value:ht.horizon},uZenith:{value:ht.zenith},uFog:{value:ht.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Ai}
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
      }`})}var Do=new z;function Gn(i,t,e,n,s,r){let a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;Do.copy(t),Do[n]=0,Do.normalize();let c=.5*a/(a+l),u=1-Do.angleTo(i)/o;return Math.sign(Do[e])===1?u*c:l/(a+l)+c+c*(1-u)}var di=class i extends $n{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let o=new z,c=new z,u=new z(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,x=new z,m=.5/a;for(let d=0,v=0;d<h.length;d+=3,v+=2)switch(o.fromArray(h,d),c.copy(o),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[d+0]=u.x*Math.sign(o.x)+c.x*r,h[d+1]=u.y*Math.sign(o.y)+c.y*r,h[d+2]=u.z*Math.sign(o.z)+c.z*r,f[d+0]=c.x,f[d+1]=c.y,f[d+2]=c.z,Math.floor(d/g)){case 0:x.set(1,0,0),p[v+0]=Gn(x,c,"z","y",r,n),p[v+1]=1-Gn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),p[v+0]=1-Gn(x,c,"z","y",r,n),p[v+1]=1-Gn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),p[v+0]=1-Gn(x,c,"x","z",r,t),p[v+1]=Gn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),p[v+0]=1-Gn(x,c,"x","z",r,t),p[v+1]=1-Gn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),p[v+0]=1-Gn(x,c,"x","y",r,t),p[v+1]=1-Gn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),p[v+0]=Gn(x,c,"x","y",r,t),p[v+1]=1-Gn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function kd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,o=new me,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(c,p,u),c+=p}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[f].attributes.position.count}o.setIndex(h)}for(let u in r){let h=zd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<a[u].length;++x)p.push(a[u][x][f]);let g=zd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(g)}}}return o}function zd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),l=new on(a,e,n),o=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=o/e;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<e;g++){let x=u.getComponent(f,g);l.setComponent(f+h,g,x)}}else a.set(u.array,o);o+=u.count*e}return s!==void 0&&(l.gpuType=s),l}function d_(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#f2cf3a",t.fillRect(0,0,256,128),t.strokeStyle="#2f5a2f",t.lineWidth=6,t.strokeRect(5,5,246,118);let e='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';t.fillStyle="#2f5a2f",t.textAlign="center",t.textBaseline="middle",t.font=`700 30px ${e}`,t.fillText("\u54C1\u5DDD 580",128,34),t.font=`800 58px ${e}`,t.fillText("\u3042 12-34",128,86);let n=new In(i);return n.colorSpace=Pe,n}function p_(){let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#9fbfe6"),e.addColorStop(.45,"#4a6690"),e.addColorStop(1,"#1d2638"),t.fillStyle=e,t.fillRect(0,0,64,128),t.fillStyle="rgba(255,255,255,0.35)",t.beginPath(),t.moveTo(20,0),t.lineTo(34,0),t.lineTo(10,128),t.lineTo(-4,128),t.fill();let n=new In(i);return n.colorSpace=Pe,n}function Hd(){let i=new ke,t=(b,R={})=>mr(new en({color:b,gradientMap:Vn,...R})),e=t("#9fd8c8"),n=t("#e9e7e0"),s=t("#2a2c33"),r=t("#1b1c20"),a=t("#c8ccd2"),l=mr(new en({color:"#ffffff",map:p_(),gradientMap:Vn})),o=new en({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:Vn}),c=new en({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:Vn}),u=new Ve({map:d_()}),h=new Map,f=new Zt,p=new Sn,g=new tn,x=new z(1,1,1),m=(b,R,y,S,C,D=0,P=0,L=0)=>{let w=b.index?b.toNonIndexed():b;p.set(D,P,L),g.setFromEuler(p),f.compose(new z(y,S,C),g,x),w.applyMatrix4(f),h.has(R)||h.set(R,[]),h.get(R).push(w)};m(new di(1.48,.86,3.38,4,.15),e,0,.77,0),m(new di(1.42,.66,2.6,4,.17),e,0,1.5,-.25),m(new di(1.38,.09,2.5,3,.04),n,0,1.84,-.25),m(new Ye(1.16,.5),l,0,1.53,-1.556,0,Math.PI,0);for(let b of[-1,1])m(new Ye(2.25,.46),l,b*.712,1.54,-.2,0,b*Math.PI/2,0),m(new di(.1,.12,.2,2,.04),e,b*.82,1.2,.95),m(new di(.14,.48,.08,2,.035),o,b*.64,1,-1.67),m(new di(.12,.08,.06,2,.02),c,b*.64,.7,-1.67);m(new Ye(1.2,.52),l,0,1.52,1.056,-.12,0,0),m(new di(1.52,.22,.22,2,.07),s,0,.42,-1.62),m(new $n(.24,.04,.05),s,0,.84,-1.69),m(new Ye(.34,.17),u,0,.72,-1.7,0,Math.PI,0);for(let[b,R]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])m(new js(.29,.29,.2,20),r,b,.29,R,0,0,Math.PI/2),m(new js(.16,.16,.205,12),a,b,.29,R,0,0,Math.PI/2);for(let[b,R]of h){let y=new fe(kd(R),b);y.castShadow=b!==l&&b!==u,y.receiveShadow=!0,i.add(y)}let d=new ke;d.position.set(.02,1.3,-1.57),i.add(d);let v=new $n(.52,.026,.02);v.translate(.27,0,0);let T=new fe(v,s);T.rotation.z=.18,d.add(T);let M=0,_=new jr(16773328,0,70,.55,.65,1.2);return _.position.set(0,.8,1.6),_.target.position.set(0,0,18),i.add(_,_.target),{group:i,mBody:e,update(b,R,y,S=0){if(o.emissiveIntensity=.35+y*3.2,S>.15||M%2.6>.01){M+=b;let C=M%2.6/2.6,D=L=>L*L*(3-2*L),P=C<.25?D(C/.25):C<.5?D(1-(C-.25)/.25):0;T.rotation.z=.18+P*2.5,S<=.15&&C>=.5&&(M=0)}_.intensity=y*60}}}var Mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},m_=new qi(-1,1,1,-1,0,1),Vu=class extends me{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},g_=new Vu,rs=class{constructor(t){this._mesh=new fe(g_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,m_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var br=class extends Un{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ei.clone(t.uniforms),this.material=new ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new rs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var No=class extends Un{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sc=class extends Un{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var rc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new qt);this._width=n.width,this._height=n.height,e=new Re(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ze}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new br(Mr),this.copyPass.material.blending=En,this.timer=new no}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}No!==void 0&&(a instanceof No?n=!0:a instanceof sc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oc=class extends Un{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new mt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Vd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Sr=class i extends Un{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new qt(t.x,t.y):new qt(256,256),this.clearColor=new mt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Re(r,a,{type:Ze,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Re(r,a,{type:Ze,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Re(r,a,{type:Ze,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let l=Vd;this.highPassUniforms=Ei.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ce({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new qt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ei.clone(Mr.uniforms),this.blendMaterial=new ce({uniforms:this.copyUniforms,vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader,premultipliedAlpha:!0,blending:Si,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new mt,this._oldClearAlpha=1,this._basic=new Ve,this._fsQuad=new rs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new qt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this._fsQuad.render(t),l=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let l=e[a],o=a+1<t?e[a+1]:0,c=l+o;s.push((a*l+(a+1)*o)/c),r.push(c)}return new ce({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new qt(.5,.5)},direction:{value:new qt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Sr.BlurDirectionX=new qt(1,0);Sr.BlurDirectionY=new qt(0,1);var Uo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ac=class extends Un{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ei.clone(Uo.uniforms),this.material=new tr({name:Uo.name,uniforms:this.uniforms,vertexShader:Uo.vertexShader,fragmentShader:Uo.fragmentShader}),this._fsQuad=new rs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===io?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===so?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ao&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var x_={uniforms:{tDiffuse:{value:null},uSun:{value:new qt(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uSunVis, uDay, uWarm, uTime, uAspect, uVig, uSat; varying vec2 vUv;
    float h11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
    float n1(float x){ float i = floor(x), f = fract(x); return mix(h11(i), h11(i + 1.0), f * f * (3.0 - 2.0 * f)); }
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, uSat);
      c += vec3(-0.014, 0.0, 0.03) * (1.0 - l) + vec3(0.03, 0.014, -0.018) * l * uDay;
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
      vec2 v = vUv - 0.5; c *= 1.0 - dot(v, v) * uVig;
      gl_FragColor = vec4(c, 1.0);
    }`};function Gd(i,t,e,{msaa:n=4,scale:s=1}={}){let r=i.getSize(new qt),a=new Re(r.x*i.getPixelRatio(),r.y*i.getPixelRatio(),{type:Ze,samples:n}),l=new rc(i,a);l.addPass(new oc(t,e));let o=new Sr(new qt(r.x*s*.5,r.y*s*.5),.42,.55,.86);l.addPass(o),l.addPass(new ac);let c=new br(x_);return l.addPass(c),{composer:l,bloom:o,grade:c}}function Wd(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let t=new i,e=t.createGain();e.gain.value=0,e.connect(t.destination),e.gain.linearRampToValueAtTime(.5,t.currentTime+4);let n=t.sampleRate*4,s=t.createBuffer(2,n,t.sampleRate);for(let tt=0;tt<2;tt++){let pt=s.getChannelData(tt);for(let ft=0;ft<n;ft++)pt[ft]=(Math.random()*2-1)*Math.pow(1-ft/n,3)}let r=t.createConvolver();r.buffer=s;let a=t.createGain();a.gain.value=.55,r.connect(a),a.connect(e);let l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let o=t.createGain();o.gain.value=.11,l.connect(o),o.connect(e),o.connect(r);let c=(tt,pt)=>{let ft=t.createBuffer(1,t.sampleRate*tt,t.sampleRate),dt=ft.getChannelData(0),st=0;for(let gt=0;gt<dt.length;gt++)pt?(st=(st+.02*(Math.random()*2-1))/1.02,dt[gt]=st*3.5):dt[gt]=Math.random()*2-1;return ft},u=(tt,pt,ft)=>{let dt=t.createBufferSource();dt.buffer=tt,dt.loop=!0;let st=t.createBiquadFilter();st.type=pt,st.frequency.value=ft;let gt=t.createGain();return gt.gain.value=0,dt.connect(st),st.connect(gt),gt.connect(e),dt.start(),{f:st,g:gt}},h=u(c(2,!0),"lowpass",400),f=u(c(3,!1),"lowpass",700);f.g.connect(r);let p=u(c(2,!1),"bandpass",5200);p.f.Q.value=6;let g=u(c(2,!0),"lowpass",240),x=u(c(3,!1),"bandpass",2600);x.f.Q.value=.35;let m=u(c(2,!0),"lowpass",520),d=u(c(3,!1),"bandpass",750);d.f.Q.value=.6;let v=u(c(3,!0),"lowpass",420),T=u(c(2,!0),"lowpass",140),M=c(.03,!1),_=0;function b(tt,pt){let ft=t.createBufferSource(),dt=t.createBiquadFilter(),st=t.createGain();ft.buffer=M,dt.type="bandpass",dt.frequency.value=1800+Math.random()*2600,dt.Q.value=1.2,st.gain.setValueAtTime(pt*(.02+Math.random()*.03),tt),st.gain.exponentialRampToValueAtTime(1e-4,tt+.03),ft.connect(dt),dt.connect(st),st.connect(e),ft.start(tt),ft.stop(tt+.04)}let R=0,y=0;function S(tt,pt){let ft=t.createOscillator(),dt=t.createOscillator(),st=t.createGain(),gt=t.createBiquadFilter();gt.type="bandpass",gt.frequency.value=1150,gt.Q.value=2.2,ft.type="square",ft.frequency.value=745,dt.type="triangle",dt.frequency.value=1490,st.gain.setValueAtTime(0,tt),st.gain.linearRampToValueAtTime(.085*pt,tt+.004),st.gain.exponentialRampToValueAtTime(1e-4,tt+.3),ft.connect(gt),dt.connect(gt),gt.connect(st),st.connect(e),st.connect(r),ft.start(tt),dt.start(tt),ft.stop(tt+.33),dt.stop(tt+.33)}function C(tt,pt){let ft=t.createOscillator(),dt=t.createGain();ft.type="sine",ft.frequency.setValueAtTime(110,tt),ft.frequency.exponentialRampToValueAtTime(48,tt+.12),dt.gain.setValueAtTime(1e-4,tt),dt.gain.linearRampToValueAtTime(.22*pt,tt+.006),dt.gain.exponentialRampToValueAtTime(1e-4,tt+.17),ft.connect(dt),dt.connect(e),ft.start(tt),ft.stop(tt+.2)}let D=t.createGain();D.gain.value=1,D.connect(e);let P=t.createGain();P.gain.value=.35,D.connect(P),P.connect(r);let L=(tt=(Math.random()-.5)*1.4)=>{if(!t.createStereoPanner)return D;let pt=t.createStereoPanner();return pt.pan.value=tt,pt.connect(D),pt};function w(tt,pt,ft,dt,st,gt,Jt="sine",Qt=0){let Xt=t.createOscillator(),se=t.createGain();if(Xt.type=Jt,Xt.frequency.setValueAtTime(pt,tt),Xt.frequency.exponentialRampToValueAtTime(ft,tt+dt),Qt){let ue=t.createOscillator(),V=t.createGain();ue.frequency.value=Qt,V.gain.value=pt*.012,ue.connect(V),V.connect(Xt.frequency),ue.start(tt),ue.stop(tt+dt+.05)}return se.gain.setValueAtTime(1e-4,tt),se.gain.linearRampToValueAtTime(st,tt+Math.min(.04,dt*.25)),se.gain.setValueAtTime(st,tt+dt*.7),se.gain.exponentialRampToValueAtTime(1e-4,tt+dt),Xt.connect(se),se.connect(gt),Xt.start(tt),Xt.stop(tt+dt+.02),se}function I(tt,pt){let ft=L(),dt=2+Math.floor(Math.random()*4),st=3200+Math.random()*1500;for(let gt=0;gt<dt;gt++){let Jt=tt+gt*(.09+Math.random()*.07);w(Jt,st,st*(1.2+Math.random()*.3),.06,pt*.022,ft)}}function O(tt,pt){let ft=L();w(tt,1120,1390,1,pt*.03,ft,"sine",5.5),w(tt+1.15,2350,2150,.14,pt*.03,ft),w(tt+1.32,1700,1520,.13,pt*.028,ft),w(tt+1.5,2750,2480,.36,pt*.032,ft)}function N(tt,pt){let ft=L(),dt=1+Math.floor(Math.random()*3);for(let st=0;st<dt;st++){let gt=tt+st*.48,Jt=t.createOscillator(),Qt=t.createBiquadFilter(),Xt=t.createGain();Jt.type="sawtooth",Jt.frequency.setValueAtTime(560,gt),Jt.frequency.exponentialRampToValueAtTime(420,gt+.32),Qt.type="bandpass",Qt.frequency.value=1150,Qt.Q.value=1.6,Xt.gain.setValueAtTime(1e-4,gt),Xt.gain.linearRampToValueAtTime(pt*.03,gt+.03),Xt.gain.exponentialRampToValueAtTime(1e-4,gt+.36),Jt.connect(Qt),Qt.connect(Xt),Xt.connect(ft),Jt.start(gt),Jt.stop(gt+.4)}}function B(tt,pt){let ft=L(),dt=2+Math.floor(Math.random()*2);for(let st=0;st<dt;st++)w(tt+st*.42,1750,1150,.36,pt*.022,ft,"triangle",11)}function U(tt,pt){let ft=L(),dt=t.createOscillator(),st=t.createBiquadFilter(),gt=t.createGain(),Jt=240+Math.random()*220,Qt=5+Math.floor(Math.random()*4);dt.type="square",dt.frequency.value=Jt,st.type="bandpass",st.frequency.value=Jt*2.4,st.Q.value=3,gt.gain.setValueAtTime(1e-4,tt);for(let Xt=0;Xt<Qt;Xt++){let se=tt+Xt*.038;gt.gain.linearRampToValueAtTime(pt*.014,se+.008),gt.gain.linearRampToValueAtTime(1e-4,se+.028)}dt.connect(st),st.connect(gt),gt.connect(ft),dt.start(tt),dt.stop(tt+Qt*.038+.05)}function k(tt,pt){let ft=L(),dt=4300+Math.random()*700;for(let st=0;st<3;st++)w(tt+st*.055,dt,dt*1.01,.035,pt*.009,ft)}function W(tt,pt){let ft=L();for(let dt of[tt,tt+.22])w(dt,2650,2600,.5,pt*.018,ft),w(dt,3950,3900,.35,pt*.008,ft)}let j={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30},ot=tt=>tt>1e-4?-Math.log(1-Math.random()*.98)/tt:1e9,zt=tt=>440*Math.pow(2,(tt-69)/12),Ft=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Vt=[72,74,76,79,81,84,86,88],J=0,nt=t.currentTime+.2,St=t.currentTime+3;function Yt(tt){let pt=Ft[J++%Ft.length],ft=11;for(let dt of pt)for(let st of[-5,5]){let gt=t.createOscillator(),Jt=t.createGain();gt.type=st<0?"sine":"triangle",gt.frequency.value=zt(dt),gt.detune.value=st,Jt.gain.setValueAtTime(0,tt),Jt.gain.linearRampToValueAtTime(.18,tt+3.5),Jt.gain.setValueAtTime(.18,tt+ft-4),Jt.gain.linearRampToValueAtTime(0,tt+ft+1),gt.connect(Jt),Jt.connect(l),gt.start(tt),gt.stop(tt+ft+1.2)}}function Rt(tt){let pt=Vt[Math.floor(Math.random()*Vt.length)],ft=t.createOscillator(),dt=t.createOscillator(),st=t.createGain(),gt=t.createGain();ft.type=dt.type="sine",ft.frequency.value=zt(pt),dt.frequency.value=zt(pt)*2.01,gt.gain.value=.25,dt.connect(gt),gt.connect(st),st.gain.setValueAtTime(0,tt),st.gain.linearRampToValueAtTime(.05,tt+.02),st.gain.exponentialRampToValueAtTime(1e-4,tt+4),ft.connect(st),st.connect(r),st.connect(e),ft.start(tt),dt.start(tt),ft.stop(tt+4.2),dt.stop(tt+4.2)}return{ac:t,muted:!1,update(tt,pt,ft,dt={}){let st=t.currentTime;if((dt.bell||0)>.01)for(R<st&&(R=st+.02);R<st+.12;)S(R,dt.bell),R+=.41;let gt=dt.rain||0;if(x.g.gain.setTargetAtTime(gt*.05,st,.6),m.g.gain.setTargetAtTime(gt*.05,st,.6),gt>.05&&dt.roof)for(_<st&&(_=st+.02);_<st+.12;)b(_,gt),_+=.04+Math.random()*.12/gt;let Jt=dt.water||0,Qt=.6+.4*Math.sin(st*1.3)*Math.sin(st*.37);d.g.gain.setTargetAtTime(Jt*.035*Qt,st,.25),d.f.frequency.setTargetAtTime(600+400*Qt,st,.25);let Xt=.35+.65*Math.pow(.5+.5*Math.sin(st*.23)*Math.sin(st*.071+2),2);v.g.gain.setTargetAtTime((pt.mountain||0)*.06*Xt,st,.8),v.f.frequency.setTargetAtTime(260+420*Xt,st,.8);let se=dt.train||0;if(g.g.gain.setTargetAtTime(se*.16,st,.2),se>.04)for(y<st&&(y=st+.02);y<st+.12;)C(y,se),C(y+.15,se*.8),y+=1.2;for(;nt<st+1;)Yt(nt),nt+=8;St<st+.5&&(Rt(St),St+=1.5+Math.random()*4.5);let ue=dt.tunnel||0;h.g.gain.setTargetAtTime((.03+tt*.06)*(1+1.6*ue),st,.35),h.f.frequency.setTargetAtTime((250+tt*500)*(1+.5*ue),st,.35),T.g.gain.setTargetAtTime(ue*.07,st,.4),a.gain.setTargetAtTime(.55+.6*ue,st,.4);let V=.5+.5*Math.sin(st*.55)*Math.sin(st*.21+1);f.g.gain.setTargetAtTime(pt.coast*(.012+V*.05),st,.3),f.f.frequency.setTargetAtTime(400+V*900,st,.3);let Se=1-Math.min(1,gt*1.4),ae=1-ft,F=dt.dusk||0,E={sparrow:ft*Se*.22*(.3+pt.city*.5+pt.sakura+pt.country*.8+pt.coast*.2+(pt.mountain||0)*.5),uguisu:ft*Se*pt.sakura*.06,crow:Se*(F*.14+ft*(pt.city+pt.country+(pt.mountain||0)*1.5)*.012),gull:ft*pt.coast*Se*.16,frog:ae*(pt.country*5+pt.sakura*.6+pt.coast*.3)*(1+gt*.6),cricket:ae*Se*(1.6-pt.city*1.1+(pt.mountain||0)*.8),bike:ft*Se*pt.city*.014},X={sparrow:I,uguisu:O,crow:N,gull:B,frog:U,cricket:k,bike:W};for(let Q in E)st<j[Q]||(E[Q]>1e-4&&X[Q](st+.05,.6+Math.random()*.4),j[Q]=st+Math.max(.12,ot(E[Q]||1e-6)));let Z=.5+.5*Math.sin(st*7)*Math.sin(st*.4);p.g.gain.setTargetAtTime((pt.country+pt.sakura*.3)*ft*.006*Z,st,.08)},toggle(){this.muted=!this.muted,e.gain.setTargetAtTime(this.muted?0:.5,t.currentTime,.3)}}}function Xd(i){let e=new Ye(.075,.05),n=new Ve({color:16777215,side:nn}),s=new bi(e,n,420);s.frustumCulled=!1,s.count=0;let r=new mt("#ffd0de"),a=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(M=>new mt(M));for(let M=0;M<420;M++)s.setColorAt(M,r);let l=Array.from({length:420},()=>({p:new z(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),o=new Zt,c=new tn,u=new Sn,h=new z(1,1,1),f=new z,p=90,g=new Float32Array(p*3),x=Array.from({length:p},()=>({p:new z(1e9,0,0),ph:Math.random()*6.28})),m=new me;m.setAttribute("position",new on(g,3));let d=new Qs({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Si,opacity:0}),v=new Wr(m,d);v.frustumCulled=!1;let T=(M,_,b,R,y)=>{let S=y?8+Math.random()*42:-4+Math.random()*50,C=(Math.random()-.5)*40;M.p.set(_.x+b.x*S+R.x*C,_.y-1+Math.random()*9,_.z+b.z*S+R.z*C)};return{group:[s,v],shift(M,_){for(let b of l)b.p.x-=M,b.p.z-=_;for(let b of x)b.p.x-=M,b.p.z-=_},update(M,_,b,R,y,S,C,D,P,L=0){let w=Math.floor(420*Math.min(1,S*1.1+L*.55)),I=!1;s.count=w;for(let N=0;N<w;N++){let B=l[N];f.subVectors(B.p,b);let U=f.x*R.x+f.z*R.z,k=f.x*y.x+f.z*y.z;if(B.p.x>1e8||U<-6||U>55||Math.abs(k)>24||B.p.y<C-.5){T(B,b,R,y,B.p.x<1e8);let W=Math.random()*(S+L)<L;(W!==B.leaf||W)&&(B.leaf=W,s.setColorAt(N,W?a[Math.floor(Math.random()*a.length)]:r),I=!0)}B.p.y-=B.v*M,B.p.x+=Math.sin(_*.7+B.ph)*.4*M+.25*M,B.p.z+=Math.cos(_*.5+B.ph)*.3*M,u.set(_*B.sp+B.ph,_*B.sp*.7,B.ph),c.setFromEuler(u),h.setScalar(B.leaf?1.9:1),o.compose(B.p,c,h),s.setMatrixAt(N,o)}s.instanceMatrix.needsUpdate=!0,I&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let O=D*P;if(d.opacity=O,v.visible=O>.01,v.visible){for(let N=0;N<p;N++){let B=x[N];f.subVectors(B.p,b);let U=f.x*R.x+f.z*R.z,k=f.x*y.x+f.z*y.z;if(B.p.x>1e8||U<-4||U>60||Math.abs(k)>30){let W=2+Math.random()*55,j=(Math.random()-.5)*55;B.p.set(b.x+R.x*W+y.x*j,C+.3+Math.random()*2.2,b.z+R.z*W+y.z*j)}B.p.x+=Math.sin(_*.6+B.ph*3)*.3*M,B.p.y+=Math.sin(_*.9+B.ph)*.2*M,B.p.z+=Math.cos(_*.5+B.ph*2)*.3*M,g[N*3]=B.p.x,g[N*3+1]=B.p.y,g[N*3+2]=B.p.z}m.attributes.position.needsUpdate=!0}}}}var De=new URLSearchParams(location.search),Tr=De.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();Tr&&document.body.classList.add("embed");De.has("shot")&&document.body.classList.add("shot");Lf(De.has("seed")?parseInt(De.get("seed")):Math.random()*1e9|0);Ff(De.get("env")||"city");var sn=i=>document.getElementById(i),Fo=i=>{let t=sn("loading");t&&(t.textContent=i)};async function v_(){await new Promise(K=>setTimeout(K,30));let i=sn("c"),t=new Ul({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=De.get("q")||(Tr||e?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?Tr?1.25:1.4:1);t.setPixelRatio(s),t.setSize(innerWidth,innerHeight,!1),t.outputColorSpace=Pe,t.toneMapping=vs,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=gs;let r=new ds;r.fog=new kr(13032946,.0019,700);let a=new rn(52,innerWidth/innerHeight,.5,7e3),l=new to(16777215,3);l.castShadow=!0;let o=n==="low"?1024:2048;l.shadow.mapSize.set(o,o),Object.assign(l.shadow.camera,{left:-75,right:75,top:75,bottom:-75,near:1,far:420}),l.shadow.bias=-4e-4,l.shadow.normalBias=.05,r.add(l,l.target);let c=new Kr(10799359,13154464,1.6);r.add(c),Fo("painting the town\u2026"),await new Promise(K=>setTimeout(K,10));let u=Qf();ed(u);let h=jf(t);ad(h.cells),de.uTuftV.value.set(h.tuftV[0],h.tuftV[1]);let f=Wf(u.textures(t),h.tex);Fo("painting the clouds\u2026"),await new Promise(K=>setTimeout(K,10));let p=new Gl,g=Bd(),x=Od(),m=new nc(r,p,f,g,x),d=Cd();r.add(d);let v=Id(Pd(t));r.add(v.group);let T=Ld();r.add(T.group);let M=Fd();r.add(M.mesh);let _=Hd();_.group.rotation.order="YXZ",r.add(_.group);let b=Xd(f.glowTex);b.group.forEach(K=>r.add(K));let R=Gd(t,r,a,{msaa:n==="high"?4:n==="mid"?2:0}),y=qf();r.add(y.group);let S=Yf();r.add(S.group);let C=Dd(De),D=Nd();r.add(D.mesh);let P=Ud();r.add(P.mesh);let L=C.W.rain,w={s:Math.max(100,parseFloat(De.get("s"))||140),u:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Fe(parseFloat(De.get("t"))||.4,0,.999),todPaused:De.has("freeze"),dist:0,cam:{low:1,eye:2,top:3,film:4}[De.get("cam")]??(Tr?4:0)},I=!1;Fo("building the road\u2026"),await new Promise(K=>setTimeout(K,10));let O=Tr?620:m.ahead;for(m.ahead=260;m.update(w.s,1e9););m.ahead=O;let N={k:Math.ceil((w.s-Ss)/bs),phase:"idle",raise:1,decided:!1,t2:0},B={},U={},k={},W=new z,j=new z,ot=new z,zt=!1,Ft=new z,Vt=new z,J=sn("spd"),nt=sn("dist"),St=sn("clock"),Yt=sn("zone"),Rt=sn("start"),tt=sn("hint"),pt=null,ft=null,dt=0,st=0;function gt(K){!I||K===ft||(ft=K,Yt.querySelector(".jp").textContent=bo[K].jp,Yt.querySelector(".en").textContent=bo[K].en,Yt.classList.add("on"),clearTimeout(dt),dt=setTimeout(()=>Yt.classList.remove("on"),5200))}function Jt(){if(!I){if(I=!0,document.body.classList.remove("pre"),!De.has("auto"))try{pt=Wd(),pt&&pt.ac.resume()}catch{pt=null}Rt.style.opacity=0,setTimeout(()=>Rt.remove(),1500),Tr||(tt.style.opacity=.75,setTimeout(()=>tt.style.opacity=0,9e3))}}let Qt={};addEventListener("keydown",K=>{Qt[K.key]=!0,(K.key==="m"||K.key==="M")&&se(),(K.key==="t"||K.key==="T")&&ue(),(K.key==="c"||K.key==="C")&&ae(),(K.key==="r"||K.key==="R")&&Q(),!I&&(K.key===" "||K.key==="Enter")&&Jt()}),addEventListener("keyup",K=>{Qt[K.key]=!1});let Xt=null;i.addEventListener("pointerdown",K=>{Xt={id:K.pointerId,x:K.clientX,y:K.clientY,sy:K.clientY,sc:w.mult}}),addEventListener("pointermove",K=>{Xt&&K.pointerId===Xt.id&&(Xt.x=K.clientX,Xt.y=K.clientY,w.mult=Fe(Xt.sc-(Xt.y-Xt.sy)/innerHeight*1.6,.4,1.8))}),addEventListener("pointerup",()=>{Xt=null}),addEventListener("pointercancel",()=>{Xt=null}),i.addEventListener("touchstart",K=>{let _t=K.changedTouches[0];Xt={id:"touch",x:_t.clientX,y:_t.clientY,sy:_t.clientY,sc:w.mult},K.preventDefault()},{passive:!1}),i.addEventListener("touchmove",K=>{if(!Xt)return;let _t=K.changedTouches[0];Xt.x=_t.clientX,Xt.y=_t.clientY,w.mult=Fe(Xt.sc-(Xt.y-Xt.sy)/innerHeight*1.6,.4,1.8),K.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{Xt=null}),i.addEventListener("touchcancel",()=>{Xt=null});function se(){pt&&(pt.toggle(),sn("snd").style.opacity=pt.muted?.4:1)}function ue(){w.todPaused=!w.todPaused,sn("tim").style.opacity=w.todPaused?.4:1}let V=[0,1,2,4],Se={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function ae(){w.cam=V[(V.indexOf(w.cam)+1)%V.length],sn("cam").textContent=Se[w.cam]||"\u25D0",w.cam===4&&X()}let F=["chase","side","road","crane","eye","side","road"],E={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function X(){let K;do K=F[Math.floor(Math.random()*F.length)];while(K===E.last);{let _t=ti(w.s+60);_t&&Math.abs(w.s+60-_t.s)<Le+120&&(K=Math.random()<.6?"chase":"eye")}if(Object.assign(E,{type:K,last:K,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),K==="road"){let _t=w.s+40+Math.random()*18,Nt=mn(_t,"rw"),ne=Math.random()<.6?-1:1,Qe=ne*(Nt+(ne<0?.9:1.3)),we=p.at(_t,{}),ws=we.y+dr(_t,Qe,we.y,Nt);E.anchor={x:we.x+we.rx*Qe,y:Math.max(ws,we.y)+1.05,z:we.z+we.rz*Qe,s:_t}}zt=!1}let Z={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Q(){sn("wx").textContent=Z[C.cycle()]}sn("wx").textContent=Z[C.W.mode],sn("cam").textContent=Se[w.cam]||"\u25D0",w.cam===4&&X(),sn("wx").onclick=K=>{K.stopPropagation(),Q()},sn("snd").onclick=K=>{K.stopPropagation(),se()},sn("tim").onclick=K=>{K.stopPropagation(),ue()},sn("cam").onclick=K=>{K.stopPropagation(),ae()};let yt=0,Tt=K=>{let _t=performance.now();_t-yt<120||(yt=_t,K.cancelable&&K.type!=="click"&&K.preventDefault(),Jt())};for(let K of["touchstart","pointerdown","mousedown","click"])Rt.addEventListener(K,Tt,{passive:!1});let et=()=>{pt&&pt.ac.state!=="running"&&pt.ac.resume()};for(let K of["touchend","click","keydown"])addEventListener(K,et,{passive:!0});document.addEventListener("visibilitychange",()=>{pt&&(document.hidden?pt.ac.suspend():pt.ac.resume())});let rt=!1,Et="";function Gt(){let K=innerWidth,_t=innerHeight,Nt=K/_t,ne=K+"x"+_t+"@"+s;ne!==Et&&(Et=ne,t.setPixelRatio(s),t.setSize(K,_t,!1),R.composer.setPixelRatio(s),R.composer.setSize(K,_t),a.aspect=Nt,a.fov=Nt>=1?52:Fe(2*Math.atan(Math.tan(34*Math.PI/180)/Nt)*180/Math.PI,52,80),a.updateProjectionMatrix(),R.grade.uniforms.uAspect.value=Nt)}addEventListener("resize",()=>{rt=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{rt=!0}),Gt();let wt=0;function At(K=!0){if(s>1.05)s=Math.max(1,s-.25),rt=!0;else if(R.bloom.enabled)R.bloom.enabled=!1;else if(l.shadow.mapSize.x>1024)l.shadow.mapSize.set(1024,1024),l.shadow.map&&(l.shadow.map.dispose(),l.shadow.map=null);else if(m.ahead>430)m.ahead=430;else return;if(wt++,K)try{localStorage.setItem("icd-q",String(wt))}catch{}}try{let K=parseInt(localStorage.getItem("icd-q")||"0");if(!De.has("q"))for(let _t=0;_t<Math.min(K,6);_t++)At(!1);wt=Math.max(wt,K||0)}catch{}let Wt=performance.now(),Ot=0,ee=0,G=0,bt=()=>1-ht.night,it=0,vt=0,Mt={p:-1,a:new z,b:new z,next:5};function lt(K){requestAnimationFrame(lt);let _t=performance.now();rt&&(rt=!1,Gt());let Nt=Math.min(.05,(K-Wt)/1e3);Wt=K,Ot+=Nt,w.steer=0,(Qt.ArrowLeft||Qt.a||Qt.A)&&(w.steer=-1),(Qt.ArrowRight||Qt.d||Qt.D)&&(w.steer=1),(Qt.ArrowUp||Qt.w||Qt.W)&&(w.mult=Fe(w.mult+Nt*.4,.4,1.8)),(Qt.ArrowDown||Qt.s||Qt.S)&&(w.mult=Fe(w.mult-Nt*.4,.4,1.8)),Xt&&Math.abs(Xt.y-Xt.sy)<30&&(w.steer=Xt.x<innerWidth/2?-1:1),w.steer&&(w.lastInput=K);let ne=hr(N.k);w.s-ne>24&&(N.k++,ne=hr(N.k),Object.assign(N,{phase:"idle",raise:1,decided:!1}));let Qe=So(ne),we=ne-w.s;Qe&&!N.decided&&we<150&&(N.decided=!0,we>75&&I&&(De.has("xing")||An(N.k,99)<.8)&&(N.phase="warn",S.start(ne,An(N.k,7)<.5?1:-1,16))),N.phase==="warn"?(N.raise=Math.max(0,N.raise-Nt/6),S.st.cleared&&(N.phase="clear",N.t2=0)):N.phase==="clear"?(N.raise=Math.max(0,N.raise-Nt/6),(N.t2+=Nt)>2.2&&(N.phase="raise")):N.phase==="raise"&&(N.raise=Math.min(1,N.raise+Nt/5),N.raise>=1&&(N.phase="idle"));let ws=N.phase==="warn"||N.phase==="clear"||N.phase==="raise"&&N.raise<.25,As=mn(w.s,"speed")*w.mult*(I?1:.55);if(N.phase!=="idle"&&N.raise<.8&&we>0){let xt=we-11.2,kt=xt>0?Math.sqrt(2*1.25*xt):0;As=Math.min(As,kt),w.speed=Math.min(w.speed,kt)}De.has("park")&&(As=0,w.speed=0),w.speed+=(As-w.speed)*Math.min(1,Nt*.5),w.s+=w.speed*Nt,w.dist+=w.speed*Nt;let Er=mn(w.s,"rw");w.steer?w.u=Fe(w.u+w.steer*Nt*2.4,-Er+.85,Er-.85):K-w.lastInput>3e3&&(w.u+=(-1.65+Math.sin(Ot/11)*.1-w.u)*Math.min(1,Nt*.9)),!w.todPaused&&I&&(w.tod=(w.tod+Nt/480*(ht.night>.5?1.7:1))%1),Ad(w.tod),C.update(Nt);let Rn=C.W.ov,Wn=C.W.rain;Rd(Rn,Wn),L=Fe(L+(Wn>.25?Nt/18:-Nt/120),0,1);let Bo=performance.now();m.update(w.s,I?6:14);let Oo=performance.now();if(p.at(w.s,B),Math.abs(B.x-m.origin.x)>900||Math.abs(B.z-m.origin.z)>900){let xt=Math.round(B.x)-m.origin.x,kt=Math.round(B.z)-m.origin.z;m.setOrigin(Math.round(B.x),Math.round(B.z)),W.x-=xt,W.z-=kt,j.x-=xt,j.z-=kt,b.shift&&b.shift(xt,kt),P.shift(xt,kt)}let We=m.origin.x,gn=m.origin.z,zo=(p.at(w.s+1.5,k).y-p.at(w.s-1.5,U).y)/3;_.group.position.set(B.x+B.rx*w.u-We,B.y+.01,B.z+B.rz*w.u-gn);let ko=w.steer?-w.steer*.05:0;_.group.rotation.set(-Math.atan(zo),B.h+ko,0);let Fn=ti(w.s);Fn&&Math.abs(w.s-Fn.s)<700?(p.at(Fn.s-Ne,k),de.uTunA.value.set(k.x-We,k.y,k.z-gn),p.at(Fn.s+Ne,k),de.uTunB.value.set(k.x-We,k.y,k.z-gn),de.uTunR.value=mn(Fn.s,"rw")+1.7):(de.uTunA.value.set(0,-1e4,0),de.uTunB.value.set(0,-1e4,0));let Rs=Fn&&Math.abs(w.s+1-Fn.s)<Ne-1.5?1:0;vt+=(Rs-vt)*Math.min(1,Nt*(Rs?1.6:.7)),de.uCarPos.value.set(_.group.position.x+B.fx*1.7,_.group.position.y+.8,_.group.position.z+B.fz*1.7),de.uCarFwd.value.set(B.fx,-.05,B.fz).normalize(),de.uHead.value=Rs,_.update(Nt,w.speed,Math.max(ht.night,vt),Wn),y.update(Qe&&we>-24&&we<700?Zl(p,ne):null,m.origin,N.raise,ws,Ot),S.update(Nt,p,m.origin,Ce(.15,.8,ht.night),mn(ne,"rw")+3.2);let os=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(De.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}],ni=new z,Li=6,Ho=w.cam===2;if(w.cam===4){E.t+=Nt;{let Ht=ti(w.s+30);Ht&&Math.abs(w.s+30-Ht.s)<Le+70&&E.type!=="chase"&&E.type!=="eye"&&(E.type="chase",E.t=0,E.dur=20,zt=!1)}(E.t>E.dur+(E.type==="road"?8:0)||E.type==="road"&&E.anchor&&w.s>E.anchor.s+24)&&X();let xt=_.group.position,kt=E.type;if(kt==="chase"||kt==="eye"){let Ht=os[kt==="eye"?2:0];Ho=kt==="eye",p.at(w.s-Ht.back,U),p.at(w.s+Ht.ahead,k),ot.set(U.x+U.rx*w.u*Ht.cu-We,U.y+Ht.up,U.z+U.rz*w.u*Ht.cu-gn),ni.set(k.x+k.rx*w.u*Ht.lu-We,k.y+Ht.lookY,k.z+k.rz*w.u*Ht.lu-gn)}else if(kt==="side"){p.at(w.s+1.5,U);let Ht=be(w.s),Bt=Ht.city+Ht.sakura>.5,oe=mn(w.s,"rw"),_e=E.sideSign>0?oe+(Bt?1.45:3.4):-(oe+1.5),xe=U.y+dr(w.s+1.5,_e,U.y,oe);ot.set(U.x+U.rx*_e-We,Math.max(xe+1.55,U.y+1.25),U.z+U.rz*_e-gn),ni.set(xt.x+B.fx*2.5,xt.y+.9,xt.z+B.fz*2.5),Li=4}else if(kt==="road"&&E.anchor)ot.set(E.anchor.x-We,E.anchor.y,E.anchor.z-gn),ni.set(xt.x,xt.y+.85,xt.z),Li=30;else{p.at(w.s-20,U),p.at(w.s+34,k);let Ht=14+Math.min(E.t,20)*.35;ot.set(U.x+U.rx*w.u*.4-We,U.y+Ht,U.z+U.rz*w.u*.4-gn),ni.set(k.x-We,k.y+1,k.z-gn),Li=3}}else{let xt=os[w.cam];p.at(w.s-xt.back,U),p.at(w.s+xt.ahead,k);let kt=w.u*xt.cu,Ht=kt+(xt.side||0);ot.set(U.x+U.rx*Ht-We,U.y+xt.up,U.z+U.rz*Ht-gn),ni.set(k.x+k.rx*w.u*xt.lu-We,k.y+xt.lookY,k.z+k.rz*w.u*xt.lu-gn)}_.group.visible=!Ho,w.cam===3?a.up.set(B.fx,0,B.fz):a.up.set(0,1,0),zt||(W.copy(ot),j.copy(ni),zt=!0),W.lerp(ot,1-Math.exp(-Nt*Li)),j.lerp(ni,1-Math.exp(-Nt*Math.min(Li,8))),a.position.copy(W),a.lookAt(j),De.has("yaw")&&a.rotateY(parseFloat(De.get("yaw"))*Math.PI/180),De.has("pitch")&&a.rotateX(parseFloat(De.get("pitch"))*Math.PI/180),Ft.set(B.fx,0,B.fz),Vt.set(B.rx,0,B.rz);let yn=be(w.s);l.color.copy(ht.sunCol),l.intensity=ht.sunI,l.target.position.set(_.group.position.x+B.fx*30,_.group.position.y,_.group.position.z+B.fz*30),l.position.copy(l.target.position).addScaledVector(ht.lightDir,200),c.color.copy(ht.hemiSky),c.groundColor.copy(ht.hemiGround),c.intensity=ht.hemiI,r.fog.color.copy(ht.fog);let Vo=(yn.city*.0022+yn.sakura*.0019+yn.coast*.0011+yn.country*.0014+yn.mountain*.0017)*(1+ht.night*.25);r.fog.near=Vo*(1+.55*Rn+.45*Wn),r.fog.far=m.ahead*.92,de.uSkyHor.value.copy(ht.horizon),de.uSkyZen.value.copy(ht.zenith),de.uTime.value=Ot,de.uWet.value=L,de.uOrigin.value.set(m.origin.x,m.origin.z),de.uWind.value=1+.8*Wn,de.uCloudSh.value=(1-Rn)*Ce(.04,.3,ht.sunEl)*(1-ht.night);let Mn=d.material.uniforms;if(Mn.uNight.value=ht.night,Mn.uWarm.value=ht.warm,Mn.uTime.value=Ot,Mn.uCirrusCol.value.copy(ht.cLit).lerp(ht.horizon,.25),Mn.uCirrus.value=.6*(1-Rn)*(1-.65*Ce(.4,.9,ht.night)),Mn.uOvercast.value=Rn,Mn.uMilky.value=Ce(.55,.95,ht.night)*(1-Rn),ht.night>.65&&Rn<.3&&Mt.p<0&&(Mt.next-=Nt)<0){let xt=Math.atan2(B.fx,B.fz)+(Math.random()-.5)*1.5,kt=.45+Math.random()*.6,Ht=.22+Math.random()*.2,Bt=(Math.random()-.5)*.6,oe=(_e,xe)=>new z(Math.cos(_e)*Math.sin(xe),Math.sin(_e),Math.cos(_e)*Math.cos(xe));Mt.a.copy(oe(kt,xt)),Mt.b.copy(oe(kt-Ht,xt+Bt)),Mt.p=0,Mt.next=De.has("meteors")?1:6+Math.random()*20}Mt.p>=0&&(Mt.p+=Nt/.85,Mt.p>1.3&&(Mt.p=-1)),Mn.uMetP.value=Mt.p,Mn.uMetA.value.copy(Mt.a),Mn.uMetB.value.copy(Mt.b),Mn.uDeckLit.value.copy(ht.horizon).lerp(ht.cLit,.35),Mn.uDeckDark.value.copy(ht.zenith).lerp(ht.horizon,.25).multiplyScalar(.82),d.position.copy(a.position),v.update(a.position,Nt),T.update(a.position);let as=0;for(let xt of[-150,0,250,500,800])as=Math.max(as,be(w.s+xt).coast);M.mesh.visible=as>.001,M.update(a.position,Ot,Vo*.8,Ce(0,.35,as)),x.uniforms.uTime.value=Ot,x.uniforms.uFogD.value=r.fog.near,x.uniforms.uNight.value=ht.night,x.uniforms.uSpecK.value=1-ht.overcast*.85,de.uSunDir.value.copy(ht.lightDir),de.uSunCol.value.copy(ht.sunCol),g.uniforms.uTime.value=Ot,g.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*bt());let A=Ce(.15,.8,ht.night);f.atlas.emissiveIntensity=.1+A*1.05,f.lamp.color.setRGB(.85,.85,.8).lerp(new mt(3.6,2.8,1.8),A),f.pool.opacity=A*.42*(1+.8*L),de.uNight.value=A,R.bloom.strength=ve(.32,.55,A),R.bloom.threshold=ve(1.35,.95,A),R.bloom.radius=ve(.55,.35,A),t.toneMappingExposure=ve(1,1.15,A)*(1+.35*vt),ot.copy(a.position).addScaledVector(ht.sunDir,1e3).project(a);let H=R.grade.uniforms,$=ot.z<1?1:0,q=Math.max(Math.abs(ot.x),Math.abs(ot.y));H.uSun.value.set(ot.x*.5+.5,ot.y*.5+.5),H.uSunVis.value=$*(1-Ce(1,1.9,q))*Ce(-.02,.15,ht.sunEl)*(1-ht.night)*(1-Rn)*(1-vt),H.uSat.value=1.1-.12*Rn,H.uDay.value=bt(),H.uWarm.value=ht.warm,H.uTime.value=Ot,D.update(a.position,Ot,Wn*(1-vt),bt()),P.setFog(r.fog.near),P.update(Nt,Ot,a.position,Ft,Vt,yn,bt(),Wn,_.group.position);let Y=performance.now();b.update(Nt,Ot,a.position,Ft,Vt,yn.sakura*(1-vt),B.y,A,(yn.country+yn.sakura*.4)*(1-Wn)*(1-vt),yn.mountain*(1-vt));let Pt=performance.now();if(pt){p.at(ne,k);let xt=Math.hypot(k.x-m.origin.x-a.position.x,k.z-m.origin.z-a.position.z),kt=S.st.active?S.group.position.distanceTo(a.position):1e9;pt.update(w.speed/15,yn,bt(),{bell:ws?Math.pow(Fe(1-xt/260,0,1),1.5):0,train:Math.pow(Fe(1-kt/230,0,1),2),rain:Wn*(1-vt),roof:w.cam!==2,tunnel:vt,water:(()=>{let Ht=wi(w.s);return Math.max(Ht?1-Ce(12,150,Math.abs(w.s-Ht.s)):0,yn.mountain*.45)})(),dusk:ht.warm*(w.tod>.5?1:.3)})}gt(Ie(w.s+40));let Dt=performance.now();R.composer.render(Nt);let Ct=performance.now(),Lt=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Lt.world=Lt.world*.95+(Oo-Bo)*.05,Lt.parts=Lt.parts*.95+(Pt-Y)*.05,Lt.render=Lt.render*.95+(Ct-Dt)*.05,it=it*.95+(performance.now()-_t)*.05,window.__ft=it,(st+=Nt)>.25){st=0,J.textContent=Math.round(w.speed*3.6),nt.textContent=(w.dist/1e3).toFixed(1);let xt=Math.floor(w.tod*1440);St.textContent=`${String(Math.floor(xt/60)).padStart(2,"0")}:${String(xt%60).padStart(2,"0")}`}ee++,I&&ee>150&&Nt>.03?G+=Nt:G=Math.max(0,G-Nt*.5),G>3&&!De.has("q")&&(G=0,At())}window.__dbg={renderer:t,st:w,scene:r,camera:a,world:m,TOD:ht,X:N,train:S,weather:C,U:de,birds:P,cine:E,post:R,car:_},Fo(""),Rt.classList.add("ready"),De.has("auto")&&Jt(),requestAnimationFrame(lt)}v_().catch(i=>{console.error(i),Fo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
