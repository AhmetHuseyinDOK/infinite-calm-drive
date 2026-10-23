var jd=0,Lh=1,Qd=2;var Js=1,e0=2,to=3,ws=0,Ln=1,wn=2,Gn=0,no=1,ss=2,Dh=3,Nh=4,t0=5;var js=100,n0=101,i0=102,s0=103,r0=104,o0=200,a0=201,l0=202,c0=203,Uh=204,Fh=205,u0=206,h0=207,f0=208,d0=209,p0=210,m0=211,g0=212,v0=213,x0=214,Nl=0,Ul=1,Fl=2,Or=3,Bl=4,Ol=5,zl=6,kl=7,Bh=0,_0=1,y0=2,Ii=0,Oh=1,zh=2,kh=3,Hh=4,Vh=5,Gh=6,Ea=7;var Wh=300,As=301,Qs=302,xc=303,_c=304,wa=306,zr=1e3,zi=1001,Hl=1002,pn=1003,M0=1004;var Aa=1005;var Bt=1006,yc=1007;var Dn=1008;var zn=1009,Xh=1010,qh=1011,io=1012,Mc=1013,Li=1014,gi=1015,vn=1016,bc=1017,Sc=1018,so=1020,Yh=35902,Zh=35899,$h=1021,Kh=1022,Jn=1023,ki=1026,Rs=1027,er=1028,Tc=1029,Cs=1030,Ec=1031;var wc=1033,Ra=33776,Ca=33777,Pa=33778,Ia=33779,Ac=35840,Rc=35841,Cc=35842,Pc=35843,Ic=36196,Lc=37492,Dc=37496,Nc=37488,Uc=37489,La=37490,Fc=37491,Bc=37808,Oc=37809,zc=37810,kc=37811,Hc=37812,Vc=37813,Gc=37814,Wc=37815,Xc=37816,qc=37817,Yc=37818,Zc=37819,$c=37820,Kc=37821,Jc=36492,jc=36494,Qc=36495,eu=36283,tu=36284,Da=36285,nu=36286;var Zo=2300,Vl=2301,Il=2302,yh=2303,Mh=2400,bh=2401,Sh=2402;var b0=3200;var iu=0,S0=1,oi="",sn="srgb",$o="srgb-linear",Ko="linear",Dt="srgb";var Ll=7680;var T0=519,E0=512,w0=513,A0=514,su=515,R0=516,C0=517,ru=518,P0=519,I0=35044;var Jh="300 es",Ci=2e3,kr=2001;function fg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function L0(){let i=Hr("canvas");return i.style.display="block",i}var vd={},Vr=null;function jh(...i){let e="THREE."+i.shift();Vr?Vr("log",e,...i):console.log(e,...i)}function D0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function at(...i){i=D0(i);let e="THREE."+i.shift();if(Vr)Vr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ht(...i){i=D0(i);let e="THREE."+i.shift();if(Vr)Vr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ys(...i){let e=i.join(" ");e in vd||(vd[e]=!0,at(...i))}function N0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var U0={[Nl]:Ul,[Fl]:zl,[Bl]:kl,[Or]:Ol,[Ul]:Nl,[zl]:Fl,[kl]:Bl,[Ol]:Or},Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yu=Math.PI/180,Jo=180/Math.PI;function ro(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function pg(i,e){return(i%e+e)%e}function Zu(i,e,t){return(1-t)*i+t*e}function Bo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rf=class rf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rf.prototype.isVector2=!0;var Ie=rf,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],u=n[s+1],f=n[s+2],p=n[s+3],m=r[o+0],v=r[o+1],_=r[o+2],S=r[o+3];if(p!==S||c!==m||u!==v||f!==_){let l=c*m+u*v+f*_+p*S;l<0&&(m=-m,v=-v,_=-_,S=-S,l=-l);let h=1-a;if(l<.9995){let d=Math.acos(l),x=Math.sin(d);h=Math.sin(h*d)/x,a=Math.sin(a*d)/x,c=c*h+m*a,u=u*h+v*a,f=f*h+_*a,p=p*h+S*a}else{c=c*h+m*a,u=u*h+v*a,f=f*h+_*a,p=p*h+S*a;let d=1/Math.sqrt(c*c+u*u+f*f+p*p);c*=d,u*=d,f*=d,p*=d}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],u=n[s+2],f=n[s+3],p=r[o],m=r[o+1],v=r[o+2],_=r[o+3];return e[t]=a*_+f*p+c*v-u*m,e[t+1]=c*_+f*m+u*p-a*v,e[t+2]=u*_+f*v+a*m-c*p,e[t+3]=f*_-a*p-c*m-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),f=a(s/2),p=a(r/2),m=c(n/2),v=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=m*f*p+u*v*_,this._y=u*v*p-m*f*_,this._z=u*f*_+m*v*p,this._w=u*f*p-m*v*_;break;case"YXZ":this._x=m*f*p+u*v*_,this._y=u*v*p-m*f*_,this._z=u*f*_-m*v*p,this._w=u*f*p+m*v*_;break;case"ZXY":this._x=m*f*p-u*v*_,this._y=u*v*p+m*f*_,this._z=u*f*_+m*v*p,this._w=u*f*p-m*v*_;break;case"ZYX":this._x=m*f*p-u*v*_,this._y=u*v*p+m*f*_,this._z=u*f*_-m*v*p,this._w=u*f*p+m*v*_;break;case"YZX":this._x=m*f*p+u*v*_,this._y=u*v*p+m*f*_,this._z=u*f*_-m*v*p,this._w=u*f*p-m*v*_;break;case"XZY":this._x=m*f*p-u*v*_,this._y=u*v*p-m*f*_,this._z=u*f*_+m*v*p,this._w=u*f*p+m*v*_;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],f=t[6],p=t[10],m=n+a+p;if(m>0){let v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(f-c)*v,this._y=(r-u)*v,this._z=(o-s)*v}else if(n>a&&n>p){let v=2*Math.sqrt(1+n-a-p);this._w=(f-c)/v,this._x=.25*v,this._y=(s+o)/v,this._z=(r+u)/v}else if(a>p){let v=2*Math.sqrt(1+a-n-p);this._w=(r-u)/v,this._x=(s+o)/v,this._y=.25*v,this._z=(c+f)/v}else{let v=2*Math.sqrt(1+p-n-a);this._w=(o-s)/v,this._x=(r+u)/v,this._y=(c+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+o*a+s*u-r*c,this._y=s*f+o*c+r*a-n*u,this._z=r*f+o*u+n*c-s*a,this._w=o*f-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let u=Math.acos(a),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},of=class of{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*n),f=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*u+o*p-a*f,this.y=n+c*f+a*u-r*p,this.z=s+c*p+r*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};of.prototype.isVector3=!0;var z=of,$u=new z,xd=new mn,af=class af{constructor(e,t,n,s,r,o,a,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u)}set(e,t,n,s,r,o,a,c,u){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],f=n[4],p=n[7],m=n[2],v=n[5],_=n[8],S=s[0],l=s[3],h=s[6],d=s[1],x=s[4],g=s[7],y=s[2],T=s[5],E=s[8];return r[0]=o*S+a*d+c*y,r[3]=o*l+a*x+c*T,r[6]=o*h+a*g+c*E,r[1]=u*S+f*d+p*y,r[4]=u*l+f*x+p*T,r[7]=u*h+f*g+p*E,r[2]=m*S+v*d+_*y,r[5]=m*l+v*x+_*T,r[8]=m*h+v*g+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-n*r*f+n*a*c+s*r*u-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],p=f*o-a*u,m=a*c-f*r,v=u*r-o*c,_=t*p+n*m+s*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=p*S,e[1]=(s*u-f*n)*S,e[2]=(a*n-s*o)*S,e[3]=m*S,e[4]=(f*t-s*c)*S,e[5]=(s*r-a*t)*S,e[6]=v*S,e[7]=(n*c-u*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};af.prototype.isMatrix3=!0;var ft=af,Ku=new ft,_d=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mg(){let i={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Dt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(s.r=Fr(s.r),s.g=Fr(s.g),s.b=Fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$o]:{primaries:e,whitePoint:n,transfer:Ko,toXYZ:_d,fromXYZ:yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:Dt,toXYZ:_d,fromXYZ:yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var bt=mg();function ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mr,Gl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=Hr("canvas")),Mr.width=e.width,Mr.height=e.height;let s=Mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ns(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ns(t[n]/255)*255):t[n]=ns(t[n]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gg=0,Gr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ju(s[o].image)):r.push(Ju(s[o]))}else r=Ju(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ju(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var vg=0,ju=new z,On=class i extends Hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zi,s=zi,r=Bt,o=Dn,a=Jn,c=zn,u=i.DEFAULT_ANISOTROPY,f=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=ro(),this.name="",this.source=new Gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Wh;On.DEFAULT_ANISOTROPY=1;var lf=class lf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],f=c[4],p=c[8],m=c[1],v=c[5],_=c[9],S=c[2],l=c[6],h=c[10];if(Math.abs(f-m)<.01&&Math.abs(p-S)<.01&&Math.abs(_-l)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+S)<.1&&Math.abs(_+l)<.1&&Math.abs(u+v+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(u+1)/2,g=(v+1)/2,y=(h+1)/2,T=(f+m)/4,E=(p+S)/4,M=(_+l)/4;return x>g&&x>y?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=E/n):g>y?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=T/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=E/r,s=M/r),this.set(n,s,r,t),this}let d=Math.sqrt((l-_)*(l-_)+(p-S)*(p-S)+(m-f)*(m-f));return Math.abs(d)<.001&&(d=1),this.x=(l-_)/d,this.y=(p-S)/d,this.z=(m-f)/d,this.w=Math.acos((u+v+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lf.prototype.isVector4=!0;var mt=lf,Wl=class extends Hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new On(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends Wl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},jo=class extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xl=class extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var vc=class vc{constructor(e,t,n,s,r,o,a,c,u,f,p,m,v,_,S,l){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u,f,p,m,v,_,S,l)}set(e,t,n,s,r,o,a,c,u,f,p,m,v,_,S,l){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=u,h[6]=f,h[10]=p,h[14]=m,h[3]=v,h[7]=_,h[11]=S,h[15]=l,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let m=o*f,v=o*p,_=a*f,S=a*p;t[0]=c*f,t[4]=-c*p,t[8]=u,t[1]=v+_*u,t[5]=m-S*u,t[9]=-a*c,t[2]=S-m*u,t[6]=_+v*u,t[10]=o*c}else if(e.order==="YXZ"){let m=c*f,v=c*p,_=u*f,S=u*p;t[0]=m+S*a,t[4]=_*a-v,t[8]=o*u,t[1]=o*p,t[5]=o*f,t[9]=-a,t[2]=v*a-_,t[6]=S+m*a,t[10]=o*c}else if(e.order==="ZXY"){let m=c*f,v=c*p,_=u*f,S=u*p;t[0]=m-S*a,t[4]=-o*p,t[8]=_+v*a,t[1]=v+_*a,t[5]=o*f,t[9]=S-m*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let m=o*f,v=o*p,_=a*f,S=a*p;t[0]=c*f,t[4]=_*u-v,t[8]=m*u+S,t[1]=c*p,t[5]=S*u+m,t[9]=v*u-_,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let m=o*c,v=o*u,_=a*c,S=a*u;t[0]=c*f,t[4]=S-m*p,t[8]=_*p+v,t[1]=p,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=v*p+_,t[10]=m-S*p}else if(e.order==="XZY"){let m=o*c,v=o*u,_=a*c,S=a*u;t[0]=c*f,t[4]=-p,t[8]=u*f,t[1]=m*p+S,t[5]=o*f,t[9]=v*p-_,t[2]=_*p-v,t[6]=a*f,t[10]=S*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xg,e,_g)}lookAt(e,t,n){let s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ps.crossVectors(n,ni),ps.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ps.crossVectors(n,ni)),ps.normalize(),rl.crossVectors(ni,ps),s[0]=ps.x,s[4]=rl.x,s[8]=ni.x,s[1]=ps.y,s[5]=rl.y,s[9]=ni.y,s[2]=ps.z,s[6]=rl.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],f=n[1],p=n[5],m=n[9],v=n[13],_=n[2],S=n[6],l=n[10],h=n[14],d=n[3],x=n[7],g=n[11],y=n[15],T=s[0],E=s[4],M=s[8],b=s[12],w=s[1],R=s[5],P=s[9],I=s[13],C=s[2],L=s[6],N=s[10],O=s[14],V=s[3],D=s[7],H=s[11],k=s[15];return r[0]=o*T+a*w+c*C+u*V,r[4]=o*E+a*R+c*L+u*D,r[8]=o*M+a*P+c*N+u*H,r[12]=o*b+a*I+c*O+u*k,r[1]=f*T+p*w+m*C+v*V,r[5]=f*E+p*R+m*L+v*D,r[9]=f*M+p*P+m*N+v*H,r[13]=f*b+p*I+m*O+v*k,r[2]=_*T+S*w+l*C+h*V,r[6]=_*E+S*R+l*L+h*D,r[10]=_*M+S*P+l*N+h*H,r[14]=_*b+S*I+l*O+h*k,r[3]=d*T+x*w+g*C+y*V,r[7]=d*E+x*R+g*L+y*D,r[11]=d*M+x*P+g*N+y*H,r[15]=d*b+x*I+g*O+y*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],f=e[2],p=e[6],m=e[10],v=e[14],_=e[3],S=e[7],l=e[11],h=e[15],d=c*v-u*m,x=a*v-u*p,g=a*m-c*p,y=o*v-u*f,T=o*m-c*f,E=o*p-a*f;return t*(S*d-l*x+h*g)-n*(_*d-l*y+h*T)+s*(_*x-S*y+h*E)-r*(_*g-S*T+l*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],u=e[6],f=e[10];return t*(o*f-a*u)-n*(r*f-a*c)+s*(r*u-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],p=e[9],m=e[10],v=e[11],_=e[12],S=e[13],l=e[14],h=e[15],d=t*a-n*o,x=t*c-s*o,g=t*u-r*o,y=n*c-s*a,T=n*u-r*a,E=s*u-r*c,M=f*S-p*_,b=f*l-m*_,w=f*h-v*_,R=p*l-m*S,P=p*h-v*S,I=m*h-v*l,C=d*I-x*P+g*R+y*w-T*b+E*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=(a*I-c*P+u*R)*L,e[1]=(s*P-n*I-r*R)*L,e[2]=(S*E-l*T+h*y)*L,e[3]=(m*T-p*E-v*y)*L,e[4]=(c*w-o*I-u*b)*L,e[5]=(t*I-s*w+r*b)*L,e[6]=(l*g-_*E-h*x)*L,e[7]=(f*E-m*g+v*x)*L,e[8]=(o*P-a*w+u*M)*L,e[9]=(n*w-t*P-r*M)*L,e[10]=(_*T-S*g+h*d)*L,e[11]=(p*g-f*T-v*d)*L,e[12]=(a*b-o*R-c*M)*L,e[13]=(t*R-n*b+s*M)*L,e[14]=(S*x-_*y-l*d)*L,e[15]=(f*y-p*x+m*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,f=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,f*a+n,f*c-s*o,0,u*c-s*a,f*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,f=o+o,p=a+a,m=r*u,v=r*f,_=r*p,S=o*f,l=o*p,h=a*p,d=c*u,x=c*f,g=c*p,y=n.x,T=n.y,E=n.z;return s[0]=(1-(S+h))*y,s[1]=(v+g)*y,s[2]=(_-x)*y,s[3]=0,s[4]=(v-g)*T,s[5]=(1-(m+h))*T,s[6]=(l+d)*T,s[7]=0,s[8]=(_+x)*E,s[9]=(l-d)*E,s[10]=(1-(m+S))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=br.set(s[0],s[1],s[2]).length(),a=br.set(s[4],s[5],s[6]).length(),c=br.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ei.copy(this);let u=1/o,f=1/a,p=1/c;return Ei.elements[0]*=u,Ei.elements[1]*=u,Ei.elements[2]*=u,Ei.elements[4]*=f,Ei.elements[5]*=f,Ei.elements[6]*=f,Ei.elements[8]*=p,Ei.elements[9]*=p,Ei.elements[10]*=p,t.setFromRotationMatrix(Ei),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ci,c=!1){let u=this.elements,f=2*r/(t-e),p=2*r/(n-s),m=(t+e)/(t-e),v=(n+s)/(n-s),_,S;if(c)_=r/(o-r),S=o*r/(o-r);else if(a===Ci)_=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===kr)_=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ci,c=!1){let u=this.elements,f=2/(t-e),p=2/(n-s),m=-(t+e)/(t-e),v=-(n+s)/(n-s),_,S;if(c)_=1/(o-r),S=o/(o-r);else if(a===Ci)_=-2/(o-r),S=-(o+r)/(o-r);else if(a===kr)_=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};vc.prototype.isMatrix4=!0;var nt=vc,br=new z,Ei=new nt,xg=new z(0,0,0),_g=new z(1,1,1),ps=new z,rl=new z,ni=new z,Md=new nt,bd=new mn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],f=s[9],p=s[2],m=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,v),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Md,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bd.setFromEuler(this),this.setFromQuaternion(bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yg=0,Sd=new z,Sr=new mn,Ji=new nt,ol=new z,Oo=new z,Mg=new z,bg=new mn,Td=new z(1,0,0),Ed=new z(0,1,0),wd=new z(0,0,1),Ad={type:"added"},Sg={type:"removed"},Tr={type:"childadded",child:null},Qu={type:"childremoved",child:null},gn=class i extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new $n,n=new mn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new ft}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(Td,e)}rotateY(e){return this.rotateOnAxis(Ed,e)}rotateZ(e){return this.rotateOnAxis(wd,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Td,e)}translateY(e){return this.translateOnAxis(Ed,e)}translateZ(e){return this.translateOnAxis(wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ol.copy(e):ol.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Oo,ol,this.up):Ji.lookAt(ol,Oo,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),Sr.setFromRotationMatrix(Ji),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ad),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ad),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,bg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){let p=c[u];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),p=o(e.shapes),m=o(e.skeletons),v=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let u in a){let f=a[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new z(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tg={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let S of e.hand.values()){let l=t.getJointPose(S,n),h=this._getHandJoint(u,S);l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=l.radius),h.visible=l!==null}let f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=f.position.distanceTo(p.position),v=.02,_=.005;u.inputState.pinching&&m>v+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=v-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},al={h:0,s:0,l:0};function eh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=pg(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=eh(o,r,e+1/3),this.g=eh(o,r,e),this.b=eh(o,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let n=F0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return bt.workingToColorSpace(Bn.copy(this),e),Math.round(Mt(Bn.r*255,0,255))*65536+Math.round(Mt(Bn.g*255,0,255))*256+Math.round(Mt(Bn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,s=Bn.g,r=Bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,u,f=(a+o)/2;if(a===o)c=0,u=0;else{let p=o-a;switch(u=f<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=sn){bt.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,s=Bn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(al);let n=Zu(ms.h,al.h,t),s=Zu(ms.s,al.s,t),r=Zu(ms.l,al.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new Se;Se.NAMES=F0;var ea=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zs=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wi=new z,ji=new z,th=new z,Qi=new z,Er=new z,wr=new z,Rd=new z,nh=new z,ih=new z,sh=new z,rh=new mt,oh=new mt,ah=new mt,_s=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wi.subVectors(e,t),s.cross(wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wi.subVectors(s,t),ji.subVectors(n,t),th.subVectors(e,t);let o=wi.dot(wi),a=wi.dot(ji),c=wi.dot(th),u=ji.dot(ji),f=ji.dot(th),p=o*u-a*a;if(p===0)return r.set(0,0,0),null;let m=1/p,v=(u*c-a*f)*m,_=(o*f-a*c)*m;return r.set(1-v-_,_,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qi.x),c.addScaledVector(o,Qi.y),c.addScaledVector(a,Qi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return rh.setScalar(0),oh.setScalar(0),ah.setScalar(0),rh.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,n),ah.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rh,r.x),o.addScaledVector(oh,r.y),o.addScaledVector(ah,r.z),o}static isFrontFacing(e,t,n,s){return wi.subVectors(n,t),ji.subVectors(e,t),wi.cross(ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),wi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Er.subVectors(s,n),wr.subVectors(r,n),nh.subVectors(e,n);let c=Er.dot(nh),u=wr.dot(nh);if(c<=0&&u<=0)return t.copy(n);ih.subVectors(e,s);let f=Er.dot(ih),p=wr.dot(ih);if(f>=0&&p<=f)return t.copy(s);let m=c*p-f*u;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Er,o);sh.subVectors(e,r);let v=Er.dot(sh),_=wr.dot(sh);if(_>=0&&v<=_)return t.copy(r);let S=v*u-c*_;if(S<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(wr,a);let l=f*_-v*p;if(l<=0&&p-f>=0&&v-_>=0)return Rd.subVectors(r,s),a=(p-f)/(p-f+(v-_)),t.copy(s).addScaledVector(Rd,a);let h=1/(l+S+m);return o=S*h,a=m*h,t.copy(n).addScaledVector(Er,o).addScaledVector(wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},di=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(r,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),cl.subVectors(this.max,zo),Ar.subVectors(e.a,zo),Rr.subVectors(e.b,zo),Cr.subVectors(e.c,zo),gs.subVectors(Rr,Ar),vs.subVectors(Cr,Rr),Gs.subVectors(Ar,Cr);let t=[0,-gs.z,gs.y,0,-vs.z,vs.y,0,-Gs.z,Gs.y,gs.z,0,-gs.x,vs.z,0,-vs.x,Gs.z,0,-Gs.x,-gs.y,gs.x,0,-vs.y,vs.x,0,-Gs.y,Gs.x,0];return!lh(t,Ar,Rr,Cr,cl)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,Ar,Rr,Cr,cl))?!1:(ul.crossVectors(gs,vs),t=[ul.x,ul.y,ul.z],lh(t,Ar,Rr,Cr,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},es=[new z,new z,new z,new z,new z,new z,new z,new z],Ai=new z,ll=new di,Ar=new z,Rr=new z,Cr=new z,gs=new z,vs=new z,Gs=new z,zo=new z,cl=new z,ul=new z,Ws=new z;function lh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ws.fromArray(i,r);let a=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),c=e.dot(Ws),u=t.dot(Ws),f=n.dot(Ws);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>a)return!1}return!0}var dn=new z,hl=new Ie,Eg=0,Gt=class extends Hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=I0,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hl.fromBufferAttribute(this,t),hl.applyMatrix3(e),this.setXY(t,hl.x,hl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array),s=Zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array),s=Zn(s,this.array),r=Zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ta=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var na=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wg=new di,ko=new z,ch=new z,pi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);let t=ko.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ko,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(ch)),this.expandByPoint(ko.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ag=0,fi=new nt,uh=new gn,Pr=new z,ii=new di,Ho=new di,En=new z,vt=class i extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fg(e)?na:ta)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(ii.min,Ho.min),ii.expandByPoint(En),En.addVectors(ii.max,Ho.max),ii.expandByPoint(En)):(ii.expandByPoint(Ho.min),ii.expandByPoint(Ho.max))}ii.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)En.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(En));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)En.fromBufferAttribute(a,u),c&&(Pr.fromBufferAttribute(e,u),En.add(Pr)),s=Math.max(s,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new z,c[M]=new z;let u=new z,f=new z,p=new z,m=new Ie,v=new Ie,_=new Ie,S=new z,l=new z;function h(M,b,w){u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,b),p.fromBufferAttribute(n,w),m.fromBufferAttribute(r,M),v.fromBufferAttribute(r,b),_.fromBufferAttribute(r,w),f.sub(u),p.sub(u),v.sub(m),_.sub(m);let R=1/(v.x*_.y-_.x*v.y);isFinite(R)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(p,-v.y).multiplyScalar(R),l.copy(p).multiplyScalar(v.x).addScaledVector(f,-_.x).multiplyScalar(R),a[M].add(S),a[b].add(S),a[w].add(S),c[M].add(l),c[b].add(l),c[w].add(l))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let M=0,b=d.length;M<b;++M){let w=d[M],R=w.start,P=w.count;for(let I=R,C=R+P;I<C;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new z,g=new z,y=new z,T=new z;function E(M){y.fromBufferAttribute(s,M),T.copy(y);let b=a[M];x.copy(b),x.sub(y.multiplyScalar(y.dot(b))).normalize(),g.crossVectors(T,b);let R=g.dot(c[M])<0?-1:1;o.setXYZW(M,x.x,x.y,x.z,R)}for(let M=0,b=d.length;M<b;++M){let w=d[M],R=w.start,P=w.count;for(let I=R,C=R+P;I<C;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,u=new z,f=new z,p=new z;if(e)for(let m=0,v=e.count;m<v;m+=3){let _=e.getX(m+0),S=e.getX(m+1),l=e.getX(m+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,l),f.subVectors(o,r),p.subVectors(s,r),f.cross(p),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,l),a.add(f),c.add(f),u.add(f),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(l,u.x,u.y,u.z)}else for(let m=0,v=t.count;m<v;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,r),p.subVectors(s,r),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(a,c){let u=a.array,f=a.itemSize,p=a.normalized,m=new u.constructor(c.length*f),v=0,_=0;for(let S=0,l=c.length;S<l;S++){a.isInterleavedBufferAttribute?v=c[S]*a.data.stride+a.offset:v=c[S]*f;for(let h=0;h<f;h++)m[_++]=u[v++]}return new Gt(m,f,p)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],u=e(c,n);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let c=[],u=r[a];for(let f=0,p=u.length;f<p;f++){let m=u[f],v=e(m,n);c.push(v)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],f=[];for(let p=0,m=u.length;p<m;p++){let v=u[p];f.push(v.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let f=s[u];this.setAttribute(u,f.clone(t))}let r=e.morphAttributes;for(let u in r){let f=[],p=r[u];for(let m=0,v=p.length;m<v;m++)f.push(p[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,f=o.length;u<f;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hh=new z,Rg=new z,Cg=new ft,Ri=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hh.subVectors(n,t).cross(Rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(hh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cg.getNormalMatrix(e),s=this.coplanarPoint(hh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pg=0,Vi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=no,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Fh,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ri().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ts=new z,fh=new z,fl=new z,dl=new z,Xr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fh.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),dl.copy(this.origin).sub(fh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fl),a=dl.dot(this.direction),c=-dl.dot(fl),u=dl.lengthSq(),f=Math.abs(1-o*o),p,m,v,_;if(f>0)if(p=o*c-a,m=o*a-c,_=r*f,p>=0)if(m>=-_)if(m<=_){let S=1/f;p*=S,m*=S,v=p*(p+o*m+2*a)+m*(o*p+m+2*c)+u}else m=r,p=Math.max(0,-(o*m+a)),v=-p*p+m*(m+2*c)+u;else m=-r,p=Math.max(0,-(o*m+a)),v=-p*p+m*(m+2*c)+u;else m<=-_?(p=Math.max(0,-(-o*r+a)),m=p>0?-r:Math.min(Math.max(-r,-c),r),v=-p*p+m*(m+2*c)+u):m<=_?(p=0,m=Math.min(Math.max(-r,-c),r),v=m*(m+2*c)+u):(p=Math.max(0,-(o*r+a)),m=p>0?r:Math.min(Math.max(-r,-c),r),v=-p*p+m*(m+2*c)+u);else m=o>0?-r:r,p=Math.max(0,-(o*m+a)),v=-p*p+m*(m+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(fh).addScaledVector(fl,m),v}intersectSphere(e,t){if(e.radius<0)return null;ts.subVectors(e.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),f>=0?(r=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(r=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-m.z)*p,c=(e.max.z-m.z)*p):(a=(e.max.z-m.z)*p,c=(e.min.z-m.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,u=a.y,f=a.z,p=e.x-o.x,m=e.y-o.y,v=e.z-o.z,_=t.x-o.x,S=t.y-o.y,l=t.z-o.z,h=n.x-o.x,d=n.y-o.y,x=n.z-o.z,g=Math.abs(c),y=Math.abs(u),T=Math.abs(f),E,M,b,w,R,P,I,C,L,N,O,V;if(g>=y&&g>=T?(b=c,P=p,L=_,V=h,c>=0?(E=u,M=f,w=m,R=v,I=S,C=l,N=d,O=x):(E=f,M=u,w=v,R=m,I=l,C=S,N=x,O=d)):y>=T?(b=u,P=m,L=S,V=d,u>=0?(E=f,M=c,w=v,R=p,I=l,C=_,N=x,O=h):(E=c,M=f,w=p,R=v,I=_,C=l,N=h,O=x)):(b=f,P=v,L=l,V=x,f>=0?(E=c,M=u,w=p,R=m,I=_,C=S,N=h,O=d):(E=u,M=c,w=m,R=p,I=S,C=_,N=d,O=h)),b===0)return null;let D=E/b,H=M/b,k=1/b,$=w-D*P,Q=R-H*P,qe=I-D*L,Be=C-H*L,Ne=N-D*V,q=O-H*V,j=Ne*Be-q*qe,ye=$*q-Q*Ne,Me=qe*Q-Be*$;if(s){if(j<0||ye<0||Me<0)return null}else if((j<0||ye<0||Me<0)&&(j>0||ye>0||Me>0))return null;let Ee=j+ye+Me;if(Ee===0)return null;let ze=k*(j*P+ye*L+Me*V);return(Ee>0?ze<0:ze>0)?null:this.at(ze/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cd=new nt,Xs=new Xr,pl=new pi,Pd=new z,ml=new z,gl=new z,vl=new z,dh=new z,xl=new z,Id=new z,_l=new z,dt=class extends gn{constructor(e=new vt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){xl.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let f=a[c],p=r[c];f!==0&&(dh.fromBufferAttribute(p,e),o?xl.addScaledVector(dh,f):xl.addScaledVector(dh.sub(t),f))}t.add(xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(pl.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(pl,Pd)===null||Xs.origin.distanceToSquared(Pd)>(e.far-e.near)**2))&&(Cd.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(Cd),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,m=r.groups,v=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=m.length;_<S;_++){let l=m[_],h=o[l.materialIndex],d=Math.max(l.start,v.start),x=Math.min(a.count,Math.min(l.start+l.count,v.start+v.count));for(let g=d,y=x;g<y;g+=3){let T=a.getX(g),E=a.getX(g+1),M=a.getX(g+2);s=yl(this,h,e,n,u,f,p,T,E,M),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let _=Math.max(0,v.start),S=Math.min(a.count,v.start+v.count);for(let l=_,h=S;l<h;l+=3){let d=a.getX(l),x=a.getX(l+1),g=a.getX(l+2);s=yl(this,o,e,n,u,f,p,d,x,g),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,S=m.length;_<S;_++){let l=m[_],h=o[l.materialIndex],d=Math.max(l.start,v.start),x=Math.min(c.count,Math.min(l.start+l.count,v.start+v.count));for(let g=d,y=x;g<y;g+=3){let T=g,E=g+1,M=g+2;s=yl(this,h,e,n,u,f,p,T,E,M),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let _=Math.max(0,v.start),S=Math.min(c.count,v.start+v.count);for(let l=_,h=S;l<h;l+=3){let d=l,x=l+1,g=l+2;s=yl(this,o,e,n,u,f,p,d,x,g),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}}};function Ig(i,e,t,n,s,r,o,a){let c;if(e.side===Ln?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ws,a),c===null)return null;_l.copy(a),_l.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(_l);return u<t.near||u>t.far?null:{distance:u,point:_l.clone(),object:i}}function yl(i,e,t,n,s,r,o,a,c,u){i.getVertexPosition(a,ml),i.getVertexPosition(c,gl),i.getVertexPosition(u,vl);let f=Ig(i,e,t,n,ml,gl,vl,Id);if(f){let p=new z;_s.getBarycoord(Id,ml,gl,vl,p),s&&(f.uv=_s.getInterpolatedAttribute(s,a,c,u,p,new Ie)),r&&(f.uv1=_s.getInterpolatedAttribute(r,a,c,u,p,new Ie)),o&&(f.normal=_s.getInterpolatedAttribute(o,a,c,u,p,new z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let m={a,b:c,c:u,normal:new z,materialIndex:0};_s.getNormal(ml,gl,vl,m.normal),f.face=m,f.barycoord=p}return f}var ys=class extends On{constructor(e=null,t=1,n=1,s,r,o,a,c,u=pn,f=pn,p,m){super(null,o,a,c,u,f,s,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ir=new nt,Ld=new nt,Ml=[],Dd=new di,Lg=new nt,Vo=new dt,Go=new pi,Pi=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),Dd.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(Dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),Go.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(Go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(n),e.ray.intersectsSphere(Go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ir),Ld.multiplyMatrices(n,Ir),Vo.matrixWorld=Ld,Vo.raycast(e,Ml);for(let o=0,a=Ml.length;o<a;o++){let c=Ml[o];c.instanceId=r,c.object=this,t.push(c)}Ml.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(s*this.count),s,this.count,er,gi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qs=new pi,Dg=new Ie(.5,.5),bl=new z,qr=class{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],f=r[4],p=r[5],m=r[6],v=r[7],_=r[8],S=r[9],l=r[10],h=r[11],d=r[12],x=r[13],g=r[14],y=r[15];if(s[0].setComponents(u-o,v-f,h-_,y-d).normalize(),s[1].setComponents(u+o,v+f,h+_,y+d).normalize(),s[2].setComponents(u+a,v+p,h+S,y+x).normalize(),s[3].setComponents(u-a,v-p,h-S,y-x).normalize(),n)s[4].setComponents(c,m,l,g).normalize(),s[5].setComponents(u-c,v-m,h-l,y-g).normalize();else if(s[4].setComponents(u-c,v-m,h-l,y-g).normalize(),t===Ci)s[5].setComponents(u+c,v+m,h+l,y+g).normalize();else if(t===kr)s[5].setComponents(c,m,l,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);let t=Dg.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(bl.x=s.normal.x>0?e.max.x:e.min.x,bl.y=s.normal.y>0?e.max.y:e.min.y,bl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ql=class extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yl=new z,Zl=new z,Nd=new nt,Wo=new Xr,Sl=new pi,ph=new z,Ud=new z,ia=class extends gn{constructor(e=new vt,t=new ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Yl.fromBufferAttribute(t,s-1),Zl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Yl.distanceTo(Zl);e.setAttribute("lineDistance",new je(n,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(s),Sl.radius+=r,e.ray.intersectsSphere(Sl)===!1)return;Nd.copy(s).invert(),Wo.copy(e.ray).applyMatrix4(Nd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){let v=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let S=v,l=_-1;S<l;S+=u){let h=f.getX(S),d=f.getX(S+1),x=Tl(this,e,Wo,c,h,d,S);x&&t.push(x)}if(this.isLineLoop){let S=f.getX(_-1),l=f.getX(v),h=Tl(this,e,Wo,c,S,l,_-1);h&&t.push(h)}}else{let v=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let S=v,l=_-1;S<l;S+=u){let h=Tl(this,e,Wo,c,S,S+1,S);h&&t.push(h)}if(this.isLineLoop){let S=Tl(this,e,Wo,c,_-1,v,_-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Yl.fromBufferAttribute(a,s),Zl.fromBufferAttribute(a,r),t.distanceSqToSegment(Yl,Zl,ph,Ud)>n)return;ph.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(ph);if(!(u<e.near||u>e.far))return{distance:u,point:Ud.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Yr=class extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fd=new nt,Th=new Xr,El=new pi,wl=new z,sa=class extends gn{constructor(e=new vt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(s),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;Fd.copy(s).invert(),Th.copy(e.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,p=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=m,S=v;_<S;_++){let l=u.getX(_);wl.fromBufferAttribute(p,l),Bd(wl,l,c,s,e,t,this)}}else{let m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let _=m,S=v;_<S;_++)wl.fromBufferAttribute(p,_),Bd(wl,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bd(i,e,t,n,s,r,o){let a=Th.distanceSqToPoint(i);if(a<t){let c=new z;Th.closestPointToPoint(i,c),c.applyMatrix4(n);let u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ra=class extends On{constructor(e=[],t=As,n,s,r,o,a,c,u,f){super(e,t,n,s,r,o,a,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kn=class extends On{constructor(e,t,n,s,r,o,a,c,u){super(e,t,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ms=class extends On{constructor(e,t,n=Li,s,r,o,a=pn,c=pn,u,f=ki,p=1){if(f!==ki&&f!==Rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:p};super(m,s,r,o,a,c,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$l=class extends Ms{constructor(e,t=Li,n=As,s,r,o=pn,a=pn,c,u=ki){let f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,n,s,r,o,a,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oa=class extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],u=[],f=[],p=[],m=0,v=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(p,2));function _(S,l,h,d,x,g,y,T,E,M,b){let w=g/E,R=y/M,P=g/2,I=y/2,C=T/2,L=E+1,N=M+1,O=0,V=0,D=new z;for(let H=0;H<N;H++){let k=H*R-I;for(let $=0;$<L;$++){let Q=$*w-P;D[S]=Q*d,D[l]=k*x,D[h]=C,u.push(D.x,D.y,D.z),D[S]=0,D[l]=0,D[h]=T>0?1:-1,f.push(D.x,D.y,D.z),p.push($/E),p.push(1-H/M),O+=1}}for(let H=0;H<M;H++)for(let k=0;k<E;k++){let $=m+k+L*H,Q=m+k+L*(H+1),qe=m+(k+1)+L*(H+1),Be=m+(k+1)+L*H;c.push($,Q,Be),c.push(Q,qe,Be),V+=6}a.addGroup(v,V,b),v+=V,m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $s=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],u=new z,f=new Ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){let v=n+p/t*s;u.x=e*Math.cos(v),u.y=e*Math.sin(v),o.push(u.x,u.y,u.z),a.push(0,0,1),f.x=(o[m]/e+1)/2,f.y=(o[m+1]/e+1)/2,c.push(f.x,f.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},mi=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let f=[],p=[],m=[],v=[],_=0,S=[],l=n/2,h=0;d(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(m,3)),this.setAttribute("uv",new je(v,2));function d(){let g=new z,y=new z,T=0,E=(t-e)/n;for(let M=0;M<=r;M++){let b=[],w=M/r,R=w*(t-e)+e;for(let P=0;P<=s;P++){let I=P/s,C=I*c+a,L=Math.sin(C),N=Math.cos(C);y.x=R*L,y.y=-w*n+l,y.z=R*N,p.push(y.x,y.y,y.z),g.set(L,E,N).normalize(),m.push(g.x,g.y,g.z),v.push(I,1-w),b.push(_++)}S.push(b)}for(let M=0;M<s;M++)for(let b=0;b<r;b++){let w=S[b][M],R=S[b+1][M],P=S[b+1][M+1],I=S[b][M+1];(e>0||b!==0)&&(f.push(w,R,I),T+=3),(t>0||b!==r-1)&&(f.push(R,P,I),T+=3)}u.addGroup(h,T,0),h+=T}function x(g){let y=_,T=new Ie,E=new z,M=0,b=g===!0?e:t,w=g===!0?1:-1;for(let P=1;P<=s;P++)p.push(0,l*w,0),m.push(0,w,0),v.push(.5,.5),_++;let R=_;for(let P=0;P<=s;P++){let C=P/s*c+a,L=Math.cos(C),N=Math.sin(C);E.x=b*N,E.y=l*w,E.z=b*L,p.push(E.x,E.y,E.z),m.push(0,w,0),T.x=L*.5+.5,T.y=N*.5*w+.5,v.push(T.x,T.y),_++}for(let P=0;P<s;P++){let I=y+P,C=R+P;g===!0?f.push(C,C+1,I):f.push(C+1,C,I),M+=3}u.addGroup(h,M,g===!0?1:2),h+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Kl=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),u(n),f(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(d){let x=new z,g=new z,y=new z;for(let T=0;T<t.length;T+=3)v(t[T+0],x),v(t[T+1],g),v(t[T+2],y),c(x,g,y,d)}function c(d,x,g,y){let T=y+1,E=[];for(let M=0;M<=T;M++){E[M]=[];let b=d.clone().lerp(g,M/T),w=x.clone().lerp(g,M/T),R=T-M;for(let P=0;P<=R;P++)P===0&&M===T?E[M][P]=b:E[M][P]=b.clone().lerp(w,P/R)}for(let M=0;M<T;M++)for(let b=0;b<2*(T-M)-1;b++){let w=Math.floor(b/2);b%2===0?(m(E[M][w+1]),m(E[M+1][w]),m(E[M][w])):(m(E[M][w+1]),m(E[M+1][w+1]),m(E[M+1][w]))}}function u(d){let x=new z;for(let g=0;g<r.length;g+=3)x.x=r[g+0],x.y=r[g+1],x.z=r[g+2],x.normalize().multiplyScalar(d),r[g+0]=x.x,r[g+1]=x.y,r[g+2]=x.z}function f(){let d=new z;for(let x=0;x<r.length;x+=3){d.x=r[x+0],d.y=r[x+1],d.z=r[x+2];let g=l(d)/2/Math.PI+.5,y=h(d)/Math.PI+.5;o.push(g,1-y)}_(),p()}function p(){for(let d=0;d<o.length;d+=6){let x=o[d+0],g=o[d+2],y=o[d+4],T=Math.max(x,g,y),E=Math.min(x,g,y);T>.9&&E<.1&&(x<.2&&(o[d+0]+=1),g<.2&&(o[d+2]+=1),y<.2&&(o[d+4]+=1))}}function m(d){r.push(d.x,d.y,d.z)}function v(d,x){let g=d*3;x.x=e[g+0],x.y=e[g+1],x.z=e[g+2]}function _(){let d=new z,x=new z,g=new z,y=new z,T=new Ie,E=new Ie,M=new Ie;for(let b=0,w=0;b<r.length;b+=9,w+=6){d.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),g.set(r[b+6],r[b+7],r[b+8]),T.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),M.set(o[w+4],o[w+5]),y.copy(d).add(x).add(g).divideScalar(3);let R=l(y);S(T,w+0,d,R),S(E,w+2,x,R),S(M,w+4,g,R)}}function S(d,x,g,y){y<0&&d.x===1&&(o[x]=d.x-1),g.x===0&&g.z===0&&(o[x]=y/2/Math.PI+.5)}function l(d){return Math.atan2(d.z,-d.x)}function h(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let f=n[s],m=n[s+1]-f,v=(o-f)/m;return(s+v)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ie:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],o=[],a=new z,c=new nt;for(let v=0;v<=e;v++){let _=v/e;s[v]=this.getTangentAt(_,new z)}r[0]=new z,o[0]=new z;let u=Number.MAX_VALUE,f=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);f<=u&&(u=f,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),m<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let v=1;v<=e;v++){if(r[v]=r[v-1].clone(),o[v]=o[v-1].clone(),a.crossVectors(s[v-1],s[v]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Mt(s[v-1].dot(s[v]),-1,1));r[v].applyMatrix4(c.makeRotationAxis(a,_))}o[v].crossVectors(s[v],r[v])}if(t===!0){let v=Math.acos(Mt(r[0].dot(r[e]),-1,1));v/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(v=-v);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],v*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends si{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=c-this.aX,v=u-this.aY;c=m*f-v*p+this.aX,u=m*p+v*f+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jl=class extends Zr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,u){s(o,a,u*(a-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,u,f,p){let m=(o-r)/u-(a-r)/(u+f)+(a-o)/f,v=(a-o)/f-(c-o)/(f+p)+(c-a)/p;m*=f,v*=f,s(o,a,m,v)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Od=new z,zd=new z,mh=new Qh,gh=new Qh,vh=new Qh,jl=class extends si{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,f;this.closed||a>0?u=s[(a-1)%r]:(zd.subVectors(s[0],s[1]).add(s[0]),u=zd);let p=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Od.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Od),this.curveType==="centripetal"||this.curveType==="chordal"){let v=this.curveType==="chordal"?.5:.25,_=Math.pow(u.distanceToSquared(p),v),S=Math.pow(p.distanceToSquared(m),v),l=Math.pow(m.distanceToSquared(f),v);S<1e-4&&(S=1),_<1e-4&&(_=S),l<1e-4&&(l=S),mh.initNonuniformCatmullRom(u.x,p.x,m.x,f.x,_,S,l),gh.initNonuniformCatmullRom(u.y,p.y,m.y,f.y,_,S,l),vh.initNonuniformCatmullRom(u.z,p.z,m.z,f.z,_,S,l)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(u.x,p.x,m.x,f.x,this.tension),gh.initCatmullRom(u.y,p.y,m.y,f.y,this.tension),vh.initCatmullRom(u.z,p.z,m.z,f.z,this.tension));return n.set(mh.calc(c),gh.calc(c),vh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Ng(i,e){let t=1-i;return t*t*e}function Ug(i,e){return 2*(1-i)*i*e}function Fg(i,e){return i*i*e}function qo(i,e,t,n){return Ng(i,e)+Ug(i,t)+Fg(i,n)}function Bg(i,e){let t=1-i;return t*t*t*e}function Og(i,e){let t=1-i;return 3*t*t*i*e}function zg(i,e){return 3*(1-i)*i*i*e}function kg(i,e){return i*i*i*e}function Yo(i,e,t,n,s){return Bg(i,e)+Og(i,t)+zg(i,n)+kg(i,s)}var aa=class extends si{constructor(e=new Ie,t=new Ie,n=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yo(e,s.x,r.x,o.x,a.x),Yo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ql=class extends si{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yo(e,s.x,r.x,o.x,a.x),Yo(e,s.y,r.y,o.y,a.y),Yo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends si{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends si{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends si{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qo(e,s.x,r.x,o.x),qo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends si{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qo(e,s.x,r.x,o.x),qo(e,s.y,r.y,o.y),qo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],u=s[o],f=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(kd(a,c.x,u.x,f.x,p.x),kd(a,c.y,u.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}},Hd=Object.freeze({__proto__:null,ArcCurve:Jl,CatmullRomCurve3:jl,CubicBezierCurve:aa,CubicBezierCurve3:Ql,EllipseCurve:Zr,LineCurve:la,LineCurve3:ec,QuadraticBezierCurve:ca,QuadraticBezierCurve3:tc,SplineCurve:ua}),nc=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){let f=c[u];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Hd[s.type]().fromJSON(s))}return this}},ha=class extends nc{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new la(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ca(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new aa(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s),new Ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ua(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let u=new Zr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$r=class extends ha{constructor(e){super(e),this.uuid=ro(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ha().fromJSON(s))}return this}};function Hg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=B0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,u;if(n&&(r=qg(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let f=a,p=c;for(let m=t;m<s;m+=t){let v=i[m],_=i[m+1];v<a&&(a=v),_<c&&(c=_),v>f&&(f=v),_>p&&(p=_)}u=Math.max(f-a,p-c),u=u!==0?32767/u:0}return fa(r,o,t,a,c,u,0),o}function B0(i,e,t,n,s){let r;if(s===i1(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Vd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Vd(o/n|0,i[o],i[o+1],r);return r&&Kr(r,r.next)&&(pa(r),r=r.next),r}function Ks(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Kr(t,t.next)||rn(t.prev,t,t.next)===0)){if(pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Jg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,u=i.next;if(r?Gg(i,n,s,r):Vg(i)){e.push(c.i,i.i,u.i),pa(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=Wg(Ks(i),e),fa(i,e,t,n,s,r,2)):o===2&&Xg(i,e,t,n,s,r):fa(Ks(i),e,t,n,s,r,1);break}}}function Vg(i){let e=i.prev,t=i,n=i.next;if(rn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,u=n.y,f=Math.min(s,r,o),p=Math.min(a,c,u),m=Math.max(s,r,o),v=Math.max(a,c,u),_=n.next;for(;_!==e;){if(_.x>=f&&_.x<=m&&_.y>=p&&_.y<=v&&Xo(s,a,r,c,o,u,_.x,_.y)&&rn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Gg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(rn(s,r,o)>=0)return!1;let a=s.x,c=r.x,u=o.x,f=s.y,p=r.y,m=o.y,v=Math.min(a,c,u),_=Math.min(f,p,m),S=Math.max(a,c,u),l=Math.max(f,p,m),h=Eh(v,_,e,t,n),d=Eh(S,l,e,t,n),x=i.prevZ,g=i.nextZ;for(;x&&x.z>=h&&g&&g.z<=d;){if(x.x>=v&&x.x<=S&&x.y>=_&&x.y<=l&&x!==s&&x!==o&&Xo(a,f,c,p,u,m,x.x,x.y)&&rn(x.prev,x,x.next)>=0||(x=x.prevZ,g.x>=v&&g.x<=S&&g.y>=_&&g.y<=l&&g!==s&&g!==o&&Xo(a,f,c,p,u,m,g.x,g.y)&&rn(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;x&&x.z>=h;){if(x.x>=v&&x.x<=S&&x.y>=_&&x.y<=l&&x!==s&&x!==o&&Xo(a,f,c,p,u,m,x.x,x.y)&&rn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;g&&g.z<=d;){if(g.x>=v&&g.x<=S&&g.y>=_&&g.y<=l&&g!==s&&g!==o&&Xo(a,f,c,p,u,m,g.x,g.y)&&rn(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Wg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Kr(n,s)&&z0(n,t,t.next,s)&&da(n,s)&&da(s,n)&&(e.push(n.i,t.i,s.i),pa(t),pa(t.next),t=i=s),t=t.next}while(t!==i);return Ks(t)}function Xg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&e1(o,a)){let c=k0(o,a);o=Ks(o,o.next),c=Ks(c,c.next),fa(o,e,t,n,s,r,0),fa(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function qg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,u=B0(i,a,c,n,!1);u===u.next&&(u.steiner=!0),s.push(Qg(u))}s.sort(Yg);for(let r=0;r<s.length;r++)t=Zg(s[r],t);return t}function Yg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Zg(i,e){let t=$g(i,e);if(!t)return e;let n=k0(t,i);return Ks(n,n.next),Ks(t,t.next)}function $g(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Kr(i,t))return t;do{if(Kr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,u=o.y,f=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&O0(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);da(t,i)&&(p<f||p===f&&(t.x>o.x||t.x===o.x&&Kg(o,t)))&&(o=t,f=p)}t=t.next}while(t!==a);return o}function Kg(i,e){return rn(i.prev,i,e.prev)<0&&rn(e.next,i,i.next)<0}function Jg(i,e,t,n){let s=i;do s.z===0&&(s.z=Eh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jg(s)}function jg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Eh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Qg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function O0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Xo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&O0(i,e,t,n,s,r,o,a)}function e1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!t1(i,e)&&(da(i,e)&&da(e,i)&&n1(i,e)&&(rn(i.prev,i,e.prev)||rn(i,e.prev,e))||Kr(i,e)&&rn(i.prev,i,i.next)>0&&rn(e.prev,e,e.next)>0)}function rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Kr(i,e){return i.x===e.x&&i.y===e.y}function z0(i,e,t,n){let s=Rl(rn(i,e,t)),r=Rl(rn(i,e,n)),o=Rl(rn(t,n,i)),a=Rl(rn(t,n,e));return!!(s!==r&&o!==a||s===0&&Al(i,t,e)||r===0&&Al(i,n,e)||o===0&&Al(t,i,n)||a===0&&Al(t,e,n))}function Al(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Rl(i){return i>0?1:i<0?-1:0}function t1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&z0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function da(i,e){return rn(i.prev,i,i.next)<0?rn(i,e,i.next)>=0&&rn(i,i.prev,e)>=0:rn(i,e,i.prev)<0||rn(i,i.next,e)<0}function n1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function k0(i,e){let t=wh(i.i,i.x,i.y),n=wh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vd(i,e,t,n){let s=wh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ah=class{static triangulate(e,t,n=2){return Hg(e,t,n)}},Br=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Gd(e),Wd(n,e);let o=e.length;t.forEach(Gd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Wd(n,t[c]);let a=Ah.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Gd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ma=class i extends Kl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var tn=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),u=a+1,f=c+1,p=e/a,m=t/c,v=[],_=[],S=[],l=[];for(let h=0;h<f;h++){let d=h*m-o;for(let x=0;x<u;x++){let g=x*p-r;_.push(g,-d,0),S.push(0,0,1),l.push(x/a),l.push(1-h/c)}}for(let h=0;h<c;h++)for(let d=0;d<a;d++){let x=d+u*h,g=d+u*(h+1),y=d+1+u*(h+1),T=d+1+u*h;v.push(x,g,T),v.push(g,y,T)}this.setIndex(v),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(S,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ga=class i extends vt{constructor(e=new $r([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let f=0;f<e.length;f++)u(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function u(f){let p=s.length/3,m=f.extractPoints(t),v=m.shape,_=m.holes;Br.isClockWise(v)===!1&&(v=v.reverse());for(let l=0,h=_.length;l<h;l++){let d=_[l];Br.isClockWise(d)===!0&&(_[l]=d.reverse())}let S=Br.triangulateShape(v,_);for(let l=0,h=_.length;l<h;l++){let d=_[l];v=v.concat(d)}for(let l=0,h=v.length;l<h;l++){let d=v[l];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let l=0,h=S.length;l<h;l++){let d=S[l],x=d[0]+p,g=d[1]+p,y=d[2]+p;n.push(x,g,y),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return s1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function s1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var va=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),u=0,f=[],p=new z,m=new z,v=[],_=[],S=[],l=[];for(let h=0;h<=n;h++){let d=[],x=h/n,g=o+x*a,y=e*Math.cos(g),T=Math.sqrt(e*e-y*y),E=0;h===0&&o===0?E=.5/t:h===n&&c===Math.PI&&(E=-.5/t);for(let M=0;M<=t;M++){let b=M/t,w=s+b*r;p.x=-T*Math.cos(w),p.y=y,p.z=T*Math.sin(w),_.push(p.x,p.y,p.z),m.copy(p).normalize(),S.push(m.x,m.y,m.z),l.push(b+E,1-x),d.push(u++)}f.push(d)}for(let h=0;h<n;h++)for(let d=0;d<t;d++){let x=f[h][d+1],g=f[h][d],y=f[h+1][d],T=f[h+1][d+1];(h!==0||o>0)&&v.push(x,g,T),(h!==n-1||c<Math.PI)&&v.push(g,y,T)}this.setIndex(v),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(S,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xa=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],f=[],p=[],m=new z,v=new z,_=new z;for(let S=0;S<=n;S++){let l=o+S/n*a;for(let h=0;h<=s;h++){let d=h/s*r;v.x=(e+t*Math.cos(l))*Math.cos(d),v.y=(e+t*Math.cos(l))*Math.sin(d),v.z=t*Math.sin(l),u.push(v.x,v.y,v.z),m.x=e*Math.cos(d),m.y=e*Math.sin(d),_.subVectors(v,m).normalize(),f.push(_.x,_.y,_.z),p.push(h/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let l=1;l<=s;l++){let h=(s+1)*S+l-1,d=(s+1)*(S-1)+l-1,x=(s+1)*(S-1)+l,g=(s+1)*S+l;c.push(h,d,g),c.push(d,x,g)}this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Xd(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Xd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kn(i){let e={};for(let t=0;t<i.length;t++){let n=tr(i[t]);for(let s in n)e[s]=n[s]}return e}function Xd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function r1(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ef(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var nr={clone:tr,merge:kn},o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=r1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ic=class extends pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ln=class extends Vi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jr=class extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sc=class extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Lr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rc=class extends bs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:r=e,a=2*t-n;break;case Sh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bh:o=e,c=2*n-t;break;case Sh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let u=(n-t)*.5,f=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,v=this._weightNext,_=(n-t)/(s-t),S=_*_,l=S*_,h=-m*l+2*m*S-m*_,d=(1+m)*l+(-1.5-2*m)*S+(-.5+m)*_+1,x=(-1-v)*l+(1.5+v)*S+.5*_,g=v*l-v*S;for(let y=0;y!==a;++y)r[y]=h*o[f+y]+d*o[u+y]+x*o[c+y]+g*o[p+y];return r}},oc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=(n-t)/(s-t),p=1-f;for(let m=0;m!==a;++m)r[m]=o[u+m]*p+o[c+m]*f;return r}},ac=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},lc=class extends bs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=this.inTangents,p=this.outTangents;if(!f||!p){let _=(n-t)/(s-t),S=1-_;for(let l=0;l!==a;++l)r[l]=o[u+l]*S+o[c+l]*_;return r}let m=a*2,v=e-1;for(let _=0;_!==a;++_){let S=o[u+_],l=o[c+_],h=v*m+_*2,d=p[h],x=p[h+1],g=e*m+_*2,y=f[g],T=f[g+1],E=c1(n,t,d,y,s);r[_]=H0(E,S,x,T,l)}return r}};function H0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function l1(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function c1(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=H0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=l1(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var ri=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lr(t,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lr(e.times,Array),values:Lr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xh(e.settings)&&(n.settings={inTangents:Lr(e.settings.inTangents,Array),outTangents:Lr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new lc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zo:t=this.InterpolantFactoryMethodDiscrete;break;case Vl:t=this.InterpolantFactoryMethodLinear;break;case Il:t=this.InterpolantFactoryMethodSmooth;break;case yh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return at("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Il;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xh(this.settings)&&(qd(this.settings.inTangents,e),qd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ht("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ht("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&dg(s))for(let a=0,c=s.length;a!==c;++a){let u=s[a];if(isNaN(u)){ht("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Il,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,u=e[a],f=e[a+1];if(u!==f&&(a!==1||u!==e[0]))if(s)c=!0;else{let p=a*n,m=p-n,v=p+n;for(let _=0;_!==n;++_){let S=t[p+_];if(S!==t[m+_]||S!==t[v+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,m=o*n;for(let v=0;v!==n;++v)t[m+v]=t[p+v]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Vl;var Ss=class extends ri{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Zo;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}};cc.prototype.ValueTypeName="color";var uc=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}};uc.prototype.ValueTypeName="number";var hc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),u=e*a;for(let f=u+a;u!==f;u+=4)mn.slerpFlat(r,0,o,u-a,o,u,c);return r}},_a=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends ri{constructor(e,t,n){super(e,t,n)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Zo;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}};fc.prototype.ValueTypeName="vector";var Dl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var dc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){let p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=u.length;p<m;p+=2){let v=u[p],_=u[p+1];if(v.global&&(v.lastIndex=0),v.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},V0=new dc,jr=class{constructor(e){this.manager=e!==void 0?e:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};jr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dr=new WeakMap,pc=class extends jr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Dl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=Dr.get(o);p===void 0&&(p=[],Dr.set(o,p)),p.push({onLoad:t,onError:s})}return o}let a=Hr("img");function c(){f(),t&&t(this);let p=Dr.get(this)||[];for(let m=0;m<p.length;m++){let v=p[m];v.onLoad&&v.onLoad(this)}Dr.delete(this),r.manager.itemEnd(e)}function u(p){f(),s&&s(p),Dl.remove(`image:${e}`);let m=Dr.get(this)||[];for(let v=0;v<m.length;v++){let _=m[v];_.onError&&_.onError(p)}Dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Dl.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ya=class extends jr{constructor(e){super(e)}load(e,t,n,s){let r=new On,o=new pc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Qr=class extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ma=class extends Qr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_h=new nt,Zd=new z,$d=new z,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zd),$d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($d),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){_h.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_h,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===kr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(_h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cl=new z,Pl=new mn,Oi=new z,is=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Pl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Pl,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Cl,Pl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Pl,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new z,Kd=new Ie,Jd=new Ie,In=class extends is{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,Kd,Jd),t.subVectors(Jd,Kd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yu*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rh=class extends ba{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Jo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Sa=class extends Qr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Es=class extends is{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ch=class extends ba{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Ch}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Gi=class extends vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Nr=-90,Ur=1,mc=class extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new In(Nr,Ur,e,t);s.layers=this.layers,this.add(s);let r=new In(Nr,Ur,e,t);r.layers=this.layers,this.add(r);let o=new In(Nr,Ur,e,t);o.layers=this.layers,this.add(o);let a=new In(Nr,Ur,e,t);a.layers=this.layers,this.add(a);let c=new In(Nr,Ur,e,t);c.layers=this.layers,this.add(c);let u=new In(Nr,Ur,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let u of t)this.remove(u);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,u,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let l=!1;e.isWebGLRenderer===!0?l=e.state.buffers.depth.getReversed():l=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,m,v),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},gc=class extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ta=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=u1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function u1(){this._document.hidden===!1&&this.reset()}var tf="\\[\\]\\.:\\/",h1=new RegExp("["+tf+"]","g"),nf="[^"+tf+"]",f1="[^"+tf.replace("\\.","")+"]",d1=/((?:WC+[\/:])*)/.source.replace("WC",nf),p1=/(WCOD+)?/.source.replace("WCOD",f1),m1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nf),g1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nf),v1=new RegExp("^"+d1+p1+m1+g1+"$"),x1=["material","materials","bones","map"],Ph=class{constructor(e,t,n){let s=n||$t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h1,"")}static parseTrackName(e){let t=v1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);x1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;ht("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$t.Composite=Ph;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LM=new Float32Array(1);var cf=class cf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};cf.prototype.isMatrix2=!0;var Ih=cf;function sf(i,e,t,n){let s=_1(n);switch(t){case $h:return i*e;case er:return i*e/s.components*s.byteLength;case Tc:return i*e/s.components*s.byteLength;case Cs:return i*e*2/s.components*s.byteLength;case Ec:return i*e*2/s.components*s.byteLength;case Kh:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case wc:return i*e*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Pc:return Math.max(i,16)*Math.max(e,8)/4;case Ac:case Cc:return Math.max(i,8)*Math.max(e,8)/2;case Ic:case Lc:case Nc:case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dc:case La:case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jc:case jc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eu:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Da:case nu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _1(i){switch(i){case zn:case Xh:return{byteLength:1,components:1};case io:case qh:case vn:return{byteLength:2,components:1};case bc:case Sc:return{byteLength:2,components:4};case Li:case Mc:case gi:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function up(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function w1(i){let e=new WeakMap;function t(a,c){let u=a.array,f=a.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,u,f),a.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,u){let f=c.array,p=c.updateRanges;if(i.bindBuffer(u,a),p.length===0)i.bufferSubData(u,0,f);else{p.sort((v,_)=>v.start-_.start);let m=0;for(let v=1;v<p.length;v++){let _=p[m],S=p[v];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++m,p[m]=S)}p.length=m+1;for(let v=0,_=p.length;v<_;v++){let S=p[v];i.bufferSubData(u,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var A1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R1=`#ifdef USE_ALPHAHASH
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
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D1=`#ifdef USE_AOMAP
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
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U1=`#ifdef USE_BATCHING
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
#endif`,F1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k1=`#ifdef USE_IRIDESCENCE
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
#endif`,H1=`#ifdef USE_BUMPMAP
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,K1=`#define PI 3.141592653589793
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
} // validated`,J1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j1=`vec3 transformedNormal = objectNormal;
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
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pv=`#ifdef USE_GRADIENTMAP
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
}`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_v=`#ifdef USE_ENVMAP
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
#endif`,yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tv=`PhysicalMaterial material;
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
#endif`,Ev=`uniform sampler2D dfgLUT;
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
}`,wv=`
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bv=`#if defined( USE_POINTS_UV )
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
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`#ifdef USE_MORPHTARGETS
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
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
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
#endif`,Jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fx=`float getShadowMask() {
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
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,bx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rx=`uniform sampler2D t2D;
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Ux=`#define DISTANCE
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
}`,Fx=`#define DISTANCE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`uniform float scale;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Gx=`#define LAMBERT
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
}`,Wx=`#define LAMBERT
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
}`,Xx=`#define MATCAP
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
}`,qx=`#define MATCAP
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
}`,Yx=`#define NORMAL
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
}`,Zx=`#define NORMAL
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
}`,$x=`#define PHONG
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
}`,Kx=`#define PHONG
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
}`,Jx=`#define STANDARD
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
}`,jx=`#define STANDARD
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
}`,Qx=`#define TOON
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
}`,e_=`#define TOON
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
}`,t_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,o_=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:A1,alphahash_pars_fragment:R1,alphamap_fragment:C1,alphamap_pars_fragment:P1,alphatest_fragment:I1,alphatest_pars_fragment:L1,aomap_fragment:D1,aomap_pars_fragment:N1,batching_pars_vertex:U1,batching_vertex:F1,begin_vertex:B1,beginnormal_vertex:O1,bsdfs:z1,iridescence_fragment:k1,bumpmap_pars_fragment:H1,clipping_planes_fragment:V1,clipping_planes_pars_fragment:G1,clipping_planes_pars_vertex:W1,clipping_planes_vertex:X1,color_fragment:q1,color_pars_fragment:Y1,color_pars_vertex:Z1,color_vertex:$1,common:K1,cube_uv_reflection_fragment:J1,defaultnormal_vertex:j1,displacementmap_pars_vertex:Q1,displacementmap_vertex:ev,emissivemap_fragment:tv,emissivemap_pars_fragment:nv,colorspace_fragment:iv,colorspace_pars_fragment:sv,envmap_fragment:rv,envmap_common_pars_fragment:ov,envmap_pars_fragment:av,envmap_pars_vertex:lv,envmap_physical_pars_fragment:_v,envmap_vertex:cv,fog_vertex:uv,fog_pars_vertex:hv,fog_fragment:fv,fog_pars_fragment:dv,gradientmap_pars_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:vv,lights_pars_begin:xv,lights_toon_fragment:yv,lights_toon_pars_fragment:Mv,lights_phong_fragment:bv,lights_phong_pars_fragment:Sv,lights_physical_fragment:Tv,lights_physical_pars_fragment:Ev,lights_fragment_begin:wv,lights_fragment_maps:Av,lights_fragment_end:Rv,lightprobes_pars_fragment:Cv,logdepthbuf_fragment:Pv,logdepthbuf_pars_fragment:Iv,logdepthbuf_pars_vertex:Lv,logdepthbuf_vertex:Dv,map_fragment:Nv,map_pars_fragment:Uv,map_particle_fragment:Fv,map_particle_pars_fragment:Bv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:zv,morphinstance_vertex:kv,morphcolor_vertex:Hv,morphnormal_vertex:Vv,morphtarget_pars_vertex:Gv,morphtarget_vertex:Wv,normal_fragment_begin:Xv,normal_fragment_maps:qv,normal_pars_fragment:Yv,normal_pars_vertex:Zv,normal_vertex:$v,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:Jv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:sx,dithering_fragment:rx,dithering_pars_fragment:ox,roughnessmap_fragment:ax,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:ux,shadowmap_vertex:hx,shadowmask_pars_fragment:fx,skinbase_vertex:dx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:vx,specularmap_pars_fragment:xx,tonemapping_fragment:_x,tonemapping_pars_fragment:yx,transmission_fragment:Mx,transmission_pars_fragment:bx,uv_pars_fragment:Sx,uv_pars_vertex:Tx,uv_vertex:Ex,worldpos_vertex:wx,background_vert:Ax,background_frag:Rx,backgroundCube_vert:Cx,backgroundCube_frag:Px,cube_vert:Ix,cube_frag:Lx,depth_vert:Dx,depth_frag:Nx,distance_vert:Ux,distance_frag:Fx,equirect_vert:Bx,equirect_frag:Ox,linedashed_vert:zx,linedashed_frag:kx,meshbasic_vert:Hx,meshbasic_frag:Vx,meshlambert_vert:Gx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:qx,meshnormal_vert:Yx,meshnormal_frag:Zx,meshphong_vert:$x,meshphong_frag:Kx,meshphysical_vert:Jx,meshphysical_frag:jx,meshtoon_vert:Qx,meshtoon_frag:e_,points_vert:t_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:o_},Ye={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Xi={basic:{uniforms:kn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:kn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:kn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:kn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:kn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Se(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:kn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:kn([Ye.points,Ye.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:kn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:kn([Ye.common,Ye.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:kn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:kn([Ye.sprite,Ye.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:kn([Ye.common,Ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:kn([Ye.lights,Ye.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Xi.physical={uniforms:kn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var ou={r:0,b:0,g:0},a_=new nt,hp=new ft;hp.set(-1,0,0,0,1,0,0,0,1);function l_(i,e,t,n,s,r){let o=new Se(0),a=s===!0?0:1,c,u,f=null,p=0,m=null;function v(d){let x=d.isScene===!0?d.background:null;if(x&&x.isTexture){let g=d.backgroundBlurriness>0;x=e.get(x,g)}return x}function _(d){let x=!1,g=v(d);g===null?l(o,a):g&&g.isColor&&(l(g,1),x=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(d,x){let g=v(x);g&&(g.isCubeTexture||g.mapping===wa)?(u===void 0&&(u=new dt(new qt(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:tr(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a_.makeRotationFromEuler(x.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(hp),u.material.toneMapped=bt.getTransfer(g.colorSpace)!==Dt,(f!==g||p!==g.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=g,p=g.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new dt(new tn(2,2),new pt({name:"BackgroundMaterial",uniforms:tr(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=bt.getTransfer(g.colorSpace)!==Dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||p!==g.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=g,p=g.version,m=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function l(d,x){d.getRGB(ou,ef(i)),t.buffers.color.setClear(ou.r,ou.g,ou.b,x,r)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,x=1){o.set(d),a=x,l(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,l(o,a)},render:_,addToRenderList:S,dispose:h}}function c_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(R,P,I,C,L){let N=!1,O=p(R,C,I,P);r!==O&&(r=O,u(r.object)),N=v(R,C,I,L),N&&_(R,C,I,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,g(R,P,I,C),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function u(R){return i.bindVertexArray(R)}function f(R){return i.deleteVertexArray(R)}function p(R,P,I,C){let L=C.wireframe===!0,N=n[P.id];N===void 0&&(N={},n[P.id]=N);let O=R.isInstancedMesh===!0?R.id:0,V=N[O];V===void 0&&(V={},N[O]=V);let D=V[I.id];D===void 0&&(D={},V[I.id]=D);let H=D[L];return H===void 0&&(H=m(c()),D[L]=H),H}function m(R){let P=[],I=[],C=[];for(let L=0;L<t;L++)P[L]=0,I[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:C,object:R,attributes:{},index:null}}function v(R,P,I,C){let L=r.attributes,N=P.attributes,O=0,V=I.getAttributes();for(let D in V)if(V[D].location>=0){let k=L[D],$=N[D];if($===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),k===void 0||k.attribute!==$||$&&k.data!==$.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function _(R,P,I,C){let L={},N=P.attributes,O=0,V=I.getAttributes();for(let D in V)if(V[D].location>=0){let k=N[D];k===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(k=R.instanceColor));let $={};$.attribute=k,k&&k.data&&($.data=k.data),L[D]=$,O++}r.attributes=L,r.attributesNum=O,r.index=C}function S(){let R=r.newAttributes;for(let P=0,I=R.length;P<I;P++)R[P]=0}function l(R){h(R,0)}function h(R,P){let I=r.newAttributes,C=r.enabledAttributes,L=r.attributeDivisors;I[R]=1,C[R]===0&&(i.enableVertexAttribArray(R),C[R]=1),L[R]!==P&&(i.vertexAttribDivisor(R,P),L[R]=P)}function d(){let R=r.newAttributes,P=r.enabledAttributes;for(let I=0,C=P.length;I<C;I++)P[I]!==R[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function x(R,P,I,C,L,N,O){O===!0?i.vertexAttribIPointer(R,P,I,L,N):i.vertexAttribPointer(R,P,I,C,L,N)}function g(R,P,I,C){S();let L=C.attributes,N=I.getAttributes(),O=P.defaultAttributeValues;for(let V in N){let D=N[V];if(D.location>=0){let H=L[V];if(H===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){let k=H.normalized,$=H.itemSize,Q=e.get(H);if(Q===void 0)continue;let qe=Q.buffer,Be=Q.type,Ne=Q.bytesPerElement,q=Be===i.INT||Be===i.UNSIGNED_INT||H.gpuType===Mc;if(H.isInterleavedBufferAttribute){let j=H.data,ye=j.stride,Me=H.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<D.locationSize;Ee++)h(D.location+Ee,j.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<D.locationSize;Ee++)l(D.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ee=0;Ee<D.locationSize;Ee++)x(D.location+Ee,$/D.locationSize,Be,k,ye*Ne,(Me+$/D.locationSize*Ee)*Ne,q)}else{if(H.isInstancedBufferAttribute){for(let j=0;j<D.locationSize;j++)h(D.location+j,H.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let j=0;j<D.locationSize;j++)l(D.location+j);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let j=0;j<D.locationSize;j++)x(D.location+j,$/D.locationSize,Be,k,$*Ne,$/D.locationSize*j*Ne,q)}}else if(O!==void 0){let k=O[V];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(D.location,k);break;case 3:i.vertexAttrib3fv(D.location,k);break;case 4:i.vertexAttrib4fv(D.location,k);break;default:i.vertexAttrib1fv(D.location,k)}}}}d()}function y(){b();for(let R in n){let P=n[R];for(let I in P){let C=P[I];for(let L in C){let N=C[L];for(let O in N)f(N[O].object),delete N[O];delete C[L]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let I in P){let C=P[I];for(let L in C){let N=C[L];for(let O in N)f(N[O].object),delete N[O];delete C[L]}}delete n[R.id]}function E(R){for(let P in n){let I=n[P];for(let C in I){let L=I[C];if(L[R.id]===void 0)continue;let N=L[R.id];for(let O in N)f(N[O].object),delete N[O];delete L[R.id]}}}function M(R){for(let P in n){let I=n[P],C=R.isInstancedMesh===!0?R.id:0,L=I[C];if(L!==void 0){for(let N in L){let O=L[N];for(let V in O)f(O[V].object),delete O[V];delete L[N]}delete I[C],Object.keys(I).length===0&&delete n[P]}}}function b(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:l,disableUnusedAttributes:d}}function u_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function h_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Jn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let M=E===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==zn&&E!==gi&&!M&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",f=c(u);f!==u&&(at("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),l=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:v,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:l,maxAttributes:h,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:g,maxSamples:y,samples:T}}function f_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ri,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let v=p.length!==0||m||n!==0||s;return s=m,n=p.length,v},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,v){let _=p.clippingPlanes,S=p.clipIntersection,l=p.clipShadows,h=i.get(p);if(!s||_===null||_.length===0||r&&!l)r?f(null):u();else{let d=r?0:n,x=d*4,g=h.clippingState||null;c.value=g,g=f(_,m,x,v);for(let y=0;y!==x;++y)g[y]=t[y];h.clippingState=g,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=d}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,v,_){let S=p!==null?p.length:0,l=null;if(S!==0){if(l=c.value,_!==!0||l===null){let h=v+S*4,d=m.matrixWorldInverse;a.getNormalMatrix(d),(l===null||l.length<h)&&(l=new Float32Array(h));for(let x=0,g=v;x!==S;++x,g+=4)o.copy(p[x]).applyMatrix4(d,a),o.normal.toArray(l,g),l[g+3]=o.constant}c.value=l,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,l}}var ao=4,d_=6,p_=20,m_=256,Na=new Es,G0=new Se,uf=null,hf=0,ff=0,df=!1,g_=new z,ir=new z,lu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=g_}=r;uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,hf,ff),this._renderer.xr.enabled=df,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:vn,format:Jn,colorSpace:$o,depthBuffer:!1},s=W0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v_(r)),this._blurMaterial=__(r,e,t),this._ggxMaterial=x_(r,e,t)}return s}_compileMaterial(e){let t=new dt(new vt,e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,n,s,r){let c=new In(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,v=p.toneMapping;p.getClearColor(G0),p.toneMapping=Ii,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new qt,new hn({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,l=S.material,h=!1,d=e.background;d?d.isColor&&(l.color.copy(d),e.background=null,h=!0):(l.color.copy(G0),h=!0);for(let x=0;x<6;x++){let g=x%3;g===0?(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[x],r.y,r.z)):g===1?(c.up.set(0,0,u[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[x],r.z)):(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[x]));let y=this._cubeSize;oo(s,g*y,x>2?y:0,y,y),p.setRenderTarget(s),h&&p.render(S,c),p.render(e,c)}p.toneMapping=v,p.autoClear=m,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===As||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;oo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Na)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,u=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-f*f),m=u*1.25,v=p*m,{_lodMax:_}=this,S=this._sizeLods[n],l=3*S*(n>_-ao?n-_+ao:0),h=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=v,c.mipInt.value=_-t,oo(r,l,h,3*S,2*S),s.setRenderTarget(r),s.render(a,Na),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,oo(e,l,h,3*S,2*S),s.setRenderTarget(e),s.render(a,Na)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],p=3*f*(s>this._lodMax-ao?s-this._lodMax+ao:0),m=4*(this._cubeSize-f);oo(t,p,m,3*f,2*f),o.setRenderTarget(t),o.render(c,Na)}};function v_(i){let e=[],t=[],n=i,s=i-ao+1+d_;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,u=1+a,f=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,m=6,v=3,_=new Float32Array(v*m*p),S=new Float32Array(v*m*p);for(let h=0;h<p;h++){let d=h%3*2/3-1,x=h>2?0:-1,g=[d,x,0,d+2/3,x,0,d+2/3,x+1,0,d,x,0,d+2/3,x+1,0,d,x+1,0];_.set(g,v*m*h);for(let y=0;y<m;y++){let T=f[y*2]*2-1,E=f[y*2+1]*2-1;h===0?ir.set(1,E,T):h===1?ir.set(-T,1,-E):h===2?ir.set(-T,E,1):h===3?ir.set(-1,E,-T):h===4?ir.set(-T,-1,E):ir.set(T,E,-1),ir.toArray(S,(h*m+y)*v)}}let l=new vt;l.setAttribute("position",new Gt(_,v)),l.setAttribute("outputDirection",new Gt(S,v)),t.push(new dt(l,null)),n>ao&&n--}return{lodMeshes:t,sizeLods:e}}function W0(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function x_(i,e,t){return new pt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function __(i,e,t){return new pt({name:"SphericalGaussianBlur",defines:{SAMPLES:p_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function X0(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function q0(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var cu=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new pt({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Gn});r.uniforms.tEquirect.value=t;let o=new dt(s,r),a=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Bt),new mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function y_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,v=!1){return m==null?null:v?o(m):r(m)}function r(m){if(m&&m.isTexture){let v=m.mapping;if(v===xc||v===_c)if(e.has(m)){let _=e.get(m).texture;return a(_,m.mapping)}else{let _=m.image;if(_&&_.height>0){let S=new cu(_.height);return S.fromEquirectangularTexture(i,m),e.set(m,S),m.addEventListener("dispose",u),a(S.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let v=m.mapping,_=v===xc||v===_c,S=v===As||v===Qs;if(_||S){let l=t.get(m),h=l!==void 0?l.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==h)return n===null&&(n=new lu(i)),l=_?n.fromEquirectangular(m,l):n.fromCubemap(m,l),l.texture.pmremVersion=m.pmremVersion,t.set(m,l),l.texture;if(l!==void 0)return l.texture;{let d=m.image;return _&&d&&d.height>0||S&&d&&c(d)?(n===null&&(n=new lu(i)),l=_?n.fromEquirectangular(m):n.fromCubemap(m),l.texture.pmremVersion=m.pmremVersion,t.set(m,l),m.addEventListener("dispose",f),l.texture):null}}}return m}function a(m,v){return v===xc?m.mapping=As:v===_c&&(m.mapping=Qs),m}function c(m){let v=0,_=6;for(let S=0;S<_;S++)m[S]!==void 0&&v++;return v===_}function u(m){let v=m.target;v.removeEventListener("dispose",u);let _=e.get(v);_!==void 0&&(e.delete(v),_.dispose())}function f(m){let v=m.target;v.removeEventListener("dispose",f);let _=t.get(v);_!==void 0&&(t.delete(v),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function M_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ys("WebGLRenderer: "+n+" extension not supported."),s}}}function b_(i,e,t,n){let s={},r=new WeakMap;function o(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let _ in m.attributes)e.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete s[m.id];let v=r.get(m);v&&(e.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function c(p){let m=p.attributes;for(let v in m)e.update(m[v],i.ARRAY_BUFFER)}function u(p){let m=[],v=p.index,_=p.attributes.position,S=0;if(_===void 0)return;if(v!==null){let d=v.array;S=v.version;for(let x=0,g=d.length;x<g;x+=3){let y=d[x+0],T=d[x+1],E=d[x+2];m.push(y,T,T,E,E,y)}}else{let d=_.array;S=_.version;for(let x=0,g=d.length/3-1;x<g;x+=3){let y=x+0,T=x+1,E=x+2;m.push(y,T,T,E,E,y)}}let l=new(_.count>=65535?na:ta)(m,1);l.version=S;let h=r.get(p);h&&e.remove(h),r.set(p,l)}function f(p){let m=r.get(p);if(m){let v=p.index;v!==null&&m.version<v.version&&u(p)}else u(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:f}}function S_(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function u(p,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,p*o,v),t.update(m,n,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,v);let S=0;for(let l=0;l<v;l++)S+=m[l];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function T_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function E_(i,e,t){let n=new WeakMap,s=new mt;function r(o,a,c){let u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0,m=n.get(a);if(m===void 0||m.count!==p){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};m!==void 0&&m.texture.dispose();let v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,l=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],d=a.morphAttributes.color||[],x=0;v===!0&&(x=1),_===!0&&(x=2),S===!0&&(x=3);let g=a.attributes.position.count*x,y=1;g>e.maxTextureSize&&(y=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let T=new Float32Array(g*y*4*p),E=new jo(T,g,y,p);E.type=gi,E.needsUpdate=!0;let M=x*4;for(let w=0;w<p;w++){let R=l[w],P=h[w],I=d[w],C=g*y*4*w;for(let L=0;L<R.count;L++){let N=L*M;v===!0&&(s.fromBufferAttribute(R,L),T[C+N+0]=s.x,T[C+N+1]=s.y,T[C+N+2]=s.z,T[C+N+3]=0),_===!0&&(s.fromBufferAttribute(P,L),T[C+N+4]=s.x,T[C+N+5]=s.y,T[C+N+6]=s.z,T[C+N+7]=0),S===!0&&(s.fromBufferAttribute(I,L),T[C+N+8]=s.x,T[C+N+9]=s.y,T[C+N+10]=s.z,T[C+N+11]=I.itemSize===4?s.w:1)}}m={count:p,texture:E,size:new Ie(g,y)},n.set(a,m),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let S=0;S<u.length;S++)v+=u[S];let _=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function w_(i,e,t,n,s){let r=new WeakMap;function o(u){let f=s.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==f&&(e.update(m),r.set(m,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){let v=u.skeleton;r.get(v)!==f&&(v.update(),r.set(v,f))}return m}function a(){r=new WeakMap}function c(u){let f=u.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var A_={[Oh]:"LINEAR_TONE_MAPPING",[zh]:"REINHARD_TONE_MAPPING",[kh]:"CINEON_TONE_MAPPING",[Hh]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Ea]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function R_(i,e,t,n,s,r){let o=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,u=new vt;u.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new je([0,2,0,0,2,0],2));let f=new ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new dt(u,f),m=new Es(-1,1,1,-1,0,1),v=null,_=null,S=!1,l,h=null,d=[],x=!1;this.setSize=function(g,y){o.setSize(g,y),a!==null&&a.setSize(g,y),c!==null&&c.setSize(g,y);for(let T=0;T<d.length;T++){let E=d[T];E.setSize&&E.setSize(g,y)}},this.setEffects=function(g){d=g,x=d.length>0&&d[0].isRenderPass===!0;let y=o.width,T=o.height;d.length>0&&a===null&&(a=new Ot(y,T,{type:vn,depthBuffer:!1,stencilBuffer:!1}),c=new Ot(y,T,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<d.length;E++){let M=d[E];M.setSize&&M.setSize(y,T)}},this.begin=function(g,y){if(S||g.toneMapping===Ii&&d.length===0)return!1;if(h=y,y!==null){let T=y.width,E=y.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return x===!1&&g.setRenderTarget(o),l=g.toneMapping,g.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(g,y){g.toneMapping=l,S=!0;let T=o,E=a;for(let M=0;M<d.length;M++){let b=d[M];b.enabled!==!1&&(b.render(g,E,T,y),b.needsSwap!==!1&&(T=E,E=E===a?c:a))}if(v!==g.outputColorSpace||_!==g.toneMapping){v=g.outputColorSpace,_=g.toneMapping,f.defines={},bt.getTransfer(v)===Dt&&(f.defines.SRGB_TRANSFER="");let M=A_[_];M&&(f.defines[M]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,g.setRenderTarget(h),g.render(p,m),h=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}var fp=new On,gf=new Ms(1,1),dp=new jo,pp=new Xl,mp=new ra,Y0=[],Z0=[],$0=new Float32Array(16),K0=new Float32Array(9),J0=new Float32Array(4);function co(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Y0[s];if(r===void 0&&(r=new Float32Array(s),Y0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function _n(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fu(i,e){let t=Z0[e];t===void 0&&(t=new Int32Array(e),Z0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2fv(this.addr,e),yn(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;i.uniform3fv(this.addr,e),yn(t,e)}}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4fv(this.addr,e),yn(t,e)}}function D_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,n))return;J0.set(n),i.uniformMatrix2fv(this.addr,!1,J0),yn(t,n)}}function N_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,n))return;K0.set(n),i.uniformMatrix3fv(this.addr,!1,K0),yn(t,n)}}function U_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,n))return;$0.set(n),i.uniformMatrix4fv(this.addr,!1,$0),yn(t,n)}}function F_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2iv(this.addr,e),yn(t,e)}}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3iv(this.addr,e),yn(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4iv(this.addr,e),yn(t,e)}}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2uiv(this.addr,e),yn(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3uiv(this.addr,e),yn(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4uiv(this.addr,e),yn(t,e)}}function W_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gf.compareFunction=t.isReversedDepthBuffer()?ru:su,r=gf):r=fp,t.setTexture2D(e||r,s)}function X_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pp,s)}function q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||mp,s)}function Y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dp,s)}function Z_(i){switch(i){case 5126:return C_;case 35664:return P_;case 35665:return I_;case 35666:return L_;case 35674:return D_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return B_;case 35668:case 35672:return O_;case 35669:case 35673:return z_;case 5125:return k_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}function $_(i,e){i.uniform1fv(this.addr,e)}function K_(i,e){let t=co(e,this.size,2);i.uniform2fv(this.addr,t)}function J_(i,e){let t=co(e,this.size,3);i.uniform3fv(this.addr,t)}function j_(i,e){let t=co(e,this.size,4);i.uniform4fv(this.addr,t)}function Q_(i,e){let t=co(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function e2(i,e){let t=co(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function t2(i,e){let t=co(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function n2(i,e){i.uniform1iv(this.addr,e)}function i2(i,e){i.uniform2iv(this.addr,e)}function s2(i,e){i.uniform3iv(this.addr,e)}function r2(i,e){i.uniform4iv(this.addr,e)}function o2(i,e){i.uniform1uiv(this.addr,e)}function a2(i,e){i.uniform2uiv(this.addr,e)}function l2(i,e){i.uniform3uiv(this.addr,e)}function c2(i,e){i.uniform4uiv(this.addr,e)}function u2(i,e,t){let n=this.cache,s=e.length,r=fu(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=gf:o=fp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function h2(i,e,t){let n=this.cache,s=e.length,r=fu(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pp,r[o])}function f2(i,e,t){let n=this.cache,s=e.length,r=fu(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||mp,r[o])}function d2(i,e,t){let n=this.cache,s=e.length,r=fu(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dp,r[o])}function p2(i){switch(i){case 5126:return $_;case 35664:return K_;case 35665:return J_;case 35666:return j_;case 35674:return Q_;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return s2;case 35669:case 35673:return r2;case 5125:return o2;case 36294:return a2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return d2}}var vf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z_(t.type)}},xf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p2(t.type)}},_f=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},pf=/(\w+)(\])?(\[|\.)?/g;function j0(i,e){i.seq.push(e),i.map[e.id]=e}function m2(i,e,t){let n=i.name,s=n.length;for(pf.lastIndex=0;;){let r=pf.exec(n),o=pf.lastIndex,a=r[1],c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){j0(t,u===void 0?new vf(a,i,e):new xf(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new _f(a),j0(t,p)),t=p}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);m2(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Q0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var g2=37297,v2=0;function x2(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ep=new ft;function _2(i){bt._getMatrix(ep,bt.workingColorSpace,i);let e=`mat3( ${ep.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case Ko:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+x2(i.getShaderSource(e),a)}else return r}function y2(i,e){let t=_2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var M2={[Oh]:"Linear",[zh]:"Reinhard",[kh]:"Cineon",[Hh]:"ACESFilmic",[Gh]:"AgX",[Ea]:"Neutral",[Vh]:"Custom"};function b2(i,e){let t=M2[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var au=new z;function S2(){bt.getLuminanceCoefficients(au);let i=au.x.toFixed(4),e=au.y.toFixed(4),t=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function E2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Fa(i){return i!==""}function np(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ip(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A2=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(i){return i.replace(A2,C2)}var R2=new Map;function C2(i,e){let t=ut[e];if(t===void 0){let n=R2.get(e);if(n!==void 0)t=ut[n],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yf(t)}var P2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(i){return i.replace(P2,I2)}function I2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var L2={[Js]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function D2(i){return L2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N2={[As]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE_UV"};function U2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var F2={[Qs]:"ENVMAP_MODE_REFRACTION"};function B2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":F2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var O2={[Bh]:"ENVMAP_BLENDING_MULTIPLY",[_0]:"ENVMAP_BLENDING_MIX",[y0]:"ENVMAP_BLENDING_ADD"};function z2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":O2[i.combine]||"ENVMAP_BLENDING_NONE"}function k2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H2(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=D2(t),u=U2(t),f=B2(t),p=z2(t),m=k2(t),v=T2(t),_=E2(r),S=s.createProgram(),l,h,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fa).join(`
`),l.length>0&&(l+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fa).join(`
`),h.length>0&&(h+=`
`)):(l=[rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),h=[rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ii?b2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,y2("linearToOutputTexel",t.outputColorSpace),S2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),o=yf(o),o=np(o,t),o=ip(o,t),a=yf(a),a=np(a,t),a=ip(a,t),o=sp(o),a=sp(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,l=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,h=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let x=d+l+o,g=d+h+a,y=Q0(s,s.VERTEX_SHADER,x),T=Q0(s,s.FRAGMENT_SHADER,g);s.attachShader(S,y),s.attachShader(S,T),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function E(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(S)||"",I=s.getShaderInfoLog(y)||"",C=s.getShaderInfoLog(T)||"",L=P.trim(),N=I.trim(),O=C.trim(),V=!0,D=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,y,T);else{let H=tp(s,y,"vertex"),k=tp(s,T,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+H+`
`+k)}else L!==""?at("WebGLProgram: Program Info Log:",L):(N===""||O==="")&&(D=!1);D&&(R.diagnostics={runnable:V,programLog:L,vertexShader:{log:N,prefix:l},fragmentShader:{log:O,prefix:h}})}s.deleteShader(y),s.deleteShader(T),M=new lo(s,S),b=w2(s,S)}let M;this.getUniforms=function(){return M===void 0&&E(this),M};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(S,g2)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v2++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=T,this}var V2=0,Mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bf(e),t.set(e,n)),n}},bf=class{constructor(e){this.id=V2++,this.code=e,this.usedTimes=0}};function G2(i){return i===Cs||i===La||i===Da}function W2(i,e,t,n,s,r){let o=new Qo,a=new Mf,c=new Set,u=[],f=new Map,p=n.logarithmicDepthBuffer,m=n.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function S(M,b,w,R,P,I){let C=R.fog,L=P.geometry,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,V=e.get(M.envMap||N,O),D=V&&V.mapping===wa?V.image.height:null,H=v[M.type];M.precision!==null&&(m=n.getMaxPrecision(M.precision),m!==M.precision&&at("WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=k!==void 0?k.length:0,Q=0;L.morphAttributes.position!==void 0&&(Q=1),L.morphAttributes.normal!==void 0&&(Q=2),L.morphAttributes.color!==void 0&&(Q=3);let qe,Be,Ne,q;if(H){let Lt=Xi[H];qe=Lt.vertexShader,Be=Lt.fragmentShader}else{qe=M.vertexShader,Be=M.fragmentShader;let Lt=a.getVertexShaderStage(M),At=a.getFragmentShaderStage(M);a.update(M,Lt,At),Ne=Lt.id,q=At.id}let j=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Me=P.isInstancedMesh===!0,Ee=P.isBatchedMesh===!0,ze=!!M.map,Ke=!!M.matcap,We=!!V,lt=!!M.aoMap,ne=!!M.lightMap,be=!!M.bumpMap&&M.wireframe===!1,Ae=!!M.normalMap,ee=!!M.displacementMap,se=!!M.emissiveMap,le=!!M.metalnessMap,oe=!!M.roughnessMap,B=M.anisotropy>0,ge=M.clearcoat>0,te=M.dispersion>0,U=M.retroreflectivity>0,A=M.iridescence>0,G=M.sheen>0,Z=M.transmission>0,J=B&&!!M.anisotropyMap,he=ge&&!!M.clearcoatMap,xe=ge&&!!M.clearcoatNormalMap,ae=ge&&!!M.clearcoatRoughnessMap,fe=A&&!!M.iridescenceMap,W=A&&!!M.iridescenceThicknessMap,Ge=G&&!!M.sheenColorMap,Pe=G&&!!M.sheenRoughnessMap,De=!!M.specularMap,Oe=!!M.specularColorMap,Ce=!!M.specularIntensityMap,Ue=Z&&!!M.transmissionMap,X=Z&&!!M.thicknessMap,_e=!!M.gradientMap,pe=!!M.alphaMap,Le=M.alphaTest>0,ke=!!M.alphaHash,ve=!!M.extensions,it=Ii;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(it=i.toneMapping);let et={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:Be,defines:M.defines,customVertexShaderID:Ne,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&P._colorsTexture!==null,instancing:Me,instancingColor:Me&&P.instanceColor!==null,instancingMorph:Me&&P.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:Ke,envMap:We,envMapMode:We&&V.mapping,envMapCubeUVHeight:D,aoMap:lt,lightMap:ne,bumpMap:be,normalMap:Ae,displacementMap:ee,emissiveMap:se,normalMapObjectSpace:Ae&&M.normalMapType===S0,normalMapTangentSpace:Ae&&M.normalMapType===iu,packedNormalMap:Ae&&M.normalMapType===iu&&G2(M.normalMap.format),metalnessMap:le,roughnessMap:oe,anisotropy:B,anisotropyMap:J,clearcoat:ge,clearcoatMap:he,clearcoatNormalMap:xe,clearcoatRoughnessMap:ae,dispersion:te,retroreflection:U,iridescence:A,iridescenceMap:fe,iridescenceThicknessMap:W,sheen:G,sheenColorMap:Ge,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Oe,specularIntensityMap:Ce,transmission:Z,transmissionMap:Ue,thicknessMap:X,gradientMap:_e,opaque:M.transparent===!1&&M.blending===no&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:ke,combine:M.combine,mapUv:ze&&_(M.map.channel),aoMapUv:lt&&_(M.aoMap.channel),lightMapUv:ne&&_(M.lightMap.channel),bumpMapUv:be&&_(M.bumpMap.channel),normalMapUv:Ae&&_(M.normalMap.channel),displacementMapUv:ee&&_(M.displacementMap.channel),emissiveMapUv:se&&_(M.emissiveMap.channel),metalnessMapUv:le&&_(M.metalnessMap.channel),roughnessMapUv:oe&&_(M.roughnessMap.channel),anisotropyMapUv:J&&_(M.anisotropyMap.channel),clearcoatMapUv:he&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:W&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(M.sheenRoughnessMap.channel),specularMapUv:De&&_(M.specularMap.channel),specularColorMapUv:Oe&&_(M.specularColorMap.channel),specularIntensityMapUv:Ce&&_(M.specularIntensityMap.channel),transmissionMapUv:Ue&&_(M.transmissionMap.channel),thicknessMapUv:X&&_(M.thicknessMap.channel),alphaMapUv:pe&&_(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ae||B),vertexNormals:!!L.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(ze||pe),fog:!!C,useFog:M.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||L.attributes.normal===void 0&&Ae===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ye,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&bt.getTransfer(M.map.colorSpace)===Dt,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&bt.getTransfer(M.emissiveMap.colorSpace)===Dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wn,flipSided:M.side===Ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function l(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let w in M.defines)b.push(w),b.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(h(b,M),d(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function h(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numSunLights),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numSunLightShadows),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function d(M,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function x(M){let b=v[M.type],w;if(b){let R=Xi[b];w=nr.clone(R.uniforms)}else w=M.uniforms;return w}function g(M,b){let w=f.get(b);return w!==void 0?++w.usedTimes:(w=new H2(i,b,M,s),u.push(w),f.set(b,w)),w}function y(M){if(--M.usedTimes===0){let b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),f.delete(M.cacheKey),M.destroy()}}function T(M){a.remove(M)}function E(){a.dispose()}return{getParameters:S,getProgramCacheKey:l,getUniforms:x,acquireProgram:g,releaseProgram:y,releaseShaderCache:T,programs:u,dispose:E}}function X2(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function q2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function op(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ap(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m){let v=0;return m.isInstancedMesh&&(v+=2),m.isSkinnedMesh&&(v+=1),v}function a(m,v,_,S,l,h){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:v,material:_,materialVariant:o(m),groupOrder:S,renderOrder:m.renderOrder,z:l,group:h},i[e]=d):(d.id=m.id,d.object=m,d.geometry=v,d.material=_,d.materialVariant=o(m),d.groupOrder=S,d.renderOrder=m.renderOrder,d.z=l,d.group=h),e++,d}function c(m,v,_,S,l,h,d){d.reversedDepth===!0&&(l=-l);let x=a(m,v,_,S,l,h);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):t.push(x)}function u(m,v,_,S,l,h){let d=a(m,v,_,S,l,h);_.transmission>0?n.unshift(d):_.transparent===!0?s.unshift(d):t.unshift(d)}function f(m,v){t.length>1&&t.sort(m||q2),n.length>1&&n.sort(v||op),s.length>1&&s.sort(v||op)}function p(){for(let m=e,v=i.length;m<v;m++){let _=i[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:p,sort:f}}function Y2(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ap,i.set(n,[o])):s>=r.length?(o=new ap,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Z2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Se};break;case"SpotLight":t={position:new z,direction:new z,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function $2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var K2=0;function J2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function j2(i){let e=new Z2,t=$2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new z);let s=new z,r=new nt,o=new nt;function a(u){let f=0,p=0,m=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let v=0,_=0,S=0,l=0,h=0,d=0,x=0,g=0,y=0,T=0,E=0,M=0,b=0,w=0;u.sort(J2);for(let P=0,I=u.length;P<I;P++){let C=u[P],L=C.color,N=C.intensity,O=C.distance,V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Cs?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)f+=L.r*N,p+=L.g*N,m+=L.b*N;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],N);w++}else if(C.isSunLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,k=t.get(C);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[_]=k,n.sunShadowMap[_]=V;let $=H.getViewportCount();for(let Q=0;Q<$;Q++)n.sunShadowMatrix[S+Q]=H.getMatrix(Q),n.sunShadowCascade[S+Q]=H._cascadeData[Q];S+=$,_++}n.sun[v]=D,v++}else if(C.isDirectionalLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,k=t.get(C);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[l]=k,n.directionalShadowMap[l]=V,n.directionalShadowMatrix[l]=C.shadow.matrix,y++}n.directional[l]=D,l++}else if(C.isSpotLight){let D=e.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(L).multiplyScalar(N),D.distance=O,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[d]=D;let H=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,H.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[d]=H.matrix,C.castShadow){let k=t.get(C);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[d]=k,n.spotShadowMap[d]=V,E++}d++}else if(C.isRectAreaLight){let D=e.get(C);D.color.copy(L).multiplyScalar(N),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=D,x++}else if(C.isPointLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){let H=C.shadow,k=t.get(C);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[h]=k,n.pointShadowMap[h]=V,n.pointShadowMatrix[h]=C.shadow.matrix,T++}n.point[h]=D,h++}else if(C.isHemisphereLight){let D=e.get(C);D.skyColor.copy(C.color).multiplyScalar(N),D.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[g]=D,g++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;let R=n.hash;(R.sunLength!==v||R.directionalLength!==l||R.pointLength!==h||R.spotLength!==d||R.rectAreaLength!==x||R.hemiLength!==g||R.numSunShadows!==_||R.numDirectionalShadows!==y||R.numPointShadows!==T||R.numSpotShadows!==E||R.numSpotMaps!==M||R.numLightProbes!==w)&&(n.sun.length=v,n.directional.length=l,n.spot.length=d,n.rectArea.length=x,n.point.length=h,n.hemi.length=g,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,R.sunLength=v,R.directionalLength=l,R.pointLength=h,R.spotLength=d,R.rectAreaLength=x,R.hemiLength=g,R.numSunShadows=_,R.numDirectionalShadows=y,R.numPointShadows=T,R.numSpotShadows=E,R.numSpotMaps=M,R.numLightProbes=w,n.version=K2++)}function c(u,f){let p=0,m=0,v=0,_=0,S=0,l=0,h=f.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){let g=u[d];if(g.isSunLight){let y=n.sun[p];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(h),p++}else if(g.isDirectionalLight){let y=n.directional[m];y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),m++}else if(g.isSpotLight){let y=n.spot[_];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(h),y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),_++}else if(g.isRectAreaLight){let y=n.rectArea[S];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(h),o.identity(),r.copy(g.matrixWorld),r.premultiply(h),o.extractRotation(r),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),S++}else if(g.isPointLight){let y=n.point[v];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(h),v++}else if(g.isHemisphereLight){let y=n.hemi[l];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(h),l++}}}return{setup:a,setupView:c,state:n}}function lp(i){let e=new j2(i),t=[],n=[],s=[];function r(m){p.camera=m,t.length=0,n.length=0,s.length=0}function o(m){t.push(m)}function a(m){n.push(m)}function c(m){s.push(m)}function u(){e.setup(t)}function f(m){e.setupView(t,m)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Q2(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new lp(i),e.set(s,[a])):r>=o.length?(a=new lp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
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
}`,ny=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],iy=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],cp=new nt,Ua=new z,mf=new z;function sy(i,e,t){let n=new qr,s=new Ie,r=new Ie,o=new mt,a=new Jr,c=new sc,u={},f=t.maxTextureSize,p={[ws]:Ln,[Ln]:ws,[wn]:wn},m=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:ey,fragmentShader:ty}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let _=new vt;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new dt(_,m),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let h=this.type;this.render=function(T,E,M){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||T.length===0)return;this.type===e0&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let b=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Gn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let I=h!==this.type;I&&E.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(L=>L.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,L=T.length;C<L;C++){let N=T[C],O=N.shadow;if(O===void 0){at("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let V=O.getFrameExtents();s.multiply(V),r.copy(O.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/V.x),s.x=r.x*V.x,O.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/V.y),s.y=r.y*V.y,O.mapSize.y=r.y));let D=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=D,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===to){if(N.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ot(s.x,s.y,{format:Cs,type:vn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new Ms(s.x,s.y,gi),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=ki,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=pn,O.map.depthTexture.magFilter=pn}else N.isPointLight?(O.map=new cu(s.x),O.map.depthTexture=new $l(s.x,Li)):(O.map=new Ot(s.x,s.y),O.map.depthTexture=new Ms(s.x,s.y,Li)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=ki,this.type===Js?(O.map.depthTexture.compareFunction=D?ru:su,O.map.depthTexture.minFilter=Bt,O.map.depthTexture.magFilter=Bt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=pn,O.map.depthTexture.magFilter=pn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let H=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();N.isPointLight!==!0&&O.updateMatrices(N,M);for(let k=0;k<H;k++){let $=O.getCamera(k);if(N.isPointLight){let Q=O.camera,qe=O.matrix,Be=N.distance||Q.far;Be!==Q.far&&(Q.far=Be,Q.updateProjectionMatrix()),Ua.setFromMatrixPosition(N.matrixWorld),Q.position.copy(Ua),mf.copy(Q.position),mf.add(ny[k]),Q.up.copy(iy[k]),Q.lookAt(mf),Q.updateMatrixWorld(),qe.makeTranslation(-Ua.x,-Ua.y,-Ua.z),cp.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(cp,Q.coordinateSystem,Q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,k),i.clear();else{k===0&&(i.setRenderTarget(O.map),i.clear());let Q=O.getViewport(k);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),P.viewport(o)}n=O.getFrustum(k),g(E,M,$,N,this.type)}O.isPointLightShadow!==!0&&this.type===to&&d(O,M),O.needsUpdate=!1}h=this.type,l.needsUpdate=!1,i.setRenderTarget(b,w,R)};function d(T,E){let M=e.update(S);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,v.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ot(s.x,s.y,{format:Cs,type:vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,M,m,S,null),v.uniforms.shadow_pass.value=T.mapPass.texture,v.uniforms.resolution.value.set(T.map.width,T.map.height),v.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,M,v,S,null)}function x(T,E,M,b){let w=null,R=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)w=R;else if(w=M.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=w.uuid,I=E.uuid,C=u[P];C===void 0&&(C={},u[P]=C);let L=C[I];L===void 0&&(L=w.clone(),C[I]=L,E.addEventListener("dispose",y)),w=L}if(w.visible=E.visible,w.wireframe=E.wireframe,b===to?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:p[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,M.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let P=i.properties.get(w);P.light=M}return w}function g(T,E,M,b,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===to)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let I=e.update(T),C=T.material;if(Array.isArray(C)){let L=I.groups;for(let N=0,O=L.length;N<O;N++){let V=L[N],D=C[V.materialIndex];if(D&&D.visible){let H=x(T,D,b,w);T.onBeforeShadow(i,T,E,M,I,H,V),i.renderBufferDirect(M,null,I,H,T,V),T.onAfterShadow(i,T,E,M,I,H,V)}}}else if(C.visible){let L=x(T,C,b,w);T.onBeforeShadow(i,T,E,M,I,L,null),i.renderBufferDirect(M,null,I,L,T,null),T.onAfterShadow(i,T,E,M,I,L,null)}}let P=T.children;for(let I=0,C=P.length;I<C;I++)g(P[I],E,M,b,w)}function y(T){T.target.removeEventListener("dispose",y);for(let M in u){let b=u[M],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function ry(i,e){function t(){let X=!1,_e=new mt,pe=null,Le=new mt(0,0,0,0);return{setMask:function(ke){pe!==ke&&!X&&(i.colorMask(ke,ke,ke,ke),pe=ke)},setLocked:function(ke){X=ke},setClear:function(ke,ve,it,et,Lt){Lt===!0&&(ke*=et,ve*=et,it*=et),_e.set(ke,ve,it,et),Le.equals(_e)===!1&&(i.clearColor(ke,ve,it,et),Le.copy(_e))},reset:function(){X=!1,pe=null,Le.set(-1,0,0,0)}}}function n(){let X=!1,_e=!1,pe=null,Le=null,ke=null;return{setReversed:function(ve){if(_e!==ve){let it=e.get("EXT_clip_control");ve?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),_e=ve;let et=ke;ke=null,this.setClear(et)}},getReversed:function(){return _e},setTest:function(ve){ve?j(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ve){pe!==ve&&!X&&(i.depthMask(ve),pe=ve)},setFunc:function(ve){if(_e&&(ve=U0[ve]),Le!==ve){switch(ve){case Nl:i.depthFunc(i.NEVER);break;case Ul:i.depthFunc(i.ALWAYS);break;case Fl:i.depthFunc(i.LESS);break;case Or:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case Ol:i.depthFunc(i.GEQUAL);break;case zl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=ve}},setLocked:function(ve){X=ve},setClear:function(ve){ke!==ve&&(ke=ve,_e&&(ve=1-ve),i.clearDepth(ve))},reset:function(){X=!1,pe=null,Le=null,ke=null,_e=!1}}}function s(){let X=!1,_e=null,pe=null,Le=null,ke=null,ve=null,it=null,et=null,Lt=null;return{setTest:function(At){X||(At?j(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(At){_e!==At&&!X&&(i.stencilMask(At),_e=At)},setFunc:function(At,ei,ci){(pe!==At||Le!==ei||ke!==ci)&&(i.stencilFunc(At,ei,ci),pe=At,Le=ei,ke=ci)},setOp:function(At,ei,ci){(ve!==At||it!==ei||et!==ci)&&(i.stencilOp(At,ei,ci),ve=At,it=ei,et=ci)},setLocked:function(At){X=At},setClear:function(At){Lt!==At&&(i.clearStencil(At),Lt=At)},reset:function(){X=!1,_e=null,pe=null,Le=null,ke=null,ve=null,it=null,et=null,Lt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,u=new WeakMap,f={},p={},m={},v=new WeakMap,_=[],S=null,l=!1,h=null,d=null,x=null,g=null,y=null,T=null,E=null,M=new Se(0,0,0),b=0,w=!1,R=null,P=null,I=null,C=null,L=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(D)[1]),O=V>=1):D.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),O=V>=2);let H=null,k={},$=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),qe=new mt().fromArray($),Be=new mt().fromArray(Q);function Ne(X,_e,pe,Le){let ke=new Uint8Array(4),ve=i.createTexture();i.bindTexture(X,ve),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<pe;it++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(_e+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return ve}let q={};q[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Or),be(!1),Ae(Lh),j(i.CULL_FACE),lt(Gn);function j(X){f[X]!==!0&&(i.enable(X),f[X]=!0)}function ye(X){f[X]!==!1&&(i.disable(X),f[X]=!1)}function Me(X,_e){return m[X]!==_e?(i.bindFramebuffer(X,_e),m[X]=_e,X===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=_e),X===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(X,_e){let pe=_,Le=!1;if(X){pe=v.get(_e),pe===void 0&&(pe=[],v.set(_e,pe));let ke=X.textures;if(pe.length!==ke.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,it=ke.length;ve<it;ve++)pe[ve]=i.COLOR_ATTACHMENT0+ve;pe.length=ke.length,Le=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Le=!0);Le&&i.drawBuffers(pe)}function ze(X){return S!==X?(i.useProgram(X),S=X,!0):!1}let Ke={[js]:i.FUNC_ADD,[n0]:i.FUNC_SUBTRACT,[i0]:i.FUNC_REVERSE_SUBTRACT};Ke[s0]=i.MIN,Ke[r0]=i.MAX;let We={[o0]:i.ZERO,[a0]:i.ONE,[l0]:i.SRC_COLOR,[Uh]:i.SRC_ALPHA,[p0]:i.SRC_ALPHA_SATURATE,[f0]:i.DST_COLOR,[u0]:i.DST_ALPHA,[c0]:i.ONE_MINUS_SRC_COLOR,[Fh]:i.ONE_MINUS_SRC_ALPHA,[d0]:i.ONE_MINUS_DST_COLOR,[h0]:i.ONE_MINUS_DST_ALPHA,[m0]:i.CONSTANT_COLOR,[g0]:i.ONE_MINUS_CONSTANT_COLOR,[v0]:i.CONSTANT_ALPHA,[x0]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(X,_e,pe,Le,ke,ve,it,et,Lt,At){if(X===Gn){l===!0&&(ye(i.BLEND),l=!1);return}if(l===!1&&(j(i.BLEND),l=!0),X!==t0){if(X!==h||At!==w){if((d!==js||y!==js)&&(i.blendEquation(i.FUNC_ADD),d=js,y=js),At)switch(X){case no:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ss:i.blendFunc(i.ONE,i.ONE);break;case Dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ht("WebGLState: Invalid blending: ",X);break}else switch(X){case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dh:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nh:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",X);break}x=null,g=null,T=null,E=null,M.set(0,0,0),b=0,h=X,w=At}return}ke=ke||_e,ve=ve||pe,it=it||Le,(_e!==d||ke!==y)&&(i.blendEquationSeparate(Ke[_e],Ke[ke]),d=_e,y=ke),(pe!==x||Le!==g||ve!==T||it!==E)&&(i.blendFuncSeparate(We[pe],We[Le],We[ve],We[it]),x=pe,g=Le,T=ve,E=it),(et.equals(M)===!1||Lt!==b)&&(i.blendColor(et.r,et.g,et.b,Lt),M.copy(et),b=Lt),h=X,w=!1}function ne(X,_e){X.side===wn?ye(i.CULL_FACE):j(i.CULL_FACE);let pe=X.side===Ln;_e&&(pe=!pe),be(pe),X.blending===no&&X.transparent===!1?lt(Gn):lt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Le=X.stencilWrite;a.setTest(Le),Le&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),se(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(X){R!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),R=X)}function Ae(X){X!==jd?(j(i.CULL_FACE),X!==P&&(X===Lh?i.cullFace(i.BACK):X===Qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),P=X}function ee(X){X!==I&&(O&&i.lineWidth(X),I=X)}function se(X,_e,pe){X?(j(i.POLYGON_OFFSET_FILL),(C!==_e||L!==pe)&&(C=_e,L=pe,o.getReversed()&&(_e=-_e),i.polygonOffset(_e,pe))):ye(i.POLYGON_OFFSET_FILL)}function le(X){X?j(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function oe(X){X===void 0&&(X=i.TEXTURE0+N-1),H!==X&&(i.activeTexture(X),H=X)}function B(X,_e,pe){pe===void 0&&(H===null?pe=i.TEXTURE0+N-1:pe=H);let Le=k[pe];Le===void 0&&(Le={type:void 0,texture:void 0},k[pe]=Le),(Le.type!==X||Le.texture!==_e)&&(H!==pe&&(i.activeTexture(pe),H=pe),i.bindTexture(X,_e||q[X]),Le.type=X,Le.texture=_e)}function ge(){let X=k[H];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function A(){try{i.texSubImage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function G(){try{i.texSubImage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function he(){try{i.texStorage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function xe(){try{i.texStorage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function ae(){try{i.texImage2D(...arguments)}catch(X){ht("WebGLState:",X)}}function fe(){try{i.texImage3D(...arguments)}catch(X){ht("WebGLState:",X)}}function W(X){return p[X]!==void 0?p[X]:i.getParameter(X)}function Ge(X,_e){p[X]!==_e&&(i.pixelStorei(X,_e),p[X]=_e)}function Pe(X){qe.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),qe.copy(X))}function De(X){Be.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Be.copy(X))}function Oe(X,_e){let pe=u.get(_e);pe===void 0&&(pe=new WeakMap,u.set(_e,pe));let Le=pe.get(X);Le===void 0&&(Le=i.getUniformBlockIndex(_e,X.name),pe.set(X,Le))}function Ce(X,_e){let Le=u.get(_e).get(X);c.get(_e)!==Le&&(i.uniformBlockBinding(_e,Le,X.__bindingPointIndex),c.set(_e,Le))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},p={},H=null,k={},m={},v=new WeakMap,_=[],S=null,l=!1,h=null,d=null,x=null,g=null,y=null,T=null,E=null,M=new Se(0,0,0),b=0,w=!1,R=null,P=null,I=null,C=null,L=null,qe.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ye,bindFramebuffer:Me,drawBuffers:Ee,useProgram:ze,setBlending:lt,setMaterial:ne,setFlipSided:be,setCullFace:Ae,setLineWidth:ee,setPolygonOffset:se,setScissorTest:le,activeTexture:oe,bindTexture:B,unbindTexture:ge,compressedTexImage2D:te,compressedTexImage3D:U,texImage2D:ae,texImage3D:fe,pixelStorei:Ge,getParameter:W,updateUBOMapping:Oe,uniformBlockBinding:Ce,texStorage2D:he,texStorage3D:xe,texSubImage2D:A,texSubImage3D:G,compressedTexSubImage2D:Z,compressedTexSubImage3D:J,scissor:Pe,viewport:De,reset:Ue}}function oy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,f=new WeakMap,p=new Set,m,v=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,A){return _?new OffscreenCanvas(U,A):Hr("canvas")}function l(U,A,G){let Z=1,J=te(U);if((J.width>G||J.height>G)&&(Z=G/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let he=Math.floor(Z*J.width),xe=Math.floor(Z*J.height);m===void 0&&(m=S(he,xe));let ae=A?S(he,xe):m;return ae.width=he,ae.height=xe,ae.getContext("2d").drawImage(U,0,0,he,xe),at("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+he+"x"+xe+")."),ae}else return"data"in U&&at("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),U;return U}function h(U){return U.generateMipmaps}function d(U){i.generateMipmap(U)}function x(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(U,A,G,Z,J,he=!1){if(U!==null){if(i[U]!==void 0)return i[U];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let xe;Z&&(xe=e.get("EXT_texture_norm16"),xe||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=A;if(A===i.RED&&(G===i.FLOAT&&(ae=i.R32F),G===i.HALF_FLOAT&&(ae=i.R16F),G===i.UNSIGNED_BYTE&&(ae=i.R8),G===i.UNSIGNED_SHORT&&xe&&(ae=xe.R16_EXT),G===i.SHORT&&xe&&(ae=xe.R16_SNORM_EXT)),A===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.R8UI),G===i.UNSIGNED_SHORT&&(ae=i.R16UI),G===i.UNSIGNED_INT&&(ae=i.R32UI),G===i.BYTE&&(ae=i.R8I),G===i.SHORT&&(ae=i.R16I),G===i.INT&&(ae=i.R32I)),A===i.RG&&(G===i.FLOAT&&(ae=i.RG32F),G===i.HALF_FLOAT&&(ae=i.RG16F),G===i.UNSIGNED_BYTE&&(ae=i.RG8),G===i.UNSIGNED_SHORT&&xe&&(ae=xe.RG16_EXT),G===i.SHORT&&xe&&(ae=xe.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.RG8UI),G===i.UNSIGNED_SHORT&&(ae=i.RG16UI),G===i.UNSIGNED_INT&&(ae=i.RG32UI),G===i.BYTE&&(ae=i.RG8I),G===i.SHORT&&(ae=i.RG16I),G===i.INT&&(ae=i.RG32I)),A===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),G===i.UNSIGNED_INT&&(ae=i.RGB32UI),G===i.BYTE&&(ae=i.RGB8I),G===i.SHORT&&(ae=i.RGB16I),G===i.INT&&(ae=i.RGB32I)),A===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),G===i.UNSIGNED_INT&&(ae=i.RGBA32UI),G===i.BYTE&&(ae=i.RGBA8I),G===i.SHORT&&(ae=i.RGBA16I),G===i.INT&&(ae=i.RGBA32I)),A===i.RGB&&(G===i.UNSIGNED_SHORT&&xe&&(ae=xe.RGB16_EXT),G===i.SHORT&&xe&&(ae=xe.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),A===i.RGBA){let fe=he?Ko:bt.getTransfer(J);G===i.FLOAT&&(ae=i.RGBA32F),G===i.HALF_FLOAT&&(ae=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ae=fe===Dt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&xe&&(ae=xe.RGBA16_EXT),G===i.SHORT&&xe&&(ae=xe.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(U,A){let G;return U?A===null||A===Li||A===so?G=i.DEPTH24_STENCIL8:A===gi?G=i.DEPTH32F_STENCIL8:A===io&&(G=i.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Li||A===so?G=i.DEPTH_COMPONENT24:A===gi?G=i.DEPTH_COMPONENT32F:A===io&&(G=i.DEPTH_COMPONENT16),G}function T(U,A){return h(U)===!0||U.isFramebufferTexture&&U.minFilter!==pn&&U.minFilter!==Bt?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function E(U){let A=U.target;A.removeEventListener("dispose",E),b(A),A.isVideoTexture&&f.delete(A),A.isHTMLTexture&&p.delete(A)}function M(U){let A=U.target;A.removeEventListener("dispose",M),R(A)}function b(U){let A=n.get(U);if(A.__webglInit===void 0)return;let G=U.source,Z=v.get(G);if(Z){let J=Z[A.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(U),Object.keys(Z).length===0&&v.delete(G)}n.remove(U)}function w(U){let A=n.get(U);i.deleteTexture(A.__webglTexture);let G=U.source,Z=v.get(G);delete Z[A.__cacheKey],o.memory.textures--}function R(U){let A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(A.__webglFramebuffer[Z]))for(let J=0;J<A.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(A.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(A.__webglFramebuffer[Z]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Z])}else{if(Array.isArray(A.__webglFramebuffer))for(let Z=0;Z<A.__webglFramebuffer.length;Z++)i.deleteFramebuffer(A.__webglFramebuffer[Z]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Z=0;Z<A.__webglColorRenderbuffer.length;Z++)A.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Z]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let G=U.textures;for(let Z=0,J=G.length;Z<J;Z++){let he=n.get(G[Z]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(U)}let P=0;function I(){P=0}function C(){return P}function L(U){P=U}function N(){let U=P;return U>=s.maxTextures&&at("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,U}function O(U){let A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function V(U,A){let G=n.get(U);if(U.isVideoTexture&&B(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){let Z=U.image;if(Z===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(G,U,A);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+A)}function D(U,A){let G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){ye(G,U,A);return}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+A)}function H(U,A){let G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){ye(G,U,A);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+A)}function k(U,A){let G=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&G.__version!==U.version){Me(G,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+A)}let $={[zr]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[Hl]:i.MIRRORED_REPEAT},Q={[pn]:i.NEAREST,[M0]:i.NEAREST_MIPMAP_NEAREST,[Aa]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[yc]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},qe={[E0]:i.NEVER,[P0]:i.ALWAYS,[w0]:i.LESS,[su]:i.LEQUAL,[A0]:i.EQUAL,[ru]:i.GEQUAL,[R0]:i.GREATER,[C0]:i.NOTEQUAL};function Be(U,A){if(A.type===gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Bt||A.magFilter===yc||A.magFilter===Aa||A.magFilter===Dn||A.minFilter===Bt||A.minFilter===yc||A.minFilter===Aa||A.minFilter===Dn)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,$[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,$[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,$[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Q[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Q[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,qe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===pn||A.minFilter!==Aa&&A.minFilter!==Dn||A.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ne(U,A){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",E));let Z=A.source,J=v.get(Z);J===void 0&&(J={},v.set(Z,J));let he=O(A);if(he!==U.__cacheKey){J[he]===void 0&&(J[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[he].usedTimes++;let xe=J[U.__cacheKey];xe!==void 0&&(J[U.__cacheKey].usedTimes--,xe.usedTimes===0&&w(A)),U.__cacheKey=he,U.__webglTexture=J[he].texture}return G}function q(U,A,G){return Math.floor(Math.floor(U/G)/A)}function j(U,A,G,Z){let he=U.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,G,Z,A.data);else{he.sort((Ge,Pe)=>Ge.start-Pe.start);let xe=0;for(let Ge=1;Ge<he.length;Ge++){let Pe=he[xe],De=he[Ge],Oe=Pe.start+Pe.count,Ce=q(De.start,A.width,4),Ue=q(Pe.start,A.width,4);De.start<=Oe+1&&Ce===Ue&&q(De.start+De.count-1,A.width,4)===Ce?Pe.count=Math.max(Pe.count,De.start+De.count-Pe.start):(++xe,he[xe]=De)}he.length=xe+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),W=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Ge=0,Pe=he.length;Ge<Pe;Ge++){let De=he[Ge],Oe=Math.floor(De.start/4),Ce=Math.ceil(De.count/4),Ue=Oe%A.width,X=Math.floor(Oe/A.width),_e=Ce,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,Ue,X,_e,pe,G,Z,A.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,W)}}function ye(U,A,G){let Z=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Z=i.TEXTURE_3D);let J=Ne(U,A),he=A.source;t.bindTexture(Z,U.__webglTexture,i.TEXTURE0+G);let xe=n.get(he);if(he.version!==xe.__version||J===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let pe=bt.getPrimaries(bt.workingColorSpace),Le=A.colorSpace===oi?null:bt.getPrimaries(A.colorSpace),ke=A.colorSpace===oi||pe===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let fe=l(A.image,!1,s.maxTextureSize);fe=ge(A,fe);let W=r.convert(A.format,A.colorSpace),Ge=r.convert(A.type),Pe=g(A.internalFormat,W,Ge,A.normalized,A.colorSpace,A.isVideoTexture);Be(Z,A);let De,Oe=A.mipmaps,Ce=A.isVideoTexture!==!0,Ue=xe.__version===void 0||J===!0,X=he.dataReady,_e=T(A,fe);if(A.isDepthTexture)Pe=y(A.format===Rs,A.type),Ue&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,Pe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Pe,fe.width,fe.height,0,W,Ge,null));else if(A.isDataTexture)if(Oe.length>0){Ce&&Ue&&t.texStorage2D(i.TEXTURE_2D,_e,Pe,Oe[0].width,Oe[0].height);for(let pe=0,Le=Oe.length;pe<Le;pe++)De=Oe[pe],Ce?X&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,De.width,De.height,W,Ge,De.data):t.texImage2D(i.TEXTURE_2D,pe,Pe,De.width,De.height,0,W,Ge,De.data);A.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(i.TEXTURE_2D,_e,Pe,fe.width,fe.height),X&&j(A,fe,W,Ge)):t.texImage2D(i.TEXTURE_2D,0,Pe,fe.width,fe.height,0,W,Ge,fe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ce&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Pe,Oe[0].width,Oe[0].height,fe.depth);for(let pe=0,Le=Oe.length;pe<Le;pe++)if(De=Oe[pe],A.format!==Jn)if(W!==null)if(Ce){if(X)if(A.layerUpdates.size>0){let ke=sf(De.width,De.height,A.format,A.type);for(let ve of A.layerUpdates){let it=De.data.subarray(ve*ke/De.data.BYTES_PER_ELEMENT,(ve+1)*ke/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,ve,De.width,De.height,1,W,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,fe.depth,W,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,Pe,De.width,De.height,fe.depth,0,De.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,fe.depth,W,Ge,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,Pe,De.width,De.height,fe.depth,0,W,Ge,De.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ce&&Ue&&t.texStorage2D(i.TEXTURE_2D,_e,Pe,Oe[0].width,Oe[0].height);for(let pe=0,Le=Oe.length;pe<Le;pe++)De=Oe[pe],A.format!==Jn?W!==null?Ce?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,De.width,De.height,W,De.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,Pe,De.width,De.height,0,De.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?X&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,De.width,De.height,W,Ge,De.data):t.texImage2D(i.TEXTURE_2D,pe,Pe,De.width,De.height,0,W,Ge,De.data)}else if(A.isDataArrayTexture)if(Ce){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Pe,fe.width,fe.height,fe.depth),X)if(A.layerUpdates.size>0){let pe=sf(fe.width,fe.height,A.format,A.type);for(let Le of A.layerUpdates){let ke=fe.data.subarray(Le*pe/fe.data.BYTES_PER_ELEMENT,(Le+1)*pe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Le,fe.width,fe.height,1,W,Ge,ke)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,W,Ge,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,W,Ge,fe.data);else if(A.isData3DTexture)Ce?(Ue&&t.texStorage3D(i.TEXTURE_3D,_e,Pe,fe.width,fe.height,fe.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,W,Ge,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,W,Ge,fe.data);else if(A.isFramebufferTexture){if(Ue)if(Ce)t.texStorage2D(i.TEXTURE_2D,_e,Pe,fe.width,fe.height);else{let pe=fe.width,Le=fe.height;for(let ke=0;ke<_e;ke++)t.texImage2D(i.TEXTURE_2D,ke,Pe,pe,Le,0,W,Ge,null),pe>>=1,Le>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),fe.parentNode!==pe){pe.appendChild(fe),p.add(A),pe.onpaint=Le=>{let ke=Le.changedElements;for(let ve of p)ke.includes(ve.image)&&(ve.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let ke=i.RGBA,ve=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ke,ve,it,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ce&&Ue){let pe=te(Oe[0]);t.texStorage2D(i.TEXTURE_2D,_e,Pe,pe.width,pe.height)}for(let pe=0,Le=Oe.length;pe<Le;pe++)De=Oe[pe],Ce?X&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,W,Ge,De):t.texImage2D(i.TEXTURE_2D,pe,Pe,W,Ge,De);A.generateMipmaps=!1}else if(Ce){if(Ue){let pe=te(fe);t.texStorage2D(i.TEXTURE_2D,_e,Pe,pe.width,pe.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,W,Ge,fe)}else t.texImage2D(i.TEXTURE_2D,0,Pe,W,Ge,fe);h(A)&&d(Z),xe.__version=he.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Me(U,A,G){if(A.image.length!==6)return;let Z=Ne(U,A),J=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+G);let he=n.get(J);if(J.version!==he.__version||Z===!0){t.activeTexture(i.TEXTURE0+G);let xe=bt.getPrimaries(bt.workingColorSpace),ae=A.colorSpace===oi?null:bt.getPrimaries(A.colorSpace),fe=A.colorSpace===oi||xe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let W=A.isCompressedTexture||A.image[0].isCompressedTexture,Ge=A.image[0]&&A.image[0].isDataTexture,Pe=[];for(let ve=0;ve<6;ve++)!W&&!Ge?Pe[ve]=l(A.image[ve],!0,s.maxCubemapSize):Pe[ve]=Ge?A.image[ve].image:A.image[ve],Pe[ve]=ge(A,Pe[ve]);let De=Pe[0],Oe=r.convert(A.format,A.colorSpace),Ce=r.convert(A.type),Ue=g(A.internalFormat,Oe,Ce,A.normalized,A.colorSpace),X=A.isVideoTexture!==!0,_e=he.__version===void 0||Z===!0,pe=J.dataReady,Le=T(A,De);Be(i.TEXTURE_CUBE_MAP,A);let ke;if(W){X&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ue,De.width,De.height);for(let ve=0;ve<6;ve++){ke=Pe[ve].mipmaps;for(let it=0;it<ke.length;it++){let et=ke[it];A.format!==Jn?Oe!==null?X?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,et.width,et.height,Oe,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,Ue,et.width,et.height,0,et.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,et.width,et.height,Oe,Ce,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,Ue,et.width,et.height,0,Oe,Ce,et.data)}}}else{if(ke=A.mipmaps,X&&_e){ke.length>0&&Le++;let ve=te(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ue,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ge){X?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe[ve].width,Pe[ve].height,Oe,Ce,Pe[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ue,Pe[ve].width,Pe[ve].height,0,Oe,Ce,Pe[ve].data);for(let it=0;it<ke.length;it++){let Lt=ke[it].image[ve].image;X?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,Lt.width,Lt.height,Oe,Ce,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,Ue,Lt.width,Lt.height,0,Oe,Ce,Lt.data)}}else{X?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Oe,Ce,Pe[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ue,Oe,Ce,Pe[ve]);for(let it=0;it<ke.length;it++){let et=ke[it];X?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,Oe,Ce,et.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,Ue,Oe,Ce,et.image[ve])}}}h(A)&&d(i.TEXTURE_CUBE_MAP),he.__version=J.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Ee(U,A,G,Z,J,he){let xe=r.convert(G.format,G.colorSpace),ae=r.convert(G.type),fe=g(G.internalFormat,xe,ae,G.normalized,G.colorSpace),W=n.get(A),Ge=n.get(G);if(Ge.__renderTarget=A,!W.__hasExternalTextures){let Pe=Math.max(1,A.width>>he),De=Math.max(1,A.height>>he);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,he,fe,Pe,De,A.depth,0,xe,ae,null):t.texImage2D(J,he,fe,Pe,De,0,xe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),oe(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,Ge.__webglTexture,0,le(A)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,Ge.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(U,A,G){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){let Z=A.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,he=y(A.stencilBuffer,J),xe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;oe(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(A),he,A.width,A.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(A),he,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,U)}else{let Z=A.textures;for(let J=0;J<Z.length;J++){let he=Z[J],xe=r.convert(he.format,he.colorSpace),ae=r.convert(he.type),fe=g(he.internalFormat,xe,ae,he.normalized,he.colorSpace);oe(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(A),fe,A.width,A.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(A),fe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,fe,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(U,A,G){let Z=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(A.depthTexture);if(J.__renderTarget=A,(!J.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,A.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Be(i.TEXTURE_CUBE_MAP,A.depthTexture);let W=r.convert(A.depthTexture.format),Ge=r.convert(A.depthTexture.type),Pe;A.depthTexture.format===ki?Pe=i.DEPTH_COMPONENT24:A.depthTexture.format===Rs&&(Pe=i.DEPTH24_STENCIL8);for(let De=0;De<6;De++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Pe,A.width,A.height,0,W,Ge,null)}}else V(A.depthTexture,0);let he=J.__webglTexture,xe=le(A),ae=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,fe=A.depthTexture.format===Rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===ki)oe(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ae,he,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ae,he,0);else if(A.depthTexture.format===Rs)oe(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ae,he,0,xe):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ae,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(U){let A=n.get(U),G=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){let Z=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Z){let J=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),A.__depthDisposeCallback=J}A.__boundDepthTexture=Z}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if(G)for(let Z=0;Z<6;Z++)Ke(A.__webglFramebuffer[Z],U,Z);else{let Z=U.texture.mipmaps;Z&&Z.length>0?Ke(A.__webglFramebuffer[0],U,0):Ke(A.__webglFramebuffer,U,0)}else if(G){A.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Z]),A.__webglDepthbuffer[Z]===void 0)A.__webglDepthbuffer[Z]=i.createRenderbuffer(),ze(A.__webglDepthbuffer[Z],U,!1);else{let J=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,he)}}else{let Z=U.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ze(A.__webglDepthbuffer,U,!1);else{let J=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(U,A,G){let Z=n.get(U);A!==void 0&&Ee(Z.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&We(U)}function ne(U){let A=U.texture,G=n.get(U),Z=n.get(A);U.addEventListener("dispose",M);let J=U.textures,he=U.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=A.version,o.memory.textures++),he){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let fe=0;fe<A.mipmaps.length;fe++)G.__webglFramebuffer[ae][fe]=i.createFramebuffer()}else G.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<A.mipmaps.length;ae++)G.__webglFramebuffer[ae]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ae=0,fe=J.length;ae<fe;ae++){let W=n.get(J[ae]);W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&oe(U)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){let fe=J[ae];G.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ae]);let W=r.convert(fe.format,fe.colorSpace),Ge=r.convert(fe.type),Pe=g(fe.internalFormat,W,Ge,fe.normalized,fe.colorSpace,U.isXRRenderTarget===!0),De=le(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Pe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,G.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(i.TEXTURE_CUBE_MAP,A);for(let ae=0;ae<6;ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)Ee(G.__webglFramebuffer[ae][fe],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else Ee(G.__webglFramebuffer[ae],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);h(A)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ae=0,fe=J.length;ae<fe;ae++){let W=J[ae],Ge=n.get(W),Pe=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ge.__webglTexture),Be(Pe,W),Ee(G.__webglFramebuffer,U,W,i.COLOR_ATTACHMENT0+ae,Pe,0),h(W)&&d(Pe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ae=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),Be(ae,A),A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)Ee(G.__webglFramebuffer[fe],U,A,i.COLOR_ATTACHMENT0,ae,fe);else Ee(G.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,ae,0);h(A)&&d(ae),t.unbindTexture()}U.depthBuffer&&We(U)}function be(U){let A=U.textures;for(let G=0,Z=A.length;G<Z;G++){let J=A[G];if(h(J)){let he=x(U),xe=n.get(J).__webglTexture;t.bindTexture(he,xe),d(he),t.unbindTexture()}}}let Ae=[],ee=[];function se(U){if(U.samples>0){if(oe(U)===!1){let A=U.textures,G=U.width,Z=U.height,J=i.COLOR_BUFFER_BIT,he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(U),ae=A.length>1;if(ae)for(let W=0;W<A.length;W++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let fe=U.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let W=0;W<A.length;W++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[W]);let Ge=n.get(A[W]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,J,i.NEAREST),c===!0&&(Ae.length=0,ee.length=0,Ae.push(i.COLOR_ATTACHMENT0+W),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Ae.push(he),ee.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let W=0;W<A.length;W++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,xe.__webglColorRenderbuffer[W]);let Ge=n.get(A[W]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function le(U){return Math.min(s.maxSamples,U.samples)}function oe(U){let A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function B(U){let A=o.render.frame;f.get(U)!==A&&(f.set(U,A),U.update())}function ge(U,A){let G=U.colorSpace,Z=U.format,J=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==$o&&G!==oi&&(bt.getTransfer(G)===Dt?(Z!==Jn||J!==zn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",G)),A}function te(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=D,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=lt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ay(i,e){function t(n,s=oi){let r,o=bt.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===Kh)return i.RGB;if(n===Jn)return i.RGBA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===er)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===Cs)return i.RG;if(n===Ec)return i.RG_INTEGER;if(n===wc)return i.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===Ia)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===La||n===Fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ic||n===Lc)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nc)return r.COMPRESSED_R11_EAC;if(n===Uc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===La)return r.COMPRESSED_RG11_EAC;if(n===Fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bc||n===Oc||n===zc||n===kc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jc||n===jc||n===Qc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jc)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eu||n===tu||n===Da||n===nu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===eu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===so?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
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

}`,Sf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pt({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tf=class extends Hi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,u=null,f=null,p=null,m=null,v=null,_=null,S=typeof XRWebGLBinding<"u",l=new Sf,h={},d=t.getContextAttributes(),x=null,g=null,y=[],T=[],E=new Ie,M=null,b=null,w=new In;w.viewport=new mt;let R=new In;R.viewport=new mt;let P=[w,R],I=new gc,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=y[q];return j===void 0&&(j=new Wr,y[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=y[q];return j===void 0&&(j=new Wr,y[q]=j),j.getGripSpace()},this.getHand=function(q){let j=y[q];return j===void 0&&(j=new Wr,y[q]=j),j.getHandSpace()};function N(q){let j=T.indexOf(q.inputSource);if(j===-1)return;let ye=y[j];ye!==void 0&&(ye.update(q.inputSource,q.frame,u||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",V);for(let q=0;q<y.length;q++){let j=T[q];j!==null&&(T[q]=null,y[q].disconnect(j))}C=null,L=null,l.reset();for(let q in h)delete h[q];if(e.setRenderTarget(x),v=null,m=null,p=null,s=null,g=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),b!==null){let q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",V),d.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Me=null,Ee=null;d.depth&&(Ee=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=d.stencil?Rs:ki,Me=d.stencil?so:Li);let ze={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(ze),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),g=new Ot(m.textureWidth,m.textureHeight,{format:Jn,type:zn,depthTexture:new Ms(m.textureWidth,m.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ye={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),g=new Ot(v.framebufferWidth,v.framebufferHeight,{format:Jn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function V(q){for(let j=0;j<q.removed.length;j++){let ye=q.removed[j],Me=T.indexOf(ye);Me>=0&&(T[Me]=null,y[Me].disconnect(ye))}for(let j=0;j<q.added.length;j++){let ye=q.added[j],Me=T.indexOf(ye);if(Me===-1){for(let ze=0;ze<y.length;ze++)if(ze>=T.length){T.push(ye),Me=ze;break}else if(T[ze]===null){T[ze]=ye,Me=ze;break}if(Me===-1)break}let Ee=y[Me];Ee&&Ee.connect(ye)}}let D=new z,H=new z;function k(q,j,ye){D.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(ye.matrixWorld);let Me=D.distanceTo(H),Ee=j.projectionMatrix.elements,ze=ye.projectionMatrix.elements,Ke=Ee[14]/(Ee[10]-1),We=Ee[14]/(Ee[10]+1),lt=(Ee[9]+1)/Ee[5],ne=(Ee[9]-1)/Ee[5],be=(Ee[8]-1)/Ee[0],Ae=(ze[8]+1)/ze[0],ee=Ke*be,se=Ke*Ae,le=Me/(-be+Ae),oe=le*-be;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(oe),q.translateZ(le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let B=Ke+le,ge=We+le,te=ee-oe,U=se+(Me-oe),A=lt*We/ge*B,G=ne*We/ge*B;q.projectionMatrix.makePerspective(te,U,A,G,B,ge),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function $(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ye=q.far;l.texture!==null&&(l.depthNear>0&&(j=l.depthNear),l.depthFar>0&&(ye=l.depthFar)),I.near=R.near=w.near=j,I.far=R.far=w.far=ye,(C!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,L=I.far),I.layers.mask=q.layers.mask|6,w.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let Me=q.parent,Ee=I.cameras;$(I,Me);for(let ze=0;ze<Ee.length;ze++)$(Ee[ze],Me);Ee.length===2?k(I,w,R):I.projectionMatrix.copy(w.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,I,Me)};function Q(q,j,ye){ye===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Jo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(m===null&&v===null))return c},this.setFoveation=function(q){c=q,m!==null&&(m.fixedFoveation=q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=q)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(I)},this.getCameraTexture=function(q){return h[q]};let qe=null;function Be(q,j){if(f=j.getViewerPose(u||o),_=j,f!==null){let ye=f.views;v!==null&&(e.setRenderTargetFramebuffer(g,v.framebuffer),e.setRenderTarget(g));let Me=!1;ye.length!==I.cameras.length&&(I.cameras.length=0,Me=!0);for(let We=0;We<ye.length;We++){let lt=ye[We],ne=null;if(v!==null)ne=v.getViewport(lt);else{let Ae=p.getViewSubImage(m,lt);ne=Ae.viewport,We===0&&(e.setRenderTargetTextures(g,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(g))}let be=P[We];be===void 0&&(be=new In,be.layers.enable(We),be.viewport=new mt,P[We]=be),be.matrix.fromArray(lt.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(lt.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(ne.x,ne.y,ne.width,ne.height),We===0&&(I.matrix.copy(be.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Me===!0&&I.cameras.push(be)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let We=p.getDepthInformation(ye[0]);We&&We.isValid&&We.texture&&l.init(We,s.renderState)}if(Ee&&Ee.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let We=0;We<ye.length;We++){let lt=ye[We].camera;if(lt){let ne=h[lt];ne||(ne=new oa,h[lt]=ne);let be=p.getCameraImage(lt);ne.sourceTexture=be}}}}for(let ye=0;ye<y.length;ye++){let Me=T[ye],Ee=y[ye];Me!==null&&Ee!==void 0&&Ee.update(Me,j,u||o)}qe&&qe(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let Ne=new up;Ne.setAnimationLoop(Be),this.setAnimationLoop=function(q){qe=q},this.dispose=function(){}}},uy=new nt,gp=new ft;gp.set(-1,0,0,0,1,0,0,0,1);function hy(i,e){function t(l,h){l.matrixAutoUpdate===!0&&l.updateMatrix(),h.value.copy(l.matrix)}function n(l,h){h.color.getRGB(l.fogColor.value,ef(i)),h.isFog?(l.fogNear.value=h.near,l.fogFar.value=h.far):h.isFogExp2&&(l.fogDensity.value=h.density)}function s(l,h,d,x,g){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(l,h):h.isMeshLambertMaterial?(r(l,h),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(l,h),p(l,h)):h.isMeshPhongMaterial?(r(l,h),f(l,h),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(l,h),m(l,h),h.isMeshPhysicalMaterial&&v(l,h,g)):h.isMeshMatcapMaterial?(r(l,h),_(l,h)):h.isMeshDepthMaterial?r(l,h):h.isMeshDistanceMaterial?(r(l,h),S(l,h)):h.isMeshNormalMaterial?r(l,h):h.isLineBasicMaterial?(o(l,h),h.isLineDashedMaterial&&a(l,h)):h.isPointsMaterial?c(l,h,d,x):h.isSpriteMaterial?u(l,h):h.isShadowMaterial?(l.color.value.copy(h.color),l.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(l,h){l.opacity.value=h.opacity,h.color&&l.diffuse.value.copy(h.color),h.emissive&&l.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.bumpMap&&(l.bumpMap.value=h.bumpMap,t(h.bumpMap,l.bumpMapTransform),l.bumpScale.value=h.bumpScale,h.side===Ln&&(l.bumpScale.value*=-1)),h.normalMap&&(l.normalMap.value=h.normalMap,t(h.normalMap,l.normalMapTransform),l.normalScale.value.copy(h.normalScale),h.side===Ln&&l.normalScale.value.negate()),h.displacementMap&&(l.displacementMap.value=h.displacementMap,t(h.displacementMap,l.displacementMapTransform),l.displacementScale.value=h.displacementScale,l.displacementBias.value=h.displacementBias),h.emissiveMap&&(l.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,l.emissiveMapTransform)),h.specularMap&&(l.specularMap.value=h.specularMap,t(h.specularMap,l.specularMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest);let d=e.get(h),x=d.envMap,g=d.envMapRotation;x&&(l.envMap.value=x,l.envMapRotation.value.setFromMatrix4(uy.makeRotationFromEuler(g)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.envMapRotation.value.premultiply(gp),l.reflectivity.value=h.reflectivity,l.ior.value=h.ior,l.refractionRatio.value=h.refractionRatio),h.lightMap&&(l.lightMap.value=h.lightMap,l.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,l.lightMapTransform)),h.aoMap&&(l.aoMap.value=h.aoMap,l.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,l.aoMapTransform))}function o(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}function a(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}function c(l,h,d,x){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=x*.5,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}function u(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}function f(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}function p(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}function m(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)}function v(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ln&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.retroreflectivity>0&&(l.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}function _(l,h){h.matcap&&(l.matcap.value=h.matcap)}function S(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,y){let T=y.program;n.uniformBlockBinding(g,T)}function u(g,y){let T=s[g.id];T===void 0&&(l(g),T=f(g),s[g.id]=T,g.addEventListener("dispose",d));let E=y.program;n.updateUBOMapping(g,E);let M=e.render.frame;r[g.id]!==M&&(m(g),r[g.id]=M)}function f(g){let y=p();g.__bindingPointIndex=y;let T=i.createBuffer(),E=g.__size,M=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function p(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(g){let y=s[g.id],T=g.uniforms,E=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,b=T.length;M<b;M++){let w=T[M];if(Array.isArray(w))for(let R=0,P=w.length;R<P;R++)v(w[R],M,R,E);else v(w,M,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(g,y,T,E){if(S(g,y,T,E)===!0){let M=g.__offset,b=g.value;if(Array.isArray(b)){let w=0;for(let R=0;R<b.length;R++){let P=b[R],I=h(P);_(P,g.__data,w),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(w+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,g.__data)}}function _(g,y,T){typeof g=="number"||typeof g=="boolean"?y[0]=g:g.isMatrix3?(y[0]=g.elements[0],y[1]=g.elements[1],y[2]=g.elements[2],y[3]=0,y[4]=g.elements[3],y[5]=g.elements[4],y[6]=g.elements[5],y[7]=0,y[8]=g.elements[6],y[9]=g.elements[7],y[10]=g.elements[8],y[11]=0):ArrayBuffer.isView(g)?y.set(new g.constructor(g.buffer,g.byteOffset,y.length)):g.toArray(y,T)}function S(g,y,T,E){let M=g.value,b=y+"_"+T;if(E[b]===void 0)return typeof M=="number"||typeof M=="boolean"?E[b]=M:ArrayBuffer.isView(M)?E[b]=M.slice():E[b]=M.clone(),!0;{let w=E[b];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return E[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function l(g){let y=g.uniforms,T=0,E=16;for(let b=0,w=y.length;b<w;b++){let R=Array.isArray(y[b])?y[b]:[y[b]];for(let P=0,I=R.length;P<I;P++){let C=R[P],L=Array.isArray(C.value)?C.value:[C.value];for(let N=0,O=L.length;N<O;N++){let V=L[N],D=h(V),H=T%E,k=H%D.boundary,$=H+k;T+=k,$!==0&&E-$<D.storage&&(T+=E-$),C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=D.storage}}}let M=T%E;return M>0&&(T+=E-M),g.__size=T,g.__cache={},this}function h(g){let y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(y.boundary=16,y.storage=g.byteLength):at("WebGLRenderer: Unsupported uniform value type.",g),y}function d(g){let y=g.target;y.removeEventListener("dispose",d);let T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function x(){for(let g in s)i.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:c,update:u,dispose:x}}var dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function py(){return Wi===null&&(Wi=new ys(dy,16,16,Cs,vn),Wi.name="DFG_LUT",Wi.minFilter=Bt,Wi.magFilter=Bt,Wi.wrapS=zi,Wi.wrapT=zi,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var uu=class{constructor(e={}){let{canvas:t=L0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:v=zn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let S=v,l=new Set([wc,Ec,Tc]),h=new Set([zn,Li,io,so,bc,Sc]),d=new Uint32Array(4),x=new Int32Array(4),g=new z,y=null,T=null,E=[],M=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,R=!1,P=null,I=null,C=null,L=null;this._outputColorSpace=sn;let N=0,O=0,V=null,D=-1,H=null,k=new mt,$=new mt,Q=null,qe=new Se(0),Be=0,Ne=t.width,q=t.height,j=1,ye=null,Me=null,Ee=new mt(0,0,Ne,q),ze=new mt(0,0,Ne,q),Ke=!1,We=new qr,lt=!1,ne=!1,be=new nt,Ae=new z,ee=new mt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function oe(){return V===null?j:1}let B=n;function ge(F,K){return t.getContext(F,K)}let te,U,A,G,Z,J,he,xe,ae,fe,W,Ge,Pe,De,Oe,Ce,Ue,X,_e,pe,Le,ke,ve;try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",ei,!1),B===null){let K="webgl2";if(B=ge(K,F),B===null)throw ge(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(F){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),ht("WebGLRenderer: "+F.message),F}function it(){te=new M_(B),te.init(),Le=new ay(B,te),U=new h_(B,te,e,Le),A=new ry(B,te),U.reversedDepthBuffer&&m&&A.buffers.depth.setReversed(!0),I=B.createFramebuffer(),C=B.createFramebuffer(),L=B.createFramebuffer(),G=new T_(B),Z=new X2,J=new oy(B,te,A,Z,U,Le,G),he=new y_(w),xe=new w1(B),ke=new c_(B,xe),ae=new b_(B,xe,G,ke),fe=new w_(B,ae,xe,ke,G),X=new E_(B,U,J),Oe=new f_(Z),W=new W2(w,he,te,U,ke,Oe),Ge=new hy(w,Z),Pe=new Y2,De=new Q2(te),Ue=new l_(w,he,A,fe,_,c),Ce=new sy(w,fe,U),ve=new fy(B,G,U,A),_e=new u_(B,te,G),pe=new S_(B,te,G),G.programs=W.programs,w.capabilities=U,w.extensions=te,w.properties=Z,w.renderLists=Pe,w.shadowMap=Ce,w.state=A,w.info=G}S!==zn&&(b=new R_(S,t.width,t.height,a,s,r));let et=new Tf(w,B);this.xr=et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let F=te.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=te.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(F){F!==void 0&&(j=F,this.setSize(Ne,q,!1))},this.getSize=function(F){return F.set(Ne,q)},this.setSize=function(F,K,ce=!0){if(et.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=F,q=K,t.width=Math.floor(F*j),t.height=Math.floor(K*j),ce===!0&&(t.style.width=F+"px",t.style.height=K+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,F,K)},this.getDrawingBufferSize=function(F){return F.set(Ne*j,q*j).floor()},this.setDrawingBufferSize=function(F,K,ce){Ne=F,q=K,j=ce,t.width=Math.floor(F*ce),t.height=Math.floor(K*ce),this.setViewport(0,0,F,K)},this.setEffects=function(F){if(S===zn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let K=0;K<F.length;K++)if(F[K].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(k)},this.getViewport=function(F){return F.copy(Ee)},this.setViewport=function(F,K,ce,re){F.isVector4?Ee.set(F.x,F.y,F.z,F.w):Ee.set(F,K,ce,re),A.viewport(k.copy(Ee).multiplyScalar(j).round())},this.getScissor=function(F){return F.copy(ze)},this.setScissor=function(F,K,ce,re){F.isVector4?ze.set(F.x,F.y,F.z,F.w):ze.set(F,K,ce,re),A.scissor($.copy(ze).multiplyScalar(j).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(F){A.setScissorTest(Ke=F)},this.setOpaqueSort=function(F){ye=F},this.setTransparentSort=function(F){Me=F},this.getClearColor=function(F){return F.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(F=!0,K=!0,ce=!0){let re=0;if(F){let ie=!1;if(V!==null){let Xe=V.texture.format;ie=l.has(Xe)}if(ie){let Xe=V.texture.type,Ze=h.has(Xe),He=Ue.getClearColor(),Qe=Ue.getClearAlpha(),tt=He.r,gt=He.g,_t=He.b;Ze?(d[0]=tt,d[1]=gt,d[2]=_t,d[3]=Qe,B.clearBufferuiv(B.COLOR,0,d)):(x[0]=tt,x[1]=gt,x[2]=_t,x[3]=Qe,B.clearBufferiv(B.COLOR,0,x))}else re|=B.COLOR_BUFFER_BIT}K&&(re|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(re|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&B.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),P=F},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),Ue.dispose(),Pe.dispose(),De.dispose(),Z.dispose(),he.dispose(),fe.dispose(),ke.dispose(),ve.dispose(),W.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ro),et.removeEventListener("sessionend",Co),$i.stop()};function Lt(F){F.preventDefault(),jh("WebGLRenderer: Context Lost."),R=!0}function At(){jh("WebGLRenderer: Context Restored."),R=!1;let F=G.autoReset,K=Ce.enabled,ce=Ce.autoUpdate,re=Ce.needsUpdate,ie=Ce.type;it(),G.autoReset=F,Ce.enabled=K,Ce.autoUpdate=ce,Ce.needsUpdate=re,Ce.type=ie}function ei(F){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function ci(F){let K=F.target;K.removeEventListener("dispose",ci),dr(K)}function dr(F){pr(F),Z.remove(F)}function pr(F){let K=Z.get(F).programs;K!==void 0&&(K.forEach(function(ce){W.releaseProgram(ce)}),F.isShaderMaterial&&W.releaseShaderCache(F))}this.renderBufferDirect=function(F,K,ce,re,ie,Xe){K===null&&(K=se);let Ze=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,He=Ja(F,K,ce,re,ie);A.setMaterial(re,Ze);let Qe=ce.index,tt=1;if(re.wireframe===!0){if(Qe=ae.getWireframeAttribute(ce),Qe===void 0)return;tt=2}let gt=ce.drawRange,_t=ce.attributes.position,Ve=gt.start*tt,Et=(gt.start+gt.count)*tt;Xe!==null&&(Ve=Math.max(Ve,Xe.start*tt),Et=Math.min(Et,(Xe.start+Xe.count)*tt)),Qe!==null?(Ve=Math.max(Ve,0),Et=Math.min(Et,Qe.count)):_t!=null&&(Ve=Math.max(Ve,0),Et=Math.min(Et,_t.count));let Xt=Et-Ve;if(Xt<0||Xt===1/0)return;ke.setup(ie,re,He,ce,Qe);let Rt,Ct=_e;if(Qe!==null&&(Rt=xe.get(Qe),Ct=pe,Ct.setIndex(Rt)),ie.isMesh)re.wireframe===!0?(A.setLineWidth(re.wireframeLinewidth*oe()),Ct.setMode(B.LINES)):Ct.setMode(B.TRIANGLES);else if(ie.isLine){let xt=re.linewidth;xt===void 0&&(xt=1),A.setLineWidth(xt*oe()),ie.isLineSegments?Ct.setMode(B.LINES):ie.isLineLoop?Ct.setMode(B.LINE_LOOP):Ct.setMode(B.LINE_STRIP)}else ie.isPoints?Ct.setMode(B.POINTS):ie.isSprite&&Ct.setMode(B.TRIANGLES);if(ie.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let xt=ie._multiDrawStarts,we=ie._multiDrawCounts,Ut=ie._multiDrawCount,Je=Qe?xe.get(Qe).bytesPerElement:1,qn=Z.get(re).currentProgram.getUniforms();for(let ui=0;ui<Ut;ui++)qn.setValue(B,"_gl_DrawID",ui),Ct.render(xt[ui]/Je,we[ui])}else if(ie.isInstancedMesh)Ct.renderInstances(Ve,Xt,ie.count);else if(ce.isInstancedBufferGeometry){let xt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,we=Math.min(ce.instanceCount,xt);Ct.renderInstances(Ve,Xt,we)}else Ct.render(Ve,Xt)};function Ao(F,K,ce,re){P!==null&&F.isNodeMaterial&&P.setObject(re,F),lt===!0&&Oe.setState(F,ce,!1),F.transparent===!0&&F.side===wn&&F.forceSinglePass===!1?(F.side=Ln,F.needsUpdate=!0,zs(F,K,re),F.side=ws,F.needsUpdate=!0,zs(F,K,re),F.side=wn):zs(F,K,re)}this.compile=function(F,K,ce=null){ce===null&&(ce=F),P!==null&&P.renderStart(F,K,ce),T=De.get(ce),T.init(K),M.push(T),ce.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),F!==ce&&F.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),ne=this.localClippingEnabled,lt=Oe.init(this.clippingPlanes,ne),lt===!0&&Oe.setGlobalState(this.clippingPlanes,K),P!==null&&Ce.render(T.state.shadowsArray,ce,K);let re=new Set;return F.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Xe=ie.material;if(Xe)if(Array.isArray(Xe))for(let Ze=0;Ze<Xe.length;Ze++){let He=Xe[Ze];Ao(He,ce,K,ie),re.add(He)}else Ao(Xe,ce,K,ie),re.add(Xe)}),T=M.pop(),P!==null&&P.renderEnd(),re},this.compileAsync=function(F,K,ce=null){let re=this.compile(F,K,ce);return new Promise(ie=>{function Xe(){if(re.forEach(function(Ze){let Qe=Z.get(Ze).currentProgram;(Qe===void 0||Qe.isReady())&&re.delete(Ze)}),re.size===0){ie(F);return}setTimeout(Xe,10)}te.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let jt=null;function $a(F){jt&&jt(F)}function Ro(){$i.stop()}function Co(){$i.start()}let $i=new up;$i.setAnimationLoop($a),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(F){jt=F,et.setAnimationLoop(F),F===null?$i.stop():$i.start()},et.addEventListener("sessionstart",Ro),et.addEventListener("sessionend",Co),this.render=function(F,K){if(K!==void 0&&K.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(F,K);let ce=et.enabled===!0&&et.isPresenting===!0,re=b!==null&&(V===null||ce)&&b.begin(w,V);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(K),K=et.getCamera()),F.isScene===!0&&F.onBeforeRender(w,F,K,V),T=De.get(F,M.length),T.init(K),T.state.textureUnits=J.getTextureUnits(),M.push(T),be.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),We.setFromProjectionMatrix(be,Ci,K.reversedDepth),ne=this.localClippingEnabled,lt=Oe.init(this.clippingPlanes,ne),y=Pe.get(F,E.length),y.init(),E.push(y),et.enabled===!0&&et.isPresenting===!0){let Ze=w.xr.getDepthSensingMesh();Ze!==null&&Bs(Ze,K,-1/0,w.sortObjects)}Bs(F,K,0,w.sortObjects),y.finish(),P!==null&&P.updateLights(T.state.lightsArray),w.sortObjects===!0&&y.sort(ye,Me),le=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,le&&Ue.addToRenderList(y,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Oe.beginShadows();let ie=T.state.shadowsArray;if(Ce.render(ie,F,K),lt===!0&&Oe.endShadows(),(re&&b.hasRenderPass())===!1){let Ze=y.opaque,He=y.transmissive;if(T.setupLights(),K.isArrayCamera){let Qe=K.cameras;if(He.length>0)for(let tt=0,gt=Qe.length;tt<gt;tt++){let _t=Qe[tt];an(Ze,He,F,_t)}le&&Ue.render(F);for(let tt=0,gt=Qe.length;tt<gt;tt++){let _t=Qe[tt];Pn(y,F,_t,_t.viewport)}}else He.length>0&&an(Ze,He,F,K),le&&Ue.render(F),Pn(y,F,K)}V!==null&&O===0&&(J.updateMultisampleRenderTarget(V),J.updateRenderTargetMipmap(V)),re&&b.end(w),F.isScene===!0&&F.onAfterRender(w,F,K),ke.resetDefaultState(),D=-1,H=null,M.pop(),M.length>0?(T=M[M.length-1],J.setTextureUnits(T.state.textureUnits),lt===!0&&Oe.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?y=E[E.length-1]:y=null,P!==null&&P.renderEnd()};function Bs(F,K,ce,re){if(F.visible===!1)return;if(F.layers.test(K.layers)){if(F.isGroup)ce=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(K);else if(F.isLightProbeGrid)T.pushLightProbeGrid(F);else if(F.isLight)T.pushLight(F),F.castShadow&&T.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(We)){re&&ee.setFromMatrixPosition(F.matrixWorld).applyMatrix4(be);let Ze=fe.update(F),He=F.material;He.visible&&y.push(F,Ze,He,ce,ee.z,null,K)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(We))){let Ze=fe.update(F),He=F.material;if(re&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),ee.copy(F.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),ee.copy(Ze.boundingSphere.center)),ee.applyMatrix4(F.matrixWorld).applyMatrix4(be)),Array.isArray(He)){let Qe=Ze.groups;for(let tt=0,gt=Qe.length;tt<gt;tt++){let _t=Qe[tt],Ve=He[_t.materialIndex];Ve&&Ve.visible&&y.push(F,Ze,Ve,ce,ee.z,_t,K)}}else He.visible&&y.push(F,Ze,He,ce,ee.z,null,K)}}let Xe=F.children;for(let Ze=0,He=Xe.length;Ze<He;Ze++)Bs(Xe[Ze],K,ce,re)}function Pn(F,K,ce,re){let{opaque:ie,transmissive:Xe,transparent:Ze}=F;T.setupLightsView(ce),lt===!0&&Oe.setGlobalState(w.clippingPlanes,ce),re&&A.viewport(k.copy(re)),ie.length>0&&Os(ie,K,ce),Xe.length>0&&Os(Xe,K,ce),Ze.length>0&&Os(Ze,K,ce),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function an(F,K,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[re.id]===void 0){let Ve=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[re.id]=new Ot(1,1,{generateMipmaps:!0,type:Ve?vn:zn,minFilter:Dn,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let Xe=T.state.transmissionRenderTarget[re.id],Ze=re.viewport||k;Xe.setSize(Ze.z*w.transmissionResolutionScale,Ze.w*w.transmissionResolutionScale);let He=w.getRenderTarget(),Qe=w.getActiveCubeFace(),tt=w.getActiveMipmapLevel();w.setRenderTarget(Xe),w.getClearColor(qe),Be=w.getClearAlpha(),Be<1&&w.setClearColor(16777215,.5),w.clear(),le&&Ue.render(ce);let gt=w.toneMapping;w.toneMapping=Ii;let _t=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),T.setupLightsView(re),lt===!0&&Oe.setGlobalState(w.clippingPlanes,re),Os(F,ce,re),J.updateMultisampleRenderTarget(Xe),J.updateRenderTargetMipmap(Xe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Et=0,Xt=K.length;Et<Xt;Et++){let Rt=K[Et],{object:Ct,geometry:xt,material:we,group:Ut}=Rt;if(we.side===wn&&Ct.layers.test(re.layers)){let Je=we.side;we.side=Ln,we.needsUpdate=!0,Po(Ct,ce,re,xt,we,Ut),we.side=Je,we.needsUpdate=!0,Ve=!0}}Ve===!0&&(J.updateMultisampleRenderTarget(Xe),J.updateRenderTargetMipmap(Xe))}w.setRenderTarget(He,Qe,tt),w.setClearColor(qe,Be),_t!==void 0&&(re.viewport=_t),w.toneMapping=gt}function Os(F,K,ce){let re=K.isScene===!0?K.overrideMaterial:null;for(let ie=0,Xe=F.length;ie<Xe;ie++){let Ze=F[ie],{object:He,geometry:Qe,group:tt}=Ze,gt=Ze.material;gt.allowOverride===!0&&re!==null&&(gt=re),He.layers.test(ce.layers)&&Po(He,K,ce,Qe,gt,tt)}}function Po(F,K,ce,re,ie,Xe){P!==null&&ie.isNodeMaterial&&P.setObject(F,ie),F.onBeforeRender(w,K,ce,re,ie,Xe),F.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ie.onBeforeRender(w,K,ce,re,F,Xe),ie.transparent===!0&&ie.side===wn&&ie.forceSinglePass===!1?(ie.side=Ln,ie.needsUpdate=!0,w.renderBufferDirect(ce,K,re,ie,F,Xe),ie.side=ws,ie.needsUpdate=!0,w.renderBufferDirect(ce,K,re,ie,F,Xe),ie.side=wn):w.renderBufferDirect(ce,K,re,ie,F,Xe),F.onAfterRender(w,K,ce,re,ie,Xe)}function zs(F,K,ce){K.isScene!==!0&&(K=se);let re=Z.get(F),ie=T.state.lights,Xe=T.state.shadowsArray,Ze=ie.state.version,He=W.getParameters(F,ie.state,Xe,K,ce,T.state.lightProbeGridArray),Qe=W.getProgramCacheKey(He),tt=re.programs;re.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?K.environment:null,re.fog=K.fog;let gt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;re.envMap=he.get(F.envMap||re.environment,gt),re.envMapRotation=re.environment!==null&&F.envMap===null?K.environmentRotation:F.envMapRotation,tt===void 0&&(F.addEventListener("dispose",ci),tt=new Map,re.programs=tt);let _t=tt.get(Qe);if(_t!==void 0){if(re.currentProgram===_t&&re.lightsStateVersion===Ze)return Io(F,He),_t}else He.uniforms=W.getUniforms(F),P!==null&&F.isNodeMaterial&&P.build(F,ce,He),F.onBeforeCompile(He,w),_t=W.acquireProgram(He,Qe),tt.set(Qe,_t),re.uniforms=He.uniforms;let Ve=re.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ve.clippingPlanes=Oe.uniform),Io(F,He),re.needsLights=Lo(F),re.lightsStateVersion=Ze,re.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.sunLights.value=ie.state.sun,Ve.sunLightShadows.value=ie.state.sunShadow,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ve.sunShadowCascade.value=ie.state.sunShadowCascade,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.lightProbeGrid=T.state.lightProbeGridArray.length>0,re.currentProgram=_t,re.uniformsList=null,_t}function mr(F){if(F.uniformsList===null){let K=F.currentProgram.getUniforms();F.uniformsList=lo.seqWithValue(K.seq,F.uniforms)}return F.uniformsList}function Io(F,K){let ce=Z.get(F);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function Ka(F,K){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;g.setFromMatrixPosition(K.matrixWorld);for(let ce=0,re=F.length;ce<re;ce++){let ie=F[ce];if(ie.texture!==null&&ie.boundingBox.containsPoint(g))return ie}return null}function Ja(F,K,ce,re,ie){K.isScene!==!0&&(K=se),J.resetTextureUnits();let Xe=K.fog,Ze=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?K.environment:null,He=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:bt.workingColorSpace,Qe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,tt=he.get(re.envMap||Ze,Qe),gt=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,_t=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ve=!!ce.morphAttributes.position,Et=!!ce.morphAttributes.normal,Xt=!!ce.morphAttributes.color,Rt=Ii;re.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Rt=w.toneMapping);let Ct=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,xt=Ct!==void 0?Ct.length:0,we=Z.get(re),Ut=T.state.lights;if(lt===!0&&(ne===!0||F!==H)){let Fe=F===H&&re.id===D;Oe.setState(re,F,Fe)}let Je=!1;re.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ut.state.version||we.outputColorSpace!==He||ie.isBatchedMesh&&we.batching===!1||!ie.isBatchedMesh&&we.batching===!0||ie.isBatchedMesh&&we.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&we.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&we.instancing===!1||!ie.isInstancedMesh&&we.instancing===!0||ie.isSkinnedMesh&&we.skinning===!1||!ie.isSkinnedMesh&&we.skinning===!0||ie.isInstancedMesh&&we.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&we.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&we.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&we.instancingMorph===!1&&ie.morphTexture!==null||we.envMap!==tt||re.fog===!0&&we.fog!==Xe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Oe.numPlanes||we.numIntersection!==Oe.numIntersection)||we.vertexAlphas!==gt||we.vertexTangents!==_t||we.morphTargets!==Ve||we.morphNormals!==Et||we.morphColors!==Xt||we.toneMapping!==Rt||we.morphTargetsCount!==xt||!!we.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,we.__version=re.version);let qn=we.currentProgram;Je===!0&&(qn=zs(re,K,ie),P&&re.isNodeMaterial&&P.onUpdateProgram(re,qn,we));let ui=!1,bi=!1,fs=!1,Pt=qn.getUniforms(),me=we.uniforms;if(A.useProgram(qn.program)&&(ui=!0,bi=!0,fs=!0),re.id!==D&&(D=re.id,bi=!0),we.needsLights){let Fe=Ka(T.state.lightProbeGridArray,ie);we.lightProbeGrid!==Fe&&(we.lightProbeGrid=Fe,bi=!0)}if(ui||H!==F){A.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),Pt.setValue(B,"projectionMatrix",F.projectionMatrix),Pt.setValue(B,"viewMatrix",F.matrixWorldInverse);let Ft=Pt.map.cameraPosition;Ft!==void 0&&Ft.setValue(B,Ae.setFromMatrixPosition(F.matrixWorld)),U.logarithmicDepthBuffer&&Pt.setValue(B,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Pt.setValue(B,"isOrthographic",F.isOrthographicCamera===!0),H!==F&&(H=F,bi=!0,fs=!0)}if(we.needsLights&&(Ut.state.sunShadowMap.length>0&&Pt.setValue(B,"sunShadowMap",Ut.state.sunShadowMap,J),Ut.state.directionalShadowMap.length>0&&Pt.setValue(B,"directionalShadowMap",Ut.state.directionalShadowMap,J),Ut.state.spotShadowMap.length>0&&Pt.setValue(B,"spotShadowMap",Ut.state.spotShadowMap,J),Ut.state.pointShadowMap.length>0&&Pt.setValue(B,"pointShadowMap",Ut.state.pointShadowMap,J)),ie.isSkinnedMesh){Pt.setOptional(B,ie,"bindMatrix"),Pt.setOptional(B,ie,"bindMatrixInverse");let Fe=ie.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Pt.setValue(B,"boneTexture",Fe.boneTexture,J))}ie.isBatchedMesh&&(Pt.setOptional(B,ie,"batchingTexture"),Pt.setValue(B,"batchingTexture",ie._matricesTexture,J),Pt.setOptional(B,ie,"batchingIdTexture"),Pt.setValue(B,"batchingIdTexture",ie._indirectTexture,J),Pt.setOptional(B,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Pt.setValue(B,"batchingColorTexture",ie._colorsTexture,J));let ct=ce.morphAttributes;if((ct.position!==void 0||ct.normal!==void 0||ct.color!==void 0)&&X.update(ie,ce,qn),(bi||we.receiveShadow!==ie.receiveShadow)&&(we.receiveShadow=ie.receiveShadow,Pt.setValue(B,"receiveShadow",ie.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&K.environment!==null&&(me.envMapIntensity.value=K.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=py()),bi){if(Pt.setValue(B,"toneMappingExposure",w.toneMappingExposure),we.needsLights&&kt(me,fs),Xe&&re.fog===!0&&Ge.refreshFogUniforms(me,Xe),Ge.refreshMaterialUniforms(me,re,j,q,T.state.transmissionRenderTarget[F.id]),we.needsLights&&we.lightProbeGrid){let Fe=we.lightProbeGrid;me.probesSH.value=Fe.texture,me.probesMin.value.copy(Fe.boundingBox.min),me.probesMax.value.copy(Fe.boundingBox.max),me.probesResolution.value.copy(Fe.resolution)}lo.upload(B,mr(we),me,J)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(lo.upload(B,mr(we),me,J),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Pt.setValue(B,"center",ie.center),Pt.setValue(B,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(B,"normalMatrix",ie.normalMatrix),Pt.setValue(B,"modelMatrix",ie.matrixWorld),re.uniformsGroups!==void 0){let Fe=re.uniformsGroups;for(let Ft=0,Tt=Fe.length;Ft<Tt;Ft++){let Yt=Fe[Ft];ve.update(Yt,qn),ve.bind(Yt,qn)}}return qn}function kt(F,K){F.ambientLightColor.needsUpdate=K,F.lightProbe.needsUpdate=K,F.sunLights.needsUpdate=K,F.sunLightShadows.needsUpdate=K,F.directionalLights.needsUpdate=K,F.directionalLightShadows.needsUpdate=K,F.pointLights.needsUpdate=K,F.pointLightShadows.needsUpdate=K,F.spotLights.needsUpdate=K,F.spotLightShadows.needsUpdate=K,F.rectAreaLights.needsUpdate=K,F.hemisphereLights.needsUpdate=K}function Lo(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(F,K,ce){let re=Z.get(F);re.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Z.get(F.texture).__webglTexture=K,Z.get(F.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,K){let ce=Z.get(F);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(F,K=0,ce=0){V=F,N=K,O=ce;let re=null,ie=!1,Xe=!1;if(F){let He=Z.get(F);if(He.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(B.FRAMEBUFFER,He.__webglFramebuffer),k.copy(F.viewport),$.copy(F.scissor),Q=F.scissorTest,A.viewport(k),A.scissor($),A.setScissorTest(Q),D=-1;return}else if(He.__webglFramebuffer===void 0)J.setupRenderTarget(F);else if(He.__hasExternalTextures)J.rebindTextures(F,Z.get(F.texture).__webglTexture,Z.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let gt=F.depthTexture;if(He.__boundDepthTexture!==gt){if(gt!==null&&Z.has(gt)&&(F.width!==gt.image.width||F.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(F)}}let Qe=F.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Xe=!0);let tt=Z.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(tt[K])?re=tt[K][ce]:re=tt[K],ie=!0):F.samples>0&&J.useMultisampledRTT(F)===!1?re=Z.get(F).__webglMultisampledFramebuffer:Array.isArray(tt)?re=tt[ce]:re=tt,k.copy(F.viewport),$.copy(F.scissor),Q=F.scissorTest}else k.copy(Ee).multiplyScalar(j).floor(),$.copy(ze).multiplyScalar(j).floor(),Q=Ke;if(ce!==0&&(re=I),A.bindFramebuffer(B.FRAMEBUFFER,re)&&A.drawBuffers(F,re),A.viewport(k),A.scissor($),A.setScissorTest(Q),ie){let He=Z.get(F.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,He.__webglTexture,ce)}else if(Xe){let He=K;for(let Qe=0;Qe<F.textures.length;Qe++){let tt=Z.get(F.textures[Qe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Qe,tt.__webglTexture,ce,He)}}else if(F!==null&&ce!==0){let He=Z.get(F.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,He.__webglTexture,ce)}D=-1};function Do(F){let K=Z.get(F);return(K.__readFormat!==F.format||K.__readType!==F.type)&&(K.__readFormat=F.format,K.__readType=F.type,K.__formatReadable=U.textureFormatReadable(F.format),K.__typeReadable=U.textureTypeReadable(F.type)),K}this.readRenderTargetPixels=function(F,K,ce,re,ie,Xe,Ze,He=0){if(!(F&&F.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Z.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ze!==void 0&&(Qe=Qe[Ze]),Qe){A.bindFramebuffer(B.FRAMEBUFFER,Qe);try{let tt=F.textures[He],gt=tt.format,_t=tt.type;F.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+He);let Ve=Do(tt);if(Ve.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=F.width-re&&ce>=0&&ce<=F.height-ie&&B.readPixels(K,ce,re,ie,Le.convert(gt),Le.convert(_t),Xe)}finally{let tt=V!==null?Z.get(V).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(F,K,ce,re,ie,Xe,Ze,He=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Z.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ze!==void 0&&(Qe=Qe[Ze]),Qe)if(K>=0&&K<=F.width-re&&ce>=0&&ce<=F.height-ie){A.bindFramebuffer(B.FRAMEBUFFER,Qe);let tt=F.textures[He],gt=tt.format,_t=tt.type;F.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+He);let Ve=Do(tt);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.bufferData(B.PIXEL_PACK_BUFFER,Xe.byteLength,B.STREAM_READ),B.readPixels(K,ce,re,ie,Le.convert(gt),Le.convert(_t),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Xt=V!==null?Z.get(V).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,Xt);let Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await N0(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Xe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Et),B.deleteSync(Rt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,K=null,ce=0){let re=Math.pow(2,-ce),ie=Math.floor(F.image.width*re),Xe=Math.floor(F.image.height*re),Ze=K!==null?K.x:0,He=K!==null?K.y:0;J.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,ce,0,0,Ze,He,ie,Xe),A.unbindTexture()},this.copyTextureToTexture=function(F,K,ce=null,re=null,ie=0,Xe=0){let Ze,He,Qe,tt,gt,_t,Ve,Et,Xt,Rt=F.isCompressedTexture?F.mipmaps[Xe]:F.image;if(ce!==null)Ze=ce.max.x-ce.min.x,He=ce.max.y-ce.min.y,Qe=ce.isBox3?ce.max.z-ce.min.z:1,tt=ce.min.x,gt=ce.min.y,_t=ce.isBox3?ce.min.z:0;else{let me=Math.pow(2,-ie);Ze=Math.floor(Rt.width*me),He=Math.floor(Rt.height*me),F.isDataArrayTexture?Qe=Rt.depth:F.isData3DTexture?Qe=Math.floor(Rt.depth*me):Qe=1,tt=0,gt=0,_t=0}re!==null?(Ve=re.x,Et=re.y,Xt=re.z):(Ve=0,Et=0,Xt=0);let Ct=Le.convert(K.format),xt=Le.convert(K.type),we;K.isData3DTexture?(J.setTexture3D(K,0),we=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(J.setTexture2DArray(K,0),we=B.TEXTURE_2D_ARRAY):(J.setTexture2D(K,0),we=B.TEXTURE_2D),A.activeTexture(B.TEXTURE0),A.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),A.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),A.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);let Ut=A.getParameter(B.UNPACK_ROW_LENGTH),Je=A.getParameter(B.UNPACK_IMAGE_HEIGHT),qn=A.getParameter(B.UNPACK_SKIP_PIXELS),ui=A.getParameter(B.UNPACK_SKIP_ROWS),bi=A.getParameter(B.UNPACK_SKIP_IMAGES);A.pixelStorei(B.UNPACK_ROW_LENGTH,Rt.width),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Rt.height),A.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),A.pixelStorei(B.UNPACK_SKIP_ROWS,gt),A.pixelStorei(B.UNPACK_SKIP_IMAGES,_t);let fs=F.isDataArrayTexture||F.isData3DTexture,Pt=K.isDataArrayTexture||K.isData3DTexture;if(F.isDepthTexture){let me=Z.get(F),ct=Z.get(K),Fe=Z.get(me.__renderTarget),Ft=Z.get(ct.__renderTarget);A.bindFramebuffer(B.READ_FRAMEBUFFER,Fe.__webglFramebuffer),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Tt=0;Tt<Qe;Tt++)fs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Z.get(F).__webglTexture,ie,_t+Tt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Z.get(K).__webglTexture,Xe,Xt+Tt)),B.blitFramebuffer(tt,gt,Ze,He,Ve,Et,Ze,He,B.DEPTH_BUFFER_BIT,B.NEAREST);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ie!==0||F.isRenderTargetTexture||Z.has(F)){let me=Z.get(F),ct=Z.get(K);A.bindFramebuffer(B.READ_FRAMEBUFFER,C),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,L);for(let Fe=0;Fe<Qe;Fe++)fs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,me.__webglTexture,ie,_t+Fe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,me.__webglTexture,ie),Pt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ct.__webglTexture,Xe,Xt+Fe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ct.__webglTexture,Xe),ie!==0?B.blitFramebuffer(tt,gt,Ze,He,Ve,Et,Ze,He,B.COLOR_BUFFER_BIT,B.NEAREST):Pt?B.copyTexSubImage3D(we,Xe,Ve,Et,Xt+Fe,tt,gt,Ze,He):B.copyTexSubImage2D(we,Xe,Ve,Et,tt,gt,Ze,He);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pt?F.isDataTexture||F.isData3DTexture?B.texSubImage3D(we,Xe,Ve,Et,Xt,Ze,He,Qe,Ct,xt,Rt.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(we,Xe,Ve,Et,Xt,Ze,He,Qe,Ct,Rt.data):B.texSubImage3D(we,Xe,Ve,Et,Xt,Ze,He,Qe,Ct,xt,Rt):F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Xe,Ve,Et,Ze,He,Ct,xt,Rt.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Xe,Ve,Et,Rt.width,Rt.height,Ct,Rt.data):B.texSubImage2D(B.TEXTURE_2D,Xe,Ve,Et,Ze,He,Ct,xt,Rt);A.pixelStorei(B.UNPACK_ROW_LENGTH,Ut),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Je),A.pixelStorei(B.UNPACK_SKIP_PIXELS,qn),A.pixelStorei(B.UNPACK_SKIP_ROWS,ui),A.pixelStorei(B.UNPACK_SKIP_IMAGES,bi),Xe===0&&K.generateMipmaps&&B.generateMipmap(we),A.unbindTexture()},this.initRenderTarget=function(F){Z.get(F).__webglFramebuffer===void 0&&J.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?J.setTextureCube(F,0):F.isData3DTexture?J.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?J.setTexture2DArray(F,0):J.setTexture2D(F,0),A.unbindTexture()},this.resetState=function(){N=0,O=0,V=null,A.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var Wt=(i,e,t)=>i<e?e:i>t?t:i,Nt=(i,e,t)=>i+(e-i)*t,pu=i=>i*i*(3-2*i),wt=(i,e,t)=>{let n=Wt((t-i)/(e-i),0,1);return n*n*(3-2*n)},vp=1337;function xp(i){vp=i|0}function my(i){return i=i^vp|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Wn=(i,e)=>my(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function ai(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Nt(Wn(t,e),Wn(t+1,e),s)}var mu=(i,e=0)=>ai(i,e)*.55+ai(i*2.03,e+7)*.3+ai(i*4.1,e+13)*.15;function Kt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var du=new Se,de=i=>(du.set(i),[du.r,du.g,du.b]),Ef=(i,e,t)=>[Nt(i[0],e[0],t),Nt(i[1],e[1],t),Nt(i[2],e[2],t)],bn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Yi=["city","sakura","coast","country","mountain","snow"],Ba={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},wf=1500,_p=260,Ps=0,Af=0;function Mp(i){Af=Math.max(0,Yi.indexOf(i))}function uo(i){let e=Math.floor(i/wf),t=i-e*wf,n=pu(Wt((t-(wf-_p))/_p,0,1)),s=Yi.length;return{a:Yi[((e+Af)%s+s)%s],b:Yi[((e+Af+1)%s+s)%s],t:n}}function It(i){let e=uo(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var Jt=i=>{let e=uo(i);return e.t<.5?e.a:e.b};function An(i,e){let t=uo(i);return Nt(Ba[t.a][e],Ba[t.b][e],t.t)}var sr=650,rr=375,ho=i=>i*sr+rr;function Oa(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=It(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var Rf={x:new Map,r:new Map,t:new Map};function Cf(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function Is(i){let e=Math.round((i-rr)/sr);return Cf(Rf.x,e,()=>{let t=ho(e);return Oa(t)?{k:e,s:t}:null})}function gy(i){let e=Is(i);return e?1-wt(8,45,Math.abs(i-e.s)):0}var or=1150,fo=820,za=4.6,Pf=i=>i*or+fo;function If(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=It(i+t);if(n.country+n.sakura<.9)return!1}let e=Is(i);return!(e&&Math.abs(e.s-i)<170)}function vi(i){let e=Math.round((i-fo)/or);return Cf(Rf.r,e,()=>{let t=Pf(e);return If(t)?{k:e,s:t}:null})}function vy(i){let e=vi(i);return e?1-wt(30,70,Math.abs(i-e.s)):0}function xy(i){let e=-za;return i<11?e-1.3:i<16?Nt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Nt(e+.7,.35,(i-20)/5.5):.35}var bp=1050,Sp=525,cn=85,on=125,_y=24,yy=i=>i*bp+Sp;function My(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=It(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function xi(i){let e=Math.round((i-Sp)/bp);return Cf(Rf.t,e,()=>{let t=yy(e);return My(t)?{k:e,s:t}:null})}function by(i){let e=xi(i);return e?1-wt(cn+20,on+25,Math.abs(i-e.s)):0}var gu=0,xu=(i,e)=>{let t=i/on;return _y*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var qi=2,vu=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(ai(e/300,11)-.5)*2+(ai(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*An(e,"curv")*(1-Math.max(gy(e),vy(e),by(e)))}elevRaw(e){return An(e,"base")+An(e,"hill")*(mu(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=Is(e);if(n){let o=1-wt(8,45,Math.abs(e-n.s));o>0&&(t=Nt(t,this.elevRaw(n.s),o))}let s=vi(e);if(s){let o=1-wt(30,70,Math.abs(e-s.s));o>0&&(t=Nt(t,this.elevRaw(s.s),o))}let r=xi(e);if(r){let o=1-wt(cn+10,on+45,Math.abs(e-r.s));o>0&&(t=Nt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*qi<e+qi;){let t=this.X.length-1,n=t*qi,s=this.curv(n+qi/2)*qi,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*qi),this.Z.push(this.Z[t]+Math.cos(r+s/2)*qi),this.H.push(r+s),this.Y.push(this.elev(n+qi))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+qi);let n=e/qi,s=Math.floor(n),r=n-s;t.x=Nt(this.X[s],this.X[s+1],r),t.z=Nt(this.Z[s],this.Z[s+1],r),t.y=Nt(this.Y[s],this.Y[s+1],r),t.h=Nt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),a=Math.cos(t.h);return t.fx=o,t.fz=a,t.rx=-a,t.rz=o,t}};function yp(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+wt(45,190,r)*16*(.45+.55*ai(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+wt(s+1.5,80,r)*24*(.5+.5*ai(e/170,5))+wt(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let o=r-(s+2);return(o<26?Nt(1.25,-1.6,o/26):Nt(-1.6,-7,Wt((o-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let a=8+6*ai(e/140,61),c=r-(s+1);return c<a?c:Math.min(a+(c-a)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+wt(105,230,r)*95*(.6+.4*ai(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Nt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(ai(e/40+(t>0?3:0),71)-.5):.55+wt(125,210,r)*40*(.45+.55*ai(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+wt(135,215,r)*36*(.4+.6*ai(e/210+(t>0?9:0),7))}}function ar(i,e,t,n){let s=uo(i),r=yp(s.a,i,e,t,n),o=s.t>0?Nt(r,yp(s.b,i,e,t,n),s.t):r;gu=0;let a=vi(i);if(a){let _=Math.abs(i-a.s);if(_>=36)return o;let S=_<29?xy(_):Nt(.35,o,wt(29,36,_));return Math.abs(e)<n+3.2&&(S=Math.min(S,-.08)),S}let c=xi(i);if(!c)return o;let u=i-c.s,f=Math.abs(u);if(f>=2*on)return o;let p=Math.abs(e),m=xu(u,e),v;return f<cn?v=p<=n+1.46?-.25:Math.max(o,m):v=Math.max(o,Math.min(m,p<n+1?-.06:p-(n+1))),gu=Math.max(0,v-o),v}function Tp(i){let e=vi(i);return e?1-wt(27,34,Math.abs(i-e.s)):0}var ka=new z,_u=new z,Sy=[1,1,1],Sn=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new nt,this.nm=new ft,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,a,c,u){this.n>=this.cap&&this.grow(this.n+1);let f=this.e,p=this.ne,m=this.n*3,v=this.P,_=this.bb,S=f[0]*e+f[4]*t+f[8]*n+f[12],l=f[1]*e+f[5]*t+f[9]*n+f[13],h=f[2]*e+f[6]*t+f[10]*n+f[14];v[m]=S,v[m+1]=l,v[m+2]=h,S<_[0]&&(_[0]=S),l<_[1]&&(_[1]=l),h<_[2]&&(_[2]=h),S>_[3]&&(_[3]=S),l>_[4]&&(_[4]=l),h>_[5]&&(_[5]=h);let d=p[0]*s+p[3]*r+p[6]*o,x=p[1]*s+p[4]*r+p[7]*o,g=p[2]*s+p[5]*r+p[8]*o,y=127/(Math.sqrt(d*d+x*x+g*g)||1);if(this.N[m]=Math.round(d*y),this.N[m+1]=Math.round(x*y),this.N[m+2]=Math.round(g*y),this.hasUV&&(this.U[this.n*2]=a,this.U[this.n*2+1]=c),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(l)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasColor){let T=u||Sy,E=this.Cl;E[m]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,E[m+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,E[m+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){ka.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),_u.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),_u.lengthSq()<1e-12&&_u.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),ka.cross(_u).normalize();let a=ka.x,c=ka.y,u=ka.z,f=o?o.u0:0,p=o?o.u1:1,m=o?o.v0:0,v=o?o.v1:1;this.vtx(e[0],e[1],e[2],a,c,u,f,m,r),this.vtx(t[0],t[1],t[2],a,c,u,p,m,r),this.vtx(n[0],n[1],n[2],a,c,u,p,v,r),this.vtx(e[0],e[1],e[2],a,c,u,f,m,r),this.vtx(n[0],n[1],n[2],a,c,u,p,v,r),this.vtx(s[0],s[1],s[2],a,c,u,f,v,r)}box(e,t,n,s,r,o,a,c=null,u=null){let f=c||{},p=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],p.nz||a,f.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],p.pz||a,f.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],p.nx||a,f.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],p.px||a,f.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],p.py||a,f.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],p.ny||a,f.ny)}cyl(e,t,n,s,r,o,a,c,u=!0){let f=(s-r)/o;for(let p=0;p<a;p++){let m=p/a*Math.PI*2,v=(p+1)/a*Math.PI*2,_=Math.cos(m),S=Math.sin(m),l=Math.cos(v),h=Math.sin(v),d=[e+_*s,t,n+S*s],x=[e+l*s,t,n+h*s],g=[e+l*r,t+o,n+h*r],y=[e+_*r,t+o,n+S*r];this.vtx(d[0],d[1],d[2],_,f,S,0,0,c),this.vtx(y[0],y[1],y[2],_,f,S,0,0,c),this.vtx(g[0],g[1],g[2],l,f,h,0,0,c),this.vtx(d[0],d[1],d[2],_,f,S,0,0,c),this.vtx(g[0],g[1],g[2],l,f,h,0,0,c),this.vtx(x[0],x[1],x[2],l,f,h,0,0,c),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,c),this.vtx(g[0],g[1],g[2],0,1,0,0,0,c),this.vtx(y[0],y[1],y[2],0,1,0,0,0,c))}}rod(e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],u=t[2]-e[2],f=Math.hypot(a,c,u);a/=f,c/=f,u/=f;let p=0,m=1,v=0;Math.abs(c)>.99&&(p=1,m=0);let _=c*v-u*m,S=u*p-a*v,l=a*m-c*p,h=Math.hypot(_,S,l);_/=h,S/=h,l/=h;let d=S*u-l*c,x=l*a-_*u,g=_*c-S*a;for(let y=0;y<r;y++){let T=y/r*Math.PI*2,E=(y+1)/r*Math.PI*2,M=Math.cos(T),b=Math.sin(T),w=Math.cos(E),R=Math.sin(E),P=_*M+d*b,I=S*M+x*b,C=l*M+g*b,L=_*w+d*R,N=S*w+x*R,O=l*w+g*R,V=[e[0]+P*n,e[1]+I*n,e[2]+C*n],D=[e[0]+L*n,e[1]+N*n,e[2]+O*n],H=[t[0]+L*s,t[1]+N*s,t[2]+O*s],k=[t[0]+P*s,t[1]+I*s,t[2]+C*s];this.vtx(V[0],V[1],V[2],P,I,C,0,0,o),this.vtx(D[0],D[1],D[2],L,N,O,0,0,o),this.vtx(H[0],H[1],H[2],L,N,O,0,0,o),this.vtx(V[0],V[1],V[2],P,I,C,0,0,o),this.vtx(H[0],H[1],H[2],L,N,O,0,0,o),this.vtx(k[0],k[1],k[2],P,I,C,0,0,o)}return f}blob(e,t,n,s,r,o,a=0,c=1){let u=Ep[a%Ep.length],f=u.attributes.position.array,p=u.attributes.normal.array,m=u.userData.disp;for(let v=0;v<f.length;v+=3){let _=1+m[v/3],S=Math.max(0,Math.min(1,p[v+1]*.5+.5)),l=[o[0]+(r[0]-o[0])*S,o[1]+(r[1]-o[1])*S,o[2]+(r[2]-o[2])*S];this.vtx(e+f[v]*s*_,t+f[v+1]*s*_*c,n+f[v+2]*s*_,p[v],p[v+1],p[v+2],0,0,l)}}wire(e,t,n,s,r,o=10){let a=e;this.noShadow=!0;for(let c=1;c<=o;c++){let u=c/o,f=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(a,f,s,s,3,r),a=f}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,a,c]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],a,c,s[o])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,a=e.C,c=e.U,u=this.n,f=this.bb;for(let p=0;p<e.n*3;p+=3){let m=r[p],v=r[p+1],_=r[p+2],S=u*3+p,l=n[0]*m+n[4]*v+n[8]*_+n[12],h=n[1]*m+n[5]*v+n[9]*_+n[13],d=n[2]*m+n[6]*v+n[10]*_+n[14];this.P[S]=l,this.P[S+1]=h,this.P[S+2]=d,this.hasAO&&(this.A[u+p/3]=this.aoByte(h)),l<f[0]&&(f[0]=l),h<f[1]&&(f[1]=h),d<f[2]&&(f[2]=d),l>f[3]&&(f[3]=l),h>f[4]&&(f[4]=h),d>f[5]&&(f[5]=d);let x=o[p],g=o[p+1],y=o[p+2],T=s[0]*x+s[3]*g+s[6]*y,E=s[1]*x+s[4]*g+s[7]*y,M=s[2]*x+s[5]*g+s[8]*y,b=127/(Math.sqrt(T*T+E*E+M*M)||1);this.N[S]=Math.round(T*b),this.N[S+1]=Math.round(E*b),this.N[S+2]=Math.round(M*b)}this.hasColor&&(a?this.Cl.set(a,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(c?this.U.set(c,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new vt,t=this.n,n=this.bb;return e.setAttribute("position",new Gt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Gt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Gt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Gt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Gt(this.Lt.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new Gt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new di(new z(n[0],n[1],n[2]),new z(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new pi),e}},Ep=[0,1,2,3].map(i=>{let e=new ma(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,a)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(a*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ut.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var Ty=ut.shadowmap_pars_fragment;function Df(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ut.shadowmap_pars_fragment=Ty.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}Df(1);function Cp(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";ut.shadowmap_pars_fragment=t+ut.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}ut.lights_fragment_begin=ut.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var rs=4200,$e={uSkyHor:{value:new Se(.7,.8,.9)},uSkyZen:{value:new Se(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Ie},uSunDir:{value:new z(0,1,0)},uSunCol:{value:new Se(1,1,1)},uTuftV:{value:new mt(.167,.333,.164,.165)},uTunA:{value:new z(0,-1e4,0)},uTunB:{value:new z(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new z},uCarFwd:{value:new z(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:Ey()},uCloudTex:{value:null},uCloudOrg:{value:new Ie},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Ie(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function Pp(i){let e=new ys(new Uint8Array(i),i.length,1,er);return e.minFilter=e.magFilter=pn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var jn=Pp([16,16,16,70,200,255,255,255]),Ha=Pp([28,40,70,130,200,240,255,255]);function Ey(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ys(e,256,256,Jn);return s.wrapS=s.wrapT=zr,s.magFilter=Bt,s.minFilter=Dn,s.generateMipmaps=!0,s.colorSpace=oi,s.needsUpdate=!0,s}var _i=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,yu=1600,Lf=256,wy=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/yu).toFixed(8)} + 0.5).r * uCloudSh; }`,Ay=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Ip=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/yu).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,Lp=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,Ry=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,Cy=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,Mu=new Jr;Mu.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};Mu.customProgramCacheKey=()=>"propdepth";function Dp(){let i=new Ot(Lf,Lf,{format:er,type:zn,depthBuffer:!1,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),e=new pt({uniforms:{uCenter:{value:new Ie},uOrigin:$e.uOrigin,uTime:$e.uTime,uNoiseTex:$e.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${yu.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new dt(new tn(2,2),e),n=new is;t.frustumCulled=!1,$e.uCloudTex.value=i.texture,$e.uCloudTex.rt=i;let s=yu/Lf;return{update(r,o,a,c,u){let f=Math.round((o+c)/s)*s-c,p=Math.round((a+u)/s)*s-u;e.uniforms.uCenter.value.set(f,p),$e.uCloudOrg.value.set(f,p);let m=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(m)}}}function lr(i,e="",t="",n=!0){i.uniforms.uOrigin=$e.uOrigin,i.uniforms.uCloudSh=$e.uCloudSh,i.uniforms.uTime=$e.uTime,i.uniforms.uNoiseTex=$e.uNoiseTex,i.uniforms.uCloudTex=$e.uCloudTex,i.uniforms.uCloudOrg=$e.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=$e[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?Ip:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${_i}${wy}${Ry}${e}`).replace("#include <opaque_fragment>",`${n?Lp:Ay}${t}${Cy}
#include <opaque_fragment>`)}var Py=`
// an anti-aliased line of half-width hw (world units) at d = 0, given d's screen-space footprint fw; fades out once it is
// thinner than a pixel
float crackLine(float d, float hw, float fw){ fw = max(fw, 1e-4); return clamp((hw - abs(d)) / fw + 0.5, 0.0, 1.0) * min(1.0, 2.0 * hw / fw); }
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
  vec3 base = mix(L(vec3(0.90, 0.85, 0.81)), L(vec3(0.82, 0.77, 0.73)), hash12(id));
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
  g = mix(g, L(vec3(0.68, 0.66, 0.40)), 0.25 * smoothstep(0.6, 0.85, vnoise(p * 0.02 + 7.3)));
  g *= 0.8 + 0.28 * vnoise(p * vec2(0.5, 0.7) + 1.7);
  return g * (0.9 + 0.18 * vnoise(p * vec2(2.4, 9.0) + 5.9));
}
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  vec3 g = grassCol(p, L(vec3(0.36, 0.60, 0.28)), L(vec3(0.62, 0.78, 0.37)));
  float pet = smoothstep(0.7, 0.8, vnoise(p*3.3)) * (1.0 - 0.6*smoothstep(rw + 6.0, rw + 20.0, abs(u)));
  return mix(g, L(vec3(1.0, 0.83, 0.89)), pet*0.85);
}
vec3 coastGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (u > 0.0) return grassCol(p, L(vec3(0.31, 0.60, 0.25)), L(vec3(0.52, 0.79, 0.32)));
  if (a < rw + 1.45) return L(vec3(0.73, 0.72, 0.69)) * (0.9 + 0.1*fbm2(p));
  if (a < rw + 2.08) return L(vec3(0.70, 0.70, 0.68)) * (0.82 + 0.12*vnoise(p*vec2(0.4, 5.0)));
  vec3 sand = mix(L(vec3(0.94, 0.87, 0.71)), L(vec3(0.85, 0.77, 0.62)), fbm2(p*0.2));
  return mix(sand, L(vec3(0.6, 0.55, 0.46)), 0.6*(1.0 - smoothstep(0.0, 0.9, vWY)));
}
vec3 countryGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  // the verge under its bank of tall grass (the clump cards, chunks.js placeBanks): dense grass in its own shade right
  // up to the asphalt, lighter towards the field (it used to be a gravel shoulder and a ditch)
  if (a < rw + 2.3) return mix(L(vec3(0.1, 0.25, 0.08)), L(vec3(0.3, 0.54, 0.18)), smoothstep(rw + 0.9, rw + 2.3, a) * (0.55 + 0.45 * vnoise(vec2(s * 1.4, u * 12.0) + 3.1)));
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
`,Iy=`
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
#endif`,Ly=`
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
}`,Np={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function Up(i){let e={};for(let t of i)e[Np[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var wp=new Map;function Va(i){let e=[...new Set(i)].sort().join("+"),t=wp.get(e);return t||(t=Fp(Up(e.split("+")),e),wp.set(e,t)),t}function Fp(i=Up(Object.keys(Np)),e="all"){let t=new ln({color:16777215,gradientMap:jn});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=$e.uSkyHor,n.uniforms.uSkyZen=$e.uSkyZen,n.uniforms.uWet=$e.uWet,n.uniforms.uNight=$e.uNight,n.uniforms.uSunDir=$e.uSunDir,n.uniforms.uSunCol=$e.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=$e[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),lr(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${Py}`,Ly+Iy,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v17-"+e,t}function Ap(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),lr(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function Dy(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=$e[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function Ny(i){i.uniforms.uLightsOn=$e.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function Rp(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function Nf(i){return i.onBeforeCompile=e=>lr(e),i.customProgramCacheKey=()=>"cs",i}var Uy="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",Fy=(i,e,t="")=>`
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
}`;function Uf(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=$e[o];s&&Object.assign(r.uniforms,s.uniforms),lr(r,Uy+(s?s.pars:""),Fy(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var Ls=48;function Bp(i,e){let t=new ln({color:16777215,gradientMap:Ha});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,e,i);for(let s of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])n.uniforms[s]=$e[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${Ip}
uniform vec4 uG[${Ls}], uGM[${Ls/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${Ls-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  // the colour of the field plot it stands in (countryGround: the same hash of the same 30 \xD7 17 m plot), dark at the
  // root, sunlit at the tip
  vec2 pid = floor(vec2(mod(gs, ${rs.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${Lp}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>"grass-v4",t}function Op(i,e){let t={};t.ground=Fp(),t.color=Ap(new ln({vertexColors:!0,gradientMap:jn}),1.6,.1,"color-v3",Rp),t.atlas=new ln({vertexColors:!0,gradientMap:jn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=a=>{Rp(a),Ny(a),lr(a)},t.atlas.customProgramCacheKey=()=>"atlas-v5",t.foliage=Ap(new ln({vertexColors:!0,gradientMap:Ha}),2.6,.24,"foliage-v2"),t.lamp=new hn({color:15789798}),t.sig=new hn({color:new Se(.15,1.7,1.1)}),t.sodium=new hn({color:new Se(5,2.3,.65)}),t.decal=new ln({vertexColors:!0,gradientMap:jn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=a=>lr(a),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new ln({map:e,vertexColors:!0,gradientMap:Ha,alphaTest:.42,side:wn}),t.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",ut.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),lr(a),Dy(a),a.uniforms.uTuftV=$e.uTuftV,a.uniforms.uWind=$e.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v5"),t.wire=new hn({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let o=new Kn(n);return t.pool=new hn({map:o,color:16762746,transparent:!0,opacity:0,blending:ss,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}var By=de("#f2c230"),zp=de("#26272c");function bu(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=An(s,"rw"),a=n*(o+.8),c=It(s),u=c.city+c.sakura>.5;t.push({x:r.x+r.rx*a,z:r.z+r.rz*a,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function kp(){let i=new en,e=Nf(new ln({vertexColors:!0,gradientMap:jn})),t=new hn({color:new Se(6,.45,.3)}),n=new hn({color:new Se(.22,.03,.03)}),s=[0,1].map(()=>{let r=new en,o=new en;r.add(o),o.position.set(-.42,1.02,-.02);let a=new Sn,c=3.6;for(let p=0,m=0;m<c;p++,m+=.45)a.box(-Math.min(m+.45,c),-.065,-.065,-m,.065,.065,p%2?zp:By);a.box(0,-.09,-.07,.38,.09,.07,zp);let u=new dt(a.build(),e);u.castShadow=!0,o.add(u);let f=[-.28,.28].map(p=>{let m=new dt(new $s(.13,18),n);return m.position.set(p,2.75,-.1),m.rotation.y=Math.PI,r.add(m),m});return i.add(r),{root:r,pivot:o,arm:u,lamps:f,L:c}});return i.visible=!1,{group:i,update(r,o,a,c,u){i.visible=!!r,r&&r.forEach((f,p)=>{let m=s[p];m.root.position.set(f.x-o.x,f.y,f.z-o.z),m.root.rotation.y=f.yaw,m.arm.scale.x=(f.rw+.25)/m.L,m.pivot.rotation.z=-a*(Math.PI/2-.06);let v=Math.floor(u*2.5)%2;m.lamps[0].material=c&&v===0?t:n,m.lamps[1].material=c&&v===1?t:n})}}}function Oy(){let t=()=>{let h=document.createElement("canvas");return h.width=1024,h.height=512,h},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),a='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let h=0;h<1024;h+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(h,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let u=[.1,.36,.62,.88].map(h=>h*1024),f=(h,d,x,g)=>{let y=r.createLinearGradient(h,d,h+x*.3,d+g);y.addColorStop(0,"#5d7fae"),y.addColorStop(.6,"#9db7d6"),y.addColorStop(1,"#2f3f55"),r.fillStyle=y,r.fillRect(h,d,x,g),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(h+x*.2,d),r.lineTo(h+x*.38,d),r.lineTo(h+x*.1,d+g),r.lineTo(h-x*.08,d+g),r.fill(),o.fillStyle="#ffeccc",o.fillRect(h,d,x,g)};for(let h=0;h<u.length-1;h++){let d=u[h]+40,x=u[h+1]-40,g=3,y=(x-d)/g;for(let T=0;T<g;T++)r.fillStyle="#6b737c",r.fillRect(d+T*y+2,34,y-4,58),f(d+T*y+6,38,y-12,50)}for(let h of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(h+2,34,28,58),f(h+5,38,22,50);for(let h of u)r.fillStyle="#c3c8ce",r.fillRect(h-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(h-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(h-30,22,60,c-36),f(h-24,34,20,46),f(h+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let h of u)r.fillStyle="#c3c8ce",r.fillRect(h-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${a}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let p=0,m=176,v=256,_=256;r.fillStyle="#d3d7dc",r.fillRect(p,m,v,_),r.fillStyle="#20262e",r.fillRect(p+14,m+44,v-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(p+40,m+44),r.lineTo(p+80,m+44),r.lineTo(p+40,m+140),r.lineTo(p+14,m+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(p+v/2-4,m+44,8,96),r.fillStyle="#111",r.fillRect(p+50,m+12,v-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${a}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",p+v/2,m+26),r.fillStyle="#1f9a50",r.fillRect(p,m+150,v,18),r.fillStyle="#e8892b",r.fillRect(p,m+170,v,7);for(let h of[p+40,p+v-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(h,m+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(h+(h<p+v/2?28:-28),m+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(p,m+_-30,v,30),r.fillStyle="#3a3f46",r.font=`800 16px ${a}`,r.fillText("17",p+v/2,m+220),o.fillStyle="#111",o.fillRect(p,m,v,_),o.fillStyle="#ff9a2a",o.font=`800 18px ${a}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",p+v/2,m+26);for(let h of[p+40,p+v-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(h,m+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let S=h=>{let d=new Kn(h);return d.colorSpace=sn,d.anisotropy=4,d},l=(h,d,x,g)=>({u0:h/1024,u1:(h+x)/1024,v0:1-(d+g)/512,v1:1-d/512});return{map:S(n),em:S(s),side:l(0,0,1024,c),sideR:{...l(0,0,1024,c),flip:!0},front:l(p,m,v,_),plain:l(342,202,28,28)}}function Hp(){let i=Oy(),e=Nf(new ln({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:jn})),t=new Sn({uv:!0}),n=[1,1,1],s=de("#9aa1a9"),r=de("#3b4047"),o=de("#2a2d33"),a=19.5,c=.6,u=3,f=1.45,p=.95,m=4,v=4,_=.3,S=de("#33363b"),l={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},h=(M,b,w,R,P,I,C,L=!1)=>t.box(M,b,w,R,P,I,C,l,L?{noBottom:!0}:null),d=(M,b,w,R,P,I)=>{let L=w-P/2,N=w+P/2;for(let O=0;O<12;O++){let V=O/12*Math.PI*2,D=(O+1)/12*Math.PI*2,H=M+Math.cos(V)*R,k=b+Math.sin(V)*R,$=M+Math.cos(D)*R,Q=b+Math.sin(D)*R;t.quad([H,k,L],[$,Q,L],[$,Q,N],[H,k,N],I,i.plain),t.quad([M,b,N],[H,k,N],[$,Q,N],[$,Q,N],I,i.plain),t.quad([M,b,L],[$,Q,L],[H,k,L],[H,k,L],I,i.plain)}},x=u*a+(u-1)*c;for(let M=0;M<u;M++){let b=-x/2+a/2+M*(a+c),w=b-a/2,R=b+a/2;t.quad([w,p,f],[R,p,f],[R,m,f],[w,m,f],n,i.side),t.quad([R,p,-f],[w,p,-f],[w,m,-f],[R,m,-f],n,i.side);let P=M===u-1,I=M===0;t.quad([R,p,f],[R,p,-f],[R,m,-f],[R,m,f],P?n:de("#c9ced4"),P?i.front:i.plain),t.quad([w,p,-f],[w,p,f],[w,m,f],[w,m,-f],I?n:de("#c9ced4"),I?i.front:i.plain);for(let C=0;C<v;C++)for(let L of[1,-1]){let N=C/v*Math.PI/2,O=(C+1)/v*Math.PI/2,V=L*f*Math.cos(N),D=m+_*Math.sin(N),H=L*f*Math.cos(O),k=m+_*Math.sin(O);t.quad([w,D,V],[R,D,V],[R,k,H],[w,k,H],s,i.plain);for(let $ of[w,R]){let Q=[[$,m,0],[$,D,V],[$,k,H]];t.quad(Q[0],Q[1],Q[2],Q[2],s,i.plain),t.quad(Q[0],Q[2],Q[1],Q[1],s,i.plain)}}for(let C of[1,-1])h(w,m-.02,C*f-.04,R,m+.05,C*f+.04,r);for(let C of[b-5.5,b+5.5])h(C-1.3,m+.2,-.8,C+1.3,m+.62,.8,de("#c4c9cf"),!0);h(w+.3,.82,-f+.1,R-.3,p,f-.1,o);for(let[C,L,N,O]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])h(b+C-L/2,.82-N,-1.15+O*.2,b+C+L/2,.82,1.15+O*.2,O>0?o:r);for(let C of[b-7,b+7]){for(let L of[1,-1]){h(C-1.35,.32,L*.86,C+1.35,.56,L*1.02,r);for(let N of[-1.05,1.05])h(C+N-.17,.3,L*.84,C+N+.17,.58,L*1.06,o)}h(C-.35,.5,-1,C+.35,.8,1,r);for(let L of[-1.05,1.05])for(let N of[1,-1])d(C+L,.43,N*.6,.43,.13,S)}if(M<u-1&&h(R,p+.15,-.95,R+c,m-.1,.95,de("#3a3e44")),M===0){let C=b-3,L=m+.7;t.box(C-.6,m+.26,-.6,C+.6,m+.42,.6,r),t.rod([C-.5,m+.42,0],[C,L+.9,0],.03,.03,4,r),t.rod([C+.5,m+.42,0],[C,L+.9,0],.03,.03,4,r),t.rod([C,L+.9,-.85],[C,L+.9,.85],.03,.03,4,r)}}let g=new dt(t.build(),e);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1;let y=new en;y.add(g),y.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:x},E={};return{group:y,st:T,start(M,b,w=16){Object.assign(T,{active:!0,sx:M,dir:b,speed:w,u:-b*290,ds:b>0?-2:2,cleared:!1}),y.visible=!0},update(M,b,w,R,P){if(!T.active)return;T.u+=T.dir*T.speed*M;let I=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?I>P+1:I<-P-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,y.visible=!1;return}b.at(T.sx,E),y.position.set(E.x+E.fx*T.ds+E.rx*T.u-w.x,E.y+.34,E.z+E.fz*T.ds+E.rz*T.u-w.z),y.rotation.y=E.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+R*1.1}}}var zy='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',cr=2048,ur=4096;function Eu(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var Xp=Eu(256,256);{let i=Xp.getContext("2d"),e=i.createImageData(256,256),t=Kt(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var Ff=class{constructor(){this.cA=Eu(cr,ur),this.cE=Eu(cr/2,ur/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,cr/2,ur/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,cr,ur),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Xp,"repeat")}add(e,t,n,s){if(this.x+t+4>cr&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>ur)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(o.x,o.y),c.beginPath(),c.rect(0,0,t,n),c.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let a=.5;return this.cells[e]={u0:(o.x+a)/cr,u1:(o.x+t-a)/cr,v0:1-(o.y+n-a)/ur,v1:1-(o.y+a)/ur,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new Kn(n);return s.colorSpace=sn,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Dn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function fn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Nn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([a,c])=>o.addColorStop(a,c)),i.fillStyle=o,i.fillRect(e,t,n,s)}function po(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Nn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}fn(i,e,t,n,.13)}function os(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function Y(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function mo(i,e,t,n,s,r,o="#d9dde2",a="rgba(40,45,60,0.55)"){Y(i,e-r,t-r,n+2*r,s+2*r,o),Y(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=a,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function as(i,e,t,n,s,r,o=0){let a=i.createLinearGradient(e,t,e+n*.35,t+s),c=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";a.addColorStop(0,c),a.addColorStop(.55,u),a.addColorStop(1,"#dbe9f6"),i.fillStyle=a,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let f=e+n*r();i.beginPath(),i.moveTo(f,t),i.lineTo(f+n*.18,t),i.lineTo(f-n*.25,t+s),i.lineTo(f-n*.43,t+s),i.fill(),i.restore()}function Vp(i,e,t,n,s,r="#efe6d2"){Y(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Nn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function wu(i,e,t=800){i.font=`${t} ${e}px ${zy}`}function St(i,e,t,n,s,r,o,a=800,c=null){wu(i,r,a);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,wu(i,u,a);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function Su(i,e,t,n,s,r,o,a=800,c=null){let u=[...e],f=u.length,p=Math.min(r*1.05,(s-n)/f),m=Math.min(r,p*.95);wu(i,m,a),i.textAlign="center",i.textBaseline="middle",u.forEach((v,_)=>{let S=n+(s-n-p*f)/2+p*(_+.5);c&&(i.lineWidth=Math.max(2,m*.12),i.strokeStyle=c,i.strokeText(v,t,S)),i.fillStyle=o,i.fillText(v,t,S)})}function hr(i,e,t,n,s,r,o,a=!0){if(Y(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Nn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),a){i.fillStyle="#6a6a6a";for(let c=e+n*.2*o();c<e+n-4;c+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-c),f=s*(.12+o()*.25);i.fillRect(c,t+s-f,u,f)}}i.restore()}function ky(i,e,t,n,s,r,o){let a=i.getTransform();e.save(),e.drawImage(i.canvas,a.e+t,a.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",Y(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,Y(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Nn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Gp=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Tu=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Wp=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],Hy=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function qp(){let i=new Ff,e=Kt(2024),t=240,n=(l,h,d,x,g,y,T=!1)=>{po(l,i,d,x,"#ece8e0",0);let E=Kt(y*31+(g?7:0)+5);if(y===0){let M=d*.14,b=x*.22,w=d*.72,R=x*.5;mo(l,M,b,w,R,5),as(l,M,b,w/2,R,E),as(l,M+w/2,b,w/2,R,E);let P=E()<.8?w*(.18+E()*.25):0;P&&Vp(l,M+2,b+2,P,R-4,E()<.5?"#efe6d2":"#d9e4ea"),Y(l,M+w/2-2,b,4,R,"#cfd4da"),Y(l,M-8,b+R+5,w+16,6,"#d8d8d4"),os(l,M-4,b+R+11,8,60),os(l,M+w-4,b+R+11,8,60),g&&(hr(h,M,b,w,R,T?"#e6eeff":"#ffcf8f",E),P&&Y(h,M+2,b+2,P,R-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),Y(h,M+w/2-2,b,4,R,"#000"))}else if(y===1){for(let M of[.12,.56]){let b=d*M,w=x*.28,R=d*.3,P=x*.36;mo(l,b,w,R,P,4),as(l,b,w,R,P,E,1),l.fillStyle="rgba(255,255,255,0.35)",l.fillRect(b,w,R,P*.45),os(l,b,w+P+6,R,40,.1),g&&E()<.8&&hr(h,b,w,R,P,E()<.5?"#ffd9a0":"#e8f0ff",E)}l.fillStyle="#c9c9c4",l.beginPath(),l.arc(d*.88,x*.2,9,0,7),l.fill()}else if(y===2){let M=d*.1,b=x*.12,w=d*.8,R=x*.84;mo(l,M,b,w,R,4),as(l,M,b,w/2,R,E),as(l,M+w/2,b,w/2,R,E);let P=w*(.2+E()*.3);Vp(l,M+2,b+2,P,R-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),Y(l,M+w/2-2,b,4,R,"#cfd4da"),g&&(hr(h,M,b,w,R,T?"#e6eeff":"#ffcb85",E),Y(h,M+2,b+2,P,R-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),Y(h,M+w/2-2,b,4,R,"#000"))}else if(y===3){po(l,i,d,x,"#dfe3e6",0);let M=x*.25,b=x*.55;as(l,0,M,d,b,E,1);for(let w=0;w<=d;w+=d/4)Y(l,w-2,M,4,b,"#8d98a6");if(Y(l,0,M-4,d,4,"#8d98a6"),Y(l,0,M+b,d,5,"#7d8796"),g)for(let w=0;w<4;w++)E()<.7&&hr(h,w*d/4+2,M,d/4-4,b,E()<.6?"#f2f6ff":"#ffe2b0",E)}else if(y===4){l.fillStyle="#6b4a35",l.fillRect(0,0,d,x);for(let P=0;P<x;P+=12)Y(l,0,P,d,2,"rgba(30,18,10,0.35)"),Y(l,0,P+2,d,1,"rgba(255,220,180,0.06)");fn(l,i,d,x,.15);let M=d*.18,b=x*.25,w=d*.64,R=x*.45;Y(l,M-6,b-6,w+12,R+12,"#4a3020"),Y(l,M,b,w,R,"#efe4c8"),l.fillStyle="#5a3a26";for(let P=1;P<6;P++)l.fillRect(M+P*w/6-1.5,b,3,R);for(let P=1;P<3;P++)l.fillRect(M,b+P*R/3-1.5,w,3);if(g){hr(h,M,b,w,R,"#ffc070",E,!1),h.fillStyle="#000";for(let P=1;P<6;P++)h.fillRect(M+P*w/6-1.5,b,3,R);for(let P=1;P<3;P++)h.fillRect(M,b+P*R/3-1.5,w,3)}}else if(y===5){Y(l,d*.08,0,7,x,"#bdbdb6"),Y(l,d*.08+5,0,2,x,"rgba(0,0,0,0.2)");let M=d*.55,b=x*.3,w=d*.22,R=x*.24;mo(l,M,b,w,R,3),Y(l,M,b,w,R,"#d6dfe4"),l.fillStyle="rgba(255,255,255,0.4)",l.fillRect(M,b,w,R/2),os(l,M,b+R+4,w,50,.12),Y(l,d*.22,x*.55,26,34,"#cfcfca"),Y(l,d*.22+4,x*.55+6,18,12,"#9aa2a8"),g&&hr(h,M,b,w,R,T?"#eef2ff":"#fff0d8",E,!1)}else if(y===6){let M=d*.4,b=x*.35,w=d*.2,R=x*.28;mo(l,M,b,w,R,3),as(l,M,b,w,R,E,1),os(l,M,b+R+4,w,70,.14),g&&hr(h,M,b,w,R,T?"#e8efff":"#ffd9a0",E)}};for(let l=0;l<7;l++)i.add("win"+l,t,t,(h,d,x,g)=>n(h,d,x,g,!1,l)),i.add("win"+l+"L",t,t,(h,d,x,g)=>n(h,d,x,g,!0,l));for(let l of[0,2,5,6])i.add("win"+l+"C",t,t,(h,d,x,g)=>n(h,d,x,g,!0,l,!0));i.add("plain",t,t,(l,h,d,x)=>{po(l,i,d,x,"#ece8e0"),os(l,d*.3,0,12,x*.6,.06)}),i.add("concrete",t,t,(l,h,d,x)=>{po(l,i,d,x,"#d9d7d0",60);for(let g=0;g<6;g++)os(l,g*41%d,0,10,x*.5,.07)});let s=288,r=(l,h,d,x,g,y,T)=>{let E=(b,w,R,P,I,C=0)=>{l.fillStyle=I,l.beginPath(),l.ellipse(b,w,R,P,C,0,7),l.fill()},M=b=>b[Math.floor(y()*b.length)];if(T==="bakery"){Y(l,h,d,x,g,"#d9b98a"),Nn(l,h,d,x,g,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let b=d+g*.28;b<d+g*.72;b+=g*.2){Y(l,h,b,x,5,"#8a5a32");for(let w=h+8;w<h+x-8;w+=15+y()*10){let R=7+y()*6,P=4+y()*3;E(w,b-P,R,P,M(["#c98a3e","#b4732e","#d9a256","#a4632a"])),E(w-R*.2,b-P*1.4,R*.5,P*.35,"rgba(255,230,180,0.5)")}}Y(l,h+4,d+g*.8,x-8,g*.2,"#efe7d8"),Y(l,h+4,d+g*.8,x-8,3,"#9a9a96");for(let b=h+14;b<h+x-10;b+=18)E(b,d+g*.9,6,4,M(["#e8b35a","#c06a3a","#f2d29a"]));Y(l,h+x-64,d+10,52,22,"#7a3e1e"),St(l,"\u713C\u304D\u305F\u3066",h+x-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){Y(l,h,d,x,g,"#6f5a46");for(let b=d+6;b<d+g*.72;b+=g*.17){Y(l,h,b+g*.15,x,4,"#4a3828");for(let w=h+3;w<h+x-4;){let R=3+y()*4,P=g*(.1+y()*.045);Y(l,w,b+g*.15-P,R,P,M(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),w+=R+(y()<.1?4:.6)}}Y(l,h+4,d+g*.76,x-8,g*.24,"#8a7560");for(let b=h+8;b<h+x-22;b+=24)Y(l,b,d+g*.79,20,28,M(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),Y(l,b+3,d+g*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){Y(l,h,d,x,g,"#e8e2d2"),Nn(l,h,d,x,g,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let b=0;b<7;b++){let w=h+8+y()*(x-16),R=g*(.15+y()*.25);for(let P=0;P<R;P+=3.5)E(w+Math.sin(P*.25+b)*4+(y()-.5)*6,d+4+P,3.4,1.8,M(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),y()*3)}for(let b=0;b<3;b++){let w=d+g*(.5+b*.17);Y(l,h,w+14,x,4,"#9a8a76");for(let R=h+10+b*6;R<h+x-8;R+=19){let P=M(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let I=0;I<6;I++){l.strokeStyle="#4a7a3a",l.lineWidth=1.2,l.beginPath();let C=R+(y()-.5)*14;l.moveTo(R,w+10),l.lineTo(C,w-6-y()*8),l.stroke(),E(C,w-8-y()*8,3.2,3,P)}Y(l,R-6,w+4,12,11,M(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){Y(l,h,d,x,g,"#efece6"),Nn(l,h,d,x,g,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),Y(l,h+6,d+g*.18,x-60,3,"#7a7a7a");for(let w=h+12;w<h+x-66;w+=13+y()*5){l.fillStyle=M(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let R=d+g*.18+3,P=g*(.3+y()*.2);l.beginPath(),l.moveTo(w-5,R),l.lineTo(w+5,R),l.lineTo(w+8,R+P),l.lineTo(w-8,R+P),l.closePath(),l.fill()}let b=h+x-32;E(b,d+g*.16,7,8,"#d8cfc4"),l.fillStyle=M(["#c84a5a","#4a6a9a","#e8d8b8"]),l.beginPath(),l.moveTo(b-14,d+g*.24),l.lineTo(b+14,d+g*.24),l.lineTo(b+18,d+g*.66),l.lineTo(b-18,d+g*.66),l.closePath(),l.fill(),Y(l,b-2,d+g*.66,4,g*.24,"#8a8a8a"),Y(l,h+8,d+g*.74,x*.55,6,"#8a6a4a");for(let w=h+12;w<h+x*.55;w+=14)Y(l,w,d+g*.74-8,11,8,M(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let b=7;for(let w=d+g*.25;w<d+g;w+=g*.22)for(let R=h+3;R<h+x-6;R+=6+y()*8)e(),b=Math.imul(b,31)+Math.floor(y()*997+y()*61+y()*7)|0;T==="cafe"?f(l,h,d,x,g,Kt(b>>>0)):u(l,h,d,x,g,Kt(b>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],a=(l,h,d,x,g,y,T="bbccutp")=>{let E=h+1+y()*3;for(;E<d-4;){let M=T[Math.floor(y()*T.length)],b=o[Math.floor(y()*o.length)],w=y()<.5?"#f8f6f0":o[Math.floor(y()*o.length)],R={b:8+y()*6,c:6+y()*2,u:9+y()*2,t:5+y()*2,p:12+y()*5}[M],P=Math.min(g,{b:14+y()*12,c:11+y()*3,u:10+y()*3,t:18+y()*9,p:14+y()*8}[M]),I=2+Math.floor(y()*5);for(let C=0;C<I&&E+R<d-1;C++,E+=R+.6){let L=x-P;M==="t"?(Y(l,E,L+P*.3,R,P*.7,b),Y(l,E+R*.3,L+P*.1,R*.4,P*.22,b),Y(l,E+R*.28,L,R*.44,P*.11,w==="#f8f6f0"?"#e8e8e4":"#d83a2a"),Y(l,E,L+P*.5,R,P*.22,w)):M==="c"?(Y(l,E,L,R,P,b),Y(l,E,L,R,1.5,"#d8dce0"),Y(l,E,L+P*.35,R,P*.3,w)):M==="u"?(l.fillStyle=b,l.beginPath(),l.moveTo(E,L+2),l.lineTo(E+R,L+2),l.lineTo(E+R-1.2,x),l.lineTo(E+1.2,x),l.fill(),Y(l,E-.4,L,R+.8,2.2,"#f2efe6"),Y(l,E+1,L+P*.45,R-2,P*.25,w)):M==="p"?(l.fillStyle=b,l.beginPath(),l.moveTo(E,x),l.lineTo(E,L+3),l.quadraticCurveTo(E+R/2,L-1.5,E+R,L+3),l.lineTo(E+R,x),l.fill(),Y(l,E+1.5,L+P*.35,R-3,P*.35,w),Y(l,E,L+2,R,1,"rgba(0,0,0,0.18)")):(Y(l,E,L,R,P,b),Y(l,E+1.5,L+P*.3,R-3,P*.4,w)),Y(l,E,L+1,1,P-1,"rgba(255,255,255,0.28)"),Y(l,E+R-1.3,L+1,1.3,P-1,"rgba(0,0,0,0.22)")}E+=1.5+y()*3}},c=(l,h,d,x,g)=>{Nn(l,h,x+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),Y(l,h,x,d,4,"#d3d6da"),Y(l,h,x+3.2,d,.8,"rgba(40,40,50,0.45)");for(let y=h+4+g()*10;y<h+d-6;y+=14+g()*16)Y(l,y,x+.6,5,2.6,g()<.25?"#f2d23a":g()<.2?"#e84a3a":"#ffffff")},u=(l,h,d,x,g,y,T)=>{Y(l,h,d,x,g,T?"#f3f1ea":"#ece5d8"),Y(l,h,d,x,g*.13,T?"#f6f6f2":"#efebe2");for(let w of[.035,.085])Y(l,h,d+g*w,x,2.4,"#ffffff"),Nn(l,h,d+g*w+2.4,x,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Nn(l,h,d+g*.13,x,g*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let w=0,R=h+18+y()*30;w<2&&R<h+x-40;w++,R+=90+y()*40)Y(l,R+13,d+g*.13,1,6,"#888"),Y(l,R,d+g*.13+6,28,9,o[Math.floor(y()*9)]),Y(l,R+4,d+g*.13+9.5,20,2,"rgba(255,255,255,0.8)");let M=d+g*.25,b=g*.165;Y(l,h,M-4,x,4,"#c9ccd0");for(let w=0;w<4;w++){let R=M+b*(w+1);Nn(l,h,R-b,x,b,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),a(l,h,h+x,R,b-6,y),c(l,h,x,R,y)}Y(l,h,M+b*4+4,x,d+g-M-b*4-4,"#5c6068"),Y(l,h,M+b*4+4,x,1.5,"#8a8e96");for(let w=h+2+y()*20;w<h+x;w+=70+y()*12)Y(l,w,M-4,3,b*4+8,"#b4b8be"),Y(l,w+2.2,M-4,.8,b*4+8,"rgba(0,0,0,0.3)");if(T){let w=d+g*.7;Y(l,h,w+26,x,d+g-w-26,"#7a7e86"),Y(l,h,w+26,x,2,"#a8acb2");for(let R=h+2;R<h+x-14;R+=15.5){let P=o[Math.floor(y()*o.length)],I=y()*2;Y(l,R,w+I,14,26-I,P),Y(l,R,w+I,14,5,y()<.6?"#ffffff":"#e8343a"),Y(l,R+2,w+I+8,10,10,y()<.5?"#f2c8a8":o[Math.floor(y()*o.length)]),Y(l,R+13,w+I,1,26-I,"rgba(0,0,0,0.25)")}}},f=(l,h,d,x,g,y)=>{Y(l,h,d,x,g,"#b88a5e"),Nn(l,h,d,x,g,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let E=h;E<h+x;E+=9)Y(l,E,d+g*.55,1,g*.45,"rgba(60,35,20,0.25)");let T=d+g*.3;for(let E=0;E<2;E++){let M=T+E*22;Y(l,h+8,M,x*.55,3,"#6a4428"),a(l,h+10,h+x*.55+6,M,14,y,"ctu")}Y(l,h+x*.64,d+g*.22,x*.28,g*.26,"#2e3a32"),Y(l,h+x*.64,d+g*.22,x*.28,2,"#6a4428");for(let E=0;E<5;E++)Y(l,h+x*.67,d+g*(.27+E*.04),x*(.12+y()*.1),1.6,"rgba(240,240,230,0.75)");Y(l,h+4,d+g*.56,x-8,6,"#5a3820"),Y(l,h+4,d+g*.56+6,x-8,g*.08,"#7a5232"),Y(l,h+x*.3,d+g*.47,18,g*.09,"#c8ccd0"),Y(l,h+x*.3+3,d+g*.47+3,12,5,"#3a3a40");for(let E=h+30+y()*20;E<h+x-20;E+=70+y()*20)Y(l,E,d,1,g*.14,"#3a2a1e"),l.fillStyle="#2f3a36",l.beginPath(),l.moveTo(E-9,d+g*.2),l.quadraticCurveTo(E+.5,d+g*.12,E+10,d+g*.2),l.fill(),l.fillStyle="rgba(255,214,150,0.9)",l.beginPath(),l.ellipse(E+.5,d+g*.2,7,2,0,0,7),l.fill();for(let E=h+26+y()*16;E<h+x-26;E+=78+y()*20){Y(l,E-16,d+g*.74,32,4,"#4a2e1c"),Y(l,E-1.5,d+g*.74+4,3,g*.2,"#2e2420"),Y(l,E-8,d+g*.94,16,2,"#2e2420");for(let M of[-24,24])Y(l,E+M-6,d+g*.8,12,3,"#3a2618"),Y(l,E+M+(M<0?-6:4),d+g*.66,2,g*.17,"#3a2618"),Y(l,E+M-5,d+g*.83,1.6,g*.13,"#3a2618"),Y(l,E+M+3.4,d+g*.83,1.6,g*.13,"#3a2618");l.fillStyle="#f4f0e8",l.beginPath(),l.ellipse(E-6,d+g*.74-1.5,3,1.5,0,0,7),l.fill()}},p=(l,h,d,x,g,y,T="")=>{let E=Kt(y);if(po(l,i,d,x,"#e6e2da"),g==="glass"||g==="door"||g==="konbini"||g==="cafe"){let b=x*.22,w=d-12,R=x*.78-4;Y(l,6,b,w,R,g==="konbini"?"#f6f4ea":g==="cafe"?"#7a5a40":"#8a7a68"),r(l,6,b,w,R,E,T||g),g==="konbini"&&Y(l,6,b+4,w,5,"#ffffff"),g==="door"&&(Y(l,d/2-30,b+18,60,24,"#fff"),St(l,"\u55B6\u696D\u4E2D",d/2,b+30,54,18,"#c82828")),g==="glass"&&!T&&E()<.7&&(Y(l,16,b+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),St(l,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,b+44,40,16,"#c02020")),ky(l,h,6,b,w,R,g==="konbini"?"#e4eef8":g==="cafe"?"#f0a868":"#f2d2a6"),l.save(),l.globalAlpha=.35,as(l,6,b,w,R,E),l.restore(),Y(l,6,b,w,4,"#4a4e57"),Y(h,6,b,w,4,"#000"),g==="door"&&(Y(l,d/2-2,b,4,R,"#4a4e57"),Y(h,d/2-2,b,4,R,"#000"),Y(l,d/2-14,b+R*.45,3,40,"#c0c4c8"),Y(l,d/2+11,b+R*.45,3,40,"#c0c4c8")),g==="cafe"&&(Y(l,d*.62,x-70,46,62,"#2c3a30"),Y(h,d*.62,x-70,46,62,"#000"),St(l,"\u30E9\u30F3\u30C1",d*.62+23,x-50,40,13,"#fff",700))}else if(g==="shutter"){let b=x*.2,w=d-12,R=x*.8;Y(l,6,b,w,R,"#b8bcc0");for(let P=b;P<b+R;P+=7)Y(l,6,P,w,2,"rgba(60,64,72,0.35)"),Y(l,6,P+2,w,1,"rgba(255,255,255,0.35)");Y(l,6,b,w,10,"#8f949a"),fn(l,i,d,x,.12),E()<.5&&(Y(l,d/2-40,b+R*.35,80,26,"#fff"),St(l,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,b+R*.35+13,74,16,"#333",700))}else if(g==="noren"){Y(l,0,0,d,x,"#5b3c28");for(let I=0;I<d;I+=10)Y(l,I,x*.2,3,x*.8,"rgba(25,15,8,0.6)");fn(l,i,d,x,.15);let M=d*.12,b=x*.24,w=d*.76,R=x*.34,P=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);Y(l,M,b,w,R,P);for(let I=1;I<3;I++)Y(l,M+w*I/3-1,b+R*.25,2,R*.75,"rgba(255,255,255,0.25)");St(l,e.pick(Hy),d/2,b+R*.55,w*.9,46,"#f5f0e6",800),Y(l,M,b,w,6,"#3a2a1c"),h.fillStyle="#ffae5c",h.fillRect(M,b+R,w,x-b-R),h.fillStyle="rgba(255,170,90,0.6)",h.fillRect(M,b,w,R),l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d*.9,x*.36,13,19,0,0,7),l.fill(),St(l,"\u9152",d*.9,x*.36,16,14,"#fff"),h.fillStyle="#ff6a3a",h.beginPath(),h.ellipse(d*.9,x*.36,13,19,0,0,7),h.fill()}else if(g==="house"){let M=d*.18,b=x*.3,w=d*.34,R=x*.7;Y(l,M-6,b-6,w+12,R+6,"#9a9a96"),Y(l,M,b,w,R,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),Y(l,M+w-14,b+R*.5,4,22,"#d8d0c0"),Y(l,M+6,b+10,w-12,R*.25,"rgba(255,255,255,0.18)"),Y(l,d*.62,x*.48,30,22,"#cfcfca"),Y(l,d*.62+6,x*.48+5,18,4,"#555");let P=d*.6,I=x*.22,C=d*.3,L=x*.2;mo(l,P,I,C,L,3),as(l,P,I,C,L,E,1);for(let N=0;N<3;N++)l.fillStyle="#7b5a43",l.fillRect(d*.6+N*22,x-26,16,18),l.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),l.beginPath(),l.arc(d*.6+N*22+8,x-32,11,0,7),l.fill();h.fillStyle="#ffd08a",h.beginPath(),h.arc(M+w+14,b+8,6,0,7),h.fill(),E()<.6&&(h.fillStyle="#ffcf8f",h.fillRect(P,I,C,L))}else if(g==="garage"){let b=x*.25,w=d-16,R=x*.75;Y(l,8,b,w,R,"#efefec");for(let P=b;P<b+R;P+=9)Y(l,8,P,w,1.5,"rgba(80,80,90,0.25)");fn(l,i,d,x,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((l,h)=>{i.add("shop_"+l,t,s,(d,x,g,y)=>p(d,x,g,y,l,100+h)),(l==="glass"||l==="noren"||l==="house")&&i.add("shop_"+l+"2",t,s,(d,x,g,y)=>p(d,x,g,y,l,200+h)),l==="glass"&&["bakery","books","florist","clothes"].forEach((d,x)=>i.add("shop_glass"+(x+3),t,s,(g,y,T,E)=>p(g,y,T,E,"glass",300+x,d)))});for(let l=0;l<14;l++)i.add("hs"+l,512,76,(h,d,x,g)=>{let[y,T]=Tu[l%Tu.length],E=Gp[l*7%Gp.length];Y(h,0,0,x,g,y),Y(h,0,0,x,5,"rgba(255,255,255,0.35)"),Y(h,0,g-6,x,6,"rgba(0,0,0,0.18)"),l%3===0&&(Y(h,12,12,g-24,g-24,T),St(h,E[0],12+(g-24)/2,g/2,g-30,34,y)),St(h,E,x/2+(l%3===0?24:0),g/2+2,x*.7,50,T,900),fn(h,i,x,g,.08),d.fillStyle=y==="#fff"||y==="#f5efe0"?"#d9d6cc":y,d.fillRect(0,0,x,g),d.globalAlpha=.9,St(d,E,x/2+(l%3===0?24:0),g/2+2,x*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[l,h,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+l,512,76,(x,g,y,T)=>{Y(x,0,0,y,T,h),Y(x,0,0,y,5,"rgba(255,255,255,0.35)"),Y(x,0,T-6,y,6,"rgba(0,0,0,0.18)"),St(x,l,y/2,T/2+2,y*.7,50,d,900),fn(x,i,y,T,.08),g.fillStyle=h,g.fillRect(0,0,y,T),g.globalAlpha=.9,St(g,l,y/2,T/2+2,y*.7,50,d,900),g.globalAlpha=1});let m=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],v=(l,h,d,x,g,y)=>{l.beginPath(),l.moveTo(h+y,d),l.arcTo(h+x,d,h+x,d+g,y),l.arcTo(h+x,d+g,h,d+g,y),l.arcTo(h,d+g,h,d,y),l.arcTo(h,d,h+x,d,y),l.closePath()};for(let l=0;l<10;l++)i.add("vs"+l,72,288,(h,d,x,g)=>{let y=Wp[l%Wp.length],T=m[(l*5+2)%m.length],E=l%10===3||l%10===6||l%10===8,[M,b]=Tu[(l*3+1)%Tu.length],w=E?M==="#fff"||M==="#f5efe0"?"#2b2b33":M:"#fbf7ef",R=E?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][l%4];Y(h,0,0,x,g,"#2a2b30"),v(h,3,3,x-6,g-6,8),h.fillStyle=w,h.fill(),Nn(h,3,3,x-6,g-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),h.save(),v(h,8,8,x-16,g-16,6),h.strokeStyle=T,h.globalAlpha=.55,h.lineWidth=7,h.stroke(),h.globalAlpha=1,h.strokeStyle="#fff6fb",h.lineWidth=2.2,h.stroke(),h.restore(),Su(h,y,x/2,18,g-18,50,R,900),fn(h,i,x,g,.06),Y(d,0,0,x,g,"#000"),v(d,3,3,x-6,g-6,8),d.fillStyle=E?"#3a3a3e":"#4a4844",d.fill(),d.save(),v(d,8,8,x-16,g-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),Su(d,y,x/2,18,g-18,50,E?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([l,h,d],x)=>i.add("bb"+x,512,240,(g,y,T,E)=>{Y(g,0,0,T,E,"#fbfaf5"),Y(g,0,0,T,E*.62,d),St(g,l,T/2,E*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),St(g,h,T/2,E*.8,T*.85,52,"#333",800),fn(g,i,T,E,.08),Y(y,0,0,T,E,"#555"),y.globalAlpha=.85,Y(y,0,0,T,E*.62,d),St(y,l,T/2,E*.32,T*.9,96,"#fff",900),y.globalAlpha=1})),i.add("konbini_band",480,72,(l,h,d,x)=>{Y(l,0,0,d,x,"#fbfbf7"),Y(l,0,x*.62,d,x*.14,"#2a9a4a"),Y(l,0,x*.76,d,x*.12,"#f08a24"),Y(l,0,x*.88,d,x*.12,"#2f6fd8"),St(l,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900),h.fillStyle="#f3f6f0",h.fillRect(0,0,d,x),St(h,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900)});for(let l=0;l<3;l++)i.add("vend"+l,128,234,(h,d,x,g)=>{let y=["#d8352a","#2f6fd8","#f4f4f0"][l];Y(h,0,0,x,g,y),Y(h,8,10,x-16,g*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let E=0;E<4;E++)for(let M=0;M<6;M++){let b=14+M*17,w=18+E*30;h.fillStyle=T[(E*6+M+l)%T.length],h.fillRect(b,w,11,20),h.fillStyle="rgba(255,255,255,0.5)",h.fillRect(b+2,w+2,3,14),h.fillStyle="#2a2a2a",h.fillRect(b,w+23,11,3)}Y(h,10,g*.62,x-20,22,"#222"),Y(h,x-34,g*.66,14,22,"#bbb"),Y(h,14,g*.82,x-28,22,"#1b1b1b"),St(h,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][l],x/2,g*.62+11,x-28,14,"#fff",700),fn(h,i,x,g,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,x-16,g*.55);for(let E=0;E<4;E++)for(let M=0;M<6;M++)d.fillStyle=T[(E*6+M+l)%T.length],d.fillRect(14+M*17,18+E*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,g*.62,x-20,22)});i.add("ac",128,88,(l,h,d,x)=>{Y(l,0,0,d,x,"#e9e9e4"),Nn(l,0,0,d,x,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),l.fillStyle="#9a9c9e",l.beginPath(),l.arc(d*.4,x*.5,x*.36,0,7),l.fill(),l.strokeStyle="#d6d6d2",l.lineWidth=2;for(let g=6;g<x*.36;g+=6)l.beginPath(),l.arc(d*.4,x*.5,g,0,7),l.stroke();for(let g=12;g<x-10;g+=6)Y(l,d*.78,g,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(l,h,d,x)=>{Y(l,0,0,d,x,"#f2cf3a"),l.strokeStyle="#2f5a2f",l.lineWidth=3,l.strokeRect(3,3,d-6,x-6),St(l,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),St(l,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.moveTo(2,2),l.lineTo(d-2,2),l.lineTo(d/2,x-2),l.fill(),l.fillStyle="#d8231c",l.beginPath(),l.moveTo(10,7),l.lineTo(d-10,7),l.lineTo(d/2,x-12),l.fill(),St(l,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.fillStyle="#1e5bb8",l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.fill(),l.fillStyle="#fff",l.beginPath(),l.moveTo(d/2,22),l.lineTo(d/2+22,50),l.lineTo(d/2+8,50),l.lineTo(d/2+8,88),l.lineTo(d/2-8,88),l.lineTo(d/2-8,50),l.lineTo(d/2-22,50),l.fill()}),i.add("sign_speed",112,112,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=12,l.beginPath(),l.arc(d/2,x/2,d/2-9,0,7),l.stroke(),St(l,"30",d/2,x/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(l,h,d,x)=>{Y(l,0,0,d,x,"#1d4f9a"),l.strokeStyle="#fff",l.lineWidth=2,l.strokeRect(3,3,d-6,x-6),Su(l,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,x-10,24,"#fff",700)});for(let l=0;l<4;l++)i.add("poster"+l,64,90,(h,d,x,g)=>{let y=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][l];Y(h,0,0,x,g,y),Y(h,4,4,x-8,g*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][l]),St(h,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][l],x/2,g*.25,x-12,18,"#fff",900);for(let T=0;T<4;T++)Y(h,8,g*.58+T*8,x-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let l=0;l<3;l++)i.add("bal"+l,t,88,(h,d,x,g)=>{let y=["#e9e3d6","#dfe6ea","#efe2dc"][l];if(po(h,i,x,g,y),l===1)for(let T=10;T<x-6;T+=x/6)Y(h,T,10,x/6-8,g-20,"rgba(220,235,245,0.9)"),h.fillStyle="rgba(255,255,255,0.45)",h.fillRect(T,10,x/6-8,(g-20)*.4);else{Y(h,0,0,x,7,"rgba(255,255,255,0.4)");for(let T=x/3;T<x;T+=x/3)Y(h,T-1,0,2,g,"rgba(0,0,0,0.08)")}Y(h,0,g-6,x,6,"rgba(0,0,0,0.12)"),os(h,x*.3,g-6,10,10,.2)});i.add("kawara",272,256,(l,h,d,x)=>{Y(l,0,0,d,x,"#58617a");for(let g=0;g<x;g+=16)Nn(l,0,g,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let g=-4;g<d;g+=20)Y(l,g,0,2,x,"rgba(0,0,0,0.18)");fn(l,i,d,x,.12)}),i.add("wood",256,256,(l,h,d,x)=>{Y(l,0,0,d,x,"#6d4c37");for(let g=0;g<x;g+=14)Y(l,0,g,d,2,"rgba(25,15,8,0.4)"),Y(l,0,g+2,d,1,"rgba(255,220,180,0.07)");fn(l,i,d,x,.16)}),i.add("block",256,128,(l,h,d,x)=>{Y(l,0,0,d,x,"#c9c7bf");for(let g=0;g<x;g+=32)for(let y=g/32%2?-32:0;y<d;y+=64)l.strokeStyle="rgba(80,80,80,0.35)",l.lineWidth=2,l.strokeRect(y+1,g+1,62,30);for(let g=0;g<d;g+=64)l.fillStyle="rgba(70,70,70,0.25)",l.fillRect(g+20,40,24,16);fn(l,i,d,x,.15),os(l,0,0,d,40,.1)}),i.add("lantern",64,96,(l,h,d,x)=>{l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),l.fill();for(let g=16;g<x-12;g+=7)Y(l,4,g,d-8,1.5,"rgba(0,0,0,0.2)");Y(l,d/2-14,2,28,8,"#222"),Y(l,d/2-14,x-10,28,8,"#222"),St(l,"\u796D",d/2,x/2,d*.6,28,"#fff",900),h.fillStyle="#ff6a35",h.beginPath(),h.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),h.fill()}),i.add("busstop",96,96,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=8,l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.stroke(),St(l,"\u30D0\u30B9\u505C",d/2,x/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,l=>Y(l,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(l,h,d,x)=>{l.save(),l.translate(d/2,x/2),l.rotate(Math.PI/4),l.fillStyle="#1b1b1b",l.fillRect(-41,-41,82,82),l.fillStyle="#f2c230",l.fillRect(-37,-37,74,74),l.restore(),l.fillStyle="#1b1b1b",l.fillRect(d/2-22,x/2-6,44,18),l.fillRect(d/2-16,x/2-16,18,12),l.fillRect(d/2+8,x/2-13,5,7),l.beginPath(),l.arc(d/2-12,x/2+15,5,0,7),l.arc(d/2+12,x/2+15,5,0,7),l.fill(),St(l,"\u8E0F\u5207",d/2,x/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((l,h)=>i.add("bridge"+h,64,176,(d,x,g,y)=>{Y(d,0,0,g,y,"#b9b5ab"),fn(d,i,g,y,.2),Y(d,6,6,g-12,y-12,"#a7a398"),Su(d,l,g/2,14,y-14,34,"#3f3c37",800)})),i.add("signal",240,84,(l,h,d,x)=>{Y(l,0,0,d,x,"#4a4d52"),Y(l,0,0,d,5,"#5c6066"),fn(l,i,d,x,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([g,y])=>{l.fillStyle="#26282c",l.beginPath(),l.arc(y,x/2,33,0,7),l.fill(),l.fillStyle=g,l.beginPath(),l.arc(y,x/2,27,0,7),l.fill()})}),i.add("ped_sig",64,128,(l,h,d,x)=>{Y(l,0,0,d,x,"#3d4045"),l.fillStyle="#5a1814",l.fillRect(8,8,d-16,x/2-12),l.fillStyle="#0d4f44",l.fillRect(8,x/2+4,d-16,x/2-12),l.fillStyle="rgba(255,255,255,0.18)",l.beginPath(),l.arc(d/2,x*.18,6,0,7),l.fill(),l.fillRect(d/2-5,x*.24,10,18)}),i.add("tomare",256,96,(l,h,d,x)=>{l.clearRect(0,0,d,x),l.fillStyle="rgba(244,244,238,0.012)",l.fillRect(0,0,d,x),St(l,"\u6B62\u307E\u308C",d/2,x/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((l,h)=>i.add("hodokyo"+h,256,44,(d,x,g,y)=>{Y(d,0,0,g,y,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,g-8,y-8),St(d,l,g/2,y/2+1,g*.85,28,"#fff",800)}));let S=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];S.forEach(([l,h,d],x)=>{let g=S[(x+3)%4][0],y=S[(x+1)%4][0];i.add("ekimei"+x,320,124,(T,E,M,b)=>{Y(T,0,0,M,b,"#3a3d42"),Y(T,4,4,M-8,b-8,"#f8f8f3"),St(T,h,M/2,20,M*.5,15,"#2b2b2b",700),St(T,l,M/2,52,M*.6,40,"#151515",900),St(T,d,M/2,80,M*.5,12,"#555",600),Y(T,4,b-30,M-8,26,"#1f9a50"),T.fillStyle="#fff",wu(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+g,12,b-17),T.textAlign="right",T.fillText(y+" \u2192",M-12,b-17),fn(T,i,M,b,.06),Y(E,4,4,M-8,b-8,"#8a8a84")}),i.add("ekiplate"+x,220,48,(T,E,M,b)=>{Y(T,0,0,M,b,"#4b3326"),fn(T,i,M,b,.2),St(T,l+"\u99C5",M/2,b/2+1,M*.8,30,"#f3ead8",800)})});for(let l of["l","r"])i.add("chev_"+l,96,120,(h,d,x,g)=>{Y(h,0,0,x,g,"#f4f4ef"),Y(h,4,4,x-8,g-8,"#1e5bb8"),h.fillStyle="#f8f8f4",h.beginPath();let y=l==="r"?1:-1,T=x/2,E=g/2;h.moveTo(T-y*26,E-40),h.lineTo(T+y*22,E),h.lineTo(T-y*26,E+40),h.lineTo(T-y*8,E+40),h.lineTo(T+y*40,E),h.lineTo(T-y*8,E-40),h.closePath(),h.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((l,h)=>i.add("tunnel"+h,360,80,(d,x,g,y)=>{Y(d,0,0,g,y,"#e9e7e0"),Y(d,4,4,g-8,y-8,"#24403b"),fn(d,i,g,y,.08),St(d,l,g/2,y*.42,g*.8,38,"#f4f2ea",800),St(d,"L = 170 m",g/2,y*.8,g*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(l,h,d,x)=>{Y(l,0,0,d,x,"#f6f6f2"),l.fillStyle="#d42a22";for(let g=-20;g<x;g+=26)l.beginPath(),l.moveTo(4,g),l.lineTo(d/2,g+20),l.lineTo(d-4,g),l.lineTo(d-4,g+11),l.lineTo(d/2,g+31),l.lineTo(4,g+11),l.closePath(),l.fill();l.strokeStyle="#222",l.lineWidth=3,l.strokeRect(1.5,1.5,d-3,x-3)}),i.add("xing_plate",128,48,(l,h,d,x)=>{Y(l,0,0,d,x,"#f6f6f2"),l.strokeStyle="#d8231c",l.lineWidth=4,l.strokeRect(3,3,d-6,x-6),St(l,"\u8E0F\u5207\u6CE8\u610F",d/2,x/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(l,h,d,x)=>{l.clearRect(0,0,d,x),Y(l,0,0,d,7,"#e9ebee"),Y(l,0,6,d,2,"rgba(60,70,80,0.5)"),Y(l,0,x-6,d,6,"#d5d8dc");for(let g=3;g<d;g+=9)Y(l,g,7,3,x-13,"#e2e5e9"),Y(l,g+2,7,1,x-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(l,h,d,x)=>{let g=Kt(4242);Y(l,0,0,d,x,"#3d3f3c");let y=38,T=y/Math.SQRT2;l.save(),l.beginPath(),l.rect(0,22,d,x-22),l.clip();for(let E=-2;E*T<x+y;E++)for(let M=-2;M*y<d+y;M++){let b=M*y+(E%2?y/2:0),w=22+E*T,R=.52+g()*.17,P=Math.min(1,Math.max(0,(w-x*.55)/(x*.4))),I=Math.round(255*R*(1-.38*P)),C=`rgb(${I-4},${I-2},${I-9})`;l.fillStyle=C,l.beginPath(),l.moveTo(b,w-T+3.5),l.lineTo(b+T-3.5,w),l.lineTo(b,w+T-3.5),l.lineTo(b-T+3.5,w),l.closePath(),l.fill(),l.fillStyle="rgba(255,255,255,0.12)",l.beginPath(),l.moveTo(b,w-T+3.5),l.lineTo(b+T-3.5,w),l.lineTo(b,w),l.closePath(),l.fill(),P>.3&&g()<.5&&(l.fillStyle=`rgba(70,96,52,${.25+.3*g()})`,l.beginPath(),l.arc(b+(g()-.5)*10,w+6,4+g()*6,0,7),l.fill())}l.restore(),Nn(l,0,x*.55,d,x*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),Y(l,0,0,d,22,"#8c8d87"),Y(l,0,18,d,4,"rgba(0,0,0,0.3)"),Y(l,0,0,d,3,"rgba(255,255,255,0.2)"),fn(l,i,d,x,.12)}),i.add("wrail",240,80,(l,h,d,x)=>{l.clearRect(0,0,d,x),Y(l,0,0,d,9,"#6a4a34"),Y(l,0,0,d,2,"rgba(255,225,190,0.25)"),Y(l,0,8,d,2,"rgba(20,10,5,0.45)"),Y(l,0,x-10,d,10,"#5e412e"),Y(l,0,x-10,d,2,"rgba(255,225,190,0.18)");for(let g=4;g<d;g+=12)Y(l,g,9,5,x-19,"#634632"),Y(l,g,9,1.2,x-19,"rgba(255,225,190,0.18)"),Y(l,g+4,9,1,x-19,"rgba(20,10,5,0.4)");fn(l,i,d,x,.15)}),i.add("woodwall",t,t,(l,h,d,x)=>{let g=Kt(5151);Y(l,0,0,d,x,"#5e4130");for(let y=0;y<x;y+=16){let T=g();Y(l,0,y,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),Y(l,0,y,d,2,"rgba(255,220,180,0.12)"),Y(l,0,y+14,d,2,"rgba(15,8,4,0.45)");for(let E=g()*80;E<d;E+=60+g()*90)Y(l,E,y+2,1.5,12,"rgba(15,8,4,0.35)")}Nn(l,0,0,d,x,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),fn(l,i,d,x,.2)}),i}function Yp(i){let n=Eu(1024,3072),s=n.getContext("2d"),r=Kt(321),o={},a=512,c={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},u=(l,h,d)=>{let x=c[l],g=256,y=l==="pine",T=l==="sakura";s.save(),s.translate(h,d),s.beginPath(),s.rect(0,0,512,512),s.clip();let E=[[g,g,y?80:92]];for(let b=0;b<(y?10:14);b++){let w=r()*6.28,R=45+r()*120;E.push([g+Math.cos(w)*R,g+Math.sin(w)*R*(y?.42:.9),Math.min(34+r()*52,232-R)])}let M=T?2300:y?2600:2300;for(let b=0;b<M;b++){let w=E[Math.floor(r()*E.length)],R=r()*6.28,P=Math.sqrt(r())*w[2],I=w[0]+Math.cos(R)*P,C=w[1]+Math.sin(R)*P*(y?.45:1),L=P/w[2],N=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(L>.82?.5:0))));if(s.fillStyle=x[N],T){let O=7+r()*8;s.beginPath(),s.arc(I,C,O,0,7),s.fill(),r()<.25&&(s.fillStyle=x[4],s.beginPath(),s.arc(I-O*.3,C-O*.3,O*.4,0,7),s.fill())}else if(y)s.save(),s.translate(I,C),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(l==="momiji"){let O=8+r()*7;s.save(),s.translate(I,C),s.rotate(r()*6.28),s.beginPath();for(let V=0;V<10;V++){let D=V%2?O*.42:O,H=V/10*6.2832;s.lineTo(Math.cos(H)*D,Math.sin(H)*D)}s.closePath(),s.fill(),s.restore()}else if(l==="ginkgo"){let O=9+r()*7;s.save(),s.translate(I,C),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,O,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let O=9+r()*10;s.beginPath(),s.ellipse(I,C,O,O*.55,r()*6.28,0,7),s.fill()}}for(let b=0;b<90;b++){let w=r()*6.28,R=150+r()*85,P=g+Math.cos(w)*R,I=g+Math.sin(w)*R*(y?.45:.92);s.fillStyle=x[1+Math.floor(r()*4)],y?(s.save(),s.translate(P,I),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(P,I,T?6+r()*6:7+r()*6,0,7),s.fill())}if(T)for(let b=0;b<14;b++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let w=g+(r()-.5)*300,R=g+60+r()*120;s.beginPath(),s.moveTo(w,R),s.lineTo(w+(r()-.5)*40,R-20-r()*30),s.stroke()}s.restore(),o[l]={u0:h/1024,u1:(h+512)/1024,v0:1-(d+512)/3072,v1:1-d/3072}},f=(l,h,d,x)=>{s.save(),s.translate(h,d),s.beginPath(),s.rect(0,0,512,512),s.clip();let g=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],y=x?120:170;for(let T=0;T<y;T++){let E=256+(r()-.5)*(x?330:380)*Math.sqrt(r()),M=150+r()*(x?230:300)*(1-Math.abs(E-256)/300),b=(E-256)*.35+(r()-.5)*90,w=9+r()*9,R=E+b,P=512-M,I=Math.min(4,Math.floor(r()*2.2+M/380*2.6)),C=s.createLinearGradient(0,512,0,P);C.addColorStop(0,g[0]),C.addColorStop(.6,g[Math.max(1,I-1)]),C.addColorStop(1,g[I]),s.fillStyle=C,s.beginPath(),s.moveTo(E-w/2,512),s.quadraticCurveTo(E-w/2+b*.3,512-M*.55,R,P),s.quadraticCurveTo(E+w/2+b*.3,512-M*.5,E+w/2,512),s.fill()}if(x)for(let T=0;T<16;T++){let E=110+r()*290,M=150+r()*200,b=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(E+(r()-.5)*20,512),s.quadraticCurveTo(E+(r()-.5)*30,(M+512)/2,E,M),s.stroke(),b<.55){s.fillStyle="#fbfaf2";for(let w=0;w<12;w++){let R=w/12*6.283;s.beginPath(),s.ellipse(E+Math.cos(R)*11,M+Math.sin(R)*11,9,4.5,R,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(E,M,8,0,7),s.fill()}else if(b<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(E,M,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(E-3,M-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let w=0;w<6;w++)s.beginPath(),s.arc(E+(r()-.5)*16,M+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),o[l]={u0:h/1024,u1:(h+512)/1024,v0:1-(d+512)/3072,v1:1-d/3072}},p=(l,h,d)=>{let x=Kt(97);s.save(),s.translate(h,d),s.beginPath(),s.rect(0,0,512,512),s.clip(),s.lineCap="round";let g=(y,T,E,M,b,w)=>{let R=y+Math.cos(E)*M,P=T+Math.sin(E)*M;if(s.strokeStyle=w>3?"#76605f":w>1?"#6c5458":"#62494f",s.lineWidth=b,s.beginPath(),s.moveTo(y,T),s.lineTo(R,P),s.stroke(),w<=0||b<.7)return;let I=2+(x()<.4?1:0);for(let C=0;C<I;C++){let L=E+(x()-.5)*1.1+(C-(I-1)/2)*.42;L=L*.8+-Math.PI/2*.2,g(R,P,L,M*(.62+x()*.2),b*.68,w-1)}};for(let y=0;y<6;y++)g(256+(x()-.5)*40,500,-Math.PI/2+(x()-.5)*.9,110+x()*50,5.6,6);s.restore(),o[l]={u0:h/1024,u1:(h+512)/1024,v0:1-(d+512)/3072,v1:1-d/3072}},m=(l,h,d,x,g)=>{let y=Kt(x),T=1024,E=504;s.save(),s.translate(h,d+8),s.beginPath(),s.rect(0,0,512,E),s.clip(),s.scale(.5,1);let M=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],b=L=>{let N=L/T;return(.5+.5*Math.min(1,N/.45)**.8)*(1-.4*Math.max(0,(N-.9)/.1))},w=(L,N,O,V)=>{N=Math.min(N,E*.985);let D=L+O,H=E-N,k=L+O*.25,$=E-N*.62-Math.abs(O)*.35;s.moveTo(L-V/2,E),s.quadraticCurveTo(k-V*.42,$,D,H),s.quadraticCurveTo(k+V*.42,$+V*.5,L+V/2,E),s.closePath()},R=[];for(let L=24+y()*24;L<T-20;L+=(L<T*.25?56:44)+y()*26)R.push(L);let P=()=>R[Math.floor(y()*R.length)],I=(L,N,O,V,D,H,k,$,Q)=>{let qe=M.map(()=>[]);for(let Be=0;Be<L;Be++){let Ne=P(),q=Ne+(y()-.5)*34,j=b(q),ye=q/T,Me=E*(N+y()*(O-N))*j*1.12,Ee=(y()-.5)*V+(q-T*.45)*.12;qe[Math.min(8,$+Math.floor(y()*(Q-$+1)+ye*1.2))].push([q,Me,Ee,D+y()*(H-D)])}qe.forEach((Be,Ne)=>{if(!Be.length)return;let q=s.createLinearGradient(0,E,0,E*(1-O*.8));q.addColorStop(0,M[k]),q.addColorStop(.55,M[Math.round((k+Ne)/2)]),q.addColorStop(1,M[Ne]),s.fillStyle=q,s.beginPath();for(let j of Be)w(j[0],j[1],j[2],j[3]);s.fill()})};I(360,.25,.55,150,12,22,0,2,3),I(240,.4,.78,260,10,17,1,4,6);let C=[];for(let L=0;L<4;L++){let N=T*(.14+y()*.74),O=b(N);C.push({fx:N,fy:Math.max(56,E-E*(.56+y()*.38)*O*1.05),kind:y()<g?0:1,sz:.85+y()*.4,tilt:.72+y()*.28,rot:y()*6.28,sx:N+(y()-.5)*60})}s.lineCap="round";for(let L of C)s.strokeStyle="#2c6623",s.lineWidth=6,s.beginPath(),s.moveTo(L.sx,E),s.quadraticCurveTo((L.sx+L.fx)/2+(y()-.5)*40,(E+L.fy)/2,L.fx,L.fy+8),s.stroke();I(150,.5,.92,330,9,16,2,6,7);for(let L of C){if(s.save(),s.translate(L.fx,L.fy),s.scale(1,L.tilt),L.kind===0){let N=38*L.sz;for(let O=0;O<16;O++){let V=L.rot+O/16*6.283;s.fillStyle=Math.sin(V)>.4?"#e2e3ea":"#fdfdf6",s.beginPath(),s.ellipse(Math.cos(V)*N*.56,Math.sin(V)*N*.56,N*.48,N*.14,V,0,7),s.fill()}s.fillStyle="#f2b51a",s.beginPath(),s.arc(0,0,N*.28,0,7),s.fill(),s.fillStyle="#fbe060",s.beginPath(),s.arc(-N*.07,-N*.07,N*.14,0,7),s.fill()}else{let N=40*L.sz;for(let O=0;O<5;O++){let V=L.rot+O/5*6.283;s.fillStyle="#fccc1e",s.beginPath(),s.ellipse(Math.cos(V)*N*.52,Math.sin(V)*N*.52,N*.52,N*.38,V,0,7),s.fill()}for(let O=0;O<5;O++){let V=L.rot+O/5*6.283;s.fillStyle="#ffe873",s.beginPath(),s.ellipse(Math.cos(V)*N*.62,Math.sin(V)*N*.62-3,N*.26,N*.15,V,0,7),s.fill()}s.fillStyle="#e39b14",s.beginPath(),s.arc(0,0,N*.2,0,7),s.fill()}s.restore()}I(40,.42,.85,280,8,14,3,6,7),s.restore(),o[l]={u0:h/1024,u1:(h+512)/1024,v0:1-(d+512)/3072,v1:1-(d+8)/3072}};p("twigs",0,0),u("leafA",0,a),u("leafB",512,a),u("sakura",0,a+512),u("pine",512,a+512),u("momiji",0,a+1024),u("ginkgo",512,a+1024),f("grass",0,a+1536,!1),f("flowers",512,a+1536,!0),m("bankA",0,a+2048,4111,.7),m("bankB",512,a+2048,4127,.35);let v=new Kn(n);v.colorSpace=sn,v.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let _=1-(a+2048)/3072,S=1-(a+2056)/3072;return{tex:v,cells:o,tuftV:[_,1-(a+1536)/3072,S,(_+S)/2]}}var un=[1,1,1],Te={pole:de("#b1b0a9"),metal:de("#8d9198"),black:de("#2a2b30"),yellow:de("#f2c230"),white:de("#f4f3ee"),trans:de("#a0a3a8"),lampPole:de("#727780"),lampHead:de("#dcdcd6"),trunk:de("#6a5444"),trunkDark:de("#4b3a33"),leaf:de("#86ba4c"),leafShade:de("#2c6640"),sakura:de("#ffd3e3"),sakuraShade:de("#de94b4"),pine:de("#55874c"),pineShade:de("#1d4632"),cedar:de("#41713e"),cedarShade:de("#1b3e2a"),roof:de("#bdbbb3"),parapet:de("#dcdad2"),pipe:de("#c4c4bf"),orange:de("#f07a22"),red:de("#d8352a"),vermilion:de("#e2482c"),concrete:de("#c9c7c0"),stone:de("#a8a69e"),terracotta:de("#b8653d"),rail:de("#eeeeea")},zf=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(de),ls=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(de),Kp=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(de),kf=null;function Jp(i){kf=i}var Di=i=>kf.uv(i),vo=Di,jp=(i,e)=>{let t=1;for(;kf.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function Pu(i,e,t,n,s=0){let r=new nt().makeRotationY(s);r.setPosition(e,t,n);let o=new nt().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var Hf=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let a=e[5];(a==="g"&&e[6]==="l"||a==="d"||a==="k"||a==="c"||a==="n")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},nn=(i,e,t,n,s,r,o,a=un)=>{Hf(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],a,Di(o)),i.litV=0},Ni=(i,e,t,n,s,r,o,a=un)=>{Hf(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],a,Di(o)),i.litV=0},Ui=(i,e,t,n,s,r,o,a=un)=>{Hf(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],a,Di(o)),i.litV=0},go=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Di(r):void 0),Vy=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Qp(i){return Vy.map(e=>new z(e[0],e[1],e[2]).applyMatrix4(i))}function Vf(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Te.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Te.black:Te.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Te.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Te.metal);let o=[-.85,-.3,.3,.85],a=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,Te.white);for(let u of a)s.cyl(0,r-1.65,u,.045,.03,.15,6,Te.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Te.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Te.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Te.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Te.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Te.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Te.concrete);for(let u=2.4,f=0;u<r-2;u+=.45,f++)s.rod([0,u,0],[f%2?.3:-.3,u,0],.015,.015,3,Te.metal);return i.atlas.setM(e),nn(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&nn(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...a.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new z(u[0],u[1],u[2]).applyMatrix4(e))}var Au=new z;function Ds(i,e,t,n,s,r){i.lamps&&(Au.set(t,n,s).applyMatrix4(e),i.lamps.push(Au.x,Au.y,Au.z,r))}function Gf(i,e,t,n={}){let s=i.color;s.setM(e),Ds(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Te.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Te.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Te.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Te.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,un);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function em(i,e,t=.04){let n=i.color;n.setM(e),Ds(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Te.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Te.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Te.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,un),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],un,{u0:0,u1:1,v0:0,v1:1})}function Ga(i,e){let t=i.color;t.setM(e),Ds(i,e,0,3.5,0,.9),t.cyl(0,0,0,.07,.06,3.2,8,de("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,de("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,de("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,un),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],un,{u0:0,u1:1,v0:0,v1:1})}function Wf(i,e,t){let n=Math.floor(t()*3),s=[Te.red,de("#2f6fd8"),Te.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,bn(s,.8)),i.atlas.setM(e),nn(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Of(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,de("#e6e6e1")),i.atlas.setM(e),nn(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function tm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([de("#c8ccd2"),de("#c0392b"),de("#2c6fb7"),de("#2b2b2b"),de("#e8c84a"),de("#e98fb0")]);for(let o of[-.52,.52])for(let a=0;a<12;a++){let c=a/12*Math.PI*2,u=(a+1)/12*Math.PI*2;n.rod([o+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Te.black)}let r=(o,a)=>n.rod(o,a,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Te.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Te.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Te.metal)}function nm(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Te.orange),t.cyl(0,.04,0,.16,.03,.68,10,Te.orange),t.cyl(0,.32,0,.115,.095,.12,10,Te.white,!1)}function Xf(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Te.terracotta),i.leaf.setM(e),Fi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function Ns(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Te.metal),i.atlas.setM(e),n<0?Ui(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Ni(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function qf(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Te.white:Te.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Te.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Te.black),i.atlas.setM(e),t<0?Ui(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Ni(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function im(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,de("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,de("#f0a020"))}function Yf(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Te.orange);let s=0,r=3.25,o=.42,a=14;for(let c=0;c<a;c++){let u=c/a*Math.PI*2,f=(c+1)/a*Math.PI*2,p=(m,v,_)=>[t*_,r+Math.sin(m)*v,s+Math.cos(m)*v-.25];go(n,p(0,0,-.02),p(t>0?f:u,o,-.02),p(t>0?u:f,o,-.02),Te.orange),go(n,p(0,0,-.035),p(t>0?f:u,o*.86,-.035),p(t>0?u:f,o*.86,-.035),de("#dfe9f2"))}}var Iu=null;function sm(i){Iu=i}var Ru=1;function rm(i){Ru=i}function Fi(i,e,t,n,s,r,o,a,c,u,f,p,m=0){let v=Iu[o],_=1+(1-Ru)*.35;a=Math.max(2,Math.round(a*Ru));for(let S=0;S<a;S++){let l=c()*2-1,h=c()*2-1,d=c()*2-1;m&&(h=1.2+c());let x=Math.hypot(l,h,d)||1;l/=x,h/=x,d/=x;let g=-d,y=0,T=l;x=Math.hypot(g,T),x<.1&&(g=1,T=0,x=1),g/=x,T/=x;let E=h*T-d*y,M=d*g-l*T,b=l*y-h*g,w=Math.PI+(c()-.5)*.9,R=Math.cos(w),P=Math.sin(w),I=g*R+E*P,C=y*R+M*P,L=T*R+b*P,N=E*R-g*P,O=M*R-y*P,V=b*R-T*P,D=r*(1.3+c()*.45)*_/2,H=t+(c()-.5)*r*.6,k=n+(c()-.5)*r*(m?.15:.5),$=s+(c()-.5)*r*.6,Q=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ne,q])=>[H+(I*Ne+N*q)*D,k+(C*Ne+O*q)*D*(m?.6:1),$+(L*Ne+V*q)*D]),qe=Q.map(Ne=>{let q=Ne[0]-e[0],j=Ne[1]-e[1],ye=Ne[2]-e[2],Me=Math.hypot(q,j,ye)||1;q/=Me,j/=Me,ye/=Me;let Ee=Ne[0]-t,ze=Ne[1]-n,Ke=Ne[2]-s;return Me=Math.hypot(Ee,ze,Ke)||1,[q*.7+Ee/Me*.3,j*.7+ze/Me*.3+(m?.5:0),ye*.7+Ke/Me*.3]}),Be=Q.map(Ne=>Ef(f,u,.45+.55*Math.max(0,Math.min(1,(Ne[1]-p[0])/(p[1]-p[0])))));i.leaf.card(Q,qe,v,Be)}}function Zf(i,e,t,n="grass",s=1){let r=Iu[n],o=(.42+t()*.38)*s,a=o*1.2,c=t()*Math.PI,u=[0,1,0],f=[u,u,u,u],p=[.6,.64,.58],m=[1,1,1];i.leaf.setM(e);for(let v of[c,c+Math.PI/2]){let _=Math.cos(v)*a/2,S=Math.sin(v)*a/2;i.leaf.card([[-_,-.05,-S],[_,-.05,S],[_,o,S],[-_,o,-S]],f,r,[p,p,m,m])}}var Gy=[.62,.68,.74],om=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],Wy=[0,1,2,0,2,3,0,3,4],Xy=om.map(([,i])=>Ef(Gy,un,i));function am(i,e,t,n,s,r,o,a=1){let c=Iu[o()<.5?"bankA":"bankB"],u=.82*a,f=(u+.06)*2.03,p=i.leaf;for(let m of Wy){let[v,_]=om[m],S=(v-.5)*f;p.vtx(e+s*S,t+_*(u+.06)-.06,n+r*S,0,1,0,c.u0+(c.u1-c.u0)*v,c.v0+(c.v1-c.v0)*_,Xy[m])}}var lm=()=>Ru>.7?.9:1.25;function qy(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Te.trunk);for(let u=0;u<3;u++){let f=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(f)*1.1*n,s*.68,Math.sin(f)*1.1*n],.09*n,.05*n,5,Te.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",a=[s*.45,s*1.15],c=7+Math.floor(t()*3);for(let u=0;u<c;u++){let f=t()*6.28,p=(.6+t())*1.3*n;Fi(i,r,Math.cos(f)*p,s*(.62+t()*.3),Math.sin(f)*p,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],a)}Fi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],a)}function Yy(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Te.trunkDark);let r=[];for(let u=0;u<5;u++){let f=u/5*6.28+t()*.8,p=(2.2+t()*1.6)*n,m=[Math.cos(f)*p,s*(.62+t()*.18),Math.sin(f)*p];i.color.rod([0,s*.4,0],m,.12*n,.05*n,5,Te.trunkDark),r.push(m),i.color.rod(m,[m[0]*1.25,m[1]+.9*n,m[2]*1.25],.05*n,.02*n,4,Te.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],a=[s*.5,s*1.1],c=[.72,.62,.72];for(let u of r)for(let f=0;f<2;f++)Fi(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],c,a);Fi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],c,a)}function Zy(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,a=[r*.4,o*.45,.2],c=[r,o*.8,-.2];s.rod([0,0,0],a,.2*n,.15*n,6,Te.trunkDark),s.rod(a,c,.15*n,.09*n,6,Te.trunkDark),i.leaf.setM(e);let u=[[c[0],c[1]+.3,c[2],1.7],[a[0]+1.4*n,a[1]+.8,.5,1.3],[a[0]-1.3*n,a[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[f,p,m,v]of u)s.rod(f>a[0]?a:c,[f,p-.2,m],.07*n,.04*n,4,Te.trunkDark),Fi(i,[f,p-.8,m],f,p,m,v*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[p-.7,p+.5],1)}function $y(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Te.trunkDark);let r=[];for(let u=0;u<5;u++){let f=u/5*6.28+t()*.8,p=(1.8+t()*1.4)*n,m=[Math.cos(f)*p,s*(.55+t()*.2),Math.sin(f)*p];i.color.rod([0,s*.38,0],m,.09*n,.04*n,5,Te.trunkDark),r.push(m)}i.leaf.setM(e);let o=[0,s*.7,0],a=[s*.45,s*1.1],c=[.62,.52,.56];for(let u of r)Fi(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],c,a);Fi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],c,a)}function Ky(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Te.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],a=[.68,.6,.52];for(let c=0;c<7;c++){let u=s*(.34+c*.09),f=(2.1-c*.24)*n,p=t()*6.28;Fi(i,r,Math.cos(p)*f*.35,u,Math.sin(p)*f*.35,Math.max(.7,f)*1.05,"ginkgo",5,t,[1,1,1],a,o)}}function Jy(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,de("#eeece6"));for(let u=0;u<7;u++){let f=t.range(.4,r*.85),p=f/r;s.cyl(o*p,f,0,.135*n*(1-p*.6),.13*n*(1-p*.6),.05,7,de("#2b2b30"),!1)}for(let u=0;u<7;u++){let f=r*(.45+t()*.5),p=t()*6.28,m=(.8+t()*1.6)*n,v=f/r;s.rod([o*v,f,0],[o*v+Math.cos(p)*m,f+m*.9,Math.sin(p)*m],.035*n,.012*n,4,de("#8b7f78"))}let a=r*.7,c=(1.5+t()*.5)*n;i.leaf.setM(e),Fi(i,[o*.7,a,0],o*.7,a,0,c,"twigs",3,t,[1,1,1],[.92,.9,.92],[a-c,a+c])}function jy(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Te.trunkDark),i.foliage.setM(e);let r=de("#1d3a2c"),o=de("#eef2f8"),a=de("#d7e0ec");for(let c=0;c<4;c++){let u=s*(.16+c*.19),f=(1.9-c*.38)*n,p=s*.3;i.foliage.cyl(0,u,0,f,f*.3,p,9,r),i.foliage.cyl(0,u+p*.45,0,f*.72,.05,p*.62,9,c%2?o:a)}}function Qy(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Te.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Te.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Te.cedar)}var cm={broad:qy,sakura:Yy,pine:Zy,cedar:Qy,maple:$y,ginkgo:Ky,birch:Jy,snowcedar:jy},Zp={};function um(i,e){let t=i+e,n=Zp[t];if(!n){let s={color:new Sn,foliage:new Sn,leaf:new Sn({uv:!0})};cm[i](s,new nt,Kt(1e3+e*77+i.length*13),1),n=Zp[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function hm(){for(let i in cm)for(let e=0;e<4;e++)um(i,e)}function Hn(i,e,t,n,s=1){let r=um(t,Math.floor(n()*4)),o=e.clone().scale(new z(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o)}var eM=new Set(["win0","win2","win5","win6"]),Zi=(i,e,t)=>e<t?i+(e<t*.35&&eM.has(i)?"C":"L"):i;function Wa(i,e,t,n,s,r,o){let a=Math.max(1,Math.round(t/3)),c=t/a;for(let u of[-1,1])for(let f=0;f<n.length-1;f++)for(let p=0;p<a;p++){let m=f>0&&r()<.3?Zi("win6",r(),o):r()<.2?"win5":"plain";(u>0?Ni:Ui)(i,u*e/2,p*c,(p+1)*c,n[f],n[f+1],m,s)}}function Xa(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Te.roof);let o=.5,a=.15;if(i.box(-e/2,n,-.02,e/2,n+o,a,Te.parapet),i.box(-e/2,n,t-a,e/2,n+o,t,Te.parapet),i.box(-e/2,n,0,-e/2+a,n+o,t,Te.parapet),i.box(e/2-a,n,0,e/2,n+o,t,Te.parapet),s()<.4){let c=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[f,p]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+f-.05,n,u+p-.05,c+f+.05,n+1,u+p+.05,Te.metal);i.cyl(c,n+1,u,.85,.85,1.3,12,de("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Te.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Te.metal)}function Cu(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Te.black);let r="vs"+Math.floor(s()*10);Ui(i.atlas,e-.065,-.88,-.12,t,n,r),Ni(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Te.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Te.metal)}function cs(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Te.concrete,null,{noBottom:!0}),n.type){case"shop":return tM(i,e,t,n);case"machiya":return nM(i,e,t,n);case"apt":return iM(i,e,t,n);case"office":return sM(i,e,t,n);case"konbini":return rM(i,e,t,n);case"house":return aM(i,e,t,n);case"tower":return lM(i,e,t,n)}}var fm=new Set(["glass","door","cafe","noren"]),dm={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function tM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,p=3.6,m=3,v=p+(o-1)*m,_=Math.max(1,Math.round(s/3)),S=s/_,l=-s/2,h=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],x=0;for(let M=0;M<_;M++){let b=jp(t,"shop_"+h[M%h.length]);d.push(b),!x&&b.startsWith("shop_glass")&&b.length>10&&(x=+b.slice(10))}for(let M=0;M<_;M++){let b=h[M%h.length];nn(u,l+M*S,l+(M+1)*S,0,p,0,x&&b==="glass"?"shop_glass"+x:d[M]),fm.has(b)&&Ds(i,e,l+(M+.5)*S,1.9,-.8,.7)}let g=t.pick([0,0,1,5,0,1]),y=[0,p];for(let M=1;M<o;M++)y.push(p+M*m);for(let M=1;M<o;M++)for(let b=0;b<_;b++){let w=b%2===1&&t()<.3?5:g;nn(u,l+b*S,l+(b+1)*S,y[M],y[M+1],0,Zi("win"+w,t(),c),a)}Wa(u,s,r,y,a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],bn(a,.8)),Xa(f,s,r,v,t);let T=s*.94;f.box(-T/2,p-.8,-.3,T/2,p+.08,-.02,Te.black);let E="hs"+Math.floor(t()*14);if(nn(u,-T/2,T/2,p-.8,p+.08,-.305,dm[x]||E),t()<.55){let M=t.pick(Kp),b=p-.85;f.quad([s/2-.2,b-.35,-1.1],[-s/2+.2,b-.35,-1.1],[-s/2+.2,b,-.02],[s/2-.2,b,-.02],M),f.quad([s/2-.2,b-.6,-1.1],[-s/2+.2,b-.6,-1.1],[-s/2+.2,b-.35,-1.1],[s/2-.2,b-.35,-1.1],bn(M,.85))}if(o>=2&&t()<.85){let M=(t()<.5?1:-1)*(s/2-.35);Cu(i,M,p+.3,Math.min(v-.15,p+2.8),t)}for(let M=1;M<o;M++)if(t()<.4){let b=Math.floor(t()*_),w=l+b*S+.15,R=l+(b+1)*S-.15,P=y[M];f.box(w,P-.12,-.9,R,P,0,Te.parapet),nn(u,w,R,P,P+1,-.9,"rail"),Ui(u,w,-.9,0,P,P+1,"rail"),Ni(u,R,-.9,0,P,P+1,"rail"),t()<.45&&_m(f,w+.1,R-.1,P+1.95,-.55,t),t()<.6&&Of(i,e,(w+R)/2+.6,P,-.75)}else if(t()<.35){let b=Math.floor(t()*_);Of(i,e,l+(b+.5)*S,y[M]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}f.cyl(l+.12,0,-.08,.05,.05,v,6,Te.pipe,!1),f.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,de("#d9d9d3")),o>=3&&t()<.18&&pm(i,s,v,r,t)}function nM(i,e,t,n){let{w:s,d:r,floors:o,litP:a}=n,c=i.atlas,u=i.color,f=3.6,p=2.9,m=f+(o-1)*p,v=-s/2,_=Math.max(2,Math.round(s/3)),S=s/_,l=de("#5c4030"),h=de("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),x=[],g=0;for(let D=0;D<_;D++){let H=jp(t,"shop_"+d[D%d.length]);x.push(H),!g&&H.startsWith("shop_glass")&&H.length>10&&(g=+H.slice(10))}for(let D=0;D<_;D++){let H=d[D%d.length];nn(c,v+D*S,v+(D+1)*S,0,f,0,g&&H==="glass"?"shop_glass"+g:x[D]),fm.has(H)&&Ds(i,e,v+(D+.5)*S,1.9,-.8,.7)}let y=!!n.plaster,T=n.tint,E=[0,f];for(let D=1;D<o;D++)E.push(f+D*p);let M=y?t.pick([0,0,1,0,2]):4;for(let D=1;D<o;D++)for(let H=0;H<_;H++)nn(c,v+H*S,v+(H+1)*S,E[D],E[D+1],0,Zi("win"+(y&&H%2===1&&t()<.3?5:M===2?0:M),t(),a),y?T:un);{let D=Math.max(1,Math.round(r/3)),H=r/D;for(let k of[-1,1])for(let $=0;$<E.length-1;$++)for(let Q=0;Q<D;Q++)(k>0?Ni:Ui)(c,k*s/2,Q*H,(Q+1)*H,E[$],E[$+1],y?$>0&&t()<.35?Zi("win6",t(),a):"plain":$>0&&t()<.45?Zi("win4",t(),a):"woodwall",y?T:un)}u.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],y?bn(T,.8):de("#6a5240"));for(let D of[v,-v])u.box(D-.09,0,-.12,D+.09,m,.02,h);if(y)for(let D=2;D<o;D++)u.box(v,E[D]-.1,-.08,-v,E[D]+.06,0,h);let{RC:b,k:w}=mm(i,n,s,r,m,t,!y),R=f+.34,P=1.05,I=.42,C=Math.max(2,Math.round((s+.3)/3));for(let D=0;D<C;D++){let H=v-.15+(s+.3)*D/C,k=v-.15+(s+.3)*(D+1)/C;c.quad([k,R-I,-P],[H,R-I,-P],[H,R,0],[k,R,0],b,w)}u.quad([v-.15,R-I-.03,-P],[-v+.15,R-I-.03,-P],[-v+.15,R-.1,0],[v-.15,R-.1,0],l);let L=s*.9,N=R-I+.02,O=N-.62;u.box(-L/2,O,-P-.02,L/2,N,-P+.07,h),nn(c,-L/2,L/2,O,N,-P-.025,dm[g]||"hs"+Math.floor(t()*14));for(let D of[-L/2+.25,L/2-.25])u.box(D-.03,N,-P+.02,D+.03,R-I*.1,-P+.06,h);i.sodium.setM(e),u.noShadow=!0;for(let D=0;D<_;D++){let H=v+(D+.5)*S;u.box(H-.008,O-.02,-.62,H+.008,R-I*.6,-.6,h),i.sodium.box(H-.06,O-.16,-.67,H+.06,O-.04,-.55,null)}u.noShadow=!1;let V=!1;if(t()<.5){V=!0;let D=t.pick(Kp),H=O-.12;u.quad([s/2-.2,H-.32,-.95],[-s/2+.2,H-.32,-.95],[-s/2+.2,H,-.02],[s/2-.2,H,-.02],D),u.quad([s/2-.2,H-.55,-.95],[-s/2+.2,H-.55,-.95],[-s/2+.2,H-.32,-.95],[s/2-.2,H-.32,-.95],bn(D,.85))}if(o>=2&&(!y||t()<.5)){let D=E[1]+.42,H=-.5,k=v+.12,$=-v-.12;u.box(k,D-.07,H-.04,$,D,0,l);for(let Q=0;Q<_;Q++)nn(c,v+.12+(s-.24)*Q/_,v+.12+(s-.24)*(Q+1)/_,D,D+.95,H,"wrail");Ui(c,k,H,0,D,D+.95,"wrail"),Ni(c,$,H,0,D,D+.95,"wrail"),i.leaf.setM(e);for(let Q=0;Q<_;Q++)if(t()<.7){let qe=v+(Q+.5)*S,Be=Math.min(S*.7,1.6);u.noShadow=!0,u.box(qe-Be/2,D+.72,H-.2,qe+Be/2,D+.92,H-.02,de("#7a5236")),u.noShadow=!1;for(let Ne=qe-Be/2+.2;Ne<qe+Be/2-.1;Ne+=.32)Fi(i,[Ne,D+.95,H-.11],Ne,D+1.05,H-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[D+.9,D+1.3])}}if(o>=2&&t()<.9){let D=t()<.5?1:-1;Cu(i,D*(s/2-.35),f+.6,Math.min(m-.2,f+2.7),t),s>7&&t()<.35&&Cu(i,-D*(s/2-.35),f+.8,Math.min(m-.2,f+2.5),t)}{let D=d.includes("noren")||d.includes("cafe"),H=V?0:D?2:t()<.3?1:0;i.sodium.setM(e);for(let k=0;k<H;k++){let $=H===2?(k?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),Q=O-.5;u.noShadow=!0,u.box($-.006,Q+.42,-P+.12,$+.006,O,-P+.14,h),i.sodium.cyl($,Q,-P+.13,.11,.16,.18,10,null,!1),i.sodium.cyl($,Q+.18,-P+.13,.16,.11,.18,10,null,!1),u.cyl($,Q-.035,-P+.13,.1,.1,.04,8,h),u.cyl($,Q+.355,-P+.13,.1,.1,.04,8,h),u.noShadow=!1}}for(let D=v+.45+t()*.4;D<-v-.3;D+=.7+t()*1.3)t()<.7&&Xf(i,e,t,D,-.4);i.color.setM(e),i.atlas.setM(e)}function pm(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,a=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,t,a,c+.06,t+1.2+o,a+.12,Te.metal);i.color.box(-r/2,t+1.2,a+.12,r/2,t+1.2+o,a+.3,Te.metal),nn(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,a+.115,"bb"+Math.floor(s()*4))}function iM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,p=3.2,m=2.95,v=p+(o-1)*m,_=Math.max(2,Math.round(s/3.2)),S=s/_,l=-s/2,h=[0,p];for(let g=1;g<o;g++)h.push(p+g*m);for(let g=0;g<_;g++)nn(u,l+g*S,l+(g+1)*S,0,p,0,g===Math.floor(_/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),g===Math.floor(_/2)?un:a);let d="bal"+Math.floor(t()*3),x=bn(a,.97);for(let g=1;g<o;g++){let y=h[g];for(let T=0;T<_;T++)nn(u,l+T*S,l+(T+1)*S,y,h[g+1],0,Zi("win2",t(),c),a);f.box(l,y-.15,-1.3,-l,y,0,x),f.box(l,y,-1.3,-l,y+1.1,-1.18,x,null,{noBottom:!0});for(let T=0;T<_;T++)nn(u,l+T*S,l+(T+1)*S,y,y+1.1,-1.305,d,a);for(let T=0;T<=_;T++)f.box(l+T*S-.05,y,-1.18,l+T*S+.05,y+2.4,0,bn(a,.92));for(let T=0;T<_;T++){let E=t(),M=l+T*S+.2,b=l+(T+1)*S-.2;E<.34?_m(f,M,b,y+2.02,-.98,t):E<.46&&hM(f,M+.25,Math.min(b-.25,M+1.9),y+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<_;T++)t()<.55&&(Of(i,e,l+(T+.78)*S,y,-.55),i.atlas.setM(e),i.color.setM(e))}f.box(l,v-.15,-1.3,-l,v,0,x),Wa(u,s,r,h,a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],bn(a,.8)),Xa(f,s,r,v,t,!0)}function sM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,p=4,m=3.4,v=p+(o-1)*m,_=Math.max(2,Math.round(s/3)),S=s/_,l=-s/2,h=[0,p];for(let d=1;d<o;d++)h.push(p+d*m);for(let d=0;d<_;d++)nn(u,l+d*S,l+(d+1)*S,0,p,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let x=0;x<_;x++)nn(u,l+x*S,l+(x+1)*S,h[d],h[d+1],0,Zi("win3",t(),c),a);Wa(u,s,r,h,a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],bn(a,.8)),Xa(f,s,r,v,t,!0),t()<.6&&Cu(i,(t()<.5?1:-1)*(s/2-.3),p+.4,Math.min(v-.3,p+4.5),t),t()<.3&&pm(i,s,v,r,t)}function rM(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,a=i.color,c=4.4,u=-s/2,f=Math.max(3,Math.round(s/3)),p=s/f;for(let m=0;m<f;m++)nn(o,u+m*p,u+(m+1)*p,0,3.4,0,"shop_konbini"),Ds(i,e,u+(m+.5)*p,1.9,-.8,.8);a.box(u,3.4,-.35,-u,c,0,Te.white),nn(o,u,-u,3.4,c,-.355,"konbini_band"),Wa(o,s,r,[0,c],de("#f2f2ee"),t,0),Xa(a,s,r,c,t)}var $p=(i,e)=>e?de("#7a5a42"):i.tint,Bf=null,oM=()=>{if(!Bf){let i=Di("kawara"),e=16/272*(i.u1-i.u0);Bf={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return Bf};function mm(i,e,t,n,s,r,o){let a=i.atlas,c=i.color,u=!!e.snow,f=u?.75:.6,p=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),m=u?Di("white"):oM(),v=u?de("#f3f5fa"):de("#c8ccd8"),_=u?de("#e4e8f0"):de("#3d4456"),S=u?1:Math.max(2,Math.round((t+2*f)/3)),l=x=>-t/2-f+(t+2*f)*x/S;for(let x=0;x<S;x++){let g=l(x),y=l(x+1);a.quad([y,s-.25,-f],[g,s-.25,-f],[g,s+p,n/2],[y,s+p,n/2],v,m),a.quad([g,s-.25,n+f],[y,s-.25,n+f],[y,s+p,n/2],[g,s+p,n/2],v,m)}let h=(x,g,y,T,E,M)=>{M<0?(c.quad([g,y,E],[x,y,E],[x,T,E],[g,T,E],_),c.quad([x,y,E],[g,y,E],[g,y,E+.08],[x,y,E+.08],_)):(c.quad([x,y,E],[g,y,E],[g,T,E],[x,T,E],_),c.quad([g,y,E],[x,y,E],[x,y,E-.08],[g,y,E-.08],_))};for(let[x,g]of[[-f,0],[n+f,n]])h(-t/2-f,t/2+f,s-.42,s-.22,x<0?x-.04:x+.04,x<0?-1:1),c.quad(x<0?[-t/2-f,s-.26,x]:[t/2+f,s-.26,x],x<0?[t/2+f,s-.26,x]:[-t/2-f,s-.26,x],x<0?[t/2+f,s-.26,g]:[-t/2-f,s-.26,g],x<0?[-t/2-f,s-.26,g]:[t/2+f,s-.26,g],bn($p(e,o),.62));for(let x of[-1,1]){let g=x*(t/2+f+.02),y=.2,T=[g,s-.25,-f],E=[g,s+p,n/2],M=[g,s-.25,n+f],b=w=>[w[0],w[1]-y,w[2]];x>0?(c.quad(b(E),b(T),T,E,_),c.quad(b(M),b(E),E,M,_)):(c.quad(b(T),b(E),E,T,_),c.quad(b(E),b(M),M,E,_))}let d=$p(e,o);if(go(c,[-t/2,s,0],[-t/2,s,n],[-t/2,s+p-.1,n/2],d),go(c,[t/2,s,n],[t/2,s,0],[t/2,s+p-.1,n/2],d),c.box(-t/2-f,s+p-.05,n/2-.15,t/2+f,s+p+.18,n/2+.15,u?de("#f6f7fb"):de("#3d4456")),u){c.box(-t/2-f-.05,s-.42,-f-.1,t/2+f+.05,s-.12,-f+.3,de("#eef1f7")),c.box(-t/2-f-.05,s-.42,n+f-.3,t/2+f+.05,s-.12,n+f+.1,de("#eef1f7"));for(let x=-t/2;x<t/2;x+=.45+r()*.5)c.cyl(x,s-.42-.35,-f+.02,0,.04,.35,4,de("#dfe8f3"),!1)}return{RC:v,k:m,fascia:h,nS:S}}function aM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,p=2.9,m=o*p,v=-s/2,_=t()<.5,S=Math.max(2,Math.round(s/3)),l=s/S,h=[];for(let E=0;E<=o;E++)h.push(E*p);let d=_?un:a;for(let E=0;E<o;E++)for(let M=0;M<S;M++){let b=_?"win4":"win0";E===0&&M===0?b="shop_house":b=Zi(b,t(),c),nn(u,v+M*l,v+(M+1)*l,h[E],h[E+1],0,b,b==="shop_house"?un:d)}Wa(u,s,r,h,_?de("#9a7a62"):a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],bn(a,.75));let{RC:x,k:g,fascia:y,nS:T}=mm(i,n,s,r,m,t,_);if(o>1){let E=p+.05;for(let M=0;M<T;M++){let b=-s/2-.1+(s+.2)*M/T,w=-s/2-.1+(s+.2)*(M+1)/T;u.quad([w,E-.3,-.75],[b,E-.3,-.75],[b,E+.05,0],[w,E+.05,0],x,g)}y(-s/2-.1,s/2+.1,E-.42,E-.28,-.79,-1)}if(n.fence){let E=-n.fence,M=1.2;for(let[b,w]of[[-s/2,-1],[.4,s/2]])f.box(b,0,E-.08,w,M,E+.08,Te.concrete),nn(u,b,w,0,M,E-.085,"block")}}function lM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,p=3.4,m=o*p,v=Math.max(2,Math.round(s/6)),_=s/v,S=-s/2,l=t()<.5?"win3":"win2",h=[];for(let g=0;g<=o;g++)h.push(g*p);for(let g=0;g<o;g++)for(let y=0;y<v;y++)nn(u,S+y*_,S+(y+1)*_,h[g],h[g+1],0,Zi(l,t(),c),a);let d=Math.max(1,Math.round(r/6)),x=r/d;for(let g of[-1,1])for(let y=0;y<o;y++)for(let T=0;T<d;T++)(g>0?Ni:Ui)(u,g*s/2,T*x,(T+1)*x,h[y],h[y+1],Zi(l,t(),c),a);Xa(f,s,r,m,t,!0)}function gm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([de("#f2f2ee"),de("#c9cdd2"),de("#2b2f38"),de("#b33a32"),de("#9fc6c0"),de("#e7d9b4"),de("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,bn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,de("#2a3346"));for(let[r,o]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,o-.11,r+.3,.6,o+.11,Te.black)}function $f(i,e,t,n){let s=i.color,r=de("#8d9096"),o=de("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let a=-n-.62,c=-n+.62;s.box(-.14,5.08,a,.14,5.56,c,o);let u=t*.141;i.atlas.setM(e),(t>0?Ni:Ui)(i.atlas,u,a,c,5.08,5.56,"signal");let f=t>0?c:a,p=t>0?-1:1;for(let v=0;v<3;v++){let _=f+p*(.2+v*.4);s.box(t>0?.14:-.36,5.47,_-.15,t>0?.36:-.14,5.5,_+.15,o)}let m=f+p*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,m-.11,t>0?.16:-.145,5.43,m+.11,un)}function vm(i,e,t,n){let s=i.color,r=de("#3d6ea8"),o=de("#e8eef2"),a=de("#c7c5bf"),c=5.35;s.setM(e),s.box(-1.1,c-.65,-t,1.1,c,t,r);for(let u of[-1.1,1])s.box(u,c,-t,u+.1,c+1.1,t,o),s.box(u-.02,c+1.1,-t,u+.12,c+1.18,t,r);i.atlas.setM(e),Ui(i.atlas,-1.105,-2.2,2.2,c-.62,c-.06,n),Ni(i.atlas,1.105,-2.2,2.2,c-.62,c-.06,n),s.setM(e);for(let u of[-1,1]){let f=u*(t-1.65),p=u*(t-.15),m=Math.min(f,p),v=Math.max(f,p);s.box(-.45,.15,m+.3,.45,c-.65,v-.3,r);let _=20,S=(c-.15)/_;for(let l=0;l<_;l++)s.box(1.1+l*.3,.15,m,1.1+(l+1)*.3,c-(l+1)*S+.04,v,a);s.box(1.1,c-.1,m-.05,1.1+_*.3,c-.02,m+.05,r)}}function xm(i,e,t,n,s,r,o){let a=i.color,c=1.22,u=3.55,f=6.7,p=de("#c8c5bd"),m=de("#ebe8de"),v=de("#7a5a42"),_=de("#5e4433"),S=de("#4d5468");a.setM(e),a.box(t,-1.4,u,n,c,f,p,null,{noBottom:!0}),a.box(t,c,u,n,c+.025,u+.32,m),a.box(t,c,u+.6,n,c+.04,u+.9,Te.yellow);let l=Math.sign(s-(t+n)/2),h=l>0?n:t,d=h+l*6.2,x=u+.9,g=f-.2,y=(D,H,k)=>[D,H,k];l>0?a.quad(y(d,.1,g),y(d,.1,x),y(h,c,x),y(h,c,g),p):a.quad(y(d,.1,x),y(d,.1,g),y(h,c,g),y(h,c,x),p);for(let D of[x,g]){let H=de("#9aa0a6");a.rod([d,.1+.9,D],[h,c+.9,D],.03,.03,5,H);for(let k=0;k<=3;k++){let $=d+(h-d)*k/3,Q=.1+(c-.1)*k/3;a.box($-.03,Q,D-.03,$+.03,Q+.9,D+.03,H)}}i.atlas.setM(e);for(let D=t;D<n-.01;D+=3){let H=Math.min(n,D+3);i.atlas.quad([D,-.6,f+.004],[H,-.6,f+.004],[H,c,f+.004],[D,c,f+.004],de("#d8d4ca"),Di("concrete"))}a.setM(e);for(let D=t+.4;D<n;D+=2)a.box(D-.05,c,f-.12,D+.05,c+1,f-.02,de("#8f949a"));for(let D of[.45,.95])a.box(t,c+D,f-.1,n,c+D+.06,f-.04,de("#8f949a"));let T=n-t,E=D=>l>0?n-T*D:t+T*D,M=E(.47),b=M-2.3,w=M+2.3,R=u+1.35,P=f-.25;a.box(b,c,P-.12,w,c+2.45,P,v);for(let D of[b,w-.12])a.box(D,c,R+.6,D+.12,c+2.45,P,_);for(let D of[b,w-.12])a.box(D,c,R,D+.12,c+2.45,R+.12,_);a.quad([w+.4,c+2.5,R-.45],[b-.4,c+2.5,R-.45],[b-.4,c+2.85,P+.35],[w+.4,c+2.85,P+.35],S),a.quad([b-.4,c+2.42,R-.45],[w+.4,c+2.42,R-.45],[w+.4,c+2.77,P+.35],[b-.4,c+2.77,P+.35],de("#3a3f50")),a.box(b+.3,c+.42,P-.55,w-.3,c+.48,P-.15,de("#8a6a4a"));for(let D of[b+.4,w-.5])a.box(D,c,P-.5,D+.08,c+.42,P-.2,Te.metal);i.atlas.setM(e),i.atlas.quad([M-1.1,c+1.55,P+.005],[M+1.1,c+1.55,P+.005],[M+1.1,c+2.03,P+.005],[M-1.1,c+2.03,P+.005],un,Di("ekiplate"+r));let I=E(.2),C=u+1.6,L=1.25,N=c+1.25,O=N+.95;a.setM(e);for(let D of[I-L+.12,I+L-.12])a.cyl(D,c,C,.05,.05,O-c+.05,8,de("#6b7078"));a.box(I-L,N-.03,C-.03,I+L,O+.03,C+.03,de("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-L,N,C+.035],[I+L,N,C+.035],[I+L,O,C+.035],[I-L,O,C+.035],un,Di("ekimei"+r)),i.atlas.quad([I+L,N,C-.035],[I-L,N,C-.035],[I-L,O,C-.035],[I+L,O,C-.035],un,Di("ekimei"+r)),a.setM(e);let V=M-l*4.2;a.box(V-.9,c+.42,f-1.25,V+.9,c+.47,f-.85,de("#3b6ea8")),a.box(V-.9,c+.47,f-.88,V+.9,c+.9,f-.83,de("#3b6ea8"));for(let D of[V-.75,V+.7])a.box(D,c,f-1.2,D+.06,c+.42,f-.9,Te.metal);for(let D=t+3;D<n-1;D+=9)Ga(i,Pu(e,D,c,f-.45))}var cM=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(de),uM=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(de);function _m(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Te.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let a=.28+r()*.34,c=.36+r()*.42,u=r.pick(cM),f=s+(r()-.5)*.06;i.quad([o+a,n-c,f],[o,n-c,f],[o,n-.02,f],[o+a,n-.02,f],u),i.quad([o,n-c,f+.01],[o+a,n-c,f+.01],[o+a,n-.02,f+.01],[o,n-.02,f+.01],bn(u,.85)),r()<.4&&i.box(o+a*.45,n-.02,f-.02,o+a*.55,n+.06,f+.02,de("#d8d8d0")),o+=a+.06+r()*.22}}function hM(i,e,t,n,s,r){let o=r.pick(uM),a=.11;i.box(e,n-.02,s-a,t,n+.09,s+.22,o),i.box(e,n-.72,s-a,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-a-.004,t-.08,n-.42,s-a+.01,bn(o,.86))}function ym(i,e){let t=i.color,n=de("#a19f97"),s=de("#6b4a35"),r=de("#4f4a44"),o=de("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,de("#8d8b84"));for(let a of[-.52,.48])for(let c of[-.36,.32])t.box(a,.32,c,a+.05,1.5,c+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,bn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let a of[-.32,.3])t.cyl(a,.32,-.18,.05,.06,.07,8,de("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,de("#5b8d3d"))}function Mm(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Te.black:Te.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Te.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Te.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Te.black);t.box(-.78,-.9,-.34,.3,0,.34,Te.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,de("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Te.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new nt().multiplyMatrices(e,new nt().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Te.black:Te.yellow)}t.setM(e),i.atlas.setM(e),nn(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function bm(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,Te.stone),t.cyl(0,.25,0,.14,.12,.95,8,Te.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,Te.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,bn(Te.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,bn(Te.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,un),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,un)}function Kf(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Te.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Te.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Te.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Te.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Te.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Te.vermilion)}function Sm(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,de("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,de("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,de("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,de("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Te.metal),n.box(1.1,0,.3,1.2,.42,.55,Te.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Te.metal),i.atlas.setM(e),Ui(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Ni(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function Tm(i,e,t,n=1){let s=i.color;s.setM(e);let r=bn(Te.concrete,.85+t()*.15),o=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],a=.55*n;for(let c of o)s.rod([0,a,0],[c[0]*.95*n,a+c[1]*.95*n,c[2]*.95*n],.42*n,.26*n,7,r)}function Em(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,de("#8f8a80"),de("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Te.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Te.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Te.black),t.cyl(0,18.6,0,1,.25,1.2,12,Te.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,un)}function wm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([de("#f4f4f0"),de("#3b6ea5"),de("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),go(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),go(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Te.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Te.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,de("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Te.metal)}function Am(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Te.stone),n.box(-.55,.5,.9,.55,1.5,1.8,de("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],de("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],de("#4d5468")),Kf(i,Pu(e,0,0,-.3,Math.PI/2),.75,2.2)}var zt=60,Jf=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],Rm=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],Cm=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],jf=32,qa=[.025,.026,.032],Pm=[.05,.05,.065],dM=new nt,us=(i,e)=>(i%e+e)%e,hs=(i,e)=>{let t=Is(i);return!!t&&Math.abs(i-t.s)<e},Qf=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Bi=(i,e)=>{let t=xi(i);return!!t&&Math.abs(i-t.s)<e},Qn=(i,e)=>{let t=vi(i);return!!t&&Math.abs(i-t.s)<e},ed=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=n(r,o);this.P.push(a[0],a[1],a[2]),this.N.push(a[3],a[4],a[5]),this.SU.push(a[6],a[7]),this.ZW.push(a[8],a[9],a[10],a[11]),this.RK.push(a[12],a[13]),this.RV.push(a[14]||0),this.ZS.push(a[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let a=s+r*t+o,c=a+1,u=a+t,f=u+1;this.I.push(a,c,u,c,f,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,a=new Array(e*o);for(let u=0;u<e;u++)for(let f=0;f<o;f++)a[u*o+f]=n(u,f-s);let c=(u,f)=>a[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,f))];for(let u=0;u<e;u++)for(let f=s;f<s+t;f++){let p=c(u,f-1),m=c(u,f+1),v=c(u-1,f),_=c(u+1,f),S=a[u*o+f],l=m[0]-p[0],h=m[1]-p[1],d=m[2]-p[2],x=_[0]-v[0],g=_[1]-v[1],y=_[2]-v[2],T=h*y-d*g,E=d*x-l*y,M=l*g-h*x;E<0&&(T=-T,E=-E,M=-M);let b=Math.hypot(T,E,M)||1;S[3]=T/b,S[4]=E/b,S[5]=M/b}this.grid(e,t,(u,f)=>a[u*o+f+s])}build(){let e=new vt;return e.setAttribute("position",new je(this.P,3)),e.setAttribute("normal",new je(this.N,3)),e.setAttribute("su",new je(this.SU,2)),e.setAttribute("zw",new je(this.ZW,4)),e.setAttribute("rk",new je(this.RK,2)),e.setAttribute("rv",new je(this.RV,1)),e.setAttribute("zs",new je(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},Lu=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new en,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/zt),s=Math.floor((e+this.ahead)/zt);for(let[o,a]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(a),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let a=o.pending.shift();a&&o.group.add(a),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let a=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){a=c;break}if(a<0)return 0;a*zt-e<320&&(t=Math.max(t,12)),this.job={c:a,it:this.gen(a)}}let o=this.job.it.next();if(o.done){let a=o.value;a.pending=a.group.children.slice(),a.group.clear(),this.chunks.set(this.job.c,a),this.group.add(a.group),this.reveal.push(a),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let a=o*zt-e,c=r.group.children;for(let u=0;u<c.length;u++){let f=c[u],p=f.userData.detail;p&&(f.visible=p==="leaf"?a<s:a<t||n&&p==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*zt,s=n+zt,r=t.at(n),o=r.x,a=r.z,c=Kt(Math.floor(Wn(e,777)*4294967295)),u={atlas:new Sn({uv:!0,ao:!0,lit:!0}),color:new Sn({ao:!0}),foliage:new Sn,leaf:new Sn({uv:!0}),lamp:new Sn({color:!1}),sig:new Sn({color:!1}),sodium:new Sn({color:!1}),decal:new Sn({uv:!0}),pool:new Sn({uv:!0,color:!1})},f=new ed,p=[],m=[];u.lamps=[];let v={},_={},S=(w,R)=>{t.at(w,_);let P=An(w,"rw");return _.y+ar(w,R,_.y,P)},l=w=>{let R=It(w);return[R.city,R.sakura,R.coast,R.country,R.snow]},h=(w,R,P)=>(t.at(w,v),[v.x+v.rx*R-o,P,v.z+v.rz*R-a]),d=(w,R,P,I=0,C=!0)=>{t.at(w,v);let L=v.h-Math.PI/2+(C&&R<0?Math.PI:0)+I,N=new nt().makeRotationY(L);return N.setPosition(v.x+v.rx*R-o,P,v.z+v.rz*R-a),N.groundY=P,N},x=(w,R,P=0,I=0,C=!0)=>{let L=S(w,R),N=d(w,R,L+P,I,C);return N.groundY=L,N},g=w=>t.at(w,_).y,y=w=>An(w,"rw"),T=w=>{let R=It(w);return R.city+R.sakura>.5?R.city>=R.sakura?3:2.6:0};{let w=vi(n+zt/2),R=!!w&&w.s>n-40&&w.s<s+40,P=R?61:21,I=y(n+zt/2),C=(()=>{let $=[0,...Rm].map(Q=>Q);return Cm.forEach(Q=>$.push(Q-I)),$})(),L=[...C.slice().reverse().map(k=>-k),...C],N=L.length,O=Array.from({length:P},(k,$)=>n+$/(P-1)*zt);{let k=xi(n+zt/2);if(k)for(let $ of[k.s-cn,k.s+cn])$>n+.1&&$<s-.1&&O.push($-.03,$+.03)}O.sort((k,$)=>k-$);let V=N/2,D=O.map(k=>(t.at(k,v),{s:k,f:{...v},rw:y(k),w:l(k),rb:R?Tp(k):0})),H=Math.round(V/2);for(let[k,$,Q,qe]of[[0,H,0,1],[H-1,V,1,0],[V,V+H+1,0,1],[V+H,N,1,0]])f.gridN(D.length,$-k,(Be,Ne)=>{let q=D[Be],j=q.f,ye=k+Ne,Me=L[ye],Ee=Me<0||Me===0&&ye<V?Me-q.rw:Me+q.rw,ze=j.y+ar(q.s,Ee,j.y,q.rw),Ke=Math.abs(Ee)>q.rw+.98?Math.min(1,gu/.5):0;return[j.x+j.rx*Ee-o,ze,j.z+j.rz*Ee-a,0,1,0,us(q.s,rs),Ee,q.w[0],q.w[1],q.w[2],q.w[3],q.rw,0,q.rb>0?q.rb:-Ke,q.w[4]]},Q,qe),yield}yield,f.grid(31,2,(R,P)=>{let I=n+R/30*zt,C=y(I),L=P?C:-C;t.at(I,v);let N=v.y,O=(g(I+1)-g(I-1))/2,V=-O*v.fx,D=1,H=-O*v.fz,k=Math.hypot(V,D,H),$=l(I);return[v.x+v.rx*L-o,N,v.z+v.rz*L-a,V/k,D/k,H/k,us(I,rs),L,$[0],$[1],$[2],$[3],C,1,0,$[4]]});{let w=[];for(let I=0;I<=30;I++){let C=n+I/30*zt;w.push({s:C,sw:T(C)})}let R=[],P=null;for(let I of w)I.sw>0?(P||(P=[],R.push(P)),P.push(I)):P=null;for(let I of R)if(!(I.length<2))for(let C of[-1,1])f.grid(I.length,2,(L,N)=>{let{s:O,sw:V}=I[L],D=y(O),H=C*(N===(C>0?0:1)?D:D+V);t.at(O,v);let k=l(O);return[v.x+v.rx*H-o,v.y+.15,v.z+v.rz*H-a,0,1,0,us(O,rs),H,k[0],k[1],k[2],k[3],D,2,0,k[4]]}),f.grid(I.length,2,(L,N)=>{let{s:O}=I[L],V=y(O),D=C*V,H=C>0?N:1-N;t.at(O,v);let k=l(O);return[v.x+v.rx*D-o,v.y+(H?.15:0),v.z+v.rz*D-a,-C*v.rx,0,-C*v.rz,us(O,rs),D,k[0],k[1],k[2],k[3],V,3,0,k[4]]})}yield,yield*this.placePoles(e,n,s,c,u,d,S,h,g,y);{let w=Math.ceil((n-rr)/sr),R=ho(w);R<s&&Oa(R)&&(yield*this.placeCrossing(u,f,R,d,g,y,S,T,o,a));let P=Math.ceil((n-fo)/or),I=Pf(P);I<s&&If(I)&&(yield*this.placeRiver(u,f,I,d,g,y,S,T,o,a,c,m));let C=xi(n+zt/2);C&&C.s+on>n&&C.s-on<s&&(yield*this.placeTunnel(u,f,C,n,s,d,x,S,y,o,a,c))}yield;for(let w=n;w<s;w+=4){let R=Jt(w);(R==="coast"&&It(w).coast>.45||R==="mountain"&&It(w).mountain>.45)&&!Bi(w+2,on+4)&&this.guardrail(u,w,Math.min(w+4,s),h,g,y)}yield*this.placeCity(u,c,n,s,d,x,g,y,T,S,f,o,a),yield*this.placeSakura(u,c,n,s,d,x,g,y,S),this.placeCoast(u,c,n,s,d,x,g,y,S,p,h),yield,yield*this.placeCountry(u,c,n,s,d,x,g,y,S),yield*this.placeMountain(u,c,n,s,d,x,g,y,S),yield*this.placeSnow(u,c,n,s,d,x,g,y,S),yield*this.placeVerge(u,c,n,s,d,S,y,e,o,a),yield;let E=new en,M=(w,R,P,I,C=0,L)=>{if(!w)return null;let N=new dt(w,R);return N.castShadow=P,N.receiveShadow=I,N.renderOrder=C,L&&(N.userData.detail=L),E.add(N),N},b=new Set;for(let w of[n,n+20,n+40,s]){let R=uo(w);b.add(R.a),R.t>0&&b.add(R.b)}M(f.build(),Va([...b]),!1,!0),yield,M(u.atlas.build(),this.M.atlas,!0,!0),yield;{let w=M(u.color.build(),this.M.color,!0,!0);w&&(w.customDepthMaterial=Mu)}if(yield,M(u.foliage.build(),this.M.foliage,!0,!0),M(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,M(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),M(u.sig.build(),this.M.sig,!1,!1,0,"small"),M(u.sodium.build(),this.M.sodium,!1,!1),M(u.decal.build(),this.M.decal,!1,!0,1,"small"),M(u.pool.build(),this.M.pool,!1,!1,2,"light"),p.length){let w=new vt,R=[],P=[],I=[];p.forEach((C,L)=>{for(let N of C)R.push(N[0],N[1],N[2]),P.push(N[3],N[4]);if(L>0){let N=(L-1)*2;I.push(N,N+2,N+1,N+1,N+2,N+3)}}),w.setAttribute("position",new je(R,3)),w.setAttribute("su",new je(P,2)),w.setIndex(I),w.computeBoundingSphere(),M(w,this.foamMat,!1,!1,1)}for(let w of m)M(w,this.riverMat,!1,!0);return E.position.set(o-this.origin.x,0,a-this.origin.z),{group:E,ox:o,oz:a,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*jf+6,n=Jt(t);if(n==="sakura"||hs(t,6)||Qn(t,34)||Bi(t,on+12))return null;let s=An(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,a,c,u,f){let p=Math.ceil((t-6)/jf),m=Math.floor((n-6-.001)/jf);for(let v=p;v<=m;v++){let _=this.poleSpec(v);if(!_)continue;let S=_.z==="city"?u(_.s)+.15:a(_.s,_.u),l=o(_.s,_.u,S),h=Kt(Math.floor(Wn(v,31)*4294967295)),d=Vf(r,l,h,{trans:h()<.45});_.z==="city"&&v%2===0&&em(r,l,-.11),v%2&&(yield);let x=this.poleSpec(v+1);if(x){let g=x.z==="city"?u(x.s)+.15:a(x.s,x.u),y=Qp(o(x.s,x.u,g));r.color.setM(new nt);let T=[];for(let E=0;E<d.length;E++){let M=d[E],b=y[E],w=.35+h()*.4+(E>=7?.3:0);T.push(w),r.color.wire([M.x,M.y,M.z],[b.x,b.y,b.z],w,E>=7?.022:.015,qa,10)}if(_.z!=="coast"&&h()<.38){let E=Math.floor(h()*4),M=d[E],b=y[E],w=1+Math.floor(h()*4),R=.18+h()*.5;for(let P=0;P<w;P++){let I=Math.min(.92,R+P*(.018+h()*.025)),C=M.x+(b.x-M.x)*I,L=M.z+(b.z-M.z)*I,N=M.y+(b.y-M.y)*I-T[E]*4*I*(1-I);r.color.box(C-.07,N+.015,L-.07,C+.07,N+.19,L+.07,Pm),r.color.box(C-.045,N+.19,L-.045,C+.045,N+.27,L+.045,Pm)}}}if(_.z==="city"){r.color.setM(new nt);let g=1+Math.floor(h()*3);for(let y=0;y<g;y++){let T=d[7+y%2],E=(h()-.5)*14,M=f(_.s+E),b=h()<.55,w=b?-(M+3.15):M+3.15,R=c(_.s+E,w,u(_.s+E)+5.2+h()*2.5);r.color.wire([T.x,T.y,T.z],R,.25+h()*.4,.012,qa,8)}}}}*intersection(e,t,n,s,r,o,a,c,u,f,p){let m=this.path.at(n,{}),v=o(n),_=a(n),S=c(n)||3,l=n-.5,h=It(n),d=[h.city,h.sakura,h.coast,h.country],x=(y,T,E)=>[m.x+m.fx*(y-.5)+m.rx*T-f,E,m.z+m.fz*(y-.5)+m.rz*T-p],g=_+S+.15;for(let y of[-1,1]){let T=y*(_+S),E=y*80;u.grid(21,2,(R,P)=>{let I=T+(E-T)*R/20,C=(P?-3:3)*y,L=x(C,I,v+.165);return[L[0],L[1],L[2],0,1,0,C*y,I,d[0],d[1],d[2],d[3],_,10]});{let R=y*(_+S+3.2),P=-y*1.35,I=1.15,C=.42,L=(N,O)=>x(P+y*N,R-y*O,v+.18);e.decal.setM(new nt),e.decal.quad(L(-I,-C),L(I,-C),L(I,C),L(-I,C),[1,1,1],vo("tomare"))}for(let R of[-1,1]){let P=g+15+t()*3;for(;P<52;){let I=t.range(5.5,8.5),C=y*(P+I/2),L=t(),N=r(l+R*3.3,C,v+.14,R>0?Math.PI/2:-Math.PI/2,!1);cs(e,N,t,{type:L<.5?"house":"shop",w:I,d:t.range(7,10),floors:L<.5?2:t.int(2,3),tint:t.pick(ls),litP:.45,fence:0}),P+=I+t.range(.2,1.2),yield}yield}let M=[30,54].map(R=>r(l+2.8,y*R,v+.15,-Math.PI/2,!1)),b=Kt(Math.floor(Wn(s,y>0?71:73)*4294967295)),w=M.map(R=>Vf(e,R,b,{trans:b()<.4}));e.color.setM(new nt);for(let R=0;R<7;R++){let P=w[0][R],I=w[1][R];e.color.wire([P.x,P.y,P.z],[I.x,I.y,I.z],.3+b()*.4,.014,qa,10)}}$f(e,r(n-9,-(_+.55),v+.15,0,!0),1,_+.55-1.6),$f(e,r(n+8,_+.55,v+.15,0,!0),1,_+.55-1.6),s%3===1&&vm(e,r(n+15,0,v,0,!1),_+S+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,o,a,c,u,f){let p=this.path.at(n,{}),m=p.y,v=o(n),_=c(n),S=v+_+.2,l=150,h=m+.18,d=It(n),x=[d.city,d.sakura,d.coast,d.country],g=(L,N,O)=>[p.x+p.fx*L+p.rx*N-u,O,p.z+p.fz*L+p.rz*N-f],y=[7.6,4.7,-4.7,-7.6];for(let[L,N]of[[-l,-S],[S,l]])t.grid(25,y.length,(V,D)=>{let H=L+(N-L)*V/24,k=y[D],Q=Math.abs(k)<5?h:Math.min(h-.05,a(n+k,H)-.03),qe=g(k,H,Q);return[qe[0],qe[1],qe[2],0,1,0,k,H,x[0],x[1],x[2],x[3],v,5]});let T=(L,N,O)=>t.grid(2,2,(V,D)=>{let H=V?N:L,k=D?-3.3:3.3,$=g(k,H,O);return[$[0],$[1],$[2],0,1,0,k,H,x[0],x[1],x[2],x[3],v,6]});T(-v,v,m+.03),_>0&&(T(-S,-v,m+.165),T(v,S,m+.165));let E=(L,N,O,V)=>t.grid(2,2,(D,H)=>{let k=D?V:O,$=H?N:L,Q=g($,k,m+.025);return[Q[0],Q[1],Q[2],0,1,0,$,k,x[0],x[1],x[2],x[3],v,7]});E(-7.15,-7.6,-v+.3,-.12),E(7.6,7.15,.12,v-.3),yield;let M=s(n,0,m,-Math.PI/2,!1),b=e.color;b.setM(M);let w=[.42,.4,.38],R=[.3,.29,.28],P=[.55,.57,.6];for(let L of[-2,2])for(let N of[-.5335,.5335]){let O=-(L+N);for(let[V,D]of[[-l,-S],[S,l]])b.box(V,.26,O-.035,D,.34,O+.035,w);b.box(-S,0,O-.035,S,.04,O+.035,R)}let I=[-146,-104,-64,-26,26,64,104,146];for(let L of I){for(let N of[-4.95,4.95])b.box(L-.12,.18,N-.12,L+.12,7.4,N+.12,P);b.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,P);for(let N of[-2,2])b.box(L-.04,6.3,-N-.04,L+.04,6.95,-N+.04,P)}for(let L of[-2,2])for(let N=0;N<I.length-1;N++)b.wire([I[N],5.35,-L],[I[N+1],5.35,-L],.05,.011,qa,6),b.wire([I[N],6.4,-L],[I[N+1],6.4,-L],.45,.011,qa,8);yield;let C=Math.round((n-rr)/sr);if(d.country>.9&&Wn(C,17)<.7){let L=Wn(C,19)<.5?-1:1,N=L>0?v+9:-(v+9+46),O=L>0?v+9+46:-(v+9);xm(e,M,N,O,L*(v+9),Math.abs(C)%4,Kt(Math.floor(Wn(C,23)*4294967295))),b.setM(M)}yield;for(let L of bu(this.path,n)){let N=new nt().makeRotationY(L.yaw);N.setPosition(L.x-u,L.y,L.z-f),Mm(e,N)}Ns(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85),Ns(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(_>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,a,c,u,f,p,m){let v=this.path.at(n,{}),_=v.y,S=o(n),l=c(n),h=It(n),d=[h.city,h.sakura,h.coast,h.country],x=h.sakura>.5,g=222,y=S+l+.5,T=_-za,E=(C,L,N)=>[v.x+v.fx*C+v.rx*L-u,N,v.z+v.fz*C+v.rz*L-f];{let C=[],L=[],N=[];for(let D=0;D<=74;D++){let H=-g+2*g*D/74;for(let k of[14.3,-14.3]){let $=E(k,H,T);C.push($[0],$[1],$[2]),L.push(k,H)}if(D>0){let k=(D-1)*2;N.push(k,k+1,k+2,k+1,k+3,k+2)}}let V=new vt;V.setAttribute("position",new je(C,3)),V.setAttribute("su",new je(L,2)),V.setIndex(N),V.computeBoundingSphere(),m.push(V)}for(let[C,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[N,O]of[[-g,-(S+3.4)],[S+3.4,g]])t.grid(41,2,(V,D)=>{let H=N+(O-N)*V/40,k=D?L:C,$=E(k,H,_+.38);return[$[0],$[1],$[2],0,1,0,k,H,d[0],d[1],d[2],d[3],S,9,1]});yield;let M=s(n,0,_,0,!1),b=e.color,w=[.74,.73,.7],R=x?[.78,.2,.15]:[.55,.72,.64];b.setM(M),b.box(-24.5,-1,-y,24.5,-.03,y,w,null,{noBottom:!1});for(let C of[-1,1])b.box(-24.5,-1.3,C>0?y-.35:-y,24.5,-.95,C>0?y:-y+.35,[.62,.61,.58]);for(let C of[-8,8])b.box(C-.7,-za-1.4,-y+.6,C+.7,-1,y-.6,w);for(let C of[-25.7,25.7])b.box(C-1.2,-za+.4,-y-.4,C+1.2,-.05,y+.4,w);for(let C of[-24.5,24.5])b.box(C-.16,.004,-S,C+.16,.016,S,[.33,.32,.31]),b.box(C-.02,.016,-S,C+.02,.02,S,[.2,.19,.19]);let P=l>0?.15:0;for(let C of[-1,1]){let L=C*(y-.14);for(let N=-24;N<=24.01;N+=2)b.box(N-.06,P,L-.06,N+.06,P+1,L+.06,R);b.box(-24,P+.95,L-.08,24,P+1.08,L+.08,R),b.box(-24,P+.48,L-.03,24,P+.54,L+.03,R),b.box(-24,P+.06,L-.03,24,P+.12,L+.03,R)}let I="bridge"+Math.abs(Math.round(n/or))%4;for(let C of[-25,25])for(let L of[-1,1]){let N=L*(y-.1),O=[.7,.69,.65];b.box(C-.32,P,N-.32,C+.32,P+1.45,N+.32,O),b.box(C-.38,P+1.45,N-.38,C+.38,P+1.58,N+.38,[.62,.61,.57]),e.atlas.setM(M);let V=(C<0?-1:1)*.325,D=I;C<0?e.atlas.quad([C-.325,P+.3,N-.22],[C-.325,P+.3,N+.22],[C-.325,P+1.3,N+.22],[C-.325,P+1.3,N-.22],[1,1,1],vo(D)):e.atlas.quad([C+.325,P+.3,N+.22],[C+.325,P+.3,N-.22],[C+.325,P+1.3,N-.22],[C+.325,P+1.3,N+.22],[1,1,1],vo(D)),b.setM(M)}Ga(e,s(n-14,-(y-.45),_+P,0,!0)),Ga(e,s(n+14,y-.45,_+P,0,!0)),yield;{e.atlas.setM(new nt);let C=vo("gogan"),L=2.4,N=150;for(let O of[-1,1])for(let V=-N;V<N-.01;V+=L){let D=V+L,H=E(O*13.9,V,T-.12),k=E(O*13.9,D,T-.12),$=E(O*16.05,D,T+.72),Q=E(O*16.05,V,T+.72),qe=(k[1]-H[1])*(Q[2]-H[2])-(k[2]-H[2])*(Q[1]-H[1]),Be=(k[0]-H[0])*(Q[1]-H[1])-(k[1]-H[1])*(Q[0]-H[0]),Ne=E(0,(V+D)/2,T),q=qe*(Ne[0]-H[0])+Be*(Ne[2]-H[2])>0,j={u0:C.u0,u1:C.u1,v0:C.v0,v1:C.v1};q?e.atlas.quad(H,k,$,Q,[1,1,1],j):e.atlas.quad(k,H,Q,$,[1,1,1],{u0:C.u1,u1:C.u0,v0:C.v0,v1:C.v1})}for(let O of[-1,1])for(let V of[-1,1])for(let D=14+p()*3;D<125;D+=p.range(2.4,5)){if(p()<.35)continue;let H=O*(16.2+p()*1.1),k=V*D,$=1+(p()<.4?1:0);for(let Q=0;Q<$;Q++){let qe=E(H+O*p()*.6,k+(p()-.5)*.9,T+.7),Be=new nt().makeRotationY(p()*6.28);Be.setPosition(qe[0],qe[1],qe[2]),Zf(e,Be,p,"grass",p.range(1.9,2.8))}}}yield;for(let C of[-18,18])for(let L of[-1,1]){yield;for(let N=11+p()*4;N<(x?125:170);N+=x?p.range(8.5,11):p.range(18,34)){let O=n+C+(p()-.5)*1.5,V=L*N;Hn(e,s(O,V,a(O,V),p()*6,!1),x?"sakura":"broad",p,x?p.range(1,1.25):p.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,a,c,u,f,p,m){let v=this.path.at(n.s,{}),_=v.y,S=u(n.s),l=S+1.4,h=It(n.s),d=[h.city,h.sakura,h.coast,h.country],x=o(n.s,0,_,0,!1),g=e.color,y=Math.max(s,n.s-cn)-n.s,T=Math.min(r,n.s+cn)-n.s;if(T>y+.01){let D=Math.max(2,Math.ceil((T-y)/3)+1),H=[-(S+1.5),-S,-S*.5,0,S*.5,S,S+1.5];t.gridN(D,H.length,(j,ye)=>{let Me=y+(T-y)*j/(D-1),Ee=n.s+Me,ze=H[ye],Ke=_+xu(Me,ze);return[v.x+v.fx*Me+v.rx*ze-f,Ke,v.z+v.fz*Me+v.rz*ze-p,0,1,0,us(Ee,rs),ze,d[0],d[1],d[2],d[3],S,0,-1]});let k=[[-S,0],[-S,.2],[-l,.2],[-l,3.2]];for(let j=1;j<12;j++){let ye=Math.PI*(1-j/12);k.push([l*Math.cos(ye),3.2+3*Math.sin(ye)])}k.push([l,3.2],[l,.2],[S,.2],[S,0]);let $=[.86,.82,.72],Q=[.44,.45,.47],qe=[.62,.61,.58],Be=[];for(let j=y;j<T-.01;j+=6)Be.push(j);Be.push(T),g.setM(x);for(let j=0;j<Be.length-1;j++)for(let ye=0;ye<k.length-1;ye++){let[Me,Ee]=k[ye],[ze,Ke]=k[ye+1],We=Math.max(Ee,Ke)<=.21?qe:Math.abs(Me)>l-.01&&Math.abs(ze)>l-.01?$:Q;g.quad([Be[j],Ee,Me],[Be[j+1],Ee,Me],[Be[j+1],Ke,ze],[Be[j],Ke,ze],We)}e.sodium.setM(x),e.sig.setM(x);let Ne=l*Math.cos(Math.PI/6)-.12,q=3.2+3*Math.sin(Math.PI/6)-.08;for(let j=Math.ceil((y+cn-3)/6)*6+3-cn;j<T;j+=6)for(let ye of[-1,1])e.sodium.box(j-.45,q-.07,ye*Ne-.13,j+.45,q+.07,ye*Ne+.13,null),Ds(e,x,j,q-.1,ye*Ne,1);for(let j=Math.ceil((y+cn)/24)*24-cn;j<T;j+=24)e.sig.box(j-.3,.95,-l+.01,j+.3,1.2,-l+.06,null);for(let j=Math.ceil((y+cn-30)/60)*60+30-cn;j<T;j+=60)for(let ye of[-1.15,1.15])g.box(j-1.1,5.2,ye-.36,j+1.1,5.78,ye+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),g.box(j-.08,5.78,ye-.05,j+.08,6.15,ye+.05,[.4,.4,.42]);yield}let E=(D,H)=>{let k=Math.sin(D*12.9898+H*78.233+n.k*37.719)*43758.5453;return k-Math.floor(k)},M=(D,H,k)=>[D[0]+(H[0]-D[0])*k,D[1]+(H[1]-D[1])*k,D[2]+(H[2]-D[2])*k],b=[.5,.5,.47],w=[.55,.53,.47],R=[.6,.6,.57],P=[.58,.58,.55],I=[.42,.42,.4],C=(D,H)=>{let k=E(D,H);return L?M([.26,.29,.08],[.42,.3,.09],k):M([.22,.29,.08],[.36,.36,.12],k)},L=h.mountain>.5,N=l+2.6,O=2.6;for(let D of[-1,1]){let H=n.s+D*cn,k=D*(cn+.08);if(H<s||H>=r)continue;let $=[];for(let te of Rm)te>=1.44&&$.push(S+te,-(S+te));for(let te of Cm)te>S+3.5&&te<S+21&&$.push(te,-te);for(let te=0;te<=24;te++)$.push(-l+2*l*te/24);$.push(-l-.01,l+.01,-N,N),$.sort((te,U)=>te-U);let Q=te=>3.2+3*Math.sqrt(Math.max(0,1-(te/l)**2)),qe=te=>Math.max(c(H-D*.03,te)-_,xu(D*(cn-.03),te)),Be=te=>Math.abs(te)<=l+1e-6?Q(te):c(H+D*.03,te)-_,Ne=8.4;for(let te of $)Math.abs(te)<=N&&(Ne=Math.min(Ne,qe(te)-.4));let q=Ne>6.6;g.setM(x);let j=D,ye=(te,U,A,G,Z,J,he,xe)=>{let ae=[k,A,te],fe=[k,G,U],W=[k,J,U],Ge=[k,Z,te],Pe=D<0?[ae,fe,W,Ge]:[fe,ae,Ge,W],De=D<0?[he,he,xe,xe]:[he,he,xe,xe];for(let Oe of[0,1,2,0,2,3])g.vtx(Pe[Oe][0],Pe[Oe][1],Pe[Oe][2],j,0,0,0,0,De[Oe])},Me=(te,U,A)=>te+(U-te)*A;for(let te=0;te<$.length-1;te++){let U=$[te],A=$[te+1];if(A-U<1e-4)continue;let G=qe(U),Z=qe(A),J=Be(U),he=Be(A);if(G-J<.01&&Z-he<.01)continue;let xe=(U+A)/2,ae=q&&Math.abs(xe)<N,fe=J,W=he;if(ae){let Oe=M(b,[.46,.46,.44],E(Math.floor(xe/2.4),3.1)),Ce=.8+2.6*E(Math.floor(xe/.8),7.7),Ue=M(Oe,[.27,.27,.26],.35+.3*E(Math.floor(xe/.8),9.9)),X=Math.min(Ne,G),_e=Math.min(Ne,Z),pe=Math.max(J,X-Ce),Le=Math.max(he,_e-Ce);if(Math.abs(xe)>l){let ke=Math.min(pe,J+.9),ve=Math.min(Le,he+.9);ye(U,A,J,he,ke,ve,M(Oe,[.25,.29,.18],.45),Oe),ye(U,A,ke,ve,pe,Le,Oe,Oe)}else ye(U,A,J,he,pe,Le,Oe,Oe);if(ye(U,A,pe,Le,X,_e,Oe,Ue),fe=X,W=_e,G-X<.01&&Z-_e<.01)continue}let Ge=Math.floor(xe/O),Pe=fe,De=W;for(let Oe=Math.floor(Math.min(Pe,De)/O)+1;Pe<G-.01||De<Z-.01;Oe++){let Ce=Oe*O,Ue=Math.min(G,Math.max(Pe,Ce)),X=Math.min(Z,Math.max(De,Ce)),_e=C(Ge,Oe);if(ye(U,A,Pe,De,Ue,X,M(_e,[.2,.22,.1],.25),_e),Pe=Ue,De=X,Oe>60)break}}let Ee=Math.min(k,k+D*.12),ze=Math.max(k,k+D*.12),Ke=te=>{for(let U=0;U<$.length-1;U++)if(te>=$[U]&&te<=$[U+1]&&$[U+1]>$[U]){let A=(te-$[U])/($[U+1]-$[U]);return[Me(Be($[U]),Be($[U+1]),A),Me(qe($[U]),qe($[U+1]),A)]}return null},We=$[0],lt=$[$.length-1];for(let te=Math.ceil(We/O)*O;te<lt;te+=O){let U=Ke(te);if(!U)continue;let A=(q&&Math.abs(te)<N?Math.max(Ne+.3,U[0]):U[0])+.05,G=U[1]-.05;G-A>.4&&!(Math.abs(te)<=l+.3&&!q)&&g.box(Ee,A,te-.14,ze,G,te+.14,w)}for(let te=1;te<60;te++){let U=te*O,A=null,G=()=>{A&&A[1]-A[0]>.3&&g.box(Ee,U-.14,A[0],ze,U+.14,A[1],w),A=null},Z=!1;for(let J=0;J<$.length-1;J++){let he=$[J],xe=$[J+1];if(xe-he<1e-4)continue;let ae=(he+xe)/2,fe=Math.max(Be(he),Be(xe),q&&Math.abs(ae)<N?Ne+.3:-1e9),W=Math.min(qe(he),qe(xe));U>fe+.2&&U<W-.2?(Z=!0,A?A[1]=xe:A=[he,xe]):G()}if(G(),!Z&&U>30)break}q&&g.box(Math.min(k,k+D*.32),Ne-.05,-N,Math.max(k,k+D*.32),Ne+.3,N,R);let ne=k+D*.32,be=te=>-l+2*l*te/24,Ae=te=>[be(te),Q(be(te))],ee=te=>[be(te)*1.12,Q(be(te))+.6];for(let te=0;te<24;te++){let[U,A]=Ae(te),[G,Z]=Ae(te+1),[J,he]=ee(te),[xe,ae]=ee(te+1);D<0?g.quad([ne,A,U],[ne,Z,G],[ne,ae,xe],[ne,he,J],P):g.quad([ne,Z,G],[ne,A,U],[ne,he,J],[ne,ae,xe],P),D<0?g.quad([k,A,U],[k,Z,G],[ne,Z,G],[ne,A,U],I):g.quad([k,Z,G],[k,A,U],[ne,A,U],[ne,Z,G],I),D<0?g.quad([k,ae,xe],[k,he,J],[ne,he,J],[ne,ae,xe],P):g.quad([k,he,J],[k,ae,xe],[ne,ae,xe],[ne,he,J],P)}for(let te of[-1,1])g.box(Math.min(k,ne),.2,te>0?l:-l*1.12,Math.max(k,ne),3.2,te>0?l*1.12:-l,P);e.atlas.setM(x);let se=1.9,le=7.05,oe=7.85,B=k+D*.03,ge=vo("tunnel"+(h.coast>.5?1:Math.abs(n.k)%2?2:0));D<0?e.atlas.quad([B,le,-se],[B,le,se],[B,oe,se],[B,oe,-se],[1,1,1],ge):e.atlas.quad([B,le,se],[B,le,-se],[B,oe,-se],[B,oe,se],[1,1,1],ge)}yield;let V=h.mountain>.5;for(let D=Math.max(s,n.s-on*.95)+m()*3;D<Math.min(r,n.s+on*.95);D+=m.range(4,8)){let H=Math.abs(D-n.s)>cn-4?17:4;for(let k of[-1,1]){let $=k*(S+m.range(H,50)),Q=m();Hn(e,a(D,$,-.3,m()*6,!1),V?Q<.5?"maple":Q<.8?"cedar":"ginkgo":Q<.65?"pine":"broad",m,m.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,a,c,u){let f=p=>It(p).snow;if(!(f(n)<.3&&f(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*20;m<s;m+=t.range(22,40)){if(f(m)<.6||t()<.5)continue;let v=p*t.range(18,90);cs(e,o(m,v,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(ls),litP:.62,fence:0,snow:!0});for(let _=0;_<2+t()*3;_++)Hn(e,o(m+t.range(-9,9),v+p*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let m=n+t()*5;m<s;m+=t.range(3,7))f(m)<.5||(t()<.32&&Hn(e,o(m,p*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Hn(e,o(m,p*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let p=Math.ceil(n/36)*36;p<s;p+=36){if(f(p)<.55)continue;let m=c(p);{let v=r(p,-(m+.95),a(p)+1.3),_=r(p+18,m+.95,a(p+18)+1.3);v.groundY=a(p),_.groundY=a(p+18),qf(e,v,1),qf(e,_,-1)}}}}*placeMountain(e,t,n,s,r,o,a,c,u){let f=p=>It(p).mountain;if(!(f(n)<.3&&f(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(4.5,8.5)){if(f(m)<.45||Bi(m,on+6))continue;let v=c(m),_=t();if(p>0){let S=_<.5?"maple":_<.72?"ginkgo":"cedar";Hn(e,o(m,v+t.range(17,70),-.25,t()*6,!1),S,t,t.range(.9,1.3))}else{let S=_<.55?"maple":_<.8?"cedar":"ginkgo";Hn(e,o(m,-(v+t.range(3.5,34)),-.25,t()*6,!1),S,t,t.range(.95,1.35))}}yield}for(let p=n+t()*4;p<s;p+=t.range(3,6)){if(f(p)<.5)continue;let m=t()<.7,v=-(c(p)+(m?t.range(108,205):t.range(36,100)));Hn(e,o(p,v,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new nt);for(let p=Math.ceil(n/10)*10;p<s;p+=10){if(f(p)<.5||Bi(p,on+4))continue;let m=c(p),v=r(p,-(m+.95),a(p));im(e,v)}for(let p=Math.ceil(n/14)*14;p<s;p+=14){if(f(p)<.6)continue;let m=this.path.curv(p);if(Math.abs(m)<1/230)continue;let v=c(p);m>0?Ns(e,r(p,v+.42,a(p)),"chev_l",-1,1.25,.58):Ns(e,r(p,-(v+1.15),a(p)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,a){let c=this.path,u={},f=Kt(Math.floor(Wn(t,1789)*4294967295)),p=lm(),m=Math.floor((n+zt/2)/600)*600+300,v=Math.floor((n+zt/2)/700)*700+120,_=Math.floor((n+zt/2)/380)*380+190,S=Wn(Math.round(_),5)<.5?-1:1;for(let l of[-1,1]){e.leaf.setM(dM);for(let h=n+f()*p;h<s;h+=p*f.range(.75,1.25)){if(Jt(h)!=="country"||hs(h,10)||Qn(h,31)||l<0&&(Math.abs(h-m)<2.9||h>v-1.3&&h<v+2.7)||l===S&&Math.abs(h-_)<1.6)continue;c.at(h,u);let d=a(h),x=l*(d+.95+(f()-.5)*.36),g=u.y+ar(h,x,u.y,d),y=(f()-.5)*.8,T=Math.cos(y)*l,E=Math.sin(y)*l;am(e,u.x+u.rx*x-r,g,u.z+u.rz*x-o,u.rx*T+u.fx*E,u.rz*T+u.fz*E,f,f.range(.85,1.15))}yield}}*placeVerge(e,t,n,s,r,o,a,c,u,f){yield*this.placeBanks(e,c,n,s,u,f,a);for(let p of[-1,1]){for(let m=n+t()*1.2;m<s;m+=t.range(.55,1.5)){if(hs(m,10)||Qn(m,31)||Bi(m,on+4))continue;let v=Jt(m),_=a(m),S,l,h=.22,d=1;if(v==="country")S=_+t.range(2.05,2.8),l=.25,h=.35;else if(v==="sakura")S=_+2.68+t()*1.3,l=.55,h=.3;else if(v==="coast"){if(p<0)continue;S=_+.95+t()*1.7,l=.75,h=.18}else{if(v==="snow")continue;if(v==="mountain")S=p<0?_+1+t()*.35:_+.25+t()*.2,l=p<0?.55:.18,h=.12,d=.85;else{if(Qf(m,5))continue;S=_+3.02+t()*.1,l=.1,h=.08,d=.65}}if(t()>l)continue;let x=p*S;Zf(e,r(m,x,o(m,x),t()*6.28,!1),t,t()<h?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new nt);let a=Math.max(1,Math.round((n-t)/2)),c=Te.rail,u=[.62,.64,.66],f=[.74,.76,.79],p=[.95,.55,.16];for(let m=0;m<a;m++){let v=t+(n-t)*m/a,_=t+(n-t)*(m+1)/a,S=-(o(v)+.95),l=-(o(_)+.95),h=r(v),d=r(_);for(let g=0;g<Jf.length-1;g++){let[y,T]=Jf[g],[E,M]=Jf[g+1];e.color.quad(s(v,S+T,h+y),s(_,l+T,d+y),s(_,l+M,d+E),s(v,S+M,h+E),c)}e.color.quad(s(_,l+.05,d+.5),s(v,S+.05,h+.5),s(v,S+.05,h+.84),s(_,l+.05,d+.84),u),e.color.noShadow=!0;let x=s(v,S-.04,h);if(e.color.cyl(x[0],h,x[2],.055,.055,.8,6,f,!1),Math.round(v/2)%2===0){let g=s(v,S+.035,h+.64),y=s(v+.09,S+.035,h+.64);e.color.quad(y,g,[g[0],g[1]+.07,g[2]],[y[0],y[1]+.07,y[2]],p)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,a,c,u,f,p,m,v){for(let l of[-1,1]){let h=n+t()*2;for(;h<s-2;){{let C=It(h);if(C.city<.62||C.mountain>.1){h+=4;continue}}{let C=Is(h+6);if(C&&h<C.s+8.5&&h+14>C.s-8.5){h=Math.max(h+1,C.s+8.5);continue}}let d=us(h,150);if(d>145.6||d<3.4){h+=1;continue}let x=c(h),g=u(h)||3,y=x+g+.15,T=t(),E=T<.7?"machiya":T<.75?"shop":T<.81?"apt":T<.83?"office":T<.88?"house":T<.92?"konbini":T<.96?"parking":"gap",M=E==="shop"?t.range(5,9):E==="machiya"?t.range(6,9.5):E==="apt"?t.range(10,16):E==="office"?t.range(10,14):E==="house"?t.range(7,9.5):E==="konbini"?t.range(12,14):E==="parking"?t.range(7,11):t.range(2,3.5);if(h+M>s){if(s-h<5||E==="konbini")break;M=s-h-.2}{let C=Math.ceil((h+4.4)/150)*150-4.4;if(h+M>C-.1){if(C-.1-h<4){h=C+7.9;continue}M=C-.1-h}}let b=h+M/2,w=a(b),R=t.pick(ls),P=.42,I=E==="machiya"&&t()<.42;if(E==="parking"){let C=r(b,l*(y+3),w+.15);t()<.8&&gm(e,Pu(C,0,0,.5,(t()-.5)*.1),t),e.color.setM(C),e.color.box(-M/2,0,5.5,M/2,1.6,5.7,Te.concrete)}else if(E!=="gap"){let C=r(b,l*y,w+.15),L={type:E,w:M,d:E==="apt"||E==="office"?t.range(10,14):t.range(8,12),floors:E==="shop"?t.int(2,4):E==="machiya"?t()<.7?2:3:E==="apt"?t.int(4,9):E==="office"?t.int(4,8):2,tint:I?zf[Math.floor(t()*zf.length)]:R,litP:P,plaster:I,fence:E==="house"&&t()<.5?1.2:0};if(cs(e,C,t,L),E!=="house"&&t()<.28&&Wf(e,r(b+(t()-.5)*(M-1.2),l*(y-.42),w+.15),t),(E==="shop"||E==="konbini"||E==="machiya")&&t()<.3)for(let N=0;N<1+t()*3;N++)tm(e,r(b-M/2+.8+N*.55,l*(y-.75),w+.15,Math.PI/2+.1),t);if(E==="house"&&t()<.6)for(let N=0;N<2+t()*3;N++)Xf(e,r(b+1+N*.5,l*(y-.3),w+.15),t);if(t()<.03)for(let N=0;N<3;N++)nm(e,r(b+N*.9,l*(x+.35),w))}h+=M+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(It(d).city<.7||It(d).mountain>.1||t()<.3||hs(d,18)||Qf(d,15))continue;let x=c(d),g=r(d,l*(x+3.2+t.range(14,20)),a(d)+.1);cs(e,g,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(ls),litP:.4})}if(It(n+30).city>.7&&It(n+30).mountain<.1&&t()<.65){let d=n+t()*zt;if(hs(d,24)||Qf(d,20))continue;let x=r(d,l*t.range(55,150),a(d));cs(e,x,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(ls),litP:.45})}}let _=Math.ceil(n/150),S=Math.floor((s-.01)/150);for(let l=_;l<=S;l++){let h=l*150;if(Jt(h)!=="city"||It(h).mountain>.1)continue;let d=c(h);yield*this.intersection(e,t,h,l,r,a,c,u,p,m,v),Ns(e,r(h-1,-(d+.4),a(h)+.15),"sign_blue",1),Ns(e,r(h-6,-(d+.4),a(h)+.15),"sign_stop",1,2.1,.75),Yf(e,r(h+7,d+.4,a(h)+.15),-1),l%3===0&&Ns(e,r(h+20,-(d+.4),a(h)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,o,a,c,u){for(let m of[-1,1]){for(let v=n+t()*4;v<s;v+=t.range(7.5,10)){if(It(v).sakura<.45||Qn(v,30))continue;let _=c(v);Hn(e,o(v,m*(_+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&Hn(e,o(v+3,m*(_+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let v=n+(m>0?0:12);v<s;v+=24){if(Jt(v)!=="sakura"||Qn(v,30))continue;let _=c(v);Ga(e,r(v,m*(_+2.25),a(v)+.15)),us(v,48)<24&&bm(e,r(v+6,m*(_+3),u(v+6,m*(_+3))))}for(let v=n+t()*15;v<s;v+=t.range(14,24)){if(Jt(v)!=="sakura"||t()<.35||Qn(v,45))continue;let _=c(v);cs(e,o(v,m*(_+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(ls),litP:.45,fence:t()<.6?1.4:0})}}let p=Math.floor((n+zt/2)/480)*480+240;p>=n&&p<s&&Jt(p)==="sakura"&&!Qn(p,60)&&Kf(e,r(p,0,a(p),0,!1),c(p)+1.6,6.4)}placeCoast(e,t,n,s,r,o,a,c,u,f,p){for(let _=0;_<=20;_++){let S=n+_/20*zt;if(It(S).coast<.85||Bi(S,on*1.25)){f.length&&f[f.length-1]!==null&&f.push(null);continue}let h=c(S),d=h+11,x=h+19,g=p(S,-d,Ps+.06),y=p(S,-x,Ps+.06);f.push([[g[0],g[1],g[2],us(S,rs),0],[y[0],y[1],y[2],us(S,rs),1]])}let m=f.indexOf(null);m>=0&&(f.length=m),f.length<2&&(f.length=0);for(let _=n+t()*6;_<s;_+=t.range(5,9)){if(Jt(_)!=="coast"||Bi(_,on+6))continue;let S=c(_);t()<.7&&Hn(e,o(_,S+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&Hn(e,o(_+2,-(S+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let _=n+4;_<s;_+=t.range(18,30)){if(Jt(_)!=="coast"||t()<.4||Bi(_,on*1.4))continue;let S=c(_),l=3+Math.floor(t()*5);for(let h=0;h<l;h++){let d=-(S+t.range(12,17)),x=_+t.range(-3,3);Tm(e,r(x,d,Math.max(u(x,d),Ps-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let _=n+12;_<s;_+=48){if(Jt(_)!=="coast"||Bi(_,on+4))continue;let S=c(_);Gf(e,o(_,S+1),t)}if(Jt(n+30)==="coast"&&t()<.5){let _=n+t()*zt,S=c(_);Bi(_,on+25)||cs(e,o(_,S+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(ls),litP:.5,fence:0})}if(Jt(n+30)==="coast"&&t()<.55){let _=n+t()*zt;wm(e,r(_,-(c(_)+t.range(45,220)),Ps-.25,t()*6,!1),t)}let v=Math.floor((n+zt/2)/1500)*1500+700;v>=n&&v<s&&Jt(v)==="coast"&&!Bi(v,on*1.6)&&Em(e,r(v,-(c(v)+75),Ps-1,0,!1))}*placeCountry(e,t,n,s,r,o,a,c,u){for(let _ of[-1,1]){yield;for(let S=n+t()*20;S<s;S+=t.range(20,40)){if(Jt(S)!=="country"||t()<.55||hs(S,16)||Qn(S,48))continue;let l=_*t.range(16,95),h=o(S,l);cs(e,h,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(ls),litP:.5,fence:0});for(let d=0;d<2+t()*3;d++){let x=l+_*t.range(6,14),g=S+t.range(-8,8);Hn(e,o(g,x,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let S=n+t()*8;S<s;S+=t.range(5,9)){if(Jt(S)!=="country"||hs(S,7)||Qn(S,36))continue;let l=_*t.range(140,210);Hn(e,o(S,l,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!hs(S+2,8)&&!Qn(S+2,34)&&Hn(e,o(S+2,_*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let f=Math.floor((n+zt/2)/600)*600+300;if(f>=n&&f<s&&Jt(f)==="country"&&!Qn(f,40)){let _=c(f);Sm(e,r(f,-(_+1.6),a(f)-.08),t)}let p=Math.floor((n+zt/2)/700)*700+120;if(p>=n&&p<s&&Jt(p)==="country"&&!Qn(p,40)){let _=c(p);Wf(e,r(p,-(_+.95),a(p)-.08),t),Gf(e,r(p+2,-(_+.8),a(p)-.08),t)}let m=Math.floor((n+zt/2)/900)*900+450;if(m>=n&&m<s&&Jt(m)==="country"&&!Qn(m,40)){let _=c(m);Am(e,o(m,_+5),t)}let v=Math.floor((n+zt/2)/380)*380+190;if(v>=n&&v<s&&Jt(v)==="country"&&!Qn(v,40)&&!hs(v,30)){let _=c(v),S=(Wn(Math.round(v),5)<.5?-1:1)*(_+2.75);ym(e,o(v,S,0))}for(let _=n;_<s;_+=30){if(Jt(_)!=="country")continue;let S=this.path.curv(_);if(Math.abs(S)>1/450&&t()<.5){let l=S>0?-1:1,h=c(_);Yf(e,o(_,l*(h+.75)),l>0?-1:1)}}}};var xo=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new Se(e):e)),ue={zenith:new Se,horizon:new Se,sunCol:new Se,sunI:1,hemiSky:new Se,hemiGround:new Se,hemiI:1,fog:new Se,cLit:new Se,cShade:new Se,cRim:new Se,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new z,moonDir:new z,lightDir:new z,sunEl:0};function Lm(i){let e=0;for(;e<xo.length-2&&xo[e+1][0]<=i;)e++;let t=xo[e],n=xo[e+1],s=pu(Wt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,a)=>a.copy(t[o]).lerp(n[o],s);r(1,ue.zenith),r(2,ue.horizon),r(3,ue.sunCol),ue.sunI=Nt(t[4],n[4],s),r(5,ue.hemiSky),r(6,ue.hemiGround),ue.hemiI=Nt(t[7],n[7],s),r(8,ue.fog),r(9,ue.cLit),r(10,ue.cShade),r(11,ue.cRim),ue.night=Nt(t[12],n[12],s),ue.warm=Nt(t[13],n[13],s),ue.sunEl=Dm(i,ue.sunDir,ue.moonDir,ue.lightDir)}function Dm(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Wt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var pM=new z,mM=new z;function nd(i,e){return Dm((i%1+1)%1,pM,mM,e),e}var Im={zenith:[new Se("#7b8594"),new Se("#141a28")],horizon:[new Se("#b5bcc6"),new Se("#283042")],fog:[new Se("#a8b0ba"),new Se("#232b3c")],hemiSky:[new Se("#aab3bf"),new Se("#3c4866")],hemiGround:[new Se("#8b8983"),new Se("#1e2030")],cLit:[new Se("#d0d5dc"),new Se("#2c3240")],cShade:[new Se("#7c8593"),new Se("#151922")]},td=new Se;function Nm(i,e){if(ue.overcast=i,ue.rain=e,ue.bright=(1-ue.night)*(1-ue.warm)*(1-i),i<=.001)return;let t=ue.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])td.copy(Im[n][0]).lerp(Im[n][1],t),ue[n].lerp(td,i*(n==="cLit"||n==="cShade"?.75:.85));ue.sunI*=1-.82*i,ue.warm*=1-i,ue.cRim.multiplyScalar(1-i),ue.sunCol.lerp(td.setRGB(.85,.87,.9),i*.6)}function Um(){let i=new pt({side:Ln,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ue.zenith},uHorizon:{value:ue.horizon},uSunDir:{value:ue.sunDir},uMoonDir:{value:ue.moonDir},uNoiseTex:$e.uNoiseTex,uSunCol:{value:ue.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new Se},uOvercast:{value:0},uDeckLit:{value:new Se},uDeckDark:{value:new Se},uMilky:{value:0},uMetA:{value:new z(0,1,0)},uMetB:{value:new z(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${_i}
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
      }`}),e=new dt(new va(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function gM(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let x=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+x*.5,(i()-.5)*.2,x])}let a=e?6:2,c=s*.82,u=.1+.09;for(let d=0;d<a;d++){let x=Math.max(1,Math.round(c/.11));for(let g=0;g<x;g++){let y=(x===1?0:g/(x-1)-.5)*c+(i()-.5)*.05+r*d;t.push([y,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,c*=e?.8:.66}let f=t.slice();for(let d of f){if(t.length>84)break;let x=1+Math.floor(i()*2);for(let g=0;g<x;g++){let y=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(y)*d[3]*.82,d[1]+Math.sin(y)*d[3]*.82,d[2]+.04,T])}}let p=t.slice(f.length);for(let d of f){if(d[1]<.1+.12||t.length>104)continue;let x=1+Math.floor(i()*2);for(let g=0;g<x;g++){let y=.3+i()*2.5,T=d[3]*(.3+i()*.4),E=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(y)*T,d[1]+Math.sin(y)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-E*.6,E])}}for(let d of p){if(t.length>124)break;let x=1+Math.floor(i()*2);for(let g=0;g<x;g++){let y=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(y)*d[3]*.85,d[1]+Math.sin(y)*d[3]*.85,d[2]+.02,T])}}let m=t.slice(0,128),v=1e9,_=-1e9,S=-1e9;for(let d of m)v=Math.min(v,d[0]-d[3]*1.12),_=Math.max(_,d[0]+d[3]*1.12),S=Math.max(S,d[1]+d[3]*1.12);let l=Math.min(1,.92/(_-v),(.95-.1)/(S-.1)),h=(v+_)/2;for(let d of m)d[0]=(d[0]-h)*l,d[1]=.1+(d[1]-.1)*l,d[3]*=l;return m}function Fm(i){let t={value:Array.from({length:128},()=>new mt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new pt({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:$e.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${_i}
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
      }`,depthTest:!1,depthWrite:!1,blending:Gn}),r=new Ot(1024,1024,{generateMipmaps:!0,minFilter:Dn,magFilter:Bt,depthBuffer:!1}),o=new pt({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:$e.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${_i}
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
      }`,depthTest:!1,depthWrite:!1,blending:Gn}),a=new dt(new tn(1,1),s),c=new Zs,u=new is;c.add(a);let f=new Ot(1024*2,1024*2,{generateMipmaps:!0,minFilter:Dn,magFilter:Bt}),p=i.getRenderTarget(),m=i.autoClear,v=Kt(99);i.setRenderTarget(f),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let _=[];for(let S=0;S<4;S++){let l=S%2===0,h=gM(v,l);h.forEach((d,x)=>t.value[x].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=h.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=S*13.7,a.material=s,i.setRenderTarget(r),i.render(c,u),a.material=o,f.viewport.set(S%2*1024,Math.floor(S/2)*1024,1024,1024),i.setRenderTarget(f),i.render(c,u),_.push({cell:[S%2,Math.floor(S/2)],tall:l})}return f.viewport.set(0,0,1024*2,1024*2),i.autoClear=m,i.setRenderTarget(p),s.dispose(),o.dispose(),r.dispose(),a.geometry.dispose(),{tex:f.texture,kinds:_,rt:f}}function Bm(i){let e=Kt(5),t=22,n=[],s=new tn(1,1);s.translate(0,.5,0);let r=new xn(new Float32Array(t*4),4),o=new xn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let a=new pt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new Se},uShade:{value:ue.cShade},uRim:{value:ue.cRim},uHaze:{value:ue.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new Pi(s,a,t);c.frustumCulled=!1,c.renderOrder=-5;for(let _=0;_<t;_++){let S=_<12,l=i.kinds[(_*3+(S?0:1))%i.kinds.length],h=S?l.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:_/t*Math.PI*2+e.range(-.15,.15),d:S?e.range(2600,3400):e.range(1300,2200),base:S?e.range(-60,60):e.range(260,700),size:h,cell:l.cell,haze:S?.45:.18})}let u=new nt,f=new mn,p=new z,m=new z,v=new z(0,1,0);return{group:c,update(_,S){let l=Math.atan2(ue.lightDir.x,ue.lightDir.z);for(let d of n)d.phi+=S*1.2/d.d;n.slice().sort((d,x)=>x.d-d.d).forEach((d,x)=>{p.set(_.x+Math.sin(d.phi)*d.d,_.y+d.base,_.z+Math.cos(d.phi)*d.d),f.setFromAxisAngle(v,d.phi+Math.PI),m.set(d.size,d.size,1),u.compose(p,f,m),c.setMatrixAt(x,u);let g=l-d.phi;g=Math.atan2(Math.sin(g),Math.cos(g));let y=Math.max(0,Math.min(1,(g+.35)/.7)),T=1-y*y*(3-2*y);r.setXYZW(x,d.cell[0],d.cell[1],T,d.haze),o.setX(x,.35+.9*Math.pow(Math.max(Math.cos(g),0),3)*(.4+ue.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.uniforms.uOpacity.value=(1-ue.night*.35)*(1-ue.overcast*.55)*(1-.85*ue.rain),a.uniforms.uLit.value.copy(ue.cLit).multiplyScalar(1+.35*ue.bright)}}}function Om(){let i=new en;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],a=[];for(let p=0;p<=360;p++){let m=p/360*Math.PI*2,v=Math.sin(m)*t.R,_=Math.cos(m)*t.R,S=mu(p/360*t.k*4,40+n*9),l=Math.pow(Math.max(0,S-.18)/.82,1.6),h=t.h*(.12+l);if(r.push(v,-60,_,v,-60+h,_),o.push(0,p/360,1,p/360),p<360){let d=p*2;a.push(d,d+1,d+2,d+1,d+3,d+2)}}let c=new vt;c.setAttribute("position",new je(r,3)),c.setAttribute("hf",new je(o,2)),c.setIndex(a);let u=new pt({side:wn,fog:!1,uniforms:{uCol:{value:new Se(t.col)},uHaze:{value:ue.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:$e.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${_i}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),f=new dt(c,u);f.frustumCulled=!1,f.renderOrder=999,i.add(f)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-ue.night))*(1-.35*ue.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var _o={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function zm(i){let e=i.get("weather"),t={mode:_o[e]?e:"auto",kind:_o[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return _o[e]&&(t.ov=_o[e][0],t.rain=_o[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let a=Math.random();t.kind=t.kind==="clear"?a<.5?"cloudy":a<.72?"rain":"clear":t.kind==="cloudy"?a<.5?"clear":a<.85?"rain":"cloudy":a<.55?"cloudy":"clear"}let[s,r]=_o[t.kind];t.ov+=Wt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=Wt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var yi={uHeadPos:{value:new z},uHeadDir:{value:new z(0,0,1)},uHeadI:{value:0},uLampW:{value:[new mt(0,-1e3,0,0),new mt(0,-1e3,0,0)]},uLampCol:{value:new Se(1,.8,.52)}},Du=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function km(){let e=new z(42,22,42),t=new tn(1,1),n=new Gi;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let a=0;a<2400*4;a++)s[a]=Math.random();n.setAttribute("aOff",new xn(s,4)),n.instanceCount=2400;let r=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new z},uAmt:{value:0},uBox:{value:e},uCol:{value:new Se(1,1,1)},...yi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Du}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new dt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,f){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*f,.33+.67*f,.42+.58*f)}}}function Hm(){let e=new z(46,24,46),t=new tn(1,1);t.translate(0,.5,0);let n=new Gi;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let a=0;a<2600;a++)s[a*4]=Math.random(),s[a*4+1]=Math.random(),s[a*4+2]=Math.random(),s[a*4+3]=Math.random();n.setAttribute("aOff",new xn(s,4)),n.instanceCount=2600;let r=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new z},uRain:{value:0},uBox:{value:e},uCol:{value:new Se(.8,.85,.95)},...yi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Du}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new dt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,f){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*f,.12+.83*f,.16+.84*f)}}}var Xn=64,id=[2.2,1.3,2.6],vM=[-2.4,.35,-1.6];function Vm(){let i=new Float32Array(Xn*3),e=new Float32Array(Xn*3),t=new Float32Array(Xn*4),n=new Float32Array(Xn),s=new Uint8Array(Xn),r=new Float32Array(Xn);for(let x=0;x<Xn;x++)t[x*4]=t[x*4+1]=1;let o=new tn(1,1),a=new Gi;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),a.instanceCount=0;let c=new Float32Array(Xn*4),u=new Float32Array(Xn*4),f={uP:{value:c},uC:{value:u},uNoiseTex:$e.uNoiseTex,uAmb:{value:new Se},uSun:{value:new Se},uTail:{value:new mt},uCam:{value:new z},...yi},p=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:f,vertexShader:`
      uniform vec4 uP[${Xn}], uC[${Xn}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${Du}
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
      }`}),m=new dt(a,p);m.frustumCulled=!1,m.renderOrder=4,m.visible=!1;let v=0,_=0,S=0,l=0,h=!1;function d(x,g,y,T,E,M,b,w,R,P,I){let C=v;v=(v+1)%Xn,i[C*3]=g,i[C*3+1]=y,i[C*3+2]=T,e[C*3]=E,e[C*3+1]=M,e[C*3+2]=b,t[C*4]=0,t[C*4+1]=w,t[C*4+2]=R,t[C*4+3]=P,n[C]=I,s[C]=x,r[C]=Math.random()}return{mesh:m,update(x,g,y,T,E,M,b,w,R,P,I){if(!I){if(h){for(let q=0;q<Xn;q++)t[q*4]=t[q*4+1];h=!1}m.visible=!1;return}let C=g.position,L=g.rotation.y,N=Math.cos(L),O=Math.sin(L),V=O*y,D=N*y,H=Math.min(1,Math.max(0,(y-2)/14)),k=E>.3?2:0,$=k?E:T;for(_+=24*$*H*x;_>=1;){_-=1;let q=(l^=1)?1:-1,j=q*.67,ye=-1.28-Math.random()*.2,Me=Math.random(),Ee=Math.random(),ze=1.6+1.6*Me,Ke=k?.5+.7*Ee:.9+1*Ee,We=q*(.3+.6*Math.random());d(k,C.x+j*N+ye*O,C.y+.12,C.z-j*O+ye*N,V*.55-O*ze+We*N,Ke,D*.55-N*ze-We*O,k?.45+.3*Me:.55+.35*Me,.2+.1*Ee,k?.7+.35*Ee:.8+.4*Ee,.5*(.5+.5*H)*Math.min(1,$*1.5))}for(S+=(5+4*H)*M*x;S>=1;){S-=1;let q=Math.random();d(1,C.x-.42*N-1.78*O,C.y+.26,C.z+.42*O-1.78*N,V*.5-O*.8,.25+.2*q,D*.5-N*.8,1.3+.6*q,.14,.8+.4*Math.random(),.32*Math.min(1,M*1.5))}let Q=0,qe=Math.exp(-id[0]*x),Be=Math.exp(-id[1]*x),Ne=Math.exp(-id[2]*x);for(let q=0;q<Xn;q++){let j=q*4;if(t[j]>=t[j+1])continue;let ye=t[j]+=x,Me=t[j+1];if(ye>=Me)continue;let Ee=s[q],ze=Ee===0?qe:Ee===1?Be:Ne,Ke=q*3,We=i[Ke]-P.x,lt=i[Ke+1]-P.y,ne=i[Ke+2]-P.z;if(We*We+lt*lt+ne*ne<20.25){t[j]=Me;continue}e[Ke]*=ze,e[Ke+1]=e[Ke+1]*ze+vM[Ee]*x,e[Ke+2]*=ze,i[Ke]+=e[Ke]*x,i[Ke+1]=Math.max(C.y+.05,i[Ke+1]+e[Ke+1]*x),i[Ke+2]+=e[Ke+2]*x;let be=ye/Me,Ae=Q*4;c[Ae]=i[Ke],c[Ae+1]=i[Ke+1],c[Ae+2]=i[Ke+2],c[Ae+3]=t[j+2]+(t[j+3]-t[j+2])*Math.sqrt(be),u[Ae]=n[q]*Math.min(1,be*6)*(1-be)*(1-be),u[Ae+1]=Ee,u[Ae+2]=r[q],Q++}h=Q>0,m.visible=h,a.instanceCount=Q,h&&(f.uAmb.value.copy(b),f.uSun.value.copy(w),f.uTail.value.copy(R),f.uCam.value.copy(P))},shift(x,g){for(let y=0;y<Xn;y++)i[y*3]-=x,i[y*3+2]-=g}}}var fr=24,xM=55,_M=12;function Gm(){let i=[],e=new Float32Array(fr*2*2),t=new Float32Array(fr*2*3);for(let u=0;u<fr;u++)if(e.set([u,-1,u,1],u*4),u<fr-1){let f=u*2;i.push(f,f+1,f+2,f+1,f+3,f+2)}let n=new vt;n.setAttribute("position",new Gt(t,3)),n.setAttribute("aI",new Gt(e,2)),n.setIndex(i);let s=new Float32Array(fr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new Se},uTime:{value:0},uNoiseTex:$e.uNoiseTex},o=new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${fr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${_i}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),a=new dt(n,o);a.frustumCulled=!1,a.renderOrder=1,a.visible=!1;let c={};return{mesh:a,update(u,f,p,m,v,_,S,l){if(a.visible=_>.01,!!a.visible){for(let h=0;h<fr;h++)u.at(f+xM+h*_M,c),s[h*4]=c.x-p,s[h*4+1]=c.y,s[h*4+2]=c.z-m,s[h*4+3]=c.h;r.uW.value=v*.85,r.uHot.value=_,r.uTime.value=S,r.uSky.value.copy(l)}}}}var yo=1.6;function Wm(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,a=t?16:14,c=[4,Math.round(s*.4),Math.round(s*.65),s].filter((I,C,L)=>!C||I>L[C-1]),u=[s,Math.round((s+r)/2),r],f=(I,C)=>{let L=new Gi;return L.setAttribute("position",new je(I,3)),L.setIndex(C),L},p=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],m=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],v=new Float32Array(Ls*4),_=new Float32Array(Ls),S={uG:{value:v},uGM:{value:_},uGP:{value:new mt(0,1/yo,3.1,0)},uGQ:{value:new mt(0,1.05,3,0)},uRingD:{value:new mt(s,r,0,0)}},l=[],h=(I,C,L)=>{let N={uRing:{value:new mt(0,0,L?2*n:n,L)},uRingC:{value:new mt(0,0,0,0)}},O=f(...L?m:p);O.instanceCount=0;let V=new dt(O,Bp(N,S));V.frustumCulled=!1,V.castShadow=!1,V.receiveShadow=!1,V.visible=!1,l.push({mesh:V,u:N,dA:I,dB:C,size:L?2*n:n,W:L?a:o,last:C===s||C===r})};for(let I=0;I<c.length-1;I++)h(c[I],c[I+1],0);for(let I=0;I<u.length-1;I++)h(u[I],u[I+1],1);let d=new Int32Array(64).fill(-2147483648),x=new Float32Array(64),g=new Uint8Array(64),y=I=>{let C=I&63;if(d[C]!==I){d[C]=I;let L=I*yo,N=Is(L),O=vi(L),V=It(L).country,D=Math.min(1,Math.max(0,(V-.97)/.025))*(N?Math.min(1,Math.max(0,(Math.abs(L-N.s)-13)/7)):1)*(O?Math.min(1,Math.max(0,(Math.abs(L-O.s)-38)/10)):1);x[C]=D>0?3+4*Math.round(D*15):0,g[C]=V>0?1:0}return C},T=I=>x[y(I)],E=I=>g[y(I)],M={},b=NaN,w=NaN,R=NaN,P=0;return{meshes:l.map(I=>I.mesh),hide(){for(let I=0;I<l.length;I++)l[I].mesh.visible=!1},warm(I){for(let C of l)C.mesh.visible=I,I&&(C.u.uRing.value.y=1,C.u.uRingC.value.set(1,1,C.W,0),C.mesh.geometry.instanceCount=2)},update(I,C,L,N,O,V,D){let H=Math.floor((C-3)/yo);if(!E(H)&&!E(H+Ls-1))P=0;else{if(H!==b||N!==w||O!==R){b=H,w=N,R=O,P=0;for(let k=0;k<Ls;k++)I.at((H+k)*yo,M),v[k*4]=M.x-N,v[k*4+1]=M.y,v[k*4+2]=M.z-O,v[k*4+3]=M.h,P|=_[k]=T(H+k)}S.uGP.value.set(H*yo,1/yo,V,C),S.uGQ.value.set(L,D,3,0)}for(let k=0;k<l.length;k++){let $=l[k];if(!P){$.mesh.visible=!1;continue}let Q=Math.floor((C+$.dA)/$.size),qe=Math.floor((C+$.dB)/$.size)+($.last?1:0),Be=D*$.dB+3,Ne=V+2.6,q=Math.min($.W,Math.max(0,Be-(Ne+L))),j=Math.min($.W,Math.max(0,Be-(Ne-L))),ye=q>0?Math.ceil(q/$.size)+1:0,Me=j>0?Math.ceil(j/$.size)+1:0;$.u.uRing.value.x=Q,$.u.uRing.value.y=qe-Q,$.u.uRingC.value.set(ye,Me,$.W,0),$.mesh.geometry.instanceCount=(qe-Q)*(ye+Me),$.mesh.visible=$.mesh.geometry.instanceCount>0}}}}var Mo=72;function yM(){let i=[],e=[],t=(s,r,o,a,c,u)=>{i.push(...s,...r,...o),e.push(a,c,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new vt;return n.setAttribute("position",new je(i,3)),n.setAttribute("aWing",new je(e,1)),n}function Xm(){let i=yM(),e=new xn(new Float32Array(Mo*3),3),t=new xn(new Float32Array(Mo*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new pt({side:wn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ue.fog},uFogD:{value:.002},uCam:{value:new z}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Pi(i,n,Mo);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},a=new nt,c=new mn,u=new $n(0,0,0,"YXZ"),f=new z,p=new z,m=()=>r.reduce((S,l)=>S+l.birds.length,0);function v(S,l,h,d){let x=S==="small"?6+Math.floor(Math.random()*7):S==="crow"?3+Math.floor(Math.random()*5):4;if(m()+x>Mo)return;let g=45+Math.random()*85,y=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,E=new z().copy(l).addScaledVector(h,g).addScaledVector(d,y-T*75);E.y=l.y+(S==="crow"?18+Math.random()*24:10+Math.random()*18);let M=S==="small"?11+Math.random()*4:8+Math.random()*3,b=new z().copy(d).multiplyScalar(T*M).addScaledVector(h,(Math.random()-.3)*M*.6),w=S==="small"?.8:1.45,R=Array.from({length:x},(P,I)=>({off:new z((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:S==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:S,c:E,vel:b,birds:R,size:w,life:60})}function _(S,l,h,d){if(r.some(y=>y.kind==="gull")||m()+4>Mo)return;let x=new z().copy(S).addScaledVector(l,70).addScaledVector(h,-d*45);x.y=S.y+18;let g=Array.from({length:4},(y,T)=>({off:new z,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:x,vel:new z,birds:g,size:1.25,life:1e9})}return{mesh:s,update(S,l,h,d,x,g,y,T,E){n.uniforms.uTime.value=l,n.uniforms.uCam.value.copy(h);let M=y>.35&&T<.3,b=ue.warm>.25&&ue.sunEl<.6&&y>.2;M&&(o.small-=S)<0&&(o.small=22+Math.random()*35,g.coast<.6&&v("small",h,d,x)),(b||M&&g.city+g.country>.6&&Math.random()<4e-4)&&(o.crow-=S)<0&&(o.crow=b?14+Math.random()*18:60,v("crow",h,d,x)),g.coast>.6&&M&&_(h,d,x,1);let w=[.1+.08*y,.11+.09*y,.15+.1*y],R=0;for(let P=r.length-1;P>=0;P--){let I=r[P];if(I.kind==="gull"?(I.c.lerp(f.copy(E).addScaledVector(d,60).addScaledVector(x,-42).setY(E.y+16),Math.min(1,S*.25)),(g.coast<.4||!M)&&(I.life=Math.min(I.life,8),I.c.y+=S*6)):I.c.addScaledVector(I.vel,S),I.life-=S,I.life<0||I.kind!=="gull"&&I.c.distanceTo(h)>300){r.splice(P,1);continue}for(let C of I.birds){if(R>=Mo)break;let L,N,O,V;I.kind==="gull"?(C.w+=S*(14/C.r),L=I.c.x+Math.cos(C.w)*C.r,O=I.c.z+Math.sin(C.w)*C.r,N=I.c.y+C.h+Math.sin(l*.4+C.ph)*2,V=Math.atan2(-Math.sin(C.w),Math.cos(C.w))):(L=I.c.x+C.off.x+Math.sin(l*.7+C.ph)*1.2,N=I.c.y+C.off.y+Math.sin(l*1.1+C.ph)*.6,O=I.c.z+C.off.z,V=Math.atan2(I.vel.x,I.vel.z)),u.set(0,V,Math.sin(l+C.ph)*.15),c.setFromEuler(u),p.setScalar(I.size),a.compose(f.set(L,N,O),c,p),s.setMatrixAt(R,a);let D=I.kind==="gull"?[.92*(.5+.5*y),.93*(.5+.5*y),.95*(.5+.5*y)]:I.kind==="crow"?[.05,.05,.07]:w;e.setXYZ(R,D[0],D[1],D[2]),t.setXY(R,C.fq,C.ph),R++}}s.count=R,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(S){n.uniforms.uFogD.value=S},shift(S,l){for(let h of r)h.c.x-=S,h.c.z-=l}}}function qm(){let i=new pt({fog:!1,uniforms:{uNoiseTex:$e.uNoiseTex,uTime:{value:0},uCam:{value:new z},uSunDir:{value:ue.lightDir},uSunCol:{value:ue.sunCol},uHorizon:{value:ue.horizon},uZenith:{value:ue.zenith},uFog:{value:ue.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${_i}
      float wh(vec2 p){ return vnoise(p * 0.18 + vec2(uTime * 0.05, uTime * 0.03)) * 0.6 + vnoise(p * 0.55 - vec2(uTime * 0.09, -uTime * 0.04)) * 0.4; }
      void main(){
        vec3 V = normalize(uCam - vW); float dist = length(uCam.xz - vW.xz);
        vec2 p = vW.xz;
        float e = 0.6, h0 = wh(p);
        vec3 N = normalize(vec3((h0 - wh(p + vec2(e, 0.0))) * 1.4, 1.0, (h0 - wh(p + vec2(0.0, e))) * 1.4));
        N = normalize(mix(N, vec3(0.0, 1.0, 0.0), smoothstep(80.0, 900.0, dist) * 0.8));
        float fres = pow(1.0 - max(dot(V, N), 0.0), 3.0);
        // on a bright day the sea is painted a deep, saturated blue (the reference art): bluer water that mirrors more of
        // the blue sky overhead and less of the pale horizon; dawn, dusk and night keep the old water and the horizon's glow
        vec3 deep = mix(mix(vec3(0.010, 0.10, 0.26), vec3(0.004, 0.11, 0.40), uBright), mix(vec3(0.03, 0.22, 0.40), vec3(0.02, 0.25, 0.62), uBright), 0.5 + 0.5 * vnoise(p * 0.02));
        vec3 sky = mix(uHorizon, uZenith, 0.25 + 0.45 * uBright);
        vec3 col = mix(deep, sky, clamp(fres * (1.15 - 0.3 * uBright) + 0.08 - 0.03 * uBright, 0.0, 1.0));
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
      }`}),e=new dt(new tn(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=Ps,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=ue.night,i.uniforms.uBright.value=ue.bright,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-ue.overcast*.85}}}function Ym(){return new pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new Se(1,1,1)},uNoiseTex:$e.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${_i}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function Zm(){return new pt({fog:!1,uniforms:{uNoiseTex:$e.uNoiseTex,uTime:{value:0},uSunDir:{value:ue.lightDir},uSunCol:{value:ue.sunCol},uHorizon:{value:ue.horizon},uZenith:{value:ue.zenith},uFog:{value:ue.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${_i}
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
      }`})}var Ya=new z;function Mi(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ya.copy(e),Ya[n]=0,Ya.normalize();let u=.5*o/(o+a),f=1-Ya.angleTo(i)/c;return Math.sign(Ya[t])===1?f*u:a/(o+a)+u+u*(1-f)}var Rn=class i extends qt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new z,u=new z,f=new z(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,m=this.attributes.normal.array,v=this.attributes.uv.array,_=p.length/6,S=new z,l=.5/o;for(let h=0,d=0;h<p.length;h+=3,d+=2)switch(c.fromArray(p,h),u.copy(c),u.x-=Math.sign(u.x)*l,u.y-=Math.sign(u.y)*l,u.z-=Math.sign(u.z)*l,u.normalize(),p[h+0]=f.x*Math.sign(c.x)+u.x*r,p[h+1]=f.y*Math.sign(c.y)+u.y*r,p[h+2]=f.z*Math.sign(c.z)+u.z*r,m[h+0]=u.x,m[h+1]=u.y,m[h+2]=u.z,Math.floor(h/_)){case 0:S.set(1,0,0),v[d+0]=Mi(S,u,"z","y",r,n),v[d+1]=1-Mi(S,u,"y","z",r,t);break;case 1:S.set(-1,0,0),v[d+0]=1-Mi(S,u,"z","y",r,n),v[d+1]=1-Mi(S,u,"y","z",r,t);break;case 2:S.set(0,1,0),v[d+0]=1-Mi(S,u,"x","z",r,e),v[d+1]=Mi(S,u,"z","x",r,n);break;case 3:S.set(0,-1,0),v[d+0]=1-Mi(S,u,"x","z",r,e),v[d+1]=1-Mi(S,u,"z","x",r,n);break;case 4:S.set(0,0,1),v[d+0]=1-Mi(S,u,"x","y",r,e),v[d+1]=1-Mi(S,u,"y","x",r,t);break;case 5:S.set(0,0,-1),v[d+0]=Mi(S,u,"x","y",r,e),v[d+1]=1-Mi(S,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function sd(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new vt,u=0;for(let f=0;f<i.length;++f){let p=i[f],m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let v in p.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(p.attributes[v]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let v in p.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[v]===void 0&&(o[v]=[]),o[v].push(p.morphAttributes[v])}if(e){let v;if(t)v=p.index.count;else if(p.attributes.position!==void 0)v=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,v,f),u+=v}}if(t){let f=0,p=[];for(let m=0;m<i.length;++m){let v=i[m].index;for(let _=0;_<v.count;++_)p.push(v.getX(_)+f);f+=i[m].attributes.position.count}c.setIndex(p)}for(let f in r){let p=$m(r[f]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,p)}for(let f in o){let p=o[f][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let m=0;m<p;++m){let v=[];for(let S=0;S<o[f].length;++S)v.push(o[f][S][m]);let _=$m(v);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(_)}}}return c}function $m(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let f=i[u];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}let o=new e(r),a=new Gt(o,t,n),c=0;for(let u=0;u<i.length;++u){let f=i[u];if(f.isInterleavedBufferAttribute){let p=c/t;for(let m=0,v=f.count;m<v;m++)for(let _=0;_<t;_++){let S=f.getComponent(m,_);a.setComponent(m+p,_,S)}}else o.set(f.array,c);c+=f.count*t}return s!==void 0&&(a.gpuType=s),a}function MM(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new Kn(i);return n.colorSpace=sn,n}var rd=4;function bM(){let t=document.createElement("canvas");t.width=128*rd,t.height=128;let n=t.getContext("2d"),s=(o,a,c,u,f)=>{n.beginPath(),n.moveTo(o+f,a),n.arcTo(o+c,a,o+c,a+u,f),n.arcTo(o+c,a+u,o,a+u,f),n.arcTo(o,a+u,o,a,f),n.arcTo(o,a,o+c,a,f),n.closePath(),n.fill()};for(let o=0;o<rd;o++){let a=o*128,c=n.createLinearGradient(0,0,0,128);c.addColorStop(0,"#9fbfe6"),c.addColorStop(.45,"#4a6690"),c.addColorStop(1,"#1d2638"),n.fillStyle=c,n.fillRect(a,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(a+14,84,30,50,9),s(a+84,84,30,50,9),n.fillRect(a+6,112,116,16),s(a+52,92,24,40,7)),o===2&&(s(a+62,66,44,70,12),n.fillRect(a+50,118,70,10)),o===3&&(s(a+70,78,40,60,11),n.fillRect(a+56,120,64,8)),n.save(),n.beginPath(),n.rect(a,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(a+40,0),n.lineTo(a+68,0),n.lineTo(a+20,128),n.lineTo(a-8,128),n.fill(),n.restore()}let r=new Kn(t);return r.colorSpace=sn,r}function Km(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/rd)}return i}function Jm(){let i=new en,e=new en,t=new en;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new mt,new mt],s=new Se(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=Uf(new ln({color:"#ffffff",vertexColors:!0,gradientMap:Ha}),.85,.06,"paint-l",r),a=(ne,be)=>Object.assign(new Se(ne),{gloss:be}),c=a("#9fd8c8",1),u=a("#eeece4",.6),f=a("#2a2c33",.35),p=a("#1b1c20",.04),m=a("#c8ccd2",.8),v=a("#d4d8de",1.3),_=(ne,be)=>{let Ae=ne.attributes.position.count,ee=new Float32Array(Ae*4);for(let se=0;se<Ae;se++)ee.set([be.r,be.g,be.b,be.gloss],se*4);return ne.setAttribute("color",new je(ee,4)),ne},S=Uf(new ln({color:"#ffffff",map:bM(),gradientMap:jn}),1.2,.08,"glass-l",r),l=new ln({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:jn}),h=new ln({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:jn}),d=new ln({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:jn}),x=new ln({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:jn}),g=new ln({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:jn}),y=new hn({map:MM()}),T=new Map,E=[],M=!1,b=new nt,w=new $n,R=new mn,P=new z(1,1,1),I=(ne,be,Ae,ee,se,le=0,oe=0,B=0)=>{let ge=ne.index?ne.toNonIndexed():ne;if(be.isColor&&(_(ge,be),be=o),w.set(le,oe,B),R.setFromEuler(w),b.compose(new z(Ae,ee,se),R,P),ge.applyMatrix4(b),M){E.push(ge);return}T.has(be)||T.set(be,[]),T.get(be).push(ge)},C=a("#16171b",0),L=a("#2b3134",.15),N=a("#b9bfc6",.9),O=a("#4d5258",.4),V=a("#9a1c22",.6),D=1.7,H=.745,k=.3,$=(ne,be,Ae)=>{let ee=Math.min(1,Math.max(0,(Ae-ne)/(be-ne)));return ee*ee*(3-2*ee)},Q=ne=>ne<.8?1.8:ne<1.22?1.8-.6*$(.8,1.22,ne):1.2-.1*((ne-1.22)/(D-1.22))**2,qe=ne=>1-.085*$(1.15,1.8,ne),Be=(ne,be)=>{let Ae=H-be,ee=k+be*.6,se=Q(ne)-be*(ne<0?.4:1),le=Math.max(.05,.1-be*.5),oe=Math.max(.06,(ne<.8?.17:.13)-be*.5),B=[[0,ee],[(Ae-le)*.5,ee],[Ae-le,ee]];for(let te=1;te<4;te++){let U=-Math.PI/2+te/8*Math.PI;B.push([Ae-le+le*Math.cos(U),ee+le+le*Math.sin(U)])}for(let te=0;te<=8;te++)B.push([Ae,ee+le+te/8*(se-oe-ee-le)]);for(let te=1;te<5;te++){let U=te/10*Math.PI;B.push([Ae-oe+oe*Math.cos(U),se-oe+oe*Math.sin(U)])}B.push([Ae-oe,se],[(Ae-oe)*.5,se],[0,se]);let ge=B.map(([te,U])=>[te*qe(U),U]);for(let te=B.length-2;te>0;te--)ge.push([-ge[te][0],ge[te][1]]);return ge};{let ne=[];for(let A=0;A<=6;A++){let G=A/6*Math.PI/2;ne.push([-D+.2*(1-Math.cos(G)),.2*(1-Math.sin(G))])}for(let A=-D+.2+.12;A<.78;A+=.13)ne.push([A,0]);for(let A=.8;A<1.225;A+=.06)ne.push([A,0]);for(let A of[1.3,1.39])ne.push([A,0]);for(let A=6;A>=0;A--){let G=A/6*Math.PI/2;ne.push([D-.22*(1-Math.cos(G)),.22*(1-Math.sin(G))])}let ee=[],se=[],le=ne.map(([A,G])=>Be(A,G)),oe=le[0].length;le.forEach((A,G)=>A.forEach(([Z,J])=>ee.push(Z,J,ne[G][0])));for(let A=0;A<le.length-1;A++)for(let G=0;G<oe;G++){let Z=A*oe+G,J=A*oe+(G+1)%oe,he=Z+oe,xe=J+oe;se.push(Z,J,he,J,xe,he)}for(let[A,G]of[[0,-1],[le.length-1,1]]){let Z=ee.length/3,J=le[A];ee.push(0,(J[0][1]+J[oe/2|0][1])/2,ne[A][0]);for(let he=0;he<oe;he++){let xe=A*oe+he,ae=A*oe+(he+1)%oe;G<0?se.push(Z,ae,xe):se.push(Z,xe,ae)}}let B=new vt;B.setAttribute("position",new je(ee,3)),B.setIndex(se),B.computeVertexNormals();{let A=B.attributes.normal,G=oe*10+12;if(A.getX(G)<0){for(let Z=0;Z<se.length;Z+=3){let J=se[Z+1];se[Z+1]=se[Z+2],se[Z+2]=J}B.setIndex(se),B.computeVertexNormals()}}B.setAttribute("uv",new je(new Float32Array(ee.length/3*2),2));let ge=B.toNonIndexed(),te=ge.attributes.position,U=new Float32Array(te.count*4);for(let A=0;A<te.count;A+=3){let G=(te.getY(A)+te.getY(A+1)+te.getY(A+2))/3,Z=(te.getZ(A)+te.getZ(A+1)+te.getZ(A+2))/3,J=G>1.665&&Z<.84&&Z>-1.52?u:c;for(let he=0;he<3;he++)U.set([J.r,J.g,J.b,J.gloss],(A+he)*4)}ge.setAttribute("color",new je(U,4)),I(ge,o,0,0,0)}I(new Rn(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let Ne=(ne,be,Ae,ee,se)=>{let le=new vt,oe=[],B=[],ge=[],te=[];for(let U=0;U<=Ae;U++)for(let A=0;A<=be;A++){let G=A/be,Z=U/Ae,J=ne(G,Z);oe.push(J[0]+J[3]*.004,J[1]+J[4]*.004,J[2]+J[5]*.004),B.push(J[3],J[4],J[5]),ge.push(G,Z)}for(let U=0;U<Ae;U++)for(let A=0;A<be;A++){let G=U*(be+1)+A,Z=G+1,J=G+be+1,he=J+1;te.push(G,Z,he,G,he,J)}le.setAttribute("position",new je(oe,3)),le.setAttribute("normal",new je(B,3)),le.setAttribute("uv",new je(ge,2)),le.setIndex(te);{let U=new z().fromArray(oe,0),A=new z().fromArray(oe,3),G=new z().fromArray(oe,(be+1)*3),Z=new z().fromArray(B,0);if(A.sub(U).cross(G.sub(U)).dot(Z)<0){for(let J=0;J<te.length;J+=3){let he=te[J+1];te[J+1]=te[J+2],te[J+2]=he}le.setIndex(te)}}return Km(le,ee,se)},q=ne=>{let Ae=H*(qe(ne+.01)-qe(ne-.01))/.02,ee=Math.hypot(1,Ae);return[1/ee,-Ae/ee]},j=ne=>{let be=.8,Ae=1.22;for(let ee=0;ee<24;ee++){let se=(be+Ae)/2;Q(se)>ne?be=se:Ae=se}return be};for(let ne of[-1,1]){let be=ne<0,Ae=(ee,se,le)=>I(Ne((oe,B)=>{let ge=1.21+B*.39,te=ne>0?se(ge)+(ee(ge)-se(ge))*oe:ee(ge)+(se(ge)-ee(ge))*oe,[U,A]=q(ge);return[ne*H*qe(ge),ge,te,ne*U,A,0]},1,6,le,!1),S,0,0,0);Ae(()=>.06,ee=>j(ee)-.07,2),Ae(()=>-.72,()=>-.08,3),Ae(()=>-1.42,()=>-.84,0),I(new qt(.012,.41,.07),f,ne*.731,1.405,-.01,0,0,-ne*.07),I(new qt(.014,.022,2.42),C,ne*.748,1.2,-.26);for(let[ee,se]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new qt(.008,1.17-se,.012),L,ne*.749,(se+1.17)/2,ee);I(new qt(.02,.028,.13),L,ne*.752,1.06,.06),I(new qt(.02,.028,.13),L,ne*.752,1.06,-.2),I(new qt(.01,.022,.62),L,ne*.749,1.155,-1.08);for(let ee of[1.12,-1.12])I(new $s(.345,18,0,Math.PI),C,ne*.749,.29,ee,0,ne*Math.PI/2,0),I(new xa(.35,.024,5,18,Math.PI),f,ne*.752,.29,ee,0,ne*Math.PI/2,0);I(new Rn(.1,.12,.2,2,.04),c,ne*.83,1.24,1.02),I(new qt(.07,.035,.05),f,ne*.775,1.2,1.03),I(new Rn(.16,.4,.05,3,.075),v,ne*.56,.95,-1.703),I(new Rn(.13,.37,.05,3,.062),l,ne*.56,.95,-1.716),I(new Rn(.036,.27,.02,2,.016),h,ne*.56,.95,-1.742),I(new Rn(.11,.06,.04,2,.02),x,ne*.56,.69,-1.707)}{let ne=new $r,be=.52,Ae=1.15,ee=1.66,se=.07;ne.moveTo(-be+se,Ae),ne.lineTo(be-se,Ae),ne.absarc(be-se,Ae+se,se,-Math.PI/2,0),ne.lineTo(be,ee-se),ne.absarc(be-se,ee-se,se,0,Math.PI/2),ne.lineTo(-be+se,ee),ne.absarc(-be+se,ee-se,se,Math.PI/2,Math.PI),ne.lineTo(-be,Ae+se),ne.absarc(-be+se,Ae+se,se,Math.PI,Math.PI*1.5);let le=new ga(ne,6),oe=le.attributes.position,B=le.attributes.uv;for(let ge=0;ge<oe.count;ge++){let te=oe.getX(ge),U=oe.getY(ge),A=(U-Ae)/(ee-Ae);B.setXY(ge,(te+be)/(2*be),A),oe.setX(ge,te*(1-.08*A))}I(Km(le,1),S,0,0,-D-.004,0,Math.PI,0)}I(new Rn(.36,.04,.03,2,.014),d,0,1.69,-1.712),I(Ne((ne,be)=>{let Ae=1.19-be*.36,ee=Q(Ae),se=.56-.07*be,le=.005,oe=(Q(Ae+le)-Q(Ae-le))/(2*le),B=Math.hypot(1,oe);return[(ne*2-1)*se,ee,Ae,0,1/B,-oe/B]},2,7,0,!1),S,0,0,0),I(new Rn(.46,.25,.012,2,.05),a("#86bdb0",.6),0,.73,-1.701),I(new tn(.34,.17),y,0,.72,-1.709,0,Math.PI,0),I(new Rn(.25,.034,.03,2,.013),v,0,.9,-1.708);for(let ne of[-1,1])I(new qt(.01,.56,.006),L,ne*.47,.85,-1.703);I(new qt(.95,.01,.006),L,0,.565,-1.703),I(new Rn(1.5,.2,.26,3,.08),c,0,.44,-1.6),I(new Rn(1.38,.08,.22,2,.03),f,0,.33,-1.61);for(let ne of[-1,1])I(new qt(.13,.035,.01),V,ne*.56,.44,-1.731);I(new mi(.036,.036,.12,12),v,.46,.29,-1.68,Math.PI/2,0,0),I(new mi(.024,.024,.124,10),C,.46,.29,-1.68,Math.PI/2,0,0);for(let ne of[-1,1])I(new Rn(.4,.26,.04,2,.06),f,ne*.42,.85,1.702),I(new mi(.105,.105,.03,16),g,ne*.46,.85,1.72,Math.PI/2,0,0),I(new mi(.055,.055,.03,12),g,ne*.3,.85,1.718,Math.PI/2,0,0),I(new Rn(.1,.06,.04,2,.015),x,ne*.52,.66,1.705),I(new qt(.46,.014,.014),C,ne*.25,1.215,1.2,-.3,ne*.12,0);I(new Rn(.36,.12,.03,2,.03),C,0,.84,1.704);for(let ne=0;ne<3;ne++)I(new qt(.32,.012,.012),L,0,.805+ne*.035,1.722);I(new Rn(1.52,.24,.22,2,.07),f,0,.44,1.62),I(new qt(.7,.07,.02),C,0,.4,1.732),I(new qt(.34,.17,.01),a("#f0cc38",.3),0,.62,1.733),I(new qt(.3,.05,.004),a("#2f5a2f",.1),0,.6,1.739),M=!0;for(let[ne,be]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new mi(.29,.29,.19,24),p,ne,.29,be,0,0,Math.PI/2),I(new mi(.195,.195,.194,20),N,ne,.29,be,0,0,Math.PI/2),I(new mi(.155,.155,.198,16),O,ne,.29,be,0,0,Math.PI/2);for(let Ae=0;Ae<5;Ae++){let ee=Ae/5*Math.PI*2+.3;I(new qt(.202,.03,.15),N,ne,.29-.085*Math.sin(ee),be+.085*Math.cos(ee),ee,0,0)}I(new mi(.045,.045,.206,10),m,ne,.29,be,0,0,Math.PI/2)}M=!1;for(let[ne,be]of T){let Ae=new dt(sd(be),ne);Ae.castShadow=ne!==S&&ne!==y&&ne!==d&&ne!==g&&ne!==h,Ae.receiveShadow=!0,t.add(Ae)}{let ne=new dt(sd(E),o);ne.castShadow=ne.receiveShadow=!0,i.add(ne)}{let Ae=document.createElement("canvas");Ae.width=48,Ae.height=96;let ee=Ae.getContext("2d"),se=ee.createImageData(48,96);for(let oe=0;oe<96;oe++)for(let B=0;B<48;B++){let ge=Math.max(0,Math.abs((B+.5)/48-.5)*2.1-.62),te=Math.max(0,Math.abs((oe+.5)/96-.5)*2.05-.78),U=Math.hypot(ge/.42,te/.24),A=Math.max(0,1-U),G=(oe*48+B)*4;se.data[G]=se.data[G+1]=se.data[G+2]=Math.round(255*A*A*(3-2*A)),se.data[G+3]=255}ee.putImageData(se,0,0);let le=new dt(new tn(2.2,4.1),new hn({color:0,alphaMap:new Kn(Ae),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));le.rotation.x=-Math.PI/2,le.position.y=.03,le.renderOrder=3,i.add(le)}let ye=new en;ye.position.set(.02,1.19,-1.716),t.add(ye);let Me=new qt(.52,.026,.02);Me.translate(.27,0,0);let Ee=new dt(_(Me,f),o);Ee.rotation.z=.18,ye.add(Ee);let ze=0,Ke=new Sa(16773328,0,70,.55,.65,1.2);Ke.position.set(0,.8,1.6),Ke.target.position.set(0,0,18),t.add(Ke,Ke.target);let We={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},lt=(ne,be)=>be*Math.tanh(ne/be);return{group:i,lamps:n,lampCol:s,head:Ke,update(ne,be,Ae,ee=0,se=null){if(se){let le=lt(-se.lat*.016,.045),oe=lt(-se.lon*.008,.03);We.rv+=((le-We.roll)*55-We.rv*8)*ne,We.roll+=We.rv*ne,We.pv+=((oe-We.pitch)*60-We.pv*9)*ne+se.kick,We.pitch+=We.pv*ne,We.yv+=((se.road-We.y)*85-We.yv*8)*ne+se.jolt,We.y+=We.yv*ne,e.rotation.set(We.pitch,0,We.roll),e.position.y=.35+We.y}if(We.br+=((se?se.brake:0)-We.br)*Math.min(1,ne*14),l.emissiveIntensity=.35+Ae*3.2+We.br*(1.7+Ae*2),d.emissiveIntensity=We.br*(2.4+Ae*1.6),h.emissiveIntensity=1+Ae*3+We.br*(2+Ae*2),ee>.15||ze%2.6>.01){ze+=ne;let le=ze%2.6/2.6,oe=ge=>ge*ge*(3-2*ge),B=le<.25?oe(le/.25):le<.5?oe(1-(le-.25)/.25):0;Ee.rotation.z=.18+B*2.5,ee<=.15&&le>=.5&&(ze=0)}Ke.intensity=Ae*60,g.emissiveIntensity=.15+Ae*2.6}}}var bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},SM=new Es(-1,1,1,-1,0,1),od=class extends vt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},TM=new od,Us=class{constructor(e){this._mesh=new dt(TM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,SM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var So=class extends li{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nr.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Us(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Za=class extends li{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Nu=class extends li{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Uu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new So(bo),this.copyPass.material.blending=Gn,this.timer=new Ta}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Za!==void 0&&(o instanceof Za?n=!0:o instanceof Nu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fu=class extends li{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Se}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var jm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var To=class i extends li{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,o,{type:vn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new Ot(r,o,{type:vn,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Ot(r,o,{type:vn,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=jm;this.highPassUniforms=nr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=nr.clone(bo.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:bo.vertexShader,fragmentShader:bo.fragmentShader,premultipliedAlpha:!0,blending:ss,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new hn,this._fsQuad=new Us(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,u=a+c;s.push((o*a+(o+1)*c)/u),r.push(u)}return new pt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};To.BlurDirectionX=new Ie(1,0);To.BlurDirectionY=new Ie(0,1);var ad=class extends li{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Ot(4,4,{type:vn,depthBuffer:!1,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),this.mat=new pt({uniforms:{tDiffuse:{value:null},uTexel:{value:new Ie(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new Us(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},EM={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Ie(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Ie(1/1280,1/720)},uLo:{value:new z(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function Qm(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Ie),a=new Ot(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:vn,samples:n}),c=new Uu(i,a);c.addPass(new Fu(e,t));let u=new ad;c.addPass(u);let f=new To(new Ie(o.x*r*.5,o.y*r*.5),.42,.55,.86);c.addPass(f);let p=new So(EM);p.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},p.material.toneMapped=!1,c.addPass(p);let m=c.render.bind(c);return c.render=v=>{p.uniforms.toneMappingExposure.value=i.toneMappingExposure,m(v)},{composer:c,bloom:f,grade:p,refl:u}}function eg(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let ee=0;ee<2;ee++){let se=s.getChannelData(ee);for(let le=0;le<n;le++)se[le]=(Math.random()*2-1)*Math.pow(1-le/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.3;let c=e.createGain();c.gain.value=.11,a.connect(c),c.connect(t),c.connect(r);let u=(ee,se)=>{let le=e.createBuffer(1,e.sampleRate*ee,e.sampleRate),oe=le.getChannelData(0),B=0;for(let ge=0;ge<oe.length;ge++)se?(B=(B+.02*(Math.random()*2-1))/1.02,oe[ge]=B*3.5):oe[ge]=Math.random()*2-1;return le},f=(ee,se,le)=>{let oe=e.createBufferSource();oe.buffer=ee,oe.loop=!0;let B=e.createBiquadFilter();B.type=se,B.frequency.value=le;let ge=e.createGain();return ge.gain.value=0,oe.connect(B),B.connect(ge),ge.connect(t),oe.start(),{f:B,g:ge}},p=f(u(2,!0),"lowpass",400),m=f(u(3,!1),"lowpass",700);m.g.connect(r);let v=f(u(2,!1),"bandpass",5200);v.f.Q.value=6;let _=f(u(2,!0),"lowpass",240),S=f(u(3,!1),"bandpass",2600);S.f.Q.value=.35;let l=f(u(2,!0),"lowpass",520),h=f(u(2,!1),"bandpass",1500);h.f.Q.value=.7;let d=e.createBiquadFilter(),x=e.createGain(),g=e.createOscillator(),y=e.createOscillator(),T=e.createGain();g.type="sawtooth",y.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,x.gain.value=0,T.gain.value=.5,g.connect(d),y.connect(T),T.connect(d),d.connect(x),x.connect(t),g.start(),y.start();let E=f(u(3,!1),"bandpass",750);E.f.Q.value=.6;let M=f(u(3,!0),"lowpass",420),b=f(u(2,!0),"lowpass",140),w=u(.03,!1),R=0;function P(ee,se){let le=e.createBufferSource(),oe=e.createBiquadFilter(),B=e.createGain();le.buffer=w,oe.type="bandpass",oe.frequency.value=1800+Math.random()*2600,oe.Q.value=1.2,B.gain.setValueAtTime(se*(.02+Math.random()*.03),ee),B.gain.exponentialRampToValueAtTime(1e-4,ee+.03),le.connect(oe),oe.connect(B),B.connect(t),le.start(ee),le.stop(ee+.04)}let I=0,C=0;function L(ee,se){let le=e.createOscillator(),oe=e.createOscillator(),B=e.createGain(),ge=e.createBiquadFilter();ge.type="bandpass",ge.frequency.value=1150,ge.Q.value=2.2,le.type="square",le.frequency.value=745,oe.type="triangle",oe.frequency.value=1490,B.gain.setValueAtTime(0,ee),B.gain.linearRampToValueAtTime(.085*se,ee+.004),B.gain.exponentialRampToValueAtTime(1e-4,ee+.3),le.connect(ge),oe.connect(ge),ge.connect(B),B.connect(t),B.connect(r),le.start(ee),oe.start(ee),le.stop(ee+.33),oe.stop(ee+.33)}function N(ee,se){let le=e.createOscillator(),oe=e.createGain();le.type="sine",le.frequency.setValueAtTime(110,ee),le.frequency.exponentialRampToValueAtTime(48,ee+.12),oe.gain.setValueAtTime(1e-4,ee),oe.gain.linearRampToValueAtTime(.22*se,ee+.006),oe.gain.exponentialRampToValueAtTime(1e-4,ee+.17),le.connect(oe),oe.connect(t),le.start(ee),le.stop(ee+.2)}let O=e.createGain();O.gain.value=1,O.connect(t);let V=e.createGain();V.gain.value=.35,O.connect(V),V.connect(r);let D=(ee=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return O;let se=e.createStereoPanner();return se.pan.value=ee,se.connect(O),se};function H(ee,se,le,oe,B,ge,te="sine",U=0){let A=e.createOscillator(),G=e.createGain();if(A.type=te,A.frequency.setValueAtTime(se,ee),A.frequency.exponentialRampToValueAtTime(le,ee+oe),U){let Z=e.createOscillator(),J=e.createGain();Z.frequency.value=U,J.gain.value=se*.012,Z.connect(J),J.connect(A.frequency),Z.start(ee),Z.stop(ee+oe+.05)}return G.gain.setValueAtTime(1e-4,ee),G.gain.linearRampToValueAtTime(B,ee+Math.min(.04,oe*.25)),G.gain.setValueAtTime(B,ee+oe*.7),G.gain.exponentialRampToValueAtTime(1e-4,ee+oe),A.connect(G),G.connect(ge),A.start(ee),A.stop(ee+oe+.02),G}function k(ee,se){let le=D(),oe=2+Math.floor(Math.random()*4),B=3200+Math.random()*1500;for(let ge=0;ge<oe;ge++){let te=ee+ge*(.09+Math.random()*.07);H(te,B,B*(1.2+Math.random()*.3),.06,se*.022,le)}}function $(ee,se){let le=D();H(ee,1120,1390,1,se*.03,le,"sine",5.5),H(ee+1.15,2350,2150,.14,se*.03,le),H(ee+1.32,1700,1520,.13,se*.028,le),H(ee+1.5,2750,2480,.36,se*.032,le)}function Q(ee,se){let le=D(),oe=1+Math.floor(Math.random()*3);for(let B=0;B<oe;B++){let ge=ee+B*.48,te=e.createOscillator(),U=e.createBiquadFilter(),A=e.createGain();te.type="sawtooth",te.frequency.setValueAtTime(560,ge),te.frequency.exponentialRampToValueAtTime(420,ge+.32),U.type="bandpass",U.frequency.value=1150,U.Q.value=1.6,A.gain.setValueAtTime(1e-4,ge),A.gain.linearRampToValueAtTime(se*.03,ge+.03),A.gain.exponentialRampToValueAtTime(1e-4,ge+.36),te.connect(U),U.connect(A),A.connect(le),te.start(ge),te.stop(ge+.4)}}function qe(ee,se){let le=D(),oe=2+Math.floor(Math.random()*2);for(let B=0;B<oe;B++)H(ee+B*.42,1750,1150,.36,se*.022,le,"triangle",11)}function Be(ee,se){let le=D(),oe=e.createOscillator(),B=e.createBiquadFilter(),ge=e.createGain(),te=240+Math.random()*220,U=5+Math.floor(Math.random()*4);oe.type="square",oe.frequency.value=te,B.type="bandpass",B.frequency.value=te*2.4,B.Q.value=3,ge.gain.setValueAtTime(1e-4,ee);for(let A=0;A<U;A++){let G=ee+A*.038;ge.gain.linearRampToValueAtTime(se*.014,G+.008),ge.gain.linearRampToValueAtTime(1e-4,G+.028)}oe.connect(B),B.connect(ge),ge.connect(le),oe.start(ee),oe.stop(ee+U*.038+.05)}function Ne(ee,se){let le=D(),oe=4300+Math.random()*700;for(let B=0;B<3;B++)H(ee+B*.055,oe,oe*1.01,.035,se*.009,le)}function q(ee,se){let le=D(0);for(let[oe,B,ge]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let te=e.createOscillator(),U=e.createGain();te.type="sine",te.frequency.value=oe,te.detune.value=(Math.random()-.5)*8,U.gain.setValueAtTime(1e-4,ee),U.gain.linearRampToValueAtTime(se*.05*B,ee+.03),U.gain.exponentialRampToValueAtTime(1e-4,ee+ge),te.connect(U),U.connect(le),te.start(ee),te.stop(ee+ge+.1)}}function j(ee,se){let le=D();for(let oe of[ee,ee+.22])H(oe,2650,2600,.5,se*.018,le),H(oe,3950,3900,.35,se*.008,le)}let ye={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Me=ee=>ee>1e-4?-Math.log(1-Math.random()*.98)/ee:1e9,Ee=ee=>440*Math.pow(2,(ee-69)/12),ze=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Ke=[72,74,76,79,81,84,86,88],We=0,lt=e.currentTime+.2,ne=e.currentTime+3;function be(ee){let se=ze[We++%ze.length],le=11;for(let oe of se)for(let B of[-5,5]){let ge=e.createOscillator(),te=e.createGain();ge.type=B<0?"sine":"triangle",ge.frequency.value=Ee(oe),ge.detune.value=B,te.gain.setValueAtTime(0,ee),te.gain.linearRampToValueAtTime(.18,ee+3.5),te.gain.setValueAtTime(.18,ee+le-4),te.gain.linearRampToValueAtTime(0,ee+le+1),ge.connect(te),te.connect(a),ge.start(ee),ge.stop(ee+le+1.2)}}function Ae(ee){let se=Ke[Math.floor(Math.random()*Ke.length)],le=e.createOscillator(),oe=e.createOscillator(),B=e.createGain(),ge=e.createGain();le.type=oe.type="sine",le.frequency.value=Ee(se),oe.frequency.value=Ee(se)*2.01,ge.gain.value=.25,oe.connect(ge),ge.connect(B),B.gain.setValueAtTime(0,ee),B.gain.linearRampToValueAtTime(.05,ee+.02),B.gain.exponentialRampToValueAtTime(1e-4,ee+4),le.connect(B),B.connect(r),B.connect(t),le.start(ee),oe.start(ee),le.stop(ee+4.2),oe.stop(ee+4.2)}return{ac:e,muted:!1,tyres:h,engG:x,bump(ee){N(e.currentTime+.01,ee)},update(ee,se,le,oe={}){let B=e.currentTime;if((oe.bell||0)>.01)for(I<B&&(I=B+.02);I<B+.12;)L(I,oe.bell),I+=.41;let ge=oe.rain||0;S.g.gain.setTargetAtTime(ge*.05,B,.6),l.g.gain.setTargetAtTime(ge*.05,B,.6);let te=(oe.wetRoad||0)*Math.min(1,ee)**1.5,U=.8+.2*Math.sin(B*2.3)*Math.sin(B*.9+1);if(h.g.gain.setTargetAtTime(te*.045*U,B,.4),h.f.frequency.setTargetAtTime(900+1500*Math.min(ee,2),B,.4),ge>.05&&oe.roof)for(R<B&&(R=B+.02);R<B+.12;)P(R,ge),R+=.04+Math.random()*.12/ge;let A=oe.water||0,G=.6+.4*Math.sin(B*1.3)*Math.sin(B*.37);E.g.gain.setTargetAtTime(A*.035*G,B,.25),E.f.frequency.setTargetAtTime(600+400*G,B,.25);let Z=.35+.65*Math.pow(.5+.5*Math.sin(B*.23)*Math.sin(B*.071+2),2),J=oe.rush||0;M.g.gain.setTargetAtTime(((se.mountain||0)+(se.snow||0)*.7)*.06*Z+J*.055,B,.8),M.f.frequency.setTargetAtTime(260+420*Z+J*500,B,.8);let he=oe.train||0;if(_.g.gain.setTargetAtTime(he*.16,B,.2),he>.04)for(C<B&&(C=B+.02);C<B+.12;)N(C,he),N(C+.15,he*.8),C+=1.2;for(;lt<B+1;)be(lt),lt+=8;ne<B+.5&&(Ae(ne),ne+=1.5+Math.random()*4.5);let xe=oe.tunnel||0;{let X=oe.speed||0,_e=oe.load||0,pe=850+2400*(1-Math.exp(-X/15))+Math.max(0,X-25)*60+_e*1300,Le=pe/40;g.frequency.setTargetAtTime(Le,B,.25),y.frequency.setTargetAtTime(Le*2,B,.25),d.frequency.setTargetAtTime(200+pe*.08+_e*260,B,.3),x.gain.setTargetAtTime((.008+.01*Math.min(1,X/15)+.024*_e)*(1-.6*(oe.rush||0))*(oe.roof===!1?.5:1)*(1+.7*xe),B,.3)}p.g.gain.setTargetAtTime((.03+ee*.06)*(1+1.6*xe),B,.35),p.f.frequency.setTargetAtTime((250+ee*500)*(1+.5*xe),B,.35),b.g.gain.setTargetAtTime(xe*.07,B,.4),o.gain.setTargetAtTime(.55+.6*xe,B,.4);let ae=.5+.5*Math.sin(B*.55)*Math.sin(B*.21+1);m.g.gain.setTargetAtTime(se.coast*(.012+ae*.05),B,.3),m.f.frequency.setTargetAtTime(400+ae*900,B,.3);let fe=1-Math.min(1,ge*1.4),W=1-le,Ge=oe.dusk||0,Pe=se.snow||0,De=1-Pe,Oe={sparrow:le*fe*.22*(.3+se.city*.5+se.sakura+se.country*.8+se.coast*.2+(se.mountain||0)*.5)*(1-Pe*.8),uguisu:le*fe*se.sakura*.06,crow:fe*(Ge*.14+le*(se.city+se.country+(se.mountain||0)*1.5+Pe*2.5)*.012),gull:le*se.coast*fe*.16,frog:W*(se.country*5+se.sakura*.6+se.coast*.3)*(1+ge*.6)*De,cricket:W*fe*(1.6-se.city*1.1+(se.mountain||0)*.8)*De,bike:le*fe*se.city*.014,bell:Pe*.022+(se.mountain||0)*.006},Ce={sparrow:k,uguisu:$,crow:Q,gull:qe,frog:Be,cricket:Ne,bike:j,bell:q};for(let X in Oe)B<ye[X]||(Oe[X]>1e-4&&Ce[X](B+.05,.6+Math.random()*.4),ye[X]=B+Math.max(.12,Me(Oe[X]||1e-6)));let Ue=.5+.5*Math.sin(B*7)*Math.sin(B*.4);v.g.gain.setTargetAtTime((se.country+se.sakura*.3)*le*.006*Ue*(1-(se.snow||0)),B,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function tg(i){let t=new tn(.075,.05),n=new hn({color:16777215,side:wn}),s=new Pi(t,n,420);s.frustumCulled=!1,s.count=0;let r=new Se("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(g=>new Se(g));for(let g=0;g<420;g++)s.setColorAt(g,r);let a=Array.from({length:420},()=>({p:new z(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),c=new nt,u=new mn,f=new $n,p=new z(1,1,1),m=new z,v=90,_=new Float32Array(v*3),S=Array.from({length:v},()=>({p:new z(1e9,0,0),ph:Math.random()*6.28})),l=new vt;l.setAttribute("position",new Gt(_,3));let h=new Yr({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:ss,opacity:0}),d=new sa(l,h);d.frustumCulled=!1;let x=(g,y,T,E,M)=>{let b=M?8+Math.random()*42:-4+Math.random()*50,w=(Math.random()-.5)*40;g.p.set(y.x+T.x*b+E.x*w,y.y-1+Math.random()*9,y.z+T.z*b+E.z*w)};return{group:[s,d],shift(g,y){for(let T of a)T.p.x-=g,T.p.z-=y;for(let T of S)T.p.x-=g,T.p.z-=y},update(g,y,T,E,M,b,w,R,P,I=0){let C=Math.floor(420*Math.min(1,b*1.1+I*.55)),L=!1;s.count=C;for(let O=0;O<C;O++){let V=a[O];m.subVectors(V.p,T);let D=m.x*E.x+m.z*E.z,H=m.x*M.x+m.z*M.z;if(V.p.x>1e8||D<-6||D>55||Math.abs(H)>24||V.p.y<w-.5){x(V,T,E,M,V.p.x<1e8);let k=Math.random()*(b+I)<I;(k!==V.leaf||k)&&(V.leaf=k,s.setColorAt(O,k?o[Math.floor(Math.random()*o.length)]:r),L=!0)}V.p.y-=V.v*g,V.p.x+=Math.sin(y*.7+V.ph)*.4*g+.25*g,V.p.z+=Math.cos(y*.5+V.ph)*.3*g,f.set(y*V.sp+V.ph,y*V.sp*.7,V.ph),u.setFromEuler(f),p.setScalar(V.leaf?1.9:1),c.compose(V.p,u,p),s.setMatrixAt(O,c)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let N=R*P;if(h.opacity=N,d.visible=N>.01,d.visible){for(let O=0;O<v;O++){let V=S[O];m.subVectors(V.p,T);let D=m.x*E.x+m.z*E.z,H=m.x*M.x+m.z*M.z;if(V.p.x>1e8||D<-4||D>60||Math.abs(H)>30){let k=2+Math.random()*55,$=(Math.random()-.5)*55;V.p.set(T.x+E.x*k+M.x*$,w+.3+Math.random()*2.2,T.z+E.z*k+M.z*$)}V.p.x+=Math.sin(y*.6+V.ph*3)*.3*g,V.p.y+=Math.sin(y*.9+V.ph)*.2*g,V.p.z+=Math.cos(y*.5+V.ph*2)*.3*g,_[O*3]=V.p.x,_[O*3+1]=V.p.y,_[O*3+2]=V.p.z}l.attributes.position.needsUpdate=!0}}}}var wM="./assets/",AM=`
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
}`,ng={value:new Ie(1280,720)};function ig(i){i.getDrawingBufferSize(ng.value)}function RM(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:ng}}async function sg(i,e=15e3){let t=wM+"clouds/",n=(async()=>{let o=await fetch(t+"clouds.json");if(!o.ok)throw new Error("clouds.json "+o.status);let a=await o.json(),c=(a.clouds||[]).filter(_=>_.u1>_.u0&&_.v1>_.v0&&_.w>0&&_.h>0&&_.lum&&_.lum[1]>_.lum[0]);if(!c.length)throw new Error("no clouds listed");let u=a.files[i]?i:"hi",f=await fetch(t+a.files[u]);if(!f.ok)throw new Error(a.files[u]+" "+f.status);let p=await f.blob();if(a.bytes&&a.bytes[u]&&p.size!==a.bytes[u])throw new Error(a.files[u]+" is "+p.size+" bytes, not "+a.bytes[u]);let m=URL.createObjectURL(p),v;try{v=await new ya().loadAsync(m)}catch(_){throw URL.revokeObjectURL(m),_}return v.onUpdate=()=>{URL.revokeObjectURL(m),v.onUpdate=null},v.colorSpace=oi,v.generateMipmaps=!0,v.minFilter=Dn,v.magFilter=Bt,{tex:v,list:c,tier:i}})(),s,r=new Promise(o=>{s=setTimeout(()=>o(null),e)});try{return await Promise.race([n,r])}catch(o){return console.warn("painted clouds unavailable, keeping the procedural ones:",o.message||o),null}finally{clearTimeout(s)}}var Bu=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],CM=140*Math.PI/180,Ou=Math.PI/180,Fs=i=>Math.atan2(Math.sin(i),Math.cos(i));function PM(i,e){let t=Kt(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/Bu[0][1];for(let[c,u,f,p,m,v,_]of Bu)for(let S=0;S<u;S++){let l;c==="tower"?l=s+S*r+t.range(-.22,.22)*r:c==="mid"?l=s+(S+.5)*r*(Bu[0][1]/u)+t.range(-.2,.2)*r:c==="high"?l=s+(S*(Bu[0][1]/u)+.5)*r+t.range(-.3,.3)*r:l=s+(S+t())/u*Math.PI*2,n.push({role:c,kinds:v,phi:l,d:t.range(f[0],f[1]),e0:t.range(p[0],p[1])*Ou,ah:t.range(m[0],m[1])*Ou,haze:_,k:-1,flip:!1})}let o=i.map(()=>[]),a=n.map((c,u)=>u);for(let c=a.length-1;c>0;c--){let u=Math.floor(t()*(c+1)),f=a[c];a[c]=a[u],a[u]=f}for(let c of a){let u=n[c],f=-1,p=1e9;i.forEach((m,v)=>{let _=u.kinds.indexOf(m.kind);if(_<0)return;let l=(o[v].some(h=>Math.abs(Fs(h-u.phi))<CM)?1e3:0)+o[v].length*10+_*4+t();l<p&&(p=l,f=v)}),f<0&&(f=Math.floor(t()*i.length)),u.k=f,o[f].push(u.phi)}for(let c of n){let u=i[c.k],f=c.d*Math.tan(c.e0);c.y0=f,c.h=c.d*Math.tan(c.e0+c.ah)-f,c.w=c.h*u.w/u.h,c.half=Math.atan2(c.w/2,c.d)}return n.sort((c,u)=>u.d-c.d)}function rg(i,e,t=5){let n=i.list,s=PM(n,t),r=s.length,o=new tn(1,1);o.translate(0,.5,0);let a=new xn(new Float32Array(r*4),4),c=new xn(new Float32Array(r*4),4),u=new xn(new Float32Array(r),1);o.setAttribute("aRect",a),o.setAttribute("aInfo",c),o.setAttribute("aRim",u),s.forEach((y,T)=>{let E=n[y.k];a.setXYZW(T,E.u0,E.v0,E.u1-E.u0,E.v1-E.v0),c.setXYZW(T,0,E.lum[0],1/Math.max(.05,E.lum[1]-E.lum[0]),y.haze)});let f=new pt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new Se},uShade:{value:ue.cShade},uRimCol:{value:ue.cRim},uHaze:{value:ue.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...RM(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:AM+`
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
      }`}),p=new Pi(o,f,r);p.frustumCulled=!1,p.renderOrder=-5;let m=new nt,v=new mn,_=new z,S=new z,l=new z(0,1,0),h=new z,d=!0;function x(y,T){let E=s.filter(C=>C.role==="tower").sort((C,L)=>Fs(C.phi-y)-Fs(L.phi-y)),M=null,b=1e9;for(let C=0;C<E.length;C++){let L=E[C],N=E[(C+1)%E.length],O=T==="center"?L.phi:L.phi+Fs(N.phi-L.phi)/2,V=Math.abs(Fs(O-y));V<b&&(b=V,M=T==="center"?[L,L,O]:[L,N,O])}if(!M)return;let[w,R,P]=M,I=Fs(y-P);for(let C of s)C.phi+=I;for(let C of new Set([w,R])){let L=Math.max(C.ah,31*Ou),N=C.d*Math.tan(C.e0+L)-C.y0;C.w*=N/C.h,C.h=N,C.ah=L,C.half=Math.atan2(C.w/2,C.d)}}let g={mesh:p,count:r,opening:"flank",layout:s,update(y,T){let E=y.position,M=Math.atan2(ue.lightDir.x,ue.lightDir.z);y.getWorldDirection(h);let b=Math.atan2(h.x,h.z),w=Math.atan(Math.tan(y.fov*Ou/2)*y.aspect);d&&x(b,g.opening);for(let P=0;P<r;P++){let I=s[P];I.phi+=T*1.2/I.d,_.set(E.x+Math.sin(I.phi)*I.d,E.y+I.y0,E.z+Math.cos(I.phi)*I.d),v.setFromAxisAngle(l,I.phi+Math.PI),S.set(I.w,I.h,1),m.compose(_,v,S),p.setMatrixAt(P,m);let C=Fs(M-I.phi),L=C>0!==n[I.k].litLeft;L!==I.flip&&Math.abs(Math.sin(C))>.2&&(d||Math.abs(Fs(I.phi-b))>w+I.half+.05)&&(I.flip=L),c.setX(P,I.flip?1:0);let N=Math.max(Math.cos(C),0);u.setX(P,.35+.9*N*N*N*(.4+ue.warm))}d=!1,p.instanceMatrix.needsUpdate=!0,c.needsUpdate=!0,u.needsUpdate=!0;let R=f.uniforms;{let P=Math.min(Math.max((ue.bright-.55)/.4,0),1);R.uPaint.value=P*P*(3-2*P)}R.uLit.value.copy(ue.cLit).multiplyScalar(1+.35*ue.bright),R.uOpacity.value=(1-ue.night*.35)*(1-ue.overcast*.55)*(1-.85*ue.rain)}};return g}var ot=new URLSearchParams(location.search),Eo=ot.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();Eo&&document.body.classList.add("embed");ot.has("shot")&&document.body.classList.add("shot");xp(ot.has("seed")?parseInt(ot.get("seed")):Math.random()*1e9|0);Mp(ot.get("env")||"city");var Cn=i=>document.getElementById(i),wo=i=>{let e=Cn("loading");e&&(e.textContent=i)};async function IM(){await new Promise(me=>setTimeout(me,30));let i=Cn("c"),e=new uu({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=ot.get("q")||(Eo||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?Eo?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=sn,e.toneMapping=Ea,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Js,e.debug.checkShaderErrors=ot.has("debug");let r=ot.get("clouds")||"painted",o=r==="old"?Promise.resolve(null):sg(n==="high"&&innerHeight*s>=900?"hi":"lo"),a=new Zs;a.fog=new ea(13032946,.0019,700);let c=new In(52,innerWidth/innerHeight,.5,7e3),u=new eo(16777215,3);u.castShadow=!0;let f=n==="low"?1024:n==="mid"?1536:2048;u.shadow.mapSize.set(f,f),Df(ot.has("pcf")?parseInt(ot.get("pcf")):1);let p=62,m=u.shadow.camera,v=new nt,_=new nt;Object.assign(m,{left:-p,right:p,top:p,bottom:-p,near:1,far:420});let S=new z(0,1,0),l=new z,h=new z,d=new z,x=new z(0,1,0),g=new z(0,150,60),y=new z,T=new z,E=null,M=0,b=0,w=0;u.shadow.updateMatrices=function(){m.position.copy(g),m.lookAt(y),m.updateMatrixWorld(),m.updateProjectionMatrix(),_.multiplyMatrices(m.matrixWorldInverse,v).multiply(m.matrixWorld),m.projectionMatrix.multiply(_),m.projectionMatrixInverse.copy(m.projectionMatrix).invert(),this._updateMatrix(m,this.matrix,this._frustum)};let R=!0;u.shadow.bias=-4e-4;let P=()=>{u.shadow.normalBias=ot.has("nb")?parseFloat(ot.get("nb")):1.5*2*p/u.shadow.mapSize.x};P();{let[me,ct]=(ot.get("graze")||"0,0.12").split(",").map(Number);Cp(me,ct)}a.add(u,u.target);let I=new eo(16777215,0);I.castShadow=n!=="low"&&!ot.has("nocarsh");{let me=ot.has("carsm")?parseInt(ot.get("carsm")):n==="high"?512:384;I.shadow.mapSize.set(me,me)}if(Object.assign(I.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),I.shadow.bias=-2e-4,I.shadow.normalBias=.025,a.add(I,I.target),I.castShadow){let me=u.shadow.getFrustum(),ct=I.shadow.getFrustum();for(let Fe of[dt,ia]){let Ft=Fe.prototype.intersectsFrustum;Fe.prototype.intersectsFrustum=function(Tt){return Tt===ct?this.userData.car===!0:(Tt!==me||this.userData.car!==!0)&&Ft.call(this,Tt)}}}let C=new Ma(10799359,13154464,1.6);a.add(C),wo("painting the town\u2026"),await new Promise(me=>setTimeout(me,10));let L=qp();Jp(L);let N=Yp(e);sm(N.cells),$e.uTuftV.value.set(...N.tuftV);let O=Op(L.textures(e),N.tex),V=Dp();V.update(e,0,0,0,0),wo("painting the clouds\u2026"),await new Promise(me=>setTimeout(me,10)),rm(ot.has("leafd")?parseFloat(ot.get("leafd")):n==="high"?.72:.62),hm();let D=new vu,H=Ym(),k=Zm(),$=Wm(n,ot.has("grass")?ot.get("grass").split(",").map(Number):null);for(let me of $.meshes)a.add(me);let Q=new Lu(a,D,O,H,k),qe=Um();a.add(qe);let Be=Om();a.add(Be.group);let Ne=qm();a.add(Ne.mesh);let q=Jm();q.group.rotation.order="YXZ",a.add(q.group),q.group.traverse(me=>{me.userData.car=!0});let j=tg(O.glowTex);j.group.forEach(me=>a.add(me));let ye=ot.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Me=Qm(e,a,c,{msaa:ye==="msaa"?n==="high"?4:2:0,fxaa:ye==="fxaa"});$e.uReflTex.value=Me.refl.rt.texture;let Ee=await o,ze=Ee?rg(Ee,Me):null;ze&&a.add(ze.mesh);let Ke=!ze||r==="both"?Bm(Fm(e)):null;Ke&&a.add(Ke.group);let We=new z,lt=new z,ne=ot.get("refl")||"auto",be=ot.has("backlit")?parseFloat(ot.get("backlit")):1,Ae=ot.has("lightson")?parseFloat(ot.get("lightson")):-1,ee=new z,se=ot.has("haze")?parseFloat(ot.get("haze")):1,le=kp();a.add(le.group);let oe=Hp();a.add(oe.group);let B=zm(ot),ge=Hm(),te=km();a.add(ge.mesh,te.mesh);let U=Vm();a.add(U.mesh);let A=Gm();a.add(A.mesh);let G=new Se,Z=new Se,J=new mt,he=Xm();a.add(he.mesh);let xe=B.W.rain,ae=.4,fe=5.5,W={s:Math.max(100,parseFloat(ot.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Wt(parseFloat(ot.get("t"))||.4,0,.999),todPaused:ot.has("freeze"),dist:0,spray:ot.has("nospray")?0:1,grass:1,pclouds:1,cam:{low:1,eye:2,top:3,film:4}[ot.get("cam")]??(Eo?4:0)},Ge=!1;ze&&(ze.opening=["sakura","city"].includes(Jt(W.s))?"center":"flank"),wo("building the road\u2026"),await new Promise(me=>setTimeout(me,10));let Pe=Eo?620:Q.ahead;Q.ahead=260;let De=ot.has("detail")?parseFloat(ot.get("detail")):380,Oe=ot.has("farleaf")?parseFloat(ot.get("farleaf")):540;for(;Q.update(W.s,1e9););Q.flush(),Q.ahead=Pe;{wo("preparing the light\u2026"),await new Promise(Tt=>setTimeout(Tt,10));let me=new en,ct=new vt;ct.setAttribute("position",new je([0,0,0,.01,0,0,0,.01,0],3)),ct.setAttribute("normal",new je([0,1,0,0,1,0,0,1,0],3)),ct.setAttribute("uv",new je([0,0,1,0,0,1],2)),ct.setAttribute("color",new je([1,1,1,1,1,1,1,1,1],3));let Fe=[O.color,O.atlas,O.foliage,O.leaf,O.lamp,O.sig,O.sodium,O.decal,O.pool,H,k];for(let Tt=0;Tt<Yi.length;Tt++)Fe.push(Va([Yi[Tt]])),Fe.push(Va([Yi[Tt],Yi[(Tt+1)%Yi.length]]));for(let Tt of Fe){let Yt=new dt(ct,Tt);Yt.castShadow=Yt.receiveShadow=!0,Yt.frustumCulled=!1,me.add(Yt)}me.position.set(0,0,0),a.add(me),u.target.position.set(0,0,0),u.position.set(0,150,60);let Ft=[ge.mesh,te.mesh,U.mesh,A.mesh,oe.group,le.group,Ne.mesh].filter(Tt=>!Tt.visible);for(let Tt of Ft)Tt.visible=!0;$.warm(!0),e.setRenderTarget(Me.composer.readBuffer),e.compile(a,c),e.render(a,c),e.setRenderTarget(null);for(let Tt of Ft)Tt.visible=!1;$.warm(!1),a.remove(me),ct.dispose(),Me.bloom.enabled=Me.refl.enabled=!0,Me.composer.render(0),Me.bloom.enabled=Me.refl.enabled=!1}let Ce={k:Math.ceil((W.s-rr)/sr),phase:"idle",raise:1,decided:!1,t2:0},Ue={},X={},_e={},pe=ot.has("yaw")||ot.get("cam")==="top",Le=new z,ke=new z,ve=new z,it=!1,et=new z,Lt=new z,At=Cn("spd"),ei=Cn("dist"),ci=Cn("clock"),dr=Cn("zone"),pr=Cn("start"),Ao=Cn("hint"),jt=null,$a=null,Ro=0,Co=0;function $i(me){!Ge||me===$a||($a=me,dr.querySelector(".jp").textContent=Ba[me].jp,dr.querySelector(".en").textContent=Ba[me].en,dr.classList.add("on"),clearTimeout(Ro),Ro=setTimeout(()=>dr.classList.remove("on"),5200))}function Bs(){if(!Ge){if(Ge=!0,document.body.classList.remove("pre"),!ot.has("auto"))try{jt=eg(),jt&&jt.ac.resume()}catch{jt=null}pr.style.opacity=0,setTimeout(()=>pr.remove(),1500),Eo||(Ao.style.opacity=.75,setTimeout(()=>Ao.style.opacity=0,9e3))}}let Pn={};addEventListener("keydown",me=>{Pn[me.key]=!0,(me.key==="m"||me.key==="M")&&Po(),(me.key==="t"||me.key==="T")&&zs(),(me.key==="c"||me.key==="C")&&Ka(),(me.key==="r"||me.key==="R")&&F(),!Ge&&(me.key===" "||me.key==="Enter")&&Bs()}),addEventListener("keyup",me=>{Pn[me.key]=!1});let an=null;i.addEventListener("pointerdown",me=>{an={id:me.pointerId,x:me.clientX,y:me.clientY,sy:me.clientY,sc:W.mult}});let Os=me=>Wt(me.sc*Math.exp(-((me.y-me.sy)/innerHeight)*3.4),ae,fe);addEventListener("pointermove",me=>{an&&me.pointerId===an.id&&(an.x=me.clientX,an.y=me.clientY,W.mult=Os(an))}),addEventListener("pointerup",()=>{an=null}),addEventListener("pointercancel",()=>{an=null}),i.addEventListener("touchstart",me=>{let ct=me.changedTouches[0];an={id:"touch",x:ct.clientX,y:ct.clientY,sy:ct.clientY,sc:W.mult},me.preventDefault()},{passive:!1}),i.addEventListener("touchmove",me=>{if(!an)return;let ct=me.changedTouches[0];an.x=ct.clientX,an.y=ct.clientY,W.mult=Os(an),me.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{an=null}),i.addEventListener("touchcancel",()=>{an=null});function Po(){jt&&(jt.toggle(),Cn("snd").style.opacity=jt.muted?.4:1)}function zs(){W.todPaused=!W.todPaused,Cn("tim").style.opacity=W.todPaused?.4:1}let mr=[0,1,2,4],Io={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Ka(){W.cam=mr[(mr.indexOf(W.cam)+1)%mr.length],Cn("cam").textContent=Io[W.cam]||"\u25D0",W.cam===4&&Lo()}let Ja=["chase","side","road","crane","eye","side","road"],kt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function Lo(){let me;do me=Ja[Math.floor(Math.random()*Ja.length)];while(me===kt.last);{let ct=xi(W.s+60);ct&&Math.abs(W.s+60-ct.s)<on+120&&(me=Math.random()<.6?"chase":"eye")}if(Object.assign(kt,{type:me,last:me,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),me==="road"){let ct=W.s+40+Math.random()*18,Fe=An(ct,"rw"),Ft=Math.random()<.6?-1:1,Tt=Ft*(Fe+(Ft<0?.9:1.3)),Yt=D.at(ct,{}),ja=Yt.y+ar(ct,Tt,Yt.y,Fe);kt.anchor={x:Yt.x+Yt.rx*Tt,y:Math.max(ja,Yt.y)+1.05,z:Yt.z+Yt.rz*Tt,s:ct}}it=!1}let Do={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function F(){Cn("wx").textContent=Do[B.cycle()]}Cn("wx").textContent=Do[B.W.mode],Cn("cam").textContent=Io[W.cam]||"\u25D0",W.cam===4&&Lo(),Cn("wx").onclick=me=>{me.stopPropagation(),F()},Cn("snd").onclick=me=>{me.stopPropagation(),Po()},Cn("tim").onclick=me=>{me.stopPropagation(),zs()},Cn("cam").onclick=me=>{me.stopPropagation(),Ka()};let K=0,ce=me=>{let ct=performance.now();ct-K<120||(K=ct,me.cancelable&&me.type!=="click"&&me.preventDefault(),Bs())};for(let me of["touchstart","pointerdown","mousedown","click"])pr.addEventListener(me,ce,{passive:!1});let re=()=>{jt&&jt.ac.state!=="running"&&jt.ac.resume()};for(let me of["touchend","click","keydown"])addEventListener(me,re,{passive:!0});document.addEventListener("visibilitychange",()=>{jt&&(document.hidden?jt.ac.suspend():jt.ac.resume())});let ie=!1,Xe="",Ze=52,He=0;function Qe(){let me=innerWidth,ct=innerHeight,Fe=me/ct,Ft=me+"x"+ct+"@"+s;Ft!==Xe&&(Xe=Ft,e.setPixelRatio(s),e.setSize(me,ct,!1),Me.composer.setPixelRatio(s),Me.composer.setSize(me,ct),c.aspect=Fe,Ze=Fe>=1?52:Wt(2*Math.atan(Math.tan(34*Math.PI/180)/Fe)*180/Math.PI,52,80),c.fov=Ze+He,c.updateProjectionMatrix(),Me.grade.uniforms.uAspect.value=Fe,Me.grade.uniforms.uTexel.value.set(1/Me.composer.readBuffer.width,1/Me.composer.readBuffer.height),$e.uReflRes.value.set(Me.composer.readBuffer.width,Me.composer.readBuffer.height),ig(e))}addEventListener("resize",()=>{ie=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{ie=!0}),Qe();let tt=0;function gt(me=!0){if(s>1.05)s=Math.max(1,s-.25),ie=!0;else if(R)R=!1,Me.bloom.enabled=!1;else if(u.shadow.mapSize.x>1024)u.shadow.mapSize.set(1024,1024),P(),u.shadow.map&&(u.shadow.map.dispose(),u.shadow.map=null);else if(Q.ahead>430)Q.ahead=430;else return;if(tt++,me)try{localStorage.setItem("icd-q",String(tt))}catch{}}try{let me=parseInt(localStorage.getItem("icd-q")||"0");if(!ot.has("q"))for(let ct=0;ct<Math.min(me,6);ct++)gt(!1);tt=Math.max(tt,me||0)}catch{}let _t=performance.now(),Ve=0,Et=0,Xt=0,Rt=()=>1-ue.night,Ct=0,xt=0,we=ot.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;we&&(we.gl=e.getContext(),we.tq=we.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let Ut={p:-1,a:new z,b:new z,next:5},Je={lat:0,lon:0,road:0,jolt:0,kick:0,u:W.u,vu:0,v:0,s:W.s,yaw:0,brake:0,rk:NaN,rb:null},qn=new Se(3.6,2.8,1.8),ui=[-2.5335,-1.4665,1.4665,2.5335],bi=[1.12,-1.12],fs=[-24.5,24.5];function Pt(me){requestAnimationFrame(Pt);let ct=performance.now();ie&&(ie=!1,Qe());let Fe=Math.min(.05,Math.max(0,(me-_t)/1e3));_t=me,Ve+=Fe,W.steer=0,(Pn.ArrowLeft||Pn.a||Pn.A)&&(W.steer=-1),(Pn.ArrowRight||Pn.d||Pn.D)&&(W.steer=1),(Pn.ArrowUp||Pn.w||Pn.W)&&(W.mult=Wt(W.mult*Math.exp(Fe*.9),ae,fe)),(Pn.ArrowDown||Pn.s||Pn.S)&&(W.mult=Wt(W.mult*Math.exp(-Fe*.9),ae,fe)),an&&Math.abs(an.y-an.sy)<30&&(W.steer=an.x<innerWidth/2?-1:1),W.steer&&(W.lastInput=me,W.uHome=W.u);let Ft=ho(Ce.k);W.s-Ft>24&&(Ce.k++,Ft=ho(Ce.k),Object.assign(Ce,{phase:"idle",raise:1,decided:!1}));let Tt=Oa(Ft),Yt=Ft-W.s;Tt&&!Ce.decided&&Yt<150&&(Ce.decided=!0,Yt>75&&Ge&&W.speed*W.speed/2.5<Yt-14&&(ot.has("xing")||Wn(Ce.k,99)<.8)&&(Ce.phase="warn",oe.start(Ft,Wn(Ce.k,7)<.5?1:-1,16))),Ce.phase==="warn"?(Ce.raise=Math.max(0,Ce.raise-Fe/6),oe.st.cleared&&(Ce.phase="clear",Ce.t2=0)):Ce.phase==="clear"?(Ce.raise=Math.max(0,Ce.raise-Fe/6),(Ce.t2+=Fe)>2.2&&(Ce.phase="raise")):Ce.phase==="raise"&&(Ce.raise=Math.min(1,Ce.raise+Fe/5),Ce.raise>=1&&(Ce.phase="idle"));let ja=Ce.phase==="warn"||Ce.phase==="clear"||Ce.phase==="raise"&&Ce.raise<.25,Qa=An(W.s,"speed")*W.mult*(Ge?1:.55);if(Ce.phase!=="idle"&&Ce.raise<.8&&Yt>0){let Re=Yt-11.2,st=Re>0?Math.sqrt(2*1.25*Re):0;Qa=Math.min(Qa,st),W.speed=Math.min(W.speed,st)}ot.has("park")&&(Qa=0,W.speed=0),W.speed+=(Qa-W.speed)*Math.min(1,Fe*.5),W.s+=W.speed*Fe,W.dist+=W.speed*Fe;let el=An(W.s,"rw");W.steer?W.u=Wt(W.u+W.steer*Fe*2.4,-el+.85,el-.85):me-W.lastInput>3e3&&(W.u+=(Wt(W.uHome,-el+.85,el-.85)+Math.sin(Ve/11)*.1-W.u)*Math.min(1,Fe*.9)),!W.todPaused&&Ge&&(W.tod=(W.tod+Fe/480*(ue.night>.5?1.7:1))%1),Lm(W.tod),B.update(Fe);let Un=B.W.ov,Ki=B.W.rain;Nm(Un,Ki),xe=Wt(xe+(Ki>.25?Fe/18:-Fe/120),0,1);let ld=performance.now();Q.update(W.s,Ge?3.5:14);let cd=performance.now();if(D.at(W.s,Ue),Math.abs(Ue.x-Q.origin.x)>900||Math.abs(Ue.z-Q.origin.z)>900){let Re=Math.round(Ue.x)-Q.origin.x,st=Math.round(Ue.z)-Q.origin.z;Q.setOrigin(Math.round(Ue.x),Math.round(Ue.z)),Le.x-=Re,Le.z-=st,ke.x-=Re,ke.z-=st,j.shift&&j.shift(Re,st),he.shift(Re,st),U.shift(Re,st)}let Si=Q.origin.x,Ti=Q.origin.z,og=(D.at(W.s+1.5,_e).y-D.at(W.s-1.5,X).y)/3,ag=(_e.h-X.h)/3;if(q.group.position.set(Ue.x+Ue.rx*W.u-Si,Ue.y+.01,Ue.z+Ue.rz*W.u-Ti),Fe>0){let Re=Je.vu+((W.u-Je.u)/Fe-Je.vu)*Math.min(1,Fe*6),st=(Re-Je.vu)/Fe;Je.u=W.u,Je.vu=Re,Je.lat=st-W.speed*W.speed*ag,Je.lon+=((W.speed-Je.v)/Fe-Je.lon)*Math.min(1,Fe*8),Je.v=W.speed;let rt=Ce.phase!=="idle"&&Yt>0&&Yt<20&&W.speed<.5;if(Je.brake=Je.lon<-.6||rt?1:Je.lon>-.3?0:Je.brake,Je.yaw=-Wt(Math.atan(Re/Math.max(W.speed,6))*.8,-.1,.1),Je.road=.004*Math.sin(W.s*.48)+.003*Math.sin(W.s*.86+1.3),Je.jolt=Je.kick=0,Tt)for(let yt=0;yt<4;yt++)for(let Ht=0;Ht<2;Ht++){let Vt=Ft+ui[yt]-bi[Ht];if(Je.s<Vt&&W.s>=Vt){let Zt=.05+Math.min(W.speed,25)*.004;Je.jolt+=Zt,Je.kick+=Ht?Zt*.9:-Zt*.9,jt&&jt.bump(.25+Math.min(W.speed,25)/50)}}{let yt=Math.round((W.s-fo)/or);yt!==Je.rk&&(Je.rk=yt,Je.rb=vi(W.s));let Ht=Je.rb;if(Ht)for(let Vt=0;Vt<2;Vt++)for(let Zt=0;Zt<2;Zt++){let Yn=Ht.s+fs[Vt]-bi[Zt];if(Je.s<Yn&&W.s>=Yn){let Tn=.035+Math.min(W.speed,25)*.003;Je.jolt+=Tn,Je.kick+=Zt?Tn*.9:-Tn*.9,jt&&jt.bump(.2+Math.min(W.speed,25)/60)}}}Je.s=W.s}q.group.rotation.set(-Math.atan(og),Ue.h+Je.yaw,0);let ks=xi(W.s);ks&&Math.abs(W.s-ks.s)<700?(D.at(ks.s-cn,_e),$e.uTunA.value.set(_e.x-Si,_e.y,_e.z-Ti),D.at(ks.s+cn,_e),$e.uTunB.value.set(_e.x-Si,_e.y,_e.z-Ti),$e.uTunR.value=An(ks.s,"rw")+1.7):($e.uTunA.value.set(0,-1e4,0),$e.uTunB.value.set(0,-1e4,0));let zu=ks&&Math.abs(W.s+1-ks.s)<cn-1.5?1:0;xt+=(zu-xt)*Math.min(1,Fe*(zu?1.6:.7)),$e.uCarPos.value.set(q.group.position.x+Ue.fx*1.7,q.group.position.y+.8,q.group.position.z+Ue.fz*1.7),$e.uCarFwd.value.set(Ue.fx,-.05,Ue.fz).normalize(),$e.uHead.value=zu,q.update(Fe,W.speed,Math.max(ue.night,xt),Ki,Je),le.update(Tt&&Yt>-24&&Yt<700?bu(D,Ft):null,Q.origin,Ce.raise,ja,Ve),oe.update(Fe,D,Q.origin,wt(.15,.8,ue.night),An(Ft,"rw")+3.2);let ku=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(ot.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(ot.has("rig")){let[Re,st,rt,yt]=ot.get("rig").split(",").map(Number);Object.assign(ku[0],{back:Re,up:st,ahead:rt,lookY:yt})}let Hs=new z,No=6,ud=W.cam===2;if(W.cam===4){kt.t+=Fe;{let rt=xi(W.s+30);rt&&Math.abs(W.s+30-rt.s)<on+70&&kt.type!=="chase"&&kt.type!=="eye"&&(kt.type="chase",kt.t=0,kt.dur=20,it=!1)}(kt.t>kt.dur+(kt.type==="road"?8:0)||kt.type==="road"&&kt.anchor&&W.s>kt.anchor.s+24)&&Lo();let Re=q.group.position,st=kt.type;if(st==="chase"||st==="eye"){let rt=ku[st==="eye"?2:0];ud=st==="eye",D.at(W.s-rt.back,X),D.at(W.s+rt.ahead,_e),ve.set(X.x+X.rx*W.u*rt.cu-Si,X.y+rt.up,X.z+X.rz*W.u*rt.cu-Ti),Hs.set(_e.x+_e.rx*W.u*rt.lu-Si,_e.y+rt.lookY,_e.z+_e.rz*W.u*rt.lu-Ti)}else if(st==="side"){D.at(W.s+1.5,X);let rt=It(W.s),yt=rt.city+rt.sakura>.5,Ht=An(W.s,"rw"),Vt=kt.sideSign>0?Ht+(yt?1.45:3.4):-(Ht+1.5),Zt=X.y+ar(W.s+1.5,Vt,X.y,Ht);ve.set(X.x+X.rx*Vt-Si,Math.max(Zt+1.55,X.y+1.25),X.z+X.rz*Vt-Ti),Hs.set(Re.x+Ue.fx*2.5,Re.y+.9,Re.z+Ue.fz*2.5),No=4}else if(st==="road"&&kt.anchor)ve.set(kt.anchor.x-Si,kt.anchor.y,kt.anchor.z-Ti),Hs.set(Re.x,Re.y+.85,Re.z),No=30;else{D.at(W.s-20,X),D.at(W.s+34,_e);let rt=14+Math.min(kt.t,20)*.35;ve.set(X.x+X.rx*W.u*.4-Si,X.y+rt,X.z+X.rz*W.u*.4-Ti),Hs.set(_e.x-Si,_e.y+1,_e.z-Ti),No=3}}else{let Re=ku[W.cam];D.at(W.s-Re.back,X),D.at(W.s+Re.ahead,_e);let st=W.u*Re.cu,rt=st+(Re.side||0);ve.set(X.x+X.rx*rt-Si,X.y+Re.up,X.z+X.rz*rt-Ti),Hs.set(_e.x+_e.rx*W.u*Re.lu-Si,_e.y+Re.lookY,_e.z+_e.rz*W.u*Re.lu-Ti)}q.group.visible=!ud,W.cam===3?c.up.set(Ue.fx,0,Ue.fz):c.up.set(0,1,0),it||(Le.copy(ve),ke.copy(Hs),it=!0);let hd=1+Math.max(0,W.speed-12)/12;Le.lerp(ve,1-Math.exp(-Fe*No*hd)),ke.lerp(Hs,1-Math.exp(-Fe*Math.min(No,8)*hd));{let Re=W.cam===3?0:Math.min(Wt((W.speed-16)*.22,0,11),Math.max(0,84-Ze));He+=(Re-He)*Math.min(1,Fe*1.5),Math.abs(c.fov-(Ze+He))>.02&&(c.fov=Ze+He,c.updateProjectionMatrix())}c.position.copy(Le),c.lookAt(ke),ot.has("yaw")&&c.rotateY(parseFloat(ot.get("yaw"))*Math.PI/180),ot.has("pitch")&&c.rotateX(parseFloat(ot.get("pitch"))*Math.PI/180),et.set(Ue.fx,0,Ue.fz),Lt.set(Ue.rx,0,Ue.rz);{let Re=q.group.position,st=c.position.x-Re.x,rt=c.position.z-Re.z,yt=W.cam===4&&kt.type!=="chase"&&kt.type!=="eye",Ht=W.s+st*Ue.fx+rt*Ue.fz-(yt?10:0),Vt=yt||pe?40:Math.tan(c.fov*Math.PI/360)*c.aspect*1.08;$.update(D,Ht,W.u+st*Ue.rx+rt*Ue.rz,Q.origin.x,Q.origin.z,An(W.s,"rw"),Vt),W.grass||$.hide()}let Qt=It(W.s),Hu=1+.25*ue.bright*(1-xt);u.color.copy(ue.sunCol),u.intensity=ue.sunI/Hu;{let Re=ue.lightDir;if(S.angleTo(Re)>.1){let Tn=0;if(Ge&&!W.todPaused)for(let Vn=1;Vn<=60&&!(nd(W.tod+Vn*.001,T).angleTo(Re)>.09);Vn++)Tn=Vn;nd(W.tod+Tn*.001,S),M=b=0}l.crossVectors(x,S).normalize(),h.crossVectors(S,l),d.set(q.group.position.x+Ue.fx*26,q.group.position.y,q.group.position.z+Ue.fz*26),u.target.position.copy(d),u.position.copy(d).addScaledVector(Re,200);let st=2*p/u.shadow.mapSize.x,rt=S.x/S.y-Re.x/Re.y,yt=S.z/S.y-Re.z/Re.y;st!==w&&(w=st,M=b=0);{let Tn=Math.round(q.group.position.y);if(E===null)E=Tn;else if(Math.abs(q.group.position.y-E)>3){let Vn=Tn-E;M-=Vn*(rt*l.x+yt*l.z),b-=Vn*(rt*h.x+yt*h.z),E=Tn}}let Ht=Q.origin.x,Vt=Q.origin.z,Zt=d.dot(l)+Ht*l.x+Vt*l.z-M,Yn=d.dot(h)+Ht*h.x+Vt*h.z-b;d.addScaledVector(l,Math.round(Zt/st)*st-Zt).addScaledVector(h,Math.round(Yn/st)*st-Yn),y.copy(d),g.copy(d).addScaledVector(S,200),v.set(1,rt,0,-E*rt,0,1,0,0,0,yt,1,-E*yt,0,0,0,1)}I.target.position.set(q.group.position.x,q.group.position.y+.9,q.group.position.z),I.position.copy(I.target.position).addScaledVector(ue.lightDir,12),C.color.copy(ue.hemiSky),C.groundColor.copy(ue.hemiGround),C.intensity=ue.hemiI/Hu;{let Re=(1-ue.night)*(1-Un);if(Re>.001){c.getWorldDirection(ee);let st=ee.x,rt=ee.z,yt=Math.hypot(st,rt)||1,Ht=ue.sunDir,Vt=0;for(let Yn=-2;Yn<=2;Yn++){let Tn=Yn*.3,Vn=Math.cos(Tn),Vs=Math.sin(Tn),vr=(st*Vn-rt*Vs)/yt,xr=(st*Vs+rt*Vn)/yt,Uo=Math.max(0,vr*Ht.x+xr*Ht.z),_r=Uo*Uo;Vt+=_r*_r*_r}let Zt=Vt/5*(.1+.35*ue.warm)*1.4*Re*se;ue.fog.r+=ue.sunCol.r*Zt,ue.fog.g+=ue.sunCol.g*Zt,ue.fog.b+=ue.sunCol.b*Zt}}a.fog.color.copy(ue.fog);let fd=(Qt.city*.0022+Qt.sakura*.0019+Qt.coast*.0011+Qt.country*.0014+Qt.mountain*.0017+Qt.snow*.0021)*(1+ue.night*.25);a.fog.near=fd*(1+.55*Un+.45*Ki),a.fog.far=Q.ahead*.92,$e.uSkyHor.value.copy(ue.horizon),$e.uSkyZen.value.copy(ue.zenith),$e.uTime.value=Ve,$e.uWet.value=xe*(1-Qt.snow);{let Re=$e.uWet.value>.04&&n!=="low"&&xt<.5&&ne!=="0";if(Me.refl.enabled=Re&&ne!=="taps",$e.uReflOn.value=Re&&ne!=="copy"?1:0,Re){c.getWorldDirection(lt),lt.y=0,lt.normalize(),We.copy(c.position).addScaledVector(lt,1e4).project(c),$e.uHorizon.value=We.y*.5+.5;let st=Math.max(.5,c.position.y-q.group.position.y);$e.uReflK.value=Wt(1-2*st/(5+st),.05,1)}}$e.uOrigin.value.set(Q.origin.x,Q.origin.z),$e.uWind.value=1+.8*Ki,$e.uCloudSh.value=(1-Un)*wt(.04,.3,ue.sunEl)*(1-ue.night),$e.uCloudSh.value>.001&&V.update(e,c.position.x,c.position.z,Q.origin.x,Q.origin.z);let ti=qe.material.uniforms;if(ti.uBright.value=ue.bright,ti.uNight.value=ue.night,ti.uWarm.value=ue.warm,ti.uTime.value=Ve,ti.uCirrusCol.value.copy(ue.cLit).lerp(ue.horizon,.25),ti.uCirrus.value=.6*(1-Un)*(1-.65*wt(.4,.9,ue.night)),ti.uOvercast.value=Un,ti.uMilky.value=wt(.55,.95,ue.night)*(1-Un),ue.night>.65&&Un<.3&&Ut.p<0&&(Ut.next-=Fe)<0){let Re=Math.atan2(Ue.fx,Ue.fz)+(Math.random()-.5)*1.5,st=.45+Math.random()*.6,rt=.22+Math.random()*.2,yt=(Math.random()-.5)*.6,Ht=(Vt,Zt)=>new z(Math.cos(Vt)*Math.sin(Zt),Math.sin(Vt),Math.cos(Vt)*Math.cos(Zt));Ut.a.copy(Ht(st,Re)),Ut.b.copy(Ht(st-rt,Re+yt)),Ut.p=0,Ut.next=ot.has("meteors")?1:6+Math.random()*20}Ut.p>=0&&(Ut.p+=Fe/.85,Ut.p>1.3&&(Ut.p=-1)),ti.uMetP.value=Ut.p,ti.uMetA.value.copy(Ut.a),ti.uMetB.value.copy(Ut.b),ti.uDeckLit.value.copy(ue.horizon).lerp(ue.cLit,.35),ti.uDeckDark.value.copy(ue.zenith).lerp(ue.horizon,.25).multiplyScalar(.82),qe.position.copy(c.position);{let Re=!!ze&&(W.pclouds!==0||!Ke);ze&&(ze.mesh.visible=Re,Re&&ze.update(c,Fe)),Ke&&(Ke.group.visible=!Re,Re||Ke.update(c.position,Fe))}Be.update(c.position,Math.max(Qt.snow,It(W.s+600).snow*.7));let tl=0;for(let Re of[-150,0,250,500,800])tl=Math.max(tl,It(W.s+Re).coast);Ne.mesh.visible=tl>.001,Ne.update(c.position,Ve,fd*.8,wt(0,.35,tl)),k.uniforms.uTime.value=Ve,k.uniforms.uFogD.value=a.fog.near,k.uniforms.uNight.value=ue.night,k.uniforms.uSpecK.value=1-ue.overcast*.85,$e.uSunDir.value.copy(ue.lightDir),$e.uSunCol.value.copy(ue.sunCol),H.uniforms.uTime.value=Ve,H.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*Rt());let hi=wt(.15,.8,ue.night);O.atlas.emissiveIntensity=.1+hi*1.05,$e.uBacklit.value=be*1.6*(1-Un)*(1-ue.night)*wt(0,.08,ue.sunEl)*(1-wt(.25,.55,ue.sunEl))*(1-xt),$e.uLightsOn.value=Ae>=0?Ae:Math.max(wt(.02,.75,ue.night),.3*Un),O.lamp.color.setRGB(.85,.85,.8).lerp(qn,hi),O.pool.opacity=hi*.42*(1+.8*xe);{let Re=q.group.position,st=q.lamps,rt=Math.max(hi,xt),yt=0,Ht=0,Vt=0,Zt=-1e3,Yn=0,Tn=0,Vn=-1e3,Vs=0,vr=900,xr=900;if(rt>.01){let md=Math.floor(W.s/zt);for(let Vu=md-1;Vu<=md+1;Vu++){let il=Q.chunks.get(Vu);if(!il||!il.lamps)continue;let Fo=il.lamps,gd=il.group.position;for(let yr=0;yr<Fo.length;yr+=4){let Gu=Fo[yr]+gd.x,Wu=Fo[yr+1],Xu=Fo[yr+2]+gd.z,qu=(Gu-Re.x)**2+(Wu-Re.y)**2+(Xu-Re.z)**2,sl=Fo[yr+3]/(1+.045*qu);sl>yt?(Ht=yt,xr=vr,Tn=Vt,Vn=Zt,Vs=Yn,yt=sl,vr=qu,Vt=Gu,Zt=Wu,Yn=Xu):sl>Ht&&(Ht=sl,xr=qu,Tn=Gu,Vn=Wu,Vs=Xu)}}c.updateMatrixWorld()}let Uo=rt*yt*(1+.045*vr)*(1-wt(18,30,Math.sqrt(vr))),_r=rt*Ht*(1+.045*xr)*(1-wt(18,30,Math.sqrt(xr)));st[0].set(Vt,Zt,Yn,1).applyMatrix4(c.matrixWorldInverse).w=Uo,st[1].set(Tn,Vn,Vs,1).applyMatrix4(c.matrixWorldInverse).w=_r,q.lampCol.setRGB(1,.8-.32*xt,.52-.38*xt),yi.uLampW.value[0].set(Vt,Zt,Yn,Uo),yi.uLampW.value[1].set(Tn,Vn,Vs,_r),yi.uLampCol.value.copy(q.lampCol),q.head.getWorldPosition(yi.uHeadPos.value),q.head.target.getWorldPosition(ee),yi.uHeadDir.value.copy(ee).sub(yi.uHeadPos.value).normalize(),yi.uHeadI.value=q.head.intensity/60}O.pool.visible=O.pool.opacity>.003,Q.lod(W.s,De,hi>.15,Oe),$e.uNight.value=hi,Me.bloom.strength=Nt(.32,.55,hi),Me.bloom.threshold=Nt(1.35,.95,hi),Me.bloom.radius=Nt(.55,.35,hi);{let Re=Math.max(hi,xt,wt(.25,.6,ue.warm)*(1-Un));Me.bloom.enabled=R&&Re>.02,Me.bloom.strength*=Math.min(1,Re*4)}e.toneMappingExposure=Nt(1,1.15,hi)*(1+.35*xt)*Hu,ve.copy(c.position).addScaledVector(ue.sunDir,1e3).project(c);let ds=Me.grade.uniforms,lg=ve.z<1?1:0,cg=Math.max(Math.abs(ve.x),Math.abs(ve.y));ds.uSun.value.set(ve.x*.5+.5,ve.y*.5+.5),ds.uSunVis.value=lg*(1-wt(1,1.9,cg))*wt(-.02,.15,ue.sunEl)*(1-ue.night)*(1-Un)*(1-xt),ds.uSat.value=1.22-.24*Un,ds.uVig.value=.55-.43*ue.bright,ds.uLo.value.set(-.014+.026*ue.bright,0,.03),ds.uDay.value=Rt(),ds.uWarm.value=ue.warm,ds.uTime.value=Ve,ge.update(c.position,Ve,Ki*(1-xt)*(1-Qt.snow),Rt());{let Re=xi(W.s+190),st=(Qt.city+Qt.country+Qt.coast)*(1-Un)*(1-xe)*wt(.6,.9,ue.sunEl)*(W.mirage??1)*(Re&&Math.abs(W.s+190-Re.s)<330?0:1);A.update(D,W.s,Q.origin.x,Q.origin.z,An(W.s+150,"rw"),st,Ve,ue.horizon)}{let Re=Wt(Qt.snow+Qt.mountain*.6*Math.max(ue.night,1-wt(.27,.36,W.tod)),0,1)*(1-xt);G.copy(ue.fog).multiplyScalar(.92),Z.copy(ue.sunCol).multiplyScalar(Math.min(1,ue.sunI/3)*(1-Un)*.6);let st=Math.cos(q.group.rotation.y),rt=Math.sin(q.group.rotation.y),yt=q.group.position;J.set(yt.x-1.75*rt,yt.y+.95,yt.z-1.75*st,Math.max(ue.night,xt)*(.5+1.2*Je.brake)),U.update(Fe,q.group,W.speed,$e.uWet.value*(1-xt),Qt.snow*(1-xt),Re,G,Z,J,c.position,W.spray)}te.update(c.position,Ve,Qt.snow*(.3+.7*Un)*(1-xt),Rt()),he.setFog(a.fog.near),he.update(Fe,Ve,c.position,et,Lt,Qt,Rt(),Ki,q.group.position);let ug=performance.now();j.update(Fe,Ve,c.position,et,Lt,Qt.sakura*(1-xt),Ue.y,hi,(Qt.country+Qt.sakura*.4)*(1-Ki)*(1-xt),Qt.mountain*(1-xt));let hg=performance.now();if(jt){D.at(Ft,_e);let Re=Math.hypot(_e.x-Q.origin.x-c.position.x,_e.z-Q.origin.z-c.position.z),st=oe.st.active?oe.group.position.distanceTo(c.position):1e9,rt=W.speed/15;jt.update(rt<1.5?rt:1.5+(rt-1.5)*.4,Qt,Rt(),{rush:Wt((W.speed-25)/40,0,1),bell:ja?Math.pow(Wt(1-Re/260,0,1),1.5):0,train:Math.pow(Wt(1-st/230,0,1),2),rain:Ki*(1-xt)*(1-Qt.snow),wetRoad:$e.uWet.value*(1-xt),speed:W.speed,load:Wt(Je.lon/3,0,1),roof:W.cam!==2,tunnel:xt,water:(()=>{let yt=vi(W.s);return Math.max(yt?1-wt(12,150,Math.abs(W.s-yt.s)):0,Qt.mountain*.45)})(),dusk:ue.warm*(W.tod>.5?1:.3)})}$i(Jt(W.s+40)),we&&(e.info.autoReset=!1,e.info.reset());let nl=null;we&&we.tq&&(nl=we.gl.createQuery(),we.gl.beginQuery(we.tq.TIME_ELAPSED_EXT,nl));let dd=performance.now();Me.composer.render(Fe);let pd=performance.now();if(nl){let Re=we.gl;for(Re.endQuery(we.tq.TIME_ELAPSED_EXT),we.pend.push(nl);we.pend.length&&Re.getQueryParameter(we.pend[0],Re.QUERY_RESULT_AVAILABLE);){let st=we.pend.shift(),rt=Re.getQueryParameter(st,Re.QUERY_RESULT);Re.deleteQuery(st),Re.getParameter(we.tq.GPU_DISJOINT_EXT)||(we.gpu=rt/1e6,we.gpuN++,we.gpuSum+=we.gpu,we.gpu>we.gpuMax&&(we.gpuMax=we.gpu))}}let gr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(gr.world=gr.world*.95+(cd-ld)*.05,gr.parts=gr.parts*.95+(hg-ug)*.05,gr.render=gr.render*.95+(pd-dd)*.05,Ct=Ct*.95+(performance.now()-ct)*.05,window.__ft=Ct,we){let Re=e.info,st=performance.now()-ct,rt={t:+Ve.toFixed(2),s:Math.round(W.s),total:+st.toFixed(1),world:+(cd-ld).toFixed(1),render:+(pd-dd).toFixed(1),gpu:+(we.gpu||0).toFixed(1),progs:Re.programs.length-we.progs,geos:Re.memory.geometries-we.geos,tex:Re.memory.textures-we.tex,calls:Re.render.calls,tris:Re.render.triangles};rt.progs>0&&Ge&&(rt.newProgs=Re.programs.slice(-rt.progs).map(yt=>(yt.name||"")+":"+String(yt.cacheKey).slice(0,60))),we.progs=Re.programs.length,we.geos=Re.memory.geometries,we.tex=Re.memory.textures,we.frames++,we.sum+=st,st>we.max&&(we.max=st),st>12&&Ge&&we.spikes.push(rt),we.last=rt}if((Co+=Fe)>.25){Co=0,At.textContent=Math.round(W.speed*3.6),ei.textContent=(W.dist/1e3).toFixed(1);let Re=Math.floor(W.tod*1440);ci.textContent=`${String(Math.floor(Re/60)).padStart(2,"0")}:${String(Re%60).padStart(2,"0")}`}Et++,Ge&&Et>150&&Fe>.03?Xt+=Fe:Xt=Math.max(0,Xt-Fe*.5),Xt>3&&!ot.has("q")&&(Xt=0,gt())}window.__dbg={renderer:e,st:W,scene:a,camera:c,world:Q,TOD:ue,KEYS:xo,X:Ce,train:oe,weather:B,U:$e,birds:he,cine:kt,post:Me,car:q,sun:u,M:O,clouds:Ke,pclouds:ze,sky:qe,mountains:Be,shadowDir:S,CM:Je,spray:U,grass:$,get audio(){return jt}},wo(""),pr.classList.add("ready"),ot.has("auto")&&Bs(),requestAnimationFrame(Pt)}IM().catch(i=>{console.error(i),wo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
