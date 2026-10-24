var Kp=0,jf=1,$p=2;var Rr=1,Jp=2,Co=3,gs=0,Vn=1,yn=2,ni=0,Po=1,is=2,Qf=3,e0=4,jp=5;var Cr=100,Qp=101,em=102,tm=103,nm=104,im=200,sm=201,rm=202,om=203,t0=204,n0=205,am=206,lm=207,cm=208,um=209,hm=210,fm=211,dm=212,pm=213,mm=214,Bc=0,Oc=1,kc=2,po=3,zc=4,Hc=5,Vc=6,Wc=7,i0=0,gm=1,vm=2,ss=0,s0=1,r0=2,o0=3,a0=4,l0=5,c0=6,fl=7;var u0=300,rr=301,Pr=302,bu=303,Mu=304,dl=306,Ds=1e3,hs=1001,Gc=1002,wn=1003,xm=1004;var pl=1005;var Ut=1006,Su=1007;var Pn=1008;var Kn=1009,h0=1010,f0=1011,Io=1012,wu=1013,rs=1014,Ui=1015,En=1016,Tu=1017,Eu=1018,Lo=1020,d0=35902,p0=35899,m0=1021,g0=1022,$n=1023,fs=1026,or=1027,ar=1028,Au=1029,lr=1030,Ru=1031;var Cu=1033,ml=33776,gl=33777,vl=33778,xl=33779,Pu=35840,Iu=35841,Lu=35842,Du=35843,Nu=36196,Fu=37492,Uu=37496,Bu=37488,Ou=37489,yl=37490,ku=37491,zu=37808,Hu=37809,Vu=37810,Wu=37811,Gu=37812,qu=37813,Xu=37814,Yu=37815,Zu=37816,Ku=37817,$u=37818,Ju=37819,ju=37820,Qu=37821,eh=36492,th=36494,nh=36495,ih=36283,sh=36284,_l=36285,rh=36286;var Fa=2300,qc=2301,Nc=2302,zf=2303,Hf=2400,Vf=2401,Wf=2402;var ym=3200;var oh=0,_m=1,ii="",Gt="srgb",Ua="srgb-linear",Ba="linear",Ht="srgb";var Fc=7680;var bm=519,Mm=512,Sm=513,wm=514,ah=515,Tm=516,Em=517,lh=518,Am=519,Rm=35044;var v0="300 es",es=2e3,mo=2001;function ax(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cm(){let i=go("canvas");return i.style.display="block",i}var pp={},vo=null;function x0(...i){let e="THREE."+i.shift();vo?vo("log",e,...i):console.log(e,...i)}function Pm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ft(...i){i=Pm(i);let e="THREE."+i.shift();if(vo)vo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function vt(...i){i=Pm(i);let e="THREE."+i.shift();if(vo)vo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function wr(...i){let e=i.join(" ");e in pp||(pp[e]=!0,ft(...i))}function Im(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lm={[Bc]:Oc,[kc]:Vc,[zc]:Wc,[po]:Hc,[Oc]:Bc,[Vc]:kc,[Wc]:zc,[Hc]:po},ds=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var df=Math.PI/180,Oa=180/Math.PI;function Do(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function cx(i,e){return(i%e+e)%e}function pf(i,e,t){return(1-t)*i+t*e}function wa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var w0=class w0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};w0.prototype.isVector2=!0;var Le=w0,pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let a=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3],m=r[o+0],x=r[o+1],y=r[o+2],M=r[o+3];if(p!==M||a!==m||u!==x||h!==y){let c=a*m+u*x+h*y+p*M;c<0&&(m=-m,x=-x,y=-y,M=-M,c=-c);let f=1-l;if(c<.9995){let d=Math.acos(c),g=Math.sin(d);f=Math.sin(f*d)/g,l=Math.sin(l*d)/g,a=a*f+m*l,u=u*f+x*l,h=h*f+y*l,p=p*f+M*l}else{a=a*f+m*l,u=u*f+x*l,h=h*f+y*l,p=p*f+M*l;let d=1/Math.sqrt(a*a+u*u+h*h+p*p);a*=d,u*=d,h*=d,p*=d}}e[t]=a,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let l=n[s],a=n[s+1],u=n[s+2],h=n[s+3],p=r[o],m=r[o+1],x=r[o+2],y=r[o+3];return e[t]=l*y+h*p+a*x-u*m,e[t+1]=a*y+h*m+u*p-l*x,e[t+2]=u*y+h*x+l*m-a*p,e[t+3]=h*y-l*p-a*m-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,a=Math.sin,u=l(n/2),h=l(s/2),p=l(r/2),m=a(n/2),x=a(s/2),y=a(r/2);switch(o){case"XYZ":this._x=m*h*p+u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p-m*x*y;break;case"YXZ":this._x=m*h*p+u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p+m*x*y;break;case"ZXY":this._x=m*h*p-u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p-m*x*y;break;case"ZYX":this._x=m*h*p-u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p+m*x*y;break;case"YZX":this._x=m*h*p+u*x*y,this._y=u*x*p+m*h*y,this._z=u*h*y-m*x*p,this._w=u*h*p-m*x*y;break;case"XZY":this._x=m*h*p-u*x*y,this._y=u*x*p-m*h*y,this._z=u*h*y+m*x*p,this._w=u*h*p+m*x*y;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],a=t[9],u=t[2],h=t[6],p=t[10],m=n+l+p;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(h-a)*x,this._y=(r-u)*x,this._z=(o-s)*x}else if(n>l&&n>p){let x=2*Math.sqrt(1+n-l-p);this._w=(h-a)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+u)/x}else if(l>p){let x=2*Math.sqrt(1+l-n-p);this._w=(r-u)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(a+h)/x}else{let x=2*Math.sqrt(1+p-n-l);this._w=(o-s)/x,this._x=(r+u)/x,this._y=(a+h)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,a=t._y,u=t._z,h=t._w;return this._x=n*h+o*l+s*u-r*a,this._y=s*h+o*a+r*l-n*u,this._z=r*h+o*u+n*a-s*l,this._w=o*h-n*l-s*a-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let a=1-t;if(l<.9995){let u=Math.acos(l),h=Math.sin(u);a=Math.sin(a*u)/h,t=Math.sin(t*u)/h,this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+s*t,this._z=this._z*a+r*t,this._w=this._w*a+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T0=class T0{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,a=e.w,u=2*(o*s-l*n),h=2*(l*t-r*s),p=2*(r*n-o*t);return this.x=t+a*u+o*p-l*h,this.y=n+a*h+l*u-r*p,this.z=s+a*p+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,a=t.z;return this.x=s*a-r*l,this.y=r*o-n*a,this.z=n*l-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mf.copy(this).projectOnVector(e),this.sub(mf)}reflect(e){return this.sub(mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};T0.prototype.isVector3=!0;var H=T0,mf=new H,mp=new pn,E0=class E0{constructor(e,t,n,s,r,o,l,a,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u)}set(e,t,n,s,r,o,l,a,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],a=n[6],u=n[1],h=n[4],p=n[7],m=n[2],x=n[5],y=n[8],M=s[0],c=s[3],f=s[6],d=s[1],g=s[4],v=s[7],b=s[2],T=s[5],w=s[8];return r[0]=o*M+l*d+a*b,r[3]=o*c+l*g+a*T,r[6]=o*f+l*v+a*w,r[1]=u*M+h*d+p*b,r[4]=u*c+h*g+p*T,r[7]=u*f+h*v+p*w,r[2]=m*M+x*d+y*b,r[5]=m*c+x*g+y*T,r[8]=m*f+x*v+y*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8];return t*o*h-t*l*u-n*r*h+n*l*a+s*r*u-s*o*a}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=h*o-l*u,m=l*a-h*r,x=u*r-o*a,y=t*p+n*m+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return e[0]=p*M,e[1]=(s*u-h*n)*M,e[2]=(l*n-s*o)*M,e[3]=m*M,e[4]=(h*t-s*a)*M,e[5]=(s*r-l*t)*M,e[6]=x*M,e[7]=(n*a-u*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){let a=Math.cos(r),u=Math.sin(r);return this.set(n*a,n*u,-n*(a*o+u*l)+o+e,-s*u,s*a,-s*(-u*o+a*l)+l+t,0,0,1),this}scale(e,t){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gf.makeScale(e,t)),this}rotate(e){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gf.makeRotation(-e)),this}translate(e,t){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};E0.prototype.isMatrix3=!0;var _t=E0,gf=new _t,gp=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vp=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ux(){let i={enabled:!0,workingColorSpace:Ua,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ht&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ht&&(s.r=ho(s.r),s.g=ho(s.g),s.b=ho(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ua]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:gp,fromXYZ:vp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Ht,toXYZ:gp,fromXYZ:vp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var Lt=ux();function Ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $r,Xc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=go("canvas")),$r.width=e.width,$r.height=e.height;let s=$r.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=$r}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=go("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ls(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ls(t[n]/255)*255):t[n]=Ls(t[n]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hx=0,xo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(vf(s[o].image)):r.push(vf(s[o]))}else r=vf(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}var fx=0,xf=new H,Yn=class i extends ds{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hs,s=hs,r=Ut,o=Pn,l=$n,a=Kn,u=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Do(),this.name="",this.source=new xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xf).x}get height(){return this.source.getSize(xf).y}get depth(){return this.source.getSize(xf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=u0;Yn.DEFAULT_ANISOTROPY=1;var A0=class A0{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,a=e.elements,u=a[0],h=a[4],p=a[8],m=a[1],x=a[5],y=a[9],M=a[2],c=a[6],f=a[10];if(Math.abs(h-m)<.01&&Math.abs(p-M)<.01&&Math.abs(y-c)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+M)<.1&&Math.abs(y+c)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(u+1)/2,v=(x+1)/2,b=(f+1)/2,T=(h+m)/4,w=(p+M)/4,_=(y+c)/4;return g>v&&g>b?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=T/n,r=w/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=w/r,s=_/r),this.set(n,s,r,t),this}let d=Math.sqrt((c-y)*(c-y)+(p-M)*(p-M)+(m-h)*(m-h));return Math.abs(d)<.001&&(d=1),this.x=(c-y)/d,this.y=(p-M)/d,this.z=(m-h)/d,this.w=Math.acos((u+x+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};A0.prototype.isVector4=!0;var xt=A0,Yc=class extends ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Yn(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new xo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ka=class extends Yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zc=class extends Yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var _u=class _u{constructor(e,t,n,s,r,o,l,a,u,h,p,m,x,y,M,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,a,u,h,p,m,x,y,M,c)}set(e,t,n,s,r,o,l,a,u,h,p,m,x,y,M,c){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=l,f[13]=a,f[2]=u,f[6]=h,f[10]=p,f[14]=m,f[3]=x,f[7]=y,f[11]=M,f[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _u().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Jr.setFromMatrixColumn(e,0).length(),r=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let m=o*h,x=o*p,y=l*h,M=l*p;t[0]=a*h,t[4]=-a*p,t[8]=u,t[1]=x+y*u,t[5]=m-M*u,t[9]=-l*a,t[2]=M-m*u,t[6]=y+x*u,t[10]=o*a}else if(e.order==="YXZ"){let m=a*h,x=a*p,y=u*h,M=u*p;t[0]=m+M*l,t[4]=y*l-x,t[8]=o*u,t[1]=o*p,t[5]=o*h,t[9]=-l,t[2]=x*l-y,t[6]=M+m*l,t[10]=o*a}else if(e.order==="ZXY"){let m=a*h,x=a*p,y=u*h,M=u*p;t[0]=m-M*l,t[4]=-o*p,t[8]=y+x*l,t[1]=x+y*l,t[5]=o*h,t[9]=M-m*l,t[2]=-o*u,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){let m=o*h,x=o*p,y=l*h,M=l*p;t[0]=a*h,t[4]=y*u-x,t[8]=m*u+M,t[1]=a*p,t[5]=M*u+m,t[9]=x*u-y,t[2]=-u,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){let m=o*a,x=o*u,y=l*a,M=l*u;t[0]=a*h,t[4]=M-m*p,t[8]=y*p+x,t[1]=p,t[5]=o*h,t[9]=-l*h,t[2]=-u*h,t[6]=x*p+y,t[10]=m-M*p}else if(e.order==="XZY"){let m=o*a,x=o*u,y=l*a,M=l*u;t[0]=a*h,t[4]=-p,t[8]=u*h,t[1]=m*p+M,t[5]=o*h,t[9]=x*p-y,t[2]=y*p-x,t[6]=l*h,t[10]=M*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dx,e,px)}lookAt(e,t,n){let s=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Ys.crossVectors(n,bi),Ys.lengthSq()===0&&(Math.abs(n.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Ys.crossVectors(n,bi)),Ys.normalize(),lc.crossVectors(bi,Ys),s[0]=Ys.x,s[4]=lc.x,s[8]=bi.x,s[1]=Ys.y,s[5]=lc.y,s[9]=bi.y,s[2]=Ys.z,s[6]=lc.z,s[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],a=n[8],u=n[12],h=n[1],p=n[5],m=n[9],x=n[13],y=n[2],M=n[6],c=n[10],f=n[14],d=n[3],g=n[7],v=n[11],b=n[15],T=s[0],w=s[4],_=s[8],S=s[12],E=s[1],R=s[5],C=s[9],I=s[13],A=s[2],L=s[6],D=s[10],O=s[14],z=s[3],F=s[7],V=s[11],k=s[15];return r[0]=o*T+l*E+a*A+u*z,r[4]=o*w+l*R+a*L+u*F,r[8]=o*_+l*C+a*D+u*V,r[12]=o*S+l*I+a*O+u*k,r[1]=h*T+p*E+m*A+x*z,r[5]=h*w+p*R+m*L+x*F,r[9]=h*_+p*C+m*D+x*V,r[13]=h*S+p*I+m*O+x*k,r[2]=y*T+M*E+c*A+f*z,r[6]=y*w+M*R+c*L+f*F,r[10]=y*_+M*C+c*D+f*V,r[14]=y*S+M*I+c*O+f*k,r[3]=d*T+g*E+v*A+b*z,r[7]=d*w+g*R+v*L+b*F,r[11]=d*_+g*C+v*D+b*V,r[15]=d*S+g*I+v*O+b*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],a=e[9],u=e[13],h=e[2],p=e[6],m=e[10],x=e[14],y=e[3],M=e[7],c=e[11],f=e[15],d=a*x-u*m,g=l*x-u*p,v=l*m-a*p,b=o*x-u*h,T=o*m-a*h,w=o*p-l*h;return t*(M*d-c*g+f*v)-n*(y*d-c*b+f*T)+s*(y*g-M*b+f*w)-r*(y*v-M*T+c*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],a=e[2],u=e[6],h=e[10];return t*(o*h-l*u)-n*(r*h-l*a)+s*(r*u-o*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],a=e[6],u=e[7],h=e[8],p=e[9],m=e[10],x=e[11],y=e[12],M=e[13],c=e[14],f=e[15],d=t*l-n*o,g=t*a-s*o,v=t*u-r*o,b=n*a-s*l,T=n*u-r*l,w=s*u-r*a,_=h*M-p*y,S=h*c-m*y,E=h*f-x*y,R=p*c-m*M,C=p*f-x*M,I=m*f-x*c,A=d*I-g*C+v*R+b*E-T*S+w*_;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=(l*I-a*C+u*R)*L,e[1]=(s*C-n*I-r*R)*L,e[2]=(M*w-c*T+f*b)*L,e[3]=(m*T-p*w-x*b)*L,e[4]=(a*E-o*I-u*S)*L,e[5]=(t*I-s*E+r*S)*L,e[6]=(c*v-y*w-f*g)*L,e[7]=(h*w-m*v+x*g)*L,e[8]=(o*C-l*E+u*_)*L,e[9]=(n*E-t*C-r*_)*L,e[10]=(y*T-M*v+f*d)*L,e[11]=(p*v-h*T-x*d)*L,e[12]=(l*S-o*R-a*_)*L,e[13]=(t*R-n*S+s*_)*L,e[14]=(M*g-y*b-c*d)*L,e[15]=(h*b-p*g+m*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,a=e.z,u=r*o,h=r*l;return this.set(u*o+n,u*l-s*a,u*a+s*l,0,u*l+s*a,h*l+n,h*a-s*o,0,u*a-s*l,h*a+s*o,r*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,l=t._z,a=t._w,u=r+r,h=o+o,p=l+l,m=r*u,x=r*h,y=r*p,M=o*h,c=o*p,f=l*p,d=a*u,g=a*h,v=a*p,b=n.x,T=n.y,w=n.z;return s[0]=(1-(M+f))*b,s[1]=(x+v)*b,s[2]=(y-g)*b,s[3]=0,s[4]=(x-v)*T,s[5]=(1-(m+f))*T,s[6]=(c+d)*T,s[7]=0,s[8]=(y+g)*w,s[9]=(c-d)*w,s[10]=(1-(m+M))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Jr.set(s[0],s[1],s[2]).length(),l=Jr.set(s[4],s[5],s[6]).length(),a=Jr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),$i.copy(this);let u=1/o,h=1/l,p=1/a;return $i.elements[0]*=u,$i.elements[1]*=u,$i.elements[2]*=u,$i.elements[4]*=h,$i.elements[5]*=h,$i.elements[6]*=h,$i.elements[8]*=p,$i.elements[9]*=p,$i.elements[10]*=p,t.setFromRotationMatrix($i),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,s,r,o,l=es,a=!1){let u=this.elements,h=2*r/(t-e),p=2*r/(n-s),m=(t+e)/(t-e),x=(n+s)/(n-s),y,M;if(a)y=r/(o-r),M=o*r/(o-r);else if(l===es)y=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(l===mo)y=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=es,a=!1){let u=this.elements,h=2/(t-e),p=2/(n-s),m=-(t+e)/(t-e),x=-(n+s)/(n-s),y,M;if(a)y=1/(o-r),M=o/(o-r);else if(l===es)y=-2/(o-r),M=-(o+r)/(o-r);else if(l===mo)y=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};_u.prototype.isMatrix4=!0;var Qe=_u,Jr=new H,$i=new Qe,dx=new H(0,0,0),px=new H(1,1,1),Ys=new H,lc=new H,bi=new H,xp=new Qe,yp=new pn,Zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],l=s[8],a=s[1],u=s[5],h=s[9],p=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(a,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,x),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yp.setFromEuler(this),this.setFromQuaternion(yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mx=0,_p=new H,jr=new pn,As=new Qe,cc=new H,Ta=new H,gx=new H,vx=new pn,bp=new H(1,0,0),Mp=new H(0,1,0),Sp=new H(0,0,1),wp={type:"added"},xx={type:"removed"},Qr={type:"childadded",child:null},yf={type:"childremoved",child:null},Tn=class i extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new Zn,n=new pn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new _t}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(bp,e)}rotateY(e){return this.rotateOnAxis(Mp,e)}rotateZ(e){return this.rotateOnAxis(Sp,e)}translateOnAxis(e,t){return _p.copy(e).applyQuaternion(this.quaternion),this.position.add(_p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bp,e)}translateY(e){return this.translateOnAxis(Mp,e)}translateZ(e){return this.translateOnAxis(Sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cc.copy(e):cc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(Ta,cc,this.up):As.lookAt(cc,Ta,this.up),this.quaternion.setFromRotationMatrix(As),s&&(As.extractRotation(s.matrixWorld),jr.setFromRotationMatrix(As),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wp),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),yf.child=e,this.dispatchEvent(yf),yf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),As.multiply(e.parent.matrixWorld)),e.applyMatrix4(As),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wp),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let a=l.shapes;if(Array.isArray(a))for(let u=0,h=a.length;u<h;u++){let p=a[u];r(e.shapes,p)}else r(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let a=0,u=this.material.length;a<u;a++)l.push(r(e.materials,this.material[a]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let a=this.animations[l];s.animations.push(r(e.animations,a))}}if(t){let l=o(e.geometries),a=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),x=o(e.animations),y=o(e.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(l){let a=[];for(let u in l){let h=l[u];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tn.DEFAULT_UP=new H(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},yx={type:"move"},yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,l=this._targetRay,a=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let M of e.hand.values()){let c=t.getJointPose(M,n),f=this._getHandJoint(u,M);c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=c.radius),f.visible=c!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=h.position.distanceTo(p.position),x=.02,y=.005;u.inputState.pinching&&m>x+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=x-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zs={h:0,s:0,l:0},uc={h:0,s:0,l:0};function _f(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var he=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=cx(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_f(o,r,e+1/3),this.g=_f(o,r,e),this.b=_f(o,r,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=Dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Lt.workingToColorSpace(Xn.copy(this),e),Math.round(Pt(Xn.r*255,0,255))*65536+Math.round(Pt(Xn.g*255,0,255))*256+Math.round(Pt(Xn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Xn.copy(this),t);let n=Xn.r,s=Xn.g,r=Xn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),a,u,h=(l+o)/2;if(l===o)a=0,u=0;else{let p=o-l;switch(u=h<=.5?p/(o+l):p/(2-o-l),o){case n:a=(s-r)/p+(s<r?6:0);break;case s:a=(r-n)/p+2;break;case r:a=(n-s)/p+4;break}a/=6}return e.h=a,e.s=u,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Gt){Lt.workingToColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,s=Xn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zs),this.setHSL(Zs.h+e,Zs.s+t,Zs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zs),e.getHSL(uc);let n=pf(Zs.h,uc.h,t),s=pf(Zs.s,uc.s,t),r=pf(Zs.l,uc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new he;he.NAMES=Dm;var Ha=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Tr=class extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ji=new H,Rs=new H,bf=new H,Cs=new H,eo=new H,to=new H,Tp=new H,Mf=new H,Sf=new H,wf=new H,Tf=new xt,Ef=new xt,Af=new xt,js=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ji.subVectors(e,t),s.cross(Ji);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ji.subVectors(s,t),Rs.subVectors(n,t),bf.subVectors(e,t);let o=Ji.dot(Ji),l=Ji.dot(Rs),a=Ji.dot(bf),u=Rs.dot(Rs),h=Rs.dot(bf),p=o*u-l*l;if(p===0)return r.set(0,0,0),null;let m=1/p,x=(u*a-l*h)*m,y=(o*h-l*a)*m;return r.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cs)===null?!1:Cs.x>=0&&Cs.y>=0&&Cs.x+Cs.y<=1}static getInterpolation(e,t,n,s,r,o,l,a){return this.getBarycoord(e,t,n,s,Cs)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,Cs.x),a.addScaledVector(o,Cs.y),a.addScaledVector(l,Cs.z),a)}static getInterpolatedAttribute(e,t,n,s,r,o){return Tf.setScalar(0),Ef.setScalar(0),Af.setScalar(0),Tf.fromBufferAttribute(e,t),Ef.fromBufferAttribute(e,n),Af.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Tf,r.x),o.addScaledVector(Ef,r.y),o.addScaledVector(Af,r.z),o}static isFrontFacing(e,t,n,s){return Ji.subVectors(n,t),Rs.subVectors(e,t),Ji.cross(Rs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Rs.subVectors(this.a,this.b),Ji.cross(Rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,l;eo.subVectors(s,n),to.subVectors(r,n),Mf.subVectors(e,n);let a=eo.dot(Mf),u=to.dot(Mf);if(a<=0&&u<=0)return t.copy(n);Sf.subVectors(e,s);let h=eo.dot(Sf),p=to.dot(Sf);if(h>=0&&p<=h)return t.copy(s);let m=a*p-h*u;if(m<=0&&a>=0&&h<=0)return o=a/(a-h),t.copy(n).addScaledVector(eo,o);wf.subVectors(e,r);let x=eo.dot(wf),y=to.dot(wf);if(y>=0&&x<=y)return t.copy(r);let M=x*u-a*y;if(M<=0&&u>=0&&y<=0)return l=u/(u-y),t.copy(n).addScaledVector(to,l);let c=h*y-x*p;if(c<=0&&p-h>=0&&x-y>=0)return Tp.subVectors(r,s),l=(p-h)/(p-h+(x-y)),t.copy(s).addScaledVector(Tp,l);let f=1/(c+M+m);return o=M*f,l=m*f,t.copy(n).addScaledVector(eo,o).addScaledVector(to,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ji):ji.fromBufferAttribute(r,o),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hc.copy(n.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),fc.subVectors(this.max,Ea),no.subVectors(e.a,Ea),io.subVectors(e.b,Ea),so.subVectors(e.c,Ea),Ks.subVectors(io,no),$s.subVectors(so,io),_r.subVectors(no,so);let t=[0,-Ks.z,Ks.y,0,-$s.z,$s.y,0,-_r.z,_r.y,Ks.z,0,-Ks.x,$s.z,0,-$s.x,_r.z,0,-_r.x,-Ks.y,Ks.x,0,-$s.y,$s.x,0,-_r.y,_r.x,0];return!Rf(t,no,io,so,fc)||(t=[1,0,0,0,1,0,0,0,1],!Rf(t,no,io,so,fc))?!1:(dc.crossVectors(Ks,$s),t=[dc.x,dc.y,dc.z],Rf(t,no,io,so,fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ps=[new H,new H,new H,new H,new H,new H,new H,new H],ji=new H,hc=new fi,no=new H,io=new H,so=new H,Ks=new H,$s=new H,_r=new H,Ea=new H,fc=new H,dc=new H,br=new H;function Rf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){br.fromArray(i,r);let l=s.x*Math.abs(br.x)+s.y*Math.abs(br.y)+s.z*Math.abs(br.z),a=e.dot(br),u=t.dot(br),h=n.dot(br);if(Math.max(-Math.max(a,u,h),Math.min(a,u,h))>l)return!1}return!0}var Sn=new H,pc=new Le,_x=0,wt=class extends ds{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_x++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rm,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wa(t,this.array)),t}setX(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wa(t,this.array)),t}setY(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wa(t,this.array)),t}setW(e,t){return this.normalized&&(t=hi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array),s=hi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=hi(t,this.array),n=hi(n,this.array),s=hi(s,this.array),r=hi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Va=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wa=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},bx=new fi,Aa=new H,Cf=new H,di=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Aa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Cf)),this.expandByPoint(Aa.copy(e.center).sub(Cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mx=0,Ni=new Qe,Pf=new Tn,ro=new H,Mi=new fi,Ra=new fi,Fn=new H,bt=class i extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ax(e)?Wa:Va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new _t().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,n){return Ni.makeTranslation(e,t,n),this.applyMatrix4(Ni),this}scale(e,t,n){return Ni.makeScale(e,t,n),this.applyMatrix4(Ni),this}lookAt(e){return Pf.lookAt(e),Pf.updateMatrix(),this.applyMatrix4(Pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let l=t[r];Ra.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(Mi.min,Ra.min),Mi.expandByPoint(Fn),Fn.addVectors(Mi.max,Ra.max),Mi.expandByPoint(Fn)):(Mi.expandByPoint(Ra.min),Mi.expandByPoint(Ra.max))}Mi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Fn));if(t)for(let r=0,o=t.length;r<o;r++){let l=t[r],a=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)Fn.fromBufferAttribute(l,u),a&&(ro.fromBufferAttribute(e,u),Fn.add(ro)),s=Math.max(s,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],a=[];for(let _=0;_<n.count;_++)l[_]=new H,a[_]=new H;let u=new H,h=new H,p=new H,m=new Le,x=new Le,y=new Le,M=new H,c=new H;function f(_,S,E){u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,E),m.fromBufferAttribute(r,_),x.fromBufferAttribute(r,S),y.fromBufferAttribute(r,E),h.sub(u),p.sub(u),x.sub(m),y.sub(m);let R=1/(x.x*y.y-y.x*x.y);isFinite(R)&&(M.copy(h).multiplyScalar(y.y).addScaledVector(p,-x.y).multiplyScalar(R),c.copy(p).multiplyScalar(x.x).addScaledVector(h,-y.x).multiplyScalar(R),l[_].add(M),l[S].add(M),l[E].add(M),a[_].add(c),a[S].add(c),a[E].add(c))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let _=0,S=d.length;_<S;++_){let E=d[_],R=E.start,C=E.count;for(let I=R,A=R+C;I<A;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let g=new H,v=new H,b=new H,T=new H;function w(_){b.fromBufferAttribute(s,_),T.copy(b);let S=l[_];g.copy(S),g.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(T,S);let R=v.dot(a[_])<0?-1:1;o.setXYZW(_,g.x,g.y,g.z,R)}for(let _=0,S=d.length;_<S;++_){let E=d[_],R=E.start,C=E.count;for(let I=R,A=R+C;I<A;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);let s=new H,r=new H,o=new H,l=new H,a=new H,u=new H,h=new H,p=new H;if(e)for(let m=0,x=e.count;m<x;m+=3){let y=e.getX(m+0),M=e.getX(m+1),c=e.getX(m+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,c),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),l.fromBufferAttribute(n,y),a.fromBufferAttribute(n,M),u.fromBufferAttribute(n,c),l.add(h),a.add(h),u.add(h),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(c,u.x,u.y,u.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(l,a){let u=l.array,h=l.itemSize,p=l.normalized,m=new u.constructor(a.length*h),x=0,y=0;for(let M=0,c=a.length;M<c;M++){l.isInterleavedBufferAttribute?x=a[M]*l.data.stride+l.offset:x=a[M]*h;for(let f=0;f<h;f++)m[y++]=u[x++]}return new wt(m,h,p)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let l in s){let a=s[l],u=e(a,n);t.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let a=[],u=r[l];for(let h=0,p=u.length;h<p;h++){let m=u[h],x=e(m,n);a.push(x)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,a=o.length;l<a;l++){let u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let u in a)a[u]!==void 0&&(e[u]=a[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let a in n){let u=n[a];e.data.attributes[a]=u.toJSON(e.data)}let s={},r=!1;for(let a in this.morphAttributes){let u=this.morphAttributes[a],h=[];for(let p=0,m=u.length;p<m;p++){let x=u[p];h.push(x.toJSON(e.data))}h.length>0&&(s[a]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],p=r[u];for(let m=0,x=p.length;m<x;m++)h.push(p[m].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var If=new H,Sx=new H,wx=new _t,Qi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=If.subVectors(n,t).cross(Sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(If),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wx.getNormalMatrix(e),s=this.coplanarPoint(If).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Tx=0,ps=class extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=Po,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=t0,this.blendDst=n0,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fc,this.stencilZFail=Fc,this.stencilZPass=Fc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let a=r[l];delete a.metadata,o.push(a)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new he().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Is=new H,Lf=new H,mc=new H,gc=new H,_o=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Is.copy(this.origin).addScaledVector(this.direction,t),Is.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Lf.copy(e).add(t).multiplyScalar(.5),mc.copy(t).sub(e).normalize(),gc.copy(this.origin).sub(Lf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(mc),l=gc.dot(this.direction),a=-gc.dot(mc),u=gc.lengthSq(),h=Math.abs(1-o*o),p,m,x,y;if(h>0)if(p=o*a-l,m=o*l-a,y=r*h,p>=0)if(m>=-y)if(m<=y){let M=1/h;p*=M,m*=M,x=p*(p+o*m+2*l)+m*(o*p+m+2*a)+u}else m=r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m=-r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;else m<=-y?(p=Math.max(0,-(-o*r+l)),m=p>0?-r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u):m<=y?(p=0,m=Math.min(Math.max(-r,-a),r),x=m*(m+2*a)+u):(p=Math.max(0,-(o*r+l)),m=p>0?r:Math.min(Math.max(-r,-a),r),x=-p*p+m*(m+2*a)+u);else m=o>0?-r:r,p=Math.max(0,-(o*m+l)),x=-p*p+m*(m+2*a)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Lf).addScaledVector(mc,m),x}intersectSphere(e,t){if(e.radius<0)return null;Is.subVectors(e.center,this.origin);let n=Is.dot(this.direction),s=Is.dot(Is)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,a,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(l=(e.min.z-m.z)*p,a=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,a=(e.min.z-m.z)*p),n>a||l>s)||((l>n||n!==n)&&(n=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Is)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,l=this.direction,a=l.x,u=l.y,h=l.z,p=e.x-o.x,m=e.y-o.y,x=e.z-o.z,y=t.x-o.x,M=t.y-o.y,c=t.z-o.z,f=n.x-o.x,d=n.y-o.y,g=n.z-o.z,v=Math.abs(a),b=Math.abs(u),T=Math.abs(h),w,_,S,E,R,C,I,A,L,D,O,z;if(v>=b&&v>=T?(S=a,C=p,L=y,z=f,a>=0?(w=u,_=h,E=m,R=x,I=M,A=c,D=d,O=g):(w=h,_=u,E=x,R=m,I=c,A=M,D=g,O=d)):b>=T?(S=u,C=m,L=M,z=d,u>=0?(w=h,_=a,E=x,R=p,I=c,A=y,D=g,O=f):(w=a,_=h,E=p,R=x,I=y,A=c,D=f,O=g)):(S=h,C=x,L=c,z=g,h>=0?(w=a,_=u,E=p,R=m,I=y,A=M,D=f,O=d):(w=u,_=a,E=m,R=p,I=M,A=y,D=d,O=f)),S===0)return null;let F=w/S,V=_/S,k=1/S,q=E-F*C,$=R-V*C,Me=I-F*L,Te=A-V*L,Se=D-F*z,G=O-V*z,J=Se*Te-G*Me,ve=q*G-$*Se,Ce=Me*$-Te*q;if(s){if(J<0||ve<0||Ce<0)return null}else if((J<0||ve<0||Ce<0)&&(J>0||ve>0||Ce>0))return null;let te=J+ve+Ce;if(te===0)return null;let ge=k*(J*C+ve*L+Ce*z);return(te>0?ge<0:ge>0)?null:this.at(ge/te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ep=new Qe,Mr=new _o,vc=new di,Ap=new H,xc=new H,yc=new H,_c=new H,Df=new H,bc=new H,Rp=new H,Mc=new H,dt=class extends Tn{constructor(e=new bt,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){bc.set(0,0,0);for(let a=0,u=r.length;a<u;a++){let h=l[a],p=r[a];h!==0&&(Df.fromBufferAttribute(p,e),o?bc.addScaledVector(Df,h):bc.addScaledVector(Df.sub(t),h))}t.add(bc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(r),Mr.copy(e.ray).recast(e.near),!(vc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(vc,Ap)===null||Mr.origin.distanceToSquared(Ap)>(e.far-e.near)**2))&&(Ep.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(Ep),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,m=r.groups,x=r.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,M=m.length;y<M;y++){let c=m[y],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(l.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=l.getX(v),w=l.getX(v+1),_=l.getX(v+2);s=Sc(this,f,e,n,u,h,p,T,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),M=Math.min(l.count,x.start+x.count);for(let c=y,f=M;c<f;c+=3){let d=l.getX(c),g=l.getX(c+1),v=l.getX(c+2);s=Sc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let y=0,M=m.length;y<M;y++){let c=m[y],f=o[c.materialIndex],d=Math.max(c.start,x.start),g=Math.min(a.count,Math.min(c.start+c.count,x.start+x.count));for(let v=d,b=g;v<b;v+=3){let T=v,w=v+1,_=v+2;s=Sc(this,f,e,n,u,h,p,T,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{let y=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let c=y,f=M;c<f;c+=3){let d=c,g=c+1,v=c+2;s=Sc(this,o,e,n,u,h,p,d,g,v),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}}};function Ex(i,e,t,n,s,r,o,l){let a;if(e.side===Vn?a=n.intersectTriangle(o,r,s,!0,l):a=n.intersectTriangle(s,r,o,e.side===gs,l),a===null)return null;Mc.copy(l),Mc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Mc);return u<t.near||u>t.far?null:{distance:u,point:Mc.clone(),object:i}}function Sc(i,e,t,n,s,r,o,l,a,u){i.getVertexPosition(l,xc),i.getVertexPosition(a,yc),i.getVertexPosition(u,_c);let h=Ex(i,e,t,n,xc,yc,_c,Rp);if(h){let p=new H;js.getBarycoord(Rp,xc,yc,_c,p),s&&(h.uv=js.getInterpolatedAttribute(s,l,a,u,p,new Le)),r&&(h.uv1=js.getInterpolatedAttribute(r,l,a,u,p,new Le)),o&&(h.normal=js.getInterpolatedAttribute(o,l,a,u,p,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a:l,b:a,c:u,normal:new H,materialIndex:0};js.getNormal(xc,yc,_c,m.normal),h.face=m,h.barycoord=p}return h}var ts=class extends Yn{constructor(e=null,t=1,n=1,s,r,o,l,a,u=wn,h=wn,p,m){super(null,o,l,a,u,h,s,r,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},oo=new Qe,Cp=new Qe,wc=[],Pp=new fi,Ax=new Qe,Ca=new dt,Pa=new di,ns=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ax)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oo),Pp.copy(e.boundingBox).applyMatrix4(oo),this.boundingBox.union(Pp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oo),Pa.copy(e.boundingSphere).applyMatrix4(oo),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),e.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,oo),Cp.multiplyMatrices(n,oo),Ca.matrixWorld=Cp,Ca.raycast(e,wc);for(let o=0,l=wc.length;o<l;o++){let a=wc[o];a.instanceId=r,a.object=this,t.push(a)}wc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(s*this.count),s,this.count,ar,Ui));let r=this.morphTexture.source.data.data,o=0;for(let u=0;u<n.length;u++)o+=n[u];let l=this.geometry.morphTargetsRelative?1:1-o,a=s*e;return r[a]=l,r.set(n,a+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sr=new di,Rx=new Le(.5,.5),Tc=new H,bo=class{constructor(e=new Qi,t=new Qi,n=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=es,n=!1){let s=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],u=r[3],h=r[4],p=r[5],m=r[6],x=r[7],y=r[8],M=r[9],c=r[10],f=r[11],d=r[12],g=r[13],v=r[14],b=r[15];if(s[0].setComponents(u-o,x-h,f-y,b-d).normalize(),s[1].setComponents(u+o,x+h,f+y,b+d).normalize(),s[2].setComponents(u+l,x+p,f+M,b+g).normalize(),s[3].setComponents(u-l,x-p,f-M,b-g).normalize(),n)s[4].setComponents(a,m,c,v).normalize(),s[5].setComponents(u-a,x-m,f-c,b-v).normalize();else if(s[4].setComponents(u-a,x-m,f-c,b-v).normalize(),t===es)s[5].setComponents(u+a,x+m,f+c,b+v).normalize();else if(t===mo)s[5].setComponents(a,m,c,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);let t=Rx.distanceTo(e.center);return Sr.radius=.7071067811865476+t,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Tc.x=s.normal.x>0?e.max.x:e.min.x,Tc.y=s.normal.y>0?e.max.y:e.min.y,Tc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Kc=class extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$c=new H,Jc=new H,Ip=new Qe,Ia=new _o,Ec=new di,Nf=new H,Lp=new H,Ga=class extends Tn{constructor(e=new bt,t=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$c.fromBufferAttribute(t,s-1),Jc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$c.distanceTo(Jc);e.setAttribute("lineDistance",new je(n,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=r,e.ray.intersectsSphere(Ec)===!1)return;Ip.copy(s).invert(),Ia.copy(e.ray).applyMatrix4(Ip);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let x=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let M=x,c=y-1;M<c;M+=u){let f=h.getX(M),d=h.getX(M+1),g=Ac(this,e,Ia,a,f,d,M);g&&t.push(g)}if(this.isLineLoop){let M=h.getX(y-1),c=h.getX(x),f=Ac(this,e,Ia,a,M,c,y-1);f&&t.push(f)}}else{let x=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let M=x,c=y-1;M<c;M+=u){let f=Ac(this,e,Ia,a,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){let M=Ac(this,e,Ia,a,y-1,x,y-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Ac(i,e,t,n,s,r,o){let l=i.geometry.attributes.position;if($c.fromBufferAttribute(l,s),Jc.fromBufferAttribute(l,r),t.distanceSqToSegment($c,Jc,Nf,Lp)>n)return;Nf.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(Nf);if(!(u<e.near||u>e.far))return{distance:u,point:Lp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Mo=class extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dp=new Qe,Gf=new _o,Rc=new di,Cc=new H,qa=class extends Tn{constructor(e=new bt,t=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rc.copy(n.boundingSphere),Rc.applyMatrix4(s),Rc.radius+=r,e.ray.intersectsSphere(Rc)===!1)return;Dp.copy(s).invert(),Gf.copy(e.ray).applyMatrix4(Dp);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,u=n.index,p=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let y=m,M=x;y<M;y++){let c=u.getX(y);Cc.fromBufferAttribute(p,c),Np(Cc,c,a,s,e,t,this)}}else{let m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let y=m,M=x;y<M;y++)Cc.fromBufferAttribute(p,y),Np(Cc,y,a,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Np(i,e,t,n,s,r,o){let l=Gf.distanceSqToPoint(i);if(l<t){let a=new H;Gf.closestPointToPoint(i,a),a.applyMatrix4(n);let u=s.ray.origin.distanceTo(a);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xa=class extends Yn{constructor(e=[],t=rr,n,s,r,o,l,a,u,h){super(e,t,n,s,r,o,l,a,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ti=class extends Yn{constructor(e,t,n,s,r,o,l,a,u){super(e,t,n,s,r,o,l,a,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qs=class extends Yn{constructor(e,t,n=rs,s,r,o,l=wn,a=wn,u,h=fs,p=1){if(h!==fs&&h!==or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:p};super(m,s,r,o,l,a,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},jc=class extends Qs{constructor(e,t=rs,n=rr,s,r,o=wn,l=wn,a,u=fs){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,l,a,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ya=class extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jt=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],u=[],h=[],p=[],m=0,x=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(a),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2));function y(M,c,f,d,g,v,b,T,w,_,S){let E=v/w,R=b/_,C=v/2,I=b/2,A=T/2,L=w+1,D=_+1,O=0,z=0,F=new H;for(let V=0;V<D;V++){let k=V*R-I;for(let q=0;q<L;q++){let $=q*E-C;F[M]=$*d,F[c]=k*g,F[f]=A,u.push(F.x,F.y,F.z),F[M]=0,F[c]=0,F[f]=T>0?1:-1,h.push(F.x,F.y,F.z),p.push(q/w),p.push(1-V/_),O+=1}}for(let V=0;V<_;V++)for(let k=0;k<w;k++){let q=m+k+L*V,$=m+k+L*(V+1),Me=m+(k+1)+L*(V+1),Te=m+(k+1)+L*V;a.push(q,$,Te),a.push($,Me,Te),z+=6}l.addGroup(x,z,S),x+=z,m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Er=class i extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],l=[],a=[],u=new H,h=new Le;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){let x=n+p/t*s;u.x=e*Math.cos(x),u.y=e*Math.sin(x),o.push(u.x,u.y,u.z),l.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,a.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fi=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],m=[],x=[],y=0,M=[],c=n/2,f=0;d(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(m,3)),this.setAttribute("uv",new je(x,2));function d(){let v=new H,b=new H,T=0,w=(t-e)/n;for(let _=0;_<=r;_++){let S=[],E=_/r,R=E*(t-e)+e;for(let C=0;C<=s;C++){let I=C/s,A=I*a+l,L=Math.sin(A),D=Math.cos(A);b.x=R*L,b.y=-E*n+c,b.z=R*D,p.push(b.x,b.y,b.z),v.set(L,w,D).normalize(),m.push(v.x,v.y,v.z),x.push(I,1-E),S.push(y++)}M.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let E=M[S][_],R=M[S+1][_],C=M[S+1][_+1],I=M[S][_+1];(e>0||S!==0)&&(h.push(E,R,I),T+=3),(t>0||S!==r-1)&&(h.push(R,C,I),T+=3)}u.addGroup(f,T,0),f+=T}function g(v){let b=y,T=new Le,w=new H,_=0,S=v===!0?e:t,E=v===!0?1:-1;for(let C=1;C<=s;C++)p.push(0,c*E,0),m.push(0,E,0),x.push(.5,.5),y++;let R=y;for(let C=0;C<=s;C++){let A=C/s*a+l,L=Math.cos(A),D=Math.sin(A);w.x=S*D,w.y=c*E,w.z=S*L,p.push(w.x,w.y,w.z),m.push(0,E,0),T.x=L*.5+.5,T.y=D*.5*E+.5,x.push(T.x,T.y),y++}for(let C=0;C<s;C++){let I=b+C,A=R+C;v===!0?h.push(A,A+1,I):h.push(A+1,A,I),_+=3}u.addGroup(f,_,v===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qc=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];l(s),u(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(d){let g=new H,v=new H,b=new H;for(let T=0;T<t.length;T+=3)x(t[T+0],g),x(t[T+1],v),x(t[T+2],b),a(g,v,b,d)}function a(d,g,v,b){let T=b+1,w=[];for(let _=0;_<=T;_++){w[_]=[];let S=d.clone().lerp(v,_/T),E=g.clone().lerp(v,_/T),R=T-_;for(let C=0;C<=R;C++)C===0&&_===T?w[_][C]=S:w[_][C]=S.clone().lerp(E,C/R)}for(let _=0;_<T;_++)for(let S=0;S<2*(T-_)-1;S++){let E=Math.floor(S/2);S%2===0?(m(w[_][E+1]),m(w[_+1][E]),m(w[_][E])):(m(w[_][E+1]),m(w[_+1][E+1]),m(w[_+1][E]))}}function u(d){let g=new H;for(let v=0;v<r.length;v+=3)g.x=r[v+0],g.y=r[v+1],g.z=r[v+2],g.normalize().multiplyScalar(d),r[v+0]=g.x,r[v+1]=g.y,r[v+2]=g.z}function h(){let d=new H;for(let g=0;g<r.length;g+=3){d.x=r[g+0],d.y=r[g+1],d.z=r[g+2];let v=c(d)/2/Math.PI+.5,b=f(d)/Math.PI+.5;o.push(v,1-b)}y(),p()}function p(){for(let d=0;d<o.length;d+=6){let g=o[d+0],v=o[d+2],b=o[d+4],T=Math.max(g,v,b),w=Math.min(g,v,b);T>.9&&w<.1&&(g<.2&&(o[d+0]+=1),v<.2&&(o[d+2]+=1),b<.2&&(o[d+4]+=1))}}function m(d){r.push(d.x,d.y,d.z)}function x(d,g){let v=d*3;g.x=e[v+0],g.y=e[v+1],g.z=e[v+2]}function y(){let d=new H,g=new H,v=new H,b=new H,T=new Le,w=new Le,_=new Le;for(let S=0,E=0;S<r.length;S+=9,E+=6){d.set(r[S+0],r[S+1],r[S+2]),g.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),_.set(o[E+4],o[E+5]),b.copy(d).add(g).add(v).divideScalar(3);let R=c(b);M(T,E+0,d,R),M(w,E+2,g,R),M(_,E+4,v,R)}}function M(d,g,v,b){b<0&&d.x===1&&(o[g]=d.x-1),v.x===0&&v.z===0&&(o[g]=b/2/Math.PI+.5)}function c(d){return Math.atan2(d.z,-d.x)}function f(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let l=0,a=r-1,u;for(;l<=a;)if(s=Math.floor(l+(a-l)/2),u=n[s]-o,u<0)l=s+1;else if(u>0)a=s-1;else{a=s;break}if(s=a,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,x=(o-h)/m;return(s+x)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),a=t||(o.isVector2?new Le:new H);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],o=[],l=new H,a=new Qe;for(let x=0;x<=e;x++){let y=x/e;s[x]=this.getTangentAt(y,new H)}r[0]=new H,o[0]=new H;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),m<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=e;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();let y=Math.acos(Pt(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(a.makeRotationAxis(l,y))}o[x].crossVectors(s[x],r[x])}if(t===!0){let x=Math.acos(Pt(r[0].dot(r[e]),-1,1));x/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(x=-x);for(let y=1;y<=e;y++)r[y].applyMatrix4(a.makeRotationAxis(s[y],x*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},So=class extends Si{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new Le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+e*r,a=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=a-this.aX,x=u-this.aY;a=m*h-x*p+this.aX,u=m*p+x*h+this.aY}return n.set(a,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},eu=class extends So{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function y0(){let i=0,e=0,t=0,n=0;function s(r,o,l,a){i=r,e=l,t=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,u){s(o,l,u*(l-r),u*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,u,h,p){let m=(o-r)/u-(l-r)/(u+h)+(l-o)/h,x=(l-o)/h-(a-o)/(h+p)+(a-l)/p;m*=h,x*=h,s(o,l,m,x)},calc:function(r){let o=r*r,l=o*r;return i+e*r+t*o+n*l}}}var Fp=new H,Up=new H,Ff=new y0,Uf=new y0,Bf=new y0,tu=class extends Si{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let u,h;this.closed||l>0?u=s[(l-1)%r]:(Up.subVectors(s[0],s[1]).add(s[0]),u=Up);let p=s[l%r],m=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(Fp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fp),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,y=Math.pow(u.distanceToSquared(p),x),M=Math.pow(p.distanceToSquared(m),x),c=Math.pow(m.distanceToSquared(h),x);M<1e-4&&(M=1),y<1e-4&&(y=M),c<1e-4&&(c=M),Ff.initNonuniformCatmullRom(u.x,p.x,m.x,h.x,y,M,c),Uf.initNonuniformCatmullRom(u.y,p.y,m.y,h.y,y,M,c),Bf.initNonuniformCatmullRom(u.z,p.z,m.z,h.z,y,M,c)}else this.curveType==="catmullrom"&&(Ff.initCatmullRom(u.x,p.x,m.x,h.x,this.tension),Uf.initCatmullRom(u.y,p.y,m.y,h.y,this.tension),Bf.initCatmullRom(u.z,p.z,m.z,h.z,this.tension));return n.set(Ff.calc(a),Uf.calc(a),Bf.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Bp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,l=i*i,a=i*l;return(2*t-2*n+r+o)*a+(-3*t+3*n-2*r-o)*l+r*i+t}function Cx(i,e){let t=1-i;return t*t*e}function Px(i,e){return 2*(1-i)*i*e}function Ix(i,e){return i*i*e}function Da(i,e,t,n){return Cx(i,e)+Px(i,t)+Ix(i,n)}function Lx(i,e){let t=1-i;return t*t*t*e}function Dx(i,e){let t=1-i;return 3*t*t*i*e}function Nx(i,e){return 3*(1-i)*i*i*e}function Fx(i,e){return i*i*i*e}function Na(i,e,t,n,s){return Lx(i,e)+Dx(i,t)+Nx(i,n)+Fx(i,s)}var Za=class extends Si{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Na(e,s.x,r.x,o.x,l.x),Na(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nu=class extends Si{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Na(e,s.x,r.x,o.x,l.x),Na(e,s.y,r.y,o.y,l.y),Na(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends Si{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},iu=class extends Si{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Si{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Da(e,s.x,r.x,o.x),Da(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},su=class extends Si{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Da(e,s.x,r.x,o.x),Da(e,s.y,r.y,o.y),Da(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,a=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Bp(l,a.x,u.x,h.x,p.x),Bp(l,a.y,u.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Le().fromArray(s))}return this}},Op=Object.freeze({__proto__:null,ArcCurve:eu,CatmullRomCurve3:tu,CubicBezierCurve:Za,CubicBezierCurve3:nu,EllipseCurve:So,LineCurve:Ka,LineCurve3:iu,QuadraticBezierCurve:$a,QuadraticBezierCurve3:su,SplineCurve:Ja}),ru=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Op[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],a=l.getLength(),u=a===0?0:1-o/a;return l.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let u=0;u<a.length;u++){let h=a[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Op[s.type]().fromJSON(s))}return this}},ja=class extends ru{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ka(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new $a(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let l=new Za(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,a){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,l,a),this}absellipse(e,t,n,s,r,o,l,a){let u=new So(e,t,n,s,r,o,l,a);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wo=class extends ja{constructor(e){super(e),this.uuid=Do(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ja().fromJSON(s))}return this}};function Ux(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let l,a,u;if(n&&(r=Hx(i,e,r,t)),i.length>80*t){l=i[0],a=i[1];let h=l,p=a;for(let m=t;m<s;m+=t){let x=i[m],y=i[m+1];x<l&&(l=x),y<a&&(a=y),x>h&&(h=x),y>p&&(p=y)}u=Math.max(h-l,p-a),u=u!==0?32767/u:0}return Qa(r,o,t,l,a,u,0),o}function Nm(i,e,t,n,s){let r;if(s===jx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=kp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=kp(o/n|0,i[o],i[o+1],r);return r&&To(r,r.next)&&(tl(r),r=r.next),r}function Ar(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(To(t,t.next)||dn(t.prev,t,t.next)===0)){if(tl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Xx(i,n,s,r);let l=i;for(;i.prev!==i.next;){let a=i.prev,u=i.next;if(r?Ox(i,n,s,r):Bx(i)){e.push(a.i,i.i,u.i),tl(i),i=u.next,l=u.next;continue}if(i=u,i===l){o?o===1?(i=kx(Ar(i),e),Qa(i,e,t,n,s,r,2)):o===2&&zx(i,e,t,n,s,r):Qa(Ar(i),e,t,n,s,r,1);break}}}function Bx(i){let e=i.prev,t=i,n=i.next;if(dn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,l=e.y,a=t.y,u=n.y,h=Math.min(s,r,o),p=Math.min(l,a,u),m=Math.max(s,r,o),x=Math.max(l,a,u),y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=m&&y.y>=p&&y.y<=x&&La(s,l,r,a,o,u,y.x,y.y)&&dn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Ox(i,e,t,n){let s=i.prev,r=i,o=i.next;if(dn(s,r,o)>=0)return!1;let l=s.x,a=r.x,u=o.x,h=s.y,p=r.y,m=o.y,x=Math.min(l,a,u),y=Math.min(h,p,m),M=Math.max(l,a,u),c=Math.max(h,p,m),f=qf(x,y,e,t,n),d=qf(M,c,e,t,n),g=i.prevZ,v=i.nextZ;for(;g&&g.z>=f&&v&&v.z<=d;){if(g.x>=x&&g.x<=M&&g.y>=y&&g.y<=c&&g!==s&&g!==o&&La(l,h,a,p,u,m,g.x,g.y)&&dn(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=x&&v.x<=M&&v.y>=y&&v.y<=c&&v!==s&&v!==o&&La(l,h,a,p,u,m,v.x,v.y)&&dn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=f;){if(g.x>=x&&g.x<=M&&g.y>=y&&g.y<=c&&g!==s&&g!==o&&La(l,h,a,p,u,m,g.x,g.y)&&dn(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=d;){if(v.x>=x&&v.x<=M&&v.y>=y&&v.y<=c&&v!==s&&v!==o&&La(l,h,a,p,u,m,v.x,v.y)&&dn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function kx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!To(n,s)&&Um(n,t,t.next,s)&&el(n,s)&&el(s,n)&&(e.push(n.i,t.i,s.i),tl(t),tl(t.next),t=i=s),t=t.next}while(t!==i);return Ar(t)}function zx(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Kx(o,l)){let a=Bm(o,l);o=Ar(o,o.next),a=Ar(a,a.next),Qa(o,e,t,n,s,r,0),Qa(a,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function Hx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let l=e[r]*n,a=r<o-1?e[r+1]*n:i.length,u=Nm(i,l,a,n,!1);u===u.next&&(u.steiner=!0),s.push(Zx(u))}s.sort(Vx);for(let r=0;r<s.length;r++)t=Wx(s[r],t);return t}function Vx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Wx(i,e){let t=Gx(i,e);if(!t)return e;let n=Bm(t,i);return Ar(n,n.next),Ar(t,t.next)}function Gx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(To(i,t))return t;do{if(To(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let l=o,a=o.x,u=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=a&&n!==t.x&&Fm(s<u?n:r,s,a,u,s<u?r:n,s,t.x,t.y)){let p=Math.abs(s-t.y)/(n-t.x);el(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&qx(o,t)))&&(o=t,h=p)}t=t.next}while(t!==l);return o}function qx(i,e){return dn(i.prev,i,e.prev)<0&&dn(e.next,i,i.next)<0}function Xx(i,e,t,n){let s=i;do s.z===0&&(s.z=qf(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yx(s)}function Yx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let u=0;u<t&&(l++,o=o.nextZ,!!o);u++);let a=t;for(;l>0||a>0&&o;)l!==0&&(a===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,a--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function qf(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Zx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fm(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function La(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&Fm(i,e,t,n,s,r,o,l)}function Kx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$x(i,e)&&(el(i,e)&&el(e,i)&&Jx(i,e)&&(dn(i.prev,i,e.prev)||dn(i,e.prev,e))||To(i,e)&&dn(i.prev,i,i.next)>0&&dn(e.prev,e,e.next)>0)}function dn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function To(i,e){return i.x===e.x&&i.y===e.y}function Um(i,e,t,n){let s=Ic(dn(i,e,t)),r=Ic(dn(i,e,n)),o=Ic(dn(t,n,i)),l=Ic(dn(t,n,e));return!!(s!==r&&o!==l||s===0&&Pc(i,t,e)||r===0&&Pc(i,n,e)||o===0&&Pc(t,i,n)||l===0&&Pc(t,e,n))}function Pc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ic(i){return i>0?1:i<0?-1:0}function $x(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Um(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function el(i,e){return dn(i.prev,i,i.next)<0?dn(i,e,i.next)>=0&&dn(i,i.prev,e)>=0:dn(i,e,i.prev)<0||dn(i,i.next,e)<0}function Jx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bm(i,e){let t=Xf(i.i,i.x,i.y),n=Xf(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kp(i,e,t,n){let s=Xf(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function tl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xf(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Yf=class{static triangulate(e,t,n=2){return Ux(e,t,n)}},fo=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];zp(e),Hp(n,e);let o=e.length;t.forEach(zp);for(let a=0;a<t.length;a++)s.push(o),o+=t[a].length,Hp(n,t[a]);let l=Yf.triangulate(n,s);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}};function zp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Hp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var nl=class i extends Qc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var nn=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,l=Math.floor(n),a=Math.floor(s),u=l+1,h=a+1,p=e/l,m=t/a,x=[],y=[],M=[],c=[];for(let f=0;f<h;f++){let d=f*m-o;for(let g=0;g<u;g++){let v=g*p-r;y.push(v,-d,0),M.push(0,0,1),c.push(g/l),c.push(1-f/a)}}for(let f=0;f<a;f++)for(let d=0;d<l;d++){let g=d+u*f,v=d+u*(f+1),b=d+1+u*(f+1),T=d+1+u*f;x.push(g,v,T),x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(M,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var il=class i extends bt{constructor(e=new wo([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],l=0,a=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function u(h){let p=s.length/3,m=h.extractPoints(t),x=m.shape,y=m.holes;fo.isClockWise(x)===!1&&(x=x.reverse());for(let c=0,f=y.length;c<f;c++){let d=y[c];fo.isClockWise(d)===!0&&(y[c]=d.reverse())}let M=fo.triangulateShape(x,y);for(let c=0,f=y.length;c<f;c++){let d=y[c];x=x.concat(d)}for(let c=0,f=x.length;c<f;c++){let d=x[c];s.push(d.x,d.y,0),r.push(0,0,1),o.push(d.x,d.y)}for(let c=0,f=M.length;c<f;c++){let d=M[c],g=d[0]+p,v=d[1]+p,b=d[2]+p;n.push(g,v,b),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Qx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Qx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var sl=class i extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let a=Math.min(o+l,Math.PI),u=0,h=[],p=new H,m=new H,x=[],y=[],M=[],c=[];for(let f=0;f<=n;f++){let d=[],g=f/n,v=o+g*l,b=e*Math.cos(v),T=Math.sqrt(e*e-b*b),w=0;f===0&&o===0?w=.5/t:f===n&&a===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){let S=_/t,E=s+S*r;p.x=-T*Math.cos(E),p.y=b,p.z=T*Math.sin(E),y.push(p.x,p.y,p.z),m.copy(p).normalize(),M.push(m.x,m.y,m.z),c.push(S+w,1-g),d.push(u++)}h.push(d)}for(let f=0;f<n;f++)for(let d=0;d<t;d++){let g=h[f][d+1],v=h[f][d],b=h[f+1][d],T=h[f+1][d+1];(f!==0||o>0)&&x.push(g,v,T),(f!==n-1||a<Math.PI)&&x.push(v,b,T)}this.setIndex(x),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(M,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rl=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);let a=[],u=[],h=[],p=[],m=new H,x=new H,y=new H;for(let M=0;M<=n;M++){let c=o+M/n*l;for(let f=0;f<=s;f++){let d=f/s*r;x.x=(e+t*Math.cos(c))*Math.cos(d),x.y=(e+t*Math.cos(c))*Math.sin(d),x.z=t*Math.sin(c),u.push(x.x,x.y,x.z),m.x=e*Math.cos(d),m.y=e*Math.sin(d),y.subVectors(x,m).normalize(),h.push(y.x,y.y,y.z),p.push(f/s),p.push(M/n)}}for(let M=1;M<=n;M++)for(let c=1;c<=s;c++){let f=(s+1)*M+c-1,d=(s+1)*(M-1)+c-1,g=(s+1)*(M-1)+c,v=(s+1)*M+c;a.push(f,d,v),a.push(d,g,v)}this.setIndex(a),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Vp(s))s.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Vp(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jn(i){let e={};for(let t=0;t<i.length;t++){let n=Ir(i[t]);for(let s in n)e[s]=n[s]}return e}function Vp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function e2(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}var Lr={clone:Ir,merge:Jn},t2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mt=class extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t2,this.fragmentShader=n2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=e2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new he().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ou=class extends mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var sn=class extends ps{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new he(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var er=class extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},au=class extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ao(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Of(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var tr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(n=2,r=l);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lu=class extends tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hf,endingEnd:Hf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,l=s[r],a=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Vf:r=e,l=2*t-n;break;case Wf:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Vf:o=e,a=2*n-t;break;case Wf:o=1,a=n+s[1]-s[0];break;default:o=e-1,a=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(a-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,x=this._weightNext,y=(n-t)/(s-t),M=y*y,c=M*y,f=-m*c+2*m*M-m*y,d=(1+m)*c+(-1.5-2*m)*M+(-.5+m)*y+1,g=(-1-x)*c+(1.5+x)*M+.5*y,v=x*c-x*M;for(let b=0;b!==l;++b)r[b]=f*o[h+b]+d*o[u+b]+g*o[a+b]+v*o[p+b];return r}},cu=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=(n-t)/(s-t),p=1-h;for(let m=0;m!==l;++m)r[m]=o[u+m]*p+o[a+m]*h;return r}},uu=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hu=class extends tr{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=e*l,u=a-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let y=(n-t)/(s-t),M=1-y;for(let c=0;c!==l;++c)r[c]=o[u+c]*M+o[a+c]*y;return r}let m=l*2,x=e-1;for(let y=0;y!==l;++y){let M=o[u+y],c=o[a+y],f=x*m+y*2,d=p[f],g=p[f+1],v=e*m+y*2,b=h[v],T=h[v+1],w=s2(n,t,d,b,s);r[y]=Om(w,M,g,T,c)}return r}};function Om(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function i2(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function s2(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let l=Om(r,e,t,n,s)-i;if(Math.abs(l)<1e-10)break;let a=i2(r,e,t,n,s);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}var wi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Of(e.settings)&&(n.settings={inTangents:ao(e.settings.inTangents,Array),outTangents:ao(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fa:t=this.InterpolantFactoryMethodDiscrete;break;case qc:t=this.InterpolantFactoryMethodLinear;break;case Nc:t=this.InterpolantFactoryMethodSmooth;break;case zf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ft("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return qc;case this.InterpolantFactoryMethodSmooth:return Nc;case this.InterpolantFactoryMethodBezier:return zf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Of(this.settings)&&(Wp(this.settings.inTangents,e),Wp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(vt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(vt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){let a=n[l];if(typeof a=="number"&&isNaN(a)){vt("KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(o!==null&&o>a){vt("KeyframeTrack: Out of order keys.",this,l,a,o),e=!1;break}o=a}if(s!==void 0&&lx(s))for(let l=0,a=s.length;l!==a;++l){let u=s[l];if(isNaN(u)){vt("KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nc,r=e.length-1,o=1;for(let l=1;l<r;++l){let a=!1,u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(s)a=!0;else{let p=l*n,m=p-n,x=p+n;for(let y=0;y!==n;++y){let M=t[p+y];if(M!==t[m+y]||M!==t[x+y]){a=!0;break}}}if(a){if(l!==o){e[o]=e[l];let p=l*n,m=o*n;for(let x=0;x!==n;++x)t[m+x]=t[p+x]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,a=o*n,u=0;u!==n;++u)t[a+u]=t[l+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Of(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=qc;var nr=class extends wi{constructor(e,t,n){super(e,t,n)}};nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Fa;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var fu=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}};fu.prototype.ValueTypeName="color";var du=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}};du.prototype.ValueTypeName="number";var pu=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(n-t)/(s-t),u=e*l;for(let h=u+l;u!==h;u+=4)pn.slerpFlat(r,0,o,u-l,o,u,a);return r}},ol=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new pu(this.times,this.values,this.getValueSize(),e)}};ol.prototype.ValueTypeName="quaternion";ol.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends wi{constructor(e,t,n){super(e,t,n)}};ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Fa;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var mu=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}};mu.prototype.ValueTypeName="vector";var Uc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Gp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Gp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Gp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var gu=class{constructor(e,t,n){let s=this,r=!1,o=0,l=0,a,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,l),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=u.length;p<m;p+=2){let x=u[p],y=u[p+1];if(x.global&&(x.lastIndex=0),x.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},km=new gu,Eo=class{constructor(e){this.manager=e!==void 0?e:km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var lo=new WeakMap,vu=class extends Eo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Uc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=lo.get(o);p===void 0&&(p=[],lo.set(o,p)),p.push({onLoad:t,onError:s})}return o}let l=go("img");function a(){h(),t&&t(this);let p=lo.get(this)||[];for(let m=0;m<p.length;m++){let x=p[m];x.onLoad&&x.onLoad(this)}lo.delete(this),r.manager.itemEnd(e)}function u(p){h(),s&&s(p),Uc.remove(`image:${e}`);let m=lo.get(this)||[];for(let x=0;x<m.length;x++){let y=m[x];y.onError&&y.onError(p)}lo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){l.removeEventListener("load",a,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Uc.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}};var al=class extends Eo{constructor(e){super(e)}load(e,t,n,s){let r=new Yn,o=new vu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ao=class extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ll=class extends Ao{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},kf=new Qe,qp=new H,Xp=new H,cl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qp.setFromMatrixPosition(e.matrixWorld),t.position.copy(qp),Xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){kf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,a=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===mo||e.reversedDepth?t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+a,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),t.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lc=new H,Dc=new pn,us=new H,Ns=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=es,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Dc,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,us.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Lc,Dc,us),us.x===1&&us.y===1&&us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,us.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Js=new H,Yp=new Le,Zp=new Le,Hn=class extends Ns{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(df*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,t){return this.getViewBounds(e,Yp,Zp),t.subVectors(Zp,Yp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(df*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/a,t-=o.offsetY*n/u,s*=o.width/a,n*=o.height/u}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zf=class extends cl{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Oa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ul=class extends Ao{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var sr=class extends Ns{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,l=s+t,a=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kf=class extends cl{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new Kf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ms=class extends bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var co=-90,uo=1,xu=class extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(co,uo,e,t);s.layers=this.layers,this.add(s);let r=new Hn(co,uo,e,t);r.layers=this.layers,this.add(r);let o=new Hn(co,uo,e,t);o.layers=this.layers,this.add(o);let l=new Hn(co,uo,e,t);l.layers=this.layers,this.add(l);let a=new Hn(co,uo,e,t);a.layers=this.layers,this.add(a);let u=new Hn(co,uo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,a]=t;for(let u of t)this.remove(u);if(e===es)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,a,u,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,4,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,m,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},yu=class extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},hl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=r2.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function r2(){this._document.hidden===!1&&this.reset()}var b0="\\[\\]\\.:\\/",o2=new RegExp("["+b0+"]","g"),M0="[^"+b0+"]",a2="[^"+b0.replace("\\.","")+"]",l2=/((?:WC+[\/:])*)/.source.replace("WC",M0),c2=/(WCOD+)?/.source.replace("WCOD",a2),u2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",M0),h2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",M0),f2=new RegExp("^"+l2+c2+u2+h2+"$"),d2=["material","materials","bones","map"],$f=class{constructor(e,t,n){let s=n||tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(o2,"")}static parseTrackName(e){let t=f2.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);d2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===t||l.uuid===t)return l;let a=n(l.children);if(a)return a}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;vt("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tn.Composite=$f;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vw=new Float32Array(1);var R0=class R0{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};R0.prototype.isMatrix2=!0;var Jf=R0;function S0(i,e,t,n){let s=p2(n);switch(t){case m0:return i*e;case ar:return i*e/s.components*s.byteLength;case Au:return i*e/s.components*s.byteLength;case lr:return i*e*2/s.components*s.byteLength;case Ru:return i*e*2/s.components*s.byteLength;case g0:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case Cu:return i*e*4/s.components*s.byteLength;case ml:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vl:case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Iu:case Du:return Math.max(i,16)*Math.max(e,8)/4;case Pu:case Lu:return Math.max(i,8)*Math.max(e,8)/2;case Nu:case Fu:case Bu:case Ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uu:case yl:case ku:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $u:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ju:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eh:case th:case nh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ih:case sh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _l:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function p2(i){switch(i){case Kn:case h0:return{byteLength:1,components:1};case Io:case f0:case En:return{byteLength:2,components:1};case Tu:case Eu:return{byteLength:2,components:4};case rs:case wu:case Ui:return{byteLength:4,components:1};case d0:case p0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ag(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function b2(i){let e=new WeakMap;function t(l,a){let u=l.array,h=l.usage,p=u.byteLength,m=i.createBuffer();i.bindBuffer(a,m),i.bufferData(a,u,h),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,a,u){let h=a.array,p=a.updateRanges;if(i.bindBuffer(u,l),p.length===0)i.bufferSubData(u,0,h);else{p.sort((x,y)=>x.start-y.start);let m=0;for(let x=1;x<p.length;x++){let y=p[m],M=p[x];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++m,p[m]=M)}p.length=m+1;for(let x=0,y=p.length;x<y;x++){let M=p[x];i.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let a=e.get(l);a&&(i.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=e.get(l);if(u===void 0)e.set(l,t(l,a));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,a),u.version=l.version}}return{get:s,remove:r,update:o}}var M2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S2=`#ifdef USE_ALPHAHASH
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
#endif`,w2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R2=`#ifdef USE_AOMAP
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
#endif`,C2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P2=`#ifdef USE_BATCHING
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
#endif`,I2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F2=`#ifdef USE_IRIDESCENCE
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
#endif`,U2=`#ifdef USE_BUMPMAP
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
#endif`,B2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,G2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,q2=`#define PI 3.141592653589793
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
} // validated`,X2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y2=`vec3 transformedNormal = objectNormal;
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
#endif`,Z2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j2="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
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
}`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
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
#endif`,_y=`uniform sampler2D dfgLUT;
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
}`,by=`
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,By=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oy=`#ifdef USE_MORPHTARGETS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
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
#endif`,Xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a_=`float getShadowMask() {
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
}`,l_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`#include <common>
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
}`,C_=`#if DEPTH_PACKING == 3200
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
}`,P_=`#define DISTANCE
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
}`,I_=`#define DISTANCE
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`uniform float scale;
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
}`,F_=`uniform vec3 diffuse;
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
}`,U_=`#include <common>
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
}`,B_=`uniform vec3 diffuse;
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
}`,O_=`#define LAMBERT
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
}`,k_=`#define LAMBERT
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
}`,z_=`#define MATCAP
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
}`,H_=`#define MATCAP
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
}`,V_=`#define NORMAL
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
}`,W_=`#define NORMAL
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
}`,G_=`#define PHONG
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
}`,q_=`#define PHONG
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
}`,X_=`#define STANDARD
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
}`,Y_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,K_=`#define TOON
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
}`,$_=`uniform float size;
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
}`,J_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,Q_=`uniform vec3 color;
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
}`,eb=`uniform float rotation;
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
}`,tb=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:M2,alphahash_pars_fragment:S2,alphamap_fragment:w2,alphamap_pars_fragment:T2,alphatest_fragment:E2,alphatest_pars_fragment:A2,aomap_fragment:R2,aomap_pars_fragment:C2,batching_pars_vertex:P2,batching_vertex:I2,begin_vertex:L2,beginnormal_vertex:D2,bsdfs:N2,iridescence_fragment:F2,bumpmap_pars_fragment:U2,clipping_planes_fragment:B2,clipping_planes_pars_fragment:O2,clipping_planes_pars_vertex:k2,clipping_planes_vertex:z2,color_fragment:H2,color_pars_fragment:V2,color_pars_vertex:W2,color_vertex:G2,common:q2,cube_uv_reflection_fragment:X2,defaultnormal_vertex:Y2,displacementmap_pars_vertex:Z2,displacementmap_vertex:K2,emissivemap_fragment:$2,emissivemap_pars_fragment:J2,colorspace_fragment:j2,colorspace_pars_fragment:Q2,envmap_fragment:ey,envmap_common_pars_fragment:ty,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:py,envmap_vertex:sy,fog_vertex:ry,fog_pars_vertex:oy,fog_fragment:ay,fog_pars_fragment:ly,gradientmap_pars_fragment:cy,lightmap_pars_fragment:uy,lights_lambert_fragment:hy,lights_lambert_pars_fragment:fy,lights_pars_begin:dy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:vy,lights_phong_pars_fragment:xy,lights_physical_fragment:yy,lights_physical_pars_fragment:_y,lights_fragment_begin:by,lights_fragment_maps:My,lights_fragment_end:Sy,lightprobes_pars_fragment:wy,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Ey,logdepthbuf_pars_vertex:Ay,logdepthbuf_vertex:Ry,map_fragment:Cy,map_pars_fragment:Py,map_particle_fragment:Iy,map_particle_pars_fragment:Ly,metalnessmap_fragment:Dy,metalnessmap_pars_fragment:Ny,morphinstance_vertex:Fy,morphcolor_vertex:Uy,morphnormal_vertex:By,morphtarget_pars_vertex:Oy,morphtarget_vertex:ky,normal_fragment_begin:zy,normal_fragment_maps:Hy,normal_pars_fragment:Vy,normal_pars_vertex:Wy,normal_vertex:Gy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Xy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:Zy,iridescence_pars_fragment:Ky,opaque_fragment:$y,packing:Jy,premultiplied_alpha_fragment:jy,project_vertex:Qy,dithering_fragment:e_,dithering_pars_fragment:t_,roughnessmap_fragment:n_,roughnessmap_pars_fragment:i_,shadowmap_pars_fragment:s_,shadowmap_pars_vertex:r_,shadowmap_vertex:o_,shadowmask_pars_fragment:a_,skinbase_vertex:l_,skinning_pars_vertex:c_,skinning_vertex:u_,skinnormal_vertex:h_,specularmap_fragment:f_,specularmap_pars_fragment:d_,tonemapping_fragment:p_,tonemapping_pars_fragment:m_,transmission_fragment:g_,transmission_pars_fragment:v_,uv_pars_fragment:x_,uv_pars_vertex:y_,uv_vertex:__,worldpos_vertex:b_,background_vert:M_,background_frag:S_,backgroundCube_vert:w_,backgroundCube_frag:T_,cube_vert:E_,cube_frag:A_,depth_vert:R_,depth_frag:C_,distance_vert:P_,distance_frag:I_,equirect_vert:L_,equirect_frag:D_,linedashed_vert:N_,linedashed_frag:F_,meshbasic_vert:U_,meshbasic_frag:B_,meshlambert_vert:O_,meshlambert_frag:k_,meshmatcap_vert:z_,meshmatcap_frag:H_,meshnormal_vert:V_,meshnormal_frag:W_,meshphong_vert:G_,meshphong_frag:q_,meshphysical_vert:X_,meshphysical_frag:Y_,meshtoon_vert:Z_,meshtoon_frag:K_,points_vert:$_,points_frag:J_,shadow_vert:j_,shadow_frag:Q_,sprite_vert:eb,sprite_frag:tb},Ye={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},xs={basic:{uniforms:Jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Jn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Jn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Jn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new he(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Jn([Ye.points,Ye.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Jn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Jn([Ye.common,Ye.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Jn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Jn([Ye.sprite,Ye.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Jn([Ye.common,Ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Jn([Ye.lights,Ye.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};xs.physical={uniforms:Jn([xs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var ch={r:0,b:0,g:0},nb=new Qe,lg=new _t;lg.set(-1,0,0,0,1,0,0,0,1);function ib(i,e,t,n,s,r){let o=new he(0),l=s===!0?0:1,a,u,h=null,p=0,m=null;function x(d){let g=d.isScene===!0?d.background:null;if(g&&g.isTexture){let v=d.backgroundBlurriness>0;g=e.get(g,v)}return g}function y(d){let g=!1,v=x(d);v===null?c(o,l):v&&v.isColor&&(c(v,1),g=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||g)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(d,g){let v=x(g);v&&(v.isCubeTexture||v.mapping===dl)?(u===void 0&&(u=new dt(new Jt(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Ir(xs.backgroundCube.uniforms),vertexShader:xs.backgroundCube.vertexShader,fragmentShader:xs.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nb.makeRotationFromEuler(g.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(lg),u.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Ht,(h!==v||p!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new dt(new nn(2,2),new mt({name:"BackgroundMaterial",uniforms:Ir(xs.background.uniforms),vertexShader:xs.background.vertexShader,fragmentShader:xs.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,a.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||m!==i.toneMapping)&&(a.material.needsUpdate=!0,h=v,p=v.version,m=i.toneMapping),a.layers.enableAll(),d.unshift(a,a.geometry,a.material,0,0,null))}function c(d,g){d.getRGB(ch,_0(i)),t.buffers.color.setClear(ch.r,ch.g,ch.b,g,r)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,g=1){o.set(d),l=g,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,c(o,l)},render:y,addToRenderList:M,dispose:f}}function sb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function l(R,C,I,A,L){let D=!1,O=p(R,A,I,C);r!==O&&(r=O,u(r.object)),D=x(R,A,I,L),D&&y(R,A,I,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(R,C,I,A),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function a(){return i.createVertexArray()}function u(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function p(R,C,I,A){let L=A.wireframe===!0,D=n[C.id];D===void 0&&(D={},n[C.id]=D);let O=R.isInstancedMesh===!0?R.id:0,z=D[O];z===void 0&&(z={},D[O]=z);let F=z[I.id];F===void 0&&(F={},z[I.id]=F);let V=F[L];return V===void 0&&(V=m(a()),F[L]=V),V}function m(R){let C=[],I=[],A=[];for(let L=0;L<t;L++)C[L]=0,I[L]=0,A[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:A,object:R,attributes:{},index:null}}function x(R,C,I,A){let L=r.attributes,D=C.attributes,O=0,z=I.getAttributes();for(let F in z)if(z[F].location>=0){let k=L[F],q=D[F];if(q===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),k===void 0||k.attribute!==q||q&&k.data!==q.data)return!0;O++}return r.attributesNum!==O||r.index!==A}function y(R,C,I,A){let L={},D=C.attributes,O=0,z=I.getAttributes();for(let F in z)if(z[F].location>=0){let k=D[F];k===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(k=R.instanceColor));let q={};q.attribute=k,k&&k.data&&(q.data=k.data),L[F]=q,O++}r.attributes=L,r.attributesNum=O,r.index=A}function M(){let R=r.newAttributes;for(let C=0,I=R.length;C<I;C++)R[C]=0}function c(R){f(R,0)}function f(R,C){let I=r.newAttributes,A=r.enabledAttributes,L=r.attributeDivisors;I[R]=1,A[R]===0&&(i.enableVertexAttribArray(R),A[R]=1),L[R]!==C&&(i.vertexAttribDivisor(R,C),L[R]=C)}function d(){let R=r.newAttributes,C=r.enabledAttributes;for(let I=0,A=C.length;I<A;I++)C[I]!==R[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function g(R,C,I,A,L,D,O){O===!0?i.vertexAttribIPointer(R,C,I,L,D):i.vertexAttribPointer(R,C,I,A,L,D)}function v(R,C,I,A){M();let L=A.attributes,D=I.getAttributes(),O=C.defaultAttributeValues;for(let z in D){let F=D[z];if(F.location>=0){let V=L[z];if(V===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(V=R.instanceColor)),V!==void 0){let k=V.normalized,q=V.itemSize,$=e.get(V);if($===void 0)continue;let Me=$.buffer,Te=$.type,Se=$.bytesPerElement,G=Te===i.INT||Te===i.UNSIGNED_INT||V.gpuType===wu;if(V.isInterleavedBufferAttribute){let J=V.data,ve=J.stride,Ce=V.offset;if(J.isInstancedInterleavedBuffer){for(let te=0;te<F.locationSize;te++)f(F.location+te,J.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let te=0;te<F.locationSize;te++)c(F.location+te);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let te=0;te<F.locationSize;te++)g(F.location+te,q/F.locationSize,Te,k,ve*Se,(Ce+q/F.locationSize*te)*Se,G)}else{if(V.isInstancedBufferAttribute){for(let J=0;J<F.locationSize;J++)f(F.location+J,V.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let J=0;J<F.locationSize;J++)c(F.location+J);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let J=0;J<F.locationSize;J++)g(F.location+J,q/F.locationSize,Te,k,q*Se,q/F.locationSize*J*Se,G)}}else if(O!==void 0){let k=O[z];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(F.location,k);break;case 3:i.vertexAttrib3fv(F.location,k);break;case 4:i.vertexAttrib4fv(F.location,k);break;default:i.vertexAttrib1fv(F.location,k)}}}}d()}function b(){S();for(let R in n){let C=n[R];for(let I in C){let A=C[I];for(let L in A){let D=A[L];for(let O in D)h(D[O].object),delete D[O];delete A[L]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;let C=n[R.id];for(let I in C){let A=C[I];for(let L in A){let D=A[L];for(let O in D)h(D[O].object),delete D[O];delete A[L]}}delete n[R.id]}function w(R){for(let C in n){let I=n[C];for(let A in I){let L=I[A];if(L[R.id]===void 0)continue;let D=L[R.id];for(let O in D)h(D[O].object),delete D[O];delete L[R.id]}}}function _(R){for(let C in n){let I=n[C],A=R.isInstancedMesh===!0?R.id:0,L=I[A];if(L!==void 0){for(let D in L){let O=L[D];for(let z in O)h(O[z].object),delete O[z];delete L[D]}delete I[A],Object.keys(I).length===0&&delete n[C]}}}function S(){E(),o=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:S,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:c,disableUnusedAttributes:d}}function rb(i,e,t){let n;function s(a){n=a}function r(a,u){i.drawArrays(n,a,u),t.update(u,n,1)}function o(a,u,h){h!==0&&(i.drawArraysInstanced(n,a,u,h),t.update(u,n,h))}function l(a,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,u,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x];t.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function ob(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==$n&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){let _=w===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Kn&&w!==Ui&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function a(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",h=a(u);h!==u&&(ft("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:c,maxAttributes:f,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:v,maxSamples:b,samples:T}}function ab(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Qi,l=new _t,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let x=p.length!==0||m||n!==0||s;return s=m,n=p.length,x},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,x){let y=p.clippingPlanes,M=p.clipIntersection,c=p.clipShadows,f=i.get(p);if(!s||y===null||y.length===0||r&&!c)r?h(null):u();else{let d=r?0:n,g=d*4,v=f.clippingState||null;a.value=v,v=h(y,m,g,x);for(let b=0;b!==g;++b)v[b]=t[b];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=d}};function u(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,x,y){let M=p!==null?p.length:0,c=null;if(M!==0){if(c=a.value,y!==!0||c===null){let f=x+M*4,d=m.matrixWorldInverse;l.getNormalMatrix(d),(c===null||c.length<f)&&(c=new Float32Array(f));for(let g=0,v=x;g!==M;++g,v+=4)o.copy(p[g]).applyMatrix4(d,l),o.normal.toArray(c,v),c[v+3]=o.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,c}}var Fo=4,lb=6,cb=20,ub=256,bl=new sr,zm=new he,C0=null,P0=0,I0=0,L0=!1,hb=new H,Dr=new H,hh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:l=hb}=r;C0=this._renderer.getRenderTarget(),P0=this._renderer.getActiveCubeFace(),I0=this._renderer.getActiveMipmapLevel(),L0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a,l),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(C0,P0,I0),this._renderer.xr.enabled=L0,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),C0=this._renderer.getRenderTarget(),P0=this._renderer.getActiveCubeFace(),I0=this._renderer.getActiveMipmapLevel(),L0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:En,format:$n,colorSpace:Ua,depthBuffer:!1},s=Hm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fb(r)),this._blurMaterial=pb(r,e,t),this._ggxMaterial=db(r,e,t)}return s}_compileMaterial(e){let t=new dt(new bt,e);this._renderer.compile(t,bl)}_sceneToCubeUV(e,t,n,s,r){let a=new Hn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,x=p.toneMapping;p.getClearColor(zm),p.toneMapping=ss,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new Jt,new mn({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,c=M.material,f=!1,d=e.background;d?d.isColor&&(c.color.copy(d),e.background=null,f=!0):(c.color.copy(zm),f=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+h[g],r.y,r.z)):v===1?(a.up.set(0,0,u[g]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+h[g],r.z)):(a.up.set(0,u[g],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+h[g]));let b=this._cubeSize;No(s,v*b,g>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(M,a),p.render(e,a)}p.toneMapping=x,p.autoClear=m,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rr||e.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=e;let a=this._cubeSize;No(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(o,bl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let a=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),m=u*1.25,x=p*m,{_lodMax:y}=this,M=this._sizeLods[n],c=3*M*(n>y-Fo?n-y+Fo:0),f=4*(this._cubeSize-M);a.envMap.value=e.texture,a.roughness.value=x,a.mipInt.value=y-t,No(r,c,f,3*M,2*M),s.setRenderTarget(r),s.render(l,bl),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=y-n,No(e,c,f,3*M,2*M),s.setRenderTarget(e),s.render(l,bl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,l=this._blurMaterial,a=this._lodMeshes[s];a.material=l;let u=l.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Fo?s-this._lodMax+Fo:0),m=4*(this._cubeSize-h);No(t,p,m,3*h,2*h),o.setRenderTarget(t),o.render(a,bl)}};function fb(i){let e=[],t=[],n=i,s=i-Fo+1+lb;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let l=1/(o-2),a=-l,u=1+l,h=[a,a,u,a,u,u,a,a,u,u,a,u],p=6,m=6,x=3,y=new Float32Array(x*m*p),M=new Float32Array(x*m*p);for(let f=0;f<p;f++){let d=f%3*2/3-1,g=f>2?0:-1,v=[d,g,0,d+2/3,g,0,d+2/3,g+1,0,d,g,0,d+2/3,g+1,0,d,g+1,0];y.set(v,x*m*f);for(let b=0;b<m;b++){let T=h[b*2]*2-1,w=h[b*2+1]*2-1;f===0?Dr.set(1,w,T):f===1?Dr.set(-T,1,-w):f===2?Dr.set(-T,w,1):f===3?Dr.set(-1,w,-T):f===4?Dr.set(-T,-1,w):Dr.set(T,w,-1),Dr.toArray(M,(f*m+b)*x)}}let c=new bt;c.setAttribute("position",new wt(y,x)),c.setAttribute("outputDirection",new wt(M,x)),t.push(new dt(c,null)),n>Fo&&n--}return{lodMeshes:t,sizeLods:e}}function Hm(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function db(i,e,t){return new mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ub,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ph(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function pb(i,e,t){return new mt({name:"SphericalGaussianBlur",defines:{SAMPLES:cb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ph(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Vm(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Wm(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fh=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:ni});r.uniforms.tEquirect.value=t;let o=new dt(s,r),l=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Ut),new xu(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function mb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?o(m):r(m)}function r(m){if(m&&m.isTexture){let x=m.mapping;if(x===bu||x===Mu)if(e.has(m)){let y=e.get(m).texture;return l(y,m.mapping)}else{let y=m.image;if(y&&y.height>0){let M=new fh(y.height);return M.fromEquirectangularTexture(i,m),e.set(m,M),m.addEventListener("dispose",u),l(M.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let x=m.mapping,y=x===bu||x===Mu,M=x===rr||x===Pr;if(y||M){let c=t.get(m),f=c!==void 0?c.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==f)return n===null&&(n=new hh(i)),c=y?n.fromEquirectangular(m,c):n.fromCubemap(m,c),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),c.texture;if(c!==void 0)return c.texture;{let d=m.image;return y&&d&&d.height>0||M&&d&&a(d)?(n===null&&(n=new hh(i)),c=y?n.fromEquirectangular(m):n.fromCubemap(m),c.texture.pmremVersion=m.pmremVersion,t.set(m,c),m.addEventListener("dispose",h),c.texture):null}}}return m}function l(m,x){return x===bu?m.mapping=rr:x===Mu&&(m.mapping=Pr),m}function a(m){let x=0,y=6;for(let M=0;M<y;M++)m[M]!==void 0&&x++;return x===y}function u(m){let x=m.target;x.removeEventListener("dispose",u);let y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function h(m){let x=m.target;x.removeEventListener("dispose",h);let y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function gb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&wr("WebGLRenderer: "+n+" extension not supported."),s}}}function vb(i,e,t,n){let s={},r=new WeakMap;function o(p){let m=p.target;m.index!==null&&e.remove(m.index);for(let y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",o),delete s[m.id];let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function a(p){let m=p.attributes;for(let x in m)e.update(m[x],i.ARRAY_BUFFER)}function u(p){let m=[],x=p.index,y=p.attributes.position,M=0;if(y===void 0)return;if(x!==null){let d=x.array;M=x.version;for(let g=0,v=d.length;g<v;g+=3){let b=d[g+0],T=d[g+1],w=d[g+2];m.push(b,T,T,w,w,b)}}else{let d=y.array;M=y.version;for(let g=0,v=d.length/3-1;g<v;g+=3){let b=g+0,T=g+1,w=g+2;m.push(b,T,T,w,w,b)}}let c=new(y.count>=65535?Wa:Va)(m,1);c.version=M;let f=r.get(p);f&&e.remove(f),r.set(p,c)}function h(p){let m=r.get(p);if(m){let x=p.index;x!==null&&m.version<x.version&&u(p)}else u(p);return r.get(p)}return{get:l,update:a,getWireframeAttribute:h}}function xb(i,e,t){let n;function s(p){n=p}let r,o;function l(p){r=p.type,o=p.bytesPerElement}function a(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function u(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),t.update(m,n,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let M=0;for(let c=0;c<x;c++)M+=m[c];t.update(M,n,1)}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=u,this.renderMultiDraw=h}function yb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _b(i,e,t){let n=new WeakMap,s=new xt;function r(o,l,a){let u=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0,m=n.get(l);if(m===void 0||m.count!==p){let S=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();let x=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],g=0;x===!0&&(g=1),y===!0&&(g=2),M===!0&&(g=3);let v=l.attributes.position.count*g,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*b*4*p),w=new ka(T,v,b,p);w.type=Ui,w.needsUpdate=!0;let _=g*4;for(let E=0;E<p;E++){let R=c[E],C=f[E],I=d[E],A=v*b*4*E;for(let L=0;L<R.count;L++){let D=L*_;x===!0&&(s.fromBufferAttribute(R,L),T[A+D+0]=s.x,T[A+D+1]=s.y,T[A+D+2]=s.z,T[A+D+3]=0),y===!0&&(s.fromBufferAttribute(C,L),T[A+D+4]=s.x,T[A+D+5]=s.y,T[A+D+6]=s.z,T[A+D+7]=0),M===!0&&(s.fromBufferAttribute(I,L),T[A+D+8]=s.x,T[A+D+9]=s.y,T[A+D+10]=s.z,T[A+D+11]=I.itemSize===4?s.w:1)}}m={count:p,texture:w,size:new Le(v,b)},n.set(l,m),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let M=0;M<u.length;M++)x+=u[M];let y=l.morphTargetsRelative?1:1-x;a.getUniforms().setValue(i,"morphTargetBaseInfluence",y),a.getUniforms().setValue(i,"morphTargetInfluences",u)}a.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),a.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function bb(i,e,t,n,s){let r=new WeakMap;function o(u){let h=s.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let x=u.skeleton;r.get(x)!==h&&(x.update(),r.set(x,h))}return m}function l(){r=new WeakMap}function a(u){let h=u.target;h.removeEventListener("dispose",a),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}var Mb={[s0]:"LINEAR_TONE_MAPPING",[r0]:"REINHARD_TONE_MAPPING",[o0]:"CINEON_TONE_MAPPING",[a0]:"ACES_FILMIC_TONE_MAPPING",[c0]:"AGX_TONE_MAPPING",[fl]:"NEUTRAL_TONE_MAPPING",[l0]:"CUSTOM_TONE_MAPPING"};function Sb(i,e,t,n,s,r){let o=new qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,a=null,u=new bt;u.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new je([0,2,0,0,2,0],2));let h=new ou({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new dt(u,h),m=new sr(-1,1,1,-1,0,1),x=null,y=null,M=!1,c,f=null,d=[],g=!1;this.setSize=function(v,b){o.setSize(v,b),l!==null&&l.setSize(v,b),a!==null&&a.setSize(v,b);for(let T=0;T<d.length;T++){let w=d[T];w.setSize&&w.setSize(v,b)}},this.setEffects=function(v){d=v,g=d.length>0&&d[0].isRenderPass===!0;let b=o.width,T=o.height;d.length>0&&l===null&&(l=new qt(b,T,{type:En,depthBuffer:!1,stencilBuffer:!1}),a=new qt(b,T,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<d.length;w++){let _=d[w];_.setSize&&_.setSize(b,T)}},this.begin=function(v,b){if(M||v.toneMapping===ss&&d.length===0)return!1;if(f=b,b!==null){let T=b.width,w=b.height;(o.width!==T||o.height!==w)&&this.setSize(T,w)}return g===!1&&v.setRenderTarget(o),c=v.toneMapping,v.toneMapping=ss,!0},this.hasRenderPass=function(){return g},this.end=function(v,b){v.toneMapping=c,M=!0;let T=o,w=l;for(let _=0;_<d.length;_++){let S=d[_];S.enabled!==!1&&(S.render(v,w,T,b),S.needsSwap!==!1&&(T=w,w=w===l?a:l))}if(x!==v.outputColorSpace||y!==v.toneMapping){x=v.outputColorSpace,y=v.toneMapping,h.defines={},Lt.getTransfer(x)===Ht&&(h.defines.SRGB_TRANSFER="");let _=Mb[y];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(f),v.render(p,m),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),u.dispose(),h.dispose()}}var cg=new Yn,F0=new Qs(1,1),ug=new ka,hg=new Zc,fg=new Xa,Gm=[],qm=[],Xm=new Float32Array(16),Ym=new Float32Array(9),Zm=new Float32Array(4);function Bo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gm[s];if(r===void 0&&(r=new Float32Array(s),Gm[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function In(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mh(i,e){let t=qm[e];t===void 0&&(t=new Int32Array(e),qm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2fv(this.addr,e),Ln(t,e)}}function Eb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;i.uniform3fv(this.addr,e),Ln(t,e)}}function Ab(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4fv(this.addr,e),Ln(t,e)}}function Rb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;Zm.set(n),i.uniformMatrix2fv(this.addr,!1,Zm),Ln(t,n)}}function Cb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;Ym.set(n),i.uniformMatrix3fv(this.addr,!1,Ym),Ln(t,n)}}function Pb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(In(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,n))return;Xm.set(n),i.uniformMatrix4fv(this.addr,!1,Xm),Ln(t,n)}}function Ib(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2iv(this.addr,e),Ln(t,e)}}function Db(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;i.uniform3iv(this.addr,e),Ln(t,e)}}function Nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4iv(this.addr,e),Ln(t,e)}}function Fb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ub(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;i.uniform2uiv(this.addr,e),Ln(t,e)}}function Bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;i.uniform3uiv(this.addr,e),Ln(t,e)}}function Ob(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;i.uniform4uiv(this.addr,e),Ln(t,e)}}function kb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(F0.compareFunction=t.isReversedDepthBuffer()?lh:ah,r=F0):r=cg,t.setTexture2D(e||r,s)}function zb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hg,s)}function Hb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fg,s)}function Vb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ug,s)}function Wb(i){switch(i){case 5126:return wb;case 35664:return Tb;case 35665:return Eb;case 35666:return Ab;case 35674:return Rb;case 35675:return Cb;case 35676:return Pb;case 5124:case 35670:return Ib;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Nb;case 5125:return Fb;case 36294:return Ub;case 36295:return Bb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Vb}}function Gb(i,e){i.uniform1fv(this.addr,e)}function qb(i,e){let t=Bo(e,this.size,2);i.uniform2fv(this.addr,t)}function Xb(i,e){let t=Bo(e,this.size,3);i.uniform3fv(this.addr,t)}function Yb(i,e){let t=Bo(e,this.size,4);i.uniform4fv(this.addr,t)}function Zb(i,e){let t=Bo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kb(i,e){let t=Bo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $b(i,e){let t=Bo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jb(i,e){i.uniform1iv(this.addr,e)}function jb(i,e){i.uniform2iv(this.addr,e)}function Qb(i,e){i.uniform3iv(this.addr,e)}function eM(i,e){i.uniform4iv(this.addr,e)}function tM(i,e){i.uniform1uiv(this.addr,e)}function nM(i,e){i.uniform2uiv(this.addr,e)}function iM(i,e){i.uniform3uiv(this.addr,e)}function sM(i,e){i.uniform4uiv(this.addr,e)}function rM(i,e,t){let n=this.cache,s=e.length,r=mh(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=F0:o=cg;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function oM(i,e,t){let n=this.cache,s=e.length,r=mh(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||hg,r[o])}function aM(i,e,t){let n=this.cache,s=e.length,r=mh(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||fg,r[o])}function lM(i,e,t){let n=this.cache,s=e.length,r=mh(t,s);In(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ug,r[o])}function cM(i){switch(i){case 5126:return Gb;case 35664:return qb;case 35665:return Xb;case 35666:return Yb;case 35674:return Zb;case 35675:return Kb;case 35676:return $b;case 5124:case 35670:return Jb;case 35667:case 35671:return jb;case 35668:case 35672:return Qb;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}var U0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wb(t.type)}},B0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cM(t.type)}},O0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(e,t[l.id],n)}}},D0=/(\w+)(\])?(\[|\.)?/g;function Km(i,e){i.seq.push(e),i.map[e.id]=e}function uM(i,e,t){let n=i.name,s=n.length;for(D0.lastIndex=0;;){let r=D0.exec(n),o=D0.lastIndex,l=r[1],a=r[2]==="]",u=r[3];if(a&&(l=l|0),u===void 0||u==="["&&o+2===s){Km(t,u===void 0?new U0(l,i,e):new B0(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new O0(l),Km(t,p)),t=p}}}var Uo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=e.getActiveUniform(t,o),a=e.getUniformLocation(t,l.name);uM(l,a,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let l=t[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function $m(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var hM=37297,fM=0;function dM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}var Jm=new _t;function pM(i){Lt._getMatrix(Jm,Lt.workingColorSpace,i);let e=`mat3( ${Jm.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+dM(i.getShaderSource(e),l)}else return r}function mM(i,e){let t=pM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var gM={[s0]:"Linear",[r0]:"Reinhard",[o0]:"Cineon",[a0]:"ACESFilmic",[c0]:"AgX",[fl]:"Neutral",[l0]:"Custom"};function vM(i,e){let t=gM[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uh=new H;function xM(){Lt.getLuminanceCoefficients(uh);let i=uh.x.toFixed(4),e=uh.y.toFixed(4),t=uh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function _M(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Sl(i){return i!==""}function Qm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function k0(i){return i.replace(MM,wM)}var SM=new Map;function wM(i,e){let t=gt[e];if(t===void 0){let n=SM.get(e);if(n!==void 0)t=gt[n],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return k0(t)}var TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(i){return i.replace(TM,EM)}function EM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ng(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var AM={[Rr]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function RM(i){return AM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var CM={[rr]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[dl]:"ENVMAP_TYPE_CUBE_UV"};function PM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":CM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var IM={[Pr]:"ENVMAP_MODE_REFRACTION"};function LM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":IM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DM={[i0]:"ENVMAP_BLENDING_MULTIPLY",[gm]:"ENVMAP_BLENDING_MIX",[vm]:"ENVMAP_BLENDING_ADD"};function NM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":DM[i.combine]||"ENVMAP_BLENDING_NONE"}function FM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function UM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,l=t.fragmentShader,a=RM(t),u=PM(t),h=LM(t),p=NM(t),m=FM(t),x=yM(t),y=_M(r),M=s.createProgram(),c,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Sl).join(`
`),c.length>0&&(c+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Sl).join(`
`),f.length>0&&(f+=`
`)):(c=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),f=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?gt.tonemapping_pars_fragment:"",t.toneMapping!==ss?vM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,mM("linearToOutputTexel",t.outputColorSpace),xM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sl).join(`
`)),o=k0(o),o=Qm(o,t),o=eg(o,t),l=k0(l),l=Qm(l,t),l=eg(l,t),o=tg(o),l=tg(l),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,c=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,f=["#define varying in",t.glslVersion===v0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===v0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let g=d+c+o,v=d+f+l,b=$m(s,s.VERTEX_SHADER,g),T=$m(s,s.FRAGMENT_SHADER,v);s.attachShader(M,b),s.attachShader(M,T),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(R){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(M)||"",I=s.getShaderInfoLog(b)||"",A=s.getShaderInfoLog(T)||"",L=C.trim(),D=I.trim(),O=A.trim(),z=!0,F=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,b,T);else{let V=jm(s,b,"vertex"),k=jm(s,T,"fragment");vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+V+`
`+k)}else L!==""?ft("WebGLProgram: Program Info Log:",L):(D===""||O==="")&&(F=!1);F&&(R.diagnostics={runnable:z,programLog:L,vertexShader:{log:D,prefix:c},fragmentShader:{log:O,prefix:f}})}s.deleteShader(b),s.deleteShader(T),_=new Uo(s,M),S=bM(s,M)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,hM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=T,this}var BM=0,z0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new H0(e),t.set(e,n)),n}},H0=class{constructor(e){this.id=BM++,this.code=e,this.usedTimes=0}};function OM(i){return i===lr||i===yl||i===_l}function kM(i,e,t,n,s,r){let o=new za,l=new z0,a=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,m=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return a.add(_),_===0?"uv":`uv${_}`}function M(_,S,E,R,C,I){let A=R.fog,L=C.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||D,O),F=z&&z.mapping===dl?z.image.height:null,V=x[_.type];_.precision!==null&&(m=n.getMaxPrecision(_.precision),m!==_.precision&&ft("WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,q=k!==void 0?k.length:0,$=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let Me,Te,Se,G;if(V){let Wt=xs[V];Me=Wt.vertexShader,Te=Wt.fragmentShader}else{Me=_.vertexShader,Te=_.fragmentShader;let Wt=l.getVertexShaderStage(_),Ft=l.getFragmentShaderStage(_);l.update(_,Wt,Ft),Se=Wt.id,G=Ft.id}let J=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ce=C.isInstancedMesh===!0,te=C.isBatchedMesh===!0,ge=!!_.map,Fe=!!_.matcap,Oe=!!z,Ie=!!_.aoMap,qe=!!_.lightMap,ie=!!_.bumpMap&&_.wireframe===!1,we=!!_.normalMap,Q=!!_.displacementMap,ce=!!_.emissiveMap,ee=!!_.metalnessMap,fe=!!_.roughnessMap,U=_.anisotropy>0,de=_.clearcoat>0,oe=_.dispersion>0,N=_.retroreflectivity>0,P=_.iridescence>0,W=_.sheen>0,Z=_.transmission>0,ne=U&&!!_.anisotropyMap,se=de&&!!_.clearcoatMap,ye=de&&!!_.clearcoatNormalMap,ue=de&&!!_.clearcoatRoughnessMap,me=P&&!!_.iridescenceMap,Ue=P&&!!_.iridescenceThicknessMap,Ke=W&&!!_.sheenColorMap,De=W&&!!_.sheenRoughnessMap,Ne=!!_.specularMap,ze=!!_.specularColorMap,rt=!!_.specularIntensityMap,ut=Z&&!!_.transmissionMap,K=Z&&!!_.thicknessMap,Be=!!_.gradientMap,xe=!!_.alphaMap,ke=_.alphaTest>0,Ge=!!_.alphaHash,Ee=!!_.extensions,it=ss;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(it=i.toneMapping);let st={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:Te,defines:_.defines,customVertexShaderID:Se,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:te,batchingColor:te&&C._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&C.instanceColor!==null,instancingMorph:Ce&&C.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ge,matcap:Fe,envMap:Oe,envMapMode:Oe&&z.mapping,envMapCubeUVHeight:F,aoMap:Ie,lightMap:qe,bumpMap:ie,normalMap:we,displacementMap:Q,emissiveMap:ce,normalMapObjectSpace:we&&_.normalMapType===_m,normalMapTangentSpace:we&&_.normalMapType===oh,packedNormalMap:we&&_.normalMapType===oh&&OM(_.normalMap.format),metalnessMap:ee,roughnessMap:fe,anisotropy:U,anisotropyMap:ne,clearcoat:de,clearcoatMap:se,clearcoatNormalMap:ye,clearcoatRoughnessMap:ue,dispersion:oe,retroreflection:N,iridescence:P,iridescenceMap:me,iridescenceThicknessMap:Ue,sheen:W,sheenColorMap:Ke,sheenRoughnessMap:De,specularMap:Ne,specularColorMap:ze,specularIntensityMap:rt,transmission:Z,transmissionMap:ut,thicknessMap:K,gradientMap:Be,opaque:_.transparent===!1&&_.blending===Po&&_.alphaToCoverage===!1,alphaMap:xe,alphaTest:ke,alphaHash:Ge,combine:_.combine,mapUv:ge&&y(_.map.channel),aoMapUv:Ie&&y(_.aoMap.channel),lightMapUv:qe&&y(_.lightMap.channel),bumpMapUv:ie&&y(_.bumpMap.channel),normalMapUv:we&&y(_.normalMap.channel),displacementMapUv:Q&&y(_.displacementMap.channel),emissiveMapUv:ce&&y(_.emissiveMap.channel),metalnessMapUv:ee&&y(_.metalnessMap.channel),roughnessMapUv:fe&&y(_.roughnessMap.channel),anisotropyMapUv:ne&&y(_.anisotropyMap.channel),clearcoatMapUv:se&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:ye&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(_.sheenRoughnessMap.channel),specularMapUv:Ne&&y(_.specularMap.channel),specularColorMapUv:ze&&y(_.specularColorMap.channel),specularIntensityMapUv:rt&&y(_.specularIntensityMap.channel),transmissionMapUv:ut&&y(_.transmissionMap.channel),thicknessMapUv:K&&y(_.thicknessMap.channel),alphaMapUv:xe&&y(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(we||U),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(ge||xe),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&we===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:$,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:ge&&_.map.isVideoTexture===!0&&Lt.getTransfer(_.map.colorSpace)===Ht,decodeVideoTextureEmissive:ce&&_.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(_.emissiveMap.colorSpace)===Ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yn,flipSided:_.side===Vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&_.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return st.vertexUv1s=a.has(1),st.vertexUv2s=a.has(2),st.vertexUv3s=a.has(3),a.clear(),st}function c(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)S.push(E),S.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(f(S,_),d(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function f(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function d(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function g(_){let S=x[_.type],E;if(S){let R=xs[S];E=Lr.clone(R.uniforms)}else E=_.uniforms;return E}function v(_,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new UM(i,S,_,s),u.push(E),h.set(S,E)),E}function b(_){if(--_.usedTimes===0){let S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){l.remove(_)}function w(){l.dispose()}return{getParameters:M,getProgramCacheKey:c,getUniforms:g,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:w}}function zM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function HM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function l(m,x,y,M,c,f){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:x,material:y,materialVariant:o(m),groupOrder:M,renderOrder:m.renderOrder,z:c,group:f},i[e]=d):(d.id=m.id,d.object=m,d.geometry=x,d.material=y,d.materialVariant=o(m),d.groupOrder=M,d.renderOrder=m.renderOrder,d.z=c,d.group=f),e++,d}function a(m,x,y,M,c,f,d){d.reversedDepth===!0&&(c=-c);let g=l(m,x,y,M,c,f);y.transmission>0?n.push(g):y.transparent===!0?s.push(g):t.push(g)}function u(m,x,y,M,c,f){let d=l(m,x,y,M,c,f);y.transmission>0?n.unshift(d):y.transparent===!0?s.unshift(d):t.unshift(d)}function h(m,x){t.length>1&&t.sort(m||HM),n.length>1&&n.sort(x||ig),s.length>1&&s.sort(x||ig)}function p(){for(let m=e,x=i.length;m<x;m++){let y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:u,finish:p,sort:h}}function VM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new sg,i.set(n,[o])):s>=r.length?(o=new sg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function WM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new he};break;case"SpotLight":t={position:new H,direction:new H,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function GM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qM=0;function XM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function YM(i){let e=new WM,t=GM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);let s=new H,r=new Qe,o=new Qe;function l(u){let h=0,p=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let x=0,y=0,M=0,c=0,f=0,d=0,g=0,v=0,b=0,T=0,w=0,_=0,S=0,E=0;u.sort(XM);for(let C=0,I=u.length;C<I;C++){let A=u[C],L=A.color,D=A.intensity,O=A.distance,z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===lr?z=A.shadow.map.texture:z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=L.r*D,p+=L.g*D,m+=L.b*D;else if(A.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(A.sh.coefficients[F],D);E++}else if(A.isSunLight){let F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let V=A.shadow,k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[y]=k,n.sunShadowMap[y]=z;let q=V.getViewportCount();for(let $=0;$<q;$++)n.sunShadowMatrix[M+$]=V.getMatrix($),n.sunShadowCascade[M+$]=V._cascadeData[$];M+=q,y++}n.sun[x]=F,x++}else if(A.isDirectionalLight){let F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let V=A.shadow,k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[c]=k,n.directionalShadowMap[c]=z,n.directionalShadowMatrix[c]=A.shadow.matrix,b++}n.directional[c]=F,c++}else if(A.isSpotLight){let F=e.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(L).multiplyScalar(D),F.distance=O,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,n.spot[d]=F;let V=A.shadow;if(A.map&&(n.spotLightMap[_]=A.map,_++,V.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[d]=V.matrix,A.castShadow){let k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[d]=k,n.spotShadowMap[d]=z,w++}d++}else if(A.isRectAreaLight){let F=e.get(A);F.color.copy(L).multiplyScalar(D),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=F,g++}else if(A.isPointLight){let F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){let V=A.shadow,k=t.get(A);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[f]=k,n.pointShadowMap[f]=z,n.pointShadowMatrix[f]=A.shadow.matrix,T++}n.point[f]=F,f++}else if(A.isHemisphereLight){let F=e.get(A);F.skyColor.copy(A.color).multiplyScalar(D),F.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[v]=F,v++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;let R=n.hash;(R.sunLength!==x||R.directionalLength!==c||R.pointLength!==f||R.spotLength!==d||R.rectAreaLength!==g||R.hemiLength!==v||R.numSunShadows!==y||R.numDirectionalShadows!==b||R.numPointShadows!==T||R.numSpotShadows!==w||R.numSpotMaps!==_||R.numLightProbes!==E)&&(n.sun.length=x,n.directional.length=c,n.spot.length=d,n.rectArea.length=g,n.point.length=f,n.hemi.length=v,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-S,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,R.sunLength=x,R.directionalLength=c,R.pointLength=f,R.spotLength=d,R.rectAreaLength=g,R.hemiLength=v,R.numSunShadows=y,R.numDirectionalShadows=b,R.numPointShadows=T,R.numSpotShadows=w,R.numSpotMaps=_,R.numLightProbes=E,n.version=qM++)}function a(u,h){let p=0,m=0,x=0,y=0,M=0,c=0,f=h.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){let v=u[d];if(v.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let b=n.directional[m];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(v.isSpotLight){let b=n.spot[y];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),y++}else if(v.isRectAreaLight){let b=n.rectArea[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){let b=n.point[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(f),x++}else if(v.isHemisphereLight){let b=n.hemi[c];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(f),c++}}}return{setup:l,setupView:a,state:n}}function rg(i){let e=new YM(i),t=[],n=[],s=[];function r(m){p.camera=m,t.length=0,n.length=0,s.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function a(m){s.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l,pushLightProbeGrid:a}}function ZM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),l;return o===void 0?(l=new rg(i),e.set(s,[l])):r>=o.length?(l=new rg(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$M=`uniform sampler2D shadow_pass;
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
}`,JM=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],jM=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],og=new Qe,Ml=new H,N0=new H;function QM(i,e,t){let n=new bo,s=new Le,r=new Le,o=new xt,l=new er,a=new au,u={},h=t.maxTextureSize,p={[gs]:Vn,[Vn]:gs,[yn]:yn},m=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:KM,fragmentShader:$M}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let y=new bt;y.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new dt(y,m),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let f=this.type;this.render=function(T,w,_){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||T.length===0)return;this.type===Jp&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ni),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let I=f!==this.type;I&&w.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(L=>L.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,L=T.length;A<L;A++){let D=T[A],O=D.shadow;if(O===void 0){ft("WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let z=O.getFrameExtents();s.multiply(z),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,O.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Co){if(D.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new qt(s.x,s.y,{format:lr,type:En,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),O.map.texture.name=D.name+".shadowMap",O.map.depthTexture=new Qs(s.x,s.y,Ui),O.map.depthTexture.name=D.name+".shadowMapDepth",O.map.depthTexture.format=fs,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn}else D.isPointLight?(O.map=new fh(s.x),O.map.depthTexture=new jc(s.x,rs)):(O.map=new qt(s.x,s.y),O.map.depthTexture=new Qs(s.x,s.y,rs)),O.map.depthTexture.name=D.name+".shadowMap",O.map.depthTexture.format=fs,this.type===Rr?(O.map.depthTexture.compareFunction=F?lh:ah,O.map.depthTexture.minFilter=Ut,O.map.depthTexture.magFilter=Ut):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let V=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();D.isPointLight!==!0&&O.updateMatrices(D,_);for(let k=0;k<V;k++){let q=O.getCamera(k);if(D.isPointLight){let $=O.camera,Me=O.matrix,Te=D.distance||$.far;Te!==$.far&&($.far=Te,$.updateProjectionMatrix()),Ml.setFromMatrixPosition(D.matrixWorld),$.position.copy(Ml),N0.copy($.position),N0.add(JM[k]),$.up.copy(jM[k]),$.lookAt(N0),$.updateMatrixWorld(),Me.makeTranslation(-Ml.x,-Ml.y,-Ml.z),og.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O._frustum.setFromProjectionMatrix(og,$.coordinateSystem,$.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,k),i.clear();else{k===0&&(i.setRenderTarget(O.map),i.clear());let $=O.getViewport(k);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),C.viewport(o)}n=O.getFrustum(k),v(w,_,q,D,this.type)}O.isPointLightShadow!==!0&&this.type===Co&&d(O,_),O.needsUpdate=!1}f=this.type,c.needsUpdate=!1,i.setRenderTarget(S,E,R)};function d(T,w){let _=e.update(M);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null?T.mapPass=new qt(s.x,s.y,{format:lr,type:En}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,_,m,M,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value.set(T.map.width,T.map.height),x.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,_,x,M,null)}function g(T,w,_,S){let E=null,R=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)E=R;else if(E=_.isPointLight===!0?a:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let C=E.uuid,I=w.uuid,A=u[C];A===void 0&&(A={},u[C]=A);let L=A[I];L===void 0&&(L=E.clone(),A[I]=L,w.addEventListener("dispose",b)),E=L}if(E.visible=w.visible,E.wireframe=w.wireframe,S===Co?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:p[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,_.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let C=i.properties.get(E);C.light=_}return E}function v(T,w,_,S,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Co)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let I=e.update(T),A=T.material;if(Array.isArray(A)){let L=I.groups;for(let D=0,O=L.length;D<O;D++){let z=L[D],F=A[z.materialIndex];if(F&&F.visible){let V=g(T,F,S,E);T.onBeforeShadow(i,T,w,_,I,V,z),i.renderBufferDirect(_,null,I,V,T,z),T.onAfterShadow(i,T,w,_,I,V,z)}}}else if(A.visible){let L=g(T,A,S,E);T.onBeforeShadow(i,T,w,_,I,L,null),i.renderBufferDirect(_,null,I,L,T,null),T.onAfterShadow(i,T,w,_,I,L,null)}}let C=T.children;for(let I=0,A=C.length;I<A;I++)v(C[I],w,_,S,E)}function b(T){T.target.removeEventListener("dispose",b);for(let _ in u){let S=u[_],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function eS(i,e){function t(){let K=!1,Be=new xt,xe=null,ke=new xt(0,0,0,0);return{setMask:function(Ge){xe!==Ge&&!K&&(i.colorMask(Ge,Ge,Ge,Ge),xe=Ge)},setLocked:function(Ge){K=Ge},setClear:function(Ge,Ee,it,st,Wt){Wt===!0&&(Ge*=st,Ee*=st,it*=st),Be.set(Ge,Ee,it,st),ke.equals(Be)===!1&&(i.clearColor(Ge,Ee,it,st),ke.copy(Be))},reset:function(){K=!1,xe=null,ke.set(-1,0,0,0)}}}function n(){let K=!1,Be=!1,xe=null,ke=null,Ge=null;return{setReversed:function(Ee){if(Be!==Ee){let it=e.get("EXT_clip_control");Ee?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Be=Ee;let st=Ge;Ge=null,this.setClear(st)}},getReversed:function(){return Be},setTest:function(Ee){Ee?J(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Ee){xe!==Ee&&!K&&(i.depthMask(Ee),xe=Ee)},setFunc:function(Ee){if(Be&&(Ee=Lm[Ee]),ke!==Ee){switch(Ee){case Bc:i.depthFunc(i.NEVER);break;case Oc:i.depthFunc(i.ALWAYS);break;case kc:i.depthFunc(i.LESS);break;case po:i.depthFunc(i.LEQUAL);break;case zc:i.depthFunc(i.EQUAL);break;case Hc:i.depthFunc(i.GEQUAL);break;case Vc:i.depthFunc(i.GREATER);break;case Wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=Ee}},setLocked:function(Ee){K=Ee},setClear:function(Ee){Ge!==Ee&&(Ge=Ee,Be&&(Ee=1-Ee),i.clearDepth(Ee))},reset:function(){K=!1,xe=null,ke=null,Ge=null,Be=!1}}}function s(){let K=!1,Be=null,xe=null,ke=null,Ge=null,Ee=null,it=null,st=null,Wt=null;return{setTest:function(Ft){K||(Ft?J(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ft){Be!==Ft&&!K&&(i.stencilMask(Ft),Be=Ft)},setFunc:function(Ft,vi,Ii){(xe!==Ft||ke!==vi||Ge!==Ii)&&(i.stencilFunc(Ft,vi,Ii),xe=Ft,ke=vi,Ge=Ii)},setOp:function(Ft,vi,Ii){(Ee!==Ft||it!==vi||st!==Ii)&&(i.stencilOp(Ft,vi,Ii),Ee=Ft,it=vi,st=Ii)},setLocked:function(Ft){K=Ft},setClear:function(Ft){Wt!==Ft&&(i.clearStencil(Ft),Wt=Ft)},reset:function(){K=!1,Be=null,xe=null,ke=null,Ge=null,Ee=null,it=null,st=null,Wt=null}}}let r=new t,o=new n,l=new s,a=new WeakMap,u=new WeakMap,h={},p={},m={},x=new WeakMap,y=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,_=new he(0,0,0),S=0,E=!1,R=null,C=null,I=null,A=null,L=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,z=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=z>=2);let V=null,k={},q=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),Me=new xt().fromArray(q),Te=new xt().fromArray($);function Se(K,Be,xe,ke){let Ge=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(K,Ee),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<xe;it++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Be,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Be+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return Ee}let G={};G[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),J(i.DEPTH_TEST),o.setFunc(po),ie(!1),we(jf),J(i.CULL_FACE),Ie(ni);function J(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function ve(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function Ce(K,Be){return m[K]!==Be?(i.bindFramebuffer(K,Be),m[K]=Be,K===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Be),K===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Be),!0):!1}function te(K,Be){let xe=y,ke=!1;if(K){xe=x.get(Be),xe===void 0&&(xe=[],x.set(Be,xe));let Ge=K.textures;if(xe.length!==Ge.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,it=Ge.length;Ee<it;Ee++)xe[Ee]=i.COLOR_ATTACHMENT0+Ee;xe.length=Ge.length,ke=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,ke=!0);ke&&i.drawBuffers(xe)}function ge(K){return M!==K?(i.useProgram(K),M=K,!0):!1}let Fe={[Cr]:i.FUNC_ADD,[Qp]:i.FUNC_SUBTRACT,[em]:i.FUNC_REVERSE_SUBTRACT};Fe[tm]=i.MIN,Fe[nm]=i.MAX;let Oe={[im]:i.ZERO,[sm]:i.ONE,[rm]:i.SRC_COLOR,[t0]:i.SRC_ALPHA,[hm]:i.SRC_ALPHA_SATURATE,[cm]:i.DST_COLOR,[am]:i.DST_ALPHA,[om]:i.ONE_MINUS_SRC_COLOR,[n0]:i.ONE_MINUS_SRC_ALPHA,[um]:i.ONE_MINUS_DST_COLOR,[lm]:i.ONE_MINUS_DST_ALPHA,[fm]:i.CONSTANT_COLOR,[dm]:i.ONE_MINUS_CONSTANT_COLOR,[pm]:i.CONSTANT_ALPHA,[mm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ie(K,Be,xe,ke,Ge,Ee,it,st,Wt,Ft){if(K===ni){c===!0&&(ve(i.BLEND),c=!1);return}if(c===!1&&(J(i.BLEND),c=!0),K!==jp){if(K!==f||Ft!==E){if((d!==Cr||b!==Cr)&&(i.blendEquation(i.FUNC_ADD),d=Cr,b=Cr),Ft)switch(K){case Po:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFunc(i.ONE,i.ONE);break;case Qf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case e0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:vt("WebGLState: Invalid blending: ",K);break}else switch(K){case Po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qf:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e0:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",K);break}g=null,v=null,T=null,w=null,_.set(0,0,0),S=0,f=K,E=Ft}return}Ge=Ge||Be,Ee=Ee||xe,it=it||ke,(Be!==d||Ge!==b)&&(i.blendEquationSeparate(Fe[Be],Fe[Ge]),d=Be,b=Ge),(xe!==g||ke!==v||Ee!==T||it!==w)&&(i.blendFuncSeparate(Oe[xe],Oe[ke],Oe[Ee],Oe[it]),g=xe,v=ke,T=Ee,w=it),(st.equals(_)===!1||Wt!==S)&&(i.blendColor(st.r,st.g,st.b,Wt),_.copy(st),S=Wt),f=K,E=!1}function qe(K,Be){K.side===yn?ve(i.CULL_FACE):J(i.CULL_FACE);let xe=K.side===Vn;Be&&(xe=!xe),ie(xe),K.blending===Po&&K.transparent===!1?Ie(ni):Ie(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);let ke=K.stencilWrite;l.setTest(ke),ke&&(l.setMask(K.stencilWriteMask),l.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),l.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ce(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(K){R!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),R=K)}function we(K){K!==Kp?(J(i.CULL_FACE),K!==C&&(K===jf?i.cullFace(i.BACK):K===$p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),C=K}function Q(K){K!==I&&(O&&i.lineWidth(K),I=K)}function ce(K,Be,xe){K?(J(i.POLYGON_OFFSET_FILL),(A!==Be||L!==xe)&&(A=Be,L=xe,o.getReversed()&&(Be=-Be),i.polygonOffset(Be,xe))):ve(i.POLYGON_OFFSET_FILL)}function ee(K){K?J(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function fe(K){K===void 0&&(K=i.TEXTURE0+D-1),V!==K&&(i.activeTexture(K),V=K)}function U(K,Be,xe){xe===void 0&&(V===null?xe=i.TEXTURE0+D-1:xe=V);let ke=k[xe];ke===void 0&&(ke={type:void 0,texture:void 0},k[xe]=ke),(ke.type!==K||ke.texture!==Be)&&(V!==xe&&(i.activeTexture(xe),V=xe),i.bindTexture(K,Be||G[K]),ke.type=K,ke.texture=Be)}function de(){let K=k[V];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function oe(){try{i.compressedTexImage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function P(){try{i.texSubImage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function W(){try{i.texSubImage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function se(){try{i.texStorage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function ye(){try{i.texStorage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function ue(){try{i.texImage2D(...arguments)}catch(K){vt("WebGLState:",K)}}function me(){try{i.texImage3D(...arguments)}catch(K){vt("WebGLState:",K)}}function Ue(K){return p[K]!==void 0?p[K]:i.getParameter(K)}function Ke(K,Be){p[K]!==Be&&(i.pixelStorei(K,Be),p[K]=Be)}function De(K){Me.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Me.copy(K))}function Ne(K){Te.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Te.copy(K))}function ze(K,Be){let xe=u.get(Be);xe===void 0&&(xe=new WeakMap,u.set(Be,xe));let ke=xe.get(K);ke===void 0&&(ke=i.getUniformBlockIndex(Be,K.name),xe.set(K,ke))}function rt(K,Be){let ke=u.get(Be).get(K);a.get(Be)!==ke&&(i.uniformBlockBinding(Be,ke,K.__bindingPointIndex),a.set(Be,ke))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},V=null,k={},m={},x=new WeakMap,y=[],M=null,c=!1,f=null,d=null,g=null,v=null,b=null,T=null,w=null,_=new he(0,0,0),S=0,E=!1,R=null,C=null,I=null,A=null,L=null,Me.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:J,disable:ve,bindFramebuffer:Ce,drawBuffers:te,useProgram:ge,setBlending:Ie,setMaterial:qe,setFlipSided:ie,setCullFace:we,setLineWidth:Q,setPolygonOffset:ce,setScissorTest:ee,activeTexture:fe,bindTexture:U,unbindTexture:de,compressedTexImage2D:oe,compressedTexImage3D:N,texImage2D:ue,texImage3D:me,pixelStorei:Ke,getParameter:Ue,updateUBOMapping:ze,uniformBlockBinding:rt,texStorage2D:se,texStorage3D:ye,texSubImage2D:P,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:ne,scissor:De,viewport:Ne,reset:ut}}function tS(i,e,t,n,s,r,o){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Le,h=new WeakMap,p=new Set,m,x=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,P){return y?new OffscreenCanvas(N,P):go("canvas")}function c(N,P,W){let Z=1,ne=oe(N);if((ne.width>W||ne.height>W)&&(Z=W/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let se=Math.floor(Z*ne.width),ye=Math.floor(Z*ne.height);m===void 0&&(m=M(se,ye));let ue=P?M(se,ye):m;return ue.width=se,ue.height=ye,ue.getContext("2d").drawImage(N,0,0,se,ye),ft("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+se+"x"+ye+")."),ue}else return"data"in N&&ft("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),N;return N}function f(N){return N.generateMipmaps}function d(N){i.generateMipmap(N)}function g(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,P,W,Z,ne,se=!1){if(N!==null){if(i[N]!==void 0)return i[N];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ye;Z&&(ye=e.get("EXT_texture_norm16"),ye||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=P;if(P===i.RED&&(W===i.FLOAT&&(ue=i.R32F),W===i.HALF_FLOAT&&(ue=i.R16F),W===i.UNSIGNED_BYTE&&(ue=i.R8),W===i.UNSIGNED_SHORT&&ye&&(ue=ye.R16_EXT),W===i.SHORT&&ye&&(ue=ye.R16_SNORM_EXT)),P===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ue=i.R8UI),W===i.UNSIGNED_SHORT&&(ue=i.R16UI),W===i.UNSIGNED_INT&&(ue=i.R32UI),W===i.BYTE&&(ue=i.R8I),W===i.SHORT&&(ue=i.R16I),W===i.INT&&(ue=i.R32I)),P===i.RG&&(W===i.FLOAT&&(ue=i.RG32F),W===i.HALF_FLOAT&&(ue=i.RG16F),W===i.UNSIGNED_BYTE&&(ue=i.RG8),W===i.UNSIGNED_SHORT&&ye&&(ue=ye.RG16_EXT),W===i.SHORT&&ye&&(ue=ye.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ue=i.RG8UI),W===i.UNSIGNED_SHORT&&(ue=i.RG16UI),W===i.UNSIGNED_INT&&(ue=i.RG32UI),W===i.BYTE&&(ue=i.RG8I),W===i.SHORT&&(ue=i.RG16I),W===i.INT&&(ue=i.RG32I)),P===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),W===i.UNSIGNED_INT&&(ue=i.RGB32UI),W===i.BYTE&&(ue=i.RGB8I),W===i.SHORT&&(ue=i.RGB16I),W===i.INT&&(ue=i.RGB32I)),P===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),W===i.UNSIGNED_INT&&(ue=i.RGBA32UI),W===i.BYTE&&(ue=i.RGBA8I),W===i.SHORT&&(ue=i.RGBA16I),W===i.INT&&(ue=i.RGBA32I)),P===i.RGB&&(W===i.UNSIGNED_SHORT&&ye&&(ue=ye.RGB16_EXT),W===i.SHORT&&ye&&(ue=ye.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ue=i.R11F_G11F_B10F)),P===i.RGBA){let me=se?Ba:Lt.getTransfer(ne);W===i.FLOAT&&(ue=i.RGBA32F),W===i.HALF_FLOAT&&(ue=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ue=me===Ht?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ye&&(ue=ye.RGBA16_EXT),W===i.SHORT&&ye&&(ue=ye.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(N,P){let W;return N?P===null||P===rs||P===Lo?W=i.DEPTH24_STENCIL8:P===Ui?W=i.DEPTH32F_STENCIL8:P===Io&&(W=i.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===rs||P===Lo?W=i.DEPTH_COMPONENT24:P===Ui?W=i.DEPTH_COMPONENT32F:P===Io&&(W=i.DEPTH_COMPONENT16),W}function T(N,P){return f(N)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==Ut?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function w(N){let P=N.target;P.removeEventListener("dispose",w),S(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&p.delete(P)}function _(N){let P=N.target;P.removeEventListener("dispose",_),R(P)}function S(N){let P=n.get(N);if(P.__webglInit===void 0)return;let W=N.source,Z=x.get(W);if(Z){let ne=Z[P.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(N),Object.keys(Z).length===0&&x.delete(W)}n.remove(N)}function E(N){let P=n.get(N);i.deleteTexture(P.__webglTexture);let W=N.source,Z=x.get(W);delete Z[P.__cacheKey],o.memory.textures--}function R(N){let P=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(P.__webglFramebuffer[Z]))for(let ne=0;ne<P.__webglFramebuffer[Z].length;ne++)i.deleteFramebuffer(P.__webglFramebuffer[Z][ne]);else i.deleteFramebuffer(P.__webglFramebuffer[Z]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[Z])}else{if(Array.isArray(P.__webglFramebuffer))for(let Z=0;Z<P.__webglFramebuffer.length;Z++)i.deleteFramebuffer(P.__webglFramebuffer[Z]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let Z=0;Z<P.__webglColorRenderbuffer.length;Z++)P.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[Z]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let W=N.textures;for(let Z=0,ne=W.length;Z<ne;Z++){let se=n.get(W[Z]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(W[Z])}n.remove(N)}let C=0;function I(){C=0}function A(){return C}function L(N){C=N}function D(){let N=C;return N>=s.maxTextures&&ft("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,N}function O(N){let P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function z(N,P){let W=n.get(N);if(N.isVideoTexture&&U(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let Z=N.image;if(Z===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(W,N,P);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+P)}function F(N,P){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ve(W,N,P);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+P)}function V(N,P){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ve(W,N,P);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+P)}function k(N,P){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){Ce(W,N,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+P)}let q={[Ds]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[Gc]:i.MIRRORED_REPEAT},$={[wn]:i.NEAREST,[xm]:i.NEAREST_MIPMAP_NEAREST,[pl]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Su]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},Me={[Mm]:i.NEVER,[Am]:i.ALWAYS,[Sm]:i.LESS,[ah]:i.LEQUAL,[wm]:i.EQUAL,[lh]:i.GEQUAL,[Tm]:i.GREATER,[Em]:i.NOTEQUAL};function Te(N,P){if(P.type===Ui&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Ut||P.magFilter===Su||P.magFilter===pl||P.magFilter===Pn||P.minFilter===Ut||P.minFilter===Su||P.minFilter===pl||P.minFilter===Pn)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,q[P.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,q[P.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,q[P.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,$[P.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,$[P.minFilter]),P.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Me[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===wn||P.minFilter!==pl&&P.minFilter!==Pn||P.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Se(N,P){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",w));let Z=P.source,ne=x.get(Z);ne===void 0&&(ne={},x.set(Z,ne));let se=O(P);if(se!==N.__cacheKey){ne[se]===void 0&&(ne[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ne[se].usedTimes++;let ye=ne[N.__cacheKey];ye!==void 0&&(ne[N.__cacheKey].usedTimes--,ye.usedTimes===0&&E(P)),N.__cacheKey=se,N.__webglTexture=ne[se].texture}return W}function G(N,P,W){return Math.floor(Math.floor(N/W)/P)}function J(N,P,W,Z){let se=N.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,W,Z,P.data);else{se.sort((Ke,De)=>Ke.start-De.start);let ye=0;for(let Ke=1;Ke<se.length;Ke++){let De=se[ye],Ne=se[Ke],ze=De.start+De.count,rt=G(Ne.start,P.width,4),ut=G(De.start,P.width,4);Ne.start<=ze+1&&rt===ut&&G(Ne.start+Ne.count-1,P.width,4)===rt?De.count=Math.max(De.count,Ne.start+Ne.count-De.start):(++ye,se[ye]=Ne)}se.length=ye+1;let ue=t.getParameter(i.UNPACK_ROW_LENGTH),me=t.getParameter(i.UNPACK_SKIP_PIXELS),Ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let Ke=0,De=se.length;Ke<De;Ke++){let Ne=se[Ke],ze=Math.floor(Ne.start/4),rt=Math.ceil(Ne.count/4),ut=ze%P.width,K=Math.floor(ze/P.width),Be=rt,xe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,ut,K,Be,xe,W,Z,P.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ue),t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function ve(N,P,W){let Z=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(Z=i.TEXTURE_3D);let ne=Se(N,P),se=P.source;t.bindTexture(Z,N.__webglTexture,i.TEXTURE0+W);let ye=n.get(se);if(se.version!==ye.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let xe=Lt.getPrimaries(Lt.workingColorSpace),ke=P.colorSpace===ii?null:Lt.getPrimaries(P.colorSpace),Ge=P.colorSpace===ii||xe===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let me=c(P.image,!1,s.maxTextureSize);me=de(P,me);let Ue=r.convert(P.format,P.colorSpace),Ke=r.convert(P.type),De=v(P.internalFormat,Ue,Ke,P.normalized,P.colorSpace,P.isVideoTexture);Te(Z,P);let Ne,ze=P.mipmaps,rt=P.isVideoTexture!==!0,ut=ye.__version===void 0||ne===!0,K=se.dataReady,Be=T(P,me);if(P.isDepthTexture)De=b(P.format===or,P.type),ut&&(rt?t.texStorage2D(i.TEXTURE_2D,1,De,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,De,me.width,me.height,0,Ue,Ke,null));else if(P.isDataTexture)if(ze.length>0){rt&&ut&&t.texStorage2D(i.TEXTURE_2D,Be,De,ze[0].width,ze[0].height);for(let xe=0,ke=ze.length;xe<ke;xe++)Ne=ze[xe],rt?K&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Ue,Ke,Ne.data):t.texImage2D(i.TEXTURE_2D,xe,De,Ne.width,Ne.height,0,Ue,Ke,Ne.data);P.generateMipmaps=!1}else rt?(ut&&t.texStorage2D(i.TEXTURE_2D,Be,De,me.width,me.height),K&&J(P,me,Ue,Ke)):t.texImage2D(i.TEXTURE_2D,0,De,me.width,me.height,0,Ue,Ke,me.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){rt&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,De,ze[0].width,ze[0].height,me.depth);for(let xe=0,ke=ze.length;xe<ke;xe++)if(Ne=ze[xe],P.format!==$n)if(Ue!==null)if(rt){if(K)if(P.layerUpdates.size>0){let Ge=S0(Ne.width,Ne.height,P.format,P.type);for(let Ee of P.layerUpdates){let it=Ne.data.subarray(Ee*Ge/Ne.data.BYTES_PER_ELEMENT,(Ee+1)*Ge/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,Ee,Ne.width,Ne.height,1,Ue,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,me.depth,Ue,Ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,De,Ne.width,Ne.height,me.depth,0,Ne.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,me.depth,Ue,Ke,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,De,Ne.width,Ne.height,me.depth,0,Ue,Ke,Ne.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{rt&&ut&&t.texStorage2D(i.TEXTURE_2D,Be,De,ze[0].width,ze[0].height);for(let xe=0,ke=ze.length;xe<ke;xe++)Ne=ze[xe],P.format!==$n?Ue!==null?rt?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Ue,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,De,Ne.width,Ne.height,0,Ne.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?K&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Ue,Ke,Ne.data):t.texImage2D(i.TEXTURE_2D,xe,De,Ne.width,Ne.height,0,Ue,Ke,Ne.data)}else if(P.isDataArrayTexture)if(rt){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,De,me.width,me.height,me.depth),K)if(P.layerUpdates.size>0){let xe=S0(me.width,me.height,P.format,P.type);for(let ke of P.layerUpdates){let Ge=me.data.subarray(ke*xe/me.data.BYTES_PER_ELEMENT,(ke+1)*xe/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,me.width,me.height,1,Ue,Ke,Ge)}P.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ue,Ke,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,me.width,me.height,me.depth,0,Ue,Ke,me.data);else if(P.isData3DTexture)rt?(ut&&t.texStorage3D(i.TEXTURE_3D,Be,De,me.width,me.height,me.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ue,Ke,me.data)):t.texImage3D(i.TEXTURE_3D,0,De,me.width,me.height,me.depth,0,Ue,Ke,me.data);else if(P.isFramebufferTexture){if(ut)if(rt)t.texStorage2D(i.TEXTURE_2D,Be,De,me.width,me.height);else{let xe=me.width,ke=me.height;for(let Ge=0;Ge<Be;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,De,xe,ke,0,Ue,Ke,null),xe>>=1,ke>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let xe=i.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),me.parentNode!==xe){xe.appendChild(me),p.add(P),xe.onpaint=ke=>{let Ge=ke.changedElements;for(let Ee of p)Ge.includes(Ee.image)&&(Ee.needsUpdate=!0)},xe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,me);else{let Ge=i.RGBA,Ee=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ge,Ee,it,me)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(rt&&ut){let xe=oe(ze[0]);t.texStorage2D(i.TEXTURE_2D,Be,De,xe.width,xe.height)}for(let xe=0,ke=ze.length;xe<ke;xe++)Ne=ze[xe],rt?K&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Ue,Ke,Ne):t.texImage2D(i.TEXTURE_2D,xe,De,Ue,Ke,Ne);P.generateMipmaps=!1}else if(rt){if(ut){let xe=oe(me);t.texStorage2D(i.TEXTURE_2D,Be,De,xe.width,xe.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,Ke,me)}else t.texImage2D(i.TEXTURE_2D,0,De,Ue,Ke,me);f(P)&&d(Z),ye.__version=se.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Ce(N,P,W){if(P.image.length!==6)return;let Z=Se(N,P),ne=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let se=n.get(ne);if(ne.version!==se.__version||Z===!0){t.activeTexture(i.TEXTURE0+W);let ye=Lt.getPrimaries(Lt.workingColorSpace),ue=P.colorSpace===ii?null:Lt.getPrimaries(P.colorSpace),me=P.colorSpace===ii||ye===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ue=P.isCompressedTexture||P.image[0].isCompressedTexture,Ke=P.image[0]&&P.image[0].isDataTexture,De=[];for(let Ee=0;Ee<6;Ee++)!Ue&&!Ke?De[Ee]=c(P.image[Ee],!0,s.maxCubemapSize):De[Ee]=Ke?P.image[Ee].image:P.image[Ee],De[Ee]=de(P,De[Ee]);let Ne=De[0],ze=r.convert(P.format,P.colorSpace),rt=r.convert(P.type),ut=v(P.internalFormat,ze,rt,P.normalized,P.colorSpace),K=P.isVideoTexture!==!0,Be=se.__version===void 0||Z===!0,xe=ne.dataReady,ke=T(P,Ne);Te(i.TEXTURE_CUBE_MAP,P);let Ge;if(Ue){K&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ut,Ne.width,Ne.height);for(let Ee=0;Ee<6;Ee++){Ge=De[Ee].mipmaps;for(let it=0;it<Ge.length;it++){let st=Ge[it];P.format!==$n?ze!==null?K?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,it,0,0,st.width,st.height,ze,st.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,it,ut,st.width,st.height,0,st.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,it,0,0,st.width,st.height,ze,rt,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,it,ut,st.width,st.height,0,ze,rt,st.data)}}}else{if(Ge=P.mipmaps,K&&Be){Ge.length>0&&ke++;let Ee=oe(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ut,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ke){K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,De[Ee].width,De[Ee].height,ze,rt,De[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ut,De[Ee].width,De[Ee].height,0,ze,rt,De[Ee].data);for(let it=0;it<Ge.length;it++){let Wt=Ge[it].image[Ee].image;K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,it+1,0,0,Wt.width,Wt.height,ze,rt,Wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,it+1,ut,Wt.width,Wt.height,0,ze,rt,Wt.data)}}else{K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ze,rt,De[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ut,ze,rt,De[Ee]);for(let it=0;it<Ge.length;it++){let st=Ge[it];K?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,it+1,0,0,ze,rt,st.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,it+1,ut,ze,rt,st.image[Ee])}}}f(P)&&d(i.TEXTURE_CUBE_MAP),se.__version=ne.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function te(N,P,W,Z,ne,se){let ye=r.convert(W.format,W.colorSpace),ue=r.convert(W.type),me=v(W.internalFormat,ye,ue,W.normalized,W.colorSpace),Ue=n.get(P),Ke=n.get(W);if(Ke.__renderTarget=P,!Ue.__hasExternalTextures){let De=Math.max(1,P.width>>se),Ne=Math.max(1,P.height>>se);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,me,De,Ne,P.depth,0,ye,ue,null):t.texImage2D(ne,se,me,De,Ne,0,ye,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),fe(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ne,Ke.__webglTexture,0,ee(P)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ne,Ke.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(N,P,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),P.depthBuffer){let Z=P.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,se=b(P.stencilBuffer,ne),ye=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(P),se,P.width,P.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(P),se,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,se,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,N)}else{let Z=P.textures;for(let ne=0;ne<Z.length;ne++){let se=Z[ne],ye=r.convert(se.format,se.colorSpace),ue=r.convert(se.type),me=v(se.internalFormat,ye,ue,se.normalized,se.colorSpace);fe(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee(P),me,P.width,P.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee(P),me,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,me,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(N,P,W){let Z=P.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(P.depthTexture);if(ne.__renderTarget=P,(!ne.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,P.depthTexture.addEventListener("dispose",w)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Te(i.TEXTURE_CUBE_MAP,P.depthTexture);let Ue=r.convert(P.depthTexture.format),Ke=r.convert(P.depthTexture.type),De;P.depthTexture.format===fs?De=i.DEPTH_COMPONENT24:P.depthTexture.format===or&&(De=i.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,De,P.width,P.height,0,Ue,Ke,null)}}else z(P.depthTexture,0);let se=ne.__webglTexture,ye=ee(P),ue=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,me=P.depthTexture.format===or?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===fs)fe(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ue,se,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,me,ue,se,0);else if(P.depthTexture.format===or)fe(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ue,se,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,me,ue,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(N){let P=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){let Z=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),Z){let ne=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),P.__depthDisposeCallback=ne}P.__boundDepthTexture=Z}if(N.depthTexture&&!P.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)Fe(P.__webglFramebuffer[Z],N,Z);else{let Z=N.texture.mipmaps;Z&&Z.length>0?Fe(P.__webglFramebuffer[0],N,0):Fe(P.__webglFramebuffer,N,0)}else if(W){P.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[Z]),P.__webglDepthbuffer[Z]===void 0)P.__webglDepthbuffer[Z]=i.createRenderbuffer(),ge(P.__webglDepthbuffer[Z],N,!1);else{let ne=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=P.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,se)}}else{let Z=N.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),ge(P.__webglDepthbuffer,N,!1);else{let ne=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(N,P,W){let Z=n.get(N);P!==void 0&&te(Z.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Oe(N)}function qe(N){let P=N.texture,W=n.get(N),Z=n.get(P);N.addEventListener("dispose",_);let ne=N.textures,se=N.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(ye||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=P.version,o.memory.textures++),se){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(P.mipmaps&&P.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let me=0;me<P.mipmaps.length;me++)W.__webglFramebuffer[ue][me]=i.createFramebuffer()}else W.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<P.mipmaps.length;ue++)W.__webglFramebuffer[ue]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ye)for(let ue=0,me=ne.length;ue<me;ue++){let Ue=n.get(ne[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&fe(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){let me=ne[ue];W.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ue]);let Ue=r.convert(me.format,me.colorSpace),Ke=r.convert(me.type),De=v(me.internalFormat,Ue,Ke,me.normalized,me.colorSpace,N.isXRRenderTarget===!0),Ne=ee(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,De,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,W.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(i.TEXTURE_CUBE_MAP,P);for(let ue=0;ue<6;ue++)if(P.mipmaps&&P.mipmaps.length>0)for(let me=0;me<P.mipmaps.length;me++)te(W.__webglFramebuffer[ue][me],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else te(W.__webglFramebuffer[ue],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);f(P)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ue=0,me=ne.length;ue<me;ue++){let Ue=ne[ue],Ke=n.get(Ue),De=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,Ke.__webglTexture),Te(De,Ue),te(W.__webglFramebuffer,N,Ue,i.COLOR_ATTACHMENT0+ue,De,0),f(Ue)&&d(De)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ue=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),Te(ue,P),P.mipmaps&&P.mipmaps.length>0)for(let me=0;me<P.mipmaps.length;me++)te(W.__webglFramebuffer[me],N,P,i.COLOR_ATTACHMENT0,ue,me);else te(W.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0,ue,0);f(P)&&d(ue),t.unbindTexture()}N.depthBuffer&&Oe(N)}function ie(N){let P=N.textures;for(let W=0,Z=P.length;W<Z;W++){let ne=P[W];if(f(ne)){let se=g(N),ye=n.get(ne).__webglTexture;t.bindTexture(se,ye),d(se),t.unbindTexture()}}}let we=[],Q=[];function ce(N){if(N.samples>0){if(fe(N)===!1){let P=N.textures,W=N.width,Z=N.height,ne=i.COLOR_BUFFER_BIT,se=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(N),ue=P.length>1;if(ue)for(let Ue=0;Ue<P.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let me=N.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ue=0;Ue<P.length;Ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ue]);let Ke=n.get(P[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,W,Z,0,0,W,Z,ne,i.NEAREST),a===!0&&(we.length=0,Q.length=0,we.push(i.COLOR_ATTACHMENT0+Ue),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(we.push(se),Q.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Ue=0;Ue<P.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ue]);let Ke=n.get(P[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&a){let P=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function ee(N){return Math.min(s.maxSamples,N.samples)}function fe(N){let P=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function U(N){let P=o.render.frame;h.get(N)!==P&&(h.set(N,P),N.update())}function de(N,P){let W=N.colorSpace,Z=N.format,ne=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Ua&&W!==ii&&(Lt.getTransfer(W)===Ht?(Z!==$n||ne!==Kn)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",W)),P}function oe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.getTextureUnits=A,this.setTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=Ie,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nS(i,e){function t(n,s=ii){let r,o=Lt.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Tu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===d0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===p0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===h0)return i.BYTE;if(n===f0)return i.SHORT;if(n===Io)return i.UNSIGNED_SHORT;if(n===wu)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===Ui)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===m0)return i.ALPHA;if(n===g0)return i.RGB;if(n===$n)return i.RGBA;if(n===fs)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===ar)return i.RED;if(n===Au)return i.RED_INTEGER;if(n===lr)return i.RG;if(n===Ru)return i.RG_INTEGER;if(n===Cu)return i.RGBA_INTEGER;if(n===ml||n===gl||n===vl||n===xl)if(o===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ml)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pu||n===Iu||n===Lu||n===Du)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Iu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nu||n===Fu||n===Uu||n===Bu||n===Ou||n===yl||n===ku)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nu||n===Fu)return o===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bu)return r.COMPRESSED_R11_EAC;if(n===Ou)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yl)return r.COMPRESSED_RG11_EAC;if(n===ku)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zu||n===Hu||n===Vu||n===Wu||n===Gu||n===qu||n===Xu||n===Yu||n===Zu||n===Ku||n===$u||n===Ju||n===ju||n===Qu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ku)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$u)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ju)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ju)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eh||n===th||n===nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eh)return o===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===sh||n===_l||n===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var iS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sS=`
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

}`,V0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mt({vertexShader:iS,fragmentShader:sS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},W0=class extends ds{constructor(e,t){super();let n=this,s=null,r=1,o=null,l="local-floor",a=1,u=null,h=null,p=null,m=null,x=null,y=null,M=typeof XRWebGLBinding<"u",c=new V0,f={},d=t.getContextAttributes(),g=null,v=null,b=[],T=[],w=new Le,_=null,S=null,E=new Hn;E.viewport=new xt;let R=new Hn;R.viewport=new xt;let C=[E,R],I=new yu,A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=b[G];return J===void 0&&(J=new yo,b[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=b[G];return J===void 0&&(J=new yo,b[G]=J),J.getGripSpace()},this.getHand=function(G){let J=b[G];return J===void 0&&(J=new yo,b[G]=J),J.getHandSpace()};function D(G){let J=T.indexOf(G.inputSource);if(J===-1)return;let ve=b[J];ve!==void 0&&(ve.update(G.inputSource,G.frame,u||o),ve.dispatchEvent({type:G.type,data:G.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let G=0;G<b.length;G++){let J=T[G];J!==null&&(T[G]=null,b[G].disconnect(J))}A=null,L=null,c.reset();for(let G in f)delete f[G];if(e.setRenderTarget(g),x=null,m=null,p=null,s=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),S!==null){let G=S.camera;G.fov=S.fov,G.zoom=S.zoom,G.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,n.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),d.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ce=null,te=null;d.depth&&(te=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=d.stencil?or:fs,Ce=d.stencil?Lo:rs);let ge={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};p=this.getBinding(),m=p.createProjectionLayer(ge),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new qt(m.textureWidth,m.textureHeight,{format:$n,type:Kn,depthTexture:new Qs(m.textureWidth,m.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ve={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new qt(x.framebufferWidth,x.framebufferHeight,{format:$n,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),u=null,o=await s.requestReferenceSpace(l),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function z(G){for(let J=0;J<G.removed.length;J++){let ve=G.removed[J],Ce=T.indexOf(ve);Ce>=0&&(T[Ce]=null,b[Ce].disconnect(ve))}for(let J=0;J<G.added.length;J++){let ve=G.added[J],Ce=T.indexOf(ve);if(Ce===-1){for(let ge=0;ge<b.length;ge++)if(ge>=T.length){T.push(ve),Ce=ge;break}else if(T[ge]===null){T[ge]=ve,Ce=ge;break}if(Ce===-1)break}let te=b[Ce];te&&te.connect(ve)}}let F=new H,V=new H;function k(G,J,ve){F.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(ve.matrixWorld);let Ce=F.distanceTo(V),te=J.projectionMatrix.elements,ge=ve.projectionMatrix.elements,Fe=te[14]/(te[10]-1),Oe=te[14]/(te[10]+1),Ie=(te[9]+1)/te[5],qe=(te[9]-1)/te[5],ie=(te[8]-1)/te[0],we=(ge[8]+1)/ge[0],Q=Fe*ie,ce=Fe*we,ee=Ce/(-ie+we),fe=ee*-ie;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(fe),G.translateZ(ee),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),te[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let U=Fe+ee,de=Oe+ee,oe=Q-fe,N=ce+(Ce-fe),P=Ie*Oe/de*U,W=qe*Oe/de*U;G.projectionMatrix.makePerspective(oe,N,P,W,U,de),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function q(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let J=G.near,ve=G.far;c.texture!==null&&(c.depthNear>0&&(J=c.depthNear),c.depthFar>0&&(ve=c.depthFar)),I.near=R.near=E.near=J,I.far=R.far=E.far=ve,(A!==I.near||L!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),A=I.near,L=I.far),I.layers.mask=G.layers.mask|6,E.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let Ce=G.parent,te=I.cameras;q(I,Ce);for(let ge=0;ge<te.length;ge++)q(te[ge],Ce);te.length===2?k(I,E,R):I.projectionMatrix.copy(E.projectionMatrix),S===null&&G.isPerspectiveCamera&&(S={camera:G,fov:G.fov,zoom:G.zoom}),$(G,I,Ce)};function $(G,J,ve){ve===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ve.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Oa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(m===null&&x===null))return a},this.setFoveation=function(G){a=G,m!==null&&(m.fixedFoveation=G),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=G)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(I)},this.getCameraTexture=function(G){return f[G]};let Me=null;function Te(G,J){if(h=J.getViewerPose(u||o),y=J,h!==null){let ve=h.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let Ce=!1;ve.length!==I.cameras.length&&(I.cameras.length=0,Ce=!0);for(let Oe=0;Oe<ve.length;Oe++){let Ie=ve[Oe],qe=null;if(x!==null)qe=x.getViewport(Ie);else{let we=p.getViewSubImage(m,Ie);qe=we.viewport,Oe===0&&(e.setRenderTargetTextures(v,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(v))}let ie=C[Oe];ie===void 0&&(ie=new Hn,ie.layers.enable(Oe),ie.viewport=new xt,C[Oe]=ie),ie.matrix.fromArray(Ie.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Ie.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(qe.x,qe.y,qe.width,qe.height),Oe===0&&(I.matrix.copy(ie.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ce===!0&&I.cameras.push(ie)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let Oe=p.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&c.init(Oe,s.renderState)}if(te&&te.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Oe=0;Oe<ve.length;Oe++){let Ie=ve[Oe].camera;if(Ie){let qe=f[Ie];qe||(qe=new Ya,f[Ie]=qe);let ie=p.getCameraImage(Ie);qe.sourceTexture=ie}}}}for(let ve=0;ve<b.length;ve++){let Ce=T[ve],te=b[ve];Ce!==null&&te!==void 0&&te.update(Ce,J,u||o)}Me&&Me(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),y=null}let Se=new ag;Se.setAnimationLoop(Te),this.setAnimationLoop=function(G){Me=G},this.dispose=function(){}}},rS=new Qe,dg=new _t;dg.set(-1,0,0,0,1,0,0,0,1);function oS(i,e){function t(c,f){c.matrixAutoUpdate===!0&&c.updateMatrix(),f.value.copy(c.matrix)}function n(c,f){f.color.getRGB(c.fogColor.value,_0(i)),f.isFog?(c.fogNear.value=f.near,c.fogFar.value=f.far):f.isFogExp2&&(c.fogDensity.value=f.density)}function s(c,f,d,g,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(c,f):f.isMeshLambertMaterial?(r(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(c,f),p(c,f)):f.isMeshPhongMaterial?(r(c,f),h(c,f),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(c,f),m(c,f),f.isMeshPhysicalMaterial&&x(c,f,v)):f.isMeshMatcapMaterial?(r(c,f),y(c,f)):f.isMeshDepthMaterial?r(c,f):f.isMeshDistanceMaterial?(r(c,f),M(c,f)):f.isMeshNormalMaterial?r(c,f):f.isLineBasicMaterial?(o(c,f),f.isLineDashedMaterial&&l(c,f)):f.isPointsMaterial?a(c,f,d,g):f.isSpriteMaterial?u(c,f):f.isShadowMaterial?(c.color.value.copy(f.color),c.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(c,f){c.opacity.value=f.opacity,f.color&&c.diffuse.value.copy(f.color),f.emissive&&c.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.bumpMap&&(c.bumpMap.value=f.bumpMap,t(f.bumpMap,c.bumpMapTransform),c.bumpScale.value=f.bumpScale,f.side===Vn&&(c.bumpScale.value*=-1)),f.normalMap&&(c.normalMap.value=f.normalMap,t(f.normalMap,c.normalMapTransform),c.normalScale.value.copy(f.normalScale),f.side===Vn&&c.normalScale.value.negate()),f.displacementMap&&(c.displacementMap.value=f.displacementMap,t(f.displacementMap,c.displacementMapTransform),c.displacementScale.value=f.displacementScale,c.displacementBias.value=f.displacementBias),f.emissiveMap&&(c.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,c.emissiveMapTransform)),f.specularMap&&(c.specularMap.value=f.specularMap,t(f.specularMap,c.specularMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest);let d=e.get(f),g=d.envMap,v=d.envMapRotation;g&&(c.envMap.value=g,c.envMapRotation.value.setFromMatrix4(rS.makeRotationFromEuler(v)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(dg),c.reflectivity.value=f.reflectivity,c.ior.value=f.ior,c.refractionRatio.value=f.refractionRatio),f.lightMap&&(c.lightMap.value=f.lightMap,c.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,c.lightMapTransform)),f.aoMap&&(c.aoMap.value=f.aoMap,c.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,c.aoMapTransform))}function o(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform))}function l(c,f){c.dashSize.value=f.dashSize,c.totalSize.value=f.dashSize+f.gapSize,c.scale.value=f.scale}function a(c,f,d,g){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.size.value=f.size*d,c.scale.value=g*.5,f.map&&(c.map.value=f.map,t(f.map,c.uvTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function u(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.rotation.value=f.rotation,f.map&&(c.map.value=f.map,t(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,t(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function h(c,f){c.specular.value.copy(f.specular),c.shininess.value=Math.max(f.shininess,1e-4)}function p(c,f){f.gradientMap&&(c.gradientMap.value=f.gradientMap)}function m(c,f){c.metalness.value=f.metalness,f.metalnessMap&&(c.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,c.metalnessMapTransform)),c.roughness.value=f.roughness,f.roughnessMap&&(c.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,c.roughnessMapTransform)),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)}function x(c,f,d){c.ior.value=f.ior,f.sheen>0&&(c.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),c.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(c.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,c.sheenColorMapTransform)),f.sheenRoughnessMap&&(c.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,c.sheenRoughnessMapTransform))),f.clearcoat>0&&(c.clearcoat.value=f.clearcoat,c.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(c.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,c.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(c.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vn&&c.clearcoatNormalScale.value.negate())),f.dispersion>0&&(c.dispersion.value=f.dispersion),f.retroreflectivity>0&&(c.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(c.iridescence.value=f.iridescence,c.iridescenceIOR.value=f.iridescenceIOR,c.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(c.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,c.iridescenceMapTransform)),f.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),f.transmission>0&&(c.transmission.value=f.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),f.transmissionMap&&(c.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,c.transmissionMapTransform)),c.thickness.value=f.thickness,f.thicknessMap&&(c.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=f.attenuationDistance,c.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(c.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(c.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=f.specularIntensity,c.specularColor.value.copy(f.specularColor),f.specularColorMap&&(c.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,c.specularColorMapTransform)),f.specularIntensityMap&&(c.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,c.specularIntensityMapTransform))}function y(c,f){f.matcap&&(c.matcap.value=f.matcap)}function M(c,f){let d=e.get(f).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function aS(i,e,t,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(v,b){let T=b.program;n.uniformBlockBinding(v,T)}function u(v,b){let T=s[v.id];T===void 0&&(c(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",d));let w=b.program;n.updateUBOMapping(v,w);let _=e.render.frame;r[v.id]!==_&&(m(v),r[v.id]=_)}function h(v){let b=p();v.__bindingPointIndex=b;let T=i.createBuffer(),w=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function p(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){let b=s[v.id],T=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,S=T.length;_<S;_++){let E=T[_];if(Array.isArray(E))for(let R=0,C=E.length;R<C;R++)x(E[R],_,R,w);else x(E,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(v,b,T,w){if(M(v,b,T,w)===!0){let _=v.__offset,S=v.value;if(Array.isArray(S)){let E=0;for(let R=0;R<S.length;R++){let C=S[R],I=f(C);y(C,v.__data,E),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(E+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function y(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function M(v,b,T,w){let _=v.value,S=b+"_"+T;if(w[S]===void 0)return typeof _=="number"||typeof _=="boolean"?w[S]=_:ArrayBuffer.isView(_)?w[S]=_.slice():w[S]=_.clone(),!0;{let E=w[S];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return w[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function c(v){let b=v.uniforms,T=0,w=16;for(let S=0,E=b.length;S<E;S++){let R=Array.isArray(b[S])?b[S]:[b[S]];for(let C=0,I=R.length;C<I;C++){let A=R[C],L=Array.isArray(A.value)?A.value:[A.value];for(let D=0,O=L.length;D<O;D++){let z=L[D],F=f(z),V=T%w,k=V%F.boundary,q=V+k;T+=k,q!==0&&w-q<F.storage&&(T+=w-q),A.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=F.storage}}}let _=T%w;return _>0&&(T+=w-_),v.__size=T,v.__cache={},this}function f(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",v),b}function d(v){let b=v.target;b.removeEventListener("dispose",d);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:a,update:u,dispose:g}}var lS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vs=null;function cS(){return vs===null&&(vs=new ts(lS,16,16,lr,En),vs.name="DFG_LUT",vs.minFilter=Ut,vs.magFilter=Ut,vs.wrapS=hs,vs.wrapT=hs,vs.generateMipmaps=!1,vs.needsUpdate=!0),vs}var dh=class{constructor(e={}){let{canvas:t=Cm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:x=Kn}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=o;let M=x,c=new Set([Cu,Ru,Au]),f=new Set([Kn,rs,Io,Lo,Tu,Eu]),d=new Uint32Array(4),g=new Int32Array(4),v=new H,b=null,T=null,w=[],_=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,C=null,I=null,A=null,L=null;this._outputColorSpace=Gt;let D=0,O=0,z=null,F=-1,V=null,k=new xt,q=new xt,$=null,Me=new he(0),Te=0,Se=t.width,G=t.height,J=1,ve=null,Ce=null,te=new xt(0,0,Se,G),ge=new xt(0,0,Se,G),Fe=!1,Oe=new bo,Ie=!1,qe=!1,ie=new Qe,we=new H,Q=new xt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function fe(){return z===null?J:1}let U=n;function de(B,j){return t.getContext(B,j)}let oe,N,P,W,Z,ne,se,ye,ue,me,Ue,Ke,De,Ne,ze,rt,ut,K,Be,xe,ke,Ge,Ee;try{let B={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Wt,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",vi,!1),U===null){let j="webgl2";if(U=de(j,B),U===null)throw de(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(B){throw t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",vi,!1),vt("WebGLRenderer: "+B.message),B}function it(){oe=new gb(U),oe.init(),ke=new nS(U,oe),N=new ob(U,oe,e,ke),P=new eS(U,oe),N.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),I=U.createFramebuffer(),A=U.createFramebuffer(),L=U.createFramebuffer(),W=new yb(U),Z=new zM,ne=new tS(U,oe,P,Z,N,ke,W),se=new mb(E),ye=new b2(U),Ge=new sb(U,ye),ue=new vb(U,ye,W,Ge),me=new bb(U,ue,ye,Ge,W),K=new _b(U,N,ne),ze=new ab(Z),Ue=new kM(E,se,oe,N,Ge,ze),Ke=new oS(E,Z),De=new VM,Ne=new ZM(oe),ut=new ib(E,se,P,me,y,a),rt=new QM(E,me,N),Ee=new aS(U,W,N,P),Be=new rb(U,oe,W),xe=new xb(U,oe,W),W.programs=Ue.programs,E.capabilities=N,E.extensions=oe,E.properties=Z,E.renderLists=De,E.shadowMap=rt,E.state=P,E.info=W}M!==Kn&&(S=new Sb(M,t.width,t.height,l,s,r));let st=new W0(E,U);this.xr=st,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let B=oe.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=oe.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(B){B!==void 0&&(J=B,this.setSize(Se,G,!1))},this.getSize=function(B){return B.set(Se,G)},this.setSize=function(B,j,pe=!0){if(st.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=B,G=j,t.width=Math.floor(B*J),t.height=Math.floor(j*J),pe===!0&&(t.style.width=B+"px",t.style.height=j+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,B,j)},this.getDrawingBufferSize=function(B){return B.set(Se*J,G*J).floor()},this.setDrawingBufferSize=function(B,j,pe){Se=B,G=j,J=pe,t.width=Math.floor(B*pe),t.height=Math.floor(j*pe),this.setViewport(0,0,B,j)},this.setEffects=function(B){if(M===Kn){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let j=0;j<B.length;j++)if(B[j].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(k)},this.getViewport=function(B){return B.copy(te)},this.setViewport=function(B,j,pe,le){B.isVector4?te.set(B.x,B.y,B.z,B.w):te.set(B,j,pe,le),P.viewport(k.copy(te).multiplyScalar(J).round())},this.getScissor=function(B){return B.copy(ge)},this.setScissor=function(B,j,pe,le){B.isVector4?ge.set(B.x,B.y,B.z,B.w):ge.set(B,j,pe,le),P.scissor(q.copy(ge).multiplyScalar(J).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(B){P.setScissorTest(Fe=B)},this.setOpaqueSort=function(B){ve=B},this.setTransparentSort=function(B){Ce=B},this.getClearColor=function(B){return B.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(B=!0,j=!0,pe=!0){let le=0;if(B){let ae=!1;if(z!==null){let Ve=z.texture.format;ae=c.has(Ve)}if(ae){let Ve=z.texture.type,Je=f.has(Ve),We=ut.getClearColor(),Y=ut.getClearAlpha(),$e=We.r,Mt=We.g,Tt=We.b;Je?(d[0]=$e,d[1]=Mt,d[2]=Tt,d[3]=Y,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=$e,g[1]=Mt,g[2]=Tt,g[3]=Y,U.clearBufferiv(U.COLOR,0,g))}else le|=U.COLOR_BUFFER_BIT}j&&(le|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(le|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&U.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),C=B},this.dispose=function(){t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",vi,!1),ut.dispose(),De.dispose(),Ne.dispose(),Z.dispose(),se.dispose(),me.dispose(),Ge.dispose(),Ee.dispose(),Ue.dispose(),st.dispose(),st.removeEventListener("sessionstart",jl),st.removeEventListener("sessionend",Ql),ws.stop()};function Wt(B){B.preventDefault(),x0("WebGLRenderer: Context Lost."),R=!0}function Ft(){x0("WebGLRenderer: Context Restored."),R=!1;let B=W.autoReset,j=rt.enabled,pe=rt.autoUpdate,le=rt.needsUpdate,ae=rt.type;it(),W.autoReset=B,rt.enabled=j,rt.autoUpdate=pe,rt.needsUpdate=le,rt.type=ae}function vi(B){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function Ii(B){let j=B.target;j.removeEventListener("dispose",Ii),Jh(j)}function Jh(B){jh(B),Z.remove(B)}function jh(B){let j=Z.get(B).programs;j!==void 0&&(j.forEach(function(pe){Ue.releaseProgram(pe)}),B.isShaderMaterial&&Ue.releaseShaderCache(B))}this.renderBufferDirect=function(B,j,pe,le,ae,Ve){j===null&&(j=ce);let Je=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,We=Ts(B,j,pe,le,ae);P.setMaterial(le,Je);let Y=pe.index,$e=1;if(le.wireframe===!0){if(Y=ue.getWireframeAttribute(pe),Y===void 0)return;$e=2}let Mt=pe.drawRange,Tt=pe.attributes.position,et=Mt.start*$e,tt=(Mt.start+Mt.count)*$e;Ve!==null&&(et=Math.max(et,Ve.start*$e),tt=Math.min(tt,(Ve.start+Ve.count)*$e)),Y!==null?(et=Math.max(et,0),tt=Math.min(tt,Y.count)):Tt!=null&&(et=Math.max(et,0),tt=Math.min(tt,Tt.count));let at=tt-et;if(at<0||at===1/0)return;Ge.setup(ae,le,We,pe,Y);let ct,ot=Be;if(Y!==null&&(ct=ye.get(Y),ot=xe,ot.setIndex(ct)),ae.isMesh)le.wireframe===!0?(P.setLineWidth(le.wireframeLinewidth*fe()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(ae.isLine){let Dn=le.linewidth;Dn===void 0&&(Dn=1),P.setLineWidth(Dn*fe()),ae.isLineSegments?ot.setMode(U.LINES):ae.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else ae.isPoints?ot.setMode(U.POINTS):ae.isSprite&&ot.setMode(U.TRIANGLES);if(ae.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))ot.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let Dn=ae._multiDrawStarts,Ze=ae._multiDrawCounts,xn=ae._multiDrawCount,yt=Y?ye.get(Y).bytesPerElement:1,zn=Z.get(le).currentProgram.getUniforms();for(let ai=0;ai<xn;ai++)zn.setValue(U,"_gl_DrawID",ai),ot.render(Dn[ai]/yt,Ze[ai])}else if(ae.isInstancedMesh)ot.renderInstances(et,at,ae.count);else if(pe.isInstancedBufferGeometry){let Dn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ze=Math.min(pe.instanceCount,Dn);ot.renderInstances(et,at,Ze)}else ot.render(et,at)};function Jl(B,j,pe,le){C!==null&&B.isNodeMaterial&&C.setObject(le,B),Ie===!0&&ze.setState(B,pe,!1),B.transparent===!0&&B.side===yn&&B.forceSinglePass===!1?(B.side=Vn,B.needsUpdate=!0,ls(B,j,le),B.side=gs,B.needsUpdate=!0,ls(B,j,le),B.side=yn):ls(B,j,le)}this.compile=function(B,j,pe=null){pe===null&&(pe=B),C!==null&&C.renderStart(B,j,pe),T=Ne.get(pe),T.init(j),_.push(T),pe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(j.layers)&&(T.pushLight(ae),ae.castShadow&&T.pushShadow(ae))}),B!==pe&&B.traverseVisible(function(ae){ae.isLight&&ae.layers.test(j.layers)&&(T.pushLight(ae),ae.castShadow&&T.pushShadow(ae))}),T.setupLights(),C!==null&&C.updateLights(T.state.lightsArray),qe=this.localClippingEnabled,Ie=ze.init(this.clippingPlanes,qe),Ie===!0&&ze.setGlobalState(this.clippingPlanes,j),C!==null&&rt.render(T.state.shadowsArray,pe,j);let le=new Set;return B.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Ve=ae.material;if(Ve)if(Array.isArray(Ve))for(let Je=0;Je<Ve.length;Je++){let We=Ve[Je];Jl(We,pe,j,ae),le.add(We)}else Jl(Ve,pe,j,ae),le.add(Ve)}),T=_.pop(),C!==null&&C.renderEnd(),le},this.compileAsync=function(B,j,pe=null){let le=this.compile(B,j,pe);return new Promise(ae=>{function Ve(){if(le.forEach(function(Je){let Y=Z.get(Je).currentProgram;(Y===void 0||Y.isReady())&&le.delete(Je)}),le.size===0){ae(B);return}setTimeout(Ve,10)}oe.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let ca=null;function Qh(B){ca&&ca(B)}function jl(){ws.stop()}function Ql(){ws.start()}let ws=new ag;ws.setAnimationLoop(Qh),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(B){ca=B,st.setAnimationLoop(B),B===null?ws.stop():ws.start()},st.addEventListener("sessionstart",jl),st.addEventListener("sessionend",Ql),this.render=function(B,j){if(j!==void 0&&j.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;C!==null&&C.renderStart(B,j);let pe=st.enabled===!0&&st.isPresenting===!0,le=S!==null&&(z===null||pe)&&S.begin(E,z);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(j),j=st.getCamera()),B.isScene===!0&&B.onBeforeRender(E,B,j,z),T=Ne.get(B,_.length),T.init(j),T.state.textureUnits=ne.getTextureUnits(),_.push(T),ie.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Oe.setFromProjectionMatrix(ie,es,j.reversedDepth),qe=this.localClippingEnabled,Ie=ze.init(this.clippingPlanes,qe),b=De.get(B,w.length),b.init(),w.push(b),st.enabled===!0&&st.isPresenting===!0){let Je=E.xr.getDepthSensingMesh();Je!==null&&ua(Je,j,-1/0,E.sortObjects)}ua(B,j,0,E.sortObjects),b.finish(),C!==null&&C.updateLights(T.state.lightsArray),E.sortObjects===!0&&b.sort(ve,Ce),ee=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ee&&ut.addToRenderList(b,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ie===!0&&ze.beginShadows();let ae=T.state.shadowsArray;if(rt.render(ae,B,j),Ie===!0&&ze.endShadows(),(le&&S.hasRenderPass())===!1){let Je=b.opaque,We=b.transmissive;if(T.setupLights(),j.isArrayCamera){let Y=j.cameras;if(We.length>0)for(let $e=0,Mt=Y.length;$e<Mt;$e++){let Tt=Y[$e];ec(Je,We,B,Tt)}ee&&ut.render(B);for(let $e=0,Mt=Y.length;$e<Mt;$e++){let Tt=Y[$e];ha(b,B,Tt,Tt.viewport)}}else We.length>0&&ec(Je,We,B,j),ee&&ut.render(B),ha(b,B,j)}z!==null&&O===0&&(ne.updateMultisampleRenderTarget(z),ne.updateRenderTargetMipmap(z)),le&&S.end(E),B.isScene===!0&&B.onAfterRender(E,B,j),Ge.resetDefaultState(),F=-1,V=null,_.pop(),_.length>0?(T=_[_.length-1],ne.setTextureUnits(T.state.textureUnits),Ie===!0&&ze.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,C!==null&&C.renderEnd()};function ua(B,j,pe,le){if(B.visible===!1)return;if(B.layers.test(j.layers)){if(B.isGroup)pe=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(j);else if(B.isLightProbeGrid)T.pushLightProbeGrid(B);else if(B.isLight)T.pushLight(B),B.castShadow&&T.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(Oe)){le&&Q.setFromMatrixPosition(B.matrixWorld).applyMatrix4(ie);let Je=me.update(B),We=B.material;We.visible&&b.push(B,Je,We,pe,Q.z,null,j)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(Oe))){let Je=me.update(B),We=B.material;if(le&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Q.copy(B.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),Q.copy(Je.boundingSphere.center)),Q.applyMatrix4(B.matrixWorld).applyMatrix4(ie)),Array.isArray(We)){let Y=Je.groups;for(let $e=0,Mt=Y.length;$e<Mt;$e++){let Tt=Y[$e],et=We[Tt.materialIndex];et&&et.visible&&b.push(B,Je,et,pe,Q.z,Tt,j)}}else We.visible&&b.push(B,Je,We,pe,Q.z,null,j)}}let Ve=B.children;for(let Je=0,We=Ve.length;Je<We;Je++)ua(Ve[Je],j,pe,le)}function ha(B,j,pe,le){let{opaque:ae,transmissive:Ve,transparent:Je}=B;T.setupLightsView(pe),Ie===!0&&ze.setGlobalState(E.clippingPlanes,pe),le&&P.viewport(k.copy(le)),ae.length>0&&Wr(ae,j,pe),Ve.length>0&&Wr(Ve,j,pe),Je.length>0&&Wr(Je,j,pe),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function ec(B,j,pe,le){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[le.id]===void 0){let et=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[le.id]=new qt(1,1,{generateMipmaps:!0,type:et?En:Kn,minFilter:Pn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let Ve=T.state.transmissionRenderTarget[le.id],Je=le.viewport||k;Ve.setSize(Je.z*E.transmissionResolutionScale,Je.w*E.transmissionResolutionScale);let We=E.getRenderTarget(),Y=E.getActiveCubeFace(),$e=E.getActiveMipmapLevel();E.setRenderTarget(Ve),E.getClearColor(Me),Te=E.getClearAlpha(),Te<1&&E.setClearColor(16777215,.5),E.clear(),ee&&ut.render(pe);let Mt=E.toneMapping;E.toneMapping=ss;let Tt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),T.setupLightsView(le),Ie===!0&&ze.setGlobalState(E.clippingPlanes,le),Wr(B,pe,le),ne.updateMultisampleRenderTarget(Ve),ne.updateRenderTargetMipmap(Ve),oe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let tt=0,at=j.length;tt<at;tt++){let ct=j[tt],{object:ot,geometry:Dn,material:Ze,group:xn}=ct;if(Ze.side===yn&&ot.layers.test(le.layers)){let yt=Ze.side;Ze.side=Vn,Ze.needsUpdate=!0,fa(ot,pe,le,Dn,Ze,xn),Ze.side=yt,Ze.needsUpdate=!0,et=!0}}et===!0&&(ne.updateMultisampleRenderTarget(Ve),ne.updateRenderTargetMipmap(Ve))}E.setRenderTarget(We,Y,$e),E.setClearColor(Me,Te),Tt!==void 0&&(le.viewport=Tt),E.toneMapping=Mt}function Wr(B,j,pe){let le=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,Ve=B.length;ae<Ve;ae++){let Je=B[ae],{object:We,geometry:Y,group:$e}=Je,Mt=Je.material;Mt.allowOverride===!0&&le!==null&&(Mt=le),We.layers.test(pe.layers)&&fa(We,j,pe,Y,Mt,$e)}}function fa(B,j,pe,le,ae,Ve){C!==null&&ae.isNodeMaterial&&C.setObject(B,ae),B.onBeforeRender(E,j,pe,le,ae,Ve),B.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),ae.onBeforeRender(E,j,pe,le,B,Ve),ae.transparent===!0&&ae.side===yn&&ae.forceSinglePass===!1?(ae.side=Vn,ae.needsUpdate=!0,E.renderBufferDirect(pe,j,le,ae,B,Ve),ae.side=gs,ae.needsUpdate=!0,E.renderBufferDirect(pe,j,le,ae,B,Ve),ae.side=yn):E.renderBufferDirect(pe,j,le,ae,B,Ve),B.onAfterRender(E,j,pe,le,ae,Ve)}function ls(B,j,pe){j.isScene!==!0&&(j=ce);let le=Z.get(B),ae=T.state.lights,Ve=T.state.shadowsArray,Je=ae.state.version,We=Ue.getParameters(B,ae.state,Ve,j,pe,T.state.lightProbeGridArray),Y=Ue.getProgramCacheKey(We),$e=le.programs;le.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?j.environment:null,le.fog=j.fog;let Mt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;le.envMap=se.get(B.envMap||le.environment,Mt),le.envMapRotation=le.environment!==null&&B.envMap===null?j.environmentRotation:B.envMapRotation,$e===void 0&&(B.addEventListener("dispose",Ii),$e=new Map,le.programs=$e);let Tt=$e.get(Y);if(Tt!==void 0){if(le.currentProgram===Tt&&le.lightsStateVersion===Je)return Gr(B,We),Tt}else We.uniforms=Ue.getUniforms(B),C!==null&&B.isNodeMaterial&&C.build(B,pe,We),B.onBeforeCompile(We,E),Tt=Ue.acquireProgram(We,Y),$e.set(Y,Tt),le.uniforms=We.uniforms;let et=le.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(et.clippingPlanes=ze.uniform),Gr(B,We),le.needsLights=pa(B),le.lightsStateVersion=Je,le.needsLights&&(et.ambientLightColor.value=ae.state.ambient,et.lightProbe.value=ae.state.probe,et.sunLights.value=ae.state.sun,et.sunLightShadows.value=ae.state.sunShadow,et.directionalLights.value=ae.state.directional,et.directionalLightShadows.value=ae.state.directionalShadow,et.spotLights.value=ae.state.spot,et.spotLightShadows.value=ae.state.spotShadow,et.rectAreaLights.value=ae.state.rectArea,et.ltc_1.value=ae.state.rectAreaLTC1,et.ltc_2.value=ae.state.rectAreaLTC2,et.pointLights.value=ae.state.point,et.pointLightShadows.value=ae.state.pointShadow,et.hemisphereLights.value=ae.state.hemi,et.sunShadowMatrix.value=ae.state.sunShadowMatrix,et.sunShadowCascade.value=ae.state.sunShadowCascade,et.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,et.spotLightMatrix.value=ae.state.spotLightMatrix,et.spotLightMap.value=ae.state.spotLightMap,et.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.lightProbeGrid=T.state.lightProbeGridArray.length>0,le.currentProgram=Tt,le.uniformsList=null,Tt}function tc(B){if(B.uniformsList===null){let j=B.currentProgram.getUniforms();B.uniformsList=Uo.seqWithValue(j.seq,B.uniforms)}return B.uniformsList}function Gr(B,j){let pe=Z.get(B);pe.outputColorSpace=j.outputColorSpace,pe.batching=j.batching,pe.batchingColor=j.batchingColor,pe.instancing=j.instancing,pe.instancingColor=j.instancingColor,pe.instancingMorph=j.instancingMorph,pe.skinning=j.skinning,pe.morphTargets=j.morphTargets,pe.morphNormals=j.morphNormals,pe.morphColors=j.morphColors,pe.morphTargetsCount=j.morphTargetsCount,pe.numClippingPlanes=j.numClippingPlanes,pe.numIntersection=j.numClipIntersection,pe.vertexAlphas=j.vertexAlphas,pe.vertexTangents=j.vertexTangents,pe.toneMapping=j.toneMapping}function cs(B,j){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;v.setFromMatrixPosition(j.matrixWorld);for(let pe=0,le=B.length;pe<le;pe++){let ae=B[pe];if(ae.texture!==null&&ae.boundingBox.containsPoint(v))return ae}return null}function Ts(B,j,pe,le,ae){j.isScene!==!0&&(j=ce),ne.resetTextureUnits();let Ve=j.fog,Je=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?j.environment:null,We=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Lt.workingColorSpace,Y=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,$e=se.get(le.envMap||Je,Y),Mt=le.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Tt=!!pe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),et=!!pe.morphAttributes.position,tt=!!pe.morphAttributes.normal,at=!!pe.morphAttributes.color,ct=ss;le.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ct=E.toneMapping);let ot=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Dn=ot!==void 0?ot.length:0,Ze=Z.get(le),xn=T.state.lights;if(Ie===!0&&(qe===!0||B!==V)){let Bt=B===V&&le.id===F;ze.setState(le,B,Bt)}let yt=!1;le.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==xn.state.version||Ze.outputColorSpace!==We||ae.isBatchedMesh&&Ze.batching===!1||!ae.isBatchedMesh&&Ze.batching===!0||ae.isBatchedMesh&&Ze.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Ze.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Ze.instancing===!1||!ae.isInstancedMesh&&Ze.instancing===!0||ae.isSkinnedMesh&&Ze.skinning===!1||!ae.isSkinnedMesh&&Ze.skinning===!0||ae.isInstancedMesh&&Ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ze.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ze.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ze.instancingMorph===!1&&ae.morphTexture!==null||Ze.envMap!==$e||le.fog===!0&&Ze.fog!==Ve||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ze.numPlanes||Ze.numIntersection!==ze.numIntersection)||Ze.vertexAlphas!==Mt||Ze.vertexTangents!==Tt||Ze.morphTargets!==et||Ze.morphNormals!==tt||Ze.morphColors!==at||Ze.toneMapping!==ct||Ze.morphTargetsCount!==Dn||!!Ze.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ze.__version=le.version);let zn=Ze.currentProgram;yt===!0&&(zn=ls(le,j,ae),C&&le.isNodeMaterial&&C.onUpdateProgram(le,zn,Ze));let ai=!1,Li=!1,qs=!1,zt=zn.getUniforms(),fn=Ze.uniforms;if(P.useProgram(zn.program)&&(ai=!0,Li=!0,qs=!0),le.id!==F&&(F=le.id,Li=!0),Ze.needsLights){let Bt=cs(T.state.lightProbeGridArray,ae);Ze.lightProbeGrid!==Bt&&(Ze.lightProbeGrid=Bt,Li=!0)}if(ai||V!==B){P.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),zt.setValue(U,"projectionMatrix",B.projectionMatrix),zt.setValue(U,"viewMatrix",B.matrixWorldInverse);let Xi=zt.map.cameraPosition;Xi!==void 0&&Xi.setValue(U,we.setFromMatrixPosition(B.matrixWorld)),N.logarithmicDepthBuffer&&zt.setValue(U,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&zt.setValue(U,"isOrthographic",B.isOrthographicCamera===!0),V!==B&&(V=B,Li=!0,qs=!0)}if(Ze.needsLights&&(xn.state.sunShadowMap.length>0&&zt.setValue(U,"sunShadowMap",xn.state.sunShadowMap,ne),xn.state.directionalShadowMap.length>0&&zt.setValue(U,"directionalShadowMap",xn.state.directionalShadowMap,ne),xn.state.spotShadowMap.length>0&&zt.setValue(U,"spotShadowMap",xn.state.spotShadowMap,ne),xn.state.pointShadowMap.length>0&&zt.setValue(U,"pointShadowMap",xn.state.pointShadowMap,ne)),ae.isSkinnedMesh){zt.setOptional(U,ae,"bindMatrix"),zt.setOptional(U,ae,"bindMatrixInverse");let Bt=ae.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),zt.setValue(U,"boneTexture",Bt.boneTexture,ne))}ae.isBatchedMesh&&(zt.setOptional(U,ae,"batchingTexture"),zt.setValue(U,"batchingTexture",ae._matricesTexture,ne),zt.setOptional(U,ae,"batchingIdTexture"),zt.setValue(U,"batchingIdTexture",ae._indirectTexture,ne),zt.setOptional(U,ae,"batchingColorTexture"),ae._colorsTexture!==null&&zt.setValue(U,"batchingColorTexture",ae._colorsTexture,ne));let xi=pe.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&K.update(ae,pe,zn),(Li||Ze.receiveShadow!==ae.receiveShadow)&&(Ze.receiveShadow=ae.receiveShadow,zt.setValue(U,"receiveShadow",ae.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&j.environment!==null&&(fn.envMapIntensity.value=j.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=cS()),Li){if(zt.setValue(U,"toneMappingExposure",E.toneMappingExposure),Ze.needsLights&&da(fn,qs),Ve&&le.fog===!0&&Ke.refreshFogUniforms(fn,Ve),Ke.refreshMaterialUniforms(fn,le,J,G,T.state.transmissionRenderTarget[B.id]),Ze.needsLights&&Ze.lightProbeGrid){let Bt=Ze.lightProbeGrid;fn.probesSH.value=Bt.texture,fn.probesMin.value.copy(Bt.boundingBox.min),fn.probesMax.value.copy(Bt.boundingBox.max),fn.probesResolution.value.copy(Bt.resolution)}Uo.upload(U,tc(Ze),fn,ne)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Uo.upload(U,tc(Ze),fn,ne),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&zt.setValue(U,"center",ae.center),zt.setValue(U,"modelViewMatrix",ae.modelViewMatrix),zt.setValue(U,"normalMatrix",ae.normalMatrix),zt.setValue(U,"modelMatrix",ae.matrixWorld),le.uniformsGroups!==void 0){let Bt=le.uniformsGroups;for(let Xi=0,Xt=Bt.length;Xi<Xt;Xi++){let ma=Bt[Xi];Ee.update(ma,zn),Ee.bind(ma,zn)}}return zn}function da(B,j){B.ambientLightColor.needsUpdate=j,B.lightProbe.needsUpdate=j,B.sunLights.needsUpdate=j,B.sunLightShadows.needsUpdate=j,B.directionalLights.needsUpdate=j,B.directionalLightShadows.needsUpdate=j,B.pointLights.needsUpdate=j,B.pointLightShadows.needsUpdate=j,B.spotLights.needsUpdate=j,B.spotLightShadows.needsUpdate=j,B.rectAreaLights.needsUpdate=j,B.hemisphereLights.needsUpdate=j}function pa(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(B,j,pe){let le=Z.get(B);le.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Z.get(B.texture).__webglTexture=j,Z.get(B.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:pe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,j){let pe=Z.get(B);pe.__webglFramebuffer=j,pe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(B,j=0,pe=0){z=B,D=j,O=pe;let le=null,ae=!1,Ve=!1;if(B){let We=Z.get(B);if(We.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(U.FRAMEBUFFER,We.__webglFramebuffer),k.copy(B.viewport),q.copy(B.scissor),$=B.scissorTest,P.viewport(k),P.scissor(q),P.setScissorTest($),F=-1;return}else if(We.__webglFramebuffer===void 0)ne.setupRenderTarget(B);else if(We.__hasExternalTextures)ne.rebindTextures(B,Z.get(B.texture).__webglTexture,Z.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let Mt=B.depthTexture;if(We.__boundDepthTexture!==Mt){if(Mt!==null&&Z.has(Mt)&&(B.width!==Mt.image.width||B.height!==Mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(B)}}let Y=B.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(Ve=!0);let $e=Z.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray($e[j])?le=$e[j][pe]:le=$e[j],ae=!0):B.samples>0&&ne.useMultisampledRTT(B)===!1?le=Z.get(B).__webglMultisampledFramebuffer:Array.isArray($e)?le=$e[pe]:le=$e,k.copy(B.viewport),q.copy(B.scissor),$=B.scissorTest}else k.copy(te).multiplyScalar(J).floor(),q.copy(ge).multiplyScalar(J).floor(),$=Fe;if(pe!==0&&(le=I),P.bindFramebuffer(U.FRAMEBUFFER,le)&&P.drawBuffers(B,le),P.viewport(k),P.scissor(q),P.setScissorTest($),ae){let We=Z.get(B.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,We.__webglTexture,pe)}else if(Ve){let We=j;for(let Y=0;Y<B.textures.length;Y++){let $e=Z.get(B.textures[Y]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Y,$e.__webglTexture,pe,We)}}else if(B!==null&&pe!==0){let We=Z.get(B.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,We.__webglTexture,pe)}F=-1};function Gs(B){let j=Z.get(B);return(j.__readFormat!==B.format||j.__readType!==B.type)&&(j.__readFormat=B.format,j.__readType=B.type,j.__formatReadable=N.textureFormatReadable(B.format),j.__typeReadable=N.textureTypeReadable(B.type)),j}this.readRenderTargetPixels=function(B,j,pe,le,ae,Ve,Je,We=0){if(!(B&&B.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=Z.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Je!==void 0&&(Y=Y[Je]),Y){P.bindFramebuffer(U.FRAMEBUFFER,Y);try{let $e=B.textures[We],Mt=$e.format,Tt=$e.type;B.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+We);let et=Gs($e);if(et.__formatReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=B.width-le&&pe>=0&&pe<=B.height-ae&&U.readPixels(j,pe,le,ae,ke.convert(Mt),ke.convert(Tt),Ve)}finally{let $e=z!==null?Z.get(z).__webglFramebuffer:null;P.bindFramebuffer(U.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(B,j,pe,le,ae,Ve,Je,We=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=Z.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Je!==void 0&&(Y=Y[Je]),Y)if(j>=0&&j<=B.width-le&&pe>=0&&pe<=B.height-ae){P.bindFramebuffer(U.FRAMEBUFFER,Y);let $e=B.textures[We],Mt=$e.format,Tt=$e.type;B.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+We);let et=Gs($e);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,tt),U.bufferData(U.PIXEL_PACK_BUFFER,Ve.byteLength,U.STREAM_READ),U.readPixels(j,pe,le,ae,ke.convert(Mt),ke.convert(Tt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let at=z!==null?Z.get(z).__webglFramebuffer:null;P.bindFramebuffer(U.FRAMEBUFFER,at);let ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Im(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,tt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ve),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(tt),U.deleteSync(ct),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,j=null,pe=0){let le=Math.pow(2,-pe),ae=Math.floor(B.image.width*le),Ve=Math.floor(B.image.height*le),Je=j!==null?j.x:0,We=j!==null?j.y:0;ne.setTexture2D(B,0),U.copyTexSubImage2D(U.TEXTURE_2D,pe,0,0,Je,We,ae,Ve),P.unbindTexture()},this.copyTextureToTexture=function(B,j,pe=null,le=null,ae=0,Ve=0){let Je,We,Y,$e,Mt,Tt,et,tt,at,ct=B.isCompressedTexture?B.mipmaps[Ve]:B.image;if(pe!==null)Je=pe.max.x-pe.min.x,We=pe.max.y-pe.min.y,Y=pe.isBox3?pe.max.z-pe.min.z:1,$e=pe.min.x,Mt=pe.min.y,Tt=pe.isBox3?pe.min.z:0;else{let fn=Math.pow(2,-ae);Je=Math.floor(ct.width*fn),We=Math.floor(ct.height*fn),B.isDataArrayTexture?Y=ct.depth:B.isData3DTexture?Y=Math.floor(ct.depth*fn):Y=1,$e=0,Mt=0,Tt=0}le!==null?(et=le.x,tt=le.y,at=le.z):(et=0,tt=0,at=0);let ot=ke.convert(j.format),Dn=ke.convert(j.type),Ze;j.isData3DTexture?(ne.setTexture3D(j,0),Ze=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ne.setTexture2DArray(j,0),Ze=U.TEXTURE_2D_ARRAY):(ne.setTexture2D(j,0),Ze=U.TEXTURE_2D),P.activeTexture(U.TEXTURE0),P.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),P.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),P.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);let xn=P.getParameter(U.UNPACK_ROW_LENGTH),yt=P.getParameter(U.UNPACK_IMAGE_HEIGHT),zn=P.getParameter(U.UNPACK_SKIP_PIXELS),ai=P.getParameter(U.UNPACK_SKIP_ROWS),Li=P.getParameter(U.UNPACK_SKIP_IMAGES);P.pixelStorei(U.UNPACK_ROW_LENGTH,ct.width),P.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct.height),P.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),P.pixelStorei(U.UNPACK_SKIP_ROWS,Mt),P.pixelStorei(U.UNPACK_SKIP_IMAGES,Tt);let qs=B.isDataArrayTexture||B.isData3DTexture,zt=j.isDataArrayTexture||j.isData3DTexture;if(B.isDepthTexture){let fn=Z.get(B),xi=Z.get(j),Bt=Z.get(fn.__renderTarget),Xi=Z.get(xi.__renderTarget);P.bindFramebuffer(U.READ_FRAMEBUFFER,Bt.__webglFramebuffer),P.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Xt=0;Xt<Y;Xt++)qs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(B).__webglTexture,ae,Tt+Xt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(j).__webglTexture,Ve,at+Xt)),U.blitFramebuffer($e,Mt,Je,We,et,tt,Je,We,U.DEPTH_BUFFER_BIT,U.NEAREST);P.bindFramebuffer(U.READ_FRAMEBUFFER,null),P.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(ae!==0||B.isRenderTargetTexture||Z.has(B)){let fn=Z.get(B),xi=Z.get(j);P.bindFramebuffer(U.READ_FRAMEBUFFER,A),P.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let Bt=0;Bt<Y;Bt++)qs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,fn.__webglTexture,ae,Tt+Bt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fn.__webglTexture,ae),zt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xi.__webglTexture,Ve,at+Bt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xi.__webglTexture,Ve),ae!==0?U.blitFramebuffer($e,Mt,Je,We,et,tt,Je,We,U.COLOR_BUFFER_BIT,U.NEAREST):zt?U.copyTexSubImage3D(Ze,Ve,et,tt,at+Bt,$e,Mt,Je,We):U.copyTexSubImage2D(Ze,Ve,et,tt,$e,Mt,Je,We);P.bindFramebuffer(U.READ_FRAMEBUFFER,null),P.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else zt?B.isDataTexture||B.isData3DTexture?U.texSubImage3D(Ze,Ve,et,tt,at,Je,We,Y,ot,Dn,ct.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(Ze,Ve,et,tt,at,Je,We,Y,ot,ct.data):U.texSubImage3D(Ze,Ve,et,tt,at,Je,We,Y,ot,Dn,ct):B.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ve,et,tt,Je,We,ot,Dn,ct.data):B.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ve,et,tt,ct.width,ct.height,ot,ct.data):U.texSubImage2D(U.TEXTURE_2D,Ve,et,tt,Je,We,ot,Dn,ct);P.pixelStorei(U.UNPACK_ROW_LENGTH,xn),P.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt),P.pixelStorei(U.UNPACK_SKIP_PIXELS,zn),P.pixelStorei(U.UNPACK_SKIP_ROWS,ai),P.pixelStorei(U.UNPACK_SKIP_IMAGES,Li),Ve===0&&j.generateMipmaps&&U.generateMipmap(Ze),P.unbindTexture()},this.initRenderTarget=function(B){Z.get(B).__webglFramebuffer===void 0&&ne.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?ne.setTextureCube(B,0):B.isData3DTexture?ne.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?ne.setTexture2DArray(B,0):ne.setTexture2D(B,0),P.unbindTexture()},this.resetState=function(){D=0,O=0,z=null,P.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}};var Zt=(i,e,t)=>i<e?e:i>t?t:i,pt=(i,e,t)=>i+(e-i)*t,wl=i=>i*i*(3-2*i),Rt=(i,e,t)=>{let n=Zt((t-i)/(e-i),0,1);return n*n*(3-2*n)},pg=1337;function mg(i){pg=i|0}function uS(i){return i=i^pg|0,i=Math.imul(i^i>>>15,739982445),i=Math.imul(i^i>>>12,695872825),i^=i>>>15,(i>>>0)/4294967296}var gn=(i,e)=>uS(Math.imul(i|0,73856093)^Math.imul(e|0,19349663));function Ti(i,e=0){let t=Math.floor(i),n=i-t,s=n*n*(3-2*n);return pt(gn(t,e),gn(t+1,e),s)}var vh=(i,e=0)=>Ti(i,e)*.55+Ti(i*2.03,e+7)*.3+Ti(i*4.1,e+13)*.15;function At(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.int=(n,s)=>Math.floor(n+(s-n+1)*t()),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var gh=new he,_e=i=>(gh.set(i),[gh.r,gh.g,gh.b]),G0=(i,e,t)=>[pt(i[0],e[0],t),pt(i[1],e[1],t),pt(i[2],e[2],t)],Un=(i,e)=>[i[0]*e,i[1]*e,i[2]*e];var Ei=["city","sakura","coast","country","mountain","snow"],Tl={city:{jp:"\u8857\u306E\u706F",en:"City Streets",curv:1/1500,hill:1.2,base:4,rw:3.1,speed:10.5},sakura:{jp:"\u685C\u4E26\u6728",en:"Cherry Blossom Avenue",curv:1/520,hill:2.5,base:4.5,rw:3.3,speed:11.5},coast:{jp:"\u6D77\u6CBF\u3044\u306E\u9053",en:"Coastal Road",curv:1/300,hill:.25,base:1.05,rw:3.4,speed:13.5},country:{jp:"\u7530\u820E\u9053",en:"Country Road",curv:1/260,hill:7,base:6,rw:3.1,speed:12.5},mountain:{jp:"\u7D05\u8449\u306E\u5CE0",en:"Autumn Mountain Pass",curv:1/150,hill:11,base:14,rw:3,speed:10},snow:{jp:"\u96EA\u56FD",en:"Snow Country",curv:1/380,hill:3.5,base:9,rw:3,speed:9.5}},Ai=1500,Oo=260,os=0,Al=2,hS=-2.2,El=0;function vg(i){El=Math.max(0,Ei.indexOf(i))}function cr(i){let e=Math.floor(i/Ai),t=i-e*Ai,n=wl(Zt((t-(Ai-Oo))/Oo,0,1)),s=Ei.length;return{a:Ei[((e+El)%s+s)%s],b:Ei[((e+El+1)%s+s)%s],t:n}}function Dt(i){let e=cr(i),t={city:0,sakura:0,coast:0,country:0,mountain:0,snow:0};return t[e.a]+=1-e.t,t[e.b]+=e.t,t}var hn=i=>{let e=cr(i);return e.t<.5?e.a:e.b};function _h(i,e){let t=Math.floor(i/Ai),n=i-t*Ai,s=wl(Zt((n-(Ai-Oo))/Oo,0,1)),r=Ei.length;return(Ei[((t+El)%r+r)%r]===e?1-s:0)+(Ei[((t+El+1)%r+r)%r]===e?s:0)}function Bn(i,e){let t=cr(i);return pt(Tl[t.a][e],Tl[t.b][e],t.t)}var Nr=650,Fr=375,ko=i=>i*Nr+Fr;function Rl(i){if(i<300)return!1;for(let e of[-70,0,70]){let t=Dt(i+e);if(Math.max(t.city,t.country)<.9)return!1}return!0}var q0={x:new Map,r:new Map,t:new Map};function X0(i,e,t){let n=i.get(e);return n===void 0&&(n=t(),i.set(e,n),i.size>2e3&&i.clear()),n}function ur(i){let e=Math.round((i-Fr)/Nr);return X0(q0.x,e,()=>{let t=ko(e);return Rl(t)?{k:e,s:t}:null})}function fS(i){let e=ur(i);return e?1-Rt(8,45,Math.abs(i-e.s)):0}var Ur=1150,zo=820,Cl=4.6,Y0=i=>i*Ur+zo;function Z0(i){if(i<400)return!1;for(let t of[-90,0,90]){let n=Dt(i+t);if(n.country+n.sakura<.9)return!1}let e=ur(i);return!(e&&Math.abs(e.s-i)<170)}function Bi(i){let e=Math.round((i-zo)/Ur);return X0(q0.r,e,()=>{let t=Y0(e);return Z0(t)?{k:e,s:t}:null})}function dS(i){let e=Bi(i);return e?1-Rt(30,70,Math.abs(i-e.s)):0}function pS(i){let e=-Cl;return i<11?e-1.3:i<16?pt(e-1.3,e+.7,(i-11)/5):i<20?e+.7:i<25.5?pt(e+.7,.35,(i-20)/5.5):.35}var xg=1050,yg=525,vn=85,rn=125,mS=24,gS=i=>i*xg+yg;function vS(i){if(i<300)return!1;for(let e of[-170,0,170]){let t=Dt(i+e);if(Math.max(t.mountain,t.coast)<.95)return!1}return!0}function Oi(i){let e=Math.round((i-yg)/xg);return X0(q0.t,e,()=>{let t=gS(e);return vS(t)?{k:e,s:t}:null})}function xS(i){let e=Oi(i);return e?1-Rt(vn+20,rn+25,Math.abs(i-e.s)):0}var xh=0,bh=(i,e)=>{let t=i/rn;return mS*(1-t*t)-Math.abs(e)*(e>0?.12:.32)};var ys=2,yh=class{constructor(){this.X=[0],this.Z=[0],this.H=[.3],this.Y=[this.elev(0)]}curv(e){let t=(Ti(e/300,11)-.5)*2+(Ti(e/95,17)-.5)*.35,n=Math.abs(t);return(n<.22?0:Math.sign(t)*(n-.22)/.78)*Bn(e,"curv")*(1-Math.max(fS(e),dS(e),xS(e)))}elevRaw(e){return Bn(e,"base")+Bn(e,"hill")*(vh(e/380,29)-.5)*2}elev(e){let t=this.elevRaw(e),n=ur(e);if(n){let o=1-Rt(8,45,Math.abs(e-n.s));o>0&&(t=pt(t,this.elevRaw(n.s),o))}let s=Bi(e);if(s){let o=1-Rt(30,70,Math.abs(e-s.s));o>0&&(t=pt(t,this.elevRaw(s.s),o))}let r=Oi(e);if(r){let o=1-Rt(vn+10,rn+45,Math.abs(e-r.s));o>0&&(t=pt(t,this.elevRaw(r.s),o))}return t}ensure(e){for(;(this.X.length-1)*ys<e+ys;){let t=this.X.length-1,n=t*ys,s=this.curv(n+ys/2)*ys,r=this.H[t];this.X.push(this.X[t]+Math.sin(r+s/2)*ys),this.Z.push(this.Z[t]+Math.cos(r+s/2)*ys),this.H.push(r+s),this.Y.push(this.elev(n+ys))}}at(e,t={}){e=Math.max(0,e),this.ensure(e+ys);let n=e/ys,s=Math.floor(n),r=n-s;t.x=pt(this.X[s],this.X[s+1],r),t.z=pt(this.Z[s],this.Z[s+1],r),t.y=pt(this.Y[s],this.Y[s+1],r),t.h=pt(this.H[s],this.H[s+1],r);let o=Math.sin(t.h),l=Math.cos(t.h);return t.fx=o,t.fz=l,t.rx=-l,t.rz=o,t}};function gg(i,e,t,n,s){let r=Math.abs(t);switch(i){case"city":return r<s+3.05?-.06:.14;case"sakura":return r<s+2.65?-.06:.12+Rt(45,190,r)*16*(.45+.55*Ti(e/160+(t>0?50:0),3));case"coast":return t>0?r<s+.9?-.06:-.15+Rt(s+1.5,80,r)*24*(.5+.5*Ti(e/170,5))+Rt(80,200,r)*30:r<s+1.5?-.06:r<s+1.95?-.04:hS-Math.min(r-(s+2),40)*.13-n;case"mountain":{if(t>0){if(r<s+.5)return-.06;if(r<s+1)return-.32;let l=8+6*Ti(e/140,61),a=r-(s+1);return a<l?a:Math.min(l+(a-l)*.55,70)}if(r<s+1.2)return-.06;let o=r-(s+1.2);return o<32?-o*1.1:-35.2+Rt(105,230,r)*95*(.6+.4*Ti(e/220,67))}case"snow":return r<s+.15?-.06:r<s+.7?-.06+(r-s-.15)/.55*1.36:r<s+1.5?1.3:r<s+2.65?pt(1.3,.55,(r-s-1.5)/1.15):r<125?.55+.25*(Ti(e/40+(t>0?3:0),71)-.5):.55+Rt(125,210,r)*40*(.45+.55*Ti(e/230+(t>0?11:0),73));case"country":default:return r<s+2?-.08:r<s+2.6?-.08-(r-s-2)*.62:r<135?-.45:-.45+Rt(140,215,r)*7*(.4+.6*Ti(e/210+(t>0?9:0),7))}}function _s(i,e,t,n){let s=cr(i),r=gg(s.a,i,e,t,n),o=s.t;e<0&&o>0&&(s.b==="coast"?o=Rt(.25,.9,o):s.a==="coast"&&(o=Rt(.1,.75,o)));let l=s.t>0?pt(r,gg(s.b,i,e,t,n),o):r;xh=0;let a=Bi(i);if(a){let M=Math.abs(i-a.s);if(M>=36)return l;let c=M<29?pS(M):pt(.35,l,Rt(29,36,M));return Math.abs(e)<n+3.2&&(c=Math.min(c,-.08)),c}let u=Oi(i);if(!u)return l;let h=i-u.s,p=Math.abs(h);if(p>=2*rn)return l;let m=Math.abs(e),x=bh(h,e),y;return p<vn?y=m<=n+1.46?-.25:Math.max(l,x):y=Math.max(l,Math.min(x,m<n+1?-.06:m-(n+1))),xh=Math.max(0,y-l),y}function _g(i){let e=Bi(i);return e?1-Rt(27,34,Math.abs(i-e.s)):0}var Pl=new H,Mh=new H,yS=[1,1,1],_S=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1],Mg=(()=>{let i=Math.tan(Math.PI/8),e=[[1,-i],[1,i],[i,1],[-i,1],[-1,i],[-1,-i],[-i,-1],[i,-1]],t=[];for(let n=1;n<7;n++)t.push(...e[0],...e[n],...e[n+1]);return t})(),Sg=(()=>{let i=[],e=[];for(let t=0;t<6;t++){let n=Math.PI/3*t-Math.PI/6,s=2/Math.sqrt(3);i.push([Math.cos(n)*s,Math.sin(n)*s])}for(let t=1;t<5;t++)e.push(...i[0],...i[t],...i[t+1]);return e})(),Kt=class{constructor({uv:e=!1,color:t=!0,ao:n=!1,lit:s=!1,off:r=!1,idx:o=!1}={}){this.hasUV=e,this.hasColor=t,this.hasAO=n,this.hasLit=s,this.hasOff=r,this.litV=0,this.aoY0=NaN,this.noShadow=!1,this.hasIdx=o,this.I=null,this.ni=0,this.icap=0,this.n=0,this.cap=0,this.P=null,this.N=null,this.U=null,this.Cl=null,this.A=null,this.Lt=null,this.O=null,this.offX=0,this.offY=0,this.bb=[1/0,1/0,1/0,-1/0,-1/0,-1/0],this.m=new Qe,this.nm=new _t,this.e=this.m.elements,this.ne=this.nm.elements}grow(e){let t=Math.max(this.cap*2,e,512),n=this.n,s=new Float32Array(t*3);this.P&&s.set(this.P.subarray(0,n*3)),this.P=s;let r=new Int8Array(t*3);if(this.N&&r.set(this.N.subarray(0,n*3)),this.N=r,this.hasUV){let o=new Float32Array(t*2);this.U&&o.set(this.U.subarray(0,n*2)),this.U=o}if(this.hasColor){let o=new Uint8Array(t*3);this.Cl&&o.set(this.Cl.subarray(0,n*3)),this.Cl=o}if(this.hasAO){let o=new Uint8Array(t);this.A&&o.set(this.A.subarray(0,n)),this.A=o}if(this.hasLit){let o=new Uint8Array(t);this.Lt&&o.set(this.Lt.subarray(0,n)),this.Lt=o}if(this.hasOff){let o=new Float32Array(t*2);this.O&&o.set(this.O.subarray(0,n*2)),this.O=o}this.cap=t}growI(e){let t=Math.max(this.icap*2,e,1024),n=new Uint32Array(t);this.I&&n.set(this.I.subarray(0,this.ni)),this.I=n,this.icap=t}get count(){return this.n}setM(e){return this.m.copy(e),this.nm.getNormalMatrix(e),this.aoY0=e.groundY??NaN,this}aoByte(e){let t=e-this.aoY0;return t===t?255-(t<=0?0:t>=2.55?255:Math.round(t*100)):0}vtx(e,t,n,s,r,o,l,a,u){this.n>=this.cap&&this.grow(this.n+1);let h=this.e,p=this.ne,m=this.n*3,x=this.P,y=this.bb,M=h[0]*e+h[4]*t+h[8]*n+h[12],c=h[1]*e+h[5]*t+h[9]*n+h[13],f=h[2]*e+h[6]*t+h[10]*n+h[14];x[m]=M,x[m+1]=c,x[m+2]=f,M<y[0]&&(y[0]=M),c<y[1]&&(y[1]=c),f<y[2]&&(y[2]=f),M>y[3]&&(y[3]=M),c>y[4]&&(y[4]=c),f>y[5]&&(y[5]=f);let d=p[0]*s+p[3]*r+p[6]*o,g=p[1]*s+p[4]*r+p[7]*o,v=p[2]*s+p[5]*r+p[8]*o,b=127/(Math.sqrt(d*d+g*g+v*v)||1);if(this.N[m]=Math.round(d*b),this.N[m+1]=Math.round(g*b),this.N[m+2]=Math.round(v*b),this.hasUV&&(this.U[this.n*2]=l,this.U[this.n*2+1]=a),this.hasAO&&(this.A[this.n]=this.noShadow?1:this.aoByte(c)),this.hasLit&&(this.Lt[this.n]=this.litV),this.hasOff&&(this.O[this.n*2]=this.offX,this.O[this.n*2+1]=this.offY),this.hasColor){let T=u||yS,w=this.Cl;w[m]=T[0]>=1?255:T[0]<=0?0:T[0]*255+.5,w[m+1]=T[1]>=1?255:T[1]<=0?0:T[1]*255+.5,w[m+2]=T[2]>=1?255:T[2]<=0?0:T[2]*255+.5}this.n++}quad(e,t,n,s,r,o){Pl.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Mh.set(s[0]-e[0],s[1]-e[1],s[2]-e[2]),Mh.lengthSq()<1e-12&&Mh.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Pl.cross(Mh).normalize();let l=Pl.x,a=Pl.y,u=Pl.z,h=o?o.u0:0,p=o?o.u1:1,m=o?o.v0:0,x=o?o.v1:1;this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(t[0],t[1],t[2],l,a,u,p,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(e[0],e[1],e[2],l,a,u,h,m,r),this.vtx(n[0],n[1],n[2],l,a,u,p,x,r),this.vtx(s[0],s[1],s[2],l,a,u,h,x,r)}box(e,t,n,s,r,o,l,a=null,u=null){let h=a||{},p=u||{};this.quad([s,t,n],[e,t,n],[e,r,n],[s,r,n],p.nz||l,h.nz),this.quad([e,t,o],[s,t,o],[s,r,o],[e,r,o],p.pz||l,h.pz),this.quad([e,t,n],[e,t,o],[e,r,o],[e,r,n],p.nx||l,h.nx),this.quad([s,t,o],[s,t,n],[s,r,n],[s,r,o],p.px||l,h.px),this.quad([e,r,o],[s,r,o],[s,r,n],[e,r,n],p.py||l,h.py),u&&u.noBottom||this.quad([e,t,n],[s,t,n],[s,t,o],[e,t,o],p.ny||l,h.ny)}cyl(e,t,n,s,r,o,l,a,u=!0){let h=(s-r)/o;for(let p=0;p<l;p++){let m=p/l*Math.PI*2,x=(p+1)/l*Math.PI*2,y=Math.cos(m),M=Math.sin(m),c=Math.cos(x),f=Math.sin(x),d=[e+y*s,t,n+M*s],g=[e+c*s,t,n+f*s],v=[e+c*r,t+o,n+f*r],b=[e+y*r,t+o,n+M*r];this.vtx(d[0],d[1],d[2],y,h,M,0,0,a),this.vtx(b[0],b[1],b[2],y,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(d[0],d[1],d[2],y,h,M,0,0,a),this.vtx(v[0],v[1],v[2],c,h,f,0,0,a),this.vtx(g[0],g[1],g[2],c,h,f,0,0,a),u&&r>.001&&(this.vtx(e,t+o,n,0,1,0,0,0,a),this.vtx(v[0],v[1],v[2],0,1,0,0,0,a),this.vtx(b[0],b[1],b[2],0,1,0,0,0,a))}}rod(e,t,n,s,r,o){let l=t[0]-e[0],a=t[1]-e[1],u=t[2]-e[2],h=Math.hypot(l,a,u);l/=h,a/=h,u/=h;let p=0,m=1,x=0;Math.abs(a)>.99&&(p=1,m=0);let y=a*x-u*m,M=u*p-l*x,c=l*m-a*p,f=Math.hypot(y,M,c);y/=f,M/=f,c/=f;let d=M*u-c*a,g=c*l-y*u,v=y*a-M*l;for(let b=0;b<r;b++){let T=b/r*Math.PI*2,w=(b+1)/r*Math.PI*2,_=Math.cos(T),S=Math.sin(T),E=Math.cos(w),R=Math.sin(w),C=y*_+d*S,I=M*_+g*S,A=c*_+v*S,L=y*E+d*R,D=M*E+g*R,O=c*E+v*R,z=[e[0]+C*n,e[1]+I*n,e[2]+A*n],F=[e[0]+L*n,e[1]+D*n,e[2]+O*n],V=[t[0]+L*s,t[1]+D*s,t[2]+O*s],k=[t[0]+C*s,t[1]+I*s,t[2]+A*s];this.vtx(z[0],z[1],z[2],C,I,A,0,0,o),this.vtx(F[0],F[1],F[2],L,D,O,0,0,o),this.vtx(V[0],V[1],V[2],L,D,O,0,0,o),this.vtx(z[0],z[1],z[2],C,I,A,0,0,o),this.vtx(V[0],V[1],V[2],L,D,O,0,0,o),this.vtx(k[0],k[1],k[2],C,I,A,0,0,o)}return h}blob(e,t,n,s,r,o,l=0,a=1){let u=bg[l%bg.length],h=u.attributes.position.array,p=u.attributes.normal.array,m=u.userData.disp;for(let x=0;x<h.length;x+=3){let y=1+m[x/3],M=Math.max(0,Math.min(1,p[x+1]*.5+.5)),c=[o[0]+(r[0]-o[0])*M,o[1]+(r[1]-o[1])*M,o[2]+(r[2]-o[2])*M];this.vtx(e+h[x]*s*y,t+h[x+1]*s*y*a,n+h[x+2]*s*y,p[x],p[x+1],p[x+2],0,0,c)}}wire(e,t,n,s,r,o=10){let l=e;this.noShadow=!0;for(let a=1;a<=o;a++){let u=a/o,h=[e[0]+(t[0]-e[0])*u,e[1]+(t[1]-e[1])*u-n*4*u*(1-u),e[2]+(t[2]-e[2])*u];this.rod(l,h,s,s,3,r),l=h}this.noShadow=!1}tube(e,t,n,s,r=null,o=0){let l=e.length,a=this.n,u=n+1,h=0,p=0,m=0,x=o;for(let c=0;c<l;c++){let f=e[c>0?c-1:0],d=e[c<l-1?c+1:l-1],g=d[0]-f[0],v=d[1]-f[1],b=d[2]-f[2],T=Math.hypot(g,v,b)||1;if(g/=T,v/=T,b/=T,c===0){let L=r||(Math.abs(v)<.9?[0,1,0]:[1,0,0]);h=L[0],p=L[1],m=L[2]}else x+=Math.hypot(e[c][0]-e[c-1][0],e[c][1]-e[c-1][1],e[c][2]-e[c-1][2]);let w=h*g+p*v+m*b;h-=w*g,p-=w*v,m-=w*b;let _=Math.hypot(h,p,m);_<1e-4&&(h=Math.abs(g)<.9?0:1,p=Math.abs(g)<.9?1:0,m=0,w=h*g+p*v+m*b,h-=w*g,p-=w*v,m-=w*b,_=Math.hypot(h,p,m)),h/=_,p/=_,m/=_;let S=v*m-b*p,E=b*h-g*m,R=g*p-v*h,C=(t[c<l-1?c+1:l-1]-t[c>0?c-1:0])/(T||1),I=e[c],A=t[c];for(let L=0;L<=n;L++){let D=L/n*Math.PI*2,O=Math.cos(D),z=Math.sin(D),F=h*O+S*z,V=p*O+E*z,k=m*O+R*z;this.vtx(I[0]+F*A,I[1]+V*A,I[2]+k*A,F-C*g,V-C*v,k-C*b,D,x,s)}}let y=(l-1)*n*6;this.ni+y>this.icap&&this.growI(this.ni+y);let M=this.I;for(let c=0;c<l-1;c++)for(let f=0;f<n;f++){let d=a+c*u+f,g=d+1,v=d+u,b=v+1,T=this.ni;M[T]=d,M[T+1]=g,M[T+2]=b,M[T+3]=d,M[T+4]=b,M[T+5]=v,this.ni+=6}return x}card(e,t,n,s){let r=[[0,n.u0,n.v0],[1,n.u1,n.v0],[2,n.u1,n.v1],[0,n.u0,n.v0],[2,n.u1,n.v1],[3,n.u0,n.v1]];for(let[o,l,a]of r)this.vtx(e[o][0],e[o][1],e[o][2],t[o][0],t[o][1],t[o][2],l,a,s[o])}bill(e,t,n,s,r,o,l,a,u,h,p=_S,m=1){let x=(u.u1-u.u0)*.5,y=(u.v1-u.v0)*.5,M=u.u0+x,c=u.v0+y;for(let f=0;f<p.length;f+=2){let d=p[f],g=p[f+1];this.offX=d*l,this.offY=g*a,this.vtx(e,t,n,s,r,o,M+d*x*m,c+g*y*m,h)}this.offX=this.offY=0}toArrays(){let e=this.n;return{n:e,P:this.P?this.P.slice(0,e*3):new Float32Array(0),N:this.N?this.N.slice(0,e*3):new Int8Array(0),C:this.hasColor&&this.Cl?this.Cl.slice(0,e*3):null,U:this.hasUV&&this.U?this.U.slice(0,e*2):null,O:this.hasOff&&this.O?this.O.slice(0,e*2):null,I:this.hasIdx&&this.I?this.I.slice(0,this.ni):null}}stamp(e,t){if(!e||!e.n)return;this.setM(t),this.n+e.n>this.cap&&this.grow(this.n+e.n);let n=this.e,s=this.ne,r=e.P,o=e.N,l=e.C,a=e.U,u=this.n,h=this.bb;for(let p=0;p<e.n*3;p+=3){let m=r[p],x=r[p+1],y=r[p+2],M=u*3+p,c=n[0]*m+n[4]*x+n[8]*y+n[12],f=n[1]*m+n[5]*x+n[9]*y+n[13],d=n[2]*m+n[6]*x+n[10]*y+n[14];this.P[M]=c,this.P[M+1]=f,this.P[M+2]=d,this.hasAO&&(this.A[u+p/3]=this.aoByte(f)),c<h[0]&&(h[0]=c),f<h[1]&&(h[1]=f),d<h[2]&&(h[2]=d),c>h[3]&&(h[3]=c),f>h[4]&&(h[4]=f),d>h[5]&&(h[5]=d);let g=o[p],v=o[p+1],b=o[p+2],T=s[0]*g+s[3]*v+s[6]*b,w=s[1]*g+s[4]*v+s[7]*b,_=s[2]*g+s[5]*v+s[8]*b,S=127/(Math.sqrt(T*T+w*w+_*_)||1);this.N[M]=Math.round(T*S),this.N[M+1]=Math.round(w*S),this.N[M+2]=Math.round(_*S)}if(this.hasColor&&(l?this.Cl.set(l,u*3):this.Cl.fill(255,u*3,(u+e.n)*3)),this.hasUV&&(a?this.U.set(a,u*2):this.U.fill(0,u*2,(u+e.n)*2)),this.hasIdx&&e.I){let p=e.I,m=this.ni;m+p.length>this.icap&&this.growI(m+p.length);for(let x=0;x<p.length;x++)this.I[m+x]=p[x]+u;this.ni+=p.length}if(this.hasOff){let p=Math.hypot(n[0],n[1],n[2]),m=e.O;if(m)for(let x=0;x<e.n*2;x++)this.O[u*2+x]=m[x]*p;else this.O.fill(0,u*2,(u+e.n)*2)}this.n+=e.n}build(){if(!this.n)return null;let e=new bt,t=this.n,n=this.bb;if(e.setAttribute("position",new wt(this.P.slice(0,t*3),3)),e.setAttribute("normal",new wt(this.N.slice(0,t*3),3,!0)),this.hasUV&&e.setAttribute("uv",new wt(this.U.slice(0,t*2),2)),this.hasAO&&e.setAttribute("aoD",new wt(this.A.slice(0,t),1,!0)),this.hasLit&&e.setAttribute("aLit",new wt(this.Lt.slice(0,t),1,!0)),this.hasOff&&e.setAttribute("aOff",new wt(this.O.slice(0,t*2),2)),this.hasColor&&e.setAttribute("color",new wt(this.Cl.slice(0,t*3),3,!0)),this.hasIdx&&e.setIndex(new wt(t>65535?this.I.slice(0,this.ni):new Uint16Array(this.I.subarray(0,this.ni)),1)),e.boundingBox=new fi(new H(n[0],n[1],n[2]),new H(n[3],n[4],n[5])),this.hasOff){let s=0;for(let r=0;r<t*2;r++){let o=Math.abs(this.O[r]);o>s&&(s=o)}e.boundingBox.expandByScalar(s*Math.SQRT2)}return e.boundingSphere=e.boundingBox.getBoundingSphere(new di),e}},bg=[0,1,2,3].map(i=>{let e=new nl(1,1),t=e.attributes.position.array,n=new Float32Array(t.length/3),s=(r,o,l)=>Math.sin(r*3.1+i)*Math.cos(o*2.7+i*2)*Math.sin(l*3.3+i*3);for(let r=0;r<t.length;r+=3)n[r/3]=s(t[r],t[r+1],t[r+2])*.14;return e.userData.disp=n,e});gt.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;var bS=gt.shadowmap_pars_fragment;function j0(i){let e=s=>`texture( shadowMap, vec3( shadowCoord.xy${s}, shadowCoord.z ) )`,t=`0.25 * ( ${e(" - so")} + ${e(" + so")} + ${e(" + vec2( so.x, -so.y )")} + ${e(" + vec2( -so.x, so.y )")} )`,n=i>=4?`vec2 so = texelSize * 0.5;
shadow = ${t};`:i===2?`shadow = ${e("")};
if ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${t}; }`:`shadow = ${e("")};`;gt.shadowmap_pars_fragment=bS.replace(/float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/,n)}j0(1);function Cg(i,e){let t=i<e?`#define GRAZE_FADE
#define GRAZE_LO ${i.toFixed(3)}
#define GRAZE_HI ${e.toFixed(3)}
`:"";gt.shadowmap_pars_fragment=t+gt.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/,"")}gt.lights_fragment_begin=gt.lights_fragment_begin.replace(/#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/,`
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
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);var jn=4200,Pe={uSkyHor:{value:new he(.7,.8,.9)},uSkyZen:{value:new he(.2,.4,.9)},uTime:{value:0},uNight:{value:0},uWet:{value:0},uSakWet:{value:0},uLightsOn:{value:1},uBacklit:{value:0},uCloudSh:{value:0},uOrigin:{value:new Le},uSunDir:{value:new H(0,1,0)},uSunCol:{value:new he(1,1,1)},uTuftV:{value:new xt(.167,.333,.164,.165)},uGhShade:{value:new H(.3,.85,1.7)},uGhTint:{value:new H(1,1,1)},uTpK:{value:0},uTpD:{value:new he},uTpS:{value:new he},uTpM:{value:new he},uTpL:{value:new he},uTpFL:{value:new he},uTpFS:{value:new he},uBkK:{value:0},uBkS:{value:new he},uBkM:{value:new he},uBkL:{value:new he},uBkS2:{value:new he},uBkM2:{value:new he},uBkL2:{value:new he},uBlShade:{value:new H(7.5,3,2.3)},uTunA:{value:new H(0,-1e4,0)},uTunB:{value:new H(0,-1e4,0)},uTunR:{value:4.6},uCarPos:{value:new H},uCarFwd:{value:new H(0,0,1)},uHead:{value:0},uWind:{value:1},uNoiseTex:{value:MS()},uCloudTex:{value:null},uCloudOrg:{value:new Le},uReflTex:{value:null},uReflOn:{value:0},uReflRes:{value:new Le(1280,720)},uHorizon:{value:.6},uReflK:{value:.3}};function Pg(i){let e=new ts(new Uint8Array(i),i.length,1,ar);return e.minFilter=e.magFilter=wn,e.generateMipmaps=!1,e.needsUpdate=!0,e}var pi=Pg([16,16,16,70,200,255,255,255]),Il=Pg([28,40,70,130,200,240,255,255]);function MS(){let e=new Uint8Array(262144),t=2654435769,n=()=>{t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296};for(let r=0;r<e.length;r++)e[r]=Math.floor(n()*256);let s=new ts(e,256,256,$n);return s.wrapS=s.wrapT=Ds,s.magFilter=Ut,s.minFilter=Pn,s.generateMipmaps=!0,s.colorSpace=ii,s.needsUpdate=!0,s}var Ri=`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`,Sh=1600,K0=256,SS=`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1/Sh).toFixed(8)} + 0.5).r * uCloudSh; }`,wS=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`,Ig=`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1/Sh).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`,Lg=`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`,TS=`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`,ES=`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`,wh=new er;wh.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD;`).replace("#include <project_vertex>",`#include <project_vertex>
if (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)};wh.customProgramCacheKey=()=>"propdepth";function Dg(){let i=new qt(K0,K0,{format:ar,type:Kn,depthBuffer:!1,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),e=new mt({uniforms:{uCenter:{value:new Le},uOrigin:Pe.uOrigin,uTime:Pe.uTime,uNoiseTex:Pe.uNoiseTex},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${Sh.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,depthTest:!1,depthWrite:!1}),t=new dt(new nn(2,2),e),n=new Ns;t.frustumCulled=!1,Pe.uCloudTex.value=i.texture,Pe.uCloudTex.rt=i;let s=Sh/K0;return{update(r,o,l,a,u){let h=Math.round((o+a)/s)*s-a,p=Math.round((l+u)/s)*s-u;e.uniforms.uCenter.value.set(h,p),Pe.uCloudOrg.value.set(h,p);let m=r.getRenderTarget();r.setRenderTarget(i),r.render(t,n),r.setRenderTarget(m)}}}function bs(i,e="",t="",n=!0){i.uniforms.uOrigin=Pe.uOrigin,i.uniforms.uCloudSh=Pe.uCloudSh,i.uniforms.uTime=Pe.uTime,i.uniforms.uNoiseTex=Pe.uNoiseTex,i.uniforms.uCloudTex=Pe.uCloudTex,i.uniforms.uCloudOrg=Pe.uCloudOrg;for(let s of["uTunA","uTunB","uTunR","uCarPos","uCarFwd","uHead"])i.uniforms[s]=Pe[s];i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(n?Ig:"")).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`+(n?`
vCloud = cloudShadowV(vWP.xz);`:"")),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWP;${n?`
varying float vCloud;`:""}
${Ri}${SS}${TS}${e}`).replace("#include <opaque_fragment>",`${n?Lg:wS}${t}${ES}
#include <opaque_fragment>`)}var AS=`
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
#ifdef F_PAINT
// \u8349\u539F: the painted meadow (painted.js loadFieldTexture), the country painting's grass seen from above, read once per
// pixel. It runs along the road (s) and across it (u), its strokes 1.75\xD7 longer along the road (from the chase camera
// they stand up more, like the painting's blades). Its coordinates and their screen footprint are taken at the top of
// groundAlbedo, in uniform control flow, so the mip and anisotropic filtering stay right inside the branches. The coast's
// green slope and the cherry avenue's lawns take the same painting in their own paintings' colours
uniform sampler2D uFieldTex; uniform vec2 uFieldK; uniform vec3 uFieldC, uFieldCo, uFieldSa, uFieldM; // 1 / the tile (m) across, along; tints: the country's, the coast's, the avenue's; its average colour
vec2 fUV, fDX, fDY; float fPU;
// the painting at k\xD7 its size (k: a tile's length along the road, 21 m / k, must divide S_WRAP)
vec3 fieldTex(float k){ return textureGrad(uFieldTex, fUV * k, fDX * k, fDY * k).rgb; }
#endif
#ifdef Z_SAKURA
// (only in the variants with the avenue: it needs petalsAt, and nothing else calls it)
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
#ifdef F_PAINT
  // the lawns: the painted meadow's strokes at 1.75\xD7 and at 60% of their contrast (a mown lawn's finer, even grass) in
  // the sakura painting's light, warm green, a little lighter and yellower here and there (one broad noise read)
  vec3 g = mix(uFieldM, fieldTex(1.75), 0.6) * uFieldSa * (1.0 + 0.3 * (vnoise(p * 0.04 + 2.3) - 0.5) * vec3(1.4, 1.0, 0.3));
#else
  // (the painting's lawns are a light, warm green in the sun: (167, 193, 70) against our (117, 172, 47))
  vec3 g = grassCol(p, L(vec3(0.44, 0.64, 0.27)), L(vec3(0.74, 0.84, 0.38)));
#endif
  // a few petals on the lawn, most under the avenue's trees (the painting's lawns are a clean green: they used to be
  // splashed with pink blotches)
  return mix(g, PETAL, petalsAt(p, 0.12 * (1.0 - 0.8 * smoothstep(rw + 5.0, rw + 12.0, abs(u)))));
}
#endif
vec3 coastGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
#ifdef F_PAINT
  if (u > 0.0) {
    // the green slope above the road: the painted meadow in the coast painting's colours, broad patches lighter and
    // yellower or a deeper green (one noise read; the folds' shade comes from the light), and along the road's edge a
    // strip of bare soil, then the verge's long grass in its own shade (its clump cards stand on it: chunks.js)
    float tone = 0.55 * (vnoise(p * 0.035 + 9.1) - 0.5);
    vec3 g = fieldTex(1.25) * uFieldCo * (1.0 + tone * vec3(1.8, 1.0, 0.2));
    g *= mix(0.5, 1.0, smoothstep(rw + 0.35, rw + 2.6, a));
    return mix(L(vec3(0.42, 0.34, 0.24)) * (0.85 + 0.3 * vnoise(p * vec2(1.5, 9.0))), g, smoothstep(rw + 0.12, rw + 0.32, a));
  }
#else
  if (u > 0.0) return grassCol(p, L(vec3(0.31, 0.60, 0.25)), L(vec3(0.52, 0.79, 0.32)));
#endif
  if (a < rw + 1.45) return L(vec3(0.73, 0.72, 0.69)) * (0.9 + 0.1*fbm2(p));
  // the sea wall: its top a warm sand-coloured concrete, as in the reference art; its face grey, dark and wet low down
  if (a < rw + 1.97) return L(vec3(0.86, 0.76, 0.6)) * (0.86 + 0.14*vnoise(p*vec2(0.4, 5.0)));
  if (a < rw + 2.08) return L(vec3(0.70, 0.70, 0.68)) * (0.82 + 0.12*vnoise(p*vec2(0.4, 5.0))) * (0.45 + 0.55 * smoothstep(0.2, 1.4, vWY));
  vec3 sand = mix(L(vec3(0.94, 0.87, 0.71)), L(vec3(0.85, 0.77, 0.62)), fbm2(p*0.2));
  return mix(sand, L(vec3(0.6, 0.55, 0.46)), 0.6*(1.0 - smoothstep(0.0, 0.9, vWY)));
}
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
    return fieldTex(1.0) * uFieldC * (1.0 + tone * vec3(1.8, 1.0, 0.2));
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
`,RS=`
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
#endif`,CS=`
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
}`,Ng={city:"Z_CITY",sakura:"Z_SAKURA",coast:"Z_COAST",country:"Z_COUNTRY",mountain:"Z_MTN",snow:"Z_SNOW"},mi={tex:null,uFieldK:{value:new Le(1/12,1/21)},uFieldC:{value:new H(1,1,1)},uFieldCo:{value:new H(1,1,1)},uFieldSa:{value:new H(1,1,1)},uFieldM:{value:new H(.16,.32,.05)}};function Fg(i){let e={};for(let t of i)e[Ng[t]]="";return(i.includes("city")||i.includes("country"))&&(e.K_XING=""),(i.includes("country")||i.includes("sakura"))&&(e.K_RIVER=""),(i.includes("mountain")||i.includes("coast"))&&(e.K_RIDGE=""),mi.tex&&(i.includes("country")||i.includes("coast")||i.includes("sakura"))&&(e.F_PAINT=""),e}var wg=new Map;function Ll(i){let e=[...new Set(i)].sort().join("+"),t=wg.get(e);return t||(t=Ug(Fg(e.split("+")),e),wg.set(e,t)),t}function Ug(i=Fg(Object.keys(Ng)),e="all"){let t=new sn({color:16777215,gradientMap:pi});t.defines=i;let n=i.F_PAINT!==void 0;return t.onBeforeCompile=s=>{s.uniforms.uSkyHor=Pe.uSkyHor,s.uniforms.uSkyZen=Pe.uSkyZen,s.uniforms.uWet=Pe.uWet,s.uniforms.uSakWet=Pe.uSakWet,s.uniforms.uNight=Pe.uNight,s.uniforms.uSunDir=Pe.uSunDir,s.uniforms.uSunCol=Pe.uSunCol;for(let r of["uReflTex","uReflOn","uReflRes","uHorizon","uReflK"])s.uniforms[r]=Pe[r];if(n){s.uniforms.uFieldTex={value:mi.tex};for(let r of["uFieldK","uFieldC","uFieldCo","uFieldSa","uFieldM"])s.uniforms[r]=mi[r]}s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`),bs(s,`
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${AS}`,CS+RS,!1),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`)},t.customProgramCacheKey=()=>"ground-v20-"+e+(n?"-fp":""),t}function Tg(i,e,t,n,s=null){return i.onBeforeCompile=r=>{s&&s(r),bs(r),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= ${(1-t/2).toFixed(3)} + ${t.toFixed(3)} * vnoise(vWP.xz * ${e.toFixed(2)} + vWP.y * ${(e*.7).toFixed(2)});`)},i.customProgramCacheKey=()=>n,i}function Bg(i){for(let e of["uSunDir","uSunCol","uBacklit"])i.uniforms[e]=Pe[e];i.vertexShader=i.vertexShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunDir; uniform float uBacklit;`).replace("#include <fog_vertex>",`#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`),i.fragmentShader=i.fragmentShader.replace("varying float vCloud;",`varying vec2 vCloudB;
#define vCloud vCloudB.x
#define vBack vCloudB.y`).replace("#include <common>",`#include <common>
uniform vec3 uSunCol;`).replace("#include <opaque_fragment>",`outgoingLight += diffuseColor.rgb * uSunCol * vBack;
#include <opaque_fragment>`)}function PS(i){i.uniforms.uLightsOn=Pe.uLightsOn,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aLit; uniform float uLightsOn; varying float vOn;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vOn;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vOn;`)}function J0(i){i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vAoD;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`)}function Og(i,e=!1){let t=new sn({vertexColors:!0,gradientMap:Th(-.15,.3,0)});return e&&(t.defines={TP_LITE:""}),t.onBeforeCompile=n=>{for(let s of["uTpK","uTpD","uTpS","uTpM","uTpL","uTpFL","uTpFS"])n.uniforms[s]=Pe[s];n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aoD; varying float vAoD; varying vec2 vTp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAoD = aoD; vTp = uv;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTpK; uniform vec3 uTpD, uTpS, uTpM, uTpL, uTpFL, uTpFS; varying float vAoD; varying vec2 vTp;
${i}`).replace("#include <color_fragment>",`#include <color_fragment>
// painted mottling: broad soft patches and finer strokes
#ifdef TP_LITE
float tpN = vnoise(vWP.xz * 1.7 + vWP.y * 1.2), tpMot = 0.93 + 0.14 * tpN;
#else
float tpN = vnoise(vWP.xz * 1.3 + vWP.y * 0.9) * 0.55 + vnoise(vec2(vWP.x - vWP.z, vWP.y) * 4.1) * 0.45, tpMot = 0.92 + 0.16 * tpN;
#endif
// how high the water reaches up the block: a low swell, surging up as each wave hits it (as the spray bursts), its edge
// ragged; below it white foam (lace: thinning upwards), above it the wet band it leaves (darker and bluer, drying upwards)
float tpP2 = (shorePhase(vTp.y, 4.0) - 0.04) * 2.0, tpPh = fract(tpP2), tpHit = smoothstep(0.0, 0.08, tpPh) * (1.0 - smoothstep(0.12, 0.6, tpPh)) * (1.0 - 0.45 * mod(floor(tpP2), 2.0));
float tpLc = vnoise(vec2(vWP.x + vWP.z, vWP.y * 0.6) * 6.0 + vec2(0.0, uTime * 0.5));
float tpW = 0.08 + 0.06 * sin(uTime * 1.3 + vWP.x * 0.7 + vWP.z * 0.5) + 0.45 * tpHit;
float tpWet = 1.0 - smoothstep(0.35, 0.95, vWP.y - 0.3 * tpN);
float tpFoam = smoothstep(-0.06, 0.06, tpW - vWP.y + 0.35 * (tpLc - 0.5) - 0.25 * max(vWP.y - 0.05, 0.0));
diffuseColor.rgb *= tpMot * mix(vec3(1.0), vec3(0.6, 0.66, 0.76), tpWet);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93), tpFoam);`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ // the creases where the legs meet in soft shade, a little darker towards the water (vAoD: 255 at 0.7 m under it \u2026 0 from
  // 1.85 m over it); not the foam
  float tpAO = mix(0.55, 1.0, smoothstep(0.24, 0.6, vTp.x)) * mix(0.8, 1.0, smoothstep(0.0, 1.0, (1.0 - vAoD) * 2.55));
  tpAO = mix(tpAO, 1.0, tpFoam * 0.7);
  vec3 tpDD = reflectedLight.directDiffuse * mix(1.0, tpAO, 0.5), tpID = reflectedLight.indirectDiffuse * tpAO;
  #if NUM_DIR_LIGHTS > 0
  if (uTpK > 0.001) {
    vec3 tpW3 = vec3(0.2126, 0.7152, 0.0722);
    float lf = clamp(dot(reflectedLight.directDiffuse, tpW3) / max(dot(directionalLights[0].color * BRDF_Lambert(diffuseColor.rgb), tpW3), 1e-6), 0.0, 1.0);
    vec3 pc = (lf < 0.5 ? mix(uTpS, uTpM, lf * 2.0) : mix(uTpM, uTpL, lf * 2.0 - 1.0)) * tpMot;
    pc = mix(uTpD, pc, tpAO * (1.0 - 0.55 * tpWet));
    pc = mix(pc, mix(uTpFS, uTpFL, lf), tpFoam);
    tpDD = mix(tpDD, pc, uTpK); tpID *= 1.0 - uTpK;
  }
  #endif
  reflectedLight.directDiffuse = tpDD; reflectedLight.indirectDiffuse = tpID; }`),bs(n)},t.customProgramCacheKey=()=>e?"tetra-v1-lite":"tetra-v1",t}var IS="#7a6556",LS="#6a5444",Eg=i=>{let e=new he(i);return`vec3(${e.r.toFixed(4)}, ${e.g.toFixed(4)}, ${e.b.toFixed(4)})`};function kg(i=!1){let e=new sn({vertexColors:!0,gradientMap:Th(-.35,.42,0)});return i&&(e.defines={BK_LITE:""}),e.onBeforeCompile=t=>{for(let n of["uBkK","uBkS","uBkM","uBkL","uBkS2","uBkM2","uBkL2"])t.uniforms[n]=Pe[n];J0(t),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vBk;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBk = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uBkK; uniform vec3 uBkS, uBkM, uBkL, uBkS2, uBkM2, uBkL2; varying vec2 vBk;`).replace("#include <color_fragment>",`
// the bark: furrows wandering up it (9 round any tube), a soft mottling, fading to their average once under a pixel or two
float bkW = vnoise(vec2(vBk.y * 0.9, 7.0 + 5.0 * vColor.r)), bkPh = vBk.x * 9.0 + bkW * 5.0 + sin(vBk.x * 2.0) * 1.5;
float bkFw = fwidth(bkPh), bkFur = (0.5 + 0.5 * sin(bkPh)) * (1.0 - smoothstep(0.6, 1.6, bkFw));
float bkMot = vnoise(vec2(cos(vBk.x), sin(vBk.x)) * 2.2 + vec2(vBk.y * 1.6, -vBk.y * 0.9));
float bk = 0.88 + 0.24 * bkMot - 0.3 * smoothstep(0.55, 0.95, bkFur);
#ifndef BK_LITE
{ // lenticels (\u76AE\u76EE): a few short horizontal marks, lighter (7 cells round, 11 cm apart up the trunk)
  vec2 lq = vec2(vBk.x * 1.1141, vBk.y * 9.0), li = floor(lq), lf = fract(lq) - 0.5;
  float on = step(0.66, hash12(li + 17.0 * vColor.r)) * (1.0 - smoothstep(0.05, 0.11, abs(lf.y))) * (1.0 - smoothstep(0.22, 0.4, abs(lf.x)));
  bk = mix(bk, 1.3, on * 0.55 * (1.0 - smoothstep(0.2, 0.5, fwidth(lq.y)))); }
#endif
diffuseColor.rgb = mix(${Eg(IS)}, ${Eg(LS)}, vColor.r) * vColor.g * bk;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
#if NUM_DIR_LIGHTS > 0
if (uBkK > 0.001) { // a bright day: the painting's tones by how much sun reaches here (the soft ramp and the shadows)
  vec3 bkW3 = vec3(0.2126, 0.7152, 0.0722);
  float lf = clamp(dot(reflectedLight.directDiffuse, bkW3) / max(dot(directionalLights[0].color * BRDF_Lambert(diffuseColor.rgb), bkW3), 1e-6), 0.0, 1.0);
  // in a crown's shadow a painter still paints the trunk's body and a softer lit edge: the shadow takes at most 28% of the
  // light the ramp gives (the ramp without the shadow: the gradient map read again)
  lf = max(lf, 0.72 * texture2D(gradientMap, vec2(dot(normal, directionalLights[0].direction) * 0.5 + 0.5, 0.0)).r);
  vec3 pc = mix(mix(uBkS, uBkS2, vColor.r), mix(uBkM, uBkM2, vColor.r), smoothstep(0.0, 0.35, lf));
  pc = mix(pc, mix(uBkL, uBkL2, vColor.r), smoothstep(0.55, 0.92, lf)) * bk * vColor.g;
  reflectedLight.directDiffuse = mix(reflectedLight.directDiffuse, pc, uBkK); reflectedLight.indirectDiffuse *= 1.0 - uBkK;
}
#endif`),bs(t)},e.customProgramCacheKey=()=>i?"bark-v1-lite":"bark-v1",e}function Q0(i){return i.onBeforeCompile=e=>bs(e),i.customProgramCacheKey=()=>"cs",i}var DS="uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;",NS=(i,e,t="")=>`
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
}`;function ed(i,e,t=.06,n="gloss",s=null){return i.onBeforeCompile=r=>{for(let o of["uSkyHor","uSkyZen","uSunDir","uSunCol","uNight"])r.uniforms[o]=Pe[o];s&&Object.assign(r.uniforms,s.uniforms),bs(r,DS+(s?s.pars:""),NS(e,t,s?s.apply:""))},i.customProgramCacheKey=()=>n+e,i}var hr=48;function zg(i,e){let t=new sn({color:16777215,gradientMap:Il}),n=!!mi.tex;return t.onBeforeCompile=s=>{Object.assign(s.uniforms,e,i);for(let r of["uOrigin","uCloudSh","uTime","uNoiseTex","uCloudTex","uCloudOrg","uWind"])s.uniforms[r]=Pe[r];n&&(s.uniforms.uFieldC=mi.uFieldC,s.uniforms.uFieldM=mi.uFieldM),s.vertexShader=s.vertexShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
${Ig}
uniform vec4 uG[${hr}], uGM[${hr/4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${n?`
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
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${hr-2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
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
  float gsw = mod(gs, ${jn.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);`:`
  vec2 pid = floor(vec2(mod(gs, ${jn.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`).replace("#include <begin_vertex>","vec3 transformed = gPos;").replace("#include <project_vertex>",`#include <project_vertex>
if (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#undef USE_SHADOWMAP
#include <common>
varying vec3 vBladeCol; varying float vCloud;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vBladeCol;`).replace("#include <opaque_fragment>",`${Lg}
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>n?"grass-v5-fp":"grass-v5",t}function Ag(i,e,t=!1){i.uniforms.uPMap={value:e.map},t||(i.uniforms.uPEm={value:e.emissive}),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uPMap;${t?"":" uniform sampler2D uPEm;"}`).replace("#include <map_fragment>",`
bool pgP = vMapUv.x > 1.5;
vec4 sampledDiffuseColor;
if (pgP) sampledDiffuseColor = texture2D(uPMap, vMapUv - vec2(2.0, 0.0));
else sampledDiffuseColor = texture2D(map, vMapUv);
diffuseColor *= sampledDiffuseColor;`),t||(i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`
vec4 emissiveColor;
if (pgP) emissiveColor = texture2D(uPEm, vEmissiveMapUv - vec2(2.0, 0.0));
else emissiveColor = texture2D(emissiveMap, vEmissiveMapUv);
totalEmissiveRadiance *= emissiveColor.rgb;`))}function Hg(i,e,t){let n={};n.ground=Ug(),n.color=Tg(new sn({vertexColors:!0,gradientMap:pi}),1.6,.1,"color-v3",J0),n.atlas=new sn({vertexColors:!0,gradientMap:pi,map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.1,alphaTest:.5}),n.atlas.onBeforeCompile=a=>{J0(a),PS(a),bs(a),Ag(a,t)},n.atlas.customProgramCacheKey=()=>"atlas-v7",n.atlasDepth=new er,n.atlasDepth.onBeforeCompile=a=>Ag(a,t,!0),n.atlasDepth.customProgramCacheKey=()=>"atlasdepth-v2",n.ptex=t,n.foliage=Tg(new sn({vertexColors:!0,gradientMap:Il}),2.6,.24,"foliage-v2"),n.lamp=new mn({color:15789798}),n.sig=new mn({color:new he(.15,1.7,1.1)}),n.sodium=new mn({color:new he(5,2.3,.65)}),n.decal=new sn({vertexColors:!0,gradientMap:pi,map:i.map,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),n.decal.onBeforeCompile=a=>bs(a),n.decal.customProgramCacheKey=()=>"decal-v1",e&&(n.leaf=new sn({map:e,vertexColors:!0,gradientMap:Il,alphaTest:.42,side:yn}),n.leaf.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",gt.normal_fragment_begin.replace("gl_FrontFacing ? 1.0 : - 1.0","1.0")),bs(a),Bg(a),a.uniforms.uTuftV=Pe.uTuftV,a.uniforms.uWind=Pe.uWind,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uTuftV;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`),a.fragmentShader=a.fragmentShader.replace("#include <alphatest_fragment>",`
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`)},n.leaf.customProgramCacheKey=()=>"leaf-v5"),n.wire=new mn({color:2303020});let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(255,255,255,0.45)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,128,128);let l=new ti(s);return n.pool=new mn({map:l,color:16762746,transparent:!0,opacity:0,blending:is,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n.glowTex=l,n}function Th(i,e,t){let s=new Uint8Array(64);for(let o=0;o<64;o++){let l=(o+.5)/64*2-1,a=Math.min(1,Math.max(0,(l-i)/(e-i))),u=a*a*(3-2*a);s[o]=Math.round(255*(t+(1-t)*u))}let r=new ts(s,64,1,ar);return r.minFilter=r.magFilter=Ut,r.generateMipmaps=!1,r.needsUpdate=!0,r}var FS=Th(-.05,.5,.05),US=Th(-.5,.45,.12);function Rg(i,e){i.uniforms.uTime=Pe.uTime,i.uniforms.uWind=Pe.uWind,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aOff; uniform float uWind;`+(e?" uniform float uTime;":"")).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`),e&&(i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
if (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`))}var $0=(i,e,t)=>{let n=new he().setRGB(i/255,e/255,t/255,Gt);return`vec3(${n.r.toFixed(4)}, ${n.g.toFixed(4)}, ${n.b.toFixed(4)})`},BS=`diffuseColor.rgb *= mix(${$0(62,38,34)}, mix(${$0(205,105,150)}, ${$0(255,232,242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;function td(i,{blossom:e=!1}={}){let t=new sn({map:i,vertexColors:!0,color:e?16777215:new he().setRGB(.68,.85,.46,Gt),gradientMap:e?US:FS,alphaTest:.5,side:gs});t.shadowSide=yn,t.onBeforeCompile=s=>{bs(s),Bg(s),Rg(s,!1),s.uniforms.uGhShade=e?Pe.uBlShade:Pe.uGhShade,e||(s.uniforms.uGhTint=Pe.uGhTint),s.vertexShader=s.vertexShader.replace("#include <shadowmap_vertex>",`#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGhShade;`+(e?"":" uniform vec3 uGhTint;")).replace("#include <map_fragment>",`
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${e?BS:"diffuseColor.rgb *= gTx.b * uGhTint;"}
diffuseColor.a *= gTx.a;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`).replace("#include <aomap_fragment>",`#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`)},t.customProgramCacheKey=()=>e?"gblossom-v1":"gleaf-v1";let n=new er;return n.onBeforeCompile=s=>Rg(s,!0),n.customProgramCacheKey=()=>"gleaf-depth-v1",{mat:t,depth:n}}var OS=_e("#f2c230"),Vg=_e("#26272c");function Eh(i,e){let t=[];for(let n of[-1,1]){let s=e+n*4.9,r=i.at(s,{}),o=Bn(s,"rw"),l=n*(o+.8),a=Dt(s),u=a.city+a.sakura>.5;t.push({x:r.x+r.rx*l,z:r.z+r.rz*l,y:r.y+(u?.15:0),yaw:r.h+(n<0?0:Math.PI),side:n,rw:o})}return t}function Wg(){let i=new un,e=Q0(new sn({vertexColors:!0,gradientMap:pi})),t=new mn({color:new he(6,.45,.3)}),n=new mn({color:new he(.22,.03,.03)}),s=[0,1].map(()=>{let r=new un,o=new un;r.add(o),o.position.set(-.42,1.02,-.02);let l=new Kt,a=3.6;for(let p=0,m=0;m<a;p++,m+=.45)l.box(-Math.min(m+.45,a),-.065,-.065,-m,.065,.065,p%2?Vg:OS);l.box(0,-.09,-.07,.38,.09,.07,Vg);let u=new dt(l.build(),e);u.castShadow=!0,o.add(u);let h=[-.28,.28].map(p=>{let m=new dt(new Er(.13,18),n);return m.position.set(p,2.75,-.1),m.rotation.y=Math.PI,r.add(m),m});return i.add(r),{root:r,pivot:o,arm:u,lamps:h,L:a}});return i.visible=!1,{group:i,update(r,o,l,a,u){i.visible=!!r,r&&r.forEach((h,p)=>{let m=s[p];m.root.position.set(h.x-o.x,h.y,h.z-o.z),m.root.rotation.y=h.yaw,m.arm.scale.x=(h.rw+.25)/m.L,m.pivot.rotation.z=-l*(Math.PI/2-.06);let x=Math.floor(u*2.5)%2;m.lamps[0].material=a&&x===0?t:n,m.lamps[1].material=a&&x===1?t:n})}}}function kS(){let t=()=>{let f=document.createElement("canvas");return f.width=1024,f.height=512,f},n=t(),s=t(),r=n.getContext("2d"),o=s.getContext("2d"),l='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';o.fillStyle="#000",o.fillRect(0,0,1024,512);let a=160;r.fillStyle="#d3d7dc",r.fillRect(0,0,1024,a);for(let f=0;f<1024;f+=14)r.fillStyle="rgba(80,90,100,0.07)",r.fillRect(f,0,2,a);r.fillStyle="#9aa1a9",r.fillRect(0,0,1024,8),r.fillStyle="#5c636b",r.fillRect(0,a-14,1024,14);let u=[.1,.36,.62,.88].map(f=>f*1024),h=(f,d,g,v)=>{let b=r.createLinearGradient(f,d,f+g*.3,d+v);b.addColorStop(0,"#5d7fae"),b.addColorStop(.6,"#9db7d6"),b.addColorStop(1,"#2f3f55"),r.fillStyle=b,r.fillRect(f,d,g,v),r.fillStyle="rgba(255,255,255,0.25)",r.beginPath(),r.moveTo(f+g*.2,d),r.lineTo(f+g*.38,d),r.lineTo(f+g*.1,d+v),r.lineTo(f-g*.08,d+v),r.fill(),o.fillStyle="#ffeccc",o.fillRect(f,d,g,v)};for(let f=0;f<u.length-1;f++){let d=u[f]+40,g=u[f+1]-40,v=3,b=(g-d)/v;for(let T=0;T<v;T++)r.fillStyle="#6b737c",r.fillRect(d+T*b+2,34,b-4,58),h(d+T*b+6,38,b-12,50)}for(let f of[u[0]-70,u[3]+40])r.fillStyle="#6b737c",r.fillRect(f+2,34,28,58),h(f+5,38,22,50);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,22,60,a-36),r.fillStyle="#7b828a",r.fillRect(f-1,22,2,a-36),r.strokeStyle="#7b828a",r.lineWidth=2,r.strokeRect(f-30,22,60,a-36),h(f-24,34,20,46),h(f+4,34,20,46);r.fillStyle="#1f9a50",r.fillRect(0,98,1024,10),r.fillStyle="#e8892b",r.fillRect(0,110,1024,5);for(let f of u)r.fillStyle="#c3c8ce",r.fillRect(f-30,98,60,17);r.fillStyle="#3a3f46",r.font=`700 11px ${l}`,r.fillText("\u30AF\u30CF 205-17",u[1]+40,136);let p=0,m=176,x=256,y=256;r.fillStyle="#d3d7dc",r.fillRect(p,m,x,y),r.fillStyle="#20262e",r.fillRect(p+14,m+44,x-28,96),r.fillStyle="rgba(160,190,225,0.35)",r.beginPath(),r.moveTo(p+40,m+44),r.lineTo(p+80,m+44),r.lineTo(p+40,m+140),r.lineTo(p+14,m+140),r.fill(),r.fillStyle="#9aa1a9",r.fillRect(p+x/2-4,m+44,8,96),r.fillStyle="#111",r.fillRect(p+50,m+12,x-100,26),r.fillStyle="#ff9a2a",r.font=`800 18px ${l}`,r.textAlign="center",r.textBaseline="middle",r.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26),r.fillStyle="#1f9a50",r.fillRect(p,m+150,x,18),r.fillStyle="#e8892b",r.fillRect(p,m+170,x,7);for(let f of[p+40,p+x-40])r.fillStyle="#f4f4ee",r.beginPath(),r.arc(f,m+200,13,0,7),r.fill(),r.fillStyle="#b02020",r.beginPath(),r.arc(f+(f<p+x/2?28:-28),m+200,8,0,7),r.fill();r.fillStyle="#5c636b",r.fillRect(p,m+y-30,x,30),r.fillStyle="#3a3f46",r.font=`800 16px ${l}`,r.fillText("17",p+x/2,m+220),o.fillStyle="#111",o.fillRect(p,m,x,y),o.fillStyle="#ff9a2a",o.font=`800 18px ${l}`,o.textAlign="center",o.textBaseline="middle",o.fillText("\u666E\u901A  \u6D77\u8FBA",p+x/2,m+26);for(let f of[p+40,p+x-40])o.fillStyle="#fffbe8",o.beginPath(),o.arc(f,m+200,13,0,7),o.fill();r.fillStyle="#d3d7dc",r.fillRect(300,200,32,32),r.fillStyle="#ffffff",r.fillRect(340,200,32,32);let M=f=>{let d=new ti(f);return d.colorSpace=Gt,d.anisotropy=4,d},c=(f,d,g,v)=>({u0:f/1024,u1:(f+g)/1024,v0:1-(d+v)/512,v1:1-d/512});return{map:M(n),em:M(s),side:c(0,0,1024,a),sideR:{...c(0,0,1024,a),flip:!0},front:c(p,m,x,y),plain:c(342,202,28,28)}}function Gg(){let i=kS(),e=Q0(new sn({map:i.map,emissiveMap:i.em,emissive:16777215,emissiveIntensity:.3,vertexColors:!0,gradientMap:pi})),t=new Kt({uv:!0}),n=[1,1,1],s=_e("#9aa1a9"),r=_e("#3b4047"),o=_e("#2a2d33"),l=19.5,a=.6,u=3,h=1.45,p=.95,m=4,x=4,y=.3,M=_e("#33363b"),c={nz:i.plain,pz:i.plain,nx:i.plain,px:i.plain,py:i.plain,ny:i.plain},f=(_,S,E,R,C,I,A,L=!1)=>t.box(_,S,E,R,C,I,A,c,L?{noBottom:!0}:null),d=(_,S,E,R,C,I)=>{let L=E-C/2,D=E+C/2;for(let O=0;O<12;O++){let z=O/12*Math.PI*2,F=(O+1)/12*Math.PI*2,V=_+Math.cos(z)*R,k=S+Math.sin(z)*R,q=_+Math.cos(F)*R,$=S+Math.sin(F)*R;t.quad([V,k,L],[q,$,L],[q,$,D],[V,k,D],I,i.plain),t.quad([_,S,D],[V,k,D],[q,$,D],[q,$,D],I,i.plain),t.quad([_,S,L],[q,$,L],[V,k,L],[V,k,L],I,i.plain)}},g=u*l+(u-1)*a;for(let _=0;_<u;_++){let S=-g/2+l/2+_*(l+a),E=S-l/2,R=S+l/2;t.quad([E,p,h],[R,p,h],[R,m,h],[E,m,h],n,i.side),t.quad([R,p,-h],[E,p,-h],[E,m,-h],[R,m,-h],n,i.side);let C=_===u-1,I=_===0;t.quad([R,p,h],[R,p,-h],[R,m,-h],[R,m,h],C?n:_e("#c9ced4"),C?i.front:i.plain),t.quad([E,p,-h],[E,p,h],[E,m,h],[E,m,-h],I?n:_e("#c9ced4"),I?i.front:i.plain);for(let A=0;A<x;A++)for(let L of[1,-1]){let D=A/x*Math.PI/2,O=(A+1)/x*Math.PI/2,z=L*h*Math.cos(D),F=m+y*Math.sin(D),V=L*h*Math.cos(O),k=m+y*Math.sin(O);t.quad([E,F,z],[R,F,z],[R,k,V],[E,k,V],s,i.plain);for(let q of[E,R]){let $=[[q,m,0],[q,F,z],[q,k,V]];t.quad($[0],$[1],$[2],$[2],s,i.plain),t.quad($[0],$[2],$[1],$[1],s,i.plain)}}for(let A of[1,-1])f(E,m-.02,A*h-.04,R,m+.05,A*h+.04,r);for(let A of[S-5.5,S+5.5])f(A-1.3,m+.2,-.8,A+1.3,m+.62,.8,_e("#c4c9cf"),!0);f(E+.3,.82,-h+.1,R-.3,p,h-.1,o);for(let[A,L,D,O]of[[-3.6,2.2,.42,.35],[-.9,1.6,.5,-.2],[1.3,2.4,.38,.4],[3.9,1.4,.46,-.3]])f(S+A-L/2,.82-D,-1.15+O*.2,S+A+L/2,.82,1.15+O*.2,O>0?o:r);for(let A of[S-7,S+7]){for(let L of[1,-1]){f(A-1.35,.32,L*.86,A+1.35,.56,L*1.02,r);for(let D of[-1.05,1.05])f(A+D-.17,.3,L*.84,A+D+.17,.58,L*1.06,o)}f(A-.35,.5,-1,A+.35,.8,1,r);for(let L of[-1.05,1.05])for(let D of[1,-1])d(A+L,.43,D*.6,.43,.13,M)}if(_<u-1&&f(R,p+.15,-.95,R+a,m-.1,.95,_e("#3a3e44")),_===0){let A=S-3,L=m+.7;t.box(A-.6,m+.26,-.6,A+.6,m+.42,.6,r),t.rod([A-.5,m+.42,0],[A,L+.9,0],.03,.03,4,r),t.rod([A+.5,m+.42,0],[A,L+.9,0],.03,.03,4,r),t.rod([A,L+.9,-.85],[A,L+.9,.85],.03,.03,4,r)}}let v=new dt(t.build(),e);v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1;let b=new un;b.add(v),b.visible=!1;let T={active:!1,u:0,dir:1,speed:16,sx:0,ds:2,cleared:!1,length:g},w={};return{group:b,st:T,start(_,S,E=16){Object.assign(T,{active:!0,sx:_,dir:S,speed:E,u:-S*290,ds:S>0?-2:2,cleared:!1}),b.visible=!0},update(_,S,E,R,C){if(!T.active)return;T.u+=T.dir*T.speed*_;let I=T.u-T.dir*T.length/2;if(!T.cleared&&(T.dir>0?I>C+1:I<-C-1)&&(T.cleared=!0),Math.abs(T.u)>330){T.active=!1,b.visible=!1;return}S.at(T.sx,w),b.position.set(w.x+w.fx*T.ds+w.rx*T.u-E.x,w.y+.34,w.z+w.fz*T.ds+w.rz*T.u-E.z),b.rotation.y=w.h+(T.dir>0?Math.PI:0),e.emissiveIntensity=.3+R*1.1}}}var zS='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif',Bs=2048,HS=4096;function Rh(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}var Zg=Rh(256,256);{let i=Zg.getContext("2d"),e=i.createImageData(256,256),t=At(7);for(let n=0;n<e.data.length;n+=4){let s=128+(t()-.5)*120+(t()<.02?-60:0);e.data[n]=e.data[n+1]=e.data[n+2]=s,e.data[n+3]=255}i.putImageData(e,0,0)}var Ch=class{constructor(e=HS,t=0,n={}){let s=this.H=e;this.cA=Rh(Bs,s),this.cE=Rh(Bs/2,s/2),this.a=this.cA.getContext("2d"),this.e=this.cE.getContext("2d"),this.e.fillStyle="#000",this.e.fillRect(0,0,Bs/2,s/2),this.a.fillStyle="#8a8a8a",this.a.fillRect(0,0,Bs,s),this.x=0,this.y=0,this.rowH=0,this.cells=n,this.uOff=t,this.grain=this.a.createPattern(Zg,"repeat")}add(e,t,n,s){if(this.x+t+4>Bs&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.H)throw new Error("atlas full at "+e);let o={x:this.x,y:this.y,w:t,h:n};this.x+=t+4,this.rowH=Math.max(this.rowH,n);for(let h of[this.a,this.e])h.save(),h===this.e&&h.scale(.5,.5),h.translate(o.x,o.y),h.beginPath(),h.rect(0,0,t,n),h.clip();s(this.a,this.e,t,n),this.a.restore(),this.e.restore();let l=.5,a=this.H,u=this.uOff;return this.cells[e]={u0:u+(o.x+l)/Bs,u1:u+(o.x+t-l)/Bs,v0:1-(o.y+n-l)/a,v1:1-(o.y+l)/a,w:t,h:n,px:o.x,py:o.y},this.cells[e]}paintCell(e,t,n,s,r,o,l){let a=this.cells[e];!a||a.u0>1.5!=this.uOff>1.5||(this.a.drawImage(t,n,s,r,o,a.px,a.py,a.w,a.h),l>=0?this.e.drawImage(t,n,l,r,o,a.px/2,a.py/2,a.w/2,a.h/2):(this.e.fillStyle="#000",this.e.fillRect(a.px/2,a.py/2,a.w/2,a.h/2)))}uv(e){let t=this.cells[e];if(!t)throw new Error("no atlas cell "+e);return t}has(e){return!!this.cells[e]}textures(e){let t=n=>{let s=new ti(n);return s.colorSpace=Gt,s.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),s.minFilter=Pn,s.generateMipmaps=!0,s};return{map:t(this.cA),emissive:t(this.cE)}}};function on(i,e,t,n,s=.1){i.save(),i.globalAlpha=s,i.globalCompositeOperation="overlay",i.fillStyle=e.grain,i.fillRect(0,0,t,n),i.restore()}function bn(i,e,t,n,s,r){let o=i.createLinearGradient(0,t,0,t+s);r.forEach(([l,a])=>o.addColorStop(l,a)),i.fillStyle=o,i.fillRect(e,t,n,s)}function Ho(i,e,t,n,s="#ebe7df",r=0){if(i.fillStyle=s,i.fillRect(0,0,t,n),bn(i,0,0,t,n,[[0,"rgba(255,255,255,0.10)"],[1,"rgba(0,0,0,0.10)"]]),r){i.fillStyle="rgba(60,60,70,0.10)";for(let o=r;o<n;o+=r)i.fillRect(0,o,t,1.5)}on(i,e,t,n,.13)}function Fs(i,e,t,n,s,r=.13){let o=i.createLinearGradient(0,t,0,t+s);o.addColorStop(0,`rgba(55,55,70,${r})`),o.addColorStop(1,"rgba(55,55,70,0)"),i.fillStyle=o,i.fillRect(e,t,n,s)}function X(i,e,t,n,s,r){i.fillStyle=r,i.fillRect(e,t,n,s)}function Vo(i,e,t,n,s,r,o="#d9dde2",l="rgba(40,45,60,0.55)"){X(i,e-r,t-r,n+2*r,s+2*r,o),X(i,e-r,t+s,n+2*r,r*.6,"rgba(0,0,0,0.12)"),i.strokeStyle=l,i.lineWidth=1,i.strokeRect(e-r+.5,t-r+.5,n+2*r-1,s+2*r-1)}function Us(i,e,t,n,s,r,o=0){let l=i.createLinearGradient(e,t,e+n*.35,t+s),a=o?"#4f78b8":"#5f93d6",u=o?"#86a9d4":"#a6c8ec";l.addColorStop(0,a),l.addColorStop(.55,u),l.addColorStop(1,"#dbe9f6"),i.fillStyle=l,i.fillRect(e,t,n,s),i.save(),i.beginPath(),i.rect(e,t,n,s),i.clip(),i.fillStyle="rgba(255,255,255,0.32)",i.beginPath(),i.ellipse(e+n*(.2+r()*.6),t+s*.75,n*.35,s*.16,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.22)";let h=e+n*r();i.beginPath(),i.moveTo(h,t),i.lineTo(h+n*.18,t),i.lineTo(h-n*.25,t+s),i.lineTo(h-n*.43,t+s),i.fill(),i.restore()}function qg(i,e,t,n,s,r="#efe6d2"){X(i,e,t,n,s,r),i.fillStyle="rgba(120,100,80,0.18)";for(let o=0;o<n;o+=Math.max(3,n/7))i.fillRect(e+o,t,1.5,s);bn(i,e,t,n,s,[[0,"rgba(0,0,0,0.05)"],[1,"rgba(0,0,0,0.18)"]])}function Ph(i,e,t=800){i.font=`${t} ${e}px ${zS}`}function It(i,e,t,n,s,r,o,l=800,a=null){Ph(i,r,l);let u=r;for(;i.measureText(e).width>s&&u>6;)u-=1,Ph(i,u,l);i.textAlign="center",i.textBaseline="middle",a&&(i.lineWidth=Math.max(2,u*.12),i.strokeStyle=a,i.lineJoin="round",i.strokeText(e,t,n)),i.fillStyle=o,i.fillText(e,t,n)}function Or(i,e,t,n,s,r,o,l=800,a=null){let u=[...e],h=u.length,p=Math.min(r*1.05,(s-n)/h),m=Math.min(r,p*.95);Ph(i,m,l),i.textAlign="center",i.textBaseline="middle",u.forEach((x,y)=>{let M=n+(s-n-p*h)/2+p*(y+.5);a&&(i.lineWidth=Math.max(2,m*.12),i.strokeStyle=a,i.strokeText(x,t,M)),i.fillStyle=o,i.fillText(x,t,M)})}function Br(i,e,t,n,s,r,o,l=!0){if(X(i,e,t,n,s,r),i.save(),i.globalCompositeOperation="multiply",bn(i,e,t,n,s,[[0,"#ffffff"],[.4,"#e8e8e8"],[1,"#9a9a9a"]]),l){i.fillStyle="#6a6a6a";for(let a=e+n*.2*o();a<e+n-4;a+=n*(.18+o()*.3)){let u=Math.min(n*(.1+o()*.2),e+n-a),h=s*(.12+o()*.25);i.fillRect(a,t+s-h,u,h)}}i.restore()}function VS(i,e,t,n,s,r,o){let l=i.getTransform();e.save(),e.drawImage(i.canvas,l.e+t,l.f+n,s,r,t,n,s,r),e.globalCompositeOperation="multiply",X(e,t,n,s,r,o),e.globalCompositeOperation="lighter",e.globalAlpha=.22,X(e,t,n,s,r,o),e.globalCompositeOperation="multiply",e.globalAlpha=1,bn(e,t,n,s,r,[[0,"#ebebeb"],[.5,"#d1d1d1"],[1,"#949494"]]),e.restore()}var Xg=["\u30E9\u30FC\u30E1\u30F3","\u55AB\u8336","\u85AC\u5C40","\u66F8\u5E97","\u82B1\u5C4B","\u30D1\u30F3","\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0","\u4E0D\u52D5\u7523","\u6B6F\u79D1","\u7406\u5BB9","\u9152\u5E97","\u3046\u3069\u3093","\u5BFF\u53F8","\u30AB\u30D5\u30A7","\u516B\u767E\u5C4B","\u7CBE\u8089\u5E97","\u6587\u5177","\u6642\u8A08\u5E97","\u96FB\u5668","\u73C8\u7432","\u98DF\u5802","\u5C45\u9152\u5C4B","\u7F8E\u5BB9\u5BA4","\u5199\u771F\u9928","\u548C\u83D3\u5B50","\u6D0B\u83D3\u5B50","\u53E4\u672C","\u304A\u3082\u3061\u3083","\u91D1\u7269\u5E97","\u8C46\u8150\u5E97"],Ah=[["#d8352a","#fff"],["#fff","#c8241c"],["#1f4e9c","#fff"],["#f3c43a","#2b2b2b"],["#2f7d4a","#fff"],["#fff","#1f3f8c"],["#e8743b","#fff"],["#2b2b33","#f5d36b"],["#7a2f86","#fff"],["#f5efe0","#3a2a1c"]],Yg=["\u5C45\u9152\u5C4B","\u30AB\u30E9\u30AA\u30B1","\u6574\u9AA8\u9662","\u6B6F\u79D1\u533B\u9662","\u5B66\u7FD2\u587E","\u30B9\u30CA\u30C3\u30AF","\u713C\u304D\u9CE5","\u4E2D\u83EF\u6599\u7406","\u305D\u308D\u3070\u3093","\u8CB8\u4E8B\u52D9\u6240","\u7406\u9AEA","\u30AE\u30E3\u30E9\u30EA\u30FC"],WS=["\u3046\u3069\u3093","\u305D\u3070","\u5BFF\u53F8","\u3089\u30FC\u3081\u3093","\u5929\u3077\u3089","\u304A\u3067\u3093","\u3068\u3093\u304B\u3064","\u7518\u5473"];function Kg(){let i=new Ch,e=At(2024),t=240,n=(c,f,d,g,v,b,T=!1)=>{Ho(c,i,d,g,"#ece8e0",0);let w=At(b*31+(v?7:0)+5);if(b===0){let _=d*.14,S=g*.22,E=d*.72,R=g*.5;Vo(c,_,S,E,R,5),Us(c,_,S,E/2,R,w),Us(c,_+E/2,S,E/2,R,w);let C=w()<.8?E*(.18+w()*.25):0;C&&qg(c,_+2,S+2,C,R-4,w()<.5?"#efe6d2":"#d9e4ea"),X(c,_+E/2-2,S,4,R,"#cfd4da"),X(c,_-8,S+R+5,E+16,6,"#d8d8d4"),Fs(c,_-4,S+R+11,8,60),Fs(c,_+E-4,S+R+11,8,60),v&&(Br(f,_,S,E,R,T?"#e6eeff":"#ffcf8f",w),C&&X(f,_+2,S+2,C,R-4,T?"rgba(242,246,255,0.88)":"rgba(255,240,210,0.85)"),X(f,_+E/2-2,S,4,R,"#000"))}else if(b===1){for(let _ of[.12,.56]){let S=d*_,E=g*.28,R=d*.3,C=g*.36;Vo(c,S,E,R,C,4),Us(c,S,E,R,C,w,1),c.fillStyle="rgba(255,255,255,0.35)",c.fillRect(S,E,R,C*.45),Fs(c,S,E+C+6,R,40,.1),v&&w()<.8&&Br(f,S,E,R,C,w()<.5?"#ffd9a0":"#e8f0ff",w)}c.fillStyle="#c9c9c4",c.beginPath(),c.arc(d*.88,g*.2,9,0,7),c.fill()}else if(b===2){let _=d*.1,S=g*.12,E=d*.8,R=g*.84;Vo(c,_,S,E,R,4),Us(c,_,S,E/2,R,w),Us(c,_+E/2,S,E/2,R,w);let C=E*(.2+w()*.3);qg(c,_+2,S+2,C,R-4,e.pick(["#efe6d2","#f2dede","#dde8ef","#e9efdc"])),X(c,_+E/2-2,S,4,R,"#cfd4da"),v&&(Br(f,_,S,E,R,T?"#e6eeff":"#ffcb85",w),X(f,_+2,S+2,C,R-4,T?"rgba(242,246,255,0.9)":"rgba(255,236,200,0.9)"),X(f,_+E/2-2,S,4,R,"#000"))}else if(b===3){Ho(c,i,d,g,"#dfe3e6",0);let _=g*.25,S=g*.55;Us(c,0,_,d,S,w,1);for(let E=0;E<=d;E+=d/4)X(c,E-2,_,4,S,"#8d98a6");if(X(c,0,_-4,d,4,"#8d98a6"),X(c,0,_+S,d,5,"#7d8796"),v)for(let E=0;E<4;E++)w()<.7&&Br(f,E*d/4+2,_,d/4-4,S,w()<.6?"#f2f6ff":"#ffe2b0",w)}else if(b===4){c.fillStyle="#6b4a35",c.fillRect(0,0,d,g);for(let C=0;C<g;C+=12)X(c,0,C,d,2,"rgba(30,18,10,0.35)"),X(c,0,C+2,d,1,"rgba(255,220,180,0.06)");on(c,i,d,g,.15);let _=d*.18,S=g*.25,E=d*.64,R=g*.45;X(c,_-6,S-6,E+12,R+12,"#4a3020"),X(c,_,S,E,R,"#efe4c8"),c.fillStyle="#5a3a26";for(let C=1;C<6;C++)c.fillRect(_+C*E/6-1.5,S,3,R);for(let C=1;C<3;C++)c.fillRect(_,S+C*R/3-1.5,E,3);if(v){Br(f,_,S,E,R,"#ffc070",w,!1),f.fillStyle="#000";for(let C=1;C<6;C++)f.fillRect(_+C*E/6-1.5,S,3,R);for(let C=1;C<3;C++)f.fillRect(_,S+C*R/3-1.5,E,3)}}else if(b===5){X(c,d*.08,0,7,g,"#bdbdb6"),X(c,d*.08+5,0,2,g,"rgba(0,0,0,0.2)");let _=d*.55,S=g*.3,E=d*.22,R=g*.24;Vo(c,_,S,E,R,3),X(c,_,S,E,R,"#d6dfe4"),c.fillStyle="rgba(255,255,255,0.4)",c.fillRect(_,S,E,R/2),Fs(c,_,S+R+4,E,50,.12),X(c,d*.22,g*.55,26,34,"#cfcfca"),X(c,d*.22+4,g*.55+6,18,12,"#9aa2a8"),v&&Br(f,_,S,E,R,T?"#eef2ff":"#fff0d8",w,!1)}else if(b===6){let _=d*.4,S=g*.35,E=d*.2,R=g*.28;Vo(c,_,S,E,R,3),Us(c,_,S,E,R,w,1),Fs(c,_,S+R+4,E,70,.14),v&&Br(f,_,S,E,R,T?"#e8efff":"#ffd9a0",w)}};for(let c=0;c<7;c++)i.add("win"+c,t,t,(f,d,g,v)=>n(f,d,g,v,!1,c)),i.add("win"+c+"L",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c));for(let c of[0,2,5,6])i.add("win"+c+"C",t,t,(f,d,g,v)=>n(f,d,g,v,!0,c,!0));i.add("plain",t,t,(c,f,d,g)=>{Ho(c,i,d,g,"#ece8e0"),Fs(c,d*.3,0,12,g*.6,.06)}),i.add("concrete",t,t,(c,f,d,g)=>{Ho(c,i,d,g,"#d9d7d0",60);for(let v=0;v<6;v++)Fs(c,v*41%d,0,10,g*.5,.07)});let s=288,r=(c,f,d,g,v,b,T)=>{let w=(S,E,R,C,I,A=0)=>{c.fillStyle=I,c.beginPath(),c.ellipse(S,E,R,C,A,0,7),c.fill()},_=S=>S[Math.floor(b()*S.length)];if(T==="bakery"){X(c,f,d,g,v,"#d9b98a"),bn(c,f,d,g,v,[[0,"rgba(255,240,210,0.35)"],[1,"rgba(90,60,30,0.25)"]]);for(let S=d+v*.28;S<d+v*.72;S+=v*.2){X(c,f,S,g,5,"#8a5a32");for(let E=f+8;E<f+g-8;E+=15+b()*10){let R=7+b()*6,C=4+b()*3;w(E,S-C,R,C,_(["#c98a3e","#b4732e","#d9a256","#a4632a"])),w(E-R*.2,S-C*1.4,R*.5,C*.35,"rgba(255,230,180,0.5)")}}X(c,f+4,d+v*.8,g-8,v*.2,"#efe7d8"),X(c,f+4,d+v*.8,g-8,3,"#9a9a96");for(let S=f+14;S<f+g-10;S+=18)w(S,d+v*.9,6,4,_(["#e8b35a","#c06a3a","#f2d29a"]));X(c,f+g-64,d+10,52,22,"#7a3e1e"),It(c,"\u713C\u304D\u305F\u3066",f+g-38,d+21,46,14,"#fff3dc",800)}else if(T==="books"){X(c,f,d,g,v,"#6f5a46");for(let S=d+6;S<d+v*.72;S+=v*.17){X(c,f,S+v*.15,g,4,"#4a3828");for(let E=f+3;E<f+g-4;){let R=3+b()*4,C=v*(.1+b()*.045);X(c,E,S+v*.15-C,R,C,_(["#a8322e","#2f5a8a","#d8c9a4","#3e6e4a","#e0d8c8","#8a6a3a","#5a3e6e","#c7a03a"])),E+=R+(b()<.1?4:.6)}}X(c,f+4,d+v*.76,g-8,v*.24,"#8a7560");for(let S=f+8;S<f+g-22;S+=24)X(c,S,d+v*.79,20,28,_(["#e85a7a","#5ab4e8","#f2d24a","#f6f6f2","#7ac46a"])),X(c,S+3,d+v*.79+4,14,3,"rgba(0,0,0,0.4)")}else if(T==="florist"){X(c,f,d,g,v,"#e8e2d2"),bn(c,f,d,g,v,[[0,"rgba(255,250,235,0.3)"],[1,"rgba(60,50,30,0.15)"]]);for(let S=0;S<7;S++){let E=f+8+b()*(g-16),R=v*(.15+b()*.25);for(let C=0;C<R;C+=3.5)w(E+Math.sin(C*.25+S)*4+(b()-.5)*6,d+4+C,3.4,1.8,_(["#4f7f3c","#6a9a48","#3e6a32","#82b05a"]),b()*3)}for(let S=0;S<3;S++){let E=d+v*(.5+S*.17);X(c,f,E+14,g,4,"#9a8a76");for(let R=f+10+S*6;R<f+g-8;R+=19){let C=_(["#e8344a","#f6d23a","#f6f2f4","#f28ab0","#a46ad8","#f08a3a"]);for(let I=0;I<6;I++){c.strokeStyle="#4a7a3a",c.lineWidth=1.2,c.beginPath();let A=R+(b()-.5)*14;c.moveTo(R,E+10),c.lineTo(A,E-6-b()*8),c.stroke(),w(A,E-8-b()*8,3.2,3,C)}X(c,R-6,E+4,12,11,_(["#5a7a9a","#d8d4cc","#3a4a5a"]))}}}else if(T==="clothes"){X(c,f,d,g,v,"#efece6"),bn(c,f,d,g,v,[[0,"rgba(255,255,255,0.3)"],[1,"rgba(0,0,0,0.12)"]]),X(c,f+6,d+v*.18,g-60,3,"#7a7a7a");for(let E=f+12;E<f+g-66;E+=13+b()*5){c.fillStyle=_(["#3a4a6a","#c8b89a","#a8343a","#e8e2d4","#5a7a5a","#d88a5a","#2a2a2e"]);let R=d+v*.18+3,C=v*(.3+b()*.2);c.beginPath(),c.moveTo(E-5,R),c.lineTo(E+5,R),c.lineTo(E+8,R+C),c.lineTo(E-8,R+C),c.closePath(),c.fill()}let S=f+g-32;w(S,d+v*.16,7,8,"#d8cfc4"),c.fillStyle=_(["#c84a5a","#4a6a9a","#e8d8b8"]),c.beginPath(),c.moveTo(S-14,d+v*.24),c.lineTo(S+14,d+v*.24),c.lineTo(S+18,d+v*.66),c.lineTo(S-18,d+v*.66),c.closePath(),c.fill(),X(c,S-2,d+v*.66,4,v*.24,"#8a8a8a"),X(c,f+8,d+v*.74,g*.55,6,"#8a6a4a");for(let E=f+12;E<f+g*.55;E+=14)X(c,E,d+v*.74-8,11,8,_(["#e8e2d4","#3a4a6a","#a8b8c8","#d8b8a8"]))}else{let S=7;for(let E=d+v*.25;E<d+v;E+=v*.22)for(let R=f+3;R<f+g-6;R+=6+b()*8)e(),S=Math.imul(S,31)+Math.floor(b()*997+b()*61+b()*7)|0;T==="cafe"?h(c,f,d,g,v,At(S>>>0)):u(c,f,d,g,v,At(S>>>0),T==="konbini")}},o=["#d8423a","#e8a23a","#f2d24a","#3a7ac8","#2f9a5a","#f4f1ea","#c83a6a","#6a4ab0","#2a2a30","#e86a2a","#8ac83a","#4ab8d8","#a8642a","#f6f6f2"],l=(c,f,d,g,v,b,T="bbccutp")=>{let w=f+1+b()*3;for(;w<d-4;){let _=T[Math.floor(b()*T.length)],S=o[Math.floor(b()*o.length)],E=b()<.5?"#f8f6f0":o[Math.floor(b()*o.length)],R={b:8+b()*6,c:6+b()*2,u:9+b()*2,t:5+b()*2,p:12+b()*5}[_],C=Math.min(v,{b:14+b()*12,c:11+b()*3,u:10+b()*3,t:18+b()*9,p:14+b()*8}[_]),I=2+Math.floor(b()*5);for(let A=0;A<I&&w+R<d-1;A++,w+=R+.6){let L=g-C;_==="t"?(X(c,w,L+C*.3,R,C*.7,S),X(c,w+R*.3,L+C*.1,R*.4,C*.22,S),X(c,w+R*.28,L,R*.44,C*.11,E==="#f8f6f0"?"#e8e8e4":"#d83a2a"),X(c,w,L+C*.5,R,C*.22,E)):_==="c"?(X(c,w,L,R,C,S),X(c,w,L,R,1.5,"#d8dce0"),X(c,w,L+C*.35,R,C*.3,E)):_==="u"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,L+2),c.lineTo(w+R,L+2),c.lineTo(w+R-1.2,g),c.lineTo(w+1.2,g),c.fill(),X(c,w-.4,L,R+.8,2.2,"#f2efe6"),X(c,w+1,L+C*.45,R-2,C*.25,E)):_==="p"?(c.fillStyle=S,c.beginPath(),c.moveTo(w,g),c.lineTo(w,L+3),c.quadraticCurveTo(w+R/2,L-1.5,w+R,L+3),c.lineTo(w+R,g),c.fill(),X(c,w+1.5,L+C*.35,R-3,C*.35,E),X(c,w,L+2,R,1,"rgba(0,0,0,0.18)")):(X(c,w,L,R,C,S),X(c,w+1.5,L+C*.3,R-3,C*.4,E)),X(c,w,L+1,1,C-1,"rgba(255,255,255,0.28)"),X(c,w+R-1.3,L+1,1.3,C-1,"rgba(0,0,0,0.22)")}w+=1.5+b()*3}},a=(c,f,d,g,v)=>{bn(c,f,g+4,d,9,[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]]),X(c,f,g,d,4,"#d3d6da"),X(c,f,g+3.2,d,.8,"rgba(40,40,50,0.45)");for(let b=f+4+v()*10;b<f+d-6;b+=14+v()*16)X(c,b,g+.6,5,2.6,v()<.25?"#f2d23a":v()<.2?"#e84a3a":"#ffffff")},u=(c,f,d,g,v,b,T)=>{X(c,f,d,g,v,T?"#f3f1ea":"#ece5d8"),X(c,f,d,g,v*.13,T?"#f6f6f2":"#efebe2");for(let E of[.035,.085])X(c,f,d+v*E,g,2.4,"#ffffff"),bn(c,f,d+v*E+2.4,g,6,[[0,"rgba(255,255,250,0.5)"],[1,"rgba(255,255,250,0)"]]);bn(c,f,d+v*.13,g,v*.87,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(70,60,50,0.18)"]]);for(let E=0,R=f+18+b()*30;E<2&&R<f+g-40;E++,R+=90+b()*40)X(c,R+13,d+v*.13,1,6,"#888"),X(c,R,d+v*.13+6,28,9,o[Math.floor(b()*9)]),X(c,R+4,d+v*.13+9.5,20,2,"rgba(255,255,255,0.8)");let _=d+v*.25,S=v*.165;X(c,f,_-4,g,4,"#c9ccd0");for(let E=0;E<4;E++){let R=_+S*(E+1);bn(c,f,R-S,g,S,[[0,"rgba(40,36,34,0.32)"],[1,"rgba(40,36,34,0.12)"]]),l(c,f,f+g,R,S-6,b),a(c,f,g,R,b)}X(c,f,_+S*4+4,g,d+v-_-S*4-4,"#5c6068"),X(c,f,_+S*4+4,g,1.5,"#8a8e96");for(let E=f+2+b()*20;E<f+g;E+=70+b()*12)X(c,E,_-4,3,S*4+8,"#b4b8be"),X(c,E+2.2,_-4,.8,S*4+8,"rgba(0,0,0,0.3)");if(T){let E=d+v*.7;X(c,f,E+26,g,d+v-E-26,"#7a7e86"),X(c,f,E+26,g,2,"#a8acb2");for(let R=f+2;R<f+g-14;R+=15.5){let C=o[Math.floor(b()*o.length)],I=b()*2;X(c,R,E+I,14,26-I,C),X(c,R,E+I,14,5,b()<.6?"#ffffff":"#e8343a"),X(c,R+2,E+I+8,10,10,b()<.5?"#f2c8a8":o[Math.floor(b()*o.length)]),X(c,R+13,E+I,1,26-I,"rgba(0,0,0,0.25)")}}},h=(c,f,d,g,v,b)=>{X(c,f,d,g,v,"#b88a5e"),bn(c,f,d,g,v,[[0,"rgba(255,230,190,0.25)"],[1,"rgba(60,35,20,0.35)"]]);for(let w=f;w<f+g;w+=9)X(c,w,d+v*.55,1,v*.45,"rgba(60,35,20,0.25)");let T=d+v*.3;for(let w=0;w<2;w++){let _=T+w*22;X(c,f+8,_,g*.55,3,"#6a4428"),l(c,f+10,f+g*.55+6,_,14,b,"ctu")}X(c,f+g*.64,d+v*.22,g*.28,v*.26,"#2e3a32"),X(c,f+g*.64,d+v*.22,g*.28,2,"#6a4428");for(let w=0;w<5;w++)X(c,f+g*.67,d+v*(.27+w*.04),g*(.12+b()*.1),1.6,"rgba(240,240,230,0.75)");X(c,f+4,d+v*.56,g-8,6,"#5a3820"),X(c,f+4,d+v*.56+6,g-8,v*.08,"#7a5232"),X(c,f+g*.3,d+v*.47,18,v*.09,"#c8ccd0"),X(c,f+g*.3+3,d+v*.47+3,12,5,"#3a3a40");for(let w=f+30+b()*20;w<f+g-20;w+=70+b()*20)X(c,w,d,1,v*.14,"#3a2a1e"),c.fillStyle="#2f3a36",c.beginPath(),c.moveTo(w-9,d+v*.2),c.quadraticCurveTo(w+.5,d+v*.12,w+10,d+v*.2),c.fill(),c.fillStyle="rgba(255,214,150,0.9)",c.beginPath(),c.ellipse(w+.5,d+v*.2,7,2,0,0,7),c.fill();for(let w=f+26+b()*16;w<f+g-26;w+=78+b()*20){X(c,w-16,d+v*.74,32,4,"#4a2e1c"),X(c,w-1.5,d+v*.74+4,3,v*.2,"#2e2420"),X(c,w-8,d+v*.94,16,2,"#2e2420");for(let _ of[-24,24])X(c,w+_-6,d+v*.8,12,3,"#3a2618"),X(c,w+_+(_<0?-6:4),d+v*.66,2,v*.17,"#3a2618"),X(c,w+_-5,d+v*.83,1.6,v*.13,"#3a2618"),X(c,w+_+3.4,d+v*.83,1.6,v*.13,"#3a2618");c.fillStyle="#f4f0e8",c.beginPath(),c.ellipse(w-6,d+v*.74-1.5,3,1.5,0,0,7),c.fill()}},p=(c,f,d,g,v,b,T="")=>{let w=At(b);if(Ho(c,i,d,g,"#e6e2da"),v==="glass"||v==="door"||v==="konbini"||v==="cafe"){let S=g*.22,E=d-12,R=g*.78-4;X(c,6,S,E,R,v==="konbini"?"#f6f4ea":v==="cafe"?"#7a5a40":"#8a7a68"),r(c,6,S,E,R,w,T||v),v==="konbini"&&X(c,6,S+4,E,5,"#ffffff"),v==="door"&&(X(c,d/2-30,S+18,60,24,"#fff"),It(c,"\u55B6\u696D\u4E2D",d/2,S+30,54,18,"#c82828")),v==="glass"&&!T&&w()<.7&&(X(c,16,S+14,44,60,e.pick(["#f6d34a","#fff","#ff8aa0"])),It(c,e.pick(["\u7279\u58F2","\u65B0\u5546\u54C1","SALE","\u672C\u65E5"]),38,S+44,40,16,"#c02020")),VS(c,f,6,S,E,R,v==="konbini"?"#e4eef8":v==="cafe"?"#f0a868":"#f2d2a6"),c.save(),c.globalAlpha=.35,Us(c,6,S,E,R,w),c.restore(),X(c,6,S,E,4,"#4a4e57"),X(f,6,S,E,4,"#000"),v==="door"&&(X(c,d/2-2,S,4,R,"#4a4e57"),X(f,d/2-2,S,4,R,"#000"),X(c,d/2-14,S+R*.45,3,40,"#c0c4c8"),X(c,d/2+11,S+R*.45,3,40,"#c0c4c8")),v==="cafe"&&(X(c,d*.62,g-70,46,62,"#2c3a30"),X(f,d*.62,g-70,46,62,"#000"),It(c,"\u30E9\u30F3\u30C1",d*.62+23,g-50,40,13,"#fff",700))}else if(v==="shutter"){let S=g*.2,E=d-12,R=g*.8;X(c,6,S,E,R,"#b8bcc0");for(let C=S;C<S+R;C+=7)X(c,6,C,E,2,"rgba(60,64,72,0.35)"),X(c,6,C+2,E,1,"rgba(255,255,255,0.35)");X(c,6,S,E,10,"#8f949a"),on(c,i,d,g,.12),w()<.5&&(X(c,d/2-40,S+R*.35,80,26,"#fff"),It(c,e.pick(["\u5B9A\u4F11\u65E5","\u672C\u65E5\u4F11\u696D","\u8CB8\u5E97\u8217"]),d/2,S+R*.35+13,74,16,"#333",700))}else if(v==="noren"){X(c,0,0,d,g,"#5b3c28");for(let I=0;I<d;I+=10)X(c,I,g*.2,3,g*.8,"rgba(25,15,8,0.6)");on(c,i,d,g,.15);let _=d*.12,S=g*.24,E=d*.76,R=g*.34,C=e.pick(["#1f3570","#7a1f24","#2a2a2a","#365e3a"]);X(c,_,S,E,R,C);for(let I=1;I<3;I++)X(c,_+E*I/3-1,S+R*.25,2,R*.75,"rgba(255,255,255,0.25)");It(c,e.pick(WS),d/2,S+R*.55,E*.9,46,"#f5f0e6",800),X(c,_,S,E,6,"#3a2a1c"),f.fillStyle="#ffae5c",f.fillRect(_,S+R,E,g-S-R),f.fillStyle="rgba(255,170,90,0.6)",f.fillRect(_,S,E,R),c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d*.9,g*.36,13,19,0,0,7),c.fill(),It(c,"\u9152",d*.9,g*.36,16,14,"#fff"),f.fillStyle="#ff6a3a",f.beginPath(),f.ellipse(d*.9,g*.36,13,19,0,0,7),f.fill()}else if(v==="house"){let _=d*.18,S=g*.3,E=d*.34,R=g*.7;X(c,_-6,S-6,E+12,R+6,"#9a9a96"),X(c,_,S,E,R,e.pick(["#8a5a3c","#5c4636","#c9c4bc","#3f5466"])),X(c,_+E-14,S+R*.5,4,22,"#d8d0c0"),X(c,_+6,S+10,E-12,R*.25,"rgba(255,255,255,0.18)"),X(c,d*.62,g*.48,30,22,"#cfcfca"),X(c,d*.62+6,g*.48+5,18,4,"#555");let C=d*.6,I=g*.22,A=d*.3,L=g*.2;Vo(c,C,I,A,L,3),Us(c,C,I,A,L,w,1);for(let D=0;D<3;D++)c.fillStyle="#7b5a43",c.fillRect(d*.6+D*22,g-26,16,18),c.fillStyle=e.pick(["#3f8a3e","#5aa04a","#2f6e3a"]),c.beginPath(),c.arc(d*.6+D*22+8,g-32,11,0,7),c.fill();f.fillStyle="#ffd08a",f.beginPath(),f.arc(_+E+14,S+8,6,0,7),f.fill(),w()<.6&&(f.fillStyle="#ffcf8f",f.fillRect(C,I,A,L))}else if(v==="garage"){let S=g*.25,E=d-16,R=g*.75;X(c,8,S,E,R,"#efefec");for(let C=S;C<S+R;C+=9)X(c,8,C,E,1.5,"rgba(80,80,90,0.25)");on(c,i,d,g,.1)}};["glass","door","shutter","noren","konbini","house","garage","cafe"].forEach((c,f)=>{i.add("shop_"+c,t,s,(d,g,v,b)=>p(d,g,v,b,c,100+f)),(c==="glass"||c==="noren"||c==="house")&&i.add("shop_"+c+"2",t,s,(d,g,v,b)=>p(d,g,v,b,c,200+f)),c==="glass"&&["bakery","books","florist","clothes"].forEach((d,g)=>i.add("shop_glass"+(g+3),t,s,(v,b,T,w)=>p(v,b,T,w,"glass",300+g,d)))});for(let c=0;c<14;c++)i.add("hs"+c,512,76,(f,d,g,v)=>{let[b,T]=Ah[c%Ah.length],w=Xg[c*7%Xg.length];X(f,0,0,g,v,b),X(f,0,0,g,5,"rgba(255,255,255,0.35)"),X(f,0,v-6,g,6,"rgba(0,0,0,0.18)"),c%3===0&&(X(f,12,12,v-24,v-24,T),It(f,w[0],12+(v-24)/2,v/2,v-30,34,b)),It(f,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T,900),on(f,i,g,v,.08),d.fillStyle=b==="#fff"||b==="#f5efe0"?"#d9d6cc":b,d.fillRect(0,0,g,v),d.globalAlpha=.9,It(d,w,g/2+(c%3===0?24:0),v/2+2,g*.7,50,T==="#fff"?"#ffffff":T,900),d.globalAlpha=1});for(let[c,f,d]of[["\u82B1\u5C4B","#2f7d4a","#fff"],["\u6D0B\u54C1\u5E97","#2b2b33","#f5d36b"]])i.add("hs_"+c,512,76,(g,v,b,T)=>{X(g,0,0,b,T,f),X(g,0,0,b,5,"rgba(255,255,255,0.35)"),X(g,0,T-6,b,6,"rgba(0,0,0,0.18)"),It(g,c,b/2,T/2+2,b*.7,50,d,900),on(g,i,b,T,.08),v.fillStyle=f,v.fillRect(0,0,b,T),v.globalAlpha=.9,It(v,c,b/2,T/2+2,b*.7,50,d,900),v.globalAlpha=1});let m=["#ff4fd8","#b45cff","#3fd8ff","#ff4a5a","#4dff9a","#ffc94a"],x=(c,f,d,g,v,b)=>{c.beginPath(),c.moveTo(f+b,d),c.arcTo(f+g,d,f+g,d+v,b),c.arcTo(f+g,d+v,f,d+v,b),c.arcTo(f,d+v,f,d,b),c.arcTo(f,d,f+g,d,b),c.closePath()};for(let c=0;c<10;c++)i.add("vs"+c,72,288,(f,d,g,v)=>{let b=Yg[c%Yg.length],T=m[(c*5+2)%m.length],w=c%10===3||c%10===6||c%10===8,[_,S]=Ah[(c*3+1)%Ah.length],E=w?_==="#fff"||_==="#f5efe0"?"#2b2b33":_:"#fbf7ef",R=w?"#ffffff":["#c41e2a","#1f2a6e","#222226","#b8186a"][c%4];X(f,0,0,g,v,"#2a2b30"),x(f,3,3,g-6,v-6,8),f.fillStyle=E,f.fill(),bn(f,3,3,g-6,v-6,[[0,"rgba(255,255,255,0.12)"],[1,"rgba(0,0,0,0.08)"]]),f.save(),x(f,8,8,g-16,v-16,6),f.strokeStyle=T,f.globalAlpha=.55,f.lineWidth=7,f.stroke(),f.globalAlpha=1,f.strokeStyle="#fff6fb",f.lineWidth=2.2,f.stroke(),f.restore(),Or(f,b,g/2,18,v-18,50,R,900),on(f,i,g,v,.06),X(d,0,0,g,v,"#000"),x(d,3,3,g-6,v-6,8),d.fillStyle=w?"#3a3a3e":"#4a4844",d.fill(),d.save(),x(d,8,8,g-16,v-16,6),d.strokeStyle=T,d.lineWidth=7,d.stroke(),d.strokeStyle="#ffffff",d.lineWidth=2.5,d.stroke(),d.restore(),Or(d,b,g/2,18,v-18,50,w?"#ffffff":"#000000",900)});[["\u590F\u796D\u308A","8\u670810\u65E5","#2f6fd8"],["\u3072\u307E\u308F\u308A\u4E0D\u52D5\u7523","\u99C5\u5F92\u6B693\u5206","#f0a020"],["\u304A\u3044\u3057\u3044\u725B\u4E73","\u6BCE\u671D\u3068\u3069\u3051\u307E\u3059","#3aa860"],["\u82B1\u706B\u5927\u4F1A","\u6CB3\u5DDD\u6577\u306B\u3066","#203070"]].forEach(([c,f,d],g)=>i.add("bb"+g,512,240,(v,b,T,w)=>{X(v,0,0,T,w,"#fbfaf5"),X(v,0,0,T,w*.62,d),It(v,c,T/2,w*.32,T*.9,96,"#fff",900,"rgba(0,0,0,0.25)"),It(v,f,T/2,w*.8,T*.85,52,"#333",800),on(v,i,T,w,.08),X(b,0,0,T,w,"#555"),b.globalAlpha=.85,X(b,0,0,T,w*.62,d),It(b,c,T/2,w*.32,T*.9,96,"#fff",900),b.globalAlpha=1})),i.add("konbini_band",480,72,(c,f,d,g)=>{X(c,0,0,d,g,"#fbfbf7"),X(c,0,g*.62,d,g*.14,"#2a9a4a"),X(c,0,g*.76,d,g*.12,"#f08a24"),X(c,0,g*.88,d,g*.12,"#2f6fd8"),It(c,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900),f.fillStyle="#f3f6f0",f.fillRect(0,0,d,g),It(f,"\u30B3\u30F3\u30D3\u30CB 24\u6642\u9593",d/2,g*.32,d*.8,40,"#1d3d8a",900)});for(let c=0;c<3;c++)i.add("vend"+c,128,234,(f,d,g,v)=>{let b=["#d8352a","#2f6fd8","#f4f4f0"][c];X(f,0,0,g,v,b),X(f,8,10,g-16,v*.55,"#eef4f8");let T=["#e33","#3a7","#fc3","#36c","#f7a","#fff","#a5d","#f83","#6cf","#8b4"];for(let w=0;w<4;w++)for(let _=0;_<6;_++){let S=14+_*17,E=18+w*30;f.fillStyle=T[(w*6+_+c)%T.length],f.fillRect(S,E,11,20),f.fillStyle="rgba(255,255,255,0.5)",f.fillRect(S+2,E+2,3,14),f.fillStyle="#2a2a2a",f.fillRect(S,E+23,11,3)}X(f,10,v*.62,g-20,22,"#222"),X(f,g-34,v*.66,14,22,"#bbb"),X(f,14,v*.82,g-28,22,"#1b1b1b"),It(f,["\u3064\u3081\u305F\u301C\u3044","\u3042\u3063\u305F\u304B\u301C\u3044","\u306E\u307F\u3082\u306E"][c],g/2,v*.62+11,g-28,14,"#fff",700),on(f,i,g,v,.08),d.fillStyle="#f2f8ff",d.fillRect(8,10,g-16,v*.55);for(let w=0;w<4;w++)for(let _=0;_<6;_++)d.fillStyle=T[(w*6+_+c)%T.length],d.fillRect(14+_*17,18+w*30,11,20);d.fillStyle="#9fd0ff",d.fillRect(10,v*.62,g-20,22)});i.add("ac",128,88,(c,f,d,g)=>{X(c,0,0,d,g,"#e9e9e4"),bn(c,0,0,d,g,[[0,"rgba(255,255,255,0.2)"],[1,"rgba(0,0,0,0.12)"]]),c.fillStyle="#9a9c9e",c.beginPath(),c.arc(d*.4,g*.5,g*.36,0,7),c.fill(),c.strokeStyle="#d6d6d2",c.lineWidth=2;for(let v=6;v<g*.36;v+=6)c.beginPath(),c.arc(d*.4,g*.5,v,0,7),c.stroke();for(let v=12;v<g-10;v+=6)X(c,d*.78,v,d*.16,2,"#b8b8b2")}),i.add("plate",128,64,(c,f,d,g)=>{X(c,0,0,d,g,"#f2cf3a"),c.strokeStyle="#2f5a2f",c.lineWidth=3,c.strokeRect(3,3,d-6,g-6),It(c,"\u54C1\u5DDD 580",d/2,16,d*.6,14,"#2f5a2f",700),It(c,"\u3042 12-34",d/2,42,d*.85,28,"#2f5a2f",800)}),i.add("sign_stop",128,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.moveTo(2,2),c.lineTo(d-2,2),c.lineTo(d/2,g-2),c.fill(),c.fillStyle="#d8231c",c.beginPath(),c.moveTo(10,7),c.lineTo(d-10,7),c.lineTo(d/2,g-12),c.fill(),It(c,"\u6B62\u307E\u308C",d/2,34,d*.62,30,"#fff",900)}),i.add("sign_blue",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.fillStyle="#1e5bb8",c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.fill(),c.fillStyle="#fff",c.beginPath(),c.moveTo(d/2,22),c.lineTo(d/2+22,50),c.lineTo(d/2+8,50),c.lineTo(d/2+8,88),c.lineTo(d/2-8,88),c.lineTo(d/2-8,50),c.lineTo(d/2-22,50),c.fill()}),i.add("sign_speed",112,112,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=12,c.beginPath(),c.arc(d/2,g/2,d/2-9,0,7),c.stroke(),It(c,"30",d/2,g/2+2,d*.6,50,"#1e4ea8",900)}),i.add("pole_plate",48,144,(c,f,d,g)=>{X(c,0,0,d,g,"#1d4f9a"),c.strokeStyle="#fff",c.lineWidth=2,c.strokeRect(3,3,d-6,g-6),Or(c,"\u672C\u753A\u4E8C\u4E01\u76EE",d/2,10,g-10,24,"#fff",700)});for(let c=0;c<4;c++)i.add("poster"+c,64,90,(f,d,g,v)=>{let b=["#fdf3c7","#d8ecff","#ffe0e6","#e3f6dc"][c];X(f,0,0,g,v,b),X(f,4,4,g-8,v*.45,["#f08a24","#2f6fd8","#e0457b","#3aa860"][c]),It(f,["\u590F\u796D\u308A","\u9632\u72AF","\u52DF\u96C6","\u82B1\u706B"][c],g/2,v*.25,g-12,18,"#fff",900);for(let T=0;T<4;T++)X(f,8,v*.58+T*8,g-16-T%2*14,3,"rgba(60,60,60,0.5)")});for(let c=0;c<3;c++)i.add("bal"+c,t,88,(f,d,g,v)=>{let b=["#e9e3d6","#dfe6ea","#efe2dc"][c];if(Ho(f,i,g,v,b),c===1)for(let T=10;T<g-6;T+=g/6)X(f,T,10,g/6-8,v-20,"rgba(220,235,245,0.9)"),f.fillStyle="rgba(255,255,255,0.45)",f.fillRect(T,10,g/6-8,(v-20)*.4);else{X(f,0,0,g,7,"rgba(255,255,255,0.4)");for(let T=g/3;T<g;T+=g/3)X(f,T-1,0,2,v,"rgba(0,0,0,0.08)")}X(f,0,v-6,g,6,"rgba(0,0,0,0.12)"),Fs(f,g*.3,v-6,10,10,.2)});i.add("kawara",272,256,(c,f,d,g)=>{X(c,0,0,d,g,"#58617a");for(let v=0;v<g;v+=16)bn(c,0,v,d,16,[[0,"rgba(255,255,255,0.12)"],[.7,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,0.35)"]]);for(let v=-4;v<d;v+=20)X(c,v,0,2,g,"rgba(0,0,0,0.18)");on(c,i,d,g,.12)}),i.add("wood",256,256,(c,f,d,g)=>{X(c,0,0,d,g,"#6d4c37");for(let v=0;v<g;v+=14)X(c,0,v,d,2,"rgba(25,15,8,0.4)"),X(c,0,v+2,d,1,"rgba(255,220,180,0.07)");on(c,i,d,g,.16)}),i.add("block",256,128,(c,f,d,g)=>{X(c,0,0,d,g,"#c9c7bf");for(let v=0;v<g;v+=32)for(let b=v/32%2?-32:0;b<d;b+=64)c.strokeStyle="rgba(80,80,80,0.35)",c.lineWidth=2,c.strokeRect(b+1,v+1,62,30);for(let v=0;v<d;v+=64)c.fillStyle="rgba(70,70,70,0.25)",c.fillRect(v+20,40,24,16);on(c,i,d,g,.15),Fs(c,0,0,d,40,.1)}),i.add("lantern",64,96,(c,f,d,g)=>{c.fillStyle="#d8352a",c.beginPath(),c.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),c.fill();for(let v=16;v<g-12;v+=7)X(c,4,v,d-8,1.5,"rgba(0,0,0,0.2)");X(c,d/2-14,2,28,8,"#222"),X(c,d/2-14,g-10,28,8,"#222"),It(c,"\u796D",d/2,g/2,d*.6,28,"#fff",900),f.fillStyle="#ff6a35",f.beginPath(),f.ellipse(d/2,g/2,d/2-2,g/2-8,0,0,7),f.fill()}),i.add("busstop",96,96,(c,f,d,g)=>{c.fillStyle="#fff",c.beginPath(),c.arc(d/2,g/2,d/2-1,0,7),c.fill(),c.strokeStyle="#d8231c",c.lineWidth=8,c.beginPath(),c.arc(d/2,g/2,d/2-6,0,7),c.stroke(),It(c,"\u30D0\u30B9\u505C",d/2,g/2,d*.66,20,"#1d3d8a",900)}),i.add("white",16,16,c=>X(c,0,0,16,16,"#ffffff")),i.add("sign_xing",120,120,(c,f,d,g)=>{c.save(),c.translate(d/2,g/2),c.rotate(Math.PI/4),c.fillStyle="#1b1b1b",c.fillRect(-41,-41,82,82),c.fillStyle="#f2c230",c.fillRect(-37,-37,74,74),c.restore(),c.fillStyle="#1b1b1b",c.fillRect(d/2-22,g/2-6,44,18),c.fillRect(d/2-16,g/2-16,18,12),c.fillRect(d/2+8,g/2-13,5,7),c.beginPath(),c.arc(d/2-12,g/2+15,5,0,7),c.arc(d/2+12,g/2+15,5,0,7),c.fill(),It(c,"\u8E0F\u5207",d/2,g/2+34,40,13,"#1b1b1b",900)}),["\u685C\u6A4B","\u5DDD\u539F\u6A4B","\u7DD1\u6A4B","\u6708\u898B\u6A4B"].forEach((c,f)=>i.add("bridge"+f,64,176,(d,g,v,b)=>{X(d,0,0,v,b,"#b9b5ab"),on(d,i,v,b,.2),X(d,6,6,v-12,b-12,"#a7a398"),Or(d,c,v/2,14,b-14,34,"#3f3c37",800)})),i.add("signal",240,84,(c,f,d,g)=>{X(c,0,0,d,g,"#4a4d52"),X(c,0,0,d,5,"#5c6066"),on(c,i,d,g,.12),[["#0d4f44",40],["#5c4a12",120],["#5a1814",200]].forEach(([v,b])=>{c.fillStyle="#26282c",c.beginPath(),c.arc(b,g/2,33,0,7),c.fill(),c.fillStyle=v,c.beginPath(),c.arc(b,g/2,27,0,7),c.fill()})}),i.add("ped_sig",64,128,(c,f,d,g)=>{X(c,0,0,d,g,"#3d4045"),c.fillStyle="#5a1814",c.fillRect(8,8,d-16,g/2-12),c.fillStyle="#0d4f44",c.fillRect(8,g/2+4,d-16,g/2-12),c.fillStyle="rgba(255,255,255,0.18)",c.beginPath(),c.arc(d/2,g*.18,6,0,7),c.fill(),c.fillRect(d/2-5,g*.24,10,18)}),i.add("tomare",256,96,(c,f,d,g)=>{c.clearRect(0,0,d,g),c.fillStyle="rgba(244,244,238,0.012)",c.fillRect(0,0,d,g),It(c,"\u6B62\u307E\u308C",d/2,g/2+4,d*.92,84,"#f4f4ee",900)}),["\u672C\u753A\u6B69\u9053\u6A4B","\u685C\u753A\u6B69\u9053\u6A4B","\u99C5\u524D\u6B69\u9053\u6A4B"].forEach((c,f)=>i.add("hodokyo"+f,256,44,(d,g,v,b)=>{X(d,0,0,v,b,"#1f4f96"),d.strokeStyle="#fff",d.lineWidth=3,d.strokeRect(4,4,v-8,b-8),It(d,c,v/2,b/2+1,v*.85,28,"#fff",800)}));let M=[["\u7A32\u7A42","\u3044\u306A\u307B","Inaho"],["\u5915\u51EA","\u3086\u3046\u306A\u304E","Y\u016Bnagi"],["\u6C34\u93E1","\u307F\u305A\u304B\u304C\u307F","Mizukagami"],["\u86CD\u91CE","\u307B\u305F\u308B\u306E","Hotaruno"]];M.forEach(([c,f,d],g)=>{let v=M[(g+3)%4][0],b=M[(g+1)%4][0];i.add("ekimei"+g,320,124,(T,w,_,S)=>{X(T,0,0,_,S,"#3a3d42"),X(T,4,4,_-8,S-8,"#f8f8f3"),It(T,f,_/2,20,_*.5,15,"#2b2b2b",700),It(T,c,_/2,52,_*.6,40,"#151515",900),It(T,d,_/2,80,_*.5,12,"#555",600),X(T,4,S-30,_-8,26,"#1f9a50"),T.fillStyle="#fff",Ph(T,12,700),T.textBaseline="middle",T.textAlign="left",T.fillText("\u2190 "+v,12,S-17),T.textAlign="right",T.fillText(b+" \u2192",_-12,S-17),on(T,i,_,S,.06),X(w,4,4,_-8,S-8,"#8a8a84")}),i.add("ekiplate"+g,220,48,(T,w,_,S)=>{X(T,0,0,_,S,"#4b3326"),on(T,i,_,S,.2),It(T,c+"\u99C5",_/2,S/2+1,_*.8,30,"#f3ead8",800)})});for(let c of["l","r"])i.add("chev_"+c,96,120,(f,d,g,v)=>{X(f,0,0,g,v,"#f4f4ef"),X(f,4,4,g-8,v-8,"#1e5bb8"),f.fillStyle="#f8f8f4",f.beginPath();let b=c==="r"?1:-1,T=g/2,w=v/2;f.moveTo(T-b*26,w-40),f.lineTo(T+b*22,w),f.lineTo(T-b*26,w+40),f.lineTo(T-b*8,w+40),f.lineTo(T+b*40,w),f.lineTo(T-b*8,w-40),f.closePath(),f.fill()});return["\u7D05\u8449\u30C8\u30F3\u30CD\u30EB","\u5CAC\u30C8\u30F3\u30CD\u30EB","\u661F\u898B\u30C8\u30F3\u30CD\u30EB"].forEach((c,f)=>i.add("tunnel"+f,360,80,(d,g,v,b)=>{X(d,0,0,v,b,"#e9e7e0"),X(d,4,4,v-8,b-8,"#24403b"),on(d,i,v,b,.08),It(d,c,v/2,b*.42,v*.8,38,"#f4f2ea",800),It(d,"L = 170 m",v/2,b*.8,v*.4,13,"#c9d6cf",600)})),i.add("yabane",64,112,(c,f,d,g)=>{X(c,0,0,d,g,"#f6f6f2"),c.fillStyle="#d42a22";for(let v=-20;v<g;v+=26)c.beginPath(),c.moveTo(4,v),c.lineTo(d/2,v+20),c.lineTo(d-4,v),c.lineTo(d-4,v+11),c.lineTo(d/2,v+31),c.lineTo(4,v+11),c.closePath(),c.fill();c.strokeStyle="#222",c.lineWidth=3,c.strokeRect(1.5,1.5,d-3,g-3)}),i.add("xing_plate",128,48,(c,f,d,g)=>{X(c,0,0,d,g,"#f6f6f2"),c.strokeStyle="#d8231c",c.lineWidth=4,c.strokeRect(3,3,d-6,g-6),It(c,"\u8E0F\u5207\u6CE8\u610F",d/2,g/2,d*.8,26,"#d8231c",900)}),i.add("rail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),X(c,0,0,d,7,"#e9ebee"),X(c,0,6,d,2,"rgba(60,70,80,0.5)"),X(c,0,g-6,d,6,"#d5d8dc");for(let v=3;v<d;v+=9)X(c,v,7,3,g-13,"#e2e5e9"),X(c,v+2,7,1,g-13,"rgba(70,80,90,0.45)")}),i.add("gogan",256,224,(c,f,d,g)=>{let v=At(4242);X(c,0,0,d,g,"#3d3f3c");let b=38,T=b/Math.SQRT2;c.save(),c.beginPath(),c.rect(0,22,d,g-22),c.clip();for(let w=-2;w*T<g+b;w++)for(let _=-2;_*b<d+b;_++){let S=_*b+(w%2?b/2:0),E=22+w*T,R=.52+v()*.17,C=Math.min(1,Math.max(0,(E-g*.55)/(g*.4))),I=Math.round(255*R*(1-.38*C)),A=`rgb(${I-4},${I-2},${I-9})`;c.fillStyle=A,c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E+T-3.5),c.lineTo(S-T+3.5,E),c.closePath(),c.fill(),c.fillStyle="rgba(255,255,255,0.12)",c.beginPath(),c.moveTo(S,E-T+3.5),c.lineTo(S+T-3.5,E),c.lineTo(S,E),c.closePath(),c.fill(),C>.3&&v()<.5&&(c.fillStyle=`rgba(70,96,52,${.25+.3*v()})`,c.beginPath(),c.arc(S+(v()-.5)*10,E+6,4+v()*6,0,7),c.fill())}c.restore(),bn(c,0,g*.55,d,g*.45,[[0,"rgba(26,32,28,0)"],[1,"rgba(26,32,28,0.55)"]]),X(c,0,0,d,22,"#8c8d87"),X(c,0,18,d,4,"rgba(0,0,0,0.3)"),X(c,0,0,d,3,"rgba(255,255,255,0.2)"),on(c,i,d,g,.12)}),i.add("wrail",240,80,(c,f,d,g)=>{c.clearRect(0,0,d,g),X(c,0,0,d,9,"#6a4a34"),X(c,0,0,d,2,"rgba(255,225,190,0.25)"),X(c,0,8,d,2,"rgba(20,10,5,0.45)"),X(c,0,g-10,d,10,"#5e412e"),X(c,0,g-10,d,2,"rgba(255,225,190,0.18)");for(let v=4;v<d;v+=12)X(c,v,9,5,g-19,"#634632"),X(c,v,9,1.2,g-19,"rgba(255,225,190,0.18)"),X(c,v+4,9,1,g-19,"rgba(20,10,5,0.4)");on(c,i,d,g,.15)}),i.add("woodwall",t,t,(c,f,d,g)=>{let v=At(5151);X(c,0,0,d,g,"#5e4130");for(let b=0;b<g;b+=16){let T=v();X(c,0,b,d,16,T<.15?"#6b4b37":T<.3?"#553a2b":"#5e4130"),X(c,0,b,d,2,"rgba(255,220,180,0.12)"),X(c,0,b+14,d,2,"rgba(15,8,4,0.45)");for(let w=v()*80;w<d;w+=60+v()*90)X(c,w,b+2,1.5,12,"rgba(15,8,4,0.35)")}bn(c,0,0,d,g,[[0,"rgba(255,240,220,0.06)"],[1,"rgba(0,0,0,0.16)"]]),on(c,i,d,g,.2)}),i}var GS=11,qS=[7,8,9,10,11],XS=[["\u713C\u304D\u9CE5","#fbf6f2","#c8102e","#ff4fd8",1],["\u5C45\u9152\u5C4B","#fdf8ee","#c41e2a",null,1],["\u305D\u3070","#fbf7ef","#1f2a6e","#3fd8ff",1],["\u6D0B\u54C1\u5E97","#2a8a5a","#ffffff",null,0],["\u30B9\u30CA\u30C3\u30AF","#2a1f4a","#ff8ae8","#b45cff",0],["\u30AB\u30E9\u30AA\u30B1","#c8287a","#ffffff","#ffd0f0",0],["\u4E2D\u83EF\u6599\u7406","#1f4fa8","#ffffff",null,0],["\u30E9\u30FC\u30E1\u30F3","#c8241c","#fff6d8","#ffc94a",0],["\u55AB\u8336","#fdf4e4","#6a3a1e","#ffb84a",1],["\u713C\u8089","#fbf6f2","#b8186a","#b45cff",1],["\u713C\u304D\u9CE5","#fbf4fb","#a0128a","#b45cff",1]],Dl=(i,e,t,n,s,r)=>{i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()};function YS(i,e,t,n,s,[r,o,l,a,u]){let h=n/160,p=6*h,m=12*h;X(e,0,0,n,s,"#2a2b30"),Dl(e,p*.5,p*.5,n-p,s-p,m),e.fillStyle=o,e.fill(),e.save(),Dl(e,p*.5,p*.5,n-p,s-p,m),e.clip();let x=e.createRadialGradient(n/2,s/2,n*.1,n/2,s/2,s*.62);x.addColorStop(0,u?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"),x.addColorStop(1,"rgba(0,0,0,0.14)"),e.fillStyle=x,e.fillRect(0,0,n,s),e.restore();let y=(d,g,v,b)=>{d.save(),Dl(d,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),d.shadowColor=g,d.shadowBlur=v*h,d.strokeStyle=g,d.lineWidth=6*h,d.stroke(),d.shadowBlur=0,d.strokeStyle=b,d.lineWidth=2.2*h,d.stroke(),d.restore()};a?y(e,a,10,"#fff4fb"):(e.save(),Dl(e,p+5*h,p+5*h,n-2*p-10*h,s-2*p-10*h,m*.8),e.strokeStyle=l,e.globalAlpha=.7,e.lineWidth=3*h,e.stroke(),e.restore());let M=p+20*h,c=s-p-20*h,f=Math.min(n*.62,(c-M)/[...r].length);Or(e,r,n/2,M,c,f,l,900,u?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.25)"),on(e,i,n,s,.05),X(t,0,0,n,s,"#000"),Dl(t,p*.5,p*.5,n-p,s-p,m),t.fillStyle=u?"#b4aea4":a&&o==="#2a1f4a"?"#100c1c":o,t.globalAlpha=u?1:.55,t.fill(),t.globalAlpha=1,a&&y(t,a,12,"#ffffff"),Or(t,r,n/2,M,c,f,u||o==="#2a1f4a"?l:"#ffffff",900),u&&(t.save(),t.globalCompositeOperation="multiply",Or(t,r,n/2,M,c,f,"#8a8a8a",900),t.restore())}function ZS(i,e,t,n,s){let r=At(7331),o=s/1.26/(n/3);e.clearRect(0,0,n,s);let l=11,a=n/l,u=.15*(s/1.26);X(e,0,0,n,s-u*.5,"#4d5f92");for(let h=0;h<l;h++){let p=h*a,m=e.createLinearGradient(p,0,p+a,0);m.addColorStop(0,"#2c3760"),m.addColorStop(.18,"#5a70a8"),m.addColorStop(.45,"#9fb4e0"),m.addColorStop(.7,"#6a80b8"),m.addColorStop(1,"#33416e"),e.fillStyle=m,e.fillRect(p,0,a,s-u*.5)}for(let h=s-u*.5-52;h>0;h-=52)bn(e,0,h,n,10,[[0,"rgba(20,26,50,0.45)"],[1,"rgba(20,26,50,0)"]]),X(e,0,h-2,n,2,"rgba(200,215,240,0.35)");for(let h=0;h<l;h++){let p=(h+.5)*a,m=s-u*.5,x=a*.47;e.save(),e.translate(p,m),e.scale(1,o),e.fillStyle="#26305a",e.beginPath(),e.arc(0,0,x,0,7),e.fill(),e.fillStyle="#5c72aa",e.beginPath(),e.arc(0,0,x*.8,0,7),e.fill(),e.fillStyle="rgba(190,206,240,0.8)",e.beginPath(),e.arc(-x*.2,-x*.25,x*.38,0,7),e.fill(),e.fillStyle="#3a4878",e.beginPath(),e.arc(0,0,x*.22,0,7),e.fill(),e.restore()}e.save(),e.globalCompositeOperation="source-atop",e.globalAlpha=.12,e.fillStyle=i.grain,e.fillRect(0,0,n,s),e.restore();for(let h=0;h<40;h++)e.fillStyle=r()<.5?"rgba(255,255,255,0.08)":"rgba(0,0,20,0.1)",e.fillRect(r()*n,r()*(s-u),a*(.5+r()),3+r()*6)}function KS(i,e,t,n,s,r){X(e,0,0,n,s,"#1c2b5e"),X(e,0,0,n,4,"rgba(255,255,255,0.3)"),X(e,0,s-5,n,5,"rgba(0,0,0,0.25)"),e.strokeStyle="#d9b44a",e.lineWidth=2,e.strokeRect(7,7,n-14,s-14),It(e,r,n/2,s/2+2,n*.66,52,"#f6d35a",900,"rgba(60,40,0,0.5)"),on(e,i,n,s,.06),X(t,0,0,n,s,"#0a1024"),It(t,r,n/2,s/2+2,n*.66,52,"#f0c850",900)}function $S(i,e,t,n,s,r,o){let l=At(r),a=n/360;X(e,0,0,n,s,"#4b3426"),bn(e,0,0,n,s,[[0,"rgba(255,230,200,0.08)"],[1,"rgba(0,0,0,0.2)"]]);let u=n*.12,h=s*(o?.3:.17),p=n*.76,m=s*(o?.62:.56);for(let x of[e,t])X(x,u,h,p,m,"#e9b56c"),bn(x,u,h,p,m,[[0,"rgba(255,240,200,0.55)"],[1,"rgba(110,60,25,0.4)"]]);if(!o)for(let x=h+m*.32;x<h+m-6*a;x+=m*.22){for(let y=u+4*a;y<u+p-10*a;y+=(9+l()*12)*a){let M=(10+l()*12)*a;X(e,y,x-M,7*a,M,["#c0503a","#3a6ab0","#e8c050","#5a9a50","#d07a9a"][Math.floor(l()*5)])}X(e,u,x,p,5*a,"#6e4a30")}o&&(X(e,u,h-s*.12,p,s*.16,"#28356a"),X(t,u,h-s*.12,p,s*.16,"#000")),X(e,u+p/2-4*a,h,8*a,m,"#4b3426"),X(t,u+p/2-4*a,h,8*a,m,"#000"),X(e,0,h+m,n,6*a,"#3a281d"),on(e,i,n,s,.15)}function JS(i,e,t,n,s,r,o){let l=n/360;if(X(e,0,0,n,s,r?"#5e4130":"#ece2cc"),r)for(let m=0;m<s;m+=16*l)X(e,0,m,n,2*l,"rgba(15,8,4,0.4)");for(let m of[0,n-14*l])X(e,m,0,14*l,s,"#4b3426");X(e,0,s-12*l,n,12*l,"#3a281d");let a=n*.2,u=s*.22,h=n*.6,p=s*.46;X(e,a-8*l,u-8*l,h+16*l,p+16*l,"#4a3020"),bn(e,a,u,h,p,[[0,"#4f78b8"],[1,"#a6c8ec"]]),X(e,a+h/2-3*l,u,6*l,p,"#4a3020"),o&&(X(t,a,u,h,p,"#ffcf8f"),X(t,a+h/2-3*l,u,6*l,p,"#000")),on(e,i,n,s,.12)}function jS(i){let e=0,t=0,n=0;for(let[s,r]of i)e+s+4>Bs&&(e=0,t+=n+4,n=0),e+=s+4,n=Math.max(n,r);return t+n}function $g(i,e,t,n){let s=e==="hi"?1:.5,r=[360*s,432*s],o=[360*s,348*s],l=[160*s,384*s],a=[512,76],u=[],h=[],p=[];for(let c=0;c<GS;c++)u.push(["shop_p"+c,r,(f,d,g,v,b)=>$S(f,d,g,v,b,6100+c,c===2||c===7||c===10)]);for(let c of qS)for(let f of[!1,!0])h.push(["win"+c+(f?"L":""),o,(d,g,v,b,T)=>JS(d,g,v,b,T,c===8||c===11,f)]);XS.forEach((c,f)=>p.push(["vsB"+f,l,(d,g,v,b,T)=>YS(d,g,v,b,T,c)]));let m=[...u.slice(0,5),p[0],...u.slice(5,10),p[1],u[10],...h.slice(0,4),p[2],...h.slice(4,9),p[3],h[9],...p.slice(4),["hsN_\u6D0B\u54C1\u5E97",a,(c,f,d,g,v)=>KS(c,f,d,g,v,"\u6D0B\u54C1\u5E97")],["kawaraC",[240,256],ZS]],x=jS(m.map(c=>c[1])),y=Math.ceil((x+(n?16+n.rows:4))/4)*4,M=new Ch(y,2,i.cells);for(let[c,[f,d],g]of m)M.add(c,f,d,(v,b,T,w)=>g(M,v,b,T,w));if(t){let c=t.img.width,f=t.img.height;for(let d of t.tiles)M.paintCell(d.name,t.img,d.x*c,d.y*f,d.w*c,d.h*f,d.ey<0?-1:d.ey*f)}return M.houses=!!n&&QS(M,n),M}function QS(i,e){let n=i.y+i.rowH+4+12;if(n+e.rows>i.H)return!1;i.x=0,i.y=n,i.rowH=0,i.a.clearRect(0,n-8,Bs,i.H-n+8);try{for(let s of e.tiles)i.add(s.name,s.w,s.h,(r,o,l,a)=>{r.clearRect(0,0,l,a),r.drawImage(e.img,s.x,s.y,s.w,s.h,0,0,l,a),o.drawImage(e.img,s.x,s.ey,s.w,s.h,0,0,l,a)})}catch(s){return console.warn("painted houses:",s.message),!1}return!0}function Jg(i){let l=Rh(1024,3328),a=l.getContext("2d"),u=At(321),h={},p={leafA:["#2f6634","#4a8a3e","#6aa64a","#94c460","#c4e08a"],leafB:["#476e2e","#6a9238","#8db44a","#b4d066","#e0ec9a"],sakura:["#c97f9e","#e8a3bf","#f6c3d5","#ffdce8","#fff6fa"],pine:["#24503a","#33684a","#468052","#5f9a5e","#8cbc78"],momiji:["#8f1d18","#bf321d","#de5426","#ef8a34","#f7c062"],ginkgo:["#a87a1a","#d3a11e","#e9c232","#f5da56","#fff0a0"]},m=(b,T,w)=>{let _=p[b],S=256,E=b==="pine",R=b==="sakura";a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let C=[[S,S,E?80:92]];for(let A=0;A<(E?10:14);A++){let L=u()*6.28,D=45+u()*120;C.push([S+Math.cos(L)*D,S+Math.sin(L)*D*(E?.42:.9),Math.min(34+u()*52,232-D)])}let I=R?2300:E?2600:2300;for(let A=0;A<I;A++){let L=C[Math.floor(u()*C.length)],D=u()*6.28,O=Math.sqrt(u())*L[2],z=L[0]+Math.cos(D)*O,F=L[1]+Math.sin(D)*O*(E?.45:1),V=O/L[2],k=Math.min(4,Math.max(0,Math.floor(.55+u()*2.7+(V>.82?.5:0))));if(a.fillStyle=_[k],R){let q=7+u()*8;a.beginPath(),a.arc(z,F,q,0,7),a.fill(),u()<.25&&(a.fillStyle=_[4],a.beginPath(),a.arc(z-q*.3,F-q*.3,q*.4,0,7),a.fill())}else if(E)a.save(),a.translate(z,F),a.rotate((u()-.5)*1.2),a.fillRect(-11,-1.6,22,3.2),a.restore();else if(b==="momiji"){let q=8+u()*7;a.save(),a.translate(z,F),a.rotate(u()*6.28),a.beginPath();for(let $=0;$<10;$++){let Me=$%2?q*.42:q,Te=$/10*6.2832;a.lineTo(Math.cos(Te)*Me,Math.sin(Te)*Me)}a.closePath(),a.fill(),a.restore()}else if(b==="ginkgo"){let q=9+u()*7;a.save(),a.translate(z,F),a.rotate(u()*6.28),a.beginPath(),a.moveTo(0,0),a.arc(0,0,q,-.95,.95),a.closePath(),a.fill(),a.restore()}else{let q=9+u()*10;a.beginPath(),a.ellipse(z,F,q,q*.55,u()*6.28,0,7),a.fill()}}for(let A=0;A<90;A++){let L=u()*6.28,D=150+u()*85,O=S+Math.cos(L)*D,z=S+Math.sin(L)*D*(E?.45:.92);a.fillStyle=_[1+Math.floor(u()*4)],E?(a.save(),a.translate(O,z),a.rotate((u()-.5)*1.2),a.fillRect(-9,-1.6,18,3.2),a.restore()):(a.beginPath(),a.arc(O,z,R?6+u()*6:7+u()*6,0,7),a.fill())}if(R)for(let A=0;A<14;A++){a.strokeStyle="rgba(150,90,100,0.35)",a.lineWidth=1.5;let L=S+(u()-.5)*300,D=S+60+u()*120;a.beginPath(),a.moveTo(L,D),a.lineTo(L+(u()-.5)*40,D-20-u()*30),a.stroke()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},x=(b,T,w,_)=>{a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let S=["#2c5a2a","#3e7334","#56903f","#79ad4f","#a8cc6c"],E=_?120:170;for(let R=0;R<E;R++){let C=256+(u()-.5)*(_?330:380)*Math.sqrt(u()),I=150+u()*(_?230:300)*(1-Math.abs(C-256)/300),A=(C-256)*.35+(u()-.5)*90,L=9+u()*9,D=C+A,O=512-I,z=Math.min(4,Math.floor(u()*2.2+I/380*2.6)),F=a.createLinearGradient(0,512,0,O);F.addColorStop(0,S[0]),F.addColorStop(.6,S[Math.max(1,z-1)]),F.addColorStop(1,S[z]),a.fillStyle=F,a.beginPath(),a.moveTo(C-L/2,512),a.quadraticCurveTo(C-L/2+A*.3,512-I*.55,D,O),a.quadraticCurveTo(C+L/2+A*.3,512-I*.5,C+L/2,512),a.fill()}if(_)for(let R=0;R<16;R++){let C=110+u()*290,I=150+u()*200,A=u();if(a.strokeStyle="#3e7334",a.lineWidth=5,a.beginPath(),a.moveTo(C+(u()-.5)*20,512),a.quadraticCurveTo(C+(u()-.5)*30,(I+512)/2,C,I),a.stroke(),A<.55){a.fillStyle="#fbfaf2";for(let L=0;L<12;L++){let D=L/12*6.283;a.beginPath(),a.ellipse(C+Math.cos(D)*11,I+Math.sin(D)*11,9,4.5,D,0,7),a.fill()}a.fillStyle="#f2c230",a.beginPath(),a.arc(C,I,8,0,7),a.fill()}else if(A<.85)a.fillStyle="#f6c62e",a.beginPath(),a.arc(C,I,15,0,7),a.fill(),a.fillStyle="#ffe27a",a.beginPath(),a.arc(C-3,I-3,8,0,7),a.fill();else{a.fillStyle="#9b7fd6";for(let L=0;L<6;L++)a.beginPath(),a.arc(C+(u()-.5)*16,I+(u()-.5)*16,6,0,7),a.fill()}}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},y=(b,T,w)=>{let _=At(97);a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip(),a.lineCap="round";let S=(E,R,C,I,A,L)=>{let D=E+Math.cos(C)*I,O=R+Math.sin(C)*I;if(a.strokeStyle=L>3?"#76605f":L>1?"#6c5458":"#62494f",a.lineWidth=A,a.beginPath(),a.moveTo(E,R),a.lineTo(D,O),a.stroke(),L<=0||A<.7)return;let z=2+(_()<.4?1:0);for(let F=0;F<z;F++){let V=C+(_()-.5)*1.1+(F-(z-1)/2)*.42;V=V*.8+-Math.PI/2*.2,S(D,O,V,I*(.62+_()*.2),A*.68,L-1)}};for(let E=0;E<6;E++)S(256+(_()-.5)*40,500,-Math.PI/2+(_()-.5)*.9,110+_()*50,5.6,6);a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},M=(b,T,w,_,S,E=4,R=!1)=>{let C=At(_),I=1024,A=504,L=R?246/504:1;a.save(),a.translate(T,w+8*L),a.beginPath(),a.rect(0,0,512,A*L),a.clip(),a.scale(.5,L);let D=["#09240f","#113417","#1b481f","#29602c","#3c7a3a","#579442","#7cb04c","#a3cb5e","#c8e27e"],O=$=>{let Me=$/I;return(.5+.5*Math.min(1,Me/.45)**.8)*(1-.4*Math.max(0,(Me-.9)/.1))},z=($,Me,Te,Se)=>{Me=Math.min(Me,A*.985);let G=$+Te,J=A-Me,ve=$+Te*.25,Ce=A-Me*.62-Math.abs(Te)*.35;a.moveTo($-Se/2,A),a.quadraticCurveTo(ve-Se*.42,Ce,G,J),a.quadraticCurveTo(ve+Se*.42,Ce+Se*.5,$+Se/2,A),a.closePath()},F=[];for(let $=24+C()*24;$<I-20;$+=($<I*.25?56:44)+C()*26)F.push($);let V=()=>F[Math.floor(C()*F.length)],k=($,Me,Te,Se,G,J,ve,Ce,te)=>{let ge=D.map(()=>[]);for(let Fe=0;Fe<$;Fe++){let Oe=V(),Ie=Oe+(C()-.5)*34,qe=O(Ie),ie=Ie/I,we=A*(Me+C()*(Te-Me))*qe*1.12,Q=(C()-.5)*Se+(Ie-I*.45)*.12;ge[Math.min(8,Ce+Math.floor(C()*(te-Ce+1)+ie*1.2))].push([Ie,we,Q,G+C()*(J-G)])}ge.forEach((Fe,Oe)=>{if(!Fe.length)return;let Ie=a.createLinearGradient(0,A,0,A*(1-Te*.8));Ie.addColorStop(0,D[ve]),Ie.addColorStop(.55,D[Math.round((ve+Oe)/2)]),Ie.addColorStop(1,D[Oe]),a.fillStyle=Ie,a.beginPath();for(let qe of Fe)z(qe[0],qe[1],qe[2],qe[3]);a.fill()})};k(360,.25,.55,150,12,22,0,2,3),k(240,.4,.78,260,10,17,1,4,6);let q=[];for(let $=0;$<E;$++){let Me=I*(.14+C()*.74),Te=O(Me);q.push({fx:Me,fy:Math.max(56,A-A*(.56+C()*.38)*Te*1.05),kind:C()<S?0:1,sz:.85+C()*.4,tilt:.72+C()*.28,rot:C()*6.28,sx:Me+(C()-.5)*60})}a.lineCap="round";for(let $ of q)a.strokeStyle="#2c6623",a.lineWidth=6,a.beginPath(),a.moveTo($.sx,A),a.quadraticCurveTo(($.sx+$.fx)/2+(C()-.5)*40,(A+$.fy)/2,$.fx,$.fy+8),a.stroke();k(150,.5,.92,330,9,16,2,6,7);for(let $ of q){if(a.save(),a.translate($.fx,$.fy),a.scale(1,$.tilt),$.kind===0){let Me=38*$.sz;for(let Te=0;Te<16;Te++){let Se=$.rot+Te/16*6.283;a.fillStyle=Math.sin(Se)>.4?"#e2e3ea":"#fdfdf6",a.beginPath(),a.ellipse(Math.cos(Se)*Me*.56,Math.sin(Se)*Me*.56,Me*.48,Me*.14,Se,0,7),a.fill()}a.fillStyle="#f2b51a",a.beginPath(),a.arc(0,0,Me*.28,0,7),a.fill(),a.fillStyle="#fbe060",a.beginPath(),a.arc(-Me*.07,-Me*.07,Me*.14,0,7),a.fill()}else{let Me=40*$.sz;for(let Te=0;Te<5;Te++){let Se=$.rot+Te/5*6.283;a.fillStyle="#fccc1e",a.beginPath(),a.ellipse(Math.cos(Se)*Me*.52,Math.sin(Se)*Me*.52,Me*.52,Me*.38,Se,0,7),a.fill()}for(let Te=0;Te<5;Te++){let Se=$.rot+Te/5*6.283;a.fillStyle="#ffe873",a.beginPath(),a.ellipse(Math.cos(Se)*Me*.62,Math.sin(Se)*Me*.62-3,Me*.26,Me*.15,Se,0,7),a.fill()}a.fillStyle="#e39b14",a.beginPath(),a.arc(0,0,Me*.2,0,7),a.fill()}a.restore()}k(40,.42,.85,280,8,14,3,6,7),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512*L)/3328,v1:1-(w+8*L)/3328}},c=(b,T,w,_)=>{let S=At(_),E=["#173d1d","#21512a","#2f6a33","#46853c","#64a048","#8dbd58","#b6d872"];a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,512),a.clip();let R=[];for(let C=0;C<15;C++){let I=(C+S()*.6)/15,A=40+I*432,L=500-300*Math.sqrt(Math.max(0,1-((A-256)/232)**2));R.push([A,L+60+S()*50,54+S()*46])}for(let C=0;C<2600;C++){let I=R[Math.floor(S()*R.length)],A=S()*6.283,L=Math.sqrt(S())*I[2],D=I[0]+Math.cos(A)*L,O=Math.min(505,I[1]+Math.sin(A)*L*.85),z=Math.sin(A)<-.2?1:0,F=Math.max(0,Math.min(6,Math.floor(S()*2.4+(1-O/512)*3.2+z*1.3+L/I[2]*.8)));a.fillStyle=E[F],a.beginPath(),a.ellipse(D,O,7+S()*7,4+S()*4,S()*6.28,0,7),a.fill()}for(let C=0;C<130;C++){let I=R[Math.floor(S()*R.length)],A=-Math.PI*(.1+S()*.8),L=(.35+S()*.6)*I[2],D=I[0]+Math.cos(A)*L,O=I[1]+Math.sin(A)*L*.85;if(O>470)continue;let z=6+S()*5,F=S()*6.28,V=S()<.12;a.fillStyle=V?"#f3d2dc":"#fbfbf6";for(let k=0;k<5;k++){let q=F+k/5*6.283;a.beginPath(),a.ellipse(D+Math.cos(q)*z*.55,O+Math.sin(q)*z*.5,z*.5,z*.36,q,0,7),a.fill()}a.fillStyle="#d9b628",a.beginPath(),a.arc(D,O,z*.22,0,7),a.fill()}a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+512)/3328,v1:1-w/3328}},f=(b,T,w,_)=>{let S=At(_),E=1024,R=512;a.save(),a.translate(T,w),a.beginPath(),a.rect(0,0,512,250),a.clip(),a.scale(.5,250/512);let C=["#0c2a12","#143a19","#1f4f23","#2e682f","#46843a","#66a047","#8ebd58","#b6d874"],I=O=>Math.max(0,1-((O-E/2)/(E*.47))**2)**.6,A=(O,z,F,V)=>{let k=O+F,q=R-z,$=O+F*.3,Me=R-z*.6;a.moveTo(O-V/2,R),a.quadraticCurveTo($-V*.5,Me,k,q),a.quadraticCurveTo($+V*.5,Me+V*.4,O+V/2,R),a.closePath()},L=(O,z,F,V,k,q,$)=>{let Me=C.map(()=>[]);for(let Te=0;Te<O;Te++){let Se=E/2+(S()-.5)*E*.8*Math.sqrt(S()),G=I(Se),J=R*.9*G*(z+S()*(F-z)),ve=(Se-E/2)*.22+(S()-.5)*120,Ce=Math.min(7,q+Math.floor(S()*($-q+1)));G>.03&&Me[Ce].push([Se,J,ve,V+S()*(k-V)])}Me.forEach((Te,Se)=>{if(!Te.length)return;let G=a.createLinearGradient(0,R,0,R*.1);G.addColorStop(0,C[Math.max(0,Se-3)]),G.addColorStop(1,C[Se]),a.fillStyle=G,a.beginPath();for(let J of Te)A(J[0],J[1],J[2],J[3]);a.fill()})};L(150,.35,.7,26,46,1,3),L(110,.5,.92,22,38,3,5);let D=[["#d27ac4","#f4bce6"],["#9f74da","#d2b6f4"],["#fbfbf6","#ffffff"],["#ea88b2","#fcc8de"]];for(let O=0;O<48;O++){let z=E/2+(S()-.5)*E*.84,F=I(z),V=R-R*.9*F*(.55+S()*.42),[k,q]=D[Math.floor(S()*D.length)],$=22+S()*12,Me=S()*6.28;if(!(F<.15)){a.fillStyle=k;for(let Te=0;Te<5;Te++){let Se=Me+Te*1.2566;a.beginPath(),a.ellipse(z+Math.cos(Se)*$*.55,V+Math.sin(Se)*$*.45,$*.52,$*.36,Se,0,7),a.fill()}a.fillStyle=q;for(let Te=0;Te<5;Te++){let Se=Me+Te*1.2566;a.beginPath(),a.ellipse(z+Math.cos(Se)*$*.45,V+Math.sin(Se)*$*.35-3,$*.25,$*.16,Se,0,7),a.fill()}a.fillStyle=k==="#fbfbf6"?"#f2b51a":"#6e2f62",a.beginPath(),a.arc(z,V,$*.18,0,7),a.fill()}}L(34,.4,.75,20,34,4,6),a.restore(),h[b]={u0:T/1024,u1:(T+512)/1024,v0:1-(w+250)/3328,v1:1-w/3328}};y("twigs",0,0),c("flowerbush",512,0,6151),m("leafA",0,512),m("leafB",512,512),m("sakura",0,1024),m("pine",512,1024),m("momiji",0,1536),m("ginkgo",512,1536),x("grass",0,2304,!1),x("flowers",512,2304,!0),M("bankA",0,2816,4111,.7),M("bankB",512,2816,4127,.35),f("bedA",0,2048,7741),M("bankC",512,2048,4133,0,0,!0);let d=new ti(l);d.colorSpace=Gt,d.anisotropy=Math.min(4,i.capabilities.getMaxAnisotropy());let g=1-2816/3328,v=1-2824/3328;return{tex:d,cells:h,tuftV:[g,1-2304/3328,v,(g+v)/2]}}var ln=[1,1,1],Re={pole:_e("#b1b0a9"),metal:_e("#8d9198"),black:_e("#2a2b30"),yellow:_e("#f2c230"),white:_e("#f4f3ee"),trans:_e("#a0a3a8"),lampPole:_e("#727780"),lampHead:_e("#dcdcd6"),trunk:_e("#6a5444"),trunkDark:_e("#4b3a33"),bark:_e("#7a6556"),leaf:_e("#86ba4c"),leafShade:_e("#2c6640"),sakura:_e("#ffd3e3"),sakuraShade:_e("#de94b4"),pine:_e("#55874c"),pineShade:_e("#1d4632"),cedar:_e("#41713e"),cedarShade:_e("#1b3e2a"),roof:_e("#bdbbb3"),parapet:_e("#dcdad2"),pipe:_e("#c4c4bf"),orange:_e("#f07a22"),red:_e("#d8352a"),vermilion:_e("#e2482c"),concrete:_e("#c9c7c0"),stone:_e("#a8a69e"),terracotta:_e("#b8653d"),rail:_e("#eeeeea")},ad=["#f4ead8","#efe2c8","#f6efe2","#e9d8bc","#f2e4cf","#e6d5c0"].map(_e),Os=["#f6f2ea","#efe4d2","#e7eaee","#f3e2d8","#e2eadf","#ebe3f0","#f6ecd4","#e1e7f1","#ececec","#ddd2c4","#f2d9cf","#d8e6ec"].map(_e),e3=["#c8352b","#2f7d4a","#1f4e9c","#e8c070","#7a2f2f","#3b6e8f"].map(_e),jg=["#c62f2a","#2b46a6","#7b3c9e","#b8336f","#a8282a","#273b86"].map(_e),Fh=null;function h1(i){Fh=i}var si=i=>Fh.uv(i),Xo=si,f1=(i,e)=>{let t=1;for(;Fh.has(e+(t+1));)t++;if(t===1)return e;let n=Math.floor(i()*t);return n?e+(n+1):e};function d1(i,e,t,n,s=0){let r=new Qe().makeRotationY(s);r.setPosition(e,t,n);let o=new Qe().multiplyMatrices(i,r);return o.groundY=i.groundY,o}var ld=(i,e,t,n)=>{if(!i.hasLit)return;let s=e.charCodeAt(0);if(s===118&&e.charCodeAt(1)===115){i.litV=12;return}if(s===115&&e.startsWith("shop_")){let l=e[5];(l==="g"&&e[6]==="l"||l==="d"||l==="k"||l==="c"||l==="n"||l==="p")&&(i.litV=6);return}if(s!==119)return;let r=e.charCodeAt(e.length-1);if(r!==76&&r!==67)return;let o=Math.sin(t*12.9898+n*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;i.litV=24+Math.floor((o-Math.floor(o))*231)},an=(i,e,t,n,s,r,o,l=ln)=>{ld(i,o,e+r,n),i.quad([t,n,r],[e,n,r],[e,s,r],[t,s,r],l,si(o)),i.litV=0},zi=(i,e,t,n,s,r,o,l=ln)=>{ld(i,o,e+t,s),i.quad([e,s,n],[e,s,t],[e,r,t],[e,r,n],l,si(o)),i.litV=0},Hi=(i,e,t,n,s,r,o,l=ln)=>{ld(i,o,e+t,s),i.quad([e,s,t],[e,s,n],[e,r,n],[e,r,t],l,si(o)),i.litV=0},Go=(i,e,t,n,s,r)=>i.quad(e,t,n,n,s,r?si(r):void 0),t3=[[0,10.8,-.85],[0,10.8,-.3],[0,10.8,.3],[0,10.8,.85],[0,9.68,-.7],[0,9.68,0],[0,9.68,.7],[0,5.72,-.3],[0,5.72,.3]];function p1(i){return t3.map(e=>new H(e[0],e[1],e[2]).applyMatrix4(i))}function cd(i,e,t,n={}){let s=i.color;s.setM(e);let r=11.2;s.cyl(0,0,0,.17,.12,r,10,Re.pole);for(let u=0;u<5;u++)s.cyl(0,.25+u*.3,0,.185,.185,.15,10,u%2?Re.black:Re.yellow,!1);s.box(-.05,r-.65,-.95,.05,r-.53,.95,Re.metal),s.box(-.05,r-1.75,-.8,.05,r-1.65,.8,Re.metal);let o=[-.85,-.3,.3,.85],l=[-.7,0,.7];for(let u of o)s.cyl(0,r-.53,u,.05,.035,.17,6,Re.white);for(let u of l)s.cyl(0,r-1.65,u,.045,.03,.15,6,Re.white);n.trans&&(s.cyl(0,6.9,.5,.27,.27,.9,12,Re.trans),s.cyl(0,7.8,.5,.27,.18,.1,12,Re.trans),s.box(-.06,7.2,.12,.06,7.35,.26,Re.metal),t()<.5&&s.cyl(0,6,-.48,.2,.2,.62,10,Re.trans)),s.box(-.04,5.6,-.4,.04,5.68,.4,Re.metal),t()<.6&&s.box(-.17,3,-.3,.17,3.5,-.13,Re.concrete);for(let u=2.4,h=0;u<r-2;u+=.45,h++)s.rod([0,u,0],[h%2?.3:-.3,u,0],.015,.015,3,Re.metal);return i.atlas.setM(e),an(i.atlas,-.12,.12,1.7,2.45,-.2,"pole_plate"),t()<.4&&an(i.atlas,-.14,.14,2.6,3,-.2,"poster"+Math.floor(t()*4)),[...o.map(u=>[0,r-.4,u]),...l.map(u=>[0,r-1.52,u]),[0,5.72,-.3],[0,5.72,.3]].map(u=>new H(u[0],u[1],u[2]).applyMatrix4(e))}var Ih=new H;function fr(i,e,t,n,s,r){i.lamps&&(Ih.set(t,n,s).applyMatrix4(e),i.lamps.push(Ih.x,Ih.y,Ih.z,r))}function ud(i,e,t,n={}){let s=i.color;s.setM(e),fr(i,e,0,6.28,-1.42,1.1),s.cyl(0,0,0,.08,.06,6,8,Re.lampPole),s.rod([0,5.95,0],[0,6.35,-.45],.05,.045,6,Re.lampPole),s.rod([0,6.35,-.45],[0,6.45,-1.35],.045,.04,6,Re.lampPole),s.box(-.17,6.34,-1.72,.17,6.52,-1.12,Re.lampHead),i.lamp.setM(e),i.lamp.box(-.14,6.29,-1.68,.14,6.34,-1.16,ln);let r=n.poolY??.04;i.pool.setM(e),i.pool.quad([-3.6,r,2.2],[3.6,r,2.2],[3.6,r,-5.2],[-3.6,r,-5.2],ln,{u0:0,u1:1,v0:0,v1:1})}function m1(i,e,t=.04){let n=i.color;n.setM(e),fr(i,e,0,6.6,-1.5,1.1),n.rod([0,6.2,-.12],[0,6.75,-.7],.045,.04,6,Re.lampPole),n.rod([0,6.75,-.7],[0,6.8,-1.45],.04,.035,6,Re.lampPole),n.box(-.16,6.68,-1.78,.16,6.86,-1.22,Re.lampHead),i.lamp.setM(e),i.lamp.box(-.13,6.63,-1.74,.13,6.68,-1.26,ln),i.pool.setM(e),i.pool.quad([-3.6,t,2.2],[3.6,t,2.2],[3.6,t,-5.2],[-3.6,t,-5.2],ln,{u0:0,u1:1,v0:0,v1:1})}function Wo(i,e,t,n,s,r,o=!1,l=!1){let a=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let u=0;u<4;u++){let[h,p]=a[u],[m,x]=a[(u+1)%4];i.quad([h*n,e,p*n],[h*s,t,p*s],[m*s,t,x*s],[m*n,e,x*n],r)}o&&s>.001&&i.quad([-s,t,-s],[-s,t,s],[s,t,s],[s,t,-s],r),l&&i.quad([-n,e,-n],[n,e,-n],[n,e,n],[-n,e,n],r)}var n3=_e("#202127");function Ul(i,e){let t=i.color;t.setM(e),fr(i,e,0,3.4,0,.9);let n=n3,s={noBottom:!0};t.cyl(0,0,0,.12,.1,.28,6,n),t.cyl(0,.28,0,.065,.05,2.8,6,n,!1),Wo(t,3.04,3.17,.05,.17,n,!0);for(let[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.box(r*.155-.018,3.17,o*.155-.018,r*.155+.018,3.6,o*.155+.018,n,null,s);t.box(-.165,3.6,-.165,.165,3.64,.165,n,null,s),Wo(t,3.64,3.84,.23,.05,n),Wo(t,3.6,3.64,.2,.23,n,!1,!0),t.cyl(0,3.84,0,.035,0,.12,4,n,!1),i.lamp.setM(e),i.lamp.box(-.14,3.17,-.14,.14,3.6,.14,ln),i.pool.setM(e),i.pool.quad([-2.5,.04,2.5],[2.5,.04,2.5],[2.5,.04,-2.5],[-2.5,.04,-2.5],ln,{u0:0,u1:1,v0:0,v1:1})}function hd(i,e,t){let n=Math.floor(t()*3),s=[Re.red,_e("#2f6fd8"),Re.white][n];i.color.setM(e),i.color.box(-.5,0,.01,.5,1.83,.75,s),i.color.box(-.53,1.83,-.06,.53,1.9,.78,Un(s,.8)),i.atlas.setM(e),an(i.atlas,-.5,.5,0,1.83,0,"vend"+n)}function rd(i,e,t,n,s){i.color.setM(e),i.color.box(t-.4,n,s,t+.4,n+.56,s+.28,_e("#e6e6e1")),i.atlas.setM(e),an(i.atlas,t-.4,t+.4,n,n+.56,s-.003,"ac")}function g1(i,e,t){let n=i.color;n.setM(e);let s=t.pick([_e("#c8ccd2"),_e("#c0392b"),_e("#2c6fb7"),_e("#2b2b2b"),_e("#e8c84a"),_e("#e98fb0")]);for(let o of[-.52,.52])for(let l=0;l<12;l++){let a=l/12*Math.PI*2,u=(l+1)/12*Math.PI*2;n.rod([o+Math.cos(a)*.33,.34+Math.sin(a)*.33,0],[o+Math.cos(u)*.33,.34+Math.sin(u)*.33,0],.022,.022,3,Re.black)}let r=(o,l)=>n.rod(o,l,.022,.022,4,s);r([-.52,.34,0],[-.05,.36,0]),r([-.05,.36,0],[-.17,.86,0]),r([-.17,.82,0],[.42,.8,0]),r([.42,.8,0],[.52,.34,0]),r([-.05,.36,0],[.42,.8,0]),n.box(-.28,.88,-.08,-.06,.94,.08,Re.black),n.rod([.44,1,-.27],[.44,1,.27],.018,.018,4,Re.metal),r([.42,.8,0],[.44,1,0]),n.box(.5,.78,-.16,.8,.98,.16,Re.metal)}function v1(i,e){let t=i.color;t.setM(e),t.box(-.2,0,-.2,.2,.04,.2,Re.orange),t.cyl(0,.04,0,.16,.03,.68,10,Re.orange),t.cyl(0,.32,0,.115,.095,.12,10,Re.white,!1)}function fd(i,e,t,n=0,s=0){i.color.setM(e),i.color.cyl(n,0,s,.17,.21,.34,8,Re.terracotta),i.leaf.setM(e),Vi(i,[n,.45,s],n,.62,s,.32+t()*.1,t()<.5?"leafA":"leafB",5,t,[1,1,1],[.55,.62,.7],[.35,.9])}var i3=[[.35,.455],[.455,.56],[.56,.665]],Qg=_e("#6b4a32");function e1(i,e,t,n,s){let r=i.color,o=i.atlas,l=.62,a=si("shop_p1"),u=a.u1-a.u0,h=a.v1-a.v0;r.setM(e),o.setM(e);for(let p of[-1,1])r.box(t+p*l-.03,0,n-.32,t+p*l+.03,1.32,n+.24,Qg);for(let p=0,m=Math.floor(s()*3);p<3;p++){let x=.2+p*.4,y=x+.36,M=n-.26+p*.16,c=M+.14,[f,d]=i3[(p+m)%3];o.quad([t+l,x,M],[t-l,x,M],[t-l,y,c],[t+l,y,c],ln,{u0:a.u0+u*.14,u1:a.u0+u*.86,v0:a.v1-h*d,v1:a.v1-h*f}),r.box(t-l,x-.05,M-.06,t+l,x,M+.12,Qg)}}function x1(i,e,t,n=.8){i.leaf.setM(e),Vi(i,[0,n*.3,0],0,n*.6,0,n,t()<.5?"leafA":"leafB",7,t,[1,1,1],[.5,.58,.66],[0,n*1.4])}function dr(i,e,t,n,s=2.3,r=.6){i.color.setM(e),i.color.cyl(0,0,0,.035,.035,s+r/2,6,Re.metal),i.atlas.setM(e),n<0?Hi(i.atlas,-.05,-r/2,r/2,s-r/2,s+r/2,t):zi(i.atlas,.05,-r/2,r/2,s-r/2,s+r/2,t)}function dd(i,e,t){let n=i.color;n.setM(e);for(let s=0;s<8;s++)n.cyl(0,s*.5,0,.045,.045,.5,6,s%2?Re.white:Re.red,!1);n.rod([0,3.85,0],[0,3.85,-.95],.025,.025,4,Re.metal),n.box(-.02,3,-1.12,.02,3.9,-.62,Re.black),i.atlas.setM(e),t<0?Hi(i.atlas,-.03,-1.12,-.62,3.02,3.88,"yabane"):zi(i.atlas,.03,-1.12,-.62,3.02,3.88,"yabane")}function y1(i,e){let t=i.color;t.setM(e),t.box(-.035,.84,-.035,.035,1.12,.035,_e("#efefea")),t.box(-.06,1,-.06,.06,1.1,.06,_e("#f0a020"))}function pd(i,e,t){let n=i.color;n.setM(e),n.cyl(0,0,0,.05,.05,3.3,8,Re.orange);let s=0,r=3.25,o=.42,l=14;for(let a=0;a<l;a++){let u=a/l*Math.PI*2,h=(a+1)/l*Math.PI*2,p=(m,x,y)=>[t*y,r+Math.sin(m)*x,s+Math.cos(m)*x-.25];Go(n,p(0,0,-.02),p(t>0?h:u,o,-.02),p(t>0?u:h,o,-.02),Re.orange),Go(n,p(0,0,-.035),p(t>0?h:u,o*.86,-.035),p(t>0?u:h,o*.86,-.035),_e("#dfe9f2"))}}var Yo=null;function _1(i){Yo=i}var qo=1;function b1(i){qo=i}function Vi(i,e,t,n,s,r,o,l,a,u,h,p,m=0){let x=Yo[o],y=1+(1-qo)*.35;l=Math.max(2,Math.round(l*qo));for(let M=0;M<l;M++){let c=a()*2-1,f=a()*2-1,d=a()*2-1;m&&(f=1.2+a());let g=Math.hypot(c,f,d)||1;c/=g,f/=g,d/=g;let v=-d,b=0,T=c;g=Math.hypot(v,T),g<.1&&(v=1,T=0,g=1),v/=g,T/=g;let w=f*T-d*b,_=d*v-c*T,S=c*b-f*v,E=Math.PI+(a()-.5)*.9,R=Math.cos(E),C=Math.sin(E),I=v*R+w*C,A=b*R+_*C,L=T*R+S*C,D=w*R-v*C,O=_*R-b*C,z=S*R-T*C,F=r*(1.3+a()*.45)*y/2,V=t+(a()-.5)*r*.6,k=n+(a()-.5)*r*(m?.15:.5),q=s+(a()-.5)*r*.6,$=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Se,G])=>[V+(I*Se+D*G)*F,k+(A*Se+O*G)*F*(m?.6:1),q+(L*Se+z*G)*F]),Me=$.map(Se=>{let G=Se[0]-e[0],J=Se[1]-e[1],ve=Se[2]-e[2],Ce=Math.hypot(G,J,ve)||1;G/=Ce,J/=Ce,ve/=Ce;let te=Se[0]-t,ge=Se[1]-n,Fe=Se[2]-s;return Ce=Math.hypot(te,ge,Fe)||1,[G*.7+te/Ce*.3,J*.7+ge/Ce*.3+(m?.5:0),ve*.7+Fe/Ce*.3]}),Te=$.map(Se=>G0(h,u,.45+.55*Math.max(0,Math.min(1,(Se[1]-p[0])/(p[1]-p[0])))));i.leaf.card($,Me,x,Te)}}function md(i,e,t,n="grass",s=1){let r=Yo[n],o=(.42+t()*.38)*s,l=o*1.2,a=t()*Math.PI,u=[0,1,0],h=[u,u,u,u],p=[.6,.64,.58],m=[1,1,1];i.leaf.setM(e);for(let x of[a,a+Math.PI/2]){let y=Math.cos(x)*l/2,M=Math.sin(x)*l/2;i.leaf.card([[-y,-.05,-M],[y,-.05,M],[y,o,M],[-y,o,-M]],h,r,[p,p,m,m])}}function Bl(i,e,t,n=1){let s=Yo.flowerbush;if(!s)return;let r=(.8+t()*.35)*n,o=r*1.7,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,y=Math.sin(m)*o/2;i.leaf.card([[-x,-.06,-y],[x,-.06,y],[x,r,y],[-x,r,-y]],u,s,[h,h,p,p])}}function Uh(i,e,t,n=1){let s=Yo.bedA;if(!s)return;let r=(.36+t()*.16)*n,o=r*2,l=t()*Math.PI,a=[0,1,0],u=[a,a,a,a],h=[.6,.64,.6],p=[1,1,1];i.leaf.setM(e);for(let m of[l,l+Math.PI/2]){let x=Math.cos(m)*o/2,y=Math.sin(m)*o/2;i.leaf.card([[-x,-.04,-y],[x,-.04,y],[x,r,y],[-x,r,-y]],u,s,[h,h,p,p])}}var s3=[.62,.68,.74],M1=[[0,0],[1,0],[1,1],[.36,1],[0,.7]],r3=[0,1,2,0,2,3,0,3,4],o3=M1.map(([,i])=>G0(s3,ln,i));function gd(i,e,t,n,s,r,o,l=1,a=null){let u=Yo[a||(o()<.5?"bankA":"bankB")],h=.82*l,p=(h+.06)*2.03,m=i.leaf;for(let x of r3){let[y,M]=M1[x],c=(y-.5)*p;m.vtx(e+s*c,t+M*(h+.06)-.06,n+r*c,0,1,0,u.u0+(u.u1-u.u0)*y,u.v0+(u.v1-u.v0)*M,o3[x])}}var S1=()=>qo>.7?.9:1.25;function a3(i,e,t,n=1){let s=t.range(5.5,7.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.2*n,.13*n,s*.55,7,Re.trunk);for(let u=0;u<3;u++){let h=t()*6.28;i.color.rod([0,s*.42,0],[Math.cos(h)*1.1*n,s*.68,Math.sin(h)*1.1*n],.09*n,.05*n,5,Re.trunk)}i.leaf.setM(e);let r=[0,s*.78,0],o=t()<.5?"leafA":"leafB",l=[s*.45,s*1.15],a=7+Math.floor(t()*3);for(let u=0;u<a;u++){let h=t()*6.28,p=(.6+t())*1.3*n;Vi(i,r,Math.cos(h)*p,s*(.62+t()*.3),Math.sin(h)*p,(1.1+t()*.6)*n,o,6,t,[1,1,1],[.55,.62,.7],l)}Vi(i,r,0,s*.98,0,1.4*n,o,7,t,[1,1,1],[.55,.62,.7],l)}function t1(i,e,t,n=1){let s=t.range(5.5,7)*n;i.color.setM(e),i.color.cyl(0,0,0,.26*n,.17*n,s*.45,7,Re.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(2.2+t()*1.6)*n,m=[Math.cos(h)*p,s*(.62+t()*.18),Math.sin(h)*p];i.color.rod([0,s*.4,0],m,.12*n,.05*n,5,Re.trunkDark),r.push(m),i.color.rod(m,[m[0]*1.25,m[1]+.9*n,m[2]*1.25],.05*n,.02*n,4,Re.trunkDark)}i.leaf.setM(e);let o=[0,s*.72,0],l=[s*.5,s*1.1],a=[.72,.62,.72];for(let u of r)for(let h=0;h<2;h++)Vi(i,o,u[0]+(t()-.5)*1.4*n,u[1]+t()*.9*n,u[2]+(t()-.5)*1.4*n,(1.2+t()*.5)*n,"sakura",6,t,[1,1,1],a,l);Vi(i,o,0,s*.92,0,1.9*n,"sakura",9,t,[1,1,1],a,l)}function l3(i,e,t,n=1){let s=i.color;s.setM(e);let r=(t()-.5)*1.6*n,o=t.range(5,7.5)*n,l=[r*.4,o*.45,.2],a=[r,o*.8,-.2];s.rod([0,0,0],l,.2*n,.15*n,6,Re.trunkDark),s.rod(l,a,.15*n,.09*n,6,Re.trunkDark),i.leaf.setM(e);let u=[[a[0],a[1]+.3,a[2],1.7],[l[0]+1.4*n,l[1]+.8,.5,1.3],[l[0]-1.3*n,l[1]+1.4,-.4,1.2],[a[0]+.9*n,a[1]-.6,.8,1.1]];for(let[h,p,m,x]of u)s.rod(h>l[0]?l:a,[h,p-.2,m],.07*n,.04*n,4,Re.trunkDark),Vi(i,[h,p-.8,m],h,p,m,x*n*1.3,"pine",9,t,[1,1,1],[.62,.68,.74],[p-.7,p+.5],1)}function c3(i,e,t,n=1){let s=t.range(4.5,6.5)*n;i.color.setM(e),i.color.cyl(0,0,0,.18*n,.12*n,s*.5,7,Re.trunkDark);let r=[];for(let u=0;u<5;u++){let h=u/5*6.28+t()*.8,p=(1.8+t()*1.4)*n,m=[Math.cos(h)*p,s*(.55+t()*.2),Math.sin(h)*p];i.color.rod([0,s*.38,0],m,.09*n,.04*n,5,Re.trunkDark),r.push(m)}i.leaf.setM(e);let o=[0,s*.7,0],l=[s*.45,s*1.1],a=[.62,.52,.56];for(let u of r)Vi(i,o,u[0],u[1]+.4*n,u[2],(1.15+t()*.4)*n,"momiji",6,t,[1,1,1],a,l);Vi(i,o,0,s*.92,0,1.6*n,"momiji",8,t,[1,1,1],a,l)}function u3(i,e,t,n=1){let s=t.range(8,11)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.1*n,s*.85,7,Re.trunk),i.leaf.setM(e);let r=[0,s*.62,0],o=[s*.3,s*1.02],l=[.68,.6,.52];for(let a=0;a<7;a++){let u=s*(.34+a*.09),h=(2.1-a*.24)*n,p=t()*6.28;Vi(i,r,Math.cos(p)*h*.35,u,Math.sin(p)*h*.35,Math.max(.7,h)*1.05,"ginkgo",5,t,[1,1,1],l,o)}}function h3(i,e,t,n=1){let s=i.color;s.setM(e);let r=t.range(7,10)*n,o=(t()-.5)*.5;s.rod([0,0,0],[o,r,0],.13*n,.05*n,7,_e("#eeece6"));for(let u=0;u<7;u++){let h=t.range(.4,r*.85),p=h/r;s.cyl(o*p,h,0,.135*n*(1-p*.6),.13*n*(1-p*.6),.05,7,_e("#2b2b30"),!1)}for(let u=0;u<7;u++){let h=r*(.45+t()*.5),p=t()*6.28,m=(.8+t()*1.6)*n,x=h/r;s.rod([o*x,h,0],[o*x+Math.cos(p)*m,h+m*.9,Math.sin(p)*m],.035*n,.012*n,4,_e("#8b7f78"))}let l=r*.7,a=(1.5+t()*.5)*n;i.leaf.setM(e),Vi(i,[o*.7,l,0],o*.7,l,0,a,"twigs",3,t,[1,1,1],[.92,.9,.92],[l-a,l+a])}function f3(i,e,t,n=1){let s=t.range(9,13)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Re.trunkDark),i.foliage.setM(e);let r=_e("#1d3a2c"),o=_e("#eef2f8"),l=_e("#d7e0ec");for(let a=0;a<4;a++){let u=s*(.16+a*.19),h=(1.9-a*.38)*n,p=s*.3;i.foliage.cyl(0,u,0,h,h*.3,p,9,r),i.foliage.cyl(0,u+p*.45,0,h*.72,.05,p*.62,9,a%2?o:l)}}function d3(i,e,t,n=1){let s=t.range(9,14)*n;i.color.setM(e),i.color.cyl(0,0,0,.22*n,.15*n,s*.3,6,Re.trunkDark),i.foliage.setM(e),i.foliage.cyl(0,s*.18,0,1.9*n,.9*n,s*.45,9,Re.cedarShade),i.foliage.cyl(0,s*.5,0,1.45*n,.05,s*.5,9,Re.cedar)}var w1=()=>qo>.7?[12,9,6,4,5]:[8,6,4,3,4],n1=[0,1,1],i1=[1,1,1],s1=[0,.82,1],p3=[1,.8,1],Lh=[0,1,0],m3=[0,0,1],Dh=i=>{let e=[];for(let t=0;t<=i;t++)e.push(t/i);return e};function Fl(i,e,t,n){let s=2*e[0]-(i[0]+t[0])/2,r=2*e[1]-(i[1]+t[1])/2,o=2*e[2]-(i[2]+t[2])/2;return n.map(l=>{let a=1-l,u=a*a,h=2*a*l,p=l*l;return[u*i[0]+h*s+p*t[0],u*i[1]+h*r+p*t[1],u*i[2]+h*o+p*t[2]]})}var Nh=(i,e,t)=>i.map(n=>t+(e-t)*Math.pow(1-n,.7));function T1(i,e,t,n,s,r,o){let l=[0,.06,.15,.4,.7,1],a=-.25,u=e[1]+.1,h=Fl([0,a,0],[e[0]*.5+s[0],(a+u)/2,e[2]*.5+s[1]],[e[0],u,e[2]],l),p=l.map((m,x)=>{let y=Math.max(0,1-(h[x][1]-a)/.75);return(t+(n-t)*Math.pow(m,1.3))*(1+.62*Math.pow(y,2.5))});h.push([e[0],u+n*.5,e[2]]),p.push(n*.1),i.tube(h,p,r,o,m3)}var ki={cells:null,bcells:null};function g3(i,e,t,n=1){let s=t()<.3?1.22:1,r=t.range(6.2,8)*n*s,o=i.bark;o.setM(e);let l=r*t.range(.3,.38),a=At(Math.floor(r*7919+l*104729)),[u,h,p,,m]=w1();T1(o,[0,l,0],.27*n*s,.2*n*s,[a.range(-.05,.05)*n,a.range(-.05,.05)*n],u,i1);let x=r*.64,y=t.range(2.6,3.2)*n*s,M=t.range(2,2.5)*n*s,c=n*s,f=[],d=5+Math.floor(t()*3);for(let _=0;_<d;_++){let S=_/d*6.283+t()*.6,E=t.range(-.15,.75),R=Math.sqrt(1-E*E);f.push([Math.cos(S)*R,E,Math.sin(S)*R])}f.push([0,1,0]);let g=[[0,x+.15*M,0,1.76*c,1]],v=26+Math.floor(t()*7);for(let _=0;_<v;_++){let S=t()*2-1,E=t.range(-.55,1),R=t()*2-1,C=Math.hypot(S,E,R)||1;S/=C,E/=C,R/=C;let I=f[0],A=-2;for(let D of f){let O=D[0]*S+D[1]*E+D[2]*R;O>A&&(A=O,I=D)}S=S*.45+I[0]*.55,E=E*.45+I[1]*.55,R=R*.45+I[2]*.55,C=Math.hypot(S,E,R)||1,S/=C,E/=C,R/=C;let L=t.range(.78,.95);g.push([S*y*L,x+E*M*L,R*y*L,t.range(.8,1.1)*c,0])}for(let _=0;_<4;_++){let S=f[_%d],E=Math.hypot(S[0],S[2])||1,R=S[0]/E,C=S[2]/E,I=[R*.06*c,l*.86,C*.06*c],A=[S[0]*y*.55,x+Math.min(0,S[1])*M*.4-.3*n,S[2]*y*.55],L=[(I[0]+A[0])*.5-R*.12*c,(I[1]+A[1])*.5+.18*c,(I[2]+A[2])*.5-C*.12*c],D=Dh(m),O=Fl(I,L,A,D);o.tube(O,Nh(D,.16*c,.06*n),h,i1,Lh);for(let z=0,F=1+(a()<.5?1:0);z<F;z++){let V=O[m-2+z],k=Math.atan2(C,R)+(z?1:-1)*a.range(.35,.8),q=a.range(.9,1.4)*c,$=[V[0]+Math.cos(k)*q*.8,V[1]+q*a.range(.6,.9),V[2]+Math.sin(k)*q*.8],Me=Dh(3);o.tube(Fl(V,[(V[0]+$[0])/2,(V[1]+$[1])/2+.1*q,(V[2]+$[2])/2],$,Me),Nh(Me,.07*c,.025*n),p,p3,Lh)}}let b=t(),T=b<.5?[1,1,.92+b*.16]:[1-(b-.5)*.12,1,.9],w=i.gleaf;w.setM(e);for(let[_,S,E,R,C]of g){let I=_,A=(S-x)*(y/M)+.1*y,L=E,D=Math.hypot(I,A,L)||1;I/=D,A/=D,L/=D,C&&(I=L=0,A=-1);let O=Math.min(1,Math.max(0,(S-(x-M))/(2*M))),z=C?.55:.72+.28*O,F=R/.8*.88;w.bill(_,S,E,I,A,L,F,F,ki.cells[Math.floor(t()*ki.cells.length)],[T[0]*z,T[1]*z,T[2]*z],Mg,.88)}}function r1(i,e,t,n=1,s=!1){let r=i.bark;r.setM(e);let o=s?1:0,l=t.range(2.2,2.7)*n,a=t.range(.3,.35)*n,u=[t.range(-.15,.15)*n,l,o*.3*n],h=At(Math.floor(l*7919+a*104729)+(s?17:0)),[p,m,x,y,M]=w1();T1(r,u,a,a*.8,[h.range(-.07,.07)*n,h.range(-.07,.07)*n],p,n1);let c=t.range(6.3,6.9)*n,f=-o*.5*n,d=t.range(4,4.5)*n,g=t.range(3.6,4)*n,v=t.range(1.7,2)*n,b=t()<.35?4:3,T=s?-Math.PI/2+t.range(-.35,.35):t()*6.283;for(let I=0;I<b;I++){let A=T+I/b*6.283+t.range(-.3,.3),L=Math.cos(A),D=Math.sin(A),O=t.range(.32,.46),z=[u[0]+L*d*O,c-v*t.range(.35,.55),u[2]*.5+f*.4+D*g*O],F=[u[0]+(z[0]-u[0])*.45+L*.25*n,l+(z[1]-l)*.55,u[2]+(z[2]-u[2])*.45+D*.25*n],V=[u[0]+L*a*.3,l-a*.45,u[2]+D*a*.3],k=Dh(M),q=Fl(V,F,z,k);r.tube(q,Nh(k,a*.64,a*.3),m,n1,Lh);let $=q[M-1],Me=I%2?1:2;for(let Te=0;Te<Me;Te++){let Se=(Te?1:-1)*t.range(.3,.9),G=t.range(1.2,1.9)*n,J=[z[0]+Math.cos(A+Se)*G,z[1]+t.range(.7,1.2)*n,z[2]+Math.sin(A+Se)*G],ve=Dh(3),Ce=Fl($,[($[0]+J[0])/2,($[1]+J[1])/2+G*.1,($[2]+J[2])/2],J,ve);r.tube(Ce,Nh(ve,a*.27,.035*n),x,s1,Lh);let te=Ce[1],ge=A+Se+(h()<.5?-1:1)*h.range(.5,1),Fe=h.range(.8,1.3)*n,Oe=[te[0]+Math.cos(ge)*Fe,te[1]+Fe*h.range(.15,.45),te[2]+Math.sin(ge)*Fe];r.tube([te,[(te[0]+Oe[0])/2,(te[1]+Oe[1])/2+.06*Fe,(te[2]+Oe[2])/2],Oe],[.05*n,.032*n,.014*n],y,s1)}}let w=[],_=6+Math.floor(t()*2);for(let I=0;I<_;I++){let A=I/_*6.283+t()*.5,L=t.range(-.2,.6),D=Math.sqrt(1-L*L);w.push([Math.cos(A)*D,L,Math.sin(A)*D])}w.push([0,1,0]);let S=[[-d*.3,c,f,1.75*n,1],[d*.3,c,f,1.75*n,1]],E=21+Math.floor(t()*4);for(let I=0;I<E;I++){let A=t()*2-1,L=t.range(-.3,1),D=t()*2-1,O=Math.hypot(A,L,D)||1;A/=O,L/=O,D/=O;let z=w[0],F=-2;for(let k of w){let q=k[0]*A+k[1]*L+k[2]*D;q>F&&(F=q,z=k)}A=A*.5+z[0]*.5,L=L*.5+z[1]*.5,D=D*.5+z[2]*.5,O=Math.hypot(A,L,D)||1,A/=O,L/=O,D/=O;let V=t.range(.8,.95);S.push([A*d*V,c+L*v*V,f+D*g*V,t.range(1,1.3)*n,0])}let R=[1,t.range(.96,1.03),t.range(.97,1.02)],C=i.gblossom;C.setM(e);for(let[I,A,L,D,O]of S){let z=I/d,F=(A-c)/v+.12,V=(L-f)/g,k=Math.hypot(z,F,V)||1;z/=k,F/=k,V/=k,O&&(z=V=0,F=-1);let q=Math.min(1,Math.max(0,(A-(c-v))/(2*v))),$=O?.62:.8+.2*q,Me=D/.8*.86;C.bill(I,A,L,z,F,V,Me,Me,ki.bcells[Math.floor(t()*ki.bcells.length)],[R[0]*$,R[1]*$,R[2]*$],Sg,.86)}}var E1={broad:(i,e,t,n)=>(ki.cells?g3:a3)(i,e,t,n),sakura:(i,e,t,n)=>ki.bcells?r1(i,e,t,n):t1(i,e,t,n),sakuraAve:(i,e,t,n)=>ki.bcells?r1(i,e,t,n,!0):t1(i,e,t,n),pine:l3,cedar:d3,maple:c3,ginkgo:u3,birch:h3,snowcedar:f3},o1={};function A1(i,e){let t=i+e,n=o1[t];if(!n){let s={color:new Kt,foliage:new Kt,leaf:new Kt({uv:!0}),gleaf:new Kt({uv:!0,off:!0}),gblossom:new Kt({uv:!0,off:!0}),bark:new Kt({uv:!0,idx:!0})};E1[i](s,new Qe,At(1e3+e*77+i.length*13),1),n=o1[t]={c:s.color.toArrays(),f:s.foliage.toArrays(),l:s.leaf.toArrays(),g:s.gleaf.toArrays(),b:s.gblossom.toArrays(),k:s.bark.toArrays()}}return n}function R1(){for(let i in E1)for(let e=0;e<4;e++)A1(i,e)}function Wn(i,e,t,n,s=1){let r=A1(t,Math.floor(n()*4)),o=e.clone().scale(new H(s,s,s));o.groundY=e.groundY,i.color.stamp(r.c,o),i.foliage.stamp(r.f,o),i.leaf.stamp(r.l,o),r.g.n&&i.gleaf.stamp(r.g,o),r.b.n&&i.gblossom.stamp(r.b,o),r.k.n&&i.bark.stamp(r.k,o)}var v3=new Set(["win0","win2","win5","win6"]),Ms=(i,e,t)=>e<t?i+(e<t*.35&&v3.has(i)?"C":"L"):i;function Ol(i,e,t,n,s,r,o){let l=Math.max(1,Math.round(t/3)),a=t/l;for(let u of[-1,1])for(let h=0;h<n.length-1;h++)for(let p=0;p<l;p++){let m=h>0&&r()<.3?Ms("win6",r(),o):r()<.2?"win5":"plain";(u>0?zi:Hi)(i,u*e/2,p*a,(p+1)*a,n[h],n[h+1],m,s)}}function kl(i,e,t,n,s,r=!1){i.quad([-e/2,n,t],[e/2,n,t],[e/2,n,0],[-e/2,n,0],Re.roof);let o=.5,l=.15;if(i.box(-e/2,n,-.02,e/2,n+o,l,Re.parapet),i.box(-e/2,n,t-l,e/2,n+o,t,Re.parapet),i.box(-e/2,n,0,-e/2+l,n+o,t,Re.parapet),i.box(e/2-l,n,0,e/2,n+o,t,Re.parapet),s()<.4){let a=(s()-.5)*e*.5,u=t*(.4+s()*.3);for(let[h,p]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])i.box(a+h-.05,n,u+p-.05,a+h+.05,n+1,u+p+.05,Re.metal);i.cyl(a,n+1,u,.85,.85,1.3,12,_e("#cfd2d4"))}r&&s()<.6&&i.box(-e*.15,n,t*.4,e*.15,n+2.6,t*.75,Re.parapet),s()<.3&&i.rod([e*.3,n,t*.5],[e*.3,n+3.5,t*.5],.03,.02,4,Re.metal)}function vd(i,e,t,n,s){i.color.box(e-.06,t,-.88,e+.06,n,-.12,Re.black);let r="vs"+Math.floor(s()*10);Hi(i.atlas,e-.065,-.88,-.12,t,n,r),zi(i.atlas,e+.065,-.88,-.12,t,n,r),i.color.box(e-.03,t+.3,-.12,e+.03,t+.36,0,Re.metal),i.color.box(e-.03,n-.36,-.12,e+.03,n-.3,0,Re.metal)}var nd=_e("#d9d6cf");function x3(i,e,t,n,s,r=""){let o=Math.floor(s()*10),l=r||"vsB"+o,a=Math.min(1.15,(n-t)*.417),u=-.14,h=u-a,p=.1,m=i.color;m.quad([e+p,t,h],[e-p,t,h],[e-p,n,h],[e+p,n,h],nd),m.quad([e-p,n,u],[e+p,n,u],[e+p,n,h],[e-p,n,h],nd),m.quad([e-p,t,h],[e+p,t,h],[e+p,t,u],[e-p,t,u],nd),Hi(i.atlas,e-p,h,u,t,n,l),zi(i.atlas,e+p,h,u,t,n,l);for(let x of[t+.28,n-.34])i.color.box(e-.03,x,u,e+.03,x+.06,0,Re.metal)}function Wi(i,e,t,n){switch(i.atlas.setM(e),i.color.setM(e),i.color.box(-n.w/2,-1.6,.02,n.w/2,.02,n.d||10,Re.concrete,null,{noBottom:!0}),n.type){case"shop":return M3(i,e,t,n);case"machiya":return S3(i,e,t,n);case"apt":return w3(i,e,t,n);case"office":return T3(i,e,t,n);case"konbini":return E3(i,e,t,n);case"house":return n.ptype?P3(i,e,t,n):R3(i,e,t,n);case"tower":return I3(i,e,t,n)}}var C1=new Set(["glass","door","cafe","noren"]),a1=["shop_p0","shop_p3","shop_p4","shop_p5","shop_p6","shop_p8","shop_p9"],y3=["shop_p2","shop_p2","shop_p7","shop_p10"],_3={shop_p1:"hs9",shop_p3:"hs7",shop_p4:"hs5",shop_p5:"hs_\u82B1\u5C4B",shop_p6:"hsN_\u6D0B\u54C1\u5E97",shop_p8:"hs13",shop_p9:"hs12"},b3={3:"hs5",4:"hs9",5:"hs_\u82B1\u5C4B",6:"hs_\u6D0B\u54C1\u5E97"};function M3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.6,m=3,x=p+(o-1)*m,y=Math.max(1,Math.round(s/3)),M=s/y,c=-s/2,f=t.pick([["glass","door","glass"],["noren","noren"],["cafe","door"],["shutter","shutter","door"],["glass","glass","door"],["house","garage"],["noren","glass"]]),d=[],g=0;for(let _=0;_<y;_++){let S=f1(t,"shop_"+f[_%f.length]);d.push(S),!g&&S.startsWith("shop_glass")&&S.length>10&&(g=+S.slice(10))}for(let _=0;_<y;_++){let S=f[_%f.length];an(u,c+_*M,c+(_+1)*M,0,p,0,g&&S==="glass"?"shop_glass"+g:d[_]),C1.has(S)&&fr(i,e,c+(_+.5)*M,1.9,-.8,.7)}let v=t.pick([0,0,1,5,0,1]),b=[0,p];for(let _=1;_<o;_++)b.push(p+_*m);for(let _=1;_<o;_++)for(let S=0;S<y;S++){let E=S%2===1&&t()<.3?5:v;an(u,c+S*M,c+(S+1)*M,b[_],b[_+1],0,Ms("win"+E,t(),a),l)}Ol(u,s,r,b,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Un(l,.8)),kl(h,s,r,x,t);let T=s*.94;h.box(-T/2,p-.8,-.3,T/2,p+.08,-.02,Re.black);let w="hs"+Math.floor(t()*14);if(an(u,-T/2,T/2,p-.8,p+.08,-.305,b3[g]||w),t()<.55){let _=t.pick(e3),S=p-.85;h.quad([s/2-.2,S-.35,-1.1],[-s/2+.2,S-.35,-1.1],[-s/2+.2,S,-.02],[s/2-.2,S,-.02],_),h.quad([s/2-.2,S-.6,-1.1],[-s/2+.2,S-.6,-1.1],[-s/2+.2,S-.35,-1.1],[s/2-.2,S-.35,-1.1],Un(_,.85))}if(o>=2&&t()<.85){let _=(t()<.5?1:-1)*(s/2-.35);vd(i,_,p+.3,Math.min(x-.15,p+2.8),t)}for(let _=1;_<o;_++)if(t()<.4){let S=Math.floor(t()*y),E=c+S*M+.15,R=c+(S+1)*M-.15,C=b[_];h.box(E,C-.12,-.9,R,C,0,Re.parapet),an(u,E,R,C,C+1,-.9,"rail"),Hi(u,E,-.9,0,C,C+1,"rail"),zi(u,R,-.9,0,C,C+1,"rail"),t()<.45&&F1(h,E+.1,R-.1,C+1.95,-.55,t),t()<.6&&rd(i,e,(E+R)/2+.6,C,-.75)}else if(t()<.35){let S=Math.floor(t()*y);rd(i,e,c+(S+.5)*M,b[_]+.15,-.3),i.color.setM(e),i.atlas.setM(e)}h.cyl(c+.12,0,-.08,.05,.05,x,6,Re.pipe,!1),h.box(s/2-.5,1.2,-.12,s/2-.25,1.55,0,_e("#d9d9d3")),o>=3&&t()<.18&&P1(i,s,x,r,t)}function S3(i,e,t,n){let{w:s,d:r,floors:o,litP:l}=n,a=i.atlas,u=i.color,h=3.6,p=2.9,m=h+(o-1)*p,x=-s/2,y=Math.max(2,Math.round(s/3)),M=s/y,c=_e("#5c4030"),f=_e("#3a2a20"),d=t.pick([["glass","door","glass"],["noren","door"],["cafe","door"],["noren","glass"],["glass","glass","door"],["glass","door"]]),g=n.at!==void 0&&Math.abs(n.at-(n.side<0?139:146))<s/2&&o>=2?n.side:0;g&&(d=["glass","door","glass"]);let v=At(Math.floor((i.atlas.e[12]*71.3+i.atlas.e[14]*37.9)*977)^11101),b=t.pick(["shop_p0","shop_p0","shop_p1","shop_p3"]),T=[],w=g?g<0?"shop_p1":"shop_p6":b==="shop_p1"?b:a1[Math.floor(v()*a1.length)],_=v.pick(y3),S=v()<.65?v.pick(["shop_p7","shop_p10"]):"";for(let te=0;te<y;te++){let ge=d[te%d.length];T.push(ge==="glass"?w:ge==="door"?_:ge==="cafe"?"shop_p3":(Fe=>ge==="noren"&&S||Fe)(f1(t,"shop_"+ge)))}let E=t(),R=E<.5?"":d.includes("glass")&&b==="shop_p1"?"hs9":d.includes("cafe")||d.includes("glass")&&b==="shop_p3"?"hs7":"",C=T.includes("shop_p7")?"hs0":T.includes("shop_p10")?"hs3":"",I=g?g>0?"hsN_\u6D0B\u54C1\u5E97":"hs9":d.includes("glass")&&E>=.2?_3[w]||C:d.includes("cafe")&&E>=.5?"hs7":E>=.2?C:"";for(let te=0;te<y;te++){let ge=d[te%d.length];an(a,x+te*M,x+(te+1)*M,0,h,0,T[te]),C1.has(ge)&&fr(i,e,x+(te+.5)*M,1.9,-.8,.7)}let A=!!n.plaster,L=n.tint,D=[0,h];for(let te=1;te<o;te++)D.push(h+te*p);let O=A?v.pick(["win7","win7","win9","win10"]):v.pick(["win8","win8","win11"]);for(let te=1;te<o;te++)for(let ge=0;ge<y;ge++){let Fe=A&&ge%2===1&&t()<.3?"win5":O;an(a,x+ge*M,x+(ge+1)*M,D[te],D[te+1],0,Ms(Fe,t(),l),Fe==="win5"?L:ln)}{let te=Math.max(1,Math.round(r/3)),ge=r/te;for(let Fe of[-1,1])for(let Oe=0;Oe<D.length-1;Oe++)for(let Ie=0;Ie<te;Ie++){let qe=A?Oe>0?Ms(t()<.5?"win7":"win6",t(),l):"plain":Oe>0&&t()<.45?Ms("win4",t(),l):"woodwall";(Fe>0?zi:Hi)(a,Fe*s/2,Ie*ge,(Ie+1)*ge,D[Oe],D[Oe+1],qe,A&&qe[3]!=="7"?L:ln)}}u.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],A?Un(L,.8):_e("#6a5240"));for(let te of[x,-x])u.box(te-.09,0,-.12,te+.09,m,.02,f);if(A)for(let te=2;te<o;te++)u.box(x,D[te]-.1,-.08,-x,D[te]+.06,0,f);let{RC:z,k:F}=I1(i,n,s,r,m,t,!A),V=h+.62,k=1.05,q=.7,$=Math.max(2,Math.round((s+.3)/3)),Me=Fh.has("kawaraC")?si("kawaraC"):null;for(let te=0;te<$;te++){let ge=x-.15+(s+.3)*te/$,Fe=x-.15+(s+.3)*(te+1)/$;a.quad([Fe,V-q,-k],[ge,V-q,-k],[ge,V,0],[Fe,V,0],Me?ln:z,Me||F)}u.quad([x-.15,V-q-.03,-k],[-x+.15,V-q-.03,-k],[-x+.15,V-.1,0],[x-.15,V-.1,0],c);let Te=Math.min(s*.9,4.4),Se=V-q+.02,G=Se-.62;u.box(-Te/2,G,-k-.02,Te/2,Se,-k+.07,f);{let te=R?"":"hs"+Math.floor(t()*14);an(a,-Te/2,Te/2,G,Se,-k-.025,I||te||"hs"+Math.floor(v()*14))}for(let te of[-Te/2+.25,Te/2-.25])u.box(te-.03,Se,-k+.02,te+.03,V-q*.1,-k+.06,f);i.sodium.setM(e),u.noShadow=!0;for(let te=0;te<y;te++){let ge=x+(te+.5)*M;u.box(ge-.008,G-.02,-.62,ge+.008,V-q*.6,-.6,f),i.sodium.box(ge-.06,G-.16,-.67,ge+.06,G-.04,-.55,null)}u.noShadow=!1;let J=!1;if(t()<.5||g){J=!0;let te=g?jg[0]:t.pick(jg),ge=G-.12;u.quad([s/2-.2,ge-.32,-.95],[-s/2+.2,ge-.32,-.95],[-s/2+.2,ge,-.02],[s/2-.2,ge,-.02],te),u.quad([s/2-.2,ge-.55,-.95],[-s/2+.2,ge-.55,-.95],[-s/2+.2,ge-.32,-.95],[s/2-.2,ge-.32,-.95],Un(te,.85))}if(o>=2&&(!A||t()<.5)){let te=D[1]+.42,ge=-.5,Fe=x+.12,Oe=-x-.12;u.box(Fe,te-.07,ge-.04,Oe,te,0,c);for(let Ie=0;Ie<y;Ie++)an(a,x+.12+(s-.24)*Ie/y,x+.12+(s-.24)*(Ie+1)/y,te,te+.95,ge,"wrail");Hi(a,Fe,ge,0,te,te+.95,"wrail"),zi(a,Oe,ge,0,te,te+.95,"wrail"),i.leaf.setM(e);for(let Ie=0;Ie<y;Ie++)if(t()<.7){let qe=x+(Ie+.5)*M,ie=Math.min(M*.7,1.6);u.noShadow=!0,u.box(qe-ie/2,te+.72,ge-.2,qe+ie/2,te+.92,ge-.02,_e("#7a5236")),u.noShadow=!1;for(let we=qe-ie/2+.2;we<qe+ie/2-.1;we+=.32)Vi(i,[we,te+.95,ge-.11],we,te+1.05,ge-.11,.26,t()<.65?"sakura":"flowers",3,t,[1,.92,.96],[.7,.55,.62],[te+.9,te+1.3])}}if(o>=2&&(t()<.9||g)){let te=t()<.5?1:-1,ge=g||te;x3(i,ge*(s/2-.35),V+.1,Math.min(m-.2,V+2.8),t,g?g<0?"vsB10":"vsB0":""),s>7&&t()<.35&&vd(i,-ge*(s/2-.35),h+.8,Math.min(m-.2,h+2.5),t)}{let te=d.includes("noren")||d.includes("cafe"),ge=J?0:te?2:t()<.3?1:0;i.sodium.setM(e);for(let Fe=0;Fe<ge;Fe++){let Oe=ge===2?(Fe?1:-1)*Math.min(1.4,s/2-.6):(t()-.5)*(s-1.5),Ie=G-.5;u.noShadow=!0,u.box(Oe-.006,Ie+.42,-k+.12,Oe+.006,G,-k+.14,f),i.sodium.cyl(Oe,Ie,-k+.13,.11,.16,.18,10,null,!1),i.sodium.cyl(Oe,Ie+.18,-k+.13,.16,.11,.18,10,null,!1),u.cyl(Oe,Ie-.035,-k+.13,.1,.1,.04,8,f),u.cyl(Oe,Ie+.355,-k+.13,.1,.1,.04,8,f),u.noShadow=!1}}let ve=1e9,Ce=1e9;w==="shop_p1"&&d.includes("glass")&&(ve=x+(d.indexOf("glass")+.5)*M,e1(i,e,ve,-.62,t)),g<0&&y>=3&&(Ce=x+2.5*M,e1(i,e,Ce,-.62,t));for(let te=x+.45+t()*.4;te<-x-.3;te+=.7+t()*1.3)t()<.7&&Math.abs(te-ve)>.95&&Math.abs(te-Ce)>.95&&fd(i,e,t,te,-.4);i.color.setM(e),i.atlas.setM(e)}function P1(i,e,t,n,s){let r=Math.min(e*.85,7),o=r*.47,l=n*.3;for(let a of[-r*.35,r*.35])i.color.box(a-.06,t,l,a+.06,t+1.2+o,l+.12,Re.metal);i.color.box(-r/2,t+1.2,l+.12,r/2,t+1.2+o,l+.3,Re.metal),an(i.atlas,-r/2,r/2,t+1.2,t+1.2+o,l+.115,"bb"+Math.floor(s()*4))}function w3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.2,m=2.95,x=p+(o-1)*m,y=Math.max(2,Math.round(s/3.2)),M=s/y,c=-s/2,f=[0,p];for(let v=1;v<o;v++)f.push(p+v*m);for(let v=0;v<y;v++)an(u,c+v*M,c+(v+1)*M,0,p,0,v===Math.floor(y/2)?"shop_door":t.pick(["shop_house","shop_garage","plain"]),v===Math.floor(y/2)?ln:l);let d="bal"+Math.floor(t()*3),g=Un(l,.97);for(let v=1;v<o;v++){let b=f[v];for(let T=0;T<y;T++)an(u,c+T*M,c+(T+1)*M,b,f[v+1],0,Ms("win2",t(),a),l);h.box(c,b-.15,-1.3,-c,b,0,g),h.box(c,b,-1.3,-c,b+1.1,-1.18,g,null,{noBottom:!0});for(let T=0;T<y;T++)an(u,c+T*M,c+(T+1)*M,b,b+1.1,-1.305,d,l);for(let T=0;T<=y;T++)h.box(c+T*M-.05,b,-1.18,c+T*M+.05,b+2.4,0,Un(l,.92));for(let T=0;T<y;T++){let w=t(),_=c+T*M+.2,S=c+(T+1)*M-.2;w<.34?F1(h,_,S,b+2.02,-.98,t):w<.46&&N3(h,_+.25,Math.min(S-.25,_+1.9),b+1.1,-1.3,t)}i.atlas.setM(e);for(let T=0;T<y;T++)t()<.55&&(rd(i,e,c+(T+.78)*M,b,-.55),i.atlas.setM(e),i.color.setM(e))}h.box(c,x-.15,-1.3,-c,x,0,g),Ol(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Un(l,.8)),kl(h,s,r,x,t,!0)}function T3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=4,m=3.4,x=p+(o-1)*m,y=Math.max(2,Math.round(s/3)),M=s/y,c=-s/2,f=[0,p];for(let d=1;d<o;d++)f.push(p+d*m);for(let d=0;d<y;d++)an(u,c+d*M,c+(d+1)*M,0,p,0,d===1?"shop_door":"shop_glass");for(let d=1;d<o;d++)for(let g=0;g<y;g++)an(u,c+g*M,c+(g+1)*M,f[d],f[d+1],0,Ms("win3",t(),a),l);Ol(u,s,r,f,l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,x,r],[-s/2,x,r],Un(l,.8)),kl(h,s,r,x,t,!0),t()<.6&&vd(i,(t()<.5?1:-1)*(s/2-.3),p+.4,Math.min(x-.3,p+4.5),t),t()<.3&&P1(i,s,x,r,t)}function E3(i,e,t,n){let{w:s,d:r}=n,o=i.atlas,l=i.color,a=4.4,u=-s/2,h=Math.max(3,Math.round(s/3)),p=s/h;for(let m=0;m<h;m++)an(o,u+m*p,u+(m+1)*p,0,3.4,0,"shop_konbini"),fr(i,e,u+(m+.5)*p,1.9,-.8,.8);l.box(u,3.4,-.35,-u,a,0,Re.white),an(o,u,-u,3.4,a,-.355,"konbini_band"),Ol(o,s,r,[0,a],_e("#f2f2ee"),t,0),kl(l,s,r,a,t)}var l1=(i,e)=>e?_e("#7a5a42"):i.tint,id=null,A3=()=>{if(!id){let i=si("kawara"),e=16/272*(i.u1-i.u0);id={u0:i.u0+e,u1:i.u1-e,v0:i.v0,v1:i.v1}}return id};function I1(i,e,t,n,s,r,o){let l=i.atlas,a=i.color,u=!!e.snow,h=u?.75:.6,p=u?Math.min(3.4,n*.46):Math.min(2.4,n*.32),m=u?si("white"):A3(),x=u?_e("#f3f5fa"):_e("#c8ccd8"),y=u?_e("#e4e8f0"):_e("#3d4456"),M=u?1:Math.max(2,Math.round((t+2*h)/3)),c=g=>-t/2-h+(t+2*h)*g/M;for(let g=0;g<M;g++){let v=c(g),b=c(g+1);l.quad([b,s-.25,-h],[v,s-.25,-h],[v,s+p,n/2],[b,s+p,n/2],x,m),l.quad([v,s-.25,n+h],[b,s-.25,n+h],[b,s+p,n/2],[v,s+p,n/2],x,m)}let f=(g,v,b,T,w,_)=>{_<0?(a.quad([v,b,w],[g,b,w],[g,T,w],[v,T,w],y),a.quad([g,b,w],[v,b,w],[v,b,w+.08],[g,b,w+.08],y)):(a.quad([g,b,w],[v,b,w],[v,T,w],[g,T,w],y),a.quad([v,b,w],[g,b,w],[g,b,w-.08],[v,b,w-.08],y))};for(let[g,v]of[[-h,0],[n+h,n]])f(-t/2-h,t/2+h,s-.42,s-.22,g<0?g-.04:g+.04,g<0?-1:1),a.quad(g<0?[-t/2-h,s-.26,g]:[t/2+h,s-.26,g],g<0?[t/2+h,s-.26,g]:[-t/2-h,s-.26,g],g<0?[t/2+h,s-.26,v]:[-t/2-h,s-.26,v],g<0?[-t/2-h,s-.26,v]:[t/2+h,s-.26,v],Un(l1(e,o),.62));for(let g of[-1,1]){let v=g*(t/2+h+.02),b=.2,T=[v,s-.25,-h],w=[v,s+p,n/2],_=[v,s-.25,n+h],S=E=>[E[0],E[1]-b,E[2]];g>0?(a.quad(S(w),S(T),T,w,y),a.quad(S(_),S(w),w,_,y)):(a.quad(S(T),S(w),w,T,y),a.quad(S(w),S(_),_,w,y))}let d=l1(e,o);if(Go(a,[-t/2,s,0],[-t/2,s,n],[-t/2,s+p-.1,n/2],d),Go(a,[t/2,s,n],[t/2,s,0],[t/2,s+p-.1,n/2],d),a.box(-t/2-h,s+p-.05,n/2-.15,t/2+h,s+p+.18,n/2+.15,u?_e("#f6f7fb"):_e("#3d4456")),u){a.box(-t/2-h-.05,s-.42,-h-.1,t/2+h+.05,s-.12,-h+.3,_e("#eef1f7")),a.box(-t/2-h-.05,s-.42,n+h-.3,t/2+h+.05,s-.12,n+h+.1,_e("#eef1f7"));for(let g=-t/2;g<t/2;g+=.45+r()*.5)a.cyl(g,s-.42-.35,-h+.02,0,.04,.35,4,_e("#dfe8f3"),!1)}return{RC:x,k:m,fascia:f,nS:M}}function R3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=2.9,m=o*p,x=-s/2,y=t()<.5,M=Math.max(2,Math.round(s/3)),c=s/M,f=[];for(let w=0;w<=o;w++)f.push(w*p);let d=y?ln:l;for(let w=0;w<o;w++)for(let _=0;_<M;_++){let S=y?"win4":"win0";w===0&&_===0?S="shop_house":S=Ms(S,t(),a),an(u,x+_*c,x+(_+1)*c,f[w],f[w+1],0,S,S==="shop_house"?ln:d)}Ol(u,s,r,f,y?_e("#9a7a62"):l,t,a),h.quad([-s/2,0,r],[s/2,0,r],[s/2,m,r],[-s/2,m,r],Un(l,.75));let{RC:g,k:v,fascia:b,nS:T}=I1(i,n,s,r,m,t,y);if(o>1){let w=p+.05;for(let _=0;_<T;_++){let S=-s/2-.1+(s+.2)*_/T,E=-s/2-.1+(s+.2)*(_+1)/T;u.quad([E,w-.3,-.75],[S,w-.3,-.75],[S,w+.05,0],[E,w+.05,0],g,v)}b(-s/2-.1,s/2+.1,w-.42,w-.28,-.79,-1)}if(n.fence){let w=-n.fence,_=1.2;for(let[S,E]of[[-s/2,-1],[.4,s/2]])h.box(S,0,w-.08,E,_,w+.08,Re.concrete),an(u,S,E,0,_,w-.085,"block")}}var od={byZone:null};function L1(i){let e={};for(let t of i)for(let n of t.zones)(e[n]||(e[n]=[])).push(t);od.byZone=e}function Bh(i,e){let t=od.byZone&&od.byZone[i];return t?t[Math.floor(e()*t.length)]:null}var Nl={u0:0,u1:0,v0:0,v1:0},as=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]],c1=(i,e)=>{for(let t=0;t<4;t++)as[t][0]=i[e+t*3],as[t][1]=i[e+t*3+1],as[t][2]=i[e+t*3+2]},C3=(i,e,t)=>{let n=Math.sin(e*12.9898+t*78.233+i.e[12]*.731+i.e[14]*.513)*43758.5453;return 24+Math.floor((n-Math.floor(n))*231)};function P3(i,e,t,n){let s=n.ptype,r=i.atlas,o=i.color,l=si(s.f),a=si(s.s);for(let u of s.pieces){let h=u.t==="f"?l:a,p=h.u1-h.u0,m=h.v1-h.v0;Nl.u0=h.u0+u.uv[0]*p,Nl.u1=h.u0+u.uv[2]*p,Nl.v1=h.v1-u.uv[1]*m,Nl.v0=h.v1-u.uv[3]*m,c1(u.p,0),u.lit&&r.hasLit&&(r.litV=s.day?6:C3(r,u.p[0]+u.p[2],u.p[1])),r.quad(as[0],as[1],as[2],as[3],ln,Nl),r.litV=0}o.noShadow=!0;for(let u of s.soffits)c1(u,0),o.quad(as[0],as[1],as[2],as[3],s.soffit);if(o.noShadow=!1,n.fence){let u=-n.fence,h=1.1,p=s.ww+1;for(let[m,x]of[[-p/2,-1],[.4,p/2]])o.box(m,0,u-.08,x,h,u+.08,Re.concrete),an(r,m,x,0,h,u-.085,"block")}}function I3(i,e,t,n){let{w:s,d:r,floors:o,tint:l,litP:a}=n,u=i.atlas,h=i.color,p=3.4,m=o*p,x=Math.max(2,Math.round(s/6)),y=s/x,M=-s/2,c=t()<.5?"win3":"win2",f=[];for(let v=0;v<=o;v++)f.push(v*p);for(let v=0;v<o;v++)for(let b=0;b<x;b++)an(u,M+b*y,M+(b+1)*y,f[v],f[v+1],0,Ms(c,t(),a),l);let d=Math.max(1,Math.round(r/6)),g=r/d;for(let v of[-1,1])for(let b=0;b<o;b++)for(let T=0;T<d;T++)(v>0?zi:Hi)(u,v*s/2,T*g,(T+1)*g,f[b],f[b+1],Ms(c,t(),a),l);kl(h,s,r,m,t,!0)}function xd(i,e,t,n){let s=i.color,r=_e("#8d9096"),o=_e("#3a3d42");s.setM(e),s.cyl(0,0,0,.11,.09,6,10,r),s.box(-.05,5.62,-n-.1,.05,5.74,.05,r);let l=-n-.62,a=-n+.62;s.box(-.14,5.08,l,.14,5.56,a,o);let u=t*.141;i.atlas.setM(e),(t>0?zi:Hi)(i.atlas,u,l,a,5.08,5.56,"signal");let h=t>0?a:l,p=t>0?-1:1;for(let x=0;x<3;x++){let y=h+p*(.2+x*.4);s.box(t>0?.14:-.36,5.47,y-.15,t>0?.36:-.14,5.5,y+.15,o)}let m=h+p*.2;i.sig.setM(e),i.sig.box(t>0?.145:-.16,5.21,m-.11,t>0?.16:-.145,5.43,m+.11,ln)}function D1(i,e,t,n){let s=i.color,r=_e("#3d6ea8"),o=_e("#e8eef2"),l=_e("#c7c5bf"),a=5.35;s.setM(e),s.box(-1.1,a-.65,-t,1.1,a,t,r);for(let u of[-1.1,1])s.box(u,a,-t,u+.1,a+1.1,t,o),s.box(u-.02,a+1.1,-t,u+.12,a+1.18,t,r);i.atlas.setM(e),Hi(i.atlas,-1.105,-2.2,2.2,a-.62,a-.06,n),zi(i.atlas,1.105,-2.2,2.2,a-.62,a-.06,n),s.setM(e);for(let u of[-1,1]){let h=u*(t-1.65),p=u*(t-.15),m=Math.min(h,p),x=Math.max(h,p);s.box(-.45,.15,m+.3,.45,a-.65,x-.3,r);let y=20,M=(a-.15)/y;for(let c=0;c<y;c++)s.box(1.1+c*.3,.15,m,1.1+(c+1)*.3,a-(c+1)*M+.04,x,l);s.box(1.1,a-.1,m-.05,1.1+y*.3,a-.02,m+.05,r)}}function N1(i,e,t,n,s,r,o){let l=i.color,a=1.22,u=3.55,h=6.7,p=_e("#c8c5bd"),m=_e("#ebe8de"),x=_e("#7a5a42"),y=_e("#5e4433"),M=_e("#4d5468");l.setM(e),l.box(t,-1.4,u,n,a,h,p,null,{noBottom:!0}),l.box(t,a,u,n,a+.025,u+.32,m),l.box(t,a,u+.6,n,a+.04,u+.9,Re.yellow);let c=Math.sign(s-(t+n)/2),f=c>0?n:t,d=f+c*6.2,g=u+.9,v=h-.2,b=(F,V,k)=>[F,V,k];c>0?l.quad(b(d,.1,v),b(d,.1,g),b(f,a,g),b(f,a,v),p):l.quad(b(d,.1,g),b(d,.1,v),b(f,a,v),b(f,a,g),p);for(let F of[g,v]){let V=_e("#9aa0a6");l.rod([d,.1+.9,F],[f,a+.9,F],.03,.03,5,V);for(let k=0;k<=3;k++){let q=d+(f-d)*k/3,$=.1+(a-.1)*k/3;l.box(q-.03,$,F-.03,q+.03,$+.9,F+.03,V)}}i.atlas.setM(e);for(let F=t;F<n-.01;F+=3){let V=Math.min(n,F+3);i.atlas.quad([F,-.6,h+.004],[V,-.6,h+.004],[V,a,h+.004],[F,a,h+.004],_e("#d8d4ca"),si("concrete"))}l.setM(e);for(let F=t+.4;F<n;F+=2)l.box(F-.05,a,h-.12,F+.05,a+1,h-.02,_e("#8f949a"));for(let F of[.45,.95])l.box(t,a+F,h-.1,n,a+F+.06,h-.04,_e("#8f949a"));let T=n-t,w=F=>c>0?n-T*F:t+T*F,_=w(.47),S=_-2.3,E=_+2.3,R=u+1.35,C=h-.25;l.box(S,a,C-.12,E,a+2.45,C,x);for(let F of[S,E-.12])l.box(F,a,R+.6,F+.12,a+2.45,C,y);for(let F of[S,E-.12])l.box(F,a,R,F+.12,a+2.45,R+.12,y);l.quad([E+.4,a+2.5,R-.45],[S-.4,a+2.5,R-.45],[S-.4,a+2.85,C+.35],[E+.4,a+2.85,C+.35],M),l.quad([S-.4,a+2.42,R-.45],[E+.4,a+2.42,R-.45],[E+.4,a+2.77,C+.35],[S-.4,a+2.77,C+.35],_e("#3a3f50")),l.box(S+.3,a+.42,C-.55,E-.3,a+.48,C-.15,_e("#8a6a4a"));for(let F of[S+.4,E-.5])l.box(F,a,C-.5,F+.08,a+.42,C-.2,Re.metal);i.atlas.setM(e),i.atlas.quad([_-1.1,a+1.55,C+.005],[_+1.1,a+1.55,C+.005],[_+1.1,a+2.03,C+.005],[_-1.1,a+2.03,C+.005],ln,si("ekiplate"+r));let I=w(.2),A=u+1.6,L=1.25,D=a+1.25,O=D+.95;l.setM(e);for(let F of[I-L+.12,I+L-.12])l.cyl(F,a,A,.05,.05,O-a+.05,8,_e("#6b7078"));l.box(I-L,D-.03,A-.03,I+L,O+.03,A+.03,_e("#3a3d42")),i.atlas.setM(e),i.atlas.quad([I-L,D,A+.035],[I+L,D,A+.035],[I+L,O,A+.035],[I-L,O,A+.035],ln,si("ekimei"+r)),i.atlas.quad([I+L,D,A-.035],[I-L,D,A-.035],[I-L,O,A-.035],[I+L,O,A-.035],ln,si("ekimei"+r)),l.setM(e);let z=_-c*4.2;l.box(z-.9,a+.42,h-1.25,z+.9,a+.47,h-.85,_e("#3b6ea8")),l.box(z-.9,a+.47,h-.88,z+.9,a+.9,h-.83,_e("#3b6ea8"));for(let F of[z-.75,z+.7])l.box(F,a,h-1.2,F+.06,a+.42,h-.9,Re.metal);for(let F=t+3;F<n-1;F+=9)Ul(i,d1(e,F,a,h-.45))}var L3=["#f4f4ef","#f4f4ef","#dfe9f3","#f6d8de","#f3e7b8","#cfe3d2","#3d4a6b","#e9c9a8"].map(_e),D3=["#f3dfe4","#dde8f4","#f4ecd6","#d9ecdf","#f6f2ea"].map(_e);function F1(i,e,t,n,s,r){i.rod([e,n,s],[t,n,s],.018,.018,4,Re.metal);let o=e+.12+r()*.2;for(;o<t-.35;){let l=.28+r()*.34,a=.36+r()*.42,u=r.pick(L3),h=s+(r()-.5)*.06;i.quad([o+l,n-a,h],[o,n-a,h],[o,n-.02,h],[o+l,n-.02,h],u),i.quad([o,n-a,h+.01],[o+l,n-a,h+.01],[o+l,n-.02,h+.01],[o,n-.02,h+.01],Un(u,.85)),r()<.4&&i.box(o+l*.45,n-.02,h-.02,o+l*.55,n+.06,h+.02,_e("#d8d8d0")),o+=l+.06+r()*.22}}function N3(i,e,t,n,s,r){let o=r.pick(D3),l=.11;i.box(e,n-.02,s-l,t,n+.09,s+.22,o),i.box(e,n-.72,s-l,t,n+.09,s-.005,o),i.box(e+.08,n-.5,s-l-.004,t-.08,n-.42,s-l+.01,Un(o,.86))}function U1(i,e){let t=i.color,n=_e("#a19f97"),s=_e("#6b4a35"),r=_e("#4f4a44"),o=_e("#c8342a");t.setM(e),t.box(-.62,-.6,-.46,.62,.32,.46,_e("#8d8b84"));for(let l of[-.52,.48])for(let a of[-.36,.32])t.box(l,.32,a,l+.05,1.5,a+.05,s);t.box(-.55,1.42,.3,.55,1.5,.4,s),t.quad([.72,1.46,-.6],[-.72,1.46,-.6],[-.72,1.78,.02],[.72,1.78,.02],r),t.quad([-.72,1.46,.62],[.72,1.46,.62],[.72,1.78,.02],[-.72,1.78,.02],r),t.cyl(0,.32,0,.17,.13,.44,10,n),t.blob(0,.86,0,.11,n,Un(n,.8),0),t.cyl(0,.6,0,.19,.11,.16,10,o,!1),t.cyl(0,.93,0,.115,.03,.1,8,o);for(let l of[-.32,.3])t.cyl(l,.32,-.18,.05,.06,.07,8,_e("#e9e6dc"));t.box(-.06,.32,-.32,.06,.58,-.28,_e("#5b8d3d"))}function B1(i,e){let t=i.color;t.setM(e);for(let n=0;n<8;n++)t.cyl(0,n*.4,0,.075,.075,.4,8,n%2?Re.black:Re.yellow,!1);t.cyl(0,3.2,0,.075,.055,.75,8,Re.black),t.box(-.5,2.55,-.06,.5,2.95,.02,Re.black);for(let n of[-.28,.28])t.box(n-.17,2.9,-.3,n+.17,2.95,-.06,Re.black);t.box(-.78,-.9,-.34,.3,0,.34,Re.concrete,null,{noBottom:!0}),t.box(-.68,0,-.26,-.16,1.18,.26,_e("#e9e9e3")),t.box(-.68,1.18,-.26,-.16,1.24,.26,Re.yellow);for(let n of[Math.PI/4,-Math.PI/4]){t.setM(new Qe().multiplyMatrices(e,new Qe().makeRotationZ(n).setPosition(0,3.62,-.1)));for(let s=0;s<4;s++)t.box(-.6+s*.3,-.075,-.02,-.3+s*.3,.075,.02,s%2?Re.black:Re.yellow)}t.setM(e),i.atlas.setM(e),an(i.atlas,-.33,.33,3,3.24,-.09,"xing_plate")}function O1(i,e){let t=i.color;t.setM(e);let n=Re.stone,s=Un(Re.stone,1.06),r=Un(Re.stone,.92);t.box(-.36,0,-.36,.36,.18,.36,r),t.box(-.26,.18,-.26,.26,.26,.26,n),t.box(-.13,.26,-.13,.13,1,.13,n),Wo(t,1,1.1,.16,.3,s,!0,!0),t.box(-.2,1.1,-.2,.2,1.48,.2,s),Wo(t,1.48,1.54,.25,.35,r,!1,!0),Wo(t,1.54,1.78,.35,.07,r),t.cyl(0,1.78,0,.07,.04,.1,6,n),t.cyl(0,1.88,0,.05,0,.08,6,n),i.lamp.setM(e),i.lamp.box(-.1,1.2,-.205,.1,1.38,-.195,ln),i.lamp.box(-.1,1.2,.195,.1,1.38,.205,ln)}function yd(i,e,t,n=6.2){let s=i.color;s.setM(e);for(let r of[-t,t])s.cyl(0,0,r,.32,.27,n,12,Re.vermilion),s.cyl(0,0,r,.38,.38,.5,12,Re.black);s.box(-.2,n*.78,-t-.6,.2,n*.78+.35,t+.6,Re.vermilion),s.box(-.35,n-.1,-t-1,.35,n+.3,t+1,Re.vermilion),s.box(-.45,n+.3,-t-1.3,.45,n+.6,t+1.3,Re.black),s.box(-.12,n*.78+.35,-.3,.12,n-.1,.3,Re.vermilion)}function k1(i,e,t){let n=i.color;n.setM(e);for(let s of[-1.5,1.5])n.box(s-.05,0,.6,s+.05,2.4,.7,_e("#7d8a96"));n.box(-1.7,2.4,-.3,1.7,2.5,.9,_e("#5c7590")),n.box(-1.55,0,.7,1.55,2.3,.75,_e("#c9d8e2")),n.box(-1.2,.42,.25,1.2,.48,.6,_e("#8a6a4a")),n.box(-1.2,0,.3,-1.1,.42,.55,Re.metal),n.box(1.1,0,.3,1.2,.42,.55,Re.metal),n.cyl(2.3,0,-.2,.04,.04,2.3,6,Re.metal),i.atlas.setM(e),Hi(i.atlas,2.25,-.55,.15,2,2.7,"busstop"),zi(i.atlas,2.35,-.55,.15,2,2.7,"busstop")}var F3=[[0,1,0],[.943,-.333,0],[-.471,-.333,.816],[-.471,-.333,-.816]],U3=_e("#a7a7aa"),B3=[1,.95,.9],u1={},O3=()=>qo>.7?12:6;function z1(i,e){let t=i*16+e,n=u1[t];if(!n){let s=new Kt({uv:!0}),r=Un(U3,B3[i]),o=.42,l=.25,a=.075,u=o-l,h=1-a,p=o+(l-o)*h,m=p-a,x=(y,M,c)=>s.vtx(y[0],y[1],y[2],M[0],M[1],M[2],c,0,r);for(let y of F3){let M=0,c=1,f=0;Math.abs(y[1])>.99&&(M=1,c=0);let d=y[1]*f-y[2]*c,g=y[2]*M-y[0]*f,v=y[0]*c-y[1]*M,b=Math.hypot(d,g,v);d/=b,g/=b,v/=b;let T=g*y[2]-v*y[1],w=v*y[0]-d*y[2],_=d*y[1]-g*y[0],S=[];for(let R=0;R<=e;R++){let C=R/e*Math.PI*2,I=Math.cos(C),A=Math.sin(C);S.push([d*I+T*A,g*I+w*A,v*I+_*A])}let E=(R,C,I)=>[y[0]*I+R[0]*C,y[1]*I+R[1]*C,y[2]*I+R[2]*C];for(let R=0;R<e;R++){let C=S[R],I=S[R+1],A=[C[0]+y[0]*u,C[1]+y[1]*u,C[2]+y[2]*u],L=[I[0]+y[0]*u,I[1]+y[1]*u,I[2]+y[2]*u],D=E(C,o,0),O=E(I,o,0),z=E(I,p,h),F=E(C,p,h),V=E(I,m,1),k=E(C,m,1);x(D,A,0),x(z,L,h),x(O,L,0),x(D,A,0),x(F,A,h),x(z,L,h),x(F,A,h),x(V,y,1),x(z,L,h),x(F,A,h),x(k,y,1),x(V,y,1),x(y,y,1),x(V,y,1),x(k,y,1)}}n=u1[t]=s.toArrays()}return n}var k3=new pn,sd=new Zn,z3=new H,H3=new H;function _d(i,e,t,n,s,r,o=0,l=.6,a=0){s()<l?sd.set((s()-.5)*.4,s()*6.283,(s()-.5)*.4):sd.set(s()*6.283,s()*6.283,s()*6.283);let u=new Qe().compose(z3.set(e,t,n),k3.setFromEuler(sd),H3.set(r,r,r));u.groundY=o;let h=i.tetra,p=h.n;h.stamp(z1(Math.floor(s()*3),O3()),u);for(let m=p*2+1;m<h.n*2;m+=2)h.U[m]=a}function H1(){for(let i=0;i<3;i++)for(let e of[6,12])z1(i,e)}function V1(i,e){let t=i.color;t.setM(e),i.foliage.setM(e),i.foliage.blob(0,.5,0,6,_e("#8f8a80"),_e("#55524c"),1,.5),t.cyl(0,2,0,2,1.4,15,14,Re.white);for(let n of[6,11])t.cyl(0,n,0,2-(n-2)*.04+.03,2-(n+1.6-2)*.04+.03,1.6,14,Re.red,!1);t.cyl(0,17,0,1.9,1.9,.25,14,Re.black),t.cyl(0,18.6,0,1,.25,1.2,12,Re.red),i.lamp.setM(e),i.lamp.cyl(0,17.25,0,.95,.95,1.35,12,ln)}function W1(i,e,t){let n=i.color;n.setM(e);let s=t.pick([_e("#f4f4f0"),_e("#3b6ea5"),_e("#d0d8e0")]);n.box(-2.4,0,-.9,2,.9,.9,s),Go(n,[2,0,-.9],[3.4,.9,0],[2,.9,-.9],s),Go(n,[2,0,.9],[2,.9,.9],[3.4,.9,0],s),n.box(-2.4,.86,-.95,3,1,.95,Re.red),n.box(-1.6,.9,-.6,-.1,2.1,.6,Re.white),n.box(-1.55,1.5,-.62,-.15,1.85,.62,_e("#2a3346")),n.rod([.6,.9,0],[.6,4,0],.05,.04,5,Re.metal)}function G1(i,e,t){let n=i.color;n.setM(e),n.box(-.8,0,.6,.8,.5,2,Re.stone),n.box(-.55,.5,.9,.55,1.5,1.8,_e("#8a6a4a")),n.quad([.8,1.4,.6],[-.8,1.4,.6],[-.8,1.95,1.35],[.8,1.95,1.35],_e("#4d5468")),n.quad([-.8,1.4,2.1],[.8,1.4,2.1],[.8,1.95,1.35],[-.8,1.95,1.35],_e("#4d5468")),yd(i,d1(e,0,0,-.3,Math.PI/2),.75,2.2)}var Zo=[[0,"#070b26","#1c2752","#a8b6f0",.55,"#30427a","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0],[.2,"#1c2560","#56568a","#b0bcf2",.45,"#46548a","#262432",1,"#41497a","#6a6a9a","#3a3a6a","#7a6aa0",.85,0],[.245,"#3a56aa","#f2aa8a","#ffb48a",1.7,"#8a92cc","#6a5060",1.25,"#dcaca2","#ffd2b2","#9a88b2","#ffd8a8",.3,.9],[.3,"#3270c2","#e2effc","#fff2d3",3.15,"#93b3ec","#b8a890",1.35,"#d6e8f8","#ffffff","#acc4ea","#fff4e0",0,.2],[.45,"#2f68bb","#e0f0ff","#fff5dd",3.35,"#8fb1ec","#c8b8a0",1.35,"#d0e7fb","#ffffff","#a8c4ec","#ffffff",0,0],[.62,"#3068ba","#e0efff","#fff4db",3.3,"#91b1e9","#c8b49a",1.35,"#d2e7fa","#ffffff","#aac4ea","#fffaf0",0,.1],[.7,"#1d4492","#ffd8a6","#ffcf8a",2.9,"#a8b4e0","#c0a080",1.4,"#eed0ae","#fff2d8","#a2a0c8","#ffd890",0,.6],[.75,"#283c88","#ff946c","#ff8a52",1.9,"#9a88c8","#8a6070",1.2,"#e0968a","#ffb894","#8a6aa0","#ffcf8a",.15,1],[.765,"#232f78","#c8788a","#e8806e",.9,"#7076b8","#5a4a5e",1.15,"#a07890","#ffa890","#6a5a92","#ffb48a",.4,.85],[.8,"#1a2260","#86709e","#a08ac8",.35,"#4f5a98","#2f3040",1,"#4f5285","#c08ab8","#4a3a70","#ff9a8a",.7,.5],[.86,"#0a0f30","#24305e","#a8b6f0",.55,"#32447c","#16141f",1,"#1c2548","#404c7c","#1c2346","#2a3050",1,0],[1,"#070b26","#1c2752","#a8b6f0",.55,"#30427a","#16141f",1,"#19223f","#3d4a78","#1b2244","#2a3050",1,0]].map(i=>i.map(e=>typeof e=="string"?new he(e):e)),re={zenith:new he,horizon:new he,sunCol:new he,sunI:1,hemiSky:new he,hemiGround:new he,hemiI:1,fog:new he,cLit:new he,cShade:new he,cRim:new he,night:0,warm:0,overcast:0,rain:0,bright:1,sunDir:new H,moonDir:new H,lightDir:new H,sunEl:0,t:.4};function X1(i){re.t=i;let e=0;for(;e<Zo.length-2&&Zo[e+1][0]<=i;)e++;let t=Zo[e],n=Zo[e+1],s=wl(Zt((i-t[0])/(n[0]-t[0]),0,1)),r=(o,l)=>l.copy(t[o]).lerp(n[o],s);r(1,re.zenith),r(2,re.horizon),r(3,re.sunCol),re.sunI=pt(t[4],n[4],s),r(5,re.hemiSky),r(6,re.hemiGround),re.hemiI=pt(t[7],n[7],s),r(8,re.fog),r(9,re.cLit),r(10,re.cShade),r(11,re.cRim),re.night=pt(t[12],n[12],s),re.warm=pt(t[13],n[13],s),re.sunEl=Y1(i,re.sunDir,re.moonDir,re.lightDir)}function Y1(i,e,t,n){let s=Math.sin((i-.25)*Math.PI*2)*1.08,r=(i-.25)*Math.PI+.9;return e.set(Math.cos(s)*Math.sin(r),Math.sin(s),Math.cos(s)*Math.cos(r)).normalize(),t.set(-e.x,Math.abs(Math.sin(s))*.8+.25,-e.z).normalize(),n.copy(e),s<.08&&n.lerpVectors(t,e,Zt((s+.12)/.2,0,1)).normalize(),n.y<.12&&(n.y=.12,n.normalize()),s}var W3=new H,G3=new H;function Md(i,e){return Y1((i%1+1)%1,W3,G3,e),e}var q1={zenith:[new he("#7b8594"),new he("#141a28")],horizon:[new he("#b5bcc6"),new he("#283042")],fog:[new he("#a8b0ba"),new he("#232b3c")],hemiSky:[new he("#aab3bf"),new he("#3c4866")],hemiGround:[new he("#8b8983"),new he("#1e2030")],cLit:[new he("#d0d5dc"),new he("#2c3240")],cShade:[new he("#7c8593"),new he("#151922")]},bd=new he;function Z1(i,e){if(re.overcast=i,re.rain=e,re.bright=(1-re.night)*(1-re.warm)*(1-i),i<=.001)return;let t=re.night;for(let n of["zenith","horizon","fog","hemiSky","hemiGround","cLit","cShade"])bd.copy(q1[n][0]).lerp(q1[n][1],t),re[n].lerp(bd,i*(n==="cLit"||n==="cShade"?.75:.85));re.sunI*=1-.82*i,re.warm*=1-i,re.cRim.multiplyScalar(1-i),re.sunCol.lerp(bd.setRGB(.85,.87,.9),i*.6)}function K1(){let i=new mt({side:Vn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:re.zenith},uHorizon:{value:re.horizon},uSunDir:{value:re.sunDir},uMoonDir:{value:re.moonDir},uNoiseTex:Pe.uNoiseTex,uSunCol:{value:re.sunCol},uNight:{value:0},uWarm:{value:0},uTime:{value:0},uCirrus:{value:.6},uCirrusCol:{value:new he},uOvercast:{value:0},uDeckLit:{value:new he},uDeckDark:{value:new he},uMilky:{value:0},uMetA:{value:new H(0,1,0)},uMetB:{value:new H(0,1,0)},uMetP:{value:-1},uBright:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }",fragmentShader:`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright;
      varying vec3 vDir;
      ${Ri}
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
      }`}),e=new dt(new sl(5e3,48,24),i);return e.renderOrder=1e3,e.frustumCulled=!1,e}function q3(i,e){let t=[],s=e?.6:.88,r=(i()-.5)*.04,o=e?6:9;for(let d=0;d<o;d++){let g=.06+i()*.05;t.push([(d/(o-1)-.5)*s+(i()-.5)*.03,.1+g*.5,(i()-.5)*.2,g])}let l=e?6:2,a=s*.82,u=.1+.09;for(let d=0;d<l;d++){let g=Math.max(1,Math.round(a/.11));for(let v=0;v<g;v++){let b=(g===1?0:v/(g-1)-.5)*a+(i()-.5)*.05+r*d;t.push([b,u+i()*.05,(i()-.5)*.25+.05,(.075+i()*.05)*(e?1.25:1)])}u+=e?.115:.075,a*=e?.8:.66}let h=t.slice();for(let d of h){if(t.length>84)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.35+i()*2.4,T=d[3]*(.35+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.82,d[1]+Math.sin(b)*d[3]*.82,d[2]+.04,T])}}let p=t.slice(h.length);for(let d of h){if(d[1]<.1+.12||t.length>104)continue;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.3+i()*2.5,T=d[3]*(.3+i()*.4),w=d[3]*(.28+i()*.16);t.push([d[0]+Math.cos(b)*T,d[1]+Math.sin(b)*T,d[2]+Math.sqrt(d[3]*d[3]-T*T)-w*.6,w])}}for(let d of p){if(t.length>124)break;let g=1+Math.floor(i()*2);for(let v=0;v<g;v++){let b=.2+i()*2.7,T=d[3]*(.38+i()*.2);t.push([d[0]+Math.cos(b)*d[3]*.85,d[1]+Math.sin(b)*d[3]*.85,d[2]+.02,T])}}let m=t.slice(0,128),x=1e9,y=-1e9,M=-1e9;for(let d of m)x=Math.min(x,d[0]-d[3]*1.12),y=Math.max(y,d[0]+d[3]*1.12),M=Math.max(M,d[1]+d[3]*1.12);let c=Math.min(1,.92/(y-x),(.95-.1)/(M-.1)),f=(x+y)/2;for(let d of m)d[0]=(d[0]-f)*c,d[1]=.1+(d[1]-.1)*c,d[3]*=c;return m}function $1(i){let t={value:Array.from({length:128},()=>new xt)},n="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",s=new mt({uniforms:{uP:t,uN:{value:0},uSeed:{value:0},uBase:{value:.1},uNoiseTex:Pe.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${Ri}
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
      }`,depthTest:!1,depthWrite:!1,blending:ni}),r=new qt(1024,1024,{generateMipmaps:!0,minFilter:Pn,magFilter:Ut,depthBuffer:!1}),o=new mt({uniforms:{uH:{value:r.texture},uBase:{value:.1},uSeed:{value:0},uNoiseTex:Pe.uNoiseTex},vertexShader:n,fragmentShader:`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${Ri}
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
      }`,depthTest:!1,depthWrite:!1,blending:ni}),l=new dt(new nn(1,1),s),a=new Tr,u=new Ns;a.add(l);let h=new qt(1024*2,1024*2,{generateMipmaps:!0,minFilter:Pn,magFilter:Ut}),p=i.getRenderTarget(),m=i.autoClear,x=At(99);i.setRenderTarget(h),i.setClearColor(0,0),i.clear(),i.autoClear=!1;let y=[];for(let M=0;M<4;M++){let c=M%2===0,f=q3(x,c);f.forEach((d,g)=>t.value[g].set(d[0],d[1],d[2],d[3])),s.uniforms.uN.value=f.length,s.uniforms.uSeed.value=o.uniforms.uSeed.value=M*13.7,l.material=s,i.setRenderTarget(r),i.render(a,u),l.material=o,h.viewport.set(M%2*1024,Math.floor(M/2)*1024,1024,1024),i.setRenderTarget(h),i.render(a,u),y.push({cell:[M%2,Math.floor(M/2)],tall:c})}return h.viewport.set(0,0,1024*2,1024*2),i.autoClear=m,i.setRenderTarget(p),s.dispose(),o.dispose(),r.dispose(),l.geometry.dispose(),{tex:h.texture,kinds:y,rt:h}}function J1(i){let e=At(5),t=22,n=[],s=new nn(1,1);s.translate(0,.5,0);let r=new Cn(new Float32Array(t*4),4),o=new Cn(new Float32Array(t),1);s.setAttribute("aD",r),s.setAttribute("aR",o);let l=new mt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new he},uShade:{value:re.cShade},uRim:{value:re.cRim},uHaze:{value:re.horizon},uOpacity:{value:1}},vertexShader:`
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
      }`}),a=new ns(s,l,t);a.frustumCulled=!1,a.renderOrder=-5;for(let y=0;y<t;y++){let M=y<12,c=i.kinds[(y*3+(M?0:1))%i.kinds.length],f=M?c.tall?e.range(900,1500):e.range(1100,1700):e.range(380,700);n.push({phi:y/t*Math.PI*2+e.range(-.15,.15),d:M?e.range(2600,3400):e.range(1300,2200),base:M?e.range(-60,60):e.range(260,700),size:f,cell:c.cell,haze:M?.45:.18})}let u=new Qe,h=new pn,p=new H,m=new H,x=new H(0,1,0);return{group:a,update(y,M){let c=Math.atan2(re.lightDir.x,re.lightDir.z);for(let d of n)d.phi+=M*1.2/d.d;n.slice().sort((d,g)=>g.d-d.d).forEach((d,g)=>{p.set(y.x+Math.sin(d.phi)*d.d,y.y+d.base,y.z+Math.cos(d.phi)*d.d),h.setFromAxisAngle(x,d.phi+Math.PI),m.set(d.size,d.size,1),u.compose(p,h,m),a.setMatrixAt(g,u);let v=c-d.phi;v=Math.atan2(Math.sin(v),Math.cos(v));let b=Math.max(0,Math.min(1,(v+.35)/.7)),T=1-b*b*(3-2*b);r.setXYZW(g,d.cell[0],d.cell[1],T,d.haze),o.setX(g,.35+.9*Math.pow(Math.max(Math.cos(v),0),3)*(.4+re.warm))}),a.instanceMatrix.needsUpdate=!0,r.needsUpdate=!0,o.needsUpdate=!0,l.uniforms.uOpacity.value=(1-re.night*.35)*(1-re.overcast*.55)*(1-.85*re.rain),l.uniforms.uLit.value.copy(re.cLit).multiplyScalar(1+.35*re.bright)}}}function j1(){let i=new un;return[{R:4300,h:820,k:5,col:"#8ea6d8",haze:.62},{R:3200,h:520,k:8,col:"#6f90b8",haze:.45},{R:2300,h:300,k:13,col:"#5f8a76",haze:.32}].forEach((t,n)=>{let r=[],o=[],l=[];for(let p=0;p<=360;p++){let m=p/360*Math.PI*2,x=Math.sin(m)*t.R,y=Math.cos(m)*t.R,M=vh(p/360*t.k*4,40+n*9),c=Math.pow(Math.max(0,M-.18)/.82,1.6),f=t.h*(.12+c);if(r.push(x,-60,y,x,-60+f,y),o.push(0,p/360,1,p/360),p<360){let d=p*2;l.push(d,d+1,d+2,d+1,d+3,d+2)}}let a=new bt;a.setAttribute("position",new je(r,3)),a.setAttribute("hf",new je(o,2)),a.setIndex(l);let u=new mt({side:yn,fog:!1,uniforms:{uCol:{value:new he(t.col)},uHaze:{value:re.fog},uHazeK:{value:t.haze},uLight:{value:1},uSeed:{value:n*17},uSnow:{value:0},uNoiseTex:Pe.uNoiseTex},vertexShader:"attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${Ri}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`}),h=new dt(a,u);h.frustumCulled=!1,h.renderOrder=999,i.add(h)}),{group:i,update(t,n=0,s=1){if(i.visible=s>.002,!i.visible)return;i.position.set(t.x,0,t.z),i.scale.y=Math.min(1,s);for(let o of i.children)o.material.uniforms.uSnow.value=n;let r=(.35+.65*(1-re.night))*(1-.35*re.overcast);for(let o of i.children)o.material.uniforms.uLight.value=r}}}var zr="./assets/",sv=`
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
}`,ks=[.299,.587,.114],Ko=[.03,.014,-.018],X3=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),gi=[0,0,0],Sd=(i,e,t,n,s,r)=>{let o=i-e*(1-n)-t*n*s;return Math.min(.985,Math.max(0,X3(Math.min(1,Math.max(0,n+(o-n)/r)))))};function Y3(i,e,t,n,s){let r=i.toneMappingExposure.value,o=i.uSat.value,l=i.uLo.value,a=i.uDay.value,u=e/255,h=t/255,p=n/255,m=l.x*ks[0]+l.y*ks[1]+l.z*ks[2],x=(Ko[0]*ks[0]+Ko[1]*ks[1]+Ko[2]*ks[2])*a,y=(u*ks[0]+h*ks[1]+p*ks[2]-m)/(1-m+x);gi[0]=Sd(u,l.x,Ko[0],y,a,o),gi[1]=Sd(h,l.y,Ko[1],y,a,o),gi[2]=Sd(p,l.z,Ko[2],y,a,o);let M=.76,c=.24,f=Math.max(gi[0],gi[1],gi[2]);if(f>=M){let v=c*c/(1-f)-c+M,b=1-1/(.15*(v-f)+1),T=v/f;for(let w=0;w<3;w++)gi[w]=(gi[w]-b*f)/Math.max(1-b,.001)*T}let d=Math.min(gi[0],gi[1],gi[2]),g=d<.04?Math.sqrt(Math.max(d,0)/6.25)-d:.04;return s.setRGB((gi[0]+g)/r,(gi[1]+g)/r,(gi[2]+g)/r)}function zs(i){let e=Object.keys(i[0][1]),t={};for(let n of e)t[n]=[0,0,0];return{cur:t,at(n){let s=0;for(;s<i.length-2&&i[s+1][0]<=n;)s++;let r=i[s],o=i[s+1],l=Math.min(Math.max((n-r[0])/(o[0]-r[0]),0),1),a=l*l*(3-2*l);for(let u of e){let h=r[1][u],p=o[1][u],m=t[u];m[0]=h[0]+(p[0]-h[0])*a,m[1]=h[1]+(p[1]-h[1])*a,m[2]=h[2]+(p[2]-h[2])*a}return this},ug(n,s,r){let o=t[s];return Y3(n,o[0],o[1],o[2],r)},rgb(n){return t[n]}}}function cn(i,e,t){let n={};for(let s of Object.keys(i))n[s]=[0,1,2].map(r=>i[s][r]+(e[s][r]-i[s][r])*t);return n}var Vl={on:1},Jo=()=>{let i=Math.min(Math.max(((Vl.on?1-re.overcast:re.bright)-.55)/.4,0),1);return i*i*(3-2*i)},rv={value:new Le(1280,720)};function ov(i){i.getDrawingBufferSize(rv.value)}function av(i){let e=i.grade.uniforms;return{toneMappingExposure:e.toneMappingExposure,uSat:e.uSat,uVig:e.uVig,uDay:e.uDay,uLo:e.uLo,uGRes:rv}}async function Rd(i,e,t){let n=e.files[t]?t:"hi",s=await fetch(i+e.files[n]);if(!s.ok)throw new Error(e.files[n]+" "+s.status);let r=await s.blob();if(e.bytes&&e.bytes[n]&&r.size!==e.bytes[n])throw new Error(e.files[n]+" is "+r.size+" bytes, not "+e.bytes[n]);let o=URL.createObjectURL(r),l;try{l=await new al().loadAsync(o)}catch(a){throw URL.revokeObjectURL(o),a}return l.onUpdate=()=>{URL.revokeObjectURL(o),l.onUpdate=null},l.colorSpace=ii,l.generateMipmaps=!0,l.minFilter=Pn,l.magFilter=Ut,{tex:l,file:n}}async function Hr(i,e,t){let n,s=new Promise(r=>{n=setTimeout(()=>r(null),e)});try{return await Promise.race([i,s])}catch(r){return console.warn(t,r.message||r),null}finally{clearTimeout(n)}}async function lv(i,e=15e3){let t=zr+"clouds/";return Hr((async()=>{let n=await fetch(t+"clouds.json");if(!n.ok)throw new Error("clouds.json "+n.status);let s=await n.json(),r=(s.clouds||[]).filter(l=>l.u1>l.u0&&l.v1>l.v0&&l.w>0&&l.h>0&&l.lum&&l.lum[1]>l.lum[0]);if(!r.length)throw new Error("no clouds listed");let{tex:o}=await Rd(t,s,i);return{tex:o,list:r,tier:i}})(),e,"painted clouds unavailable, keeping the procedural ones:")}async function cv(i,e=15e3){let t=zr+"fronts/";return Hr((async()=>{let n=await fetch(t+"fronts2.json");if(!n.ok)throw new Error("fronts2.json "+n.status);let s=await n.json(),r=(s.tiles||[]).filter(h=>h.name&&h.w>0&&h.h>0&&h.x>=0&&h.x+h.w<=1&&h.y>=0&&h.y+h.h<=1&&h.ey+h.h<=1);if(!r.length)throw new Error("no fronts listed");let o=s.files&&s.files[i]?i:"hi",l=await fetch(t+s.files[o]);if(!l.ok)throw new Error(s.files[o]+" "+l.status);let a=await l.blob();if(s.bytes&&s.bytes[o]&&a.size!==s.bytes[o])throw new Error(s.files[o]+" is "+a.size+" bytes, not "+s.bytes[o]);let u=await createImageBitmap(a);if(s.size&&s.size[o]&&(u.width!==s.size[o][0]||u.height!==s.size[o][1]))throw new Error(s.files[o]+" has the wrong size");return{img:u,tiles:r,tier:o}})(),e,"painted fronts unavailable, keeping the procedural shopfronts:")}async function uv(i,e=15e3){let t=zr+"houses/";return Hr((async()=>{let n=await fetch(t+"houses.json");if(!n.ok)throw new Error("houses.json "+n.status);let s=await n.json(),r=s.files&&s.files[i]?i:"hi",o=s.tiles&&s.tiles[r]||[],l=(s.types||[]).filter(p=>p.f&&p.s&&p.pieces&&p.pieces.length&&o.some(m=>m.name===p.f)&&o.some(m=>m.name===p.s));if(!l.length||!(s.rows&&s.rows[r]>0))throw new Error("no houses listed");let a=await fetch(t+s.files[r]);if(!a.ok)throw new Error(s.files[r]+" "+a.status);let u=await a.blob();if(s.bytes&&s.bytes[r]&&u.size!==s.bytes[r])throw new Error(s.files[r]+" is "+u.size+" bytes, not "+s.bytes[r]);let h=await createImageBitmap(u,{premultiplyAlpha:"none"});if(s.size&&s.size[r]&&(h.width!==s.size[r][0]||h.height!==s.size[r][1]))throw new Error(s.files[r]+" has the wrong size");if(o.some(p=>!(p.w>0&&p.h>0&&p.x>=0&&p.x+p.w<=h.width&&p.ey+p.h<=h.height)))throw new Error("a tile lies outside the sheet");return{img:h,tiles:o,types:l,rows:s.rows[r],tier:r}})(),e,"painted houses unavailable, keeping the procedural ones:")}async function hv(i,e=15e3){let t=zr+"fields/";return Hr((async()=>{let n=await fetch(t+"fields.json");if(!n.ok)throw new Error("fields.json "+n.status);let s=await n.json();if(!(s.tile&&s.tile[0]>0&&s.tile[1]>0&&Math.abs(jn/s.tile[1]-Math.round(jn/s.tile[1]))<1e-6))throw new Error("bad tile size");if(!(s.mean&&s.mean.length===3))throw new Error("no average colour listed");let{tex:r,file:o}=await Rd(t,s,i);return r.colorSpace=Gt,r.wrapS=r.wrapT=Ds,{tex:r,tile:s.tile,mean:s.mean,tier:o}})(),e,"painted fields unavailable, keeping the procedural paddies:")}var Oh=[["tower",10,[4300,4800],[-1.6,-.4],[22,33],["tower"],.3],["bank",8,[4820,4960],[-1.2,.2],[5,8.5],["wide","mid"],.42],["mid",8,[3500,4200],[-1,2],[9,15],["mid","wide","tower"],.26],["high",7,[2300,3200],[11,27],[6,11],["mid","wide","tower"],0]],Z3=140*Math.PI/180,zh=Math.PI/180,mr=i=>Math.atan2(Math.sin(i),Math.cos(i));function K3(i,e){let t=At(e),n=[],s=t()*Math.PI*2,r=Math.PI*2/Oh[0][1];for(let[a,u,h,p,m,x,y]of Oh)for(let M=0;M<u;M++){let c;a==="tower"?c=s+M*r+t.range(-.22,.22)*r:a==="mid"?c=s+(M+.5)*r*(Oh[0][1]/u)+t.range(-.2,.2)*r:a==="high"?c=s+(M*(Oh[0][1]/u)+.5)*r+t.range(-.3,.3)*r:c=s+(M+t())/u*Math.PI*2,n.push({role:a,kinds:x,phi:c,d:t.range(h[0],h[1]),e0:t.range(p[0],p[1])*zh,ah:t.range(m[0],m[1])*zh,haze:y,k:-1,flip:!1})}let o=i.map(()=>[]),l=n.map((a,u)=>u);for(let a=l.length-1;a>0;a--){let u=Math.floor(t()*(a+1)),h=l[a];l[a]=l[u],l[u]=h}for(let a of l){let u=n[a],h=-1,p=1e9;i.forEach((m,x)=>{let y=u.kinds.indexOf(m.kind);if(y<0)return;let c=(o[x].some(f=>Math.abs(mr(f-u.phi))<Z3)?1e3:0)+o[x].length*10+y*4+t();c<p&&(p=c,h=x)}),h<0&&(h=Math.floor(t()*i.length)),u.k=h,o[h].push(u.phi)}for(let a of n){let u=i[a.k],h=a.d*Math.tan(a.e0);a.y0=h,a.h=a.d*Math.tan(a.e0+a.ah)-h,a.w=a.h*u.w/u.h,a.half=Math.atan2(a.w/2,a.d)}return n.sort((a,u)=>u.d-a.d)}var Q1={shade:[172,196,234],mid:[214,226,246],lit:[246,249,253],rim:[255,246,228]},ev={shade:[137,114,117],mid:[184,147,138],lit:[238,196,146],rim:[255,214,150]},wd={shade:[96,65,92],mid:[158,82,98],lit:[226,124,100],rim:[242,172,122]},kh={shade:[33,58,90],mid:[45,76,116],lit:[78,112,152],rim:[140,166,200]},Td={shade:[58,56,96],mid:[104,86,132],lit:[170,128,168],rim:[214,150,170]},$3=zs([[0,kh],[.2,cn(kh,Td,.5)],[.245,cn(wd,ev,.4)],[.3,Q1],[.62,Q1],[.7,ev],[.75,wd],[.765,cn(wd,Td,.4)],[.8,Td],[.86,kh],[1,kh]]),tv=new he;function fv(i,e,t=5){let n=i.list,s=K3(n,t),r=s.length,o=new nn(1,1);o.translate(0,.5,0);let l=new Cn(new Float32Array(r*4),4),a=new Cn(new Float32Array(r*4),4),u=new Cn(new Float32Array(r),1);o.setAttribute("aRect",l),o.setAttribute("aInfo",a),o.setAttribute("aRim",u),s.forEach((b,T)=>{let w=n[b.k];l.setXYZW(T,w.u0,w.v0,w.u1-w.u0,w.v1-w.v0),a.setXYZW(T,0,w.lum[0],1/Math.max(.05,w.lum[1]-w.lum[0]),b.haze)});let h=new mt({transparent:!0,depthWrite:!1,fog:!1,premultipliedAlpha:!0,uniforms:{map:{value:i.tex},uLit:{value:new he},uMid:{value:new he},uShade:{value:new he},uRimCol:{value:new he},uHaze:{value:re.horizon},uPaint:{value:1},uOpacity:{value:1},uRimLod:{value:i.tier==="hi"?3:2},...av(e)},vertexShader:`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:sv+`
      uniform sampler2D map; uniform vec3 uLit, uMid, uShade, uRimCol, uHaze; uniform float uPaint, uOpacity, uRimLod;
      varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a < 0.004) discard;
        vec3 c = vec3(0.0);
        if (uPaint < 0.999) { // the time-of-day palette, keeping the brushwork (the painted luminance) and a silver lining
          float k = clamp((dot(t.rgb, vec3(0.299, 0.587, 0.114)) - vInfo.y) * vInfo.z, 0.0, 1.0);
          float rim = 1.0 - smoothstep(0.35, 0.95, textureLod(map, vUv, uRimLod).a);
          c = (k < 0.5 ? mix(uShade, uMid, k * 2.0) : mix(uMid, uLit, k * 2.0 - 1.0)) + uRimCol * rim * smoothstep(0.35, 0.8, k) * vRim;
        }
        if (uPaint > 0.001) c = mix(c, clamp(ungrade(t.rgb), 0.0, 2.0), uPaint); // a bright day: the painting itself
        c = mix(c, uHaze, vInfo.w * (1.0 - smoothstep(0.0, 0.45, vY)));         // the far feet melt into the horizon haze
        gl_FragColor = vec4(c, 1.0) * (t.a * uOpacity);
      }`}),p=new ns(o,h,r);p.frustumCulled=!1,p.renderOrder=-5;let m=new Qe,x=new pn,y=new H,M=new H,c=new H(0,1,0),f=new H,d=!0;function g(b,T){let w=s.filter(A=>A.role==="tower").sort((A,L)=>mr(A.phi-b)-mr(L.phi-b)),_=null,S=1e9;for(let A=0;A<w.length;A++){let L=w[A],D=w[(A+1)%w.length],O=T==="center"?L.phi:L.phi+mr(D.phi-L.phi)/2,z=Math.abs(mr(O-b));z<S&&(S=z,_=T==="center"?[L,L,O]:[L,D,O])}if(!_)return;let[E,R,C]=_,I=mr(b-C);for(let A of s)A.phi+=I;for(let A of new Set([E,R])){let L=Math.max(A.ah,31*zh),D=A.d*Math.tan(A.e0+L)-A.y0;A.w*=D/A.h,A.h=D,A.ah=L,A.half=Math.atan2(A.w/2,A.d)}}let v={mesh:p,count:r,opening:"flank",layout:s,update(b,T){let w=b.position,_=Math.atan2(re.lightDir.x,re.lightDir.z);b.getWorldDirection(f);let S=Math.atan2(f.x,f.z),E=Math.atan(Math.tan(b.fov*zh/2)*b.aspect);d&&g(S,v.opening);for(let L=0;L<r;L++){let D=s[L];D.phi+=T*1.2/D.d,y.set(w.x+Math.sin(D.phi)*D.d,w.y+D.y0,w.z+Math.cos(D.phi)*D.d),x.setFromAxisAngle(c,D.phi+Math.PI),M.set(D.w,D.h,1),m.compose(y,x,M),p.setMatrixAt(L,m);let O=mr(_-D.phi),z=O>0!==n[D.k].litLeft;z!==D.flip&&Math.abs(Math.sin(O))>.2&&(d||Math.abs(mr(D.phi-S))>E+D.half+.05)&&(D.flip=z),a.setX(L,D.flip?1:0);let F=Math.max(Math.cos(O),0);u.setX(L,.35+.9*F*F*F*(.4+re.warm))}d=!1,p.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,u.needsUpdate=!0;let R=h.uniforms;{let L=Math.min(Math.max((re.bright-.55)/.4,0),1);R.uPaint.value=L*L*(3-2*L)}let C=e.grade.uniforms,I=$3.at(re.t),A=1-Jo();I.ug(C,"shade",R.uShade.value).lerp(re.cShade,A),I.ug(C,"mid",R.uMid.value).lerp(tv.copy(re.cShade).lerp(re.cLit,.5),A),I.ug(C,"lit",R.uLit.value).lerp(tv.copy(re.cLit).multiplyScalar(1+.35*re.bright),A),I.ug(C,"rim",R.uRimCol.value).lerp(re.cRim,A),R.uOpacity.value=(1-re.night*(.08+.27*A))*(1-re.overcast*.55)*(1-.85*re.rain)}};return v}async function dv(i,e=15e3){let t=zr+"band/";return Hr((async()=>{let n=await fetch(t+"band2.json");if(!n.ok)throw new Error("band2.json "+n.status);let s=await n.json(),{tex:r,file:o}=await Rd(t,s,i),l={};for(let[a,u]of Object.entries(s.zones&&s.zones[o]||{}))u.v1>u.v0&&u.e1>u.e0&&(l[a]=new xt(u.v0,u.v1,Math.tan(u.e0*Math.PI/180),Math.tan(u.e1*Math.PI/180)));if(!Object.keys(l).length)throw new Error("no zones listed");return r.wrapS=Ds,{tex:r,zones:l,period:s.period||120,tier:o}})(),e,"painted horizon unavailable, keeping the mountain rings:")}var nv={shade:[84,112,132],mid:[142,170,190],lit:[200,220,234],ch:[.6,.6,.6]},iv={shade:[70,78,100],mid:[110,108,124],lit:[160,140,134],ch:[.3,.3,.3]},zl={shade:[46,36,58],mid:[84,56,84],lit:[130,76,92],ch:[.25,.25,.25]},$o={shade:[20,38,60],mid:[30,54,84],lit:[46,76,112],ch:[.12,.12,.12]},J3=zs([[0,$o],[.2,cn($o,zl,.3)],[.245,cn(zl,iv,.4)],[.3,nv],[.62,nv],[.7,iv],[.75,zl],[.765,cn(zl,$o,.25)],[.8,cn(zl,$o,.55)],[.86,$o],[1,$o]]),Hl=2500,j3=-8,kr=new H,pr=new he,Ed=new he("#fff5dd").multiplyScalar(3.35),Ad=new he("#8fb1ec").multiplyScalar(1.35*2);function pv(i,e,t){let n=i.zones,s=Math.max(...Object.values(n).map(v=>v.w)),r=192,o=360/i.period,l=new Float32Array((r+1)*6),a=new Float32Array((r+1)*4),u=[],h=Math.tan(j3*Math.PI/180),p=s+.004;for(let v=0;v<=r;v++){let b=v/r*Math.PI*2,T=Math.sin(b)*Hl,w=Math.cos(b)*Hl;if(l.set([T,h*Hl,w,T,p*Hl,w],v*6),a.set([-(v/r)*o,h,-(v/r)*o,p],v*4),v<r){let _=v*2;u.push(_,_+2,_+1,_+1,_+2,_+3)}}let m=new bt;m.setAttribute("position",new wt(l,3)),m.setAttribute("uv",new wt(a,2)),m.setIndex(u);let x=Math.PI/180,y=(e.composer.readBuffer.samples||0)>0,M=new mt({fog:!1,side:yn,alphaToCoverage:y,defines:y?{A2C:1}:{},uniforms:{map:{value:i.tex},uRowA:{value:new xt},uRowB:{value:new xt},uMix:{value:0},uAlpha:{value:1},uRot:{value:0},uLightC:{value:new he(1,1,1)},uPaint:{value:1},uFogC:{value:t},uHaze:{value:0},uHz:{value:Math.tan(.8*x)},uGnd:{value:new H(2.8,.0014,700)},uSpan:{value:new Le(h,p)},...av(e),uTone:{value:0},uBS:{value:new H},uBM:{value:new H},uBH:{value:new H},uBCh:{value:0},uWin:{value:new Le},uLightsOn:Pe.uLightsOn},vertexShader:`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${Hl.toFixed(1)}, position.z, 1.0);
      }`,fragmentShader:sv+`
      uniform sampler2D map; uniform vec4 uRowA, uRowB; uniform float uMix, uAlpha, uRot, uHaze, uHz, uPaint; uniform vec3 uLightC, uFogC, uGnd;
      uniform float uTone, uBCh, uLightsOn; uniform vec3 uBS, uBM, uBH; uniform vec2 uWin;
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
        // a bright day: the painting itself; under a clear sky at golden hour, sunset and night the painting in that hour's
        // tones (as the targets repaint it: its lightness through a shade-middle-light ramp, keeping some of its own colour);
        // under grey skies its colours relit (a plain linear relight, bounded: the inverse grade would blow its pale peaks up
        // past the bloom threshold at dusk)
        vec3 c = pgSrgbToLin(t.rgb) * 0.8 * uLightC;
        if (uTone > 0.001) {
          float l = dot(t.rgb, vec3(0.299, 0.587, 0.114)), k = clamp((l - 0.25) * 1.54, 0.0, 1.0);
          vec3 d = (k < 0.5 ? mix(uBS, uBM, k * 2.0) : mix(uBM, uBH, k * 2.0 - 1.0)) + (t.rgb - l) * uBCh;
          c = mix(c, ungrade(clamp(d, 0.0, 0.97)), uTone);
        }
        if (uPaint > 0.001) c = mix(c, ungrade(t.rgb), uPaint);
        // the far city's windows lit at night (the city's row only): a grid of small windows over its pale towers (the
        // painting's own opaque, light pixels), some lit, warm or cool white, coming on as the town's do
        float win = mix(uWin.x, uWin.y, uMix);
        if (win > 0.003) {
          vec2 wq = vec2((vUv.x + uRot) * 720.0, vUv.y * 400.0), wi = floor(wq), wf = fract(wq) - 0.5, ww = fwidth(wq);
          vec3 h3 = fract(vec3(wi.xyx) * 0.1031); h3 += dot(h3, h3.yzx + 33.33); float h = fract((h3.x + h3.y) * h3.z), h2 = fract(h * 13.7);
          float on = step(h, 0.2 * uLightsOn) * step(0.42, dot(t.rgb, vec3(0.299, 0.587, 0.114))) * step(0.97, t.a);
          float box = (1.0 - smoothstep(0.26 - ww.x * 0.5, 0.26 + ww.x * 0.5, abs(wf.x))) * (1.0 - smoothstep(0.22 - ww.y * 0.5, 0.22 + ww.y * 0.5, abs(wf.y)));
          c += mix(vec3(1.25, 0.8, 0.36), vec3(0.85, 0.8, 0.68), step(0.75, h2)) * (0.45 + 0.4 * h2) * on * box * win;
        }
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
      }`}),c=new dt(m,M);c.frustumCulled=!1,c.renderOrder=999;let f=M.uniforms,d=new H,g=!0;return{mesh:c,zones:n,hero:.125,update(v,b,T=2.8,w=.0014,_=700){let S=n[b.a],E=n[b.b],R=b.t,C=0;if(S&&E?(f.uRowA.value.copy(S),f.uRowB.value.copy(E),f.uMix.value=S===E?0:R,C=1):(S||E)&&(f.uRowA.value.copy(S||E),f.uMix.value=0,C=S?1-R:R),f.uAlpha.value=C,c.visible=C>.002,!c.visible)return 0;c.position.copy(v.position),f.uGnd.value.set(T,w,_),f.uSpan.value.set(Math.max(h,-Math.tan(Math.atan(T/140)+.3*x)),Math.max(S?S.w:0,E?E.w:0)+.003),g&&(v.getWorldDirection(d),f.uRot.value=this.hero+Math.atan2(d.x,d.z)/(Math.PI*2)*o,g=!1),pr.copy(re.sunCol).multiplyScalar(re.sunI),kr.set(pr.r,pr.g,pr.b),pr.copy(re.hemiSky).multiplyScalar(re.hemiI*2),kr.x+=pr.r,kr.y+=pr.g,kr.z+=pr.b;let I=Math.min(Math.max((re.bright-.55)/.4,0),1),A=I*I*(3-2*I);if(f.uLightC.value.setRGB(kr.x/(Ed.r+Ad.r),kr.y/(Ed.g+Ad.g),kr.z/(Ed.b+Ad.b)),f.uPaint.value=A,f.uTone.value=Jo()*(1-A),f.uTone.value>0){let F=J3.at(re.t);f.uBS.value.fromArray(F.rgb("shade")).divideScalar(255),f.uBM.value.fromArray(F.rgb("mid")).divideScalar(255),f.uBH.value.fromArray(F.rgb("lit")).divideScalar(255),f.uBCh.value=F.rgb("ch")[0]}let L=Math.min(Math.max((re.night-.15)/.65,0),1),D=L*L*(3-2*L)*(1-.6*re.overcast);f.uWin.value.set(b.a==="city"?D*Vl.on:0,b.b==="city"?D*Vl.on:0);let O=Math.max(4*f.uMix.value*(1-f.uMix.value),Math.min(1,2*(1-C))),z=y?0:.45*O*O*O;return f.uHaze.value=1-(1-(1-(1-.12*re.warm-.25*re.night)*(1-.55*re.overcast)*(1-.6*re.rain))*(1-A))*(1-z),C}}}async function Q3(i){let e=new Uint8Array(i),t=new DataView(i),n=[137,80,78,71,13,10,26,10];if(e.length<33||n.some((m,x)=>e[x]!==m))throw new Error("not a PNG");let s=8,r=0,o=0,l=[];for(;s+12<=e.length;){let m=t.getUint32(s),x=String.fromCharCode(e[s+4],e[s+5],e[s+6],e[s+7]);if(s+12+m>e.length)throw new Error("PNG truncated");if(x==="IHDR"){if(r=t.getUint32(s+8),o=t.getUint32(s+12),e[s+16]!==8||e[s+17]!==6||e[s+20]!==0)throw new Error("PNG is not 8-bit RGBA")}else if(x==="IDAT")l.push(e.subarray(s+8,s+8+m));else if(x==="IEND")break;s+=12+m}if(!r||!o||!l.length)throw new Error("PNG has no image");let a=new Uint8Array(await new Response(new Blob(l).stream().pipeThrough(new DecompressionStream("deflate"))).arrayBuffer()),u=r*4,h=new Uint8Array(u*o),p=new Uint8Array(u);if(a.length<(u+1)*o)throw new Error("PNG data short");for(let m=0;m<o;m++){let x=a[m*(u+1)],y=m*(u+1)+1,M=(o-1-m)*u,c=m?h.subarray(M+u,M+2*u):p,f=h.subarray(M,M+u),d=a.subarray(y,y+u);if(x===0)f.set(d);else if(x===1){for(let g=0;g<4;g++)f[g]=d[g];for(let g=4;g<u;g++)f[g]=d[g]+f[g-4]}else if(x===2)for(let g=0;g<u;g++)f[g]=d[g]+c[g];else if(x===3){for(let g=0;g<4;g++)f[g]=d[g]+(c[g]>>1);for(let g=4;g<u;g++)f[g]=d[g]+(f[g-4]+c[g]>>1)}else if(x===4){for(let g=0;g<4;g++)f[g]=d[g]+c[g];for(let g=4;g<u;g++){let v=f[g-4],b=c[g],T=c[g-4],w=Math.abs(b-T),_=Math.abs(v-T),S=Math.abs(v+b-T-T);f[g]=d[g]+(w<=_&&w<=S?v:_<=S?b:T)}}else throw new Error("PNG filter "+x)}return{w:r,h:o,data:h}}function ew(i,e,t,n,s,r=.5){let o=[{data:t,width:i,height:e}],l=Math.floor(r*255)+1,a=new Uint32Array(256),u=[],h=(y,M,c,f,d,g)=>{a.fill(0);for(let v=0;v<g;v++){let b=((f+v)*M+c)*4+3;for(let T=0;T<d;T++)a[y[b+T*4]]++}};for(let y=0;y<s;y++)for(let M=0;M<n;M++){let c=i/n,f=e/s;h(t,i,M*c,y*f,c,f);let d=0;for(let g=l;g<256;g++)d+=a[g];u.push(d/(c*f))}let p=i,m=e,x=t;for(;p>1&&m>1;){let y=p>>1,M=m>>1,c=new Uint8Array(y*M*4),f=p*4;for(let v=0;v<M;v++){let b=v*2*f,T=v*y*4;for(let w=0;w<y;w++,b+=8)for(let _=0;_<4;_++,T++)c[T]=x[b+_]+x[b+_+4]+x[b+_+f]+x[b+_+f+4]+2>>2}let d=y/n,g=M/s;if(d>=2&&g>=2&&d===Math.floor(d)&&g===Math.floor(g))for(let v=0;v<s;v++)for(let b=0;b<n;b++){h(c,y,b*d,v*g,d,g);let T=Math.round(u[v*n+b]*d*g),w=255,_=a[255];for(;w>1&&_<T;)_+=a[--w];let S=T>0?Math.min(6,Math.max(.5,l/w)):1;if(S!==1)for(let E=0;E<g;E++){let R=((v*g+E)*y+b*d)*4+3;for(let C=0;C<d;C++)c[R+C*4]=Math.min(255,Math.round(c[R+C*4]*S))}}o.push({data:c,width:y,height:M}),x=c,p=y,m=M}return o}async function mv(i,e=15e3){let t=zr+"trees/";return Hr((async()=>{if(typeof DecompressionStream>"u")throw new Error("no DecompressionStream");let n=await fetch(t+"crowns.json");if(!n.ok)throw new Error("crowns.json "+n.status);let s=await n.json(),r=s.files[i]?i:"hi",o=await fetch(t+s.files[r]);if(!o.ok)throw new Error(s.files[r]+" "+o.status);let l=await o.arrayBuffer();if(s.bytes&&s.bytes[r]&&l.byteLength!==s.bytes[r])throw new Error(s.files[r]+" is "+l.byteLength+" bytes, not "+s.bytes[r]);let a=await Q3(l),u=s.cols,h=s.rows;if(!(u>0&&h>0)||a.w%u||a.h%h)throw new Error("bad atlas layout");let p=(s.cells||[]).filter(y=>y.col<u&&y.row<h).map(y=>{let M=.5/a.w,c=.5/a.h;return{kind:y.kind,u0:y.col/u+M,u1:(y.col+1)/u-M,v0:1-(y.row+1)/h+c,v1:1-y.row/h-c}});if(!p.some(y=>y.kind==="leaf"))throw new Error("no leaf clusters listed");let m=ew(a.w,a.h,a.data,u,h,.5),x=new ts(a.data,a.w,a.h,$n);return x.mipmaps=m,x.generateMipmaps=!1,x.minFilter=Pn,x.magFilter=Ut,x.colorSpace=ii,x.needsUpdate=!0,{tex:x,cells:p,tier:r}})(),e,"painted tree crowns unavailable, keeping the card crowns:")}var Hs={T:6.5,N:400,TH:.75},Mv=Hs.N/jn,tw=Mv*Math.tan(Hs.TH),Vh=Math.cos(Hs.TH),Gl=Math.sin(Hs.TH),Wh=4,Gn=i=>i.toFixed(7),Yl=`
float shorePhase(float s, float d){ return uTime * ${Gn(1/Hs.T)} + s * ${Gn(Mv)} + d * ${Gn(tw)}; }`,ql=256/jn,gv=i=>Math.max(1,Math.round(i*Gl/ql))*ql/Gl,nw=i=>Math.max(1,Math.round(i*Vh/ql))*ql/Vh,Cd=i=>Math.max(1,Math.round(i*Hs.N*Wh/256))*256/(Hs.N*Wh),iw=`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`,Xl={uNoiseTex:Pe.uNoiseTex,uOrigin:Pe.uOrigin,uTime:{value:0},uCam:{value:new H},uSunDir:{value:re.lightDir},uSunCol:{value:re.sunCol},uHorizon:{value:re.horizon},uZenith:{value:re.zenith},uFog:{value:re.fog},uNight:{value:0},uFogD:{value:.0016},uVis:{value:1},uSpecK:{value:1},uBright:{value:0},uPaint:{value:0},uPTrough:{value:new he},uPMid:{value:new he},uPFace:{value:new he},uPLite:{value:new he},uPMidD:{value:new he},uPMidM:{value:new he},uPMidF:{value:new he},uPMidL:{value:new he},uPFarD:{value:new he},uPFar:{value:new he},uPFarF:{value:new he},uPFarL:{value:new he},uPHz:{value:new he},uFoamLit:{value:new he(1,1,1)},uFoamShade:{value:new he(.5,.6,.8)},uSeaDir:{value:new Le(1,0)},uWaves:{value:1},uPWBack:{value:new he},uPWFace:{value:new he},uPWLite:{value:new he},uPWTurq:{value:new he},uShoreW:{value:1},uPPath:{value:new he},uPGlint:{value:new he},uPathDir:{value:new H(0,1,0)},uPathK:{value:0},uPSpark:{value:new he(1,1,1)}},vv={trough:[0,98,182],mid:[10,132,218],face:[49,163,242],lite:[140,210,250],midD:[4,124,212],midM:[27,148,232],midF:[49,163,242],midL:[140,205,248],farD:[36,139,221],far:[69,169,243],farF:[114,191,246],farL:[190,228,251],hz:[111,196,250],foam:[246,251,254],foamShade:[160,205,240],wBack:[1,109,193],wFace:[68,163,212],wLite:[113,188,241],wTurq:[46,154,201],path:[140,210,250],glint:[246,251,254],pk:[0,0,0],spark:[246,251,254]},xv={trough:[62,71,85],mid:[100,105,118],face:[157,129,131],lite:[193,169,149],midD:[82,97,123],midM:[146,129,126],midF:[212,165,128],midL:[242,200,139],farD:[137,119,127],far:[228,186,134],farF:[246,222,154],farL:[243,227,168],hz:[238,201,149],foam:[250,223,177],foamShade:[182,164,157],wBack:[63,79,98],wFace:[148,128,110],wLite:[181,149,139],wTurq:[94,114,112],path:[238,197,147],glint:[253,232,165],pk:[.8,.8,.8],spark:[244,214,172]},Wl={trough:[63,47,73],mid:[91,73,99],face:[129,80,110],lite:[202,125,125],midD:[74,63,95],midM:[94,76,105],midF:[101,74,105],midL:[122,86,102],farD:[84,58,86],far:[104,70,98],farF:[124,78,100],farL:[146,84,98],hz:[126,76,100],foam:[247,180,162],foamShade:[177,122,140],wBack:[67,56,82],wFace:[125,86,95],wLite:[157,106,126],wTurq:[94,84,91],path:[244,171,118],glint:[255,228,149],pk:[1,1,1],spark:[196,128,128]},jo={trough:[8,33,62],mid:[17,57,92],face:[28,64,106],lite:[50,88,126],midD:[9,42,76],midM:[17,53,90],midF:[18,55,95],midL:[32,62,96],farD:[14,41,72],far:[29,63,96],farF:[20,66,111],farL:[40,78,120],hz:[13,76,131],foam:[133,172,202],foamShade:[70,105,140],wBack:[12,43,73],wFace:[50,77,103],wLite:[63,96,136],wTurq:[32,71,90],path:[185,221,236],glint:[230,250,254],pk:[.75,.75,.75],spark:[58,96,134]},sw=zs([[0,jo],[.2,{...cn(jo,Wl,.25),pk:[0,0,0]}],[.245,cn(Wl,xv,.35)],[.3,vv],[.62,vv],[.7,xv],[.75,Wl],[.765,{...cn(Wl,jo,.25),pk:[0,0,0]}],[.8,{...cn(Wl,jo,.55),pk:[0,0,0]}],[.86,jo],[1,jo]]),Sv=`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint, uWaves, uPathK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPLite, uPMidD, uPMidM, uPMidF, uPMidL, uPFarD, uPFar, uPFarF, uPFarL, uPHz, uFoamLit, uFoamShade, uPPath, uPGlint, uPathDir, uPSpark;
uniform vec2 uOrigin, uSeaDir;
${Ri}${iw}
vec4 vnoise4g(vec2 p, vec2 gx, vec2 gy){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, gx / 256.0, gy / 256.0); }
float wh(vec2 p){ return vnoise(p * 0.18 + vec2(uTime * 0.05, uTime * 0.03)) * 0.6 + vnoise(p * 0.55 - vec2(uTime * 0.09, -uTime * 0.04)) * 0.4; }
// ---- the painted waves (a bright day), in the reference art's manner: a field of wavelets drawn as horizontal lenses of
// deep blue (their faces turned towards us, which mirror the deep sky overhead), light streaks along their backs (which
// mirror the pale sky low down), the lightest and white glints on the highest. The wavelets are value noise stretched
// along the crests and rolling in. They grow with distance just enough that the far ones shrink on screen as in the
// painting without ever going under a pixel or two: each time the distance doubles, 2^1.75 times longer across the
// crests and 2^0.75 times along them (two neighbouring sizes blended, keeping their contrast), so the far sea keeps a
// fine texture right out to the far shore and never shimmers.
// the wavelets' height and their slope up away from us (per cell), broad ones with a finer chop over them (phones: the
// broad ones only); z: a sparkle field, for the glints. (gx, gy: q's footprint on screen, worked out from the smooth
// world position: q itself jumps where one size of wavelet hands over to the next, and the noise's own derivatives
// would blur a line of pixels there)
vec3 ripple(vec2 q, vec2 gx, vec2 gy){
  vec4 n0 = vnoise4g(q, gx, gy); float h1 = vnoise4g(q + vec2(0.0, 0.2), gx, gy).x;
#ifdef SEA_LITE
  return vec3(n0.x, (h1 - n0.x) * 5.0, n0.y);
#else
  vec2 k = vec2(2.3, 2.7), q2 = q * k + vec2(13.7, 7.1), g2x = gx * k, g2y = gy * k;
  float d0 = vnoise4g(q2, g2x, g2y).x, d1 = vnoise4g(q2 + vec2(0.0, 0.54), g2x, g2y).x;
  return vec3(n0.x * 0.65 + d0 * 0.35, ((h1 - n0.x) * 0.65 + (d1 - d0) * 0.35) * 5.0, n0.y);
#endif
}
/** p: the world position (absolute), d: from the camera, dist: its length; pw: how much of the low sun's (or the moon's)
 *  path on the water is here (0 \u2026 1) */
vec3 paintedSea(vec2 p, vec2 d, float dist, float pw){
  vec2 V = d / max(dist, 1e-3), e = vec2(-uSeaDir.y, uSeaDir.x);
  float c = dot(uSeaDir, V);
  float al = dot(p, e), ac = dot(p, uSeaDir);   // (along the crests, and the way they roll)
  vec2 dx = dFdx(d), dy = dFdy(d), gx = vec2(dot(dx, e), dot(dx, uSeaDir)), gy = vec2(dot(dy, e), dot(dy, uSeaDir));
  float lod = max(log2(dist / 40.0), 0.0), k0 = floor(lod), fr = lod - k0;
  float lam = 3.0 * exp2(1.75 * k0), mu = 1.1 * exp2(0.75 * k0), lb = lam * 3.3635857, mb = mu * 1.6817928;
  vec2 sa = vec2(1.0 / mu, 1.0 / lam), sb = vec2(1.0 / mb, 1.0 / lb);
  vec3 ra = ripple(vec2(al / mu, (ac - 1.25 * sqrt(lam) * uTime) / lam) + k0 * vec2(37.0, 53.0), gx * sa, gy * sa);
  vec3 rb = ripple(vec2(al / mb, (ac - 1.25 * sqrt(lb) * uTime) / lb) + (k0 + 1.0) * vec2(37.0, 53.0), gx * sb, gy * sb);
  float sn = inversesqrt((1.0 - fr) * (1.0 - fr) + fr * fr);              // (a blend that keeps the contrast)
  float h = 0.5 + (mix(ra.x, rb.x, fr) - 0.5) * sn, sl = mix(ra.y, rb.y, fr) * sn * (c < 0.0 ? -1.0 : 1.0); // (slope: up away from us)
  float con = smoothstep(0.05, 0.3, abs(c));                               // (no faces seen looking along the crests)
  // the tones by distance, measured in the painting row by row: its water pales steadily from the wall out to ~250 m,
  // then (all its tones together, keeping their contrast) on towards the light azure of the far shore
  float f1 = clamp(log2(dist / 33.0) * 1.16, 0.0, 1.0), ff = clamp(log2(dist / 60.0) * 0.485, 0.0, 1.0);
  vec3 hz = (uPHz - uPFar) * smoothstep(0.0, 1.0, log2(dist / 230.0) * 0.5);
  vec3 T = mix(mix(uPTrough, uPMidD, f1), uPFarD, ff) + hz, M = mix(mix(uPMid, uPMidM, f1), uPFar, ff) + hz;
  vec3 F = mix(mix(uPFace, uPMidF, f1), uPFarF, ff) + hz, Li = mix(mix(uPLite, uPMidL, f1), uPFarL, ff);
  float aw = fwidth(sl) * 0.6 + 0.02, hw = fwidth(h) * 0.6 + 0.01;
  float dark = smoothstep(0.22 - aw, 0.22 + aw, sl) * con, lite = smoothstep(0.22 - aw, 0.22 + aw, -sl) * con;
  vec3 col = mix(M, T, dark * (0.7 + 0.3 * smoothstep(0.22, 0.72, sl)));
  col = mix(col, F, lite);
  col = mix(col, Li, lite * smoothstep(0.59 - hw, 0.59 + hw, h));
  float gl = mix(ra.z, rb.z, fr), gw = fwidth(gl) * 0.6 + 0.01, gt = 0.67 - 0.14 * ff;   // (more glints far out)
  float white = lite * max(smoothstep(0.77 - hw, 0.77 + hw, h), smoothstep(gt - gw, gt + gw, gl) * smoothstep(0.45, 0.6, h));
  col = mix(col, mix(uPSpark, uPFarL, ff * 0.5), white);
  if (pw > 0.003) {
    // the low sun's (or the moon's) path, as the paintings draw it: a column of light on the water under it, its wavelets'
    // lit backs taking its colour and most of them glinting, the water between lighter too
    col = mix(col, mix(col, uPPath, 0.5), pw * (1.0 - lite) * 0.75);
    col = mix(col, uPPath, min(lite * 1.5, 1.0) * pw);
    float pg = lite * max(smoothstep(0.6 - 0.25 * pw - hw, 0.6 - 0.25 * pw + hw, h), smoothstep(gt - 0.2 * pw - gw, gt - 0.2 * pw + gw, gl));
    col = mix(col, uPGlint, pg * pw);
  }
  return col;
}
vec3 seaColour(vec3 w){
  vec3 V = normalize(uCam - w); float dist = length(uCam.xz - w.xz);
  vec2 p = w.xz + uOrigin;   // (world-anchored: the patterns stay put when the world's origin moves)
  vec3 col = vec3(0.0);
  if (uPaint < 0.999) {
    float e = 0.6, h0 = wh(p);
    vec3 N = normalize(vec3((h0 - wh(p + vec2(e, 0.0))) * 1.4, 1.0, (h0 - wh(p + vec2(0.0, e))) * 1.4));
    N = normalize(mix(N, vec3(0.0, 1.0, 0.0), smoothstep(80.0, 900.0, dist) * 0.8));
    vec3 R = reflect(-V, N);
    float al = max(dot(R, uSunDir), 0.0);
    float spec = pow(al, 300.0) * 5.0;
    float broad = pow(al, 18.0);
    float spark = step(0.86, vnoise(p * 2.2 + vec2(uTime * 0.7, -uTime * 0.5))) * step(0.5, vnoise(p * 0.7 - uTime * 0.3));
    vec3 glint = uSunCol * (spec + spark * broad * 3.0 + broad * 0.15) * (1.0 - uNight * 0.6) * uSpecK;
    float fres = pow(1.0 - max(dot(V, N), 0.0), 3.0);
    // dawn, dusk, night and grey skies: the water mirrors the sky (more of the blue overhead the brighter the day), with
    // the sun's glints, in the fog
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
    // the painted sea (under a clear sky): the painting's wavelets, paling into the light azure at the far shore by day
    // (uWaves off, a test switch: its flat tones). The low sun's (or the moon's) path: where the water would mirror it into
    // the eye with a wave tilted no more than the painted waves are (the half-vector's tilt from the vertical)
    float pw = 0.0;
    if (uPathK > 0.001) { vec3 H = normalize(uPathDir + V); pw = uPathK * exp(-(1.0 - H.y) * 16.0); }
    vec3 pc = uWaves > 0.5 ? paintedSea(p, w.xz - uCam.xz, dist, pw) : mix(uPMid, uPFar, smoothstep(15.0, 260.0, dist));
    pc = mix(pc, uPHz, smoothstep(1500.0, 4000.0, dist) * 0.7);
    col = mix(col, pc, uPaint);
  }
  return col;
}`;function wv(i=!1){let e=new mt({fog:!1,defines:i?{SEA_LITE:""}:{},uniforms:Xl,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${Sv}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`}),t=new dt(new nn(14e3,14e3),e);t.rotation.x=-Math.PI/2,t.position.y=os,t.renderOrder=998,t.frustumCulled=!1;let n=Xl;return{mesh:t,u:n,update(s,r,o,l=1,a=null,u=null,h=0){t.position.x=s.x,t.position.z=s.z,u&&l>0&&rw(u,h,n.uSeaDir.value),n.uTime.value=r,n.uCam.value.copy(s),n.uNight.value=re.night,n.uBright.value=re.bright,n.uFogD.value=o,n.uVis.value=l,n.uSpecK.value=1-re.overcast*.85;let p=a?Jo():0;n.uPaint.value=p;let m=1+.25*re.bright,x=1/(Math.PI*m),y=re.sunCol,M=re.hemiSky,c=re.sunI*.8,f=re.hemiI;if(n.uFoamLit.value.setRGB((y.r*c+M.r*f)*x,(y.g*c+M.g*f)*x,(y.b*c+M.b*f)*x),n.uFoamShade.value.setRGB(M.r*f*.9*x,M.g*f*.9*x,M.b*f*.9*x),n.uPathK.value=0,p>0){let d=sw.at(re.t),g=a;d.ug(g,"trough",n.uPTrough.value),d.ug(g,"mid",n.uPMid.value),d.ug(g,"face",n.uPFace.value),d.ug(g,"lite",n.uPLite.value),d.ug(g,"midD",n.uPMidD.value),d.ug(g,"midM",n.uPMidM.value),d.ug(g,"midF",n.uPMidF.value),d.ug(g,"midL",n.uPMidL.value),d.ug(g,"farD",n.uPFarD.value),d.ug(g,"far",n.uPFar.value),d.ug(g,"farF",n.uPFarF.value),d.ug(g,"farL",n.uPFarL.value),d.ug(g,"hz",n.uPHz.value),n.uFoamLit.value.lerp(d.ug(g,"foam",yv),p),n.uFoamShade.value.lerp(d.ug(g,"foamShade",yv),p),d.ug(g,"spark",n.uPSpark.value),Hh(d,g,"wBack",n.uPWBack.value,n.uPMid.value),Hh(d,g,"wFace",n.uPWFace.value,n.uPMid.value),Hh(d,g,"wLite",n.uPWLite.value,n.uPMid.value),Hh(d,g,"wTurq",n.uPWTurq.value,n.uPMid.value);let v=re.sunEl>-.04?re.sunDir:re.moonDir,b=Math.min(Math.max((v.y-.3)/.3,0),1);n.uPathK.value=d.rgb("pk")[0]*p*n.uWaves.value*(1-b*b*(3-2*b)),n.uPathK.value>0&&(n.uPathDir.value.copy(v),d.ug(g,"path",n.uPPath.value),d.ug(g,"glint",n.uPGlint.value))}}}}var yv=new he,Hh=(i,e,t,n,s)=>{i.ug(e,t,n),n.r-=s.r,n.g-=s.g,n.b-=s.b},Qo={zone:-1,x:1,z:0},_v={},bv=.35;function rw(i,e,t){let n=Math.floor((e-150)/Ai),s=Math.floor((e+800)/Ai)+1;for(let r=n;r<=s;r++)if(!(_h(r*Ai+Ai/2,"coast")<.99)){if(r!==Qo.zone){let o=0,l=0;for(let h=r*Ai-Oo;h<=(r+1)*Ai;h+=25)i.at(Math.max(h,0),_v),o+=_v.h,l++;o/=l,Qo.zone=r;let a=Math.cos(bv),u=Math.sin(bv);Qo.x=-Math.sin(o)*a-Math.cos(o)*u,Qo.z=-Math.cos(o)*a+Math.sin(o)*u}t.set(Qo.x,Qo.z);return}}function Tv(i=!1){let e=gv(5.5),t=gv(.45),n=8*ql/Gl,s=nw(2.6),r=Cd(.8),o=Cd(17.3),l=Cd(3.7);return new mt({fog:!1,defines:i?{SHORE_LITE:"",SEA_LITE:""}:{},uniforms:Xl,vertexShader:"attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      ${Sv}${Yl}
      uniform vec3 uPWBack, uPWFace, uPWLite, uPWTurq; uniform float uShoreW;
      varying vec2 vSU; varying vec2 vHF; varying vec3 vW;
      vec4 vnoise4L(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0); }
      // a wave's profile as the painting draws it, by e (from its line of foam, in waves; > 0 beyond it): the water just
      // beyond the foam a bright clear cyan, lightest at the foam, fading into the blue; the trough between two waves navy
      float faceW(float e, float aa){ return (1.0 - smoothstep(0.05, 0.38, e)) * smoothstep(0.0, aa, e); }
      float troughW(float e){ return smoothstep(0.2, 0.4, abs(e)); }
      void main(){
        vec3 sea = seaColour(vW), col = sea;
        float s = vSU.x, d = max(vSU.y, 0.0), dist = length(uCam - vW);
        if (uShoreW > 0.5) {
          // the waves' frame (m): a along their crests (out from the wall), b square to them (away from us, out to sea)
          float a = d * ${Gn(Vh)} - s * ${Gn(Gl)}, b = s * ${Gn(Vh)} + d * ${Gn(Gl)};
          vec4 nA = vnoise4(vec2(s * 0.0609524, d * 0.12 + uTime * 0.01));
          float wob = (nA.x - 0.5) * 0.9;   // (the rows wander)
          // the waves drawn here: the smallest (OCT to each big one) out to 8 m from us, then doubling at each doubling of
          // the distance, every other crest fading out in between, so the sizes hand over without a seam. q: the phase in
          // this size's waves; e: from the nearest crest of this size, e1: of the next size up (in their own waves); f:
          // since the last big wave passed
          float ph1 = (shorePhase(s, d) + wob) * ${Wh.toFixed(1)}, f = fract(ph1 * ${(1/Wh).toFixed(3)}), fw1 = fwidth(ph1) + 1e-4;
          float L = clamp(log2(dist * 0.125), 0.0, 3.0), k0 = floor(L), fr = L - k0, P = exp2(k0);
          float q = ph1 / P, n0 = floor(q + 0.5), n1 = floor(0.5 * q + 0.5), ev = 1.0 - mod(n0, 2.0), aa = fw1 / P * 1.2;
          // the details' coordinates and their footprints on screen first (they are read only near the crests and where
          // there is foam): the crest's torn edge and its beads ride with the crest; the lace stays in the water as the
          // waves pass through it, drifting in slowly. Along the road they repeat with S_WRAP
          vec2 pC = vec2(a * ${Gn(e)}, ph1 * ${Gn(r)}), cx = dFdx(pC), cy = dFdy(pC);
          vec2 pL = vec2(a * ${Gn(t)}, (b + uTime * 0.3) * ${Gn(s)}), lx = dFdx(pL), ly = dFdy(pL);
          // the waves in full out to ~14 m from the wall, easing into the open sea's own wavelets by the strip's edge; their
          // crests fade as they shrink to a few pixels far ahead
          float near = 1.0 - smoothstep(14.0, 36.0, d), vis = 1.0 - smoothstep(0.07, 0.18, aa * 0.8333), nw = 1.0 - smoothstep(3.0, 20.0, d);
          // a short-crested sea, as the painting's: each crest a few of its wavelengths long, bowed, bigger and smaller
          // along it, breaking where it is biggest (more of it near the wall), each its own: one pattern per crest, riding
          // with it, at its size (E0 for the crests of this size, E1 for the next size's)
          vec4 E0 = vnoise4L(vec2(a * ${Gn(n)} / P + n0 * P * ${Gn(o)}, n0 * P * ${Gn(l)}));
          vec4 E1 = vnoise4L(vec2(a * ${Gn(n)} * 0.5 / P + n1 * 2.0 * P * ${Gn(o)}, n1 * 2.0 * P * ${Gn(l)}));
          float e = q - n0 + (E0.y - 0.5) * 0.45, e1 = 0.5 * q - n1 + (E1.y - 0.5) * 0.45, bz = 0.12 + 0.1 * nw;
          float A0 = smoothstep(0.26, 0.5, E0.x + bz), A1 = smoothstep(0.26, 0.5, E1.x + bz);
          float B0 = smoothstep(0.46, 0.66, E0.x + bz + 0.08 * nw), B1 = smoothstep(0.46, 0.66, E1.x + bz + 0.08 * nw);
          // the crest drawn: this size's (the ones the next size up doesn't have fading out, the others growing into it)
          float Ac = mix(A0, A1 * ev, fr), brk = mix(B0, B1 * ev, fr), ec = mix(e, 2.0 * e1, fr * ev), gw = 1.0 + fr * ev;
          // the painted tones (a bright day): the open sea's own (Ms, at this distance) with the waves' cyan and navy, its
          // wavelets riding on them calmed
          float f1 = clamp(log2(dist / 33.0) * 1.16, 0.0, 1.0), ff = clamp(log2(dist / 60.0) * 0.485, 0.0, 1.0);
          vec3 Ms = mix(mix(uPMid, uPMidM, f1), uPFar, ff);
          float face = mix(faceW(e, aa) * (0.55 + 0.45 * A0), faceW(e1, aa * 0.5) * (0.55 + 0.45 * A1), fr);
          float back = mix(troughW(e) * (0.6 + 0.4 * A0), troughW(e1) * (0.6 + 0.4 * A1), fr);
          vec3 tone = Ms + uPWBack * (back * 1.35) + mix(uPWFace, uPWLite, smoothstep(0.55, 1.0, face)) * (face * 1.4) + uPWTurq * (0.6 - 0.6 * smoothstep(1.0, 7.0, d));
          col = mix(sea, max(tone + (sea - Ms) * (0.35 - 0.15 * face), vec3(0.0)), uPaint * near);
          // the line of foam: beads and dashes of white along it (nearly unbroken where it breaks); where it breaks a white
          // crest with a torn top and streaks of foam falling from it. Lit on top, in its own light-blue shade below
          float crest = 0.0, cl = 1.0;
          // (its torn top and the streaks are spray and foam standing up off the water, seen from the side: looking down
          // on it from high up they shrink to the crest. Its reach (rc): the noise is read only within it)
          float lw = (0.027 + 0.021 * E0.w) * gw, cw = 0.16 * brk * (0.6 + 0.8 * E0.z) * gw;
          float sv = 1.0 - 0.75 * smoothstep(0.25, 0.7, (uCam.y - vW.y) / max(dist, 1.0)), fl = 0.4 * brk * sv;
          float rc = max(lw + 0.01, ec > 0.0 ? cw * (0.15 + 5.12 * sv) : cw * 1.2 + fl) + aa;
          if (abs(ec) < min(rc, 0.45) && vis * near * Ac > 0.01) {
            vec4 nC = vnoise4g(pC, cx, cy);
            float line = (1.0 - smoothstep(lw - aa, lw + aa, abs(ec + 0.008))) * smoothstep(-0.05, 0.05, nC.x - mix(0.62, 0.3, brk));
            float up = cw * (0.15 + 3.2 * nC.y * nC.y * nC.y * (0.4 + 1.2 * E0.w) * sv), dn = cw * (0.3 + 0.9 * nC.w);
            float out1 = ec > 0.0 ? ec - up : -ec - dn;                     // (outside the crest, in waves)
            float tuft = (1.0 - smoothstep(-aa, aa, out1)) * step(0.01, cw);
            float t = clamp(out1 / max(fl, 1e-3), 0.0, 1.0);
            float fing = ec < 0.0 ? smoothstep(0.0, 0.05, nC.z - 0.5 - 0.42 * t) * (1.0 - t) * step(0.0, out1) * brk : 0.0;
            crest = max(max(line, tuft), fing) * Ac * vis * near;
            cl = clamp(0.6 + (ec + dn * 0.5) / max(cw + lw, 1e-3) * 0.5 + 0.35 * (nC.w - 0.5), 0.0, 1.0);
          }
          // the lace: running back from a breaking crest and streaked beyond it, churned along the wall as each big wave
          // hits it (and on through the water near it), and round the heaps
          float trail = brk * near * smoothstep(0.0, aa, ec) * (1.0 - smoothstep(0.02, 0.25, ec)) * 0.55;
          float hit = 1.0 - smoothstep(0.0, 0.35, fract(shorePhase(s, 0.0) + wob));
          float amt = max(trail, max(faceW(ec, aa) * brk * near * 0.3, (1.0 - smoothstep(0.3, 0.9 + 2.2 * hit, d)) * (0.55 + 0.45 * hit)));
          amt = max(amt, (1.0 - smoothstep(1.0, 8.0, d)) * (0.36 + 0.5 * hit));
          amt = max(amt, vHF.x * (0.6 + 0.4 * (1.0 - smoothstep(0.0, 0.4, f))));
          float la = 0.0; vec3 foam = uFoamLit;
          if (amt > 0.08) {
            vec4 nB = vnoise4g(pL, lx, ly);
            float lf = length(lx) + length(ly), lw = 0.01 + 0.3 * lf, th = mix(1.25, 0.5, amt), ww = 0.045 * amt;
            la = max(smoothstep(th - lw, th + lw, nB.x), (1.0 - smoothstep(ww - lw, ww + lw, abs(nB.x - 0.5))) * (1.0 - smoothstep(0.08, 0.22, lf))) * smoothstep(0.08, 0.2, amt);
            foam = mix(uFoamShade, uFoamLit, clamp(0.45 + 0.8 * (nB.y - 0.35), 0.0, 1.0));
          }
          foam = mix(foam, mix(uFoamShade, uFoamLit, cl), crest);
          // it all fades out with the sea's fog, towards the end of the built world and towards the strip's ends
          float fd = dist * uFogD, k = exp(-fd * fd) * (1.0 - smoothstep(420.0, 700.0, dist)) * vHF.y;
          col = mix(mix(sea, col, k), foam, max(la, crest) * k);
        }
        gl_FragColor = vec4(mix(uFog, col, uVis), 1.0);
      }`})}function Ev(){return new mt({fog:!1,uniforms:{uNoiseTex:Pe.uNoiseTex,uTime:{value:0},uSunDir:{value:re.lightDir},uSunCol:{value:re.sunCol},uHorizon:{value:re.horizon},uZenith:{value:re.zenith},uFog:{value:re.fog},uFogD:{value:.002},uNight:{value:0},uSpecK:{value:1}},vertexShader:"attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${Ri}
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
      }`})}var ea={n:8,drops:4};function Av(){return new mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:Xl,vertexShader:`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC; attribute float aK;
      varying vec2 vUv; varying vec4 vK;
      ${Yl}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        // two bursts to each big wave: its own, and a smaller one halfway to the next (the waves between, as the shore's)
        float ph = (shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13)) * 2.0; // (each a moment after the wave arrives)
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13) * (1.0 - 0.4 * mod(wave, 2.0)); // how hard it hits here
        float age = fract(ph) * ${(Hs.T/2).toFixed(3)};
        float h1 = fract(seed * 13.7), h2 = fract(seed * 71.3), h3 = fract(seed * 3.31), h4 = fract(seed * 27.9);
        vec3 base = position - vec3(0.0, 0.3, 0.0);                                 // (the water's surface)
        float H = (0.8 + 1.2 * h1) * (0.6 + 0.6 * str), k, a;
        vec2 half2;
        vec3 p;
        if (aK < 0.5) {
          // the lace sheet: up fast (most of its height in a fifth of a second), then eroding as it falls back
          float dur = 1.0 + 0.6 * str; k = age / dur;
          float g = 1.0 - (1.0 - min(age / 0.28, 1.0)) * (1.0 - min(age / 0.28, 1.0));
          float hh = H * g * (1.0 - 0.25 * smoothstep(0.5, 1.0, k));
          half2 = vec2(H * (0.5 + 0.3 * h4), 0.5 * hh);
          p = base - vec3(0.0, 0.35 * H * smoothstep(0.55, 1.0, k), 0.0);
          a = smoothstep(0.0, 0.05, k) * (1.0 - smoothstep(0.88, 1.0, k));
        } else {
          // a droplet: flung up and out from the sheet's upper half, falling back into the sea
          float j = aK * 1.618, d1 = fract(seed * 91.7 + j * 0.37), d2 = fract(seed * 37.1 + j * 0.71), d3 = fract(seed * 17.9 + j * 0.13), d4 = fract(seed * 53.3 + j * 0.53);
          float t = age - 0.08 - 0.12 * d1; k = t / 1.3;
          float up = (2.2 + 2.6 * d2) * (0.6 + 0.5 * str), out1 = (0.6 + 1.6 * d3);
          vec2 o = aB.xy, sd = vec2(-o.y, o.x) * (d4 - 0.5) * 2.6;
          vec2 hv = o * out1 * (d1 - 0.35) + sd;
          p = base + vec3((d4 - 0.5) * H * 0.6, H * (0.25 + 0.35 * d2), 0.0) + vec3(hv.x * t, up * t - 4.9 * t * t, hv.y * t);
          float r = (0.035 + 0.05 * d3) * (0.7 + 0.5 * str);
          half2 = vec2(r);
          a = step(0.0, t) * step(-0.15, p.y - base.y) * (1.0 - smoothstep(0.85, 1.0, k));
        }
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float near = smoothstep(2.5, 7.0, -mv.z);   // (right by the camera it thins out and shrinks: big cards cost fill)
        // (droplets fade out before they shrink under a pixel or two far off)
        float far = aK < 0.5 ? 1.0 : 1.0 - smoothstep(45.0, 90.0, -mv.z);
        vec2 off = aC.xy * half2 * (0.4 + 0.6 * near);
        if (aK < 0.5) off.y += half2.y * (0.4 + 0.6 * near);   // (the sheet stands on its foot)
        mv.xy += off;
        vUv = aC.xy; vK = vec4(k, uVis * near * far * a, seed, aK);
        gl_Position = k < 1.0 && str > 0.25 && vK.y > 0.01 ? projectionMatrix * mv : vec4(2.0, 2.0, 2.0, 1.0);
      }`,fragmentShader:`
      uniform vec3 uFoamLit, uFoamShade; varying vec2 vUv; varying vec4 vK;
      ${Ri}
      vec4 vnoise4g(vec2 p, vec2 gx, vec2 gy){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, gx / 256.0, gy / 256.0); }
      void main(){
        if (vK.w > 0.5) {
          // a droplet: a crisp round drop, white on top, light blue below
          float r = length(vUv), fw = fwidth(r) * 1.2;
          float a = (1.0 - smoothstep(1.0 - fw, 1.0, r)) * vK.y;
          if (a < 0.01) discard;
          gl_FragColor = vec4(mix(uFoamShade, uFoamLit, 0.55 + 0.45 * vUv.y), a);
          return;
        }
        // the lace sheet: a fan of streaks from its foot (the card's bottom middle), each its own length, ragged and spiky at
        // the tips; lace holes open and the tips break into drops as it erodes (k: its age, 0\u20261)
        vec2 q = vec2(vUv.x, (vUv.y + 1.0) * 0.5);       // (x \u22121\u20261 across, y 0\u20261 up from the foot)
        float th = atan(q.x, q.y * 1.15 + 0.05), r = length(vec2(q.x * 0.85, q.y));
        float sd = vK.z * 97.0;
        // (the noise's footprint first: taken before any branch or discard)
        vec2 pa = vec2(th * 3.2 + sd, sd * 0.37), pb = vUv * vec2(3.4, 4.6) + sd, pc = vUv * vec2(7.5, 9.0) + sd * 1.7;
        vec2 ax = dFdx(pa), ay = dFdy(pa), bx = dFdx(pb), by = dFdy(pb), cx = dFdx(pc), cy = dFdy(pc);
        float fr = fwidth(r) + 1e-4;
        if (abs(th) > 1.35 || vK.y < 0.01) discard;
        vec4 nA = vnoise4g(pa, ax, ay), nB = vnoise4g(pb, bx, by), nC = vnoise4g(pc, cx, cy);
        // each streak's reach (a ridged noise along the fan: spikes), shorter towards the fan's sides
        float rid = 1.0 - abs(2.0 * nA.x - 1.0);
        float reach = (0.5 + 0.5 * rid * rid + 0.12 * (nA.y - 0.5)) * (1.0 - 0.42 * th * th);
        float k = vK.x, ero = smoothstep(0.15, 1.0, k);
        // lace: holes that open as it erodes, most where it is thin (up towards the tips)
        float lace = nB.x * 0.6 + nC.x * 0.4;
        float m = (reach - r) * 3.0 + (lace - 0.5) * (0.9 + 1.4 * ero) - ero * (1.6 + 1.2 * r);
        float a = smoothstep(-fr * 3.0, fr * 3.0, m) * vK.y;
        if (a < 0.01) discard;
        // white on top and at the streaks' tips, its foot and its thick middle in a light blue shade
        float lit = clamp(0.2 + 1.2 * r - 0.35 * smoothstep(0.0, 0.6, m) + 0.3 * (nC.y - 0.5), 0.0, 1.0);
        gl_FragColor = vec4(mix(uFoamShade, uFoamLit, lit), a);
      }`})}function Rv(i){let e=i.length/8;if(!e)return null;let t=1+ea.drops,n=e*t,s=new Float32Array(n*12),r=new Float32Array(n*16),o=new Float32Array(n*12),l=new Float32Array(n*4),a=new Uint16Array(n*6),u=[-1,1,1,-1],h=[-1,-1,1,1],p=1/0,m=1/0,x=1/0,y=-1/0,M=-1/0,c=-1/0;for(let d=0;d<e;d++){let g=d*8;for(let v=0;v<t;v++){let b=d*t+v;for(let T=0;T<4;T++){let w=b*4+T;s[w*3]=i[g],s[w*3+1]=i[g+1],s[w*3+2]=i[g+2],r[w*4]=i[g+3],r[w*4+1]=i[g+4],r[w*4+2]=i[g+5],r[w*4+3]=i[g+6],o[w*3]=u[T],o[w*3+1]=h[T],o[w*3+2]=i[g+7],l[w]=v}a.set([b*4,b*4+1,b*4+2,b*4,b*4+2,b*4+3],b*6)}p=Math.min(p,i[g]),m=Math.min(m,i[g+1]),x=Math.min(x,i[g+2]),y=Math.max(y,i[g]),M=Math.max(M,i[g+1]),c=Math.max(c,i[g+2])}let f=new bt;return f.setAttribute("position",new wt(s,3)),f.setAttribute("aB",new wt(r,4)),f.setAttribute("aC",new wt(o,3)),f.setAttribute("aK",new wt(l,1)),f.setIndex(new wt(a,1)),f.boundingBox=new fi(new H(p-4,m-1,x-4),new H(y+4,M+4,c+4)),f.boundingSphere=f.boundingBox.getBoundingSphere(new di),f}var Vt=60,Pd=[[.5,.055],[.6,.075],[.67,.025],[.74,.075],[.84,.055]],Cv=[.7,.9,1.45,1.5,1.9,2,2.1,2.65,3.05,3.4],Pv=[7,9,11.5,14.5,18,23,29,36,45,56,70,86,104,124,140,160,185,215],Vs=32,Id=[-.2,2.2,5.5,10,17,27,38],Zl=[.025,.026,.032],Iv=[.05,.05,.065],Lv=new Qe,Ss=(i,e)=>(i%e+e)%e,Ws=(i,e)=>{let t=ur(i);return!!t&&Math.abs(i-t.s)<e},Gh=i=>Ss(i,4)===0,ow=i=>Ss(i,2)===0,Fd=1.4,Dv=i=>Gh(i)?4.4:Fd+.9,Ld=i=>Gh(i)?3.4:Fd-.1,Dd=(i,e)=>Math.abs(i-Math.round(i/300)*300)<e,Ci=(i,e)=>{let t=Oi(i);return!!t&&Math.abs(i-t.s)<e},ri=(i,e)=>{let t=Bi(i);return!!t&&Math.abs(i-t.s)<e},Nd=class{constructor(){this.P=[],this.N=[],this.SU=[],this.ZW=[],this.RK=[],this.RV=[],this.ZS=[],this.I=[]}grid(e,t,n){let s=this.P.length/3;for(let r=0;r<e;r++)for(let o=0;o<t;o++){let l=n(r,o);this.P.push(l[0],l[1],l[2]),this.N.push(l[3],l[4],l[5]),this.SU.push(l[6],l[7]),this.ZW.push(l[8],l[9],l[10],l[11]),this.RK.push(l[12],l[13]),this.RV.push(l[14]||0),this.ZS.push(l[15]||0)}for(let r=0;r<e-1;r++)for(let o=0;o<t-1;o++){let l=s+r*t+o,a=l+1,u=l+t,h=u+1;this.I.push(l,a,u,a,h,u)}}gridN(e,t,n,s=0,r=0){let o=t+s+r,l=new Array(e*o);for(let u=0;u<e;u++)for(let h=0;h<o;h++)l[u*o+h]=n(u,h-s);let a=(u,h)=>l[Math.min(e-1,Math.max(0,u))*o+Math.min(o-1,Math.max(0,h))];for(let u=0;u<e;u++)for(let h=s;h<s+t;h++){let p=a(u,h-1),m=a(u,h+1),x=a(u-1,h),y=a(u+1,h),M=l[u*o+h],c=m[0]-p[0],f=m[1]-p[1],d=m[2]-p[2],g=y[0]-x[0],v=y[1]-x[1],b=y[2]-x[2],T=f*b-d*v,w=d*g-c*b,_=c*v-f*g;w<0&&(T=-T,w=-w,_=-_);let S=Math.hypot(T,w,_)||1;M[3]=T/S,M[4]=w/S,M[5]=_/S}this.grid(e,t,(u,h)=>l[u*o+h+s])}build(){let e=new bt;return e.setAttribute("position",new je(this.P,3)),e.setAttribute("normal",new je(this.N,3)),e.setAttribute("su",new je(this.SU,2)),e.setAttribute("zw",new je(this.ZW,4)),e.setAttribute("rk",new je(this.RK,2)),e.setAttribute("rv",new je(this.RV,1)),e.setAttribute("zs",new je(this.ZS,1)),e.setIndex(this.I),e.computeBoundingSphere(),e}},qh=class{constructor(e,t,n,s){this.path=t,this.M=n,this.riverMat=s,this.heapCache=new Map,this.group=new un,e.add(this.group),this.chunks=new Map,this.origin={x:0,z:0},this.reveal=[],this.ahead=760,this.behind=40}setOrigin(e,t){this.origin.x=e,this.origin.z=t;for(let n of this.chunks.values())n.group.position.set(n.ox-e,0,n.oz-t)}update(e,t){let n=Math.floor((e-this.behind)/Vt),s=Math.floor((e+this.ahead)/Vt);for(let[o,l]of this.chunks)(o<n-1||o>s+1)&&(this.dispose(l),this.chunks.delete(o));this.job&&(this.job.c<n-1||this.job.c>s+1)&&(this.job=null);{let o=this.reveal[0];if(o){let l=o.pending.shift();l&&o.group.add(l),o.pending.length||this.reveal.shift()}}let r=performance.now();for(;;){if(!this.job){let l=-1;for(let a=Math.max(0,n);a<=s;a++)if(!this.chunks.has(a)){l=a;break}if(l<0)return 0;l*Vt-e<320&&(t=Math.max(t,12)),this.job={c:l,it:this.gen(l)}}let o=this.job.it.next();if(o.done){let l=o.value;l.pending=l.group.children.slice(),l.group.clear(),this.chunks.set(this.job.c,l),this.group.add(l.group),this.reveal.push(l),this.job=null}if(performance.now()-r>t)return 1}}dispose(e){if(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.pending){for(let n of e.pending)n.geometry&&n.geometry.dispose();e.pending.length=0}let t=this.reveal.indexOf(e);t>=0&&this.reveal.splice(t,1)}lod(e,t,n,s=1/0){this.chunks.forEach((r,o)=>{let l=o*Vt-e,a=r.group.children;for(let u=0;u<a.length;u++){let h=a[u],p=h.userData.detail;p&&(h.visible=p==="leaf"?l<s:l<t||n&&p==="light")}})}flush(){for(let e of this.reveal){for(let t of e.pending)e.group.add(t);e.pending.length=0}this.reveal.length=0}*gen(e){let t=this.path,n=e*Vt,s=n+Vt,r=t.at(n),o=r.x,l=r.z,a=At(Math.floor(gn(e,777)*4294967295)),u={atlas:new Kt({uv:!0,ao:!0,lit:!0}),color:new Kt({ao:!0}),foliage:new Kt,leaf:new Kt({uv:!0}),lamp:new Kt({color:!1}),sig:new Kt({color:!1}),sodium:new Kt({color:!1}),decal:new Kt({uv:!0}),pool:new Kt({uv:!0,color:!1}),gleaf:new Kt({uv:!0,off:!0}),gblossom:new Kt({uv:!0,off:!0}),tetra:new Kt({uv:!0,ao:!0}),bark:new Kt({uv:!0,ao:!0,idx:!0})},h=new Nd,p={rows:[],puffs:[]},m=[];u.lamps=[];let x={},y={},M=(E,R)=>{t.at(E,y);let C=Bn(E,"rw");return y.y+_s(E,R,y.y,C)},c=E=>{let R=Dt(E);return[R.city,R.sakura,R.coast,R.country,R.snow]},f=(E,R,C)=>(t.at(E,x),[x.x+x.rx*R-o,C,x.z+x.rz*R-l]),d=(E,R,C,I=0,A=!0)=>{t.at(E,x);let L=x.h-Math.PI/2+(A&&R<0?Math.PI:0)+I,D=new Qe().makeRotationY(L);return D.setPosition(x.x+x.rx*R-o,C,x.z+x.rz*R-l),D.groundY=C,D},g=(E,R,C=0,I=0,A=!0)=>{let L=M(E,R),D=d(E,R,L+C,I,A);return D.groundY=L,D},v=E=>t.at(E,y).y,b=E=>Bn(E,"rw"),T=E=>{let R=Dt(E);return R.city+R.sakura>.5?R.city>=R.sakura?3:2.6:0};{let E=Bi(n+Vt/2),R=!!E&&E.s>n-40&&E.s<s+40,C=R?61:21,I=b(n+Vt/2),A=(()=>{let q=[0,...Cv].map($=>$);return Pv.forEach($=>q.push($-I)),q})(),L=[...A.slice().reverse().map(k=>-k),...A],D=L.length,O=Array.from({length:C},(k,q)=>n+q/(C-1)*Vt);{let k=Oi(n+Vt/2);if(k)for(let q of[k.s-vn,k.s+vn])q>n+.1&&q<s-.1&&O.push(q-.03,q+.03)}O.sort((k,q)=>k-q);let z=D/2,F=O.map(k=>(t.at(k,x),{s:k,f:{...x},rw:b(k),w:c(k),rb:R?_g(k):0})),V=Math.round(z/2);for(let[k,q,$,Me]of[[0,V,0,1],[V-1,z,1,0],[z,z+V+1,0,1],[z+V,D,1,0]])h.gridN(F.length,q-k,(Te,Se)=>{let G=F[Te],J=G.f,ve=k+Se,Ce=L[ve],te=Ce===0&&G.w[2]>0?.15:0,ge=Ce<0||Ce===0&&ve<z?Ce-G.rw+te:Ce+G.rw-te,Fe=J.y+_s(G.s,ge,J.y,G.rw),Oe=Math.abs(ge)>G.rw+.98?Math.min(1,xh/.5):0;return[J.x+J.rx*ge-o,Fe,J.z+J.rz*ge-l,0,1,0,Ss(G.s,jn),ge,G.w[0],G.w[1],G.w[2],G.w[3],G.rw,0,G.rb>0?G.rb:-Oe,G.w[4]]},$,Me),yield}yield,h.grid(31,2,(R,C)=>{let I=n+R/30*Vt,A=b(I),L=C?A:-A;t.at(I,x);let D=x.y,O=(v(I+1)-v(I-1))/2,z=-O*x.fx,F=1,V=-O*x.fz,k=Math.hypot(z,F,V),q=c(I);return[x.x+x.rx*L-o,D,x.z+x.rz*L-l,z/k,F/k,V/k,Ss(I,jn),L,q[0],q[1],q[2],q[3],A,1,0,q[4]]});{let E=[];for(let I=0;I<=30;I++){let A=n+I/30*Vt;E.push({s:A,sw:T(A)})}let R=[],C=null;for(let I of E)I.sw>0?(C||(C=[],R.push(C)),C.push(I)):C=null;for(let I of R)if(!(I.length<2))for(let A of[-1,1])h.grid(I.length,2,(L,D)=>{let{s:O,sw:z}=I[L],F=b(O),V=A*(D===(A>0?0:1)?F:F+z);t.at(O,x);let k=c(O);return[x.x+x.rx*V-o,x.y+.15,x.z+x.rz*V-l,0,1,0,Ss(O,jn),V,k[0],k[1],k[2],k[3],F,2,0,k[4]]}),h.grid(I.length,2,(L,D)=>{let{s:O}=I[L],z=b(O),F=A*z,V=A>0?D:1-D;t.at(O,x);let k=c(O);return[x.x+x.rx*F-o,x.y+(V?.15:0),x.z+x.rz*F-l,-A*x.rx,0,-A*x.rz,Ss(O,jn),F,k[0],k[1],k[2],k[3],z,3,0,k[4]]})}yield,yield*this.placePoles(e,n,s,a,u,d,M,f,v,b);{let E=Math.ceil((n-Fr)/Nr),R=ko(E);R<s&&Rl(R)&&(yield*this.placeCrossing(u,h,R,d,v,b,M,T,o,l));let C=Math.ceil((n-zo)/Ur),I=Y0(C);I<s&&Z0(I)&&(yield*this.placeRiver(u,h,I,d,v,b,M,T,o,l,a,m));let A=Oi(n+Vt/2);A&&A.s+rn>n&&A.s-rn<s&&(yield*this.placeTunnel(u,h,A,n,s,d,g,M,b,o,l,a))}yield;for(let E=n;E<s;E+=4){let R=hn(E);(R==="coast"&&Dt(E).coast>.45||R==="mountain"&&Dt(E).mountain>.45)&&!Ci(E+2,rn+4)&&this.guardrail(u,E,Math.min(E+4,s),f,v,b)}yield*this.placeCity(u,a,n,s,d,g,v,b,T,M,h,o,l),yield*this.placeSakura(u,a,n,s,d,g,v,b,M),yield*this.placeCoast(u,a,e,n,s,d,g,b,p,f),yield,yield*this.placeCountry(u,a,n,s,d,g,v,b,M),yield*this.placeMountain(u,a,n,s,d,g,v,b,M),yield*this.placeSnow(u,a,n,s,d,g,v,b,M),yield*this.placeVerge(u,a,n,s,d,M,b,e,o,l),yield;let w=new un,_=(E,R,C,I,A=0,L)=>{if(!E)return null;let D=new dt(E,R);return D.castShadow=C,D.receiveShadow=I,D.renderOrder=A,L&&(D.userData.detail=L),w.add(D),D},S=new Set;for(let E of[n,n+20,n+40,s]){let R=cr(E);S.add(R.a),R.t>0&&S.add(R.b)}_(h.build(),Ll([...S]),!1,!0),yield;{let E=_(u.atlas.build(),this.M.atlas,!0,!0);E&&(E.customDepthMaterial=this.M.atlasDepth)}yield;{let E=_(u.color.build(),this.M.color,!0,!0);E&&(E.customDepthMaterial=wh)}if(yield,_(u.tetra.build(),this.M.tetra,!0,!0),_(u.bark.build(),this.M.bark,!0,!0,0,"leaf"),yield,_(u.foliage.build(),this.M.foliage,!0,!0),_(u.leaf.build(),this.M.leaf,!0,!0,0,"leaf"),this.M.gleaf){let E=_(u.gleaf.build(),this.M.gleaf,!0,!0,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(this.M.gblossom){let E=_(u.gblossom.build(),this.M.gblossom,!0,!1,0,"leaf");E&&(E.customDepthMaterial=this.M.gleafDepth)}if(yield,_(u.lamp.build(),this.M.lamp,!1,!1,0,"light"),_(u.sig.build(),this.M.sig,!1,!1,0,"small"),_(u.sodium.build(),this.M.sodium,!1,!1),_(u.decal.build(),this.M.decal,!1,!0,1,"small"),_(u.pool.build(),this.M.pool,!1,!1,2,"light"),p.rows.length>1){let E=p.rows,R=Id.length,C=E.length*R,I=new Float32Array(C*3),A=new Float32Array(C*2),L=new Float32Array(C*2),D=[];E.forEach((z,F)=>{for(let V=0;V<R;V++){let k=F*R+V,q=V*7;I.set(z.subarray(q,q+3),k*3),A[k*2]=z[q+3],A[k*2+1]=z[q+4],L[k*2]=z[q+5],L[k*2+1]=z[q+6]}if(F>0)for(let V=0;V<R-1;V++){let k=(F-1)*R+V,q=k+R;D.push(k,q,k+1,k+1,q,q+1)}});let O=new bt;O.setAttribute("position",new wt(I,3)),O.setAttribute("su",new wt(A,2)),O.setAttribute("hf",new wt(L,2)),O.setIndex(D),O.computeBoundingSphere(),_(O,this.M.shore,!1,!1,997)}p.puffs.length&&_(Rv(p.puffs),this.M.surf,!1,!1,2,"small");for(let E of m)_(E,this.riverMat,!1,!0);return w.position.set(o-this.origin.x,0,l-this.origin.z),{group:w,ox:o,oz:l,s0:n,lamps:new Float32Array(u.lamps)}}poleSpec(e){let t=e*Vs+6,n=hn(t);if(n==="sakura"||Ws(t,6)||ri(t,34)||Ci(t,rn+12))return null;let s=Bn(t,"rw"),r=n==="city"?s+.45:n==="coast"?s+1.35:n==="mountain"?-(s+1.45):n==="snow"?s+2.9:s+2.35;return{s:t,u:r,z:n}}*placePoles(e,t,n,s,r,o,l,a,u,h){let p=Math.ceil((t-6)/Vs),m=Math.floor((n-6-.001)/Vs);for(let x=p;x<=m;x++){let y=this.poleSpec(x);if(!y)continue;let M=y.z==="city"?u(y.s)+.15:l(y.s,y.u),c=o(y.s,y.u,M),f=At(Math.floor(gn(x,31)*4294967295)),d=cd(r,c,f,{trans:f()<.45});y.z==="city"&&x%2===0&&m1(r,c,-.11),x%2&&(yield);let g=this.poleSpec(x+1);if(g){let v=g.z==="city"?u(g.s)+.15:l(g.s,g.u),b=p1(o(g.s,g.u,v));r.color.setM(new Qe);let T=[];for(let w=0;w<d.length;w++){let _=d[w],S=b[w],E=.35+f()*.4+(w>=7?.3:0);T.push(E),r.color.wire([_.x,_.y,_.z],[S.x,S.y,S.z],E,w>=7?.022:.015,Zl,10)}if(y.z!=="coast"&&f()<.38){let w=Math.floor(f()*4),_=d[w],S=b[w],E=1+Math.floor(f()*4),R=.18+f()*.5;for(let C=0;C<E;C++){let I=Math.min(.92,R+C*(.018+f()*.025)),A=_.x+(S.x-_.x)*I,L=_.z+(S.z-_.z)*I,D=_.y+(S.y-_.y)*I-T[w]*4*I*(1-I);r.color.box(A-.07,D+.015,L-.07,A+.07,D+.19,L+.07,Iv),r.color.box(A-.045,D+.19,L-.045,A+.045,D+.27,L+.045,Iv)}}}if(y.z==="city"){r.color.setM(new Qe);let v=1+Math.floor(f()*3);for(let b=0;b<v;b++){let T=d[7+b%2],w=(f()-.5)*14,_=h(y.s+w),S=f()<.55,E=S?-(_+3.15):_+3.15,R=a(y.s+w,E,u(y.s+w)+5.2+f()*2.5);r.color.wire([T.x,T.y,T.z],R,.25+f()*.4,.012,Zl,8)}}}}*intersection(e,t,n,s,r,o,l,a,u,h,p){let m=this.path.at(n,{}),x=o(n),y=l(n),M=a(n)||3,c=n-.5,f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],g=(w,_,S)=>[m.x+m.fx*(w-.5)+m.rx*_-h,S,m.z+m.fz*(w-.5)+m.rz*_-p],v=y+M+.15,b=Gh(s),T=b?3:Fd;for(let w of[-1,1]){let _=w*(y+M),S=w*80;if(u.grid(21,2,(I,A)=>{let L=_+(S-_)*I/20,D=(A?-T:T)*w,O=g(D,L,x+.165);return[O[0],O[1],O[2],0,1,0,D*w,L,d[0],d[1],d[2],d[3],y,10]}),b){let I=w*(y+M+3.2),A=-w*1.35,L=1.15,D=.42,O=(z,F)=>g(A+w*z,I-w*F,x+.18);e.decal.setM(new Qe),e.decal.quad(O(-L,-D),O(L,-D),O(L,D),O(-L,D),[1,1,1],Xo("tomare"))}for(let I of[-1,1]){let A=v+15+t()*3;for(;A<52;){let L=t.range(5.5,8.5),D=w*(A+L/2),O=t(),z=r(c+I*(T+.3),D,x+.14,I>0?Math.PI/2:-Math.PI/2,!1);Wi(e,z,t,{type:O<.5?"house":"shop",w:L,d:t.range(7,10),floors:O<.5?2:t.int(2,3),tint:t.pick(Os),litP:.45,fence:0}),A+=L+t.range(.2,1.2),yield}yield}let E=[30,54].map(I=>r(c+T-.2,w*I,x+.15,-Math.PI/2,!1)),R=At(Math.floor(gn(s,w>0?71:73)*4294967295)),C=E.map(I=>cd(e,I,R,{trans:R()<.4}));e.color.setM(new Qe);for(let I=0;I<7;I++){let A=C[0][I],L=C[1][I];e.color.wire([A.x,A.y,A.z],[L.x,L.y,L.z],.3+R()*.4,.014,Zl,10)}}b&&(xd(e,r(n-9,-(y+.55),x+.15,0,!0),1,y+.55-1.6),xd(e,r(n+8,y+.55,x+.15,0,!0),1,y+.55-1.6),s%8===0&&D1(e,r(n+15,0,x,0,!1),y+M+.1,"hodokyo"+Math.abs(s/8)%3))}*placeCrossing(e,t,n,s,r,o,l,a,u,h){let p=this.path.at(n,{}),m=p.y,x=o(n),y=a(n),M=x+y+.2,c=150,f=m+.18,d=Dt(n),g=[d.city,d.sakura,d.coast,d.country],v=(L,D,O)=>[p.x+p.fx*L+p.rx*D-u,O,p.z+p.fz*L+p.rz*D-h],b=[7.6,4.7,-4.7,-7.6];for(let[L,D]of[[-c,-M],[M,c]])t.grid(25,b.length,(z,F)=>{let V=L+(D-L)*z/24,k=b[F],$=Math.abs(k)<5?f:Math.min(f-.05,l(n+k,V)-.03),Me=v(k,V,$);return[Me[0],Me[1],Me[2],0,1,0,k,V,g[0],g[1],g[2],g[3],x,5]});let T=(L,D,O)=>t.grid(2,2,(z,F)=>{let V=z?D:L,k=F?-3.3:3.3,q=v(k,V,O);return[q[0],q[1],q[2],0,1,0,k,V,g[0],g[1],g[2],g[3],x,6]});T(-x,x,m+.03),y>0&&(T(-M,-x,m+.165),T(x,M,m+.165));let w=(L,D,O,z)=>t.grid(2,2,(F,V)=>{let k=F?z:O,q=V?D:L,$=v(q,k,m+.025);return[$[0],$[1],$[2],0,1,0,q,k,g[0],g[1],g[2],g[3],x,7]});w(-7.15,-7.6,-x+.3,-.12),w(7.6,7.15,.12,x-.3),yield;let _=s(n,0,m,-Math.PI/2,!1),S=e.color;S.setM(_);let E=[.42,.4,.38],R=[.3,.29,.28],C=[.55,.57,.6];for(let L of[-2,2])for(let D of[-.5335,.5335]){let O=-(L+D);for(let[z,F]of[[-c,-M],[M,c]])S.box(z,.26,O-.035,F,.34,O+.035,E);S.box(-M,0,O-.035,M,.04,O+.035,R)}let I=[-146,-104,-64,-26,26,64,104,146];for(let L of I){for(let D of[-4.95,4.95])S.box(L-.12,.18,D-.12,L+.12,7.4,D+.12,C);S.box(L-.1,6.95,-5.15,L+.1,7.2,5.15,C);for(let D of[-2,2])S.box(L-.04,6.3,-D-.04,L+.04,6.95,-D+.04,C)}for(let L of[-2,2])for(let D=0;D<I.length-1;D++)S.wire([I[D],5.35,-L],[I[D+1],5.35,-L],.05,.011,Zl,6),S.wire([I[D],6.4,-L],[I[D+1],6.4,-L],.45,.011,Zl,8);yield;let A=Math.round((n-Fr)/Nr);if(d.country>.9&&gn(A,17)<.7){let L=gn(A,19)<.5?-1:1,D=L>0?x+9:-(x+9+46),O=L>0?x+9+46:-(x+9);N1(e,_,D,O,L*(x+9),Math.abs(A)%4,At(Math.floor(gn(A,23)*4294967295))),S.setM(_)}yield;for(let L of Eh(this.path,n)){let D=new Qe().makeRotationY(L.yaw);D.setPosition(L.x-u,L.y,L.z-h),B1(e,D)}dr(e,s(n-70,-(o(n-70)+.6),r(n-70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85),dr(e,s(n+70,o(n+70)+.6,r(n+70)+.15*(y>0?1:0)),"sign_xing",1,2.2,.85)}*placeRiver(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n,{}),y=x.y,M=o(n),c=a(n),f=Dt(n),d=[f.city,f.sakura,f.coast,f.country],g=f.sakura>.5,v=222,b=M+c+.5,T=y-Cl,w=(A,L,D)=>[x.x+x.fx*A+x.rx*L-u,D,x.z+x.fz*A+x.rz*L-h];{let A=[],L=[],D=[];for(let F=0;F<=74;F++){let V=-v+2*v*F/74;for(let k of[14.3,-14.3]){let q=w(k,V,T);A.push(q[0],q[1],q[2]),L.push(k,V)}if(F>0){let k=(F-1)*2;D.push(k,k+1,k+2,k+1,k+3,k+2)}}let z=new bt;z.setAttribute("position",new je(A,3)),z.setAttribute("su",new je(L,2)),z.setIndex(D),z.computeBoundingSphere(),m.push(z)}for(let[A,L]of[[28.9,25.7],[-25.7,-28.9]])for(let[D,O]of[[-v,-(M+3.4)],[M+3.4,v]])t.grid(41,2,(z,F)=>{let V=D+(O-D)*z/40,k=F?L:A,q=w(k,V,y+.38);return[q[0],q[1],q[2],0,1,0,k,V,d[0],d[1],d[2],d[3],M,9,1]});yield;let _=s(n,0,y,0,!1),S=e.color,E=[.74,.73,.7],R=g?[.78,.2,.15]:[.55,.72,.64];S.setM(_),S.box(-24.5,-1,-b,24.5,-.03,b,E,null,{noBottom:!1});for(let A of[-1,1])S.box(-24.5,-1.3,A>0?b-.35:-b,24.5,-.95,A>0?b:-b+.35,[.62,.61,.58]);for(let A of[-8,8])S.box(A-.7,-Cl-1.4,-b+.6,A+.7,-1,b-.6,E);for(let A of[-25.7,25.7])S.box(A-1.2,-Cl+.4,-b-.4,A+1.2,-.05,b+.4,E);for(let A of[-24.5,24.5])S.box(A-.16,.004,-M,A+.16,.016,M,[.33,.32,.31]),S.box(A-.02,.016,-M,A+.02,.02,M,[.2,.19,.19]);let C=c>0?.15:0;for(let A of[-1,1]){let L=A*(b-.14);for(let D=-24;D<=24.01;D+=2)S.box(D-.06,C,L-.06,D+.06,C+1,L+.06,R);S.box(-24,C+.95,L-.08,24,C+1.08,L+.08,R),S.box(-24,C+.48,L-.03,24,C+.54,L+.03,R),S.box(-24,C+.06,L-.03,24,C+.12,L+.03,R)}let I="bridge"+Math.abs(Math.round(n/Ur))%4;for(let A of[-25,25])for(let L of[-1,1]){let D=L*(b-.1),O=[.7,.69,.65];S.box(A-.32,C,D-.32,A+.32,C+1.45,D+.32,O),S.box(A-.38,C+1.45,D-.38,A+.38,C+1.58,D+.38,[.62,.61,.57]),e.atlas.setM(_);let z=(A<0?-1:1)*.325,F=I;A<0?e.atlas.quad([A-.325,C+.3,D-.22],[A-.325,C+.3,D+.22],[A-.325,C+1.3,D+.22],[A-.325,C+1.3,D-.22],[1,1,1],Xo(F)):e.atlas.quad([A+.325,C+.3,D+.22],[A+.325,C+.3,D-.22],[A+.325,C+1.3,D-.22],[A+.325,C+1.3,D+.22],[1,1,1],Xo(F)),S.setM(_)}Ul(e,s(n-14,-(b-.45),y+C,0,!0)),Ul(e,s(n+14,b-.45,y+C,0,!0)),yield;{e.atlas.setM(new Qe);let A=Xo("gogan"),L=2.4,D=150;for(let O of[-1,1])for(let z=-D;z<D-.01;z+=L){let F=z+L,V=w(O*13.9,z,T-.12),k=w(O*13.9,F,T-.12),q=w(O*16.05,F,T+.72),$=w(O*16.05,z,T+.72),Me=(k[1]-V[1])*($[2]-V[2])-(k[2]-V[2])*($[1]-V[1]),Te=(k[0]-V[0])*($[1]-V[1])-(k[1]-V[1])*($[0]-V[0]),Se=w(0,(z+F)/2,T),G=Me*(Se[0]-V[0])+Te*(Se[2]-V[2])>0,J={u0:A.u0,u1:A.u1,v0:A.v0,v1:A.v1};G?e.atlas.quad(V,k,q,$,[1,1,1],J):e.atlas.quad(k,V,$,q,[1,1,1],{u0:A.u1,u1:A.u0,v0:A.v0,v1:A.v1})}for(let O of[-1,1])for(let z of[-1,1])for(let F=14+p()*3;F<125;F+=p.range(2.4,5)){if(p()<.35)continue;let V=O*(16.2+p()*1.1),k=z*F,q=1+(p()<.4?1:0);for(let $=0;$<q;$++){let Me=w(V+O*p()*.6,k+(p()-.5)*.9,T+.7),Te=new Qe().makeRotationY(p()*6.28);Te.setPosition(Me[0],Me[1],Me[2]),md(e,Te,p,"grass",p.range(1.9,2.8))}}}yield;for(let A of[-18,18])for(let L of[-1,1]){yield;for(let D=11+p()*4;D<(g?125:170);D+=g?p.range(8.5,11):p.range(18,34)){let O=n+A+(p()-.5)*1.5,z=L*D;Wn(e,s(O,z,l(O,z),p()*6,!1),g?"sakura":"broad",p,g?p.range(1,1.25):p.range(.9,1.25))}}}*placeTunnel(e,t,n,s,r,o,l,a,u,h,p,m){let x=this.path.at(n.s,{}),y=x.y,M=u(n.s),c=M+1.4,f=Dt(n.s),d=[f.city,f.sakura,f.coast,f.country],g=o(n.s,0,y,0,!1),v=e.color,b=Math.max(s,n.s-vn)-n.s,T=Math.min(r,n.s+vn)-n.s;if(T>b+.01){let F=Math.max(2,Math.ceil((T-b)/3)+1),V=[-(M+1.5),-M,-M*.5,0,M*.5,M,M+1.5];t.gridN(F,V.length,(J,ve)=>{let Ce=b+(T-b)*J/(F-1),te=n.s+Ce,ge=V[ve],Fe=y+bh(Ce,ge);return[x.x+x.fx*Ce+x.rx*ge-h,Fe,x.z+x.fz*Ce+x.rz*ge-p,0,1,0,Ss(te,jn),ge,d[0],d[1],d[2],d[3],M,0,-1]});let k=[[-M,0],[-M,.2],[-c,.2],[-c,3.2]];for(let J=1;J<12;J++){let ve=Math.PI*(1-J/12);k.push([c*Math.cos(ve),3.2+3*Math.sin(ve)])}k.push([c,3.2],[c,.2],[M,.2],[M,0]);let q=[.86,.82,.72],$=[.44,.45,.47],Me=[.62,.61,.58],Te=[];for(let J=b;J<T-.01;J+=6)Te.push(J);Te.push(T),v.setM(g);for(let J=0;J<Te.length-1;J++)for(let ve=0;ve<k.length-1;ve++){let[Ce,te]=k[ve],[ge,Fe]=k[ve+1],Oe=Math.max(te,Fe)<=.21?Me:Math.abs(Ce)>c-.01&&Math.abs(ge)>c-.01?q:$;v.quad([Te[J],te,Ce],[Te[J+1],te,Ce],[Te[J+1],Fe,ge],[Te[J],Fe,ge],Oe)}e.sodium.setM(g),e.sig.setM(g);let Se=c*Math.cos(Math.PI/6)-.12,G=3.2+3*Math.sin(Math.PI/6)-.08;for(let J=Math.ceil((b+vn-3)/6)*6+3-vn;J<T;J+=6)for(let ve of[-1,1])e.sodium.box(J-.45,G-.07,ve*Se-.13,J+.45,G+.07,ve*Se+.13,null),fr(e,g,J,G-.1,ve*Se,1);for(let J=Math.ceil((b+vn)/24)*24-vn;J<T;J+=24)e.sig.box(J-.3,.95,-c+.01,J+.3,1.2,-c+.06,null);for(let J=Math.ceil((b+vn-30)/60)*60+30-vn;J<T;J+=60)for(let ve of[-1.15,1.15])v.box(J-1.1,5.2,ve-.36,J+1.1,5.78,ve+.36,[.56,.57,.6],null,{nx:[.22,.22,.24],px:[.22,.22,.24]}),v.box(J-.08,5.78,ve-.05,J+.08,6.15,ve+.05,[.4,.4,.42]);yield}let w=(F,V)=>{let k=Math.sin(F*12.9898+V*78.233+n.k*37.719)*43758.5453;return k-Math.floor(k)},_=(F,V,k)=>[F[0]+(V[0]-F[0])*k,F[1]+(V[1]-F[1])*k,F[2]+(V[2]-F[2])*k],S=[.5,.5,.47],E=[.55,.53,.47],R=[.6,.6,.57],C=[.58,.58,.55],I=[.42,.42,.4],A=(F,V)=>{let k=w(F,V);return L?_([.26,.29,.08],[.42,.3,.09],k):_([.22,.29,.08],[.36,.36,.12],k)},L=f.mountain>.5,D=c+2.6,O=2.6;for(let F of[-1,1]){let V=n.s+F*vn,k=F*(vn+.08);if(V<s||V>=r)continue;let q=[];for(let oe of Cv)oe>=1.44&&q.push(M+oe,-(M+oe));for(let oe of Pv)oe>M+3.5&&oe<M+21&&q.push(oe,-oe);for(let oe=0;oe<=24;oe++)q.push(-c+2*c*oe/24);q.push(-c-.01,c+.01,-D,D),q.sort((oe,N)=>oe-N);let $=oe=>3.2+3*Math.sqrt(Math.max(0,1-(oe/c)**2)),Me=oe=>Math.max(a(V-F*.03,oe)-y,bh(F*(vn-.03),oe)),Te=oe=>Math.abs(oe)<=c+1e-6?$(oe):a(V+F*.03,oe)-y,Se=8.4;for(let oe of q)Math.abs(oe)<=D&&(Se=Math.min(Se,Me(oe)-.4));let G=Se>6.6;v.setM(g);let J=F,ve=(oe,N,P,W,Z,ne,se,ye)=>{let ue=[k,P,oe],me=[k,W,N],Ue=[k,ne,N],Ke=[k,Z,oe],De=F<0?[ue,me,Ue,Ke]:[me,ue,Ke,Ue],Ne=F<0?[se,se,ye,ye]:[se,se,ye,ye];for(let ze of[0,1,2,0,2,3])v.vtx(De[ze][0],De[ze][1],De[ze][2],J,0,0,0,0,Ne[ze])},Ce=(oe,N,P)=>oe+(N-oe)*P;for(let oe=0;oe<q.length-1;oe++){let N=q[oe],P=q[oe+1];if(P-N<1e-4)continue;let W=Me(N),Z=Me(P),ne=Te(N),se=Te(P);if(W-ne<.01&&Z-se<.01)continue;let ye=(N+P)/2,ue=G&&Math.abs(ye)<D,me=ne,Ue=se;if(ue){let ze=_(S,[.46,.46,.44],w(Math.floor(ye/2.4),3.1)),rt=.8+2.6*w(Math.floor(ye/.8),7.7),ut=_(ze,[.27,.27,.26],.35+.3*w(Math.floor(ye/.8),9.9)),K=Math.min(Se,W),Be=Math.min(Se,Z),xe=Math.max(ne,K-rt),ke=Math.max(se,Be-rt);if(Math.abs(ye)>c){let Ge=Math.min(xe,ne+.9),Ee=Math.min(ke,se+.9);ve(N,P,ne,se,Ge,Ee,_(ze,[.25,.29,.18],.45),ze),ve(N,P,Ge,Ee,xe,ke,ze,ze)}else ve(N,P,ne,se,xe,ke,ze,ze);if(ve(N,P,xe,ke,K,Be,ze,ut),me=K,Ue=Be,W-K<.01&&Z-Be<.01)continue}let Ke=Math.floor(ye/O),De=me,Ne=Ue;for(let ze=Math.floor(Math.min(De,Ne)/O)+1;De<W-.01||Ne<Z-.01;ze++){let rt=ze*O,ut=Math.min(W,Math.max(De,rt)),K=Math.min(Z,Math.max(Ne,rt)),Be=A(Ke,ze);if(ve(N,P,De,Ne,ut,K,_(Be,[.2,.22,.1],.25),Be),De=ut,Ne=K,ze>60)break}}let te=Math.min(k,k+F*.12),ge=Math.max(k,k+F*.12),Fe=oe=>{for(let N=0;N<q.length-1;N++)if(oe>=q[N]&&oe<=q[N+1]&&q[N+1]>q[N]){let P=(oe-q[N])/(q[N+1]-q[N]);return[Ce(Te(q[N]),Te(q[N+1]),P),Ce(Me(q[N]),Me(q[N+1]),P)]}return null},Oe=q[0],Ie=q[q.length-1];for(let oe=Math.ceil(Oe/O)*O;oe<Ie;oe+=O){let N=Fe(oe);if(!N)continue;let P=(G&&Math.abs(oe)<D?Math.max(Se+.3,N[0]):N[0])+.05,W=N[1]-.05;W-P>.4&&!(Math.abs(oe)<=c+.3&&!G)&&v.box(te,P,oe-.14,ge,W,oe+.14,E)}for(let oe=1;oe<60;oe++){let N=oe*O,P=null,W=()=>{P&&P[1]-P[0]>.3&&v.box(te,N-.14,P[0],ge,N+.14,P[1],E),P=null},Z=!1;for(let ne=0;ne<q.length-1;ne++){let se=q[ne],ye=q[ne+1];if(ye-se<1e-4)continue;let ue=(se+ye)/2,me=Math.max(Te(se),Te(ye),G&&Math.abs(ue)<D?Se+.3:-1e9),Ue=Math.min(Me(se),Me(ye));N>me+.2&&N<Ue-.2?(Z=!0,P?P[1]=ye:P=[se,ye]):W()}if(W(),!Z&&N>30)break}G&&v.box(Math.min(k,k+F*.32),Se-.05,-D,Math.max(k,k+F*.32),Se+.3,D,R);let qe=k+F*.32,ie=oe=>-c+2*c*oe/24,we=oe=>[ie(oe),$(ie(oe))],Q=oe=>[ie(oe)*1.12,$(ie(oe))+.6];for(let oe=0;oe<24;oe++){let[N,P]=we(oe),[W,Z]=we(oe+1),[ne,se]=Q(oe),[ye,ue]=Q(oe+1);F<0?v.quad([qe,P,N],[qe,Z,W],[qe,ue,ye],[qe,se,ne],C):v.quad([qe,Z,W],[qe,P,N],[qe,se,ne],[qe,ue,ye],C),F<0?v.quad([k,P,N],[k,Z,W],[qe,Z,W],[qe,P,N],I):v.quad([k,Z,W],[k,P,N],[qe,P,N],[qe,Z,W],I),F<0?v.quad([k,ue,ye],[k,se,ne],[qe,se,ne],[qe,ue,ye],C):v.quad([k,se,ne],[k,ue,ye],[qe,ue,ye],[qe,se,ne],C)}for(let oe of[-1,1])v.box(Math.min(k,qe),.2,oe>0?c:-c*1.12,Math.max(k,qe),3.2,oe>0?c*1.12:-c,C);e.atlas.setM(g);let ce=1.9,ee=7.05,fe=7.85,U=k+F*.03,de=Xo("tunnel"+(f.coast>.5?1:Math.abs(n.k)%2?2:0));F<0?e.atlas.quad([U,ee,-ce],[U,ee,ce],[U,fe,ce],[U,fe,-ce],[1,1,1],de):e.atlas.quad([U,ee,ce],[U,ee,-ce],[U,fe,-ce],[U,fe,ce],[1,1,1],de)}yield;let z=f.mountain>.5;for(let F=Math.max(s,n.s-rn*.95)+m()*3;F<Math.min(r,n.s+rn*.95);F+=m.range(4,8)){let V=Math.abs(F-n.s)>vn-4?17:4;for(let k of[-1,1]){let q=k*(M+m.range(V,50)),$=m();Wn(e,l(F,q,-.3,m()*6,!1),z?$<.5?"maple":$<.8?"cedar":"ginkgo":$<.65?"pine":"broad",m,m.range(.9,1.3))}}}*placeSnow(e,t,n,s,r,o,l,a,u){let h=p=>Dt(p).snow;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*20;m<s;m+=t.range(22,40)){if(h(m)<.6||t()<.5)continue;let x=p*t.range(18,90);Wi(e,o(m,x,-.3),t,{type:"house",w:t.range(9,12.5),d:t.range(8,10),floors:t()<.5?2:1,tint:t.pick(Os),litP:.62,fence:0,snow:!0});for(let y=0;y<2+t()*3;y++)Wn(e,o(m+t.range(-9,9),x+p*t.range(7,15),-.3,t()*6,!1),t()<.6?"snowcedar":"birch",t,t.range(.9,1.25))}yield;for(let m=n+t()*5;m<s;m+=t.range(3,7))h(m)<.5||(t()<.32&&Wn(e,o(m,p*t.range(9,40),-.25,t()*6,!1),"birch",t,t.range(.85,1.25)),t()<.55&&Wn(e,o(m,p*t.range(120,205),-.4,t()*6,!1),"snowcedar",t,t.range(1.1,1.6)));yield}for(let p=Math.ceil(n/36)*36;p<s;p+=36){if(h(p)<.55)continue;let m=a(p);{let x=r(p,-(m+.95),l(p)+1.3),y=r(p+18,m+.95,l(p+18)+1.3);x.groundY=l(p),y.groundY=l(p+18),dd(e,x,1),dd(e,y,-1)}}}}*placeMountain(e,t,n,s,r,o,l,a,u){let h=p=>Dt(p).mountain;if(!(h(n)<.3&&h(s)<.3)){for(let p of[-1,1]){for(let m=n+t()*4;m<s;m+=t.range(4.5,8.5)){if(h(m)<.45||Ci(m,rn+6))continue;let x=a(m),y=t();if(p>0){let M=y<.5?"maple":y<.72?"ginkgo":"cedar";Wn(e,o(m,x+t.range(17,70),-.25,t()*6,!1),M,t,t.range(.9,1.3))}else{let M=y<.55?"maple":y<.8?"cedar":"ginkgo";Wn(e,o(m,-(x+t.range(3.5,34)),-.25,t()*6,!1),M,t,t.range(.95,1.35))}}yield}for(let p=n+t()*4;p<s;p+=t.range(3,6)){if(h(p)<.5)continue;let m=t()<.7,x=-(a(p)+(m?t.range(108,205):t.range(36,100)));Wn(e,o(p,x,-.3,t()*6,!1),t()<.5?"cedar":t()<.75?"maple":"ginkgo",t,t.range(1.1,1.6))}yield,e.color.setM(new Qe);for(let p=Math.ceil(n/10)*10;p<s;p+=10){if(h(p)<.5||Ci(p,rn+4))continue;let m=a(p),x=r(p,-(m+.95),l(p));y1(e,x)}for(let p=Math.ceil(n/14)*14;p<s;p+=14){if(h(p)<.6)continue;let m=this.path.curv(p);if(Math.abs(m)<1/230)continue;let x=a(p);m>0?dr(e,r(p,x+.42,l(p)),"chev_l",-1,1.25,.58):dr(e,r(p,-(x+1.15),l(p)),"chev_r",1,1.35,.58)}}}*placeBanks(e,t,n,s,r,o,l){let a=this.path,u={},h=At(Math.floor(gn(t,1789)*4294967295)),p=S1(),m=Math.floor((n+Vt/2)/600)*600+300,x=Math.floor((n+Vt/2)/700)*700+120,y=Math.floor((n+Vt/2)/380)*380+190,M=gn(Math.round(y),5)<.5?-1:1;for(let g of[-1,1]){e.leaf.setM(Lv);for(let v=n+h()*p;v<s;v+=p*h.range(.75,1.25)){if(hn(v)!=="country"||Ws(v,10)||ri(v,31)||g<0&&(Math.abs(v-m)<2.9||v>x-1.3&&v<x+2.7)||g===M&&Math.abs(v-y)<1.6)continue;a.at(v,u);let b=l(v),T=g*(b+.95+(h()-.5)*.36),w=u.y+_s(v,T,u.y,b),_=(h()-.5)*.8,S=Math.cos(_)*g,E=Math.sin(_)*g;gd(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,h,h.range(.85,1.15))}yield}let c=At(Math.floor(gn(t,1811)*4294967295)),f=p>1?p*1.35:p;e.leaf.setM(Lv);for(let g=n+c()*f;g<s;g+=f*c.range(.75,1.25)){if(Dt(g).coast<.6||Ci(g,rn+6))continue;let v=g-6-Math.round((g-6)/Vs)*Vs;if(Math.abs(v)<.9||Math.abs(g-(n+12))<.8)continue;a.at(g,u);let b=l(g),T=b+.95+(c()-.5)*.3,w=u.y+_s(g,T,u.y,b),_=(c()-.5)*.8,S=Math.cos(_),E=Math.sin(_);gd(e,u.x+u.rx*T-r,w,u.z+u.rz*T-o,u.rx*S+u.fx*E,u.rz*S+u.fz*E,c,c.range(.62,.85),"bankC")}for(let g=n+c()*14;g<s;g+=c.range(14,30)){if(Dt(g).coast<.6||Ci(g,rn+6))continue;let v=g-6-Math.round((g-6)/Vs)*Vs;if(Math.abs(v)<1.4||Math.abs(g-(n+12))<1.2)continue;a.at(g,u);let b=l(g),T=b+c.range(1.3,2.3),w=u.y+_s(g,T,u.y,b),_=new Qe().makeRotationY(c()*6.28);_.setPosition(u.x+u.rx*T-r,w,u.z+u.rz*T-o),Uh(e,_,c,c.range(1.1,1.4))}let d=At(Math.floor(gn(t,2417)*4294967295));for(let g of[-1,1])for(let v=n+d()*8;v<s;v+=d.range(8,14)){if(Dt(v).sakura<.6||ri(v,31))continue;let b=1+Math.floor(d()*3),T=g*(l(v)+2.95+d()*.4);a.at(v,u);let w=u.y+_s(v,T,u.y,l(v));for(let _=0;_<b;_++){let S=_*.75+d()*.25,E=T+g*(d()-.5)*.3,R=new Qe().makeRotationY(d()*6.28);R.setPosition(u.x+u.fx*S+u.rx*E-r,w,u.z+u.fz*S+u.rz*E-o),d()<.5?Uh(e,R,d,d.range(1.05,1.35)):Bl(e,R,d,d.range(.45,.6))}}}*placeVerge(e,t,n,s,r,o,l,a,u,h){yield*this.placeBanks(e,a,n,s,u,h,l);for(let p of[-1,1]){for(let m=n+t()*1.2;m<s;m+=t.range(.55,1.5)){if(Ws(m,10)||ri(m,31)||Ci(m,rn+4))continue;let x=hn(m),y=l(m),M,c,f=.22,d=1;if(x==="country")M=y+t.range(2.05,2.8),c=.25,f=.35;else if(x==="sakura")M=y+2.68+t()*1.3,c=.55,f=.3;else if(x==="coast"){if(p<0)continue;M=y+.95+t()*1.7,c=.75,f=.18}else{if(x==="snow")continue;if(x==="mountain")M=p<0?y+1+t()*.35:y+.25+t()*.2,c=p<0?.55:.18,f=.12,d=.85;else{if(Dd(m,5))continue;M=y+3.02+t()*.1,c=.1,f=.08,d=.65}}if(t()>c)continue;let g=p*M;md(e,r(m,g,o(m,g),t()*6.28,!1),t,t()<f?"flowers":"grass",d*t.range(.8,1.2))}yield}}guardrail(e,t,n,s,r,o){e.color.setM(new Qe);let l=Math.max(1,Math.round((n-t)/2)),a=Re.rail,u=[.62,.64,.66],h=[.74,.76,.79],p=[.95,.55,.16];for(let m=0;m<l;m++){let x=t+(n-t)*m/l,y=t+(n-t)*(m+1)/l,M=-(o(x)+.95),c=-(o(y)+.95),f=r(x),d=r(y);for(let v=0;v<Pd.length-1;v++){let[b,T]=Pd[v],[w,_]=Pd[v+1];e.color.quad(s(x,M+T,f+b),s(y,c+T,d+b),s(y,c+_,d+w),s(x,M+_,f+w),a)}e.color.quad(s(y,c+.05,d+.5),s(x,M+.05,f+.5),s(x,M+.05,f+.84),s(y,c+.05,d+.84),u),e.color.noShadow=!0;let g=s(x,M-.04,f);if(e.color.cyl(g[0],f,g[2],.055,.055,.8,6,h,!1),Math.round(x/2)%2===0){let v=s(x,M+.035,f+.64),b=s(x+.09,M+.035,f+.64);e.color.quad(b,v,[v[0],v[1]+.07,v[2]],[b[0],b[1]+.07,b[2]],p)}e.color.noShadow=!1}}*placeCity(e,t,n,s,r,o,l,a,u,h,p,m,x){for(let c of[-1,1]){let f=n+t()*2;for(;f<s-2;){{let L=Dt(f);if(L.city<.62||L.mountain>.1){f+=4;continue}}{let L=ur(f+6);if(L&&f<L.s+8.5&&f+14>L.s-8.5){f=Math.max(f+1,L.s+8.5);continue}}let d=2*Math.round(f/300),g=d*150;if(f>g-Dv(d)&&f<g+Ld(d)){f=g+Ld(d)+.05;continue}let v=a(f),b=u(f)||3,T=v+b+.15,w=t(),_=f<420||w<.84?"machiya":w<.89?"shop":w<.93?"apt":w<.96?"konbini":"house",S=_==="shop"?t.range(5,9):_==="machiya"?t.range(6,9.5):_==="apt"?t.range(10,16):_==="house"?t.range(7,9.5):t.range(12,14);if(f+S>s){if(s-f<5||_==="konbini")break;S=s-f-.2}{let L=f<g?d:d+2,D=L*150-Dv(L);if(f+S>D-.1){if(D-.1-f<4){f=L*150+Ld(L)+.05;continue}S=D-.1-f}}let E=f+S/2,R=l(E),C=t.pick(Os),I=.42,A=_==="machiya"&&t()<.6;{let L=r(E,c*T,R+.15),D={type:_,w:S,at:E,side:c,d:_==="apt"?t.range(10,14):t.range(8,12),floors:_==="shop"?t.int(2,4):_==="machiya"?t()<.7?2:3:_==="apt"?t.int(4,9):2,tint:A?ad[Math.floor(t()*ad.length)]:C,litP:I,plaster:A,fence:_==="house"&&t()<.5?1.2:0};if(Wi(e,L,t,D),_!=="house"&&t()<.28&&hd(e,r(E+(t()-.5)*(S-1.2),c*(T-.42),R+.15),t),(_==="shop"||_==="konbini"||_==="machiya")&&t()<.3)for(let O=0;O<1+t()*3;O++)g1(e,r(E-S/2+.8+O*.55,c*(T-.75),R+.15,Math.PI/2+.1),t);if(_==="house"&&t()<.6)for(let O=0;O<2+t()*3;O++)fd(e,r(E+1+O*.5,c*(T-.3),R+.15),t);if(t()<.03)for(let O=0;O<3;O++)v1(e,r(E+O*.9,c*(v+.35),R))}f+=S+t.range(.05,.5),yield}for(let d=n+t()*10;d<s-8;d+=t.range(14,26)){if(Dt(d).city<.7||Dt(d).mountain>.1||t()<.3||Ws(d,18)||Dd(d,15))continue;let g=a(d),v=r(d,c*(g+3.2+t.range(14,20)),l(d)+.1);Wi(e,v,t,{type:t()<.6?"apt":"office",w:t.range(12,18),d:12,floors:t.int(6,11),tint:t.pick(Os),litP:.4})}if(Dt(n+30).city>.7&&Dt(n+30).mountain<.1&&t()<.65){let d=n+t()*Vt;if(Ws(d,24)||Dd(d,20))continue;let g=r(d,c*t.range(55,150),l(d));Wi(e,g,t,{type:"tower",w:t.range(16,26),d:t.range(16,22),floors:t.int(12,26),tint:t.pick(Os),litP:.45})}}let y=Math.ceil(n/150),M=Math.floor((s-.01)/150);for(let c=y;c<=M;c++){let f=c*150;if(!ow(c)||hn(f)!=="city"||Dt(f).mountain>.1)continue;let d=a(f);yield*this.intersection(e,t,f,c,r,l,a,u,p,m,x),Gh(c)&&(dr(e,r(f-1,-(d+.4),l(f)+.15),"sign_blue",1),dr(e,r(f-6,-(d+.4),l(f)+.15),"sign_stop",1,2.1,.75),pd(e,r(f+7,d+.4,l(f)+.15),-1),c%8===4&&dr(e,r(f+20,-(d+.4),l(f)+.15),"sign_speed",1))}}houseGarden(e,t,n,s,r,o,l,a,u,h){let p=o.ww/2;if(a)for(let m=-p-.6;m<p+.6;m+=t.range(1.2,1.9)){if(Math.abs(m)<.9&&a===1&&t()<.7)continue;let x=l(n+m,s-r*t.range(1.1,1.7),0,t()*6,!1);a===2&&t()<.6?Bl(e,x,t,t.range(.75,1)):x1(e,x,t,t.range(.5,.75))}for(let m=0;m<u;m++){let x=(m%2?-1:1)*(t()<.5?1:-1);Wn(e,l(n+x*(p+t.range(3.2,5.5)),s+r*t.range(1,o.wd),0,t()*6),"broad",t,t.range(.9,1.25))}for(let m=0;m<h;m++)Wn(e,l(n+t.range(-p-2,p+2),s+r*(o.wd+t.range(3.5,7)),0,t()*6),"broad",t,t.range(.95,1.3))}*placeSakura(e,t,n,s,r,o,l,a,u){let h=At(Math.floor(gn(Math.round(n/Vt),2423)*4294967295));for(let x of[-1,1]){for(let y=n+t()*4;y<s;y+=t.range(7.5,10)){if(Dt(y).sakura<.45||ri(y,30))continue;let M=a(y);if(Wn(e,o(y,x*(M+3.7),0,ki.bcells?(t()-.5)*.6:t()*6),"sakuraAve",t,t.range(1.05,1.3)),Dt(y).sakura>.6&&h()<.65)for(let c=0,f=2+(h()<.4?1:0),d=h()*6.28;c<f;c++){let g=d+c/f*6.28+(h()-.5)*1.2,v=h.range(.75,1.15),b=Math.max(M+2.9,M+3.7+Math.sin(g)*v*.8),T=o(y+Math.cos(g)*v,x*b,0,h()*6.28,!1);h()<.6?Uh(e,T,h,h.range(1.2,1.55)):Bl(e,T,h,h.range(.5,.65))}t()<.45&&Wn(e,o(y+3,x*(M+t.range(9,18)),0,t()*6),"sakura",t,t.range(.9,1.25))}yield;for(let y=n+(x>0?0:12);y<s;y+=24){if(hn(y)!=="sakura"||ri(y,30))continue;let M=a(y);Ul(e,r(y,x*(M+2.25),l(y)+.15)),Ss(y,48)<24&&O1(e,r(y+6,x*(M+3),u(y+6,x*(M+3))))}for(let y=n+t()*15;y<s;y+=t.range(14,24)){if(hn(y)!=="sakura"||t()<.35||ri(y,45))continue;let M=a(y),c=Bh("sakura",t);if(!c){Wi(e,o(y,x*(M+t.range(20,30))),t,{type:"house",w:t.range(8,11),d:t.range(7,9),floors:t()<.6?2:1,tint:t.pick(Os),litP:.45,fence:t()<.6?1.4:0});continue}let f=x*(M+t.range(19,26)),d=t()<.45?1.4:0;Wi(e,o(y,f),t,{type:"house",w:c.ww,d:c.wd,ptype:c,fence:d}),this.houseGarden(e,t,y,f,x,c,o,d?0:1,0,0)}}let m=Math.floor((n+Vt/2)/480)*480+240;m>=n&&m<s&&hn(m)==="sakura"&&!ri(m,60)&&yd(e,r(m,0,l(m),0,!1),a(m)+1.6,6.4)}coastWall(e){return Dt(e).coast>=.7&&!Ci(e,rn+14)}coastHeaps(e){let t=this.heapCache.get(e);if(t)return t;t=[];let n=At(Math.floor(gn(e,5501)*4294967295)),s=e*Vt,r=s+Vt;for(let o=s+1+n()*12;o<r-3;o+=n.range(12,26)){let l=n.range(1.25,1.5),a=n.range(4.5,11),u=n()<.4?3:2,h=Math.min(o+a,r-.5);!this.coastWall(o)||!this.coastWall(h)||t.push({sa:o,sb:h,L:l,rows:u,dOut:(.8+(u-1)*1.45+.95)*l})}return this.heapCache.size>48&&this.heapCache.clear(),this.heapCache.set(e,t),t}*placeCoast(e,t,n,s,r,o,l,a,u,h){let p=this.path,m={},x=this.coastHeaps(n),y=At(Math.floor(gn(n,5507)*4294967295)),M=Ss(s,jn)-s;for(let w of x){let _=w.L;for(let E=0;E<w.rows;E++){let R=.8*_+E*1.45*_,C=(E===0?.28:E===1?0:-.3)*_;for(let I=w.sa+y()*.7*_;I<w.sb;I+=1.5*_*y.range(.88,1.12)){let A=a(I),L=h(I,-(A+Al+R+(y()-.5)*.45*_),0);if(_d(e,L[0],os+C+(y()-.5)*.3*_,L[2],y,_*y.range(.92,1.08),os-.7,E===0?.8:.45,I+M),E===0&&w.rows>1&&y()<.4){let D=h(I+.7*_,-(A+Al+R+.72*_),0);_d(e,D[0],os+1.05*_,D[2],y,_*y.range(.9,1),os-.7,.6,I+M)}}}let S=Math.max(3,Math.round(ea.n*(w.sb-w.sa+2)/7));for(let E=0;E<S;E++){let R=w.sa+(w.sb-w.sa)*(E+.5)/S+(y()-.5)*1.4,C=a(R);p.at(R,m);let I=h(R,-(C+Al+w.dOut*(.8+.3*y())-.2),os+.35);u.puffs.push(I[0],I[1],I[2],-m.rx,-m.rz,w.dOut,y(),R+M)}yield}let c=[...this.coastHeaps(n-1),...x,...this.coastHeaps(n+1)],f=Ss(s,jn),d=[];for(let w=0;w<=10;w++)d.push(s+w*6);for(let w of c)for(let _ of[w.sa-3.2,w.sa-.4,w.sb+.4,w.sb+3.2])_>s+.5&&_<r-.5&&d.push(_);d.sort((w,_)=>w-_);for(let w=0;w<d.length;w++){let _=d[w];if(w>0&&_-d[w-1]<.6)continue;if(!this.coastWall(_)){if(u.rows.length)break;continue}let S=1;for(let C=1;C<=3;C++)if(!this.coastWall(_-2*C)||!this.coastWall(_+2*C)){S=(C-1)/3;break}let E=a(_),R=new Float32Array(Id.length*7);Id.forEach((C,I)=>{let A=h(_,-(E+Al+C),os+.03),L=0;for(let D of c)L=Math.max(L,(1-Rt(.4,3.2,Math.max(D.sa-_,_-D.sb,0)))*(1-Rt(.2,3.4,C-D.dOut)));R.set([A[0],A[1],A[2],f+(_-s),C,L,S],I*7)}),u.rows.push(R)}u.rows.length&&(yield);let g=At(Math.floor(gn(n,5531)*4294967295)),v=null;if(hn(s+30)==="coast"&&g()<.5){let w=s+g()*Vt,_=a(w);Ci(w,rn+25)||(v={s:w,rw:_,T:Bh("coast",g),u:_+g.range(11,17)})}for(let w=s+t()*6;w<r;w+=t.range(5,9)){if(hn(w)!=="coast"||Ci(w,rn+6))continue;let _=a(w),S=t();if(S>=.58)continue;let E=_+t.range(4.5,30);v&&v.T&&Math.abs(w-v.s)<v.T.ww/2+2.5&&E>v.u-3.5&&E<v.u+v.T.wd+2.5||Wn(e,l(w,E,0,t()*6,!1),S<.48?"broad":"pine",t,t.range(1,1.4))}for(let w=s+4;w<r;)w+=t.range(18,30);for(let w=s+12;w<r;w+=48){if(hn(w)!=="coast"||Ci(w,rn+4))continue;let _=a(w);ud(e,l(w,_+1),t)}let b=At(Math.floor(gn(n,5519)*4294967295));for(let w=s+b()*5;w<r;w+=b.range(5,11)){if(Dt(w).coast<.6||Ci(w,rn+6))continue;let _=1+Math.floor(b()*2.4);for(let S=0;S<_;S++){let E=w+S*b.range(1.1,1.8),R=a(E)+b.range(1.4,2.5),C=b()*6.28,I=b.range(1.05,1.45),A=E-6-Math.round((E-6)/Vs)*Vs,L=E-12-Math.round((E-12)/48)*48;Math.abs(A)<1.4||Math.abs(L)<1.2||Bl(e,l(E,R,0,C,!1),b,I)}}if(v){let{s:w,rw:_,T:S,u:E}=v;S?(Wi(e,l(w,E),g,{type:"house",w:S.ww,d:S.wd,ptype:S}),this.houseGarden(e,g,w,E,1,S,l,2,1,1)):Wi(e,l(w,_+g.range(9,16)),g,{type:"house",w:g.range(7,10),d:8,floors:g()<.5?2:1,tint:g.pick(Os),litP:.5,fence:0})}if(hn(s+30)==="coast"&&t()<.55){let w=s+t()*Vt;W1(e,o(w,-(a(w)+t.range(45,220)),os-.25,t()*6,!1),t)}let T=Math.floor((s+Vt/2)/1500)*1500+700;T>=s&&T<r&&hn(T)==="coast"&&!Ci(T,rn*1.6)&&V1(e,o(T,-(a(T)+75),os-1,0,!1))}*placeCountry(e,t,n,s,r,o,l,a,u){for(let y of[-1,1]){yield;for(let M=n+t()*20;M<s;M+=t.range(20,40)){if(hn(M)!=="country"||t()<.55||Ws(M,16)||ri(M,48))continue;let c=y*t.range(16,95),f=o(M,c),d=Bh("country",t);if(d){Wi(e,f,t,{type:"house",w:d.ww,d:d.wd,ptype:d}),this.houseGarden(e,t,M,c,y,d,o,1,2,2);continue}Wi(e,f,t,{type:"house",w:t.range(9,13),d:t.range(8,10),floors:t()<.45?2:1,tint:t.pick(Os),litP:.5,fence:0});for(let g=0;g<2+t()*3;g++){let v=c+y*t.range(6,14),b=M+t.range(-8,8);Wn(e,o(b,v,0,t()*6),"broad",t,t.range(.9,1.3))}}for(let M=n+t()*8;M<s;M+=t.range(5,9)){if(hn(M)!=="country"||Ws(M,7)||ri(M,36))continue;let c=y*t.range(140,210);Wn(e,o(M,c,-.3,t()*6,!1),"cedar",t,t.range(.9,1.4)),t()<.12&&!Ws(M+2,8)&&!ri(M+2,34)&&Wn(e,o(M+2,y*t.range(10,130),0,t()*6),"broad",t,t.range(.8,1.2))}}let h=Math.floor((n+Vt/2)/600)*600+300;if(h>=n&&h<s&&hn(h)==="country"&&!ri(h,40)){let y=a(h);k1(e,r(h,-(y+1.6),l(h)-.08),t)}let p=Math.floor((n+Vt/2)/700)*700+120;if(p>=n&&p<s&&hn(p)==="country"&&!ri(p,40)){let y=a(p);hd(e,r(p,-(y+.95),l(p)-.08),t),ud(e,r(p+2,-(y+.8),l(p)-.08),t)}let m=Math.floor((n+Vt/2)/900)*900+450;if(m>=n&&m<s&&hn(m)==="country"&&!ri(m,40)){let y=a(m);G1(e,o(m,y+5),t)}let x=Math.floor((n+Vt/2)/380)*380+190;if(x>=n&&x<s&&hn(x)==="country"&&!ri(x,40)&&!Ws(x,30)){let y=a(x),M=(gn(Math.round(x),5)<.5?-1:1)*(y+2.75);U1(e,o(x,M,0))}for(let y=n;y<s;y+=30){if(hn(y)!=="country")continue;let M=this.path.curv(y);if(Math.abs(M)>1/450&&t()<.5){let c=M>0?-1:1,f=a(y);pd(e,o(y,c*(f+.75)),c>0?-1:1)}}}};var ta={clear:[0,0],cloudy:[.62,0],rain:[1,1]};function Nv(i){let e=i.get("weather"),t={mode:ta[e]?e:"auto",kind:ta[e]?e:"clear",ov:0,rain:0,t:0,next:140+Math.random()*160};return ta[e]&&(t.ov=ta[e][0],t.rain=ta[e][1]),{W:t,update(n){if(t.t+=n,t.mode==="auto"&&t.t>t.next){t.t=0,t.next=150+Math.random()*260;let l=Math.random();t.kind=t.kind==="clear"?l<.5?"cloudy":l<.72?"rain":"clear":t.kind==="cloudy"?l<.5?"clear":l<.85?"rain":"cloudy":l<.55?"cloudy":"clear"}let[s,r]=ta[t.kind];t.ov+=Zt(s-t.ov,-n/28,n/28);let o=t.ov>.75?r:0;t.rain+=Zt(o-t.rain,-n/14,n/16)},cycle(){let n=["auto","clear","cloudy","rain"];return t.mode=n[(n.indexOf(t.mode)+1)%n.length],t.mode!=="auto"?t.kind=t.mode:t.t=0,t.mode}}}var Gi={uHeadPos:{value:new H},uHeadDir:{value:new H(0,0,1)},uHeadI:{value:0},uLampW:{value:[new xt(0,-1e3,0,0),new xt(0,-1e3,0,0)]},uLampCol:{value:new he(1,.8,.52)}},Xh=`
uniform vec3 uHeadPos, uHeadDir, uLampCol; uniform float uHeadI; uniform vec4 uLampW[2];
vec3 particleLight(vec3 w) {
  vec3 hv = w - uHeadPos; float hd = max(length(hv), 0.001);
  vec3 lit = vec3(1.0, 0.95, 0.86) * smoothstep(0.84, 0.96, dot(hv / hd, uHeadDir)) * uHeadI / (1.0 + hd * hd * 0.012);
  for (int i = 0; i < 2; i++) { vec3 lv = uLampW[i].xyz - w; lit += uLampCol * uLampW[i].w / (1.0 + dot(lv, lv) * 0.06); }
  return lit;
}`;function Fv(){let e=new H(42,22,42),t=new nn(1,1),n=new ms;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2400*4);for(let l=0;l<2400*4;l++)s[l]=Math.random();n.setAttribute("aOff",new Cn(s,4)),n.instanceCount=2400;let r=new mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uAmt:{value:0},uBox:{value:e},uCol:{value:new he(1,1,1)},...Gi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Xh}
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
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol + vLit, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`}),o=new dt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uAmt.value=u,r.uniforms.uCol.value.setRGB(.3+.7*h,.33+.67*h,.42+.58*h)}}}function Uv(){let e=new H(46,24,46),t=new nn(1,1);t.translate(0,.5,0);let n=new ms;n.index=t.index,n.setAttribute("position",t.attributes.position),n.setAttribute("uv",t.attributes.uv);let s=new Float32Array(2600*4);for(let l=0;l<2600;l++)s[l*4]=Math.random(),s[l*4+1]=Math.random(),s[l*4+2]=Math.random(),s[l*4+3]=Math.random();n.setAttribute("aOff",new Cn(s,4)),n.instanceCount=2600;let r=new mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uCam:{value:new H},uRain:{value:0},uBox:{value:e},uCol:{value:new he(.8,.85,.95)},...Gi},vertexShader:`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv; varying vec3 vLit;
      ${Xh}
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
        gl_FragColor = vec4(uCol + vLit, vA * (0.32 + 0.3 * lit) * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`}),o=new dt(n,r);return o.frustumCulled=!1,o.renderOrder=5,{mesh:o,update(l,a,u,h){o.visible=u>.01,r.uniforms.uTime.value=a,r.uniforms.uCam.value.copy(l),r.uniforms.uRain.value=u,r.uniforms.uCol.value.setRGB(.1+.8*h,.12+.83*h,.16+.84*h)}}}var oi=64,Ud=[2.2,1.3,2.6],aw=[-2.4,.35,-1.6];function Bv(){let i=new Float32Array(oi*3),e=new Float32Array(oi*3),t=new Float32Array(oi*4),n=new Float32Array(oi),s=new Uint8Array(oi),r=new Float32Array(oi);for(let g=0;g<oi;g++)t[g*4]=t[g*4+1]=1;let o=new nn(1,1),l=new ms;l.index=o.index,l.setAttribute("position",o.attributes.position),l.setAttribute("uv",o.attributes.uv),l.instanceCount=0;let a=new Float32Array(oi*4),u=new Float32Array(oi*4),h={uP:{value:a},uC:{value:u},uNoiseTex:Pe.uNoiseTex,uAmb:{value:new he},uSun:{value:new he},uTail:{value:new xt},uCam:{value:new H},...Gi},p=new mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:h,vertexShader:`
      uniform vec4 uP[${oi}], uC[${oi}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${Xh}
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
      }`}),m=new dt(l,p);m.frustumCulled=!1,m.renderOrder=4,m.visible=!1;let x=0,y=0,M=0,c=0,f=!1;function d(g,v,b,T,w,_,S,E,R,C,I){let A=x;x=(x+1)%oi,i[A*3]=v,i[A*3+1]=b,i[A*3+2]=T,e[A*3]=w,e[A*3+1]=_,e[A*3+2]=S,t[A*4]=0,t[A*4+1]=E,t[A*4+2]=R,t[A*4+3]=C,n[A]=I,s[A]=g,r[A]=Math.random()}return{mesh:m,update(g,v,b,T,w,_,S,E,R,C,I){if(!I){if(f){for(let G=0;G<oi;G++)t[G*4]=t[G*4+1];f=!1}m.visible=!1;return}let A=v.position,L=v.rotation.y,D=Math.cos(L),O=Math.sin(L),z=O*b,F=D*b,V=Math.min(1,Math.max(0,(b-2)/14)),k=w>.3?2:0,q=k?w:T;for(y+=24*q*V*g;y>=1;){y-=1;let G=(c^=1)?1:-1,J=G*.67,ve=-1.28-Math.random()*.2,Ce=Math.random(),te=Math.random(),ge=1.6+1.6*Ce,Fe=k?.5+.7*te:.9+1*te,Oe=G*(.3+.6*Math.random());d(k,A.x+J*D+ve*O,A.y+.12,A.z-J*O+ve*D,z*.55-O*ge+Oe*D,Fe,F*.55-D*ge-Oe*O,k?.45+.3*Ce:.55+.35*Ce,.2+.1*te,k?.7+.35*te:.8+.4*te,.5*(.5+.5*V)*Math.min(1,q*1.5))}for(M+=(5+4*V)*_*g;M>=1;){M-=1;let G=Math.random();d(1,A.x-.42*D-1.78*O,A.y+.26,A.z+.42*O-1.78*D,z*.5-O*.8,.25+.2*G,F*.5-D*.8,1.3+.6*G,.14,.8+.4*Math.random(),.32*Math.min(1,_*1.5))}let $=0,Me=Math.exp(-Ud[0]*g),Te=Math.exp(-Ud[1]*g),Se=Math.exp(-Ud[2]*g);for(let G=0;G<oi;G++){let J=G*4;if(t[J]>=t[J+1])continue;let ve=t[J]+=g,Ce=t[J+1];if(ve>=Ce)continue;let te=s[G],ge=te===0?Me:te===1?Te:Se,Fe=G*3,Oe=i[Fe]-C.x,Ie=i[Fe+1]-C.y,qe=i[Fe+2]-C.z;if(Oe*Oe+Ie*Ie+qe*qe<20.25){t[J]=Ce;continue}e[Fe]*=ge,e[Fe+1]=e[Fe+1]*ge+aw[te]*g,e[Fe+2]*=ge,i[Fe]+=e[Fe]*g,i[Fe+1]=Math.max(A.y+.05,i[Fe+1]+e[Fe+1]*g),i[Fe+2]+=e[Fe+2]*g;let ie=ve/Ce,we=$*4;a[we]=i[Fe],a[we+1]=i[Fe+1],a[we+2]=i[Fe+2],a[we+3]=t[J+2]+(t[J+3]-t[J+2])*Math.sqrt(ie),u[we]=n[G]*Math.min(1,ie*6)*(1-ie)*(1-ie),u[we+1]=te,u[we+2]=r[G],$++}f=$>0,m.visible=f,l.instanceCount=$,f&&(h.uAmb.value.copy(S),h.uSun.value.copy(E),h.uTail.value.copy(R),h.uCam.value.copy(C))},shift(g,v){for(let b=0;b<oi;b++)i[b*3]-=g,i[b*3+2]-=v}}}var Vr=24,lw=55,cw=12;function Ov(){let i=[],e=new Float32Array(Vr*2*2),t=new Float32Array(Vr*2*3);for(let u=0;u<Vr;u++)if(e.set([u,-1,u,1],u*4),u<Vr-1){let h=u*2;i.push(h,h+1,h+2,h+1,h+3,h+2)}let n=new bt;n.setAttribute("position",new wt(t,3)),n.setAttribute("aI",new wt(e,2)),n.setIndex(i);let s=new Float32Array(Vr*4),r={uS:{value:s},uW:{value:2.6},uHot:{value:0},uSky:{value:new he},uTime:{value:0},uNoiseTex:Pe.uNoiseTex},o=new mt({transparent:!0,depthWrite:!1,fog:!1,uniforms:r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,vertexShader:`
      attribute vec2 aI; uniform vec4 uS[${Vr}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${Ri}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`}),l=new dt(n,o);l.frustumCulled=!1,l.renderOrder=1,l.visible=!1;let a={};return{mesh:l,update(u,h,p,m,x,y,M,c){if(l.visible=y>.01,!!l.visible){for(let f=0;f<Vr;f++)u.at(h+lw+f*cw,a),s[f*4]=a.x-p,s[f*4+1]=a.y,s[f*4+2]=a.z-m,s[f*4+3]=a.h;r.uW.value=x*.85,r.uHot.value=y,r.uTime.value=M,r.uSky.value.copy(c)}}}}var na=1.6;function kv(i,e=null){let t=i==="high",[n,s,r]=e||(t?[.15,18,38]:[.18,15,34]),o=t?12:10,l=t?16:14,a=[4,Math.round(s*.4),Math.round(s*.65),s].filter((I,A,L)=>!A||I>L[A-1]),u=[s,Math.round((s+r)/2),r],h=(I,A)=>{let L=new ms;return L.setAttribute("position",new je(I,3)),L.setIndex(A),L},p=[[-1,0,0,1,0,0,-1,.5,0,1,.5,0,0,1,0],[0,1,2,1,3,2,2,3,4]],m=[[-1,0,0,1,0,0,0,1,0],[0,1,2]],x=new Float32Array(hr*4),y=new Float32Array(hr),M={uG:{value:x},uGM:{value:y},uGP:{value:new xt(0,1/na,3.1,0)},uGQ:{value:new xt(0,1.05,3,0)},uRingD:{value:new xt(s,r,0,0)}},c=[],f=(I,A,L)=>{let D={uRing:{value:new xt(0,0,L?2*n:n,L)},uRingC:{value:new xt(0,0,0,0)}},O=h(...L?m:p);O.instanceCount=0;let z=new dt(O,zg(D,M));z.frustumCulled=!1,z.castShadow=!1,z.receiveShadow=!1,z.visible=!1,c.push({mesh:z,u:D,dA:I,dB:A,size:L?2*n:n,W:L?l:o,last:A===s||A===r})};for(let I=0;I<a.length-1;I++)f(a[I],a[I+1],0);for(let I=0;I<u.length-1;I++)f(u[I],u[I+1],1);let d=new Int32Array(64).fill(-2147483648),g=new Float32Array(64),v=new Uint8Array(64),b=I=>{let A=I&63;if(d[A]!==I){d[A]=I;let L=I*na,D=ur(L),O=Bi(L),z=Dt(L).country,F=Math.min(1,Math.max(0,(z-.97)/.025))*(D?Math.min(1,Math.max(0,(Math.abs(L-D.s)-13)/7)):1)*(O?Math.min(1,Math.max(0,(Math.abs(L-O.s)-38)/10)):1);g[A]=F>0?3+4*Math.round(F*15):0,v[A]=z>0?1:0}return A},T=I=>g[b(I)],w=I=>v[b(I)],_={},S=NaN,E=NaN,R=NaN,C=0;return{meshes:c.map(I=>I.mesh),hide(){for(let I=0;I<c.length;I++)c[I].mesh.visible=!1},warm(I){for(let A of c)A.mesh.visible=I,I&&(A.u.uRing.value.y=1,A.u.uRingC.value.set(1,1,A.W,0),A.mesh.geometry.instanceCount=2)},update(I,A,L,D,O,z,F){let V=Math.floor((A-3)/na);if(!w(V)&&!w(V+hr-1))C=0;else{if(V!==S||D!==E||O!==R){S=V,E=D,R=O,C=0;for(let k=0;k<hr;k++)I.at((V+k)*na,_),x[k*4]=_.x-D,x[k*4+1]=_.y,x[k*4+2]=_.z-O,x[k*4+3]=_.h,C|=y[k]=T(V+k)}M.uGP.value.set(V*na,1/na,z,A),M.uGQ.value.set(L,F,3,0)}for(let k=0;k<c.length;k++){let q=c[k];if(!C){q.mesh.visible=!1;continue}let $=Math.floor((A+q.dA)/q.size),Me=Math.floor((A+q.dB)/q.size)+(q.last?1:0),Te=F*q.dB+3,Se=z+2.6,G=Math.min(q.W,Math.max(0,Te-(Se+L))),J=Math.min(q.W,Math.max(0,Te-(Se-L))),ve=G>0?Math.ceil(G/q.size)+1:0,Ce=J>0?Math.ceil(J/q.size)+1:0;q.u.uRing.value.x=$,q.u.uRing.value.y=Me-$,q.u.uRingC.value.set(ve,Ce,q.W,0),q.mesh.geometry.instanceCount=(Me-$)*(ve+Ce),q.mesh.visible=q.mesh.geometry.instanceCount>0}}}}var ia=72;function uw(){let i=[],e=[],t=(s,r,o,l,a,u)=>{i.push(...s,...r,...o),e.push(l,a,u)};t([0,0,.45],[.07,0,0],[0,.03,-.35],0,0,0),t([0,0,.45],[0,.03,-.35],[-.07,0,0],0,0,0),t([0,-.07,.4],[0,.07,.3],[0,.02,-.4],0,0,0),t([0,.03,-.35],[.12,0,-.55],[-.12,0,-.55],0,0,0);for(let s of[1,-1])t([.05*s,0,.18],[.5*s,0,.05],[.05*s,0,-.12],0,.55,0),t([.5*s,0,.05],[.95*s,0,-.12],[.45*s,0,-.1],.55,1,.5),t([.05*s,0,-.12],[.5*s,0,.05],[.45*s,0,-.1],0,.55,.5);let n=new bt;return n.setAttribute("position",new je(i,3)),n.setAttribute("aWing",new je(e,1)),n}function zv(){let i=uw(),e=new Cn(new Float32Array(ia*3),3),t=new Cn(new Float32Array(ia*2),2);i.setAttribute("aCol",e),i.setAttribute("aFlap",t);let n=new mt({side:yn,fog:!1,uniforms:{uTime:{value:0},uFog:{value:re.fog},uFogD:{value:.002},uCam:{value:new H}},vertexShader:`
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
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`}),s=new ns(i,n,ia);s.frustumCulled=!1,s.count=0;let r=[],o={small:6,crow:4},l=new Qe,a=new pn,u=new Zn(0,0,0,"YXZ"),h=new H,p=new H,m=()=>r.reduce((M,c)=>M+c.birds.length,0);function x(M,c,f,d){let g=M==="small"?6+Math.floor(Math.random()*7):M==="crow"?3+Math.floor(Math.random()*5):4;if(m()+g>ia)return;let v=45+Math.random()*85,b=(Math.random()-.5)*120,T=Math.random()<.5?1:-1,w=new H().copy(c).addScaledVector(f,v).addScaledVector(d,b-T*75);w.y=c.y+(M==="crow"?18+Math.random()*24:10+Math.random()*18);let _=M==="small"?11+Math.random()*4:8+Math.random()*3,S=new H().copy(d).multiplyScalar(T*_).addScaledVector(f,(Math.random()-.3)*_*.6),E=M==="small"?.8:1.45,R=Array.from({length:g},(C,I)=>({off:new H((Math.random()-.5)*11,(Math.random()-.5)*4,(Math.random()-.5)*11),ph:Math.random()*6.28,fq:M==="small"?15+Math.random()*5:6+Math.random()*1.5,w:Math.random()*6.28}));r.push({kind:M,c:w,vel:S,birds:R,size:E,life:60})}function y(M,c,f,d){if(r.some(b=>b.kind==="gull")||m()+4>ia)return;let g=new H().copy(M).addScaledVector(c,70).addScaledVector(f,-d*45);g.y=M.y+18;let v=Array.from({length:4},(b,T)=>({off:new H,ph:Math.random()*6.28,fq:5.5,w:T/4*6.28,r:18+Math.random()*22,h:Math.random()*10}));r.push({kind:"gull",c:g,vel:new H,birds:v,size:1.25,life:1e9})}return{mesh:s,update(M,c,f,d,g,v,b,T,w){n.uniforms.uTime.value=c,n.uniforms.uCam.value.copy(f);let _=b>.35&&T<.3,S=re.warm>.25&&re.sunEl<.6&&b>.2;_&&(o.small-=M)<0&&(o.small=22+Math.random()*35,v.coast<.6&&x("small",f,d,g)),(S||_&&v.city+v.country>.6&&Math.random()<4e-4)&&(o.crow-=M)<0&&(o.crow=S?14+Math.random()*18:60,x("crow",f,d,g)),v.coast>.6&&_&&y(f,d,g,1);let E=[.1+.08*b,.11+.09*b,.15+.1*b],R=0;for(let C=r.length-1;C>=0;C--){let I=r[C];if(I.kind==="gull"?(I.c.lerp(h.copy(w).addScaledVector(d,60).addScaledVector(g,-42).setY(w.y+16),Math.min(1,M*.25)),(v.coast<.4||!_)&&(I.life=Math.min(I.life,8),I.c.y+=M*6)):I.c.addScaledVector(I.vel,M),I.life-=M,I.life<0||I.kind!=="gull"&&I.c.distanceTo(f)>300){r.splice(C,1);continue}for(let A of I.birds){if(R>=ia)break;let L,D,O,z;I.kind==="gull"?(A.w+=M*(14/A.r),L=I.c.x+Math.cos(A.w)*A.r,O=I.c.z+Math.sin(A.w)*A.r,D=I.c.y+A.h+Math.sin(c*.4+A.ph)*2,z=Math.atan2(-Math.sin(A.w),Math.cos(A.w))):(L=I.c.x+A.off.x+Math.sin(c*.7+A.ph)*1.2,D=I.c.y+A.off.y+Math.sin(c*1.1+A.ph)*.6,O=I.c.z+A.off.z,z=Math.atan2(I.vel.x,I.vel.z)),u.set(0,z,Math.sin(c+A.ph)*.15),a.setFromEuler(u),p.setScalar(I.size),l.compose(h.set(L,D,O),a,p),s.setMatrixAt(R,l);let F=I.kind==="gull"?[.92*(.5+.5*b),.93*(.5+.5*b),.95*(.5+.5*b)]:I.kind==="crow"?[.05,.05,.07]:E;e.setXYZ(R,F[0],F[1],F[2]),t.setXY(R,A.fq,A.ph),R++}}s.count=R,s.instanceMatrix.needsUpdate=!0,e.needsUpdate=!0,t.needsUpdate=!0},setFog(M){n.uniforms.uFogD.value=M},shift(M,c){for(let f of r)f.c.x-=M,f.c.z-=c}}}var Kl=new H;function qi(i,e,t,n,s,r){let o=2*Math.PI*s/4,l=Math.max(r-2*s,0),a=Math.PI/4;Kl.copy(e),Kl[n]=0,Kl.normalize();let u=.5*o/(o+l),h=1-Kl.angleTo(i)/a;return Math.sign(Kl[t])===1?h*u:l/(o+l)+u+u*(1-h)}var On=class i extends Jt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let a=new H,u=new H,h=new H(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,m=this.attributes.normal.array,x=this.attributes.uv.array,y=p.length/6,M=new H,c=.5/o;for(let f=0,d=0;f<p.length;f+=3,d+=2)switch(a.fromArray(p,f),u.copy(a),u.x-=Math.sign(u.x)*c,u.y-=Math.sign(u.y)*c,u.z-=Math.sign(u.z)*c,u.normalize(),p[f+0]=h.x*Math.sign(a.x)+u.x*r,p[f+1]=h.y*Math.sign(a.y)+u.y*r,p[f+2]=h.z*Math.sign(a.z)+u.z*r,m[f+0]=u.x,m[f+1]=u.y,m[f+2]=u.z,Math.floor(f/y)){case 0:M.set(1,0,0),x[d+0]=qi(M,u,"z","y",r,n),x[d+1]=1-qi(M,u,"y","z",r,t);break;case 1:M.set(-1,0,0),x[d+0]=1-qi(M,u,"z","y",r,n),x[d+1]=1-qi(M,u,"y","z",r,t);break;case 2:M.set(0,1,0),x[d+0]=1-qi(M,u,"x","z",r,e),x[d+1]=qi(M,u,"z","x",r,n);break;case 3:M.set(0,-1,0),x[d+0]=1-qi(M,u,"x","z",r,e),x[d+1]=1-qi(M,u,"z","x",r,n);break;case 4:M.set(0,0,1),x[d+0]=1-qi(M,u,"x","y",r,e),x[d+1]=1-qi(M,u,"y","x",r,t);break;case 5:M.set(0,0,-1),x[d+0]=qi(M,u,"x","y",r,e),x[d+1]=1-qi(M,u,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Yh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,a=new bt,u=0;for(let h=0;h<i.length;++h){let p=i[h],m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(p.attributes[x]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[x]===void 0&&(o[x]=[]),o[x].push(p.morphAttributes[x])}if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;a.addGroup(u,x,h),u+=x}}if(t){let h=0,p=[];for(let m=0;m<i.length;++m){let x=i[m].index;for(let y=0;y<x.count;++y)p.push(x.getX(y)+h);h+=i[m].attributes.position.count}a.setIndex(p)}for(let h in r){let p=Hv(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;a.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){a.morphAttributes=a.morphAttributes||{},a.morphAttributes[h]=[];for(let m=0;m<p;++m){let x=[];for(let M=0;M<o[h].length;++M)x.push(o[h][M][m]);let y=Hv(x);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;a.morphAttributes[h].push(y)}}}return a}function Hv(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),l=new wt(o,t,n),a=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=a/t;for(let m=0,x=h.count;m<x;m++)for(let y=0;y<t;y++){let M=h.getComponent(m,y);l.setComponent(m+p,y,M)}}else o.set(h.array,a);a+=h.count*t}return s!==void 0&&(l.gpuType=s),l}function hw(){let i=document.createElement("canvas");i.width=256,i.height=128;let e=i.getContext("2d");e.fillStyle="#f2cf3a",e.fillRect(0,0,256,128),e.strokeStyle="#2f5a2f",e.lineWidth=6,e.strokeRect(5,5,246,118);let t='"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';e.fillStyle="#2f5a2f",e.textAlign="center",e.textBaseline="middle",e.font=`700 30px ${t}`,e.fillText("\u54C1\u5DDD 580",128,34),e.font=`800 58px ${t}`,e.fillText("\u3042 12-34",128,86);let n=new ti(i);return n.colorSpace=Gt,n}var Bd=4;function fw(){let t=document.createElement("canvas");t.width=128*Bd,t.height=128;let n=t.getContext("2d"),s=(o,l,a,u,h)=>{n.beginPath(),n.moveTo(o+h,l),n.arcTo(o+a,l,o+a,l+u,h),n.arcTo(o+a,l+u,o,l+u,h),n.arcTo(o,l+u,o,l,h),n.arcTo(o,l,o+a,l,h),n.closePath(),n.fill()};for(let o=0;o<Bd;o++){let l=o*128,a=n.createLinearGradient(0,0,0,128);a.addColorStop(0,"#9fbfe6"),a.addColorStop(.45,"#4a6690"),a.addColorStop(1,"#1d2638"),n.fillStyle=a,n.fillRect(l,0,128,128),n.fillStyle="rgba(12,14,22,0.55)",o===1&&(s(l+14,84,30,50,9),s(l+84,84,30,50,9),n.fillRect(l+6,112,116,16),s(l+52,92,24,40,7)),o===2&&(s(l+62,66,44,70,12),n.fillRect(l+50,118,70,10)),o===3&&(s(l+70,78,40,60,11),n.fillRect(l+56,120,64,8)),n.save(),n.beginPath(),n.rect(l,0,128,128),n.clip(),n.fillStyle="rgba(255,255,255,0.30)",n.beginPath(),n.moveTo(l+40,0),n.lineTo(l+68,0),n.lineTo(l+20,128),n.lineTo(l-8,128),n.fill(),n.restore()}let r=new ti(t);return r.colorSpace=Gt,r}function Vv(i,e,t=!1){let n=i.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s);n.setX(s,(e+(t?1-r:r))/Bd)}return i}function Wv(){let i=new un,e=new un,t=new un;e.position.y=.35,t.position.y=-.35,e.add(t),i.add(e);let n=[new xt,new xt],s=new he(1,.8,.52),r={uniforms:{uCarLamp:{value:n},uCarLampCol:{value:s}},pars:`
uniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;`,apply:`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }`},o=ed(new sn({color:"#ffffff",vertexColors:!0,gradientMap:Il}),.85,.06,"paint-l",r),l=(ie,we)=>Object.assign(new he(ie),{gloss:we}),a=l("#9fd8c8",1),u=l("#eeece4",.6),h=l("#2a2c33",.35),p=l("#1b1c20",.04),m=l("#c8ccd2",.8),x=l("#d4d8de",1.3),y=(ie,we)=>{let Q=ie.attributes.position.count,ce=new Float32Array(Q*4);for(let ee=0;ee<Q;ee++)ce.set([we.r,we.g,we.b,we.gloss],ee*4);return ie.setAttribute("color",new je(ce,4)),ie},M=ed(new sn({color:"#ffffff",map:fw(),gradientMap:pi}),1.2,.08,"glass-l",r),c=new sn({color:"#c8303a",emissive:"#ff2a2a",emissiveIntensity:.4,gradientMap:pi}),f=new sn({color:"#ff9a9a",emissive:"#ff4a40",emissiveIntensity:1,gradientMap:pi}),d=new sn({color:"#4a1216",emissive:"#ff2a2a",emissiveIntensity:0,gradientMap:pi}),g=new sn({color:"#f0a040",emissive:"#ff9a30",emissiveIntensity:.2,gradientMap:pi}),v=new sn({color:"#dfe4ea",emissive:"#fff4dc",emissiveIntensity:.15,gradientMap:pi}),b=new mn({map:hw()}),T=new Map,w=[],_=!1,S=new Qe,E=new Zn,R=new pn,C=new H(1,1,1),I=(ie,we,Q,ce,ee,fe=0,U=0,de=0)=>{let oe=ie.index?ie.toNonIndexed():ie;if(we.isColor&&(y(oe,we),we=o),E.set(fe,U,de),R.setFromEuler(E),S.compose(new H(Q,ce,ee),R,C),oe.applyMatrix4(S),_){w.push(oe);return}T.has(we)||T.set(we,[]),T.get(we).push(oe)},A=l("#16171b",0),L=l("#2b3134",.15),D=l("#b9bfc6",.9),O=l("#4d5258",.4),z=l("#9a1c22",.6),F=1.7,V=.745,k=.3,q=(ie,we,Q)=>{let ce=Math.min(1,Math.max(0,(Q-ie)/(we-ie)));return ce*ce*(3-2*ce)},$=ie=>ie<.8?1.8:ie<1.22?1.8-.6*q(.8,1.22,ie):1.2-.1*((ie-1.22)/(F-1.22))**2,Me=ie=>1-.085*q(1.15,1.8,ie),Te=(ie,we)=>{let Q=V-we,ce=k+we*.6,ee=$(ie)-we*(ie<0?.4:1),fe=Math.max(.05,.1-we*.5),U=Math.max(.06,(ie<.8?.17:.13)-we*.5),de=[[0,ce],[(Q-fe)*.5,ce],[Q-fe,ce]];for(let N=1;N<4;N++){let P=-Math.PI/2+N/8*Math.PI;de.push([Q-fe+fe*Math.cos(P),ce+fe+fe*Math.sin(P)])}for(let N=0;N<=8;N++)de.push([Q,ce+fe+N/8*(ee-U-ce-fe)]);for(let N=1;N<5;N++){let P=N/10*Math.PI;de.push([Q-U+U*Math.cos(P),ee-U+U*Math.sin(P)])}de.push([Q-U,ee],[(Q-U)*.5,ee],[0,ee]);let oe=de.map(([N,P])=>[N*Me(P),P]);for(let N=de.length-2;N>0;N--)oe.push([-oe[N][0],oe[N][1]]);return oe};{let ie=[];for(let W=0;W<=6;W++){let Z=W/6*Math.PI/2;ie.push([-F+.2*(1-Math.cos(Z)),.2*(1-Math.sin(Z))])}for(let W=-F+.2+.12;W<.78;W+=.13)ie.push([W,0]);for(let W=.8;W<1.225;W+=.06)ie.push([W,0]);for(let W of[1.3,1.39])ie.push([W,0]);for(let W=6;W>=0;W--){let Z=W/6*Math.PI/2;ie.push([F-.22*(1-Math.cos(Z)),.22*(1-Math.sin(Z))])}let ce=[],ee=[],fe=ie.map(([W,Z])=>Te(W,Z)),U=fe[0].length;fe.forEach((W,Z)=>W.forEach(([ne,se])=>ce.push(ne,se,ie[Z][0])));for(let W=0;W<fe.length-1;W++)for(let Z=0;Z<U;Z++){let ne=W*U+Z,se=W*U+(Z+1)%U,ye=ne+U,ue=se+U;ee.push(ne,se,ye,se,ue,ye)}for(let[W,Z]of[[0,-1],[fe.length-1,1]]){let ne=ce.length/3,se=fe[W];ce.push(0,(se[0][1]+se[U/2|0][1])/2,ie[W][0]);for(let ye=0;ye<U;ye++){let ue=W*U+ye,me=W*U+(ye+1)%U;Z<0?ee.push(ne,me,ue):ee.push(ne,ue,me)}}let de=new bt;de.setAttribute("position",new je(ce,3)),de.setIndex(ee),de.computeVertexNormals();{let W=de.attributes.normal,Z=U*10+12;if(W.getX(Z)<0){for(let ne=0;ne<ee.length;ne+=3){let se=ee[ne+1];ee[ne+1]=ee[ne+2],ee[ne+2]=se}de.setIndex(ee),de.computeVertexNormals()}}de.setAttribute("uv",new je(new Float32Array(ce.length/3*2),2));let oe=de.toNonIndexed(),N=oe.attributes.position,P=new Float32Array(N.count*4);for(let W=0;W<N.count;W+=3){let Z=(N.getY(W)+N.getY(W+1)+N.getY(W+2))/3,ne=(N.getZ(W)+N.getZ(W+1)+N.getZ(W+2))/3,se=Z>1.665&&ne<.84&&ne>-1.52?u:a;for(let ye=0;ye<3;ye++)P.set([se.r,se.g,se.b,se.gloss],(W+ye)*4)}oe.setAttribute("color",new je(P,4)),I(oe,o,0,0,0)}I(new On(1.42,.08,2.62,3,.038),u,0,1.815,-.44);let Se=(ie,we,Q,ce,ee)=>{let fe=new bt,U=[],de=[],oe=[],N=[];for(let P=0;P<=Q;P++)for(let W=0;W<=we;W++){let Z=W/we,ne=P/Q,se=ie(Z,ne);U.push(se[0]+se[3]*.004,se[1]+se[4]*.004,se[2]+se[5]*.004),de.push(se[3],se[4],se[5]),oe.push(Z,ne)}for(let P=0;P<Q;P++)for(let W=0;W<we;W++){let Z=P*(we+1)+W,ne=Z+1,se=Z+we+1,ye=se+1;N.push(Z,ne,ye,Z,ye,se)}fe.setAttribute("position",new je(U,3)),fe.setAttribute("normal",new je(de,3)),fe.setAttribute("uv",new je(oe,2)),fe.setIndex(N);{let P=new H().fromArray(U,0),W=new H().fromArray(U,3),Z=new H().fromArray(U,(we+1)*3),ne=new H().fromArray(de,0);if(W.sub(P).cross(Z.sub(P)).dot(ne)<0){for(let se=0;se<N.length;se+=3){let ye=N[se+1];N[se+1]=N[se+2],N[se+2]=ye}fe.setIndex(N)}}return Vv(fe,ce,ee)},G=ie=>{let Q=V*(Me(ie+.01)-Me(ie-.01))/.02,ce=Math.hypot(1,Q);return[1/ce,-Q/ce]},J=ie=>{let we=.8,Q=1.22;for(let ce=0;ce<24;ce++){let ee=(we+Q)/2;$(ee)>ie?we=ee:Q=ee}return we};for(let ie of[-1,1]){let we=ie<0,Q=(ce,ee,fe)=>I(Se((U,de)=>{let oe=1.21+de*.39,N=ie>0?ee(oe)+(ce(oe)-ee(oe))*U:ce(oe)+(ee(oe)-ce(oe))*U,[P,W]=G(oe);return[ie*V*Me(oe),oe,N,ie*P,W,0]},1,6,fe,!1),M,0,0,0);Q(()=>.06,ce=>J(ce)-.07,2),Q(()=>-.72,()=>-.08,3),Q(()=>-1.42,()=>-.84,0),I(new Jt(.012,.41,.07),h,ie*.731,1.405,-.01,0,0,-ie*.07),I(new Jt(.014,.022,2.42),A,ie*.748,1.2,-.26);for(let[ce,ee]of[[.8,.64],[-.06,.42],[-.76,.64]])I(new Jt(.008,1.17-ee,.012),L,ie*.749,(ee+1.17)/2,ce);I(new Jt(.02,.028,.13),L,ie*.752,1.06,.06),I(new Jt(.02,.028,.13),L,ie*.752,1.06,-.2),I(new Jt(.01,.022,.62),L,ie*.749,1.155,-1.08);for(let ce of[1.12,-1.12])I(new Er(.345,18,0,Math.PI),A,ie*.749,.29,ce,0,ie*Math.PI/2,0),I(new rl(.35,.024,5,18,Math.PI),h,ie*.752,.29,ce,0,ie*Math.PI/2,0);I(new On(.1,.12,.2,2,.04),a,ie*.83,1.24,1.02),I(new Jt(.07,.035,.05),h,ie*.775,1.2,1.03),I(new On(.16,.4,.05,3,.075),x,ie*.56,.95,-1.703),I(new On(.13,.37,.05,3,.062),c,ie*.56,.95,-1.716),I(new On(.036,.27,.02,2,.016),f,ie*.56,.95,-1.742),I(new On(.11,.06,.04,2,.02),g,ie*.56,.69,-1.707)}{let ie=new wo,we=.52,Q=1.15,ce=1.66,ee=.07;ie.moveTo(-we+ee,Q),ie.lineTo(we-ee,Q),ie.absarc(we-ee,Q+ee,ee,-Math.PI/2,0),ie.lineTo(we,ce-ee),ie.absarc(we-ee,ce-ee,ee,0,Math.PI/2),ie.lineTo(-we+ee,ce),ie.absarc(-we+ee,ce-ee,ee,Math.PI/2,Math.PI),ie.lineTo(-we,Q+ee),ie.absarc(-we+ee,Q+ee,ee,Math.PI,Math.PI*1.5);let fe=new il(ie,6),U=fe.attributes.position,de=fe.attributes.uv;for(let oe=0;oe<U.count;oe++){let N=U.getX(oe),P=U.getY(oe),W=(P-Q)/(ce-Q);de.setXY(oe,(N+we)/(2*we),W),U.setX(oe,N*(1-.08*W))}I(Vv(fe,1),M,0,0,-F-.004,0,Math.PI,0)}I(new On(.36,.04,.03,2,.014),d,0,1.69,-1.712),I(Se((ie,we)=>{let Q=1.19-we*.36,ce=$(Q),ee=.56-.07*we,fe=.005,U=($(Q+fe)-$(Q-fe))/(2*fe),de=Math.hypot(1,U);return[(ie*2-1)*ee,ce,Q,0,1/de,-U/de]},2,7,0,!1),M,0,0,0),I(new On(.46,.25,.012,2,.05),l("#86bdb0",.6),0,.73,-1.701),I(new nn(.34,.17),b,0,.72,-1.709,0,Math.PI,0),I(new On(.25,.034,.03,2,.013),x,0,.9,-1.708);for(let ie of[-1,1])I(new Jt(.01,.56,.006),L,ie*.47,.85,-1.703);I(new Jt(.95,.01,.006),L,0,.565,-1.703),I(new On(1.5,.2,.26,3,.08),a,0,.44,-1.6),I(new On(1.38,.08,.22,2,.03),h,0,.33,-1.61);for(let ie of[-1,1])I(new Jt(.13,.035,.01),z,ie*.56,.44,-1.731);I(new Fi(.036,.036,.12,12),x,.46,.29,-1.68,Math.PI/2,0,0),I(new Fi(.024,.024,.124,10),A,.46,.29,-1.68,Math.PI/2,0,0);for(let ie of[-1,1])I(new On(.4,.26,.04,2,.06),h,ie*.42,.85,1.702),I(new Fi(.105,.105,.03,16),v,ie*.46,.85,1.72,Math.PI/2,0,0),I(new Fi(.055,.055,.03,12),v,ie*.3,.85,1.718,Math.PI/2,0,0),I(new On(.1,.06,.04,2,.015),g,ie*.52,.66,1.705),I(new Jt(.46,.014,.014),A,ie*.25,1.215,1.2,-.3,ie*.12,0);I(new On(.36,.12,.03,2,.03),A,0,.84,1.704);for(let ie=0;ie<3;ie++)I(new Jt(.32,.012,.012),L,0,.805+ie*.035,1.722);I(new On(1.52,.24,.22,2,.07),h,0,.44,1.62),I(new Jt(.7,.07,.02),A,0,.4,1.732),I(new Jt(.34,.17,.01),l("#f0cc38",.3),0,.62,1.733),I(new Jt(.3,.05,.004),l("#2f5a2f",.1),0,.6,1.739),_=!0;for(let[ie,we]of[[-.67,1.12],[.67,1.12],[-.67,-1.12],[.67,-1.12]]){I(new Fi(.29,.29,.19,24),p,ie,.29,we,0,0,Math.PI/2),I(new Fi(.195,.195,.194,20),D,ie,.29,we,0,0,Math.PI/2),I(new Fi(.155,.155,.198,16),O,ie,.29,we,0,0,Math.PI/2);for(let Q=0;Q<5;Q++){let ce=Q/5*Math.PI*2+.3;I(new Jt(.202,.03,.15),D,ie,.29-.085*Math.sin(ce),we+.085*Math.cos(ce),ce,0,0)}I(new Fi(.045,.045,.206,10),m,ie,.29,we,0,0,Math.PI/2)}_=!1;for(let[ie,we]of T){let Q=new dt(Yh(we),ie);Q.castShadow=ie!==M&&ie!==b&&ie!==d&&ie!==v&&ie!==f,Q.receiveShadow=!0,t.add(Q)}{let ie=new dt(Yh(w),o);ie.castShadow=ie.receiveShadow=!0,i.add(ie)}{let Q=document.createElement("canvas");Q.width=48,Q.height=96;let ce=Q.getContext("2d"),ee=ce.createImageData(48,96);for(let U=0;U<96;U++)for(let de=0;de<48;de++){let oe=Math.max(0,Math.abs((de+.5)/48-.5)*2.1-.62),N=Math.max(0,Math.abs((U+.5)/96-.5)*2.05-.78),P=Math.hypot(oe/.42,N/.24),W=Math.max(0,1-P),Z=(U*48+de)*4;ee.data[Z]=ee.data[Z+1]=ee.data[Z+2]=Math.round(255*W*W*(3-2*W)),ee.data[Z+3]=255}ce.putImageData(ee,0,0);let fe=new dt(new nn(2.2,4.1),new mn({color:0,alphaMap:new ti(Q),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));fe.rotation.x=-Math.PI/2,fe.position.y=.03,fe.renderOrder=3,i.add(fe)}let ve=(()=>{let Q=document.createElement("canvas");Q.width=16,Q.height=64;let ce=Q.getContext("2d"),ee=ce.createImageData(16,64);for(let fe=0;fe<64;fe++)for(let U=0;U<16;U++){let de=1-(fe+.5)/64,oe=((U+.5)/16-.5)*2,N=Math.exp(-oe*oe*5)*Math.min(1,de/.06)*Math.pow(1-de,1.6)*(.78+.22*Math.sin(de*31+oe*2)),P=(fe*16+U)*4;ee.data[P]=ee.data[P+1]=ee.data[P+2]=Math.round(255*Math.max(0,N)),ee.data[P+3]=255}return ce.putImageData(ee,0,0),new mn({map:new ti(Q),color:16726576,transparent:!0,opacity:0,blending:is,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})})();{let ie=[];for(let Q of[-.56,.56]){let ce=new nn(.22,1.5);ce.rotateX(-Math.PI/2),ce.translate(Q,.035,-1.72-.75),ie.push(ce)}let we=new dt(Yh(ie),ve);we.renderOrder=3,we.visible=!1,i.add(we),ve.mesh=we}let Ce=new un;Ce.position.set(.02,1.19,-1.716),t.add(Ce);let te=new Jt(.52,.026,.02);te.translate(.27,0,0);let ge=new dt(y(te,h),o);ge.rotation.z=.18,Ce.add(ge);let Fe=0,Oe=new ul(16773328,0,70,.55,.65,1.2);Oe.position.set(0,.8,1.6),Oe.target.position.set(0,0,18),t.add(Oe,Oe.target);let Ie={roll:0,rv:0,pitch:0,pv:0,y:0,yv:0,br:0},qe=(ie,we)=>we*Math.tanh(ie/we);return{group:i,lamps:n,lampCol:s,head:Oe,update(ie,we,Q,ce=0,ee=null,fe=0){if(ee){let U=qe(-ee.lat*.016,.045),de=qe(-ee.lon*.008,.03);Ie.rv+=((U-Ie.roll)*55-Ie.rv*8)*ie,Ie.roll+=Ie.rv*ie,Ie.pv+=((de-Ie.pitch)*60-Ie.pv*9)*ie+ee.kick,Ie.pitch+=Ie.pv*ie,Ie.yv+=((ee.road-Ie.y)*85-Ie.yv*8)*ie+ee.jolt,Ie.y+=Ie.yv*ie,e.rotation.set(Ie.pitch,0,Ie.roll),e.position.y=.35+Ie.y}if(Ie.br+=((ee?ee.brake:0)-Ie.br)*Math.min(1,ie*14),c.emissiveIntensity=.35+Q*3.2+Ie.br*(1.7+Q*2),d.emissiveIntensity=Ie.br*(2.4+Q*1.6),f.emissiveIntensity=1+Q*3+Ie.br*(2+Q*2),ve.opacity=fe*Math.min(1,.22+c.emissiveIntensity*.22),ve.mesh.visible=ve.opacity>.01,ce>.15||Fe%2.6>.01){Fe+=ie;let U=Fe%2.6/2.6,de=N=>N*N*(3-2*N),oe=U<.25?de(U/.25):U<.5?de(1-(U-.25)/.25):0;ge.rotation.z=.18+oe*2.5,ce<=.15&&U>=.5&&(Fe=0)}Oe.intensity=Q*60,v.emissiveIntensity=.15+Q*2.6}}}var sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dw=new sr(-1,1,1,-1,0,1),Od=class extends bt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},pw=new Od,gr=class{constructor(e){this._mesh=new dt(pw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ra=class extends Pi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Lr.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $l=class extends Pi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Zh=class extends Pi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Kh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Le);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ra(sa),this.copyPass.material.blending=ni,this.timer=new hl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}$l!==void 0&&(o instanceof $l?n=!0:o instanceof Zh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $h=class extends Pi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new he}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Gv={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var oa=class i extends Pi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new he(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:En,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new qt(r,o,{type:En,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new qt(r,o,{type:En,depthBuffer:!1});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let l=Gv;this.highPassUniforms=Lr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Lr.clone(sa.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,premultipliedAlpha:!0,blending:is,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new he,this._oldClearAlpha=1,this._basic=new mn,this._fsQuad=new gr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[a];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let l=t[o],a=o+1<e?t[o+1]:0,u=l+a;s.push((o*l+(o+1)*a)/u),r.push(u)}return new mt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};oa.BlurDirectionX=new Le(1,0);oa.BlurDirectionY=new Le(0,1);var kd=class extends Pi{constructor(){super(),this.needsSwap=!1,this.enabled=!1,this.rt=new qt(4,4,{type:En,depthBuffer:!1,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),this.mat=new mt({uniforms:{tDiffuse:{value:null},uTexel:{value:new Le(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,depthTest:!1,depthWrite:!1}),this.quad=new gr(this.mat)}setSize(e,t){this.rt.setSize(Math.max(1,Math.floor(e/8)),Math.max(1,Math.floor(t/8))),this.mat.uniforms.uTexel.value.set(2/e,2/t)}render(e,t,n){(this.frame=(this.frame|0)+1)%2!==0&&(this.mat.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(this.rt),this.quad.render(e))}},mw={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uSun:{value:new Le(.5,.8)},uSunVis:{value:0},uDay:{value:1},uWarm:{value:0},uTime:{value:0},uAspect:{value:1},uVig:{value:.55},uSat:{value:1.1},uTexel:{value:new Le(1/1280,1/720)},uLo:{value:new H(-.014,0,.03)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function qv(i,e,t,{msaa:n=4,fxaa:s=!1,scale:r=1}={}){let o=i.getSize(new Le),l=new qt(o.x*i.getPixelRatio(),o.y*i.getPixelRatio(),{type:En,samples:n}),a=new Kh(i,l);a.addPass(new $h(e,t));let u=new kd;a.addPass(u);let h=new oa(new Le(o.x*r*.5,o.y*r*.5),.42,.55,.86);a.addPass(h);let p=new ra(mw);p.material.defines=s?{NEUTRAL_TONE_MAPPING:"",USE_FXAA:""}:{NEUTRAL_TONE_MAPPING:""},p.material.toneMapped=!1,a.addPass(p);let m=a.render.bind(a);return a.render=x=>{p.uniforms.toneMappingExposure.value=i.toneMappingExposure,m(x)},{composer:a,bloom:h,grade:p,refl:u}}function Xv(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;let e=new i,t=e.createGain();t.gain.value=0,t.connect(e.destination),t.gain.linearRampToValueAtTime(.5,e.currentTime+4);let n=e.sampleRate*4,s=e.createBuffer(2,n,e.sampleRate);for(let Q=0;Q<2;Q++){let ce=s.getChannelData(Q);for(let ee=0;ee<n;ee++)ce[ee]=(Math.random()*2-1)*Math.pow(1-ee/n,3)}let r=e.createConvolver();r.buffer=s;let o=e.createGain();o.gain.value=.55,r.connect(o),o.connect(t);let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=900,l.Q.value=.3;let a=e.createGain();a.gain.value=.11,l.connect(a),a.connect(t),a.connect(r);let u=(Q,ce)=>{let ee=e.createBuffer(1,e.sampleRate*Q,e.sampleRate),fe=ee.getChannelData(0),U=0;for(let de=0;de<fe.length;de++)ce?(U=(U+.02*(Math.random()*2-1))/1.02,fe[de]=U*3.5):fe[de]=Math.random()*2-1;return ee},h=(Q,ce,ee)=>{let fe=e.createBufferSource();fe.buffer=Q,fe.loop=!0;let U=e.createBiquadFilter();U.type=ce,U.frequency.value=ee;let de=e.createGain();return de.gain.value=0,fe.connect(U),U.connect(de),de.connect(t),fe.start(),{f:U,g:de}},p=h(u(2,!0),"lowpass",400),m=h(u(3,!1),"lowpass",700);m.g.connect(r);let x=h(u(2,!1),"bandpass",5200);x.f.Q.value=6;let y=h(u(2,!0),"lowpass",240),M=h(u(3,!1),"bandpass",2600);M.f.Q.value=.35;let c=h(u(2,!0),"lowpass",520),f=h(u(2,!1),"bandpass",1500);f.f.Q.value=.7;let d=e.createBiquadFilter(),g=e.createGain(),v=e.createOscillator(),b=e.createOscillator(),T=e.createGain();v.type="sawtooth",b.type="triangle",d.type="lowpass",d.frequency.value=320,d.Q.value=.6,g.gain.value=0,T.gain.value=.5,v.connect(d),b.connect(T),T.connect(d),d.connect(g),g.connect(t),v.start(),b.start();let w=h(u(3,!1),"bandpass",750);w.f.Q.value=.6;let _=h(u(3,!0),"lowpass",420),S=h(u(2,!0),"lowpass",140),E=u(.03,!1),R=0;function C(Q,ce){let ee=e.createBufferSource(),fe=e.createBiquadFilter(),U=e.createGain();ee.buffer=E,fe.type="bandpass",fe.frequency.value=1800+Math.random()*2600,fe.Q.value=1.2,U.gain.setValueAtTime(ce*(.02+Math.random()*.03),Q),U.gain.exponentialRampToValueAtTime(1e-4,Q+.03),ee.connect(fe),fe.connect(U),U.connect(t),ee.start(Q),ee.stop(Q+.04)}let I=0,A=0;function L(Q,ce){let ee=e.createOscillator(),fe=e.createOscillator(),U=e.createGain(),de=e.createBiquadFilter();de.type="bandpass",de.frequency.value=1150,de.Q.value=2.2,ee.type="square",ee.frequency.value=745,fe.type="triangle",fe.frequency.value=1490,U.gain.setValueAtTime(0,Q),U.gain.linearRampToValueAtTime(.085*ce,Q+.004),U.gain.exponentialRampToValueAtTime(1e-4,Q+.3),ee.connect(de),fe.connect(de),de.connect(U),U.connect(t),U.connect(r),ee.start(Q),fe.start(Q),ee.stop(Q+.33),fe.stop(Q+.33)}function D(Q,ce){let ee=e.createOscillator(),fe=e.createGain();ee.type="sine",ee.frequency.setValueAtTime(110,Q),ee.frequency.exponentialRampToValueAtTime(48,Q+.12),fe.gain.setValueAtTime(1e-4,Q),fe.gain.linearRampToValueAtTime(.22*ce,Q+.006),fe.gain.exponentialRampToValueAtTime(1e-4,Q+.17),ee.connect(fe),fe.connect(t),ee.start(Q),ee.stop(Q+.2)}let O=e.createGain();O.gain.value=1,O.connect(t);let z=e.createGain();z.gain.value=.35,O.connect(z),z.connect(r);let F=(Q=(Math.random()-.5)*1.4)=>{if(!e.createStereoPanner)return O;let ce=e.createStereoPanner();return ce.pan.value=Q,ce.connect(O),ce};function V(Q,ce,ee,fe,U,de,oe="sine",N=0){let P=e.createOscillator(),W=e.createGain();if(P.type=oe,P.frequency.setValueAtTime(ce,Q),P.frequency.exponentialRampToValueAtTime(ee,Q+fe),N){let Z=e.createOscillator(),ne=e.createGain();Z.frequency.value=N,ne.gain.value=ce*.012,Z.connect(ne),ne.connect(P.frequency),Z.start(Q),Z.stop(Q+fe+.05)}return W.gain.setValueAtTime(1e-4,Q),W.gain.linearRampToValueAtTime(U,Q+Math.min(.04,fe*.25)),W.gain.setValueAtTime(U,Q+fe*.7),W.gain.exponentialRampToValueAtTime(1e-4,Q+fe),P.connect(W),W.connect(de),P.start(Q),P.stop(Q+fe+.02),W}function k(Q,ce){let ee=F(),fe=2+Math.floor(Math.random()*4),U=3200+Math.random()*1500;for(let de=0;de<fe;de++){let oe=Q+de*(.09+Math.random()*.07);V(oe,U,U*(1.2+Math.random()*.3),.06,ce*.022,ee)}}function q(Q,ce){let ee=F();V(Q,1120,1390,1,ce*.03,ee,"sine",5.5),V(Q+1.15,2350,2150,.14,ce*.03,ee),V(Q+1.32,1700,1520,.13,ce*.028,ee),V(Q+1.5,2750,2480,.36,ce*.032,ee)}function $(Q,ce){let ee=F(),fe=1+Math.floor(Math.random()*3);for(let U=0;U<fe;U++){let de=Q+U*.48,oe=e.createOscillator(),N=e.createBiquadFilter(),P=e.createGain();oe.type="sawtooth",oe.frequency.setValueAtTime(560,de),oe.frequency.exponentialRampToValueAtTime(420,de+.32),N.type="bandpass",N.frequency.value=1150,N.Q.value=1.6,P.gain.setValueAtTime(1e-4,de),P.gain.linearRampToValueAtTime(ce*.03,de+.03),P.gain.exponentialRampToValueAtTime(1e-4,de+.36),oe.connect(N),N.connect(P),P.connect(ee),oe.start(de),oe.stop(de+.4)}}function Me(Q,ce){let ee=F(),fe=2+Math.floor(Math.random()*2);for(let U=0;U<fe;U++)V(Q+U*.42,1750,1150,.36,ce*.022,ee,"triangle",11)}function Te(Q,ce){let ee=F(),fe=e.createOscillator(),U=e.createBiquadFilter(),de=e.createGain(),oe=240+Math.random()*220,N=5+Math.floor(Math.random()*4);fe.type="square",fe.frequency.value=oe,U.type="bandpass",U.frequency.value=oe*2.4,U.Q.value=3,de.gain.setValueAtTime(1e-4,Q);for(let P=0;P<N;P++){let W=Q+P*.038;de.gain.linearRampToValueAtTime(ce*.014,W+.008),de.gain.linearRampToValueAtTime(1e-4,W+.028)}fe.connect(U),U.connect(de),de.connect(ee),fe.start(Q),fe.stop(Q+N*.038+.05)}function Se(Q,ce){let ee=F(),fe=4300+Math.random()*700;for(let U=0;U<3;U++)V(Q+U*.055,fe,fe*1.01,.035,ce*.009,ee)}function G(Q,ce){let ee=F(0);for(let[fe,U,de]of[[98,1,9],[196.6,.5,6],[263.4,.3,4.5],[391,.16,3]]){let oe=e.createOscillator(),N=e.createGain();oe.type="sine",oe.frequency.value=fe,oe.detune.value=(Math.random()-.5)*8,N.gain.setValueAtTime(1e-4,Q),N.gain.linearRampToValueAtTime(ce*.05*U,Q+.03),N.gain.exponentialRampToValueAtTime(1e-4,Q+de),oe.connect(N),N.connect(ee),oe.start(Q),oe.stop(Q+de+.1)}}function J(Q,ce){let ee=F();for(let fe of[Q,Q+.22])V(fe,2650,2600,.5,ce*.018,ee),V(fe,3950,3900,.35,ce*.008,ee)}let ve={sparrow:2,uguisu:6,crow:8,gull:3,frog:1,cricket:1,bike:30,bell:25},Ce=Q=>Q>1e-4?-Math.log(1-Math.random()*.98)/Q:1e9,te=Q=>440*Math.pow(2,(Q-69)/12),ge=[[48,55,64,71,74],[45,52,60,67,71],[41,48,57,64,67],[43,50,59,62,69],[40,47,55,62,67],[41,48,55,64,69]],Fe=[72,74,76,79,81,84,86,88],Oe=0,Ie=e.currentTime+.2,qe=e.currentTime+3;function ie(Q){let ce=ge[Oe++%ge.length],ee=11;for(let fe of ce)for(let U of[-5,5]){let de=e.createOscillator(),oe=e.createGain();de.type=U<0?"sine":"triangle",de.frequency.value=te(fe),de.detune.value=U,oe.gain.setValueAtTime(0,Q),oe.gain.linearRampToValueAtTime(.18,Q+3.5),oe.gain.setValueAtTime(.18,Q+ee-4),oe.gain.linearRampToValueAtTime(0,Q+ee+1),de.connect(oe),oe.connect(l),de.start(Q),de.stop(Q+ee+1.2)}}function we(Q){let ce=Fe[Math.floor(Math.random()*Fe.length)],ee=e.createOscillator(),fe=e.createOscillator(),U=e.createGain(),de=e.createGain();ee.type=fe.type="sine",ee.frequency.value=te(ce),fe.frequency.value=te(ce)*2.01,de.gain.value=.25,fe.connect(de),de.connect(U),U.gain.setValueAtTime(0,Q),U.gain.linearRampToValueAtTime(.05,Q+.02),U.gain.exponentialRampToValueAtTime(1e-4,Q+4),ee.connect(U),U.connect(r),U.connect(t),ee.start(Q),fe.start(Q),ee.stop(Q+4.2),fe.stop(Q+4.2)}return{ac:e,muted:!1,tyres:f,engG:g,bump(Q){D(e.currentTime+.01,Q)},update(Q,ce,ee,fe={}){let U=e.currentTime;if((fe.bell||0)>.01)for(I<U&&(I=U+.02);I<U+.12;)L(I,fe.bell),I+=.41;let de=fe.rain||0;M.g.gain.setTargetAtTime(de*.05,U,.6),c.g.gain.setTargetAtTime(de*.05,U,.6);let oe=(fe.wetRoad||0)*Math.min(1,Q)**1.5,N=.8+.2*Math.sin(U*2.3)*Math.sin(U*.9+1);if(f.g.gain.setTargetAtTime(oe*.045*N,U,.4),f.f.frequency.setTargetAtTime(900+1500*Math.min(Q,2),U,.4),de>.05&&fe.roof)for(R<U&&(R=U+.02);R<U+.12;)C(R,de),R+=.04+Math.random()*.12/de;let P=fe.water||0,W=.6+.4*Math.sin(U*1.3)*Math.sin(U*.37);w.g.gain.setTargetAtTime(P*.035*W,U,.25),w.f.frequency.setTargetAtTime(600+400*W,U,.25);let Z=.35+.65*Math.pow(.5+.5*Math.sin(U*.23)*Math.sin(U*.071+2),2),ne=fe.rush||0;_.g.gain.setTargetAtTime(((ce.mountain||0)+(ce.snow||0)*.7)*.06*Z+ne*.055,U,.8),_.f.frequency.setTargetAtTime(260+420*Z+ne*500,U,.8);let se=fe.train||0;if(y.g.gain.setTargetAtTime(se*.16,U,.2),se>.04)for(A<U&&(A=U+.02);A<U+.12;)D(A,se),D(A+.15,se*.8),A+=1.2;for(;Ie<U+1;)ie(Ie),Ie+=8;qe<U+.5&&(we(qe),qe+=1.5+Math.random()*4.5);let ye=fe.tunnel||0;{let K=fe.speed||0,Be=fe.load||0,xe=850+2400*(1-Math.exp(-K/15))+Math.max(0,K-25)*60+Be*1300,ke=xe/40;v.frequency.setTargetAtTime(ke,U,.25),b.frequency.setTargetAtTime(ke*2,U,.25),d.frequency.setTargetAtTime(200+xe*.08+Be*260,U,.3),g.gain.setTargetAtTime((.008+.01*Math.min(1,K/15)+.024*Be)*(1-.6*(fe.rush||0))*(fe.roof===!1?.5:1)*(1+.7*ye),U,.3)}p.g.gain.setTargetAtTime((.03+Q*.06)*(1+1.6*ye),U,.35),p.f.frequency.setTargetAtTime((250+Q*500)*(1+.5*ye),U,.35),S.g.gain.setTargetAtTime(ye*.07,U,.4),o.gain.setTargetAtTime(.55+.6*ye,U,.4);let ue=.5+.5*Math.sin(U*.55)*Math.sin(U*.21+1);m.g.gain.setTargetAtTime(ce.coast*(.012+ue*.05),U,.3),m.f.frequency.setTargetAtTime(400+ue*900,U,.3);let me=1-Math.min(1,de*1.4),Ue=1-ee,Ke=fe.dusk||0,De=ce.snow||0,Ne=1-De,ze={sparrow:ee*me*.22*(.3+ce.city*.5+ce.sakura+ce.country*.8+ce.coast*.2+(ce.mountain||0)*.5)*(1-De*.8),uguisu:ee*me*ce.sakura*.06,crow:me*(Ke*.14+ee*(ce.city+ce.country+(ce.mountain||0)*1.5+De*2.5)*.012),gull:ee*ce.coast*me*.16,frog:Ue*(ce.country*5+ce.sakura*.6+ce.coast*.3)*(1+de*.6)*Ne,cricket:Ue*me*(1.6-ce.city*1.1+(ce.mountain||0)*.8)*Ne,bike:ee*me*ce.city*.014,bell:De*.022+(ce.mountain||0)*.006},rt={sparrow:k,uguisu:q,crow:$,gull:Me,frog:Te,cricket:Se,bike:J,bell:G};for(let K in ze)U<ve[K]||(ze[K]>1e-4&&rt[K](U+.05,.6+Math.random()*.4),ve[K]=U+Math.max(.12,Ce(ze[K]||1e-6)));let ut=.5+.5*Math.sin(U*7)*Math.sin(U*.4);x.g.gain.setTargetAtTime((ce.country+ce.sakura*.3)*ee*.006*ut*(1-(ce.snow||0)),U,.08)},toggle(){this.muted=!this.muted,t.gain.setTargetAtTime(this.muted?0:.5,e.currentTime,.3)}}}function Yv(i){let t=new nn(.075,.05),n=new mn({color:16777215,side:yn}),s=new ns(t,n,420);s.frustumCulled=!1,s.count=0;let r=new he("#ffd0de"),o=["#c8321e","#e0562a","#ee8a30","#f2b23a","#a83a22"].map(v=>new he(v));for(let v=0;v<420;v++)s.setColorAt(v,r);let l=Array.from({length:420},()=>({p:new H(1e9,0,0),v:.5+Math.random()*.7,ph:Math.random()*6.28,sp:.6+Math.random()*1.6,leaf:!1})),a=new Qe,u=new pn,h=new Zn,p=new H(1,1,1),m=new H,x=90,y=new Float32Array(x*3),M=Array.from({length:x},()=>({p:new H(1e9,0,0),ph:Math.random()*6.28})),c=new bt;c.setAttribute("position",new wt(y,3));let f=new Mo({color:14221194,size:.35,map:i,transparent:!0,depthWrite:!1,blending:is,opacity:0}),d=new qa(c,f);d.frustumCulled=!1;let g=(v,b,T,w,_)=>{let S=_?8+Math.random()*42:-4+Math.random()*50,E=(Math.random()-.5)*40;v.p.set(b.x+T.x*S+w.x*E,b.y-1+Math.random()*9,b.z+T.z*S+w.z*E)};return{group:[s,d],shift(v,b){for(let T of l)T.p.x-=v,T.p.z-=b;for(let T of M)T.p.x-=v,T.p.z-=b},update(v,b,T,w,_,S,E,R,C,I=0){let A=Math.floor(420*Math.min(1,S*1.1+I*.55));n.color.setScalar(1-.72*R);let L=!1;s.count=A;for(let O=0;O<A;O++){let z=l[O];m.subVectors(z.p,T);let F=m.x*w.x+m.z*w.z,V=m.x*_.x+m.z*_.z;if(z.p.x>1e8||F<-6||F>55||Math.abs(V)>24||z.p.y<E-.5){g(z,T,w,_,z.p.x<1e8);let k=Math.random()*(S+I)<I;(k!==z.leaf||k)&&(z.leaf=k,s.setColorAt(O,k?o[Math.floor(Math.random()*o.length)]:r),L=!0)}z.p.y-=z.v*v,z.p.x+=Math.sin(b*.7+z.ph)*.4*v+.25*v,z.p.z+=Math.cos(b*.5+z.ph)*.3*v,h.set(b*z.sp+z.ph,b*z.sp*.7,z.ph),u.setFromEuler(h),p.setScalar(z.leaf?1.9:1),a.compose(z.p,u,p),s.setMatrixAt(O,a)}s.instanceMatrix.needsUpdate=!0,L&&s.instanceColor&&(s.instanceColor.needsUpdate=!0);let D=R*C;if(f.opacity=D,d.visible=D>.01,d.visible){for(let O=0;O<x;O++){let z=M[O];m.subVectors(z.p,T);let F=m.x*w.x+m.z*w.z,V=m.x*_.x+m.z*_.z;if(z.p.x>1e8||F<-4||F>60||Math.abs(V)>30){let k=2+Math.random()*55,q=(Math.random()-.5)*55;z.p.set(T.x+w.x*k+_.x*q,E+.3+Math.random()*2.2,T.z+w.z*k+_.z*q)}z.p.x+=Math.sin(b*.6+z.ph*3)*.3*v,z.p.y+=Math.sin(b*.9+z.ph)*.2*v,z.p.z+=Math.cos(b*.5+z.ph*2)*.3*v,y[O*3]=z.p.x,y[O*3+1]=z.p.y,y[O*3+2]=z.p.z}c.attributes.position.needsUpdate=!0}}}}var lt=new URLSearchParams(location.search),aa=lt.has("embed")||(()=>{try{return window.self!==window.top}catch{return!0}})();aa&&document.body.classList.add("embed");lt.has("shot")&&document.body.classList.add("shot");mg(lt.has("seed")?parseInt(lt.get("seed")):Math.random()*1e9|0);vg(lt.get("env")||"city");var kn=i=>document.getElementById(i),la=i=>{let e=kn("loading");e&&(e.textContent=i)};async function gw(){await new Promise(be=>setTimeout(be,30));let i=kn("c"),e=new dh({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1}),t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(innerWidth,innerHeight)<900,n=lt.get("q")||(aa||t?"mid":"high"),s=Math.min(devicePixelRatio||1,n==="high"?1.75:n==="mid"?aa?1.25:1.4:1);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight,!1),e.outputColorSpace=Gt,e.toneMapping=fl,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Rr,e.debug.checkShaderErrors=lt.has("debug");let r=lt.get("clouds")||"painted",o=n==="high"&&innerHeight*s>=900?"hi":"lo",l=r==="old"?Promise.resolve(null):lv(o),a=dv(o),u=mv(n==="high"&&innerHeight*s>=560?"hi":"lo"),h=hv(o),p=cv(n==="high"&&innerHeight*s>=560?"hi":"lo"),m=n==="high"&&innerHeight*s>=560?"hi":"lo",x=uv(m),y=new Tr;y.fog=new Ha(13032946,.0019,700);let M=new Hn(52,innerWidth/innerHeight,.5,7e3),c=new Ro(16777215,3);c.castShadow=!0;let f=n==="low"?1024:n==="mid"?1536:2048;c.shadow.mapSize.set(f,f),j0(lt.has("pcf")?parseInt(lt.get("pcf")):1);let d=62,g=c.shadow.camera,v=new Qe,b=new Qe;Object.assign(g,{left:-d,right:d,top:d,bottom:-d,near:1,far:420});let T=new H(0,1,0),w=new H,_=new H,S=new H,E=new H(0,1,0),R=new H(0,150,60),C=new H,I=new H,A=null,L=0,D=0,O=0;c.shadow.updateMatrices=function(){g.position.copy(R),g.lookAt(C),g.updateMatrixWorld(),g.updateProjectionMatrix(),b.multiplyMatrices(g.matrixWorldInverse,v).multiply(g.matrixWorld),g.projectionMatrix.multiply(b),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),this._updateMatrix(g,this.matrix,this._frustum)};let z=!0;c.shadow.bias=-4e-4;let F=()=>{c.shadow.normalBias=lt.has("nb")?parseFloat(lt.get("nb")):1.5*2*d/c.shadow.mapSize.x};F();{let[be,ht]=(lt.get("graze")||"0,0.12").split(",").map(Number);Cg(be,ht)}y.add(c,c.target);let V=new Ro(16777215,0);V.castShadow=n!=="low"&&!lt.has("nocarsh");{let be=lt.has("carsm")?parseInt(lt.get("carsm")):n==="high"?512:384;V.shadow.mapSize.set(be,be)}if(Object.assign(V.shadow.camera,{left:-2.4,right:2.4,top:2.4,bottom:-2.4,near:1,far:30}),V.shadow.bias=-2e-4,V.shadow.normalBias=.025,y.add(V,V.target),V.castShadow){let be=c.shadow.getFrustum(),ht=V.shadow.getFrustum();for(let nt of[dt,Ga]){let Yt=nt.prototype.intersectsFrustum;nt.prototype.intersectsFrustum=function(Qn){return Qn===ht?this.userData.car===!0:(Qn!==be||this.userData.car!==!0)&&Yt.call(this,Qn)}}}let k=new ll(10799359,13154464,1.6);y.add(k),la("painting the town\u2026"),await new Promise(be=>setTimeout(be,10));let q=Kg();h1(q);let $=await p,Me=await x,Te=$g(q,m,$,Me);Te.houses&&L1(Me.types),$&&$.img.close(),Me&&Me.img.close();let Se=Jg(e);_1(Se.cells),Pe.uTuftV.value.set(...Se.tuftV);let G=Hg(q.textures(e),Se.tex,Te.textures(e)),J=Dg();J.update(e,0,0,0,0),la("painting the clouds\u2026"),await new Promise(be=>setTimeout(be,10)),b1(lt.has("leafd")?parseFloat(lt.get("leafd")):n==="high"?.72:.62);{let be=await u;if(be){ki.cells=be.cells.filter(Yt=>Yt.kind==="leaf"),be.tex.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy());let ht=td(be.tex);G.gleaf=ht.mat,G.gleafDepth=ht.depth;let nt=be.cells.filter(Yt=>Yt.kind==="blossom");nt.length&&(ki.bcells=nt,G.gblossom=td(be.tex,{blossom:!0}).mat)}}R1(),H1();let ve=[2.1,1.75,3.2],Ce=[1.42,1.47,1.74],te=[.95,1.05,1.8],ge=[.91,1.34,1.2],Fe=[1.88,1.28,2],Oe=[1.97,1.54,1.62],Ie=(be,ht,nt)=>({c:be,co:ht,sa:nt}),qe=Ie([...ve],[...te],[...Fe]),ie=Ie([3.8,1.6,3.2],[3.4,2,3],[7,4.6,2.6]),we=Ie([2.3,1.4,5.6],[.62,.85,4],[2.6,2.3,10]),Q=Ie([2.6,1.8,6],[5.5,3,8],[4,2.6,6]),ce=zs([[0,Q],[.2,cn(Q,we,.3)],[.245,cn(we,ie,.4)],[.3,qe],[.62,qe],[.7,ie],[.75,we],[.765,cn(we,Q,.25)],[.8,cn(we,Q,.55)],[.86,Q],[1,Q]]);{let be=await h;be&&(be.tex.anisotropy=Math.min(n==="high"?16:4,e.capabilities.getMaxAnisotropy()),mi.tex=be.tex,mi.uFieldK.value.set(1/be.tile[0],1/be.tile[1]),mi.uFieldM.value.set(...be.mean))}let ee=new yh;G.shore=Tv(n!=="high"),G.surf=Av(),ea.n=n==="high"?8:4,ea.drops=n==="high"?4:2,G.tetra=Og(Yl,n!=="high"),G.bark=kg(n!=="high");let fe=Ev(),U=kv(n,lt.has("grass")?lt.get("grass").split(",").map(Number):null);for(let be of U.meshes)y.add(be);let de=new qh(y,ee,G,fe),oe=K1();y.add(oe);let N=j1();y.add(N.group);let P=wv(n!=="high");y.add(P.mesh);let W=Wv();W.group.rotation.order="YXZ",y.add(W.group),W.group.traverse(be=>{be.userData.car=!0});let Z=Yv(G.glowTex);Z.group.forEach(be=>y.add(be));let ne=lt.get("aa")||(n==="high"?"msaa":n==="mid"?"fxaa":"none"),se=qv(e,y,M,{msaa:ne==="msaa"?n==="high"?4:2:0,fxaa:ne==="fxaa"});Pe.uReflTex.value=se.refl.rt.texture;let ye=await l,ue=ye?fv(ye,se):null;ue&&y.add(ue.mesh);let me=!ue||r==="both"?J1($1(e)):null;me&&y.add(me.group);let Ue=await a,Ke=Ue?pv(Ue,se,y.fog.color):null;Ke&&y.add(Ke.mesh);let De=new H,Ne=new H,ze=lt.get("refl")||"auto",rt=lt.has("backlit")?parseFloat(lt.get("backlit")):1,ut=[7.5,3,2.3],K=[1.7,1.15,1],Be=.7,xe={b:[...ut]},ke={c:[1,1,1]},Ge={c:[.78,.82,1.15]},Ee={c:[.52,.56,1.3]},it={c:[1.25,1.9,2.2]},st=zs([[0,it],[.2,cn(it,Ee,.3)],[.245,cn(Ee,Ge,.4)],[.3,ke],[.62,ke],[.7,Ge],[.75,Ee],[.765,cn(Ee,it,.25)],[.8,cn(Ee,it,.55)],[.86,it],[1,it]]),Wt=zs([[0,{b:[22,16,6]}],[.2,{b:[16,12,5.5]}],[.245,{b:[7,4.6,3]}],[.3,xe],[.62,xe],[.7,{b:[7.5,5,2.3]}],[.75,{b:[4.2,3,2.6]}],[.765,{b:[8,6.5,3.8]}],[.8,{b:[14,11,5]}],[.86,{b:[22,16,6]}],[1,{b:[22,16,6]}]]),Ft={d:[57,76,94],s:[82,96,114],m:[156,151,148],l:[207,197,189],fl:[246,251,254],fs:[160,205,240]},vi={d:[77,65,62],s:[93,73,69],m:[160,111,81],l:[209,153,107],fl:[250,223,177],fs:[182,164,157]},Ii={d:[42,33,47],s:[56,41,56],m:[74,52,68],l:[124,80,90],fl:[247,180,162],fs:[177,122,140]},Jh={d:[30,38,48],s:[42,52,64],m:[56,68,82],l:[84,98,116],fl:[133,172,202],fs:[70,105,140]},jh=["d","s","m","l","fl","fs"],Jl=[Pe.uTpD.value,Pe.uTpS.value,Pe.uTpM.value,Pe.uTpL.value,Pe.uTpFL.value,Pe.uTpFS.value],ca={s:[38,23,16],m:[54,34,25],l:[104,70,48],s2:[60,50,37],m2:[112,90,65],l2:[164,126,86]},Qh={s:[41,24,18],m:[51,29,20],l:[100,58,34],s2:[81,43,24],m2:[106,61,36],l2:[150,95,50]},jl={s:[26,18,22],m:[34,22,26],l:[72,42,42],s2:[55,32,35],m2:[80,45,45],l2:[132,70,50]},Ql={s:[14,15,22],m:[20,22,30],l:[40,48,66],s2:[30,32,38],m2:[42,44,52],l2:[70,78,95]},ws=["s","m","l","s2","m2","l2"],ua=[Pe.uBkS.value,Pe.uBkM.value,Pe.uBkL.value,Pe.uBkS2.value,Pe.uBkM2.value,Pe.uBkL2.value],ha=(be,ht,nt,Yt)=>zs([[0,be],[.2,cn(be,ht,.3)],[.245,cn(ht,Yt,.4)],[.3,nt],[.62,nt],[.7,Yt],[.75,ht],[.765,cn(ht,be,.25)],[.8,cn(ht,be,.55)],[.86,be],[1,be]]),ec=ha(Jh,Ii,Ft,vi),Wr=ha(Ql,jl,ca,Qh),fa=lt.has("lightson")?parseFloat(lt.get("lightson")):-1,ls=new H,tc=lt.has("haze")?parseFloat(lt.get("haze")):1,Gr=Wg();y.add(Gr.group);let cs=Gg();y.add(cs.group);let Ts=Nv(lt),da=Uv(),pa=Fv();y.add(da.mesh,pa.mesh);let Gs=Bv();y.add(Gs.mesh);let B=Ov();y.add(B.mesh);let j=new he,pe=new he,le=new xt,ae=zv();y.add(ae.mesh);let Ve=Ts.W.rain,Je=.4,We=5.5,Y={s:Math.max(100,parseFloat(lt.get("s"))||140),u:-1.65,uHome:-1.65,speed:0,mult:1,steer:0,lastInput:-1e9,tod:Zt(parseFloat(lt.get("t"))||.4,0,.999),todPaused:lt.has("freeze"),dist:0,spray:lt.has("nospray")?0:1,grass:1,pclouds:1,band:1,waves:1,shore:1,surf:1,tetra:1,bark:1,trunks:1,todpaint:1,cam:{low:1,eye:2,top:3,film:4}[lt.get("cam")]??(aa?4:0)},$e=!1;ue&&(ue.opening=["sakura","city"].includes(hn(Y.s))?"center":"flank"),la("building the road\u2026"),await new Promise(be=>setTimeout(be,10));let Mt=aa?620:de.ahead;de.ahead=260;let Tt=lt.has("detail")?parseFloat(lt.get("detail")):380,et=lt.has("farleaf")?parseFloat(lt.get("farleaf")):540;for(;de.update(Y.s,1e9););de.flush(),de.ahead=Mt;{la("preparing the light\u2026"),await new Promise(en=>setTimeout(en,10));let be=new un,ht=new bt;ht.setAttribute("position",new je([0,0,0,.01,0,0,0,.01,0],3)),ht.setAttribute("normal",new je([0,1,0,0,1,0,0,1,0],3)),ht.setAttribute("uv",new je([0,0,1,0,0,1],2)),ht.setAttribute("color",new je([1,1,1,1,1,1,1,1,1],3));let nt=new bt;nt.setAttribute("position",ht.attributes.position);let Yt=new Set([G.shore,G.surf,fe]),Qn=[G.color,G.atlas,G.foliage,G.leaf,G.lamp,G.sig,G.sodium,G.decal,G.pool,G.shore,G.surf,fe,G.tetra,G.bark,...G.gleaf?[G.gleaf]:[],...G.gblossom?[G.gblossom]:[]];for(let en=0;en<Ei.length;en++)Qn.push(Ll([Ei[en]])),Qn.push(Ll([Ei[en],Ei[(en+1)%Ei.length]]));for(let en of Qn){let Yi=new dt(Yt.has(en)?nt:ht,en);Yi.castShadow=Yi.receiveShadow=!Yt.has(en),Yi.frustumCulled=!1,(en===G.gleaf||en===G.gblossom)&&(Yi.customDepthMaterial=G.gleafDepth),en===G.atlas&&(Yi.customDepthMaterial=G.atlasDepth),be.add(Yi)}be.position.set(0,0,0),y.add(be),c.target.position.set(0,0,0),c.position.set(0,150,60);let Mn=[da.mesh,pa.mesh,Gs.mesh,B.mesh,cs.group,Gr.group,P.mesh].filter(en=>!en.visible);for(let en of Mn)en.visible=!0;U.warm(!0),e.setRenderTarget(se.composer.readBuffer),e.compile(y,M),e.render(y,M),e.setRenderTarget(null);for(let en of Mn)en.visible=!1;U.warm(!1),y.remove(be),ht.dispose(),nt.dispose(),se.bloom.enabled=se.refl.enabled=!0,se.composer.render(0),se.bloom.enabled=se.refl.enabled=!1}let tt={k:Math.ceil((Y.s-Fr)/Nr),phase:"idle",raise:1,decided:!1,t2:0},at={},ct={},ot={},Dn=lt.has("yaw")||lt.get("cam")==="top",Ze=new H,xn=new H,yt=new H,zn=!1,ai=new H,Li=new H,qs=kn("spd"),zt=kn("dist"),fn=kn("clock"),xi=kn("zone"),Bt=kn("start"),Xi=kn("hint"),Xt=null,ma=null,zd=0,Hd=0;function Zv(be){!$e||be===ma||(ma=be,xi.querySelector(".jp").textContent=Tl[be].jp,xi.querySelector(".en").textContent=Tl[be].en,xi.classList.add("on"),clearTimeout(zd),zd=setTimeout(()=>xi.classList.remove("on"),5200))}function ef(){if(!$e){if($e=!0,document.body.classList.remove("pre"),!lt.has("auto"))try{Xt=Xv(),Xt&&Xt.ac.resume()}catch{Xt=null}Bt.style.opacity=0,setTimeout(()=>Bt.remove(),1500),aa||(Xi.style.opacity=.75,setTimeout(()=>Xi.style.opacity=0,9e3))}}let li={};addEventListener("keydown",be=>{li[be.key]=!0,(be.key==="m"||be.key==="M")&&Wd(),(be.key==="t"||be.key==="T")&&Gd(),(be.key==="c"||be.key==="C")&&Xd(),(be.key==="r"||be.key==="R")&&Kd(),!$e&&(be.key===" "||be.key==="Enter")&&ef()}),addEventListener("keyup",be=>{li[be.key]=!1});let An=null;i.addEventListener("pointerdown",be=>{An={id:be.pointerId,x:be.clientX,y:be.clientY,sy:be.clientY,sc:Y.mult}});let Vd=be=>Zt(be.sc*Math.exp(-((be.y-be.sy)/innerHeight)*3.4),Je,We);addEventListener("pointermove",be=>{An&&be.pointerId===An.id&&(An.x=be.clientX,An.y=be.clientY,Y.mult=Vd(An))}),addEventListener("pointerup",()=>{An=null}),addEventListener("pointercancel",()=>{An=null}),i.addEventListener("touchstart",be=>{let ht=be.changedTouches[0];An={id:"touch",x:ht.clientX,y:ht.clientY,sy:ht.clientY,sc:Y.mult},be.preventDefault()},{passive:!1}),i.addEventListener("touchmove",be=>{if(!An)return;let ht=be.changedTouches[0];An.x=ht.clientX,An.y=ht.clientY,Y.mult=Vd(An),be.preventDefault()},{passive:!1}),i.addEventListener("touchend",()=>{An=null}),i.addEventListener("touchcancel",()=>{An=null});function Wd(){Xt&&(Xt.toggle(),kn("snd").style.opacity=Xt.muted?.4:1)}function Gd(){Y.todPaused=!Y.todPaused,kn("tim").style.opacity=Y.todPaused?.4:1}let tf=[0,1,2,4],qd={0:"\u25D0",1:"\u25D2",2:"\u25C9",4:"\u{1F3AC}"};function Xd(){Y.cam=tf[(tf.indexOf(Y.cam)+1)%tf.length],kn("cam").textContent=qd[Y.cam]||"\u25D0",Y.cam===4&&nf()}let Yd=["chase","side","road","crane","eye","side","road"],jt={type:"chase",t:0,dur:16,last:"",anchor:null,sideSign:1};function nf(){let be;do be=Yd[Math.floor(Math.random()*Yd.length)];while(be===jt.last);{let ht=Oi(Y.s+60);ht&&Math.abs(Y.s+60-ht.s)<rn+120&&(be=Math.random()<.6?"chase":"eye")}if(Object.assign(jt,{type:be,last:be,t:0,dur:13+Math.random()*8,sideSign:Math.random()<.5?1:-1}),be==="road"){let ht=Y.s+40+Math.random()*18,nt=Bn(ht,"rw"),Yt=Math.random()<.6?-1:1,Qn=Yt*(nt+(Yt<0?.9:1.3)),Mn=ee.at(ht,{}),en=Mn.y+_s(ht,Qn,Mn.y,nt);jt.anchor={x:Mn.x+Mn.rx*Qn,y:Math.max(en,Mn.y)+1.05,z:Mn.z+Mn.rz*Qn,s:ht}}zn=!1}let Zd={auto:"\u26C5",clear:"\u2600",cloudy:"\u2601",rain:"\u2602"};function Kd(){kn("wx").textContent=Zd[Ts.cycle()]}kn("wx").textContent=Zd[Ts.W.mode],kn("cam").textContent=qd[Y.cam]||"\u25D0",Y.cam===4&&nf(),kn("wx").onclick=be=>{be.stopPropagation(),Kd()},kn("snd").onclick=be=>{be.stopPropagation(),Wd()},kn("tim").onclick=be=>{be.stopPropagation(),Gd()},kn("cam").onclick=be=>{be.stopPropagation(),Xd()};let $d=0,Kv=be=>{let ht=performance.now();ht-$d<120||($d=ht,be.cancelable&&be.type!=="click"&&be.preventDefault(),ef())};for(let be of["touchstart","pointerdown","mousedown","click"])Bt.addEventListener(be,Kv,{passive:!1});let $v=()=>{Xt&&Xt.ac.state!=="running"&&Xt.ac.resume()};for(let be of["touchend","click","keydown"])addEventListener(be,$v,{passive:!0});document.addEventListener("visibilitychange",()=>{Xt&&(document.hidden?Xt.ac.suspend():Xt.ac.resume())});let ga=!1,Jd="",va=52,xa=0;function jd(){let be=innerWidth,ht=innerHeight,nt=be/ht,Yt=be+"x"+ht+"@"+s;Yt!==Jd&&(Jd=Yt,e.setPixelRatio(s),e.setSize(be,ht,!1),se.composer.setPixelRatio(s),se.composer.setSize(be,ht),M.aspect=nt,va=nt>=1?52:Zt(2*Math.atan(Math.tan(34*Math.PI/180)/nt)*180/Math.PI,52,80),M.fov=va+xa,M.updateProjectionMatrix(),se.grade.uniforms.uAspect.value=nt,se.grade.uniforms.uTexel.value.set(1/se.composer.readBuffer.width,1/se.composer.readBuffer.height),Pe.uReflRes.value.set(se.composer.readBuffer.width,se.composer.readBuffer.height),ov(e))}addEventListener("resize",()=>{ga=!0}),window.visualViewport&&visualViewport.addEventListener("resize",()=>{ga=!0}),jd();let nc=0;function Qd(be=!0){if(s>1.05)s=Math.max(1,s-.25),ga=!0;else if(z)z=!1,se.bloom.enabled=!1;else if(c.shadow.mapSize.x>1024)c.shadow.mapSize.set(1024,1024),F(),c.shadow.map&&(c.shadow.map.dispose(),c.shadow.map=null);else if(de.ahead>430)de.ahead=430;else return;if(nc++,be)try{localStorage.setItem("icd-q",String(nc))}catch{}}try{let be=parseInt(localStorage.getItem("icd-q")||"0");if(!lt.has("q"))for(let ht=0;ht<Math.min(be,6);ht++)Qd(!1);nc=Math.max(nc,be||0)}catch{}let ep=performance.now(),ci=0,tp=0,ya=0,_a=()=>1-re.night,sf=0,Qt=0,np=0,Et=lt.has("prof")?window.__prof={spikes:[],frames:0,sum:0,max:0,progs:0,geos:0,tex:0,last:null,gpu:0,gpuN:0,gpuSum:0,gpuMax:0,pend:[]}:null;Et&&(Et.gl=e.getContext(),Et.tq=Et.gl.getExtension("EXT_disjoint_timer_query_webgl2"));let yi={p:-1,a:new H,b:new H,next:5},Nt={lat:0,lon:0,road:0,jolt:0,kick:0,u:Y.u,vu:0,v:0,s:Y.s,yaw:0,brake:0,rk:NaN,rb:null},Jv=new he(3.6,2.8,1.8),jv=[-2.5335,-1.4665,1.4665,2.5335],ip=[1.12,-1.12],Qv=[-24.5,24.5];function sp(be){requestAnimationFrame(sp);let ht=performance.now();ga&&(ga=!1,jd());let nt=Math.min(.05,Math.max(0,(be-ep)/1e3));ep=be,ci+=nt,Y.steer=0,(li.ArrowLeft||li.a||li.A)&&(Y.steer=-1),(li.ArrowRight||li.d||li.D)&&(Y.steer=1),(li.ArrowUp||li.w||li.W)&&(Y.mult=Zt(Y.mult*Math.exp(nt*.9),Je,We)),(li.ArrowDown||li.s||li.S)&&(Y.mult=Zt(Y.mult*Math.exp(-nt*.9),Je,We)),An&&Math.abs(An.y-An.sy)<30&&(Y.steer=An.x<innerWidth/2?-1:1),Y.steer&&(Y.lastInput=be,Y.uHome=Y.u);let Yt=ko(tt.k);Y.s-Yt>24&&(tt.k++,Yt=ko(tt.k),Object.assign(tt,{phase:"idle",raise:1,decided:!1}));let Qn=Rl(Yt),Mn=Yt-Y.s;Qn&&!tt.decided&&Mn<150&&(tt.decided=!0,Mn>75&&$e&&Y.speed*Y.speed/2.5<Mn-14&&(lt.has("xing")||gn(tt.k,99)<.8)&&(tt.phase="warn",cs.start(Yt,gn(tt.k,7)<.5?1:-1,16))),tt.phase==="warn"?(tt.raise=Math.max(0,tt.raise-nt/6),cs.st.cleared&&(tt.phase="clear",tt.t2=0)):tt.phase==="clear"?(tt.raise=Math.max(0,tt.raise-nt/6),(tt.t2+=nt)>2.2&&(tt.phase="raise")):tt.phase==="raise"&&(tt.raise=Math.min(1,tt.raise+nt/5),tt.raise>=1&&(tt.phase="idle"));let en=tt.phase==="warn"||tt.phase==="clear"||tt.phase==="raise"&&tt.raise<.25,Yi=Bn(Y.s,"speed")*Y.mult*($e?1:.55);if(tt.phase!=="idle"&&tt.raise<.8&&Mn>0){let Ae=Mn-11.2,He=Ae>0?Math.sqrt(2*1.25*Ae):0;Yi=Math.min(Yi,He),Y.speed=Math.min(Y.speed,He)}lt.has("park")&&(Yi=0,Y.speed=0),Y.speed+=(Yi-Y.speed)*Math.min(1,nt*.5),Y.s+=Y.speed*nt,Y.dist+=Y.speed*nt;let ic=Bn(Y.s,"rw");Y.steer?Y.u=Zt(Y.u+Y.steer*nt*2.4,-ic+.85,ic-.85):be-Y.lastInput>3e3&&(Y.u+=(Zt(Y.uHome,-ic+.85,ic-.85)+Math.sin(ci/11)*.1-Y.u)*Math.min(1,nt*.9)),!Y.todPaused&&$e&&(Y.tod=(Y.tod+nt/480*(re.night>.5?1.7:1))%1),X1(Y.tod),Ts.update(nt);let Rn=Ts.W.ov,Es=Ts.W.rain;Z1(Rn,Es),Ve=Zt(Ve+(Es>.25?nt/18:-nt/120),0,1);let rp=performance.now();de.update(Y.s,$e?3.5:14);let op=performance.now();if(ee.at(Y.s,at),Math.abs(at.x-de.origin.x)>900||Math.abs(at.z-de.origin.z)>900){let Ae=Math.round(at.x)-de.origin.x,He=Math.round(at.z)-de.origin.z;de.setOrigin(Math.round(at.x),Math.round(at.z)),Ze.x-=Ae,Ze.z-=He,xn.x-=Ae,xn.z-=He,Z.shift&&Z.shift(Ae,He),ae.shift(Ae,He),Gs.shift(Ae,He)}let Zi=de.origin.x,Ki=de.origin.z,ex=(ee.at(Y.s+1.5,ot).y-ee.at(Y.s-1.5,ct).y)/3,tx=(ot.h-ct.h)/3;if(W.group.position.set(at.x+at.rx*Y.u-Zi,at.y+.01,at.z+at.rz*Y.u-Ki),nt>0){let Ae=Nt.vu+((Y.u-Nt.u)/nt-Nt.vu)*Math.min(1,nt*6),He=(Ae-Nt.vu)/nt;Nt.u=Y.u,Nt.vu=Ae,Nt.lat=He-Y.speed*Y.speed*tx,Nt.lon+=((Y.speed-Nt.v)/nt-Nt.lon)*Math.min(1,nt*8),Nt.v=Y.speed;let Xe=tt.phase!=="idle"&&Mn>0&&Mn<20&&Y.speed<.5;if(Nt.brake=Nt.lon<-.6||Xe?1:Nt.lon>-.3?0:Nt.brake,Nt.yaw=-Zt(Math.atan(Ae/Math.max(Y.speed,6))*.8,-.1,.1),Nt.road=.004*Math.sin(Y.s*.48)+.003*Math.sin(Y.s*.86+1.3),Nt.jolt=Nt.kick=0,Qn)for(let St=0;St<4;St++)for(let Ot=0;Ot<2;Ot++){let kt=Yt+jv[St]-ip[Ot];if(Nt.s<kt&&Y.s>=kt){let Ct=.05+Math.min(Y.speed,25)*.004;Nt.jolt+=Ct,Nt.kick+=Ot?Ct*.9:-Ct*.9,Xt&&Xt.bump(.25+Math.min(Y.speed,25)/50)}}{let St=Math.round((Y.s-zo)/Ur);St!==Nt.rk&&(Nt.rk=St,Nt.rb=Bi(Y.s));let Ot=Nt.rb;if(Ot)for(let kt=0;kt<2;kt++)for(let Ct=0;Ct<2;Ct++){let ui=Ot.s+Qv[kt]-ip[Ct];if(Nt.s<ui&&Y.s>=ui){let Nn=.035+Math.min(Y.speed,25)*.003;Nt.jolt+=Nn,Nt.kick+=Ct?Nn*.9:-Nn*.9,Xt&&Xt.bump(.2+Math.min(Y.speed,25)/60)}}}Nt.s=Y.s}W.group.rotation.set(-Math.atan(ex),at.h+Nt.yaw,0);let vr=Oi(Y.s);vr&&Math.abs(Y.s-vr.s)<700?(ee.at(vr.s-vn,ot),Pe.uTunA.value.set(ot.x-Zi,ot.y,ot.z-Ki),ee.at(vr.s+vn,ot),Pe.uTunB.value.set(ot.x-Zi,ot.y,ot.z-Ki),Pe.uTunR.value=Bn(vr.s,"rw")+1.7):(Pe.uTunA.value.set(0,-1e4,0),Pe.uTunB.value.set(0,-1e4,0));let rf=vr&&Math.abs(Y.s+1-vr.s)<vn-1.5?1:0;Qt+=(rf-Qt)*Math.min(1,nt*(rf?1.6:.7)),Pe.uCarPos.value.set(W.group.position.x+at.fx*1.7,W.group.position.y+.8,W.group.position.z+at.fz*1.7),Pe.uCarFwd.value.set(at.fx,-.05,at.fz).normalize(),Pe.uHead.value=rf,W.update(nt,Y.speed,Math.max(re.night,Qt),Es,Nt,np),Gr.update(Qn&&Mn>-24&&Mn<700?Eh(ee,Yt):null,de.origin,tt.raise,en,ci),cs.update(nt,ee,de.origin,Rt(.15,.8,re.night),Bn(Yt,"rw")+3.2);let of=[{back:6.8,up:2.4,ahead:22,lookY:2,cu:.85,lu:.5},{back:7,up:1.3,ahead:26,lookY:2.9,cu:.85,lu:.5,side:1.15},{back:-.6,up:1.55,ahead:30,lookY:2.3,cu:1,lu:.6},{back:.01,up:parseFloat(lt.get("top"))||45,ahead:0,lookY:0,cu:0,lu:0}];if(lt.has("rig")){let[Ae,He,Xe,St]=lt.get("rig").split(",").map(Number);Object.assign(of[0],{back:Ae,up:He,ahead:Xe,lookY:St})}let xr=new H,ba=6,ap=Y.cam===2;if(Y.cam===4){jt.t+=nt;{let Xe=Oi(Y.s+30);Xe&&Math.abs(Y.s+30-Xe.s)<rn+70&&jt.type!=="chase"&&jt.type!=="eye"&&(jt.type="chase",jt.t=0,jt.dur=20,zn=!1)}(jt.t>jt.dur+(jt.type==="road"?8:0)||jt.type==="road"&&jt.anchor&&Y.s>jt.anchor.s+24)&&nf();let Ae=W.group.position,He=jt.type;if(He==="chase"||He==="eye"){let Xe=of[He==="eye"?2:0];ap=He==="eye",ee.at(Y.s-Xe.back,ct),ee.at(Y.s+Xe.ahead,ot),yt.set(ct.x+ct.rx*Y.u*Xe.cu-Zi,ct.y+Xe.up,ct.z+ct.rz*Y.u*Xe.cu-Ki),xr.set(ot.x+ot.rx*Y.u*Xe.lu-Zi,ot.y+Xe.lookY,ot.z+ot.rz*Y.u*Xe.lu-Ki)}else if(He==="side"){ee.at(Y.s+1.5,ct);let Xe=Dt(Y.s),St=Xe.city+Xe.sakura>.5,Ot=Bn(Y.s,"rw"),kt=jt.sideSign>0?Ot+(St?1.45:3.4):-(Ot+1.5),Ct=ct.y+_s(Y.s+1.5,kt,ct.y,Ot);yt.set(ct.x+ct.rx*kt-Zi,Math.max(Ct+1.55,ct.y+1.25),ct.z+ct.rz*kt-Ki),xr.set(Ae.x+at.fx*2.5,Ae.y+.9,Ae.z+at.fz*2.5),ba=4}else if(He==="road"&&jt.anchor)yt.set(jt.anchor.x-Zi,jt.anchor.y,jt.anchor.z-Ki),xr.set(Ae.x,Ae.y+.85,Ae.z),ba=30;else{ee.at(Y.s-20,ct),ee.at(Y.s+34,ot);let Xe=14+Math.min(jt.t,20)*.35;yt.set(ct.x+ct.rx*Y.u*.4-Zi,ct.y+Xe,ct.z+ct.rz*Y.u*.4-Ki),xr.set(ot.x-Zi,ot.y+1,ot.z-Ki),ba=3}}else{let Ae=of[Y.cam];ee.at(Y.s-Ae.back,ct),ee.at(Y.s+Ae.ahead,ot);let He=Y.u*Ae.cu,Xe=He+(Ae.side||0);yt.set(ct.x+ct.rx*Xe-Zi,ct.y+Ae.up,ct.z+ct.rz*Xe-Ki),xr.set(ot.x+ot.rx*Y.u*Ae.lu-Zi,ot.y+Ae.lookY,ot.z+ot.rz*Y.u*Ae.lu-Ki)}W.group.visible=!ap,Y.cam===3?M.up.set(at.fx,0,at.fz):M.up.set(0,1,0),zn||(Ze.copy(yt),xn.copy(xr),zn=!0);let lp=1+Math.max(0,Y.speed-12)/12;Ze.lerp(yt,1-Math.exp(-nt*ba*lp)),xn.lerp(xr,1-Math.exp(-nt*Math.min(ba,8)*lp));{let Ae=Y.cam===3?0:Math.min(Zt((Y.speed-16)*.22,0,11),Math.max(0,84-va));xa+=(Ae-xa)*Math.min(1,nt*1.5),Math.abs(M.fov-(va+xa))>.02&&(M.fov=va+xa,M.updateProjectionMatrix())}M.position.copy(Ze),M.lookAt(xn),lt.has("yaw")&&M.rotateY(parseFloat(lt.get("yaw"))*Math.PI/180),lt.has("pitch")&&M.rotateX(parseFloat(lt.get("pitch"))*Math.PI/180),ai.set(at.fx,0,at.fz),Li.set(at.rx,0,at.rz);{let Ae=W.group.position,He=M.position.x-Ae.x,Xe=M.position.z-Ae.z,St=Y.cam===4&&jt.type!=="chase"&&jt.type!=="eye",Ot=Y.s+He*at.fx+Xe*at.fz-(St?10:0),kt=St||Dn?40:Math.tan(M.fov*Math.PI/360)*M.aspect*1.08;U.update(ee,Ot,Y.u+He*at.rx+Xe*at.rz,de.origin.x,de.origin.z,Bn(Y.s,"rw"),kt),Y.grass||U.hide()}let $t=Dt(Y.s),af=1+.25*re.bright*(1-Qt);c.color.copy(re.sunCol),c.intensity=re.sunI/af;{let Ae=re.lightDir;if(T.angleTo(Ae)>.1){let Nn=0;if($e&&!Y.todPaused)for(let ei=1;ei<=60&&!(Md(Y.tod+ei*.001,I).angleTo(Ae)>.09);ei++)Nn=ei;Md(Y.tod+Nn*.001,T),L=D=0}w.crossVectors(E,T).normalize(),_.crossVectors(T,w),S.set(W.group.position.x+at.fx*26,W.group.position.y,W.group.position.z+at.fz*26),c.target.position.copy(S),c.position.copy(S).addScaledVector(Ae,200);let He=2*d/c.shadow.mapSize.x,Xe=T.x/T.y-Ae.x/Ae.y,St=T.z/T.y-Ae.z/Ae.y;He!==O&&(O=He,L=D=0);{let Nn=Math.round(W.group.position.y);if(A===null)A=Nn;else if(Math.abs(W.group.position.y-A)>3){let ei=Nn-A;L-=ei*(Xe*w.x+St*w.z),D-=ei*(Xe*_.x+St*_.z),A=Nn}}let Ot=de.origin.x,kt=de.origin.z,Ct=S.dot(w)+Ot*w.x+kt*w.z-L,ui=S.dot(_)+Ot*_.x+kt*_.z-D;S.addScaledVector(w,Math.round(Ct/He)*He-Ct).addScaledVector(_,Math.round(ui/He)*He-ui),C.copy(S),R.copy(S).addScaledVector(T,200),v.set(1,Xe,0,-A*Xe,0,1,0,0,0,St,1,-A*St,0,0,0,1)}V.target.position.set(W.group.position.x,W.group.position.y+.9,W.group.position.z),V.position.copy(V.target.position).addScaledVector(re.lightDir,12),k.color.copy(re.hemiSky),k.groundColor.copy(re.hemiGround),k.intensity=re.hemiI/af;{let Ae=(1-re.night)*(1-Rn);if(Ae>.001){M.getWorldDirection(ls);let He=ls.x,Xe=ls.z,St=Math.hypot(He,Xe)||1,Ot=re.sunDir,kt=0;for(let ui=-2;ui<=2;ui++){let Nn=ui*.3,ei=Math.cos(Nn),yr=Math.sin(Nn),Xr=(He*ei-Xe*yr)/St,Yr=(He*yr+Xe*ei)/St,Ma=Math.max(0,Xr*Ot.x+Yr*Ot.z),Zr=Ma*Ma;kt+=Zr*Zr*Zr}let Ct=kt/5*(.1+.35*re.warm)*1.4*Ae*tc;re.fog.r+=re.sunCol.r*Ct,re.fog.g+=re.sunCol.g*Ct,re.fog.b+=re.sunCol.b*Ct}}y.fog.color.copy(re.fog);let cp=($t.city*.0022+$t.sakura*.0019+$t.coast*.0011+$t.country*.0014+$t.mountain*.0017+$t.snow*.0021)*(1+re.night*.25);y.fog.near=cp*(1+.55*Rn+.45*Es),y.fog.far=de.ahead*.92,Pe.uSkyHor.value.copy(re.horizon),Pe.uSkyZen.value.copy(re.zenith),Pe.uTime.value=ci,Pe.uWet.value=Ve*(1-$t.snow),Pe.uSakWet.value=Be,np=Math.max(Pe.uWet.value,Pe.uSakWet.value*$t.sakura)*(1-Qt);{let Ae=(Pe.uWet.value>.04||Pe.uSakWet.value*Math.max($t.sakura,_h(Y.s+120,"sakura"))>.04)&&n!=="low"&&Qt<.5&&ze!=="0";if(se.refl.enabled=Ae&&ze!=="taps",Pe.uReflOn.value=Ae&&ze!=="copy"?1:0,Ae){M.getWorldDirection(Ne),Ne.y=0,Ne.normalize(),De.copy(M.position).addScaledVector(Ne,1e4).project(M),Pe.uHorizon.value=De.y*.5+.5;let He=Math.max(.5,M.position.y-W.group.position.y);Pe.uReflK.value=Zt(1-2*He/(5+He),.05,1)}}Pe.uOrigin.value.set(de.origin.x,de.origin.z),Pe.uWind.value=1+.8*Es,Pe.uCloudSh.value=(1-Rn)*Rt(.04,.3,re.sunEl)*(1-re.night),Pe.uCloudSh.value>.001&&J.update(e,M.position.x,M.position.z,de.origin.x,de.origin.z);let _i=oe.material.uniforms;if(_i.uBright.value=re.bright,_i.uNight.value=re.night,_i.uWarm.value=re.warm,_i.uTime.value=ci,_i.uCirrusCol.value.copy(re.cLit).lerp(re.horizon,.25),_i.uCirrus.value=.6*(1-Rn)*(1-.65*Rt(.4,.9,re.night)),_i.uOvercast.value=Rn,_i.uMilky.value=Rt(.55,.95,re.night)*(1-Rn),re.night>.65&&Rn<.3&&yi.p<0&&(yi.next-=nt)<0){let Ae=Math.atan2(at.fx,at.fz)+(Math.random()-.5)*1.5,He=.45+Math.random()*.6,Xe=.22+Math.random()*.2,St=(Math.random()-.5)*.6,Ot=(kt,Ct)=>new H(Math.cos(kt)*Math.sin(Ct),Math.sin(kt),Math.cos(kt)*Math.cos(Ct));yi.a.copy(Ot(He,Ae)),yi.b.copy(Ot(He-Xe,Ae+St)),yi.p=0,yi.next=lt.has("meteors")?1:6+Math.random()*20}yi.p>=0&&(yi.p+=nt/.85,yi.p>1.3&&(yi.p=-1)),_i.uMetP.value=yi.p,_i.uMetA.value.copy(yi.a),_i.uMetB.value.copy(yi.b),_i.uDeckLit.value.copy(re.horizon).lerp(re.cLit,.35),_i.uDeckDark.value.copy(re.zenith).lerp(re.horizon,.25).multiplyScalar(.82),oe.position.copy(M.position);{let Ae=!!ue&&(Y.pclouds!==0||!me);ue&&(ue.mesh.visible=Ae,Ae&&ue.update(M,nt)),me&&(me.group.visible=!Ae,Ae||me.update(M.position,nt))}let nx=Ke&&Y.band!==0?Ke.update(M,cr(Y.s+200),Math.max(1,M.position.y-at.y+.45),y.fog.near,y.fog.far):0;Ke&&Y.band===0&&(Ke.mesh.visible=!1),N.update(M.position,Math.max($t.snow,Dt(Y.s+600).snow*.7),1-nx);let sc=0;for(let Ae of[-150,0,250,500,800])sc=Math.max(sc,Dt(Y.s+Ae).coast);P.mesh.visible=sc>.001,Vl.on=Y.todpaint,P.u.uWaves.value=Y.waves,P.u.uShoreW.value=Y.shore,G.surf.visible=Y.surf>0,G.tetra.visible=Y.tetra>0,G.bark.visible=Y.trunks>0,P.update(M.position,ci,cp*.8,Rt(0,.35,sc),se.grade.uniforms,ee,Y.s),fe.uniforms.uTime.value=ci,fe.uniforms.uFogD.value=y.fog.near,fe.uniforms.uNight.value=re.night,fe.uniforms.uSpecK.value=1-re.overcast*.85,Pe.uSunDir.value.copy(re.lightDir),Pe.uSunCol.value.copy(re.sunCol);let Di=Rt(.15,.8,re.night);G.atlas.emissiveIntensity=.1+Di*1.05,Pe.uBacklit.value=rt*1.6*(1-Rn)*(1-re.night)*Rt(0,.08,re.sunEl)*(1-Rt(.25,.55,re.sunEl))*(1-Qt),Pe.uGhShade.value.set(pt(.8,.3,re.bright),pt(.8,.85,re.bright),pt(.8,1.7,re.bright));{let Ae=st.at(re.t).rgb("c"),He=1-Rn;Pe.uGhTint.value.set(pt(1,Ae[0],He),pt(1,Ae[1],He),pt(1,Ae[2],He))}{let Ae=se.grade.uniforms;if(Pe.uTpK.value=Jo(),Pe.uTpK.value>0){let He=ec.at(re.t);for(let Xe=0;Xe<6;Xe++)He.ug(Ae,jh[Xe],Jl[Xe])}if(Pe.uBkK.value=Pe.uTpK.value*Y.bark,Pe.uBkK.value>0){let He=Wr.at(re.t);for(let Xe=0;Xe<6;Xe++)He.ug(Ae,ws[Xe],ua[Xe])}}if(mi.tex){let Ae=1-re.warm;for(let Ct=0;Ct<3;Ct++)qe.c[Ct]=pt(Ce[Ct],ve[Ct],Ae),qe.co[Ct]=pt(ge[Ct],te[Ct],Ae),qe.sa[Ct]=pt(Oe[Ct],Fe[Ct],Ae);let He=1-Rn,Xe=ce.at(re.t),St=Xe.rgb("c"),Ot=Xe.rgb("co"),kt=Xe.rgb("sa");mi.uFieldC.value.set(pt(Ce[0],St[0],He),pt(Ce[1],St[1],He),pt(Ce[2],St[2],He)),mi.uFieldCo.value.set(pt(ge[0],Ot[0],He),pt(ge[1],Ot[1],He),pt(ge[2],Ot[2],He)),mi.uFieldSa.value.set(pt(Oe[0],kt[0],He),pt(Oe[1],kt[1],He),pt(Oe[2],kt[2],He))}{for(let Xe=0;Xe<3;Xe++)xe.b[Xe]=pt(K[Xe],ut[Xe],1-re.warm);let Ae=Wt.at(re.t).rgb("b"),He=1-Rn;Pe.uBlShade.value.set(pt(K[0],Ae[0],He),pt(K[1],Ae[1],He),pt(K[2],Ae[2],He))}Pe.uLightsOn.value=fa>=0?fa:Math.max(Rt(.02,.75,re.night),.3*Rn),G.lamp.color.setRGB(.9,.86,.74).lerp(Jv,Di),G.pool.opacity=Di*.42*(1+.8*Ve);{let Ae=W.group.position,He=W.lamps,Xe=Math.max(Di,Qt),St=0,Ot=0,kt=0,Ct=-1e3,ui=0,Nn=0,ei=-1e3,yr=0,Xr=900,Yr=900;if(Xe>.01){let fp=Math.floor(Y.s/Vt);for(let lf=fp-1;lf<=fp+1;lf++){let oc=de.chunks.get(lf);if(!oc||!oc.lamps)continue;let Sa=oc.lamps,dp=oc.group.position;for(let Kr=0;Kr<Sa.length;Kr+=4){let cf=Sa[Kr]+dp.x,uf=Sa[Kr+1],hf=Sa[Kr+2]+dp.z,ff=(cf-Ae.x)**2+(uf-Ae.y)**2+(hf-Ae.z)**2,ac=Sa[Kr+3]/(1+.045*ff);ac>St?(Ot=St,Yr=Xr,Nn=kt,ei=Ct,yr=ui,St=ac,Xr=ff,kt=cf,Ct=uf,ui=hf):ac>Ot&&(Ot=ac,Yr=ff,Nn=cf,ei=uf,yr=hf)}}M.updateMatrixWorld()}let Ma=Xe*St*(1+.045*Xr)*(1-Rt(18,30,Math.sqrt(Xr))),Zr=Xe*Ot*(1+.045*Yr)*(1-Rt(18,30,Math.sqrt(Yr)));He[0].set(kt,Ct,ui,1).applyMatrix4(M.matrixWorldInverse).w=Ma,He[1].set(Nn,ei,yr,1).applyMatrix4(M.matrixWorldInverse).w=Zr,W.lampCol.setRGB(1,.8-.32*Qt,.52-.38*Qt),Gi.uLampW.value[0].set(kt,Ct,ui,Ma),Gi.uLampW.value[1].set(Nn,ei,yr,Zr),Gi.uLampCol.value.copy(W.lampCol),W.head.getWorldPosition(Gi.uHeadPos.value),W.head.target.getWorldPosition(ls),Gi.uHeadDir.value.copy(ls).sub(Gi.uHeadPos.value).normalize(),Gi.uHeadI.value=W.head.intensity/60}G.pool.visible=G.pool.opacity>.003,de.lod(Y.s,Tt,Di>.15,et),Pe.uNight.value=Di,se.bloom.strength=pt(.32,.55,Di),se.bloom.threshold=pt(1.35,.95,Di),se.bloom.radius=pt(.55,.35,Di);{let Ae=Math.max(Di,Qt,Rt(.25,.6,re.warm)*(1-Rn));se.bloom.enabled=z&&Ae>.02,se.bloom.strength*=Math.min(1,Ae*4)}e.toneMappingExposure=pt(1,1.15,Di)*(1+.35*Qt)*af,yt.copy(M.position).addScaledVector(re.sunDir,1e3).project(M);let Xs=se.grade.uniforms,ix=yt.z<1?1:0,sx=Math.max(Math.abs(yt.x),Math.abs(yt.y));Xs.uSun.value.set(yt.x*.5+.5,yt.y*.5+.5),Xs.uSunVis.value=ix*(1-Rt(1,1.9,sx))*Rt(-.02,.15,re.sunEl)*(1-re.night)*(1-Rn)*(1-Qt),Xs.uSat.value=1.22-.24*Rn,Xs.uVig.value=.55-.43*re.bright,Xs.uLo.value.set(-.014+.026*re.bright,0,.03),Xs.uDay.value=_a(),Xs.uWarm.value=re.warm,Xs.uTime.value=ci,da.update(M.position,ci,Es*(1-Qt)*(1-$t.snow),_a());{let Ae=Oi(Y.s+190),He=($t.city+$t.country+$t.coast)*(1-Rn)*(1-Ve)*Rt(.6,.9,re.sunEl)*(Y.mirage??1)*(Ae&&Math.abs(Y.s+190-Ae.s)<330?0:1);B.update(ee,Y.s,de.origin.x,de.origin.z,Bn(Y.s+150,"rw"),He,ci,re.horizon)}{let Ae=Zt($t.snow+$t.mountain*.6*Math.max(re.night,1-Rt(.27,.36,Y.tod)),0,1)*(1-Qt);j.copy(re.fog).multiplyScalar(.92),pe.copy(re.sunCol).multiplyScalar(Math.min(1,re.sunI/3)*(1-Rn)*.6);let He=Math.cos(W.group.rotation.y),Xe=Math.sin(W.group.rotation.y),St=W.group.position;le.set(St.x-1.75*Xe,St.y+.95,St.z-1.75*He,Math.max(re.night,Qt)*(.5+1.2*Nt.brake)),Gs.update(nt,W.group,Y.speed,Pe.uWet.value*(1-Qt),$t.snow*(1-Qt),Ae,j,pe,le,M.position,Y.spray)}pa.update(M.position,ci,$t.snow*(.3+.7*Rn)*(1-Qt),_a()),ae.setFog(y.fog.near),ae.update(nt,ci,M.position,ai,Li,$t,_a(),Es,W.group.position);let rx=performance.now();Z.update(nt,ci,M.position,ai,Li,$t.sakura*(1-Qt),at.y,Di,($t.country+$t.sakura*.4)*(1-Es)*(1-Qt),$t.mountain*(1-Qt));let ox=performance.now();if(Xt){ee.at(Yt,ot);let Ae=Math.hypot(ot.x-de.origin.x-M.position.x,ot.z-de.origin.z-M.position.z),He=cs.st.active?cs.group.position.distanceTo(M.position):1e9,Xe=Y.speed/15;Xt.update(Xe<1.5?Xe:1.5+(Xe-1.5)*.4,$t,_a(),{rush:Zt((Y.speed-25)/40,0,1),bell:en?Math.pow(Zt(1-Ae/260,0,1),1.5):0,train:Math.pow(Zt(1-He/230,0,1),2),rain:Es*(1-Qt)*(1-$t.snow),wetRoad:Pe.uWet.value*(1-Qt),speed:Y.speed,load:Zt(Nt.lon/3,0,1),roof:Y.cam!==2,tunnel:Qt,water:(()=>{let St=Bi(Y.s);return Math.max(St?1-Rt(12,150,Math.abs(Y.s-St.s)):0,$t.mountain*.45)})(),dusk:re.warm*(Y.tod>.5?1:.3)})}Zv(hn(Y.s+40)),Et&&(e.info.autoReset=!1,e.info.reset());let rc=null;Et&&Et.tq&&(rc=Et.gl.createQuery(),Et.gl.beginQuery(Et.tq.TIME_ELAPSED_EXT,rc));let up=performance.now();se.composer.render(nt);let hp=performance.now();if(rc){let Ae=Et.gl;for(Ae.endQuery(Et.tq.TIME_ELAPSED_EXT),Et.pend.push(rc);Et.pend.length&&Ae.getQueryParameter(Et.pend[0],Ae.QUERY_RESULT_AVAILABLE);){let He=Et.pend.shift(),Xe=Ae.getQueryParameter(He,Ae.QUERY_RESULT);Ae.deleteQuery(He),Ae.getParameter(Et.tq.GPU_DISJOINT_EXT)||(Et.gpu=Xe/1e6,Et.gpuN++,Et.gpuSum+=Et.gpu,Et.gpu>Et.gpuMax&&(Et.gpuMax=Et.gpu))}}let qr=window.__pb||(window.__pb={world:0,parts:0,render:0});if(qr.world=qr.world*.95+(op-rp)*.05,qr.parts=qr.parts*.95+(ox-rx)*.05,qr.render=qr.render*.95+(hp-up)*.05,sf=sf*.95+(performance.now()-ht)*.05,window.__ft=sf,Et){let Ae=e.info,He=performance.now()-ht,Xe={t:+ci.toFixed(2),s:Math.round(Y.s),total:+He.toFixed(1),world:+(op-rp).toFixed(1),render:+(hp-up).toFixed(1),gpu:+(Et.gpu||0).toFixed(1),progs:Ae.programs.length-Et.progs,geos:Ae.memory.geometries-Et.geos,tex:Ae.memory.textures-Et.tex,calls:Ae.render.calls,tris:Ae.render.triangles};Xe.progs>0&&$e&&(Xe.newProgs=Ae.programs.slice(-Xe.progs).map(St=>(St.name||"")+":"+String(St.cacheKey).slice(0,60))),Et.progs=Ae.programs.length,Et.geos=Ae.memory.geometries,Et.tex=Ae.memory.textures,Et.frames++,Et.sum+=He,He>Et.max&&(Et.max=He),He>12&&$e&&Et.spikes.push(Xe),Et.last=Xe}if((Hd+=nt)>.25){Hd=0,qs.textContent=Math.round(Y.speed*3.6),zt.textContent=(Y.dist/1e3).toFixed(1);let Ae=Math.floor(Y.tod*1440);fn.textContent=`${String(Math.floor(Ae/60)).padStart(2,"0")}:${String(Ae%60).padStart(2,"0")}`}tp++,$e&&tp>150&&nt>.03?ya+=nt:ya=Math.max(0,ya-nt*.5),ya>3&&!lt.has("q")&&(ya=0,Qd())}window.__dbg={renderer:e,st:Y,scene:y,camera:M,world:de,TOD:re,KEYS:Zo,X:tt,train:cs,weather:Ts,U:Pe,birds:ae,cine:jt,post:se,car:W,sun:c,M:G,clouds:me,pclouds:ue,band:Ke,sky:oe,mountains:N,shadowDir:T,CM:Nt,spray:Gs,grass:U,sea:P,get audio(){return Xt}},la(""),Bt.classList.add("ready"),lt.has("auto")&&ef(),requestAnimationFrame(sp)}gw().catch(i=>{console.error(i),la("Something went wrong: "+i.message)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
