var N0=0,of=1,U0=2;var vr=1,F0=2,yo=3,as=0,Vn=1,yn=2,ii=0,_o=1,Xi=2,af=3,lf=4,B0=5;var xr=100,O0=101,z0=102,k0=103,H0=104,V0=200,G0=201,W0=202,X0=203,cf=204,uf=205,q0=206,Y0=207,Z0=208,$0=209,K0=210,J0=211,j0=212,Q0=213,ep=214,rc=0,oc=1,ac=2,io=3,lc=4,cc=5,uc=6,hc=7,hf=0,tp=1,np=2,qi=0,ff=1,df=2,pf=3,mf=4,gf=5,vf=6,Va=7;var xf=300,Gs=301,yr=302,Gc=303,Wc=304,Ga=306,bs=1e3,ns=1001,fc=1002,wn=1003,ip=1004;var Wa=1005;var Bt=1006,Xc=1007;var Pn=1008;var Kn=1009,yf=1010,_f=1011,bo=1012,qc=1013,Yi=1014,Ci=1015,Rn=1016,Yc=1017,Zc=1018,Mo=1020,bf=35902,Mf=35899,Sf=1021,Ef=1022,Jn=1023,is=1026,Ws=1027,Xs=1028,$c=1029,qs=1030,Kc=1031;var Jc=1033,Xa=33776,qa=33777,Ya=33778,Za=33779,jc=35840,Qc=35841,eu=35842,tu=35843,nu=36196,iu=37492,su=37496,ru=37488,ou=37489,$a=37490,au=37491,lu=37808,cu=37809,uu=37810,hu=37811,fu=37812,du=37813,pu=37814,mu=37815,gu=37816,vu=37817,xu=37818,yu=37819,_u=37820,bu=37821,Mu=36492,Su=36494,Eu=36495,Tu=36283,wu=36284,Ka=36285,Au=36286;var ha=2300,dc=2301,nc=2302,Yh=2303,Zh=2400,$h=2401,Kh=2402;var sp=3200;var Ru=0,rp=1,si="",Gt="srgb",fa="srgb-linear",da="linear",Ot="srgb";var ic=7680;var op=519,ap=512,lp=513,cp=514,Cu=515,up=516,hp=517,Pu=518,fp=519,dp=35044;var Tf="300 es",Vi=2e3,so=2001;function y1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pp(){let i=ro("canvas");return i.style.display="block",i}var Qd={},oo=null;function wf(...i){let e="THREE."+i.shift();oo?oo("log",e,...i):console.log(e,...i)}function mp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ct(...i){i=mp(i);let e="THREE."+i.shift();if(oo)oo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=mp(i);let e="THREE."+i.shift();if(oo)oo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function fr(...i){let e=i.join(" ");e in Qd||(Qd[e]=!0,ct(...i))}function gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var vp={[rc]:oc,[ac]:uc,[lc]:hc,[io]:cc,[oc]:rc,[uc]:ac,[hc]:lc,[cc]:io},ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _h=Math.PI/180,pa=180/Math.PI;function So(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function b1(i,e){return(i%e+e)%e}function bh(i,e,t){return(1-t)*i+t*e}function ea(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Lf=class Lf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lf.prototype.isVector2=!0;var Pe=Lf,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],u=n[s+1],f=n[s+2],g=n[s+3],m=r[o+0],v=r[o+1],b=r[o+2],E=r[o+3];if(g!==E||c!==m||u!==v||f!==b){let l=c*m+u*v+f*b+g*E;l<0&&(m=-m,v=-v,b=-b,E=-E,l=-l);let h=1-a;if(l<.9995){let d=Math.acos(l),x=Math.sin(d);h=Math.sin(h*d)/x,a=Math.sin(a*d)/x,c=c*h+m*a,u=u*h+v*a,f=f*h+b*a,g=g*h+E*a}else{c=c*h+m*a,u=u*h+v*a,f=f*h+b*a,g=g*h+E*a;let d=1/Math.sqrt(c*c+u*u+f*f+g*g);c*=d,u*=d,f*=d,g*=d}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],u=n[s+2],f=n[s+3],g=r[o],m=r[o+1],v=r[o+2],b=r[o+3];return e[t]=a*b+f*g+c*v-u*m,e[t+1]=c*b+f*m+u*g-a*v,e[t+2]=u*b+f*v+a*m-c*g,e[t+3]=f*b-a*g-c*m-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),f=a(s/2),g=a(r/2),m=c(n/2),v=c(s/2),b=c(r/2);switch(o){case"XYZ":this._x=m*f*g+u*v*b,this._y=u*v*g-m*f*b,this._z=u*f*b+m*v*g,this._w=u*f*g-m*v*b;break;case"YXZ":this._x=m*f*g+u*v*b,this._y=u*v*g-m*f*b,this._z=u*f*b-m*v*g,this._w=u*f*g+m*v*b;break;case"ZXY":this._x=m*f*g-u*v*b,this._y=u*v*g+m*f*b,this._z=u*f*b+m*v*g,this._w=u*f*g-m*v*b;break;case"ZYX":this._x=m*f*g-u*v*b,this._y=u*v*g+m*f*b,this._z=u*f*b-m*v*g,this._w=u*f*g+m*v*b;break;case"YZX":this._x=m*f*g+u*v*b,this._y=u*v*g+m*f*b,this._z=u*f*b-m*v*g,this._w=u*f*g-m*v*b;break;case"XZY":this._x=m*f*g-u*v*b,this._y=u*v*g-m*f*b,this._z=u*f*b+m*v*g,this._w=u*f*g+m*v*b;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],f=t[6],g=t[10],m=n+a+g;if(m>0){let v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(f-c)*v,this._y=(r-u)*v,this._z=(o-s)*v}else if(n>a&&n>g){let v=2*Math.sqrt(1+n-a-g);this._w=(f-c)/v,this._x=.25*v,this._y=(s+o)/v,this._z=(r+u)/v}else if(a>g){let v=2*Math.sqrt(1+a-n-g);this._w=(r-u)/v,this._x=(s+o)/v,this._y=.25*v,this._z=(c+f)/v}else{let v=2*Math.sqrt(1+g-n-a);this._w=(o-s)/v,this._x=(r+u)/v,this._y=(c+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+o*a+s*u-r*c,this._y=s*f+o*c+r*a-n*u,this._z=r*f+o*u+n*c-s*a,this._w=o*f-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let u=Math.acos(a),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Df=class Df{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(e0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(e0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*n),f=2*(a*t-r*s),g=2*(r*n-o*t);return this.x=t+c*u+o*g-a*f,this.y=n+c*f+a*u-r*g,this.z=s+c*g+r*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Df.prototype.isVector3=!0;var k=Df,Mh=new k,e0=new mn,Nf=class Nf{constructor(e,t,n,s,r,o,a,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u)}set(e,t,n,s,r,o,a,c,u){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],f=n[4],g=n[7],m=n[2],v=n[5],b=n[8],E=s[0],l=s[3],h=s[6],d=s[1],x=s[4],p=s[7],_=s[2],S=s[5],T=s[8];return r[0]=o*E+a*d+c*_,r[3]=o*l+a*x+c*S,r[6]=o*h+a*p+c*T,r[1]=u*E+f*d+g*_,r[4]=u*l+f*x+g*S,r[7]=u*h+f*p+g*T,r[2]=m*E+v*d+b*_,r[5]=m*l+v*x+b*S,r[8]=m*h+v*p+b*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-n*r*f+n*a*c+s*r*u-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],g=f*o-a*u,m=a*c-f*r,v=u*r-o*c,b=t*g+n*m+s*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=g*E,e[1]=(s*u-f*n)*E,e[2]=(a*n-s*o)*E,e[3]=m*E,e[4]=(f*t-s*c)*E,e[5]=(s*r-a*t)*E,e[6]=v*E,e[7]=(n*c-u*t)*E,e[8]=(o*t-n*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sh.makeScale(e,t)),this}rotate(e){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sh.makeRotation(-e)),this}translate(e,t){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nf.prototype.isMatrix3=!0;var gt=Nf,Sh=new gt,t0=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M1(){let i={enabled:!0,workingColorSpace:fa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ot&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fa]:{primaries:e,whitePoint:n,transfer:da,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var Pt=M1();function _s(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kr,pc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=ro("canvas")),kr.width=e.width,kr.height=e.height;let s=kr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=kr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ro("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_s(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_s(t[n]/255)*255):t[n]=_s(t[n]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},S1=0,ao=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=So(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eh(s[o].image)):r.push(Eh(s[o]))}else r=Eh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Eh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}var E1=0,Th=new k,Zn=class i extends ss{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ns,s=ns,r=Bt,o=Pn,a=Jn,c=Kn,u=i.DEFAULT_ANISOTROPY,f=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=So(),this.name="",this.source=new ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=xf;Zn.DEFAULT_ANISOTROPY=1;var Uf=class Uf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],f=c[4],g=c[8],m=c[1],v=c[5],b=c[9],E=c[2],l=c[6],h=c[10];if(Math.abs(f-m)<.01&&Math.abs(g-E)<.01&&Math.abs(b-l)<.01){if(Math.abs(f+m)<.1&&Math.abs(g+E)<.1&&Math.abs(b+l)<.1&&Math.abs(u+v+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(u+1)/2,p=(v+1)/2,_=(h+1)/2,S=(f+m)/4,T=(g+E)/4,y=(b+l)/4;return x>p&&x>_?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=T/n):p>_?p<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(p),n=S/s,r=y/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=T/r,s=y/r),this.set(n,s,r,t),this}let d=Math.sqrt((l-b)*(l-b)+(g-E)*(g-E)+(m-f)*(m-f));return Math.abs(d)<.001&&(d=1),this.x=(l-b)/d,this.y=(g-E)/d,this.z=(m-f)/d,this.w=Math.acos((u+v+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uf.prototype.isVector4=!0;var mt=Uf,mc=class extends ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Zn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ao(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ma=class extends Zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gc=class extends Zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vc=class Vc{constructor(e,t,n,s,r,o,a,c,u,f,g,m,v,b,E,l){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u,f,g,m,v,b,E,l)}set(e,t,n,s,r,o,a,c,u,f,g,m,v,b,E,l){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=u,h[6]=f,h[10]=g,h[14]=m,h[3]=v,h[7]=b,h[11]=E,h[15]=l,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Hr.setFromMatrixColumn(e,0).length(),r=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),f=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){let m=o*f,v=o*g,b=a*f,E=a*g;t[0]=c*f,t[4]=-c*g,t[8]=u,t[1]=v+b*u,t[5]=m-E*u,t[9]=-a*c,t[2]=E-m*u,t[6]=b+v*u,t[10]=o*c}else if(e.order==="YXZ"){let m=c*f,v=c*g,b=u*f,E=u*g;t[0]=m+E*a,t[4]=b*a-v,t[8]=o*u,t[1]=o*g,t[5]=o*f,t[9]=-a,t[2]=v*a-b,t[6]=E+m*a,t[10]=o*c}else if(e.order==="ZXY"){let m=c*f,v=c*g,b=u*f,E=u*g;t[0]=m-E*a,t[4]=-o*g,t[8]=b+v*a,t[1]=v+b*a,t[5]=o*f,t[9]=E-m*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let m=o*f,v=o*g,b=a*f,E=a*g;t[0]=c*f,t[4]=b*u-v,t[8]=m*u+E,t[1]=c*g,t[5]=E*u+m,t[9]=v*u-b,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let m=o*c,v=o*u,b=a*c,E=a*u;t[0]=c*f,t[4]=E-m*g,t[8]=b*g+v,t[1]=g,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=v*g+b,t[10]=m-E*g}else if(e.order==="XZY"){let m=o*c,v=o*u,b=a*c,E=a*u;t[0]=c*f,t[4]=-g,t[8]=u*f,t[1]=m*g+E,t[5]=o*f,t[9]=v*g-b,t[2]=b*g-v,t[6]=a*f,t[10]=E*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T1,e,w1)}lookAt(e,t,n){let s=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Ls.crossVectors(n,mi),Ls.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Ls.crossVectors(n,mi)),Ls.normalize(),Pl.crossVectors(mi,Ls),s[0]=Ls.x,s[4]=Pl.x,s[8]=mi.x,s[1]=Ls.y,s[5]=Pl.y,s[9]=mi.y,s[2]=Ls.z,s[6]=Pl.z,s[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],f=n[1],g=n[5],m=n[9],v=n[13],b=n[2],E=n[6],l=n[10],h=n[14],d=n[3],x=n[7],p=n[11],_=n[15],S=s[0],T=s[4],y=s[8],M=s[12],w=s[1],A=s[5],C=s[9],I=s[13],R=s[2],L=s[6],U=s[10],O=s[14],V=s[3],D=s[7],H=s[11],z=s[15];return r[0]=o*S+a*w+c*R+u*V,r[4]=o*T+a*A+c*L+u*D,r[8]=o*y+a*C+c*U+u*H,r[12]=o*M+a*I+c*O+u*z,r[1]=f*S+g*w+m*R+v*V,r[5]=f*T+g*A+m*L+v*D,r[9]=f*y+g*C+m*U+v*H,r[13]=f*M+g*I+m*O+v*z,r[2]=b*S+E*w+l*R+h*V,r[6]=b*T+E*A+l*L+h*D,r[10]=b*y+E*C+l*U+h*H,r[14]=b*M+E*I+l*O+h*z,r[3]=d*S+x*w+p*R+_*V,r[7]=d*T+x*A+p*L+_*D,r[11]=d*y+x*C+p*U+_*H,r[15]=d*M+x*I+p*O+_*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],f=e[2],g=e[6],m=e[10],v=e[14],b=e[3],E=e[7],l=e[11],h=e[15],d=c*v-u*m,x=a*v-u*g,p=a*m-c*g,_=o*v-u*f,S=o*m-c*f,T=o*g-a*f;return t*(E*d-l*x+h*p)-n*(b*d-l*_+h*S)+s*(b*x-E*_+h*T)-r*(b*p-E*S+l*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],u=e[6],f=e[10];return t*(o*f-a*u)-n*(r*f-a*c)+s*(r*u-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],g=e[9],m=e[10],v=e[11],b=e[12],E=e[13],l=e[14],h=e[15],d=t*a-n*o,x=t*c-s*o,p=t*u-r*o,_=n*c-s*a,S=n*u-r*a,T=s*u-r*c,y=f*E-g*b,M=f*l-m*b,w=f*h-v*b,A=g*l-m*E,C=g*h-v*E,I=m*h-v*l,R=d*I-x*C+p*A+_*w-S*M+T*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=(a*I-c*C+u*A)*L,e[1]=(s*C-n*I-r*A)*L,e[2]=(E*T-l*S+h*_)*L,e[3]=(m*S-g*T-v*_)*L,e[4]=(c*w-o*I-u*M)*L,e[5]=(t*I-s*w+r*M)*L,e[6]=(l*p-b*T-h*x)*L,e[7]=(f*T-m*p+v*x)*L,e[8]=(o*C-a*w+u*y)*L,e[9]=(n*w-t*C-r*y)*L,e[10]=(b*S-E*p+h*d)*L,e[11]=(g*p-f*S-v*d)*L,e[12]=(a*M-o*A-c*y)*L,e[13]=(t*A-n*M+s*y)*L,e[14]=(E*x-b*_-l*d)*L,e[15]=(f*_-g*x+m*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,f=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,f*a+n,f*c-s*o,0,u*c-s*a,f*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,f=o+o,g=a+a,m=r*u,v=r*f,b=r*g,E=o*f,l=o*g,h=a*g,d=c*u,x=c*f,p=c*g,_=n.x,S=n.y,T=n.z;return s[0]=(1-(E+h))*_,s[1]=(v+p)*_,s[2]=(b-x)*_,s[3]=0,s[4]=(v-p)*S,s[5]=(1-(m+h))*S,s[6]=(l+d)*S,s[7]=0,s[8]=(b+x)*T,s[9]=(l-d)*T,s[10]=(1-(m+E))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Hr.set(s[0],s[1],s[2]).length(),a=Hr.set(s[4],s[5],s[6]).length(),c=Hr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Oi.copy(this);let u=1/o,f=1/a,g=1/c;return Oi.elements[0]*=u,Oi.elements[1]*=u,Oi.elements[2]*=u,Oi.elements[4]*=f,Oi.elements[5]*=f,Oi.elements[6]*=f,Oi.elements[8]*=g,Oi.elements[9]*=g,Oi.elements[10]*=g,t.setFromRotationMatrix(Oi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Vi,c=!1){let u=this.elements,f=2*r/(t-e),g=2*r/(n-s),m=(t+e)/(t-e),v=(n+s)/(n-s),b,E;if(c)b=r/(o-r),E=o*r/(o-r);else if(a===Vi)b=-(o+r)/(o-r),E=-2*o*r/(o-r);else if(a===so)b=-o/(o-r),E=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=g,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=b,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Vi,c=!1){let u=this.elements,f=2/(t-e),g=2/(n-s),m=-(t+e)/(t-e),v=-(n+s)/(n-s),b,E;if(c)b=1/(o-r),E=o/(o-r);else if(a===Vi)b=-2/(o-r),E=-(o+r)/(o-r);else if(a===so)b=-1/(o-r),E=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=g,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=b,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vc.prototype.isMatrix4=!0;var Ke=Vc,Hr=new k,Oi=new Ke,T1=new k(0,0,0),w1=new k(1,1,1),Ls=new k,Pl=new k,mi=new k,i0=new Ke,s0=new mn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],f=s[9],g=s[2],m=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,v),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return i0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return s0.setFromEuler(this),this.setFromQuaternion(s0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A1=0,r0=new k,Vr=new mn,ms=new Ke,Il=new k,ta=new k,R1=new k,C1=new mn,o0=new k(1,0,0),a0=new k(0,1,0),l0=new k(0,0,1),c0={type:"added"},P1={type:"removed"},Gr={type:"childadded",child:null},wh={type:"childremoved",child:null},An=class i extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new $n,n=new mn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new gt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(o0,e)}rotateY(e){return this.rotateOnAxis(a0,e)}rotateZ(e){return this.rotateOnAxis(l0,e)}translateOnAxis(e,t){return r0.copy(e).applyQuaternion(this.quaternion),this.position.add(r0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(o0,e)}translateY(e){return this.translateOnAxis(a0,e)}translateZ(e){return this.translateOnAxis(l0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Il.copy(e):Il.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(ta,Il,this.up):ms.lookAt(Il,ta,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),Vr.setFromRotationMatrix(ms),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c0),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(P1),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c0),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,R1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,C1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){let g=c[u];r(e.shapes,g)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),g=o(e.shapes),m=o(e.skeletons),v=o(e.animations),b=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=s,n;function o(a){let c=[];for(let u in a){let f=a[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};An.DEFAULT_UP=new k(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},I1={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let E of e.hand.values()){let l=t.getJointPose(E,n),h=this._getHandJoint(u,E);l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=l.radius),h.visible=l!==null}let f=u.joints["index-finger-tip"],g=u.joints["thumb-tip"],m=f.position.distanceTo(g.position),v=.02,b=.005;u.inputState.pinching&&m>v+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=v-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Ah(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Pt.workingColorSpace){if(e=b1(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ah(o,r,e+1/3),this.g=Ah(o,r,e),this.b=Ah(o,r,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=xp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Pt.workingToColorSpace(Yn.copy(this),e),Math.round(At(Yn.r*255,0,255))*65536+Math.round(At(Yn.g*255,0,255))*256+Math.round(At(Yn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Yn.copy(this),t);let n=Yn.r,s=Yn.g,r=Yn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,u,f=(a+o)/2;if(a===o)c=0,u=0;else{let g=o-a;switch(u=f<=.5?g/(o+a):g/(2-o-a),o){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=Gt){Pt.workingToColorSpace(Yn.copy(this),e);let t=Yn.r,n=Yn.g,s=Yn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(Ll);let n=bh(Ds.h,Ll.h,t),s=bh(Ds.s,Ll.s,t),r=bh(Ds.l,Ll.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yn=new ve;ve.NAMES=xp;var va=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zi=new k,gs=new k,Rh=new k,vs=new k,Wr=new k,Xr=new k,u0=new k,Ch=new k,Ph=new k,Ih=new k,Lh=new mt,Dh=new mt,Nh=new mt,Bs=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zi.subVectors(e,t),s.cross(zi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zi.subVectors(s,t),gs.subVectors(n,t),Rh.subVectors(e,t);let o=zi.dot(zi),a=zi.dot(gs),c=zi.dot(Rh),u=gs.dot(gs),f=gs.dot(Rh),g=o*u-a*a;if(g===0)return r.set(0,0,0),null;let m=1/g,v=(u*c-a*f)*m,b=(o*f-a*c)*m;return r.set(1-v-b,b,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vs)===null?!1:vs.x>=0&&vs.y>=0&&vs.x+vs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,vs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vs.x),c.addScaledVector(o,vs.y),c.addScaledVector(a,vs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Lh.setScalar(0),Dh.setScalar(0),Nh.setScalar(0),Lh.fromBufferAttribute(e,t),Dh.fromBufferAttribute(e,n),Nh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Lh,r.x),o.addScaledVector(Dh,r.y),o.addScaledVector(Nh,r.z),o}static isFrontFacing(e,t,n,s){return zi.subVectors(n,t),gs.subVectors(e,t),zi.cross(gs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),zi.cross(gs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Wr.subVectors(s,n),Xr.subVectors(r,n),Ch.subVectors(e,n);let c=Wr.dot(Ch),u=Xr.dot(Ch);if(c<=0&&u<=0)return t.copy(n);Ph.subVectors(e,s);let f=Wr.dot(Ph),g=Xr.dot(Ph);if(f>=0&&g<=f)return t.copy(s);let m=c*g-f*u;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Wr,o);Ih.subVectors(e,r);let v=Wr.dot(Ih),b=Xr.dot(Ih);if(b>=0&&v<=b)return t.copy(r);let E=v*u-c*b;if(E<=0&&u>=0&&b<=0)return a=u/(u-b),t.copy(n).addScaledVector(Xr,a);let l=f*b-v*g;if(l<=0&&g-f>=0&&v-b>=0)return u0.subVectors(r,s),a=(g-f)/(g-f+(v-b)),t.copy(s).addScaledVector(u0,a);let h=1/(l+E+m);return o=E*h,a=m*h,t.copy(n).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ki):ki.fromBufferAttribute(r,o),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dl.copy(n.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Nl.subVectors(this.max,na),qr.subVectors(e.a,na),Yr.subVectors(e.b,na),Zr.subVectors(e.c,na),Ns.subVectors(Yr,qr),Us.subVectors(Zr,Yr),lr.subVectors(qr,Zr);let t=[0,-Ns.z,Ns.y,0,-Us.z,Us.y,0,-lr.z,lr.y,Ns.z,0,-Ns.x,Us.z,0,-Us.x,lr.z,0,-lr.x,-Ns.y,Ns.x,0,-Us.y,Us.x,0,-lr.y,lr.x,0];return!Uh(t,qr,Yr,Zr,Nl)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,qr,Yr,Zr,Nl))?!1:(Ul.crossVectors(Ns,Us),t=[Ul.x,Ul.y,Ul.z],Uh(t,qr,Yr,Zr,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xs=[new k,new k,new k,new k,new k,new k,new k,new k],ki=new k,Dl=new ui,qr=new k,Yr=new k,Zr=new k,Ns=new k,Us=new k,lr=new k,na=new k,Nl=new k,Ul=new k,cr=new k;function Uh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cr.fromArray(i,r);let a=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),c=e.dot(cr),u=t.dot(cr),f=n.dot(cr);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>a)return!1}return!0}var Tn=new k,Fl=new Pe,L1=0,St=class extends ss{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dp,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ea(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ea(t,this.array)),t}setX(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ea(t,this.array)),t}setY(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ea(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ea(t,this.array)),t}setW(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),n=ci(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),n=ci(n,this.array),s=ci(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),n=ci(n,this.array),s=ci(s,this.array),r=ci(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var xa=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ya=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},D1=new ui,ia=new k,Fh=new k,hi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):D1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ia,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Fh)),this.expandByPoint(ia.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},N1=0,Ai=new Ke,Bh=new An,$r=new k,gi=new ui,sa=new ui,Fn=new k,vt=class i extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y1(e)?ya:xa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,n){return Ai.makeTranslation(e,t,n),this.applyMatrix4(Ai),this}scale(e,t,n){return Ai.makeScale(e,t,n),this.applyMatrix4(Ai),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Fn.addVectors(gi.min,sa.min),gi.expandByPoint(Fn),Fn.addVectors(gi.max,sa.max),gi.expandByPoint(Fn)):(gi.expandByPoint(sa.min),gi.expandByPoint(sa.max))}gi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Fn.fromBufferAttribute(a,u),c&&($r.fromBufferAttribute(e,u),Fn.add($r)),s=Math.max(s,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new St(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new k,c[y]=new k;let u=new k,f=new k,g=new k,m=new Pe,v=new Pe,b=new Pe,E=new k,l=new k;function h(y,M,w){u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,M),g.fromBufferAttribute(n,w),m.fromBufferAttribute(r,y),v.fromBufferAttribute(r,M),b.fromBufferAttribute(r,w),f.sub(u),g.sub(u),v.sub(m),b.sub(m);let A=1/(v.x*b.y-b.x*v.y);isFinite(A)&&(E.copy(f).multiplyScalar(b.y).addScaledVector(g,-v.y).multiplyScalar(A),l.copy(g).multiplyScalar(v.x).addScaledVector(f,-b.x).multiplyScalar(A),a[y].add(E),a[M].add(E),a[w].add(E),c[y].add(l),c[M].add(l),c[w].add(l))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let y=0,M=d.length;y<M;++y){let w=d[y],A=w.start,C=w.count;for(let I=A,R=A+C;I<R;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new k,p=new k,_=new k,S=new k;function T(y){_.fromBufferAttribute(s,y),S.copy(_);let M=a[y];x.copy(M),x.sub(_.multiplyScalar(_.dot(M))).normalize(),p.crossVectors(S,M);let A=p.dot(c[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,A)}for(let y=0,M=d.length;y<M;++y){let w=d[y],A=w.start,C=w.count;for(let I=A,R=A+C;I<R;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,u=new k,f=new k,g=new k;if(e)for(let m=0,v=e.count;m<v;m+=3){let b=e.getX(m+0),E=e.getX(m+1),l=e.getX(m+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,l),f.subVectors(o,r),g.subVectors(s,r),f.cross(g),a.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,l),a.add(f),c.add(f),u.add(f),n.setXYZ(b,a.x,a.y,a.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(l,u.x,u.y,u.z)}else for(let m=0,v=t.count;m<v;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,r),g.subVectors(s,r),f.cross(g),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(a,c){let u=a.array,f=a.itemSize,g=a.normalized,m=new u.constructor(c.length*f),v=0,b=0;for(let E=0,l=c.length;E<l;E++){a.isInterleavedBufferAttribute?v=c[E]*a.data.stride+a.offset:v=c[E]*f;for(let h=0;h<f;h++)m[b++]=u[v++]}return new St(m,f,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],u=e(c,n);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let c=[],u=r[a];for(let f=0,g=u.length;f<g;f++){let m=u[f],v=e(m,n);c.push(v)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],f=[];for(let g=0,m=u.length;g<m;g++){let v=u[g];f.push(v.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let f=s[u];this.setAttribute(u,f.clone(t))}let r=e.morphAttributes;for(let u in r){let f=[],g=r[u];for(let m=0,v=g.length;m<v;m++)f.push(g[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,f=o.length;u<f;u++){let g=o[u];this.addGroup(g.start,g.count,g.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Oh=new k,U1=new k,F1=new gt,Hi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Oh.subVectors(n,t).cross(U1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Oh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||F1.getNormalMatrix(e),s=this.coplanarPoint(Oh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},B1=0,rs=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=So(),this.name="",this.type="Material",this.blending=_o,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cf,this.blendDst=uf,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ic,this.stencilZFail=ic,this.stencilZPass=ic,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ys=new k,zh=new k,Bl=new k,Ol=new k,co=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ys)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ys.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ys.copy(this.origin).addScaledVector(this.direction,t),ys.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zh.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Ol.copy(this.origin).sub(zh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Bl),a=Ol.dot(this.direction),c=-Ol.dot(Bl),u=Ol.lengthSq(),f=Math.abs(1-o*o),g,m,v,b;if(f>0)if(g=o*c-a,m=o*a-c,b=r*f,g>=0)if(m>=-b)if(m<=b){let E=1/f;g*=E,m*=E,v=g*(g+o*m+2*a)+m*(o*g+m+2*c)+u}else m=r,g=Math.max(0,-(o*m+a)),v=-g*g+m*(m+2*c)+u;else m=-r,g=Math.max(0,-(o*m+a)),v=-g*g+m*(m+2*c)+u;else m<=-b?(g=Math.max(0,-(-o*r+a)),m=g>0?-r:Math.min(Math.max(-r,-c),r),v=-g*g+m*(m+2*c)+u):m<=b?(g=0,m=Math.min(Math.max(-r,-c),r),v=m*(m+2*c)+u):(g=Math.max(0,-(o*r+a)),m=g>0?r:Math.min(Math.max(-r,-c),r),v=-g*g+m*(m+2*c)+u);else m=o>0?-r:r,g=Math.max(0,-(o*m+a)),v=-g*g+m*(m+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(zh).addScaledVector(Bl,m),v}intersectSphere(e,t){if(e.radius<0)return null;ys.subVectors(e.center,this.origin);let n=ys.dot(this.direction),s=ys.dot(ys)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,u=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),f>=0?(r=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(r=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(e.min.z-m.z)*g,c=(e.max.z-m.z)*g):(a=(e.max.z-m.z)*g,c=(e.min.z-m.z)*g),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ys)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,u=a.y,f=a.z,g=e.x-o.x,m=e.y-o.y,v=e.z-o.z,b=t.x-o.x,E=t.y-o.y,l=t.z-o.z,h=n.x-o.x,d=n.y-o.y,x=n.z-o.z,p=Math.abs(c),_=Math.abs(u),S=Math.abs(f),T,y,M,w,A,C,I,R,L,U,O,V;if(p>=_&&p>=S?(M=c,C=g,L=b,V=h,c>=0?(T=u,y=f,w=m,A=v,I=E,R=l,U=d,O=x):(T=f,y=u,w=v,A=m,I=l,R=E,U=x,O=d)):_>=S?(M=u,C=m,L=E,V=d,u>=0?(T=f,y=c,w=v,A=g,I=l,R=b,U=x,O=h):(T=c,y=f,w=g,A=v,I=b,R=l,U=h,O=x)):(M=f,C=v,L=l,V=x,f>=0?(T=c,y=u,w=g,A=m,I=b,R=E,U=h,O=d):(T=u,y=c,w=m,A=g,I=E,R=b,U=d,O=h)),M===0)return null;let D=T/M,H=y/M,z=1/M,$=w-D*C,ae=A-H*C,He=I-D*L,we=R-H*L,De=U-D*V,K=O-H*V,X=De*we-K*He,ge=$*K-ae*De,Ie=He*ae-we*$;if(s){if(X<0||ge<0||Ie<0)return null}else if((X<0||ge<0||Ie<0)&&(X>0||ge>0||Ie>0))return null;let Ee=X+ge+Ie;if(Ee===0)return null;let Me=z*(X*C+ge*L+Ie*V);return(Ee>0?Me<0:Me>0)?null:this.at(Me/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gn=class extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},h0=new Ke,ur=new co,zl=new hi,f0=new k,kl=new k,Hl=new k,Vl=new k,kh=new k,Gl=new k,d0=new k,Wl=new k,ut=class extends An{constructor(e=new vt,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Gl.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let f=a[c],g=r[c];f!==0&&(kh.fromBufferAttribute(g,e),o?Gl.addScaledVector(kh,f):Gl.addScaledVector(kh.sub(t),f))}t.add(Gl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zl.copy(n.boundingSphere),zl.applyMatrix4(r),ur.copy(e.ray).recast(e.near),!(zl.containsPoint(ur.origin)===!1&&(ur.intersectSphere(zl,f0)===null||ur.origin.distanceToSquared(f0)>(e.far-e.near)**2))&&(h0.copy(r).invert(),ur.copy(e.ray).applyMatrix4(h0),!(n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,g=r.attributes.normal,m=r.groups,v=r.drawRange;if(a!==null)if(Array.isArray(o))for(let b=0,E=m.length;b<E;b++){let l=m[b],h=o[l.materialIndex],d=Math.max(l.start,v.start),x=Math.min(a.count,Math.min(l.start+l.count,v.start+v.count));for(let p=d,_=x;p<_;p+=3){let S=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);s=Xl(this,h,e,n,u,f,g,S,T,y),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let b=Math.max(0,v.start),E=Math.min(a.count,v.start+v.count);for(let l=b,h=E;l<h;l+=3){let d=a.getX(l),x=a.getX(l+1),p=a.getX(l+2);s=Xl(this,o,e,n,u,f,g,d,x,p),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let b=0,E=m.length;b<E;b++){let l=m[b],h=o[l.materialIndex],d=Math.max(l.start,v.start),x=Math.min(c.count,Math.min(l.start+l.count,v.start+v.count));for(let p=d,_=x;p<_;p+=3){let S=p,T=p+1,y=p+2;s=Xl(this,h,e,n,u,f,g,S,T,y),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=l.materialIndex,t.push(s))}}else{let b=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let l=b,h=E;l<h;l+=3){let d=l,x=l+1,p=l+2;s=Xl(this,o,e,n,u,f,g,d,x,p),s&&(s.faceIndex=Math.floor(l/3),t.push(s))}}}};function O1(i,e,t,n,s,r,o,a){let c;if(e.side===Vn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===as,a),c===null)return null;Wl.copy(a),Wl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Wl);return u<t.near||u>t.far?null:{distance:u,point:Wl.clone(),object:i}}function Xl(i,e,t,n,s,r,o,a,c,u){i.getVertexPosition(a,kl),i.getVertexPosition(c,Hl),i.getVertexPosition(u,Vl);let f=O1(i,e,t,n,kl,Hl,Vl,d0);if(f){let g=new k;Bs.getBarycoord(d0,kl,Hl,Vl,g),s&&(f.uv=Bs.getInterpolatedAttribute(s,a,c,u,g,new Pe)),r&&(f.uv1=Bs.getInterpolatedAttribute(r,a,c,u,g,new Pe)),o&&(f.normal=Bs.getInterpolatedAttribute(o,a,c,u,g,new k),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let m={a,b:c,c:u,normal:new k,materialIndex:0};Bs.getNormal(kl,Hl,Vl,m.normal),f.face=m,f.barycoord=g}return f}var Gi=class extends Zn{constructor(e=null,t=1,n=1,s,r,o,a,c,u=wn,f=wn,g,m){super(null,o,a,c,u,f,s,r,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Kr=new Ke,p0=new Ke,ql=[],m0=new ui,z1=new Ke,ra=new ut,oa=new hi,Wi=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,z1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),m0.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(m0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),oa.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Kr),p0.multiplyMatrices(n,Kr),ra.matrixWorld=p0,ra.raycast(e,ql);for(let o=0,a=ql.length;o<a;o++){let c=ql[o];c.instanceId=r,c.object=this,t.push(c)}ql.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gi(new Float32Array(s*this.count),s,this.count,Xs,Ci));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hr=new hi,k1=new Pe(.5,.5),Yl=new k,uo=class{constructor(e=new Hi,t=new Hi,n=new Hi,s=new Hi,r=new Hi,o=new Hi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],f=r[4],g=r[5],m=r[6],v=r[7],b=r[8],E=r[9],l=r[10],h=r[11],d=r[12],x=r[13],p=r[14],_=r[15];if(s[0].setComponents(u-o,v-f,h-b,_-d).normalize(),s[1].setComponents(u+o,v+f,h+b,_+d).normalize(),s[2].setComponents(u+a,v+g,h+E,_+x).normalize(),s[3].setComponents(u-a,v-g,h-E,_-x).normalize(),n)s[4].setComponents(c,m,l,p).normalize(),s[5].setComponents(u-c,v-m,h-l,_-p).normalize();else if(s[4].setComponents(u-c,v-m,h-l,_-p).normalize(),t===Vi)s[5].setComponents(u+c,v+m,h+l,_+p).normalize();else if(t===so)s[5].setComponents(c,m,l,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);let t=k1.distanceTo(e.center);return hr.radius=.7071067811865476+t,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yl.x=s.normal.x>0?e.max.x:e.min.x,Yl.y=s.normal.y>0?e.max.y:e.min.y,Yl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vc=class extends rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xc=new k,yc=new k,g0=new Ke,aa=new co,Zl=new hi,Hh=new k,v0=new k,_a=class extends An{constructor(e=new vt,t=new vc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xc.fromBufferAttribute(t,s-1),yc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xc.distanceTo(yc);e.setAttribute("lineDistance",new Ye(n,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(s),Zl.radius+=r,e.ray.intersectsSphere(Zl)===!1)return;g0.copy(s).invert(),aa.copy(e.ray).applyMatrix4(g0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){let v=Math.max(0,o.start),b=Math.min(f.count,o.start+o.count);for(let E=v,l=b-1;E<l;E+=u){let h=f.getX(E),d=f.getX(E+1),x=$l(this,e,aa,c,h,d,E);x&&t.push(x)}if(this.isLineLoop){let E=f.getX(b-1),l=f.getX(v),h=$l(this,e,aa,c,E,l,b-1);h&&t.push(h)}}else{let v=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let E=v,l=b-1;E<l;E+=u){let h=$l(this,e,aa,c,E,E+1,E);h&&t.push(h)}if(this.isLineLoop){let E=$l(this,e,aa,c,b-1,v,b-1);E&&t.push(E)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $l(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(xc.fromBufferAttribute(a,s),yc.fromBufferAttribute(a,r),t.distanceSqToSegment(xc,yc,Hh,v0)>n)return;Hh.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Hh);if(!(u<e.near||u>e.far))return{distance:u,point:v0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ho=class extends rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},x0=new Ke,Jh=new co,Kl=new hi,Jl=new k,ba=class extends An{constructor(e=new vt,t=new ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(s),Kl.radius+=r,e.ray.intersectsSphere(Kl)===!1)return;x0.copy(s).invert(),Jh.copy(e.ray).applyMatrix4(x0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,g=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let b=m,E=v;b<E;b++){let l=u.getX(b);Jl.fromBufferAttribute(g,l),y0(Jl,l,c,s,e,t,this)}}else{let m=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let b=m,E=v;b<E;b++)Jl.fromBufferAttribute(g,b),y0(Jl,b,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function y0(i,e,t,n,s,r,o){let a=Jh.distanceSqToPoint(i);if(a<t){let c=new k;Jh.closestPointToPoint(i,c),c.applyMatrix4(n);let u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ma=class extends Zn{constructor(e=[],t=Gs,n,s,r,o,a,c,u,f){super(e,t,n,s,r,o,a,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ni=class extends Zn{constructor(e,t,n,s,r,o,a,c,u){super(e,t,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Os=class extends Zn{constructor(e,t,n=Yi,s,r,o,a=wn,c=wn,u,f=is,g=1){if(f!==is&&f!==Ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:g};super(m,s,r,o,a,c,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ao(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_c=class extends Os{constructor(e,t=Yi,n=Gs,s,r,o=wn,a=wn,c,u=is){let f={width:e,height:e,depth:1},g=[f,f,f,f,f,f];super(e,e,t,n,s,r,o,a,c,u),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sa=class extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Kt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],u=[],f=[],g=[],m=0,v=0;b("z","y","x",-1,-1,n,t,e,o,r,0),b("z","y","x",1,-1,n,t,-e,o,r,1),b("x","z","y",1,1,e,n,t,s,o,2),b("x","z","y",1,-1,e,n,-t,s,o,3),b("x","y","z",1,-1,e,t,n,s,r,4),b("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(g,2));function b(E,l,h,d,x,p,_,S,T,y,M){let w=p/T,A=_/y,C=p/2,I=_/2,R=S/2,L=T+1,U=y+1,O=0,V=0,D=new k;for(let H=0;H<U;H++){let z=H*A-I;for(let $=0;$<L;$++){let ae=$*w-C;D[E]=ae*d,D[l]=z*x,D[h]=R,u.push(D.x,D.y,D.z),D[E]=0,D[l]=0,D[h]=S>0?1:-1,f.push(D.x,D.y,D.z),g.push($/T),g.push(1-H/y),O+=1}}for(let H=0;H<y;H++)for(let z=0;z<T;z++){let $=m+z+L*H,ae=m+z+L*(H+1),He=m+(z+1)+L*(H+1),we=m+(z+1)+L*H;c.push($,ae,we),c.push(ae,He,we),V+=6}a.addGroup(v,V,M),v+=V,m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var pr=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],u=new k,f=new Pe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let g=0,m=3;g<=t;g++,m+=3){let v=n+g/t*s;u.x=e*Math.cos(v),u.y=e*Math.sin(v),o.push(u.x,u.y,u.z),a.push(0,0,1),f.x=(o[m]/e+1)/2,f.y=(o[m+1]/e+1)/2,c.push(f.x,f.y)}for(let g=1;g<=t;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ri=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let f=[],g=[],m=[],v=[],b=0,E=[],l=n/2,h=0;d(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(v,2));function d(){let p=new k,_=new k,S=0,T=(t-e)/n;for(let y=0;y<=r;y++){let M=[],w=y/r,A=w*(t-e)+e;for(let C=0;C<=s;C++){let I=C/s,R=I*c+a,L=Math.sin(R),U=Math.cos(R);_.x=A*L,_.y=-w*n+l,_.z=A*U,g.push(_.x,_.y,_.z),p.set(L,T,U).normalize(),m.push(p.x,p.y,p.z),v.push(I,1-w),M.push(b++)}E.push(M)}for(let y=0;y<s;y++)for(let M=0;M<r;M++){let w=E[M][y],A=E[M+1][y],C=E[M+1][y+1],I=E[M][y+1];(e>0||M!==0)&&(f.push(w,A,I),S+=3),(t>0||M!==r-1)&&(f.push(A,C,I),S+=3)}u.addGroup(h,S,0),h+=S}function x(p){let _=b,S=new Pe,T=new k,y=0,M=p===!0?e:t,w=p===!0?1:-1;for(let C=1;C<=s;C++)g.push(0,l*w,0),m.push(0,w,0),v.push(.5,.5),b++;let A=b;for(let C=0;C<=s;C++){let R=C/s*c+a,L=Math.cos(R),U=Math.sin(R);T.x=M*U,T.y=l*w,T.z=M*L,g.push(T.x,T.y,T.z),m.push(0,w,0),S.x=L*.5+.5,S.y=U*.5*w+.5,v.push(S.x,S.y),b++}for(let C=0;C<s;C++){let I=_+C,R=A+C;p===!0?f.push(R,R+1,I):f.push(R+1,R,I),y+=3}u.addGroup(h,y,p===!0?1:2),h+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var bc=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),u(n),f(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(d){let x=new k,p=new k,_=new k;for(let S=0;S<t.length;S+=3)v(t[S+0],x),v(t[S+1],p),v(t[S+2],_),c(x,p,_,d)}function c(d,x,p,_){let S=_+1,T=[];for(let y=0;y<=S;y++){T[y]=[];let M=d.clone().lerp(p,y/S),w=x.clone().lerp(p,y/S),A=S-y;for(let C=0;C<=A;C++)C===0&&y===S?T[y][C]=M:T[y][C]=M.clone().lerp(w,C/A)}for(let y=0;y<S;y++)for(let M=0;M<2*(S-y)-1;M++){let w=Math.floor(M/2);M%2===0?(m(T[y][w+1]),m(T[y+1][w]),m(T[y][w])):(m(T[y][w+1]),m(T[y+1][w+1]),m(T[y+1][w]))}}function u(d){let x=new k;for(let p=0;p<r.length;p+=3)x.x=r[p+0],x.y=r[p+1],x.z=r[p+2],x.normalize().multiplyScalar(d),r[p+0]=x.x,r[p+1]=x.y,r[p+2]=x.z}function f(){let d=new k;for(let x=0;x<r.length;x+=3){d.x=r[x+0],d.y=r[x+1],d.z=r[x+2];let p=l(d)/2/Math.PI+.5,_=h(d)/Math.PI+.5;o.push(p,1-_)}b(),g()}function g(){for(let d=0;d<o.length;d+=6){let x=o[d+0],p=o[d+2],_=o[d+4],S=Math.max(x,p,_),T=Math.min(x,p,_);S>.9&&T<.1&&(x<.2&&(o[d+0]+=1),p<.2&&(o[d+2]+=1),_<.2&&(o[d+4]+=1))}}function m(d){r.push(d.x,d.y,d.z)}function v(d,x){let p=d*3;x.x=e[p+0],x.y=e[p+1],x.z=e[p+2]}function b(){let d=new k,x=new k,p=new k,_=new k,S=new Pe,T=new Pe,y=new Pe;for(let M=0,w=0;M<r.length;M+=9,w+=6){d.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),p.set(r[M+6],r[M+7],r[M+8]),S.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),y.set(o[w+4],o[w+5]),_.copy(d).add(x).add(p).divideScalar(3);let A=l(_);E(S,w+0,d,A),E(T,w+2,x,A),E(y,w+4,p,A)}}function E(d,x,p,_){_<0&&d.x===1&&(o[x]=d.x-1),p.x===0&&p.z===0&&(o[x]=_/2/Math.PI+.5)}function l(d){return Math.atan2(d.z,-d.x)}function h(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ct("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let f=n[s],m=n[s+1]-f,v=(o-f)/m;return(s+v)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Pe:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new Ke;for(let v=0;v<=e;v++){let b=v/e;s[v]=this.getTangentAt(b,new k)}r[0]=new k,o[0]=new k;let u=Number.MAX_VALUE,f=Math.abs(s[0].x),g=Math.abs(s[0].y),m=Math.abs(s[0].z);f<=u&&(u=f,n.set(1,0,0)),g<=u&&(u=g,n.set(0,1,0)),m<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let v=1;v<=e;v++){if(r[v]=r[v-1].clone(),o[v]=o[v-1].clone(),a.crossVectors(s[v-1],s[v]),a.length()>Number.EPSILON){a.normalize();let b=Math.acos(At(s[v-1].dot(s[v]),-1,1));r[v].applyMatrix4(c.makeRotationAxis(a,b))}o[v].crossVectors(s[v],r[v])}if(t===!0){let v=Math.acos(At(r[0].dot(r[e]),-1,1));v/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(v=-v);for(let b=1;b<=e;b++)r[b].applyMatrix4(c.makeRotationAxis(s[b],v*b)),o[b].crossVectors(s[b],r[b])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fo=class extends vi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),g=Math.sin(this.aRotation),m=c-this.aX,v=u-this.aY;c=m*f-v*g+this.aX,u=m*g+v*f+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mc=class extends fo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Af(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,u){s(o,a,u*(a-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,u,f,g){let m=(o-r)/u-(a-r)/(u+f)+(a-o)/f,v=(a-o)/f-(c-o)/(f+g)+(c-a)/g;m*=f,v*=f,s(o,a,m,v)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var _0=new k,b0=new k,Vh=new Af,Gh=new Af,Wh=new Af,Sc=class extends vi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,f;this.closed||a>0?u=s[(a-1)%r]:(b0.subVectors(s[0],s[1]).add(s[0]),u=b0);let g=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(_0.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=_0),this.curveType==="centripetal"||this.curveType==="chordal"){let v=this.curveType==="chordal"?.5:.25,b=Math.pow(u.distanceToSquared(g),v),E=Math.pow(g.distanceToSquared(m),v),l=Math.pow(m.distanceToSquared(f),v);E<1e-4&&(E=1),b<1e-4&&(b=E),l<1e-4&&(l=E),Vh.initNonuniformCatmullRom(u.x,g.x,m.x,f.x,b,E,l),Gh.initNonuniformCatmullRom(u.y,g.y,m.y,f.y,b,E,l),Wh.initNonuniformCatmullRom(u.z,g.z,m.z,f.z,b,E,l)}else this.curveType==="catmullrom"&&(Vh.initCatmullRom(u.x,g.x,m.x,f.x,this.tension),Gh.initCatmullRom(u.y,g.y,m.y,f.y,this.tension),Wh.initCatmullRom(u.z,g.z,m.z,f.z,this.tension));return n.set(Vh.calc(c),Gh.calc(c),Wh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function M0(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function H1(i,e){let t=1-i;return t*t*e}function V1(i,e){return 2*(1-i)*i*e}function G1(i,e){return i*i*e}function ca(i,e,t,n){return H1(i,e)+V1(i,t)+G1(i,n)}function W1(i,e){let t=1-i;return t*t*t*e}function X1(i,e){let t=1-i;return 3*t*t*i*e}function q1(i,e){return 3*(1-i)*i*i*e}function Y1(i,e){return i*i*i*e}function ua(i,e,t,n,s){return W1(i,e)+X1(i,t)+q1(i,n)+Y1(i,s)}var Ea=class extends vi{constructor(e=new Pe,t=new Pe,n=new Pe,s=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ua(e,s.x,r.x,o.x,a.x),ua(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ec=class extends vi{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ua(e,s.x,r.x,o.x,a.x),ua(e,s.y,r.y,o.y,a.y),ua(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ta=class extends vi{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends vi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends vi{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ca(e,s.x,r.x,o.x),ca(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wc=class extends vi{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ca(e,s.x,r.x,o.x),ca(e,s.y,r.y,o.y),ca(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],u=s[o],f=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return n.set(M0(a,c.x,u.x,f.x,g.x),M0(a,c.y,u.y,f.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Pe().fromArray(s))}return this}},S0=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Sc,CubicBezierCurve:Ea,CubicBezierCurve3:Ec,EllipseCurve:fo,LineCurve:Ta,LineCurve3:Tc,QuadraticBezierCurve:wa,QuadraticBezierCurve3:wc,SplineCurve:Aa}),Ac=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new S0[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){let f=c[u];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new S0[s.type]().fromJSON(s))}return this}},Ra=class extends Ac{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ta(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new wa(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ea(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Aa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let u=new fo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let g=u.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(u);let f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},po=class extends Ra{constructor(e){super(e),this.uuid=So(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ra().fromJSON(s))}return this}};function Z1(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=yp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,u;if(n&&(r=Q1(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let f=a,g=c;for(let m=t;m<s;m+=t){let v=i[m],b=i[m+1];v<a&&(a=v),b<c&&(c=b),v>f&&(f=v),b>g&&(g=b)}u=Math.max(f-a,g-c),u=u!==0?32767/u:0}return Ca(r,o,t,a,c,u,0),o}function yp(i,e,t,n,s){let r;if(s===uv(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=E0(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=E0(o/n|0,i[o],i[o+1],r);return r&&mo(r,r.next)&&(Ia(r),r=r.next),r}function mr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(mo(t,t.next)||un(t.prev,t,t.next)===0)){if(Ia(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ca(i,e,t,n,s,r,o){if(!i)return;!o&&r&&sv(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,u=i.next;if(r?K1(i,n,s,r):$1(i)){e.push(c.i,i.i,u.i),Ia(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=J1(mr(i),e),Ca(i,e,t,n,s,r,2)):o===2&&j1(i,e,t,n,s,r):Ca(mr(i),e,t,n,s,r,1);break}}}function $1(i){let e=i.prev,t=i,n=i.next;if(un(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,u=n.y,f=Math.min(s,r,o),g=Math.min(a,c,u),m=Math.max(s,r,o),v=Math.max(a,c,u),b=n.next;for(;b!==e;){if(b.x>=f&&b.x<=m&&b.y>=g&&b.y<=v&&la(s,a,r,c,o,u,b.x,b.y)&&un(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function K1(i,e,t,n){let s=i.prev,r=i,o=i.next;if(un(s,r,o)>=0)return!1;let a=s.x,c=r.x,u=o.x,f=s.y,g=r.y,m=o.y,v=Math.min(a,c,u),b=Math.min(f,g,m),E=Math.max(a,c,u),l=Math.max(f,g,m),h=jh(v,b,e,t,n),d=jh(E,l,e,t,n),x=i.prevZ,p=i.nextZ;for(;x&&x.z>=h&&p&&p.z<=d;){if(x.x>=v&&x.x<=E&&x.y>=b&&x.y<=l&&x!==s&&x!==o&&la(a,f,c,g,u,m,x.x,x.y)&&un(x.prev,x,x.next)>=0||(x=x.prevZ,p.x>=v&&p.x<=E&&p.y>=b&&p.y<=l&&p!==s&&p!==o&&la(a,f,c,g,u,m,p.x,p.y)&&un(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;x&&x.z>=h;){if(x.x>=v&&x.x<=E&&x.y>=b&&x.y<=l&&x!==s&&x!==o&&la(a,f,c,g,u,m,x.x,x.y)&&un(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;p&&p.z<=d;){if(p.x>=v&&p.x<=E&&p.y>=b&&p.y<=l&&p!==s&&p!==o&&la(a,f,c,g,u,m,p.x,p.y)&&un(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function J1(i,e){let t=i;do{let n=t.prev,s=t.next.next;!mo(n,s)&&bp(n,t,t.next,s)&&Pa(n,s)&&Pa(s,n)&&(e.push(n.i,t.i,s.i),Ia(t),Ia(t.next),t=i=s),t=t.next}while(t!==i);return mr(t)}function j1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&av(o,a)){let c=Mp(o,a);o=mr(o,o.next),c=mr(c,c.next),Ca(o,e,t,n,s,r,0),Ca(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Q1(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,u=yp(i,a,c,n,!1);u===u.next&&(u.steiner=!0),s.push(ov(u))}s.sort(ev);for(let r=0;r<s.length;r++)t=tv(s[r],t);return t}function ev(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function tv(i,e){let t=nv(i,e);if(!t)return e;let n=Mp(t,i);return mr(n,n.next),mr(t,t.next)}function nv(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(mo(i,t))return t;do{if(mo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let g=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=n&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,u=o.y,f=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&_p(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){let g=Math.abs(s-t.y)/(n-t.x);Pa(t,i)&&(g<f||g===f&&(t.x>o.x||t.x===o.x&&iv(o,t)))&&(o=t,f=g)}t=t.next}while(t!==a);return o}function iv(i,e){return un(i.prev,i,e.prev)<0&&un(e.next,i,i.next)<0}function sv(i,e,t,n){let s=i;do s.z===0&&(s.z=jh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rv(s)}function rv(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function jh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ov(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _p(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function la(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&_p(i,e,t,n,s,r,o,a)}function av(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!lv(i,e)&&(Pa(i,e)&&Pa(e,i)&&cv(i,e)&&(un(i.prev,i,e.prev)||un(i,e.prev,e))||mo(i,e)&&un(i.prev,i,i.next)>0&&un(e.prev,e,e.next)>0)}function un(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function mo(i,e){return i.x===e.x&&i.y===e.y}function bp(i,e,t,n){let s=Ql(un(i,e,t)),r=Ql(un(i,e,n)),o=Ql(un(t,n,i)),a=Ql(un(t,n,e));return!!(s!==r&&o!==a||s===0&&jl(i,t,e)||r===0&&jl(i,n,e)||o===0&&jl(t,i,n)||a===0&&jl(t,e,n))}function jl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ql(i){return i>0?1:i<0?-1:0}function lv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pa(i,e){return un(i.prev,i,i.next)<0?un(i,e,i.next)>=0&&un(i,i.prev,e)>=0:un(i,e,i.prev)<0||un(i,i.next,e)<0}function cv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mp(i,e){let t=Qh(i.i,i.x,i.y),n=Qh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function E0(i,e,t,n){let s=Qh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ia(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ef=class{static triangulate(e,t,n=2){return Z1(e,t,n)}},no=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];T0(e),w0(n,e);let o=e.length;t.forEach(T0);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,w0(n,t[c]);let a=ef.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function T0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function w0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var La=class i extends bc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var nn=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),u=a+1,f=c+1,g=e/a,m=t/c,v=[],b=[],E=[],l=[];for(let h=0;h<f;h++){let d=h*m-o;for(let x=0;x<u;x++){let p=x*g-r;b.push(p,-d,0),E.push(0,0,1),l.push(x/a),l.push(1-h/c)}}for(let h=0;h<c;h++)for(let d=0;d<a;d++){let x=d+u*h,p=d+u*(h+1),_=d+1+u*(h+1),S=d+1+u*h;v.push(x,p,S),v.push(p,_,S)}this.setIndex(v),this.setAttribute("position",new Ye(b,3)),this.setAttribute("normal",new Ye(E,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Da=class i extends vt{constructor(e=new po([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let f=0;f<e.length;f++)u(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(o,2));function u(f){let g=s.length/3,m=f.extractPoints(t),v=m.shape,b=m.holes;no.isClockWise(v)===!1&&(v=v.reverse());for(let l=0,h=b.length;l<h;l++){let d=b[l];no.isClockWise(d)===!0&&(b[l]=d.reverse())}let E=no.triangulateShape(v,b);for(let l=0,h=b.length;l<h;l++){let d=b[l];v=v.concat(d)}for(let l=0,h=v.length;l<h;l++){let d=v[l];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let l=0,h=E.length;l<h;l++){let d=E[l],x=d[0]+g,p=d[1]+g,_=d[2]+g;n.push(x,p,_),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return hv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function hv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Na=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),u=0,f=[],g=new k,m=new k,v=[],b=[],E=[],l=[];for(let h=0;h<=n;h++){let d=[],x=h/n,p=o+x*a,_=e*Math.cos(p),S=Math.sqrt(e*e-_*_),T=0;h===0&&o===0?T=.5/t:h===n&&c===Math.PI&&(T=-.5/t);for(let y=0;y<=t;y++){let M=y/t,w=s+M*r;g.x=-S*Math.cos(w),g.y=_,g.z=S*Math.sin(w),b.push(g.x,g.y,g.z),m.copy(g).normalize(),E.push(m.x,m.y,m.z),l.push(M+T,1-x),d.push(u++)}f.push(d)}for(let h=0;h<n;h++)for(let d=0;d<t;d++){let x=f[h][d+1],p=f[h][d],_=f[h+1][d],S=f[h+1][d+1];(h!==0||o>0)&&v.push(x,p,S),(h!==n-1||c<Math.PI)&&v.push(p,_,S)}this.setIndex(v),this.setAttribute("position",new Ye(b,3)),this.setAttribute("normal",new Ye(E,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ua=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],f=[],g=[],m=new k,v=new k,b=new k;for(let E=0;E<=n;E++){let l=o+E/n*a;for(let h=0;h<=s;h++){let d=h/s*r;v.x=(e+t*Math.cos(l))*Math.cos(d),v.y=(e+t*Math.cos(l))*Math.sin(d),v.z=t*Math.sin(l),u.push(v.x,v.y,v.z),m.x=e*Math.cos(d),m.y=e*Math.sin(d),b.subVectors(v,m).normalize(),f.push(b.x,b.y,b.z),g.push(h/s),g.push(E/n)}}for(let E=1;E<=n;E++)for(let l=1;l<=s;l++){let h=(s+1)*E+l-1,d=(s+1)*(E-1)+l-1,x=(s+1)*(E-1)+l,p=(s+1)*E+l;c.push(h,d,p),c.push(d,x,p)}this.setIndex(c),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function _r(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(A0(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(A0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jn(i){let e={};for(let t=0;t<i.length;t++){let n=_r(i[t]);for(let s in n)e[s]=n[s]}return e}function A0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}var br={clone:_r,merge:jn},dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dv,this.fragmentShader=pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rc=class extends ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var hn=class extends rs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gr=class extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cc=class extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pc=class extends zs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $h:r=e,a=2*t-n;break;case Kh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $h:o=e,c=2*n-t;break;case Kh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let u=(n-t)*.5,f=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,v=this._weightNext,b=(n-t)/(s-t),E=b*b,l=E*b,h=-m*l+2*m*E-m*b,d=(1+m)*l+(-1.5-2*m)*E+(-.5+m)*b+1,x=(-1-v)*l+(1.5+v)*E+.5*b,p=v*l-v*E;for(let _=0;_!==a;++_)r[_]=h*o[f+_]+d*o[u+_]+x*o[c+_]+p*o[g+_];return r}},Ic=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=(n-t)/(s-t),g=1-f;for(let m=0;m!==a;++m)r[m]=o[u+m]*g+o[c+m]*f;return r}},Lc=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dc=class extends zs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=this.inTangents,g=this.outTangents;if(!f||!g){let b=(n-t)/(s-t),E=1-b;for(let l=0;l!==a;++l)r[l]=o[u+l]*E+o[c+l]*b;return r}let m=a*2,v=e-1;for(let b=0;b!==a;++b){let E=o[u+b],l=o[c+b],h=v*m+b*2,d=g[h],x=g[h+1],p=e*m+b*2,_=f[p],S=f[p+1],T=gv(n,t,d,_,s);r[b]=Sp(T,E,x,S,l)}return r}};function Sp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function mv(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function gv(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Sp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=mv(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var xi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jr(t,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jr(e.times,Array),values:Jr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Xh(e.settings)&&(n.settings={inTangents:Jr(e.settings.inTangents,Array),outTangents:Jr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ha:t=this.InterpolantFactoryMethodDiscrete;break;case dc:t=this.InterpolantFactoryMethodLinear;break;case nc:t=this.InterpolantFactoryMethodSmooth;break;case Yh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ct("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return nc;case this.InterpolantFactoryMethodBezier:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Xh(this.settings)&&(R0(this.settings.inTangents,e),R0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){pt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){pt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&_1(s))for(let a=0,c=s.length;a!==c;++a){let u=s[a];if(isNaN(u)){pt("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===nc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,u=e[a],f=e[a+1];if(u!==f&&(a!==1||u!==e[0]))if(s)c=!0;else{let g=a*n,m=g-n,v=g+n;for(let b=0;b!==n;++b){let E=t[g+b];if(E!==t[m+b]||E!==t[v+b]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let g=a*n,m=o*n;for(let v=0;v!==n;++v)t[m+v]=t[g+v]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Xh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function R0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=dc;var ks=class extends xi{constructor(e,t,n){super(e,t,n)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=ha;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Nc.prototype.ValueTypeName="color";var Uc=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Uc.prototype.ValueTypeName="number";var Fc=class extends zs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),u=e*a;for(let f=u+a;u!==f;u+=4)mn.slerpFlat(r,0,o,u-a,o,u,c);return r}},Fa=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}};Fa.prototype.ValueTypeName="quaternion";Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Hs=class extends xi{constructor(e,t,n){super(e,t,n)}};Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=ha;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}};Bc.prototype.ValueTypeName="vector";var sc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(C0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!C0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function C0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Oc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,g){return u.push(f,g),this},this.removeHandler=function(f){let g=u.indexOf(f);return g!==-1&&u.splice(g,2),this},this.getHandler=function(f){for(let g=0,m=u.length;g<m;g+=2){let v=u[g],b=u[g+1];if(v.global&&(v.lastIndex=0),v.test(f))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ep=new Oc,go=class{constructor(e){this.manager=e!==void 0?e:Ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};go.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=new WeakMap,zc=class extends go{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=sc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let g=jr.get(o);g===void 0&&(g=[],jr.set(o,g)),g.push({onLoad:t,onError:s})}return o}let a=ro("img");function c(){f(),t&&t(this);let g=jr.get(this)||[];for(let m=0;m<g.length;m++){let v=g[m];v.onLoad&&v.onLoad(this)}jr.delete(this),r.manager.itemEnd(e)}function u(g){f(),s&&s(g),sc.remove(`image:${e}`);let m=jr.get(this)||[];for(let v=0;v<m.length;v++){let b=m[v];b.onError&&b.onError(g)}jr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),sc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ba=class extends go{constructor(e){super(e)}load(e,t,n,s){let r=new Zn,o=new zc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},vo=class extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Oa=class extends vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qh=new Ke,P0=new k,I0=new k,za=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;P0.setFromMatrixPosition(e.matrixWorld),t.position.copy(P0),I0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(I0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===so||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ec=new k,tc=new mn,ts=new k,Ms=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ec,tc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,ts.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ec,tc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new k,L0=new Pe,D0=new Pe,Hn=class extends Ms{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_h*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(_h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,L0,D0),t.subVectors(D0,L0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_h*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tf=class extends za{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=pa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ka=class extends vo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Vs=class extends Ms{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nf=class extends za{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xo=class extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new nf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var os=class extends vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Qr=-90,eo=1,kc=class extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(Qr,eo,e,t);s.layers=this.layers,this.add(s);let r=new Hn(Qr,eo,e,t);r.layers=this.layers,this.add(r);let o=new Hn(Qr,eo,e,t);o.layers=this.layers,this.add(o);let a=new Hn(Qr,eo,e,t);a.layers=this.layers,this.add(a);let c=new Hn(Qr,eo,e,t);c.layers=this.layers,this.add(c);let u=new Hn(Qr,eo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let u of t)this.remove(u);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,u,f]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let l=!1;e.isWebGLRenderer===!0?l=e.state.buffers.depth.getReversed():l=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),l&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(g,m,v),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Hc=class extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ha=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vv(){this._document.hidden===!1&&this.reset()}var Cf="\\[\\]\\.:\\/",xv=new RegExp("["+Cf+"]","g"),Pf="[^"+Cf+"]",yv="[^"+Cf.replace("\\.","")+"]",_v=/((?:WC+[\/:])*)/.source.replace("WC",Pf),bv=/(WCOD+)?/.source.replace("WCOD",yv),Mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pf),Sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pf),Ev=new RegExp("^"+_v+bv+Mv+Sv+"$"),Tv=["material","materials","bones","map"],sf=class{constructor(e,t,n){let s=n||tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xv,"")}static parseTrackName(e){let t=Ev.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;pt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tn.Composite=sf;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jM=new Float32Array(1);var Ff=class Ff{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ff.prototype.isMatrix2=!0;var rf=Ff;function If(i,e,t,n){let s=wv(n);switch(t){case Sf:return i*e;case Xs:return i*e/s.components*s.byteLength;case $c:return i*e/s.components*s.byteLength;case qs:return i*e*2/s.components*s.byteLength;case Kc:return i*e*2/s.components*s.byteLength;case Ef:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case Jc:return i*e*4/s.components*s.byteLength;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:case tu:return Math.max(i,16)*Math.max(e,8)/4;case jc:case eu:return Math.max(i,8)*Math.max(e,8)/2;case nu:case iu:case ru:case ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case su:case $a:case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case du:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case gu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _u:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mu:case Su:case Eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tu:case wu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ka:case Au:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wv(i){switch(i){case Kn:case yf:return{byteLength:1,components:1};case bo:case _f:case Rn:return{byteLength:2,components:1};case Yc:case Zc:return{byteLength:2,components:4};case Yi:case qc:case Ci:return{byteLength:4,components:1};case bf:case Mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dv(i){let e=new WeakMap;function t(a,c){let u=a.array,f=a.usage,g=u.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,u,f),a.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:g}}function n(a,c,u){let f=c.array,g=c.updateRanges;if(i.bindBuffer(u,a),g.length===0)i.bufferSubData(u,0,f);else{g.sort((v,b)=>v.start-b.start);let m=0;for(let v=1;v<g.length;v++){let b=g[m],E=g[v];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++m,g[m]=E)}g.length=m+1;for(let v=0,b=g.length;v<b;v++){let E=g[v];i.bufferSubData(u,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var Nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uv=`#ifdef USE_ALPHAHASH
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
#endif`,Fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kv=`#ifdef USE_AOMAP
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
#endif`,Hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vv=`#ifdef USE_BATCHING
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
#endif`,Gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yv=`#ifdef USE_IRIDESCENCE
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
#endif`,Zv=`#ifdef USE_BUMPMAP
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ix=`#define PI 3.141592653589793
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
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rx=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bx=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ix=`PhysicalMaterial material;
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
#endif`,Lx=`uniform sampler2D dfgLUT;
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
}`,Dx=`
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i2=`#ifdef USE_NORMALMAP
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
#endif`,s2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y2=`float getShadowMask() {
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
}`,_2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b2=`#ifdef USE_SKINNING
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
#endif`,M2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,E2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R2=`#ifdef USE_TRANSMISSION
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
#endif`,C2=`#ifdef USE_TRANSMISSION
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
#endif`,P2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U2=`uniform sampler2D t2D;
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
}`,F2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`#include <common>
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
}`,H2=`#if DEPTH_PACKING == 3200
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
}`,V2=`#define DISTANCE
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
}`,G2=`#define DISTANCE
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
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`uniform float scale;
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
}`,Y2=`uniform vec3 diffuse;
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
}`,Z2=`#include <common>
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
}`,$2=`uniform vec3 diffuse;
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
}`,K2=`#define LAMBERT
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
}`,J2=`#define LAMBERT
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
}`,j2=`#define MATCAP
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
}`,Q2=`#define MATCAP
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
}`,ey=`#define NORMAL
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
}`,ty=`#define NORMAL
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
}`,ny=`#define PHONG
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
}`,iy=`#define PHONG
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
}`,sy=`#define STANDARD
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
}`,ry=`#define STANDARD
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
}`,oy=`#define TOON
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
}`,ay=`#define TOON
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
}`,ly=`uniform float size;
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
}`,cy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,hy=`uniform vec3 color;
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
}`,fy=`uniform float rotation;
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
}`,dy=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Nv,alphahash_pars_fragment:Uv,alphamap_fragment:Fv,alphamap_pars_fragment:Bv,alphatest_fragment:Ov,alphatest_pars_fragment:zv,aomap_fragment:kv,aomap_pars_fragment:Hv,batching_pars_vertex:Vv,batching_vertex:Gv,begin_vertex:Wv,beginnormal_vertex:Xv,bsdfs:qv,iridescence_fragment:Yv,bumpmap_pars_fragment:Zv,clipping_planes_fragment:$v,clipping_planes_pars_fragment:Kv,clipping_planes_pars_vertex:Jv,clipping_planes_vertex:jv,color_fragment:Qv,color_pars_fragment:ex,color_pars_vertex:tx,color_vertex:nx,common:ix,cube_uv_reflection_fragment:sx,defaultnormal_vertex:rx,displacementmap_pars_vertex:ox,displacementmap_vertex:ax,emissivemap_fragment:lx,emissivemap_pars_fragment:cx,colorspace_fragment:ux,colorspace_pars_fragment:hx,envmap_fragment:fx,envmap_common_pars_fragment:dx,envmap_pars_fragment:px,envmap_pars_vertex:mx,envmap_physical_pars_fragment:wx,envmap_vertex:gx,fog_vertex:vx,fog_pars_vertex:xx,fog_fragment:yx,fog_pars_fragment:_x,gradientmap_pars_fragment:bx,lightmap_pars_fragment:Mx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:Ex,lights_pars_begin:Tx,lights_toon_fragment:Ax,lights_toon_pars_fragment:Rx,lights_phong_fragment:Cx,lights_phong_pars_fragment:Px,lights_physical_fragment:Ix,lights_physical_pars_fragment:Lx,lights_fragment_begin:Dx,lights_fragment_maps:Nx,lights_fragment_end:Ux,lightprobes_pars_fragment:Fx,logdepthbuf_fragment:Bx,logdepthbuf_pars_fragment:Ox,logdepthbuf_pars_vertex:zx,logdepthbuf_vertex:kx,map_fragment:Hx,map_pars_fragment:Vx,map_particle_fragment:Gx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:qx,morphinstance_vertex:Yx,morphcolor_vertex:Zx,morphnormal_vertex:$x,morphtarget_pars_vertex:Kx,morphtarget_vertex:Jx,normal_fragment_begin:jx,normal_fragment_maps:Qx,normal_pars_fragment:e2,normal_pars_vertex:t2,normal_vertex:n2,normalmap_pars_fragment:i2,clearcoat_normal_fragment_begin:s2,clearcoat_normal_fragment_maps:r2,clearcoat_pars_fragment:o2,iridescence_pars_fragment:a2,opaque_fragment:l2,packing:c2,premultiplied_alpha_fragment:u2,project_vertex:h2,dithering_fragment:f2,dithering_pars_fragment:d2,roughnessmap_fragment:p2,roughnessmap_pars_fragment:m2,shadowmap_pars_fragment:g2,shadowmap_pars_vertex:v2,shadowmap_vertex:x2,shadowmask_pars_fragment:y2,skinbase_vertex:_2,skinning_pars_vertex:b2,skinning_vertex:M2,skinnormal_vertex:S2,specularmap_fragment:E2,specularmap_pars_fragment:T2,tonemapping_fragment:w2,tonemapping_pars_fragment:A2,transmission_fragment:R2,transmission_pars_fragment:C2,uv_pars_fragment:P2,uv_pars_vertex:I2,uv_vertex:L2,worldpos_vertex:D2,background_vert:N2,background_frag:U2,backgroundCube_vert:F2,backgroundCube_frag:B2,cube_vert:O2,cube_frag:z2,depth_vert:k2,depth_frag:H2,distance_vert:V2,distance_frag:G2,equirect_vert:W2,equirect_frag:X2,linedashed_vert:q2,linedashed_frag:Y2,meshbasic_vert:Z2,meshbasic_frag:$2,meshlambert_vert:K2,meshlambert_frag:J2,meshmatcap_vert:j2,meshmatcap_frag:Q2,meshnormal_vert:ey,meshnormal_frag:ty,meshphong_vert:ny,meshphong_frag:iy,meshphysical_vert:sy,meshphysical_frag:ry,meshtoon_vert:oy,meshtoon_frag:ay,points_vert:ly,points_frag:cy,shadow_vert:uy,shadow_frag:hy,sprite_vert:fy,sprite_frag:dy},ke={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},cs={basic:{uniforms:jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:jn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:jn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:jn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new ve(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:jn([ke.points,ke.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:jn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:jn([ke.common,ke.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:jn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:jn([ke.sprite,ke.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:jn([ke.common,ke.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:jn([ke.lights,ke.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};cs.physical={uniforms:jn([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Iu={r:0,b:0,g:0},py=new Ke,Yp=new gt;Yp.set(-1,0,0,0,1,0,0,0,1);function my(i,e,t,n,s,r){let o=new ve(0),a=s===!0?0:1,c,u,f=null,g=0,m=null;function v(d){let x=d.isScene===!0?d.background:null;if(x&&x.isTexture){let p=d.backgroundBlurriness>0;x=e.get(x,p)}return x}function b(d){let x=!1,p=v(d);p===null?l(o,a):p&&p.isColor&&(l(p,1),x=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(d,x){let p=v(x);p&&(p.isCubeTexture||p.mapping===Ga)?(u===void 0&&(u=new ut(new Kt(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:_r(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(_,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=p,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(py.makeRotationFromEuler(x.backgroundRotation)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Yp),u.material.toneMapped=Pt.getTransfer(p.colorSpace)!==Ot,(f!==p||g!==p.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=p,g=p.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new ut(new nn(2,2),new ht({name:"BackgroundMaterial",uniforms:_r(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(p.colorSpace)!==Ot,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(f!==p||g!==p.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=p,g=p.version,m=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function l(d,x){d.getRGB(Iu,Rf(i)),t.buffers.color.setClear(Iu.r,Iu.g,Iu.b,x,r)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,x=1){o.set(d),a=x,l(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,l(o,a)},render:b,addToRenderList:E,dispose:h}}function gy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(A,C,I,R,L){let U=!1,O=g(A,R,I,C);r!==O&&(r=O,u(r.object)),U=v(A,R,I,L),U&&b(A,R,I,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,p(A,C,I,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function f(A){return i.deleteVertexArray(A)}function g(A,C,I,R){let L=R.wireframe===!0,U=n[C.id];U===void 0&&(U={},n[C.id]=U);let O=A.isInstancedMesh===!0?A.id:0,V=U[O];V===void 0&&(V={},U[O]=V);let D=V[I.id];D===void 0&&(D={},V[I.id]=D);let H=D[L];return H===void 0&&(H=m(c()),D[L]=H),H}function m(A){let C=[],I=[],R=[];for(let L=0;L<t;L++)C[L]=0,I[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:R,object:A,attributes:{},index:null}}function v(A,C,I,R){let L=r.attributes,U=C.attributes,O=0,V=I.getAttributes();for(let D in V)if(V[D].location>=0){let z=L[D],$=U[D];if($===void 0&&(D==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),D==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),z===void 0||z.attribute!==$||$&&z.data!==$.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function b(A,C,I,R){let L={},U=C.attributes,O=0,V=I.getAttributes();for(let D in V)if(V[D].location>=0){let z=U[D];z===void 0&&(D==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),D==="instanceColor"&&A.instanceColor&&(z=A.instanceColor));let $={};$.attribute=z,z&&z.data&&($.data=z.data),L[D]=$,O++}r.attributes=L,r.attributesNum=O,r.index=R}function E(){let A=r.newAttributes;for(let C=0,I=A.length;C<I;C++)A[C]=0}function l(A){h(A,0)}function h(A,C){let I=r.newAttributes,R=r.enabledAttributes,L=r.attributeDivisors;I[A]=1,R[A]===0&&(i.enableVertexAttribArray(A),R[A]=1),L[A]!==C&&(i.vertexAttribDivisor(A,C),L[A]=C)}function d(){let A=r.newAttributes,C=r.enabledAttributes;for(let I=0,R=C.length;I<R;I++)C[I]!==A[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function x(A,C,I,R,L,U,O){O===!0?i.vertexAttribIPointer(A,C,I,L,U):i.vertexAttribPointer(A,C,I,R,L,U)}function p(A,C,I,R){E();let L=R.attributes,U=I.getAttributes(),O=C.defaultAttributeValues;for(let V in U){let D=U[V];if(D.location>=0){let H=L[V];if(H===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(H=A.instanceColor)),H!==void 0){let z=H.normalized,$=H.itemSize,ae=e.get(H);if(ae===void 0)continue;let He=ae.buffer,we=ae.type,De=ae.bytesPerElement,K=we===i.INT||we===i.UNSIGNED_INT||H.gpuType===qc;if(H.isInterleavedBufferAttribute){let X=H.data,ge=X.stride,Ie=H.offset;if(X.isInstancedInterleavedBuffer){for(let Ee=0;Ee<D.locationSize;Ee++)h(D.location+Ee,X.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ee=0;Ee<D.locationSize;Ee++)l(D.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Ee=0;Ee<D.locationSize;Ee++)x(D.location+Ee,$/D.locationSize,we,z,ge*De,(Ie+$/D.locationSize*Ee)*De,K)}else{if(H.isInstancedBufferAttribute){for(let X=0;X<D.locationSize;X++)h(D.location+X,H.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let X=0;X<D.locationSize;X++)l(D.location+X);i.bindBuffer(i.ARRAY_BUFFER,He);for(let X=0;X<D.locationSize;X++)x(D.location+X,$/D.locationSize,we,z,$*De,$/D.locationSize*X*De,K)}}else if(O!==void 0){let z=O[V];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(D.location,z);break;case 3:i.vertexAttrib3fv(D.location,z);break;case 4:i.vertexAttrib4fv(D.location,z);break;default:i.vertexAttrib1fv(D.location,z)}}}}d()}function _(){M();for(let A in n){let C=n[A];for(let I in C){let R=C[I];for(let L in R){let U=R[L];for(let O in U)f(U[O].object),delete U[O];delete R[L]}}delete n[A]}}function S(A){if(n[A.id]===void 0)return;let C=n[A.id];for(let I in C){let R=C[I];for(let L in R){let U=R[L];for(let O in U)f(U[O].object),delete U[O];delete R[L]}}delete n[A.id]}function T(A){for(let C in n){let I=n[C];for(let R in I){let L=I[R];if(L[A.id]===void 0)continue;let U=L[A.id];for(let O in U)f(U[O].object),delete U[O];delete L[A.id]}}}function y(A){for(let C in n){let I=n[C],R=A.isInstancedMesh===!0?A.id:0,L=I[R];if(L!==void 0){for(let U in L){let O=L[U];for(let V in O)f(O[V].object),delete O[V];delete L[U]}delete I[R],Object.keys(I).length===0&&delete n[C]}}}function M(){w(),o=!0,r!==s&&(r=s,u(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:w,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:l,disableUnusedAttributes:d}}function vy(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function xy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let y=T===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Kn&&T!==Ci&&!y&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",f=c(u);f!==u&&(ct("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),l=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:v,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:l,maxAttributes:h,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:p,maxSamples:_,samples:S}}function yy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Hi,a=new gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){let v=g.length!==0||m||n!==0||s;return s=m,n=g.length,v},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,m){t=f(g,m,0)},this.setState=function(g,m,v){let b=g.clippingPlanes,E=g.clipIntersection,l=g.clipShadows,h=i.get(g);if(!s||b===null||b.length===0||r&&!l)r?f(null):u();else{let d=r?0:n,x=d*4,p=h.clippingState||null;c.value=p,p=f(b,m,x,v);for(let _=0;_!==x;++_)p[_]=t[_];h.clippingState=p,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=d}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(g,m,v,b){let E=g!==null?g.length:0,l=null;if(E!==0){if(l=c.value,b!==!0||l===null){let h=v+E*4,d=m.matrixWorldInverse;a.getNormalMatrix(d),(l===null||l.length<h)&&(l=new Float32Array(h));for(let x=0,p=v;x!==E;++x,p+=4)o.copy(g[x]).applyMatrix4(d,a),o.normal.toArray(l,p),l[p+3]=o.constant}c.value=l,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,l}}var To=4,_y=6,by=20,My=256,Ja=new Vs,Tp=new ve,Bf=null,Of=0,zf=0,kf=!1,Sy=new k,Mr=new k,Du=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Sy}=r;Bf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,Of,zf),this._renderer.xr.enabled=kf,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Rn,format:Jn,colorSpace:fa,depthBuffer:!1},s=wp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ey(r)),this._blurMaterial=wy(r,e,t),this._ggxMaterial=Ty(r,e,t)}return s}_compileMaterial(e){let t=new ut(new vt,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,n,s,r){let c=new Hn(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,v=g.toneMapping;g.getClearColor(Tp),g.toneMapping=qi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new Kt,new gn({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,l=E.material,h=!1,d=e.background;d?d.isColor&&(l.color.copy(d),e.background=null,h=!0):(l.color.copy(Tp),h=!0);for(let x=0;x<6;x++){let p=x%3;p===0?(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[x],r.y,r.z)):p===1?(c.up.set(0,0,u[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[x],r.z)):(c.up.set(0,u[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[x]));let _=this._cubeSize;Eo(s,p*_,x>2?_:0,_,_),g.setRenderTarget(s),h&&g.render(E,c),g.render(e,c)}g.toneMapping=v,g.autoClear=m,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gs||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Eo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ja)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,u=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),g=Math.sqrt(u*u-f*f),m=u*1.25,v=g*m,{_lodMax:b}=this,E=this._sizeLods[n],l=3*E*(n>b-To?n-b+To:0),h=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=v,c.mipInt.value=b-t,Eo(r,l,h,3*E,2*E),s.setRenderTarget(r),s.render(a,Ja),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=b-n,Eo(e,l,h,3*E,2*E),s.setRenderTarget(e),s.render(a,Ja)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],g=3*f*(s>this._lodMax-To?s-this._lodMax+To:0),m=4*(this._cubeSize-f);Eo(t,g,m,3*f,2*f),o.setRenderTarget(t),o.render(c,Ja)}};function Ey(i){let e=[],t=[],n=i,s=i-To+1+_y;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,u=1+a,f=[c,c,u,c,u,u,c,c,u,u,c,u],g=6,m=6,v=3,b=new Float32Array(v*m*g),E=new Float32Array(v*m*g);for(let h=0;h<g;h++){let d=h%3*2/3-1,x=h>2?0:-1,p=[d,x,0,d+2/3,x,0,d+2/3,x+1,0,d,x,0,d+2/3,x+1,0,d,x+1,0];b.set(p,v*m*h);for(let _=0;_<m;_++){let S=f[_*2]*2-1,T=f[_*2+1]*2-1;h===0?Mr.set(1,T,S):h===1?Mr.set(-S,1,-T):h===2?Mr.set(-S,T,1):h===3?Mr.set(-1,T,-S):h===4?Mr.set(-S,-1,T):Mr.set(S,T,-1),Mr.toArray(E,(h*m+_)*v)}}let l=new vt;l.setAttribute("position",new St(b,v)),l.setAttribute("outputDirection",new St(E,v)),t.push(new ut(l,null)),n>To&&n--}return{lodMeshes:t,sizeLods:e}}function wp(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ty(i,e,t){return new ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:My,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function wy(i,e,t){return new ht({name:"SphericalGaussianBlur",defines:{SAMPLES:by,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ap(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Rp(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nu=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ma(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:ii});r.uniforms.tEquirect.value=t;let o=new ut(s,r),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Bt),new kc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Ay(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,v=!1){return m==null?null:v?o(m):r(m)}function r(m){if(m&&m.isTexture){let v=m.mapping;if(v===Gc||v===Wc)if(e.has(m)){let b=e.get(m).texture;return a(b,m.mapping)}else{let b=m.image;if(b&&b.height>0){let E=new Nu(b.height);return E.fromEquirectangularTexture(i,m),e.set(m,E),m.addEventListener("dispose",u),a(E.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let v=m.mapping,b=v===Gc||v===Wc,E=v===Gs||v===yr;if(b||E){let l=t.get(m),h=l!==void 0?l.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==h)return n===null&&(n=new Du(i)),l=b?n.fromEquirectangular(m,l):n.fromCubemap(m,l),l.texture.pmremVersion=m.pmremVersion,t.set(m,l),l.texture;if(l!==void 0)return l.texture;{let d=m.image;return b&&d&&d.height>0||E&&d&&c(d)?(n===null&&(n=new Du(i)),l=b?n.fromEquirectangular(m):n.fromCubemap(m),l.texture.pmremVersion=m.pmremVersion,t.set(m,l),m.addEventListener("dispose",f),l.texture):null}}}return m}function a(m,v){return v===Gc?m.mapping=Gs:v===Wc&&(m.mapping=yr),m}function c(m){let v=0,b=6;for(let E=0;E<b;E++)m[E]!==void 0&&v++;return v===b}function u(m){let v=m.target;v.removeEventListener("dispose",u);let b=e.get(v);b!==void 0&&(e.delete(v),b.dispose())}function f(m){let v=m.target;v.removeEventListener("dispose",f);let b=t.get(v);b!==void 0&&(t.delete(v),b.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Ry(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&fr("WebGLRenderer: "+n+" extension not supported."),s}}}function Cy(i,e,t,n){let s={},r=new WeakMap;function o(g){let m=g.target;m.index!==null&&e.remove(m.index);for(let b in m.attributes)e.remove(m.attributes[b]);m.removeEventListener("dispose",o),delete s[m.id];let v=r.get(m);v&&(e.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(g,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function c(g){let m=g.attributes;for(let v in m)e.update(m[v],i.ARRAY_BUFFER)}function u(g){let m=[],v=g.index,b=g.attributes.position,E=0;if(b===void 0)return;if(v!==null){let d=v.array;E=v.version;for(let x=0,p=d.length;x<p;x+=3){let _=d[x+0],S=d[x+1],T=d[x+2];m.push(_,S,S,T,T,_)}}else{let d=b.array;E=b.version;for(let x=0,p=d.length/3-1;x<p;x+=3){let _=x+0,S=x+1,T=x+2;m.push(_,S,S,T,T,_)}}let l=new(b.count>=65535?ya:xa)(m,1);l.version=E;let h=r.get(g);h&&e.remove(h),r.set(g,l)}function f(g){let m=r.get(g);if(m){let v=g.index;v!==null&&m.version<v.version&&u(g)}else u(g);return r.get(g)}return{get:a,update:c,getWireframeAttribute:f}}function Py(i,e,t){let n;function s(g){n=g}let r,o;function a(g){r=g.type,o=g.bytesPerElement}function c(g,m){i.drawElements(n,m,r,g*o),t.update(m,n,1)}function u(g,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,g*o,v),t.update(m,n,v))}function f(g,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,g,0,v);let E=0;for(let l=0;l<v;l++)E+=m[l];t.update(E,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function Iy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ly(i,e,t){let n=new WeakMap,s=new mt;function r(o,a,c){let u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=f!==void 0?f.length:0,m=n.get(a);if(m===void 0||m.count!==g){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};m!==void 0&&m.texture.dispose();let v=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,l=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],d=a.morphAttributes.color||[],x=0;v===!0&&(x=1),b===!0&&(x=2),E===!0&&(x=3);let p=a.attributes.position.count*x,_=1;p>e.maxTextureSize&&(_=Math.ceil(p/e.maxTextureSize),p=e.maxTextureSize);let S=new Float32Array(p*_*4*g),T=new ma(S,p,_,g);T.type=Ci,T.needsUpdate=!0;let y=x*4;for(let w=0;w<g;w++){let A=l[w],C=h[w],I=d[w],R=p*_*4*w;for(let L=0;L<A.count;L++){let U=L*y;v===!0&&(s.fromBufferAttribute(A,L),S[R+U+0]=s.x,S[R+U+1]=s.y,S[R+U+2]=s.z,S[R+U+3]=0),b===!0&&(s.fromBufferAttribute(C,L),S[R+U+4]=s.x,S[R+U+5]=s.y,S[R+U+6]=s.z,S[R+U+7]=0),E===!0&&(s.fromBufferAttribute(I,L),S[R+U+8]=s.x,S[R+U+9]=s.y,S[R+U+10]=s.z,S[R+U+11]=I.itemSize===4?s.w:1)}}m={count:g,texture:T,size:new Pe(p,_)},n.set(a,m),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let E=0;E<u.length;E++)v+=u[E];let b=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Dy(i,e,t,n,s){let r=new WeakMap;function o(u){let f=s.render.frame,g=u.geometry,m=e.get(u,g);if(r.get(m)!==f&&(e.update(m),r.set(m,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){let v=u.skeleton;r.get(v)!==f&&(v.update(),r.set(v,f))}return m}function a(){r=new WeakMap}function c(u){let f=u.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var Ny={[ff]:"LINEAR_TONE_MAPPING",[df]:"REINHARD_TONE_MAPPING",[pf]:"CINEON_TONE_MAPPING",[mf]:"ACES_FILMIC_TONE_MAPPING",[vf]:"AGX_TONE_MAPPING",[Va]:"NEUTRAL_TONE_MAPPING",[gf]:"CUSTOM_TONE_MAPPING"};function Uy(i,e,t,n,s,r){let o=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,u=new vt;u.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let f=new Rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new ut(u,f),m=new Vs(-1,1,1,-1,0,1),v=null,b=null,E=!1,l,h=null,d=[],x=!1;this.setSize=function(p,_){o.setSize(p,_),a!==null&&a.setSize(p,_),c!==null&&c.setSize(p,_);for(let S=0;S<d.length;S++){let T=d[S];T.setSize&&T.setSize(p,_)}},this.setEffects=function(p){d=p,x=d.length>0&&d[0].isRenderPass===!0;let _=o.width,S=o.height;d.length>0&&a===null&&(a=new Wt(_,S,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),c=new Wt(_,S,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<d.length;T++){let y=d[T];y.setSize&&y.setSize(_,S)}},this.begin=function(p,_){if(E||p.toneMapping===qi&&d.length===0)return!1;if(h=_,_!==null){let S=_.width,T=_.height;(o.width!==S||o.height!==T)&&this.setSize(S,T)}return x===!1&&p.setRenderTarget(o),l=p.toneMapping,p.toneMapping=qi,!0},this.hasRenderPass=function(){return x},this.end=function(p,_){p.toneMapping=l,E=!0;let S=o,T=a;for(let y=0;y<d.length;y++){let M=d[y];M.enabled!==!1&&(M.render(p,T,S,_),M.needsSwap!==!1&&(S=T,T=T===a?c:a))}if(v!==p.outputColorSpace||b!==p.toneMapping){v=p.outputColorSpace,b=p.toneMapping,f.defines={},Pt.getTransfer(v)===Ot&&(f.defines.SRGB_TRANSFER="");let y=Ny[b];y&&(f.defines[y]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=S.texture,p.setRenderTarget(h),p.render(g,m),h=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}var Zp=new Zn,Gf=new Os(1,1),$p=new ma,Kp=new gc,Jp=new Ma,Cp=[],Pp=[],Ip=new Float32Array(16),Lp=new Float32Array(9),Dp=new Float32Array(4);function Ao(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cp[s];if(r===void 0&&(r=new Float32Array(s),Cp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function In(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bu(i,e){let t=Pp[e];t===void 0&&(t=new Int32Array(e),Pp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2fv(this.addr,e),Ln(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;i.uniform3fv(this.addr,e),Ln(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4fv(this.addr,e),Ln(t,e)}}function ky(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;Dp.set(n),i.uniformMatrix2fv(this.addr,!1,Dp),Ln(t,n)}}function Hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;Lp.set(n),i.uniformMatrix3fv(this.addr,!1,Lp),Ln(t,n)}}function Vy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;Ip.set(n),i.uniformMatrix4fv(this.addr,!1,Ip),Ln(t,n)}}function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2iv(this.addr,e),Ln(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;i.uniform3iv(this.addr,e),Ln(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4iv(this.addr,e),Ln(t,e)}}function Yy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2uiv(this.addr,e),Ln(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;i.uniform3uiv(this.addr,e),Ln(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4uiv(this.addr,e),Ln(t,e)}}function Jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gf.compareFunction=t.isReversedDepthBuffer()?Pu:Cu,r=Gf):r=Zp,t.setTexture2D(e||r,s)}function jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kp,s)}function Qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jp,s)}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$p,s)}function t_(i){switch(i){case 5126:return Fy;case 35664:return By;case 35665:return Oy;case 35666:return zy;case 35674:return ky;case 35675:return Hy;case 35676:return Vy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Zy;case 36295:return $y;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return e_}}function n_(i,e){i.uniform1fv(this.addr,e)}function i_(i,e){let t=Ao(e,this.size,2);i.uniform2fv(this.addr,t)}function s_(i,e){let t=Ao(e,this.size,3);i.uniform3fv(this.addr,t)}function r_(i,e){let t=Ao(e,this.size,4);i.uniform4fv(this.addr,t)}function o_(i,e){let t=Ao(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function a_(i,e){let t=Ao(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function l_(i,e){let t=Ao(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function c_(i,e){i.uniform1iv(this.addr,e)}function u_(i,e){i.uniform2iv(this.addr,e)}function h_(i,e){i.uniform3iv(this.addr,e)}function f_(i,e){i.uniform4iv(this.addr,e)}function d_(i,e){i.uniform1uiv(this.addr,e)}function p_(i,e){i.uniform2uiv(this.addr,e)}function m_(i,e){i.uniform3uiv(this.addr,e)}function g_(i,e){i.uniform4uiv(this.addr,e)}function v_(i,e,t){let n=this.cache,s=e.length,r=Bu(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Gf:o=Zp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function x_(i,e,t){let n=this.cache,s=e.length,r=Bu(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kp,r[o])}function y_(i,e,t){let n=this.cache,s=e.length,r=Bu(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jp,r[o])}function __(i,e,t){let n=this.cache,s=e.length,r=Bu(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$p,r[o])}function b_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return u_;case 35668:case 35672:return h_;case 35669:case 35673:return f_;case 5125:return d_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return __}}var Wf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t_(t.type)}},Xf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b_(t.type)}},qf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Hf=/(\w+)(\])?(\[|\.)?/g;function Np(i,e){i.seq.push(e),i.map[e.id]=e}function M_(i,e,t){let n=i.name,s=n.length;for(Hf.lastIndex=0;;){let r=Hf.exec(n),o=Hf.lastIndex,a=r[1],c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){Np(t,u===void 0?new Wf(a,i,e):new Xf(a,i,e));break}else{let g=t.map[a];g===void 0&&(g=new qf(a),Np(t,g)),t=g}}}var wo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);M_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Up(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var S_=37297,E_=0;function T_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Fp=new gt;function w_(i){Pt._getMatrix(Fp,Pt.workingColorSpace,i);let e=`mat3( ${Fp.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(i)){case da:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+T_(i.getShaderSource(e),a)}else return r}function A_(i,e){let t=w_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var R_={[ff]:"Linear",[df]:"Reinhard",[pf]:"Cineon",[mf]:"ACESFilmic",[vf]:"AgX",[Va]:"Neutral",[gf]:"Custom"};function C_(i,e){let t=R_[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lu=new k;function P_(){Pt.getLuminanceCoefficients(Lu);let i=Lu.x.toFixed(4),e=Lu.y.toFixed(4),t=Lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function L_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qa(i){return i!==""}function Op(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(i){return i.replace(N_,F_)}var U_=new Map;function F_(i,e){let t=ft[e];if(t===void 0){let n=U_.get(e);if(n!==void 0)t=ft[n],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yf(t)}var B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(i){return i.replace(B_,O_)}function O_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var z_={[vr]:"SHADOWMAP_TYPE_PCF",[yo]:"SHADOWMAP_TYPE_VSM"};function k_(i){return z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H_={[Gs]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE_UV"};function V_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":H_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var G_={[yr]:"ENVMAP_MODE_REFRACTION"};function W_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X_={[hf]:"ENVMAP_BLENDING_MULTIPLY",[tp]:"ENVMAP_BLENDING_MIX",[np]:"ENVMAP_BLENDING_ADD"};function q_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":X_[i.combine]||"ENVMAP_BLENDING_NONE"}function Y_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Z_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=k_(t),u=V_(t),f=W_(t),g=q_(t),m=Y_(t),v=I_(t),b=L_(r),E=s.createProgram(),l,h,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Qa).join(`
`),l.length>0&&(l+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Qa).join(`
`),h.length>0&&(h+=`
`)):(l=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),h=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?ft.tonemapping_pars_fragment:"",t.toneMapping!==qi?C_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,A_("linearToOutputTexel",t.outputColorSpace),P_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),o=Yf(o),o=Op(o,t),o=zp(o,t),a=Yf(a),a=Op(a,t),a=zp(a,t),o=kp(o),a=kp(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,l=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,h=["#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let x=d+l+o,p=d+h+a,_=Up(s,s.VERTEX_SHADER,x),S=Up(s,s.FRAGMENT_SHADER,p);s.attachShader(E,_),s.attachShader(E,S),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function T(A){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(E)||"",I=s.getShaderInfoLog(_)||"",R=s.getShaderInfoLog(S)||"",L=C.trim(),U=I.trim(),O=R.trim(),V=!0,D=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,_,S);else{let H=Bp(s,_,"vertex"),z=Bp(s,S,"fragment");pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+H+`
`+z)}else L!==""?ct("WebGLProgram: Program Info Log:",L):(U===""||O==="")&&(D=!1);D&&(A.diagnostics={runnable:V,programLog:L,vertexShader:{log:U,prefix:l},fragmentShader:{log:O,prefix:h}})}s.deleteShader(_),s.deleteShader(S),y=new wo(s,E),M=D_(s,E)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(E,S_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=_,this.fragmentShader=S,this}var $_=0,Zf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $f(e),t.set(e,n)),n}},$f=class{constructor(e){this.id=$_++,this.code=e,this.usedTimes=0}};function K_(i){return i===qs||i===$a||i===Ka}function J_(i,e,t,n,s,r){let o=new ga,a=new Zf,c=new Set,u=[],f=new Map,g=n.logarithmicDepthBuffer,m=n.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return c.add(y),y===0?"uv":`uv${y}`}function E(y,M,w,A,C,I){let R=A.fog,L=C.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||U,O),D=V&&V.mapping===Ga?V.image.height:null,H=v[y.type];y.precision!==null&&(m=n.getMaxPrecision(y.precision),m!==y.precision&&ct("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=z!==void 0?z.length:0,ae=0;L.morphAttributes.position!==void 0&&(ae=1),L.morphAttributes.normal!==void 0&&(ae=2),L.morphAttributes.color!==void 0&&(ae=3);let He,we,De,K;if(H){let tt=cs[H];He=tt.vertexShader,we=tt.fragmentShader}else{He=y.vertexShader,we=y.fragmentShader;let tt=a.getVertexShaderStage(y),Xe=a.getFragmentShaderStage(y);a.update(y,tt,Xe),De=tt.id,K=Xe.id}let X=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Ie=C.isInstancedMesh===!0,Ee=C.isBatchedMesh===!0,Me=!!y.map,Ze=!!y.matcap,et=!!V,Re=!!y.aoMap,st=!!y.lightMap,ee=!!y.bumpMap&&y.wireframe===!1,be=!!y.normalMap,j=!!y.displacementMap,se=!!y.emissiveMap,ne=!!y.metalnessMap,ue=!!y.roughnessMap,B=y.anisotropy>0,xe=y.clearcoat>0,te=y.dispersion>0,N=y.retroreflectivity>0,P=y.iridescence>0,G=y.sheen>0,q=y.transmission>0,Q=B&&!!y.anisotropyMap,ce=xe&&!!y.clearcoatMap,de=xe&&!!y.clearcoatNormalMap,le=xe&&!!y.clearcoatRoughnessMap,fe=P&&!!y.iridescenceMap,Ne=P&&!!y.iridescenceThicknessMap,Ve=G&&!!y.sheenColorMap,Ce=G&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,Be=!!y.specularColorMap,Je=!!y.specularIntensityMap,ot=q&&!!y.transmissionMap,Y=q&&!!y.thicknessMap,Le=!!y.gradientMap,me=!!y.alphaMap,W=y.alphaTest>0,Fe=!!y.alphaHash,Se=!!y.extensions,rt=qi;y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(rt=i.toneMapping);let je={shaderID:H,shaderType:y.type,shaderName:y.name,vertexShader:He,fragmentShader:we,defines:y.defines,customVertexShaderID:De,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&C._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&C.instanceColor!==null,instancingMorph:Ie&&C.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Me,matcap:Ze,envMap:et,envMapMode:et&&V.mapping,envMapCubeUVHeight:D,aoMap:Re,lightMap:st,bumpMap:ee,normalMap:be,displacementMap:j,emissiveMap:se,normalMapObjectSpace:be&&y.normalMapType===rp,normalMapTangentSpace:be&&y.normalMapType===Ru,packedNormalMap:be&&y.normalMapType===Ru&&K_(y.normalMap.format),metalnessMap:ne,roughnessMap:ue,anisotropy:B,anisotropyMap:Q,clearcoat:xe,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:le,dispersion:te,retroreflection:N,iridescence:P,iridescenceMap:fe,iridescenceThicknessMap:Ne,sheen:G,sheenColorMap:Ve,sheenRoughnessMap:Ce,specularMap:Ue,specularColorMap:Be,specularIntensityMap:Je,transmission:q,transmissionMap:ot,thicknessMap:Y,gradientMap:Le,opaque:y.transparent===!1&&y.blending===_o&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:W,alphaHash:Fe,combine:y.combine,mapUv:Me&&b(y.map.channel),aoMapUv:Re&&b(y.aoMap.channel),lightMapUv:st&&b(y.lightMap.channel),bumpMapUv:ee&&b(y.bumpMap.channel),normalMapUv:be&&b(y.normalMap.channel),displacementMapUv:j&&b(y.displacementMap.channel),emissiveMapUv:se&&b(y.emissiveMap.channel),metalnessMapUv:ne&&b(y.metalnessMap.channel),roughnessMapUv:ue&&b(y.roughnessMap.channel),anisotropyMapUv:Q&&b(y.anisotropyMap.channel),clearcoatMapUv:ce&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&b(y.sheenRoughnessMap.channel),specularMapUv:Ue&&b(y.specularMap.channel),specularColorMapUv:Be&&b(y.specularColorMap.channel),specularIntensityMapUv:Je&&b(y.specularIntensityMap.channel),transmissionMapUv:ot&&b(y.transmissionMap.channel),thicknessMapUv:Y&&b(y.thicknessMap.channel),alphaMapUv:me&&b(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(be||B),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(Me||me),fog:!!R,useFog:y.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&be===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ge,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ae,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Me&&y.map.isVideoTexture===!0&&Pt.getTransfer(y.map.colorSpace)===Ot,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(y.emissiveMap.colorSpace)===Ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===Vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function l(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let w in y.defines)M.push(w),M.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(h(M,y),d(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function h(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numSunLights),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numSunLightShadows),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function d(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function x(y){let M=v[y.type],w;if(M){let A=cs[M];w=br.clone(A.uniforms)}else w=y.uniforms;return w}function p(y,M){let w=f.get(M);return w!==void 0?++w.usedTimes:(w=new Z_(i,M,y,s),u.push(w),f.set(M,w)),w}function _(y){if(--y.usedTimes===0){let M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function T(){a.dispose()}return{getParameters:E,getProgramCacheKey:l,getUniforms:x,acquireProgram:p,releaseProgram:_,releaseShaderCache:S,programs:u,dispose:T}}function j_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m){let v=0;return m.isInstancedMesh&&(v+=2),m.isSkinnedMesh&&(v+=1),v}function a(m,v,b,E,l,h){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:v,material:b,materialVariant:o(m),groupOrder:E,renderOrder:m.renderOrder,z:l,group:h},i[e]=d):(d.id=m.id,d.object=m,d.geometry=v,d.material=b,d.materialVariant=o(m),d.groupOrder=E,d.renderOrder=m.renderOrder,d.z=l,d.group=h),e++,d}function c(m,v,b,E,l,h,d){d.reversedDepth===!0&&(l=-l);let x=a(m,v,b,E,l,h);b.transmission>0?n.push(x):b.transparent===!0?s.push(x):t.push(x)}function u(m,v,b,E,l,h){let d=a(m,v,b,E,l,h);b.transmission>0?n.unshift(d):b.transparent===!0?s.unshift(d):t.unshift(d)}function f(m,v){t.length>1&&t.sort(m||Q_),n.length>1&&n.sort(v||Vp),s.length>1&&s.sort(v||Vp)}function g(){for(let m=e,v=i.length;m<v;m++){let b=i[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:g,sort:f}}function eb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Gp,i.set(n,[o])):s>=r.length?(o=new Gp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function tb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new ve};break;case"SpotLight":t={position:new k,direction:new k,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function nb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ib=0;function sb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rb(i){let e=new tb,t=nb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);let s=new k,r=new Ke,o=new Ke;function a(u){let f=0,g=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,b=0,E=0,l=0,h=0,d=0,x=0,p=0,_=0,S=0,T=0,y=0,M=0,w=0;u.sort(sb);for(let C=0,I=u.length;C<I;C++){let R=u[C],L=R.color,U=R.intensity,O=R.distance,V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===qs?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=L.r*U,g+=L.g*U,m+=L.b*U;else if(R.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(R.sh.coefficients[D],U);w++}else if(R.isSunLight){let D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,z=t.get(R);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[b]=z,n.sunShadowMap[b]=V;let $=H.getViewportCount();for(let ae=0;ae<$;ae++)n.sunShadowMatrix[E+ae]=H.getMatrix(ae),n.sunShadowCascade[E+ae]=H._cascadeData[ae];E+=$,b++}n.sun[v]=D,v++}else if(R.isDirectionalLight){let D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,z=t.get(R);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.directionalShadow[l]=z,n.directionalShadowMap[l]=V,n.directionalShadowMatrix[l]=R.shadow.matrix,_++}n.directional[l]=D,l++}else if(R.isSpotLight){let D=e.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(L).multiplyScalar(U),D.distance=O,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,n.spot[d]=D;let H=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,H.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[d]=H.matrix,R.castShadow){let z=t.get(R);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.spotShadow[d]=z,n.spotShadowMap[d]=V,T++}d++}else if(R.isRectAreaLight){let D=e.get(R);D.color.copy(L).multiplyScalar(U),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),n.rectArea[x]=D,x++}else if(R.isPointLight){let D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),D.distance=R.distance,D.decay=R.decay,R.castShadow){let H=R.shadow,z=t.get(R);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,n.pointShadow[h]=z,n.pointShadowMap[h]=V,n.pointShadowMatrix[h]=R.shadow.matrix,S++}n.point[h]=D,h++}else if(R.isHemisphereLight){let D=e.get(R);D.skyColor.copy(R.color).multiplyScalar(U),D.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=D,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=m;let A=n.hash;(A.sunLength!==v||A.directionalLength!==l||A.pointLength!==h||A.spotLength!==d||A.rectAreaLength!==x||A.hemiLength!==p||A.numSunShadows!==b||A.numDirectionalShadows!==_||A.numPointShadows!==S||A.numSpotShadows!==T||A.numSpotMaps!==y||A.numLightProbes!==w)&&(n.sun.length=v,n.directional.length=l,n.spot.length=d,n.rectArea.length=x,n.point.length=h,n.hemi.length=p,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+y-M,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,A.sunLength=v,A.directionalLength=l,A.pointLength=h,A.spotLength=d,A.rectAreaLength=x,A.hemiLength=p,A.numSunShadows=b,A.numDirectionalShadows=_,A.numPointShadows=S,A.numSpotShadows=T,A.numSpotMaps=y,A.numLightProbes=w,n.version=ib++)}function c(u,f){let g=0,m=0,v=0,b=0,E=0,l=0,h=f.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){let p=u[d];if(p.isSunLight){let _=n.sun[g];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(h),g++}else if(p.isDirectionalLight){let _=n.directional[m];_.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(h),m++}else if(p.isSpotLight){let _=n.spot[b];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(h),_.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(h),b++}else if(p.isRectAreaLight){let _=n.rectArea[E];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(h),o.identity(),r.copy(p.matrixWorld),r.premultiply(h),o.extractRotation(r),_.halfWidth.set(p.width*.5,0,0),_.halfHeight.set(0,p.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),E++}else if(p.isPointLight){let _=n.point[v];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(h),v++}else if(p.isHemisphereLight){let _=n.hemi[l];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(h),l++}}}return{setup:a,setupView:c,state:n}}function Wp(i){let e=new rb(i),t=[],n=[],s=[];function r(m){g.camera=m,t.length=0,n.length=0,s.length=0}function o(m){t.push(m)}function a(m){n.push(m)}function c(m){s.push(m)}function u(){e.setup(t)}function f(m){e.setupView(t,m)}let g={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ob(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Wp(i),e.set(s,[a])):r>=o.length?(a=new Wp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
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
}`,cb=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],ub=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Xp=new Ke,ja=new k,Vf=new k;function hb(i,e,t){let n=new uo,s=new Pe,r=new Pe,o=new mt,a=new gr,c=new Cc,u={},f=t.maxTextureSize,g={[as]:Vn,[Vn]:as,[yn]:yn},m=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:ab,fragmentShader:lb}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let b=new vt;b.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new ut(b,m),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let h=this.type;this.render=function(S,T,y){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||S.length===0)return;this.type===F0&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vr);let M=i.getRenderTarget(),w=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ii),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let I=h!==this.type;I&&T.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(L=>L.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,L=S.length;R<L;R++){let U=S[R],O=U.shadow;if(O===void 0){ct("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let V=O.getFrameExtents();s.multiply(V),r.copy(O.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/V.x),s.x=r.x*V.x,O.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/V.y),s.y=r.y*V.y,O.mapSize.y=r.y));let D=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=D,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===yo){if(U.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Wt(s.x,s.y,{format:qs,type:Rn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new Os(s.x,s.y,Ci),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=is,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn}else U.isPointLight?(O.map=new Nu(s.x),O.map.depthTexture=new _c(s.x,Yi)):(O.map=new Wt(s.x,s.y),O.map.depthTexture=new Os(s.x,s.y,Yi)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=is,this.type===vr?(O.map.depthTexture.compareFunction=D?Pu:Cu,O.map.depthTexture.minFilter=Bt,O.map.depthTexture.magFilter=Bt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let H=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,y);for(let z=0;z<H;z++){let $=O.getCamera(z);if(U.isPointLight){let ae=O.camera,He=O.matrix,we=U.distance||ae.far;we!==ae.far&&(ae.far=we,ae.updateProjectionMatrix()),ja.setFromMatrixPosition(U.matrixWorld),ae.position.copy(ja),Vf.copy(ae.position),Vf.add(cb[z]),ae.up.copy(ub[z]),ae.lookAt(Vf),ae.updateMatrixWorld(),He.makeTranslation(-ja.x,-ja.y,-ja.z),Xp.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Xp,ae.coordinateSystem,ae.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,z),i.clear();else{z===0&&(i.setRenderTarget(O.map),i.clear());let ae=O.getViewport(z);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),C.viewport(o)}n=O.getFrustum(z),p(T,y,$,U,this.type)}O.isPointLightShadow!==!0&&this.type===yo&&d(O,y),O.needsUpdate=!1}h=this.type,l.needsUpdate=!1,i.setRenderTarget(M,w,A)};function d(S,T){let y=e.update(E);m.defines.VSM_SAMPLES!==S.blurSamples&&(m.defines.VSM_SAMPLES=S.blurSamples,v.defines.VSM_SAMPLES=S.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),S.mapPass===null?S.mapPass=new Wt(s.x,s.y,{format:qs,type:Rn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),m.uniforms.shadow_pass.value=S.map.depthTexture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,y,m,E,null),v.uniforms.shadow_pass.value=S.mapPass.texture,v.uniforms.resolution.value.set(S.map.width,S.map.height),v.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,y,v,E,null)}function x(S,T,y,M){let w=null,A=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)w=A;else if(w=y.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let C=w.uuid,I=T.uuid,R=u[C];R===void 0&&(R={},u[C]=R);let L=R[I];L===void 0&&(L=w.clone(),R[I]=L,T.addEventListener("dispose",_)),w=L}if(w.visible=T.visible,w.wireframe=T.wireframe,M===yo?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:g[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let C=i.properties.get(w);C.light=y}return w}function p(S,T,y,M,w){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===yo)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let I=e.update(S),R=S.material;if(Array.isArray(R)){let L=I.groups;for(let U=0,O=L.length;U<O;U++){let V=L[U],D=R[V.materialIndex];if(D&&D.visible){let H=x(S,D,M,w);S.onBeforeShadow(i,S,T,y,I,H,V),i.renderBufferDirect(y,null,I,H,S,V),S.onAfterShadow(i,S,T,y,I,H,V)}}}else if(R.visible){let L=x(S,R,M,w);S.onBeforeShadow(i,S,T,y,I,L,null),i.renderBufferDirect(y,null,I,L,S,null),S.onAfterShadow(i,S,T,y,I,L,null)}}let C=S.children;for(let I=0,R=C.length;I<R;I++)p(C[I],T,y,M,w)}function _(S){S.target.removeEventListener("dispose",_);for(let y in u){let M=u[y],w=S.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function fb(i,e){function t(){let Y=!1,Le=new mt,me=null,W=new mt(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!Y&&(i.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){Y=Fe},setClear:function(Fe,Se,rt,je,tt){tt===!0&&(Fe*=je,Se*=je,rt*=je),Le.set(Fe,Se,rt,je),W.equals(Le)===!1&&(i.clearColor(Fe,Se,rt,je),W.copy(Le))},reset:function(){Y=!1,me=null,W.set(-1,0,0,0)}}}function n(){let Y=!1,Le=!1,me=null,W=null,Fe=null;return{setReversed:function(Se){if(Le!==Se){let rt=e.get("EXT_clip_control");Se?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;let je=Fe;Fe=null,this.setClear(je)}},getReversed:function(){return Le},setTest:function(Se){Se?X(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Se){me!==Se&&!Y&&(i.depthMask(Se),me=Se)},setFunc:function(Se){if(Le&&(Se=vp[Se]),W!==Se){switch(Se){case rc:i.depthFunc(i.NEVER);break;case oc:i.depthFunc(i.ALWAYS);break;case ac:i.depthFunc(i.LESS);break;case io:i.depthFunc(i.LEQUAL);break;case lc:i.depthFunc(i.EQUAL);break;case cc:i.depthFunc(i.GEQUAL);break;case uc:i.depthFunc(i.GREATER);break;case hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=Se}},setLocked:function(Se){Y=Se},setClear:function(Se){Fe!==Se&&(Fe=Se,Le&&(Se=1-Se),i.clearDepth(Se))},reset:function(){Y=!1,me=null,W=null,Fe=null,Le=!1}}}function s(){let Y=!1,Le=null,me=null,W=null,Fe=null,Se=null,rt=null,je=null,tt=null;return{setTest:function(Xe){Y||(Xe?X(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Xe){Le!==Xe&&!Y&&(i.stencilMask(Xe),Le=Xe)},setFunc:function(Xe,_t,bt){(me!==Xe||W!==_t||Fe!==bt)&&(i.stencilFunc(Xe,_t,bt),me=Xe,W=_t,Fe=bt)},setOp:function(Xe,_t,bt){(Se!==Xe||rt!==_t||je!==bt)&&(i.stencilOp(Xe,_t,bt),Se=Xe,rt=_t,je=bt)},setLocked:function(Xe){Y=Xe},setClear:function(Xe){tt!==Xe&&(i.clearStencil(Xe),tt=Xe)},reset:function(){Y=!1,Le=null,me=null,W=null,Fe=null,Se=null,rt=null,je=null,tt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,u=new WeakMap,f={},g={},m={},v=new WeakMap,b=[],E=null,l=!1,h=null,d=null,x=null,p=null,_=null,S=null,T=null,y=new ve(0,0,0),M=0,w=!1,A=null,C=null,I=null,R=null,L=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(D)[1]),O=V>=1):D.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),O=V>=2);let H=null,z={},$=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),He=new mt().fromArray($),we=new mt().fromArray(ae);function De(Y,Le,me,W){let Fe=new Uint8Array(4),Se=i.createTexture();i.bindTexture(Y,Se),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<me;rt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,W,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Le+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return Se}let K={};K[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(io),ee(!1),be(of),X(i.CULL_FACE),Re(ii);function X(Y){f[Y]!==!0&&(i.enable(Y),f[Y]=!0)}function ge(Y){f[Y]!==!1&&(i.disable(Y),f[Y]=!1)}function Ie(Y,Le){return m[Y]!==Le?(i.bindFramebuffer(Y,Le),m[Y]=Le,Y===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Le),Y===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ee(Y,Le){let me=b,W=!1;if(Y){me=v.get(Le),me===void 0&&(me=[],v.set(Le,me));let Fe=Y.textures;if(me.length!==Fe.length||me[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,rt=Fe.length;Se<rt;Se++)me[Se]=i.COLOR_ATTACHMENT0+Se;me.length=Fe.length,W=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,W=!0);W&&i.drawBuffers(me)}function Me(Y){return E!==Y?(i.useProgram(Y),E=Y,!0):!1}let Ze={[xr]:i.FUNC_ADD,[O0]:i.FUNC_SUBTRACT,[z0]:i.FUNC_REVERSE_SUBTRACT};Ze[k0]=i.MIN,Ze[H0]=i.MAX;let et={[V0]:i.ZERO,[G0]:i.ONE,[W0]:i.SRC_COLOR,[cf]:i.SRC_ALPHA,[K0]:i.SRC_ALPHA_SATURATE,[Z0]:i.DST_COLOR,[q0]:i.DST_ALPHA,[X0]:i.ONE_MINUS_SRC_COLOR,[uf]:i.ONE_MINUS_SRC_ALPHA,[$0]:i.ONE_MINUS_DST_COLOR,[Y0]:i.ONE_MINUS_DST_ALPHA,[J0]:i.CONSTANT_COLOR,[j0]:i.ONE_MINUS_CONSTANT_COLOR,[Q0]:i.CONSTANT_ALPHA,[ep]:i.ONE_MINUS_CONSTANT_ALPHA};function Re(Y,Le,me,W,Fe,Se,rt,je,tt,Xe){if(Y===ii){l===!0&&(ge(i.BLEND),l=!1);return}if(l===!1&&(X(i.BLEND),l=!0),Y!==B0){if(Y!==h||Xe!==w){if((d!==xr||_!==xr)&&(i.blendEquation(i.FUNC_ADD),d=xr,_=xr),Xe)switch(Y){case _o:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case af:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case _o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case af:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lf:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",Y);break}x=null,p=null,S=null,T=null,y.set(0,0,0),M=0,h=Y,w=Xe}return}Fe=Fe||Le,Se=Se||me,rt=rt||W,(Le!==d||Fe!==_)&&(i.blendEquationSeparate(Ze[Le],Ze[Fe]),d=Le,_=Fe),(me!==x||W!==p||Se!==S||rt!==T)&&(i.blendFuncSeparate(et[me],et[W],et[Se],et[rt]),x=me,p=W,S=Se,T=rt),(je.equals(y)===!1||tt!==M)&&(i.blendColor(je.r,je.g,je.b,tt),y.copy(je),M=tt),h=Y,w=!1}function st(Y,Le){Y.side===yn?ge(i.CULL_FACE):X(i.CULL_FACE);let me=Y.side===Vn;Le&&(me=!me),ee(me),Y.blending===_o&&Y.transparent===!1?Re(ii):Re(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let W=Y.stencilWrite;a.setTest(W),W&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),se(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(Y){A!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),A=Y)}function be(Y){Y!==N0?(X(i.CULL_FACE),Y!==C&&(Y===of?i.cullFace(i.BACK):Y===U0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),C=Y}function j(Y){Y!==I&&(O&&i.lineWidth(Y),I=Y)}function se(Y,Le,me){Y?(X(i.POLYGON_OFFSET_FILL),(R!==Le||L!==me)&&(R=Le,L=me,o.getReversed()&&(Le=-Le),i.polygonOffset(Le,me))):ge(i.POLYGON_OFFSET_FILL)}function ne(Y){Y?X(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function ue(Y){Y===void 0&&(Y=i.TEXTURE0+U-1),H!==Y&&(i.activeTexture(Y),H=Y)}function B(Y,Le,me){me===void 0&&(H===null?me=i.TEXTURE0+U-1:me=H);let W=z[me];W===void 0&&(W={type:void 0,texture:void 0},z[me]=W),(W.type!==Y||W.texture!==Le)&&(H!==me&&(i.activeTexture(me),H=me),i.bindTexture(Y,Le||K[Y]),W.type=Y,W.texture=Le)}function xe(){let Y=z[H];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function P(){try{i.texSubImage2D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function G(){try{i.texSubImage3D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function ce(){try{i.texStorage2D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function de(){try{i.texStorage3D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function le(){try{i.texImage2D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function fe(){try{i.texImage3D(...arguments)}catch(Y){pt("WebGLState:",Y)}}function Ne(Y){return g[Y]!==void 0?g[Y]:i.getParameter(Y)}function Ve(Y,Le){g[Y]!==Le&&(i.pixelStorei(Y,Le),g[Y]=Le)}function Ce(Y){He.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),He.copy(Y))}function Ue(Y){we.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function Be(Y,Le){let me=u.get(Le);me===void 0&&(me=new WeakMap,u.set(Le,me));let W=me.get(Y);W===void 0&&(W=i.getUniformBlockIndex(Le,Y.name),me.set(Y,W))}function Je(Y,Le){let W=u.get(Le).get(Y);c.get(Le)!==W&&(i.uniformBlockBinding(Le,W,Y.__bindingPointIndex),c.set(Le,W))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},g={},H=null,z={},m={},v=new WeakMap,b=[],E=null,l=!1,h=null,d=null,x=null,p=null,_=null,S=null,T=null,y=new ve(0,0,0),M=0,w=!1,A=null,C=null,I=null,R=null,L=null,He.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:ge,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:Me,setBlending:Re,setMaterial:st,setFlipSided:ee,setCullFace:be,setLineWidth:j,setPolygonOffset:se,setScissorTest:ne,activeTexture:ue,bindTexture:B,unbindTexture:xe,compressedTexImage2D:te,compressedTexImage3D:N,texImage2D:le,texImage3D:fe,pixelStorei:Ve,getParameter:Ne,updateUBOMapping:Be,uniformBlockBinding:Je,texStorage2D:ce,texStorage3D:de,texSubImage2D:P,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:Ce,viewport:Ue,reset:ot}}function db(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Pe,f=new WeakMap,g=new Set,m,v=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,P){return b?new OffscreenCanvas(N,P):ro("canvas")}function l(N,P,G){let q=1,Q=te(N);if((Q.width>G||Q.height>G)&&(q=G/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ce=Math.floor(q*Q.width),de=Math.floor(q*Q.height);m===void 0&&(m=E(ce,de));let le=P?E(ce,de):m;return le.width=ce,le.height=de,le.getContext("2d").drawImage(N,0,0,ce,de),ct("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+de+")."),le}else return"data"in N&&ct("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function h(N){return N.generateMipmaps}function d(N){i.generateMipmap(N)}function x(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(N,P,G,q,Q,ce=!1){if(N!==null){if(i[N]!==void 0)return i[N];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de;q&&(de=e.get("EXT_texture_norm16"),de||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=P;if(P===i.RED&&(G===i.FLOAT&&(le=i.R32F),G===i.HALF_FLOAT&&(le=i.R16F),G===i.UNSIGNED_BYTE&&(le=i.R8),G===i.UNSIGNED_SHORT&&de&&(le=de.R16_EXT),G===i.SHORT&&de&&(le=de.R16_SNORM_EXT)),P===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.R8UI),G===i.UNSIGNED_SHORT&&(le=i.R16UI),G===i.UNSIGNED_INT&&(le=i.R32UI),G===i.BYTE&&(le=i.R8I),G===i.SHORT&&(le=i.R16I),G===i.INT&&(le=i.R32I)),P===i.RG&&(G===i.FLOAT&&(le=i.RG32F),G===i.HALF_FLOAT&&(le=i.RG16F),G===i.UNSIGNED_BYTE&&(le=i.RG8),G===i.UNSIGNED_SHORT&&de&&(le=de.RG16_EXT),G===i.SHORT&&de&&(le=de.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RG8UI),G===i.UNSIGNED_SHORT&&(le=i.RG16UI),G===i.UNSIGNED_INT&&(le=i.RG32UI),G===i.BYTE&&(le=i.RG8I),G===i.SHORT&&(le=i.RG16I),G===i.INT&&(le=i.RG32I)),P===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RGB8UI),G===i.UNSIGNED_SHORT&&(le=i.RGB16UI),G===i.UNSIGNED_INT&&(le=i.RGB32UI),G===i.BYTE&&(le=i.RGB8I),G===i.SHORT&&(le=i.RGB16I),G===i.INT&&(le=i.RGB32I)),P===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),G===i.UNSIGNED_INT&&(le=i.RGBA32UI),G===i.BYTE&&(le=i.RGBA8I),G===i.SHORT&&(le=i.RGBA16I),G===i.INT&&(le=i.RGBA32I)),P===i.RGB&&(G===i.UNSIGNED_SHORT&&de&&(le=de.RGB16_EXT),G===i.SHORT&&de&&(le=de.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),P===i.RGBA){let fe=ce?da:Pt.getTransfer(Q);G===i.FLOAT&&(le=i.RGBA32F),G===i.HALF_FLOAT&&(le=i.RGBA16F),G===i.UNSIGNED_BYTE&&(le=fe===Ot?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&de&&(le=de.RGBA16_EXT),G===i.SHORT&&de&&(le=de.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function _(N,P){let G;return N?P===null||P===Yi||P===Mo?G=i.DEPTH24_STENCIL8:P===Ci?G=i.DEPTH32F_STENCIL8:P===bo&&(G=i.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Yi||P===Mo?G=i.DEPTH_COMPONENT24:P===Ci?G=i.DEPTH_COMPONENT32F:P===bo&&(G=i.DEPTH_COMPONENT16),G}function S(N,P){return h(N)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==Bt?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function T(N){let P=N.target;P.removeEventListener("dispose",T),M(P),P.isVideoTexture&&f.delete(P),P.isHTMLTexture&&g.delete(P)}function y(N){let P=N.target;P.removeEventListener("dispose",y),A(P)}function M(N){let P=n.get(N);if(P.__webglInit===void 0)return;let G=N.source,q=v.get(G);if(q){let Q=q[P.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(N),Object.keys(q).length===0&&v.delete(G)}n.remove(N)}function w(N){let P=n.get(N);i.deleteTexture(P.__webglTexture);let G=N.source,q=v.get(G);delete q[P.__cacheKey],o.memory.textures--}function A(N){let P=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(P.__webglFramebuffer[q]))for(let Q=0;Q<P.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(P.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(P.__webglFramebuffer[q]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[q])}else{if(Array.isArray(P.__webglFramebuffer))for(let q=0;q<P.__webglFramebuffer.length;q++)i.deleteFramebuffer(P.__webglFramebuffer[q]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let q=0;q<P.__webglColorRenderbuffer.length;q++)P.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[q]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let G=N.textures;for(let q=0,Q=G.length;q<Q;q++){let ce=n.get(G[q]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(G[q])}n.remove(N)}let C=0;function I(){C=0}function R(){return C}function L(N){C=N}function U(){let N=C;return N>=s.maxTextures&&ct("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function O(N){let P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function V(N,P){let G=n.get(N);if(N.isVideoTexture&&B(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){let q=N.image;if(q===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(G,N,P);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+P)}function D(N,P){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ge(G,N,P);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+P)}function H(N,P){let G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ge(G,N,P);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+P)}function z(N,P){let G=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){Ie(G,N,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+P)}let $={[bs]:i.REPEAT,[ns]:i.CLAMP_TO_EDGE,[fc]:i.MIRRORED_REPEAT},ae={[wn]:i.NEAREST,[ip]:i.NEAREST_MIPMAP_NEAREST,[Wa]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Xc]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},He={[ap]:i.NEVER,[fp]:i.ALWAYS,[lp]:i.LESS,[Cu]:i.LEQUAL,[cp]:i.EQUAL,[Pu]:i.GEQUAL,[up]:i.GREATER,[hp]:i.NOTEQUAL};function we(N,P){if(P.type===Ci&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Bt||P.magFilter===Xc||P.magFilter===Wa||P.magFilter===Pn||P.minFilter===Bt||P.minFilter===Xc||P.minFilter===Wa||P.minFilter===Pn)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,$[P.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,$[P.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,$[P.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ae[P.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ae[P.minFilter]),P.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,He[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===wn||P.minFilter!==Wa&&P.minFilter!==Pn||P.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function De(N,P){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",T));let q=P.source,Q=v.get(q);Q===void 0&&(Q={},v.set(q,Q));let ce=O(P);if(ce!==N.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[ce].usedTimes++;let de=Q[N.__cacheKey];de!==void 0&&(Q[N.__cacheKey].usedTimes--,de.usedTimes===0&&w(P)),N.__cacheKey=ce,N.__webglTexture=Q[ce].texture}return G}function K(N,P,G){return Math.floor(Math.floor(N/G)/P)}function X(N,P,G,q){let ce=N.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,G,q,P.data);else{ce.sort((Ve,Ce)=>Ve.start-Ce.start);let de=0;for(let Ve=1;Ve<ce.length;Ve++){let Ce=ce[de],Ue=ce[Ve],Be=Ce.start+Ce.count,Je=K(Ue.start,P.width,4),ot=K(Ce.start,P.width,4);Ue.start<=Be+1&&Je===ot&&K(Ue.start+Ue.count-1,P.width,4)===Je?Ce.count=Math.max(Ce.count,Ue.start+Ue.count-Ce.start):(++de,ce[de]=Ue)}ce.length=de+1;let le=t.getParameter(i.UNPACK_ROW_LENGTH),fe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ne=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let Ve=0,Ce=ce.length;Ve<Ce;Ve++){let Ue=ce[Ve],Be=Math.floor(Ue.start/4),Je=Math.ceil(Ue.count/4),ot=Be%P.width,Y=Math.floor(Be/P.width),Le=Je,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(i.TEXTURE_2D,0,ot,Y,Le,me,G,q,P.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function ge(N,P,G){let q=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(q=i.TEXTURE_3D);let Q=De(N,P),ce=P.source;t.bindTexture(q,N.__webglTexture,i.TEXTURE0+G);let de=n.get(ce);if(ce.version!==de.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let me=Pt.getPrimaries(Pt.workingColorSpace),W=P.colorSpace===si?null:Pt.getPrimaries(P.colorSpace),Fe=P.colorSpace===si||me===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let fe=l(P.image,!1,s.maxTextureSize);fe=xe(P,fe);let Ne=r.convert(P.format,P.colorSpace),Ve=r.convert(P.type),Ce=p(P.internalFormat,Ne,Ve,P.normalized,P.colorSpace,P.isVideoTexture);we(q,P);let Ue,Be=P.mipmaps,Je=P.isVideoTexture!==!0,ot=de.__version===void 0||Q===!0,Y=ce.dataReady,Le=S(P,fe);if(P.isDepthTexture)Ce=_(P.format===Ws,P.type),ot&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Ne,Ve,null));else if(P.isDataTexture)if(Be.length>0){Je&&ot&&t.texStorage2D(i.TEXTURE_2D,Le,Ce,Be[0].width,Be[0].height);for(let me=0,W=Be.length;me<W;me++)Ue=Be[me],Je?Y&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Ne,Ve,Ue.data):t.texImage2D(i.TEXTURE_2D,me,Ce,Ue.width,Ue.height,0,Ne,Ve,Ue.data);P.generateMipmaps=!1}else Je?(ot&&t.texStorage2D(i.TEXTURE_2D,Le,Ce,fe.width,fe.height),Y&&X(P,fe,Ne,Ve)):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Ne,Ve,fe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Je&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ce,Be[0].width,Be[0].height,fe.depth);for(let me=0,W=Be.length;me<W;me++)if(Ue=Be[me],P.format!==Jn)if(Ne!==null)if(Je){if(Y)if(P.layerUpdates.size>0){let Fe=If(Ue.width,Ue.height,P.format,P.type);for(let Se of P.layerUpdates){let rt=Ue.data.subarray(Se*Fe/Ue.data.BYTES_PER_ELEMENT,(Se+1)*Fe/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Se,Ue.width,Ue.height,1,Ne,rt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ue.width,Ue.height,fe.depth,Ne,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ce,Ue.width,Ue.height,fe.depth,0,Ue.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ue.width,Ue.height,fe.depth,Ne,Ve,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ce,Ue.width,Ue.height,fe.depth,0,Ne,Ve,Ue.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{Je&&ot&&t.texStorage2D(i.TEXTURE_2D,Le,Ce,Be[0].width,Be[0].height);for(let me=0,W=Be.length;me<W;me++)Ue=Be[me],P.format!==Jn?Ne!==null?Je?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Ne,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ce,Ue.width,Ue.height,0,Ue.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?Y&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Ne,Ve,Ue.data):t.texImage2D(i.TEXTURE_2D,me,Ce,Ue.width,Ue.height,0,Ne,Ve,Ue.data)}else if(P.isDataArrayTexture)if(Je){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ce,fe.width,fe.height,fe.depth),Y)if(P.layerUpdates.size>0){let me=If(fe.width,fe.height,P.format,P.type);for(let W of P.layerUpdates){let Fe=fe.data.subarray(W*me/fe.data.BYTES_PER_ELEMENT,(W+1)*me/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,fe.width,fe.height,1,Ne,Ve,Fe)}P.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ne,Ve,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,Ne,Ve,fe.data);else if(P.isData3DTexture)Je?(ot&&t.texStorage3D(i.TEXTURE_3D,Le,Ce,fe.width,fe.height,fe.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ne,Ve,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,Ne,Ve,fe.data);else if(P.isFramebufferTexture){if(ot)if(Je)t.texStorage2D(i.TEXTURE_2D,Le,Ce,fe.width,fe.height);else{let me=fe.width,W=fe.height;for(let Fe=0;Fe<Le;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Ce,me,W,0,Ne,Ve,null),me>>=1,W>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),fe.parentNode!==me){me.appendChild(fe),g.add(P),me.onpaint=W=>{let Fe=W.changedElements;for(let Se of g)Fe.includes(Se.image)&&(Se.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,fe);else{let Fe=i.RGBA,Se=i.RGBA,rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,Se,rt,fe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Je&&ot){let me=te(Be[0]);t.texStorage2D(i.TEXTURE_2D,Le,Ce,me.width,me.height)}for(let me=0,W=Be.length;me<W;me++)Ue=Be[me],Je?Y&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ne,Ve,Ue):t.texImage2D(i.TEXTURE_2D,me,Ce,Ne,Ve,Ue);P.generateMipmaps=!1}else if(Je){if(ot){let me=te(fe);t.texStorage2D(i.TEXTURE_2D,Le,Ce,me.width,me.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,Ve,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,Ne,Ve,fe);h(P)&&d(q),de.__version=ce.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Ie(N,P,G){if(P.image.length!==6)return;let q=De(N,P),Q=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+G);let ce=n.get(Q);if(Q.version!==ce.__version||q===!0){t.activeTexture(i.TEXTURE0+G);let de=Pt.getPrimaries(Pt.workingColorSpace),le=P.colorSpace===si?null:Pt.getPrimaries(P.colorSpace),fe=P.colorSpace===si||de===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ne=P.isCompressedTexture||P.image[0].isCompressedTexture,Ve=P.image[0]&&P.image[0].isDataTexture,Ce=[];for(let Se=0;Se<6;Se++)!Ne&&!Ve?Ce[Se]=l(P.image[Se],!0,s.maxCubemapSize):Ce[Se]=Ve?P.image[Se].image:P.image[Se],Ce[Se]=xe(P,Ce[Se]);let Ue=Ce[0],Be=r.convert(P.format,P.colorSpace),Je=r.convert(P.type),ot=p(P.internalFormat,Be,Je,P.normalized,P.colorSpace),Y=P.isVideoTexture!==!0,Le=ce.__version===void 0||q===!0,me=Q.dataReady,W=S(P,Ue);we(i.TEXTURE_CUBE_MAP,P);let Fe;if(Ne){Y&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,W,ot,Ue.width,Ue.height);for(let Se=0;Se<6;Se++){Fe=Ce[Se].mipmaps;for(let rt=0;rt<Fe.length;rt++){let je=Fe[rt];P.format!==Jn?Be!==null?Y?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,0,0,je.width,je.height,Be,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,ot,je.width,je.height,0,je.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,0,0,je.width,je.height,Be,Je,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,ot,je.width,je.height,0,Be,Je,je.data)}}}else{if(Fe=P.mipmaps,Y&&Le){Fe.length>0&&W++;let Se=te(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,W,ot,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ve){Y?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ce[Se].width,Ce[Se].height,Be,Je,Ce[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ot,Ce[Se].width,Ce[Se].height,0,Be,Je,Ce[Se].data);for(let rt=0;rt<Fe.length;rt++){let tt=Fe[rt].image[Se].image;Y?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,0,0,tt.width,tt.height,Be,Je,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,ot,tt.width,tt.height,0,Be,Je,tt.data)}}else{Y?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Be,Je,Ce[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ot,Be,Je,Ce[Se]);for(let rt=0;rt<Fe.length;rt++){let je=Fe[rt];Y?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,0,0,Be,Je,je.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,ot,Be,Je,je.image[Se])}}}h(P)&&d(i.TEXTURE_CUBE_MAP),ce.__version=Q.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Ee(N,P,G,q,Q,ce){let de=r.convert(G.format,G.colorSpace),le=r.convert(G.type),fe=p(G.internalFormat,de,le,G.normalized,G.colorSpace),Ne=n.get(P),Ve=n.get(G);if(Ve.__renderTarget=P,!Ne.__hasExternalTextures){let Ce=Math.max(1,P.width>>ce),Ue=Math.max(1,P.height>>ce);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ce,fe,Ce,Ue,P.depth,0,de,le,null):t.texImage2D(Q,ce,fe,Ce,Ue,0,de,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ue(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,Ve.__webglTexture,0,ne(P)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,Ve.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(N,P,G){if(i.bindRenderbuffer(i.RENDERBUFFER,N),P.depthBuffer){let q=P.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ce=_(P.stencilBuffer,Q),de=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(P),ce,P.width,P.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(P),ce,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ce,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,N)}else{let q=P.textures;for(let Q=0;Q<q.length;Q++){let ce=q[Q],de=r.convert(ce.format,ce.colorSpace),le=r.convert(ce.type),fe=p(ce.internalFormat,de,le,ce.normalized,ce.colorSpace);ue(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(P),fe,P.width,P.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(P),fe,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,fe,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(N,P,G){let q=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(P.depthTexture);if(Q.__renderTarget=P,(!Q.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,P.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),we(i.TEXTURE_CUBE_MAP,P.depthTexture);let Ne=r.convert(P.depthTexture.format),Ve=r.convert(P.depthTexture.type),Ce;P.depthTexture.format===is?Ce=i.DEPTH_COMPONENT24:P.depthTexture.format===Ws&&(Ce=i.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ce,P.width,P.height,0,Ne,Ve,null)}}else V(P.depthTexture,0);let ce=Q.__webglTexture,de=ne(P),le=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,fe=P.depthTexture.format===Ws?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===is)ue(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,le,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,fe,le,ce,0);else if(P.depthTexture.format===Ws)ue(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,le,ce,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,fe,le,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(N){let P=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){let q=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),q){let Q=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),P.__depthDisposeCallback=Q}P.__boundDepthTexture=q}if(N.depthTexture&&!P.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)Ze(P.__webglFramebuffer[q],N,q);else{let q=N.texture.mipmaps;q&&q.length>0?Ze(P.__webglFramebuffer[0],N,0):Ze(P.__webglFramebuffer,N,0)}else if(G){P.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[q]),P.__webglDepthbuffer[q]===void 0)P.__webglDepthbuffer[q]=i.createRenderbuffer(),Me(P.__webglDepthbuffer[q],N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=P.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ce)}}else{let q=N.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),Me(P.__webglDepthbuffer,N,!1);else{let Q=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(N,P,G){let q=n.get(N);P!==void 0&&Ee(q.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&et(N)}function st(N){let P=N.texture,G=n.get(N),q=n.get(P);N.addEventListener("dispose",y);let Q=N.textures,ce=N.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=P.version,o.memory.textures++),ce){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(P.mipmaps&&P.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let fe=0;fe<P.mipmaps.length;fe++)G.__webglFramebuffer[le][fe]=i.createFramebuffer()}else G.__webglFramebuffer[le]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<P.mipmaps.length;le++)G.__webglFramebuffer[le]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(de)for(let le=0,fe=Q.length;le<fe;le++){let Ne=n.get(Q[le]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ue(N)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){let fe=Q[le];G.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[le]);let Ne=r.convert(fe.format,fe.colorSpace),Ve=r.convert(fe.type),Ce=p(fe.internalFormat,Ne,Ve,fe.normalized,fe.colorSpace,N.isXRRenderTarget===!0),Ue=ne(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ce,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,G.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),we(i.TEXTURE_CUBE_MAP,P);for(let le=0;le<6;le++)if(P.mipmaps&&P.mipmaps.length>0)for(let fe=0;fe<P.mipmaps.length;fe++)Ee(G.__webglFramebuffer[le][fe],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else Ee(G.__webglFramebuffer[le],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);h(P)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let le=0,fe=Q.length;le<fe;le++){let Ne=Q[le],Ve=n.get(Ne),Ce=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Ve.__webglTexture),we(Ce,Ne),Ee(G.__webglFramebuffer,N,Ne,i.COLOR_ATTACHMENT0+le,Ce,0),h(Ne)&&d(Ce)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(le=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,q.__webglTexture),we(le,P),P.mipmaps&&P.mipmaps.length>0)for(let fe=0;fe<P.mipmaps.length;fe++)Ee(G.__webglFramebuffer[fe],N,P,i.COLOR_ATTACHMENT0,le,fe);else Ee(G.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0,le,0);h(P)&&d(le),t.unbindTexture()}N.depthBuffer&&et(N)}function ee(N){let P=N.textures;for(let G=0,q=P.length;G<q;G++){let Q=P[G];if(h(Q)){let ce=x(N),de=n.get(Q).__webglTexture;t.bindTexture(ce,de),d(ce),t.unbindTexture()}}}let be=[],j=[];function se(N){if(N.samples>0){if(ue(N)===!1){let P=N.textures,G=N.width,q=N.height,Q=i.COLOR_BUFFER_BIT,ce=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(N),le=P.length>1;if(le)for(let Ne=0;Ne<P.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let fe=N.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ne=0;Ne<P.length;Ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[Ne]);let Ve=n.get(P[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,G,q,0,0,G,q,Q,i.NEAREST),c===!0&&(be.length=0,j.length=0,be.push(i.COLOR_ATTACHMENT0+Ne),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(be.push(ce),j.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ne=0;Ne<P.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,de.__webglColorRenderbuffer[Ne]);let Ve=n.get(P[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let P=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function ne(N){return Math.min(s.maxSamples,N.samples)}function ue(N){let P=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function B(N){let P=o.render.frame;f.get(N)!==P&&(f.set(N,P),N.update())}function xe(N,P){let G=N.colorSpace,q=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==fa&&G!==si&&(Pt.getTransfer(G)===Ot?(q!==Jn||Q!==Kn)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",G)),P}function te(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.getTextureUnits=R,this.setTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=D,this.setTexture3D=H,this.setTextureCube=z,this.rebindTextures=Re,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pb(i,e){function t(n,s=si){let r,o=Pt.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yf)return i.BYTE;if(n===_f)return i.SHORT;if(n===bo)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Sf)return i.ALPHA;if(n===Ef)return i.RGB;if(n===Jn)return i.RGBA;if(n===is)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===Xs)return i.RED;if(n===$c)return i.RED_INTEGER;if(n===qs)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===Jc)return i.RGBA_INTEGER;if(n===Xa||n===qa||n===Ya||n===Za)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jc||n===Qc||n===eu||n===tu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nu||n===iu||n===su||n===ru||n===ou||n===$a||n===au)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nu||n===iu)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===su)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ru)return r.COMPRESSED_R11_EAC;if(n===ou)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$a)return r.COMPRESSED_RG11_EAC;if(n===au)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===vu||n===xu||n===yu||n===_u||n===bu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===du)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_u)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mu||n===Su||n===Eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mu)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tu||n===wu||n===Ka||n===Au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`,Kf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ht({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jf=class extends ss{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,u=null,f=null,g=null,m=null,v=null,b=null,E=typeof XRWebGLBinding<"u",l=new Kf,h={},d=t.getContextAttributes(),x=null,p=null,_=[],S=[],T=new Pe,y=null,M=null,w=new Hn;w.viewport=new mt;let A=new Hn;A.viewport=new mt;let C=[w,A],I=new Hc,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let X=_[K];return X===void 0&&(X=new lo,_[K]=X),X.getTargetRaySpace()},this.getControllerGrip=function(K){let X=_[K];return X===void 0&&(X=new lo,_[K]=X),X.getGripSpace()},this.getHand=function(K){let X=_[K];return X===void 0&&(X=new lo,_[K]=X),X.getHandSpace()};function U(K){let X=S.indexOf(K.inputSource);if(X===-1)return;let ge=_[X];ge!==void 0&&(ge.update(K.inputSource,K.frame,u||o),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",V);for(let K=0;K<_.length;K++){let X=S[K];X!==null&&(S[K]=null,_[K].disconnect(X))}R=null,L=null,l.reset();for(let K in h)delete h[K];if(e.setRenderTarget(x),v=null,m=null,g=null,s=null,p=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),M!==null){let K=M.camera;K.fov=M.fov,K.zoom=M.zoom,K.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",V),d.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ie=null,Ee=null;d.depth&&(Ee=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=d.stencil?Ws:is,Ie=d.stencil?Mo:Yi);let Me={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};g=this.getBinding(),m=g.createProjectionLayer(Me),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),p=new Wt(m.textureWidth,m.textureHeight,{format:Jn,type:Kn,depthTexture:new Os(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ge={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),p=new Wt(v.framebufferWidth,v.framebufferHeight,{format:Jn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function V(K){for(let X=0;X<K.removed.length;X++){let ge=K.removed[X],Ie=S.indexOf(ge);Ie>=0&&(S[Ie]=null,_[Ie].disconnect(ge))}for(let X=0;X<K.added.length;X++){let ge=K.added[X],Ie=S.indexOf(ge);if(Ie===-1){for(let Me=0;Me<_.length;Me++)if(Me>=S.length){S.push(ge),Ie=Me;break}else if(S[Me]===null){S[Me]=ge,Ie=Me;break}if(Ie===-1)break}let Ee=_[Ie];Ee&&Ee.connect(ge)}}let D=new k,H=new k;function z(K,X,ge){D.setFromMatrixPosition(X.matrixWorld),H.setFromMatrixPosition(ge.matrixWorld);let Ie=D.distanceTo(H),Ee=X.projectionMatrix.elements,Me=ge.projectionMatrix.elements,Ze=Ee[14]/(Ee[10]-1),et=Ee[14]/(Ee[10]+1),Re=(Ee[9]+1)/Ee[5],st=(Ee[9]-1)/Ee[5],ee=(Ee[8]-1)/Ee[0],be=(Me[8]+1)/Me[0],j=Ze*ee,se=Ze*be,ne=Ie/(-ee+be),ue=ne*-ee;if(X.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ue),K.translateZ(ne),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy(X.projectionMatrix),K.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let B=Ze+ne,xe=et+ne,te=j-ue,N=se+(Ie-ue),P=Re*et/xe*B,G=st*et/xe*B;K.projectionMatrix.makePerspective(te,N,P,G,B,xe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function $(K,X){X===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(X.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let X=K.near,ge=K.far;l.texture!==null&&(l.depthNear>0&&(X=l.depthNear),l.depthFar>0&&(ge=l.depthFar)),I.near=A.near=w.near=X,I.far=A.far=w.far=ge,(R!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,L=I.far),I.layers.mask=K.layers.mask|6,w.layers.mask=I.layers.mask&-5,A.layers.mask=I.layers.mask&-3;let Ie=K.parent,Ee=I.cameras;$(I,Ie);for(let Me=0;Me<Ee.length;Me++)$(Ee[Me],Ie);Ee.length===2?z(I,w,A):I.projectionMatrix.copy(w.projectionMatrix),M===null&&K.isPerspectiveCamera&&(M={camera:K,fov:K.fov,zoom:K.zoom}),ae(K,I,Ie)};function ae(K,X,ge){ge===null?K.matrix.copy(X.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(X.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(X.projectionMatrix),K.projectionMatrixInverse.copy(X.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=pa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(m===null&&v===null))return c},this.setFoveation=function(K){c=K,m!==null&&(m.fixedFoveation=K),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=K)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(I)},this.getCameraTexture=function(K){return h[K]};let He=null;function we(K,X){if(f=X.getViewerPose(u||o),b=X,f!==null){let ge=f.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let Ie=!1;ge.length!==I.cameras.length&&(I.cameras.length=0,Ie=!0);for(let et=0;et<ge.length;et++){let Re=ge[et],st=null;if(v!==null)st=v.getViewport(Re);else{let be=g.getViewSubImage(m,Re);st=be.viewport,et===0&&(e.setRenderTargetTextures(p,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(p))}let ee=C[et];ee===void 0&&(ee=new Hn,ee.layers.enable(et),ee.viewport=new mt,C[et]=ee),ee.matrix.fromArray(Re.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Re.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(st.x,st.y,st.width,st.height),et===0&&(I.matrix.copy(ee.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ie===!0&&I.cameras.push(ee)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=n.getBinding();let et=g.getDepthInformation(ge[0]);et&&et.isValid&&et.texture&&l.init(et,s.renderState)}if(Ee&&Ee.includes("camera-access")&&E){e.state.unbindTexture(),g=n.getBinding();for(let et=0;et<ge.length;et++){let Re=ge[et].camera;if(Re){let st=h[Re];st||(st=new Sa,h[Re]=st);let ee=g.getCameraImage(Re);st.sourceTexture=ee}}}}for(let ge=0;ge<_.length;ge++){let Ie=S[ge],Ee=_[ge];Ie!==null&&Ee!==void 0&&Ee.update(Ie,X,u||o)}He&&He(K,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),b=null}let De=new qp;De.setAnimationLoop(we),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}},vb=new Ke,jp=new gt;jp.set(-1,0,0,0,1,0,0,0,1);function xb(i,e){function t(l,h){l.matrixAutoUpdate===!0&&l.updateMatrix(),h.value.copy(l.matrix)}function n(l,h){h.color.getRGB(l.fogColor.value,Rf(i)),h.isFog?(l.fogNear.value=h.near,l.fogFar.value=h.far):h.isFogExp2&&(l.fogDensity.value=h.density)}function s(l,h,d,x,p){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(l,h):h.isMeshLambertMaterial?(r(l,h),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(l,h),g(l,h)):h.isMeshPhongMaterial?(r(l,h),f(l,h),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(l,h),m(l,h),h.isMeshPhysicalMaterial&&v(l,h,p)):h.isMeshMatcapMaterial?(r(l,h),b(l,h)):h.isMeshDepthMaterial?r(l,h):h.isMeshDistanceMaterial?(r(l,h),E(l,h)):h.isMeshNormalMaterial?r(l,h):h.isLineBasicMaterial?(o(l,h),h.isLineDashedMaterial&&a(l,h)):h.isPointsMaterial?c(l,h,d,x):h.isSpriteMaterial?u(l,h):h.isShadowMaterial?(l.color.value.copy(h.color),l.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(l,h){l.opacity.value=h.opacity,h.color&&l.diffuse.value.copy(h.color),h.emissive&&l.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.bumpMap&&(l.bumpMap.value=h.bumpMap,t(h.bumpMap,l.bumpMapTransform),l.bumpScale.value=h.bumpScale,h.side===Vn&&(l.bumpScale.value*=-1)),h.normalMap&&(l.normalMap.value=h.normalMap,t(h.normalMap,l.normalMapTransform),l.normalScale.value.copy(h.normalScale),h.side===Vn&&l.normalScale.value.negate()),h.displacementMap&&(l.displacementMap.value=h.displacementMap,t(h.displacementMap,l.displacementMapTransform),l.displacementScale.value=h.displacementScale,l.displacementBias.value=h.displacementBias),h.emissiveMap&&(l.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,l.emissiveMapTransform)),h.specularMap&&(l.specularMap.value=h.specularMap,t(h.specularMap,l.specularMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest);let d=e.get(h),x=d.envMap,p=d.envMapRotation;x&&(l.envMap.value=x,l.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(p)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.envMapRotation.value.premultiply(jp),l.reflectivity.value=h.reflectivity,l.ior.value=h.ior,l.refractionRatio.value=h.refractionRatio),h.lightMap&&(l.lightMap.value=h.lightMap,l.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,l.lightMapTransform)),h.aoMap&&(l.aoMap.value=h.aoMap,l.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,l.aoMapTransform))}function o(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}function a(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}function c(l,h,d,x){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=x*.5,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}function u(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}function f(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}function g(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}function m(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)}function v(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vn&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.retroreflectivity>0&&(l.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}function b(l,h){h.matcap&&(l.matcap.value=h.matcap)}function E(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(p,_){let S=_.program;n.uniformBlockBinding(p,S)}function u(p,_){let S=s[p.id];S===void 0&&(l(p),S=f(p),s[p.id]=S,p.addEventListener("dispose",d));let T=_.program;n.updateUBOMapping(p,T);let y=e.render.frame;r[p.id]!==y&&(m(p),r[p.id]=y)}function f(p){let _=g();p.__bindingPointIndex=_;let S=i.createBuffer(),T=p.__size,y=p.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function g(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(p){let _=s[p.id],S=p.uniforms,T=p.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let y=0,M=S.length;y<M;y++){let w=S[y];if(Array.isArray(w))for(let A=0,C=w.length;A<C;A++)v(w[A],y,A,T);else v(w,y,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(p,_,S,T){if(E(p,_,S,T)===!0){let y=p.__offset,M=p.value;if(Array.isArray(M)){let w=0;for(let A=0;A<M.length;A++){let C=M[A],I=h(C);b(C,p.__data,w),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(w+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(M,p.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,p.__data)}}function b(p,_,S){typeof p=="number"||typeof p=="boolean"?_[0]=p:p.isMatrix3?(_[0]=p.elements[0],_[1]=p.elements[1],_[2]=p.elements[2],_[3]=0,_[4]=p.elements[3],_[5]=p.elements[4],_[6]=p.elements[5],_[7]=0,_[8]=p.elements[6],_[9]=p.elements[7],_[10]=p.elements[8],_[11]=0):ArrayBuffer.isView(p)?_.set(new p.constructor(p.buffer,p.byteOffset,_.length)):p.toArray(_,S)}function E(p,_,S,T){let y=p.value,M=_+"_"+S;if(T[M]===void 0)return typeof y=="number"||typeof y=="boolean"?T[M]=y:ArrayBuffer.isView(y)?T[M]=y.slice():T[M]=y.clone(),!0;{let w=T[M];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return T[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function l(p){let _=p.uniforms,S=0,T=16;for(let M=0,w=_.length;M<w;M++){let A=Array.isArray(_[M])?_[M]:[_[M]];for(let C=0,I=A.length;C<I;C++){let R=A[C],L=Array.isArray(R.value)?R.value:[R.value];for(let U=0,O=L.length;U<O;U++){let V=L[U],D=h(V),H=S%T,z=H%D.boundary,$=H+z;S+=z,$!==0&&T-$<D.storage&&(S+=T-$),R.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=D.storage}}}let y=S%T;return y>0&&(S+=T-y),p.__size=S,p.__cache={},this}function h(p){let _={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(_.boundary=16,_.storage=p.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",p),_}function d(p){let _=p.target;_.removeEventListener("dispose",d);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function x(){for(let p in s)i.deleteBuffer(s[p]);o=[],s={},r={}}return{bind:c,update:u,dispose:x}}var _b=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ls=null;function bb(){return ls===null&&(ls=new Gi(_b,16,16,qs,Rn),ls.name="DFG_LUT",ls.minFilter=Bt,ls.magFilter=Bt,ls.wrapS=ns,ls.wrapT=ns,ls.generateMipmaps=!1,ls.needsUpdate=!0),ls}var Uu=class{constructor(e={}){let{canvas:t=pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:v=Kn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=o;let E=v,l=new Set([Jc,Kc,$c]),h=new Set([Kn,Yi,bo,Mo,Yc,Zc]),d=new Uint32Array(4),x=new Int32Array(4),p=new k,_=null,S=null,T=[],y=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,A=!1,C=null,I=null,R=null,L=null;this._outputColorSpace=Gt;let U=0,O=0,V=null,D=-1,H=null,z=new mt,$=new mt,ae=null,He=new ve(0),we=0,De=t.width,K=t.height,X=1,ge=null,Ie=null,Ee=new mt(0,0,De,K),Me=new mt(0,0,De,K),Ze=!1,et=new uo,Re=!1,st=!1,ee=new Ke,be=new k,j=new mt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function ue(){return V===null?X:1}let B=n;function xe(F,J){return t.getContext(F,J)}let te,N,P,G,q,Q,ce,de,le,fe,Ne,Ve,Ce,Ue,Be,Je,ot,Y,Le,me,W,Fe,Se;try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",_t,!1),B===null){let J="webgl2";if(B=xe(J,F),B===null)throw xe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(F){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),pt("WebGLRenderer: "+F.message),F}function rt(){te=new Ry(B),te.init(),W=new pb(B,te),N=new xy(B,te,e,W),P=new fb(B,te),N.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),I=B.createFramebuffer(),R=B.createFramebuffer(),L=B.createFramebuffer(),G=new Iy(B),q=new j_,Q=new db(B,te,P,q,N,W,G),ce=new Ay(w),de=new Dv(B),Fe=new gy(B,de),le=new Cy(B,de,G,Fe),fe=new Dy(B,le,de,Fe,G),Y=new Ly(B,N,Q),Be=new yy(q),Ne=new J_(w,ce,te,N,Fe,Be),Ve=new xb(w,q),Ce=new eb,Ue=new ob(te),ot=new my(w,ce,P,fe,b,c),Je=new hb(w,fe,N),Se=new yb(B,G,N,P),Le=new vy(B,te,G),me=new Py(B,te,G),G.programs=Ne.programs,w.capabilities=N,w.extensions=te,w.properties=q,w.renderLists=Ce,w.shadowMap=Je,w.state=P,w.info=G}E!==Kn&&(M=new Uy(E,t.width,t.height,a,s,r));let je=new Jf(w,B);this.xr=je,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let F=te.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=te.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(F){F!==void 0&&(X=F,this.setSize(De,K,!1))},this.getSize=function(F){return F.set(De,K)},this.setSize=function(F,J,he=!0){if(je.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}De=F,K=J,t.width=Math.floor(F*X),t.height=Math.floor(J*X),he===!0&&(t.style.width=F+"px",t.style.height=J+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,F,J)},this.getDrawingBufferSize=function(F){return F.set(De*X,K*X).floor()},this.setDrawingBufferSize=function(F,J,he){De=F,K=J,X=he,t.width=Math.floor(F*he),t.height=Math.floor(J*he),this.setViewport(0,0,F,J)},this.setEffects=function(F){if(E===Kn){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let J=0;J<F.length;J++)if(F[J].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(z)},this.getViewport=function(F){return F.copy(Ee)},this.setViewport=function(F,J,he,re){F.isVector4?Ee.set(F.x,F.y,F.z,F.w):Ee.set(F,J,he,re),P.viewport(z.copy(Ee).multiplyScalar(X).round())},this.getScissor=function(F){return F.copy(Me)},this.setScissor=function(F,J,he,re){F.isVector4?Me.set(F.x,F.y,F.z,F.w):Me.set(F,J,he,re),P.scissor($.copy(Me).multiplyScalar(X).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(F){P.setScissorTest(Ze=F)},this.setOpaqueSort=function(F){ge=F},this.setTransparentSort=function(F){Ie=F},this.getClearColor=function(F){return F.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(F=!0,J=!0,he=!0){let re=0;if(F){let oe=!1;if(V!==null){let ze=V.texture.format;oe=l.has(ze)}if(oe){let ze=V.texture.type,We=h.has(ze),Te=ot.getClearColor(),qe=ot.getClearAlpha(),Qe=Te.r,yt=Te.g,Mt=Te.b;We?(d[0]=Qe,d[1]=yt,d[2]=Mt,d[3]=qe,B.clearBufferuiv(B.COLOR,0,d)):(x[0]=Qe,x[1]=yt,x[2]=Mt,x[3]=qe,B.clearBufferiv(B.COLOR,0,x))}else re|=B.COLOR_BUFFER_BIT}J&&(re|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(re|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&B.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),C=F},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),ot.dispose(),Ce.dispose(),Ue.dispose(),q.dispose(),ce.dispose(),fe.dispose(),Fe.dispose(),Se.dispose(),Ne.dispose(),je.dispose(),je.removeEventListener("sessionstart",Dr),je.removeEventListener("sessionend",Nr),fs.stop()};function tt(F){F.preventDefault(),wf("WebGLRenderer: Context Lost."),A=!0}function Xe(){wf("WebGLRenderer: Context Restored."),A=!1;let F=G.autoReset,J=Je.enabled,he=Je.autoUpdate,re=Je.needsUpdate,oe=Je.type;rt(),G.autoReset=F,Je.enabled=J,Je.autoUpdate=he,Je.needsUpdate=re,Je.type=oe}function _t(F){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function bt(F){let J=F.target;J.removeEventListener("dispose",bt),uh(J)}function uh(F){ir(F),q.remove(F)}function ir(F){let J=q.get(F).programs;J!==void 0&&(J.forEach(function(he){Ne.releaseProgram(he)}),F.isShaderMaterial&&Ne.releaseShaderCache(F))}this.renderBufferDirect=function(F,J,he,re,oe,ze){J===null&&(J=se);let We=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Te=hh(F,J,he,re,oe);P.setMaterial(re,We);let qe=he.index,Qe=1;if(re.wireframe===!0){if(qe=le.getWireframeAttribute(he),qe===void 0)return;Qe=2}let yt=he.drawRange,Mt=he.attributes.position,$e=yt.start*Qe,Ft=(yt.start+yt.count)*Qe;ze!==null&&($e=Math.max($e,ze.start*Qe),Ft=Math.min(Ft,(ze.start+ze.count)*Qe)),qe!==null?($e=Math.max($e,0),Ft=Math.min(Ft,qe.count)):Mt!=null&&($e=Math.max($e,0),Ft=Math.min(Ft,Mt.count));let Zt=Ft-$e;if(Zt<0||Zt===1/0)return;Fe.setup(oe,re,Te,he,qe);let Vt,Nt=Le;if(qe!==null&&(Vt=de.get(qe),Nt=me,Nt.setIndex(Vt)),oe.isMesh)re.wireframe===!0?(P.setLineWidth(re.wireframeLinewidth*ue()),Nt.setMode(B.LINES)):Nt.setMode(B.TRIANGLES);else if(oe.isLine){let pn=re.linewidth;pn===void 0&&(pn=1),P.setLineWidth(pn*ue()),oe.isLineSegments?Nt.setMode(B.LINES):oe.isLineLoop?Nt.setMode(B.LINE_LOOP):Nt.setMode(B.LINE_STRIP)}else oe.isPoints?Nt.setMode(B.POINTS):oe.isSprite&&Nt.setMode(B.TRIANGLES);if(oe.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Nt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let pn=oe._multiDrawStarts,Ge=oe._multiDrawCounts,Mn=oe._multiDrawCount,Ct=qe?de.get(qe).bytesPerElement:1,Qn=q.get(re).currentProgram.getUniforms();for(let jt=0;jt<Mn;jt++)Qn.setValue(B,"_gl_DrawID",jt),Nt.render(pn[jt]/Ct,Ge[jt])}else if(oe.isInstancedMesh)Nt.renderInstances($e,Zt,oe.count);else if(he.isInstancedBufferGeometry){let pn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ge=Math.min(he.instanceCount,pn);Nt.renderInstances($e,Zt,Ge)}else Nt.render($e,Zt)};function Ps(F,J,he,re){C!==null&&F.isNodeMaterial&&C.setObject(re,F),Re===!0&&Be.setState(F,he,!1),F.transparent===!0&&F.side===yn&&F.forceSinglePass===!1?(F.side=Vn,F.needsUpdate=!0,Jt(F,J,re),F.side=as,F.needsUpdate=!0,Jt(F,J,re),F.side=yn):Jt(F,J,re)}this.compile=function(F,J,he=null){he===null&&(he=F),C!==null&&C.renderStart(F,J,he),S=Ue.get(he),S.init(J),y.push(S),he.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(S.pushLight(oe),oe.castShadow&&S.pushShadow(oe))}),F!==he&&F.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(S.pushLight(oe),oe.castShadow&&S.pushShadow(oe))}),S.setupLights(),C!==null&&C.updateLights(S.state.lightsArray),st=this.localClippingEnabled,Re=Be.init(this.clippingPlanes,st),Re===!0&&Be.setGlobalState(this.clippingPlanes,J),C!==null&&Je.render(S.state.shadowsArray,he,J);let re=new Set;return F.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let ze=oe.material;if(ze)if(Array.isArray(ze))for(let We=0;We<ze.length;We++){let Te=ze[We];Ps(Te,he,J,oe),re.add(Te)}else Ps(ze,he,J,oe),re.add(ze)}),S=y.pop(),C!==null&&C.renderEnd(),re},this.compileAsync=function(F,J,he=null){let re=this.compile(F,J,he);return new Promise(oe=>{function ze(){if(re.forEach(function(We){let qe=q.get(We).currentProgram;(qe===void 0||qe.isReady())&&re.delete(We)}),re.size===0){oe(F);return}setTimeout(ze,10)}te.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let kn=null;function Lr(F){kn&&kn(F)}function Dr(){fs.stop()}function Nr(){fs.start()}let fs=new qp;fs.setAnimationLoop(Lr),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(F){kn=F,je.setAnimationLoop(F),F===null?fs.stop():fs.start()},je.addEventListener("sessionstart",Dr),je.addEventListener("sessionend",Nr),this.render=function(F,J){if(J!==void 0&&J.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;C!==null&&C.renderStart(F,J);let he=je.enabled===!0&&je.isPresenting===!0,re=M!==null&&(V===null||he)&&M.begin(w,V);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(J),J=je.getCamera()),F.isScene===!0&&F.onBeforeRender(w,F,J,V),S=Ue.get(F,y.length),S.init(J),S.state.textureUnits=Q.getTextureUnits(),y.push(S),ee.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),et.setFromProjectionMatrix(ee,Vi,J.reversedDepth),st=this.localClippingEnabled,Re=Be.init(this.clippingPlanes,st),_=Ce.get(F,T.length),_.init(),T.push(_),je.enabled===!0&&je.isPresenting===!0){let We=w.xr.getDepthSensingMesh();We!==null&&qo(We,J,-1/0,w.sortObjects)}qo(F,J,0,w.sortObjects),_.finish(),C!==null&&C.updateLights(S.state.lightsArray),w.sortObjects===!0&&_.sort(ge,Ie),ne=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,ne&&ot.addToRenderList(_,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Re===!0&&Be.beginShadows();let oe=S.state.shadowsArray;if(Je.render(oe,F,J),Re===!0&&Be.endShadows(),(re&&M.hasRenderPass())===!1){let We=_.opaque,Te=_.transmissive;if(S.setupLights(),J.isArrayCamera){let qe=J.cameras;if(Te.length>0)for(let Qe=0,yt=qe.length;Qe<yt;Qe++){let Mt=qe[Qe];sr(We,Te,F,Mt)}ne&&ot.render(F);for(let Qe=0,yt=qe.length;Qe<yt;Qe++){let Mt=qe[Qe];Sl(_,F,Mt,Mt.viewport)}}else Te.length>0&&sr(We,Te,F,J),ne&&ot.render(F),Sl(_,F,J)}V!==null&&O===0&&(Q.updateMultisampleRenderTarget(V),Q.updateRenderTargetMipmap(V)),re&&M.end(w),F.isScene===!0&&F.onAfterRender(w,F,J),Fe.resetDefaultState(),D=-1,H=null,y.pop(),y.length>0?(S=y[y.length-1],Q.setTextureUnits(S.state.textureUnits),Re===!0&&Be.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?_=T[T.length-1]:_=null,C!==null&&C.renderEnd()};function qo(F,J,he,re){if(F.visible===!1)return;if(F.layers.test(J.layers)){if(F.isGroup)he=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(J);else if(F.isLightProbeGrid)S.pushLightProbeGrid(F);else if(F.isLight)S.pushLight(F),F.castShadow&&S.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(et)){re&&j.setFromMatrixPosition(F.matrixWorld).applyMatrix4(ee);let We=fe.update(F),Te=F.material;Te.visible&&_.push(F,We,Te,he,j.z,null,J)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(et))){let We=fe.update(F),Te=F.material;if(re&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),j.copy(F.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),j.copy(We.boundingSphere.center)),j.applyMatrix4(F.matrixWorld).applyMatrix4(ee)),Array.isArray(Te)){let qe=We.groups;for(let Qe=0,yt=qe.length;Qe<yt;Qe++){let Mt=qe[Qe],$e=Te[Mt.materialIndex];$e&&$e.visible&&_.push(F,We,$e,he,j.z,Mt,J)}}else Te.visible&&_.push(F,We,Te,he,j.z,null,J)}}let ze=F.children;for(let We=0,Te=ze.length;We<Te;We++)qo(ze[We],J,he,re)}function Sl(F,J,he,re){let{opaque:oe,transmissive:ze,transparent:We}=F;S.setupLightsView(he),Re===!0&&Be.setGlobalState(w.clippingPlanes,he),re&&P.viewport(z.copy(re)),oe.length>0&&ds(oe,J,he),ze.length>0&&ds(ze,J,he),We.length>0&&ds(We,J,he),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function sr(F,J,he,re){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[re.id]===void 0){let $e=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[re.id]=new Wt(1,1,{generateMipmaps:!0,type:$e?Rn:Kn,minFilter:Pn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let ze=S.state.transmissionRenderTarget[re.id],We=re.viewport||z;ze.setSize(We.z*w.transmissionResolutionScale,We.w*w.transmissionResolutionScale);let Te=w.getRenderTarget(),qe=w.getActiveCubeFace(),Qe=w.getActiveMipmapLevel();w.setRenderTarget(ze),w.getClearColor(He),we=w.getClearAlpha(),we<1&&w.setClearColor(16777215,.5),w.clear(),ne&&ot.render(he);let yt=w.toneMapping;w.toneMapping=qi;let Mt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),S.setupLightsView(re),Re===!0&&Be.setGlobalState(w.clippingPlanes,re),ds(F,he,re),Q.updateMultisampleRenderTarget(ze),Q.updateRenderTargetMipmap(ze),te.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ft=0,Zt=J.length;Ft<Zt;Ft++){let Vt=J[Ft],{object:Nt,geometry:pn,material:Ge,group:Mn}=Vt;if(Ge.side===yn&&Nt.layers.test(re.layers)){let Ct=Ge.side;Ge.side=Vn,Ge.needsUpdate=!0,Yo(Nt,he,re,pn,Ge,Mn),Ge.side=Ct,Ge.needsUpdate=!0,$e=!0}}$e===!0&&(Q.updateMultisampleRenderTarget(ze),Q.updateRenderTargetMipmap(ze))}w.setRenderTarget(Te,qe,Qe),w.setClearColor(He,we),Mt!==void 0&&(re.viewport=Mt),w.toneMapping=yt}function ds(F,J,he){let re=J.isScene===!0?J.overrideMaterial:null;for(let oe=0,ze=F.length;oe<ze;oe++){let We=F[oe],{object:Te,geometry:qe,group:Qe}=We,yt=We.material;yt.allowOverride===!0&&re!==null&&(yt=re),Te.layers.test(he.layers)&&Yo(Te,J,he,qe,yt,Qe)}}function Yo(F,J,he,re,oe,ze){C!==null&&oe.isNodeMaterial&&C.setObject(F,oe),F.onBeforeRender(w,J,he,re,oe,ze),F.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),oe.onBeforeRender(w,J,he,re,F,ze),oe.transparent===!0&&oe.side===yn&&oe.forceSinglePass===!1?(oe.side=Vn,oe.needsUpdate=!0,w.renderBufferDirect(he,J,re,oe,F,ze),oe.side=as,oe.needsUpdate=!0,w.renderBufferDirect(he,J,re,oe,F,ze),oe.side=yn):w.renderBufferDirect(he,J,re,oe,F,ze),F.onAfterRender(w,J,he,re,oe,ze)}function Jt(F,J,he){J.isScene!==!0&&(J=se);let re=q.get(F),oe=S.state.lights,ze=S.state.shadowsArray,We=oe.state.version,Te=Ne.getParameters(F,oe.state,ze,J,he,S.state.lightProbeGridArray),qe=Ne.getProgramCacheKey(Te),Qe=re.programs;re.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?J.environment:null,re.fog=J.fog;let yt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;re.envMap=ce.get(F.envMap||re.environment,yt),re.envMapRotation=re.environment!==null&&F.envMap===null?J.environmentRotation:F.envMapRotation,Qe===void 0&&(F.addEventListener("dispose",bt),Qe=new Map,re.programs=Qe);let Mt=Qe.get(qe);if(Mt!==void 0){if(re.currentProgram===Mt&&re.lightsStateVersion===We)return $o(F,Te),Mt}else Te.uniforms=Ne.getUniforms(F),C!==null&&F.isNodeMaterial&&C.build(F,he,Te),F.onBeforeCompile(Te,w),Mt=Ne.acquireProgram(Te,qe),Qe.set(qe,Mt),re.uniforms=Te.uniforms;let $e=re.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&($e.clippingPlanes=Be.uniform),$o(F,Te),re.needsLights=Wn(F),re.lightsStateVersion=We,re.needsLights&&($e.ambientLightColor.value=oe.state.ambient,$e.lightProbe.value=oe.state.probe,$e.sunLights.value=oe.state.sun,$e.sunLightShadows.value=oe.state.sunShadow,$e.directionalLights.value=oe.state.directional,$e.directionalLightShadows.value=oe.state.directionalShadow,$e.spotLights.value=oe.state.spot,$e.spotLightShadows.value=oe.state.spotShadow,$e.rectAreaLights.value=oe.state.rectArea,$e.ltc_1.value=oe.state.rectAreaLTC1,$e.ltc_2.value=oe.state.rectAreaLTC2,$e.pointLights.value=oe.state.point,$e.pointLightShadows.value=oe.state.pointShadow,$e.hemisphereLights.value=oe.state.hemi,$e.sunShadowMatrix.value=oe.state.sunShadowMatrix,$e.sunShadowCascade.value=oe.state.sunShadowCascade,$e.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,$e.spotLightMatrix.value=oe.state.spotLightMatrix,$e.spotLightMap.value=oe.state.spotLightMap,$e.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.lightProbeGrid=S.state.lightProbeGridArray.length>0,re.currentProgram=Mt,re.uniformsList=null,Mt}function Zo(F){if(F.uniformsList===null){let J=F.currentProgram.getUniforms();F.uniformsList=wo.seqWithValue(J.seq,F.uniforms)}return F.uniformsList}function $o(F,J){let he=q.get(F);he.outputColorSpace=J.outputColorSpace,he.batching=J.batching,he.batchingColor=J.batchingColor,he.instancing=J.instancing,he.instancingColor=J.instancingColor,he.instancingMorph=J.instancingMorph,he.skinning=J.skinning,he.morphTargets=J.morphTargets,he.morphNormals=J.morphNormals,he.morphColors=J.morphColors,he.morphTargetsCount=J.morphTargetsCount,he.numClippingPlanes=J.numClippingPlanes,he.numIntersection=J.numClipIntersection,he.vertexAlphas=J.vertexAlphas,he.vertexTangents=J.vertexTangents,he.toneMapping=J.toneMapping}function El(F,J){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;p.setFromMatrixPosition(J.matrixWorld);for(let he=0,re=F.length;he<re;he++){let oe=F[he];if(oe.texture!==null&&oe.boundingBox.containsPoint(p))return oe}return null}function hh(F,J,he,re,oe){J.isScene!==!0&&(J=se),Q.resetTextureUnits();let ze=J.fog,We=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?J.environment:null,Te=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Pt.workingColorSpace,qe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Qe=ce.get(re.envMap||We,qe),yt=re.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Mt=!!he.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),$e=!!he.morphAttributes.position,Ft=!!he.morphAttributes.normal,Zt=!!he.morphAttributes.color,Vt=qi;re.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Vt=w.toneMapping);let Nt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,pn=Nt!==void 0?Nt.length:0,Ge=q.get(re),Mn=S.state.lights;if(Re===!0&&(st===!0||F!==H)){let kt=F===H&&re.id===D;Be.setState(re,F,kt)}let Ct=!1;re.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Mn.state.version||Ge.outputColorSpace!==Te||oe.isBatchedMesh&&Ge.batching===!1||!oe.isBatchedMesh&&Ge.batching===!0||oe.isBatchedMesh&&Ge.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Ge.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Ge.instancing===!1||!oe.isInstancedMesh&&Ge.instancing===!0||oe.isSkinnedMesh&&Ge.skinning===!1||!oe.isSkinnedMesh&&Ge.skinning===!0||oe.isInstancedMesh&&Ge.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ge.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ge.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ge.instancingMorph===!1&&oe.morphTexture!==null||Ge.envMap!==Qe||re.fog===!0&&Ge.fog!==ze||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Be.numPlanes||Ge.numIntersection!==Be.numIntersection)||Ge.vertexAlphas!==yt||Ge.vertexTangents!==Mt||Ge.morphTargets!==$e||Ge.morphNormals!==Ft||Ge.morphColors!==Zt||Ge.toneMapping!==Vt||Ge.morphTargetsCount!==pn||!!Ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,Ge.__version=re.version);let Qn=Ge.currentProgram;Ct===!0&&(Qn=Jt(re,J,oe),C&&re.isNodeMaterial&&C.onUpdateProgram(re,Qn,Ge));let jt=!1,Ui=!1,Ti=!1,Lt=Qn.getUniforms(),Qt=Ge.uniforms;if(P.useProgram(Qn.program)&&(jt=!0,Ui=!0,Ti=!0),re.id!==D&&(D=re.id,Ui=!0),Ge.needsLights){let kt=El(S.state.lightProbeGridArray,oe);Ge.lightProbeGrid!==kt&&(Ge.lightProbeGrid=kt,Ui=!0)}if(jt||H!==F){P.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),Lt.setValue(B,"projectionMatrix",F.projectionMatrix),Lt.setValue(B,"viewMatrix",F.matrixWorldInverse);let dt=Lt.map.cameraPosition;dt!==void 0&&dt.setValue(B,be.setFromMatrixPosition(F.matrixWorld)),N.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",F.isOrthographicCamera===!0),H!==F&&(H=F,Ui=!0,Ti=!0)}if(Ge.needsLights&&(Mn.state.sunShadowMap.length>0&&Lt.setValue(B,"sunShadowMap",Mn.state.sunShadowMap,Q),Mn.state.directionalShadowMap.length>0&&Lt.setValue(B,"directionalShadowMap",Mn.state.directionalShadowMap,Q),Mn.state.spotShadowMap.length>0&&Lt.setValue(B,"spotShadowMap",Mn.state.spotShadowMap,Q),Mn.state.pointShadowMap.length>0&&Lt.setValue(B,"pointShadowMap",Mn.state.pointShadowMap,Q)),oe.isSkinnedMesh){Lt.setOptional(B,oe,"bindMatrix"),Lt.setOptional(B,oe,"bindMatrixInverse");let kt=oe.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Lt.setValue(B,"boneTexture",kt.boneTexture,Q))}oe.isBatchedMesh&&(Lt.setOptional(B,oe,"batchingTexture"),Lt.setValue(B,"batchingTexture",oe._matricesTexture,Q),Lt.setOptional(B,oe,"batchingIdTexture"),Lt.setValue(B,"batchingIdTexture",oe._indirectTexture,Q),Lt.setOptional(B,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",oe._colorsTexture,Q));let Dt=he.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&Y.update(oe,he,Qn),(Ui||Ge.receiveShadow!==oe.receiveShadow)&&(Ge.receiveShadow=oe.receiveShadow,Lt.setValue(B,"receiveShadow",oe.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&J.environment!==null&&(Qt.envMapIntensity.value=J.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=bb()),Ui){if(Lt.setValue(B,"toneMappingExposure",w.toneMappingExposure),Ge.needsLights&&Ko(Qt,Ti),ze&&re.fog===!0&&Ve.refreshFogUniforms(Qt,ze),Ve.refreshMaterialUniforms(Qt,re,X,K,S.state.transmissionRenderTarget[F.id]),Ge.needsLights&&Ge.lightProbeGrid){let kt=Ge.lightProbeGrid;Qt.probesSH.value=kt.texture,Qt.probesMin.value.copy(kt.boundingBox.min),Qt.probesMax.value.copy(kt.boundingBox.max),Qt.probesResolution.value.copy(kt.resolution)}wo.upload(B,Zo(Ge),Qt,Q)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(wo.upload(B,Zo(Ge),Qt,Q),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(B,"center",oe.center),Lt.setValue(B,"modelViewMatrix",oe.modelViewMatrix),Lt.setValue(B,"normalMatrix",oe.normalMatrix),Lt.setValue(B,"modelMatrix",oe.matrixWorld),re.uniformsGroups!==void 0){let kt=re.uniformsGroups;for(let dt=0,Sn=kt.length;dt<Sn;dt++){let Et=kt[dt];Se.update(Et,Qn),Se.bind(Et,Qn)}}return Qn}function Ko(F,J){F.ambientLightColor.needsUpdate=J,F.lightProbe.needsUpdate=J,F.sunLights.needsUpdate=J,F.sunLightShadows.needsUpdate=J,F.directionalLights.needsUpdate=J,F.directionalLightShadows.needsUpdate=J,F.pointLights.needsUpdate=J,F.pointLightShadows.needsUpdate=J,F.spotLights.needsUpdate=J,F.spotLightShadows.needsUpdate=J,F.rectAreaLights.needsUpdate=J,F.hemisphereLights.needsUpdate=J}function Wn(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(F,J,he){let re=q.get(F);re.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),q.get(F.texture).__webglTexture=J,q.get(F.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:he,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,J){let he=q.get(F);he.__webglFramebuffer=J,he.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(F,J=0,he=0){V=F,U=J,O=he;let re=null,oe=!1,ze=!1;if(F){let Te=q.get(F);if(Te.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),z.copy(F.viewport),$.copy(F.scissor),ae=F.scissorTest,P.viewport(z),P.scissor($),P.setScissorTest(ae),D=-1;return}else if(Te.__webglFramebuffer===void 0)Q.setupRenderTarget(F);else if(Te.__hasExternalTextures)Q.rebindTextures(F,q.get(F.texture).__webglTexture,q.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let yt=F.depthTexture;if(Te.__boundDepthTexture!==yt){if(yt!==null&&q.has(yt)&&(F.width!==yt.image.width||F.height!==yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(F)}}let qe=F.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ze=!0);let Qe=q.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Qe[J])?re=Qe[J][he]:re=Qe[J],oe=!0):F.samples>0&&Q.useMultisampledRTT(F)===!1?re=q.get(F).__webglMultisampledFramebuffer:Array.isArray(Qe)?re=Qe[he]:re=Qe,z.copy(F.viewport),$.copy(F.scissor),ae=F.scissorTest}else z.copy(Ee).multiplyScalar(X).floor(),$.copy(Me).multiplyScalar(X).floor(),ae=Ze;if(he!==0&&(re=I),P.bindFramebuffer(B.FRAMEBUFFER,re)&&P.drawBuffers(F,re),P.viewport(z),P.scissor($),P.setScissorTest(ae),oe){let Te=q.get(F.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te.__webglTexture,he)}else if(ze){let Te=J;for(let qe=0;qe<F.textures.length;qe++){let Qe=q.get(F.textures[qe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+qe,Qe.__webglTexture,he,Te)}}else if(F!==null&&he!==0){let Te=q.get(F.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,he)}D=-1};function dn(F){let J=q.get(F);return(J.__readFormat!==F.format||J.__readType!==F.type)&&(J.__readFormat=F.format,J.__readType=F.type,J.__formatReadable=N.textureFormatReadable(F.format),J.__typeReadable=N.textureTypeReadable(F.type)),J}this.readRenderTargetPixels=function(F,J,he,re,oe,ze,We,Te=0){if(!(F&&F.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=q.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe){P.bindFramebuffer(B.FRAMEBUFFER,qe);try{let Qe=F.textures[Te],yt=Qe.format,Mt=Qe.type;F.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let $e=dn(Qe);if($e.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=F.width-re&&he>=0&&he<=F.height-oe&&B.readPixels(J,he,re,oe,W.convert(yt),W.convert(Mt),ze)}finally{let Qe=V!==null?q.get(V).__webglFramebuffer:null;P.bindFramebuffer(B.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(F,J,he,re,oe,ze,We,Te=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=q.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&We!==void 0&&(qe=qe[We]),qe)if(J>=0&&J<=F.width-re&&he>=0&&he<=F.height-oe){P.bindFramebuffer(B.FRAMEBUFFER,qe);let Qe=F.textures[Te],yt=Qe.format,Mt=Qe.type;F.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let $e=dn(Qe);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.bufferData(B.PIXEL_PACK_BUFFER,ze.byteLength,B.STREAM_READ),B.readPixels(J,he,re,oe,W.convert(yt),W.convert(Mt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Zt=V!==null?q.get(V).__webglFramebuffer:null;P.bindFramebuffer(B.FRAMEBUFFER,Zt);let Vt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await gp(B,Vt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ze),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ft),B.deleteSync(Vt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,J=null,he=0){let re=Math.pow(2,-he),oe=Math.floor(F.image.width*re),ze=Math.floor(F.image.height*re),We=J!==null?J.x:0,Te=J!==null?J.y:0;Q.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,he,0,0,We,Te,oe,ze),P.unbindTexture()},this.copyTextureToTexture=function(F,J,he=null,re=null,oe=0,ze=0){let We,Te,qe,Qe,yt,Mt,$e,Ft,Zt,Vt=F.isCompressedTexture?F.mipmaps[ze]:F.image;if(he!==null)We=he.max.x-he.min.x,Te=he.max.y-he.min.y,qe=he.isBox3?he.max.z-he.min.z:1,Qe=he.min.x,yt=he.min.y,Mt=he.isBox3?he.min.z:0;else{let Qt=Math.pow(2,-oe);We=Math.floor(Vt.width*Qt),Te=Math.floor(Vt.height*Qt),F.isDataArrayTexture?qe=Vt.depth:F.isData3DTexture?qe=Math.floor(Vt.depth*Qt):qe=1,Qe=0,yt=0,Mt=0}re!==null?($e=re.x,Ft=re.y,Zt=re.z):($e=0,Ft=0,Zt=0);let Nt=W.convert(J.format),pn=W.convert(J.type),Ge;J.isData3DTexture?(Q.setTexture3D(J,0),Ge=B.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Q.setTexture2DArray(J,0),Ge=B.TEXTURE_2D_ARRAY):(Q.setTexture2D(J,0),Ge=B.TEXTURE_2D),P.activeTexture(B.TEXTURE0),P.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),P.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),P.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);let Mn=P.getParameter(B.UNPACK_ROW_LENGTH),Ct=P.getParameter(B.UNPACK_IMAGE_HEIGHT),Qn=P.getParameter(B.UNPACK_SKIP_PIXELS),jt=P.getParameter(B.UNPACK_SKIP_ROWS),Ui=P.getParameter(B.UNPACK_SKIP_IMAGES);P.pixelStorei(B.UNPACK_ROW_LENGTH,Vt.width),P.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt.height),P.pixelStorei(B.UNPACK_SKIP_PIXELS,Qe),P.pixelStorei(B.UNPACK_SKIP_ROWS,yt),P.pixelStorei(B.UNPACK_SKIP_IMAGES,Mt);let Ti=F.isDataArrayTexture||F.isData3DTexture,Lt=J.isDataArrayTexture||J.isData3DTexture;if(F.isDepthTexture){let Qt=q.get(F),Dt=q.get(J),kt=q.get(Qt.__renderTarget),dt=q.get(Dt.__renderTarget);P.bindFramebuffer(B.READ_FRAMEBUFFER,kt.__webglFramebuffer),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Sn=0;Sn<qe;Sn++)Ti&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(F).__webglTexture,oe,Mt+Sn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(J).__webglTexture,ze,Zt+Sn)),B.blitFramebuffer(Qe,yt,We,Te,$e,Ft,We,Te,B.DEPTH_BUFFER_BIT,B.NEAREST);P.bindFramebuffer(B.READ_FRAMEBUFFER,null),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(oe!==0||F.isRenderTargetTexture||q.has(F)){let Qt=q.get(F),Dt=q.get(J);P.bindFramebuffer(B.READ_FRAMEBUFFER,R),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,L);for(let kt=0;kt<qe;kt++)Ti?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qt.__webglTexture,oe,Mt+kt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qt.__webglTexture,oe),Lt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,ze,Zt+kt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dt.__webglTexture,ze),oe!==0?B.blitFramebuffer(Qe,yt,We,Te,$e,Ft,We,Te,B.COLOR_BUFFER_BIT,B.NEAREST):Lt?B.copyTexSubImage3D(Ge,ze,$e,Ft,Zt+kt,Qe,yt,We,Te):B.copyTexSubImage2D(Ge,ze,$e,Ft,Qe,yt,We,Te);P.bindFramebuffer(B.READ_FRAMEBUFFER,null),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Lt?F.isDataTexture||F.isData3DTexture?B.texSubImage3D(Ge,ze,$e,Ft,Zt,We,Te,qe,Nt,pn,Vt.data):J.isCompressedArrayTexture?B.compressedTexSubImage3D(Ge,ze,$e,Ft,Zt,We,Te,qe,Nt,Vt.data):B.texSubImage3D(Ge,ze,$e,Ft,Zt,We,Te,qe,Nt,pn,Vt):F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ze,$e,Ft,We,Te,Nt,pn,Vt.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ze,$e,Ft,Vt.width,Vt.height,Nt,Vt.data):B.texSubImage2D(B.TEXTURE_2D,ze,$e,Ft,We,Te,Nt,pn,Vt);P.pixelStorei(B.UNPACK_ROW_LENGTH,Mn),P.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ct),P.pixelStorei(B.UNPACK_SKIP_PIXELS,Qn),P.pixelStorei(B.UNPACK_SKIP_ROWS,jt),P.pixelStorei(B.UNPACK_SKIP_IMAGES,Ui),ze===0&&J.generateMipmaps&&B.generateMipmap(Ge),P.unbindTexture()},this.initRenderTarget=function(F){q.get(F).__webglFramebuffer===void 0&&Q.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?Q.setTextureCube(F,0):F.isData3DTexture?Q.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?Q.setTexture2DArray(F,0):Q.setTexture2D(F,0),P.unbindTexture()},this.resetState=function(){U=0,O=0,V=null,P.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}};var Yt=(i,e,t)=>i<e?e:i>t?t:i,Rt=(i,e,t)=>i+(e-i)*t,el=i=>i*i*(3-2*i),wt=(i,e,t)=>{let n=Yt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Qp=1337;function em(i){Qp=i|0}function Mb(i){return i=i^Qp|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var Dn=(i,e)=>Mb(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function yi(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return Rt(Dn(t,e),Dn(t+1,e),s)}var zu=(i,e=0)=>yi(i,e)*.55+yi(i*2.03,e+7)*.3+yi(i*4.1,e+13)*.15;function zt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Ou=new ve,pe=i=>(Ou.set(i),[Ou.r,Ou.g,Ou.b]),jf=(i,e,t)=>[Rt(i[0],e[0],t),Rt(i[1],e[1],t),Rt(i[2],e[2],t)],Nn=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var _i=["city","sakura","coast","country","mountain","snow"],tl={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Ro=1500,ku=260,Zi=0,il=2,Sb=-2.2,nl=0;function nm(i){nl=Math.max(0,_i.indexOf(i))}function Ys(i){let e=Math.floor(i/Ro),t=i-e*Ro,n=el(Yt((t-(Ro-ku))/ku,0,1)),s=_i.length;return{a:_i[((e+nl)%s+s)%s],b:_i[((e+nl+1)%s+s)%s],t:n}}function Ut(i){let e=Ys(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var an=i=>{let e=Ys(i);return e.t<.5?e.a:e.b};function im(i,e){let t=Math.floor(i/Ro),n=i-t*Ro,s=el(Yt((n-(Ro-ku))/ku,0,1)),r=_i.length;return(_i[((t+nl)%r+r)%r]===e?1-s:0)+(_i[((t+nl+1)%r+r)%r]===e?s:0)}function Bn(i,e){let t=Ys(i);return Rt(tl[t.a][e],tl[t.b][e],t.t)}var Sr=650,Er=375,Co=i=>i*Sr+Er;function sl(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Ut(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var Qf={x:new Map,r:new Map,t:new Map};function ed(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function Zs(i){let e=Math.round((i-Er)/Sr);return ed(Qf.x,e,()=>{let t=Co(e);return sl(t)?{k:e,s:t}:null})}function Eb(i){let e=Zs(i);return e?1-wt(8,45,Math.abs(i-e.s)):0}var Tr=1150,Po=820,rl=4.6,td=i=>i*Tr+Po;function nd(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Ut(i+t);if(n.country+n.sakura<.9)return!1}let e=Zs(i);return!(e&&Math.abs(e.s-i)<170)}function Pi(i){let e=Math.round((i-Po)/Tr);return ed(Qf.r,e,()=>{let t=td(e);return nd(t)?{k:e,s:t}:null})}function Tb(i){let e=Pi(i);return e?1-wt(30,70,Math.abs(i-e.s)):0}function wb(i){let e=-rl;return i<11?e-1.3:i<16?Rt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?Rt(e+.7,.35,(i-20)/5.5):.35}var sm=1050,rm=525,vn=85,fn=125,Ab=24,Rb=i=>i*sm+rm;function Cb(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Ut(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function Ii(i){let e=Math.round((i-rm)/sm);return ed(Qf.t,e,()=>{let t=Rb(e);return Cb(t)?{k:e,s:t}:null})}function Pb(i){let e=Ii(i);return e?1-wt(vn+20,fn+25,Math.abs(i-e.s)):0}var Hu=0,Gu=(i,e)=>{let t=i/fn;return Ab*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var us=2,Vu=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(yi(e/300,11)-.5)*2+(yi(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Bn(e,"curv")*(1-Math.max(Eb(e),Tb(e),Pb(e)))}elevRaw(e){return Bn(e,"base")+Bn(e,"hill")*(zu(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=Zs(e);if(n){let o=1-wt(8,45,Math.abs(e-n.s));o>0&&(t=Rt(t,this.elevRaw(n.s),o))}let s=Pi(e);if(s){let o=1-wt(30,70,Math.abs(e-s.s));o>0&&(t=Rt(t,this.elevRaw(s.s),o))}let r=Ii(e);if(r){let o=1-wt(vn+10,fn+45,Math.abs(e-r.s));o>0&&(t=Rt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*us<e+us;){let t=this.X.length-1,n=t*us,s=this.curv(n+us/2)*us,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*us),this.Z.push(this.Z[t]+Math.cos(r+s/2)*us),this.H.push(r+s),this.Y.push(this.elev(n+us))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+us);let n=e/us,s=Math.floor(n),r=n-s;t.x=Rt(this.X[s],this.X[s+1],r),t.z=Rt(this.Z[s],this.Z[s+1],r),t.y=Rt(this.Y[s],this.Y[s+1],r),t.h=Rt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),a=Math.cos(t.h);return t.fx=o,t.fz=a,t.rx=-a,t.rz=o,t}};function tm(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+wt(45,190,r)*16*(.45+.55*yi(e/160+(t>0?50:0),3));case"coast":return t>0?r<s+.9?-.06:-.15+wt(s+1.5,80,r)*24*(.5+.5*yi(e/170,5))+wt(80,200,r)*30:r<s+1.5?-.06:r<s+1.95?-.04:Sb-Math.min(r-(s+2),40)*.13-n;case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let a=8+6*yi(e/140,61),c=r-(s+1);return c<a?c:Math.min(a+(c-a)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+wt(105,230,r)*95*(.6+.4*yi(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?Rt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(yi(e/40+(t>0?3:0),71)-.5):.55+wt(125,210,r)*40*(.45+.55*yi(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+wt(140,215,r)*7*(.4+.6*yi(e/210+(t>0?9:0),7))}}function $s(i,e,t,n){let s=Ys(i),r=tm(s.a,i,e,t,n),o=s.t;e<0&&o>0&&(s.b==="coast"?o=wt(.25,.9,o):s.a==="coast"&&(o=wt(.1,.75,o)));let a=s.t>0?Rt(r,tm(s.b,i,e,t,n),o):r;Hu=0;let c=Pi(i);if(c){let E=Math.abs(i-c.s);if(E>=36)return a;let l=E<29?wb(E):Rt(.35,a,wt(29,36,E));return Math.abs(e)<n+3.2&&(l=Math.min(l,-.08)),l}let u=Ii(i);if(!u)return a;let f=i-u.s,g=Math.abs(f);if(g>=2*fn)return a;let m=Math.abs(e),v=Gu(f,e),b;return g<vn?b=m<=n+1.46?-.25:Math.max(a,v):b=Math.max(a,Math.min(v,m<n+1?-.06:m-(n+1))),Hu=Math.max(0,b-a),b}function om(i){let e=Pi(i);return e?1-wt(27,34,Math.abs(i-e.s)):0}var ol=new k,Wu=new k,Ib=[1,1,1],Lb=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],lm=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),cm=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),ln=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new Ke,this.nm=new gt,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,a,c,u){this.n>=this.cap&&this.grow(this.n+1);let f=this.e,g=this.ne,m=this.n*3,v=this.P,b=this.bb,E=f[0]*e+f[4]*t+f[8]*n+f[12],l=f[1]*e+f[5]*t+f[9]*n+f[13],h=f[2]*e+f[6]*t+f[10]*n+f[14];v[m]=E,v[m+1]=l,v[m+2]=h,E<b[0]&&(b[0]=E),l<b[1]&&(b[1]=l),h<b[2]&&(b[2]=h),E>b[3]&&(b[3]=E),l>b[4]&&(b[4]=l),h>b[5]&&(b[5]=h);let d=g[0]*s+g[3]*r+g[6]*o,x=g[1]*s+g[4]*r+g[7]*o,p=g[2]*s+g[5]*r+g[8]*o,_=127/(Math.sqrt(d*d+x*x+p*p)||1);if(this.N[m]=Math.round(d*_),this.N[m+1]=Math.round(x*_),this.N[m+2]=Math.round(p*_),this.hasUV&&(this.U[this.n*2]=a,this.U[this.n*2+1]=c),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(l)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let S=u||Ib,T=this.Cl;T[m]=S[0]>=1?255:S[0]<=0?0:S[0]*255+.5,T[m+1]=S[1]>=1?255:S[1]<=0?0:S[1]*255+.5,T[m+2]=S[2]>=1?255:S[2]<=0?0:S[2]*255+.5}this.n++}quad(e,t,n,s,r,o){ol.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Wu.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Wu.lengthSq()<1e-12&&Wu.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),ol.cross(Wu).normalize();let a=ol.x,c=ol.y,u=ol.z,f=o?o.u0:0,g=o?o.u1:1,m=o?o.v0:0,v=o?o.v1:1;this.vtx(e[0],e[1],e[2],a,c,u,f,m,r),this.vtx(t[0],t[1],t[2],a,c,u,g,m,r),this.vtx(n[0],n[1],n[2],a,c,u,g,v,r),this.vtx(e[0],e[1],e[2],a,c,u,f,m,r),this.vtx(n[0],n[1],n[2],a,c,u,g,v,r),this.vtx(s[0],s[1],s[2],a,c,u,f,v,r)}box(e,t,n,s,r,o,a,c=null,u=null){let f=c||{},g=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],g.nz||a,f.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],g.pz||a,f.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],g.nx||a,f.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],g.px||a,f.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],g.py||a,f.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],g.ny||a,f.ny)}cyl(e,t,n,s,r,o,a,c,u=!0){let f=(s-r)/o;for(let g=0;g<a;g++){let m=g/a*Math.PI*2,v=(g+1)/a*Math.PI*2,b=Math.cos(m),E=Math.sin(m),l=Math.cos(v),h=Math.sin(v),d=[e+b*s,t,n+E*s],x=[e+l*s,t,n+h*s],p=[e+l*r,t+o,n+h*r],_=[e+b*r,t+o,n+E*r];this.vtx(d[0],d[1],d[2],b,f,E,0,0,c),this.vtx(_[0],_[1],_[2],b,f,E,0,0,c),this.vtx(p[0],p[1],p[2],l,f,h,0,0,c),this.vtx(d[0],d[1],d[2],b,f,E,0,0,c),this.vtx(p[0],p[1],p[2],l,f,h,0,0,c),this.vtx(x[0],x[1],x[2],l,f,h,0,0,c),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,c),this.vtx(p[0],p[1],p[2],0,1,0,0,0,c),this.vtx(_[0],_[1],_[2],0,1,0,0,0,c))}}rod(e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],u=t[2]-e[2],f=Math.hypot(a,c,u);a/=f,c/=f,u/=f;let g=0,m=1,v=0;Math.abs(c)>.99&&(g=1,m=0);let b=c*v-u*m,E=u*g-a*v,l=a*m-c*g,h=Math.hypot(b,E,l);b/=h,E/=h,l/=h;let d=E*u-l*c,x=l*a-b*u,p=b*c-E*a;for(let _=0;_<r;_++){let S=_/r*Math.PI*2,T=(_+1)/r*Math.PI*2,y=Math.cos(S),M=Math.sin(S),w=Math.cos(T),A=Math.sin(T),C=b*y+d*M,I=E*y+x*M,R=l*y+p*M,L=b*w+d*A,U=E*w+x*A,O=l*w+p*A,V=[e[0]+C*n,e[1]+I*n,e[2]+R*n],D=[e[0]+L*n,e[1]+U*n,e[2]+O*n],H=[t[0]+L*s,t[1]+U*s,t[2]+O*s],z=[t[0]+C*s,t[1]+I*s,t[2]+R*s];this.vtx(V[0],V[1],V[2],C,I,R,0,0,o),this.vtx(D[0],D[1],D[2],L,U,O,0,0,o),this.vtx(H[0],H[1],H[2],L,U,O,0,0,o),this.vtx(V[0],V[1],V[2],C,I,R,0,0,o),this.vtx(H[0],H[1],H[2],L,U,O,0,0,o),this.vtx(z[0],z[1],z[2],C,I,R,0,0,o)}return f}blob(e,t,n,s,r,o,a=0,c=1){let u=am[a%am.length],f=u.attributes.position.array,g=u.attributes.normal.array,m=u.userData.disp;for(let v=0;v<f.length;v+=3){let b=1+m[v/3],E=Math.max(0,Math.min(1,g[v+1]*.5+.5)),l=[o[0]+(r[0]-o[0])*E,o[1]+(r[1]-o[1])*E,o[2]+(r[2]-o[2])*E];this.vtx(e+f[v]*s*b,t+f[v+1]*s*b*c,n+f[v+2]*s*b,g[v],g[v+1],g[v+2],0,0,l)}}wire(e,t,n,s,r,o=10){let a=e;this.noShadow=!0;for(let c=1;c<=o;c++){let u=c/o,f=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(a,f,s,s,3,r),a=f}this.noShadow=!1}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,a,c]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],a,c,s[o])}bill(e,t,n,s,r,o,a,c,u,f,g=Lb,m=1){let v=(u.u1-u.u0)*.5,b=(u.v1-u.v0)*.5,E=u.u0+v,l=u.v0+b;for(let h=0;h<g.length;h+=2){let d=g[h],x=g[h+1];this.offX=d*a,this.offY=x*c,this.vtx(e,t,n,s,r,o,E+d*v*m,l+x*b*m,f)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,a=e.C,c=e.U,u=this.n,f=this.bb;for(let g=0;g<e.n*3;g+=3){let m=r[g],v=r[g+1],b=r[g+2],E=u*3+g,l=n[0]*m+n[4]*v+n[8]*b+n[12],h=n[1]*m+n[5]*v+n[9]*b+n[13],d=n[2]*m+n[6]*v+n[10]*b+n[14];this.P[E]=l,this.P[E+1]=h,this.P[E+2]=d,this.hasAO&&(this.A[u+g/3]=this.aoByte(h)),l<f[0]&&(f[0]=l),h<f[1]&&(f[1]=h),d<f[2]&&(f[2]=d),l>f[3]&&(f[3]=l),h>f[4]&&(f[4]=h),d>f[5]&&(f[5]=d);let x=o[g],p=o[g+1],_=o[g+2],S=s[0]*x+s[3]*p+s[6]*_,T=s[1]*x+s[4]*p+s[7]*_,y=s[2]*x+s[5]*p+s[8]*_,M=127/(Math.sqrt(S*S+T*T+y*y)||1);this.N[E]=Math.round(S*M),this.N[E+1]=Math.round(T*M),this.N[E+2]=Math.round(y*M)}if(this.hasColor&&(a?this.Cl.set(a,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(c?this.U.set(c,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasOff){let g=Math.hypot(n[0],n[1],n[2]),m=e.O;if(m)for(let v=0;v<e.n*2;v++)this.O[u*2+v]=m[v]*g;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new vt,t=this.n,n=this.bb;if(e.setAttribute("position",new St(this.P.slice(0,t*3),3)),e.setAttribute("normal",new St(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new St(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new St(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new St(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new St(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new St(this.Cl.slice(0,t*3),3,!0)),e.boundingBox=new ui(new k(n[0],n[1],n[2]),new k(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new hi),e}},am=[0,1,2,3].map(i=>{let e=new La(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,a)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(a*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});ft.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var Db=ft.shadowmap_pars_fragment;function rd(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;ft.shadowmap_pars_fragment=Db.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}rd(1);function pm(i,e){let t=i<e?`#define GRAZE_FADE
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var Mi=4200,Oe={uSkyHor:{value:new ve(.7,.8,.9)},uSkyZen:{value:new ve(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Pe},uSunDir:{value:new k(0,1,0)},uSunCol:{value:new ve(1,1,1)},uTuftV:{value:new mt(.167,.333,.164,.165)},uGhShade:{value:new k(.3,.85,1.7)},uBlShade:{value:new k(7.5,3,2.3)},uTunA:{value:new k(0,-1e4,0)},uTunB:{value:new k(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new k},uCarFwd:{value:new k(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:Nb()},uCloudTex:{value:null},uCloudOrg:{value:new Pe},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Pe(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function mm(i){let e=new Gi(new Uint8Array(i),i.length,1,Xs);return e.minFilter=e.magFilter=wn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var fi=mm([16,16,16,70,200,255,255,255]),al=mm([28,40,70,130,200,240,255,255]);function Nb(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new Gi(e,256,256,Jn);return s.wrapS=s.wrapT=bs,s.magFilter=Bt,s.minFilter=Pn,s.generateMipmaps=!0,s.colorSpace=si,s.needsUpdate=!0,s}var Si=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Xu=1600,id=256,Ub=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Xu).toFixed(8)} + 0.5).r * uCloudSh; }`,Fb=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,gm=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Xu).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,vm=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,Bb=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,Ob=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,qu=new gr;qu.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};qu.customProgramCacheKey=()=>"propdepth";function xm(){let i=new Wt(id,id,{format:Xs,type:Kn,depthBuffer:!1,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),e=new ht({uniforms:{uCenter:{value:new Pe},uOrigin:Oe.uOrigin,uTime:Oe.uTime,uNoiseTex:Oe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Xu.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new ut(new nn(2,2),e),n=new Ms;t.frustumCulled=!1,Oe.uCloudTex.value=i.texture,Oe.uCloudTex.rt=i;let s=Xu/id;return{update(r,o,a,c,u){let f=Math.round((o+c)/s)*s-c,g=Math.round((a+u)/s)*s-u;e.uniforms.uCenter.value.set(f,g),Oe.uCloudOrg.value.set(f,g);let m=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(m)}}}function Ks(i,e="",t="",n=!0){i.uniforms.uOrigin=Oe.uOrigin,i.uniforms.uCloudSh=Oe.uCloudSh,i.uniforms.uTime=Oe.uTime,i.uniforms.uNoiseTex=Oe.uNoiseTex,i.uniforms.uCloudTex=Oe.uCloudTex,i.uniforms.uCloudOrg=Oe.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=Oe[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?gm:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Si}${Ub}${Bb}${e}`).replace("#include <opaque_fragment>",`${n?vm:Fb}${t}${Ob}
#include <opaque_fragment>`)}var zb=`
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
`,kb=`
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
#endif`,Hb=`
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
}`,ym={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},bi={tex:null,uFieldK:{value:new Pe(1/12,1/21)},uFieldC:{value:new k(1,1,1)},uFieldM:{value:new k(.16,.32,.05)}};function _m(i){let e={};for(let t of i)e[ym[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),bi.tex&&i.includes("country")&&(e.F_PAINT=""),e}var um=new Map;function ll(i){let e=[...new Set(i)].sort().join("+"),t=um.get(e);return t||(t=bm(_m(e.split("+")),e),um.set(e,t)),t}function bm(i=_m(Object.keys(ym)),e="all"){let t=new hn({color:16777215,gradientMap:fi});t.defines=i;let n=i.F_PAINT!==void 0;return t.onBeforeCompile=s=>{s.uniforms.uSkyHor=Oe.uSkyHor,s.uniforms.uSkyZen=Oe.uSkyZen,s.uniforms.uWet=Oe.uWet,s.uniforms.uSakWet=Oe.uSakWet,s.uniforms.uNight=Oe.uNight,s.uniforms.uSunDir=Oe.uSunDir,s.uniforms.uSunCol=Oe.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])s.uniforms[r]=Oe[r];n&&(s.uniforms.uFieldTex={value:bi.tex},s.uniforms.uFieldK=bi.uFieldK,s.uniforms.uFieldC=bi.uFieldC),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),Ks(s,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${zb}`,Hb+kb,!1),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v19-"+e+(n?"-fp":""),t}function hm(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),Ks(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function Mm(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=Oe[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function Vb(i){i.uniforms.uLightsOn=Oe.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function fm(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function od(i){return i.onBeforeCompile=e=>Ks(e),i.customProgramCacheKey=()=>"cs",i}var Gb="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",Wb=(i,e,t="")=>`
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
}`;function ad(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=Oe[o];s&&Object.assign(r.uniforms,s.uniforms),Ks(r,Gb+(s?s.pars:""),Wb(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var Js=48;function Sm(i,e){let t=new hn({color:16777215,gradientMap:al}),n=!!bi.tex;return t.onBeforeCompile=s=>{Object.assign(s.uniforms,e,i);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])s.uniforms[r]=Oe[r];n&&(s.uniforms.uFieldC=bi.uFieldC,s.uniforms.uFieldM=bi.uFieldM),s.vertexShader=s.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${gm}
uniform vec4 uG[${Js}], uGM[${Js/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${n?`
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${Js-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${vm}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Em(i,e){let t={};t.ground=bm(),t.color=hm(new hn({vertexColors:!0,gradientMap:fi}),1.6,.1,"color-v3",fm),t.atlas=new hn({vertexColors:!0,gradientMap:fi,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),t.atlas.onBeforeCompile=a=>{fm(a),Vb(a),Ks(a)},t.atlas.customProgramCacheKey=()=>"atlas-v5",t.foliage=hm(new hn({vertexColors:!0,gradientMap:al}),2.6,.24,"foliage-v2"),t.lamp=new gn({color:15789798}),t.sig=new gn({color:new ve(.15,1.7,1.1)}),t.sodium=new gn({color:new ve(5,2.3,.65)}),t.decal=new hn({vertexColors:!0,gradientMap:fi,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),t.decal.onBeforeCompile=a=>Ks(a),t.decal.customProgramCacheKey=()=>"decal-v1",e&&(t.leaf=new hn({map:e,vertexColors:!0,gradientMap:al,alphaTest:.42,side:yn}),t.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",ft.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),Ks(a),Mm(a),a.uniforms.uTuftV=Oe.uTuftV,a.uniforms.uWind=Oe.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},t.leaf.customProgramCacheKey=()=>"leaf-v5"),t.wire=new gn({color:2303020});let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);let o=new ni(n);return t.pool=new gn({map:o,color:16762746,transparent:!0,opacity:0,blending:Xi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),t.glowTex=o,t}function Tm(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let a=(o+.5)/64*2-1,c=Math.min(1,Math.max(0,(a-i)/(e-i))),u=c*c*(3-2*c);s[o]=Math.round(255*(t+(1-t)*u))}let r=new Gi(s,64,1,Xs);return r.minFilter=r.magFilter=Bt,r.generateMipmaps=!1,r.needsUpdate=!0,r}var Xb=Tm(-.05,.5,.05),qb=Tm(-.5,.45,.12);function dm(i,e){i.uniforms.uTime=Oe.uTime,i.uniforms.uWind=Oe.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var sd=(i,e,t)=>{let n=new ve().setRGB(i/255,e/255,t/255,Gt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},Yb=`diffuseColor.rgb *= mix(${sd(62,38,34)}, mix(${sd(205,105,150)}, ${sd(255,232,242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;function ld(i,{blossom:e=!1}={}){let t=new hn({map:i,vertexColors:!0,color:e?16777215:new ve().setRGB(.68,.85,.46,Gt),gradientMap:e?qb:Xb,alphaTest:.5,side:as});t.shadowSide=yn,t.onBeforeCompile=s=>{Ks(s),Mm(s),dm(s,!1),s.uniforms.uGhShade=e?Oe.uBlShade:Oe.uGhShade,s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?Yb:"diffuseColor.rgb *= gTx.b;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v1":"gleaf-v1";let n=new gr;return n.onBeforeCompile=s=>dm(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var Zb=pe("#f2c230"),wm=pe("#26272c");function Yu(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=Bn(s,"rw"),a=n*(o+.8),c=Ut(s),u=c.city+c.sakura>.5;t.push({x:r.x+r.rx*a,z:r.z+r.rz*a,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function Am(){let i=new on,e=od(new hn({vertexColors:!0,gradientMap:fi})),t=new gn({color:new ve(6,.45,.3)}),n=new gn({color:new ve(.22,.03,.03)}),s=[0,1].map(()=>{let r=new on,o=new on;r.add(o),o.position.set(-.42,1.02,-.02);let a=new ln,c=3.6;for(let g=0,m=0;m<c;g++,m+=.45)a.box(-Math.min(m+.45,c),-.065,-.065,-m,.065,.065,g%2?wm:Zb);a.box(0,-.09,-.07,.38,.09,.07,wm);let u=new ut(a.build(),e);u.castShadow=!0,o.add(u);let f=[-.28,.28].map(g=>{let m=new ut(new pr(.13,18),n);return m.position.set(g,2.75,-.1),m.rotation.y=Math.PI,r.add(m),m});return i.add(r),{root:r,pivot:o,arm:u,lamps:f,L:c}});return i.visible=!1,{group:i,update(r,o,a,c,u){i.visible=!!r,r&&r.forEach((f,g)=>{let m=s[g];m.root.position.set(f.x-o.x,f.y,f.z-o.z),m.root.rotation.y=f.yaw,m.arm.scale.x=(f.rw+.25)/m.L,m.pivot.rotation.z=-a*(Math.PI/2-.06);let v=Math.floor(u*2.5)%2;m.lamps[0].material=c&&v===0?t:n,m.lamps[1].material=c&&v===1?t:n})}}}function $b(){let t=()=>{let h=document.createElement("canvas");return h.width=1024,h.height=512,h},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),a='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let c=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,c);for(let h=0;h<1024;h+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(h,0,2,c);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,c-14,1024,14);let u=[.1,.36,.62,.88].map(h=>h*1024),f=(h,d,x,p)=>{let _=r.createLinearGradient(h,d,h+x*.3,d+p);_.addColorStop(0,"#5d7fae"),_.addColorStop(.6,"#9db7d6"),_.addColorStop(1,"#2f3f55"),r.fillStyle=_,r.fillRect(h,d,x,p),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(h+x*.2,d),r.lineTo(h+x*.38,d),r.lineTo(h+x*.1,d+p),r.lineTo(h-x*.08,d+p),r.fill(),o.fillStyle="#ffeccc",o.fillRect(h,d,x,p)};for(let h=0;h<u.length-1;h++){let d=u[h]+40,x=u[h+1]-40,p=3,_=(x-d)/p;for(let S=0;S<p;S++)r.fillStyle="#6b737c",r.fillRect(d+S*_+2,34,_-4,58),f(d+S*_+6,38,_-12,50)}for(let h of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(h+2,34,28,58),f(h+5,38,22,50);for(let h of u)r.fillStyle="#c3c8ce",r.fillRect(h-30,22,60,c-36),r.fillStyle="#7b828a",r.fillRect(h-1,22,2,c-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(h-30,22,60,c-36),f(h-24,34,20,46),f(h+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let h of u)r.fillStyle="#c3c8ce",r.fillRect(h-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${a}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let g=0,m=176,v=256,b=256;r.fillStyle="#d3d7dc",r.fillRect(g,m,v,b),r.fillStyle="#20262e",r.fillRect(g+14,m+44,v-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(g+40,m+44),r.lineTo(g+80,m+44),r.lineTo(g+40,m+140),r.lineTo(g+14,m+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(g+v/2-4,m+44,8,96),r.fillStyle="#111",r.fillRect(g+50,m+12,v-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${a}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",g+v/2,m+26),r.fillStyle="#1f9a50",r.fillRect(g,m+150,v,18),r.fillStyle="#e8892b",r.fillRect(g,m+170,v,7);for(let h of[g+40,g+v-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(h,m+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(h+(h<g+v/2?28:-28),m+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(g,m+b-30,v,30),r.fillStyle="#3a3f46",r.font=`800 16px ${a}`,r.fillText("17",g+v/2,m+220),o.fillStyle="#111",o.fillRect(g,m,v,b),o.fillStyle="#ff9a2a",o.font=`800 18px ${a}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",g+v/2,m+26);for(let h of[g+40,g+v-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(h,m+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let E=h=>{let d=new ni(h);return d.colorSpace=Gt,d.anisotropy=4,d},l=(h,d,x,p)=>({u0:h/1024,u1:(h+x)/1024,v0:1-(d+p)/512,v1:1-d/512});return{map:E(n),em:E(s),side:l(0,0,1024,c),sideR:{...l(0,0,1024,c),flip:!0},front:l(g,m,v,b),plain:l(342,202,28,28)}}function Rm(){let i=$b(),e=od(new hn({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:fi})),t=new ln({uv:!0}),n=[1,1,1],s=pe("#9aa1a9"),r=pe("#3b4047"),o=pe("#2a2d33"),a=19.5,c=.6,u=3,f=1.45,g=.95,m=4,v=4,b=.3,E=pe("#33363b"),l={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},h=(y,M,w,A,C,I,R,L=!1)=>t.box(y,M,w,A,C,I,R,l,L?{noBottom:!0}:null),d=(y,M,w,A,C,I)=>{let L=w-C/2,U=w+C/2;for(let O=0;O<12;O++){let V=O/12*Math.PI*2,D=(O+1)/12*Math.PI*2,H=y+Math.cos(V)*A,z=M+Math.sin(V)*A,$=y+Math.cos(D)*A,ae=M+Math.sin(D)*A;t.quad([H,z,L],[$,ae,L],[$,ae,U],[H,z,U],I,i.plain),t.quad([y,M,U],[H,z,U],[$,ae,U],[$,ae,U],I,i.plain),t.quad([y,M,L],[$,ae,L],[H,z,L],[H,z,L],I,i.plain)}},x=u*a+(u-1)*c;for(let y=0;y<u;y++){let M=-x/2+a/2+y*(a+c),w=M-a/2,A=M+a/2;t.quad([w,g,f],[A,g,f],[A,m,f],[w,m,f],n,i.side),t.quad([A,g,-f],[w,g,-f],[w,m,-f],[A,m,-f],n,i.side);let C=y===u-1,I=y===0;t.quad([A,g,f],[A,g,-f],[A,m,-f],[A,m,f],C?n:pe("#c9ced4"),C?i.front:i.plain),t.quad([w,g,-f],[w,g,f],[w,m,f],[w,m,-f],I?n:pe("#c9ced4"),I?i.front:i.plain);for(let R=0;R<v;R++)for(let L of[1,-1]){let U=R/v*Math.PI/2,O=(R+1)/v*Math.PI/2,V=L*f*Math.cos(U),D=m+b*Math.sin(U),H=L*f*Math.cos(O),z=m+b*Math.sin(O);t.quad([w,D,V],[A,D,V],[A,z,H],[w,z,H],s,i.plain);for(let $ of[w,A]){let ae=[[$,m,0],[$,D,V],[$,z,H]];t.quad(ae[0],ae[1],ae[2],ae[2],s,i.plain),t.quad(ae[0],ae[2],ae[1],ae[1],s,i.plain)}}for(let R of[1,-1])h(w,m-.02,R*f-.04,A,m+.05,R*f+.04,r);for(let R of[M-5.5,M+5.5])h(R-1.3,m+.2,-.8,R+1.3,m+.62,.8,pe("#c4c9cf"),!0);h(w+.3,.82,-f+.1,A-.3,g,f-.1,o);for(let[R,L,U,O]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])h(M+R-L/2,.82-U,-1.15+O*.2,M+R+L/2,.82,1.15+O*.2,O>0?o:r);for(let R of[M-7,M+7]){for(let L of[1,-1]){h(R-1.35,.32,L*.86,R+1.35,.56,L*1.02,r);for(let U of[-1.05,1.05])h(R+U-.17,.3,L*.84,R+U+.17,.58,L*1.06,o)}h(R-.35,.5,-1,R+.35,.8,1,r);for(let L of[-1.05,1.05])for(let U of[1,-1])d(R+L,.43,U*.6,.43,.13,E)}if(y<u-1&&h(A,g+.15,-.95,A+c,m-.1,.95,pe("#3a3e44")),y===0){let R=M-3,L=m+.7;t.box(R-.6,m+.26,-.6,R+.6,m+.42,.6,r),t.rod([R-.5,m+.42,0],[R,L+.9,0],.03,.03,4,r),t.rod([R+.5,m+.42,0],[R,L+.9,0],.03,.03,4,r),t.rod([R,L+.9,-.85],[R,L+.9,.85],.03,.03,4,r)}}let p=new ut(t.build(),e);p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1;let _=new on;_.add(p),_.visible=!1;let S={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:x},T={};return{group:_,st:S,start(y,M,w=16){Object.assign(S,{active:!0,sx:y,dir:M,speed:w,u:-M*290,ds:M>0?-2:2,cleared:!1}),_.visible=!0},update(y,M,w,A,C){if(!S.active)return;S.u+=S.dir*S.speed*y;let I=S.u-S.dir*S.length/2;if(!S.cleared&&(S.dir>0?I>C+1:I<-C-1)&&(S.cleared=!0),Math.abs(S.u)>330){S.active=!1,_.visible=!1;return}M.at(S.sx,T),_.position.set(T.x+T.fx*S.ds+T.rx*S.u-w.x,T.y+.34,T.z+T.fz*S.ds+T.rz*S.u-w.z),_.rotation.y=T.h+(S.dir>0?Math.PI:0),e.emissiveIntensity=.3+A*1.1}}}var Kb='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',wr=2048,Ar=4096;function Ku(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var Lm=Ku(256,256);{let i=Lm.getContext("2d"),e=i.createImageData(256,256),t=zt(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var cd=class{constructor(){this.cA=Ku(wr,Ar),this.cE=Ku(wr/2,Ar/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,wr/2,Ar/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,wr,Ar),this.x=0,this.y=0,this.rowH=0,this.cells={},this.grain=this.a.createPattern(Lm,"repeat")}add(e,t,n,s){if(this.x+t+4>wr&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>Ar)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let c of[this.a,this.e])c.save(),c===this.e&&c.scale(.5,.5),c.translate(o.x,o.y),c.beginPath(),c.rect(0,0,t,n),c.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let a=.5;return this.cells[e]={u0:(o.x+a)/wr,u1:(o.x+t-a)/wr,v0:1-(o.y+n-a)/Ar,v1:1-(o.y+a)/Ar,w:t,h:n},this.cells[e]}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new ni(n);return s.colorSpace=Gt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Pn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function bn(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function Gn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([a,c])=>o.addColorStop(a,c)),i.fillStyle=o,i.fillRect(e,t,n,s)}function Io(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),Gn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}bn(i,e,t,n,.13)}function Ss(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function Z(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Lo(i,e,t,n,s,r,o="#d9dde2",a="rgba(40,45,60,0.55)"){Z(i,e-r,t-r,n+2*r,s+2*r,o),Z(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=a,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function Es(i,e,t,n,s,r,o=0){let a=i.createLinearGradient(e,t,e+n*.35,t+s),c=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";a.addColorStop(0,c),a.addColorStop(.55,u),a.addColorStop(1,"#dbe9f6"),i.fillStyle=a,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let f=e+n*r();i.beginPath(),i.moveTo(f,t),i.lineTo(f+n*.18,t),i.lineTo(f-n*.25,t+s),i.lineTo(f-n*.43,t+s),i.fill(),i.restore()}function Cm(i,e,t,n,s,r="#efe6d2"){Z(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);Gn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function Ju(i,e,t=800){i.font=`${t} ${e}px ${Kb}`}function It(i,e,t,n,s,r,o,a=800,c=null){Ju(i,r,a);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,Ju(i,u,a);i.textAlign="center",i.textBaseline="middle",c&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=c,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function Zu(i,e,t,n,s,r,o,a=800,c=null){let u=[...e],f=u.length,g=Math.min(r*1.05,(s-n)/f),m=Math.min(r,g*.95);Ju(i,m,a),i.textAlign="center",i.textBaseline="middle",u.forEach((v,b)=>{let E=n+(s-n-g*f)/2+g*(b+.5);c&&(i.lineWidth=Math.max(2,m*.12),i.strokeStyle=c,i.strokeText(v,t,E)),i.fillStyle=o,i.fillText(v,t,E)})}function Rr(i,e,t,n,s,r,o,a=!0){if(Z(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",Gn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),a){i.fillStyle="#6a6a6a";for(let c=e+n*.2*o();c<e+n-4;c+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-c),f=s*(.12+o()*.25);i.fillRect(c,t+s-f,u,f)}}i.restore()}function Jb(i,e,t,n,s,r,o){let a=i.getTransform();e.save(),e.drawImage(i.canvas,a.e+t,a.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",Z(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,Z(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,Gn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Pm=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],$u=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Im=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],jb=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Dm(){let i=new cd,e=zt(2024),t=240,n=(l,h,d,x,p,_,S=!1)=>{Io(l,i,d,x,"#ece8e0",0);let T=zt(_*31+(p?7:0)+5);if(_===0){let y=d*.14,M=x*.22,w=d*.72,A=x*.5;Lo(l,y,M,w,A,5),Es(l,y,M,w/2,A,T),Es(l,y+w/2,M,w/2,A,T);let C=T()<.8?w*(.18+T()*.25):0;C&&Cm(l,y+2,M+2,C,A-4,T()<.5?"#efe6d2":"#d9e4ea"),Z(l,y+w/2-2,M,4,A,"#cfd4da"),Z(l,y-8,M+A+5,w+16,6,"#d8d8d4"),Ss(l,y-4,M+A+11,8,60),Ss(l,y+w-4,M+A+11,8,60),p&&(Rr(h,y,M,w,A,S?"#e6eeff":"#ffcf8f",T),C&&Z(h,y+2,M+2,C,A-4,S?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),Z(h,y+w/2-2,M,4,A,"#000"))}else if(_===1){for(let y of[.12,.56]){let M=d*y,w=x*.28,A=d*.3,C=x*.36;Lo(l,M,w,A,C,4),Es(l,M,w,A,C,T,1),l.fillStyle="rgba(255,255,255,0.35)",l.fillRect(M,w,A,C*.45),Ss(l,M,w+C+6,A,40,.1),p&&T()<.8&&Rr(h,M,w,A,C,T()<.5?"#ffd9a0":"#e8f0ff",T)}l.fillStyle="#c9c9c4",l.beginPath(),l.arc(d*.88,x*.2,9,0,7),l.fill()}else if(_===2){let y=d*.1,M=x*.12,w=d*.8,A=x*.84;Lo(l,y,M,w,A,4),Es(l,y,M,w/2,A,T),Es(l,y+w/2,M,w/2,A,T);let C=w*(.2+T()*.3);Cm(l,y+2,M+2,C,A-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),Z(l,y+w/2-2,M,4,A,"#cfd4da"),p&&(Rr(h,y,M,w,A,S?"#e6eeff":"#ffcb85",T),Z(h,y+2,M+2,C,A-4,S?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),Z(h,y+w/2-2,M,4,A,"#000"))}else if(_===3){Io(l,i,d,x,"#dfe3e6",0);let y=x*.25,M=x*.55;Es(l,0,y,d,M,T,1);for(let w=0;w<=d;w+=d/4)Z(l,w-2,y,4,M,"#8d98a6");if(Z(l,0,y-4,d,4,"#8d98a6"),Z(l,0,y+M,d,5,"#7d8796"),p)for(let w=0;w<4;w++)T()<.7&&Rr(h,w*d/4+2,y,d/4-4,M,T()<.6?"#f2f6ff":"#ffe2b0",T)}else if(_===4){l.fillStyle="#6b4a35",l.fillRect(0,0,d,x);for(let C=0;C<x;C+=12)Z(l,0,C,d,2,"rgba(30,18,10,0.35)"),Z(l,0,C+2,d,1,"rgba(255,220,180,0.06)");bn(l,i,d,x,.15);let y=d*.18,M=x*.25,w=d*.64,A=x*.45;Z(l,y-6,M-6,w+12,A+12,"#4a3020"),Z(l,y,M,w,A,"#efe4c8"),l.fillStyle="#5a3a26";for(let C=1;C<6;C++)l.fillRect(y+C*w/6-1.5,M,3,A);for(let C=1;C<3;C++)l.fillRect(y,M+C*A/3-1.5,w,3);if(p){Rr(h,y,M,w,A,"#ffc070",T,!1),h.fillStyle="#000";for(let C=1;C<6;C++)h.fillRect(y+C*w/6-1.5,M,3,A);for(let C=1;C<3;C++)h.fillRect(y,M+C*A/3-1.5,w,3)}}else if(_===5){Z(l,d*.08,0,7,x,"#bdbdb6"),Z(l,d*.08+5,0,2,x,"rgba(0,0,0,0.2)");let y=d*.55,M=x*.3,w=d*.22,A=x*.24;Lo(l,y,M,w,A,3),Z(l,y,M,w,A,"#d6dfe4"),l.fillStyle="rgba(255,255,255,0.4)",l.fillRect(y,M,w,A/2),Ss(l,y,M+A+4,w,50,.12),Z(l,d*.22,x*.55,26,34,"#cfcfca"),Z(l,d*.22+4,x*.55+6,18,12,"#9aa2a8"),p&&Rr(h,y,M,w,A,S?"#eef2ff":"#fff0d8",T,!1)}else if(_===6){let y=d*.4,M=x*.35,w=d*.2,A=x*.28;Lo(l,y,M,w,A,3),Es(l,y,M,w,A,T,1),Ss(l,y,M+A+4,w,70,.14),p&&Rr(h,y,M,w,A,S?"#e8efff":"#ffd9a0",T)}};for(let l=0;l<7;l++)i.add("win"+l,t,t,(h,d,x,p)=>n(h,d,x,p,!1,l)),i.add("win"+l+"L",t,t,(h,d,x,p)=>n(h,d,x,p,!0,l));for(let l of[0,2,5,6])i.add("win"+l+"C",t,t,(h,d,x,p)=>n(h,d,x,p,!0,l,!0));i.add("plain",t,t,(l,h,d,x)=>{Io(l,i,d,x,"#ece8e0"),Ss(l,d*.3,0,12,x*.6,.06)}),i.add("concrete",t,t,(l,h,d,x)=>{Io(l,i,d,x,"#d9d7d0",60);for(let p=0;p<6;p++)Ss(l,p*41%d,0,10,x*.5,.07)});let s=288,r=(l,h,d,x,p,_,S)=>{let T=(M,w,A,C,I,R=0)=>{l.fillStyle=I,l.beginPath(),l.ellipse(M,w,A,C,R,0,7),l.fill()},y=M=>M[Math.floor(_()*M.length)];if(S==="bakery"){Z(l,h,d,x,p,"#d9b98a"),Gn(l,h,d,x,p,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let M=d+p*.28;M<d+p*.72;M+=p*.2){Z(l,h,M,x,5,"#8a5a32");for(let w=h+8;w<h+x-8;w+=15+_()*10){let A=7+_()*6,C=4+_()*3;T(w,M-C,A,C,y(["#c98a3e","#b4732e","#d9a256","#a4632a"])),T(w-A*.2,M-C*1.4,A*.5,C*.35,"rgba(255,230,180,0.5)")}}Z(l,h+4,d+p*.8,x-8,p*.2,"#efe7d8"),Z(l,h+4,d+p*.8,x-8,3,"#9a9a96");for(let M=h+14;M<h+x-10;M+=18)T(M,d+p*.9,6,4,y(["#e8b35a","#c06a3a","#f2d29a"]));Z(l,h+x-64,d+10,52,22,"#7a3e1e"),It(l,"\u713C\u304D\u305F\u3066",h+x-38,d+21,46,14,"#fff3dc",800)}else if(S==="books"){Z(l,h,d,x,p,"#6f5a46");for(let M=d+6;M<d+p*.72;M+=p*.17){Z(l,h,M+p*.15,x,4,"#4a3828");for(let w=h+3;w<h+x-4;){let A=3+_()*4,C=p*(.1+_()*.045);Z(l,w,M+p*.15-C,A,C,y(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),w+=A+(_()<.1?4:.6)}}Z(l,h+4,d+p*.76,x-8,p*.24,"#8a7560");for(let M=h+8;M<h+x-22;M+=24)Z(l,M,d+p*.79,20,28,y(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),Z(l,M+3,d+p*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(S==="florist"){Z(l,h,d,x,p,"#e8e2d2"),Gn(l,h,d,x,p,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let M=0;M<7;M++){let w=h+8+_()*(x-16),A=p*(.15+_()*.25);for(let C=0;C<A;C+=3.5)T(w+Math.sin(C*.25+M)*4+(_()-.5)*6,d+4+C,3.4,1.8,y(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),_()*3)}for(let M=0;M<3;M++){let w=d+p*(.5+M*.17);Z(l,h,w+14,x,4,"#9a8a76");for(let A=h+10+M*6;A<h+x-8;A+=19){let C=y(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let I=0;I<6;I++){l.strokeStyle="#4a7a3a",l.lineWidth=1.2,l.beginPath();let R=A+(_()-.5)*14;l.moveTo(A,w+10),l.lineTo(R,w-6-_()*8),l.stroke(),T(R,w-8-_()*8,3.2,3,C)}Z(l,A-6,w+4,12,11,y(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(S==="clothes"){Z(l,h,d,x,p,"#efece6"),Gn(l,h,d,x,p,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),Z(l,h+6,d+p*.18,x-60,3,"#7a7a7a");for(let w=h+12;w<h+x-66;w+=13+_()*5){l.fillStyle=y(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let A=d+p*.18+3,C=p*(.3+_()*.2);l.beginPath(),l.moveTo(w-5,A),l.lineTo(w+5,A),l.lineTo(w+8,A+C),l.lineTo(w-8,A+C),l.closePath(),l.fill()}let M=h+x-32;T(M,d+p*.16,7,8,"#d8cfc4"),l.fillStyle=y(["#c84a5a","#4a6a9a","#e8d8b8"]),l.beginPath(),l.moveTo(M-14,d+p*.24),l.lineTo(M+14,d+p*.24),l.lineTo(M+18,d+p*.66),l.lineTo(M-18,d+p*.66),l.closePath(),l.fill(),Z(l,M-2,d+p*.66,4,p*.24,"#8a8a8a"),Z(l,h+8,d+p*.74,x*.55,6,"#8a6a4a");for(let w=h+12;w<h+x*.55;w+=14)Z(l,w,d+p*.74-8,11,8,y(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let M=7;for(let w=d+p*.25;w<d+p;w+=p*.22)for(let A=h+3;A<h+x-6;A+=6+_()*8)e(),M=Math.imul(M,31)+Math.floor(_()*997+_()*61+_()*7)|0;S==="cafe"?f(l,h,d,x,p,zt(M>>>0)):u(l,h,d,x,p,zt(M>>>0),S==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],a=(l,h,d,x,p,_,S="bbccutp")=>{let T=h+1+_()*3;for(;T<d-4;){let y=S[Math.floor(_()*S.length)],M=o[Math.floor(_()*o.length)],w=_()<.5?"#f8f6f0":o[Math.floor(_()*o.length)],A={b:8+_()*6,c:6+_()*2,u:9+_()*2,t:5+_()*2,p:12+_()*5}[y],C=Math.min(p,{b:14+_()*12,c:11+_()*3,u:10+_()*3,t:18+_()*9,p:14+_()*8}[y]),I=2+Math.floor(_()*5);for(let R=0;R<I&&T+A<d-1;R++,T+=A+.6){let L=x-C;y==="t"?(Z(l,T,L+C*.3,A,C*.7,M),Z(l,T+A*.3,L+C*.1,A*.4,C*.22,M),Z(l,T+A*.28,L,A*.44,C*.11,w==="#f8f6f0"?"#e8e8e4":"#d83a2a"),Z(l,T,L+C*.5,A,C*.22,w)):y==="c"?(Z(l,T,L,A,C,M),Z(l,T,L,A,1.5,"#d8dce0"),Z(l,T,L+C*.35,A,C*.3,w)):y==="u"?(l.fillStyle=M,l.beginPath(),l.moveTo(T,L+2),l.lineTo(T+A,L+2),l.lineTo(T+A-1.2,x),l.lineTo(T+1.2,x),l.fill(),Z(l,T-.4,L,A+.8,2.2,"#f2efe6"),Z(l,T+1,L+C*.45,A-2,C*.25,w)):y==="p"?(l.fillStyle=M,l.beginPath(),l.moveTo(T,x),l.lineTo(T,L+3),l.quadraticCurveTo(T+A/2,L-1.5,T+A,L+3),l.lineTo(T+A,x),l.fill(),Z(l,T+1.5,L+C*.35,A-3,C*.35,w),Z(l,T,L+2,A,1,"rgba(0,0,0,0.18)")):(Z(l,T,L,A,C,M),Z(l,T+1.5,L+C*.3,A-3,C*.4,w)),Z(l,T,L+1,1,C-1,"rgba(255,255,255,0.28)"),Z(l,T+A-1.3,L+1,1.3,C-1,"rgba(0,0,0,0.22)")}T+=1.5+_()*3}},c=(l,h,d,x,p)=>{Gn(l,h,x+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),Z(l,h,x,d,4,"#d3d6da"),Z(l,h,x+3.2,d,.8,"rgba(40,40,50,0.45)");for(let _=h+4+p()*10;_<h+d-6;_+=14+p()*16)Z(l,_,x+.6,5,2.6,p()<.25?"#f2d23a":p()<.2?"#e84a3a":"#ffffff")},u=(l,h,d,x,p,_,S)=>{Z(l,h,d,x,p,S?"#f3f1ea":"#ece5d8"),Z(l,h,d,x,p*.13,S?"#f6f6f2":"#efebe2");for(let w of[.035,.085])Z(l,h,d+p*w,x,2.4,"#ffffff"),Gn(l,h,d+p*w+2.4,x,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);Gn(l,h,d+p*.13,x,p*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let w=0,A=h+18+_()*30;w<2&&A<h+x-40;w++,A+=90+_()*40)Z(l,A+13,d+p*.13,1,6,"#888"),Z(l,A,d+p*.13+6,28,9,o[Math.floor(_()*9)]),Z(l,A+4,d+p*.13+9.5,20,2,"rgba(255,255,255,0.8)");let y=d+p*.25,M=p*.165;Z(l,h,y-4,x,4,"#c9ccd0");for(let w=0;w<4;w++){let A=y+M*(w+1);Gn(l,h,A-M,x,M,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),a(l,h,h+x,A,M-6,_),c(l,h,x,A,_)}Z(l,h,y+M*4+4,x,d+p-y-M*4-4,"#5c6068"),Z(l,h,y+M*4+4,x,1.5,"#8a8e96");for(let w=h+2+_()*20;w<h+x;w+=70+_()*12)Z(l,w,y-4,3,M*4+8,"#b4b8be"),Z(l,w+2.2,y-4,.8,M*4+8,"rgba(0,0,0,0.3)");if(S){let w=d+p*.7;Z(l,h,w+26,x,d+p-w-26,"#7a7e86"),Z(l,h,w+26,x,2,"#a8acb2");for(let A=h+2;A<h+x-14;A+=15.5){let C=o[Math.floor(_()*o.length)],I=_()*2;Z(l,A,w+I,14,26-I,C),Z(l,A,w+I,14,5,_()<.6?"#ffffff":"#e8343a"),Z(l,A+2,w+I+8,10,10,_()<.5?"#f2c8a8":o[Math.floor(_()*o.length)]),Z(l,A+13,w+I,1,26-I,"rgba(0,0,0,0.25)")}}},f=(l,h,d,x,p,_)=>{Z(l,h,d,x,p,"#b88a5e"),Gn(l,h,d,x,p,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let T=h;T<h+x;T+=9)Z(l,T,d+p*.55,1,p*.45,"rgba(60,35,20,0.25)");let S=d+p*.3;for(let T=0;T<2;T++){let y=S+T*22;Z(l,h+8,y,x*.55,3,"#6a4428"),a(l,h+10,h+x*.55+6,y,14,_,"ctu")}Z(l,h+x*.64,d+p*.22,x*.28,p*.26,"#2e3a32"),Z(l,h+x*.64,d+p*.22,x*.28,2,"#6a4428");for(let T=0;T<5;T++)Z(l,h+x*.67,d+p*(.27+T*.04),x*(.12+_()*.1),1.6,"rgba(240,240,230,0.75)");Z(l,h+4,d+p*.56,x-8,6,"#5a3820"),Z(l,h+4,d+p*.56+6,x-8,p*.08,"#7a5232"),Z(l,h+x*.3,d+p*.47,18,p*.09,"#c8ccd0"),Z(l,h+x*.3+3,d+p*.47+3,12,5,"#3a3a40");for(let T=h+30+_()*20;T<h+x-20;T+=70+_()*20)Z(l,T,d,1,p*.14,"#3a2a1e"),l.fillStyle="#2f3a36",l.beginPath(),l.moveTo(T-9,d+p*.2),l.quadraticCurveTo(T+.5,d+p*.12,T+10,d+p*.2),l.fill(),l.fillStyle="rgba(255,214,150,0.9)",l.beginPath(),l.ellipse(T+.5,d+p*.2,7,2,0,0,7),l.fill();for(let T=h+26+_()*16;T<h+x-26;T+=78+_()*20){Z(l,T-16,d+p*.74,32,4,"#4a2e1c"),Z(l,T-1.5,d+p*.74+4,3,p*.2,"#2e2420"),Z(l,T-8,d+p*.94,16,2,"#2e2420");for(let y of[-24,24])Z(l,T+y-6,d+p*.8,12,3,"#3a2618"),Z(l,T+y+(y<0?-6:4),d+p*.66,2,p*.17,"#3a2618"),Z(l,T+y-5,d+p*.83,1.6,p*.13,"#3a2618"),Z(l,T+y+3.4,d+p*.83,1.6,p*.13,"#3a2618");l.fillStyle="#f4f0e8",l.beginPath(),l.ellipse(T-6,d+p*.74-1.5,3,1.5,0,0,7),l.fill()}},g=(l,h,d,x,p,_,S="")=>{let T=zt(_);if(Io(l,i,d,x,"#e6e2da"),p==="glass"||p==="door"||p==="konbini"||p==="cafe"){let M=x*.22,w=d-12,A=x*.78-4;Z(l,6,M,w,A,p==="konbini"?"#f6f4ea":p==="cafe"?"#7a5a40":"#8a7a68"),r(l,6,M,w,A,T,S||p),p==="konbini"&&Z(l,6,M+4,w,5,"#ffffff"),p==="door"&&(Z(l,d/2-30,M+18,60,24,"#fff"),It(l,"\u55B6\u696D\u4E2D",d/2,M+30,54,18,"#c82828")),p==="glass"&&!S&&T()<.7&&(Z(l,16,M+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),It(l,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,M+44,40,16,"#c02020")),Jb(l,h,6,M,w,A,p==="konbini"?"#e4eef8":p==="cafe"?"#f0a868":"#f2d2a6"),l.save(),l.globalAlpha=.35,Es(l,6,M,w,A,T),l.restore(),Z(l,6,M,w,4,"#4a4e57"),Z(h,6,M,w,4,"#000"),p==="door"&&(Z(l,d/2-2,M,4,A,"#4a4e57"),Z(h,d/2-2,M,4,A,"#000"),Z(l,d/2-14,M+A*.45,3,40,"#c0c4c8"),Z(l,d/2+11,M+A*.45,3,40,"#c0c4c8")),p==="cafe"&&(Z(l,d*.62,x-70,46,62,"#2c3a30"),Z(h,d*.62,x-70,46,62,"#000"),It(l,"\u30E9\u30F3\u30C1",d*.62+23,x-50,40,13,"#fff",700))}else if(p==="shutter"){let M=x*.2,w=d-12,A=x*.8;Z(l,6,M,w,A,"#b8bcc0");for(let C=M;C<M+A;C+=7)Z(l,6,C,w,2,"rgba(60,64,72,0.35)"),Z(l,6,C+2,w,1,"rgba(255,255,255,0.35)");Z(l,6,M,w,10,"#8f949a"),bn(l,i,d,x,.12),T()<.5&&(Z(l,d/2-40,M+A*.35,80,26,"#fff"),It(l,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,M+A*.35+13,74,16,"#333",700))}else if(p==="noren"){Z(l,0,0,d,x,"#5b3c28");for(let I=0;I<d;I+=10)Z(l,I,x*.2,3,x*.8,"rgba(25,15,8,0.6)");bn(l,i,d,x,.15);let y=d*.12,M=x*.24,w=d*.76,A=x*.34,C=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);Z(l,y,M,w,A,C);for(let I=1;I<3;I++)Z(l,y+w*I/3-1,M+A*.25,2,A*.75,"rgba(255,255,255,0.25)");It(l,e.pick(jb),d/2,M+A*.55,w*.9,46,"#f5f0e6",800),Z(l,y,M,w,6,"#3a2a1c"),h.fillStyle="#ffae5c",h.fillRect(y,M+A,w,x-M-A),h.fillStyle="rgba(255,170,90,0.6)",h.fillRect(y,M,w,A),l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d*.9,x*.36,13,19,0,0,7),l.fill(),It(l,"\u9152",d*.9,x*.36,16,14,"#fff"),h.fillStyle="#ff6a3a",h.beginPath(),h.ellipse(d*.9,x*.36,13,19,0,0,7),h.fill()}else if(p==="house"){let y=d*.18,M=x*.3,w=d*.34,A=x*.7;Z(l,y-6,M-6,w+12,A+6,"#9a9a96"),Z(l,y,M,w,A,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),Z(l,y+w-14,M+A*.5,4,22,"#d8d0c0"),Z(l,y+6,M+10,w-12,A*.25,"rgba(255,255,255,0.18)"),Z(l,d*.62,x*.48,30,22,"#cfcfca"),Z(l,d*.62+6,x*.48+5,18,4,"#555");let C=d*.6,I=x*.22,R=d*.3,L=x*.2;Lo(l,C,I,R,L,3),Es(l,C,I,R,L,T,1);for(let U=0;U<3;U++)l.fillStyle="#7b5a43",l.fillRect(d*.6+U*22,x-26,16,18),l.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),l.beginPath(),l.arc(d*.6+U*22+8,x-32,11,0,7),l.fill();h.fillStyle="#ffd08a",h.beginPath(),h.arc(y+w+14,M+8,6,0,7),h.fill(),T()<.6&&(h.fillStyle="#ffcf8f",h.fillRect(C,I,R,L))}else if(p==="garage"){let M=x*.25,w=d-16,A=x*.75;Z(l,8,M,w,A,"#efefec");for(let C=M;C<M+A;C+=9)Z(l,8,C,w,1.5,"rgba(80,80,90,0.25)");bn(l,i,d,x,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((l,h)=>{i.add("shop_"+l,t,s,(d,x,p,_)=>g(d,x,p,_,l,100+h)),(l==="glass"||l==="noren"||l==="house")&&i.add("shop_"+l+"2",t,s,(d,x,p,_)=>g(d,x,p,_,l,200+h)),l==="glass"&&["bakery","books","florist","clothes"].forEach((d,x)=>i.add("shop_glass"+(x+3),t,s,(p,_,S,T)=>g(p,_,S,T,"glass",300+x,d)))});for(let l=0;l<14;l++)i.add("hs"+l,512,76,(h,d,x,p)=>{let[_,S]=$u[l%$u.length],T=Pm[l*7%Pm.length];Z(h,0,0,x,p,_),Z(h,0,0,x,5,"rgba(255,255,255,0.35)"),Z(h,0,p-6,x,6,"rgba(0,0,0,0.18)"),l%3===0&&(Z(h,12,12,p-24,p-24,S),It(h,T[0],12+(p-24)/2,p/2,p-30,34,_)),It(h,T,x/2+(l%3===0?24:0),p/2+2,x*.7,50,S,900),bn(h,i,x,p,.08),d.fillStyle=_==="#fff"||_==="#f5efe0"?"#d9d6cc":_,d.fillRect(0,0,x,p),d.globalAlpha=.9,It(d,T,x/2+(l%3===0?24:0),p/2+2,x*.7,50,S==="#fff"?"#ffffff":S,900),d.globalAlpha=1});for(let[l,h,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+l,512,76,(x,p,_,S)=>{Z(x,0,0,_,S,h),Z(x,0,0,_,5,"rgba(255,255,255,0.35)"),Z(x,0,S-6,_,6,"rgba(0,0,0,0.18)"),It(x,l,_/2,S/2+2,_*.7,50,d,900),bn(x,i,_,S,.08),p.fillStyle=h,p.fillRect(0,0,_,S),p.globalAlpha=.9,It(p,l,_/2,S/2+2,_*.7,50,d,900),p.globalAlpha=1});let m=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],v=(l,h,d,x,p,_)=>{l.beginPath(),l.moveTo(h+_,d),l.arcTo(h+x,d,h+x,d+p,_),l.arcTo(h+x,d+p,h,d+p,_),l.arcTo(h,d+p,h,d,_),l.arcTo(h,d,h+x,d,_),l.closePath()};for(let l=0;l<10;l++)i.add("vs"+l,72,288,(h,d,x,p)=>{let _=Im[l%Im.length],S=m[(l*5+2)%m.length],T=l%10===3||l%10===6||l%10===8,[y,M]=$u[(l*3+1)%$u.length],w=T?y==="#fff"||y==="#f5efe0"?"#2b2b33":y:"#fbf7ef",A=T?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][l%4];Z(h,0,0,x,p,"#2a2b30"),v(h,3,3,x-6,p-6,8),h.fillStyle=w,h.fill(),Gn(h,3,3,x-6,p-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),h.save(),v(h,8,8,x-16,p-16,6),h.strokeStyle=S,h.globalAlpha=.55,h.lineWidth=7,h.stroke(),h.globalAlpha=1,h.strokeStyle="#fff6fb",h.lineWidth=2.2,h.stroke(),h.restore(),Zu(h,_,x/2,18,p-18,50,A,900),bn(h,i,x,p,.06),Z(d,0,0,x,p,"#000"),v(d,3,3,x-6,p-6,8),d.fillStyle=T?"#3a3a3e":"#4a4844",d.fill(),d.save(),v(d,8,8,x-16,p-16,6),d.strokeStyle=S,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),Zu(d,_,x/2,18,p-18,50,T?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([l,h,d],x)=>i.add("bb"+x,512,240,(p,_,S,T)=>{Z(p,0,0,S,T,"#fbfaf5"),Z(p,0,0,S,T*.62,d),It(p,l,S/2,T*.32,S*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),It(p,h,S/2,T*.8,S*.85,52,"#333",800),bn(p,i,S,T,.08),Z(_,0,0,S,T,"#555"),_.globalAlpha=.85,Z(_,0,0,S,T*.62,d),It(_,l,S/2,T*.32,S*.9,96,"#fff",900),_.globalAlpha=1})),i.add("konbini_band",480,72,(l,h,d,x)=>{Z(l,0,0,d,x,"#fbfbf7"),Z(l,0,x*.62,d,x*.14,"#2a9a4a"),Z(l,0,x*.76,d,x*.12,"#f08a24"),Z(l,0,x*.88,d,x*.12,"#2f6fd8"),It(l,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900),h.fillStyle="#f3f6f0",h.fillRect(0,0,d,x),It(h,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,x*.32,d*.8,40,"#1d3d8a",900)});for(let l=0;l<3;l++)i.add("vend"+l,128,234,(h,d,x,p)=>{let _=["#d8352a","#2f6fd8","#f4f4f0"][l];Z(h,0,0,x,p,_),Z(h,8,10,x-16,p*.55,"#eef4f8");let S=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let T=0;T<4;T++)for(let y=0;y<6;y++){let M=14+y*17,w=18+T*30;h.fillStyle=S[(T*6+y+l)%S.length],h.fillRect(M,w,11,20),h.fillStyle="rgba(255,255,255,0.5)",h.fillRect(M+2,w+2,3,14),h.fillStyle="#2a2a2a",h.fillRect(M,w+23,11,3)}Z(h,10,p*.62,x-20,22,"#222"),Z(h,x-34,p*.66,14,22,"#bbb"),Z(h,14,p*.82,x-28,22,"#1b1b1b"),It(h,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][l],x/2,p*.62+11,x-28,14,"#fff",700),bn(h,i,x,p,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,x-16,p*.55);for(let T=0;T<4;T++)for(let y=0;y<6;y++)d.fillStyle=S[(T*6+y+l)%S.length],d.fillRect(14+y*17,18+T*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,p*.62,x-20,22)});i.add("ac",128,88,(l,h,d,x)=>{Z(l,0,0,d,x,"#e9e9e4"),Gn(l,0,0,d,x,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),l.fillStyle="#9a9c9e",l.beginPath(),l.arc(d*.4,x*.5,x*.36,0,7),l.fill(),l.strokeStyle="#d6d6d2",l.lineWidth=2;for(let p=6;p<x*.36;p+=6)l.beginPath(),l.arc(d*.4,x*.5,p,0,7),l.stroke();for(let p=12;p<x-10;p+=6)Z(l,d*.78,p,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(l,h,d,x)=>{Z(l,0,0,d,x,"#f2cf3a"),l.strokeStyle="#2f5a2f",l.lineWidth=3,l.strokeRect(3,3,d-6,x-6),It(l,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),It(l,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.moveTo(2,2),l.lineTo(d-2,2),l.lineTo(d/2,x-2),l.fill(),l.fillStyle="#d8231c",l.beginPath(),l.moveTo(10,7),l.lineTo(d-10,7),l.lineTo(d/2,x-12),l.fill(),It(l,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.fillStyle="#1e5bb8",l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.fill(),l.fillStyle="#fff",l.beginPath(),l.moveTo(d/2,22),l.lineTo(d/2+22,50),l.lineTo(d/2+8,50),l.lineTo(d/2+8,88),l.lineTo(d/2-8,88),l.lineTo(d/2-8,50),l.lineTo(d/2-22,50),l.fill()}),i.add("sign_speed",112,112,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=12,l.beginPath(),l.arc(d/2,x/2,d/2-9,0,7),l.stroke(),It(l,"30",d/2,x/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(l,h,d,x)=>{Z(l,0,0,d,x,"#1d4f9a"),l.strokeStyle="#fff",l.lineWidth=2,l.strokeRect(3,3,d-6,x-6),Zu(l,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,x-10,24,"#fff",700)});for(let l=0;l<4;l++)i.add("poster"+l,64,90,(h,d,x,p)=>{let _=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][l];Z(h,0,0,x,p,_),Z(h,4,4,x-8,p*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][l]),It(h,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][l],x/2,p*.25,x-12,18,"#fff",900);for(let S=0;S<4;S++)Z(h,8,p*.58+S*8,x-16-S%2*14,3,"rgba(60,60,60,0.5)")});for(let l=0;l<3;l++)i.add("bal"+l,t,88,(h,d,x,p)=>{let _=["#e9e3d6","#dfe6ea","#efe2dc"][l];if(Io(h,i,x,p,_),l===1)for(let S=10;S<x-6;S+=x/6)Z(h,S,10,x/6-8,p-20,"rgba(220,235,245,0.9)"),h.fillStyle="rgba(255,255,255,0.45)",h.fillRect(S,10,x/6-8,(p-20)*.4);else{Z(h,0,0,x,7,"rgba(255,255,255,0.4)");for(let S=x/3;S<x;S+=x/3)Z(h,S-1,0,2,p,"rgba(0,0,0,0.08)")}Z(h,0,p-6,x,6,"rgba(0,0,0,0.12)"),Ss(h,x*.3,p-6,10,10,.2)});i.add("kawara",272,256,(l,h,d,x)=>{Z(l,0,0,d,x,"#58617a");for(let p=0;p<x;p+=16)Gn(l,0,p,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let p=-4;p<d;p+=20)Z(l,p,0,2,x,"rgba(0,0,0,0.18)");bn(l,i,d,x,.12)}),i.add("wood",256,256,(l,h,d,x)=>{Z(l,0,0,d,x,"#6d4c37");for(let p=0;p<x;p+=14)Z(l,0,p,d,2,"rgba(25,15,8,0.4)"),Z(l,0,p+2,d,1,"rgba(255,220,180,0.07)");bn(l,i,d,x,.16)}),i.add("block",256,128,(l,h,d,x)=>{Z(l,0,0,d,x,"#c9c7bf");for(let p=0;p<x;p+=32)for(let _=p/32%2?-32:0;_<d;_+=64)l.strokeStyle="rgba(80,80,80,0.35)",l.lineWidth=2,l.strokeRect(_+1,p+1,62,30);for(let p=0;p<d;p+=64)l.fillStyle="rgba(70,70,70,0.25)",l.fillRect(p+20,40,24,16);bn(l,i,d,x,.15),Ss(l,0,0,d,40,.1)}),i.add("lantern",64,96,(l,h,d,x)=>{l.fillStyle="#d8352a",l.beginPath(),l.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),l.fill();for(let p=16;p<x-12;p+=7)Z(l,4,p,d-8,1.5,"rgba(0,0,0,0.2)");Z(l,d/2-14,2,28,8,"#222"),Z(l,d/2-14,x-10,28,8,"#222"),It(l,"\u796D",d/2,x/2,d*.6,28,"#fff",900),h.fillStyle="#ff6a35",h.beginPath(),h.ellipse(d/2,x/2,d/2-2,x/2-8,0,0,7),h.fill()}),i.add("busstop",96,96,(l,h,d,x)=>{l.fillStyle="#fff",l.beginPath(),l.arc(d/2,x/2,d/2-1,0,7),l.fill(),l.strokeStyle="#d8231c",l.lineWidth=8,l.beginPath(),l.arc(d/2,x/2,d/2-6,0,7),l.stroke(),It(l,"\u30D0\u30B9\u505C",d/2,x/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,l=>Z(l,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(l,h,d,x)=>{l.save(),l.translate(d/2,x/2),l.rotate(Math.PI/4),l.fillStyle="#1b1b1b",l.fillRect(-41,-41,82,82),l.fillStyle="#f2c230",l.fillRect(-37,-37,74,74),l.restore(),l.fillStyle="#1b1b1b",l.fillRect(d/2-22,x/2-6,44,18),l.fillRect(d/2-16,x/2-16,18,12),l.fillRect(d/2+8,x/2-13,5,7),l.beginPath(),l.arc(d/2-12,x/2+15,5,0,7),l.arc(d/2+12,x/2+15,5,0,7),l.fill(),It(l,"\u8E0F\u5207",d/2,x/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((l,h)=>i.add("bridge"+h,64,176,(d,x,p,_)=>{Z(d,0,0,p,_,"#b9b5ab"),bn(d,i,p,_,.2),Z(d,6,6,p-12,_-12,"#a7a398"),Zu(d,l,p/2,14,_-14,34,"#3f3c37",800)})),i.add("signal",240,84,(l,h,d,x)=>{Z(l,0,0,d,x,"#4a4d52"),Z(l,0,0,d,5,"#5c6066"),bn(l,i,d,x,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([p,_])=>{l.fillStyle="#26282c",l.beginPath(),l.arc(_,x/2,33,0,7),l.fill(),l.fillStyle=p,l.beginPath(),l.arc(_,x/2,27,0,7),l.fill()})}),i.add("ped_sig",64,128,(l,h,d,x)=>{Z(l,0,0,d,x,"#3d4045"),l.fillStyle="#5a1814",l.fillRect(8,8,d-16,x/2-12),l.fillStyle="#0d4f44",l.fillRect(8,x/2+4,d-16,x/2-12),l.fillStyle="rgba(255,255,255,0.18)",l.beginPath(),l.arc(d/2,x*.18,6,0,7),l.fill(),l.fillRect(d/2-5,x*.24,10,18)}),i.add("tomare",256,96,(l,h,d,x)=>{l.clearRect(0,0,d,x),l.fillStyle="rgba(244,244,238,0.012)",l.fillRect(0,0,d,x),It(l,"\u6B62\u307E\u308C",d/2,x/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((l,h)=>i.add("hodokyo"+h,256,44,(d,x,p,_)=>{Z(d,0,0,p,_,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,p-8,_-8),It(d,l,p/2,_/2+1,p*.85,28,"#fff",800)}));let E=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];E.forEach(([l,h,d],x)=>{let p=E[(x+3)%4][0],_=E[(x+1)%4][0];i.add("ekimei"+x,320,124,(S,T,y,M)=>{Z(S,0,0,y,M,"#3a3d42"),Z(S,4,4,y-8,M-8,"#f8f8f3"),It(S,h,y/2,20,y*.5,15,"#2b2b2b",700),It(S,l,y/2,52,y*.6,40,"#151515",900),It(S,d,y/2,80,y*.5,12,"#555",600),Z(S,4,M-30,y-8,26,"#1f9a50"),S.fillStyle="#fff",Ju(S,12,700),S.textBaseline="middle",S.textAlign="left",S.fillText("\u2190 "+p,12,M-17),S.textAlign="right",S.fillText(_+" \u2192",y-12,M-17),bn(S,i,y,M,.06),Z(T,4,4,y-8,M-8,"#8a8a84")}),i.add("ekiplate"+x,220,48,(S,T,y,M)=>{Z(S,0,0,y,M,"#4b3326"),bn(S,i,y,M,.2),It(S,l+"\u99C5",y/2,M/2+1,y*.8,30,"#f3ead8",800)})});for(let l of["l","r"])i.add("chev_"+l,96,120,(h,d,x,p)=>{Z(h,0,0,x,p,"#f4f4ef"),Z(h,4,4,x-8,p-8,"#1e5bb8"),h.fillStyle="#f8f8f4",h.beginPath();let _=l==="r"?1:-1,S=x/2,T=p/2;h.moveTo(S-_*26,T-40),h.lineTo(S+_*22,T),h.lineTo(S-_*26,T+40),h.lineTo(S-_*8,T+40),h.lineTo(S+_*40,T),h.lineTo(S-_*8,T-40),h.closePath(),h.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((l,h)=>i.add("tunnel"+h,360,80,(d,x,p,_)=>{Z(d,0,0,p,_,"#e9e7e0"),Z(d,4,4,p-8,_-8,"#24403b"),bn(d,i,p,_,.08),It(d,l,p/2,_*.42,p*.8,38,"#f4f2ea",800),It(d,"L = 170 m",p/2,_*.8,p*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(l,h,d,x)=>{Z(l,0,0,d,x,"#f6f6f2"),l.fillStyle="#d42a22";for(let p=-20;p<x;p+=26)l.beginPath(),l.moveTo(4,p),l.lineTo(d/2,p+20),l.lineTo(d-4,p),l.lineTo(d-4,p+11),l.lineTo(d/2,p+31),l.lineTo(4,p+11),l.closePath(),l.fill();l.strokeStyle="#222",l.lineWidth=3,l.strokeRect(1.5,1.5,d-3,x-3)}),i.add("xing_plate",128,48,(l,h,d,x)=>{Z(l,0,0,d,x,"#f6f6f2"),l.strokeStyle="#d8231c",l.lineWidth=4,l.strokeRect(3,3,d-6,x-6),It(l,"\u8E0F\u5207\u6CE8\u610F",d/2,x/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(l,h,d,x)=>{l.clearRect(0,0,d,x),Z(l,0,0,d,7,"#e9ebee"),Z(l,0,6,d,2,"rgba(60,70,80,0.5)"),Z(l,0,x-6,d,6,"#d5d8dc");for(let p=3;p<d;p+=9)Z(l,p,7,3,x-13,"#e2e5e9"),Z(l,p+2,7,1,x-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(l,h,d,x)=>{let p=zt(4242);Z(l,0,0,d,x,"#3d3f3c");let _=38,S=_/Math.SQRT2;l.save(),l.beginPath(),l.rect(0,22,d,x-22),l.clip();for(let T=-2;T*S<x+_;T++)for(let y=-2;y*_<d+_;y++){let M=y*_+(T%2?_/2:0),w=22+T*S,A=.52+p()*.17,C=Math.min(1,Math.max(0,(w-x*.55)/(x*.4))),I=Math.round(255*A*(1-.38*C)),R=`rgb(${I-4},${I-2},${I-9})`;l.fillStyle=R,l.beginPath(),l.moveTo(M,w-S+3.5),l.lineTo(M+S-3.5,w),l.lineTo(M,w+S-3.5),l.lineTo(M-S+3.5,w),l.closePath(),l.fill(),l.fillStyle="rgba(255,255,255,0.12)",l.beginPath(),l.moveTo(M,w-S+3.5),l.lineTo(M+S-3.5,w),l.lineTo(M,w),l.closePath(),l.fill(),C>.3&&p()<.5&&(l.fillStyle=`rgba(70,96,52,${.25+.3*p()})`,l.beginPath(),l.arc(M+(p()-.5)*10,w+6,4+p()*6,0,7),l.fill())}l.restore(),Gn(l,0,x*.55,d,x*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),Z(l,0,0,d,22,"#8c8d87"),Z(l,0,18,d,4,"rgba(0,0,0,0.3)"),Z(l,0,0,d,3,"rgba(255,255,255,0.2)"),bn(l,i,d,x,.12)}),i.add("wrail",240,80,(l,h,d,x)=>{l.clearRect(0,0,d,x),Z(l,0,0,d,9,"#6a4a34"),Z(l,0,0,d,2,"rgba(255,225,190,0.25)"),Z(l,0,8,d,2,"rgba(20,10,5,0.45)"),Z(l,0,x-10,d,10,"#5e412e"),Z(l,0,x-10,d,2,"rgba(255,225,190,0.18)");for(let p=4;p<d;p+=12)Z(l,p,9,5,x-19,"#634632"),Z(l,p,9,1.2,x-19,"rgba(255,225,190,0.18)"),Z(l,p+4,9,1,x-19,"rgba(20,10,5,0.4)");bn(l,i,d,x,.15)}),i.add("woodwall",t,t,(l,h,d,x)=>{let p=zt(5151);Z(l,0,0,d,x,"#5e4130");for(let _=0;_<x;_+=16){let S=p();Z(l,0,_,d,16,S<.15?"#6b4b37":S<.3?"#553a2b":"#5e4130"),Z(l,0,_,d,2,"rgba(255,220,180,0.12)"),Z(l,0,_+14,d,2,"rgba(15,8,4,0.45)");for(let T=p()*80;T<d;T+=60+p()*90)Z(l,T,_+2,1.5,12,"rgba(15,8,4,0.35)")}Gn(l,0,0,d,x,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),bn(l,i,d,x,.2)}),i}function Nm(i){let n=Ku(1024,3072),s=n.getContext("2d"),r=zt(321),o={},a=512,c={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},u=(h,d,x)=>{let p=c[h],_=256,S=h==="pine",T=h==="sakura";s.save(),s.translate(d,x),s.beginPath(),s.rect(0,0,512,512),s.clip();let y=[[_,_,S?80:92]];for(let w=0;w<(S?10:14);w++){let A=r()*6.28,C=45+r()*120;y.push([_+Math.cos(A)*C,_+Math.sin(A)*C*(S?.42:.9),Math.min(34+r()*52,232-C)])}let M=T?2300:S?2600:2300;for(let w=0;w<M;w++){let A=y[Math.floor(r()*y.length)],C=r()*6.28,I=Math.sqrt(r())*A[2],R=A[0]+Math.cos(C)*I,L=A[1]+Math.sin(C)*I*(S?.45:1),U=I/A[2],O=Math.min(4,Math.max(0,Math.floor(.55+r()*2.7+(U>.82?.5:0))));if(s.fillStyle=p[O],T){let V=7+r()*8;s.beginPath(),s.arc(R,L,V,0,7),s.fill(),r()<.25&&(s.fillStyle=p[4],s.beginPath(),s.arc(R-V*.3,L-V*.3,V*.4,0,7),s.fill())}else if(S)s.save(),s.translate(R,L),s.rotate((r()-.5)*1.2),s.fillRect(-11,-1.6,22,3.2),s.restore();else if(h==="momiji"){let V=8+r()*7;s.save(),s.translate(R,L),s.rotate(r()*6.28),s.beginPath();for(let D=0;D<10;D++){let H=D%2?V*.42:V,z=D/10*6.2832;s.lineTo(Math.cos(z)*H,Math.sin(z)*H)}s.closePath(),s.fill(),s.restore()}else if(h==="ginkgo"){let V=9+r()*7;s.save(),s.translate(R,L),s.rotate(r()*6.28),s.beginPath(),s.moveTo(0,0),s.arc(0,0,V,-.95,.95),s.closePath(),s.fill(),s.restore()}else{let V=9+r()*10;s.beginPath(),s.ellipse(R,L,V,V*.55,r()*6.28,0,7),s.fill()}}for(let w=0;w<90;w++){let A=r()*6.28,C=150+r()*85,I=_+Math.cos(A)*C,R=_+Math.sin(A)*C*(S?.45:.92);s.fillStyle=p[1+Math.floor(r()*4)],S?(s.save(),s.translate(I,R),s.rotate((r()-.5)*1.2),s.fillRect(-9,-1.6,18,3.2),s.restore()):(s.beginPath(),s.arc(I,R,T?6+r()*6:7+r()*6,0,7),s.fill())}if(T)for(let w=0;w<14;w++){s.strokeStyle="rgba(150,90,100,0.35)",s.lineWidth=1.5;let A=_+(r()-.5)*300,C=_+60+r()*120;s.beginPath(),s.moveTo(A,C),s.lineTo(A+(r()-.5)*40,C-20-r()*30),s.stroke()}s.restore(),o[h]={u0:d/1024,u1:(d+512)/1024,v0:1-(x+512)/3072,v1:1-x/3072}},f=(h,d,x,p)=>{s.save(),s.translate(d,x),s.beginPath(),s.rect(0,0,512,512),s.clip();let _=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],S=p?120:170;for(let T=0;T<S;T++){let y=256+(r()-.5)*(p?330:380)*Math.sqrt(r()),M=150+r()*(p?230:300)*(1-Math.abs(y-256)/300),w=(y-256)*.35+(r()-.5)*90,A=9+r()*9,C=y+w,I=512-M,R=Math.min(4,Math.floor(r()*2.2+M/380*2.6)),L=s.createLinearGradient(0,512,0,I);L.addColorStop(0,_[0]),L.addColorStop(.6,_[Math.max(1,R-1)]),L.addColorStop(1,_[R]),s.fillStyle=L,s.beginPath(),s.moveTo(y-A/2,512),s.quadraticCurveTo(y-A/2+w*.3,512-M*.55,C,I),s.quadraticCurveTo(y+A/2+w*.3,512-M*.5,y+A/2,512),s.fill()}if(p)for(let T=0;T<16;T++){let y=110+r()*290,M=150+r()*200,w=r();if(s.strokeStyle="#3e7334",s.lineWidth=5,s.beginPath(),s.moveTo(y+(r()-.5)*20,512),s.quadraticCurveTo(y+(r()-.5)*30,(M+512)/2,y,M),s.stroke(),w<.55){s.fillStyle="#fbfaf2";for(let A=0;A<12;A++){let C=A/12*6.283;s.beginPath(),s.ellipse(y+Math.cos(C)*11,M+Math.sin(C)*11,9,4.5,C,0,7),s.fill()}s.fillStyle="#f2c230",s.beginPath(),s.arc(y,M,8,0,7),s.fill()}else if(w<.85)s.fillStyle="#f6c62e",s.beginPath(),s.arc(y,M,15,0,7),s.fill(),s.fillStyle="#ffe27a",s.beginPath(),s.arc(y-3,M-3,8,0,7),s.fill();else{s.fillStyle="#9b7fd6";for(let A=0;A<6;A++)s.beginPath(),s.arc(y+(r()-.5)*16,M+(r()-.5)*16,6,0,7),s.fill()}}s.restore(),o[h]={u0:d/1024,u1:(d+512)/1024,v0:1-(x+512)/3072,v1:1-x/3072}},g=(h,d,x)=>{let p=zt(97);s.save(),s.translate(d,x),s.beginPath(),s.rect(0,0,512,512),s.clip(),s.lineCap="round";let _=(S,T,y,M,w,A)=>{let C=S+Math.cos(y)*M,I=T+Math.sin(y)*M;if(s.strokeStyle=A>3?"#76605f":A>1?"#6c5458":"#62494f",s.lineWidth=w,s.beginPath(),s.moveTo(S,T),s.lineTo(C,I),s.stroke(),A<=0||w<.7)return;let R=2+(p()<.4?1:0);for(let L=0;L<R;L++){let U=y+(p()-.5)*1.1+(L-(R-1)/2)*.42;U=U*.8+-Math.PI/2*.2,_(C,I,U,M*(.62+p()*.2),w*.68,A-1)}};for(let S=0;S<6;S++)_(256+(p()-.5)*40,500,-Math.PI/2+(p()-.5)*.9,110+p()*50,5.6,6);s.restore(),o[h]={u0:d/1024,u1:(d+512)/1024,v0:1-(x+512)/3072,v1:1-x/3072}},m=(h,d,x,p,_)=>{let S=zt(p),T=1024,y=504;s.save(),s.translate(d,x+8),s.beginPath(),s.rect(0,0,512,y),s.clip(),s.scale(.5,1);let M=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],w=U=>{let O=U/T;return(.5+.5*Math.min(1,O/.45)**.8)*(1-.4*Math.max(0,(O-.9)/.1))},A=(U,O,V,D)=>{O=Math.min(O,y*.985);let H=U+V,z=y-O,$=U+V*.25,ae=y-O*.62-Math.abs(V)*.35;s.moveTo(U-D/2,y),s.quadraticCurveTo($-D*.42,ae,H,z),s.quadraticCurveTo($+D*.42,ae+D*.5,U+D/2,y),s.closePath()},C=[];for(let U=24+S()*24;U<T-20;U+=(U<T*.25?56:44)+S()*26)C.push(U);let I=()=>C[Math.floor(S()*C.length)],R=(U,O,V,D,H,z,$,ae,He)=>{let we=M.map(()=>[]);for(let De=0;De<U;De++){let K=I(),X=K+(S()-.5)*34,ge=w(X),Ie=X/T,Ee=y*(O+S()*(V-O))*ge*1.12,Me=(S()-.5)*D+(X-T*.45)*.12;we[Math.min(8,ae+Math.floor(S()*(He-ae+1)+Ie*1.2))].push([X,Ee,Me,H+S()*(z-H)])}we.forEach((De,K)=>{if(!De.length)return;let X=s.createLinearGradient(0,y,0,y*(1-V*.8));X.addColorStop(0,M[$]),X.addColorStop(.55,M[Math.round(($+K)/2)]),X.addColorStop(1,M[K]),s.fillStyle=X,s.beginPath();for(let ge of De)A(ge[0],ge[1],ge[2],ge[3]);s.fill()})};R(360,.25,.55,150,12,22,0,2,3),R(240,.4,.78,260,10,17,1,4,6);let L=[];for(let U=0;U<4;U++){let O=T*(.14+S()*.74),V=w(O);L.push({fx:O,fy:Math.max(56,y-y*(.56+S()*.38)*V*1.05),kind:S()<_?0:1,sz:.85+S()*.4,tilt:.72+S()*.28,rot:S()*6.28,sx:O+(S()-.5)*60})}s.lineCap="round";for(let U of L)s.strokeStyle="#2c6623",s.lineWidth=6,s.beginPath(),s.moveTo(U.sx,y),s.quadraticCurveTo((U.sx+U.fx)/2+(S()-.5)*40,(y+U.fy)/2,U.fx,U.fy+8),s.stroke();R(150,.5,.92,330,9,16,2,6,7);for(let U of L){if(s.save(),s.translate(U.fx,U.fy),s.scale(1,U.tilt),U.kind===0){let O=38*U.sz;for(let V=0;V<16;V++){let D=U.rot+V/16*6.283;s.fillStyle=Math.sin(D)>.4?"#e2e3ea":"#fdfdf6",s.beginPath(),s.ellipse(Math.cos(D)*O*.56,Math.sin(D)*O*.56,O*.48,O*.14,D,0,7),s.fill()}s.fillStyle="#f2b51a",s.beginPath(),s.arc(0,0,O*.28,0,7),s.fill(),s.fillStyle="#fbe060",s.beginPath(),s.arc(-O*.07,-O*.07,O*.14,0,7),s.fill()}else{let O=40*U.sz;for(let V=0;V<5;V++){let D=U.rot+V/5*6.283;s.fillStyle="#fccc1e",s.beginPath(),s.ellipse(Math.cos(D)*O*.52,Math.sin(D)*O*.52,O*.52,O*.38,D,0,7),s.fill()}for(let V=0;V<5;V++){let D=U.rot+V/5*6.283;s.fillStyle="#ffe873",s.beginPath(),s.ellipse(Math.cos(D)*O*.62,Math.sin(D)*O*.62-3,O*.26,O*.15,D,0,7),s.fill()}s.fillStyle="#e39b14",s.beginPath(),s.arc(0,0,O*.2,0,7),s.fill()}s.restore()}R(40,.42,.85,280,8,14,3,6,7),s.restore(),o[h]={u0:d/1024,u1:(d+512)/1024,v0:1-(x+512)/3072,v1:1-(x+8)/3072}},v=(h,d,x,p)=>{let _=zt(p),S=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];s.save(),s.translate(d,x),s.beginPath(),s.rect(0,0,512,512),s.clip();let T=[];for(let y=0;y<15;y++){let M=(y+_()*.6)/15,w=40+M*432,A=500-300*Math.sqrt(Math.max(0,1-((w-256)/232)**2));T.push([w,A+60+_()*50,54+_()*46])}for(let y=0;y<2600;y++){let M=T[Math.floor(_()*T.length)],w=_()*6.283,A=Math.sqrt(_())*M[2],C=M[0]+Math.cos(w)*A,I=Math.min(505,M[1]+Math.sin(w)*A*.85),R=Math.sin(w)<-.2?1:0,L=Math.max(0,Math.min(6,Math.floor(_()*2.4+(1-I/512)*3.2+R*1.3+A/M[2]*.8)));s.fillStyle=S[L],s.beginPath(),s.ellipse(C,I,7+_()*7,4+_()*4,_()*6.28,0,7),s.fill()}for(let y=0;y<130;y++){let M=T[Math.floor(_()*T.length)],w=-Math.PI*(.1+_()*.8),A=(.35+_()*.6)*M[2],C=M[0]+Math.cos(w)*A,I=M[1]+Math.sin(w)*A*.85;if(I>470)continue;let R=6+_()*5,L=_()*6.28,U=_()<.12;s.fillStyle=U?"#f3d2dc":"#fbfbf6";for(let O=0;O<5;O++){let V=L+O/5*6.283;s.beginPath(),s.ellipse(C+Math.cos(V)*R*.55,I+Math.sin(V)*R*.5,R*.5,R*.36,V,0,7),s.fill()}s.fillStyle="#d9b628",s.beginPath(),s.arc(C,I,R*.22,0,7),s.fill()}s.restore(),o[h]={u0:d/1024,u1:(d+512)/1024,v0:1-(x+512)/3072,v1:1-x/3072}};g("twigs",0,0),v("flowerbush",512,0,6151),u("leafA",0,a),u("leafB",512,a),u("sakura",0,a+512),u("pine",512,a+512),u("momiji",0,a+1024),u("ginkgo",512,a+1024),f("grass",0,a+1536,!1),f("flowers",512,a+1536,!0),m("bankA",0,a+2048,4111,.7),m("bankB",512,a+2048,4127,.35);let b=new ni(n);b.colorSpace=Gt,b.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let E=1-(a+2048)/3072,l=1-(a+2056)/3072;return{tex:b,cells:o,tuftV:[E,1-(a+1536)/3072,l,(E+l)/2]}}var xn=[1,1,1],_e={pole:pe("#b1b0a9"),metal:pe("#8d9198"),black:pe("#2a2b30"),yellow:pe("#f2c230"),white:pe("#f4f3ee"),trans:pe("#a0a3a8"),lampPole:pe("#727780"),lampHead:pe("#dcdcd6"),trunk:pe("#6a5444"),trunkDark:pe("#4b3a33"),bark:pe("#7a6556"),leaf:pe("#86ba4c"),leafShade:pe("#2c6640"),sakura:pe("#ffd3e3"),sakuraShade:pe("#de94b4"),pine:pe("#55874c"),pineShade:pe("#1d4632"),cedar:pe("#41713e"),cedarShade:pe("#1b3e2a"),roof:pe("#bdbbb3"),parapet:pe("#dcdad2"),pipe:pe("#c4c4bf"),orange:pe("#f07a22"),red:pe("#d8352a"),vermilion:pe("#e2482c"),concrete:pe("#c9c7c0"),stone:pe("#a8a69e"),terracotta:pe("#b8653d"),rail:pe("#eeeeea")},dd=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(pe),Ts=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(pe),km=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(pe),pd=null;function Hm(i){pd=i}var $i=i=>pd.uv(i),Uo=$i,Vm=(i,e)=>{let t=1;for(;pd.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function eh(i,e,t,n,s=0){let r=new Ke().makeRotationY(s);r.setPosition(e,t,n);let o=new Ke().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var md=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let a=e[5];(a==="g"&&e[6]==="l"||a==="d"||a==="k"||a==="c"||a==="n")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},cn=(i,e,t,n,s,r,o,a=xn)=>{md(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],a,$i(o)),i.litV=0},Ki=(i,e,t,n,s,r,o,a=xn)=>{md(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],a,$i(o)),i.litV=0},Ji=(i,e,t,n,s,r,o,a=xn)=>{md(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],a,$i(o)),i.litV=0},No=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?$i(r):void 0),Qb=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function Gm(i){return Qb.map(e=>new k(e[0],e[1],e[2]).applyMatrix4(i))}function gd(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,_e.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?_e.black:_e.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,_e.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,_e.metal);let o=[-.85,-.3,.3,.85],a=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,_e.white);for(let u of a)s.cyl(0,r-1.65,u,.045,.03,.15,6,_e.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,_e.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,_e.trans),s.box(-.06,7.2,.12,.06,7.35,.26,_e.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,_e.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,_e.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,_e.concrete);for(let u=2.4,f=0;u<r-2;u+=.45,f++)s.rod([0,u,0],[f%2?.3:-.3,u,0],.015,.015,3,_e.metal);return i.atlas.setM(e),cn(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&cn(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...a.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new k(u[0],u[1],u[2]).applyMatrix4(e))}var ju=new k;function js(i,e,t,n,s,r){i.lamps&&(ju.set(t,n,s).applyMatrix4(e),i.lamps.push(ju.x,ju.y,ju.z,r))}function vd(i,e,t,n={}){let s=i.color;s.setM(e),js(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,_e.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,_e.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,_e.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,_e.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,xn);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],xn,{u0:0,u1:1,v0:0,v1:1})}function Wm(i,e,t=.04){let n=i.color;n.setM(e),js(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,_e.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,_e.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,_e.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,xn),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],xn,{u0:0,u1:1,v0:0,v1:1})}function Do(i,e,t,n,s,r,o=!1,a=!1){let c=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[f,g]=c[u],[m,v]=c[(u+1)%4];i.quad([f*n,e,g*n],[f*s,t,g*s],[m*s,t,v*s],[m*n,e,v*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),a&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var eM=pe("#202127");function ul(i,e){let t=i.color;t.setM(e),js(i,e,0,3.4,0,.9);let n=eM,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),Do(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),Do(t,3.64,3.84,.23,.05,n),Do(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,xn),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],xn,{u0:0,u1:1,v0:0,v1:1})}function xd(i,e,t){let n=Math.floor(t()*3),s=[_e.red,pe("#2f6fd8"),_e.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Nn(s,.8)),i.atlas.setM(e),cn(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function fd(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,pe("#e6e6e1")),i.atlas.setM(e),cn(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function Xm(i,e,t){let n=i.color;n.setM(e);let s=t.pick([pe("#c8ccd2"),pe("#c0392b"),pe("#2c6fb7"),pe("#2b2b2b"),pe("#e8c84a"),pe("#e98fb0")]);for(let o of[-.52,.52])for(let a=0;a<12;a++){let c=a/12*Math.PI*2,u=(a+1)/12*Math.PI*2;n.rod([o+Math.cos(c)*.33,.34+Math.sin(c)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,_e.black)}let r=(o,a)=>n.rod(o,a,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,_e.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,_e.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,_e.metal)}function qm(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,_e.orange),t.cyl(0,.04,0,.16,.03,.68,10,_e.orange),t.cyl(0,.32,0,.115,.095,.12,10,_e.white,!1)}function yd(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,_e.terracotta),i.leaf.setM(e),ji(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}function Qs(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,_e.metal),i.atlas.setM(e),n<0?Ji(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):Ki(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function _d(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?_e.white:_e.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,_e.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,_e.black),i.atlas.setM(e),t<0?Ji(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):Ki(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function Ym(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,pe("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,pe("#f0a020"))}function bd(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,_e.orange);let s=0,r=3.25,o=.42,a=14;for(let c=0;c<a;c++){let u=c/a*Math.PI*2,f=(c+1)/a*Math.PI*2,g=(m,v,b)=>[t*b,r+Math.sin(m)*v,s+Math.cos(m)*v-.25];No(n,g(0,0,-.02),g(t>0?f:u,o,-.02),g(t>0?u:f,o,-.02),_e.orange),No(n,g(0,0,-.035),g(t>0?f:u,o*.86,-.035),g(t>0?u:f,o*.86,-.035),pe("#dfe9f2"))}}var hl=null;function Zm(i){hl=i}var cl=1;function $m(i){cl=i}function ji(i,e,t,n,s,r,o,a,c,u,f,g,m=0){let v=hl[o],b=1+(1-cl)*.35;a=Math.max(2,Math.round(a*cl));for(let E=0;E<a;E++){let l=c()*2-1,h=c()*2-1,d=c()*2-1;m&&(h=1.2+c());let x=Math.hypot(l,h,d)||1;l/=x,h/=x,d/=x;let p=-d,_=0,S=l;x=Math.hypot(p,S),x<.1&&(p=1,S=0,x=1),p/=x,S/=x;let T=h*S-d*_,y=d*p-l*S,M=l*_-h*p,w=Math.PI+(c()-.5)*.9,A=Math.cos(w),C=Math.sin(w),I=p*A+T*C,R=_*A+y*C,L=S*A+M*C,U=T*A-p*C,O=y*A-_*C,V=M*A-S*C,D=r*(1.3+c()*.45)*b/2,H=t+(c()-.5)*r*.6,z=n+(c()-.5)*r*(m?.15:.5),$=s+(c()-.5)*r*.6,ae=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([De,K])=>[H+(I*De+U*K)*D,z+(R*De+O*K)*D*(m?.6:1),$+(L*De+V*K)*D]),He=ae.map(De=>{let K=De[0]-e[0],X=De[1]-e[1],ge=De[2]-e[2],Ie=Math.hypot(K,X,ge)||1;K/=Ie,X/=Ie,ge/=Ie;let Ee=De[0]-t,Me=De[1]-n,Ze=De[2]-s;return Ie=Math.hypot(Ee,Me,Ze)||1,[K*.7+Ee/Ie*.3,X*.7+Me/Ie*.3+(m?.5:0),ge*.7+Ze/Ie*.3]}),we=ae.map(De=>jf(f,u,.45+.55*Math.max(0,Math.min(1,(De[1]-g[0])/(g[1]-g[0])))));i.leaf.card(ae,He,v,we)}}function Md(i,e,t,n="grass",s=1){let r=hl[n],o=(.42+t()*.38)*s,a=o*1.2,c=t()*Math.PI,u=[0,1,0],f=[u,u,u,u],g=[.6,.64,.58],m=[1,1,1];i.leaf.setM(e);for(let v of[c,c+Math.PI/2]){let b=Math.cos(v)*a/2,E=Math.sin(v)*a/2;i.leaf.card([[-b,-.05,-E],[b,-.05,E],[b,o,E],[-b,o,-E]],f,r,[g,g,m,m])}}function Km(i,e,t,n=1){let s=hl.flowerbush;if(!s)return;let r=(.8+t()*.35)*n,o=r*1.7,a=t()*Math.PI,c=[0,1,0],u=[c,c,c,c],f=[.6,.64,.6],g=[1,1,1];i.leaf.setM(e);for(let m of[a,a+Math.PI/2]){let v=Math.cos(m)*o/2,b=Math.sin(m)*o/2;i.leaf.card([[-v,-.06,-b],[v,-.06,b],[v,r,b],[-v,r,-b]],u,s,[f,f,g,g])}}var tM=[.62,.68,.74],Jm=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],nM=[0,1,2,0,2,3,0,3,4],iM=Jm.map(([,i])=>jf(tM,xn,i));function Sd(i,e,t,n,s,r,o,a=1){let c=hl[o()<.5?"bankA":"bankB"],u=.82*a,f=(u+.06)*2.03,g=i.leaf;for(let m of nM){let[v,b]=Jm[m],E=(v-.5)*f;g.vtx(e+s*E,t+b*(u+.06)-.06,n+r*E,0,1,0,c.u0+(c.u1-c.u0)*v,c.v0+(c.v1-c.v0)*b,iM[m])}}var jm=()=>cl>.7?.9:1.25;function sM(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,_e.trunk);for(let u=0;u<3;u++){let f=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(f)*1.1*n,s*.68,Math.sin(f)*1.1*n],.09*n,.05*n,5,_e.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",a=[s*.45,s*1.15],c=7+Math.floor(t()*3);for(let u=0;u<c;u++){let f=t()*6.28,g=(.6+t())*1.3*n;ji(i,r,Math.cos(f)*g,s*(.62+t()*.3),Math.sin(f)*g,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],a)}ji(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],a)}function Um(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,_e.trunkDark);let r=[];for(let u=0;u<5;u++){let f=u/5*6.28+t()*.8,g=(2.2+t()*1.6)*n,m=[Math.cos(f)*g,s*(.62+t()*.18),Math.sin(f)*g];i.color.rod([0,s*.4,0],m,.12*n,.05*n,5,_e.trunkDark),r.push(m),i.color.rod(m,[m[0]*1.25,m[1]+.9*n,m[2]*1.25],.05*n,.02*n,4,_e.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],a=[s*.5,s*1.1],c=[.72,.62,.72];for(let u of r)for(let f=0;f<2;f++)ji(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],c,a);ji(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],c,a)}function rM(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,a=[r*.4,o*.45,.2],c=[r,o*.8,-.2];s.rod([0,0,0],a,.2*n,.15*n,6,_e.trunkDark),s.rod(a,c,.15*n,.09*n,6,_e.trunkDark),i.leaf.setM(e);let u=[[c[0],c[1]+.3,c[2],1.7],[a[0]+1.4*n,a[1]+.8,.5,1.3],[a[0]-1.3*n,a[1]+1.4,-.4,1.2],[c[0]+.9*n,c[1]-.6,.8,1.1]];for(let[f,g,m,v]of u)s.rod(f>a[0]?a:c,[f,g-.2,m],.07*n,.04*n,4,_e.trunkDark),ji(i,[f,g-.8,m],f,g,m,v*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[g-.7,g+.5],1)}function oM(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,_e.trunkDark);let r=[];for(let u=0;u<5;u++){let f=u/5*6.28+t()*.8,g=(1.8+t()*1.4)*n,m=[Math.cos(f)*g,s*(.55+t()*.2),Math.sin(f)*g];i.color.rod([0,s*.38,0],m,.09*n,.04*n,5,_e.trunkDark),r.push(m)}i.leaf.setM(e);let o=[0,s*.7,0],a=[s*.45,s*1.1],c=[.62,.52,.56];for(let u of r)ji(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],c,a);ji(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],c,a)}function aM(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,_e.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],a=[.68,.6,.52];for(let c=0;c<7;c++){let u=s*(.34+c*.09),f=(2.1-c*.24)*n,g=t()*6.28;ji(i,r,Math.cos(g)*f*.35,u,Math.sin(g)*f*.35,Math.max(.7,f)*1.05,"ginkgo",5,t,[1,1,1],a,o)}}function lM(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,pe("#eeece6"));for(let u=0;u<7;u++){let f=t.range(.4,r*.85),g=f/r;s.cyl(o*g,f,0,.135*n*(1-g*.6),.13*n*(1-g*.6),.05,7,pe("#2b2b30"),!1)}for(let u=0;u<7;u++){let f=r*(.45+t()*.5),g=t()*6.28,m=(.8+t()*1.6)*n,v=f/r;s.rod([o*v,f,0],[o*v+Math.cos(g)*m,f+m*.9,Math.sin(g)*m],.035*n,.012*n,4,pe("#8b7f78"))}let a=r*.7,c=(1.5+t()*.5)*n;i.leaf.setM(e),ji(i,[o*.7,a,0],o*.7,a,0,c,"twigs",3,t,[1,1,1],[.92,.9,.92],[a-c,a+c])}function cM(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,_e.trunkDark),i.foliage.setM(e);let r=pe("#1d3a2c"),o=pe("#eef2f8"),a=pe("#d7e0ec");for(let c=0;c<4;c++){let u=s*(.16+c*.19),f=(1.9-c*.38)*n,g=s*.3;i.foliage.cyl(0,u,0,f,f*.3,g,9,r),i.foliage.cyl(0,u+g*.45,0,f*.72,.05,g*.62,9,c%2?o:a)}}function uM(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,_e.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,_e.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,_e.cedar)}var Li={cells:null,bcells:null};function hM(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.color;o.setM(e);let a=r*t.range(.3,.38);o.cyl(0,0,0,.27*n*s,.2*n*s,a,8,_e.trunk);let c=r*.64,u=t.range(2.6,3.2)*n*s,f=t.range(2,2.5)*n*s,g=n*s,m=[],v=5+Math.floor(t()*3);for(let x=0;x<v;x++){let p=x/v*6.283+t()*.6,_=t.range(-.15,.75),S=Math.sqrt(1-_*_);m.push([Math.cos(p)*S,_,Math.sin(p)*S])}m.push([0,1,0]);let b=[[0,c+.15*f,0,1.76*g,1]],E=26+Math.floor(t()*7);for(let x=0;x<E;x++){let p=t()*2-1,_=t.range(-.55,1),S=t()*2-1,T=Math.hypot(p,_,S)||1;p/=T,_/=T,S/=T;let y=m[0],M=-2;for(let A of m){let C=A[0]*p+A[1]*_+A[2]*S;C>M&&(M=C,y=A)}p=p*.45+y[0]*.55,_=_*.45+y[1]*.55,S=S*.45+y[2]*.55,T=Math.hypot(p,_,S)||1,p/=T,_/=T,S/=T;let w=t.range(.78,.95);b.push([p*u*w,c+_*f*w,S*u*w,t.range(.8,1.1)*g,0])}for(let x=0;x<4;x++){let p=m[x%v];o.rod([0,a*.9,0],[p[0]*u*.55,c+Math.min(0,p[1])*f*.4-.3*n,p[2]*u*.55],.15*g,.06*n,6,_e.trunk)}let l=t(),h=l<.5?[1,1,.92+l*.16]:[1-(l-.5)*.12,1,.9],d=i.gleaf;d.setM(e);for(let[x,p,_,S,T]of b){let y=x,M=(p-c)*(u/f)+.1*u,w=_,A=Math.hypot(y,M,w)||1;y/=A,M/=A,w/=A,T&&(y=w=0,M=-1);let C=Math.min(1,Math.max(0,(p-(c-f))/(2*f))),I=T?.55:.72+.28*C,R=S/.8*.88;d.bill(x,p,_,y,M,w,R,R,Li.cells[Math.floor(t()*Li.cells.length)],[h[0]*I,h[1]*I,h[2]*I],lm,.88)}}function Fm(i,e,t,n=1,s=!1){let r=i.color;r.setM(e);let o=s?1:0,a=t.range(2.2,2.7)*n,c=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,a,o*.3*n];r.rod([0,0,0],u,c,c*.8,7,_e.bark),r.cyl(0,0,0,c*1.25,c,.35*n,7,_e.bark,!1);let f=t.range(6.3,6.9)*n,g=-o*.5*n,m=t.range(4,4.5)*n,v=t.range(3.6,4)*n,b=t.range(1.7,2)*n,E=t()<.35?4:3,l=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let T=0;T<E;T++){let y=l+T/E*6.283+t.range(-.3,.3),M=Math.cos(y),w=Math.sin(y),A=t.range(.32,.46),C=[u[0]+M*m*A,f-b*t.range(.35,.55),u[2]*.5+g*.4+w*v*A],I=[u[0]+(C[0]-u[0])*.45+M*.25*n,a+(C[1]-a)*.55,u[2]+(C[2]-u[2])*.45+w*.25*n],R=(O,V,D)=>{let H=Math.hypot(V[0]-O[0],V[1]-O[1],V[2]-O[2])||1;return[V[0]-(V[0]-O[0])/H*D,V[1]-(V[1]-O[1])/H*D,V[2]-(V[2]-O[2])/H*D]};r.rod(u,I,c*.62,c*.46,6,_e.bark),r.rod(R(u,I,c*.5),C,c*.47,c*.3,5,_e.bark);let L=R(I,C,c*.35),U=T%2?1:2;for(let O=0;O<U;O++){let V=(O?1:-1)*t.range(.3,.9),D=t.range(1.2,1.9)*n;r.rod(L,[C[0]+Math.cos(y+V)*D,C[1]+t.range(.7,1.2)*n,C[2]+Math.sin(y+V)*D],c*.27,.04*n,4,_e.bark)}}let h=[],d=6+Math.floor(t()*2);for(let T=0;T<d;T++){let y=T/d*6.283+t()*.5,M=t.range(-.2,.6),w=Math.sqrt(1-M*M);h.push([Math.cos(y)*w,M,Math.sin(y)*w])}h.push([0,1,0]);let x=[[-m*.3,f,g,1.75*n,1],[m*.3,f,g,1.75*n,1]],p=21+Math.floor(t()*4);for(let T=0;T<p;T++){let y=t()*2-1,M=t.range(-.3,1),w=t()*2-1,A=Math.hypot(y,M,w)||1;y/=A,M/=A,w/=A;let C=h[0],I=-2;for(let L of h){let U=L[0]*y+L[1]*M+L[2]*w;U>I&&(I=U,C=L)}y=y*.5+C[0]*.5,M=M*.5+C[1]*.5,w=w*.5+C[2]*.5,A=Math.hypot(y,M,w)||1,y/=A,M/=A,w/=A;let R=t.range(.8,.95);x.push([y*m*R,f+M*b*R,g+w*v*R,t.range(1,1.3)*n,0])}let _=[1,t.range(.96,1.03),t.range(.97,1.02)],S=i.gblossom;S.setM(e);for(let[T,y,M,w,A]of x){let C=T/m,I=(y-f)/b+.12,R=(M-g)/v,L=Math.hypot(C,I,R)||1;C/=L,I/=L,R/=L,A&&(C=R=0,I=-1);let U=Math.min(1,Math.max(0,(y-(f-b))/(2*b))),O=A?.62:.8+.2*U,V=w/.8*.86;S.bill(T,y,M,C,I,R,V,V,Li.bcells[Math.floor(t()*Li.bcells.length)],[_[0]*O,_[1]*O,_[2]*O],cm,.86)}}var Qm={broad:(i,e,t,n)=>(Li.cells?hM:sM)(i,e,t,n),sakura:(i,e,t,n)=>Li.bcells?Fm(i,e,t,n):Um(i,e,t,n),sakuraAve:(i,e,t,n)=>Li.bcells?Fm(i,e,t,n,!0):Um(i,e,t,n),pine:rM,cedar:uM,maple:oM,ginkgo:aM,birch:lM,snowcedar:cM},Bm={};function eg(i,e){let t=i+e,n=Bm[t];if(!n){let s={color:new ln,foliage:new ln,leaf:new ln({uv:!0}),gleaf:new ln({uv:!0,off:!0}),gblossom:new ln({uv:!0,off:!0})};Qm[i](s,new Ke,zt(1e3+e*77+i.length*13),1),n=Bm[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays()}}return n}function tg(){for(let i in Qm)for(let e=0;e<4;e++)eg(i,e)}function ri(i,e,t,n,s=1){let r=eg(t,Math.floor(n()*4)),o=e.clone().scale(new k(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o)}var fM=new Set(["win0","win2","win5","win6"]),hs=(i,e,t)=>e<t?i+(e<t*.35&&fM.has(i)?"C":"L"):i;function fl(i,e,t,n,s,r,o){let a=Math.max(1,Math.round(t/3)),c=t/a;for(let u of[-1,1])for(let f=0;f<n.length-1;f++)for(let g=0;g<a;g++){let m=f>0&&r()<.3?hs("win6",r(),o):r()<.2?"win5":"plain";(u>0?Ki:Ji)(i,u*e/2,g*c,(g+1)*c,n[f],n[f+1],m,s)}}function dl(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],_e.roof);let o=.5,a=.15;if(i.box(-e/2,n,-.02,e/2,n+o,a,_e.parapet),i.box(-e/2,n,t-a,e/2,n+o,t,_e.parapet),i.box(-e/2,n,0,-e/2+a,n+o,t,_e.parapet),i.box(e/2-a,n,0,e/2,n+o,t,_e.parapet),s()<.4){let c=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[f,g]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(c+f-.05,n,u+g-.05,c+f+.05,n+1,u+g+.05,_e.metal);i.cyl(c,n+1,u,.85,.85,1.3,12,pe("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,_e.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,_e.metal)}function Qu(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,_e.black);let r="vs"+Math.floor(s()*10);Ji(i.atlas,e-.065,-.88,-.12,t,n,r),Ki(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,_e.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,_e.metal)}function ws(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,_e.concrete,null,{noBottom:!0}),n.type){case"shop":return dM(i,e,t,n);case"machiya":return pM(i,e,t,n);case"apt":return mM(i,e,t,n);case"office":return gM(i,e,t,n);case"konbini":return vM(i,e,t,n);case"house":return yM(i,e,t,n);case"tower":return _M(i,e,t,n)}}var ng=new Set(["glass","door","cafe","noren"]),ig={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function dM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,g=3.6,m=3,v=g+(o-1)*m,b=Math.max(1,Math.round(s/3)),E=s/b,l=-s/2,h=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],x=0;for(let y=0;y<b;y++){let M=Vm(t,"shop_"+h[y%h.length]);d.push(M),!x&&M.startsWith("shop_glass")&&M.length>10&&(x=+M.slice(10))}for(let y=0;y<b;y++){let M=h[y%h.length];cn(u,l+y*E,l+(y+1)*E,0,g,0,x&&M==="glass"?"shop_glass"+x:d[y]),ng.has(M)&&js(i,e,l+(y+.5)*E,1.9,-.8,.7)}let p=t.pick([0,0,1,5,0,1]),_=[0,g];for(let y=1;y<o;y++)_.push(g+y*m);for(let y=1;y<o;y++)for(let M=0;M<b;M++){let w=M%2===1&&t()<.3?5:p;cn(u,l+M*E,l+(M+1)*E,_[y],_[y+1],0,hs("win"+w,t(),c),a)}fl(u,s,r,_,a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],Nn(a,.8)),dl(f,s,r,v,t);let S=s*.94;f.box(-S/2,g-.8,-.3,S/2,g+.08,-.02,_e.black);let T="hs"+Math.floor(t()*14);if(cn(u,-S/2,S/2,g-.8,g+.08,-.305,ig[x]||T),t()<.55){let y=t.pick(km),M=g-.85;f.quad([s/2-.2,M-.35,-1.1],[-s/2+.2,M-.35,-1.1],[-s/2+.2,M,-.02],[s/2-.2,M,-.02],y),f.quad([s/2-.2,M-.6,-1.1],[-s/2+.2,M-.6,-1.1],[-s/2+.2,M-.35,-1.1],[s/2-.2,M-.35,-1.1],Nn(y,.85))}if(o>=2&&t()<.85){let y=(t()<.5?1:-1)*(s/2-.35);Qu(i,y,g+.3,Math.min(v-.15,g+2.8),t)}for(let y=1;y<o;y++)if(t()<.4){let M=Math.floor(t()*b),w=l+M*E+.15,A=l+(M+1)*E-.15,C=_[y];f.box(w,C-.12,-.9,A,C,0,_e.parapet),cn(u,w,A,C,C+1,-.9,"rail"),Ji(u,w,-.9,0,C,C+1,"rail"),Ki(u,A,-.9,0,C,C+1,"rail"),t()<.45&&cg(f,w+.1,A-.1,C+1.95,-.55,t),t()<.6&&fd(i,e,(w+A)/2+.6,C,-.75)}else if(t()<.35){let M=Math.floor(t()*b);fd(i,e,l+(M+.5)*E,_[y]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}f.cyl(l+.12,0,-.08,.05,.05,v,6,_e.pipe,!1),f.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,pe("#d9d9d3")),o>=3&&t()<.18&&sg(i,s,v,r,t)}function pM(i,e,t,n){let{w:s,d:r,floors:o,litP:a}=n,c=i.atlas,u=i.color,f=3.6,g=2.9,m=f+(o-1)*g,v=-s/2,b=Math.max(2,Math.round(s/3)),E=s/b,l=pe("#5c4030"),h=pe("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),x=[],p=0;for(let D=0;D<b;D++){let H=Vm(t,"shop_"+d[D%d.length]);x.push(H),!p&&H.startsWith("shop_glass")&&H.length>10&&(p=+H.slice(10))}for(let D=0;D<b;D++){let H=d[D%d.length];cn(c,v+D*E,v+(D+1)*E,0,f,0,p&&H==="glass"?"shop_glass"+p:x[D]),ng.has(H)&&js(i,e,v+(D+.5)*E,1.9,-.8,.7)}let _=!!n.plaster,S=n.tint,T=[0,f];for(let D=1;D<o;D++)T.push(f+D*g);let y=_?t.pick([0,0,1,0,2]):4;for(let D=1;D<o;D++)for(let H=0;H<b;H++)cn(c,v+H*E,v+(H+1)*E,T[D],T[D+1],0,hs("win"+(_&&H%2===1&&t()<.3?5:y===2?0:y),t(),a),_?S:xn);{let D=Math.max(1,Math.round(r/3)),H=r/D;for(let z of[-1,1])for(let $=0;$<T.length-1;$++)for(let ae=0;ae<D;ae++)(z>0?Ki:Ji)(c,z*s/2,ae*H,(ae+1)*H,T[$],T[$+1],_?$>0&&t()<.35?hs("win6",t(),a):"plain":$>0&&t()<.45?hs("win4",t(),a):"woodwall",_?S:xn)}u.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],_?Nn(S,.8):pe("#6a5240"));for(let D of[v,-v])u.box(D-.09,0,-.12,D+.09,m,.02,h);if(_)for(let D=2;D<o;D++)u.box(v,T[D]-.1,-.08,-v,T[D]+.06,0,h);let{RC:M,k:w}=rg(i,n,s,r,m,t,!_),A=f+.34,C=1.05,I=.42,R=Math.max(2,Math.round((s+.3)/3));for(let D=0;D<R;D++){let H=v-.15+(s+.3)*D/R,z=v-.15+(s+.3)*(D+1)/R;c.quad([z,A-I,-C],[H,A-I,-C],[H,A,0],[z,A,0],M,w)}u.quad([v-.15,A-I-.03,-C],[-v+.15,A-I-.03,-C],[-v+.15,A-.1,0],[v-.15,A-.1,0],l);let L=s*.9,U=A-I+.02,O=U-.62;u.box(-L/2,O,-C-.02,L/2,U,-C+.07,h),cn(c,-L/2,L/2,O,U,-C-.025,ig[p]||"hs"+Math.floor(t()*14));for(let D of[-L/2+.25,L/2-.25])u.box(D-.03,U,-C+.02,D+.03,A-I*.1,-C+.06,h);i.sodium.setM(e),u.noShadow=!0;for(let D=0;D<b;D++){let H=v+(D+.5)*E;u.box(H-.008,O-.02,-.62,H+.008,A-I*.6,-.6,h),i.sodium.box(H-.06,O-.16,-.67,H+.06,O-.04,-.55,null)}u.noShadow=!1;let V=!1;if(t()<.5){V=!0;let D=t.pick(km),H=O-.12;u.quad([s/2-.2,H-.32,-.95],[-s/2+.2,H-.32,-.95],[-s/2+.2,H,-.02],[s/2-.2,H,-.02],D),u.quad([s/2-.2,H-.55,-.95],[-s/2+.2,H-.55,-.95],[-s/2+.2,H-.32,-.95],[s/2-.2,H-.32,-.95],Nn(D,.85))}if(o>=2&&(!_||t()<.5)){let D=T[1]+.42,H=-.5,z=v+.12,$=-v-.12;u.box(z,D-.07,H-.04,$,D,0,l);for(let ae=0;ae<b;ae++)cn(c,v+.12+(s-.24)*ae/b,v+.12+(s-.24)*(ae+1)/b,D,D+.95,H,"wrail");Ji(c,z,H,0,D,D+.95,"wrail"),Ki(c,$,H,0,D,D+.95,"wrail"),i.leaf.setM(e);for(let ae=0;ae<b;ae++)if(t()<.7){let He=v+(ae+.5)*E,we=Math.min(E*.7,1.6);u.noShadow=!0,u.box(He-we/2,D+.72,H-.2,He+we/2,D+.92,H-.02,pe("#7a5236")),u.noShadow=!1;for(let De=He-we/2+.2;De<He+we/2-.1;De+=.32)ji(i,[De,D+.95,H-.11],De,D+1.05,H-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[D+.9,D+1.3])}}if(o>=2&&t()<.9){let D=t()<.5?1:-1;Qu(i,D*(s/2-.35),f+.6,Math.min(m-.2,f+2.7),t),s>7&&t()<.35&&Qu(i,-D*(s/2-.35),f+.8,Math.min(m-.2,f+2.5),t)}{let D=d.includes("noren")||d.includes("cafe"),H=V?0:D?2:t()<.3?1:0;i.sodium.setM(e);for(let z=0;z<H;z++){let $=H===2?(z?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),ae=O-.5;u.noShadow=!0,u.box($-.006,ae+.42,-C+.12,$+.006,O,-C+.14,h),i.sodium.cyl($,ae,-C+.13,.11,.16,.18,10,null,!1),i.sodium.cyl($,ae+.18,-C+.13,.16,.11,.18,10,null,!1),u.cyl($,ae-.035,-C+.13,.1,.1,.04,8,h),u.cyl($,ae+.355,-C+.13,.1,.1,.04,8,h),u.noShadow=!1}}for(let D=v+.45+t()*.4;D<-v-.3;D+=.7+t()*1.3)t()<.7&&yd(i,e,t,D,-.4);i.color.setM(e),i.atlas.setM(e)}function sg(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,a=n*.3;for(let c of[-r*.35,r*.35])i.color.box(c-.06,t,a,c+.06,t+1.2+o,a+.12,_e.metal);i.color.box(-r/2,t+1.2,a+.12,r/2,t+1.2+o,a+.3,_e.metal),cn(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,a+.115,"bb"+Math.floor(s()*4))}function mM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,g=3.2,m=2.95,v=g+(o-1)*m,b=Math.max(2,Math.round(s/3.2)),E=s/b,l=-s/2,h=[0,g];for(let p=1;p<o;p++)h.push(g+p*m);for(let p=0;p<b;p++)cn(u,l+p*E,l+(p+1)*E,0,g,0,p===Math.floor(b/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),p===Math.floor(b/2)?xn:a);let d="bal"+Math.floor(t()*3),x=Nn(a,.97);for(let p=1;p<o;p++){let _=h[p];for(let S=0;S<b;S++)cn(u,l+S*E,l+(S+1)*E,_,h[p+1],0,hs("win2",t(),c),a);f.box(l,_-.15,-1.3,-l,_,0,x),f.box(l,_,-1.3,-l,_+1.1,-1.18,x,null,{noBottom:!0});for(let S=0;S<b;S++)cn(u,l+S*E,l+(S+1)*E,_,_+1.1,-1.305,d,a);for(let S=0;S<=b;S++)f.box(l+S*E-.05,_,-1.18,l+S*E+.05,_+2.4,0,Nn(a,.92));for(let S=0;S<b;S++){let T=t(),y=l+S*E+.2,M=l+(S+1)*E-.2;T<.34?cg(f,y,M,_+2.02,-.98,t):T<.46&&SM(f,y+.25,Math.min(M-.25,y+1.9),_+1.1,-1.3,t)}i.atlas.setM(e);for(let S=0;S<b;S++)t()<.55&&(fd(i,e,l+(S+.78)*E,_,-.55),i.atlas.setM(e),i.color.setM(e))}f.box(l,v-.15,-1.3,-l,v,0,x),fl(u,s,r,h,a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],Nn(a,.8)),dl(f,s,r,v,t,!0)}function gM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,g=4,m=3.4,v=g+(o-1)*m,b=Math.max(2,Math.round(s/3)),E=s/b,l=-s/2,h=[0,g];for(let d=1;d<o;d++)h.push(g+d*m);for(let d=0;d<b;d++)cn(u,l+d*E,l+(d+1)*E,0,g,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let x=0;x<b;x++)cn(u,l+x*E,l+(x+1)*E,h[d],h[d+1],0,hs("win3",t(),c),a);fl(u,s,r,h,a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,v,r],[-s/2,v,r],Nn(a,.8)),dl(f,s,r,v,t,!0),t()<.6&&Qu(i,(t()<.5?1:-1)*(s/2-.3),g+.4,Math.min(v-.3,g+4.5),t),t()<.3&&sg(i,s,v,r,t)}function vM(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,a=i.color,c=4.4,u=-s/2,f=Math.max(3,Math.round(s/3)),g=s/f;for(let m=0;m<f;m++)cn(o,u+m*g,u+(m+1)*g,0,3.4,0,"shop_konbini"),js(i,e,u+(m+.5)*g,1.9,-.8,.8);a.box(u,3.4,-.35,-u,c,0,_e.white),cn(o,u,-u,3.4,c,-.355,"konbini_band"),fl(o,s,r,[0,c],pe("#f2f2ee"),t,0),dl(a,s,r,c,t)}var Om=(i,e)=>e?pe("#7a5a42"):i.tint,ud=null,xM=()=>{if(!ud){let i=$i("kawara"),e=16/272*(i.u1-i.u0);ud={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return ud};function rg(i,e,t,n,s,r,o){let a=i.atlas,c=i.color,u=!!e.snow,f=u?.75:.6,g=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),m=u?$i("white"):xM(),v=u?pe("#f3f5fa"):pe("#c8ccd8"),b=u?pe("#e4e8f0"):pe("#3d4456"),E=u?1:Math.max(2,Math.round((t+2*f)/3)),l=x=>-t/2-f+(t+2*f)*x/E;for(let x=0;x<E;x++){let p=l(x),_=l(x+1);a.quad([_,s-.25,-f],[p,s-.25,-f],[p,s+g,n/2],[_,s+g,n/2],v,m),a.quad([p,s-.25,n+f],[_,s-.25,n+f],[_,s+g,n/2],[p,s+g,n/2],v,m)}let h=(x,p,_,S,T,y)=>{y<0?(c.quad([p,_,T],[x,_,T],[x,S,T],[p,S,T],b),c.quad([x,_,T],[p,_,T],[p,_,T+.08],[x,_,T+.08],b)):(c.quad([x,_,T],[p,_,T],[p,S,T],[x,S,T],b),c.quad([p,_,T],[x,_,T],[x,_,T-.08],[p,_,T-.08],b))};for(let[x,p]of[[-f,0],[n+f,n]])h(-t/2-f,t/2+f,s-.42,s-.22,x<0?x-.04:x+.04,x<0?-1:1),c.quad(x<0?[-t/2-f,s-.26,x]:[t/2+f,s-.26,x],x<0?[t/2+f,s-.26,x]:[-t/2-f,s-.26,x],x<0?[t/2+f,s-.26,p]:[-t/2-f,s-.26,p],x<0?[-t/2-f,s-.26,p]:[t/2+f,s-.26,p],Nn(Om(e,o),.62));for(let x of[-1,1]){let p=x*(t/2+f+.02),_=.2,S=[p,s-.25,-f],T=[p,s+g,n/2],y=[p,s-.25,n+f],M=w=>[w[0],w[1]-_,w[2]];x>0?(c.quad(M(T),M(S),S,T,b),c.quad(M(y),M(T),T,y,b)):(c.quad(M(S),M(T),T,S,b),c.quad(M(T),M(y),y,T,b))}let d=Om(e,o);if(No(c,[-t/2,s,0],[-t/2,s,n],[-t/2,s+g-.1,n/2],d),No(c,[t/2,s,n],[t/2,s,0],[t/2,s+g-.1,n/2],d),c.box(-t/2-f,s+g-.05,n/2-.15,t/2+f,s+g+.18,n/2+.15,u?pe("#f6f7fb"):pe("#3d4456")),u){c.box(-t/2-f-.05,s-.42,-f-.1,t/2+f+.05,s-.12,-f+.3,pe("#eef1f7")),c.box(-t/2-f-.05,s-.42,n+f-.3,t/2+f+.05,s-.12,n+f+.1,pe("#eef1f7"));for(let x=-t/2;x<t/2;x+=.45+r()*.5)c.cyl(x,s-.42-.35,-f+.02,0,.04,.35,4,pe("#dfe8f3"),!1)}return{RC:v,k:m,fascia:h,nS:E}}function yM(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,g=2.9,m=o*g,v=-s/2,b=t()<.5,E=Math.max(2,Math.round(s/3)),l=s/E,h=[];for(let T=0;T<=o;T++)h.push(T*g);let d=b?xn:a;for(let T=0;T<o;T++)for(let y=0;y<E;y++){let M=b?"win4":"win0";T===0&&y===0?M="shop_house":M=hs(M,t(),c),cn(u,v+y*l,v+(y+1)*l,h[T],h[T+1],0,M,M==="shop_house"?xn:d)}fl(u,s,r,h,b?pe("#9a7a62"):a,t,c),f.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],Nn(a,.75));let{RC:x,k:p,fascia:_,nS:S}=rg(i,n,s,r,m,t,b);if(o>1){let T=g+.05;for(let y=0;y<S;y++){let M=-s/2-.1+(s+.2)*y/S,w=-s/2-.1+(s+.2)*(y+1)/S;u.quad([w,T-.3,-.75],[M,T-.3,-.75],[M,T+.05,0],[w,T+.05,0],x,p)}_(-s/2-.1,s/2+.1,T-.42,T-.28,-.79,-1)}if(n.fence){let T=-n.fence,y=1.2;for(let[M,w]of[[-s/2,-1],[.4,s/2]])f.box(M,0,T-.08,w,y,T+.08,_e.concrete),cn(u,M,w,0,y,T-.085,"block")}}function _M(i,e,t,n){let{w:s,d:r,floors:o,tint:a,litP:c}=n,u=i.atlas,f=i.color,g=3.4,m=o*g,v=Math.max(2,Math.round(s/6)),b=s/v,E=-s/2,l=t()<.5?"win3":"win2",h=[];for(let p=0;p<=o;p++)h.push(p*g);for(let p=0;p<o;p++)for(let _=0;_<v;_++)cn(u,E+_*b,E+(_+1)*b,h[p],h[p+1],0,hs(l,t(),c),a);let d=Math.max(1,Math.round(r/6)),x=r/d;for(let p of[-1,1])for(let _=0;_<o;_++)for(let S=0;S<d;S++)(p>0?Ki:Ji)(u,p*s/2,S*x,(S+1)*x,h[_],h[_+1],hs(l,t(),c),a);dl(f,s,r,m,t,!0)}function og(i,e,t){let n=i.color;n.setM(e);let s=t.pick([pe("#f2f2ee"),pe("#c9cdd2"),pe("#2b2f38"),pe("#b33a32"),pe("#9fc6c0"),pe("#e7d9b4"),pe("#4a6a9a")]);n.box(-1.7,.3,-.75,1.7,1,.75,s),n.box(-1.1,1,-.68,1,1.55,.68,Nn(s,.95)),n.box(-1.05,1.06,-.69,.95,1.48,.69,pe("#2a3346"));for(let[r,o]of[[-1.15,-.62],[1.15,-.62],[-1.15,.62],[1.15,.62]])n.box(r-.3,0,o-.11,r+.3,.6,o+.11,_e.black)}function Ed(i,e,t,n){let s=i.color,r=pe("#8d9096"),o=pe("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let a=-n-.62,c=-n+.62;s.box(-.14,5.08,a,.14,5.56,c,o);let u=t*.141;i.atlas.setM(e),(t>0?Ki:Ji)(i.atlas,u,a,c,5.08,5.56,"signal");let f=t>0?c:a,g=t>0?-1:1;for(let v=0;v<3;v++){let b=f+g*(.2+v*.4);s.box(t>0?.14:-.36,5.47,b-.15,t>0?.36:-.14,5.5,b+.15,o)}let m=f+g*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,m-.11,t>0?.16:-.145,5.43,m+.11,xn)}function ag(i,e,t,n){let s=i.color,r=pe("#3d6ea8"),o=pe("#e8eef2"),a=pe("#c7c5bf"),c=5.35;s.setM(e),s.box(-1.1,c-.65,-t,1.1,c,t,r);for(let u of[-1.1,1])s.box(u,c,-t,u+.1,c+1.1,t,o),s.box(u-.02,c+1.1,-t,u+.12,c+1.18,t,r);i.atlas.setM(e),Ji(i.atlas,-1.105,-2.2,2.2,c-.62,c-.06,n),Ki(i.atlas,1.105,-2.2,2.2,c-.62,c-.06,n),s.setM(e);for(let u of[-1,1]){let f=u*(t-1.65),g=u*(t-.15),m=Math.min(f,g),v=Math.max(f,g);s.box(-.45,.15,m+.3,.45,c-.65,v-.3,r);let b=20,E=(c-.15)/b;for(let l=0;l<b;l++)s.box(1.1+l*.3,.15,m,1.1+(l+1)*.3,c-(l+1)*E+.04,v,a);s.box(1.1,c-.1,m-.05,1.1+b*.3,c-.02,m+.05,r)}}function lg(i,e,t,n,s,r,o){let a=i.color,c=1.22,u=3.55,f=6.7,g=pe("#c8c5bd"),m=pe("#ebe8de"),v=pe("#7a5a42"),b=pe("#5e4433"),E=pe("#4d5468");a.setM(e),a.box(t,-1.4,u,n,c,f,g,null,{noBottom:!0}),a.box(t,c,u,n,c+.025,u+.32,m),a.box(t,c,u+.6,n,c+.04,u+.9,_e.yellow);let l=Math.sign(s-(t+n)/2),h=l>0?n:t,d=h+l*6.2,x=u+.9,p=f-.2,_=(D,H,z)=>[D,H,z];l>0?a.quad(_(d,.1,p),_(d,.1,x),_(h,c,x),_(h,c,p),g):a.quad(_(d,.1,x),_(d,.1,p),_(h,c,p),_(h,c,x),g);for(let D of[x,p]){let H=pe("#9aa0a6");a.rod([d,.1+.9,D],[h,c+.9,D],.03,.03,5,H);for(let z=0;z<=3;z++){let $=d+(h-d)*z/3,ae=.1+(c-.1)*z/3;a.box($-.03,ae,D-.03,$+.03,ae+.9,D+.03,H)}}i.atlas.setM(e);for(let D=t;D<n-.01;D+=3){let H=Math.min(n,D+3);i.atlas.quad([D,-.6,f+.004],[H,-.6,f+.004],[H,c,f+.004],[D,c,f+.004],pe("#d8d4ca"),$i("concrete"))}a.setM(e);for(let D=t+.4;D<n;D+=2)a.box(D-.05,c,f-.12,D+.05,c+1,f-.02,pe("#8f949a"));for(let D of[.45,.95])a.box(t,c+D,f-.1,n,c+D+.06,f-.04,pe("#8f949a"));let S=n-t,T=D=>l>0?n-S*D:t+S*D,y=T(.47),M=y-2.3,w=y+2.3,A=u+1.35,C=f-.25;a.box(M,c,C-.12,w,c+2.45,C,v);for(let D of[M,w-.12])a.box(D,c,A+.6,D+.12,c+2.45,C,b);for(let D of[M,w-.12])a.box(D,c,A,D+.12,c+2.45,A+.12,b);a.quad([w+.4,c+2.5,A-.45],[M-.4,c+2.5,A-.45],[M-.4,c+2.85,C+.35],[w+.4,c+2.85,C+.35],E),a.quad([M-.4,c+2.42,A-.45],[w+.4,c+2.42,A-.45],[w+.4,c+2.77,C+.35],[M-.4,c+2.77,C+.35],pe("#3a3f50")),a.box(M+.3,c+.42,C-.55,w-.3,c+.48,C-.15,pe("#8a6a4a"));for(let D of[M+.4,w-.5])a.box(D,c,C-.5,D+.08,c+.42,C-.2,_e.metal);i.atlas.setM(e),i.atlas.quad([y-1.1,c+1.55,C+.005],[y+1.1,c+1.55,C+.005],[y+1.1,c+2.03,C+.005],[y-1.1,c+2.03,C+.005],xn,$i("ekiplate"+r));let I=T(.2),R=u+1.6,L=1.25,U=c+1.25,O=U+.95;a.setM(e);for(let D of[I-L+.12,I+L-.12])a.cyl(D,c,R,.05,.05,O-c+.05,8,pe("#6b7078"));a.box(I-L,U-.03,R-.03,I+L,O+.03,R+.03,pe("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-L,U,R+.035],[I+L,U,R+.035],[I+L,O,R+.035],[I-L,O,R+.035],xn,$i("ekimei"+r)),i.atlas.quad([I+L,U,R-.035],[I-L,U,R-.035],[I-L,O,R-.035],[I+L,O,R-.035],xn,$i("ekimei"+r)),a.setM(e);let V=y-l*4.2;a.box(V-.9,c+.42,f-1.25,V+.9,c+.47,f-.85,pe("#3b6ea8")),a.box(V-.9,c+.47,f-.88,V+.9,c+.9,f-.83,pe("#3b6ea8"));for(let D of[V-.75,V+.7])a.box(D,c,f-1.2,D+.06,c+.42,f-.9,_e.metal);for(let D=t+3;D<n-1;D+=9)ul(i,eh(e,D,c,f-.45))}var bM=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(pe),MM=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(pe);function cg(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,_e.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let a=.28+r()*.34,c=.36+r()*.42,u=r.pick(bM),f=s+(r()-.5)*.06;i.quad([o+a,n-c,f],[o,n-c,f],[o,n-.02,f],[o+a,n-.02,f],u),i.quad([o,n-c,f+.01],[o+a,n-c,f+.01],[o+a,n-.02,f+.01],[o,n-.02,f+.01],Nn(u,.85)),r()<.4&&i.box(o+a*.45,n-.02,f-.02,o+a*.55,n+.06,f+.02,pe("#d8d8d0")),o+=a+.06+r()*.22}}function SM(i,e,t,n,s,r){let o=r.pick(MM),a=.11;i.box(e,n-.02,s-a,t,n+.09,s+.22,o),i.box(e,n-.72,s-a,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-a-.004,t-.08,n-.42,s-a+.01,Nn(o,.86))}function ug(i,e){let t=i.color,n=pe("#a19f97"),s=pe("#6b4a35"),r=pe("#4f4a44"),o=pe("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,pe("#8d8b84"));for(let a of[-.52,.48])for(let c of[-.36,.32])t.box(a,.32,c,a+.05,1.5,c+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,Nn(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let a of[-.32,.3])t.cyl(a,.32,-.18,.05,.06,.07,8,pe("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,pe("#5b8d3d"))}function hg(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?_e.black:_e.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,_e.black),t.box(-.5,2.55,-.06,.5,2.95,.02,_e.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,_e.black);t.box(-.78,-.9,-.34,.3,0,.34,_e.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,pe("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,_e.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new Ke().multiplyMatrices(e,new Ke().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?_e.black:_e.yellow)}t.setM(e),i.atlas.setM(e),cn(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function fg(i,e){let t=i.color;t.setM(e);let n=_e.stone,s=Nn(_e.stone,1.06),r=Nn(_e.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),Do(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),Do(t,1.48,1.54,.25,.35,r,!1,!0),Do(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,xn),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,xn)}function Td(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,_e.vermilion),s.cyl(0,0,r,.38,.38,.5,12,_e.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,_e.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,_e.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,_e.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,_e.vermilion)}function dg(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,pe("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,pe("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,pe("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,pe("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,_e.metal),n.box(1.1,0,.3,1.2,.42,.55,_e.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,_e.metal),i.atlas.setM(e),Ji(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),Ki(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}var EM=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],TM=pe("#a7a7aa"),wM=[1,.94,.87],zm={};function pg(i,e){let t=i*16+e,n=zm[t];if(!n){let s=new ln,r=Nn(TM,wM[i]),o=.4,a=.25;for(let c of EM){let u=0,f=1,g=0;Math.abs(c[1])>.99&&(u=1,f=0);let m=c[1]*g-c[2]*f,v=c[2]*u-c[0]*g,b=c[0]*f-c[1]*u,E=Math.hypot(m,v,b);m/=E,v/=E,b/=E;let l=v*c[2]-b*c[1],h=b*c[0]-m*c[2],d=m*c[1]-v*c[0],x=[];for(let _=0;_<=e;_++){let S=_/e*Math.PI*2,T=Math.cos(S),y=Math.sin(S);x.push([m*T+l*y,v*T+h*y,b*T+d*y])}let p=(o-a)/1;for(let _=0;_<e;_++){let S=x[_],T=x[_+1],y=[S[0]*o,S[1]*o,S[2]*o],M=[T[0]*o,T[1]*o,T[2]*o],w=[c[0]+T[0]*a,c[1]+T[1]*a,c[2]+T[2]*a],A=[c[0]+S[0]*a,c[1]+S[1]*a,c[2]+S[2]*a],C=[S[0]+c[0]*p,S[1]+c[1]*p,S[2]+c[2]*p],I=[T[0]+c[0]*p,T[1]+c[1]*p,T[2]+c[2]*p];s.vtx(y[0],y[1],y[2],C[0],C[1],C[2],0,0,r),s.vtx(w[0],w[1],w[2],I[0],I[1],I[2],0,0,r),s.vtx(M[0],M[1],M[2],I[0],I[1],I[2],0,0,r),s.vtx(y[0],y[1],y[2],C[0],C[1],C[2],0,0,r),s.vtx(A[0],A[1],A[2],C[0],C[1],C[2],0,0,r),s.vtx(w[0],w[1],w[2],I[0],I[1],I[2],0,0,r),s.vtx(c[0],c[1],c[2],c[0],c[1],c[2],0,0,r),s.vtx(w[0],w[1],w[2],c[0],c[1],c[2],0,0,r),s.vtx(A[0],A[1],A[2],c[0],c[1],c[2],0,0,r)}}n=zm[t]=s.toArrays()}return n}var AM=new mn,hd=new $n,RM=new k,CM=new k;function wd(i,e,t,n,s,r,o=0,a=.6){s()<a?hd.set((s()-.5)*.4,s()*6.283,(s()-.5)*.4):hd.set(s()*6.283,s()*6.283,s()*6.283);let c=new Ke().compose(RM.set(e,t,n),AM.setFromEuler(hd),CM.set(r,r,r));c.groundY=o,i.color.stamp(pg(Math.floor(s()*3),cl>.7?8:6),c)}function mg(){for(let i=0;i<3;i++)for(let e of[6,8])pg(i,e)}function gg(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,pe("#8f8a80"),pe("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,_e.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,_e.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,_e.black),t.cyl(0,18.6,0,1,.25,1.2,12,_e.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,xn)}function vg(i,e,t){let n=i.color;n.setM(e);let s=t.pick([pe("#f4f4f0"),pe("#3b6ea5"),pe("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),No(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),No(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,_e.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,_e.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,pe("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,_e.metal)}function xg(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,_e.stone),n.box(-.55,.5,.9,.55,1.5,1.8,pe("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],pe("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],pe("#4d5468")),Td(i,eh(e,0,0,-.3,Math.PI/2),.75,2.2)}var Fo=[[0,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#9fb0ff",.45,"#42508a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#2e5ec2","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#3a3a9a","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#2f3488","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1f2466","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#8ea4ff",.55,"#2c3e78","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#8ea4ff",.55,"#2a3c74","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new ve(e):e)),ie={zenith:new ve,horizon:new ve,sunCol:new ve,sunI:1,hemiSky:new ve,hemiGround:new ve,hemiI:1,fog:new ve,cLit:new ve,cShade:new ve,cRim:new ve,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new k,moonDir:new k,lightDir:new k,sunEl:0};function _g(i){let e=0;for(;e<Fo.length-2&&Fo[e+1][0]<=i;)e++;let t=Fo[e],n=Fo[e+1],s=el(Yt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,a)=>a.copy(t[o]).lerp(n[o],s);r(1,ie.zenith),r(2,ie.horizon),r(3,ie.sunCol),ie.sunI=Rt(t[4],n[4],s),r(5,ie.hemiSky),r(6,ie.hemiGround),ie.hemiI=Rt(t[7],n[7],s),r(8,ie.fog),r(9,ie.cLit),r(10,ie.cShade),r(11,ie.cRim),ie.night=Rt(t[12],n[12],s),ie.warm=Rt(t[13],n[13],s),ie.sunEl=bg(i,ie.sunDir,ie.moonDir,ie.lightDir)}function bg(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Yt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var IM=new k,LM=new k;function Rd(i,e){return bg((i%1+1)%1,IM,LM,e),e}var yg={zenith:[new ve("#7b8594"),new ve("#141a28")],horizon:[new ve("#b5bcc6"),new ve("#283042")],fog:[new ve("#a8b0ba"),new ve("#232b3c")],hemiSky:[new ve("#aab3bf"),new ve("#3c4866")],hemiGround:[new ve("#8b8983"),new ve("#1e2030")],cLit:[new ve("#d0d5dc"),new ve("#2c3240")],cShade:[new ve("#7c8593"),new ve("#151922")]},Ad=new ve;function Mg(i,e){if(ie.overcast=i,ie.rain=e,ie.bright=(1-ie.night)*(1-ie.warm)*(1-i),i<=.001)return;let t=ie.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])Ad.copy(yg[n][0]).lerp(yg[n][1],t),ie[n].lerp(Ad,i*(n==="cLit"||n==="cShade"?.75:.85));ie.sunI*=1-.82*i,ie.warm*=1-i,ie.cRim.multiplyScalar(1-i),ie.sunCol.lerp(Ad.setRGB(.85,.87,.9),i*.6)}function Sg(){let i=new ht({side:Vn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:ie.zenith},uHorizon:{value:ie.horizon},uSunDir:{value:ie.sunDir},uMoonDir:{value:ie.moonDir},uNoiseTex:Oe.uNoiseTex,uSunCol:{value:ie.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new ve},uOvercast:{value:0},uDeckLit:{value:new ve},uDeckDark:{value:new ve},uMilky:{value:0},uMetA:{value:new k(0,1,0)},uMetB:{value:new k(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
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
      }`}),e=new ut(new Na(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function DM(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let x=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+x*.5,(i()-.5)*.2,x])}let a=e?6:2,c=s*.82,u=.1+.09;for(let d=0;d<a;d++){let x=Math.max(1,Math.round(c/.11));for(let p=0;p<x;p++){let _=(x===1?0:p/(x-1)-.5)*c+(i()-.5)*.05+r*d;t.push([_,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,c*=e?.8:.66}let f=t.slice();for(let d of f){if(t.length>84)break;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let _=.35+i()*2.4,S=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.82,d[1]+Math.sin(_)*d[3]*.82,d[2]+.04,S])}}let g=t.slice(f.length);for(let d of f){if(d[1]<.1+.12||t.length>104)continue;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let _=.3+i()*2.5,S=d[3]*(.3+i()*.4),T=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(_)*S,d[1]+Math.sin(_)*S,d[2]+Math.sqrt(d[3]*d[3]-S*S)-T*.6,T])}}for(let d of g){if(t.length>124)break;let x=1+Math.floor(i()*2);for(let p=0;p<x;p++){let _=.2+i()*2.7,S=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(_)*d[3]*.85,d[1]+Math.sin(_)*d[3]*.85,d[2]+.02,S])}}let m=t.slice(0,128),v=1e9,b=-1e9,E=-1e9;for(let d of m)v=Math.min(v,d[0]-d[3]*1.12),b=Math.max(b,d[0]+d[3]*1.12),E=Math.max(E,d[1]+d[3]*1.12);let l=Math.min(1,.92/(b-v),(.95-.1)/(E-.1)),h=(v+b)/2;for(let d of m)d[0]=(d[0]-h)*l,d[1]=.1+(d[1]-.1)*l,d[3]*=l;return m}function Eg(i){let t={value:Array.from({length:128},()=>new mt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new ht({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Oe.uNoiseTex},vertexShader:n,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1,blending:ii}),r=new Wt(1024,1024,{generateMipmaps:!0,minFilter:Pn,magFilter:Bt,depthBuffer:!1}),o=new ht({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:Oe.uNoiseTex},vertexShader:n,fragmentShader:`
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
      }`,depthTest:!1,depthWrite:!1,blending:ii}),a=new ut(new nn(1,1),s),c=new dr,u=new Ms;c.add(a);let f=new Wt(1024*2,1024*2,{generateMipmaps:!0,minFilter:Pn,magFilter:Bt}),g=i.getRenderTarget(),m=i.autoClear,v=zt(99);i.setRenderTarget(f),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let b=[];for(let E=0;E<4;E++){let l=E%2===0,h=DM(v,l);h.forEach((d,x)=>t.value[x].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=h.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=E*13.7,a.material=s,i.setRenderTarget(r),i.render(c,u),a.material=o,f.viewport.set(E%2*1024,Math.floor(E/2)*1024,1024,1024),i.setRenderTarget(f),i.render(c,u),b.push({cell:[E%2,Math.floor(E/2)],tall:l})}return f.viewport.set(0,0,1024*2,1024*2),i.autoClear=m,i.setRenderTarget(g),s.dispose(),o.dispose(),r.dispose(),a.geometry.dispose(),{tex:f.texture,kinds:b,rt:f}}function Tg(i){let e=zt(5),t=22,n=[],s=new nn(1,1);s.translate(0,.5,0);let r=new Cn(new Float32Array(t*4),4),o=new Cn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let a=new ht({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new ve},uShade:{value:ie.cShade},uRim:{value:ie.cRim},uHaze:{value:ie.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),c=new Wi(s,a,t);c.frustumCulled=!1,c.renderOrder=-5;for(let b=0;b<t;b++){let E=b<12,l=i.kinds[(b*3+(E?0:1))%i.kinds.length],h=E?l.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:b/t*Math.PI*2+e.range(-.15,.15),d:E?e.range(2600,3400):e.range(1300,2200),base:E?e.range(-60,60):e.range(260,700),size:h,cell:l.cell,haze:E?.45:.18})}let u=new Ke,f=new mn,g=new k,m=new k,v=new k(0,1,0);return{group:c,update(b,E){let l=Math.atan2(ie.lightDir.x,ie.lightDir.z);for(let d of n)d.phi+=E*1.2/d.d;n.slice().sort((d,x)=>x.d-d.d).forEach((d,x)=>{g.set(b.x+Math.sin(d.phi)*d.d,b.y+d.base,b.z+Math.cos(d.phi)*d.d),f.setFromAxisAngle(v,d.phi+Math.PI),m.set(d.size,d.size,1),u.compose(g,f,m),c.setMatrixAt(x,u);let p=l-d.phi;p=Math.atan2(Math.sin(p),Math.cos(p));let _=Math.max(0,Math.min(1,(p+.35)/.7)),S=1-_*_*(3-2*_);r.setXYZW(x,d.cell[0],d.cell[1],S,d.haze),o.setX(x,.35+.9*Math.pow(Math.max(Math.cos(p),0),3)*(.4+ie.warm))}),c.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,a.uniforms.uOpacity.value=(1-ie.night*.35)*(1-ie.overcast*.55)*(1-.85*ie.rain),a.uniforms.uLit.value.copy(ie.cLit).multiplyScalar(1+.35*ie.bright)}}}function wg(){let i=new on;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],a=[];for(let g=0;g<=360;g++){let m=g/360*Math.PI*2,v=Math.sin(m)*t.R,b=Math.cos(m)*t.R,E=zu(g/360*t.k*4,40+n*9),l=Math.pow(Math.max(0,E-.18)/.82,1.6),h=t.h*(.12+l);if(r.push(v,-60,b,v,-60+h,b),o.push(0,g/360,1,g/360),g<360){let d=g*2;a.push(d,d+1,d+2,d+1,d+3,d+2)}}let c=new vt;c.setAttribute("position",new Ye(r,3)),c.setAttribute("hf",new Ye(o,2)),c.setIndex(a);let u=new ht({side:yn,fog:!1,uniforms:{uCol:{value:new ve(t.col)},uHaze:{value:ie.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Oe.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Si}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),f=new ut(c,u);f.frustumCulled=!1,f.renderOrder=999,i.add(f)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-ie.night))*(1-.35*ie.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var ml="./assets/",Ag=`
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
}`,As=[.299,.587,.114],Bo=[.03,.014,-.018],NM=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),di=[0,0,0],Cd=(i,e,t,n,s,r)=>{let o=i-e*(1-n)-t*n*s;return Math.min(.985,Math.max(0,NM(Math.min(1,Math.max(0,n+(o-n)/r)))))};function Rg(i,e,t,n,s){let r=i.toneMappingExposure.value,o=i.uSat.value,a=i.uLo.value,c=i.uDay.value,u=e/255,f=t/255,g=n/255,m=a.x*As[0]+a.y*As[1]+a.z*As[2],v=(Bo[0]*As[0]+Bo[1]*As[1]+Bo[2]*As[2])*c,b=(u*As[0]+f*As[1]+g*As[2]-m)/(1-m+v);di[0]=Cd(u,a.x,Bo[0],b,c,o),di[1]=Cd(f,a.y,Bo[1],b,c,o),di[2]=Cd(g,a.z,Bo[2],b,c,o);let E=.76,l=.24,h=Math.max(di[0],di[1],di[2]);if(h>=E){let p=l*l/(1-h)-l+E,_=1-1/(.15*(p-h)+1),S=p/h;for(let T=0;T<3;T++)di[T]=(di[T]-_*h)/Math.max(1-_,.001)*S}let d=Math.min(di[0],di[1],di[2]),x=d<.04?Math.sqrt(Math.max(d,0)/6.25)-d:.04;return s.setRGB((di[0]+x)/r,(di[1]+x)/r,(di[2]+x)/r)}var Cg={value:new Pe(1280,720)};function Pg(i){i.getDrawingBufferSize(Cg.value)}function Ig(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:Cg}}async function Ld(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),a;try{a=await new Ba().loadAsync(o)}catch(c){throw URL.revokeObjectURL(o),c}return a.onUpdate=()=>{URL.revokeObjectURL(o),a.onUpdate=null},a.colorSpace=si,a.generateMipmaps=!0,a.minFilter=Pn,a.magFilter=Bt,{tex:a,file:n}}async function gl(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function Lg(i,e=15e3){let t=ml+"clouds/";return gl((async()=>{let n=await fetch(t+"clouds.json");if(!n.ok)throw new Error("clouds.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(a=>a.u1>a.u0&&a.v1>a.v0&&a.w>0&&a.h>0&&a.lum&&a.lum[1]>a.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await Ld(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function Dg(i,e=15e3){let t=ml+"fields/";return gl((async()=>{let n=await fetch(t+"fields.json");if(!n.ok)throw new Error("fields.json "+n.status);let s=await n.json();if(!(s.tile&&s.tile[0]>0&&s.tile[1]>0&&Math.abs(Mi/s.tile[1]-Math.round(Mi/s.tile[1]))<1e-6))throw new Error("bad tile size");if(!(s.mean&&s.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await Ld(t,s,i);return r.colorSpace=Gt,r.wrapS=r.wrapT=bs,{tex:r,tile:s.tile,mean:s.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var th=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],UM=140*Math.PI/180,nh=Math.PI/180,tr=i=>Math.atan2(Math.sin(i),Math.cos(i));function FM(i,e){let t=zt(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/th[0][1];for(let[c,u,f,g,m,v,b]of th)for(let E=0;E<u;E++){let l;c==="tower"?l=s+E*r+t.range(-.22,.22)*r:c==="mid"?l=s+(E+.5)*r*(th[0][1]/u)+t.range(-.2,.2)*r:c==="high"?l=s+(E*(th[0][1]/u)+.5)*r+t.range(-.3,.3)*r:l=s+(E+t())/u*Math.PI*2,n.push({role:c,kinds:v,phi:l,d:t.range(f[0],f[1]),e0:t.range(g[0],g[1])*nh,ah:t.range(m[0],m[1])*nh,haze:b,k:-1,flip:!1})}let o=i.map(()=>[]),a=n.map((c,u)=>u);for(let c=a.length-1;c>0;c--){let u=Math.floor(t()*(c+1)),f=a[c];a[c]=a[u],a[u]=f}for(let c of a){let u=n[c],f=-1,g=1e9;i.forEach((m,v)=>{let b=u.kinds.indexOf(m.kind);if(b<0)return;let l=(o[v].some(h=>Math.abs(tr(h-u.phi))<UM)?1e3:0)+o[v].length*10+b*4+t();l<g&&(g=l,f=v)}),f<0&&(f=Math.floor(t()*i.length)),u.k=f,o[f].push(u.phi)}for(let c of n){let u=i[c.k],f=c.d*Math.tan(c.e0);c.y0=f,c.h=c.d*Math.tan(c.e0+c.ah)-f,c.w=c.h*u.w/u.h,c.half=Math.atan2(c.w/2,c.d)}return n.sort((c,u)=>u.d-c.d)}function Ng(i,e,t=5){let n=i.list,s=FM(n,t),r=s.length,o=new nn(1,1);o.translate(0,.5,0);let a=new Cn(new Float32Array(r*4),4),c=new Cn(new Float32Array(r*4),4),u=new Cn(new Float32Array(r),1);o.setAttribute("aRect",a),o.setAttribute("aInfo",c),o.setAttribute("aRim",u),s.forEach((_,S)=>{let T=n[_.k];a.setXYZW(S,T.u0,T.v0,T.u1-T.u0,T.v1-T.v0),c.setXYZW(S,0,T.lum[0],1/Math.max(.05,T.lum[1]-T.lum[0]),_.haze)});let f=new ht({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new ve},uShade:{value:ie.cShade},uRimCol:{value:ie.cRim},uHaze:{value:ie.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...Ig(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:Ag+`
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
      }`}),g=new Wi(o,f,r);g.frustumCulled=!1,g.renderOrder=-5;let m=new Ke,v=new mn,b=new k,E=new k,l=new k(0,1,0),h=new k,d=!0;function x(_,S){let T=s.filter(R=>R.role==="tower").sort((R,L)=>tr(R.phi-_)-tr(L.phi-_)),y=null,M=1e9;for(let R=0;R<T.length;R++){let L=T[R],U=T[(R+1)%T.length],O=S==="center"?L.phi:L.phi+tr(U.phi-L.phi)/2,V=Math.abs(tr(O-_));V<M&&(M=V,y=S==="center"?[L,L,O]:[L,U,O])}if(!y)return;let[w,A,C]=y,I=tr(_-C);for(let R of s)R.phi+=I;for(let R of new Set([w,A])){let L=Math.max(R.ah,31*nh),U=R.d*Math.tan(R.e0+L)-R.y0;R.w*=U/R.h,R.h=U,R.ah=L,R.half=Math.atan2(R.w/2,R.d)}}let p={mesh:g,count:r,opening:"flank",layout:s,update(_,S){let T=_.position,y=Math.atan2(ie.lightDir.x,ie.lightDir.z);_.getWorldDirection(h);let M=Math.atan2(h.x,h.z),w=Math.atan(Math.tan(_.fov*nh/2)*_.aspect);d&&x(M,p.opening);for(let C=0;C<r;C++){let I=s[C];I.phi+=S*1.2/I.d,b.set(T.x+Math.sin(I.phi)*I.d,T.y+I.y0,T.z+Math.cos(I.phi)*I.d),v.setFromAxisAngle(l,I.phi+Math.PI),E.set(I.w,I.h,1),m.compose(b,v,E),g.setMatrixAt(C,m);let R=tr(y-I.phi),L=R>0!==n[I.k].litLeft;L!==I.flip&&Math.abs(Math.sin(R))>.2&&(d||Math.abs(tr(I.phi-M))>w+I.half+.05)&&(I.flip=L),c.setX(C,I.flip?1:0);let U=Math.max(Math.cos(R),0);u.setX(C,.35+.9*U*U*U*(.4+ie.warm))}d=!1,g.instanceMatrix.needsUpdate=!0,c.needsUpdate=!0,u.needsUpdate=!0;let A=f.uniforms;{let C=Math.min(Math.max((ie.bright-.55)/.4,0),1);A.uPaint.value=C*C*(3-2*C)}A.uLit.value.copy(ie.cLit).multiplyScalar(1+.35*ie.bright),A.uOpacity.value=(1-ie.night*.35)*(1-ie.overcast*.55)*(1-.85*ie.rain)}};return p}async function Ug(i,e=15e3){let t=ml+"band/";return gl((async()=>{let n=await fetch(t+"band.json");if(!n.ok)throw new Error("band.json "+n.status);let s=await n.json(),{tex:r,file:o}=await Ld(t,s,i),a={};for(let[c,u]of Object.entries(s.zones&&s.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(a[c]=new mt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(a).length)throw new Error("no zones listed");return r.wrapS=bs,{tex:r,zones:a,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var pl=2500,BM=-8,Cr=new k,er=new ve,Pd=new ve("#fff5dd").multiplyScalar(3.35),Id=new ve("#8fb1ec").multiplyScalar(1.35*2);function Fg(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(p=>p.w)),r=192,o=360/i.period,a=new Float32Array((r+1)*6),c=new Float32Array((r+1)*4),u=[],f=Math.tan(BM*Math.PI/180),g=s+.004;for(let p=0;p<=r;p++){let _=p/r*Math.PI*2,S=Math.sin(_)*pl,T=Math.cos(_)*pl;if(a.set([S,f*pl,T,S,g*pl,T],p*6),c.set([-(p/r)*o,f,-(p/r)*o,g],p*4),p<r){let y=p*2;u.push(y,y+2,y+1,y+1,y+2,y+3)}}let m=new vt;m.setAttribute("position",new St(a,3)),m.setAttribute("uv",new St(c,2)),m.setIndex(u);let v=Math.PI/180,b=(e.composer.readBuffer.samples||0)>0,E=new ht({fog:!1,side:yn,alphaToCoverage:b,defines:b?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new mt},uRowB:{value:new mt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new ve(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*v)},uGnd:{value:new k(2.8,.0014,700)},uSpan:{value:new Pe(f,g)},...Ig(e)},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${pl.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:Ag+`
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
      }`}),l=new ut(m,E);l.frustumCulled=!1,l.renderOrder=999;let h=E.uniforms,d=new k,x=!0;return{mesh:l,zones:n,hero:.125,update(p,_,S=2.8,T=.0014,y=700){let M=n[_.a],w=n[_.b],A=_.t,C=0;if(M&&w?(h.uRowA.value.copy(M),h.uRowB.value.copy(w),h.uMix.value=M===w?0:A,C=1):(M||w)&&(h.uRowA.value.copy(M||w),h.uMix.value=0,C=M?1-A:A),h.uAlpha.value=C,l.visible=C>.002,!l.visible)return 0;l.position.copy(p.position),h.uGnd.value.set(S,T,y),h.uSpan.value.set(Math.max(f,-Math.tan(Math.atan(S/140)+.3*v)),Math.max(M?M.w:0,w?w.w:0)+.003),x&&(p.getWorldDirection(d),h.uRot.value=this.hero+Math.atan2(d.x,d.z)/(Math.PI*2)*o,x=!1),er.copy(ie.sunCol).multiplyScalar(ie.sunI),Cr.set(er.r,er.g,er.b),er.copy(ie.hemiSky).multiplyScalar(ie.hemiI*2),Cr.x+=er.r,Cr.y+=er.g,Cr.z+=er.b;let I=Math.min(Math.max((ie.bright-.55)/.4,0),1),R=I*I*(3-2*I);h.uLightC.value.setRGB(Cr.x/(Pd.r+Id.r),Cr.y/(Pd.g+Id.g),Cr.z/(Pd.b+Id.b)),h.uPaint.value=R;let L=Math.max(4*h.uMix.value*(1-h.uMix.value),Math.min(1,2*(1-C))),U=b?0:.45*L*L*L;return h.uHaze.value=1-(1-(1-(1-.12*ie.warm-.25*ie.night)*(1-.55*ie.overcast)*(1-.6*ie.rain))*(1-R))*(1-U),C}}}async function OM(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((m,v)=>e[v]!==m))throw new Error("not a PNG");let s=8,r=0,o=0,a=[];for(;s+12<=e.length;){let m=t.getUint32(s),v=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+m>e.length)throw new Error("PNG truncated");if(v==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(v==="IDAT")a.push(e.subarray(s+8,s+8+m));else if(v==="IEND")break;s+=12+m}if(!r||!o||!a.length)throw new Error("PNG has no image");let c=new Uint8Array(await new Response(new Blob(a).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,f=new Uint8Array(u*o),g=new Uint8Array(u);if(c.length<(u+1)*o)throw new Error("PNG data short");for(let m=0;m<o;m++){let v=c[m*(u+1)],b=m*(u+1)+1,E=(o-1-m)*u,l=m?f.subarray(E+u,E+2*u):g,h=f.subarray(E,E+u),d=c.subarray(b,b+u);if(v===0)h.set(d);else if(v===1){for(let x=0;x<4;x++)h[x]=d[x];for(let x=4;x<u;x++)h[x]=d[x]+h[x-4]}else if(v===2)for(let x=0;x<u;x++)h[x]=d[x]+l[x];else if(v===3){for(let x=0;x<4;x++)h[x]=d[x]+(l[x]>>1);for(let x=4;x<u;x++)h[x]=d[x]+(h[x-4]+l[x]>>1)}else if(v===4){for(let x=0;x<4;x++)h[x]=d[x]+l[x];for(let x=4;x<u;x++){let p=h[x-4],_=l[x],S=l[x-4],T=Math.abs(_-S),y=Math.abs(p-S),M=Math.abs(p+_-S-S);h[x]=d[x]+(T<=y&&T<=M?p:y<=M?_:S)}}else throw new Error("PNG filter "+v)}return{w:r,h:o,data:f}}function zM(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],a=Math.floor(r*255)+1,c=new Uint32Array(256),u=[],f=(b,E,l,h,d,x)=>{c.fill(0);for(let p=0;p<x;p++){let _=((h+p)*E+l)*4+3;for(let S=0;S<d;S++)c[b[_+S*4]]++}};for(let b=0;b<s;b++)for(let E=0;E<n;E++){let l=i/n,h=e/s;f(t,i,E*l,b*h,l,h);let d=0;for(let x=a;x<256;x++)d+=c[x];u.push(d/(l*h))}let g=i,m=e,v=t;for(;g>1&&m>1;){let b=g>>1,E=m>>1,l=new Uint8Array(b*E*4),h=g*4;for(let p=0;p<E;p++){let _=p*2*h,S=p*b*4;for(let T=0;T<b;T++,_+=8)for(let y=0;y<4;y++,S++)l[S]=v[_+y]+v[_+y+4]+v[_+y+h]+v[_+y+h+4]+2>>2}let d=b/n,x=E/s;if(d>=2&&x>=2&&d===Math.floor(d)&&x===Math.floor(x))for(let p=0;p<s;p++)for(let _=0;_<n;_++){f(l,b,_*d,p*x,d,x);let S=Math.round(u[p*n+_]*d*x),T=255,y=c[255];for(;T>1&&y<S;)y+=c[--T];let M=S>0?Math.min(6,Math.max(.5,a/T)):1;if(M!==1)for(let w=0;w<x;w++){let A=((p*x+w)*b+_*d)*4+3;for(let C=0;C<d;C++)l[A+C*4]=Math.min(255,Math.round(l[A+C*4]*M))}}o.push({data:l,width:b,height:E}),v=l,g=b,m=E}return o}async function Bg(i,e=15e3){let t=ml+"trees/";return gl((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let a=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&a.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+a.byteLength+" bytes, not "+s.bytes[r]);let c=await OM(a),u=s.cols,f=s.rows;if(!(u>0&&f>0)||c.w%u||c.h%f)throw new Error("bad atlas layout");let g=(s.cells||[]).filter(b=>b.col<u&&b.row<f).map(b=>{let E=.5/c.w,l=.5/c.h;return{kind:b.kind,u0:b.col/u+E,u1:(b.col+1)/u-E,v0:1-(b.row+1)/f+l,v1:1-b.row/f-l}});if(!g.some(b=>b.kind==="leaf"))throw new Error("no leaf clusters listed");let m=zM(c.w,c.h,c.data,u,f,.5),v=new Gi(c.data,c.w,c.h,Jn);return v.mipmaps=m,v.generateMipmaps=!1,v.minFilter=Pn,v.magFilter=Bt,v.colorSpace=si,v.needsUpdate=!0,{tex:v,cells:g,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var vl={T:6.5,LAM:11,LZ:42},Dd=`
float shorePhase(float s, float d){ return uTime * ${(1/vl.T).toFixed(7)} + d * ${(1/vl.LAM).toFixed(7)} - s * ${(1/vl.LZ).toFixed(7)}; }`,kM=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,xl={uNoiseTex:Oe.uNoiseTex,uTime:{value:0},uCam:{value:new k},uSunDir:{value:ie.lightDir},uSunCol:{value:ie.sunCol},uHorizon:{value:ie.horizon},uZenith:{value:ie.zenith},uFog:{value:ie.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new ve},uPMid:{value:new ve},uPFace:{value:new ve},uPFar:{value:new ve},uPHz:{value:new ve},uFoamLit:{value:new ve(1,1,1)},uFoamShade:{value:new ve(.5,.6,.8)}},HM={trough:[0,98,182],mid:[10,132,218],face:[42,158,236],far:[66,170,246],hz:[118,188,243],foam:[246,251,254],foamShade:[160,205,240]},zg=`
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
}`;function kg(){let i=new ht({fog:!1,uniforms:xl,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${zg}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),e=new ut(new nn(14e3,14e3),i);e.rotation.x=-Math.PI/2,e.position.y=Zi,e.renderOrder=998,e.frustumCulled=!1;let t=xl;return{mesh:e,update(n,s,r,o=1,a=null){e.position.x=n.x,e.position.z=n.z,t.uTime.value=s,t.uCam.value.copy(n),t.uNight.value=ie.night,t.uBright.value=ie.bright,t.uFogD.value=r,t.uVis.value=o,t.uSpecK.value=1-ie.overcast*.85;let c=Math.min(Math.max((ie.bright-.55)/.4,0),1),u=a?c*c*(3-2*c):0;t.uPaint.value=u;let f=1+.25*ie.bright,g=1/(Math.PI*f),m=ie.sunCol,v=ie.hemiSky,b=ie.sunI*.8,E=ie.hemiI;if(t.uFoamLit.value.setRGB((m.r*b+v.r*E)*g,(m.g*b+v.g*E)*g,(m.b*b+v.b*E)*g),t.uFoamShade.value.setRGB(v.r*E*.9*g,v.g*E*.9*g,v.b*E*.9*g),u>0){let l=HM;Pr(a,l.trough,t.uPTrough.value),Pr(a,l.mid,t.uPMid.value),Pr(a,l.face,t.uPFace.value),Pr(a,l.far,t.uPFar.value),Pr(a,l.hz,t.uPHz.value),t.uFoamLit.value.lerp(Pr(a,l.foam,Og),u),t.uFoamShade.value.lerp(Pr(a,l.foamShade,Og),u)}}}}var Og=new ve,Pr=(i,e,t)=>Rg(i,e[0],e[1],e[2],t);function Hg(i=!1){return new ht({fog:!1,defines:i?{SHORE_LITE:""}:{},uniforms:xl,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${zg}${kM}${Dd}
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
      }`})}function Vg(){return new ht({fog:!1,uniforms:{uNoiseTex:Oe.uNoiseTex,uTime:{value:0},uSunDir:{value:ie.lightDir},uSunCol:{value:ie.sunCol},uHorizon:{value:ie.horizon},uZenith:{value:ie.zenith},uFog:{value:ie.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
      }`})}var ih={n:8};function Gg(){return new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:xl,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC;
      varying vec2 vUv; varying vec3 vK;
      ${Dd}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        float ph = shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13);        // each puff a moment after the wave arrives
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13);   // how hard this wave hits here
        float age = fract(ph) * ${vl.T.toFixed(2)}, dur = 1.15 + 1.1 * str, k = age / dur;
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
      }`})}function Wg(i){let e=i.length/8;if(!e)return null;let t=new Float32Array(e*12),n=new Float32Array(e*16),s=new Float32Array(e*12),r=new Uint16Array(e*6),o=[-1,1,1,-1],a=[-1,-1,1,1],c=1/0,u=1/0,f=1/0,g=-1/0,m=-1/0,v=-1/0;for(let E=0;E<e;E++){let l=E*8;for(let h=0;h<4;h++){let d=E*4+h;t[d*3]=i[l],t[d*3+1]=i[l+1],t[d*3+2]=i[l+2],n[d*4]=i[l+3],n[d*4+1]=i[l+4],n[d*4+2]=i[l+5],n[d*4+3]=i[l+6],s[d*3]=o[h],s[d*3+1]=a[h],s[d*3+2]=i[l+7]}r.set([E*4,E*4+1,E*4+2,E*4,E*4+2,E*4+3],E*6),c=Math.min(c,i[l]),u=Math.min(u,i[l+1]),f=Math.min(f,i[l+2]),g=Math.max(g,i[l]),m=Math.max(m,i[l+1]),v=Math.max(v,i[l+2])}let b=new vt;return b.setAttribute("position",new St(t,3)),b.setAttribute("aB",new St(n,4)),b.setAttribute("aC",new St(s,3)),b.setIndex(new St(r,1)),b.boundingBox=new ui(new k(c-6,u-1,f-6),new k(g+6,m+6,v+6)),b.boundingSphere=b.boundingBox.getBoundingSphere(new hi),b}var Ht=60,Nd=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],Xg=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],qg=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],yl=32,Ud=[-.2,2.2,5.5,10,17,27,38],_l=[.025,.026,.032],Yg=[.05,.05,.065],Zg=new Ke,Rs=(i,e)=>(i%e+e)%e,Cs=(i,e)=>{let t=Zs(i);return!!t&&Math.abs(i-t.s)<e},Fd=(i,e)=>Math.abs(i-Math.round(i/150)*150)<e,Qi=(i,e)=>{let t=Ii(i);return!!t&&Math.abs(i-t.s)<e},oi=(i,e)=>{let t=Pi(i);return!!t&&Math.abs(i-t.s)<e},Bd=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let a=n(r,o);this.P.push(a[0],a[1],a[2]),this.N.push(a[3],a[4],a[5]),this.SU.push(a[6],a[7]),this.ZW.push(a[8],a[9],a[10],a[11]),this.RK.push(a[12],a[13]),this.RV.push(a[14]||0),this.ZS.push(a[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let a=s+r*t+o,c=a+1,u=a+t,f=u+1;this.I.push(a,c,u,c,f,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,a=new Array(e*o);for(let u=0;u<e;u++)for(let f=0;f<o;f++)a[u*o+f]=n(u,f-s);let c=(u,f)=>a[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,f))];for(let u=0;u<e;u++)for(let f=s;f<s+t;f++){let g=c(u,f-1),m=c(u,f+1),v=c(u-1,f),b=c(u+1,f),E=a[u*o+f],l=m[0]-g[0],h=m[1]-g[1],d=m[2]-g[2],x=b[0]-v[0],p=b[1]-v[1],_=b[2]-v[2],S=h*_-d*p,T=d*x-l*_,y=l*p-h*x;T<0&&(S=-S,T=-T,y=-y);let M=Math.hypot(S,T,y)||1;E[3]=S/M,E[4]=T/M,E[5]=y/M}this.grid(e,t,(u,f)=>a[u*o+f+s])}build(){let e=new vt;return e.setAttribute("position",new Ye(this.P,3)),e.setAttribute("normal",new Ye(this.N,3)),e.setAttribute("su",new Ye(this.SU,2)),e.setAttribute("zw",new Ye(this.ZW,4)),e.setAttribute("rk",new Ye(this.RK,2)),e.setAttribute("rv",new Ye(this.RV,1)),e.setAttribute("zs",new Ye(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},sh=class{constructor(e,t,n,s){this.path=t,this.M=n,this.riverMat=s,this.heapCache=new Map,this.group=new on,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Ht),s=Math.floor((e+this.ahead)/Ht);for(let[o,a]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(a),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let a=o.pending.shift();a&&o.group.add(a),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let a=-1;for(let c=Math.max(0,n);c<=s;c++)if(!this.chunks.has(c)){a=c;break}if(a<0)return 0;a*Ht-e<320&&(t=Math.max(t,12)),this.job={c:a,it:this.gen(a)}}let o=this.job.it.next();if(o.done){let a=o.value;a.pending=a.group.children.slice(),a.group.clear(),this.chunks.set(this.job.c,a),this.group.add(a.group),this.reveal.push(a),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let a=o*Ht-e,c=r.group.children;for(let u=0;u<c.length;u++){let f=c[u],g=f.userData.detail;g&&(f.visible=g==="leaf"?a<s:a<t||n&&g==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Ht,s=n+Ht,r=t.at(n),o=r.x,a=r.z,c=zt(Math.floor(Dn(e,777)*4294967295)),u={atlas:new ln({uv:!0,ao:!0,lit:!0}),color:new ln({ao:!0}),foliage:new ln,leaf:new ln({uv:!0}),lamp:new ln({color:!1}),sig:new ln({color:!1}),sodium:new ln({color:!1}),decal:new ln({uv:!0}),pool:new ln({uv:!0,color:!1}),gleaf:new ln({uv:!0,off:!0}),gblossom:new ln({uv:!0,off:!0})},f=new Bd,g={rows:[],puffs:[]},m=[];u.lamps=[];let v={},b={},E=(w,A)=>{t.at(w,b);let C=Bn(w,"rw");return b.y+$s(w,A,b.y,C)},l=w=>{let A=Ut(w);return[A.city,A.sakura,A.coast,A.country,A.snow]},h=(w,A,C)=>(t.at(w,v),[v.x+v.rx*A-o,C,v.z+v.rz*A-a]),d=(w,A,C,I=0,R=!0)=>{t.at(w,v);let L=v.h-Math.PI/2+(R&&A<0?Math.PI:0)+I,U=new Ke().makeRotationY(L);return U.setPosition(v.x+v.rx*A-o,C,v.z+v.rz*A-a),U.groundY=C,U},x=(w,A,C=0,I=0,R=!0)=>{let L=E(w,A),U=d(w,A,L+C,I,R);return U.groundY=L,U},p=w=>t.at(w,b).y,_=w=>Bn(w,"rw"),S=w=>{let A=Ut(w);return A.city+A.sakura>.5?A.city>=A.sakura?3:2.6:0};{let w=Pi(n+Ht/2),A=!!w&&w.s>n-40&&w.s<s+40,C=A?61:21,I=_(n+Ht/2),R=(()=>{let $=[0,...Xg].map(ae=>ae);return qg.forEach(ae=>$.push(ae-I)),$})(),L=[...R.slice().reverse().map(z=>-z),...R],U=L.length,O=Array.from({length:C},(z,$)=>n+$/(C-1)*Ht);{let z=Ii(n+Ht/2);if(z)for(let $ of[z.s-vn,z.s+vn])$>n+.1&&$<s-.1&&O.push($-.03,$+.03)}O.sort((z,$)=>z-$);let V=U/2,D=O.map(z=>(t.at(z,v),{s:z,f:{...v},rw:_(z),w:l(z),rb:A?om(z):0})),H=Math.round(V/2);for(let[z,$,ae,He]of[[0,H,0,1],[H-1,V,1,0],[V,V+H+1,0,1],[V+H,U,1,0]])f.gridN(D.length,$-z,(we,De)=>{let K=D[we],X=K.f,ge=z+De,Ie=L[ge],Ee=Ie===0&&K.w[2]>0?.15:0,Me=Ie<0||Ie===0&&ge<V?Ie-K.rw+Ee:Ie+K.rw-Ee,Ze=X.y+$s(K.s,Me,X.y,K.rw),et=Math.abs(Me)>K.rw+.98?Math.min(1,Hu/.5):0;return[X.x+X.rx*Me-o,Ze,X.z+X.rz*Me-a,0,1,0,Rs(K.s,Mi),Me,K.w[0],K.w[1],K.w[2],K.w[3],K.rw,0,K.rb>0?K.rb:-et,K.w[4]]},ae,He),yield}yield,f.grid(31,2,(A,C)=>{let I=n+A/30*Ht,R=_(I),L=C?R:-R;t.at(I,v);let U=v.y,O=(p(I+1)-p(I-1))/2,V=-O*v.fx,D=1,H=-O*v.fz,z=Math.hypot(V,D,H),$=l(I);return[v.x+v.rx*L-o,U,v.z+v.rz*L-a,V/z,D/z,H/z,Rs(I,Mi),L,$[0],$[1],$[2],$[3],R,1,0,$[4]]});{let w=[];for(let I=0;I<=30;I++){let R=n+I/30*Ht;w.push({s:R,sw:S(R)})}let A=[],C=null;for(let I of w)I.sw>0?(C||(C=[],A.push(C)),C.push(I)):C=null;for(let I of A)if(!(I.length<2))for(let R of[-1,1])f.grid(I.length,2,(L,U)=>{let{s:O,sw:V}=I[L],D=_(O),H=R*(U===(R>0?0:1)?D:D+V);t.at(O,v);let z=l(O);return[v.x+v.rx*H-o,v.y+.15,v.z+v.rz*H-a,0,1,0,Rs(O,Mi),H,z[0],z[1],z[2],z[3],D,2,0,z[4]]}),f.grid(I.length,2,(L,U)=>{let{s:O}=I[L],V=_(O),D=R*V,H=R>0?U:1-U;t.at(O,v);let z=l(O);return[v.x+v.rx*D-o,v.y+(H?.15:0),v.z+v.rz*D-a,-R*v.rx,0,-R*v.rz,Rs(O,Mi),D,z[0],z[1],z[2],z[3],V,3,0,z[4]]})}yield,yield*this.placePoles(e,n,s,c,u,d,E,h,p,_);{let w=Math.ceil((n-Er)/Sr),A=Co(w);A<s&&sl(A)&&(yield*this.placeCrossing(u,f,A,d,p,_,E,S,o,a));let C=Math.ceil((n-Po)/Tr),I=td(C);I<s&&nd(I)&&(yield*this.placeRiver(u,f,I,d,p,_,E,S,o,a,c,m));let R=Ii(n+Ht/2);R&&R.s+fn>n&&R.s-fn<s&&(yield*this.placeTunnel(u,f,R,n,s,d,x,E,_,o,a,c))}yield;for(let w=n;w<s;w+=4){let A=an(w);(A==="coast"&&Ut(w).coast>.45||A==="mountain"&&Ut(w).mountain>.45)&&!Qi(w+2,fn+4)&&this.guardrail(u,w,Math.min(w+4,s),h,p,_)}yield*this.placeCity(u,c,n,s,d,x,p,_,S,E,f,o,a),yield*this.placeSakura(u,c,n,s,d,x,p,_,E),yield*this.placeCoast(u,c,e,n,s,d,x,_,g,h),yield,yield*this.placeCountry(u,c,n,s,d,x,p,_,E),yield*this.placeMountain(u,c,n,s,d,x,p,_,E),yield*this.placeSnow(u,c,n,s,d,x,p,_,E),yield*this.placeVerge(u,c,n,s,d,E,_,e,o,a),yield;let T=new on,y=(w,A,C,I,R=0,L)=>{if(!w)return null;let U=new ut(w,A);return U.castShadow=C,U.receiveShadow=I,U.renderOrder=R,L&&(U.userData.detail=L),T.add(U),U},M=new Set;for(let w of[n,n+20,n+40,s]){let A=Ys(w);M.add(A.a),A.t>0&&M.add(A.b)}y(f.build(),ll([...M]),!1,!0),yield,y(u.atlas.build(),this.M.atlas,!0,!0),yield;{let w=y(u.color.build(),this.M.color,!0,!0);w&&(w.customDepthMaterial=qu)}if(yield,y(u.foliage.build(),this.M.foliage,!0,!0),y(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let w=y(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");w&&(w.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let w=y(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");w&&(w.customDepthMaterial=this.M.gleafDepth)}if(yield,y(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),y(u.sig.build(),this.M.sig,!1,!1,0,"small"),y(u.sodium.build(),this.M.sodium,!1,!1),y(u.decal.build(),this.M.decal,!1,!0,1,"small"),y(u.pool.build(),this.M.pool,!1,!1,2,"light"),g.rows.length>1){let w=g.rows,A=Ud.length,C=w.length*A,I=new Float32Array(C*3),R=new Float32Array(C*2),L=new Float32Array(C*2),U=[];w.forEach((V,D)=>{for(let H=0;H<A;H++){let z=D*A+H,$=H*7;I.set(V.subarray($,$+3),z*3),R[z*2]=V[$+3],R[z*2+1]=V[$+4],L[z*2]=V[$+5],L[z*2+1]=V[$+6]}if(D>0)for(let H=0;H<A-1;H++){let z=(D-1)*A+H,$=z+A;U.push(z,$,z+1,z+1,$,$+1)}});let O=new vt;O.setAttribute("position",new St(I,3)),O.setAttribute("su",new St(R,2)),O.setAttribute("hf",new St(L,2)),O.setIndex(U),O.computeBoundingSphere(),y(O,this.M.shore,!1,!1,997)}g.puffs.length&&y(Wg(g.puffs),this.M.surf,!1,!1,2,"small");for(let w of m)y(w,this.riverMat,!1,!0);return T.position.set(o-this.origin.x,0,a-this.origin.z),{group:T,ox:o,oz:a,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*yl+6,n=an(t);if(n==="sakura"||Cs(t,6)||oi(t,34)||Qi(t,fn+12))return null;let s=Bn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,a,c,u,f){let g=Math.ceil((t-6)/yl),m=Math.floor((n-6-.001)/yl);for(let v=g;v<=m;v++){let b=this.poleSpec(v);if(!b)continue;let E=b.z==="city"?u(b.s)+.15:a(b.s,b.u),l=o(b.s,b.u,E),h=zt(Math.floor(Dn(v,31)*4294967295)),d=gd(r,l,h,{trans:h()<.45});b.z==="city"&&v%2===0&&Wm(r,l,-.11),v%2&&(yield);let x=this.poleSpec(v+1);if(x){let p=x.z==="city"?u(x.s)+.15:a(x.s,x.u),_=Gm(o(x.s,x.u,p));r.color.setM(new Ke);let S=[];for(let T=0;T<d.length;T++){let y=d[T],M=_[T],w=.35+h()*.4+(T>=7?.3:0);S.push(w),r.color.wire([y.x,y.y,y.z],[M.x,M.y,M.z],w,T>=7?.022:.015,_l,10)}if(b.z!=="coast"&&h()<.38){let T=Math.floor(h()*4),y=d[T],M=_[T],w=1+Math.floor(h()*4),A=.18+h()*.5;for(let C=0;C<w;C++){let I=Math.min(.92,A+C*(.018+h()*.025)),R=y.x+(M.x-y.x)*I,L=y.z+(M.z-y.z)*I,U=y.y+(M.y-y.y)*I-S[T]*4*I*(1-I);r.color.box(R-.07,U+.015,L-.07,R+.07,U+.19,L+.07,Yg),r.color.box(R-.045,U+.19,L-.045,R+.045,U+.27,L+.045,Yg)}}}if(b.z==="city"){r.color.setM(new Ke);let p=1+Math.floor(h()*3);for(let _=0;_<p;_++){let S=d[7+_%2],T=(h()-.5)*14,y=f(b.s+T),M=h()<.55,w=M?-(y+3.15):y+3.15,A=c(b.s+T,w,u(b.s+T)+5.2+h()*2.5);r.color.wire([S.x,S.y,S.z],A,.25+h()*.4,.012,_l,8)}}}}*intersection(e,t,n,s,r,o,a,c,u,f,g){let m=this.path.at(n,{}),v=o(n),b=a(n),E=c(n)||3,l=n-.5,h=Ut(n),d=[h.city,h.sakura,h.coast,h.country],x=(_,S,T)=>[m.x+m.fx*(_-.5)+m.rx*S-f,T,m.z+m.fz*(_-.5)+m.rz*S-g],p=b+E+.15;for(let _ of[-1,1]){let S=_*(b+E),T=_*80;u.grid(21,2,(A,C)=>{let I=S+(T-S)*A/20,R=(C?-3:3)*_,L=x(R,I,v+.165);return[L[0],L[1],L[2],0,1,0,R*_,I,d[0],d[1],d[2],d[3],b,10]});{let A=_*(b+E+3.2),C=-_*1.35,I=1.15,R=.42,L=(U,O)=>x(C+_*U,A-_*O,v+.18);e.decal.setM(new Ke),e.decal.quad(L(-I,-R),L(I,-R),L(I,R),L(-I,R),[1,1,1],Uo("tomare"))}for(let A of[-1,1]){let C=p+15+t()*3;for(;C<52;){let I=t.range(5.5,8.5),R=_*(C+I/2),L=t(),U=r(l+A*3.3,R,v+.14,A>0?Math.PI/2:-Math.PI/2,!1);ws(e,U,t,{type:L<.5?"house":"shop",w:I,d:t.range(7,10),floors:L<.5?2:t.int(2,3),tint:t.pick(Ts),litP:.45,fence:0}),C+=I+t.range(.2,1.2),yield}yield}let y=[30,54].map(A=>r(l+2.8,_*A,v+.15,-Math.PI/2,!1)),M=zt(Math.floor(Dn(s,_>0?71:73)*4294967295)),w=y.map(A=>gd(e,A,M,{trans:M()<.4}));e.color.setM(new Ke);for(let A=0;A<7;A++){let C=w[0][A],I=w[1][A];e.color.wire([C.x,C.y,C.z],[I.x,I.y,I.z],.3+M()*.4,.014,_l,10)}}Ed(e,r(n-9,-(b+.55),v+.15,0,!0),1,b+.55-1.6),Ed(e,r(n+8,b+.55,v+.15,0,!0),1,b+.55-1.6),s%3===1&&ag(e,r(n+15,0,v,0,!1),b+E+.1,"hodokyo"+Math.abs(s)%3)}*placeCrossing(e,t,n,s,r,o,a,c,u,f){let g=this.path.at(n,{}),m=g.y,v=o(n),b=c(n),E=v+b+.2,l=150,h=m+.18,d=Ut(n),x=[d.city,d.sakura,d.coast,d.country],p=(L,U,O)=>[g.x+g.fx*L+g.rx*U-u,O,g.z+g.fz*L+g.rz*U-f],_=[7.6,4.7,-4.7,-7.6];for(let[L,U]of[[-l,-E],[E,l]])t.grid(25,_.length,(V,D)=>{let H=L+(U-L)*V/24,z=_[D],ae=Math.abs(z)<5?h:Math.min(h-.05,a(n+z,H)-.03),He=p(z,H,ae);return[He[0],He[1],He[2],0,1,0,z,H,x[0],x[1],x[2],x[3],v,5]});let S=(L,U,O)=>t.grid(2,2,(V,D)=>{let H=V?U:L,z=D?-3.3:3.3,$=p(z,H,O);return[$[0],$[1],$[2],0,1,0,z,H,x[0],x[1],x[2],x[3],v,6]});S(-v,v,m+.03),b>0&&(S(-E,-v,m+.165),S(v,E,m+.165));let T=(L,U,O,V)=>t.grid(2,2,(D,H)=>{let z=D?V:O,$=H?U:L,ae=p($,z,m+.025);return[ae[0],ae[1],ae[2],0,1,0,$,z,x[0],x[1],x[2],x[3],v,7]});T(-7.15,-7.6,-v+.3,-.12),T(7.6,7.15,.12,v-.3),yield;let y=s(n,0,m,-Math.PI/2,!1),M=e.color;M.setM(y);let w=[.42,.4,.38],A=[.3,.29,.28],C=[.55,.57,.6];for(let L of[-2,2])for(let U of[-.5335,.5335]){let O=-(L+U);for(let[V,D]of[[-l,-E],[E,l]])M.box(V,.26,O-.035,D,.34,O+.035,w);M.box(-E,0,O-.035,E,.04,O+.035,A)}let I=[-146,-104,-64,-26,26,64,104,146];for(let L of I){for(let U of[-4.95,4.95])M.box(L-.12,.18,U-.12,L+.12,7.4,U+.12,C);M.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,C);for(let U of[-2,2])M.box(L-.04,6.3,-U-.04,L+.04,6.95,-U+.04,C)}for(let L of[-2,2])for(let U=0;U<I.length-1;U++)M.wire([I[U],5.35,-L],[I[U+1],5.35,-L],.05,.011,_l,6),M.wire([I[U],6.4,-L],[I[U+1],6.4,-L],.45,.011,_l,8);yield;let R=Math.round((n-Er)/Sr);if(d.country>.9&&Dn(R,17)<.7){let L=Dn(R,19)<.5?-1:1,U=L>0?v+9:-(v+9+46),O=L>0?v+9+46:-(v+9);lg(e,y,U,O,L*(v+9),Math.abs(R)%4,zt(Math.floor(Dn(R,23)*4294967295))),M.setM(y)}yield;for(let L of Yu(this.path,n)){let U=new Ke().makeRotationY(L.yaw);U.setPosition(L.x-u,L.y,L.z-f),hg(e,U)}Qs(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(b>0?1:0)),"sign_xing",1,2.2,.85),Qs(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(b>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,a,c,u,f,g,m){let v=this.path.at(n,{}),b=v.y,E=o(n),l=c(n),h=Ut(n),d=[h.city,h.sakura,h.coast,h.country],x=h.sakura>.5,p=222,_=E+l+.5,S=b-rl,T=(R,L,U)=>[v.x+v.fx*R+v.rx*L-u,U,v.z+v.fz*R+v.rz*L-f];{let R=[],L=[],U=[];for(let D=0;D<=74;D++){let H=-p+2*p*D/74;for(let z of[14.3,-14.3]){let $=T(z,H,S);R.push($[0],$[1],$[2]),L.push(z,H)}if(D>0){let z=(D-1)*2;U.push(z,z+1,z+2,z+1,z+3,z+2)}}let V=new vt;V.setAttribute("position",new Ye(R,3)),V.setAttribute("su",new Ye(L,2)),V.setIndex(U),V.computeBoundingSphere(),m.push(V)}for(let[R,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[U,O]of[[-p,-(E+3.4)],[E+3.4,p]])t.grid(41,2,(V,D)=>{let H=U+(O-U)*V/40,z=D?L:R,$=T(z,H,b+.38);return[$[0],$[1],$[2],0,1,0,z,H,d[0],d[1],d[2],d[3],E,9,1]});yield;let y=s(n,0,b,0,!1),M=e.color,w=[.74,.73,.7],A=x?[.78,.2,.15]:[.55,.72,.64];M.setM(y),M.box(-24.5,-1,-_,24.5,-.03,_,w,null,{noBottom:!1});for(let R of[-1,1])M.box(-24.5,-1.3,R>0?_-.35:-_,24.5,-.95,R>0?_:-_+.35,[.62,.61,.58]);for(let R of[-8,8])M.box(R-.7,-rl-1.4,-_+.6,R+.7,-1,_-.6,w);for(let R of[-25.7,25.7])M.box(R-1.2,-rl+.4,-_-.4,R+1.2,-.05,_+.4,w);for(let R of[-24.5,24.5])M.box(R-.16,.004,-E,R+.16,.016,E,[.33,.32,.31]),M.box(R-.02,.016,-E,R+.02,.02,E,[.2,.19,.19]);let C=l>0?.15:0;for(let R of[-1,1]){let L=R*(_-.14);for(let U=-24;U<=24.01;U+=2)M.box(U-.06,C,L-.06,U+.06,C+1,L+.06,A);M.box(-24,C+.95,L-.08,24,C+1.08,L+.08,A),M.box(-24,C+.48,L-.03,24,C+.54,L+.03,A),M.box(-24,C+.06,L-.03,24,C+.12,L+.03,A)}let I="bridge"+Math.abs(Math.round(n/Tr))%4;for(let R of[-25,25])for(let L of[-1,1]){let U=L*(_-.1),O=[.7,.69,.65];M.box(R-.32,C,U-.32,R+.32,C+1.45,U+.32,O),M.box(R-.38,C+1.45,U-.38,R+.38,C+1.58,U+.38,[.62,.61,.57]),e.atlas.setM(y);let V=(R<0?-1:1)*.325,D=I;R<0?e.atlas.quad([R-.325,C+.3,U-.22],[R-.325,C+.3,U+.22],[R-.325,C+1.3,U+.22],[R-.325,C+1.3,U-.22],[1,1,1],Uo(D)):e.atlas.quad([R+.325,C+.3,U+.22],[R+.325,C+.3,U-.22],[R+.325,C+1.3,U-.22],[R+.325,C+1.3,U+.22],[1,1,1],Uo(D)),M.setM(y)}ul(e,s(n-14,-(_-.45),b+C,0,!0)),ul(e,s(n+14,_-.45,b+C,0,!0)),yield;{e.atlas.setM(new Ke);let R=Uo("gogan"),L=2.4,U=150;for(let O of[-1,1])for(let V=-U;V<U-.01;V+=L){let D=V+L,H=T(O*13.9,V,S-.12),z=T(O*13.9,D,S-.12),$=T(O*16.05,D,S+.72),ae=T(O*16.05,V,S+.72),He=(z[1]-H[1])*(ae[2]-H[2])-(z[2]-H[2])*(ae[1]-H[1]),we=(z[0]-H[0])*(ae[1]-H[1])-(z[1]-H[1])*(ae[0]-H[0]),De=T(0,(V+D)/2,S),K=He*(De[0]-H[0])+we*(De[2]-H[2])>0,X={u0:R.u0,u1:R.u1,v0:R.v0,v1:R.v1};K?e.atlas.quad(H,z,$,ae,[1,1,1],X):e.atlas.quad(z,H,ae,$,[1,1,1],{u0:R.u1,u1:R.u0,v0:R.v0,v1:R.v1})}for(let O of[-1,1])for(let V of[-1,1])for(let D=14+g()*3;D<125;D+=g.range(2.4,5)){if(g()<.35)continue;let H=O*(16.2+g()*1.1),z=V*D,$=1+(g()<.4?1:0);for(let ae=0;ae<$;ae++){let He=T(H+O*g()*.6,z+(g()-.5)*.9,S+.7),we=new Ke().makeRotationY(g()*6.28);we.setPosition(He[0],He[1],He[2]),Md(e,we,g,"grass",g.range(1.9,2.8))}}}yield;for(let R of[-18,18])for(let L of[-1,1]){yield;for(let U=11+g()*4;U<(x?125:170);U+=x?g.range(8.5,11):g.range(18,34)){let O=n+R+(g()-.5)*1.5,V=L*U;ri(e,s(O,V,a(O,V),g()*6,!1),x?"sakura":"broad",g,x?g.range(1,1.25):g.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,a,c,u,f,g,m){let v=this.path.at(n.s,{}),b=v.y,E=u(n.s),l=E+1.4,h=Ut(n.s),d=[h.city,h.sakura,h.coast,h.country],x=o(n.s,0,b,0,!1),p=e.color,_=Math.max(s,n.s-vn)-n.s,S=Math.min(r,n.s+vn)-n.s;if(S>_+.01){let D=Math.max(2,Math.ceil((S-_)/3)+1),H=[-(E+1.5),-E,-E*.5,0,E*.5,E,E+1.5];t.gridN(D,H.length,(X,ge)=>{let Ie=_+(S-_)*X/(D-1),Ee=n.s+Ie,Me=H[ge],Ze=b+Gu(Ie,Me);return[v.x+v.fx*Ie+v.rx*Me-f,Ze,v.z+v.fz*Ie+v.rz*Me-g,0,1,0,Rs(Ee,Mi),Me,d[0],d[1],d[2],d[3],E,0,-1]});let z=[[-E,0],[-E,.2],[-l,.2],[-l,3.2]];for(let X=1;X<12;X++){let ge=Math.PI*(1-X/12);z.push([l*Math.cos(ge),3.2+3*Math.sin(ge)])}z.push([l,3.2],[l,.2],[E,.2],[E,0]);let $=[.86,.82,.72],ae=[.44,.45,.47],He=[.62,.61,.58],we=[];for(let X=_;X<S-.01;X+=6)we.push(X);we.push(S),p.setM(x);for(let X=0;X<we.length-1;X++)for(let ge=0;ge<z.length-1;ge++){let[Ie,Ee]=z[ge],[Me,Ze]=z[ge+1],et=Math.max(Ee,Ze)<=.21?He:Math.abs(Ie)>l-.01&&Math.abs(Me)>l-.01?$:ae;p.quad([we[X],Ee,Ie],[we[X+1],Ee,Ie],[we[X+1],Ze,Me],[we[X],Ze,Me],et)}e.sodium.setM(x),e.sig.setM(x);let De=l*Math.cos(Math.PI/6)-.12,K=3.2+3*Math.sin(Math.PI/6)-.08;for(let X=Math.ceil((_+vn-3)/6)*6+3-vn;X<S;X+=6)for(let ge of[-1,1])e.sodium.box(X-.45,K-.07,ge*De-.13,X+.45,K+.07,ge*De+.13,null),js(e,x,X,K-.1,ge*De,1);for(let X=Math.ceil((_+vn)/24)*24-vn;X<S;X+=24)e.sig.box(X-.3,.95,-l+.01,X+.3,1.2,-l+.06,null);for(let X=Math.ceil((_+vn-30)/60)*60+30-vn;X<S;X+=60)for(let ge of[-1.15,1.15])p.box(X-1.1,5.2,ge-.36,X+1.1,5.78,ge+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),p.box(X-.08,5.78,ge-.05,X+.08,6.15,ge+.05,[.4,.4,.42]);yield}let T=(D,H)=>{let z=Math.sin(D*12.9898+H*78.233+n.k*37.719)*43758.5453;return z-Math.floor(z)},y=(D,H,z)=>[D[0]+(H[0]-D[0])*z,D[1]+(H[1]-D[1])*z,D[2]+(H[2]-D[2])*z],M=[.5,.5,.47],w=[.55,.53,.47],A=[.6,.6,.57],C=[.58,.58,.55],I=[.42,.42,.4],R=(D,H)=>{let z=T(D,H);return L?y([.26,.29,.08],[.42,.3,.09],z):y([.22,.29,.08],[.36,.36,.12],z)},L=h.mountain>.5,U=l+2.6,O=2.6;for(let D of[-1,1]){let H=n.s+D*vn,z=D*(vn+.08);if(H<s||H>=r)continue;let $=[];for(let te of Xg)te>=1.44&&$.push(E+te,-(E+te));for(let te of qg)te>E+3.5&&te<E+21&&$.push(te,-te);for(let te=0;te<=24;te++)$.push(-l+2*l*te/24);$.push(-l-.01,l+.01,-U,U),$.sort((te,N)=>te-N);let ae=te=>3.2+3*Math.sqrt(Math.max(0,1-(te/l)**2)),He=te=>Math.max(c(H-D*.03,te)-b,Gu(D*(vn-.03),te)),we=te=>Math.abs(te)<=l+1e-6?ae(te):c(H+D*.03,te)-b,De=8.4;for(let te of $)Math.abs(te)<=U&&(De=Math.min(De,He(te)-.4));let K=De>6.6;p.setM(x);let X=D,ge=(te,N,P,G,q,Q,ce,de)=>{let le=[z,P,te],fe=[z,G,N],Ne=[z,Q,N],Ve=[z,q,te],Ce=D<0?[le,fe,Ne,Ve]:[fe,le,Ve,Ne],Ue=D<0?[ce,ce,de,de]:[ce,ce,de,de];for(let Be of[0,1,2,0,2,3])p.vtx(Ce[Be][0],Ce[Be][1],Ce[Be][2],X,0,0,0,0,Ue[Be])},Ie=(te,N,P)=>te+(N-te)*P;for(let te=0;te<$.length-1;te++){let N=$[te],P=$[te+1];if(P-N<1e-4)continue;let G=He(N),q=He(P),Q=we(N),ce=we(P);if(G-Q<.01&&q-ce<.01)continue;let de=(N+P)/2,le=K&&Math.abs(de)<U,fe=Q,Ne=ce;if(le){let Be=y(M,[.46,.46,.44],T(Math.floor(de/2.4),3.1)),Je=.8+2.6*T(Math.floor(de/.8),7.7),ot=y(Be,[.27,.27,.26],.35+.3*T(Math.floor(de/.8),9.9)),Y=Math.min(De,G),Le=Math.min(De,q),me=Math.max(Q,Y-Je),W=Math.max(ce,Le-Je);if(Math.abs(de)>l){let Fe=Math.min(me,Q+.9),Se=Math.min(W,ce+.9);ge(N,P,Q,ce,Fe,Se,y(Be,[.25,.29,.18],.45),Be),ge(N,P,Fe,Se,me,W,Be,Be)}else ge(N,P,Q,ce,me,W,Be,Be);if(ge(N,P,me,W,Y,Le,Be,ot),fe=Y,Ne=Le,G-Y<.01&&q-Le<.01)continue}let Ve=Math.floor(de/O),Ce=fe,Ue=Ne;for(let Be=Math.floor(Math.min(Ce,Ue)/O)+1;Ce<G-.01||Ue<q-.01;Be++){let Je=Be*O,ot=Math.min(G,Math.max(Ce,Je)),Y=Math.min(q,Math.max(Ue,Je)),Le=R(Ve,Be);if(ge(N,P,Ce,Ue,ot,Y,y(Le,[.2,.22,.1],.25),Le),Ce=ot,Ue=Y,Be>60)break}}let Ee=Math.min(z,z+D*.12),Me=Math.max(z,z+D*.12),Ze=te=>{for(let N=0;N<$.length-1;N++)if(te>=$[N]&&te<=$[N+1]&&$[N+1]>$[N]){let P=(te-$[N])/($[N+1]-$[N]);return[Ie(we($[N]),we($[N+1]),P),Ie(He($[N]),He($[N+1]),P)]}return null},et=$[0],Re=$[$.length-1];for(let te=Math.ceil(et/O)*O;te<Re;te+=O){let N=Ze(te);if(!N)continue;let P=(K&&Math.abs(te)<U?Math.max(De+.3,N[0]):N[0])+.05,G=N[1]-.05;G-P>.4&&!(Math.abs(te)<=l+.3&&!K)&&p.box(Ee,P,te-.14,Me,G,te+.14,w)}for(let te=1;te<60;te++){let N=te*O,P=null,G=()=>{P&&P[1]-P[0]>.3&&p.box(Ee,N-.14,P[0],Me,N+.14,P[1],w),P=null},q=!1;for(let Q=0;Q<$.length-1;Q++){let ce=$[Q],de=$[Q+1];if(de-ce<1e-4)continue;let le=(ce+de)/2,fe=Math.max(we(ce),we(de),K&&Math.abs(le)<U?De+.3:-1e9),Ne=Math.min(He(ce),He(de));N>fe+.2&&N<Ne-.2?(q=!0,P?P[1]=de:P=[ce,de]):G()}if(G(),!q&&N>30)break}K&&p.box(Math.min(z,z+D*.32),De-.05,-U,Math.max(z,z+D*.32),De+.3,U,A);let st=z+D*.32,ee=te=>-l+2*l*te/24,be=te=>[ee(te),ae(ee(te))],j=te=>[ee(te)*1.12,ae(ee(te))+.6];for(let te=0;te<24;te++){let[N,P]=be(te),[G,q]=be(te+1),[Q,ce]=j(te),[de,le]=j(te+1);D<0?p.quad([st,P,N],[st,q,G],[st,le,de],[st,ce,Q],C):p.quad([st,q,G],[st,P,N],[st,ce,Q],[st,le,de],C),D<0?p.quad([z,P,N],[z,q,G],[st,q,G],[st,P,N],I):p.quad([z,q,G],[z,P,N],[st,P,N],[st,q,G],I),D<0?p.quad([z,le,de],[z,ce,Q],[st,ce,Q],[st,le,de],C):p.quad([z,ce,Q],[z,le,de],[st,le,de],[st,ce,Q],C)}for(let te of[-1,1])p.box(Math.min(z,st),.2,te>0?l:-l*1.12,Math.max(z,st),3.2,te>0?l*1.12:-l,C);e.atlas.setM(x);let se=1.9,ne=7.05,ue=7.85,B=z+D*.03,xe=Uo("tunnel"+(h.coast>.5?1:Math.abs(n.k)%2?2:0));D<0?e.atlas.quad([B,ne,-se],[B,ne,se],[B,ue,se],[B,ue,-se],[1,1,1],xe):e.atlas.quad([B,ne,se],[B,ne,-se],[B,ue,-se],[B,ue,se],[1,1,1],xe)}yield;let V=h.mountain>.5;for(let D=Math.max(s,n.s-fn*.95)+m()*3;D<Math.min(r,n.s+fn*.95);D+=m.range(4,8)){let H=Math.abs(D-n.s)>vn-4?17:4;for(let z of[-1,1]){let $=z*(E+m.range(H,50)),ae=m();ri(e,a(D,$,-.3,m()*6,!1),V?ae<.5?"maple":ae<.8?"cedar":"ginkgo":ae<.65?"pine":"broad",m,m.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,a,c,u){let f=g=>Ut(g).snow;if(!(f(n)<.3&&f(s)<.3)){for(let g of[-1,1]){for(let m=n+t()*20;m<s;m+=t.range(22,40)){if(f(m)<.6||t()<.5)continue;let v=g*t.range(18,90);ws(e,o(m,v,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Ts),litP:.62,fence:0,snow:!0});for(let b=0;b<2+t()*3;b++)ri(e,o(m+t.range(-9,9),v+g*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let m=n+t()*5;m<s;m+=t.range(3,7))f(m)<.5||(t()<.32&&ri(e,o(m,g*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&ri(e,o(m,g*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let g=Math.ceil(n/36)*36;g<s;g+=36){if(f(g)<.55)continue;let m=c(g);{let v=r(g,-(m+.95),a(g)+1.3),b=r(g+18,m+.95,a(g+18)+1.3);v.groundY=a(g),b.groundY=a(g+18),_d(e,v,1),_d(e,b,-1)}}}}*placeMountain(e,t,n,s,r,o,a,c,u){let f=g=>Ut(g).mountain;if(!(f(n)<.3&&f(s)<.3)){for(let g of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(4.5,8.5)){if(f(m)<.45||Qi(m,fn+6))continue;let v=c(m),b=t();if(g>0){let E=b<.5?"maple":b<.72?"ginkgo":"cedar";ri(e,o(m,v+t.range(17,70),-.25,t()*6,!1),E,t,t.range(.9,1.3))}else{let E=b<.55?"maple":b<.8?"cedar":"ginkgo";ri(e,o(m,-(v+t.range(3.5,34)),-.25,t()*6,!1),E,t,t.range(.95,1.35))}}yield}for(let g=n+t()*4;g<s;g+=t.range(3,6)){if(f(g)<.5)continue;let m=t()<.7,v=-(c(g)+(m?t.range(108,205):t.range(36,100)));ri(e,o(g,v,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new Ke);for(let g=Math.ceil(n/10)*10;g<s;g+=10){if(f(g)<.5||Qi(g,fn+4))continue;let m=c(g),v=r(g,-(m+.95),a(g));Ym(e,v)}for(let g=Math.ceil(n/14)*14;g<s;g+=14){if(f(g)<.6)continue;let m=this.path.curv(g);if(Math.abs(m)<1/230)continue;let v=c(g);m>0?Qs(e,r(g,v+.42,a(g)),"chev_l",-1,1.25,.58):Qs(e,r(g,-(v+1.15),a(g)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,a){let c=this.path,u={},f=zt(Math.floor(Dn(t,1789)*4294967295)),g=jm(),m=Math.floor((n+Ht/2)/600)*600+300,v=Math.floor((n+Ht/2)/700)*700+120,b=Math.floor((n+Ht/2)/380)*380+190,E=Dn(Math.round(b),5)<.5?-1:1;for(let h of[-1,1]){e.leaf.setM(Zg);for(let d=n+f()*g;d<s;d+=g*f.range(.75,1.25)){if(an(d)!=="country"||Cs(d,10)||oi(d,31)||h<0&&(Math.abs(d-m)<2.9||d>v-1.3&&d<v+2.7)||h===E&&Math.abs(d-b)<1.6)continue;c.at(d,u);let x=a(d),p=h*(x+.95+(f()-.5)*.36),_=u.y+$s(d,p,u.y,x),S=(f()-.5)*.8,T=Math.cos(S)*h,y=Math.sin(S)*h;Sd(e,u.x+u.rx*p-r,_,u.z+u.rz*p-o,u.rx*T+u.fx*y,u.rz*T+u.fz*y,f,f.range(.85,1.15))}yield}let l=zt(Math.floor(Dn(t,2417)*4294967295));for(let h of[-1,1]){e.leaf.setM(Zg);for(let d=n+l()*8;d<s;d+=l.range(8,14)){if(Ut(d).sakura<.6||oi(d,31))continue;let x=2+Math.floor(l()*4),p=h*(a(d)+2.85+l()*.5);c.at(d,u);let _=u.y+$s(d,p,u.y,a(d));for(let S=0;S<x;S++){let T=S*.5+l()*.2,y=p+h*(l()-.5)*.35,M=(l()-.5)*1.2,w=Math.cos(M)*h,A=Math.sin(M)*h;Sd(e,u.x+u.fx*T+u.rx*y-r,_,u.z+u.fz*T+u.rz*y-o,u.rx*w+u.fx*A,u.rz*w+u.fz*A,l,l.range(.42,.58))}}}}*placeVerge(e,t,n,s,r,o,a,c,u,f){yield*this.placeBanks(e,c,n,s,u,f,a);for(let g of[-1,1]){for(let m=n+t()*1.2;m<s;m+=t.range(.55,1.5)){if(Cs(m,10)||oi(m,31)||Qi(m,fn+4))continue;let v=an(m),b=a(m),E,l,h=.22,d=1;if(v==="country")E=b+t.range(2.05,2.8),l=.25,h=.35;else if(v==="sakura")E=b+2.68+t()*1.3,l=.55,h=.3;else if(v==="coast"){if(g<0)continue;E=b+.95+t()*1.7,l=.75,h=.18}else{if(v==="snow")continue;if(v==="mountain")E=g<0?b+1+t()*.35:b+.25+t()*.2,l=g<0?.55:.18,h=.12,d=.85;else{if(Fd(m,5))continue;E=b+3.02+t()*.1,l=.1,h=.08,d=.65}}if(t()>l)continue;let x=g*E;Md(e,r(m,x,o(m,x),t()*6.28,!1),t,t()<h?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new Ke);let a=Math.max(1,Math.round((n-t)/2)),c=_e.rail,u=[.62,.64,.66],f=[.74,.76,.79],g=[.95,.55,.16];for(let m=0;m<a;m++){let v=t+(n-t)*m/a,b=t+(n-t)*(m+1)/a,E=-(o(v)+.95),l=-(o(b)+.95),h=r(v),d=r(b);for(let p=0;p<Nd.length-1;p++){let[_,S]=Nd[p],[T,y]=Nd[p+1];e.color.quad(s(v,E+S,h+_),s(b,l+S,d+_),s(b,l+y,d+T),s(v,E+y,h+T),c)}e.color.quad(s(b,l+.05,d+.5),s(v,E+.05,h+.5),s(v,E+.05,h+.84),s(b,l+.05,d+.84),u),e.color.noShadow=!0;let x=s(v,E-.04,h);if(e.color.cyl(x[0],h,x[2],.055,.055,.8,6,f,!1),Math.round(v/2)%2===0){let p=s(v,E+.035,h+.64),_=s(v+.09,E+.035,h+.64);e.color.quad(_,p,[p[0],p[1]+.07,p[2]],[_[0],_[1]+.07,_[2]],g)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,a,c,u,f,g,m,v){for(let l of[-1,1]){let h=n+t()*2;for(;h<s-2;){{let R=Ut(h);if(R.city<.62||R.mountain>.1){h+=4;continue}}{let R=Zs(h+6);if(R&&h<R.s+8.5&&h+14>R.s-8.5){h=Math.max(h+1,R.s+8.5);continue}}let d=Rs(h,150);if(d>145.6||d<3.4){h+=1;continue}let x=c(h),p=u(h)||3,_=x+p+.15,S=t(),T=S<.7?"machiya":S<.75?"shop":S<.81?"apt":S<.83?"office":S<.88?"house":S<.92?"konbini":S<.96?"parking":"gap",y=T==="shop"?t.range(5,9):T==="machiya"?t.range(6,9.5):T==="apt"?t.range(10,16):T==="office"?t.range(10,14):T==="house"?t.range(7,9.5):T==="konbini"?t.range(12,14):T==="parking"?t.range(7,11):t.range(2,3.5);if(h+y>s){if(s-h<5||T==="konbini")break;y=s-h-.2}{let R=Math.ceil((h+4.4)/150)*150-4.4;if(h+y>R-.1){if(R-.1-h<4){h=R+7.9;continue}y=R-.1-h}}let M=h+y/2,w=a(M),A=t.pick(Ts),C=.42,I=T==="machiya"&&t()<.42;if(T==="parking"){let R=r(M,l*(_+3),w+.15);t()<.8&&og(e,eh(R,0,0,.5,(t()-.5)*.1),t),e.color.setM(R),e.color.box(-y/2,0,5.5,y/2,1.6,5.7,_e.concrete)}else if(T!=="gap"){let R=r(M,l*_,w+.15),L={type:T,w:y,d:T==="apt"||T==="office"?t.range(10,14):t.range(8,12),floors:T==="shop"?t.int(2,4):T==="machiya"?t()<.7?2:3:T==="apt"?t.int(4,9):T==="office"?t.int(4,8):2,tint:I?dd[Math.floor(t()*dd.length)]:A,litP:C,plaster:I,fence:T==="house"&&t()<.5?1.2:0};if(ws(e,R,t,L),T!=="house"&&t()<.28&&xd(e,r(M+(t()-.5)*(y-1.2),l*(_-.42),w+.15),t),(T==="shop"||T==="konbini"||T==="machiya")&&t()<.3)for(let U=0;U<1+t()*3;U++)Xm(e,r(M-y/2+.8+U*.55,l*(_-.75),w+.15,Math.PI/2+.1),t);if(T==="house"&&t()<.6)for(let U=0;U<2+t()*3;U++)yd(e,r(M+1+U*.5,l*(_-.3),w+.15),t);if(t()<.03)for(let U=0;U<3;U++)qm(e,r(M+U*.9,l*(x+.35),w))}h+=y+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Ut(d).city<.7||Ut(d).mountain>.1||t()<.3||Cs(d,18)||Fd(d,15))continue;let x=c(d),p=r(d,l*(x+3.2+t.range(14,20)),a(d)+.1);ws(e,p,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Ts),litP:.4})}if(Ut(n+30).city>.7&&Ut(n+30).mountain<.1&&t()<.65){let d=n+t()*Ht;if(Cs(d,24)||Fd(d,20))continue;let x=r(d,l*t.range(55,150),a(d));ws(e,x,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Ts),litP:.45})}}let b=Math.ceil(n/150),E=Math.floor((s-.01)/150);for(let l=b;l<=E;l++){let h=l*150;if(an(h)!=="city"||Ut(h).mountain>.1)continue;let d=c(h);yield*this.intersection(e,t,h,l,r,a,c,u,g,m,v),Qs(e,r(h-1,-(d+.4),a(h)+.15),"sign_blue",1),Qs(e,r(h-6,-(d+.4),a(h)+.15),"sign_stop",1,2.1,.75),bd(e,r(h+7,d+.4,a(h)+.15),-1),l%3===0&&Qs(e,r(h+20,-(d+.4),a(h)+.15),"sign_speed",1)}}*placeSakura(e,t,n,s,r,o,a,c,u){for(let m of[-1,1]){for(let v=n+t()*4;v<s;v+=t.range(7.5,10)){if(Ut(v).sakura<.45||oi(v,30))continue;let b=c(v);ri(e,o(v,m*(b+3.7),0,Li.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),t()<.45&&ri(e,o(v+3,m*(b+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let v=n+(m>0?0:12);v<s;v+=24){if(an(v)!=="sakura"||oi(v,30))continue;let b=c(v);ul(e,r(v,m*(b+2.25),a(v)+.15)),Rs(v,48)<24&&fg(e,r(v+6,m*(b+3),u(v+6,m*(b+3))))}for(let v=n+t()*15;v<s;v+=t.range(14,24)){if(an(v)!=="sakura"||t()<.35||oi(v,45))continue;let b=c(v);ws(e,o(v,m*(b+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Ts),litP:.45,fence:t()<.6?1.4:0})}}let g=Math.floor((n+Ht/2)/480)*480+240;g>=n&&g<s&&an(g)==="sakura"&&!oi(g,60)&&Td(e,r(g,0,a(g),0,!1),c(g)+1.6,6.4)}coastWall(e){return Ut(e).coast>=.7&&!Qi(e,fn+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=zt(Math.floor(Dn(e,5501)*4294967295)),s=e*Ht,r=s+Ht;for(let o=s+1+n()*12;o<r-3;o+=n.range(12,26)){let a=n.range(1.25,1.5),c=n.range(4.5,11),u=n()<.4?3:2,f=Math.min(o+c,r-.5);!this.coastWall(o)||!this.coastWall(f)||t.push({sa:o,sb:f,L:a,rows:u,dOut:(.8+(u-1)*1.45+.95)*a})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,s,r,o,a,c,u,f){let g=this.path,m={},v=this.coastHeaps(n),b=zt(Math.floor(Dn(n,5507)*4294967295));for(let p of v){let _=p.L;for(let y=0;y<p.rows;y++){let M=.8*_+y*1.45*_,w=(y===0?.28:y===1?0:-.3)*_;for(let A=p.sa+b()*.7*_;A<p.sb;A+=1.5*_*b.range(.88,1.12)){let C=c(A),I=f(A,-(C+il+M+(b()-.5)*.45*_),0);if(wd(e,I[0],Zi+w+(b()-.5)*.3*_,I[2],b,_*b.range(.92,1.08),Zi-.7,y===0?.8:.45),y===0&&p.rows>1&&b()<.4){let R=f(A+.7*_,-(C+il+M+.72*_),0);wd(e,R[0],Zi+1.05*_,R[2],b,_*b.range(.9,1),Zi-.7)}}}let S=Math.max(3,Math.round(ih.n*(p.sb-p.sa+2)/7)),T=Rs(s,Mi)-s;for(let y=0;y<S;y++){let M=p.sa+(p.sb-p.sa)*(y+.5)/S+(b()-.5)*1.4,w=c(M);g.at(M,m);let A=f(M,-(w+il+p.dOut*(.45+.55*b())-.3),Zi+.35);u.puffs.push(A[0],A[1],A[2],-m.rx,-m.rz,p.dOut,b(),M+T)}}v.length&&(yield);let E=[...this.coastHeaps(n-1),...v,...this.coastHeaps(n+1)],l=Rs(s,Mi),h=[];for(let p=0;p<=10;p++)h.push(s+p*6);for(let p of E)for(let _ of[p.sa-3.2,p.sa-.4,p.sb+.4,p.sb+3.2])_>s+.5&&_<r-.5&&h.push(_);h.sort((p,_)=>p-_);for(let p=0;p<h.length;p++){let _=h[p];if(p>0&&_-h[p-1]<.6)continue;if(!this.coastWall(_)){if(u.rows.length)break;continue}let S=1;for(let M=1;M<=3;M++)if(!this.coastWall(_-2*M)||!this.coastWall(_+2*M)){S=(M-1)/3;break}let T=c(_),y=new Float32Array(Ud.length*7);Ud.forEach((M,w)=>{let A=f(_,-(T+il+M),Zi+.03),C=0;for(let I of E)C=Math.max(C,(1-wt(.4,3.2,Math.max(I.sa-_,_-I.sb,0)))*(1-wt(.2,3.4,M-I.dOut)));y.set([A[0],A[1],A[2],l+(_-s),M,C,S],w*7)}),u.rows.push(y)}u.rows.length&&(yield);for(let p=s+t()*6;p<r;p+=t.range(5,9)){if(an(p)!=="coast"||Qi(p,fn+6))continue;let _=c(p),S=t();S<.58&&ri(e,a(p,_+t.range(4.5,30),0,t()*6,!1),S<.48?"broad":"pine",t,t.range(1,1.4))}for(let p=s+4;p<r;)p+=t.range(18,30);for(let p=s+12;p<r;p+=48){if(an(p)!=="coast"||Qi(p,fn+4))continue;let _=c(p);vd(e,a(p,_+1),t)}let d=zt(Math.floor(Dn(n,5519)*4294967295));for(let p=s+d()*6;p<r;p+=d.range(6,14)){if(Ut(p).coast<.6||Qi(p,fn+6))continue;let _=1+Math.floor(d()*2.4);for(let S=0;S<_;S++){let T=p+S*d.range(.9,1.6),y=c(T)+d.range(1.25,2.4),M=d()*6.28,w=d.range(.85,1.25),A=T-6-Math.round((T-6)/yl)*yl,C=T-12-Math.round((T-12)/48)*48;Math.abs(A)<1.4||Math.abs(C)<1.2||Km(e,a(T,y,0,M,!1),d,w)}}if(an(s+30)==="coast"&&t()<.5){let p=s+t()*Ht,_=c(p);Qi(p,fn+25)||ws(e,a(p,_+t.range(9,16)),t,{type:"house",w:t.range(7,10),d:8,floors:t()<.5?2:1,tint:t.pick(Ts),litP:.5,fence:0})}if(an(s+30)==="coast"&&t()<.55){let p=s+t()*Ht;vg(e,o(p,-(c(p)+t.range(45,220)),Zi-.25,t()*6,!1),t)}let x=Math.floor((s+Ht/2)/1500)*1500+700;x>=s&&x<r&&an(x)==="coast"&&!Qi(x,fn*1.6)&&gg(e,o(x,-(c(x)+75),Zi-1,0,!1))}*placeCountry(e,t,n,s,r,o,a,c,u){for(let b of[-1,1]){yield;for(let E=n+t()*20;E<s;E+=t.range(20,40)){if(an(E)!=="country"||t()<.55||Cs(E,16)||oi(E,48))continue;let l=b*t.range(16,95),h=o(E,l);ws(e,h,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Ts),litP:.5,fence:0});for(let d=0;d<2+t()*3;d++){let x=l+b*t.range(6,14),p=E+t.range(-8,8);ri(e,o(p,x,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let E=n+t()*8;E<s;E+=t.range(5,9)){if(an(E)!=="country"||Cs(E,7)||oi(E,36))continue;let l=b*t.range(140,210);ri(e,o(E,l,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Cs(E+2,8)&&!oi(E+2,34)&&ri(e,o(E+2,b*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let f=Math.floor((n+Ht/2)/600)*600+300;if(f>=n&&f<s&&an(f)==="country"&&!oi(f,40)){let b=c(f);dg(e,r(f,-(b+1.6),a(f)-.08),t)}let g=Math.floor((n+Ht/2)/700)*700+120;if(g>=n&&g<s&&an(g)==="country"&&!oi(g,40)){let b=c(g);xd(e,r(g,-(b+.95),a(g)-.08),t),vd(e,r(g+2,-(b+.8),a(g)-.08),t)}let m=Math.floor((n+Ht/2)/900)*900+450;if(m>=n&&m<s&&an(m)==="country"&&!oi(m,40)){let b=c(m);xg(e,o(m,b+5),t)}let v=Math.floor((n+Ht/2)/380)*380+190;if(v>=n&&v<s&&an(v)==="country"&&!oi(v,40)&&!Cs(v,30)){let b=c(v),E=(Dn(Math.round(v),5)<.5?-1:1)*(b+2.75);ug(e,o(v,E,0))}for(let b=n;b<s;b+=30){if(an(b)!=="country")continue;let E=this.path.curv(b);if(Math.abs(E)>1/450&&t()<.5){let l=E>0?-1:1,h=c(b);bd(e,o(b,l*(h+.75)),l>0?-1:1)}}}};var Oo={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function $g(i){let e=i.get("weather"),t={mode:Oo[e]?e:"auto",kind:Oo[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return Oo[e]&&(t.ov=Oo[e][0],t.rain=Oo[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let a=Math.random();t.kind=t.kind==="clear"?a<.5?"cloudy":a<.72?"rain":"clear":t.kind==="cloudy"?a<.5?"clear":a<.85?"rain":"cloudy":a<.55?"cloudy":"clear"}let[s,r]=Oo[t.kind];t.ov+=Yt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=Yt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var Di={uHeadPos:{value:new k},uHeadDir:{value:new k(0,0,1)},uHeadI:{value:0},uLampW:{value:[new mt(0,-1e3,0,0),new mt(0,-1e3,0,0)]},uLampCol:{value:new ve(1,.8,.52)}},rh=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function Kg(){let e=new k(42,22,42),t=new nn(1,1),n=new os;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let a=0;a<2400*4;a++)s[a]=Math.random();n.setAttribute("aOff",new Cn(s,4)),n.instanceCount=2400;let r=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uAmt:{value:0},uBox:{value:e},uCol:{value:new ve(1,1,1)},...Di},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${rh}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new ut(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,f){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*f,.33+.67*f,.42+.58*f)}}}function Jg(){let e=new k(46,24,46),t=new nn(1,1);t.translate(0,.5,0);let n=new os;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let a=0;a<2600;a++)s[a*4]=Math.random(),s[a*4+1]=Math.random(),s[a*4+2]=Math.random(),s[a*4+3]=Math.random();n.setAttribute("aOff",new Cn(s,4)),n.instanceCount=2600;let r=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new k},uRain:{value:0},uBox:{value:e},uCol:{value:new ve(.8,.85,.95)},...Di},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${rh}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new ut(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(a,c,u,f){o.visible=u>.01,r.uniforms.uTime.value=c,r.uniforms.uCam.value.copy(a),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*f,.12+.83*f,.16+.84*f)}}}var ai=64,Od=[2.2,1.3,2.6],VM=[-2.4,.35,-1.6];function jg(){let i=new Float32Array(ai*3),e=new Float32Array(ai*3),t=new Float32Array(ai*4),n=new Float32Array(ai),s=new Uint8Array(ai),r=new Float32Array(ai);for(let x=0;x<ai;x++)t[x*4]=t[x*4+1]=1;let o=new nn(1,1),a=new os;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),a.instanceCount=0;let c=new Float32Array(ai*4),u=new Float32Array(ai*4),f={uP:{value:c},uC:{value:u},uNoiseTex:Oe.uNoiseTex,uAmb:{value:new ve},uSun:{value:new ve},uTail:{value:new mt},uCam:{value:new k},...Di},g=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:f,vertexShader:`
      uniform vec4 uP[${ai}], uC[${ai}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${rh}
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
      }`}),m=new ut(a,g);m.frustumCulled=!1,m.renderOrder=4,m.visible=!1;let v=0,b=0,E=0,l=0,h=!1;function d(x,p,_,S,T,y,M,w,A,C,I){let R=v;v=(v+1)%ai,i[R*3]=p,i[R*3+1]=_,i[R*3+2]=S,e[R*3]=T,e[R*3+1]=y,e[R*3+2]=M,t[R*4]=0,t[R*4+1]=w,t[R*4+2]=A,t[R*4+3]=C,n[R]=I,s[R]=x,r[R]=Math.random()}return{mesh:m,update(x,p,_,S,T,y,M,w,A,C,I){if(!I){if(h){for(let K=0;K<ai;K++)t[K*4]=t[K*4+1];h=!1}m.visible=!1;return}let R=p.position,L=p.rotation.y,U=Math.cos(L),O=Math.sin(L),V=O*_,D=U*_,H=Math.min(1,Math.max(0,(_-2)/14)),z=T>.3?2:0,$=z?T:S;for(b+=24*$*H*x;b>=1;){b-=1;let K=(l^=1)?1:-1,X=K*.67,ge=-1.28-Math.random()*.2,Ie=Math.random(),Ee=Math.random(),Me=1.6+1.6*Ie,Ze=z?.5+.7*Ee:.9+1*Ee,et=K*(.3+.6*Math.random());d(z,R.x+X*U+ge*O,R.y+.12,R.z-X*O+ge*U,V*.55-O*Me+et*U,Ze,D*.55-U*Me-et*O,z?.45+.3*Ie:.55+.35*Ie,.2+.1*Ee,z?.7+.35*Ee:.8+.4*Ee,.5*(.5+.5*H)*Math.min(1,$*1.5))}for(E+=(5+4*H)*y*x;E>=1;){E-=1;let K=Math.random();d(1,R.x-.42*U-1.78*O,R.y+.26,R.z+.42*O-1.78*U,V*.5-O*.8,.25+.2*K,D*.5-U*.8,1.3+.6*K,.14,.8+.4*Math.random(),.32*Math.min(1,y*1.5))}let ae=0,He=Math.exp(-Od[0]*x),we=Math.exp(-Od[1]*x),De=Math.exp(-Od[2]*x);for(let K=0;K<ai;K++){let X=K*4;if(t[X]>=t[X+1])continue;let ge=t[X]+=x,Ie=t[X+1];if(ge>=Ie)continue;let Ee=s[K],Me=Ee===0?He:Ee===1?we:De,Ze=K*3,et=i[Ze]-C.x,Re=i[Ze+1]-C.y,st=i[Ze+2]-C.z;if(et*et+Re*Re+st*st<20.25){t[X]=Ie;continue}e[Ze]*=Me,e[Ze+1]=e[Ze+1]*Me+VM[Ee]*x,e[Ze+2]*=Me,i[Ze]+=e[Ze]*x,i[Ze+1]=Math.max(R.y+.05,i[Ze+1]+e[Ze+1]*x),i[Ze+2]+=e[Ze+2]*x;let ee=ge/Ie,be=ae*4;c[be]=i[Ze],c[be+1]=i[Ze+1],c[be+2]=i[Ze+2],c[be+3]=t[X+2]+(t[X+3]-t[X+2])*Math.sqrt(ee),u[be]=n[K]*Math.min(1,ee*6)*(1-ee)*(1-ee),u[be+1]=Ee,u[be+2]=r[K],ae++}h=ae>0,m.visible=h,a.instanceCount=ae,h&&(f.uAmb.value.copy(M),f.uSun.value.copy(w),f.uTail.value.copy(A),f.uCam.value.copy(C))},shift(x,p){for(let _=0;_<ai;_++)i[_*3]-=x,i[_*3+2]-=p}}}var Ir=24,GM=55,WM=12;function Qg(){let i=[],e=new Float32Array(Ir*2*2),t=new Float32Array(Ir*2*3);for(let u=0;u<Ir;u++)if(e.set([u,-1,u,1],u*4),u<Ir-1){let f=u*2;i.push(f,f+1,f+2,f+1,f+3,f+2)}let n=new vt;n.setAttribute("position",new St(t,3)),n.setAttribute("aI",new St(e,2)),n.setIndex(i);let s=new Float32Array(Ir*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new ve},uTime:{value:0},uNoiseTex:Oe.uNoiseTex},o=new ht({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${Ir}]; uniform float uW; varying vec3 vW; varying float vSide;
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
      }`}),a=new ut(n,o);a.frustumCulled=!1,a.renderOrder=1,a.visible=!1;let c={};return{mesh:a,update(u,f,g,m,v,b,E,l){if(a.visible=b>.01,!!a.visible){for(let h=0;h<Ir;h++)u.at(f+GM+h*WM,c),s[h*4]=c.x-g,s[h*4+1]=c.y,s[h*4+2]=c.z-m,s[h*4+3]=c.h;r.uW.value=v*.85,r.uHot.value=b,r.uTime.value=E,r.uSky.value.copy(l)}}}}var zo=1.6;function e1(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,a=t?16:14,c=[4,Math.round(s*.4),Math.round(s*.65),s].filter((I,R,L)=>!R||I>L[R-1]),u=[s,Math.round((s+r)/2),r],f=(I,R)=>{let L=new os;return L.setAttribute("position",new Ye(I,3)),L.setIndex(R),L},g=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],m=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],v=new Float32Array(Js*4),b=new Float32Array(Js),E={uG:{value:v},uGM:{value:b},uGP:{value:new mt(0,1/zo,3.1,0)},uGQ:{value:new mt(0,1.05,3,0)},uRingD:{value:new mt(s,r,0,0)}},l=[],h=(I,R,L)=>{let U={uRing:{value:new mt(0,0,L?2*n:n,L)},uRingC:{value:new mt(0,0,0,0)}},O=f(...L?m:g);O.instanceCount=0;let V=new ut(O,Sm(U,E));V.frustumCulled=!1,V.castShadow=!1,V.receiveShadow=!1,V.visible=!1,l.push({mesh:V,u:U,dA:I,dB:R,size:L?2*n:n,W:L?a:o,last:R===s||R===r})};for(let I=0;I<c.length-1;I++)h(c[I],c[I+1],0);for(let I=0;I<u.length-1;I++)h(u[I],u[I+1],1);let d=new Int32Array(64).fill(-2147483648),x=new Float32Array(64),p=new Uint8Array(64),_=I=>{let R=I&63;if(d[R]!==I){d[R]=I;let L=I*zo,U=Zs(L),O=Pi(L),V=Ut(L).country,D=Math.min(1,Math.max(0,(V-.97)/.025))*(U?Math.min(1,Math.max(0,(Math.abs(L-U.s)-13)/7)):1)*(O?Math.min(1,Math.max(0,(Math.abs(L-O.s)-38)/10)):1);x[R]=D>0?3+4*Math.round(D*15):0,p[R]=V>0?1:0}return R},S=I=>x[_(I)],T=I=>p[_(I)],y={},M=NaN,w=NaN,A=NaN,C=0;return{meshes:l.map(I=>I.mesh),hide(){for(let I=0;I<l.length;I++)l[I].mesh.visible=!1},warm(I){for(let R of l)R.mesh.visible=I,I&&(R.u.uRing.value.y=1,R.u.uRingC.value.set(1,1,R.W,0),R.mesh.geometry.instanceCount=2)},update(I,R,L,U,O,V,D){let H=Math.floor((R-3)/zo);if(!T(H)&&!T(H+Js-1))C=0;else{if(H!==M||U!==w||O!==A){M=H,w=U,A=O,C=0;for(let z=0;z<Js;z++)I.at((H+z)*zo,y),v[z*4]=y.x-U,v[z*4+1]=y.y,v[z*4+2]=y.z-O,v[z*4+3]=y.h,C|=b[z]=S(H+z)}E.uGP.value.set(H*zo,1/zo,V,R),E.uGQ.value.set(L,D,3,0)}for(let z=0;z<l.length;z++){let $=l[z];if(!C){$.mesh.visible=!1;continue}let ae=Math.floor((R+$.dA)/$.size),He=Math.floor((R+$.dB)/$.size)+($.last?1:0),we=D*$.dB+3,De=V+2.6,K=Math.min($.W,Math.max(0,we-(De+L))),X=Math.min($.W,Math.max(0,we-(De-L))),ge=K>0?Math.ceil(K/$.size)+1:0,Ie=X>0?Math.ceil(X/$.size)+1:0;$.u.uRing.value.x=ae,$.u.uRing.value.y=He-ae,$.u.uRingC.value.set(ge,Ie,$.W,0),$.mesh.geometry.instanceCount=(He-ae)*(ge+Ie),$.mesh.visible=$.mesh.geometry.instanceCount>0}}}}var ko=72;function XM(){let i=[],e=[],t=(s,r,o,a,c,u)=>{i.push(...s,...r,...o),e.push(a,c,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new vt;return n.setAttribute("position",new Ye(i,3)),n.setAttribute("aWing",new Ye(e,1)),n}function t1(){let i=XM(),e=new Cn(new Float32Array(ko*3),3),t=new Cn(new Float32Array(ko*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new ht({side:yn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:ie.fog},uFogD:{value:.002},uCam:{value:new k}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new Wi(i,n,ko);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},a=new Ke,c=new mn,u=new $n(0,0,0,"YXZ"),f=new k,g=new k,m=()=>r.reduce((E,l)=>E+l.birds.length,0);function v(E,l,h,d){let x=E==="small"?6+Math.floor(Math.random()*7):E==="crow"?3+Math.floor(Math.random()*5):4;if(m()+x>ko)return;let p=45+Math.random()*85,_=(Math.random()-.5)*120,S=Math.random()<.5?1:-1,T=new k().copy(l).addScaledVector(h,p).addScaledVector(d,_-S*75);T.y=l.y+(E==="crow"?18+Math.random()*24:10+Math.random()*18);let y=E==="small"?11+Math.random()*4:8+Math.random()*3,M=new k().copy(d).multiplyScalar(S*y).addScaledVector(h,(Math.random()-.3)*y*.6),w=E==="small"?.8:1.45,A=Array.from({length:x},(C,I)=>({off:new k((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:E==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:E,c:T,vel:M,birds:A,size:w,life:60})}function b(E,l,h,d){if(r.some(_=>_.kind==="gull")||m()+4>ko)return;let x=new k().copy(E).addScaledVector(l,70).addScaledVector(h,-d*45);x.y=E.y+18;let p=Array.from({length:4},(_,S)=>({off:new k,ph:Math.random()*6.28,fq:5.5,w:S/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:x,vel:new k,birds:p,size:1.25,life:1e9})}return{mesh:s,update(E,l,h,d,x,p,_,S,T){n.uniforms.uTime.value=l,n.uniforms.uCam.value.copy(h);let y=_>.35&&S<.3,M=ie.warm>.25&&ie.sunEl<.6&&_>.2;y&&(o.small-=E)<0&&(o.small=22+Math.random()*35,p.coast<.6&&v("small",h,d,x)),(M||y&&p.city+p.country>.6&&Math.random()<4e-4)&&(o.crow-=E)<0&&(o.crow=M?14+Math.random()*18:60,v("crow",h,d,x)),p.coast>.6&&y&&b(h,d,x,1);let w=[.1+.08*_,.11+.09*_,.15+.1*_],A=0;for(let C=r.length-1;C>=0;C--){let I=r[C];if(I.kind==="gull"?(I.c.lerp(f.copy(T).addScaledVector(d,60).addScaledVector(x,-42).setY(T.y+16),Math.min(1,E*.25)),(p.coast<.4||!y)&&(I.life=Math.min(I.life,8),I.c.y+=E*6)):I.c.addScaledVector(I.vel,E),I.life-=E,I.life<0||I.kind!=="gull"&&I.c.distanceTo(h)>300){r.splice(C,1);continue}for(let R of I.birds){if(A>=ko)break;let L,U,O,V;I.kind==="gull"?(R.w+=E*(14/R.r),L=I.c.x+Math.cos(R.w)*R.r,O=I.c.z+Math.sin(R.w)*R.r,U=I.c.y+R.h+Math.sin(l*.4+R.ph)*2,V=Math.atan2(-Math.sin(R.w),Math.cos(R.w))):(L=I.c.x+R.off.x+Math.sin(l*.7+R.ph)*1.2,U=I.c.y+R.off.y+Math.sin(l*1.1+R.ph)*.6,O=I.c.z+R.off.z,V=Math.atan2(I.vel.x,I.vel.z)),u.set(0,V,Math.sin(l+R.ph)*.15),c.setFromEuler(u),g.setScalar(I.size),a.compose(f.set(L,U,O),c,g),s.setMatrixAt(A,a);let D=I.kind==="gull"?[.92*(.5+.5*_),.93*(.5+.5*_),.95*(.5+.5*_)]:I.kind==="crow"?[.05,.05,.07]:w;e.setXYZ(A,D[0],D[1],D[2]),t.setXY(A,R.fq,R.ph),A++}}s.count=A,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(E){n.uniforms.uFogD.value=E},shift(E,l){for(let h of r)h.c.x-=E,h.c.z-=l}}}var bl=new k;function Ni(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;bl.copy(e),bl[n]=0,bl.normalize();let u=.5*o/(o+a),f=1-bl.angleTo(i)/c;return Math.sign(bl[t])===1?f*u:a/(o+a)+u+u*(1-f)}var On=class i extends Kt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new k,u=new k,f=new k(e,t,n).divideScalar(2).subScalar(r),g=this.attributes.position.array,m=this.attributes.normal.array,v=this.attributes.uv.array,b=g.length/6,E=new k,l=.5/o;for(let h=0,d=0;h<g.length;h+=3,d+=2)switch(c.fromArray(g,h),u.copy(c),u.x-=Math.sign(u.x)*l,u.y-=Math.sign(u.y)*l,u.z-=Math.sign(u.z)*l,u.normalize(),g[h+0]=f.x*Math.sign(c.x)+u.x*r,g[h+1]=f.y*Math.sign(c.y)+u.y*r,g[h+2]=f.z*Math.sign(c.z)+u.z*r,m[h+0]=u.x,m[h+1]=u.y,m[h+2]=u.z,Math.floor(h/b)){case 0:E.set(1,0,0),v[d+0]=Ni(E,u,"z","y",r,n),v[d+1]=1-Ni(E,u,"y","z",r,t);break;case 1:E.set(-1,0,0),v[d+0]=1-Ni(E,u,"z","y",r,n),v[d+1]=1-Ni(E,u,"y","z",r,t);break;case 2:E.set(0,1,0),v[d+0]=1-Ni(E,u,"x","z",r,e),v[d+1]=Ni(E,u,"z","x",r,n);break;case 3:E.set(0,-1,0),v[d+0]=1-Ni(E,u,"x","z",r,e),v[d+1]=1-Ni(E,u,"z","x",r,n);break;case 4:E.set(0,0,1),v[d+0]=1-Ni(E,u,"x","y",r,e),v[d+1]=1-Ni(E,u,"y","x",r,t);break;case 5:E.set(0,0,-1),v[d+0]=Ni(E,u,"x","y",r,e),v[d+1]=1-Ni(E,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function oh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new vt,u=0;for(let f=0;f<i.length;++f){let g=i[f],m=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let v in g.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(g.attributes[v]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let v in g.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[v]===void 0&&(o[v]=[]),o[v].push(g.morphAttributes[v])}if(e){let v;if(t)v=g.index.count;else if(g.attributes.position!==void 0)v=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,v,f),u+=v}}if(t){let f=0,g=[];for(let m=0;m<i.length;++m){let v=i[m].index;for(let b=0;b<v.count;++b)g.push(v.getX(b)+f);f+=i[m].attributes.position.count}c.setIndex(g)}for(let f in r){let g=n1(r[f]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,g)}for(let f in o){let g=o[f][0].length;if(g!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let m=0;m<g;++m){let v=[];for(let E=0;E<o[f].length;++E)v.push(o[f][E][m]);let b=n1(v);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(b)}}}return c}function n1(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let f=i[u];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}let o=new e(r),a=new St(o,t,n),c=0;for(let u=0;u<i.length;++u){let f=i[u];if(f.isInterleavedBufferAttribute){let g=c/t;for(let m=0,v=f.count;m<v;m++)for(let b=0;b<t;b++){let E=f.getComponent(m,b);a.setComponent(m+g,b,E)}}else o.set(f.array,c);c+=f.count*t}return s!==void 0&&(a.gpuType=s),a}function qM(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new ni(i);return n.colorSpace=Gt,n}var zd=4;function YM(){let t=document.createElement("canvas");t.width=128*zd,t.height=128;let n=t.getContext("2d"),s=(o,a,c,u,f)=>{n.beginPath(),n.moveTo(o+f,a),n.arcTo(o+c,a,o+c,a+u,f),n.arcTo(o+c,a+u,o,a+u,f),n.arcTo(o,a+u,o,a,f),n.arcTo(o,a,o+c,a,f),n.closePath(),n.fill()};for(let o=0;o<zd;o++){let a=o*128,c=n.createLinearGradient(0,0,0,128);c.addColorStop(0,"#9fbfe6"),c.addColorStop(.45,"#4a6690"),c.addColorStop(1,"#1d2638"),n.fillStyle=c,n.fillRect(a,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(a+14,84,30,50,9),s(a+84,84,30,50,9),n.fillRect(a+6,112,116,16),s(a+52,92,24,40,7)),o===2&&(s(a+62,66,44,70,12),n.fillRect(a+50,118,70,10)),o===3&&(s(a+70,78,40,60,11),n.fillRect(a+56,120,64,8)),n.save(),n.beginPath(),n.rect(a,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(a+40,0),n.lineTo(a+68,0),n.lineTo(a+20,128),n.lineTo(a-8,128),n.fill(),n.restore()}let r=new ni(t);return r.colorSpace=Gt,r}function i1(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/zd)}return i}function s1(){let i=new on,e=new on,t=new on;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new mt,new mt],s=new ve(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=ad(new hn({color:"#ffffff",vertexColors:!0,gradientMap:al}),.85,.06,"paint-l",r),a=(ee,be)=>Object.assign(new ve(ee),{gloss:be}),c=a("#9fd8c8",1),u=a("#eeece4",.6),f=a("#2a2c33",.35),g=a("#1b1c20",.04),m=a("#c8ccd2",.8),v=a("#d4d8de",1.3),b=(ee,be)=>{let j=ee.attributes.position.count,se=new Float32Array(j*4);for(let ne=0;ne<j;ne++)se.set([be.r,be.g,be.b,be.gloss],ne*4);return ee.setAttribute("color",new Ye(se,4)),ee},E=ad(new hn({color:"#ffffff",map:YM(),gradientMap:fi}),1.2,.08,"glass-l",r),l=new hn({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:fi}),h=new hn({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:fi}),d=new hn({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:fi}),x=new hn({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:fi}),p=new hn({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:fi}),_=new gn({map:qM()}),S=new Map,T=[],y=!1,M=new Ke,w=new $n,A=new mn,C=new k(1,1,1),I=(ee,be,j,se,ne,ue=0,B=0,xe=0)=>{let te=ee.index?ee.toNonIndexed():ee;if(be.isColor&&(b(te,be),be=o),w.set(ue,B,xe),A.setFromEuler(w),M.compose(new k(j,se,ne),A,C),te.applyMatrix4(M),y){T.push(te);return}S.has(be)||S.set(be,[]),S.get(be).push(te)},R=a("#16171b",0),L=a("#2b3134",.15),U=a("#b9bfc6",.9),O=a("#4d5258",.4),V=a("#9a1c22",.6),D=1.7,H=.745,z=.3,$=(ee,be,j)=>{let se=Math.min(1,Math.max(0,(j-ee)/(be-ee)));return se*se*(3-2*se)},ae=ee=>ee<.8?1.8:ee<1.22?1.8-.6*$(.8,1.22,ee):1.2-.1*((ee-1.22)/(D-1.22))**2,He=ee=>1-.085*$(1.15,1.8,ee),we=(ee,be)=>{let j=H-be,se=z+be*.6,ne=ae(ee)-be*(ee<0?.4:1),ue=Math.max(.05,.1-be*.5),B=Math.max(.06,(ee<.8?.17:.13)-be*.5),xe=[[0,se],[(j-ue)*.5,se],[j-ue,se]];for(let N=1;N<4;N++){let P=-Math.PI/2+N/8*Math.PI;xe.push([j-ue+ue*Math.cos(P),se+ue+ue*Math.sin(P)])}for(let N=0;N<=8;N++)xe.push([j,se+ue+N/8*(ne-B-se-ue)]);for(let N=1;N<5;N++){let P=N/10*Math.PI;xe.push([j-B+B*Math.cos(P),ne-B+B*Math.sin(P)])}xe.push([j-B,ne],[(j-B)*.5,ne],[0,ne]);let te=xe.map(([N,P])=>[N*He(P),P]);for(let N=xe.length-2;N>0;N--)te.push([-te[N][0],te[N][1]]);return te};{let ee=[];for(let G=0;G<=6;G++){let q=G/6*Math.PI/2;ee.push([-D+.2*(1-Math.cos(q)),.2*(1-Math.sin(q))])}for(let G=-D+.2+.12;G<.78;G+=.13)ee.push([G,0]);for(let G=.8;G<1.225;G+=.06)ee.push([G,0]);for(let G of[1.3,1.39])ee.push([G,0]);for(let G=6;G>=0;G--){let q=G/6*Math.PI/2;ee.push([D-.22*(1-Math.cos(q)),.22*(1-Math.sin(q))])}let se=[],ne=[],ue=ee.map(([G,q])=>we(G,q)),B=ue[0].length;ue.forEach((G,q)=>G.forEach(([Q,ce])=>se.push(Q,ce,ee[q][0])));for(let G=0;G<ue.length-1;G++)for(let q=0;q<B;q++){let Q=G*B+q,ce=G*B+(q+1)%B,de=Q+B,le=ce+B;ne.push(Q,ce,de,ce,le,de)}for(let[G,q]of[[0,-1],[ue.length-1,1]]){let Q=se.length/3,ce=ue[G];se.push(0,(ce[0][1]+ce[B/2|0][1])/2,ee[G][0]);for(let de=0;de<B;de++){let le=G*B+de,fe=G*B+(de+1)%B;q<0?ne.push(Q,fe,le):ne.push(Q,le,fe)}}let xe=new vt;xe.setAttribute("position",new Ye(se,3)),xe.setIndex(ne),xe.computeVertexNormals();{let G=xe.attributes.normal,q=B*10+12;if(G.getX(q)<0){for(let Q=0;Q<ne.length;Q+=3){let ce=ne[Q+1];ne[Q+1]=ne[Q+2],ne[Q+2]=ce}xe.setIndex(ne),xe.computeVertexNormals()}}xe.setAttribute("uv",new Ye(new Float32Array(se.length/3*2),2));let te=xe.toNonIndexed(),N=te.attributes.position,P=new Float32Array(N.count*4);for(let G=0;G<N.count;G+=3){let q=(N.getY(G)+N.getY(G+1)+N.getY(G+2))/3,Q=(N.getZ(G)+N.getZ(G+1)+N.getZ(G+2))/3,ce=q>1.665&&Q<.84&&Q>-1.52?u:c;for(let de=0;de<3;de++)P.set([ce.r,ce.g,ce.b,ce.gloss],(G+de)*4)}te.setAttribute("color",new Ye(P,4)),I(te,o,0,0,0)}I(new On(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let De=(ee,be,j,se,ne)=>{let ue=new vt,B=[],xe=[],te=[],N=[];for(let P=0;P<=j;P++)for(let G=0;G<=be;G++){let q=G/be,Q=P/j,ce=ee(q,Q);B.push(ce[0]+ce[3]*.004,ce[1]+ce[4]*.004,ce[2]+ce[5]*.004),xe.push(ce[3],ce[4],ce[5]),te.push(q,Q)}for(let P=0;P<j;P++)for(let G=0;G<be;G++){let q=P*(be+1)+G,Q=q+1,ce=q+be+1,de=ce+1;N.push(q,Q,de,q,de,ce)}ue.setAttribute("position",new Ye(B,3)),ue.setAttribute("normal",new Ye(xe,3)),ue.setAttribute("uv",new Ye(te,2)),ue.setIndex(N);{let P=new k().fromArray(B,0),G=new k().fromArray(B,3),q=new k().fromArray(B,(be+1)*3),Q=new k().fromArray(xe,0);if(G.sub(P).cross(q.sub(P)).dot(Q)<0){for(let ce=0;ce<N.length;ce+=3){let de=N[ce+1];N[ce+1]=N[ce+2],N[ce+2]=de}ue.setIndex(N)}}return i1(ue,se,ne)},K=ee=>{let j=H*(He(ee+.01)-He(ee-.01))/.02,se=Math.hypot(1,j);return[1/se,-j/se]},X=ee=>{let be=.8,j=1.22;for(let se=0;se<24;se++){let ne=(be+j)/2;ae(ne)>ee?be=ne:j=ne}return be};for(let ee of[-1,1]){let be=ee<0,j=(se,ne,ue)=>I(De((B,xe)=>{let te=1.21+xe*.39,N=ee>0?ne(te)+(se(te)-ne(te))*B:se(te)+(ne(te)-se(te))*B,[P,G]=K(te);return[ee*H*He(te),te,N,ee*P,G,0]},1,6,ue,!1),E,0,0,0);j(()=>.06,se=>X(se)-.07,2),j(()=>-.72,()=>-.08,3),j(()=>-1.42,()=>-.84,0),I(new Kt(.012,.41,.07),f,ee*.731,1.405,-.01,0,0,-ee*.07),I(new Kt(.014,.022,2.42),R,ee*.748,1.2,-.26);for(let[se,ne]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new Kt(.008,1.17-ne,.012),L,ee*.749,(ne+1.17)/2,se);I(new Kt(.02,.028,.13),L,ee*.752,1.06,.06),I(new Kt(.02,.028,.13),L,ee*.752,1.06,-.2),I(new Kt(.01,.022,.62),L,ee*.749,1.155,-1.08);for(let se of[1.12,-1.12])I(new pr(.345,18,0,Math.PI),R,ee*.749,.29,se,0,ee*Math.PI/2,0),I(new Ua(.35,.024,5,18,Math.PI),f,ee*.752,.29,se,0,ee*Math.PI/2,0);I(new On(.1,.12,.2,2,.04),c,ee*.83,1.24,1.02),I(new Kt(.07,.035,.05),f,ee*.775,1.2,1.03),I(new On(.16,.4,.05,3,.075),v,ee*.56,.95,-1.703),I(new On(.13,.37,.05,3,.062),l,ee*.56,.95,-1.716),I(new On(.036,.27,.02,2,.016),h,ee*.56,.95,-1.742),I(new On(.11,.06,.04,2,.02),x,ee*.56,.69,-1.707)}{let ee=new po,be=.52,j=1.15,se=1.66,ne=.07;ee.moveTo(-be+ne,j),ee.lineTo(be-ne,j),ee.absarc(be-ne,j+ne,ne,-Math.PI/2,0),ee.lineTo(be,se-ne),ee.absarc(be-ne,se-ne,ne,0,Math.PI/2),ee.lineTo(-be+ne,se),ee.absarc(-be+ne,se-ne,ne,Math.PI/2,Math.PI),ee.lineTo(-be,j+ne),ee.absarc(-be+ne,j+ne,ne,Math.PI,Math.PI*1.5);let ue=new Da(ee,6),B=ue.attributes.position,xe=ue.attributes.uv;for(let te=0;te<B.count;te++){let N=B.getX(te),P=B.getY(te),G=(P-j)/(se-j);xe.setXY(te,(N+be)/(2*be),G),B.setX(te,N*(1-.08*G))}I(i1(ue,1),E,0,0,-D-.004,0,Math.PI,0)}I(new On(.36,.04,.03,2,.014),d,0,1.69,-1.712),I(De((ee,be)=>{let j=1.19-be*.36,se=ae(j),ne=.56-.07*be,ue=.005,B=(ae(j+ue)-ae(j-ue))/(2*ue),xe=Math.hypot(1,B);return[(ee*2-1)*ne,se,j,0,1/xe,-B/xe]},2,7,0,!1),E,0,0,0),I(new On(.46,.25,.012,2,.05),a("#86bdb0",.6),0,.73,-1.701),I(new nn(.34,.17),_,0,.72,-1.709,0,Math.PI,0),I(new On(.25,.034,.03,2,.013),v,0,.9,-1.708);for(let ee of[-1,1])I(new Kt(.01,.56,.006),L,ee*.47,.85,-1.703);I(new Kt(.95,.01,.006),L,0,.565,-1.703),I(new On(1.5,.2,.26,3,.08),c,0,.44,-1.6),I(new On(1.38,.08,.22,2,.03),f,0,.33,-1.61);for(let ee of[-1,1])I(new Kt(.13,.035,.01),V,ee*.56,.44,-1.731);I(new Ri(.036,.036,.12,12),v,.46,.29,-1.68,Math.PI/2,0,0),I(new Ri(.024,.024,.124,10),R,.46,.29,-1.68,Math.PI/2,0,0);for(let ee of[-1,1])I(new On(.4,.26,.04,2,.06),f,ee*.42,.85,1.702),I(new Ri(.105,.105,.03,16),p,ee*.46,.85,1.72,Math.PI/2,0,0),I(new Ri(.055,.055,.03,12),p,ee*.3,.85,1.718,Math.PI/2,0,0),I(new On(.1,.06,.04,2,.015),x,ee*.52,.66,1.705),I(new Kt(.46,.014,.014),R,ee*.25,1.215,1.2,-.3,ee*.12,0);I(new On(.36,.12,.03,2,.03),R,0,.84,1.704);for(let ee=0;ee<3;ee++)I(new Kt(.32,.012,.012),L,0,.805+ee*.035,1.722);I(new On(1.52,.24,.22,2,.07),f,0,.44,1.62),I(new Kt(.7,.07,.02),R,0,.4,1.732),I(new Kt(.34,.17,.01),a("#f0cc38",.3),0,.62,1.733),I(new Kt(.3,.05,.004),a("#2f5a2f",.1),0,.6,1.739),y=!0;for(let[ee,be]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new Ri(.29,.29,.19,24),g,ee,.29,be,0,0,Math.PI/2),I(new Ri(.195,.195,.194,20),U,ee,.29,be,0,0,Math.PI/2),I(new Ri(.155,.155,.198,16),O,ee,.29,be,0,0,Math.PI/2);for(let j=0;j<5;j++){let se=j/5*Math.PI*2+.3;I(new Kt(.202,.03,.15),U,ee,.29-.085*Math.sin(se),be+.085*Math.cos(se),se,0,0)}I(new Ri(.045,.045,.206,10),m,ee,.29,be,0,0,Math.PI/2)}y=!1;for(let[ee,be]of S){let j=new ut(oh(be),ee);j.castShadow=ee!==E&&ee!==_&&ee!==d&&ee!==p&&ee!==h,j.receiveShadow=!0,t.add(j)}{let ee=new ut(oh(T),o);ee.castShadow=ee.receiveShadow=!0,i.add(ee)}{let j=document.createElement("canvas");j.width=48,j.height=96;let se=j.getContext("2d"),ne=se.createImageData(48,96);for(let B=0;B<96;B++)for(let xe=0;xe<48;xe++){let te=Math.max(0,Math.abs((xe+.5)/48-.5)*2.1-.62),N=Math.max(0,Math.abs((B+.5)/96-.5)*2.05-.78),P=Math.hypot(te/.42,N/.24),G=Math.max(0,1-P),q=(B*48+xe)*4;ne.data[q]=ne.data[q+1]=ne.data[q+2]=Math.round(255*G*G*(3-2*G)),ne.data[q+3]=255}se.putImageData(ne,0,0);let ue=new ut(new nn(2.2,4.1),new gn({color:0,alphaMap:new ni(j),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));ue.rotation.x=-Math.PI/2,ue.position.y=.03,ue.renderOrder=3,i.add(ue)}let ge=(()=>{let j=document.createElement("canvas");j.width=16,j.height=64;let se=j.getContext("2d"),ne=se.createImageData(16,64);for(let ue=0;ue<64;ue++)for(let B=0;B<16;B++){let xe=1-(ue+.5)/64,te=((B+.5)/16-.5)*2,N=Math.exp(-te*te*5)*Math.min(1,xe/.06)*Math.pow(1-xe,1.6)*(.78+.22*Math.sin(xe*31+te*2)),P=(ue*16+B)*4;ne.data[P]=ne.data[P+1]=ne.data[P+2]=Math.round(255*Math.max(0,N)),ne.data[P+3]=255}return se.putImageData(ne,0,0),new gn({map:new ni(j),color:16726576,transparent:!0,opacity:0,blending:Xi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let ee=[];for(let j of[-.56,.56]){let se=new nn(.22,1.5);se.rotateX(-Math.PI/2),se.translate(j,.035,-1.72-.75),ee.push(se)}let be=new ut(oh(ee),ge);be.renderOrder=3,be.visible=!1,i.add(be),ge.mesh=be}let Ie=new on;Ie.position.set(.02,1.19,-1.716),t.add(Ie);let Ee=new Kt(.52,.026,.02);Ee.translate(.27,0,0);let Me=new ut(b(Ee,f),o);Me.rotation.z=.18,Ie.add(Me);let Ze=0,et=new ka(16773328,0,70,.55,.65,1.2);et.position.set(0,.8,1.6),et.target.position.set(0,0,18),t.add(et,et.target);let Re={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},st=(ee,be)=>be*Math.tanh(ee/be);return{group:i,lamps:n,lampCol:s,head:et,update(ee,be,j,se=0,ne=null,ue=0){if(ne){let B=st(-ne.lat*.016,.045),xe=st(-ne.lon*.008,.03);Re.rv+=((B-Re.roll)*55-Re.rv*8)*ee,Re.roll+=Re.rv*ee,Re.pv+=((xe-Re.pitch)*60-Re.pv*9)*ee+ne.kick,Re.pitch+=Re.pv*ee,Re.yv+=((ne.road-Re.y)*85-Re.yv*8)*ee+ne.jolt,Re.y+=Re.yv*ee,e.rotation.set(Re.pitch,0,Re.roll),e.position.y=.35+Re.y}if(Re.br+=((ne?ne.brake:0)-Re.br)*Math.min(1,ee*14),l.emissiveIntensity=.35+j*3.2+Re.br*(1.7+j*2),d.emissiveIntensity=Re.br*(2.4+j*1.6),h.emissiveIntensity=1+j*3+Re.br*(2+j*2),ge.opacity=ue*Math.min(1,.22+l.emissiveIntensity*.22),ge.mesh.visible=ge.opacity>.01,se>.15||Ze%2.6>.01){Ze+=ee;let B=Ze%2.6/2.6,xe=N=>N*N*(3-2*N),te=B<.25?xe(B/.25):B<.5?xe(1-(B-.25)/.25):0;Me.rotation.z=.18+te*2.5,se<=.15&&B>=.5&&(Ze=0)}et.intensity=j*60,p.emissiveIntensity=.15+j*2.6}}}var Ho={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ZM=new Vs(-1,1,1,-1,0,1),kd=class extends vt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}},$M=new kd,nr=class{constructor(e){this._mesh=new ut($M,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ZM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vo=class extends Ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=br.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new nr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ml=class extends Ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ah=class extends Ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var lh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vo(Ho),this.copyPass.material.blending=ii,this.timer=new Ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ml!==void 0&&(o instanceof Ml?n=!0:o instanceof ah&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ch=class extends Ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ve}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var r1={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Go=class i extends Ei{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,o,{type:Rn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let g=new Wt(r,o,{type:Rn,depthBuffer:!1});g.texture.name="UnrealBloomPass.h"+f,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);let m=new Wt(r,o,{type:Rn,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=r1;this.highPassUniforms=br.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=br.clone(Ho.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:Ho.vertexShader,fragmentShader:Ho.fragmentShader,premultipliedAlpha:!0,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ve,this._oldClearAlpha=1,this._basic=new gn,this._fsQuad=new nr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],c=o+1<e?t[o+1]:0,u=a+c;s.push((o*a+(o+1)*c)/u),r.push(u)}return new ht({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Go.BlurDirectionX=new Pe(1,0);Go.BlurDirectionY=new Pe(0,1);var Hd=class extends Ei{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new Wt(4,4,{type:Rn,depthBuffer:!1,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),this.mat=new ht({uniforms:{tDiffuse:{value:null},uTexel:{value:new Pe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new nr(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},KM={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Pe(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Pe(1/1280,1/720)},uLo:{value:new k(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function o1(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Pe),a=new Wt(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:Rn,samples:n}),c=new lh(i,a);c.addPass(new ch(e,t));let u=new Hd;c.addPass(u);let f=new Go(new Pe(o.x*r*.5,o.y*r*.5),.42,.55,.86);c.addPass(f);let g=new Vo(KM);g.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},g.material.toneMapped=!1,c.addPass(g);let m=c.render.bind(c);return c.render=v=>{g.uniforms.toneMappingExposure.value=i.toneMappingExposure,m(v)},{composer:c,bloom:f,grade:g,refl:u}}function a1(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let j=0;j<2;j++){let se=s.getChannelData(j);for(let ne=0;ne<n;ne++)se[ne]=(Math.random()*2-1)*Math.pow(1-ne/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,a.Q.value=.3;let c=e.createGain();c.gain.value=.11,a.connect(c),c.connect(t),c.connect(r);let u=(j,se)=>{let ne=e.createBuffer(1,e.sampleRate*j,e.sampleRate),ue=ne.getChannelData(0),B=0;for(let xe=0;xe<ue.length;xe++)se?(B=(B+.02*(Math.random()*2-1))/1.02,ue[xe]=B*3.5):ue[xe]=Math.random()*2-1;return ne},f=(j,se,ne)=>{let ue=e.createBufferSource();ue.buffer=j,ue.loop=!0;let B=e.createBiquadFilter();B.type=se,B.frequency.value=ne;let xe=e.createGain();return xe.gain.value=0,ue.connect(B),B.connect(xe),xe.connect(t),ue.start(),{f:B,g:xe}},g=f(u(2,!0),"lowpass",400),m=f(u(3,!1),"lowpass",700);m.g.connect(r);let v=f(u(2,!1),"bandpass",5200);v.f.Q.value=6;let b=f(u(2,!0),"lowpass",240),E=f(u(3,!1),"bandpass",2600);E.f.Q.value=.35;let l=f(u(2,!0),"lowpass",520),h=f(u(2,!1),"bandpass",1500);h.f.Q.value=.7;let d=e.createBiquadFilter(),x=e.createGain(),p=e.createOscillator(),_=e.createOscillator(),S=e.createGain();p.type="sawtooth",_.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,x.gain.value=0,S.gain.value=.5,p.connect(d),_.connect(S),S.connect(d),d.connect(x),x.connect(t),p.start(),_.start();let T=f(u(3,!1),"bandpass",750);T.f.Q.value=.6;let y=f(u(3,!0),"lowpass",420),M=f(u(2,!0),"lowpass",140),w=u(.03,!1),A=0;function C(j,se){let ne=e.createBufferSource(),ue=e.createBiquadFilter(),B=e.createGain();ne.buffer=w,ue.type="bandpass",ue.frequency.value=1800+Math.random()*2600,ue.Q.value=1.2,B.gain.setValueAtTime(se*(.02+Math.random()*.03),j),B.gain.exponentialRampToValueAtTime(1e-4,j+.03),ne.connect(ue),ue.connect(B),B.connect(t),ne.start(j),ne.stop(j+.04)}let I=0,R=0;function L(j,se){let ne=e.createOscillator(),ue=e.createOscillator(),B=e.createGain(),xe=e.createBiquadFilter();xe.type="bandpass",xe.frequency.value=1150,xe.Q.value=2.2,ne.type="square",ne.frequency.value=745,ue.type="triangle",ue.frequency.value=1490,B.gain.setValueAtTime(0,j),B.gain.linearRampToValueAtTime(.085*se,j+.004),B.gain.exponentialRampToValueAtTime(1e-4,j+.3),ne.connect(xe),ue.connect(xe),xe.connect(B),B.connect(t),B.connect(r),ne.start(j),ue.start(j),ne.stop(j+.33),ue.stop(j+.33)}function U(j,se){let ne=e.createOscillator(),ue=e.createGain();ne.type="sine",ne.frequency.setValueAtTime(110,j),ne.frequency.exponentialRampToValueAtTime(48,j+.12),ue.gain.setValueAtTime(1e-4,j),ue.gain.linearRampToValueAtTime(.22*se,j+.006),ue.gain.exponentialRampToValueAtTime(1e-4,j+.17),ne.connect(ue),ue.connect(t),ne.start(j),ne.stop(j+.2)}let O=e.createGain();O.gain.value=1,O.connect(t);let V=e.createGain();V.gain.value=.35,O.connect(V),V.connect(r);let D=(j=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return O;let se=e.createStereoPanner();return se.pan.value=j,se.connect(O),se};function H(j,se,ne,ue,B,xe,te="sine",N=0){let P=e.createOscillator(),G=e.createGain();if(P.type=te,P.frequency.setValueAtTime(se,j),P.frequency.exponentialRampToValueAtTime(ne,j+ue),N){let q=e.createOscillator(),Q=e.createGain();q.frequency.value=N,Q.gain.value=se*.012,q.connect(Q),Q.connect(P.frequency),q.start(j),q.stop(j+ue+.05)}return G.gain.setValueAtTime(1e-4,j),G.gain.linearRampToValueAtTime(B,j+Math.min(.04,ue*.25)),G.gain.setValueAtTime(B,j+ue*.7),G.gain.exponentialRampToValueAtTime(1e-4,j+ue),P.connect(G),G.connect(xe),P.start(j),P.stop(j+ue+.02),G}function z(j,se){let ne=D(),ue=2+Math.floor(Math.random()*4),B=3200+Math.random()*1500;for(let xe=0;xe<ue;xe++){let te=j+xe*(.09+Math.random()*.07);H(te,B,B*(1.2+Math.random()*.3),.06,se*.022,ne)}}function $(j,se){let ne=D();H(j,1120,1390,1,se*.03,ne,"sine",5.5),H(j+1.15,2350,2150,.14,se*.03,ne),H(j+1.32,1700,1520,.13,se*.028,ne),H(j+1.5,2750,2480,.36,se*.032,ne)}function ae(j,se){let ne=D(),ue=1+Math.floor(Math.random()*3);for(let B=0;B<ue;B++){let xe=j+B*.48,te=e.createOscillator(),N=e.createBiquadFilter(),P=e.createGain();te.type="sawtooth",te.frequency.setValueAtTime(560,xe),te.frequency.exponentialRampToValueAtTime(420,xe+.32),N.type="bandpass",N.frequency.value=1150,N.Q.value=1.6,P.gain.setValueAtTime(1e-4,xe),P.gain.linearRampToValueAtTime(se*.03,xe+.03),P.gain.exponentialRampToValueAtTime(1e-4,xe+.36),te.connect(N),N.connect(P),P.connect(ne),te.start(xe),te.stop(xe+.4)}}function He(j,se){let ne=D(),ue=2+Math.floor(Math.random()*2);for(let B=0;B<ue;B++)H(j+B*.42,1750,1150,.36,se*.022,ne,"triangle",11)}function we(j,se){let ne=D(),ue=e.createOscillator(),B=e.createBiquadFilter(),xe=e.createGain(),te=240+Math.random()*220,N=5+Math.floor(Math.random()*4);ue.type="square",ue.frequency.value=te,B.type="bandpass",B.frequency.value=te*2.4,B.Q.value=3,xe.gain.setValueAtTime(1e-4,j);for(let P=0;P<N;P++){let G=j+P*.038;xe.gain.linearRampToValueAtTime(se*.014,G+.008),xe.gain.linearRampToValueAtTime(1e-4,G+.028)}ue.connect(B),B.connect(xe),xe.connect(ne),ue.start(j),ue.stop(j+N*.038+.05)}function De(j,se){let ne=D(),ue=4300+Math.random()*700;for(let B=0;B<3;B++)H(j+B*.055,ue,ue*1.01,.035,se*.009,ne)}function K(j,se){let ne=D(0);for(let[ue,B,xe]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let te=e.createOscillator(),N=e.createGain();te.type="sine",te.frequency.value=ue,te.detune.value=(Math.random()-.5)*8,N.gain.setValueAtTime(1e-4,j),N.gain.linearRampToValueAtTime(se*.05*B,j+.03),N.gain.exponentialRampToValueAtTime(1e-4,j+xe),te.connect(N),N.connect(ne),te.start(j),te.stop(j+xe+.1)}}function X(j,se){let ne=D();for(let ue of[j,j+.22])H(ue,2650,2600,.5,se*.018,ne),H(ue,3950,3900,.35,se*.008,ne)}let ge={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ie=j=>j>1e-4?-Math.log(1-Math.random()*.98)/j:1e9,Ee=j=>440*Math.pow(2,(j-69)/12),Me=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Ze=[72,74,76,79,81,84,86,88],et=0,Re=e.currentTime+.2,st=e.currentTime+3;function ee(j){let se=Me[et++%Me.length],ne=11;for(let ue of se)for(let B of[-5,5]){let xe=e.createOscillator(),te=e.createGain();xe.type=B<0?"sine":"triangle",xe.frequency.value=Ee(ue),xe.detune.value=B,te.gain.setValueAtTime(0,j),te.gain.linearRampToValueAtTime(.18,j+3.5),te.gain.setValueAtTime(.18,j+ne-4),te.gain.linearRampToValueAtTime(0,j+ne+1),xe.connect(te),te.connect(a),xe.start(j),xe.stop(j+ne+1.2)}}function be(j){let se=Ze[Math.floor(Math.random()*Ze.length)],ne=e.createOscillator(),ue=e.createOscillator(),B=e.createGain(),xe=e.createGain();ne.type=ue.type="sine",ne.frequency.value=Ee(se),ue.frequency.value=Ee(se)*2.01,xe.gain.value=.25,ue.connect(xe),xe.connect(B),B.gain.setValueAtTime(0,j),B.gain.linearRampToValueAtTime(.05,j+.02),B.gain.exponentialRampToValueAtTime(1e-4,j+4),ne.connect(B),B.connect(r),B.connect(t),ne.start(j),ue.start(j),ne.stop(j+4.2),ue.stop(j+4.2)}return{ac:e,muted:!1,tyres:h,engG:x,bump(j){U(e.currentTime+.01,j)},update(j,se,ne,ue={}){let B=e.currentTime;if((ue.bell||0)>.01)for(I<B&&(I=B+.02);I<B+.12;)L(I,ue.bell),I+=.41;let xe=ue.rain||0;E.g.gain.setTargetAtTime(xe*.05,B,.6),l.g.gain.setTargetAtTime(xe*.05,B,.6);let te=(ue.wetRoad||0)*Math.min(1,j)**1.5,N=.8+.2*Math.sin(B*2.3)*Math.sin(B*.9+1);if(h.g.gain.setTargetAtTime(te*.045*N,B,.4),h.f.frequency.setTargetAtTime(900+1500*Math.min(j,2),B,.4),xe>.05&&ue.roof)for(A<B&&(A=B+.02);A<B+.12;)C(A,xe),A+=.04+Math.random()*.12/xe;let P=ue.water||0,G=.6+.4*Math.sin(B*1.3)*Math.sin(B*.37);T.g.gain.setTargetAtTime(P*.035*G,B,.25),T.f.frequency.setTargetAtTime(600+400*G,B,.25);let q=.35+.65*Math.pow(.5+.5*Math.sin(B*.23)*Math.sin(B*.071+2),2),Q=ue.rush||0;y.g.gain.setTargetAtTime(((se.mountain||0)+(se.snow||0)*.7)*.06*q+Q*.055,B,.8),y.f.frequency.setTargetAtTime(260+420*q+Q*500,B,.8);let ce=ue.train||0;if(b.g.gain.setTargetAtTime(ce*.16,B,.2),ce>.04)for(R<B&&(R=B+.02);R<B+.12;)U(R,ce),U(R+.15,ce*.8),R+=1.2;for(;Re<B+1;)ee(Re),Re+=8;st<B+.5&&(be(st),st+=1.5+Math.random()*4.5);let de=ue.tunnel||0;{let Y=ue.speed||0,Le=ue.load||0,me=850+2400*(1-Math.exp(-Y/15))+Math.max(0,Y-25)*60+Le*1300,W=me/40;p.frequency.setTargetAtTime(W,B,.25),_.frequency.setTargetAtTime(W*2,B,.25),d.frequency.setTargetAtTime(200+me*.08+Le*260,B,.3),x.gain.setTargetAtTime((.008+.01*Math.min(1,Y/15)+.024*Le)*(1-.6*(ue.rush||0))*(ue.roof===!1?.5:1)*(1+.7*de),B,.3)}g.g.gain.setTargetAtTime((.03+j*.06)*(1+1.6*de),B,.35),g.f.frequency.setTargetAtTime((250+j*500)*(1+.5*de),B,.35),M.g.gain.setTargetAtTime(de*.07,B,.4),o.gain.setTargetAtTime(.55+.6*de,B,.4);let le=.5+.5*Math.sin(B*.55)*Math.sin(B*.21+1);m.g.gain.setTargetAtTime(se.coast*(.012+le*.05),B,.3),m.f.frequency.setTargetAtTime(400+le*900,B,.3);let fe=1-Math.min(1,xe*1.4),Ne=1-ne,Ve=ue.dusk||0,Ce=se.snow||0,Ue=1-Ce,Be={sparrow:ne*fe*.22*(.3+se.city*.5+se.sakura+se.country*.8+se.coast*.2+(se.mountain||0)*.5)*(1-Ce*.8),uguisu:ne*fe*se.sakura*.06,crow:fe*(Ve*.14+ne*(se.city+se.country+(se.mountain||0)*1.5+Ce*2.5)*.012),gull:ne*se.coast*fe*.16,frog:Ne*(se.country*5+se.sakura*.6+se.coast*.3)*(1+xe*.6)*Ue,cricket:Ne*fe*(1.6-se.city*1.1+(se.mountain||0)*.8)*Ue,bike:ne*fe*se.city*.014,bell:Ce*.022+(se.mountain||0)*.006},Je={sparrow:z,uguisu:$,crow:ae,gull:He,frog:we,cricket:De,bike:X,bell:K};for(let Y in Be)B<ge[Y]||(Be[Y]>1e-4&&Je[Y](B+.05,.6+Math.random()*.4),ge[Y]=B+Math.max(.12,Ie(Be[Y]||1e-6)));let ot=.5+.5*Math.sin(B*7)*Math.sin(B*.4);v.g.gain.setTargetAtTime((se.country+se.sakura*.3)*ne*.006*ot*(1-(se.snow||0)),B,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function l1(i){let t=new nn(.075,.05),n=new gn({color:16777215,side:yn}),s=new Wi(t,n,420);s.frustumCulled=!1,s.count=0;let r=new ve("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(p=>new ve(p));for(let p=0;p<420;p++)s.setColorAt(p,r);let a=Array.from({length:420},()=>({p:new k(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),c=new Ke,u=new mn,f=new $n,g=new k(1,1,1),m=new k,v=90,b=new Float32Array(v*3),E=Array.from({length:v},()=>({p:new k(1e9,0,0),ph:Math.random()*6.28})),l=new vt;l.setAttribute("position",new St(b,3));let h=new ho({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:Xi,opacity:0}),d=new ba(l,h);d.frustumCulled=!1;let x=(p,_,S,T,y)=>{let M=y?8+Math.random()*42:-4+Math.random()*50,w=(Math.random()-.5)*40;p.p.set(_.x+S.x*M+T.x*w,_.y-1+Math.random()*9,_.z+S.z*M+T.z*w)};return{group:[s,d],shift(p,_){for(let S of a)S.p.x-=p,S.p.z-=_;for(let S of E)S.p.x-=p,S.p.z-=_},update(p,_,S,T,y,M,w,A,C,I=0){let R=Math.floor(420*Math.min(1,M*1.1+I*.55));n.color.setScalar(1-.72*A);let L=!1;s.count=R;for(let O=0;O<R;O++){let V=a[O];m.subVectors(V.p,S);let D=m.x*T.x+m.z*T.z,H=m.x*y.x+m.z*y.z;if(V.p.x>1e8||D<-6||D>55||Math.abs(H)>24||V.p.y<w-.5){x(V,S,T,y,V.p.x<1e8);let z=Math.random()*(M+I)<I;(z!==V.leaf||z)&&(V.leaf=z,s.setColorAt(O,z?o[Math.floor(Math.random()*o.length)]:r),L=!0)}V.p.y-=V.v*p,V.p.x+=Math.sin(_*.7+V.ph)*.4*p+.25*p,V.p.z+=Math.cos(_*.5+V.ph)*.3*p,f.set(_*V.sp+V.ph,_*V.sp*.7,V.ph),u.setFromEuler(f),g.setScalar(V.leaf?1.9:1),c.compose(V.p,u,g),s.setMatrixAt(O,c)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let U=A*C;if(h.opacity=U,d.visible=U>.01,d.visible){for(let O=0;O<v;O++){let V=E[O];m.subVectors(V.p,S);let D=m.x*T.x+m.z*T.z,H=m.x*y.x+m.z*y.z;if(V.p.x>1e8||D<-4||D>60||Math.abs(H)>30){let z=2+Math.random()*55,$=(Math.random()-.5)*55;V.p.set(S.x+T.x*z+y.x*$,w+.3+Math.random()*2.2,S.z+T.z*z+y.z*$)}V.p.x+=Math.sin(_*.6+V.ph*3)*.3*p,V.p.y+=Math.sin(_*.9+V.ph)*.2*p,V.p.z+=Math.cos(_*.5+V.ph*2)*.3*p,b[O*3]=V.p.x,b[O*3+1]=V.p.y,b[O*3+2]=V.p.z}l.attributes.position.needsUpdate=!0}}}}var lt=new URLSearchParams(location.search),Wo=lt.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();Wo&&document.body.classList.add("embed");lt.has("shot")&&document.body.classList.add("shot");em(lt.has("seed")?parseInt(lt.get("seed")):Math.random()*1e9|0);nm(lt.get("env")||"city");var zn=i=>document.getElementById(i),Xo=i=>{let e=zn("loading");e&&(e.textContent=i)};async function JM(){await new Promise(ye=>setTimeout(ye,30));let i=zn("c"),e=new Uu({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=lt.get("q")||(Wo||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?Wo?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=Gt,e.toneMapping=Va,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=vr,e.debug.checkShaderErrors=lt.has("debug");let r=lt.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",a=r==="old"?Promise.resolve(null):Lg(o),c=Ug(o),u=Bg(n==="high"&&innerHeight*s>=560?"hi":"lo"),f=Dg(o),g=new dr;g.fog=new va(13032946,.0019,700);let m=new Hn(52,innerWidth/innerHeight,.5,7e3),v=new xo(16777215,3);v.castShadow=!0;let b=n==="low"?1024:n==="mid"?1536:2048;v.shadow.mapSize.set(b,b),rd(lt.has("pcf")?parseInt(lt.get("pcf")):1);let E=62,l=v.shadow.camera,h=new Ke,d=new Ke;Object.assign(l,{left:-E,right:E,top:E,bottom:-E,near:1,far:420});let x=new k(0,1,0),p=new k,_=new k,S=new k,T=new k(0,1,0),y=new k(0,150,60),M=new k,w=new k,A=null,C=0,I=0,R=0;v.shadow.updateMatrices=function(){l.position.copy(y),l.lookAt(M),l.updateMatrixWorld(),l.updateProjectionMatrix(),d.multiplyMatrices(l.matrixWorldInverse,h).multiply(l.matrixWorld),l.projectionMatrix.multiply(d),l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),this._updateMatrix(l,this.matrix,this._frustum)};let L=!0;v.shadow.bias=-4e-4;let U=()=>{v.shadow.normalBias=lt.has("nb")?parseFloat(lt.get("nb")):1.5*2*E/v.shadow.mapSize.x};U();{let[ye,xt]=(lt.get("graze")||"0,0.12").split(",").map(Number);pm(ye,xt)}g.add(v,v.target);let O=new xo(16777215,0);O.castShadow=n!=="low"&&!lt.has("nocarsh");{let ye=lt.has("carsm")?parseInt(lt.get("carsm")):n==="high"?512:384;O.shadow.mapSize.set(ye,ye)}if(Object.assign(O.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),O.shadow.bias=-2e-4,O.shadow.normalBias=.025,g.add(O,O.target),O.castShadow){let ye=v.shadow.getFrustum(),xt=O.shadow.getFrustum();for(let nt of[ut,_a]){let sn=nt.prototype.intersectsFrustum;nt.prototype.intersectsFrustum=function(ei){return ei===xt?this.userData.car===!0:(ei!==ye||this.userData.car!==!0)&&sn.call(this,ei)}}}let V=new Oa(10799359,13154464,1.6);g.add(V),Xo("painting the town\u2026"),await new Promise(ye=>setTimeout(ye,10));let D=Dm();Hm(D);let H=Nm(e);Zm(H.cells),Oe.uTuftV.value.set(...H.tuftV);let z=Em(D.textures(e),H.tex),$=xm();$.update(e,0,0,0,0),Xo("painting the clouds\u2026"),await new Promise(ye=>setTimeout(ye,10)),$m(lt.has("leafd")?parseFloat(lt.get("leafd")):n==="high"?.72:.62);{let ye=await u;if(ye){Li.cells=ye.cells.filter(sn=>sn.kind==="leaf"),ye.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let xt=ld(ye.tex);z.gleaf=xt.mat,z.gleafDepth=xt.depth;let nt=ye.cells.filter(sn=>sn.kind==="blossom");nt.length&&(Li.bcells=nt,z.gblossom=ld(ye.tex,{blossom:!0}).mat)}}tg(),mg();let ae=[2.1,1.75,3.2],He=[1.42,1.47,1.74];{let ye=await f;ye&&(ye.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),bi.tex=ye.tex,bi.uFieldK.value.set(1/ye.tile[0],1/ye.tile[1]),bi.uFieldM.value.set(...ye.mean))}let we=new Vu;z.shore=Hg(n!=="high"),z.surf=Gg(),ih.n=n==="high"?8:4;let De=Vg(),K=e1(n,lt.has("grass")?lt.get("grass").split(",").map(Number):null);for(let ye of K.meshes)g.add(ye);let X=new sh(g,we,z,De),ge=Sg();g.add(ge);let Ie=wg();g.add(Ie.group);let Ee=kg();g.add(Ee.mesh);let Me=s1();Me.group.rotation.order="YXZ",g.add(Me.group),Me.group.traverse(ye=>{ye.userData.car=!0});let Ze=l1(z.glowTex);Ze.group.forEach(ye=>g.add(ye));let et=lt.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),Re=o1(e,g,m,{msaa:et==="msaa"?n==="high"?4:2:0,fxaa:et==="fxaa"});Oe.uReflTex.value=Re.refl.rt.texture;let st=await a,ee=st?Ng(st,Re):null;ee&&g.add(ee.mesh);let be=!ee||r==="both"?Tg(Eg(e)):null;be&&g.add(be.group);let j=await c,se=j?Fg(j,Re,g.fog.color):null;se&&g.add(se.mesh);let ne=new k,ue=new k,B=lt.get("refl")||"auto",xe=lt.has("backlit")?parseFloat(lt.get("backlit")):1,te=[7.5,3,2.3],N=[1.7,1.15,1],P=.7,G=lt.has("lightson")?parseFloat(lt.get("lightson")):-1,q=new k,Q=lt.has("haze")?parseFloat(lt.get("haze")):1,ce=Am();g.add(ce.group);let de=Rm();g.add(de.group);let le=$g(lt),fe=Jg(),Ne=Kg();g.add(fe.mesh,Ne.mesh);let Ve=jg();g.add(Ve.mesh);let Ce=Qg();g.add(Ce.mesh);let Ue=new ve,Be=new ve,Je=new mt,ot=t1();g.add(ot.mesh);let Y=le.W.rain,Le=.4,me=5.5,W={s:Math.max(100,parseFloat(lt.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Yt(parseFloat(lt.get("t"))||.4,0,.999),todPaused:lt.has("freeze"),dist:0,spray:lt.has("nospray")?0:1,grass:1,pclouds:1,band:1,cam:{low:1,eye:2,top:3,film:4}[lt.get("cam")]??(Wo?4:0)},Fe=!1;ee&&(ee.opening=["sakura","city"].includes(an(W.s))?"center":"flank"),Xo("building the road\u2026"),await new Promise(ye=>setTimeout(ye,10));let Se=Wo?620:X.ahead;X.ahead=260;let rt=lt.has("detail")?parseFloat(lt.get("detail")):380,je=lt.has("farleaf")?parseFloat(lt.get("farleaf")):540;for(;X.update(W.s,1e9););X.flush(),X.ahead=Se;{Xo("preparing the light\u2026"),await new Promise(rn=>setTimeout(rn,10));let ye=new on,xt=new vt;xt.setAttribute("position",new Ye([0,0,0,.01,0,0,0,.01,0],3)),xt.setAttribute("normal",new Ye([0,1,0,0,1,0,0,1,0],3)),xt.setAttribute("uv",new Ye([0,0,1,0,0,1],2)),xt.setAttribute("color",new Ye([1,1,1,1,1,1,1,1,1],3));let nt=new vt;nt.setAttribute("position",xt.attributes.position);let sn=new Set([z.shore,z.surf,De]),ei=[z.color,z.atlas,z.foliage,z.leaf,z.lamp,z.sig,z.sodium,z.decal,z.pool,z.shore,z.surf,De,...z.gleaf?[z.gleaf]:[],...z.gblossom?[z.gblossom]:[]];for(let rn=0;rn<_i.length;rn++)ei.push(ll([_i[rn]])),ei.push(ll([_i[rn],_i[(rn+1)%_i.length]]));for(let rn of ei){let es=new ut(sn.has(rn)?nt:xt,rn);es.castShadow=es.receiveShadow=!sn.has(rn),es.frustumCulled=!1,(rn===z.gleaf||rn===z.gblossom)&&(es.customDepthMaterial=z.gleafDepth),ye.add(es)}ye.position.set(0,0,0),g.add(ye),v.target.position.set(0,0,0),v.position.set(0,150,60);let En=[fe.mesh,Ne.mesh,Ve.mesh,Ce.mesh,de.group,ce.group,Ee.mesh].filter(rn=>!rn.visible);for(let rn of En)rn.visible=!0;K.warm(!0),e.setRenderTarget(Re.composer.readBuffer),e.compile(g,m),e.render(g,m),e.setRenderTarget(null);for(let rn of En)rn.visible=!1;K.warm(!1),g.remove(ye),xt.dispose(),nt.dispose(),Re.bloom.enabled=Re.refl.enabled=!0,Re.composer.render(0),Re.bloom.enabled=Re.refl.enabled=!1}let tt={k:Math.ceil((W.s-Er)/Sr),phase:"idle",raise:1,decided:!1,t2:0},Xe={},_t={},bt={},uh=lt.has("yaw")||lt.get("cam")==="top",ir=new k,Ps=new k,kn=new k,Lr=!1,Dr=new k,Nr=new k,fs=zn("spd"),qo=zn("dist"),Sl=zn("clock"),sr=zn("zone"),ds=zn("start"),Yo=zn("hint"),Jt=null,Zo=null,$o=0,El=0;function hh(ye){!Fe||ye===Zo||(Zo=ye,sr.querySelector(".jp").textContent=tl[ye].jp,sr.querySelector(".en").textContent=tl[ye].en,sr.classList.add("on"),clearTimeout($o),$o=setTimeout(()=>sr.classList.remove("on"),5200))}function Ko(){if(!Fe){if(Fe=!0,document.body.classList.remove("pre"),!lt.has("auto"))try{Jt=a1(),Jt&&Jt.ac.resume()}catch{Jt=null}ds.style.opacity=0,setTimeout(()=>ds.remove(),1500),Wo||(Yo.style.opacity=.75,setTimeout(()=>Yo.style.opacity=0,9e3))}}let Wn={};addEventListener("keydown",ye=>{Wn[ye.key]=!0,(ye.key==="m"||ye.key==="M")&&J(),(ye.key==="t"||ye.key==="T")&&he(),(ye.key==="c"||ye.key==="C")&&ze(),(ye.key==="r"||ye.key==="R")&&yt(),!Fe&&(ye.key===" "||ye.key==="Enter")&&Ko()}),addEventListener("keyup",ye=>{Wn[ye.key]=!1});let dn=null;i.addEventListener("pointerdown",ye=>{dn={id:ye.pointerId,x:ye.clientX,y:ye.clientY,sy:ye.clientY,sc:W.mult}});let F=ye=>Yt(ye.sc*Math.exp(-((ye.y-ye.sy)/innerHeight)*3.4),Le,me);addEventListener("pointermove",ye=>{dn&&ye.pointerId===dn.id&&(dn.x=ye.clientX,dn.y=ye.clientY,W.mult=F(dn))}),addEventListener("pointerup",()=>{dn=null}),addEventListener("pointercancel",()=>{dn=null}),i.addEventListener("touchstart",ye=>{let xt=ye.changedTouches[0];dn={id:"touch",x:xt.clientX,y:xt.clientY,sy:xt.clientY,sc:W.mult},ye.preventDefault()},{passive:!1}),i.addEventListener("touchmove",ye=>{if(!dn)return;let xt=ye.changedTouches[0];dn.x=xt.clientX,dn.y=xt.clientY,W.mult=F(dn),ye.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{dn=null}),i.addEventListener("touchcancel",()=>{dn=null});function J(){Jt&&(Jt.toggle(),zn("snd").style.opacity=Jt.muted?.4:1)}function he(){W.todPaused=!W.todPaused,zn("tim").style.opacity=W.todPaused?.4:1}let re=[0,1,2,4],oe={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function ze(){W.cam=re[(re.indexOf(W.cam)+1)%re.length],zn("cam").textContent=oe[W.cam]||"\u25D0",W.cam===4&&qe()}let We=["chase","side","road","crane","eye","side","road"],Te={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function qe(){let ye;do ye=We[Math.floor(Math.random()*We.length)];while(ye===Te.last);{let xt=Ii(W.s+60);xt&&Math.abs(W.s+60-xt.s)<fn+120&&(ye=Math.random()<.6?"chase":"eye")}if(Object.assign(Te,{type:ye,last:ye,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),ye==="road"){let xt=W.s+40+Math.random()*18,nt=Bn(xt,"rw"),sn=Math.random()<.6?-1:1,ei=sn*(nt+(sn<0?.9:1.3)),En=we.at(xt,{}),rn=En.y+$s(xt,ei,En.y,nt);Te.anchor={x:En.x+En.rx*ei,y:Math.max(rn,En.y)+1.05,z:En.z+En.rz*ei,s:xt}}Lr=!1}let Qe={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function yt(){zn("wx").textContent=Qe[le.cycle()]}zn("wx").textContent=Qe[le.W.mode],zn("cam").textContent=oe[W.cam]||"\u25D0",W.cam===4&&qe(),zn("wx").onclick=ye=>{ye.stopPropagation(),yt()},zn("snd").onclick=ye=>{ye.stopPropagation(),J()},zn("tim").onclick=ye=>{ye.stopPropagation(),he()},zn("cam").onclick=ye=>{ye.stopPropagation(),ze()};let Mt=0,$e=ye=>{let xt=performance.now();xt-Mt<120||(Mt=xt,ye.cancelable&&ye.type!=="click"&&ye.preventDefault(),Ko())};for(let ye of["touchstart","pointerdown","mousedown","click"])ds.addEventListener(ye,$e,{passive:!1});let Ft=()=>{Jt&&Jt.ac.state!=="running"&&Jt.ac.resume()};for(let ye of["touchend","click","keydown"])addEventListener(ye,Ft,{passive:!0});document.addEventListener("visibilitychange",()=>{Jt&&(document.hidden?Jt.ac.suspend():Jt.ac.resume())});let Zt=!1,Vt="",Nt=52,pn=0;function Ge(){let ye=innerWidth,xt=innerHeight,nt=ye/xt,sn=ye+"x"+xt+"@"+s;sn!==Vt&&(Vt=sn,e.setPixelRatio(s),e.setSize(ye,xt,!1),Re.composer.setPixelRatio(s),Re.composer.setSize(ye,xt),m.aspect=nt,Nt=nt>=1?52:Yt(2*Math.atan(Math.tan(34*Math.PI/180)/nt)*180/Math.PI,52,80),m.fov=Nt+pn,m.updateProjectionMatrix(),Re.grade.uniforms.uAspect.value=nt,Re.grade.uniforms.uTexel.value.set(1/Re.composer.readBuffer.width,1/Re.composer.readBuffer.height),Oe.uReflRes.value.set(Re.composer.readBuffer.width,Re.composer.readBuffer.height),Pg(e))}addEventListener("resize",()=>{Zt=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{Zt=!0}),Ge();let Mn=0;function Ct(ye=!0){if(s>1.05)s=Math.max(1,s-.25),Zt=!0;else if(L)L=!1,Re.bloom.enabled=!1;else if(v.shadow.mapSize.x>1024)v.shadow.mapSize.set(1024,1024),U(),v.shadow.map&&(v.shadow.map.dispose(),v.shadow.map=null);else if(X.ahead>430)X.ahead=430;else return;if(Mn++,ye)try{localStorage.setItem("icd-q",String(Mn))}catch{}}try{let ye=parseInt(localStorage.getItem("icd-q")||"0");if(!lt.has("q"))for(let xt=0;xt<Math.min(ye,6);xt++)Ct(!1);Mn=Math.max(Mn,ye||0)}catch{}let Qn=performance.now(),jt=0,Ui=0,Ti=0,Lt=()=>1-ie.night,Qt=0,Dt=0,kt=0,dt=lt.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;dt&&(dt.gl=e.getContext(),dt.tq=dt.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let Sn={p:-1,a:new k,b:new k,next:5},Et={lat:0,lon:0,road:0,jolt:0,kick:0,u:W.u,vu:0,v:0,s:W.s,yaw:0,brake:0,rk:NaN,rb:null},c1=new ve(3.6,2.8,1.8),u1=[-2.5335,-1.4665,1.4665,2.5335],Vd=[1.12,-1.12],h1=[-24.5,24.5];function Gd(ye){requestAnimationFrame(Gd);let xt=performance.now();Zt&&(Zt=!1,Ge());let nt=Math.min(.05,Math.max(0,(ye-Qn)/1e3));Qn=ye,jt+=nt,W.steer=0,(Wn.ArrowLeft||Wn.a||Wn.A)&&(W.steer=-1),(Wn.ArrowRight||Wn.d||Wn.D)&&(W.steer=1),(Wn.ArrowUp||Wn.w||Wn.W)&&(W.mult=Yt(W.mult*Math.exp(nt*.9),Le,me)),(Wn.ArrowDown||Wn.s||Wn.S)&&(W.mult=Yt(W.mult*Math.exp(-nt*.9),Le,me)),dn&&Math.abs(dn.y-dn.sy)<30&&(W.steer=dn.x<innerWidth/2?-1:1),W.steer&&(W.lastInput=ye,W.uHome=W.u);let sn=Co(tt.k);W.s-sn>24&&(tt.k++,sn=Co(tt.k),Object.assign(tt,{phase:"idle",raise:1,decided:!1}));let ei=sl(sn),En=sn-W.s;ei&&!tt.decided&&En<150&&(tt.decided=!0,En>75&&Fe&&W.speed*W.speed/2.5<En-14&&(lt.has("xing")||Dn(tt.k,99)<.8)&&(tt.phase="warn",de.start(sn,Dn(tt.k,7)<.5?1:-1,16))),tt.phase==="warn"?(tt.raise=Math.max(0,tt.raise-nt/6),de.st.cleared&&(tt.phase="clear",tt.t2=0)):tt.phase==="clear"?(tt.raise=Math.max(0,tt.raise-nt/6),(tt.t2+=nt)>2.2&&(tt.phase="raise")):tt.phase==="raise"&&(tt.raise=Math.min(1,tt.raise+nt/5),tt.raise>=1&&(tt.phase="idle"));let rn=tt.phase==="warn"||tt.phase==="clear"||tt.phase==="raise"&&tt.raise<.25,es=Bn(W.s,"speed")*W.mult*(Fe?1:.55);if(tt.phase!=="idle"&&tt.raise<.8&&En>0){let Ae=En-11.2,it=Ae>0?Math.sqrt(2*1.25*Ae):0;es=Math.min(es,it),W.speed=Math.min(W.speed,it)}lt.has("park")&&(es=0,W.speed=0),W.speed+=(es-W.speed)*Math.min(1,nt*.5),W.s+=W.speed*nt,W.dist+=W.speed*nt;let Tl=Bn(W.s,"rw");W.steer?W.u=Yt(W.u+W.steer*nt*2.4,-Tl+.85,Tl-.85):ye-W.lastInput>3e3&&(W.u+=(Yt(W.uHome,-Tl+.85,Tl-.85)+Math.sin(jt/11)*.1-W.u)*Math.min(1,nt*.9)),!W.todPaused&&Fe&&(W.tod=(W.tod+nt/480*(ie.night>.5?1.7:1))%1),_g(W.tod),le.update(nt);let Xn=le.W.ov,ps=le.W.rain;Mg(Xn,ps),Y=Yt(Y+(ps>.25?nt/18:-nt/120),0,1);let Wd=performance.now();X.update(W.s,Fe?3.5:14);let Xd=performance.now();if(we.at(W.s,Xe),Math.abs(Xe.x-X.origin.x)>900||Math.abs(Xe.z-X.origin.z)>900){let Ae=Math.round(Xe.x)-X.origin.x,it=Math.round(Xe.z)-X.origin.z;X.setOrigin(Math.round(Xe.x),Math.round(Xe.z)),ir.x-=Ae,ir.z-=it,Ps.x-=Ae,Ps.z-=it,Ze.shift&&Ze.shift(Ae,it),ot.shift(Ae,it),Ve.shift(Ae,it)}let Fi=X.origin.x,Bi=X.origin.z,f1=(we.at(W.s+1.5,bt).y-we.at(W.s-1.5,_t).y)/3,d1=(bt.h-_t.h)/3;if(Me.group.position.set(Xe.x+Xe.rx*W.u-Fi,Xe.y+.01,Xe.z+Xe.rz*W.u-Bi),nt>0){let Ae=Et.vu+((W.u-Et.u)/nt-Et.vu)*Math.min(1,nt*6),it=(Ae-Et.vu)/nt;Et.u=W.u,Et.vu=Ae,Et.lat=it-W.speed*W.speed*d1,Et.lon+=((W.speed-Et.v)/nt-Et.lon)*Math.min(1,nt*8),Et.v=W.speed;let at=tt.phase!=="idle"&&En>0&&En<20&&W.speed<.5;if(Et.brake=Et.lon<-.6||at?1:Et.lon>-.3?0:Et.brake,Et.yaw=-Yt(Math.atan(Ae/Math.max(W.speed,6))*.8,-.1,.1),Et.road=.004*Math.sin(W.s*.48)+.003*Math.sin(W.s*.86+1.3),Et.jolt=Et.kick=0,ei)for(let Tt=0;Tt<4;Tt++)for(let Xt=0;Xt<2;Xt++){let qt=sn+u1[Tt]-Vd[Xt];if(Et.s<qt&&W.s>=qt){let en=.05+Math.min(W.speed,25)*.004;Et.jolt+=en,Et.kick+=Xt?en*.9:-en*.9,Jt&&Jt.bump(.25+Math.min(W.speed,25)/50)}}{let Tt=Math.round((W.s-Po)/Tr);Tt!==Et.rk&&(Et.rk=Tt,Et.rb=Pi(W.s));let Xt=Et.rb;if(Xt)for(let qt=0;qt<2;qt++)for(let en=0;en<2;en++){let li=Xt.s+h1[qt]-Vd[en];if(Et.s<li&&W.s>=li){let Un=.035+Math.min(W.speed,25)*.003;Et.jolt+=Un,Et.kick+=en?Un*.9:-Un*.9,Jt&&Jt.bump(.2+Math.min(W.speed,25)/60)}}}Et.s=W.s}Me.group.rotation.set(-Math.atan(f1),Xe.h+Et.yaw,0);let rr=Ii(W.s);rr&&Math.abs(W.s-rr.s)<700?(we.at(rr.s-vn,bt),Oe.uTunA.value.set(bt.x-Fi,bt.y,bt.z-Bi),we.at(rr.s+vn,bt),Oe.uTunB.value.set(bt.x-Fi,bt.y,bt.z-Bi),Oe.uTunR.value=Bn(rr.s,"rw")+1.7):(Oe.uTunA.value.set(0,-1e4,0),Oe.uTunB.value.set(0,-1e4,0));let fh=rr&&Math.abs(W.s+1-rr.s)<vn-1.5?1:0;Dt+=(fh-Dt)*Math.min(1,nt*(fh?1.6:.7)),Oe.uCarPos.value.set(Me.group.position.x+Xe.fx*1.7,Me.group.position.y+.8,Me.group.position.z+Xe.fz*1.7),Oe.uCarFwd.value.set(Xe.fx,-.05,Xe.fz).normalize(),Oe.uHead.value=fh,Me.update(nt,W.speed,Math.max(ie.night,Dt),ps,Et,kt),ce.update(ei&&En>-24&&En<700?Yu(we,sn):null,X.origin,tt.raise,rn,jt),de.update(nt,we,X.origin,wt(.15,.8,ie.night),Bn(sn,"rw")+3.2);let dh=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(lt.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(lt.has("rig")){let[Ae,it,at,Tt]=lt.get("rig").split(",").map(Number);Object.assign(dh[0],{back:Ae,up:it,ahead:at,lookY:Tt})}let or=new k,Jo=6,qd=W.cam===2;if(W.cam===4){Te.t+=nt;{let at=Ii(W.s+30);at&&Math.abs(W.s+30-at.s)<fn+70&&Te.type!=="chase"&&Te.type!=="eye"&&(Te.type="chase",Te.t=0,Te.dur=20,Lr=!1)}(Te.t>Te.dur+(Te.type==="road"?8:0)||Te.type==="road"&&Te.anchor&&W.s>Te.anchor.s+24)&&qe();let Ae=Me.group.position,it=Te.type;if(it==="chase"||it==="eye"){let at=dh[it==="eye"?2:0];qd=it==="eye",we.at(W.s-at.back,_t),we.at(W.s+at.ahead,bt),kn.set(_t.x+_t.rx*W.u*at.cu-Fi,_t.y+at.up,_t.z+_t.rz*W.u*at.cu-Bi),or.set(bt.x+bt.rx*W.u*at.lu-Fi,bt.y+at.lookY,bt.z+bt.rz*W.u*at.lu-Bi)}else if(it==="side"){we.at(W.s+1.5,_t);let at=Ut(W.s),Tt=at.city+at.sakura>.5,Xt=Bn(W.s,"rw"),qt=Te.sideSign>0?Xt+(Tt?1.45:3.4):-(Xt+1.5),en=_t.y+$s(W.s+1.5,qt,_t.y,Xt);kn.set(_t.x+_t.rx*qt-Fi,Math.max(en+1.55,_t.y+1.25),_t.z+_t.rz*qt-Bi),or.set(Ae.x+Xe.fx*2.5,Ae.y+.9,Ae.z+Xe.fz*2.5),Jo=4}else if(it==="road"&&Te.anchor)kn.set(Te.anchor.x-Fi,Te.anchor.y,Te.anchor.z-Bi),or.set(Ae.x,Ae.y+.85,Ae.z),Jo=30;else{we.at(W.s-20,_t),we.at(W.s+34,bt);let at=14+Math.min(Te.t,20)*.35;kn.set(_t.x+_t.rx*W.u*.4-Fi,_t.y+at,_t.z+_t.rz*W.u*.4-Bi),or.set(bt.x-Fi,bt.y+1,bt.z-Bi),Jo=3}}else{let Ae=dh[W.cam];we.at(W.s-Ae.back,_t),we.at(W.s+Ae.ahead,bt);let it=W.u*Ae.cu,at=it+(Ae.side||0);kn.set(_t.x+_t.rx*at-Fi,_t.y+Ae.up,_t.z+_t.rz*at-Bi),or.set(bt.x+bt.rx*W.u*Ae.lu-Fi,bt.y+Ae.lookY,bt.z+bt.rz*W.u*Ae.lu-Bi)}Me.group.visible=!qd,W.cam===3?m.up.set(Xe.fx,0,Xe.fz):m.up.set(0,1,0),Lr||(ir.copy(kn),Ps.copy(or),Lr=!0);let Yd=1+Math.max(0,W.speed-12)/12;ir.lerp(kn,1-Math.exp(-nt*Jo*Yd)),Ps.lerp(or,1-Math.exp(-nt*Math.min(Jo,8)*Yd));{let Ae=W.cam===3?0:Math.min(Yt((W.speed-16)*.22,0,11),Math.max(0,84-Nt));pn+=(Ae-pn)*Math.min(1,nt*1.5),Math.abs(m.fov-(Nt+pn))>.02&&(m.fov=Nt+pn,m.updateProjectionMatrix())}m.position.copy(ir),m.lookAt(Ps),lt.has("yaw")&&m.rotateY(parseFloat(lt.get("yaw"))*Math.PI/180),lt.has("pitch")&&m.rotateX(parseFloat(lt.get("pitch"))*Math.PI/180),Dr.set(Xe.fx,0,Xe.fz),Nr.set(Xe.rx,0,Xe.rz);{let Ae=Me.group.position,it=m.position.x-Ae.x,at=m.position.z-Ae.z,Tt=W.cam===4&&Te.type!=="chase"&&Te.type!=="eye",Xt=W.s+it*Xe.fx+at*Xe.fz-(Tt?10:0),qt=Tt||uh?40:Math.tan(m.fov*Math.PI/360)*m.aspect*1.08;K.update(we,Xt,W.u+it*Xe.rx+at*Xe.rz,X.origin.x,X.origin.z,Bn(W.s,"rw"),qt),W.grass||K.hide()}let $t=Ut(W.s),ph=1+.25*ie.bright*(1-Dt);v.color.copy(ie.sunCol),v.intensity=ie.sunI/ph;{let Ae=ie.lightDir;if(x.angleTo(Ae)>.1){let Un=0;if(Fe&&!W.todPaused)for(let ti=1;ti<=60&&!(Rd(W.tod+ti*.001,w).angleTo(Ae)>.09);ti++)Un=ti;Rd(W.tod+Un*.001,x),C=I=0}p.crossVectors(T,x).normalize(),_.crossVectors(x,p),S.set(Me.group.position.x+Xe.fx*26,Me.group.position.y,Me.group.position.z+Xe.fz*26),v.target.position.copy(S),v.position.copy(S).addScaledVector(Ae,200);let it=2*E/v.shadow.mapSize.x,at=x.x/x.y-Ae.x/Ae.y,Tt=x.z/x.y-Ae.z/Ae.y;it!==R&&(R=it,C=I=0);{let Un=Math.round(Me.group.position.y);if(A===null)A=Un;else if(Math.abs(Me.group.position.y-A)>3){let ti=Un-A;C-=ti*(at*p.x+Tt*p.z),I-=ti*(at*_.x+Tt*_.z),A=Un}}let Xt=X.origin.x,qt=X.origin.z,en=S.dot(p)+Xt*p.x+qt*p.z-C,li=S.dot(_)+Xt*_.x+qt*_.z-I;S.addScaledVector(p,Math.round(en/it)*it-en).addScaledVector(_,Math.round(li/it)*it-li),M.copy(S),y.copy(S).addScaledVector(x,200),h.set(1,at,0,-A*at,0,1,0,0,0,Tt,1,-A*Tt,0,0,0,1)}O.target.position.set(Me.group.position.x,Me.group.position.y+.9,Me.group.position.z),O.position.copy(O.target.position).addScaledVector(ie.lightDir,12),V.color.copy(ie.hemiSky),V.groundColor.copy(ie.hemiGround),V.intensity=ie.hemiI/ph;{let Ae=(1-ie.night)*(1-Xn);if(Ae>.001){m.getWorldDirection(q);let it=q.x,at=q.z,Tt=Math.hypot(it,at)||1,Xt=ie.sunDir,qt=0;for(let li=-2;li<=2;li++){let Un=li*.3,ti=Math.cos(Un),ar=Math.sin(Un),Fr=(it*ti-at*ar)/Tt,Br=(it*ar+at*ti)/Tt,jo=Math.max(0,Fr*Xt.x+Br*Xt.z),Or=jo*jo;qt+=Or*Or*Or}let en=qt/5*(.1+.35*ie.warm)*1.4*Ae*Q;ie.fog.r+=ie.sunCol.r*en,ie.fog.g+=ie.sunCol.g*en,ie.fog.b+=ie.sunCol.b*en}}g.fog.color.copy(ie.fog);let Zd=($t.city*.0022+$t.sakura*.0019+$t.coast*.0011+$t.country*.0014+$t.mountain*.0017+$t.snow*.0021)*(1+ie.night*.25);g.fog.near=Zd*(1+.55*Xn+.45*ps),g.fog.far=X.ahead*.92,Oe.uSkyHor.value.copy(ie.horizon),Oe.uSkyZen.value.copy(ie.zenith),Oe.uTime.value=jt,Oe.uWet.value=Y*(1-$t.snow),Oe.uSakWet.value=P,kt=Math.max(Oe.uWet.value,Oe.uSakWet.value*$t.sakura)*(1-Dt);{let Ae=(Oe.uWet.value>.04||Oe.uSakWet.value*Math.max($t.sakura,im(W.s+120,"sakura"))>.04)&&n!=="low"&&Dt<.5&&B!=="0";if(Re.refl.enabled=Ae&&B!=="taps",Oe.uReflOn.value=Ae&&B!=="copy"?1:0,Ae){m.getWorldDirection(ue),ue.y=0,ue.normalize(),ne.copy(m.position).addScaledVector(ue,1e4).project(m),Oe.uHorizon.value=ne.y*.5+.5;let it=Math.max(.5,m.position.y-Me.group.position.y);Oe.uReflK.value=Yt(1-2*it/(5+it),.05,1)}}Oe.uOrigin.value.set(X.origin.x,X.origin.z),Oe.uWind.value=1+.8*ps,Oe.uCloudSh.value=(1-Xn)*wt(.04,.3,ie.sunEl)*(1-ie.night),Oe.uCloudSh.value>.001&&$.update(e,m.position.x,m.position.z,X.origin.x,X.origin.z);let pi=ge.material.uniforms;if(pi.uBright.value=ie.bright,pi.uNight.value=ie.night,pi.uWarm.value=ie.warm,pi.uTime.value=jt,pi.uCirrusCol.value.copy(ie.cLit).lerp(ie.horizon,.25),pi.uCirrus.value=.6*(1-Xn)*(1-.65*wt(.4,.9,ie.night)),pi.uOvercast.value=Xn,pi.uMilky.value=wt(.55,.95,ie.night)*(1-Xn),ie.night>.65&&Xn<.3&&Sn.p<0&&(Sn.next-=nt)<0){let Ae=Math.atan2(Xe.fx,Xe.fz)+(Math.random()-.5)*1.5,it=.45+Math.random()*.6,at=.22+Math.random()*.2,Tt=(Math.random()-.5)*.6,Xt=(qt,en)=>new k(Math.cos(qt)*Math.sin(en),Math.sin(qt),Math.cos(qt)*Math.cos(en));Sn.a.copy(Xt(it,Ae)),Sn.b.copy(Xt(it-at,Ae+Tt)),Sn.p=0,Sn.next=lt.has("meteors")?1:6+Math.random()*20}Sn.p>=0&&(Sn.p+=nt/.85,Sn.p>1.3&&(Sn.p=-1)),pi.uMetP.value=Sn.p,pi.uMetA.value.copy(Sn.a),pi.uMetB.value.copy(Sn.b),pi.uDeckLit.value.copy(ie.horizon).lerp(ie.cLit,.35),pi.uDeckDark.value.copy(ie.zenith).lerp(ie.horizon,.25).multiplyScalar(.82),ge.position.copy(m.position);{let Ae=!!ee&&(W.pclouds!==0||!be);ee&&(ee.mesh.visible=Ae,Ae&&ee.update(m,nt)),be&&(be.group.visible=!Ae,Ae||be.update(m.position,nt))}let p1=se&&W.band!==0?se.update(m,Ys(W.s+200),Math.max(1,m.position.y-Xe.y+.45),g.fog.near,g.fog.far):0;se&&W.band===0&&(se.mesh.visible=!1),Ie.update(m.position,Math.max($t.snow,Ut(W.s+600).snow*.7),1-p1);let wl=0;for(let Ae of[-150,0,250,500,800])wl=Math.max(wl,Ut(W.s+Ae).coast);Ee.mesh.visible=wl>.001,Ee.update(m.position,jt,Zd*.8,wt(0,.35,wl),Re.grade.uniforms),De.uniforms.uTime.value=jt,De.uniforms.uFogD.value=g.fog.near,De.uniforms.uNight.value=ie.night,De.uniforms.uSpecK.value=1-ie.overcast*.85,Oe.uSunDir.value.copy(ie.lightDir),Oe.uSunCol.value.copy(ie.sunCol);let wi=wt(.15,.8,ie.night);z.atlas.emissiveIntensity=.1+wi*1.05,Oe.uBacklit.value=xe*1.6*(1-Xn)*(1-ie.night)*wt(0,.08,ie.sunEl)*(1-wt(.25,.55,ie.sunEl))*(1-Dt),Oe.uGhShade.value.set(Rt(.8,.3,ie.bright),Rt(.8,.85,ie.bright),Rt(.8,1.7,ie.bright)),bi.tex&&bi.uFieldC.value.set(Rt(He[0],ae[0],ie.bright),Rt(He[1],ae[1],ie.bright),Rt(He[2],ae[2],ie.bright)),Oe.uBlShade.value.set(Rt(N[0],te[0],ie.bright),Rt(N[1],te[1],ie.bright),Rt(N[2],te[2],ie.bright)),Oe.uLightsOn.value=G>=0?G:Math.max(wt(.02,.75,ie.night),.3*Xn),z.lamp.color.setRGB(.9,.86,.74).lerp(c1,wi),z.pool.opacity=wi*.42*(1+.8*Y);{let Ae=Me.group.position,it=Me.lamps,at=Math.max(wi,Dt),Tt=0,Xt=0,qt=0,en=-1e3,li=0,Un=0,ti=-1e3,ar=0,Fr=900,Br=900;if(at>.01){let Jd=Math.floor(W.s/Ht);for(let mh=Jd-1;mh<=Jd+1;mh++){let Rl=X.chunks.get(mh);if(!Rl||!Rl.lamps)continue;let Qo=Rl.lamps,jd=Rl.group.position;for(let zr=0;zr<Qo.length;zr+=4){let gh=Qo[zr]+jd.x,vh=Qo[zr+1],xh=Qo[zr+2]+jd.z,yh=(gh-Ae.x)**2+(vh-Ae.y)**2+(xh-Ae.z)**2,Cl=Qo[zr+3]/(1+.045*yh);Cl>Tt?(Xt=Tt,Br=Fr,Un=qt,ti=en,ar=li,Tt=Cl,Fr=yh,qt=gh,en=vh,li=xh):Cl>Xt&&(Xt=Cl,Br=yh,Un=gh,ti=vh,ar=xh)}}m.updateMatrixWorld()}let jo=at*Tt*(1+.045*Fr)*(1-wt(18,30,Math.sqrt(Fr))),Or=at*Xt*(1+.045*Br)*(1-wt(18,30,Math.sqrt(Br)));it[0].set(qt,en,li,1).applyMatrix4(m.matrixWorldInverse).w=jo,it[1].set(Un,ti,ar,1).applyMatrix4(m.matrixWorldInverse).w=Or,Me.lampCol.setRGB(1,.8-.32*Dt,.52-.38*Dt),Di.uLampW.value[0].set(qt,en,li,jo),Di.uLampW.value[1].set(Un,ti,ar,Or),Di.uLampCol.value.copy(Me.lampCol),Me.head.getWorldPosition(Di.uHeadPos.value),Me.head.target.getWorldPosition(q),Di.uHeadDir.value.copy(q).sub(Di.uHeadPos.value).normalize(),Di.uHeadI.value=Me.head.intensity/60}z.pool.visible=z.pool.opacity>.003,X.lod(W.s,rt,wi>.15,je),Oe.uNight.value=wi,Re.bloom.strength=Rt(.32,.55,wi),Re.bloom.threshold=Rt(1.35,.95,wi),Re.bloom.radius=Rt(.55,.35,wi);{let Ae=Math.max(wi,Dt,wt(.25,.6,ie.warm)*(1-Xn));Re.bloom.enabled=L&&Ae>.02,Re.bloom.strength*=Math.min(1,Ae*4)}e.toneMappingExposure=Rt(1,1.15,wi)*(1+.35*Dt)*ph,kn.copy(m.position).addScaledVector(ie.sunDir,1e3).project(m);let Is=Re.grade.uniforms,m1=kn.z<1?1:0,g1=Math.max(Math.abs(kn.x),Math.abs(kn.y));Is.uSun.value.set(kn.x*.5+.5,kn.y*.5+.5),Is.uSunVis.value=m1*(1-wt(1,1.9,g1))*wt(-.02,.15,ie.sunEl)*(1-ie.night)*(1-Xn)*(1-Dt),Is.uSat.value=1.22-.24*Xn,Is.uVig.value=.55-.43*ie.bright,Is.uLo.value.set(-.014+.026*ie.bright,0,.03),Is.uDay.value=Lt(),Is.uWarm.value=ie.warm,Is.uTime.value=jt,fe.update(m.position,jt,ps*(1-Dt)*(1-$t.snow),Lt());{let Ae=Ii(W.s+190),it=($t.city+$t.country+$t.coast)*(1-Xn)*(1-Y)*wt(.6,.9,ie.sunEl)*(W.mirage??1)*(Ae&&Math.abs(W.s+190-Ae.s)<330?0:1);Ce.update(we,W.s,X.origin.x,X.origin.z,Bn(W.s+150,"rw"),it,jt,ie.horizon)}{let Ae=Yt($t.snow+$t.mountain*.6*Math.max(ie.night,1-wt(.27,.36,W.tod)),0,1)*(1-Dt);Ue.copy(ie.fog).multiplyScalar(.92),Be.copy(ie.sunCol).multiplyScalar(Math.min(1,ie.sunI/3)*(1-Xn)*.6);let it=Math.cos(Me.group.rotation.y),at=Math.sin(Me.group.rotation.y),Tt=Me.group.position;Je.set(Tt.x-1.75*at,Tt.y+.95,Tt.z-1.75*it,Math.max(ie.night,Dt)*(.5+1.2*Et.brake)),Ve.update(nt,Me.group,W.speed,Oe.uWet.value*(1-Dt),$t.snow*(1-Dt),Ae,Ue,Be,Je,m.position,W.spray)}Ne.update(m.position,jt,$t.snow*(.3+.7*Xn)*(1-Dt),Lt()),ot.setFog(g.fog.near),ot.update(nt,jt,m.position,Dr,Nr,$t,Lt(),ps,Me.group.position);let v1=performance.now();Ze.update(nt,jt,m.position,Dr,Nr,$t.sakura*(1-Dt),Xe.y,wi,($t.country+$t.sakura*.4)*(1-ps)*(1-Dt),$t.mountain*(1-Dt));let x1=performance.now();if(Jt){we.at(sn,bt);let Ae=Math.hypot(bt.x-X.origin.x-m.position.x,bt.z-X.origin.z-m.position.z),it=de.st.active?de.group.position.distanceTo(m.position):1e9,at=W.speed/15;Jt.update(at<1.5?at:1.5+(at-1.5)*.4,$t,Lt(),{rush:Yt((W.speed-25)/40,0,1),bell:rn?Math.pow(Yt(1-Ae/260,0,1),1.5):0,train:Math.pow(Yt(1-it/230,0,1),2),rain:ps*(1-Dt)*(1-$t.snow),wetRoad:Oe.uWet.value*(1-Dt),speed:W.speed,load:Yt(Et.lon/3,0,1),roof:W.cam!==2,tunnel:Dt,water:(()=>{let Tt=Pi(W.s);return Math.max(Tt?1-wt(12,150,Math.abs(W.s-Tt.s)):0,$t.mountain*.45)})(),dusk:ie.warm*(W.tod>.5?1:.3)})}hh(an(W.s+40)),dt&&(e.info.autoReset=!1,e.info.reset());let Al=null;dt&&dt.tq&&(Al=dt.gl.createQuery(),dt.gl.beginQuery(dt.tq.TIME_ELAPSED_EXT,Al));let $d=performance.now();Re.composer.render(nt);let Kd=performance.now();if(Al){let Ae=dt.gl;for(Ae.endQuery(dt.tq.TIME_ELAPSED_EXT),dt.pend.push(Al);dt.pend.length&&Ae.getQueryParameter(dt.pend[0],Ae.QUERY_RESULT_AVAILABLE);){let it=dt.pend.shift(),at=Ae.getQueryParameter(it,Ae.QUERY_RESULT);Ae.deleteQuery(it),Ae.getParameter(dt.tq.GPU_DISJOINT_EXT)||(dt.gpu=at/1e6,dt.gpuN++,dt.gpuSum+=dt.gpu,dt.gpu>dt.gpuMax&&(dt.gpuMax=dt.gpu))}}let Ur=window.__pb||(window.__pb={world:0,parts:0,render:0});if(Ur.world=Ur.world*.95+(Xd-Wd)*.05,Ur.parts=Ur.parts*.95+(x1-v1)*.05,Ur.render=Ur.render*.95+(Kd-$d)*.05,Qt=Qt*.95+(performance.now()-xt)*.05,window.__ft=Qt,dt){let Ae=e.info,it=performance.now()-xt,at={t:+jt.toFixed(2),s:Math.round(W.s),total:+it.toFixed(1),world:+(Xd-Wd).toFixed(1),render:+(Kd-$d).toFixed(1),gpu:+(dt.gpu||0).toFixed(1),progs:Ae.programs.length-dt.progs,geos:Ae.memory.geometries-dt.geos,tex:Ae.memory.textures-dt.tex,calls:Ae.render.calls,tris:Ae.render.triangles};at.progs>0&&Fe&&(at.newProgs=Ae.programs.slice(-at.progs).map(Tt=>(Tt.name||"")+":"+String(Tt.cacheKey).slice(0,60))),dt.progs=Ae.programs.length,dt.geos=Ae.memory.geometries,dt.tex=Ae.memory.textures,dt.frames++,dt.sum+=it,it>dt.max&&(dt.max=it),it>12&&Fe&&dt.spikes.push(at),dt.last=at}if((El+=nt)>.25){El=0,fs.textContent=Math.round(W.speed*3.6),qo.textContent=(W.dist/1e3).toFixed(1);let Ae=Math.floor(W.tod*1440);Sl.textContent=`${String(Math.floor(Ae/60)).padStart(2,"0")}:${String(Ae%60).padStart(2,"0")}`}Ui++,Fe&&Ui>150&&nt>.03?Ti+=nt:Ti=Math.max(0,Ti-nt*.5),Ti>3&&!lt.has("q")&&(Ti=0,Ct())}window.__dbg={renderer:e,st:W,scene:g,camera:m,world:X,TOD:ie,KEYS:Fo,X:tt,train:de,weather:le,U:Oe,birds:ot,cine:Te,post:Re,car:Me,sun:v,M:z,clouds:be,pclouds:ee,band:se,sky:ge,mountains:Ie,shadowDir:x,CM:Et,spray:Ve,grass:K,get audio(){return Jt}},Xo(""),ds.classList.add("ready"),lt.has("auto")&&Ko(),requestAnimationFrame(Gd)}JM().catch(i=>{console.error(i),Xo("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
