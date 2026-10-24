var B0=0,af=1,O0=2;var _r=1,z0=2,_o=3,ls=0,Hn=1,yn=2,ni=0,bo=1,Yi=2,lf=3,cf=4,k0=5;var br=100,H0=101,V0=102,G0=103,W0=104,X0=200,q0=201,Y0=202,Z0=203,uf=204,hf=205,$0=206,K0=207,J0=208,j0=209,Q0=210,ep=211,tp=212,np=213,ip=214,oc=0,ac=1,lc=2,so=3,cc=4,uc=5,hc=6,fc=7,ff=0,sp=1,rp=2,Zi=0,df=1,pf=2,mf=3,gf=4,vf=5,xf=6,Ga=7;var yf=300,Xs=301,Mr=302,Wc=303,Xc=304,Wa=306,Es=1e3,is=1001,dc=1002,Sn=1003,op=1004;var Xa=1005;var Ut=1006,qc=1007;var An=1008;var Zn=1009,_f=1010,bf=1011,Mo=1012,Yc=1013,$i=1014,Ci=1015,Tn=1016,Zc=1017,$c=1018,So=1020,Mf=35902,Sf=35899,Ef=1021,Tf=1022,$n=1023,ss=1026,qs=1027,Ys=1028,Kc=1029,Zs=1030,Jc=1031;var jc=1033,qa=33776,Ya=33777,Za=33778,$a=33779,Qc=35840,eu=35841,tu=35842,nu=35843,iu=36196,su=37492,ru=37496,ou=37488,au=37489,Ka=37490,lu=37491,cu=37808,uu=37809,hu=37810,fu=37811,du=37812,pu=37813,mu=37814,gu=37815,vu=37816,xu=37817,yu=37818,_u=37819,bu=37820,Mu=37821,Su=36492,Eu=36494,Tu=36495,wu=36283,Au=36284,Ja=36285,Ru=36286;var fa=2300,pc=2301,ic=2302,Zh=2303,$h=2400,Kh=2401,Jh=2402;var ap=3200;var Cu=0,lp=1,ii="",Gt="srgb",da="srgb-linear",pa="linear",kt="srgb";var sc=7680;var cp=519,up=512,hp=513,fp=514,Pu=515,dp=516,pp=517,Iu=518,mp=519,gp=35044;var wf="300 es",Wi=2e3,ro=2001;function E1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function T1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vp(){let i=oo("canvas");return i.style.display="block",i}var n0={},ao=null;function Af(...i){let e="THREE."+i.shift();ao?ao("log",e,...i):console.log(e,...i)}function xp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ct(...i){i=xp(i);let e="THREE."+i.shift();if(ao)ao("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=xp(i);let e="THREE."+i.shift();if(ao)ao("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function mr(...i){let e=i.join(" ");e in n0||(n0[e]=!0,ct(...i))}function yp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _p={[oc]:ac,[lc]:hc,[cc]:fc,[so]:uc,[ac]:oc,[hc]:lc,[fc]:cc,[uc]:so},rs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bh=Math.PI/180,ma=180/Math.PI;function Eo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function w1(i,e){return(i%e+e)%e}function Mh(i,e,t){return(1-t)*i+t*e}function ta(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Df=class Df{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Df.prototype.isVector2=!0;var Pe=Df,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let c=n[s+0],u=n[s+1],h=n[s+2],g=n[s+3],m=r[o+0],d=r[o+1],_=r[o+2],E=r[o+3];if(g!==E||c!==m||u!==d||h!==_){let b=c*m+u*d+h*_+g*E;b<0&&(m=-m,d=-d,_=-_,E=-E,b=-b);let a=1-l;if(b<.9995){let x=Math.acos(b),p=Math.sin(x);a=Math.sin(a*x)/p,l=Math.sin(l*x)/p,c=c*a+m*l,u=u*a+d*l,h=h*a+_*l,g=g*a+E*l}else{c=c*a+m*l,u=u*a+d*l,h=h*a+_*l,g=g*a+E*l;let x=1/Math.sqrt(c*c+u*u+h*h+g*g);c*=x,u*=x,h*=x,g*=x}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],c=n[s+1],u=n[s+2],h=n[s+3],g=r[o],m=r[o+1],d=r[o+2],_=r[o+3];return e[t]=l*_+h*g+c*d-u*m,e[t+1]=c*_+h*m+u*g-l*d,e[t+2]=u*_+h*d+l*m-c*g,e[t+3]=h*_-l*g-c*m-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(n/2),h=l(s/2),g=l(r/2),m=c(n/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=m*h*g+u*d*_,this._y=u*d*g-m*h*_,this._z=u*h*_+m*d*g,this._w=u*h*g-m*d*_;break;case"YXZ":this._x=m*h*g+u*d*_,this._y=u*d*g-m*h*_,this._z=u*h*_-m*d*g,this._w=u*h*g+m*d*_;break;case"ZXY":this._x=m*h*g-u*d*_,this._y=u*d*g+m*h*_,this._z=u*h*_+m*d*g,this._w=u*h*g-m*d*_;break;case"ZYX":this._x=m*h*g-u*d*_,this._y=u*d*g+m*h*_,this._z=u*h*_-m*d*g,this._w=u*h*g+m*d*_;break;case"YZX":this._x=m*h*g+u*d*_,this._y=u*d*g+m*h*_,this._z=u*h*_-m*d*g,this._w=u*h*g-m*d*_;break;case"XZY":this._x=m*h*g-u*d*_,this._y=u*d*g-m*h*_,this._z=u*h*_+m*d*g,this._w=u*h*g+m*d*_;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],c=t[9],u=t[2],h=t[6],g=t[10],m=n+l+g;if(m>0){let d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-u)*d,this._z=(o-s)*d}else if(n>l&&n>g){let d=2*Math.sqrt(1+n-l-g);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+u)/d}else if(l>g){let d=2*Math.sqrt(1+l-n-g);this._w=(r-u)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+g-n-l);this._w=(o-s)/d,this._x=(r+u)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*l+s*u-r*c,this._y=s*h+o*c+r*l-n*u,this._z=r*h+o*u+n*c-s*l,this._w=o*h-n*l-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let c=1-t;if(l<.9995){let u=Math.acos(l),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nf=class Nf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(i0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(i0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*s-l*n),h=2*(l*t-r*s),g=2*(r*n-o*t);return this.x=t+c*u+o*g-l*h,this.y=n+c*h+l*u-r*g,this.z=s+c*g+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*o-n*c,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nf.prototype.isVector3=!0;var H=Nf,Sh=new H,i0=new mn,Uf=class Uf{constructor(e,t,n,s,r,o,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,u)}set(e,t,n,s,r,o,l,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],c=n[6],u=n[1],h=n[4],g=n[7],m=n[2],d=n[5],_=n[8],E=s[0],b=s[3],a=s[6],x=s[1],p=s[4],f=s[7],v=s[2],M=s[5],w=s[8];return r[0]=o*E+l*x+c*v,r[3]=o*b+l*p+c*M,r[6]=o*a+l*f+c*w,r[1]=u*E+h*x+g*v,r[4]=u*b+h*p+g*M,r[7]=u*a+h*f+g*w,r[2]=m*E+d*x+_*v,r[5]=m*b+d*p+_*M,r[8]=m*a+d*f+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*l*u-n*r*h+n*l*c+s*r*u-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],g=h*o-l*u,m=l*c-h*r,d=u*r-o*c,_=t*g+n*m+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/_;return e[0]=g*E,e[1]=(s*u-h*n)*E,e[2]=(l*n-s*o)*E,e[3]=m*E,e[4]=(h*t-s*c)*E,e[5]=(s*r-l*t)*E,e[6]=d*E,e[7]=(n*c-u*t)*E,e[8]=(o*t-n*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*l)+o+e,-s*u,s*c,-s*(-u*o+c*l)+l+t,0,0,1),this}scale(e,t){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eh.makeScale(e,t)),this}rotate(e){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eh.makeRotation(-e)),this}translate(e,t){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uf.prototype.isMatrix3=!0;var gt=Uf,Eh=new gt,s0=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r0=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A1(){let i={enabled:!0,workingColorSpace:da,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===kt&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===kt&&(s.r=no(s.r),s.g=no(s.g),s.b=no(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[da]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var Ct=A1();function Ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function no(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hr,mc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=oo("canvas")),Hr.width=e.width,Hr.height=e.height;let s=Hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},R1=0,lo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Th(s[o].image)):r.push(Th(s[o]))}else r=Th(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Th(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}var C1=0,wh=new H,qn=class i extends rs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=is,s=is,r=Ut,o=An,l=$n,c=Zn,u=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=Eo(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=yf;qn.DEFAULT_ANISOTROPY=1;var Ff=class Ff{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],g=c[8],m=c[1],d=c[5],_=c[9],E=c[2],b=c[6],a=c[10];if(Math.abs(h-m)<.01&&Math.abs(g-E)<.01&&Math.abs(_-b)<.01){if(Math.abs(h+m)<.1&&Math.abs(g+E)<.1&&Math.abs(_+b)<.1&&Math.abs(u+d+a-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let p=(u+1)/2,f=(d+1)/2,v=(a+1)/2,M=(h+m)/4,w=(g+E)/4,y=(_+b)/4;return p>f&&p>v?p<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(p),s=M/n,r=w/n):f>v?f<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(f),n=M/s,r=y/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=w/r,s=y/r),this.set(n,s,r,t),this}let x=Math.sqrt((b-_)*(b-_)+(g-E)*(g-E)+(m-h)*(m-h));return Math.abs(x)<.001&&(x=1),this.x=(b-_)/x,this.y=(g-E)/x,this.z=(m-h)/x,this.w=Math.acos((u+d+a-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ff.prototype.isVector4=!0;var pt=Ff,gc=class extends rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new lo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ga=class extends qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vc=class extends qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Gc=class Gc{constructor(e,t,n,s,r,o,l,c,u,h,g,m,d,_,E,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,c,u,h,g,m,d,_,E,b)}set(e,t,n,s,r,o,l,c,u,h,g,m,d,_,E,b){let a=this.elements;return a[0]=e,a[4]=t,a[8]=n,a[12]=s,a[1]=r,a[5]=o,a[9]=l,a[13]=c,a[2]=u,a[6]=h,a[10]=g,a[14]=m,a[3]=d,a[7]=_,a[11]=E,a[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Vr.setFromMatrixColumn(e,0).length(),r=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){let m=o*h,d=o*g,_=l*h,E=l*g;t[0]=c*h,t[4]=-c*g,t[8]=u,t[1]=d+_*u,t[5]=m-E*u,t[9]=-l*c,t[2]=E-m*u,t[6]=_+d*u,t[10]=o*c}else if(e.order==="YXZ"){let m=c*h,d=c*g,_=u*h,E=u*g;t[0]=m+E*l,t[4]=_*l-d,t[8]=o*u,t[1]=o*g,t[5]=o*h,t[9]=-l,t[2]=d*l-_,t[6]=E+m*l,t[10]=o*c}else if(e.order==="ZXY"){let m=c*h,d=c*g,_=u*h,E=u*g;t[0]=m-E*l,t[4]=-o*g,t[8]=_+d*l,t[1]=d+_*l,t[5]=o*h,t[9]=E-m*l,t[2]=-o*u,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){let m=o*h,d=o*g,_=l*h,E=l*g;t[0]=c*h,t[4]=_*u-d,t[8]=m*u+E,t[1]=c*g,t[5]=E*u+m,t[9]=d*u-_,t[2]=-u,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){let m=o*c,d=o*u,_=l*c,E=l*u;t[0]=c*h,t[4]=E-m*g,t[8]=_*g+d,t[1]=g,t[5]=o*h,t[9]=-l*h,t[2]=-u*h,t[6]=d*g+_,t[10]=m-E*g}else if(e.order==="XZY"){let m=o*c,d=o*u,_=l*c,E=l*u;t[0]=c*h,t[4]=-g,t[8]=u*h,t[1]=m*g+E,t[5]=o*h,t[9]=d*g-_,t[2]=_*g-d,t[6]=l*h,t[10]=E*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P1,e,I1)}lookAt(e,t,n){let s=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Ns.crossVectors(n,mi),Ns.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Ns.crossVectors(n,mi)),Ns.normalize(),Il.crossVectors(mi,Ns),s[0]=Ns.x,s[4]=Il.x,s[8]=mi.x,s[1]=Ns.y,s[5]=Il.y,s[9]=mi.y,s[2]=Ns.z,s[6]=Il.z,s[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],c=n[8],u=n[12],h=n[1],g=n[5],m=n[9],d=n[13],_=n[2],E=n[6],b=n[10],a=n[14],x=n[3],p=n[7],f=n[11],v=n[15],M=s[0],w=s[4],y=s[8],S=s[12],T=s[1],A=s[5],R=s[9],C=s[13],P=s[2],L=s[6],D=s[10],B=s[14],V=s[3],O=s[7],k=s[11],z=s[15];return r[0]=o*M+l*T+c*P+u*V,r[4]=o*w+l*A+c*L+u*O,r[8]=o*y+l*R+c*D+u*k,r[12]=o*S+l*C+c*B+u*z,r[1]=h*M+g*T+m*P+d*V,r[5]=h*w+g*A+m*L+d*O,r[9]=h*y+g*R+m*D+d*k,r[13]=h*S+g*C+m*B+d*z,r[2]=_*M+E*T+b*P+a*V,r[6]=_*w+E*A+b*L+a*O,r[10]=_*y+E*R+b*D+a*k,r[14]=_*S+E*C+b*B+a*z,r[3]=x*M+p*T+f*P+v*V,r[7]=x*w+p*A+f*L+v*O,r[11]=x*y+p*R+f*D+v*k,r[15]=x*S+p*C+f*B+v*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],c=e[9],u=e[13],h=e[2],g=e[6],m=e[10],d=e[14],_=e[3],E=e[7],b=e[11],a=e[15],x=c*d-u*m,p=l*d-u*g,f=l*m-c*g,v=o*d-u*h,M=o*m-c*h,w=o*g-l*h;return t*(E*x-b*p+a*f)-n*(_*x-b*v+a*M)+s*(_*p-E*v+a*w)-r*(_*f-E*M+b*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10];return t*(o*h-l*u)-n*(r*h-l*c)+s*(r*u-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],g=e[9],m=e[10],d=e[11],_=e[12],E=e[13],b=e[14],a=e[15],x=t*l-n*o,p=t*c-s*o,f=t*u-r*o,v=n*c-s*l,M=n*u-r*l,w=s*u-r*c,y=h*E-g*_,S=h*b-m*_,T=h*a-d*_,A=g*b-m*E,R=g*a-d*E,C=m*a-d*b,P=x*C-p*R+f*A+v*T-M*S+w*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return e[0]=(l*C-c*R+u*A)*L,e[1]=(s*R-n*C-r*A)*L,e[2]=(E*w-b*M+a*v)*L,e[3]=(m*M-g*w-d*v)*L,e[4]=(c*T-o*C-u*S)*L,e[5]=(t*C-s*T+r*S)*L,e[6]=(b*f-_*w-a*p)*L,e[7]=(h*w-m*f+d*p)*L,e[8]=(o*R-l*T+u*y)*L,e[9]=(n*T-t*R-r*y)*L,e[10]=(_*M-E*f+a*x)*L,e[11]=(g*f-h*M-d*x)*L,e[12]=(l*S-o*A-c*y)*L,e[13]=(t*A-n*S+s*y)*L,e[14]=(E*p-_*v-b*x)*L,e[15]=(h*v-g*p+m*x)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,c=e.z,u=r*o,h=r*l;return this.set(u*o+n,u*l-s*c,u*c+s*l,0,u*l+s*c,h*l+n,h*c-s*o,0,u*c-s*l,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,c=t._w,u=r+r,h=o+o,g=l+l,m=r*u,d=r*h,_=r*g,E=o*h,b=o*g,a=l*g,x=c*u,p=c*h,f=c*g,v=n.x,M=n.y,w=n.z;return s[0]=(1-(E+a))*v,s[1]=(d+f)*v,s[2]=(_-p)*v,s[3]=0,s[4]=(d-f)*M,s[5]=(1-(m+a))*M,s[6]=(b+x)*M,s[7]=0,s[8]=(_+p)*w,s[9]=(b-x)*w,s[10]=(1-(m+E))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Vr.set(s[0],s[1],s[2]).length(),l=Vr.set(s[4],s[5],s[6]).length(),c=Vr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ki.copy(this);let u=1/o,h=1/l,g=1/c;return ki.elements[0]*=u,ki.elements[1]*=u,ki.elements[2]*=u,ki.elements[4]*=h,ki.elements[5]*=h,ki.elements[6]*=h,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,t.setFromRotationMatrix(ki),n.x=o,n.y=l,n.z=c,this}makePerspective(e,t,n,s,r,o,l=Wi,c=!1){let u=this.elements,h=2*r/(t-e),g=2*r/(n-s),m=(t+e)/(t-e),d=(n+s)/(n-s),_,E;if(c)_=r/(o-r),E=o*r/(o-r);else if(l===Wi)_=-(o+r)/(o-r),E=-2*o*r/(o-r);else if(l===ro)_=-o/(o-r),E=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=g,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=Wi,c=!1){let u=this.elements,h=2/(t-e),g=2/(n-s),m=-(t+e)/(t-e),d=-(n+s)/(n-s),_,E;if(c)_=1/(o-r),E=o/(o-r);else if(l===Wi)_=-2/(o-r),E=-(o+r)/(o-r);else if(l===ro)_=-1/(o-r),E=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=g,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=_,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Gc.prototype.isMatrix4=!0;var Qe=Gc,Vr=new H,ki=new Qe,P1=new H(0,0,0),I1=new H(1,1,1),Ns=new H,Il=new H,mi=new H,o0=new Qe,a0=new mn,Yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],c=s[1],u=s[5],h=s[9],g=s[2],m=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return o0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a0.setFromEuler(this),this.setFromQuaternion(a0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},L1=0,l0=new H,Gr=new mn,xs=new Qe,Ll=new H,na=new H,D1=new H,N1=new mn,c0=new H(1,0,0),u0=new H(0,1,0),h0=new H(0,0,1),f0={type:"added"},U1={type:"removed"},Wr={type:"childadded",child:null},Ah={type:"childremoved",child:null},En=class i extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Yn,n=new mn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new gt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(c0,e)}rotateY(e){return this.rotateOnAxis(u0,e)}rotateZ(e){return this.rotateOnAxis(h0,e)}translateOnAxis(e,t){return l0.copy(e).applyQuaternion(this.quaternion),this.position.add(l0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c0,e)}translateY(e){return this.translateOnAxis(u0,e)}translateZ(e){return this.translateOnAxis(h0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ll.copy(e):Ll.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(na,Ll,this.up):xs.lookAt(Ll,na,this.up),this.quaternion.setFromRotationMatrix(xs),s&&(xs.extractRotation(s.matrixWorld),Gr.setFromRotationMatrix(xs),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f0),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U1),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xs.multiply(e.parent.matrixWorld)),e.applyMatrix4(xs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f0),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,D1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,N1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let g=c[u];r(e.shapes,g)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),g=o(e.shapes),m=o(e.skeletons),d=o(e.animations),_=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new H(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},F1={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let E of e.hand.values()){let b=t.getJointPose(E,n),a=this._getHandJoint(u,E);b!==null&&(a.matrix.fromArray(b.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,a.jointRadius=b.radius),a.visible=b!==null}let h=u.joints["index-finger-tip"],g=u.joints["thumb-tip"],m=h.position.distanceTo(g.position),d=.02,_=.005;u.inputState.pinching&&m>d+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=d-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Rh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=w1(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rh(o,r,e+1/3),this.g=Rh(o,r,e),this.b=Rh(o,r,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ct.workingToColorSpace(Xn.copy(this),e),Math.round(At(Xn.r*255,0,255))*65536+Math.round(At(Xn.g*255,0,255))*256+Math.round(At(Xn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Xn.copy(this),t);let n=Xn.r,s=Xn.g,r=Xn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),c,u,h=(l+o)/2;if(l===o)c=0,u=0;else{let g=o-l;switch(u=h<=.5?g/(o+l):g/(2-o-l),o){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Gt){Ct.workingToColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,s=Xn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+t,Us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Us),e.getHSL(Dl);let n=Mh(Us.h,Dl.h,t),s=Mh(Us.s,Dl.s,t),r=Mh(Us.l,Dl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new xe;xe.NAMES=bp;var xa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hi=new H,ys=new H,Ch=new H,_s=new H,Xr=new H,qr=new H,d0=new H,Ph=new H,Ih=new H,Lh=new H,Dh=new pt,Nh=new pt,Uh=new pt,zs=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hi.subVectors(e,t),s.cross(Hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hi.subVectors(s,t),ys.subVectors(n,t),Ch.subVectors(e,t);let o=Hi.dot(Hi),l=Hi.dot(ys),c=Hi.dot(Ch),u=ys.dot(ys),h=ys.dot(Ch),g=o*u-l*l;if(g===0)return r.set(0,0,0),null;let m=1/g,d=(u*c-l*h)*m,_=(o*h-l*c)*m;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,t,n,s,r,o,l,c){return this.getBarycoord(e,t,n,s,_s)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_s.x),c.addScaledVector(o,_s.y),c.addScaledVector(l,_s.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Dh.setScalar(0),Nh.setScalar(0),Uh.setScalar(0),Dh.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,n),Uh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dh,r.x),o.addScaledVector(Nh,r.y),o.addScaledVector(Uh,r.z),o}static isFrontFacing(e,t,n,s){return Hi.subVectors(n,t),ys.subVectors(e,t),Hi.cross(ys).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),Hi.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;Xr.subVectors(s,n),qr.subVectors(r,n),Ph.subVectors(e,n);let c=Xr.dot(Ph),u=qr.dot(Ph);if(c<=0&&u<=0)return t.copy(n);Ih.subVectors(e,s);let h=Xr.dot(Ih),g=qr.dot(Ih);if(h>=0&&g<=h)return t.copy(s);let m=c*g-h*u;if(m<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Xr,o);Lh.subVectors(e,r);let d=Xr.dot(Lh),_=qr.dot(Lh);if(_>=0&&d<=_)return t.copy(r);let E=d*u-c*_;if(E<=0&&u>=0&&_<=0)return l=u/(u-_),t.copy(n).addScaledVector(qr,l);let b=h*_-d*g;if(b<=0&&g-h>=0&&d-_>=0)return d0.subVectors(r,s),l=(g-h)/(g-h+(d-_)),t.copy(s).addScaledVector(d0,l);let a=1/(b+E+m);return o=E*a,l=m*a,t.copy(n).addScaledVector(Xr,o).addScaledVector(qr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ci=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Vi):Vi.fromBufferAttribute(r,o),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nl.copy(n.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Ul.subVectors(this.max,ia),Yr.subVectors(e.a,ia),Zr.subVectors(e.b,ia),$r.subVectors(e.c,ia),Fs.subVectors(Zr,Yr),Bs.subVectors($r,Zr),hr.subVectors(Yr,$r);let t=[0,-Fs.z,Fs.y,0,-Bs.z,Bs.y,0,-hr.z,hr.y,Fs.z,0,-Fs.x,Bs.z,0,-Bs.x,hr.z,0,-hr.x,-Fs.y,Fs.x,0,-Bs.y,Bs.x,0,-hr.y,hr.x,0];return!Fh(t,Yr,Zr,$r,Ul)||(t=[1,0,0,0,1,0,0,0,1],!Fh(t,Yr,Zr,$r,Ul))?!1:(Fl.crossVectors(Fs,Bs),t=[Fl.x,Fl.y,Fl.z],Fh(t,Yr,Zr,$r,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bs=[new H,new H,new H,new H,new H,new H,new H,new H],Vi=new H,Nl=new ci,Yr=new H,Zr=new H,$r=new H,Fs=new H,Bs=new H,hr=new H,ia=new H,Ul=new H,Fl=new H,fr=new H;function Fh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fr.fromArray(i,r);let l=s.x*Math.abs(fr.x)+s.y*Math.abs(fr.y)+s.z*Math.abs(fr.z),c=e.dot(fr),u=t.dot(fr),h=n.dot(fr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}var Mn=new H,Bl=new Pe,B1=0,Mt=class extends rs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gp,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ta(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),n=li(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),n=li(n,this.array),s=li(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),n=li(n,this.array),s=li(s,this.array),r=li(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ya=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _a=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},O1=new ci,sa=new H,Bh=new H,ui=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):O1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);let t=sa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(sa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Bh)),this.expandByPoint(sa.copy(e.center).sub(Bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},z1=0,Ai=new Qe,Oh=new En,Kr=new H,gi=new ci,ra=new ci,Nn=new H,vt=class i extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E1(e)?_a:ya)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,n){return Ai.makeTranslation(e,t,n),this.applyMatrix4(Ai),this}scale(e,t,n){return Ai.makeScale(e,t,n),this.applyMatrix4(Ai),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];ra.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(gi.min,ra.min),gi.expandByPoint(Nn),Nn.addVectors(gi.max,ra.max),gi.expandByPoint(Nn)):(gi.expandByPoint(ra.min),gi.expandByPoint(ra.max))}gi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nn));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Nn.fromBufferAttribute(l,u),c&&(Kr.fromBufferAttribute(e,u),Nn.add(Kr)),s=Math.max(s,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],c=[];for(let y=0;y<n.count;y++)l[y]=new H,c[y]=new H;let u=new H,h=new H,g=new H,m=new Pe,d=new Pe,_=new Pe,E=new H,b=new H;function a(y,S,T){u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),g.fromBufferAttribute(n,T),m.fromBufferAttribute(r,y),d.fromBufferAttribute(r,S),_.fromBufferAttribute(r,T),h.sub(u),g.sub(u),d.sub(m),_.sub(m);let A=1/(d.x*_.y-_.x*d.y);isFinite(A)&&(E.copy(h).multiplyScalar(_.y).addScaledVector(g,-d.y).multiplyScalar(A),b.copy(g).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(A),l[y].add(E),l[S].add(E),l[T].add(E),c[y].add(b),c[S].add(b),c[T].add(b))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,S=x.length;y<S;++y){let T=x[y],A=T.start,R=T.count;for(let C=A,P=A+R;C<P;C+=3)a(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let p=new H,f=new H,v=new H,M=new H;function w(y){v.fromBufferAttribute(s,y),M.copy(v);let S=l[y];p.copy(S),p.sub(v.multiplyScalar(v.dot(S))).normalize(),f.crossVectors(M,S);let A=f.dot(c[y])<0?-1:1;o.setXYZW(y,p.x,p.y,p.z,A)}for(let y=0,S=x.length;y<S;++y){let T=x[y],A=T.start,R=T.count;for(let C=A,P=A+R;C<P;C+=3)w(e.getX(C+0)),w(e.getX(C+1)),w(e.getX(C+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,d=n.count;m<d;m++)n.setXYZ(m,0,0,0);let s=new H,r=new H,o=new H,l=new H,c=new H,u=new H,h=new H,g=new H;if(e)for(let m=0,d=e.count;m<d;m+=3){let _=e.getX(m+0),E=e.getX(m+1),b=e.getX(m+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,b),h.subVectors(o,r),g.subVectors(s,r),h.cross(g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),l.add(h),c.add(h),u.add(h),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(b,u.x,u.y,u.z)}else for(let m=0,d=t.count;m<d;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),g.subVectors(s,r),h.cross(g),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(l,c){let u=l.array,h=l.itemSize,g=l.normalized,m=new u.constructor(c.length*h),d=0,_=0;for(let E=0,b=c.length;E<b;E++){l.isInterleavedBufferAttribute?d=c[E]*l.data.stride+l.offset:d=c[E]*h;for(let a=0;a<h;a++)m[_++]=u[d++]}return new Mt(m,h,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],u=e(c,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let c=[],u=r[l];for(let h=0,g=u.length;h<g;h++){let m=u[h],d=e(m,n);c.push(d)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,c=o.length;l<c;l++){let u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let g=0,m=u.length;g<m;g++){let d=u[g];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],g=r[u];for(let m=0,d=g.length;m<d;m++)h.push(g[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let g=o[u];this.addGroup(g.start,g.count,g.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var zh=new H,k1=new H,H1=new gt,Gi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zh.subVectors(n,t).cross(k1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||H1.getNormalMatrix(e),s=this.coplanarPoint(zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},V1=0,os=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=bo,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=hf,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let c=r[l];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ms=new H,kh=new H,Ol=new H,zl=new H,uo=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ms.copy(this.origin).addScaledVector(this.direction,t),Ms.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kh.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),zl.copy(this.origin).sub(kh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ol),l=zl.dot(this.direction),c=-zl.dot(Ol),u=zl.lengthSq(),h=Math.abs(1-o*o),g,m,d,_;if(h>0)if(g=o*c-l,m=o*l-c,_=r*h,g>=0)if(m>=-_)if(m<=_){let E=1/h;g*=E,m*=E,d=g*(g+o*m+2*l)+m*(o*g+m+2*c)+u}else m=r,g=Math.max(0,-(o*m+l)),d=-g*g+m*(m+2*c)+u;else m=-r,g=Math.max(0,-(o*m+l)),d=-g*g+m*(m+2*c)+u;else m<=-_?(g=Math.max(0,-(-o*r+l)),m=g>0?-r:Math.min(Math.max(-r,-c),r),d=-g*g+m*(m+2*c)+u):m<=_?(g=0,m=Math.min(Math.max(-r,-c),r),d=m*(m+2*c)+u):(g=Math.max(0,-(o*r+l)),m=g>0?r:Math.min(Math.max(-r,-c),r),d=-g*g+m*(m+2*c)+u);else m=o>0?-r:r,g=Math.max(0,-(o*m+l)),d=-g*g+m*(m+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(kh).addScaledVector(Ol,m),d}intersectSphere(e,t){if(e.radius<0)return null;Ms.subVectors(e.center,this.origin);let n=Ms.dot(this.direction),s=Ms.dot(Ms)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,c,u=1/this.direction.x,h=1/this.direction.y,g=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),g>=0?(l=(e.min.z-m.z)*g,c=(e.max.z-m.z)*g):(l=(e.max.z-m.z)*g,c=(e.min.z-m.z)*g),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ms)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,c=l.x,u=l.y,h=l.z,g=e.x-o.x,m=e.y-o.y,d=e.z-o.z,_=t.x-o.x,E=t.y-o.y,b=t.z-o.z,a=n.x-o.x,x=n.y-o.y,p=n.z-o.z,f=Math.abs(c),v=Math.abs(u),M=Math.abs(h),w,y,S,T,A,R,C,P,L,D,B,V;if(f>=v&&f>=M?(S=c,R=g,L=_,V=a,c>=0?(w=u,y=h,T=m,A=d,C=E,P=b,D=x,B=p):(w=h,y=u,T=d,A=m,C=b,P=E,D=p,B=x)):v>=M?(S=u,R=m,L=E,V=x,u>=0?(w=h,y=c,T=d,A=g,C=b,P=_,D=p,B=a):(w=c,y=h,T=g,A=d,C=_,P=b,D=a,B=p)):(S=h,R=d,L=b,V=p,h>=0?(w=c,y=u,T=g,A=m,C=_,P=E,D=a,B=x):(w=u,y=c,T=m,A=g,C=E,P=_,D=x,B=a)),S===0)return null;let O=w/S,k=y/S,z=1/S,W=T-O*R,ce=A-k*R,Ne=C-O*L,Oe=P-k*L,Ee=D-O*V,$=B-k*V,J=Ee*Oe-$*Ne,le=W*$-ce*Ee,Ce=Ne*ce-Oe*W;if(s){if(J<0||le<0||Ce<0)return null}else if((J<0||le<0||Ce<0)&&(J>0||le>0||Ce>0))return null;let Se=J+le+Ce;if(Se===0)return null;let ke=z*(J*R+le*L+Ce*V);return(Se>0?ke<0:ke>0)?null:this.at(ke/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gn=class extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},p0=new Qe,dr=new uo,kl=new ui,m0=new H,Hl=new H,Vl=new H,Gl=new H,Hh=new H,Wl=new H,g0=new H,Xl=new H,ut=class extends En{constructor(e=new vt,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Wl.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=l[c],g=r[c];h!==0&&(Hh.fromBufferAttribute(g,e),o?Wl.addScaledVector(Hh,h):Wl.addScaledVector(Hh.sub(t),h))}t.add(Wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(r),dr.copy(e.ray).recast(e.near),!(kl.containsPoint(dr.origin)===!1&&(dr.intersectSphere(kl,m0)===null||dr.origin.distanceToSquared(m0)>(e.far-e.near)**2))&&(p0.copy(r).invert(),dr.copy(e.ray).applyMatrix4(p0),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,g=r.attributes.normal,m=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,E=m.length;_<E;_++){let b=m[_],a=o[b.materialIndex],x=Math.max(b.start,d.start),p=Math.min(l.count,Math.min(b.start+b.count,d.start+d.count));for(let f=x,v=p;f<v;f+=3){let M=l.getX(f),w=l.getX(f+1),y=l.getX(f+2);s=ql(this,a,e,n,u,h,g,M,w,y),s&&(s.faceIndex=Math.floor(f/3),s.face.materialIndex=b.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let b=_,a=E;b<a;b+=3){let x=l.getX(b),p=l.getX(b+1),f=l.getX(b+2);s=ql(this,o,e,n,u,h,g,x,p,f),s&&(s.faceIndex=Math.floor(b/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,E=m.length;_<E;_++){let b=m[_],a=o[b.materialIndex],x=Math.max(b.start,d.start),p=Math.min(c.count,Math.min(b.start+b.count,d.start+d.count));for(let f=x,v=p;f<v;f+=3){let M=f,w=f+1,y=f+2;s=ql(this,a,e,n,u,h,g,M,w,y),s&&(s.faceIndex=Math.floor(f/3),s.face.materialIndex=b.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),E=Math.min(c.count,d.start+d.count);for(let b=_,a=E;b<a;b+=3){let x=b,p=b+1,f=b+2;s=ql(this,o,e,n,u,h,g,x,p,f),s&&(s.faceIndex=Math.floor(b/3),t.push(s))}}}};function G1(i,e,t,n,s,r,o,l){let c;if(e.side===Hn?c=n.intersectTriangle(o,r,s,!0,l):c=n.intersectTriangle(s,r,o,e.side===ls,l),c===null)return null;Xl.copy(l),Xl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Xl);return u<t.near||u>t.far?null:{distance:u,point:Xl.clone(),object:i}}function ql(i,e,t,n,s,r,o,l,c,u){i.getVertexPosition(l,Hl),i.getVertexPosition(c,Vl),i.getVertexPosition(u,Gl);let h=G1(i,e,t,n,Hl,Vl,Gl,g0);if(h){let g=new H;zs.getBarycoord(g0,Hl,Vl,Gl,g),s&&(h.uv=zs.getInterpolatedAttribute(s,l,c,u,g,new Pe)),r&&(h.uv1=zs.getInterpolatedAttribute(r,l,c,u,g,new Pe)),o&&(h.normal=zs.getInterpolatedAttribute(o,l,c,u,g,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a:l,b:c,c:u,normal:new H,materialIndex:0};zs.getNormal(Hl,Vl,Gl,m.normal),h.face=m,h.barycoord=g}return h}var Xi=class extends qn{constructor(e=null,t=1,n=1,s,r,o,l,c,u=Sn,h=Sn,g,m){super(null,o,l,c,u,h,s,r,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Jr=new Qe,v0=new Qe,Yl=[],x0=new ci,W1=new Qe,oa=new ut,aa=new ui,qi=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),x0.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(x0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Jr),aa.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Jr),v0.multiplyMatrices(n,Jr),oa.matrixWorld=v0,oa.raycast(e,Yl);for(let o=0,l=Yl.length;o<l;o++){let c=Yl[o];c.instanceId=r,c.object=this,t.push(c)}Yl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xi(new Float32Array(s*this.count),s,this.count,Ys,Ci));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let l=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pr=new ui,X1=new Pe(.5,.5),Zl=new H,ho=class{constructor(e=new Gi,t=new Gi,n=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],c=r[2],u=r[3],h=r[4],g=r[5],m=r[6],d=r[7],_=r[8],E=r[9],b=r[10],a=r[11],x=r[12],p=r[13],f=r[14],v=r[15];if(s[0].setComponents(u-o,d-h,a-_,v-x).normalize(),s[1].setComponents(u+o,d+h,a+_,v+x).normalize(),s[2].setComponents(u+l,d+g,a+E,v+p).normalize(),s[3].setComponents(u-l,d-g,a-E,v-p).normalize(),n)s[4].setComponents(c,m,b,f).normalize(),s[5].setComponents(u-c,d-m,a-b,v-f).normalize();else if(s[4].setComponents(u-c,d-m,a-b,v-f).normalize(),t===Wi)s[5].setComponents(u+c,d+m,a+b,v+f).normalize();else if(t===ro)s[5].setComponents(c,m,b,f).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);let t=X1.distanceTo(e.center);return pr.radius=.7071067811865476+t,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Zl.x=s.normal.x>0?e.max.x:e.min.x,Zl.y=s.normal.y>0?e.max.y:e.min.y,Zl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xc=class extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yc=new H,_c=new H,y0=new Qe,la=new uo,$l=new ui,Vh=new H,_0=new H,ba=class extends En{constructor(e=new vt,t=new xc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yc.fromBufferAttribute(t,s-1),_c.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yc.distanceTo(_c);e.setAttribute("lineDistance",new Ze(n,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(s),$l.radius+=r,e.ray.intersectsSphere($l)===!1)return;y0.copy(s).invert(),la.copy(e.ray).applyMatrix4(y0);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let E=d,b=_-1;E<b;E+=u){let a=h.getX(E),x=h.getX(E+1),p=Kl(this,e,la,c,a,x,E);p&&t.push(p)}if(this.isLineLoop){let E=h.getX(_-1),b=h.getX(d),a=Kl(this,e,la,c,E,b,_-1);a&&t.push(a)}}else{let d=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let E=d,b=_-1;E<b;E+=u){let a=Kl(this,e,la,c,E,E+1,E);a&&t.push(a)}if(this.isLineLoop){let E=Kl(this,e,la,c,_-1,d,_-1);E&&t.push(E)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Kl(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if(yc.fromBufferAttribute(l,s),_c.fromBufferAttribute(l,r),t.distanceSqToSegment(yc,_c,Vh,_0)>n)return;Vh.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Vh);if(!(u<e.near||u>e.far))return{distance:u,point:_0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var fo=class extends os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},b0=new Qe,jh=new uo,Jl=new ui,jl=new H,Ma=class extends En{constructor(e=new vt,t=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jl.copy(n.boundingSphere),Jl.applyMatrix4(s),Jl.radius+=r,e.ray.intersectsSphere(Jl)===!1)return;b0.copy(s).invert(),jh.copy(e.ray).applyMatrix4(b0);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=n.index,g=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=m,E=d;_<E;_++){let b=u.getX(_);jl.fromBufferAttribute(g,b),M0(jl,b,c,s,e,t,this)}}else{let m=Math.max(0,o.start),d=Math.min(g.count,o.start+o.count);for(let _=m,E=d;_<E;_++)jl.fromBufferAttribute(g,_),M0(jl,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function M0(i,e,t,n,s,r,o){let l=jh.distanceSqToPoint(i);if(l<t){let c=new H;jh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Sa=class extends qn{constructor(e=[],t=Xs,n,s,r,o,l,c,u,h){super(e,t,n,s,r,o,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ti=class extends qn{constructor(e,t,n,s,r,o,l,c,u){super(e,t,n,s,r,o,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ks=class extends qn{constructor(e,t,n=$i,s,r,o,l=Sn,c=Sn,u,h=ss,g=1){if(h!==ss&&h!==qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:g};super(m,s,r,o,l,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},bc=class extends ks{constructor(e,t=$i,n=Xs,s,r,o=Sn,l=Sn,c,u=ss){let h={width:e,height:e,depth:1},g=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,c,u),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ea=class extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Kt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],u=[],h=[],g=[],m=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(g,2));function _(E,b,a,x,p,f,v,M,w,y,S){let T=f/w,A=v/y,R=f/2,C=v/2,P=M/2,L=w+1,D=y+1,B=0,V=0,O=new H;for(let k=0;k<D;k++){let z=k*A-C;for(let W=0;W<L;W++){let ce=W*T-R;O[E]=ce*x,O[b]=z*p,O[a]=P,u.push(O.x,O.y,O.z),O[E]=0,O[b]=0,O[a]=M>0?1:-1,h.push(O.x,O.y,O.z),g.push(W/w),g.push(1-k/y),B+=1}}for(let k=0;k<y;k++)for(let z=0;z<w;z++){let W=m+z+L*k,ce=m+z+L*(k+1),Ne=m+(z+1)+L*(k+1),Oe=m+(z+1)+L*k;c.push(W,ce,Oe),c.push(ce,Ne,Oe),V+=6}l.addGroup(d,V,S),d+=V,m+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var vr=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],c=[],u=new H,h=new Pe;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let g=0,m=3;g<=t;g++,m+=3){let d=n+g/t*s;u.x=e*Math.cos(d),u.y=e*Math.sin(d),o.push(u.x,u.y,u.z),l.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,c.push(h.x,h.y)}for(let g=1;g<=t;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ri=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],g=[],m=[],d=[],_=0,E=[],b=n/2,a=0;x(),o===!1&&(e>0&&p(!0),t>0&&p(!1)),this.setIndex(h),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(d,2));function x(){let f=new H,v=new H,M=0,w=(t-e)/n;for(let y=0;y<=r;y++){let S=[],T=y/r,A=T*(t-e)+e;for(let R=0;R<=s;R++){let C=R/s,P=C*c+l,L=Math.sin(P),D=Math.cos(P);v.x=A*L,v.y=-T*n+b,v.z=A*D,g.push(v.x,v.y,v.z),f.set(L,w,D).normalize(),m.push(f.x,f.y,f.z),d.push(C,1-T),S.push(_++)}E.push(S)}for(let y=0;y<s;y++)for(let S=0;S<r;S++){let T=E[S][y],A=E[S+1][y],R=E[S+1][y+1],C=E[S][y+1];(e>0||S!==0)&&(h.push(T,A,C),M+=3),(t>0||S!==r-1)&&(h.push(A,R,C),M+=3)}u.addGroup(a,M,0),a+=M}function p(f){let v=_,M=new Pe,w=new H,y=0,S=f===!0?e:t,T=f===!0?1:-1;for(let R=1;R<=s;R++)g.push(0,b*T,0),m.push(0,T,0),d.push(.5,.5),_++;let A=_;for(let R=0;R<=s;R++){let P=R/s*c+l,L=Math.cos(P),D=Math.sin(P);w.x=S*D,w.y=b*T,w.z=S*L,g.push(w.x,w.y,w.z),m.push(0,T,0),M.x=L*.5+.5,M.y=D*.5*T+.5,d.push(M.x,M.y),_++}for(let R=0;R<s;R++){let C=v+R,P=A+R;f===!0?h.push(P,P+1,C):h.push(P+1,P,C),y+=3}u.addGroup(a,y,f===!0?1:2),a+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Mc=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),u(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let p=new H,f=new H,v=new H;for(let M=0;M<t.length;M+=3)d(t[M+0],p),d(t[M+1],f),d(t[M+2],v),c(p,f,v,x)}function c(x,p,f,v){let M=v+1,w=[];for(let y=0;y<=M;y++){w[y]=[];let S=x.clone().lerp(f,y/M),T=p.clone().lerp(f,y/M),A=M-y;for(let R=0;R<=A;R++)R===0&&y===M?w[y][R]=S:w[y][R]=S.clone().lerp(T,R/A)}for(let y=0;y<M;y++)for(let S=0;S<2*(M-y)-1;S++){let T=Math.floor(S/2);S%2===0?(m(w[y][T+1]),m(w[y+1][T]),m(w[y][T])):(m(w[y][T+1]),m(w[y+1][T+1]),m(w[y+1][T]))}}function u(x){let p=new H;for(let f=0;f<r.length;f+=3)p.x=r[f+0],p.y=r[f+1],p.z=r[f+2],p.normalize().multiplyScalar(x),r[f+0]=p.x,r[f+1]=p.y,r[f+2]=p.z}function h(){let x=new H;for(let p=0;p<r.length;p+=3){x.x=r[p+0],x.y=r[p+1],x.z=r[p+2];let f=b(x)/2/Math.PI+.5,v=a(x)/Math.PI+.5;o.push(f,1-v)}_(),g()}function g(){for(let x=0;x<o.length;x+=6){let p=o[x+0],f=o[x+2],v=o[x+4],M=Math.max(p,f,v),w=Math.min(p,f,v);M>.9&&w<.1&&(p<.2&&(o[x+0]+=1),f<.2&&(o[x+2]+=1),v<.2&&(o[x+4]+=1))}}function m(x){r.push(x.x,x.y,x.z)}function d(x,p){let f=x*3;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function _(){let x=new H,p=new H,f=new H,v=new H,M=new Pe,w=new Pe,y=new Pe;for(let S=0,T=0;S<r.length;S+=9,T+=6){x.set(r[S+0],r[S+1],r[S+2]),p.set(r[S+3],r[S+4],r[S+5]),f.set(r[S+6],r[S+7],r[S+8]),M.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),y.set(o[T+4],o[T+5]),v.copy(x).add(p).add(f).divideScalar(3);let A=b(v);E(M,T+0,x,A),E(w,T+2,p,A),E(y,T+4,f,A)}}function E(x,p,f,v){v<0&&x.x===1&&(o[p]=x.x-1),f.x===0&&f.z===0&&(o[p]=v/2/Math.PI+.5)}function b(x){return Math.atan2(x.z,-x.x)}function a(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ct("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,c=r-1,u;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),u=n[s]-o,u<0)l=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,d=(o-h)/m;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),c=t||(o.isVector2?new Pe:new H);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],o=[],l=new H,c=new Qe;for(let d=0;d<=e;d++){let _=d/e;s[d]=this.getTangentAt(_,new H)}r[0]=new H,o[0]=new H;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),g=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),g<=u&&(u=g,n.set(0,1,0)),m<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),l.crossVectors(s[d-1],s[d]),l.length()>Number.EPSILON){l.normalize();let _=Math.acos(At(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(l,_))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(At(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},po=class extends vi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new Pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),g=Math.sin(this.aRotation),m=c-this.aX,d=u-this.aY;c=m*h-d*g+this.aX,u=m*g+d*h+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sc=class extends po{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Rf(){let i=0,e=0,t=0,n=0;function s(r,o,l,c){i=r,e=l,t=-3*r+3*o-2*l-c,n=2*r-2*o+l+c}return{initCatmullRom:function(r,o,l,c,u){s(o,l,u*(l-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,l,c,u,h,g){let m=(o-r)/u-(l-r)/(u+h)+(l-o)/h,d=(l-o)/h-(c-o)/(h+g)+(c-l)/g;m*=h,d*=h,s(o,l,m,d)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var S0=new H,E0=new H,Gh=new Rf,Wh=new Rf,Xh=new Rf,Ec=class extends vi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let u,h;this.closed||l>0?u=s[(l-1)%r]:(E0.subVectors(s[0],s[1]).add(s[0]),u=E0);let g=s[l%r],m=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(S0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=S0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(u.distanceToSquared(g),d),E=Math.pow(g.distanceToSquared(m),d),b=Math.pow(m.distanceToSquared(h),d);E<1e-4&&(E=1),_<1e-4&&(_=E),b<1e-4&&(b=E),Gh.initNonuniformCatmullRom(u.x,g.x,m.x,h.x,_,E,b),Wh.initNonuniformCatmullRom(u.y,g.y,m.y,h.y,_,E,b),Xh.initNonuniformCatmullRom(u.z,g.z,m.z,h.z,_,E,b)}else this.curveType==="catmullrom"&&(Gh.initCatmullRom(u.x,g.x,m.x,h.x,this.tension),Wh.initCatmullRom(u.y,g.y,m.y,h.y,this.tension),Xh.initCatmullRom(u.z,g.z,m.z,h.z,this.tension));return n.set(Gh.calc(c),Wh.calc(c),Xh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function T0(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,c=i*l;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*l+r*i+t}function q1(i,e){let t=1-i;return t*t*e}function Y1(i,e){return 2*(1-i)*i*e}function Z1(i,e){return i*i*e}function ua(i,e,t,n){return q1(i,e)+Y1(i,t)+Z1(i,n)}function $1(i,e){let t=1-i;return t*t*t*e}function K1(i,e){let t=1-i;return 3*t*t*i*e}function J1(i,e){return 3*(1-i)*i*i*e}function j1(i,e){return i*i*i*e}function ha(i,e,t,n,s){return $1(i,e)+K1(i,t)+J1(i,n)+j1(i,s)}var Ta=class extends vi{constructor(e=new Pe,t=new Pe,n=new Pe,s=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(ha(e,s.x,r.x,o.x,l.x),ha(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tc=class extends vi{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(ha(e,s.x,r.x,o.x,l.x),ha(e,s.y,r.y,o.y,l.y),ha(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wa=class extends vi{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wc=class extends vi{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends vi{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ua(e,s.x,r.x,o.x),ua(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends vi{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ua(e,s.x,r.x,o.x),ua(e,s.y,r.y,o.y),ua(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,c=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return n.set(T0(l,c.x,u.x,h.x,g.x),T0(l,c.y,u.y,h.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Pe().fromArray(s))}return this}},w0=Object.freeze({__proto__:null,ArcCurve:Sc,CatmullRomCurve3:Ec,CubicBezierCurve:Ta,CubicBezierCurve3:Tc,EllipseCurve:po,LineCurve:wa,LineCurve3:wc,QuadraticBezierCurve:Aa,QuadraticBezierCurve3:Ac,SplineCurve:Ra}),Rc=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new w0[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],c=l.getLength(),u=c===0?0:1-o/c;return l.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(l);for(let u=0;u<c.length;u++){let h=c[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new w0[s.type]().fromJSON(s))}return this}},Ca=class extends Rc{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wa(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Aa(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new Ta(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s),new Pe(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ra(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,c){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,l,c),this}absellipse(e,t,n,s,r,o,l,c){let u=new po(e,t,n,s,r,o,l,c);if(this.curves.length>0){let g=u.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mo=class extends Ca{constructor(e){super(e),this.uuid=Eo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ca().fromJSON(s))}return this}};function Q1(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Mp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,c,u;if(n&&(r=sv(i,e,r,t)),i.length>80*t){l=i[0],c=i[1];let h=l,g=c;for(let m=t;m<s;m+=t){let d=i[m],_=i[m+1];d<l&&(l=d),_<c&&(c=_),d>h&&(h=d),_>g&&(g=_)}u=Math.max(h-l,g-c),u=u!==0?32767/u:0}return Pa(r,o,t,l,c,u,0),o}function Mp(i,e,t,n,s){let r;if(s===mv(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=A0(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=A0(o/n|0,i[o],i[o+1],r);return r&&go(r,r.next)&&(La(r),r=r.next),r}function xr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(go(t,t.next)||cn(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&cv(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,u=i.next;if(r?tv(i,n,s,r):ev(i)){e.push(c.i,i.i,u.i),La(i),i=u.next,l=u.next;continue}if(i=u,i===l){o?o===1?(i=nv(xr(i),e),Pa(i,e,t,n,s,r,2)):o===2&&iv(i,e,t,n,s,r):Pa(xr(i),e,t,n,s,r,1);break}}}function ev(i){let e=i.prev,t=i,n=i.next;if(cn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,c=t.y,u=n.y,h=Math.min(s,r,o),g=Math.min(l,c,u),m=Math.max(s,r,o),d=Math.max(l,c,u),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=m&&_.y>=g&&_.y<=d&&ca(s,l,r,c,o,u,_.x,_.y)&&cn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function tv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(cn(s,r,o)>=0)return!1;let l=s.x,c=r.x,u=o.x,h=s.y,g=r.y,m=o.y,d=Math.min(l,c,u),_=Math.min(h,g,m),E=Math.max(l,c,u),b=Math.max(h,g,m),a=Qh(d,_,e,t,n),x=Qh(E,b,e,t,n),p=i.prevZ,f=i.nextZ;for(;p&&p.z>=a&&f&&f.z<=x;){if(p.x>=d&&p.x<=E&&p.y>=_&&p.y<=b&&p!==s&&p!==o&&ca(l,h,c,g,u,m,p.x,p.y)&&cn(p.prev,p,p.next)>=0||(p=p.prevZ,f.x>=d&&f.x<=E&&f.y>=_&&f.y<=b&&f!==s&&f!==o&&ca(l,h,c,g,u,m,f.x,f.y)&&cn(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;p&&p.z>=a;){if(p.x>=d&&p.x<=E&&p.y>=_&&p.y<=b&&p!==s&&p!==o&&ca(l,h,c,g,u,m,p.x,p.y)&&cn(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;f&&f.z<=x;){if(f.x>=d&&f.x<=E&&f.y>=_&&f.y<=b&&f!==s&&f!==o&&ca(l,h,c,g,u,m,f.x,f.y)&&cn(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function nv(i,e){let t=i;do{let n=t.prev,s=t.next.next;!go(n,s)&&Ep(n,t,t.next,s)&&Ia(n,s)&&Ia(s,n)&&(e.push(n.i,t.i,s.i),La(t),La(t.next),t=i=s),t=t.next}while(t!==i);return xr(t)}function iv(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&fv(o,l)){let c=Tp(o,l);o=xr(o,o.next),c=xr(c,c.next),Pa(o,e,t,n,s,r,0),Pa(c,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function sv(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,c=r<o-1?e[r+1]*n:i.length,u=Mp(i,l,c,n,!1);u===u.next&&(u.steiner=!0),s.push(hv(u))}s.sort(rv);for(let r=0;r<s.length;r++)t=ov(s[r],t);return t}function rv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ov(i,e){let t=av(i,e);if(!t)return e;let n=Tp(t,i);return xr(n,n.next),xr(t,t.next)}function av(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(go(i,t))return t;do{if(go(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let g=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=n&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,c=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Sp(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){let g=Math.abs(s-t.y)/(n-t.x);Ia(t,i)&&(g<h||g===h&&(t.x>o.x||t.x===o.x&&lv(o,t)))&&(o=t,h=g)}t=t.next}while(t!==l);return o}function lv(i,e){return cn(i.prev,i,e.prev)<0&&cn(e.next,i,i.next)<0}function cv(i,e,t,n){let s=i;do s.z===0&&(s.z=Qh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,uv(s)}function uv(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let u=0;u<t&&(l++,o=o.nextZ,!!o);u++);let c=t;for(;l>0||c>0&&o;)l!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Qh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Sp(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function ca(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&Sp(i,e,t,n,s,r,o,l)}function fv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!dv(i,e)&&(Ia(i,e)&&Ia(e,i)&&pv(i,e)&&(cn(i.prev,i,e.prev)||cn(i,e.prev,e))||go(i,e)&&cn(i.prev,i,i.next)>0&&cn(e.prev,e,e.next)>0)}function cn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function go(i,e){return i.x===e.x&&i.y===e.y}function Ep(i,e,t,n){let s=ec(cn(i,e,t)),r=ec(cn(i,e,n)),o=ec(cn(t,n,i)),l=ec(cn(t,n,e));return!!(s!==r&&o!==l||s===0&&Ql(i,t,e)||r===0&&Ql(i,n,e)||o===0&&Ql(t,i,n)||l===0&&Ql(t,e,n))}function Ql(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ec(i){return i>0?1:i<0?-1:0}function dv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ep(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ia(i,e){return cn(i.prev,i,i.next)<0?cn(i,e,i.next)>=0&&cn(i,i.prev,e)>=0:cn(i,e,i.prev)<0||cn(i,i.next,e)<0}function pv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Tp(i,e){let t=ef(i.i,i.x,i.y),n=ef(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function A0(i,e,t,n){let s=ef(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function La(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ef(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var tf=class{static triangulate(e,t,n=2){return Q1(e,t,n)}},io=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];R0(e),C0(n,e);let o=e.length;t.forEach(R0);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,C0(n,t[c]);let l=tf.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function R0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function C0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Da=class i extends Mc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Qt=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),c=Math.floor(s),u=l+1,h=c+1,g=e/l,m=t/c,d=[],_=[],E=[],b=[];for(let a=0;a<h;a++){let x=a*m-o;for(let p=0;p<u;p++){let f=p*g-r;_.push(f,-x,0),E.push(0,0,1),b.push(p/l),b.push(1-a/c)}}for(let a=0;a<c;a++)for(let x=0;x<l;x++){let p=x+u*a,f=x+u*(a+1),v=x+1+u*(a+1),M=x+1+u*a;d.push(p,f,M),d.push(f,v,M)}this.setIndex(d),this.setAttribute("position",new Ze(_,3)),this.setAttribute("normal",new Ze(E,3)),this.setAttribute("uv",new Ze(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Na=class i extends vt{constructor(e=new mo([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],l=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(l,c,h),l+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(o,2));function u(h){let g=s.length/3,m=h.extractPoints(t),d=m.shape,_=m.holes;io.isClockWise(d)===!1&&(d=d.reverse());for(let b=0,a=_.length;b<a;b++){let x=_[b];io.isClockWise(x)===!0&&(_[b]=x.reverse())}let E=io.triangulateShape(d,_);for(let b=0,a=_.length;b<a;b++){let x=_[b];d=d.concat(x)}for(let b=0,a=d.length;b<a;b++){let x=d[b];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let b=0,a=E.length;b<a;b++){let x=E[b],p=x[0]+g,f=x[1]+g,v=x[2]+g;n.push(p,f,v),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return gv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function gv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ua=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+l,Math.PI),u=0,h=[],g=new H,m=new H,d=[],_=[],E=[],b=[];for(let a=0;a<=n;a++){let x=[],p=a/n,f=o+p*l,v=e*Math.cos(f),M=Math.sqrt(e*e-v*v),w=0;a===0&&o===0?w=.5/t:a===n&&c===Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){let S=y/t,T=s+S*r;g.x=-M*Math.cos(T),g.y=v,g.z=M*Math.sin(T),_.push(g.x,g.y,g.z),m.copy(g).normalize(),E.push(m.x,m.y,m.z),b.push(S+w,1-p),x.push(u++)}h.push(x)}for(let a=0;a<n;a++)for(let x=0;x<t;x++){let p=h[a][x+1],f=h[a][x],v=h[a+1][x],M=h[a+1][x+1];(a!==0||o>0)&&d.push(p,f,M),(a!==n-1||c<Math.PI)&&d.push(f,v,M)}this.setIndex(d),this.setAttribute("position",new Ze(_,3)),this.setAttribute("normal",new Ze(E,3)),this.setAttribute("uv",new Ze(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fa=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],g=[],m=new H,d=new H,_=new H;for(let E=0;E<=n;E++){let b=o+E/n*l;for(let a=0;a<=s;a++){let x=a/s*r;d.x=(e+t*Math.cos(b))*Math.cos(x),d.y=(e+t*Math.cos(b))*Math.sin(x),d.z=t*Math.sin(b),u.push(d.x,d.y,d.z),m.x=e*Math.cos(x),m.y=e*Math.sin(x),_.subVectors(d,m).normalize(),h.push(_.x,_.y,_.z),g.push(a/s),g.push(E/n)}}for(let E=1;E<=n;E++)for(let b=1;b<=s;b++){let a=(s+1)*E+b-1,x=(s+1)*(E-1)+b-1,p=(s+1)*(E-1)+b,f=(s+1)*E+b;c.push(a,x,f),c.push(x,p,f)}this.setIndex(c),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(P0(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(P0(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Kn(i){let e={};for(let t=0;t<i.length;t++){let n=Sr(i[t]);for(let s in n)e[s]=n[s]}return e}function P0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var Er={clone:Sr,merge:Kn},xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Cc=class extends ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var un=class extends os{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yr=class extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function jr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ic=class extends Hs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Kh:r=e,l=2*t-n;break;case Jh:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kh:o=e,c=2*n-t;break;case Jh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,d=this._weightNext,_=(n-t)/(s-t),E=_*_,b=E*_,a=-m*b+2*m*E-m*_,x=(1+m)*b+(-1.5-2*m)*E+(-.5+m)*_+1,p=(-1-d)*b+(1.5+d)*E+.5*_,f=d*b-d*E;for(let v=0;v!==l;++v)r[v]=a*o[h+v]+x*o[u+v]+p*o[c+v]+f*o[g+v];return r}},Lc=class extends Hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=(n-t)/(s-t),g=1-h;for(let m=0;m!==l;++m)r[m]=o[u+m]*g+o[c+m]*h;return r}},Dc=class extends Hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nc=class extends Hs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=this.inTangents,g=this.outTangents;if(!h||!g){let _=(n-t)/(s-t),E=1-_;for(let b=0;b!==l;++b)r[b]=o[u+b]*E+o[c+b]*_;return r}let m=l*2,d=e-1;for(let _=0;_!==l;++_){let E=o[u+_],b=o[c+_],a=d*m+_*2,x=g[a],p=g[a+1],f=e*m+_*2,v=h[f],M=h[f+1],w=bv(n,t,x,v,s);r[_]=wp(w,E,p,M,b)}return r}};function wp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function _v(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function bv(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=wp(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let c=_v(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var xi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),qh(e.settings)&&(n.settings={inTangents:jr(e.settings.inTangents,Array),outTangents:jr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fa:t=this.InterpolantFactoryMethodDiscrete;break;case pc:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth;break;case Zh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ct("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return pc;case this.InterpolantFactoryMethodSmooth:return ic;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;qh(this.settings)&&(I0(this.settings.inTangents,e),I0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(dt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(dt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){dt("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){dt("KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(s!==void 0&&T1(s))for(let l=0,c=s.length;l!==c;++l){let u=s[l];if(isNaN(u)){dt("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ic,r=e.length-1,o=1;for(let l=1;l<r;++l){let c=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(s)c=!0;else{let g=l*n,m=g-n,d=g+n;for(let _=0;_!==n;++_){let E=t[g+_];if(E!==t[m+_]||E!==t[d+_]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];let g=l*n,m=o*n;for(let d=0;d!==n;++d)t[m+d]=t[g+d]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[l+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,qh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function I0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=pc;var Vs=class extends xi{constructor(e,t,n){super(e,t,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=fa;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Uc.prototype.ValueTypeName="color";var Fc=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Fc.prototype.ValueTypeName="number";var Bc=class extends Hs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t),u=e*l;for(let h=u+l;u!==h;u+=4)mn.slerpFlat(r,0,o,u-l,o,u,c);return r}},Ba=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends xi{constructor(e,t,n){super(e,t,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=fa;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Oc.prototype.ValueTypeName="vector";var rc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(L0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!L0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function L0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var zc=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,g){return u.push(h,g),this},this.removeHandler=function(h){let g=u.indexOf(h);return g!==-1&&u.splice(g,2),this},this.getHandler=function(h){for(let g=0,m=u.length;g<m;g+=2){let d=u[g],_=u[g+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ap=new zc,vo=class{constructor(e){this.manager=e!==void 0?e:Ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qr=new WeakMap,kc=class extends vo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=rc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let g=Qr.get(o);g===void 0&&(g=[],Qr.set(o,g)),g.push({onLoad:t,onError:s})}return o}let l=oo("img");function c(){h(),t&&t(this);let g=Qr.get(this)||[];for(let m=0;m<g.length;m++){let d=g[m];d.onLoad&&d.onLoad(this)}Qr.delete(this),r.manager.itemEnd(e)}function u(g){h(),s&&s(g),rc.remove(`image:${e}`);let m=Qr.get(this)||[];for(let d=0;d<m.length;d++){let _=m[d];_.onError&&_.onError(g)}Qr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),rc.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var Oa=class extends vo{constructor(e){super(e)}load(e,t,n,s){let r=new qn,o=new kc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},xo=class extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},za=class extends xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yh=new Qe,D0=new H,N0=new H,ka=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;D0.setFromMatrixPosition(e.matrixWorld),t.position.copy(D0),N0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(N0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Yh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===ro||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(Yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tc=new H,nc=new mn,ns=new H,Ts=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tc,nc,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,ns.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tc,nc,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,ns.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Os=new H,U0=new Pe,F0=new Pe,kn=class extends Ts{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Os.x,Os.y).multiplyScalar(-e/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Os.x,Os.y).multiplyScalar(-e/Os.z)}getViewSize(e,t){return this.getViewBounds(e,U0,F0),t.subVectors(F0,U0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},nf=class extends ka{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ma*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ha=class extends xo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Ws=class extends Ts{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sf=class extends ka{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new sf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var as=class extends vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var eo=-90,to=1,Hc=class extends En{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(eo,to,e,t);s.layers=this.layers,this.add(s);let r=new kn(eo,to,e,t);r.layers=this.layers,this.add(r);let o=new kn(eo,to,e,t);o.layers=this.layers,this.add(o);let l=new kn(eo,to,e,t);l.layers=this.layers,this.add(l);let c=new kn(eo,to,e,t);c.layers=this.layers,this.add(c);let u=new kn(eo,to,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,c]=t;for(let u of t)this.remove(u);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,c,u,h]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(g,m,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Vc=class extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Va=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Mv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Mv(){this._document.hidden===!1&&this.reset()}var Pf="\\[\\]\\.:\\/",Sv=new RegExp("["+Pf+"]","g"),If="[^"+Pf+"]",Ev="[^"+Pf.replace("\\.","")+"]",Tv=/((?:WC+[\/:])*)/.source.replace("WC",If),wv=/(WCOD+)?/.source.replace("WCOD",Ev),Av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),Rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),Cv=new RegExp("^"+Tv+wv+Av+Rv+"$"),Pv=["material","materials","bones","map"],rf=class{constructor(e,t,n){let s=n||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sv,"")}static parseTrackName(e){let t=Cv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;dt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=rf;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cS=new Float32Array(1);var Bf=class Bf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Bf.prototype.isMatrix2=!0;var of=Bf;function Lf(i,e,t,n){let s=Iv(n);switch(t){case Ef:return i*e;case Ys:return i*e/s.components*s.byteLength;case Kc:return i*e/s.components*s.byteLength;case Zs:return i*e*2/s.components*s.byteLength;case Jc:return i*e*2/s.components*s.byteLength;case Tf:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case jc:return i*e*4/s.components*s.byteLength;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eu:case nu:return Math.max(i,16)*Math.max(e,8)/4;case Qc:case tu:return Math.max(i,8)*Math.max(e,8)/2;case iu:case su:case ou:case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ru:case Ka:case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case du:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Su:case Eu:case Tu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wu:case Au:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ja:case Ru:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iv(i){switch(i){case Zn:case _f:return{byteLength:1,components:1};case Mo:case bf:case Tn:return{byteLength:2,components:1};case Zc:case $c:return{byteLength:2,components:4};case $i:case Yc:case Ci:return{byteLength:4,components:1};case Mf:case Sf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $p(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ov(i){let e=new WeakMap;function t(l,c){let u=l.array,h=l.usage,g=u.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,u,h),l.onUploadCallback();let d;if(u instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=i.SHORT;else if(u instanceof Uint32Array)d=i.UNSIGNED_INT;else if(u instanceof Int32Array)d=i.INT;else if(u instanceof Int8Array)d=i.BYTE;else if(u instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,c,u){let h=c.array,g=c.updateRanges;if(i.bindBuffer(u,l),g.length===0)i.bufferSubData(u,0,h);else{g.sort((d,_)=>d.start-_.start);let m=0;for(let d=1;d<g.length;d++){let _=g[m],E=g[d];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++m,g[m]=E)}g.length=m+1;for(let d=0,_=g.length;d<_;d++){let E=g[d];i.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:s,remove:r,update:o}}var zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kv=`#ifdef USE_ALPHAHASH
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
#endif`,Hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yv=`#ifdef USE_BATCHING
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
#endif`,Zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Qv=`#ifdef USE_BUMPMAP
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lx=`#define PI 3.141592653589793
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
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
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
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
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
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
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
#endif`,Bx=`uniform sampler2D dfgLUT;
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
}`,Ox=`
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$x=`#if defined( USE_POINTS_UV )
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
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t2=`#ifdef USE_MORPHTARGETS
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
#endif`,n2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l2=`#ifdef USE_NORMALMAP
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
#endif`,c2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E2=`float getShadowMask() {
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
}`,T2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w2=`#ifdef USE_SKINNING
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
#endif`,A2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R2=`#ifdef USE_SKINNING
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
#endif`,C2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D2=`#ifdef USE_TRANSMISSION
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
#endif`,N2=`#ifdef USE_TRANSMISSION
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
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k2=`uniform sampler2D t2D;
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
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X2=`#include <common>
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
}`,q2=`#if DEPTH_PACKING == 3200
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
}`,Y2=`#define DISTANCE
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
}`,Z2=`#define DISTANCE
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
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J2=`uniform float scale;
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
}`,j2=`uniform vec3 diffuse;
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
}`,Q2=`#include <common>
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#define LAMBERT
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
}`,ny=`#define LAMBERT
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
}`,iy=`#define MATCAP
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
}`,sy=`#define MATCAP
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
}`,ry=`#define NORMAL
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
}`,oy=`#define NORMAL
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
}`,ay=`#define PHONG
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
}`,ly=`#define PHONG
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
}`,cy=`#define STANDARD
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
}`,uy=`#define STANDARD
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
}`,hy=`#define TOON
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
}`,fy=`#define TOON
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
}`,dy=`uniform float size;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 color;
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
}`,vy=`uniform float rotation;
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
}`,xy=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:zv,alphahash_pars_fragment:kv,alphamap_fragment:Hv,alphamap_pars_fragment:Vv,alphatest_fragment:Gv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:qv,batching_pars_vertex:Yv,batching_vertex:Zv,begin_vertex:$v,beginnormal_vertex:Kv,bsdfs:Jv,iridescence_fragment:jv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:ex,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:sx,color_pars_fragment:rx,color_pars_vertex:ox,color_vertex:ax,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:ux,displacementmap_pars_vertex:hx,displacementmap_vertex:fx,emissivemap_fragment:dx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:vx,envmap_common_pars_fragment:xx,envmap_pars_fragment:yx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Ix,envmap_vertex:bx,fog_vertex:Mx,fog_pars_vertex:Sx,fog_fragment:Ex,fog_pars_fragment:Tx,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Cx,lights_pars_begin:Px,lights_toon_fragment:Lx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Nx,lights_phong_pars_fragment:Ux,lights_physical_fragment:Fx,lights_physical_pars_fragment:Bx,lights_fragment_begin:Ox,lights_fragment_maps:zx,lights_fragment_end:kx,lightprobes_pars_fragment:Hx,logdepthbuf_fragment:Vx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:qx,map_pars_fragment:Yx,map_particle_fragment:Zx,map_particle_pars_fragment:$x,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:Jx,morphinstance_vertex:jx,morphcolor_vertex:Qx,morphnormal_vertex:e2,morphtarget_pars_vertex:t2,morphtarget_vertex:n2,normal_fragment_begin:i2,normal_fragment_maps:s2,normal_pars_fragment:r2,normal_pars_vertex:o2,normal_vertex:a2,normalmap_pars_fragment:l2,clearcoat_normal_fragment_begin:c2,clearcoat_normal_fragment_maps:u2,clearcoat_pars_fragment:h2,iridescence_pars_fragment:f2,opaque_fragment:d2,packing:p2,premultiplied_alpha_fragment:m2,project_vertex:g2,dithering_fragment:v2,dithering_pars_fragment:x2,roughnessmap_fragment:y2,roughnessmap_pars_fragment:_2,shadowmap_pars_fragment:b2,shadowmap_pars_vertex:M2,shadowmap_vertex:S2,shadowmask_pars_fragment:E2,skinbase_vertex:T2,skinning_pars_vertex:w2,skinning_vertex:A2,skinnormal_vertex:R2,specularmap_fragment:C2,specularmap_pars_fragment:P2,tonemapping_fragment:I2,tonemapping_pars_fragment:L2,transmission_fragment:D2,transmission_pars_fragment:N2,uv_pars_fragment:U2,uv_pars_vertex:F2,uv_vertex:B2,worldpos_vertex:O2,background_vert:z2,background_frag:k2,backgroundCube_vert:H2,backgroundCube_frag:V2,cube_vert:G2,cube_frag:W2,depth_vert:X2,depth_frag:q2,distance_vert:Y2,distance_frag:Z2,equirect_vert:$2,equirect_frag:K2,linedashed_vert:J2,linedashed_frag:j2,meshbasic_vert:Q2,meshbasic_frag:ey,meshlambert_vert:ty,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:ly,meshphysical_vert:cy,meshphysical_frag:uy,meshtoon_vert:hy,meshtoon_frag:fy,points_vert:dy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:vy,sprite_frag:xy},Ge={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},us={basic:{uniforms:Kn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Kn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Kn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Kn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Kn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new xe(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Kn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Kn([Ge.points,Ge.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Kn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Kn([Ge.common,Ge.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Kn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Kn([Ge.sprite,Ge.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Kn([Ge.common,Ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Kn([Ge.lights,Ge.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};us.physical={uniforms:Kn([us.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Lu={r:0,b:0,g:0},yy=new Qe,Kp=new gt;Kp.set(-1,0,0,0,1,0,0,0,1);function _y(i,e,t,n,s,r){let o=new xe(0),l=s===!0?0:1,c,u,h=null,g=0,m=null;function d(x){let p=x.isScene===!0?x.background:null;if(p&&p.isTexture){let f=x.backgroundBlurriness>0;p=e.get(p,f)}return p}function _(x){let p=!1,f=d(x);f===null?b(o,l):f&&f.isColor&&(b(f,1),p=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||p)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(x,p){let f=d(p);f&&(f.isCubeTexture||f.mapping===Wa)?(u===void 0&&(u=new ut(new Kt(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:Sr(us.backgroundCube.uniforms),vertexShader:us.backgroundCube.vertexShader,fragmentShader:us.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(v,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=f,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yy.makeRotationFromEuler(p.backgroundRotation)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Kp),u.material.toneMapped=Ct.getTransfer(f.colorSpace)!==kt,(h!==f||g!==f.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=f,g=f.version,m=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):f&&f.isTexture&&(c===void 0&&(c=new ut(new Qt(2,2),new ht({name:"BackgroundMaterial",uniforms:Sr(us.background.uniforms),vertexShader:us.background.vertexShader,fragmentShader:us.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=f,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(f.colorSpace)!==kt,f.matrixAutoUpdate===!0&&f.updateMatrix(),c.material.uniforms.uvTransform.value.copy(f.matrix),(h!==f||g!==f.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=f,g=f.version,m=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function b(x,p){x.getRGB(Lu,Cf(i)),t.buffers.color.setClear(Lu.r,Lu.g,Lu.b,p,r)}function a(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,p=1){o.set(x),l=p,b(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,b(o,l)},render:_,addToRenderList:E,dispose:a}}function by(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function l(A,R,C,P,L){let D=!1,B=g(A,P,C,R);r!==B&&(r=B,u(r.object)),D=d(A,P,C,L),D&&_(A,P,C,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,f(A,R,C,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function g(A,R,C,P){let L=P.wireframe===!0,D=n[R.id];D===void 0&&(D={},n[R.id]=D);let B=A.isInstancedMesh===!0?A.id:0,V=D[B];V===void 0&&(V={},D[B]=V);let O=V[C.id];O===void 0&&(O={},V[C.id]=O);let k=O[L];return k===void 0&&(k=m(c()),O[L]=k),k}function m(A){let R=[],C=[],P=[];for(let L=0;L<t;L++)R[L]=0,C[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:C,attributeDivisors:P,object:A,attributes:{},index:null}}function d(A,R,C,P){let L=r.attributes,D=R.attributes,B=0,V=C.getAttributes();for(let O in V)if(V[O].location>=0){let z=L[O],W=D[O];if(W===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(W=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(W=A.instanceColor)),z===void 0||z.attribute!==W||W&&z.data!==W.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function _(A,R,C,P){let L={},D=R.attributes,B=0,V=C.getAttributes();for(let O in V)if(V[O].location>=0){let z=D[O];z===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(z=A.instanceColor));let W={};W.attribute=z,z&&z.data&&(W.data=z.data),L[O]=W,B++}r.attributes=L,r.attributesNum=B,r.index=P}function E(){let A=r.newAttributes;for(let R=0,C=A.length;R<C;R++)A[R]=0}function b(A){a(A,0)}function a(A,R){let C=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;C[A]=1,P[A]===0&&(i.enableVertexAttribArray(A),P[A]=1),L[A]!==R&&(i.vertexAttribDivisor(A,R),L[A]=R)}function x(){let A=r.newAttributes,R=r.enabledAttributes;for(let C=0,P=R.length;C<P;C++)R[C]!==A[C]&&(i.disableVertexAttribArray(C),R[C]=0)}function p(A,R,C,P,L,D,B){B===!0?i.vertexAttribIPointer(A,R,C,L,D):i.vertexAttribPointer(A,R,C,P,L,D)}function f(A,R,C,P){E();let L=P.attributes,D=C.getAttributes(),B=R.defaultAttributeValues;for(let V in D){let O=D[V];if(O.location>=0){let k=L[V];if(k===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),k!==void 0){let z=k.normalized,W=k.itemSize,ce=e.get(k);if(ce===void 0)continue;let Ne=ce.buffer,Oe=ce.type,Ee=ce.bytesPerElement,$=Oe===i.INT||Oe===i.UNSIGNED_INT||k.gpuType===Yc;if(k.isInterleavedBufferAttribute){let J=k.data,le=J.stride,Ce=k.offset;if(J.isInstancedInterleavedBuffer){for(let Se=0;Se<O.locationSize;Se++)a(O.location+Se,J.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<O.locationSize;Se++)b(O.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Se=0;Se<O.locationSize;Se++)p(O.location+Se,W/O.locationSize,Oe,z,le*Ee,(Ce+W/O.locationSize*Se)*Ee,$)}else{if(k.isInstancedBufferAttribute){for(let J=0;J<O.locationSize;J++)a(O.location+J,k.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let J=0;J<O.locationSize;J++)b(O.location+J);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let J=0;J<O.locationSize;J++)p(O.location+J,W/O.locationSize,Oe,z,W*Ee,W/O.locationSize*J*Ee,$)}}else if(B!==void 0){let z=B[V];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(O.location,z);break;case 3:i.vertexAttrib3fv(O.location,z);break;case 4:i.vertexAttrib4fv(O.location,z);break;default:i.vertexAttrib1fv(O.location,z)}}}}x()}function v(){S();for(let A in n){let R=n[A];for(let C in R){let P=R[C];for(let L in P){let D=P[L];for(let B in D)h(D[B].object),delete D[B];delete P[L]}}delete n[A]}}function M(A){if(n[A.id]===void 0)return;let R=n[A.id];for(let C in R){let P=R[C];for(let L in P){let D=P[L];for(let B in D)h(D[B].object),delete D[B];delete P[L]}}delete n[A.id]}function w(A){for(let R in n){let C=n[R];for(let P in C){let L=C[P];if(L[A.id]===void 0)continue;let D=L[A.id];for(let B in D)h(D[B].object),delete D[B];delete L[A.id]}}}function y(A){for(let R in n){let C=n[R],P=A.isInstancedMesh===!0?A.id:0,L=C[P];if(L!==void 0){for(let D in L){let B=L[D];for(let V in B)h(B[V].object),delete B[V];delete L[D]}delete C[P],Object.keys(C).length===0&&delete n[R]}}}function S(){T(),o=!0,r!==s&&(r=s,u(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:S,resetDefaultState:T,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:b,disableUnusedAttributes:x}}function My(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function l(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let d=0;d<h;d++)m+=u[d];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function Sy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==$n&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){let y=w===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zn&&w!==Ci&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(ct("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),a=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),f=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:d,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:b,maxAttributes:a,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:f,maxSamples:v,samples:M}}function Ey(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Gi,l=new gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){let d=g.length!==0||m||n!==0||s;return s=m,n=g.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,m){t=h(g,m,0)},this.setState=function(g,m,d){let _=g.clippingPlanes,E=g.clipIntersection,b=g.clipShadows,a=i.get(g);if(!s||_===null||_.length===0||r&&!b)r?h(null):u();else{let x=r?0:n,p=x*4,f=a.clippingState||null;c.value=f,f=h(_,m,p,d);for(let v=0;v!==p;++v)f[v]=t[v];a.clippingState=f,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(g,m,d,_){let E=g!==null?g.length:0,b=null;if(E!==0){if(b=c.value,_!==!0||b===null){let a=d+E*4,x=m.matrixWorldInverse;l.getNormalMatrix(x),(b===null||b.length<a)&&(b=new Float32Array(a));for(let p=0,f=d;p!==E;++p,f+=4)o.copy(g[p]).applyMatrix4(x,l),o.normal.toArray(b,f),b[f+3]=o.constant}c.value=b,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,b}}var wo=4,Ty=6,wy=20,Ay=256,ja=new Ws,Rp=new xe,Of=null,zf=0,kf=0,Hf=!1,Ry=new H,Tr=new H,Nu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=Ry}=r;Of=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Of,zf,kf),this._renderer.xr.enabled=Hf,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Of=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Tn,format:$n,colorSpace:da,depthBuffer:!1},s=Cp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cy(r)),this._blurMaterial=Iy(r,e,t),this._ggxMaterial=Py(r,e,t)}return s}_compileMaterial(e){let t=new ut(new vt,e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,s,r){let c=new kn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,d=g.toneMapping;g.getClearColor(Rp),g.toneMapping=Zi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new Kt,new gn({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,b=E.material,a=!1,x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,a=!0):(b.color.copy(Rp),a=!0);for(let p=0;p<6;p++){let f=p%3;f===0?(c.up.set(0,u[p],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[p],r.y,r.z)):f===1?(c.up.set(0,0,u[p]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[p],r.z)):(c.up.set(0,u[p],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[p]));let v=this._cubeSize;To(s,f*v,p>2?v:0,v,v),g.setRenderTarget(s),a&&g.render(E,c),g.render(e,c)}g.toneMapping=d,g.autoClear=m,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Xs||e.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;To(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ja)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),g=Math.sqrt(u*u-h*h),m=u*1.25,d=g*m,{_lodMax:_}=this,E=this._sizeLods[n],b=3*E*(n>_-wo?n-_+wo:0),a=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=_-t,To(r,b,a,3*E,2*E),s.setRenderTarget(r),s.render(l,ja),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,To(e,b,a,3*E,2*E),s.setRenderTarget(e),s.render(l,ja)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],g=3*h*(s>this._lodMax-wo?s-this._lodMax+wo:0),m=4*(this._cubeSize-h);To(t,g,m,3*h,2*h),o.setRenderTarget(t),o.render(c,ja)}};function Cy(i){let e=[],t=[],n=i,s=i-wo+1+Ty;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],g=6,m=6,d=3,_=new Float32Array(d*m*g),E=new Float32Array(d*m*g);for(let a=0;a<g;a++){let x=a%3*2/3-1,p=a>2?0:-1,f=[x,p,0,x+2/3,p,0,x+2/3,p+1,0,x,p,0,x+2/3,p+1,0,x,p+1,0];_.set(f,d*m*a);for(let v=0;v<m;v++){let M=h[v*2]*2-1,w=h[v*2+1]*2-1;a===0?Tr.set(1,w,M):a===1?Tr.set(-M,1,-w):a===2?Tr.set(-M,w,1):a===3?Tr.set(-1,w,-M):a===4?Tr.set(-M,-1,w):Tr.set(M,w,-1),Tr.toArray(E,(a*m+v)*d)}}let b=new vt;b.setAttribute("position",new Mt(_,d)),b.setAttribute("outputDirection",new Mt(E,d)),t.push(new ut(b,null)),n>wo&&n--}return{lodMeshes:t,sizeLods:e}}function Cp(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Py(i,e,t){return new ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ay,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Iy(i,e,t){return new ht({name:"SphericalGaussianBlur",defines:{SAMPLES:wy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Pp(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ip(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Bu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Uu=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:ni});r.uniforms.tEquirect.value=t;let o=new ut(s,r),l=t.minFilter;return t.minFilter===An&&(t.minFilter=Ut),new Hc(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Ly(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,d=!1){return m==null?null:d?o(m):r(m)}function r(m){if(m&&m.isTexture){let d=m.mapping;if(d===Wc||d===Xc)if(e.has(m)){let _=e.get(m).texture;return l(_,m.mapping)}else{let _=m.image;if(_&&_.height>0){let E=new Uu(_.height);return E.fromEquirectangularTexture(i,m),e.set(m,E),m.addEventListener("dispose",u),l(E.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let d=m.mapping,_=d===Wc||d===Xc,E=d===Xs||d===Mr;if(_||E){let b=t.get(m),a=b!==void 0?b.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==a)return n===null&&(n=new Nu(i)),b=_?n.fromEquirectangular(m,b):n.fromCubemap(m,b),b.texture.pmremVersion=m.pmremVersion,t.set(m,b),b.texture;if(b!==void 0)return b.texture;{let x=m.image;return _&&x&&x.height>0||E&&x&&c(x)?(n===null&&(n=new Nu(i)),b=_?n.fromEquirectangular(m):n.fromCubemap(m),b.texture.pmremVersion=m.pmremVersion,t.set(m,b),m.addEventListener("dispose",h),b.texture):null}}}return m}function l(m,d){return d===Wc?m.mapping=Xs:d===Xc&&(m.mapping=Mr),m}function c(m){let d=0,_=6;for(let E=0;E<_;E++)m[E]!==void 0&&d++;return d===_}function u(m){let d=m.target;d.removeEventListener("dispose",u);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function h(m){let d=m.target;d.removeEventListener("dispose",h);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Dy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&mr("WebGLRenderer: "+n+" extension not supported."),s}}}function Ny(i,e,t,n){let s={},r=new WeakMap;function o(g){let m=g.target;m.index!==null&&e.remove(m.index);for(let _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete s[m.id];let d=r.get(m);d&&(e.remove(d),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(g,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function c(g){let m=g.attributes;for(let d in m)e.update(m[d],i.ARRAY_BUFFER)}function u(g){let m=[],d=g.index,_=g.attributes.position,E=0;if(_===void 0)return;if(d!==null){let x=d.array;E=d.version;for(let p=0,f=x.length;p<f;p+=3){let v=x[p+0],M=x[p+1],w=x[p+2];m.push(v,M,M,w,w,v)}}else{let x=_.array;E=_.version;for(let p=0,f=x.length/3-1;p<f;p+=3){let v=p+0,M=p+1,w=p+2;m.push(v,M,M,w,w,v)}}let b=new(_.count>=65535?_a:ya)(m,1);b.version=E;let a=r.get(g);a&&e.remove(a),r.set(g,b)}function h(g){let m=r.get(g);if(m){let d=g.index;d!==null&&m.version<d.version&&u(g)}else u(g);return r.get(g)}return{get:l,update:c,getWireframeAttribute:h}}function Uy(i,e,t){let n;function s(g){n=g}let r,o;function l(g){r=g.type,o=g.bytesPerElement}function c(g,m){i.drawElements(n,m,r,g*o),t.update(m,n,1)}function u(g,m,d){d!==0&&(i.drawElementsInstanced(n,m,r,g*o,d),t.update(m,n,d))}function h(g,m,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,g,0,d);let E=0;for(let b=0;b<d;b++)E+=m[b];t.update(E,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function Fy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function By(i,e,t){let n=new WeakMap,s=new pt;function r(o,l,c){let u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=h!==void 0?h.length:0,m=n.get(l);if(m===void 0||m.count!==g){let S=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();let d=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,b=l.morphAttributes.position||[],a=l.morphAttributes.normal||[],x=l.morphAttributes.color||[],p=0;d===!0&&(p=1),_===!0&&(p=2),E===!0&&(p=3);let f=l.attributes.position.count*p,v=1;f>e.maxTextureSize&&(v=Math.ceil(f/e.maxTextureSize),f=e.maxTextureSize);let M=new Float32Array(f*v*4*g),w=new ga(M,f,v,g);w.type=Ci,w.needsUpdate=!0;let y=p*4;for(let T=0;T<g;T++){let A=b[T],R=a[T],C=x[T],P=f*v*4*T;for(let L=0;L<A.count;L++){let D=L*y;d===!0&&(s.fromBufferAttribute(A,L),M[P+D+0]=s.x,M[P+D+1]=s.y,M[P+D+2]=s.z,M[P+D+3]=0),_===!0&&(s.fromBufferAttribute(R,L),M[P+D+4]=s.x,M[P+D+5]=s.y,M[P+D+6]=s.z,M[P+D+7]=0),E===!0&&(s.fromBufferAttribute(C,L),M[P+D+8]=s.x,M[P+D+9]=s.y,M[P+D+10]=s.z,M[P+D+11]=C.itemSize===4?s.w:1)}}m={count:g,texture:w,size:new Pe(f,v)},n.set(l,m),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let E=0;E<u.length;E++)d+=u[E];let _=l.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Oy(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,g=u.geometry,m=e.get(u,g);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let d=u.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return m}function l(){r=new WeakMap}function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var zy={[df]:"LINEAR_TONE_MAPPING",[pf]:"REINHARD_TONE_MAPPING",[mf]:"CINEON_TONE_MAPPING",[gf]:"ACES_FILMIC_TONE_MAPPING",[xf]:"AGX_TONE_MAPPING",[Ga]:"NEUTRAL_TONE_MAPPING",[vf]:"CUSTOM_TONE_MAPPING"};function ky(i,e,t,n,s,r){let o=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,u=new vt;u.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let h=new Cc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new ut(u,h),m=new Ws(-1,1,1,-1,0,1),d=null,_=null,E=!1,b,a=null,x=[],p=!1;this.setSize=function(f,v){o.setSize(f,v),l!==null&&l.setSize(f,v),c!==null&&c.setSize(f,v);for(let M=0;M<x.length;M++){let w=x[M];w.setSize&&w.setSize(f,v)}},this.setEffects=function(f){x=f,p=x.length>0&&x[0].isRenderPass===!0;let v=o.width,M=o.height;x.length>0&&l===null&&(l=new Wt(v,M,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new Wt(v,M,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<x.length;w++){let y=x[w];y.setSize&&y.setSize(v,M)}},this.begin=function(f,v){if(E||f.toneMapping===Zi&&x.length===0)return!1;if(a=v,v!==null){let M=v.width,w=v.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return p===!1&&f.setRenderTarget(o),b=f.toneMapping,f.toneMapping=Zi,!0},this.hasRenderPass=function(){return p},this.end=function(f,v){f.toneMapping=b,E=!0;let M=o,w=l;for(let y=0;y<x.length;y++){let S=x[y];S.enabled!==!1&&(S.render(f,w,M,v),S.needsSwap!==!1&&(M=w,w=w===l?c:l))}if(d!==f.outputColorSpace||_!==f.toneMapping){d=f.outputColorSpace,_=f.toneMapping,h.defines={},Ct.getTransfer(d)===kt&&(h.defines.SRGB_TRANSFER="");let y=zy[_];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,f.setRenderTarget(a),f.render(g,m),a=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var Jp=new qn,Wf=new ks(1,1),jp=new ga,Qp=new vc,em=new Sa,Lp=[],Dp=[],Np=new Float32Array(16),Up=new Float32Array(9),Fp=new Float32Array(4);function Ro(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Lp[s];if(r===void 0&&(r=new Float32Array(s),Lp[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ou(i,e){let t=Dp[e];t===void 0&&(t=new Int32Array(e),Dp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;i.uniform2fv(this.addr,e),Cn(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;i.uniform3fv(this.addr,e),Cn(t,e)}}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;i.uniform4fv(this.addr,e),Cn(t,e)}}function Xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;Fp.set(n),i.uniformMatrix2fv(this.addr,!1,Fp),Cn(t,n)}}function qy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;Up.set(n),i.uniformMatrix3fv(this.addr,!1,Up),Cn(t,n)}}function Yy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,n))return;Np.set(n),i.uniformMatrix4fv(this.addr,!1,Np),Cn(t,n)}}function Zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;i.uniform2iv(this.addr,e),Cn(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;i.uniform3iv(this.addr,e),Cn(t,e)}}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;i.uniform4iv(this.addr,e),Cn(t,e)}}function jy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;i.uniform2uiv(this.addr,e),Cn(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;i.uniform3uiv(this.addr,e),Cn(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;i.uniform4uiv(this.addr,e),Cn(t,e)}}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wf.compareFunction=t.isReversedDepthBuffer()?Iu:Pu,r=Wf):r=Jp,t.setTexture2D(e||r,s)}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qp,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||em,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jp,s)}function o_(i){switch(i){case 5126:return Hy;case 35664:return Vy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return Zy;case 35667:case 35671:return $y;case 35668:case 35672:return Ky;case 35669:case 35673:return Jy;case 5125:return jy;case 36294:return Qy;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function a_(i,e){i.uniform1fv(this.addr,e)}function l_(i,e){let t=Ro(e,this.size,2);i.uniform2fv(this.addr,t)}function c_(i,e){let t=Ro(e,this.size,3);i.uniform3fv(this.addr,t)}function u_(i,e){let t=Ro(e,this.size,4);i.uniform4fv(this.addr,t)}function h_(i,e){let t=Ro(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f_(i,e){let t=Ro(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d_(i,e){let t=Ro(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p_(i,e){i.uniform1iv(this.addr,e)}function m_(i,e){i.uniform2iv(this.addr,e)}function g_(i,e){i.uniform3iv(this.addr,e)}function v_(i,e){i.uniform4iv(this.addr,e)}function x_(i,e){i.uniform1uiv(this.addr,e)}function y_(i,e){i.uniform2uiv(this.addr,e)}function __(i,e){i.uniform3uiv(this.addr,e)}function b_(i,e){i.uniform4uiv(this.addr,e)}function M_(i,e,t){let n=this.cache,s=e.length,r=Ou(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wf:o=Jp;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function S_(i,e,t){let n=this.cache,s=e.length,r=Ou(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qp,r[o])}function E_(i,e,t){let n=this.cache,s=e.length,r=Ou(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||em,r[o])}function T_(i,e,t){let n=this.cache,s=e.length,r=Ou(t,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Cn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jp,r[o])}function w_(i){switch(i){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return u_;case 35674:return h_;case 35675:return f_;case 35676:return d_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return y_;case 36295:return __;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}var Xf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}},qf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w_(t.type)}},Yf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},Vf=/(\w+)(\])?(\[|\.)?/g;function Bp(i,e){i.seq.push(e),i.map[e.id]=e}function A_(i,e,t){let n=i.name,s=n.length;for(Vf.lastIndex=0;;){let r=Vf.exec(n),o=Vf.lastIndex,l=r[1],c=r[2]==="]",u=r[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===s){Bp(t,u===void 0?new Xf(l,i,e):new qf(l,i,e));break}else{let g=t.map[l];g===void 0&&(g=new Yf(l),Bp(t,g)),t=g}}}var Ao=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);A_(l,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Op(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var R_=37297,C_=0;function P_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var zp=new gt;function I_(i){Ct._getMatrix(zp,Ct.workingColorSpace,i);let e=`mat3( ${zp.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case pa:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+P_(i.getShaderSource(e),l)}else return r}function L_(i,e){let t=I_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var D_={[df]:"Linear",[pf]:"Reinhard",[mf]:"Cineon",[gf]:"ACESFilmic",[xf]:"AgX",[Ga]:"Neutral",[vf]:"Custom"};function N_(i,e){let t=D_[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Du=new H;function U_(){Ct.getLuminanceCoefficients(Du);let i=Du.x.toFixed(4),e=Du.y.toFixed(4),t=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function B_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function el(i){return i!==""}function Hp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(i){return i.replace(z_,H_)}var k_=new Map;function H_(i,e){let t=ft[e];if(t===void 0){let n=k_.get(e);if(n!==void 0)t=ft[n],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zf(t)}var V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(i){return i.replace(V_,G_)}function G_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var W_={[_r]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function X_(i){return W_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var q_={[Xs]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};function Y_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":q_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Z_={[Mr]:"ENVMAP_MODE_REFRACTION"};function $_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Z_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var K_={[ff]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function J_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":K_[i.combine]||"ENVMAP_BLENDING_NONE"}function j_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,c=X_(t),u=Y_(t),h=$_(t),g=J_(t),m=j_(t),d=F_(t),_=B_(r),E=s.createProgram(),b,a,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(el).join(`
`),b.length>0&&(b+=`
`),a=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(el).join(`
`),a.length>0&&(a+=`
`)):(b=[Wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),a=[Wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?ft.tonemapping_pars_fragment:"",t.toneMapping!==Zi?N_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,L_("linearToOutputTexel",t.outputColorSpace),U_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),o=Zf(o),o=Hp(o,t),o=Vp(o,t),l=Zf(l),l=Hp(l,t),l=Vp(l,t),o=Gp(o),l=Gp(l),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,a=["#define varying in",t.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+a);let p=x+b+o,f=x+a+l,v=Op(s,s.VERTEX_SHADER,p),M=Op(s,s.FRAGMENT_SHADER,f);s.attachShader(E,v),s.attachShader(E,M),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(A){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(E)||"",C=s.getShaderInfoLog(v)||"",P=s.getShaderInfoLog(M)||"",L=R.trim(),D=C.trim(),B=P.trim(),V=!0,O=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,v,M);else{let k=kp(s,v,"vertex"),z=kp(s,M,"fragment");dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+k+`
`+z)}else L!==""?ct("WebGLProgram: Program Info Log:",L):(D===""||B==="")&&(O=!1);O&&(A.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:b},fragmentShader:{log:B,prefix:a}})}s.deleteShader(v),s.deleteShader(M),y=new Ao(s,E),S=O_(s,E)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(E,R_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=v,this.fragmentShader=M,this}var eb=0,$f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kf(e),t.set(e,n)),n}},Kf=class{constructor(e){this.id=eb++,this.code=e,this.usedTimes=0}};function tb(i){return i===Zs||i===Ka||i===Ja}function nb(i,e,t,n,s,r){let o=new va,l=new $f,c=new Set,u=[],h=new Map,g=n.logarithmicDepthBuffer,m=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function E(y,S,T,A,R,C){let P=A.fog,L=R.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||D,B),O=V&&V.mapping===Wa?V.image.height:null,k=d[y.type];y.precision!==null&&(m=n.getMaxPrecision(y.precision),m!==y.precision&&ct("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,W=z!==void 0?z.length:0,ce=0;L.morphAttributes.position!==void 0&&(ce=1),L.morphAttributes.normal!==void 0&&(ce=2),L.morphAttributes.color!==void 0&&(ce=3);let Ne,Oe,Ee,$;if(k){let Vt=us[k];Ne=Vt.vertexShader,Oe=Vt.fragmentShader}else{Ne=y.vertexShader,Oe=y.fragmentShader;let Vt=l.getVertexShaderStage(y),Ke=l.getFragmentShaderStage(y);l.update(y,Vt,Ke),Ee=Vt.id,$=Ke.id}let J=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Ce=R.isInstancedMesh===!0,Se=R.isBatchedMesh===!0,ke=!!y.map,we=!!y.matcap,Je=!!V,qe=!!y.aoMap,Fe=!!y.lightMap,ne=!!y.bumpMap&&y.wireframe===!1,be=!!y.normalMap,j=!!y.displacementMap,oe=!!y.emissiveMap,ee=!!y.metalnessMap,he=!!y.roughnessMap,F=y.anisotropy>0,ve=y.clearcoat>0,te=y.dispersion>0,N=y.retroreflectivity>0,I=y.iridescence>0,G=y.sheen>0,Y=y.transmission>0,Q=F&&!!y.anisotropyMap,ue=ve&&!!y.clearcoatMap,me=ve&&!!y.clearcoatNormalMap,ae=ve&&!!y.clearcoatRoughnessMap,de=I&&!!y.iridescenceMap,Ie=I&&!!y.iridescenceThicknessMap,Ye=G&&!!y.sheenColorMap,Te=G&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Be=!!y.specularColorMap,et=!!y.specularIntensityMap,at=Y&&!!y.transmissionMap,Z=Y&&!!y.thicknessMap,Ae=!!y.gradientMap,pe=!!y.alphaMap,De=y.alphaTest>0,X=!!y.alphaHash,ye=!!y.extensions,st=Zi;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(st=i.toneMapping);let tt={shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:Oe,defines:y.defines,customVertexShaderID:Ee,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Se,batchingColor:Se&&R._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&R.instanceColor!==null,instancingMorph:Ce&&R.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:we,envMap:Je,envMapMode:Je&&V.mapping,envMapCubeUVHeight:O,aoMap:qe,lightMap:Fe,bumpMap:ne,normalMap:be,displacementMap:j,emissiveMap:oe,normalMapObjectSpace:be&&y.normalMapType===lp,normalMapTangentSpace:be&&y.normalMapType===Cu,packedNormalMap:be&&y.normalMapType===Cu&&tb(y.normalMap.format),metalnessMap:ee,roughnessMap:he,anisotropy:F,anisotropyMap:Q,clearcoat:ve,clearcoatMap:ue,clearcoatNormalMap:me,clearcoatRoughnessMap:ae,dispersion:te,retroreflection:N,iridescence:I,iridescenceMap:de,iridescenceThicknessMap:Ie,sheen:G,sheenColorMap:Ye,sheenRoughnessMap:Te,specularMap:Le,specularColorMap:Be,specularIntensityMap:et,transmission:Y,transmissionMap:at,thicknessMap:Z,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===bo&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:X,combine:y.combine,mapUv:ke&&_(y.map.channel),aoMapUv:qe&&_(y.aoMap.channel),lightMapUv:Fe&&_(y.lightMap.channel),bumpMapUv:ne&&_(y.bumpMap.channel),normalMapUv:be&&_(y.normalMap.channel),displacementMapUv:j&&_(y.displacementMap.channel),emissiveMapUv:oe&&_(y.emissiveMap.channel),metalnessMapUv:ee&&_(y.metalnessMap.channel),roughnessMapUv:he&&_(y.roughnessMap.channel),anisotropyMapUv:Q&&_(y.anisotropyMap.channel),clearcoatMapUv:ue&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(y.sheenRoughnessMap.channel),specularMapUv:Le&&_(y.specularMap.channel),specularColorMapUv:Be&&_(y.specularColorMap.channel),specularIntensityMapUv:et&&_(y.specularIntensityMap.channel),transmissionMapUv:at&&_(y.transmissionMap.channel),thicknessMapUv:Z&&_(y.thicknessMap.channel),alphaMapUv:pe&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(be||F),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(ke||pe),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&be===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:le,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ce,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&Ct.getTransfer(y.map.colorSpace)===kt,decodeVideoTextureEmissive:oe&&y.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(y.emissiveMap.colorSpace)===kt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===Hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function b(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let T in y.defines)S.push(T),S.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(a(S,y),x(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function a(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function p(y){let S=d[y.type],T;if(S){let A=us[S];T=Er.clone(A.uniforms)}else T=y.uniforms;return T}function f(y,S){let T=h.get(S);return T!==void 0?++T.usedTimes:(T=new Q_(i,S,y,s),u.push(T),h.set(S,T)),T}function v(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){l.remove(y)}function w(){l.dispose()}return{getParameters:E,getProgramCacheKey:b,getUniforms:p,acquireProgram:f,releaseProgram:v,releaseShaderCache:M,programs:u,dispose:w}}function ib(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,c){i.get(o)[l]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function sb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m){let d=0;return m.isInstancedMesh&&(d+=2),m.isSkinnedMesh&&(d+=1),d}function l(m,d,_,E,b,a){let x=i[e];return x===void 0?(x={id:m.id,object:m,geometry:d,material:_,materialVariant:o(m),groupOrder:E,renderOrder:m.renderOrder,z:b,group:a},i[e]=x):(x.id=m.id,x.object=m,x.geometry=d,x.material=_,x.materialVariant=o(m),x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=b,x.group=a),e++,x}function c(m,d,_,E,b,a,x){x.reversedDepth===!0&&(b=-b);let p=l(m,d,_,E,b,a);_.transmission>0?n.push(p):_.transparent===!0?s.push(p):t.push(p)}function u(m,d,_,E,b,a){let x=l(m,d,_,E,b,a);_.transmission>0?n.unshift(x):_.transparent===!0?s.unshift(x):t.unshift(x)}function h(m,d){t.length>1&&t.sort(m||sb),n.length>1&&n.sort(d||Xp),s.length>1&&s.sort(d||Xp)}function g(){for(let m=e,d=i.length;m<d;m++){let _=i[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:g,sort:h}}function rb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new qp,i.set(n,[o])):s>=r.length?(o=new qp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ob(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new xe};break;case"SpotLight":t={position:new H,direction:new H,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function ab(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var lb=0;function cb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ub(i){let e=new ob,t=ab(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);let s=new H,r=new Qe,o=new Qe;function l(u){let h=0,g=0,m=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let d=0,_=0,E=0,b=0,a=0,x=0,p=0,f=0,v=0,M=0,w=0,y=0,S=0,T=0;u.sort(cb);for(let R=0,C=u.length;R<C;R++){let P=u[R],L=P.color,D=P.intensity,B=P.distance,V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zs?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=L.r*D,g+=L.g*D,m+=L.b*D;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],D);T++}else if(P.isSunLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,z=t.get(P);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[_]=z,n.sunShadowMap[_]=V;let W=k.getViewportCount();for(let ce=0;ce<W;ce++)n.sunShadowMatrix[E+ce]=k.getMatrix(ce),n.sunShadowCascade[E+ce]=k._cascadeData[ce];E+=W,_++}n.sun[d]=O,d++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,z=t.get(P);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.directionalShadow[b]=z,n.directionalShadowMap[b]=V,n.directionalShadowMatrix[b]=P.shadow.matrix,v++}n.directional[b]=O,b++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(L).multiplyScalar(D),O.distance=B,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[x]=O;let k=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,k.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[x]=k.matrix,P.castShadow){let z=t.get(P);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=V,w++}x++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(L).multiplyScalar(D),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=O,p++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let k=P.shadow,z=t.get(P);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,n.pointShadow[a]=z,n.pointShadowMap[a]=V,n.pointShadowMatrix[a]=P.shadow.matrix,M++}n.point[a]=O,a++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(D),O.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[f]=O,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=g,n.ambient[2]=m;let A=n.hash;(A.sunLength!==d||A.directionalLength!==b||A.pointLength!==a||A.spotLength!==x||A.rectAreaLength!==p||A.hemiLength!==f||A.numSunShadows!==_||A.numDirectionalShadows!==v||A.numPointShadows!==M||A.numSpotShadows!==w||A.numSpotMaps!==y||A.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=b,n.spot.length=x,n.rectArea.length=p,n.point.length=a,n.hemi.length=f,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-S,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,A.sunLength=d,A.directionalLength=b,A.pointLength=a,A.spotLength=x,A.rectAreaLength=p,A.hemiLength=f,A.numSunShadows=_,A.numDirectionalShadows=v,A.numPointShadows=M,A.numSpotShadows=w,A.numSpotMaps=y,A.numLightProbes=T,n.version=lb++)}function c(u,h){let g=0,m=0,d=0,_=0,E=0,b=0,a=h.matrixWorldInverse;for(let x=0,p=u.length;x<p;x++){let f=u[x];if(f.isSunLight){let v=n.sun[g];v.direction.setFromMatrixPosition(f.matrixWorld),v.direction.transformDirection(a),g++}else if(f.isDirectionalLight){let v=n.directional[m];v.direction.setFromMatrixPosition(f.matrixWorld),s.setFromMatrixPosition(f.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(a),m++}else if(f.isSpotLight){let v=n.spot[_];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(a),v.direction.setFromMatrixPosition(f.matrixWorld),s.setFromMatrixPosition(f.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(a),_++}else if(f.isRectAreaLight){let v=n.rectArea[E];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(a),o.identity(),r.copy(f.matrixWorld),r.premultiply(a),o.extractRotation(r),v.halfWidth.set(f.width*.5,0,0),v.halfHeight.set(0,f.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),E++}else if(f.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(a),d++}else if(f.isHemisphereLight){let v=n.hemi[b];v.direction.setFromMatrixPosition(f.matrixWorld),v.direction.transformDirection(a),b++}}}return{setup:l,setupView:c,state:n}}function Yp(i){let e=new ub(i),t=[],n=[],s=[];function r(m){g.camera=m,t.length=0,n.length=0,s.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function c(m){s.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}let g={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:c}}function hb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new Yp(i),e.set(s,[l])):r>=o.length?(l=new Yp(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,db=`uniform sampler2D shadow_pass;
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
}`,pb=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],mb=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Zp=new Qe,Qa=new H,Gf=new H;function gb(i,e,t){let n=new ho,s=new Pe,r=new Pe,o=new pt,l=new yr,c=new Pc,u={},h=t.maxTextureSize,g={[ls]:Hn,[Hn]:ls,[yn]:yn},m=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:fb,fragmentShader:db}),d=m.clone();d.defines.HORIZONTAL_PASS=1;let _=new vt;_.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new ut(_,m),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_r;let a=this.type;this.render=function(M,w,y){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||M.length===0)return;this.type===z0&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_r);let S=i.getRenderTarget(),T=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),R=i.state;R.setBlending(ni),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let C=a!==this.type;C&&w.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(L=>L.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,L=M.length;P<L;P++){let D=M[P],B=D.shadow;if(B===void 0){ct("WebGLShadowMap:",D,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let V=B.getFrameExtents();s.multiply(V),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,B.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=O,B.map===null||C===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===_o){if(D.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Wt(s.x,s.y,{format:Zs,type:Tn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),B.map.texture.name=D.name+".shadowMap",B.map.depthTexture=new ks(s.x,s.y,Ci),B.map.depthTexture.name=D.name+".shadowMapDepth",B.map.depthTexture.format=ss,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn}else D.isPointLight?(B.map=new Uu(s.x),B.map.depthTexture=new bc(s.x,$i)):(B.map=new Wt(s.x,s.y),B.map.depthTexture=new ks(s.x,s.y,$i)),B.map.depthTexture.name=D.name+".shadowMap",B.map.depthTexture.format=ss,this.type===_r?(B.map.depthTexture.compareFunction=O?Iu:Pu,B.map.depthTexture.minFilter=Ut,B.map.depthTexture.magFilter=Ut):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let k=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();D.isPointLight!==!0&&B.updateMatrices(D,y);for(let z=0;z<k;z++){let W=B.getCamera(z);if(D.isPointLight){let ce=B.camera,Ne=B.matrix,Oe=D.distance||ce.far;Oe!==ce.far&&(ce.far=Oe,ce.updateProjectionMatrix()),Qa.setFromMatrixPosition(D.matrixWorld),ce.position.copy(Qa),Gf.copy(ce.position),Gf.add(pb[z]),ce.up.copy(mb[z]),ce.lookAt(Gf),ce.updateMatrixWorld(),Ne.makeTranslation(-Qa.x,-Qa.y,-Qa.z),Zp.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Zp,ce.coordinateSystem,ce.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,z),i.clear();else{z===0&&(i.setRenderTarget(B.map),i.clear());let ce=B.getViewport(z);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),R.viewport(o)}n=B.getFrustum(z),f(w,y,W,D,this.type)}B.isPointLightShadow!==!0&&this.type===_o&&x(B,y),B.needsUpdate=!1}a=this.type,b.needsUpdate=!1,i.setRenderTarget(S,T,A)};function x(M,w){let y=e.update(E);m.defines.VSM_SAMPLES!==M.blurSamples&&(m.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,m.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Wt(s.x,s.y,{format:Zs,type:Tn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),m.uniforms.shadow_pass.value=M.map.depthTexture,m.uniforms.resolution.value.set(M.map.width,M.map.height),m.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,y,m,E,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,y,d,E,null)}function p(M,w,y,S){let T=null,A=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)T=A;else if(T=y.isPointLight===!0?c:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let R=T.uuid,C=w.uuid,P=u[R];P===void 0&&(P={},u[R]=P);let L=P[C];L===void 0&&(L=T.clone(),P[C]=L,w.addEventListener("dispose",v)),T=L}if(T.visible=w.visible,T.wireframe=w.wireframe,S===_o?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:g[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let R=i.properties.get(T);R.light=y}return T}function f(M,w,y,S,T){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===_o)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let C=e.update(M),P=M.material;if(Array.isArray(P)){let L=C.groups;for(let D=0,B=L.length;D<B;D++){let V=L[D],O=P[V.materialIndex];if(O&&O.visible){let k=p(M,O,S,T);M.onBeforeShadow(i,M,w,y,C,k,V),i.renderBufferDirect(y,null,C,k,M,V),M.onAfterShadow(i,M,w,y,C,k,V)}}}else if(P.visible){let L=p(M,P,S,T);M.onBeforeShadow(i,M,w,y,C,L,null),i.renderBufferDirect(y,null,C,L,M,null),M.onAfterShadow(i,M,w,y,C,L,null)}}let R=M.children;for(let C=0,P=R.length;C<P;C++)f(R[C],w,y,S,T)}function v(M){M.target.removeEventListener("dispose",v);for(let y in u){let S=u[y],T=M.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function vb(i,e){function t(){let Z=!1,Ae=new pt,pe=null,De=new pt(0,0,0,0);return{setMask:function(X){pe!==X&&!Z&&(i.colorMask(X,X,X,X),pe=X)},setLocked:function(X){Z=X},setClear:function(X,ye,st,tt,Vt){Vt===!0&&(X*=tt,ye*=tt,st*=tt),Ae.set(X,ye,st,tt),De.equals(Ae)===!1&&(i.clearColor(X,ye,st,tt),De.copy(Ae))},reset:function(){Z=!1,pe=null,De.set(-1,0,0,0)}}}function n(){let Z=!1,Ae=!1,pe=null,De=null,X=null;return{setReversed:function(ye){if(Ae!==ye){let st=e.get("EXT_clip_control");ye?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Ae=ye;let tt=X;X=null,this.setClear(tt)}},getReversed:function(){return Ae},setTest:function(ye){ye?J(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(ye){pe!==ye&&!Z&&(i.depthMask(ye),pe=ye)},setFunc:function(ye){if(Ae&&(ye=_p[ye]),De!==ye){switch(ye){case oc:i.depthFunc(i.NEVER);break;case ac:i.depthFunc(i.ALWAYS);break;case lc:i.depthFunc(i.LESS);break;case so:i.depthFunc(i.LEQUAL);break;case cc:i.depthFunc(i.EQUAL);break;case uc:i.depthFunc(i.GEQUAL);break;case hc:i.depthFunc(i.GREATER);break;case fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=ye}},setLocked:function(ye){Z=ye},setClear:function(ye){X!==ye&&(X=ye,Ae&&(ye=1-ye),i.clearDepth(ye))},reset:function(){Z=!1,pe=null,De=null,X=null,Ae=!1}}}function s(){let Z=!1,Ae=null,pe=null,De=null,X=null,ye=null,st=null,tt=null,Vt=null;return{setTest:function(Ke){Z||(Ke?J(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(Ke){Ae!==Ke&&!Z&&(i.stencilMask(Ke),Ae=Ke)},setFunc:function(Ke,mt,St){(pe!==Ke||De!==mt||X!==St)&&(i.stencilFunc(Ke,mt,St),pe=Ke,De=mt,X=St)},setOp:function(Ke,mt,St){(ye!==Ke||st!==mt||tt!==St)&&(i.stencilOp(Ke,mt,St),ye=Ke,st=mt,tt=St)},setLocked:function(Ke){Z=Ke},setClear:function(Ke){Vt!==Ke&&(i.clearStencil(Ke),Vt=Ke)},reset:function(){Z=!1,Ae=null,pe=null,De=null,X=null,ye=null,st=null,tt=null,Vt=null}}}let r=new t,o=new n,l=new s,c=new WeakMap,u=new WeakMap,h={},g={},m={},d=new WeakMap,_=[],E=null,b=!1,a=null,x=null,p=null,f=null,v=null,M=null,w=null,y=new xe(0,0,0),S=0,T=!1,A=null,R=null,C=null,P=null,L=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,V=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=V>=1):O.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=V>=2);let k=null,z={},W=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Ne=new pt().fromArray(W),Oe=new pt().fromArray(ce);function Ee(Z,Ae,pe,De){let X=new Uint8Array(4),ye=i.createTexture();i.bindTexture(Z,ye),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<pe;st++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(Ae+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return ye}let $={};$[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),J(i.DEPTH_TEST),o.setFunc(so),ne(!1),be(af),J(i.CULL_FACE),qe(ni);function J(Z){h[Z]!==!0&&(i.enable(Z),h[Z]=!0)}function le(Z){h[Z]!==!1&&(i.disable(Z),h[Z]=!1)}function Ce(Z,Ae){return m[Z]!==Ae?(i.bindFramebuffer(Z,Ae),m[Z]=Ae,Z===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ae),Z===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Se(Z,Ae){let pe=_,De=!1;if(Z){pe=d.get(Ae),pe===void 0&&(pe=[],d.set(Ae,pe));let X=Z.textures;if(pe.length!==X.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,st=X.length;ye<st;ye++)pe[ye]=i.COLOR_ATTACHMENT0+ye;pe.length=X.length,De=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,De=!0);De&&i.drawBuffers(pe)}function ke(Z){return E!==Z?(i.useProgram(Z),E=Z,!0):!1}let we={[br]:i.FUNC_ADD,[H0]:i.FUNC_SUBTRACT,[V0]:i.FUNC_REVERSE_SUBTRACT};we[G0]=i.MIN,we[W0]=i.MAX;let Je={[X0]:i.ZERO,[q0]:i.ONE,[Y0]:i.SRC_COLOR,[uf]:i.SRC_ALPHA,[Q0]:i.SRC_ALPHA_SATURATE,[J0]:i.DST_COLOR,[$0]:i.DST_ALPHA,[Z0]:i.ONE_MINUS_SRC_COLOR,[hf]:i.ONE_MINUS_SRC_ALPHA,[j0]:i.ONE_MINUS_DST_COLOR,[K0]:i.ONE_MINUS_DST_ALPHA,[ep]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ip]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(Z,Ae,pe,De,X,ye,st,tt,Vt,Ke){if(Z===ni){b===!0&&(le(i.BLEND),b=!1);return}if(b===!1&&(J(i.BLEND),b=!0),Z!==k0){if(Z!==a||Ke!==T){if((x!==br||v!==br)&&(i.blendEquation(i.FUNC_ADD),x=br,v=br),Ke)switch(Z){case bo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFunc(i.ONE,i.ONE);break;case lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lf:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cf:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",Z);break}p=null,f=null,M=null,w=null,y.set(0,0,0),S=0,a=Z,T=Ke}return}X=X||Ae,ye=ye||pe,st=st||De,(Ae!==x||X!==v)&&(i.blendEquationSeparate(we[Ae],we[X]),x=Ae,v=X),(pe!==p||De!==f||ye!==M||st!==w)&&(i.blendFuncSeparate(Je[pe],Je[De],Je[ye],Je[st]),p=pe,f=De,M=ye,w=st),(tt.equals(y)===!1||Vt!==S)&&(i.blendColor(tt.r,tt.g,tt.b,Vt),y.copy(tt),S=Vt),a=Z,T=!1}function Fe(Z,Ae){Z.side===yn?le(i.CULL_FACE):J(i.CULL_FACE);let pe=Z.side===Hn;Ae&&(pe=!pe),ne(pe),Z.blending===bo&&Z.transparent===!1?qe(ni):qe(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let De=Z.stencilWrite;l.setTest(De),De&&(l.setMask(Z.stencilWriteMask),l.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),l.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),oe(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(Z){A!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),A=Z)}function be(Z){Z!==B0?(J(i.CULL_FACE),Z!==R&&(Z===af?i.cullFace(i.BACK):Z===O0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),R=Z}function j(Z){Z!==C&&(B&&i.lineWidth(Z),C=Z)}function oe(Z,Ae,pe){Z?(J(i.POLYGON_OFFSET_FILL),(P!==Ae||L!==pe)&&(P=Ae,L=pe,o.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,pe))):le(i.POLYGON_OFFSET_FILL)}function ee(Z){Z?J(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function he(Z){Z===void 0&&(Z=i.TEXTURE0+D-1),k!==Z&&(i.activeTexture(Z),k=Z)}function F(Z,Ae,pe){pe===void 0&&(k===null?pe=i.TEXTURE0+D-1:pe=k);let De=z[pe];De===void 0&&(De={type:void 0,texture:void 0},z[pe]=De),(De.type!==Z||De.texture!==Ae)&&(k!==pe&&(i.activeTexture(pe),k=pe),i.bindTexture(Z,Ae||$[Z]),De.type=Z,De.texture=Ae)}function ve(){let Z=z[k];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function I(){try{i.texSubImage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function G(){try{i.texSubImage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function ue(){try{i.texStorage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function me(){try{i.texStorage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function ae(){try{i.texImage2D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function de(){try{i.texImage3D(...arguments)}catch(Z){dt("WebGLState:",Z)}}function Ie(Z){return g[Z]!==void 0?g[Z]:i.getParameter(Z)}function Ye(Z,Ae){g[Z]!==Ae&&(i.pixelStorei(Z,Ae),g[Z]=Ae)}function Te(Z){Ne.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),Ne.copy(Z))}function Le(Z){Oe.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Oe.copy(Z))}function Be(Z,Ae){let pe=u.get(Ae);pe===void 0&&(pe=new WeakMap,u.set(Ae,pe));let De=pe.get(Z);De===void 0&&(De=i.getUniformBlockIndex(Ae,Z.name),pe.set(Z,De))}function et(Z,Ae){let De=u.get(Ae).get(Z);c.get(Ae)!==De&&(i.uniformBlockBinding(Ae,De,Z.__bindingPointIndex),c.set(Ae,De))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},g={},k=null,z={},m={},d=new WeakMap,_=[],E=null,b=!1,a=null,x=null,p=null,f=null,v=null,M=null,w=null,y=new xe(0,0,0),S=0,T=!1,A=null,R=null,C=null,P=null,L=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:J,disable:le,bindFramebuffer:Ce,drawBuffers:Se,useProgram:ke,setBlending:qe,setMaterial:Fe,setFlipSided:ne,setCullFace:be,setLineWidth:j,setPolygonOffset:oe,setScissorTest:ee,activeTexture:he,bindTexture:F,unbindTexture:ve,compressedTexImage2D:te,compressedTexImage3D:N,texImage2D:ae,texImage3D:de,pixelStorei:Ye,getParameter:Ie,updateUBOMapping:Be,uniformBlockBinding:et,texStorage2D:ue,texStorage3D:me,texSubImage2D:I,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:Te,viewport:Le,reset:at}}function xb(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Pe,h=new WeakMap,g=new Set,m,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,I){return _?new OffscreenCanvas(N,I):oo("canvas")}function b(N,I,G){let Y=1,Q=te(N);if((Q.width>G||Q.height>G)&&(Y=G/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ue=Math.floor(Y*Q.width),me=Math.floor(Y*Q.height);m===void 0&&(m=E(ue,me));let ae=I?E(ue,me):m;return ae.width=ue,ae.height=me,ae.getContext("2d").drawImage(N,0,0,ue,me),ct("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+me+")."),ae}else return"data"in N&&ct("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function a(N){return N.generateMipmaps}function x(N){i.generateMipmap(N)}function p(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function f(N,I,G,Y,Q,ue=!1){if(N!==null){if(i[N]!==void 0)return i[N];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me;Y&&(me=e.get("EXT_texture_norm16"),me||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=I;if(I===i.RED&&(G===i.FLOAT&&(ae=i.R32F),G===i.HALF_FLOAT&&(ae=i.R16F),G===i.UNSIGNED_BYTE&&(ae=i.R8),G===i.UNSIGNED_SHORT&&me&&(ae=me.R16_EXT),G===i.SHORT&&me&&(ae=me.R16_SNORM_EXT)),I===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.R8UI),G===i.UNSIGNED_SHORT&&(ae=i.R16UI),G===i.UNSIGNED_INT&&(ae=i.R32UI),G===i.BYTE&&(ae=i.R8I),G===i.SHORT&&(ae=i.R16I),G===i.INT&&(ae=i.R32I)),I===i.RG&&(G===i.FLOAT&&(ae=i.RG32F),G===i.HALF_FLOAT&&(ae=i.RG16F),G===i.UNSIGNED_BYTE&&(ae=i.RG8),G===i.UNSIGNED_SHORT&&me&&(ae=me.RG16_EXT),G===i.SHORT&&me&&(ae=me.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.RG8UI),G===i.UNSIGNED_SHORT&&(ae=i.RG16UI),G===i.UNSIGNED_INT&&(ae=i.RG32UI),G===i.BYTE&&(ae=i.RG8I),G===i.SHORT&&(ae=i.RG16I),G===i.INT&&(ae=i.RG32I)),I===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),G===i.UNSIGNED_INT&&(ae=i.RGB32UI),G===i.BYTE&&(ae=i.RGB8I),G===i.SHORT&&(ae=i.RGB16I),G===i.INT&&(ae=i.RGB32I)),I===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),G===i.UNSIGNED_INT&&(ae=i.RGBA32UI),G===i.BYTE&&(ae=i.RGBA8I),G===i.SHORT&&(ae=i.RGBA16I),G===i.INT&&(ae=i.RGBA32I)),I===i.RGB&&(G===i.UNSIGNED_SHORT&&me&&(ae=me.RGB16_EXT),G===i.SHORT&&me&&(ae=me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),I===i.RGBA){let de=ue?pa:Ct.getTransfer(Q);G===i.FLOAT&&(ae=i.RGBA32F),G===i.HALF_FLOAT&&(ae=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ae=de===kt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&me&&(ae=me.RGBA16_EXT),G===i.SHORT&&me&&(ae=me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(N,I){let G;return N?I===null||I===$i||I===So?G=i.DEPTH24_STENCIL8:I===Ci?G=i.DEPTH32F_STENCIL8:I===Mo&&(G=i.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===$i||I===So?G=i.DEPTH_COMPONENT24:I===Ci?G=i.DEPTH_COMPONENT32F:I===Mo&&(G=i.DEPTH_COMPONENT16),G}function M(N,I){return a(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==Ut?Math.log2(Math.max(I.width,I.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?I.mipmaps.length:1}function w(N){let I=N.target;I.removeEventListener("dispose",w),S(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&g.delete(I)}function y(N){let I=N.target;I.removeEventListener("dispose",y),A(I)}function S(N){let I=n.get(N);if(I.__webglInit===void 0)return;let G=N.source,Y=d.get(G);if(Y){let Q=Y[I.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(N),Object.keys(Y).length===0&&d.delete(G)}n.remove(N)}function T(N){let I=n.get(N);i.deleteTexture(I.__webglTexture);let G=N.source,Y=d.get(G);delete Y[I.__cacheKey],o.memory.textures--}function A(N){let I=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(I.__webglFramebuffer[Y]))for(let Q=0;Q<I.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(I.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(I.__webglFramebuffer[Y]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[Y])}else{if(Array.isArray(I.__webglFramebuffer))for(let Y=0;Y<I.__webglFramebuffer.length;Y++)i.deleteFramebuffer(I.__webglFramebuffer[Y]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Y=0;Y<I.__webglColorRenderbuffer.length;Y++)I.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[Y]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let G=N.textures;for(let Y=0,Q=G.length;Y<Q;Y++){let ue=n.get(G[Y]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(G[Y])}n.remove(N)}let R=0;function C(){R=0}function P(){return R}function L(N){R=N}function D(){let N=R;return N>=s.maxTextures&&ct("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,N}function B(N){let I=[];return I.push(N.wrapS),I.push(N.wrapT),I.push(N.wrapR||0),I.push(N.magFilter),I.push(N.minFilter),I.push(N.anisotropy),I.push(N.internalFormat),I.push(N.format),I.push(N.type),I.push(N.generateMipmaps),I.push(N.premultiplyAlpha),I.push(N.flipY),I.push(N.unpackAlignment),I.push(N.colorSpace),I.join()}function V(N,I){let G=n.get(N);if(N.isVideoTexture&&F(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){let Y=N.image;if(Y===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,N,I);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+I)}function O(N,I){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){le(G,N,I);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+I)}function k(N,I){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){le(G,N,I);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+I)}function z(N,I){let G=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){Ce(G,N,I);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+I)}let W={[Es]:i.REPEAT,[is]:i.CLAMP_TO_EDGE,[dc]:i.MIRRORED_REPEAT},ce={[Sn]:i.NEAREST,[op]:i.NEAREST_MIPMAP_NEAREST,[Xa]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[qc]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},Ne={[up]:i.NEVER,[mp]:i.ALWAYS,[hp]:i.LESS,[Pu]:i.LEQUAL,[fp]:i.EQUAL,[Iu]:i.GEQUAL,[dp]:i.GREATER,[pp]:i.NOTEQUAL};function Oe(N,I){if(I.type===Ci&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===Ut||I.magFilter===qc||I.magFilter===Xa||I.magFilter===An||I.minFilter===Ut||I.minFilter===qc||I.minFilter===Xa||I.minFilter===An)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,W[I.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,W[I.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,W[I.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ce[I.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ce[I.minFilter]),I.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Ne[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Sn||I.minFilter!==Xa&&I.minFilter!==An||I.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Ee(N,I){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,I.addEventListener("dispose",w));let Y=I.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let ue=B(I);if(ue!==N.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[ue].usedTimes++;let me=Q[N.__cacheKey];me!==void 0&&(Q[N.__cacheKey].usedTimes--,me.usedTimes===0&&T(I)),N.__cacheKey=ue,N.__webglTexture=Q[ue].texture}return G}function $(N,I,G){return Math.floor(Math.floor(N/G)/I)}function J(N,I,G,Y){let ue=N.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,G,Y,I.data);else{ue.sort((Ye,Te)=>Ye.start-Te.start);let me=0;for(let Ye=1;Ye<ue.length;Ye++){let Te=ue[me],Le=ue[Ye],Be=Te.start+Te.count,et=$(Le.start,I.width,4),at=$(Te.start,I.width,4);Le.start<=Be+1&&et===at&&$(Le.start+Le.count-1,I.width,4)===et?Te.count=Math.max(Te.count,Le.start+Le.count-Te.start):(++me,ue[me]=Le)}ue.length=me+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Ye=0,Te=ue.length;Ye<Te;Ye++){let Le=ue[Ye],Be=Math.floor(Le.start/4),et=Math.ceil(Le.count/4),at=Be%I.width,Z=Math.floor(Be/I.width),Ae=et,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,at,Z,Ae,pe,G,Y,I.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function le(N,I,G){let Y=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=Ee(N,I),ue=I.source;t.bindTexture(Y,N.__webglTexture,i.TEXTURE0+G);let me=n.get(ue);if(ue.version!==me.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let pe=Ct.getPrimaries(Ct.workingColorSpace),De=I.colorSpace===ii?null:Ct.getPrimaries(I.colorSpace),X=I.colorSpace===ii||pe===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X)}t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let de=b(I.image,!1,s.maxTextureSize);de=ve(I,de);let Ie=r.convert(I.format,I.colorSpace),Ye=r.convert(I.type),Te=f(I.internalFormat,Ie,Ye,I.normalized,I.colorSpace,I.isVideoTexture);Oe(Y,I);let Le,Be=I.mipmaps,et=I.isVideoTexture!==!0,at=me.__version===void 0||Q===!0,Z=ue.dataReady,Ae=M(I,de);if(I.isDepthTexture)Te=v(I.format===qs,I.type),at&&(et?t.texStorage2D(i.TEXTURE_2D,1,Te,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Te,de.width,de.height,0,Ie,Ye,null));else if(I.isDataTexture)if(Be.length>0){et&&at&&t.texStorage2D(i.TEXTURE_2D,Ae,Te,Be[0].width,Be[0].height);for(let pe=0,De=Be.length;pe<De;pe++)Le=Be[pe],et?Z&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Le.width,Le.height,Ie,Ye,Le.data):t.texImage2D(i.TEXTURE_2D,pe,Te,Le.width,Le.height,0,Ie,Ye,Le.data);I.generateMipmaps=!1}else et?(at&&t.texStorage2D(i.TEXTURE_2D,Ae,Te,de.width,de.height),Z&&J(I,de,Ie,Ye)):t.texImage2D(i.TEXTURE_2D,0,Te,de.width,de.height,0,Ie,Ye,de.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){et&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Te,Be[0].width,Be[0].height,de.depth);for(let pe=0,De=Be.length;pe<De;pe++)if(Le=Be[pe],I.format!==$n)if(Ie!==null)if(et){if(Z)if(I.layerUpdates.size>0){let X=Lf(Le.width,Le.height,I.format,I.type);for(let ye of I.layerUpdates){let st=Le.data.subarray(ye*X/Le.data.BYTES_PER_ELEMENT,(ye+1)*X/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,ye,Le.width,Le.height,1,Ie,st)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Le.width,Le.height,de.depth,Ie,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,Te,Le.width,Le.height,de.depth,0,Le.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Le.width,Le.height,de.depth,Ie,Ye,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,Te,Le.width,Le.height,de.depth,0,Ie,Ye,Le.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{et&&at&&t.texStorage2D(i.TEXTURE_2D,Ae,Te,Be[0].width,Be[0].height);for(let pe=0,De=Be.length;pe<De;pe++)Le=Be[pe],I.format!==$n?Ie!==null?et?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,Le.width,Le.height,Ie,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,Te,Le.width,Le.height,0,Le.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?Z&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Le.width,Le.height,Ie,Ye,Le.data):t.texImage2D(i.TEXTURE_2D,pe,Te,Le.width,Le.height,0,Ie,Ye,Le.data)}else if(I.isDataArrayTexture)if(et){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Te,de.width,de.height,de.depth),Z)if(I.layerUpdates.size>0){let pe=Lf(de.width,de.height,I.format,I.type);for(let De of I.layerUpdates){let X=de.data.subarray(De*pe/de.data.BYTES_PER_ELEMENT,(De+1)*pe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,de.width,de.height,1,Ie,Ye,X)}I.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ie,Ye,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,de.width,de.height,de.depth,0,Ie,Ye,de.data);else if(I.isData3DTexture)et?(at&&t.texStorage3D(i.TEXTURE_3D,Ae,Te,de.width,de.height,de.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ie,Ye,de.data)):t.texImage3D(i.TEXTURE_3D,0,Te,de.width,de.height,de.depth,0,Ie,Ye,de.data);else if(I.isFramebufferTexture){if(at)if(et)t.texStorage2D(i.TEXTURE_2D,Ae,Te,de.width,de.height);else{let pe=de.width,De=de.height;for(let X=0;X<Ae;X++)t.texImage2D(i.TEXTURE_2D,X,Te,pe,De,0,Ie,Ye,null),pe>>=1,De>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),de.parentNode!==pe){pe.appendChild(de),g.add(I),pe.onpaint=De=>{let X=De.changedElements;for(let ye of g)X.includes(ye.image)&&(ye.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let X=i.RGBA,ye=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,X,ye,st,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(et&&at){let pe=te(Be[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Te,pe.width,pe.height)}for(let pe=0,De=Be.length;pe<De;pe++)Le=Be[pe],et?Z&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Ie,Ye,Le):t.texImage2D(i.TEXTURE_2D,pe,Te,Ie,Ye,Le);I.generateMipmaps=!1}else if(et){if(at){let pe=te(de);t.texStorage2D(i.TEXTURE_2D,Ae,Te,pe.width,pe.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Ye,de)}else t.texImage2D(i.TEXTURE_2D,0,Te,Ie,Ye,de);a(I)&&x(Y),me.__version=ue.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function Ce(N,I,G){if(I.image.length!==6)return;let Y=Ee(N,I),Q=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+G);let ue=n.get(Q);if(Q.version!==ue.__version||Y===!0){t.activeTexture(i.TEXTURE0+G);let me=Ct.getPrimaries(Ct.workingColorSpace),ae=I.colorSpace===ii?null:Ct.getPrimaries(I.colorSpace),de=I.colorSpace===ii||me===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ie=I.isCompressedTexture||I.image[0].isCompressedTexture,Ye=I.image[0]&&I.image[0].isDataTexture,Te=[];for(let ye=0;ye<6;ye++)!Ie&&!Ye?Te[ye]=b(I.image[ye],!0,s.maxCubemapSize):Te[ye]=Ye?I.image[ye].image:I.image[ye],Te[ye]=ve(I,Te[ye]);let Le=Te[0],Be=r.convert(I.format,I.colorSpace),et=r.convert(I.type),at=f(I.internalFormat,Be,et,I.normalized,I.colorSpace),Z=I.isVideoTexture!==!0,Ae=ue.__version===void 0||Y===!0,pe=Q.dataReady,De=M(I,Le);Oe(i.TEXTURE_CUBE_MAP,I);let X;if(Ie){Z&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,at,Le.width,Le.height);for(let ye=0;ye<6;ye++){X=Te[ye].mipmaps;for(let st=0;st<X.length;st++){let tt=X[st];I.format!==$n?Be!==null?Z?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,st,0,0,tt.width,tt.height,Be,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,st,at,tt.width,tt.height,0,tt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,st,0,0,tt.width,tt.height,Be,et,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,st,at,tt.width,tt.height,0,Be,et,tt.data)}}}else{if(X=I.mipmaps,Z&&Ae){X.length>0&&De++;let ye=te(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,at,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ye){Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Te[ye].width,Te[ye].height,Be,et,Te[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Te[ye].width,Te[ye].height,0,Be,et,Te[ye].data);for(let st=0;st<X.length;st++){let Vt=X[st].image[ye].image;Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,st+1,0,0,Vt.width,Vt.height,Be,et,Vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,st+1,at,Vt.width,Vt.height,0,Be,et,Vt.data)}}else{Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be,et,Te[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Be,et,Te[ye]);for(let st=0;st<X.length;st++){let tt=X[st];Z?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,st+1,0,0,Be,et,tt.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,st+1,at,Be,et,tt.image[ye])}}}a(I)&&x(i.TEXTURE_CUBE_MAP),ue.__version=Q.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function Se(N,I,G,Y,Q,ue){let me=r.convert(G.format,G.colorSpace),ae=r.convert(G.type),de=f(G.internalFormat,me,ae,G.normalized,G.colorSpace),Ie=n.get(I),Ye=n.get(G);if(Ye.__renderTarget=I,!Ie.__hasExternalTextures){let Te=Math.max(1,I.width>>ue),Le=Math.max(1,I.height>>ue);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ue,de,Te,Le,I.depth,0,me,ae,null):t.texImage2D(Q,ue,de,Te,Le,0,me,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),he(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,Ye.__webglTexture,0,ee(I)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,Ye.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(N,I,G){if(i.bindRenderbuffer(i.RENDERBUFFER,N),I.depthBuffer){let Y=I.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,ue=v(I.stencilBuffer,Q),me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(I)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(I),ue,I.width,I.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(I),ue,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,ue,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,N)}else{let Y=I.textures;for(let Q=0;Q<Y.length;Q++){let ue=Y[Q],me=r.convert(ue.format,ue.colorSpace),ae=r.convert(ue.type),de=f(ue.internalFormat,me,ae,ue.normalized,ue.colorSpace);he(I)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(I),de,I.width,I.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(I),de,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,de,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(N,I,G){let Y=I.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(I.depthTexture);if(Q.__renderTarget=I,(!Q.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,I.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,I.depthTexture);let Ie=r.convert(I.depthTexture.format),Ye=r.convert(I.depthTexture.type),Te;I.depthTexture.format===ss?Te=i.DEPTH_COMPONENT24:I.depthTexture.format===qs&&(Te=i.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Te,I.width,I.height,0,Ie,Ye,null)}}else V(I.depthTexture,0);let ue=Q.__webglTexture,me=ee(I),ae=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,de=I.depthTexture.format===qs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===ss)he(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ae,ue,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,de,ae,ue,0);else if(I.depthTexture.format===qs)he(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ae,ue,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,de,ae,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(N){let I=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==N.depthTexture){let Y=N.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),Y){let Q=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),I.__depthDisposeCallback=Q}I.__boundDepthTexture=Y}if(N.depthTexture&&!I.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)we(I.__webglFramebuffer[Y],N,Y);else{let Y=N.texture.mipmaps;Y&&Y.length>0?we(I.__webglFramebuffer[0],N,0):we(I.__webglFramebuffer,N,0)}else if(G){I.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[Y]),I.__webglDepthbuffer[Y]===void 0)I.__webglDepthbuffer[Y]=i.createRenderbuffer(),ke(I.__webglDepthbuffer[Y],N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=I.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}else{let Y=N.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),ke(I.__webglDepthbuffer,N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(N,I,G){let Y=n.get(N);I!==void 0&&Se(Y.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Je(N)}function Fe(N){let I=N.texture,G=n.get(N),Y=n.get(I);N.addEventListener("dispose",y);let Q=N.textures,ue=N.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=I.version,o.memory.textures++),ue){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(I.mipmaps&&I.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let de=0;de<I.mipmaps.length;de++)G.__webglFramebuffer[ae][de]=i.createFramebuffer()}else G.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<I.mipmaps.length;ae++)G.__webglFramebuffer[ae]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(me)for(let ae=0,de=Q.length;ae<de;ae++){let Ie=n.get(Q[ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&he(N)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){let de=Q[ae];G.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ae]);let Ie=r.convert(de.format,de.colorSpace),Ye=r.convert(de.type),Te=f(de.internalFormat,Ie,Ye,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),Le=ee(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Te,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,G.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,I);for(let ae=0;ae<6;ae++)if(I.mipmaps&&I.mipmaps.length>0)for(let de=0;de<I.mipmaps.length;de++)Se(G.__webglFramebuffer[ae][de],N,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else Se(G.__webglFramebuffer[ae],N,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);a(I)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ae=0,de=Q.length;ae<de;ae++){let Ie=Q[ae],Ye=n.get(Ie),Te=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,Ye.__webglTexture),Oe(Te,Ie),Se(G.__webglFramebuffer,N,Ie,i.COLOR_ATTACHMENT0+ae,Te,0),a(Ie)&&x(Te)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ae=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),Oe(ae,I),I.mipmaps&&I.mipmaps.length>0)for(let de=0;de<I.mipmaps.length;de++)Se(G.__webglFramebuffer[de],N,I,i.COLOR_ATTACHMENT0,ae,de);else Se(G.__webglFramebuffer,N,I,i.COLOR_ATTACHMENT0,ae,0);a(I)&&x(ae),t.unbindTexture()}N.depthBuffer&&Je(N)}function ne(N){let I=N.textures;for(let G=0,Y=I.length;G<Y;G++){let Q=I[G];if(a(Q)){let ue=p(N),me=n.get(Q).__webglTexture;t.bindTexture(ue,me),x(ue),t.unbindTexture()}}}let be=[],j=[];function oe(N){if(N.samples>0){if(he(N)===!1){let I=N.textures,G=N.width,Y=N.height,Q=i.COLOR_BUFFER_BIT,ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(N),ae=I.length>1;if(ae)for(let Ie=0;Ie<I.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let de=N.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ie=0;Ie<I.length;Ie++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ie]);let Ye=n.get(I[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,Q,i.NEAREST),c===!0&&(be.length=0,j.length=0,be.push(i.COLOR_ATTACHMENT0+Ie),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(be.push(ue),j.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Ie=0;Ie<I.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ie]);let Ye=n.get(I[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let I=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function ee(N){return Math.min(s.maxSamples,N.samples)}function he(N){let I=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function F(N){let I=o.render.frame;h.get(N)!==I&&(h.set(N,I),N.update())}function ve(N,I){let G=N.colorSpace,Y=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==da&&G!==ii&&(Ct.getTransfer(G)===kt?(Y!==$n||Q!==Zn)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",G)),I}function te(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=C,this.getTextureUnits=P,this.setTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=qe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yb(i,e){function t(n,s=ii){let r,o=Ct.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_f)return i.BYTE;if(n===bf)return i.SHORT;if(n===Mo)return i.UNSIGNED_SHORT;if(n===Yc)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Ef)return i.ALPHA;if(n===Tf)return i.RGB;if(n===$n)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===qs)return i.DEPTH_STENCIL;if(n===Ys)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===Zs)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===qa||n===Ya||n===Za||n===$a)if(o===kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===eu||n===tu||n===nu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===iu||n===su||n===ru||n===ou||n===au||n===Ka||n===lu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===iu||n===su)return o===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ru)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ou)return r.COMPRESSED_R11_EAC;if(n===au)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ka)return r.COMPRESSED_RG11_EAC;if(n===lu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===vu||n===xu||n===yu||n===_u||n===bu||n===Mu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_u)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return o===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Su||n===Eu||n===Tu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Su)return o===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===Au||n===Ja||n===Ru)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Au)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ru)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===So?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bb=`
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

}`,Jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ht({vertexShader:_b,fragmentShader:bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jf=class extends rs{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",c=1,u=null,h=null,g=null,m=null,d=null,_=null,E=typeof XRWebGLBinding<"u",b=new Jf,a={},x=t.getContextAttributes(),p=null,f=null,v=[],M=[],w=new Pe,y=null,S=null,T=new kn;T.viewport=new pt;let A=new kn;A.viewport=new pt;let R=[T,A],C=new Vc,P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=v[$];return J===void 0&&(J=new co,v[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=v[$];return J===void 0&&(J=new co,v[$]=J),J.getGripSpace()},this.getHand=function($){let J=v[$];return J===void 0&&(J=new co,v[$]=J),J.getHandSpace()};function D($){let J=M.indexOf($.inputSource);if(J===-1)return;let le=v[J];le!==void 0&&(le.update($.inputSource,$.frame,u||o),le.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",V);for(let $=0;$<v.length;$++){let J=M[$];J!==null&&(M[$]=null,v[$].disconnect(J))}P=null,L=null,b.reset();for(let $ in a)delete a[$];if(e.setRenderTarget(p),d=null,m=null,g=null,s=null,f=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),S!==null){let $=S.camera;$.fov=S.fov,$.zoom=S.zoom,$.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ce=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?qs:ss,Ce=x.stencil?So:$i);let ke={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};g=this.getBinding(),m=g.createProjectionLayer(ke),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),f=new Wt(m.textureWidth,m.textureHeight,{format:$n,type:Zn,depthTexture:new ks(m.textureWidth,m.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new Wt(d.framebufferWidth,d.framebufferHeight,{format:$n,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(l),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V($){for(let J=0;J<$.removed.length;J++){let le=$.removed[J],Ce=M.indexOf(le);Ce>=0&&(M[Ce]=null,v[Ce].disconnect(le))}for(let J=0;J<$.added.length;J++){let le=$.added[J],Ce=M.indexOf(le);if(Ce===-1){for(let ke=0;ke<v.length;ke++)if(ke>=M.length){M.push(le),Ce=ke;break}else if(M[ke]===null){M[ke]=le,Ce=ke;break}if(Ce===-1)break}let Se=v[Ce];Se&&Se.connect(le)}}let O=new H,k=new H;function z($,J,le){O.setFromMatrixPosition(J.matrixWorld),k.setFromMatrixPosition(le.matrixWorld);let Ce=O.distanceTo(k),Se=J.projectionMatrix.elements,ke=le.projectionMatrix.elements,we=Se[14]/(Se[10]-1),Je=Se[14]/(Se[10]+1),qe=(Se[9]+1)/Se[5],Fe=(Se[9]-1)/Se[5],ne=(Se[8]-1)/Se[0],be=(ke[8]+1)/ke[0],j=we*ne,oe=we*be,ee=Ce/(-ne+be),he=ee*-ne;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(he),$.translateZ(ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let F=we+ee,ve=Je+ee,te=j-he,N=oe+(Ce-he),I=qe*Je/ve*F,G=Fe*Je/ve*F;$.projectionMatrix.makePerspective(te,N,I,G,F,ve),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function W($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,le=$.far;b.texture!==null&&(b.depthNear>0&&(J=b.depthNear),b.depthFar>0&&(le=b.depthFar)),C.near=A.near=T.near=J,C.far=A.far=T.far=le,(P!==C.near||L!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,L=C.far),C.layers.mask=$.layers.mask|6,T.layers.mask=C.layers.mask&-5,A.layers.mask=C.layers.mask&-3;let Ce=$.parent,Se=C.cameras;W(C,Ce);for(let ke=0;ke<Se.length;ke++)W(Se[ke],Ce);Se.length===2?z(C,T,A):C.projectionMatrix.copy(T.projectionMatrix),S===null&&$.isPerspectiveCamera&&(S={camera:$,fov:$.fov,zoom:$.zoom}),ce($,C,Ce)};function ce($,J,le){le===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(le.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ma*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(m===null&&d===null))return c},this.setFoveation=function($){c=$,m!==null&&(m.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)},this.getCameraTexture=function($){return a[$]};let Ne=null;function Oe($,J){if(h=J.getViewerPose(u||o),_=J,h!==null){let le=h.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let Ce=!1;le.length!==C.cameras.length&&(C.cameras.length=0,Ce=!0);for(let Je=0;Je<le.length;Je++){let qe=le[Je],Fe=null;if(d!==null)Fe=d.getViewport(qe);else{let be=g.getViewSubImage(m,qe);Fe=be.viewport,Je===0&&(e.setRenderTargetTextures(f,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(f))}let ne=R[Je];ne===void 0&&(ne=new kn,ne.layers.enable(Je),ne.viewport=new pt,R[Je]=ne),ne.matrix.fromArray(qe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(qe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Je===0&&(C.matrix.copy(ne.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ce===!0&&C.cameras.push(ne)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=n.getBinding();let Je=g.getDepthInformation(le[0]);Je&&Je.isValid&&Je.texture&&b.init(Je,s.renderState)}if(Se&&Se.includes("camera-access")&&E){e.state.unbindTexture(),g=n.getBinding();for(let Je=0;Je<le.length;Je++){let qe=le[Je].camera;if(qe){let Fe=a[qe];Fe||(Fe=new Ea,a[qe]=Fe);let ne=g.getCameraImage(qe);Fe.sourceTexture=ne}}}}for(let le=0;le<v.length;le++){let Ce=M[le],Se=v[le];Ce!==null&&Se!==void 0&&Se.update(Ce,J,u||o)}Ne&&Ne($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let Ee=new $p;Ee.setAnimationLoop(Oe),this.setAnimationLoop=function($){Ne=$},this.dispose=function(){}}},Mb=new Qe,tm=new gt;tm.set(-1,0,0,0,1,0,0,0,1);function Sb(i,e){function t(b,a){b.matrixAutoUpdate===!0&&b.updateMatrix(),a.value.copy(b.matrix)}function n(b,a){a.color.getRGB(b.fogColor.value,Cf(i)),a.isFog?(b.fogNear.value=a.near,b.fogFar.value=a.far):a.isFogExp2&&(b.fogDensity.value=a.density)}function s(b,a,x,p,f){a.isNodeMaterial?a.uniformsNeedUpdate=!1:a.isMeshBasicMaterial?r(b,a):a.isMeshLambertMaterial?(r(b,a),a.envMap&&(b.envMapIntensity.value=a.envMapIntensity)):a.isMeshToonMaterial?(r(b,a),g(b,a)):a.isMeshPhongMaterial?(r(b,a),h(b,a),a.envMap&&(b.envMapIntensity.value=a.envMapIntensity)):a.isMeshStandardMaterial?(r(b,a),m(b,a),a.isMeshPhysicalMaterial&&d(b,a,f)):a.isMeshMatcapMaterial?(r(b,a),_(b,a)):a.isMeshDepthMaterial?r(b,a):a.isMeshDistanceMaterial?(r(b,a),E(b,a)):a.isMeshNormalMaterial?r(b,a):a.isLineBasicMaterial?(o(b,a),a.isLineDashedMaterial&&l(b,a)):a.isPointsMaterial?c(b,a,x,p):a.isSpriteMaterial?u(b,a):a.isShadowMaterial?(b.color.value.copy(a.color),b.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}function r(b,a){b.opacity.value=a.opacity,a.color&&b.diffuse.value.copy(a.color),a.emissive&&b.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(b.map.value=a.map,t(a.map,b.mapTransform)),a.alphaMap&&(b.alphaMap.value=a.alphaMap,t(a.alphaMap,b.alphaMapTransform)),a.bumpMap&&(b.bumpMap.value=a.bumpMap,t(a.bumpMap,b.bumpMapTransform),b.bumpScale.value=a.bumpScale,a.side===Hn&&(b.bumpScale.value*=-1)),a.normalMap&&(b.normalMap.value=a.normalMap,t(a.normalMap,b.normalMapTransform),b.normalScale.value.copy(a.normalScale),a.side===Hn&&b.normalScale.value.negate()),a.displacementMap&&(b.displacementMap.value=a.displacementMap,t(a.displacementMap,b.displacementMapTransform),b.displacementScale.value=a.displacementScale,b.displacementBias.value=a.displacementBias),a.emissiveMap&&(b.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,b.emissiveMapTransform)),a.specularMap&&(b.specularMap.value=a.specularMap,t(a.specularMap,b.specularMapTransform)),a.alphaTest>0&&(b.alphaTest.value=a.alphaTest);let x=e.get(a),p=x.envMap,f=x.envMapRotation;p&&(b.envMap.value=p,b.envMapRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(f)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(tm),b.reflectivity.value=a.reflectivity,b.ior.value=a.ior,b.refractionRatio.value=a.refractionRatio),a.lightMap&&(b.lightMap.value=a.lightMap,b.lightMapIntensity.value=a.lightMapIntensity,t(a.lightMap,b.lightMapTransform)),a.aoMap&&(b.aoMap.value=a.aoMap,b.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,b.aoMapTransform))}function o(b,a){b.diffuse.value.copy(a.color),b.opacity.value=a.opacity,a.map&&(b.map.value=a.map,t(a.map,b.mapTransform))}function l(b,a){b.dashSize.value=a.dashSize,b.totalSize.value=a.dashSize+a.gapSize,b.scale.value=a.scale}function c(b,a,x,p){b.diffuse.value.copy(a.color),b.opacity.value=a.opacity,b.size.value=a.size*x,b.scale.value=p*.5,a.map&&(b.map.value=a.map,t(a.map,b.uvTransform)),a.alphaMap&&(b.alphaMap.value=a.alphaMap,t(a.alphaMap,b.alphaMapTransform)),a.alphaTest>0&&(b.alphaTest.value=a.alphaTest)}function u(b,a){b.diffuse.value.copy(a.color),b.opacity.value=a.opacity,b.rotation.value=a.rotation,a.map&&(b.map.value=a.map,t(a.map,b.mapTransform)),a.alphaMap&&(b.alphaMap.value=a.alphaMap,t(a.alphaMap,b.alphaMapTransform)),a.alphaTest>0&&(b.alphaTest.value=a.alphaTest)}function h(b,a){b.specular.value.copy(a.specular),b.shininess.value=Math.max(a.shininess,1e-4)}function g(b,a){a.gradientMap&&(b.gradientMap.value=a.gradientMap)}function m(b,a){b.metalness.value=a.metalness,a.metalnessMap&&(b.metalnessMap.value=a.metalnessMap,t(a.metalnessMap,b.metalnessMapTransform)),b.roughness.value=a.roughness,a.roughnessMap&&(b.roughnessMap.value=a.roughnessMap,t(a.roughnessMap,b.roughnessMapTransform)),a.envMap&&(b.envMapIntensity.value=a.envMapIntensity)}function d(b,a,x){b.ior.value=a.ior,a.sheen>0&&(b.sheenColor.value.copy(a.sheenColor).multiplyScalar(a.sheen),b.sheenRoughness.value=a.sheenRoughness,a.sheenColorMap&&(b.sheenColorMap.value=a.sheenColorMap,t(a.sheenColorMap,b.sheenColorMapTransform)),a.sheenRoughnessMap&&(b.sheenRoughnessMap.value=a.sheenRoughnessMap,t(a.sheenRoughnessMap,b.sheenRoughnessMapTransform))),a.clearcoat>0&&(b.clearcoat.value=a.clearcoat,b.clearcoatRoughness.value=a.clearcoatRoughness,a.clearcoatMap&&(b.clearcoatMap.value=a.clearcoatMap,t(a.clearcoatMap,b.clearcoatMapTransform)),a.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=a.clearcoatRoughnessMap,t(a.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),a.clearcoatNormalMap&&(b.clearcoatNormalMap.value=a.clearcoatNormalMap,t(a.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(a.clearcoatNormalScale),a.side===Hn&&b.clearcoatNormalScale.value.negate())),a.dispersion>0&&(b.dispersion.value=a.dispersion),a.retroreflectivity>0&&(b.retroreflectivity.value=a.retroreflectivity),a.iridescence>0&&(b.iridescence.value=a.iridescence,b.iridescenceIOR.value=a.iridescenceIOR,b.iridescenceThicknessMinimum.value=a.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=a.iridescenceThicknessRange[1],a.iridescenceMap&&(b.iridescenceMap.value=a.iridescenceMap,t(a.iridescenceMap,b.iridescenceMapTransform)),a.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=a.iridescenceThicknessMap,t(a.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),a.transmission>0&&(b.transmission.value=a.transmission,b.transmissionSamplerMap.value=x.texture,b.transmissionSamplerSize.value.set(x.width,x.height),a.transmissionMap&&(b.transmissionMap.value=a.transmissionMap,t(a.transmissionMap,b.transmissionMapTransform)),b.thickness.value=a.thickness,a.thicknessMap&&(b.thicknessMap.value=a.thicknessMap,t(a.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=a.attenuationDistance,b.attenuationColor.value.copy(a.attenuationColor)),a.anisotropy>0&&(b.anisotropyVector.value.set(a.anisotropy*Math.cos(a.anisotropyRotation),a.anisotropy*Math.sin(a.anisotropyRotation)),a.anisotropyMap&&(b.anisotropyMap.value=a.anisotropyMap,t(a.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=a.specularIntensity,b.specularColor.value.copy(a.specularColor),a.specularColorMap&&(b.specularColorMap.value=a.specularColorMap,t(a.specularColorMap,b.specularColorMapTransform)),a.specularIntensityMap&&(b.specularIntensityMap.value=a.specularIntensityMap,t(a.specularIntensityMap,b.specularIntensityMapTransform))}function _(b,a){a.matcap&&(b.matcap.value=a.matcap)}function E(b,a){let x=e.get(a).light;b.referencePosition.value.setFromMatrixPosition(x.matrixWorld),b.nearDistance.value=x.shadow.camera.near,b.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Eb(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(f,v){let M=v.program;n.uniformBlockBinding(f,M)}function u(f,v){let M=s[f.id];M===void 0&&(b(f),M=h(f),s[f.id]=M,f.addEventListener("dispose",x));let w=v.program;n.updateUBOMapping(f,w);let y=e.render.frame;r[f.id]!==y&&(m(f),r[f.id]=y)}function h(f){let v=g();f.__bindingPointIndex=v;let M=i.createBuffer(),w=f.__size,y=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function g(){for(let f=0;f<l;f++)if(o.indexOf(f)===-1)return o.push(f),f;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(f){let v=s[f.id],M=f.uniforms,w=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let y=0,S=M.length;y<S;y++){let T=M[y];if(Array.isArray(T))for(let A=0,R=T.length;A<R;A++)d(T[A],y,A,w);else d(T,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(f,v,M,w){if(E(f,v,M,w)===!0){let y=f.__offset,S=f.value;if(Array.isArray(S)){let T=0;for(let A=0;A<S.length;A++){let R=S[A],C=a(R);_(R,f.__data,T),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(T+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(S,f.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,f.__data)}}function _(f,v,M){typeof f=="number"||typeof f=="boolean"?v[0]=f:f.isMatrix3?(v[0]=f.elements[0],v[1]=f.elements[1],v[2]=f.elements[2],v[3]=0,v[4]=f.elements[3],v[5]=f.elements[4],v[6]=f.elements[5],v[7]=0,v[8]=f.elements[6],v[9]=f.elements[7],v[10]=f.elements[8],v[11]=0):ArrayBuffer.isView(f)?v.set(new f.constructor(f.buffer,f.byteOffset,v.length)):f.toArray(v,M)}function E(f,v,M,w){let y=f.value,S=v+"_"+M;if(w[S]===void 0)return typeof y=="number"||typeof y=="boolean"?w[S]=y:ArrayBuffer.isView(y)?w[S]=y.slice():w[S]=y.clone(),!0;{let T=w[S];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return w[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function b(f){let v=f.uniforms,M=0,w=16;for(let S=0,T=v.length;S<T;S++){let A=Array.isArray(v[S])?v[S]:[v[S]];for(let R=0,C=A.length;R<C;R++){let P=A[R],L=Array.isArray(P.value)?P.value:[P.value];for(let D=0,B=L.length;D<B;D++){let V=L[D],O=a(V),k=M%w,z=k%O.boundary,W=k+z;M+=z,W!==0&&w-W<O.storage&&(M+=w-W),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=O.storage}}}let y=M%w;return y>0&&(M+=w-y),f.__size=M,f.__cache={},this}function a(f){let v={boundary:0,storage:0};return typeof f=="number"||typeof f=="boolean"?(v.boundary=4,v.storage=4):f.isVector2?(v.boundary=8,v.storage=8):f.isVector3||f.isColor?(v.boundary=16,v.storage=12):f.isVector4?(v.boundary=16,v.storage=16):f.isMatrix3?(v.boundary=48,v.storage=48):f.isMatrix4?(v.boundary=64,v.storage=64):f.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(f)?(v.boundary=16,v.storage=f.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",f),v}function x(f){let v=f.target;v.removeEventListener("dispose",x);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let f in s)i.deleteBuffer(s[f]);o=[],s={},r={}}return{bind:c,update:u,dispose:p}}var Tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function wb(){return cs===null&&(cs=new Xi(Tb,16,16,Zs,Tn),cs.name="DFG_LUT",cs.minFilter=Ut,cs.magFilter=Ut,cs.wrapS=is,cs.wrapT=is,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var Fu=class{constructor(e={}){let{canvas:t=vp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:d=Zn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let E=d,b=new Set([jc,Jc,Kc]),a=new Set([Zn,$i,Mo,So,Zc,$c]),x=new Uint32Array(4),p=new Int32Array(4),f=new H,v=null,M=null,w=[],y=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,A=!1,R=null,C=null,P=null,L=null;this._outputColorSpace=Gt;let D=0,B=0,V=null,O=-1,k=null,z=new pt,W=new pt,ce=null,Ne=new xe(0),Oe=0,Ee=t.width,$=t.height,J=1,le=null,Ce=null,Se=new pt(0,0,Ee,$),ke=new pt(0,0,Ee,$),we=!1,Je=new ho,qe=!1,Fe=!1,ne=new Qe,be=new H,j=new pt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function he(){return V===null?J:1}let F=n;function ve(U,K){return t.getContext(U,K)}let te,N,I,G,Y,Q,ue,me,ae,de,Ie,Ye,Te,Le,Be,et,at,Z,Ae,pe,De,X,ye;try{let U={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Vt,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",mt,!1),F===null){let K="webgl2";if(F=ve(K,U),F===null)throw ve(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(U){throw t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),dt("WebGLRenderer: "+U.message),U}function st(){te=new Dy(F),te.init(),De=new yb(F,te),N=new Sy(F,te,e,De),I=new vb(F,te),N.reversedDepthBuffer&&m&&I.buffers.depth.setReversed(!0),C=F.createFramebuffer(),P=F.createFramebuffer(),L=F.createFramebuffer(),G=new Fy(F),Y=new ib,Q=new xb(F,te,I,Y,N,De,G),ue=new Ly(T),me=new Ov(F),X=new by(F,me),ae=new Ny(F,me,G,X),de=new Oy(F,ae,me,X,G),Z=new By(F,N,Q),Be=new Ey(Y),Ie=new nb(T,ue,te,N,X,Be),Ye=new Sb(T,Y),Te=new rb,Le=new hb(te),at=new _y(T,ue,I,de,_,c),et=new gb(T,de,N),ye=new Eb(F,G,N,I),Ae=new My(F,te,G),pe=new Uy(F,te,G),G.programs=Ie.programs,T.capabilities=N,T.extensions=te,T.properties=Y,T.renderLists=Te,T.shadowMap=et,T.state=I,T.info=G}E!==Zn&&(S=new ky(E,t.width,t.height,l,s,r));let tt=new jf(T,F);this.xr=tt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let U=te.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=te.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(U){U!==void 0&&(J=U,this.setSize(Ee,$,!1))},this.getSize=function(U){return U.set(Ee,$)},this.setSize=function(U,K,fe=!0){if(tt.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=U,$=K,t.width=Math.floor(U*J),t.height=Math.floor(K*J),fe===!0&&(t.style.width=U+"px",t.style.height=K+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(Ee*J,$*J).floor()},this.setDrawingBufferSize=function(U,K,fe){Ee=U,$=K,J=fe,t.width=Math.floor(U*fe),t.height=Math.floor(K*fe),this.setViewport(0,0,U,K)},this.setEffects=function(U){if(E===Zn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let K=0;K<U.length;K++)if(U[K].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(z)},this.getViewport=function(U){return U.copy(Se)},this.setViewport=function(U,K,fe,re){U.isVector4?Se.set(U.x,U.y,U.z,U.w):Se.set(U,K,fe,re),I.viewport(z.copy(Se).multiplyScalar(J).round())},this.getScissor=function(U){return U.copy(ke)},this.setScissor=function(U,K,fe,re){U.isVector4?ke.set(U.x,U.y,U.z,U.w):ke.set(U,K,fe,re),I.scissor(W.copy(ke).multiplyScalar(J).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(U){I.setScissorTest(we=U)},this.setOpaqueSort=function(U){le=U},this.setTransparentSort=function(U){Ce=U},this.getClearColor=function(U){return U.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(U=!0,K=!0,fe=!0){let re=0;if(U){let se=!1;if(V!==null){let Ve=V.texture.format;se=b.has(Ve)}if(se){let Ve=V.texture.type,Xe=a.has(Ve),He=at.getClearColor(),Ue=at.getClearAlpha(),je=He.r,_t=He.g,bt=He.b;Xe?(x[0]=je,x[1]=_t,x[2]=bt,x[3]=Ue,F.clearBufferuiv(F.COLOR,0,x)):(p[0]=je,p[1]=_t,p[2]=bt,p[3]=Ue,F.clearBufferiv(F.COLOR,0,p))}else re|=F.COLOR_BUFFER_BIT}K&&(re|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(re|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&F.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),R=U},this.dispose=function(){t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),at.dispose(),Te.dispose(),Le.dispose(),Y.dispose(),ue.dispose(),de.dispose(),X.dispose(),ye.dispose(),Ie.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",rr),tt.removeEventListener("sessionend",Ur),Fi.stop()};function Vt(U){U.preventDefault(),Af("WebGLRenderer: Context Lost."),A=!0}function Ke(){Af("WebGLRenderer: Context Restored."),A=!1;let U=G.autoReset,K=et.enabled,fe=et.autoUpdate,re=et.needsUpdate,se=et.type;st(),G.autoReset=U,et.enabled=K,et.autoUpdate=fe,et.needsUpdate=re,et.type=se}function mt(U){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function St(U){let K=U.target;K.removeEventListener("dispose",St),Ft(K)}function Ft(U){hh(U),Y.remove(U)}function hh(U){let K=Y.get(U).programs;K!==void 0&&(K.forEach(function(fe){Ie.releaseProgram(fe)}),U.isShaderMaterial&&Ie.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,fe,re,se,Ve){K===null&&(K=oe);let Xe=se.isMesh&&se.matrixWorld.determinantAffine()<0,He=Tl(U,K,fe,re,se);I.setMaterial(re,Xe);let Ue=fe.index,je=1;if(re.wireframe===!0){if(Ue=ae.getWireframeAttribute(fe),Ue===void 0)return;je=2}let _t=fe.drawRange,bt=fe.attributes.position,$e=_t.start*je,Nt=(_t.start+_t.count)*je;Ve!==null&&($e=Math.max($e,Ve.start*je),Nt=Math.min(Nt,(Ve.start+Ve.count)*je)),Ue!==null?($e=Math.max($e,0),Nt=Math.min(Nt,Ue.count)):bt!=null&&($e=Math.max($e,0),Nt=Math.min(Nt,bt.count));let dn=Nt-$e;if(dn<0||dn===1/0)return;X.setup(se,re,He,fe,Ue);let Bt,zt=Ae;if(Ue!==null&&(Bt=me.get(Ue),zt=pe,zt.setIndex(Bt)),se.isMesh)re.wireframe===!0?(I.setLineWidth(re.wireframeLinewidth*he()),zt.setMode(F.LINES)):zt.setMode(F.TRIANGLES);else if(se.isLine){let pn=re.linewidth;pn===void 0&&(pn=1),I.setLineWidth(pn*he()),se.isLineSegments?zt.setMode(F.LINES):se.isLineLoop?zt.setMode(F.LINE_LOOP):zt.setMode(F.LINE_STRIP)}else se.isPoints?zt.setMode(F.POINTS):se.isSprite&&zt.setMode(F.TRIANGLES);if(se.isBatchedMesh)if(te.get("WEBGL_multi_draw"))zt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let pn=se._multiDrawStarts,We=se._multiDrawCounts,Ln=se._multiDrawCount,Et=Ue?me.get(Ue).bytesPerElement:1,jn=Y.get(re).currentProgram.getUniforms();for(let di=0;di<Ln;di++)jn.setValue(F,"_gl_DrawID",di),zt.render(pn[di]/Et,We[di])}else if(se.isInstancedMesh)zt.renderInstances($e,dn,se.count);else if(fe.isInstancedBufferGeometry){let pn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,We=Math.min(fe.instanceCount,pn);zt.renderInstances($e,dn,We)}else zt.render($e,dn)};function Ls(U,K,fe,re){R!==null&&U.isNodeMaterial&&R.setObject(re,U),qe===!0&&Be.setState(U,fe,!1),U.transparent===!0&&U.side===yn&&U.forceSinglePass===!1?(U.side=Hn,U.needsUpdate=!0,ar(U,K,re),U.side=ls,U.needsUpdate=!0,ar(U,K,re),U.side=yn):ar(U,K,re)}this.compile=function(U,K,fe=null){fe===null&&(fe=U),R!==null&&R.renderStart(U,K,fe),M=Le.get(fe),M.init(K),y.push(M),fe.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(M.pushLight(se),se.castShadow&&M.pushShadow(se))}),U!==fe&&U.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(M.pushLight(se),se.castShadow&&M.pushShadow(se))}),M.setupLights(),R!==null&&R.updateLights(M.state.lightsArray),Fe=this.localClippingEnabled,qe=Be.init(this.clippingPlanes,Fe),qe===!0&&Be.setGlobalState(this.clippingPlanes,K),R!==null&&et.render(M.state.shadowsArray,fe,K);let re=new Set;return U.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Ve=se.material;if(Ve)if(Array.isArray(Ve))for(let Xe=0;Xe<Ve.length;Xe++){let He=Ve[Xe];Ls(He,fe,K,se),re.add(He)}else Ls(Ve,fe,K,se),re.add(Ve)}),M=y.pop(),R!==null&&R.renderEnd(),re},this.compileAsync=function(U,K,fe=null){let re=this.compile(U,K,fe);return new Promise(se=>{function Ve(){if(re.forEach(function(Xe){let Ue=Y.get(Xe).currentProgram;(Ue===void 0||Ue.isReady())&&re.delete(Xe)}),re.size===0){se(U);return}setTimeout(Ve,10)}te.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let ps=null;function Jn(U){ps&&ps(U)}function rr(){Fi.stop()}function Ur(){Fi.start()}let Fi=new $p;Fi.setAnimationLoop(Jn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(U){ps=U,tt.setAnimationLoop(U),U===null?Fi.stop():Fi.start()},tt.addEventListener("sessionstart",rr),tt.addEventListener("sessionend",Ur),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;R!==null&&R.renderStart(U,K);let fe=tt.enabled===!0&&tt.isPresenting===!0,re=S!==null&&(V===null||fe)&&S.begin(T,V);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(K),K=tt.getCamera()),U.isScene===!0&&U.onBeforeRender(T,U,K,V),M=Le.get(U,y.length),M.init(K),M.state.textureUnits=Q.getTextureUnits(),y.push(M),ne.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Je.setFromProjectionMatrix(ne,Wi,K.reversedDepth),Fe=this.localClippingEnabled,qe=Be.init(this.clippingPlanes,Fe),v=Te.get(U,w.length),v.init(),w.push(v),tt.enabled===!0&&tt.isPresenting===!0){let Xe=T.xr.getDepthSensingMesh();Xe!==null&&$o(Xe,K,-1/0,T.sortObjects)}$o(U,K,0,T.sortObjects),v.finish(),R!==null&&R.updateLights(M.state.lightsArray),T.sortObjects===!0&&v.sort(le,Ce),ee=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ee&&at.addToRenderList(v,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Be.beginShadows();let se=M.state.shadowsArray;if(et.render(se,U,K),qe===!0&&Be.endShadows(),(re&&S.hasRenderPass())===!1){let Xe=v.opaque,He=v.transmissive;if(M.setupLights(),K.isArrayCamera){let Ue=K.cameras;if(He.length>0)for(let je=0,_t=Ue.length;je<_t;je++){let bt=Ue[je];Sl(Xe,He,U,bt)}ee&&at.render(U);for(let je=0,_t=Ue.length;je<_t;je++){let bt=Ue[je];Ml(v,U,bt,bt.viewport)}}else He.length>0&&Sl(Xe,He,U,K),ee&&at.render(U),Ml(v,U,K)}V!==null&&B===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),re&&S.end(T),U.isScene===!0&&U.onAfterRender(T,U,K),X.resetDefaultState(),O=-1,k=null,y.pop(),y.length>0?(M=y[y.length-1],Q.setTextureUnits(M.state.textureUnits),qe===!0&&Be.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,R!==null&&R.renderEnd()};function $o(U,K,fe,re){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)fe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLightProbeGrid)M.pushLightProbeGrid(U);else if(U.isLight)M.pushLight(U),U.castShadow&&M.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(Je)){re&&j.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ne);let Xe=de.update(U),He=U.material;He.visible&&v.push(U,Xe,He,fe,j.z,null,K)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(Je))){let Xe=de.update(U),He=U.material;if(re&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),j.copy(U.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),j.copy(Xe.boundingSphere.center)),j.applyMatrix4(U.matrixWorld).applyMatrix4(ne)),Array.isArray(He)){let Ue=Xe.groups;for(let je=0,_t=Ue.length;je<_t;je++){let bt=Ue[je],$e=He[bt.materialIndex];$e&&$e.visible&&v.push(U,Xe,$e,fe,j.z,bt,K)}}else He.visible&&v.push(U,Xe,He,fe,j.z,null,K)}}let Ve=U.children;for(let Xe=0,He=Ve.length;Xe<He;Xe++)$o(Ve[Xe],K,fe,re)}function Ml(U,K,fe,re){let{opaque:se,transmissive:Ve,transparent:Xe}=U;M.setupLightsView(fe),qe===!0&&Be.setGlobalState(T.clippingPlanes,fe),re&&I.viewport(z.copy(re)),se.length>0&&ms(se,K,fe),Ve.length>0&&ms(Ve,K,fe),Xe.length>0&&ms(Xe,K,fe),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Sl(U,K,fe,re){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[re.id]===void 0){let $e=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[re.id]=new Wt(1,1,{generateMipmaps:!0,type:$e?Tn:Zn,minFilter:An,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}let Ve=M.state.transmissionRenderTarget[re.id],Xe=re.viewport||z;Ve.setSize(Xe.z*T.transmissionResolutionScale,Xe.w*T.transmissionResolutionScale);let He=T.getRenderTarget(),Ue=T.getActiveCubeFace(),je=T.getActiveMipmapLevel();T.setRenderTarget(Ve),T.getClearColor(Ne),Oe=T.getClearAlpha(),Oe<1&&T.setClearColor(16777215,.5),T.clear(),ee&&at.render(fe);let _t=T.toneMapping;T.toneMapping=Zi;let bt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),M.setupLightsView(re),qe===!0&&Be.setGlobalState(T.clippingPlanes,re),ms(U,fe,re),Q.updateMultisampleRenderTarget(Ve),Q.updateRenderTargetMipmap(Ve),te.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Nt=0,dn=K.length;Nt<dn;Nt++){let Bt=K[Nt],{object:zt,geometry:pn,material:We,group:Ln}=Bt;if(We.side===yn&&zt.layers.test(re.layers)){let Et=We.side;We.side=Hn,We.needsUpdate=!0,or(zt,fe,re,pn,We,Ln),We.side=Et,We.needsUpdate=!0,$e=!0}}$e===!0&&(Q.updateMultisampleRenderTarget(Ve),Q.updateRenderTargetMipmap(Ve))}T.setRenderTarget(He,Ue,je),T.setClearColor(Ne,Oe),bt!==void 0&&(re.viewport=bt),T.toneMapping=_t}function ms(U,K,fe){let re=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Ve=U.length;se<Ve;se++){let Xe=U[se],{object:He,geometry:Ue,group:je}=Xe,_t=Xe.material;_t.allowOverride===!0&&re!==null&&(_t=re),He.layers.test(fe.layers)&&or(He,K,fe,Ue,_t,je)}}function or(U,K,fe,re,se,Ve){R!==null&&se.isNodeMaterial&&R.setObject(U,se),U.onBeforeRender(T,K,fe,re,se,Ve),U.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),se.onBeforeRender(T,K,fe,re,U,Ve),se.transparent===!0&&se.side===yn&&se.forceSinglePass===!1?(se.side=Hn,se.needsUpdate=!0,T.renderBufferDirect(fe,K,re,se,U,Ve),se.side=ls,se.needsUpdate=!0,T.renderBufferDirect(fe,K,re,se,U,Ve),se.side=yn):T.renderBufferDirect(fe,K,re,se,U,Ve),U.onAfterRender(T,K,fe,re,se,Ve)}function ar(U,K,fe){K.isScene!==!0&&(K=oe);let re=Y.get(U),se=M.state.lights,Ve=M.state.shadowsArray,Xe=se.state.version,He=Ie.getParameters(U,se.state,Ve,K,fe,M.state.lightProbeGridArray),Ue=Ie.getProgramCacheKey(He),je=re.programs;re.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?K.environment:null,re.fog=K.fog;let _t=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;re.envMap=ue.get(U.envMap||re.environment,_t),re.envMapRotation=re.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,je===void 0&&(U.addEventListener("dispose",St),je=new Map,re.programs=je);let bt=je.get(Ue);if(bt!==void 0){if(re.currentProgram===bt&&re.lightsStateVersion===Xe)return Ko(U,He),bt}else He.uniforms=Ie.getUniforms(U),R!==null&&U.isNodeMaterial&&R.build(U,fe,He),U.onBeforeCompile(He,T),bt=Ie.acquireProgram(He,Ue),je.set(Ue,bt),re.uniforms=He.uniforms;let $e=re.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&($e.clippingPlanes=Be.uniform),Ko(U,He),re.needsLights=Jo(U),re.lightsStateVersion=Xe,re.needsLights&&($e.ambientLightColor.value=se.state.ambient,$e.lightProbe.value=se.state.probe,$e.sunLights.value=se.state.sun,$e.sunLightShadows.value=se.state.sunShadow,$e.directionalLights.value=se.state.directional,$e.directionalLightShadows.value=se.state.directionalShadow,$e.spotLights.value=se.state.spot,$e.spotLightShadows.value=se.state.spotShadow,$e.rectAreaLights.value=se.state.rectArea,$e.ltc_1.value=se.state.rectAreaLTC1,$e.ltc_2.value=se.state.rectAreaLTC2,$e.pointLights.value=se.state.point,$e.pointLightShadows.value=se.state.pointShadow,$e.hemisphereLights.value=se.state.hemi,$e.sunShadowMatrix.value=se.state.sunShadowMatrix,$e.sunShadowCascade.value=se.state.sunShadowCascade,$e.directionalShadowMatrix.value=se.state.directionalShadowMatrix,$e.spotLightMatrix.value=se.state.spotLightMatrix,$e.spotLightMap.value=se.state.spotLightMap,$e.pointShadowMatrix.value=se.state.pointShadowMatrix),re.lightProbeGrid=M.state.lightProbeGridArray.length>0,re.currentProgram=bt,re.uniformsList=null,bt}function an(U){if(U.uniformsList===null){let K=U.currentProgram.getUniforms();U.uniformsList=Ao.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function Ko(U,K){let fe=Y.get(U);fe.outputColorSpace=K.outputColorSpace,fe.batching=K.batching,fe.batchingColor=K.batchingColor,fe.instancing=K.instancing,fe.instancingColor=K.instancingColor,fe.instancingMorph=K.instancingMorph,fe.skinning=K.skinning,fe.morphTargets=K.morphTargets,fe.morphNormals=K.morphNormals,fe.morphColors=K.morphColors,fe.morphTargetsCount=K.morphTargetsCount,fe.numClippingPlanes=K.numClippingPlanes,fe.numIntersection=K.numClipIntersection,fe.vertexAlphas=K.vertexAlphas,fe.vertexTangents=K.vertexTangents,fe.toneMapping=K.toneMapping}function El(U,K){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;f.setFromMatrixPosition(K.matrixWorld);for(let fe=0,re=U.length;fe<re;fe++){let se=U[fe];if(se.texture!==null&&se.boundingBox.containsPoint(f))return se}return null}function Tl(U,K,fe,re,se){K.isScene!==!0&&(K=oe),Q.resetTextureUnits();let Ve=K.fog,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?K.environment:null,He=V===null?T.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ct.workingColorSpace,Ue=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,je=ue.get(re.envMap||Xe,Ue),_t=re.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,bt=!!fe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),$e=!!fe.morphAttributes.position,Nt=!!fe.morphAttributes.normal,dn=!!fe.morphAttributes.color,Bt=Zi;re.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Bt=T.toneMapping);let zt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,pn=zt!==void 0?zt.length:0,We=Y.get(re),Ln=M.state.lights;if(qe===!0&&(Fe===!0||U!==k)){let lt=U===k&&re.id===O;Be.setState(re,U,lt)}let Et=!1;re.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ln.state.version||We.outputColorSpace!==He||se.isBatchedMesh&&We.batching===!1||!se.isBatchedMesh&&We.batching===!0||se.isBatchedMesh&&We.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&We.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&We.instancing===!1||!se.isInstancedMesh&&We.instancing===!0||se.isSkinnedMesh&&We.skinning===!1||!se.isSkinnedMesh&&We.skinning===!0||se.isInstancedMesh&&We.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&We.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&We.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&We.instancingMorph===!1&&se.morphTexture!==null||We.envMap!==je||re.fog===!0&&We.fog!==Ve||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Be.numPlanes||We.numIntersection!==Be.numIntersection)||We.vertexAlphas!==_t||We.vertexTangents!==bt||We.morphTargets!==$e||We.morphNormals!==Nt||We.morphColors!==dn||We.toneMapping!==Bt||We.morphTargetsCount!==pn||!!We.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,We.__version=re.version);let jn=We.currentProgram;Et===!0&&(jn=ar(re,K,se),R&&re.isNodeMaterial&&R.onUpdateProgram(re,jn,We));let di=!1,ln=!1,gs=!1,Lt=jn.getUniforms(),Xt=We.uniforms;if(I.useProgram(jn.program)&&(di=!0,ln=!0,gs=!0),re.id!==O&&(O=re.id,ln=!0),We.needsLights){let lt=El(M.state.lightProbeGridArray,se);We.lightProbeGrid!==lt&&(We.lightProbeGrid=lt,ln=!0)}if(di||k!==U){I.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Lt.setValue(F,"projectionMatrix",U.projectionMatrix),Lt.setValue(F,"viewMatrix",U.matrixWorldInverse);let Bi=Lt.map.cameraPosition;Bi!==void 0&&Bi.setValue(F,be.setFromMatrixPosition(U.matrixWorld)),N.logarithmicDepthBuffer&&Lt.setValue(F,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(F,"isOrthographic",U.isOrthographicCamera===!0),k!==U&&(k=U,ln=!0,gs=!0)}if(We.needsLights&&(Ln.state.sunShadowMap.length>0&&Lt.setValue(F,"sunShadowMap",Ln.state.sunShadowMap,Q),Ln.state.directionalShadowMap.length>0&&Lt.setValue(F,"directionalShadowMap",Ln.state.directionalShadowMap,Q),Ln.state.spotShadowMap.length>0&&Lt.setValue(F,"spotShadowMap",Ln.state.spotShadowMap,Q),Ln.state.pointShadowMap.length>0&&Lt.setValue(F,"pointShadowMap",Ln.state.pointShadowMap,Q)),se.isSkinnedMesh){Lt.setOptional(F,se,"bindMatrix"),Lt.setOptional(F,se,"bindMatrixInverse");let lt=se.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),Lt.setValue(F,"boneTexture",lt.boneTexture,Q))}se.isBatchedMesh&&(Lt.setOptional(F,se,"batchingTexture"),Lt.setValue(F,"batchingTexture",se._matricesTexture,Q),Lt.setOptional(F,se,"batchingIdTexture"),Lt.setValue(F,"batchingIdTexture",se._indirectTexture,Q),Lt.setOptional(F,se,"batchingColorTexture"),se._colorsTexture!==null&&Lt.setValue(F,"batchingColorTexture",se._colorsTexture,Q));let Ti=fe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Z.update(se,fe,jn),(ln||We.receiveShadow!==se.receiveShadow)&&(We.receiveShadow=se.receiveShadow,Lt.setValue(F,"receiveShadow",se.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&K.environment!==null&&(Xt.envMapIntensity.value=K.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=wb()),ln){if(Lt.setValue(F,"toneMappingExposure",T.toneMappingExposure),We.needsLights&&fh(Xt,gs),Ve&&re.fog===!0&&Ye.refreshFogUniforms(Xt,Ve),Ye.refreshMaterialUniforms(Xt,re,J,$,M.state.transmissionRenderTarget[U.id]),We.needsLights&&We.lightProbeGrid){let lt=We.lightProbeGrid;Xt.probesSH.value=lt.texture,Xt.probesMin.value.copy(lt.boundingBox.min),Xt.probesMax.value.copy(lt.boundingBox.max),Xt.probesResolution.value.copy(lt.resolution)}Ao.upload(F,an(We),Xt,Q)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ao.upload(F,an(We),Xt,Q),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(F,"center",se.center),Lt.setValue(F,"modelViewMatrix",se.modelViewMatrix),Lt.setValue(F,"normalMatrix",se.normalMatrix),Lt.setValue(F,"modelMatrix",se.matrixWorld),re.uniformsGroups!==void 0){let lt=re.uniformsGroups;for(let Bi=0,xt=lt.length;Bi<xt;Bi++){let Vn=lt[Bi];ye.update(Vn,jn),ye.bind(Vn,jn)}}return jn}function fh(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.sunLights.needsUpdate=K,U.sunLightShadows.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function Jo(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(U,K,fe){let re=Y.get(U);re.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Y.get(U.texture).__webglTexture=K,Y.get(U.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:fe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,K){let fe=Y.get(U);fe.__webglFramebuffer=K,fe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(U,K=0,fe=0){V=U,D=K,B=fe;let re=null,se=!1,Ve=!1;if(U){let He=Y.get(U);if(He.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,He.__webglFramebuffer),z.copy(U.viewport),W.copy(U.scissor),ce=U.scissorTest,I.viewport(z),I.scissor(W),I.setScissorTest(ce),O=-1;return}else if(He.__webglFramebuffer===void 0)Q.setupRenderTarget(U);else if(He.__hasExternalTextures)Q.rebindTextures(U,Y.get(U.texture).__webglTexture,Y.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let _t=U.depthTexture;if(He.__boundDepthTexture!==_t){if(_t!==null&&Y.has(_t)&&(U.width!==_t.image.width||U.height!==_t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(U)}}let Ue=U.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ve=!0);let je=Y.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(je[K])?re=je[K][fe]:re=je[K],se=!0):U.samples>0&&Q.useMultisampledRTT(U)===!1?re=Y.get(U).__webglMultisampledFramebuffer:Array.isArray(je)?re=je[fe]:re=je,z.copy(U.viewport),W.copy(U.scissor),ce=U.scissorTest}else z.copy(Se).multiplyScalar(J).floor(),W.copy(ke).multiplyScalar(J).floor(),ce=we;if(fe!==0&&(re=C),I.bindFramebuffer(F.FRAMEBUFFER,re)&&I.drawBuffers(U,re),I.viewport(z),I.scissor(W),I.setScissorTest(ce),se){let He=Y.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+K,He.__webglTexture,fe)}else if(Ve){let He=K;for(let Ue=0;Ue<U.textures.length;Ue++){let je=Y.get(U.textures[Ue]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ue,je.__webglTexture,fe,He)}}else if(U!==null&&fe!==0){let He=Y.get(U.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,He.__webglTexture,fe)}O=-1};function zn(U){let K=Y.get(U);return(K.__readFormat!==U.format||K.__readType!==U.type)&&(K.__readFormat=U.format,K.__readType=U.type,K.__formatReadable=N.textureFormatReadable(U.format),K.__typeReadable=N.textureTypeReadable(U.type)),K}this.readRenderTargetPixels=function(U,K,fe,re,se,Ve,Xe,He=0){if(!(U&&U.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Y.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ue=Ue[Xe]),Ue){I.bindFramebuffer(F.FRAMEBUFFER,Ue);try{let je=U.textures[He],_t=je.format,bt=je.type;U.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He);let $e=zn(je);if($e.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-re&&fe>=0&&fe<=U.height-se&&F.readPixels(K,fe,re,se,De.convert(_t),De.convert(bt),Ve)}finally{let je=V!==null?Y.get(V).__webglFramebuffer:null;I.bindFramebuffer(F.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(U,K,fe,re,se,Ve,Xe,He=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Y.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ue=Ue[Xe]),Ue)if(K>=0&&K<=U.width-re&&fe>=0&&fe<=U.height-se){I.bindFramebuffer(F.FRAMEBUFFER,Ue);let je=U.textures[He],_t=je.format,bt=je.type;U.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He);let $e=zn(je);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Nt),F.bufferData(F.PIXEL_PACK_BUFFER,Ve.byteLength,F.STREAM_READ),F.readPixels(K,fe,re,se,De.convert(_t),De.convert(bt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let dn=V!==null?Y.get(V).__webglFramebuffer:null;I.bindFramebuffer(F.FRAMEBUFFER,dn);let Bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await yp(F,Bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Nt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ve),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Nt),F.deleteSync(Bt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,K=null,fe=0){let re=Math.pow(2,-fe),se=Math.floor(U.image.width*re),Ve=Math.floor(U.image.height*re),Xe=K!==null?K.x:0,He=K!==null?K.y:0;Q.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,fe,0,0,Xe,He,se,Ve),I.unbindTexture()},this.copyTextureToTexture=function(U,K,fe=null,re=null,se=0,Ve=0){let Xe,He,Ue,je,_t,bt,$e,Nt,dn,Bt=U.isCompressedTexture?U.mipmaps[Ve]:U.image;if(fe!==null)Xe=fe.max.x-fe.min.x,He=fe.max.y-fe.min.y,Ue=fe.isBox3?fe.max.z-fe.min.z:1,je=fe.min.x,_t=fe.min.y,bt=fe.isBox3?fe.min.z:0;else{let Xt=Math.pow(2,-se);Xe=Math.floor(Bt.width*Xt),He=Math.floor(Bt.height*Xt),U.isDataArrayTexture?Ue=Bt.depth:U.isData3DTexture?Ue=Math.floor(Bt.depth*Xt):Ue=1,je=0,_t=0,bt=0}re!==null?($e=re.x,Nt=re.y,dn=re.z):($e=0,Nt=0,dn=0);let zt=De.convert(K.format),pn=De.convert(K.type),We;K.isData3DTexture?(Q.setTexture3D(K,0),We=F.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Q.setTexture2DArray(K,0),We=F.TEXTURE_2D_ARRAY):(Q.setTexture2D(K,0),We=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment);let Ln=I.getParameter(F.UNPACK_ROW_LENGTH),Et=I.getParameter(F.UNPACK_IMAGE_HEIGHT),jn=I.getParameter(F.UNPACK_SKIP_PIXELS),di=I.getParameter(F.UNPACK_SKIP_ROWS),ln=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,Bt.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bt.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,je),I.pixelStorei(F.UNPACK_SKIP_ROWS,_t),I.pixelStorei(F.UNPACK_SKIP_IMAGES,bt);let gs=U.isDataArrayTexture||U.isData3DTexture,Lt=K.isDataArrayTexture||K.isData3DTexture;if(U.isDepthTexture){let Xt=Y.get(U),Ti=Y.get(K),lt=Y.get(Xt.__renderTarget),Bi=Y.get(Ti.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,lt.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let xt=0;xt<Ue;xt++)gs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,se,bt+xt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(K).__webglTexture,Ve,dn+xt)),F.blitFramebuffer(je,_t,Xe,He,$e,Nt,Xe,He,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(se!==0||U.isRenderTargetTexture||Y.has(U)){let Xt=Y.get(U),Ti=Y.get(K);I.bindFramebuffer(F.READ_FRAMEBUFFER,P),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,L);for(let lt=0;lt<Ue;lt++)gs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.__webglTexture,se,bt+lt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xt.__webglTexture,se),Lt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ti.__webglTexture,Ve,dn+lt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ti.__webglTexture,Ve),se!==0?F.blitFramebuffer(je,_t,Xe,He,$e,Nt,Xe,He,F.COLOR_BUFFER_BIT,F.NEAREST):Lt?F.copyTexSubImage3D(We,Ve,$e,Nt,dn+lt,je,_t,Xe,He):F.copyTexSubImage2D(We,Ve,$e,Nt,je,_t,Xe,He);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Lt?U.isDataTexture||U.isData3DTexture?F.texSubImage3D(We,Ve,$e,Nt,dn,Xe,He,Ue,zt,pn,Bt.data):K.isCompressedArrayTexture?F.compressedTexSubImage3D(We,Ve,$e,Nt,dn,Xe,He,Ue,zt,Bt.data):F.texSubImage3D(We,Ve,$e,Nt,dn,Xe,He,Ue,zt,pn,Bt):U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ve,$e,Nt,Xe,He,zt,pn,Bt.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ve,$e,Nt,Bt.width,Bt.height,zt,Bt.data):F.texSubImage2D(F.TEXTURE_2D,Ve,$e,Nt,Xe,He,zt,pn,Bt);I.pixelStorei(F.UNPACK_ROW_LENGTH,Ln),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et),I.pixelStorei(F.UNPACK_SKIP_PIXELS,jn),I.pixelStorei(F.UNPACK_SKIP_ROWS,di),I.pixelStorei(F.UNPACK_SKIP_IMAGES,ln),Ve===0&&K.generateMipmaps&&F.generateMipmap(We),I.unbindTexture()},this.initRenderTarget=function(U){Y.get(U).__webglFramebuffer===void 0&&Q.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Q.setTextureCube(U,0):U.isData3DTexture?Q.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Q.setTexture2DArray(U,0):Q.setTexture2D(U,0),I.unbindTexture()},this.resetState=function(){D=0,B=0,V=null,I.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}};var Zt=(i,e,t)=>i<e?e:i>t?t:i,Rt=(i,e,t)=>i+(e-i)*t,tl=i=>i*i*(3-2*i),wt=(i,e,t)=>{let n=Zt((t-i)/(e-i),0,1);return n*n*(3-2*n)},nm=1337;function im(i){nm=i|0}function Ab(i){return i=i^nm|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Pn=(i,e)=>Ab(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function yi(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Rt(Pn(t,e),Pn(t+1,e),s)}var ku=(i,e=0)=>yi(i,e)*.55+yi(i*2.03,e+7)*.3+yi(i*4.1,e+13)*.15;function Ot(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var zu=new xe,ge=i=>(zu.set(i),[zu.r,zu.g,zu.b]),Qf=(i,e,t)=>[Rt(i[0],e[0],t),Rt(i[1],e[1],t),Rt(i[2],e[2],t)],Un=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var _i=["city","sakura","coast","country","mountain","snow"],nl={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Co=1500,Hu=260,Ki=0,sl=2,Rb=-2.2,il=0;function rm(i){il=Math.max(0,_i.indexOf(i))}function $s(i){let e=Math.floor(i/Co),t=i-e*Co,n=tl(Zt((t-(Co-Hu))/Hu,0,1)),s=_i.length;return{a:_i[((e+il)%s+s)%s],b:_i[((e+il+1)%s+s)%s],t:n}}function Dt(i){let e=$s(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var sn=i=>{let e=$s(i);return e.t<.5?e.a:e.b};function om(i,e){let t=Math.floor(i/Co),n=i-t*Co,s=tl(Zt((n-(Co-Hu))/Hu,0,1)),r=_i.length;return(_i[((t+il)%r+r)%r]===e?1-s:0)+(_i[((t+il+1)%r+r)%r]===e?s:0)}function Fn(i,e){let t=$s(i);return Rt(nl[t.a][e],nl[t.b][e],t.t)}var wr=650,Ar=375,Po=i=>i*wr+Ar;function rl(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Dt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var ed={x:new Map,r:new Map,t:new Map};function td(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function Ks(i){let e=Math.round((i-Ar)/wr);return td(ed.x,e,()=>{let t=Po(e);return rl(t)?{k:e,s:t}:null})}function Cb(i){let e=Ks(i);return e?1-wt(8,45,Math.abs(i-e.s)):0}var Rr=1150,Io=820,ol=4.6,nd=i=>i*Rr+Io;function id(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Dt(i+t);if(n.country+n.sakura<.9)return!1}let e=Ks(i);return!(e&&Math.abs(e.s-i)<170)}function Pi(i){let e=Math.round((i-Io)/Rr);return td(ed.r,e,()=>{let t=nd(e);return id(t)?{k:e,s:t}:null})}function Pb(i){let e=Pi(i);return e?1-wt(30,70,Math.abs(i-e.s)):0}function Ib(i){let e=-ol;return i<11?e-1.3:i<16?Rt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Rt(e+.7,.35,(i-20)/5.5):.35}var am=1050,lm=525,vn=85,hn=125,Lb=24,Db=i=>i*am+lm;function Nb(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Dt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function Ii(i){let e=Math.round((i-lm)/am);return td(ed.t,e,()=>{let t=Db(e);return Nb(t)?{k:e,s:t}:null})}function Ub(i){let e=Ii(i);return e?1-wt(vn+20,hn+25,Math.abs(i-e.s)):0}var Vu=0,Wu=(i,e)=>{let t=i/hn;return Lb*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var hs=2,Gu=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(yi(e/300,11)-.5)*2+(yi(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Fn(e,"curv")*(1-Math.max(Cb(e),Pb(e),Ub(e)))}elevRaw(e){return Fn(e,"base")+Fn(e,"hill")*(ku(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=Ks(e);if(n){let o=1-wt(8,45,Math.abs(e-n.s));o>0&&(t=Rt(t,this.elevRaw(n.s),o))}let s=Pi(e);if(s){let o=1-wt(30,70,Math.abs(e-s.s));o>0&&(t=Rt(t,this.elevRaw(s.s),o))}let r=Ii(e);if(r){let o=1-wt(vn+10,hn+45,Math.abs(e-r.s));o>0&&(t=Rt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*hs<e+hs;){let t=this.X.length-1,n=t*hs,s=this.curv(n+hs/2)*hs,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*hs),this.Z.push(this.Z[t]+Math.cos(r+s/2)*hs),this.H.push(r+s),this.Y.push(this.elev(n+hs))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+hs);let n=e/hs,s=Math.floor(n),r=n-s;t.x=Rt(this.X[s],this.X[s+1],r),t.z=Rt(this.Z[s],this.Z[s+1],r),t.y=Rt(this.Y[s],this.Y[s+1],r),t.h=Rt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),l=Math.cos(t.h);return t.fx=o,t.fz=l,t.rx=-l,t.rz=o,t}};function sm(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+wt(45,190,r)*16*(.45+.55*yi(e/160+(t>0?50:0),3));case"coast":return t>0?r<s+.9?-.06:-.15+wt(s+1.5,80,r)*24*(.5+.5*yi(e/170,5))+wt(80,200,r)*30:r<s+1.5?-.06:r<s+1.95?-.04:Rb-Math.min(r-(s+2),40)*.13-n;case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*yi(e/140,61),c=r-(s+1);return c<l?c:Math.min(l+(c-l)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+wt(105,230,r)*95*(.6+.4*yi(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Rt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(yi(e/40+(t>0?3:0),71)-.5):.55+wt(125,210,r)*40*(.45+.55*yi(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+wt(140,215,r)*7*(.4+.6*yi(e/210+(t>0?9:0),7))}}function Js(i,e,t,n){let s=$s(i),r=sm(s.a,i,e,t,n),o=s.t;e<0&&o>0&&(s.b==="coast"?o=wt(.25,.9,o):s.a==="coast"&&(o=wt(.1,.75,o)));let l=s.t>0?Rt(r,sm(s.b,i,e,t,n),o):r;Vu=0;let c=Pi(i);if(c){let E=Math.abs(i-c.s);if(E>=36)return l;let b=E<29?Ib(E):Rt(.35,l,wt(29,36,E));return Math.abs(e)<n+3.2&&(b=Math.min(b,-.08)),b}let u=Ii(i);if(!u)return l;let h=i-u.s,g=Math.abs(h);if(g>=2*hn)return l;let m=Math.abs(e),d=Wu(h,e),_;return g<vn?_=m<=n+1.46?-.25:Math.max(l,d):_=Math.max(l,Math.min(d,m<n+1?-.06:m-(n+1))),Vu=Math.max(0,_-l),_}function cm(i){let e=Pi(i);return e?1-wt(27,34,Math.abs(i-e.s)):0}var al=new H,Xu=new H,Fb=[1,1,1],Bb=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],hm=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),fm=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),rn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new Qe,this.nm=new gt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,l,c,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,g=this.ne,m=this.n*3,d=this.P,_=this.bb,E=h[0]*e+h[4]*t+h[8]*n+h[12],b=h[1]*e+h[5]*t+h[9]*n+h[13],a=h[2]*e+h[6]*t+h[10]*n+h[14];d[m]=E,d[m+1]=b,d[m+2]=a,E<_[0]&&(_[0]=E),b<_[1]&&(_[1]=b),a<_[2]&&(_[2]=a),E>_[3]&&(_[3]=E),b>_[4]&&(_[4]=b),a>_[5]&&(_[5]=a);let x=g[0]*s+g[3]*r+g[6]*o,p=g[1]*s+g[4]*r+g[7]*o,f=g[2]*s+g[5]*r+g[8]*o,v=127/(Math.sqrt(x*x+p*p+f*f)||1);if(this.N[m]=Math.round(x*v),this.N[m+1]=Math.round(p*v),this.N[m+2]=Math.round(f*v),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=c),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(b)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let M=u||Fb,w=this.Cl;w[m]=M[0]>=1?255:M[0]<=0?0:M[0]*255+.5,w[m+1]=M[1]>=1?255:M[1]<=0?0:M[1]*255+.5,w[m+2]=M[2]>=1?255:M[2]<=0?0:M[2]*255+.5}this.n++}quad(e,t,n,s,r,o){al.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Xu.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Xu.lengthSq()<1e-12&&Xu.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),al.cross(Xu).normalize();let l=al.x,c=al.y,u=al.z,h=o?o.u0:0,g=o?o.u1:1,m=o?o.v0:0,d=o?o.v1:1;this.vtx(e[0],e[1],e[2],l,c,u,h,m,r),this.vtx(t[0],t[1],t[2],l,c,u,g,m,r),this.vtx(n[0],n[1],n[2],l,c,u,g,d,r),this.vtx(e[0],e[1],e[2],l,c,u,h,m,r),this.vtx(n[0],n[1],n[2],l,c,u,g,d,r),this.vtx(s[0],s[1],s[2],l,c,u,h,d,r)}box(e,t,n,s,r,o,l,c=null,u=null){let h=c||{},g=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],g.nz||l,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],g.pz||l,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],g.nx||l,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],g.px||l,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],g.py||l,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],g.ny||l,h.ny)}cyl(e,t,n,s,r,o,l,c,u=!0){let h=(s-r)/o;for(let g=0;g<l;g++){let m=g/l*Math.PI*2,d=(g+1)/l*Math.PI*2,_=Math.cos(m),E=Math.sin(m),b=Math.cos(d),a=Math.sin(d),x=[e+_*s,t,n+E*s],p=[e+b*s,t,n+a*s],f=[e+b*r,t+o,n+a*r],v=[e+_*r,t+o,n+E*r];this.vtx(x[0],x[1],x[2],_,h,E,0,0,c),this.vtx(v[0],v[1],v[2],_,h,E,0,0,c),this.vtx(f[0],f[1],f[2],b,h,a,0,0,c),this.vtx(x[0],x[1],x[2],_,h,E,0,0,c),this.vtx(f[0],f[1],f[2],b,h,a,0,0,c),this.vtx(p[0],p[1],p[2],b,h,a,0,0,c),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,c),this.vtx(f[0],f[1],f[2],0,1,0,0,0,c),this.vtx(v[0],v[1],v[2],0,1,0,0,0,c))}}rod(e,t,n,s,r,o){let l=t[0]-e[0],c=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(l,c,u);l/=h,c/=h,u/=h;let g=0,m=1,d=0;Math.abs(c)>.99&&(g=1,m=0);let _=c*d-u*m,E=u*g-l*d,b=l*m-c*g,a=Math.hypot(_,E,b);_/=a,E/=a,b/=a;let x=E*u-b*c,p=b*l-_*u,f=_*c-E*l;for(let v=0;v<r;v++){let M=v/r*Math.PI*2,w=(v+1)/r*Math.PI*2,y=Math.cos(M),S=Math.sin(M),T=Math.cos(w),A=Math.sin(w),R=_*y+x*S,C=E*y+p*S,P=b*y+f*S,L=_*T+x*A,D=E*T+p*A,B=b*T+f*A,V=[e[0]+R*n,e[1]+C*n,e[2]+P*n],O=[e[0]+L*n,e[1]+D*n,e[2]+B*n],k=[t[0]+L*s,t[1]+D*s,t[2]+B*s],z=[t[0]+R*s,t[1]+C*s,t[2]+P*s];this.vtx(V[0],V[1],V[2],R,C,P,0,0,o),this.vtx(O[0],O[1],O[2],L,D,B,0,0,o),this.vtx(k[0],k[1],k[2],L,D,B,0,0,o),this.vtx(V[0],V[1],V[2],R,C,P,0,0,o),this.vtx(k[0],k[1],k[2],L,D,B,0,0,o),this.vtx(z[0],z[1],z[2],R,C,P,0,0,o)}return h}blob(e,t,n,s,r,o,l=0,c=1){let u=um[l%um.length],h=u.attributes.position.array,g=u.attributes.normal.array,m=u.userData.disp;for(let d=0;d<h.length;d+=3){let _=1+m[d/3],E=Math.max(0,Math.min(1,g[d+1]*.5+.5)),b=[o[0]+(r[0]-o[0])*E,o[1]+(r[1]-o[1])*E,o[2]+(r[2]-o[2])*E];this.vtx(e+h[d]*s*_,t+h[d+1]*s*_*c,n+h[d+2]*s*_,g[d],g[d+1],g[d+2],0,0,b)}}wire(e,t,n,s,r,o=10){let l=e;this.noShadow=!0;for(let c=1;c<=o;c++){let u=c/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,h,s,s,3,r),l=h}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,l,c]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],l,c,s[o])}bill(e,t,n,s,r,o,l,c,u,h,g=Bb,m=1){let d=(u.u1-u.u0)*.5,_=(u.v1-u.v0)*.5,E=u.u0+d,b=u.v0+_;for(let a=0;a<g.length;a+=2){let x=g[a],p=g[a+1];this.offX=x*l,this.offY=p*c,this.vtx(e,t,n,s,r,o,E+x*d*m,b+p*_*m,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,l=e.C,c=e.U,u=this.n,h=this.bb;for(let g=0;g<e.n*3;g+=3){let m=r[g],d=r[g+1],_=r[g+2],E=u*3+g,b=n[0]*m+n[4]*d+n[8]*_+n[12],a=n[1]*m+n[5]*d+n[9]*_+n[13],x=n[2]*m+n[6]*d+n[10]*_+n[14];this.P[E]=b,this.P[E+1]=a,this.P[E+2]=x,this.hasAO&&(this.A[u+g/3]=this.aoByte(a)),b<h[0]&&(h[0]=b),a<h[1]&&(h[1]=a),x<h[2]&&(h[2]=x),b>h[3]&&(h[3]=b),a>h[4]&&(h[4]=a),x>h[5]&&(h[5]=x);let p=o[g],f=o[g+1],v=o[g+2],M=s[0]*p+s[3]*f+s[6]*v,w=s[1]*p+s[4]*f+s[7]*v,y=s[2]*p+s[5]*f+s[8]*v,S=127/(Math.sqrt(M*M+w*w+y*y)||1);this.N[E]=Math.round(M*S),this.N[E+1]=Math.round(w*S),this.N[E+2]=Math.round(y*S)}if(this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(c?this.U.set(c,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasOff){let g=Math.hypot(n[0],n[1],n[2]),m=e.O;if(m)for(let d=0;d<e.n*2;d++)this.O[u*2+d]=m[d]*g;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new vt,t=this.n,n=this.bb;if(e.setAttribute("position",new Mt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Mt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Mt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Mt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Mt(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new Mt(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new Mt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new ci(new H(n[0],n[1],n[2]),new H(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new ui),e}},um=[0,1,2,3].map(i=>{let e=new Da(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,l)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ft.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var Ob=ft.shadowmap_pars_fragment;function od(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ft.shadowmap_pars_fragment=Ob.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}od(1);function vm(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";ft.shadowmap_pars_fragment=t+ft.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}ft.lights_fragment_begin=ft.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var Mi=4200,ze={uSkyHor:{value:new xe(.7,.8,.9)},uSkyZen:{value:new xe(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Pe},uSunDir:{value:new H(0,1,0)},uSunCol:{value:new xe(1,1,1)},uTuftV:{value:new pt(.167,.333,.164,.165)},uGhShade:{value:new H(.3,.85,1.7)},uBlShade:{value:new H(7.5,3,2.3)},uTunA:{value:new H(0,-1e4,0)},uTunB:{value:new H(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new H},uCarFwd:{value:new H(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:zb()},uCloudTex:{value:null},uCloudOrg:{value:new Pe},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Pe(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function xm(i){let e=new Xi(new Uint8Array(i),i.length,1,Ys);return e.minFilter=e.magFilter=Sn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var hi=xm([16,16,16,70,200,255,255,255]),ll=xm([28,40,70,130,200,240,255,255]);function zb(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new Xi(e,256,256,$n);return s.wrapS=s.wrapT=Es,s.magFilter=Ut,s.minFilter=An,s.generateMipmaps=!0,s.colorSpace=ii,s.needsUpdate=!0,s}var Si=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,qu=1600,sd=256,kb=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/qu).toFixed(8)} + 0.5).r * uCloudSh; }`,Hb=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,ym=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/qu).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,_m=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,Vb=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,Gb=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,Yu=new yr;Yu.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};Yu.customProgramCacheKey=()=>"propdepth";function bm(){let i=new Wt(sd,sd,{format:Ys,type:Zn,depthBuffer:!1,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),e=new ht({uniforms:{uCenter:{value:new Pe},uOrigin:ze.uOrigin,uTime:ze.uTime,uNoiseTex:ze.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${qu.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ut(new Qt(2,2),e),n=new Ts;t.frustumCulled=!1,ze.uCloudTex.value=i.texture,ze.uCloudTex.rt=i;let s=qu/sd;return{update(r,o,l,c,u){let h=Math.round((o+c)/s)*s-c,g=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(h,g),ze.uCloudOrg.value.set(h,g);let m=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(m)}}}function js(i,e="",t="",n=!0){i.uniforms.uOrigin=ze.uOrigin,i.uniforms.uCloudSh=ze.uCloudSh,i.uniforms.uTime=ze.uTime,i.uniforms.uNoiseTex=ze.uNoiseTex,i.uniforms.uCloudTex=ze.uCloudTex,i.uniforms.uCloudOrg=ze.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=ze[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?ym:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Si}${kb}${Vb}${e}`).replace("#include <opaque_fragment>",`${n?_m:Hb}${t}${Gb}
#include <opaque_fragment>`)}var Wb=`
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
#ifdef Z_SAKURA
// (only in the variants with the avenue: it needs petalsAt, and nothing else calls it)
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  // (the painting's lawns are a light, warm green in the sun: (167, 193, 70) against our (117, 172, 47))
  vec3 g = grassCol(p, L(vec3(0.44, 0.64, 0.27)), L(vec3(0.74, 0.84, 0.38)));
  // a few petals on the lawn, most under the avenue's trees (the painting's lawns are a clean green: they used to be
  // splashed with pink blotches)
  return mix(g, PETAL, petalsAt(p, 0.12 * (1.0 - 0.8 * smoothstep(rw + 5.0, rw + 12.0, abs(u)))));
}
#endif
vec3 coastGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (u > 0.0) return grassCol(p, L(vec3(0.31, 0.60, 0.25)), L(vec3(0.52, 0.79, 0.32)));
  if (a < rw + 1.45) return L(vec3(0.73, 0.72, 0.69)) * (0.9 + 0.1*fbm2(p));
  // the sea wall: its top a warm sand-coloured concrete, as in the reference art; its face grey, dark and wet low down
  if (a < rw + 1.97) return L(vec3(0.86, 0.76, 0.6)) * (0.86 + 0.14*vnoise(p*vec2(0.4, 5.0)));
  if (a < rw + 2.08) return L(vec3(0.70, 0.70, 0.68)) * (0.82 + 0.12*vnoise(p*vec2(0.4, 5.0))) * (0.45 + 0.55 * smoothstep(0.2, 1.4, vWY));
  vec3 sand = mix(L(vec3(0.94, 0.87, 0.71)), L(vec3(0.85, 0.77, 0.62)), fbm2(p*0.2));
  return mix(sand, L(vec3(0.6, 0.55, 0.46)), 0.6*(1.0 - smoothstep(0.0, 0.9, vWY)));
}
#ifdef F_PAINT
// \u8349\u539F: the painted meadow (painted.js loadFieldTexture), the country painting's grass seen from above, read once per
// pixel. It runs along the road (s) and across it (u), its strokes 1.75\xD7 longer along the road (from the chase camera
// they stand up more, like the painting's blades). Its coordinates and their screen footprint are taken at the top of
// groundAlbedo, in uniform control flow, so the mip and anisotropic filtering stay right inside the branches
uniform sampler2D uFieldTex; uniform vec2 uFieldK; uniform vec3 uFieldC; // 1 / the tile (m) across, along; tint
vec2 fUV, fDX, fDY; float fPU;
#endif
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
    return textureGrad(uFieldTex, fUV, fDX, fDY).rgb * uFieldC * (1.0 + tone * vec3(1.8, 1.0, 0.2));
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
`,Xb=`
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
#endif`,qb=`
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
}`,Mm={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},bi={tex:null,uFieldK:{value:new Pe(1/12,1/21)},uFieldC:{value:new H(1,1,1)},uFieldM:{value:new H(.16,.32,.05)}};function Sm(i){let e={};for(let t of i)e[Mm[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),bi.tex&&i.includes("country")&&(e.F_PAINT=""),e}var dm=new Map;function cl(i){let e=[...new Set(i)].sort().join("+"),t=dm.get(e);return t||(t=Em(Sm(e.split("+")),e),dm.set(e,t)),t}function Em(i=Sm(Object.keys(Mm)),e="all"){let t=new un({color:16777215,gradientMap:hi});t.defines=i;let n=i.F_PAINT!==void 0;return t.onBeforeCompile=s=>{s.uniforms.uSkyHor=ze.uSkyHor,s.uniforms.uSkyZen=ze.uSkyZen,s.uniforms.uWet=ze.uWet,s.uniforms.uSakWet=ze.uSakWet,s.uniforms.uNight=ze.uNight,s.uniforms.uSunDir=ze.uSunDir,s.uniforms.uSunCol=ze.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])s.uniforms[r]=ze[r];n&&(s.uniforms.uFieldTex={value:bi.tex},s.uniforms.uFieldK=bi.uFieldK,s.uniforms.uFieldC=bi.uFieldC),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),js(s,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${Wb}`,qb+Xb,!1),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v19-"+e+(n?"-fp":""),t}function pm(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),js(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function Tm(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=ze[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function Yb(i){i.uniforms.uLightsOn=ze.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function mm(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function ad(i){return i.onBeforeCompile=e=>js(e),i.customProgramCacheKey=()=>"cs",i}var Zb="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",$b=(i,e,t="")=>`
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
}`;function ld(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=ze[o];s&&Object.assign(r.uniforms,s.uniforms),js(r,Zb+(s?s.pars:""),$b(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var Qs=48;function wm(i,e){let t=new un({color:16777215,gradientMap:ll}),n=!!bi.tex;return t.onBeforeCompile=s=>{Object.assign(s.uniforms,e,i);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])s.uniforms[r]=ze[r];n&&(s.uniforms.uFieldC=bi.uFieldC,s.uniforms.uFieldM=bi.uFieldM),s.vertexShader=s.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${ym}
uniform vec4 uG[${Qs}], uGM[${Qs/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${n?`
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${Qs-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  float gsw = mod(gs, ${Mi.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);`:`
  vec2 pid = floor(vec2(mod(gs, ${Mi.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${_m}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Am(i,e){let t={};t.ground=Em(),t.color=pm(new un({vertexColors:!0,gradientMap:hi}),1.6,.1,"color-v3",mm),t.atlas=new un({vertexColors:!0,gradientMap:hi,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=l=>{mm(l),Yb(l),js(l)},t.atlas.customProgramCacheKey=()=>"atlas-v5",t.foliage=pm(new un({vertexColors:!0,gradientMap:ll}),2.6,.24,"foliage-v2"),t.lamp=new gn({color:15789798}),t.sig=new gn({color:new xe(.15,1.7,1.1)}),t.sodium=new gn({color:new xe(5,2.3,.65)}),t.decal=new un({vertexColors:!0,gradientMap:hi,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=l=>js(l),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new un({map:e,vertexColors:!0,gradientMap:ll,alphaTest:.42,side:yn}),t.leaf.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_begin>",ft.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),js(l),Tm(l),l.uniforms.uTuftV=ze.uTuftV,l.uniforms.uWind=ze.uWind,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v5"),t.wire=new gn({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let o=new ti(n);return t.pool=new gn({map:o,color:16762746,transparent:!0,opacity:0,blending:Yi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}function Rm(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let l=(o+.5)/64*2-1,c=Math.min(1,Math.max(0,(l-i)/(e-i))),u=c*c*(3-2*c);s[o]=Math.round(255*(t+(1-t)*u))}let r=new Xi(s,64,1,Ys);return r.minFilter=r.magFilter=Ut,r.generateMipmaps=!1,r.needsUpdate=!0,r}var Kb=Rm(-.05,.5,.05),Jb=Rm(-.5,.45,.12);function gm(i,e){i.uniforms.uTime=ze.uTime,i.uniforms.uWind=ze.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var rd=(i,e,t)=>{let n=new xe().setRGB(i/255,e/255,t/255,Gt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},jb=`diffuseColor.rgb *= mix(${rd(62,38,34)}, mix(${rd(205,105,150)}, ${rd(255,232,242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;function cd(i,{blossom:e=!1}={}){let t=new un({map:i,vertexColors:!0,color:e?16777215:new xe().setRGB(.68,.85,.46,Gt),gradientMap:e?Jb:Kb,alphaTest:.5,side:ls});t.shadowSide=yn,t.onBeforeCompile=s=>{js(s),Tm(s),gm(s,!1),s.uniforms.uGhShade=e?ze.uBlShade:ze.uGhShade,s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?jb:"diffuseColor.rgb *= gTx.b;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v1":"gleaf-v1";let n=new yr;return n.onBeforeCompile=s=>gm(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var Qb=ge("#f2c230"),Cm=ge("#26272c");function Zu(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=Fn(s,"rw"),l=n*(o+.8),c=Dt(s),u=c.city+c.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function Pm(){let i=new nn,e=ad(new un({vertexColors:!0,gradientMap:hi})),t=new gn({color:new xe(6,.45,.3)}),n=new gn({color:new xe(.22,.03,.03)}),s=[0,1].map(()=>{let r=new nn,o=new nn;r.add(o),o.position.set(-.42,1.02,-.02);let l=new rn,c=3.6;for(let g=0,m=0;m<c;g++,m+=.45)l.box(-Math.min(m+.45,c),-.065,-.065,-m,.065,.065,g%2?Cm:Qb);l.box(0,-.09,-.07,.38,.09,.07,Cm);let u=new ut(l.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(g=>{let m=new ut(new vr(.13,18),n);return m.position.set(g,2.75,-.1),m.rotation.y=Math.PI,r.add(m),m});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:c}});return i.visible=!1,{group:i,update(r,o,l,c,u){i.visible=!!r,r&&r.forEach((h,g)=>{let m=s[g];m.root.position.set(h.x-o.x,h.y,h.z-o.z),m.root.rotation.y=h.yaw,m.arm.scale.x=(h.rw+.25)/m.L,m.pivot.rotation.z=-l*(Math.PI/2-.06);let d=Math.floor(u*2.5)%2;m.lamps[0].material=c&&d===0?t:n,m.lamps[1].material=c&&d===1?t:n})}}}function eM(){let t=()=>{let a=document.createElement("canvas");return a.width=1024,a.height=512,a},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let a=0;a<1024;a+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(a,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let u=[.1,.36,.62,.88].map(a=>a*1024),h=(a,x,p,f)=>{let v=r.createLinearGradient(a,x,a+p*.3,x+f);v.addColorStop(0,"#5d7fae"),v.addColorStop(.6,"#9db7d6"),v.addColorStop(1,"#2f3f55"),r.fillStyle=v,r.fillRect(a,x,p,f),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(a+p*.2,x),r.lineTo(a+p*.38,x),r.lineTo(a+p*.1,x+f),r.lineTo(a-p*.08,x+f),r.fill(),o.fillStyle="#ffeccc",o.fillRect(a,x,p,f)};for(let a=0;a<u.length-1;a++){let x=u[a]+40,p=u[a+1]-40,f=3,v=(p-x)/f;for(let M=0;M<f;M++)r.fillStyle="#6b737c",r.fillRect(x+M*v+2,34,v-4,58),h(x+M*v+6,38,v-12,50)}for(let a of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(a+2,34,28,58),h(a+5,38,22,50);for(let a of u)r.fillStyle="#c3c8ce",r.fillRect(a-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(a-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(a-30,22,60,c-36),h(a-24,34,20,46),h(a+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let a of u)r.fillStyle="#c3c8ce",r.fillRect(a-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let g=0,m=176,d=256,_=256;r.fillStyle="#d3d7dc",r.fillRect(g,m,d,_),r.fillStyle="#20262e",r.fillRect(g+14,m+44,d-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(g+40,m+44),r.lineTo(g+80,m+44),r.lineTo(g+40,m+140),r.lineTo(g+14,m+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(g+d/2-4,m+44,8,96),r.fillStyle="#111",r.fillRect(g+50,m+12,d-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",g+d/2,m+26),r.fillStyle="#1f9a50",r.fillRect(g,m+150,d,18),r.fillStyle="#e8892b",r.fillRect(g,m+170,d,7);for(let a of[g+40,g+d-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(a,m+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(a+(a<g+d/2?28:-28),m+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(g,m+_-30,d,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",g+d/2,m+220),o.fillStyle="#111",o.fillRect(g,m,d,_),o.fillStyle="#ff9a2a",o.font=`800 18px ${l}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",g+d/2,m+26);for(let a of[g+40,g+d-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(a,m+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let E=a=>{let x=new ti(a);return x.colorSpace=Gt,x.anisotropy=4,x},b=(a,x,p,f)=>({u0:a/1024,u1:(a+p)/1024,v0:1-(x+f)/512,v1:1-x/512});return{map:E(n),em:E(s),side:b(0,0,1024,c),sideR:{...b(0,0,1024,c),flip:!0},front:b(g,m,d,_),plain:b(342,202,28,28)}}function Im(){let i=eM(),e=ad(new un({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:hi})),t=new rn({uv:!0}),n=[1,1,1],s=ge("#9aa1a9"),r=ge("#3b4047"),o=ge("#2a2d33"),l=19.5,c=.6,u=3,h=1.45,g=.95,m=4,d=4,_=.3,E=ge("#33363b"),b={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},a=(y,S,T,A,R,C,P,L=!1)=>t.box(y,S,T,A,R,C,P,b,L?{noBottom:!0}:null),x=(y,S,T,A,R,C)=>{let L=T-R/2,D=T+R/2;for(let B=0;B<12;B++){let V=B/12*Math.PI*2,O=(B+1)/12*Math.PI*2,k=y+Math.cos(V)*A,z=S+Math.sin(V)*A,W=y+Math.cos(O)*A,ce=S+Math.sin(O)*A;t.quad([k,z,L],[W,ce,L],[W,ce,D],[k,z,D],C,i.plain),t.quad([y,S,D],[k,z,D],[W,ce,D],[W,ce,D],C,i.plain),t.quad([y,S,L],[W,ce,L],[k,z,L],[k,z,L],C,i.plain)}},p=u*l+(u-1)*c;for(let y=0;y<u;y++){let S=-p/2+l/2+y*(l+c),T=S-l/2,A=S+l/2;t.quad([T,g,h],[A,g,h],[A,m,h],[T,m,h],n,i.side),t.quad([A,g,-h],[T,g,-h],[T,m,-h],[A,m,-h],n,i.side);let R=y===u-1,C=y===0;t.quad([A,g,h],[A,g,-h],[A,m,-h],[A,m,h],R?n:ge("#c9ced4"),R?i.front:i.plain),t.quad([T,g,-h],[T,g,h],[T,m,h],[T,m,-h],C?n:ge("#c9ced4"),C?i.front:i.plain);for(let P=0;P<d;P++)for(let L of[1,-1]){let D=P/d*Math.PI/2,B=(P+1)/d*Math.PI/2,V=L*h*Math.cos(D),O=m+_*Math.sin(D),k=L*h*Math.cos(B),z=m+_*Math.sin(B);t.quad([T,O,V],[A,O,V],[A,z,k],[T,z,k],s,i.plain);for(let W of[T,A]){let ce=[[W,m,0],[W,O,V],[W,z,k]];t.quad(ce[0],ce[1],ce[2],ce[2],s,i.plain),t.quad(ce[0],ce[2],ce[1],ce[1],s,i.plain)}}for(let P of[1,-1])a(T,m-.02,P*h-.04,A,m+.05,P*h+.04,r);for(let P of[S-5.5,S+5.5])a(P-1.3,m+.2,-.8,P+1.3,m+.62,.8,ge("#c4c9cf"),!0);a(T+.3,.82,-h+.1,A-.3,g,h-.1,o);for(let[P,L,D,B]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])a(S+P-L/2,.82-D,-1.15+B*.2,S+P+L/2,.82,1.15+B*.2,B>0?o:r);for(let P of[S-7,S+7]){for(let L of[1,-1]){a(P-1.35,.32,L*.86,P+1.35,.56,L*1.02,r);for(let D of[-1.05,1.05])a(P+D-.17,.3,L*.84,P+D+.17,.58,L*1.06,o)}a(P-.35,.5,-1,P+.35,.8,1,r);for(let L of[-1.05,1.05])for(let D of[1,-1])x(P+L,.43,D*.6,.43,.13,E)}if(y<u-1&&a(A,g+.15,-.95,A+c,m-.1,.95,ge("#3a3e44")),y===0){let P=S-3,L=m+.7;t.box(P-.6,m+.26,-.6,P+.6,m+.42,.6,r),t.rod([P-.5,m+.42,0],[P,L+.9,0],.03,.03,4,r),t.rod([P+.5,m+.42,0],[P,L+.9,0],.03,.03,4,r),t.rod([P,L+.9,-.85],[P,L+.9,.85],.03,.03,4,r)}}let f=new ut(t.build(),e);f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1;let v=new nn;v.add(f),v.visible=!1;let M={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:p},w={};return{group:v,st:M,start(y,S,T=16){Object.assign(M,{active:!0,sx:y,dir:S,speed:T,u:-S*290,ds:S>0?-2:2,cleared:!1}),v.visible=!0},update(y,S,T,A,R){if(!M.active)return;M.u+=M.dir*M.speed*y;let C=M.u-M.dir*M.length/2;if(!M.cleared&&(M.dir>0?C>R+1:C<-R-1)&&(M.cleared=!0),Math.abs(M.u)>330){M.active=!1,v.visible=!1;return}S.at(M.sx,w),v.position.set(w.x+w.fx*M.ds+w.rx*M.u-T.x,w.y+.34,w.z+w.fz*M.ds+w.rz*M.u-T.z),v.rotation.y=w.h+(M.dir>0?Math.PI:0),e.emissiveIntensity=.3+A*1.1}}}var tM='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Cr=2048,Pr=4096;function Ju(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var Um=Ju(256,256);{let i=Um.getContext("2d"),e=i.createImageData(256,256),t=Ot(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var ud=class{constructor(){this.cA=Ju(Cr,Pr),this.cE=Ju(Cr/2,Pr/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Cr/2,Pr/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Cr,Pr),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Um,"repeat")}add(e,t,n,s){if(this.x+t+4>Cr&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Pr)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(o.x,o.y),c.beginPath(),c.rect(0,0,t,n),c.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5;return this.cells[e]={u0:(o.x+l)/Cr,u1:(o.x+t-l)/Cr,v0:1-(o.y+n-l)/Pr,v1:1-(o.y+l)/Pr,w:t,h:n,px:o.x,py:o.y},this.cells[e]}paintCell(e,t,n,s,r,o,l){let c=this.cells[e];c&&(this.a.drawImage(t,n,s,r,o,c.px,c.py,c.w,c.h),this.e.drawImage(t,n,l,r,o,c.px/2,c.py/2,c.w/2,c.h/2))}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new ti(n);return s.colorSpace=Gt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=An,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function xn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function In(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,c])=>o.addColorStop(l,c)),i.fillStyle=o,i.fillRect(e,t,n,s)}function Lo(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),In(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}xn(i,e,t,n,.13)}function ws(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function q(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Do(i,e,t,n,s,r,o="#d9dde2",l="rgba(40,45,60,0.55)"){q(i,e-r,t-r,n+2*r,s+2*r,o),q(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function As(i,e,t,n,s,r,o=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),c=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";l.addColorStop(0,c),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function Lm(i,e,t,n,s,r="#efe6d2"){q(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);In(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function ju(i,e,t=800){i.font=`${t} ${e}px ${tM}`}function It(i,e,t,n,s,r,o,l=800,c=null){ju(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,ju(i,u,l);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function $u(i,e,t,n,s,r,o,l=800,c=null){let u=[...e],h=u.length,g=Math.min(r*1.05,(s-n)/h),m=Math.min(r,g*.95);ju(i,m,l),i.textAlign="center",i.textBaseline="middle",u.forEach((d,_)=>{let E=n+(s-n-g*h)/2+g*(_+.5);c&&(i.lineWidth=Math.max(2,m*.12),i.strokeStyle=c,i.strokeText(d,t,E)),i.fillStyle=o,i.fillText(d,t,E)})}function Ir(i,e,t,n,s,r,o,l=!0){if(q(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",In(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let c=e+n*.2*o();c<e+n-4;c+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-c),h=s*(.12+o()*.25);i.fillRect(c,t+s-h,u,h)}}i.restore()}function nM(i,e,t,n,s,r,o){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",q(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,q(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,In(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Dm=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Ku=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Nm=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],iM=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Fm(){let i=new ud,e=Ot(2024),t=240,n=(a,x,p,f,v,M,w=!1)=>{Lo(a,i,p,f,"#ece8e0",0);let y=Ot(M*31+(v?7:0)+5);if(M===0){let S=p*.14,T=f*.22,A=p*.72,R=f*.5;Do(a,S,T,A,R,5),As(a,S,T,A/2,R,y),As(a,S+A/2,T,A/2,R,y);let C=y()<.8?A*(.18+y()*.25):0;C&&Lm(a,S+2,T+2,C,R-4,y()<.5?"#efe6d2":"#d9e4ea"),q(a,S+A/2-2,T,4,R,"#cfd4da"),q(a,S-8,T+R+5,A+16,6,"#d8d8d4"),ws(a,S-4,T+R+11,8,60),ws(a,S+A-4,T+R+11,8,60),v&&(Ir(x,S,T,A,R,w?"#e6eeff":"#ffcf8f",y),C&&q(x,S+2,T+2,C,R-4,w?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),q(x,S+A/2-2,T,4,R,"#000"))}else if(M===1){for(let S of[.12,.56]){let T=p*S,A=f*.28,R=p*.3,C=f*.36;Do(a,T,A,R,C,4),As(a,T,A,R,C,y,1),a.fillStyle="rgba(255,255,255,0.35)",a.fillRect(T,A,R,C*.45),ws(a,T,A+C+6,R,40,.1),v&&y()<.8&&Ir(x,T,A,R,C,y()<.5?"#ffd9a0":"#e8f0ff",y)}a.fillStyle="#c9c9c4",a.beginPath(),a.arc(p*.88,f*.2,9,0,7),a.fill()}else if(M===2){let S=p*.1,T=f*.12,A=p*.8,R=f*.84;Do(a,S,T,A,R,4),As(a,S,T,A/2,R,y),As(a,S+A/2,T,A/2,R,y);let C=A*(.2+y()*.3);Lm(a,S+2,T+2,C,R-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),q(a,S+A/2-2,T,4,R,"#cfd4da"),v&&(Ir(x,S,T,A,R,w?"#e6eeff":"#ffcb85",y),q(x,S+2,T+2,C,R-4,w?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),q(x,S+A/2-2,T,4,R,"#000"))}else if(M===3){Lo(a,i,p,f,"#dfe3e6",0);let S=f*.25,T=f*.55;As(a,0,S,p,T,y,1);for(let A=0;A<=p;A+=p/4)q(a,A-2,S,4,T,"#8d98a6");if(q(a,0,S-4,p,4,"#8d98a6"),q(a,0,S+T,p,5,"#7d8796"),v)for(let A=0;A<4;A++)y()<.7&&Ir(x,A*p/4+2,S,p/4-4,T,y()<.6?"#f2f6ff":"#ffe2b0",y)}else if(M===4){a.fillStyle="#6b4a35",a.fillRect(0,0,p,f);for(let C=0;C<f;C+=12)q(a,0,C,p,2,"rgba(30,18,10,0.35)"),q(a,0,C+2,p,1,"rgba(255,220,180,0.06)");xn(a,i,p,f,.15);let S=p*.18,T=f*.25,A=p*.64,R=f*.45;q(a,S-6,T-6,A+12,R+12,"#4a3020"),q(a,S,T,A,R,"#efe4c8"),a.fillStyle="#5a3a26";for(let C=1;C<6;C++)a.fillRect(S+C*A/6-1.5,T,3,R);for(let C=1;C<3;C++)a.fillRect(S,T+C*R/3-1.5,A,3);if(v){Ir(x,S,T,A,R,"#ffc070",y,!1),x.fillStyle="#000";for(let C=1;C<6;C++)x.fillRect(S+C*A/6-1.5,T,3,R);for(let C=1;C<3;C++)x.fillRect(S,T+C*R/3-1.5,A,3)}}else if(M===5){q(a,p*.08,0,7,f,"#bdbdb6"),q(a,p*.08+5,0,2,f,"rgba(0,0,0,0.2)");let S=p*.55,T=f*.3,A=p*.22,R=f*.24;Do(a,S,T,A,R,3),q(a,S,T,A,R,"#d6dfe4"),a.fillStyle="rgba(255,255,255,0.4)",a.fillRect(S,T,A,R/2),ws(a,S,T+R+4,A,50,.12),q(a,p*.22,f*.55,26,34,"#cfcfca"),q(a,p*.22+4,f*.55+6,18,12,"#9aa2a8"),v&&Ir(x,S,T,A,R,w?"#eef2ff":"#fff0d8",y,!1)}else if(M===6){let S=p*.4,T=f*.35,A=p*.2,R=f*.28;Do(a,S,T,A,R,3),As(a,S,T,A,R,y,1),ws(a,S,T+R+4,A,70,.14),v&&Ir(x,S,T,A,R,w?"#e8efff":"#ffd9a0",y)}};for(let a=0;a<7;a++)i.add("win"+a,t,t,(x,p,f,v)=>n(x,p,f,v,!1,a)),i.add("win"+a+"L",t,t,(x,p,f,v)=>n(x,p,f,v,!0,a));for(let a of[0,2,5,6])i.add("win"+a+"C",t,t,(x,p,f,v)=>n(x,p,f,v,!0,a,!0));i.add("plain",t,t,(a,x,p,f)=>{Lo(a,i,p,f,"#ece8e0"),ws(a,p*.3,0,12,f*.6,.06)}),i.add("concrete",t,t,(a,x,p,f)=>{Lo(a,i,p,f,"#d9d7d0",60);for(let v=0;v<6;v++)ws(a,v*41%p,0,10,f*.5,.07)});let s=288,r=(a,x,p,f,v,M,w)=>{let y=(T,A,R,C,P,L=0)=>{a.fillStyle=P,a.beginPath(),a.ellipse(T,A,R,C,L,0,7),a.fill()},S=T=>T[Math.floor(M()*T.length)];if(w==="bakery"){q(a,x,p,f,v,"#d9b98a"),In(a,x,p,f,v,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let T=p+v*.28;T<p+v*.72;T+=v*.2){q(a,x,T,f,5,"#8a5a32");for(let A=x+8;A<x+f-8;A+=15+M()*10){let R=7+M()*6,C=4+M()*3;y(A,T-C,R,C,S(["#c98a3e","#b4732e","#d9a256","#a4632a"])),y(A-R*.2,T-C*1.4,R*.5,C*.35,"rgba(255,230,180,0.5)")}}q(a,x+4,p+v*.8,f-8,v*.2,"#efe7d8"),q(a,x+4,p+v*.8,f-8,3,"#9a9a96");for(let T=x+14;T<x+f-10;T+=18)y(T,p+v*.9,6,4,S(["#e8b35a","#c06a3a","#f2d29a"]));q(a,x+f-64,p+10,52,22,"#7a3e1e"),It(a,"\u713C\u304D\u305F\u3066",x+f-38,p+21,46,14,"#fff3dc",800)}else if(w==="books"){q(a,x,p,f,v,"#6f5a46");for(let T=p+6;T<p+v*.72;T+=v*.17){q(a,x,T+v*.15,f,4,"#4a3828");for(let A=x+3;A<x+f-4;){let R=3+M()*4,C=v*(.1+M()*.045);q(a,A,T+v*.15-C,R,C,S(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),A+=R+(M()<.1?4:.6)}}q(a,x+4,p+v*.76,f-8,v*.24,"#8a7560");for(let T=x+8;T<x+f-22;T+=24)q(a,T,p+v*.79,20,28,S(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),q(a,T+3,p+v*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(w==="florist"){q(a,x,p,f,v,"#e8e2d2"),In(a,x,p,f,v,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let T=0;T<7;T++){let A=x+8+M()*(f-16),R=v*(.15+M()*.25);for(let C=0;C<R;C+=3.5)y(A+Math.sin(C*.25+T)*4+(M()-.5)*6,p+4+C,3.4,1.8,S(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),M()*3)}for(let T=0;T<3;T++){let A=p+v*(.5+T*.17);q(a,x,A+14,f,4,"#9a8a76");for(let R=x+10+T*6;R<x+f-8;R+=19){let C=S(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let P=0;P<6;P++){a.strokeStyle="#4a7a3a",a.lineWidth=1.2,a.beginPath();let L=R+(M()-.5)*14;a.moveTo(R,A+10),a.lineTo(L,A-6-M()*8),a.stroke(),y(L,A-8-M()*8,3.2,3,C)}q(a,R-6,A+4,12,11,S(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(w==="clothes"){q(a,x,p,f,v,"#efece6"),In(a,x,p,f,v,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),q(a,x+6,p+v*.18,f-60,3,"#7a7a7a");for(let A=x+12;A<x+f-66;A+=13+M()*5){a.fillStyle=S(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let R=p+v*.18+3,C=v*(.3+M()*.2);a.beginPath(),a.moveTo(A-5,R),a.lineTo(A+5,R),a.lineTo(A+8,R+C),a.lineTo(A-8,R+C),a.closePath(),a.fill()}let T=x+f-32;y(T,p+v*.16,7,8,"#d8cfc4"),a.fillStyle=S(["#c84a5a","#4a6a9a","#e8d8b8"]),a.beginPath(),a.moveTo(T-14,p+v*.24),a.lineTo(T+14,p+v*.24),a.lineTo(T+18,p+v*.66),a.lineTo(T-18,p+v*.66),a.closePath(),a.fill(),q(a,T-2,p+v*.66,4,v*.24,"#8a8a8a"),q(a,x+8,p+v*.74,f*.55,6,"#8a6a4a");for(let A=x+12;A<x+f*.55;A+=14)q(a,A,p+v*.74-8,11,8,S(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let T=7;for(let A=p+v*.25;A<p+v;A+=v*.22)for(let R=x+3;R<x+f-6;R+=6+M()*8)e(),T=Math.imul(T,31)+Math.floor(M()*997+M()*61+M()*7)|0;w==="cafe"?h(a,x,p,f,v,Ot(T>>>0)):u(a,x,p,f,v,Ot(T>>>0),w==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],l=(a,x,p,f,v,M,w="bbccutp")=>{let y=x+1+M()*3;for(;y<p-4;){let S=w[Math.floor(M()*w.length)],T=o[Math.floor(M()*o.length)],A=M()<.5?"#f8f6f0":o[Math.floor(M()*o.length)],R={b:8+M()*6,c:6+M()*2,u:9+M()*2,t:5+M()*2,p:12+M()*5}[S],C=Math.min(v,{b:14+M()*12,c:11+M()*3,u:10+M()*3,t:18+M()*9,p:14+M()*8}[S]),P=2+Math.floor(M()*5);for(let L=0;L<P&&y+R<p-1;L++,y+=R+.6){let D=f-C;S==="t"?(q(a,y,D+C*.3,R,C*.7,T),q(a,y+R*.3,D+C*.1,R*.4,C*.22,T),q(a,y+R*.28,D,R*.44,C*.11,A==="#f8f6f0"?"#e8e8e4":"#d83a2a"),q(a,y,D+C*.5,R,C*.22,A)):S==="c"?(q(a,y,D,R,C,T),q(a,y,D,R,1.5,"#d8dce0"),q(a,y,D+C*.35,R,C*.3,A)):S==="u"?(a.fillStyle=T,a.beginPath(),a.moveTo(y,D+2),a.lineTo(y+R,D+2),a.lineTo(y+R-1.2,f),a.lineTo(y+1.2,f),a.fill(),q(a,y-.4,D,R+.8,2.2,"#f2efe6"),q(a,y+1,D+C*.45,R-2,C*.25,A)):S==="p"?(a.fillStyle=T,a.beginPath(),a.moveTo(y,f),a.lineTo(y,D+3),a.quadraticCurveTo(y+R/2,D-1.5,y+R,D+3),a.lineTo(y+R,f),a.fill(),q(a,y+1.5,D+C*.35,R-3,C*.35,A),q(a,y,D+2,R,1,"rgba(0,0,0,0.18)")):(q(a,y,D,R,C,T),q(a,y+1.5,D+C*.3,R-3,C*.4,A)),q(a,y,D+1,1,C-1,"rgba(255,255,255,0.28)"),q(a,y+R-1.3,D+1,1.3,C-1,"rgba(0,0,0,0.22)")}y+=1.5+M()*3}},c=(a,x,p,f,v)=>{In(a,x,f+4,p,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),q(a,x,f,p,4,"#d3d6da"),q(a,x,f+3.2,p,.8,"rgba(40,40,50,0.45)");for(let M=x+4+v()*10;M<x+p-6;M+=14+v()*16)q(a,M,f+.6,5,2.6,v()<.25?"#f2d23a":v()<.2?"#e84a3a":"#ffffff")},u=(a,x,p,f,v,M,w)=>{q(a,x,p,f,v,w?"#f3f1ea":"#ece5d8"),q(a,x,p,f,v*.13,w?"#f6f6f2":"#efebe2");for(let A of[.035,.085])q(a,x,p+v*A,f,2.4,"#ffffff"),In(a,x,p+v*A+2.4,f,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);In(a,x,p+v*.13,f,v*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let A=0,R=x+18+M()*30;A<2&&R<x+f-40;A++,R+=90+M()*40)q(a,R+13,p+v*.13,1,6,"#888"),q(a,R,p+v*.13+6,28,9,o[Math.floor(M()*9)]),q(a,R+4,p+v*.13+9.5,20,2,"rgba(255,255,255,0.8)");let S=p+v*.25,T=v*.165;q(a,x,S-4,f,4,"#c9ccd0");for(let A=0;A<4;A++){let R=S+T*(A+1);In(a,x,R-T,f,T,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),l(a,x,x+f,R,T-6,M),c(a,x,f,R,M)}q(a,x,S+T*4+4,f,p+v-S-T*4-4,"#5c6068"),q(a,x,S+T*4+4,f,1.5,"#8a8e96");for(let A=x+2+M()*20;A<x+f;A+=70+M()*12)q(a,A,S-4,3,T*4+8,"#b4b8be"),q(a,A+2.2,S-4,.8,T*4+8,"rgba(0,0,0,0.3)");if(w){let A=p+v*.7;q(a,x,A+26,f,p+v-A-26,"#7a7e86"),q(a,x,A+26,f,2,"#a8acb2");for(let R=x+2;R<x+f-14;R+=15.5){let C=o[Math.floor(M()*o.length)],P=M()*2;q(a,R,A+P,14,26-P,C),q(a,R,A+P,14,5,M()<.6?"#ffffff":"#e8343a"),q(a,R+2,A+P+8,10,10,M()<.5?"#f2c8a8":o[Math.floor(M()*o.length)]),q(a,R+13,A+P,1,26-P,"rgba(0,0,0,0.25)")}}},h=(a,x,p,f,v,M)=>{q(a,x,p,f,v,"#b88a5e"),In(a,x,p,f,v,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let y=x;y<x+f;y+=9)q(a,y,p+v*.55,1,v*.45,"rgba(60,35,20,0.25)");let w=p+v*.3;for(let y=0;y<2;y++){let S=w+y*22;q(a,x+8,S,f*.55,3,"#6a4428"),l(a,x+10,x+f*.55+6,S,14,M,"ctu")}q(a,x+f*.64,p+v*.22,f*.28,v*.26,"#2e3a32"),q(a,x+f*.64,p+v*.22,f*.28,2,"#6a4428");for(let y=0;y<5;y++)q(a,x+f*.67,p+v*(.27+y*.04),f*(.12+M()*.1),1.6,"rgba(240,240,230,0.75)");q(a,x+4,p+v*.56,f-8,6,"#5a3820"),q(a,x+4,p+v*.56+6,f-8,v*.08,"#7a5232"),q(a,x+f*.3,p+v*.47,18,v*.09,"#c8ccd0"),q(a,x+f*.3+3,p+v*.47+3,12,5,"#3a3a40");for(let y=x+30+M()*20;y<x+f-20;y+=70+M()*20)q(a,y,p,1,v*.14,"#3a2a1e"),a.fillStyle="#2f3a36",a.beginPath(),a.moveTo(y-9,p+v*.2),a.quadraticCurveTo(y+.5,p+v*.12,y+10,p+v*.2),a.fill(),a.fillStyle="rgba(255,214,150,0.9)",a.beginPath(),a.ellipse(y+.5,p+v*.2,7,2,0,0,7),a.fill();for(let y=x+26+M()*16;y<x+f-26;y+=78+M()*20){q(a,y-16,p+v*.74,32,4,"#4a2e1c"),q(a,y-1.5,p+v*.74+4,3,v*.2,"#2e2420"),q(a,y-8,p+v*.94,16,2,"#2e2420");for(let S of[-24,24])q(a,y+S-6,p+v*.8,12,3,"#3a2618"),q(a,y+S+(S<0?-6:4),p+v*.66,2,v*.17,"#3a2618"),q(a,y+S-5,p+v*.83,1.6,v*.13,"#3a2618"),q(a,y+S+3.4,p+v*.83,1.6,v*.13,"#3a2618");a.fillStyle="#f4f0e8",a.beginPath(),a.ellipse(y-6,p+v*.74-1.5,3,1.5,0,0,7),a.fill()}},g=(a,x,p,f,v,M,w="")=>{let y=Ot(M);if(Lo(a,i,p,f,"#e6e2da"),v==="glass"||v==="door"||v==="konbini"||v==="cafe"){let T=f*.22,A=p-12,R=f*.78-4;q(a,6,T,A,R,v==="konbini"?"#f6f4ea":v==="cafe"?"#7a5a40":"#8a7a68"),r(a,6,T,A,R,y,w||v),v==="konbini"&&q(a,6,T+4,A,5,"#ffffff"),v==="door"&&(q(a,p/2-30,T+18,60,24,"#fff"),It(a,"\u55B6\u696D\u4E2D",p/2,T+30,54,18,"#c82828")),v==="glass"&&!w&&y()<.7&&(q(a,16,T+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),It(a,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,T+44,40,16,"#c02020")),nM(a,x,6,T,A,R,v==="konbini"?"#e4eef8":v==="cafe"?"#f0a868":"#f2d2a6"),a.save(),a.globalAlpha=.35,As(a,6,T,A,R,y),a.restore(),q(a,6,T,A,4,"#4a4e57"),q(x,6,T,A,4,"#000"),v==="door"&&(q(a,p/2-2,T,4,R,"#4a4e57"),q(x,p/2-2,T,4,R,"#000"),q(a,p/2-14,T+R*.45,3,40,"#c0c4c8"),q(a,p/2+11,T+R*.45,3,40,"#c0c4c8")),v==="cafe"&&(q(a,p*.62,f-70,46,62,"#2c3a30"),q(x,p*.62,f-70,46,62,"#000"),It(a,"\u30E9\u30F3\u30C1",p*.62+23,f-50,40,13,"#fff",700))}else if(v==="shutter"){let T=f*.2,A=p-12,R=f*.8;q(a,6,T,A,R,"#b8bcc0");for(let C=T;C<T+R;C+=7)q(a,6,C,A,2,"rgba(60,64,72,0.35)"),q(a,6,C+2,A,1,"rgba(255,255,255,0.35)");q(a,6,T,A,10,"#8f949a"),xn(a,i,p,f,.12),y()<.5&&(q(a,p/2-40,T+R*.35,80,26,"#fff"),It(a,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),p/2,T+R*.35+13,74,16,"#333",700))}else if(v==="noren"){q(a,0,0,p,f,"#5b3c28");for(let P=0;P<p;P+=10)q(a,P,f*.2,3,f*.8,"rgba(25,15,8,0.6)");xn(a,i,p,f,.15);let S=p*.12,T=f*.24,A=p*.76,R=f*.34,C=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);q(a,S,T,A,R,C);for(let P=1;P<3;P++)q(a,S+A*P/3-1,T+R*.25,2,R*.75,"rgba(255,255,255,0.25)");It(a,e.pick(iM),p/2,T+R*.55,A*.9,46,"#f5f0e6",800),q(a,S,T,A,6,"#3a2a1c"),x.fillStyle="#ffae5c",x.fillRect(S,T+R,A,f-T-R),x.fillStyle="rgba(255,170,90,0.6)",x.fillRect(S,T,A,R),a.fillStyle="#d8352a",a.beginPath(),a.ellipse(p*.9,f*.36,13,19,0,0,7),a.fill(),It(a,"\u9152",p*.9,f*.36,16,14,"#fff"),x.fillStyle="#ff6a3a",x.beginPath(),x.ellipse(p*.9,f*.36,13,19,0,0,7),x.fill()}else if(v==="house"){let S=p*.18,T=f*.3,A=p*.34,R=f*.7;q(a,S-6,T-6,A+12,R+6,"#9a9a96"),q(a,S,T,A,R,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),q(a,S+A-14,T+R*.5,4,22,"#d8d0c0"),q(a,S+6,T+10,A-12,R*.25,"rgba(255,255,255,0.18)"),q(a,p*.62,f*.48,30,22,"#cfcfca"),q(a,p*.62+6,f*.48+5,18,4,"#555");let C=p*.6,P=f*.22,L=p*.3,D=f*.2;Do(a,C,P,L,D,3),As(a,C,P,L,D,y,1);for(let B=0;B<3;B++)a.fillStyle="#7b5a43",a.fillRect(p*.6+B*22,f-26,16,18),a.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),a.beginPath(),a.arc(p*.6+B*22+8,f-32,11,0,7),a.fill();x.fillStyle="#ffd08a",x.beginPath(),x.arc(S+A+14,T+8,6,0,7),x.fill(),y()<.6&&(x.fillStyle="#ffcf8f",x.fillRect(C,P,L,D))}else if(v==="garage"){let T=f*.25,A=p-16,R=f*.75;q(a,8,T,A,R,"#efefec");for(let C=T;C<T+R;C+=9)q(a,8,C,A,1.5,"rgba(80,80,90,0.25)");xn(a,i,p,f,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((a,x)=>{i.add("shop_"+a,t,s,(p,f,v,M)=>g(p,f,v,M,a,100+x)),(a==="glass"||a==="noren"||a==="house")&&i.add("shop_"+a+"2",t,s,(p,f,v,M)=>g(p,f,v,M,a,200+x)),a==="glass"&&["bakery","books","florist","clothes"].forEach((p,f)=>i.add("shop_glass"+(f+3),t,s,(v,M,w,y)=>g(v,M,w,y,"glass",300+f,p)))});for(let a=0;a<14;a++)i.add("hs"+a,512,76,(x,p,f,v)=>{let[M,w]=Ku[a%Ku.length],y=Dm[a*7%Dm.length];q(x,0,0,f,v,M),q(x,0,0,f,5,"rgba(255,255,255,0.35)"),q(x,0,v-6,f,6,"rgba(0,0,0,0.18)"),a%3===0&&(q(x,12,12,v-24,v-24,w),It(x,y[0],12+(v-24)/2,v/2,v-30,34,M)),It(x,y,f/2+(a%3===0?24:0),v/2+2,f*.7,50,w,900),xn(x,i,f,v,.08),p.fillStyle=M==="#fff"||M==="#f5efe0"?"#d9d6cc":M,p.fillRect(0,0,f,v),p.globalAlpha=.9,It(p,y,f/2+(a%3===0?24:0),v/2+2,f*.7,50,w==="#fff"?"#ffffff":w,900),p.globalAlpha=1});for(let[a,x,p]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+a,512,76,(f,v,M,w)=>{q(f,0,0,M,w,x),q(f,0,0,M,5,"rgba(255,255,255,0.35)"),q(f,0,w-6,M,6,"rgba(0,0,0,0.18)"),It(f,a,M/2,w/2+2,M*.7,50,p,900),xn(f,i,M,w,.08),v.fillStyle=x,v.fillRect(0,0,M,w),v.globalAlpha=.9,It(v,a,M/2,w/2+2,M*.7,50,p,900),v.globalAlpha=1});let m=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],d=(a,x,p,f,v,M)=>{a.beginPath(),a.moveTo(x+M,p),a.arcTo(x+f,p,x+f,p+v,M),a.arcTo(x+f,p+v,x,p+v,M),a.arcTo(x,p+v,x,p,M),a.arcTo(x,p,x+f,p,M),a.closePath()};for(let a=0;a<10;a++)i.add("vs"+a,72,288,(x,p,f,v)=>{let M=Nm[a%Nm.length],w=m[(a*5+2)%m.length],y=a%10===3||a%10===6||a%10===8,[S,T]=Ku[(a*3+1)%Ku.length],A=y?S==="#fff"||S==="#f5efe0"?"#2b2b33":S:"#fbf7ef",R=y?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][a%4];q(x,0,0,f,v,"#2a2b30"),d(x,3,3,f-6,v-6,8),x.fillStyle=A,x.fill(),In(x,3,3,f-6,v-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),x.save(),d(x,8,8,f-16,v-16,6),x.strokeStyle=w,x.globalAlpha=.55,x.lineWidth=7,x.stroke(),x.globalAlpha=1,x.strokeStyle="#fff6fb",x.lineWidth=2.2,x.stroke(),x.restore(),$u(x,M,f/2,18,v-18,50,R,900),xn(x,i,f,v,.06),q(p,0,0,f,v,"#000"),d(p,3,3,f-6,v-6,8),p.fillStyle=y?"#3a3a3e":"#4a4844",p.fill(),p.save(),d(p,8,8,f-16,v-16,6),p.strokeStyle=w,p.lineWidth=7,p.stroke(),p.strokeStyle="#ffffff",p.lineWidth=2.5,p.stroke(),p.restore(),$u(p,M,f/2,18,v-18,50,y?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([a,x,p],f)=>i.add("bb"+f,512,240,(v,M,w,y)=>{q(v,0,0,w,y,"#fbfaf5"),q(v,0,0,w,y*.62,p),It(v,a,w/2,y*.32,w*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),It(v,x,w/2,y*.8,w*.85,52,"#333",800),xn(v,i,w,y,.08),q(M,0,0,w,y,"#555"),M.globalAlpha=.85,q(M,0,0,w,y*.62,p),It(M,a,w/2,y*.32,w*.9,96,"#fff",900),M.globalAlpha=1})),i.add("konbini_band",480,72,(a,x,p,f)=>{q(a,0,0,p,f,"#fbfbf7"),q(a,0,f*.62,p,f*.14,"#2a9a4a"),q(a,0,f*.76,p,f*.12,"#f08a24"),q(a,0,f*.88,p,f*.12,"#2f6fd8"),It(a,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",p/2,f*.32,p*.8,40,"#1d3d8a",900),x.fillStyle="#f3f6f0",x.fillRect(0,0,p,f),It(x,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",p/2,f*.32,p*.8,40,"#1d3d8a",900)});for(let a=0;a<3;a++)i.add("vend"+a,128,234,(x,p,f,v)=>{let M=["#d8352a","#2f6fd8","#f4f4f0"][a];q(x,0,0,f,v,M),q(x,8,10,f-16,v*.55,"#eef4f8");let w=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let y=0;y<4;y++)for(let S=0;S<6;S++){let T=14+S*17,A=18+y*30;x.fillStyle=w[(y*6+S+a)%w.length],x.fillRect(T,A,11,20),x.fillStyle="rgba(255,255,255,0.5)",x.fillRect(T+2,A+2,3,14),x.fillStyle="#2a2a2a",x.fillRect(T,A+23,11,3)}q(x,10,v*.62,f-20,22,"#222"),q(x,f-34,v*.66,14,22,"#bbb"),q(x,14,v*.82,f-28,22,"#1b1b1b"),It(x,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][a],f/2,v*.62+11,f-28,14,"#fff",700),xn(x,i,f,v,.08),p.fillStyle="#f2f8ff",p.fillRect(8,10,f-16,v*.55);for(let y=0;y<4;y++)for(let S=0;S<6;S++)p.fillStyle=w[(y*6+S+a)%w.length],p.fillRect(14+S*17,18+y*30,11,20);p.fillStyle="#9fd0ff",p.fillRect(10,v*.62,f-20,22)});i.add("ac",128,88,(a,x,p,f)=>{q(a,0,0,p,f,"#e9e9e4"),In(a,0,0,p,f,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),a.fillStyle="#9a9c9e",a.beginPath(),a.arc(p*.4,f*.5,f*.36,0,7),a.fill(),a.strokeStyle="#d6d6d2",a.lineWidth=2;for(let v=6;v<f*.36;v+=6)a.beginPath(),a.arc(p*.4,f*.5,v,0,7),a.stroke();for(let v=12;v<f-10;v+=6)q(a,p*.78,v,p*.16,2,"#b8b8b2")}),i.add("plate",128,64,(a,x,p,f)=>{q(a,0,0,p,f,"#f2cf3a"),a.strokeStyle="#2f5a2f",a.lineWidth=3,a.strokeRect(3,3,p-6,f-6),It(a,"\u54C1\u5DDD 580",p/2,16,p*.6,14,"#2f5a2f",700),It(a,"\u3042 12-34",p/2,42,p*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(a,x,p,f)=>{a.fillStyle="#fff",a.beginPath(),a.moveTo(2,2),a.lineTo(p-2,2),a.lineTo(p/2,f-2),a.fill(),a.fillStyle="#d8231c",a.beginPath(),a.moveTo(10,7),a.lineTo(p-10,7),a.lineTo(p/2,f-12),a.fill(),It(a,"\u6B62\u307E\u308C",p/2,34,p*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(a,x,p,f)=>{a.fillStyle="#fff",a.beginPath(),a.arc(p/2,f/2,p/2-1,0,7),a.fill(),a.fillStyle="#1e5bb8",a.beginPath(),a.arc(p/2,f/2,p/2-6,0,7),a.fill(),a.fillStyle="#fff",a.beginPath(),a.moveTo(p/2,22),a.lineTo(p/2+22,50),a.lineTo(p/2+8,50),a.lineTo(p/2+8,88),a.lineTo(p/2-8,88),a.lineTo(p/2-8,50),a.lineTo(p/2-22,50),a.fill()}),i.add("sign_speed",112,112,(a,x,p,f)=>{a.fillStyle="#fff",a.beginPath(),a.arc(p/2,f/2,p/2-1,0,7),a.fill(),a.strokeStyle="#d8231c",a.lineWidth=12,a.beginPath(),a.arc(p/2,f/2,p/2-9,0,7),a.stroke(),It(a,"30",p/2,f/2+2,p*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(a,x,p,f)=>{q(a,0,0,p,f,"#1d4f9a"),a.strokeStyle="#fff",a.lineWidth=2,a.strokeRect(3,3,p-6,f-6),$u(a,"\u672C\u753A\u4E8C\u4E01\u76EE",p/2,10,f-10,24,"#fff",700)});for(let a=0;a<4;a++)i.add("poster"+a,64,90,(x,p,f,v)=>{let M=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][a];q(x,0,0,f,v,M),q(x,4,4,f-8,v*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][a]),It(x,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][a],f/2,v*.25,f-12,18,"#fff",900);for(let w=0;w<4;w++)q(x,8,v*.58+w*8,f-16-w%2*14,3,"rgba(60,60,60,0.5)")});for(let a=0;a<3;a++)i.add("bal"+a,t,88,(x,p,f,v)=>{let M=["#e9e3d6","#dfe6ea","#efe2dc"][a];if(Lo(x,i,f,v,M),a===1)for(let w=10;w<f-6;w+=f/6)q(x,w,10,f/6-8,v-20,"rgba(220,235,245,0.9)"),x.fillStyle="rgba(255,255,255,0.45)",x.fillRect(w,10,f/6-8,(v-20)*.4);else{q(x,0,0,f,7,"rgba(255,255,255,0.4)");for(let w=f/3;w<f;w+=f/3)q(x,w-1,0,2,v,"rgba(0,0,0,0.08)")}q(x,0,v-6,f,6,"rgba(0,0,0,0.12)"),ws(x,f*.3,v-6,10,10,.2)});i.add("kawara",272,256,(a,x,p,f)=>{q(a,0,0,p,f,"#58617a");for(let v=0;v<f;v+=16)In(a,0,v,p,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let v=-4;v<p;v+=20)q(a,v,0,2,f,"rgba(0,0,0,0.18)");xn(a,i,p,f,.12)}),i.add("wood",256,256,(a,x,p,f)=>{q(a,0,0,p,f,"#6d4c37");for(let v=0;v<f;v+=14)q(a,0,v,p,2,"rgba(25,15,8,0.4)"),q(a,0,v+2,p,1,"rgba(255,220,180,0.07)");xn(a,i,p,f,.16)}),i.add("block",256,128,(a,x,p,f)=>{q(a,0,0,p,f,"#c9c7bf");for(let v=0;v<f;v+=32)for(let M=v/32%2?-32:0;M<p;M+=64)a.strokeStyle="rgba(80,80,80,0.35)",a.lineWidth=2,a.strokeRect(M+1,v+1,62,30);for(let v=0;v<p;v+=64)a.fillStyle="rgba(70,70,70,0.25)",a.fillRect(v+20,40,24,16);xn(a,i,p,f,.15),ws(a,0,0,p,40,.1)}),i.add("lantern",64,96,(a,x,p,f)=>{a.fillStyle="#d8352a",a.beginPath(),a.ellipse(p/2,f/2,p/2-2,f/2-8,0,0,7),a.fill();for(let v=16;v<f-12;v+=7)q(a,4,v,p-8,1.5,"rgba(0,0,0,0.2)");q(a,p/2-14,2,28,8,"#222"),q(a,p/2-14,f-10,28,8,"#222"),It(a,"\u796D",p/2,f/2,p*.6,28,"#fff",900),x.fillStyle="#ff6a35",x.beginPath(),x.ellipse(p/2,f/2,p/2-2,f/2-8,0,0,7),x.fill()}),i.add("busstop",96,96,(a,x,p,f)=>{a.fillStyle="#fff",a.beginPath(),a.arc(p/2,f/2,p/2-1,0,7),a.fill(),a.strokeStyle="#d8231c",a.lineWidth=8,a.beginPath(),a.arc(p/2,f/2,p/2-6,0,7),a.stroke(),It(a,"\u30D0\u30B9\u505C",p/2,f/2,p*.66,20,"#1d3d8a",900)}),i.add("white",16,16,a=>q(a,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(a,x,p,f)=>{a.save(),a.translate(p/2,f/2),a.rotate(Math.PI/4),a.fillStyle="#1b1b1b",a.fillRect(-41,-41,82,82),a.fillStyle="#f2c230",a.fillRect(-37,-37,74,74),a.restore(),a.fillStyle="#1b1b1b",a.fillRect(p/2-22,f/2-6,44,18),a.fillRect(p/2-16,f/2-16,18,12),a.fillRect(p/2+8,f/2-13,5,7),a.beginPath(),a.arc(p/2-12,f/2+15,5,0,7),a.arc(p/2+12,f/2+15,5,0,7),a.fill(),It(a,"\u8E0F\u5207",p/2,f/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((a,x)=>i.add("bridge"+x,64,176,(p,f,v,M)=>{q(p,0,0,v,M,"#b9b5ab"),xn(p,i,v,M,.2),q(p,6,6,v-12,M-12,"#a7a398"),$u(p,a,v/2,14,M-14,34,"#3f3c37",800)})),i.add("signal",240,84,(a,x,p,f)=>{q(a,0,0,p,f,"#4a4d52"),q(a,0,0,p,5,"#5c6066"),xn(a,i,p,f,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([v,M])=>{a.fillStyle="#26282c",a.beginPath(),a.arc(M,f/2,33,0,7),a.fill(),a.fillStyle=v,a.beginPath(),a.arc(M,f/2,27,0,7),a.fill()})}),i.add("ped_sig",64,128,(a,x,p,f)=>{q(a,0,0,p,f,"#3d4045"),a.fillStyle="#5a1814",a.fillRect(8,8,p-16,f/2-12),a.fillStyle="#0d4f44",a.fillRect(8,f/2+4,p-16,f/2-12),a.fillStyle="rgba(255,255,255,0.18)",a.beginPath(),a.arc(p/2,f*.18,6,0,7),a.fill(),a.fillRect(p/2-5,f*.24,10,18)}),i.add("tomare",256,96,(a,x,p,f)=>{a.clearRect(0,0,p,f),a.fillStyle="rgba(244,244,238,0.012)",a.fillRect(0,0,p,f),It(a,"\u6B62\u307E\u308C",p/2,f/2+4,p*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((a,x)=>i.add("hodokyo"+x,256,44,(p,f,v,M)=>{q(p,0,0,v,M,"#1f4f96"),p.strokeStyle="#fff",p.lineWidth=3,p.strokeRect(4,4,v-8,M-8),It(p,a,v/2,M/2+1,v*.85,28,"#fff",800)}));let E=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];E.forEach(([a,x,p],f)=>{let v=E[(f+3)%4][0],M=E[(f+1)%4][0];i.add("ekimei"+f,320,124,(w,y,S,T)=>{q(w,0,0,S,T,"#3a3d42"),q(w,4,4,S-8,T-8,"#f8f8f3"),It(w,x,S/2,20,S*.5,15,"#2b2b2b",700),It(w,a,S/2,52,S*.6,40,"#151515",900),It(w,p,S/2,80,S*.5,12,"#555",600),q(w,4,T-30,S-8,26,"#1f9a50"),w.fillStyle="#fff",ju(w,12,700),w.textBaseline="middle",w.textAlign="left",w.fillText("\u2190 "+v,12,T-17),w.textAlign="right",w.fillText(M+" \u2192",S-12,T-17),xn(w,i,S,T,.06),q(y,4,4,S-8,T-8,"#8a8a84")}),i.add("ekiplate"+f,220,48,(w,y,S,T)=>{q(w,0,0,S,T,"#4b3326"),xn(w,i,S,T,.2),It(w,a+"\u99C5",S/2,T/2+1,S*.8,30,"#f3ead8",800)})});for(let a of["l","r"])i.add("chev_"+a,96,120,(x,p,f,v)=>{q(x,0,0,f,v,"#f4f4ef"),q(x,4,4,f-8,v-8,"#1e5bb8"),x.fillStyle="#f8f8f4",x.beginPath();let M=a==="r"?1:-1,w=f/2,y=v/2;x.moveTo(w-M*26,y-40),x.lineTo(w+M*22,y),x.lineTo(w-M*26,y+40),x.lineTo(w-M*8,y+40),x.lineTo(w+M*40,y),x.lineTo(w-M*8,y-40),x.closePath(),x.fill()});["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((a,x)=>i.add("tunnel"+x,360,80,(p,f,v,M)=>{q(p,0,0,v,M,"#e9e7e0"),q(p,4,4,v-8,M-8,"#24403b"),xn(p,i,v,M,.08),It(p,a,v/2,M*.42,v*.8,38,"#f4f2ea",800),It(p,"L = 170 m",v/2,M*.8,v*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(a,x,p,f)=>{q(a,0,0,p,f,"#f6f6f2"),a.fillStyle="#d42a22";for(let v=-20;v<f;v+=26)a.beginPath(),a.moveTo(4,v),a.lineTo(p/2,v+20),a.lineTo(p-4,v),a.lineTo(p-4,v+11),a.lineTo(p/2,v+31),a.lineTo(4,v+11),a.closePath(),a.fill();a.strokeStyle="#222",a.lineWidth=3,a.strokeRect(1.5,1.5,p-3,f-3)}),i.add("xing_plate",128,48,(a,x,p,f)=>{q(a,0,0,p,f,"#f6f6f2"),a.strokeStyle="#d8231c",a.lineWidth=4,a.strokeRect(3,3,p-6,f-6),It(a,"\u8E0F\u5207\u6CE8\u610F",p/2,f/2,p*.8,26,"#d8231c",900)}),i.add("rail",240,80,(a,x,p,f)=>{a.clearRect(0,0,p,f),q(a,0,0,p,7,"#e9ebee"),q(a,0,6,p,2,"rgba(60,70,80,0.5)"),q(a,0,f-6,p,6,"#d5d8dc");for(let v=3;v<p;v+=9)q(a,v,7,3,f-13,"#e2e5e9"),q(a,v+2,7,1,f-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(a,x,p,f)=>{let v=Ot(4242);q(a,0,0,p,f,"#3d3f3c");let M=38,w=M/Math.SQRT2;a.save(),a.beginPath(),a.rect(0,22,p,f-22),a.clip();for(let y=-2;y*w<f+M;y++)for(let S=-2;S*M<p+M;S++){let T=S*M+(y%2?M/2:0),A=22+y*w,R=.52+v()*.17,C=Math.min(1,Math.max(0,(A-f*.55)/(f*.4))),P=Math.round(255*R*(1-.38*C)),L=`rgb(${P-4},${P-2},${P-9})`;a.fillStyle=L,a.beginPath(),a.moveTo(T,A-w+3.5),a.lineTo(T+w-3.5,A),a.lineTo(T,A+w-3.5),a.lineTo(T-w+3.5,A),a.closePath(),a.fill(),a.fillStyle="rgba(255,255,255,0.12)",a.beginPath(),a.moveTo(T,A-w+3.5),a.lineTo(T+w-3.5,A),a.lineTo(T,A),a.closePath(),a.fill(),C>.3&&v()<.5&&(a.fillStyle=`rgba(70,96,52,${.25+.3*v()})`,a.beginPath(),a.arc(T+(v()-.5)*10,A+6,4+v()*6,0,7),a.fill())}a.restore(),In(a,0,f*.55,p,f*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),q(a,0,0,p,22,"#8c8d87"),q(a,0,18,p,4,"rgba(0,0,0,0.3)"),q(a,0,0,p,3,"rgba(255,255,255,0.2)"),xn(a,i,p,f,.12)}),i.add("wrail",240,80,(a,x,p,f)=>{a.clearRect(0,0,p,f),q(a,0,0,p,9,"#6a4a34"),q(a,0,0,p,2,"rgba(255,225,190,0.25)"),q(a,0,8,p,2,"rgba(20,10,5,0.45)"),q(a,0,f-10,p,10,"#5e412e"),q(a,0,f-10,p,2,"rgba(255,225,190,0.18)");for(let v=4;v<p;v+=12)q(a,v,9,5,f-19,"#634632"),q(a,v,9,1.2,f-19,"rgba(255,225,190,0.18)"),q(a,v+4,9,1,f-19,"rgba(20,10,5,0.4)");xn(a,i,p,f,.15)}),i.add("woodwall",t,t,(a,x,p,f)=>{let v=Ot(5151);q(a,0,0,p,f,"#5e4130");for(let M=0;M<f;M+=16){let w=v();q(a,0,M,p,16,w<.15?"#6b4b37":w<.3?"#553a2b":"#5e4130"),q(a,0,M,p,2,"rgba(255,220,180,0.12)"),q(a,0,M+14,p,2,"rgba(15,8,4,0.45)");for(let y=v()*80;y<p;y+=60+v()*90)q(a,y,M+2,1.5,12,"rgba(15,8,4,0.35)")}In(a,0,0,p,f,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),xn(a,i,p,f,.2)});let b=(a,x,p,f,v,M)=>{let w=Ot(v),y=M===2;q(a,0,0,p,f,"#4b3426"),In(a,0,0,p,f,[[0,"rgba(255,230,200,0.08)"],[1,"rgba(0,0,0,0.2)"]]);let S=p*.12,T=f*(y?.3:.17),A=p*.76,R=f*(y?.62:.56);for(let C of[a,x])q(C,S,T,A,R,"#e9b56c"),In(C,S,T,A,R,[[0,"rgba(255,240,200,0.55)"],[1,"rgba(110,60,25,0.4)"]]);if(!y)for(let C=T+R*.32;C<T+R-6;C+=R*.22){for(let P=S+4;P<S+A-10;P+=9+w()*12){let L=10+w()*12;q(a,P,C-L,7,L,["#c0503a","#3a6ab0","#e8c050","#5a9a50","#d07a9a"][Math.floor(w()*5)])}q(a,S,C,A,5,"#6e4a30")}y&&(q(a,S,T-f*.12,A,f*.16,"#28356a"),q(x,S,T-f*.12,A,f*.16,"#000")),q(a,S+A/2-4,T,8,R,"#4b3426"),q(x,S+A/2-4,T,8,R,"#000"),q(a,0,T+R,p,6,"#3a281d"),xn(a,i,p,f,.15)};for(let a=0;a<4;a++)i.add("shop_p"+a,360,432,(x,p,f,v)=>b(x,p,f,v,6100+a,a));for(let[a,x]of[["win7",0],["win8",4]])i.add(a,360,348,(p,f,v,M)=>n(p,f,v,M,!1,x)),i.add(a+"L",360,348,(p,f,v,M)=>n(p,f,v,M,!0,x));return i}function Bm(i,e){let t=e.img.width,n=e.img.height;for(let s of e.tiles)i.paintCell(s.name,e.img,s.x*t,s.y*n,s.w*t,s.h*n,s.ey*n)}function Om(i){let n=Ju(1024,3072),s=n.getContext("2d"),r=Ot(321),o={},l=512,c={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},u=(a,x,p)=>{let f=c[a],v=256,M=a==="pine",w=a==="sakura";s.save(),s.translate(x,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let y=[[v,v,M?80:92]];for(let T=0;T<(M?10:14);T++){let A=r()*6.28,R=45+r()*120;y.push([v+Math.cos(A)*R,v+Math.sin(A)*R*(M?.42:.9),Math.min(34+r()*52,232-R)])}let S=w?2300:M?2600:2300;for(let T=0;T<S;T++){let A=y[Math.floor(r()*y.length)],R=r()*6.28,C=Math.sqrt(r())*A[2],P=A[0]+Math.cos(R)*C,L=A[1]+Math.sin(R)*C*(M?.45:1),D=C/A[2],B=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(D>.82?.5:0))));if(s.fillStyle=f[B],w){let V=7+r()*8;s.beginPath(),s.arc(P,L,V,0,7),s.fill(),r()<.25&&(s.fillStyle=f[4],s.beginPath(),s.arc(P-V*.3,L-V*.3,V*.4,0,7),s.fill())}else if(M)s.save(),s.translate(P,L),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(a==="momiji"){let V=8+r()*7;s.save(),s.translate(P,L),s.rotate(r()*6.28),s.beginPath();for(let O=0;O<10;O++){let k=O%2?V*.42:V,z=O/10*6.2832;s.lineTo(Math.cos(z)*k,Math.sin(z)*k)}s.closePath(),s.fill(),s.restore()}else if(a==="ginkgo"){let V=9+r()*7;s.save(),s.translate(P,L),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,V,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let V=9+r()*10;s.beginPath(),s.ellipse(P,L,V,V*.55,r()*6.28,0,7),s.fill()}}for(let T=0;T<90;T++){let A=r()*6.28,R=150+r()*85,C=v+Math.cos(A)*R,P=v+Math.sin(A)*R*(M?.45:.92);s.fillStyle=f[1+Math.floor(r()*4)],M?(s.save(),s.translate(C,P),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(C,P,w?6+r()*6:7+r()*6,0,7),s.fill())}if(w)for(let T=0;T<14;T++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let A=v+(r()-.5)*300,R=v+60+r()*120;s.beginPath(),s.moveTo(A,R),s.lineTo(A+(r()-.5)*40,R-20-r()*30),s.stroke()}s.restore(),o[a]={u0:x/1024,u1:(x+512)/1024,v0:1-(p+512)/3072,v1:1-p/3072}},h=(a,x,p,f)=>{s.save(),s.translate(x,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let v=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],M=f?120:170;for(let w=0;w<M;w++){let y=256+(r()-.5)*(f?330:380)*Math.sqrt(r()),S=150+r()*(f?230:300)*(1-Math.abs(y-256)/300),T=(y-256)*.35+(r()-.5)*90,A=9+r()*9,R=y+T,C=512-S,P=Math.min(4,Math.floor(r()*2.2+S/380*2.6)),L=s.createLinearGradient(0,512,0,C);L.addColorStop(0,v[0]),L.addColorStop(.6,v[Math.max(1,P-1)]),L.addColorStop(1,v[P]),s.fillStyle=L,s.beginPath(),s.moveTo(y-A/2,512),s.quadraticCurveTo(y-A/2+T*.3,512-S*.55,R,C),s.quadraticCurveTo(y+A/2+T*.3,512-S*.5,y+A/2,512),s.fill()}if(f)for(let w=0;w<16;w++){let y=110+r()*290,S=150+r()*200,T=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(y+(r()-.5)*20,512),s.quadraticCurveTo(y+(r()-.5)*30,(S+512)/2,y,S),s.stroke(),T<.55){s.fillStyle="#fbfaf2";for(let A=0;A<12;A++){let R=A/12*6.283;s.beginPath(),s.ellipse(y+Math.cos(R)*11,S+Math.sin(R)*11,9,4.5,R,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(y,S,8,0,7),s.fill()}else if(T<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(y,S,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(y-3,S-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let A=0;A<6;A++)s.beginPath(),s.arc(y+(r()-.5)*16,S+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),o[a]={u0:x/1024,u1:(x+512)/1024,v0:1-(p+512)/3072,v1:1-p/3072}},g=(a,x,p)=>{let f=Ot(97);s.save(),s.translate(x,p),s.beginPath(),s.rect(0,0,512,512),s.clip(),s.lineCap="round";let v=(M,w,y,S,T,A)=>{let R=M+Math.cos(y)*S,C=w+Math.sin(y)*S;if(s.strokeStyle=A>3?"#76605f":A>1?"#6c5458":"#62494f",s.lineWidth=T,s.beginPath(),s.moveTo(M,w),s.lineTo(R,C),s.stroke(),A<=0||T<.7)return;let P=2+(f()<.4?1:0);for(let L=0;L<P;L++){let D=y+(f()-.5)*1.1+(L-(P-1)/2)*.42;D=D*.8+-Math.PI/2*.2,v(R,C,D,S*(.62+f()*.2),T*.68,A-1)}};for(let M=0;M<6;M++)v(256+(f()-.5)*40,500,-Math.PI/2+(f()-.5)*.9,110+f()*50,5.6,6);s.restore(),o[a]={u0:x/1024,u1:(x+512)/1024,v0:1-(p+512)/3072,v1:1-p/3072}},m=(a,x,p,f,v)=>{let M=Ot(f),w=1024,y=504;s.save(),s.translate(x,p+8),s.beginPath(),s.rect(0,0,512,y),s.clip(),s.scale(.5,1);let S=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],T=D=>{let B=D/w;return(.5+.5*Math.min(1,B/.45)**.8)*(1-.4*Math.max(0,(B-.9)/.1))},A=(D,B,V,O)=>{B=Math.min(B,y*.985);let k=D+V,z=y-B,W=D+V*.25,ce=y-B*.62-Math.abs(V)*.35;s.moveTo(D-O/2,y),s.quadraticCurveTo(W-O*.42,ce,k,z),s.quadraticCurveTo(W+O*.42,ce+O*.5,D+O/2,y),s.closePath()},R=[];for(let D=24+M()*24;D<w-20;D+=(D<w*.25?56:44)+M()*26)R.push(D);let C=()=>R[Math.floor(M()*R.length)],P=(D,B,V,O,k,z,W,ce,Ne)=>{let Oe=S.map(()=>[]);for(let Ee=0;Ee<D;Ee++){let $=C(),J=$+(M()-.5)*34,le=T(J),Ce=J/w,Se=y*(B+M()*(V-B))*le*1.12,ke=(M()-.5)*O+(J-w*.45)*.12;Oe[Math.min(8,ce+Math.floor(M()*(Ne-ce+1)+Ce*1.2))].push([J,Se,ke,k+M()*(z-k)])}Oe.forEach((Ee,$)=>{if(!Ee.length)return;let J=s.createLinearGradient(0,y,0,y*(1-V*.8));J.addColorStop(0,S[W]),J.addColorStop(.55,S[Math.round((W+$)/2)]),J.addColorStop(1,S[$]),s.fillStyle=J,s.beginPath();for(let le of Ee)A(le[0],le[1],le[2],le[3]);s.fill()})};P(360,.25,.55,150,12,22,0,2,3),P(240,.4,.78,260,10,17,1,4,6);let L=[];for(let D=0;D<4;D++){let B=w*(.14+M()*.74),V=T(B);L.push({fx:B,fy:Math.max(56,y-y*(.56+M()*.38)*V*1.05),kind:M()<v?0:1,sz:.85+M()*.4,tilt:.72+M()*.28,rot:M()*6.28,sx:B+(M()-.5)*60})}s.lineCap="round";for(let D of L)s.strokeStyle="#2c6623",s.lineWidth=6,s.beginPath(),s.moveTo(D.sx,y),s.quadraticCurveTo((D.sx+D.fx)/2+(M()-.5)*40,(y+D.fy)/2,D.fx,D.fy+8),s.stroke();P(150,.5,.92,330,9,16,2,6,7);for(let D of L){if(s.save(),s.translate(D.fx,D.fy),s.scale(1,D.tilt),D.kind===0){let B=38*D.sz;for(let V=0;V<16;V++){let O=D.rot+V/16*6.283;s.fillStyle=Math.sin(O)>.4?"#e2e3ea":"#fdfdf6",s.beginPath(),s.ellipse(Math.cos(O)*B*.56,Math.sin(O)*B*.56,B*.48,B*.14,O,0,7),s.fill()}s.fillStyle="#f2b51a",s.beginPath(),s.arc(0,0,B*.28,0,7),s.fill(),s.fillStyle="#fbe060",s.beginPath(),s.arc(-B*.07,-B*.07,B*.14,0,7),s.fill()}else{let B=40*D.sz;for(let V=0;V<5;V++){let O=D.rot+V/5*6.283;s.fillStyle="#fccc1e",s.beginPath(),s.ellipse(Math.cos(O)*B*.52,Math.sin(O)*B*.52,B*.52,B*.38,O,0,7),s.fill()}for(let V=0;V<5;V++){let O=D.rot+V/5*6.283;s.fillStyle="#ffe873",s.beginPath(),s.ellipse(Math.cos(O)*B*.62,Math.sin(O)*B*.62-3,B*.26,B*.15,O,0,7),s.fill()}s.fillStyle="#e39b14",s.beginPath(),s.arc(0,0,B*.2,0,7),s.fill()}s.restore()}P(40,.42,.85,280,8,14,3,6,7),s.restore(),o[a]={u0:x/1024,u1:(x+512)/1024,v0:1-(p+512)/3072,v1:1-(p+8)/3072}},d=(a,x,p,f)=>{let v=Ot(f),M=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];s.save(),s.translate(x,p),s.beginPath(),s.rect(0,0,512,512),s.clip();let w=[];for(let y=0;y<15;y++){let S=(y+v()*.6)/15,T=40+S*432,A=500-300*Math.sqrt(Math.max(0,1-((T-256)/232)**2));w.push([T,A+60+v()*50,54+v()*46])}for(let y=0;y<2600;y++){let S=w[Math.floor(v()*w.length)],T=v()*6.283,A=Math.sqrt(v())*S[2],R=S[0]+Math.cos(T)*A,C=Math.min(505,S[1]+Math.sin(T)*A*.85),P=Math.sin(T)<-.2?1:0,L=Math.max(0,Math.min(6,Math.floor(v()*2.4+(1-C/512)*3.2+P*1.3+A/S[2]*.8)));s.fillStyle=M[L],s.beginPath(),s.ellipse(R,C,7+v()*7,4+v()*4,v()*6.28,0,7),s.fill()}for(let y=0;y<130;y++){let S=w[Math.floor(v()*w.length)],T=-Math.PI*(.1+v()*.8),A=(.35+v()*.6)*S[2],R=S[0]+Math.cos(T)*A,C=S[1]+Math.sin(T)*A*.85;if(C>470)continue;let P=6+v()*5,L=v()*6.28,D=v()<.12;s.fillStyle=D?"#f3d2dc":"#fbfbf6";for(let B=0;B<5;B++){let V=L+B/5*6.283;s.beginPath(),s.ellipse(R+Math.cos(V)*P*.55,C+Math.sin(V)*P*.5,P*.5,P*.36,V,0,7),s.fill()}s.fillStyle="#d9b628",s.beginPath(),s.arc(R,C,P*.22,0,7),s.fill()}s.restore(),o[a]={u0:x/1024,u1:(x+512)/1024,v0:1-(p+512)/3072,v1:1-p/3072}};g("twigs",0,0),d("flowerbush",512,0,6151),u("leafA",0,l),u("leafB",512,l),u("sakura",0,l+512),u("pine",512,l+512),u("momiji",0,l+1024),u("ginkgo",512,l+1024),h("grass",0,l+1536,!1),h("flowers",512,l+1536,!0),m("bankA",0,l+2048,4111,.7),m("bankB",512,l+2048,4127,.35);let _=new ti(n);_.colorSpace=Gt,_.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let E=1-(l+2048)/3072,b=1-(l+2056)/3072;return{tex:_,cells:o,tuftV:[E,1-(l+1536)/3072,b,(E+b)/2]}}var fn=[1,1,1],Me={pole:ge("#b1b0a9"),metal:ge("#8d9198"),black:ge("#2a2b30"),yellow:ge("#f2c230"),white:ge("#f4f3ee"),trans:ge("#a0a3a8"),lampPole:ge("#727780"),lampHead:ge("#dcdcd6"),trunk:ge("#6a5444"),trunkDark:ge("#4b3a33"),bark:ge("#7a6556"),leaf:ge("#86ba4c"),leafShade:ge("#2c6640"),sakura:ge("#ffd3e3"),sakuraShade:ge("#de94b4"),pine:ge("#55874c"),pineShade:ge("#1d4632"),cedar:ge("#41713e"),cedarShade:ge("#1b3e2a"),roof:ge("#bdbbb3"),parapet:ge("#dcdad2"),pipe:ge("#c4c4bf"),orange:ge("#f07a22"),red:ge("#d8352a"),vermilion:ge("#e2482c"),concrete:ge("#c9c7c0"),stone:ge("#a8a69e"),terracotta:ge("#b8653d"),rail:ge("#eeeeea")},pd=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(ge),Rs=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(ge),sM=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(ge),rM=["#c62f2a","#2b46a6","#7b3c9e","#b8336f","#a8282a","#273b86"].map(ge),md=null;function Xm(i){md=i}var Li=i=>md.uv(i),Fo=Li,qm=(i,e)=>{let t=1;for(;md.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function Ym(i,e,t,n,s=0){let r=new Qe().makeRotationY(s);r.setPosition(e,t,n);let o=new Qe().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var gd=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let l=e[5];(l==="g"&&e[6]==="l"||l==="d"||l==="k"||l==="c"||l==="n"||l==="p")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},on=(i,e,t,n,s,r,o,l=fn)=>{gd(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,Li(o)),i.litV=0},Ji=(i,e,t,n,s,r,o,l=fn)=>{gd(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,Li(o)),i.litV=0},ji=(i,e,t,n,s,r,o,l=fn)=>{gd(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,Li(o)),i.litV=0},Uo=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Li(r):void 0),oM=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Zm(i){return oM.map(e=>new H(e[0],e[1],e[2]).applyMatrix4(i))}function vd(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Me.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Me.black:Me.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Me.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Me.metal);let o=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,Me.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,Me.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Me.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Me.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Me.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Me.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Me.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Me.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,Me.metal);return i.atlas.setM(e),on(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&on(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new H(u[0],u[1],u[2]).applyMatrix4(e))}var Qu=new H;function er(i,e,t,n,s,r){i.lamps&&(Qu.set(t,n,s).applyMatrix4(e),i.lamps.push(Qu.x,Qu.y,Qu.z,r))}function xd(i,e,t,n={}){let s=i.color;s.setM(e),er(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Me.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Me.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Me.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Me.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,fn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function $m(i,e,t=.04){let n=i.color;n.setM(e),er(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Me.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Me.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Me.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,fn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],fn,{u0:0,u1:1,v0:0,v1:1})}function No(i,e,t,n,s,r,o=!1,l=!1){let c=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[h,g]=c[u],[m,d]=c[(u+1)%4];i.quad([h*n,e,g*n],[h*s,t,g*s],[m*s,t,d*s],[m*n,e,d*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),l&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var aM=ge("#202127");function hl(i,e){let t=i.color;t.setM(e),er(i,e,0,3.4,0,.9);let n=aM,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),No(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),No(t,3.64,3.84,.23,.05,n),No(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,fn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],fn,{u0:0,u1:1,v0:0,v1:1})}function yd(i,e,t){let n=Math.floor(t()*3),s=[Me.red,ge("#2f6fd8"),Me.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Un(s,.8)),i.atlas.setM(e),on(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function dd(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,ge("#e6e6e1")),i.atlas.setM(e),on(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function Km(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ge("#c8ccd2"),ge("#c0392b"),ge("#2c6fb7"),ge("#2b2b2b"),ge("#e8c84a"),ge("#e98fb0")]);for(let o of[-.52,.52])for(let l=0;l<12;l++){let c=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([o+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Me.black)}let r=(o,l)=>n.rod(o,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Me.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Me.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Me.metal)}function Jm(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Me.orange),t.cyl(0,.04,0,.16,.03,.68,10,Me.orange),t.cyl(0,.32,0,.115,.095,.12,10,Me.white,!1)}function _d(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Me.terracotta),i.leaf.setM(e),Qi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}var lM=[[.35,.455],[.455,.56],[.56,.665]],zm=ge("#6b4a32");function cM(i,e,t,n,s){let r=i.color,o=i.atlas,l=.62,c=Li("shop_p1"),u=c.u1-c.u0,h=c.v1-c.v0;r.setM(e),o.setM(e);for(let g of[-1,1])r.box(t+g*l-.03,0,n-.32,t+g*l+.03,1.32,n+.24,zm);for(let g=0,m=Math.floor(s()*3);g<3;g++){let d=.2+g*.4,_=d+.36,E=n-.26+g*.16,b=E+.14,[a,x]=lM[(g+m)%3];o.quad([t+l,d,E],[t-l,d,E],[t-l,_,b],[t+l,_,b],fn,{u0:c.u0+u*.14,u1:c.u0+u*.86,v0:c.v1-h*x,v1:c.v1-h*a}),r.box(t-l,d-.05,E-.06,t+l,d,E+.12,zm)}}function tr(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Me.metal),i.atlas.setM(e),n<0?ji(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Ji(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function bd(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Me.white:Me.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Me.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Me.black),i.atlas.setM(e),t<0?ji(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Ji(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function jm(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,ge("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,ge("#f0a020"))}function Md(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Me.orange);let s=0,r=3.25,o=.42,l=14;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2,g=(m,d,_)=>[t*_,r+Math.sin(m)*d,s+Math.cos(m)*d-.25];Uo(n,g(0,0,-.02),g(t>0?h:u,o,-.02),g(t>0?u:h,o,-.02),Me.orange),Uo(n,g(0,0,-.035),g(t>0?h:u,o*.86,-.035),g(t>0?u:h,o*.86,-.035),ge("#dfe9f2"))}}var fl=null;function Qm(i){fl=i}var ul=1;function eg(i){ul=i}function Qi(i,e,t,n,s,r,o,l,c,u,h,g,m=0){let d=fl[o],_=1+(1-ul)*.35;l=Math.max(2,Math.round(l*ul));for(let E=0;E<l;E++){let b=c()*2-1,a=c()*2-1,x=c()*2-1;m&&(a=1.2+c());let p=Math.hypot(b,a,x)||1;b/=p,a/=p,x/=p;let f=-x,v=0,M=b;p=Math.hypot(f,M),p<.1&&(f=1,M=0,p=1),f/=p,M/=p;let w=a*M-x*v,y=x*f-b*M,S=b*v-a*f,T=Math.PI+(c()-.5)*.9,A=Math.cos(T),R=Math.sin(T),C=f*A+w*R,P=v*A+y*R,L=M*A+S*R,D=w*A-f*R,B=y*A-v*R,V=S*A-M*R,O=r*(1.3+c()*.45)*_/2,k=t+(c()-.5)*r*.6,z=n+(c()-.5)*r*(m?.15:.5),W=s+(c()-.5)*r*.6,ce=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ee,$])=>[k+(C*Ee+D*$)*O,z+(P*Ee+B*$)*O*(m?.6:1),W+(L*Ee+V*$)*O]),Ne=ce.map(Ee=>{let $=Ee[0]-e[0],J=Ee[1]-e[1],le=Ee[2]-e[2],Ce=Math.hypot($,J,le)||1;$/=Ce,J/=Ce,le/=Ce;let Se=Ee[0]-t,ke=Ee[1]-n,we=Ee[2]-s;return Ce=Math.hypot(Se,ke,we)||1,[$*.7+Se/Ce*.3,J*.7+ke/Ce*.3+(m?.5:0),le*.7+we/Ce*.3]}),Oe=ce.map(Ee=>Qf(h,u,.45+.55*Math.max(0,Math.min(1,(Ee[1]-g[0])/(g[1]-g[0])))));i.leaf.card(ce,Ne,d,Oe)}}function Sd(i,e,t,n="grass",s=1){let r=fl[n],o=(.42+t()*.38)*s,l=o*1.2,c=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],g=[.6,.64,.58],m=[1,1,1];i.leaf.setM(e);for(let d of[c,c+Math.PI/2]){let _=Math.cos(d)*l/2,E=Math.sin(d)*l/2;i.leaf.card([[-_,-.05,-E],[_,-.05,E],[_,o,E],[-_,o,-E]],h,r,[g,g,m,m])}}function tg(i,e,t,n=1){let s=fl.flowerbush;if(!s)return;let r=(.8+t()*.35)*n,o=r*1.7,l=t()*Math.PI,c=[0,1,0],u=[c,c,c,c],h=[.6,.64,.6],g=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let d=Math.cos(m)*o/2,_=Math.sin(m)*o/2;i.leaf.card([[-d,-.06,-_],[d,-.06,_],[d,r,_],[-d,r,-_]],u,s,[h,h,g,g])}}var uM=[.62,.68,.74],ng=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],hM=[0,1,2,0,2,3,0,3,4],fM=ng.map(([,i])=>Qf(uM,fn,i));function Ed(i,e,t,n,s,r,o,l=1){let c=fl[o()<.5?"bankA":"bankB"],u=.82*l,h=(u+.06)*2.03,g=i.leaf;for(let m of hM){let[d,_]=ng[m],E=(d-.5)*h;g.vtx(e+s*E,t+_*(u+.06)-.06,n+r*E,0,1,0,c.u0+(c.u1-c.u0)*d,c.v0+(c.v1-c.v0)*_,fM[m])}}var ig=()=>ul>.7?.9:1.25;function dM(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Me.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Me.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],c=7+Math.floor(t()*3);for(let u=0;u<c;u++){let h=t()*6.28,g=(.6+t())*1.3*n;Qi(i,r,Math.cos(h)*g,s*(.62+t()*.3),Math.sin(h)*g,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],l)}Qi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],l)}function km(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Me.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,g=(2.2+t()*1.6)*n,m=[Math.cos(h)*g,s*(.62+t()*.18),Math.sin(h)*g];i.color.rod([0,s*.4,0],m,.12*n,.05*n,5,Me.trunkDark),r.push(m),i.color.rod(m,[m[0]*1.25,m[1]+.9*n,m[2]*1.25],.05*n,.02*n,4,Me.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],l=[s*.5,s*1.1],c=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Qi(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],c,l);Qi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],c,l)}function pM(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,l=[r*.4,o*.45,.2],c=[r,o*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,Me.trunkDark),s.rod(l,c,.15*n,.09*n,6,Me.trunkDark),i.leaf.setM(e);let u=[[c[0],c[1]+.3,c[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[h,g,m,d]of u)s.rod(h>l[0]?l:c,[h,g-.2,m],.07*n,.04*n,4,Me.trunkDark),Qi(i,[h,g-.8,m],h,g,m,d*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[g-.7,g+.5],1)}function mM(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Me.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,g=(1.8+t()*1.4)*n,m=[Math.cos(h)*g,s*(.55+t()*.2),Math.sin(h)*g];i.color.rod([0,s*.38,0],m,.09*n,.04*n,5,Me.trunkDark),r.push(m)}i.leaf.setM(e);let o=[0,s*.7,0],l=[s*.45,s*1.1],c=[.62,.52,.56];for(let u of r)Qi(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],c,l);Qi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],c,l)}function gM(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Me.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],l=[.68,.6,.52];for(let c=0;c<7;c++){let u=s*(.34+c*.09),h=(2.1-c*.24)*n,g=t()*6.28;Qi(i,r,Math.cos(g)*h*.35,u,Math.sin(g)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],l,o)}}function vM(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,ge("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),g=h/r;s.cyl(o*g,h,0,.135*n*(1-g*.6),.13*n*(1-g*.6),.05,7,ge("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),g=t()*6.28,m=(.8+t()*1.6)*n,d=h/r;s.rod([o*d,h,0],[o*d+Math.cos(g)*m,h+m*.9,Math.sin(g)*m],.035*n,.012*n,4,ge("#8b7f78"))}let l=r*.7,c=(1.5+t()*.5)*n;i.leaf.setM(e),Qi(i,[o*.7,l,0],o*.7,l,0,c,"twigs",3,t,[1,1,1],[.92,.9,.92],[l-c,l+c])}function xM(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Me.trunkDark),i.foliage.setM(e);let r=ge("#1d3a2c"),o=ge("#eef2f8"),l=ge("#d7e0ec");for(let c=0;c<4;c++){let u=s*(.16+c*.19),h=(1.9-c*.38)*n,g=s*.3;i.foliage.cyl(0,u,0,h,h*.3,g,9,r),i.foliage.cyl(0,u+g*.45,0,h*.72,.05,g*.62,9,c%2?o:l)}}function yM(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Me.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Me.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Me.cedar)}var Di={cells:null,bcells:null};function _M(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.color;o.setM(e);let l=r*t.range(.3,.38);o.cyl(0,0,0,.27*n*s,.2*n*s,l,8,Me.trunk);let c=r*.64,u=t.range(2.6,3.2)*n*s,h=t.range(2,2.5)*n*s,g=n*s,m=[],d=5+Math.floor(t()*3);for(let p=0;p<d;p++){let f=p/d*6.283+t()*.6,v=t.range(-.15,.75),M=Math.sqrt(1-v*v);m.push([Math.cos(f)*M,v,Math.sin(f)*M])}m.push([0,1,0]);let _=[[0,c+.15*h,0,1.76*g,1]],E=26+Math.floor(t()*7);for(let p=0;p<E;p++){let f=t()*2-1,v=t.range(-.55,1),M=t()*2-1,w=Math.hypot(f,v,M)||1;f/=w,v/=w,M/=w;let y=m[0],S=-2;for(let A of m){let R=A[0]*f+A[1]*v+A[2]*M;R>S&&(S=R,y=A)}f=f*.45+y[0]*.55,v=v*.45+y[1]*.55,M=M*.45+y[2]*.55,w=Math.hypot(f,v,M)||1,f/=w,v/=w,M/=w;let T=t.range(.78,.95);_.push([f*u*T,c+v*h*T,M*u*T,t.range(.8,1.1)*g,0])}for(let p=0;p<4;p++){let f=m[p%d];o.rod([0,l*.9,0],[f[0]*u*.55,c+Math.min(0,f[1])*h*.4-.3*n,f[2]*u*.55],.15*g,.06*n,6,Me.trunk)}let b=t(),a=b<.5?[1,1,.92+b*.16]:[1-(b-.5)*.12,1,.9],x=i.gleaf;x.setM(e);for(let[p,f,v,M,w]of _){let y=p,S=(f-c)*(u/h)+.1*u,T=v,A=Math.hypot(y,S,T)||1;y/=A,S/=A,T/=A,w&&(y=T=0,S=-1);let R=Math.min(1,Math.max(0,(f-(c-h))/(2*h))),C=w?.55:.72+.28*R,P=M/.8*.88;x.bill(p,f,v,y,S,T,P,P,Di.cells[Math.floor(t()*Di.cells.length)],[a[0]*C,a[1]*C,a[2]*C],hm,.88)}}function Hm(i,e,t,n=1,s=!1){let r=i.color;r.setM(e);let o=s?1:0,l=t.range(2.2,2.7)*n,c=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,l,o*.3*n];r.rod([0,0,0],u,c,c*.8,7,Me.bark),r.cyl(0,0,0,c*1.25,c,.35*n,7,Me.bark,!1);let h=t.range(6.3,6.9)*n,g=-o*.5*n,m=t.range(4,4.5)*n,d=t.range(3.6,4)*n,_=t.range(1.7,2)*n,E=t()<.35?4:3,b=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let w=0;w<E;w++){let y=b+w/E*6.283+t.range(-.3,.3),S=Math.cos(y),T=Math.sin(y),A=t.range(.32,.46),R=[u[0]+S*m*A,h-_*t.range(.35,.55),u[2]*.5+g*.4+T*d*A],C=[u[0]+(R[0]-u[0])*.45+S*.25*n,l+(R[1]-l)*.55,u[2]+(R[2]-u[2])*.45+T*.25*n],P=(B,V,O)=>{let k=Math.hypot(V[0]-B[0],V[1]-B[1],V[2]-B[2])||1;return[V[0]-(V[0]-B[0])/k*O,V[1]-(V[1]-B[1])/k*O,V[2]-(V[2]-B[2])/k*O]};r.rod(u,C,c*.62,c*.46,6,Me.bark),r.rod(P(u,C,c*.5),R,c*.47,c*.3,5,Me.bark);let L=P(C,R,c*.35),D=w%2?1:2;for(let B=0;B<D;B++){let V=(B?1:-1)*t.range(.3,.9),O=t.range(1.2,1.9)*n;r.rod(L,[R[0]+Math.cos(y+V)*O,R[1]+t.range(.7,1.2)*n,R[2]+Math.sin(y+V)*O],c*.27,.04*n,4,Me.bark)}}let a=[],x=6+Math.floor(t()*2);for(let w=0;w<x;w++){let y=w/x*6.283+t()*.5,S=t.range(-.2,.6),T=Math.sqrt(1-S*S);a.push([Math.cos(y)*T,S,Math.sin(y)*T])}a.push([0,1,0]);let p=[[-m*.3,h,g,1.75*n,1],[m*.3,h,g,1.75*n,1]],f=21+Math.floor(t()*4);for(let w=0;w<f;w++){let y=t()*2-1,S=t.range(-.3,1),T=t()*2-1,A=Math.hypot(y,S,T)||1;y/=A,S/=A,T/=A;let R=a[0],C=-2;for(let L of a){let D=L[0]*y+L[1]*S+L[2]*T;D>C&&(C=D,R=L)}y=y*.5+R[0]*.5,S=S*.5+R[1]*.5,T=T*.5+R[2]*.5,A=Math.hypot(y,S,T)||1,y/=A,S/=A,T/=A;let P=t.range(.8,.95);p.push([y*m*P,h+S*_*P,g+T*d*P,t.range(1,1.3)*n,0])}let v=[1,t.range(.96,1.03),t.range(.97,1.02)],M=i.gblossom;M.setM(e);for(let[w,y,S,T,A]of p){let R=w/m,C=(y-h)/_+.12,P=(S-g)/d,L=Math.hypot(R,C,P)||1;R/=L,C/=L,P/=L,A&&(R=P=0,C=-1);let D=Math.min(1,Math.max(0,(y-(h-_))/(2*_))),B=A?.62:.8+.2*D,V=T/.8*.86;M.bill(w,y,S,R,C,P,V,V,Di.bcells[Math.floor(t()*Di.bcells.length)],[v[0]*B,v[1]*B,v[2]*B],fm,.86)}}var sg={broad:(i,e,t,n)=>(Di.cells?_M:dM)(i,e,t,n),sakura:(i,e,t,n)=>Di.bcells?Hm(i,e,t,n):km(i,e,t,n),sakuraAve:(i,e,t,n)=>Di.bcells?Hm(i,e,t,n,!0):km(i,e,t,n),pine:pM,cedar:yM,maple:mM,ginkgo:gM,birch:vM,snowcedar:xM},Vm={};function rg(i,e){let t=i+e,n=Vm[t];if(!n){let s={color:new rn,foliage:new rn,leaf:new rn({uv:!0}),gleaf:new rn({uv:!0,off:!0}),gblossom:new rn({uv:!0,off:!0})};sg[i](s,new Qe,Ot(1e3+e*77+i.length*13),1),n=Vm[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays()}}return n}function og(){for(let i in sg)for(let e=0;e<4;e++)rg(i,e)}function si(i,e,t,n,s=1){let r=rg(t,Math.floor(n()*4)),o=e.clone().scale(new H(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o)}var bM=new Set(["win0","win2","win5","win6"]),fs=(i,e,t)=>e<t?i+(e<t*.35&&bM.has(i)?"C":"L"):i;function dl(i,e,t,n,s,r,o){let l=Math.max(1,Math.round(t/3)),c=t/l;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let g=0;g<l;g++){let m=h>0&&r()<.3?fs("win6",r(),o):r()<.2?"win5":"plain";(u>0?Ji:ji)(i,u*e/2,g*c,(g+1)*c,n[h],n[h+1],m,s)}}function pl(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Me.roof);let o=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+o,l,Me.parapet),i.box(-e/2,n,t-l,e/2,n+o,t,Me.parapet),i.box(-e/2,n,0,-e/2+l,n+o,t,Me.parapet),i.box(e/2-l,n,0,e/2,n+o,t,Me.parapet),s()<.4){let c=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,g]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+h-.05,n,u+g-.05,c+h+.05,n+1,u+g+.05,Me.metal);i.cyl(c,n+1,u,.85,.85,1.3,12,ge("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Me.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Me.metal)}function eh(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Me.black);let r="vs"+Math.floor(s()*10);ji(i.atlas,e-.065,-.88,-.12,t,n,r),Ji(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Me.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Me.metal)}function Cs(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Me.concrete,null,{noBottom:!0}),n.type){case"shop":return SM(i,e,t,n);case"machiya":return EM(i,e,t,n);case"apt":return TM(i,e,t,n);case"office":return wM(i,e,t,n);case"konbini":return AM(i,e,t,n);case"house":return CM(i,e,t,n);case"tower":return PM(i,e,t,n)}}var ag=new Set(["glass","door","cafe","noren"]),MM={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function SM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:c}=n,u=i.atlas,h=i.color,g=3.6,m=3,d=g+(o-1)*m,_=Math.max(1,Math.round(s/3)),E=s/_,b=-s/2,a=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),x=[],p=0;for(let y=0;y<_;y++){let S=qm(t,"shop_"+a[y%a.length]);x.push(S),!p&&S.startsWith("shop_glass")&&S.length>10&&(p=+S.slice(10))}for(let y=0;y<_;y++){let S=a[y%a.length];on(u,b+y*E,b+(y+1)*E,0,g,0,p&&S==="glass"?"shop_glass"+p:x[y]),ag.has(S)&&er(i,e,b+(y+.5)*E,1.9,-.8,.7)}let f=t.pick([0,0,1,5,0,1]),v=[0,g];for(let y=1;y<o;y++)v.push(g+y*m);for(let y=1;y<o;y++)for(let S=0;S<_;S++){let T=S%2===1&&t()<.3?5:f;on(u,b+S*E,b+(S+1)*E,v[y],v[y+1],0,fs("win"+T,t(),c),l)}dl(u,s,r,v,l,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],Un(l,.8)),pl(h,s,r,d,t);let M=s*.94;h.box(-M/2,g-.8,-.3,M/2,g+.08,-.02,Me.black);let w="hs"+Math.floor(t()*14);if(on(u,-M/2,M/2,g-.8,g+.08,-.305,MM[p]||w),t()<.55){let y=t.pick(sM),S=g-.85;h.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],y),h.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],Un(y,.85))}if(o>=2&&t()<.85){let y=(t()<.5?1:-1)*(s/2-.35);eh(i,y,g+.3,Math.min(d-.15,g+2.8),t)}for(let y=1;y<o;y++)if(t()<.4){let S=Math.floor(t()*_),T=b+S*E+.15,A=b+(S+1)*E-.15,R=v[y];h.box(T,R-.12,-.9,A,R,0,Me.parapet),on(u,T,A,R,R+1,-.9,"rail"),ji(u,T,-.9,0,R,R+1,"rail"),Ji(u,A,-.9,0,R,R+1,"rail"),t()<.45&&fg(h,T+.1,A-.1,R+1.95,-.55,t),t()<.6&&dd(i,e,(T+A)/2+.6,R,-.75)}else if(t()<.35){let S=Math.floor(t()*_);dd(i,e,b+(S+.5)*E,v[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(b+.12,0,-.08,.05,.05,d,6,Me.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,ge("#d9d9d3")),o>=3&&t()<.18&&lg(i,s,d,r,t)}function EM(i,e,t,n){let{w:s,d:r,floors:o,litP:l}=n,c=i.atlas,u=i.color,h=3.6,g=2.9,m=h+(o-1)*g,d=-s/2,_=Math.max(2,Math.round(s/3)),E=s/_,b=ge("#5c4030"),a=ge("#3a2a20"),x=t.pick([["glass","door","glass"],["noren","door"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),p=t.pick(["shop_p0","shop_p0","shop_p1","shop_p3"]),f=[];for(let k=0;k<_;k++){let z=x[k%x.length];f.push(z==="glass"?p:z==="door"?"shop_p2":z==="cafe"?"shop_p3":qm(t,"shop_"+z))}let v=t()<.5?"":x.includes("glass")&&p==="shop_p1"?"hs9":x.includes("cafe")||x.includes("glass")&&p==="shop_p3"?"hs7":"";for(let k=0;k<_;k++){let z=x[k%x.length];on(c,d+k*E,d+(k+1)*E,0,h,0,f[k]),ag.has(z)&&er(i,e,d+(k+.5)*E,1.9,-.8,.7)}let M=!!n.plaster,w=n.tint,y=[0,h];for(let k=1;k<o;k++)y.push(h+k*g);for(let k=1;k<o;k++)for(let z=0;z<_;z++){let W=M?z%2===1&&t()<.3?"win5":"win7":"win8";on(c,d+z*E,d+(z+1)*E,y[k],y[k+1],0,fs(W,t(),l),W==="win5"?w:fn)}{let k=Math.max(1,Math.round(r/3)),z=r/k;for(let W of[-1,1])for(let ce=0;ce<y.length-1;ce++)for(let Ne=0;Ne<k;Ne++){let Oe=M?ce>0?fs(t()<.5?"win7":"win6",t(),l):"plain":ce>0&&t()<.45?fs("win4",t(),l):"woodwall";(W>0?Ji:ji)(c,W*s/2,Ne*z,(Ne+1)*z,y[ce],y[ce+1],Oe,M&&Oe[3]!=="7"?w:fn)}}u.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],M?Un(w,.8):ge("#6a5240"));for(let k of[d,-d])u.box(k-.09,0,-.12,k+.09,m,.02,a);if(M)for(let k=2;k<o;k++)u.box(d,y[k]-.1,-.08,-d,y[k]+.06,0,a);let{RC:S,k:T}=cg(i,n,s,r,m,t,!M),A=h+.62,R=1.05,C=.7,P=Math.max(2,Math.round((s+.3)/3));for(let k=0;k<P;k++){let z=d-.15+(s+.3)*k/P,W=d-.15+(s+.3)*(k+1)/P;c.quad([W,A-C,-R],[z,A-C,-R],[z,A,0],[W,A,0],S,T)}u.quad([d-.15,A-C-.03,-R],[-d+.15,A-C-.03,-R],[-d+.15,A-.1,0],[d-.15,A-.1,0],b);let L=Math.min(s*.9,4.4),D=A-C+.02,B=D-.62;u.box(-L/2,B,-R-.02,L/2,D,-R+.07,a),on(c,-L/2,L/2,B,D,-R-.025,v||"hs"+Math.floor(t()*14));for(let k of[-L/2+.25,L/2-.25])u.box(k-.03,D,-R+.02,k+.03,A-C*.1,-R+.06,a);i.sodium.setM(e),u.noShadow=!0;for(let k=0;k<_;k++){let z=d+(k+.5)*E;u.box(z-.008,B-.02,-.62,z+.008,A-C*.6,-.6,a),i.sodium.box(z-.06,B-.16,-.67,z+.06,B-.04,-.55,null)}u.noShadow=!1;let V=!1;if(t()<.5){V=!0;let k=t.pick(rM),z=B-.12;u.quad([s/2-.2,z-.32,-.95],[-s/2+.2,z-.32,-.95],[-s/2+.2,z,-.02],[s/2-.2,z,-.02],k),u.quad([s/2-.2,z-.55,-.95],[-s/2+.2,z-.55,-.95],[-s/2+.2,z-.32,-.95],[s/2-.2,z-.32,-.95],Un(k,.85))}if(o>=2&&(!M||t()<.5)){let k=y[1]+.42,z=-.5,W=d+.12,ce=-d-.12;u.box(W,k-.07,z-.04,ce,k,0,b);for(let Ne=0;Ne<_;Ne++)on(c,d+.12+(s-.24)*Ne/_,d+.12+(s-.24)*(Ne+1)/_,k,k+.95,z,"wrail");ji(c,W,z,0,k,k+.95,"wrail"),Ji(c,ce,z,0,k,k+.95,"wrail"),i.leaf.setM(e);for(let Ne=0;Ne<_;Ne++)if(t()<.7){let Oe=d+(Ne+.5)*E,Ee=Math.min(E*.7,1.6);u.noShadow=!0,u.box(Oe-Ee/2,k+.72,z-.2,Oe+Ee/2,k+.92,z-.02,ge("#7a5236")),u.noShadow=!1;for(let $=Oe-Ee/2+.2;$<Oe+Ee/2-.1;$+=.32)Qi(i,[$,k+.95,z-.11],$,k+1.05,z-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[k+.9,k+1.3])}}if(o>=2&&t()<.9){let k=t()<.5?1:-1;eh(i,k*(s/2-.35),h+.6,Math.min(m-.2,h+2.7),t),s>7&&t()<.35&&eh(i,-k*(s/2-.35),h+.8,Math.min(m-.2,h+2.5),t)}{let k=x.includes("noren")||x.includes("cafe"),z=V?0:k?2:t()<.3?1:0;i.sodium.setM(e);for(let W=0;W<z;W++){let ce=z===2?(W?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),Ne=B-.5;u.noShadow=!0,u.box(ce-.006,Ne+.42,-R+.12,ce+.006,B,-R+.14,a),i.sodium.cyl(ce,Ne,-R+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(ce,Ne+.18,-R+.13,.16,.11,.18,10,null,!1),u.cyl(ce,Ne-.035,-R+.13,.1,.1,.04,8,a),u.cyl(ce,Ne+.355,-R+.13,.1,.1,.04,8,a),u.noShadow=!1}}let O=1e9;p==="shop_p1"&&x.includes("glass")&&(O=d+(x.indexOf("glass")+.5)*E,cM(i,e,O,-.62,t));for(let k=d+.45+t()*.4;k<-d-.3;k+=.7+t()*1.3)t()<.7&&Math.abs(k-O)>.95&&_d(i,e,t,k,-.4);i.color.setM(e),i.atlas.setM(e)}function lg(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,l=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,t,l,c+.06,t+1.2+o,l+.12,Me.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+o,l+.3,Me.metal),on(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,l+.115,"bb"+Math.floor(s()*4))}function TM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:c}=n,u=i.atlas,h=i.color,g=3.2,m=2.95,d=g+(o-1)*m,_=Math.max(2,Math.round(s/3.2)),E=s/_,b=-s/2,a=[0,g];for(let f=1;f<o;f++)a.push(g+f*m);for(let f=0;f<_;f++)on(u,b+f*E,b+(f+1)*E,0,g,0,f===Math.floor(_/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),f===Math.floor(_/2)?fn:l);let x="bal"+Math.floor(t()*3),p=Un(l,.97);for(let f=1;f<o;f++){let v=a[f];for(let M=0;M<_;M++)on(u,b+M*E,b+(M+1)*E,v,a[f+1],0,fs("win2",t(),c),l);h.box(b,v-.15,-1.3,-b,v,0,p),h.box(b,v,-1.3,-b,v+1.1,-1.18,p,null,{noBottom:!0});for(let M=0;M<_;M++)on(u,b+M*E,b+(M+1)*E,v,v+1.1,-1.305,x,l);for(let M=0;M<=_;M++)h.box(b+M*E-.05,v,-1.18,b+M*E+.05,v+2.4,0,Un(l,.92));for(let M=0;M<_;M++){let w=t(),y=b+M*E+.2,S=b+(M+1)*E-.2;w<.34?fg(h,y,S,v+2.02,-.98,t):w<.46&&DM(h,y+.25,Math.min(S-.25,y+1.9),v+1.1,-1.3,t)}i.atlas.setM(e);for(let M=0;M<_;M++)t()<.55&&(dd(i,e,b+(M+.78)*E,v,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(b,d-.15,-1.3,-b,d,0,p),dl(u,s,r,a,l,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],Un(l,.8)),pl(h,s,r,d,t,!0)}function wM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:c}=n,u=i.atlas,h=i.color,g=4,m=3.4,d=g+(o-1)*m,_=Math.max(2,Math.round(s/3)),E=s/_,b=-s/2,a=[0,g];for(let x=1;x<o;x++)a.push(g+x*m);for(let x=0;x<_;x++)on(u,b+x*E,b+(x+1)*E,0,g,0,x===1?"shop_door":"shop_glass");for(let x=1;x<o;x++)for(let p=0;p<_;p++)on(u,b+p*E,b+(p+1)*E,a[x],a[x+1],0,fs("win3",t(),c),l);dl(u,s,r,a,l,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,d,r],[-s/2,d,r],Un(l,.8)),pl(h,s,r,d,t,!0),t()<.6&&eh(i,(t()<.5?1:-1)*(s/2-.3),g+.4,Math.min(d-.3,g+4.5),t),t()<.3&&lg(i,s,d,r,t)}function AM(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,l=i.color,c=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),g=s/h;for(let m=0;m<h;m++)on(o,u+m*g,u+(m+1)*g,0,3.4,0,"shop_konbini"),er(i,e,u+(m+.5)*g,1.9,-.8,.8);l.box(u,3.4,-.35,-u,c,0,Me.white),on(o,u,-u,3.4,c,-.355,"konbini_band"),dl(o,s,r,[0,c],ge("#f2f2ee"),t,0),pl(l,s,r,c,t)}var Gm=(i,e)=>e?ge("#7a5a42"):i.tint,hd=null,RM=()=>{if(!hd){let i=Li("kawara"),e=16/272*(i.u1-i.u0);hd={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return hd};function cg(i,e,t,n,s,r,o){let l=i.atlas,c=i.color,u=!!e.snow,h=u?.75:.6,g=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),m=u?Li("white"):RM(),d=u?ge("#f3f5fa"):ge("#c8ccd8"),_=u?ge("#e4e8f0"):ge("#3d4456"),E=u?1:Math.max(2,Math.round((t+2*h)/3)),b=p=>-t/2-h+(t+2*h)*p/E;for(let p=0;p<E;p++){let f=b(p),v=b(p+1);l.quad([v,s-.25,-h],[f,s-.25,-h],[f,s+g,n/2],[v,s+g,n/2],d,m),l.quad([f,s-.25,n+h],[v,s-.25,n+h],[v,s+g,n/2],[f,s+g,n/2],d,m)}let a=(p,f,v,M,w,y)=>{y<0?(c.quad([f,v,w],[p,v,w],[p,M,w],[f,M,w],_),c.quad([p,v,w],[f,v,w],[f,v,w+.08],[p,v,w+.08],_)):(c.quad([p,v,w],[f,v,w],[f,M,w],[p,M,w],_),c.quad([f,v,w],[p,v,w],[p,v,w-.08],[f,v,w-.08],_))};for(let[p,f]of[[-h,0],[n+h,n]])a(-t/2-h,t/2+h,s-.42,s-.22,p<0?p-.04:p+.04,p<0?-1:1),c.quad(p<0?[-t/2-h,s-.26,p]:[t/2+h,s-.26,p],p<0?[t/2+h,s-.26,p]:[-t/2-h,s-.26,p],p<0?[t/2+h,s-.26,f]:[-t/2-h,s-.26,f],p<0?[-t/2-h,s-.26,f]:[t/2+h,s-.26,f],Un(Gm(e,o),.62));for(let p of[-1,1]){let f=p*(t/2+h+.02),v=.2,M=[f,s-.25,-h],w=[f,s+g,n/2],y=[f,s-.25,n+h],S=T=>[T[0],T[1]-v,T[2]];p>0?(c.quad(S(w),S(M),M,w,_),c.quad(S(y),S(w),w,y,_)):(c.quad(S(M),S(w),w,M,_),c.quad(S(w),S(y),y,w,_))}let x=Gm(e,o);if(Uo(c,[-t/2,s,0],[-t/2,s,n],[-t/2,s+g-.1,n/2],x),Uo(c,[t/2,s,n],[t/2,s,0],[t/2,s+g-.1,n/2],x),c.box(-t/2-h,s+g-.05,n/2-.15,t/2+h,s+g+.18,n/2+.15,u?ge("#f6f7fb"):ge("#3d4456")),u){c.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,ge("#eef1f7")),c.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,ge("#eef1f7"));for(let p=-t/2;p<t/2;p+=.45+r()*.5)c.cyl(p,s-.42-.35,-h+.02,0,.04,.35,4,ge("#dfe8f3"),!1)}return{RC:d,k:m,fascia:a,nS:E}}function CM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:c}=n,u=i.atlas,h=i.color,g=2.9,m=o*g,d=-s/2,_=t()<.5,E=Math.max(2,Math.round(s/3)),b=s/E,a=[];for(let w=0;w<=o;w++)a.push(w*g);let x=_?fn:l;for(let w=0;w<o;w++)for(let y=0;y<E;y++){let S=_?"win4":"win0";w===0&&y===0?S="shop_house":S=fs(S,t(),c),on(u,d+y*b,d+(y+1)*b,a[w],a[w+1],0,S,S==="shop_house"?fn:x)}dl(u,s,r,a,_?ge("#9a7a62"):l,t,c),h.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],Un(l,.75));let{RC:p,k:f,fascia:v,nS:M}=cg(i,n,s,r,m,t,_);if(o>1){let w=g+.05;for(let y=0;y<M;y++){let S=-s/2-.1+(s+.2)*y/M,T=-s/2-.1+(s+.2)*(y+1)/M;u.quad([T,w-.3,-.75],[S,w-.3,-.75],[S,w+.05,0],[T,w+.05,0],p,f)}v(-s/2-.1,s/2+.1,w-.42,w-.28,-.79,-1)}if(n.fence){let w=-n.fence,y=1.2;for(let[S,T]of[[-s/2,-1],[.4,s/2]])h.box(S,0,w-.08,T,y,w+.08,Me.concrete),on(u,S,T,0,y,w-.085,"block")}}function PM(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:c}=n,u=i.atlas,h=i.color,g=3.4,m=o*g,d=Math.max(2,Math.round(s/6)),_=s/d,E=-s/2,b=t()<.5?"win3":"win2",a=[];for(let f=0;f<=o;f++)a.push(f*g);for(let f=0;f<o;f++)for(let v=0;v<d;v++)on(u,E+v*_,E+(v+1)*_,a[f],a[f+1],0,fs(b,t(),c),l);let x=Math.max(1,Math.round(r/6)),p=r/x;for(let f of[-1,1])for(let v=0;v<o;v++)for(let M=0;M<x;M++)(f>0?Ji:ji)(u,f*s/2,M*p,(M+1)*p,a[v],a[v+1],fs(b,t(),c),l);pl(h,s,r,m,t,!0)}function Td(i,e,t,n){let s=i.color,r=ge("#8d9096"),o=ge("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,c=-n+.62;s.box(-.14,5.08,l,.14,5.56,c,o);let u=t*.141;i.atlas.setM(e),(t>0?Ji:ji)(i.atlas,u,l,c,5.08,5.56,"signal");let h=t>0?c:l,g=t>0?-1:1;for(let d=0;d<3;d++){let _=h+g*(.2+d*.4);s.box(t>0?.14:-.36,5.47,_-.15,t>0?.36:-.14,5.5,_+.15,o)}let m=h+g*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,m-.11,t>0?.16:-.145,5.43,m+.11,fn)}function ug(i,e,t,n){let s=i.color,r=ge("#3d6ea8"),o=ge("#e8eef2"),l=ge("#c7c5bf"),c=5.35;s.setM(e),s.box(-1.1,c-.65,-t,1.1,c,t,r);for(let u of[-1.1,1])s.box(u,c,-t,u+.1,c+1.1,t,o),s.box(u-.02,c+1.1,-t,u+.12,c+1.18,t,r);i.atlas.setM(e),ji(i.atlas,-1.105,-2.2,2.2,c-.62,c-.06,n),Ji(i.atlas,1.105,-2.2,2.2,c-.62,c-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),g=u*(t-.15),m=Math.min(h,g),d=Math.max(h,g);s.box(-.45,.15,m+.3,.45,c-.65,d-.3,r);let _=20,E=(c-.15)/_;for(let b=0;b<_;b++)s.box(1.1+b*.3,.15,m,1.1+(b+1)*.3,c-(b+1)*E+.04,d,l);s.box(1.1,c-.1,m-.05,1.1+_*.3,c-.02,m+.05,r)}}function hg(i,e,t,n,s,r,o){let l=i.color,c=1.22,u=3.55,h=6.7,g=ge("#c8c5bd"),m=ge("#ebe8de"),d=ge("#7a5a42"),_=ge("#5e4433"),E=ge("#4d5468");l.setM(e),l.box(t,-1.4,u,n,c,h,g,null,{noBottom:!0}),l.box(t,c,u,n,c+.025,u+.32,m),l.box(t,c,u+.6,n,c+.04,u+.9,Me.yellow);let b=Math.sign(s-(t+n)/2),a=b>0?n:t,x=a+b*6.2,p=u+.9,f=h-.2,v=(O,k,z)=>[O,k,z];b>0?l.quad(v(x,.1,f),v(x,.1,p),v(a,c,p),v(a,c,f),g):l.quad(v(x,.1,p),v(x,.1,f),v(a,c,f),v(a,c,p),g);for(let O of[p,f]){let k=ge("#9aa0a6");l.rod([x,.1+.9,O],[a,c+.9,O],.03,.03,5,k);for(let z=0;z<=3;z++){let W=x+(a-x)*z/3,ce=.1+(c-.1)*z/3;l.box(W-.03,ce,O-.03,W+.03,ce+.9,O+.03,k)}}i.atlas.setM(e);for(let O=t;O<n-.01;O+=3){let k=Math.min(n,O+3);i.atlas.quad([O,-.6,h+.004],[k,-.6,h+.004],[k,c,h+.004],[O,c,h+.004],ge("#d8d4ca"),Li("concrete"))}l.setM(e);for(let O=t+.4;O<n;O+=2)l.box(O-.05,c,h-.12,O+.05,c+1,h-.02,ge("#8f949a"));for(let O of[.45,.95])l.box(t,c+O,h-.1,n,c+O+.06,h-.04,ge("#8f949a"));let M=n-t,w=O=>b>0?n-M*O:t+M*O,y=w(.47),S=y-2.3,T=y+2.3,A=u+1.35,R=h-.25;l.box(S,c,R-.12,T,c+2.45,R,d);for(let O of[S,T-.12])l.box(O,c,A+.6,O+.12,c+2.45,R,_);for(let O of[S,T-.12])l.box(O,c,A,O+.12,c+2.45,A+.12,_);l.quad([T+.4,c+2.5,A-.45],[S-.4,c+2.5,A-.45],[S-.4,c+2.85,R+.35],[T+.4,c+2.85,R+.35],E),l.quad([S-.4,c+2.42,A-.45],[T+.4,c+2.42,A-.45],[T+.4,c+2.77,R+.35],[S-.4,c+2.77,R+.35],ge("#3a3f50")),l.box(S+.3,c+.42,R-.55,T-.3,c+.48,R-.15,ge("#8a6a4a"));for(let O of[S+.4,T-.5])l.box(O,c,R-.5,O+.08,c+.42,R-.2,Me.metal);i.atlas.setM(e),i.atlas.quad([y-1.1,c+1.55,R+.005],[y+1.1,c+1.55,R+.005],[y+1.1,c+2.03,R+.005],[y-1.1,c+2.03,R+.005],fn,Li("ekiplate"+r));let C=w(.2),P=u+1.6,L=1.25,D=c+1.25,B=D+.95;l.setM(e);for(let O of[C-L+.12,C+L-.12])l.cyl(O,c,P,.05,.05,B-c+.05,8,ge("#6b7078"));l.box(C-L,D-.03,P-.03,C+L,B+.03,P+.03,ge("#3a3d42")),i.atlas.setM(e),i.atlas.quad([C-L,D,P+.035],[C+L,D,P+.035],[C+L,B,P+.035],[C-L,B,P+.035],fn,Li("ekimei"+r)),i.atlas.quad([C+L,D,P-.035],[C-L,D,P-.035],[C-L,B,P-.035],[C+L,B,P-.035],fn,Li("ekimei"+r)),l.setM(e);let V=y-b*4.2;l.box(V-.9,c+.42,h-1.25,V+.9,c+.47,h-.85,ge("#3b6ea8")),l.box(V-.9,c+.47,h-.88,V+.9,c+.9,h-.83,ge("#3b6ea8"));for(let O of[V-.75,V+.7])l.box(O,c,h-1.2,O+.06,c+.42,h-.9,Me.metal);for(let O=t+3;O<n-1;O+=9)hl(i,Ym(e,O,c,h-.45))}var IM=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(ge),LM=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(ge);function fg(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Me.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let l=.28+r()*.34,c=.36+r()*.42,u=r.pick(IM),h=s+(r()-.5)*.06;i.quad([o+l,n-c,h],[o,n-c,h],[o,n-.02,h],[o+l,n-.02,h],u),i.quad([o,n-c,h+.01],[o+l,n-c,h+.01],[o+l,n-.02,h+.01],[o,n-.02,h+.01],Un(u,.85)),r()<.4&&i.box(o+l*.45,n-.02,h-.02,o+l*.55,n+.06,h+.02,ge("#d8d8d0")),o+=l+.06+r()*.22}}function DM(i,e,t,n,s,r){let o=r.pick(LM),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,o),i.box(e,n-.72,s-l,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,Un(o,.86))}function dg(i,e){let t=i.color,n=ge("#a19f97"),s=ge("#6b4a35"),r=ge("#4f4a44"),o=ge("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,ge("#8d8b84"));for(let l of[-.52,.48])for(let c of[-.36,.32])t.box(l,.32,c,l+.05,1.5,c+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,Un(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,ge("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,ge("#5b8d3d"))}function pg(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Me.black:Me.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Me.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Me.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Me.black);t.box(-.78,-.9,-.34,.3,0,.34,Me.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,ge("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Me.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new Qe().multiplyMatrices(e,new Qe().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Me.black:Me.yellow)}t.setM(e),i.atlas.setM(e),on(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function mg(i,e){let t=i.color;t.setM(e);let n=Me.stone,s=Un(Me.stone,1.06),r=Un(Me.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),No(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),No(t,1.48,1.54,.25,.35,r,!1,!0),No(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,fn),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,fn)}function wd(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Me.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Me.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Me.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Me.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Me.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Me.vermilion)}function gg(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,ge("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,ge("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,ge("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,ge("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Me.metal),n.box(1.1,0,.3,1.2,.42,.55,Me.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Me.metal),i.atlas.setM(e),ji(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Ji(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}var NM=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],UM=ge("#a7a7aa"),FM=[1,.94,.87],Wm={};function vg(i,e){let t=i*16+e,n=Wm[t];if(!n){let s=new rn,r=Un(UM,FM[i]),o=.4,l=.25;for(let c of NM){let u=0,h=1,g=0;Math.abs(c[1])>.99&&(u=1,h=0);let m=c[1]*g-c[2]*h,d=c[2]*u-c[0]*g,_=c[0]*h-c[1]*u,E=Math.hypot(m,d,_);m/=E,d/=E,_/=E;let b=d*c[2]-_*c[1],a=_*c[0]-m*c[2],x=m*c[1]-d*c[0],p=[];for(let v=0;v<=e;v++){let M=v/e*Math.PI*2,w=Math.cos(M),y=Math.sin(M);p.push([m*w+b*y,d*w+a*y,_*w+x*y])}let f=(o-l)/1;for(let v=0;v<e;v++){let M=p[v],w=p[v+1],y=[M[0]*o,M[1]*o,M[2]*o],S=[w[0]*o,w[1]*o,w[2]*o],T=[c[0]+w[0]*l,c[1]+w[1]*l,c[2]+w[2]*l],A=[c[0]+M[0]*l,c[1]+M[1]*l,c[2]+M[2]*l],R=[M[0]+c[0]*f,M[1]+c[1]*f,M[2]+c[2]*f],C=[w[0]+c[0]*f,w[1]+c[1]*f,w[2]+c[2]*f];s.vtx(y[0],y[1],y[2],R[0],R[1],R[2],0,0,r),s.vtx(T[0],T[1],T[2],C[0],C[1],C[2],0,0,r),s.vtx(S[0],S[1],S[2],C[0],C[1],C[2],0,0,r),s.vtx(y[0],y[1],y[2],R[0],R[1],R[2],0,0,r),s.vtx(A[0],A[1],A[2],R[0],R[1],R[2],0,0,r),s.vtx(T[0],T[1],T[2],C[0],C[1],C[2],0,0,r),s.vtx(c[0],c[1],c[2],c[0],c[1],c[2],0,0,r),s.vtx(T[0],T[1],T[2],c[0],c[1],c[2],0,0,r),s.vtx(A[0],A[1],A[2],c[0],c[1],c[2],0,0,r)}}n=Wm[t]=s.toArrays()}return n}var BM=new mn,fd=new Yn,OM=new H,zM=new H;function Ad(i,e,t,n,s,r,o=0,l=.6){s()<l?fd.set((s()-.5)*.4,s()*6.283,(s()-.5)*.4):fd.set(s()*6.283,s()*6.283,s()*6.283);let c=new Qe().compose(OM.set(e,t,n),BM.setFromEuler(fd),zM.set(r,r,r));c.groundY=o,i.color.stamp(vg(Math.floor(s()*3),ul>.7?8:6),c)}function xg(){for(let i=0;i<3;i++)for(let e of[6,8])vg(i,e)}function yg(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,ge("#8f8a80"),ge("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Me.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Me.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Me.black),t.cyl(0,18.6,0,1,.25,1.2,12,Me.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,fn)}function _g(i,e,t){let n=i.color;n.setM(e);let s=t.pick([ge("#f4f4f0"),ge("#3b6ea5"),ge("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Uo(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Uo(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Me.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Me.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,ge("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Me.metal)}function bg(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Me.stone),n.box(-.55,.5,.9,.55,1.5,1.8,ge("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],ge("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],ge("#4d5468")),wd(i,Ym(e,0,0,-.3,Math.PI/2),.75,2.2)}var Bo=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new xe(e):e)),ie={zenith:new xe,horizon:new xe,sunCol:new xe,sunI:1,hemiSky:new xe,hemiGround:new xe,hemiI:1,fog:new xe,cLit:new xe,cShade:new xe,cRim:new xe,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new H,moonDir:new H,lightDir:new H,sunEl:0};function Sg(i){let e=0;for(;e<Bo.length-2&&Bo[e+1][0]<=i;)e++;let t=Bo[e],n=Bo[e+1],s=tl(Zt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,l)=>l.copy(t[o]).lerp(n[o],s);r(1,ie.zenith),r(2,ie.horizon),r(3,ie.sunCol),ie.sunI=Rt(t[4],n[4],s),r(5,ie.hemiSky),r(6,ie.hemiGround),ie.hemiI=Rt(t[7],n[7],s),r(8,ie.fog),r(9,ie.cLit),r(10,ie.cShade),r(11,ie.cRim),ie.night=Rt(t[12],n[12],s),ie.warm=Rt(t[13],n[13],s),ie.sunEl=Eg(i,ie.sunDir,ie.moonDir,ie.lightDir)}function Eg(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Zt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var HM=new H,VM=new H;function Cd(i,e){return Eg((i%1+1)%1,HM,VM,e),e}var Mg={zenith:[new xe("#7b8594"),new xe("#141a28")],horizon:[new xe("#b5bcc6"),new xe("#283042")],fog:[new xe("#a8b0ba"),new xe("#232b3c")],hemiSky:[new xe("#aab3bf"),new xe("#3c4866")],hemiGround:[new xe("#8b8983"),new xe("#1e2030")],cLit:[new xe("#d0d5dc"),new xe("#2c3240")],cShade:[new xe("#7c8593"),new xe("#151922")]},Rd=new xe;function Tg(i,e){if(ie.overcast=i,ie.rain=e,ie.bright=(1-ie.night)*(1-ie.warm)*(1-i),i<=.001)return;let t=ie.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Rd.copy(Mg[n][0]).lerp(Mg[n][1],t),ie[n].lerp(Rd,i*(n==="cLit"||n==="cShade"?.75:.85));ie.sunI*=1-.82*i,ie.warm*=1-i,ie.cRim.multiplyScalar(1-i),ie.sunCol.lerp(Rd.setRGB(.85,.87,.9),i*.6)}function wg(){let i=new ht({side:Hn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ie.zenith},uHorizon:{value:ie.horizon},uSunDir:{value:ie.sunDir},uMoonDir:{value:ie.moonDir},uNoiseTex:ze.uNoiseTex,uSunCol:{value:ie.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new xe},uOvercast:{value:0},uDeckLit:{value:new xe},uDeckDark:{value:new xe},uMilky:{value:0},uMetA:{value:new H(0,1,0)},uMetB:{value:new H(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${Si}
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
      }`}),e=new ut(new Ua(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function GM(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let x=0;x<o;x++){let p=.06+i()*.05;t.push([(x/(o-1)-.5)*s+(i()-.5)*.03,.1+p*.5,(i()-.5)*.2,p])}let l=e?6:2,c=s*.82,u=.1+.09;for(let x=0;x<l;x++){let p=Math.max(1,Math.round(c/.11));for(let f=0;f<p;f++){let v=(p===1?0:f/(p-1)-.5)*c+(i()-.5)*.05+r*x;t.push([v,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,c*=e?.8:.66}let h=t.slice();for(let x of h){if(t.length>84)break;let p=1+Math.floor(i()*2);for(let f=0;f<p;f++){let v=.35+i()*2.4,M=x[3]*(.35+i()*.2);t.push([x[0]+Math.cos(v)*x[3]*.82,x[1]+Math.sin(v)*x[3]*.82,x[2]+.04,M])}}let g=t.slice(h.length);for(let x of h){if(x[1]<.1+.12||t.length>104)continue;let p=1+Math.floor(i()*2);for(let f=0;f<p;f++){let v=.3+i()*2.5,M=x[3]*(.3+i()*.4),w=x[3]*(.28+i()*.16);t.push([x[0]+Math.cos(v)*M,x[1]+Math.sin(v)*M,x[2]+Math.sqrt(x[3]*x[3]-M*M)-w*.6,w])}}for(let x of g){if(t.length>124)break;let p=1+Math.floor(i()*2);for(let f=0;f<p;f++){let v=.2+i()*2.7,M=x[3]*(.38+i()*.2);t.push([x[0]+Math.cos(v)*x[3]*.85,x[1]+Math.sin(v)*x[3]*.85,x[2]+.02,M])}}let m=t.slice(0,128),d=1e9,_=-1e9,E=-1e9;for(let x of m)d=Math.min(d,x[0]-x[3]*1.12),_=Math.max(_,x[0]+x[3]*1.12),E=Math.max(E,x[1]+x[3]*1.12);let b=Math.min(1,.92/(_-d),(.95-.1)/(E-.1)),a=(d+_)/2;for(let x of m)x[0]=(x[0]-a)*b,x[1]=.1+(x[1]-.1)*b,x[3]*=b;return m}function Ag(i){let t={value:Array.from({length:128},()=>new pt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new ht({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:ze.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Si}
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
      }`,depthTest:!1,depthWrite:!1,blending:ni}),r=new Wt(1024,1024,{generateMipmaps:!0,minFilter:An,magFilter:Ut,depthBuffer:!1}),o=new ht({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:ze.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${Si}
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
      }`,depthTest:!1,depthWrite:!1,blending:ni}),l=new ut(new Qt(1,1),s),c=new gr,u=new Ts;c.add(l);let h=new Wt(1024*2,1024*2,{generateMipmaps:!0,minFilter:An,magFilter:Ut}),g=i.getRenderTarget(),m=i.autoClear,d=Ot(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let _=[];for(let E=0;E<4;E++){let b=E%2===0,a=GM(d,b);a.forEach((x,p)=>t.value[p].set(x[0],x[1],x[2],x[3])),s.uniforms.uN.value=a.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=E*13.7,l.material=s,i.setRenderTarget(r),i.render(c,u),l.material=o,h.viewport.set(E%2*1024,Math.floor(E/2)*1024,1024,1024),i.setRenderTarget(h),i.render(c,u),_.push({cell:[E%2,Math.floor(E/2)],tall:b})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=m,i.setRenderTarget(g),s.dispose(),o.dispose(),r.dispose(),l.geometry.dispose(),{tex:h.texture,kinds:_,rt:h}}function Rg(i){let e=Ot(5),t=22,n=[],s=new Qt(1,1);s.translate(0,.5,0);let r=new wn(new Float32Array(t*4),4),o=new wn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let l=new ht({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new xe},uShade:{value:ie.cShade},uRim:{value:ie.cRim},uHaze:{value:ie.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new qi(s,l,t);c.frustumCulled=!1,c.renderOrder=-5;for(let _=0;_<t;_++){let E=_<12,b=i.kinds[(_*3+(E?0:1))%i.kinds.length],a=E?b.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:_/t*Math.PI*2+e.range(-.15,.15),d:E?e.range(2600,3400):e.range(1300,2200),base:E?e.range(-60,60):e.range(260,700),size:a,cell:b.cell,haze:E?.45:.18})}let u=new Qe,h=new mn,g=new H,m=new H,d=new H(0,1,0);return{group:c,update(_,E){let b=Math.atan2(ie.lightDir.x,ie.lightDir.z);for(let x of n)x.phi+=E*1.2/x.d;n.slice().sort((x,p)=>p.d-x.d).forEach((x,p)=>{g.set(_.x+Math.sin(x.phi)*x.d,_.y+x.base,_.z+Math.cos(x.phi)*x.d),h.setFromAxisAngle(d,x.phi+Math.PI),m.set(x.size,x.size,1),u.compose(g,h,m),c.setMatrixAt(p,u);let f=b-x.phi;f=Math.atan2(Math.sin(f),Math.cos(f));let v=Math.max(0,Math.min(1,(f+.35)/.7)),M=1-v*v*(3-2*v);r.setXYZW(p,x.cell[0],x.cell[1],M,x.haze),o.setX(p,.35+.9*Math.pow(Math.max(Math.cos(f),0),3)*(.4+ie.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,l.uniforms.uOpacity.value=(1-ie.night*.35)*(1-ie.overcast*.55)*(1-.85*ie.rain),l.uniforms.uLit.value.copy(ie.cLit).multiplyScalar(1+.35*ie.bright)}}}function Cg(){let i=new nn;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],l=[];for(let g=0;g<=360;g++){let m=g/360*Math.PI*2,d=Math.sin(m)*t.R,_=Math.cos(m)*t.R,E=ku(g/360*t.k*4,40+n*9),b=Math.pow(Math.max(0,E-.18)/.82,1.6),a=t.h*(.12+b);if(r.push(d,-60,_,d,-60+a,_),o.push(0,g/360,1,g/360),g<360){let x=g*2;l.push(x,x+1,x+2,x+1,x+3,x+2)}}let c=new vt;c.setAttribute("position",new Ze(r,3)),c.setAttribute("hf",new Ze(o,2)),c.setIndex(l);let u=new ht({side:yn,fog:!1,uniforms:{uCol:{value:new xe(t.col)},uHaze:{value:ie.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:ze.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Si}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new ut(c,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-ie.night))*(1-.35*ie.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var zo="./assets/",Pg=`
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
}`,Ps=[.299,.587,.114],Oo=[.03,.014,-.018],WM=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),fi=[0,0,0],Pd=(i,e,t,n,s,r)=>{let o=i-e*(1-n)-t*n*s;return Math.min(.985,Math.max(0,WM(Math.min(1,Math.max(0,n+(o-n)/r)))))};function Ig(i,e,t,n,s){let r=i.toneMappingExposure.value,o=i.uSat.value,l=i.uLo.value,c=i.uDay.value,u=e/255,h=t/255,g=n/255,m=l.x*Ps[0]+l.y*Ps[1]+l.z*Ps[2],d=(Oo[0]*Ps[0]+Oo[1]*Ps[1]+Oo[2]*Ps[2])*c,_=(u*Ps[0]+h*Ps[1]+g*Ps[2]-m)/(1-m+d);fi[0]=Pd(u,l.x,Oo[0],_,c,o),fi[1]=Pd(h,l.y,Oo[1],_,c,o),fi[2]=Pd(g,l.z,Oo[2],_,c,o);let E=.76,b=.24,a=Math.max(fi[0],fi[1],fi[2]);if(a>=E){let f=b*b/(1-a)-b+E,v=1-1/(.15*(f-a)+1),M=f/a;for(let w=0;w<3;w++)fi[w]=(fi[w]-v*a)/Math.max(1-v,.001)*M}let x=Math.min(fi[0],fi[1],fi[2]),p=x<.04?Math.sqrt(Math.max(x,0)/6.25)-x:.04;return s.setRGB((fi[0]+p)/r,(fi[1]+p)/r,(fi[2]+p)/r)}var Lg={value:new Pe(1280,720)};function Dg(i){i.getDrawingBufferSize(Lg.value)}function Ng(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:Lg}}async function Dd(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),l;try{l=await new Oa().loadAsync(o)}catch(c){throw URL.revokeObjectURL(o),c}return l.onUpdate=()=>{URL.revokeObjectURL(o),l.onUpdate=null},l.colorSpace=ii,l.generateMipmaps=!0,l.minFilter=An,l.magFilter=Ut,{tex:l,file:n}}async function ko(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function Ug(i,e=15e3){let t=zo+"clouds/";return ko((async()=>{let n=await fetch(t+"clouds.json");if(!n.ok)throw new Error("clouds.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(l=>l.u1>l.u0&&l.v1>l.v0&&l.w>0&&l.h>0&&l.lum&&l.lum[1]>l.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await Dd(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function Fg(i,e=15e3){let t=zo+"fronts/";return ko((async()=>{let n=await fetch(t+"fronts.json");if(!n.ok)throw new Error("fronts.json "+n.status);let s=await n.json(),r=(s.tiles||[]).filter(h=>h.name&&h.w>0&&h.h>0&&h.x>=0&&h.x+h.w<=1&&h.ey+h.h<=1);if(!r.length)throw new Error("no fronts listed");let o=s.files&&s.files[i]?i:"hi",l=await fetch(t+s.files[o]);if(!l.ok)throw new Error(s.files[o]+" "+l.status);let c=await l.blob();if(s.bytes&&s.bytes[o]&&c.size!==s.bytes[o])throw new Error(s.files[o]+" is "+c.size+" bytes, not "+s.bytes[o]);let u=await createImageBitmap(c);if(s.size&&s.size[o]&&(u.width!==s.size[o][0]||u.height!==s.size[o][1]))throw new Error(s.files[o]+" has the wrong size");return{img:u,tiles:r,tier:o}})(),e,"painted fronts unavailable, keeping the procedural shopfronts:")}async function Bg(i,e=15e3){let t=zo+"fields/";return ko((async()=>{let n=await fetch(t+"fields.json");if(!n.ok)throw new Error("fields.json "+n.status);let s=await n.json();if(!(s.tile&&s.tile[0]>0&&s.tile[1]>0&&Math.abs(Mi/s.tile[1]-Math.round(Mi/s.tile[1]))<1e-6))throw new Error("bad tile size");if(!(s.mean&&s.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await Dd(t,s,i);return r.colorSpace=Gt,r.wrapS=r.wrapT=Es,{tex:r,tile:s.tile,mean:s.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var th=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],XM=140*Math.PI/180,nh=Math.PI/180,ir=i=>Math.atan2(Math.sin(i),Math.cos(i));function qM(i,e){let t=Ot(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/th[0][1];for(let[c,u,h,g,m,d,_]of th)for(let E=0;E<u;E++){let b;c==="tower"?b=s+E*r+t.range(-.22,.22)*r:c==="mid"?b=s+(E+.5)*r*(th[0][1]/u)+t.range(-.2,.2)*r:c==="high"?b=s+(E*(th[0][1]/u)+.5)*r+t.range(-.3,.3)*r:b=s+(E+t())/u*Math.PI*2,n.push({role:c,kinds:d,phi:b,d:t.range(h[0],h[1]),e0:t.range(g[0],g[1])*nh,ah:t.range(m[0],m[1])*nh,haze:_,k:-1,flip:!1})}let o=i.map(()=>[]),l=n.map((c,u)=>u);for(let c=l.length-1;c>0;c--){let u=Math.floor(t()*(c+1)),h=l[c];l[c]=l[u],l[u]=h}for(let c of l){let u=n[c],h=-1,g=1e9;i.forEach((m,d)=>{let _=u.kinds.indexOf(m.kind);if(_<0)return;let b=(o[d].some(a=>Math.abs(ir(a-u.phi))<XM)?1e3:0)+o[d].length*10+_*4+t();b<g&&(g=b,h=d)}),h<0&&(h=Math.floor(t()*i.length)),u.k=h,o[h].push(u.phi)}for(let c of n){let u=i[c.k],h=c.d*Math.tan(c.e0);c.y0=h,c.h=c.d*Math.tan(c.e0+c.ah)-h,c.w=c.h*u.w/u.h,c.half=Math.atan2(c.w/2,c.d)}return n.sort((c,u)=>u.d-c.d)}function Og(i,e,t=5){let n=i.list,s=qM(n,t),r=s.length,o=new Qt(1,1);o.translate(0,.5,0);let l=new wn(new Float32Array(r*4),4),c=new wn(new Float32Array(r*4),4),u=new wn(new Float32Array(r),1);o.setAttribute("aRect",l),o.setAttribute("aInfo",c),o.setAttribute("aRim",u),s.forEach((v,M)=>{let w=n[v.k];l.setXYZW(M,w.u0,w.v0,w.u1-w.u0,w.v1-w.v0),c.setXYZW(M,0,w.lum[0],1/Math.max(.05,w.lum[1]-w.lum[0]),v.haze)});let h=new ht({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new xe},uShade:{value:ie.cShade},uRimCol:{value:ie.cRim},uHaze:{value:ie.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...Ng(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:Pg+`
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
      }`}),g=new qi(o,h,r);g.frustumCulled=!1,g.renderOrder=-5;let m=new Qe,d=new mn,_=new H,E=new H,b=new H(0,1,0),a=new H,x=!0;function p(v,M){let w=s.filter(P=>P.role==="tower").sort((P,L)=>ir(P.phi-v)-ir(L.phi-v)),y=null,S=1e9;for(let P=0;P<w.length;P++){let L=w[P],D=w[(P+1)%w.length],B=M==="center"?L.phi:L.phi+ir(D.phi-L.phi)/2,V=Math.abs(ir(B-v));V<S&&(S=V,y=M==="center"?[L,L,B]:[L,D,B])}if(!y)return;let[T,A,R]=y,C=ir(v-R);for(let P of s)P.phi+=C;for(let P of new Set([T,A])){let L=Math.max(P.ah,31*nh),D=P.d*Math.tan(P.e0+L)-P.y0;P.w*=D/P.h,P.h=D,P.ah=L,P.half=Math.atan2(P.w/2,P.d)}}let f={mesh:g,count:r,opening:"flank",layout:s,update(v,M){let w=v.position,y=Math.atan2(ie.lightDir.x,ie.lightDir.z);v.getWorldDirection(a);let S=Math.atan2(a.x,a.z),T=Math.atan(Math.tan(v.fov*nh/2)*v.aspect);x&&p(S,f.opening);for(let R=0;R<r;R++){let C=s[R];C.phi+=M*1.2/C.d,_.set(w.x+Math.sin(C.phi)*C.d,w.y+C.y0,w.z+Math.cos(C.phi)*C.d),d.setFromAxisAngle(b,C.phi+Math.PI),E.set(C.w,C.h,1),m.compose(_,d,E),g.setMatrixAt(R,m);let P=ir(y-C.phi),L=P>0!==n[C.k].litLeft;L!==C.flip&&Math.abs(Math.sin(P))>.2&&(x||Math.abs(ir(C.phi-S))>T+C.half+.05)&&(C.flip=L),c.setX(R,C.flip?1:0);let D=Math.max(Math.cos(P),0);u.setX(R,.35+.9*D*D*D*(.4+ie.warm))}x=!1,g.instanceMatrix.needsUpdate=!0,c.needsUpdate=!0,u.needsUpdate=!0;let A=h.uniforms;{let R=Math.min(Math.max((ie.bright-.55)/.4,0),1);A.uPaint.value=R*R*(3-2*R)}A.uLit.value.copy(ie.cLit).multiplyScalar(1+.35*ie.bright),A.uOpacity.value=(1-ie.night*.35)*(1-ie.overcast*.55)*(1-.85*ie.rain)}};return f}async function zg(i,e=15e3){let t=zo+"band/";return ko((async()=>{let n=await fetch(t+"band.json");if(!n.ok)throw new Error("band.json "+n.status);let s=await n.json(),{tex:r,file:o}=await Dd(t,s,i),l={};for(let[c,u]of Object.entries(s.zones&&s.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(l[c]=new pt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(l).length)throw new Error("no zones listed");return r.wrapS=Es,{tex:r,zones:l,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var ml=2500,YM=-8,Lr=new H,nr=new xe,Id=new xe("#fff5dd").multiplyScalar(3.35),Ld=new xe("#8fb1ec").multiplyScalar(1.35*2);function kg(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(f=>f.w)),r=192,o=360/i.period,l=new Float32Array((r+1)*6),c=new Float32Array((r+1)*4),u=[],h=Math.tan(YM*Math.PI/180),g=s+.004;for(let f=0;f<=r;f++){let v=f/r*Math.PI*2,M=Math.sin(v)*ml,w=Math.cos(v)*ml;if(l.set([M,h*ml,w,M,g*ml,w],f*6),c.set([-(f/r)*o,h,-(f/r)*o,g],f*4),f<r){let y=f*2;u.push(y,y+2,y+1,y+1,y+2,y+3)}}let m=new vt;m.setAttribute("position",new Mt(l,3)),m.setAttribute("uv",new Mt(c,2)),m.setIndex(u);let d=Math.PI/180,_=(e.composer.readBuffer.samples||0)>0,E=new ht({fog:!1,side:yn,alphaToCoverage:_,defines:_?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new pt},uRowB:{value:new pt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new xe(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*d)},uGnd:{value:new H(2.8,.0014,700)},uSpan:{value:new Pe(h,g)},...Ng(e)},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${ml.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:Pg+`
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
      }`}),b=new ut(m,E);b.frustumCulled=!1,b.renderOrder=999;let a=E.uniforms,x=new H,p=!0;return{mesh:b,zones:n,hero:.125,update(f,v,M=2.8,w=.0014,y=700){let S=n[v.a],T=n[v.b],A=v.t,R=0;if(S&&T?(a.uRowA.value.copy(S),a.uRowB.value.copy(T),a.uMix.value=S===T?0:A,R=1):(S||T)&&(a.uRowA.value.copy(S||T),a.uMix.value=0,R=S?1-A:A),a.uAlpha.value=R,b.visible=R>.002,!b.visible)return 0;b.position.copy(f.position),a.uGnd.value.set(M,w,y),a.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(M/140)+.3*d)),Math.max(S?S.w:0,T?T.w:0)+.003),p&&(f.getWorldDirection(x),a.uRot.value=this.hero+Math.atan2(x.x,x.z)/(Math.PI*2)*o,p=!1),nr.copy(ie.sunCol).multiplyScalar(ie.sunI),Lr.set(nr.r,nr.g,nr.b),nr.copy(ie.hemiSky).multiplyScalar(ie.hemiI*2),Lr.x+=nr.r,Lr.y+=nr.g,Lr.z+=nr.b;let C=Math.min(Math.max((ie.bright-.55)/.4,0),1),P=C*C*(3-2*C);a.uLightC.value.setRGB(Lr.x/(Id.r+Ld.r),Lr.y/(Id.g+Ld.g),Lr.z/(Id.b+Ld.b)),a.uPaint.value=P;let L=Math.max(4*a.uMix.value*(1-a.uMix.value),Math.min(1,2*(1-R))),D=_?0:.45*L*L*L;return a.uHaze.value=1-(1-(1-(1-.12*ie.warm-.25*ie.night)*(1-.55*ie.overcast)*(1-.6*ie.rain))*(1-P))*(1-D),R}}}async function ZM(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((m,d)=>e[d]!==m))throw new Error("not a PNG");let s=8,r=0,o=0,l=[];for(;s+12<=e.length;){let m=t.getUint32(s),d=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+m>e.length)throw new Error("PNG truncated");if(d==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(d==="IDAT")l.push(e.subarray(s+8,s+8+m));else if(d==="IEND")break;s+=12+m}if(!r||!o||!l.length)throw new Error("PNG has no image");let c=new Uint8Array(await new Response(new Blob(l).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,h=new Uint8Array(u*o),g=new Uint8Array(u);if(c.length<(u+1)*o)throw new Error("PNG data short");for(let m=0;m<o;m++){let d=c[m*(u+1)],_=m*(u+1)+1,E=(o-1-m)*u,b=m?h.subarray(E+u,E+2*u):g,a=h.subarray(E,E+u),x=c.subarray(_,_+u);if(d===0)a.set(x);else if(d===1){for(let p=0;p<4;p++)a[p]=x[p];for(let p=4;p<u;p++)a[p]=x[p]+a[p-4]}else if(d===2)for(let p=0;p<u;p++)a[p]=x[p]+b[p];else if(d===3){for(let p=0;p<4;p++)a[p]=x[p]+(b[p]>>1);for(let p=4;p<u;p++)a[p]=x[p]+(a[p-4]+b[p]>>1)}else if(d===4){for(let p=0;p<4;p++)a[p]=x[p]+b[p];for(let p=4;p<u;p++){let f=a[p-4],v=b[p],M=b[p-4],w=Math.abs(v-M),y=Math.abs(f-M),S=Math.abs(f+v-M-M);a[p]=x[p]+(w<=y&&w<=S?f:y<=S?v:M)}}else throw new Error("PNG filter "+d)}return{w:r,h:o,data:h}}function $M(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],l=Math.floor(r*255)+1,c=new Uint32Array(256),u=[],h=(_,E,b,a,x,p)=>{c.fill(0);for(let f=0;f<p;f++){let v=((a+f)*E+b)*4+3;for(let M=0;M<x;M++)c[_[v+M*4]]++}};for(let _=0;_<s;_++)for(let E=0;E<n;E++){let b=i/n,a=e/s;h(t,i,E*b,_*a,b,a);let x=0;for(let p=l;p<256;p++)x+=c[p];u.push(x/(b*a))}let g=i,m=e,d=t;for(;g>1&&m>1;){let _=g>>1,E=m>>1,b=new Uint8Array(_*E*4),a=g*4;for(let f=0;f<E;f++){let v=f*2*a,M=f*_*4;for(let w=0;w<_;w++,v+=8)for(let y=0;y<4;y++,M++)b[M]=d[v+y]+d[v+y+4]+d[v+y+a]+d[v+y+a+4]+2>>2}let x=_/n,p=E/s;if(x>=2&&p>=2&&x===Math.floor(x)&&p===Math.floor(p))for(let f=0;f<s;f++)for(let v=0;v<n;v++){h(b,_,v*x,f*p,x,p);let M=Math.round(u[f*n+v]*x*p),w=255,y=c[255];for(;w>1&&y<M;)y+=c[--w];let S=M>0?Math.min(6,Math.max(.5,l/w)):1;if(S!==1)for(let T=0;T<p;T++){let A=((f*p+T)*_+v*x)*4+3;for(let R=0;R<x;R++)b[A+R*4]=Math.min(255,Math.round(b[A+R*4]*S))}}o.push({data:b,width:_,height:E}),d=b,g=_,m=E}return o}async function Hg(i,e=15e3){let t=zo+"trees/";return ko((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let l=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&l.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+l.byteLength+" bytes, not "+s.bytes[r]);let c=await ZM(l),u=s.cols,h=s.rows;if(!(u>0&&h>0)||c.w%u||c.h%h)throw new Error("bad atlas layout");let g=(s.cells||[]).filter(_=>_.col<u&&_.row<h).map(_=>{let E=.5/c.w,b=.5/c.h;return{kind:_.kind,u0:_.col/u+E,u1:(_.col+1)/u-E,v0:1-(_.row+1)/h+b,v1:1-_.row/h-b}});if(!g.some(_=>_.kind==="leaf"))throw new Error("no leaf clusters listed");let m=$M(c.w,c.h,c.data,u,h,.5),d=new Xi(c.data,c.w,c.h,$n);return d.mipmaps=m,d.generateMipmaps=!1,d.minFilter=An,d.magFilter=Ut,d.colorSpace=ii,d.needsUpdate=!0,{tex:d,cells:g,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var gl={T:6.5,LAM:11,LZ:42},Nd=`
float shorePhase(float s, float d){ return uTime * ${(1/gl.T).toFixed(7)} + d * ${(1/gl.LAM).toFixed(7)} - s * ${(1/gl.LZ).toFixed(7)}; }`,KM=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,vl={uNoiseTex:ze.uNoiseTex,uTime:{value:0},uCam:{value:new H},uSunDir:{value:ie.lightDir},uSunCol:{value:ie.sunCol},uHorizon:{value:ie.horizon},uZenith:{value:ie.zenith},uFog:{value:ie.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new xe},uPMid:{value:new xe},uPFace:{value:new xe},uPFar:{value:new xe},uPHz:{value:new xe},uFoamLit:{value:new xe(1,1,1)},uFoamShade:{value:new xe(.5,.6,.8)}},JM={trough:[0,98,182],mid:[10,132,218],face:[42,158,236],far:[66,170,246],hz:[118,188,243],foam:[246,251,254],foamShade:[160,205,240]},Gg=`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPFar, uPHz, uFoamLit, uFoamShade;
${Si}
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
}`;function Wg(){let i=new ht({fog:!1,uniforms:vl,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${Gg}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),e=new ut(new Qt(14e3,14e3),i);e.rotation.x=-Math.PI/2,e.position.y=Ki,e.renderOrder=998,e.frustumCulled=!1;let t=vl;return{mesh:e,update(n,s,r,o=1,l=null){e.position.x=n.x,e.position.z=n.z,t.uTime.value=s,t.uCam.value.copy(n),t.uNight.value=ie.night,t.uBright.value=ie.bright,t.uFogD.value=r,t.uVis.value=o,t.uSpecK.value=1-ie.overcast*.85;let c=Math.min(Math.max((ie.bright-.55)/.4,0),1),u=l?c*c*(3-2*c):0;t.uPaint.value=u;let h=1+.25*ie.bright,g=1/(Math.PI*h),m=ie.sunCol,d=ie.hemiSky,_=ie.sunI*.8,E=ie.hemiI;if(t.uFoamLit.value.setRGB((m.r*_+d.r*E)*g,(m.g*_+d.g*E)*g,(m.b*_+d.b*E)*g),t.uFoamShade.value.setRGB(d.r*E*.9*g,d.g*E*.9*g,d.b*E*.9*g),u>0){let b=JM;Dr(l,b.trough,t.uPTrough.value),Dr(l,b.mid,t.uPMid.value),Dr(l,b.face,t.uPFace.value),Dr(l,b.far,t.uPFar.value),Dr(l,b.hz,t.uPHz.value),t.uFoamLit.value.lerp(Dr(l,b.foam,Vg),u),t.uFoamShade.value.lerp(Dr(l,b.foamShade,Vg),u)}}}}var Vg=new xe,Dr=(i,e,t)=>Ig(i,e[0],e[1],e[2],t);function Xg(i=!1){return new ht({fog:!1,defines:i?{SHORE_LITE:""}:{},uniforms:vl,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${Gg}${KM}${Nd}
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
      }`})}function qg(){return new ht({fog:!1,uniforms:{uNoiseTex:ze.uNoiseTex,uTime:{value:0},uSunDir:{value:ie.lightDir},uSunCol:{value:ie.sunCol},uHorizon:{value:ie.horizon},uZenith:{value:ie.zenith},uFog:{value:ie.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
        float edge = smoothstep(12.2, 14.2, abs(vSU.x));              // a little foam where it meets the banks
        col = mix(col, vec3(0.85, 0.9, 0.92) * (1.0 - 0.7 * uNight), edge * 0.35 * vnoise(vec2(vSU.y * 0.5 - uTime, vSU.x)));
        float fd = dist * uFogD;
        gl_FragColor = vec4(mix(col, uFog, 1.0 - exp(-fd * fd)), 1.0);
      }`})}var ih={n:8};function Yg(){return new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:vl,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC;
      varying vec2 vUv; varying vec3 vK;
      ${Nd}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        float ph = shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13);        // each puff a moment after the wave arrives
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13);   // how hard this wave hits here
        float age = fract(ph) * ${gl.T.toFixed(2)}, dur = 1.15 + 1.1 * str, k = age / dur;
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
      ${Si}
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
      }`})}function Zg(i){let e=i.length/8;if(!e)return null;let t=new Float32Array(e*12),n=new Float32Array(e*16),s=new Float32Array(e*12),r=new Uint16Array(e*6),o=[-1,1,1,-1],l=[-1,-1,1,1],c=1/0,u=1/0,h=1/0,g=-1/0,m=-1/0,d=-1/0;for(let E=0;E<e;E++){let b=E*8;for(let a=0;a<4;a++){let x=E*4+a;t[x*3]=i[b],t[x*3+1]=i[b+1],t[x*3+2]=i[b+2],n[x*4]=i[b+3],n[x*4+1]=i[b+4],n[x*4+2]=i[b+5],n[x*4+3]=i[b+6],s[x*3]=o[a],s[x*3+1]=l[a],s[x*3+2]=i[b+7]}r.set([E*4,E*4+1,E*4+2,E*4,E*4+2,E*4+3],E*6),c=Math.min(c,i[b]),u=Math.min(u,i[b+1]),h=Math.min(h,i[b+2]),g=Math.max(g,i[b]),m=Math.max(m,i[b+1]),d=Math.max(d,i[b+2])}let _=new vt;return _.setAttribute("position",new Mt(t,3)),_.setAttribute("aB",new Mt(n,4)),_.setAttribute("aC",new Mt(s,3)),_.setIndex(new Mt(r,1)),_.boundingBox=new ci(new H(c-6,u-1,h-6),new H(g+6,m+6,d+6)),_.boundingSphere=_.boundingBox.getBoundingSphere(new ui),_}var Ht=60,Ud=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],$g=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],Kg=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],xl=32,Fd=[-.2,2.2,5.5,10,17,27,38],yl=[.025,.026,.032],Jg=[.05,.05,.065],jg=new Qe,ds=(i,e)=>(i%e+e)%e,Is=(i,e)=>{let t=Ks(i);return!!t&&Math.abs(i-t.s)<e},sh=i=>ds(i,4)===0,jM=i=>ds(i,2)===0,kd=1.4,Qg=i=>sh(i)?4.4:kd+.9,Bd=i=>sh(i)?3.4:kd-.1,Od=(i,e)=>Math.abs(i-Math.round(i/300)*300)<e,es=(i,e)=>{let t=Ii(i);return!!t&&Math.abs(i-t.s)<e},ri=(i,e)=>{let t=Pi(i);return!!t&&Math.abs(i-t.s)<e},zd=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let l=n(r,o);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let l=s+r*t+o,c=l+1,u=l+t,h=u+1;this.I.push(l,c,u,c,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,l=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)l[u*o+h]=n(u,h-s);let c=(u,h)=>l[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let g=c(u,h-1),m=c(u,h+1),d=c(u-1,h),_=c(u+1,h),E=l[u*o+h],b=m[0]-g[0],a=m[1]-g[1],x=m[2]-g[2],p=_[0]-d[0],f=_[1]-d[1],v=_[2]-d[2],M=a*v-x*f,w=x*p-b*v,y=b*f-a*p;w<0&&(M=-M,w=-w,y=-y);let S=Math.hypot(M,w,y)||1;E[3]=M/S,E[4]=w/S,E[5]=y/S}this.grid(e,t,(u,h)=>l[u*o+h+s])}build(){let e=new vt;return e.setAttribute("position",new Ze(this.P,3)),e.setAttribute("normal",new Ze(this.N,3)),e.setAttribute("su",new Ze(this.SU,2)),e.setAttribute("zw",new Ze(this.ZW,4)),e.setAttribute("rk",new Ze(this.RK,2)),e.setAttribute("rv",new Ze(this.RV,1)),e.setAttribute("zs",new Ze(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},rh=class{constructor(e,t,n,s){this.path=t,this.M=n,this.riverMat=s,this.heapCache=new Map,this.group=new nn,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Ht),s=Math.floor((e+this.ahead)/Ht);for(let[o,l]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(l),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let l=o.pending.shift();l&&o.group.add(l),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){l=c;break}if(l<0)return 0;l*Ht-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let o=this.job.it.next();if(o.done){let l=o.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let l=o*Ht-e,c=r.group.children;for(let u=0;u<c.length;u++){let h=c[u],g=h.userData.detail;g&&(h.visible=g==="leaf"?l<s:l<t||n&&g==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Ht,s=n+Ht,r=t.at(n),o=r.x,l=r.z,c=Ot(Math.floor(Pn(e,777)*4294967295)),u={atlas:new rn({uv:!0,ao:!0,lit:!0}),color:new rn({ao:!0}),foliage:new rn,leaf:new rn({uv:!0}),lamp:new rn({color:!1}),sig:new rn({color:!1}),sodium:new rn({color:!1}),decal:new rn({uv:!0}),pool:new rn({uv:!0,color:!1}),gleaf:new rn({uv:!0,off:!0}),gblossom:new rn({uv:!0,off:!0})},h=new zd,g={rows:[],puffs:[]},m=[];u.lamps=[];let d={},_={},E=(T,A)=>{t.at(T,_);let R=Fn(T,"rw");return _.y+Js(T,A,_.y,R)},b=T=>{let A=Dt(T);return[A.city,A.sakura,A.coast,A.country,A.snow]},a=(T,A,R)=>(t.at(T,d),[d.x+d.rx*A-o,R,d.z+d.rz*A-l]),x=(T,A,R,C=0,P=!0)=>{t.at(T,d);let L=d.h-Math.PI/2+(P&&A<0?Math.PI:0)+C,D=new Qe().makeRotationY(L);return D.setPosition(d.x+d.rx*A-o,R,d.z+d.rz*A-l),D.groundY=R,D},p=(T,A,R=0,C=0,P=!0)=>{let L=E(T,A),D=x(T,A,L+R,C,P);return D.groundY=L,D},f=T=>t.at(T,_).y,v=T=>Fn(T,"rw"),M=T=>{let A=Dt(T);return A.city+A.sakura>.5?A.city>=A.sakura?3:2.6:0};{let T=Pi(n+Ht/2),A=!!T&&T.s>n-40&&T.s<s+40,R=A?61:21,C=v(n+Ht/2),P=(()=>{let W=[0,...$g].map(ce=>ce);return Kg.forEach(ce=>W.push(ce-C)),W})(),L=[...P.slice().reverse().map(z=>-z),...P],D=L.length,B=Array.from({length:R},(z,W)=>n+W/(R-1)*Ht);{let z=Ii(n+Ht/2);if(z)for(let W of[z.s-vn,z.s+vn])W>n+.1&&W<s-.1&&B.push(W-.03,W+.03)}B.sort((z,W)=>z-W);let V=D/2,O=B.map(z=>(t.at(z,d),{s:z,f:{...d},rw:v(z),w:b(z),rb:A?cm(z):0})),k=Math.round(V/2);for(let[z,W,ce,Ne]of[[0,k,0,1],[k-1,V,1,0],[V,V+k+1,0,1],[V+k,D,1,0]])h.gridN(O.length,W-z,(Oe,Ee)=>{let $=O[Oe],J=$.f,le=z+Ee,Ce=L[le],Se=Ce===0&&$.w[2]>0?.15:0,ke=Ce<0||Ce===0&&le<V?Ce-$.rw+Se:Ce+$.rw-Se,we=J.y+Js($.s,ke,J.y,$.rw),Je=Math.abs(ke)>$.rw+.98?Math.min(1,Vu/.5):0;return[J.x+J.rx*ke-o,we,J.z+J.rz*ke-l,0,1,0,ds($.s,Mi),ke,$.w[0],$.w[1],$.w[2],$.w[3],$.rw,0,$.rb>0?$.rb:-Je,$.w[4]]},ce,Ne),yield}yield,h.grid(31,2,(A,R)=>{let C=n+A/30*Ht,P=v(C),L=R?P:-P;t.at(C,d);let D=d.y,B=(f(C+1)-f(C-1))/2,V=-B*d.fx,O=1,k=-B*d.fz,z=Math.hypot(V,O,k),W=b(C);return[d.x+d.rx*L-o,D,d.z+d.rz*L-l,V/z,O/z,k/z,ds(C,Mi),L,W[0],W[1],W[2],W[3],P,1,0,W[4]]});{let T=[];for(let C=0;C<=30;C++){let P=n+C/30*Ht;T.push({s:P,sw:M(P)})}let A=[],R=null;for(let C of T)C.sw>0?(R||(R=[],A.push(R)),R.push(C)):R=null;for(let C of A)if(!(C.length<2))for(let P of[-1,1])h.grid(C.length,2,(L,D)=>{let{s:B,sw:V}=C[L],O=v(B),k=P*(D===(P>0?0:1)?O:O+V);t.at(B,d);let z=b(B);return[d.x+d.rx*k-o,d.y+.15,d.z+d.rz*k-l,0,1,0,ds(B,Mi),k,z[0],z[1],z[2],z[3],O,2,0,z[4]]}),h.grid(C.length,2,(L,D)=>{let{s:B}=C[L],V=v(B),O=P*V,k=P>0?D:1-D;t.at(B,d);let z=b(B);return[d.x+d.rx*O-o,d.y+(k?.15:0),d.z+d.rz*O-l,-P*d.rx,0,-P*d.rz,ds(B,Mi),O,z[0],z[1],z[2],z[3],V,3,0,z[4]]})}yield,yield*this.placePoles(e,n,s,c,u,x,E,a,f,v);{let T=Math.ceil((n-Ar)/wr),A=Po(T);A<s&&rl(A)&&(yield*this.placeCrossing(u,h,A,x,f,v,E,M,o,l));let R=Math.ceil((n-Io)/Rr),C=nd(R);C<s&&id(C)&&(yield*this.placeRiver(u,h,C,x,f,v,E,M,o,l,c,m));let P=Ii(n+Ht/2);P&&P.s+hn>n&&P.s-hn<s&&(yield*this.placeTunnel(u,h,P,n,s,x,p,E,v,o,l,c))}yield;for(let T=n;T<s;T+=4){let A=sn(T);(A==="coast"&&Dt(T).coast>.45||A==="mountain"&&Dt(T).mountain>.45)&&!es(T+2,hn+4)&&this.guardrail(u,T,Math.min(T+4,s),a,f,v)}yield*this.placeCity(u,c,n,s,x,p,f,v,M,E,h,o,l),yield*this.placeSakura(u,c,n,s,x,p,f,v,E),yield*this.placeCoast(u,c,e,n,s,x,p,v,g,a),yield,yield*this.placeCountry(u,c,n,s,x,p,f,v,E),yield*this.placeMountain(u,c,n,s,x,p,f,v,E),yield*this.placeSnow(u,c,n,s,x,p,f,v,E),yield*this.placeVerge(u,c,n,s,x,E,v,e,o,l),yield;let w=new nn,y=(T,A,R,C,P=0,L)=>{if(!T)return null;let D=new ut(T,A);return D.castShadow=R,D.receiveShadow=C,D.renderOrder=P,L&&(D.userData.detail=L),w.add(D),D},S=new Set;for(let T of[n,n+20,n+40,s]){let A=$s(T);S.add(A.a),A.t>0&&S.add(A.b)}y(h.build(),cl([...S]),!1,!0),yield,y(u.atlas.build(),this.M.atlas,!0,!0),yield;{let T=y(u.color.build(),this.M.color,!0,!0);T&&(T.customDepthMaterial=Yu)}if(yield,y(u.foliage.build(),this.M.foliage,!0,!0),y(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let T=y(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");T&&(T.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let T=y(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");T&&(T.customDepthMaterial=this.M.gleafDepth)}if(yield,y(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),y(u.sig.build(),this.M.sig,!1,!1,0,"small"),y(u.sodium.build(),this.M.sodium,!1,!1),y(u.decal.build(),this.M.decal,!1,!0,1,"small"),y(u.pool.build(),this.M.pool,!1,!1,2,"light"),g.rows.length>1){let T=g.rows,A=Fd.length,R=T.length*A,C=new Float32Array(R*3),P=new Float32Array(R*2),L=new Float32Array(R*2),D=[];T.forEach((V,O)=>{for(let k=0;k<A;k++){let z=O*A+k,W=k*7;C.set(V.subarray(W,W+3),z*3),P[z*2]=V[W+3],P[z*2+1]=V[W+4],L[z*2]=V[W+5],L[z*2+1]=V[W+6]}if(O>0)for(let k=0;k<A-1;k++){let z=(O-1)*A+k,W=z+A;D.push(z,W,z+1,z+1,W,W+1)}});let B=new vt;B.setAttribute("position",new Mt(C,3)),B.setAttribute("su",new Mt(P,2)),B.setAttribute("hf",new Mt(L,2)),B.setIndex(D),B.computeBoundingSphere(),y(B,this.M.shore,!1,!1,997)}g.puffs.length&&y(Zg(g.puffs),this.M.surf,!1,!1,2,"small");for(let T of m)y(T,this.riverMat,!1,!0);return w.position.set(o-this.origin.x,0,l-this.origin.z),{group:w,ox:o,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*xl+6,n=sn(t);if(n==="sakura"||Is(t,6)||ri(t,34)||es(t,hn+12))return null;let s=Fn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,l,c,u,h){let g=Math.ceil((t-6)/xl),m=Math.floor((n-6-.001)/xl);for(let d=g;d<=m;d++){let _=this.poleSpec(d);if(!_)continue;let E=_.z==="city"?u(_.s)+.15:l(_.s,_.u),b=o(_.s,_.u,E),a=Ot(Math.floor(Pn(d,31)*4294967295)),x=vd(r,b,a,{trans:a()<.45});_.z==="city"&&d%2===0&&$m(r,b,-.11),d%2&&(yield);let p=this.poleSpec(d+1);if(p){let f=p.z==="city"?u(p.s)+.15:l(p.s,p.u),v=Zm(o(p.s,p.u,f));r.color.setM(new Qe);let M=[];for(let w=0;w<x.length;w++){let y=x[w],S=v[w],T=.35+a()*.4+(w>=7?.3:0);M.push(T),r.color.wire([y.x,y.y,y.z],[S.x,S.y,S.z],T,w>=7?.022:.015,yl,10)}if(_.z!=="coast"&&a()<.38){let w=Math.floor(a()*4),y=x[w],S=v[w],T=1+Math.floor(a()*4),A=.18+a()*.5;for(let R=0;R<T;R++){let C=Math.min(.92,A+R*(.018+a()*.025)),P=y.x+(S.x-y.x)*C,L=y.z+(S.z-y.z)*C,D=y.y+(S.y-y.y)*C-M[w]*4*C*(1-C);r.color.box(P-.07,D+.015,L-.07,P+.07,D+.19,L+.07,Jg),r.color.box(P-.045,D+.19,L-.045,P+.045,D+.27,L+.045,Jg)}}}if(_.z==="city"){r.color.setM(new Qe);let f=1+Math.floor(a()*3);for(let v=0;v<f;v++){let M=x[7+v%2],w=(a()-.5)*14,y=h(_.s+w),S=a()<.55,T=S?-(y+3.15):y+3.15,A=c(_.s+w,T,u(_.s+w)+5.2+a()*2.5);r.color.wire([M.x,M.y,M.z],A,.25+a()*.4,.012,yl,8)}}}}*intersection(e,t,n,s,r,o,l,c,u,h,g){let m=this.path.at(n,{}),d=o(n),_=l(n),E=c(n)||3,b=n-.5,a=Dt(n),x=[a.city,a.sakura,a.coast,a.country],p=(w,y,S)=>[m.x+m.fx*(w-.5)+m.rx*y-h,S,m.z+m.fz*(w-.5)+m.rz*y-g],f=_+E+.15,v=sh(s),M=v?3:kd;for(let w of[-1,1]){let y=w*(_+E),S=w*80;if(u.grid(21,2,(C,P)=>{let L=y+(S-y)*C/20,D=(P?-M:M)*w,B=p(D,L,d+.165);return[B[0],B[1],B[2],0,1,0,D*w,L,x[0],x[1],x[2],x[3],_,10]}),v){let C=w*(_+E+3.2),P=-w*1.35,L=1.15,D=.42,B=(V,O)=>p(P+w*V,C-w*O,d+.18);e.decal.setM(new Qe),e.decal.quad(B(-L,-D),B(L,-D),B(L,D),B(-L,D),[1,1,1],Fo("tomare"))}for(let C of[-1,1]){let P=f+15+t()*3;for(;P<52;){let L=t.range(5.5,8.5),D=w*(P+L/2),B=t(),V=r(b+C*(M+.3),D,d+.14,C>0?Math.PI/2:-Math.PI/2,!1);Cs(e,V,t,{type:B<.5?"house":"shop",w:L,d:t.range(7,10),floors:B<.5?2:t.int(2,3),tint:t.pick(Rs),litP:.45,fence:0}),P+=L+t.range(.2,1.2),yield}yield}let T=[30,54].map(C=>r(b+M-.2,w*C,d+.15,-Math.PI/2,!1)),A=Ot(Math.floor(Pn(s,w>0?71:73)*4294967295)),R=T.map(C=>vd(e,C,A,{trans:A()<.4}));e.color.setM(new Qe);for(let C=0;C<7;C++){let P=R[0][C],L=R[1][C];e.color.wire([P.x,P.y,P.z],[L.x,L.y,L.z],.3+A()*.4,.014,yl,10)}}v&&(Td(e,r(n-9,-(_+.55),d+.15,0,!0),1,_+.55-1.6),Td(e,r(n+8,_+.55,d+.15,0,!0),1,_+.55-1.6),s%8===0&&ug(e,r(n+15,0,d,0,!1),_+E+.1,"hodokyo"+Math.abs(s/8)%3))}*placeCrossing(e,t,n,s,r,o,l,c,u,h){let g=this.path.at(n,{}),m=g.y,d=o(n),_=c(n),E=d+_+.2,b=150,a=m+.18,x=Dt(n),p=[x.city,x.sakura,x.coast,x.country],f=(L,D,B)=>[g.x+g.fx*L+g.rx*D-u,B,g.z+g.fz*L+g.rz*D-h],v=[7.6,4.7,-4.7,-7.6];for(let[L,D]of[[-b,-E],[E,b]])t.grid(25,v.length,(V,O)=>{let k=L+(D-L)*V/24,z=v[O],ce=Math.abs(z)<5?a:Math.min(a-.05,l(n+z,k)-.03),Ne=f(z,k,ce);return[Ne[0],Ne[1],Ne[2],0,1,0,z,k,p[0],p[1],p[2],p[3],d,5]});let M=(L,D,B)=>t.grid(2,2,(V,O)=>{let k=V?D:L,z=O?-3.3:3.3,W=f(z,k,B);return[W[0],W[1],W[2],0,1,0,z,k,p[0],p[1],p[2],p[3],d,6]});M(-d,d,m+.03),_>0&&(M(-E,-d,m+.165),M(d,E,m+.165));let w=(L,D,B,V)=>t.grid(2,2,(O,k)=>{let z=O?V:B,W=k?D:L,ce=f(W,z,m+.025);return[ce[0],ce[1],ce[2],0,1,0,W,z,p[0],p[1],p[2],p[3],d,7]});w(-7.15,-7.6,-d+.3,-.12),w(7.6,7.15,.12,d-.3),yield;let y=s(n,0,m,-Math.PI/2,!1),S=e.color;S.setM(y);let T=[.42,.4,.38],A=[.3,.29,.28],R=[.55,.57,.6];for(let L of[-2,2])for(let D of[-.5335,.5335]){let B=-(L+D);for(let[V,O]of[[-b,-E],[E,b]])S.box(V,.26,B-.035,O,.34,B+.035,T);S.box(-E,0,B-.035,E,.04,B+.035,A)}let C=[-146,-104,-64,-26,26,64,104,146];for(let L of C){for(let D of[-4.95,4.95])S.box(L-.12,.18,D-.12,L+.12,7.4,D+.12,R);S.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,R);for(let D of[-2,2])S.box(L-.04,6.3,-D-.04,L+.04,6.95,-D+.04,R)}for(let L of[-2,2])for(let D=0;D<C.length-1;D++)S.wire([C[D],5.35,-L],[C[D+1],5.35,-L],.05,.011,yl,6),S.wire([C[D],6.4,-L],[C[D+1],6.4,-L],.45,.011,yl,8);yield;let P=Math.round((n-Ar)/wr);if(x.country>.9&&Pn(P,17)<.7){let L=Pn(P,19)<.5?-1:1,D=L>0?d+9:-(d+9+46),B=L>0?d+9+46:-(d+9);hg(e,y,D,B,L*(d+9),Math.abs(P)%4,Ot(Math.floor(Pn(P,23)*4294967295))),S.setM(y)}yield;for(let L of Zu(this.path,n)){let D=new Qe().makeRotationY(L.yaw);D.setPosition(L.x-u,L.y,L.z-h),pg(e,D)}tr(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85),tr(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,l,c,u,h,g,m){let d=this.path.at(n,{}),_=d.y,E=o(n),b=c(n),a=Dt(n),x=[a.city,a.sakura,a.coast,a.country],p=a.sakura>.5,f=222,v=E+b+.5,M=_-ol,w=(P,L,D)=>[d.x+d.fx*P+d.rx*L-u,D,d.z+d.fz*P+d.rz*L-h];{let P=[],L=[],D=[];for(let O=0;O<=74;O++){let k=-f+2*f*O/74;for(let z of[14.3,-14.3]){let W=w(z,k,M);P.push(W[0],W[1],W[2]),L.push(z,k)}if(O>0){let z=(O-1)*2;D.push(z,z+1,z+2,z+1,z+3,z+2)}}let V=new vt;V.setAttribute("position",new Ze(P,3)),V.setAttribute("su",new Ze(L,2)),V.setIndex(D),V.computeBoundingSphere(),m.push(V)}for(let[P,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,B]of[[-f,-(E+3.4)],[E+3.4,f]])t.grid(41,2,(V,O)=>{let k=D+(B-D)*V/40,z=O?L:P,W=w(z,k,_+.38);return[W[0],W[1],W[2],0,1,0,z,k,x[0],x[1],x[2],x[3],E,9,1]});yield;let y=s(n,0,_,0,!1),S=e.color,T=[.74,.73,.7],A=p?[.78,.2,.15]:[.55,.72,.64];S.setM(y),S.box(-24.5,-1,-v,24.5,-.03,v,T,null,{noBottom:!1});for(let P of[-1,1])S.box(-24.5,-1.3,P>0?v-.35:-v,24.5,-.95,P>0?v:-v+.35,[.62,.61,.58]);for(let P of[-8,8])S.box(P-.7,-ol-1.4,-v+.6,P+.7,-1,v-.6,T);for(let P of[-25.7,25.7])S.box(P-1.2,-ol+.4,-v-.4,P+1.2,-.05,v+.4,T);for(let P of[-24.5,24.5])S.box(P-.16,.004,-E,P+.16,.016,E,[.33,.32,.31]),S.box(P-.02,.016,-E,P+.02,.02,E,[.2,.19,.19]);let R=b>0?.15:0;for(let P of[-1,1]){let L=P*(v-.14);for(let D=-24;D<=24.01;D+=2)S.box(D-.06,R,L-.06,D+.06,R+1,L+.06,A);S.box(-24,R+.95,L-.08,24,R+1.08,L+.08,A),S.box(-24,R+.48,L-.03,24,R+.54,L+.03,A),S.box(-24,R+.06,L-.03,24,R+.12,L+.03,A)}let C="bridge"+Math.abs(Math.round(n/Rr))%4;for(let P of[-25,25])for(let L of[-1,1]){let D=L*(v-.1),B=[.7,.69,.65];S.box(P-.32,R,D-.32,P+.32,R+1.45,D+.32,B),S.box(P-.38,R+1.45,D-.38,P+.38,R+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(y);let V=(P<0?-1:1)*.325,O=C;P<0?e.atlas.quad([P-.325,R+.3,D-.22],[P-.325,R+.3,D+.22],[P-.325,R+1.3,D+.22],[P-.325,R+1.3,D-.22],[1,1,1],Fo(O)):e.atlas.quad([P+.325,R+.3,D+.22],[P+.325,R+.3,D-.22],[P+.325,R+1.3,D-.22],[P+.325,R+1.3,D+.22],[1,1,1],Fo(O)),S.setM(y)}hl(e,s(n-14,-(v-.45),_+R,0,!0)),hl(e,s(n+14,v-.45,_+R,0,!0)),yield;{e.atlas.setM(new Qe);let P=Fo("gogan"),L=2.4,D=150;for(let B of[-1,1])for(let V=-D;V<D-.01;V+=L){let O=V+L,k=w(B*13.9,V,M-.12),z=w(B*13.9,O,M-.12),W=w(B*16.05,O,M+.72),ce=w(B*16.05,V,M+.72),Ne=(z[1]-k[1])*(ce[2]-k[2])-(z[2]-k[2])*(ce[1]-k[1]),Oe=(z[0]-k[0])*(ce[1]-k[1])-(z[1]-k[1])*(ce[0]-k[0]),Ee=w(0,(V+O)/2,M),$=Ne*(Ee[0]-k[0])+Oe*(Ee[2]-k[2])>0,J={u0:P.u0,u1:P.u1,v0:P.v0,v1:P.v1};$?e.atlas.quad(k,z,W,ce,[1,1,1],J):e.atlas.quad(z,k,ce,W,[1,1,1],{u0:P.u1,u1:P.u0,v0:P.v0,v1:P.v1})}for(let B of[-1,1])for(let V of[-1,1])for(let O=14+g()*3;O<125;O+=g.range(2.4,5)){if(g()<.35)continue;let k=B*(16.2+g()*1.1),z=V*O,W=1+(g()<.4?1:0);for(let ce=0;ce<W;ce++){let Ne=w(k+B*g()*.6,z+(g()-.5)*.9,M+.7),Oe=new Qe().makeRotationY(g()*6.28);Oe.setPosition(Ne[0],Ne[1],Ne[2]),Sd(e,Oe,g,"grass",g.range(1.9,2.8))}}}yield;for(let P of[-18,18])for(let L of[-1,1]){yield;for(let D=11+g()*4;D<(p?125:170);D+=p?g.range(8.5,11):g.range(18,34)){let B=n+P+(g()-.5)*1.5,V=L*D;si(e,s(B,V,l(B,V),g()*6,!1),p?"sakura":"broad",g,p?g.range(1,1.25):g.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,l,c,u,h,g,m){let d=this.path.at(n.s,{}),_=d.y,E=u(n.s),b=E+1.4,a=Dt(n.s),x=[a.city,a.sakura,a.coast,a.country],p=o(n.s,0,_,0,!1),f=e.color,v=Math.max(s,n.s-vn)-n.s,M=Math.min(r,n.s+vn)-n.s;if(M>v+.01){let O=Math.max(2,Math.ceil((M-v)/3)+1),k=[-(E+1.5),-E,-E*.5,0,E*.5,E,E+1.5];t.gridN(O,k.length,(J,le)=>{let Ce=v+(M-v)*J/(O-1),Se=n.s+Ce,ke=k[le],we=_+Wu(Ce,ke);return[d.x+d.fx*Ce+d.rx*ke-h,we,d.z+d.fz*Ce+d.rz*ke-g,0,1,0,ds(Se,Mi),ke,x[0],x[1],x[2],x[3],E,0,-1]});let z=[[-E,0],[-E,.2],[-b,.2],[-b,3.2]];for(let J=1;J<12;J++){let le=Math.PI*(1-J/12);z.push([b*Math.cos(le),3.2+3*Math.sin(le)])}z.push([b,3.2],[b,.2],[E,.2],[E,0]);let W=[.86,.82,.72],ce=[.44,.45,.47],Ne=[.62,.61,.58],Oe=[];for(let J=v;J<M-.01;J+=6)Oe.push(J);Oe.push(M),f.setM(p);for(let J=0;J<Oe.length-1;J++)for(let le=0;le<z.length-1;le++){let[Ce,Se]=z[le],[ke,we]=z[le+1],Je=Math.max(Se,we)<=.21?Ne:Math.abs(Ce)>b-.01&&Math.abs(ke)>b-.01?W:ce;f.quad([Oe[J],Se,Ce],[Oe[J+1],Se,Ce],[Oe[J+1],we,ke],[Oe[J],we,ke],Je)}e.sodium.setM(p),e.sig.setM(p);let Ee=b*Math.cos(Math.PI/6)-.12,$=3.2+3*Math.sin(Math.PI/6)-.08;for(let J=Math.ceil((v+vn-3)/6)*6+3-vn;J<M;J+=6)for(let le of[-1,1])e.sodium.box(J-.45,$-.07,le*Ee-.13,J+.45,$+.07,le*Ee+.13,null),er(e,p,J,$-.1,le*Ee,1);for(let J=Math.ceil((v+vn)/24)*24-vn;J<M;J+=24)e.sig.box(J-.3,.95,-b+.01,J+.3,1.2,-b+.06,null);for(let J=Math.ceil((v+vn-30)/60)*60+30-vn;J<M;J+=60)for(let le of[-1.15,1.15])f.box(J-1.1,5.2,le-.36,J+1.1,5.78,le+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),f.box(J-.08,5.78,le-.05,J+.08,6.15,le+.05,[.4,.4,.42]);yield}let w=(O,k)=>{let z=Math.sin(O*12.9898+k*78.233+n.k*37.719)*43758.5453;return z-Math.floor(z)},y=(O,k,z)=>[O[0]+(k[0]-O[0])*z,O[1]+(k[1]-O[1])*z,O[2]+(k[2]-O[2])*z],S=[.5,.5,.47],T=[.55,.53,.47],A=[.6,.6,.57],R=[.58,.58,.55],C=[.42,.42,.4],P=(O,k)=>{let z=w(O,k);return L?y([.26,.29,.08],[.42,.3,.09],z):y([.22,.29,.08],[.36,.36,.12],z)},L=a.mountain>.5,D=b+2.6,B=2.6;for(let O of[-1,1]){let k=n.s+O*vn,z=O*(vn+.08);if(k<s||k>=r)continue;let W=[];for(let te of $g)te>=1.44&&W.push(E+te,-(E+te));for(let te of Kg)te>E+3.5&&te<E+21&&W.push(te,-te);for(let te=0;te<=24;te++)W.push(-b+2*b*te/24);W.push(-b-.01,b+.01,-D,D),W.sort((te,N)=>te-N);let ce=te=>3.2+3*Math.sqrt(Math.max(0,1-(te/b)**2)),Ne=te=>Math.max(c(k-O*.03,te)-_,Wu(O*(vn-.03),te)),Oe=te=>Math.abs(te)<=b+1e-6?ce(te):c(k+O*.03,te)-_,Ee=8.4;for(let te of W)Math.abs(te)<=D&&(Ee=Math.min(Ee,Ne(te)-.4));let $=Ee>6.6;f.setM(p);let J=O,le=(te,N,I,G,Y,Q,ue,me)=>{let ae=[z,I,te],de=[z,G,N],Ie=[z,Q,N],Ye=[z,Y,te],Te=O<0?[ae,de,Ie,Ye]:[de,ae,Ye,Ie],Le=O<0?[ue,ue,me,me]:[ue,ue,me,me];for(let Be of[0,1,2,0,2,3])f.vtx(Te[Be][0],Te[Be][1],Te[Be][2],J,0,0,0,0,Le[Be])},Ce=(te,N,I)=>te+(N-te)*I;for(let te=0;te<W.length-1;te++){let N=W[te],I=W[te+1];if(I-N<1e-4)continue;let G=Ne(N),Y=Ne(I),Q=Oe(N),ue=Oe(I);if(G-Q<.01&&Y-ue<.01)continue;let me=(N+I)/2,ae=$&&Math.abs(me)<D,de=Q,Ie=ue;if(ae){let Be=y(S,[.46,.46,.44],w(Math.floor(me/2.4),3.1)),et=.8+2.6*w(Math.floor(me/.8),7.7),at=y(Be,[.27,.27,.26],.35+.3*w(Math.floor(me/.8),9.9)),Z=Math.min(Ee,G),Ae=Math.min(Ee,Y),pe=Math.max(Q,Z-et),De=Math.max(ue,Ae-et);if(Math.abs(me)>b){let X=Math.min(pe,Q+.9),ye=Math.min(De,ue+.9);le(N,I,Q,ue,X,ye,y(Be,[.25,.29,.18],.45),Be),le(N,I,X,ye,pe,De,Be,Be)}else le(N,I,Q,ue,pe,De,Be,Be);if(le(N,I,pe,De,Z,Ae,Be,at),de=Z,Ie=Ae,G-Z<.01&&Y-Ae<.01)continue}let Ye=Math.floor(me/B),Te=de,Le=Ie;for(let Be=Math.floor(Math.min(Te,Le)/B)+1;Te<G-.01||Le<Y-.01;Be++){let et=Be*B,at=Math.min(G,Math.max(Te,et)),Z=Math.min(Y,Math.max(Le,et)),Ae=P(Ye,Be);if(le(N,I,Te,Le,at,Z,y(Ae,[.2,.22,.1],.25),Ae),Te=at,Le=Z,Be>60)break}}let Se=Math.min(z,z+O*.12),ke=Math.max(z,z+O*.12),we=te=>{for(let N=0;N<W.length-1;N++)if(te>=W[N]&&te<=W[N+1]&&W[N+1]>W[N]){let I=(te-W[N])/(W[N+1]-W[N]);return[Ce(Oe(W[N]),Oe(W[N+1]),I),Ce(Ne(W[N]),Ne(W[N+1]),I)]}return null},Je=W[0],qe=W[W.length-1];for(let te=Math.ceil(Je/B)*B;te<qe;te+=B){let N=we(te);if(!N)continue;let I=($&&Math.abs(te)<D?Math.max(Ee+.3,N[0]):N[0])+.05,G=N[1]-.05;G-I>.4&&!(Math.abs(te)<=b+.3&&!$)&&f.box(Se,I,te-.14,ke,G,te+.14,T)}for(let te=1;te<60;te++){let N=te*B,I=null,G=()=>{I&&I[1]-I[0]>.3&&f.box(Se,N-.14,I[0],ke,N+.14,I[1],T),I=null},Y=!1;for(let Q=0;Q<W.length-1;Q++){let ue=W[Q],me=W[Q+1];if(me-ue<1e-4)continue;let ae=(ue+me)/2,de=Math.max(Oe(ue),Oe(me),$&&Math.abs(ae)<D?Ee+.3:-1e9),Ie=Math.min(Ne(ue),Ne(me));N>de+.2&&N<Ie-.2?(Y=!0,I?I[1]=me:I=[ue,me]):G()}if(G(),!Y&&N>30)break}$&&f.box(Math.min(z,z+O*.32),Ee-.05,-D,Math.max(z,z+O*.32),Ee+.3,D,A);let Fe=z+O*.32,ne=te=>-b+2*b*te/24,be=te=>[ne(te),ce(ne(te))],j=te=>[ne(te)*1.12,ce(ne(te))+.6];for(let te=0;te<24;te++){let[N,I]=be(te),[G,Y]=be(te+1),[Q,ue]=j(te),[me,ae]=j(te+1);O<0?f.quad([Fe,I,N],[Fe,Y,G],[Fe,ae,me],[Fe,ue,Q],R):f.quad([Fe,Y,G],[Fe,I,N],[Fe,ue,Q],[Fe,ae,me],R),O<0?f.quad([z,I,N],[z,Y,G],[Fe,Y,G],[Fe,I,N],C):f.quad([z,Y,G],[z,I,N],[Fe,I,N],[Fe,Y,G],C),O<0?f.quad([z,ae,me],[z,ue,Q],[Fe,ue,Q],[Fe,ae,me],R):f.quad([z,ue,Q],[z,ae,me],[Fe,ae,me],[Fe,ue,Q],R)}for(let te of[-1,1])f.box(Math.min(z,Fe),.2,te>0?b:-b*1.12,Math.max(z,Fe),3.2,te>0?b*1.12:-b,R);e.atlas.setM(p);let oe=1.9,ee=7.05,he=7.85,F=z+O*.03,ve=Fo("tunnel"+(a.coast>.5?1:Math.abs(n.k)%2?2:0));O<0?e.atlas.quad([F,ee,-oe],[F,ee,oe],[F,he,oe],[F,he,-oe],[1,1,1],ve):e.atlas.quad([F,ee,oe],[F,ee,-oe],[F,he,-oe],[F,he,oe],[1,1,1],ve)}yield;let V=a.mountain>.5;for(let O=Math.max(s,n.s-hn*.95)+m()*3;O<Math.min(r,n.s+hn*.95);O+=m.range(4,8)){let k=Math.abs(O-n.s)>vn-4?17:4;for(let z of[-1,1]){let W=z*(E+m.range(k,50)),ce=m();si(e,l(O,W,-.3,m()*6,!1),V?ce<.5?"maple":ce<.8?"cedar":"ginkgo":ce<.65?"pine":"broad",m,m.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,l,c,u){let h=g=>Dt(g).snow;if(!(h(n)<.3&&h(s)<.3)){for(let g of[-1,1]){for(let m=n+t()*20;m<s;m+=t.range(22,40)){if(h(m)<.6||t()<.5)continue;let d=g*t.range(18,90);Cs(e,o(m,d,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Rs),litP:.62,fence:0,snow:!0});for(let _=0;_<2+t()*3;_++)si(e,o(m+t.range(-9,9),d+g*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let m=n+t()*5;m<s;m+=t.range(3,7))h(m)<.5||(t()<.32&&si(e,o(m,g*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&si(e,o(m,g*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let g=Math.ceil(n/36)*36;g<s;g+=36){if(h(g)<.55)continue;let m=c(g);{let d=r(g,-(m+.95),l(g)+1.3),_=r(g+18,m+.95,l(g+18)+1.3);d.groundY=l(g),_.groundY=l(g+18),bd(e,d,1),bd(e,_,-1)}}}}*placeMountain(e,t,n,s,r,o,l,c,u){let h=g=>Dt(g).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let g of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(4.5,8.5)){if(h(m)<.45||es(m,hn+6))continue;let d=c(m),_=t();if(g>0){let E=_<.5?"maple":_<.72?"ginkgo":"cedar";si(e,o(m,d+t.range(17,70),-.25,t()*6,!1),E,t,t.range(.9,1.3))}else{let E=_<.55?"maple":_<.8?"cedar":"ginkgo";si(e,o(m,-(d+t.range(3.5,34)),-.25,t()*6,!1),E,t,t.range(.95,1.35))}}yield}for(let g=n+t()*4;g<s;g+=t.range(3,6)){if(h(g)<.5)continue;let m=t()<.7,d=-(c(g)+(m?t.range(108,205):t.range(36,100)));si(e,o(g,d,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new Qe);for(let g=Math.ceil(n/10)*10;g<s;g+=10){if(h(g)<.5||es(g,hn+4))continue;let m=c(g),d=r(g,-(m+.95),l(g));jm(e,d)}for(let g=Math.ceil(n/14)*14;g<s;g+=14){if(h(g)<.6)continue;let m=this.path.curv(g);if(Math.abs(m)<1/230)continue;let d=c(g);m>0?tr(e,r(g,d+.42,l(g)),"chev_l",-1,1.25,.58):tr(e,r(g,-(d+1.15),l(g)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,l){let c=this.path,u={},h=Ot(Math.floor(Pn(t,1789)*4294967295)),g=ig(),m=Math.floor((n+Ht/2)/600)*600+300,d=Math.floor((n+Ht/2)/700)*700+120,_=Math.floor((n+Ht/2)/380)*380+190,E=Pn(Math.round(_),5)<.5?-1:1;for(let a of[-1,1]){e.leaf.setM(jg);for(let x=n+h()*g;x<s;x+=g*h.range(.75,1.25)){if(sn(x)!=="country"||Is(x,10)||ri(x,31)||a<0&&(Math.abs(x-m)<2.9||x>d-1.3&&x<d+2.7)||a===E&&Math.abs(x-_)<1.6)continue;c.at(x,u);let p=l(x),f=a*(p+.95+(h()-.5)*.36),v=u.y+Js(x,f,u.y,p),M=(h()-.5)*.8,w=Math.cos(M)*a,y=Math.sin(M)*a;Ed(e,u.x+u.rx*f-r,v,u.z+u.rz*f-o,u.rx*w+u.fx*y,u.rz*w+u.fz*y,h,h.range(.85,1.15))}yield}let b=Ot(Math.floor(Pn(t,2417)*4294967295));for(let a of[-1,1]){e.leaf.setM(jg);for(let x=n+b()*8;x<s;x+=b.range(8,14)){if(Dt(x).sakura<.6||ri(x,31))continue;let p=2+Math.floor(b()*4),f=a*(l(x)+2.85+b()*.5);c.at(x,u);let v=u.y+Js(x,f,u.y,l(x));for(let M=0;M<p;M++){let w=M*.5+b()*.2,y=f+a*(b()-.5)*.35,S=(b()-.5)*1.2,T=Math.cos(S)*a,A=Math.sin(S)*a;Ed(e,u.x+u.fx*w+u.rx*y-r,v,u.z+u.fz*w+u.rz*y-o,u.rx*T+u.fx*A,u.rz*T+u.fz*A,b,b.range(.42,.58))}}}}*placeVerge(e,t,n,s,r,o,l,c,u,h){yield*this.placeBanks(e,c,n,s,u,h,l);for(let g of[-1,1]){for(let m=n+t()*1.2;m<s;m+=t.range(.55,1.5)){if(Is(m,10)||ri(m,31)||es(m,hn+4))continue;let d=sn(m),_=l(m),E,b,a=.22,x=1;if(d==="country")E=_+t.range(2.05,2.8),b=.25,a=.35;else if(d==="sakura")E=_+2.68+t()*1.3,b=.55,a=.3;else if(d==="coast"){if(g<0)continue;E=_+.95+t()*1.7,b=.75,a=.18}else{if(d==="snow")continue;if(d==="mountain")E=g<0?_+1+t()*.35:_+.25+t()*.2,b=g<0?.55:.18,a=.12,x=.85;else{if(Od(m,5))continue;E=_+3.02+t()*.1,b=.1,a=.08,x=.65}}if(t()>b)continue;let p=g*E;Sd(e,r(m,p,o(m,p),t()*6.28,!1),t,t()<a?"flowers":"grass",x*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new Qe);let l=Math.max(1,Math.round((n-t)/2)),c=Me.rail,u=[.62,.64,.66],h=[.74,.76,.79],g=[.95,.55,.16];for(let m=0;m<l;m++){let d=t+(n-t)*m/l,_=t+(n-t)*(m+1)/l,E=-(o(d)+.95),b=-(o(_)+.95),a=r(d),x=r(_);for(let f=0;f<Ud.length-1;f++){let[v,M]=Ud[f],[w,y]=Ud[f+1];e.color.quad(s(d,E+M,a+v),s(_,b+M,x+v),s(_,b+y,x+w),s(d,E+y,a+w),c)}e.color.quad(s(_,b+.05,x+.5),s(d,E+.05,a+.5),s(d,E+.05,a+.84),s(_,b+.05,x+.84),u),e.color.noShadow=!0;let p=s(d,E-.04,a);if(e.color.cyl(p[0],a,p[2],.055,.055,.8,6,h,!1),Math.round(d/2)%2===0){let f=s(d,E+.035,a+.64),v=s(d+.09,E+.035,a+.64);e.color.quad(v,f,[f[0],f[1]+.07,f[2]],[v[0],v[1]+.07,v[2]],g)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,l,c,u,h,g,m,d){for(let b of[-1,1]){let a=n+t()*2;for(;a<s-2;){{let L=Dt(a);if(L.city<.62||L.mountain>.1){a+=4;continue}}{let L=Ks(a+6);if(L&&a<L.s+8.5&&a+14>L.s-8.5){a=Math.max(a+1,L.s+8.5);continue}}let x=2*Math.round(a/300),p=x*150;if(a>p-Qg(x)&&a<p+Bd(x)){a=p+Bd(x)+.05;continue}let f=c(a),v=u(a)||3,M=f+v+.15,w=t(),y=a<420||w<.84?"machiya":w<.89?"shop":w<.93?"apt":w<.96?"konbini":"house",S=y==="shop"?t.range(5,9):y==="machiya"?t.range(6,9.5):y==="apt"?t.range(10,16):y==="house"?t.range(7,9.5):t.range(12,14);if(a+S>s){if(s-a<5||y==="konbini")break;S=s-a-.2}{let L=a<p?x:x+2,D=L*150-Qg(L);if(a+S>D-.1){if(D-.1-a<4){a=L*150+Bd(L)+.05;continue}S=D-.1-a}}let T=a+S/2,A=l(T),R=t.pick(Rs),C=.42,P=y==="machiya"&&t()<.6;{let L=r(T,b*M,A+.15),D={type:y,w:S,d:y==="apt"?t.range(10,14):t.range(8,12),floors:y==="shop"?t.int(2,4):y==="machiya"?t()<.7?2:3:y==="apt"?t.int(4,9):2,tint:P?pd[Math.floor(t()*pd.length)]:R,litP:C,plaster:P,fence:y==="house"&&t()<.5?1.2:0};if(Cs(e,L,t,D),y!=="house"&&t()<.28&&yd(e,r(T+(t()-.5)*(S-1.2),b*(M-.42),A+.15),t),(y==="shop"||y==="konbini"||y==="machiya")&&t()<.3)for(let B=0;B<1+t()*3;B++)Km(e,r(T-S/2+.8+B*.55,b*(M-.75),A+.15,Math.PI/2+.1),t);if(y==="house"&&t()<.6)for(let B=0;B<2+t()*3;B++)_d(e,r(T+1+B*.5,b*(M-.3),A+.15),t);if(t()<.03)for(let B=0;B<3;B++)Jm(e,r(T+B*.9,b*(f+.35),A))}a+=S+t.range(.05,.5),yield}for(let x=n+t()*10;x<s-8;x+=t.range(14,26)){if(Dt(x).city<.7||Dt(x).mountain>.1||t()<.3||Is(x,18)||Od(x,15))continue;let p=c(x),f=r(x,b*(p+3.2+t.range(14,20)),l(x)+.1);Cs(e,f,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Rs),litP:.4})}if(Dt(n+30).city>.7&&Dt(n+30).mountain<.1&&t()<.65){let x=n+t()*Ht;if(Is(x,24)||Od(x,20))continue;let p=r(x,b*t.range(55,150),l(x));Cs(e,p,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Rs),litP:.45})}}let _=Math.ceil(n/150),E=Math.floor((s-.01)/150);for(let b=_;b<=E;b++){let a=b*150;if(!jM(b)||sn(a)!=="city"||Dt(a).mountain>.1)continue;let x=c(a);yield*this.intersection(e,t,a,b,r,l,c,u,g,m,d),sh(b)&&(tr(e,r(a-1,-(x+.4),l(a)+.15),"sign_blue",1),tr(e,r(a-6,-(x+.4),l(a)+.15),"sign_stop",1,2.1,.75),Md(e,r(a+7,x+.4,l(a)+.15),-1),b%8===4&&tr(e,r(a+20,-(x+.4),l(a)+.15),"sign_speed",1))}}*placeSakura(e,t,n,s,r,o,l,c,u){for(let m of[-1,1]){for(let d=n+t()*4;d<s;d+=t.range(7.5,10)){if(Dt(d).sakura<.45||ri(d,30))continue;let _=c(d);si(e,o(d,m*(_+3.7),0,Di.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),t()<.45&&si(e,o(d+3,m*(_+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let d=n+(m>0?0:12);d<s;d+=24){if(sn(d)!=="sakura"||ri(d,30))continue;let _=c(d);hl(e,r(d,m*(_+2.25),l(d)+.15)),ds(d,48)<24&&mg(e,r(d+6,m*(_+3),u(d+6,m*(_+3))))}for(let d=n+t()*15;d<s;d+=t.range(14,24)){if(sn(d)!=="sakura"||t()<.35||ri(d,45))continue;let _=c(d);Cs(e,o(d,m*(_+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Rs),litP:.45,fence:t()<.6?1.4:0})}}let g=Math.floor((n+Ht/2)/480)*480+240;g>=n&&g<s&&sn(g)==="sakura"&&!ri(g,60)&&wd(e,r(g,0,l(g),0,!1),c(g)+1.6,6.4)}coastWall(e){return Dt(e).coast>=.7&&!es(e,hn+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=Ot(Math.floor(Pn(e,5501)*4294967295)),s=e*Ht,r=s+Ht;for(let o=s+1+n()*12;o<r-3;o+=n.range(12,26)){let l=n.range(1.25,1.5),c=n.range(4.5,11),u=n()<.4?3:2,h=Math.min(o+c,r-.5);!this.coastWall(o)||!this.coastWall(h)||t.push({sa:o,sb:h,L:l,rows:u,dOut:(.8+(u-1)*1.45+.95)*l})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,s,r,o,l,c,u,h){let g=this.path,m={},d=this.coastHeaps(n),_=Ot(Math.floor(Pn(n,5507)*4294967295));for(let f of d){let v=f.L;for(let y=0;y<f.rows;y++){let S=.8*v+y*1.45*v,T=(y===0?.28:y===1?0:-.3)*v;for(let A=f.sa+_()*.7*v;A<f.sb;A+=1.5*v*_.range(.88,1.12)){let R=c(A),C=h(A,-(R+sl+S+(_()-.5)*.45*v),0);if(Ad(e,C[0],Ki+T+(_()-.5)*.3*v,C[2],_,v*_.range(.92,1.08),Ki-.7,y===0?.8:.45),y===0&&f.rows>1&&_()<.4){let P=h(A+.7*v,-(R+sl+S+.72*v),0);Ad(e,P[0],Ki+1.05*v,P[2],_,v*_.range(.9,1),Ki-.7)}}}let M=Math.max(3,Math.round(ih.n*(f.sb-f.sa+2)/7)),w=ds(s,Mi)-s;for(let y=0;y<M;y++){let S=f.sa+(f.sb-f.sa)*(y+.5)/M+(_()-.5)*1.4,T=c(S);g.at(S,m);let A=h(S,-(T+sl+f.dOut*(.45+.55*_())-.3),Ki+.35);u.puffs.push(A[0],A[1],A[2],-m.rx,-m.rz,f.dOut,_(),S+w)}}d.length&&(yield);let E=[...this.coastHeaps(n-1),...d,...this.coastHeaps(n+1)],b=ds(s,Mi),a=[];for(let f=0;f<=10;f++)a.push(s+f*6);for(let f of E)for(let v of[f.sa-3.2,f.sa-.4,f.sb+.4,f.sb+3.2])v>s+.5&&v<r-.5&&a.push(v);a.sort((f,v)=>f-v);for(let f=0;f<a.length;f++){let v=a[f];if(f>0&&v-a[f-1]<.6)continue;if(!this.coastWall(v)){if(u.rows.length)break;continue}let M=1;for(let S=1;S<=3;S++)if(!this.coastWall(v-2*S)||!this.coastWall(v+2*S)){M=(S-1)/3;break}let w=c(v),y=new Float32Array(Fd.length*7);Fd.forEach((S,T)=>{let A=h(v,-(w+sl+S),Ki+.03),R=0;for(let C of E)R=Math.max(R,(1-wt(.4,3.2,Math.max(C.sa-v,v-C.sb,0)))*(1-wt(.2,3.4,S-C.dOut)));y.set([A[0],A[1],A[2],b+(v-s),S,R,M],T*7)}),u.rows.push(y)}u.rows.length&&(yield);for(let f=s+t()*6;f<r;f+=t.range(5,9)){if(sn(f)!=="coast"||es(f,hn+6))continue;let v=c(f),M=t();M<.58&&si(e,l(f,v+t.range(4.5,30),0,t()*6,!1),M<.48?"broad":"pine",t,t.range(1,1.4))}for(let f=s+4;f<r;)f+=t.range(18,30);for(let f=s+12;f<r;f+=48){if(sn(f)!=="coast"||es(f,hn+4))continue;let v=c(f);xd(e,l(f,v+1),t)}let x=Ot(Math.floor(Pn(n,5519)*4294967295));for(let f=s+x()*6;f<r;f+=x.range(6,14)){if(Dt(f).coast<.6||es(f,hn+6))continue;let v=1+Math.floor(x()*2.4);for(let M=0;M<v;M++){let w=f+M*x.range(.9,1.6),y=c(w)+x.range(1.25,2.4),S=x()*6.28,T=x.range(.85,1.25),A=w-6-Math.round((w-6)/xl)*xl,R=w-12-Math.round((w-12)/48)*48;Math.abs(A)<1.4||Math.abs(R)<1.2||tg(e,l(w,y,0,S,!1),x,T)}}if(sn(s+30)==="coast"&&t()<.5){let f=s+t()*Ht,v=c(f);es(f,hn+25)||Cs(e,l(f,v+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(Rs),litP:.5,fence:0})}if(sn(s+30)==="coast"&&t()<.55){let f=s+t()*Ht;_g(e,o(f,-(c(f)+t.range(45,220)),Ki-.25,t()*6,!1),t)}let p=Math.floor((s+Ht/2)/1500)*1500+700;p>=s&&p<r&&sn(p)==="coast"&&!es(p,hn*1.6)&&yg(e,o(p,-(c(p)+75),Ki-1,0,!1))}*placeCountry(e,t,n,s,r,o,l,c,u){for(let _ of[-1,1]){yield;for(let E=n+t()*20;E<s;E+=t.range(20,40)){if(sn(E)!=="country"||t()<.55||Is(E,16)||ri(E,48))continue;let b=_*t.range(16,95),a=o(E,b);Cs(e,a,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Rs),litP:.5,fence:0});for(let x=0;x<2+t()*3;x++){let p=b+_*t.range(6,14),f=E+t.range(-8,8);si(e,o(f,p,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let E=n+t()*8;E<s;E+=t.range(5,9)){if(sn(E)!=="country"||Is(E,7)||ri(E,36))continue;let b=_*t.range(140,210);si(e,o(E,b,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Is(E+2,8)&&!ri(E+2,34)&&si(e,o(E+2,_*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Ht/2)/600)*600+300;if(h>=n&&h<s&&sn(h)==="country"&&!ri(h,40)){let _=c(h);gg(e,r(h,-(_+1.6),l(h)-.08),t)}let g=Math.floor((n+Ht/2)/700)*700+120;if(g>=n&&g<s&&sn(g)==="country"&&!ri(g,40)){let _=c(g);yd(e,r(g,-(_+.95),l(g)-.08),t),xd(e,r(g+2,-(_+.8),l(g)-.08),t)}let m=Math.floor((n+Ht/2)/900)*900+450;if(m>=n&&m<s&&sn(m)==="country"&&!ri(m,40)){let _=c(m);bg(e,o(m,_+5),t)}let d=Math.floor((n+Ht/2)/380)*380+190;if(d>=n&&d<s&&sn(d)==="country"&&!ri(d,40)&&!Is(d,30)){let _=c(d),E=(Pn(Math.round(d),5)<.5?-1:1)*(_+2.75);dg(e,o(d,E,0))}for(let _=n;_<s;_+=30){if(sn(_)!=="country")continue;let E=this.path.curv(_);if(Math.abs(E)>1/450&&t()<.5){let b=E>0?-1:1,a=c(_);Md(e,o(_,b*(a+.75)),b>0?-1:1)}}}};var Ho={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function e1(i){let e=i.get("weather"),t={mode:Ho[e]?e:"auto",kind:Ho[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return Ho[e]&&(t.ov=Ho[e][0],t.rain=Ho[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=Ho[t.kind];t.ov+=Zt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=Zt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var Ni={uHeadPos:{value:new H},uHeadDir:{value:new H(0,0,1)},uHeadI:{value:0},uLampW:{value:[new pt(0,-1e3,0,0),new pt(0,-1e3,0,0)]},uLampCol:{value:new xe(1,.8,.52)}},oh=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function t1(){let e=new H(42,22,42),t=new Qt(1,1),n=new as;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new wn(s,4)),n.instanceCount=2400;let r=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uAmt:{value:0},uBox:{value:e},uCol:{value:new xe(1,1,1)},...Ni},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${oh}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new ut(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,c,u,h){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function n1(){let e=new H(46,24,46),t=new Qt(1,1);t.translate(0,.5,0);let n=new as;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new wn(s,4)),n.instanceCount=2600;let r=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uRain:{value:0},uBox:{value:e},uCol:{value:new xe(.8,.85,.95)},...Ni},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${oh}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new ut(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,c,u,h){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var oi=64,Hd=[2.2,1.3,2.6],QM=[-2.4,.35,-1.6];function i1(){let i=new Float32Array(oi*3),e=new Float32Array(oi*3),t=new Float32Array(oi*4),n=new Float32Array(oi),s=new Uint8Array(oi),r=new Float32Array(oi);for(let p=0;p<oi;p++)t[p*4]=t[p*4+1]=1;let o=new Qt(1,1),l=new as;l.index=o.index,l.setAttribute("position",o.attributes.position),l.setAttribute("uv",o.attributes.uv),l.instanceCount=0;let c=new Float32Array(oi*4),u=new Float32Array(oi*4),h={uP:{value:c},uC:{value:u},uNoiseTex:ze.uNoiseTex,uAmb:{value:new xe},uSun:{value:new xe},uTail:{value:new pt},uCam:{value:new H},...Ni},g=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${oi}], uC[${oi}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${oh}
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
      }`}),m=new ut(l,g);m.frustumCulled=!1,m.renderOrder=4,m.visible=!1;let d=0,_=0,E=0,b=0,a=!1;function x(p,f,v,M,w,y,S,T,A,R,C){let P=d;d=(d+1)%oi,i[P*3]=f,i[P*3+1]=v,i[P*3+2]=M,e[P*3]=w,e[P*3+1]=y,e[P*3+2]=S,t[P*4]=0,t[P*4+1]=T,t[P*4+2]=A,t[P*4+3]=R,n[P]=C,s[P]=p,r[P]=Math.random()}return{mesh:m,update(p,f,v,M,w,y,S,T,A,R,C){if(!C){if(a){for(let $=0;$<oi;$++)t[$*4]=t[$*4+1];a=!1}m.visible=!1;return}let P=f.position,L=f.rotation.y,D=Math.cos(L),B=Math.sin(L),V=B*v,O=D*v,k=Math.min(1,Math.max(0,(v-2)/14)),z=w>.3?2:0,W=z?w:M;for(_+=24*W*k*p;_>=1;){_-=1;let $=(b^=1)?1:-1,J=$*.67,le=-1.28-Math.random()*.2,Ce=Math.random(),Se=Math.random(),ke=1.6+1.6*Ce,we=z?.5+.7*Se:.9+1*Se,Je=$*(.3+.6*Math.random());x(z,P.x+J*D+le*B,P.y+.12,P.z-J*B+le*D,V*.55-B*ke+Je*D,we,O*.55-D*ke-Je*B,z?.45+.3*Ce:.55+.35*Ce,.2+.1*Se,z?.7+.35*Se:.8+.4*Se,.5*(.5+.5*k)*Math.min(1,W*1.5))}for(E+=(5+4*k)*y*p;E>=1;){E-=1;let $=Math.random();x(1,P.x-.42*D-1.78*B,P.y+.26,P.z+.42*B-1.78*D,V*.5-B*.8,.25+.2*$,O*.5-D*.8,1.3+.6*$,.14,.8+.4*Math.random(),.32*Math.min(1,y*1.5))}let ce=0,Ne=Math.exp(-Hd[0]*p),Oe=Math.exp(-Hd[1]*p),Ee=Math.exp(-Hd[2]*p);for(let $=0;$<oi;$++){let J=$*4;if(t[J]>=t[J+1])continue;let le=t[J]+=p,Ce=t[J+1];if(le>=Ce)continue;let Se=s[$],ke=Se===0?Ne:Se===1?Oe:Ee,we=$*3,Je=i[we]-R.x,qe=i[we+1]-R.y,Fe=i[we+2]-R.z;if(Je*Je+qe*qe+Fe*Fe<20.25){t[J]=Ce;continue}e[we]*=ke,e[we+1]=e[we+1]*ke+QM[Se]*p,e[we+2]*=ke,i[we]+=e[we]*p,i[we+1]=Math.max(P.y+.05,i[we+1]+e[we+1]*p),i[we+2]+=e[we+2]*p;let ne=le/Ce,be=ce*4;c[be]=i[we],c[be+1]=i[we+1],c[be+2]=i[we+2],c[be+3]=t[J+2]+(t[J+3]-t[J+2])*Math.sqrt(ne),u[be]=n[$]*Math.min(1,ne*6)*(1-ne)*(1-ne),u[be+1]=Se,u[be+2]=r[$],ce++}a=ce>0,m.visible=a,l.instanceCount=ce,a&&(h.uAmb.value.copy(S),h.uSun.value.copy(T),h.uTail.value.copy(A),h.uCam.value.copy(R))},shift(p,f){for(let v=0;v<oi;v++)i[v*3]-=p,i[v*3+2]-=f}}}var Nr=24,eS=55,tS=12;function s1(){let i=[],e=new Float32Array(Nr*2*2),t=new Float32Array(Nr*2*3);for(let u=0;u<Nr;u++)if(e.set([u,-1,u,1],u*4),u<Nr-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new vt;n.setAttribute("position",new Mt(t,3)),n.setAttribute("aI",new Mt(e,2)),n.setIndex(i);let s=new Float32Array(Nr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new xe},uTime:{value:0},uNoiseTex:ze.uNoiseTex},o=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${Nr}]; uniform float uW; varying vec3 vW; varying float vSide;
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
      }`}),l=new ut(n,o);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let c={};return{mesh:l,update(u,h,g,m,d,_,E,b){if(l.visible=_>.01,!!l.visible){for(let a=0;a<Nr;a++)u.at(h+eS+a*tS,c),s[a*4]=c.x-g,s[a*4+1]=c.y,s[a*4+2]=c.z-m,s[a*4+3]=c.h;r.uW.value=d*.85,r.uHot.value=_,r.uTime.value=E,r.uSky.value.copy(b)}}}}var Vo=1.6;function r1(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,l=t?16:14,c=[4,Math.round(s*.4),Math.round(s*.65),s].filter((C,P,L)=>!P||C>L[P-1]),u=[s,Math.round((s+r)/2),r],h=(C,P)=>{let L=new as;return L.setAttribute("position",new Ze(C,3)),L.setIndex(P),L},g=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],m=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],d=new Float32Array(Qs*4),_=new Float32Array(Qs),E={uG:{value:d},uGM:{value:_},uGP:{value:new pt(0,1/Vo,3.1,0)},uGQ:{value:new pt(0,1.05,3,0)},uRingD:{value:new pt(s,r,0,0)}},b=[],a=(C,P,L)=>{let D={uRing:{value:new pt(0,0,L?2*n:n,L)},uRingC:{value:new pt(0,0,0,0)}},B=h(...L?m:g);B.instanceCount=0;let V=new ut(B,wm(D,E));V.frustumCulled=!1,V.castShadow=!1,V.receiveShadow=!1,V.visible=!1,b.push({mesh:V,u:D,dA:C,dB:P,size:L?2*n:n,W:L?l:o,last:P===s||P===r})};for(let C=0;C<c.length-1;C++)a(c[C],c[C+1],0);for(let C=0;C<u.length-1;C++)a(u[C],u[C+1],1);let x=new Int32Array(64).fill(-2147483648),p=new Float32Array(64),f=new Uint8Array(64),v=C=>{let P=C&63;if(x[P]!==C){x[P]=C;let L=C*Vo,D=Ks(L),B=Pi(L),V=Dt(L).country,O=Math.min(1,Math.max(0,(V-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(L-D.s)-13)/7)):1)*(B?Math.min(1,Math.max(0,(Math.abs(L-B.s)-38)/10)):1);p[P]=O>0?3+4*Math.round(O*15):0,f[P]=V>0?1:0}return P},M=C=>p[v(C)],w=C=>f[v(C)],y={},S=NaN,T=NaN,A=NaN,R=0;return{meshes:b.map(C=>C.mesh),hide(){for(let C=0;C<b.length;C++)b[C].mesh.visible=!1},warm(C){for(let P of b)P.mesh.visible=C,C&&(P.u.uRing.value.y=1,P.u.uRingC.value.set(1,1,P.W,0),P.mesh.geometry.instanceCount=2)},update(C,P,L,D,B,V,O){let k=Math.floor((P-3)/Vo);if(!w(k)&&!w(k+Qs-1))R=0;else{if(k!==S||D!==T||B!==A){S=k,T=D,A=B,R=0;for(let z=0;z<Qs;z++)C.at((k+z)*Vo,y),d[z*4]=y.x-D,d[z*4+1]=y.y,d[z*4+2]=y.z-B,d[z*4+3]=y.h,R|=_[z]=M(k+z)}E.uGP.value.set(k*Vo,1/Vo,V,P),E.uGQ.value.set(L,O,3,0)}for(let z=0;z<b.length;z++){let W=b[z];if(!R){W.mesh.visible=!1;continue}let ce=Math.floor((P+W.dA)/W.size),Ne=Math.floor((P+W.dB)/W.size)+(W.last?1:0),Oe=O*W.dB+3,Ee=V+2.6,$=Math.min(W.W,Math.max(0,Oe-(Ee+L))),J=Math.min(W.W,Math.max(0,Oe-(Ee-L))),le=$>0?Math.ceil($/W.size)+1:0,Ce=J>0?Math.ceil(J/W.size)+1:0;W.u.uRing.value.x=ce,W.u.uRing.value.y=Ne-ce,W.u.uRingC.value.set(le,Ce,W.W,0),W.mesh.geometry.instanceCount=(Ne-ce)*(le+Ce),W.mesh.visible=W.mesh.geometry.instanceCount>0}}}}var Go=72;function nS(){let i=[],e=[],t=(s,r,o,l,c,u)=>{i.push(...s,...r,...o),e.push(l,c,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new vt;return n.setAttribute("position",new Ze(i,3)),n.setAttribute("aWing",new Ze(e,1)),n}function o1(){let i=nS(),e=new wn(new Float32Array(Go*3),3),t=new wn(new Float32Array(Go*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new ht({side:yn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ie.fog},uFogD:{value:.002},uCam:{value:new H}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new qi(i,n,Go);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},l=new Qe,c=new mn,u=new Yn(0,0,0,"YXZ"),h=new H,g=new H,m=()=>r.reduce((E,b)=>E+b.birds.length,0);function d(E,b,a,x){let p=E==="small"?6+Math.floor(Math.random()*7):E==="crow"?3+Math.floor(Math.random()*5):4;if(m()+p>Go)return;let f=45+Math.random()*85,v=(Math.random()-.5)*120,M=Math.random()<.5?1:-1,w=new H().copy(b).addScaledVector(a,f).addScaledVector(x,v-M*75);w.y=b.y+(E==="crow"?18+Math.random()*24:10+Math.random()*18);let y=E==="small"?11+Math.random()*4:8+Math.random()*3,S=new H().copy(x).multiplyScalar(M*y).addScaledVector(a,(Math.random()-.3)*y*.6),T=E==="small"?.8:1.45,A=Array.from({length:p},(R,C)=>({off:new H((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:E==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:E,c:w,vel:S,birds:A,size:T,life:60})}function _(E,b,a,x){if(r.some(v=>v.kind==="gull")||m()+4>Go)return;let p=new H().copy(E).addScaledVector(b,70).addScaledVector(a,-x*45);p.y=E.y+18;let f=Array.from({length:4},(v,M)=>({off:new H,ph:Math.random()*6.28,fq:5.5,w:M/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:p,vel:new H,birds:f,size:1.25,life:1e9})}return{mesh:s,update(E,b,a,x,p,f,v,M,w){n.uniforms.uTime.value=b,n.uniforms.uCam.value.copy(a);let y=v>.35&&M<.3,S=ie.warm>.25&&ie.sunEl<.6&&v>.2;y&&(o.small-=E)<0&&(o.small=22+Math.random()*35,f.coast<.6&&d("small",a,x,p)),(S||y&&f.city+f.country>.6&&Math.random()<4e-4)&&(o.crow-=E)<0&&(o.crow=S?14+Math.random()*18:60,d("crow",a,x,p)),f.coast>.6&&y&&_(a,x,p,1);let T=[.1+.08*v,.11+.09*v,.15+.1*v],A=0;for(let R=r.length-1;R>=0;R--){let C=r[R];if(C.kind==="gull"?(C.c.lerp(h.copy(w).addScaledVector(x,60).addScaledVector(p,-42).setY(w.y+16),Math.min(1,E*.25)),(f.coast<.4||!y)&&(C.life=Math.min(C.life,8),C.c.y+=E*6)):C.c.addScaledVector(C.vel,E),C.life-=E,C.life<0||C.kind!=="gull"&&C.c.distanceTo(a)>300){r.splice(R,1);continue}for(let P of C.birds){if(A>=Go)break;let L,D,B,V;C.kind==="gull"?(P.w+=E*(14/P.r),L=C.c.x+Math.cos(P.w)*P.r,B=C.c.z+Math.sin(P.w)*P.r,D=C.c.y+P.h+Math.sin(b*.4+P.ph)*2,V=Math.atan2(-Math.sin(P.w),Math.cos(P.w))):(L=C.c.x+P.off.x+Math.sin(b*.7+P.ph)*1.2,D=C.c.y+P.off.y+Math.sin(b*1.1+P.ph)*.6,B=C.c.z+P.off.z,V=Math.atan2(C.vel.x,C.vel.z)),u.set(0,V,Math.sin(b+P.ph)*.15),c.setFromEuler(u),g.setScalar(C.size),l.compose(h.set(L,D,B),c,g),s.setMatrixAt(A,l);let O=C.kind==="gull"?[.92*(.5+.5*v),.93*(.5+.5*v),.95*(.5+.5*v)]:C.kind==="crow"?[.05,.05,.07]:T;e.setXYZ(A,O[0],O[1],O[2]),t.setXY(A,P.fq,P.ph),A++}}s.count=A,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(E){n.uniforms.uFogD.value=E},shift(E,b){for(let a of r)a.c.x-=E,a.c.z-=b}}}var _l=new H;function Ui(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),c=Math.PI/4;_l.copy(e),_l[n]=0,_l.normalize();let u=.5*o/(o+l),h=1-_l.angleTo(i)/c;return Math.sign(_l[t])===1?h*u:l/(o+l)+u+u*(1-h)}var Bn=class i extends Kt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new H,u=new H,h=new H(e,t,n).divideScalar(2).subScalar(r),g=this.attributes.position.array,m=this.attributes.normal.array,d=this.attributes.uv.array,_=g.length/6,E=new H,b=.5/o;for(let a=0,x=0;a<g.length;a+=3,x+=2)switch(c.fromArray(g,a),u.copy(c),u.x-=Math.sign(u.x)*b,u.y-=Math.sign(u.y)*b,u.z-=Math.sign(u.z)*b,u.normalize(),g[a+0]=h.x*Math.sign(c.x)+u.x*r,g[a+1]=h.y*Math.sign(c.y)+u.y*r,g[a+2]=h.z*Math.sign(c.z)+u.z*r,m[a+0]=u.x,m[a+1]=u.y,m[a+2]=u.z,Math.floor(a/_)){case 0:E.set(1,0,0),d[x+0]=Ui(E,u,"z","y",r,n),d[x+1]=1-Ui(E,u,"y","z",r,t);break;case 1:E.set(-1,0,0),d[x+0]=1-Ui(E,u,"z","y",r,n),d[x+1]=1-Ui(E,u,"y","z",r,t);break;case 2:E.set(0,1,0),d[x+0]=1-Ui(E,u,"x","z",r,e),d[x+1]=Ui(E,u,"z","x",r,n);break;case 3:E.set(0,-1,0),d[x+0]=1-Ui(E,u,"x","z",r,e),d[x+1]=1-Ui(E,u,"z","x",r,n);break;case 4:E.set(0,0,1),d[x+0]=1-Ui(E,u,"x","y",r,e),d[x+1]=1-Ui(E,u,"y","x",r,t);break;case 5:E.set(0,0,-1),d[x+0]=Ui(E,u,"x","y",r,e),d[x+1]=1-Ui(E,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function ah(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,c=new vt,u=0;for(let h=0;h<i.length;++h){let g=i[h],m=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in g.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(g.attributes[d]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in g.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(g.morphAttributes[d])}if(e){let d;if(t)d=g.index.count;else if(g.attributes.position!==void 0)d=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,d,h),u+=d}}if(t){let h=0,g=[];for(let m=0;m<i.length;++m){let d=i[m].index;for(let _=0;_<d.count;++_)g.push(d.getX(_)+h);h+=i[m].attributes.position.count}c.setIndex(g)}for(let h in r){let g=a1(r[h]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,g)}for(let h in o){let g=o[h][0].length;if(g!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let m=0;m<g;++m){let d=[];for(let E=0;E<o[h].length;++E)d.push(o[h][E][m]);let _=a1(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}}return c}function a1(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new Mt(o,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let g=c/t;for(let m=0,d=h.count;m<d;m++)for(let _=0;_<t;_++){let E=h.getComponent(m,_);l.setComponent(m+g,_,E)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function iS(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new ti(i);return n.colorSpace=Gt,n}var Vd=4;function sS(){let t=document.createElement("canvas");t.width=128*Vd,t.height=128;let n=t.getContext("2d"),s=(o,l,c,u,h)=>{n.beginPath(),n.moveTo(o+h,l),n.arcTo(o+c,l,o+c,l+u,h),n.arcTo(o+c,l+u,o,l+u,h),n.arcTo(o,l+u,o,l,h),n.arcTo(o,l,o+c,l,h),n.closePath(),n.fill()};for(let o=0;o<Vd;o++){let l=o*128,c=n.createLinearGradient(0,0,0,128);c.addColorStop(0,"#9fbfe6"),c.addColorStop(.45,"#4a6690"),c.addColorStop(1,"#1d2638"),n.fillStyle=c,n.fillRect(l,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(l+14,84,30,50,9),s(l+84,84,30,50,9),n.fillRect(l+6,112,116,16),s(l+52,92,24,40,7)),o===2&&(s(l+62,66,44,70,12),n.fillRect(l+50,118,70,10)),o===3&&(s(l+70,78,40,60,11),n.fillRect(l+56,120,64,8)),n.save(),n.beginPath(),n.rect(l,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(l+40,0),n.lineTo(l+68,0),n.lineTo(l+20,128),n.lineTo(l-8,128),n.fill(),n.restore()}let r=new ti(t);return r.colorSpace=Gt,r}function l1(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/Vd)}return i}function c1(){let i=new nn,e=new nn,t=new nn;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new pt,new pt],s=new xe(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=ld(new un({color:"#ffffff",vertexColors:!0,gradientMap:ll}),.85,.06,"paint-l",r),l=(ne,be)=>Object.assign(new xe(ne),{gloss:be}),c=l("#9fd8c8",1),u=l("#eeece4",.6),h=l("#2a2c33",.35),g=l("#1b1c20",.04),m=l("#c8ccd2",.8),d=l("#d4d8de",1.3),_=(ne,be)=>{let j=ne.attributes.position.count,oe=new Float32Array(j*4);for(let ee=0;ee<j;ee++)oe.set([be.r,be.g,be.b,be.gloss],ee*4);return ne.setAttribute("color",new Ze(oe,4)),ne},E=ld(new un({color:"#ffffff",map:sS(),gradientMap:hi}),1.2,.08,"glass-l",r),b=new un({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:hi}),a=new un({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:hi}),x=new un({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:hi}),p=new un({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:hi}),f=new un({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:hi}),v=new gn({map:iS()}),M=new Map,w=[],y=!1,S=new Qe,T=new Yn,A=new mn,R=new H(1,1,1),C=(ne,be,j,oe,ee,he=0,F=0,ve=0)=>{let te=ne.index?ne.toNonIndexed():ne;if(be.isColor&&(_(te,be),be=o),T.set(he,F,ve),A.setFromEuler(T),S.compose(new H(j,oe,ee),A,R),te.applyMatrix4(S),y){w.push(te);return}M.has(be)||M.set(be,[]),M.get(be).push(te)},P=l("#16171b",0),L=l("#2b3134",.15),D=l("#b9bfc6",.9),B=l("#4d5258",.4),V=l("#9a1c22",.6),O=1.7,k=.745,z=.3,W=(ne,be,j)=>{let oe=Math.min(1,Math.max(0,(j-ne)/(be-ne)));return oe*oe*(3-2*oe)},ce=ne=>ne<.8?1.8:ne<1.22?1.8-.6*W(.8,1.22,ne):1.2-.1*((ne-1.22)/(O-1.22))**2,Ne=ne=>1-.085*W(1.15,1.8,ne),Oe=(ne,be)=>{let j=k-be,oe=z+be*.6,ee=ce(ne)-be*(ne<0?.4:1),he=Math.max(.05,.1-be*.5),F=Math.max(.06,(ne<.8?.17:.13)-be*.5),ve=[[0,oe],[(j-he)*.5,oe],[j-he,oe]];for(let N=1;N<4;N++){let I=-Math.PI/2+N/8*Math.PI;ve.push([j-he+he*Math.cos(I),oe+he+he*Math.sin(I)])}for(let N=0;N<=8;N++)ve.push([j,oe+he+N/8*(ee-F-oe-he)]);for(let N=1;N<5;N++){let I=N/10*Math.PI;ve.push([j-F+F*Math.cos(I),ee-F+F*Math.sin(I)])}ve.push([j-F,ee],[(j-F)*.5,ee],[0,ee]);let te=ve.map(([N,I])=>[N*Ne(I),I]);for(let N=ve.length-2;N>0;N--)te.push([-te[N][0],te[N][1]]);return te};{let ne=[];for(let G=0;G<=6;G++){let Y=G/6*Math.PI/2;ne.push([-O+.2*(1-Math.cos(Y)),.2*(1-Math.sin(Y))])}for(let G=-O+.2+.12;G<.78;G+=.13)ne.push([G,0]);for(let G=.8;G<1.225;G+=.06)ne.push([G,0]);for(let G of[1.3,1.39])ne.push([G,0]);for(let G=6;G>=0;G--){let Y=G/6*Math.PI/2;ne.push([O-.22*(1-Math.cos(Y)),.22*(1-Math.sin(Y))])}let oe=[],ee=[],he=ne.map(([G,Y])=>Oe(G,Y)),F=he[0].length;he.forEach((G,Y)=>G.forEach(([Q,ue])=>oe.push(Q,ue,ne[Y][0])));for(let G=0;G<he.length-1;G++)for(let Y=0;Y<F;Y++){let Q=G*F+Y,ue=G*F+(Y+1)%F,me=Q+F,ae=ue+F;ee.push(Q,ue,me,ue,ae,me)}for(let[G,Y]of[[0,-1],[he.length-1,1]]){let Q=oe.length/3,ue=he[G];oe.push(0,(ue[0][1]+ue[F/2|0][1])/2,ne[G][0]);for(let me=0;me<F;me++){let ae=G*F+me,de=G*F+(me+1)%F;Y<0?ee.push(Q,de,ae):ee.push(Q,ae,de)}}let ve=new vt;ve.setAttribute("position",new Ze(oe,3)),ve.setIndex(ee),ve.computeVertexNormals();{let G=ve.attributes.normal,Y=F*10+12;if(G.getX(Y)<0){for(let Q=0;Q<ee.length;Q+=3){let ue=ee[Q+1];ee[Q+1]=ee[Q+2],ee[Q+2]=ue}ve.setIndex(ee),ve.computeVertexNormals()}}ve.setAttribute("uv",new Ze(new Float32Array(oe.length/3*2),2));let te=ve.toNonIndexed(),N=te.attributes.position,I=new Float32Array(N.count*4);for(let G=0;G<N.count;G+=3){let Y=(N.getY(G)+N.getY(G+1)+N.getY(G+2))/3,Q=(N.getZ(G)+N.getZ(G+1)+N.getZ(G+2))/3,ue=Y>1.665&&Q<.84&&Q>-1.52?u:c;for(let me=0;me<3;me++)I.set([ue.r,ue.g,ue.b,ue.gloss],(G+me)*4)}te.setAttribute("color",new Ze(I,4)),C(te,o,0,0,0)}C(new Bn(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let Ee=(ne,be,j,oe,ee)=>{let he=new vt,F=[],ve=[],te=[],N=[];for(let I=0;I<=j;I++)for(let G=0;G<=be;G++){let Y=G/be,Q=I/j,ue=ne(Y,Q);F.push(ue[0]+ue[3]*.004,ue[1]+ue[4]*.004,ue[2]+ue[5]*.004),ve.push(ue[3],ue[4],ue[5]),te.push(Y,Q)}for(let I=0;I<j;I++)for(let G=0;G<be;G++){let Y=I*(be+1)+G,Q=Y+1,ue=Y+be+1,me=ue+1;N.push(Y,Q,me,Y,me,ue)}he.setAttribute("position",new Ze(F,3)),he.setAttribute("normal",new Ze(ve,3)),he.setAttribute("uv",new Ze(te,2)),he.setIndex(N);{let I=new H().fromArray(F,0),G=new H().fromArray(F,3),Y=new H().fromArray(F,(be+1)*3),Q=new H().fromArray(ve,0);if(G.sub(I).cross(Y.sub(I)).dot(Q)<0){for(let ue=0;ue<N.length;ue+=3){let me=N[ue+1];N[ue+1]=N[ue+2],N[ue+2]=me}he.setIndex(N)}}return l1(he,oe,ee)},$=ne=>{let j=k*(Ne(ne+.01)-Ne(ne-.01))/.02,oe=Math.hypot(1,j);return[1/oe,-j/oe]},J=ne=>{let be=.8,j=1.22;for(let oe=0;oe<24;oe++){let ee=(be+j)/2;ce(ee)>ne?be=ee:j=ee}return be};for(let ne of[-1,1]){let be=ne<0,j=(oe,ee,he)=>C(Ee((F,ve)=>{let te=1.21+ve*.39,N=ne>0?ee(te)+(oe(te)-ee(te))*F:oe(te)+(ee(te)-oe(te))*F,[I,G]=$(te);return[ne*k*Ne(te),te,N,ne*I,G,0]},1,6,he,!1),E,0,0,0);j(()=>.06,oe=>J(oe)-.07,2),j(()=>-.72,()=>-.08,3),j(()=>-1.42,()=>-.84,0),C(new Kt(.012,.41,.07),h,ne*.731,1.405,-.01,0,0,-ne*.07),C(new Kt(.014,.022,2.42),P,ne*.748,1.2,-.26);for(let[oe,ee]of[[.8,.64],[-.06,.42],[-.76,.64]])C(new Kt(.008,1.17-ee,.012),L,ne*.749,(ee+1.17)/2,oe);C(new Kt(.02,.028,.13),L,ne*.752,1.06,.06),C(new Kt(.02,.028,.13),L,ne*.752,1.06,-.2),C(new Kt(.01,.022,.62),L,ne*.749,1.155,-1.08);for(let oe of[1.12,-1.12])C(new vr(.345,18,0,Math.PI),P,ne*.749,.29,oe,0,ne*Math.PI/2,0),C(new Fa(.35,.024,5,18,Math.PI),h,ne*.752,.29,oe,0,ne*Math.PI/2,0);C(new Bn(.1,.12,.2,2,.04),c,ne*.83,1.24,1.02),C(new Kt(.07,.035,.05),h,ne*.775,1.2,1.03),C(new Bn(.16,.4,.05,3,.075),d,ne*.56,.95,-1.703),C(new Bn(.13,.37,.05,3,.062),b,ne*.56,.95,-1.716),C(new Bn(.036,.27,.02,2,.016),a,ne*.56,.95,-1.742),C(new Bn(.11,.06,.04,2,.02),p,ne*.56,.69,-1.707)}{let ne=new mo,be=.52,j=1.15,oe=1.66,ee=.07;ne.moveTo(-be+ee,j),ne.lineTo(be-ee,j),ne.absarc(be-ee,j+ee,ee,-Math.PI/2,0),ne.lineTo(be,oe-ee),ne.absarc(be-ee,oe-ee,ee,0,Math.PI/2),ne.lineTo(-be+ee,oe),ne.absarc(-be+ee,oe-ee,ee,Math.PI/2,Math.PI),ne.lineTo(-be,j+ee),ne.absarc(-be+ee,j+ee,ee,Math.PI,Math.PI*1.5);let he=new Na(ne,6),F=he.attributes.position,ve=he.attributes.uv;for(let te=0;te<F.count;te++){let N=F.getX(te),I=F.getY(te),G=(I-j)/(oe-j);ve.setXY(te,(N+be)/(2*be),G),F.setX(te,N*(1-.08*G))}C(l1(he,1),E,0,0,-O-.004,0,Math.PI,0)}C(new Bn(.36,.04,.03,2,.014),x,0,1.69,-1.712),C(Ee((ne,be)=>{let j=1.19-be*.36,oe=ce(j),ee=.56-.07*be,he=.005,F=(ce(j+he)-ce(j-he))/(2*he),ve=Math.hypot(1,F);return[(ne*2-1)*ee,oe,j,0,1/ve,-F/ve]},2,7,0,!1),E,0,0,0),C(new Bn(.46,.25,.012,2,.05),l("#86bdb0",.6),0,.73,-1.701),C(new Qt(.34,.17),v,0,.72,-1.709,0,Math.PI,0),C(new Bn(.25,.034,.03,2,.013),d,0,.9,-1.708);for(let ne of[-1,1])C(new Kt(.01,.56,.006),L,ne*.47,.85,-1.703);C(new Kt(.95,.01,.006),L,0,.565,-1.703),C(new Bn(1.5,.2,.26,3,.08),c,0,.44,-1.6),C(new Bn(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let ne of[-1,1])C(new Kt(.13,.035,.01),V,ne*.56,.44,-1.731);C(new Ri(.036,.036,.12,12),d,.46,.29,-1.68,Math.PI/2,0,0),C(new Ri(.024,.024,.124,10),P,.46,.29,-1.68,Math.PI/2,0,0);for(let ne of[-1,1])C(new Bn(.4,.26,.04,2,.06),h,ne*.42,.85,1.702),C(new Ri(.105,.105,.03,16),f,ne*.46,.85,1.72,Math.PI/2,0,0),C(new Ri(.055,.055,.03,12),f,ne*.3,.85,1.718,Math.PI/2,0,0),C(new Bn(.1,.06,.04,2,.015),p,ne*.52,.66,1.705),C(new Kt(.46,.014,.014),P,ne*.25,1.215,1.2,-.3,ne*.12,0);C(new Bn(.36,.12,.03,2,.03),P,0,.84,1.704);for(let ne=0;ne<3;ne++)C(new Kt(.32,.012,.012),L,0,.805+ne*.035,1.722);C(new Bn(1.52,.24,.22,2,.07),h,0,.44,1.62),C(new Kt(.7,.07,.02),P,0,.4,1.732),C(new Kt(.34,.17,.01),l("#f0cc38",.3),0,.62,1.733),C(new Kt(.3,.05,.004),l("#2f5a2f",.1),0,.6,1.739),y=!0;for(let[ne,be]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){C(new Ri(.29,.29,.19,24),g,ne,.29,be,0,0,Math.PI/2),C(new Ri(.195,.195,.194,20),D,ne,.29,be,0,0,Math.PI/2),C(new Ri(.155,.155,.198,16),B,ne,.29,be,0,0,Math.PI/2);for(let j=0;j<5;j++){let oe=j/5*Math.PI*2+.3;C(new Kt(.202,.03,.15),D,ne,.29-.085*Math.sin(oe),be+.085*Math.cos(oe),oe,0,0)}C(new Ri(.045,.045,.206,10),m,ne,.29,be,0,0,Math.PI/2)}y=!1;for(let[ne,be]of M){let j=new ut(ah(be),ne);j.castShadow=ne!==E&&ne!==v&&ne!==x&&ne!==f&&ne!==a,j.receiveShadow=!0,t.add(j)}{let ne=new ut(ah(w),o);ne.castShadow=ne.receiveShadow=!0,i.add(ne)}{let j=document.createElement("canvas");j.width=48,j.height=96;let oe=j.getContext("2d"),ee=oe.createImageData(48,96);for(let F=0;F<96;F++)for(let ve=0;ve<48;ve++){let te=Math.max(0,Math.abs((ve+.5)/48-.5)*2.1-.62),N=Math.max(0,Math.abs((F+.5)/96-.5)*2.05-.78),I=Math.hypot(te/.42,N/.24),G=Math.max(0,1-I),Y=(F*48+ve)*4;ee.data[Y]=ee.data[Y+1]=ee.data[Y+2]=Math.round(255*G*G*(3-2*G)),ee.data[Y+3]=255}oe.putImageData(ee,0,0);let he=new ut(new Qt(2.2,4.1),new gn({color:0,alphaMap:new ti(j),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));he.rotation.x=-Math.PI/2,he.position.y=.03,he.renderOrder=3,i.add(he)}let le=(()=>{let j=document.createElement("canvas");j.width=16,j.height=64;let oe=j.getContext("2d"),ee=oe.createImageData(16,64);for(let he=0;he<64;he++)for(let F=0;F<16;F++){let ve=1-(he+.5)/64,te=((F+.5)/16-.5)*2,N=Math.exp(-te*te*5)*Math.min(1,ve/.06)*Math.pow(1-ve,1.6)*(.78+.22*Math.sin(ve*31+te*2)),I=(he*16+F)*4;ee.data[I]=ee.data[I+1]=ee.data[I+2]=Math.round(255*Math.max(0,N)),ee.data[I+3]=255}return oe.putImageData(ee,0,0),new gn({map:new ti(j),color:16726576,transparent:!0,opacity:0,blending:Yi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let ne=[];for(let j of[-.56,.56]){let oe=new Qt(.22,1.5);oe.rotateX(-Math.PI/2),oe.translate(j,.035,-1.72-.75),ne.push(oe)}let be=new ut(ah(ne),le);be.renderOrder=3,be.visible=!1,i.add(be),le.mesh=be}let Ce=new nn;Ce.position.set(.02,1.19,-1.716),t.add(Ce);let Se=new Kt(.52,.026,.02);Se.translate(.27,0,0);let ke=new ut(_(Se,h),o);ke.rotation.z=.18,Ce.add(ke);let we=0,Je=new Ha(16773328,0,70,.55,.65,1.2);Je.position.set(0,.8,1.6),Je.target.position.set(0,0,18),t.add(Je,Je.target);let qe={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},Fe=(ne,be)=>be*Math.tanh(ne/be);return{group:i,lamps:n,lampCol:s,head:Je,update(ne,be,j,oe=0,ee=null,he=0){if(ee){let F=Fe(-ee.lat*.016,.045),ve=Fe(-ee.lon*.008,.03);qe.rv+=((F-qe.roll)*55-qe.rv*8)*ne,qe.roll+=qe.rv*ne,qe.pv+=((ve-qe.pitch)*60-qe.pv*9)*ne+ee.kick,qe.pitch+=qe.pv*ne,qe.yv+=((ee.road-qe.y)*85-qe.yv*8)*ne+ee.jolt,qe.y+=qe.yv*ne,e.rotation.set(qe.pitch,0,qe.roll),e.position.y=.35+qe.y}if(qe.br+=((ee?ee.brake:0)-qe.br)*Math.min(1,ne*14),b.emissiveIntensity=.35+j*3.2+qe.br*(1.7+j*2),x.emissiveIntensity=qe.br*(2.4+j*1.6),a.emissiveIntensity=1+j*3+qe.br*(2+j*2),le.opacity=he*Math.min(1,.22+b.emissiveIntensity*.22),le.mesh.visible=le.opacity>.01,oe>.15||we%2.6>.01){we+=ne;let F=we%2.6/2.6,ve=N=>N*N*(3-2*N),te=F<.25?ve(F/.25):F<.5?ve(1-(F-.25)/.25):0;ke.rotation.z=.18+te*2.5,oe<=.15&&F>=.5&&(we=0)}Je.intensity=j*60,f.emissiveIntensity=.15+j*2.6}}}var Wo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},rS=new Ws(-1,1,1,-1,0,1),Gd=class extends vt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},oS=new Gd,sr=class{constructor(e){this._mesh=new ut(oS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xo=class extends Ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Er.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new sr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bl=class extends Ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},lh=class extends Ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ch=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xo(Wo),this.copyPass.material.blending=ni,this.timer=new Va}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}bl!==void 0&&(o instanceof bl?n=!0:o instanceof lh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uh=class extends Ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var u1={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var qo=class i extends Ei{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,o,{type:Tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let g=new Wt(r,o,{type:Tn,depthBuffer:!1});g.texture.name="UnrealBloomPass.h"+h,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);let m=new Wt(r,o,{type:Tn,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let l=u1;this.highPassUniforms=Er.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Er.clone(Wo.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader,premultipliedAlpha:!0,blending:Yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new gn,this._fsQuad=new sr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],c=o+1<e?t[o+1]:0,u=l+c;s.push((o*l+(o+1)*c)/u),r.push(u)}return new ht({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};qo.BlurDirectionX=new Pe(1,0);qo.BlurDirectionY=new Pe(0,1);var Wd=class extends Ei{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Wt(4,4,{type:Tn,depthBuffer:!1,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),this.mat=new ht({uniforms:{tDiffuse:{value:null},uTexel:{value:new Pe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new sr(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},aS={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Pe(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Pe(1/1280,1/720)},uLo:{value:new H(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function h1(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Pe),l=new Wt(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:Tn,samples:n}),c=new ch(i,l);c.addPass(new uh(e,t));let u=new Wd;c.addPass(u);let h=new qo(new Pe(o.x*r*.5,o.y*r*.5),.42,.55,.86);c.addPass(h);let g=new Xo(aS);g.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},g.material.toneMapped=!1,c.addPass(g);let m=c.render.bind(c);return c.render=d=>{g.uniforms.toneMappingExposure.value=i.toneMappingExposure,m(d)},{composer:c,bloom:h,grade:g,refl:u}}function f1(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let j=0;j<2;j++){let oe=s.getChannelData(j);for(let ee=0;ee<n;ee++)oe[ee]=(Math.random()*2-1)*Math.pow(1-ee/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let c=e.createGain();c.gain.value=.11,l.connect(c),c.connect(t),c.connect(r);let u=(j,oe)=>{let ee=e.createBuffer(1,e.sampleRate*j,e.sampleRate),he=ee.getChannelData(0),F=0;for(let ve=0;ve<he.length;ve++)oe?(F=(F+.02*(Math.random()*2-1))/1.02,he[ve]=F*3.5):he[ve]=Math.random()*2-1;return ee},h=(j,oe,ee)=>{let he=e.createBufferSource();he.buffer=j,he.loop=!0;let F=e.createBiquadFilter();F.type=oe,F.frequency.value=ee;let ve=e.createGain();return ve.gain.value=0,he.connect(F),F.connect(ve),ve.connect(t),he.start(),{f:F,g:ve}},g=h(u(2,!0),"lowpass",400),m=h(u(3,!1),"lowpass",700);m.g.connect(r);let d=h(u(2,!1),"bandpass",5200);d.f.Q.value=6;let _=h(u(2,!0),"lowpass",240),E=h(u(3,!1),"bandpass",2600);E.f.Q.value=.35;let b=h(u(2,!0),"lowpass",520),a=h(u(2,!1),"bandpass",1500);a.f.Q.value=.7;let x=e.createBiquadFilter(),p=e.createGain(),f=e.createOscillator(),v=e.createOscillator(),M=e.createGain();f.type="sawtooth",v.type="triangle",x.type="lowpass",x.frequency.value=320,x.Q.value=.6,p.gain.value=0,M.gain.value=.5,f.connect(x),v.connect(M),M.connect(x),x.connect(p),p.connect(t),f.start(),v.start();let w=h(u(3,!1),"bandpass",750);w.f.Q.value=.6;let y=h(u(3,!0),"lowpass",420),S=h(u(2,!0),"lowpass",140),T=u(.03,!1),A=0;function R(j,oe){let ee=e.createBufferSource(),he=e.createBiquadFilter(),F=e.createGain();ee.buffer=T,he.type="bandpass",he.frequency.value=1800+Math.random()*2600,he.Q.value=1.2,F.gain.setValueAtTime(oe*(.02+Math.random()*.03),j),F.gain.exponentialRampToValueAtTime(1e-4,j+.03),ee.connect(he),he.connect(F),F.connect(t),ee.start(j),ee.stop(j+.04)}let C=0,P=0;function L(j,oe){let ee=e.createOscillator(),he=e.createOscillator(),F=e.createGain(),ve=e.createBiquadFilter();ve.type="bandpass",ve.frequency.value=1150,ve.Q.value=2.2,ee.type="square",ee.frequency.value=745,he.type="triangle",he.frequency.value=1490,F.gain.setValueAtTime(0,j),F.gain.linearRampToValueAtTime(.085*oe,j+.004),F.gain.exponentialRampToValueAtTime(1e-4,j+.3),ee.connect(ve),he.connect(ve),ve.connect(F),F.connect(t),F.connect(r),ee.start(j),he.start(j),ee.stop(j+.33),he.stop(j+.33)}function D(j,oe){let ee=e.createOscillator(),he=e.createGain();ee.type="sine",ee.frequency.setValueAtTime(110,j),ee.frequency.exponentialRampToValueAtTime(48,j+.12),he.gain.setValueAtTime(1e-4,j),he.gain.linearRampToValueAtTime(.22*oe,j+.006),he.gain.exponentialRampToValueAtTime(1e-4,j+.17),ee.connect(he),he.connect(t),ee.start(j),ee.stop(j+.2)}let B=e.createGain();B.gain.value=1,B.connect(t);let V=e.createGain();V.gain.value=.35,B.connect(V),V.connect(r);let O=(j=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return B;let oe=e.createStereoPanner();return oe.pan.value=j,oe.connect(B),oe};function k(j,oe,ee,he,F,ve,te="sine",N=0){let I=e.createOscillator(),G=e.createGain();if(I.type=te,I.frequency.setValueAtTime(oe,j),I.frequency.exponentialRampToValueAtTime(ee,j+he),N){let Y=e.createOscillator(),Q=e.createGain();Y.frequency.value=N,Q.gain.value=oe*.012,Y.connect(Q),Q.connect(I.frequency),Y.start(j),Y.stop(j+he+.05)}return G.gain.setValueAtTime(1e-4,j),G.gain.linearRampToValueAtTime(F,j+Math.min(.04,he*.25)),G.gain.setValueAtTime(F,j+he*.7),G.gain.exponentialRampToValueAtTime(1e-4,j+he),I.connect(G),G.connect(ve),I.start(j),I.stop(j+he+.02),G}function z(j,oe){let ee=O(),he=2+Math.floor(Math.random()*4),F=3200+Math.random()*1500;for(let ve=0;ve<he;ve++){let te=j+ve*(.09+Math.random()*.07);k(te,F,F*(1.2+Math.random()*.3),.06,oe*.022,ee)}}function W(j,oe){let ee=O();k(j,1120,1390,1,oe*.03,ee,"sine",5.5),k(j+1.15,2350,2150,.14,oe*.03,ee),k(j+1.32,1700,1520,.13,oe*.028,ee),k(j+1.5,2750,2480,.36,oe*.032,ee)}function ce(j,oe){let ee=O(),he=1+Math.floor(Math.random()*3);for(let F=0;F<he;F++){let ve=j+F*.48,te=e.createOscillator(),N=e.createBiquadFilter(),I=e.createGain();te.type="sawtooth",te.frequency.setValueAtTime(560,ve),te.frequency.exponentialRampToValueAtTime(420,ve+.32),N.type="bandpass",N.frequency.value=1150,N.Q.value=1.6,I.gain.setValueAtTime(1e-4,ve),I.gain.linearRampToValueAtTime(oe*.03,ve+.03),I.gain.exponentialRampToValueAtTime(1e-4,ve+.36),te.connect(N),N.connect(I),I.connect(ee),te.start(ve),te.stop(ve+.4)}}function Ne(j,oe){let ee=O(),he=2+Math.floor(Math.random()*2);for(let F=0;F<he;F++)k(j+F*.42,1750,1150,.36,oe*.022,ee,"triangle",11)}function Oe(j,oe){let ee=O(),he=e.createOscillator(),F=e.createBiquadFilter(),ve=e.createGain(),te=240+Math.random()*220,N=5+Math.floor(Math.random()*4);he.type="square",he.frequency.value=te,F.type="bandpass",F.frequency.value=te*2.4,F.Q.value=3,ve.gain.setValueAtTime(1e-4,j);for(let I=0;I<N;I++){let G=j+I*.038;ve.gain.linearRampToValueAtTime(oe*.014,G+.008),ve.gain.linearRampToValueAtTime(1e-4,G+.028)}he.connect(F),F.connect(ve),ve.connect(ee),he.start(j),he.stop(j+N*.038+.05)}function Ee(j,oe){let ee=O(),he=4300+Math.random()*700;for(let F=0;F<3;F++)k(j+F*.055,he,he*1.01,.035,oe*.009,ee)}function $(j,oe){let ee=O(0);for(let[he,F,ve]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let te=e.createOscillator(),N=e.createGain();te.type="sine",te.frequency.value=he,te.detune.value=(Math.random()-.5)*8,N.gain.setValueAtTime(1e-4,j),N.gain.linearRampToValueAtTime(oe*.05*F,j+.03),N.gain.exponentialRampToValueAtTime(1e-4,j+ve),te.connect(N),N.connect(ee),te.start(j),te.stop(j+ve+.1)}}function J(j,oe){let ee=O();for(let he of[j,j+.22])k(he,2650,2600,.5,oe*.018,ee),k(he,3950,3900,.35,oe*.008,ee)}let le={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ce=j=>j>1e-4?-Math.log(1-Math.random()*.98)/j:1e9,Se=j=>440*Math.pow(2,(j-69)/12),ke=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],we=[72,74,76,79,81,84,86,88],Je=0,qe=e.currentTime+.2,Fe=e.currentTime+3;function ne(j){let oe=ke[Je++%ke.length],ee=11;for(let he of oe)for(let F of[-5,5]){let ve=e.createOscillator(),te=e.createGain();ve.type=F<0?"sine":"triangle",ve.frequency.value=Se(he),ve.detune.value=F,te.gain.setValueAtTime(0,j),te.gain.linearRampToValueAtTime(.18,j+3.5),te.gain.setValueAtTime(.18,j+ee-4),te.gain.linearRampToValueAtTime(0,j+ee+1),ve.connect(te),te.connect(l),ve.start(j),ve.stop(j+ee+1.2)}}function be(j){let oe=we[Math.floor(Math.random()*we.length)],ee=e.createOscillator(),he=e.createOscillator(),F=e.createGain(),ve=e.createGain();ee.type=he.type="sine",ee.frequency.value=Se(oe),he.frequency.value=Se(oe)*2.01,ve.gain.value=.25,he.connect(ve),ve.connect(F),F.gain.setValueAtTime(0,j),F.gain.linearRampToValueAtTime(.05,j+.02),F.gain.exponentialRampToValueAtTime(1e-4,j+4),ee.connect(F),F.connect(r),F.connect(t),ee.start(j),he.start(j),ee.stop(j+4.2),he.stop(j+4.2)}return{ac:e,muted:!1,tyres:a,engG:p,bump(j){D(e.currentTime+.01,j)},update(j,oe,ee,he={}){let F=e.currentTime;if((he.bell||0)>.01)for(C<F&&(C=F+.02);C<F+.12;)L(C,he.bell),C+=.41;let ve=he.rain||0;E.g.gain.setTargetAtTime(ve*.05,F,.6),b.g.gain.setTargetAtTime(ve*.05,F,.6);let te=(he.wetRoad||0)*Math.min(1,j)**1.5,N=.8+.2*Math.sin(F*2.3)*Math.sin(F*.9+1);if(a.g.gain.setTargetAtTime(te*.045*N,F,.4),a.f.frequency.setTargetAtTime(900+1500*Math.min(j,2),F,.4),ve>.05&&he.roof)for(A<F&&(A=F+.02);A<F+.12;)R(A,ve),A+=.04+Math.random()*.12/ve;let I=he.water||0,G=.6+.4*Math.sin(F*1.3)*Math.sin(F*.37);w.g.gain.setTargetAtTime(I*.035*G,F,.25),w.f.frequency.setTargetAtTime(600+400*G,F,.25);let Y=.35+.65*Math.pow(.5+.5*Math.sin(F*.23)*Math.sin(F*.071+2),2),Q=he.rush||0;y.g.gain.setTargetAtTime(((oe.mountain||0)+(oe.snow||0)*.7)*.06*Y+Q*.055,F,.8),y.f.frequency.setTargetAtTime(260+420*Y+Q*500,F,.8);let ue=he.train||0;if(_.g.gain.setTargetAtTime(ue*.16,F,.2),ue>.04)for(P<F&&(P=F+.02);P<F+.12;)D(P,ue),D(P+.15,ue*.8),P+=1.2;for(;qe<F+1;)ne(qe),qe+=8;Fe<F+.5&&(be(Fe),Fe+=1.5+Math.random()*4.5);let me=he.tunnel||0;{let Z=he.speed||0,Ae=he.load||0,pe=850+2400*(1-Math.exp(-Z/15))+Math.max(0,Z-25)*60+Ae*1300,De=pe/40;f.frequency.setTargetAtTime(De,F,.25),v.frequency.setTargetAtTime(De*2,F,.25),x.frequency.setTargetAtTime(200+pe*.08+Ae*260,F,.3),p.gain.setTargetAtTime((.008+.01*Math.min(1,Z/15)+.024*Ae)*(1-.6*(he.rush||0))*(he.roof===!1?.5:1)*(1+.7*me),F,.3)}g.g.gain.setTargetAtTime((.03+j*.06)*(1+1.6*me),F,.35),g.f.frequency.setTargetAtTime((250+j*500)*(1+.5*me),F,.35),S.g.gain.setTargetAtTime(me*.07,F,.4),o.gain.setTargetAtTime(.55+.6*me,F,.4);let ae=.5+.5*Math.sin(F*.55)*Math.sin(F*.21+1);m.g.gain.setTargetAtTime(oe.coast*(.012+ae*.05),F,.3),m.f.frequency.setTargetAtTime(400+ae*900,F,.3);let de=1-Math.min(1,ve*1.4),Ie=1-ee,Ye=he.dusk||0,Te=oe.snow||0,Le=1-Te,Be={sparrow:ee*de*.22*(.3+oe.city*.5+oe.sakura+oe.country*.8+oe.coast*.2+(oe.mountain||0)*.5)*(1-Te*.8),uguisu:ee*de*oe.sakura*.06,crow:de*(Ye*.14+ee*(oe.city+oe.country+(oe.mountain||0)*1.5+Te*2.5)*.012),gull:ee*oe.coast*de*.16,frog:Ie*(oe.country*5+oe.sakura*.6+oe.coast*.3)*(1+ve*.6)*Le,cricket:Ie*de*(1.6-oe.city*1.1+(oe.mountain||0)*.8)*Le,bike:ee*de*oe.city*.014,bell:Te*.022+(oe.mountain||0)*.006},et={sparrow:z,uguisu:W,crow:ce,gull:Ne,frog:Oe,cricket:Ee,bike:J,bell:$};for(let Z in Be)F<le[Z]||(Be[Z]>1e-4&&et[Z](F+.05,.6+Math.random()*.4),le[Z]=F+Math.max(.12,Ce(Be[Z]||1e-6)));let at=.5+.5*Math.sin(F*7)*Math.sin(F*.4);d.g.gain.setTargetAtTime((oe.country+oe.sakura*.3)*ee*.006*at*(1-(oe.snow||0)),F,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function d1(i){let t=new Qt(.075,.05),n=new gn({color:16777215,side:yn}),s=new qi(t,n,420);s.frustumCulled=!1,s.count=0;let r=new xe("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(f=>new xe(f));for(let f=0;f<420;f++)s.setColorAt(f,r);let l=Array.from({length:420},()=>({p:new H(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),c=new Qe,u=new mn,h=new Yn,g=new H(1,1,1),m=new H,d=90,_=new Float32Array(d*3),E=Array.from({length:d},()=>({p:new H(1e9,0,0),ph:Math.random()*6.28})),b=new vt;b.setAttribute("position",new Mt(_,3));let a=new fo({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Yi,opacity:0}),x=new Ma(b,a);x.frustumCulled=!1;let p=(f,v,M,w,y)=>{let S=y?8+Math.random()*42:-4+Math.random()*50,T=(Math.random()-.5)*40;f.p.set(v.x+M.x*S+w.x*T,v.y-1+Math.random()*9,v.z+M.z*S+w.z*T)};return{group:[s,x],shift(f,v){for(let M of l)M.p.x-=f,M.p.z-=v;for(let M of E)M.p.x-=f,M.p.z-=v},update(f,v,M,w,y,S,T,A,R,C=0){let P=Math.floor(420*Math.min(1,S*1.1+C*.55));n.color.setScalar(1-.72*A);let L=!1;s.count=P;for(let B=0;B<P;B++){let V=l[B];m.subVectors(V.p,M);let O=m.x*w.x+m.z*w.z,k=m.x*y.x+m.z*y.z;if(V.p.x>1e8||O<-6||O>55||Math.abs(k)>24||V.p.y<T-.5){p(V,M,w,y,V.p.x<1e8);let z=Math.random()*(S+C)<C;(z!==V.leaf||z)&&(V.leaf=z,s.setColorAt(B,z?o[Math.floor(Math.random()*o.length)]:r),L=!0)}V.p.y-=V.v*f,V.p.x+=Math.sin(v*.7+V.ph)*.4*f+.25*f,V.p.z+=Math.cos(v*.5+V.ph)*.3*f,h.set(v*V.sp+V.ph,v*V.sp*.7,V.ph),u.setFromEuler(h),g.setScalar(V.leaf?1.9:1),c.compose(V.p,u,g),s.setMatrixAt(B,c)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=A*R;if(a.opacity=D,x.visible=D>.01,x.visible){for(let B=0;B<d;B++){let V=E[B];m.subVectors(V.p,M);let O=m.x*w.x+m.z*w.z,k=m.x*y.x+m.z*y.z;if(V.p.x>1e8||O<-4||O>60||Math.abs(k)>30){let z=2+Math.random()*55,W=(Math.random()-.5)*55;V.p.set(M.x+w.x*z+y.x*W,T+.3+Math.random()*2.2,M.z+w.z*z+y.z*W)}V.p.x+=Math.sin(v*.6+V.ph*3)*.3*f,V.p.y+=Math.sin(v*.9+V.ph)*.2*f,V.p.z+=Math.cos(v*.5+V.ph*2)*.3*f,_[B*3]=V.p.x,_[B*3+1]=V.p.y,_[B*3+2]=V.p.z}b.attributes.position.needsUpdate=!0}}}}var ot=new URLSearchParams(location.search),Yo=ot.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();Yo&&document.body.classList.add("embed");ot.has("shot")&&document.body.classList.add("shot");im(ot.has("seed")?parseInt(ot.get("seed")):Math.random()*1e9|0);rm(ot.get("env")||"city");var On=i=>document.getElementById(i),Zo=i=>{let e=On("loading");e&&(e.textContent=i)};async function lS(){await new Promise(_e=>setTimeout(_e,30));let i=On("c"),e=new Fu({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ot.get("q")||(Yo||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?Yo?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=Gt,e.toneMapping=Ga,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=_r,e.debug.checkShaderErrors=ot.has("debug");let r=ot.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",l=r==="old"?Promise.resolve(null):Ug(o),c=zg(o),u=Hg(n==="high"&&innerHeight*s>=560?"hi":"lo"),h=Bg(o),g=Fg(n==="high"&&innerHeight*s>=560?"hi":"lo"),m=new gr;m.fog=new xa(13032946,.0019,700);let d=new kn(52,innerWidth/innerHeight,.5,7e3),_=new yo(16777215,3);_.castShadow=!0;let E=n==="low"?1024:n==="mid"?1536:2048;_.shadow.mapSize.set(E,E),od(ot.has("pcf")?parseInt(ot.get("pcf")):1);let b=62,a=_.shadow.camera,x=new Qe,p=new Qe;Object.assign(a,{left:-b,right:b,top:b,bottom:-b,near:1,far:420});let f=new H(0,1,0),v=new H,M=new H,w=new H,y=new H(0,1,0),S=new H(0,150,60),T=new H,A=new H,R=null,C=0,P=0,L=0;_.shadow.updateMatrices=function(){a.position.copy(S),a.lookAt(T),a.updateMatrixWorld(),a.updateProjectionMatrix(),p.multiplyMatrices(a.matrixWorldInverse,x).multiply(a.matrixWorld),a.projectionMatrix.multiply(p),a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),this._updateMatrix(a,this.matrix,this._frustum)};let D=!0;_.shadow.bias=-4e-4;let B=()=>{_.shadow.normalBias=ot.has("nb")?parseFloat(ot.get("nb")):1.5*2*b/_.shadow.mapSize.x};B();{let[_e,yt]=(ot.get("graze")||"0,0.12").split(",").map(Number);vm(_e,yt)}m.add(_,_.target);let V=new yo(16777215,0);V.castShadow=n!=="low"&&!ot.has("nocarsh");{let _e=ot.has("carsm")?parseInt(ot.get("carsm")):n==="high"?512:384;V.shadow.mapSize.set(_e,_e)}if(Object.assign(V.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),V.shadow.bias=-2e-4,V.shadow.normalBias=.025,m.add(V,V.target),V.castShadow){let _e=_.shadow.getFrustum(),yt=V.shadow.getFrustum();for(let nt of[ut,ba]){let en=nt.prototype.intersectsFrustum;nt.prototype.intersectsFrustum=function(Qn){return Qn===yt?this.userData.car===!0:(Qn!==_e||this.userData.car!==!0)&&en.call(this,Qn)}}}let O=new za(10799359,13154464,1.6);m.add(O),Zo("painting the town\u2026"),await new Promise(_e=>setTimeout(_e,10));let k=Fm();Xm(k);{let _e=await g;_e&&(Bm(k,_e),_e.img.close())}let z=Om(e);Qm(z.cells),ze.uTuftV.value.set(...z.tuftV);let W=Am(k.textures(e),z.tex),ce=bm();ce.update(e,0,0,0,0),Zo("painting the clouds\u2026"),await new Promise(_e=>setTimeout(_e,10)),eg(ot.has("leafd")?parseFloat(ot.get("leafd")):n==="high"?.72:.62);{let _e=await u;if(_e){Di.cells=_e.cells.filter(en=>en.kind==="leaf"),_e.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let yt=cd(_e.tex);W.gleaf=yt.mat,W.gleafDepth=yt.depth;let nt=_e.cells.filter(en=>en.kind==="blossom");nt.length&&(Di.bcells=nt,W.gblossom=cd(_e.tex,{blossom:!0}).mat)}}og(),xg();let Ne=[2.1,1.75,3.2],Oe=[1.42,1.47,1.74];{let _e=await h;_e&&(_e.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),bi.tex=_e.tex,bi.uFieldK.value.set(1/_e.tile[0],1/_e.tile[1]),bi.uFieldM.value.set(..._e.mean))}let Ee=new Gu;W.shore=Xg(n!=="high"),W.surf=Yg(),ih.n=n==="high"?8:4;let $=qg(),J=r1(n,ot.has("grass")?ot.get("grass").split(",").map(Number):null);for(let _e of J.meshes)m.add(_e);let le=new rh(m,Ee,W,$),Ce=wg();m.add(Ce);let Se=Cg();m.add(Se.group);let ke=Wg();m.add(ke.mesh);let we=c1();we.group.rotation.order="YXZ",m.add(we.group),we.group.traverse(_e=>{_e.userData.car=!0});let Je=d1(W.glowTex);Je.group.forEach(_e=>m.add(_e));let qe=ot.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Fe=h1(e,m,d,{msaa:qe==="msaa"?n==="high"?4:2:0,fxaa:qe==="fxaa"});ze.uReflTex.value=Fe.refl.rt.texture;let ne=await l,be=ne?Og(ne,Fe):null;be&&m.add(be.mesh);let j=!be||r==="both"?Rg(Ag(e)):null;j&&m.add(j.group);let oe=await c,ee=oe?kg(oe,Fe,m.fog.color):null;ee&&m.add(ee.mesh);let he=new H,F=new H,ve=ot.get("refl")||"auto",te=ot.has("backlit")?parseFloat(ot.get("backlit")):1,N=[7.5,3,2.3],I=[1.7,1.15,1],G=.7,Y=ot.has("lightson")?parseFloat(ot.get("lightson")):-1,Q=new H,ue=ot.has("haze")?parseFloat(ot.get("haze")):1,me=Pm();m.add(me.group);let ae=Im();m.add(ae.group);let de=e1(ot),Ie=n1(),Ye=t1();m.add(Ie.mesh,Ye.mesh);let Te=i1();m.add(Te.mesh);let Le=s1();m.add(Le.mesh);let Be=new xe,et=new xe,at=new pt,Z=o1();m.add(Z.mesh);let Ae=de.W.rain,pe=.4,De=5.5,X={s:Math.max(100,parseFloat(ot.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Zt(parseFloat(ot.get("t"))||.4,0,.999),todPaused:ot.has("freeze"),dist:0,spray:ot.has("nospray")?0:1,grass:1,pclouds:1,band:1,cam:{low:1,eye:2,top:3,film:4}[ot.get("cam")]??(Yo?4:0)},ye=!1;be&&(be.opening=["sakura","city"].includes(sn(X.s))?"center":"flank"),Zo("building the road\u2026"),await new Promise(_e=>setTimeout(_e,10));let st=Yo?620:le.ahead;le.ahead=260;let tt=ot.has("detail")?parseFloat(ot.get("detail")):380,Vt=ot.has("farleaf")?parseFloat(ot.get("farleaf")):540;for(;le.update(X.s,1e9););le.flush(),le.ahead=st;{Zo("preparing the light\u2026"),await new Promise(tn=>setTimeout(tn,10));let _e=new nn,yt=new vt;yt.setAttribute("position",new Ze([0,0,0,.01,0,0,0,.01,0],3)),yt.setAttribute("normal",new Ze([0,1,0,0,1,0,0,1,0],3)),yt.setAttribute("uv",new Ze([0,0,1,0,0,1],2)),yt.setAttribute("color",new Ze([1,1,1,1,1,1,1,1,1],3));let nt=new vt;nt.setAttribute("position",yt.attributes.position);let en=new Set([W.shore,W.surf,$]),Qn=[W.color,W.atlas,W.foliage,W.leaf,W.lamp,W.sig,W.sodium,W.decal,W.pool,W.shore,W.surf,$,...W.gleaf?[W.gleaf]:[],...W.gblossom?[W.gblossom]:[]];for(let tn=0;tn<_i.length;tn++)Qn.push(cl([_i[tn]])),Qn.push(cl([_i[tn],_i[(tn+1)%_i.length]]));for(let tn of Qn){let ts=new ut(en.has(tn)?nt:yt,tn);ts.castShadow=ts.receiveShadow=!en.has(tn),ts.frustumCulled=!1,(tn===W.gleaf||tn===W.gblossom)&&(ts.customDepthMaterial=W.gleafDepth),_e.add(ts)}_e.position.set(0,0,0),m.add(_e),_.target.position.set(0,0,0),_.position.set(0,150,60);let bn=[Ie.mesh,Ye.mesh,Te.mesh,Le.mesh,ae.group,me.group,ke.mesh].filter(tn=>!tn.visible);for(let tn of bn)tn.visible=!0;J.warm(!0),e.setRenderTarget(Fe.composer.readBuffer),e.compile(m,d),e.render(m,d),e.setRenderTarget(null);for(let tn of bn)tn.visible=!1;J.warm(!1),m.remove(_e),yt.dispose(),nt.dispose(),Fe.bloom.enabled=Fe.refl.enabled=!0,Fe.composer.render(0),Fe.bloom.enabled=Fe.refl.enabled=!1}let Ke={k:Math.ceil((X.s-Ar)/wr),phase:"idle",raise:1,decided:!1,t2:0},mt={},St={},Ft={},hh=ot.has("yaw")||ot.get("cam")==="top",Ls=new H,ps=new H,Jn=new H,rr=!1,Ur=new H,Fi=new H,$o=On("spd"),Ml=On("dist"),Sl=On("clock"),ms=On("zone"),or=On("start"),ar=On("hint"),an=null,Ko=null,El=0,Tl=0;function fh(_e){!ye||_e===Ko||(Ko=_e,ms.querySelector(".jp").textContent=nl[_e].jp,ms.querySelector(".en").textContent=nl[_e].en,ms.classList.add("on"),clearTimeout(El),El=setTimeout(()=>ms.classList.remove("on"),5200))}function Jo(){if(!ye){if(ye=!0,document.body.classList.remove("pre"),!ot.has("auto"))try{an=f1(),an&&an.ac.resume()}catch{an=null}or.style.opacity=0,setTimeout(()=>or.remove(),1500),Yo||(ar.style.opacity=.75,setTimeout(()=>ar.style.opacity=0,9e3))}}let zn={};addEventListener("keydown",_e=>{zn[_e.key]=!0,(_e.key==="m"||_e.key==="M")&&fe(),(_e.key==="t"||_e.key==="T")&&re(),(_e.key==="c"||_e.key==="C")&&Xe(),(_e.key==="r"||_e.key==="R")&&bt(),!ye&&(_e.key===" "||_e.key==="Enter")&&Jo()}),addEventListener("keyup",_e=>{zn[_e.key]=!1});let U=null;i.addEventListener("pointerdown",_e=>{U={id:_e.pointerId,x:_e.clientX,y:_e.clientY,sy:_e.clientY,sc:X.mult}});let K=_e=>Zt(_e.sc*Math.exp(-((_e.y-_e.sy)/innerHeight)*3.4),pe,De);addEventListener("pointermove",_e=>{U&&_e.pointerId===U.id&&(U.x=_e.clientX,U.y=_e.clientY,X.mult=K(U))}),addEventListener("pointerup",()=>{U=null}),addEventListener("pointercancel",()=>{U=null}),i.addEventListener("touchstart",_e=>{let yt=_e.changedTouches[0];U={id:"touch",x:yt.clientX,y:yt.clientY,sy:yt.clientY,sc:X.mult},_e.preventDefault()},{passive:!1}),i.addEventListener("touchmove",_e=>{if(!U)return;let yt=_e.changedTouches[0];U.x=yt.clientX,U.y=yt.clientY,X.mult=K(U),_e.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{U=null}),i.addEventListener("touchcancel",()=>{U=null});function fe(){an&&(an.toggle(),On("snd").style.opacity=an.muted?.4:1)}function re(){X.todPaused=!X.todPaused,On("tim").style.opacity=X.todPaused?.4:1}let se=[0,1,2,4],Ve={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Xe(){X.cam=se[(se.indexOf(X.cam)+1)%se.length],On("cam").textContent=Ve[X.cam]||"\u25D0",X.cam===4&&je()}let He=["chase","side","road","crane","eye","side","road"],Ue={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function je(){let _e;do _e=He[Math.floor(Math.random()*He.length)];while(_e===Ue.last);{let yt=Ii(X.s+60);yt&&Math.abs(X.s+60-yt.s)<hn+120&&(_e=Math.random()<.6?"chase":"eye")}if(Object.assign(Ue,{type:_e,last:_e,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),_e==="road"){let yt=X.s+40+Math.random()*18,nt=Fn(yt,"rw"),en=Math.random()<.6?-1:1,Qn=en*(nt+(en<0?.9:1.3)),bn=Ee.at(yt,{}),tn=bn.y+Js(yt,Qn,bn.y,nt);Ue.anchor={x:bn.x+bn.rx*Qn,y:Math.max(tn,bn.y)+1.05,z:bn.z+bn.rz*Qn,s:yt}}rr=!1}let _t={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function bt(){On("wx").textContent=_t[de.cycle()]}On("wx").textContent=_t[de.W.mode],On("cam").textContent=Ve[X.cam]||"\u25D0",X.cam===4&&je(),On("wx").onclick=_e=>{_e.stopPropagation(),bt()},On("snd").onclick=_e=>{_e.stopPropagation(),fe()},On("tim").onclick=_e=>{_e.stopPropagation(),re()},On("cam").onclick=_e=>{_e.stopPropagation(),Xe()};let $e=0,Nt=_e=>{let yt=performance.now();yt-$e<120||($e=yt,_e.cancelable&&_e.type!=="click"&&_e.preventDefault(),Jo())};for(let _e of["touchstart","pointerdown","mousedown","click"])or.addEventListener(_e,Nt,{passive:!1});let dn=()=>{an&&an.ac.state!=="running"&&an.ac.resume()};for(let _e of["touchend","click","keydown"])addEventListener(_e,dn,{passive:!0});document.addEventListener("visibilitychange",()=>{an&&(document.hidden?an.ac.suspend():an.ac.resume())});let Bt=!1,zt="",pn=52,We=0;function Ln(){let _e=innerWidth,yt=innerHeight,nt=_e/yt,en=_e+"x"+yt+"@"+s;en!==zt&&(zt=en,e.setPixelRatio(s),e.setSize(_e,yt,!1),Fe.composer.setPixelRatio(s),Fe.composer.setSize(_e,yt),d.aspect=nt,pn=nt>=1?52:Zt(2*Math.atan(Math.tan(34*Math.PI/180)/nt)*180/Math.PI,52,80),d.fov=pn+We,d.updateProjectionMatrix(),Fe.grade.uniforms.uAspect.value=nt,Fe.grade.uniforms.uTexel.value.set(1/Fe.composer.readBuffer.width,1/Fe.composer.readBuffer.height),ze.uReflRes.value.set(Fe.composer.readBuffer.width,Fe.composer.readBuffer.height),Dg(e))}addEventListener("resize",()=>{Bt=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Bt=!0}),Ln();let Et=0;function jn(_e=!0){if(s>1.05)s=Math.max(1,s-.25),Bt=!0;else if(D)D=!1,Fe.bloom.enabled=!1;else if(_.shadow.mapSize.x>1024)_.shadow.mapSize.set(1024,1024),B(),_.shadow.map&&(_.shadow.map.dispose(),_.shadow.map=null);else if(le.ahead>430)le.ahead=430;else return;if(Et++,_e)try{localStorage.setItem("icd-q",String(Et))}catch{}}try{let _e=parseInt(localStorage.getItem("icd-q")||"0");if(!ot.has("q"))for(let yt=0;yt<Math.min(_e,6);yt++)jn(!1);Et=Math.max(Et,_e||0)}catch{}let di=performance.now(),ln=0,gs=0,Lt=0,Xt=()=>1-ie.night,Ti=0,lt=0,Bi=0,xt=ot.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;xt&&(xt.gl=e.getContext(),xt.tq=xt.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let Vn={p:-1,a:new H,b:new H,next:5},Pt={lat:0,lon:0,road:0,jolt:0,kick:0,u:X.u,vu:0,v:0,s:X.s,yaw:0,brake:0,rk:NaN,rb:null},p1=new xe(3.6,2.8,1.8),m1=[-2.5335,-1.4665,1.4665,2.5335],Xd=[1.12,-1.12],g1=[-24.5,24.5];function qd(_e){requestAnimationFrame(qd);let yt=performance.now();Bt&&(Bt=!1,Ln());let nt=Math.min(.05,Math.max(0,(_e-di)/1e3));di=_e,ln+=nt,X.steer=0,(zn.ArrowLeft||zn.a||zn.A)&&(X.steer=-1),(zn.ArrowRight||zn.d||zn.D)&&(X.steer=1),(zn.ArrowUp||zn.w||zn.W)&&(X.mult=Zt(X.mult*Math.exp(nt*.9),pe,De)),(zn.ArrowDown||zn.s||zn.S)&&(X.mult=Zt(X.mult*Math.exp(-nt*.9),pe,De)),U&&Math.abs(U.y-U.sy)<30&&(X.steer=U.x<innerWidth/2?-1:1),X.steer&&(X.lastInput=_e,X.uHome=X.u);let en=Po(Ke.k);X.s-en>24&&(Ke.k++,en=Po(Ke.k),Object.assign(Ke,{phase:"idle",raise:1,decided:!1}));let Qn=rl(en),bn=en-X.s;Qn&&!Ke.decided&&bn<150&&(Ke.decided=!0,bn>75&&ye&&X.speed*X.speed/2.5<bn-14&&(ot.has("xing")||Pn(Ke.k,99)<.8)&&(Ke.phase="warn",ae.start(en,Pn(Ke.k,7)<.5?1:-1,16))),Ke.phase==="warn"?(Ke.raise=Math.max(0,Ke.raise-nt/6),ae.st.cleared&&(Ke.phase="clear",Ke.t2=0)):Ke.phase==="clear"?(Ke.raise=Math.max(0,Ke.raise-nt/6),(Ke.t2+=nt)>2.2&&(Ke.phase="raise")):Ke.phase==="raise"&&(Ke.raise=Math.min(1,Ke.raise+nt/5),Ke.raise>=1&&(Ke.phase="idle"));let tn=Ke.phase==="warn"||Ke.phase==="clear"||Ke.phase==="raise"&&Ke.raise<.25,ts=Fn(X.s,"speed")*X.mult*(ye?1:.55);if(Ke.phase!=="idle"&&Ke.raise<.8&&bn>0){let Re=bn-11.2,it=Re>0?Math.sqrt(2*1.25*Re):0;ts=Math.min(ts,it),X.speed=Math.min(X.speed,it)}ot.has("park")&&(ts=0,X.speed=0),X.speed+=(ts-X.speed)*Math.min(1,nt*.5),X.s+=X.speed*nt,X.dist+=X.speed*nt;let wl=Fn(X.s,"rw");X.steer?X.u=Zt(X.u+X.steer*nt*2.4,-wl+.85,wl-.85):_e-X.lastInput>3e3&&(X.u+=(Zt(X.uHome,-wl+.85,wl-.85)+Math.sin(ln/11)*.1-X.u)*Math.min(1,nt*.9)),!X.todPaused&&ye&&(X.tod=(X.tod+nt/480*(ie.night>.5?1.7:1))%1),Sg(X.tod),de.update(nt);let Gn=de.W.ov,vs=de.W.rain;Tg(Gn,vs),Ae=Zt(Ae+(vs>.25?nt/18:-nt/120),0,1);let Yd=performance.now();le.update(X.s,ye?3.5:14);let Zd=performance.now();if(Ee.at(X.s,mt),Math.abs(mt.x-le.origin.x)>900||Math.abs(mt.z-le.origin.z)>900){let Re=Math.round(mt.x)-le.origin.x,it=Math.round(mt.z)-le.origin.z;le.setOrigin(Math.round(mt.x),Math.round(mt.z)),Ls.x-=Re,Ls.z-=it,ps.x-=Re,ps.z-=it,Je.shift&&Je.shift(Re,it),Z.shift(Re,it),Te.shift(Re,it)}let Oi=le.origin.x,zi=le.origin.z,v1=(Ee.at(X.s+1.5,Ft).y-Ee.at(X.s-1.5,St).y)/3,x1=(Ft.h-St.h)/3;if(we.group.position.set(mt.x+mt.rx*X.u-Oi,mt.y+.01,mt.z+mt.rz*X.u-zi),nt>0){let Re=Pt.vu+((X.u-Pt.u)/nt-Pt.vu)*Math.min(1,nt*6),it=(Re-Pt.vu)/nt;Pt.u=X.u,Pt.vu=Re,Pt.lat=it-X.speed*X.speed*x1,Pt.lon+=((X.speed-Pt.v)/nt-Pt.lon)*Math.min(1,nt*8),Pt.v=X.speed;let rt=Ke.phase!=="idle"&&bn>0&&bn<20&&X.speed<.5;if(Pt.brake=Pt.lon<-.6||rt?1:Pt.lon>-.3?0:Pt.brake,Pt.yaw=-Zt(Math.atan(Re/Math.max(X.speed,6))*.8,-.1,.1),Pt.road=.004*Math.sin(X.s*.48)+.003*Math.sin(X.s*.86+1.3),Pt.jolt=Pt.kick=0,Qn)for(let Tt=0;Tt<4;Tt++)for(let qt=0;qt<2;qt++){let Yt=en+m1[Tt]-Xd[qt];if(Pt.s<Yt&&X.s>=Yt){let Jt=.05+Math.min(X.speed,25)*.004;Pt.jolt+=Jt,Pt.kick+=qt?Jt*.9:-Jt*.9,an&&an.bump(.25+Math.min(X.speed,25)/50)}}{let Tt=Math.round((X.s-Io)/Rr);Tt!==Pt.rk&&(Pt.rk=Tt,Pt.rb=Pi(X.s));let qt=Pt.rb;if(qt)for(let Yt=0;Yt<2;Yt++)for(let Jt=0;Jt<2;Jt++){let ai=qt.s+g1[Yt]-Xd[Jt];if(Pt.s<ai&&X.s>=ai){let Dn=.035+Math.min(X.speed,25)*.003;Pt.jolt+=Dn,Pt.kick+=Jt?Dn*.9:-Dn*.9,an&&an.bump(.2+Math.min(X.speed,25)/60)}}}Pt.s=X.s}we.group.rotation.set(-Math.atan(v1),mt.h+Pt.yaw,0);let lr=Ii(X.s);lr&&Math.abs(X.s-lr.s)<700?(Ee.at(lr.s-vn,Ft),ze.uTunA.value.set(Ft.x-Oi,Ft.y,Ft.z-zi),Ee.at(lr.s+vn,Ft),ze.uTunB.value.set(Ft.x-Oi,Ft.y,Ft.z-zi),ze.uTunR.value=Fn(lr.s,"rw")+1.7):(ze.uTunA.value.set(0,-1e4,0),ze.uTunB.value.set(0,-1e4,0));let dh=lr&&Math.abs(X.s+1-lr.s)<vn-1.5?1:0;lt+=(dh-lt)*Math.min(1,nt*(dh?1.6:.7)),ze.uCarPos.value.set(we.group.position.x+mt.fx*1.7,we.group.position.y+.8,we.group.position.z+mt.fz*1.7),ze.uCarFwd.value.set(mt.fx,-.05,mt.fz).normalize(),ze.uHead.value=dh,we.update(nt,X.speed,Math.max(ie.night,lt),vs,Pt,Bi),me.update(Qn&&bn>-24&&bn<700?Zu(Ee,en):null,le.origin,Ke.raise,tn,ln),ae.update(nt,Ee,le.origin,wt(.15,.8,ie.night),Fn(en,"rw")+3.2);let ph=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ot.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ot.has("rig")){let[Re,it,rt,Tt]=ot.get("rig").split(",").map(Number);Object.assign(ph[0],{back:Re,up:it,ahead:rt,lookY:Tt})}let cr=new H,jo=6,$d=X.cam===2;if(X.cam===4){Ue.t+=nt;{let rt=Ii(X.s+30);rt&&Math.abs(X.s+30-rt.s)<hn+70&&Ue.type!=="chase"&&Ue.type!=="eye"&&(Ue.type="chase",Ue.t=0,Ue.dur=20,rr=!1)}(Ue.t>Ue.dur+(Ue.type==="road"?8:0)||Ue.type==="road"&&Ue.anchor&&X.s>Ue.anchor.s+24)&&je();let Re=we.group.position,it=Ue.type;if(it==="chase"||it==="eye"){let rt=ph[it==="eye"?2:0];$d=it==="eye",Ee.at(X.s-rt.back,St),Ee.at(X.s+rt.ahead,Ft),Jn.set(St.x+St.rx*X.u*rt.cu-Oi,St.y+rt.up,St.z+St.rz*X.u*rt.cu-zi),cr.set(Ft.x+Ft.rx*X.u*rt.lu-Oi,Ft.y+rt.lookY,Ft.z+Ft.rz*X.u*rt.lu-zi)}else if(it==="side"){Ee.at(X.s+1.5,St);let rt=Dt(X.s),Tt=rt.city+rt.sakura>.5,qt=Fn(X.s,"rw"),Yt=Ue.sideSign>0?qt+(Tt?1.45:3.4):-(qt+1.5),Jt=St.y+Js(X.s+1.5,Yt,St.y,qt);Jn.set(St.x+St.rx*Yt-Oi,Math.max(Jt+1.55,St.y+1.25),St.z+St.rz*Yt-zi),cr.set(Re.x+mt.fx*2.5,Re.y+.9,Re.z+mt.fz*2.5),jo=4}else if(it==="road"&&Ue.anchor)Jn.set(Ue.anchor.x-Oi,Ue.anchor.y,Ue.anchor.z-zi),cr.set(Re.x,Re.y+.85,Re.z),jo=30;else{Ee.at(X.s-20,St),Ee.at(X.s+34,Ft);let rt=14+Math.min(Ue.t,20)*.35;Jn.set(St.x+St.rx*X.u*.4-Oi,St.y+rt,St.z+St.rz*X.u*.4-zi),cr.set(Ft.x-Oi,Ft.y+1,Ft.z-zi),jo=3}}else{let Re=ph[X.cam];Ee.at(X.s-Re.back,St),Ee.at(X.s+Re.ahead,Ft);let it=X.u*Re.cu,rt=it+(Re.side||0);Jn.set(St.x+St.rx*rt-Oi,St.y+Re.up,St.z+St.rz*rt-zi),cr.set(Ft.x+Ft.rx*X.u*Re.lu-Oi,Ft.y+Re.lookY,Ft.z+Ft.rz*X.u*Re.lu-zi)}we.group.visible=!$d,X.cam===3?d.up.set(mt.fx,0,mt.fz):d.up.set(0,1,0),rr||(Ls.copy(Jn),ps.copy(cr),rr=!0);let Kd=1+Math.max(0,X.speed-12)/12;Ls.lerp(Jn,1-Math.exp(-nt*jo*Kd)),ps.lerp(cr,1-Math.exp(-nt*Math.min(jo,8)*Kd));{let Re=X.cam===3?0:Math.min(Zt((X.speed-16)*.22,0,11),Math.max(0,84-pn));We+=(Re-We)*Math.min(1,nt*1.5),Math.abs(d.fov-(pn+We))>.02&&(d.fov=pn+We,d.updateProjectionMatrix())}d.position.copy(Ls),d.lookAt(ps),ot.has("yaw")&&d.rotateY(parseFloat(ot.get("yaw"))*Math.PI/180),ot.has("pitch")&&d.rotateX(parseFloat(ot.get("pitch"))*Math.PI/180),Ur.set(mt.fx,0,mt.fz),Fi.set(mt.rx,0,mt.rz);{let Re=we.group.position,it=d.position.x-Re.x,rt=d.position.z-Re.z,Tt=X.cam===4&&Ue.type!=="chase"&&Ue.type!=="eye",qt=X.s+it*mt.fx+rt*mt.fz-(Tt?10:0),Yt=Tt||hh?40:Math.tan(d.fov*Math.PI/360)*d.aspect*1.08;J.update(Ee,qt,X.u+it*mt.rx+rt*mt.rz,le.origin.x,le.origin.z,Fn(X.s,"rw"),Yt),X.grass||J.hide()}let $t=Dt(X.s),mh=1+.25*ie.bright*(1-lt);_.color.copy(ie.sunCol),_.intensity=ie.sunI/mh;{let Re=ie.lightDir;if(f.angleTo(Re)>.1){let Dn=0;if(ye&&!X.todPaused)for(let ei=1;ei<=60&&!(Cd(X.tod+ei*.001,A).angleTo(Re)>.09);ei++)Dn=ei;Cd(X.tod+Dn*.001,f),C=P=0}v.crossVectors(y,f).normalize(),M.crossVectors(f,v),w.set(we.group.position.x+mt.fx*26,we.group.position.y,we.group.position.z+mt.fz*26),_.target.position.copy(w),_.position.copy(w).addScaledVector(Re,200);let it=2*b/_.shadow.mapSize.x,rt=f.x/f.y-Re.x/Re.y,Tt=f.z/f.y-Re.z/Re.y;it!==L&&(L=it,C=P=0);{let Dn=Math.round(we.group.position.y);if(R===null)R=Dn;else if(Math.abs(we.group.position.y-R)>3){let ei=Dn-R;C-=ei*(rt*v.x+Tt*v.z),P-=ei*(rt*M.x+Tt*M.z),R=Dn}}let qt=le.origin.x,Yt=le.origin.z,Jt=w.dot(v)+qt*v.x+Yt*v.z-C,ai=w.dot(M)+qt*M.x+Yt*M.z-P;w.addScaledVector(v,Math.round(Jt/it)*it-Jt).addScaledVector(M,Math.round(ai/it)*it-ai),T.copy(w),S.copy(w).addScaledVector(f,200),x.set(1,rt,0,-R*rt,0,1,0,0,0,Tt,1,-R*Tt,0,0,0,1)}V.target.position.set(we.group.position.x,we.group.position.y+.9,we.group.position.z),V.position.copy(V.target.position).addScaledVector(ie.lightDir,12),O.color.copy(ie.hemiSky),O.groundColor.copy(ie.hemiGround),O.intensity=ie.hemiI/mh;{let Re=(1-ie.night)*(1-Gn);if(Re>.001){d.getWorldDirection(Q);let it=Q.x,rt=Q.z,Tt=Math.hypot(it,rt)||1,qt=ie.sunDir,Yt=0;for(let ai=-2;ai<=2;ai++){let Dn=ai*.3,ei=Math.cos(Dn),ur=Math.sin(Dn),Br=(it*ei-rt*ur)/Tt,Or=(it*ur+rt*ei)/Tt,Qo=Math.max(0,Br*qt.x+Or*qt.z),zr=Qo*Qo;Yt+=zr*zr*zr}let Jt=Yt/5*(.1+.35*ie.warm)*1.4*Re*ue;ie.fog.r+=ie.sunCol.r*Jt,ie.fog.g+=ie.sunCol.g*Jt,ie.fog.b+=ie.sunCol.b*Jt}}m.fog.color.copy(ie.fog);let Jd=($t.city*.0022+$t.sakura*.0019+$t.coast*.0011+$t.country*.0014+$t.mountain*.0017+$t.snow*.0021)*(1+ie.night*.25);m.fog.near=Jd*(1+.55*Gn+.45*vs),m.fog.far=le.ahead*.92,ze.uSkyHor.value.copy(ie.horizon),ze.uSkyZen.value.copy(ie.zenith),ze.uTime.value=ln,ze.uWet.value=Ae*(1-$t.snow),ze.uSakWet.value=G,Bi=Math.max(ze.uWet.value,ze.uSakWet.value*$t.sakura)*(1-lt);{let Re=(ze.uWet.value>.04||ze.uSakWet.value*Math.max($t.sakura,om(X.s+120,"sakura"))>.04)&&n!=="low"&&lt<.5&&ve!=="0";if(Fe.refl.enabled=Re&&ve!=="taps",ze.uReflOn.value=Re&&ve!=="copy"?1:0,Re){d.getWorldDirection(F),F.y=0,F.normalize(),he.copy(d.position).addScaledVector(F,1e4).project(d),ze.uHorizon.value=he.y*.5+.5;let it=Math.max(.5,d.position.y-we.group.position.y);ze.uReflK.value=Zt(1-2*it/(5+it),.05,1)}}ze.uOrigin.value.set(le.origin.x,le.origin.z),ze.uWind.value=1+.8*vs,ze.uCloudSh.value=(1-Gn)*wt(.04,.3,ie.sunEl)*(1-ie.night),ze.uCloudSh.value>.001&&ce.update(e,d.position.x,d.position.z,le.origin.x,le.origin.z);let pi=Ce.material.uniforms;if(pi.uBright.value=ie.bright,pi.uNight.value=ie.night,pi.uWarm.value=ie.warm,pi.uTime.value=ln,pi.uCirrusCol.value.copy(ie.cLit).lerp(ie.horizon,.25),pi.uCirrus.value=.6*(1-Gn)*(1-.65*wt(.4,.9,ie.night)),pi.uOvercast.value=Gn,pi.uMilky.value=wt(.55,.95,ie.night)*(1-Gn),ie.night>.65&&Gn<.3&&Vn.p<0&&(Vn.next-=nt)<0){let Re=Math.atan2(mt.fx,mt.fz)+(Math.random()-.5)*1.5,it=.45+Math.random()*.6,rt=.22+Math.random()*.2,Tt=(Math.random()-.5)*.6,qt=(Yt,Jt)=>new H(Math.cos(Yt)*Math.sin(Jt),Math.sin(Yt),Math.cos(Yt)*Math.cos(Jt));Vn.a.copy(qt(it,Re)),Vn.b.copy(qt(it-rt,Re+Tt)),Vn.p=0,Vn.next=ot.has("meteors")?1:6+Math.random()*20}Vn.p>=0&&(Vn.p+=nt/.85,Vn.p>1.3&&(Vn.p=-1)),pi.uMetP.value=Vn.p,pi.uMetA.value.copy(Vn.a),pi.uMetB.value.copy(Vn.b),pi.uDeckLit.value.copy(ie.horizon).lerp(ie.cLit,.35),pi.uDeckDark.value.copy(ie.zenith).lerp(ie.horizon,.25).multiplyScalar(.82),Ce.position.copy(d.position);{let Re=!!be&&(X.pclouds!==0||!j);be&&(be.mesh.visible=Re,Re&&be.update(d,nt)),j&&(j.group.visible=!Re,Re||j.update(d.position,nt))}let y1=ee&&X.band!==0?ee.update(d,$s(X.s+200),Math.max(1,d.position.y-mt.y+.45),m.fog.near,m.fog.far):0;ee&&X.band===0&&(ee.mesh.visible=!1),Se.update(d.position,Math.max($t.snow,Dt(X.s+600).snow*.7),1-y1);let Al=0;for(let Re of[-150,0,250,500,800])Al=Math.max(Al,Dt(X.s+Re).coast);ke.mesh.visible=Al>.001,ke.update(d.position,ln,Jd*.8,wt(0,.35,Al),Fe.grade.uniforms),$.uniforms.uTime.value=ln,$.uniforms.uFogD.value=m.fog.near,$.uniforms.uNight.value=ie.night,$.uniforms.uSpecK.value=1-ie.overcast*.85,ze.uSunDir.value.copy(ie.lightDir),ze.uSunCol.value.copy(ie.sunCol);let wi=wt(.15,.8,ie.night);W.atlas.emissiveIntensity=.1+wi*1.05,ze.uBacklit.value=te*1.6*(1-Gn)*(1-ie.night)*wt(0,.08,ie.sunEl)*(1-wt(.25,.55,ie.sunEl))*(1-lt),ze.uGhShade.value.set(Rt(.8,.3,ie.bright),Rt(.8,.85,ie.bright),Rt(.8,1.7,ie.bright)),bi.tex&&bi.uFieldC.value.set(Rt(Oe[0],Ne[0],ie.bright),Rt(Oe[1],Ne[1],ie.bright),Rt(Oe[2],Ne[2],ie.bright)),ze.uBlShade.value.set(Rt(I[0],N[0],ie.bright),Rt(I[1],N[1],ie.bright),Rt(I[2],N[2],ie.bright)),ze.uLightsOn.value=Y>=0?Y:Math.max(wt(.02,.75,ie.night),.3*Gn),W.lamp.color.setRGB(.9,.86,.74).lerp(p1,wi),W.pool.opacity=wi*.42*(1+.8*Ae);{let Re=we.group.position,it=we.lamps,rt=Math.max(wi,lt),Tt=0,qt=0,Yt=0,Jt=-1e3,ai=0,Dn=0,ei=-1e3,ur=0,Br=900,Or=900;if(rt>.01){let e0=Math.floor(X.s/Ht);for(let gh=e0-1;gh<=e0+1;gh++){let Cl=le.chunks.get(gh);if(!Cl||!Cl.lamps)continue;let ea=Cl.lamps,t0=Cl.group.position;for(let kr=0;kr<ea.length;kr+=4){let vh=ea[kr]+t0.x,xh=ea[kr+1],yh=ea[kr+2]+t0.z,_h=(vh-Re.x)**2+(xh-Re.y)**2+(yh-Re.z)**2,Pl=ea[kr+3]/(1+.045*_h);Pl>Tt?(qt=Tt,Or=Br,Dn=Yt,ei=Jt,ur=ai,Tt=Pl,Br=_h,Yt=vh,Jt=xh,ai=yh):Pl>qt&&(qt=Pl,Or=_h,Dn=vh,ei=xh,ur=yh)}}d.updateMatrixWorld()}let Qo=rt*Tt*(1+.045*Br)*(1-wt(18,30,Math.sqrt(Br))),zr=rt*qt*(1+.045*Or)*(1-wt(18,30,Math.sqrt(Or)));it[0].set(Yt,Jt,ai,1).applyMatrix4(d.matrixWorldInverse).w=Qo,it[1].set(Dn,ei,ur,1).applyMatrix4(d.matrixWorldInverse).w=zr,we.lampCol.setRGB(1,.8-.32*lt,.52-.38*lt),Ni.uLampW.value[0].set(Yt,Jt,ai,Qo),Ni.uLampW.value[1].set(Dn,ei,ur,zr),Ni.uLampCol.value.copy(we.lampCol),we.head.getWorldPosition(Ni.uHeadPos.value),we.head.target.getWorldPosition(Q),Ni.uHeadDir.value.copy(Q).sub(Ni.uHeadPos.value).normalize(),Ni.uHeadI.value=we.head.intensity/60}W.pool.visible=W.pool.opacity>.003,le.lod(X.s,tt,wi>.15,Vt),ze.uNight.value=wi,Fe.bloom.strength=Rt(.32,.55,wi),Fe.bloom.threshold=Rt(1.35,.95,wi),Fe.bloom.radius=Rt(.55,.35,wi);{let Re=Math.max(wi,lt,wt(.25,.6,ie.warm)*(1-Gn));Fe.bloom.enabled=D&&Re>.02,Fe.bloom.strength*=Math.min(1,Re*4)}e.toneMappingExposure=Rt(1,1.15,wi)*(1+.35*lt)*mh,Jn.copy(d.position).addScaledVector(ie.sunDir,1e3).project(d);let Ds=Fe.grade.uniforms,_1=Jn.z<1?1:0,b1=Math.max(Math.abs(Jn.x),Math.abs(Jn.y));Ds.uSun.value.set(Jn.x*.5+.5,Jn.y*.5+.5),Ds.uSunVis.value=_1*(1-wt(1,1.9,b1))*wt(-.02,.15,ie.sunEl)*(1-ie.night)*(1-Gn)*(1-lt),Ds.uSat.value=1.22-.24*Gn,Ds.uVig.value=.55-.43*ie.bright,Ds.uLo.value.set(-.014+.026*ie.bright,0,.03),Ds.uDay.value=Xt(),Ds.uWarm.value=ie.warm,Ds.uTime.value=ln,Ie.update(d.position,ln,vs*(1-lt)*(1-$t.snow),Xt());{let Re=Ii(X.s+190),it=($t.city+$t.country+$t.coast)*(1-Gn)*(1-Ae)*wt(.6,.9,ie.sunEl)*(X.mirage??1)*(Re&&Math.abs(X.s+190-Re.s)<330?0:1);Le.update(Ee,X.s,le.origin.x,le.origin.z,Fn(X.s+150,"rw"),it,ln,ie.horizon)}{let Re=Zt($t.snow+$t.mountain*.6*Math.max(ie.night,1-wt(.27,.36,X.tod)),0,1)*(1-lt);Be.copy(ie.fog).multiplyScalar(.92),et.copy(ie.sunCol).multiplyScalar(Math.min(1,ie.sunI/3)*(1-Gn)*.6);let it=Math.cos(we.group.rotation.y),rt=Math.sin(we.group.rotation.y),Tt=we.group.position;at.set(Tt.x-1.75*rt,Tt.y+.95,Tt.z-1.75*it,Math.max(ie.night,lt)*(.5+1.2*Pt.brake)),Te.update(nt,we.group,X.speed,ze.uWet.value*(1-lt),$t.snow*(1-lt),Re,Be,et,at,d.position,X.spray)}Ye.update(d.position,ln,$t.snow*(.3+.7*Gn)*(1-lt),Xt()),Z.setFog(m.fog.near),Z.update(nt,ln,d.position,Ur,Fi,$t,Xt(),vs,we.group.position);let M1=performance.now();Je.update(nt,ln,d.position,Ur,Fi,$t.sakura*(1-lt),mt.y,wi,($t.country+$t.sakura*.4)*(1-vs)*(1-lt),$t.mountain*(1-lt));let S1=performance.now();if(an){Ee.at(en,Ft);let Re=Math.hypot(Ft.x-le.origin.x-d.position.x,Ft.z-le.origin.z-d.position.z),it=ae.st.active?ae.group.position.distanceTo(d.position):1e9,rt=X.speed/15;an.update(rt<1.5?rt:1.5+(rt-1.5)*.4,$t,Xt(),{rush:Zt((X.speed-25)/40,0,1),bell:tn?Math.pow(Zt(1-Re/260,0,1),1.5):0,train:Math.pow(Zt(1-it/230,0,1),2),rain:vs*(1-lt)*(1-$t.snow),wetRoad:ze.uWet.value*(1-lt),speed:X.speed,load:Zt(Pt.lon/3,0,1),roof:X.cam!==2,tunnel:lt,water:(()=>{let Tt=Pi(X.s);return Math.max(Tt?1-wt(12,150,Math.abs(X.s-Tt.s)):0,$t.mountain*.45)})(),dusk:ie.warm*(X.tod>.5?1:.3)})}fh(sn(X.s+40)),xt&&(e.info.autoReset=!1,e.info.reset());let Rl=null;xt&&xt.tq&&(Rl=xt.gl.createQuery(),xt.gl.beginQuery(xt.tq.TIME_ELAPSED_EXT,Rl));let jd=performance.now();Fe.composer.render(nt);let Qd=performance.now();if(Rl){let Re=xt.gl;for(Re.endQuery(xt.tq.TIME_ELAPSED_EXT),xt.pend.push(Rl);xt.pend.length&&Re.getQueryParameter(xt.pend[0],Re.QUERY_RESULT_AVAILABLE);){let it=xt.pend.shift(),rt=Re.getQueryParameter(it,Re.QUERY_RESULT);Re.deleteQuery(it),Re.getParameter(xt.tq.GPU_DISJOINT_EXT)||(xt.gpu=rt/1e6,xt.gpuN++,xt.gpuSum+=xt.gpu,xt.gpu>xt.gpuMax&&(xt.gpuMax=xt.gpu))}}let Fr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Fr.world=Fr.world*.95+(Zd-Yd)*.05,Fr.parts=Fr.parts*.95+(S1-M1)*.05,Fr.render=Fr.render*.95+(Qd-jd)*.05,Ti=Ti*.95+(performance.now()-yt)*.05,window.__ft=Ti,xt){let Re=e.info,it=performance.now()-yt,rt={t:+ln.toFixed(2),s:Math.round(X.s),total:+it.toFixed(1),world:+(Zd-Yd).toFixed(1),render:+(Qd-jd).toFixed(1),gpu:+(xt.gpu||0).toFixed(1),progs:Re.programs.length-xt.progs,geos:Re.memory.geometries-xt.geos,tex:Re.memory.textures-xt.tex,calls:Re.render.calls,tris:Re.render.triangles};rt.progs>0&&ye&&(rt.newProgs=Re.programs.slice(-rt.progs).map(Tt=>(Tt.name||"")+":"+String(Tt.cacheKey).slice(0,60))),xt.progs=Re.programs.length,xt.geos=Re.memory.geometries,xt.tex=Re.memory.textures,xt.frames++,xt.sum+=it,it>xt.max&&(xt.max=it),it>12&&ye&&xt.spikes.push(rt),xt.last=rt}if((Tl+=nt)>.25){Tl=0,$o.textContent=Math.round(X.speed*3.6),Ml.textContent=(X.dist/1e3).toFixed(1);let Re=Math.floor(X.tod*1440);Sl.textContent=`${String(Math.floor(Re/60)).padStart(2,"0")}:${String(Re%60).padStart(2,"0")}`}gs++,ye&&gs>150&&nt>.03?Lt+=nt:Lt=Math.max(0,Lt-nt*.5),Lt>3&&!ot.has("q")&&(Lt=0,jn())}window.__dbg={renderer:e,st:X,scene:m,camera:d,world:le,TOD:ie,KEYS:Bo,X:Ke,train:ae,weather:de,U:ze,birds:Z,cine:Ue,post:Fe,car:we,sun:_,M:W,clouds:j,pclouds:be,band:ee,sky:Ce,mountains:Se,shadowDir:f,CM:Pt,spray:Te,grass:J,get audio(){return an}},Zo(""),or.classList.add("ready"),ot.has("auto")&&Jo(),requestAnimationFrame(qd)}lS().catch(i=>{console.error(i),Zo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
