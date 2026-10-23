var kd=0,Mh=1,Hd=2;var Ys=1,Vd=2,Zr=3,Ts=0,Ln=1,En=2,Gn=0,$r=1,is=2,bh=3,Sh=4,Gd=5;var Zs=100,Wd=101,Xd=102,qd=103,Yd=104,Zd=200,$d=201,Kd=202,Jd=203,Th=204,Eh=205,jd=206,Qd=207,e0=208,t0=209,n0=210,i0=211,s0=212,r0=213,o0=214,Tl=0,El=1,wl=2,Dr=3,Al=4,Rl=5,Cl=6,Pl=7,wh=0,a0=1,l0=2,Ri=0,Ah=1,Rh=2,Ch=3,Ph=4,Ih=5,Lh=6,ga=7;var Dh=300,Es=301,$s=302,lc=303,cc=304,va=306,Nr=1e3,Oi=1001,Il=1002,fn=1003,c0=1004;var xa=1005;var Wt=1006,uc=1007;var Wn=1008;var Fn=1009,Nh=1010,Uh=1011,Kr=1012,hc=1013,Ci=1014,pi=1015,pn=1016,fc=1017,dc=1018,Jr=1020,Fh=35902,Bh=35899,Oh=1021,zh=1022,jn=1023,zi=1026,ws=1027,Ks=1028,pc=1029,As=1030,mc=1031;var gc=1033,_a=33776,ya=33777,Ma=33778,ba=33779,vc=35840,xc=35841,_c=35842,yc=35843,Mc=36196,bc=37492,Sc=37496,Tc=37488,Ec=37489,Sa=37490,wc=37491,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Ic=37812,Lc=37813,Dc=37814,Nc=37815,Uc=37816,Fc=37817,Bc=37818,Oc=37819,zc=37820,kc=37821,Hc=36492,Vc=36494,Gc=36495,Wc=36283,Xc=36284,Ta=36285,qc=36286;var zo=2300,Ll=2301,bl=2302,ch=2303,uh=2400,hh=2401,fh=2402;var u0=3200;var Yc=0,h0=1,Pi="",Qt="srgb",ko="srgb-linear",Ho="linear",Ft="srgb";var Sl=7680;var f0=519,d0=512,p0=513,m0=514,Zc=515,g0=516,v0=517,$c=518,x0=519,_0=35044;var kh="300 es",Ai=2e3,Ur=2001;function Km(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function y0(){let i=Vo("canvas");return i.style.display="block",i}var od={},Fr=null;function Hh(...i){let e="THREE."+i.shift();Fr?Fr("log",e,...i):console.log(e,...i)}function M0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ct(...i){i=M0(i);let e="THREE."+i.shift();if(Fr)Fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=M0(i);let e="THREE."+i.shift();if(Fr)Fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gs(...i){let e=i.join(" ");e in od||(od[e]=!0,ct(...i))}function b0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var S0={[Tl]:El,[wl]:Cl,[Al]:Pl,[Dr]:Rl,[El]:Tl,[Cl]:wl,[Pl]:Al,[Rl]:Dr},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fu=Math.PI/180,Go=180/Math.PI;function jr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function jm(i,e){return(i%e+e)%e}function Bu(i,e,t){return(1-t)*i+t*e}function Ro(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yh=class Yh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yh.prototype.isVector2=!0;var De=Yh,Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],u=n[s+1],f=n[s+2],m=n[s+3],g=r[o+0],v=r[o+1],y=r[o+2],S=r[o+3];if(m!==S||c!==g||u!==v||f!==y){let l=c*g+u*v+f*y+m*S;l<0&&(g=-g,v=-v,y=-y,S=-S,l=-l);let h=1-a;if(l<.9995){let d=Math.acos(l),x=Math.sin(d);h=Math.sin(h*d)/x,a=Math.sin(a*d)/x,c=c*h+g*a,u=u*h+v*a,f=f*h+y*a,m=m*h+S*a}else{c=c*h+g*a,u=u*h+v*a,f=f*h+y*a,m=m*h+S*a;let d=1/Math.sqrt(c*c+u*u+f*f+m*m);c*=d,u*=d,f*=d,m*=d}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],u=n[s+2],f=n[s+3],m=r[o],g=r[o+1],v=r[o+2],y=r[o+3];return e[t]=a*y+f*m+c*v-u*g,e[t+1]=c*y+f*g+u*m-a*v,e[t+2]=u*y+f*v+a*g-c*m,e[t+3]=f*y-a*m-c*g-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),f=a(s/2),m=a(r/2),g=c(n/2),v=c(s/2),y=c(r/2);switch(o){case"XYZ":this._x=g*f*m+u*v*y,this._y=u*v*m-g*f*y,this._z=u*f*y+g*v*m,this._w=u*f*m-g*v*y;break;case"YXZ":this._x=g*f*m+u*v*y,this._y=u*v*m-g*f*y,this._z=u*f*y-g*v*m,this._w=u*f*m+g*v*y;break;case"ZXY":this._x=g*f*m-u*v*y,this._y=u*v*m+g*f*y,this._z=u*f*y+g*v*m,this._w=u*f*m-g*v*y;break;case"ZYX":this._x=g*f*m-u*v*y,this._y=u*v*m+g*f*y,this._z=u*f*y-g*v*m,this._w=u*f*m+g*v*y;break;case"YZX":this._x=g*f*m+u*v*y,this._y=u*v*m+g*f*y,this._z=u*f*y-g*v*m,this._w=u*f*m-g*v*y;break;case"XZY":this._x=g*f*m-u*v*y,this._y=u*v*m-g*f*y,this._z=u*f*y+g*v*m,this._w=u*f*m+g*v*y;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],f=t[6],m=t[10],g=n+a+m;if(g>0){let v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(f-c)*v,this._y=(r-u)*v,this._z=(o-s)*v}else if(n>a&&n>m){let v=2*Math.sqrt(1+n-a-m);this._w=(f-c)/v,this._x=.25*v,this._y=(s+o)/v,this._z=(r+u)/v}else if(a>m){let v=2*Math.sqrt(1+a-n-m);this._w=(r-u)/v,this._x=(s+o)/v,this._y=.25*v,this._z=(c+f)/v}else{let v=2*Math.sqrt(1+m-n-a);this._w=(o-s)/v,this._x=(r+u)/v,this._y=(c+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+o*a+s*u-r*c,this._y=s*f+o*c+r*a-n*u,this._z=r*f+o*u+n*c-s*a,this._w=o*f-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let u=Math.acos(a),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zh=class Zh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*n),f=2*(a*t-r*s),m=2*(r*n-o*t);return this.x=t+c*u+o*m-a*f,this.y=n+c*f+a*u-r*m,this.z=s+c*m+r*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zh.prototype.isVector3=!0;var k=Zh,Ou=new k,ad=new Tn,$h=class $h{constructor(e,t,n,s,r,o,a,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u)}set(e,t,n,s,r,o,a,c,u){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],f=n[4],m=n[7],g=n[2],v=n[5],y=n[8],S=s[0],l=s[3],h=s[6],d=s[1],x=s[4],p=s[7],_=s[2],T=s[5],E=s[8];return r[0]=o*S+a*d+c*_,r[3]=o*l+a*x+c*T,r[6]=o*h+a*p+c*E,r[1]=u*S+f*d+m*_,r[4]=u*l+f*x+m*T,r[7]=u*h+f*p+m*E,r[2]=g*S+v*d+y*_,r[5]=g*l+v*x+y*T,r[8]=g*h+v*p+y*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-n*r*f+n*a*c+s*r*u-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],m=f*o-a*u,g=a*c-f*r,v=u*r-o*c,y=t*m+n*g+s*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/y;return e[0]=m*S,e[1]=(s*u-f*n)*S,e[2]=(a*n-s*o)*S,e[3]=g*S,e[4]=(f*t-s*c)*S,e[5]=(s*r-a*t)*S,e[6]=v*S,e[7]=(n*c-u*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zu.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zu.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;var gt=$h,zu=new gt,ld=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cd=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qm(){let i={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ft&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ft&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Ho:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ko]:{primaries:e,whitePoint:n,transfer:Ho,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}var wt=Qm();function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vr,Dl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vr===void 0&&(vr=Vo("canvas")),vr.width=e.width,vr.height=e.height;let s=vr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eg=0,Br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ku(s[o].image)):r.push(ku(s[o]))}else r=ku(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ku(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}var tg=0,Hu=new k,Hn=class i extends ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Oi,s=Oi,r=Wt,o=Wn,a=jn,c=Fn,u=i.DEFAULT_ANISOTROPY,f=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=jr(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nr:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nr:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Dh;Hn.DEFAULT_ANISOTROPY=1;var Kh=class Kh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],f=c[4],m=c[8],g=c[1],v=c[5],y=c[9],S=c[2],l=c[6],h=c[10];if(Math.abs(f-g)<.01&&Math.abs(m-S)<.01&&Math.abs(y-l)<.01){if(Math.abs(f+g)<.1&&Math.abs(m+S)<.1&&Math.abs(y+l)<.1&&Math.abs(u+v+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(u+1)/2,p=(v+1)/2,_=(h+1)/2,T=(f+g)/4,E=(m+S)/4,M=(y+l)/4;return x>p&&x>_?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=E/n):p>_?p<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(p),n=T/s,r=M/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=E/r,s=M/r),this.set(n,s,r,t),this}let d=Math.sqrt((l-y)*(l-y)+(m-S)*(m-S)+(g-f)*(g-f));return Math.abs(d)<.001&&(d=1),this.x=(l-y)/d,this.y=(m-S)/d,this.z=(g-f)/d,this.w=Math.acos((u+v+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;var yt=Kh,Nl=class extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Hn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends Nl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wo=class extends Hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ul=class extends Hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ac=class ac{constructor(e,t,n,s,r,o,a,c,u,f,m,g,v,y,S,l){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u,f,m,g,v,y,S,l)}set(e,t,n,s,r,o,a,c,u,f,m,g,v,y,S,l){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=u,h[6]=f,h[10]=m,h[14]=g,h[3]=v,h[7]=y,h[11]=S,h[15]=l,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let g=o*f,v=o*m,y=a*f,S=a*m;t[0]=c*f,t[4]=-c*m,t[8]=u,t[1]=v+y*u,t[5]=g-S*u,t[9]=-a*c,t[2]=S-g*u,t[6]=y+v*u,t[10]=o*c}else if(e.order==="YXZ"){let g=c*f,v=c*m,y=u*f,S=u*m;t[0]=g+S*a,t[4]=y*a-v,t[8]=o*u,t[1]=o*m,t[5]=o*f,t[9]=-a,t[2]=v*a-y,t[6]=S+g*a,t[10]=o*c}else if(e.order==="ZXY"){let g=c*f,v=c*m,y=u*f,S=u*m;t[0]=g-S*a,t[4]=-o*m,t[8]=y+v*a,t[1]=v+y*a,t[5]=o*f,t[9]=S-g*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let g=o*f,v=o*m,y=a*f,S=a*m;t[0]=c*f,t[4]=y*u-v,t[8]=g*u+S,t[1]=c*m,t[5]=S*u+g,t[9]=v*u-y,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let g=o*c,v=o*u,y=a*c,S=a*u;t[0]=c*f,t[4]=S-g*m,t[8]=y*m+v,t[1]=m,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=v*m+y,t[10]=g-S*m}else if(e.order==="XZY"){let g=o*c,v=o*u,y=a*c,S=a*u;t[0]=c*f,t[4]=-m,t[8]=u*f,t[1]=g*m+S,t[5]=o*f,t[9]=v*m-y,t[2]=y*m-v,t[6]=a*f,t[10]=S*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,n){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),fs.crossVectors(n,ii),fs.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),fs.crossVectors(n,ii)),fs.normalize(),Ka.crossVectors(ii,fs),s[0]=fs.x,s[4]=Ka.x,s[8]=ii.x,s[1]=fs.y,s[5]=Ka.y,s[9]=ii.y,s[2]=fs.z,s[6]=Ka.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],f=n[1],m=n[5],g=n[9],v=n[13],y=n[2],S=n[6],l=n[10],h=n[14],d=n[3],x=n[7],p=n[11],_=n[15],T=s[0],E=s[4],M=s[8],b=s[12],w=s[1],R=s[5],P=s[9],I=s[13],C=s[2],L=s[6],U=s[10],z=s[14],G=s[3],D=s[7],H=s[11],O=s[15];return r[0]=o*T+a*w+c*C+u*G,r[4]=o*E+a*R+c*L+u*D,r[8]=o*M+a*P+c*U+u*H,r[12]=o*b+a*I+c*z+u*O,r[1]=f*T+m*w+g*C+v*G,r[5]=f*E+m*R+g*L+v*D,r[9]=f*M+m*P+g*U+v*H,r[13]=f*b+m*I+g*z+v*O,r[2]=y*T+S*w+l*C+h*G,r[6]=y*E+S*R+l*L+h*D,r[10]=y*M+S*P+l*U+h*H,r[14]=y*b+S*I+l*z+h*O,r[3]=d*T+x*w+p*C+_*G,r[7]=d*E+x*R+p*L+_*D,r[11]=d*M+x*P+p*U+_*H,r[15]=d*b+x*I+p*z+_*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],f=e[2],m=e[6],g=e[10],v=e[14],y=e[3],S=e[7],l=e[11],h=e[15],d=c*v-u*g,x=a*v-u*m,p=a*g-c*m,_=o*v-u*f,T=o*g-c*f,E=o*m-a*f;return t*(S*d-l*x+h*p)-n*(y*d-l*_+h*T)+s*(y*x-S*_+h*E)-r*(y*p-S*T+l*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],u=e[6],f=e[10];return t*(o*f-a*u)-n*(r*f-a*c)+s*(r*u-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],m=e[9],g=e[10],v=e[11],y=e[12],S=e[13],l=e[14],h=e[15],d=t*a-n*o,x=t*c-s*o,p=t*u-r*o,_=n*c-s*a,T=n*u-r*a,E=s*u-r*c,M=f*S-m*y,b=f*l-g*y,w=f*h-v*y,R=m*l-g*S,P=m*h-v*S,I=g*h-v*l,C=d*I-x*P+p*R+_*w-T*b+E*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=(a*I-c*P+u*R)*L,e[1]=(s*P-n*I-r*R)*L,e[2]=(S*E-l*T+h*_)*L,e[3]=(g*T-m*E-v*_)*L,e[4]=(c*w-o*I-u*b)*L,e[5]=(t*I-s*w+r*b)*L,e[6]=(l*p-y*E-h*x)*L,e[7]=(f*E-g*p+v*x)*L,e[8]=(o*P-a*w+u*M)*L,e[9]=(n*w-t*P-r*M)*L,e[10]=(y*T-S*p+h*d)*L,e[11]=(m*p-f*T-v*d)*L,e[12]=(a*b-o*R-c*M)*L,e[13]=(t*R-n*b+s*M)*L,e[14]=(S*x-y*_-l*d)*L,e[15]=(f*_-m*x+g*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,f=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,f*a+n,f*c-s*o,0,u*c-s*a,f*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,f=o+o,m=a+a,g=r*u,v=r*f,y=r*m,S=o*f,l=o*m,h=a*m,d=c*u,x=c*f,p=c*m,_=n.x,T=n.y,E=n.z;return s[0]=(1-(S+h))*_,s[1]=(v+p)*_,s[2]=(y-x)*_,s[3]=0,s[4]=(v-p)*T,s[5]=(1-(g+h))*T,s[6]=(l+d)*T,s[7]=0,s[8]=(y+x)*E,s[9]=(l-d)*E,s[10]=(1-(g+S))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=xr.set(s[0],s[1],s[2]).length(),a=xr.set(s[4],s[5],s[6]).length(),c=xr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Si.copy(this);let u=1/o,f=1/a,m=1/c;return Si.elements[0]*=u,Si.elements[1]*=u,Si.elements[2]*=u,Si.elements[4]*=f,Si.elements[5]*=f,Si.elements[6]*=f,Si.elements[8]*=m,Si.elements[9]*=m,Si.elements[10]*=m,t.setFromRotationMatrix(Si),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ai,c=!1){let u=this.elements,f=2*r/(t-e),m=2*r/(n-s),g=(t+e)/(t-e),v=(n+s)/(n-s),y,S;if(c)y=r/(o-r),S=o*r/(o-r);else if(a===Ai)y=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Ur)y=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=m,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ai,c=!1){let u=this.elements,f=2/(t-e),m=2/(n-s),g=-(t+e)/(t-e),v=-(n+s)/(n-s),y,S;if(c)y=1/(o-r),S=o/(o-r);else if(a===Ai)y=-2/(o-r),S=-(o+r)/(o-r);else if(a===Ur)y=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=m,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=y,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ac.prototype.isMatrix4=!0;var nt=ac,xr=new k,Si=new nt,ng=new k(0,0,0),ig=new k(1,1,1),fs=new k,Ka=new k,ii=new k,ud=new nt,hd=new Tn,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],f=s[9],m=s[2],g=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,v),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hd.setFromEuler(this),this.setFromQuaternion(hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,fd=new k,_r=new Tn,$i=new nt,Ja=new k,Co=new k,rg=new k,og=new Tn,dd=new k(1,0,0),pd=new k(0,1,0),md=new k(0,0,1),gd={type:"added"},ag={type:"removed"},yr={type:"childadded",child:null},Vu={type:"childremoved",child:null},dn=class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Kn,n=new Tn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new gt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Co,Ja,this.up):$i.lookAt(Ja,Co,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),_r.setFromRotationMatrix($i),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gd),yr.child=e,this.dispatchEvent(yr),yr.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ag),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gd),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){let m=c[u];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),m=o(e.shapes),g=o(e.skeletons),v=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let c=[];for(let u in a){let f=a[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new k(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lg={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let S of e.hand.values()){let l=t.getJointPose(S,n),h=this._getHandJoint(u,S);l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=l.radius),h.visible=l!==null}let f=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],g=f.position.distanceTo(m.position),v=.02,y=.005;u.inputState.pinching&&g>v+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&g<=v-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Gu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=wt.workingColorSpace){if(e=jm(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gu(o,r,e+1/3),this.g=Gu(o,r,e),this.b=Gu(o,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let n=T0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return wt.workingToColorSpace(Un.copy(this),e),Math.round(Et(Un.r*255,0,255))*65536+Math.round(Et(Un.g*255,0,255))*256+Math.round(Et(Un.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Un.copy(this),t);let n=Un.r,s=Un.g,r=Un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,u,f=(a+o)/2;if(a===o)c=0,u=0;else{let m=o-a;switch(u=f<=.5?m/(o+a):m/(2-o-a),o){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Qt){wt.workingToColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,s=Un.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(ja);let n=Bu(ds.h,ja.h,t),s=Bu(ds.s,ja.s,t),r=Bu(ds.l,ja.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Ae;Ae.NAMES=T0;var qo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new k,Ki=new k,Wu=new k,Ji=new k,Mr=new k,br=new k,vd=new k,Xu=new k,qu=new k,Yu=new k,Zu=new yt,$u=new yt,Ku=new yt,vs=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ti.subVectors(e,t),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ti.subVectors(s,t),Ki.subVectors(n,t),Wu.subVectors(e,t);let o=Ti.dot(Ti),a=Ti.dot(Ki),c=Ti.dot(Wu),u=Ki.dot(Ki),f=Ki.dot(Wu),m=o*u-a*a;if(m===0)return r.set(0,0,0),null;let g=1/m,v=(u*c-a*f)*g,y=(o*f-a*c)*g;return r.set(1-v-y,y,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ji.x),c.addScaledVector(o,Ji.y),c.addScaledVector(a,Ji.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Zu.setScalar(0),$u.setScalar(0),Ku.setScalar(0),Zu.fromBufferAttribute(e,t),$u.fromBufferAttribute(e,n),Ku.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Zu,r.x),o.addScaledVector($u,r.y),o.addScaledVector(Ku,r.z),o}static isFrontFacing(e,t,n,s){return Ti.subVectors(n,t),Ki.subVectors(e,t),Ti.cross(Ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Ti.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Mr.subVectors(s,n),br.subVectors(r,n),Xu.subVectors(e,n);let c=Mr.dot(Xu),u=br.dot(Xu);if(c<=0&&u<=0)return t.copy(n);qu.subVectors(e,s);let f=Mr.dot(qu),m=br.dot(qu);if(f>=0&&m<=f)return t.copy(s);let g=c*m-f*u;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Mr,o);Yu.subVectors(e,r);let v=Mr.dot(Yu),y=br.dot(Yu);if(y>=0&&v<=y)return t.copy(r);let S=v*u-c*y;if(S<=0&&u>=0&&y<=0)return a=u/(u-y),t.copy(n).addScaledVector(br,a);let l=f*y-v*m;if(l<=0&&m-f>=0&&v-y>=0)return vd.subVectors(r,s),a=(m-f)/(m-f+(v-y)),t.copy(s).addScaledVector(vd,a);let h=1/(l+S+g);return o=S*h,a=g*h,t.copy(n).addScaledVector(Mr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),el.subVectors(this.max,Po),Sr.subVectors(e.a,Po),Tr.subVectors(e.b,Po),Er.subVectors(e.c,Po),ps.subVectors(Tr,Sr),ms.subVectors(Er,Tr),zs.subVectors(Sr,Er);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-zs.z,zs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,zs.z,0,-zs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-zs.y,zs.x,0];return!Ju(t,Sr,Tr,Er,el)||(t=[1,0,0,0,1,0,0,0,1],!Ju(t,Sr,Tr,Er,el))?!1:(tl.crossVectors(ps,ms),t=[tl.x,tl.y,tl.z],Ju(t,Sr,Tr,Er,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ji=[new k,new k,new k,new k,new k,new k,new k,new k],Ei=new k,Qa=new hi,Sr=new k,Tr=new k,Er=new k,ps=new k,ms=new k,zs=new k,Po=new k,el=new k,tl=new k,ks=new k;function Ju(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ks.fromArray(i,r);let a=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),c=e.dot(ks),u=t.dot(ks),f=n.dot(ks);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>a)return!1}return!0}var hn=new k,nl=new De,cg=0,Gt=class extends ki{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_0,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ro(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),n=$n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),n=$n(n,this.array),s=$n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),n=$n(n,this.array),s=$n(s,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Yo=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zo=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ug=new hi,Io=new k,ju=new k,fi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ug.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Io,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(ju)),this.expandByPoint(Io.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hg=0,ui=new nt,Qu=new dn,wr=new k,si=new hi,Lo=new hi,Sn=new k,bt=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?Zo:Yo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];si.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(si.min,Lo.min),si.expandByPoint(Sn),Sn.addVectors(si.max,Lo.max),si.expandByPoint(Sn)):(si.expandByPoint(Lo.min),si.expandByPoint(Lo.max))}si.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Sn.fromBufferAttribute(a,u),c&&(wr.fromBufferAttribute(e,u),Sn.add(wr)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new k,c[M]=new k;let u=new k,f=new k,m=new k,g=new De,v=new De,y=new De,S=new k,l=new k;function h(M,b,w){u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,b),m.fromBufferAttribute(n,w),g.fromBufferAttribute(r,M),v.fromBufferAttribute(r,b),y.fromBufferAttribute(r,w),f.sub(u),m.sub(u),v.sub(g),y.sub(g);let R=1/(v.x*y.y-y.x*v.y);isFinite(R)&&(S.copy(f).multiplyScalar(y.y).addScaledVector(m,-v.y).multiplyScalar(R),l.copy(m).multiplyScalar(v.x).addScaledVector(f,-y.x).multiplyScalar(R),a[M].add(S),a[b].add(S),a[w].add(S),c[M].add(l),c[b].add(l),c[w].add(l))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let M=0,b=d.length;M<b;++M){let w=d[M],R=w.start,P=w.count;for(let I=R,C=R+P;I<C;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new k,p=new k,_=new k,T=new k;function E(M){_.fromBufferAttribute(s,M),T.copy(_);let b=a[M];x.copy(b),x.sub(_.multiplyScalar(_.dot(b))).normalize(),p.crossVectors(T,b);let R=p.dot(c[M])<0?-1:1;o.setXYZW(M,x.x,x.y,x.z,R)}for(let M=0,b=d.length;M<b;++M){let w=d[M],R=w.start,P=w.count;for(let I=R,C=R+P;I<C;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,u=new k,f=new k,m=new k;if(e)for(let g=0,v=e.count;g<v;g+=3){let y=e.getX(g+0),S=e.getX(g+1),l=e.getX(g+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,l),f.subVectors(o,r),m.subVectors(s,r),f.cross(m),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,l),a.add(f),c.add(f),u.add(f),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(l,u.x,u.y,u.z)}else for(let g=0,v=t.count;g<v;g+=3)s.fromBufferAttribute(t,g+0),r.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),f.subVectors(o,r),m.subVectors(s,r),f.cross(m),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,c){let u=a.array,f=a.itemSize,m=a.normalized,g=new u.constructor(c.length*f),v=0,y=0;for(let S=0,l=c.length;S<l;S++){a.isInterleavedBufferAttribute?v=c[S]*a.data.stride+a.offset:v=c[S]*f;for(let h=0;h<f;h++)g[y++]=u[v++]}return new Gt(g,f,m)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],u=e(c,n);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let c=[],u=r[a];for(let f=0,m=u.length;f<m;f++){let g=u[f],v=e(g,n);c.push(v)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],f=[];for(let m=0,g=u.length;m<g;m++){let v=u[m];f.push(v.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let f=s[u];this.setAttribute(u,f.clone(t))}let r=e.morphAttributes;for(let u in r){let f=[],m=r[u];for(let g=0,v=m.length;g<v;g++)f.push(m[g].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,f=o.length;u<f;u++){let m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var eh=new k,fg=new k,dg=new gt,wi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=eh.subVectors(n,t).cross(fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(eh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dg.getNormalMatrix(e),s=this.coplanarPoint(eh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pg=0,Hi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=$r,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Eh,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sl,this.stencilZFail=Sl,this.stencilZPass=Sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new De().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Qi=new k,th=new k,il=new k,sl=new k,zr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){th.copy(e).add(t).multiplyScalar(.5),il.copy(t).sub(e).normalize(),sl.copy(this.origin).sub(th);let r=e.distanceTo(t)*.5,o=-this.direction.dot(il),a=sl.dot(this.direction),c=-sl.dot(il),u=sl.lengthSq(),f=Math.abs(1-o*o),m,g,v,y;if(f>0)if(m=o*c-a,g=o*a-c,y=r*f,m>=0)if(g>=-y)if(g<=y){let S=1/f;m*=S,g*=S,v=m*(m+o*g+2*a)+g*(o*m+g+2*c)+u}else g=r,m=Math.max(0,-(o*g+a)),v=-m*m+g*(g+2*c)+u;else g=-r,m=Math.max(0,-(o*g+a)),v=-m*m+g*(g+2*c)+u;else g<=-y?(m=Math.max(0,-(-o*r+a)),g=m>0?-r:Math.min(Math.max(-r,-c),r),v=-m*m+g*(g+2*c)+u):g<=y?(m=0,g=Math.min(Math.max(-r,-c),r),v=g*(g+2*c)+u):(m=Math.max(0,-(o*r+a)),g=m>0?r:Math.min(Math.max(-r,-c),r),v=-m*m+g*(g+2*c)+u);else g=o>0?-r:r,m=Math.max(0,-(o*g+a)),v=-m*m+g*(g+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(th).addScaledVector(il,g),v}intersectSphere(e,t){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);let n=Qi.dot(this.direction),s=Qi.dot(Qi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,u=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,g=this.origin;return u>=0?(n=(e.min.x-g.x)*u,s=(e.max.x-g.x)*u):(n=(e.max.x-g.x)*u,s=(e.min.x-g.x)*u),f>=0?(r=(e.min.y-g.y)*f,o=(e.max.y-g.y)*f):(r=(e.max.y-g.y)*f,o=(e.min.y-g.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(e.min.z-g.z)*m,c=(e.max.z-g.z)*m):(a=(e.max.z-g.z)*m,c=(e.min.z-g.z)*m),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,u=a.y,f=a.z,m=e.x-o.x,g=e.y-o.y,v=e.z-o.z,y=t.x-o.x,S=t.y-o.y,l=t.z-o.z,h=n.x-o.x,d=n.y-o.y,x=n.z-o.z,p=Math.abs(c),_=Math.abs(u),T=Math.abs(f),E,M,b,w,R,P,I,C,L,U,z,G;if(p>=_&&p>=T?(b=c,P=m,L=y,G=h,c>=0?(E=u,M=f,w=g,R=v,I=S,C=l,U=d,z=x):(E=f,M=u,w=v,R=g,I=l,C=S,U=x,z=d)):_>=T?(b=u,P=g,L=S,G=d,u>=0?(E=f,M=c,w=v,R=m,I=l,C=y,U=x,z=h):(E=c,M=f,w=m,R=v,I=y,C=l,U=h,z=x)):(b=f,P=v,L=l,G=x,f>=0?(E=c,M=u,w=m,R=g,I=y,C=S,U=h,z=d):(E=u,M=c,w=g,R=m,I=S,C=y,U=d,z=h)),b===0)return null;let D=E/b,H=M/b,O=1/b,K=w-D*P,oe=R-H*P,Ve=I-D*L,Ue=C-H*L,xe=U-D*G,Z=z-H*G,j=xe*Ue-Z*Ve,ue=K*Z-oe*xe,Pe=Ve*oe-Ue*K;if(s){if(j<0||ue<0||Pe<0)return null}else if((j<0||ue<0||Pe<0)&&(j>0||ue>0||Pe>0))return null;let Se=j+ue+Pe;if(Se===0)return null;let Ge=O*(j*P+ue*L+Pe*G);return(Se>0?Ge<0:Ge>0)?null:this.at(Ge/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cn=class extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xd=new nt,Hs=new zr,rl=new fi,_d=new k,ol=new k,al=new k,ll=new k,nh=new k,cl=new k,yd=new k,ul=new k,vt=class extends dn{constructor(e=new bt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){cl.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let f=a[c],m=r[c];f!==0&&(nh.fromBufferAttribute(m,e),o?cl.addScaledVector(nh,f):cl.addScaledVector(nh.sub(t),f))}t.add(cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(rl.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(rl,_d)===null||Hs.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(xd.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(xd),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,g=r.groups,v=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,S=g.length;y<S;y++){let l=g[y],h=o[l.materialIndex],d=Math.max(l.start,v.start),x=Math.min(a.count,Math.min(l.start+l.count,v.start+v.count));for(let p=d,_=x;p<_;p+=3){let T=a.getX(p),E=a.getX(p+1),M=a.getX(p+2);s=hl(this,h,e,n,u,f,m,T,E,M),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let y=Math.max(0,v.start),S=Math.min(a.count,v.start+v.count);for(let l=y,h=S;l<h;l+=3){let d=a.getX(l),x=a.getX(l+1),p=a.getX(l+2);s=hl(this,o,e,n,u,f,m,d,x,p),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,S=g.length;y<S;y++){let l=g[y],h=o[l.materialIndex],d=Math.max(l.start,v.start),x=Math.min(c.count,Math.min(l.start+l.count,v.start+v.count));for(let p=d,_=x;p<_;p+=3){let T=p,E=p+1,M=p+2;s=hl(this,h,e,n,u,f,m,T,E,M),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let y=Math.max(0,v.start),S=Math.min(c.count,v.start+v.count);for(let l=y,h=S;l<h;l+=3){let d=l,x=l+1,p=l+2;s=hl(this,o,e,n,u,f,m,d,x,p),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}}};function mg(i,e,t,n,s,r,o,a){let c;if(e.side===Ln?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ts,a),c===null)return null;ul.copy(a),ul.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(ul);return u<t.near||u>t.far?null:{distance:u,point:ul.clone(),object:i}}function hl(i,e,t,n,s,r,o,a,c,u){i.getVertexPosition(a,ol),i.getVertexPosition(c,al),i.getVertexPosition(u,ll);let f=mg(i,e,t,n,ol,al,ll,yd);if(f){let m=new k;vs.getBarycoord(yd,ol,al,ll,m),s&&(f.uv=vs.getInterpolatedAttribute(s,a,c,u,m,new De)),r&&(f.uv1=vs.getInterpolatedAttribute(r,a,c,u,m,new De)),o&&(f.normal=vs.getInterpolatedAttribute(o,a,c,u,m,new k),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let g={a,b:c,c:u,normal:new k,materialIndex:0};vs.getNormal(ol,al,ll,g.normal),f.face=g,f.barycoord=m}return f}var xs=class extends Hn{constructor(e=null,t=1,n=1,s,r,o,a,c,u=fn,f=fn,m,g){super(null,o,a,c,u,f,s,r,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ar=new nt,Md=new nt,fl=[],bd=new hi,gg=new nt,Do=new vt,No=new fi,ts=class extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),bd.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(bd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),No.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(No)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),e.ray.intersectsSphere(No)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),Md.multiplyMatrices(n,Ar),Do.matrixWorld=Md,Do.raycast(e,fl);for(let o=0,a=fl.length;o<a;o++){let c=fl[o];c.instanceId=r,c.object=this,t.push(c)}fl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xs(new Float32Array(s*this.count),s,this.count,Ks,pi));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new fi,vg=new De(.5,.5),dl=new k,kr=class{constructor(e=new wi,t=new wi,n=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],f=r[4],m=r[5],g=r[6],v=r[7],y=r[8],S=r[9],l=r[10],h=r[11],d=r[12],x=r[13],p=r[14],_=r[15];if(s[0].setComponents(u-o,v-f,h-y,_-d).normalize(),s[1].setComponents(u+o,v+f,h+y,_+d).normalize(),s[2].setComponents(u+a,v+m,h+S,_+x).normalize(),s[3].setComponents(u-a,v-m,h-S,_-x).normalize(),n)s[4].setComponents(c,g,l,p).normalize(),s[5].setComponents(u-c,v-g,h-l,_-p).normalize();else if(s[4].setComponents(u-c,v-g,h-l,_-p).normalize(),t===Ai)s[5].setComponents(u+c,v+g,h+l,_+p).normalize();else if(t===Ur)s[5].setComponents(c,g,l,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=vg.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(dl.x=s.normal.x>0?e.max.x:e.min.x,dl.y=s.normal.y>0?e.max.y:e.min.y,dl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fl=class extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bl=new k,Ol=new k,Sd=new nt,Uo=new zr,pl=new fi,ih=new k,Td=new k,$o=class extends dn{constructor(e=new bt,t=new Fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bl.fromBufferAttribute(t,s-1),Ol.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bl.distanceTo(Ol);e.setAttribute("lineDistance",new Ye(n,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(s),pl.radius+=r,e.ray.intersectsSphere(pl)===!1)return;Sd.copy(s).invert(),Uo.copy(e.ray).applyMatrix4(Sd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,f=n.index,g=n.attributes.position;if(f!==null){let v=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let S=v,l=y-1;S<l;S+=u){let h=f.getX(S),d=f.getX(S+1),x=ml(this,e,Uo,c,h,d,S);x&&t.push(x)}if(this.isLineLoop){let S=f.getX(y-1),l=f.getX(v),h=ml(this,e,Uo,c,S,l,y-1);h&&t.push(h)}}else{let v=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let S=v,l=y-1;S<l;S+=u){let h=ml(this,e,Uo,c,S,S+1,S);h&&t.push(h)}if(this.isLineLoop){let S=ml(this,e,Uo,c,y-1,v,y-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ml(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Bl.fromBufferAttribute(a,s),Ol.fromBufferAttribute(a,r),t.distanceSqToSegment(Bl,Ol,ih,Td)>n)return;ih.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(ih);if(!(u<e.near||u>e.far))return{distance:u,point:Td.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Hr=class extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ed=new nt,dh=new zr,gl=new fi,vl=new k,Ko=class extends dn{constructor(e=new bt,t=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(s),gl.radius+=r,e.ray.intersectsSphere(gl)===!1)return;Ed.copy(s).invert(),dh.copy(e.ray).applyMatrix4(Ed);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,m=n.attributes.position;if(u!==null){let g=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let y=g,S=v;y<S;y++){let l=u.getX(y);vl.fromBufferAttribute(m,l),wd(vl,l,c,s,e,t,this)}}else{let g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let y=g,S=v;y<S;y++)vl.fromBufferAttribute(m,y),wd(vl,y,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wd(i,e,t,n,s,r,o){let a=dh.distanceSqToPoint(i);if(a<t){let c=new k;dh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Jo=class extends Hn{constructor(e=[],t=Es,n,s,r,o,a,c,u,f){super(e,t,n,s,r,o,a,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jn=class extends Hn{constructor(e,t,n,s,r,o,a,c,u){super(e,t,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _s=class extends Hn{constructor(e,t,n=Ci,s,r,o,a=fn,c=fn,u,f=zi,m=1){if(f!==zi&&f!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:e,height:t,depth:m};super(g,s,r,o,a,c,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},zl=class extends _s{constructor(e,t=Ci,n=Es,s,r,o=fn,a=fn,c,u=zi){let f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,n,s,r,o,a,c,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},jo=class extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qt=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],u=[],f=[],m=[],g=0,v=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(m,2));function y(S,l,h,d,x,p,_,T,E,M,b){let w=p/E,R=_/M,P=p/2,I=_/2,C=T/2,L=E+1,U=M+1,z=0,G=0,D=new k;for(let H=0;H<U;H++){let O=H*R-I;for(let K=0;K<L;K++){let oe=K*w-P;D[S]=oe*d,D[l]=O*x,D[h]=C,u.push(D.x,D.y,D.z),D[S]=0,D[l]=0,D[h]=T>0?1:-1,f.push(D.x,D.y,D.z),m.push(K/E),m.push(1-H/M),z+=1}}for(let H=0;H<M;H++)for(let O=0;O<E;O++){let K=g+O+L*H,oe=g+O+L*(H+1),Ve=g+(O+1)+L*(H+1),Ue=g+(O+1)+L*H;c.push(K,oe,Ue),c.push(oe,Ve,Ue),G+=6}a.addGroup(v,G,b),v+=G,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Xs=class i extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],u=new k,f=new De;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let m=0,g=3;m<=t;m++,g+=3){let v=n+m/t*s;u.x=e*Math.cos(v),u.y=e*Math.sin(v),o.push(u.x,u.y,u.z),a.push(0,0,1),f.x=(o[g]/e+1)/2,f.y=(o[g+1]/e+1)/2,c.push(f.x,f.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},di=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let f=[],m=[],g=[],v=[],y=0,S=[],l=n/2,h=0;d(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(v,2));function d(){let p=new k,_=new k,T=0,E=(t-e)/n;for(let M=0;M<=r;M++){let b=[],w=M/r,R=w*(t-e)+e;for(let P=0;P<=s;P++){let I=P/s,C=I*c+a,L=Math.sin(C),U=Math.cos(C);_.x=R*L,_.y=-w*n+l,_.z=R*U,m.push(_.x,_.y,_.z),p.set(L,E,U).normalize(),g.push(p.x,p.y,p.z),v.push(I,1-w),b.push(y++)}S.push(b)}for(let M=0;M<s;M++)for(let b=0;b<r;b++){let w=S[b][M],R=S[b+1][M],P=S[b+1][M+1],I=S[b][M+1];(e>0||b!==0)&&(f.push(w,R,I),T+=3),(t>0||b!==r-1)&&(f.push(R,P,I),T+=3)}u.addGroup(h,T,0),h+=T}function x(p){let _=y,T=new De,E=new k,M=0,b=p===!0?e:t,w=p===!0?1:-1;for(let P=1;P<=s;P++)m.push(0,l*w,0),g.push(0,w,0),v.push(.5,.5),y++;let R=y;for(let P=0;P<=s;P++){let C=P/s*c+a,L=Math.cos(C),U=Math.sin(C);E.x=b*U,E.y=l*w,E.z=b*L,m.push(E.x,E.y,E.z),g.push(0,w,0),T.x=L*.5+.5,T.y=U*.5*w+.5,v.push(T.x,T.y),y++}for(let P=0;P<s;P++){let I=_+P,C=R+P;p===!0?f.push(C,C+1,I):f.push(C+1,C,I),M+=3}u.addGroup(h,M,p===!0?1:2),h+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var kl=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),u(n),f(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(d){let x=new k,p=new k,_=new k;for(let T=0;T<t.length;T+=3)v(t[T+0],x),v(t[T+1],p),v(t[T+2],_),c(x,p,_,d)}function c(d,x,p,_){let T=_+1,E=[];for(let M=0;M<=T;M++){E[M]=[];let b=d.clone().lerp(p,M/T),w=x.clone().lerp(p,M/T),R=T-M;for(let P=0;P<=R;P++)P===0&&M===T?E[M][P]=b:E[M][P]=b.clone().lerp(w,P/R)}for(let M=0;M<T;M++)for(let b=0;b<2*(T-M)-1;b++){let w=Math.floor(b/2);b%2===0?(g(E[M][w+1]),g(E[M+1][w]),g(E[M][w])):(g(E[M][w+1]),g(E[M+1][w+1]),g(E[M+1][w]))}}function u(d){let x=new k;for(let p=0;p<r.length;p+=3)x.x=r[p+0],x.y=r[p+1],x.z=r[p+2],x.normalize().multiplyScalar(d),r[p+0]=x.x,r[p+1]=x.y,r[p+2]=x.z}function f(){let d=new k;for(let x=0;x<r.length;x+=3){d.x=r[x+0],d.y=r[x+1],d.z=r[x+2];let p=l(d)/2/Math.PI+.5,_=h(d)/Math.PI+.5;o.push(p,1-_)}y(),m()}function m(){for(let d=0;d<o.length;d+=6){let x=o[d+0],p=o[d+2],_=o[d+4],T=Math.max(x,p,_),E=Math.min(x,p,_);T>.9&&E<.1&&(x<.2&&(o[d+0]+=1),p<.2&&(o[d+2]+=1),_<.2&&(o[d+4]+=1))}}function g(d){r.push(d.x,d.y,d.z)}function v(d,x){let p=d*3;x.x=e[p+0],x.y=e[p+1],x.z=e[p+2]}function y(){let d=new k,x=new k,p=new k,_=new k,T=new De,E=new De,M=new De;for(let b=0,w=0;b<r.length;b+=9,w+=6){d.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),p.set(r[b+6],r[b+7],r[b+8]),T.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),M.set(o[w+4],o[w+5]),_.copy(d).add(x).add(p).divideScalar(3);let R=l(_);S(T,w+0,d,R),S(E,w+2,x,R),S(M,w+4,p,R)}}function S(d,x,p,_){_<0&&d.x===1&&(o[x]=d.x-1),p.x===0&&p.z===0&&(o[x]=_/2/Math.PI+.5)}function l(d){return Math.atan2(d.z,-d.x)}function h(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ct("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let f=n[s],g=n[s+1]-f,v=(o-f)/g;return(s+v)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new De:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new nt;for(let v=0;v<=e;v++){let y=v/e;s[v]=this.getTangentAt(y,new k)}r[0]=new k,o[0]=new k;let u=Number.MAX_VALUE,f=Math.abs(s[0].x),m=Math.abs(s[0].y),g=Math.abs(s[0].z);f<=u&&(u=f,n.set(1,0,0)),m<=u&&(u=m,n.set(0,1,0)),g<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let v=1;v<=e;v++){if(r[v]=r[v-1].clone(),o[v]=o[v-1].clone(),a.crossVectors(s[v-1],s[v]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(Et(s[v-1].dot(s[v]),-1,1));r[v].applyMatrix4(c.makeRotationAxis(a,y))}o[v].crossVectors(s[v],r[v])}if(t===!0){let v=Math.acos(Et(r[0].dot(r[e]),-1,1));v/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(v=-v);for(let y=1;y<=e;y++)r[y].applyMatrix4(c.makeRotationAxis(s[y],v*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vr=class extends ri{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new De){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),m=Math.sin(this.aRotation),g=c-this.aX,v=u-this.aY;c=g*f-v*m+this.aX,u=g*m+v*f+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hl=class extends Vr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,u){s(o,a,u*(a-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,u,f,m){let g=(o-r)/u-(a-r)/(u+f)+(a-o)/f,v=(a-o)/f-(c-o)/(f+m)+(c-a)/m;g*=f,v*=f,s(o,a,g,v)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ad=new k,Rd=new k,sh=new Vh,rh=new Vh,oh=new Vh,Vl=class extends ri{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,f;this.closed||a>0?u=s[(a-1)%r]:(Rd.subVectors(s[0],s[1]).add(s[0]),u=Rd);let m=s[a%r],g=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Ad.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Ad),this.curveType==="centripetal"||this.curveType==="chordal"){let v=this.curveType==="chordal"?.5:.25,y=Math.pow(u.distanceToSquared(m),v),S=Math.pow(m.distanceToSquared(g),v),l=Math.pow(g.distanceToSquared(f),v);S<1e-4&&(S=1),y<1e-4&&(y=S),l<1e-4&&(l=S),sh.initNonuniformCatmullRom(u.x,m.x,g.x,f.x,y,S,l),rh.initNonuniformCatmullRom(u.y,m.y,g.y,f.y,y,S,l),oh.initNonuniformCatmullRom(u.z,m.z,g.z,f.z,y,S,l)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(u.x,m.x,g.x,f.x,this.tension),rh.initCatmullRom(u.y,m.y,g.y,f.y,this.tension),oh.initCatmullRom(u.z,m.z,g.z,f.z,this.tension));return n.set(sh.calc(c),rh.calc(c),oh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function xg(i,e){let t=1-i;return t*t*e}function _g(i,e){return 2*(1-i)*i*e}function yg(i,e){return i*i*e}function Bo(i,e,t,n){return xg(i,e)+_g(i,t)+yg(i,n)}function Mg(i,e){let t=1-i;return t*t*t*e}function bg(i,e){let t=1-i;return 3*t*t*i*e}function Sg(i,e){return 3*(1-i)*i*i*e}function Tg(i,e){return i*i*i*e}function Oo(i,e,t,n,s){return Mg(i,e)+bg(i,t)+Sg(i,n)+Tg(i,s)}var Qo=class extends ri{constructor(e=new De,t=new De,n=new De,s=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new De){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oo(e,s.x,r.x,o.x,a.x),Oo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gl=class extends ri{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oo(e,s.x,r.x,o.x,a.x),Oo(e,s.y,r.y,o.y,a.y),Oo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ea=class extends ri{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends ri{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends ri{constructor(e=new De,t=new De,n=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new De){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Bo(e,s.x,r.x,o.x),Bo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xl=class extends ri{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Bo(e,s.x,r.x,o.x),Bo(e,s.y,r.y,o.y),Bo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],u=s[o],f=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(Cd(a,c.x,u.x,f.x,m.x),Cd(a,c.y,u.y,f.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new De().fromArray(s))}return this}},Pd=Object.freeze({__proto__:null,ArcCurve:Hl,CatmullRomCurve3:Vl,CubicBezierCurve:Qo,CubicBezierCurve3:Gl,EllipseCurve:Vr,LineCurve:ea,LineCurve3:Wl,QuadraticBezierCurve:ta,QuadraticBezierCurve3:Xl,SplineCurve:na}),ql=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){let f=c[u];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Pd[s.type]().fromJSON(s))}return this}},ia=class extends ql{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ea(this.currentPoint.clone(),new De(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ta(this.currentPoint.clone(),new De(e,t),new De(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Qo(this.currentPoint.clone(),new De(e,t),new De(n,s),new De(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new na(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let u=new Vr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let m=u.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(u);let f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Gr=class extends ia{constructor(e){super(e),this.uuid=jr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ia().fromJSON(s))}return this}};function Eg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=E0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,u;if(n&&(r=Pg(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let f=a,m=c;for(let g=t;g<s;g+=t){let v=i[g],y=i[g+1];v<a&&(a=v),y<c&&(c=y),v>f&&(f=v),y>m&&(m=y)}u=Math.max(f-a,m-c),u=u!==0?32767/u:0}return sa(r,o,t,a,c,u,0),o}function E0(i,e,t,n,s){let r;if(s===Hg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Id(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Id(o/n|0,i[o],i[o+1],r);return r&&Wr(r,r.next)&&(oa(r),r=r.next),r}function qs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wr(t,t.next)||en(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ug(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,u=i.next;if(r?Ag(i,n,s,r):wg(i)){e.push(c.i,i.i,u.i),oa(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=Rg(qs(i),e),sa(i,e,t,n,s,r,2)):o===2&&Cg(i,e,t,n,s,r):sa(qs(i),e,t,n,s,r,1);break}}}function wg(i){let e=i.prev,t=i,n=i.next;if(en(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,u=n.y,f=Math.min(s,r,o),m=Math.min(a,c,u),g=Math.max(s,r,o),v=Math.max(a,c,u),y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=g&&y.y>=m&&y.y<=v&&Fo(s,a,r,c,o,u,y.x,y.y)&&en(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Ag(i,e,t,n){let s=i.prev,r=i,o=i.next;if(en(s,r,o)>=0)return!1;let a=s.x,c=r.x,u=o.x,f=s.y,m=r.y,g=o.y,v=Math.min(a,c,u),y=Math.min(f,m,g),S=Math.max(a,c,u),l=Math.max(f,m,g),h=ph(v,y,e,t,n),d=ph(S,l,e,t,n),x=i.prevZ,p=i.nextZ;for(;x&&x.z>=h&&p&&p.z<=d;){if(x.x>=v&&x.x<=S&&x.y>=y&&x.y<=l&&x!==s&&x!==o&&Fo(a,f,c,m,u,g,x.x,x.y)&&en(x.prev,x,x.next)>=0||(x=x.prevZ,p.x>=v&&p.x<=S&&p.y>=y&&p.y<=l&&p!==s&&p!==o&&Fo(a,f,c,m,u,g,p.x,p.y)&&en(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;x&&x.z>=h;){if(x.x>=v&&x.x<=S&&x.y>=y&&x.y<=l&&x!==s&&x!==o&&Fo(a,f,c,m,u,g,x.x,x.y)&&en(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;p&&p.z<=d;){if(p.x>=v&&p.x<=S&&p.y>=y&&p.y<=l&&p!==s&&p!==o&&Fo(a,f,c,m,u,g,p.x,p.y)&&en(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Rg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Wr(n,s)&&A0(n,t,t.next,s)&&ra(n,s)&&ra(s,n)&&(e.push(n.i,t.i,s.i),oa(t),oa(t.next),t=i=s),t=t.next}while(t!==i);return qs(t)}function Cg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Og(o,a)){let c=R0(o,a);o=qs(o,o.next),c=qs(c,c.next),sa(o,e,t,n,s,r,0),sa(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Pg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,u=E0(i,a,c,n,!1);u===u.next&&(u.steiner=!0),s.push(Bg(u))}s.sort(Ig);for(let r=0;r<s.length;r++)t=Lg(s[r],t);return t}function Ig(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Lg(i,e){let t=Dg(i,e);if(!t)return e;let n=R0(t,i);return qs(n,n.next),qs(t,t.next)}function Dg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Wr(i,t))return t;do{if(Wr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let m=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>r&&(r=m,o=t.x<t.next.x?t:t.next,m===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,u=o.y,f=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&w0(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){let m=Math.abs(s-t.y)/(n-t.x);ra(t,i)&&(m<f||m===f&&(t.x>o.x||t.x===o.x&&Ng(o,t)))&&(o=t,f=m)}t=t.next}while(t!==a);return o}function Ng(i,e){return en(i.prev,i,e.prev)<0&&en(e.next,i,i.next)<0}function Ug(i,e,t,n){let s=i;do s.z===0&&(s.z=ph(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fg(s)}function Fg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ph(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Bg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function w0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Fo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&w0(i,e,t,n,s,r,o,a)}function Og(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zg(i,e)&&(ra(i,e)&&ra(e,i)&&kg(i,e)&&(en(i.prev,i,e.prev)||en(i,e.prev,e))||Wr(i,e)&&en(i.prev,i,i.next)>0&&en(e.prev,e,e.next)>0)}function en(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wr(i,e){return i.x===e.x&&i.y===e.y}function A0(i,e,t,n){let s=_l(en(i,e,t)),r=_l(en(i,e,n)),o=_l(en(t,n,i)),a=_l(en(t,n,e));return!!(s!==r&&o!==a||s===0&&xl(i,t,e)||r===0&&xl(i,n,e)||o===0&&xl(t,i,n)||a===0&&xl(t,e,n))}function xl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _l(i){return i>0?1:i<0?-1:0}function zg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&A0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ra(i,e){return en(i.prev,i,i.next)<0?en(i,e,i.next)>=0&&en(i,i.prev,e)>=0:en(i,e,i.prev)<0||en(i,i.next,e)<0}function kg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function R0(i,e){let t=mh(i.i,i.x,i.y),n=mh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Id(i,e,t,n){let s=mh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gh=class{static triangulate(e,t,n=2){return Eg(e,t,n)}},Lr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ld(e),Dd(n,e);let o=e.length;t.forEach(Ld);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Dd(n,t[c]);let a=gh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ld(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Dd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var aa=class i extends kl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var rn=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),u=a+1,f=c+1,m=e/a,g=t/c,v=[],y=[],S=[],l=[];for(let h=0;h<f;h++){let d=h*g-o;for(let x=0;x<u;x++){let p=x*m-r;y.push(p,-d,0),S.push(0,0,1),l.push(x/a),l.push(1-h/c)}}for(let h=0;h<c;h++)for(let d=0;d<a;d++){let x=d+u*h,p=d+u*(h+1),_=d+1+u*(h+1),T=d+1+u*h;v.push(x,p,T),v.push(p,_,T)}this.setIndex(v),this.setAttribute("position",new Ye(y,3)),this.setAttribute("normal",new Ye(S,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var la=class i extends bt{constructor(e=new Gr([new De(0,.5),new De(-.5,-.5),new De(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let f=0;f<e.length;f++)u(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(o,2));function u(f){let m=s.length/3,g=f.extractPoints(t),v=g.shape,y=g.holes;Lr.isClockWise(v)===!1&&(v=v.reverse());for(let l=0,h=y.length;l<h;l++){let d=y[l];Lr.isClockWise(d)===!0&&(y[l]=d.reverse())}let S=Lr.triangulateShape(v,y);for(let l=0,h=y.length;l<h;l++){let d=y[l];v=v.concat(d)}for(let l=0,h=v.length;l<h;l++){let d=v[l];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let l=0,h=S.length;l<h;l++){let d=S[l],x=d[0]+m,p=d[1]+m,_=d[2]+m;n.push(x,p,_),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Vg(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Vg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ca=class i extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),u=0,f=[],m=new k,g=new k,v=[],y=[],S=[],l=[];for(let h=0;h<=n;h++){let d=[],x=h/n,p=o+x*a,_=e*Math.cos(p),T=Math.sqrt(e*e-_*_),E=0;h===0&&o===0?E=.5/t:h===n&&c===Math.PI&&(E=-.5/t);for(let M=0;M<=t;M++){let b=M/t,w=s+b*r;m.x=-T*Math.cos(w),m.y=_,m.z=T*Math.sin(w),y.push(m.x,m.y,m.z),g.copy(m).normalize(),S.push(g.x,g.y,g.z),l.push(b+E,1-x),d.push(u++)}f.push(d)}for(let h=0;h<n;h++)for(let d=0;d<t;d++){let x=f[h][d+1],p=f[h][d],_=f[h+1][d],T=f[h+1][d+1];(h!==0||o>0)&&v.push(x,p,T),(h!==n-1||c<Math.PI)&&v.push(p,_,T)}this.setIndex(v),this.setAttribute("position",new Ye(y,3)),this.setAttribute("normal",new Ye(S,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ua=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],f=[],m=[],g=new k,v=new k,y=new k;for(let S=0;S<=n;S++){let l=o+S/n*a;for(let h=0;h<=s;h++){let d=h/s*r;v.x=(e+t*Math.cos(l))*Math.cos(d),v.y=(e+t*Math.cos(l))*Math.sin(d),v.z=t*Math.sin(l),u.push(v.x,v.y,v.z),g.x=e*Math.cos(d),g.y=e*Math.sin(d),y.subVectors(v,g).normalize(),f.push(y.x,y.y,y.z),m.push(h/s),m.push(S/n)}}for(let S=1;S<=n;S++)for(let l=1;l<=s;l++){let h=(s+1)*S+l-1,d=(s+1)*(S-1)+l-1,x=(s+1)*(S-1)+l,p=(s+1)*S+l;c.push(h,d,p),c.push(d,x,p)}this.setIndex(c),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Nd(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Nd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Bn(i){let e={};for(let t=0;t<i.length;t++){let n=Js(i[t]);for(let s in n)e[s]=n[s]}return e}function Nd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var js={clone:Js,merge:Bn},Wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Gg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new De().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yl=class extends Mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var on=class extends Hi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xr=class extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zl=class extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ah(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ys=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$l=class extends ys{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=e,a=2*t-n;break;case fh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hh:o=e,c=2*n-t;break;case fh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let u=(n-t)*.5,f=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,v=this._weightNext,y=(n-t)/(s-t),S=y*y,l=S*y,h=-g*l+2*g*S-g*y,d=(1+g)*l+(-1.5-2*g)*S+(-.5+g)*y+1,x=(-1-v)*l+(1.5+v)*S+.5*y,p=v*l-v*S;for(let _=0;_!==a;++_)r[_]=h*o[f+_]+d*o[u+_]+x*o[c+_]+p*o[m+_];return r}},Kl=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=(n-t)/(s-t),m=1-f;for(let g=0;g!==a;++g)r[g]=o[u+g]*m+o[c+g]*f;return r}},Jl=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jl=class extends ys{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=this.inTangents,m=this.outTangents;if(!f||!m){let y=(n-t)/(s-t),S=1-y;for(let l=0;l!==a;++l)r[l]=o[u+l]*S+o[c+l]*y;return r}let g=a*2,v=e-1;for(let y=0;y!==a;++y){let S=o[u+y],l=o[c+y],h=v*g+y*2,d=m[h],x=m[h+1],p=e*g+y*2,_=f[p],T=f[p+1],E=Yg(n,t,d,_,s);r[y]=C0(E,S,x,T,l)}return r}};function C0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function qg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Yg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=C0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=qg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var oi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ah(e.settings)&&(n.settings={inTangents:Rr(e.settings.inTangents,Array),outTangents:Rr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zo:t=this.InterpolantFactoryMethodDiscrete;break;case Ll:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break;case ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ct("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return Ll;case this.InterpolantFactoryMethodSmooth:return bl;case this.InterpolantFactoryMethodBezier:return ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ah(this.settings)&&(Ud(this.settings.inTangents,e),Ud(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){mt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){mt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Jm(s))for(let a=0,c=s.length;a!==c;++a){let u=s[a];if(isNaN(u)){mt("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,u=e[a],f=e[a+1];if(u!==f&&(a!==1||u!==e[0]))if(s)c=!0;else{let m=a*n,g=m-n,v=m+n;for(let y=0;y!==n;++y){let S=t[m+y];if(S!==t[g+y]||S!==t[v+y]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let m=a*n,g=o*n;for(let v=0;v!==n;++v)t[g+v]=t[m+v]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ah(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ud(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Ll;var Ms=class extends oi{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=zo;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}};Ql.prototype.ValueTypeName="color";var ec=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}};ec.prototype.ValueTypeName="number";var tc=class extends ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),u=e*a;for(let f=u+a;u!==f;u+=4)Tn.slerpFlat(r,0,o,u-a,o,u,c);return r}},ha=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends oi{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=zo;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends oi{constructor(e,t,n,s){super(e,t,n,s)}};nc.prototype.ValueTypeName="vector";var ic=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,m){return u.push(f,m),this},this.removeHandler=function(f){let m=u.indexOf(f);return m!==-1&&u.splice(m,2),this},this.getHandler=function(f){for(let m=0,g=u.length;m<g;m+=2){let v=u[m],y=u[m+1];if(v.global&&(v.lastIndex=0),v.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},P0=new ic,sc=class{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var qr=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fa=class extends qr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},lh=new nt,Fd=new k,Bd=new k,da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fd),Bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(lh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Ur||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yl=new k,Ml=new Tn,Bi=new k,ns=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yl,Ml,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Ml,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yl,Ml,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Ml,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new k,Od=new De,zd=new De,In=class extends ns{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,Od,zd),t.subVectors(zd,Od)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fu*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vh=class extends da{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Go*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},pa=class extends qr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Ss=class extends ns{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xh=class extends da{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vi=class extends bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Cr=-90,Pr=1,rc=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new In(Cr,Pr,e,t);s.layers=this.layers,this.add(s);let r=new In(Cr,Pr,e,t);r.layers=this.layers,this.add(r);let o=new In(Cr,Pr,e,t);o.layers=this.layers,this.add(o);let a=new In(Cr,Pr,e,t);a.layers=this.layers,this.add(a);let c=new In(Cr,Pr,e,t);c.layers=this.layers,this.add(c);let u=new In(Cr,Pr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let u of t)this.remove(u);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,u,f]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let l=!1;e.isWebGLRenderer===!0?l=e.state.buffers.depth.getReversed():l=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,g,v),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},oc=class extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ma=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Zg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Zg(){this._document.hidden===!1&&this.reset()}var Wh="\\[\\]\\.:\\/",$g=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",Kg="[^"+Wh.replace("\\.","")+"]",Jg=/((?:WC+[\/:])*)/.source.replace("WC",Xh),jg=/(WCOD+)?/.source.replace("WCOD",Kg),Qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),e1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),t1=new RegExp("^"+Jg+jg+Qg+e1+"$"),n1=["material","materials","bones","map"],_h=class{constructor(e,t,n){let s=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($g,"")}static parseTrackName(e){let t=t1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);n1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=_h;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hM=new Float32Array(1);var Jh=class Jh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Jh.prototype.isMatrix2=!0;var yh=Jh;function qh(i,e,t,n){let s=i1(n);switch(t){case Oh:return i*e;case Ks:return i*e/s.components*s.byteLength;case pc:return i*e/s.components*s.byteLength;case As:return i*e*2/s.components*s.byteLength;case mc:return i*e*2/s.components*s.byteLength;case zh:return i*e*3/s.components*s.byteLength;case jn:return i*e*4/s.components*s.byteLength;case gc:return i*e*4/s.components*s.byteLength;case _a:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:case yc:return Math.max(i,16)*Math.max(e,8)/4;case vc:case _c:return Math.max(i,8)*Math.max(e,8)/2;case Mc:case bc:case Tc:case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Sa:case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hc:case Vc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ta:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i1(i){switch(i){case Fn:case Nh:return{byteLength:1,components:1};case Kr:case Uh:case pn:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case Ci:case hc:case pi:return{byteLength:4,components:1};case Fh:case Bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function j0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function u1(i){let e=new WeakMap;function t(a,c){let u=a.array,f=a.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,u,f),a.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,u){let f=c.array,m=c.updateRanges;if(i.bindBuffer(u,a),m.length===0)i.bufferSubData(u,0,f);else{m.sort((v,y)=>v.start-y.start);let g=0;for(let v=1;v<m.length;v++){let y=m[g],S=m[v];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++g,m[g]=S)}m.length=g+1;for(let v=0,y=m.length;v<y;v++){let S=m[v];i.bufferSubData(u,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var h1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f1=`#ifdef USE_ALPHAHASH
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
#endif`,d1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v1=`#ifdef USE_AOMAP
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
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_1=`#ifdef USE_BATCHING
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
#endif`,y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,E1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,N1=`#define PI 3.141592653589793
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
} // validated`,U1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F1=`vec3 transformedNormal = objectNormal;
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
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j1=`#ifdef USE_GRADIENTMAP
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
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lv=`PhysicalMaterial material;
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
#endif`,cv=`uniform sampler2D dfgLUT;
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
}`,uv=`
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
#endif`,hv=`#if defined( RE_IndirectDiffuse )
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
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mv=`#if defined( USE_POINTS_UV )
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
#endif`,bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
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
#endif`,Rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
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
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kv=`float getShadowMask() {
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
}`,Jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
}`,_x=`#define DISTANCE
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
}`,yx=`#define DISTANCE
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`uniform float scale;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ax=`#define LAMBERT
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
}`,Rx=`#define LAMBERT
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Lx=`#define NORMAL
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
}`,Dx=`#define PHONG
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
}`,Nx=`#define PHONG
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
}`,Ux=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,Bx=`#define TOON
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
}`,Ox=`#define TOON
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
}`,zx=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Vx=`uniform vec3 color;
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
}`,Gx=`uniform float rotation;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:h1,alphahash_pars_fragment:f1,alphamap_fragment:d1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:g1,aomap_fragment:v1,aomap_pars_fragment:x1,batching_pars_vertex:_1,batching_vertex:y1,begin_vertex:M1,beginnormal_vertex:b1,bsdfs:S1,iridescence_fragment:T1,bumpmap_pars_fragment:E1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:C1,color_fragment:P1,color_pars_fragment:I1,color_pars_vertex:L1,color_vertex:D1,common:N1,cube_uv_reflection_fragment:U1,defaultnormal_vertex:F1,displacementmap_pars_vertex:B1,displacementmap_vertex:O1,emissivemap_fragment:z1,emissivemap_pars_fragment:k1,colorspace_fragment:H1,colorspace_pars_fragment:V1,envmap_fragment:G1,envmap_common_pars_fragment:W1,envmap_pars_fragment:X1,envmap_pars_vertex:q1,envmap_physical_pars_fragment:iv,envmap_vertex:Y1,fog_vertex:Z1,fog_pars_vertex:$1,fog_fragment:K1,fog_pars_fragment:J1,gradientmap_pars_fragment:j1,lightmap_pars_fragment:Q1,lights_lambert_fragment:ev,lights_lambert_pars_fragment:tv,lights_pars_begin:nv,lights_toon_fragment:sv,lights_toon_pars_fragment:rv,lights_phong_fragment:ov,lights_phong_pars_fragment:av,lights_physical_fragment:lv,lights_physical_pars_fragment:cv,lights_fragment_begin:uv,lights_fragment_maps:hv,lights_fragment_end:fv,lightprobes_pars_fragment:dv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:vv,map_fragment:xv,map_pars_fragment:_v,map_particle_fragment:yv,map_particle_pars_fragment:Mv,metalnessmap_fragment:bv,metalnessmap_pars_fragment:Sv,morphinstance_vertex:Tv,morphcolor_vertex:Ev,morphnormal_vertex:wv,morphtarget_pars_vertex:Av,morphtarget_vertex:Rv,normal_fragment_begin:Cv,normal_fragment_maps:Pv,normal_pars_fragment:Iv,normal_pars_vertex:Lv,normal_vertex:Dv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Bv,iridescence_pars_fragment:Ov,opaque_fragment:zv,packing:kv,premultiplied_alpha_fragment:Hv,project_vertex:Vv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:Yv,shadowmap_pars_vertex:Zv,shadowmap_vertex:$v,shadowmask_pars_fragment:Kv,skinbase_vertex:Jv,skinning_pars_vertex:jv,skinning_vertex:Qv,skinnormal_vertex:ex,specularmap_fragment:tx,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:sx,transmission_fragment:rx,transmission_pars_fragment:ox,uv_pars_fragment:ax,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:hx,background_frag:fx,backgroundCube_vert:dx,backgroundCube_frag:px,cube_vert:mx,cube_frag:gx,depth_vert:vx,depth_frag:xx,distance_vert:_x,distance_frag:yx,equirect_vert:Mx,equirect_frag:bx,linedashed_vert:Sx,linedashed_frag:Tx,meshbasic_vert:Ex,meshbasic_frag:wx,meshlambert_vert:Ax,meshlambert_frag:Rx,meshmatcap_vert:Cx,meshmatcap_frag:Px,meshnormal_vert:Ix,meshnormal_frag:Lx,meshphong_vert:Dx,meshphong_frag:Nx,meshphysical_vert:Ux,meshphysical_frag:Fx,meshtoon_vert:Bx,meshtoon_frag:Ox,points_vert:zx,points_frag:kx,shadow_vert:Hx,shadow_frag:Vx,sprite_vert:Gx,sprite_frag:Wx},He={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Wi={basic:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Bn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Bn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ae(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Bn([He.points,He.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Bn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Bn([He.common,He.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Bn([He.sprite,He.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Bn([He.common,He.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Bn([He.lights,He.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Wi.physical={uniforms:Bn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Kc={r:0,b:0,g:0},Xx=new nt,Q0=new gt;Q0.set(-1,0,0,0,1,0,0,0,1);function qx(i,e,t,n,s,r){let o=new Ae(0),a=s===!0?0:1,c,u,f=null,m=0,g=null;function v(d){let x=d.isScene===!0?d.background:null;if(x&&x.isTexture){let p=d.backgroundBlurriness>0;x=e.get(x,p)}return x}function y(d){let x=!1,p=v(d);p===null?l(o,a):p&&p.isColor&&(l(p,1),x=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(d,x){let p=v(x);p&&(p.isCubeTexture||p.mapping===va)?(u===void 0&&(u=new vt(new qt(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Js(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(_,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=p,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(x.backgroundRotation)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Q0),u.material.toneMapped=wt.getTransfer(p.colorSpace)!==Ft,(f!==p||m!==p.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=p,m=p.version,g=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new vt(new rn(2,2),new Mt({name:"BackgroundMaterial",uniforms:Js(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=wt.getTransfer(p.colorSpace)!==Ft,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(f!==p||m!==p.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,f=p,m=p.version,g=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function l(d,x){d.getRGB(Kc,Gh(i)),t.buffers.color.setClear(Kc.r,Kc.g,Kc.b,x,r)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,x=1){o.set(d),a=x,l(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,l(o,a)},render:y,addToRenderList:S,dispose:h}}function Yx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,o=!1;function a(R,P,I,C,L){let U=!1,z=m(R,C,I,P);r!==z&&(r=z,u(r.object)),U=v(R,C,I,L),U&&y(R,C,I,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,p(R,P,I,C),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function u(R){return i.bindVertexArray(R)}function f(R){return i.deleteVertexArray(R)}function m(R,P,I,C){let L=C.wireframe===!0,U=n[P.id];U===void 0&&(U={},n[P.id]=U);let z=R.isInstancedMesh===!0?R.id:0,G=U[z];G===void 0&&(G={},U[z]=G);let D=G[I.id];D===void 0&&(D={},G[I.id]=D);let H=D[L];return H===void 0&&(H=g(c()),D[L]=H),H}function g(R){let P=[],I=[],C=[];for(let L=0;L<t;L++)P[L]=0,I[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:C,object:R,attributes:{},index:null}}function v(R,P,I,C){let L=r.attributes,U=P.attributes,z=0,G=I.getAttributes();for(let D in G)if(G[D].location>=0){let O=L[D],K=U[D];if(K===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function y(R,P,I,C){let L={},U=P.attributes,z=0,G=I.getAttributes();for(let D in G)if(G[D].location>=0){let O=U[D];O===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(O=R.instanceColor));let K={};K.attribute=O,O&&O.data&&(K.data=O.data),L[D]=K,z++}r.attributes=L,r.attributesNum=z,r.index=C}function S(){let R=r.newAttributes;for(let P=0,I=R.length;P<I;P++)R[P]=0}function l(R){h(R,0)}function h(R,P){let I=r.newAttributes,C=r.enabledAttributes,L=r.attributeDivisors;I[R]=1,C[R]===0&&(i.enableVertexAttribArray(R),C[R]=1),L[R]!==P&&(i.vertexAttribDivisor(R,P),L[R]=P)}function d(){let R=r.newAttributes,P=r.enabledAttributes;for(let I=0,C=P.length;I<C;I++)P[I]!==R[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function x(R,P,I,C,L,U,z){z===!0?i.vertexAttribIPointer(R,P,I,L,U):i.vertexAttribPointer(R,P,I,C,L,U)}function p(R,P,I,C){S();let L=C.attributes,U=I.getAttributes(),z=P.defaultAttributeValues;for(let G in U){let D=U[G];if(D.location>=0){let H=L[G];if(H===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){let O=H.normalized,K=H.itemSize,oe=e.get(H);if(oe===void 0)continue;let Ve=oe.buffer,Ue=oe.type,xe=oe.bytesPerElement,Z=Ue===i.INT||Ue===i.UNSIGNED_INT||H.gpuType===hc;if(H.isInterleavedBufferAttribute){let j=H.data,ue=j.stride,Pe=H.offset;if(j.isInstancedInterleavedBuffer){for(let Se=0;Se<D.locationSize;Se++)h(D.location+Se,j.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Se=0;Se<D.locationSize;Se++)l(D.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Se=0;Se<D.locationSize;Se++)x(D.location+Se,K/D.locationSize,Ue,O,ue*xe,(Pe+K/D.locationSize*Se)*xe,Z)}else{if(H.isInstancedBufferAttribute){for(let j=0;j<D.locationSize;j++)h(D.location+j,H.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let j=0;j<D.locationSize;j++)l(D.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let j=0;j<D.locationSize;j++)x(D.location+j,K/D.locationSize,Ue,O,K*xe,K/D.locationSize*j*xe,Z)}}else if(z!==void 0){let O=z[G];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(D.location,O);break;case 3:i.vertexAttrib3fv(D.location,O);break;case 4:i.vertexAttrib4fv(D.location,O);break;default:i.vertexAttrib1fv(D.location,O)}}}}d()}function _(){b();for(let R in n){let P=n[R];for(let I in P){let C=P[I];for(let L in C){let U=C[L];for(let z in U)f(U[z].object),delete U[z];delete C[L]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let P=n[R.id];for(let I in P){let C=P[I];for(let L in C){let U=C[L];for(let z in U)f(U[z].object),delete U[z];delete C[L]}}delete n[R.id]}function E(R){for(let P in n){let I=n[P];for(let C in I){let L=I[C];if(L[R.id]===void 0)continue;let U=L[R.id];for(let z in U)f(U[z].object),delete U[z];delete L[R.id]}}}function M(R){for(let P in n){let I=n[P],C=R.isInstancedMesh===!0?R.id:0,L=I[C];if(L!==void 0){for(let U in L){let z=L[U];for(let G in z)f(z[G].object),delete z[G];delete L[U]}delete I[C],Object.keys(I).length===0&&delete n[P]}}}function b(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:_,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:E,initAttributes:S,enableAttribute:l,disableUnusedAttributes:d}}function Zx(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];t.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $x(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==jn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let M=E===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Fn&&E!==pi&&!M&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",f=c(u);f!==u&&(ct("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),l=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:l,maxAttributes:h,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:p,maxSamples:_,samples:T}}function Kx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new wi,a=new gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){let v=m.length!==0||g||n!==0||s;return s=g,n=m.length,v},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,g){t=f(m,g,0)},this.setState=function(m,g,v){let y=m.clippingPlanes,S=m.clipIntersection,l=m.clipShadows,h=i.get(m);if(!s||y===null||y.length===0||r&&!l)r?f(null):u();else{let d=r?0:n,x=d*4,p=h.clippingState||null;c.value=p,p=f(y,g,x,v);for(let _=0;_!==x;++_)p[_]=t[_];h.clippingState=p,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=d}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,g,v,y){let S=m!==null?m.length:0,l=null;if(S!==0){if(l=c.value,y!==!0||l===null){let h=v+S*4,d=g.matrixWorldInverse;a.getNormalMatrix(d),(l===null||l.length<h)&&(l=new Float32Array(h));for(let x=0,p=v;x!==S;++x,p+=4)o.copy(m[x]).applyMatrix4(d,a),o.normal.toArray(l,p),l[p+3]=o.constant}c.value=l,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,l}}var eo=4,Jx=6,jx=20,Qx=256,Ea=new Ss,I0=new Ae,jh=null,Qh=0,ef=0,tf=!1,e_=new k,Qs=new k,jc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=e_}=r;jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,Qh,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:pn,format:jn,colorSpace:ko,depthBuffer:!1},s=L0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=t_(r)),this._blurMaterial=i_(r,e,t),this._ggxMaterial=n_(r,e,t)}return s}_compileMaterial(e){let t=new vt(new bt,e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,s,r){let c=new In(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(I0),m.toneMapping=Ri,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new qt,new cn({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,l=S.material,h=!1,d=e.background;d?d.isColor&&(l.color.copy(d),e.background=null,h=!0):(l.color.copy(I0),h=!0);for(let x=0;x<6;x++){let p=x%3;p===0?(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[x],r.y,r.z)):p===1?(c.up.set(0,0,u[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[x],r.z)):(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[x]));let _=this._cubeSize;Qr(s,p*_,x>2?_:0,_,_),m.setRenderTarget(s),h&&m.render(S,c),m.render(e,c)}m.toneMapping=v,m.autoClear=g,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Es||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ea)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,u=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),m=Math.sqrt(u*u-f*f),g=u*1.25,v=m*g,{_lodMax:y}=this,S=this._sizeLods[n],l=3*S*(n>y-eo?n-y+eo:0),h=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=v,c.mipInt.value=y-t,Qr(r,l,h,3*S,2*S),s.setRenderTarget(r),s.render(a,Ea),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=y-n,Qr(e,l,h,3*S,2*S),s.setRenderTarget(e),s.render(a,Ea)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],m=3*f*(s>this._lodMax-eo?s-this._lodMax+eo:0),g=4*(this._cubeSize-f);Qr(t,m,g,3*f,2*f),o.setRenderTarget(t),o.render(c,Ea)}};function t_(i){let e=[],t=[],n=i,s=i-eo+1+Jx;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,u=1+a,f=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,g=6,v=3,y=new Float32Array(v*g*m),S=new Float32Array(v*g*m);for(let h=0;h<m;h++){let d=h%3*2/3-1,x=h>2?0:-1,p=[d,x,0,d+2/3,x,0,d+2/3,x+1,0,d,x,0,d+2/3,x+1,0,d,x+1,0];y.set(p,v*g*h);for(let _=0;_<g;_++){let T=f[_*2]*2-1,E=f[_*2+1]*2-1;h===0?Qs.set(1,E,T):h===1?Qs.set(-T,1,-E):h===2?Qs.set(-T,E,1):h===3?Qs.set(-1,E,-T):h===4?Qs.set(-T,-1,E):Qs.set(T,E,-1),Qs.toArray(S,(h*g+_)*v)}}let l=new bt;l.setAttribute("position",new Gt(y,v)),l.setAttribute("outputDirection",new Gt(S,v)),t.push(new vt(l,null)),n>eo&&n--}return{lodMeshes:t,sizeLods:e}}function L0(i,e,t){let n=new zt(i,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function n_(i,e,t){return new Mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function i_(i,e,t){return new Mt({name:"SphericalGaussianBlur",defines:{SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function D0(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function N0(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qc=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Gn});r.uniforms.tEquirect.value=t;let o=new vt(s,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Wt),new rc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function s_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(g,v=!1){return g==null?null:v?o(g):r(g)}function r(g){if(g&&g.isTexture){let v=g.mapping;if(v===lc||v===cc)if(e.has(g)){let y=e.get(g).texture;return a(y,g.mapping)}else{let y=g.image;if(y&&y.height>0){let S=new Qc(y.height);return S.fromEquirectangularTexture(i,g),e.set(g,S),g.addEventListener("dispose",u),a(S.texture,g.mapping)}else return null}}return g}function o(g){if(g&&g.isTexture){let v=g.mapping,y=v===lc||v===cc,S=v===Es||v===$s;if(y||S){let l=t.get(g),h=l!==void 0?l.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==h)return n===null&&(n=new jc(i)),l=y?n.fromEquirectangular(g,l):n.fromCubemap(g,l),l.texture.pmremVersion=g.pmremVersion,t.set(g,l),l.texture;if(l!==void 0)return l.texture;{let d=g.image;return y&&d&&d.height>0||S&&d&&c(d)?(n===null&&(n=new jc(i)),l=y?n.fromEquirectangular(g):n.fromCubemap(g),l.texture.pmremVersion=g.pmremVersion,t.set(g,l),g.addEventListener("dispose",f),l.texture):null}}}return g}function a(g,v){return v===lc?g.mapping=Es:v===cc&&(g.mapping=$s),g}function c(g){let v=0,y=6;for(let S=0;S<y;S++)g[S]!==void 0&&v++;return v===y}function u(g){let v=g.target;v.removeEventListener("dispose",u);let y=e.get(v);y!==void 0&&(e.delete(v),y.dispose())}function f(g){let v=g.target;v.removeEventListener("dispose",f);let y=t.get(v);y!==void 0&&(t.delete(v),y.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function r_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gs("WebGLRenderer: "+n+" extension not supported."),s}}}function o_(i,e,t,n){let s={},r=new WeakMap;function o(m){let g=m.target;g.index!==null&&e.remove(g.index);for(let y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",o),delete s[g.id];let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function a(m,g){return s[g.id]===!0||(g.addEventListener("dispose",o),s[g.id]=!0,t.memory.geometries++),g}function c(m){let g=m.attributes;for(let v in g)e.update(g[v],i.ARRAY_BUFFER)}function u(m){let g=[],v=m.index,y=m.attributes.position,S=0;if(y===void 0)return;if(v!==null){let d=v.array;S=v.version;for(let x=0,p=d.length;x<p;x+=3){let _=d[x+0],T=d[x+1],E=d[x+2];g.push(_,T,T,E,E,_)}}else{let d=y.array;S=y.version;for(let x=0,p=d.length/3-1;x<p;x+=3){let _=x+0,T=x+1,E=x+2;g.push(_,T,T,E,E,_)}}let l=new(y.count>=65535?Zo:Yo)(g,1);l.version=S;let h=r.get(m);h&&e.remove(h),r.set(m,l)}function f(m){let g=r.get(m);if(g){let v=m.index;v!==null&&g.version<v.version&&u(m)}else u(m);return r.get(m)}return{get:a,update:c,getWireframeAttribute:f}}function a_(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,g){i.drawElements(n,g,r,m*o),t.update(g,n,1)}function u(m,g,v){v!==0&&(i.drawElementsInstanced(n,g,r,m*o,v),t.update(g,n,v))}function f(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,m,0,v);let S=0;for(let l=0;l<v;l++)S+=g[l];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function l_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function c_(i,e,t){let n=new WeakMap,s=new yt;function r(o,a,c){let u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=f!==void 0?f.length:0,g=n.get(a);if(g===void 0||g.count!==m){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};g!==void 0&&g.texture.dispose();let v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,l=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],d=a.morphAttributes.color||[],x=0;v===!0&&(x=1),y===!0&&(x=2),S===!0&&(x=3);let p=a.attributes.position.count*x,_=1;p>e.maxTextureSize&&(_=Math.ceil(p/e.maxTextureSize),p=e.maxTextureSize);let T=new Float32Array(p*_*4*m),E=new Wo(T,p,_,m);E.type=pi,E.needsUpdate=!0;let M=x*4;for(let w=0;w<m;w++){let R=l[w],P=h[w],I=d[w],C=p*_*4*w;for(let L=0;L<R.count;L++){let U=L*M;v===!0&&(s.fromBufferAttribute(R,L),T[C+U+0]=s.x,T[C+U+1]=s.y,T[C+U+2]=s.z,T[C+U+3]=0),y===!0&&(s.fromBufferAttribute(P,L),T[C+U+4]=s.x,T[C+U+5]=s.y,T[C+U+6]=s.z,T[C+U+7]=0),S===!0&&(s.fromBufferAttribute(I,L),T[C+U+8]=s.x,T[C+U+9]=s.y,T[C+U+10]=s.z,T[C+U+11]=I.itemSize===4?s.w:1)}}g={count:m,texture:E,size:new De(p,_)},n.set(a,g),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let S=0;S<u.length;S++)v+=u[S];let y=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function u_(i,e,t,n,s){let r=new WeakMap;function o(u){let f=s.render.frame,m=u.geometry,g=e.get(u,m);if(r.get(g)!==f&&(e.update(g),r.set(g,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){let v=u.skeleton;r.get(v)!==f&&(v.update(),r.set(v,f))}return g}function a(){r=new WeakMap}function c(u){let f=u.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var h_={[Ah]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ch]:"CINEON_TONE_MAPPING",[Ph]:"ACES_FILMIC_TONE_MAPPING",[Lh]:"AGX_TONE_MAPPING",[ga]:"NEUTRAL_TONE_MAPPING",[Ih]:"CUSTOM_TONE_MAPPING"};function f_(i,e,t,n,s,r){let o=new zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,u=new bt;u.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let f=new Yl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new vt(u,f),g=new Ss(-1,1,1,-1,0,1),v=null,y=null,S=!1,l,h=null,d=[],x=!1;this.setSize=function(p,_){o.setSize(p,_),a!==null&&a.setSize(p,_),c!==null&&c.setSize(p,_);for(let T=0;T<d.length;T++){let E=d[T];E.setSize&&E.setSize(p,_)}},this.setEffects=function(p){d=p,x=d.length>0&&d[0].isRenderPass===!0;let _=o.width,T=o.height;d.length>0&&a===null&&(a=new zt(_,T,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new zt(_,T,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<d.length;E++){let M=d[E];M.setSize&&M.setSize(_,T)}},this.begin=function(p,_){if(S||p.toneMapping===Ri&&d.length===0)return!1;if(h=_,_!==null){let T=_.width,E=_.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return x===!1&&p.setRenderTarget(o),l=p.toneMapping,p.toneMapping=Ri,!0},this.hasRenderPass=function(){return x},this.end=function(p,_){p.toneMapping=l,S=!0;let T=o,E=a;for(let M=0;M<d.length;M++){let b=d[M];b.enabled!==!1&&(b.render(p,E,T,_),b.needsSwap!==!1&&(T=E,E=E===a?c:a))}if(v!==p.outputColorSpace||y!==p.toneMapping){v=p.outputColorSpace,y=p.toneMapping,f.defines={},wt.getTransfer(v)===Ft&&(f.defines.SRGB_TRANSFER="");let M=h_[y];M&&(f.defines[M]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,p.setRenderTarget(h),p.render(m,g),h=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}var ep=new Hn,rf=new _s(1,1),tp=new Wo,np=new Ul,ip=new Jo,U0=[],F0=[],B0=new Float32Array(16),O0=new Float32Array(9),z0=new Float32Array(4);function no(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=U0[s];if(r===void 0&&(r=new Float32Array(s),U0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nu(i,e){let t=F0[e];t===void 0&&(t=new Int32Array(e),F0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function d_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function v_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;z0.set(n),i.uniformMatrix2fv(this.addr,!1,z0),vn(t,n)}}function x_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;O0.set(n),i.uniformMatrix3fv(this.addr,!1,O0),vn(t,n)}}function __(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,n))return;B0.set(n),i.uniformMatrix4fv(this.addr,!1,B0),vn(t,n)}}function y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rf.compareFunction=t.isReversedDepthBuffer()?$c:Zc,r=rf):r=ep,t.setTexture2D(e||r,s)}function C_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||np,s)}function P_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ip,s)}function I_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tp,s)}function L_(i){switch(i){case 5126:return d_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return v_;case 35675:return x_;case 35676:return __;case 5124:case 35670:return y_;case 35667:case 35671:return M_;case 35668:case 35672:return b_;case 35669:case 35673:return S_;case 5125:return T_;case 36294:return E_;case 36295:return w_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return I_}}function D_(i,e){i.uniform1fv(this.addr,e)}function N_(i,e){let t=no(e,this.size,2);i.uniform2fv(this.addr,t)}function U_(i,e){let t=no(e,this.size,3);i.uniform3fv(this.addr,t)}function F_(i,e){let t=no(e,this.size,4);i.uniform4fv(this.addr,t)}function B_(i,e){let t=no(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function O_(i,e){let t=no(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function z_(i,e){let t=no(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function k_(i,e){i.uniform1iv(this.addr,e)}function H_(i,e){i.uniform2iv(this.addr,e)}function V_(i,e){i.uniform3iv(this.addr,e)}function G_(i,e){i.uniform4iv(this.addr,e)}function W_(i,e){i.uniform1uiv(this.addr,e)}function X_(i,e){i.uniform2uiv(this.addr,e)}function q_(i,e){i.uniform3uiv(this.addr,e)}function Y_(i,e){i.uniform4uiv(this.addr,e)}function Z_(i,e,t){let n=this.cache,s=e.length,r=nu(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=rf:o=ep;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function $_(i,e,t){let n=this.cache,s=e.length,r=nu(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||np,r[o])}function K_(i,e,t){let n=this.cache,s=e.length,r=nu(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ip,r[o])}function J_(i,e,t){let n=this.cache,s=e.length,r=nu(t,s);gn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tp,r[o])}function j_(i){switch(i){case 5126:return D_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return B_;case 35675:return O_;case 35676:return z_;case 5124:case 35670:return k_;case 35667:case 35671:return H_;case 35668:case 35672:return V_;case 35669:case 35673:return G_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return J_}}var of=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=L_(t.type)}},af=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j_(t.type)}},lf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},nf=/(\w+)(\])?(\[|\.)?/g;function k0(i,e){i.seq.push(e),i.map[e.id]=e}function Q_(i,e,t){let n=i.name,s=n.length;for(nf.lastIndex=0;;){let r=nf.exec(n),o=nf.lastIndex,a=r[1],c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){k0(t,u===void 0?new of(a,i,e):new af(a,i,e));break}else{let m=t.map[a];m===void 0&&(m=new lf(a),k0(t,m)),t=m}}}var to=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Q_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function H0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var e2=37297,t2=0;function n2(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var V0=new gt;function i2(i){wt._getMatrix(V0,wt.workingColorSpace,i);let e=`mat3( ${V0.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Ho:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function G0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+n2(i.getShaderSource(e),a)}else return r}function s2(i,e){let t=i2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var r2={[Ah]:"Linear",[Rh]:"Reinhard",[Ch]:"Cineon",[Ph]:"ACESFilmic",[Lh]:"AgX",[ga]:"Neutral",[Ih]:"Custom"};function o2(i,e){let t=r2[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jc=new k;function a2(){wt.getLuminanceCoefficients(Jc);let i=Jc.x.toFixed(4),e=Jc.y.toFixed(4),t=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function c2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Aa(i){return i!==""}function W0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function X0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var h2=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(i){return i.replace(h2,d2)}var f2=new Map;function d2(i,e){let t=pt[e];if(t===void 0){let n=f2.get(e);if(n!==void 0)t=pt[n],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cf(t)}var p2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(i){return i.replace(p2,m2)}function m2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Y0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var g2={[Ys]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function v2(i){return g2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x2={[Es]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function _2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":x2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var y2={[$s]:"ENVMAP_MODE_REFRACTION"};function M2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":y2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var b2={[wh]:"ENVMAP_BLENDING_MULTIPLY",[a0]:"ENVMAP_BLENDING_MIX",[l0]:"ENVMAP_BLENDING_ADD"};function S2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":b2[i.combine]||"ENVMAP_BLENDING_NONE"}function T2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E2(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=v2(t),u=_2(t),f=M2(t),m=S2(t),g=T2(t),v=l2(t),y=c2(r),S=s.createProgram(),l,h,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Aa).join(`
`),l.length>0&&(l+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Aa).join(`
`),h.length>0&&(h+=`
`)):(l=[Y0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),h=[Y0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?o2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,s2("linearToOutputTexel",t.outputColorSpace),a2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),o=cf(o),o=W0(o,t),o=X0(o,t),a=cf(a),a=W0(a,t),a=X0(a,t),o=q0(o),a=q0(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,l=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,h=["#define varying in",t.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let x=d+l+o,p=d+h+a,_=H0(s,s.VERTEX_SHADER,x),T=H0(s,s.FRAGMENT_SHADER,p);s.attachShader(S,_),s.attachShader(S,T),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function E(R){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(S)||"",I=s.getShaderInfoLog(_)||"",C=s.getShaderInfoLog(T)||"",L=P.trim(),U=I.trim(),z=C.trim(),G=!0,D=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,_,T);else{let H=G0(s,_,"vertex"),O=G0(s,T,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+H+`
`+O)}else L!==""?ct("WebGLProgram: Program Info Log:",L):(U===""||z==="")&&(D=!1);D&&(R.diagnostics={runnable:G,programLog:L,vertexShader:{log:U,prefix:l},fragmentShader:{log:z,prefix:h}})}s.deleteShader(_),s.deleteShader(T),M=new to(s,S),b=u2(s,S)}let M;this.getUniforms=function(){return M===void 0&&E(this),M};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(S,e2)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t2++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=_,this.fragmentShader=T,this}var w2=0,uf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hf(e),t.set(e,n)),n}},hf=class{constructor(e){this.id=w2++,this.code=e,this.usedTimes=0}};function A2(i){return i===As||i===Sa||i===Ta}function R2(i,e,t,n,s,r){let o=new Xo,a=new uf,c=new Set,u=[],f=new Map,m=n.logarithmicDepthBuffer,g=n.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function S(M,b,w,R,P,I){let C=R.fog,L=P.geometry,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,G=e.get(M.envMap||U,z),D=G&&G.mapping===va?G.image.height:null,H=v[M.type];M.precision!==null&&(g=n.getMaxPrecision(M.precision),g!==M.precision&&ct("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let O=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=O!==void 0?O.length:0,oe=0;L.morphAttributes.position!==void 0&&(oe=1),L.morphAttributes.normal!==void 0&&(oe=2),L.morphAttributes.color!==void 0&&(oe=3);let Ve,Ue,xe,Z;if(H){let It=Wi[H];Ve=It.vertexShader,Ue=It.fragmentShader}else{Ve=M.vertexShader,Ue=M.fragmentShader;let It=a.getVertexShaderStage(M),At=a.getFragmentShaderStage(M);a.update(M,It,At),xe=It.id,Z=At.id}let j=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Pe=P.isInstancedMesh===!0,Se=P.isBatchedMesh===!0,Ge=!!M.map,$e=!!M.matcap,ke=!!G,ut=!!M.aoMap,te=!!M.lightMap,ye=!!M.bumpMap&&M.wireframe===!1,Te=!!M.normalMap,Q=!!M.displacementMap,ne=!!M.emissiveMap,ce=!!M.metalnessMap,re=!!M.roughnessMap,B=M.anisotropy>0,ve=M.clearcoat>0,ee=M.dispersion>0,F=M.retroreflectivity>0,A=M.iridescence>0,W=M.sheen>0,Y=M.transmission>0,J=B&&!!M.anisotropyMap,V=ve&&!!M.clearcoatMap,me=ve&&!!M.clearcoatNormalMap,le=ve&&!!M.clearcoatRoughnessMap,he=A&&!!M.iridescenceMap,Ie=A&&!!M.iridescenceThicknessMap,Ce=W&&!!M.sheenColorMap,ge=W&&!!M.sheenRoughnessMap,_e=!!M.specularMap,Ee=!!M.specularColorMap,et=!!M.specularIntensityMap,rt=Y&&!!M.transmissionMap,X=Y&&!!M.thicknessMap,Re=!!M.gradientMap,fe=!!M.alphaMap,Ne=M.alphaTest>0,Fe=!!M.alphaHash,we=!!M.extensions,st=Ri;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(st=i.toneMapping);let Je={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:Ue,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Se,batchingColor:Se&&P._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&P.instanceColor!==null,instancingMorph:Pe&&P.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:$e,envMap:ke,envMapMode:ke&&G.mapping,envMapCubeUVHeight:D,aoMap:ut,lightMap:te,bumpMap:ye,normalMap:Te,displacementMap:Q,emissiveMap:ne,normalMapObjectSpace:Te&&M.normalMapType===h0,normalMapTangentSpace:Te&&M.normalMapType===Yc,packedNormalMap:Te&&M.normalMapType===Yc&&A2(M.normalMap.format),metalnessMap:ce,roughnessMap:re,anisotropy:B,anisotropyMap:J,clearcoat:ve,clearcoatMap:V,clearcoatNormalMap:me,clearcoatRoughnessMap:le,dispersion:ee,retroreflection:F,iridescence:A,iridescenceMap:he,iridescenceThicknessMap:Ie,sheen:W,sheenColorMap:Ce,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:Ee,specularIntensityMap:et,transmission:Y,transmissionMap:rt,thicknessMap:X,gradientMap:Re,opaque:M.transparent===!1&&M.blending===$r&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ne,alphaHash:Fe,combine:M.combine,mapUv:Ge&&y(M.map.channel),aoMapUv:ut&&y(M.aoMap.channel),lightMapUv:te&&y(M.lightMap.channel),bumpMapUv:ye&&y(M.bumpMap.channel),normalMapUv:Te&&y(M.normalMap.channel),displacementMapUv:Q&&y(M.displacementMap.channel),emissiveMapUv:ne&&y(M.emissiveMap.channel),metalnessMapUv:ce&&y(M.metalnessMap.channel),roughnessMapUv:re&&y(M.roughnessMap.channel),anisotropyMapUv:J&&y(M.anisotropyMap.channel),clearcoatMapUv:V&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:me&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&y(M.sheenRoughnessMap.channel),specularMapUv:_e&&y(M.specularMap.channel),specularColorMapUv:Ee&&y(M.specularColorMap.channel),specularIntensityMapUv:et&&y(M.specularIntensityMap.channel),transmissionMapUv:rt&&y(M.transmissionMap.channel),thicknessMapUv:X&&y(M.thicknessMap.channel),alphaMapUv:fe&&y(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Te||B),vertexNormals:!!L.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Ge||fe),fog:!!C,useFog:M.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||L.attributes.normal===void 0&&Te===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ue,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:oe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&wt.getTransfer(M.map.colorSpace)===Ft,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&wt.getTransfer(M.emissiveMap.colorSpace)===Ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===En,flipSided:M.side===Ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:we&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&M.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function l(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let w in M.defines)b.push(w),b.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(h(b,M),d(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function h(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numSunLights),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numSunLightShadows),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function d(M,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function x(M){let b=v[M.type],w;if(b){let R=Wi[b];w=js.clone(R.uniforms)}else w=M.uniforms;return w}function p(M,b){let w=f.get(b);return w!==void 0?++w.usedTimes:(w=new E2(i,b,M,s),u.push(w),f.set(b,w)),w}function _(M){if(--M.usedTimes===0){let b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),f.delete(M.cacheKey),M.destroy()}}function T(M){a.remove(M)}function E(){a.dispose()}return{getParameters:S,getProgramCacheKey:l,getUniforms:x,acquireProgram:p,releaseProgram:_,releaseShaderCache:T,programs:u,dispose:E}}function C2(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function P2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Z0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(g){let v=0;return g.isInstancedMesh&&(v+=2),g.isSkinnedMesh&&(v+=1),v}function a(g,v,y,S,l,h){let d=i[e];return d===void 0?(d={id:g.id,object:g,geometry:v,material:y,materialVariant:o(g),groupOrder:S,renderOrder:g.renderOrder,z:l,group:h},i[e]=d):(d.id=g.id,d.object=g,d.geometry=v,d.material=y,d.materialVariant=o(g),d.groupOrder=S,d.renderOrder=g.renderOrder,d.z=l,d.group=h),e++,d}function c(g,v,y,S,l,h,d){d.reversedDepth===!0&&(l=-l);let x=a(g,v,y,S,l,h);y.transmission>0?n.push(x):y.transparent===!0?s.push(x):t.push(x)}function u(g,v,y,S,l,h){let d=a(g,v,y,S,l,h);y.transmission>0?n.unshift(d):y.transparent===!0?s.unshift(d):t.unshift(d)}function f(g,v){t.length>1&&t.sort(g||P2),n.length>1&&n.sort(v||Z0),s.length>1&&s.sort(v||Z0)}function m(){for(let g=e,v=i.length;g<v;g++){let y=i[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:m,sort:f}}function I2(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new $0,i.set(n,[o])):s>=r.length?(o=new $0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function L2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new Ae};break;case"SpotLight":t={position:new k,direction:new k,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function D2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var N2=0;function U2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function F2(i){let e=new L2,t=D2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);let s=new k,r=new nt,o=new nt;function a(u){let f=0,m=0,g=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let v=0,y=0,S=0,l=0,h=0,d=0,x=0,p=0,_=0,T=0,E=0,M=0,b=0,w=0;u.sort(U2);for(let P=0,I=u.length;P<I;P++){let C=u[P],L=C.color,U=C.intensity,z=C.distance,G=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===As?G=C.shadow.map.texture:G=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)f+=L.r*U,m+=L.g*U,g+=L.b*U;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],U);w++}else if(C.isSunLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,O=t.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[y]=O,n.sunShadowMap[y]=G;let K=H.getViewportCount();for(let oe=0;oe<K;oe++)n.sunShadowMatrix[S+oe]=H.getMatrix(oe),n.sunShadowCascade[S+oe]=H._cascadeData[oe];S+=K,y++}n.sun[v]=D,v++}else if(C.isDirectionalLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,O=t.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.directionalShadow[l]=O,n.directionalShadowMap[l]=G,n.directionalShadowMatrix[l]=C.shadow.matrix,_++}n.directional[l]=D,l++}else if(C.isSpotLight){let D=e.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(L).multiplyScalar(U),D.distance=z,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[d]=D;let H=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,H.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[d]=H.matrix,C.castShadow){let O=t.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.spotShadow[d]=O,n.spotShadowMap[d]=G,E++}d++}else if(C.isRectAreaLight){let D=e.get(C);D.color.copy(L).multiplyScalar(U),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=D,x++}else if(C.isPointLight){let D=e.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){let H=C.shadow,O=t.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,n.pointShadow[h]=O,n.pointShadowMap[h]=G,n.pointShadowMatrix[h]=C.shadow.matrix,T++}n.point[h]=D,h++}else if(C.isHemisphereLight){let D=e.get(C);D.skyColor.copy(C.color).multiplyScalar(U),D.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[p]=D,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=g;let R=n.hash;(R.sunLength!==v||R.directionalLength!==l||R.pointLength!==h||R.spotLength!==d||R.rectAreaLength!==x||R.hemiLength!==p||R.numSunShadows!==y||R.numDirectionalShadows!==_||R.numPointShadows!==T||R.numSpotShadows!==E||R.numSpotMaps!==M||R.numLightProbes!==w)&&(n.sun.length=v,n.directional.length=l,n.spot.length=d,n.rectArea.length=x,n.point.length=h,n.hemi.length=p,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,R.sunLength=v,R.directionalLength=l,R.pointLength=h,R.spotLength=d,R.rectAreaLength=x,R.hemiLength=p,R.numSunShadows=y,R.numDirectionalShadows=_,R.numPointShadows=T,R.numSpotShadows=E,R.numSpotMaps=M,R.numLightProbes=w,n.version=N2++)}function c(u,f){let m=0,g=0,v=0,y=0,S=0,l=0,h=f.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){let p=u[d];if(p.isSunLight){let _=n.sun[m];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(h),m++}else if(p.isDirectionalLight){let _=n.directional[g];_.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(h),g++}else if(p.isSpotLight){let _=n.spot[y];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(h),_.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(h),y++}else if(p.isRectAreaLight){let _=n.rectArea[S];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(h),o.identity(),r.copy(p.matrixWorld),r.premultiply(h),o.extractRotation(r),_.halfWidth.set(p.width*.5,0,0),_.halfHeight.set(0,p.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),S++}else if(p.isPointLight){let _=n.point[v];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(h),v++}else if(p.isHemisphereLight){let _=n.hemi[l];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(h),l++}}}return{setup:a,setupView:c,state:n}}function K0(i){let e=new F2(i),t=[],n=[],s=[];function r(g){m.camera=g,t.length=0,n.length=0,s.length=0}function o(g){t.push(g)}function a(g){n.push(g)}function c(g){s.push(g)}function u(){e.setup(t)}function f(g){e.setupView(t,g)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function B2(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new K0(i),e.set(s,[a])):r>=o.length?(a=new K0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var O2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z2=`uniform sampler2D shadow_pass;
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
}`,k2=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],H2=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],J0=new nt,wa=new k,sf=new k;function V2(i,e,t){let n=new kr,s=new De,r=new De,o=new yt,a=new Xr,c=new Zl,u={},f=t.maxTextureSize,m={[Ts]:Ln,[Ln]:Ts,[En]:En},g=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:O2,fragmentShader:z2}),v=g.clone();v.defines.HORIZONTAL_PASS=1;let y=new bt;y.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new vt(y,g),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let h=this.type;this.render=function(T,E,M){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||T.length===0)return;this.type===Vd&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);let b=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Gn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let I=h!==this.type;I&&E.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(L=>L.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,L=T.length;C<L;C++){let U=T[C],z=U.shadow;if(z===void 0){ct("WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let G=z.getFrameExtents();s.multiply(G),r.copy(z.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/G.x),s.x=r.x*G.x,z.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/G.y),s.y=r.y*G.y,z.mapSize.y=r.y));let D=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=D,z.map===null||I===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zr){if(U.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new zt(s.x,s.y,{format:As,type:pn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),z.map.texture.name=U.name+".shadowMap",z.map.depthTexture=new _s(s.x,s.y,pi),z.map.depthTexture.name=U.name+".shadowMapDepth",z.map.depthTexture.format=zi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn}else U.isPointLight?(z.map=new Qc(s.x),z.map.depthTexture=new zl(s.x,Ci)):(z.map=new zt(s.x,s.y),z.map.depthTexture=new _s(s.x,s.y,Ci)),z.map.depthTexture.name=U.name+".shadowMap",z.map.depthTexture.format=zi,this.type===Ys?(z.map.depthTexture.compareFunction=D?$c:Zc,z.map.depthTexture.minFilter=Wt,z.map.depthTexture.magFilter=Wt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let H=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();U.isPointLight!==!0&&z.updateMatrices(U,M);for(let O=0;O<H;O++){let K=z.getCamera(O);if(U.isPointLight){let oe=z.camera,Ve=z.matrix,Ue=U.distance||oe.far;Ue!==oe.far&&(oe.far=Ue,oe.updateProjectionMatrix()),wa.setFromMatrixPosition(U.matrixWorld),oe.position.copy(wa),sf.copy(oe.position),sf.add(k2[O]),oe.up.copy(H2[O]),oe.lookAt(sf),oe.updateMatrixWorld(),Ve.makeTranslation(-wa.x,-wa.y,-wa.z),J0.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(J0,oe.coordinateSystem,oe.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,O),i.clear();else{O===0&&(i.setRenderTarget(z.map),i.clear());let oe=z.getViewport(O);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),P.viewport(o)}n=z.getFrustum(O),p(E,M,K,U,this.type)}z.isPointLightShadow!==!0&&this.type===Zr&&d(z,M),z.needsUpdate=!1}h=this.type,l.needsUpdate=!1,i.setRenderTarget(b,w,R)};function d(T,E){let M=e.update(S);g.defines.VSM_SAMPLES!==T.blurSamples&&(g.defines.VSM_SAMPLES=T.blurSamples,v.defines.VSM_SAMPLES=T.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),T.mapPass===null?T.mapPass=new zt(s.x,s.y,{format:As,type:pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),g.uniforms.shadow_pass.value=T.map.depthTexture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,M,g,S,null),v.uniforms.shadow_pass.value=T.mapPass.texture,v.uniforms.resolution.value.set(T.map.width,T.map.height),v.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,M,v,S,null)}function x(T,E,M,b){let w=null,R=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)w=R;else if(w=M.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=w.uuid,I=E.uuid,C=u[P];C===void 0&&(C={},u[P]=C);let L=C[I];L===void 0&&(L=w.clone(),C[I]=L,E.addEventListener("dispose",_)),w=L}if(w.visible=E.visible,w.wireframe=E.wireframe,b===Zr?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:m[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,M.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let P=i.properties.get(w);P.light=M}return w}function p(T,E,M,b,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Zr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let I=e.update(T),C=T.material;if(Array.isArray(C)){let L=I.groups;for(let U=0,z=L.length;U<z;U++){let G=L[U],D=C[G.materialIndex];if(D&&D.visible){let H=x(T,D,b,w);T.onBeforeShadow(i,T,E,M,I,H,G),i.renderBufferDirect(M,null,I,H,T,G),T.onAfterShadow(i,T,E,M,I,H,G)}}}else if(C.visible){let L=x(T,C,b,w);T.onBeforeShadow(i,T,E,M,I,L,null),i.renderBufferDirect(M,null,I,L,T,null),T.onAfterShadow(i,T,E,M,I,L,null)}}let P=T.children;for(let I=0,C=P.length;I<C;I++)p(P[I],E,M,b,w)}function _(T){T.target.removeEventListener("dispose",_);for(let M in u){let b=u[M],w=T.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function G2(i,e){function t(){let X=!1,Re=new yt,fe=null,Ne=new yt(0,0,0,0);return{setMask:function(Fe){fe!==Fe&&!X&&(i.colorMask(Fe,Fe,Fe,Fe),fe=Fe)},setLocked:function(Fe){X=Fe},setClear:function(Fe,we,st,Je,It){It===!0&&(Fe*=Je,we*=Je,st*=Je),Re.set(Fe,we,st,Je),Ne.equals(Re)===!1&&(i.clearColor(Fe,we,st,Je),Ne.copy(Re))},reset:function(){X=!1,fe=null,Ne.set(-1,0,0,0)}}}function n(){let X=!1,Re=!1,fe=null,Ne=null,Fe=null;return{setReversed:function(we){if(Re!==we){let st=e.get("EXT_clip_control");we?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Re=we;let Je=Fe;Fe=null,this.setClear(Je)}},getReversed:function(){return Re},setTest:function(we){we?j(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(we){fe!==we&&!X&&(i.depthMask(we),fe=we)},setFunc:function(we){if(Re&&(we=S0[we]),Ne!==we){switch(we){case Tl:i.depthFunc(i.NEVER);break;case El:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Al:i.depthFunc(i.EQUAL);break;case Rl:i.depthFunc(i.GEQUAL);break;case Cl:i.depthFunc(i.GREATER);break;case Pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=we}},setLocked:function(we){X=we},setClear:function(we){Fe!==we&&(Fe=we,Re&&(we=1-we),i.clearDepth(we))},reset:function(){X=!1,fe=null,Ne=null,Fe=null,Re=!1}}}function s(){let X=!1,Re=null,fe=null,Ne=null,Fe=null,we=null,st=null,Je=null,It=null;return{setTest:function(At){X||(At?j(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(At){Re!==At&&!X&&(i.stencilMask(At),Re=At)},setFunc:function(At,Yn,Lt){(fe!==At||Ne!==Yn||Fe!==Lt)&&(i.stencilFunc(At,Yn,Lt),fe=At,Ne=Yn,Fe=Lt)},setOp:function(At,Yn,Lt){(we!==At||st!==Yn||Je!==Lt)&&(i.stencilOp(At,Yn,Lt),we=At,st=Yn,Je=Lt)},setLocked:function(At){X=At},setClear:function(At){It!==At&&(i.clearStencil(At),It=At)},reset:function(){X=!1,Re=null,fe=null,Ne=null,Fe=null,we=null,st=null,Je=null,It=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,u=new WeakMap,f={},m={},g={},v=new WeakMap,y=[],S=null,l=!1,h=null,d=null,x=null,p=null,_=null,T=null,E=null,M=new Ae(0,0,0),b=0,w=!1,R=null,P=null,I=null,C=null,L=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,G=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(D)[1]),z=G>=1):D.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),z=G>=2);let H=null,O={},K=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Ve=new yt().fromArray(K),Ue=new yt().fromArray(oe);function xe(X,Re,fe,Ne){let Fe=new Uint8Array(4),we=i.createTexture();i.bindTexture(X,we),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<fe;st++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Re+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return we}let Z={};Z[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Dr),ye(!1),Te(Mh),j(i.CULL_FACE),ut(Gn);function j(X){f[X]!==!0&&(i.enable(X),f[X]=!0)}function ue(X){f[X]!==!1&&(i.disable(X),f[X]=!1)}function Pe(X,Re){return g[X]!==Re?(i.bindFramebuffer(X,Re),g[X]=Re,X===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Re),X===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function Se(X,Re){let fe=y,Ne=!1;if(X){fe=v.get(Re),fe===void 0&&(fe=[],v.set(Re,fe));let Fe=X.textures;if(fe.length!==Fe.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let we=0,st=Fe.length;we<st;we++)fe[we]=i.COLOR_ATTACHMENT0+we;fe.length=Fe.length,Ne=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(fe)}function Ge(X){return S!==X?(i.useProgram(X),S=X,!0):!1}let $e={[Zs]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Xd]:i.FUNC_REVERSE_SUBTRACT};$e[qd]=i.MIN,$e[Yd]=i.MAX;let ke={[Zd]:i.ZERO,[$d]:i.ONE,[Kd]:i.SRC_COLOR,[Th]:i.SRC_ALPHA,[n0]:i.SRC_ALPHA_SATURATE,[e0]:i.DST_COLOR,[jd]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[Eh]:i.ONE_MINUS_SRC_ALPHA,[t0]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[i0]:i.CONSTANT_COLOR,[s0]:i.ONE_MINUS_CONSTANT_COLOR,[r0]:i.CONSTANT_ALPHA,[o0]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(X,Re,fe,Ne,Fe,we,st,Je,It,At){if(X===Gn){l===!0&&(ue(i.BLEND),l=!1);return}if(l===!1&&(j(i.BLEND),l=!0),X!==Gd){if(X!==h||At!==w){if((d!==Zs||_!==Zs)&&(i.blendEquation(i.FUNC_ADD),d=Zs,_=Zs),At)switch(X){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFunc(i.ONE,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",X);break}else switch(X){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bh:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",X);break}x=null,p=null,T=null,E=null,M.set(0,0,0),b=0,h=X,w=At}return}Fe=Fe||Re,we=we||fe,st=st||Ne,(Re!==d||Fe!==_)&&(i.blendEquationSeparate($e[Re],$e[Fe]),d=Re,_=Fe),(fe!==x||Ne!==p||we!==T||st!==E)&&(i.blendFuncSeparate(ke[fe],ke[Ne],ke[we],ke[st]),x=fe,p=Ne,T=we,E=st),(Je.equals(M)===!1||It!==b)&&(i.blendColor(Je.r,Je.g,Je.b,It),M.copy(Je),b=It),h=X,w=!1}function te(X,Re){X.side===En?ue(i.CULL_FACE):j(i.CULL_FACE);let fe=X.side===Ln;Re&&(fe=!fe),ye(fe),X.blending===$r&&X.transparent===!1?ut(Gn):ut(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Ne=X.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ne(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function ye(X){R!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),R=X)}function Te(X){X!==kd?(j(i.CULL_FACE),X!==P&&(X===Mh?i.cullFace(i.BACK):X===Hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),P=X}function Q(X){X!==I&&(z&&i.lineWidth(X),I=X)}function ne(X,Re,fe){X?(j(i.POLYGON_OFFSET_FILL),(C!==Re||L!==fe)&&(C=Re,L=fe,o.getReversed()&&(Re=-Re),i.polygonOffset(Re,fe))):ue(i.POLYGON_OFFSET_FILL)}function ce(X){X?j(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function re(X){X===void 0&&(X=i.TEXTURE0+U-1),H!==X&&(i.activeTexture(X),H=X)}function B(X,Re,fe){fe===void 0&&(H===null?fe=i.TEXTURE0+U-1:fe=H);let Ne=O[fe];Ne===void 0&&(Ne={type:void 0,texture:void 0},O[fe]=Ne),(Ne.type!==X||Ne.texture!==Re)&&(H!==fe&&(i.activeTexture(fe),H=fe),i.bindTexture(X,Re||Z[X]),Ne.type=X,Ne.texture=Re)}function ve(){let X=O[H];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(X){mt("WebGLState:",X)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(X){mt("WebGLState:",X)}}function A(){try{i.texSubImage2D(...arguments)}catch(X){mt("WebGLState:",X)}}function W(){try{i.texSubImage3D(...arguments)}catch(X){mt("WebGLState:",X)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(X){mt("WebGLState:",X)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(X){mt("WebGLState:",X)}}function V(){try{i.texStorage2D(...arguments)}catch(X){mt("WebGLState:",X)}}function me(){try{i.texStorage3D(...arguments)}catch(X){mt("WebGLState:",X)}}function le(){try{i.texImage2D(...arguments)}catch(X){mt("WebGLState:",X)}}function he(){try{i.texImage3D(...arguments)}catch(X){mt("WebGLState:",X)}}function Ie(X){return m[X]!==void 0?m[X]:i.getParameter(X)}function Ce(X,Re){m[X]!==Re&&(i.pixelStorei(X,Re),m[X]=Re)}function ge(X){Ve.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Ve.copy(X))}function _e(X){Ue.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Ue.copy(X))}function Ee(X,Re){let fe=u.get(Re);fe===void 0&&(fe=new WeakMap,u.set(Re,fe));let Ne=fe.get(X);Ne===void 0&&(Ne=i.getUniformBlockIndex(Re,X.name),fe.set(X,Ne))}function et(X,Re){let Ne=u.get(Re).get(X);c.get(Re)!==Ne&&(i.uniformBlockBinding(Re,Ne,X.__bindingPointIndex),c.set(Re,Ne))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},m={},H=null,O={},g={},v=new WeakMap,y=[],S=null,l=!1,h=null,d=null,x=null,p=null,_=null,T=null,E=null,M=new Ae(0,0,0),b=0,w=!1,R=null,P=null,I=null,C=null,L=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ue,bindFramebuffer:Pe,drawBuffers:Se,useProgram:Ge,setBlending:ut,setMaterial:te,setFlipSided:ye,setCullFace:Te,setLineWidth:Q,setPolygonOffset:ne,setScissorTest:ce,activeTexture:re,bindTexture:B,unbindTexture:ve,compressedTexImage2D:ee,compressedTexImage3D:F,texImage2D:le,texImage3D:he,pixelStorei:Ce,getParameter:Ie,updateUBOMapping:Ee,uniformBlockBinding:et,texStorage2D:V,texStorage3D:me,texSubImage2D:A,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:ge,viewport:_e,reset:rt}}function W2(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new De,f=new WeakMap,m=new Set,g,v=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(F,A){return y?new OffscreenCanvas(F,A):Vo("canvas")}function l(F,A,W){let Y=1,J=ee(F);if((J.width>W||J.height>W)&&(Y=W/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let V=Math.floor(Y*J.width),me=Math.floor(Y*J.height);g===void 0&&(g=S(V,me));let le=A?S(V,me):g;return le.width=V,le.height=me,le.getContext("2d").drawImage(F,0,0,V,me),ct("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+me+")."),le}else return"data"in F&&ct("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),F;return F}function h(F){return F.generateMipmaps}function d(F){i.generateMipmap(F)}function x(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(F,A,W,Y,J,V=!1){if(F!==null){if(i[F]!==void 0)return i[F];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let me;Y&&(me=e.get("EXT_texture_norm16"),me||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=A;if(A===i.RED&&(W===i.FLOAT&&(le=i.R32F),W===i.HALF_FLOAT&&(le=i.R16F),W===i.UNSIGNED_BYTE&&(le=i.R8),W===i.UNSIGNED_SHORT&&me&&(le=me.R16_EXT),W===i.SHORT&&me&&(le=me.R16_SNORM_EXT)),A===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(le=i.R8UI),W===i.UNSIGNED_SHORT&&(le=i.R16UI),W===i.UNSIGNED_INT&&(le=i.R32UI),W===i.BYTE&&(le=i.R8I),W===i.SHORT&&(le=i.R16I),W===i.INT&&(le=i.R32I)),A===i.RG&&(W===i.FLOAT&&(le=i.RG32F),W===i.HALF_FLOAT&&(le=i.RG16F),W===i.UNSIGNED_BYTE&&(le=i.RG8),W===i.UNSIGNED_SHORT&&me&&(le=me.RG16_EXT),W===i.SHORT&&me&&(le=me.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(le=i.RG8UI),W===i.UNSIGNED_SHORT&&(le=i.RG16UI),W===i.UNSIGNED_INT&&(le=i.RG32UI),W===i.BYTE&&(le=i.RG8I),W===i.SHORT&&(le=i.RG16I),W===i.INT&&(le=i.RG32I)),A===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(le=i.RGB8UI),W===i.UNSIGNED_SHORT&&(le=i.RGB16UI),W===i.UNSIGNED_INT&&(le=i.RGB32UI),W===i.BYTE&&(le=i.RGB8I),W===i.SHORT&&(le=i.RGB16I),W===i.INT&&(le=i.RGB32I)),A===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),W===i.UNSIGNED_INT&&(le=i.RGBA32UI),W===i.BYTE&&(le=i.RGBA8I),W===i.SHORT&&(le=i.RGBA16I),W===i.INT&&(le=i.RGBA32I)),A===i.RGB&&(W===i.UNSIGNED_SHORT&&me&&(le=me.RGB16_EXT),W===i.SHORT&&me&&(le=me.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),A===i.RGBA){let he=V?Ho:wt.getTransfer(J);W===i.FLOAT&&(le=i.RGBA32F),W===i.HALF_FLOAT&&(le=i.RGBA16F),W===i.UNSIGNED_BYTE&&(le=he===Ft?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&me&&(le=me.RGBA16_EXT),W===i.SHORT&&me&&(le=me.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function _(F,A){let W;return F?A===null||A===Ci||A===Jr?W=i.DEPTH24_STENCIL8:A===pi?W=i.DEPTH32F_STENCIL8:A===Kr&&(W=i.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ci||A===Jr?W=i.DEPTH_COMPONENT24:A===pi?W=i.DEPTH_COMPONENT32F:A===Kr&&(W=i.DEPTH_COMPONENT16),W}function T(F,A){return h(F)===!0||F.isFramebufferTexture&&F.minFilter!==fn&&F.minFilter!==Wt?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function E(F){let A=F.target;A.removeEventListener("dispose",E),b(A),A.isVideoTexture&&f.delete(A),A.isHTMLTexture&&m.delete(A)}function M(F){let A=F.target;A.removeEventListener("dispose",M),R(A)}function b(F){let A=n.get(F);if(A.__webglInit===void 0)return;let W=F.source,Y=v.get(W);if(Y){let J=Y[A.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(F),Object.keys(Y).length===0&&v.delete(W)}n.remove(F)}function w(F){let A=n.get(F);i.deleteTexture(A.__webglTexture);let W=F.source,Y=v.get(W);delete Y[A.__cacheKey],o.memory.textures--}function R(F){let A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let J=0;J<A.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(A.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[Y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let W=F.textures;for(let Y=0,J=W.length;Y<J;Y++){let V=n.get(W[Y]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(W[Y])}n.remove(F)}let P=0;function I(){P=0}function C(){return P}function L(F){P=F}function U(){let F=P;return F>=s.maxTextures&&ct("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,F}function z(F){let A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function G(F,A){let W=n.get(F);if(F.isVideoTexture&&B(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&W.__version!==F.version){let Y=F.image;if(Y===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(W,F,A);return}}else F.isExternalTexture&&(W.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+A)}function D(F,A){let W=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&W.__version!==F.version){ue(W,F,A);return}else F.isExternalTexture&&(W.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+A)}function H(F,A){let W=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&W.__version!==F.version){ue(W,F,A);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+A)}function O(F,A){let W=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&W.__version!==F.version){Pe(W,F,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+A)}let K={[Nr]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[Il]:i.MIRRORED_REPEAT},oe={[fn]:i.NEAREST,[c0]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[uc]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},Ve={[d0]:i.NEVER,[x0]:i.ALWAYS,[p0]:i.LESS,[Zc]:i.LEQUAL,[m0]:i.EQUAL,[$c]:i.GEQUAL,[g0]:i.GREATER,[v0]:i.NOTEQUAL};function Ue(F,A){if(A.type===pi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Wt||A.magFilter===uc||A.magFilter===xa||A.magFilter===Wn||A.minFilter===Wt||A.minFilter===uc||A.minFilter===xa||A.minFilter===Wn)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,K[A.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,K[A.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,K[A.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,oe[A.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,oe[A.minFilter]),A.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===fn||A.minFilter!==xa&&A.minFilter!==Wn||A.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function xe(F,A){let W=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",E));let Y=A.source,J=v.get(Y);J===void 0&&(J={},v.set(Y,J));let V=z(A);if(V!==F.__cacheKey){J[V]===void 0&&(J[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),J[V].usedTimes++;let me=J[F.__cacheKey];me!==void 0&&(J[F.__cacheKey].usedTimes--,me.usedTimes===0&&w(A)),F.__cacheKey=V,F.__webglTexture=J[V].texture}return W}function Z(F,A,W){return Math.floor(Math.floor(F/W)/A)}function j(F,A,W,Y){let V=F.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,W,Y,A.data);else{V.sort((Ce,ge)=>Ce.start-ge.start);let me=0;for(let Ce=1;Ce<V.length;Ce++){let ge=V[me],_e=V[Ce],Ee=ge.start+ge.count,et=Z(_e.start,A.width,4),rt=Z(ge.start,A.width,4);_e.start<=Ee+1&&et===rt&&Z(_e.start+_e.count-1,A.width,4)===et?ge.count=Math.max(ge.count,_e.start+_e.count-ge.start):(++me,V[me]=_e)}V.length=me+1;let le=t.getParameter(i.UNPACK_ROW_LENGTH),he=t.getParameter(i.UNPACK_SKIP_PIXELS),Ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Ce=0,ge=V.length;Ce<ge;Ce++){let _e=V[Ce],Ee=Math.floor(_e.start/4),et=Math.ceil(_e.count/4),rt=Ee%A.width,X=Math.floor(Ee/A.width),Re=et,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,rt,X,Re,fe,W,Y,A.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function ue(F,A,W){let Y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=i.TEXTURE_3D);let J=xe(F,A),V=A.source;t.bindTexture(Y,F.__webglTexture,i.TEXTURE0+W);let me=n.get(V);if(V.version!==me.__version||J===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let fe=wt.getPrimaries(wt.workingColorSpace),Ne=A.colorSpace===Pi?null:wt.getPrimaries(A.colorSpace),Fe=A.colorSpace===Pi||fe===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let he=l(A.image,!1,s.maxTextureSize);he=ve(A,he);let Ie=r.convert(A.format,A.colorSpace),Ce=r.convert(A.type),ge=p(A.internalFormat,Ie,Ce,A.normalized,A.colorSpace,A.isVideoTexture);Ue(Y,A);let _e,Ee=A.mipmaps,et=A.isVideoTexture!==!0,rt=me.__version===void 0||J===!0,X=V.dataReady,Re=T(A,he);if(A.isDepthTexture)ge=_(A.format===ws,A.type),rt&&(et?t.texStorage2D(i.TEXTURE_2D,1,ge,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,ge,he.width,he.height,0,Ie,Ce,null));else if(A.isDataTexture)if(Ee.length>0){et&&rt&&t.texStorage2D(i.TEXTURE_2D,Re,ge,Ee[0].width,Ee[0].height);for(let fe=0,Ne=Ee.length;fe<Ne;fe++)_e=Ee[fe],et?X&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,_e.width,_e.height,Ie,Ce,_e.data):t.texImage2D(i.TEXTURE_2D,fe,ge,_e.width,_e.height,0,Ie,Ce,_e.data);A.generateMipmaps=!1}else et?(rt&&t.texStorage2D(i.TEXTURE_2D,Re,ge,he.width,he.height),X&&j(A,he,Ie,Ce)):t.texImage2D(i.TEXTURE_2D,0,ge,he.width,he.height,0,Ie,Ce,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){et&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ge,Ee[0].width,Ee[0].height,he.depth);for(let fe=0,Ne=Ee.length;fe<Ne;fe++)if(_e=Ee[fe],A.format!==jn)if(Ie!==null)if(et){if(X)if(A.layerUpdates.size>0){let Fe=qh(_e.width,_e.height,A.format,A.type);for(let we of A.layerUpdates){let st=_e.data.subarray(we*Fe/_e.data.BYTES_PER_ELEMENT,(we+1)*Fe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,we,_e.width,_e.height,1,Ie,st)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,he.depth,Ie,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,ge,_e.width,_e.height,he.depth,0,_e.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,he.depth,Ie,Ce,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,ge,_e.width,_e.height,he.depth,0,Ie,Ce,_e.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{et&&rt&&t.texStorage2D(i.TEXTURE_2D,Re,ge,Ee[0].width,Ee[0].height);for(let fe=0,Ne=Ee.length;fe<Ne;fe++)_e=Ee[fe],A.format!==jn?Ie!==null?et?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,_e.width,_e.height,Ie,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,ge,_e.width,_e.height,0,_e.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?X&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,_e.width,_e.height,Ie,Ce,_e.data):t.texImage2D(i.TEXTURE_2D,fe,ge,_e.width,_e.height,0,Ie,Ce,_e.data)}else if(A.isDataArrayTexture)if(et){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ge,he.width,he.height,he.depth),X)if(A.layerUpdates.size>0){let fe=qh(he.width,he.height,A.format,A.type);for(let Ne of A.layerUpdates){let Fe=he.data.subarray(Ne*fe/he.data.BYTES_PER_ELEMENT,(Ne+1)*fe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ne,he.width,he.height,1,Ie,Ce,Fe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ie,Ce,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,he.width,he.height,he.depth,0,Ie,Ce,he.data);else if(A.isData3DTexture)et?(rt&&t.texStorage3D(i.TEXTURE_3D,Re,ge,he.width,he.height,he.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ie,Ce,he.data)):t.texImage3D(i.TEXTURE_3D,0,ge,he.width,he.height,he.depth,0,Ie,Ce,he.data);else if(A.isFramebufferTexture){if(rt)if(et)t.texStorage2D(i.TEXTURE_2D,Re,ge,he.width,he.height);else{let fe=he.width,Ne=he.height;for(let Fe=0;Fe<Re;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,ge,fe,Ne,0,Ie,Ce,null),fe>>=1,Ne>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),he.parentNode!==fe){fe.appendChild(he),m.add(A),fe.onpaint=Ne=>{let Fe=Ne.changedElements;for(let we of m)Fe.includes(we.image)&&(we.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,he);else{let Fe=i.RGBA,we=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,we,st,he)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(et&&rt){let fe=ee(Ee[0]);t.texStorage2D(i.TEXTURE_2D,Re,ge,fe.width,fe.height)}for(let fe=0,Ne=Ee.length;fe<Ne;fe++)_e=Ee[fe],et?X&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ie,Ce,_e):t.texImage2D(i.TEXTURE_2D,fe,ge,Ie,Ce,_e);A.generateMipmaps=!1}else if(et){if(rt){let fe=ee(he);t.texStorage2D(i.TEXTURE_2D,Re,ge,fe.width,fe.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Ce,he)}else t.texImage2D(i.TEXTURE_2D,0,ge,Ie,Ce,he);h(A)&&d(Y),me.__version=V.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Pe(F,A,W){if(A.image.length!==6)return;let Y=xe(F,A),J=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+W);let V=n.get(J);if(J.version!==V.__version||Y===!0){t.activeTexture(i.TEXTURE0+W);let me=wt.getPrimaries(wt.workingColorSpace),le=A.colorSpace===Pi?null:wt.getPrimaries(A.colorSpace),he=A.colorSpace===Pi||me===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Ie=A.isCompressedTexture||A.image[0].isCompressedTexture,Ce=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let we=0;we<6;we++)!Ie&&!Ce?ge[we]=l(A.image[we],!0,s.maxCubemapSize):ge[we]=Ce?A.image[we].image:A.image[we],ge[we]=ve(A,ge[we]);let _e=ge[0],Ee=r.convert(A.format,A.colorSpace),et=r.convert(A.type),rt=p(A.internalFormat,Ee,et,A.normalized,A.colorSpace),X=A.isVideoTexture!==!0,Re=V.__version===void 0||Y===!0,fe=J.dataReady,Ne=T(A,_e);Ue(i.TEXTURE_CUBE_MAP,A);let Fe;if(Ie){X&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,rt,_e.width,_e.height);for(let we=0;we<6;we++){Fe=ge[we].mipmaps;for(let st=0;st<Fe.length;st++){let Je=Fe[st];A.format!==jn?Ee!==null?X?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st,0,0,Je.width,Je.height,Ee,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st,rt,Je.width,Je.height,0,Je.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st,0,0,Je.width,Je.height,Ee,et,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st,rt,Je.width,Je.height,0,Ee,et,Je.data)}}}else{if(Fe=A.mipmaps,X&&Re){Fe.length>0&&Ne++;let we=ee(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,rt,we.width,we.height)}for(let we=0;we<6;we++)if(Ce){X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ge[we].width,ge[we].height,Ee,et,ge[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,rt,ge[we].width,ge[we].height,0,Ee,et,ge[we].data);for(let st=0;st<Fe.length;st++){let It=Fe[st].image[we].image;X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st+1,0,0,It.width,It.height,Ee,et,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st+1,rt,It.width,It.height,0,Ee,et,It.data)}}else{X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ee,et,ge[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,rt,Ee,et,ge[we]);for(let st=0;st<Fe.length;st++){let Je=Fe[st];X?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st+1,0,0,Ee,et,Je.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,st+1,rt,Ee,et,Je.image[we])}}}h(A)&&d(i.TEXTURE_CUBE_MAP),V.__version=J.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Se(F,A,W,Y,J,V){let me=r.convert(W.format,W.colorSpace),le=r.convert(W.type),he=p(W.internalFormat,me,le,W.normalized,W.colorSpace),Ie=n.get(A),Ce=n.get(W);if(Ce.__renderTarget=A,!Ie.__hasExternalTextures){let ge=Math.max(1,A.width>>V),_e=Math.max(1,A.height>>V);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,V,he,ge,_e,A.depth,0,me,le,null):t.texImage2D(J,V,he,ge,_e,0,me,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),re(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,Ce.__webglTexture,0,ce(A)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,Ce.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(F,A,W){if(i.bindRenderbuffer(i.RENDERBUFFER,F),A.depthBuffer){let Y=A.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,V=_(A.stencilBuffer,J),me=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;re(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(A),V,A.width,A.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(A),V,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,V,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,F)}else{let Y=A.textures;for(let J=0;J<Y.length;J++){let V=Y[J],me=r.convert(V.format,V.colorSpace),le=r.convert(V.type),he=p(V.internalFormat,me,le,V.normalized,V.colorSpace);re(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(A),he,A.width,A.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(A),he,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,he,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(F,A,W){let Y=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(A.depthTexture);if(J.__renderTarget=A,(!J.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,A.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,A.depthTexture);let Ie=r.convert(A.depthTexture.format),Ce=r.convert(A.depthTexture.type),ge;A.depthTexture.format===zi?ge=i.DEPTH_COMPONENT24:A.depthTexture.format===ws&&(ge=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ge,A.width,A.height,0,Ie,Ce,null)}}else G(A.depthTexture,0);let V=J.__webglTexture,me=ce(A),le=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,he=A.depthTexture.format===ws?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===zi)re(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,le,V,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,he,le,V,0);else if(A.depthTexture.format===ws)re(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,le,V,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,he,le,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(F){let A=n.get(F),W=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){let Y=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){let J=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),A.__depthDisposeCallback=J}A.__boundDepthTexture=Y}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)$e(A.__webglFramebuffer[Y],F,Y);else{let Y=F.texture.mipmaps;Y&&Y.length>0?$e(A.__webglFramebuffer[0],F,0):$e(A.__webglFramebuffer,F,0)}else if(W){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ge(A.__webglDepthbuffer[Y],F,!1);else{let J=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=A.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,V)}}else{let Y=F.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ge(A.__webglDepthbuffer,F,!1);else{let J=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(F,A,W){let Y=n.get(F);A!==void 0&&Se(Y.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ke(F)}function te(F){let A=F.texture,W=n.get(F),Y=n.get(A);F.addEventListener("dispose",M);let J=F.textures,V=F.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=A.version,o.memory.textures++),V){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let he=0;he<A.mipmaps.length;he++)W.__webglFramebuffer[le][he]=i.createFramebuffer()}else W.__webglFramebuffer[le]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<A.mipmaps.length;le++)W.__webglFramebuffer[le]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(me)for(let le=0,he=J.length;le<he;le++){let Ie=n.get(J[le]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&re(F)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){let he=J[le];W.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[le]);let Ie=r.convert(he.format,he.colorSpace),Ce=r.convert(he.type),ge=p(he.internalFormat,Ie,Ce,he.normalized,he.colorSpace,F.isXRRenderTarget===!0),_e=ce(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ge,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,W.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(W.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,A);for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)Se(W.__webglFramebuffer[le][he],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else Se(W.__webglFramebuffer[le],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);h(A)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let le=0,he=J.length;le<he;le++){let Ie=J[le],Ce=n.get(Ie),ge=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ge=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ce.__webglTexture),Ue(ge,Ie),Se(W.__webglFramebuffer,F,Ie,i.COLOR_ATTACHMENT0+le,ge,0),h(Ie)&&d(ge)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(le=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),Ue(le,A),A.mipmaps&&A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)Se(W.__webglFramebuffer[he],F,A,i.COLOR_ATTACHMENT0,le,he);else Se(W.__webglFramebuffer,F,A,i.COLOR_ATTACHMENT0,le,0);h(A)&&d(le),t.unbindTexture()}F.depthBuffer&&ke(F)}function ye(F){let A=F.textures;for(let W=0,Y=A.length;W<Y;W++){let J=A[W];if(h(J)){let V=x(F),me=n.get(J).__webglTexture;t.bindTexture(V,me),d(V),t.unbindTexture()}}}let Te=[],Q=[];function ne(F){if(F.samples>0){if(re(F)===!1){let A=F.textures,W=F.width,Y=F.height,J=i.COLOR_BUFFER_BIT,V=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(F),le=A.length>1;if(le)for(let Ie=0;Ie<A.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let he=F.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ie=0;Ie<A.length;Ie++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ie]);let Ce=n.get(A[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,J,i.NEAREST),c===!0&&(Te.length=0,Q.length=0,Te.push(i.COLOR_ATTACHMENT0+Ie),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Te.push(V),Q.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ie=0;Ie<A.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ie]);let Ce=n.get(A[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let A=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ce(F){return Math.min(s.maxSamples,F.samples)}function re(F){let A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function B(F){let A=o.render.frame;f.get(F)!==A&&(f.set(F,A),F.update())}function ve(F,A){let W=F.colorSpace,Y=F.format,J=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||W!==ko&&W!==Pi&&(wt.getTransfer(W)===Ft?(Y!==jn||J!==Fn)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",W)),A}function ee(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=D,this.setTexture3D=H,this.setTextureCube=O,this.rebindTextures=ut,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function X2(i,e){function t(n,s=Pi){let r,o=wt.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return i.BYTE;if(n===Uh)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===hc)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===zh)return i.RGB;if(n===jn)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===Ks)return i.RED;if(n===pc)return i.RED_INTEGER;if(n===As)return i.RG;if(n===mc)return i.RG_INTEGER;if(n===gc)return i.RGBA_INTEGER;if(n===_a||n===ya||n===Ma||n===ba)if(o===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vc||n===xc||n===_c||n===yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===bc||n===Sc||n===Tc||n===Ec||n===Sa||n===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mc||n===bc)return o===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tc)return r.COMPRESSED_R11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Bc||n===Oc||n===zc||n===kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hc||n===Vc||n===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Hc)return o===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===Xc||n===Ta||n===qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y2=`
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

}`,ff=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new jo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mt({vertexShader:q2,fragmentShader:Y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},df=class extends ki{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,u=null,f=null,m=null,g=null,v=null,y=null,S=typeof XRWebGLBinding<"u",l=new ff,h={},d=t.getContextAttributes(),x=null,p=null,_=[],T=[],E=new De,M=null,b=null,w=new In;w.viewport=new yt;let R=new In;R.viewport=new yt;let P=[w,R],I=new oc,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=_[Z];return j===void 0&&(j=new Or,_[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=_[Z];return j===void 0&&(j=new Or,_[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=_[Z];return j===void 0&&(j=new Or,_[Z]=j),j.getHandSpace()};function U(Z){let j=T.indexOf(Z.inputSource);if(j===-1)return;let ue=_[j];ue!==void 0&&(ue.update(Z.inputSource,Z.frame,u||o),ue.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",G);for(let Z=0;Z<_.length;Z++){let j=T[Z];j!==null&&(T[Z]=null,_[Z].disconnect(j))}C=null,L=null,l.reset();for(let Z in h)delete h[Z];if(e.setRenderTarget(x),v=null,g=null,m=null,s=null,p=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),b!==null){let Z=b.camera;Z.fov=b.fov,Z.zoom=b.zoom,Z.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m===null&&S&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",z),s.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Pe=null,Se=null;d.depth&&(Se=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=d.stencil?ws:zi,Pe=d.stencil?Jr:Ci);let Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};m=this.getBinding(),g=m.createProjectionLayer(Ge),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),p=new zt(g.textureWidth,g.textureHeight,{format:jn,type:Fn,depthTexture:new _s(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let ue={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),p=new zt(v.framebufferWidth,v.framebufferHeight,{format:jn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function G(Z){for(let j=0;j<Z.removed.length;j++){let ue=Z.removed[j],Pe=T.indexOf(ue);Pe>=0&&(T[Pe]=null,_[Pe].disconnect(ue))}for(let j=0;j<Z.added.length;j++){let ue=Z.added[j],Pe=T.indexOf(ue);if(Pe===-1){for(let Ge=0;Ge<_.length;Ge++)if(Ge>=T.length){T.push(ue),Pe=Ge;break}else if(T[Ge]===null){T[Ge]=ue,Pe=Ge;break}if(Pe===-1)break}let Se=_[Pe];Se&&Se.connect(ue)}}let D=new k,H=new k;function O(Z,j,ue){D.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(ue.matrixWorld);let Pe=D.distanceTo(H),Se=j.projectionMatrix.elements,Ge=ue.projectionMatrix.elements,$e=Se[14]/(Se[10]-1),ke=Se[14]/(Se[10]+1),ut=(Se[9]+1)/Se[5],te=(Se[9]-1)/Se[5],ye=(Se[8]-1)/Se[0],Te=(Ge[8]+1)/Ge[0],Q=$e*ye,ne=$e*Te,ce=Pe/(-ye+Te),re=ce*-ye;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(re),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Se[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let B=$e+ce,ve=ke+ce,ee=Q-re,F=ne+(Pe-re),A=ut*ke/ve*B,W=te*ke/ve*B;Z.projectionMatrix.makePerspective(ee,F,A,W,B,ve),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function K(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,ue=Z.far;l.texture!==null&&(l.depthNear>0&&(j=l.depthNear),l.depthFar>0&&(ue=l.depthFar)),I.near=R.near=w.near=j,I.far=R.far=w.far=ue,(C!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,L=I.far),I.layers.mask=Z.layers.mask|6,w.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let Pe=Z.parent,Se=I.cameras;K(I,Pe);for(let Ge=0;Ge<Se.length;Ge++)K(Se[Ge],Pe);Se.length===2?O(I,w,R):I.projectionMatrix.copy(w.projectionMatrix),b===null&&Z.isPerspectiveCamera&&(b={camera:Z,fov:Z.fov,zoom:Z.zoom}),oe(Z,I,Pe)};function oe(Z,j,ue){ue===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(ue.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Go*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(g===null&&v===null))return c},this.setFoveation=function(Z){c=Z,g!==null&&(g.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(I)},this.getCameraTexture=function(Z){return h[Z]};let Ve=null;function Ue(Z,j){if(f=j.getViewerPose(u||o),y=j,f!==null){let ue=f.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let Pe=!1;ue.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let ke=0;ke<ue.length;ke++){let ut=ue[ke],te=null;if(v!==null)te=v.getViewport(ut);else{let Te=m.getViewSubImage(g,ut);te=Te.viewport,ke===0&&(e.setRenderTargetTextures(p,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(p))}let ye=P[ke];ye===void 0&&(ye=new In,ye.layers.enable(ke),ye.viewport=new yt,P[ke]=ye),ye.matrix.fromArray(ut.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(ut.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(te.x,te.y,te.width,te.height),ke===0&&(I.matrix.copy(ye.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(ye)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){m=n.getBinding();let ke=m.getDepthInformation(ue[0]);ke&&ke.isValid&&ke.texture&&l.init(ke,s.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),m=n.getBinding();for(let ke=0;ke<ue.length;ke++){let ut=ue[ke].camera;if(ut){let te=h[ut];te||(te=new jo,h[ut]=te);let ye=m.getCameraImage(ut);te.sourceTexture=ye}}}}for(let ue=0;ue<_.length;ue++){let Pe=T[ue],Se=_[ue];Pe!==null&&Se!==void 0&&Se.update(Pe,j,u||o)}Ve&&Ve(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),y=null}let xe=new j0;xe.setAnimationLoop(Ue),this.setAnimationLoop=function(Z){Ve=Z},this.dispose=function(){}}},Z2=new nt,sp=new gt;sp.set(-1,0,0,0,1,0,0,0,1);function $2(i,e){function t(l,h){l.matrixAutoUpdate===!0&&l.updateMatrix(),h.value.copy(l.matrix)}function n(l,h){h.color.getRGB(l.fogColor.value,Gh(i)),h.isFog?(l.fogNear.value=h.near,l.fogFar.value=h.far):h.isFogExp2&&(l.fogDensity.value=h.density)}function s(l,h,d,x,p){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(l,h):h.isMeshLambertMaterial?(r(l,h),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(l,h),m(l,h)):h.isMeshPhongMaterial?(r(l,h),f(l,h),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(l,h),g(l,h),h.isMeshPhysicalMaterial&&v(l,h,p)):h.isMeshMatcapMaterial?(r(l,h),y(l,h)):h.isMeshDepthMaterial?r(l,h):h.isMeshDistanceMaterial?(r(l,h),S(l,h)):h.isMeshNormalMaterial?r(l,h):h.isLineBasicMaterial?(o(l,h),h.isLineDashedMaterial&&a(l,h)):h.isPointsMaterial?c(l,h,d,x):h.isSpriteMaterial?u(l,h):h.isShadowMaterial?(l.color.value.copy(h.color),l.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(l,h){l.opacity.value=h.opacity,h.color&&l.diffuse.value.copy(h.color),h.emissive&&l.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.bumpMap&&(l.bumpMap.value=h.bumpMap,t(h.bumpMap,l.bumpMapTransform),l.bumpScale.value=h.bumpScale,h.side===Ln&&(l.bumpScale.value*=-1)),h.normalMap&&(l.normalMap.value=h.normalMap,t(h.normalMap,l.normalMapTransform),l.normalScale.value.copy(h.normalScale),h.side===Ln&&l.normalScale.value.negate()),h.displacementMap&&(l.displacementMap.value=h.displacementMap,t(h.displacementMap,l.displacementMapTransform),l.displacementScale.value=h.displacementScale,l.displacementBias.value=h.displacementBias),h.emissiveMap&&(l.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,l.emissiveMapTransform)),h.specularMap&&(l.specularMap.value=h.specularMap,t(h.specularMap,l.specularMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest);let d=e.get(h),x=d.envMap,p=d.envMapRotation;x&&(l.envMap.value=x,l.envMapRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(p)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.envMapRotation.value.premultiply(sp),l.reflectivity.value=h.reflectivity,l.ior.value=h.ior,l.refractionRatio.value=h.refractionRatio),h.lightMap&&(l.lightMap.value=h.lightMap,l.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,l.lightMapTransform)),h.aoMap&&(l.aoMap.value=h.aoMap,l.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,l.aoMapTransform))}function o(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}function a(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}function c(l,h,d,x){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=x*.5,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}function u(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}function f(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}function m(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}function g(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)}function v(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ln&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.retroreflectivity>0&&(l.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}function y(l,h){h.matcap&&(l.matcap.value=h.matcap)}function S(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function K2(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(p,_){let T=_.program;n.uniformBlockBinding(p,T)}function u(p,_){let T=s[p.id];T===void 0&&(l(p),T=f(p),s[p.id]=T,p.addEventListener("dispose",d));let E=_.program;n.updateUBOMapping(p,E);let M=e.render.frame;r[p.id]!==M&&(g(p),r[p.id]=M)}function f(p){let _=m();p.__bindingPointIndex=_;let T=i.createBuffer(),E=p.__size,M=p.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function m(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(p){let _=s[p.id],T=p.uniforms,E=p.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,b=T.length;M<b;M++){let w=T[M];if(Array.isArray(w))for(let R=0,P=w.length;R<P;R++)v(w[R],M,R,E);else v(w,M,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(p,_,T,E){if(S(p,_,T,E)===!0){let M=p.__offset,b=p.value;if(Array.isArray(b)){let w=0;for(let R=0;R<b.length;R++){let P=b[R],I=h(P);y(P,p.__data,w),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(w+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(b,p.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,p.__data)}}function y(p,_,T){typeof p=="number"||typeof p=="boolean"?_[0]=p:p.isMatrix3?(_[0]=p.elements[0],_[1]=p.elements[1],_[2]=p.elements[2],_[3]=0,_[4]=p.elements[3],_[5]=p.elements[4],_[6]=p.elements[5],_[7]=0,_[8]=p.elements[6],_[9]=p.elements[7],_[10]=p.elements[8],_[11]=0):ArrayBuffer.isView(p)?_.set(new p.constructor(p.buffer,p.byteOffset,_.length)):p.toArray(_,T)}function S(p,_,T,E){let M=p.value,b=_+"_"+T;if(E[b]===void 0)return typeof M=="number"||typeof M=="boolean"?E[b]=M:ArrayBuffer.isView(M)?E[b]=M.slice():E[b]=M.clone(),!0;{let w=E[b];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return E[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function l(p){let _=p.uniforms,T=0,E=16;for(let b=0,w=_.length;b<w;b++){let R=Array.isArray(_[b])?_[b]:[_[b]];for(let P=0,I=R.length;P<I;P++){let C=R[P],L=Array.isArray(C.value)?C.value:[C.value];for(let U=0,z=L.length;U<z;U++){let G=L[U],D=h(G),H=T%E,O=H%D.boundary,K=H+O;T+=O,K!==0&&E-K<D.storage&&(T+=E-K),C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=D.storage}}}let M=T%E;return M>0&&(T+=E-M),p.__size=T,p.__cache={},this}function h(p){let _={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(_.boundary=16,_.storage=p.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",p),_}function d(p){let _=p.target;_.removeEventListener("dispose",d);let T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function x(){for(let p in s)i.deleteBuffer(s[p]);o=[],s={},r={}}return{bind:c,update:u,dispose:x}}var J2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function j2(){return Gi===null&&(Gi=new xs(J2,16,16,As,pn),Gi.name="DFG_LUT",Gi.minFilter=Wt,Gi.magFilter=Wt,Gi.wrapS=Oi,Gi.wrapT=Oi,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var eu=class{constructor(e={}){let{canvas:t=y0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:v=Fn}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=o;let S=v,l=new Set([gc,mc,pc]),h=new Set([Fn,Ci,Kr,Jr,fc,dc]),d=new Uint32Array(4),x=new Int32Array(4),p=new k,_=null,T=null,E=[],M=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,R=!1,P=null,I=null,C=null,L=null;this._outputColorSpace=Qt;let U=0,z=0,G=null,D=-1,H=null,O=new yt,K=new yt,oe=null,Ve=new Ae(0),Ue=0,xe=t.width,Z=t.height,j=1,ue=null,Pe=null,Se=new yt(0,0,xe,Z),Ge=new yt(0,0,xe,Z),$e=!1,ke=new kr,ut=!1,te=!1,ye=new nt,Te=new k,Q=new yt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function re(){return G===null?j:1}let B=n;function ve(N,$){return t.getContext(N,$)}let ee,F,A,W,Y,J,V,me,le,he,Ie,Ce,ge,_e,Ee,et,rt,X,Re,fe,Ne,Fe,we;try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Yn,!1),B===null){let $="webgl2";if(B=ve($,N),B===null)throw ve($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(N){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Yn,!1),mt("WebGLRenderer: "+N.message),N}function st(){ee=new r_(B),ee.init(),Ne=new X2(B,ee),F=new $x(B,ee,e,Ne),A=new G2(B,ee),F.reversedDepthBuffer&&g&&A.buffers.depth.setReversed(!0),I=B.createFramebuffer(),C=B.createFramebuffer(),L=B.createFramebuffer(),W=new l_(B),Y=new C2,J=new W2(B,ee,A,Y,F,Ne,W),V=new s_(w),me=new u1(B),Fe=new Yx(B,me),le=new o_(B,me,W,Fe),he=new u_(B,le,me,Fe,W),X=new c_(B,F,J),Ee=new Kx(Y),Ie=new R2(w,V,ee,F,Fe,Ee),Ce=new $2(w,Y),ge=new I2,_e=new B2(ee),rt=new qx(w,V,A,he,y,c),et=new V2(w,he,F),we=new K2(B,W,F,A),Re=new Zx(B,ee,W),fe=new a_(B,ee,W),W.programs=Ie.programs,w.capabilities=F,w.extensions=ee,w.properties=Y,w.renderLists=ge,w.shadowMap=et,w.state=A,w.info=W}S!==Fn&&(b=new f_(S,t.width,t.height,a,s,r));let Je=new df(w,B);this.xr=Je,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let N=ee.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=ee.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(xe,Z,!1))},this.getSize=function(N){return N.set(xe,Z)},this.setSize=function(N,$,ae=!0){if(Je.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=N,Z=$,t.width=Math.floor(N*j),t.height=Math.floor($*j),ae===!0&&(t.style.width=N+"px",t.style.height=$+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(xe*j,Z*j).floor()},this.setDrawingBufferSize=function(N,$,ae){xe=N,Z=$,j=ae,t.width=Math.floor(N*ae),t.height=Math.floor($*ae),this.setViewport(0,0,N,$)},this.setEffects=function(N){if(S===Fn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let $=0;$<N.length;$++)if(N[$].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(O)},this.getViewport=function(N){return N.copy(Se)},this.setViewport=function(N,$,ae,ie){N.isVector4?Se.set(N.x,N.y,N.z,N.w):Se.set(N,$,ae,ie),A.viewport(O.copy(Se).multiplyScalar(j).round())},this.getScissor=function(N){return N.copy(Ge)},this.setScissor=function(N,$,ae,ie){N.isVector4?Ge.set(N.x,N.y,N.z,N.w):Ge.set(N,$,ae,ie),A.scissor(K.copy(Ge).multiplyScalar(j).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(N){A.setScissorTest($e=N)},this.setOpaqueSort=function(N){ue=N},this.setTransparentSort=function(N){Pe=N},this.getClearColor=function(N){return N.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(N=!0,$=!0,ae=!0){let ie=0;if(N){let se=!1;if(G!==null){let Be=G.texture.format;se=l.has(Be)}if(se){let Be=G.texture.type,Xe=h.has(Be),ze=rt.getClearColor(),Oe=rt.getClearAlpha(),je=ze.r,xt=ze.g,_t=ze.b;Xe?(d[0]=je,d[1]=xt,d[2]=_t,d[3]=Oe,B.clearBufferuiv(B.COLOR,0,d)):(x[0]=je,x[1]=xt,x[2]=_t,x[3]=Oe,B.clearBufferiv(B.COLOR,0,x))}else ie|=B.COLOR_BUFFER_BIT}$&&(ie|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),P=N},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Yn,!1),rt.dispose(),ge.dispose(),_e.dispose(),Y.dispose(),V.dispose(),he.dispose(),Fe.dispose(),we.dispose(),Ie.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",Pn),Je.removeEventListener("sessionend",sn),Fi.stop()};function It(N){N.preventDefault(),Hh("WebGLRenderer: Context Lost."),R=!0}function At(){Hh("WebGLRenderer: Context Restored."),R=!1;let N=W.autoReset,$=et.enabled,ae=et.autoUpdate,ie=et.needsUpdate,se=et.type;st(),W.autoReset=N,et.enabled=$,et.autoUpdate=ae,et.needsUpdate=ie,et.type=se}function Yn(N){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Lt(N){let $=N.target;$.removeEventListener("dispose",Lt),ka($)}function ka(N){Ha(N),Y.remove(N)}function Ha(N){let $=Y.get(N).programs;$!==void 0&&($.forEach(function(ae){Ie.releaseProgram(ae)}),N.isShaderMaterial&&Ie.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,ae,ie,se,Be){$===null&&($=ne);let Xe=se.isMesh&&se.matrixWorld.determinantAffine()<0,ze=Ga(N,$,ae,ie,se);A.setMaterial(ie,Xe);let Oe=ae.index,je=1;if(ie.wireframe===!0){if(Oe=le.getWireframeAttribute(ae),Oe===void 0)return;je=2}let xt=ae.drawRange,_t=ae.attributes.position,Ze=xt.start*je,ot=(xt.start+xt.count)*je;Be!==null&&(Ze=Math.max(Ze,Be.start*je),ot=Math.min(ot,(Be.start+Be.count)*je)),Oe!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,Oe.count)):_t!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,_t.count));let tt=ot-Ze;if(tt<0||tt===1/0)return;Fe.setup(se,ie,ze,ae,Oe);let St,Ke=Re;if(Oe!==null&&(St=me.get(Oe),Ke=fe,Ke.setIndex(St)),se.isMesh)ie.wireframe===!0?(A.setLineWidth(ie.wireframeLinewidth*re()),Ke.setMode(B.LINES)):Ke.setMode(B.TRIANGLES);else if(se.isLine){let yn=ie.linewidth;yn===void 0&&(yn=1),A.setLineWidth(yn*re()),se.isLineSegments?Ke.setMode(B.LINES):se.isLineLoop?Ke.setMode(B.LINE_LOOP):Ke.setMode(B.LINE_STRIP)}else se.isPoints?Ke.setMode(B.POINTS):se.isSprite&&Ke.setMode(B.TRIANGLES);if(se.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Ke.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let yn=se._multiDrawStarts,qe=se._multiDrawCounts,Mn=se._multiDrawCount,Rt=Oe?me.get(Oe).bytesPerElement:1,zn=Y.get(ie).currentProgram.getUniforms();for(let Me=0;Me<Mn;Me++)zn.setValue(B,"_gl_DrawID",Me),Ke.render(yn[Me]/Rt,qe[Me])}else if(se.isInstancedMesh)Ke.renderInstances(Ze,tt,se.count);else if(ae.isInstancedBufferGeometry){let yn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,qe=Math.min(ae.instanceCount,yn);Ke.renderInstances(Ze,tt,qe)}else Ke.render(Ze,tt)};function yo(N,$,ae,ie){P!==null&&N.isNodeMaterial&&P.setObject(ie,N),ut===!0&&Ee.setState(N,ae,!1),N.transparent===!0&&N.side===En&&N.forceSinglePass===!1?(N.side=Ln,N.needsUpdate=!0,Us(N,$,ie),N.side=Ts,N.needsUpdate=!0,Us(N,$,ie),N.side=En):Us(N,$,ie)}this.compile=function(N,$,ae=null){ae===null&&(ae=N),P!==null&&P.renderStart(N,$,ae),T=_e.get(ae),T.init($),M.push(T),ae.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(T.pushLight(se),se.castShadow&&T.pushShadow(se))}),N!==ae&&N.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(T.pushLight(se),se.castShadow&&T.pushShadow(se))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),te=this.localClippingEnabled,ut=Ee.init(this.clippingPlanes,te),ut===!0&&Ee.setGlobalState(this.clippingPlanes,$),P!==null&&et.render(T.state.shadowsArray,ae,$);let ie=new Set;return N.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Be=se.material;if(Be)if(Array.isArray(Be))for(let Xe=0;Xe<Be.length;Xe++){let ze=Be[Xe];yo(ze,ae,$,se),ie.add(ze)}else yo(Be,ae,$,se),ie.add(Be)}),T=M.pop(),P!==null&&P.renderEnd(),ie},this.compileAsync=function(N,$,ae=null){let ie=this.compile(N,$,ae);return new Promise(se=>{function Be(){if(ie.forEach(function(Xe){let Oe=Y.get(Xe).currentProgram;(Oe===void 0||Oe.isReady())&&ie.delete(Xe)}),ie.size===0){se(N);return}setTimeout(Be,10)}ee.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Mo=null;function bo(N){Mo&&Mo(N)}function Pn(){Fi.stop()}function sn(){Fi.start()}let Fi=new j0;Fi.setAnimationLoop(bo),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(N){Mo=N,Je.setAnimationLoop(N),N===null?Fi.stop():Fi.start()},Je.addEventListener("sessionstart",Pn),Je.addEventListener("sessionend",sn),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(N,$);let ae=Je.enabled===!0&&Je.isPresenting===!0,ie=b!==null&&(G===null||ae)&&b.begin(w,G);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera($),$=Je.getCamera()),N.isScene===!0&&N.onBeforeRender(w,N,$,G),T=_e.get(N,M.length),T.init($),T.state.textureUnits=J.getTextureUnits(),M.push(T),ye.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ke.setFromProjectionMatrix(ye,Ai,$.reversedDepth),te=this.localClippingEnabled,ut=Ee.init(this.clippingPlanes,te),_=ge.get(N,E.length),_.init(),E.push(_),Je.enabled===!0&&Je.isPresenting===!0){let Xe=w.xr.getDepthSensingMesh();Xe!==null&&cr(Xe,$,-1/0,w.sortObjects)}cr(N,$,0,w.sortObjects),_.finish(),P!==null&&P.updateLights(T.state.lightsArray),w.sortObjects===!0&&_.sort(ue,Pe),ce=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,ce&&rt.addToRenderList(_,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Ee.beginShadows();let se=T.state.shadowsArray;if(et.render(se,N,$),ut===!0&&Ee.endShadows(),(ie&&b.hasRenderPass())===!1){let Xe=_.opaque,ze=_.transmissive;if(T.setupLights(),$.isArrayCamera){let Oe=$.cameras;if(ze.length>0)for(let je=0,xt=Oe.length;je<xt;je++){let _t=Oe[je];ur(Xe,ze,N,_t)}ce&&rt.render(N);for(let je=0,xt=Oe.length;je<xt;je++){let _t=Oe[je];So(_,N,_t,_t.viewport)}}else ze.length>0&&ur(Xe,ze,N,$),ce&&rt.render(N),So(_,N,$)}G!==null&&z===0&&(J.updateMultisampleRenderTarget(G),J.updateRenderTargetMipmap(G)),ie&&b.end(w),N.isScene===!0&&N.onAfterRender(w,N,$),Fe.resetDefaultState(),D=-1,H=null,M.pop(),M.length>0?(T=M[M.length-1],J.setTextureUnits(T.state.textureUnits),ut===!0&&Ee.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?_=E[E.length-1]:_=null,P!==null&&P.renderEnd()};function cr(N,$,ae,ie){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)ae=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLightProbeGrid)T.pushLightProbeGrid(N);else if(N.isLight)T.pushLight(N),N.castShadow&&T.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(ke)){ie&&Q.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ye);let Xe=he.update(N),ze=N.material;ze.visible&&_.push(N,Xe,ze,ae,Q.z,null,$)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(ke))){let Xe=he.update(N),ze=N.material;if(ie&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Q.copy(N.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Q.copy(Xe.boundingSphere.center)),Q.applyMatrix4(N.matrixWorld).applyMatrix4(ye)),Array.isArray(ze)){let Oe=Xe.groups;for(let je=0,xt=Oe.length;je<xt;je++){let _t=Oe[je],Ze=ze[_t.materialIndex];Ze&&Ze.visible&&_.push(N,Xe,Ze,ae,Q.z,_t,$)}}else ze.visible&&_.push(N,Xe,ze,ae,Q.z,null,$)}}let Be=N.children;for(let Xe=0,ze=Be.length;Xe<ze;Xe++)cr(Be[Xe],$,ae,ie)}function So(N,$,ae,ie){let{opaque:se,transmissive:Be,transparent:Xe}=N;T.setupLightsView(ae),ut===!0&&Ee.setGlobalState(w.clippingPlanes,ae),ie&&A.viewport(O.copy(ie)),se.length>0&&Ns(se,$,ae),Be.length>0&&Ns(Be,$,ae),Xe.length>0&&Ns(Xe,$,ae),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function ur(N,$,ae,ie){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ie.id]===void 0){let Ze=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ie.id]=new zt(1,1,{generateMipmaps:!0,type:Ze?pn:Fn,minFilter:Wn,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let Be=T.state.transmissionRenderTarget[ie.id],Xe=ie.viewport||O;Be.setSize(Xe.z*w.transmissionResolutionScale,Xe.w*w.transmissionResolutionScale);let ze=w.getRenderTarget(),Oe=w.getActiveCubeFace(),je=w.getActiveMipmapLevel();w.setRenderTarget(Be),w.getClearColor(Ve),Ue=w.getClearAlpha(),Ue<1&&w.setClearColor(16777215,.5),w.clear(),ce&&rt.render(ae);let xt=w.toneMapping;w.toneMapping=Ri;let _t=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),T.setupLightsView(ie),ut===!0&&Ee.setGlobalState(w.clippingPlanes,ie),Ns(N,ae,ie),J.updateMultisampleRenderTarget(Be),J.updateRenderTargetMipmap(Be),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ot=0,tt=$.length;ot<tt;ot++){let St=$[ot],{object:Ke,geometry:yn,material:qe,group:Mn}=St;if(qe.side===En&&Ke.layers.test(ie.layers)){let Rt=qe.side;qe.side=Ln,qe.needsUpdate=!0,To(Ke,ae,ie,yn,qe,Mn),qe.side=Rt,qe.needsUpdate=!0,Ze=!0}}Ze===!0&&(J.updateMultisampleRenderTarget(Be),J.updateRenderTargetMipmap(Be))}w.setRenderTarget(ze,Oe,je),w.setClearColor(Ve,Ue),_t!==void 0&&(ie.viewport=_t),w.toneMapping=xt}function Ns(N,$,ae){let ie=$.isScene===!0?$.overrideMaterial:null;for(let se=0,Be=N.length;se<Be;se++){let Xe=N[se],{object:ze,geometry:Oe,group:je}=Xe,xt=Xe.material;xt.allowOverride===!0&&ie!==null&&(xt=ie),ze.layers.test(ae.layers)&&To(ze,$,ae,Oe,xt,je)}}function To(N,$,ae,ie,se,Be){P!==null&&se.isNodeMaterial&&P.setObject(N,se),N.onBeforeRender(w,$,ae,ie,se,Be),N.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),se.onBeforeRender(w,$,ae,ie,N,Be),se.transparent===!0&&se.side===En&&se.forceSinglePass===!1?(se.side=Ln,se.needsUpdate=!0,w.renderBufferDirect(ae,$,ie,se,N,Be),se.side=Ts,se.needsUpdate=!0,w.renderBufferDirect(ae,$,ie,se,N,Be),se.side=En):w.renderBufferDirect(ae,$,ie,se,N,Be),N.onAfterRender(w,$,ae,ie,se,Be)}function Us(N,$,ae){$.isScene!==!0&&($=ne);let ie=Y.get(N),se=T.state.lights,Be=T.state.shadowsArray,Xe=se.state.version,ze=Ie.getParameters(N,se.state,Be,$,ae,T.state.lightProbeGridArray),Oe=Ie.getProgramCacheKey(ze),je=ie.programs;ie.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?$.environment:null,ie.fog=$.fog;let xt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ie.envMap=V.get(N.envMap||ie.environment,xt),ie.envMapRotation=ie.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,je===void 0&&(N.addEventListener("dispose",Lt),je=new Map,ie.programs=je);let _t=je.get(Oe);if(_t!==void 0){if(ie.currentProgram===_t&&ie.lightsStateVersion===Xe)return hr(N,ze),_t}else ze.uniforms=Ie.getUniforms(N),P!==null&&N.isNodeMaterial&&P.build(N,ae,ze),N.onBeforeCompile(ze,w),_t=Ie.acquireProgram(ze,Oe),je.set(Oe,_t),ie.uniforms=ze.uniforms;let Ze=ie.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ze.clippingPlanes=Ee.uniform),hr(N,ze),ie.needsLights=Au(N),ie.lightsStateVersion=Xe,ie.needsLights&&(Ze.ambientLightColor.value=se.state.ambient,Ze.lightProbe.value=se.state.probe,Ze.sunLights.value=se.state.sun,Ze.sunLightShadows.value=se.state.sunShadow,Ze.directionalLights.value=se.state.directional,Ze.directionalLightShadows.value=se.state.directionalShadow,Ze.spotLights.value=se.state.spot,Ze.spotLightShadows.value=se.state.spotShadow,Ze.rectAreaLights.value=se.state.rectArea,Ze.ltc_1.value=se.state.rectAreaLTC1,Ze.ltc_2.value=se.state.rectAreaLTC2,Ze.pointLights.value=se.state.point,Ze.pointLightShadows.value=se.state.pointShadow,Ze.hemisphereLights.value=se.state.hemi,Ze.sunShadowMatrix.value=se.state.sunShadowMatrix,Ze.sunShadowCascade.value=se.state.sunShadowCascade,Ze.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ze.spotLightMatrix.value=se.state.spotLightMatrix,Ze.spotLightMap.value=se.state.spotLightMap,Ze.pointShadowMatrix.value=se.state.pointShadowMatrix),ie.lightProbeGrid=T.state.lightProbeGridArray.length>0,ie.currentProgram=_t,ie.uniformsList=null,_t}function Ot(N){if(N.uniformsList===null){let $=N.currentProgram.getUniforms();N.uniformsList=to.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function hr(N,$){let ae=Y.get(N);ae.outputColorSpace=$.outputColorSpace,ae.batching=$.batching,ae.batchingColor=$.batchingColor,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.instancingMorph=$.instancingMorph,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function Va(N,$){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;p.setFromMatrixPosition($.matrixWorld);for(let ae=0,ie=N.length;ae<ie;ae++){let se=N[ae];if(se.texture!==null&&se.boundingBox.containsPoint(p))return se}return null}function Ga(N,$,ae,ie,se){$.isScene!==!0&&($=ne),J.resetTextureUnits();let Be=$.fog,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?$.environment:null,ze=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:wt.workingColorSpace,Oe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,je=V.get(ie.envMap||Xe,Oe),xt=ie.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,_t=!!ae.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!ae.morphAttributes.position,ot=!!ae.morphAttributes.normal,tt=!!ae.morphAttributes.color,St=Ri;ie.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(St=w.toneMapping);let Ke=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,yn=Ke!==void 0?Ke.length:0,qe=Y.get(ie),Mn=T.state.lights;if(ut===!0&&(te===!0||N!==H)){let Nt=N===H&&ie.id===D;Ee.setState(ie,N,Nt)}let Rt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Mn.state.version||qe.outputColorSpace!==ze||se.isBatchedMesh&&qe.batching===!1||!se.isBatchedMesh&&qe.batching===!0||se.isBatchedMesh&&qe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&qe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&qe.instancing===!1||!se.isInstancedMesh&&qe.instancing===!0||se.isSkinnedMesh&&qe.skinning===!1||!se.isSkinnedMesh&&qe.skinning===!0||se.isInstancedMesh&&qe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&qe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&qe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&qe.instancingMorph===!1&&se.morphTexture!==null||qe.envMap!==je||ie.fog===!0&&qe.fog!==Be||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==xt||qe.vertexTangents!==_t||qe.morphTargets!==Ze||qe.morphNormals!==ot||qe.morphColors!==tt||qe.toneMapping!==St||qe.morphTargetsCount!==yn||!!qe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Rt=!0):(Rt=!0,qe.__version=ie.version);let zn=qe.currentProgram;Rt===!0&&(zn=Us(ie,$,se),P&&ie.isNodeMaterial&&P.onUpdateProgram(ie,zn,qe));let Me=!1,ht=!1,Qe=!1,ft=zn.getUniforms(),dt=qe.uniforms;if(A.useProgram(zn.program)&&(Me=!0,ht=!0,Qe=!0),ie.id!==D&&(D=ie.id,ht=!0),qe.needsLights){let Nt=Va(T.state.lightProbeGridArray,se);qe.lightProbeGrid!==Nt&&(qe.lightProbeGrid=Nt,ht=!0)}if(Me||H!==N){A.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),ft.setValue(B,"projectionMatrix",N.projectionMatrix),ft.setValue(B,"viewMatrix",N.matrixWorldInverse);let ti=ft.map.cameraPosition;ti!==void 0&&ti.setValue(B,Te.setFromMatrixPosition(N.matrixWorld)),F.logarithmicDepthBuffer&&ft.setValue(B,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&ft.setValue(B,"isOrthographic",N.isOrthographicCamera===!0),H!==N&&(H=N,ht=!0,Qe=!0)}if(qe.needsLights&&(Mn.state.sunShadowMap.length>0&&ft.setValue(B,"sunShadowMap",Mn.state.sunShadowMap,J),Mn.state.directionalShadowMap.length>0&&ft.setValue(B,"directionalShadowMap",Mn.state.directionalShadowMap,J),Mn.state.spotShadowMap.length>0&&ft.setValue(B,"spotShadowMap",Mn.state.spotShadowMap,J),Mn.state.pointShadowMap.length>0&&ft.setValue(B,"pointShadowMap",Mn.state.pointShadowMap,J)),se.isSkinnedMesh){ft.setOptional(B,se,"bindMatrix"),ft.setOptional(B,se,"bindMatrixInverse");let Nt=se.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ft.setValue(B,"boneTexture",Nt.boneTexture,J))}se.isBatchedMesh&&(ft.setOptional(B,se,"batchingTexture"),ft.setValue(B,"batchingTexture",se._matricesTexture,J),ft.setOptional(B,se,"batchingIdTexture"),ft.setValue(B,"batchingIdTexture",se._indirectTexture,J),ft.setOptional(B,se,"batchingColorTexture"),se._colorsTexture!==null&&ft.setValue(B,"batchingColorTexture",se._colorsTexture,J));let Dt=ae.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&X.update(se,ae,zn),(ht||qe.receiveShadow!==se.receiveShadow)&&(qe.receiveShadow=se.receiveShadow,ft.setValue(B,"receiveShadow",se.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&$.environment!==null&&(dt.envMapIntensity.value=$.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=j2()),ht){if(ft.setValue(B,"toneMappingExposure",w.toneMappingExposure),qe.needsLights&&Wa(dt,Qe),Be&&ie.fog===!0&&Ce.refreshFogUniforms(dt,Be),Ce.refreshMaterialUniforms(dt,ie,j,Z,T.state.transmissionRenderTarget[N.id]),qe.needsLights&&qe.lightProbeGrid){let Nt=qe.lightProbeGrid;dt.probesSH.value=Nt.texture,dt.probesMin.value.copy(Nt.boundingBox.min),dt.probesMax.value.copy(Nt.boundingBox.max),dt.probesResolution.value.copy(Nt.resolution)}to.upload(B,Ot(qe),dt,J)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(to.upload(B,Ot(qe),dt,J),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&ft.setValue(B,"center",se.center),ft.setValue(B,"modelViewMatrix",se.modelViewMatrix),ft.setValue(B,"normalMatrix",se.normalMatrix),ft.setValue(B,"modelMatrix",se.matrixWorld),ie.uniformsGroups!==void 0){let Nt=ie.uniformsGroups;for(let ti=0,yi=Nt.length;ti<yi;ti++){let mn=Nt[ti];we.update(mn,zn),we.bind(mn,zn)}}return zn}function Wa(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.sunLights.needsUpdate=$,N.sunLightShadows.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function Au(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(N,$,ae){let ie=Y.get(N);ie.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Y.get(N.texture).__webglTexture=$,Y.get(N.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ae,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,$){let ae=Y.get(N);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(N,$=0,ae=0){G=N,U=$,z=ae;let ie=null,se=!1,Be=!1;if(N){let ze=Y.get(N);if(ze.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(B.FRAMEBUFFER,ze.__webglFramebuffer),O.copy(N.viewport),K.copy(N.scissor),oe=N.scissorTest,A.viewport(O),A.scissor(K),A.setScissorTest(oe),D=-1;return}else if(ze.__webglFramebuffer===void 0)J.setupRenderTarget(N);else if(ze.__hasExternalTextures)J.rebindTextures(N,Y.get(N.texture).__webglTexture,Y.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let xt=N.depthTexture;if(ze.__boundDepthTexture!==xt){if(xt!==null&&Y.has(xt)&&(N.width!==xt.image.width||N.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(N)}}let Oe=N.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Be=!0);let je=Y.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(je[$])?ie=je[$][ae]:ie=je[$],se=!0):N.samples>0&&J.useMultisampledRTT(N)===!1?ie=Y.get(N).__webglMultisampledFramebuffer:Array.isArray(je)?ie=je[ae]:ie=je,O.copy(N.viewport),K.copy(N.scissor),oe=N.scissorTest}else O.copy(Se).multiplyScalar(j).floor(),K.copy(Ge).multiplyScalar(j).floor(),oe=$e;if(ae!==0&&(ie=I),A.bindFramebuffer(B.FRAMEBUFFER,ie)&&A.drawBuffers(N,ie),A.viewport(O),A.scissor(K),A.setScissorTest(oe),se){let ze=Y.get(N.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,ae)}else if(Be){let ze=$;for(let Oe=0;Oe<N.textures.length;Oe++){let je=Y.get(N.textures[Oe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Oe,je.__webglTexture,ae,ze)}}else if(N!==null&&ae!==0){let ze=Y.get(N.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,ae)}D=-1};function Xa(N){let $=Y.get(N);return($.__readFormat!==N.format||$.__readType!==N.type)&&($.__readFormat=N.format,$.__readType=N.type,$.__formatReadable=F.textureFormatReadable(N.format),$.__typeReadable=F.textureTypeReadable(N.type)),$}this.readRenderTargetPixels=function(N,$,ae,ie,se,Be,Xe,ze=0){if(!(N&&N.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Y.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(Oe=Oe[Xe]),Oe){A.bindFramebuffer(B.FRAMEBUFFER,Oe);try{let je=N.textures[ze],xt=je.format,_t=je.type;N.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ze);let Ze=Xa(je);if(Ze.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-ie&&ae>=0&&ae<=N.height-se&&B.readPixels($,ae,ie,se,Ne.convert(xt),Ne.convert(_t),Be)}finally{let je=G!==null?Y.get(G).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(N,$,ae,ie,se,Be,Xe,ze=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Y.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(Oe=Oe[Xe]),Oe)if($>=0&&$<=N.width-ie&&ae>=0&&ae<=N.height-se){A.bindFramebuffer(B.FRAMEBUFFER,Oe);let je=N.textures[ze],xt=je.format,_t=je.type;N.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ze);let Ze=Xa(je);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.bufferData(B.PIXEL_PACK_BUFFER,Be.byteLength,B.STREAM_READ),B.readPixels($,ae,ie,se,Ne.convert(xt),Ne.convert(_t),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let tt=G!==null?Y.get(G).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,tt);let St=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await b0(B,St,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Be),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ot),B.deleteSync(St),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,$=null,ae=0){let ie=Math.pow(2,-ae),se=Math.floor(N.image.width*ie),Be=Math.floor(N.image.height*ie),Xe=$!==null?$.x:0,ze=$!==null?$.y:0;J.setTexture2D(N,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,Xe,ze,se,Be),A.unbindTexture()},this.copyTextureToTexture=function(N,$,ae=null,ie=null,se=0,Be=0){let Xe,ze,Oe,je,xt,_t,Ze,ot,tt,St=N.isCompressedTexture?N.mipmaps[Be]:N.image;if(ae!==null)Xe=ae.max.x-ae.min.x,ze=ae.max.y-ae.min.y,Oe=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,xt=ae.min.y,_t=ae.isBox3?ae.min.z:0;else{let dt=Math.pow(2,-se);Xe=Math.floor(St.width*dt),ze=Math.floor(St.height*dt),N.isDataArrayTexture?Oe=St.depth:N.isData3DTexture?Oe=Math.floor(St.depth*dt):Oe=1,je=0,xt=0,_t=0}ie!==null?(Ze=ie.x,ot=ie.y,tt=ie.z):(Ze=0,ot=0,tt=0);let Ke=Ne.convert($.format),yn=Ne.convert($.type),qe;$.isData3DTexture?(J.setTexture3D($,0),qe=B.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(J.setTexture2DArray($,0),qe=B.TEXTURE_2D_ARRAY):(J.setTexture2D($,0),qe=B.TEXTURE_2D),A.activeTexture(B.TEXTURE0),A.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment);let Mn=A.getParameter(B.UNPACK_ROW_LENGTH),Rt=A.getParameter(B.UNPACK_IMAGE_HEIGHT),zn=A.getParameter(B.UNPACK_SKIP_PIXELS),Me=A.getParameter(B.UNPACK_SKIP_ROWS),ht=A.getParameter(B.UNPACK_SKIP_IMAGES);A.pixelStorei(B.UNPACK_ROW_LENGTH,St.width),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St.height),A.pixelStorei(B.UNPACK_SKIP_PIXELS,je),A.pixelStorei(B.UNPACK_SKIP_ROWS,xt),A.pixelStorei(B.UNPACK_SKIP_IMAGES,_t);let Qe=N.isDataArrayTexture||N.isData3DTexture,ft=$.isDataArrayTexture||$.isData3DTexture;if(N.isDepthTexture){let dt=Y.get(N),Dt=Y.get($),Nt=Y.get(dt.__renderTarget),ti=Y.get(Dt.__renderTarget);A.bindFramebuffer(B.READ_FRAMEBUFFER,Nt.__webglFramebuffer),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let yi=0;yi<Oe;yi++)Qe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(N).__webglTexture,se,_t+yi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get($).__webglTexture,Be,tt+yi)),B.blitFramebuffer(je,xt,Xe,ze,Ze,ot,Xe,ze,B.DEPTH_BUFFER_BIT,B.NEAREST);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(se!==0||N.isRenderTargetTexture||Y.has(N)){let dt=Y.get(N),Dt=Y.get($);A.bindFramebuffer(B.READ_FRAMEBUFFER,C),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,L);for(let Nt=0;Nt<Oe;Nt++)Qe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.__webglTexture,se,_t+Nt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dt.__webglTexture,se),ft?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,Be,tt+Nt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dt.__webglTexture,Be),se!==0?B.blitFramebuffer(je,xt,Xe,ze,Ze,ot,Xe,ze,B.COLOR_BUFFER_BIT,B.NEAREST):ft?B.copyTexSubImage3D(qe,Be,Ze,ot,tt+Nt,je,xt,Xe,ze):B.copyTexSubImage2D(qe,Be,Ze,ot,je,xt,Xe,ze);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ft?N.isDataTexture||N.isData3DTexture?B.texSubImage3D(qe,Be,Ze,ot,tt,Xe,ze,Oe,Ke,yn,St.data):$.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,Be,Ze,ot,tt,Xe,ze,Oe,Ke,St.data):B.texSubImage3D(qe,Be,Ze,ot,tt,Xe,ze,Oe,Ke,yn,St):N.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Be,Ze,ot,Xe,ze,Ke,yn,St.data):N.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Be,Ze,ot,St.width,St.height,Ke,St.data):B.texSubImage2D(B.TEXTURE_2D,Be,Ze,ot,Xe,ze,Ke,yn,St);A.pixelStorei(B.UNPACK_ROW_LENGTH,Mn),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Rt),A.pixelStorei(B.UNPACK_SKIP_PIXELS,zn),A.pixelStorei(B.UNPACK_SKIP_ROWS,Me),A.pixelStorei(B.UNPACK_SKIP_IMAGES,ht),Be===0&&$.generateMipmaps&&B.generateMipmap(qe),A.unbindTexture()},this.initRenderTarget=function(N){Y.get(N).__webglFramebuffer===void 0&&J.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?J.setTextureCube(N,0):N.isData3DTexture?J.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?J.setTexture2DArray(N,0):J.setTexture2D(N,0),A.unbindTexture()},this.resetState=function(){U=0,z=0,G=null,A.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var Xt=(i,e,t)=>i<e?e:i>t?t:i,Bt=(i,e,t)=>i+(e-i)*t,su=i=>i*i*(3-2*i),Pt=(i,e,t)=>{let n=Xt((t-i)/(e-i),0,1);return n*n*(3-2*n)},rp=1337;function op(i){rp=i|0}function Q2(i){return i=i^rp|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Xn=(i,e)=>Q2(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function ai(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Bt(Xn(t,e),Xn(t+1,e),s)}var ru=(i,e=0)=>ai(i,e)*.55+ai(i*2.03,e+7)*.3+ai(i*4.1,e+13)*.15;function tn(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var iu=new Ae,de=i=>(iu.set(i),[iu.r,iu.g,iu.b]),pf=(i,e,t)=>[Bt(i[0],e[0],t),Bt(i[1],e[1],t),Bt(i[2],e[2],t)],xn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var qi=["city","sakura","coast","country","mountain","snow"],Ra={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:1.6,base:5.2,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},mf=1500,ap=260,Rs=0,gf=0;function cp(i){gf=Math.max(0,qi.indexOf(i))}function io(i){let e=Math.floor(i/mf),t=i-e*mf,n=su(Xt((t-(mf-ap))/ap,0,1)),s=qi.length;return{a:qi[((e+gf)%s+s)%s],b:qi[((e+gf+1)%s+s)%s],t:n}}function Ut(i){let e=io(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var Jt=i=>{let e=io(i);return e.t<.5?e.a:e.b};function An(i,e){let t=io(i);return Bt(Ra[t.a][e],Ra[t.b][e],t.t)}var er=650,tr=375,so=i=>i*er+tr;function Ca(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Ut(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var vf={x:new Map,r:new Map,t:new Map};function xf(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function Cs(i){let e=Math.round((i-tr)/er);return xf(vf.x,e,()=>{let t=so(e);return Ca(t)?{k:e,s:t}:null})}function ey(i){let e=Cs(i);return e?1-Pt(8,45,Math.abs(i-e.s)):0}var nr=1150,ro=820,Pa=4.6,_f=i=>i*nr+ro;function yf(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Ut(i+t);if(n.country+n.sakura<.9)return!1}let e=Cs(i);return!(e&&Math.abs(e.s-i)<170)}function mi(i){let e=Math.round((i-ro)/nr);return xf(vf.r,e,()=>{let t=_f(e);return yf(t)?{k:e,s:t}:null})}function ty(i){let e=mi(i);return e?1-Pt(30,70,Math.abs(i-e.s)):0}function ny(i){let e=-Pa;return i<11?e-1.3:i<16?Bt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Bt(e+.7,.35,(i-20)/5.5):.35}var up=1050,hp=525,an=85,nn=125,iy=24,sy=i=>i*up+hp;function ry(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Ut(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function gi(i){let e=Math.round((i-hp)/up);return xf(vf.t,e,()=>{let t=sy(e);return ry(t)?{k:e,s:t}:null})}function oy(i){let e=gi(i);return e?1-Pt(an+20,nn+25,Math.abs(i-e.s)):0}var ou=0,lu=(i,e)=>{let t=i/nn;return iy*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var Xi=2,au=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(ai(e/300,11)-.5)*2+(ai(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*An(e,"curv")*(1-Math.max(ey(e),ty(e),oy(e)))}elevRaw(e){return An(e,"base")+An(e,"hill")*(ru(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=Cs(e);if(n){let o=1-Pt(8,45,Math.abs(e-n.s));o>0&&(t=Bt(t,this.elevRaw(n.s),o))}let s=mi(e);if(s){let o=1-Pt(30,70,Math.abs(e-s.s));o>0&&(t=Bt(t,this.elevRaw(s.s),o))}let r=gi(e);if(r){let o=1-Pt(an+10,nn+45,Math.abs(e-r.s));o>0&&(t=Bt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*Xi<e+Xi;){let t=this.X.length-1,n=t*Xi,s=this.curv(n+Xi/2)*Xi,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*Xi),this.Z.push(this.Z[t]+Math.cos(r+s/2)*Xi),this.H.push(r+s),this.Y.push(this.elev(n+Xi))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+Xi);let n=e/Xi,s=Math.floor(n),r=n-s;t.x=Bt(this.X[s],this.X[s+1],r),t.z=Bt(this.Z[s],this.Z[s+1],r),t.y=Bt(this.Y[s],this.Y[s+1],r),t.h=Bt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),a=Math.cos(t.h);return t.fx=o,t.fz=a,t.rx=-a,t.rz=o,t}};function lp(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Pt(45,190,r)*16*(.45+.55*ai(e/160+(t>0?50:0),3));case"coast":{if(t>0)return r<s+.9?-.06:-.15+Pt(s+1.5,80,r)*24*(.5+.5*ai(e/170,5))+Pt(80,200,r)*30;if(r<s+1.5)return-.06;if(r<s+1.9)return-.04;let o=r-(s+2);return(o<26?Bt(1.25,-1.6,o/26):Bt(-1.6,-7,Xt((o-26)/20,0,1)))-n}case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let a=8+6*ai(e/140,61),c=r-(s+1);return c<a?c:Math.min(a+(c-a)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+Pt(105,230,r)*95*(.6+.4*ai(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Bt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(ai(e/40+(t>0?3:0),71)-.5):.55+Pt(125,210,r)*40*(.45+.55*ai(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+Pt(135,215,r)*36*(.4+.6*ai(e/210+(t>0?9:0),7))}}function ir(i,e,t,n){let s=io(i),r=lp(s.a,i,e,t,n),o=s.t>0?Bt(r,lp(s.b,i,e,t,n),s.t):r;ou=0;let a=mi(i);if(a){let y=Math.abs(i-a.s);if(y>=36)return o;let S=y<29?ny(y):Bt(.35,o,Pt(29,36,y));return Math.abs(e)<n+3.2&&(S=Math.min(S,-.08)),S}let c=gi(i);if(!c)return o;let u=i-c.s,f=Math.abs(u);if(f>=2*nn)return o;let m=Math.abs(e),g=lu(u,e),v;return f<an?v=m<=n+1.46?-.25:Math.max(o,g):v=Math.max(o,Math.min(g,m<n+1?-.06:m-(n+1))),ou=Math.max(0,v-o),v}function fp(i){let e=mi(i);return e?1-Pt(27,34,Math.abs(i-e.s)):0}var Ia=new k,cu=new k,ay=[1,1,1],_n=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new nt,this.nm=new gt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,a,c,u){this.n>=this.cap&&this.grow(this.n+1);let f=this.e,m=this.ne,g=this.n*3,v=this.P,y=this.bb,S=f[0]*e+f[4]*t+f[8]*n+f[12],l=f[1]*e+f[5]*t+f[9]*n+f[13],h=f[2]*e+f[6]*t+f[10]*n+f[14];v[g]=S,v[g+1]=l,v[g+2]=h,S<y[0]&&(y[0]=S),l<y[1]&&(y[1]=l),h<y[2]&&(y[2]=h),S>y[3]&&(y[3]=S),l>y[4]&&(y[4]=l),h>y[5]&&(y[5]=h);let d=m[0]*s+m[3]*r+m[6]*o,x=m[1]*s+m[4]*r+m[7]*o,p=m[2]*s+m[5]*r+m[8]*o,_=127/(Math.sqrt(d*d+x*x+p*p)||1);if(this.N[g]=Math.round(d*_),this.N[g+1]=Math.round(x*_),this.N[g+2]=Math.round(p*_),this.hasUV&&(this.U[this.n*2]=a,this.U[this.n*2+1]=c),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(l)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasColor){let T=u||ay,E=this.Cl;E[g]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,E[g+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,E[g+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){Ia.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),cu.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),cu.lengthSq()<1e-12&&cu.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Ia.cross(cu).normalize();let a=Ia.x,c=Ia.y,u=Ia.z,f=o?o.u0:0,m=o?o.u1:1,g=o?o.v0:0,v=o?o.v1:1;this.vtx(e[0],e[1],e[2],a,c,u,f,g,r),this.vtx(t[0],t[1],t[2],a,c,u,m,g,r),this.vtx(n[0],n[1],n[2],a,c,u,m,v,r),this.vtx(e[0],e[1],e[2],a,c,u,f,g,r),this.vtx(n[0],n[1],n[2],a,c,u,m,v,r),this.vtx(s[0],s[1],s[2],a,c,u,f,v,r)}box(e,t,n,s,r,o,a,c=null,u=null){let f=c||{},m=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],m.nz||a,f.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],m.pz||a,f.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],m.nx||a,f.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],m.px||a,f.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],m.py||a,f.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],m.ny||a,f.ny)}cyl(e,t,n,s,r,o,a,c,u=!0){let f=(s-r)/o;for(let m=0;m<a;m++){let g=m/a*Math.PI*2,v=(m+1)/a*Math.PI*2,y=Math.cos(g),S=Math.sin(g),l=Math.cos(v),h=Math.sin(v),d=[e+y*s,t,n+S*s],x=[e+l*s,t,n+h*s],p=[e+l*r,t+o,n+h*r],_=[e+y*r,t+o,n+S*r];this.vtx(d[0],d[1],d[2],y,f,S,0,0,c),this.vtx(_[0],_[1],_[2],y,f,S,0,0,c),this.vtx(p[0],p[1],p[2],l,f,h,0,0,c),this.vtx(d[0],d[1],d[2],y,f,S,0,0,c),this.vtx(p[0],p[1],p[2],l,f,h,0,0,c),this.vtx(x[0],x[1],x[2],l,f,h,0,0,c),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,c),this.vtx(p[0],p[1],p[2],0,1,0,0,0,c),this.vtx(_[0],_[1],_[2],0,1,0,0,0,c))}}rod(e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],u=t[2]-e[2],f=Math.hypot(a,c,u);a/=f,c/=f,u/=f;let m=0,g=1,v=0;Math.abs(c)>.99&&(m=1,g=0);let y=c*v-u*g,S=u*m-a*v,l=a*g-c*m,h=Math.hypot(y,S,l);y/=h,S/=h,l/=h;let d=S*u-l*c,x=l*a-y*u,p=y*c-S*a;for(let _=0;_<r;_++){let T=_/r*Math.PI*2,E=(_+1)/r*Math.PI*2,M=Math.cos(T),b=Math.sin(T),w=Math.cos(E),R=Math.sin(E),P=y*M+d*b,I=S*M+x*b,C=l*M+p*b,L=y*w+d*R,U=S*w+x*R,z=l*w+p*R,G=[e[0]+P*n,e[1]+I*n,e[2]+C*n],D=[e[0]+L*n,e[1]+U*n,e[2]+z*n],H=[t[0]+L*s,t[1]+U*s,t[2]+z*s],O=[t[0]+P*s,t[1]+I*s,t[2]+C*s];this.vtx(G[0],G[1],G[2],P,I,C,0,0,o),this.vtx(D[0],D[1],D[2],L,U,z,0,0,o),this.vtx(H[0],H[1],H[2],L,U,z,0,0,o),this.vtx(G[0],G[1],G[2],P,I,C,0,0,o),this.vtx(H[0],H[1],H[2],L,U,z,0,0,o),this.vtx(O[0],O[1],O[2],P,I,C,0,0,o)}return f}blob(e,t,n,s,r,o,a=0,c=1){let u=dp[a%dp.length],f=u.attributes.position.array,m=u.attributes.normal.array,g=u.userData.disp;for(let v=0;v<f.length;v+=3){let y=1+g[v/3],S=Math.max(0,Math.min(1,m[v+1]*.5+.5)),l=[o[0]+(r[0]-o[0])*S,o[1]+(r[1]-o[1])*S,o[2]+(r[2]-o[2])*S];this.vtx(e+f[v]*s*y,t+f[v+1]*s*y*c,n+f[v+2]*s*y,m[v],m[v+1],m[v+2],0,0,l)}}wire(e,t,n,s,r,o=10){let a=e;this.noShadow=!0;for(let c=1;c<=o;c++){let u=c/o,f=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(a,f,s,s,3,r),a=f}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,a,c]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],a,c,s[o])}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,a=e.C,c=e.U,u=this.n,f=this.bb;for(let m=0;m<e.n*3;m+=3){let g=r[m],v=r[m+1],y=r[m+2],S=u*3+m,l=n[0]*g+n[4]*v+n[8]*y+n[12],h=n[1]*g+n[5]*v+n[9]*y+n[13],d=n[2]*g+n[6]*v+n[10]*y+n[14];this.P[S]=l,this.P[S+1]=h,this.P[S+2]=d,this.hasAO&&(this.A[u+m/3]=this.aoByte(h)),l<f[0]&&(f[0]=l),h<f[1]&&(f[1]=h),d<f[2]&&(f[2]=d),l>f[3]&&(f[3]=l),h>f[4]&&(f[4]=h),d>f[5]&&(f[5]=d);let x=o[m],p=o[m+1],_=o[m+2],T=s[0]*x+s[3]*p+s[6]*_,E=s[1]*x+s[4]*p+s[7]*_,M=s[2]*x+s[5]*p+s[8]*_,b=127/(Math.sqrt(T*T+E*E+M*M)||1);this.N[S]=Math.round(T*b),this.N[S+1]=Math.round(E*b),this.N[S+2]=Math.round(M*b)}this.hasColor&&(a?this.Cl.set(a,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(c?this.U.set(c,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.n+=e.n}build(){if(!this.n)return null;let e=new bt,t=this.n,n=this.bb;return e.setAttribute("position",new Gt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new Gt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new Gt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new Gt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new Gt(this.Lt.slice(0,t),1,!0)),this.hasColor&&e.setAttribute("color",new Gt(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new hi(new k(n[0],n[1],n[2]),new k(n[3],n[4],n[5])),e.boundingSphere=e.boundingBox.getBoundingSphere(new fi),e}},dp=[0,1,2,3].map(i=>{let e=new aa(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,a)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(a*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});pt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var ly=pt.shadowmap_pars_fragment;function bf(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;pt.shadowmap_pars_fragment=ly.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}bf(1);function vp(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";pt.shadowmap_pars_fragment=t+pt.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}pt.lights_fragment_begin=pt.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var ss=4200,We={uSkyHor:{value:new Ae(.7,.8,.9)},uSkyZen:{value:new Ae(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new De},uSunDir:{value:new k(0,1,0)},uSunCol:{value:new Ae(1,1,1)},uTuftV:{value:new yt(.167,.333,.164,.165)},uTunA:{value:new k(0,-1e4,0)},uTunB:{value:new k(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new k},uCarFwd:{value:new k(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:cy()},uCloudTex:{value:null},uCloudOrg:{value:new De},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new De(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function xp(i){let e=new xs(new Uint8Array(i),i.length,1,Ks);return e.minFilter=e.magFilter=fn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Qn=xp([16,16,16,70,200,255,255,255]),La=xp([28,40,70,130,200,240,255,255]);function cy(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new xs(e,256,256,jn);return s.wrapS=s.wrapT=Nr,s.magFilter=Wt,s.minFilter=Wn,s.generateMipmaps=!0,s.colorSpace=Pi,s.needsUpdate=!0,s}var vi=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,uu=1600,Mf=256,uy=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/uu).toFixed(8)} + 0.5).r * uCloudSh; }`,hy=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,_p=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/uu).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,yp=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,fy=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,dy=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,hu=new Xr;hu.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};hu.customProgramCacheKey=()=>"propdepth";function Mp(){let i=new zt(Mf,Mf,{format:Ks,type:Fn,depthBuffer:!1,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),e=new Mt({uniforms:{uCenter:{value:new De},uOrigin:We.uOrigin,uTime:We.uTime,uNoiseTex:We.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${uu.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new vt(new rn(2,2),e),n=new ns;t.frustumCulled=!1,We.uCloudTex.value=i.texture,We.uCloudTex.rt=i;let s=uu/Mf;return{update(r,o,a,c,u){let f=Math.round((o+c)/s)*s-c,m=Math.round((a+u)/s)*s-u;e.uniforms.uCenter.value.set(f,m),We.uCloudOrg.value.set(f,m);let g=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(g)}}}function sr(i,e="",t="",n=!0){i.uniforms.uOrigin=We.uOrigin,i.uniforms.uCloudSh=We.uCloudSh,i.uniforms.uTime=We.uTime,i.uniforms.uNoiseTex=We.uNoiseTex,i.uniforms.uCloudTex=We.uCloudTex,i.uniforms.uCloudOrg=We.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=We[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?_p:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${vi}${uy}${fy}${e}`).replace("#include <opaque_fragment>",`${n?yp:hy}${t}${dy}
#include <opaque_fragment>`)}var py=`
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
`,my=`
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
#endif`,gy=`
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
}`,bp={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"};function Sp(i){let e={};for(let t of i)e[bp[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),e}var pp=new Map;function Da(i){let e=[...new Set(i)].sort().join("+"),t=pp.get(e);return t||(t=Tp(Sp(e.split("+")),e),pp.set(e,t)),t}function Tp(i=Sp(Object.keys(bp)),e="all"){let t=new on({color:16777215,gradientMap:Qn});return t.defines=i,t.onBeforeCompile=n=>{n.uniforms.uSkyHor=We.uSkyHor,n.uniforms.uSkyZen=We.uSkyZen,n.uniforms.uWet=We.uWet,n.uniforms.uNight=We.uNight,n.uniforms.uSunDir=We.uSunDir,n.uniforms.uSunCol=We.uSunCol;for(let s of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])n.uniforms[s]=We[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),sr(n,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${py}`,gy+my,!1),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v17-"+e,t}function mp(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),sr(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function vy(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=We[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function xy(i){i.uniforms.uLightsOn=We.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function gp(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function Sf(i){return i.onBeforeCompile=e=>sr(e),i.customProgramCacheKey=()=>"cs",i}var _y="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",yy=(i,e,t="")=>`
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
}`;function Tf(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=We[o];s&&Object.assign(r.uniforms,s.uniforms),sr(r,_y+(s?s.pars:""),yy(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var Ps=48;function Ep(i,e){let t=new on({color:16777215,gradientMap:La});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,e,i);for(let s of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])n.uniforms[s]=We[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${_p}
uniform vec4 uG[${Ps}], uGM[${Ps/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${Ps-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  vec2 pid = floor(vec2(mod(gs, ${ss.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${yp}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>"grass-v4",t}function wp(i,e){let t={};t.ground=Tp(),t.color=mp(new on({vertexColors:!0,gradientMap:Qn}),1.6,.1,"color-v3",gp),t.atlas=new on({vertexColors:!0,gradientMap:Qn,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=a=>{gp(a),xy(a),sr(a)},t.atlas.customProgramCacheKey=()=>"atlas-v5",t.foliage=mp(new on({vertexColors:!0,gradientMap:La}),2.6,.24,"foliage-v2"),t.lamp=new cn({color:15789798}),t.sig=new cn({color:new Ae(.15,1.7,1.1)}),t.sodium=new cn({color:new Ae(5,2.3,.65)}),t.decal=new on({vertexColors:!0,gradientMap:Qn,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=a=>sr(a),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new on({map:e,vertexColors:!0,gradientMap:La,alphaTest:.42,side:En}),t.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",pt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),sr(a),vy(a),a.uniforms.uTuftV=We.uTuftV,a.uniforms.uWind=We.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v5"),t.wire=new cn({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let o=new Jn(n);return t.pool=new cn({map:o,color:16762746,transparent:!0,opacity:0,blending:is,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}var My=de("#f2c230"),Ap=de("#26272c");function fu(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=An(s,"rw"),a=n*(o+.8),c=Ut(s),u=c.city+c.sakura>.5;t.push({x:r.x+r.rx*a,z:r.z+r.rz*a,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function Rp(){let i=new Kt,e=Sf(new on({vertexColors:!0,gradientMap:Qn})),t=new cn({color:new Ae(6,.45,.3)}),n=new cn({color:new Ae(.22,.03,.03)}),s=[0,1].map(()=>{let r=new Kt,o=new Kt;r.add(o),o.position.set(-.42,1.02,-.02);let a=new _n,c=3.6;for(let m=0,g=0;g<c;m++,g+=.45)a.box(-Math.min(g+.45,c),-.065,-.065,-g,.065,.065,m%2?Ap:My);a.box(0,-.09,-.07,.38,.09,.07,Ap);let u=new vt(a.build(),e);u.castShadow=!0,o.add(u);let f=[-.28,.28].map(m=>{let g=new vt(new Xs(.13,18),n);return g.position.set(m,2.75,-.1),g.rotation.y=Math.PI,r.add(g),g});return i.add(r),{root:r,pivot:o,arm:u,lamps:f,L:c}});return i.visible=!1,{group:i,update(r,o,a,c,u){i.visible=!!r,r&&r.forEach((f,m)=>{let g=s[m];g.root.position.set(f.x-o.x,f.y,f.z-o.z),g.root.rotation.y=f.yaw,g.arm.scale.x=(f.rw+.25)/g.L,g.pivot.rotation.z=-a*(Math.PI/2-.06);let v=Math.floor(u*2.5)%2;g.lamps[0].material=c&&v===0?t:n,g.lamps[1].material=c&&v===1?t:n})}}}function by(){let t=()=>{let h=document.createElement("canvas");return h.width=1024,h.height=512,h},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),a='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let h=0;h<1024;h+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(h,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let u=[.1,.36,.62,.88].map(h=>h*1024),f=(h,d,x,p)=>{let _=r.createLinearGradient(h,d,h+x*.3,d+p);_.addColorStop(0,"#5d7fae"),_.addColorStop(.6,"#9db7d6"),_.addColorStop(1,"#2f3f55"),r.fillStyle=_,r.fillRect(h,d,x,p),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(h+x*.2,d),r.lineTo(h+x*.38,d),r.lineTo(h+x*.1,d+p),r.lineTo(h-x*.08,d+p),r.fill(),o.fillStyle="#ffeccc",o.fillRect(h,d,x,p)};for(let h=0;h<u.length-1;h++){let d=u[h]+40,x=u[h+1]-40,p=3,_=(x-d)/p;for(let T=0;T<p;T++)r.fillStyle="#6b737c",r.fillRect(d+T*_+2,34,_-4,58),f(d+T*_+6,38,_-12,50)}for(let h of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(h+2,34,28,58),f(h+5,38,22,50);for(let h of u)r.fillStyle="#c3c8ce",r.fillRect(h-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(h-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(h-30,22,60,c-36),f(h-24,34,20,46),f(h+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let h of u)r.fillStyle="#c3c8ce",r.fillRect(h-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${a}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let m=0,g=176,v=256,y=256;r.fillStyle="#d3d7dc",r.fillRect(m,g,v,y),r.fillStyle="#20262e",r.fillRect(m+14,g+44,v-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(m+40,g+44),r.lineTo(m+80,g+44),r.lineTo(m+40,g+140),r.lineTo(m+14,g+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(m+v/2-4,g+44,8,96),r.fillStyle="#111",r.fillRect(m+50,g+12,v-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${a}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",m+v/2,g+26),r.fillStyle="#1f9a50",r.fillRect(m,g+150,v,18),r.fillStyle="#e8892b",r.fillRect(m,g+170,v,7);for(let h of[m+40,m+v-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(h,g+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(h+(h<m+v/2?28:-28),g+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(m,g+y-30,v,30),r.fillStyle="#3a3f46",r.font=`800 16px ${a}`,r.fillText("17",m+v/2,g+220),o.fillStyle="#111",o.fillRect(m,g,v,y),o.fillStyle="#ff9a2a",o.font=`800 18px ${a}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",m+v/2,g+26);for(let h of[m+40,m+v-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(h,g+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let S=h=>{let d=new Jn(h);return d.colorSpace=Qt,d.anisotropy=4,d},l=(h,d,x,p)=>({u0:h/1024,u1:(h+x)/1024,v0:1-(d+p)/512,v1:1-d/512});return{map:S(n),em:S(s),side:l(0,0,1024,c),sideR:{...l(0,0,1024,c),flip:!0},front:l(m,g,v,y),plain:l(342,202,28,28)}}function Cp(){let i=by(),e=Sf(new on({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:Qn})),t=new _n({uv:!0}),n=[1,1,1],s=de("#9aa1a9"),r=de("#3b4047"),o=de("#2a2d33"),a=19.5,c=.6,u=3,f=1.45,m=.95,g=4,v=4,y=.3,S=de("#33363b"),l={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},h=(M,b,w,R,P,I,C,L=!1)=>t.box(M,b,w,R,P,I,C,l,L?{noBottom:!0}:null),d=(M,b,w,R,P,I)=>{let L=w-P/2,U=w+P/2;for(let z=0;z<12;z++){let G=z/12*Math.PI*2,D=(z+1)/12*Math.PI*2,H=M+Math.cos(G)*R,O=b+Math.sin(G)*R,K=M+Math.cos(D)*R,oe=b+Math.sin(D)*R;t.quad([H,O,L],[K,oe,L],[K,oe,U],[H,O,U],I,i.plain),t.quad([M,b,U],[H,O,U],[K,oe,U],[K,oe,U],I,i.plain),t.quad([M,b,L],[K,oe,L],[H,O,L],[H,O,L],I,i.plain)}},x=u*a+(u-1)*c;for(let M=0;M<u;M++){let b=-x/2+a/2+M*(a+c),w=b-a/2,R=b+a/2;t.quad([w,m,f],[R,m,f],[R,g,f],[w,g,f],n,i.side),t.quad([R,m,-f],[w,m,-f],[w,g,-f],[R,g,-f],n,i.side);let P=M===u-1,I=M===0;t.quad([R,m,f],[R,m,-f],[R,g,-f],[R,g,f],P?n:de("#c9ced4"),P?i.front:i.plain),t.quad([w,m,-f],[w,m,f],[w,g,f],[w,g,-f],I?n:de("#c9ced4"),I?i.front:i.plain);for(let C=0;C<v;C++)for(let L of[1,-1]){let U=C/v*Math.PI/2,z=(C+1)/v*Math.PI/2,G=L*f*Math.cos(U),D=g+y*Math.sin(U),H=L*f*Math.cos(z),O=g+y*Math.sin(z);t.quad([w,D,G],[R,D,G],[R,O,H],[w,O,H],s,i.plain);for(let K of[w,R]){let oe=[[K,g,0],[K,D,G],[K,O,H]];t.quad(oe[0],oe[1],oe[2],oe[2],s,i.plain),t.quad(oe[0],oe[2],oe[1],oe[1],s,i.plain)}}for(let C of[1,-1])h(w,g-.02,C*f-.04,R,g+.05,C*f+.04,r);for(let C of[b-5.5,b+5.5])h(C-1.3,g+.2,-.8,C+1.3,g+.62,.8,de("#c4c9cf"),!0);h(w+.3,.82,-f+.1,R-.3,m,f-.1,o);for(let[C,L,U,z]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])h(b+C-L/2,.82-U,-1.15+z*.2,b+C+L/2,.82,1.15+z*.2,z>0?o:r);for(let C of[b-7,b+7]){for(let L of[1,-1]){h(C-1.35,.32,L*.86,C+1.35,.56,L*1.02,r);for(let U of[-1.05,1.05])h(C+U-.17,.3,L*.84,C+U+.17,.58,L*1.06,o)}h(C-.35,.5,-1,C+.35,.8,1,r);for(let L of[-1.05,1.05])for(let U of[1,-1])d(C+L,.43,U*.6,.43,.13,S)}if(M<u-1&&h(R,m+.15,-.95,R+c,g-.1,.95,de("#3a3e44")),M===0){let C=b-3,L=g+.7;t.box(C-.6,g+.26,-.6,C+.6,g+.42,.6,r),t.rod([C-.5,g+.42,0],[C,L+.9,0],.03,.03,4,r),t.rod([C+.5,g+.42,0],[C,L+.9,0],.03,.03,4,r),t.rod([C,L+.9,-.85],[C,L+.9,.85],.03,.03,4,r)}}let p=new vt(t.build(),e);p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1;let _=new Kt;_.add(p),_.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:x},E={};return{group:_,st:T,start(M,b,w=16){Object.assign(T,{active:!0,sx:M,dir:b,speed:w,u:-b*290,ds:b>0?-2:2,cleared:!1}),_.visible=!0},update(M,b,w,R,P){if(!T.active)return;T.u+=T.dir*T.speed*M;let I=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?I>P+1:I<-P-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,_.visible=!1;return}b.at(T.sx,E),_.position.set(E.x+E.fx*T.ds+E.rx*T.u-w.x,E.y+.34,E.z+E.fz*T.ds+E.rz*T.u-w.z),_.rotation.y=E.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+R*1.1}}}var Sy='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',rr=2048,or=4096;function mu(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var Dp=mu(256,256);{let i=Dp.getContext("2d"),e=i.createImageData(256,256),t=tn(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var Ef=class{constructor(){this.cA=mu(rr,or),this.cE=mu(rr/2,or/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,rr/2,or/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,rr,or),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Dp,"repeat")}add(e,t,n,s){if(this.x+t+4>rr&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>or)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(o.x,o.y),c.beginPath(),c.rect(0,0,t,n),c.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let a=.5;return this.cells[e]={u0:(o.x+a)/rr,u1:(o.x+t-a)/rr,v0:1-(o.y+n-a)/or,v1:1-(o.y+a)/or,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new Jn(n);return s.colorSpace=Qt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Wn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function un(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Dn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([a,c])=>o.addColorStop(a,c)),i.fillStyle=o,i.fillRect(e,t,n,s)}function oo(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Dn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}un(i,e,t,n,.13)}function rs(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function q(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function ao(i,e,t,n,s,r,o="#d9dde2",a="rgba(40,45,60,0.55)"){q(i,e-r,t-r,n+2*r,s+2*r,o),q(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=a,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function os(i,e,t,n,s,r,o=0){let a=i.createLinearGradient(e,t,e+n*.35,t+s),c=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";a.addColorStop(0,c),a.addColorStop(.55,u),a.addColorStop(1,"#dbe9f6"),i.fillStyle=a,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let f=e+n*r();i.beginPath(),i.moveTo(f,t),i.lineTo(f+n*.18,t),i.lineTo(f-n*.25,t+s),i.lineTo(f-n*.43,t+s),i.fill(),i.restore()}function Pp(i,e,t,n,s,r="#efe6d2"){q(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Dn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function gu(i,e,t=800){i.font=`${t} ${e}px ${Sy}`}function Ct(i,e,t,n,s,r,o,a=800,c=null){gu(i,r,a);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,gu(i,u,a);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function du(i,e,t,n,s,r,o,a=800,c=null){let u=[...e],f=u.length,m=Math.min(r*1.05,(s-n)/f),g=Math.min(r,m*.95);gu(i,g,a),i.textAlign="center",i.textBaseline="middle",u.forEach((v,y)=>{let S=n+(s-n-m*f)/2+m*(y+.5);c&&(i.lineWidth=Math.max(2,g*.12),i.strokeStyle=c,i.strokeText(v,t,S)),i.fillStyle=o,i.fillText(v,t,S)})}function ar(i,e,t,n,s,r,o,a=!0){if(q(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Dn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),a){i.fillStyle="#6a6a6a";for(let c=e+n*.2*o();c<e+n-4;c+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-c),f=s*(.12+o()*.25);i.fillRect(c,t+s-f,u,f)}}i.restore()}function Ty(i,e,t,n,s,r,o){let a=i.getTransform();e.save(),e.drawImage(i.canvas,a.e+t,a.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",q(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,q(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Dn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Ip=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],pu=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Lp=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],Ey=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Np(){let i=new Ef,e=tn(2024),t=240,n=(l,h,d,x,p,_,T=!1)=>{oo(l,i,d,x,"#ece8e0",0);let E=tn(_*31+(p?7:0)+5);if(_===0){let M=d*.14,b=x*.22,w=d*.72,R=x*.5;ao(l,M,b,w,R,5),os(l,M,b,w/2,R,E),os(l,M+w/2,b,w/2,R,E);let P=E()<.8?w*(.18+E()*.25):0;P&&Pp(l,M+2,b+2,P,R-4,E()<.5?"#efe6d2":"#d9e4ea"),q(l,M+w/2-2,b,4,R,"#cfd4da"),q(l,M-8,b+R+5,w+16,6,"#d8d8d4"),rs(l,M-4,b+R+11,8,60),rs(l,M+w-4,b+R+11,8,60),p&&(ar(h,M,b,w,R,T?"#e6eeff":"#ffcf8f",E),P&&q(h,M+2,b+2,P,R-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),q(h,M+w/2-2,b,4,R,"#000"))}else if(_===1){for(let M of[.12,.56]){let b=d*M,w=x*.28,R=d*.3,P=x*.36;ao(l,b,w,R,P,4),os(l,b,w,R,P,E,1),l.fillStyle="rgba(255,255,255,0.35)",l.fillRect(b,w,R,P*.45),rs(l,b,w+P+6,R,40,.1),p&&E()<.8&&ar(h,b,w,R,P,E()<.5?"#ffd9a0":"#e8f0ff",E)}l.fillStyle="#c9c9c4",l.beginPath(),l.arc(d*.88,x*.2,9,0,7),l.fill()}else if(_===2){let M=d*.1,b=x*.12,w=d*.8,R=x*.84;ao(l,M,b,w,R,4),os(l,M,b,w/2,R,E),os(l,M+w/2,b,w/2,R,E);let P=w*(.2+E()*.3);Pp(l,M+2,b+2,P,R-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),q(l,M+w/2-2,b,4,R,"#cfd4da"),p&&(ar(h,M,b,w,R,T?"#e6eeff":"#ffcb85",E),q(h,M+2,b+2,P,R-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),q(h,M+w/2-2,b,4,R,"#000"))}else if(_===3){oo(l,i,d,x,"#dfe3e6",0);let M=x*.25,b=x*.55;os(l,0,M,d,b,E,1);for(let w=0;w<=d;w+=d/4)q(l,w-2,M,4,b,"#8d98a6");if(q(l,0,M-4,d,4,"#8d98a6"),q(l,0,M+b,d,5,"#7d8796"),p)for(let w=0;w<4;w++)E()<.7&&ar(h,w*d/4+2,M,d/4-4,b,E()<.6?"#f2f6ff":"#ffe2b0",E)}else if(_===4){l.fillStyle="#6b4a35",l.fillRect(0,0,d,x);for(let P=0;P<x;P+=12)q(l,0,P,d,2,"rgba(30,18,10,0.35)"),q(l,0,P+2,d,1,"rgba(255,220,180,0.06)");un(l,i,d,x,.15);let M=d*.18,b=x*.25,w=d*.64,R=x*.45;q(l,M-6,b-6,w+12,R+12,"#4a3020"),q(l,M,b,w,R,"#efe4c8"),l.fillStyle="#5a3a26";for(let P=1;P<6;P++)l.fillRect(M+P*w/6-1.5,b,3,R);for(let P=1;P<3;P++)l.fillRect(M,b+P*R/3-1.5,w,3);if(p){ar(h,M,b,w,R,"#ffc070",E,!1),h.fillStyle="#000";for(let P=1;P<6;P++)h.fillRect(M+P*w/6-1.5,b,3,R);for(let P=1;P<3;P++)h.fillRect(M,b+P*R/3-1.5,w,3)}}else if(_===5){q(l,d*.08,0,7,x,"#bdbdb6"),q(l,d*.08+5,0,2,x,"rgba(0,0,0,0.2)");let M=d*.55,b=x*.3,w=d*.22,R=x*.24;ao(l,M,b,w,R,3),q(l,M,b,w,R,"#d6dfe4"),l.fillStyle="rgba(255,255,255,0.4)",l.fillRect(M,b,w,R/2),rs(l,M,b+R+4,w,50,.12),q(l,d*.22,x*.55,26,34,"#cfcfca"),q(l,d*.22+4,x*.55+6,18,12,"#9aa2a8"),p&&ar(h,M,b,w,R,T?"#eef2ff":"#fff0d8",E,!1)}else if(_===6){let M=d*.4,b=x*.35,w=d*.2,R=x*.28;ao(l,M,b,w,R,3),os(l,M,b,w,R,E,1),rs(l,M,b+R+4,w,70,.14),p&&ar(h,M,b,w,R,T?"#e8efff":"#ffd9a0",E)}};for(let l=0;l<7;l++)i.add("win"+l,t,t,(h,d,x,p)=>n(h,d,x,p,!1,l)),i.add("win"+l+"L",t,t,(h,d,x,p)=>n(h,d,x,p,!0,l));for(let l of[0,2,5,6])i.add("win"+l+"C",t,t,(h,d,x,p)=>n(h,d,x,p,!0,l,!0));i.add("plain",t,t,(l,h,d,x)=>{oo(l,i,d,x,"#ece8e0"),rs(l,d*.3,0,12,x*.6,.06)}),i.add("concrete",t,t,(l,h,d,x)=>{oo(l,i,d,x,"#d9d7d0",60);for(let p=0;p<6;p++)rs(l,p*41%d,0,10,x*.5,.07)});let s=288,r=(l,h,d,x,p,_,T)=>{let E=(b,w,R,P,I,C=0)=>{l.fillStyle=I,l.beginPath(),l.ellipse(b,w,R,P,C,0,7),l.fill()},M=b=>b[Math.floor(_()*b.length)];if(T==="bakery"){q(l,h,d,x,p,"#d9b98a"),Dn(l,h,d,x,p,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let b=d+p*.28;b<d+p*.72;b+=p*.2){q(l,h,b,x,5,"#8a5a32");for(let w=h+8;w<h+x-8;w+=15+_()*10){let R=7+_()*6,P=4+_()*3;E(w,b-P,R,P,M(["#c98a3e","#b4732e","#d9a256","#a4632a"])),E(w-R*.2,b-P*1.4,R*.5,P*.35,"rgba(255,230,180,0.5)")}}q(l,h+4,d+p*.8,x-8,p*.2,"#efe7d8"),q(l,h+4,d+p*.8,x-8,3,"#9a9a96");for(let b=h+14;b<h+x-10;b+=18)E(b,d+p*.9,6,4,M(["#e8b35a","#c06a3a","#f2d29a"]));q(l,h+x-64,d+10,52,22,"#7a3e1e"),Ct(l,"\u713C\u304D\u305F\u3066",h+x-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){q(l,h,d,x,p,"#6f5a46");for(let b=d+6;b<d+p*.72;b+=p*.17){q(l,h,b+p*.15,x,4,"#4a3828");for(let w=h+3;w<h+x-4;){let R=3+_()*4,P=p*(.1+_()*.045);q(l,w,b+p*.15-P,R,P,M(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),w+=R+(_()<.1?4:.6)}}q(l,h+4,d+p*.76,x-8,p*.24,"#8a7560");for(let b=h+8;b<h+x-22;b+=24)q(l,b,d+p*.79,20,28,M(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),q(l,b+3,d+p*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){q(l,h,d,x,p,"#e8e2d2"),Dn(l,h,d,x,p,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let b=0;b<7;b++){let w=h+8+_()*(x-16),R=p*(.15+_()*.25);for(let P=0;P<R;P+=3.5)E(w+Math.sin(P*.25+b)*4+(_()-.5)*6,d+4+P,3.4,1.8,M(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),_()*3)}for(let b=0;b<3;b++){let w=d+p*(.5+b*.17);q(l,h,w+14,x,4,"#9a8a76");for(let R=h+10+b*6;R<h+x-8;R+=19){let P=M(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let I=0;I<6;I++){l.strokeStyle="#4a7a3a",l.lineWidth=1.2,l.beginPath();let C=R+(_()-.5)*14;l.moveTo(R,w+10),l.lineTo(C,w-6-_()*8),l.stroke(),E(C,w-8-_()*8,3.2,3,P)}q(l,R-6,w+4,12,11,M(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){q(l,h,d,x,p,"#efece6"),Dn(l,h,d,x,p,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),q(l,h+6,d+p*.18,x-60,3,"#7a7a7a");for(let w=h+12;w<h+x-66;w+=13+_()*5){l.fillStyle=M(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let R=d+p*.18+3,P=p*(.3+_()*.2);l.beginPath(),l.moveTo(w-5,R),l.lineTo(w+5,R),l.lineTo(w+8,R+P),l.lineTo(w-8,R+P),l.closePath(),l.fill()}let b=h+x-32;E(b,d+p*.16,7,8,"#d8cfc4"),l.fillStyle=M(["#c84a5a","#4a6a9a","#e8d8b8"]),l.beginPath(),l.moveTo(b-14,d+p*.24),l.lineTo(b+14,d+p*.24),l.lineTo(b+18,d+p*.66),l.lineTo(b-18,d+p*.66),l.closePath(),l.fill(),q(l,b-2,d+p*.66,4,p*.24,"#8a8a8a"),q(l,h+8,d+p*.74,x*.55,6,"#8a6a4a");for(let w=h+12;w<h+x*.55;w+=14)q(l,w,d+p*.74-8,11,8,M(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let b=7;for(let w=d+p*.25;w<d+p;w+=p*.22)for(let R=h+3;R<h+x-6;R+=6+_()*8)e(),b=Math.imul(b,31)+Math.floor(_()*997+_()*61+_()*7)|0;T==="cafe"?f(l,h,d,x,p,tn(b>>>0)):u(l,h,d,x,p,tn(b>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],a=(l,h,d,x,p,_,T="bbccutp")=>{let E=h+1+_()*3;for(;E<d-4;){let M=T[Math.floor(_()*T.length)],b=o[Math.floor(_()*o.length)],w=_()<.5?"#f8f6f0":o[Math.floor(_()*o.length)],R={b:8+_()*6,c:6+_()*2,u:9+_()*2,t:5+_()*2,p:12+_()*5}[M],P=Math.min(p,{b:14+_()*12,c:11+_()*3,u:10+_()*3,t:18+_()*9,p:14+_()*8}[M]),I=2+Math.floor(_()*5);for(let C=0;C<I&&E+R<d-1;C++,E+=R+.6){let L=x-P;M==="t"?(q(l,E,L+P*.3,R,P*.7,b),q(l,E+R*.3,L+P*.1,R*.4,P*.22,b),q(l,E+R*.28,L,R*.44,P*.11,w==="#f8f6f0"?"#e8e8e4":"#d83a2a"),q(l,E,L+P*.5,R,P*.22,w)):M==="c"?(q(l,E,L,R,P,b),q(l,E,L,R,1.5,"#d8dce0"),q(l,E,L+P*.35,R,P*.3,w)):M==="u"?(l.fillStyle=b,l.beginPath(),l.moveTo(E,L+2),l.lineTo(E+R,L+2),l.lineTo(E+R-1.2,x),l.lineTo(E+1.2,x),l.fill(),q(l,E-.4,L,R+.8,2.2,"#f2efe6"),q(l,E+1,L+P*.45,R-2,P*.25,w)):M==="p"?(l.fillStyle=b,l.beginPath(),l.moveTo(E,x),l.lineTo(E,L+3),l.quadraticCurveTo(E+R/2,L-1.5,E+R,L+3),l.lineTo(E+R,x),l.fill(),q(l,E+1.5,L+P*.35,R-3,P*.35,w),q(l,E,L+2,R,1,"rgba(0,0,0,0.18)")):(q(l,E,L,R,P,b),q(l,E+1.5,L+P*.3,R-3,P*.4,w)),q(l,E,L+1,1,P-1,"rgba(255,255,255,0.28)"),q(l,E+R-1.3,L+1,1.3,P-1,"rgba(0,0,0,0.22)")}E+=1.5+_()*3}},c=(l,h,d,x,p)=>{Dn(l,h,x+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),q(l,h,x,d,4,"#d3d6da"),q(l,h,x+3.2,d,.8,"rgba(40,40,50,0.45)");for(let _=h+4+p()*10;_<h+d-6;_+=14+p()*16)q(l,_,x+.6,5,2.6,p()<.25?"#f2d23a":p()<.2?"#e84a3a":"#ffffff")},u=(l,h,d,x,p,_,T)=>{q(l,h,d,x,p,T?"#f3f1ea":"#ece5d8"),q(l,h,d,x,p*.13,T?"#f6f6f2":"#efebe2");for(let w of[.035,.085])q(l,h,d+p*w,x,2.4,"#ffffff"),Dn(l,h,d+p*w+2.4,x,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Dn(l,h,d+p*.13,x,p*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let w=0,R=h+18+_()*30;w<2&&R<h+x-40;w++,R+=90+_()*40)q(l,R+13,d+p*.13,1,6,"#888"),q(l,R,d+p*.13+6,28,9,o[Math.floor(_()*9)]),q(l,R+4,d+p*.13+9.5,20,2,"rgba(255,255,255,0.8)");let M=d+p*.25,b=p*.165;q(l,h,M-4,x,4,"#c9ccd0");for(let w=0;w<4;w++){let R=M+b*(w+1);Dn(l,h,R-b,x,b,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),a(l,h,h+x,R,b-6,_),c(l,h,x,R,_)}q(l,h,M+b*4+4,x,d+p-M-b*4-4,"#5c6068"),q(l,h,M+b*4+4,x,1.5,"#8a8e96");for(let w=h+2+_()*20;w<h+x;w+=70+_()*12)q(l,w,M-4,3,b*4+8,"#b4b8be"),q(l,w+2.2,M-4,.8,b*4+8,"rgba(0,0,0,0.3)");if(T){let w=d+p*.7;q(l,h,w+26,x,d+p-w-26,"#7a7e86"),q(l,h,w+26,x,2,"#a8acb2");for(let R=h+2;R<h+x-14;R+=15.5){let P=o[Math.floor(_()*o.length)],I=_()*2;q(l,R,w+I,14,26-I,P),q(l,R,w+I,14,5,_()<.6?"#ffffff":"#e8343a"),q(l,R+2,w+I+8,10,10,_()<.5?"#f2c8a8":o[Math.floor(_()*o.length)]),q(l,R+13,w+I,1,26-I,"rgba(0,0,0,0.25)")}}},f=(l,h,d,x,p,_)=>{q(l,h,d,x,p,"#b88a5e"),Dn(l,h,d,x,p,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let E=h;E<h+x;E+=9)q(l,E,d+p*.55,1,p*.45,"rgba(60,35,20,0.25)");let T=d+p*.3;for(let E=0;E<2;E++){let M=T+E*22;q(l,h+8,M,x*.55,3,"#6a4428"),a(l,h+10,h+x*.55+6,M,14,_,"ctu")}q(l,h+x*.64,d+p*.22,x*.28,p*.26,"#2e3a32"),q(l,h+x*.64,d+p*.22,x*.28,2,"#6a4428");for(let E=0;E<5;E++)q(l,h+x*.67,d+p*(.27+E*.04),x*(.12+_()*.1),1.6,"rgba(240,240,230,0.75)");q(l,h+4,d+p*.56,x-8,6,"#5a3820"),q(l,h+4,d+p*.56+6,x-8,p*.08,"#7a5232"),q(l,h+x*.3,d+p*.47,18,p*.09,"#c8ccd0"),q(l,h+x*.3+3,d+p*.47+3,12,5,"#3a3a40");for(let E=h+30+_()*20;E<h+x-20;E+=70+_()*20)q(l,E,d,1,p*.14,"#3a2a1e"),l.fillStyle="#2f3a36",l.beginPath(),l.moveTo(E-9,d+p*.2),l.quadraticCurveTo(E+.5,d+p*.12,E+10,d+p*.2),l.fill(),l.fillStyle="rgba(255,214,150,0.9)",l.beginPath(),l.ellipse(E+.5,d+p*.2,7,2,0,0,7),l.fill();for(let E=h+26+_()*16;E<h+x-26;E+=78+_()*20){q(l,E-16,d+p*.74,32,4,"#4a2e1c"),q(l,E-1.5,d+p*.74+4,3,p*.2,"#2e2420"),q(l,E-8,d+p*.94,16,2,"#2e2420");for(let M of[-24,24])q(l,E+M-6,d+p*.8,12,3,"#3a2618"),q(l,E+M+(M<0?-6:4),d+p*.66,2,p*.17,"#3a2618"),q(l,E+M-5,d+p*.83,1.6,p*.13,"#3a2618"),q(l,E+M+3.4,d+p*.83,1.6,p*.13,"#3a2618");l.fillStyle="#f4f0e8",l.beginPath(),l.ellipse(E-6,d+p*.74-1.5,3,1.5,0,0,7),l.fill()}},m=(l,h,d,x,p,_,T="")=>{let E=tn(_);if(oo(l,i,d,x,"#e6e2da"),p==="glass"||p==="door"||p==="konbini"||p==="cafe"){let b=x*.22,w=d-12,R=x*.78-4;q(l,6,b,w,R,p==="konbini"?"#f6f4ea":p==="cafe"?"#7a5a40":"#8a7a68"),r(l,6,b,w,R,E,T||p),p==="konbini"&&q(l,6,b+4,w,5,"#ffffff"),p==="door"&&(q(l,d/2-30,b+18,60,24,"#fff"),Ct(l,"\u55B6\u696D\u4E2D",d/2,b+30,54,18,"#c82828")),p==="glass"&&!T&&E()<.7&&(q(l,16,b+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),Ct(l,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,b+44,40,16,"#c02020")),Ty(l,h,6,b,w,R,p==="konbini"?"#e4eef8":p==="cafe"?"#f0a868":"#f2d2a6"),l.save(),l.globalAlpha=.35,os(l,6,b,w,R,E),l.restore(),q(l,6,b,w,4,"#4a4e57"),q(h,6,b,w,4,"#000"),p==="door"&&(q(l,d/2-2,b,4,R,"#4a4e57"),q(h,d/2-2,b,4,R,"#000"),q(l,d/2-14,b+R*.45,3,40,"#c0c4c8"),q(l,d/2+11,b+R*.45,3,40,"#c0c4c8")),p==="cafe"&&(q(l,d*.62,x-70,46,62,"#2c3a30"),q(h,d*.62,x-70,46,62,"#000"),Ct(l,"\u30E9\u30F3\u30C1",d*.62+23,x-50,40,13,"#fff",700))}else if(p==="shutter"){let b=x*.2,w=d-12,R=x*.8;q(l,6,b,w,R,"#b8bcc0");for(let P=b;P<b+R;P+=7)q(l,6,P,w,2,"rgba(60,64,72,0.35)"),q(l,6,P+2,w,1,"rgba(255,255,255,0.35)");q(l,6,b,w,10,"#8f949a"),un(l,i,d,x,.12),E()<.5&&(q(l,d/2-40,b+R*.35,80,26,"#fff"),Ct(l,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,b+R*.35+13,74,16,"#333",700))}else if(p==="noren"){q(l,0,0,d,x,"#5b3c28");for(let I=0;I<d;I+=10)q(l,I,x*.2,3,x*.8,"rgba(25,15,8,0.6)");un(l,i,d,x,.15);let M=d*.12,b=x*.24,w=d*.76,R=x*.34,P=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);q(l,M,b,w,R,P);for(let I=1;I<3;I++)q(l,M+w*I/3-1,b+R*.25,2,R*.75,"rgba(255,255,255,0.25)");Ct(l,e.pick(Ey),d/2,b+R*.55,w*.9,46,"#f5f0e6",800),q(l,M,b,w,6,"#3a2a1c"),h.fillStyle="#ffae5c",h.fillRect(M,b+R,w,x-b-R),h.fillStyle="rgba(255,170,90,0.6)",h.fillRect(M,b,w,R),l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d*.9,x*.36,13,19,0,0,7),l.fill(),Ct(l,"\u9152",d*.9,x*.36,16,14,"#fff"),h.fillStyle="#ff6a3a",h.beginPath(),h.ellipse(d*.9,x*.36,13,19,0,0,7),h.fill()}else if(p==="house"){let M=d*.18,b=x*.3,w=d*.34,R=x*.7;q(l,M-6,b-6,w+12,R+6,"#9a9a96"),q(l,M,b,w,R,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),q(l,M+w-14,b+R*.5,4,22,"#d8d0c0"),q(l,M+6,b+10,w-12,R*.25,"rgba(255,255,255,0.18)"),q(l,d*.62,x*.48,30,22,"#cfcfca"),q(l,d*.62+6,x*.48+5,18,4,"#555");let P=d*.6,I=x*.22,C=d*.3,L=x*.2;ao(l,P,I,C,L,3),os(l,P,I,C,L,E,1);for(let U=0;U<3;U++)l.fillStyle="#7b5a43",l.fillRect(d*.6+U*22,x-26,16,18),l.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),l.beginPath(),l.arc(d*.6+U*22+8,x-32,11,0,7),l.fill();h.fillStyle="#ffd08a",h.beginPath(),h.arc(M+w+14,b+8,6,0,7),h.fill(),E()<.6&&(h.fillStyle="#ffcf8f",h.fillRect(P,I,C,L))}else if(p==="garage"){let b=x*.25,w=d-16,R=x*.75;q(l,8,b,w,R,"#efefec");for(let P=b;P<b+R;P+=9)q(l,8,P,w,1.5,"rgba(80,80,90,0.25)");un(l,i,d,x,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((l,h)=>{i.add("shop_"+l,t,s,(d,x,p,_)=>m(d,x,p,_,l,100+h)),(l==="glass"||l==="noren"||l==="house")&&i.add("shop_"+l+"2",t,s,(d,x,p,_)=>m(d,x,p,_,l,200+h)),l==="glass"&&["bakery","books","florist","clothes"].forEach((d,x)=>i.add("shop_glass"+(x+3),t,s,(p,_,T,E)=>m(p,_,T,E,"glass",300+x,d)))});for(let l=0;l<14;l++)i.add("hs"+l,512,76,(h,d,x,p)=>{let[_,T]=pu[l%pu.length],E=Ip[l*7%Ip.length];q(h,0,0,x,p,_),q(h,0,0,x,5,"rgba(255,255,255,0.35)"),q(h,0,p-6,x,6,"rgba(0,0,0,0.18)"),l%3===0&&(q(h,12,12,p-24,p-24,T),Ct(h,E[0],12+(p-24)/2,p/2,p-30,34,_)),Ct(h,E,x/2+(l%3===0?24:0),p/2+2,x*.7,50,T,900),un(h,i,x,p,.08),d.fillStyle=_==="#fff"||_==="#f5efe0"?"#d9d6cc":_,d.fillRect(0,0,x,p),d.globalAlpha=.9,Ct(d,E,x/2+(l%3===0?24:0),p/2+2,x*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[l,h,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+l,512,76,(x,p,_,T)=>{q(x,0,0,_,T,h),q(x,0,0,_,5,"rgba(255,255,255,0.35)"),q(x,0,T-6,_,6,"rgba(0,0,0,0.18)"),Ct(x,l,_/2,T/2+2,_*.7,50,d,900),un(x,i,_,T,.08),p.fillStyle=h,p.fillRect(0,0,_,T),p.globalAlpha=.9,Ct(p,l,_/2,T/2+2,_*.7,50,d,900),p.globalAlpha=1});let g=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],v=(l,h,d,x,p,_)=>{l.beginPath(),l.moveTo(h+_,d),l.arcTo(h+x,d,h+x,d+p,_),l.arcTo(h+x,d+p,h,d+p,_),l.arcTo(h,d+p,h,d,_),l.arcTo(h,d,h+x,d,_),l.closePath()};for(let l=0;l<10;l++)i.add("vs"+l,72,288,(h,d,x,p)=>{let _=Lp[l%Lp.length],T=g[(l*5+2)%g.length],E=l%10===3||l%10===6||l%10===8,[M,b]=pu[(l*3+1)%pu.length],w=E?M==="#fff"||M==="#f5efe0"?"#2b2b33":M:"#fbf7ef",R=E?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][l%4];q(h,0,0,x,p,"#2a2b30"),v(h,3,3,x-6,p-6,8),h.fillStyle=w,h.fill(),Dn(h,3,3,x-6,p-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),h.save(),v(h,8,8,x-16,p-16,6),h.strokeStyle=T,h.globalAlpha=.55,h.lineWidth=7,h.stroke(),h.globalAlpha=1,h.strokeStyle="#fff6fb",h.lineWidth=2.2,h.stroke(),h.restore(),du(h,_,x/2,18,p-18,50,R,900),un(h,i,x,p,.06),q(d,0,0,x,p,"#000"),v(d,3,3,x-6,p-6,8),d.fillStyle=E?"#3a3a3e":"#4a4844",d.fill(),d.save(),v(d,8,8,x-16,p-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),du(d,_,x/2,18,p-18,50,E?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([l,h,d],x)=>i.add("bb"+x,512,240,(p,_,T,E)=>{q(p,0,0,T,E,"#fbfaf5"),q(p,0,0,T,E*.62,d),Ct(p,l,T/2,E*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),Ct(p,h,T/2,E*.8,T*.85,52,"#333",800),un(p,i,T,E,.08),q(_,0,0,T,E,"#555"),_.globalAlpha=.85,q(_,0,0,T,E*.62,d),Ct(_,l,T/2,E*.32,T*.9,96,"#fff",900),_.globalAlpha=1})),i.add("konbini_band",480,72,(l,h,d,x)=>{q(l,0,0,d,x,"#fbfbf7"),q(l,0,x*.62,d,x*.14,"#2a9a4a"),q(l,0,x*.76,d,x*.12,"#f08a24"),q(l,0,x*.88,d,x*.12,"#2f6fd8"),Ct(l,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900),h.fillStyle="#f3f6f0",h.fillRect(0,0,d,x),Ct(h,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900)});for(let l=0;l<3;l++)i.add("vend"+l,128,234,(h,d,x,p)=>{let _=["#d8352a","#2f6fd8","#f4f4f0"][l];q(h,0,0,x,p,_),q(h,8,10,x-16,p*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let E=0;E<4;E++)for(let M=0;M<6;M++){let b=14+M*17,w=18+E*30;h.fillStyle=T[(E*6+M+l)%T.length],h.fillRect(b,w,11,20),h.fillStyle="rgba(255,255,255,0.5)",h.fillRect(b+2,w+2,3,14),h.fillStyle="#2a2a2a",h.fillRect(b,w+23,11,3)}q(h,10,p*.62,x-20,22,"#222"),q(h,x-34,p*.66,14,22,"#bbb"),q(h,14,p*.82,x-28,22,"#1b1b1b"),Ct(h,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][l],x/2,p*.62+11,x-28,14,"#fff",700),un(h,i,x,p,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,x-16,p*.55);for(let E=0;E<4;E++)for(let M=0;M<6;M++)d.fillStyle=T[(E*6+M+l)%T.length],d.fillRect(14+M*17,18+E*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,p*.62,x-20,22)});i.add("ac",128,88,(l,h,d,x)=>{q(l,0,0,d,x,"#e9e9e4"),Dn(l,0,0,d,x,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),l.fillStyle="#9a9c9e",l.beginPath(),l.arc(d*.4,x*.5,x*.36,0,7),l.fill(),l.strokeStyle="#d6d6d2",l.lineWidth=2;for(let p=6;p<x*.36;p+=6)l.beginPath(),l.arc(d*.4,x*.5,p,0,7),l.stroke();for(let p=12;p<x-10;p+=6)q(l,d*.78,p,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(l,h,d,x)=>{q(l,0,0,d,x,"#f2cf3a"),l.strokeStyle="#2f5a2f",l.lineWidth=3,l.strokeRect(3,3,d-6,x-6),Ct(l,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),Ct(l,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.moveTo(2,2),l.lineTo(d-2,2),l.lineTo(d/2,x-2),l.fill(),l.fillStyle="#d8231c",l.beginPath(),l.moveTo(10,7),l.lineTo(d-10,7),l.lineTo(d/2,x-12),l.fill(),Ct(l,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.fillStyle="#1e5bb8",l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.fill(),l.fillStyle="#fff",l.beginPath(),l.moveTo(d/2,22),l.lineTo(d/2+22,50),l.lineTo(d/2+8,50),l.lineTo(d/2+8,88),l.lineTo(d/2-8,88),l.lineTo(d/2-8,50),l.lineTo(d/2-22,50),l.fill()}),i.add("sign_speed",112,112,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=12,l.beginPath(),l.arc(d/2,x/2,d/2-9,0,7),l.stroke(),Ct(l,"30",d/2,x/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(l,h,d,x)=>{q(l,0,0,d,x,"#1d4f9a"),l.strokeStyle="#fff",l.lineWidth=2,l.strokeRect(3,3,d-6,x-6),du(l,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,x-10,24,"#fff",700)});for(let l=0;l<4;l++)i.add("poster"+l,64,90,(h,d,x,p)=>{let _=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][l];q(h,0,0,x,p,_),q(h,4,4,x-8,p*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][l]),Ct(h,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][l],x/2,p*.25,x-12,18,"#fff",900);for(let T=0;T<4;T++)q(h,8,p*.58+T*8,x-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let l=0;l<3;l++)i.add("bal"+l,t,88,(h,d,x,p)=>{let _=["#e9e3d6","#dfe6ea","#efe2dc"][l];if(oo(h,i,x,p,_),l===1)for(let T=10;T<x-6;T+=x/6)q(h,T,10,x/6-8,p-20,"rgba(220,235,245,0.9)"),h.fillStyle="rgba(255,255,255,0.45)",h.fillRect(T,10,x/6-8,(p-20)*.4);else{q(h,0,0,x,7,"rgba(255,255,255,0.4)");for(let T=x/3;T<x;T+=x/3)q(h,T-1,0,2,p,"rgba(0,0,0,0.08)")}q(h,0,p-6,x,6,"rgba(0,0,0,0.12)"),rs(h,x*.3,p-6,10,10,.2)});i.add("kawara",272,256,(l,h,d,x)=>{q(l,0,0,d,x,"#58617a");for(let p=0;p<x;p+=16)Dn(l,0,p,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let p=-4;p<d;p+=20)q(l,p,0,2,x,"rgba(0,0,0,0.18)");un(l,i,d,x,.12)}),i.add("wood",256,256,(l,h,d,x)=>{q(l,0,0,d,x,"#6d4c37");for(let p=0;p<x;p+=14)q(l,0,p,d,2,"rgba(25,15,8,0.4)"),q(l,0,p+2,d,1,"rgba(255,220,180,0.07)");un(l,i,d,x,.16)}),i.add("block",256,128,(l,h,d,x)=>{q(l,0,0,d,x,"#c9c7bf");for(let p=0;p<x;p+=32)for(let _=p/32%2?-32:0;_<d;_+=64)l.strokeStyle="rgba(80,80,80,0.35)",l.lineWidth=2,l.strokeRect(_+1,p+1,62,30);for(let p=0;p<d;p+=64)l.fillStyle="rgba(70,70,70,0.25)",l.fillRect(p+20,40,24,16);un(l,i,d,x,.15),rs(l,0,0,d,40,.1)}),i.add("lantern",64,96,(l,h,d,x)=>{l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),l.fill();for(let p=16;p<x-12;p+=7)q(l,4,p,d-8,1.5,"rgba(0,0,0,0.2)");q(l,d/2-14,2,28,8,"#222"),q(l,d/2-14,x-10,28,8,"#222"),Ct(l,"\u796D",d/2,x/2,d*.6,28,"#fff",900),h.fillStyle="#ff6a35",h.beginPath(),h.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),h.fill()}),i.add("busstop",96,96,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=8,l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.stroke(),Ct(l,"\u30D0\u30B9\u505C",d/2,x/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,l=>q(l,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(l,h,d,x)=>{l.save(),l.translate(d/2,x/2),l.rotate(Math.PI/4),l.fillStyle="#1b1b1b",l.fillRect(-41,-41,82,82),l.fillStyle="#f2c230",l.fillRect(-37,-37,74,74),l.restore(),l.fillStyle="#1b1b1b",l.fillRect(d/2-22,x/2-6,44,18),l.fillRect(d/2-16,x/2-16,18,12),l.fillRect(d/2+8,x/2-13,5,7),l.beginPath(),l.arc(d/2-12,x/2+15,5,0,7),l.arc(d/2+12,x/2+15,5,0,7),l.fill(),Ct(l,"\u8E0F\u5207",d/2,x/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((l,h)=>i.add("bridge"+h,64,176,(d,x,p,_)=>{q(d,0,0,p,_,"#b9b5ab"),un(d,i,p,_,.2),q(d,6,6,p-12,_-12,"#a7a398"),du(d,l,p/2,14,_-14,34,"#3f3c37",800)})),i.add("signal",240,84,(l,h,d,x)=>{q(l,0,0,d,x,"#4a4d52"),q(l,0,0,d,5,"#5c6066"),un(l,i,d,x,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([p,_])=>{l.fillStyle="#26282c",l.beginPath(),l.arc(_,x/2,33,0,7),l.fill(),l.fillStyle=p,l.beginPath(),l.arc(_,x/2,27,0,7),l.fill()})}),i.add("ped_sig",64,128,(l,h,d,x)=>{q(l,0,0,d,x,"#3d4045"),l.fillStyle="#5a1814",l.fillRect(8,8,d-16,x/2-12),l.fillStyle="#0d4f44",l.fillRect(8,x/2+4,d-16,x/2-12),l.fillStyle="rgba(255,255,255,0.18)",l.beginPath(),l.arc(d/2,x*.18,6,0,7),l.fill(),l.fillRect(d/2-5,x*.24,10,18)}),i.add("tomare",256,96,(l,h,d,x)=>{l.clearRect(0,0,d,x),l.fillStyle="rgba(244,244,238,0.012)",l.fillRect(0,0,d,x),Ct(l,"\u6B62\u307E\u308C",d/2,x/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((l,h)=>i.add("hodokyo"+h,256,44,(d,x,p,_)=>{q(d,0,0,p,_,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,p-8,_-8),Ct(d,l,p/2,_/2+1,p*.85,28,"#fff",800)}));let S=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];S.forEach(([l,h,d],x)=>{let p=S[(x+3)%4][0],_=S[(x+1)%4][0];i.add("ekimei"+x,320,124,(T,E,M,b)=>{q(T,0,0,M,b,"#3a3d42"),q(T,4,4,M-8,b-8,"#f8f8f3"),Ct(T,h,M/2,20,M*.5,15,"#2b2b2b",700),Ct(T,l,M/2,52,M*.6,40,"#151515",900),Ct(T,d,M/2,80,M*.5,12,"#555",600),q(T,4,b-30,M-8,26,"#1f9a50"),T.fillStyle="#fff",gu(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+p,12,b-17),T.textAlign="right",T.fillText(_+" \u2192",M-12,b-17),un(T,i,M,b,.06),q(E,4,4,M-8,b-8,"#8a8a84")}),i.add("ekiplate"+x,220,48,(T,E,M,b)=>{q(T,0,0,M,b,"#4b3326"),un(T,i,M,b,.2),Ct(T,l+"\u99C5",M/2,b/2+1,M*.8,30,"#f3ead8",800)})});for(let l of["l","r"])i.add("chev_"+l,96,120,(h,d,x,p)=>{q(h,0,0,x,p,"#f4f4ef"),q(h,4,4,x-8,p-8,"#1e5bb8"),h.fillStyle="#f8f8f4",h.beginPath();let _=l==="r"?1:-1,T=x/2,E=p/2;h.moveTo(T-_*26,E-40),h.lineTo(T+_*22,E),h.lineTo(T-_*26,E+40),h.lineTo(T-_*8,E+40),h.lineTo(T+_*40,E),h.lineTo(T-_*8,E-40),h.closePath(),h.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((l,h)=>i.add("tunnel"+h,360,80,(d,x,p,_)=>{q(d,0,0,p,_,"#e9e7e0"),q(d,4,4,p-8,_-8,"#24403b"),un(d,i,p,_,.08),Ct(d,l,p/2,_*.42,p*.8,38,"#f4f2ea",800),Ct(d,"L = 170 m",p/2,_*.8,p*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(l,h,d,x)=>{q(l,0,0,d,x,"#f6f6f2"),l.fillStyle="#d42a22";for(let p=-20;p<x;p+=26)l.beginPath(),l.moveTo(4,p),l.lineTo(d/2,p+20),l.lineTo(d-4,p),l.lineTo(d-4,p+11),l.lineTo(d/2,p+31),l.lineTo(4,p+11),l.closePath(),l.fill();l.strokeStyle="#222",l.lineWidth=3,l.strokeRect(1.5,1.5,d-3,x-3)}),i.add("xing_plate",128,48,(l,h,d,x)=>{q(l,0,0,d,x,"#f6f6f2"),l.strokeStyle="#d8231c",l.lineWidth=4,l.strokeRect(3,3,d-6,x-6),Ct(l,"\u8E0F\u5207\u6CE8\u610F",d/2,x/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(l,h,d,x)=>{l.clearRect(0,0,d,x),q(l,0,0,d,7,"#e9ebee"),q(l,0,6,d,2,"rgba(60,70,80,0.5)"),q(l,0,x-6,d,6,"#d5d8dc");for(let p=3;p<d;p+=9)q(l,p,7,3,x-13,"#e2e5e9"),q(l,p+2,7,1,x-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(l,h,d,x)=>{let p=tn(4242);q(l,0,0,d,x,"#3d3f3c");let _=38,T=_/Math.SQRT2;l.save(),l.beginPath(),l.rect(0,22,d,x-22),l.clip();for(let E=-2;E*T<x+_;E++)for(let M=-2;M*_<d+_;M++){let b=M*_+(E%2?_/2:0),w=22+E*T,R=.52+p()*.17,P=Math.min(1,Math.max(0,(w-x*.55)/(x*.4))),I=Math.round(255*R*(1-.38*P)),C=`rgb(${I-4},${I-2},${I-9})`;l.fillStyle=C,l.beginPath(),l.moveTo(b,w-T+3.5),l.lineTo(b+T-3.5,w),l.lineTo(b,w+T-3.5),l.lineTo(b-T+3.5,w),l.closePath(),l.fill(),l.fillStyle="rgba(255,255,255,0.12)",l.beginPath(),l.moveTo(b,w-T+3.5),l.lineTo(b+T-3.5,w),l.lineTo(b,w),l.closePath(),l.fill(),P>.3&&p()<.5&&(l.fillStyle=`rgba(70,96,52,${.25+.3*p()})`,l.beginPath(),l.arc(b+(p()-.5)*10,w+6,4+p()*6,0,7),l.fill())}l.restore(),Dn(l,0,x*.55,d,x*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),q(l,0,0,d,22,"#8c8d87"),q(l,0,18,d,4,"rgba(0,0,0,0.3)"),q(l,0,0,d,3,"rgba(255,255,255,0.2)"),un(l,i,d,x,.12)}),i.add("wrail",240,80,(l,h,d,x)=>{l.clearRect(0,0,d,x),q(l,0,0,d,9,"#6a4a34"),q(l,0,0,d,2,"rgba(255,225,190,0.25)"),q(l,0,8,d,2,"rgba(20,10,5,0.45)"),q(l,0,x-10,d,10,"#5e412e"),q(l,0,x-10,d,2,"rgba(255,225,190,0.18)");for(let p=4;p<d;p+=12)q(l,p,9,5,x-19,"#634632"),q(l,p,9,1.2,x-19,"rgba(255,225,190,0.18)"),q(l,p+4,9,1,x-19,"rgba(20,10,5,0.4)");un(l,i,d,x,.15)}),i.add("woodwall",t,t,(l,h,d,x)=>{let p=tn(5151);q(l,0,0,d,x,"#5e4130");for(let _=0;_<x;_+=16){let T=p();q(l,0,_,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),q(l,0,_,d,2,"rgba(255,220,180,0.12)"),q(l,0,_+14,d,2,"rgba(15,8,4,0.45)");for(let E=p()*80;E<d;E+=60+p()*90)q(l,E,_+2,1.5,12,"rgba(15,8,4,0.35)")}Dn(l,0,0,d,x,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),un(l,i,d,x,.2)}),i}function Up(i){let n=mu(1024,3072),s=n.getContext("2d"),r=tn(321),o={},a=512,c={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},u=(l,h,d)=>{let x=c[l],p=256,_=l==="pine",T=l==="sakura";s.save(),s.translate(h,d),s.beginPath(),s.rect(0,0,512,512),s.clip();let E=[[p,p,_?80:92]];for(let b=0;b<(_?10:14);b++){let w=r()*6.28,R=45+r()*120;E.push([p+Math.cos(w)*R,p+Math.sin(w)*R*(_?.42:.9),Math.min(34+r()*52,232-R)])}let M=T?2300:_?2600:2300;for(let b=0;b<M;b++){let w=E[Math.floor(r()*E.length)],R=r()*6.28,P=Math.sqrt(r())*w[2],I=w[0]+Math.cos(R)*P,C=w[1]+Math.sin(R)*P*(_?.45:1),L=P/w[2],U=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(L>.82?.5:0))));if(s.fillStyle=x[U],T){let z=7+r()*8;s.beginPath(),s.arc(I,C,z,0,7),s.fill(),r()<.25&&(s.fillStyle=x[4],s.beginPath(),s.arc(I-z*.3,C-z*.3,z*.4,0,7),s.fill())}else if(_)s.save(),s.translate(I,C),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(l==="momiji"){let z=8+r()*7;s.save(),s.translate(I,C),s.rotate(r()*6.28),s.beginPath();for(let G=0;G<10;G++){let D=G%2?z*.42:z,H=G/10*6.2832;s.lineTo(Math.cos(H)*D,Math.sin(H)*D)}s.closePath(),s.fill(),s.restore()}else if(l==="ginkgo"){let z=9+r()*7;s.save(),s.translate(I,C),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,z,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let z=9+r()*10;s.beginPath(),s.ellipse(I,C,z,z*.55,r()*6.28,0,7),s.fill()}}for(let b=0;b<90;b++){let w=r()*6.28,R=150+r()*85,P=p+Math.cos(w)*R,I=p+Math.sin(w)*R*(_?.45:.92);s.fillStyle=x[1+Math.floor(r()*4)],_?(s.save(),s.translate(P,I),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(P,I,T?6+r()*6:7+r()*6,0,7),s.fill())}if(T)for(let b=0;b<14;b++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let w=p+(r()-.5)*300,R=p+60+r()*120;s.beginPath(),s.moveTo(w,R),s.lineTo(w+(r()-.5)*40,R-20-r()*30),s.stroke()}s.restore(),o[l]={u0:h/1024,u1:(h+512)/1024,v0:1-(d+512)/3072,v1:1-d/3072}},f=(l,h,d,x)=>{s.save(),s.translate(h,d),s.beginPath(),s.rect(0,0,512,512),s.clip();let p=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],_=x?120:170;for(let T=0;T<_;T++){let E=256+(r()-.5)*(x?330:380)*Math.sqrt(r()),M=150+r()*(x?230:300)*(1-Math.abs(E-256)/300),b=(E-256)*.35+(r()-.5)*90,w=9+r()*9,R=E+b,P=512-M,I=Math.min(4,Math.floor(r()*2.2+M/380*2.6)),C=s.createLinearGradient(0,512,0,P);C.addColorStop(0,p[0]),C.addColorStop(.6,p[Math.max(1,I-1)]),C.addColorStop(1,p[I]),s.fillStyle=C,s.beginPath(),s.moveTo(E-w/2,512),s.quadraticCurveTo(E-w/2+b*.3,512-M*.55,R,P),s.quadraticCurveTo(E+w/2+b*.3,512-M*.5,E+w/2,512),s.fill()}if(x)for(let T=0;T<16;T++){let E=110+r()*290,M=150+r()*200,b=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(E+(r()-.5)*20,512),s.quadraticCurveTo(E+(r()-.5)*30,(M+512)/2,E,M),s.stroke(),b<.55){s.fillStyle="#fbfaf2";for(let w=0;w<12;w++){let R=w/12*6.283;s.beginPath(),s.ellipse(E+Math.cos(R)*11,M+Math.sin(R)*11,9,4.5,R,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(E,M,8,0,7),s.fill()}else if(b<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(E,M,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(E-3,M-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let w=0;w<6;w++)s.beginPath(),s.arc(E+(r()-.5)*16,M+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),o[l]={u0:h/1024,u1:(h+512)/1024,v0:1-(d+512)/3072,v1:1-d/3072}},m=(l,h,d)=>{let x=tn(97);s.save(),s.translate(h,d),s.beginPath(),s.rect(0,0,512,512),s.clip(),s.lineCap="round";let p=(_,T,E,M,b,w)=>{let R=_+Math.cos(E)*M,P=T+Math.sin(E)*M;if(s.strokeStyle=w>3?"#76605f":w>1?"#6c5458":"#62494f",s.lineWidth=b,s.beginPath(),s.moveTo(_,T),s.lineTo(R,P),s.stroke(),w<=0||b<.7)return;let I=2+(x()<.4?1:0);for(let C=0;C<I;C++){let L=E+(x()-.5)*1.1+(C-(I-1)/2)*.42;L=L*.8+-Math.PI/2*.2,p(R,P,L,M*(.62+x()*.2),b*.68,w-1)}};for(let _=0;_<6;_++)p(256+(x()-.5)*40,500,-Math.PI/2+(x()-.5)*.9,110+x()*50,5.6,6);s.restore(),o[l]={u0:h/1024,u1:(h+512)/1024,v0:1-(d+512)/3072,v1:1-d/3072}},g=(l,h,d,x,p)=>{let _=tn(x),T=1024,E=504;s.save(),s.translate(h,d+8),s.beginPath(),s.rect(0,0,512,E),s.clip(),s.scale(.5,1);let M=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],b=L=>{let U=L/T;return(.5+.5*Math.min(1,U/.45)**.8)*(1-.4*Math.max(0,(U-.9)/.1))},w=(L,U,z,G)=>{U=Math.min(U,E*.985);let D=L+z,H=E-U,O=L+z*.25,K=E-U*.62-Math.abs(z)*.35;s.moveTo(L-G/2,E),s.quadraticCurveTo(O-G*.42,K,D,H),s.quadraticCurveTo(O+G*.42,K+G*.5,L+G/2,E),s.closePath()},R=[];for(let L=24+_()*24;L<T-20;L+=(L<T*.25?56:44)+_()*26)R.push(L);let P=()=>R[Math.floor(_()*R.length)],I=(L,U,z,G,D,H,O,K,oe)=>{let Ve=M.map(()=>[]);for(let Ue=0;Ue<L;Ue++){let xe=P(),Z=xe+(_()-.5)*34,j=b(Z),ue=Z/T,Pe=E*(U+_()*(z-U))*j*1.12,Se=(_()-.5)*G+(Z-T*.45)*.12;Ve[Math.min(8,K+Math.floor(_()*(oe-K+1)+ue*1.2))].push([Z,Pe,Se,D+_()*(H-D)])}Ve.forEach((Ue,xe)=>{if(!Ue.length)return;let Z=s.createLinearGradient(0,E,0,E*(1-z*.8));Z.addColorStop(0,M[O]),Z.addColorStop(.55,M[Math.round((O+xe)/2)]),Z.addColorStop(1,M[xe]),s.fillStyle=Z,s.beginPath();for(let j of Ue)w(j[0],j[1],j[2],j[3]);s.fill()})};I(360,.25,.55,150,12,22,0,2,3),I(240,.4,.78,260,10,17,1,4,6);let C=[];for(let L=0;L<4;L++){let U=T*(.14+_()*.74),z=b(U);C.push({fx:U,fy:Math.max(56,E-E*(.56+_()*.38)*z*1.05),kind:_()<p?0:1,sz:.85+_()*.4,tilt:.72+_()*.28,rot:_()*6.28,sx:U+(_()-.5)*60})}s.lineCap="round";for(let L of C)s.strokeStyle="#2c6623",s.lineWidth=6,s.beginPath(),s.moveTo(L.sx,E),s.quadraticCurveTo((L.sx+L.fx)/2+(_()-.5)*40,(E+L.fy)/2,L.fx,L.fy+8),s.stroke();I(150,.5,.92,330,9,16,2,6,7);for(let L of C){if(s.save(),s.translate(L.fx,L.fy),s.scale(1,L.tilt),L.kind===0){let U=38*L.sz;for(let z=0;z<16;z++){let G=L.rot+z/16*6.283;s.fillStyle=Math.sin(G)>.4?"#e2e3ea":"#fdfdf6",s.beginPath(),s.ellipse(Math.cos(G)*U*.56,Math.sin(G)*U*.56,U*.48,U*.14,G,0,7),s.fill()}s.fillStyle="#f2b51a",s.beginPath(),s.arc(0,0,U*.28,0,7),s.fill(),s.fillStyle="#fbe060",s.beginPath(),s.arc(-U*.07,-U*.07,U*.14,0,7),s.fill()}else{let U=40*L.sz;for(let z=0;z<5;z++){let G=L.rot+z/5*6.283;s.fillStyle="#fccc1e",s.beginPath(),s.ellipse(Math.cos(G)*U*.52,Math.sin(G)*U*.52,U*.52,U*.38,G,0,7),s.fill()}for(let z=0;z<5;z++){let G=L.rot+z/5*6.283;s.fillStyle="#ffe873",s.beginPath(),s.ellipse(Math.cos(G)*U*.62,Math.sin(G)*U*.62-3,U*.26,U*.15,G,0,7),s.fill()}s.fillStyle="#e39b14",s.beginPath(),s.arc(0,0,U*.2,0,7),s.fill()}s.restore()}I(40,.42,.85,280,8,14,3,6,7),s.restore(),o[l]={u0:h/1024,u1:(h+512)/1024,v0:1-(d+512)/3072,v1:1-(d+8)/3072}};m("twigs",0,0),u("leafA",0,a),u("leafB",512,a),u("sakura",0,a+512),u("pine",512,a+512),u("momiji",0,a+1024),u("ginkgo",512,a+1024),f("grass",0,a+1536,!1),f("flowers",512,a+1536,!0),g("bankA",0,a+2048,4111,.7),g("bankB",512,a+2048,4127,.35);let v=new Jn(n);v.colorSpace=Qt,v.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let y=1-(a+2048)/3072,S=1-(a+2056)/3072;return{tex:v,cells:o,tuftV:[y,1-(a+1536)/3072,S,(y+S)/2]}}var ln=[1,1,1],be={pole:de("#b1b0a9"),metal:de("#8d9198"),black:de("#2a2b30"),yellow:de("#f2c230"),white:de("#f4f3ee"),trans:de("#a0a3a8"),lampPole:de("#727780"),lampHead:de("#dcdcd6"),trunk:de("#6a5444"),trunkDark:de("#4b3a33"),leaf:de("#86ba4c"),leafShade:de("#2c6640"),sakura:de("#ffd3e3"),sakuraShade:de("#de94b4"),pine:de("#55874c"),pineShade:de("#1d4632"),cedar:de("#41713e"),cedarShade:de("#1b3e2a"),roof:de("#bdbbb3"),parapet:de("#dcdad2"),pipe:de("#c4c4bf"),orange:de("#f07a22"),red:de("#d8352a"),vermilion:de("#e2482c"),concrete:de("#c9c7c0"),stone:de("#a8a69e"),terracotta:de("#b8653d"),rail:de("#eeeeea")},Rf=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(de),as=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(de),Op=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(de),Cf=null;function zp(i){Cf=i}var Ii=i=>Cf.uv(i),co=Ii,kp=(i,e)=>{let t=1;for(;Cf.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function yu(i,e,t,n,s=0){let r=new nt().makeRotationY(s);r.setPosition(e,t,n);let o=new nt().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var Pf=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let a=e[5];(a==="g"&&e[6]==="l"||a==="d"||a==="k"||a==="c"||a==="n")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},jt=(i,e,t,n,s,r,o,a=ln)=>{Pf(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],a,Ii(o)),i.litV=0},Li=(i,e,t,n,s,r,o,a=ln)=>{Pf(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],a,Ii(o)),i.litV=0},Di=(i,e,t,n,s,r,o,a=ln)=>{Pf(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],a,Ii(o)),i.litV=0},lo=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?Ii(r):void 0),wy=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Hp(i){return wy.map(e=>new k(e[0],e[1],e[2]).applyMatrix4(i))}function If(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,be.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?be.black:be.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,be.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,be.metal);let o=[-.85,-.3,.3,.85],a=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,be.white);for(let u of a)s.cyl(0,r-1.65,u,.045,.03,.15,6,be.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,be.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,be.trans),s.box(-.06,7.2,.12,.06,7.35,.26,be.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,be.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,be.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,be.concrete);for(let u=2.4,f=0;u<r-2;u+=.45,f++)s.rod([0,u,0],[f%2?.3:-.3,u,0],.015,.015,3,be.metal);return i.atlas.setM(e),jt(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&jt(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...a.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new k(u[0],u[1],u[2]).applyMatrix4(e))}var vu=new k;function Is(i,e,t,n,s,r){i.lamps&&(vu.set(t,n,s).applyMatrix4(e),i.lamps.push(vu.x,vu.y,vu.z,r))}function Lf(i,e,t,n={}){let s=i.color;s.setM(e),Is(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,be.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,be.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,be.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,be.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,ln);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],ln,{u0:0,u1:1,v0:0,v1:1})}function Vp(i,e,t=.04){let n=i.color;n.setM(e),Is(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,be.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,be.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,be.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,ln),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],ln,{u0:0,u1:1,v0:0,v1:1})}function Na(i,e){let t=i.color;t.setM(e),Is(i,e,0,3.5,0,.9),t.cyl(0,0,0,.07,.06,3.2,8,de("#3a3a3e")),t.box(-.2,3.2,-.2,.2,3.25,.2,de("#3a3a3e")),t.cyl(0,3.75,0,.26,.04,.3,8,de("#3a3a3e")),i.lamp.setM(e),i.lamp.box(-.16,3.25,-.16,.16,3.75,.16,ln),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],ln,{u0:0,u1:1,v0:0,v1:1})}function Df(i,e,t){let n=Math.floor(t()*3),s=[be.red,de("#2f6fd8"),be.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,xn(s,.8)),i.atlas.setM(e),jt(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function Af(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,de("#e6e6e1")),i.atlas.setM(e),jt(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function Gp(i,e,t){let n=i.color;n.setM(e);let s=t.pick([de("#c8ccd2"),de("#c0392b"),de("#2c6fb7"),de("#2b2b2b"),de("#e8c84a"),de("#e98fb0")]);for(let o of[-.52,.52])for(let a=0;a<12;a++){let c=a/12*Math.PI*2,u=(a+1)/12*Math.PI*2;n.rod([o+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,be.black)}let r=(o,a)=>n.rod(o,a,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,be.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,be.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,be.metal)}function Wp(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,be.orange),t.cyl(0,.04,0,.16,.03,.68,10,be.orange),t.cyl(0,.32,0,.115,.095,.12,10,be.white,!1)}function Nf(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,be.terracotta),i.leaf.setM(e),Ni(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function Ls(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,be.metal),i.atlas.setM(e),n<0?Di(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Li(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function Uf(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?be.white:be.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,be.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,be.black),i.atlas.setM(e),t<0?Di(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Li(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function Xp(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,de("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,de("#f0a020"))}function Ff(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,be.orange);let s=0,r=3.25,o=.42,a=14;for(let c=0;c<a;c++){let u=c/a*Math.PI*2,f=(c+1)/a*Math.PI*2,m=(g,v,y)=>[t*y,r+Math.sin(g)*v,s+Math.cos(g)*v-.25];lo(n,m(0,0,-.02),m(t>0?f:u,o,-.02),m(t>0?u:f,o,-.02),be.orange),lo(n,m(0,0,-.035),m(t>0?f:u,o*.86,-.035),m(t>0?u:f,o*.86,-.035),de("#dfe9f2"))}}var Mu=null;function qp(i){Mu=i}var xu=1;function Yp(i){xu=i}function Ni(i,e,t,n,s,r,o,a,c,u,f,m,g=0){let v=Mu[o],y=1+(1-xu)*.35;a=Math.max(2,Math.round(a*xu));for(let S=0;S<a;S++){let l=c()*2-1,h=c()*2-1,d=c()*2-1;g&&(h=1.2+c());let x=Math.hypot(l,h,d)||1;l/=x,h/=x,d/=x;let p=-d,_=0,T=l;x=Math.hypot(p,T),x<.1&&(p=1,T=0,x=1),p/=x,T/=x;let E=h*T-d*_,M=d*p-l*T,b=l*_-h*p,w=Math.PI+(c()-.5)*.9,R=Math.cos(w),P=Math.sin(w),I=p*R+E*P,C=_*R+M*P,L=T*R+b*P,U=E*R-p*P,z=M*R-_*P,G=b*R-T*P,D=r*(1.3+c()*.45)*y/2,H=t+(c()-.5)*r*.6,O=n+(c()-.5)*r*(g?.15:.5),K=s+(c()-.5)*r*.6,oe=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([xe,Z])=>[H+(I*xe+U*Z)*D,O+(C*xe+z*Z)*D*(g?.6:1),K+(L*xe+G*Z)*D]),Ve=oe.map(xe=>{let Z=xe[0]-e[0],j=xe[1]-e[1],ue=xe[2]-e[2],Pe=Math.hypot(Z,j,ue)||1;Z/=Pe,j/=Pe,ue/=Pe;let Se=xe[0]-t,Ge=xe[1]-n,$e=xe[2]-s;return Pe=Math.hypot(Se,Ge,$e)||1,[Z*.7+Se/Pe*.3,j*.7+Ge/Pe*.3+(g?.5:0),ue*.7+$e/Pe*.3]}),Ue=oe.map(xe=>pf(f,u,.45+.55*Math.max(0,Math.min(1,(xe[1]-m[0])/(m[1]-m[0])))));i.leaf.card(oe,Ve,v,Ue)}}function Bf(i,e,t,n="grass",s=1){let r=Mu[n],o=(.42+t()*.38)*s,a=o*1.2,c=t()*Math.PI,u=[0,1,0],f=[u,u,u,u],m=[.6,.64,.58],g=[1,1,1];i.leaf.setM(e);for(let v of[c,c+Math.PI/2]){let y=Math.cos(v)*a/2,S=Math.sin(v)*a/2;i.leaf.card([[-y,-.05,-S],[y,-.05,S],[y,o,S],[-y,o,-S]],f,r,[m,m,g,g])}}var Ay=[.62,.68,.74],Zp=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],Ry=[0,1,2,0,2,3,0,3,4],Cy=Zp.map(([,i])=>pf(Ay,ln,i));function $p(i,e,t,n,s,r,o,a=1){let c=Mu[o()<.5?"bankA":"bankB"],u=.82*a,f=(u+.06)*2.03,m=i.leaf;for(let g of Ry){let[v,y]=Zp[g],S=(v-.5)*f;m.vtx(e+s*S,t+y*(u+.06)-.06,n+r*S,0,1,0,c.u0+(c.u1-c.u0)*v,c.v0+(c.v1-c.v0)*y,Cy[g])}}var Kp=()=>xu>.7?.9:1.25;function Py(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,be.trunk);for(let u=0;u<3;u++){let f=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(f)*1.1*n,s*.68,Math.sin(f)*1.1*n],.09*n,.05*n,5,be.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",a=[s*.45,s*1.15],c=7+Math.floor(t()*3);for(let u=0;u<c;u++){let f=t()*6.28,m=(.6+t())*1.3*n;Ni(i,r,Math.cos(f)*m,s*(.62+t()*.3),Math.sin(f)*m,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],a)}Ni(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],a)}function Iy(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,be.trunkDark);let r=[];for(let u=0;u<5;u++){let f=u/5*6.28+t()*.8,m=(2.2+t()*1.6)*n,g=[Math.cos(f)*m,s*(.62+t()*.18),Math.sin(f)*m];i.color.rod([0,s*.4,0],g,.12*n,.05*n,5,be.trunkDark),r.push(g),i.color.rod(g,[g[0]*1.25,g[1]+.9*n,g[2]*1.25],.05*n,.02*n,4,be.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],a=[s*.5,s*1.1],c=[.72,.62,.72];for(let u of r)for(let f=0;f<2;f++)Ni(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],c,a);Ni(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],c,a)}function Ly(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,a=[r*.4,o*.45,.2],c=[r,o*.8,-.2];s.rod([0,0,0],a,.2*n,.15*n,6,be.trunkDark),s.rod(a,c,.15*n,.09*n,6,be.trunkDark),i.leaf.setM(e);let u=[[c[0],c[1]+.3,c[2],1.7],[a[0]+1.4*n,a[1]+.8,.5,1.3],[a[0]-1.3*n,a[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[f,m,g,v]of u)s.rod(f>a[0]?a:c,[f,m-.2,g],.07*n,.04*n,4,be.trunkDark),Ni(i,[f,m-.8,g],f,m,g,v*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[m-.7,m+.5],1)}function Dy(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,be.trunkDark);let r=[];for(let u=0;u<5;u++){let f=u/5*6.28+t()*.8,m=(1.8+t()*1.4)*n,g=[Math.cos(f)*m,s*(.55+t()*.2),Math.sin(f)*m];i.color.rod([0,s*.38,0],g,.09*n,.04*n,5,be.trunkDark),r.push(g)}i.leaf.setM(e);let o=[0,s*.7,0],a=[s*.45,s*1.1],c=[.62,.52,.56];for(let u of r)Ni(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],c,a);Ni(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],c,a)}function Ny(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,be.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],a=[.68,.6,.52];for(let c=0;c<7;c++){let u=s*(.34+c*.09),f=(2.1-c*.24)*n,m=t()*6.28;Ni(i,r,Math.cos(m)*f*.35,u,Math.sin(m)*f*.35,Math.max(.7,f)*1.05,"ginkgo",5,t,[1,1,1],a,o)}}function Uy(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,de("#eeece6"));for(let u=0;u<7;u++){let f=t.range(.4,r*.85),m=f/r;s.cyl(o*m,f,0,.135*n*(1-m*.6),.13*n*(1-m*.6),.05,7,de("#2b2b30"),!1)}for(let u=0;u<7;u++){let f=r*(.45+t()*.5),m=t()*6.28,g=(.8+t()*1.6)*n,v=f/r;s.rod([o*v,f,0],[o*v+Math.cos(m)*g,f+g*.9,Math.sin(m)*g],.035*n,.012*n,4,de("#8b7f78"))}let a=r*.7,c=(1.5+t()*.5)*n;i.leaf.setM(e),Ni(i,[o*.7,a,0],o*.7,a,0,c,"twigs",3,t,[1,1,1],[.92,.9,.92],[a-c,a+c])}function Fy(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,be.trunkDark),i.foliage.setM(e);let r=de("#1d3a2c"),o=de("#eef2f8"),a=de("#d7e0ec");for(let c=0;c<4;c++){let u=s*(.16+c*.19),f=(1.9-c*.38)*n,m=s*.3;i.foliage.cyl(0,u,0,f,f*.3,m,9,r),i.foliage.cyl(0,u+m*.45,0,f*.72,.05,m*.62,9,c%2?o:a)}}function By(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,be.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,be.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,be.cedar)}var Jp={broad:Py,sakura:Iy,pine:Ly,cedar:By,maple:Dy,ginkgo:Ny,birch:Uy,snowcedar:Fy},Fp={};function jp(i,e){let t=i+e,n=Fp[t];if(!n){let s={color:new _n,foliage:new _n,leaf:new _n({uv:!0})};Jp[i](s,new nt,tn(1e3+e*77+i.length*13),1),n=Fp[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays()}}return n}function Qp(){for(let i in Jp)for(let e=0;e<4;e++)jp(i,e)}function On(i,e,t,n,s=1){let r=jp(t,Math.floor(n()*4)),o=e.clone().scale(new k(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o)}var Oy=new Set(["win0","win2","win5","win6"]),Yi=(i,e,t)=>e<t?i+(e<t*.35&&Oy.has(i)?"C":"L"):i;function Ua(i,e,t,n,s,r,o){let a=Math.max(1,Math.round(t/3)),c=t/a;for(let u of[-1,1])for(let f=0;f<n.length-1;f++)for(let m=0;m<a;m++){let g=f>0&&r()<.3?Yi("win6",r(),o):r()<.2?"win5":"plain";(u>0?Li:Di)(i,u*e/2,m*c,(m+1)*c,n[f],n[f+1],g,s)}}function Fa(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],be.roof);let o=.5,a=.15;if(i.box(-e/2,n,-.02,e/2,n+o,a,be.parapet),i.box(-e/2,n,t-a,e/2,n+o,t,be.parapet),i.box(-e/2,n,0,-e/2+a,n+o,t,be.parapet),i.box(e/2-a,n,0,e/2,n+o,t,be.parapet),s()<.4){let c=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[f,m]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+f-.05,n,u+m-.05,c+f+.05,n+1,u+m+.05,be.metal);i.cyl(c,n+1,u,.85,.85,1.3,12,de("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,be.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,be.metal)}function _u(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,be.black);let r="vs"+Math.floor(s()*10);Di(i.atlas,e-.065,-.88,-.12,t,n,r),Li(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,be.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,be.metal)}function ls(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,be.concrete,null,{noBottom:!0}),n.type){case"shop":return zy(i,e,t,n);case"machiya":return ky(i,e,t,n);case"apt":return Hy(i,e,t,n);case"office":return Vy(i,e,t,n);case"konbini":return Gy(i,e,t,n);case"house":return Xy(i,e,t,n);case"tower":return qy(i,e,t,n)}}var em=new Set(["glass","door","cafe","noren"]),tm={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function zy(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,m=3.6,g=3,v=m+(o-1)*g,y=Math.max(1,Math.round(s/3)),S=s/y,l=-s/2,h=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],x=0;for(let M=0;M<y;M++){let b=kp(t,"shop_"+h[M%h.length]);d.push(b),!x&&b.startsWith("shop_glass")&&b.length>10&&(x=+b.slice(10))}for(let M=0;M<y;M++){let b=h[M%h.length];jt(u,l+M*S,l+(M+1)*S,0,m,0,x&&b==="glass"?"shop_glass"+x:d[M]),em.has(b)&&Is(i,e,l+(M+.5)*S,1.9,-.8,.7)}let p=t.pick([0,0,1,5,0,1]),_=[0,m];for(let M=1;M<o;M++)_.push(m+M*g);for(let M=1;M<o;M++)for(let b=0;b<y;b++){let w=b%2===1&&t()<.3?5:p;jt(u,l+b*S,l+(b+1)*S,_[M],_[M+1],0,Yi("win"+w,t(),c),a)}Ua(u,s,r,_,a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],xn(a,.8)),Fa(f,s,r,v,t);let T=s*.94;f.box(-T/2,m-.8,-.3,T/2,m+.08,-.02,be.black);let E="hs"+Math.floor(t()*14);if(jt(u,-T/2,T/2,m-.8,m+.08,-.305,tm[x]||E),t()<.55){let M=t.pick(Op),b=m-.85;f.quad([s/2-.2,b-.35,-1.1],[-s/2+.2,b-.35,-1.1],[-s/2+.2,b,-.02],[s/2-.2,b,-.02],M),f.quad([s/2-.2,b-.6,-1.1],[-s/2+.2,b-.6,-1.1],[-s/2+.2,b-.35,-1.1],[s/2-.2,b-.35,-1.1],xn(M,.85))}if(o>=2&&t()<.85){let M=(t()<.5?1:-1)*(s/2-.35);_u(i,M,m+.3,Math.min(v-.15,m+2.8),t)}for(let M=1;M<o;M++)if(t()<.4){let b=Math.floor(t()*y),w=l+b*S+.15,R=l+(b+1)*S-.15,P=_[M];f.box(w,P-.12,-.9,R,P,0,be.parapet),jt(u,w,R,P,P+1,-.9,"rail"),Di(u,w,-.9,0,P,P+1,"rail"),Li(u,R,-.9,0,P,P+1,"rail"),t()<.45&&am(f,w+.1,R-.1,P+1.95,-.55,t),t()<.6&&Af(i,e,(w+R)/2+.6,P,-.75)}else if(t()<.35){let b=Math.floor(t()*y);Af(i,e,l+(b+.5)*S,_[M]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}f.cyl(l+.12,0,-.08,.05,.05,v,6,be.pipe,!1),f.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,de("#d9d9d3")),o>=3&&t()<.18&&nm(i,s,v,r,t)}function ky(i,e,t,n){let{w:s,d:r,floors:o,litP:a}=n,c=i.atlas,u=i.color,f=3.6,m=2.9,g=f+(o-1)*m,v=-s/2,y=Math.max(2,Math.round(s/3)),S=s/y,l=de("#5c4030"),h=de("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),x=[],p=0;for(let D=0;D<y;D++){let H=kp(t,"shop_"+d[D%d.length]);x.push(H),!p&&H.startsWith("shop_glass")&&H.length>10&&(p=+H.slice(10))}for(let D=0;D<y;D++){let H=d[D%d.length];jt(c,v+D*S,v+(D+1)*S,0,f,0,p&&H==="glass"?"shop_glass"+p:x[D]),em.has(H)&&Is(i,e,v+(D+.5)*S,1.9,-.8,.7)}let _=!!n.plaster,T=n.tint,E=[0,f];for(let D=1;D<o;D++)E.push(f+D*m);let M=_?t.pick([0,0,1,0,2]):4;for(let D=1;D<o;D++)for(let H=0;H<y;H++)jt(c,v+H*S,v+(H+1)*S,E[D],E[D+1],0,Yi("win"+(_&&H%2===1&&t()<.3?5:M===2?0:M),t(),a),_?T:ln);{let D=Math.max(1,Math.round(r/3)),H=r/D;for(let O of[-1,1])for(let K=0;K<E.length-1;K++)for(let oe=0;oe<D;oe++)(O>0?Li:Di)(c,O*s/2,oe*H,(oe+1)*H,E[K],E[K+1],_?K>0&&t()<.35?Yi("win6",t(),a):"plain":K>0&&t()<.45?Yi("win4",t(),a):"woodwall",_?T:ln)}u.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],_?xn(T,.8):de("#6a5240"));for(let D of[v,-v])u.box(D-.09,0,-.12,D+.09,g,.02,h);if(_)for(let D=2;D<o;D++)u.box(v,E[D]-.1,-.08,-v,E[D]+.06,0,h);let{RC:b,k:w}=im(i,n,s,r,g,t,!_),R=f+.34,P=1.05,I=.42,C=Math.max(2,Math.round((s+.3)/3));for(let D=0;D<C;D++){let H=v-.15+(s+.3)*D/C,O=v-.15+(s+.3)*(D+1)/C;c.quad([O,R-I,-P],[H,R-I,-P],[H,R,0],[O,R,0],b,w)}u.quad([v-.15,R-I-.03,-P],[-v+.15,R-I-.03,-P],[-v+.15,R-.1,0],[v-.15,R-.1,0],l);let L=s*.9,U=R-I+.02,z=U-.62;u.box(-L/2,z,-P-.02,L/2,U,-P+.07,h),jt(c,-L/2,L/2,z,U,-P-.025,tm[p]||"hs"+Math.floor(t()*14));for(let D of[-L/2+.25,L/2-.25])u.box(D-.03,U,-P+.02,D+.03,R-I*.1,-P+.06,h);i.sodium.setM(e),u.noShadow=!0;for(let D=0;D<y;D++){let H=v+(D+.5)*S;u.box(H-.008,z-.02,-.62,H+.008,R-I*.6,-.6,h),i.sodium.box(H-.06,z-.16,-.67,H+.06,z-.04,-.55,null)}u.noShadow=!1;let G=!1;if(t()<.5){G=!0;let D=t.pick(Op),H=z-.12;u.quad([s/2-.2,H-.32,-.95],[-s/2+.2,H-.32,-.95],[-s/2+.2,H,-.02],[s/2-.2,H,-.02],D),u.quad([s/2-.2,H-.55,-.95],[-s/2+.2,H-.55,-.95],[-s/2+.2,H-.32,-.95],[s/2-.2,H-.32,-.95],xn(D,.85))}if(o>=2&&(!_||t()<.5)){let D=E[1]+.42,H=-.5,O=v+.12,K=-v-.12;u.box(O,D-.07,H-.04,K,D,0,l);for(let oe=0;oe<y;oe++)jt(c,v+.12+(s-.24)*oe/y,v+.12+(s-.24)*(oe+1)/y,D,D+.95,H,"wrail");Di(c,O,H,0,D,D+.95,"wrail"),Li(c,K,H,0,D,D+.95,"wrail"),i.leaf.setM(e);for(let oe=0;oe<y;oe++)if(t()<.7){let Ve=v+(oe+.5)*S,Ue=Math.min(S*.7,1.6);u.noShadow=!0,u.box(Ve-Ue/2,D+.72,H-.2,Ve+Ue/2,D+.92,H-.02,de("#7a5236")),u.noShadow=!1;for(let xe=Ve-Ue/2+.2;xe<Ve+Ue/2-.1;xe+=.32)Ni(i,[xe,D+.95,H-.11],xe,D+1.05,H-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[D+.9,D+1.3])}}if(o>=2&&t()<.9){let D=t()<.5?1:-1;_u(i,D*(s/2-.35),f+.6,Math.min(g-.2,f+2.7),t),s>7&&t()<.35&&_u(i,-D*(s/2-.35),f+.8,Math.min(g-.2,f+2.5),t)}{let D=d.includes("noren")||d.includes("cafe"),H=G?0:D?2:t()<.3?1:0;i.sodium.setM(e);for(let O=0;O<H;O++){let K=H===2?(O?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),oe=z-.5;u.noShadow=!0,u.box(K-.006,oe+.42,-P+.12,K+.006,z,-P+.14,h),i.sodium.cyl(K,oe,-P+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(K,oe+.18,-P+.13,.16,.11,.18,10,null,!1),u.cyl(K,oe-.035,-P+.13,.1,.1,.04,8,h),u.cyl(K,oe+.355,-P+.13,.1,.1,.04,8,h),u.noShadow=!1}}for(let D=v+.45+t()*.4;D<-v-.3;D+=.7+t()*1.3)t()<.7&&Nf(i,e,t,D,-.4);i.color.setM(e),i.atlas.setM(e)}function nm(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,a=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,t,a,c+.06,t+1.2+o,a+.12,be.metal);i.color.box(-r/2,t+1.2,a+.12,r/2,t+1.2+o,a+.3,be.metal),jt(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,a+.115,"bb"+Math.floor(s()*4))}function Hy(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,m=3.2,g=2.95,v=m+(o-1)*g,y=Math.max(2,Math.round(s/3.2)),S=s/y,l=-s/2,h=[0,m];for(let p=1;p<o;p++)h.push(m+p*g);for(let p=0;p<y;p++)jt(u,l+p*S,l+(p+1)*S,0,m,0,p===Math.floor(y/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),p===Math.floor(y/2)?ln:a);let d="bal"+Math.floor(t()*3),x=xn(a,.97);for(let p=1;p<o;p++){let _=h[p];for(let T=0;T<y;T++)jt(u,l+T*S,l+(T+1)*S,_,h[p+1],0,Yi("win2",t(),c),a);f.box(l,_-.15,-1.3,-l,_,0,x),f.box(l,_,-1.3,-l,_+1.1,-1.18,x,null,{noBottom:!0});for(let T=0;T<y;T++)jt(u,l+T*S,l+(T+1)*S,_,_+1.1,-1.305,d,a);for(let T=0;T<=y;T++)f.box(l+T*S-.05,_,-1.18,l+T*S+.05,_+2.4,0,xn(a,.92));for(let T=0;T<y;T++){let E=t(),M=l+T*S+.2,b=l+(T+1)*S-.2;E<.34?am(f,M,b,_+2.02,-.98,t):E<.46&&$y(f,M+.25,Math.min(b-.25,M+1.9),_+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<y;T++)t()<.55&&(Af(i,e,l+(T+.78)*S,_,-.55),i.atlas.setM(e),i.color.setM(e))}f.box(l,v-.15,-1.3,-l,v,0,x),Ua(u,s,r,h,a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],xn(a,.8)),Fa(f,s,r,v,t,!0)}function Vy(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,m=4,g=3.4,v=m+(o-1)*g,y=Math.max(2,Math.round(s/3)),S=s/y,l=-s/2,h=[0,m];for(let d=1;d<o;d++)h.push(m+d*g);for(let d=0;d<y;d++)jt(u,l+d*S,l+(d+1)*S,0,m,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let x=0;x<y;x++)jt(u,l+x*S,l+(x+1)*S,h[d],h[d+1],0,Yi("win3",t(),c),a);Ua(u,s,r,h,a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],xn(a,.8)),Fa(f,s,r,v,t,!0),t()<.6&&_u(i,(t()<.5?1:-1)*(s/2-.3),m+.4,Math.min(v-.3,m+4.5),t),t()<.3&&nm(i,s,v,r,t)}function Gy(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,a=i.color,c=4.4,u=-s/2,f=Math.max(3,Math.round(s/3)),m=s/f;for(let g=0;g<f;g++)jt(o,u+g*m,u+(g+1)*m,0,3.4,0,"shop_konbini"),Is(i,e,u+(g+.5)*m,1.9,-.8,.8);a.box(u,3.4,-.35,-u,c,0,be.white),jt(o,u,-u,3.4,c,-.355,"konbini_band"),Ua(o,s,r,[0,c],de("#f2f2ee"),t,0),Fa(a,s,r,c,t)}var Bp=(i,e)=>e?de("#7a5a42"):i.tint,wf=null,Wy=()=>{if(!wf){let i=Ii("kawara"),e=16/272*(i.u1-i.u0);wf={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return wf};function im(i,e,t,n,s,r,o){let a=i.atlas,c=i.color,u=!!e.snow,f=u?.75:.6,m=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),g=u?Ii("white"):Wy(),v=u?de("#f3f5fa"):de("#c8ccd8"),y=u?de("#e4e8f0"):de("#3d4456"),S=u?1:Math.max(2,Math.round((t+2*f)/3)),l=x=>-t/2-f+(t+2*f)*x/S;for(let x=0;x<S;x++){let p=l(x),_=l(x+1);a.quad([_,s-.25,-f],[p,s-.25,-f],[p,s+m,n/2],[_,s+m,n/2],v,g),a.quad([p,s-.25,n+f],[_,s-.25,n+f],[_,s+m,n/2],[p,s+m,n/2],v,g)}let h=(x,p,_,T,E,M)=>{M<0?(c.quad([p,_,E],[x,_,E],[x,T,E],[p,T,E],y),c.quad([x,_,E],[p,_,E],[p,_,E+.08],[x,_,E+.08],y)):(c.quad([x,_,E],[p,_,E],[p,T,E],[x,T,E],y),c.quad([p,_,E],[x,_,E],[x,_,E-.08],[p,_,E-.08],y))};for(let[x,p]of[[-f,0],[n+f,n]])h(-t/2-f,t/2+f,s-.42,s-.22,x<0?x-.04:x+.04,x<0?-1:1),c.quad(x<0?[-t/2-f,s-.26,x]:[t/2+f,s-.26,x],x<0?[t/2+f,s-.26,x]:[-t/2-f,s-.26,x],x<0?[t/2+f,s-.26,p]:[-t/2-f,s-.26,p],x<0?[-t/2-f,s-.26,p]:[t/2+f,s-.26,p],xn(Bp(e,o),.62));for(let x of[-1,1]){let p=x*(t/2+f+.02),_=.2,T=[p,s-.25,-f],E=[p,s+m,n/2],M=[p,s-.25,n+f],b=w=>[w[0],w[1]-_,w[2]];x>0?(c.quad(b(E),b(T),T,E,y),c.quad(b(M),b(E),E,M,y)):(c.quad(b(T),b(E),E,T,y),c.quad(b(E),b(M),M,E,y))}let d=Bp(e,o);if(lo(c,[-t/2,s,0],[-t/2,s,n],[-t/2,s+m-.1,n/2],d),lo(c,[t/2,s,n],[t/2,s,0],[t/2,s+m-.1,n/2],d),c.box(-t/2-f,s+m-.05,n/2-.15,t/2+f,s+m+.18,n/2+.15,u?de("#f6f7fb"):de("#3d4456")),u){c.box(-t/2-f-.05,s-.42,-f-.1,t/2+f+.05,s-.12,-f+.3,de("#eef1f7")),c.box(-t/2-f-.05,s-.42,n+f-.3,t/2+f+.05,s-.12,n+f+.1,de("#eef1f7"));for(let x=-t/2;x<t/2;x+=.45+r()*.5)c.cyl(x,s-.42-.35,-f+.02,0,.04,.35,4,de("#dfe8f3"),!1)}return{RC:v,k:g,fascia:h,nS:S}}function Xy(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,m=2.9,g=o*m,v=-s/2,y=t()<.5,S=Math.max(2,Math.round(s/3)),l=s/S,h=[];for(let E=0;E<=o;E++)h.push(E*m);let d=y?ln:a;for(let E=0;E<o;E++)for(let M=0;M<S;M++){let b=y?"win4":"win0";E===0&&M===0?b="shop_house":b=Yi(b,t(),c),jt(u,v+M*l,v+(M+1)*l,h[E],h[E+1],0,b,b==="shop_house"?ln:d)}Ua(u,s,r,h,y?de("#9a7a62"):a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,g,r],[-s/2,g,r],xn(a,.75));let{RC:x,k:p,fascia:_,nS:T}=im(i,n,s,r,g,t,y);if(o>1){let E=m+.05;for(let M=0;M<T;M++){let b=-s/2-.1+(s+.2)*M/T,w=-s/2-.1+(s+.2)*(M+1)/T;u.quad([w,E-.3,-.75],[b,E-.3,-.75],[b,E+.05,0],[w,E+.05,0],x,p)}_(-s/2-.1,s/2+.1,E-.42,E-.28,-.79,-1)}if(n.fence){let E=-n.fence,M=1.2;for(let[b,w]of[[-s/2,-1],[.4,s/2]])f.box(b,0,E-.08,w,M,E+.08,be.concrete),jt(u,b,w,0,M,E-.085,"block")}}function qy(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,m=3.4,g=o*m,v=Math.max(2,Math.round(s/6)),y=s/v,S=-s/2,l=t()<.5?"win3":"win2",h=[];for(let p=0;p<=o;p++)h.push(p*m);for(let p=0;p<o;p++)for(let _=0;_<v;_++)jt(u,S+_*y,S+(_+1)*y,h[p],h[p+1],0,Yi(l,t(),c),a);let d=Math.max(1,Math.round(r/6)),x=r/d;for(let p of[-1,1])for(let _=0;_<o;_++)for(let T=0;T<d;T++)(p>0?Li:Di)(u,p*s/2,T*x,(T+1)*x,h[_],h[_+1],Yi(l,t(),c),a);Fa(f,s,r,g,t,!0)}function sm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([de("#f2f2ee"),de("#c9cdd2"),de("#2b2f38"),de("#b33a32"),de("#9fc6c0"),de("#e7d9b4"),de("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,xn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,de("#2a3346"));for(let[r,o]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,o-.11,r+.3,.6,o+.11,be.black)}function Of(i,e,t,n){let s=i.color,r=de("#8d9096"),o=de("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let a=-n-.62,c=-n+.62;s.box(-.14,5.08,a,.14,5.56,c,o);let u=t*.141;i.atlas.setM(e),(t>0?Li:Di)(i.atlas,u,a,c,5.08,5.56,"signal");let f=t>0?c:a,m=t>0?-1:1;for(let v=0;v<3;v++){let y=f+m*(.2+v*.4);s.box(t>0?.14:-.36,5.47,y-.15,t>0?.36:-.14,5.5,y+.15,o)}let g=f+m*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,g-.11,t>0?.16:-.145,5.43,g+.11,ln)}function rm(i,e,t,n){let s=i.color,r=de("#3d6ea8"),o=de("#e8eef2"),a=de("#c7c5bf"),c=5.35;s.setM(e),s.box(-1.1,c-.65,-t,1.1,c,t,r);for(let u of[-1.1,1])s.box(u,c,-t,u+.1,c+1.1,t,o),s.box(u-.02,c+1.1,-t,u+.12,c+1.18,t,r);i.atlas.setM(e),Di(i.atlas,-1.105,-2.2,2.2,c-.62,c-.06,n),Li(i.atlas,1.105,-2.2,2.2,c-.62,c-.06,n),s.setM(e);for(let u of[-1,1]){let f=u*(t-1.65),m=u*(t-.15),g=Math.min(f,m),v=Math.max(f,m);s.box(-.45,.15,g+.3,.45,c-.65,v-.3,r);let y=20,S=(c-.15)/y;for(let l=0;l<y;l++)s.box(1.1+l*.3,.15,g,1.1+(l+1)*.3,c-(l+1)*S+.04,v,a);s.box(1.1,c-.1,g-.05,1.1+y*.3,c-.02,g+.05,r)}}function om(i,e,t,n,s,r,o){let a=i.color,c=1.22,u=3.55,f=6.7,m=de("#c8c5bd"),g=de("#ebe8de"),v=de("#7a5a42"),y=de("#5e4433"),S=de("#4d5468");a.setM(e),a.box(t,-1.4,u,n,c,f,m,null,{noBottom:!0}),a.box(t,c,u,n,c+.025,u+.32,g),a.box(t,c,u+.6,n,c+.04,u+.9,be.yellow);let l=Math.sign(s-(t+n)/2),h=l>0?n:t,d=h+l*6.2,x=u+.9,p=f-.2,_=(D,H,O)=>[D,H,O];l>0?a.quad(_(d,.1,p),_(d,.1,x),_(h,c,x),_(h,c,p),m):a.quad(_(d,.1,x),_(d,.1,p),_(h,c,p),_(h,c,x),m);for(let D of[x,p]){let H=de("#9aa0a6");a.rod([d,.1+.9,D],[h,c+.9,D],.03,.03,5,H);for(let O=0;O<=3;O++){let K=d+(h-d)*O/3,oe=.1+(c-.1)*O/3;a.box(K-.03,oe,D-.03,K+.03,oe+.9,D+.03,H)}}i.atlas.setM(e);for(let D=t;D<n-.01;D+=3){let H=Math.min(n,D+3);i.atlas.quad([D,-.6,f+.004],[H,-.6,f+.004],[H,c,f+.004],[D,c,f+.004],de("#d8d4ca"),Ii("concrete"))}a.setM(e);for(let D=t+.4;D<n;D+=2)a.box(D-.05,c,f-.12,D+.05,c+1,f-.02,de("#8f949a"));for(let D of[.45,.95])a.box(t,c+D,f-.1,n,c+D+.06,f-.04,de("#8f949a"));let T=n-t,E=D=>l>0?n-T*D:t+T*D,M=E(.47),b=M-2.3,w=M+2.3,R=u+1.35,P=f-.25;a.box(b,c,P-.12,w,c+2.45,P,v);for(let D of[b,w-.12])a.box(D,c,R+.6,D+.12,c+2.45,P,y);for(let D of[b,w-.12])a.box(D,c,R,D+.12,c+2.45,R+.12,y);a.quad([w+.4,c+2.5,R-.45],[b-.4,c+2.5,R-.45],[b-.4,c+2.85,P+.35],[w+.4,c+2.85,P+.35],S),a.quad([b-.4,c+2.42,R-.45],[w+.4,c+2.42,R-.45],[w+.4,c+2.77,P+.35],[b-.4,c+2.77,P+.35],de("#3a3f50")),a.box(b+.3,c+.42,P-.55,w-.3,c+.48,P-.15,de("#8a6a4a"));for(let D of[b+.4,w-.5])a.box(D,c,P-.5,D+.08,c+.42,P-.2,be.metal);i.atlas.setM(e),i.atlas.quad([M-1.1,c+1.55,P+.005],[M+1.1,c+1.55,P+.005],[M+1.1,c+2.03,P+.005],[M-1.1,c+2.03,P+.005],ln,Ii("ekiplate"+r));let I=E(.2),C=u+1.6,L=1.25,U=c+1.25,z=U+.95;a.setM(e);for(let D of[I-L+.12,I+L-.12])a.cyl(D,c,C,.05,.05,z-c+.05,8,de("#6b7078"));a.box(I-L,U-.03,C-.03,I+L,z+.03,C+.03,de("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-L,U,C+.035],[I+L,U,C+.035],[I+L,z,C+.035],[I-L,z,C+.035],ln,Ii("ekimei"+r)),i.atlas.quad([I+L,U,C-.035],[I-L,U,C-.035],[I-L,z,C-.035],[I+L,z,C-.035],ln,Ii("ekimei"+r)),a.setM(e);let G=M-l*4.2;a.box(G-.9,c+.42,f-1.25,G+.9,c+.47,f-.85,de("#3b6ea8")),a.box(G-.9,c+.47,f-.88,G+.9,c+.9,f-.83,de("#3b6ea8"));for(let D of[G-.75,G+.7])a.box(D,c,f-1.2,D+.06,c+.42,f-.9,be.metal);for(let D=t+3;D<n-1;D+=9)Na(i,yu(e,D,c,f-.45))}var Yy=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(de),Zy=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(de);function am(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,be.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let a=.28+r()*.34,c=.36+r()*.42,u=r.pick(Yy),f=s+(r()-.5)*.06;i.quad([o+a,n-c,f],[o,n-c,f],[o,n-.02,f],[o+a,n-.02,f],u),i.quad([o,n-c,f+.01],[o+a,n-c,f+.01],[o+a,n-.02,f+.01],[o,n-.02,f+.01],xn(u,.85)),r()<.4&&i.box(o+a*.45,n-.02,f-.02,o+a*.55,n+.06,f+.02,de("#d8d8d0")),o+=a+.06+r()*.22}}function $y(i,e,t,n,s,r){let o=r.pick(Zy),a=.11;i.box(e,n-.02,s-a,t,n+.09,s+.22,o),i.box(e,n-.72,s-a,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-a-.004,t-.08,n-.42,s-a+.01,xn(o,.86))}function lm(i,e){let t=i.color,n=de("#a19f97"),s=de("#6b4a35"),r=de("#4f4a44"),o=de("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,de("#8d8b84"));for(let a of[-.52,.48])for(let c of[-.36,.32])t.box(a,.32,c,a+.05,1.5,c+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,xn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let a of[-.32,.3])t.cyl(a,.32,-.18,.05,.06,.07,8,de("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,de("#5b8d3d"))}function cm(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?be.black:be.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,be.black),t.box(-.5,2.55,-.06,.5,2.95,.02,be.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,be.black);t.box(-.78,-.9,-.34,.3,0,.34,be.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,de("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,be.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new nt().multiplyMatrices(e,new nt().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?be.black:be.yellow)}t.setM(e),i.atlas.setM(e),jt(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function um(i,e){let t=i.color;t.setM(e),t.box(-.4,0,-.4,.4,.25,.4,be.stone),t.cyl(0,.25,0,.14,.12,.95,8,be.stone),t.box(-.32,1.2,-.32,.32,1.3,.32,be.stone),t.box(-.26,1.3,-.26,.26,1.72,.26,xn(be.stone,1.05)),t.cyl(0,1.72,0,.55,.08,.38,6,xn(be.stone,.92)),i.lamp.setM(e),i.lamp.box(-.18,1.38,-.27,.18,1.62,-.25,ln),i.lamp.box(-.18,1.38,.25,.18,1.62,.27,ln)}function zf(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,be.vermilion),s.cyl(0,0,r,.38,.38,.5,12,be.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,be.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,be.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,be.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,be.vermilion)}function hm(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,de("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,de("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,de("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,de("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,be.metal),n.box(1.1,0,.3,1.2,.42,.55,be.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,be.metal),i.atlas.setM(e),Di(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Li(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}function fm(i,e,t,n=1){let s=i.color;s.setM(e);let r=xn(be.concrete,.85+t()*.15),o=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],a=.55*n;for(let c of o)s.rod([0,a,0],[c[0]*.95*n,a+c[1]*.95*n,c[2]*.95*n],.42*n,.26*n,7,r)}function dm(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,de("#8f8a80"),de("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,be.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,be.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,be.black),t.cyl(0,18.6,0,1,.25,1.2,12,be.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,ln)}function pm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([de("#f4f4f0"),de("#3b6ea5"),de("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),lo(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),lo(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,be.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,be.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,de("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,be.metal)}function mm(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,be.stone),n.box(-.55,.5,.9,.55,1.5,1.8,de("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],de("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],de("#4d5468")),zf(i,yu(e,0,0,-.3,Math.PI/2),.75,2.2)}var kt=60,kf=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],gm=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],vm=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Hf=32,Ba=[.025,.026,.032],xm=[.05,.05,.065],Jy=new nt,cs=(i,e)=>(i%e+e)%e,us=(i,e)=>{let t=Cs(i);return!!t&&Math.abs(i-t.s)<e},Vf=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Ui=(i,e)=>{let t=gi(i);return!!t&&Math.abs(i-t.s)<e},ei=(i,e)=>{let t=mi(i);return!!t&&Math.abs(i-t.s)<e},Gf=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=n(r,o);this.P.push(a[0],a[1],a[2]),this.N.push(a[3],a[4],a[5]),this.SU.push(a[6],a[7]),this.ZW.push(a[8],a[9],a[10],a[11]),this.RK.push(a[12],a[13]),this.RV.push(a[14]||0),this.ZS.push(a[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let a=s+r*t+o,c=a+1,u=a+t,f=u+1;this.I.push(a,c,u,c,f,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,a=new Array(e*o);for(let u=0;u<e;u++)for(let f=0;f<o;f++)a[u*o+f]=n(u,f-s);let c=(u,f)=>a[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,f))];for(let u=0;u<e;u++)for(let f=s;f<s+t;f++){let m=c(u,f-1),g=c(u,f+1),v=c(u-1,f),y=c(u+1,f),S=a[u*o+f],l=g[0]-m[0],h=g[1]-m[1],d=g[2]-m[2],x=y[0]-v[0],p=y[1]-v[1],_=y[2]-v[2],T=h*_-d*p,E=d*x-l*_,M=l*p-h*x;E<0&&(T=-T,E=-E,M=-M);let b=Math.hypot(T,E,M)||1;S[3]=T/b,S[4]=E/b,S[5]=M/b}this.grid(e,t,(u,f)=>a[u*o+f+s])}build(){let e=new bt;return e.setAttribute("position",new Ye(this.P,3)),e.setAttribute("normal",new Ye(this.N,3)),e.setAttribute("su",new Ye(this.SU,2)),e.setAttribute("zw",new Ye(this.ZW,4)),e.setAttribute("rk",new Ye(this.RK,2)),e.setAttribute("rv",new Ye(this.RV,1)),e.setAttribute("zs",new Ye(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},bu=class{constructor(e,t,n,s,r){this.path=t,this.M=n,this.foamMat=s,this.riverMat=r,this.group=new Kt,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/kt),s=Math.floor((e+this.ahead)/kt);for(let[o,a]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(a),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let a=o.pending.shift();a&&o.group.add(a),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let a=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){a=c;break}if(a<0)return 0;a*kt-e<320&&(t=Math.max(t,12)),this.job={c:a,it:this.gen(a)}}let o=this.job.it.next();if(o.done){let a=o.value;a.pending=a.group.children.slice(),a.group.clear(),this.chunks.set(this.job.c,a),this.group.add(a.group),this.reveal.push(a),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let a=o*kt-e,c=r.group.children;for(let u=0;u<c.length;u++){let f=c[u],m=f.userData.detail;m&&(f.visible=m==="leaf"?a<s:a<t||n&&m==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*kt,s=n+kt,r=t.at(n),o=r.x,a=r.z,c=tn(Math.floor(Xn(e,777)*4294967295)),u={atlas:new _n({uv:!0,ao:!0,lit:!0}),color:new _n({ao:!0}),foliage:new _n,leaf:new _n({uv:!0}),lamp:new _n({color:!1}),sig:new _n({color:!1}),sodium:new _n({color:!1}),decal:new _n({uv:!0}),pool:new _n({uv:!0,color:!1})},f=new Gf,m=[],g=[];u.lamps=[];let v={},y={},S=(w,R)=>{t.at(w,y);let P=An(w,"rw");return y.y+ir(w,R,y.y,P)},l=w=>{let R=Ut(w);return[R.city,R.sakura,R.coast,R.country,R.snow]},h=(w,R,P)=>(t.at(w,v),[v.x+v.rx*R-o,P,v.z+v.rz*R-a]),d=(w,R,P,I=0,C=!0)=>{t.at(w,v);let L=v.h-Math.PI/2+(C&&R<0?Math.PI:0)+I,U=new nt().makeRotationY(L);return U.setPosition(v.x+v.rx*R-o,P,v.z+v.rz*R-a),U.groundY=P,U},x=(w,R,P=0,I=0,C=!0)=>{let L=S(w,R),U=d(w,R,L+P,I,C);return U.groundY=L,U},p=w=>t.at(w,y).y,_=w=>An(w,"rw"),T=w=>{let R=Ut(w);return R.city+R.sakura>.5?R.city>=R.sakura?3:2.6:0};{let w=mi(n+kt/2),R=!!w&&w.s>n-40&&w.s<s+40,P=R?61:21,I=_(n+kt/2),C=(()=>{let K=[0,...gm].map(oe=>oe);return vm.forEach(oe=>K.push(oe-I)),K})(),L=[...C.slice().reverse().map(O=>-O),...C],U=L.length,z=Array.from({length:P},(O,K)=>n+K/(P-1)*kt);{let O=gi(n+kt/2);if(O)for(let K of[O.s-an,O.s+an])K>n+.1&&K<s-.1&&z.push(K-.03,K+.03)}z.sort((O,K)=>O-K);let G=U/2,D=z.map(O=>(t.at(O,v),{s:O,f:{...v},rw:_(O),w:l(O),rb:R?fp(O):0})),H=Math.round(G/2);for(let[O,K,oe,Ve]of[[0,H,0,1],[H-1,G,1,0],[G,G+H+1,0,1],[G+H,U,1,0]])f.gridN(D.length,K-O,(Ue,xe)=>{let Z=D[Ue],j=Z.f,ue=O+xe,Pe=L[ue],Se=Pe<0||Pe===0&&ue<G?Pe-Z.rw:Pe+Z.rw,Ge=j.y+ir(Z.s,Se,j.y,Z.rw),$e=Math.abs(Se)>Z.rw+.98?Math.min(1,ou/.5):0;return[j.x+j.rx*Se-o,Ge,j.z+j.rz*Se-a,0,1,0,cs(Z.s,ss),Se,Z.w[0],Z.w[1],Z.w[2],Z.w[3],Z.rw,0,Z.rb>0?Z.rb:-$e,Z.w[4]]},oe,Ve),yield}yield,f.grid(31,2,(R,P)=>{let I=n+R/30*kt,C=_(I),L=P?C:-C;t.at(I,v);let U=v.y,z=(p(I+1)-p(I-1))/2,G=-z*v.fx,D=1,H=-z*v.fz,O=Math.hypot(G,D,H),K=l(I);return[v.x+v.rx*L-o,U,v.z+v.rz*L-a,G/O,D/O,H/O,cs(I,ss),L,K[0],K[1],K[2],K[3],C,1,0,K[4]]});{let w=[];for(let I=0;I<=30;I++){let C=n+I/30*kt;w.push({s:C,sw:T(C)})}let R=[],P=null;for(let I of w)I.sw>0?(P||(P=[],R.push(P)),P.push(I)):P=null;for(let I of R)if(!(I.length<2))for(let C of[-1,1])f.grid(I.length,2,(L,U)=>{let{s:z,sw:G}=I[L],D=_(z),H=C*(U===(C>0?0:1)?D:D+G);t.at(z,v);let O=l(z);return[v.x+v.rx*H-o,v.y+.15,v.z+v.rz*H-a,0,1,0,cs(z,ss),H,O[0],O[1],O[2],O[3],D,2,0,O[4]]}),f.grid(I.length,2,(L,U)=>{let{s:z}=I[L],G=_(z),D=C*G,H=C>0?U:1-U;t.at(z,v);let O=l(z);return[v.x+v.rx*D-o,v.y+(H?.15:0),v.z+v.rz*D-a,-C*v.rx,0,-C*v.rz,cs(z,ss),D,O[0],O[1],O[2],O[3],G,3,0,O[4]]})}yield,yield*this.placePoles(e,n,s,c,u,d,S,h,p,_);{let w=Math.ceil((n-tr)/er),R=so(w);R<s&&Ca(R)&&(yield*this.placeCrossing(u,f,R,d,p,_,S,T,o,a));let P=Math.ceil((n-ro)/nr),I=_f(P);I<s&&yf(I)&&(yield*this.placeRiver(u,f,I,d,p,_,S,T,o,a,c,g));let C=gi(n+kt/2);C&&C.s+nn>n&&C.s-nn<s&&(yield*this.placeTunnel(u,f,C,n,s,d,x,S,_,o,a,c))}yield;for(let w=n;w<s;w+=4){let R=Jt(w);(R==="coast"&&Ut(w).coast>.45||R==="mountain"&&Ut(w).mountain>.45)&&!Ui(w+2,nn+4)&&this.guardrail(u,w,Math.min(w+4,s),h,p,_)}yield*this.placeCity(u,c,n,s,d,x,p,_,T,S,f,o,a),yield*this.placeSakura(u,c,n,s,d,x,p,_,S),this.placeCoast(u,c,n,s,d,x,p,_,S,m,h),yield,yield*this.placeCountry(u,c,n,s,d,x,p,_,S),yield*this.placeMountain(u,c,n,s,d,x,p,_,S),yield*this.placeSnow(u,c,n,s,d,x,p,_,S),yield*this.placeVerge(u,c,n,s,d,S,_,e,o,a),yield;let E=new Kt,M=(w,R,P,I,C=0,L)=>{if(!w)return null;let U=new vt(w,R);return U.castShadow=P,U.receiveShadow=I,U.renderOrder=C,L&&(U.userData.detail=L),E.add(U),U},b=new Set;for(let w of[n,n+20,n+40,s]){let R=io(w);b.add(R.a),R.t>0&&b.add(R.b)}M(f.build(),Da([...b]),!1,!0),yield,M(u.atlas.build(),this.M.atlas,!0,!0),yield;{let w=M(u.color.build(),this.M.color,!0,!0);w&&(w.customDepthMaterial=hu)}if(yield,M(u.foliage.build(),this.M.foliage,!0,!0),M(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),yield,M(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),M(u.sig.build(),this.M.sig,!1,!1,0,"small"),M(u.sodium.build(),this.M.sodium,!1,!1),M(u.decal.build(),this.M.decal,!1,!0,1,"small"),M(u.pool.build(),this.M.pool,!1,!1,2,"light"),m.length){let w=new bt,R=[],P=[],I=[];m.forEach((C,L)=>{for(let U of C)R.push(U[0],U[1],U[2]),P.push(U[3],U[4]);if(L>0){let U=(L-1)*2;I.push(U,U+2,U+1,U+1,U+2,U+3)}}),w.setAttribute("position",new Ye(R,3)),w.setAttribute("su",new Ye(P,2)),w.setIndex(I),w.computeBoundingSphere(),M(w,this.foamMat,!1,!1,1)}for(let w of g)M(w,this.riverMat,!1,!0);return E.position.set(o-this.origin.x,0,a-this.origin.z),{group:E,ox:o,oz:a,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Hf+6,n=Jt(t);if(n==="sakura"||us(t,6)||ei(t,34)||Ui(t,nn+12))return null;let s=An(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,a,c,u,f){let m=Math.ceil((t-6)/Hf),g=Math.floor((n-6-.001)/Hf);for(let v=m;v<=g;v++){let y=this.poleSpec(v);if(!y)continue;let S=y.z==="city"?u(y.s)+.15:a(y.s,y.u),l=o(y.s,y.u,S),h=tn(Math.floor(Xn(v,31)*4294967295)),d=If(r,l,h,{trans:h()<.45});y.z==="city"&&v%2===0&&Vp(r,l,-.11),v%2&&(yield);let x=this.poleSpec(v+1);if(x){let p=x.z==="city"?u(x.s)+.15:a(x.s,x.u),_=Hp(o(x.s,x.u,p));r.color.setM(new nt);let T=[];for(let E=0;E<d.length;E++){let M=d[E],b=_[E],w=.35+h()*.4+(E>=7?.3:0);T.push(w),r.color.wire([M.x,M.y,M.z],[b.x,b.y,b.z],w,E>=7?.022:.015,Ba,10)}if(y.z!=="coast"&&h()<.38){let E=Math.floor(h()*4),M=d[E],b=_[E],w=1+Math.floor(h()*4),R=.18+h()*.5;for(let P=0;P<w;P++){let I=Math.min(.92,R+P*(.018+h()*.025)),C=M.x+(b.x-M.x)*I,L=M.z+(b.z-M.z)*I,U=M.y+(b.y-M.y)*I-T[E]*4*I*(1-I);r.color.box(C-.07,U+.015,L-.07,C+.07,U+.19,L+.07,xm),r.color.box(C-.045,U+.19,L-.045,C+.045,U+.27,L+.045,xm)}}}if(y.z==="city"){r.color.setM(new nt);let p=1+Math.floor(h()*3);for(let _=0;_<p;_++){let T=d[7+_%2],E=(h()-.5)*14,M=f(y.s+E),b=h()<.55,w=b?-(M+3.15):M+3.15,R=c(y.s+E,w,u(y.s+E)+5.2+h()*2.5);r.color.wire([T.x,T.y,T.z],R,.25+h()*.4,.012,Ba,8)}}}}*intersection(e,t,n,s,r,o,a,c,u,f,m){let g=this.path.at(n,{}),v=o(n),y=a(n),S=c(n)||3,l=n-.5,h=Ut(n),d=[h.city,h.sakura,h.coast,h.country],x=(_,T,E)=>[g.x+g.fx*(_-.5)+g.rx*T-f,E,g.z+g.fz*(_-.5)+g.rz*T-m],p=y+S+.15;for(let _ of[-1,1]){let T=_*(y+S),E=_*80;u.grid(21,2,(R,P)=>{let I=T+(E-T)*R/20,C=(P?-3:3)*_,L=x(C,I,v+.165);return[L[0],L[1],L[2],0,1,0,C*_,I,d[0],d[1],d[2],d[3],y,10]});{let R=_*(y+S+3.2),P=-_*1.35,I=1.15,C=.42,L=(U,z)=>x(P+_*U,R-_*z,v+.18);e.decal.setM(new nt),e.decal.quad(L(-I,-C),L(I,-C),L(I,C),L(-I,C),[1,1,1],co("tomare"))}for(let R of[-1,1]){let P=p+15+t()*3;for(;P<52;){let I=t.range(5.5,8.5),C=_*(P+I/2),L=t(),U=r(l+R*3.3,C,v+.14,R>0?Math.PI/2:-Math.PI/2,!1);ls(e,U,t,{type:L<.5?"house":"shop",w:I,d:t.range(7,10),floors:L<.5?2:t.int(2,3),tint:t.pick(as),litP:.45,fence:0}),P+=I+t.range(.2,1.2),yield}yield}let M=[30,54].map(R=>r(l+2.8,_*R,v+.15,-Math.PI/2,!1)),b=tn(Math.floor(Xn(s,_>0?71:73)*4294967295)),w=M.map(R=>If(e,R,b,{trans:b()<.4}));e.color.setM(new nt);for(let R=0;R<7;R++){let P=w[0][R],I=w[1][R];e.color.wire([P.x,P.y,P.z],[I.x,I.y,I.z],.3+b()*.4,.014,Ba,10)}}Of(e,r(n-9,-(y+.55),v+.15,0,!0),1,y+.55-1.6),Of(e,r(n+8,y+.55,v+.15,0,!0),1,y+.55-1.6),s%3===1&&rm(e,r(n+15,0,v,0,!1),y+S+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,o,a,c,u,f){let m=this.path.at(n,{}),g=m.y,v=o(n),y=c(n),S=v+y+.2,l=150,h=g+.18,d=Ut(n),x=[d.city,d.sakura,d.coast,d.country],p=(L,U,z)=>[m.x+m.fx*L+m.rx*U-u,z,m.z+m.fz*L+m.rz*U-f],_=[7.6,4.7,-4.7,-7.6];for(let[L,U]of[[-l,-S],[S,l]])t.grid(25,_.length,(G,D)=>{let H=L+(U-L)*G/24,O=_[D],oe=Math.abs(O)<5?h:Math.min(h-.05,a(n+O,H)-.03),Ve=p(O,H,oe);return[Ve[0],Ve[1],Ve[2],0,1,0,O,H,x[0],x[1],x[2],x[3],v,5]});let T=(L,U,z)=>t.grid(2,2,(G,D)=>{let H=G?U:L,O=D?-3.3:3.3,K=p(O,H,z);return[K[0],K[1],K[2],0,1,0,O,H,x[0],x[1],x[2],x[3],v,6]});T(-v,v,g+.03),y>0&&(T(-S,-v,g+.165),T(v,S,g+.165));let E=(L,U,z,G)=>t.grid(2,2,(D,H)=>{let O=D?G:z,K=H?U:L,oe=p(K,O,g+.025);return[oe[0],oe[1],oe[2],0,1,0,K,O,x[0],x[1],x[2],x[3],v,7]});E(-7.15,-7.6,-v+.3,-.12),E(7.6,7.15,.12,v-.3),yield;let M=s(n,0,g,-Math.PI/2,!1),b=e.color;b.setM(M);let w=[.42,.4,.38],R=[.3,.29,.28],P=[.55,.57,.6];for(let L of[-2,2])for(let U of[-.5335,.5335]){let z=-(L+U);for(let[G,D]of[[-l,-S],[S,l]])b.box(G,.26,z-.035,D,.34,z+.035,w);b.box(-S,0,z-.035,S,.04,z+.035,R)}let I=[-146,-104,-64,-26,26,64,104,146];for(let L of I){for(let U of[-4.95,4.95])b.box(L-.12,.18,U-.12,L+.12,7.4,U+.12,P);b.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,P);for(let U of[-2,2])b.box(L-.04,6.3,-U-.04,L+.04,6.95,-U+.04,P)}for(let L of[-2,2])for(let U=0;U<I.length-1;U++)b.wire([I[U],5.35,-L],[I[U+1],5.35,-L],.05,.011,Ba,6),b.wire([I[U],6.4,-L],[I[U+1],6.4,-L],.45,.011,Ba,8);yield;let C=Math.round((n-tr)/er);if(d.country>.9&&Xn(C,17)<.7){let L=Xn(C,19)<.5?-1:1,U=L>0?v+9:-(v+9+46),z=L>0?v+9+46:-(v+9);om(e,M,U,z,L*(v+9),Math.abs(C)%4,tn(Math.floor(Xn(C,23)*4294967295))),b.setM(M)}yield;for(let L of fu(this.path,n)){let U=new nt().makeRotationY(L.yaw);U.setPosition(L.x-u,L.y,L.z-f),cm(e,U)}Ls(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85),Ls(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,a,c,u,f,m,g){let v=this.path.at(n,{}),y=v.y,S=o(n),l=c(n),h=Ut(n),d=[h.city,h.sakura,h.coast,h.country],x=h.sakura>.5,p=222,_=S+l+.5,T=y-Pa,E=(C,L,U)=>[v.x+v.fx*C+v.rx*L-u,U,v.z+v.fz*C+v.rz*L-f];{let C=[],L=[],U=[];for(let D=0;D<=74;D++){let H=-p+2*p*D/74;for(let O of[14.3,-14.3]){let K=E(O,H,T);C.push(K[0],K[1],K[2]),L.push(O,H)}if(D>0){let O=(D-1)*2;U.push(O,O+1,O+2,O+1,O+3,O+2)}}let G=new bt;G.setAttribute("position",new Ye(C,3)),G.setAttribute("su",new Ye(L,2)),G.setIndex(U),G.computeBoundingSphere(),g.push(G)}for(let[C,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[U,z]of[[-p,-(S+3.4)],[S+3.4,p]])t.grid(41,2,(G,D)=>{let H=U+(z-U)*G/40,O=D?L:C,K=E(O,H,y+.38);return[K[0],K[1],K[2],0,1,0,O,H,d[0],d[1],d[2],d[3],S,9,1]});yield;let M=s(n,0,y,0,!1),b=e.color,w=[.74,.73,.7],R=x?[.78,.2,.15]:[.55,.72,.64];b.setM(M),b.box(-24.5,-1,-_,24.5,-.03,_,w,null,{noBottom:!1});for(let C of[-1,1])b.box(-24.5,-1.3,C>0?_-.35:-_,24.5,-.95,C>0?_:-_+.35,[.62,.61,.58]);for(let C of[-8,8])b.box(C-.7,-Pa-1.4,-_+.6,C+.7,-1,_-.6,w);for(let C of[-25.7,25.7])b.box(C-1.2,-Pa+.4,-_-.4,C+1.2,-.05,_+.4,w);for(let C of[-24.5,24.5])b.box(C-.16,.004,-S,C+.16,.016,S,[.33,.32,.31]),b.box(C-.02,.016,-S,C+.02,.02,S,[.2,.19,.19]);let P=l>0?.15:0;for(let C of[-1,1]){let L=C*(_-.14);for(let U=-24;U<=24.01;U+=2)b.box(U-.06,P,L-.06,U+.06,P+1,L+.06,R);b.box(-24,P+.95,L-.08,24,P+1.08,L+.08,R),b.box(-24,P+.48,L-.03,24,P+.54,L+.03,R),b.box(-24,P+.06,L-.03,24,P+.12,L+.03,R)}let I="bridge"+Math.abs(Math.round(n/nr))%4;for(let C of[-25,25])for(let L of[-1,1]){let U=L*(_-.1),z=[.7,.69,.65];b.box(C-.32,P,U-.32,C+.32,P+1.45,U+.32,z),b.box(C-.38,P+1.45,U-.38,C+.38,P+1.58,U+.38,[.62,.61,.57]),e.atlas.setM(M);let G=(C<0?-1:1)*.325,D=I;C<0?e.atlas.quad([C-.325,P+.3,U-.22],[C-.325,P+.3,U+.22],[C-.325,P+1.3,U+.22],[C-.325,P+1.3,U-.22],[1,1,1],co(D)):e.atlas.quad([C+.325,P+.3,U+.22],[C+.325,P+.3,U-.22],[C+.325,P+1.3,U-.22],[C+.325,P+1.3,U+.22],[1,1,1],co(D)),b.setM(M)}Na(e,s(n-14,-(_-.45),y+P,0,!0)),Na(e,s(n+14,_-.45,y+P,0,!0)),yield;{e.atlas.setM(new nt);let C=co("gogan"),L=2.4,U=150;for(let z of[-1,1])for(let G=-U;G<U-.01;G+=L){let D=G+L,H=E(z*13.9,G,T-.12),O=E(z*13.9,D,T-.12),K=E(z*16.05,D,T+.72),oe=E(z*16.05,G,T+.72),Ve=(O[1]-H[1])*(oe[2]-H[2])-(O[2]-H[2])*(oe[1]-H[1]),Ue=(O[0]-H[0])*(oe[1]-H[1])-(O[1]-H[1])*(oe[0]-H[0]),xe=E(0,(G+D)/2,T),Z=Ve*(xe[0]-H[0])+Ue*(xe[2]-H[2])>0,j={u0:C.u0,u1:C.u1,v0:C.v0,v1:C.v1};Z?e.atlas.quad(H,O,K,oe,[1,1,1],j):e.atlas.quad(O,H,oe,K,[1,1,1],{u0:C.u1,u1:C.u0,v0:C.v0,v1:C.v1})}for(let z of[-1,1])for(let G of[-1,1])for(let D=14+m()*3;D<125;D+=m.range(2.4,5)){if(m()<.35)continue;let H=z*(16.2+m()*1.1),O=G*D,K=1+(m()<.4?1:0);for(let oe=0;oe<K;oe++){let Ve=E(H+z*m()*.6,O+(m()-.5)*.9,T+.7),Ue=new nt().makeRotationY(m()*6.28);Ue.setPosition(Ve[0],Ve[1],Ve[2]),Bf(e,Ue,m,"grass",m.range(1.9,2.8))}}}yield;for(let C of[-18,18])for(let L of[-1,1]){yield;for(let U=11+m()*4;U<(x?125:170);U+=x?m.range(8.5,11):m.range(18,34)){let z=n+C+(m()-.5)*1.5,G=L*U;On(e,s(z,G,a(z,G),m()*6,!1),x?"sakura":"broad",m,x?m.range(1,1.25):m.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,a,c,u,f,m,g){let v=this.path.at(n.s,{}),y=v.y,S=u(n.s),l=S+1.4,h=Ut(n.s),d=[h.city,h.sakura,h.coast,h.country],x=o(n.s,0,y,0,!1),p=e.color,_=Math.max(s,n.s-an)-n.s,T=Math.min(r,n.s+an)-n.s;if(T>_+.01){let D=Math.max(2,Math.ceil((T-_)/3)+1),H=[-(S+1.5),-S,-S*.5,0,S*.5,S,S+1.5];t.gridN(D,H.length,(j,ue)=>{let Pe=_+(T-_)*j/(D-1),Se=n.s+Pe,Ge=H[ue],$e=y+lu(Pe,Ge);return[v.x+v.fx*Pe+v.rx*Ge-f,$e,v.z+v.fz*Pe+v.rz*Ge-m,0,1,0,cs(Se,ss),Ge,d[0],d[1],d[2],d[3],S,0,-1]});let O=[[-S,0],[-S,.2],[-l,.2],[-l,3.2]];for(let j=1;j<12;j++){let ue=Math.PI*(1-j/12);O.push([l*Math.cos(ue),3.2+3*Math.sin(ue)])}O.push([l,3.2],[l,.2],[S,.2],[S,0]);let K=[.86,.82,.72],oe=[.44,.45,.47],Ve=[.62,.61,.58],Ue=[];for(let j=_;j<T-.01;j+=6)Ue.push(j);Ue.push(T),p.setM(x);for(let j=0;j<Ue.length-1;j++)for(let ue=0;ue<O.length-1;ue++){let[Pe,Se]=O[ue],[Ge,$e]=O[ue+1],ke=Math.max(Se,$e)<=.21?Ve:Math.abs(Pe)>l-.01&&Math.abs(Ge)>l-.01?K:oe;p.quad([Ue[j],Se,Pe],[Ue[j+1],Se,Pe],[Ue[j+1],$e,Ge],[Ue[j],$e,Ge],ke)}e.sodium.setM(x),e.sig.setM(x);let xe=l*Math.cos(Math.PI/6)-.12,Z=3.2+3*Math.sin(Math.PI/6)-.08;for(let j=Math.ceil((_+an-3)/6)*6+3-an;j<T;j+=6)for(let ue of[-1,1])e.sodium.box(j-.45,Z-.07,ue*xe-.13,j+.45,Z+.07,ue*xe+.13,null),Is(e,x,j,Z-.1,ue*xe,1);for(let j=Math.ceil((_+an)/24)*24-an;j<T;j+=24)e.sig.box(j-.3,.95,-l+.01,j+.3,1.2,-l+.06,null);for(let j=Math.ceil((_+an-30)/60)*60+30-an;j<T;j+=60)for(let ue of[-1.15,1.15])p.box(j-1.1,5.2,ue-.36,j+1.1,5.78,ue+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),p.box(j-.08,5.78,ue-.05,j+.08,6.15,ue+.05,[.4,.4,.42]);yield}let E=(D,H)=>{let O=Math.sin(D*12.9898+H*78.233+n.k*37.719)*43758.5453;return O-Math.floor(O)},M=(D,H,O)=>[D[0]+(H[0]-D[0])*O,D[1]+(H[1]-D[1])*O,D[2]+(H[2]-D[2])*O],b=[.5,.5,.47],w=[.55,.53,.47],R=[.6,.6,.57],P=[.58,.58,.55],I=[.42,.42,.4],C=(D,H)=>{let O=E(D,H);return L?M([.26,.29,.08],[.42,.3,.09],O):M([.22,.29,.08],[.36,.36,.12],O)},L=h.mountain>.5,U=l+2.6,z=2.6;for(let D of[-1,1]){let H=n.s+D*an,O=D*(an+.08);if(H<s||H>=r)continue;let K=[];for(let ee of gm)ee>=1.44&&K.push(S+ee,-(S+ee));for(let ee of vm)ee>S+3.5&&ee<S+21&&K.push(ee,-ee);for(let ee=0;ee<=24;ee++)K.push(-l+2*l*ee/24);K.push(-l-.01,l+.01,-U,U),K.sort((ee,F)=>ee-F);let oe=ee=>3.2+3*Math.sqrt(Math.max(0,1-(ee/l)**2)),Ve=ee=>Math.max(c(H-D*.03,ee)-y,lu(D*(an-.03),ee)),Ue=ee=>Math.abs(ee)<=l+1e-6?oe(ee):c(H+D*.03,ee)-y,xe=8.4;for(let ee of K)Math.abs(ee)<=U&&(xe=Math.min(xe,Ve(ee)-.4));let Z=xe>6.6;p.setM(x);let j=D,ue=(ee,F,A,W,Y,J,V,me)=>{let le=[O,A,ee],he=[O,W,F],Ie=[O,J,F],Ce=[O,Y,ee],ge=D<0?[le,he,Ie,Ce]:[he,le,Ce,Ie],_e=D<0?[V,V,me,me]:[V,V,me,me];for(let Ee of[0,1,2,0,2,3])p.vtx(ge[Ee][0],ge[Ee][1],ge[Ee][2],j,0,0,0,0,_e[Ee])},Pe=(ee,F,A)=>ee+(F-ee)*A;for(let ee=0;ee<K.length-1;ee++){let F=K[ee],A=K[ee+1];if(A-F<1e-4)continue;let W=Ve(F),Y=Ve(A),J=Ue(F),V=Ue(A);if(W-J<.01&&Y-V<.01)continue;let me=(F+A)/2,le=Z&&Math.abs(me)<U,he=J,Ie=V;if(le){let Ee=M(b,[.46,.46,.44],E(Math.floor(me/2.4),3.1)),et=.8+2.6*E(Math.floor(me/.8),7.7),rt=M(Ee,[.27,.27,.26],.35+.3*E(Math.floor(me/.8),9.9)),X=Math.min(xe,W),Re=Math.min(xe,Y),fe=Math.max(J,X-et),Ne=Math.max(V,Re-et);if(Math.abs(me)>l){let Fe=Math.min(fe,J+.9),we=Math.min(Ne,V+.9);ue(F,A,J,V,Fe,we,M(Ee,[.25,.29,.18],.45),Ee),ue(F,A,Fe,we,fe,Ne,Ee,Ee)}else ue(F,A,J,V,fe,Ne,Ee,Ee);if(ue(F,A,fe,Ne,X,Re,Ee,rt),he=X,Ie=Re,W-X<.01&&Y-Re<.01)continue}let Ce=Math.floor(me/z),ge=he,_e=Ie;for(let Ee=Math.floor(Math.min(ge,_e)/z)+1;ge<W-.01||_e<Y-.01;Ee++){let et=Ee*z,rt=Math.min(W,Math.max(ge,et)),X=Math.min(Y,Math.max(_e,et)),Re=C(Ce,Ee);if(ue(F,A,ge,_e,rt,X,M(Re,[.2,.22,.1],.25),Re),ge=rt,_e=X,Ee>60)break}}let Se=Math.min(O,O+D*.12),Ge=Math.max(O,O+D*.12),$e=ee=>{for(let F=0;F<K.length-1;F++)if(ee>=K[F]&&ee<=K[F+1]&&K[F+1]>K[F]){let A=(ee-K[F])/(K[F+1]-K[F]);return[Pe(Ue(K[F]),Ue(K[F+1]),A),Pe(Ve(K[F]),Ve(K[F+1]),A)]}return null},ke=K[0],ut=K[K.length-1];for(let ee=Math.ceil(ke/z)*z;ee<ut;ee+=z){let F=$e(ee);if(!F)continue;let A=(Z&&Math.abs(ee)<U?Math.max(xe+.3,F[0]):F[0])+.05,W=F[1]-.05;W-A>.4&&!(Math.abs(ee)<=l+.3&&!Z)&&p.box(Se,A,ee-.14,Ge,W,ee+.14,w)}for(let ee=1;ee<60;ee++){let F=ee*z,A=null,W=()=>{A&&A[1]-A[0]>.3&&p.box(Se,F-.14,A[0],Ge,F+.14,A[1],w),A=null},Y=!1;for(let J=0;J<K.length-1;J++){let V=K[J],me=K[J+1];if(me-V<1e-4)continue;let le=(V+me)/2,he=Math.max(Ue(V),Ue(me),Z&&Math.abs(le)<U?xe+.3:-1e9),Ie=Math.min(Ve(V),Ve(me));F>he+.2&&F<Ie-.2?(Y=!0,A?A[1]=me:A=[V,me]):W()}if(W(),!Y&&F>30)break}Z&&p.box(Math.min(O,O+D*.32),xe-.05,-U,Math.max(O,O+D*.32),xe+.3,U,R);let te=O+D*.32,ye=ee=>-l+2*l*ee/24,Te=ee=>[ye(ee),oe(ye(ee))],Q=ee=>[ye(ee)*1.12,oe(ye(ee))+.6];for(let ee=0;ee<24;ee++){let[F,A]=Te(ee),[W,Y]=Te(ee+1),[J,V]=Q(ee),[me,le]=Q(ee+1);D<0?p.quad([te,A,F],[te,Y,W],[te,le,me],[te,V,J],P):p.quad([te,Y,W],[te,A,F],[te,V,J],[te,le,me],P),D<0?p.quad([O,A,F],[O,Y,W],[te,Y,W],[te,A,F],I):p.quad([O,Y,W],[O,A,F],[te,A,F],[te,Y,W],I),D<0?p.quad([O,le,me],[O,V,J],[te,V,J],[te,le,me],P):p.quad([O,V,J],[O,le,me],[te,le,me],[te,V,J],P)}for(let ee of[-1,1])p.box(Math.min(O,te),.2,ee>0?l:-l*1.12,Math.max(O,te),3.2,ee>0?l*1.12:-l,P);e.atlas.setM(x);let ne=1.9,ce=7.05,re=7.85,B=O+D*.03,ve=co("tunnel"+(h.coast>.5?1:Math.abs(n.k)%2?2:0));D<0?e.atlas.quad([B,ce,-ne],[B,ce,ne],[B,re,ne],[B,re,-ne],[1,1,1],ve):e.atlas.quad([B,ce,ne],[B,ce,-ne],[B,re,-ne],[B,re,ne],[1,1,1],ve)}yield;let G=h.mountain>.5;for(let D=Math.max(s,n.s-nn*.95)+g()*3;D<Math.min(r,n.s+nn*.95);D+=g.range(4,8)){let H=Math.abs(D-n.s)>an-4?17:4;for(let O of[-1,1]){let K=O*(S+g.range(H,50)),oe=g();On(e,a(D,K,-.3,g()*6,!1),G?oe<.5?"maple":oe<.8?"cedar":"ginkgo":oe<.65?"pine":"broad",g,g.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,a,c,u){let f=m=>Ut(m).snow;if(!(f(n)<.3&&f(s)<.3)){for(let m of[-1,1]){for(let g=n+t()*20;g<s;g+=t.range(22,40)){if(f(g)<.6||t()<.5)continue;let v=m*t.range(18,90);ls(e,o(g,v,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(as),litP:.62,fence:0,snow:!0});for(let y=0;y<2+t()*3;y++)On(e,o(g+t.range(-9,9),v+m*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let g=n+t()*5;g<s;g+=t.range(3,7))f(g)<.5||(t()<.32&&On(e,o(g,m*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&On(e,o(g,m*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let m=Math.ceil(n/36)*36;m<s;m+=36){if(f(m)<.55)continue;let g=c(m);{let v=r(m,-(g+.95),a(m)+1.3),y=r(m+18,g+.95,a(m+18)+1.3);v.groundY=a(m),y.groundY=a(m+18),Uf(e,v,1),Uf(e,y,-1)}}}}*placeMountain(e,t,n,s,r,o,a,c,u){let f=m=>Ut(m).mountain;if(!(f(n)<.3&&f(s)<.3)){for(let m of[-1,1]){for(let g=n+t()*4;g<s;g+=t.range(4.5,8.5)){if(f(g)<.45||Ui(g,nn+6))continue;let v=c(g),y=t();if(m>0){let S=y<.5?"maple":y<.72?"ginkgo":"cedar";On(e,o(g,v+t.range(17,70),-.25,t()*6,!1),S,t,t.range(.9,1.3))}else{let S=y<.55?"maple":y<.8?"cedar":"ginkgo";On(e,o(g,-(v+t.range(3.5,34)),-.25,t()*6,!1),S,t,t.range(.95,1.35))}}yield}for(let m=n+t()*4;m<s;m+=t.range(3,6)){if(f(m)<.5)continue;let g=t()<.7,v=-(c(m)+(g?t.range(108,205):t.range(36,100)));On(e,o(m,v,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new nt);for(let m=Math.ceil(n/10)*10;m<s;m+=10){if(f(m)<.5||Ui(m,nn+4))continue;let g=c(m),v=r(m,-(g+.95),a(m));Xp(e,v)}for(let m=Math.ceil(n/14)*14;m<s;m+=14){if(f(m)<.6)continue;let g=this.path.curv(m);if(Math.abs(g)<1/230)continue;let v=c(m);g>0?Ls(e,r(m,v+.42,a(m)),"chev_l",-1,1.25,.58):Ls(e,r(m,-(v+1.15),a(m)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,a){let c=this.path,u={},f=tn(Math.floor(Xn(t,1789)*4294967295)),m=Kp(),g=Math.floor((n+kt/2)/600)*600+300,v=Math.floor((n+kt/2)/700)*700+120,y=Math.floor((n+kt/2)/380)*380+190,S=Xn(Math.round(y),5)<.5?-1:1;for(let l of[-1,1]){e.leaf.setM(Jy);for(let h=n+f()*m;h<s;h+=m*f.range(.75,1.25)){if(Jt(h)!=="country"||us(h,10)||ei(h,31)||l<0&&(Math.abs(h-g)<2.9||h>v-1.3&&h<v+2.7)||l===S&&Math.abs(h-y)<1.6)continue;c.at(h,u);let d=a(h),x=l*(d+.95+(f()-.5)*.36),p=u.y+ir(h,x,u.y,d),_=(f()-.5)*.8,T=Math.cos(_)*l,E=Math.sin(_)*l;$p(e,u.x+u.rx*x-r,p,u.z+u.rz*x-o,u.rx*T+u.fx*E,u.rz*T+u.fz*E,f,f.range(.85,1.15))}yield}}*placeVerge(e,t,n,s,r,o,a,c,u,f){yield*this.placeBanks(e,c,n,s,u,f,a);for(let m of[-1,1]){for(let g=n+t()*1.2;g<s;g+=t.range(.55,1.5)){if(us(g,10)||ei(g,31)||Ui(g,nn+4))continue;let v=Jt(g),y=a(g),S,l,h=.22,d=1;if(v==="country")S=y+t.range(2.05,2.8),l=.25,h=.35;else if(v==="sakura")S=y+2.68+t()*1.3,l=.55,h=.3;else if(v==="coast"){if(m<0)continue;S=y+.95+t()*1.7,l=.75,h=.18}else{if(v==="snow")continue;if(v==="mountain")S=m<0?y+1+t()*.35:y+.25+t()*.2,l=m<0?.55:.18,h=.12,d=.85;else{if(Vf(g,5))continue;S=y+3.02+t()*.1,l=.1,h=.08,d=.65}}if(t()>l)continue;let x=m*S;Bf(e,r(g,x,o(g,x),t()*6.28,!1),t,t()<h?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new nt);let a=Math.max(1,Math.round((n-t)/2)),c=be.rail,u=[.62,.64,.66],f=[.74,.76,.79],m=[.95,.55,.16];for(let g=0;g<a;g++){let v=t+(n-t)*g/a,y=t+(n-t)*(g+1)/a,S=-(o(v)+.95),l=-(o(y)+.95),h=r(v),d=r(y);for(let p=0;p<kf.length-1;p++){let[_,T]=kf[p],[E,M]=kf[p+1];e.color.quad(s(v,S+T,h+_),s(y,l+T,d+_),s(y,l+M,d+E),s(v,S+M,h+E),c)}e.color.quad(s(y,l+.05,d+.5),s(v,S+.05,h+.5),s(v,S+.05,h+.84),s(y,l+.05,d+.84),u),e.color.noShadow=!0;let x=s(v,S-.04,h);if(e.color.cyl(x[0],h,x[2],.055,.055,.8,6,f,!1),Math.round(v/2)%2===0){let p=s(v,S+.035,h+.64),_=s(v+.09,S+.035,h+.64);e.color.quad(_,p,[p[0],p[1]+.07,p[2]],[_[0],_[1]+.07,_[2]],m)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,a,c,u,f,m,g,v){for(let l of[-1,1]){let h=n+t()*2;for(;h<s-2;){{let C=Ut(h);if(C.city<.62||C.mountain>.1){h+=4;continue}}{let C=Cs(h+6);if(C&&h<C.s+8.5&&h+14>C.s-8.5){h=Math.max(h+1,C.s+8.5);continue}}let d=cs(h,150);if(d>145.6||d<3.4){h+=1;continue}let x=c(h),p=u(h)||3,_=x+p+.15,T=t(),E=T<.7?"machiya":T<.75?"shop":T<.81?"apt":T<.83?"office":T<.88?"house":T<.92?"konbini":T<.96?"parking":"gap",M=E==="shop"?t.range(5,9):E==="machiya"?t.range(6,9.5):E==="apt"?t.range(10,16):E==="office"?t.range(10,14):E==="house"?t.range(7,9.5):E==="konbini"?t.range(12,14):E==="parking"?t.range(7,11):t.range(2,3.5);if(h+M>s){if(s-h<5||E==="konbini")break;M=s-h-.2}{let C=Math.ceil((h+4.4)/150)*150-4.4;if(h+M>C-.1){if(C-.1-h<4){h=C+7.9;continue}M=C-.1-h}}let b=h+M/2,w=a(b),R=t.pick(as),P=.42,I=E==="machiya"&&t()<.42;if(E==="parking"){let C=r(b,l*(_+3),w+.15);t()<.8&&sm(e,yu(C,0,0,.5,(t()-.5)*.1),t),e.color.setM(C),e.color.box(-M/2,0,5.5,M/2,1.6,5.7,be.concrete)}else if(E!=="gap"){let C=r(b,l*_,w+.15),L={type:E,w:M,d:E==="apt"||E==="office"?t.range(10,14):t.range(8,12),floors:E==="shop"?t.int(2,4):E==="machiya"?t()<.7?2:3:E==="apt"?t.int(4,9):E==="office"?t.int(4,8):2,tint:I?Rf[Math.floor(t()*Rf.length)]:R,litP:P,plaster:I,fence:E==="house"&&t()<.5?1.2:0};if(ls(e,C,t,L),E!=="house"&&t()<.28&&Df(e,r(b+(t()-.5)*(M-1.2),l*(_-.42),w+.15),t),(E==="shop"||E==="konbini"||E==="machiya")&&t()<.3)for(let U=0;U<1+t()*3;U++)Gp(e,r(b-M/2+.8+U*.55,l*(_-.75),w+.15,Math.PI/2+.1),t);if(E==="house"&&t()<.6)for(let U=0;U<2+t()*3;U++)Nf(e,r(b+1+U*.5,l*(_-.3),w+.15),t);if(t()<.03)for(let U=0;U<3;U++)Wp(e,r(b+U*.9,l*(x+.35),w))}h+=M+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Ut(d).city<.7||Ut(d).mountain>.1||t()<.3||us(d,18)||Vf(d,15))continue;let x=c(d),p=r(d,l*(x+3.2+t.range(14,20)),a(d)+.1);ls(e,p,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(as),litP:.4})}if(Ut(n+30).city>.7&&Ut(n+30).mountain<.1&&t()<.65){let d=n+t()*kt;if(us(d,24)||Vf(d,20))continue;let x=r(d,l*t.range(55,150),a(d));ls(e,x,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(as),litP:.45})}}let y=Math.ceil(n/150),S=Math.floor((s-.01)/150);for(let l=y;l<=S;l++){let h=l*150;if(Jt(h)!=="city"||Ut(h).mountain>.1)continue;let d=c(h);yield*this.intersection(e,t,h,l,r,a,c,u,m,g,v),Ls(e,r(h-1,-(d+.4),a(h)+.15),"sign_blue",1),Ls(e,r(h-6,-(d+.4),a(h)+.15),"sign_stop",1,2.1,.75),Ff(e,r(h+7,d+.4,a(h)+.15),-1),l%3===0&&Ls(e,r(h+20,-(d+.4),a(h)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,o,a,c,u){for(let g of[-1,1]){for(let v=n+t()*4;v<s;v+=t.range(7.5,10)){if(Ut(v).sakura<.45||ei(v,30))continue;let y=c(v);On(e,o(v,g*(y+3.7),0,t()*6),"sakura",t,t.range(1.05,1.3)),t()<.45&&On(e,o(v+3,g*(y+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let v=n+(g>0?0:12);v<s;v+=24){if(Jt(v)!=="sakura"||ei(v,30))continue;let y=c(v);Na(e,r(v,g*(y+2.25),a(v)+.15)),cs(v,48)<24&&um(e,r(v+6,g*(y+3),u(v+6,g*(y+3))))}for(let v=n+t()*15;v<s;v+=t.range(14,24)){if(Jt(v)!=="sakura"||t()<.35||ei(v,45))continue;let y=c(v);ls(e,o(v,g*(y+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(as),litP:.45,fence:t()<.6?1.4:0})}}let m=Math.floor((n+kt/2)/480)*480+240;m>=n&&m<s&&Jt(m)==="sakura"&&!ei(m,60)&&zf(e,r(m,0,a(m),0,!1),c(m)+1.6,6.4)}placeCoast(e,t,n,s,r,o,a,c,u,f,m){for(let y=0;y<=20;y++){let S=n+y/20*kt;if(Ut(S).coast<.85||Ui(S,nn*1.25)){f.length&&f[f.length-1]!==null&&f.push(null);continue}let h=c(S),d=h+11,x=h+19,p=m(S,-d,Rs+.06),_=m(S,-x,Rs+.06);f.push([[p[0],p[1],p[2],cs(S,ss),0],[_[0],_[1],_[2],cs(S,ss),1]])}let g=f.indexOf(null);g>=0&&(f.length=g),f.length<2&&(f.length=0);for(let y=n+t()*6;y<s;y+=t.range(5,9)){if(Jt(y)!=="coast"||Ui(y,nn+6))continue;let S=c(y);t()<.7&&On(e,o(y,S+t.range(3.5,26),0,t()*6,!1),"pine",t,t.range(.9,1.3)),t()<.2&&On(e,o(y+2,-(S+t.range(3.5,7)),0,t()*6,!1),"pine",t,t.range(.8,1.1))}for(let y=n+4;y<s;y+=t.range(18,30)){if(Jt(y)!=="coast"||t()<.4||Ui(y,nn*1.4))continue;let S=c(y),l=3+Math.floor(t()*5);for(let h=0;h<l;h++){let d=-(S+t.range(12,17)),x=y+t.range(-3,3);fm(e,r(x,d,Math.max(u(x,d),Rs-.4)+t.range(-.2,.4),t()*6),t,t.range(.9,1.2))}}for(let y=n+12;y<s;y+=48){if(Jt(y)!=="coast"||Ui(y,nn+4))continue;let S=c(y);Lf(e,o(y,S+1),t)}if(Jt(n+30)==="coast"&&t()<.5){let y=n+t()*kt,S=c(y);Ui(y,nn+25)||ls(e,o(y,S+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(as),litP:.5,fence:0})}if(Jt(n+30)==="coast"&&t()<.55){let y=n+t()*kt;pm(e,r(y,-(c(y)+t.range(45,220)),Rs-.25,t()*6,!1),t)}let v=Math.floor((n+kt/2)/1500)*1500+700;v>=n&&v<s&&Jt(v)==="coast"&&!Ui(v,nn*1.6)&&dm(e,r(v,-(c(v)+75),Rs-1,0,!1))}*placeCountry(e,t,n,s,r,o,a,c,u){for(let y of[-1,1]){yield;for(let S=n+t()*20;S<s;S+=t.range(20,40)){if(Jt(S)!=="country"||t()<.55||us(S,16)||ei(S,48))continue;let l=y*t.range(16,95),h=o(S,l);ls(e,h,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(as),litP:.5,fence:0});for(let d=0;d<2+t()*3;d++){let x=l+y*t.range(6,14),p=S+t.range(-8,8);On(e,o(p,x,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let S=n+t()*8;S<s;S+=t.range(5,9)){if(Jt(S)!=="country"||us(S,7)||ei(S,36))continue;let l=y*t.range(140,210);On(e,o(S,l,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!us(S+2,8)&&!ei(S+2,34)&&On(e,o(S+2,y*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let f=Math.floor((n+kt/2)/600)*600+300;if(f>=n&&f<s&&Jt(f)==="country"&&!ei(f,40)){let y=c(f);hm(e,r(f,-(y+1.6),a(f)-.08),t)}let m=Math.floor((n+kt/2)/700)*700+120;if(m>=n&&m<s&&Jt(m)==="country"&&!ei(m,40)){let y=c(m);Df(e,r(m,-(y+.95),a(m)-.08),t),Lf(e,r(m+2,-(y+.8),a(m)-.08),t)}let g=Math.floor((n+kt/2)/900)*900+450;if(g>=n&&g<s&&Jt(g)==="country"&&!ei(g,40)){let y=c(g);mm(e,o(g,y+5),t)}let v=Math.floor((n+kt/2)/380)*380+190;if(v>=n&&v<s&&Jt(v)==="country"&&!ei(v,40)&&!us(v,30)){let y=c(v),S=(Xn(Math.round(v),5)<.5?-1:1)*(y+2.75);lm(e,o(v,S,0))}for(let y=n;y<s;y+=30){if(Jt(y)!=="country")continue;let S=this.path.curv(y);if(Math.abs(S)>1/450&&t()<.5){let l=S>0?-1:1,h=c(y);Ff(e,o(y,l*(h+.75)),l>0?-1:1)}}}};var uo=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new Ae(e):e)),pe={zenith:new Ae,horizon:new Ae,sunCol:new Ae,sunI:1,hemiSky:new Ae,hemiGround:new Ae,hemiI:1,fog:new Ae,cLit:new Ae,cShade:new Ae,cRim:new Ae,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new k,moonDir:new k,lightDir:new k,sunEl:0};function ym(i){let e=0;for(;e<uo.length-2&&uo[e+1][0]<=i;)e++;let t=uo[e],n=uo[e+1],s=su(Xt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,a)=>a.copy(t[o]).lerp(n[o],s);r(1,pe.zenith),r(2,pe.horizon),r(3,pe.sunCol),pe.sunI=Bt(t[4],n[4],s),r(5,pe.hemiSky),r(6,pe.hemiGround),pe.hemiI=Bt(t[7],n[7],s),r(8,pe.fog),r(9,pe.cLit),r(10,pe.cShade),r(11,pe.cRim),pe.night=Bt(t[12],n[12],s),pe.warm=Bt(t[13],n[13],s),pe.sunEl=Mm(i,pe.sunDir,pe.moonDir,pe.lightDir)}function Mm(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Xt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var jy=new k,Qy=new k;function Xf(i,e){return Mm((i%1+1)%1,jy,Qy,e),e}var _m={zenith:[new Ae("#7b8594"),new Ae("#141a28")],horizon:[new Ae("#b5bcc6"),new Ae("#283042")],fog:[new Ae("#a8b0ba"),new Ae("#232b3c")],hemiSky:[new Ae("#aab3bf"),new Ae("#3c4866")],hemiGround:[new Ae("#8b8983"),new Ae("#1e2030")],cLit:[new Ae("#d0d5dc"),new Ae("#2c3240")],cShade:[new Ae("#7c8593"),new Ae("#151922")]},Wf=new Ae;function bm(i,e){if(pe.overcast=i,pe.rain=e,pe.bright=(1-pe.night)*(1-pe.warm)*(1-i),i<=.001)return;let t=pe.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Wf.copy(_m[n][0]).lerp(_m[n][1],t),pe[n].lerp(Wf,i*(n==="cLit"||n==="cShade"?.75:.85));pe.sunI*=1-.82*i,pe.warm*=1-i,pe.cRim.multiplyScalar(1-i),pe.sunCol.lerp(Wf.setRGB(.85,.87,.9),i*.6)}function Sm(){let i=new Mt({side:Ln,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:pe.zenith},uHorizon:{value:pe.horizon},uSunDir:{value:pe.sunDir},uMoonDir:{value:pe.moonDir},uNoiseTex:We.uNoiseTex,uSunCol:{value:pe.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new Ae},uOvercast:{value:0},uDeckLit:{value:new Ae},uDeckDark:{value:new Ae},uMilky:{value:0},uMetA:{value:new k(0,1,0)},uMetB:{value:new k(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${vi}
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
      }`}),e=new vt(new ca(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function eM(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let x=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+x*.5,(i()-.5)*.2,x])}let a=e?6:2,c=s*.82,u=.1+.09;for(let d=0;d<a;d++){let x=Math.max(1,Math.round(c/.11));for(let p=0;p<x;p++){let _=(x===1?0:p/(x-1)-.5)*c+(i()-.5)*.05+r*d;t.push([_,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,c*=e?.8:.66}let f=t.slice();for(let d of f){if(t.length>84)break;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let _=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,T])}}let m=t.slice(f.length);for(let d of f){if(d[1]<.1+.12||t.length>104)continue;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let _=.3+i()*2.5,T=d[3]*(.3+i()*.4),E=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(_)*T,d[1]+Math.sin(_)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-E*.6,E])}}for(let d of m){if(t.length>124)break;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let _=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.85,d[1]+Math.sin(_)*d[3]*.85,d[2]+.02,T])}}let g=t.slice(0,128),v=1e9,y=-1e9,S=-1e9;for(let d of g)v=Math.min(v,d[0]-d[3]*1.12),y=Math.max(y,d[0]+d[3]*1.12),S=Math.max(S,d[1]+d[3]*1.12);let l=Math.min(1,.92/(y-v),(.95-.1)/(S-.1)),h=(v+y)/2;for(let d of g)d[0]=(d[0]-h)*l,d[1]=.1+(d[1]-.1)*l,d[3]*=l;return g}function Tm(i){let t={value:Array.from({length:128},()=>new yt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new Mt({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:We.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${vi}
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
      }`,depthTest:!1,depthWrite:!1,blending:Gn}),r=new zt(1024,1024,{generateMipmaps:!0,minFilter:Wn,magFilter:Wt,depthBuffer:!1}),o=new Mt({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:We.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${vi}
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
      }`,depthTest:!1,depthWrite:!1,blending:Gn}),a=new vt(new rn(1,1),s),c=new Ws,u=new ns;c.add(a);let f=new zt(1024*2,1024*2,{generateMipmaps:!0,minFilter:Wn,magFilter:Wt}),m=i.getRenderTarget(),g=i.autoClear,v=tn(99);i.setRenderTarget(f),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let y=[];for(let S=0;S<4;S++){let l=S%2===0,h=eM(v,l);h.forEach((d,x)=>t.value[x].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=h.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=S*13.7,a.material=s,i.setRenderTarget(r),i.render(c,u),a.material=o,f.viewport.set(S%2*1024,Math.floor(S/2)*1024,1024,1024),i.setRenderTarget(f),i.render(c,u),y.push({cell:[S%2,Math.floor(S/2)],tall:l})}return f.viewport.set(0,0,1024*2,1024*2),i.autoClear=g,i.setRenderTarget(m),s.dispose(),o.dispose(),r.dispose(),a.geometry.dispose(),{tex:f.texture,kinds:y,rt:f}}function Em(i){let e=tn(5),t=22,n=[],s=new rn(1,1);s.translate(0,.5,0);let r=new Vn(new Float32Array(t*4),4),o=new Vn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let a=new Mt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new Ae},uShade:{value:pe.cShade},uRim:{value:pe.cRim},uHaze:{value:pe.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new ts(s,a,t);c.frustumCulled=!1,c.renderOrder=-5;for(let y=0;y<t;y++){let S=y<12,l=i.kinds[(y*3+(S?0:1))%i.kinds.length],h=S?l.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:y/t*Math.PI*2+e.range(-.15,.15),d:S?e.range(2600,3400):e.range(1300,2200),base:S?e.range(-60,60):e.range(260,700),size:h,cell:l.cell,haze:S?.45:.18})}let u=new nt,f=new Tn,m=new k,g=new k,v=new k(0,1,0);return{group:c,update(y,S){let l=Math.atan2(pe.lightDir.x,pe.lightDir.z);for(let d of n)d.phi+=S*1.2/d.d;n.slice().sort((d,x)=>x.d-d.d).forEach((d,x)=>{m.set(y.x+Math.sin(d.phi)*d.d,y.y+d.base,y.z+Math.cos(d.phi)*d.d),f.setFromAxisAngle(v,d.phi+Math.PI),g.set(d.size,d.size,1),u.compose(m,f,g),c.setMatrixAt(x,u);let p=l-d.phi;p=Math.atan2(Math.sin(p),Math.cos(p));let _=Math.max(0,Math.min(1,(p+.35)/.7)),T=1-_*_*(3-2*_);r.setXYZW(x,d.cell[0],d.cell[1],T,d.haze),o.setX(x,.35+.9*Math.pow(Math.max(Math.cos(p),0),3)*(.4+pe.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.uniforms.uOpacity.value=(1-pe.night*.35)*(1-pe.overcast*.55)*(1-.85*pe.rain),a.uniforms.uLit.value.copy(pe.cLit).multiplyScalar(1+.35*pe.bright)}}}function wm(){let i=new Kt;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],a=[];for(let m=0;m<=360;m++){let g=m/360*Math.PI*2,v=Math.sin(g)*t.R,y=Math.cos(g)*t.R,S=ru(m/360*t.k*4,40+n*9),l=Math.pow(Math.max(0,S-.18)/.82,1.6),h=t.h*(.12+l);if(r.push(v,-60,y,v,-60+h,y),o.push(0,m/360,1,m/360),m<360){let d=m*2;a.push(d,d+1,d+2,d+1,d+3,d+2)}}let c=new bt;c.setAttribute("position",new Ye(r,3)),c.setAttribute("hf",new Ye(o,2)),c.setIndex(a);let u=new Mt({side:En,fog:!1,uniforms:{uCol:{value:new Ae(t.col)},uHaze:{value:pe.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:We.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${vi}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),f=new vt(c,u);f.frustumCulled=!1,f.renderOrder=999,i.add(f)}),{group:i,update(t,n=0){i.position.set(t.x,0,t.z);for(let r of i.children)r.material.uniforms.uSnow.value=n;let s=(.35+.65*(1-pe.night))*(1-.35*pe.overcast);for(let r of i.children)r.material.uniforms.uLight.value=s}}}var ho={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function Am(i){let e=i.get("weather"),t={mode:ho[e]?e:"auto",kind:ho[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return ho[e]&&(t.ov=ho[e][0],t.rain=ho[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let a=Math.random();t.kind=t.kind==="clear"?a<.5?"cloudy":a<.72?"rain":"clear":t.kind==="cloudy"?a<.5?"clear":a<.85?"rain":"cloudy":a<.55?"cloudy":"clear"}let[s,r]=ho[t.kind];t.ov+=Xt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=Xt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var xi={uHeadPos:{value:new k},uHeadDir:{value:new k(0,0,1)},uHeadI:{value:0},uLampW:{value:[new yt(0,-1e3,0,0),new yt(0,-1e3,0,0)]},uLampCol:{value:new Ae(1,.8,.52)}},Su=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function Rm(){let e=new k(42,22,42),t=new rn(1,1),n=new Vi;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let a=0;a<2400*4;a++)s[a]=Math.random();n.setAttribute("aOff",new Vn(s,4)),n.instanceCount=2400;let r=new Mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uAmt:{value:0},uBox:{value:e},uCol:{value:new Ae(1,1,1)},...xi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Su}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new vt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,f){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*f,.33+.67*f,.42+.58*f)}}}function Cm(){let e=new k(46,24,46),t=new rn(1,1);t.translate(0,.5,0);let n=new Vi;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let a=0;a<2600;a++)s[a*4]=Math.random(),s[a*4+1]=Math.random(),s[a*4+2]=Math.random(),s[a*4+3]=Math.random();n.setAttribute("aOff",new Vn(s,4)),n.instanceCount=2600;let r=new Mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uRain:{value:0},uBox:{value:e},uCol:{value:new Ae(.8,.85,.95)},...xi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Su}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new vt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,f){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*f,.12+.83*f,.16+.84*f)}}}var qn=64,qf=[2.2,1.3,2.6],tM=[-2.4,.35,-1.6];function Pm(){let i=new Float32Array(qn*3),e=new Float32Array(qn*3),t=new Float32Array(qn*4),n=new Float32Array(qn),s=new Uint8Array(qn),r=new Float32Array(qn);for(let x=0;x<qn;x++)t[x*4]=t[x*4+1]=1;let o=new rn(1,1),a=new Vi;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),a.instanceCount=0;let c=new Float32Array(qn*4),u=new Float32Array(qn*4),f={uP:{value:c},uC:{value:u},uNoiseTex:We.uNoiseTex,uAmb:{value:new Ae},uSun:{value:new Ae},uTail:{value:new yt},uCam:{value:new k},...xi},m=new Mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:f,vertexShader:`
      uniform vec4 uP[${qn}], uC[${qn}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${Su}
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
      }`}),g=new vt(a,m);g.frustumCulled=!1,g.renderOrder=4,g.visible=!1;let v=0,y=0,S=0,l=0,h=!1;function d(x,p,_,T,E,M,b,w,R,P,I){let C=v;v=(v+1)%qn,i[C*3]=p,i[C*3+1]=_,i[C*3+2]=T,e[C*3]=E,e[C*3+1]=M,e[C*3+2]=b,t[C*4]=0,t[C*4+1]=w,t[C*4+2]=R,t[C*4+3]=P,n[C]=I,s[C]=x,r[C]=Math.random()}return{mesh:g,update(x,p,_,T,E,M,b,w,R,P,I){if(!I){if(h){for(let Z=0;Z<qn;Z++)t[Z*4]=t[Z*4+1];h=!1}g.visible=!1;return}let C=p.position,L=p.rotation.y,U=Math.cos(L),z=Math.sin(L),G=z*_,D=U*_,H=Math.min(1,Math.max(0,(_-2)/14)),O=E>.3?2:0,K=O?E:T;for(y+=24*K*H*x;y>=1;){y-=1;let Z=(l^=1)?1:-1,j=Z*.67,ue=-1.28-Math.random()*.2,Pe=Math.random(),Se=Math.random(),Ge=1.6+1.6*Pe,$e=O?.5+.7*Se:.9+1*Se,ke=Z*(.3+.6*Math.random());d(O,C.x+j*U+ue*z,C.y+.12,C.z-j*z+ue*U,G*.55-z*Ge+ke*U,$e,D*.55-U*Ge-ke*z,O?.45+.3*Pe:.55+.35*Pe,.2+.1*Se,O?.7+.35*Se:.8+.4*Se,.5*(.5+.5*H)*Math.min(1,K*1.5))}for(S+=(5+4*H)*M*x;S>=1;){S-=1;let Z=Math.random();d(1,C.x-.42*U-1.78*z,C.y+.26,C.z+.42*z-1.78*U,G*.5-z*.8,.25+.2*Z,D*.5-U*.8,1.3+.6*Z,.14,.8+.4*Math.random(),.32*Math.min(1,M*1.5))}let oe=0,Ve=Math.exp(-qf[0]*x),Ue=Math.exp(-qf[1]*x),xe=Math.exp(-qf[2]*x);for(let Z=0;Z<qn;Z++){let j=Z*4;if(t[j]>=t[j+1])continue;let ue=t[j]+=x,Pe=t[j+1];if(ue>=Pe)continue;let Se=s[Z],Ge=Se===0?Ve:Se===1?Ue:xe,$e=Z*3,ke=i[$e]-P.x,ut=i[$e+1]-P.y,te=i[$e+2]-P.z;if(ke*ke+ut*ut+te*te<20.25){t[j]=Pe;continue}e[$e]*=Ge,e[$e+1]=e[$e+1]*Ge+tM[Se]*x,e[$e+2]*=Ge,i[$e]+=e[$e]*x,i[$e+1]=Math.max(C.y+.05,i[$e+1]+e[$e+1]*x),i[$e+2]+=e[$e+2]*x;let ye=ue/Pe,Te=oe*4;c[Te]=i[$e],c[Te+1]=i[$e+1],c[Te+2]=i[$e+2],c[Te+3]=t[j+2]+(t[j+3]-t[j+2])*Math.sqrt(ye),u[Te]=n[Z]*Math.min(1,ye*6)*(1-ye)*(1-ye),u[Te+1]=Se,u[Te+2]=r[Z],oe++}h=oe>0,g.visible=h,a.instanceCount=oe,h&&(f.uAmb.value.copy(b),f.uSun.value.copy(w),f.uTail.value.copy(R),f.uCam.value.copy(P))},shift(x,p){for(let _=0;_<qn;_++)i[_*3]-=x,i[_*3+2]-=p}}}var lr=24,nM=55,iM=12;function Im(){let i=[],e=new Float32Array(lr*2*2),t=new Float32Array(lr*2*3);for(let u=0;u<lr;u++)if(e.set([u,-1,u,1],u*4),u<lr-1){let f=u*2;i.push(f,f+1,f+2,f+1,f+3,f+2)}let n=new bt;n.setAttribute("position",new Gt(t,3)),n.setAttribute("aI",new Gt(e,2)),n.setIndex(i);let s=new Float32Array(lr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new Ae},uTime:{value:0},uNoiseTex:We.uNoiseTex},o=new Mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${lr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${vi}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),a=new vt(n,o);a.frustumCulled=!1,a.renderOrder=1,a.visible=!1;let c={};return{mesh:a,update(u,f,m,g,v,y,S,l){if(a.visible=y>.01,!!a.visible){for(let h=0;h<lr;h++)u.at(f+nM+h*iM,c),s[h*4]=c.x-m,s[h*4+1]=c.y,s[h*4+2]=c.z-g,s[h*4+3]=c.h;r.uW.value=v*.85,r.uHot.value=y,r.uTime.value=S,r.uSky.value.copy(l)}}}}var fo=1.6;function Lm(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,a=t?16:14,c=[4,Math.round(s*.4),Math.round(s*.65),s].filter((I,C,L)=>!C||I>L[C-1]),u=[s,Math.round((s+r)/2),r],f=(I,C)=>{let L=new Vi;return L.setAttribute("position",new Ye(I,3)),L.setIndex(C),L},m=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],g=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],v=new Float32Array(Ps*4),y=new Float32Array(Ps),S={uG:{value:v},uGM:{value:y},uGP:{value:new yt(0,1/fo,3.1,0)},uGQ:{value:new yt(0,1.05,3,0)},uRingD:{value:new yt(s,r,0,0)}},l=[],h=(I,C,L)=>{let U={uRing:{value:new yt(0,0,L?2*n:n,L)},uRingC:{value:new yt(0,0,0,0)}},z=f(...L?g:m);z.instanceCount=0;let G=new vt(z,Ep(U,S));G.frustumCulled=!1,G.castShadow=!1,G.receiveShadow=!1,G.visible=!1,l.push({mesh:G,u:U,dA:I,dB:C,size:L?2*n:n,W:L?a:o,last:C===s||C===r})};for(let I=0;I<c.length-1;I++)h(c[I],c[I+1],0);for(let I=0;I<u.length-1;I++)h(u[I],u[I+1],1);let d=new Int32Array(64).fill(-2147483648),x=new Float32Array(64),p=new Uint8Array(64),_=I=>{let C=I&63;if(d[C]!==I){d[C]=I;let L=I*fo,U=Cs(L),z=mi(L),G=Ut(L).country,D=Math.min(1,Math.max(0,(G-.97)/.025))*(U?Math.min(1,Math.max(0,(Math.abs(L-U.s)-13)/7)):1)*(z?Math.min(1,Math.max(0,(Math.abs(L-z.s)-38)/10)):1);x[C]=D>0?3+4*Math.round(D*15):0,p[C]=G>0?1:0}return C},T=I=>x[_(I)],E=I=>p[_(I)],M={},b=NaN,w=NaN,R=NaN,P=0;return{meshes:l.map(I=>I.mesh),hide(){for(let I=0;I<l.length;I++)l[I].mesh.visible=!1},warm(I){for(let C of l)C.mesh.visible=I,I&&(C.u.uRing.value.y=1,C.u.uRingC.value.set(1,1,C.W,0),C.mesh.geometry.instanceCount=2)},update(I,C,L,U,z,G,D){let H=Math.floor((C-3)/fo);if(!E(H)&&!E(H+Ps-1))P=0;else{if(H!==b||U!==w||z!==R){b=H,w=U,R=z,P=0;for(let O=0;O<Ps;O++)I.at((H+O)*fo,M),v[O*4]=M.x-U,v[O*4+1]=M.y,v[O*4+2]=M.z-z,v[O*4+3]=M.h,P|=y[O]=T(H+O)}S.uGP.value.set(H*fo,1/fo,G,C),S.uGQ.value.set(L,D,3,0)}for(let O=0;O<l.length;O++){let K=l[O];if(!P){K.mesh.visible=!1;continue}let oe=Math.floor((C+K.dA)/K.size),Ve=Math.floor((C+K.dB)/K.size)+(K.last?1:0),Ue=D*K.dB+3,xe=G+2.6,Z=Math.min(K.W,Math.max(0,Ue-(xe+L))),j=Math.min(K.W,Math.max(0,Ue-(xe-L))),ue=Z>0?Math.ceil(Z/K.size)+1:0,Pe=j>0?Math.ceil(j/K.size)+1:0;K.u.uRing.value.x=oe,K.u.uRing.value.y=Ve-oe,K.u.uRingC.value.set(ue,Pe,K.W,0),K.mesh.geometry.instanceCount=(Ve-oe)*(ue+Pe),K.mesh.visible=K.mesh.geometry.instanceCount>0}}}}var po=72;function sM(){let i=[],e=[],t=(s,r,o,a,c,u)=>{i.push(...s,...r,...o),e.push(a,c,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new bt;return n.setAttribute("position",new Ye(i,3)),n.setAttribute("aWing",new Ye(e,1)),n}function Dm(){let i=sM(),e=new Vn(new Float32Array(po*3),3),t=new Vn(new Float32Array(po*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new Mt({side:En,fog:!1,uniforms:{uTime:{value:0},uFog:{value:pe.fog},uFogD:{value:.002},uCam:{value:new k}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new ts(i,n,po);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},a=new nt,c=new Tn,u=new Kn(0,0,0,"YXZ"),f=new k,m=new k,g=()=>r.reduce((S,l)=>S+l.birds.length,0);function v(S,l,h,d){let x=S==="small"?6+Math.floor(Math.random()*7):S==="crow"?3+Math.floor(Math.random()*5):4;if(g()+x>po)return;let p=45+Math.random()*85,_=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,E=new k().copy(l).addScaledVector(h,p).addScaledVector(d,_-T*75);E.y=l.y+(S==="crow"?18+Math.random()*24:10+Math.random()*18);let M=S==="small"?11+Math.random()*4:8+Math.random()*3,b=new k().copy(d).multiplyScalar(T*M).addScaledVector(h,(Math.random()-.3)*M*.6),w=S==="small"?.8:1.45,R=Array.from({length:x},(P,I)=>({off:new k((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:S==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:S,c:E,vel:b,birds:R,size:w,life:60})}function y(S,l,h,d){if(r.some(_=>_.kind==="gull")||g()+4>po)return;let x=new k().copy(S).addScaledVector(l,70).addScaledVector(h,-d*45);x.y=S.y+18;let p=Array.from({length:4},(_,T)=>({off:new k,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:x,vel:new k,birds:p,size:1.25,life:1e9})}return{mesh:s,update(S,l,h,d,x,p,_,T,E){n.uniforms.uTime.value=l,n.uniforms.uCam.value.copy(h);let M=_>.35&&T<.3,b=pe.warm>.25&&pe.sunEl<.6&&_>.2;M&&(o.small-=S)<0&&(o.small=22+Math.random()*35,p.coast<.6&&v("small",h,d,x)),(b||M&&p.city+p.country>.6&&Math.random()<4e-4)&&(o.crow-=S)<0&&(o.crow=b?14+Math.random()*18:60,v("crow",h,d,x)),p.coast>.6&&M&&y(h,d,x,1);let w=[.1+.08*_,.11+.09*_,.15+.1*_],R=0;for(let P=r.length-1;P>=0;P--){let I=r[P];if(I.kind==="gull"?(I.c.lerp(f.copy(E).addScaledVector(d,60).addScaledVector(x,-42).setY(E.y+16),Math.min(1,S*.25)),(p.coast<.4||!M)&&(I.life=Math.min(I.life,8),I.c.y+=S*6)):I.c.addScaledVector(I.vel,S),I.life-=S,I.life<0||I.kind!=="gull"&&I.c.distanceTo(h)>300){r.splice(P,1);continue}for(let C of I.birds){if(R>=po)break;let L,U,z,G;I.kind==="gull"?(C.w+=S*(14/C.r),L=I.c.x+Math.cos(C.w)*C.r,z=I.c.z+Math.sin(C.w)*C.r,U=I.c.y+C.h+Math.sin(l*.4+C.ph)*2,G=Math.atan2(-Math.sin(C.w),Math.cos(C.w))):(L=I.c.x+C.off.x+Math.sin(l*.7+C.ph)*1.2,U=I.c.y+C.off.y+Math.sin(l*1.1+C.ph)*.6,z=I.c.z+C.off.z,G=Math.atan2(I.vel.x,I.vel.z)),u.set(0,G,Math.sin(l+C.ph)*.15),c.setFromEuler(u),m.setScalar(I.size),a.compose(f.set(L,U,z),c,m),s.setMatrixAt(R,a);let D=I.kind==="gull"?[.92*(.5+.5*_),.93*(.5+.5*_),.95*(.5+.5*_)]:I.kind==="crow"?[.05,.05,.07]:w;e.setXYZ(R,D[0],D[1],D[2]),t.setXY(R,C.fq,C.ph),R++}}s.count=R,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(S){n.uniforms.uFogD.value=S},shift(S,l){for(let h of r)h.c.x-=S,h.c.z-=l}}}function Nm(){let i=new Mt({fog:!1,uniforms:{uNoiseTex:We.uNoiseTex,uTime:{value:0},uCam:{value:new k},uSunDir:{value:pe.lightDir},uSunCol:{value:pe.sunCol},uHorizon:{value:pe.horizon},uZenith:{value:pe.zenith},uFog:{value:pe.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec3 vW;
      ${vi}
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
      }`}),e=new vt(new rn(14e3,14e3),i);return e.rotation.x=-Math.PI/2,e.position.y=Rs,e.renderOrder=998,e.frustumCulled=!1,{mesh:e,update(t,n,s,r=1){e.position.x=t.x,e.position.z=t.z,i.uniforms.uTime.value=n,i.uniforms.uCam.value.copy(t),i.uniforms.uNight.value=pe.night,i.uniforms.uBright.value=pe.bright,i.uniforms.uFogD.value=s,i.uniforms.uVis.value=r,i.uniforms.uSpecK.value=1-pe.overcast*.85}}}function Um(){return new Mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uLight:{value:new Ae(1,1,1)},uNoiseTex:We.uNoiseTex},vertexShader:"attribute vec2 su; varying vec2 vSU; void main(){ vSU = su; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uLight; varying vec2 vSU;
      ${vi}
      void main(){
        float x = vSU.y;                       // 0 = landward edge \u2026 1 = seaward edge
        float wave = fract(x * 1.5 - uTime * 0.12 + vnoise(vec2(vSU.x * 0.08, uTime * 0.1)) * 0.6);
        float line = smoothstep(0.0, 0.08, wave) * (1.0 - smoothstep(0.1, 0.35, wave));
        float a = line * (1.0 - x) * 0.85 + (1.0 - smoothstep(0.0, 0.25, x)) * 0.5;
        a *= 0.6 + 0.4 * vnoise(vec2(vSU.x * 0.6, x * 4.0 + uTime * 0.3));
        gl_FragColor = vec4(uLight, clamp(a, 0.0, 1.0));
      }`})}function Fm(){return new Mt({fog:!1,uniforms:{uNoiseTex:We.uNoiseTex,uTime:{value:0},uSunDir:{value:pe.lightDir},uSunCol:{value:pe.sunCol},uHorizon:{value:pe.horizon},uZenith:{value:pe.zenith},uFog:{value:pe.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${vi}
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
      }`})}var Oa=new k;function _i(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Oa.copy(e),Oa[n]=0,Oa.normalize();let u=.5*o/(o+a),f=1-Oa.angleTo(i)/c;return Math.sign(Oa[t])===1?f*u:a/(o+a)+u+u*(1-f)}var Rn=class i extends qt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new k,u=new k,f=new k(e,t,n).divideScalar(2).subScalar(r),m=this.attributes.position.array,g=this.attributes.normal.array,v=this.attributes.uv.array,y=m.length/6,S=new k,l=.5/o;for(let h=0,d=0;h<m.length;h+=3,d+=2)switch(c.fromArray(m,h),u.copy(c),u.x-=Math.sign(u.x)*l,u.y-=Math.sign(u.y)*l,u.z-=Math.sign(u.z)*l,u.normalize(),m[h+0]=f.x*Math.sign(c.x)+u.x*r,m[h+1]=f.y*Math.sign(c.y)+u.y*r,m[h+2]=f.z*Math.sign(c.z)+u.z*r,g[h+0]=u.x,g[h+1]=u.y,g[h+2]=u.z,Math.floor(h/y)){case 0:S.set(1,0,0),v[d+0]=_i(S,u,"z","y",r,n),v[d+1]=1-_i(S,u,"y","z",r,t);break;case 1:S.set(-1,0,0),v[d+0]=1-_i(S,u,"z","y",r,n),v[d+1]=1-_i(S,u,"y","z",r,t);break;case 2:S.set(0,1,0),v[d+0]=1-_i(S,u,"x","z",r,e),v[d+1]=_i(S,u,"z","x",r,n);break;case 3:S.set(0,-1,0),v[d+0]=1-_i(S,u,"x","z",r,e),v[d+1]=1-_i(S,u,"z","x",r,n);break;case 4:S.set(0,0,1),v[d+0]=1-_i(S,u,"x","y",r,e),v[d+1]=1-_i(S,u,"y","x",r,t);break;case 5:S.set(0,0,-1),v[d+0]=_i(S,u,"x","y",r,e),v[d+1]=1-_i(S,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Yf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new bt,u=0;for(let f=0;f<i.length;++f){let m=i[f],g=0;if(t!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let v in m.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(m.attributes[v]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let v in m.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[v]===void 0&&(o[v]=[]),o[v].push(m.morphAttributes[v])}if(e){let v;if(t)v=m.index.count;else if(m.attributes.position!==void 0)v=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,v,f),u+=v}}if(t){let f=0,m=[];for(let g=0;g<i.length;++g){let v=i[g].index;for(let y=0;y<v.count;++y)m.push(v.getX(y)+f);f+=i[g].attributes.position.count}c.setIndex(m)}for(let f in r){let m=Bm(r[f]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,m)}for(let f in o){let m=o[f][0].length;if(m!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let g=0;g<m;++g){let v=[];for(let S=0;S<o[f].length;++S)v.push(o[f][S][g]);let y=Bm(v);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(y)}}}return c}function Bm(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let f=i[u];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}let o=new e(r),a=new Gt(o,t,n),c=0;for(let u=0;u<i.length;++u){let f=i[u];if(f.isInterleavedBufferAttribute){let m=c/t;for(let g=0,v=f.count;g<v;g++)for(let y=0;y<t;y++){let S=f.getComponent(g,y);a.setComponent(g+m,y,S)}}else o.set(f.array,c);c+=f.count*t}return s!==void 0&&(a.gpuType=s),a}function rM(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new Jn(i);return n.colorSpace=Qt,n}var Zf=4;function oM(){let t=document.createElement("canvas");t.width=128*Zf,t.height=128;let n=t.getContext("2d"),s=(o,a,c,u,f)=>{n.beginPath(),n.moveTo(o+f,a),n.arcTo(o+c,a,o+c,a+u,f),n.arcTo(o+c,a+u,o,a+u,f),n.arcTo(o,a+u,o,a,f),n.arcTo(o,a,o+c,a,f),n.closePath(),n.fill()};for(let o=0;o<Zf;o++){let a=o*128,c=n.createLinearGradient(0,0,0,128);c.addColorStop(0,"#9fbfe6"),c.addColorStop(.45,"#4a6690"),c.addColorStop(1,"#1d2638"),n.fillStyle=c,n.fillRect(a,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(a+14,84,30,50,9),s(a+84,84,30,50,9),n.fillRect(a+6,112,116,16),s(a+52,92,24,40,7)),o===2&&(s(a+62,66,44,70,12),n.fillRect(a+50,118,70,10)),o===3&&(s(a+70,78,40,60,11),n.fillRect(a+56,120,64,8)),n.save(),n.beginPath(),n.rect(a,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(a+40,0),n.lineTo(a+68,0),n.lineTo(a+20,128),n.lineTo(a-8,128),n.fill(),n.restore()}let r=new Jn(t);return r.colorSpace=Qt,r}function Om(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/Zf)}return i}function zm(){let i=new Kt,e=new Kt,t=new Kt;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new yt,new yt],s=new Ae(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=Tf(new on({color:"#ffffff",vertexColors:!0,gradientMap:La}),.85,.06,"paint-l",r),a=(te,ye)=>Object.assign(new Ae(te),{gloss:ye}),c=a("#9fd8c8",1),u=a("#eeece4",.6),f=a("#2a2c33",.35),m=a("#1b1c20",.04),g=a("#c8ccd2",.8),v=a("#d4d8de",1.3),y=(te,ye)=>{let Te=te.attributes.position.count,Q=new Float32Array(Te*4);for(let ne=0;ne<Te;ne++)Q.set([ye.r,ye.g,ye.b,ye.gloss],ne*4);return te.setAttribute("color",new Ye(Q,4)),te},S=Tf(new on({color:"#ffffff",map:oM(),gradientMap:Qn}),1.2,.08,"glass-l",r),l=new on({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:Qn}),h=new on({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:Qn}),d=new on({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:Qn}),x=new on({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:Qn}),p=new on({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:Qn}),_=new cn({map:rM()}),T=new Map,E=[],M=!1,b=new nt,w=new Kn,R=new Tn,P=new k(1,1,1),I=(te,ye,Te,Q,ne,ce=0,re=0,B=0)=>{let ve=te.index?te.toNonIndexed():te;if(ye.isColor&&(y(ve,ye),ye=o),w.set(ce,re,B),R.setFromEuler(w),b.compose(new k(Te,Q,ne),R,P),ve.applyMatrix4(b),M){E.push(ve);return}T.has(ye)||T.set(ye,[]),T.get(ye).push(ve)},C=a("#16171b",0),L=a("#2b3134",.15),U=a("#b9bfc6",.9),z=a("#4d5258",.4),G=a("#9a1c22",.6),D=1.7,H=.745,O=.3,K=(te,ye,Te)=>{let Q=Math.min(1,Math.max(0,(Te-te)/(ye-te)));return Q*Q*(3-2*Q)},oe=te=>te<.8?1.8:te<1.22?1.8-.6*K(.8,1.22,te):1.2-.1*((te-1.22)/(D-1.22))**2,Ve=te=>1-.085*K(1.15,1.8,te),Ue=(te,ye)=>{let Te=H-ye,Q=O+ye*.6,ne=oe(te)-ye*(te<0?.4:1),ce=Math.max(.05,.1-ye*.5),re=Math.max(.06,(te<.8?.17:.13)-ye*.5),B=[[0,Q],[(Te-ce)*.5,Q],[Te-ce,Q]];for(let ee=1;ee<4;ee++){let F=-Math.PI/2+ee/8*Math.PI;B.push([Te-ce+ce*Math.cos(F),Q+ce+ce*Math.sin(F)])}for(let ee=0;ee<=8;ee++)B.push([Te,Q+ce+ee/8*(ne-re-Q-ce)]);for(let ee=1;ee<5;ee++){let F=ee/10*Math.PI;B.push([Te-re+re*Math.cos(F),ne-re+re*Math.sin(F)])}B.push([Te-re,ne],[(Te-re)*.5,ne],[0,ne]);let ve=B.map(([ee,F])=>[ee*Ve(F),F]);for(let ee=B.length-2;ee>0;ee--)ve.push([-ve[ee][0],ve[ee][1]]);return ve};{let te=[];for(let A=0;A<=6;A++){let W=A/6*Math.PI/2;te.push([-D+.2*(1-Math.cos(W)),.2*(1-Math.sin(W))])}for(let A=-D+.2+.12;A<.78;A+=.13)te.push([A,0]);for(let A=.8;A<1.225;A+=.06)te.push([A,0]);for(let A of[1.3,1.39])te.push([A,0]);for(let A=6;A>=0;A--){let W=A/6*Math.PI/2;te.push([D-.22*(1-Math.cos(W)),.22*(1-Math.sin(W))])}let Q=[],ne=[],ce=te.map(([A,W])=>Ue(A,W)),re=ce[0].length;ce.forEach((A,W)=>A.forEach(([Y,J])=>Q.push(Y,J,te[W][0])));for(let A=0;A<ce.length-1;A++)for(let W=0;W<re;W++){let Y=A*re+W,J=A*re+(W+1)%re,V=Y+re,me=J+re;ne.push(Y,J,V,J,me,V)}for(let[A,W]of[[0,-1],[ce.length-1,1]]){let Y=Q.length/3,J=ce[A];Q.push(0,(J[0][1]+J[re/2|0][1])/2,te[A][0]);for(let V=0;V<re;V++){let me=A*re+V,le=A*re+(V+1)%re;W<0?ne.push(Y,le,me):ne.push(Y,me,le)}}let B=new bt;B.setAttribute("position",new Ye(Q,3)),B.setIndex(ne),B.computeVertexNormals();{let A=B.attributes.normal,W=re*10+12;if(A.getX(W)<0){for(let Y=0;Y<ne.length;Y+=3){let J=ne[Y+1];ne[Y+1]=ne[Y+2],ne[Y+2]=J}B.setIndex(ne),B.computeVertexNormals()}}B.setAttribute("uv",new Ye(new Float32Array(Q.length/3*2),2));let ve=B.toNonIndexed(),ee=ve.attributes.position,F=new Float32Array(ee.count*4);for(let A=0;A<ee.count;A+=3){let W=(ee.getY(A)+ee.getY(A+1)+ee.getY(A+2))/3,Y=(ee.getZ(A)+ee.getZ(A+1)+ee.getZ(A+2))/3,J=W>1.665&&Y<.84&&Y>-1.52?u:c;for(let V=0;V<3;V++)F.set([J.r,J.g,J.b,J.gloss],(A+V)*4)}ve.setAttribute("color",new Ye(F,4)),I(ve,o,0,0,0)}I(new Rn(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let xe=(te,ye,Te,Q,ne)=>{let ce=new bt,re=[],B=[],ve=[],ee=[];for(let F=0;F<=Te;F++)for(let A=0;A<=ye;A++){let W=A/ye,Y=F/Te,J=te(W,Y);re.push(J[0]+J[3]*.004,J[1]+J[4]*.004,J[2]+J[5]*.004),B.push(J[3],J[4],J[5]),ve.push(W,Y)}for(let F=0;F<Te;F++)for(let A=0;A<ye;A++){let W=F*(ye+1)+A,Y=W+1,J=W+ye+1,V=J+1;ee.push(W,Y,V,W,V,J)}ce.setAttribute("position",new Ye(re,3)),ce.setAttribute("normal",new Ye(B,3)),ce.setAttribute("uv",new Ye(ve,2)),ce.setIndex(ee);{let F=new k().fromArray(re,0),A=new k().fromArray(re,3),W=new k().fromArray(re,(ye+1)*3),Y=new k().fromArray(B,0);if(A.sub(F).cross(W.sub(F)).dot(Y)<0){for(let J=0;J<ee.length;J+=3){let V=ee[J+1];ee[J+1]=ee[J+2],ee[J+2]=V}ce.setIndex(ee)}}return Om(ce,Q,ne)},Z=te=>{let Te=H*(Ve(te+.01)-Ve(te-.01))/.02,Q=Math.hypot(1,Te);return[1/Q,-Te/Q]},j=te=>{let ye=.8,Te=1.22;for(let Q=0;Q<24;Q++){let ne=(ye+Te)/2;oe(ne)>te?ye=ne:Te=ne}return ye};for(let te of[-1,1]){let ye=te<0,Te=(Q,ne,ce)=>I(xe((re,B)=>{let ve=1.21+B*.39,ee=te>0?ne(ve)+(Q(ve)-ne(ve))*re:Q(ve)+(ne(ve)-Q(ve))*re,[F,A]=Z(ve);return[te*H*Ve(ve),ve,ee,te*F,A,0]},1,6,ce,!1),S,0,0,0);Te(()=>.06,Q=>j(Q)-.07,2),Te(()=>-.72,()=>-.08,3),Te(()=>-1.42,()=>-.84,0),I(new qt(.012,.41,.07),f,te*.731,1.405,-.01,0,0,-te*.07),I(new qt(.014,.022,2.42),C,te*.748,1.2,-.26);for(let[Q,ne]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new qt(.008,1.17-ne,.012),L,te*.749,(ne+1.17)/2,Q);I(new qt(.02,.028,.13),L,te*.752,1.06,.06),I(new qt(.02,.028,.13),L,te*.752,1.06,-.2),I(new qt(.01,.022,.62),L,te*.749,1.155,-1.08);for(let Q of[1.12,-1.12])I(new Xs(.345,18,0,Math.PI),C,te*.749,.29,Q,0,te*Math.PI/2,0),I(new ua(.35,.024,5,18,Math.PI),f,te*.752,.29,Q,0,te*Math.PI/2,0);I(new Rn(.1,.12,.2,2,.04),c,te*.83,1.24,1.02),I(new qt(.07,.035,.05),f,te*.775,1.2,1.03),I(new Rn(.16,.4,.05,3,.075),v,te*.56,.95,-1.703),I(new Rn(.13,.37,.05,3,.062),l,te*.56,.95,-1.716),I(new Rn(.036,.27,.02,2,.016),h,te*.56,.95,-1.742),I(new Rn(.11,.06,.04,2,.02),x,te*.56,.69,-1.707)}{let te=new Gr,ye=.52,Te=1.15,Q=1.66,ne=.07;te.moveTo(-ye+ne,Te),te.lineTo(ye-ne,Te),te.absarc(ye-ne,Te+ne,ne,-Math.PI/2,0),te.lineTo(ye,Q-ne),te.absarc(ye-ne,Q-ne,ne,0,Math.PI/2),te.lineTo(-ye+ne,Q),te.absarc(-ye+ne,Q-ne,ne,Math.PI/2,Math.PI),te.lineTo(-ye,Te+ne),te.absarc(-ye+ne,Te+ne,ne,Math.PI,Math.PI*1.5);let ce=new la(te,6),re=ce.attributes.position,B=ce.attributes.uv;for(let ve=0;ve<re.count;ve++){let ee=re.getX(ve),F=re.getY(ve),A=(F-Te)/(Q-Te);B.setXY(ve,(ee+ye)/(2*ye),A),re.setX(ve,ee*(1-.08*A))}I(Om(ce,1),S,0,0,-D-.004,0,Math.PI,0)}I(new Rn(.36,.04,.03,2,.014),d,0,1.69,-1.712),I(xe((te,ye)=>{let Te=1.19-ye*.36,Q=oe(Te),ne=.56-.07*ye,ce=.005,re=(oe(Te+ce)-oe(Te-ce))/(2*ce),B=Math.hypot(1,re);return[(te*2-1)*ne,Q,Te,0,1/B,-re/B]},2,7,0,!1),S,0,0,0),I(new Rn(.46,.25,.012,2,.05),a("#86bdb0",.6),0,.73,-1.701),I(new rn(.34,.17),_,0,.72,-1.709,0,Math.PI,0),I(new Rn(.25,.034,.03,2,.013),v,0,.9,-1.708);for(let te of[-1,1])I(new qt(.01,.56,.006),L,te*.47,.85,-1.703);I(new qt(.95,.01,.006),L,0,.565,-1.703),I(new Rn(1.5,.2,.26,3,.08),c,0,.44,-1.6),I(new Rn(1.38,.08,.22,2,.03),f,0,.33,-1.61);for(let te of[-1,1])I(new qt(.13,.035,.01),G,te*.56,.44,-1.731);I(new di(.036,.036,.12,12),v,.46,.29,-1.68,Math.PI/2,0,0),I(new di(.024,.024,.124,10),C,.46,.29,-1.68,Math.PI/2,0,0);for(let te of[-1,1])I(new Rn(.4,.26,.04,2,.06),f,te*.42,.85,1.702),I(new di(.105,.105,.03,16),p,te*.46,.85,1.72,Math.PI/2,0,0),I(new di(.055,.055,.03,12),p,te*.3,.85,1.718,Math.PI/2,0,0),I(new Rn(.1,.06,.04,2,.015),x,te*.52,.66,1.705),I(new qt(.46,.014,.014),C,te*.25,1.215,1.2,-.3,te*.12,0);I(new Rn(.36,.12,.03,2,.03),C,0,.84,1.704);for(let te=0;te<3;te++)I(new qt(.32,.012,.012),L,0,.805+te*.035,1.722);I(new Rn(1.52,.24,.22,2,.07),f,0,.44,1.62),I(new qt(.7,.07,.02),C,0,.4,1.732),I(new qt(.34,.17,.01),a("#f0cc38",.3),0,.62,1.733),I(new qt(.3,.05,.004),a("#2f5a2f",.1),0,.6,1.739),M=!0;for(let[te,ye]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new di(.29,.29,.19,24),m,te,.29,ye,0,0,Math.PI/2),I(new di(.195,.195,.194,20),U,te,.29,ye,0,0,Math.PI/2),I(new di(.155,.155,.198,16),z,te,.29,ye,0,0,Math.PI/2);for(let Te=0;Te<5;Te++){let Q=Te/5*Math.PI*2+.3;I(new qt(.202,.03,.15),U,te,.29-.085*Math.sin(Q),ye+.085*Math.cos(Q),Q,0,0)}I(new di(.045,.045,.206,10),g,te,.29,ye,0,0,Math.PI/2)}M=!1;for(let[te,ye]of T){let Te=new vt(Yf(ye),te);Te.castShadow=te!==S&&te!==_&&te!==d&&te!==p&&te!==h,Te.receiveShadow=!0,t.add(Te)}{let te=new vt(Yf(E),o);te.castShadow=te.receiveShadow=!0,i.add(te)}{let Te=document.createElement("canvas");Te.width=48,Te.height=96;let Q=Te.getContext("2d"),ne=Q.createImageData(48,96);for(let re=0;re<96;re++)for(let B=0;B<48;B++){let ve=Math.max(0,Math.abs((B+.5)/48-.5)*2.1-.62),ee=Math.max(0,Math.abs((re+.5)/96-.5)*2.05-.78),F=Math.hypot(ve/.42,ee/.24),A=Math.max(0,1-F),W=(re*48+B)*4;ne.data[W]=ne.data[W+1]=ne.data[W+2]=Math.round(255*A*A*(3-2*A)),ne.data[W+3]=255}Q.putImageData(ne,0,0);let ce=new vt(new rn(2.2,4.1),new cn({color:0,alphaMap:new Jn(Te),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));ce.rotation.x=-Math.PI/2,ce.position.y=.03,ce.renderOrder=3,i.add(ce)}let ue=new Kt;ue.position.set(.02,1.19,-1.716),t.add(ue);let Pe=new qt(.52,.026,.02);Pe.translate(.27,0,0);let Se=new vt(y(Pe,f),o);Se.rotation.z=.18,ue.add(Se);let Ge=0,$e=new pa(16773328,0,70,.55,.65,1.2);$e.position.set(0,.8,1.6),$e.target.position.set(0,0,18),t.add($e,$e.target);let ke={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},ut=(te,ye)=>ye*Math.tanh(te/ye);return{group:i,lamps:n,lampCol:s,head:$e,update(te,ye,Te,Q=0,ne=null){if(ne){let ce=ut(-ne.lat*.016,.045),re=ut(-ne.lon*.008,.03);ke.rv+=((ce-ke.roll)*55-ke.rv*8)*te,ke.roll+=ke.rv*te,ke.pv+=((re-ke.pitch)*60-ke.pv*9)*te+ne.kick,ke.pitch+=ke.pv*te,ke.yv+=((ne.road-ke.y)*85-ke.yv*8)*te+ne.jolt,ke.y+=ke.yv*te,e.rotation.set(ke.pitch,0,ke.roll),e.position.y=.35+ke.y}if(ke.br+=((ne?ne.brake:0)-ke.br)*Math.min(1,te*14),l.emissiveIntensity=.35+Te*3.2+ke.br*(1.7+Te*2),d.emissiveIntensity=ke.br*(2.4+Te*1.6),h.emissiveIntensity=1+Te*3+ke.br*(2+Te*2),Q>.15||Ge%2.6>.01){Ge+=te;let ce=Ge%2.6/2.6,re=ve=>ve*ve*(3-2*ve),B=ce<.25?re(ce/.25):ce<.5?re(1-(ce-.25)/.25):0;Se.rotation.z=.18+B*2.5,Q<=.15&&ce>=.5&&(Ge=0)}$e.intensity=Te*60,p.emissiveIntensity=.15+Te*2.6}}}var mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},aM=new Ss(-1,1,1,-1,0,1),$f=class extends bt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}},lM=new $f,Ds=class{constructor(e){this._mesh=new vt(lM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var go=class extends li{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=js.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ds(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var za=class extends li{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Tu=class extends li{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Eu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new go(mo),this.copyPass.material.blending=Gn,this.timer=new ma}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}za!==void 0&&(o instanceof za?n=!0:o instanceof Tu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wu=class extends li{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ae}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var km={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var vo=class i extends li{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new Ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(r,o,{type:pn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let m=new zt(r,o,{type:pn,depthBuffer:!1});m.texture.name="UnrealBloomPass.h"+f,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);let g=new zt(r,o,{type:pn,depthBuffer:!1});g.texture.name="UnrealBloomPass.v"+f,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),o=Math.round(o/2)}let a=km;this.highPassUniforms=js.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new De(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=js.clone(mo.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader,premultipliedAlpha:!0,blending:is,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ae,this._oldClearAlpha=1,this._basic=new cn,this._fsQuad=new Ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new De(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,u=a+c;s.push((o*a+(o+1)*c)/u),r.push(u)}return new Mt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};vo.BlurDirectionX=new De(1,0);vo.BlurDirectionY=new De(0,1);var Kf=class extends li{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new zt(4,4,{type:pn,depthBuffer:!1,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),this.mat=new Mt({uniforms:{tDiffuse:{value:null},uTexel:{value:new De(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new Ds(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},cM={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new De(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new De(1/1280,1/720)},uLo:{value:new k(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function Hm(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new De),a=new zt(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:pn,samples:n}),c=new Eu(i,a);c.addPass(new wu(e,t));let u=new Kf;c.addPass(u);let f=new vo(new De(o.x*r*.5,o.y*r*.5),.42,.55,.86);c.addPass(f);let m=new go(cM);m.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},m.material.toneMapped=!1,c.addPass(m);let g=c.render.bind(c);return c.render=v=>{m.uniforms.toneMappingExposure.value=i.toneMappingExposure,g(v)},{composer:c,bloom:f,grade:m,refl:u}}function Vm(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let Q=0;Q<2;Q++){let ne=s.getChannelData(Q);for(let ce=0;ce<n;ce++)ne[ce]=(Math.random()*2-1)*Math.pow(1-ce/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.3;let c=e.createGain();c.gain.value=.11,a.connect(c),c.connect(t),c.connect(r);let u=(Q,ne)=>{let ce=e.createBuffer(1,e.sampleRate*Q,e.sampleRate),re=ce.getChannelData(0),B=0;for(let ve=0;ve<re.length;ve++)ne?(B=(B+.02*(Math.random()*2-1))/1.02,re[ve]=B*3.5):re[ve]=Math.random()*2-1;return ce},f=(Q,ne,ce)=>{let re=e.createBufferSource();re.buffer=Q,re.loop=!0;let B=e.createBiquadFilter();B.type=ne,B.frequency.value=ce;let ve=e.createGain();return ve.gain.value=0,re.connect(B),B.connect(ve),ve.connect(t),re.start(),{f:B,g:ve}},m=f(u(2,!0),"lowpass",400),g=f(u(3,!1),"lowpass",700);g.g.connect(r);let v=f(u(2,!1),"bandpass",5200);v.f.Q.value=6;let y=f(u(2,!0),"lowpass",240),S=f(u(3,!1),"bandpass",2600);S.f.Q.value=.35;let l=f(u(2,!0),"lowpass",520),h=f(u(2,!1),"bandpass",1500);h.f.Q.value=.7;let d=e.createBiquadFilter(),x=e.createGain(),p=e.createOscillator(),_=e.createOscillator(),T=e.createGain();p.type="sawtooth",_.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,x.gain.value=0,T.gain.value=.5,p.connect(d),_.connect(T),T.connect(d),d.connect(x),x.connect(t),p.start(),_.start();let E=f(u(3,!1),"bandpass",750);E.f.Q.value=.6;let M=f(u(3,!0),"lowpass",420),b=f(u(2,!0),"lowpass",140),w=u(.03,!1),R=0;function P(Q,ne){let ce=e.createBufferSource(),re=e.createBiquadFilter(),B=e.createGain();ce.buffer=w,re.type="bandpass",re.frequency.value=1800+Math.random()*2600,re.Q.value=1.2,B.gain.setValueAtTime(ne*(.02+Math.random()*.03),Q),B.gain.exponentialRampToValueAtTime(1e-4,Q+.03),ce.connect(re),re.connect(B),B.connect(t),ce.start(Q),ce.stop(Q+.04)}let I=0,C=0;function L(Q,ne){let ce=e.createOscillator(),re=e.createOscillator(),B=e.createGain(),ve=e.createBiquadFilter();ve.type="bandpass",ve.frequency.value=1150,ve.Q.value=2.2,ce.type="square",ce.frequency.value=745,re.type="triangle",re.frequency.value=1490,B.gain.setValueAtTime(0,Q),B.gain.linearRampToValueAtTime(.085*ne,Q+.004),B.gain.exponentialRampToValueAtTime(1e-4,Q+.3),ce.connect(ve),re.connect(ve),ve.connect(B),B.connect(t),B.connect(r),ce.start(Q),re.start(Q),ce.stop(Q+.33),re.stop(Q+.33)}function U(Q,ne){let ce=e.createOscillator(),re=e.createGain();ce.type="sine",ce.frequency.setValueAtTime(110,Q),ce.frequency.exponentialRampToValueAtTime(48,Q+.12),re.gain.setValueAtTime(1e-4,Q),re.gain.linearRampToValueAtTime(.22*ne,Q+.006),re.gain.exponentialRampToValueAtTime(1e-4,Q+.17),ce.connect(re),re.connect(t),ce.start(Q),ce.stop(Q+.2)}let z=e.createGain();z.gain.value=1,z.connect(t);let G=e.createGain();G.gain.value=.35,z.connect(G),G.connect(r);let D=(Q=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return z;let ne=e.createStereoPanner();return ne.pan.value=Q,ne.connect(z),ne};function H(Q,ne,ce,re,B,ve,ee="sine",F=0){let A=e.createOscillator(),W=e.createGain();if(A.type=ee,A.frequency.setValueAtTime(ne,Q),A.frequency.exponentialRampToValueAtTime(ce,Q+re),F){let Y=e.createOscillator(),J=e.createGain();Y.frequency.value=F,J.gain.value=ne*.012,Y.connect(J),J.connect(A.frequency),Y.start(Q),Y.stop(Q+re+.05)}return W.gain.setValueAtTime(1e-4,Q),W.gain.linearRampToValueAtTime(B,Q+Math.min(.04,re*.25)),W.gain.setValueAtTime(B,Q+re*.7),W.gain.exponentialRampToValueAtTime(1e-4,Q+re),A.connect(W),W.connect(ve),A.start(Q),A.stop(Q+re+.02),W}function O(Q,ne){let ce=D(),re=2+Math.floor(Math.random()*4),B=3200+Math.random()*1500;for(let ve=0;ve<re;ve++){let ee=Q+ve*(.09+Math.random()*.07);H(ee,B,B*(1.2+Math.random()*.3),.06,ne*.022,ce)}}function K(Q,ne){let ce=D();H(Q,1120,1390,1,ne*.03,ce,"sine",5.5),H(Q+1.15,2350,2150,.14,ne*.03,ce),H(Q+1.32,1700,1520,.13,ne*.028,ce),H(Q+1.5,2750,2480,.36,ne*.032,ce)}function oe(Q,ne){let ce=D(),re=1+Math.floor(Math.random()*3);for(let B=0;B<re;B++){let ve=Q+B*.48,ee=e.createOscillator(),F=e.createBiquadFilter(),A=e.createGain();ee.type="sawtooth",ee.frequency.setValueAtTime(560,ve),ee.frequency.exponentialRampToValueAtTime(420,ve+.32),F.type="bandpass",F.frequency.value=1150,F.Q.value=1.6,A.gain.setValueAtTime(1e-4,ve),A.gain.linearRampToValueAtTime(ne*.03,ve+.03),A.gain.exponentialRampToValueAtTime(1e-4,ve+.36),ee.connect(F),F.connect(A),A.connect(ce),ee.start(ve),ee.stop(ve+.4)}}function Ve(Q,ne){let ce=D(),re=2+Math.floor(Math.random()*2);for(let B=0;B<re;B++)H(Q+B*.42,1750,1150,.36,ne*.022,ce,"triangle",11)}function Ue(Q,ne){let ce=D(),re=e.createOscillator(),B=e.createBiquadFilter(),ve=e.createGain(),ee=240+Math.random()*220,F=5+Math.floor(Math.random()*4);re.type="square",re.frequency.value=ee,B.type="bandpass",B.frequency.value=ee*2.4,B.Q.value=3,ve.gain.setValueAtTime(1e-4,Q);for(let A=0;A<F;A++){let W=Q+A*.038;ve.gain.linearRampToValueAtTime(ne*.014,W+.008),ve.gain.linearRampToValueAtTime(1e-4,W+.028)}re.connect(B),B.connect(ve),ve.connect(ce),re.start(Q),re.stop(Q+F*.038+.05)}function xe(Q,ne){let ce=D(),re=4300+Math.random()*700;for(let B=0;B<3;B++)H(Q+B*.055,re,re*1.01,.035,ne*.009,ce)}function Z(Q,ne){let ce=D(0);for(let[re,B,ve]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let ee=e.createOscillator(),F=e.createGain();ee.type="sine",ee.frequency.value=re,ee.detune.value=(Math.random()-.5)*8,F.gain.setValueAtTime(1e-4,Q),F.gain.linearRampToValueAtTime(ne*.05*B,Q+.03),F.gain.exponentialRampToValueAtTime(1e-4,Q+ve),ee.connect(F),F.connect(ce),ee.start(Q),ee.stop(Q+ve+.1)}}function j(Q,ne){let ce=D();for(let re of[Q,Q+.22])H(re,2650,2600,.5,ne*.018,ce),H(re,3950,3900,.35,ne*.008,ce)}let ue={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Pe=Q=>Q>1e-4?-Math.log(1-Math.random()*.98)/Q:1e9,Se=Q=>440*Math.pow(2,(Q-69)/12),Ge=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],$e=[72,74,76,79,81,84,86,88],ke=0,ut=e.currentTime+.2,te=e.currentTime+3;function ye(Q){let ne=Ge[ke++%Ge.length],ce=11;for(let re of ne)for(let B of[-5,5]){let ve=e.createOscillator(),ee=e.createGain();ve.type=B<0?"sine":"triangle",ve.frequency.value=Se(re),ve.detune.value=B,ee.gain.setValueAtTime(0,Q),ee.gain.linearRampToValueAtTime(.18,Q+3.5),ee.gain.setValueAtTime(.18,Q+ce-4),ee.gain.linearRampToValueAtTime(0,Q+ce+1),ve.connect(ee),ee.connect(a),ve.start(Q),ve.stop(Q+ce+1.2)}}function Te(Q){let ne=$e[Math.floor(Math.random()*$e.length)],ce=e.createOscillator(),re=e.createOscillator(),B=e.createGain(),ve=e.createGain();ce.type=re.type="sine",ce.frequency.value=Se(ne),re.frequency.value=Se(ne)*2.01,ve.gain.value=.25,re.connect(ve),ve.connect(B),B.gain.setValueAtTime(0,Q),B.gain.linearRampToValueAtTime(.05,Q+.02),B.gain.exponentialRampToValueAtTime(1e-4,Q+4),ce.connect(B),B.connect(r),B.connect(t),ce.start(Q),re.start(Q),ce.stop(Q+4.2),re.stop(Q+4.2)}return{ac:e,muted:!1,tyres:h,engG:x,bump(Q){U(e.currentTime+.01,Q)},update(Q,ne,ce,re={}){let B=e.currentTime;if((re.bell||0)>.01)for(I<B&&(I=B+.02);I<B+.12;)L(I,re.bell),I+=.41;let ve=re.rain||0;S.g.gain.setTargetAtTime(ve*.05,B,.6),l.g.gain.setTargetAtTime(ve*.05,B,.6);let ee=(re.wetRoad||0)*Math.min(1,Q)**1.5,F=.8+.2*Math.sin(B*2.3)*Math.sin(B*.9+1);if(h.g.gain.setTargetAtTime(ee*.045*F,B,.4),h.f.frequency.setTargetAtTime(900+1500*Math.min(Q,2),B,.4),ve>.05&&re.roof)for(R<B&&(R=B+.02);R<B+.12;)P(R,ve),R+=.04+Math.random()*.12/ve;let A=re.water||0,W=.6+.4*Math.sin(B*1.3)*Math.sin(B*.37);E.g.gain.setTargetAtTime(A*.035*W,B,.25),E.f.frequency.setTargetAtTime(600+400*W,B,.25);let Y=.35+.65*Math.pow(.5+.5*Math.sin(B*.23)*Math.sin(B*.071+2),2),J=re.rush||0;M.g.gain.setTargetAtTime(((ne.mountain||0)+(ne.snow||0)*.7)*.06*Y+J*.055,B,.8),M.f.frequency.setTargetAtTime(260+420*Y+J*500,B,.8);let V=re.train||0;if(y.g.gain.setTargetAtTime(V*.16,B,.2),V>.04)for(C<B&&(C=B+.02);C<B+.12;)U(C,V),U(C+.15,V*.8),C+=1.2;for(;ut<B+1;)ye(ut),ut+=8;te<B+.5&&(Te(te),te+=1.5+Math.random()*4.5);let me=re.tunnel||0;{let X=re.speed||0,Re=re.load||0,fe=850+2400*(1-Math.exp(-X/15))+Math.max(0,X-25)*60+Re*1300,Ne=fe/40;p.frequency.setTargetAtTime(Ne,B,.25),_.frequency.setTargetAtTime(Ne*2,B,.25),d.frequency.setTargetAtTime(200+fe*.08+Re*260,B,.3),x.gain.setTargetAtTime((.008+.01*Math.min(1,X/15)+.024*Re)*(1-.6*(re.rush||0))*(re.roof===!1?.5:1)*(1+.7*me),B,.3)}m.g.gain.setTargetAtTime((.03+Q*.06)*(1+1.6*me),B,.35),m.f.frequency.setTargetAtTime((250+Q*500)*(1+.5*me),B,.35),b.g.gain.setTargetAtTime(me*.07,B,.4),o.gain.setTargetAtTime(.55+.6*me,B,.4);let le=.5+.5*Math.sin(B*.55)*Math.sin(B*.21+1);g.g.gain.setTargetAtTime(ne.coast*(.012+le*.05),B,.3),g.f.frequency.setTargetAtTime(400+le*900,B,.3);let he=1-Math.min(1,ve*1.4),Ie=1-ce,Ce=re.dusk||0,ge=ne.snow||0,_e=1-ge,Ee={sparrow:ce*he*.22*(.3+ne.city*.5+ne.sakura+ne.country*.8+ne.coast*.2+(ne.mountain||0)*.5)*(1-ge*.8),uguisu:ce*he*ne.sakura*.06,crow:he*(Ce*.14+ce*(ne.city+ne.country+(ne.mountain||0)*1.5+ge*2.5)*.012),gull:ce*ne.coast*he*.16,frog:Ie*(ne.country*5+ne.sakura*.6+ne.coast*.3)*(1+ve*.6)*_e,cricket:Ie*he*(1.6-ne.city*1.1+(ne.mountain||0)*.8)*_e,bike:ce*he*ne.city*.014,bell:ge*.022+(ne.mountain||0)*.006},et={sparrow:O,uguisu:K,crow:oe,gull:Ve,frog:Ue,cricket:xe,bike:j,bell:Z};for(let X in Ee)B<ue[X]||(Ee[X]>1e-4&&et[X](B+.05,.6+Math.random()*.4),ue[X]=B+Math.max(.12,Pe(Ee[X]||1e-6)));let rt=.5+.5*Math.sin(B*7)*Math.sin(B*.4);v.g.gain.setTargetAtTime((ne.country+ne.sakura*.3)*ce*.006*rt*(1-(ne.snow||0)),B,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function Gm(i){let t=new rn(.075,.05),n=new cn({color:16777215,side:En}),s=new ts(t,n,420);s.frustumCulled=!1,s.count=0;let r=new Ae("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(p=>new Ae(p));for(let p=0;p<420;p++)s.setColorAt(p,r);let a=Array.from({length:420},()=>({p:new k(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),c=new nt,u=new Tn,f=new Kn,m=new k(1,1,1),g=new k,v=90,y=new Float32Array(v*3),S=Array.from({length:v},()=>({p:new k(1e9,0,0),ph:Math.random()*6.28})),l=new bt;l.setAttribute("position",new Gt(y,3));let h=new Hr({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:is,opacity:0}),d=new Ko(l,h);d.frustumCulled=!1;let x=(p,_,T,E,M)=>{let b=M?8+Math.random()*42:-4+Math.random()*50,w=(Math.random()-.5)*40;p.p.set(_.x+T.x*b+E.x*w,_.y-1+Math.random()*9,_.z+T.z*b+E.z*w)};return{group:[s,d],shift(p,_){for(let T of a)T.p.x-=p,T.p.z-=_;for(let T of S)T.p.x-=p,T.p.z-=_},update(p,_,T,E,M,b,w,R,P,I=0){let C=Math.floor(420*Math.min(1,b*1.1+I*.55)),L=!1;s.count=C;for(let z=0;z<C;z++){let G=a[z];g.subVectors(G.p,T);let D=g.x*E.x+g.z*E.z,H=g.x*M.x+g.z*M.z;if(G.p.x>1e8||D<-6||D>55||Math.abs(H)>24||G.p.y<w-.5){x(G,T,E,M,G.p.x<1e8);let O=Math.random()*(b+I)<I;(O!==G.leaf||O)&&(G.leaf=O,s.setColorAt(z,O?o[Math.floor(Math.random()*o.length)]:r),L=!0)}G.p.y-=G.v*p,G.p.x+=Math.sin(_*.7+G.ph)*.4*p+.25*p,G.p.z+=Math.cos(_*.5+G.ph)*.3*p,f.set(_*G.sp+G.ph,_*G.sp*.7,G.ph),u.setFromEuler(f),m.setScalar(G.leaf?1.9:1),c.compose(G.p,u,m),s.setMatrixAt(z,c)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let U=R*P;if(h.opacity=U,d.visible=U>.01,d.visible){for(let z=0;z<v;z++){let G=S[z];g.subVectors(G.p,T);let D=g.x*E.x+g.z*E.z,H=g.x*M.x+g.z*M.z;if(G.p.x>1e8||D<-4||D>60||Math.abs(H)>30){let O=2+Math.random()*55,K=(Math.random()-.5)*55;G.p.set(T.x+E.x*O+M.x*K,w+.3+Math.random()*2.2,T.z+E.z*O+M.z*K)}G.p.x+=Math.sin(_*.6+G.ph*3)*.3*p,G.p.y+=Math.sin(_*.9+G.ph)*.2*p,G.p.z+=Math.cos(_*.5+G.ph*2)*.3*p,y[z*3]=G.p.x,y[z*3+1]=G.p.y,y[z*3+2]=G.p.z}l.attributes.position.needsUpdate=!0}}}}var lt=new URLSearchParams(location.search),xo=lt.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();xo&&document.body.classList.add("embed");lt.has("shot")&&document.body.classList.add("shot");op(lt.has("seed")?parseInt(lt.get("seed")):Math.random()*1e9|0);cp(lt.get("env")||"city");var Cn=i=>document.getElementById(i),_o=i=>{let e=Cn("loading");e&&(e.textContent=i)};async function uM(){await new Promise(Me=>setTimeout(Me,30));let i=Cn("c"),e=new eu({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=lt.get("q")||(xo||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?xo?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=Qt,e.toneMapping=ga,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Ys,e.debug.checkShaderErrors=lt.has("debug");let r=new Ws;r.fog=new qo(13032946,.0019,700);let o=new In(52,innerWidth/innerHeight,.5,7e3),a=new Yr(16777215,3);a.castShadow=!0;let c=n==="low"?1024:n==="mid"?1536:2048;a.shadow.mapSize.set(c,c),bf(lt.has("pcf")?parseInt(lt.get("pcf")):1);let u=62,f=a.shadow.camera,m=new nt,g=new nt;Object.assign(f,{left:-u,right:u,top:u,bottom:-u,near:1,far:420});let v=new k(0,1,0),y=new k,S=new k,l=new k,h=new k(0,1,0),d=new k(0,150,60),x=new k,p=new k,_=null,T=0,E=0,M=0;a.shadow.updateMatrices=function(){f.position.copy(d),f.lookAt(x),f.updateMatrixWorld(),f.updateProjectionMatrix(),g.multiplyMatrices(f.matrixWorldInverse,m).multiply(f.matrixWorld),f.projectionMatrix.multiply(g),f.projectionMatrixInverse.copy(f.projectionMatrix).invert(),this._updateMatrix(f,this.matrix,this._frustum)};let b=!0;a.shadow.bias=-4e-4;let w=()=>{a.shadow.normalBias=lt.has("nb")?parseFloat(lt.get("nb")):1.5*2*u/a.shadow.mapSize.x};w();{let[Me,ht]=(lt.get("graze")||"0,0.12").split(",").map(Number);vp(Me,ht)}r.add(a,a.target);let R=new Yr(16777215,0);R.castShadow=n!=="low"&&!lt.has("nocarsh");{let Me=lt.has("carsm")?parseInt(lt.get("carsm")):n==="high"?512:384;R.shadow.mapSize.set(Me,Me)}if(Object.assign(R.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),R.shadow.bias=-2e-4,R.shadow.normalBias=.025,r.add(R,R.target),R.castShadow){let Me=a.shadow.getFrustum(),ht=R.shadow.getFrustum();for(let Qe of[vt,$o]){let ft=Qe.prototype.intersectsFrustum;Qe.prototype.intersectsFrustum=function(dt){return dt===ht?this.userData.car===!0:(dt!==Me||this.userData.car!==!0)&&ft.call(this,dt)}}}let P=new fa(10799359,13154464,1.6);r.add(P),_o("painting the town\u2026"),await new Promise(Me=>setTimeout(Me,10));let I=Np();zp(I);let C=Up(e);qp(C.cells),We.uTuftV.value.set(...C.tuftV);let L=wp(I.textures(e),C.tex),U=Mp();U.update(e,0,0,0,0),_o("painting the clouds\u2026"),await new Promise(Me=>setTimeout(Me,10)),Yp(lt.has("leafd")?parseFloat(lt.get("leafd")):n==="high"?.72:.62),Qp();let z=new au,G=Um(),D=Fm(),H=Lm(n,lt.has("grass")?lt.get("grass").split(",").map(Number):null);for(let Me of H.meshes)r.add(Me);let O=new bu(r,z,L,G,D),K=Sm();r.add(K);let oe=Em(Tm(e));r.add(oe.group);let Ve=wm();r.add(Ve.group);let Ue=Nm();r.add(Ue.mesh);let xe=zm();xe.group.rotation.order="YXZ",r.add(xe.group),xe.group.traverse(Me=>{Me.userData.car=!0});let Z=Gm(L.glowTex);Z.group.forEach(Me=>r.add(Me));let j=lt.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),ue=Hm(e,r,o,{msaa:j==="msaa"?n==="high"?4:2:0,fxaa:j==="fxaa"});We.uReflTex.value=ue.refl.rt.texture;let Pe=new k,Se=new k,Ge=lt.get("refl")||"auto",$e=lt.has("backlit")?parseFloat(lt.get("backlit")):1,ke=lt.has("lightson")?parseFloat(lt.get("lightson")):-1,ut=new k,te=lt.has("haze")?parseFloat(lt.get("haze")):1,ye=Rp();r.add(ye.group);let Te=Cp();r.add(Te.group);let Q=Am(lt),ne=Cm(),ce=Rm();r.add(ne.mesh,ce.mesh);let re=Pm();r.add(re.mesh);let B=Im();r.add(B.mesh);let ve=new Ae,ee=new Ae,F=new yt,A=Dm();r.add(A.mesh);let W=Q.W.rain,Y=.4,J=5.5,V={s:Math.max(100,parseFloat(lt.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Xt(parseFloat(lt.get("t"))||.4,0,.999),todPaused:lt.has("freeze"),dist:0,spray:lt.has("nospray")?0:1,grass:1,cam:{low:1,eye:2,top:3,film:4}[lt.get("cam")]??(xo?4:0)},me=!1;_o("building the road\u2026"),await new Promise(Me=>setTimeout(Me,10));let le=xo?620:O.ahead;O.ahead=260;let he=lt.has("detail")?parseFloat(lt.get("detail")):380,Ie=lt.has("farleaf")?parseFloat(lt.get("farleaf")):540;for(;O.update(V.s,1e9););O.flush(),O.ahead=le;{_o("preparing the light\u2026"),await new Promise(dt=>setTimeout(dt,10));let Me=new Kt,ht=new bt;ht.setAttribute("position",new Ye([0,0,0,.01,0,0,0,.01,0],3)),ht.setAttribute("normal",new Ye([0,1,0,0,1,0,0,1,0],3)),ht.setAttribute("uv",new Ye([0,0,1,0,0,1],2)),ht.setAttribute("color",new Ye([1,1,1,1,1,1,1,1,1],3));let Qe=[L.color,L.atlas,L.foliage,L.leaf,L.lamp,L.sig,L.sodium,L.decal,L.pool,G,D];for(let dt=0;dt<qi.length;dt++)Qe.push(Da([qi[dt]])),Qe.push(Da([qi[dt],qi[(dt+1)%qi.length]]));for(let dt of Qe){let Dt=new vt(ht,dt);Dt.castShadow=Dt.receiveShadow=!0,Dt.frustumCulled=!1,Me.add(Dt)}Me.position.set(0,0,0),r.add(Me),a.target.position.set(0,0,0),a.position.set(0,150,60);let ft=[ne.mesh,ce.mesh,re.mesh,B.mesh,Te.group,ye.group,Ue.mesh].filter(dt=>!dt.visible);for(let dt of ft)dt.visible=!0;H.warm(!0),e.setRenderTarget(ue.composer.readBuffer),e.compile(r,o),e.render(r,o),e.setRenderTarget(null);for(let dt of ft)dt.visible=!1;H.warm(!1),r.remove(Me),ht.dispose(),ue.bloom.enabled=ue.refl.enabled=!0,ue.composer.render(0),ue.bloom.enabled=ue.refl.enabled=!1}let Ce={k:Math.ceil((V.s-tr)/er),phase:"idle",raise:1,decided:!1,t2:0},ge={},_e={},Ee={},et=lt.has("yaw")||lt.get("cam")==="top",rt=new k,X=new k,Re=new k,fe=!1,Ne=new k,Fe=new k,we=Cn("spd"),st=Cn("dist"),Je=Cn("clock"),It=Cn("zone"),At=Cn("start"),Yn=Cn("hint"),Lt=null,ka=null,Ha=0,yo=0;function Mo(Me){!me||Me===ka||(ka=Me,It.querySelector(".jp").textContent=Ra[Me].jp,It.querySelector(".en").textContent=Ra[Me].en,It.classList.add("on"),clearTimeout(Ha),Ha=setTimeout(()=>It.classList.remove("on"),5200))}function bo(){if(!me){if(me=!0,document.body.classList.remove("pre"),!lt.has("auto"))try{Lt=Vm(),Lt&&Lt.ac.resume()}catch{Lt=null}At.style.opacity=0,setTimeout(()=>At.remove(),1500),xo||(Yn.style.opacity=.75,setTimeout(()=>Yn.style.opacity=0,9e3))}}let Pn={};addEventListener("keydown",Me=>{Pn[Me.key]=!0,(Me.key==="m"||Me.key==="M")&&cr(),(Me.key==="t"||Me.key==="T")&&So(),(Me.key==="c"||Me.key==="C")&&To(),(Me.key==="r"||Me.key==="R")&&Ga(),!me&&(Me.key===" "||Me.key==="Enter")&&bo()}),addEventListener("keyup",Me=>{Pn[Me.key]=!1});let sn=null;i.addEventListener("pointerdown",Me=>{sn={id:Me.pointerId,x:Me.clientX,y:Me.clientY,sy:Me.clientY,sc:V.mult}});let Fi=Me=>Xt(Me.sc*Math.exp(-((Me.y-Me.sy)/innerHeight)*3.4),Y,J);addEventListener("pointermove",Me=>{sn&&Me.pointerId===sn.id&&(sn.x=Me.clientX,sn.y=Me.clientY,V.mult=Fi(sn))}),addEventListener("pointerup",()=>{sn=null}),addEventListener("pointercancel",()=>{sn=null}),i.addEventListener("touchstart",Me=>{let ht=Me.changedTouches[0];sn={id:"touch",x:ht.clientX,y:ht.clientY,sy:ht.clientY,sc:V.mult},Me.preventDefault()},{passive:!1}),i.addEventListener("touchmove",Me=>{if(!sn)return;let ht=Me.changedTouches[0];sn.x=ht.clientX,sn.y=ht.clientY,V.mult=Fi(sn),Me.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{sn=null}),i.addEventListener("touchcancel",()=>{sn=null});function cr(){Lt&&(Lt.toggle(),Cn("snd").style.opacity=Lt.muted?.4:1)}function So(){V.todPaused=!V.todPaused,Cn("tim").style.opacity=V.todPaused?.4:1}let ur=[0,1,2,4],Ns={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function To(){V.cam=ur[(ur.indexOf(V.cam)+1)%ur.length],Cn("cam").textContent=Ns[V.cam]||"\u25D0",V.cam===4&&hr()}let Us=["chase","side","road","crane","eye","side","road"],Ot={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function hr(){let Me;do Me=Us[Math.floor(Math.random()*Us.length)];while(Me===Ot.last);{let ht=gi(V.s+60);ht&&Math.abs(V.s+60-ht.s)<nn+120&&(Me=Math.random()<.6?"chase":"eye")}if(Object.assign(Ot,{type:Me,last:Me,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),Me==="road"){let ht=V.s+40+Math.random()*18,Qe=An(ht,"rw"),ft=Math.random()<.6?-1:1,dt=ft*(Qe+(ft<0?.9:1.3)),Dt=z.at(ht,{}),Nt=Dt.y+ir(ht,dt,Dt.y,Qe);Ot.anchor={x:Dt.x+Dt.rx*dt,y:Math.max(Nt,Dt.y)+1.05,z:Dt.z+Dt.rz*dt,s:ht}}fe=!1}let Va={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Ga(){Cn("wx").textContent=Va[Q.cycle()]}Cn("wx").textContent=Va[Q.W.mode],Cn("cam").textContent=Ns[V.cam]||"\u25D0",V.cam===4&&hr(),Cn("wx").onclick=Me=>{Me.stopPropagation(),Ga()},Cn("snd").onclick=Me=>{Me.stopPropagation(),cr()},Cn("tim").onclick=Me=>{Me.stopPropagation(),So()},Cn("cam").onclick=Me=>{Me.stopPropagation(),To()};let Wa=0,Au=Me=>{let ht=performance.now();ht-Wa<120||(Wa=ht,Me.cancelable&&Me.type!=="click"&&Me.preventDefault(),bo())};for(let Me of["touchstart","pointerdown","mousedown","click"])At.addEventListener(Me,Au,{passive:!1});let Xa=()=>{Lt&&Lt.ac.state!=="running"&&Lt.ac.resume()};for(let Me of["touchend","click","keydown"])addEventListener(Me,Xa,{passive:!0});document.addEventListener("visibilitychange",()=>{Lt&&(document.hidden?Lt.ac.suspend():Lt.ac.resume())});let N=!1,$="",ae=52,ie=0;function se(){let Me=innerWidth,ht=innerHeight,Qe=Me/ht,ft=Me+"x"+ht+"@"+s;ft!==$&&($=ft,e.setPixelRatio(s),e.setSize(Me,ht,!1),ue.composer.setPixelRatio(s),ue.composer.setSize(Me,ht),o.aspect=Qe,ae=Qe>=1?52:Xt(2*Math.atan(Math.tan(34*Math.PI/180)/Qe)*180/Math.PI,52,80),o.fov=ae+ie,o.updateProjectionMatrix(),ue.grade.uniforms.uAspect.value=Qe,ue.grade.uniforms.uTexel.value.set(1/ue.composer.readBuffer.width,1/ue.composer.readBuffer.height),We.uReflRes.value.set(ue.composer.readBuffer.width,ue.composer.readBuffer.height))}addEventListener("resize",()=>{N=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{N=!0}),se();let Be=0;function Xe(Me=!0){if(s>1.05)s=Math.max(1,s-.25),N=!0;else if(b)b=!1,ue.bloom.enabled=!1;else if(a.shadow.mapSize.x>1024)a.shadow.mapSize.set(1024,1024),w(),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null);else if(O.ahead>430)O.ahead=430;else return;if(Be++,Me)try{localStorage.setItem("icd-q",String(Be))}catch{}}try{let Me=parseInt(localStorage.getItem("icd-q")||"0");if(!lt.has("q"))for(let ht=0;ht<Math.min(Me,6);ht++)Xe(!1);Be=Math.max(Be,Me||0)}catch{}let ze=performance.now(),Oe=0,je=0,xt=0,_t=()=>1-pe.night,Ze=0,ot=0,tt=lt.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;tt&&(tt.gl=e.getContext(),tt.tq=tt.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let St={p:-1,a:new k,b:new k,next:5},Ke={lat:0,lon:0,road:0,jolt:0,kick:0,u:V.u,vu:0,v:0,s:V.s,yaw:0,brake:0,rk:NaN,rb:null},yn=new Ae(3.6,2.8,1.8),qe=[-2.5335,-1.4665,1.4665,2.5335],Mn=[1.12,-1.12],Rt=[-24.5,24.5];function zn(Me){requestAnimationFrame(zn);let ht=performance.now();N&&(N=!1,se());let Qe=Math.min(.05,Math.max(0,(Me-ze)/1e3));ze=Me,Oe+=Qe,V.steer=0,(Pn.ArrowLeft||Pn.a||Pn.A)&&(V.steer=-1),(Pn.ArrowRight||Pn.d||Pn.D)&&(V.steer=1),(Pn.ArrowUp||Pn.w||Pn.W)&&(V.mult=Xt(V.mult*Math.exp(Qe*.9),Y,J)),(Pn.ArrowDown||Pn.s||Pn.S)&&(V.mult=Xt(V.mult*Math.exp(-Qe*.9),Y,J)),sn&&Math.abs(sn.y-sn.sy)<30&&(V.steer=sn.x<innerWidth/2?-1:1),V.steer&&(V.lastInput=Me,V.uHome=V.u);let ft=so(Ce.k);V.s-ft>24&&(Ce.k++,ft=so(Ce.k),Object.assign(Ce,{phase:"idle",raise:1,decided:!1}));let dt=Ca(ft),Dt=ft-V.s;dt&&!Ce.decided&&Dt<150&&(Ce.decided=!0,Dt>75&&me&&V.speed*V.speed/2.5<Dt-14&&(lt.has("xing")||Xn(Ce.k,99)<.8)&&(Ce.phase="warn",Te.start(ft,Xn(Ce.k,7)<.5?1:-1,16))),Ce.phase==="warn"?(Ce.raise=Math.max(0,Ce.raise-Qe/6),Te.st.cleared&&(Ce.phase="clear",Ce.t2=0)):Ce.phase==="clear"?(Ce.raise=Math.max(0,Ce.raise-Qe/6),(Ce.t2+=Qe)>2.2&&(Ce.phase="raise")):Ce.phase==="raise"&&(Ce.raise=Math.min(1,Ce.raise+Qe/5),Ce.raise>=1&&(Ce.phase="idle"));let Nt=Ce.phase==="warn"||Ce.phase==="clear"||Ce.phase==="raise"&&Ce.raise<.25,ti=An(V.s,"speed")*V.mult*(me?1:.55);if(Ce.phase!=="idle"&&Ce.raise<.8&&Dt>0){let Le=Dt-11.2,it=Le>0?Math.sqrt(2*1.25*Le):0;ti=Math.min(ti,it),V.speed=Math.min(V.speed,it)}lt.has("park")&&(ti=0,V.speed=0),V.speed+=(ti-V.speed)*Math.min(1,Qe*.5),V.s+=V.speed*Qe,V.dist+=V.speed*Qe;let yi=An(V.s,"rw");V.steer?V.u=Xt(V.u+V.steer*Qe*2.4,-yi+.85,yi-.85):Me-V.lastInput>3e3&&(V.u+=(Xt(V.uHome,-yi+.85,yi-.85)+Math.sin(Oe/11)*.1-V.u)*Math.min(1,Qe*.9)),!V.todPaused&&me&&(V.tod=(V.tod+Qe/480*(pe.night>.5?1.7:1))%1),ym(V.tod),Q.update(Qe);let mn=Q.W.ov,Zi=Q.W.rain;bm(mn,Zi),W=Xt(W+(Zi>.25?Qe/18:-Qe/120),0,1);let Jf=performance.now();O.update(V.s,me?3.5:14);let jf=performance.now();if(z.at(V.s,ge),Math.abs(ge.x-O.origin.x)>900||Math.abs(ge.z-O.origin.z)>900){let Le=Math.round(ge.x)-O.origin.x,it=Math.round(ge.z)-O.origin.z;O.setOrigin(Math.round(ge.x),Math.round(ge.z)),rt.x-=Le,rt.z-=it,X.x-=Le,X.z-=it,Z.shift&&Z.shift(Le,it),A.shift(Le,it),re.shift(Le,it)}let Mi=O.origin.x,bi=O.origin.z,Wm=(z.at(V.s+1.5,Ee).y-z.at(V.s-1.5,_e).y)/3,Xm=(Ee.h-_e.h)/3;if(xe.group.position.set(ge.x+ge.rx*V.u-Mi,ge.y+.01,ge.z+ge.rz*V.u-bi),Qe>0){let Le=Ke.vu+((V.u-Ke.u)/Qe-Ke.vu)*Math.min(1,Qe*6),it=(Le-Ke.vu)/Qe;Ke.u=V.u,Ke.vu=Le,Ke.lat=it-V.speed*V.speed*Xm,Ke.lon+=((V.speed-Ke.v)/Qe-Ke.lon)*Math.min(1,Qe*8),Ke.v=V.speed;let at=Ce.phase!=="idle"&&Dt>0&&Dt<20&&V.speed<.5;if(Ke.brake=Ke.lon<-.6||at?1:Ke.lon>-.3?0:Ke.brake,Ke.yaw=-Xt(Math.atan(Le/Math.max(V.speed,6))*.8,-.1,.1),Ke.road=.004*Math.sin(V.s*.48)+.003*Math.sin(V.s*.86+1.3),Ke.jolt=Ke.kick=0,dt)for(let Tt=0;Tt<4;Tt++)for(let Ht=0;Ht<2;Ht++){let Vt=ft+qe[Tt]-Mn[Ht];if(Ke.s<Vt&&V.s>=Vt){let Yt=.05+Math.min(V.speed,25)*.004;Ke.jolt+=Yt,Ke.kick+=Ht?Yt*.9:-Yt*.9,Lt&&Lt.bump(.25+Math.min(V.speed,25)/50)}}{let Tt=Math.round((V.s-ro)/nr);Tt!==Ke.rk&&(Ke.rk=Tt,Ke.rb=mi(V.s));let Ht=Ke.rb;if(Ht)for(let Vt=0;Vt<2;Vt++)for(let Yt=0;Yt<2;Yt++){let Zn=Ht.s+Rt[Vt]-Mn[Yt];if(Ke.s<Zn&&V.s>=Zn){let bn=.035+Math.min(V.speed,25)*.003;Ke.jolt+=bn,Ke.kick+=Yt?bn*.9:-bn*.9,Lt&&Lt.bump(.2+Math.min(V.speed,25)/60)}}}Ke.s=V.s}xe.group.rotation.set(-Math.atan(Wm),ge.h+Ke.yaw,0);let Fs=gi(V.s);Fs&&Math.abs(V.s-Fs.s)<700?(z.at(Fs.s-an,Ee),We.uTunA.value.set(Ee.x-Mi,Ee.y,Ee.z-bi),z.at(Fs.s+an,Ee),We.uTunB.value.set(Ee.x-Mi,Ee.y,Ee.z-bi),We.uTunR.value=An(Fs.s,"rw")+1.7):(We.uTunA.value.set(0,-1e4,0),We.uTunB.value.set(0,-1e4,0));let Ru=Fs&&Math.abs(V.s+1-Fs.s)<an-1.5?1:0;ot+=(Ru-ot)*Math.min(1,Qe*(Ru?1.6:.7)),We.uCarPos.value.set(xe.group.position.x+ge.fx*1.7,xe.group.position.y+.8,xe.group.position.z+ge.fz*1.7),We.uCarFwd.value.set(ge.fx,-.05,ge.fz).normalize(),We.uHead.value=Ru,xe.update(Qe,V.speed,Math.max(pe.night,ot),Zi,Ke),ye.update(dt&&Dt>-24&&Dt<700?fu(z,ft):null,O.origin,Ce.raise,Nt,Oe),Te.update(Qe,z,O.origin,Pt(.15,.8,pe.night),An(ft,"rw")+3.2);let Cu=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(lt.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(lt.has("rig")){let[Le,it,at,Tt]=lt.get("rig").split(",").map(Number);Object.assign(Cu[0],{back:Le,up:it,ahead:at,lookY:Tt})}let Bs=new k,Eo=6,Qf=V.cam===2;if(V.cam===4){Ot.t+=Qe;{let at=gi(V.s+30);at&&Math.abs(V.s+30-at.s)<nn+70&&Ot.type!=="chase"&&Ot.type!=="eye"&&(Ot.type="chase",Ot.t=0,Ot.dur=20,fe=!1)}(Ot.t>Ot.dur+(Ot.type==="road"?8:0)||Ot.type==="road"&&Ot.anchor&&V.s>Ot.anchor.s+24)&&hr();let Le=xe.group.position,it=Ot.type;if(it==="chase"||it==="eye"){let at=Cu[it==="eye"?2:0];Qf=it==="eye",z.at(V.s-at.back,_e),z.at(V.s+at.ahead,Ee),Re.set(_e.x+_e.rx*V.u*at.cu-Mi,_e.y+at.up,_e.z+_e.rz*V.u*at.cu-bi),Bs.set(Ee.x+Ee.rx*V.u*at.lu-Mi,Ee.y+at.lookY,Ee.z+Ee.rz*V.u*at.lu-bi)}else if(it==="side"){z.at(V.s+1.5,_e);let at=Ut(V.s),Tt=at.city+at.sakura>.5,Ht=An(V.s,"rw"),Vt=Ot.sideSign>0?Ht+(Tt?1.45:3.4):-(Ht+1.5),Yt=_e.y+ir(V.s+1.5,Vt,_e.y,Ht);Re.set(_e.x+_e.rx*Vt-Mi,Math.max(Yt+1.55,_e.y+1.25),_e.z+_e.rz*Vt-bi),Bs.set(Le.x+ge.fx*2.5,Le.y+.9,Le.z+ge.fz*2.5),Eo=4}else if(it==="road"&&Ot.anchor)Re.set(Ot.anchor.x-Mi,Ot.anchor.y,Ot.anchor.z-bi),Bs.set(Le.x,Le.y+.85,Le.z),Eo=30;else{z.at(V.s-20,_e),z.at(V.s+34,Ee);let at=14+Math.min(Ot.t,20)*.35;Re.set(_e.x+_e.rx*V.u*.4-Mi,_e.y+at,_e.z+_e.rz*V.u*.4-bi),Bs.set(Ee.x-Mi,Ee.y+1,Ee.z-bi),Eo=3}}else{let Le=Cu[V.cam];z.at(V.s-Le.back,_e),z.at(V.s+Le.ahead,Ee);let it=V.u*Le.cu,at=it+(Le.side||0);Re.set(_e.x+_e.rx*at-Mi,_e.y+Le.up,_e.z+_e.rz*at-bi),Bs.set(Ee.x+Ee.rx*V.u*Le.lu-Mi,Ee.y+Le.lookY,Ee.z+Ee.rz*V.u*Le.lu-bi)}xe.group.visible=!Qf,V.cam===3?o.up.set(ge.fx,0,ge.fz):o.up.set(0,1,0),fe||(rt.copy(Re),X.copy(Bs),fe=!0);let ed=1+Math.max(0,V.speed-12)/12;rt.lerp(Re,1-Math.exp(-Qe*Eo*ed)),X.lerp(Bs,1-Math.exp(-Qe*Math.min(Eo,8)*ed));{let Le=V.cam===3?0:Math.min(Xt((V.speed-16)*.22,0,11),Math.max(0,84-ae));ie+=(Le-ie)*Math.min(1,Qe*1.5),Math.abs(o.fov-(ae+ie))>.02&&(o.fov=ae+ie,o.updateProjectionMatrix())}o.position.copy(rt),o.lookAt(X),lt.has("yaw")&&o.rotateY(parseFloat(lt.get("yaw"))*Math.PI/180),lt.has("pitch")&&o.rotateX(parseFloat(lt.get("pitch"))*Math.PI/180),Ne.set(ge.fx,0,ge.fz),Fe.set(ge.rx,0,ge.rz);{let Le=xe.group.position,it=o.position.x-Le.x,at=o.position.z-Le.z,Tt=V.cam===4&&Ot.type!=="chase"&&Ot.type!=="eye",Ht=V.s+it*ge.fx+at*ge.fz-(Tt?10:0),Vt=Tt||et?40:Math.tan(o.fov*Math.PI/360)*o.aspect*1.08;H.update(z,Ht,V.u+it*ge.rx+at*ge.rz,O.origin.x,O.origin.z,An(V.s,"rw"),Vt),V.grass||H.hide()}let $t=Ut(V.s),Pu=1+.25*pe.bright*(1-ot);a.color.copy(pe.sunCol),a.intensity=pe.sunI/Pu;{let Le=pe.lightDir;if(v.angleTo(Le)>.1){let bn=0;if(me&&!V.todPaused)for(let kn=1;kn<=60&&!(Xf(V.tod+kn*.001,p).angleTo(Le)>.09);kn++)bn=kn;Xf(V.tod+bn*.001,v),T=E=0}y.crossVectors(h,v).normalize(),S.crossVectors(v,y),l.set(xe.group.position.x+ge.fx*26,xe.group.position.y,xe.group.position.z+ge.fz*26),a.target.position.copy(l),a.position.copy(l).addScaledVector(Le,200);let it=2*u/a.shadow.mapSize.x,at=v.x/v.y-Le.x/Le.y,Tt=v.z/v.y-Le.z/Le.y;it!==M&&(M=it,T=E=0);{let bn=Math.round(xe.group.position.y);if(_===null)_=bn;else if(Math.abs(xe.group.position.y-_)>3){let kn=bn-_;T-=kn*(at*y.x+Tt*y.z),E-=kn*(at*S.x+Tt*S.z),_=bn}}let Ht=O.origin.x,Vt=O.origin.z,Yt=l.dot(y)+Ht*y.x+Vt*y.z-T,Zn=l.dot(S)+Ht*S.x+Vt*S.z-E;l.addScaledVector(y,Math.round(Yt/it)*it-Yt).addScaledVector(S,Math.round(Zn/it)*it-Zn),x.copy(l),d.copy(l).addScaledVector(v,200),m.set(1,at,0,-_*at,0,1,0,0,0,Tt,1,-_*Tt,0,0,0,1)}R.target.position.set(xe.group.position.x,xe.group.position.y+.9,xe.group.position.z),R.position.copy(R.target.position).addScaledVector(pe.lightDir,12),P.color.copy(pe.hemiSky),P.groundColor.copy(pe.hemiGround),P.intensity=pe.hemiI/Pu;{let Le=(1-pe.night)*(1-mn);if(Le>.001){o.getWorldDirection(ut);let it=ut.x,at=ut.z,Tt=Math.hypot(it,at)||1,Ht=pe.sunDir,Vt=0;for(let Zn=-2;Zn<=2;Zn++){let bn=Zn*.3,kn=Math.cos(bn),Os=Math.sin(bn),dr=(it*kn-at*Os)/Tt,pr=(it*Os+at*kn)/Tt,wo=Math.max(0,dr*Ht.x+pr*Ht.z),mr=wo*wo;Vt+=mr*mr*mr}let Yt=Vt/5*(.1+.35*pe.warm)*1.4*Le*te;pe.fog.r+=pe.sunCol.r*Yt,pe.fog.g+=pe.sunCol.g*Yt,pe.fog.b+=pe.sunCol.b*Yt}}r.fog.color.copy(pe.fog);let td=($t.city*.0022+$t.sakura*.0019+$t.coast*.0011+$t.country*.0014+$t.mountain*.0017+$t.snow*.0021)*(1+pe.night*.25);r.fog.near=td*(1+.55*mn+.45*Zi),r.fog.far=O.ahead*.92,We.uSkyHor.value.copy(pe.horizon),We.uSkyZen.value.copy(pe.zenith),We.uTime.value=Oe,We.uWet.value=W*(1-$t.snow);{let Le=We.uWet.value>.04&&n!=="low"&&ot<.5&&Ge!=="0";if(ue.refl.enabled=Le&&Ge!=="taps",We.uReflOn.value=Le&&Ge!=="copy"?1:0,Le){o.getWorldDirection(Se),Se.y=0,Se.normalize(),Pe.copy(o.position).addScaledVector(Se,1e4).project(o),We.uHorizon.value=Pe.y*.5+.5;let it=Math.max(.5,o.position.y-xe.group.position.y);We.uReflK.value=Xt(1-2*it/(5+it),.05,1)}}We.uOrigin.value.set(O.origin.x,O.origin.z),We.uWind.value=1+.8*Zi,We.uCloudSh.value=(1-mn)*Pt(.04,.3,pe.sunEl)*(1-pe.night),We.uCloudSh.value>.001&&U.update(e,o.position.x,o.position.z,O.origin.x,O.origin.z);let ni=K.material.uniforms;if(ni.uBright.value=pe.bright,ni.uNight.value=pe.night,ni.uWarm.value=pe.warm,ni.uTime.value=Oe,ni.uCirrusCol.value.copy(pe.cLit).lerp(pe.horizon,.25),ni.uCirrus.value=.6*(1-mn)*(1-.65*Pt(.4,.9,pe.night)),ni.uOvercast.value=mn,ni.uMilky.value=Pt(.55,.95,pe.night)*(1-mn),pe.night>.65&&mn<.3&&St.p<0&&(St.next-=Qe)<0){let Le=Math.atan2(ge.fx,ge.fz)+(Math.random()-.5)*1.5,it=.45+Math.random()*.6,at=.22+Math.random()*.2,Tt=(Math.random()-.5)*.6,Ht=(Vt,Yt)=>new k(Math.cos(Vt)*Math.sin(Yt),Math.sin(Vt),Math.cos(Vt)*Math.cos(Yt));St.a.copy(Ht(it,Le)),St.b.copy(Ht(it-at,Le+Tt)),St.p=0,St.next=lt.has("meteors")?1:6+Math.random()*20}St.p>=0&&(St.p+=Qe/.85,St.p>1.3&&(St.p=-1)),ni.uMetP.value=St.p,ni.uMetA.value.copy(St.a),ni.uMetB.value.copy(St.b),ni.uDeckLit.value.copy(pe.horizon).lerp(pe.cLit,.35),ni.uDeckDark.value.copy(pe.zenith).lerp(pe.horizon,.25).multiplyScalar(.82),K.position.copy(o.position),oe.update(o.position,Qe),Ve.update(o.position,Math.max($t.snow,Ut(V.s+600).snow*.7));let qa=0;for(let Le of[-150,0,250,500,800])qa=Math.max(qa,Ut(V.s+Le).coast);Ue.mesh.visible=qa>.001,Ue.update(o.position,Oe,td*.8,Pt(0,.35,qa)),D.uniforms.uTime.value=Oe,D.uniforms.uFogD.value=r.fog.near,D.uniforms.uNight.value=pe.night,D.uniforms.uSpecK.value=1-pe.overcast*.85,We.uSunDir.value.copy(pe.lightDir),We.uSunCol.value.copy(pe.sunCol),G.uniforms.uTime.value=Oe,G.uniforms.uLight.value.setRGB(1,1,1).multiplyScalar(.35+.65*_t());let ci=Pt(.15,.8,pe.night);L.atlas.emissiveIntensity=.1+ci*1.05,We.uBacklit.value=$e*1.6*(1-mn)*(1-pe.night)*Pt(0,.08,pe.sunEl)*(1-Pt(.25,.55,pe.sunEl))*(1-ot),We.uLightsOn.value=ke>=0?ke:Math.max(Pt(.02,.75,pe.night),.3*mn),L.lamp.color.setRGB(.85,.85,.8).lerp(yn,ci),L.pool.opacity=ci*.42*(1+.8*W);{let Le=xe.group.position,it=xe.lamps,at=Math.max(ci,ot),Tt=0,Ht=0,Vt=0,Yt=-1e3,Zn=0,bn=0,kn=-1e3,Os=0,dr=900,pr=900;if(at>.01){let sd=Math.floor(V.s/kt);for(let Iu=sd-1;Iu<=sd+1;Iu++){let Za=O.chunks.get(Iu);if(!Za||!Za.lamps)continue;let Ao=Za.lamps,rd=Za.group.position;for(let gr=0;gr<Ao.length;gr+=4){let Lu=Ao[gr]+rd.x,Du=Ao[gr+1],Nu=Ao[gr+2]+rd.z,Uu=(Lu-Le.x)**2+(Du-Le.y)**2+(Nu-Le.z)**2,$a=Ao[gr+3]/(1+.045*Uu);$a>Tt?(Ht=Tt,pr=dr,bn=Vt,kn=Yt,Os=Zn,Tt=$a,dr=Uu,Vt=Lu,Yt=Du,Zn=Nu):$a>Ht&&(Ht=$a,pr=Uu,bn=Lu,kn=Du,Os=Nu)}}o.updateMatrixWorld()}let wo=at*Tt*(1+.045*dr)*(1-Pt(18,30,Math.sqrt(dr))),mr=at*Ht*(1+.045*pr)*(1-Pt(18,30,Math.sqrt(pr)));it[0].set(Vt,Yt,Zn,1).applyMatrix4(o.matrixWorldInverse).w=wo,it[1].set(bn,kn,Os,1).applyMatrix4(o.matrixWorldInverse).w=mr,xe.lampCol.setRGB(1,.8-.32*ot,.52-.38*ot),xi.uLampW.value[0].set(Vt,Yt,Zn,wo),xi.uLampW.value[1].set(bn,kn,Os,mr),xi.uLampCol.value.copy(xe.lampCol),xe.head.getWorldPosition(xi.uHeadPos.value),xe.head.target.getWorldPosition(ut),xi.uHeadDir.value.copy(ut).sub(xi.uHeadPos.value).normalize(),xi.uHeadI.value=xe.head.intensity/60}L.pool.visible=L.pool.opacity>.003,O.lod(V.s,he,ci>.15,Ie),We.uNight.value=ci,ue.bloom.strength=Bt(.32,.55,ci),ue.bloom.threshold=Bt(1.35,.95,ci),ue.bloom.radius=Bt(.55,.35,ci);{let Le=Math.max(ci,ot,Pt(.25,.6,pe.warm)*(1-mn));ue.bloom.enabled=b&&Le>.02,ue.bloom.strength*=Math.min(1,Le*4)}e.toneMappingExposure=Bt(1,1.15,ci)*(1+.35*ot)*Pu,Re.copy(o.position).addScaledVector(pe.sunDir,1e3).project(o);let hs=ue.grade.uniforms,qm=Re.z<1?1:0,Ym=Math.max(Math.abs(Re.x),Math.abs(Re.y));hs.uSun.value.set(Re.x*.5+.5,Re.y*.5+.5),hs.uSunVis.value=qm*(1-Pt(1,1.9,Ym))*Pt(-.02,.15,pe.sunEl)*(1-pe.night)*(1-mn)*(1-ot),hs.uSat.value=1.22-.24*mn,hs.uVig.value=.55-.43*pe.bright,hs.uLo.value.set(-.014+.026*pe.bright,0,.03),hs.uDay.value=_t(),hs.uWarm.value=pe.warm,hs.uTime.value=Oe,ne.update(o.position,Oe,Zi*(1-ot)*(1-$t.snow),_t());{let Le=gi(V.s+190),it=($t.city+$t.country+$t.coast)*(1-mn)*(1-W)*Pt(.6,.9,pe.sunEl)*(V.mirage??1)*(Le&&Math.abs(V.s+190-Le.s)<330?0:1);B.update(z,V.s,O.origin.x,O.origin.z,An(V.s+150,"rw"),it,Oe,pe.horizon)}{let Le=Xt($t.snow+$t.mountain*.6*Math.max(pe.night,1-Pt(.27,.36,V.tod)),0,1)*(1-ot);ve.copy(pe.fog).multiplyScalar(.92),ee.copy(pe.sunCol).multiplyScalar(Math.min(1,pe.sunI/3)*(1-mn)*.6);let it=Math.cos(xe.group.rotation.y),at=Math.sin(xe.group.rotation.y),Tt=xe.group.position;F.set(Tt.x-1.75*at,Tt.y+.95,Tt.z-1.75*it,Math.max(pe.night,ot)*(.5+1.2*Ke.brake)),re.update(Qe,xe.group,V.speed,We.uWet.value*(1-ot),$t.snow*(1-ot),Le,ve,ee,F,o.position,V.spray)}ce.update(o.position,Oe,$t.snow*(.3+.7*mn)*(1-ot),_t()),A.setFog(r.fog.near),A.update(Qe,Oe,o.position,Ne,Fe,$t,_t(),Zi,xe.group.position);let Zm=performance.now();Z.update(Qe,Oe,o.position,Ne,Fe,$t.sakura*(1-ot),ge.y,ci,($t.country+$t.sakura*.4)*(1-Zi)*(1-ot),$t.mountain*(1-ot));let $m=performance.now();if(Lt){z.at(ft,Ee);let Le=Math.hypot(Ee.x-O.origin.x-o.position.x,Ee.z-O.origin.z-o.position.z),it=Te.st.active?Te.group.position.distanceTo(o.position):1e9,at=V.speed/15;Lt.update(at<1.5?at:1.5+(at-1.5)*.4,$t,_t(),{rush:Xt((V.speed-25)/40,0,1),bell:Nt?Math.pow(Xt(1-Le/260,0,1),1.5):0,train:Math.pow(Xt(1-it/230,0,1),2),rain:Zi*(1-ot)*(1-$t.snow),wetRoad:We.uWet.value*(1-ot),speed:V.speed,load:Xt(Ke.lon/3,0,1),roof:V.cam!==2,tunnel:ot,water:(()=>{let Tt=mi(V.s);return Math.max(Tt?1-Pt(12,150,Math.abs(V.s-Tt.s)):0,$t.mountain*.45)})(),dusk:pe.warm*(V.tod>.5?1:.3)})}Mo(Jt(V.s+40)),tt&&(e.info.autoReset=!1,e.info.reset());let Ya=null;tt&&tt.tq&&(Ya=tt.gl.createQuery(),tt.gl.beginQuery(tt.tq.TIME_ELAPSED_EXT,Ya));let nd=performance.now();ue.composer.render(Qe);let id=performance.now();if(Ya){let Le=tt.gl;for(Le.endQuery(tt.tq.TIME_ELAPSED_EXT),tt.pend.push(Ya);tt.pend.length&&Le.getQueryParameter(tt.pend[0],Le.QUERY_RESULT_AVAILABLE);){let it=tt.pend.shift(),at=Le.getQueryParameter(it,Le.QUERY_RESULT);Le.deleteQuery(it),Le.getParameter(tt.tq.GPU_DISJOINT_EXT)||(tt.gpu=at/1e6,tt.gpuN++,tt.gpuSum+=tt.gpu,tt.gpu>tt.gpuMax&&(tt.gpuMax=tt.gpu))}}let fr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(fr.world=fr.world*.95+(jf-Jf)*.05,fr.parts=fr.parts*.95+($m-Zm)*.05,fr.render=fr.render*.95+(id-nd)*.05,Ze=Ze*.95+(performance.now()-ht)*.05,window.__ft=Ze,tt){let Le=e.info,it=performance.now()-ht,at={t:+Oe.toFixed(2),s:Math.round(V.s),total:+it.toFixed(1),world:+(jf-Jf).toFixed(1),render:+(id-nd).toFixed(1),gpu:+(tt.gpu||0).toFixed(1),progs:Le.programs.length-tt.progs,geos:Le.memory.geometries-tt.geos,tex:Le.memory.textures-tt.tex,calls:Le.render.calls,tris:Le.render.triangles};at.progs>0&&me&&(at.newProgs=Le.programs.slice(-at.progs).map(Tt=>(Tt.name||"")+":"+String(Tt.cacheKey).slice(0,60))),tt.progs=Le.programs.length,tt.geos=Le.memory.geometries,tt.tex=Le.memory.textures,tt.frames++,tt.sum+=it,it>tt.max&&(tt.max=it),it>12&&me&&tt.spikes.push(at),tt.last=at}if((yo+=Qe)>.25){yo=0,we.textContent=Math.round(V.speed*3.6),st.textContent=(V.dist/1e3).toFixed(1);let Le=Math.floor(V.tod*1440);Je.textContent=`${String(Math.floor(Le/60)).padStart(2,"0")}:${String(Le%60).padStart(2,"0")}`}je++,me&&je>150&&Qe>.03?xt+=Qe:xt=Math.max(0,xt-Qe*.5),xt>3&&!lt.has("q")&&(xt=0,Xe())}window.__dbg={renderer:e,st:V,scene:r,camera:o,world:O,TOD:pe,KEYS:uo,X:Ce,train:Te,weather:Q,U:We,birds:A,cine:Ot,post:ue,car:xe,sun:a,M:L,clouds:oe,sky:K,mountains:Ve,shadowDir:v,CM:Ke,spray:re,grass:H,get audio(){return Lt}},_o(""),At.classList.add("ready"),lt.has("auto")&&bo(),requestAnimationFrame(zn)}uM().catch(i=>{console.error(i),_o("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
