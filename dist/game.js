var ch=0,Nc=1,uh=2;var hs=1,hh=2,Ks=3,Gi=0,sn=1,Qe=2,Sn=0,Qs=1,_i=2,Uc=3,Fc=4,fh=5;var fs=100,dh=101,ph=102,mh=103,gh=104,xh=200,vh=201,_h=202,yh=203,Oc=204,Bc=205,Mh=206,Sh=207,bh=208,Th=209,Eh=210,wh=211,Ah=212,Rh=213,Ch=214,aa=0,la=1,ca=2,Hs=3,ua=4,ha=5,fa=6,da=7,zc=0,Ph=1,Ih=2,$n=0,to=1,eo=2,no=3,io=4,so=5,ro=6,ds=7;var kc=300,Wi=301,ps=302,Oa=303,Ba=304,oo=306,pa=1e3,ei=1001,ma=1002,Oe=1003,Lh=1004;var ao=1005;var ke=1006,za=1007;var On=1008;var bn=1009,Hc=1010,Vc=1011,js=1012,ka=1013,Kn=1014,Bn=1015,We=1016,Ha=1017,Va=1018,tr=1020,Gc=35902,Wc=35899,Xc=1021,qc=1022,zn=1023,ni=1026,Xi=1027,er=1028,Ga=1029,qi=1030,Wa=1031;var Xa=1033,lo=33776,co=33777,uo=33778,ho=33779,qa=35840,Ya=35841,Za=35842,Ja=35843,$a=36196,Ka=37492,Qa=37496,ja=37488,tl=37489,fo=37490,el=37491,nl=37808,il=37809,sl=37810,rl=37811,ol=37812,al=37813,ll=37814,cl=37815,ul=37816,hl=37817,fl=37818,dl=37819,pl=37820,ml=37821,gl=36492,xl=36494,vl=36495,_l=36283,yl=36284,po=36285,Ml=36286;var Pr=2300,ga=2301,ra=2302,Ec=2303,wc=2400,Ac=2401,Rc=2402;var Dh=3200;var Sl=0,Nh=1,yi="",Ae="srgb",Ir="srgb-linear",Lr="linear",fe="srgb";var oa=7680;var Uh=519,Fh=512,Oh=513,Bh=514,bl=515,zh=516,kh=517,Tl=518,Hh=519,Vh=35044;var Yc="300 es",Zn=2e3,Vs=2001;function Fd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Od(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gh(){let i=Dr("canvas");return i.style.display="block",i}var Bu={},Gs=null;function Zc(...i){let t="THREE."+i.shift();Gs?Gs("log",t,...i):console.log(t,...i)}function Wh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=Wh(i);let t="THREE."+i.shift();if(Gs)Gs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=Wh(i);let t="THREE."+i.shift();if(Gs)Gs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function as(...i){let t=i.join(" ");t in Bu||(Bu[t]=!0,Yt(...i))}function Xh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var qh={[aa]:la,[ca]:fa,[ua]:da,[Hs]:ha,[la]:aa,[fa]:ca,[da]:ua,[ha]:Hs},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nc=Math.PI/180,Nr=180/Math.PI;function mo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function Bd(i,t){return(i%t+t)%t}function ic(i,t,e){return(1-e)*i+e*t}function br(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var jc=class jc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jc.prototype.isVector2=!0;var kt=jc,$e=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(h!==x||o!==f||c!==p||u!==g){let m=o*f+c*p+u*g+h*x;m<0&&(f=-f,p=-p,g=-g,x=-x,m=-m);let d=1-l;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);d=Math.sin(d*v)/T,l=Math.sin(l*v)/T,o=o*d+f*l,c=c*d+p*l,u=u*d+g*l,h=h*d+x*l}else{o=o*d+f*l,c=c*d+p*l,u=u*d+g*l,h=h*d+x*l;let v=1/Math.sqrt(o*o+c*c+u*u+h*h);o*=v,c*=v,u*=v,h*=v}}t[e]=o,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],o=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=l*g+u*h+o*p-c*f,t[e+1]=o*g+u*f+c*h-l*p,t[e+2]=c*g+u*p+l*f-o*h,t[e+3]=u*g-l*h-o*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,c=l(n/2),u=l(s/2),h=l(r/2),f=o(n/2),p=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],c=e[2],u=e[6],h=e[10],f=n+l+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-o)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>l&&n>h){let p=2*Math.sqrt(1+n-l-h);this._w=(u-o)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(l>h){let p=2*Math.sqrt(1+l-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(o+u)/p}else{let p=2*Math.sqrt(1+h-n-l);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,c=e._z,u=e._w;return this._x=n*u+a*l+s*c-r*o,this._y=s*u+a*o+r*l-n*c,this._z=r*u+a*c+n*o-s*l,this._w=a*u-n*l-s*o-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let o=1-e;if(l<.9995){let c=Math.acos(l),u=Math.sin(c);o=Math.sin(o*c)/u,e=Math.sin(e*c)/u,this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+s*e,this._z=this._z*o+r*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},tu=class tu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,c=2*(a*s-l*n),u=2*(l*e-r*s),h=2*(r*n-a*e);return this.x=e+o*c+a*h-l*u,this.y=n+o*u+l*c-r*h,this.z=s+o*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sc.copy(this).projectOnVector(t),this.sub(sc)}reflect(t){return this.sub(sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tu.prototype.isVector3=!0;var B=tu,sc=new B,zu=new $e,eu=class eu{constructor(t,e,n,s,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c)}set(t,e,n,s,r,a,l,o,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=o,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],v=s[1],T=s[4],_=s[7],y=s[2],S=s[5],A=s[8];return r[0]=a*x+l*v+o*y,r[3]=a*m+l*T+o*S,r[6]=a*d+l*_+o*A,r[1]=c*x+u*v+h*y,r[4]=c*m+u*T+h*S,r[7]=c*d+u*_+h*A,r[2]=f*x+p*v+g*y,r[5]=f*m+p*T+g*S,r[8]=f*d+p*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],u=t[8];return e*a*u-e*l*c-n*r*u+n*l*o+s*r*c-s*a*o}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],u=t[8],h=u*a-l*c,f=l*o-u*r,p=c*r-a*o,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(l*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*o)*x,t[5]=(s*r-l*e)*x,t[6]=p*x,t[7]=(n*o-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let o=Math.cos(r),c=Math.sin(r);return this.set(n*o,n*c,-n*(o*a+c*l)+a+t,-s*c,s*o,-s*(-c*a+o*l)+l+e,0,0,1),this}scale(t,e){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(t,e)),this}rotate(t){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};eu.prototype.isMatrix3=!0;var $t=eu,rc=new $t,ku=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zd(){let i={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ir]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),i}var ie=zd();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ws,xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ws===void 0&&(ws=Dr("canvas")),ws.width=t.width,ws.height=t.height;let s=ws.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Dr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kd=0,Ws=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=mo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(oc(s[a].image)):r.push(oc(s[a]))}else r=oc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var Hd=0,ac=new B,mn=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,s=ei,r=ke,a=On,l=zn,o=bn,c=i.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=mo(),this.name="",this.source=new Ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pa:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pa:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=kc;mn.DEFAULT_ANISOTROPY=1;var nu=class nu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,o=t.elements,c=o[0],u=o[4],h=o[8],f=o[1],p=o[5],g=o[9],x=o[2],m=o[6],d=o[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,_=(p+1)/2,y=(d+1)/2,S=(u+f)/4,A=(h+x)/4,M=(g+m)/4;return T>_&&T>y?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=S/n,r=A/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=A/r,s=M/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nu.prototype.isVector4=!0;var Me=nu,va=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new mn(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ws(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ee=class extends va{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ur=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _a=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fa=class Fa{constructor(t,e,n,s,r,a,l,o,c,u,h,f,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c,u,h,f,p,g,x,m)}set(t,e,n,s,r,a,l,o,c,u,h,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=l,d[13]=o,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),a=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*h,g=l*u,x=l*h;e[0]=o*u,e[4]=-o*h,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-l*o,e[2]=x-f*c,e[6]=g+p*c,e[10]=a*o}else if(t.order==="YXZ"){let f=o*u,p=o*h,g=c*u,x=c*h;e[0]=f+x*l,e[4]=g*l-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-l,e[2]=p*l-g,e[6]=x+f*l,e[10]=a*o}else if(t.order==="ZXY"){let f=o*u,p=o*h,g=c*u,x=c*h;e[0]=f-x*l,e[4]=-a*h,e[8]=g+p*l,e[1]=p+g*l,e[5]=a*u,e[9]=x-f*l,e[2]=-a*c,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){let f=a*u,p=a*h,g=l*u,x=l*h;e[0]=o*u,e[4]=g*c-p,e[8]=f*c+x,e[1]=o*h,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){let f=a*o,p=a*c,g=l*o,x=l*c;e[0]=o*u,e[4]=x-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-l*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-x*h}else if(t.order==="XZY"){let f=a*o,p=a*c,g=l*o,x=l*c;e[0]=o*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=l*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,Gd)}lookAt(t,e,n){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Li.crossVectors(n,wn),Li.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Li.crossVectors(n,wn)),Li.normalize(),Oo.crossVectors(wn,Li),s[0]=Li.x,s[4]=Oo.x,s[8]=wn.x,s[1]=Li.y,s[5]=Oo.y,s[9]=wn.y,s[2]=Li.z,s[6]=Oo.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],T=n[7],_=n[11],y=n[15],S=s[0],A=s[4],M=s[8],b=s[12],C=s[1],D=s[5],P=s[9],L=s[13],w=s[2],I=s[6],F=s[10],O=s[14],z=s[3],U=s[7],G=s[11],q=s[15];return r[0]=a*S+l*C+o*w+c*z,r[4]=a*A+l*D+o*I+c*U,r[8]=a*M+l*P+o*F+c*G,r[12]=a*b+l*L+o*O+c*q,r[1]=u*S+h*C+f*w+p*z,r[5]=u*A+h*D+f*I+p*U,r[9]=u*M+h*P+f*F+p*G,r[13]=u*b+h*L+f*O+p*q,r[2]=g*S+x*C+m*w+d*z,r[6]=g*A+x*D+m*I+d*U,r[10]=g*M+x*P+m*F+d*G,r[14]=g*b+x*L+m*O+d*q,r[3]=v*S+T*C+_*w+y*z,r[7]=v*A+T*D+_*I+y*U,r[11]=v*M+T*P+_*F+y*G,r[15]=v*b+T*L+_*O+y*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15],v=o*p-c*f,T=l*p-c*h,_=l*f-o*h,y=a*p-c*u,S=a*f-o*u,A=a*h-l*u;return e*(x*v-m*T+d*_)-n*(g*v-m*y+d*S)+s*(g*T-x*y+d*A)-r*(g*_-x*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],o=t[2],c=t[6],u=t[10];return e*(a*u-l*c)-n*(r*u-l*o)+s*(r*c-a*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],v=e*l-n*a,T=e*o-s*a,_=e*c-r*a,y=n*o-s*l,S=n*c-r*l,A=s*c-r*o,M=u*x-h*g,b=u*m-f*g,C=u*d-p*g,D=h*m-f*x,P=h*d-p*x,L=f*d-p*m,w=v*L-T*P+_*D+y*C-S*b+A*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/w;return t[0]=(l*L-o*P+c*D)*I,t[1]=(s*P-n*L-r*D)*I,t[2]=(x*A-m*S+d*y)*I,t[3]=(f*S-h*A-p*y)*I,t[4]=(o*C-a*L-c*b)*I,t[5]=(e*L-s*C+r*b)*I,t[6]=(m*_-g*A-d*T)*I,t[7]=(u*A-f*_+p*T)*I,t[8]=(a*P-l*C+c*M)*I,t[9]=(n*C-e*P-r*M)*I,t[10]=(g*S-x*_+d*v)*I,t[11]=(h*_-u*S-p*v)*I,t[12]=(l*b-a*D-o*M)*I,t[13]=(e*D-n*b+s*M)*I,t[14]=(x*T-g*y-m*v)*I,t[15]=(u*y-h*T+f*v)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,c=r*a,u=r*l;return this.set(c*a+n,c*l-s*o,c*o+s*l,0,c*l+s*o,u*l+n,u*o-s*a,0,c*o-s*l,u*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,c=r+r,u=a+a,h=l+l,f=r*c,p=r*u,g=r*h,x=a*u,m=a*h,d=l*h,v=o*c,T=o*u,_=o*h,y=n.x,S=n.y,A=n.z;return s[0]=(1-(x+d))*y,s[1]=(p+_)*y,s[2]=(g-T)*y,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(f+d))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+T)*A,s[9]=(m-v)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=As.set(s[0],s[1],s[2]).length(),l=As.set(s[4],s[5],s[6]).length(),o=As.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Wn.copy(this);let c=1/a,u=1/l,h=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,e.setFromRotationMatrix(Wn),n.x=a,n.y=l,n.z=o,this}makePerspective(t,e,n,s,r,a,l=Zn,o=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,x;if(o)g=r/(a-r),x=a*r/(a-r);else if(l===Zn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(l===Vs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Zn,o=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,x;if(o)g=1/(a-r),x=a/(a-r);else if(l===Zn)g=-2/(a-r),x=-(a+r)/(a-r);else if(l===Vs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fa.prototype.isMatrix4=!0;var Wt=Fa,As=new B,Wn=new Wt,Vd=new B(0,0,0),Gd=new B(1,1,1),Li=new B,Oo=new B,wn=new B,Vu=new Wt,Gu=new $e,yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wd=0,Wu=new B,Rs=new $e,ui=new Wt,Bo=new B,Tr=new B,Xd=new B,qd=new $e,Xu=new B(1,0,0),qu=new B(0,1,0),Yu=new B(0,0,1),Zu={type:"added"},Yd={type:"removed"},Cs={type:"childadded",child:null},lc={type:"childremoved",child:null},He=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new yn,n=new $e,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new $t}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(Xu,t)}rotateY(t){return this.rotateOnAxis(qu,t)}rotateZ(t){return this.rotateOnAxis(Yu,t)}translateOnAxis(t,e){return Wu.copy(t).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xu,t)}translateY(t){return this.translateOnAxis(qu,t)}translateZ(t){return this.translateOnAxis(Yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bo.copy(t):Bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Tr,Bo,this.up):ui.lookAt(Bo,Tr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(ui),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){let h=o[c];r(t.shapes,h)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){let l=a(t.geometries),o=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){let o=[];for(let c in l){let u=l[c];delete u.metadata,o.push(u)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new B(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fe=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zd={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,o=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Zd)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},zo={h:0,s:0,l:0};function cc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Bd(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cc(a,r,t+1/3),this.g=cc(a,r,t),this.b=cc(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=Yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ie.workingToColorSpace(ln.copy(this),t),Math.round(oe(ln.r*255,0,255))*65536+Math.round(oe(ln.g*255,0,255))*256+Math.round(oe(ln.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(ln.copy(this),e);let n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),l=Math.min(n,s,r),o,c,u=(l+a)/2;if(l===a)o=0,c=0;else{let h=a-l;switch(c=u<=.5?h/(a+l):h/(2-a-l),a){case n:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-n)/h+2;break;case r:o=(n-s)/h+4;break}o/=6}return t.h=o,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Ae){ie.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,s=ln.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(zo);let n=ic(Di.h,zo.h,e),s=ic(Di.s,zo.s,e),r=ic(Di.l,zo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new gt;gt.NAMES=Yh;var Or=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new gt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ls=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Xn=new B,hi=new B,uc=new B,fi=new B,Ps=new B,Is=new B,Ju=new B,hc=new B,fc=new B,dc=new B,pc=new Me,mc=new Me,gc=new Me,Oi=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),hi.subVectors(n,e),uc.subVectors(t,e);let a=Xn.dot(Xn),l=Xn.dot(hi),o=Xn.dot(uc),c=hi.dot(hi),u=hi.dot(uc),h=a*c-l*l;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*o-l*u)*f,g=(a*u-l*o)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,fi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,fi.x),o.addScaledVector(a,fi.y),o.addScaledVector(l,fi.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,n),gc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(pc,r.x),a.addScaledVector(mc,r.y),a.addScaledVector(gc,r.z),a}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),hi.subVectors(t,e),Xn.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Xn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;Ps.subVectors(s,n),Is.subVectors(r,n),hc.subVectors(t,n);let o=Ps.dot(hc),c=Is.dot(hc);if(o<=0&&c<=0)return e.copy(n);fc.subVectors(t,s);let u=Ps.dot(fc),h=Is.dot(fc);if(u>=0&&h<=u)return e.copy(s);let f=o*h-u*c;if(f<=0&&o>=0&&u<=0)return a=o/(o-u),e.copy(n).addScaledVector(Ps,a);dc.subVectors(t,r);let p=Ps.dot(dc),g=Is.dot(dc);if(g>=0&&p<=g)return e.copy(r);let x=p*c-o*g;if(x<=0&&c>=0&&g<=0)return l=c/(c-g),e.copy(n).addScaledVector(Is,l);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Ju.subVectors(r,s),l=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Ju,l);let d=1/(m+x+f);return a=x*d,l=f*d,e.copy(n).addScaledVector(Ps,a).addScaledVector(Is,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},si=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(t.matrixWorld),this.union(ko)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),Ho.subVectors(this.max,Er),Ls.subVectors(t.a,Er),Ds.subVectors(t.b,Er),Ns.subVectors(t.c,Er),Ni.subVectors(Ds,Ls),Ui.subVectors(Ns,Ds),is.subVectors(Ls,Ns);let e=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-is.z,is.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,is.z,0,-is.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-is.y,is.x,0];return!xc(e,Ls,Ds,Ns,Ho)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,Ls,Ds,Ns,Ho))?!1:(Vo.crossVectors(Ni,Ui),e=[Vo.x,Vo.y,Vo.z],xc(e,Ls,Ds,Ns,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new B,new B,new B,new B,new B,new B,new B,new B],qn=new B,ko=new si,Ls=new B,Ds=new B,Ns=new B,Ni=new B,Ui=new B,is=new B,Er=new B,Ho=new B,Vo=new B,ss=new B;function xc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let l=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),o=t.dot(ss),c=e.dot(ss),u=n.dot(ss);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>l)return!1}return!0}var Ue=new B,Go=new kt,Jd=0,nn=class extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Go.fromBufferAttribute(this,e),Go.applyMatrix3(t),this.setXY(e,Go.x,Go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=br(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=br(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=br(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=br(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Br=class extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zr=class extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},$d=new si,wr=new B,vc=new B,gi=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(vc)),this.expandByPoint(wr.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kd=0,Fn=new Wt,_c=new He,Us=new B,An=new si,Ar=new si,Je=new B,de=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fd(t)?zr:Br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Ar.setFromBufferAttribute(l),this.morphTargetsRelative?(Je.addVectors(An.min,Ar.min),An.expandByPoint(Je),Je.addVectors(An.max,Ar.max),An.expandByPoint(Je)):(An.expandByPoint(Ar.min),An.expandByPoint(Ar.max))}An.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],o=this.morphTargetsRelative;for(let c=0,u=l.count;c<u;c++)Je.fromBufferAttribute(l,c),o&&(Us.fromBufferAttribute(t,c),Je.add(Us)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],o=[];for(let M=0;M<n.count;M++)l[M]=new B,o[M]=new B;let c=new B,u=new B,h=new B,f=new kt,p=new kt,g=new kt,x=new B,m=new B;function d(M,b,C){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,C),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),l[M].add(x),l[b].add(x),l[C].add(x),o[M].add(m),o[b].add(m),o[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let M=0,b=v.length;M<b;++M){let C=v[M],D=C.start,P=C.count;for(let L=D,w=D+P;L<w;L+=3)d(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let T=new B,_=new B,y=new B,S=new B;function A(M){y.fromBufferAttribute(s,M),S.copy(y);let b=l[M];T.copy(b),T.sub(y.multiplyScalar(y.dot(b))).normalize(),_.crossVectors(S,b);let D=_.dot(o[M])<0?-1:1;a.setXYZW(M,T.x,T.y,T.z,D)}for(let M=0,b=v.length;M<b;++M){let C=v[M],D=C.start,P=C.count;for(let L=D,w=D+P;L<w;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,l=new B,o=new B,c=new B,u=new B,h=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),l.add(u),o.add(u),c.add(u),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(l,o){let c=l.array,u=l.itemSize,h=l.normalized,f=new c.constructor(o.length*u),p=0,g=0;for(let x=0,m=o.length;x<m;x++){l.isInterleavedBufferAttribute?p=o[x]*l.data.stride+l.offset:p=o[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new nn(f,u,h)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let o=s[l],c=t(o,n);e.setAttribute(l,c)}let r=this.morphAttributes;for(let l in r){let o=[],c=r[l];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=t(f,n);o.push(p)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,o=a.length;l<o;l++){let c=a[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let c in o)o[c]!==void 0&&(t[c]=o[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let c=n[o];t.data.attributes[o]=c.toJSON(t.data)}let s={},r=!1;for(let o in this.morphAttributes){let c=this.morphAttributes[o],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[o]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yc=new B,Qd=new B,jd=new $t,Yn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=yc.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(yc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jd.getNormalMatrix(t),s=this.coplanarPoint(yc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},tp=0,xi=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Qs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let o=r[l];delete o.metadata,a.push(o)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var pi=new B,Mc=new B,Wo=new B,Xo=new B,kr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mc.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),Xo.copy(this.origin).sub(Mc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wo),l=Xo.dot(this.direction),o=-Xo.dot(Wo),c=Xo.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*o-l,f=a*l-o,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+a*f+2*l)+f*(a*h+f+2*o)+c}else f=r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+c;else f=-r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+c;else f<=-g?(h=Math.max(0,-(-a*r+l)),f=h>0?-r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-o),r),p=f*(f+2*o)+c):(h=Math.max(0,-(a*r+l)),f=h>0?r:Math.min(Math.max(-r,-o),r),p=-h*h+f*(f+2*o)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+l)),p=-h*h+f*(f+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mc).addScaledVector(Wo,f),p}intersectSphere(t,e){if(t.radius<0)return null;pi.subVectors(t.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(l=(t.min.z-f.z)*h,o=(t.max.z-f.z)*h):(l=(t.max.z-f.z)*h,o=(t.min.z-f.z)*h),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,o=l.x,c=l.y,u=l.z,h=t.x-a.x,f=t.y-a.y,p=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,d=n.x-a.x,v=n.y-a.y,T=n.z-a.z,_=Math.abs(o),y=Math.abs(c),S=Math.abs(u),A,M,b,C,D,P,L,w,I,F,O,z;if(_>=y&&_>=S?(b=o,P=h,I=g,z=d,o>=0?(A=c,M=u,C=f,D=p,L=x,w=m,F=v,O=T):(A=u,M=c,C=p,D=f,L=m,w=x,F=T,O=v)):y>=S?(b=c,P=f,I=x,z=v,c>=0?(A=u,M=o,C=p,D=h,L=m,w=g,F=T,O=d):(A=o,M=u,C=h,D=p,L=g,w=m,F=d,O=T)):(b=u,P=p,I=m,z=T,u>=0?(A=o,M=c,C=h,D=f,L=g,w=x,F=d,O=v):(A=c,M=o,C=f,D=h,L=x,w=g,F=v,O=d)),b===0)return null;let U=A/b,G=M/b,q=1/b,ft=C-U*P,xt=D-G*P,ee=L-U*I,zt=w-G*I,Xt=F-U*z,Q=O-G*z,st=Xt*zt-Q*ee,Ct=ft*Q-xt*Xt,Ht=ee*xt-zt*ft;if(s){if(st<0||Ct<0||Ht<0)return null}else if((st<0||Ct<0||Ht<0)&&(st>0||Ct>0||Ht>0))return null;let J=st+Ct+Ht;if(J===0)return null;let at=q*(st*P+Ct*I+Ht*z);return(J>0?at<0:at>0)?null:this.at(at/J,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$u=new Wt,rs=new kr,qo=new gi,Ku=new B,Yo=new B,Zo=new B,Jo=new B,Sc=new B,$o=new B,Qu=new B,Ko=new B,he=class extends He{constructor(t=new de,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){$o.set(0,0,0);for(let o=0,c=r.length;o<c;o++){let u=l[o],h=r[o];u!==0&&(Sc.fromBufferAttribute(h,t),a?$o.addScaledVector(Sc,u):$o.addScaledVector(Sc.sub(e),u))}e.add($o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(qo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(qo,Ku)===null||rs.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&($u.copy(r).invert(),rs.copy(t.ray).applyMatrix4($u),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,y=T;_<y;_+=3){let S=l.getX(_),A=l.getX(_+1),M=l.getX(_+2);s=Qo(this,d,t,n,c,u,h,S,A,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=l.getX(m),T=l.getX(m+1),_=l.getX(m+2);s=Qo(this,a,t,n,c,u,h,v,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,y=T;_<y;_+=3){let S=_,A=_+1,M=_+2;s=Qo(this,d,t,n,c,u,h,S,A,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,T=m+1,_=m+2;s=Qo(this,a,t,n,c,u,h,v,T,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ep(i,t,e,n,s,r,a,l){let o;if(t.side===sn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===Gi,l),o===null)return null;Ko.copy(l),Ko.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ko);return c<e.near||c>e.far?null:{distance:c,point:Ko.clone(),object:i}}function Qo(i,t,e,n,s,r,a,l,o,c){i.getVertexPosition(l,Yo),i.getVertexPosition(o,Zo),i.getVertexPosition(c,Jo);let u=ep(i,t,e,n,Yo,Zo,Jo,Qu);if(u){let h=new B;Oi.getBarycoord(Qu,Yo,Zo,Jo,h),s&&(u.uv=Oi.getInterpolatedAttribute(s,l,o,c,h,new kt)),r&&(u.uv1=Oi.getInterpolatedAttribute(r,l,o,c,h,new kt)),a&&(u.normal=Oi.getInterpolatedAttribute(a,l,o,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:o,c,normal:new B,materialIndex:0};Oi.getNormal(Yo,Zo,Jo,f.normal),u.face=f,u.barycoord=h}return u}var cs=class extends mn{constructor(t=null,e=1,n=1,s,r,a,l,o,c=Oe,u=Oe,h,f){super(null,a,l,o,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class extends nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fs=new Wt,ju=new Wt,jo=[],th=new si,np=new Wt,Rr=new he,Cr=new gi,vi=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,np)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),th.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(th)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),Cr.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),ju.multiplyMatrices(n,Fs),Rr.matrixWorld=ju,Rr.raycast(t,jo);for(let a=0,l=jo.length;a<l;a++){let o=jo[a];o.instanceId=r,o.object=this,e.push(o)}jo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Mn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cs(new Float32Array(s*this.count),s,this.count,er,Bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let l=this.geometry.morphTargetsRelative?1:1-a,o=s*t;return r[o]=l,r.set(n,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},os=new gi,ip=new kt(.5,.5),ta=new B,qs=class{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],o=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],v=r[12],T=r[13],_=r[14],y=r[15];if(s[0].setComponents(c-a,p-u,d-g,y-v).normalize(),s[1].setComponents(c+a,p+u,d+g,y+v).normalize(),s[2].setComponents(c+l,p+h,d+x,y+T).normalize(),s[3].setComponents(c-l,p-h,d-x,y-T).normalize(),n)s[4].setComponents(o,f,m,_).normalize(),s[5].setComponents(c-o,p-f,d-m,y-_).normalize();else if(s[4].setComponents(c-o,p-f,d-m,y-_).normalize(),e===Zn)s[5].setComponents(c+o,p+f,d+m,y+_).normalize();else if(e===Vs)s[5].setComponents(o,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){os.center.set(0,0,0);let e=ip.distanceTo(t.center);return os.radius=.7071067811865476+e,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ta.x=s.normal.x>0?t.max.x:t.min.x,ta.y=s.normal.y>0?t.max.y:t.min.y,ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ys=class extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eh=new Wt,Cc=new kr,ea=new gi,na=new B,Hr=class extends He{constructor(t=new de,e=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;eh.copy(s).invert(),Cc.copy(t.ray).applyMatrix4(eh);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);na.fromBufferAttribute(h,m),nh(na,m,o,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,x=p;g<x;g++)na.fromBufferAttribute(h,g),nh(na,g,o,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function nh(i,t,e,n,s,r,a){let l=Cc.distanceSqToPoint(i);if(l<e){let o=new B;Cc.closestPointToPoint(i,o),o.applyMatrix4(n);let c=s.ray.origin.distanceTo(o);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Vr=class extends mn{constructor(t=[],e=Wi,n,s,r,a,l,o,c,u){super(t,e,n,s,r,a,l,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rn=class extends mn{constructor(t,e,n,s,r,a,l,o,c){super(t,e,n,s,r,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bi=class extends mn{constructor(t,e,n=Kn,s,r,a,l=Oe,o=Oe,c,u=ni,h=1){if(u!==ni&&u!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,l,o,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ya=class extends Bi{constructor(t,e=Kn,n=Wi,s,r,a=Oe,l=Oe,o,c=ni){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,l,o,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gr=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Jn=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let o=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function g(x,m,d,v,T,_,y,S,A,M,b){let C=_/A,D=y/M,P=_/2,L=y/2,w=S/2,I=A+1,F=M+1,O=0,z=0,U=new B;for(let G=0;G<F;G++){let q=G*D-L;for(let ft=0;ft<I;ft++){let xt=ft*C-P;U[x]=xt*v,U[m]=q*T,U[d]=w,c.push(U.x,U.y,U.z),U[x]=0,U[m]=0,U[d]=S>0?1:-1,u.push(U.x,U.y,U.z),h.push(ft/A),h.push(1-G/M),O+=1}}for(let G=0;G<M;G++)for(let q=0;q<A;q++){let ft=f+q+I*G,xt=f+q+I*(G+1),ee=f+(q+1)+I*(G+1),zt=f+(q+1)+I*G;o.push(ft,xt,zt),o.push(xt,ee,zt),z+=6}l.addGroup(p,z,b),p+=z,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Wr=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],l=[],o=[],c=new B,u=new kt;a.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),l.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,o.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Zs=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,x=[],m=n/2,d=0;v(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function v(){let _=new B,y=new B,S=0,A=(e-t)/n;for(let M=0;M<=r;M++){let b=[],C=M/r,D=C*(e-t)+t;for(let P=0;P<=s;P++){let L=P/s,w=L*o+l,I=Math.sin(w),F=Math.cos(w);y.x=D*I,y.y=-C*n+m,y.z=D*F,h.push(y.x,y.y,y.z),_.set(I,A,F).normalize(),f.push(_.x,_.y,_.z),p.push(L,1-C),b.push(g++)}x.push(b)}for(let M=0;M<s;M++)for(let b=0;b<r;b++){let C=x[b][M],D=x[b+1][M],P=x[b+1][M+1],L=x[b][M+1];(t>0||b!==0)&&(u.push(C,D,L),S+=3),(e>0||b!==r-1)&&(u.push(D,P,L),S+=3)}c.addGroup(d,S,0),d+=S}function T(_){let y=g,S=new kt,A=new B,M=0,b=_===!0?t:e,C=_===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*C,0),f.push(0,C,0),p.push(.5,.5),g++;let D=g;for(let P=0;P<=s;P++){let w=P/s*o+l,I=Math.cos(w),F=Math.sin(w);A.x=b*F,A.y=m*C,A.z=b*I,h.push(A.x,A.y,A.z),f.push(0,C,0),S.x=I*.5+.5,S.y=F*.5*C+.5,p.push(S.x,S.y),g++}for(let P=0;P<s;P++){let L=y+P,w=D+P;_===!0?u.push(w,w+1,L):u.push(w+1,w,L),M+=3}c.addGroup(d,M,_===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ma=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];l(s),c(n),u(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){let T=new B,_=new B,y=new B;for(let S=0;S<e.length;S+=3)p(e[S+0],T),p(e[S+1],_),p(e[S+2],y),o(T,_,y,v)}function o(v,T,_,y){let S=y+1,A=[];for(let M=0;M<=S;M++){A[M]=[];let b=v.clone().lerp(_,M/S),C=T.clone().lerp(_,M/S),D=S-M;for(let P=0;P<=D;P++)P===0&&M===S?A[M][P]=b:A[M][P]=b.clone().lerp(C,P/D)}for(let M=0;M<S;M++)for(let b=0;b<2*(S-M)-1;b++){let C=Math.floor(b/2);b%2===0?(f(A[M][C+1]),f(A[M+1][C]),f(A[M][C])):(f(A[M][C+1]),f(A[M+1][C+1]),f(A[M+1][C]))}}function c(v){let T=new B;for(let _=0;_<r.length;_+=3)T.x=r[_+0],T.y=r[_+1],T.z=r[_+2],T.normalize().multiplyScalar(v),r[_+0]=T.x,r[_+1]=T.y,r[_+2]=T.z}function u(){let v=new B;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let _=m(v)/2/Math.PI+.5,y=d(v)/Math.PI+.5;a.push(_,1-y)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){let T=a[v+0],_=a[v+2],y=a[v+4],S=Math.max(T,_,y),A=Math.min(T,_,y);S>.9&&A<.1&&(T<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,T){let _=v*3;T.x=t[_+0],T.y=t[_+1],T.z=t[_+2]}function g(){let v=new B,T=new B,_=new B,y=new B,S=new kt,A=new kt,M=new kt;for(let b=0,C=0;b<r.length;b+=9,C+=6){v.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),S.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),y.copy(v).add(T).add(_).divideScalar(3);let D=m(y);x(S,C+0,v,D),x(A,C+2,T,D),x(M,C+4,_,D)}}function x(v,T,_,y){y<0&&v.x===1&&(a[T]=v.x-1),_.x===0&&_.z===0&&(a[T]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Xr=class i extends Ma{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ge=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),c=l+1,u=o+1,h=t/l,f=e/o,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let v=d*f-a;for(let T=0;T<c;T++){let _=T*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(T/l),m.push(1-d/o)}}for(let d=0;d<o;d++)for(let v=0;v<l;v++){let T=v+c*d,_=v+c*(d+1),y=v+1+c*(d+1),S=v+1+c*d;p.push(T,_,S),p.push(_,y,S)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var qr=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(a+l,Math.PI),c=0,u=[],h=new B,f=new B,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],T=d/n,_=a+T*l,y=t*Math.cos(_),S=Math.sqrt(t*t-y*y),A=0;d===0&&a===0?A=.5/e:d===n&&o===Math.PI&&(A=-.5/e);for(let M=0;M<=e;M++){let b=M/e,C=s+b*r;h.x=-S*Math.cos(C),h.y=y,h.z=S*Math.sin(C),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(b+A,1-T),v.push(c++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let T=u[d][v+1],_=u[d][v],y=u[d+1][v],S=u[d+1][v+1];(d!==0||a>0)&&p.push(T,_,S),(d!==n-1||o<Math.PI)&&p.push(_,y,S)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ih(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ih(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=ms(i[e]);for(let s in n)t[s]=n[s]}return t}function ih(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function sp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Mi={clone:ms,merge:cn},rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ce=class extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Js=class extends ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ke=class extends xi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Sa=class extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ba=class extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Os(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ta=class extends zi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],o=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Ac:r=t,l=2*e-n;break;case Rc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Ac:a=t,o=2*n-e;break;case Rc:a=1,o=n+s[1]-s[0];break;default:a=t-1,o=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-l),this._weightNext=c/(o-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,c=o-l,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let y=0;y!==l;++y)r[y]=d*a[u+y]+v*a[c+y]+T*a[o+y]+_*a[h+y];return r}},Ea=class extends zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,c=o-l,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==l;++f)r[f]=a[c+f]*h+a[o+f]*u;return r}},wa=class extends zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Aa=class extends zi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=t*l,c=o-l,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==l;++m)r[m]=a[c+m]*x+a[o+m]*g;return r}let f=l*2,p=t-1;for(let g=0;g!==l;++g){let x=a[c+g],m=a[o+g],d=p*f+g*2,v=h[d],T=h[d+1],_=t*f+g*2,y=u[_],S=u[_+1],A=lp(n,e,v,y,s);r[g]=Zh(A,x,T,S,m)}return r}};function Zh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ap(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function lp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=Zh(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let o=ap(r,t,e,n,s);if(Math.abs(o)<1e-10)break;r=Math.max(0,Math.min(1,r-l/o))}return r}var Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Os(e,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Os(t.times,Array),values:Os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),bc(t.settings)&&(n.settings={inTangents:Os(t.settings.inTangents,Array),outTangents:Os(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Aa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Pr:e=this.InterpolantFactoryMethodDiscrete;break;case ga:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break;case Ec:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return ra;case this.InterpolantFactoryMethodBezier:return Ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;bc(this.settings)&&(sh(this.settings.inTangents,t),sh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let o=n[l];if(typeof o=="number"&&isNaN(o)){Zt("KeyframeTrack: Time is not a valid number.",this,l,o),t=!1;break}if(a!==null&&a>o){Zt("KeyframeTrack: Out of order keys.",this,l,o,a),t=!1;break}a=o}if(s!==void 0&&Od(s))for(let l=0,o=s.length;l!==o;++l){let c=s[l];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,l,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=t.length-1,a=1;for(let l=1;l<r;++l){let o=!1,c=t[l],u=t[l+1];if(c!==u&&(l!==1||c!==t[0]))if(s)o=!0;else{let h=l*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=e[h+g];if(x!==e[f+g]||x!==e[p+g]){o=!0;break}}}if(o){if(l!==a){t[a]=t[l];let h=l*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,o=a*n,c=0;c!==n;++c)e[o+c]=e[l+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,bc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function sh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ga;var ki=class extends Cn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Pr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="color";var Ca=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="number";var Pa=class extends zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,o=(n-e)/(s-e),c=t*l;for(let u=c+l;c!==u;c+=4)$e.slerpFlat(r,0,a,c-l,a,c,o);return r}},Yr=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Pr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Ia.prototype.ValueTypeName="vector";var La=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,o,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,l),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jh=new La,Da=class{constructor(t){this.manager=t!==void 0?t:Jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Da.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zr=class extends $s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Tc=new Wt,rh=new B,oh=new B,Jr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),e.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ia=new B,sa=new $e,ti=new B,us=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ia,sa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ia,sa,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new B,ah=new kt,lh=new kt,en=class extends us{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,ah,lh),e.subVectors(lh,ah)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/c,s*=a.width/o,n*=a.height/c}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Pc=class extends Jr{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Nr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},$r=class extends $s{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var Vi=class extends us{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ic=class extends Jr{constructor(){super(new Vi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Ic}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Qr=class extends de{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Bs=-90,zs=1,Na=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Bs,zs,t,e);s.layers=this.layers,this.add(s);let r=new en(Bs,zs,t,e);r.layers=this.layers,this.add(r);let a=new en(Bs,zs,t,e);a.layers=this.layers,this.add(a);let l=new en(Bs,zs,t,e);l.layers=this.layers,this.add(l);let o=new en(Bs,zs,t,e);o.layers=this.layers,this.add(o);let c=new en(Bs,zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,o,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ua=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},jr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=cp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function cp(){this._document.hidden===!1&&this.reset()}var $c="\\[\\]\\.:\\/",up=new RegExp("["+$c+"]","g"),Kc="[^"+$c+"]",hp="[^"+$c.replace("\\.","")+"]",fp=/((?:WC+[\/:])*)/.source.replace("WC",Kc),dp=/(WCOD+)?/.source.replace("WCOD",hp),pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),gp=new RegExp("^"+fp+dp+pp+mp+"$"),xp=["material","materials","bones","map"],Lc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(up,"")}static parseTrackName(t){let e=gp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let o=n(l.children);if(o)return o}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Lc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r_=new Float32Array(1);var iu=class iu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};iu.prototype.isMatrix2=!0;var Dc=iu;function Qc(i,t,e,n){let s=vp(n);switch(e){case Xc:return i*t;case er:return i*t/s.components*s.byteLength;case Ga:return i*t/s.components*s.byteLength;case qi:return i*t*2/s.components*s.byteLength;case Wa:return i*t*2/s.components*s.byteLength;case qc:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case Xa:return i*t*4/s.components*s.byteLength;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case qa:case Za:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Ka:case ja:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case fo:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gl:case xl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _l:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case po:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vp(i){switch(i){case bn:case Hc:return{byteLength:1,components:1};case js:case Vc:case We:return{byteLength:2,components:1};case Ha:case Va:return{byteLength:2,components:4};case Kn:case ka:case Bn:return{byteLength:4,components:1};case Gc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function vf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ep(i){let t=new WeakMap;function e(l,o){let c=l.array,u=l.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,c,u),l.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,o,c){let u=o.array,h=o.updateRanges;if(i.bindBuffer(c,l),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let c=t.get(l);if(c===void 0)t.set(l,e(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n0="gl_FragColor = linearToOutputTexel( gl_FragColor );",i0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
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
}`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v0=`#ifdef USE_ENVMAP
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
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
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
#endif`,T0=`uniform sampler2D dfgLUT;
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
}`,E0=`
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F0=`#if defined( USE_POINTS_UV )
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
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,G0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,Zm=`#define PHONG
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
}`,Jm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,Km=`#define STANDARD
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
}`,Qm=`#define TOON
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
}`,jm=`#define TOON
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:wp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:Lp,aomap_pars_fragment:Dp,batching_pars_vertex:Np,batching_vertex:Up,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Qp,displacementmap_vertex:jp,emissivemap_fragment:t0,emissivemap_pars_fragment:e0,colorspace_fragment:n0,colorspace_pars_fragment:i0,envmap_fragment:s0,envmap_common_pars_fragment:r0,envmap_pars_fragment:o0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:v0,envmap_vertex:l0,fog_vertex:c0,fog_pars_vertex:u0,fog_fragment:h0,fog_pars_fragment:f0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:x0,lights_toon_fragment:_0,lights_toon_pars_fragment:y0,lights_phong_fragment:M0,lights_phong_pars_fragment:S0,lights_physical_fragment:b0,lights_physical_pars_fragment:T0,lights_fragment_begin:E0,lights_fragment_maps:w0,lights_fragment_end:A0,lightprobes_pars_fragment:R0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:I0,logdepthbuf_vertex:L0,map_fragment:D0,map_pars_fragment:N0,map_particle_fragment:U0,map_particle_pars_fragment:F0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:B0,morphinstance_vertex:z0,morphcolor_vertex:k0,morphnormal_vertex:H0,morphtarget_pars_vertex:V0,morphtarget_vertex:G0,normal_fragment_begin:W0,normal_fragment_maps:X0,normal_pars_fragment:q0,normal_pars_vertex:Y0,normal_vertex:Z0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:K0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:j0,opaque_fragment:tm,packing:em,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:om,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:um,shadowmask_pars_fragment:hm,skinbase_vertex:fm,skinning_pars_vertex:dm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:xm,tonemapping_fragment:vm,tonemapping_pars_fragment:_m,transmission_fragment:ym,transmission_pars_fragment:Mm,uv_pars_fragment:Sm,uv_pars_vertex:bm,uv_vertex:Tm,worldpos_vertex:Em,background_vert:wm,background_frag:Am,backgroundCube_vert:Rm,backgroundCube_frag:Cm,cube_vert:Pm,cube_frag:Im,depth_vert:Lm,depth_frag:Dm,distance_vert:Nm,distance_frag:Um,equirect_vert:Fm,equirect_frag:Om,linedashed_vert:Bm,linedashed_frag:zm,meshbasic_vert:km,meshbasic_frag:Hm,meshlambert_vert:Vm,meshlambert_frag:Gm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:$m,meshphysical_frag:Km,meshtoon_vert:Qm,meshtoon_frag:jm,points_vert:tg,points_frag:eg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},Pt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},oi={basic:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:cn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:cn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:cn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new gt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:cn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:cn([Pt.points,Pt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:cn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:cn([Pt.common,Pt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:cn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:cn([Pt.sprite,Pt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:cn([Pt.common,Pt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:cn([Pt.lights,Pt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};oi.physical={uniforms:cn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var El={r:0,b:0,g:0},og=new Wt,_f=new $t;_f.set(-1,0,0,0,1,0,0,0,1);function ag(i,t,e,n,s,r){let a=new gt(0),l=s===!0?0:1,o,c,u=null,h=0,f=null;function p(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let _=v.backgroundBlurriness>0;T=t.get(T,_)}return T}function g(v){let T=!1,_=p(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),T=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,T){let _=p(T);_&&(_.isCubeTexture||_.mapping===oo)?(c===void 0&&(c=new he(new Jn(1,1,1),new ce({name:"BackgroundCubeMaterial",uniforms:ms(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_f),c.material.toneMapped=ie.getTransfer(_.colorSpace)!==fe,(u!==_||h!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new he(new Ge(2,2),new ce({name:"BackgroundMaterial",uniforms:ms(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,o.material.toneMapped=ie.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||f!==i.toneMapping)&&(o.material.needsUpdate=!0,u=_,h=_.version,f=i.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))}function m(v,T){v.getRGB(El,Jc(i)),e.buffers.color.setClear(El.r,El.g,El.b,T,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),l=T,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:g,addToRenderList:x,dispose:d}}function lg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(D,P,L,w,I){let F=!1,O=h(D,w,L,P);r!==O&&(r=O,c(r.object)),F=p(D,w,L,I),F&&g(D,w,L,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,_(D,P,L,w),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function o(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function h(D,P,L,w){let I=w.wireframe===!0,F=n[P.id];F===void 0&&(F={},n[P.id]=F);let O=D.isInstancedMesh===!0?D.id:0,z=F[O];z===void 0&&(z={},F[O]=z);let U=z[L.id];U===void 0&&(U={},z[L.id]=U);let G=U[I];return G===void 0&&(G=f(o()),U[I]=G),G}function f(D){let P=[],L=[],w=[];for(let I=0;I<e;I++)P[I]=0,L[I]=0,w[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:w,object:D,attributes:{},index:null}}function p(D,P,L,w){let I=r.attributes,F=P.attributes,O=0,z=L.getAttributes();for(let U in z)if(z[U].location>=0){let q=I[U],ft=F[U];if(ft===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),q===void 0||q.attribute!==ft||ft&&q.data!==ft.data)return!0;O++}return r.attributesNum!==O||r.index!==w}function g(D,P,L,w){let I={},F=P.attributes,O=0,z=L.getAttributes();for(let U in z)if(z[U].location>=0){let q=F[U];q===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(q=D.instanceColor));let ft={};ft.attribute=q,q&&q.data&&(ft.data=q.data),I[U]=ft,O++}r.attributes=I,r.attributesNum=O,r.index=w}function x(){let D=r.newAttributes;for(let P=0,L=D.length;P<L;P++)D[P]=0}function m(D){d(D,0)}function d(D,P){let L=r.newAttributes,w=r.enabledAttributes,I=r.attributeDivisors;L[D]=1,w[D]===0&&(i.enableVertexAttribArray(D),w[D]=1),I[D]!==P&&(i.vertexAttribDivisor(D,P),I[D]=P)}function v(){let D=r.newAttributes,P=r.enabledAttributes;for(let L=0,w=P.length;L<w;L++)P[L]!==D[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function T(D,P,L,w,I,F,O){O===!0?i.vertexAttribIPointer(D,P,L,I,F):i.vertexAttribPointer(D,P,L,w,I,F)}function _(D,P,L,w){x();let I=w.attributes,F=L.getAttributes(),O=P.defaultAttributeValues;for(let z in F){let U=F[z];if(U.location>=0){let G=I[z];if(G===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),G!==void 0){let q=G.normalized,ft=G.itemSize,xt=t.get(G);if(xt===void 0)continue;let ee=xt.buffer,zt=xt.type,Xt=xt.bytesPerElement,Q=zt===i.INT||zt===i.UNSIGNED_INT||G.gpuType===ka;if(G.isInterleavedBufferAttribute){let st=G.data,Ct=st.stride,Ht=G.offset;if(st.isInstancedInterleavedBuffer){for(let J=0;J<U.locationSize;J++)d(U.location+J,st.meshPerAttribute);D.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let J=0;J<U.locationSize;J++)m(U.location+J);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let J=0;J<U.locationSize;J++)T(U.location+J,ft/U.locationSize,zt,q,Ct*Xt,(Ht+ft/U.locationSize*J)*Xt,Q)}else{if(G.isInstancedBufferAttribute){for(let st=0;st<U.locationSize;st++)d(U.location+st,G.meshPerAttribute);D.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let st=0;st<U.locationSize;st++)m(U.location+st);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let st=0;st<U.locationSize;st++)T(U.location+st,ft/U.locationSize,zt,q,ft*Xt,ft/U.locationSize*st*Xt,Q)}}else if(O!==void 0){let q=O[z];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(U.location,q);break;case 3:i.vertexAttrib3fv(U.location,q);break;case 4:i.vertexAttrib4fv(U.location,q);break;default:i.vertexAttrib1fv(U.location,q)}}}}v()}function y(){b();for(let D in n){let P=n[D];for(let L in P){let w=P[L];for(let I in w){let F=w[I];for(let O in F)u(F[O].object),delete F[O];delete w[I]}}delete n[D]}}function S(D){if(n[D.id]===void 0)return;let P=n[D.id];for(let L in P){let w=P[L];for(let I in w){let F=w[I];for(let O in F)u(F[O].object),delete F[O];delete w[I]}}delete n[D.id]}function A(D){for(let P in n){let L=n[P];for(let w in L){let I=L[w];if(I[D.id]===void 0)continue;let F=I[D.id];for(let O in F)u(F[O].object),delete F[O];delete I[D.id]}}}function M(D){for(let P in n){let L=n[P],w=D.isInstancedMesh===!0?D.id:0,I=L[w];if(I!==void 0){for(let F in I){let O=I[F];for(let z in O)u(O[z].object),delete O[z];delete I[F]}delete L[w],Object.keys(L).length===0&&delete n[P]}}}function b(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:b,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function cg(i,t,e){let n;function s(o){n=o}function r(o,c){i.drawArrays(n,o,c),e.update(c,n,1)}function a(o,c,u){u!==0&&(i.drawArraysInstanced(n,o,c,u),e.update(c,n,u))}function l(o,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function ug(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){let M=A===We&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==bn&&A!==Bn&&!M&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function o(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=o(c);u!==c&&(Yt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:_,maxSamples:y,samples:S}}function hg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Yn,l=new $t,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,T=v*4,_=d.clippingState||null;o.value=_,_=u(g,f,T,p);for(let y=0;y!==T;++y)_[y]=e[y];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=o.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,_=p;T!==x;++T,_+=4)a.copy(h[T]).applyMatrix4(v,l),a.normal.toArray(m,_),m[_+3]=a.constant}o.value=m,o.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ir=4,fg=6,dg=20,pg=256,go=new Vi,$h=new gt,su=null,ru=0,ou=0,au=!1,mg=new B,gs=new B,Al=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=mg}=r;su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o,l),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(su,ru,ou),this._renderer.xr.enabled=au,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),su=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:We,format:zn,colorSpace:Ir,depthBuffer:!1},s=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gg(r)),this._blurMaterial=vg(r,t,e),this._ggxMaterial=xg(r,t,e)}return s}_compileMaterial(t){let e=new he(new de,t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,n,s,r){let o=new en(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor($h),h.toneMapping=$n,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new Jn,new Ve({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,d=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,d=!0):(m.color.copy($h),d=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(o.up.set(0,c[T],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+u[T],r.y,r.z)):_===1?(o.up.set(0,0,c[T]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+u[T],r.z)):(o.up.set(0,c[T],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+u[T]));let y=this._cubeSize;nr(s,_*y,T>2?y:0,y,y),h.setRenderTarget(s),d&&h.render(x,o),h.render(t,o)}h.toneMapping=p,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wi||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let o=this._cubeSize;nr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(a,go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let o=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,p=h*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-ir?n-g+ir:0),d=4*(this._cubeSize-x);o.envMap.value=t.texture,o.roughness.value=p,o.mipInt.value=g-e,nr(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(l,go),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,nr(t,m,d,3*x,2*x),s.setRenderTarget(t),s.render(l,go)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,o=this._lodMeshes[s];o.material=l;let c=l.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-ir?s-this._lodMax+ir:0),f=4*(this._cubeSize-u);nr(e,h,f,3*u,2*u),a.setRenderTarget(e),a.render(o,go)}};function gg(i){let t=[],e=[],n=i,s=i-ir+1+fg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),o=-l,c=1+l,u=[o,o,c,o,c,c,o,o,c,c,o,c],h=6,f=6,p=3,g=new Float32Array(p*f*h),x=new Float32Array(p*f*h);for(let d=0;d<h;d++){let v=d%3*2/3-1,T=d>2?0:-1,_=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(_,p*f*d);for(let y=0;y<f;y++){let S=u[y*2]*2-1,A=u[y*2+1]*2-1;d===0?gs.set(1,A,S):d===1?gs.set(-S,1,-A):d===2?gs.set(-S,A,1):d===3?gs.set(-1,A,-S):d===4?gs.set(-S,-1,A):gs.set(S,A,-1),gs.toArray(x,(d*f+y)*p)}}let m=new de;m.setAttribute("position",new nn(g,p)),m.setAttribute("outputDirection",new nn(x,p)),e.push(new he(m,null)),n>ir&&n--}return{lodMeshes:e,sizeLods:t}}function Kh(i,t,e){let n=new Ee(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xg(i,t,e){return new ce({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function vg(i,t,e){return new ce({name:"SphericalGaussianBlur",defines:{SAMPLES:dg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Qh(){return new ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function jh(){return new ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rl=class extends Ee{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jn(5,5,5),r=new ce({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Sn});r.uniforms.tEquirect.value=e;let a=new he(s,r),l=e.minFilter;return e.minFilter===On&&(e.minFilter=ke),new Na(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function _g(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Oa||p===Ba)if(t.has(f)){let g=t.get(f).texture;return l(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new Rl(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),l(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,g=p===Oa||p===Ba,x=p===Wi||p===ps;if(g||x){let m=e.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Al(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&o(v)?(n===null&&(n=new Al(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function l(f,p){return p===Oa?f.mapping=Wi:p===Ba&&(f.mapping=ps),f}function o(f){let p=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function c(f){let p=f.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function yg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&as("WebGLRenderer: "+n+" extension not supported."),s}}}function Mg(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function o(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(g===void 0)return;if(p!==null){let v=p.array;x=p.version;for(let T=0,_=v.length;T<_;T+=3){let y=v[T+0],S=v[T+1],A=v[T+2];f.push(y,S,S,A,A,y)}}else{let v=g.array;x=g.version;for(let T=0,_=v.length/3-1;T<_;T+=3){let y=T+0,S=T+1,A=T+2;f.push(y,S,S,A,A,y)}}let m=new(g.count>=65535?zr:Br)(f,1);m.version=x;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:l,update:o,getWireframeAttribute:u}}function Sg(i,t,e){let n;function s(h){n=h}let r,a;function l(h){r=h.type,a=h.bytesPerElement}function o(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function c(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*a,p),e.update(f,n,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];e.update(x,n,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function bg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tg(i,t,e){let n=new WeakMap,s=new Me;function r(a,l,o){let c=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(l);if(f===void 0||f.count!==h){let b=function(){A.dispose(),n.delete(l),l.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let _=l.attributes.position.count*T,y=1;_>t.maxTextureSize&&(y=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*y*4*h),A=new Ur(S,_,y,h);A.type=Bn,A.needsUpdate=!0;let M=T*4;for(let C=0;C<h;C++){let D=m[C],P=d[C],L=v[C],w=_*y*4*C;for(let I=0;I<D.count;I++){let F=I*M;p===!0&&(s.fromBufferAttribute(D,I),S[w+F+0]=s.x,S[w+F+1]=s.y,S[w+F+2]=s.z,S[w+F+3]=0),g===!0&&(s.fromBufferAttribute(P,I),S[w+F+4]=s.x,S[w+F+5]=s.y,S[w+F+6]=s.z,S[w+F+7]=0),x===!0&&(s.fromBufferAttribute(L,I),S[w+F+8]=s.x,S[w+F+9]=s.y,S[w+F+10]=s.z,S[w+F+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new kt(_,y)},n.set(l,f),l.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",g),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Eg(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function l(){r=new WeakMap}function o(c){let u=c.target;u.removeEventListener("dispose",o),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:l}}var wg={[to]:"LINEAR_TONE_MAPPING",[eo]:"REINHARD_TONE_MAPPING",[no]:"CINEON_TONE_MAPPING",[io]:"ACES_FILMIC_TONE_MAPPING",[ro]:"AGX_TONE_MAPPING",[ds]:"NEUTRAL_TONE_MAPPING",[so]:"CUSTOM_TONE_MAPPING"};function Ag(i,t,e,n,s,r){let a=new Ee(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,c=new de;c.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new qt([0,2,0,0,2,0],2));let u=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new he(c,u),f=new Vi(-1,1,1,-1,0,1),p=null,g=null,x=!1,m,d=null,v=[],T=!1;this.setSize=function(_,y){a.setSize(_,y),l!==null&&l.setSize(_,y),o!==null&&o.setSize(_,y);for(let S=0;S<v.length;S++){let A=v[S];A.setSize&&A.setSize(_,y)}},this.setEffects=function(_){v=_,T=v.length>0&&v[0].isRenderPass===!0;let y=a.width,S=a.height;v.length>0&&l===null&&(l=new Ee(y,S,{type:We,depthBuffer:!1,stencilBuffer:!1}),o=new Ee(y,S,{type:We,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let M=v[A];M.setSize&&M.setSize(y,S)}},this.begin=function(_,y){if(x||_.toneMapping===$n&&v.length===0)return!1;if(d=y,y!==null){let S=y.width,A=y.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return T===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=$n,!0},this.hasRenderPass=function(){return T},this.end=function(_,y){_.toneMapping=m,x=!0;let S=a,A=l;for(let M=0;M<v.length;M++){let b=v[M];b.enabled!==!1&&(b.render(_,A,S,y),b.needsSwap!==!1&&(S=A,A=A===l?o:l))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,u.defines={},ie.getTransfer(p)===fe&&(u.defines.SRGB_TRANSFER="");let M=wg[g];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(d),_.render(h,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),c.dispose(),u.dispose()}}var yf=new mn,uu=new Bi(1,1),Mf=new Ur,Sf=new _a,bf=new Vr,tf=[],ef=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function rr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Il(i,t){let e=ef[t];e===void 0&&(e=new Int32Array(t),ef[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;rf.set(n),i.uniformMatrix2fv(this.addr,!1,rf),qe(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;sf.set(n),i.uniformMatrix3fv(this.addr,!1,sf),qe(e,n)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;nf.set(n),i.uniformMatrix4fv(this.addr,!1,nf),qe(e,n)}}function Ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uu.compareFunction=e.isReversedDepthBuffer()?Tl:bl,r=uu):r=yf,e.setTexture2D(t||r,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sf,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bf,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mf,s)}function Yg(i){switch(i){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Ig;case 35674:return Lg;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}function Zg(i,t){i.uniform1fv(this.addr,t)}function Jg(i,t){let e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function $g(i,t){let e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function Kg(i,t){let e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function Qg(i,t){let e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jg(i,t){let e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tx(i,t){let e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ex(i,t){i.uniform1iv(this.addr,t)}function nx(i,t){i.uniform2iv(this.addr,t)}function ix(i,t){i.uniform3iv(this.addr,t)}function sx(i,t){i.uniform4iv(this.addr,t)}function rx(i,t){i.uniform1uiv(this.addr,t)}function ox(i,t){i.uniform2uiv(this.addr,t)}function ax(i,t){i.uniform3uiv(this.addr,t)}function lx(i,t){i.uniform4uiv(this.addr,t)}function cx(i,t,e){let n=this.cache,s=t.length,r=Il(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uu:a=yf;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function ux(i,t,e){let n=this.cache,s=t.length,r=Il(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sf,r[a])}function hx(i,t,e){let n=this.cache,s=t.length,r=Il(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bf,r[a])}function fx(i,t,e){let n=this.cache,s=t.length,r=Il(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mf,r[a])}function dx(i){switch(i){case 5126:return Zg;case 35664:return Jg;case 35665:return $g;case 35666:return Kg;case 35674:return Qg;case 35675:return jg;case 35676:return tx;case 5124:case 35670:return ex;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return fx}}var hu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}},fu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dx(e.type)}},du=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},lu=/(\w+)(\])?(\[|\.)?/g;function of(i,t){i.seq.push(t),i.map[t.id]=t}function px(i,t,e){let n=i.name,s=n.length;for(lu.lastIndex=0;;){let r=lu.exec(n),a=lu.lastIndex,l=r[1],o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){of(e,c===void 0?new hu(l,i,t):new fu(l,i,t));break}else{let h=e.map[l];h===void 0&&(h=new du(l),of(e,h)),e=h}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),o=t.getUniformLocation(e,l.name);px(l,o,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function af(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var mx=37297,gx=0;function xx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var lf=new $t;function vx(i){ie._getMatrix(lf,ie.workingColorSpace,i);let t=`mat3( ${lf.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+xx(i.getShaderSource(t),l)}else return r}function _x(i,t){let e=vx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var yx={[to]:"Linear",[eo]:"Reinhard",[no]:"Cineon",[io]:"ACESFilmic",[ro]:"AgX",[ds]:"Neutral",[so]:"Custom"};function Mx(i,t){let e=yx[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wl=new B;function Sx(){ie.getLuminanceCoefficients(wl);let i=wl.x.toFixed(4),t=wl.y.toFixed(4),e=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function Tx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ex(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function vo(i){return i!==""}function uf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(i){return i.replace(wx,Rx)}var Ax=new Map;function Rx(i,t){let e=te[t];if(e===void 0){let n=Ax.get(t);if(n!==void 0)e=te[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return pu(e)}var Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(i){return i.replace(Cx,Px)}function Px(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function df(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Ix={[hs]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function Lx(i){return Ix[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dx={[Wi]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE_UV"};function Nx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Dx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ux={[ps]:"ENVMAP_MODE_REFRACTION"};function Fx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ux[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ox={[zc]:"ENVMAP_BLENDING_MULTIPLY",[Ph]:"ENVMAP_BLENDING_MIX",[Ih]:"ENVMAP_BLENDING_ADD"};function Bx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ox[i.combine]||"ENVMAP_BLENDING_NONE"}function zx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function kx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,o=Lx(e),c=Nx(e),u=Fx(e),h=Bx(e),f=zx(e),p=bx(e),g=Tx(r),x=s.createProgram(),m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vo).join(`
`),d.length>0&&(d+=`
`)):(m=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),d=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?te.tonemapping_pars_fragment:"",e.toneMapping!==$n?Mx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,_x("linearToOutputTexel",e.outputColorSpace),Sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),a=pu(a),a=uf(a,e),a=hf(a,e),l=pu(l),l=uf(l,e),l=hf(l,e),a=ff(a),l=ff(l),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=v+m+a,_=v+d+l,y=af(s,s.VERTEX_SHADER,T),S=af(s,s.FRAGMENT_SHADER,_);s.attachShader(x,y),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(D){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(y)||"",w=s.getShaderInfoLog(S)||"",I=P.trim(),F=L.trim(),O=w.trim(),z=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,S);else{let G=cf(s,y,"vertex"),q=cf(s,S,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+G+`
`+q)}else I!==""?Yt("WebGLProgram: Program Info Log:",I):(F===""||O==="")&&(U=!1);U&&(D.diagnostics={runnable:z,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:d}})}s.deleteShader(y),s.deleteShader(S),M=new sr(s,x),b=Ex(s,x)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,mx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=S,this}var Hx=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gu(t),e.set(t,n)),n}},gu=class{constructor(t){this.id=Hx++,this.code=t,this.usedTimes=0}};function Vx(i){return i===qi||i===fo||i===po}function Gx(i,t,e,n,s,r){let a=new Fr,l=new mu,o=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return o.add(M),M===0?"uv":`uv${M}`}function x(M,b,C,D,P,L){let w=D.fog,I=P.geometry,F=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,z=t.get(M.envMap||F,O),U=z&&z.mapping===oo?z.image.height:null,G=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Yt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ft=q!==void 0?q.length:0,xt=0;I.morphAttributes.position!==void 0&&(xt=1),I.morphAttributes.normal!==void 0&&(xt=2),I.morphAttributes.color!==void 0&&(xt=3);let ee,zt,Xt,Q;if(G){let ne=oi[G];ee=ne.vertexShader,zt=ne.fragmentShader}else{ee=M.vertexShader,zt=M.fragmentShader;let ne=l.getVertexShaderStage(M),se=l.getFragmentShaderStage(M);l.update(M,ne,se),Xt=ne.id,Q=se.id}let st=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Ht=P.isInstancedMesh===!0,J=P.isBatchedMesh===!0,at=!!M.map,ht=!!M.matcap,ot=!!z,et=!!M.aoMap,yt=!!M.lightMap,Ft=!!M.bumpMap&&M.wireframe===!1,jt=!!M.normalMap,Vt=!!M.displacementMap,Gt=!!M.emissiveMap,ae=!!M.metalnessMap,le=!!M.roughnessMap,V=M.anisotropy>0,Ie=M.clearcoat>0,re=M.dispersion>0,N=M.retroreflectivity>0,E=M.iridescence>0,X=M.sheen>0,$=M.transmission>0,j=V&&!!M.anisotropyMap,_t=Ie&&!!M.clearcoatMap,Tt=Ie&&!!M.clearcoatNormalMap,tt=Ie&&!!M.clearcoatRoughnessMap,it=E&&!!M.iridescenceMap,Et=E&&!!M.iridescenceThicknessMap,Ot=X&&!!M.sheenColorMap,wt=X&&!!M.sheenRoughnessMap,At=!!M.specularMap,Bt=!!M.specularColorMap,Nt=!!M.specularIntensityMap,Kt=$&&!!M.transmissionMap,H=$&&!!M.thicknessMap,St=!!M.gradientMap,nt=!!M.alphaMap,vt=M.alphaTest>0,It=!!M.alphaHash,W=!!M.extensions,bt=$n;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(bt=i.toneMapping);let dt={shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:zt,defines:M.defines,customVertexShaderID:Xt,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:J,batchingColor:J&&P._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&P.instanceColor!==null,instancingMorph:Ht&&P.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:ht,envMap:ot,envMapMode:ot&&z.mapping,envMapCubeUVHeight:U,aoMap:et,lightMap:yt,bumpMap:Ft,normalMap:jt,displacementMap:Vt,emissiveMap:Gt,normalMapObjectSpace:jt&&M.normalMapType===Nh,normalMapTangentSpace:jt&&M.normalMapType===Sl,packedNormalMap:jt&&M.normalMapType===Sl&&Vx(M.normalMap.format),metalnessMap:ae,roughnessMap:le,anisotropy:V,anisotropyMap:j,clearcoat:Ie,clearcoatMap:_t,clearcoatNormalMap:Tt,clearcoatRoughnessMap:tt,dispersion:re,retroreflection:N,iridescence:E,iridescenceMap:it,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:Ot,sheenRoughnessMap:wt,specularMap:At,specularColorMap:Bt,specularIntensityMap:Nt,transmission:$,transmissionMap:Kt,thicknessMap:H,gradientMap:St,opaque:M.transparent===!1&&M.blending===Qs&&M.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:It,combine:M.combine,mapUv:at&&g(M.map.channel),aoMapUv:et&&g(M.aoMap.channel),lightMapUv:yt&&g(M.lightMap.channel),bumpMapUv:Ft&&g(M.bumpMap.channel),normalMapUv:jt&&g(M.normalMap.channel),displacementMapUv:Vt&&g(M.displacementMap.channel),emissiveMapUv:Gt&&g(M.emissiveMap.channel),metalnessMapUv:ae&&g(M.metalnessMap.channel),roughnessMapUv:le&&g(M.roughnessMap.channel),anisotropyMapUv:j&&g(M.anisotropyMap.channel),clearcoatMapUv:_t&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(M.sheenRoughnessMap.channel),specularMapUv:At&&g(M.specularMap.channel),specularColorMapUv:Bt&&g(M.specularColorMap.channel),specularIntensityMapUv:Nt&&g(M.specularIntensityMap.channel),transmissionMapUv:Kt&&g(M.transmissionMap.channel),thicknessMapUv:H&&g(M.thicknessMap.channel),alphaMapUv:nt&&g(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(jt||V),vertexNormals:!!I.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(at||nt),fog:!!w,useFog:M.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||I.attributes.normal===void 0&&jt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ct,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:xt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:Gt&&M.emissiveMap.isVideoTexture===!0&&ie.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qe,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:W&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(W&&M.extensions.multiDraw===!0||J)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=o.has(1),dt.vertexUv2s=o.has(2),dt.vertexUv3s=o.has(3),o.clear(),dt}function m(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(d(b,M),v(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function d(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numSunLights),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numSunLightShadows),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function T(M){let b=p[M.type],C;if(b){let D=oi[b];C=Mi.clone(D.uniforms)}else C=M.uniforms;return C}function _(M,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new kx(i,b,M,s),c.push(C),u.set(b,C)),C}function y(M){if(--M.usedTimes===0){let b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function S(M){l.remove(M)}function A(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:_,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:A}}function Wx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function l(f,p,g,x,m,d){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},i[t]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=d),t++,v}function o(f,p,g,x,m,d,v){v.reversedDepth===!0&&(m=-m);let T=l(f,p,g,x,m,d);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(f,p,g,x,m,d){let v=l(f,p,g,x,m,d);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(f,p){e.length>1&&e.sort(f||Xx),n.length>1&&n.sort(p||pf),s.length>1&&s.sort(p||pf)}function h(){for(let f=t,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:u}}function qx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new mf,i.set(n,[a])):s>=r.length?(a=new mf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new gt};break;case"SpotLight":e={position:new B,direction:new B,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Jx=0;function $x(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kx(i){let t=new Yx,e=Zx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Wt,a=new Wt;function l(c){let u=0,h=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,T=0,_=0,y=0,S=0,A=0,M=0,b=0,C=0;c.sort($x);for(let P=0,L=c.length;P<L;P++){let w=c[P],I=w.color,F=w.intensity,O=w.distance,z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===qi?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=I.r*F,h+=I.g*F,f+=I.b*F;else if(w.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(w.sh.coefficients[U],F);C++}else if(w.isSunLight){let U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let G=w.shadow,q=e.get(w);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[g]=q,n.sunShadowMap[g]=z;let ft=G.getViewportCount();for(let xt=0;xt<ft;xt++)n.sunShadowMatrix[x+xt]=G.getMatrix(xt),n.sunShadowCascade[x+xt]=G._cascadeData[xt];x+=ft,g++}n.sun[p]=U,p++}else if(w.isDirectionalLight){let U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let G=w.shadow,q=e.get(w);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=w.shadow.matrix,y++}n.directional[m]=U,m++}else if(w.isSpotLight){let U=t.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(I).multiplyScalar(F),U.distance=O,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,n.spot[v]=U;let G=w.shadow;if(w.map&&(n.spotLightMap[M]=w.map,M++,G.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[v]=G.matrix,w.castShadow){let q=e.get(w);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=z,A++}v++}else if(w.isRectAreaLight){let U=t.get(w);U.color.copy(I).multiplyScalar(F),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),n.rectArea[T]=U,T++}else if(w.isPointLight){let U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){let G=w.shadow,q=e.get(w);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,n.pointShadow[d]=q,n.pointShadowMap[d]=z,n.pointShadowMatrix[d]=w.shadow.matrix,S++}n.point[d]=U,d++}else if(w.isHemisphereLight){let U=t.get(w);U.skyColor.copy(w.color).multiplyScalar(F),U.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[_]=U,_++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==M||D.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=d,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,D.sunLength=p,D.directionalLength=m,D.pointLength=d,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=M,D.numLightProbes=C,n.version=Jx++)}function o(c,u){let h=0,f=0,p=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let _=c[v];if(_.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),h++}else if(_.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(_.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:o,state:n}}function gf(i){let t=new Kx(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function l(f){n.push(f)}function o(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:l,pushLightProbeGrid:o}}function Qx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new gf(i),t.set(s,[l])):r>=a.length?(l=new gf(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
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
}`,ev=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],nv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],xf=new Wt,xo=new B,cu=new B;function iv(i,t,e){let n=new qs,s=new kt,r=new kt,a=new Me,l=new Sa,o=new ba,c={},u=e.maxTextureSize,h={[Gi]:sn,[sn]:Gi,[Qe]:Qe},f=new ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:jx,fragmentShader:tv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new he(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let d=this.type;this.render=function(S,A,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===hh&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hs);let b=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Sn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=d!==this.type;L&&A.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(I=>I.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,I=S.length;w<I;w++){let F=S[w],O=F.shadow;if(O===void 0){Yt("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let z=O.getFrameExtents();s.multiply(z),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/z.x),s.x=r.x*z.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/z.y),s.y=r.y*z.y,O.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=U,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ks){if(F.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ee(s.x,s.y,{format:qi,type:We,minFilter:ke,magFilter:ke,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new Bi(s.x,s.y,Bn),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=ni,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Oe,O.map.depthTexture.magFilter=Oe}else F.isPointLight?(O.map=new Rl(s.x),O.map.depthTexture=new ya(s.x,Kn)):(O.map=new Ee(s.x,s.y),O.map.depthTexture=new Bi(s.x,s.y,Kn)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=ni,this.type===hs?(O.map.depthTexture.compareFunction=U?Tl:bl,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Oe,O.map.depthTexture.magFilter=Oe);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();F.isPointLight!==!0&&O.updateMatrices(F,M);for(let q=0;q<G;q++){let ft=O.getCamera(q);if(F.isPointLight){let xt=O.camera,ee=O.matrix,zt=F.distance||xt.far;zt!==xt.far&&(xt.far=zt,xt.updateProjectionMatrix()),xo.setFromMatrixPosition(F.matrixWorld),xt.position.copy(xo),cu.copy(xt.position),cu.add(ev[q]),xt.up.copy(nv[q]),xt.lookAt(cu),xt.updateMatrixWorld(),ee.makeTranslation(-xo.x,-xo.y,-xo.z),xf.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(xf,xt.coordinateSystem,xt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,q),i.clear();else{q===0&&(i.setRenderTarget(O.map),i.clear());let xt=O.getViewport(q);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),P.viewport(a)}n=O.getFrustum(q),_(A,M,ft,F,this.type)}O.isPointLightShadow!==!0&&this.type===Ks&&v(O,M),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,C,D)};function v(S,A){let M=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ee(s.x,s.y,{format:qi,type:We}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,M,f,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,M,p,x,null)}function T(S,A,M,b){let C=null,D=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)C=D;else if(C=M.isPointLight===!0?o:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=C.uuid,L=A.uuid,w=c[P];w===void 0&&(w={},c[P]=w);let I=w[L];I===void 0&&(I=C.clone(),w[L]=I,A.addEventListener("dispose",y)),C=I}if(C.visible=A.visible,C.wireframe=A.wireframe,b===Ks?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=i.properties.get(C);P.light=M}return C}function _(S,A,M,b,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Ks)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let L=t.update(S),w=S.material;if(Array.isArray(w)){let I=L.groups;for(let F=0,O=I.length;F<O;F++){let z=I[F],U=w[z.materialIndex];if(U&&U.visible){let G=T(S,U,b,C);S.onBeforeShadow(i,S,A,M,L,G,z),i.renderBufferDirect(M,null,L,G,S,z),S.onAfterShadow(i,S,A,M,L,G,z)}}}else if(w.visible){let I=T(S,w,b,C);S.onBeforeShadow(i,S,A,M,L,I,null),i.renderBufferDirect(M,null,L,I,S,null),S.onAfterShadow(i,S,A,M,L,I,null)}}let P=S.children;for(let L=0,w=P.length;L<w;L++)_(P[L],A,M,b,C)}function y(S){S.target.removeEventListener("dispose",y);for(let M in c){let b=c[M],C=S.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function sv(i,t){function e(){let H=!1,St=new Me,nt=null,vt=new Me(0,0,0,0);return{setMask:function(It){nt!==It&&!H&&(i.colorMask(It,It,It,It),nt=It)},setLocked:function(It){H=It},setClear:function(It,W,bt,dt,ne){ne===!0&&(It*=dt,W*=dt,bt*=dt),St.set(It,W,bt,dt),vt.equals(St)===!1&&(i.clearColor(It,W,bt,dt),vt.copy(St))},reset:function(){H=!1,nt=null,vt.set(-1,0,0,0)}}}function n(){let H=!1,St=!1,nt=null,vt=null,It=null;return{setReversed:function(W){if(St!==W){let bt=t.get("EXT_clip_control");W?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),St=W;let dt=It;It=null,this.setClear(dt)}},getReversed:function(){return St},setTest:function(W){W?st(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(W){nt!==W&&!H&&(i.depthMask(W),nt=W)},setFunc:function(W){if(St&&(W=qh[W]),vt!==W){switch(W){case aa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=W}},setLocked:function(W){H=W},setClear:function(W){It!==W&&(It=W,St&&(W=1-W),i.clearDepth(W))},reset:function(){H=!1,nt=null,vt=null,It=null,St=!1}}}function s(){let H=!1,St=null,nt=null,vt=null,It=null,W=null,bt=null,dt=null,ne=null;return{setTest:function(se){H||(se?st(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(se){St!==se&&!H&&(i.stencilMask(se),St=se)},setFunc:function(se,_e,fn){(nt!==se||vt!==_e||It!==fn)&&(i.stencilFunc(se,_e,fn),nt=se,vt=_e,It=fn)},setOp:function(se,_e,fn){(W!==se||bt!==_e||dt!==fn)&&(i.stencilOp(se,_e,fn),W=se,bt=_e,dt=fn)},setLocked:function(se){H=se},setClear:function(se){ne!==se&&(i.clearStencil(se),ne=se)},reset:function(){H=!1,St=null,nt=null,vt=null,It=null,W=null,bt=null,dt=null,ne=null}}}let r=new e,a=new n,l=new s,o=new WeakMap,c=new WeakMap,u={},h={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,T=null,_=null,y=null,S=null,A=null,M=new gt(0,0,0),b=0,C=!1,D=null,P=null,L=null,w=null,I=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,z=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),O=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),O=z>=2);let G=null,q={},ft=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),ee=new Me().fromArray(ft),zt=new Me().fromArray(xt);function Xt(H,St,nt,vt){let It=new Uint8Array(4),W=i.createTexture();i.bindTexture(H,W),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<nt;bt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(St+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return W}let Q={};Q[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),st(i.DEPTH_TEST),a.setFunc(Hs),Ft(!1),jt(Nc),st(i.CULL_FACE),et(Sn);function st(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function Ct(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Ht(H,St){return f[H]!==St?(i.bindFramebuffer(H,St),f[H]=St,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St),!0):!1}function J(H,St){let nt=g,vt=!1;if(H){nt=p.get(St),nt===void 0&&(nt=[],p.set(St,nt));let It=H.textures;if(nt.length!==It.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let W=0,bt=It.length;W<bt;W++)nt[W]=i.COLOR_ATTACHMENT0+W;nt.length=It.length,vt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(nt)}function at(H){return x!==H?(i.useProgram(H),x=H,!0):!1}let ht={[fs]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[ph]:i.FUNC_REVERSE_SUBTRACT};ht[mh]=i.MIN,ht[gh]=i.MAX;let ot={[xh]:i.ZERO,[vh]:i.ONE,[_h]:i.SRC_COLOR,[Oc]:i.SRC_ALPHA,[Eh]:i.SRC_ALPHA_SATURATE,[bh]:i.DST_COLOR,[Mh]:i.DST_ALPHA,[yh]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[Th]:i.ONE_MINUS_DST_COLOR,[Sh]:i.ONE_MINUS_DST_ALPHA,[wh]:i.CONSTANT_COLOR,[Ah]:i.ONE_MINUS_CONSTANT_COLOR,[Rh]:i.CONSTANT_ALPHA,[Ch]:i.ONE_MINUS_CONSTANT_ALPHA};function et(H,St,nt,vt,It,W,bt,dt,ne,se){if(H===Sn){m===!0&&(Ct(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),H!==fh){if(H!==d||se!==C){if((v!==fs||y!==fs)&&(i.blendEquation(i.FUNC_ADD),v=fs,y=fs),se)switch(H){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",H);break}else switch(H){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uc:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",H);break}T=null,_=null,S=null,A=null,M.set(0,0,0),b=0,d=H,C=se}return}It=It||St,W=W||nt,bt=bt||vt,(St!==v||It!==y)&&(i.blendEquationSeparate(ht[St],ht[It]),v=St,y=It),(nt!==T||vt!==_||W!==S||bt!==A)&&(i.blendFuncSeparate(ot[nt],ot[vt],ot[W],ot[bt]),T=nt,_=vt,S=W,A=bt),(dt.equals(M)===!1||ne!==b)&&(i.blendColor(dt.r,dt.g,dt.b,ne),M.copy(dt),b=ne),d=H,C=!1}function yt(H,St){H.side===Qe?Ct(i.CULL_FACE):st(i.CULL_FACE);let nt=H.side===sn;St&&(nt=!nt),Ft(nt),H.blending===Qs&&H.transparent===!1?et(Sn):et(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let vt=H.stencilWrite;l.setTest(vt),vt&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(H){D!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),D=H)}function jt(H){H!==ch?(st(i.CULL_FACE),H!==P&&(H===Nc?i.cullFace(i.BACK):H===uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),P=H}function Vt(H){H!==L&&(O&&i.lineWidth(H),L=H)}function Gt(H,St,nt){H?(st(i.POLYGON_OFFSET_FILL),(w!==St||I!==nt)&&(w=St,I=nt,a.getReversed()&&(St=-St),i.polygonOffset(St,nt))):Ct(i.POLYGON_OFFSET_FILL)}function ae(H){H?st(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function le(H){H===void 0&&(H=i.TEXTURE0+F-1),G!==H&&(i.activeTexture(H),G=H)}function V(H,St,nt){nt===void 0&&(G===null?nt=i.TEXTURE0+F-1:nt=G);let vt=q[nt];vt===void 0&&(vt={type:void 0,texture:void 0},q[nt]=vt),(vt.type!==H||vt.texture!==St)&&(G!==nt&&(i.activeTexture(nt),G=nt),i.bindTexture(H,St||Q[H]),vt.type=H,vt.texture=St)}function Ie(){let H=q[G];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function E(){try{i.texSubImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function X(){try{i.texSubImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function _t(){try{i.texStorage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function Tt(){try{i.texStorage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function tt(){try{i.texImage2D(...arguments)}catch(H){Zt("WebGLState:",H)}}function it(){try{i.texImage3D(...arguments)}catch(H){Zt("WebGLState:",H)}}function Et(H){return h[H]!==void 0?h[H]:i.getParameter(H)}function Ot(H,St){h[H]!==St&&(i.pixelStorei(H,St),h[H]=St)}function wt(H){ee.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ee.copy(H))}function At(H){zt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),zt.copy(H))}function Bt(H,St){let nt=c.get(St);nt===void 0&&(nt=new WeakMap,c.set(St,nt));let vt=nt.get(H);vt===void 0&&(vt=i.getUniformBlockIndex(St,H.name),nt.set(H,vt))}function Nt(H,St){let vt=c.get(St).get(H);o.get(St)!==vt&&(i.uniformBlockBinding(St,vt,H.__bindingPointIndex),o.set(St,vt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},G=null,q={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,v=null,T=null,_=null,y=null,S=null,A=null,M=new gt(0,0,0),b=0,C=!1,D=null,P=null,L=null,w=null,I=null,ee.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:st,disable:Ct,bindFramebuffer:Ht,drawBuffers:J,useProgram:at,setBlending:et,setMaterial:yt,setFlipSided:Ft,setCullFace:jt,setLineWidth:Vt,setPolygonOffset:Gt,setScissorTest:ae,activeTexture:le,bindTexture:V,unbindTexture:Ie,compressedTexImage2D:re,compressedTexImage3D:N,texImage2D:tt,texImage3D:it,pixelStorei:Ot,getParameter:Et,updateUBOMapping:Bt,uniformBlockBinding:Nt,texStorage2D:_t,texStorage3D:Tt,texSubImage2D:E,texSubImage3D:X,compressedTexSubImage2D:$,compressedTexSubImage3D:j,scissor:wt,viewport:At,reset:Kt}}function rv(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,u=new WeakMap,h=new Set,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,E){return g?new OffscreenCanvas(N,E):Dr("canvas")}function m(N,E,X){let $=1,j=re(N);if((j.width>X||j.height>X)&&($=X/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let _t=Math.floor($*j.width),Tt=Math.floor($*j.height);f===void 0&&(f=x(_t,Tt));let tt=E?x(_t,Tt):f;return tt.width=_t,tt.height=Tt,tt.getContext("2d").drawImage(N,0,0,_t,Tt),Yt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+_t+"x"+Tt+")."),tt}else return"data"in N&&Yt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),N;return N}function d(N){return N.generateMipmaps}function v(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,E,X,$,j,_t=!1){if(N!==null){if(i[N]!==void 0)return i[N];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Tt;$&&(Tt=t.get("EXT_texture_norm16"),Tt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=E;if(E===i.RED&&(X===i.FLOAT&&(tt=i.R32F),X===i.HALF_FLOAT&&(tt=i.R16F),X===i.UNSIGNED_BYTE&&(tt=i.R8),X===i.UNSIGNED_SHORT&&Tt&&(tt=Tt.R16_EXT),X===i.SHORT&&Tt&&(tt=Tt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.R8UI),X===i.UNSIGNED_SHORT&&(tt=i.R16UI),X===i.UNSIGNED_INT&&(tt=i.R32UI),X===i.BYTE&&(tt=i.R8I),X===i.SHORT&&(tt=i.R16I),X===i.INT&&(tt=i.R32I)),E===i.RG&&(X===i.FLOAT&&(tt=i.RG32F),X===i.HALF_FLOAT&&(tt=i.RG16F),X===i.UNSIGNED_BYTE&&(tt=i.RG8),X===i.UNSIGNED_SHORT&&Tt&&(tt=Tt.RG16_EXT),X===i.SHORT&&Tt&&(tt=Tt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RG8UI),X===i.UNSIGNED_SHORT&&(tt=i.RG16UI),X===i.UNSIGNED_INT&&(tt=i.RG32UI),X===i.BYTE&&(tt=i.RG8I),X===i.SHORT&&(tt=i.RG16I),X===i.INT&&(tt=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),X===i.UNSIGNED_INT&&(tt=i.RGB32UI),X===i.BYTE&&(tt=i.RGB8I),X===i.SHORT&&(tt=i.RGB16I),X===i.INT&&(tt=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),X===i.UNSIGNED_INT&&(tt=i.RGBA32UI),X===i.BYTE&&(tt=i.RGBA8I),X===i.SHORT&&(tt=i.RGBA16I),X===i.INT&&(tt=i.RGBA32I)),E===i.RGB&&(X===i.UNSIGNED_SHORT&&Tt&&(tt=Tt.RGB16_EXT),X===i.SHORT&&Tt&&(tt=Tt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),E===i.RGBA){let it=_t?Lr:ie.getTransfer(j);X===i.FLOAT&&(tt=i.RGBA32F),X===i.HALF_FLOAT&&(tt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(tt=it===fe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Tt&&(tt=Tt.RGBA16_EXT),X===i.SHORT&&Tt&&(tt=Tt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(N,E){let X;return N?E===null||E===Kn||E===tr?X=i.DEPTH24_STENCIL8:E===Bn?X=i.DEPTH32F_STENCIL8:E===js&&(X=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Kn||E===tr?X=i.DEPTH_COMPONENT24:E===Bn?X=i.DEPTH_COMPONENT32F:E===js&&(X=i.DEPTH_COMPONENT16),X}function S(N,E){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Oe&&N.minFilter!==ke?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function A(N){let E=N.target;E.removeEventListener("dispose",A),b(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function M(N){let E=N.target;E.removeEventListener("dispose",M),D(E)}function b(N){let E=n.get(N);if(E.__webglInit===void 0)return;let X=N.source,$=p.get(X);if($){let j=$[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(N),Object.keys($).length===0&&p.delete(X)}n.remove(N)}function C(N){let E=n.get(N);i.deleteTexture(E.__webglTexture);let X=N.source,$=p.get(X);delete $[E.__cacheKey],a.memory.textures--}function D(N){let E=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let j=0;j<E.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(E.__webglFramebuffer[$][j]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let X=N.textures;for(let $=0,j=X.length;$<j;$++){let _t=n.get(X[$]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(X[$])}n.remove(N)}let P=0;function L(){P=0}function w(){return P}function I(N){P=N}function F(){let N=P;return N>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,N}function O(N){let E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function z(N,E){let X=n.get(N);if(N.isVideoTexture&&V(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){let $=N.image;if($===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(X,N,E);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function U(N,E){let X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){Ct(X,N,E);return}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function G(N,E){let X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){Ct(X,N,E);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function q(N,E){let X=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&X.__version!==N.version){Ht(X,N,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}let ft={[pa]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},xt={[Oe]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[ao]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},ee={[Fh]:i.NEVER,[Hh]:i.ALWAYS,[Oh]:i.LESS,[bl]:i.LEQUAL,[Bh]:i.EQUAL,[Tl]:i.GEQUAL,[zh]:i.GREATER,[kh]:i.NOTEQUAL};function zt(N,E){if(E.type===Bn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ke||E.magFilter===za||E.magFilter===ao||E.magFilter===On||E.minFilter===ke||E.minFilter===za||E.minFilter===ao||E.minFilter===On)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ft[E.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ft[E.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ft[E.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,xt[E.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ee[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Oe||E.minFilter!==ao&&E.minFilter!==On||E.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Xt(N,E){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",A));let $=E.source,j=p.get($);j===void 0&&(j={},p.set($,j));let _t=O(E);if(_t!==N.__cacheKey){j[_t]===void 0&&(j[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),j[_t].usedTimes++;let Tt=j[N.__cacheKey];Tt!==void 0&&(j[N.__cacheKey].usedTimes--,Tt.usedTimes===0&&C(E)),N.__cacheKey=_t,N.__webglTexture=j[_t].texture}return X}function Q(N,E,X){return Math.floor(Math.floor(N/X)/E)}function st(N,E,X,$){let _t=N.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,X,$,E.data);else{_t.sort((Ot,wt)=>Ot.start-wt.start);let Tt=0;for(let Ot=1;Ot<_t.length;Ot++){let wt=_t[Tt],At=_t[Ot],Bt=wt.start+wt.count,Nt=Q(At.start,E.width,4),Kt=Q(wt.start,E.width,4);At.start<=Bt+1&&Nt===Kt&&Q(At.start+At.count-1,E.width,4)===Nt?wt.count=Math.max(wt.count,At.start+At.count-wt.start):(++Tt,_t[Tt]=At)}_t.length=Tt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Ot=0,wt=_t.length;Ot<wt;Ot++){let At=_t[Ot],Bt=Math.floor(At.start/4),Nt=Math.ceil(At.count/4),Kt=Bt%E.width,H=Math.floor(Bt/E.width),St=Nt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,Kt,H,St,nt,X,$,E.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function Ct(N,E,X){let $=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=i.TEXTURE_3D);let j=Xt(N,E),_t=E.source;e.bindTexture($,N.__webglTexture,i.TEXTURE0+X);let Tt=n.get(_t);if(_t.version!==Tt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let nt=ie.getPrimaries(ie.workingColorSpace),vt=E.colorSpace===yi?null:ie.getPrimaries(E.colorSpace),It=E.colorSpace===yi||nt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let it=m(E.image,!1,s.maxTextureSize);it=Ie(E,it);let Et=r.convert(E.format,E.colorSpace),Ot=r.convert(E.type),wt=_(E.internalFormat,Et,Ot,E.normalized,E.colorSpace,E.isVideoTexture);zt($,E);let At,Bt=E.mipmaps,Nt=E.isVideoTexture!==!0,Kt=Tt.__version===void 0||j===!0,H=_t.dataReady,St=S(E,it);if(E.isDepthTexture)wt=y(E.format===Xi,E.type),Kt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,wt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,wt,it.width,it.height,0,Et,Ot,null));else if(E.isDataTexture)if(Bt.length>0){Nt&&Kt&&e.texStorage2D(i.TEXTURE_2D,St,wt,Bt[0].width,Bt[0].height);for(let nt=0,vt=Bt.length;nt<vt;nt++)At=Bt[nt],Nt?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,At.width,At.height,Et,Ot,At.data):e.texImage2D(i.TEXTURE_2D,nt,wt,At.width,At.height,0,Et,Ot,At.data);E.generateMipmaps=!1}else Nt?(Kt&&e.texStorage2D(i.TEXTURE_2D,St,wt,it.width,it.height),H&&st(E,it,Et,Ot)):e.texImage2D(i.TEXTURE_2D,0,wt,it.width,it.height,0,Et,Ot,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Nt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,wt,Bt[0].width,Bt[0].height,it.depth);for(let nt=0,vt=Bt.length;nt<vt;nt++)if(At=Bt[nt],E.format!==zn)if(Et!==null)if(Nt){if(H)if(E.layerUpdates.size>0){let It=Qc(At.width,At.height,E.format,E.type);for(let W of E.layerUpdates){let bt=At.data.subarray(W*It/At.data.BYTES_PER_ELEMENT,(W+1)*It/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,W,At.width,At.height,1,Et,bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,At.width,At.height,it.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,wt,At.width,At.height,it.depth,0,At.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,At.width,At.height,it.depth,Et,Ot,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,wt,At.width,At.height,it.depth,0,Et,Ot,At.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Nt&&Kt&&e.texStorage2D(i.TEXTURE_2D,St,wt,Bt[0].width,Bt[0].height);for(let nt=0,vt=Bt.length;nt<vt;nt++)At=Bt[nt],E.format!==zn?Et!==null?Nt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,wt,At.width,At.height,0,At.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,At.width,At.height,Et,Ot,At.data):e.texImage2D(i.TEXTURE_2D,nt,wt,At.width,At.height,0,Et,Ot,At.data)}else if(E.isDataArrayTexture)if(Nt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,wt,it.width,it.height,it.depth),H)if(E.layerUpdates.size>0){let nt=Qc(it.width,it.height,E.format,E.type);for(let vt of E.layerUpdates){let It=it.data.subarray(vt*nt/it.data.BYTES_PER_ELEMENT,(vt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,it.width,it.height,1,Et,Ot,It)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Et,Ot,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,it.width,it.height,it.depth,0,Et,Ot,it.data);else if(E.isData3DTexture)Nt?(Kt&&e.texStorage3D(i.TEXTURE_3D,St,wt,it.width,it.height,it.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Et,Ot,it.data)):e.texImage3D(i.TEXTURE_3D,0,wt,it.width,it.height,it.depth,0,Et,Ot,it.data);else if(E.isFramebufferTexture){if(Kt)if(Nt)e.texStorage2D(i.TEXTURE_2D,St,wt,it.width,it.height);else{let nt=it.width,vt=it.height;for(let It=0;It<St;It++)e.texImage2D(i.TEXTURE_2D,It,wt,nt,vt,0,Et,Ot,null),nt>>=1,vt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),h.add(E),nt.onpaint=vt=>{let It=vt.changedElements;for(let W of h)It.includes(W.image)&&(W.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let It=i.RGBA,W=i.RGBA,bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,W,bt,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Nt&&Kt){let nt=re(Bt[0]);e.texStorage2D(i.TEXTURE_2D,St,wt,nt.width,nt.height)}for(let nt=0,vt=Bt.length;nt<vt;nt++)At=Bt[nt],Nt?H&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Et,Ot,At):e.texImage2D(i.TEXTURE_2D,nt,wt,Et,Ot,At);E.generateMipmaps=!1}else if(Nt){if(Kt){let nt=re(it);e.texStorage2D(i.TEXTURE_2D,St,wt,nt.width,nt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ot,it)}else e.texImage2D(i.TEXTURE_2D,0,wt,Et,Ot,it);d(E)&&v($),Tt.__version=_t.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ht(N,E,X){if(E.image.length!==6)return;let $=Xt(N,E),j=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+X);let _t=n.get(j);if(j.version!==_t.__version||$===!0){e.activeTexture(i.TEXTURE0+X);let Tt=ie.getPrimaries(ie.workingColorSpace),tt=E.colorSpace===yi?null:ie.getPrimaries(E.colorSpace),it=E.colorSpace===yi||Tt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Et=E.isCompressedTexture||E.image[0].isCompressedTexture,Ot=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let W=0;W<6;W++)!Et&&!Ot?wt[W]=m(E.image[W],!0,s.maxCubemapSize):wt[W]=Ot?E.image[W].image:E.image[W],wt[W]=Ie(E,wt[W]);let At=wt[0],Bt=r.convert(E.format,E.colorSpace),Nt=r.convert(E.type),Kt=_(E.internalFormat,Bt,Nt,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,St=_t.__version===void 0||$===!0,nt=j.dataReady,vt=S(E,At);zt(i.TEXTURE_CUBE_MAP,E);let It;if(Et){H&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,At.width,At.height);for(let W=0;W<6;W++){It=wt[W].mipmaps;for(let bt=0;bt<It.length;bt++){let dt=It[bt];E.format!==zn?Bt!==null?H?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt,0,0,dt.width,dt.height,Bt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt,Kt,dt.width,dt.height,0,dt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt,0,0,dt.width,dt.height,Bt,Nt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt,Kt,dt.width,dt.height,0,Bt,Nt,dt.data)}}}else{if(It=E.mipmaps,H&&St){It.length>0&&vt++;let W=re(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,W.width,W.height)}for(let W=0;W<6;W++)if(Ot){H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,wt[W].width,wt[W].height,Bt,Nt,wt[W].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Kt,wt[W].width,wt[W].height,0,Bt,Nt,wt[W].data);for(let bt=0;bt<It.length;bt++){let ne=It[bt].image[W].image;H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt+1,0,0,ne.width,ne.height,Bt,Nt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt+1,Kt,ne.width,ne.height,0,Bt,Nt,ne.data)}}else{H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Bt,Nt,wt[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Kt,Bt,Nt,wt[W]);for(let bt=0;bt<It.length;bt++){let dt=It[bt];H?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt+1,0,0,Bt,Nt,dt.image[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt+1,Kt,Bt,Nt,dt.image[W])}}}d(E)&&v(i.TEXTURE_CUBE_MAP),_t.__version=j.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function J(N,E,X,$,j,_t){let Tt=r.convert(X.format,X.colorSpace),tt=r.convert(X.type),it=_(X.internalFormat,Tt,tt,X.normalized,X.colorSpace),Et=n.get(E),Ot=n.get(X);if(Ot.__renderTarget=E,!Et.__hasExternalTextures){let wt=Math.max(1,E.width>>_t),At=Math.max(1,E.height>>_t);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,_t,it,wt,At,E.depth,0,Tt,tt,null):e.texImage2D(j,_t,it,wt,At,0,Tt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),le(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,Ot.__webglTexture,0,ae(E)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,Ot.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(N,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,N),E.depthBuffer){let $=E.depthTexture,j=$&&$.isDepthTexture?$.type:null,_t=y(E.stencilBuffer,j),Tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;le(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(E),_t,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(E),_t,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_t,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,N)}else{let $=E.textures;for(let j=0;j<$.length;j++){let _t=$[j],Tt=r.convert(_t.format,_t.colorSpace),tt=r.convert(_t.type),it=_(_t.internalFormat,Tt,tt,_t.normalized,_t.colorSpace);le(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(E),it,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(E),it,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,it,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(N,E,X){let $=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(E.depthTexture);if(j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$){if(j.__webglInit===void 0&&(j.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),zt(i.TEXTURE_CUBE_MAP,E.depthTexture);let Et=r.convert(E.depthTexture.format),Ot=r.convert(E.depthTexture.type),wt;E.depthTexture.format===ni?wt=i.DEPTH_COMPONENT24:E.depthTexture.format===Xi&&(wt=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,wt,E.width,E.height,0,Et,Ot,null)}}else z(E.depthTexture,0);let _t=j.__webglTexture,Tt=ae(E),tt=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,it=E.depthTexture.format===Xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ni)le(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,_t,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,_t,0);else if(E.depthTexture.format===Xi)le(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,_t,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(N){let E=n.get(N),X=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){let $=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=$}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let $=0;$<6;$++)ht(E.__webglFramebuffer[$],N,$);else{let $=N.texture.mipmaps;$&&$.length>0?ht(E.__webglFramebuffer[0],N,0):ht(E.__webglFramebuffer,N,0)}else if(X){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=i.createRenderbuffer(),at(E.__webglDepthbuffer[$],N,!1);else{let j=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=E.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,_t)}}else{let $=N.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),at(E.__webglDepthbuffer,N,!1);else{let j=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(N,E,X){let $=n.get(N);E!==void 0&&J($.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ot(N)}function yt(N){let E=N.texture,X=n.get(N),$=n.get(E);N.addEventListener("dispose",M);let j=N.textures,_t=N.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=E.version,a.memory.textures++),_t){X.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[tt]=[];for(let it=0;it<E.mipmaps.length;it++)X.__webglFramebuffer[tt][it]=i.createFramebuffer()}else X.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let tt=0;tt<E.mipmaps.length;tt++)X.__webglFramebuffer[tt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let tt=0,it=j.length;tt<it;tt++){let Et=n.get(j[tt]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&le(N)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let tt=0;tt<j.length;tt++){let it=j[tt];X.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[tt]);let Et=r.convert(it.format,it.colorSpace),Ot=r.convert(it.type),wt=_(it.internalFormat,Et,Ot,it.normalized,it.colorSpace,N.isXRRenderTarget===!0),At=ae(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,wt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,X.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),at(X.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),zt(i.TEXTURE_CUBE_MAP,E);for(let tt=0;tt<6;tt++)if(E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)J(X.__webglFramebuffer[tt][it],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else J(X.__webglFramebuffer[tt],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);d(E)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let tt=0,it=j.length;tt<it;tt++){let Et=j[tt],Ot=n.get(Et),wt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Ot.__webglTexture),zt(wt,Et),J(X.__webglFramebuffer,N,Et,i.COLOR_ATTACHMENT0+tt,wt,0),d(Et)&&v(wt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(tt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,$.__webglTexture),zt(tt,E),E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)J(X.__webglFramebuffer[it],N,E,i.COLOR_ATTACHMENT0,tt,it);else J(X.__webglFramebuffer,N,E,i.COLOR_ATTACHMENT0,tt,0);d(E)&&v(tt),e.unbindTexture()}N.depthBuffer&&ot(N)}function Ft(N){let E=N.textures;for(let X=0,$=E.length;X<$;X++){let j=E[X];if(d(j)){let _t=T(N),Tt=n.get(j).__webglTexture;e.bindTexture(_t,Tt),v(_t),e.unbindTexture()}}}let jt=[],Vt=[];function Gt(N){if(N.samples>0){if(le(N)===!1){let E=N.textures,X=N.width,$=N.height,j=i.COLOR_BUFFER_BIT,_t=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(N),tt=E.length>1;if(tt)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let it=N.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);let Ot=n.get(E[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,X,$,0,0,X,$,j,i.NEAREST),o===!0&&(jt.length=0,Vt.length=0,jt.push(i.COLOR_ATTACHMENT0+Et),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(jt.push(_t),Vt.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);let Ot=n.get(E[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&o){let E=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ae(N){return Math.min(s.maxSamples,N.samples)}function le(N){let E=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(N){let E=a.render.frame;u.get(N)!==E&&(u.set(N,E),N.update())}function Ie(N,E){let X=N.colorSpace,$=N.format,j=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==Ir&&X!==yi&&(ie.getTransfer(X)===fe?($!==zn||j!==bn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",X)),E}function re(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.getTextureUnits=w,this.setTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=et,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=J,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ov(i,t){function e(n,s=yi){let r,a=ie.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===ka)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===We)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===zn)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===er)return i.RED;if(n===Ga)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===Wa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===lo||n===co||n===uo||n===ho)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===Za||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ka||n===Qa||n===ja||n===tl||n===fo||n===el)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ka)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return r.COMPRESSED_R11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return r.COMPRESSED_RG11_EAC;if(n===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gl||n===xl||n===vl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gl)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===yl||n===po||n===Ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
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

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ce({vertexShader:av,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vu=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",o=1,c=null,u=null,h=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new xu,d={},v=e.getContextAttributes(),T=null,_=null,y=[],S=[],A=new kt,M=null,b=null,C=new en;C.viewport=new Me;let D=new en;D.viewport=new Me;let P=[C,D],L=new Ua,w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=y[Q];return st===void 0&&(st=new Xs,y[Q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=y[Q];return st===void 0&&(st=new Xs,y[Q]=st),st.getGripSpace()},this.getHand=function(Q){let st=y[Q];return st===void 0&&(st=new Xs,y[Q]=st),st.getHandSpace()};function F(Q){let st=S.indexOf(Q.inputSource);if(st===-1)return;let Ct=y[st];Ct!==void 0&&(Ct.update(Q.inputSource,Q.frame,c||a),Ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let Q=0;Q<y.length;Q++){let st=S[Q];st!==null&&(S[Q]=null,y[Q].disconnect(st))}w=null,I=null,m.reset();for(let Q in d)delete d[Q];if(t.setRenderTarget(T),p=null,f=null,h=null,s=null,_=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(A.width,A.height,!1),b!==null){let Q=b.camera;Q.fov=b.fov,Q.zoom=b.zoom,Q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ht=null,J=null;v.depth&&(J=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=v.stencil?Xi:ni,Ht=v.stencil?tr:Kn);let at={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(at),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Ee(f.textureWidth,f.textureHeight,{format:zn,type:bn,depthTexture:new Bi(f.textureWidth,f.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ee(p.framebufferWidth,p.framebufferHeight,{format:zn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Q){for(let st=0;st<Q.removed.length;st++){let Ct=Q.removed[st],Ht=S.indexOf(Ct);Ht>=0&&(S[Ht]=null,y[Ht].disconnect(Ct))}for(let st=0;st<Q.added.length;st++){let Ct=Q.added[st],Ht=S.indexOf(Ct);if(Ht===-1){for(let at=0;at<y.length;at++)if(at>=S.length){S.push(Ct),Ht=at;break}else if(S[at]===null){S[at]=Ct,Ht=at;break}if(Ht===-1)break}let J=y[Ht];J&&J.connect(Ct)}}let U=new B,G=new B;function q(Q,st,Ct){U.setFromMatrixPosition(st.matrixWorld),G.setFromMatrixPosition(Ct.matrixWorld);let Ht=U.distanceTo(G),J=st.projectionMatrix.elements,at=Ct.projectionMatrix.elements,ht=J[14]/(J[10]-1),ot=J[14]/(J[10]+1),et=(J[9]+1)/J[5],yt=(J[9]-1)/J[5],Ft=(J[8]-1)/J[0],jt=(at[8]+1)/at[0],Vt=ht*Ft,Gt=ht*jt,ae=Ht/(-Ft+jt),le=ae*-Ft;if(st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(le),Q.translateZ(ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),J[10]===-1)Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let V=ht+ae,Ie=ot+ae,re=Vt-le,N=Gt+(Ht-le),E=et*ot/Ie*V,X=yt*ot/Ie*V;Q.projectionMatrix.makePerspective(re,N,E,X,V,Ie),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ft(Q,st){st===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let st=Q.near,Ct=Q.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),L.near=D.near=C.near=st,L.far=D.far=C.far=Ct,(w!==L.near||I!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),w=L.near,I=L.far),L.layers.mask=Q.layers.mask|6,C.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;let Ht=Q.parent,J=L.cameras;ft(L,Ht);for(let at=0;at<J.length;at++)ft(J[at],Ht);J.length===2?q(L,C,D):L.projectionMatrix.copy(C.projectionMatrix),b===null&&Q.isPerspectiveCamera&&(b={camera:Q,fov:Q.fov,zoom:Q.zoom}),xt(Q,L,Ht)};function xt(Q,st,Ct){Ct===null?Q.matrix.copy(st.matrixWorld):(Q.matrix.copy(Ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Nr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return o},this.setFoveation=function(Q){o=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Q){return d[Q]};let ee=null;function zt(Q,st){if(u=st.getViewerPose(c||a),g=st,u!==null){let Ct=u.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Ht=!1;Ct.length!==L.cameras.length&&(L.cameras.length=0,Ht=!0);for(let ot=0;ot<Ct.length;ot++){let et=Ct[ot],yt=null;if(p!==null)yt=p.getViewport(et);else{let jt=h.getViewSubImage(f,et);yt=jt.viewport,ot===0&&(t.setRenderTargetTextures(_,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(_))}let Ft=P[ot];Ft===void 0&&(Ft=new en,Ft.layers.enable(ot),Ft.viewport=new Me,P[ot]=Ft),Ft.matrix.fromArray(et.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(et.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(yt.x,yt.y,yt.width,yt.height),ot===0&&(L.matrix.copy(Ft.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ht===!0&&L.cameras.push(Ft)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let ot=h.getDepthInformation(Ct[0]);ot&&ot.isValid&&ot.texture&&m.init(ot,s.renderState)}if(J&&J.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let ot=0;ot<Ct.length;ot++){let et=Ct[ot].camera;if(et){let yt=d[et];yt||(yt=new Gr,d[et]=yt);let Ft=h.getCameraImage(et);yt.sourceTexture=Ft}}}}for(let Ct=0;Ct<y.length;Ct++){let Ht=S[Ct],J=y[Ct];Ht!==null&&J!==void 0&&J.update(Ht,st,c||a)}ee&&ee(Q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Xt=new vf;Xt.setAnimationLoop(zt),this.setAnimationLoop=function(Q){ee=Q},this.dispose=function(){}}},cv=new Wt,Tf=new $t;Tf.set(-1,0,0,0,1,0,0,0,1);function uv(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Jc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,T,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?o(m,d,v,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),T=v.envMap,_=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,v,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hv(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,y){let S=y.program;n.uniformBlockBinding(_,S)}function c(_,y){let S=s[_.id];S===void 0&&(m(_),S=u(_),s[_.id]=S,_.addEventListener("dispose",v));let A=y.program;n.updateUBOMapping(_,A);let M=t.render.frame;r[_.id]!==M&&(f(_),r[_.id]=M)}function u(_){let y=h();_.__bindingPointIndex=y;let S=i.createBuffer(),A=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function h(){for(let _=0;_<l;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],S=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,b=S.length;M<b;M++){let C=S[M];if(Array.isArray(C))for(let D=0,P=C.length;D<P;D++)p(C[D],M,D,A);else p(C,M,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,y,S,A){if(x(_,y,S,A)===!0){let M=_.__offset,b=_.value;if(Array.isArray(b)){let C=0;for(let D=0;D<b.length;D++){let P=b[D],L=d(P);g(P,_.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function g(_,y,S){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,S)}function x(_,y,S,A){let M=_.value,b=y+"_"+S;if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{let C=A[b];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function m(_){let y=_.uniforms,S=0,A=16;for(let b=0,C=y.length;b<C;b++){let D=Array.isArray(y[b])?y[b]:[y[b]];for(let P=0,L=D.length;P<L;P++){let w=D[P],I=Array.isArray(w.value)?w.value:[w.value];for(let F=0,O=I.length;F<O;F++){let z=I[F],U=d(z),G=S%A,q=G%U.boundary,ft=G+q;S+=q,ft!==0&&A-ft<U.storage&&(S+=A-ft),w.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,S+=U.storage}}}let M=S%A;return M>0&&(S+=A-M),_.__size=S,_.__cache={},this}function d(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",_),y}function v(_){let y=_.target;y.removeEventListener("dispose",v);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function T(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:o,update:c,dispose:T}}var fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function dv(){return ri===null&&(ri=new cs(fv,16,16,qi,We),ri.name="DFG_LUT",ri.minFilter=ke,ri.magFilter=ke,ri.wrapS=ei,ri.wrapT=ei,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var Cl=class{constructor(t={}){let{canvas:e=Gh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=bn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=p,m=new Set([Xa,Wa,Ga]),d=new Set([bn,Kn,js,tr,Ha,Va]),v=new Uint32Array(4),T=new Int32Array(4),_=new B,y=null,S=null,A=[],M=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,P=null,L=null,w=null,I=null;this._outputColorSpace=Ae;let F=0,O=0,z=null,U=-1,G=null,q=new Me,ft=new Me,xt=null,ee=new gt(0),zt=0,Xt=e.width,Q=e.height,st=1,Ct=null,Ht=null,J=new Me(0,0,Xt,Q),at=new Me(0,0,Xt,Q),ht=!1,ot=new qs,et=!1,yt=!1,Ft=new Wt,jt=new B,Vt=new Me,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function le(){return z===null?st:1}let V=n;function Ie(R,k){return e.getContext(R,k)}let re,N,E,X,$,j,_t,Tt,tt,it,Et,Ot,wt,At,Bt,Nt,Kt,H,St,nt,vt,It,W;try{let R={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ne,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",_e,!1),V===null){let k="webgl2";if(V=Ie(k,R),V===null)throw Ie(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}bt()}catch(R){throw e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),Zt("WebGLRenderer: "+R.message),R}function bt(){re=new yg(V),re.init(),vt=new ov(V,re),N=new ug(V,re,t,vt),E=new sv(V,re),N.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),L=V.createFramebuffer(),w=V.createFramebuffer(),I=V.createFramebuffer(),X=new bg(V),$=new Wx,j=new rv(V,re,E,$,N,vt,X),_t=new _g(C),Tt=new Ep(V),It=new lg(V,Tt),tt=new Mg(V,Tt,X,It),it=new Eg(V,tt,Tt,It,X),H=new Tg(V,N,j),Bt=new hg($),Et=new Gx(C,_t,re,N,It,Bt),Ot=new uv(C,$),wt=new qx,At=new Qx(re),Kt=new ag(C,_t,E,it,g,o),Nt=new iv(C,it,N),W=new hv(V,X,N,E),St=new cg(V,re,X),nt=new Sg(V,re,X),X.programs=Et.programs,C.capabilities=N,C.extensions=re,C.properties=$,C.renderLists=wt,C.shadowMap=Nt,C.state=E,C.info=X}x!==bn&&(b=new Ag(x,e.width,e.height,l,s,r));let dt=new vu(C,V);this.xr=dt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(R){R!==void 0&&(st=R,this.setSize(Xt,Q,!1))},this.getSize=function(R){return R.set(Xt,Q)},this.setSize=function(R,k,K=!0){if(dt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=R,Q=k,e.width=Math.floor(R*st),e.height=Math.floor(k*st),K===!0&&(e.style.width=R+"px",e.style.height=k+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(Xt*st,Q*st).floor()},this.setDrawingBufferSize=function(R,k,K){Xt=R,Q=k,st=K,e.width=Math.floor(R*K),e.height=Math.floor(k*K),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(x===bn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(q)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,k,K,Y){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,k,K,Y),E.viewport(q.copy(J).multiplyScalar(st).round())},this.getScissor=function(R){return R.copy(at)},this.setScissor=function(R,k,K,Y){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,k,K,Y),E.scissor(ft.copy(at).multiplyScalar(st).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){E.setScissorTest(ht=R)},this.setOpaqueSort=function(R){Ct=R},this.setTransparentSort=function(R){Ht=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,K=!0){let Y=0;if(R){let Z=!1;if(z!==null){let Rt=z.texture.format;Z=m.has(Rt)}if(Z){let Rt=z.texture.type,pt=d.has(Rt),mt=Kt.getClearColor(),Mt=Kt.getClearAlpha(),Ut=mt.r,Jt=mt.g,Qt=mt.b;pt?(v[0]=Ut,v[1]=Jt,v[2]=Qt,v[3]=Mt,V.clearBufferuiv(V.COLOR,0,v)):(T[0]=Ut,T[1]=Jt,T[2]=Qt,T[3]=Mt,V.clearBufferiv(V.COLOR,0,T))}else Y|=V.COLOR_BUFFER_BIT}k&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),P=R},this.dispose=function(){e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),Kt.dispose(),wt.dispose(),At.dispose(),$.dispose(),_t.dispose(),it.dispose(),It.dispose(),W.dispose(),Et.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",No),dt.removeEventListener("sessionend",Dn),tn.stop()};function ne(R){R.preventDefault(),Zc("WebGLRenderer: Context Lost."),D=!0}function se(){Zc("WebGLRenderer: Context Restored."),D=!1;let R=X.autoReset,k=Nt.enabled,K=Nt.autoUpdate,Y=Nt.needsUpdate,Z=Nt.type;bt(),X.autoReset=R,Nt.enabled=k,Nt.autoUpdate=K,Nt.needsUpdate=Y,Nt.type=Z}function _e(R){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function fn(R){let k=R.target;k.removeEventListener("dispose",fn),Ss(k)}function Ss(R){Do(R),$.remove(R)}function Do(R){let k=$.get(R).programs;k!==void 0&&(k.forEach(function(K){Et.releaseProgram(K)}),R.isShaderMaterial&&Et.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,K,Y,Z,Rt){k===null&&(k=Gt);let pt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,mt=bs(R,k,K,Y,Z);E.setMaterial(Y,pt);let Mt=K.index,Ut=1;if(Y.wireframe===!0){if(Mt=tt.getWireframeAttribute(K),Mt===void 0)return;Ut=2}let Jt=K.drawRange,Qt=K.attributes.position,Lt=Jt.start*Ut,pe=(Jt.start+Jt.count)*Ut;Rt!==null&&(Lt=Math.max(Lt,Rt.start*Ut),pe=Math.min(pe,(Rt.start+Rt.count)*Ut)),Mt!==null?(Lt=Math.max(Lt,0),pe=Math.min(pe,Mt.count)):Qt!=null&&(Lt=Math.max(Lt,0),pe=Math.min(pe,Qt.count));let Ne=pe-Lt;if(Ne<0||Ne===1/0)return;It.setup(Z,Y,mt,K,Mt);let Se,ve=St;if(Mt!==null&&(Se=Tt.get(Mt),ve=nt,ve.setIndex(Se)),Z.isMesh)Y.wireframe===!0?(E.setLineWidth(Y.wireframeLinewidth*le()),ve.setMode(V.LINES)):ve.setMode(V.TRIANGLES);else if(Z.isLine){let on=Y.linewidth;on===void 0&&(on=1),E.setLineWidth(on*le()),Z.isLineSegments?ve.setMode(V.LINES):Z.isLineLoop?ve.setMode(V.LINE_LOOP):ve.setMode(V.LINE_STRIP)}else Z.isPoints?ve.setMode(V.POINTS):Z.isSprite&&ve.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(re.get("WEBGL_multi_draw"))ve.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let on=Z._multiDrawStarts,Dt=Z._multiDrawCounts,pn=Z._multiDrawCount,ue=Mt?Tt.get(Mt).bytesPerElement:1,Un=$.get(Y).currentProgram.getUniforms();for(let jn=0;jn<pn;jn++)Un.setValue(V,"_gl_DrawID",jn),ve.render(on[jn]/ue,Dt[jn])}else if(Z.isInstancedMesh)ve.renderInstances(Lt,Ne,Z.count);else if(K.isInstancedBufferGeometry){let on=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Dt=Math.min(K.instanceCount,on);ve.renderInstances(Lt,Ne,Dt)}else ve.render(Lt,Ne)};function Ln(R,k,K,Y){P!==null&&R.isNodeMaterial&&P.setObject(Y,R),et===!0&&Bt.setState(R,K,!1),R.transparent===!0&&R.side===Qe&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,ns(R,k,Y),R.side=Gi,R.needsUpdate=!0,ns(R,k,Y),R.side=Qe):ns(R,k,Y)}this.compile=function(R,k,K=null){K===null&&(K=R),P!==null&&P.renderStart(R,k,K),S=At.get(K),S.init(k),M.push(S),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),R!==K&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),yt=this.localClippingEnabled,et=Bt.init(this.clippingPlanes,yt),et===!0&&Bt.setGlobalState(this.clippingPlanes,k),P!==null&&Nt.render(S.state.shadowsArray,K,k);let Y=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Rt=Z.material;if(Rt)if(Array.isArray(Rt))for(let pt=0;pt<Rt.length;pt++){let mt=Rt[pt];Ln(mt,K,k,Z),Y.add(mt)}else Ln(Rt,K,k,Z),Y.add(Rt)}),S=M.pop(),P!==null&&P.renderEnd(),Y},this.compileAsync=function(R,k,K=null){let Y=this.compile(R,k,K);return new Promise(Z=>{function Rt(){if(Y.forEach(function(pt){let Mt=$.get(pt).currentProgram;(Mt===void 0||Mt.isReady())&&Y.delete(pt)}),Y.size===0){Z(R);return}setTimeout(Rt,10)}re.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let En=null;function ec(R){En&&En(R)}function No(){tn.stop()}function Dn(){tn.start()}let tn=new vf;tn.setAnimationLoop(ec),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(R){En=R,dt.setAnimationLoop(R),R===null?tn.stop():tn.start()},dt.addEventListener("sessionstart",No),dt.addEventListener("sessionend",Dn),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(R,k);let K=dt.enabled===!0&&dt.isPresenting===!0,Y=b!==null&&(z===null||K)&&b.begin(C,z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(k),k=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,k,z),S=At.get(R,M.length),S.init(k),S.state.textureUnits=j.getTextureUnits(),M.push(S),Ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ot.setFromProjectionMatrix(Ft,Zn,k.reversedDepth),yt=this.localClippingEnabled,et=Bt.init(this.clippingPlanes,yt),y=wt.get(R,A.length),y.init(),A.push(y),dt.enabled===!0&&dt.isPresenting===!0){let pt=C.xr.getDepthSensingMesh();pt!==null&&yr(pt,k,-1/0,C.sortObjects)}yr(R,k,0,C.sortObjects),y.finish(),P!==null&&P.updateLights(S.state.lightsArray),C.sortObjects===!0&&y.sort(Ct,Ht),ae=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,ae&&Kt.addToRenderList(y,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Bt.beginShadows();let Z=S.state.shadowsArray;if(Nt.render(Z,R,k),et===!0&&Bt.endShadows(),(Y&&b.hasRenderPass())===!1){let pt=y.opaque,mt=y.transmissive;if(S.setupLights(),k.isArrayCamera){let Mt=k.cameras;if(mt.length>0)for(let Ut=0,Jt=Mt.length;Ut<Jt;Ut++){let Qt=Mt[Ut];Mr(pt,mt,R,Qt)}ae&&Kt.render(R);for(let Ut=0,Jt=Mt.length;Ut<Jt;Ut++){let Qt=Mt[Ut];Uo(y,R,Qt,Qt.viewport)}}else mt.length>0&&Mr(pt,mt,R,k),ae&&Kt.render(R),Uo(y,R,k)}z!==null&&O===0&&(j.updateMultisampleRenderTarget(z),j.updateRenderTargetMipmap(z)),Y&&b.end(C),R.isScene===!0&&R.onAfterRender(C,R,k),It.resetDefaultState(),U=-1,G=null,M.pop(),M.length>0?(S=M[M.length-1],j.setTextureUnits(S.state.textureUnits),et===!0&&Bt.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,P!==null&&P.renderEnd()};function yr(R,k,K,Y){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(ot)){Y&&Vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ft);let pt=it.update(R),mt=R.material;mt.visible&&y.push(R,pt,mt,K,Vt.z,null,k)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(ot))){let pt=it.update(R),mt=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Vt.copy(R.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Vt.copy(pt.boundingSphere.center)),Vt.applyMatrix4(R.matrixWorld).applyMatrix4(Ft)),Array.isArray(mt)){let Mt=pt.groups;for(let Ut=0,Jt=Mt.length;Ut<Jt;Ut++){let Qt=Mt[Ut],Lt=mt[Qt.materialIndex];Lt&&Lt.visible&&y.push(R,pt,Lt,K,Vt.z,Qt,k)}}else mt.visible&&y.push(R,pt,mt,K,Vt.z,null,k)}}let Rt=R.children;for(let pt=0,mt=Rt.length;pt<mt;pt++)yr(Rt[pt],k,K,Y)}function Uo(R,k,K,Y){let{opaque:Z,transmissive:Rt,transparent:pt}=R;S.setupLightsView(K),et===!0&&Bt.setGlobalState(C.clippingPlanes,K),Y&&E.viewport(q.copy(Y)),Z.length>0&&Nn(Z,k,K),Rt.length>0&&Nn(Rt,k,K),pt.length>0&&Nn(pt,k,K),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Mr(R,k,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let Lt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new Ee(1,1,{generateMipmaps:!0,type:Lt?We:bn,minFilter:On,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let Rt=S.state.transmissionRenderTarget[Y.id],pt=Y.viewport||q;Rt.setSize(pt.z*C.transmissionResolutionScale,pt.w*C.transmissionResolutionScale);let mt=C.getRenderTarget(),Mt=C.getActiveCubeFace(),Ut=C.getActiveMipmapLevel();C.setRenderTarget(Rt),C.getClearColor(ee),zt=C.getClearAlpha(),zt<1&&C.setClearColor(16777215,.5),C.clear(),ae&&Kt.render(K);let Jt=C.toneMapping;C.toneMapping=$n;let Qt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),et===!0&&Bt.setGlobalState(C.clippingPlanes,Y),Nn(R,K,Y),j.updateMultisampleRenderTarget(Rt),j.updateRenderTargetMipmap(Rt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let pe=0,Ne=k.length;pe<Ne;pe++){let Se=k[pe],{object:ve,geometry:on,material:Dt,group:pn}=Se;if(Dt.side===Qe&&ve.layers.test(Y.layers)){let ue=Dt.side;Dt.side=sn,Dt.needsUpdate=!0,Ai(ve,K,Y,on,Dt,pn),Dt.side=ue,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(j.updateMultisampleRenderTarget(Rt),j.updateRenderTargetMipmap(Rt))}C.setRenderTarget(mt,Mt,Ut),C.setClearColor(ee,zt),Qt!==void 0&&(Y.viewport=Qt),C.toneMapping=Jt}function Nn(R,k,K){let Y=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Rt=R.length;Z<Rt;Z++){let pt=R[Z],{object:mt,geometry:Mt,group:Ut}=pt,Jt=pt.material;Jt.allowOverride===!0&&Y!==null&&(Jt=Y),mt.layers.test(K.layers)&&Ai(mt,k,K,Mt,Jt,Ut)}}function Ai(R,k,K,Y,Z,Rt){P!==null&&Z.isNodeMaterial&&P.setObject(R,Z),R.onBeforeRender(C,k,K,Y,Z,Rt),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,k,K,Y,R,Rt),Z.transparent===!0&&Z.side===Qe&&Z.forceSinglePass===!1?(Z.side=sn,Z.needsUpdate=!0,C.renderBufferDirect(K,k,Y,Z,R,Rt),Z.side=Gi,Z.needsUpdate=!0,C.renderBufferDirect(K,k,Y,Z,R,Rt),Z.side=Qe):C.renderBufferDirect(K,k,Y,Z,R,Rt),R.onAfterRender(C,k,K,Y,Z,Rt)}function ns(R,k,K){k.isScene!==!0&&(k=Gt);let Y=$.get(R),Z=S.state.lights,Rt=S.state.shadowsArray,pt=Z.state.version,mt=Et.getParameters(R,Z.state,Rt,k,K,S.state.lightProbeGridArray),Mt=Et.getProgramCacheKey(mt),Ut=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let Jt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=_t.get(R.envMap||Y.environment,Jt),Y.envMapRotation=Y.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ut===void 0&&(R.addEventListener("dispose",fn),Ut=new Map,Y.programs=Ut);let Qt=Ut.get(Mt);if(Qt!==void 0){if(Y.currentProgram===Qt&&Y.lightsStateVersion===pt)return Sr(R,mt),Qt}else mt.uniforms=Et.getUniforms(R),P!==null&&R.isNodeMaterial&&P.build(R,K,mt),R.onBeforeCompile(mt,C),Qt=Et.acquireProgram(mt,Mt),Ut.set(Mt,Qt),Y.uniforms=mt.uniforms;let Lt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Lt.clippingPlanes=Bt.uniform),Sr(R,mt),Y.needsLights=Ri(R),Y.lightsStateVersion=pt,Y.needsLights&&(Lt.ambientLightColor.value=Z.state.ambient,Lt.lightProbe.value=Z.state.probe,Lt.sunLights.value=Z.state.sun,Lt.sunLightShadows.value=Z.state.sunShadow,Lt.directionalLights.value=Z.state.directional,Lt.directionalLightShadows.value=Z.state.directionalShadow,Lt.spotLights.value=Z.state.spot,Lt.spotLightShadows.value=Z.state.spotShadow,Lt.rectAreaLights.value=Z.state.rectArea,Lt.ltc_1.value=Z.state.rectAreaLTC1,Lt.ltc_2.value=Z.state.rectAreaLTC2,Lt.pointLights.value=Z.state.point,Lt.pointLightShadows.value=Z.state.pointShadow,Lt.hemisphereLights.value=Z.state.hemi,Lt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Lt.sunShadowCascade.value=Z.state.sunShadowCascade,Lt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Lt.spotLightMatrix.value=Z.state.spotLightMatrix,Lt.spotLightMap.value=Z.state.spotLightMap,Lt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=S.state.lightProbeGridArray.length>0,Y.currentProgram=Qt,Y.uniformsList=null,Qt}function dn(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=sr.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Sr(R,k){let K=$.get(R);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function vn(R,k){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;_.setFromMatrixPosition(k.matrixWorld);for(let K=0,Y=R.length;K<Y;K++){let Z=R[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(_))return Z}return null}function bs(R,k,K,Y,Z){k.isScene!==!0&&(k=Gt),j.resetTextureUnits();let Rt=k.fog,pt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,mt=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ie.workingColorSpace,Mt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ut=_t.get(Y.envMap||pt,Mt),Jt=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qt=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!K.morphAttributes.position,pe=!!K.morphAttributes.normal,Ne=!!K.morphAttributes.color,Se=$n;Y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Se=C.toneMapping);let ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,on=ve!==void 0?ve.length:0,Dt=$.get(Y),pn=S.state.lights;if(et===!0&&(yt===!0||R!==G)){let ye=R===G&&Y.id===U;Bt.setState(Y,R,ye)}let ue=!1;Y.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==pn.state.version||Dt.outputColorSpace!==mt||Z.isBatchedMesh&&Dt.batching===!1||!Z.isBatchedMesh&&Dt.batching===!0||Z.isBatchedMesh&&Dt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Dt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Dt.instancing===!1||!Z.isInstancedMesh&&Dt.instancing===!0||Z.isSkinnedMesh&&Dt.skinning===!1||!Z.isSkinnedMesh&&Dt.skinning===!0||Z.isInstancedMesh&&Dt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Dt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Dt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Dt.instancingMorph===!1&&Z.morphTexture!==null||Dt.envMap!==Ut||Y.fog===!0&&Dt.fog!==Rt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Bt.numPlanes||Dt.numIntersection!==Bt.numIntersection)||Dt.vertexAlphas!==Jt||Dt.vertexTangents!==Qt||Dt.morphTargets!==Lt||Dt.morphNormals!==pe||Dt.morphColors!==Ne||Dt.toneMapping!==Se||Dt.morphTargetsCount!==on||!!Dt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Dt.__version=Y.version);let Un=Dt.currentProgram;ue===!0&&(Un=ns(Y,k,Z),P&&Y.isNodeMaterial&&P.onUpdateProgram(Y,Un,Dt));let jn=!1,Ci=!1,Ts=!1,ge=Un.getUniforms(),Le=Dt.uniforms;if(E.useProgram(Un.program)&&(jn=!0,Ci=!0,Ts=!0),Y.id!==U&&(U=Y.id,Ci=!0),Dt.needsLights){let ye=vn(S.state.lightProbeGridArray,Z);Dt.lightProbeGrid!==ye&&(Dt.lightProbeGrid=ye,Ci=!0)}if(jn||G!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ge.setValue(V,"projectionMatrix",R.projectionMatrix),ge.setValue(V,"viewMatrix",R.matrixWorldInverse);let Ii=ge.map.cameraPosition;Ii!==void 0&&Ii.setValue(V,jt.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&ge.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ge.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,Ci=!0,Ts=!0)}if(Dt.needsLights&&(pn.state.sunShadowMap.length>0&&ge.setValue(V,"sunShadowMap",pn.state.sunShadowMap,j),pn.state.directionalShadowMap.length>0&&ge.setValue(V,"directionalShadowMap",pn.state.directionalShadowMap,j),pn.state.spotShadowMap.length>0&&ge.setValue(V,"spotShadowMap",pn.state.spotShadowMap,j),pn.state.pointShadowMap.length>0&&ge.setValue(V,"pointShadowMap",pn.state.pointShadowMap,j)),Z.isSkinnedMesh){ge.setOptional(V,Z,"bindMatrix"),ge.setOptional(V,Z,"bindMatrixInverse");let ye=Z.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ge.setValue(V,"boneTexture",ye.boneTexture,j))}Z.isBatchedMesh&&(ge.setOptional(V,Z,"batchingTexture"),ge.setValue(V,"batchingTexture",Z._matricesTexture,j),ge.setOptional(V,Z,"batchingIdTexture"),ge.setValue(V,"batchingIdTexture",Z._indirectTexture,j),ge.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ge.setValue(V,"batchingColorTexture",Z._colorsTexture,j));let Pi=K.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&H.update(Z,K,Un),(Ci||Dt.receiveShadow!==Z.receiveShadow)&&(Dt.receiveShadow=Z.receiveShadow,ge.setValue(V,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Le.envMapIntensity.value=k.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=dv()),Ci){if(ge.setValue(V,"toneMappingExposure",C.toneMappingExposure),Dt.needsLights&&Gn(Le,Ts),Rt&&Y.fog===!0&&Ot.refreshFogUniforms(Le,Rt),Ot.refreshMaterialUniforms(Le,Y,st,Q,S.state.transmissionRenderTarget[R.id]),Dt.needsLights&&Dt.lightProbeGrid){let ye=Dt.lightProbeGrid;Le.probesSH.value=ye.texture,Le.probesMin.value.copy(ye.boundingBox.min),Le.probesMax.value.copy(ye.boundingBox.max),Le.probesResolution.value.copy(ye.resolution)}sr.upload(V,dn(Dt),Le,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(sr.upload(V,dn(Dt),Le,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ge.setValue(V,"center",Z.center),ge.setValue(V,"modelViewMatrix",Z.modelViewMatrix),ge.setValue(V,"normalMatrix",Z.normalMatrix),ge.setValue(V,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let ye=Y.uniformsGroups;for(let Ii=0,Es=ye.length;Ii<Es;Ii++){let Ou=ye[Ii];W.update(Ou,Un),W.bind(Ou,Un)}}return Un}function Gn(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.sunLights.needsUpdate=k,R.sunLightShadows.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Ri(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,k,K){let Y=$.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$.get(R.texture).__webglTexture=k,$.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){let K=$.get(R);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,K=0){z=R,F=k,O=K;let Y=null,Z=!1,Rt=!1;if(R){let mt=$.get(R);if(mt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,mt.__webglFramebuffer),q.copy(R.viewport),ft.copy(R.scissor),xt=R.scissorTest,E.viewport(q),E.scissor(ft),E.setScissorTest(xt),U=-1;return}else if(mt.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(mt.__hasExternalTextures)j.rebindTextures(R,$.get(R.texture).__webglTexture,$.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Jt=R.depthTexture;if(mt.__boundDepthTexture!==Jt){if(Jt!==null&&$.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}let Mt=R.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(Rt=!0);let Ut=$.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ut[k])?Y=Ut[k][K]:Y=Ut[k],Z=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?Y=$.get(R).__webglMultisampledFramebuffer:Array.isArray(Ut)?Y=Ut[K]:Y=Ut,q.copy(R.viewport),ft.copy(R.scissor),xt=R.scissorTest}else q.copy(J).multiplyScalar(st).floor(),ft.copy(at).multiplyScalar(st).floor(),xt=ht;if(K!==0&&(Y=L),E.bindFramebuffer(V.FRAMEBUFFER,Y)&&E.drawBuffers(R,Y),E.viewport(q),E.scissor(ft),E.setScissorTest(xt),Z){let mt=$.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,mt.__webglTexture,K)}else if(Rt){let mt=k;for(let Mt=0;Mt<R.textures.length;Mt++){let Ut=$.get(R.textures[Mt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Mt,Ut.__webglTexture,K,mt)}}else if(R!==null&&K!==0){let mt=$.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mt.__webglTexture,K)}U=-1};function Fo(R){let k=$.get(R);return(k.__readFormat!==R.format||k.__readType!==R.type)&&(k.__readFormat=R.format,k.__readType=R.type,k.__formatReadable=N.textureFormatReadable(R.format),k.__typeReadable=N.textureTypeReadable(R.type)),k}this.readRenderTargetPixels=function(R,k,K,Y,Z,Rt,pt,mt=0){if(!(R&&R.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){E.bindFramebuffer(V.FRAMEBUFFER,Mt);try{let Ut=R.textures[mt],Jt=Ut.format,Qt=Ut.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+mt);let Lt=Fo(Ut);if(Lt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-Y&&K>=0&&K<=R.height-Z&&V.readPixels(k,K,Y,Z,vt.convert(Jt),vt.convert(Qt),Rt)}finally{let Ut=z!==null?$.get(z).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(R,k,K,Y,Z,Rt,pt,mt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt)if(k>=0&&k<=R.width-Y&&K>=0&&K<=R.height-Z){E.bindFramebuffer(V.FRAMEBUFFER,Mt);let Ut=R.textures[mt],Jt=Ut.format,Qt=Ut.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+mt);let Lt=Fo(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,pe),V.bufferData(V.PIXEL_PACK_BUFFER,Rt.byteLength,V.STREAM_READ),V.readPixels(k,K,Y,Z,vt.convert(Jt),vt.convert(Qt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Ne=z!==null?$.get(z).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Ne);let Se=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Xh(V,Se,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,pe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Rt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(pe),V.deleteSync(Se),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,K=0){let Y=Math.pow(2,-K),Z=Math.floor(R.image.width*Y),Rt=Math.floor(R.image.height*Y),pt=k!==null?k.x:0,mt=k!==null?k.y:0;j.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,pt,mt,Z,Rt),E.unbindTexture()},this.copyTextureToTexture=function(R,k,K=null,Y=null,Z=0,Rt=0){let pt,mt,Mt,Ut,Jt,Qt,Lt,pe,Ne,Se=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(K!==null)pt=K.max.x-K.min.x,mt=K.max.y-K.min.y,Mt=K.isBox3?K.max.z-K.min.z:1,Ut=K.min.x,Jt=K.min.y,Qt=K.isBox3?K.min.z:0;else{let Le=Math.pow(2,-Z);pt=Math.floor(Se.width*Le),mt=Math.floor(Se.height*Le),R.isDataArrayTexture?Mt=Se.depth:R.isData3DTexture?Mt=Math.floor(Se.depth*Le):Mt=1,Ut=0,Jt=0,Qt=0}Y!==null?(Lt=Y.x,pe=Y.y,Ne=Y.z):(Lt=0,pe=0,Ne=0);let ve=vt.convert(k.format),on=vt.convert(k.type),Dt;k.isData3DTexture?(j.setTexture3D(k,0),Dt=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(j.setTexture2DArray(k,0),Dt=V.TEXTURE_2D_ARRAY):(j.setTexture2D(k,0),Dt=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);let pn=E.getParameter(V.UNPACK_ROW_LENGTH),ue=E.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=E.getParameter(V.UNPACK_SKIP_PIXELS),jn=E.getParameter(V.UNPACK_SKIP_ROWS),Ci=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,Se.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Se.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ut),E.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Qt);let Ts=R.isDataArrayTexture||R.isData3DTexture,ge=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){let Le=$.get(R),Pi=$.get(k),ye=$.get(Le.__renderTarget),Ii=$.get(Pi.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,ye.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Es=0;Es<Mt;Es++)Ts&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$.get(R).__webglTexture,Z,Qt+Es),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$.get(k).__webglTexture,Rt,Ne+Es)),V.blitFramebuffer(Ut,Jt,pt,mt,Lt,pe,pt,mt,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||$.has(R)){let Le=$.get(R),Pi=$.get(k);E.bindFramebuffer(V.READ_FRAMEBUFFER,w),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,I);for(let ye=0;ye<Mt;ye++)Ts?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Le.__webglTexture,Z,Qt+ye):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,Z),ge?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pi.__webglTexture,Rt,Ne+ye):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pi.__webglTexture,Rt),Z!==0?V.blitFramebuffer(Ut,Jt,pt,mt,Lt,pe,pt,mt,V.COLOR_BUFFER_BIT,V.NEAREST):ge?V.copyTexSubImage3D(Dt,Rt,Lt,pe,Ne+ye,Ut,Jt,pt,mt):V.copyTexSubImage2D(Dt,Rt,Lt,pe,Ut,Jt,pt,mt);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ge?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Dt,Rt,Lt,pe,Ne,pt,mt,Mt,ve,on,Se.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Dt,Rt,Lt,pe,Ne,pt,mt,Mt,ve,Se.data):V.texSubImage3D(Dt,Rt,Lt,pe,Ne,pt,mt,Mt,ve,on,Se):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Rt,Lt,pe,pt,mt,ve,on,Se.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Rt,Lt,pe,Se.width,Se.height,ve,Se.data):V.texSubImage2D(V.TEXTURE_2D,Rt,Lt,pe,pt,mt,ve,on,Se);E.pixelStorei(V.UNPACK_ROW_LENGTH,pn),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ue),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),E.pixelStorei(V.UNPACK_SKIP_ROWS,jn),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Ci),Rt===0&&k.generateMipmaps&&V.generateMipmap(Dt),E.unbindTexture()},this.initRenderTarget=function(R){$.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){F=0,O=0,z=null,E.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var De=(i,t,e)=>i<t?t:i>e?e:i,xe=(i,t,e)=>i+(t-i)*e,Dl=i=>i*i*(3-2*i),Pe=(i,t,e)=>{let n=De((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ef=1337;function wf(i){Ef=i|0}function pv(i){return i=i^Ef|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Tn=(i,t)=>pv(Math.imul(i|0,73856093)^Math.imul(t|0,19349663));function Qn(i,t=0){let e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return xe(Tn(e,t),Tn(e+1,t),s)}var Nl=(i,t=0)=>Qn(i,t)*.55+Qn(i*2.03,t+7)*.3+Qn(i*4.1,t+13)*.15;function rn(i){let t=i>>>0,e=()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,s)=>n+(s-n)*e(),e.int=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}var Ll=new gt,rt=i=>(Ll.set(i),[Ll.r,Ll.g,Ll.b]),Af=(i,t,e)=>[xe(i[0],t[0],e),xe(i[1],t[1],e),xe(i[2],t[2],e)],un=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];var Ul=["city","sakura","coast","country","mountain"],_o={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10}},_u=1500,Rf=260,Yi=0,yu=0;function Pf(i){yu=Math.max(0,Ul.indexOf(i))}function Ol(i){let t=Math.floor(i/_u),e=i-t*_u,n=Dl(De((e-(_u-Rf))/Rf,0,1)),s=Ul.length;return{a:Ul[((t+yu)%s+s)%s],b:Ul[((t+yu+1)%s+s)%s],t:n}}function Te(i){let t=Ol(i),e={city:0,sakura:0,coast:0,country:0,mountain:0};return e[t.a]+=1-t.t,e[t.b]+=t.t,e}var Re=i=>{let t=Ol(i);return t.t<.5?t.a:t.b};function xn(i,t){let e=Ol(i);return xe(_o[e.a][t],_o[e.b][t],e.t)}var xs=650,vs=375,or=i=>i*xs+vs;function yo(i){if(i<300)return!1;for(let t of[-70,0,70]){let e=Te(i+t);if(Math.max(e.city,e.country)<.9)return!1}return!0}function ar(i){let t=Math.round((i-vs)/xs),e=or(t);return yo(e)?{k:t,s:e}:null}function mv(i){let t=ar(i);return t?1-Pe(8,45,Math.abs(i-t.s)):0}var Mo=1150,Bl=820,So=4.6,Mu=i=>i*Mo+Bl;function Su(i){if(i<400)return!1;for(let e of[-90,0,90]){let n=Te(i+e);if(n.country+n.sakura<.9)return!1}let t=ar(i);return!(t&&Math.abs(t.s-i)<170)}function Si(i){let t=Math.round((i-Bl)/Mo),e=Mu(t);return Su(e)?{k:t,s:e}:null}function gv(i){let t=Si(i);return t?1-Pe(30,70,Math.abs(i-t.s)):0}function xv(i){let t=-So;return i<11?t-1.3:i<16?xe(t-1.3,t+.7,(i-11)/5):i<20?t+.7:i<25.5?xe(t+.7,.35,(i-20)/5.5):.35}var ai=2,Fl=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(t){let e=(Qn(t/300,11)-.5)*2+(Qn(t/95,17)-.5)*.35,n=Math.abs(e);return(n<.22?0:Math.sign(e)*(n-.22)/.78)*xn(t,"curv")*(1-Math.max(mv(t),gv(t)))}elevRaw(t){return xn(t,"base")+xn(t,"hill")*(Nl(t/380,29)-.5)*2}elev(t){let e=this.elevRaw(t),n=ar(t);if(n){let r=1-Pe(8,45,Math.abs(t-n.s));r>0&&(e=xe(e,this.elevRaw(n.s),r))}let s=Si(t);if(s){let r=1-Pe(30,70,Math.abs(t-s.s));r>0&&(e=xe(e,this.elevRaw(s.s),r))}return e}ensure(t){for(;(this.X.length-1)*ai<t+ai;){let e=this.X.length-1,n=e*ai,s=this.curv(n+ai/2)*ai,r=this.H[e];this.X.push(this.X[e]+Math.sin(r+s/2)*ai),this.Z.push(this.Z[e]+Math.cos(r+s/2)*ai),this.H.push(r+s),this.Y.push(this.elev(n+ai))}}at(t,e={}){t=Math.max(0,t),this.ensure(t+ai);let n=t/ai,s=Math.floor(n),r=n-s;e.x=xe(this.X[s],this.X[s+1],r),e.z=xe(this.Z[s],this.Z[s+1],r),e.y=xe(this.Y[s],this.Y[s+1],r),e.h=xe(this.H[s],this.H[s+1],r);let a=Math.sin(e.h),l=Math.cos(e.h);return e.fx=a,e.fz=l,e.rx=-l,e.rz=a,e}};function Cf(i,t,e,n,s){let r=Math.abs(e);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Pe(45,190,r)*16*(.45+.55*Qn(t/160+(e>0?50:0),3));case"coast":{if(e>0)return r<s+.9?-.06:-.15+Pe(s+1.5,80,r)*24*(.5+.5*Qn(t/170,5))+Pe(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let a=r-(s+2);return(a<26?xe(1.25,-1.6,a/26):xe(-1.6,-7,De((a-26)/20,0,1)))-n}case"mountain":{if(e>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Qn(t/140,61),o=r-(s+1);return o<l?o:Math.min(l+(o-l)*.55,70)}if(r<s+1.2)return-.06;let a=r-(s+1.2);return a<32?-a*1.1:-35.2+Pe(105,230,r)*95*(.6+.4*Qn(t/220,67))}case"country":default:return r<s+.7?-.08:r<s+2.1?-.95:r<135?-.55:-.55+Pe(135,215,r)*36*(.4+.6*Qn(t/210+(e>0?9:0),7))}}function lr(i,t,e,n){let s=Ol(i),r=Cf(s.a,i,t,e,n),a=s.t>0?xe(r,Cf(s.b,i,t,e,n),s.t):r,l=Si(i);if(!l)return a;let o=Math.abs(i-l.s);if(o>=36)return a;let c=o<29?xv(o):xe(.35,a,Pe(29,36,o));return Math.abs(t)<n+3.2&&(c=Math.min(c,-.08)),c}function If(i){let t=Si(i);return t?1-Pe(27,34,Math.abs(i-t.s)):0}var bo=new B,zl=new B,vv=[1,1,1],Be=class{constructor({uv:t=!1,color:e=!0}={}){this.hasUV=t,this.hasColor=e,this.P=[],this.N=[],this.U=[],this.Cl=[],this.m=new Wt,this.nm=new $t,this.e=this.m.elements,this.ne=this.nm.elements}get count(){return this.P.length/3}setM(t){return this.m.copy(t),this.nm.getNormalMatrix(t),this}vtx(t,e,n,s,r,a,l,o,c){let u=this.e,h=this.ne;this.P.push(u[0]*t+u[4]*e+u[8]*n+u[12],u[1]*t+u[5]*e+u[9]*n+u[13],u[2]*t+u[6]*e+u[10]*n+u[14]);let f=h[0]*s+h[3]*r+h[6]*a,p=h[1]*s+h[4]*r+h[7]*a,g=h[2]*s+h[5]*r+h[8]*a,x=1/(Math.sqrt(f*f+p*p+g*g)||1);if(this.N.push(f*x,p*x,g*x),this.hasUV&&this.U.push(l,o),this.hasColor){let m=c||vv;this.Cl.push(m[0],m[1],m[2])}}quad(t,e,n,s,r,a){bo.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]),zl.set(s[0]-t[0],s[1]-t[1],s[2]-t[2]),zl.lengthSq()<1e-12&&zl.set(n[0]-t[0],n[1]-t[1],n[2]-t[2]),bo.cross(zl).normalize();let l=bo.x,o=bo.y,c=bo.z,u=a?a.u0:0,h=a?a.u1:1,f=a?a.v0:0,p=a?a.v1:1;this.vtx(t[0],t[1],t[2],l,o,c,u,f,r),this.vtx(e[0],e[1],e[2],l,o,c,h,f,r),this.vtx(n[0],n[1],n[2],l,o,c,h,p,r),this.vtx(t[0],t[1],t[2],l,o,c,u,f,r),this.vtx(n[0],n[1],n[2],l,o,c,h,p,r),this.vtx(s[0],s[1],s[2],l,o,c,u,p,r)}box(t,e,n,s,r,a,l,o=null,c=null){let u=o||{},h=c||{};this.quad([s,e,n],[t,e,n],[t,r,n],[s,r,n],h.nz||l,u.nz),this.quad([t,e,a],[s,e,a],[s,r,a],[t,r,a],h.pz||l,u.pz),this.quad([t,e,n],[t,e,a],[t,r,a],[t,r,n],h.nx||l,u.nx),this.quad([s,e,a],[s,e,n],[s,r,n],[s,r,a],h.px||l,u.px),this.quad([t,r,a],[s,r,a],[s,r,n],[t,r,n],h.py||l,u.py),c&&c.noBottom||this.quad([t,e,n],[s,e,n],[s,e,a],[t,e,a],h.ny||l,u.ny)}cyl(t,e,n,s,r,a,l,o,c=!0){let u=(s-r)/a;for(let h=0;h<l;h++){let f=h/l*Math.PI*2,p=(h+1)/l*Math.PI*2,g=Math.cos(f),x=Math.sin(f),m=Math.cos(p),d=Math.sin(p),v=[t+g*s,e,n+x*s],T=[t+m*s,e,n+d*s],_=[t+m*r,e+a,n+d*r],y=[t+g*r,e+a,n+x*r];this.vtx(v[0],v[1],v[2],g,u,x,0,0,o),this.vtx(y[0],y[1],y[2],g,u,x,0,0,o),this.vtx(_[0],_[1],_[2],m,u,d,0,0,o),this.vtx(v[0],v[1],v[2],g,u,x,0,0,o),this.vtx(_[0],_[1],_[2],m,u,d,0,0,o),this.vtx(T[0],T[1],T[2],m,u,d,0,0,o),c&&r>.001&&(this.vtx(t,e+a,n,0,1,0,0,0,o),this.vtx(_[0],_[1],_[2],0,1,0,0,0,o),this.vtx(y[0],y[1],y[2],0,1,0,0,0,o))}}rod(t,e,n,s,r,a){let l=e[0]-t[0],o=e[1]-t[1],c=e[2]-t[2],u=Math.hypot(l,o,c);l/=u,o/=u,c/=u;let h=0,f=1,p=0;Math.abs(o)>.99&&(h=1,f=0);let g=o*p-c*f,x=c*h-l*p,m=l*f-o*h,d=Math.hypot(g,x,m);g/=d,x/=d,m/=d;let v=x*c-m*o,T=m*l-g*c,_=g*o-x*l;for(let y=0;y<r;y++){let S=y/r*Math.PI*2,A=(y+1)/r*Math.PI*2,M=Math.cos(S),b=Math.sin(S),C=Math.cos(A),D=Math.sin(A),P=g*M+v*b,L=x*M+T*b,w=m*M+_*b,I=g*C+v*D,F=x*C+T*D,O=m*C+_*D,z=[t[0]+P*n,t[1]+L*n,t[2]+w*n],U=[t[0]+I*n,t[1]+F*n,t[2]+O*n],G=[e[0]+I*s,e[1]+F*s,e[2]+O*s],q=[e[0]+P*s,e[1]+L*s,e[2]+w*s];this.vtx(z[0],z[1],z[2],P,L,w,0,0,a),this.vtx(U[0],U[1],U[2],I,F,O,0,0,a),this.vtx(G[0],G[1],G[2],I,F,O,0,0,a),this.vtx(z[0],z[1],z[2],P,L,w,0,0,a),this.vtx(G[0],G[1],G[2],I,F,O,0,0,a),this.vtx(q[0],q[1],q[2],P,L,w,0,0,a)}return u}blob(t,e,n,s,r,a,l=0,o=1){let c=Lf[l%Lf.length],u=c.attributes.position.array,h=c.attributes.normal.array,f=c.userData.disp;for(let p=0;p<u.length;p+=3){let g=1+f[p/3],x=Math.max(0,Math.min(1,h[p+1]*.5+.5)),m=[a[0]+(r[0]-a[0])*x,a[1]+(r[1]-a[1])*x,a[2]+(r[2]-a[2])*x];this.vtx(t+u[p]*s*g,e+u[p+1]*s*g*o,n+u[p+2]*s*g,h[p],h[p+1],h[p+2],0,0,m)}}wire(t,e,n,s,r,a=10){let l=t;for(let o=1;o<=a;o++){let c=o/a,u=[t[0]+(e[0]-t[0])*c,t[1]+(e[1]-t[1])*c-n*4*c*(1-c),t[2]+(e[2]-t[2])*c];this.rod(l,u,s,s,3,r),l=u}}card(t,e,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[a,l,o]of r)this.vtx(t[a][0],t[a][1],t[a][2],e[a][0],e[a][1],e[a][2],l,o,s[a])}toArrays(){return{P:new Float32Array(this.P),N:new Float32Array(this.N),C:this.hasColor?new Float32Array(this.Cl):null,U:this.hasUV?new Float32Array(this.U):null}}stamp(t,e){if(!t||!t.P.length)return;this.setM(e);let n=this.e,s=this.ne,r=t.P,a=t.N,l=t.C,o=t.U,c=this.P,u=this.N;for(let h=0;h<r.length;h+=3){let f=r[h],p=r[h+1],g=r[h+2];c.push(n[0]*f+n[4]*p+n[8]*g+n[12],n[1]*f+n[5]*p+n[9]*g+n[13],n[2]*f+n[6]*p+n[10]*g+n[14]);let x=a[h],m=a[h+1],d=a[h+2],v=s[0]*x+s[3]*m+s[6]*d,T=s[1]*x+s[4]*m+s[7]*d,_=s[2]*x+s[5]*m+s[8]*d,y=1/(Math.sqrt(v*v+T*T+_*_)||1);u.push(v*y,T*y,_*y)}if(this.hasColor)if(l)for(let h=0;h<l.length;h++)this.Cl.push(l[h]);else for(let h=0;h<r.length;h++)this.Cl.push(1);if(this.hasUV)if(o)for(let h=0;h<o.length;h++)this.U.push(o[h]);else for(let h=0;h<r.length/3*2;h++)this.U.push(0)}build(){if(!this.P.length)return null;let t=new de;return t.setAttribute("position",new qt(this.P,3)),t.setAttribute("normal",new qt(this.N,3)),this.hasUV&&t.setAttribute("uv",new qt(this.U,2)),this.hasColor&&t.setAttribute("color",new qt(this.Cl,3)),t.computeBoundingSphere(),t}},Lf=[0,1,2,3].map(i=>{let t=new Xr(1,1),e=t.attributes.position.array,n=new Float32Array(e.length/3),s=(r,a,l)=>Math.sin(r*3.1+i)*Math.cos(a*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<e.length;r+=3)n[r/3]=s(e[r],e[r+1],e[r+2])*.14;return t.userData.disp=n,t});te.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var _s=4200,we={uSkyHor:{value:new gt(.7,.8,.9)},uSkyZen:{value:new gt(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uCloudSh:{value:0},uOrigin:{value:new kt},uSunDir:{value:new B(0,1,0)},uSunCol:{value:new gt(1,1,1)},uTuftV:{value:new kt(0,.333)},uWind:{value:1}};function Uf(i){let t=new cs(new Uint8Array(i),i.length,1,er);return t.minFilter=t.magFilter=Oe,t.generateMipmaps=!1,t.needsUpdate=!0,t}var kn=Uf([16,16,16,70,200,255,255,255]),Df=Uf([28,40,70,130,200,240,255,255]),bi=`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1.,0.)), u.x), mix(hash12(i+vec2(0.,1.)), hash12(i+vec2(1.,1.)), u.x), u.y); }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,_v=`
uniform vec2 uOrigin; uniform float uCloudSh;
float cloudShadow(vec2 xz){
  vec2 p = (xz + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
  return smoothstep(0.47, 0.58, fbm2(p)) * uCloudSh;
}`,yv=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`;function cr(i,t="",e=""){i.uniforms.uOrigin=we.uOrigin,i.uniforms.uCloudSh=we.uCloudSh,i.uniforms.uTime=we.uTime,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;
${bi}${_v}${t}`).replace("#include <opaque_fragment>",`${yv}${e}
#include <opaque_fragment>`)}var Mv=`
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
// seen from a distance an autumn forest is a mass of individual crowns (a Worley pattern: each crown a soft dome,
// darker in the gaps) whose colours cluster into regions \u2014 cedar, still-green, orange, red, gold
vec3 autumnCanopy(vec2 p){
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
  vec3 c = pick < 0.22 ? L(vec3(0.17, 0.28, 0.19)) : pick < 0.36 ? L(vec3(0.3, 0.42, 0.22)) : pick < 0.58 ? L(vec3(0.82, 0.44, 0.16))
         : pick < 0.8 ? L(vec3(0.72, 0.22, 0.12)) : L(vec3(0.84, 0.64, 0.22));
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
    return mix(face, autumnCanopy(p), smoothstep(0.76, 0.88, vWN.y));
  }
  if (a < rw + 1.2) return L(vec3(0.5, 0.48, 0.42)) * (0.85 + 0.2 * vnoise(p * 2.0));       // shoulder
  float dw = abs(a - (rw + 75.0 + 14.0 * sin(s / 90.0)));                                    // a stream on the valley floor
  if (dw < 4.0) return mix(L(vec3(0.12, 0.36, 0.4)), uSkyHor, 0.35) * (0.85 + 0.2 * vnoise(vec2(s * 0.3 - uTime, u)));
  if (dw < 9.0) return L(vec3(0.62, 0.6, 0.56)) * (0.78 + 0.26 * hash12(floor(p * 3.0)));   // pale river stones
  if (a < rw + 3.7) return floorC;                                                           // brush right below the rail
  float meadow = smoothstep(rw + 31.0, rw + 36.0, a) * (1.0 - smoothstep(100.0, 112.0, a));  // the valley floor
  return mix(autumnCanopy(p), mix(floorC, L(vec3(0.42, 0.52, 0.25)) * (0.85 + 0.2 * vnoise(p * 0.9)), 0.55), meadow);
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
  gWater *= vZW.w * (1.0 - vRV);
  c = mix(c, riverBankCol(s, u), vRV);
  return c * (0.92 + 0.16*fbm2(vec2(s, u)*0.015));
}
`,Sv=`
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
}`,bv=`
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
}`;function Tv(){let i=new Ke({color:16777215,gradientMap:kn});return i.onBeforeCompile=t=>{t.uniforms.uSkyHor=we.uSkyHor,t.uniforms.uSkyZen=we.uSkyZen,t.uniforms.uWet=we.uWet,t.uniforms.uNight=we.uNight,t.uniforms.uSunDir=we.uSunDir,t.uniforms.uSunCol=we.uSunCol,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),cr(t,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN;
float gWater = 0.0;
${Mv}`,bv+Sv),t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},i.customProgramCacheKey=()=>"ground-v11",i}function Nf(i,t,e,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),cr(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-e/2).toFixed(3)} + ${e.toFixed(3)} * vnoise(vWP.xz * ${t.toFixed(2)} + vWP.y * ${(t*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}var Ev=0;function ur(i){let t="cs"+ ++Ev;return i.onBeforeCompile=e=>cr(e),i.customProgramCacheKey=()=>t,i}function Ff(i,t){let e={};e.ground=Tv(),e.color=Nf(new Ke({vertexColors:!0,gradientMap:kn}),1.6,.1,"color-v2"),e.atlas=new Ke({vertexColors:!0,gradientMap:kn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),e.atlas.onBeforeCompile=l=>cr(l),e.atlas.customProgramCacheKey=()=>"atlas-v2",e.foliage=Nf(new Ke({vertexColors:!0,gradientMap:Df}),2.6,.24,"foliage-v2"),e.lamp=new Ve({color:15789798}),e.sig=new Ve({color:new gt(.15,1.7,1.1)}),e.decal=new Ke({vertexColors:!0,gradientMap:kn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),e.decal.onBeforeCompile=l=>cr(l),e.decal.customProgramCacheKey=()=>"decal-v1",t&&(e.leaf=new Ke({map:t,vertexColors:!0,gradientMap:Df,alphaTest:.42,side:Qe}),e.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",te.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),cr(l),l.uniforms.uTuftV=we.uTuftV,l.uniforms.uWind=we.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind; uniform vec2 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y);
  float wgt = mix(0.03, 0.09 * clamp((uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x), 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},e.leaf.customProgramCacheKey=()=>"leaf-v3"),e.wire=new Ve({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let a=new Rn(n);return e.pool=new Ve({map:a,color:16762746,transparent:!0,opacity:0,blending:_i,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e.glowTex=a,e}var wv=rt("#f2c230"),Of=rt("#26272c");function kl(i,t){let e=[];for(let n of[-1,1]){let s=t+n*4.9,r=i.at(s,{}),a=xn(s,"rw"),l=n*(a+.8),o=Te(s),c=o.city+o.sakura>.5;e.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(c?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:a})}return e}function Bf(){let i=new Fe,t=ur(new Ke({vertexColors:!0,gradientMap:kn})),e=new Ve({color:new gt(6,.45,.3)}),n=new Ve({color:new gt(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Fe,a=new Fe;r.add(a),a.position.set(-.42,1.02,-.02);let l=new Be,o=3.6;for(let h=0,f=0;f<o;h++,f+=.45)l.box(-Math.min(f+.45,o),-.065,-.065,-f,.065,.065,h%2?Of:wv);l.box(0,-.09,-.07,.38,.09,.07,Of);let c=new he(l.build(),t);c.castShadow=!0,a.add(c);let u=[-.28,.28].map(h=>{let f=new he(new Wr(.13,18),n);return f.position.set(h,2.75,-.1),f.rotation.y=Math.PI,r.add(f),f});return i.add(r),{root:r,pivot:a,arm:c,lamps:u,L:o}});return i.visible=!1,{group:i,update(r,a,l,o,c){i.visible=!!r,r&&r.forEach((u,h)=>{let f=s[h];f.root.position.set(u.x-a.x,u.y,u.z-a.z),f.root.rotation.y=u.yaw,f.arm.scale.x=(u.rw+.25)/f.L,f.pivot.rotation.z=-l*(Math.PI/2-.06);let p=Math.floor(c*2.5)%2;f.lamps[0].material=o&&p===0?e:n,f.lamps[1].material=o&&p===1?e:n})}}}function Av(){let e=()=>{let d=document.createElement("canvas");return d.width=1024,d.height=512,d},n=e(),s=e(),r=n.getContext("2d"),a=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';a.fillStyle="#000",a.fillRect(0,0,1024,512);let o=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,o);for(let d=0;d<1024;d+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(d,0,2,o);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,o-14,1024,14);let c=[.1,.36,.62,.88].map(d=>d*1024),u=(d,v,T,_)=>{let y=r.createLinearGradient(d,v,d+T*.3,v+_);y.addColorStop(0,"#5d7fae"),y.addColorStop(.6,"#9db7d6"),y.addColorStop(1,"#2f3f55"),r.fillStyle=y,r.fillRect(d,v,T,_),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(d+T*.2,v),r.lineTo(d+T*.38,v),r.lineTo(d+T*.1,v+_),r.lineTo(d-T*.08,v+_),r.fill(),a.fillStyle="#ffeccc",a.fillRect(d,v,T,_)};for(let d=0;d<c.length-1;d++){let v=c[d]+40,T=c[d+1]-40,_=3,y=(T-v)/_;for(let S=0;S<_;S++)r.fillStyle="#6b737c",r.fillRect(v+S*y+2,34,y-4,58),u(v+S*y+6,38,y-12,50)}for(let d of[c[0]-70,c[3]+40])r.fillStyle="#6b737c",r.fillRect(d+2,34,28,58),u(d+5,38,22,50);for(let d of c)r.fillStyle="#c3c8ce",r.fillRect(d-30,22,60,o-36),r.fillStyle="#7b828a",r.fillRect(d-1,22,2,o-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(d-30,22,60,o-36),u(d-24,34,20,46),u(d+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let d of c)r.fillStyle="#c3c8ce",r.fillRect(d-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",c[1]+40,136);let h=0,f=176,p=256,g=256;r.fillStyle="#d3d7dc",r.fillRect(h,f,p,g),r.fillStyle="#20262e",r.fillRect(h+14,f+44,p-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(h+40,f+44),r.lineTo(h+80,f+44),r.lineTo(h+40,f+140),r.lineTo(h+14,f+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(h+p/2-4,f+44,8,96),r.fillStyle="#111",r.fillRect(h+50,f+12,p-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26),r.fillStyle="#1f9a50",r.fillRect(h,f+150,p,18),r.fillStyle="#e8892b",r.fillRect(h,f+170,p,7);for(let d of[h+40,h+p-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(d,f+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(d+(d<h+p/2?28:-28),f+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(h,f+g-30,p,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",h+p/2,f+220),a.fillStyle="#111",a.fillRect(h,f,p,g),a.fillStyle="#ff9a2a",a.font=`800 18px ${l}`,a.textAlign="center",a.textBaseline="middle",a.fillText("\u666E\u901A  \u6D77\u8FBA",h+p/2,f+26);for(let d of[h+40,h+p-40])a.fillStyle="#fffbe8",a.beginPath(),a.arc(d,f+200,13,0,7),a.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let x=d=>{let v=new Rn(d);return v.colorSpace=Ae,v.anisotropy=4,v},m=(d,v,T,_)=>({u0:d/1024,u1:(d+T)/1024,v0:1-(v+_)/512,v1:1-v/512});return{map:x(n),em:x(s),side:m(0,0,1024,o),sideR:{...m(0,0,1024,o),flip:!0},front:m(h,f,p,g),plain:m(342,202,28,28)}}function zf(){let i=Av(),t=ur(new Ke({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:kn})),e=new Be({uv:!0}),n=[1,1,1],s=rt("#9aa1a9"),r=rt("#3b4047"),a=rt("#2a2d33"),l=19.5,o=.6,c=3,u=1.45,h=.95,f=4,p=c*l+(c-1)*o;for(let v=0;v<c;v++){let T=-p/2+l/2+v*(l+o),_=T-l/2,y=T+l/2;e.quad([_,h,u],[y,h,u],[y,f,u],[_,f,u],n,i.side),e.quad([y,h,-u],[_,h,-u],[_,f,-u],[y,f,-u],n,i.side);let S=v===c-1,A=v===0;e.quad([y,h,u],[y,h,-u],[y,f,-u],[y,f,u],S?n:rt("#c9ced4"),S?i.front:i.plain),e.quad([_,h,-u],[_,h,u],[_,f,u],[_,f,-u],A?n:rt("#c9ced4"),A?i.front:i.plain),e.box(_+.1,f,-u+.1,y-.1,f+.14,u-.1,s,null,{noBottom:!0});for(let M of[T-5.5,T+5.5])e.box(M-1.3,f+.14,-.8,M+1.3,f+.55,.8,rt("#c4c9cf"),null,{noBottom:!0});e.box(_+2,.45,-u+.25,y-2,h,u-.25,a);for(let M of[T-7,T+7])e.box(M-1.3,.1,-1.2,M+1.3,.75,1.2,r);if(v===0){let M=T-3,b=f+.55;e.box(M-.6,f+.14,-.6,M+.6,f+.3,.6,r),e.rod([M-.5,f+.3,0],[M,b+.9,0],.03,.03,4,r),e.rod([M+.5,f+.3,0],[M,b+.9,0],.03,.03,4,r),e.rod([M,b+.9,-.85],[M,b+.9,.85],.03,.03,4,r)}}let g=new he(e.build(),t);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let x=new Fe;x.add(g),x.visible=!1;let m={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:p},d={};return{group:x,st:m,start(v,T,_=16){Object.assign(m,{active:!0,sx:v,dir:T,speed:_,u:-T*290,ds:T>0?-2:2,cleared:!1}),x.visible=!0},update(v,T,_,y,S){if(!m.active)return;m.u+=m.dir*m.speed*v;let A=m.u-m.dir*m.length/2;if(!m.cleared&&(m.dir>0?A>S+1:A<-S-1)&&(m.cleared=!0),Math.abs(m.u)>330){m.active=!1,x.visible=!1;return}T.at(m.sx,d),x.position.set(d.x+d.fx*m.ds+d.rx*m.u-_.x,d.y+.34,d.z+d.fz*m.ds+d.rz*m.u-_.z),x.rotation.y=d.h+(m.dir>0?Math.PI:0),t.emissiveIntensity=.3+y*1.1}}}var Rv='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',ys=2048,Ms=4096;function Gl(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var Gf=Gl(256,256);{let i=Gf.getContext("2d"),t=i.createImageData(256,256),e=rn(7);for(let n=0;n<t.data.length;n+=4){let s=128+(e()-.5)*120+(e()<.02?-60:0);t.data[n]=t.data[n+1]=t.data[n+2]=s,t.data[n+3]=255}i.putImageData(t,0,0)}var bu=class{constructor(){this.cA=Gl(ys,Ms),this.cE=Gl(ys/2,Ms/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,ys/2,Ms/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,ys,Ms),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Gf,"repeat")}add(t,e,n,s){if(this.x+e+4>ys&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Ms)throw new Error("atlas full at "+t);let a={x:this.x,y:this.y,w:e,h:n};this.x+=e+4,this.rowH=Math.max(this.rowH,n);for(let o of[this.a,this.e])o.save(),o===this.e&&o.scale(.5,.5),o.translate(a.x,a.y),o.beginPath(),o.rect(0,0,e,n),o.clip();s(this.a,this.e,e,n),this.a.restore(),this.e.restore();let l=.5;return this.cells[t]={u0:(a.x+l)/ys,u1:(a.x+e-l)/ys,v0:1-(a.y+n-l)/Ms,v1:1-(a.y+l)/Ms,w:e,h:n},this.cells[t]}uv(t){let e=this.cells[t];if(!e)throw new Error("no atlas cell "+t);return e}has(t){return!!this.cells[t]}textures(t){let e=n=>{let s=new Rn(n);return s.colorSpace=Ae,s.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),s.minFilter=On,s.generateMipmaps=!0,s};return{map:e(this.cA),emissive:e(this.cE)}}};function hn(i,t,e,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=t.grain,i.fillRect(0,0,e,n),i.restore()}function Wl(i,t,e,n,s,r){let a=i.createLinearGradient(0,e,0,e+s);r.forEach(([l,o])=>a.addColorStop(l,o)),i.fillStyle=a,i.fillRect(t,e,n,s)}function hr(i,t,e,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,e,n),Wl(i,0,0,e,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let a=r;a<n;a+=r)i.fillRect(0,a,e,1.5)}hn(i,t,e,n,.13)}function Ti(i,t,e,n,s,r=.13){let a=i.createLinearGradient(0,e,0,e+s);a.addColorStop(0,`rgba(55,55,70,${r})`),a.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=a,i.fillRect(t,e,n,s)}function ut(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t,e,n,s)}function fr(i,t,e,n,s,r,a="#d9dde2",l="rgba(40,45,60,0.55)"){ut(i,t-r,e-r,n+2*r,s+2*r,a),ut(i,t-r,e+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(t-r+.5,e-r+.5,n+2*r-1,s+2*r-1)}function Ei(i,t,e,n,s,r,a=0){let l=i.createLinearGradient(t,e,t+n*.35,e+s),o=a?"#4f78b8":"#5f93d6",c=a?"#86a9d4":"#a6c8ec";l.addColorStop(0,o),l.addColorStop(.55,c),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(t,e,n,s),i.save(),i.beginPath(),i.rect(t,e,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(t+n*(.2+r()*.6),e+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let u=t+n*r();i.beginPath(),i.moveTo(u,e),i.lineTo(u+n*.18,e),i.lineTo(u-n*.25,e+s),i.lineTo(u-n*.43,e+s),i.fill(),i.restore()}function kf(i,t,e,n,s,r="#efe6d2"){ut(i,t,e,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let a=0;a<n;a+=Math.max(3,n/7))i.fillRect(t+a,e,1.5,s);Wl(i,t,e,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function Xl(i,t,e=800){i.font=`${e} ${t}px ${Rv}`}function me(i,t,e,n,s,r,a,l=800,o=null){Xl(i,r,l);let c=r;for(;i.measureText(t).width>s&&c>6;)c-=1,Xl(i,c,l);i.textAlign="center",i.textBaseline="middle",o&&(i.lineWidth=Math.max(2,c*.12),i.strokeStyle=o,i.lineJoin="round",i.strokeText(t,e,n)),i.fillStyle=a,i.fillText(t,e,n)}function Hl(i,t,e,n,s,r,a,l=800,o=null){let c=[...t],u=c.length,h=Math.min(r*1.05,(s-n)/u),f=Math.min(r,h*.95);Xl(i,f,l),i.textAlign="center",i.textBaseline="middle",c.forEach((p,g)=>{let x=n+(s-n-h*u)/2+h*(g+.5);o&&(i.lineWidth=Math.max(2,f*.12),i.strokeStyle=o,i.strokeText(p,e,x)),i.fillStyle=a,i.fillText(p,e,x)})}function To(i,t,e,n,s,r,a){i.save(),i.shadowColor=r,i.shadowBlur=a,ut(i,t,e,n,s,r),i.restore()}var Hf=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Vl=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Vf=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],Cv=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Wf(){let i=new bu,t=rn(2024),e=240,n=(o,c,u,h,f,p)=>{hr(o,i,u,h,"#ece8e0",0);let g=rn(p*31+(f?7:0)+5);if(p===0){let x=u*.14,m=h*.22,d=u*.72,v=h*.5;fr(o,x,m,d,v,5),Ei(o,x,m,d/2,v,g),Ei(o,x+d/2,m,d/2,v,g),g()<.8&&kf(o,x+2,m+2,d*(.18+g()*.25),v-4,g()<.5?"#efe6d2":"#d9e4ea"),ut(o,x+d/2-2,m,4,v,"#cfd4da"),ut(o,x-8,m+v+5,d+16,6,"#d8d8d4"),Ti(o,x-4,m+v+11,8,60),Ti(o,x+d-4,m+v+11,8,60),f&&(To(c,x,m,d,v,"#ffcf8f",0),c.fillStyle="rgba(255,240,210,0.85)",c.fillRect(x+2,m+2,d*.3,v-4))}else if(p===1){for(let x of[.12,.56]){let m=u*x,d=h*.28,v=u*.3,T=h*.36;fr(o,m,d,v,T,4),Ei(o,m,d,v,T,g,1),o.fillStyle="rgba(255,255,255,0.35)",o.fillRect(m,d,v,T*.45),Ti(o,m,d+T+6,v,40,.1),f&&g()<.8&&To(c,m,d,v,T,g()<.5?"#ffd9a0":"#e8f0ff",0)}o.fillStyle="#c9c9c4",o.beginPath(),o.arc(u*.88,h*.2,9,0,7),o.fill()}else if(p===2){let x=u*.1,m=h*.12,d=u*.8,v=h*.84;fr(o,x,m,d,v,4),Ei(o,x,m,d/2,v,g),Ei(o,x+d/2,m,d/2,v,g),kf(o,x+2,m+2,d*(.2+g()*.3),v-4,t.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),ut(o,x+d/2-2,m,4,v,"#cfd4da"),f&&(To(c,x,m,d,v,"#ffcb85",0),c.fillStyle="rgba(255,236,200,0.9)",c.fillRect(x+2,m+2,d*.35,v-4))}else if(p===3){hr(o,i,u,h,"#dfe3e6",0);let x=h*.25,m=h*.55;Ei(o,0,x,u,m,g,1);for(let d=0;d<=u;d+=u/4)ut(o,d-2,x,4,m,"#8d98a6");if(ut(o,0,x-4,u,4,"#8d98a6"),ut(o,0,x+m,u,5,"#7d8796"),f)for(let d=0;d<4;d++)g()<.7&&(c.fillStyle=g()<.6?"#f2f6ff":"#ffe2b0",c.fillRect(d*u/4+2,x,u/4-4,m))}else if(p===4){o.fillStyle="#6b4a35",o.fillRect(0,0,u,h);for(let T=0;T<h;T+=12)ut(o,0,T,u,2,"rgba(30,18,10,0.35)"),ut(o,0,T+2,u,1,"rgba(255,220,180,0.06)");hn(o,i,u,h,.15);let x=u*.18,m=h*.25,d=u*.64,v=h*.45;ut(o,x-6,m-6,d+12,v+12,"#4a3020"),ut(o,x,m,d,v,"#efe4c8"),o.fillStyle="#5a3a26";for(let T=1;T<6;T++)o.fillRect(x+T*d/6-1.5,m,3,v);for(let T=1;T<3;T++)o.fillRect(x,m+T*v/3-1.5,d,3);if(f){c.fillStyle="#ffc070",c.fillRect(x,m,d,v),c.fillStyle="#000";for(let T=1;T<6;T++)c.fillRect(x+T*d/6-1.5,m,3,v)}}else if(p===5){ut(o,u*.08,0,7,h,"#bdbdb6"),ut(o,u*.08+5,0,2,h,"rgba(0,0,0,0.2)");let x=u*.55,m=h*.3,d=u*.22,v=h*.24;fr(o,x,m,d,v,3),ut(o,x,m,d,v,"#d6dfe4"),o.fillStyle="rgba(255,255,255,0.4)",o.fillRect(x,m,d,v/2),Ti(o,x,m+v+4,d,50,.12),ut(o,u*.22,h*.55,26,34,"#cfcfca"),ut(o,u*.22+4,h*.55+6,18,12,"#9aa2a8"),f&&To(c,x,m,d,v,"#fff0d8",0)}else if(p===6){let x=u*.4,m=h*.35,d=u*.2,v=h*.28;fr(o,x,m,d,v,3),Ei(o,x,m,d,v,g,1),Ti(o,x,m+v+4,d,70,.14),f&&To(c,x,m,d,v,"#ffd9a0",0)}};for(let o=0;o<7;o++)i.add("win"+o,e,e,(c,u,h,f)=>n(c,u,h,f,!1,o)),i.add("win"+o+"L",e,e,(c,u,h,f)=>n(c,u,h,f,!0,o));i.add("plain",e,e,(o,c,u,h)=>{hr(o,i,u,h,"#ece8e0"),Ti(o,u*.3,0,12,h*.6,.06)}),i.add("concrete",e,e,(o,c,u,h)=>{hr(o,i,u,h,"#d9d7d0",60);for(let f=0;f<6;f++)Ti(o,f*41%u,0,10,h*.5,.07)});let s=288,r=(o,c,u,h,f,p)=>{let g=rn(p);if(hr(o,i,u,h,"#e6e2da"),f==="glass"||f==="door"||f==="konbini"||f==="cafe"){let m=h*.22,d=u-12,v=h*.78-4;ut(o,6,m,d,v,f==="konbini"?"#f6f4ea":f==="cafe"?"#7a5a40":"#8a7a68");for(let y=m+v*.25;y<m+v;y+=v*.22){ut(o,6,y,d,3,"rgba(60,50,40,0.5)");for(let S=9;S<6+d-6;S+=6+g()*8)o.fillStyle=t.pick(["#e44","#4a8","#fc4","#48c","#f8a","#fff","#a6d","#f93"]),o.fillRect(S,y-6-g()*10,4+g()*5,6+g()*10)}f==="konbini"&&ut(o,6,m+4,d,5,"#ffffff"),o.save(),o.globalAlpha=.35,Ei(o,6,m,d,v,g),o.restore(),ut(o,6,m,d,4,"#4a4e57"),f==="door"&&(ut(o,u/2-2,m,4,v,"#4a4e57"),ut(o,u/2-14,m+v*.45,3,40,"#c0c4c8"),ut(o,u/2+11,m+v*.45,3,40,"#c0c4c8"),ut(o,u/2-30,m+18,60,24,"#fff"),me(o,"\u55B6\u696D\u4E2D",u/2,m+30,54,18,"#c82828")),f==="glass"&&g()<.7&&(ut(o,16,m+14,44,60,t.pick(["#f6d34a","#fff","#ff8aa0"])),me(o,t.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,m+44,40,16,"#c02020")),f==="cafe"&&(ut(o,u*.62,h-70,46,62,"#2c3a30"),me(o,"\u30E9\u30F3\u30C1",u*.62+23,h-50,40,13,"#fff",700));let _=f==="konbini"?"#c9d6e2":f==="cafe"?"#e8a060":"#e6c296";c.fillStyle=_,c.fillRect(6,m,d,v),c.fillStyle="rgba(0,0,0,0.35)";for(let y=m+v*.25;y<m+v;y+=v*.22)c.fillRect(6,y,d,3)}else if(f==="shutter"){let m=h*.2,d=u-12,v=h*.8;ut(o,6,m,d,v,"#b8bcc0");for(let T=m;T<m+v;T+=7)ut(o,6,T,d,2,"rgba(60,64,72,0.35)"),ut(o,6,T+2,d,1,"rgba(255,255,255,0.35)");ut(o,6,m,d,10,"#8f949a"),hn(o,i,u,h,.12),g()<.5&&(ut(o,u/2-40,m+v*.35,80,26,"#fff"),me(o,t.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),u/2,m+v*.35+13,74,16,"#333",700))}else if(f==="noren"){ut(o,0,0,u,h,"#5b3c28");for(let _=0;_<u;_+=10)ut(o,_,h*.2,3,h*.8,"rgba(25,15,8,0.6)");hn(o,i,u,h,.15);let x=u*.12,m=h*.24,d=u*.76,v=h*.34,T=t.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);ut(o,x,m,d,v,T);for(let _=1;_<3;_++)ut(o,x+d*_/3-1,m+v*.25,2,v*.75,"rgba(255,255,255,0.25)");me(o,t.pick(Cv),u/2,m+v*.55,d*.9,46,"#f5f0e6",800),ut(o,x,m,d,6,"#3a2a1c"),c.fillStyle="#ffae5c",c.fillRect(x,m+v,d,h-m-v),c.fillStyle="rgba(255,170,90,0.6)",c.fillRect(x,m,d,v),o.fillStyle="#d8352a",o.beginPath(),o.ellipse(u*.9,h*.36,13,19,0,0,7),o.fill(),me(o,"\u9152",u*.9,h*.36,16,14,"#fff"),c.fillStyle="#ff6a3a",c.beginPath(),c.ellipse(u*.9,h*.36,13,19,0,0,7),c.fill()}else if(f==="house"){let x=u*.18,m=h*.3,d=u*.34,v=h*.7;ut(o,x-6,m-6,d+12,v+6,"#9a9a96"),ut(o,x,m,d,v,t.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),ut(o,x+d-14,m+v*.5,4,22,"#d8d0c0"),ut(o,x+6,m+10,d-12,v*.25,"rgba(255,255,255,0.18)"),ut(o,u*.62,h*.48,30,22,"#cfcfca"),ut(o,u*.62+6,h*.48+5,18,4,"#555");let T=u*.6,_=h*.22,y=u*.3,S=h*.2;fr(o,T,_,y,S,3),Ei(o,T,_,y,S,g,1);for(let A=0;A<3;A++)o.fillStyle="#7b5a43",o.fillRect(u*.6+A*22,h-26,16,18),o.fillStyle=t.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),o.beginPath(),o.arc(u*.6+A*22+8,h-32,11,0,7),o.fill();c.fillStyle="#ffd08a",c.beginPath(),c.arc(x+d+14,m+8,6,0,7),c.fill(),g()<.6&&(c.fillStyle="#ffcf8f",c.fillRect(T,_,y,S))}else if(f==="garage"){let m=h*.25,d=u-16,v=h*.75;ut(o,8,m,d,v,"#efefec");for(let T=m;T<m+v;T+=9)ut(o,8,T,d,1.5,"rgba(80,80,90,0.25)");hn(o,i,u,h,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((o,c)=>{i.add("shop_"+o,e,s,(u,h,f,p)=>r(u,h,f,p,o,100+c)),(o==="glass"||o==="noren"||o==="house")&&i.add("shop_"+o+"2",e,s,(u,h,f,p)=>r(u,h,f,p,o,200+c))});for(let o=0;o<14;o++)i.add("hs"+o,512,76,(c,u,h,f)=>{let[p,g]=Vl[o%Vl.length],x=Hf[o*7%Hf.length];ut(c,0,0,h,f,p),ut(c,0,0,h,5,"rgba(255,255,255,0.35)"),ut(c,0,f-6,h,6,"rgba(0,0,0,0.18)"),o%3===0&&(ut(c,12,12,f-24,f-24,g),me(c,x[0],12+(f-24)/2,f/2,f-30,34,p)),me(c,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g,900),hn(c,i,h,f,.08),u.fillStyle=p==="#fff"||p==="#f5efe0"?"#d9d6cc":p,u.fillRect(0,0,h,f),u.globalAlpha=.9,me(u,x,h/2+(o%3===0?24:0),f/2+2,h*.7,50,g==="#fff"?"#ffffff":g,900),u.globalAlpha=1});for(let o=0;o<10;o++)i.add("vs"+o,72,288,(c,u,h,f)=>{let[p,g]=Vl[(o*3+1)%Vl.length],x=Vf[o%Vf.length];ut(c,0,0,h,f,p),c.strokeStyle="rgba(0,0,0,0.3)",c.lineWidth=4,c.strokeRect(2,2,h-4,f-4),Hl(c,x,h/2,12,f-12,56,g,900),hn(c,i,h,f,.08),ut(u,0,0,h,f,p==="#fff"?"#e8e8e8":p),Hl(u,x,h/2,12,f-12,56,g==="#fff"?"#fff":g,900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([o,c,u],h)=>i.add("bb"+h,512,240,(f,p,g,x)=>{ut(f,0,0,g,x,"#fbfaf5"),ut(f,0,0,g,x*.62,u),me(f,o,g/2,x*.32,g*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),me(f,c,g/2,x*.8,g*.85,52,"#333",800),hn(f,i,g,x,.08),ut(p,0,0,g,x,"#555"),p.globalAlpha=.85,ut(p,0,0,g,x*.62,u),me(p,o,g/2,x*.32,g*.9,96,"#fff",900),p.globalAlpha=1})),i.add("konbini_band",480,72,(o,c,u,h)=>{ut(o,0,0,u,h,"#fbfbf7"),ut(o,0,h*.62,u,h*.14,"#2a9a4a"),ut(o,0,h*.76,u,h*.12,"#f08a24"),ut(o,0,h*.88,u,h*.12,"#2f6fd8"),me(o,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",u/2,h*.32,u*.8,40,"#1d3d8a",900),c.fillStyle="#f3f6f0",c.fillRect(0,0,u,h),me(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",u/2,h*.32,u*.8,40,"#1d3d8a",900)});for(let o=0;o<3;o++)i.add("vend"+o,128,234,(c,u,h,f)=>{let p=["#d8352a","#2f6fd8","#f4f4f0"][o];ut(c,0,0,h,f,p),ut(c,8,10,h-16,f*.55,"#eef4f8");let g=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let x=0;x<4;x++)for(let m=0;m<6;m++){let d=14+m*17,v=18+x*30;c.fillStyle=g[(x*6+m+o)%g.length],c.fillRect(d,v,11,20),c.fillStyle="rgba(255,255,255,0.5)",c.fillRect(d+2,v+2,3,14),c.fillStyle="#2a2a2a",c.fillRect(d,v+23,11,3)}ut(c,10,f*.62,h-20,22,"#222"),ut(c,h-34,f*.66,14,22,"#bbb"),ut(c,14,f*.82,h-28,22,"#1b1b1b"),me(c,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][o],h/2,f*.62+11,h-28,14,"#fff",700),hn(c,i,h,f,.08),u.fillStyle="#f2f8ff",u.fillRect(8,10,h-16,f*.55);for(let x=0;x<4;x++)for(let m=0;m<6;m++)u.fillStyle=g[(x*6+m+o)%g.length],u.fillRect(14+m*17,18+x*30,11,20);u.fillStyle="#9fd0ff",u.fillRect(10,f*.62,h-20,22)});i.add("ac",128,88,(o,c,u,h)=>{ut(o,0,0,u,h,"#e9e9e4"),Wl(o,0,0,u,h,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),o.fillStyle="#9a9c9e",o.beginPath(),o.arc(u*.4,h*.5,h*.36,0,7),o.fill(),o.strokeStyle="#d6d6d2",o.lineWidth=2;for(let f=6;f<h*.36;f+=6)o.beginPath(),o.arc(u*.4,h*.5,f,0,7),o.stroke();for(let f=12;f<h-10;f+=6)ut(o,u*.78,f,u*.16,2,"#b8b8b2")}),i.add("plate",128,64,(o,c,u,h)=>{ut(o,0,0,u,h,"#f2cf3a"),o.strokeStyle="#2f5a2f",o.lineWidth=3,o.strokeRect(3,3,u-6,h-6),me(o,"\u54C1\u5DDD 580",u/2,16,u*.6,14,"#2f5a2f",700),me(o,"\u3042 12-34",u/2,42,u*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(o,c,u,h)=>{o.fillStyle="#fff",o.beginPath(),o.moveTo(2,2),o.lineTo(u-2,2),o.lineTo(u/2,h-2),o.fill(),o.fillStyle="#d8231c",o.beginPath(),o.moveTo(10,7),o.lineTo(u-10,7),o.lineTo(u/2,h-12),o.fill(),me(o,"\u6B62\u307E\u308C",u/2,34,u*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(o,c,u,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(u/2,h/2,u/2-1,0,7),o.fill(),o.fillStyle="#1e5bb8",o.beginPath(),o.arc(u/2,h/2,u/2-6,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.moveTo(u/2,22),o.lineTo(u/2+22,50),o.lineTo(u/2+8,50),o.lineTo(u/2+8,88),o.lineTo(u/2-8,88),o.lineTo(u/2-8,50),o.lineTo(u/2-22,50),o.fill()}),i.add("sign_speed",112,112,(o,c,u,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(u/2,h/2,u/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=12,o.beginPath(),o.arc(u/2,h/2,u/2-9,0,7),o.stroke(),me(o,"30",u/2,h/2+2,u*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(o,c,u,h)=>{ut(o,0,0,u,h,"#1d4f9a"),o.strokeStyle="#fff",o.lineWidth=2,o.strokeRect(3,3,u-6,h-6),Hl(o,"\u672C\u753A\u4E8C\u4E01\u76EE",u/2,10,h-10,24,"#fff",700)});for(let o=0;o<4;o++)i.add("poster"+o,64,90,(c,u,h,f)=>{let p=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][o];ut(c,0,0,h,f,p),ut(c,4,4,h-8,f*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][o]),me(c,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][o],h/2,f*.25,h-12,18,"#fff",900);for(let g=0;g<4;g++)ut(c,8,f*.58+g*8,h-16-g%2*14,3,"rgba(60,60,60,0.5)")});for(let o=0;o<3;o++)i.add("bal"+o,e,88,(c,u,h,f)=>{let p=["#e9e3d6","#dfe6ea","#efe2dc"][o];if(hr(c,i,h,f,p),o===1)for(let g=10;g<h-6;g+=h/6)ut(c,g,10,h/6-8,f-20,"rgba(220,235,245,0.9)"),c.fillStyle="rgba(255,255,255,0.45)",c.fillRect(g,10,h/6-8,(f-20)*.4);else{ut(c,0,0,h,7,"rgba(255,255,255,0.4)");for(let g=h/3;g<h;g+=h/3)ut(c,g-1,0,2,f,"rgba(0,0,0,0.08)")}ut(c,0,f-6,h,6,"rgba(0,0,0,0.12)"),Ti(c,h*.3,f-6,10,10,.2)});i.add("kawara",256,256,(o,c,u,h)=>{ut(o,0,0,u,h,"#58617a");for(let f=0;f<h;f+=16)Wl(o,0,f,u,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let f=0;f<u;f+=20)ut(o,f,0,2,h,"rgba(0,0,0,0.18)");hn(o,i,u,h,.12)}),i.add("wood",256,256,(o,c,u,h)=>{ut(o,0,0,u,h,"#6d4c37");for(let f=0;f<h;f+=14)ut(o,0,f,u,2,"rgba(25,15,8,0.4)"),ut(o,0,f+2,u,1,"rgba(255,220,180,0.07)");hn(o,i,u,h,.16)}),i.add("block",256,128,(o,c,u,h)=>{ut(o,0,0,u,h,"#c9c7bf");for(let f=0;f<h;f+=32)for(let p=f/32%2?-32:0;p<u;p+=64)o.strokeStyle="rgba(80,80,80,0.35)",o.lineWidth=2,o.strokeRect(p+1,f+1,62,30);for(let f=0;f<u;f+=64)o.fillStyle="rgba(70,70,70,0.25)",o.fillRect(f+20,40,24,16);hn(o,i,u,h,.15),Ti(o,0,0,u,40,.1)}),i.add("lantern",64,96,(o,c,u,h)=>{o.fillStyle="#d8352a",o.beginPath(),o.ellipse(u/2,h/2,u/2-2,h/2-8,0,0,7),o.fill();for(let f=16;f<h-12;f+=7)ut(o,4,f,u-8,1.5,"rgba(0,0,0,0.2)");ut(o,u/2-14,2,28,8,"#222"),ut(o,u/2-14,h-10,28,8,"#222"),me(o,"\u796D",u/2,h/2,u*.6,28,"#fff",900),c.fillStyle="#ff6a35",c.beginPath(),c.ellipse(u/2,h/2,u/2-2,h/2-8,0,0,7),c.fill()}),i.add("busstop",96,96,(o,c,u,h)=>{o.fillStyle="#fff",o.beginPath(),o.arc(u/2,h/2,u/2-1,0,7),o.fill(),o.strokeStyle="#d8231c",o.lineWidth=8,o.beginPath(),o.arc(u/2,h/2,u/2-6,0,7),o.stroke(),me(o,"\u30D0\u30B9\u505C",u/2,h/2,u*.66,20,"#1d3d8a",900)}),i.add("white",16,16,o=>ut(o,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(o,c,u,h)=>{o.save(),o.translate(u/2,h/2),o.rotate(Math.PI/4),o.fillStyle="#1b1b1b",o.fillRect(-41,-41,82,82),o.fillStyle="#f2c230",o.fillRect(-37,-37,74,74),o.restore(),o.fillStyle="#1b1b1b",o.fillRect(u/2-22,h/2-6,44,18),o.fillRect(u/2-16,h/2-16,18,12),o.fillRect(u/2+8,h/2-13,5,7),o.beginPath(),o.arc(u/2-12,h/2+15,5,0,7),o.arc(u/2+12,h/2+15,5,0,7),o.fill(),me(o,"\u8E0F\u5207",u/2,h/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((o,c)=>i.add("bridge"+c,64,176,(u,h,f,p)=>{ut(u,0,0,f,p,"#b9b5ab"),hn(u,i,f,p,.2),ut(u,6,6,f-12,p-12,"#a7a398"),Hl(u,o,f/2,14,p-14,34,"#3f3c37",800)})),i.add("signal",240,84,(o,c,u,h)=>{ut(o,0,0,u,h,"#4a4d52"),ut(o,0,0,u,5,"#5c6066"),hn(o,i,u,h,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([f,p])=>{o.fillStyle="#26282c",o.beginPath(),o.arc(p,h/2,33,0,7),o.fill(),o.fillStyle=f,o.beginPath(),o.arc(p,h/2,27,0,7),o.fill()})}),i.add("ped_sig",64,128,(o,c,u,h)=>{ut(o,0,0,u,h,"#3d4045"),o.fillStyle="#5a1814",o.fillRect(8,8,u-16,h/2-12),o.fillStyle="#0d4f44",o.fillRect(8,h/2+4,u-16,h/2-12),o.fillStyle="rgba(255,255,255,0.18)",o.beginPath(),o.arc(u/2,h*.18,6,0,7),o.fill(),o.fillRect(u/2-5,h*.24,10,18)}),i.add("tomare",256,96,(o,c,u,h)=>{o.clearRect(0,0,u,h),o.fillStyle="rgba(244,244,238,0.012)",o.fillRect(0,0,u,h),me(o,"\u6B62\u307E\u308C",u/2,h/2+4,u*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((o,c)=>i.add("hodokyo"+c,256,44,(u,h,f,p)=>{ut(u,0,0,f,p,"#1f4f96"),u.strokeStyle="#fff",u.lineWidth=3,u.strokeRect(4,4,f-8,p-8),me(u,o,f/2,p/2+1,f*.85,28,"#fff",800)}));let l=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];l.forEach(([o,c,u],h)=>{let f=l[(h+3)%4][0],p=l[(h+1)%4][0];i.add("ekimei"+h,320,124,(g,x,m,d)=>{ut(g,0,0,m,d,"#3a3d42"),ut(g,4,4,m-8,d-8,"#f8f8f3"),me(g,c,m/2,20,m*.5,15,"#2b2b2b",700),me(g,o,m/2,52,m*.6,40,"#151515",900),me(g,u,m/2,80,m*.5,12,"#555",600),ut(g,4,d-30,m-8,26,"#1f9a50"),g.fillStyle="#fff",Xl(g,12,700),g.textBaseline="middle",g.textAlign="left",g.fillText("\u2190 "+f,12,d-17),g.textAlign="right",g.fillText(p+" \u2192",m-12,d-17),hn(g,i,m,d,.06),ut(x,4,4,m-8,d-8,"#8a8a84")}),i.add("ekiplate"+h,220,48,(g,x,m,d)=>{ut(g,0,0,m,d,"#4b3326"),hn(g,i,m,d,.2),me(g,o+"\u99C5",m/2,d/2+1,m*.8,30,"#f3ead8",800)})});for(let o of["l","r"])i.add("chev_"+o,96,120,(c,u,h,f)=>{ut(c,0,0,h,f,"#f4f4ef"),ut(c,4,4,h-8,f-8,"#1e5bb8"),c.fillStyle="#f8f8f4",c.beginPath();let p=o==="r"?1:-1,g=h/2,x=f/2;c.moveTo(g-p*26,x-40),c.lineTo(g+p*22,x),c.lineTo(g-p*26,x+40),c.lineTo(g-p*8,x+40),c.lineTo(g+p*40,x),c.lineTo(g-p*8,x-40),c.closePath(),c.fill()});return i.add("xing_plate",128,48,(o,c,u,h)=>{ut(o,0,0,u,h,"#f6f6f2"),o.strokeStyle="#d8231c",o.lineWidth=4,o.strokeRect(3,3,u-6,h-6),me(o,"\u8E0F\u5207\u6CE8\u610F",u/2,h/2,u*.8,26,"#d8231c",900)}),i.add("rail",240,80,(o,c,u,h)=>{o.clearRect(0,0,u,h),ut(o,0,0,u,7,"#e9ebee"),ut(o,0,6,u,2,"rgba(60,70,80,0.5)"),ut(o,0,h-6,u,6,"#d5d8dc");for(let f=3;f<u;f+=9)ut(o,f,7,3,h-13,"#e2e5e9"),ut(o,f+2,7,1,h-13,"rgba(70,80,90,0.45)")}),i}function Xf(i){let n=Gl(1024,2048),s=n.getContext("2d"),r=rn(321),a={},l={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},o=(h,f,p)=>{let g=l[h],x=256,m=h==="pine",d=h==="sakura";s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let v=[[x,x,m?80:92]];for(let _=0;_<(m?10:14);_++){let y=r()*6.28,S=45+r()*120;v.push([x+Math.cos(y)*S,x+Math.sin(y)*S*(m?.42:.9),Math.min(34+r()*52,232-S)])}let T=d?2300:m?2600:2300;for(let _=0;_<T;_++){let y=v[Math.floor(r()*v.length)],S=r()*6.28,A=Math.sqrt(r())*y[2],M=y[0]+Math.cos(S)*A,b=y[1]+Math.sin(S)*A*(m?.45:1),C=A/y[2],D=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(C>.82?.5:0))));if(s.fillStyle=g[D],d){let P=7+r()*8;s.beginPath(),s.arc(M,b,P,0,7),s.fill(),r()<.25&&(s.fillStyle=g[4],s.beginPath(),s.arc(M-P*.3,b-P*.3,P*.4,0,7),s.fill())}else if(m)s.save(),s.translate(M,b),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(h==="momiji"){let P=8+r()*7;s.save(),s.translate(M,b),s.rotate(r()*6.28),s.beginPath();for(let L=0;L<10;L++){let w=L%2?P*.42:P,I=L/10*6.2832;s.lineTo(Math.cos(I)*w,Math.sin(I)*w)}s.closePath(),s.fill(),s.restore()}else if(h==="ginkgo"){let P=9+r()*7;s.save(),s.translate(M,b),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,P,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let P=9+r()*10;s.beginPath(),s.ellipse(M,b,P,P*.55,r()*6.28,0,7),s.fill()}}for(let _=0;_<90;_++){let y=r()*6.28,S=150+r()*85,A=x+Math.cos(y)*S,M=x+Math.sin(y)*S*(m?.45:.92);s.fillStyle=g[1+Math.floor(r()*4)],m?(s.save(),s.translate(A,M),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(A,M,d?6+r()*6:7+r()*6,0,7),s.fill())}if(d)for(let _=0;_<14;_++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let y=x+(r()-.5)*300,S=x+60+r()*120;s.beginPath(),s.moveTo(y,S),s.lineTo(y+(r()-.5)*40,S-20-r()*30),s.stroke()}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}},c=(h,f,p,g)=>{s.save(),s.translate(f,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let x=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],m=g?120:170;for(let d=0;d<m;d++){let v=256+(r()-.5)*(g?330:380)*Math.sqrt(r()),T=150+r()*(g?230:300)*(1-Math.abs(v-256)/300),_=(v-256)*.35+(r()-.5)*90,y=9+r()*9,S=v+_,A=512-T,M=Math.min(4,Math.floor(r()*2.2+T/380*2.6)),b=s.createLinearGradient(0,512,0,A);b.addColorStop(0,x[0]),b.addColorStop(.6,x[Math.max(1,M-1)]),b.addColorStop(1,x[M]),s.fillStyle=b,s.beginPath(),s.moveTo(v-y/2,512),s.quadraticCurveTo(v-y/2+_*.3,512-T*.55,S,A),s.quadraticCurveTo(v+y/2+_*.3,512-T*.5,v+y/2,512),s.fill()}if(g)for(let d=0;d<16;d++){let v=110+r()*290,T=150+r()*200,_=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(v+(r()-.5)*20,512),s.quadraticCurveTo(v+(r()-.5)*30,(T+512)/2,v,T),s.stroke(),_<.55){s.fillStyle="#fbfaf2";for(let y=0;y<12;y++){let S=y/12*6.283;s.beginPath(),s.ellipse(v+Math.cos(S)*11,T+Math.sin(S)*11,9,4.5,S,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(v,T,8,0,7),s.fill()}else if(_<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(v,T,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(v-3,T-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let y=0;y<6;y++)s.beginPath(),s.arc(v+(r()-.5)*16,T+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),a[h]={u0:f/1024,u1:(f+512)/1024,v0:1-(p+512)/2048,v1:1-p/2048}};o("leafA",0,0),o("leafB",512,0),o("sakura",0,512),o("pine",512,512),o("momiji",0,1024),o("ginkgo",512,1024),c("grass",0,1536,!1),c("flowers",512,1536,!0);let u=new Rn(n);return u.colorSpace=Ae,u.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy()),{tex:u,cells:a,tuftV:[0,1-1536/2048]}}var Ye=[1,1,1],lt={pole:rt("#b1b0a9"),metal:rt("#8d9198"),black:rt("#2a2b30"),yellow:rt("#f2c230"),white:rt("#f4f3ee"),trans:rt("#a0a3a8"),lampPole:rt("#727780"),lampHead:rt("#dcdcd6"),trunk:rt("#6a5444"),trunkDark:rt("#4b3a33"),leaf:rt("#86ba4c"),leafShade:rt("#2c6640"),sakura:rt("#ffd3e3"),sakuraShade:rt("#de94b4"),pine:rt("#55874c"),pineShade:rt("#1d4632"),cedar:rt("#41713e"),cedarShade:rt("#1b3e2a"),roof:rt("#bdbbb3"),parapet:rt("#dcdad2"),pipe:rt("#c4c4bf"),orange:rt("#f07a22"),red:rt("#d8352a"),vermilion:rt("#e2482c"),concrete:rt("#c9c7c0"),stone:rt("#a8a69e"),terracotta:rt("#b8653d"),rail:rt("#eeeeea")},Zi=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(rt),Pv=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(rt),Eu=null;function Yf(i){Eu=i}var li=i=>Eu.uv(i),ql=li,Iv=(i,t)=>Eu.has(t+"2")&&i()<.5?t+"2":t;function Yl(i,t,e,n,s=0){let r=new Wt().makeRotationY(s);return r.setPosition(t,e,n),new Wt().multiplyMatrices(i,r)}var ze=(i,t,e,n,s,r,a,l=Ye)=>i.quad([e,n,r],[t,n,r],[t,s,r],[e,s,r],l,li(a)),Ji=(i,t,e,n,s,r,a,l=Ye)=>i.quad([t,s,n],[t,s,e],[t,r,e],[t,r,n],l,li(a)),$i=(i,t,e,n,s,r,a,l=Ye)=>i.quad([t,s,e],[t,s,n],[t,r,n],[t,r,e],l,li(a)),dr=(i,t,e,n,s,r)=>i.quad(t,e,n,n,s,r?li(r):void 0);function Zl(i,t,e,n={}){let s=i.color;s.setM(t);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,lt.pole);for(let c=0;c<5;c++)s.cyl(0,.25+c*.3,0,.185,.185,.15,10,c%2?lt.black:lt.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,lt.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,lt.metal);let a=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let c of a)s.cyl(0,r-.53,c,.05,.035,.17,6,lt.white);for(let c of l)s.cyl(0,r-1.65,c,.045,.03,.15,6,lt.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,lt.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,lt.trans),s.box(-.06,7.2,.12,.06,7.35,.26,lt.metal),e()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,lt.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,lt.metal),e()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,lt.concrete);for(let c=2.4,u=0;c<r-2;c+=.45,u++)s.rod([0,c,0],[u%2?.3:-.3,c,0],.015,.015,3,lt.metal);return i.atlas.setM(t),ze(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),e()<.4&&ze(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(e()*4)),[...a.map(c=>[0,r-.4,c]),...l.map(c=>[0,r-1.52,c]),[0,5.72,-.3],[0,5.72,.3]].map(c=>new B(c[0],c[1],c[2]).applyMatrix4(t))}function wu(i,t,e,n={}){let s=i.color;s.setM(t),s.cyl(0,0,0,.08,.06,6,8,lt.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,lt.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,lt.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,lt.lampHead),i.lamp.setM(t),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,Ye);let r=n.poolY??.04;i.pool.setM(t),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],Ye,{u0:0,u1:1,v0:0,v1:1})}function Zf(i,t,e=.04){let n=i.color;n.setM(t),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,lt.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,lt.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,lt.lampHead),i.lamp.setM(t),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,Ye),i.pool.setM(t),i.pool.quad([-3.6,e,2.2],[3.6,e,2.2],[3.6,e,-5.2],[-3.6,e,-5.2],Ye,{u0:0,u1:1,v0:0,v1:1})}function Eo(i,t){let e=i.color;e.setM(t),e.cyl(0,0,0,.07,.06,3.2,8,rt("#3a3a3e")),e.box(-.2,3.2,-.2,.2,3.25,.2,rt("#3a3a3e")),e.cyl(0,3.75,0,.26,.04,.3,8,rt("#3a3a3e")),i.lamp.setM(t),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,Ye),i.pool.setM(t),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],Ye,{u0:0,u1:1,v0:0,v1:1})}function Au(i,t,e){let n=Math.floor(e()*3),s=[lt.red,rt("#2f6fd8"),lt.white][n];i.color.setM(t),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,un(s,.8)),i.atlas.setM(t),ze(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Tu(i,t,e,n,s){i.color.setM(t),i.color.box(e-.4,n,s,e+.4,n+.56,s+.28,rt("#e6e6e1")),i.atlas.setM(t),ze(i.atlas,e-.4,e+.4,n,n+.56,s-.003,"ac")}function Jf(i,t,e){let n=i.color;n.setM(t);let s=e.pick([rt("#c8ccd2"),rt("#c0392b"),rt("#2c6fb7"),rt("#2b2b2b"),rt("#e8c84a"),rt("#e98fb0")]);for(let a of[-.52,.52])for(let l=0;l<12;l++){let o=l/12*Math.PI*2,c=(l+1)/12*Math.PI*2;n.rod([a+Math.cos(o)*.33,.34+Math.sin(o)*.33,0],[a+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],.022,.022,3,lt.black)}let r=(a,l)=>n.rod(a,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,lt.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,lt.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,lt.metal)}function $f(i,t){let e=i.color;e.setM(t),e.box(-.2,0,-.2,.2,.04,.2,lt.orange),e.cyl(0,.04,0,.16,.03,.68,10,lt.orange),e.cyl(0,.32,0,.115,.095,.12,10,lt.white,!1)}function Kf(i,t,e,n=0,s=0){i.color.setM(t),i.color.cyl(n,0,s,.17,.21,.34,8,lt.terracotta),i.leaf.setM(t),wi(i,[n,.45,s],n,.62,s,.32+e()*.1,e()<.5?"leafA":"leafB",5,e,[1,1,1],[.55,.62,.7],[.35,.9])}function Ki(i,t,e,n,s=2.3,r=.6){i.color.setM(t),i.color.cyl(0,0,0,.035,.035,s+r/2,6,lt.metal),i.atlas.setM(t),n<0?$i(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,e):Ji(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,e)}function Qf(i,t){let e=i.color;e.setM(t),e.box(-.035,.84,-.035,.035,1.12,.035,rt("#efefea")),e.box(-.06,1,-.06,.06,1.1,.06,rt("#f0a020"))}function Ru(i,t,e){let n=i.color;n.setM(t),n.cyl(0,0,0,.05,.05,3.3,8,lt.orange);let s=0,r=3.25,a=.42,l=14;for(let o=0;o<l;o++){let c=o/l*Math.PI*2,u=(o+1)/l*Math.PI*2,h=(f,p,g)=>[e*g,r+Math.sin(f)*p,s+Math.cos(f)*p-.25];dr(n,h(0,0,-.02),h(e>0?u:c,a,-.02),h(e>0?c:u,a,-.02),lt.orange),dr(n,h(0,0,-.035),h(e>0?u:c,a*.86,-.035),h(e>0?c:u,a*.86,-.035),rt("#dfe9f2"))}}var Cu=null;function jf(i){Cu=i}function wi(i,t,e,n,s,r,a,l,o,c,u,h,f=0){let p=Cu[a];for(let g=0;g<l;g++){let x=o()*2-1,m=o()*2-1,d=o()*2-1;f&&(m=1.2+o());let v=Math.hypot(x,m,d)||1;x/=v,m/=v,d/=v;let T=-d,_=0,y=x;v=Math.hypot(T,y),v<.1&&(T=1,y=0,v=1),T/=v,y/=v;let S=m*y-d*_,A=d*T-x*y,M=x*_-m*T,b=Math.PI+(o()-.5)*.9,C=Math.cos(b),D=Math.sin(b),P=T*C+S*D,L=_*C+A*D,w=y*C+M*D,I=S*C-T*D,F=A*C-_*D,O=M*C-y*D,z=r*(1.3+o()*.45)/2,U=e+(o()-.5)*r*.6,G=n+(o()-.5)*r*(f?.15:.5),q=s+(o()-.5)*r*.6,ft=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([zt,Xt])=>[U+(P*zt+I*Xt)*z,G+(L*zt+F*Xt)*z*(f?.6:1),q+(w*zt+O*Xt)*z]),xt=ft.map(zt=>{let Xt=zt[0]-t[0],Q=zt[1]-t[1],st=zt[2]-t[2],Ct=Math.hypot(Xt,Q,st)||1;Xt/=Ct,Q/=Ct,st/=Ct;let Ht=zt[0]-e,J=zt[1]-n,at=zt[2]-s;return Ct=Math.hypot(Ht,J,at)||1,[Xt*.7+Ht/Ct*.3,Q*.7+J/Ct*.3+(f?.5:0),st*.7+at/Ct*.3]}),ee=ft.map(zt=>Af(u,c,.45+.55*Math.max(0,Math.min(1,(zt[1]-h[0])/(h[1]-h[0])))));i.leaf.card(ft,xt,p,ee)}}function td(i,t,e,n="grass",s=1){let r=Cu[n],a=(.42+e()*.38)*s,l=a*1.2,o=e()*Math.PI,c=[0,1,0],u=[c,c,c,c],h=[.6,.64,.58],f=[1,1,1];i.leaf.setM(t);for(let p of[o,o+Math.PI/2]){let g=Math.cos(p)*l/2,x=Math.sin(p)*l/2;i.leaf.card([[-g,-.05,-x],[g,-.05,x],[g,a,x],[-g,a,-x]],u,r,[h,h,f,f])}}function Lv(i,t,e,n=1){let s=e.range(5.5,7.5)*n;i.color.setM(t),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,lt.trunk);for(let c=0;c<3;c++){let u=e()*6.28;i.color.rod([0,s*.42,0],[Math.cos(u)*1.1*n,s*.68,Math.sin(u)*1.1*n],.09*n,.05*n,5,lt.trunk)}i.leaf.setM(t);let r=[0,s*.78,0],a=e()<.5?"leafA":"leafB",l=[s*.45,s*1.15],o=7+Math.floor(e()*3);for(let c=0;c<o;c++){let u=e()*6.28,h=(.6+e())*1.3*n;wi(i,r,Math.cos(u)*h,s*(.62+e()*.3),Math.sin(u)*h,(1.1+e()*.6)*n,a,6,e,[1,1,1],[.55,.62,.7],l)}wi(i,r,0,s*.98,0,1.4*n,a,7,e,[1,1,1],[.55,.62,.7],l)}function Dv(i,t,e,n=1){let s=e.range(5.5,7)*n;i.color.setM(t),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,lt.trunkDark);let r=[];for(let c=0;c<5;c++){let u=c/5*6.28+e()*.8,h=(2.2+e()*1.6)*n,f=[Math.cos(u)*h,s*(.62+e()*.18),Math.sin(u)*h];i.color.rod([0,s*.4,0],f,.12*n,.05*n,5,lt.trunkDark),r.push(f),i.color.rod(f,[f[0]*1.25,f[1]+.9*n,f[2]*1.25],.05*n,.02*n,4,lt.trunkDark)}i.leaf.setM(t);let a=[0,s*.72,0],l=[s*.5,s*1.1],o=[.72,.62,.72];for(let c of r)for(let u=0;u<2;u++)wi(i,a,c[0]+(e()-.5)*1.4*n,c[1]+e()*.9*n,c[2]+(e()-.5)*1.4*n,(1.2+e()*.5)*n,"sakura",6,e,[1,1,1],o,l);wi(i,a,0,s*.92,0,1.9*n,"sakura",9,e,[1,1,1],o,l)}function Nv(i,t,e,n=1){let s=i.color;s.setM(t);let r=(e()-.5)*1.6*n,a=e.range(5,7.5)*n,l=[r*.4,a*.45,.2],o=[r,a*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,lt.trunkDark),s.rod(l,o,.15*n,.09*n,6,lt.trunkDark),i.leaf.setM(t);let c=[[o[0],o[1]+.3,o[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[o[0]+.9*n,o[1]-.6,.8,1.1]];for(let[u,h,f,p]of c)s.rod(u>l[0]?l:o,[u,h-.2,f],.07*n,.04*n,4,lt.trunkDark),wi(i,[u,h-.8,f],u,h,f,p*n*1.3,"pine",9,e,[1,1,1],[.62,.68,.74],[h-.7,h+.5],1)}function Uv(i,t,e,n=1){let s=e.range(4.5,6.5)*n;i.color.setM(t),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,lt.trunkDark);let r=[];for(let c=0;c<5;c++){let u=c/5*6.28+e()*.8,h=(1.8+e()*1.4)*n,f=[Math.cos(u)*h,s*(.55+e()*.2),Math.sin(u)*h];i.color.rod([0,s*.38,0],f,.09*n,.04*n,5,lt.trunkDark),r.push(f)}i.leaf.setM(t);let a=[0,s*.7,0],l=[s*.45,s*1.1],o=[.62,.52,.56];for(let c of r)wi(i,a,c[0],c[1]+.4*n,c[2],(1.15+e()*.4)*n,"momiji",6,e,[1,1,1],o,l);wi(i,a,0,s*.92,0,1.6*n,"momiji",8,e,[1,1,1],o,l)}function Fv(i,t,e,n=1){let s=e.range(8,11)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,lt.trunk),i.leaf.setM(t);let r=[0,s*.62,0],a=[s*.3,s*1.02],l=[.68,.6,.52];for(let o=0;o<7;o++){let c=s*(.34+o*.09),u=(2.1-o*.24)*n,h=e()*6.28;wi(i,r,Math.cos(h)*u*.35,c,Math.sin(h)*u*.35,Math.max(.7,u)*1.05,"ginkgo",5,e,[1,1,1],l,a)}}function Ov(i,t,e,n=1){let s=e.range(9,14)*n;i.color.setM(t),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,lt.trunkDark),i.foliage.setM(t),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,lt.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,lt.cedar)}var Bv={broad:Lv,sakura:Dv,pine:Nv,cedar:Ov,maple:Uv,ginkgo:Fv},qf={};function Hn(i,t,e,n,s=1){let r=Math.floor(n()*4),a=e+r,l=qf[a];if(!l){let c={color:new Be,foliage:new Be,leaf:new Be({uv:!0})};Bv[e](c,new Wt,rn(1e3+r*77+e.length*13),1),l=qf[a]={c:c.color.toArrays(),f:c.foliage.toArrays(),l:c.leaf.toArrays()}}let o=t.clone().scale(new B(s,s,s));i.color.stamp(l.c,o),i.foliage.stamp(l.f,o),i.leaf.stamp(l.l,o)}function wo(i,t,e,n,s,r,a){let l=Math.max(1,Math.round(e/3)),o=e/l;for(let c of[-1,1])for(let u=0;u<n.length-1;u++)for(let h=0;h<l;h++){let f=u>0&&r()<.3?"win6"+(r()<a?"L":""):r()<.2?"win5":"plain";(c>0?Ji:$i)(i,c*t/2,h*o,(h+1)*o,n[u],n[u+1],f,s)}}function Ao(i,t,e,n,s,r=!1){i.quad([-t/2,n,e],[t/2,n,e],[t/2,n,0],[-t/2,n,0],lt.roof);let a=.5,l=.15;if(i.box(-t/2,n,-.02,t/2,n+a,l,lt.parapet),i.box(-t/2,n,e-l,t/2,n+a,e,lt.parapet),i.box(-t/2,n,0,-t/2+l,n+a,e,lt.parapet),i.box(t/2-l,n,0,t/2,n+a,e,lt.parapet),s()<.4){let o=(s()-.5)*t*.5,c=e*(.4+s()*.3);for(let[u,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(o+u-.05,n,c+h-.05,o+u+.05,n+1,c+h+.05,lt.metal);i.cyl(o,n+1,c,.85,.85,1.3,12,rt("#cfd2d4"))}r&&s()<.6&&i.box(-t*.15,n,e*.4,t*.15,n+2.6,e*.75,lt.parapet),s()<.3&&i.rod([t*.3,n,e*.5],[t*.3,n+3.5,e*.5],.03,.02,4,lt.metal)}function ed(i,t,e,n,s){i.color.box(t-.06,e,-.88,t+.06,n,-.12,lt.black);let r="vs"+Math.floor(s()*10);$i(i.atlas,t-.065,-.88,-.12,e,n,r),Ji(i.atlas,t+.065,-.88,-.12,e,n,r),i.color.box(t-.03,e+.3,-.12,t+.03,e+.36,0,lt.metal),i.color.box(t-.03,n-.36,-.12,t+.03,n-.3,0,lt.metal)}function Qi(i,t,e,n){switch(i.atlas.setM(t),i.color.setM(t),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,lt.concrete,null,{noBottom:!0}),n.type){case"shop":return zv(i,t,e,n);case"apt":return kv(i,t,e,n);case"office":return Hv(i,t,e,n);case"konbini":return Vv(i,t,e,n);case"house":return Gv(i,t,e,n);case"tower":return Wv(i,t,e,n)}}function zv(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=3.6,f=3,p=h+(a-1)*f,g=Math.max(1,Math.round(s/3)),x=s/g,m=-s/2,d=e.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]);for(let y=0;y<g;y++)ze(c,m+y*x,m+(y+1)*x,0,h,0,Iv(e,"shop_"+d[y%d.length]));let v=e.pick([0,0,1,5,0,1]),T=[0,h];for(let y=1;y<a;y++)T.push(h+y*f);for(let y=1;y<a;y++)for(let S=0;S<g;S++){let A=S%2===1&&e()<.3?5:v;ze(c,m+S*x,m+(S+1)*x,T[y],T[y+1],0,"win"+A+(e()<o?"L":""),l)}wo(c,s,r,T,l,e,o),u.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],un(l,.8)),Ao(u,s,r,p,e);let _=s*.94;if(u.box(-_/2,h-.8,-.3,_/2,h+.08,-.02,lt.black),ze(c,-_/2,_/2,h-.8,h+.08,-.305,"hs"+Math.floor(e()*14)),e()<.55){let y=e.pick(Pv),S=h-.85;u.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],y),u.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],un(y,.85))}if(a>=2&&e()<.65){let y=(e()<.5?1:-1)*(s/2-.35);ed(i,y,h+.3,Math.min(p-.15,h+2.8),e)}for(let y=1;y<a;y++)if(e()<.4){let S=Math.floor(e()*g),A=m+S*x+.15,M=m+(S+1)*x-.15,b=T[y];u.box(A,b-.12,-.9,M,b,0,lt.parapet),ze(c,A,M,b,b+1,-.9,"rail"),$i(c,A,-.9,0,b,b+1,"rail"),Ji(c,M,-.9,0,b,b+1,"rail"),e()<.45&&od(u,A+.1,M-.1,b+1.95,-.55,e),e()<.6&&Tu(i,t,(A+M)/2+.6,b,-.75)}else if(e()<.35){let S=Math.floor(e()*g);Tu(i,t,m+(S+.5)*x,T[y]+.15,-.3),i.color.setM(t),i.atlas.setM(t)}u.cyl(m+.12,0,-.08,.05,.05,p,6,lt.pipe,!1),u.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,rt("#d9d9d3")),a>=3&&e()<.18&&nd(i,s,p,r,e)}function nd(i,t,e,n,s){let r=Math.min(t*.85,7),a=r*.47,l=n*.3;for(let o of[-r*.35,r*.35])i.color.box(o-.06,e,l,o+.06,e+1.2+a,l+.12,lt.metal);i.color.box(-r/2,e+1.2,l+.12,r/2,e+1.2+a,l+.3,lt.metal),ze(i.atlas,-r/2,r/2,e+1.2,e+1.2+a,l+.115,"bb"+Math.floor(s()*4))}function kv(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=3.2,f=2.95,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3.2)),x=s/g,m=-s/2,d=[0,h];for(let _=1;_<a;_++)d.push(h+_*f);for(let _=0;_<g;_++)ze(c,m+_*x,m+(_+1)*x,0,h,0,_===Math.floor(g/2)?"shop_door":e.pick(["shop_house","shop_garage","plain"]),_===Math.floor(g/2)?Ye:l);let v="bal"+Math.floor(e()*3),T=un(l,.97);for(let _=1;_<a;_++){let y=d[_];for(let S=0;S<g;S++)ze(c,m+S*x,m+(S+1)*x,y,d[_+1],0,"win2"+(e()<o?"L":""),l);u.box(m,y-.15,-1.3,-m,y,0,T),u.box(m,y,-1.3,-m,y+1.1,-1.18,T,null,{noBottom:!0});for(let S=0;S<g;S++)ze(c,m+S*x,m+(S+1)*x,y,y+1.1,-1.305,v,l);for(let S=0;S<=g;S++)u.box(m+S*x-.05,y,-1.18,m+S*x+.05,y+2.4,0,un(l,.92));for(let S=0;S<g;S++){let A=e(),M=m+S*x+.2,b=m+(S+1)*x-.2;A<.34?od(u,M,b,y+2.02,-.98,e):A<.46&&Yv(u,M+.25,Math.min(b-.25,M+1.9),y+1.1,-1.3,e)}i.atlas.setM(t);for(let S=0;S<g;S++)e()<.55&&(Tu(i,t,m+(S+.78)*x,y,-.55),i.atlas.setM(t),i.color.setM(t))}u.box(m,p-.15,-1.3,-m,p,0,T),wo(c,s,r,d,l,e,o),u.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],un(l,.8)),Ao(u,s,r,p,e,!0)}function Hv(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=4,f=3.4,p=h+(a-1)*f,g=Math.max(2,Math.round(s/3)),x=s/g,m=-s/2,d=[0,h];for(let v=1;v<a;v++)d.push(h+v*f);for(let v=0;v<g;v++)ze(c,m+v*x,m+(v+1)*x,0,h,0,v===1?"shop_door":"shop_glass");for(let v=1;v<a;v++)for(let T=0;T<g;T++)ze(c,m+T*x,m+(T+1)*x,d[v],d[v+1],0,"win3"+(e()<o?"L":""),l);wo(c,s,r,d,l,e,o),u.quad([-s/2,0,r],[s/2,0,r],[s/2,p,r],[-s/2,p,r],un(l,.8)),Ao(u,s,r,p,e,!0),e()<.6&&ed(i,(e()<.5?1:-1)*(s/2-.3),h+.4,Math.min(p-.3,h+4.5),e),e()<.3&&nd(i,s,p,r,e)}function Vv(i,t,e,n){let{w:s,d:r}=n,a=i.atlas,l=i.color,o=4.4,c=-s/2,u=Math.max(3,Math.round(s/3)),h=s/u;for(let f=0;f<u;f++)ze(a,c+f*h,c+(f+1)*h,0,3.4,0,"shop_konbini");l.box(c,3.4,-.35,-c,o,0,lt.white),ze(a,c,-c,3.4,o,-.355,"konbini_band"),wo(a,s,r,[0,o],rt("#f2f2ee"),e,0),Ao(l,s,r,o,e)}function Gv(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=2.9,f=a*h,p=-s/2,g=e()<.5,x=Math.max(2,Math.round(s/3)),m=s/x,d=[];for(let M=0;M<=a;M++)d.push(M*h);let v=g?Ye:l;for(let M=0;M<a;M++)for(let b=0;b<x;b++){let C=g?"win4":"win0";M===0&&b===0?C="shop_house":e()<o&&(C+="L"),ze(c,p+b*m,p+(b+1)*m,d[M],d[M+1],0,C,C==="shop_house"?Ye:v)}wo(c,s,r,d,g?rt("#9a7a62"):l,e,o),u.quad([-s/2,0,r],[s/2,0,r],[s/2,f,r],[-s/2,f,r],un(l,.75));let T=.6,_=Math.min(2.4,r*.32),y=li("kawara"),S=rt("#c8ccd8");c.quad([s/2+T,f-.25,-T],[-s/2-T,f-.25,-T],[-s/2-T,f+_,r/2],[s/2+T,f+_,r/2],S,y),c.quad([-s/2-T,f-.25,r+T],[s/2+T,f-.25,r+T],[s/2+T,f+_,r/2],[-s/2-T,f+_,r/2],S,y);let A=g?rt("#7a5a42"):l;if(dr(u,[-s/2,f,0],[-s/2,f,r],[-s/2,f+_-.1,r/2],A),dr(u,[s/2,f,r],[s/2,f,0],[s/2,f+_-.1,r/2],A),u.box(-s/2-T,f+_-.05,r/2-.15,s/2+T,f+_+.18,r/2+.15,rt("#3d4456")),a>1){let M=h+.05;c.quad([s/2+.1,M-.3,-.75],[-s/2-.1,M-.3,-.75],[-s/2-.1,M+.05,0],[s/2+.1,M+.05,0],S,y)}if(n.fence){let M=-n.fence,b=1.2;for(let[C,D]of[[-s/2,-1],[.4,s/2]])u.box(C,0,M-.08,D,b,M+.08,lt.concrete),ze(c,C,D,0,b,M-.085,"block")}}function Wv(i,t,e,n){let{w:s,d:r,floors:a,tint:l,litP:o}=n,c=i.atlas,u=i.color,h=3.4,f=a*h,p=Math.max(2,Math.round(s/6)),g=s/p,x=-s/2,m=e()<.5?"win3":"win2",d=[];for(let _=0;_<=a;_++)d.push(_*h);for(let _=0;_<a;_++)for(let y=0;y<p;y++)ze(c,x+y*g,x+(y+1)*g,d[_],d[_+1],0,m+(e()<o?"L":""),l);let v=Math.max(1,Math.round(r/6)),T=r/v;for(let _ of[-1,1])for(let y=0;y<a;y++)for(let S=0;S<v;S++)(_>0?Ji:$i)(c,_*s/2,S*T,(S+1)*T,d[y],d[y+1],m+(e()<o?"L":""),l);Ao(u,s,r,f,e,!0)}function id(i,t,e){let n=i.color;n.setM(t);let s=e.pick([rt("#f2f2ee"),rt("#c9cdd2"),rt("#2b2f38"),rt("#b33a32"),rt("#9fc6c0"),rt("#e7d9b4"),rt("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,un(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,rt("#2a3346"));for(let[r,a]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,a-.11,r+.3,.6,a+.11,lt.black)}function Pu(i,t,e,n){let s=i.color,r=rt("#8d9096"),a=rt("#3a3d42");s.setM(t),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,o=-n+.62;s.box(-.14,5.08,l,.14,5.56,o,a);let c=e*.141;i.atlas.setM(t),(e>0?Ji:$i)(i.atlas,c,l,o,5.08,5.56,"signal");let u=e>0?o:l,h=e>0?-1:1;for(let p=0;p<3;p++){let g=u+h*(.2+p*.4);s.box(e>0?.14:-.36,5.47,g-.15,e>0?.36:-.14,5.5,g+.15,a)}let f=u+h*.2;i.sig.setM(t),i.sig.box(e>0?.145:-.16,5.21,f-.11,e>0?.16:-.145,5.43,f+.11,Ye)}function sd(i,t,e,n){let s=i.color,r=rt("#3d6ea8"),a=rt("#e8eef2"),l=rt("#c7c5bf"),o=5.35;s.setM(t),s.box(-1.1,o-.65,-e,1.1,o,e,r);for(let c of[-1.1,1])s.box(c,o,-e,c+.1,o+1.1,e,a),s.box(c-.02,o+1.1,-e,c+.12,o+1.18,e,r);i.atlas.setM(t),$i(i.atlas,-1.105,-2.2,2.2,o-.62,o-.06,n),Ji(i.atlas,1.105,-2.2,2.2,o-.62,o-.06,n),s.setM(t);for(let c of[-1,1]){let u=c*(e-1.65),h=c*(e-.15),f=Math.min(u,h),p=Math.max(u,h);s.box(-.45,.15,f+.3,.45,o-.65,p-.3,r);let g=20,x=(o-.15)/g;for(let m=0;m<g;m++)s.box(1.1+m*.3,.15,f,1.1+(m+1)*.3,o-(m+1)*x+.04,p,l);s.box(1.1,o-.1,f-.05,1.1+g*.3,o-.02,f+.05,r)}}function rd(i,t,e,n,s,r,a){let l=i.color,o=1.22,c=3.55,u=6.7,h=rt("#c8c5bd"),f=rt("#ebe8de"),p=rt("#7a5a42"),g=rt("#5e4433"),x=rt("#4d5468");l.setM(t),l.box(e,-1.4,c,n,o,u,h,null,{noBottom:!0}),l.box(e,o,c,n,o+.025,c+.32,f),l.box(e,o,c+.6,n,o+.04,c+.9,lt.yellow);let m=Math.sign(s-(e+n)/2),d=m>0?n:e,v=d+m*6.2,T=c+.9,_=u-.2,y=(U,G,q)=>[U,G,q];m>0?l.quad(y(v,.1,_),y(v,.1,T),y(d,o,T),y(d,o,_),h):l.quad(y(v,.1,T),y(v,.1,_),y(d,o,_),y(d,o,T),h);for(let U of[T,_]){let G=rt("#9aa0a6");l.rod([v,.1+.9,U],[d,o+.9,U],.03,.03,5,G);for(let q=0;q<=3;q++){let ft=v+(d-v)*q/3,xt=.1+(o-.1)*q/3;l.box(ft-.03,xt,U-.03,ft+.03,xt+.9,U+.03,G)}}i.atlas.setM(t);for(let U=e;U<n-.01;U+=3){let G=Math.min(n,U+3);i.atlas.quad([U,-.6,u+.004],[G,-.6,u+.004],[G,o,u+.004],[U,o,u+.004],rt("#d8d4ca"),li("concrete"))}l.setM(t);for(let U=e+.4;U<n;U+=2)l.box(U-.05,o,u-.12,U+.05,o+1,u-.02,rt("#8f949a"));for(let U of[.45,.95])l.box(e,o+U,u-.1,n,o+U+.06,u-.04,rt("#8f949a"));let S=n-e,A=U=>m>0?n-S*U:e+S*U,M=A(.47),b=M-2.3,C=M+2.3,D=c+1.35,P=u-.25;l.box(b,o,P-.12,C,o+2.45,P,p);for(let U of[b,C-.12])l.box(U,o,D+.6,U+.12,o+2.45,P,g);for(let U of[b,C-.12])l.box(U,o,D,U+.12,o+2.45,D+.12,g);l.quad([C+.4,o+2.5,D-.45],[b-.4,o+2.5,D-.45],[b-.4,o+2.85,P+.35],[C+.4,o+2.85,P+.35],x),l.quad([b-.4,o+2.42,D-.45],[C+.4,o+2.42,D-.45],[C+.4,o+2.77,P+.35],[b-.4,o+2.77,P+.35],rt("#3a3f50")),l.box(b+.3,o+.42,P-.55,C-.3,o+.48,P-.15,rt("#8a6a4a"));for(let U of[b+.4,C-.5])l.box(U,o,P-.5,U+.08,o+.42,P-.2,lt.metal);i.atlas.setM(t),i.atlas.quad([M-1.1,o+1.55,P+.005],[M+1.1,o+1.55,P+.005],[M+1.1,o+2.03,P+.005],[M-1.1,o+2.03,P+.005],Ye,li("ekiplate"+r));let L=A(.2),w=c+1.6,I=1.25,F=o+1.25,O=F+.95;l.setM(t);for(let U of[L-I+.12,L+I-.12])l.cyl(U,o,w,.05,.05,O-o+.05,8,rt("#6b7078"));l.box(L-I,F-.03,w-.03,L+I,O+.03,w+.03,rt("#3a3d42")),i.atlas.setM(t),i.atlas.quad([L-I,F,w+.035],[L+I,F,w+.035],[L+I,O,w+.035],[L-I,O,w+.035],Ye,li("ekimei"+r)),i.atlas.quad([L+I,F,w-.035],[L-I,F,w-.035],[L-I,O,w-.035],[L+I,O,w-.035],Ye,li("ekimei"+r)),l.setM(t);let z=M-m*4.2;l.box(z-.9,o+.42,u-1.25,z+.9,o+.47,u-.85,rt("#3b6ea8")),l.box(z-.9,o+.47,u-.88,z+.9,o+.9,u-.83,rt("#3b6ea8"));for(let U of[z-.75,z+.7])l.box(U,o,u-1.2,U+.06,o+.42,u-.9,lt.metal);for(let U=e+3;U<n-1;U+=9)Eo(i,Yl(t,U,o,u-.45))}var Xv=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(rt),qv=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(rt);function od(i,t,e,n,s,r){i.rod([t,n,s],[e,n,s],.018,.018,4,lt.metal);let a=t+.12+r()*.2;for(;a<e-.35;){let l=.28+r()*.34,o=.36+r()*.42,c=r.pick(Xv),u=s+(r()-.5)*.06;i.quad([a+l,n-o,u],[a,n-o,u],[a,n-.02,u],[a+l,n-.02,u],c),i.quad([a,n-o,u+.01],[a+l,n-o,u+.01],[a+l,n-.02,u+.01],[a,n-.02,u+.01],un(c,.85)),r()<.4&&i.box(a+l*.45,n-.02,u-.02,a+l*.55,n+.06,u+.02,rt("#d8d8d0")),a+=l+.06+r()*.22}}function Yv(i,t,e,n,s,r){let a=r.pick(qv),l=.11;i.box(t,n-.02,s-l,e,n+.09,s+.22,a),i.box(t,n-.72,s-l,e,n+.09,s-.005,a),i.box(t+.08,n-.5,s-l-.004,e-.08,n-.42,s-l+.01,un(a,.86))}function ad(i,t){let e=i.color,n=rt("#a19f97"),s=rt("#6b4a35"),r=rt("#4f4a44"),a=rt("#c8342a");e.setM(t),e.box(-.62,-.6,-.46,.62,.32,.46,rt("#8d8b84"));for(let l of[-.52,.48])for(let o of[-.36,.32])e.box(l,.32,o,l+.05,1.5,o+.05,s);e.box(-.55,1.42,.3,.55,1.5,.4,s),e.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),e.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),e.cyl(0,.32,0,.17,.13,.44,10,n),e.blob(0,.86,0,.11,n,un(n,.8),0),e.cyl(0,.6,0,.19,.11,.16,10,a,!1),e.cyl(0,.93,0,.115,.03,.1,8,a);for(let l of[-.32,.3])e.cyl(l,.32,-.18,.05,.06,.07,8,rt("#e9e6dc"));e.box(-.06,.32,-.32,.06,.58,-.28,rt("#5b8d3d"))}function ld(i,t){let e=i.color;e.setM(t);for(let n=0;n<8;n++)e.cyl(0,n*.4,0,.075,.075,.4,8,n%2?lt.black:lt.yellow,!1);e.cyl(0,3.2,0,.075,.055,.75,8,lt.black),e.box(-.5,2.55,-.06,.5,2.95,.02,lt.black);for(let n of[-.28,.28])e.box(n-.17,2.9,-.3,n+.17,2.95,-.06,lt.black);e.box(-.78,-.9,-.34,.3,0,.34,lt.concrete,null,{noBottom:!0}),e.box(-.68,0,-.26,-.16,1.18,.26,rt("#e9e9e3")),e.box(-.68,1.18,-.26,-.16,1.24,.26,lt.yellow);for(let n of[Math.PI/4,-Math.PI/4]){e.setM(new Wt().multiplyMatrices(t,new Wt().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)e.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?lt.black:lt.yellow)}e.setM(t),i.atlas.setM(t),ze(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function cd(i,t){let e=i.color;e.setM(t),e.box(-.4,0,-.4,.4,.25,.4,lt.stone),e.cyl(0,.25,0,.14,.12,.95,8,lt.stone),e.box(-.32,1.2,-.32,.32,1.3,.32,lt.stone),e.box(-.26,1.3,-.26,.26,1.72,.26,un(lt.stone,1.05)),e.cyl(0,1.72,0,.55,.08,.38,6,un(lt.stone,.92)),i.lamp.setM(t),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,Ye),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,Ye)}function Iu(i,t,e,n=6.2){let s=i.color;s.setM(t);for(let r of[-e,e])s.cyl(0,0,r,.32,.27,n,12,lt.vermilion),s.cyl(0,0,r,.38,.38,.5,12,lt.black);s.box(-.2,n*.78,-e-.6,.2,n*.78+.35,e+.6,lt.vermilion),s.box(-.35,n-.1,-e-1,.35,n+.3,e+1,lt.vermilion),s.box(-.45,n+.3,-e-1.3,.45,n+.6,e+1.3,lt.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,lt.vermilion)}function ud(i,t,e){let n=i.color;n.setM(t);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,rt("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,rt("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,rt("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,rt("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,lt.metal),n.box(1.1,0,.3,1.2,.42,.55,lt.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,lt.metal),i.atlas.setM(t),$i(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Ji(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function hd(i,t,e,n=1){let s=i.color;s.setM(t);let r=un(lt.concrete,.85+e()*.15),a=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],l=.55*n;for(let o of a)s.rod([0,l,0],[o[0]*.95*n,l+o[1]*.95*n,o[2]*.95*n],.42*n,.26*n,7,r)}function fd(i,t){let e=i.color;e.setM(t),i.foliage.setM(t),i.foliage.blob(0,.5,0,6,rt("#8f8a80"),rt("#55524c"),1,.5),e.cyl(0,2,0,2,1.4,15,14,lt.white);for(let n of[6,11])e.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,lt.red,!1);e.cyl(0,17,0,1.9,1.9,.25,14,lt.black),e.cyl(0,18.6,0,1,.25,1.2,12,lt.red),i.lamp.setM(t),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,Ye)}function dd(i,t,e){let n=i.color;n.setM(t);let s=e.pick([rt("#f4f4f0"),rt("#3b6ea5"),rt("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),dr(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),dr(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,lt.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,lt.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,rt("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,lt.metal)}function pd(i,t,e){let n=i.color;n.setM(t),n.box(-.8,0,.6,.8,.5,2,lt.stone),n.box(-.55,.5,.9,.55,1.5,1.8,rt("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],rt("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],rt("#4d5468")),Iu(i,Yl(t,0,0,-.3,Math.PI/2),.75,2.2)}var Ze=60,Jv=[.7,.9,1.5,1.9,2,2.1,2.65,3.05,3.4],$v=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Lu=32,Ro=[.025,.026,.032],md=[.05,.05,.065],ji=(i,t)=>(i%t+t)%t,ts=(i,t)=>{let e=ar(i);return!!e&&Math.abs(i-e.s)<t},Du=(i,t)=>Math.abs(i-Math.round(i/150)*150)<t,Pn=(i,t)=>{let e=Si(i);return!!e&&Math.abs(i-e.s)<t},Nu=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.I=[]}grid(t,e,n){let s=this.P.length/3;for(let r=0;r<t;r++)for(let a=0;a<e;a++){let l=n(r,a);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0)}for(let r=0;r<t-1;r++)for(let a=0;a<e-1;a++){let l=s+r*e+a,o=l+1,c=l+e,u=c+1;this.I.push(l,o,c,o,u,c)}}gridN(t,e,n){let s=this.P.length/3;this.grid(t,e,n);let r=this.P,a=this.N,l=(o,c)=>(s+Math.min(t-1,Math.max(0,o))*e+Math.min(e-1,Math.max(0,c)))*3;for(let o=0;o<t;o++)for(let c=0;c<e;c++){let u=l(o,c-1),h=l(o,c+1),f=l(o-1,c),p=l(o+1,c),g=r[h]-r[u],x=r[h+1]-r[u+1],m=r[h+2]-r[u+2],d=r[p]-r[f],v=r[p+1]-r[f+1],T=r[p+2]-r[f+2],_=x*T-m*v,y=m*d-g*T,S=g*v-x*d;y<0&&(_=-_,y=-y,S=-S);let A=Math.hypot(_,y,S)||1,M=l(o,c);a[M]=_/A,a[M+1]=y/A,a[M+2]=S/A}}build(){let t=new de;return t.setAttribute("position",new qt(this.P,3)),t.setAttribute("normal",new qt(this.N,3)),t.setAttribute("su",new qt(this.SU,2)),t.setAttribute("zw",new qt(this.ZW,4)),t.setAttribute("rk",new qt(this.RK,2)),t.setAttribute("rv",new qt(this.RV,1)),t.setIndex(this.I),t.computeBoundingSphere(),t}},Jl=class{constructor(t,e,n,s,r){this.path=e,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Fe,t.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.ahead=760,this.behind=40}setOrigin(t,e){this.origin.x=t,this.origin.z=e;for(let n of this.chunks.values())n.group.position.set(n.ox-t,0,n.oz-e)}update(t,e){let n=Math.floor((t-this.behind)/Ze),s=Math.floor((t+this.ahead)/Ze);for(let[a,l]of this.chunks)(a<n-1||a>s+1)&&(this.dispose(l),this.chunks.delete(a));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);let r=performance.now();for(;;){if(!this.job){let l=-1;for(let o=Math.max(0,n);o<=s;o++)if(!this.chunks.has(o)){l=o;break}if(l<0)return 0;this.job={c:l,it:this.gen(l)}}let a=this.job.it.next();if(a.done&&(this.chunks.set(this.job.c,a.value),this.group.add(a.value.group),this.job=null),performance.now()-r>e)return 1}}dispose(t){this.group.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose()})}*gen(t){let e=this.path,n=t*Ze,s=n+Ze,r=e.at(n),a=r.x,l=r.z,o=rn(Math.floor(Tn(t,777)*4294967295)),c={atlas:new Be({uv:!0}),color:new Be,foliage:new Be,leaf:new Be({uv:!0}),lamp:new Be({color:!1}),sig:new Be({color:!1}),decal:new Be({uv:!0}),pool:new Be({uv:!0,color:!1})},u=new Nu,h=[],f=[],p={},g={},x=(b,C)=>{e.at(b,g);let D=xn(b,"rw");return g.y+lr(b,C,g.y,D)},m=b=>{let C=Te(b);return[C.city,C.sakura,C.coast,C.country]},d=(b,C,D)=>(e.at(b,p),[p.x+p.rx*C-a,D,p.z+p.rz*C-l]),v=(b,C,D,P=0,L=!0)=>{e.at(b,p);let w=p.h-Math.PI/2+(L&&C<0?Math.PI:0)+P,I=new Wt().makeRotationY(w);return I.setPosition(p.x+p.rx*C-a,D,p.z+p.rz*C-l),I},T=(b,C,D=0,P=0,L=!0)=>v(b,C,x(b,C)+D,P,L),_=b=>e.at(b,g).y,y=b=>xn(b,"rw"),S=b=>{let C=Te(b);return C.city+C.sakura>.5?C.city>=C.sakura?3:2.6:0};{let b=Si(n+Ze/2),C=!!b&&b.s>n-40&&b.s<s+40,D=C?61:21,P=y(n+Ze/2),L=(()=>{let U=[0,...Jv].map(G=>G);return $v.forEach(G=>U.push(G-P)),U})(),w=[...L.slice().reverse().map(z=>-z),...L],I=w.length,F=I/2,O=Array.from({length:D},(z,U)=>{let G=n+U/(D-1)*Ze;return e.at(G,p),{s:G,f:{...p},rw:y(G),w:m(G),rb:C?If(G):0}});for(let[z,U]of[[0,F],[F,I]])u.gridN(D,U-z,(G,q)=>{let ft=O[G],xt=ft.f,ee=z+q,zt=w[ee],Xt=zt<0||zt===0&&ee<F?zt-ft.rw:zt+ft.rw,Q=xt.y+lr(ft.s,Xt,xt.y,ft.rw);return[xt.x+xt.rx*Xt-a,Q,xt.z+xt.rz*Xt-l,0,1,0,ji(ft.s,_s),Xt,ft.w[0],ft.w[1],ft.w[2],ft.w[3],ft.rw,0,ft.rb]}),yield}yield,u.grid(31,2,(C,D)=>{let P=n+C/30*Ze,L=y(P),w=D?L:-L;e.at(P,p);let I=p.y,F=(_(P+1)-_(P-1))/2,O=-F*p.fx,z=1,U=-F*p.fz,G=Math.hypot(O,z,U),q=m(P);return[p.x+p.rx*w-a,I,p.z+p.rz*w-l,O/G,z/G,U/G,ji(P,_s),w,q[0],q[1],q[2],q[3],L,1]});{let b=[];for(let P=0;P<=30;P++){let L=n+P/30*Ze;b.push({s:L,sw:S(L)})}let C=[],D=null;for(let P of b)P.sw>0?(D||(D=[],C.push(D)),D.push(P)):D=null;for(let P of C)if(!(P.length<2))for(let L of[-1,1])u.grid(P.length,2,(w,I)=>{let{s:F,sw:O}=P[w],z=y(F),U=L*(I===(L>0?0:1)?z:z+O);e.at(F,p);let G=m(F);return[p.x+p.rx*U-a,p.y+.15,p.z+p.rz*U-l,0,1,0,ji(F,_s),U,G[0],G[1],G[2],G[3],z,2]}),u.grid(P.length,2,(w,I)=>{let{s:F}=P[w],O=y(F),z=L*O,U=L>0?I:1-I;e.at(F,p);let G=m(F);return[p.x+p.rx*z-a,p.y+(U?.15:0),p.z+p.rz*z-l,-L*p.rx,0,-L*p.rz,ji(F,_s),z,G[0],G[1],G[2],G[3],O,3]})}yield,this.placePoles(t,n,s,o,c,v,x,d,_,y);{let b=Math.ceil((n-vs)/xs),C=or(b);C<s&&yo(C)&&this.placeCrossing(c,u,C,v,_,y,x,S,a,l);let D=Math.ceil((n-Bl)/Mo),P=Mu(D);P<s&&Su(P)&&(yield*this.placeRiver(c,u,P,v,_,y,x,S,a,l,o,f))}yield;for(let b=n;b<s;b+=4){let C=Re(b);(C==="coast"&&Te(b).coast>.45||C==="mountain"&&Te(b).mountain>.45)&&this.guardrail(c,b,Math.min(b+4,s),d,_,y)}yield*this.placeCity(c,o,n,s,v,T,_,y,S,x,u,a,l),yield*this.placeSakura(c,o,n,s,v,T,_,y,x),this.placeCoast(c,o,n,s,v,T,_,y,x,h,d),yield,yield*this.placeCountry(c,o,n,s,v,T,_,y,x),yield*this.placeMountain(c,o,n,s,v,T,_,y,x),yield*this.placeVerge(c,o,n,s,v,x,y),yield;let A=new Fe,M=(b,C,D,P,L=0)=>{if(!b)return;let w=new he(b,C);w.castShadow=D,w.receiveShadow=P,w.renderOrder=L,A.add(w)};if(M(u.build(),this.M.ground,!1,!0),yield,M(c.atlas.build(),this.M.atlas,!0,!0),yield,M(c.color.build(),this.M.color,!0,!0),yield,M(c.foliage.build(),this.M.foliage,!0,!0),M(c.leaf.build(),this.M.leaf,!0,!0),yield,M(c.lamp.build(),this.M.lamp,!1,!1),M(c.sig.build(),this.M.sig,!1,!1),M(c.decal.build(),this.M.decal,!1,!0,1),M(c.pool.build(),this.M.pool,!1,!1,2),h.length){let b=new de,C=[],D=[],P=[];h.forEach((L,w)=>{for(let I of L)C.push(I[0],I[1],I[2]),D.push(I[3],I[4]);if(w>0){let I=(w-1)*2;P.push(I,I+2,I+1,I+1,I+2,I+3)}}),b.setAttribute("position",new qt(C,3)),b.setAttribute("su",new qt(D,2)),b.setIndex(P),b.computeBoundingSphere(),M(b,this.foamMat,!1,!1,1)}for(let b of f)M(b,this.riverMat,!1,!0);return A.position.set(a-this.origin.x,0,l-this.origin.z),{group:A,ox:a,oz:l,s0:n}}poleSpec(t){let e=t*Lu+6,n=Re(e);if(n==="sakura"||ts(e,6)||Pn(e,34))return null;let s=xn(e,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):s+2.35;return{s:e,u:r,z:n}}placePoles(t,e,n,s,r,a,l,o,c,u){let h=Math.ceil((e-6)/Lu),f=Math.floor((n-6-.001)/Lu);for(let p=h;p<=f;p++){let g=this.poleSpec(p);if(!g)continue;let x=g.z==="city"?c(g.s)+.15:l(g.s,g.u),m=a(g.s,g.u,x),d=rn(Math.floor(Tn(p,31)*4294967295)),v=Zl(r,m,d,{trans:d()<.45});g.z==="city"&&p%2===0&&Zf(r,m,-.11);let T=this.poleSpec(p+1);if(T){let _=T.z==="city"?c(T.s)+.15:l(T.s,T.u),y=a(T.s,T.u,_),S=Zl({color:new Be,atlas:new Be({uv:!0})},y,rn(Math.floor(Tn(p+1,31)*4294967295)),{});r.color.setM(new Wt);let A=[];for(let M=0;M<v.length;M++){let b=v[M],C=S[M],D=.35+d()*.4+(M>=7?.3:0);A.push(D),r.color.wire([b.x,b.y,b.z],[C.x,C.y,C.z],D,M>=7?.022:.015,Ro,10)}if(g.z!=="coast"&&d()<.38){let M=Math.floor(d()*4),b=v[M],C=S[M],D=1+Math.floor(d()*4),P=.18+d()*.5;for(let L=0;L<D;L++){let w=Math.min(.92,P+L*(.018+d()*.025)),I=b.x+(C.x-b.x)*w,F=b.z+(C.z-b.z)*w,O=b.y+(C.y-b.y)*w-A[M]*4*w*(1-w);r.color.box(I-.07,O+.015,F-.07,I+.07,O+.19,F+.07,md),r.color.box(I-.045,O+.19,F-.045,I+.045,O+.27,F+.045,md)}}}if(g.z==="city"){r.color.setM(new Wt);let _=1+Math.floor(d()*3);for(let y=0;y<_;y++){let S=v[7+y%2],A=(d()-.5)*14,M=u(g.s+A),b=d()<.55,C=b?-(M+3.15):M+3.15,D=o(g.s+A,C,c(g.s+A)+5.2+d()*2.5);r.color.wire([S.x,S.y,S.z],D,.25+d()*.4,.012,Ro,8)}}}}*intersection(t,e,n,s,r,a,l,o,c,u,h){let f=this.path.at(n,{}),p=a(n),g=l(n),x=o(n)||3,m=n-.5,d=Te(n),v=[d.city,d.sakura,d.coast,d.country],T=(y,S,A)=>[f.x+f.fx*(y-.5)+f.rx*S-u,A,f.z+f.fz*(y-.5)+f.rz*S-h],_=g+x+.15;for(let y of[-1,1]){let S=y*(g+x),A=y*80;c.grid(21,2,(D,P)=>{let L=S+(A-S)*D/20,w=(P?-3:3)*y,I=T(w,L,p+.165);return[I[0],I[1],I[2],0,1,0,w*y,L,v[0],v[1],v[2],v[3],g,10]});{let D=y*(g+x+3.2),P=-y*1.35,L=1.15,w=.42,I=(F,O)=>T(P+y*F,D-y*O,p+.18);t.decal.setM(new Wt),t.decal.quad(I(-L,-w),I(L,-w),I(L,w),I(-L,w),[1,1,1],ql("tomare"))}for(let D of[-1,1]){let P=_+15+e()*3;for(;P<52;){let L=e.range(5.5,8.5),w=y*(P+L/2),I=e(),F=r(m+D*3.3,w,p+.14,D>0?Math.PI/2:-Math.PI/2,!1);Qi(t,F,e,{type:I<.5?"house":"shop",w:L,d:e.range(7,10),floors:I<.5?2:e.int(2,3),tint:e.pick(Zi),litP:.45,fence:0}),P+=L+e.range(.2,1.2)}yield}let M=[30,54].map(D=>r(m+2.8,y*D,p+.15,-Math.PI/2,!1)),b=rn(Math.floor(Tn(s,y>0?71:73)*4294967295)),C=M.map(D=>Zl(t,D,b,{trans:b()<.4}));t.color.setM(new Wt);for(let D=0;D<7;D++){let P=C[0][D],L=C[1][D];t.color.wire([P.x,P.y,P.z],[L.x,L.y,L.z],.3+b()*.4,.014,Ro,10)}}Pu(t,r(n-9,-(g+.55),p+.15,0,!0),1,g+.55-1.6),Pu(t,r(n+8,g+.55,p+.15,0,!0),1,g+.55-1.6),s%3===1&&sd(t,r(n+15,0,p,0,!1),g+x+.1,"hodokyo"+Math.abs(s)%3)}placeCrossing(t,e,n,s,r,a,l,o,c,u){let h=this.path.at(n,{}),f=h.y,p=a(n),g=o(n),x=p+g+.2,m=150,d=f+.18,v=Te(n),T=[v.city,v.sakura,v.coast,v.country],_=(I,F,O)=>[h.x+h.fx*I+h.rx*F-c,O,h.z+h.fz*I+h.rz*F-u],y=[7.6,4.7,-4.7,-7.6];for(let[I,F]of[[-m,-x],[x,m]])e.grid(25,y.length,(z,U)=>{let G=I+(F-I)*z/24,q=y[U],xt=Math.abs(q)<5?d:Math.min(d-.05,l(n+q,G)-.03),ee=_(q,G,xt);return[ee[0],ee[1],ee[2],0,1,0,q,G,T[0],T[1],T[2],T[3],p,5]});let S=(I,F,O)=>e.grid(2,2,(z,U)=>{let G=z?F:I,q=U?-3.3:3.3,ft=_(q,G,O);return[ft[0],ft[1],ft[2],0,1,0,q,G,T[0],T[1],T[2],T[3],p,6]});S(-p,p,f+.03),g>0&&(S(-x,-p,f+.165),S(p,x,f+.165));let A=(I,F,O,z)=>e.grid(2,2,(U,G)=>{let q=U?z:O,ft=G?F:I,xt=_(ft,q,f+.025);return[xt[0],xt[1],xt[2],0,1,0,ft,q,T[0],T[1],T[2],T[3],p,7]});A(-7.15,-7.6,-p+.3,-.12),A(7.6,7.15,.12,p-.3);let M=s(n,0,f,-Math.PI/2,!1),b=t.color;b.setM(M);let C=[.42,.4,.38],D=[.3,.29,.28],P=[.55,.57,.6];for(let I of[-2,2])for(let F of[-.5335,.5335]){let O=-(I+F);for(let[z,U]of[[-m,-x],[x,m]])b.box(z,.26,O-.035,U,.34,O+.035,C);b.box(-x,0,O-.035,x,.04,O+.035,D)}let L=[-146,-104,-64,-26,26,64,104,146];for(let I of L){for(let F of[-4.95,4.95])b.box(I-.12,.18,F-.12,I+.12,7.4,F+.12,P);b.box(I-.1,6.95,-5.15,I+.1,7.2,5.15,P);for(let F of[-2,2])b.box(I-.04,6.3,-F-.04,I+.04,6.95,-F+.04,P)}for(let I of[-2,2])for(let F=0;F<L.length-1;F++)b.wire([L[F],5.35,-I],[L[F+1],5.35,-I],.05,.011,Ro,6),b.wire([L[F],6.4,-I],[L[F+1],6.4,-I],.45,.011,Ro,8);let w=Math.round((n-vs)/xs);if(v.country>.9&&Tn(w,17)<.7){let I=Tn(w,19)<.5?-1:1,F=I>0?p+9:-(p+9+46),O=I>0?p+9+46:-(p+9);rd(t,M,F,O,I*(p+9),Math.abs(w)%4,rn(Math.floor(Tn(w,23)*4294967295))),b.setM(M)}for(let I of kl(this.path,n)){let F=new Wt().makeRotationY(I.yaw);F.setPosition(I.x-c,I.y,I.z-u),ld(t,F)}Ki(t,s(n-70,-(a(n-70)+.6),r(n-70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85),Ki(t,s(n+70,a(n+70)+.6,r(n+70)+.15*(g>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(t,e,n,s,r,a,l,o,c,u,h,f){let p=this.path.at(n,{}),g=p.y,x=a(n),m=o(n),d=Te(n),v=[d.city,d.sakura,d.coast,d.country],T=d.sakura>.5,_=222,y=x+m+.5,S=g-So,A=(w,I,F)=>[p.x+p.fx*w+p.rx*I-c,F,p.z+p.fz*w+p.rz*I-u];{let w=[],I=[],F=[];for(let U=0;U<=74;U++){let G=-_+2*_*U/74;for(let q of[12.5,-12.5]){let ft=A(q,G,S);w.push(ft[0],ft[1],ft[2]),I.push(q,G)}if(U>0){let q=(U-1)*2;F.push(q,q+1,q+2,q+1,q+3,q+2)}}let z=new de;z.setAttribute("position",new qt(w,3)),z.setAttribute("su",new qt(I,2)),z.setIndex(F),z.computeBoundingSphere(),f.push(z)}for(let[w,I]of[[28.9,25.7],[-25.7,-28.9]])for(let[F,O]of[[-_,-(x+3.4)],[x+3.4,_]])e.grid(41,2,(z,U)=>{let G=F+(O-F)*z/40,q=U?I:w,ft=A(q,G,g+.38);return[ft[0],ft[1],ft[2],0,1,0,q,G,v[0],v[1],v[2],v[3],x,9,1]});yield;let M=s(n,0,g,0,!1),b=t.color,C=[.74,.73,.7],D=T?[.78,.2,.15]:[.55,.72,.64];b.setM(M),b.box(-24.5,-1,-y,24.5,-.03,y,C,null,{noBottom:!1});for(let w of[-1,1])b.box(-24.5,-1.3,w>0?y-.35:-y,24.5,-.95,w>0?y:-y+.35,[.62,.61,.58]);for(let w of[-8,8])b.box(w-.7,-So-1.4,-y+.6,w+.7,-1,y-.6,C);for(let w of[-25.7,25.7])b.box(w-1.2,-So+.4,-y-.4,w+1.2,-.05,y+.4,C);let P=m>0?.15:0;for(let w of[-1,1]){let I=w*(y-.14);for(let F=-24;F<=24.01;F+=2)b.box(F-.06,P,I-.06,F+.06,P+1,I+.06,D);b.box(-24,P+.95,I-.08,24,P+1.08,I+.08,D),b.box(-24,P+.48,I-.03,24,P+.54,I+.03,D),b.box(-24,P+.06,I-.03,24,P+.12,I+.03,D)}let L="bridge"+Math.abs(Math.round(n/Mo))%4;for(let w of[-25,25])for(let I of[-1,1]){let F=I*(y-.1),O=[.7,.69,.65];b.box(w-.32,P,F-.32,w+.32,P+1.45,F+.32,O),b.box(w-.38,P+1.45,F-.38,w+.38,P+1.58,F+.38,[.62,.61,.57]),t.atlas.setM(M);let z=(w<0?-1:1)*.325,U=L;w<0?t.atlas.quad([w-.325,P+.3,F-.22],[w-.325,P+.3,F+.22],[w-.325,P+1.3,F+.22],[w-.325,P+1.3,F-.22],[1,1,1],ql(U)):t.atlas.quad([w+.325,P+.3,F+.22],[w+.325,P+.3,F-.22],[w+.325,P+1.3,F-.22],[w+.325,P+1.3,F+.22],[1,1,1],ql(U)),b.setM(M)}Eo(t,s(n-14,-(y-.45),g+P,0,!0)),Eo(t,s(n+14,y-.45,g+P,0,!0)),yield;for(let w of[-18,18])for(let I of[-1,1]){yield;for(let F=11+h()*4;F<(T?125:170);F+=T?h.range(8.5,11):h.range(18,34)){let O=n+w+(h()-.5)*1.5,z=I*F;Hn(t,s(O,z,l(O,z),h()*6,!1),T?"sakura":"broad",h,T?h.range(1,1.25):h.range(.9,1.25))}}}*placeMountain(t,e,n,s,r,a,l,o,c){let u=h=>Te(h).mountain;if(!(u(n)<.3&&u(s)<.3)){for(let h of[-1,1]){for(let f=n+e()*4;f<s;f+=e.range(4.5,8.5)){if(u(f)<.45)continue;let p=o(f),g=e();if(h>0){let x=g<.5?"maple":g<.72?"ginkgo":"cedar";Hn(t,a(f,p+e.range(17,70),-.25,e()*6,!1),x,e,e.range(.9,1.3))}else{let x=g<.55?"maple":g<.8?"cedar":"ginkgo";Hn(t,a(f,-(p+e.range(3.5,34)),-.25,e()*6,!1),x,e,e.range(.95,1.35))}}yield}for(let h=n+e()*4;h<s;h+=e.range(3,6)){if(u(h)<.5)continue;let f=e()<.7,p=-(o(h)+(f?e.range(108,205):e.range(36,100)));Hn(t,a(h,p,-.3,e()*6,!1),e()<.5?"cedar":e()<.75?"maple":"ginkgo",e,e.range(1.1,1.6))}yield,t.color.setM(new Wt);for(let h=Math.ceil(n/10)*10;h<s;h+=10){if(u(h)<.5)continue;let f=o(h),p=r(h,-(f+.95),l(h));Qf(t,p)}for(let h=Math.ceil(n/14)*14;h<s;h+=14){if(u(h)<.6)continue;let f=this.path.curv(h);if(Math.abs(f)<1/230)continue;let p=o(h);f>0?Ki(t,r(h,p+.42,l(h)),"chev_l",-1,1.25,.58):Ki(t,r(h,-(p+1.15),l(h)),"chev_r",1,1.35,.58)}}}*placeVerge(t,e,n,s,r,a,l){for(let o of[-1,1]){for(let c=n+e()*1.2;c<s;c+=e.range(.55,1.5)){if(ts(c,10)||Pn(c,31))continue;let u=Re(c),h=l(c),f,p,g=.22,x=1;if(u==="country")f=h+(e()<.6?e.range(.2,.62):e.range(2.18,2.75)),p=.95;else if(u==="sakura")f=h+2.68+e()*1.3,p=.55,g=.3;else if(u==="coast"){if(o<0)continue;f=h+.95+e()*1.7,p=.75,g=.18}else if(u==="mountain")f=o<0?h+1+e()*.35:h+.25+e()*.2,p=o<0?.55:.18,g=.12,x=.85;else{if(Du(c,5))continue;f=h+3.02+e()*.1,p=.1,g=.08,x=.65}if(e()>p)continue;let m=o*f;td(t,r(c,m,a(c,m),e()*6.28,!1),e,e()<g?"flowers":"grass",x*e.range(.8,1.2))}yield}}guardrail(t,e,n,s,r,a){t.color.setM(new Wt);let l=Math.max(1,Math.round((n-e)/2));for(let o=0;o<l;o++){let c=e+(n-e)*o/l,u=e+(n-e)*(o+1)/l,h=-(a(c)+.95),f=-(a(u)+.95),p=r(c),g=r(u),x=(y,S,A)=>s(y,S,A),m=x(c,h,p+.52),d=x(u,f,g+.52),v=x(c,h,p+.84),T=x(u,f,g+.84);t.color.quad(m,d,T,v,lt.rail),t.color.quad(d,m,v,T,[.62,.64,.66]);let _=s(c,h-.05,p);t.color.box(_[0]-.05,p,_[2]-.05,_[0]+.05,p+.8,_[2]+.05,[.7,.72,.75])}}*placeCity(t,e,n,s,r,a,l,o,c,u,h,f,p){for(let m of[-1,1]){let d=n+e()*2;for(;d<s-2;){{let L=Te(d);if(L.city<.62||L.mountain>.1){d+=4;continue}}{let L=ar(d+6);if(L&&d<L.s+8.5&&d+14>L.s-8.5){d=Math.max(d+1,L.s+8.5);continue}}let v=ji(d,150);if(v>145.6||v<3.4){d+=1;continue}let T=o(d),_=c(d)||3,y=T+_+.15,S=e(),A=S<.42?"shop":S<.58?"apt":S<.68?"office":S<.82?"house":S<.88?"konbini":S<.94?"parking":"gap",M=A==="shop"?e.range(5,9):A==="apt"?e.range(10,16):A==="office"?e.range(10,14):A==="house"?e.range(7,9.5):A==="konbini"?e.range(12,14):A==="parking"?e.range(7,11):e.range(2,3.5);if(d+M>s){if(s-d<5||A==="konbini")break;M=s-d-.2}{let L=Math.ceil((d+4.4)/150)*150-4.4;if(d+M>L-.1){if(L-.1-d<4){d=L+7.9;continue}M=L-.1-d}}let b=d+M/2,C=l(b),D=e.pick(Zi),P=.42;if(A==="parking"){let L=r(b,m*(y+3),C+.15);e()<.8&&id(t,Yl(L,0,0,.5,(e()-.5)*.1),e),t.color.setM(L),t.color.box(-M/2,0,5.5,M/2,1.6,5.7,lt.concrete)}else if(A!=="gap"){let L=r(b,m*y,C+.15),w={type:A,w:M,d:A==="apt"||A==="office"?e.range(10,14):e.range(8,12),floors:A==="shop"?e.int(2,4):A==="apt"?e.int(4,9):A==="office"?e.int(4,8):2,tint:D,litP:P,fence:A==="house"&&e()<.5?1.2:0};if(Qi(t,L,e,w),A!=="house"&&e()<.28&&Au(t,r(b+(e()-.5)*(M-1.2),m*(y-.42),C+.15),e),(A==="shop"||A==="konbini")&&e()<.3)for(let I=0;I<1+e()*3;I++)Jf(t,r(b-M/2+.8+I*.55,m*(y-.75),C+.15,Math.PI/2+.1),e);if(A==="house"&&e()<.6)for(let I=0;I<2+e()*3;I++)Kf(t,r(b+1+I*.5,m*(y-.3),C+.15),e);if(e()<.03)for(let I=0;I<3;I++)$f(t,r(b+I*.9,m*(T+.35),C))}d+=M+e.range(.05,.5),yield}for(let v=n+e()*10;v<s-8;v+=e.range(14,26)){if(Te(v).city<.7||Te(v).mountain>.1||e()<.3||ts(v,18)||Du(v,15))continue;let T=o(v),_=r(v,m*(T+3.2+e.range(14,20)),l(v)+.1);Qi(t,_,e,{type:e()<.6?"apt":"office",w:e.range(12,18),d:12,floors:e.int(6,11),tint:e.pick(Zi),litP:.4})}if(Te(n+30).city>.7&&Te(n+30).mountain<.1&&e()<.65){let v=n+e()*Ze;if(ts(v,24)||Du(v,20))continue;let T=r(v,m*e.range(55,150),l(v));Qi(t,T,e,{type:"tower",w:e.range(16,26),d:e.range(16,22),floors:e.int(12,26),tint:e.pick(Zi),litP:.45})}}let g=Math.ceil(n/150),x=Math.floor((s-.01)/150);for(let m=g;m<=x;m++){let d=m*150;if(Re(d)!=="city"||Te(d).mountain>.1)continue;let v=o(d);yield*this.intersection(t,e,d,m,r,l,o,c,h,f,p),Ki(t,r(d-1,-(v+.4),l(d)+.15),"sign_blue",1),Ki(t,r(d-6,-(v+.4),l(d)+.15),"sign_stop",1,2.1,.75),Ru(t,r(d+7,v+.4,l(d)+.15),-1),m%3===0&&Ki(t,r(d+20,-(v+.4),l(d)+.15),"sign_speed",1)}}*placeSakura(t,e,n,s,r,a,l,o,c){for(let f of[-1,1]){for(let p=n+e()*4;p<s;p+=e.range(7.5,10)){if(Te(p).sakura<.45||Pn(p,30))continue;let g=o(p);Hn(t,a(p,f*(g+3.7),0,e()*6),"sakura",e,e.range(1.05,1.3)),e()<.45&&Hn(t,a(p+3,f*(g+e.range(9,18)),0,e()*6),"sakura",e,e.range(.9,1.25))}yield;for(let p=n+(f>0?0:12);p<s;p+=24){if(Re(p)!=="sakura"||Pn(p,30))continue;let g=o(p);Eo(t,r(p,f*(g+2.25),l(p)+.15)),ji(p,48)<24&&cd(t,r(p+6,f*(g+3),c(p+6,f*(g+3))))}for(let p=n+e()*15;p<s;p+=e.range(14,24)){if(Re(p)!=="sakura"||e()<.35||Pn(p,45))continue;let g=o(p);Qi(t,a(p,f*(g+e.range(20,30))),e,{type:"house",w:e.range(8,11),d:e.range(7,9),floors:e()<.6?2:1,tint:e.pick(Zi),litP:.45,fence:e()<.6?1.4:0})}}let h=Math.floor((n+Ze/2)/480)*480+240;h>=n&&h<s&&Re(h)==="sakura"&&!Pn(h,60)&&Iu(t,r(h,0,l(h),0,!1),o(h)+1.6,6.4)}placeCoast(t,e,n,s,r,a,l,o,c,u,h){for(let g=0;g<=20;g++){let x=n+g/20*Ze;if(Te(x).coast<.85){u.length&&u[u.length-1]!==null&&u.push(null);continue}let d=o(x),v=d+11,T=d+19,_=h(x,-v,Yi+.06),y=h(x,-T,Yi+.06);u.push([[_[0],_[1],_[2],ji(x,_s),0],[y[0],y[1],y[2],ji(x,_s),1]])}let f=u.indexOf(null);f>=0&&(u.length=f),u.length<2&&(u.length=0);for(let g=n+e()*6;g<s;g+=e.range(5,9)){if(Re(g)!=="coast")continue;let x=o(g);e()<.7&&Hn(t,a(g,x+e.range(3.5,26),0,e()*6,!1),"pine",e,e.range(.9,1.3)),e()<.2&&Hn(t,a(g+2,-(x+e.range(3.5,7)),0,e()*6,!1),"pine",e,e.range(.8,1.1))}for(let g=n+4;g<s;g+=e.range(18,30)){if(Re(g)!=="coast"||e()<.4)continue;let x=o(g),m=3+Math.floor(e()*5);for(let d=0;d<m;d++){let v=-(x+e.range(12,17)),T=g+e.range(-3,3);hd(t,r(T,v,Math.max(c(T,v),Yi-.4)+e.range(-.2,.4),e()*6),e,e.range(.9,1.2))}}for(let g=n+12;g<s;g+=48){if(Re(g)!=="coast")continue;let x=o(g);wu(t,a(g,x+1),e)}if(Re(n+30)==="coast"&&e()<.5){let g=n+e()*Ze,x=o(g);Qi(t,a(g,x+e.range(9,16)),e,{type:"house",w:e.range(7,10),d:8,floors:e()<.5?2:1,tint:e.pick(Zi),litP:.5,fence:0})}if(Re(n+30)==="coast"&&e()<.55){let g=n+e()*Ze;dd(t,r(g,-(o(g)+e.range(45,220)),Yi-.25,e()*6,!1),e)}let p=Math.floor((n+Ze/2)/1500)*1500+700;p>=n&&p<s&&Re(p)==="coast"&&fd(t,r(p,-(o(p)+75),Yi-1,0,!1))}*placeCountry(t,e,n,s,r,a,l,o,c){for(let g of[-1,1]){yield;for(let x=n+e()*20;x<s;x+=e.range(20,40)){if(Re(x)!=="country"||e()<.55||ts(x,16)||Pn(x,48))continue;let m=g*e.range(16,95),d=a(x,m);Qi(t,d,e,{type:"house",w:e.range(9,13),d:e.range(8,10),floors:e()<.45?2:1,tint:e.pick(Zi),litP:.5,fence:0});for(let v=0;v<2+e()*3;v++){let T=m+g*e.range(6,14),_=x+e.range(-8,8);Hn(t,a(_,T,0,e()*6),"broad",e,e.range(.9,1.3))}}for(let x=n+e()*8;x<s;x+=e.range(5,9)){if(Re(x)!=="country"||ts(x,7)||Pn(x,36))continue;let m=g*e.range(140,210);Hn(t,a(x,m,-.3,e()*6,!1),"cedar",e,e.range(.9,1.4)),e()<.12&&!ts(x+2,8)&&!Pn(x+2,34)&&Hn(t,a(x+2,g*e.range(10,130),0,e()*6),"broad",e,e.range(.8,1.2))}}let u=Math.floor((n+Ze/2)/600)*600+300;if(u>=n&&u<s&&Re(u)==="country"&&!Pn(u,40)){let g=o(u);ud(t,r(u,-(g+1.6),l(u)-.08),e)}let h=Math.floor((n+Ze/2)/700)*700+120;if(h>=n&&h<s&&Re(h)==="country"&&!Pn(h,40)){let g=o(h);Au(t,r(h,-(g+.95),l(h)-.08),e),wu(t,r(h+2,-(g+.8),l(h)-.08),e)}let f=Math.floor((n+Ze/2)/900)*900+450;if(f>=n&&f<s&&Re(f)==="country"&&!Pn(f,40)){let g=o(f);pd(t,a(f,g+5),e)}let p=Math.floor((n+Ze/2)/380)*380+190;if(p>=n&&p<s&&Re(p)==="country"&&!Pn(p,40)&&!ts(p,30)){let g=o(p),x=(Tn(Math.round(p),5)<.5?-1:1)*(g+2.75);ad(t,a(p,x,0))}for(let g=n;g<s;g+=30){if(Re(g)!=="country")continue;let x=this.path.curv(g);if(Math.abs(x)>1/450&&e()<.5){let m=x>0?-1:1,d=o(g);Ru(t,a(g,m*(d+.75)),m>0?-1:1)}}}};var $l=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#5a4c84","#9fb0ff",.45,"#4a4a88","#2a2030",1,"#4a4478","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#2468d8","#c2e0ff","#fff0d8",3.1,"#9cc0ff","#b8a890",1.5,"#c6ddf2","#ffffff","#a2b6d8","#fff4e0",0,.2],[.45,"#1656d6","#b6daff","#fffaf0",3.5,"#a4c8ff","#c8b8a0",1.6,"#bfdaf4","#ffffff","#9ab0d6","#ffffff",0,0],[.62,"#1a5cd4","#bcdfff","#fff4e4",3.4,"#a8c8f8","#c8b49a",1.55,"#c4ddf3","#ffffff","#9eb2d6","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.8,"#1f2466","#9a6a9a","#c06a8a",.6,"#5a5a9a","#3a3048",1,"#5e4c84","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(t=>typeof t=="string"?new gt(t):t)),ct={zenith:new gt,horizon:new gt,sunCol:new gt,sunI:1,hemiSky:new gt,hemiGround:new gt,hemiI:1,fog:new gt,cLit:new gt,cShade:new gt,cRim:new gt,night:0,warm:0,overcast:0,rain:0,sunDir:new B,moonDir:new B,lightDir:new B,sunEl:0};function xd(i){let t=0;for(;t<$l.length-2&&$l[t+1][0]<=i;)t++;let e=$l[t],n=$l[t+1],s=Dl(De((i-e[0])/(n[0]-e[0]),0,1)),r=(o,c)=>c.copy(e[o]).lerp(n[o],s);r(1,ct.zenith),r(2,ct.horizon),r(3,ct.sunCol),ct.sunI=xe(e[4],n[4],s),r(5,ct.hemiSky),r(6,ct.hemiGround),ct.hemiI=xe(e[7],n[7],s),r(8,ct.fog),r(9,ct.cLit),r(10,ct.cShade),r(11,ct.cRim),ct.night=xe(e[12],n[12],s),ct.warm=xe(e[13],n[13],s);let a=Math.sin((i-.25)*Math.PI*2)*1.08,l=(i-.25)*Math.PI+.9;ct.sunEl=a,ct.sunDir.set(Math.cos(a)*Math.sin(l),Math.sin(a),Math.cos(a)*Math.cos(l)).normalize(),ct.moonDir.set(-ct.sunDir.x,Math.abs(Math.sin(a))*.8+.25,-ct.sunDir.z).normalize(),ct.lightDir.copy(ct.sunDir),a<.08&&ct.lightDir.lerpVectors(ct.moonDir,ct.sunDir,De((a+.12)/.2,0,1)).normalize(),ct.lightDir.y<.12&&(ct.lightDir.y=.12,ct.lightDir.normalize())}var gd={zenith:[new gt("#7b8594"),new gt("#141a28")],horizon:[new gt("#b5bcc6"),new gt("#283042")],fog:[new gt("#a8b0ba"),new gt("#232b3c")],hemiSky:[new gt("#aab3bf"),new gt("#3c4866")],hemiGround:[new gt("#8b8983"),new gt("#1e2030")],cLit:[new gt("#d0d5dc"),new gt("#2c3240")],cShade:[new gt("#7c8593"),new gt("#151922")]},Uu=new gt;function vd(i,t){if(ct.overcast=i,ct.rain=t,i<=.001)return;let e=ct.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Uu.copy(gd[n][0]).lerp(gd[n][1],e),ct[n].lerp(Uu,i*(n==="cLit"||n==="cShade"?.75:.85));ct.sunI*=1-.82*i,ct.warm*=1-i,ct.cRim.multiplyScalar(1-i),ct.sunCol.lerp(Uu.setRGB(.85,.87,.9),i*.6)}function _d(){let i=new ce({side:sn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ct.zenith},uHorizon:{value:ct.horizon},uSunDir:{value:ct.sunDir},uMoonDir:{value:ct.moonDir},uSunCol:{value:ct.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new gt},uOvercast:{value:0},uDeckLit:{value:new gt},uDeckDark:{value:new gt},uMilky:{value:0},uMetA:{value:new B(0,1,0)},uMetB:{value:new B(0,1,0)},uMetP:{value:-1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP;
      varying vec3 vDir;
      ${bi}
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
      }`}),t=new he(new qr(5e3,48,24),i);return t.renderOrder=-10,t.frustumCulled=!1,t}function Kv(i,t){let e=[],s=t?.6:.88,r=(i()-.5)*.04,a=t?6:9;for(let d=0;d<a;d++){let v=.06+i()*.05;e.push([(d/(a-1)-.5)*s+(i()-.5)*.03,.1+v*.5,(i()-.5)*.2,v])}let l=t?6:2,o=s*.82,c=.1+.09;for(let d=0;d<l;d++){let v=Math.max(1,Math.round(o/.11));for(let T=0;T<v;T++){let _=(v===1?0:T/(v-1)-.5)*o+(i()-.5)*.05+r*d;e.push([_,c+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(t?1.25:1)])}c+=t?.115:.075,o*=t?.8:.66}let u=e.slice();for(let d of u){if(e.length>92)break;let v=1+Math.floor(i()*2);for(let T=0;T<v;T++){let _=.35+i()*2.4,y=d[3]*(.35+i()*.2);e.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,y])}}let h=e.slice(0,96),f=1e9,p=-1e9,g=-1e9;for(let d of h)f=Math.min(f,d[0]-d[3]*1.12),p=Math.max(p,d[0]+d[3]*1.12),g=Math.max(g,d[1]+d[3]*1.12);let x=Math.min(1,.92/(p-f),(.95-.1)/(g-.1)),m=(f+p)/2;for(let d of h)d[0]=(d[0]-m)*x,d[1]=.1+(d[1]-.1)*x,d[3]*=x;return h}function yd(i){let e={value:Array.from({length:96},()=>new Me)},n=new ce({uniforms:{uP:e,uN:{value:0},uSeed:{value:0},uBase:{value:.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${bi}
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
      }`,depthTest:!1,depthWrite:!1,blending:Sn}),s=new he(new Ge(1,1),n),r=new ls,a=new us;r.add(s);let l=new Ee(1024*2,1024*2,{generateMipmaps:!0,minFilter:On,magFilter:ke}),o=i.getRenderTarget(),c=i.autoClear,u=rn(99);i.setRenderTarget(l),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let h=[];for(let f=0;f<4;f++){let p=f%2===0,g=Kv(u,p);g.forEach((x,m)=>e.value[m].set(x[0],x[1],x[2],x[3])),n.uniforms.uN.value=g.length,n.uniforms.uSeed.value=f*13.7,l.viewport.set(f%2*1024,Math.floor(f/2)*1024,1024,1024),i.setRenderTarget(l),i.render(r,a),h.push({cell:[f%2,Math.floor(f/2)],tall:p})}return l.viewport.set(0,0,1024*2,1024*2),i.autoClear=c,i.setRenderTarget(o),n.dispose(),s.geometry.dispose(),{tex:l.texture,kinds:h,rt:l}}function Md(i){let t=rn(5),e=22,n=[],s=new Ge(1,1);s.translate(0,.5,0);let r=new Mn(new Float32Array(e*4),4),a=new Mn(new Float32Array(e),1);s.setAttribute("aD",r),s.setAttribute("aR",a);let l=new ce({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:ct.cLit},uShade:{value:ct.cShade},uRim:{value:ct.cRim},uHaze:{value:ct.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),o=new vi(s,l,e);o.frustumCulled=!1,o.renderOrder=-5;for(let g=0;g<e;g++){let x=g<12,m=i.kinds[(g*3+(x?0:1))%i.kinds.length],d=x?m.tall?t.range(900,1500):t.range(1100,1700):t.range(380,700);n.push({phi:g/e*Math.PI*2+t.range(-.15,.15),d:x?t.range(2600,3400):t.range(1300,2200),base:x?t.range(-60,60):t.range(260,700),size:d,cell:m.cell,haze:x?.45:.18})}let c=new Wt,u=new $e,h=new B,f=new B,p=new B(0,1,0);return{group:o,update(g,x){let m=Math.atan2(ct.lightDir.x,ct.lightDir.z);for(let v of n)v.phi+=x*1.2/v.d;n.slice().sort((v,T)=>T.d-v.d).forEach((v,T)=>{h.set(g.x+Math.sin(v.phi)*v.d,g.y+v.base,g.z+Math.cos(v.phi)*v.d),u.setFromAxisAngle(p,v.phi+Math.PI),f.set(v.size,v.size,1),c.compose(h,u,f),o.setMatrixAt(T,c);let _=m-v.phi;_=Math.atan2(Math.sin(_),Math.cos(_));let y=Math.max(0,Math.min(1,(_+.35)/.7)),S=1-y*y*(3-2*y);r.setXYZW(T,v.cell[0],v.cell[1],S,v.haze),a.setX(T,.35+.9*Math.pow(Math.max(Math.cos(_),0),3)*(.4+ct.warm))}),o.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,a.needsUpdate=!0,l.uniforms.uOpacity.value=(1-ct.night*.35)*(1-ct.overcast*.55)}}}function Sd(){let i=new Fe;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((e,n)=>{let r=[],a=[],l=[];for(let h=0;h<=360;h++){let f=h/360*Math.PI*2,p=Math.sin(f)*e.R,g=Math.cos(f)*e.R,x=Nl(h/360*e.k*4,40+n*9),m=Math.pow(Math.max(0,x-.18)/.82,1.6),d=e.h*(.12+m);if(r.push(p,-60,g,p,-60+d,g),a.push(0,h/360,1,h/360),h<360){let v=h*2;l.push(v,v+1,v+2,v+1,v+3,v+2)}}let o=new de;o.setAttribute("position",new qt(r,3)),o.setAttribute("hf",new qt(a,2)),o.setIndex(l);let c=new ce({side:Qe,fog:!1,uniforms:{uCol:{value:new gt(e.col)},uHaze:{value:ct.fog},uHazeK:{value:e.haze},uLight:{value:1},uSeed:{value:n*17}},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed; varying vec2 vH; varying float vY;
        ${bi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),u=new he(o,c);u.frustumCulled=!1,u.renderOrder=-8,i.add(u)}),{group:i,update(e){i.position.set(e.x,0,e.z);let n=(.35+.65*(1-ct.night))*(1-.35*ct.overcast);for(let s of i.children)s.material.uniforms.uLight.value=n}}}var pr={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function bd(i){let t=i.get("weather"),e={mode:pr[t]?t:"auto",kind:pr[t]?t:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return pr[t]&&(e.ov=pr[t][0],e.rain=pr[t][1]),{W:e,update(n){if(e.t+=n,e.mode==="auto"&&e.t>e.next){e.t=0,e.next=150+Math.random()*260;let l=Math.random();e.kind=e.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":e.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=pr[e.kind];e.ov+=De(s-e.ov,-n/28,n/28);let a=e.ov>.75?r:0;e.rain+=De(a-e.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return e.mode=n[(n.indexOf(e.mode)+1)%n.length],e.mode!=="auto"?e.kind=e.mode:e.t=0,e.mode}}}function Td(){let t=new B(46,24,46),e=new Ge(1,1);e.translate(0,.5,0);let n=new Qr;n.index=e.index,n.setAttribute("position",e.attributes.position),n.setAttribute("uv",e.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Mn(s,4)),n.instanceCount=2600;let r=new ce({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new B},uRain:{value:0},uBox:{value:t},uCol:{value:new gt(.8,.85,.95)}},vertexShader:`
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
      void main(){ gl_FragColor = vec4(uCol, vA * 0.32 * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),a=new he(n,r);return a.frustumCulled=!1,a.renderOrder=5,{mesh:a,update(l,o,c,u){a.visible=c>.01,r.uniforms.uTime.value=o,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=c,r.uniforms.uCol.value.setRGB(.55+.35*u,.6+.35*u,.7+.3*u)}}}var mr=72;function Qv(){let i=[],t=[],e=(s,r,a,l,o,c)=>{i.push(...s,...r,...a),t.push(l,o,c)};e([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),e([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),e([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),e([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])e([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),e([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),e([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new de;return n.setAttribute("position",new qt(i,3)),n.setAttribute("aWing",new qt(t,1)),n}function Ed(){let i=Qv(),t=new Mn(new Float32Array(mr*3),3),e=new Mn(new Float32Array(mr*2),2);i.setAttribute("aCol",t),i.setAttribute("aFlap",e);let n=new ce({side:Qe,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ct.fog},uFogD:{value:.002},uCam:{value:new B}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new vi(i,n,mr);s.frustumCulled=!1,s.count=0;let r=[],a={small:6,crow:4},l=new Wt,o=new $e,c=new yn(0,0,0,"YXZ"),u=new B,h=new B,f=()=>r.reduce((x,m)=>x+m.birds.length,0);function p(x,m,d,v){let T=x==="small"?6+Math.floor(Math.random()*7):x==="crow"?3+Math.floor(Math.random()*5):4;if(f()+T>mr)return;let _=45+Math.random()*85,y=(Math.random()-.5)*120,S=Math.random()<.5?1:-1,A=new B().copy(m).addScaledVector(d,_).addScaledVector(v,y-S*75);A.y=m.y+(x==="crow"?18+Math.random()*24:10+Math.random()*18);let M=x==="small"?11+Math.random()*4:8+Math.random()*3,b=new B().copy(v).multiplyScalar(S*M).addScaledVector(d,(Math.random()-.3)*M*.6),C=x==="small"?.8:1.45,D=Array.from({length:T},(P,L)=>({off:new B((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:x==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:x,c:A,vel:b,birds:D,size:C,life:60})}function g(x,m,d,v){if(r.some(y=>y.kind==="gull")||f()+4>mr)return;let T=new B().copy(x).addScaledVector(m,70).addScaledVector(d,-v*45);T.y=x.y+18;let _=Array.from({length:4},(y,S)=>({off:new B,ph:Math.random()*6.28,fq:5.5,w:S/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:T,vel:new B,birds:_,size:1.25,life:1e9})}return{mesh:s,update(x,m,d,v,T,_,y,S,A){n.uniforms.uTime.value=m,n.uniforms.uCam.value.copy(d);let M=y>.35&&S<.3,b=ct.warm>.25&&ct.sunEl<.6&&y>.2;M&&(a.small-=x)<0&&(a.small=22+Math.random()*35,_.coast<.6&&p("small",d,v,T)),(b||M&&_.city+_.country>.6&&Math.random()<4e-4)&&(a.crow-=x)<0&&(a.crow=b?14+Math.random()*18:60,p("crow",d,v,T)),_.coast>.6&&M&&g(d,v,T,1);let C=[.1+.08*y,.11+.09*y,.15+.1*y],D=0;for(let P=r.length-1;P>=0;P--){let L=r[P];if(L.kind==="gull"?(L.c.lerp(u.copy(A).addScaledVector(v,60).addScaledVector(T,-42).setY(A.y+16),Math.min(1,x*.25)),(_.coast<.4||!M)&&(L.life=Math.min(L.life,8),L.c.y+=x*6)):L.c.addScaledVector(L.vel,x),L.life-=x,L.life<0||L.kind!=="gull"&&L.c.distanceTo(d)>300){r.splice(P,1);continue}for(let w of L.birds){if(D>=mr)break;let I,F,O,z;L.kind==="gull"?(w.w+=x*(14/w.r),I=L.c.x+Math.cos(w.w)*w.r,O=L.c.z+Math.sin(w.w)*w.r,F=L.c.y+w.h+Math.sin(m*.4+w.ph)*2,z=Math.atan2(-Math.sin(w.w),Math.cos(w.w))):(I=L.c.x+w.off.x+Math.sin(m*.7+w.ph)*1.2,F=L.c.y+w.off.y+Math.sin(m*1.1+w.ph)*.6,O=L.c.z+w.off.z,z=Math.atan2(L.vel.x,L.vel.z)),c.set(0,z,Math.sin(m+w.ph)*.15),o.setFromEuler(c),h.setScalar(L.size),l.compose(u.set(I,F,O),o,h),s.setMatrixAt(D,l);let U=L.kind==="gull"?[.92*(.5+.5*y),.93*(.5+.5*y),.95*(.5+.5*y)]:L.kind==="crow"?[.05,.05,.07]:C;t.setXYZ(D,U[0],U[1],U[2]),e.setXY(D,w.fq,w.ph),D++}}s.count=D,s.instanceMatrix.needsUpdate=!0,t.needsUpdate=!0,e.needsUpdate=!0},setFog(x){n.uniforms.uFogD.value=x},shift(x,m){for(let d of r)d.c.x-=x,d.c.z-=m}}}function wd(){let i=new ce({fog:!1,uniforms:{uTime:{value:0},uCam:{value:new B},uSunDir:{value:ct.lightDir},uSunCol:{value:ct.sunCol},uHorizon:{value:ct.horizon},uZenith:{value:ct.zenith},uFog:{value:ct.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${bi}
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
      }`}),t=new he(new Ge(14e3,14e3),i);return t.rotation.x=-Math.PI/2,t.position.y=Yi,t.renderOrder=-6,t.frustumCulled=!1,{mesh:t,update(e,n,s,r=1){t.position.x=e.x,t.position.z=e.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(e),i.uniforms.uNight.value=ct.night,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ct.overcast*.85}}}function Ad(){return new ce({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new gt(1,1,1)}},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${bi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function Rd(){return new ce({fog:!1,uniforms:{uTime:{value:0},uSunDir:{value:ct.lightDir},uSunCol:{value:ct.sunCol},uHorizon:{value:ct.horizon},uZenith:{value:ct.zenith},uFog:{value:ct.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${bi}
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
      }`})}var Co=new B;function Vn(i,t,e,n,s,r){let a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;Co.copy(t),Co[n]=0,Co.normalize();let c=.5*a/(a+l),u=1-Co.angleTo(i)/o;return Math.sign(Co[e])===1?u*c:l/(a+l)+c+c*(1-u)}var ci=class i extends Jn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let o=new B,c=new B,u=new B(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,x=new B,m=.5/a;for(let d=0,v=0;d<h.length;d+=3,v+=2)switch(o.fromArray(h,d),c.copy(o),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[d+0]=u.x*Math.sign(o.x)+c.x*r,h[d+1]=u.y*Math.sign(o.y)+c.y*r,h[d+2]=u.z*Math.sign(o.z)+c.z*r,f[d+0]=c.x,f[d+1]=c.y,f[d+2]=c.z,Math.floor(d/g)){case 0:x.set(1,0,0),p[v+0]=Vn(x,c,"z","y",r,n),p[v+1]=1-Vn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),p[v+0]=1-Vn(x,c,"z","y",r,n),p[v+1]=1-Vn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),p[v+0]=1-Vn(x,c,"x","z",r,t),p[v+1]=Vn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),p[v+0]=1-Vn(x,c,"x","z",r,t),p[v+1]=1-Vn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),p[v+0]=1-Vn(x,c,"x","y",r,t),p[v+1]=1-Vn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),p[v+0]=Vn(x,c,"x","y",r,t),p[v+1]=1-Vn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function Pd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},l=i[0].morphTargetsRelative,o=new de,c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(c,p,u),c+=p}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[f].attributes.position.count}o.setIndex(h)}for(let u in r){let h=Cd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<a[u].length;++x)p.push(a[u][x][f]);let g=Cd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(g)}}}return o}function Cd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),l=new nn(a,e,n),o=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=o/e;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<e;g++){let x=u.getComponent(f,g);l.setComponent(f+h,g,x)}}else a.set(u.array,o);o+=u.count*e}return s!==void 0&&(l.gpuType=s),l}function jv(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#f2cf3a",t.fillRect(0,0,256,128),t.strokeStyle="#2f5a2f",t.lineWidth=6,t.strokeRect(5,5,246,118);let e='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';t.fillStyle="#2f5a2f",t.textAlign="center",t.textBaseline="middle",t.font=`700 30px ${e}`,t.fillText("\u54C1\u5DDD 580",128,34),t.font=`800 58px ${e}`,t.fillText("\u3042 12-34",128,86);let n=new Rn(i);return n.colorSpace=Ae,n}function t_(){let i=document.createElement("canvas");i.width=64,i.height=128;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"#9fbfe6"),e.addColorStop(.45,"#4a6690"),e.addColorStop(1,"#1d2638"),t.fillStyle=e,t.fillRect(0,0,64,128),t.fillStyle="rgba(255,255,255,0.35)",t.beginPath(),t.moveTo(20,0),t.lineTo(34,0),t.lineTo(10,128),t.lineTo(-4,128),t.fill();let n=new Rn(i);return n.colorSpace=Ae,n}function Id(){let i=new Fe,t=(S,A={})=>ur(new Ke({color:S,gradientMap:kn,...A})),e=t("#9fd8c8"),n=t("#e9e7e0"),s=t("#2a2c33"),r=t("#1b1c20"),a=t("#c8ccd2"),l=ur(new Ke({color:"#ffffff",map:t_(),gradientMap:kn})),o=new Ke({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:kn}),c=new Ke({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:kn}),u=new Ve({map:jv()}),h=new Map,f=new Wt,p=new yn,g=new $e,x=new B(1,1,1),m=(S,A,M,b,C,D=0,P=0,L=0)=>{let w=S.index?S.toNonIndexed():S;p.set(D,P,L),g.setFromEuler(p),f.compose(new B(M,b,C),g,x),w.applyMatrix4(f),h.has(A)||h.set(A,[]),h.get(A).push(w)};m(new ci(1.48,.86,3.38,4,.15),e,0,.77,0),m(new ci(1.42,.66,2.6,4,.17),e,0,1.5,-.25),m(new ci(1.38,.09,2.5,3,.04),n,0,1.84,-.25),m(new Ge(1.16,.5),l,0,1.53,-1.556,0,Math.PI,0);for(let S of[-1,1])m(new Ge(2.25,.46),l,S*.712,1.54,-.2,0,S*Math.PI/2,0),m(new ci(.1,.12,.2,2,.04),e,S*.82,1.2,.95),m(new ci(.14,.48,.08,2,.035),o,S*.64,1,-1.67),m(new ci(.12,.08,.06,2,.02),c,S*.64,.7,-1.67);m(new Ge(1.2,.52),l,0,1.52,1.056,-.12,0,0),m(new ci(1.52,.22,.22,2,.07),s,0,.42,-1.62),m(new Jn(.24,.04,.05),s,0,.84,-1.69),m(new Ge(.34,.17),u,0,.72,-1.7,0,Math.PI,0);for(let[S,A]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]])m(new Zs(.29,.29,.2,20),r,S,.29,A,0,0,Math.PI/2),m(new Zs(.16,.16,.205,12),a,S,.29,A,0,0,Math.PI/2);for(let[S,A]of h){let M=new he(Pd(A),S);M.castShadow=S!==l&&S!==u,M.receiveShadow=!0,i.add(M)}let d=new Fe;d.position.set(.02,1.3,-1.57),i.add(d);let v=new Jn(.52,.026,.02);v.translate(.27,0,0);let T=new he(v,s);T.rotation.z=.18,d.add(T);let _=0,y=new $r(16773328,0,70,.55,.65,1.2);return y.position.set(0,.8,1.6),y.target.position.set(0,0,18),i.add(y,y.target),{group:i,mBody:e,update(S,A,M,b=0){if(o.emissiveIntensity=.35+M*3.2,b>.15||_%2.6>.01){_+=S;let C=_%2.6/2.6,D=L=>L*L*(3-2*L),P=C<.25?D(C/.25):C<.5?D(1-(C-.25)/.25):0;T.rotation.z=.18+P*2.5,b<=.15&&C>=.5&&(_=0)}y.intensity=M*60}}}var gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},e_=new Vi(-1,1,1,-1,0,1),Fu=class extends de{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},n_=new Fu,es=class{constructor(t){this._mesh=new he(n_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xr=class extends In{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Mi.clone(t.uniforms),this.material=new ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new es(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Po=class extends In{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Kl=class extends In{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ql=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new kt);this._width=n.width,this._height=n.height,e=new Ee(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:We}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xr(gr),this.copyPass.material.blending=Sn,this.timer=new jr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Po!==void 0&&(a instanceof Po?n=!0:a instanceof Kl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var jl=class extends In{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new gt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Ld={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var vr=class i extends In{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new kt(t.x,t.y):new kt(256,256),this.clearColor=new gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ee(r,a,{type:We,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Ee(r,a,{type:We,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Ee(r,a,{type:We,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let l=Ld;this.highPassUniforms=Mi.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ce({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let o=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(o[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new kt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mi.clone(gr.uniforms),this.blendMaterial=new ce({uniforms:this.copyUniforms,vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,premultipliedAlpha:!0,blending:_i,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new gt,this._oldClearAlpha=1,this._basic=new Ve,this._fsQuad=new es(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new kt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this._fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this._fsQuad.render(t),l=this.renderTargetsVertical[o];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let l=e[a],o=a+1<t?e[a+1]:0,c=l+o;s.push((a*l+(a+1)*o)/c),r.push(c)}return new ce({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new kt(.5,.5)},direction:{value:new kt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};vr.BlurDirectionX=new kt(1,0);vr.BlurDirectionY=new kt(0,1);var Io={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var tc=class extends In{constructor(){super(),this.isOutputPass=!0,this.uniforms=Mi.clone(Io.uniforms),this.material=new Js({name:Io.name,uniforms:this.uniforms,vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader}),this._fsQuad=new es(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===to?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===no?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===io?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ds?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===so&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var i_={uniforms:{tDiffuse:{value:null},uSun:{value:new kt(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function Dd(i,t,e,{msaa:n=4,scale:s=1}={}){let r=i.getSize(new kt),a=new Ee(r.x*i.getPixelRatio(),r.y*i.getPixelRatio(),{type:We,samples:n}),l=new Ql(i,a);l.addPass(new jl(t,e));let o=new vr(new kt(r.x*s*.5,r.y*s*.5),.42,.55,.86);l.addPass(o),l.addPass(new tc);let c=new xr(i_);return l.addPass(c),{composer:l,bloom:o,grade:c}}function Nd(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let t=new i,e=t.createGain();e.gain.value=0,e.connect(t.destination),e.gain.linearRampToValueAtTime(.5,t.currentTime+4);let n=t.sampleRate*4,s=t.createBuffer(2,n,t.sampleRate);for(let J=0;J<2;J++){let at=s.getChannelData(J);for(let ht=0;ht<n;ht++)at[ht]=(Math.random()*2-1)*Math.pow(1-ht/n,3)}let r=t.createConvolver();r.buffer=s;let a=t.createGain();a.gain.value=.55,r.connect(a),a.connect(e);let l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let o=t.createGain();o.gain.value=.11,l.connect(o),o.connect(e),o.connect(r);let c=(J,at)=>{let ht=t.createBuffer(1,t.sampleRate*J,t.sampleRate),ot=ht.getChannelData(0),et=0;for(let yt=0;yt<ot.length;yt++)at?(et=(et+.02*(Math.random()*2-1))/1.02,ot[yt]=et*3.5):ot[yt]=Math.random()*2-1;return ht},u=(J,at,ht)=>{let ot=t.createBufferSource();ot.buffer=J,ot.loop=!0;let et=t.createBiquadFilter();et.type=at,et.frequency.value=ht;let yt=t.createGain();return yt.gain.value=0,ot.connect(et),et.connect(yt),yt.connect(e),ot.start(),{f:et,g:yt}},h=u(c(2,!0),"lowpass",400),f=u(c(3,!1),"lowpass",700);f.g.connect(r);let p=u(c(2,!1),"bandpass",5200);p.f.Q.value=6;let g=u(c(2,!0),"lowpass",240),x=u(c(3,!1),"bandpass",2600);x.f.Q.value=.35;let m=u(c(2,!0),"lowpass",520),d=u(c(3,!1),"bandpass",750);d.f.Q.value=.6;let v=u(c(3,!0),"lowpass",420),T=c(.03,!1),_=0;function y(J,at){let ht=t.createBufferSource(),ot=t.createBiquadFilter(),et=t.createGain();ht.buffer=T,ot.type="bandpass",ot.frequency.value=1800+Math.random()*2600,ot.Q.value=1.2,et.gain.setValueAtTime(at*(.02+Math.random()*.03),J),et.gain.exponentialRampToValueAtTime(1e-4,J+.03),ht.connect(ot),ot.connect(et),et.connect(e),ht.start(J),ht.stop(J+.04)}let S=0,A=0;function M(J,at){let ht=t.createOscillator(),ot=t.createOscillator(),et=t.createGain(),yt=t.createBiquadFilter();yt.type="bandpass",yt.frequency.value=1150,yt.Q.value=2.2,ht.type="square",ht.frequency.value=745,ot.type="triangle",ot.frequency.value=1490,et.gain.setValueAtTime(0,J),et.gain.linearRampToValueAtTime(.085*at,J+.004),et.gain.exponentialRampToValueAtTime(1e-4,J+.3),ht.connect(yt),ot.connect(yt),yt.connect(et),et.connect(e),et.connect(r),ht.start(J),ot.start(J),ht.stop(J+.33),ot.stop(J+.33)}function b(J,at){let ht=t.createOscillator(),ot=t.createGain();ht.type="sine",ht.frequency.setValueAtTime(110,J),ht.frequency.exponentialRampToValueAtTime(48,J+.12),ot.gain.setValueAtTime(1e-4,J),ot.gain.linearRampToValueAtTime(.22*at,J+.006),ot.gain.exponentialRampToValueAtTime(1e-4,J+.17),ht.connect(ot),ot.connect(e),ht.start(J),ht.stop(J+.2)}let C=t.createGain();C.gain.value=1,C.connect(e);let D=t.createGain();D.gain.value=.35,C.connect(D),D.connect(r);let P=(J=(Math.random()-.5)*1.4)=>{if(!t.createStereoPanner)return C;let at=t.createStereoPanner();return at.pan.value=J,at.connect(C),at};function L(J,at,ht,ot,et,yt,Ft="sine",jt=0){let Vt=t.createOscillator(),Gt=t.createGain();if(Vt.type=Ft,Vt.frequency.setValueAtTime(at,J),Vt.frequency.exponentialRampToValueAtTime(ht,J+ot),jt){let ae=t.createOscillator(),le=t.createGain();ae.frequency.value=jt,le.gain.value=at*.012,ae.connect(le),le.connect(Vt.frequency),ae.start(J),ae.stop(J+ot+.05)}return Gt.gain.setValueAtTime(1e-4,J),Gt.gain.linearRampToValueAtTime(et,J+Math.min(.04,ot*.25)),Gt.gain.setValueAtTime(et,J+ot*.7),Gt.gain.exponentialRampToValueAtTime(1e-4,J+ot),Vt.connect(Gt),Gt.connect(yt),Vt.start(J),Vt.stop(J+ot+.02),Gt}function w(J,at){let ht=P(),ot=2+Math.floor(Math.random()*4),et=3200+Math.random()*1500;for(let yt=0;yt<ot;yt++){let Ft=J+yt*(.09+Math.random()*.07);L(Ft,et,et*(1.2+Math.random()*.3),.06,at*.022,ht)}}function I(J,at){let ht=P();L(J,1120,1390,1,at*.03,ht,"sine",5.5),L(J+1.15,2350,2150,.14,at*.03,ht),L(J+1.32,1700,1520,.13,at*.028,ht),L(J+1.5,2750,2480,.36,at*.032,ht)}function F(J,at){let ht=P(),ot=1+Math.floor(Math.random()*3);for(let et=0;et<ot;et++){let yt=J+et*.48,Ft=t.createOscillator(),jt=t.createBiquadFilter(),Vt=t.createGain();Ft.type="sawtooth",Ft.frequency.setValueAtTime(560,yt),Ft.frequency.exponentialRampToValueAtTime(420,yt+.32),jt.type="bandpass",jt.frequency.value=1150,jt.Q.value=1.6,Vt.gain.setValueAtTime(1e-4,yt),Vt.gain.linearRampToValueAtTime(at*.03,yt+.03),Vt.gain.exponentialRampToValueAtTime(1e-4,yt+.36),Ft.connect(jt),jt.connect(Vt),Vt.connect(ht),Ft.start(yt),Ft.stop(yt+.4)}}function O(J,at){let ht=P(),ot=2+Math.floor(Math.random()*2);for(let et=0;et<ot;et++)L(J+et*.42,1750,1150,.36,at*.022,ht,"triangle",11)}function z(J,at){let ht=P(),ot=t.createOscillator(),et=t.createBiquadFilter(),yt=t.createGain(),Ft=240+Math.random()*220,jt=5+Math.floor(Math.random()*4);ot.type="square",ot.frequency.value=Ft,et.type="bandpass",et.frequency.value=Ft*2.4,et.Q.value=3,yt.gain.setValueAtTime(1e-4,J);for(let Vt=0;Vt<jt;Vt++){let Gt=J+Vt*.038;yt.gain.linearRampToValueAtTime(at*.014,Gt+.008),yt.gain.linearRampToValueAtTime(1e-4,Gt+.028)}ot.connect(et),et.connect(yt),yt.connect(ht),ot.start(J),ot.stop(J+jt*.038+.05)}function U(J,at){let ht=P(),ot=4300+Math.random()*700;for(let et=0;et<3;et++)L(J+et*.055,ot,ot*1.01,.035,at*.009,ht)}function G(J,at){let ht=P();for(let ot of[J,J+.22])L(ot,2650,2600,.5,at*.018,ht),L(ot,3950,3900,.35,at*.008,ht)}let q={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30},ft=J=>J>1e-4?-Math.log(1-Math.random()*.98)/J:1e9,xt=J=>440*Math.pow(2,(J-69)/12),ee=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],zt=[72,74,76,79,81,84,86,88],Xt=0,Q=t.currentTime+.2,st=t.currentTime+3;function Ct(J){let at=ee[Xt++%ee.length],ht=11;for(let ot of at)for(let et of[-5,5]){let yt=t.createOscillator(),Ft=t.createGain();yt.type=et<0?"sine":"triangle",yt.frequency.value=xt(ot),yt.detune.value=et,Ft.gain.setValueAtTime(0,J),Ft.gain.linearRampToValueAtTime(.18,J+3.5),Ft.gain.setValueAtTime(.18,J+ht-4),Ft.gain.linearRampToValueAtTime(0,J+ht+1),yt.connect(Ft),Ft.connect(l),yt.start(J),yt.stop(J+ht+1.2)}}function Ht(J){let at=zt[Math.floor(Math.random()*zt.length)],ht=t.createOscillator(),ot=t.createOscillator(),et=t.createGain(),yt=t.createGain();ht.type=ot.type="sine",ht.frequency.value=xt(at),ot.frequency.value=xt(at)*2.01,yt.gain.value=.25,ot.connect(yt),yt.connect(et),et.gain.setValueAtTime(0,J),et.gain.linearRampToValueAtTime(.05,J+.02),et.gain.exponentialRampToValueAtTime(1e-4,J+4),ht.connect(et),et.connect(r),et.connect(e),ht.start(J),ot.start(J),ht.stop(J+4.2),ot.stop(J+4.2)}return{ac:t,muted:!1,update(J,at,ht,ot={}){let et=t.currentTime;if((ot.bell||0)>.01)for(S<et&&(S=et+.02);S<et+.12;)M(S,ot.bell),S+=.41;let yt=ot.rain||0;if(x.g.gain.setTargetAtTime(yt*.05,et,.6),m.g.gain.setTargetAtTime(yt*.05,et,.6),yt>.05&&ot.roof)for(_<et&&(_=et+.02);_<et+.12;)y(_,yt),_+=.04+Math.random()*.12/yt;let Ft=ot.water||0,jt=.6+.4*Math.sin(et*1.3)*Math.sin(et*.37);d.g.gain.setTargetAtTime(Ft*.035*jt,et,.25),d.f.frequency.setTargetAtTime(600+400*jt,et,.25);let Vt=.35+.65*Math.pow(.5+.5*Math.sin(et*.23)*Math.sin(et*.071+2),2);v.g.gain.setTargetAtTime((at.mountain||0)*.06*Vt,et,.8),v.f.frequency.setTargetAtTime(260+420*Vt,et,.8);let Gt=ot.train||0;if(g.g.gain.setTargetAtTime(Gt*.16,et,.2),Gt>.04)for(A<et&&(A=et+.02);A<et+.12;)b(A,Gt),b(A+.15,Gt*.8),A+=1.2;for(;Q<et+1;)Ct(Q),Q+=8;st<et+.5&&(Ht(st),st+=1.5+Math.random()*4.5),h.g.gain.setTargetAtTime(.03+J*.06,et,.5),h.f.frequency.setTargetAtTime(250+J*500,et,.5);let ae=.5+.5*Math.sin(et*.55)*Math.sin(et*.21+1);f.g.gain.setTargetAtTime(at.coast*(.012+ae*.05),et,.3),f.f.frequency.setTargetAtTime(400+ae*900,et,.3);let le=1-Math.min(1,yt*1.4),V=1-ht,Ie=ot.dusk||0,re={sparrow:ht*le*.22*(.3+at.city*.5+at.sakura+at.country*.8+at.coast*.2+(at.mountain||0)*.5),uguisu:ht*le*at.sakura*.06,crow:le*(Ie*.14+ht*(at.city+at.country+(at.mountain||0)*1.5)*.012),gull:ht*at.coast*le*.16,frog:V*(at.country*5+at.sakura*.6+at.coast*.3)*(1+yt*.6),cricket:V*le*(1.6-at.city*1.1+(at.mountain||0)*.8),bike:ht*le*at.city*.014},N={sparrow:w,uguisu:I,crow:F,gull:O,frog:z,cricket:U,bike:G};for(let X in re)et<q[X]||(re[X]>1e-4&&N[X](et+.05,.6+Math.random()*.4),q[X]=et+Math.max(.12,ft(re[X]||1e-6)));let E=.5+.5*Math.sin(et*7)*Math.sin(et*.4);p.g.gain.setTargetAtTime((at.country+at.sakura*.3)*ht*.006*E,et,.08)},toggle(){this.muted=!this.muted,e.gain.setTargetAtTime(this.muted?0:.5,t.currentTime,.3)}}}function Ud(i){let e=new Ge(.075,.05),n=new Ve({color:16777215,side:Qe}),s=new vi(e,n,420);s.frustumCulled=!1,s.count=0;let r=new gt("#ffd0de"),a=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(_=>new gt(_));for(let _=0;_<420;_++)s.setColorAt(_,r);let l=Array.from({length:420},()=>({p:new B(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),o=new Wt,c=new $e,u=new yn,h=new B(1,1,1),f=new B,p=90,g=new Float32Array(p*3),x=Array.from({length:p},()=>({p:new B(1e9,0,0),ph:Math.random()*6.28})),m=new de;m.setAttribute("position",new nn(g,3));let d=new Ys({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:_i,opacity:0}),v=new Hr(m,d);v.frustumCulled=!1;let T=(_,y,S,A,M)=>{let b=M?8+Math.random()*42:-4+Math.random()*50,C=(Math.random()-.5)*40;_.p.set(y.x+S.x*b+A.x*C,y.y-1+Math.random()*9,y.z+S.z*b+A.z*C)};return{group:[s,v],shift(_,y){for(let S of l)S.p.x-=_,S.p.z-=y;for(let S of x)S.p.x-=_,S.p.z-=y},update(_,y,S,A,M,b,C,D,P,L=0){let w=Math.floor(420*Math.min(1,b*1.1+L*.55)),I=!1;s.count=w;for(let O=0;O<w;O++){let z=l[O];f.subVectors(z.p,S);let U=f.x*A.x+f.z*A.z,G=f.x*M.x+f.z*M.z;if(z.p.x>1e8||U<-6||U>55||Math.abs(G)>24||z.p.y<C-.5){T(z,S,A,M,z.p.x<1e8);let q=Math.random()*(b+L)<L;(q!==z.leaf||q)&&(z.leaf=q,s.setColorAt(O,q?a[Math.floor(Math.random()*a.length)]:r),I=!0)}z.p.y-=z.v*_,z.p.x+=Math.sin(y*.7+z.ph)*.4*_+.25*_,z.p.z+=Math.cos(y*.5+z.ph)*.3*_,u.set(y*z.sp+z.ph,y*z.sp*.7,z.ph),c.setFromEuler(u),h.setScalar(z.leaf?1.9:1),o.compose(z.p,c,h),s.setMatrixAt(O,o)}s.instanceMatrix.needsUpdate=!0,I&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let F=D*P;if(d.opacity=F,v.visible=F>.01,v.visible){for(let O=0;O<p;O++){let z=x[O];f.subVectors(z.p,S);let U=f.x*A.x+f.z*A.z,G=f.x*M.x+f.z*M.z;if(z.p.x>1e8||U<-4||U>60||Math.abs(G)>30){let q=2+Math.random()*55,ft=(Math.random()-.5)*55;z.p.set(S.x+A.x*q+M.x*ft,C+.3+Math.random()*2.2,S.z+A.z*q+M.z*ft)}z.p.x+=Math.sin(y*.6+z.ph*3)*.3*_,z.p.y+=Math.sin(y*.9+z.ph)*.2*_,z.p.z+=Math.cos(y*.5+z.ph*2)*.3*_,g[O*3]=z.p.x,g[O*3+1]=z.p.y,g[O*3+2]=z.p.z}m.attributes.position.needsUpdate=!0}}}}var Ce=new URLSearchParams(location.search),_r=Ce.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();_r&&document.body.classList.add("embed");Ce.has("shot")&&document.body.classList.add("shot");wf(Ce.has("seed")?parseInt(Ce.get("seed")):Math.random()*1e9|0);Pf(Ce.get("env")||"city");var je=i=>document.getElementById(i),Lo=i=>{let t=je("loading");t&&(t.textContent=i)};async function s_(){await new Promise(W=>setTimeout(W,30));let i=je("c"),t=new Cl({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=Ce.get("q")||(_r||e?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?_r?1.25:1.4:1);t.setPixelRatio(s),t.setSize(innerWidth,innerHeight,!1),t.outputColorSpace=Ae,t.toneMapping=ds,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=hs;let r=new ls;r.fog=new Or(13032946,.0019,700);let a=new en(52,innerWidth/innerHeight,.5,7e3),l=new Kr(16777215,3);l.castShadow=!0;let o=n==="low"?1024:2048;l.shadow.mapSize.set(o,o),Object.assign(l.shadow.camera,{left:-75,right:75,top:75,bottom:-75,near:1,far:420}),l.shadow.bias=-4e-4,l.shadow.normalBias=.05,r.add(l,l.target);let c=new Zr(10799359,13154464,1.6);r.add(c),Lo("painting the town\u2026"),await new Promise(W=>setTimeout(W,10));let u=Wf();Yf(u);let h=Xf(t);jf(h.cells),we.uTuftV.value.set(h.tuftV[0],h.tuftV[1]);let f=Ff(u.textures(t),h.tex);Lo("painting the clouds\u2026"),await new Promise(W=>setTimeout(W,10));let p=new Fl,g=Ad(),x=Rd(),m=new Jl(r,p,f,g,x),d=_d();r.add(d);let v=Md(yd(t));r.add(v.group);let T=Sd();r.add(T.group);let _=wd();r.add(_.mesh);let y=Id();y.group.rotation.order="YXZ",r.add(y.group);let S=Ud(f.glowTex);S.group.forEach(W=>r.add(W));let A=Dd(t,r,a,{msaa:n==="high"?4:n==="mid"?2:0}),M=Bf();r.add(M.group);let b=zf();r.add(b.group);let C=bd(Ce),D=Td();r.add(D.mesh);let P=Ed();r.add(P.mesh);let L=C.W.rain,w={s:Math.max(100,parseFloat(Ce.get("s"))||140),u:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:De(parseFloat(Ce.get("t"))||.4,0,.999),todPaused:Ce.has("freeze"),dist:0,cam:{low:1,eye:2,top:3,film:4}[Ce.get("cam")]??(_r?4:0)},I=!1;Lo("building the road\u2026"),await new Promise(W=>setTimeout(W,10));let F=_r?620:m.ahead;for(m.ahead=260;m.update(w.s,1e9););m.ahead=F;let O={k:Math.ceil((w.s-vs)/xs),phase:"idle",raise:1,decided:!1,t2:0},z={},U={},G={},q=new B,ft=new B,xt=new B,ee=!1,zt=new B,Xt=new B,Q=je("spd"),st=je("dist"),Ct=je("clock"),Ht=je("zone"),J=je("start"),at=je("hint"),ht=null,ot=null,et=0,yt=0;function Ft(W){!I||W===ot||(ot=W,Ht.querySelector(".jp").textContent=_o[W].jp,Ht.querySelector(".en").textContent=_o[W].en,Ht.classList.add("on"),clearTimeout(et),et=setTimeout(()=>Ht.classList.remove("on"),5200))}function jt(){if(!I){if(I=!0,document.body.classList.remove("pre"),!Ce.has("auto"))try{ht=Nd(),ht&&ht.ac.resume()}catch{ht=null}J.style.opacity=0,setTimeout(()=>J.remove(),1500),_r||(at.style.opacity=.75,setTimeout(()=>at.style.opacity=0,9e3))}}let Vt={};addEventListener("keydown",W=>{Vt[W.key]=!0,(W.key==="m"||W.key==="M")&&ae(),(W.key==="t"||W.key==="T")&&le(),(W.key==="c"||W.key==="C")&&re(),(W.key==="r"||W.key==="R")&&j(),!I&&(W.key===" "||W.key==="Enter")&&jt()}),addEventListener("keyup",W=>{Vt[W.key]=!1});let Gt=null;i.addEventListener("pointerdown",W=>{Gt={id:W.pointerId,x:W.clientX,y:W.clientY,sy:W.clientY,sc:w.mult}}),addEventListener("pointermove",W=>{Gt&&W.pointerId===Gt.id&&(Gt.x=W.clientX,Gt.y=W.clientY,w.mult=De(Gt.sc-(Gt.y-Gt.sy)/innerHeight*1.6,.4,1.8))}),addEventListener("pointerup",()=>{Gt=null}),addEventListener("pointercancel",()=>{Gt=null}),i.addEventListener("touchstart",W=>{let bt=W.changedTouches[0];Gt={id:"touch",x:bt.clientX,y:bt.clientY,sy:bt.clientY,sc:w.mult},W.preventDefault()},{passive:!1}),i.addEventListener("touchmove",W=>{if(!Gt)return;let bt=W.changedTouches[0];Gt.x=bt.clientX,Gt.y=bt.clientY,w.mult=De(Gt.sc-(Gt.y-Gt.sy)/innerHeight*1.6,.4,1.8),W.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{Gt=null}),i.addEventListener("touchcancel",()=>{Gt=null});function ae(){ht&&(ht.toggle(),je("snd").style.opacity=ht.muted?.4:1)}function le(){w.todPaused=!w.todPaused,je("tim").style.opacity=w.todPaused?.4:1}let V=[0,1,2,4],Ie={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function re(){w.cam=V[(V.indexOf(w.cam)+1)%V.length],je("cam").textContent=Ie[w.cam]||"\u25D0",w.cam===4&&X()}let N=["chase","side","road","crane","eye","side","road"],E={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function X(){let W;do W=N[Math.floor(Math.random()*N.length)];while(W===E.last);if(Object.assign(E,{type:W,last:W,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),W==="road"){let bt=w.s+40+Math.random()*18,dt=xn(bt,"rw"),ne=Math.random()<.6?-1:1,se=ne*(dt+(ne<0?.9:1.3)),_e=p.at(bt,{}),fn=_e.y+lr(bt,se,_e.y,dt);E.anchor={x:_e.x+_e.rx*se,y:Math.max(fn,_e.y)+1.05,z:_e.z+_e.rz*se,s:bt}}ee=!1}let $={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function j(){je("wx").textContent=$[C.cycle()]}je("wx").textContent=$[C.W.mode],je("cam").textContent=Ie[w.cam]||"\u25D0",w.cam===4&&X(),je("wx").onclick=W=>{W.stopPropagation(),j()},je("snd").onclick=W=>{W.stopPropagation(),ae()},je("tim").onclick=W=>{W.stopPropagation(),le()},je("cam").onclick=W=>{W.stopPropagation(),re()};let _t=0,Tt=W=>{let bt=performance.now();bt-_t<120||(_t=bt,W.cancelable&&W.type!=="click"&&W.preventDefault(),jt())};for(let W of["touchstart","pointerdown","mousedown","click"])J.addEventListener(W,Tt,{passive:!1});let tt=()=>{ht&&ht.ac.state!=="running"&&ht.ac.resume()};for(let W of["touchend","click","keydown"])addEventListener(W,tt,{passive:!0});document.addEventListener("visibilitychange",()=>{ht&&(document.hidden?ht.ac.suspend():ht.ac.resume())});let it=!1,Et="";function Ot(){let W=innerWidth,bt=innerHeight,dt=W/bt,ne=W+"x"+bt+"@"+s;ne!==Et&&(Et=ne,t.setPixelRatio(s),t.setSize(W,bt,!1),A.composer.setPixelRatio(s),A.composer.setSize(W,bt),a.aspect=dt,a.fov=dt>=1?52:De(2*Math.atan(Math.tan(34*Math.PI/180)/dt)*180/Math.PI,52,80),a.updateProjectionMatrix(),A.grade.uniforms.uAspect.value=dt)}addEventListener("resize",()=>{it=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{it=!0}),Ot();let wt=0;function At(W=!0){if(s>1.05)s=Math.max(1,s-.25),it=!0;else if(A.bloom.enabled)A.bloom.enabled=!1;else if(l.shadow.mapSize.x>1024)l.shadow.mapSize.set(1024,1024),l.shadow.map&&(l.shadow.map.dispose(),l.shadow.map=null);else if(m.ahead>430)m.ahead=430;else return;if(wt++,W)try{localStorage.setItem("icd-q",String(wt))}catch{}}try{let W=parseInt(localStorage.getItem("icd-q")||"0");if(!Ce.has("q"))for(let bt=0;bt<Math.min(W,6);bt++)At(!1);wt=Math.max(wt,W||0)}catch{}let Bt=performance.now(),Nt=0,Kt=0,H=0,St=()=>1-ct.night,nt=0,vt={p:-1,a:new B,b:new B,next:5};function It(W){requestAnimationFrame(It);let bt=performance.now();it&&(it=!1,Ot());let dt=Math.min(.05,(W-Bt)/1e3);Bt=W,Nt+=dt,w.steer=0,(Vt.ArrowLeft||Vt.a||Vt.A)&&(w.steer=-1),(Vt.ArrowRight||Vt.d||Vt.D)&&(w.steer=1),(Vt.ArrowUp||Vt.w||Vt.W)&&(w.mult=De(w.mult+dt*.4,.4,1.8)),(Vt.ArrowDown||Vt.s||Vt.S)&&(w.mult=De(w.mult-dt*.4,.4,1.8)),Gt&&Math.abs(Gt.y-Gt.sy)<30&&(w.steer=Gt.x<innerWidth/2?-1:1),w.steer&&(w.lastInput=W);let ne=or(O.k);w.s-ne>24&&(O.k++,ne=or(O.k),Object.assign(O,{phase:"idle",raise:1,decided:!1}));let se=yo(ne),_e=ne-w.s;se&&!O.decided&&_e<150&&(O.decided=!0,_e>75&&I&&(Ce.has("xing")||Tn(O.k,99)<.8)&&(O.phase="warn",b.start(ne,Tn(O.k,7)<.5?1:-1,16))),O.phase==="warn"?(O.raise=Math.max(0,O.raise-dt/6),b.st.cleared&&(O.phase="clear",O.t2=0)):O.phase==="clear"?(O.raise=Math.max(0,O.raise-dt/6),(O.t2+=dt)>2.2&&(O.phase="raise")):O.phase==="raise"&&(O.raise=Math.min(1,O.raise+dt/5),O.raise>=1&&(O.phase="idle"));let fn=O.phase==="warn"||O.phase==="clear"||O.phase==="raise"&&O.raise<.25,Ss=xn(w.s,"speed")*w.mult*(I?1:.55);if(O.phase!=="idle"&&O.raise<.8&&_e>0){let pt=_e-11.2,mt=pt>0?Math.sqrt(2*1.25*pt):0;Ss=Math.min(Ss,mt),w.speed=Math.min(w.speed,mt)}Ce.has("park")&&(Ss=0,w.speed=0),w.speed+=(Ss-w.speed)*Math.min(1,dt*.5),w.s+=w.speed*dt,w.dist+=w.speed*dt;let Do=xn(w.s,"rw");w.steer?w.u=De(w.u+w.steer*dt*2.4,-Do+.85,Do-.85):W-w.lastInput>3e3&&(w.u+=(-1.65+Math.sin(Nt/11)*.1-w.u)*Math.min(1,dt*.9)),!w.todPaused&&I&&(w.tod=(w.tod+dt/480*(ct.night>.5?1.7:1))%1),xd(w.tod),C.update(dt);let Ln=C.W.ov,En=C.W.rain;vd(Ln,En),L=De(L+(En>.25?dt/18:-dt/120),0,1);let ec=performance.now();m.update(w.s,I?6:14);let No=performance.now();if(p.at(w.s,z),Math.abs(z.x-m.origin.x)>900||Math.abs(z.z-m.origin.z)>900){let pt=Math.round(z.x)-m.origin.x,mt=Math.round(z.z)-m.origin.z;m.setOrigin(Math.round(z.x),Math.round(z.z)),q.x-=pt,q.z-=mt,ft.x-=pt,ft.z-=mt,S.shift&&S.shift(pt,mt),P.shift(pt,mt)}let Dn=m.origin.x,tn=m.origin.z,yr=(p.at(w.s+1.5,G).y-p.at(w.s-1.5,U).y)/3;y.group.position.set(z.x+z.rx*w.u-Dn,z.y+.01,z.z+z.rz*w.u-tn);let Uo=w.steer?-w.steer*.05:0;y.group.rotation.set(-Math.atan(yr),z.h+Uo,0),y.update(dt,w.speed,ct.night,En),M.update(se&&_e>-24&&_e<700?kl(p,ne):null,m.origin,O.raise,fn,Nt),b.update(dt,p,m.origin,Pe(.15,.8,ct.night),xn(ne,"rw")+3.2);let Mr=[{back:8.2,up:3.1,ahead:22,lookY:1.45,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(Ce.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}],Nn=new B,Ai=6,ns=w.cam===2;if(w.cam===4){E.t+=dt,(E.t>E.dur+(E.type==="road"?8:0)||E.type==="road"&&E.anchor&&w.s>E.anchor.s+24)&&X();let pt=y.group.position,mt=E.type;if(mt==="chase"||mt==="eye"){let Mt=Mr[mt==="eye"?2:0];ns=mt==="eye",p.at(w.s-Mt.back,U),p.at(w.s+Mt.ahead,G),xt.set(U.x+U.rx*w.u*Mt.cu-Dn,U.y+Mt.up,U.z+U.rz*w.u*Mt.cu-tn),Nn.set(G.x+G.rx*w.u*Mt.lu-Dn,G.y+Mt.lookY,G.z+G.rz*w.u*Mt.lu-tn)}else if(mt==="side"){p.at(w.s+1.5,U);let Mt=Te(w.s),Ut=Mt.city+Mt.sakura>.5,Jt=xn(w.s,"rw"),Qt=E.sideSign>0?Jt+(Ut?1.45:3.4):-(Jt+1.5),Lt=U.y+lr(w.s+1.5,Qt,U.y,Jt);xt.set(U.x+U.rx*Qt-Dn,Math.max(Lt+1.55,U.y+1.25),U.z+U.rz*Qt-tn),Nn.set(pt.x+z.fx*2.5,pt.y+.9,pt.z+z.fz*2.5),Ai=4}else if(mt==="road"&&E.anchor)xt.set(E.anchor.x-Dn,E.anchor.y,E.anchor.z-tn),Nn.set(pt.x,pt.y+.85,pt.z),Ai=30;else{p.at(w.s-20,U),p.at(w.s+34,G);let Mt=14+Math.min(E.t,20)*.35;xt.set(U.x+U.rx*w.u*.4-Dn,U.y+Mt,U.z+U.rz*w.u*.4-tn),Nn.set(G.x-Dn,G.y+1,G.z-tn),Ai=3}}else{let pt=Mr[w.cam];p.at(w.s-pt.back,U),p.at(w.s+pt.ahead,G);let mt=w.u*pt.cu,Mt=mt+(pt.side||0);xt.set(U.x+U.rx*Mt-Dn,U.y+pt.up,U.z+U.rz*Mt-tn),Nn.set(G.x+G.rx*w.u*pt.lu-Dn,G.y+pt.lookY,G.z+G.rz*w.u*pt.lu-tn)}y.group.visible=!ns,w.cam===3?a.up.set(z.fx,0,z.fz):a.up.set(0,1,0),ee||(q.copy(xt),ft.copy(Nn),ee=!0),q.lerp(xt,1-Math.exp(-dt*Ai)),ft.lerp(Nn,1-Math.exp(-dt*Math.min(Ai,8))),a.position.copy(q),a.lookAt(ft),Ce.has("yaw")&&a.rotateY(parseFloat(Ce.get("yaw"))*Math.PI/180),Ce.has("pitch")&&a.rotateX(parseFloat(Ce.get("pitch"))*Math.PI/180),zt.set(z.fx,0,z.fz),Xt.set(z.rx,0,z.rz);let dn=Te(w.s);l.color.copy(ct.sunCol),l.intensity=ct.sunI,l.target.position.set(y.group.position.x+z.fx*30,y.group.position.y,y.group.position.z+z.fz*30),l.position.copy(l.target.position).addScaledVector(ct.lightDir,200),c.color.copy(ct.hemiSky),c.groundColor.copy(ct.hemiGround),c.intensity=ct.hemiI,r.fog.color.copy(ct.fog);let Sr=(dn.city*.0022+dn.sakura*.0019+dn.coast*.0011+dn.country*.0014+dn.mountain*.0017)*(1+ct.night*.25);r.fog.near=Sr*(1+.55*Ln+.45*En),r.fog.far=m.ahead*.92,we.uSkyHor.value.copy(ct.horizon),we.uSkyZen.value.copy(ct.zenith),we.uTime.value=Nt,we.uWet.value=L,we.uOrigin.value.set(m.origin.x,m.origin.z),we.uWind.value=1+.8*En,we.uCloudSh.value=(1-Ln)*Pe(.04,.3,ct.sunEl)*(1-ct.night);let vn=d.material.uniforms;if(vn.uNight.value=ct.night,vn.uWarm.value=ct.warm,vn.uTime.value=Nt,vn.uCirrusCol.value.copy(ct.cLit).lerp(ct.horizon,.25),vn.uCirrus.value=.6*(1-Ln)*(1-.65*Pe(.4,.9,ct.night)),vn.uOvercast.value=Ln,vn.uMilky.value=Pe(.55,.95,ct.night)*(1-Ln),ct.night>.65&&Ln<.3&&vt.p<0&&(vt.next-=dt)<0){let pt=Math.atan2(z.fx,z.fz)+(Math.random()-.5)*1.5,mt=.45+Math.random()*.6,Mt=.22+Math.random()*.2,Ut=(Math.random()-.5)*.6,Jt=(Qt,Lt)=>new B(Math.cos(Qt)*Math.sin(Lt),Math.sin(Qt),Math.cos(Qt)*Math.cos(Lt));vt.a.copy(Jt(mt,pt)),vt.b.copy(Jt(mt-Mt,pt+Ut)),vt.p=0,vt.next=Ce.has("meteors")?1:6+Math.random()*20}vt.p>=0&&(vt.p+=dt/.85,vt.p>1.3&&(vt.p=-1)),vn.uMetP.value=vt.p,vn.uMetA.value.copy(vt.a),vn.uMetB.value.copy(vt.b),vn.uDeckLit.value.copy(ct.horizon).lerp(ct.cLit,.35),vn.uDeckDark.value.copy(ct.zenith).lerp(ct.horizon,.25).multiplyScalar(.82),d.position.copy(a.position),v.update(a.position,dt),T.update(a.position);let bs=0;for(let pt of[-150,0,250,500,800])bs=Math.max(bs,Te(w.s+pt).coast);_.mesh.visible=bs>.001,_.update(a.position,Nt,Sr*.8,Pe(0,.35,bs)),x.uniforms.uTime.value=Nt,x.uniforms.uFogD.value=r.fog.near,x.uniforms.uNight.value=ct.night,x.uniforms.uSpecK.value=1-ct.overcast*.85,we.uSunDir.value.copy(ct.lightDir),we.uSunCol.value.copy(ct.sunCol),g.uniforms.uTime.value=Nt,g.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*St());let Gn=Pe(.15,.8,ct.night);f.atlas.emissiveIntensity=.1+Gn*1.05,f.lamp.color.setRGB(.85,.85,.8).lerp(new gt(3.6,2.8,1.8),Gn),f.pool.opacity=Gn*.42*(1+.8*L),we.uNight.value=Gn,A.bloom.strength=xe(.32,.55,Gn),A.bloom.threshold=xe(1.35,.95,Gn),A.bloom.radius=xe(.55,.35,Gn),t.toneMappingExposure=xe(1,1.15,Gn),xt.copy(a.position).addScaledVector(ct.sunDir,1e3).project(a);let Ri=A.grade.uniforms,Fo=xt.z<1?1:0,R=Math.max(Math.abs(xt.x),Math.abs(xt.y));Ri.uSun.value.set(xt.x*.5+.5,xt.y*.5+.5),Ri.uSunVis.value=Fo*(1-Pe(1,1.9,R))*Pe(-.02,.15,ct.sunEl)*(1-ct.night)*(1-Ln),Ri.uSat.value=1.1-.12*Ln,Ri.uDay.value=St(),Ri.uWarm.value=ct.warm,Ri.uTime.value=Nt,D.update(a.position,Nt,En,St()),P.setFog(r.fog.near),P.update(dt,Nt,a.position,zt,Xt,dn,St(),En,y.group.position);let k=performance.now();S.update(dt,Nt,a.position,zt,Xt,dn.sakura,z.y,Gn,(dn.country+dn.sakura*.4)*(1-En),dn.mountain);let K=performance.now();if(ht){p.at(ne,G);let pt=Math.hypot(G.x-m.origin.x-a.position.x,G.z-m.origin.z-a.position.z),mt=b.st.active?b.group.position.distanceTo(a.position):1e9;ht.update(w.speed/15,dn,St(),{bell:fn?Math.pow(De(1-pt/260,0,1),1.5):0,train:Math.pow(De(1-mt/230,0,1),2),rain:En,roof:w.cam!==2,water:(()=>{let Mt=Si(w.s);return Math.max(Mt?1-Pe(12,150,Math.abs(w.s-Mt.s)):0,dn.mountain*.45)})(),dusk:ct.warm*(w.tod>.5?1:.3)})}Ft(Re(w.s+40));let Y=performance.now();A.composer.render(dt);let Z=performance.now(),Rt=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Rt.world=Rt.world*.95+(No-ec)*.05,Rt.parts=Rt.parts*.95+(K-k)*.05,Rt.render=Rt.render*.95+(Z-Y)*.05,nt=nt*.95+(performance.now()-bt)*.05,window.__ft=nt,(yt+=dt)>.25){yt=0,Q.textContent=Math.round(w.speed*3.6),st.textContent=(w.dist/1e3).toFixed(1);let pt=Math.floor(w.tod*1440);Ct.textContent=`${String(Math.floor(pt/60)).padStart(2,"0")}:${String(pt%60).padStart(2,"0")}`}Kt++,I&&Kt>150&&dt>.03?H+=dt:H=Math.max(0,H-dt*.5),H>3&&!Ce.has("q")&&(H=0,At())}window.__dbg={renderer:t,st:w,scene:r,camera:a,world:m,TOD:ct,X:O,train:b,weather:C,U:we,birds:P,cine:E},Lo(""),J.classList.add("ready"),Ce.has("auto")&&jt(),requestAnimationFrame(It)}s_().catch(i=>{console.error(i),Lo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
